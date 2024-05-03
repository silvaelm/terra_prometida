define("discourse/plugins/discourse-ai/discourse/routes/admin-plugins-show-discourse-ai-ai-personas-index",["exports","discourse/routes/discourse"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=s.default.extend({model(){return this.modelFor("adminPlugins.show.discourse-ai.ai-personas")}})})),define("discourse/plugins/discourse-ai/discourse/routes/admin-plugins-show-discourse-ai-ai-personas-new",["exports","discourse/lib/constants","discourse/routes/discourse"],(function(e,s,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=i.default.extend({async model(){const e=this.store.createRecord("ai-persona")
return e.set("allowed_group_ids",[s.AUTO_GROUPS.trust_level_0.id]),e.set("rag_uploads",[]),e.set("rag_chunk_tokens",374),e.set("rag_chunk_overlap_tokens",10),e.set("rag_conversation_chunks",10),e},setupController(e,s){this._super(e,s),e.set("allPersonas",this.modelFor("adminPlugins.show.discourse-ai.ai-personas"))}})})),define("discourse/plugins/discourse-ai/discourse/routes/admin-plugins-show-discourse-ai-ai-personas-show",["exports","discourse/routes/discourse"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=s.default.extend({async model(e){const s=this.modelFor("adminPlugins.show.discourse-ai.ai-personas"),i=parseInt(e.id,10)
return s.findBy("id",i)},setupController(e,s){this._super(e,s),e.set("allPersonas",this.modelFor("adminPlugins.show.discourse-ai.ai-personas"))}})})),define("discourse/plugins/discourse-ai/discourse/routes/admin-plugins-show-discourse-ai-ai-personas",["exports","discourse/routes/discourse"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class i extends s.default{model(){return this.store.findAll("ai-persona")}}e.default=i})),define("discourse/plugins/discourse-ai/discourse/routes/admin-plugins-show-discourse-ai-index",["exports","@ember/service","discourse/routes/discourse"],(function(e,s,i){"use strict"
var r,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(r=class extends i.default{constructor(){var e,s,i,r
super(...arguments),e=this,s="router",r=this,(i=o)&&Object.defineProperty(e,s,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(r):void 0})}beforeModel(){return this.router.transitionTo("adminPlugins.show.discourse-ai.ai-personas.index")}},a=r.prototype,u="router",t=[s.inject],d={configurable:!0,enumerable:!0,writable:!0,initializer:null},l={},Object.keys(d).forEach((function(e){l[e]=d[e]})),l.enumerable=!!l.enumerable,l.configurable=!!l.configurable,("value"in l||l.initializer)&&(l.writable=!0),l=t.slice().reverse().reduce((function(e,s){return s(a,u,e)||e}),l),n&&void 0!==l.initializer&&(l.value=l.initializer?l.initializer.call(n):void 0,l.initializer=void 0),void 0===l.initializer&&(Object.defineProperty(a,u,l),l=null),o=l,r)
var a,u,t,d,n,l})),define("discourse/plugins/discourse-ai/discourse/templates/admin-plugins/show/discourse-ai/ai-personas/index",["exports","@ember/template-factory"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,s.createTemplateFactory)({id:"Bwm8NZDg",block:'[[[8,[39,0],null,[["@personas"],[[30,0,["model"]]]],null]],[],false,["ai-persona-list-editor"]]',moduleName:"discourse/plugins/discourse-ai/discourse/templates/admin-plugins/show/discourse-ai/ai-personas/index.hbs",isStrictMode:!1})})),define("discourse/plugins/discourse-ai/discourse/templates/admin-plugins/show/discourse-ai/ai-personas/new",["exports","@ember/template-factory"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,s.createTemplateFactory)({id:"e6hOhDd1",block:'[[[8,[39,0],null,[["@personas","@currentPersona"],[[30,0,["allPersonas"]],[30,0,["model"]]]],null]],[],false,["ai-persona-list-editor"]]',moduleName:"discourse/plugins/discourse-ai/discourse/templates/admin-plugins/show/discourse-ai/ai-personas/new.hbs",isStrictMode:!1})})),define("discourse/plugins/discourse-ai/discourse/templates/admin-plugins/show/discourse-ai/ai-personas/show",["exports","@ember/template-factory"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,s.createTemplateFactory)({id:"6+wEAK3P",block:'[[[8,[39,0],null,[["@personas","@currentPersona"],[[30,0,["allPersonas"]],[30,0,["model"]]]],null]],[],false,["ai-persona-list-editor"]]',moduleName:"discourse/plugins/discourse-ai/discourse/templates/admin-plugins/show/discourse-ai/ai-personas/show.hbs",isStrictMode:!1})}))

//# sourceMappingURL=discourse-ai_admin-fe2f0c27647ceb2e11f438098335653dba34346e1efcb27f78ad537e376efbe3.map
//!

;
