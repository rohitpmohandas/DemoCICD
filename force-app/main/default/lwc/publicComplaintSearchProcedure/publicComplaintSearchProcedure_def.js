export const OMNIDEF = {"userTimeZone":-420,"userProfile":"System Administrator","userName":"contributor@gps.ido","userId":"005am000001A8FEQAE","userCurrencyCode":"USD","timeStamp":"2022-07-13T19:20:15.985Z","sOmniScriptId":"0jNam0000003siRUAQ","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"ttlMinutes":5,"queueableChainableHeapSizeLimit":6,"queueableChainableCpuLimit":40000,"queueableChainableQueriesLimit":120,"additionalChainableResponse":{},"chainableActualTimeLimit":null,"chainableSoslQueriesLimit":null,"chainableQueryRowsLimit":null,"chainableDMLRowsLimit":null,"chainableHeapSizeLimit":null,"chainableCpuLimit":2000,"chainableDMLStatementsLimit":null,"chainableQueriesLimit":50,"rollbackOnError":false,"nameColumn":"","description":"","labelPlural":"","labelSingular":"","relationshipFieldsMap":[],"columnsPropertyMap":[],"includeAllActionsInResponse":false,"trackingCustomData":{},"linkToExternalObject":""},"prefillJSON":"{}","lwcId":"0ab3145b-5041-e6ae-7fdd-8cb5330461de","labelMap":{"DRGetIndividualAccounts":"IndividualAccount:DRGetIndividualAccounts","DRGetBusinessAccounts":"BusinessAccount:DRGetBusinessAccounts","ResponseAction3":"ResponseAction3","MergeAccounts":"MergeAccounts","IndividualAccount":"IndividualAccount","BusinessAccount":"BusinessAccount"},"labelKeyMap":{},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"Conditional Block","propSetMap":{"disOnTplt":false,"label":"ConditionalBlock1","show":null,"isIfElseBlock":false,"executionConditionalFormula":"(%searchType% = 1)","aggElements":{}},"offSet":0,"name":"BusinessAccount","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"DataRaptor Extract Action","rootIndex":0,"response":null,"propSetMap":{"disOnTplt":false,"label":"DataRaptorExtractAction1","show":null,"actionMessage":"","chainOnStep":false,"dataRaptor Input Parameters":[{"element":"searchTerm","inputParam":"searchTerm"}],"bundle":"DRGetBusinessAccounts","sendJSONNode":"","sendJSONPath":"","responseJSONNode":"","responseJSONPath":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"sendOnlyAdditionalInput":false,"failureResponse":{},"additionalOutput":{},"additionalInput":{},"useFormulas":true,"failOnStepError":true,"failureConditionalFormula":"","executionConditionalFormula":""},"name":"DRGetBusinessAccounts","level":1,"JSONPath":"BusinessAccount:DRGetBusinessAccounts","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bDataRaptorExtractAction":true,"lwcId":"lwc00-0"}],"bHasAttachment":false}],"bAccordionOpen":true,"bAccordionActive":true,"JSONPath":"BusinessAccount","lwcId":"lwc0"},{"type":"Conditional Block","propSetMap":{"disOnTplt":false,"label":"ConditionalBlock2","show":null,"isIfElseBlock":false,"executionConditionalFormula":"(%searchType% = 2)","aggElements":{}},"offSet":0,"name":"IndividualAccount","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"DataRaptor Extract Action","rootIndex":1,"response":null,"propSetMap":{"disOnTplt":false,"label":"DataRaptorExtractAction1","show":null,"actionMessage":"","chainOnStep":false,"dataRaptor Input Parameters":[{"element":"searchTerm","inputParam":"searchTerm"}],"bundle":"DRGetIndividualAccounts","sendJSONNode":"","sendJSONPath":"","responseJSONNode":"","responseJSONPath":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"sendOnlyAdditionalInput":false,"failureResponse":{},"additionalOutput":{},"additionalInput":{},"useFormulas":true,"failOnStepError":true,"failureConditionalFormula":"","executionConditionalFormula":""},"name":"DRGetIndividualAccounts","level":1,"JSONPath":"IndividualAccount:DRGetIndividualAccounts","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bDataRaptorExtractAction":true,"lwcId":"lwc10-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"JSONPath":"IndividualAccount","lwcId":"lwc1"},{"type":"List Merge Action","propSetMap":{"disOnTplt":false,"label":"ListAction1","show":null,"additionalChainableResponse":{},"actionMessage":"","chainOnStep":false,"updateFieldValue":{},"dynamicOutputFields":"","filterListFormula":"","mergeListsOrder":["gridColumns","DRGetBusinessAccounts","DRGetIndividualAccounts"],"sortInDescendingOrder":false,"sortBy":[],"primaryListKey":"","hasPrimary":false,"allowMergeNulls":true,"mergeFields":[],"advancedMergeMap":[],"advancedMerge":false,"sendJSONNode":"","sendJSONPath":"","responseJSONNode":"","responseJSONPath":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"sendOnlyAdditionalInput":false,"failureResponse":{},"additionalOutput":{},"additionalInput":{},"useFormulas":true,"failOnStepError":true,"failureConditionalFormula":"","executionConditionalFormula":"","aggElements":{}},"offSet":0,"name":"MergeAccounts","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"JSONPath":"MergeAccounts","lwcId":"lwc2"},{"type":"Response Action","propSetMap":{"disOnTplt":false,"label":"ResponseAction3","show":null,"vlcResponseHeaders":{},"responseDefaultData":{},"sendJSONNode":"","sendJSONPath":"","responseJSONNode":"","responseJSONPath":"","responseFormat":"JSON","returnFullDataJSON":false,"returnOnlyAdditionalOutput":true,"additionalOutput":{"accountList":"%MergeAccounts%"},"useFormulas":true,"executionConditionalFormula":"","aggElements":{}},"offSet":0,"name":"ResponseAction3","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"JSONPath":"ResponseAction3","lwcId":"lwc3"}],"bReusable":false,"bpVersion":1,"bpType":"PublicComplaint","bpSubType":"Search","bpLang":"Procedure","bHasAttachment":false,"lwcVarMap":{}};