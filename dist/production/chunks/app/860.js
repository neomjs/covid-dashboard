(self.webpackChunkcovid19_dashboard=self.webpackChunkcovid19_dashboard||[]).push([[860],{3110:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var o=r(4643),a=r(4249);class n extends a.Z{static getConfig(){return{className:"Neo.draggable.DragProxyComponent",ntype:"dragproxy",autoMount:!0,autoRender:!0,cls:["neo-dragproxy"],moveInMainThread:!0}}constructor(e){super(e);let t=this;t.on("mounted",t.onMounted,t)}onMounted(e){this.moveInMainThread&&Neo.main.addon.DragDrop.setDragProxyElement({appName:this.appName,id:e})}}Neo.applyClassConfig(n);var l=r(2926),i=(r(8389),r(1939));class s extends o.Z{static getStaticConfig(){return{observable:!0}}static getConfig(){return{className:"Neo.draggable.DragZone",ntype:"dragzone",addDragProxyCls:!0,alwaysFireDragMove:!1,appName:null,bodyCursorStyle:null,boundaryContainerId:null,data:null,dragElement:null,dragElementRect:null,dragProxy:null,dragProxyConfig_:null,dragProxyCls:"neo-dragproxy",dropZoneIdentifier:null,moveHorizontal:!0,moveInMainThread:!0,moveVertical:!0,offsetX:0,offsetY:0,owner:null,proxyParentId_:"document.body",scrollContainerId:null,scrollFactorLeft:1,scrollFactorTop:1,useProxyWrapper:!0}}constructor(e){super(e),Neo.main.addon.DragDrop||console.error("You can not use Neo.draggable.DragZone without adding Neo.main.addon.DragDrop to the main thread addons",this.id)}beforeGetDragProxyConfig(e){return Neo.clone(e,!0,!0)}createDragProxy(e){let t=this,r=Neo.getComponent(t.getDragElementRoot().id)||t.owner,o=t.dragElementRect,a=t.dragProxyConfig&&t.dragProxyConfig.vdom,s=i.Z.clone(a||t.dragElement);const d={module:n,appName:t.appName,moveInMainThread:t.moveInMainThread,parentId:t.proxyParentId,style:{height:`${e.height}px`,left:`${t.moveHorizontal?e.x:o.x}px`,top:`${t.moveVertical?e.y:o.y}px`,width:`${e.width}px`},...t.dragProxyConfig||{},vdom:t.useProxyWrapper?{cn:[s]}:s};d.cls=d.cls||[],r&&d.cls.push(r.getTheme()),s.cls&&!t.useProxyWrapper&&d.cls.push(...s.cls),t.addDragProxyCls&&d.cls&&l.Z.add(d.cls,t.dragProxyCls),t.dragProxy=Neo.create(d)}destroyDragProxy(){let e=this,t=e.dragProxy.id;setTimeout((()=>{Neo.currentWorker.promiseMessage("main",{action:"updateDom",appName:e.appName,deltas:[{action:"removeNode",id:t}]})}),e.moveInMainThread?0:30),e.dragProxy.destroy()}dragEnd(e){let t=this,r=t.owner,o=r.cls;l.Z.remove(o,"neo-is-dragging"),r.cls=o,t.dragProxy&&(t.destroyDragProxy(),t.dragProxy=null),Object.assign(t,{dragElementRect:null,offsetX:0,offsetY:0,scrollContainerId:null}),t.fire("dragEnd",e),t.resetData()}dragMove(e){let t,r=this;!r.moveInMainThread&&r.dragProxy&&(t=r.dragProxy.style,r.moveHorizontal&&(t.left=e.clientX-r.offsetX+"px"),r.moveVertical&&(t.top=e.clientY-r.offsetY+"px"),r.dragProxy.style=t),r.fire("dragMove",e)}dragStart(e){let t,r,o=this,a=o.owner,n=a.cls,i=o.getDragElementRect(e);o.setData(),Neo.main.addon.DragDrop.setConfigs({appName:o.appName,...o.getMainThreadConfigs()}),l.Z.add(n,"neo-is-dragging"),a.cls=n,t=e.clientX-i.left,r=e.clientY-i.top,Object.assign(o,{dragElementRect:i,offsetX:t,offsetY:r}),o.createDragProxy(i),o.fire("dragStart",{clientX:e.clientX,clientY:e.clientY,dragElementRect:i,eventData:e,id:o.id,offsetX:t,offsetY:r})}getDragElementRect(e){let t=this.getDragElementRoot().id;for(let r of e.path)if(r.id===t)return r.rect;for(let r of e.targetPath)if(r.id===t)return r.rect;return null}getDragElementRoot(){return this.dragElement}getMainThreadConfigs(){let e=this;return{alwaysFireDragMove:e.alwaysFireDragMove,bodyCursorStyle:e.bodyCursorStyle,boundaryContainerId:e.boundaryContainerId,dragElementRootId:e.getDragElementRoot().id,dragProxyCls:e.dragProxyCls,dragZoneId:e.id,dropZoneIdentifier:e.dropZoneIdentifier,moveHorizontal:e.moveHorizontal,moveVertical:e.moveVertical,scrollContainerId:e.scrollContainerId,scrollFactorLeft:e.scrollFactorLeft,scrollFactorTop:e.scrollFactorTop}}onDrop(e){this.fire("drop",e)}onDropEnter(e){this.fire("drop:enter",e)}onDropLeave(e){this.fire("drop:leave",e)}resetData(){setTimeout((()=>{this.data=null}),30)}setData(e={}){let t=this;t.data={dragElement:t.getDragElementRoot(),dragZoneId:t.id,...e}}}Neo.applyClassConfig(s)},2952:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var o=r(3110),a=r(2926),n=r(1939);class l extends o.Z{static getConfig(){return{className:"Neo.draggable.toolbar.DragZone",ntype:"toolbar-dragzone"}}constructor(e){super(e);let t=this,r=t.owner,o=r.domListeners,a={delegate:".neo-draggable",scope:t};o.push({"drag:end":t.onDragEnd,...a},{"drag:move":t.onDragMove,...a},{"drag:start":t.onDragStart,...a}),r.domListeners=o,r.on("insert",t.onItemInsert,t),t.adjustToolbarItemCls(!0)}adjustToolbarItemCls(e){let t=this.owner,r=t.vdom;r.cn.forEach((t=>{t.cls=t.cls||[],a.Z[e?"add":"remove"](t.cls,"neo-draggable")})),t.vdom=r}onDragEnd(e){if(this.owner.draggable){let e=this,t=e.dragProxy,r=t.cls||{},o=e.dragElementRect,n=t.wrapperStyle||{};a.Z.add(r,"neo-animate"),t.cls=r,setTimeout((()=>{n.left=`${o.left}px`,n.top=`${o.top}px`,t.wrapperStyle=n,setTimeout((()=>{e.dragEnd()}),300)}),30)}}onDragStart(e){let t=this;t.owner.draggable&&(t.dragElement=n.Z.findVdomChild(t.owner.vdom,e.path[0].id).vdom,t.dragStart(e))}onItemInsert(e){let t=e.item,r=t.cls||[];a.Z.add(r,"neo-draggable"),t.cls=r}}Neo.applyClassConfig(l);class i extends l{static getConfig(){return{className:"Neo.draggable.toolbar.SortZone",ntype:"toolbar-sortzone",alwaysFireDragMove:!0,currentIndex:-1,indexMap:null,itemRects:null,itemStyles:null,ownerRect:null,ownerStyle:null,reversedLayoutDirection:!1,sortDirection:"horizontal",startIndex:-1}}moveTo(e,t){this.owner.moveTo(e,t)}onDragEnd(e){let t,r=this,o=r.owner,a=r.itemStyles,n=o.style||{};o.sortable&&(n.height=r.ownerStyle.height||null,n.width=r.ownerStyle.width||null,o.style=n,o.items.forEach(((e,o)=>{t=e.style||{},Object.assign(t,{height:a[o].height||null,left:null,position:null,top:null,width:a[o].width||null}),o===r.startIndex&&(t.visibility=null),e.style=t})),r.startIndex!==r.currentIndex&&r.moveTo(r.startIndex,r.currentIndex),Object.assign(r,{currentIndex:-1,indexMap:null,itemRects:null,itemStyles:null,ownerRect:null,startIndex:-1}),r.dragEnd(e))}onDragMove(e){if(this.itemRects){let t,r,o=this,a=.55,n=o.currentIndex,l=o.itemRects,i=l.length-1,s=o.reversedLayoutDirection;"horizontal"===o.sortDirection?(t=e.clientX-o.offsetX-l[n].left,r="width"):(t=e.clientY-o.offsetY-l[n].top,r="height"),n>0&&(!s&&t<0||s&&t>0)?Math.abs(t)>l[n-1][r]*a&&(o.currentIndex--,o.switchItems(n,o.currentIndex)):n<i&&(!s&&t>0||s&&t<0)&&Math.abs(t)>l[n+1][r]*a&&(o.currentIndex++,o.switchItems(n,o.currentIndex))}}onDragStart(e){let t,r,o,a,l=this,i=Neo.getComponent(e.path[0].id),s=l.owner,d=l.itemStyles=[],g=s.layout,c=s.style||{};s.sortable&&(t=s.indexOf(i.id),r={},Object.assign(l,{currentIndex:t,dragElement:n.Z.findVdomChild(s.vdom,i.id).vdom,dragProxyConfig:{...l.dragProxyConfig||{},cls:[...s.cls]},indexMap:r,ownerStyle:{height:c.height,width:c.width},reversedLayoutDirection:"column-reverse"===g.direction||"row-reverse"===g.direction,sortDirection:"layout-vbox"===s.layout.ntype?"vertical":"horizontal",startIndex:t}),l.dragStart(e),s.items.forEach(((e,t)=>{r[t]=t,d.push({height:e.style&&e.style.height,width:e.style&&e.style.width})})),Neo.main.DomAccess.getBoundingClientRect({id:[s.id].concat(s.items.map((e=>e.id)))}).then((e=>{l.ownerRect=e[0],c.height=`${e[0].height}px`,c.width=`${e[0].width}px`,s.style=c,e.shift(),l.itemRects=e,s.items.forEach(((t,r)=>{o=t.style||{},a=e[r],t.style=Object.assign(o,{height:`${a.height}px`,left:`${a.left}px`,position:"absolute",top:`${a.top}px`,width:`${a.width}px`})})),setTimeout((()=>{o=i.style||{},o.visibility="hidden",i.style=o}),30)})))}switchItems(e,t){let r,o=this,a=o.reversedLayoutDirection;(!a&&t<e||a&&e<t)&&(r=e,e=t,t=r);let n=o.itemRects,l=o.indexMap,i=n[e],s=n[t],d={...i},g={...s};"horizontal"===o.sortDirection?(i.width=g.width,s.left=d.left+g.width,s.width=d.width):(i.height=g.height,s.height=d.height,s.top=d.top+g.height),r=l[e],l[e]=l[t],l[t]=r,o.updateItem(e,i),o.updateItem(t,s)}updateItem(e,t){let r=this.owner.items[this.indexMap[e]],o=r.style;o.left=`${t.left}px`,o.top=`${t.top}px`,r.style=o}}Neo.applyClassConfig(i)}}]);