"require"in window&&require("discourse/lib/theme-settings-store").registerSettings(38,{emoji_icon:"👩🏽‍💻",disable_at_trust_level:3,sensitivity:.5,min_post_length_to_check:50,max_post_length_to_check:-1,include_html:!0}),"define"in window&&define("discourse/theme-38/discourse/components/modal/ucd-warning",["exports","@ember/component","@glimmer/component","@ember/object","@ember/service","@ember/template","pretty-text/sanitizer","discourse/lib/text","I18n","../../lib/emoji-diversity","@ember/template-factory"],(function(e,t,i,n,o,r,s,l,a,c,d){"use strict"
var u,m
function g(e,t,i,n,o){var r={}
return Object.keys(n).forEach((function(e){r[e]=n[e]})),r.enumerable=!!r.enumerable,r.configurable=!!r.configurable,("value"in r||r.initializer)&&(r.writable=!0),r=i.slice().reverse().reduce((function(i,n){return n(e,t,i)||i}),r),o&&void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(o):void 0,r.initializer=void 0),void 0===r.initializer&&(Object.defineProperty(e,t,r),r=null),r}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const p=require("discourse/lib/theme-settings-store").getObjectForTheme(38),h=(0,d.createTemplateFactory)({id:null,block:'[[[8,[39,0],[[24,0,"modal-ucd-warning"]],[["@closeModal","@title","@inline"],[[30,0,["closeModal"]],[30,0,["title"]],[30,1]]],[["default"],[[[[1,"\\n  "],[8,[39,1],null,[["@onClose"],[[30,0,["closeModal"]]]],null],[1,"\\n"]],[]]]]]],["@inline"],false,["d-modal","ucd/warning"]]',moduleName:"discourse/components/modal/ucd-warning.hbs",isStrictMode:!1})
let f=e.default=(u=class extends i.default{constructor(){var e,t,i,n
super(...arguments),e=this,t="ucdState",n=this,(i=m)&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(n):void 0})}get title(){return(0,r.htmlSafe)([(0,l.emojiUnescape)((0,s.escape)((0,c.randomizeEmojiDiversity)(p.emoji_icon))),(0,s.escape)(a.default.t((e="warning_modal.title",`theme_translations.38.${e}`)))].join(" "))
var e}closeModal(){this.args.model.ucd_shouldPermanentlyDismiss&&this.ucdState.permanentlyDismiss(),this.args.closeModal()}},m=g(u.prototype,"ucdState",[o.service],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g(u.prototype,"closeModal",[n.action],Object.getOwnPropertyDescriptor(u.prototype,"closeModal"),u.prototype),u);(0,t.setComponentTemplate)(h,f)})),"define"in window&&define("discourse/theme-38/discourse/components/ucd-warning",["exports","@ember/component","@glimmer/component","@ember/controller","@ember/object","@ember/service","@ember/template-factory"],(function(e,t,i,n,o,r,s){"use strict"
var l,a,c,d
function u(e,t,i,n){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(n):void 0})}function m(e,t,i,n,o){var r={}
return Object.keys(n).forEach((function(e){r[e]=n[e]})),r.enumerable=!!r.enumerable,r.configurable=!!r.configurable,("value"in r||r.initializer)&&(r.writable=!0),r=i.slice().reverse().reduce((function(i,n){return n(e,t,i)||i}),r),o&&void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(o):void 0,r.initializer=void 0),void 0===r.initializer&&(Object.defineProperty(e,t,r),r=null),r}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(38)
const g=(0,s.createTemplateFactory)({id:null,block:'[[[8,[39,0],null,[["@rawText"],[[28,[37,1],[38,"warning_modal.content"],null]]],null],[1,"\\n"],[10,"label"],[14,"for","ucd_do-not-show-again"],[14,0,"checkbox-label"],[12],[1,"\\n  "],[8,[39,2],[[24,1,"ucd_do-not-show-again"],[24,3,"ucd_do-not-show-again"],[4,[38,4],["change",[30,0,["toggleShouldPermanentlyDismiss"]]],null]],[["@type","@checked"],["checkbox",[28,[37,3],[[30,0,["shouldPermanentlyDismiss"]]],null]]],null],[1,"\\n  "],[1,[28,[35,1],[38,"warning_modal.do_not_show_again"],null]],[1,"\\n"],[13],[1,"\\n"],[10,0],[14,0,"action-buttons"],[12],[1,"\\n  "],[8,[39,5],[[24,0,"btn-primary"]],[["@action","@icon","@label"],[[30,0,["goBackAndFix"]],"pencil-alt",[28,[37,6],[38,"warning_modal.fix_post"],null]]],null],[1,"\\n  "],[8,[39,5],null,[["@action","@label"],[[30,0,["ignoreAndProceed"]],[28,[37,6],[38,"warning_modal.ignore_and_post_anyway"],null]]],null],[1,"\\n"],[13]],[],false,["cook-text","theme-i18n","input","readonly","on","d-button","theme-prefix"]]',moduleName:"discourse/components/ucd-warning.hbs",isStrictMode:!1})
let p=e.default=(l=class extends i.default{constructor(){super(...arguments),u(this,"modal",a,this),u(this,"ucdState",c,this),u(this,"composer",d,this)}get shouldPermanentlyDismiss(){return this.ucdState.permanentlyDismissed??!1}toggleShouldPermanentlyDismiss(){this.ucdState.toggle()}goBackAndFix(){this.modal.close()}ignoreAndProceed(){this.modal.close(),this.composer.model.ucd_previousWarningIgnored=!0,this.composer.save()}},a=m(l.prototype,"modal",[r.service],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=m(l.prototype,"ucdState",[r.service],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=m(l.prototype,"composer",[n.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m(l.prototype,"toggleShouldPermanentlyDismiss",[o.action],Object.getOwnPropertyDescriptor(l.prototype,"toggleShouldPermanentlyDismiss"),l.prototype),m(l.prototype,"goBackAndFix",[o.action],Object.getOwnPropertyDescriptor(l.prototype,"goBackAndFix"),l.prototype),m(l.prototype,"ignoreAndProceed",[o.action],Object.getOwnPropertyDescriptor(l.prototype,"ignoreAndProceed"),l.prototype),l);(0,t.setComponentTemplate)(g,p)})),"define"in window&&define("discourse/theme-38/discourse/core/code-energy",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.getCodeEnergyIndicators=e.codeEnergyValues=e.CodeEnergyLevels=void 0
const t=require("discourse/lib/theme-settings-store").getObjectForTheme(38),i="[$_a-zA-Z0-9]*",n=`[$_a-zA-Z]${i}`,o=`[$a-zA-Z]${i}`,r="[a-zA-Z-]+",s=`(?:${n}|(?:"(?:[^\\n"\\\\]|\\\\[^\\n])*"|'(?:[^\\n'\\\\]|\\\\[^\\n])*')|-?(?:0|[1-9]\\d*)(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)`,l=`(?:\\s*${s}\\s*(?:,\\s*${s}\\s*)*|\\s*)`,a=e.CodeEnergyLevels={Complex:"Complex",High:"High",Medium:"Medium",Low:"Low"},c=e.codeEnergyValues={[a.Complex]:1,[a.High]:.7,[a.Medium]:.3,[a.Low]:.1},d=[`\\$${n}`,`^\\s*\\.${r}`,`:${n}`,`${o}(?:_${o})+`,"(?:^|\\s+)(?:\\/\\/|;)","\\/\\*[\\s\\S]+?\\*\\/","('''|\"\"\")[\\s\\S]+?\\1",";\\s*$",`(?:${n})?[$_a-z]\\(${l}\\)`,`${n}\\[\\s*${s}?\\s*\\]`,"^\\s*[{}]\\s*$","\\{\\{.+\\}\\}","[\\$#]\\{.+\\}","&&|!=|>>|<<|::|\\+=|-=|\\*=|\\/=|\\|\\|=|\\?=|\\.\\?","\\\\['\"ntr0\\\\]","<\\?[^>]*\\?>","<%[^>]*%>","0000-00-00T00:00:00".split("0").join("\\d"),"^\\s*at .+(.+)",'^\\s*{\\s*"[^"]*"\\s*:'],u=["\x3c!--[\\s\\S]*?--\x3e",`<${r}[^>]*\\/?>`,`</${r}>`,"&[0-9a-zA-Z]+;","&#[0-9]{1,7};","&#x[0-9a-fA-F]{1,6};"],m={[a.Complex]:{get indicators(){return[d,t.include_html&&u].filter(Boolean).flat()}},[a.High]:{indicators:[]},[a.Medium]:{indicators:[]},[a.Low]:{value:.1,indicators:[]}}
e.getCodeEnergyIndicators=()=>Object.entries(m).map((e=>{let[t,{indicators:i}]=e
return i.map((e=>({value:c[t],matcher:new RegExp(e,"gm")})))})).flat()})),"define"in window&&define("discourse/theme-38/discourse/core/detect-code",["exports","../lib/boundaries","./code-energy","./sensitivity","./strip-ignored-content"],(function(e,t,i,n,o){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.printDebugInfo=e.numSequentialLinesWithThresholdCodeEnergy=e.getCodeEnergy=e.detectUnformattedCode=void 0
const r=require("discourse/lib/theme-settings-store").getObjectForTheme(38),s=e=>{let n=0,o=0
const r=(0,t.getLineBoundaries)(e)
r.forEach((e=>{e.matches=0,e.matched_patterns=[]}))
for(const{matcher:s,value:l}of(0,i.getCodeEnergyIndicators)()){const a=[...e.matchAll(s)]
n+=a.length*l,l===i.codeEnergyValues[i.CodeEnergyLevels.Complex]&&(o+=a.length)
for(const e of a){const i=e.index,n=i+e[0].length
for(const e of r){const o=(0,t.isBetween)(e.start,e.end);(o(i)||o(n)||e.start>=i&&e.end<=n)&&(++e.matches,e.matched_patterns.push({matcher:s,value:l}))}}}return{totalCodeEnergy:n,totalComplexMatches:o,lines:r}}
e.getCodeEnergy=s
const l=e=>t=>{let i=0,n=0
for(const o of t)o.content.trim().length&&(o.matches>=e?++n:(i=Math.max(i,n),n=0))
return Math.max(i,n)}
e.numSequentialLinesWithThresholdCodeEnergy=l
e.printDebugInfo=e=>{e=(0,o.stripIgnoredContent)(e)
const{complexMatchesToIgnore:t,minSequentialLinesToMatch:i,minTotalCodeEnergy:r}=n.sensitivityConfig,{totalCodeEnergy:l,totalComplexMatches:a,lines:c}=s(e),d=[]
let u=0
c.forEach((e=>{e.content.trim()&&(e.matches?u++:u=0,d.push([e.matches?String(e.matches):"",u?String(u):"",e.matched_patterns.length?`\`${e.matched_patterns.map((e=>e.matcher)).join("`, `")}\``:"",e.content]))}))
const m=["matches","cumulative","matched patterns","content"],g=m.map((()=>""))
m.forEach(((e,t)=>{const i=Math.max(e.length,...d.map((e=>e[t].length)))
d.forEach((e=>e[t]=e[t].padEnd(i))),m[t]=e.padEnd(i),g[t]=g[t].padEnd(i,"-")})),d.unshift(m,g),console.log(d.map((e=>`| ${e.join(" | ")} |`)).join("\n")),console.log("Result is ",{totalCodeEnergy:l,totalComplexMatches:a,lines:c}),console.log("Sensitivity Config is ",{complexMatchesToIgnore:t,minSequentialLinesToMatch:i,minTotalCodeEnergy:r})}
e.detectUnformattedCode=e=>{const a=(0,o.stripIgnoredContent)(e)
return!!(0,t.isBetween)(r.min_post_length_to_check,-1===r.max_post_length_to_check?1/0:r.max_post_length_to_check)(e.length)&&(e=>{const{complexMatchesToIgnore:t,minSequentialLinesToMatch:o,minTotalCodeEnergy:r}=n.sensitivityConfig,{totalCodeEnergy:a,totalComplexMatches:c,lines:d}=s(e)
return!(c<=t||a<r||l(i.codeEnergyValues[i.CodeEnergyLevels.Complex])(d)<o)})(a)}})),"define"in window&&define("discourse/theme-38/discourse/core/sensitivity",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.sensitivityConfig=e.applySensitivity=void 0
const t=require("discourse/lib/theme-settings-store").getObjectForTheme(38),i=e=>(t,i)=>t+e*(i-t)
e.applySensitivity=i
e.sensitivityConfig={get complexMatchesToIgnore(){return Math.round(i(t.sensitivity)(4,0))},get minSequentialLinesToMatch(){return Math.round(i(t.sensitivity)(5,1))},get minTotalCodeEnergy(){return Math.round(i(t.sensitivity)(5,1))}}})),"define"in window&&define("discourse/theme-38/discourse/core/strip-ignored-content",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.stripIgnoredContent=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(38)
const t=[/(^([`~])\2{2,})[^`~\n]*\n[\s\S]*?\n\1\2*\s*(?:\n|$)/gm,/(?:^|(?:\n{2,}))\s*(?:(?: {4}|\t).*(?:\n|$))/g,/`[^`\n]+`/g,/\[([a-z]+).*?\][\s\S]*?\[\/\1\]/gim,/https?:\/\/(_\([^() \n\t]+\)|[^() \n\t])+/g,/:[a-z_+-][a-z_0-9+-]*:/g,/:D|:-D|:\)|:-\)|;\)|;-\)|:\(|:-\(|:o|:-o|:\?|:-\?|:\?\?\?:|8\)|8-\)|:x|:-x|:P|:-P|:!:|:\?:|:\||:-\||^_^|^__^|:'\(|:'-\(|:-'\(|:p|:O|:-O|:\/|;P|;-P|:\$|:-\$/g,/\((?:c|tm|r)\)/gi,/!?\[[^\]]+\]\([[^\)]+\)/g,/\B@[\w][\w.-]{0,58}\b/g]
e.stripIgnoredContent=e=>t.reduce(((e,t)=>e.replace(t,"")),e)})),"define"in window&&define("discourse/theme-38/discourse/initializers/init",["exports","@ember/service","discourse/lib/plugin-api","../components/modal/ucd-warning","../core/detect-code"],(function(e,t,i,n,o){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const r=require("discourse/lib/theme-settings-store").getObjectForTheme(38)
e.default={name:"unformatted-code-detector",initialize(){(0,i.withPluginApi)("0.8.8",(e=>{window.debugUnformattedCodeDetector=()=>{const e=document.querySelector("#reply-control textarea.d-editor-input")?.value
e?(0,o.printDebugInfo)(e):console.log("No content found")},e.modifyClass("model:composer",{ucdState:(0,t.service)("ucd-state"),pluginId:"unformatted-code-detector",ucd_previousWarningIgnored:!1,ucd_checkShouldIgnoreWarning(){return this.ucd_previousWarningIgnored||this.ucdState.permanentlyDismissed||e.getCurrentUser()?.trust_level>=(-1===r.disable_at_trust_level?1/0:r.disable_at_trust_level)},ucd_checkUnformattedCodeDetected(){return(0,o.detectUnformattedCode)(this.reply)}}),e.modifyClass("controller:composer",{pluginId:"unformatted-code-detector",save(){this.model.ucd_checkUnformattedCodeDetected()&&!this.model.ucd_checkShouldIgnoreWarning()?this.modal.show(n.default,{model:this.model}):this._super(...arguments)}})}))}}})),"define"in window&&define("discourse/theme-38/discourse/lib/boundaries",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.isBetween=e.getLineBoundaries=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(38)
e.getLineBoundaries=e=>{const t=[]
let i=-1
do{t.push({start:i+1}),i=e.indexOf("\n",i+1),t[t.length-1].end=-1===i?e.length:i,t[t.length-1].content=e.slice(t[t.length-1].start,t[t.length-1].end)}while(i>-1)
return t}
e.isBetween=(e,t)=>i=>i>=e&&i<=t})),"define"in window&&define("discourse/theme-38/discourse/lib/emoji-diversity",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.randomizeEmojiSkinTone=e.randomizeEmojiGender=e.randomizeEmojiDiversity=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(38)
const t={masc:{adult:"👨",child:"👦",modifier:"‍♂"},fem:{adult:"👩",child:"👧",modifier:"‍♀"}},i=Object.keys(Object.values(t)[0]).reduce(((e,i)=>(e[i]=new RegExp(Object.values(t).map((e=>e[i])).filter(Boolean).join("|"),"g"),e)),{}),n=e=>Object.entries(i).reduce(((e,i)=>{let[n,o]=i
return e.replace(o,(()=>(()=>{const e=Object.values(t)
return e[Math.floor(Math.random()*e.length)]})()[n]))}),e)
e.randomizeEmojiGender=n
const o=127995,r=e=>e.replace(/[\u{1f3fb}-\u{1f3ff}]/gu,(()=>String.fromCodePoint(o+Math.floor(5*Math.random()))))
e.randomizeEmojiSkinTone=r
e.randomizeEmojiDiversity=e=>r(n(e))})),"define"in window&&define("discourse/theme-38/discourse/services/ucd-state",["exports","@ember/service","discourse/lib/key-value-store"],(function(e,t,i){"use strict"
function n(e,t,i){var n
return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e
var i=e[Symbol.toPrimitive]
if(void 0!==i){var n=i.call(e,t||"default")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:n+"")in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(38)
const o="permanently_dismissed"
class r extends t.default{constructor(){super(...arguments),n(this,"store",new i.default("ucd_"))}get permanentlyDismissed(){return this.store.getObject(o)||!1}toggle(){this.store.setObject({key:o,value:!this.permanentlyDismissed})}}e.default=r}))

//# sourceMappingURL=48f8dd7ddae6bcd7fff9840976ebeeb3d129ecda.map?__ws=forum.arduino.cc
