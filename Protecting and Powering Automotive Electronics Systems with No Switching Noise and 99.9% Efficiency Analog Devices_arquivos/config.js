if(typeof _cls_config === "undefined") _cls_config = {};

/* Per Ria's request */
_cls_config.enabledByChance = 1;
_cls_config.domIncludeCSSSelector=true;

/* BEGIN ajax */
_cls_config.ajaxRecordMetadata="never";
_cls_config.ajaxRecordRequestBody="never";
_cls_config.ajaxRecordRequestHeaders="and(tld,statusgte(400))";
_cls_config.ajaxRecordResponseBody="never";
_cls_config.ajaxRecordResponseHeaders="and(tld,statusgte(400))";
_cls_config.interceptAjax=true;
_cls_config.ajaxRecordStats="always";
/* END ajax */

//188044
_cls_config.captureGlobalObjectsOnSegmentChange=true;

/*BEGIN MASKING*/

//Value Masking (INPUT)
_cls_config.valueMaskingMode = "whitelist";
_cls_config.maskWhitelistValueById = []; //Everything is masked EXCEPT FOR listed inputs that match an Id , This is only applied when valueMaskingMode is set to 'whitelist'
_cls_config.maskBlacklistValueById = []; //Only listed inputs with a matching Id are masked , This is only applied when valueMaskingMode is set to 'blacklist'.
_cls_config.maskWhitelistValueByClass = []; //Everything is masked EXCEPT FORlisted inputs that match a class , This is only applied when valueMaskingMode is set to 'whitelist'.
_cls_config.maskBlacklistValueByClass = ["sessioncamexclude"]; //Only listed inputs with a matching Class are masked , This is only applied when valueMaskingMode is set to 'blacklist'.
_cls_config.valueWhitelistMaskSimpleSelector = []; //EVERYTHING is masked EXCEPT FOR this list of selectors , This is only applied when valueMaskingMode is set to 'whitelist'.
_cls_config.valueBlacklistMaskSimpleSelector = []; //Only listed inputs with a matching selector are masked. , This is only applied when valueMaskingMode is set to 'blacklist'.

//DOM Masking
_cls_config.domMaskingMode = "blacklist";
_cls_config.domWhitelistMaskContentById = []; //ALL text is masked EXCEPT FOR this list of Ids. This supports a single wildcard, such as *. This is only applied when domMaskingMode is set to 'whitelist'.
_cls_config.domBlacklistMaskContentById = []; //ONLY text matched to this list of Ids is masked. This supports a single wildcard, such as *. This is only applied when domMaskingMode is set to 'blacklist'.
_cls_config.domWhitelistMaskContentByClass = []; //ALL text is masked EXCEPT FOR this list of classes. This supports a single wildcard, such as *. This is only applied when domMaskingMode is set to 'whitelist'.
_cls_config.domBlacklistMaskContentByClass = ["sessioncamhidetext", "sessioncamexclude"]; //ONLY text matched to this list of classes is masked. This supports a single wildcard, such as *. This is only applied when domMaskingMode is set to 'blacklist'.
_cls_config.domWhitelistMaskSimpleSelector = []; //ALL text is masked, EXCEPT FORthe listed selectors. This is only applied when domMaskingMode is set to 'whitelist'.
_cls_config.domBlacklistMaskSimpleSelector = []; //ONLY text matched to this list of selectors is masked.This is only applied when domMaskingMode is set to 'blacklist'.

/*END MASKING*/

/* OOTB */
_cls_config.iframesAutoInject=true;
_cls_config.recordMouseMoves=true; 
_cls_config.recordScrolls=true;
_cls_config.recordHovers=true;
_cls_config.clientAttributesEnabled=true;
_cls_config.clientAttributeMaxLength=500;
_cls_config.collectStruggles=true;
/* END OF OOTB*/

/* BEGIN page performance */
_cls_config.resourceTimingRecordEnabled=true;
_cls_config.resourceTimingRecordEnabledByChance=0.05;
_cls_config.webVitalsRecordEnabled=true;
/* END page performance */
 
/* BEGIN exposure */
_cls_config.recordScrollReach=true;
/* END exposure */
 
/* BEGIN form tracking IM */
_cls_config.domFormAnalysisReporting=true;
_cls_config.domFormValidationTracking=true;
/* END form tracking IM */
 
/* BEGIN window property */
_cls_config.pageAttributesEnabled=true;
/* END window property */

/* BEGIN V7 detector requirements */
_cls_config.reportURI = "https://c2001.report.gbss.io/5ny045gc/glassbox/reporting/64155f70-7f25-739f-5b74-49be27a176db/cls_report";
_cls_config.initDetectorOnInteractive = true;
_cls_config.detectorPath = 'https://cdn.gbqofs.com/sv/c/';
/* End V7 detector requrements */