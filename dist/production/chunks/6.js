self.webpackChunk([6],{17:function(e,t,o){"use strict";o.d(t,"a",(function(){return s}));var n=o(3);o(20);class s extends n.a{static getConfig(){return{className:"Neo.container.Panel",ntype:"panel",cls:["neo-panel","neo-container"],containerConfig:null,headerDefaults:null,headers:null,_layout:{ntype:"vbox",align:"stretch"},verticalHeadersFirst:!1}}constructor(e){super(e);let t=this;(e&&!0===e.verticalHeadersFirst||!0===t.verticalHeadersFirst)&&(t.layout={ntype:"hbox",align:"stretch"})}createItems(){let e,t=this,o=!1===t.verticalHeadersFirst,n=t.headers||[],i=n.filter(e=>e.dock===(o?"bottom":"right")),r=n.filter(e=>e.dock===(o?"left":"top")),a=n.filter(e=>e.dock===(o?"right":"bottom")),l=n.filter(e=>e.dock===(o?"top":"left")),c=i.length>0||l.length>0,m=r.length>0||a.length>0,d=t.items,u=[],p=[];n.length<1&&Neo.error("Panel without headers, please use a Container instead",t.id),l.forEach(e=>{p.push(s.createHeaderConfig(e))}),m&&(o&&c||!o&&c)?(r.forEach(e=>{u.push(s.createHeaderConfig(e))}),e={ntype:"container",flex:1,items:d,itemDefaults:t.itemDefaults,...t.containerConfig||{}},u.push({...t.headerDefaults,...e}),a.forEach(e=>{u.push(s.createHeaderConfig(e))}),p.push({ntype:"container",items:u,layout:{ntype:o?"hbox":"vbox",align:"stretch"}})):(e={ntype:"container",flex:1,items:d,itemDefaults:t.itemDefaults,...t.containerConfig||{}},p.push({...t.headerDefaults,...e})),i.forEach(e=>{p.push(s.createHeaderConfig(e))}),t.items=p,t.itemDefaults=null,super.createItems()}static createHeaderConfig(e){let t={ntype:"toolbar",flex:"0 1 auto"};return e.text&&(t.items=[{ntype:"label",cls:["neo-panel-header-text","neo-label"],text:e.text}],delete e.text),Neo.isArray(e.items)&&e.items.forEach(e=>{"label"===e.ntype&&(e.cls=["neo-panel-header-text","neo-label"])}),{...t,...e}}}Neo.applyClassConfig(s)},24:function(e,t,o){"use strict";o.d(t,"a",(function(){return s}));var n=o(29);class s extends n.a{static getConfig(){return{className:"Neo.form.field.Range",ntype:"rangefield",clearable:!1,cls:["neo-rangefield","neo-textfield"],inputType:"range",tickmarks_:[],useInputEvent:!1,useSpinButtons:!1}}constructor(e){super(e);let t=this,o=t.domListeners,n=t.vdom.cn[1];t.useInputEvent&&(o.push({input:{fn:t.onInputValueChange,id:t.vdom.cn[1].id,scope:t}}),t.domListeners=o),n.cls=["neo-rangefield-input"]}afterSetTickmarks(e,t){}}Neo.applyClassConfig(s)},29:function(e,t,o){"use strict";o.d(t,"a",(function(){return l}));var n=o(12);class s extends n.a{static getConfig(){return{className:"Neo.form.field.trigger.SpinDown",ntype:"trigger-spindown",align:"start",iconCls:"fa fa-chevron-left",type:"spindown"}}onTriggerClick(e){this.field.onSpinButtonDownClick()}}Neo.applyClassConfig(s);class i extends n.a{static getConfig(){return{className:"Neo.form.field.trigger.SpinUp",ntype:"trigger-spinup",iconCls:"fa fa-chevron-right",type:"spinup"}}onTriggerClick(e){this.field.onSpinButtonUpClick()}}Neo.applyClassConfig(i);class r extends n.a{static getConfig(){return{className:"Neo.form.field.trigger.SpinUpDown",ntype:"trigger-spinupdown",cls:["neo-field-trigger","neo-spin-buttons"],spinButtonDownIconCls:"fa fa-chevron-down",spinButtonUpIconCls:"fa fa-chevron-up",type:"spinupdown"}}onConstructed(){let e=this.vdom;e.cn=[{cls:["neo-spin-button","neo-up",this.spinButtonUpIconCls]},{cls:["neo-spin-button","neo-down",this.spinButtonDownIconCls]}],this.vdom=e,super.onConstructed()}onTriggerClick(e){let t=this,o=e.path[0].cls.join(" ");o.includes("neo-down")?t.field.onSpinButtonDownClick():o.includes("neo-up")&&t.field.onSpinButtonUpClick()}}Neo.applyClassConfig(r);var a=o(23);class l extends a.a{static getStaticConfig(){return{triggerPositions:["right","sides"]}}static getConfig(){return{className:"Neo.form.field.Number",ntype:"numberfield",cls:["neo-numberfield","neo-textfield"],excludedValues:null,inputEditable_:!0,inputType:"number",maxValue_:100,minValue_:0,stepSize_:1,triggerPosition_:"right",useSpinButtons_:!0}}onConstructed(){this.updateTriggers(),super.onConstructed()}afterSetInputEditable(e,t){let o=this.vdom,n=this.getInputEl().style||{};e?delete n.pointerEvents:n.pointerEvents="none",this.vdom=o}afterSetMaxValue(e,t){this.changeInputElKey("max",e)}afterSetMinValue(e,t){this.changeInputElKey("min",e)}afterSetStepSize(e,t){let o,n=this,s=n.value;n.changeInputElKey("step",e),null!==s&&(o=(s-n.minValue)%e,0!==o&&(o/e>.5?s+e-o<n.maxValue?n.value=s+e-o:s-o>n.minValue&&(n.value=s-o):s-o>n.minValue?n.value=s-o:s+e-o<n.maxValue&&(n.value=s+e-o)))}afterSetTriggerPosition(e,t){t&&this.updateTriggers()}afterSetUseSpinButtons(e,t){"boolean"==typeof t&&this.updateTriggers()}beforeSetTriggerPosition(e,t){return this.beforeSetEnumValue(e,t,"triggerPosition")}onInputValueChange(e){let t=this,o=e.value,n=t.value;o||t.required?(o=parseInt(o),Neo.isNumber(o)?(o-=o%t.stepSize,o=Math.max(t.minValue,o),o=Math.min(t.maxValue,o),e.value=o,super.onInputValueChange(e)):t._value=n):super.onInputValueChange(e)}onSpinButtonDownClick(){let e=this,t=e.value||e.maxValue+e.stepSize,o=Math.max(e.minValue,t-e.stepSize);if(e.excludedValues)for(;e.excludedValues.includes(o);)o=Math.max(e.minValue,o-e.stepSize);t!==o&&(e.value=o)}onSpinButtonUpClick(){let e=this,t=e.value||e.minValue-e.stepSize,o=Math.min(e.maxValue,t+e.stepSize);if(e.excludedValues)for(;e.excludedValues.includes(o);)o=Math.min(e.maxValue,o+e.stepSize);t!==o&&(e.value=o)}updateTriggers(){let e=this,t=e.triggers||[];e.useSpinButtons?"right"===e.triggerPosition?(e.hasTrigger("spinupdown")||t.push(r),e.removeTrigger("spindown",!0,t),e.removeTrigger("spinup",!0,t)):(e.hasTrigger("spindown")||t.push(s),e.hasTrigger("spinup")||t.push(i),e.removeTrigger("spinupdown",!0,t)):(e.removeTrigger("spindown",!0,t),e.removeTrigger("spinup",!0,t),e.removeTrigger("spinupdown",!0,t)),e.triggers=t}}Neo.applyClassConfig(l)},36:function(e,t,o){"use strict";o.d(t,"a",(function(){return s}));var n=o(3);class s extends n.a{static getConfig(){return{className:"Neo.container.Viewport",ntype:"viewport",applyBodyCls:!0,cls:["neo-viewport"]}}onConstructed(){super.onConstructed(),this.applyBodyCls&&Neo.main.DomAccess.applyBodyCls({appName:this.appName,cls:["neo-body-viewport"]})}}Neo.applyClassConfig(s)},44:function(e,t,o){"use strict";o.d(t,"a",(function(){return d}));var n=o(6),s=o(14),i=o(2),r=o(19),a=o(0);class l extends r.a{static getConfig(){return{className:"Neo.selection.GalleryModel",ntype:"selection-gallerymodel",stayInRow:!1}}addDomListener(){}onContainerClick(){let e=this,t=e.view,o=[...e.items],n=[];e.items.forEach(e=>{n.push({id:t.getItemVnodeId(e),cls:{add:[],remove:["neo-selected"]}})}),e.items.splice(0,e.items.length),Neo.currentWorker.promiseMessage("main",{action:"updateDom",appName:t.appName,deltas:n}).then(()=>{e.fire("selectionChange",e.items,o)})}onItemClick(e){let t,o=0,n=e.path.length,s=this.view;for(;o<n;o++)if(e.path[o].cls.includes("neo-gallery-item")){t=s.getItemId(e.path[o].id),this.select(t),s.fire("select",{record:s.store.get(t)});break}}onKeyDownDown(e){this[this.view.orderByRow?"onNavKeyRow":"onNavKeyColumn"](1)}onKeyDownLeft(e){this[this.view.orderByRow?"onNavKeyColumn":"onNavKeyRow"](-1)}onKeyDownRight(e){this[this.view.orderByRow?"onNavKeyColumn":"onNavKeyRow"](1)}onKeyDownUp(e){this[this.view.orderByRow?"onNavKeyRow":"onNavKeyColumn"](-1)}onNavKeyColumn(e=1){let t,o,n=this.view,s=n.store,i=this.items[0],r=s.getCount();t=i?s.indexOf(i)+e:0,t<0?t=r-1:t>=r&&(t=0),o=s.getAt(t),this.select(o[s.keyProperty]),n.fire("select",{record:o})}onNavKeyRow(e=1){let t,o,n=this.view,s=n.store,i=this.items[0],r=s.getCount(),a=n.amountRows,l=this.stayInRow;if(n.orderByRow&&(a=Math.ceil(n.store.getCount()/a)),e*=a,t=i?s.indexOf(i)+e:0,t<0)for(l||t++;t<r-a;)t+=a;else if(t>=r)for(l||t--;t>=a;)t-=a;o=s.getAt(t),this.select(o[s.keyProperty]),n.fire("select",{record:o})}register(e){super.register(e);let t=this,o=t.id,n=t.view;n.on({containerClick:t.onContainerClick,itemClick:t.onItemClick,scope:t}),n.keys&&n.keys._keys.push({fn:"onKeyDownDown",key:"Down",scope:o},{fn:"onKeyDownLeft",key:"Left",scope:o},{fn:"onKeyDownRight",key:"Right",scope:o},{fn:"onKeyDownUp",key:"Up",scope:o})}select(e){let t=this,o=t.view,n=[...t.items],s=[],i=o.getItemVnodeId(e);t.singleSelect&&(t.items.forEach(t=>{t!==e&&(console.log(t,e),s.push({id:o.getItemVnodeId(t),cls:{add:[],remove:["neo-selected"]}}))}),t.items.splice(0,t.items.length)),s.push({id:i,cls:{add:["neo-selected"]}}),a.a.add(t.items,e),s.length>0&&o.mounted?Neo.currentWorker.promiseMessage("main",{action:"updateDom",appName:o.appName,deltas:s}).then(()=>{t.fire("selectionChange",t.items,n)}):o.mounted&&t.fire("selectionChange",t.items,n)}unregister(){let e=this.id,t=this.view;t.keys&&t.keys.removeKeys([{fn:"onKeyDownDown",key:"Down",scope:e},{fn:"onKeyDownLeft",key:"Left",scope:e},{fn:"onKeyDownRight",key:"Right",scope:e},{fn:"onKeyDownUp",key:"Up",scope:e}]),super.unregister()}}Neo.applyClassConfig(l);var c=o(9);const m=Symbol.for("itemsMounted");class d extends i.a{static getConfig(){return{className:"Neo.component.Gallery",ntype:"gallery",amountRows_:3,backgroundColor_:"#000000",cls:["neo-gallery","page","view"],disableSelection:!1,imageHeight:160,imageWidth:120,itemTpl_:{cls:["neo-gallery-item","image-wrap","view","neo-transition-1000"],tabIndex:"-1",cn:[{cls:["neo-item-wrapper"],cn:[{tag:"img",cls:[],style:{}}]}]},keyProperty:"id",keys:{},maxItems_:300,mouseWheelDeltaX:10,mouseWheelDeltaY:10,mouseWheelEnabled_:!0,offsetHeight:null,offsetWidth:null,orderByRow_:!1,selectedItemCls:"neo-selected",selectionModel_:null,selectOnMount:!0,store_:null,transitionTimeouts:[],translateX_:0,translateY_:0,translateZ_:0,_vdom:{cls:["page","view"],style:{},tabIndex:"-1",cn:[{cls:["origin","view"],style:{},cn:[{cls:["camera","view"],style:{},cn:[{cls:["dolly","view"],style:{},cn:[{cls:["view"],style:{},cn:[]}]}]}]}]}}}constructor(e){super(e);let t=this,o=Neo.clone(t.domListeners,!0),n=t.vdom,s=n.cn[0],i=s.cn[0],r=i.cn[0],a=r.cn[0];t[m]=!1,i.id=t.id+"__camera",r.id=t.id+"__dolly",s.id=t.id+"__origin",a.id=t.id+"__view",t.vdom=n,o.push({click:{fn:t.onClick,scope:t},wheel:{fn:t.onMouseWheel,scope:t}}),t.domListeners=o}onConstructed(){super.onConstructed();let e=this;e.selectionModel&&e.selectionModel.register(e),e.store instanceof c.a||Neo.Xhr.promiseJson({insideNeo:!0,url:"../../resources/examples/data/ai_contacts.json"}).then(t=>{e.store.items=t.json.data,setTimeout(()=>{e.createItems(),e.selectOnMount&&e.afterSetMounted(!0,!1)},100)}).catch(t=>{console.log("Error for Neo.Xhr.request",t,e.id)})}afterSetAmountRows(e,t){if(Neo.isNumber(t)){let e=this;e.afterSetOrderByRow(e.orderByRow,!e.orderByRow)}}afterSetMaxItems(e,t){let o=this;e&&o.rendered&&(t>e?o.destroyItems(e,t-e):o.createItems(t))}afterSetMounted(e,t){if(e){let e=this;setTimeout(()=>{Neo.currentWorker.promiseMessage("main",{action:"readDom",appName:e.appName,vnodeId:e.id,attributes:["offsetHeight","offsetWidth"]}).then(t=>{if(e.offsetHeight=t.attributes.offsetHeight,e.offsetWidth=t.attributes.offsetWidth,e.selectOnMount||e.selectionModel.hasSelection()){let t=e.selectionModel.getSelection(),o=t.length>0&&t[0];if(!o){let t=parseInt(Math.min(e.maxItems,e.store.getCount())/e.amountRows);o=e.store.getKeyAt(t)}e.selectionModel.select(o)}})},300)}else this.selectionModel.items=[]}afterSetOrderByRow(e,t){if(Neo.isBoolean(t)){let e=this,t=0,o=Math.min(e.maxItems,e.store.items.length),n=e.vdom,s=e.getItemsRoot();e.rendered&&(e.refreshImageReflection(),setTimeout(()=>{for(;t<o;t++)s.cn[t].style.transform=e.getItemTransform(t);e.vdom=n,setTimeout(()=>{let t=e.selectionModel;t.hasSelection()&&e.onSelectionChange(t.items)},500)},50))}}afterSetSelectionModel(e,t){this.rendered&&(e.register(this),t&&t.destroy())}beforeSetStore(e,t){let o=this;return t&&t.destroy(),e?n.a.beforeSetInstance(e,c.a,{listeners:{load:o.onStoreLoad,sort:o.onSort,scope:o}}):Neo.create(s.a,{keyProperty:"id",listeners:{sort:o.onSort,scope:o}})}afterSetTranslateX(){this.moveOrigin()}afterSetTranslateY(){this.moveOrigin()}afterSetTranslateZ(){this.moveOrigin()}beforeGetItemTpl(){return Neo.clone(this._itemTpl,!0)}beforeSetSelectionModel(e,t){return t&&t.destroy(),n.a.beforeSetInstance(e,l,{listeners:{selectionChange:this.onSelectionChange,scope:this}})}createItem(e,t,o){let n=e.cn[0].cn[0];return e.id=this.getItemVnodeId(t[this.keyProperty]),n.src=Neo.config.resourcesPath+"examples/"+t.image,n.style.height=this.imageHeight+"px",n.style.width=this.imageWidth+"px",e}createItems(e){let t,o,n,s=this,i=s.amountRows,r=s.orderByRow,l=i-1,c=s.vdom,d=s.getItemsRoot(),u=e||0,p=Math.min(s.maxItems,s.store.items.length);for(r&&(t=Math.ceil(s.store.getCount()/i));u<p;u++)o=s.store.items[u],n=s.createItem(s.itemTpl,o,u),n.style=n.style||{},n.style.transform=s.getItemTransform(u),r?u>=l*t&&a.a.add(n.cls,"neo-reflection"):u%i===l&&a.a.add(n.cls,"neo-reflection"),d.cn.push(n);s.promiseVdomUpdate(c).then(()=>{s[m]=!0})}destroyItems(e,t){let o=this,n=o.vdom,s=t||o.store.getCount(),i=o.selectionModel.items[0];o.getItemsRoot().cn.splice(e||0,s),o.vdom=n,o.selectionModel.hasSelection()&&i>e&&i<e+s&&o.afterSetMounted(!0,!1)}getCameraTransformForCell(e){let t=this,o=t.amountRows,n=t.imageWidth,s=t.offsetHeight/(o+2)+10,i=Math.floor(e/o),r=e-i*o;if(t.orderByRow){let n=Math.ceil(Math.min(t.maxItems,t.store.getCount())/o);i=e%n,r=Math.floor(e/n)}return[-(i*(n+10)),-((r+.5)*s*1.1+50),0]}getItemId(e){return parseInt(e.split("__")[1])}getItemsRoot(){return this.vdom.cn[0].cn[0].cn[0].cn[0]}getItemTransform(e){let t,o,n=this,s=n.amountRows;return n.orderByRow?(s=Math.ceil(Math.min(n.maxItems,n.store.getCount())/s),t=e%s,o=Math.floor(e/s)):(t=Math.floor(e/s),o=e%s),this.translate3d(t*(n.imageWidth+10),o*(n.imageHeight+10)+100,0)}getItemVnodeId(e){return this.id+"__"+e}moveOrigin(){let e=this,t=e.vdom;t.cn[0].style.transform=e.translate3d(e.translateX,e.translateY,e.translateZ),e.vdom=t}onClick(e){this.fire(e.id===this.id?"containerClick":"itemClick",e)}onMouseWheel(e){let t=this,o=e.deltaX,n=e.deltaY,s=t.translateX,i=t.translateZ;t.mouseWheelEnabled&&(t._translateX=s-o*t.mouseWheelDeltaX,t._translateZ=i+n*t.mouseWheelDeltaY,t.moveOrigin(),t.fire("changeTranslateX",t._translateX),t.fire("changeTranslateZ",t._translateZ))}onSelectionChange(e){let t,o=this,n=o.store.indexOf(e&&e[0]||0),s=o.imageHeight,i=o.imageWidth,r=o.vdom,l=r.cn[0].cn[0],c=o.getCameraTransformForCell(n),m=o.offsetHeight/(o.amountRows+2),d=Math.round(m*i/s)+10;o.transitionTimeouts.forEach(e=>{clearTimeout(e)}),o.transitionTimeouts.splice(0,o.transitionTimeouts.length),Neo.currentWorker.promiseMessage("main",{action:"updateDom",appName:o.appName,deltas:{id:o.id+"__dolly",style:{transform:o.translate3d(...c)}}}).then(()=>{Neo.currentWorker.promiseMessage("main",{action:"readDom",appName:o.appName,vnodeId:o.id,functions:[{fn:"getComputedStyle",params:[o.id+"__dolly",null],paramIsDomNode:[!0,!1],scope:"defaultView",returnFnName:"transform",returnValue:"transform"}]}).then(e=>{let n,s,i=e.functions.transform;0===i.indexOf("matrix3d")?(i=i.substring(9,i.length-1),i=i.split(",").map(e=>parseFloat(e)),n=i[12]):(i=i.substring(7,i.length-1),i=i.split(",").map(e=>parseFloat(e)),n=i[4]),n-=c[0],s=45*Math.min(Math.max(n/(3*d),-1),1),l.style.transform="rotateY("+s+"deg)",l.style.transitionDuration="330ms",o.vdom=r,t=setTimeout(()=>{a.a.remove(o.transitionTimeouts,t),r=o.vdom,l.style.transform="rotateY(0deg)",l.style.transitionDuration="5000ms",o.vdom=r},330),o.transitionTimeouts.push(t)})})}onSort(){if(!0===this[m]){let e,t,o=this,n=!1,s=[...o.store.items||[]],i=[],r=o.vdom,a=o.getItemsRoot(),l=a.cn.map(e=>e.id);s.length=Math.min(o.maxItems,o.store.getCount()),s.length>0&&(s.forEach((s,r)=>{t=o.getItemVnodeId(s[o.keyProperty]),e=l.indexOf(t),i.push(a.cn[e]),r!==e&&(n=!0)}),n&&(a.cn=i,o.vdom=r,setTimeout(()=>{o.afterSetOrderByRow(o.orderByRow,!o.orderByRow)},50)))}}onStoreLoad(e){this.getItemsRoot().cn=[],this.createItems()}refreshImageReflection(){let e,t=this,o=t.amountRows,n=t.orderByRow,s=o-1,i=t.vdom,r=t.getItemsRoot();n&&(e=Math.ceil(Math.min(t.maxItems,t.store.getCount())/o)),r.cn.forEach((t,i)=>{n?a.a[i>=s*e?"add":"remove"](t.cls,"neo-reflection"):a.a[i%o===s?"add":"remove"](t.cls,"neo-reflection")}),t.vdom=i}translate3d(e,t,o){return"translate3d("+e+"px, "+t+"px, "+o+"px)"}}Neo.applyClassConfig(d)}});