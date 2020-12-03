(self.webpackChunkcovid19_dashboard=self.webpackChunkcovid19_dashboard||[]).push([[626],{5626:(e,t,s)=>{"use strict";s.r(t),s.d(t,{onStart:()=>A});var n=s(7112),o=s(7971),a=s(2926);class i extends n.Z{static getConfig(){return{className:"Neo.tree.List",ntype:"treelist",cls:["neo-tree-list"],disableSelection:!0,dragZone:null,showCollapseExpandAllIcons:!0,sortable_:!1,sortZone:null,sortZoneConfig:null,_vdom:{cn:[{tag:"ul",cls:["neo-list-container","neo-list"],cn:[]}]}}}onConstructed(){super.onConstructed();let e=this,t=e.vdom;e.showCollapseExpandAllIcons&&(t.cn.unshift({cls:["neo-treelist-menu-item","neo-treelist-collapse-all-icon"],cn:[{tag:"span",cls:["neo-treelist-menu-item-content"]}]},{cls:["neo-treelist-menu-item","neo-treelist-expand-all-icon"],cn:[{tag:"span",cls:["neo-treelist-menu-item-content"]}]}),e.vdom=t)}afterSetDraggable(e,t){let n=this;e&&(n.sortable?console.error("tree.List can be either draggable or sortable, not both.",n.id):n.dragZone||s.e(488).then(s.bind(s,9124)).then((e=>{n.dragZone=Neo.create({module:e.default,appName:n.appName,owner:n,...n.dragZoneConfig||{}})})))}afterSetSortable(e,t){let n=this;e&&(n.draggable?console.error("tree.List can be either draggable or sortable, not both.",n.id):n.sortZone||s.e(387).then(s.bind(s,3860)).then((e=>{n.sortZone=Neo.create({module:e.default,appName:n.appName,boundaryContainerId:n.id,owner:n,...n.sortZoneConfig||{}})})))}beforeSetStore(e,t){return e||(e=Neo.create(o.Z,{keyProperty:"id"})),super.beforeSetStore(e,t)}collapseAll(e=!1){let t,s=this,n=s.vdom,o=!1;s.store.items.forEach((e=>{e.isLeaf||(t=s.getVdomChild(s.getItemId(e.id),n),t.cls.includes("neo-folder-open")&&(a.Z.remove(t.cls,"neo-folder-open"),o=!0))})),o&&(s[e?"_vdom":"vdom"]=n)}createItems(e,t,s){let n,o,a=this,i=a.store.find("parentId",e);return i.length>0&&(t.cn||(t.cn=[]),null!==e?(t.cn.push({tag:"ul",cls:["neo-list"],cn:[],style:{paddingLeft:"15px"}}),o=t.cn[t.cn.length-1]):o=t,i.forEach((e=>{n=["neo-list-item"],e.isLeaf?n.push(e.singleton?"neo-list-item-leaf-singleton":"neo-list-item-leaf"):(n.push("neo-list-folder"),e.collapsed||n.push("neo-folder-open")),o.cn.push({tag:"li",cls:n,id:a.getItemId(e.id),cn:[{tag:"span",cls:["neo-list-item-content"],innerHTML:e.name,style:{pointerEvents:"none"}}],style:{padding:"10px",position:e.isLeaf?null:"sticky",top:e.isLeaf?null:38*s+"px",zIndex:e.isLeaf?null:20/(s+1)}}),o=a.createItems(e.id,o,s+1)}))),t}expandAll(e=!1){let t,s=this,n=s.vdom,o=!1;s.store.items.forEach((e=>{e.isLeaf||(t=s.getVdomChild(s.getItemId(e.id),n),t.cls.includes("neo-folder-open")||(a.Z.add(t.cls,"neo-folder-open"),o=!0))})),o&&(s[e?"_vdom":"vdom"]=n)}filter(e,t,s,n=!1){let o,a,i,r=this,l=!0,c=new RegExp(t,"gi"),d=r.vdom;return t||(t=""),r.store.items.forEach((m=>{m.parentId===s&&(a=!1,i=r.getVdomChild(r.getItemId(m.id),d),i.cn[0].innerHTML=m[e].replace(c,(e=>(a=!0,`<span class="neo-highlight-search">${e}</span>`))),o=!!m.isLeaf||r.filter(e,t,m.id,a||n),(a||n||!1===o||""===t)&&(l=!1),i.style.display=l?"none":"list-item")})),null===s&&(r.expandAll(!0),r.vdom=d),l}getListItemsRoot(){return this.vdom.cn[this.showCollapseExpandAllIcons?2:0]}onClick(e){e.target.cls.includes("neo-treelist-menu-item")?this.onMenuItemClick(e.target.cls):super.onClick(e)}onItemClick(e){let t,s,n,o,i=this,r=i.vdom,l=i.store.items,c=0,d=l.length,m=e.path.map((e=>e.id));for(;c<d;c++)if(n=l[c],o=i.getItemId(n.id),m.includes(o)){s=n,t=i.getVdomChild(o);break}t&&(t.cls&&t.cls.includes("neo-list-folder")?(a.Z.toggle(t.cls,"neo-folder-open"),i.vdom=r):(i.onLeafItemClick(s),i.fire("leafItemClick",s)),super.onItemClick(e))}onLeafItemClick(e){}onMenuItemClick(e){e.includes("neo-treelist-collapse-all-icon")?this.collapseAll():this.expandAll()}}Neo.applyClassConfig(i);var r=s(9541);class l extends r.Z{static getConfig(){return{className:"Docs.app.model.Api",fields:[{name:"className",type:"String"},{name:"collapsed",type:"Boolean"},{name:"id",type:"Integer"},{name:"isLeaf",type:"Boolean"},{name:"name",type:"String"},{name:"parentId",type:"Integer"},{name:"path",type:"String"},{name:"singleton",type:"Boolean"},{name:"srcPath",type:"String"}]}}}Neo.applyClassConfig(l);var c=s(2471);class d extends c.Z{static getConfig(){return{className:"Docs.app.store.Api",keyProperty:"id",model:l}}}Neo.applyClassConfig(d);class m extends i{static getConfig(){return{className:"Docs.app.view.ApiTreeList",ntype:"api-treelist",store:d}}onConstructed(){super.onConstructed();let e=this;Neo.Xhr.promiseJson({url:"../../docs/output/structure.json"}).then((t=>{let s=e.vdom,n=e.getListItemsRoot();e.store.data=t.json,n=e.createItems(null,n,0),e.vdom=s}))}}Neo.applyClassConfig(m);var p=s(805),h=s(4249);class u extends h.Z{static getConfig(){return{className:"Docs.app.view.classdetails.SourceViewComponent",ntype:"classdetails-sourceviewcomponent",isHighlighted_:!1,line_:null,previousLine:null,structureData:null,style:{overflow:"auto"},_vdom:{cn:[{tag:"pre",cn:[{tag:"code",class:"javascript"}]}]}}}constructor(e){super(e);let t=this,s="../../"+t.structureData.srcPath;Neo.Xhr.promiseRequest({url:s}).then((e=>{setTimeout((()=>{t.applySourceCode(e.response)}),100)}))}afterSetIsHighlighted(e,t){if(e){let e=this;setTimeout((()=>{Neo.main.addon.HighlightJS.syntaxHighlightLine({addLine:e.line,removeLine:e.previousLine,vnodeId:e.vdom.cn[0].id})}),50)}}afterSetLine(e,t){let s=this;t&&(s.previousLine=t),s.isHighlighted&&s.afterSetIsHighlighted(!0,!1)}applySourceCode(e){let t=this,s=t.vdom,n=s.cn[0];n.cn[0].innerHTML=e,t.vdom=s,setTimeout((()=>{t.syntaxHighlight(n.id)}),50)}syntaxHighlight(e){let t,s=this;s.vnode?Neo.main.addon.HighlightJS.syntaxHighlight({vnodeId:s.vdom.cn[0].id}).then((()=>{s.isHighlighted=!0})):t=s.on("mounted",(()=>{setTimeout((()=>{s.un("mounted",t),s.syntaxHighlight(e)}),50)}))}}Neo.applyClassConfig(u);class g extends h.Z{static getConfig(){return{className:"Docs.app.view.classdetails.HeaderComponent",ntype:"classdetails-headercomponent",cls:["neo-docs-classdetails-headercomponent"],record_:null,domListeners:{click:{fn:"onHeaderClick",delegate:".neo-docs-header-text"}},_vdom:{cn:[{tag:"span",cls:["neo-docs-header-text"]}]}}}onConstructed(){super.onConstructed();let e=this,t=e.vdom,s=e.record.className,n=e.up("main-container").store.find({$kind:"Neo"===s?"module":"class",neoClassName:s})[0],o=0,a=n&&n.tags&&n.tags.length||0,i=!1;for(;o<a;o++)if("singleton"===n.tags[o].title){i=!0;break}t.cn[0].innerHTML=i?s+" → Singleton":s,n.description&&t.cn.push({cls:["neo-docs-header-description"],innerHTML:n.description}),e.vdom=t}}Neo.applyClassConfig(g);class f extends i{static getConfig(){return{className:"Docs.app.view.classdetails.HierarchyTreeList",ntype:"classhierarchy-treelist",cls:["docs-classhierarchy-treelist","neo-list-container","neo-tree-list","neo-list"],showCollapseExpandAllIcons:!1,structureData:null}}onConstructed(){super.onConstructed();let e=this;e.createStoreItems(),e.createItems(null,e.getListItemsRoot(),0)}createStoreItems(){let e,t,s=this,n=s.structureData.className,o=s.up("main-container").store,a=[],i=[];for(e=o.find({$kind:"Neo"===n?"module":"class",neoClassName:s.structureData.className})[0],i.unshift(e);e&&e.hasOwnProperty("augments");)e=o.find({$kind:"class",neoClassName:e.augments[0]})[0],i.unshift(e);i.forEach(((e,s)=>{e&&(t=i[s-1]?i[s-1].id:null,a.push({checked:!0,id:e.id,isLeaf:!0,name:e.neoClassName,parentId:t}))})),s.store.items=a}onLeafItemClick(e){let t=this,s=t.getItemId(e.id),n=t.vdom,o=t.getVdomChild(s);a.Z[e.checked?"add":"remove"](o.cls,"unchecked"),e.checked=!e.checked,t.vdom=n,t.fire("refreshClassMembers")}}Neo.applyClassConfig(f);var C=s(1853);class y extends C.Z{static getConfig(){return{className:"Docs.app.view.classdetails.MainContainerController",ntype:"docs-classdetails-maincontainer-controller"}}onHeaderClick(e){let t=this.view.structureData,s=this.view.up("main-container").down("docs-content-tabcontainer"),n=(t.path?t.path+".":"")+t.name;s.add({module:u,id:n+"__source",structureData:t,tabButtonConfig:{iconCls:"fa fa-code",text:n}})}onMutateItems(e){let t=this,s=0,n=0,o=0,a=0,i=0,r=0;e.items.forEach((e=>{"function"===e.kind?o++:"member"===e.kind?s++:n++,"private"===e.access?a++:"protected"===e.access&&i++,"static"===e.scope&&r++})),t.getReference("showConfigs").text="Configs "+s,t.getReference("showMethods").text="Methods "+o,t.getReference("showEvents").text="Events "+n,t.getReference("showPrivateMembers").text="Private "+a,t.getReference("showProtectedMembers").text="Protected "+i,t.getReference("showStaticMembers").text="Static "+r}onScrollIntoView(e){let t=Neo.getComponent(e.target.id);Neo.main.addon.HighlightJS.scrollIntoView({text:t.reference.substr(4),vnodeId:this.view.vdom.id})}onSearchFieldChange(e){this.getReference("classdetails-memberslist").filterMembersQuery=e.value}onToggleMembers(e){let t=Neo.getComponent(e.target.id),s=this.getReference("classdetails-memberslist");t.iconCls=t.checked?"fa fa-square":"fa fa-check-square",t.checked=!t.checked,s[t.reference]=t.checked}}Neo.applyClassConfig(y);class v extends n.Z{static getConfig(){return{className:"Docs.app.view.classdetails.MembersList",ntype:"classdetails-memberslist",cls:["docs-classhierarchy-memberslist"],filterMembersQuery_:"",showPrivateMembers_:!0,showProtectedMembers_:!0,showStaticMembers_:!0,store:null,targetClassName:null,_vdom:{cn:[]}}}onConstructed(){super.onConstructed();let e=this,t=e.up("classdetails-maincontainer").down("classhierarchy-treelist"),s=e.up("main-container").store;t.on({refreshClassMembers:e.onRefreshClassMembers,scope:e}),e.store=Neo.create(o.Z,{filterMode:"advanced",sourceId:s.id}),e.onRefreshClassMembers()}afterSetFilterMembersQuery(e,t){void 0!==t&&this.onRefreshClassMembers()}afterSetShowProtectedMembers(e,t){void 0!==t&&this.onRefreshClassMembers()}afterSetShowPrivateMembers(e,t){void 0!==t&&this.onRefreshClassMembers()}afterSetShowStaticMembers(e,t){void 0!==t&&this.onRefreshClassMembers()}applyConfigsHeader(e,t){return e.items[0]&&"member"===e.items[0].kind&&t.cn.push({},{cls:["neo-docs-memberlist-group-header"],innerHTML:"Configs","data-list-header":"Configs"}),t}applyEventsHeader(e,t,s,n){return"event"===e.kind&&s.items[t-1]&&"event"!==s.items[t-1].kind&&n.cn.push({},{cls:["neo-docs-memberlist-group-header"],innerHTML:"Events",style:{zIndex:3},"data-list-header":"Events"}),n}applyMethodsHeader(e,t,s,n){return"function"===e.kind&&(!s.items[t-1]||s.items[t-1]&&"function"!==s.items[t-1].kind)&&n.cn.push({},{cls:["neo-docs-memberlist-group-header"],innerHTML:"Methods",style:{zIndex:2},"data-list-header":"Methods"}),n}createItems(){let e,t,s,n,o=this,a=new RegExp(o.filterMembersQuery||"","gi"),i=!1,r=o.targetClassName,l=o.vdom;l.cn=[],l=o.applyConfigsHeader(o.store,l),o.store.items.forEach(((c,d)=>{l=o.applyEventsHeader(c,d,o.store,l),l=o.applyMethodsHeader(c,d,o.store,l),t=[],"_"===c.name.substr(-1)&&(c.name=c.name.slice(0,-1),t.push("GS")),c.neoClassName!==r&&t.push("inherited"),"private"!==c.access&&"protected"!==c.access||t.push(c.access),"static"===c.scope&&t.push("static"),e=c.name,""!==o.filterMembersQuery&&null!==o.filterMembersQuery&&(e=e.replace(a,(e=>`<span class="neo-highlight-search">${e}</span>`))),c.type&&c.type.names&&(e+=": {"+v.escapeHtml(c.type.names.join("|"))+"}"),c.hasOwnProperty("defaultvalue")&&(e+=" = "+c.defaultvalue),c.params&&"event"!==c.kind&&(e+="("+c.params.reduce(((e,t)=>(t.name.indexOf(".")<0&&(t.optional?e.push("["+t.name+"]"):e.push(t.name)),e)),[]).join(", ")+")"),c.returns&&(e+=" → {"+v.escapeHtml(c.returns[0].type.names.join("|")+"}")),n=c.meta.path,n.includes("/neo.mjs/")?n=n.substr(n.indexOf("/neo.mjs/")+9):n.includes("/neomjs/")?n=n.substr(n.indexOf("/neomjs/")+8):n.includes("/neo/")&&(n=n.substr(n.indexOf("/neo/")+5)),s={cls:["neo-list-item"],cn:[{cls:["neo-list-item-header-container"],cn:[{cls:["neo-list-item-header"],innerHTML:e},{style:{flex:1}},{cls:["neo-list-item-header"],innerHTML:t.join(", ")}]},{cls:"neo-docs-view-source-link-container",cn:[{tag:"a",cls:["neo-docs-view-source-link"],href:"#viewSource="+c.neoClassName+"&line="+c.meta.lineno,innerHTML:"Source: "+n+"/"+c.meta.filename+" (Line "+c.meta.lineno+")"}]},{innerHTML:c.description}]},c.examples&&c.examples.length>0&&(i=!0,c.examples.forEach((e=>{s.cn.push({tag:"pre",cn:[{tag:"code",html:e}]})}))),c.params&&c.params.length>0&&s.cn.push(v.createParametersTable(c.params)),c.returns&&"event"!==c.kind&&s.cn.push({innerHTML:"Returns {"+v.escapeHtml(c.returns[0].type.names.join("|")+"} ")+(c.returns[0].description||"")}),l.cn.push(s)})),o.vdom=l,i&&setTimeout((()=>{Neo.main.addon.HighlightJS.syntaxHighlightInit()}),100)}static createParametersTable(e){let t,s,n,o=!1,a=!1;return e.forEach((e=>{e.hasOwnProperty("defaultvalue")&&(o=!0),e.hasOwnProperty("optional")&&(a=!0)})),n={tag:"table",cls:"docs-param-table",cn:[{tag:"thead",cn:[{tag:"th",innerHTML:"Name"},{tag:"th",innerHTML:"Type"},{tag:"th",innerHTML:"Description"}]}]},o&&n.cn[0].cn.splice(2,0,{tag:"th",innerHTML:"Default"}),a&&n.cn[0].cn.splice(2,0,{tag:"th",innerHTML:"Optional"}),e.forEach((i=>{i.name.indexOf(".")<0&&(t={tag:"td",innerHTML:i.description},s=[],e.forEach((e=>{0===e.name.indexOf(i.name+".")&&((e=Neo.clone(e,!0)).name=e.name.split("."),e.name.shift(),e.name=e.name.join("."),s.push(e))})),s.length>0&&(t={tag:"td",cn:[{innerHTML:t.innerHTML},v.createParametersTable(s)]}),n.cn.push({tag:"tr",cn:[{tag:"td",innerHTML:i.name},{tag:"td",innerHTML:i.type?v.escapeHtml(i.type.names.join(" | ")):""},t]}),o&&n.cn[n.cn.length-1].cn.splice(2,0,{tag:"td",innerHTML:void 0===i.defaultvalue?"":i.defaultvalue+""}),a&&n.cn[n.cn.length-1].cn.splice(2,0,{tag:"td",innerHTML:i.optional}))})),n}static escapeHtml(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;")}filterAndSortItems(){let e,t,s=this,n={},o=s.up("classdetails-maincontainer").down("classhierarchy-treelist").store.items,a=0,i=[];for(o.forEach((e=>{!0===e.checked&&i.push(e.name)})),t=i.length;a<t;a++)n[i[a]]=a;s.targetClassName=o[o.length-1].name,e=[{operator:"included",property:"neoClassName",value:i},{operator:"!==",property:"kind",value:"class"},{operator:"!==",property:"kind",value:"constant"},{operator:"!==",property:"kind",value:"module"},{operator:"isUndefined",property:"inherited"}],s.showPrivateMembers||e.push({operator:"!==",property:"access",value:"private"}),s.showProtectedMembers||e.push({operator:"!==",property:"access",value:"protected"}),s.showStaticMembers||e.push({operator:"!==",property:"scope",value:"static"}),""!==s.filterMembersQuery&&null!==s.filterMembersQuery&&e.push({operator:"like",property:"name",value:s.filterMembersQuery}),e.push({scope:s,filterBy:function(e,t,s){let o,a,i,r=this.targetClassName;if("ntype"===e.name&&e.neoClassName!==r)return!0;if(e.neoClassName!==r)for(a=0,i=t.length;a<i;a++)if(o=t[a],e.id!==o.id&&e.name===o.name&&e.scope===o.scope&&n[e.neoClassName]<n[o.neoClassName])return!0;return!1}}),s.store.filters=e,s.store.sorters=[{sortBy:function(e,t){return(e="member"===e.kind?0:"function"===e.kind?1:2)>(t="member"===t.kind?0:"function"===t.kind?1:2)?1:e<t?-1:0}},{direction:"ASC",property:"name"}],s.fire("mutateItems",s.store)}onStoreFilter(){}onRefreshClassMembers(){this.filterAndSortItems(),this.createItems()}}Neo.applyClassConfig(v);var x=s(4242),b=s(1601);class N extends b.Z{static getConfig(){return{className:"Neo.form.field.Search",ntype:"searchfield",cls:["neo-searchfield","neo-textfield"],hideLabel:!0,placeholderText:"Search"}}}Neo.applyClassConfig(N);class w extends p.Z{static getConfig(){return{className:"Docs.app.view.classdetails.MainContainer",ntype:"classdetails-maincontainer",cls:["neo-docs-classdetails-maincontainer","neo-container"],controller:y,layout:{ntype:"vbox",align:"stretch"},structureData:null,items:[{ntype:"container",_cls:["neo-docs-classdetails-headercontainer"],flex:"0 1 auto",layout:{ntype:"hbox",align:"stretch"},items:[{module:x.Z,cls:["neo-docs-classdetails-headerpanel","neo-panel","neo-container"],headers:[{dock:"bottom",style:{borderWidth:0},items:[{handler:"onScrollIntoView",reference:"showConfigs",style:{marginRight:"5px"},text:"Configs"},{handler:"onScrollIntoView",reference:"showMethods",style:{marginRight:"5px"},text:"Methods"},{handler:"onScrollIntoView",reference:"showEvents",text:"Events"},{ntype:"component",flex:1},{module:N,listeners:{change:"onSearchFieldChange"},placeholderText:"Filter Members",width:160,style:{margin:0,marginRight:"5px",paddingTop:"2px"}},{checked:!0,handler:"onToggleMembers",iconCls:"fa fa-check-square",reference:"showPrivateMembers",style:{marginRight:"5px"},text:"Private"},{checked:!0,handler:"onToggleMembers",iconCls:"fa fa-check-square",reference:"showProtectedMembers",style:{marginRight:"5px"},text:"Protected"},{checked:!0,handler:"onToggleMembers",iconCls:"fa fa-check-square",reference:"showStaticMembers",text:"Static"}]}],items:[{module:g,flex:1,record:"@config:structureData"}]},{module:f,flex:"0 0 auto",minWidth:330,structureData:"@config:structureData"}]},{module:v,flex:1,listeners:{mutateItems:"onMutateItems"},reference:"classdetails-memberslist"}]}}}Neo.applyClassConfig(w);var k=s(7886),I=s(4250);class L extends k.Z{static getConfig(){return{className:"Docs.app.view.ContentTabContainer",ntype:"docs-content-tabcontainer",activateInsertedTabs:!0,contentContainerDefaults:{cls:["neo-docs-tab-content-container","neo-tab-content-container","neo-container"]},headerToolbarDefaults:{cls:["docs-tab-header-toolbar","neo-tab-header-toolbar","neo-toolbar"]},items:[{ntype:"component",html:"Welcome to the neo.mjs docs!",style:{padding:"20px"},tabButtonConfig:{iconCls:"fa fa-users",text:"Welcome!"}}],sortable:!0}}constructor(e){super(e);let t=this.cls;t.unshift("docs-content-tabcontainer"),this.cls=t}getTabButtonConfig(e,t){let s=this;return{module:I.Z,flex:"none",index:t,pressed:s.activeIndex===t,domListeners:[{click:function(e){let t=e.path.map((e=>e.id));0===t[0].indexOf("neo-tab-header-button-")?s.activeIndex=e.component.index:s.removeAt(Neo.getComponent(s.tabBarId).indexOf(t[1]))},scope:s}],...e}}}Neo.applyClassConfig(L);class S extends r.Z{static getConfig(){return{className:"Docs.app.model.Example",fields:[{name:"collapsed",type:"Boolean"},{name:"id",type:"Integer"},{name:"isLeaf",type:"Boolean"},{name:"name",type:"String"},{name:"parentId",type:"Integer"},{name:"path",type:"String"}]}}}Neo.applyClassConfig(S);class M extends c.Z{static getConfig(){return{className:"Docs.app.store.Examples",keyProperty:"id",model:S}}}Neo.applyClassConfig(M);class T extends i{static getConfig(){return{className:"Docs.app.view.ExamplesTreeList",ntype:"examples-treelist",cls:["docs-examples-treelist","neo-tree-list","neo-list-container","neo-list"],store:M}}onConstructed(){super.onConstructed();let e=this;Neo.Xhr.promiseJson({url:"../../docs/examples.json"}).then((t=>{let s=e.vdom,n=e.getListItemsRoot();e.store.data=t.json,n=e.createItems(null,n,0),e.vdom=s}))}}Neo.applyClassConfig(T);var H=s(2509);class D extends p.Z{static getConfig(){return{className:"Docs.app.view.HeaderContainer",ntype:"neo-docs-header-container",cls:["neo-docs-header-container"],height:55,layout:{ntype:"hbox",align:"stretch"},items:[{module:N,listeners:{change:"onNavigationSearchFieldChange"},placeholderText:"Filter Navigation",style:{padding:"10px"},width:240},{module:H.Z,domListeners:{click:"onSwitchThemeButtonClick"},flex:"none",height:27,reference:"theme-button",style:{marginTop:"5px"},text:"Theme Dark"},{module:H.Z,domListeners:{click:"onSwitchSourceViewThemeButtonClick"},flex:"none",height:27,reference:"source-view-theme-button",style:{marginLeft:"10px",marginTop:"5px"},text:"Source View Theme Dark"},{ntype:"component",flex:1},{ntype:"component",cls:["neo-logo-text"],html:"neo.mjs docs",width:210}]}}}Neo.applyClassConfig(D);class R extends C.Z{static getConfig(){return{className:"Docs.app.view.MainContainerController",ntype:"docs-maincontainer-controller"}}onApiListLeafClick(e){this.getReference("content-tabcontainer").add({ntype:"classdetails-maincontainer",id:e.className,structureData:e,tabButtonConfig:{iconCls:e.singleton?"fa fa-arrow-alt-circle-right":"fa fa-copyright",text:e.name}})}onExamplesListLeafClick(e){let t,s=this.getReference("content-tabcontainer"),n=e.name,o=[],a=this.getReference("examples-treelist").store,i=e;for(;null!==i.parentId;)i=a.get(i.parentId),n=i.name+"."+n;n="examples_"+n,t={iconCls:"fa fa-desktop",text:e.name},Array.isArray(e.path)?(e.path.forEach((e=>{o.push(import(e))})),Promise.all(o).then((function(e){let o=[];e.forEach((e=>{o.push({ntype:e.default.prototype.ntype})})),s.add({ntype:"container",id:n,items:o,style:{padding:"10px"},tabButtonConfig:t})}))):import(e.path).then((e=>{s.add({ntype:e.default.prototype.ntype,id:n,tabButtonConfig:t})}))}onHashChange(e,t){let s,n,o=e&&e.hash,a=this.getReference("content-tabcontainer"),i=this.getReference("api-treelist").store;o&&o.hasOwnProperty("viewSource")&&(s=i.find("className",o.viewSource)[0],s&&(n=a.add({ntype:"classdetails-sourceviewcomponent",id:o.viewSource+"__source",line:o.line,structureData:s,tabButtonConfig:{iconCls:"fa fa-code",text:s.name}}),n.line=o.line))}onNavigationSearchFieldChange(e){let t=this,s=e.value;t.getReference("examples-treelist").filter("name",s,null),t.getReference("api-treelist").filter("name",s,null),t.getReference("tutorials-treelist").filter("name",s,null)}onSwitchSourceViewThemeButtonClick(){let e,t,s=this.getReference("source-view-theme-button");"Source View Theme Light"===s.text?(e="Source View Theme Dark",t="./resources/highlightjs-custom-github-theme.css"):(e="Source View Theme Light",t="./resources/highlightjs-custom-dark-theme.css"),Neo.main.addon.Stylesheet.swapStyleSheet({href:t,id:"hljs-theme"}).then((t=>{s.text=e}))}onSwitchThemeButtonClick(){let e,t,s,n,o=this.getReference("theme-button"),i=this.view;"Theme Light"===o.text?(e="Theme Dark",s="../dist/development/neo-theme-light-no-css-vars.css",n="neo-theme-light"):(e="Theme Light",s="../dist/development/neo-theme-dark-no-css-vars.css",n="neo-theme-dark"),Neo.config.useCssVars?(t=[...i.cls],i.cls.forEach(((e,s)=>{e.includes("neo-theme")&&a.Z.remove(t,e)})),a.Z.add(t,n),i.cls=t,o.text=e):Neo.main.addon.Stylesheet.swapStyleSheet({href:s,id:"neo-theme"}).then((t=>{o.text=e}))}onTutorialListLeafClick(e){this.getReference("content-tabcontainer").add({ntype:"classdetails-tutorialcomponent",fileName:e.fileName,fileType:e.type,id:e.name,tabButtonConfig:{iconCls:"fa fa-hands-helping",text:e.name}})}}Neo.applyClassConfig(R);class Z extends h.Z{static getConfig(){return{className:"Docs.app.view.classdetails.TutorialComponent",ntype:"classdetails-tutorialcomponent",cls:["neo-classdetails-tutorialcomponent"],fileName:null,fileType:null,style:{overflow:"auto"}}}constructor(e){super(e);let t=this,s="json"===t.fileType,n="../../docs/tutorials/"+t.fileName;Neo.Xhr[s?"promiseJson":"promiseRequest"]({url:n}).then((e=>{setTimeout((()=>{t.applySourceCode(s?e.json:e.response)}),100)}))}applySourceCode(e){let t=this,s=t.vdom;"json"===t.fileType?s.cn=e:s.innerHTML=e,t.vdom=s,setTimeout((()=>{Z.syntaxHighlight()}),50)}static syntaxHighlight(){Neo.main.addon.HighlightJS.syntaxHighlightInit()}}Neo.applyClassConfig(Z);class E extends r.Z{static getConfig(){return{className:"Docs.app.model.Example",fields:[{name:"fileName",type:"String"},{name:"id",type:"Integer"},{name:"isLeaf",type:"Boolean"},{name:"name",type:"String"},{name:"parentId",type:"Integer"},{name:"type",type:"String"}]}}}Neo.applyClassConfig(E);class P extends c.Z{static getConfig(){return{className:"Docs.app.store.Tutorials",keyProperty:"id",model:E}}}Neo.applyClassConfig(P);class j extends i{static getConfig(){return{className:"Docs.app.view.TutorialsTreeList",ntype:"tutorials-treelist",cls:["docs-tutorials-treelist","neo-tree-list","neo-list-container","neo-list"],store:P}}onConstructed(){super.onConstructed();let e=this;Neo.Xhr.promiseJson({url:"../../docs/tutorials/tutorials.json"}).then((t=>{let s=e.vdom,n=e.getListItemsRoot();e.store.data=t.json,n=e.createItems(null,n,0),e.vdom=s}))}}Neo.applyClassConfig(j);var B=s(6748);class _ extends B.Z{static getConfig(){return{className:"Docs.app.view.MainContainer",ntype:"main-container",autoMount:!0,cls:["neo-docs-maincontainer","neo-viewport"],controller:R,layout:{ntype:"vbox",align:"stretch"},store_:null,items:[D,{ntype:"container",flex:1,layout:{ntype:"hbox",align:"stretch"},items:[{ntype:"tab-container",cls:["neo-docs-navigation-tab-container","neo-tab-container"],minWidth:290,sortable:!0,width:290,items:[{module:m,listeners:{leafItemClick:"onApiListLeafClick"},reference:"api-treelist",tabButtonConfig:{iconCls:"fa fa-code",text:"API"}},{module:j,listeners:{leafItemClick:"onTutorialListLeafClick"},reference:"tutorials-treelist",tabButtonConfig:{iconCls:"fa fa-hands-helping",text:"Tutorials"}},{module:T,listeners:{leafItemClick:"onExamplesListLeafClick"},reference:"examples-treelist",tabButtonConfig:{iconCls:"fa fa-desktop",text:"Examples"}}]},{module:L,flex:1,reference:"content-tabcontainer"}]}]}}constructor(e){super(e);let t=this;t.store||(t.store=Neo.create(o.Z,{keyProperty:"id"})),t.items[1].items[0].items[2].tabButtonConfig.disabled="development"!==Neo.config.environment}onConstructed(){super.onConstructed();let e=this;Neo.Xhr.promiseJson({url:"../../docs/output/all.json"}).then((t=>{e.store.items=t.json}))}}Neo.applyClassConfig(_);const A=()=>Neo.app({appPath:"docs/",mainView:_,name:"Docs"})}}]);