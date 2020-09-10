self.webpackChunk([26],{21:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var i=a(1);class l extends i.a{static getConfig(){return{className:"Neo.data.Model",ntype:"model",fields_:[],keyProperty_:"id",storeId:null,trackModifiedFields:!1}}afterSetFields(e,t){}getField(e){let t=this,a=0,i=t.fields.length;for(;a<i;a++)if(t.fields[a].name===e)return t.fields[a];return null}}Neo.applyClassConfig(l)},26:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var i=a(14),l=a(10),o=a(21),n=(a(11),a(1)),s=a(5);let r;class c extends n.a{static getConfig(){return{className:"Neo.data.RecordFactory",singleton:!0,ovPrefix:"ov_",recordNamespace:"Neo.data.record."}}createRecord(e,t){let a=Neo.ns(this.recordNamespace+e.className);return a||(a=this.createRecordClass(e)),new a(t)}createRecordClass(e){if(e instanceof o.a){let t,a,i=this.recordNamespace+e.className,l=Neo.ns(i);return e.trackModifiedFields=!0,l||(a=i.split("."),t=a.pop(),l=Neo.ns(a,!0),l[t]=class{constructor(t){let a,i=this;Object.defineProperties(i,{_isModified:{value:!1,writable:!0}}),Array.isArray(e.fields)&&e.fields.forEach(l=>{let o=r.parseRecordValue(l,t[l.name]),n=Symbol(l.name);a={[n]:{value:o,writable:!0},[l.name]:{configurable:!0,enumerable:!0,get(){return this[n]},set(t){let a=this,i=a[n];r.hasChanged(t,i)&&(t=r.parseRecordValue(l,t),a[n]=t,a._isModified=!0,a._isModified=r.isModified(a,e.trackModifiedFields),r.onRecordChange({field:l.name,model:e,oldValue:i,record:a,value:t}))}}},e.trackModifiedFields&&(a[r.ovPrefix+l.name]={value:o}),Object.defineProperties(i,a)})}},l[t])}}hasChanged(e,t){return!!Array.isArray(e)||(Neo.isObject(e)?!(t instanceof Date&&e instanceof Date)||t.valueOf()!==e.valueOf():t!==e)}isModified(e,t){if(t){let t,a=Object.keys(e),i=0,l=a.length;for(;i<l;i++)if(t=a[i],e[t]!==e[this.ovPrefix+t])return!0;return!1}return e._isModified}isModifiedField(e,t){return e.hasOwnProperty(t)||s.a.logError("The record does not contain the field",t,e),e.hasOwnProperty(this.ovPrefix+t)?e[t]!==e[this.ovPrefix+t]:null}isRecord(e){return e&&e.constructor&&e.constructor.name&&"Record"===e.constructor.name}onRecordChange(e){let t=Neo.get(e.model.storeId);t&&t.onRecordChange(e)}parseRecordValue(e,t){return"date"===(e.type&&e.type.toLowerCase())?new Date(t):t}}Neo.applyClassConfig(c),r=Neo.create(c),Neo.applyToGlobalNs(r);var d=r;class u extends i.a{static getStaticConfig(){return{observable:!0}}static getConfig(){return{className:"Neo.data.Store",ntype:"store",autoLoad:!1,data_:null,initialData_:null,isGrouped:!1,isLoaded:!1,isLoading:!1,model_:null,remoteFilter:!1,remoteSort:!1,url:null}}constructor(e){super(e);this.on({mutate:this.onCollectionMutate,sort:this.onCollectionSort,scope:this})}onConstructed(){super.onConstructed();let e=this;e.data&&e.afterSetData(e.data),e.autoLoad&&setTimeout(()=>{e.load()},100)}afterSetData(e,t){let a=this;a.configsApplied&&e&&(t?a.clear():a.initialData=[...e],a.add(e))}afterSetInitialData(e,t){}afterSetModel(e,t){e&&(e.storeId=this.id,d.createRecordClass(e))}beforeSetData(e,t){let a=this;return e&&(Array.isArray(e)||(e=[e]),(e=Neo.clone(e,!0)).forEach((t,i)=>{d.isRecord(t)||(e[i]=d.createRecord(a.model,t))})),e}beforeSetInitialData(e,t){return!e&&t?t:e}beforeSetModel(e,t){return t&&t.destroy(),l.a.beforeSetInstance(e,o.a)}createRecord(e){d.createRecord(e)}load(){let e=this;Neo.Xhr.promiseJson({url:e.url}).then(t=>{e.data=Array.isArray(t.json)?t.json:t.json.data}).catch(t=>{console.log("Error for Neo.Xhr.request",t,e.id)})}onCollectionMutate(e){let t=this;t.configsApplied&&t.fire("load",t.items)}onCollectionSort(){this.configsApplied}onRecordChange(e){this.fire("recordChange",e)}sort(e={}){let t=this;t.remoteSort||t.configsApplied&&(e.direction?t.sorters=[{direction:e.direction,property:e.property}]:(t.startUpdate(),t.clear(),t.sorters=[],t.add([...t.initialData]),t.endUpdate(),t.fire("sort")))}}Neo.applyClassConfig(u)},28:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var i=a(1),l=a(0);a(11);class o extends i.a{static getStaticConfig(){return{observable:!0}}static getConfig(){return{className:"Neo.selection.Model",ntype:"selection-model",cls:null,items:[],selectedCls:"neo-selected",singleSelect:!0,view_:null}}beforeGetView(){return Neo.getComponent(this._view)}beforeSetView(e){return e&&e.id}addDomListener(){}deselect(e,t,a,i){let o,n=this,s=n.view,r=s.vdom,c=s.getVdomChild(e);c&&(o=c.cls||[],l.a.remove(o,i||n.selectedCls),c.cls=o),l.a.remove(a||n.items,e),t||(s.vdom=r)}deselectAll(e){let t=this,a=[...t.items],i=t.view,l=i.vdom;a.forEach(e=>{t.deselect(e,!0)}),!e&&a.length>0&&(i.vdom=l)}destroy(){this.unregister(),super.destroy()}getSelection(){return this.items}hasSelection(){return this.items.length>0}isSelected(e){return this.items.indexOf(e)>-1}register(e){let t=this,a=e.cls||[];t.cls&&!a.includes(t.cls)&&(a.push(t.cls),e.cls=a),t.view=e,t.addDomListener()}removeDomListeners(){let e=this,t=e.view,a=[...t.domListeners];t.domListeners.forEach(t=>{t.scope===e&&l.a.remove(a,t)}),t.domListeners=a}select(e,t,a){e=Array.isArray(e)?e:[e];let i,o=this,n=o.view,s=n.vdom;o.singleSelect&&o.deselectAll(!0),e.forEach(e=>{"string"==typeof e&&(e=n.getVdomChild(e)),e&&(i=e.cls||[],l.a.add(i,a||o.selectedCls),e.cls=i)}),l.a.add(t||o.items,e),n[n.hasOwnProperty("silentSelect")&&!0===n.silentSelect?"_vdom":"vdom"]=s}toggleSelection(e){let t=this;t.isSelected(e)?t.deselect(e):t.select(e)}unregister(){let e=this,t=e.view.cls||[];e.cls&&t.includes(e.cls)&&(l.a.remove(t,e.cls),e.view.cls=t),e.deselectAll(),e.removeDomListeners()}}Neo.applyClassConfig(o)},61:function(e,t,a){"use strict";a.r(t),a.d(t,"onStart",(function(){return l}));var i=a(93);const l=()=>Neo.app({appPath:"examples/component/helix/",mainView:i.a,name:"TestApp"})},93:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i=a(48),l=a(20),o=(a(30),a(35),a(29));class n extends o.a{static getConfig(){return{className:"TestApp.HelixMainContainer",ntype:"main-container",autoMount:!0,helix:null,helixConfig:null,layout:{ntype:"hbox",align:"stretch"},items:[{ntype:"container",flex:1,layout:"fit",items:[]},{ntype:"panel",layout:{ntype:"vbox",align:"stretch"},style:{backgroundColor:"#2b2b2b"},width:250,containerConfig:{flex:null,style:{overflowY:"scroll"}},itemDefaults:{ntype:"rangefield",flex:"0 1 auto",labelWidth:"100px",style:{padding:"10px"},useInputEvent:!0,listeners:{change:function(e){["deltaY","maxOpacity","minOpacity"].includes(this.name)&&(e.value/=100),Neo.get("neo-helix-1")[this.name]=e.value}}},headers:[{dock:"top",text:"Helix Controls"}],items:[{labelText:"Translate X",maxValue:2e3,minValue:-2e3,name:"translateX",value:400},{labelText:"Translate Y",maxValue:2500,minValue:-2500,name:"translateY",value:-350},{labelText:"Translate Z",maxValue:4500,minValue:-4500,name:"translateZ",value:-1500,listeners:{change:function(e){Neo.get("neo-helix-1")[this.name]=e.value},mounted:function(e){let t=Neo.get(e);Neo.get("neo-helix-1").on("changeTranslateZ",(function(e){e=Math.min(Math.max(e,this.minValue),this.maxValue),this.value=e}),t)}}},{labelText:"Delta Y",labelAlign:"top",maxValue:600,minValue:-600,name:"deltaY",value:70},{labelText:"Rotate",minValue:-720,maxValue:720,name:"rotationAngle",value:0,listeners:{change:function(e){Neo.get("neo-helix-1")[this.name]=e.value},mounted:function(e){let t=Neo.get(e);Neo.get("neo-helix-1").on("changeRotation",(function(e){e=Math.min(Math.max(e,this.minValue),this.maxValue),this.value=e}),t)}}},{labelText:"Radius",maxValue:3500,minValue:900,name:"radius",value:1500},{labelText:"Perspective",minValue:50,maxValue:3e3,name:"perspective",value:800},{labelText:"Item Angle",minValue:1,maxValue:36,name:"itemAngle",value:8},{labelText:"Max Opacity",name:"maxOpacity",minValue:0,maxValue:100,value:80},{labelText:"Min Opacity",name:"minOpacity",minValue:0,maxValue:100,value:30},{module:l.a,clearable:!1,labelText:"Max Items",maxValue:600,minValue:100,name:"maxItems",stepSize:100,value:300},{ntype:"button",text:"Flip Items",listeners:{},style:{margin:"20px"},domListeners:{click:e=>{const t=Neo.get("neo-helix-1");t.flipped=!t.flipped}}},{ntype:"button",disabled:!0,text:"Sort by Lastname",listeners:{},domListeners:{click:e=>{Neo.get("neo-helix-1").store.sorters=[{property:"lastname",direction:"ASC"},{property:"firstname",direction:"ASC"}]}},style:{margin:"20px",marginBottom:"10px"}},{ntype:"button",disabled:!0,text:"Sort by Firstname",listeners:{},domListeners:{click:e=>{Neo.get("neo-helix-1").store.sorters=[{property:"firstname",direction:"ASC"},{property:"lastname",direction:"ASC"}]}},style:{margin:"20px",marginTop:0}},{ntype:"button",iconCls:"fa fa-square",text:"Follow Selection",listeners:{},domListeners:{click:function(e){let t=this,a=Neo.get("neo-helix-1");"fa fa-square"===t.iconCls?(a.followSelection=!0,t.iconCls="fa fa-check-square"):(a.followSelection=!1,t.iconCls="fa fa-square")}},style:{margin:"20px",marginBottom:"10px"}},{ntype:"label",text:["<b>Navigation Concept</b>","<p>Click on an item to select it. Afterwards you can use the Arrow Keys to walk through the items.</p>","<p>Hit the Space Key to rotate the currently selected item to the front.</p>","<p>Hit the Enter Key to expand the currently selected item.</p>"].join(""),style:{backgroundColor:"#323232",color:"#ddd",fontSize:"13px",margin:"10px",padding:"10px",whiteSpace:"normal"}}]}]}}constructor(e){super(e);this.helix=Neo.create({module:i.a,id:"neo-helix-1",...this.helixConfig||{}}),this.items[0].items.push(this.helix)}getStore(){return this.items[0].items[0].store}}Neo.applyClassConfig(n)}});