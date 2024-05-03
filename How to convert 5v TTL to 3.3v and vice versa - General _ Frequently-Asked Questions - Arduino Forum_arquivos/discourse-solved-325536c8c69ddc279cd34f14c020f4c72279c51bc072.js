define("discourse/plugins/discourse-solved/discourse/connectors/bread-crumbs-right/solved-status-filter",["exports","@glimmer/component","@ember/object","@ember/service","discourse-common/lib/get-owner","I18n"],(function(e,t,s,i,o,a){"use strict"
var r,n,l
function c(e,t,s,i){s&&Object.defineProperty(e,t,{enumerable:s.enumerable,configurable:s.configurable,writable:s.writable,value:s.initializer?s.initializer.call(i):void 0})}function u(e,t,s,i,o){var a={}
return Object.keys(i).forEach((function(e){a[e]=i[e]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=s.slice().reverse().reduce((function(s,i){return i(e,t,s)||s}),a),o&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(o):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const d={solved:"yes",unsolved:"no",all:null},p={yes:"solved",no:"unsolved"}
e.default=(r=class extends t.default{constructor(){super(...arguments),c(this,"router",n,this),c(this,"siteSettings",l,this)}static shouldRender(e,t){const s=(0,o.getOwnerWithFallback)(this).lookup("service:router")
return!(!t.siteSettings.show_filter_by_solved_status||"discovery.categories"===s.currentRouteName||e.editingCategory)&&(!!t.siteSettings.allow_solved_on_all_topics||e.currentCategory?.enable_accepted_answers)}get statuses(){return["all","solved","unsolved"].map((e=>({name:a.default.t(`solved.topic_status_filter.${e}`),value:e})))}get status(){const e=this.router.currentRoute.attributes?.modelParams?.solved
return p[e]||"all"}changeStatus(e){this.router.transitionTo({queryParams:{solved:d[e]}})}},n=u(r.prototype,"router",[i.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=u(r.prototype,"siteSettings",[i.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u(r.prototype,"changeStatus",[s.action],Object.getOwnPropertyDescriptor(r.prototype,"changeStatus"),r.prototype),r)})),define("discourse/plugins/discourse-solved/discourse/connectors/category-custom-settings/solved-settings",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={actions:{onChangeSetting(e){this.set("category.custom_fields.enable_accepted_answers",e?"true":"false")}}}})),define("discourse/plugins/discourse-solved/discourse/connectors/topic-navigation/no-answer",["exports","@ember/runloop","discourse-common/config/environment"],(function(e,t,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const i=6048e5,o=i,a=(0,s.isTesting)()?0:2e3
e.default={shouldRender:(e,t)=>!t.site.mobileView,setupComponent(e,s){s.set("show",!1),s.setProperties({oneWeek:i,show:!1}),(0,t.later)((()=>{if(!s.element||s.isDestroying||s.isDestroyed)return
const t=e.topic,i=s.currentUser
!t.accepted_answer&&i&&t.user_id===i.id&&moment()-moment(t.created_at)>o&&t.postStream.posts.some((e=>e.user_id!==i.id&&e.can_accept_answer))&&s.set("show",!0)}),a)}}})),define("discourse/plugins/discourse-solved/discourse/connectors/user-activity-bottom/solved-list",["exports","@glimmer/component","@ember/service"],(function(e,t,s){"use strict"
var i,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(i=class extends t.default{constructor(){var e,t,s,i
super(...arguments),e=this,t="siteSettings",i=this,(s=o)&&Object.defineProperty(e,t,{enumerable:s.enumerable,configurable:s.configurable,writable:s.writable,value:s.initializer?s.initializer.call(i):void 0})}},a=i.prototype,r="siteSettings",n=[s.inject],l={configurable:!0,enumerable:!0,writable:!0,initializer:null},u={},Object.keys(l).forEach((function(e){u[e]=l[e]})),u.enumerable=!!u.enumerable,u.configurable=!!u.configurable,("value"in u||u.initializer)&&(u.writable=!0),u=n.slice().reverse().reduce((function(e,t){return t(a,r,e)||e}),u),c&&void 0!==u.initializer&&(u.value=u.initializer?u.initializer.call(c):void 0,u.initializer=void 0),void 0===u.initializer&&(Object.defineProperty(a,r,u),u=null),o=u,i)
var a,r,n,l,c,u})),define("discourse/plugins/discourse-solved/discourse/connectors/user-summary-stat/solved-count",["exports","@glimmer/component","@ember/service"],(function(e,t,s){"use strict"
var i,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(i=class extends t.default{constructor(){var e,t,s,i
super(...arguments),e=this,t="siteSettings",i=this,(s=o)&&Object.defineProperty(e,t,{enumerable:s.enumerable,configurable:s.configurable,writable:s.writable,value:s.initializer?s.initializer.call(i):void 0})}},a=i.prototype,r="siteSettings",n=[s.inject],l={configurable:!0,enumerable:!0,writable:!0,initializer:null},u={},Object.keys(l).forEach((function(e){u[e]=l[e]})),u.enumerable=!!u.enumerable,u.configurable=!!u.configurable,("value"in u||u.initializer)&&(u.writable=!0),u=n.slice().reverse().reduce((function(e,t){return t(a,r,e)||e}),u),c&&void 0!==u.initializer&&(u.value=u.initializer?u.initializer.call(c):void 0,u.initializer=void 0),void 0===u.initializer&&(Object.defineProperty(a,r,u),u=null),o=u,i)
var a,r,n,l,c,u})),define("discourse/plugins/discourse-solved/discourse/initializers/add-topic-list-class",["exports","discourse/components/topic-list-item","discourse-common/utils/decorators"],(function(e,t,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"add-topic-list-class",initialize(){var e,i,o,a,r,n,l,c
t.default.reopen((e=(0,s.default)(),i={unboundClassNames(){let e=this._super(...arguments)
return this.topic.has_accepted_answer&&(e+=" status-solved"),e}},o=i,a="unboundClassNames",r=[e],n=Object.getOwnPropertyDescriptor(i,"unboundClassNames"),l=i,c={},Object.keys(n).forEach((function(e){c[e]=n[e]})),c.enumerable=!!c.enumerable,c.configurable=!!c.configurable,("value"in c||c.initializer)&&(c.writable=!0),c=r.slice().reverse().reduce((function(e,t){return t(o,a,e)||e}),c),l&&void 0!==c.initializer&&(c.value=c.initializer?c.initializer.call(l):void 0,c.initializer=void 0),void 0===c.initializer&&(Object.defineProperty(o,a,c),c=null),i))}}})),define("discourse/plugins/discourse-solved/discourse/initializers/extend-for-solved-button",["exports","@ember/object","discourse/helpers/topic-status-icons","discourse/lib/ajax","discourse/lib/ajax-error","discourse/lib/plugin-api","discourse/lib/utilities","discourse/models/topic","discourse/models/user","discourse/raw-views/topic-status","discourse/widgets/post-cooked","discourse-common/lib/icon-library","I18n"],(function(e,t,s,i,o,a,r,n,l,c,u,d,p){"use strict"
function f(e){const t=e.getCurrentUser()
s.default.addObject(["has_accepted_answer","far-check-square","solved"]),e.includePostAttributes("can_accept_answer","can_unaccept_answer","accepted_answer","topic_accepted_answer"),e.addDiscoveryQueryParam&&e.addDiscoveryQueryParam("solved",{replace:!0,refreshModel:!0}),e.addPostMenuButton("solved",(e=>{if(e.can_accept_answer){return{action:"acceptAnswer",icon:"far-check-square",className:"unaccepted",title:"solved.accept_answer",label:t?.id===e.topicCreatedById?"solved.solution":null,position:e.topic_accepted_answer?"second-last-hidden":"first"}}if(e.accepted_answer)return e.can_unaccept_answer?{action:"unacceptAnswer",icon:"check-square",title:"solved.unaccept_answer",className:"accepted fade-out",position:"first",label:"solved.solution"}:{className:"hidden",disabled:"true",position:"first",beforeButton:e=>e("span.accepted-text",{title:p.default.t("solved.accepted_description")},[e("span",(0,d.iconNode)("check")),e("span.accepted-label",p.default.t("solved.solution"))])}})),e.decorateWidget("post-contents:after-cooked",(e=>{if(1===e.attrs.post_number){const t=e.getModel()
if(t){const s=t.topic
if(s.accepted_answer){const t=!!s.accepted_answer.excerpt,i=`\n            <aside class='quote accepted-answer' data-post="${s.get("accepted_answer").post_number}" data-topic="${s.id}">\n              <div class='title'>\n                ${s.acceptedAnswerHtml} <div class="quote-controls"></div>\n              </div>\n              <blockquote>\n                ${s.accepted_answer.excerpt}\n              </blockquote>\n            </aside>`,o=`\n            <aside class='quote accepted-answer'>\n              <div class='title title-only'>\n                ${s.acceptedAnswerHtml}\n              </div>\n            </aside>`,a=new u.default({cooked:t?i:o},e)
return e.rawHtml(a.init())}}}})),e.attachWidgetAction("post","acceptAnswer",(function(){const e=this.model;(function(e){const t=e.topic;(function(e){e.get("postStream.posts").forEach((e=>{e.get("post_number")>1&&e.setProperties({accepted_answer:!1,can_accept_answer:!0,can_unaccept_answer:!1,topic_accepted_answer:!1})}))})(t),e.setProperties({can_unaccept_answer:!0,can_accept_answer:!1,accepted_answer:!0}),t.set("accepted_answer",{username:e.username,name:e.name,post_number:e.post_number,excerpt:e.cooked}),(0,i.ajax)("/solution/accept",{type:"POST",data:{id:e.id}}).catch(o.popupAjaxError)})(e),this.appEvents.trigger("discourse-solved:solution-toggled",e),e.get("topic.postStream.posts").forEach((e=>{e.set("topic_accepted_answer",!0),this.appEvents.trigger("post-stream:refresh",{id:e.id})}))})),e.attachWidgetAction("post","unacceptAnswer",(function(){const e=this.model;(function(e){if(!e.can_unaccept_answer)return
const t=e.topic
e.setProperties({can_accept_answer:!0,can_unaccept_answer:!1,accepted_answer:!1}),t.set("accepted_answer",void 0),(0,i.ajax)("/solution/unaccept",{type:"POST",data:{id:e.id}}).catch(o.popupAjaxError)})(e),this.appEvents.trigger("discourse-solved:solution-toggled",e),e.get("topic.postStream.posts").forEach((e=>{e.set("topic_accepted_answer",!1),this.appEvents.trigger("post-stream:refresh",{id:e.id})}))}))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"extend-for-solved-button",initialize(){n.default.reopen({acceptedAnswerHtml:(0,t.computed)("accepted_answer","id",(function(){const e=this.get("accepted_answer.username"),t=this.get("accepted_answer.name"),s=this.get("accepted_answer.post_number")
if(!e||!s)return""
const i=this.siteSettings.display_name_on_posts&&t?t:(0,r.formatUsername)(e)
return p.default.t("solved.accepted_html",{icon:(0,d.iconHTML)("check-square",{class:"accepted"}),username_lower:e.toLowerCase(),username:i,post_path:`${this.url}/${s}`,post_number:s,user_path:l.default.create({username:e}).path})}))}),c.default.reopen({statuses:(0,t.computed)((function(){const e=this._super(...arguments)
return this.topic.has_accepted_answer?e.push({openTag:"span",closeTag:"span",title:p.default.t("topic_statuses.solved.help"),icon:"far-check-square",key:"solved"}):this.topic.can_have_answer&&this.siteSettings.solved_enabled&&this.siteSettings.empty_box_on_unsolved&&e.push({openTag:"span",closeTag:"span",title:p.default.t("solved.has_no_accepted_answer"),icon:"far-square"}),e}))}),(0,a.withPluginApi)("0.1",f),(0,a.withPluginApi)("0.8.10",(e=>{e.replaceIcon("notification.solved.accepted_notification","check-square")})),(0,a.withPluginApi)("0.11.0",(e=>{e.addAdvancedSearchOptions({statusOptions:[{name:p.default.t("search.advanced.statuses.solved"),value:"solved"},{name:p.default.t("search.advanced.statuses.unsolved"),value:"unsolved"}]})})),(0,a.withPluginApi)("0.11.7",(e=>{e.addSearchSuggestion("status:solved"),e.addSearchSuggestion("status:unsolved")}))}}})),define("discourse/plugins/discourse-solved/discourse/pre-initializers/extend-category-for-solved",["exports","@ember/object","discourse/models/category"],(function(e,t,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"extend-category-for-solved",before:"inject-discourse-objects",initialize(){s.default.reopen({enable_accepted_answers:(0,t.computed)("custom_fields.enable_accepted_answers",{get(e){return"true"===(0,t.get)(this.custom_fields,e)}})})}}})),define("discourse/plugins/discourse-solved/discourse/routes/user-activity-solved",["exports","discourse/routes/user-activity-stream","I18n"],(function(e,t,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=t.default.extend({userActionType:15,noContentHelpKey:"solved.no_solutions",emptyState(){const e=this.modelFor("user")
let t,i
return this.isCurrentUser(e)?(t=s.default.t("solved.no_solved_topics_title"),i=s.default.t("solved.no_solved_topics_body")):(t=s.default.t("solved.no_solved_topics_title_others",{username:e.username}),i=""),{title:t,body:i}}})})),define("discourse/plugins/discourse-solved/discourse/solved-route-map",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={resource:"user.userActivity",map(){this.route("solved")}}})),define("discourse/plugins/discourse-solved/discourse/templates/connectors/bread-crumbs-right/solved-status-filter",["exports","@ember/template-factory"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,t.createTemplateFactory)({id:"wZaZjQn9",block:'[[[41,[30,0,["siteSettings","solved_enabled"]],[[[1,"  "],[10,"li"],[12],[1,"\\n    "],[8,[39,1],[[24,0,"solved-status-filter"]],[["@content","@value","@valueProperty","@options","@onChange"],[[30,0,["statuses"]],[30,0,["status"]],"value",[28,[37,2],null,[["caretDownIcon","caretUpIcon"],["caret-right","caret-down"]]],[30,0,["changeStatus"]]]],null],[1,"\\n  "],[13],[1,"\\n"]],[]],null]],[],false,["if","combo-box","hash"]]',moduleName:"discourse/plugins/discourse-solved/discourse/templates/connectors/bread-crumbs-right/solved-status-filter.hbs",isStrictMode:!1})})),define("discourse/plugins/discourse-solved/discourse/templates/connectors/category-custom-settings/solved-settings",["exports","@ember/template-factory"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,t.createTemplateFactory)({id:"F36QesPH",block:'[[[10,"h3"],[12],[1,[28,[35,0],["solved.title"],null]],[13],[1,"\\n\\n"],[41,[51,[30,0,["siteSettings","allow_solved_on_all_topics"]]],[[[1,"  "],[10,"section"],[14,0,"field"],[12],[1,"\\n    "],[10,0],[14,0,"enable-accepted-answer"],[12],[1,"\\n      "],[10,"label"],[14,0,"checkbox-label"],[12],[1,"\\n        "],[11,"input"],[16,"checked",[30,0,["category","enable_accepted_answers"]]],[24,4,"checkbox"],[4,[38,2],["change",[28,[37,3],[[30,0],"onChangeSetting"],[["value"],["target.checked"]]]],null],[12],[13],[1,"\\n        "],[1,[28,[35,0],["solved.allow_accepted_answers"],null]],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n"]],[]],null],[1,"\\n"],[10,"section"],[14,0,"field auto-close-solved-topics"],[12],[1,"\\n  "],[10,"label"],[14,"for","auto-close-solved-topics"],[12],[1,"\\n    "],[1,[28,[35,0],["solved.solved_topics_auto_close_hours"],null]],[1,"\\n  "],[13],[1,"\\n  "],[11,"input"],[16,2,[30,0,["category","custom_fields","solved_topics_auto_close_hours"]]],[24,"min","0"],[24,1,"auto-close-solved-topics"],[24,4,"number"],[4,[38,2],["input",[28,[37,3],[[30,0],[28,[37,4],[[30,0,["category","custom_fields","solved_topics_auto_close_hours"]]],null]],[["value"],["target.value"]]]],null],[12],[13],[1,"\\n"],[13]],[],false,["i18n","unless","on","action","mut"]]',moduleName:"discourse/plugins/discourse-solved/discourse/templates/connectors/category-custom-settings/solved-settings.hbs",isStrictMode:!1})})),define("discourse/plugins/discourse-solved/discourse/templates/connectors/topic-after-cooked/solved-panel",["exports","ember-this-fallback/deprecations-helper","@ember/template-factory"],(function(e,t,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,s.createTemplateFactory)({id:"zLzOj8qd",block:'[[[41,[30,0,["topic","accepted_answer"]],[[[1,"  "],[10,2],[14,0,"solved"],[12],[1,"\\n    "],[1,[28,[35,1],[[30,0,["topic","acceptedAnswerHtml"]]],null]],[1,"\\n  "],[13],[1,"\\n"]],[]],null],[1,[28,[32,0],["[[\\"The `topic` property path was used in the `discourse/plugins/discourse-solved/discourse/templates/connectors/topic-after-cooked/solved-panel.hbs` template without using `this`. This fallback behavior has been deprecated, all properties must be looked up on `this` when used in the template: {{this.topic}}\\",false,{\\"id\\":\\"ember-this-fallback.this-property-fallback\\",\\"until\\":\\"n/a\\",\\"for\\":\\"ember-this-fallback\\",\\"url\\":\\"https://deprecations.emberjs.com/v3.x#toc_this-property-fallback\\",\\"since\\":{\\"available\\":\\"0.2.0\\"}}],[\\"The `topic` property path was used in the `discourse/plugins/discourse-solved/discourse/templates/connectors/topic-after-cooked/solved-panel.hbs` template without using `this`. This fallback behavior has been deprecated, all properties must be looked up on `this` when used in the template: {{this.topic}}\\",false,{\\"id\\":\\"ember-this-fallback.this-property-fallback\\",\\"until\\":\\"n/a\\",\\"for\\":\\"ember-this-fallback\\",\\"url\\":\\"https://deprecations.emberjs.com/v3.x#toc_this-property-fallback\\",\\"since\\":{\\"available\\":\\"0.2.0\\"}}]]"],null]]],[],false,["if","html-safe"]]',moduleName:"discourse/plugins/discourse-solved/discourse/templates/connectors/topic-after-cooked/solved-panel.hbs",scope:()=>[t.default],isStrictMode:!1})})),define("discourse/plugins/discourse-solved/discourse/templates/connectors/topic-navigation/no-answer",["exports","ember-this-fallback/deprecations-helper","@ember/template-factory"],(function(e,t,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,s.createTemplateFactory)({id:"HpmsEEIx",block:'[[[41,[30,0,["show"]],[[[1,"  "],[8,[39,1],null,[["@popupId","@dismissDuration"],["solved-notice",[30,0,["oneWeek"]]]],[["default"],[[[[1,"\\n    "],[10,"h3"],[12],[1,[28,[35,2],["solved.no_answer.title"],null]],[13],[1,"\\n    "],[10,2],[12],[1,[28,[35,2],["solved.no_answer.description"],null]],[13],[1,"\\n  "]],[]]]]],[1,"\\n"]],[]],null],[1,[28,[32,0],["[[\\"The `show` property path was used in the `discourse/plugins/discourse-solved/discourse/templates/connectors/topic-navigation/no-answer.hbs` template without using `this`. This fallback behavior has been deprecated, all properties must be looked up on `this` when used in the template: {{this.show}}\\",false,{\\"id\\":\\"ember-this-fallback.this-property-fallback\\",\\"until\\":\\"n/a\\",\\"for\\":\\"ember-this-fallback\\",\\"url\\":\\"https://deprecations.emberjs.com/v3.x#toc_this-property-fallback\\",\\"since\\":{\\"available\\":\\"0.2.0\\"}}],[\\"The `oneWeek` property path was used in the `discourse/plugins/discourse-solved/discourse/templates/connectors/topic-navigation/no-answer.hbs` template without using `this`. This fallback behavior has been deprecated, all properties must be looked up on `this` when used in the template: {{this.oneWeek}}\\",false,{\\"id\\":\\"ember-this-fallback.this-property-fallback\\",\\"until\\":\\"n/a\\",\\"for\\":\\"ember-this-fallback\\",\\"url\\":\\"https://deprecations.emberjs.com/v3.x#toc_this-property-fallback\\",\\"since\\":{\\"available\\":\\"0.2.0\\"}}]]"],null]]],[],false,["if","topic-navigation-popup","i18n"]]',moduleName:"discourse/plugins/discourse-solved/discourse/templates/connectors/topic-navigation/no-answer.hbs",scope:()=>[t.default],isStrictMode:!1})})),define("discourse/plugins/discourse-solved/discourse/templates/connectors/user-activity-bottom/solved-list",["exports","@ember/template-factory"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,t.createTemplateFactory)({id:"LlTha9wO",block:'[[[41,[30,0,["siteSettings","solved_enabled"]],[[[1,"  "],[10,"li"],[14,0,"user-activity-bottom-outlet solved-list"],[12],[1,"\\n    "],[8,[39,1],null,[["@route"],["userActivity.solved"]],[["default"],[[[[1,"\\n      "],[1,[28,[35,2],["check-square"],null]],[1,"\\n      "],[1,[28,[35,3],["solved.title"],null]],[1,"\\n    "]],[]]]]],[1,"\\n  "],[13],[1,"\\n"]],[]],null]],[],false,["if","link-to","d-icon","i18n"]]',moduleName:"discourse/plugins/discourse-solved/discourse/templates/connectors/user-activity-bottom/solved-list.hbs",isStrictMode:!1})})),define("discourse/plugins/discourse-solved/discourse/templates/connectors/user-card-metadata/accepted-answers",["exports","ember-this-fallback/deprecations-helper","@ember/template-factory"],(function(e,t,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,s.createTemplateFactory)({id:"291yN6VH",block:'[[[41,[30,0,["user","accepted_answers"]],[[[1,"  "],[10,"h3"],[12],[1,"\\n    "],[10,1],[14,0,"desc"],[12],[1,[28,[35,1],["solutions"],null]],[13],[1,"\\n    "],[1,[30,0,["user","accepted_answers"]]],[1,"\\n  "],[13],[1,"\\n"]],[]],null],[1,[28,[32,0],["[[\\"The `user` property path was used in the `discourse/plugins/discourse-solved/discourse/templates/connectors/user-card-metadata/accepted-answers.hbs` template without using `this`. This fallback behavior has been deprecated, all properties must be looked up on `this` when used in the template: {{this.user}}\\",false,{\\"id\\":\\"ember-this-fallback.this-property-fallback\\",\\"until\\":\\"n/a\\",\\"for\\":\\"ember-this-fallback\\",\\"url\\":\\"https://deprecations.emberjs.com/v3.x#toc_this-property-fallback\\",\\"since\\":{\\"available\\":\\"0.2.0\\"}}],[\\"The `user` property path was used in the `discourse/plugins/discourse-solved/discourse/templates/connectors/user-card-metadata/accepted-answers.hbs` template without using `this`. This fallback behavior has been deprecated, all properties must be looked up on `this` when used in the template: {{this.user}}\\",false,{\\"id\\":\\"ember-this-fallback.this-property-fallback\\",\\"until\\":\\"n/a\\",\\"for\\":\\"ember-this-fallback\\",\\"url\\":\\"https://deprecations.emberjs.com/v3.x#toc_this-property-fallback\\",\\"since\\":{\\"available\\":\\"0.2.0\\"}}]]"],null]]],[],false,["if","i18n"]]',moduleName:"discourse/plugins/discourse-solved/discourse/templates/connectors/user-card-metadata/accepted-answers.hbs",scope:()=>[t.default],isStrictMode:!1})})),define("discourse/plugins/discourse-solved/discourse/templates/connectors/user-summary-stat/solved-count",["exports","@ember/template-factory"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,t.createTemplateFactory)({id:"6oTL0oqO",block:'[[[41,[28,[37,1],[[30,0,["siteSettings","solved_enabled"]],[30,1,["model","solved_count"]]],null],[[[1,"  "],[10,"li"],[14,0,"user-summary-stat-outlet solved-count linked-stat"],[12],[1,"\\n    "],[8,[39,2],null,[["@route"],["userActivity.solved"]],[["default"],[[[[1,"\\n      "],[8,[39,3],null,[["@value","@label","@icon"],[[30,1,["model","solved_count"]],"solved.solution_summary","check-square"]],null],[1,"\\n    "]],[]]]]],[1,"\\n  "],[13],[1,"\\n"]],[]],null]],["@outletArgs"],false,["if","and","link-to","user-stat"]]',moduleName:"discourse/plugins/discourse-solved/discourse/templates/connectors/user-summary-stat/solved-count.hbs",isStrictMode:!1})}))

//# sourceMappingURL=discourse-solved-1af1df8f2f3f782e6aea05f6c483a916c73b4c5c074496c081c6392441eeed20.map
//!

;