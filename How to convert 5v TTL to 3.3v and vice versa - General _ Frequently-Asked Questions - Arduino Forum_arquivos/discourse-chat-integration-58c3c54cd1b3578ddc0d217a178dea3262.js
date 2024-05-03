define("discourse/plugins/discourse-chat-integration/discourse/public-route-map",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){this.route("transcript",{path:"/chat-transcript/:secret"})}})),define("discourse/plugins/discourse-chat-integration/discourse/routes/transcript",["exports","@ember/service","discourse/lib/ajax","discourse/lib/ajax-error","discourse/routes/discourse"],(function(e,i,r,t,o){"use strict"
var n,a,s,c
function l(e,i,r,t){r&&Object.defineProperty(e,i,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(t):void 0})}function u(e,i,r,t,o){var n={}
return Object.keys(t).forEach((function(e){n[e]=t[e]})),n.enumerable=!!n.enumerable,n.configurable=!!n.configurable,("value"in n||n.initializer)&&(n.writable=!0),n=r.slice().reverse().reduce((function(r,t){return t(e,i,r)||r}),n),o&&void 0!==n.initializer&&(n.value=n.initializer?n.initializer.call(o):void 0,n.initializer=void 0),void 0===n.initializer&&(Object.defineProperty(e,i,n),n=null),n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(n=class extends o.default{constructor(){super(...arguments),l(this,"currentUser",a,this),l(this,"composer",s,this),l(this,"router",c,this)}async model(e){if(!this.currentUser)return this.session.set("shouldRedirectToUrl",window.location.href),void this.router.replaceWith("login")
await this.router.replaceWith("discovery.latest").followRedirects()
try{const i=await(0,r.ajax)(`/chat-transcript/${e.secret}`)
this.composer.openNewTopic({body:i.content})}catch(i){(0,t.popupAjaxError)(i)}}},a=u(n.prototype,"currentUser",[i.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=u(n.prototype,"composer",[i.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=u(n.prototype,"router",[i.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),n)}))

//# sourceMappingURL=discourse-chat-integration-556659c050d384f253b52890f83f95e4c475fff22d8eb089cf9a9e383047e256.map
//!

;
