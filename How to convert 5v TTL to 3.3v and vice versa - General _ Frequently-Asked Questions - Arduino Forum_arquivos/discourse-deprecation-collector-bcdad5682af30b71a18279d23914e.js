define("discourse/plugins/discourse-deprecation-collector/discourse/api-initializers/init-deprecation-collector",["exports","discourse/lib/api"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,t.apiInitializer)("0.8",(e=>{e.container.lookup("service:deprecation-collector")}))})),define("discourse/plugins/discourse-deprecation-collector/discourse/services/deprecation-collector",["exports","@ember/debug","@ember/runloop","@ember/service","discourse/lib/source-identifier","discourse-common/lib/debounce","discourse-common/lib/deprecated","discourse-common/lib/get-url","discourse-common/utils/decorators"],(function(e,t,i,r,o,n,l,a,c){"use strict"
var s,u,d,p,b
function f(e,t,i){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,i)}function h(e,t,i){return function(e,t,i){if(t.set)t.set.call(e,i)
else{if(!t.writable)throw new TypeError("attempted to set read only private field")
t.value=i}}(e,v(t,e),i),i}function y(e,t){return function(e,t){if(t.get)return t.get.call(e)
return t.value}(e,v(t,e))}function v(e,t){return e.get(function(e,t,i){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:i
throw new TypeError("Private element is not present on this object")}(e,t))}function w(e,t,i,r,o){var n={}
return Object.keys(r).forEach((function(e){n[e]=r[e]})),n.enumerable=!!n.enumerable,n.configurable=!!n.configurable,("value"in n||n.initializer)&&(n.writable=!0),n=i.slice().reverse().reduce((function(i,r){return r(e,t,i)||i}),n),o&&void 0!==n.initializer&&(n.value=n.initializer?n.initializer.call(o):void 0,n.initializer=void 0),void 0===n.initializer&&(Object.defineProperty(e,t,n),n=null),n}let g
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,(0,t.registerDeprecationHandler)(((e,t,i)=>(g?.(e,t),i(e,t)))),(0,l.registerDeprecationHandler)(((e,t)=>g?.(e,t)))
e.default=(d=new WeakMap,p=new WeakMap,b=new WeakMap,s=class extends r.default{constructor(){var e,t,i,r
super(...arguments),e=this,t="router",r=this,(i=u)&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(r):void 0}),f(this,d,{writable:!0,value:new Map}),f(this,p,{writable:!0,value:new Map}),f(this,b,{writable:!0,value:void 0}),g=this.track
const o=window.deprecationWorkflow?.config?.workflow||{}
for(const n of o)y(this,d).set(n.matchId,n.handler)
document.addEventListener("visibilitychange",this.handleVisibilityChanged),this.router.on("routeWillChange",this.debouncedReport)}willDestroy(){g=null,window.removeEventListener("visibilitychange",this.handleVisibilityChanged),this.router.off("routeWillChange",this.debouncedReport),(0,i.cancel)(y(this,b)),super.willDestroy()}handleVisibilityChanged(){"visible"!==document.visibilityState&&this.report()}track(e,t){if("silence"===y(this,d).get(t.id))return
if("browser-extension"===(0,o.default)()?.type)return
let i=y(this,p).get(t.id)||0
i+=1,y(this,p).set(t.id,i)}debouncedReport(){h(this,b,(0,n.default)(this.report,1e4))}report(){if((0,i.cancel)(y(this,b)),0===y(this,p).size)return
const e=Object.fromEntries(y(this,p).entries())
y(this,p).clear()
const t=new FormData
t.append("data",JSON.stringify(e)),navigator.sendBeacon((0,a.default)("/deprecation-collector/log"),t)}},u=w(s.prototype,"router",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w(s.prototype,"handleVisibilityChanged",[c.bind],Object.getOwnPropertyDescriptor(s.prototype,"handleVisibilityChanged"),s.prototype),w(s.prototype,"track",[c.bind],Object.getOwnPropertyDescriptor(s.prototype,"track"),s.prototype),w(s.prototype,"debouncedReport",[c.bind],Object.getOwnPropertyDescriptor(s.prototype,"debouncedReport"),s.prototype),w(s.prototype,"report",[c.bind],Object.getOwnPropertyDescriptor(s.prototype,"report"),s.prototype),s)}))

//# sourceMappingURL=discourse-deprecation-collector-4815d77a346fbf2dfa17d319b2670346e914d99d6d9017f63922c44695d580fa.map
//!

;
