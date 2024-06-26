public class TrailTrackerToolController {
    
    public static MetadataService.MetadataPort createService() {
        MetadataService.MetadataPort service = new MetadataService.MetadataPort();
        service.SessionHeader = new MetadataService.SessionHeader_element();
        service.SessionHeader.sessionId = UserInfo.getSessionId();
        return service;
    }
    
    @RemoteAction
    public static DeploymentStatus deployTrailTracker(){
        try{
            MetadataService.InstalledPackage trailheadapp = new MetadataService.InstalledPackage();
            trailheadapp.versionNumber = '1.92';
            trailheadapp.fullName = 'trailheadapp';
            
            MetadataService.MetadataPort service = createService();
            List<MetadataService.SaveResult> results = service.createMetadata(new MetadataService.Metadata[] { trailheadapp });
            return new DeploymentStatus(true, JSON.serialize(results[0]));
        } catch(Exception e){
            return new DeploymentStatus(false, e.getMessage());
        }
    }
    
    @RemoteAction
    public static Response getTrailheadData(){
        try {
            StaticResource trackerData = [Select SystemModstamp From StaticResource Where Name = 'trailtrackerdata' limit 1];
            String modStamp = String.valueOf(trackerData.SystemModstamp.getTime());
            String badgesUrl = '/resource/'+modStamp+'/trailtrackerdata/badges.txt';
            String usersBadgeUrl = '/resource/'+modStamp+'/trailtrackerdata/user_badges.txt';
            PageReference badgesCSVPage = new PageReference(badgesUrl);
            PageReference userBadgesCSVPage = new PageReference(usersBadgeUrl);
            String badgesCSV = badgesCSVPage.getContent().toString();
            String userBadgesCSV = userBadgesCSVPage.getContent().toString();
            
            Map<String,Object> data = new Map<String,Object>();
            data.put('badges', badgesCSV);
            data.put('userBadges', userBadgesCSV);
            
            Response response = new Response();
            response.success = true;
            response.data = data;
            return response;
        } catch(Exception e){
            return new Response(false);
        }
    }
    
    @RemoteAction
    public static Response deployTrailheadUserMetadata(){
        try{
            StaticResource metadata = [SELECT Body
                                       FROM StaticResource 
                                       WHERE Name = 'trailheadUserMetadata'
                                       LIMIT 1];
            
            String zipData = EncodingUtil.base64Encode(metadata.Body);
            
            MetadataService.MetadataPort service = createService();
            MetadataService.DeployOptions deployOptions = new MetadataService.DeployOptions();
            deployOptions.allowMissingFiles = false;
            deployOptions.autoUpdatePackage = true;
            deployOptions.checkOnly = false;
            deployOptions.ignoreWarnings = false;
            deployOptions.performRetrieve = false;
            deployOptions.purgeOnDelete = false;
            deployOptions.rollbackOnError = true;
            deployOptions.testLevel = 'NoTestRun';
            deployOptions.singlePackage = true;		
            
            MetadataService.AsyncResult result = service.deploy(zipData, DeployOptions);
            
            System.debug(result);
            
            Response response = new Response();
            response.success = true;
            return response;
        } catch(Exception e){
            return new Response(false);
        }
    }
    
    public class DeploymentStatus {
        public Boolean success {get;set;}
        public String message {get;set;}
        
        public DeploymentStatus(Boolean s){
            this.success = s;
        }
        
        public DeploymentStatus(Boolean s, String m){
            this.success = s;
            this.message = m;
        }
    }
    
    public class Response {
        public Boolean success {get;set;}
        public String message {get;set;}
        public Map<String,Object> data {get;set;}
        
        public Response(){}
        
        public Response(Boolean s){
            this.success = s;
        }
        public Response(Boolean s, String m){
            this.success = s;
            this.message = m;
        }
    }
}