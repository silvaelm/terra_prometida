"require"in window&&require("discourse/lib/theme-settings-store").registerSettings(43,{svg_icons:"fab-youtube|fab-linkedin-in|fab-facebook-f",theme_uploads:{"icons-sprite":"https://europe1.discourse-cdn.com/arduino/original/3X/5/2/5216ddd8fb2265b117cde44bca7cba571a9313bc.svg","svg-close":"https://europe1.discourse-cdn.com/arduino/original/3X/e/c/ec18a2369593199dd4fb999f8af357993b79789b.svg","svg-device-manager":"https://europe1.discourse-cdn.com/arduino/original/3X/d/2/d26759ae4d0564fb0f223d801c5b1ded6ddb5283.svg","svg-iot-cloud":"https://europe1.discourse-cdn.com/arduino/original/3X/6/d/6deba2a42824fdb721f3f5868e42988277718e3a.svg","svg-web-editor":"https://europe1.discourse-cdn.com/arduino/original/3X/6/c/6ccb07efdc83c96cfa45eccf0323305461658ed0.svg","typoninesans-regular":"https://europe1.discourse-cdn.com/arduino/original/3X/3/d/3d65f8b624b550a1377c11e84e79db86f410ed4e.woff","typsansmono-regular":"https://europe1.discourse-cdn.com/arduino/original/3X/b/8/b8362c60f30f0363c8f965ef94c0bb6f60651e61.woff"}}),"define"in window&&define("discourse/theme-43/arduino/templates/connectors/above-footer/footer",["exports","ember-this-fallback/deprecations-helper","@ember/template-factory"],(function(e,t,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,i.createTemplateFactory)({id:null,block:'[[[41,[30,0,["showFooter"]],[[[1,"  "],[1,[28,[35,1],null,[["showFooter","model"],[[30,0,["showFooter"]],[28,[37,2],null,[["model"],[[30,0,["model"]]]]]]]]],[1,"\\n"]],[]],null],[1,[28,[32,0],["[[\\"The `showFooter` property path was used in the `discourse/theme-43/arduino/templates/connectors/above-footer/footer` template without using `this`. This fallback behavior has been deprecated, all properties must be looked up on `this` when used in the template: {{this.showFooter}}\\",false,{\\"id\\":\\"ember-this-fallback.this-property-fallback\\",\\"until\\":\\"n/a\\",\\"for\\":\\"ember-this-fallback\\",\\"url\\":\\"https://deprecations.emberjs.com/v3.x#toc_this-property-fallback\\",\\"since\\":{\\"available\\":\\"0.2.0\\"}}],[\\"The `showFooter` property path was used in the `discourse/theme-43/arduino/templates/connectors/above-footer/footer` template without using `this`. This fallback behavior has been deprecated, all properties must be looked up on `this` when used in the template: {{this.showFooter}}\\",false,{\\"id\\":\\"ember-this-fallback.this-property-fallback\\",\\"until\\":\\"n/a\\",\\"for\\":\\"ember-this-fallback\\",\\"url\\":\\"https://deprecations.emberjs.com/v3.x#toc_this-property-fallback\\",\\"since\\":{\\"available\\":\\"0.2.0\\"}}],[\\"The `model` property path was used in the `discourse/theme-43/arduino/templates/connectors/above-footer/footer` template without using `this`. This fallback behavior has been deprecated, all properties must be looked up on `this` when used in the template: {{this.model}}\\",false,{\\"id\\":\\"ember-this-fallback.this-property-fallback\\",\\"until\\":\\"n/a\\",\\"for\\":\\"ember-this-fallback\\",\\"url\\":\\"https://deprecations.emberjs.com/v3.x#toc_this-property-fallback\\",\\"since\\":{\\"available\\":\\"0.2.0\\"}}]]"],null]]],[],false,["if","arduino-footer","hash"]]',moduleName:"discourse/theme-43/arduino/templates/connectors/above-footer/footer",scope:()=>[t.default],isStrictMode:!1})})),"define"in window&&define("discourse/theme-43/discourse/components/arduino-footer",["exports","@ember/component","@ember/service","jquery","discourse/lib/url"],(function(e,t,i,o,a){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(43)
e.default=t.default.extend({router:(0,i.service)(),currentRouteName:null,_jumpType(){this.isDestroyed||this.isDestroying||("topic.fromParamsNear"===this.router.currentRouteName||"topic.fromParams"===this.router.currentRouteName?this.set("jumpType","topic"):this.set("jumpType","other"))},get currentYear(){return(new Date).getFullYear()},actions:{jumpTop(){if("topic"===this.jumpType){let e=window.location.pathname.split("/"),t=e[0]+"/"+e[1]+"/"+e[2]+"/"+e[3]
a.default.routeTo(t)}else(0,o.default)("html, body").animate({scrollTop:0},"fast")}},didInsertElement(){this._super(...arguments),this.appEvents.on("page:changed",this,"_jumpType")}})})),"define"in window&&define("discourse/theme-43/discourse/initializers/arduino-code-button",["exports","discourse/lib/plugin-api"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(43)
e.default={name:"arduino-code-button",initialize(){(0,t.withPluginApi)("0.8",(e=>{e.onToolbarCreate((e=>{e.addButton({id:"custom-preformatted-text",group:"insertions",icon:"code",action:function(){for(var t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o]
return e.context.send("formatCode",i)},title:"composer.code_title"})}))}))}}})),"define"in window&&define("discourse/theme-43/discourse/initializers/arduino-header",["exports","virtual-dom","discourse/lib/plugin-api","discourse/widgets/render-glimmer","@ember/template-factory"],(function(e,t,i,o,a){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(43)
e.default={name:"arduino-header",initialize(){(0,i.withPluginApi)("1.17.0",(e=>{e.decorateWidget("header-contents:before",(e=>e.attach("arduino-nav"))),e.decorateWidget("header-buttons:before",(e=>{if(!e.attrs.topic)return document.body.classList.remove("show-extra-info"),e.attach("arduino-discourse-nav")
document.body.classList.add("show-extra-info")})),e.createWidget("arduino-discourse-nav",{tagName:"div.arduino-discourse-nav",buildKey:()=>"arduino-discourse-nav",lookupCount(e){const t=this.register.lookup("service:topic-tracking-state")
return t?t.lookupCount({type:e}):0},html(){let i=[],o=e.getCurrentUser()
if(i.push((0,t.h)("li.filter-categories",(0,t.h)("a",{href:"/categories"},"Categories"))),i.push((0,t.h)("li.filter-latest",(0,t.h)("a",{href:"/latest"},"Latest"))),o){let e,o
this.lookupCount("new")>0&&(e=this.lookupCount("new"),i.push((0,t.h)("li.filter-new",(0,t.h)("a",{href:"/new"},"New ("+e+")")))),this.lookupCount("unread")>0&&(o=this.lookupCount("unread"),i.push((0,t.h)("li.filter-unread",(0,t.h)("a",{href:"/unread"},"Unread ("+o+")"))))}return i.push((0,t.h)("li.filter-about",(0,t.h)("a",{href:"/about"},"About"))),i.push((0,t.h)("li.filter-faq",(0,t.h)("a",{href:"/faq"},"FAQ"))),(0,t.h)("ul",[i])}}),e.createWidget("arduino-nav",{tagName:"div.arduino-nav-top",buildKey:()=>"arduino-nav",html(){return(0,t.h)("div.wrap",[this.attach("arduino-header-links"),new o.default(this,"div.search-menu.arduino-search-wrapper",(0,a.createTemplateFactory)({id:null,block:'[[[8,[39,0],null,null,null]],[],false,["search-menu"]]',moduleName:"/discourse/theme-43/discourse/initializers/arduino-header",isStrictMode:!1})),this.attach("arduino-grid-button"),this.attach("arduino-login-button"),(0,t.h)("div.arduino-user-placeholder")])}}),e.createWidget("arduino-header-links",{tagName:"div.arduino-header-links",buildKey:()=>"arduino-header-links",html:()=>(0,t.h)("ul",[(0,t.h)("li",(0,t.h)("a",{href:"https://arduino.cc"},[(0,t.h)("span","Arduino"),(0,t.h)("span",".cc")])),(0,t.h)("li",[(0,t.h)("a",{href:"https://arduino.cc/pro"},[(0,t.h)("span","Pro"),(0,t.h)("span","fessional")])]),(0,t.h)("li",[(0,t.h)("a",{href:"https://arduino.cc/education"},[(0,t.h)("span","Edu"),(0,t.h)("span","cation")])]),(0,t.h)("li",[(0,t.h)("a",{href:"https://store.arduino.cc"},"Store")])])}),e.createWidget("arduino-grid-button",{tagName:"div.arduino-grid-button",buildKey:()=>"arduino-grid-button",template:function(e,t){var i=__widget_helpers.iconNode,o=[]
o.push("\n        ")
var a=[]
a.push(i("app-list")),o.push(virtualDom.h("a",a)),o.push("\n        ")
var r=[]
r.push("\n        ")
var n=[]
n.push("\n          ")
var s=[],u=[],c=[]
c.push("\n            ")
var l=[]
l.push("\n            "),c.push(virtualDom.h("div",{className:"app-application__icon",attributes:{}},l)),c.push("\n            ")
var d=[]
d.push("IoT Cloud"),c.push(virtualDom.h("div",{className:"app-application__name",attributes:{}},d)),c.push("\n          "),u.push(virtualDom.h("a",{className:"app-application",attributes:{id:"iot-cloud",href:"https://create.arduino.cc/iot",target:"blank",rel:"noopener noreferrer"}},c)),s.push(virtualDom.h("div",{className:"app-applications__item",attributes:{}},u))
var p=[],h=[]
h.push("\n            ")
var f=[]
f.push("\n\n            "),h.push(virtualDom.h("div",{className:"app-application__icon",attributes:{}},f)),h.push("\n            ")
var m=[]
m.push("Web Editor"),h.push(virtualDom.h("div",{className:"app-application__name",attributes:{}},m)),h.push("\n          "),p.push(virtualDom.h("a",{className:"app-application",attributes:{id:"web-editor",href:"https://create.arduino.cc/editor",target:"blank",rel:"noopener noreferrer"}},h)),s.push(virtualDom.h("div",{className:"app-applications__item",attributes:{}},p))
var b=[],v=[]
v.push("\n            ")
var g=[]
g.push("\n\n            "),v.push(virtualDom.h("div",{className:"app-application__icon",attributes:{}},g)),v.push("\n            ")
var w=[]
return w.push("Manager for Linux"),v.push(virtualDom.h("div",{className:"app-application__name",attributes:{}},w)),v.push("\n          "),b.push(virtualDom.h("a",{className:"app-application",attributes:{id:"device-manager",href:"https://create.arduino.cc/devices",target:"blank",rel:"noopener noreferrer"}},v)),s.push(virtualDom.h("div",{className:"app-applications__item",attributes:{}},b)),n.push(virtualDom.h("div",{attributes:{id:"app-apps-container-box"}},s)),n.push("\n        "),r.push(virtualDom.h("div",{className:"popup-container__box",attributes:{}},n)),r.push("\n      "),o.push(virtualDom.h("div",{className:"popup-container",attributes:{}},r)),o.push("\n      "),o},defaultState:()=>({expanded:!1}),click(){this.state.expanded=!this.state.expanded,document.querySelector(".arduino-grid-button").classList.toggle("active")},clickOutside(){this.state.expanded=!1,document.querySelector(".arduino-grid-button").classList.remove("active")}}),e.createWidget("arduino-login-button",{tagName:"div.arduino-login-button",buildKey:()=>"arduino-login-button",html(){if(e.getCurrentUser())return
const t=[]
return t.push(this.attach("button",{label:"log_in",className:"btn-primary btn-small login-button",action:"showLogin",icon:"user"})),t}}),e.forceDropdownForMenuPanels("search-menu-panel")}))}}})),"define"in window&&define("discourse/theme-43/discourse/initializers/arduino-icon-replace",["exports","discourse/lib/plugin-api"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(43)
e.default={name:"arduino-icon-replace",initialize(){(0,t.withPluginApi)("0.8",(e=>{e.replaceIcon("bars","arduino-bars"),e.replaceIcon("search","arduino-search"),e.replaceIcon("fab-github","arduino-github")}))}}})),"define"in window&&define("discourse/theme-43/discourse/initializers/cookie-consent",["exports","discourse/lib/load-script"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(43)
e.default={name:"init-cookie-consent",initialize(){(function(e){let i="en"
"it-IT"===navigator.language&&(i="it")
let o=e?"":", and to show you personalised advertisement",a=`<div id="iubenda-cs-title">We use cookies &#127850;</div><div>Our websites use cookies (also from third parties) for functional and analytical purposes${o}. You can adjust this in <a class="iubenda-cs-customize-btn">Cookie Settings</a> or learn more by reading our %{cookie_policy_link}.</div>`
"it"===i&&(o=e?"":", e per mostrare contenuti pubblicitari personalizzati",a=`<div id="iubenda-cs-title">Usiamo i cookies &#127850;</div><div>I nostri siti usano cookie (anche di terze parti) per fini funzionali e di analisi${o}. Puoi regolare queste impostazioni nelle <a class="iubenda-cs-customize-btn">Impostazioni di tracciamento</a> o saperne di pi&ugrave; leggendo la %{cookie_policy_link}.</div>`),window._iub=window._iub||[],window._iub.csConfiguration={askConsentAtCookiePolicyUpdate:!0,ccpaAcknowledgeOnDisplay:!1,ccpaApplies:!1,ccpaNoticeDisplay:!1,consentOnContinuedBrowsing:!1,cookiePolicyId:11225532,countryDetection:!0,enableCcpa:!1,floatingPreferencesButtonDisplay:!1,startOnDomReady:!0,lang:i,perPurposeConsent:!0,purposes:e?"1, 4":"1, 4, 5",siteId:2023027,whitelabel:!0,cookiePolicyUrl:"https://www.arduino.cc/"+i+"/cookie-policy",banner:{applyStyles:!1,content:a,rejectButtonDisplay:!0,rejectButtonCaption:"en"===i?"ONLY REQUIRED":"SOLO NECESSARI",position:"float-bottom-left",acceptButtonDisplay:!0,acceptButtonCaption:"en"===i?"ACCEPT ALL":"ACCETTA TUTTI",backgroundOverlay:!1,brandBackgroundColor:"black"},callback:{onPreferenceExpressedOrNotNeeded:e=>{const t=window.dataLayer||[]
if(t.push({iubenda_ccpa_opted_out:window._iub.cs.api.isCcpaOptedOut()}),e){if(!0===e.consent)t.push({event:"iubenda_consent_given"})
else if(!1===e.consent)t.push({event:"iubenda_consent_rejected"})
else if(e.purposes)for(const i in e.purposes)e.purposes[i]&&t.push({event:"iubenda_consent_given_purpose_"+i})}else t.push({event:"iubenda_preference_not_needed"})}}},(0,t.default)("//cdn.arduino.cc/header-footer/prod/iubenda-1463.js")})()}}})),"define"in window&&define("discourse/theme-43/discourse/initializers/d-navigation-class",["exports","discourse/lib/plugin-api"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(43)
e.default={name:"d-navigation-class",initialize(){(0,t.withPluginApi)("0.8",(e=>{e.modifyClass("component:d-navigation",{pluginId:"d-navigation-class",didInsertElement(){document.body.classList.add(`filter-mode-${this.filterType}`)},willDestroyElement(){document.body.classList.remove(`filter-mode-${this.filterType}`)}})}))}}})),"define"in window&&define("discourse/theme-43/discourse/initializers/site-logo-link",["exports","discourse/lib/intercept-click","discourse/lib/plugin-api","discourse/lib/url"],(function(e,t,i,o){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(43)
e.default={name:"site-logo-link",initialize(){(0,i.withPluginApi)("0.8.13",(e=>{e.reopenWidget("home-logo",{click(e){return(0,t.wantsNewWindow)(e)||(e.preventDefault(),"site-logo"!==e.target.id&&"site-text-logo"!==e.target.id||o.default.routeTo(this.href())),!1}})}))}}})),"define"in window&&define("discourse/theme-43/discourse/templates/components/arduino-footer",["exports","@ember/template-factory"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,t.createTemplateFactory)({id:null,block:'[[[10,"footer"],[14,0,"arduino-footer"],[12],[1,"\\n  "],[10,"section"],[14,0,"arduino-footer-top"],[12],[1,"\\n    "],[10,"svg"],[14,"width","102"],[14,"height","14"],[14,"fill","none"],[14,"xmlns","http://www.w3.org/2000/svg","http://www.w3.org/2000/xmlns/"],[14,"data-inject-url","https://cdn.arduino.cc/header-footer/prod/assets/footerLogo-arduino.svg"],[12],[1,"\\n      "],[10,"path"],[14,"d","M0 13.812L4.162.19h3.784l4.351 13.622H8.703l-.757-2.649H4.162l-.757 2.649H0zM6.054 3.595L4.73 8.515h2.648l-1.324-4.92zM14.378.19h5.486c3.784 0 5.108 1.891 5.108 4.54 0 1.892-.756 3.216-2.27 3.973l2.649 4.919h-3.973l-1.892-4.163h-1.703v4.352h-3.405V.189zm7.19 4.54c0-1.135-.38-1.892-2.082-1.892h-1.703v3.784h1.703c1.324.189 2.081-.379 2.081-1.892zM27.811.19h4.352c5.108 0 6.81 2.459 6.81 6.62 0 3.217-.945 6.812-6.81 6.812h-4.54V.189h.188zm3.406 2.648v7.946h1.324c2.838 0 3.027-1.703 3.027-3.973 0-2.649-.19-3.973-3.216-3.973h-1.135zM48.81.19h3.217V9.08C52.027 13.054 49 14 46.541 14c-2.27 0-5.298-.757-5.298-4.919V.19h3.406v8.324c0 2.27.756 2.838 2.08 2.838 1.514 0 2.082-.756 2.082-2.838V.19zM55.054 10.973h3.594V3.027h-3.405V.189h10.405v2.838h-3.594v7.946h3.594v2.838H55.243v-2.838h-.19zM71.325 13.622h-3.217V.189h3.784l4.352 8.135V.19h3.216v13.622h-3.406l-4.54-8.703-.19 8.514zM93.082 7c0 3.973-1.514 7-5.865 7-3.973 0-5.676-2.27-5.676-6.81 0-4.163 1.514-7.19 5.676-7.19 3.973 0 5.865 1.703 5.865 7zm-3.595 0c0-3.405-.19-4.162-2.27-4.162-1.703-.19-2.081.946-2.081 4.351 0 2.649.189 4.162 2.08 4.162 2.082-.189 2.271-1.324 2.271-4.351zM95.352 3.027C95.352 1.324 96.676 0 98.189 0c1.703 0 3.027 1.324 3.027 3.027s-1.324 3.027-3.027 3.027c-1.513-.19-2.837-1.513-2.837-3.027zm5.297 0c0-1.324-.946-2.46-2.46-2.46-1.324 0-2.27.947-2.27 2.46 0 1.514 1.135 2.46 2.27 2.46 1.514 0 2.46-.946 2.46-2.46zm-3.973-1.892h1.703c1.135 0 1.513.568 1.513 1.135 0 .379-.19.757-.567 1.135l.567 1.325h-1.135l-.378-1.135H98V4.73h-1.135V1.135h-.19zm1.513 1.703c.379 0 .568-.19.568-.568 0-.378-.19-.378-.568-.378h-.378v.946h.378z"],[14,"fill","currentColor"],[12],[13],[1,"\\n    "],[13],[1,"\\n\\n    "],[1,[28,[35,0],null,[["action","translatedLabel","icon"],[[28,[37,1],[[30,0],"jumpTop"],null],"Back to top","arduino-chevron-up"]]]],[1,"\\n  "],[13],[1,"\\n\\n  "],[10,"section"],[14,0,"arduino-footer-bottom"],[12],[1,"\\n    "],[10,"ul"],[14,0,"arduino-footer-menu"],[12],[1,"\\n      "],[10,"li"],[12],[10,3],[14,6,"https://support.arduino.cc/"],[12],[1,"Help Center"],[13],[13],[1,"\\n      "],[10,"li"],[12],[10,3],[14,6,"https://www.arduino.cc/en/contact-us"],[12],[1,"Contact Us"],[13],[13],[1,"\\n      "],[10,"li"],[12],[10,3],[14,6,"https://www.arduino.cc/en/Trademark/HomePage"],[12],[1,"Trademark &\\n          Copyright"],[13],[13],[1,"\\n      "],[10,"li"],[12],[10,3],[14,6,"https://www.arduino.cc/en/trademark"],[12],[1,"Brand Guidelines"],[13],[13],[1,"\\n      "],[10,"li"],[12],[10,3],[14,6,"https://store.arduino.cc/distributors"],[12],[1,"Distributors"],[13],[13],[1,"\\n      "],[10,"li"],[14,0,"hide-mobile"],[12],[10,3],[14,6,"https://careers.arduino.cc/"],[12],[1,"Careers"],[13],[13],[1,"\\n    "],[13],[1,"\\n\\n    "],[10,0],[14,0,"arduino-footer-social-menu"],[12],[1,"\\n      "],[10,"h4"],[12],[1,"Follow us"],[13],[1,"\\n      "],[10,"ul"],[12],[1,"\\n        "],[10,"li"],[12],[1,[28,[35,0],null,[["href","icon"],["https://www.facebook.com/official.arduino","fab-facebook-f"]]]],[13],[1,"\\n        "],[10,"li"],[12],[1,[28,[35,0],null,[["href","icon"],["https://www.instagram.com/arduino.cc/","fab-instagram"]]]],[13],[1,"\\n        "],[10,"li"],[12],[1,[28,[35,0],null,[["href","icon"],["https://twitter.com/arduino","fab-twitter"]]]],[13],[1,"\\n        "],[10,"li"],[12],[1,[28,[35,0],null,[["href","icon"],["https://github.com/arduino/","fab-github"]]]],[13],[1,"\\n        "],[10,"li"],[12],[1,[28,[35,0],null,[["href","icon"],["https://www.linkedin.com/company/arduino","fab-linkedin-in"]]]],[13],[1,"\\n        "],[10,"li"],[12],[1,[28,[35,0],null,[["href","icon"],["https://www.youtube.com/user/arduinoteam","fab-youtube"]]]],[13],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n\\n    "],[10,0],[14,0,"arduino-footer-copy"],[12],[1,"\\n      ©\\n      "],[1,[30,0,["currentYear"]]],[1,"\\n      Arduino\\n    "],[13],[1,"\\n\\n    "],[10,"ul"],[14,0,"arduino-footer-legal"],[12],[1,"\\n      "],[10,"li"],[14,0,"hide-desktop"],[12],[10,3],[14,6,"https://careers.arduino.cc/"],[12],[1,"Careers"],[13],[13],[1,"\\n      "],[10,"li"],[12],[10,3],[14,6,"https://www.arduino.cc/en/Main/TermsOfService"],[12],[1,"Terms of\\n          Service"],[13],[13],[1,"\\n      "],[10,"li"],[12],[10,3],[14,6,"https://www.arduino.cc/en/Main/PrivacyPolicy"],[12],[1,"Privacy Policy"],[13],[13],[1,"\\n      "],[10,"li"],[12],[10,3],[14,6,"https://www.arduino.cc/en/Main/Security"],[12],[1,"Security"],[13],[13],[1,"\\n      "],[10,"li"],[12],[10,3],[14,0,"iubenda-cs-preferences-link"],[12],[1,"Cookie Settings"],[13],[13],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n"],[13]],[],false,["d-button","action"]]',moduleName:"discourse/theme-43/discourse/templates/components/arduino-footer",isStrictMode:!1})}))

//# sourceMappingURL=8f03dde7b6674878cb8e76939e91bfa84050eb25.map?__ws=forum.arduino.cc
