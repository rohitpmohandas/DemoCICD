export const OMNIDEF = {"userTimeZone":-420,"userProfile":"System Administrator","userName":"contributor@gps.ido","userId":"005am000001A8FEQAE","userCurrencyCode":"USD","timeStamp":"2022-07-13T19:18:29.033Z","sOmniScriptId":"0jNam0000003siQUAY","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"mockResponseMap":{},"ttlMinutes":5,"queueableChainableHeapSizeLimit":6,"queueableChainableCpuLimit":40000,"queueableChainableQueriesLimit":120,"additionalChainableResponse":{},"chainableActualTimeLimit":null,"chainableSoslQueriesLimit":null,"chainableQueryRowsLimit":null,"chainableDMLRowsLimit":null,"chainableHeapSizeLimit":null,"chainableCpuLimit":2000,"chainableDMLStatementsLimit":null,"chainableQueriesLimit":50,"rollbackOnError":false,"nameColumn":"","description":"","labelPlural":"","labelSingular":"","relationshipFieldsMap":[],"columnsPropertyMap":[],"includeAllActionsInResponse":false,"trackingCustomData":{},"linkToExternalObject":""},"prefillJSON":"{}","lwcId":"9fb64312-ba4f-2730-1366-fc89b6022298","labelMap":{"DRGetLicense":"LicenseNumber:DRGetLicense","DRGetIndividualLicenses":"IndividualLicense:DRGetIndividualLicenses","DRGetBusinessLicenses":"BusinessLicense:DRGetBusinessLicenses","ReturnLicenses":"ReturnLicenses","MergeLicenses":"MergeLicenses","LicenseNumber":"LicenseNumber","IndividualLicense":"IndividualLicense","BusinessLicense":"BusinessLicense"},"labelKeyMap":{},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"Conditional Block","propSetMap":{"disOnTplt":false,"label":"ConditionalBlock1","show":null,"isIfElseBlock":false,"executionConditionalFormula":"(%searchType% = 1)","aggElements":{}},"offSet":0,"name":"BusinessLicense","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"DataRaptor Extract Action","rootIndex":0,"response":null,"propSetMap":{"disOnTplt":false,"label":"DataRaptorExtractAction1","show":null,"ignoreCache":false,"actionMessage":"","chainOnStep":false,"dataRaptor Input Parameters":[{"element":"searchTerm","inputParam":"searchTerm"}],"bundle":"DRGetBusinessAccounts","sendJSONNode":"","sendJSONPath":"","responseJSONNode":"","responseJSONPath":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"sendOnlyAdditionalInput":false,"failureResponse":{},"additionalOutput":{},"additionalInput":{},"useFormulas":true,"failOnStepError":true,"failureConditionalFormula":"","executionConditionalFormula":""},"name":"DRGetBusinessLicenses","level":1,"JSONPath":"BusinessLicense:DRGetBusinessLicenses","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bDataRaptorExtractAction":true,"lwcId":"lwc00-0"}],"bHasAttachment":false}],"bAccordionOpen":true,"bAccordionActive":true,"JSONPath":"BusinessLicense","lwcId":"lwc0"},{"type":"Conditional Block","propSetMap":{"disOnTplt":false,"label":"ConditionalBlock2","show":null,"isIfElseBlock":false,"executionConditionalFormula":"(%searchType% = 2)","aggElements":{}},"offSet":0,"name":"IndividualLicense","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"DataRaptor Extract Action","rootIndex":1,"response":null,"propSetMap":{"disOnTplt":false,"label":"DataRaptorExtractAction2","show":null,"actionMessage":"","chainOnStep":false,"dataRaptor Input Parameters":[{"element":"searchTerm","inputParam":"searchTerm"}],"bundle":"DRGetIndividualAccounts","sendJSONNode":"","sendJSONPath":"","responseJSONNode":"","responseJSONPath":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"sendOnlyAdditionalInput":false,"failureResponse":{},"additionalOutput":{},"additionalInput":{},"useFormulas":true,"failOnStepError":true,"failureConditionalFormula":"","executionConditionalFormula":""},"name":"DRGetIndividualLicenses","level":1,"JSONPath":"IndividualLicense:DRGetIndividualLicenses","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bDataRaptorExtractAction":true,"lwcId":"lwc10-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"JSONPath":"IndividualLicense","lwcId":"lwc1"},{"type":"Conditional Block","propSetMap":{"disOnTplt":false,"label":"ConditionalBlock3","show":null,"isIfElseBlock":false,"executionConditionalFormula":"(%searchType% = 3)","aggElements":{}},"offSet":0,"name":"LicenseNumber","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"DataRaptor Extract Action","rootIndex":2,"response":null,"propSetMap":{"disOnTplt":false,"label":"DataRaptorExtractAction3","show":null,"actionMessage":"","chainOnStep":false,"dataRaptor Input Parameters":[{"element":"searchTerm","inputParam":"searchTerm"}],"bundle":"DRGetLicenseByNo","sendJSONNode":"","sendJSONPath":"","responseJSONNode":"","responseJSONPath":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"sendOnlyAdditionalInput":false,"failureResponse":{},"additionalOutput":{},"additionalInput":{},"useFormulas":true,"failOnStepError":true,"failureConditionalFormula":"","executionConditionalFormula":""},"name":"DRGetLicense","level":1,"JSONPath":"LicenseNumber:DRGetLicense","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bDataRaptorExtractAction":true,"lwcId":"lwc20-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"JSONPath":"LicenseNumber","lwcId":"lwc2"},{"type":"List Merge Action","propSetMap":{"disOnTplt":false,"label":"ListAction1","show":null,"additionalChainableResponse":{},"actionMessage":"","chainOnStep":false,"updateFieldValue":{},"dynamicOutputFields":"","filterListFormula":"","mergeListsOrder":["DRGetBusinessLicenses","DRGetIndividualLicenses","DRGetLicense"],"sortInDescendingOrder":false,"sortBy":[],"primaryListKey":"","hasPrimary":false,"allowMergeNulls":true,"mergeFields":[],"advancedMergeMap":[],"advancedMerge":false,"sendJSONNode":"","sendJSONPath":"","responseJSONNode":"","responseJSONPath":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"sendOnlyAdditionalInput":false,"failureResponse":{},"additionalOutput":{},"additionalInput":{},"useFormulas":true,"failOnStepError":true,"failureConditionalFormula":"","executionConditionalFormula":"","aggElements":{}},"offSet":0,"name":"MergeLicenses","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"JSONPath":"MergeLicenses","lwcId":"lwc3"},{"type":"Response Action","propSetMap":{"disOnTplt":false,"label":"ResponseAction1","show":null,"vlcResponseHeaders":{},"responseDefaultData":{},"sendJSONNode":"","sendJSONPath":"","responseJSONNode":"","responseJSONPath":"","responseFormat":"JSON","returnFullDataJSON":false,"returnOnlyAdditionalOutput":true,"additionalOutput":{"licenseList":"%MergeLicenses%"},"useFormulas":true,"executionConditionalFormula":"","aggElements":{}},"offSet":0,"name":"ReturnLicenses","level":0,"indexInParent":4,"bHasAttachment":false,"bEmbed":false,"JSONPath":"ReturnLicenses","lwcId":"lwc4"}],"bReusable":false,"bpVersion":4,"bpType":"License","bpSubType":"Search","bpLang":"Procedure","bHasAttachment":false,"lwcVarMap":{}};