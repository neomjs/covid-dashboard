self.webpackChunk([32],{17:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(18);class o extends i.a{static getConfig(){return{className:"Neo.form.field.CheckBox",ntype:"checkboxfield",checked_:!1,cls:["neo-checkboxfield"],hideLabel_:!1,hideValueLabel_:!0,inputType_:"checkbox",labelText_:"LabelText",labelWidth_:150,name_:"",valueLabelText_:"ValueLabel",_vdom:{cn:[{tag:"label",cls:["neo-checkbox-label"]},{tag:"input",cls:["neo-checkbox-input"]},{tag:"label",cls:["neo-checkbox-value-label"]}]}}}constructor(e){super(e);let t=this,n=Neo.clone(t.domListeners,!0),i=t.vdom,o=i.cn[1],a=i.cn[2];o.id=a.for=t.id+"-input",t.vdom=i,n.push({change:{fn:t.onInputValueChange,scope:t}}),t.domListeners=n}afterSetChecked(e,t){let n=this,i=n.vdom;i.cn[1].checked=e,n.vdom=i,void 0!==t&&n.fire("change",{component:n,oldValue:t,value:e})}afterSetHideLabel(e,t){let n=this.vdom;n.cn[0].removeDom=e,this.vdom=n}afterSetHideValueLabel(e,t){let n=this.vdom;n.cn[2].removeDom=e,this.vdom=n}afterSetInputType(e,t){let n=this.vdom;n.cn[1].type=e,this.vdom=n}afterSetLabelText(e,t){let n=this.vdom;n.cn[0].innerHTML=e,this.vdom=n}afterSetLabelWidth(e,t){let n=this,i=n.vdom;n.hideLabel||(i.cn[0].width=e,n.vdom=i)}afterSetName(e,t){let n=this.vdom;n.cn[1].name=e,this.vdom=n}afterSetValue(e,t){if(e){let t=this.vdom;t.cn[1].value=e,this.vdom=t}super.afterSetValue(e,t)}afterSetValueLabelText(e,t){let n=this,i=n.vdom;n.hideValueLabel||(i.cn[2].innerHTML=e,n.vdom=i)}onInputValueChange(e){let t=this,n=e.target.checked;t._checked=n,t.vdom.cn[1].checked=n,t.vnode.childNodes[t.hideLabel?0:1].attributes.checked=n+"",t.fire("change",{component:t,oldValue:!n,value:n})}}Neo.applyClassConfig(o)},19:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(17),o=n(2);class a extends i.a{static getConfig(){return{className:"Neo.form.field.Radio",ntype:"radiofield",cls:["neo-radiofield"],inputType:"radio",_vdom:{cn:[{tag:"label",cls:["neo-radio-label"]},{tag:"input",cls:["neo-radio-input"]},{tag:"label",cls:["neo-radio-value-label"]}]}}}afterSetChecked(e,t){super.afterSetChecked(e,t),e&&this.uncheckGroupItems()}onInputValueChange(e){super.onInputValueChange(e),this.uncheckGroupItems()}uncheckGroupItems(){let e,t=this;e=o.a.find({ntype:"radiofield",name:t.name}),e.forEach(e=>{e.id!==t.id&&e._checked&&(e._checked=!1,e.vdom.cn[1].checked=!1,e.vnode&&(e.vnode.childNodes[t.hideLabel?0:1].attributes.checked="false"),e.fire("change",{component:t,oldValue:!0,value:!1}))})}}Neo.applyClassConfig(a)},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(8);class o extends i.a{static getConfig(){return{className:"Neo.form.field.trigger.SpinDown",ntype:"trigger-spindown",align:"start",iconCls:"fa fa-chevron-left",type:"spindown"}}onTriggerClick(e){this.field.onSpinButtonDownClick()}}Neo.applyClassConfig(o);class a extends i.a{static getConfig(){return{className:"Neo.form.field.trigger.SpinUp",ntype:"trigger-spinup",iconCls:"fa fa-chevron-right",type:"spinup"}}onTriggerClick(e){this.field.onSpinButtonUpClick()}}Neo.applyClassConfig(a);class l extends i.a{static getConfig(){return{className:"Neo.form.field.trigger.SpinUpDown",ntype:"trigger-spinupdown",cls:["neo-field-trigger","neo-spin-buttons"],spinButtonDownIconCls:"fa fa-chevron-down",spinButtonUpIconCls:"fa fa-chevron-up",type:"spinupdown"}}onConstructed(){let e=this.vdom;e.cn=[{cls:["neo-spin-button","neo-up",this.spinButtonUpIconCls]},{cls:["neo-spin-button","neo-down",this.spinButtonDownIconCls]}],this.vdom=e,super.onConstructed()}onTriggerClick(e){let t=this,n=e.path[0].cls.join(" ");n.includes("neo-down")?t.field.onSpinButtonDownClick():n.includes("neo-up")&&t.field.onSpinButtonUpClick()}}Neo.applyClassConfig(l);var s=n(13);class r extends s.a{static getStaticConfig(){return{triggerPositions:["right","sides"]}}static getConfig(){return{className:"Neo.form.field.Number",ntype:"numberfield",cls:["neo-numberfield","neo-textfield"],excludedValues:null,inputEditable_:!0,inputType:"number",maxValue_:100,minValue_:0,stepSize_:1,triggerPosition_:"right",useSpinButtons_:!0}}onConstructed(){this.updateTriggers(),super.onConstructed()}afterSetInputEditable(e,t){let n=this.vdom,i=this.getInputEl().style||{};e?delete i.pointerEvents:i.pointerEvents="none",this.vdom=n}afterSetMaxValue(e,t){this.changeInputElKey("max",e)}afterSetMinValue(e,t){this.changeInputElKey("min",e)}afterSetStepSize(e,t){let n,i=this,o=i.value;i.changeInputElKey("step",e),null!==o&&(n=(o-i.minValue)%e,0!==n&&(n/e>.5?o+e-n<i.maxValue?i.value=o+e-n:o-n>i.minValue&&(i.value=o-n):o-n>i.minValue?i.value=o-n:o+e-n<i.maxValue&&(i.value=o+e-n)))}afterSetTriggerPosition(e,t){t&&this.updateTriggers()}afterSetUseSpinButtons(e,t){"boolean"==typeof t&&this.updateTriggers()}beforeSetTriggerPosition(e,t){return this.beforeSetEnumValue(e,t,"triggerPosition")}onInputValueChange(e){let t=this,n=e.value,i=t.value;n||t.required?(n=parseInt(n),Neo.isNumber(n)?(n-=n%t.stepSize,n=Math.max(t.minValue,n),n=Math.min(t.maxValue,n),e.value=n,super.onInputValueChange(e)):t._value=i):super.onInputValueChange(e)}onSpinButtonDownClick(){let e=this,t=e.value||e.maxValue+e.stepSize,n=Math.max(e.minValue,t-e.stepSize);if(e.excludedValues)for(;e.excludedValues.includes(n);)n=Math.max(e.minValue,n-e.stepSize);t!==n&&(e.value=n)}onSpinButtonUpClick(){let e=this,t=e.value||e.minValue-e.stepSize,n=Math.min(e.maxValue,t+e.stepSize);if(e.excludedValues)for(;e.excludedValues.includes(n);)n=Math.min(e.maxValue,n+e.stepSize);t!==n&&(e.value=n)}updateTriggers(){let e=this,t=e.triggers||[];e.useSpinButtons?"right"===e.triggerPosition?(e.hasTrigger("spinupdown")||t.push(l),e.removeTrigger("spindown",!0,t),e.removeTrigger("spinup",!0,t)):(e.hasTrigger("spindown")||t.push(o),e.hasTrigger("spinup")||t.push(a),e.removeTrigger("spinupdown",!0,t)):(e.removeTrigger("spindown",!0,t),e.removeTrigger("spinup",!0,t),e.removeTrigger("spinupdown",!0,t)),e.triggers=t}}Neo.applyClassConfig(r)},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(7);class o extends i.a{static getConfig(){return{className:"Neo.container.Viewport",ntype:"viewport",applyBodyCls:!0,cls:["neo-viewport"]}}onConstructed(){super.onConstructed(),this.applyBodyCls&&Neo.main.DomAccess.applyBodyCls({appName:this.appName,cls:["neo-body-viewport"]})}}Neo.applyClassConfig(o)},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(7);n(25);class o extends i.a{static getConfig(){return{className:"Neo.container.Panel",ntype:"panel",cls:["neo-panel","neo-container"],containerConfig:null,headerDefaults:null,headers:null,_layout:{ntype:"vbox",align:"stretch"},verticalHeadersFirst:!1}}constructor(e){super(e);let t=this;(e&&!0===e.verticalHeadersFirst||!0===t.verticalHeadersFirst)&&(t.layout={ntype:"hbox",align:"stretch"})}createItems(){let e,t=this,n=!1===t.verticalHeadersFirst,i=t.headers||[],a=i.filter(e=>e.dock===(n?"bottom":"right")),l=i.filter(e=>e.dock===(n?"left":"top")),s=i.filter(e=>e.dock===(n?"right":"bottom")),r=i.filter(e=>e.dock===(n?"top":"left")),c=a.length>0||r.length>0,p=l.length>0||s.length>0,d=t.items,u=[],h=[];i.length<1&&Neo.error("Panel without headers, please use a Container instead",t.id),r.forEach(e=>{h.push(o.createHeaderConfig(e))}),p&&(n&&c||!n&&c)?(l.forEach(e=>{u.push(o.createHeaderConfig(e))}),e={ntype:"container",flex:1,items:d,itemDefaults:t.itemDefaults,...t.containerConfig||{}},u.push({...t.headerDefaults,...e}),s.forEach(e=>{u.push(o.createHeaderConfig(e))}),h.push({ntype:"container",items:u,layout:{ntype:n?"hbox":"vbox",align:"stretch"}})):(e={ntype:"container",flex:1,items:d,itemDefaults:t.itemDefaults,...t.containerConfig||{}},h.push({...t.headerDefaults,...e})),a.forEach(e=>{h.push(o.createHeaderConfig(e))}),t.items=h,t.itemDefaults=null,super.createItems()}static createHeaderConfig(e){let t={ntype:"toolbar",flex:"0 1 auto"};return e.text&&(t.items=[{ntype:"label",cls:["neo-panel-header-text","neo-label"],text:e.text}],delete e.text),Neo.isArray(e.items)&&e.items.forEach(e=>{"label"===e.ntype&&(e.cls=["neo-panel-header-text","neo-label"])}),{...t,...e}}}Neo.applyClassConfig(o)},32:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(12),o=n(7),a=n(0),l=n(30),s=n(29);class r extends s.a{static getConfig(){return{className:"Neo.examples.ConfigurationContainer",ntype:"configuration-viewport",autoMount:!0,layout:{ntype:"hbox",align:"stretch"},configItemLabelWidth:150,configItemWidth:270,configPanelFlex:1,exampleComponent:null,exampleComponentFlex:2}}onConstructed(){let e=this;e.exampleComponent=e.createExampleComponent(),e.configurationComponents=e.createConfigurationComponents()||[],e.items=[{module:o.a,items:[e.exampleComponent],flex:e.exampleComponentFlex,layout:"base",style:{padding:"20px"}},{module:l.a,cls:["neo-panel","neo-container","neo-configuration-panel"],flex:e.configPanelFlex,style:{margin:"20px"},containerConfig:{style:{overflowY:"scroll"}},headers:[{dock:"top",items:[{ntype:"label",text:"Configuration"},{ntype:"component",flex:1},{module:i.a,handler:e.onSwitchTheme.bind(e),id:e.id+"__switchThemeButton",text:"Theme Dark"}]}],items:[{module:o.a,layout:{ntype:"vbox"},style:{padding:"10px"},cls:["neo-configuration-panel-body"],itemDefaults:{clearToOriginalValue:!0,labelWidth:e.configItemLabelWidth,width:e.configItemWidth},items:[...e.configurationComponents,{module:i.a,handler:e.onSwitchTheme.bind(e,"cmp"),id:e.id+"_cmp_switchThemeButton",style:{marginTop:"20px"},text:"Theme Dark",width:100},{module:i.a,handler:()=>{console.log(e.exampleComponent)},text:"Log Instance",width:100}]}]}],super.onConstructed()}createConfigurationComponents(){return null}createExampleComponent(){return null}onConfigChange(e,t){this.exampleComponent[e]=t.value}onRadioChange(e,t,n){!0===n.value&&(this.exampleComponent[e]=t)}onSwitchTheme(e){let t=this,n=Neo.getComponent(t.id+("cmp"!==e?"__":"_cmp_")+"switchThemeButton"),i="cmp"===e?t.exampleComponent.cls:t.cls;"Theme Light"===n.text?(n.text="Theme Dark",a.a.remove(i,"neo-theme-dark"),a.a.add(i,"neo-theme-light")):(n.text="Theme Light",a.a.remove(i,"neo-theme-light"),a.a.add(i,"neo-theme-dark")),"cmp"===e?t.exampleComponent.cls=i:t.cls=i}}Neo.applyClassConfig(r)},33:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(8);class o extends i.a{static getConfig(){return{className:"Neo.form.field.trigger.Picker",ntype:"trigger-picker",iconCls:"fa fa-caret-down",type:"picker"}}onTriggerClick(e){this.field.onPickerTriggerClick()}}Neo.applyClassConfig(o)},34:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n(7),o=n(33),a=n(13),l=n(4);class s extends a.a{static getConfig(){return{className:"Neo.form.field.Picker",ntype:"pickerfield",clientRects:null,cls:["neo-pickerfield","neo-textfield"],keys:{Enter:"onKeyDownEnter",Escape:"onKeyDownEscape"},matchPickerWidth:!0,picker:null,pickerConfig:null,pickerHeight:100,pickerIsMounted:!1,pickerMaxHeight:200,pickerWidth:100,triggers:[{module:o.a}]}}createPicker(){let e=this,t=e.createPickerComponent();return Neo.create(i.a,{appName:e.appName,cls:["neo-picker-container","neo-container"],height:e.pickerHeight,id:e.getPickerId(),items:t?[t]:[],maxHeight:e.pickerMaxHeight,vdom:{cn:[],tabIndex:-1},width:e.pickerWidth,...e.pickerConfig||{}})}applyClientRects(e){let t=this,n=(t.clientRects[2],t.clientRects[1]),i=t.clientRects[0],o=t.picker.vdom,a=t.matchPickerWidth?n.width-1:t.pickerWidth;t.pickerWidth=a,Object.assign(o.style,{left:i.left+i.width-a+"px",top:i.top+i.height+1+"px",width:a+"px"}),t.picker[e?"_vdom":"vdom"]=o}createPickerComponent(){return null}getClientRectsThenShow(e,t){let n=this;Neo.main.DomAccess.getBoundingClientRect({id:[n.id,n.id+"-input-wrapper","body"]}).then(i=>{n.clientRects=i,n.showPicker(e,t)})}getPicker(){let e=this;return e.picker||(e.picker=e.createPicker()),e.picker}getPickerId(){return this.id+"__picker"}hidePicker(e=!1){let t=this,n=t.getPicker(),i=t.vdom;t.pickerIsMounted&&l.a.removeVdomChild(i,t.getPickerId()),t.pickerIsMounted=!1,e?(t._vdom=i,n.mounted=!1):t.promiseVdomUpdate().then(e=>{n.mounted=t.pickerIsMounted})}onFocusLeave(e){let t=this;"inline"!==t.labelPosition||""!==t.value&&null!==t.value?t.hidePicker():t.hidePicker(!0),super.onFocusLeave(e)}onKeyDownEnter(e,t,n){this.pickerIsMounted||this.getClientRectsThenShow(t,n)}onKeyDownEscape(e){this.pickerIsMounted&&this.hidePicker()}onPickerTriggerClick(){let e=this;e.pickerIsMounted?e.hidePicker():e.getClientRectsThenShow()}showPicker(e,t){let n=this,i=n.getPicker(),o=n.vdom;n.applyClientRects(!0),o.cn.push(i.vdom),n.pickerIsMounted=!0,n.promiseVdomUpdate().then(o=>{i.mounted=n.pickerIsMounted,e&&e.apply(t||n)})}}Neo.applyClassConfig(s)},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(10),o=n(37),a=n(34),l=n(26),s=n(4);class r extends a.a{static getConfig(){return{className:"Neo.form.field.Select",ntype:"selectfield",cls:["neo-selectfield","neo-pickerfield","neo-textfield"],displayField:"name",hintRecordId:null,keys:{Down:"onKeyDownDown",Enter:"onKeyDownEnter",Escape:"onKeyDownEscape",Right:"onKeyDownRight",Up:"onKeyDownUp"},lastManualInput:null,list:null,listConfig:null,pickerHeight:null,store_:null,typeAhead_:!0}}constructor(e){super(e);let t=this;t.list=Neo.create({module:o.a,displayField:t.displayField,selectionModel:{stayInList:!1},silentSelect:!0,store:t.store,...t.listConfig||{}}),t.list.keys._keys.push({fn:"onContainerKeyDownEnter",key:"Enter",scope:t.id},{fn:"onContainerKeyDownEscape",key:"Escape",scope:t.id}),t.list.on({createItems:t.onListCreateItems,itemClick:t.onListItemClick,itemNavigate:t.onListItemNavigate,selectPostLastItem:t.focusInputEl,selectPreFirstItem:t.focusInputEl,scope:t}),t.typeAhead&&t.updateTypeAhead()}afterSetStore(e,t){let n,i=this;e&&(n=e.filters||[],n.push({includeEmptyValues:!0,operator:"like",property:i.displayField,value:i.value}),e.filters=n)}afterSetTypeAhead(e,t){this.rendered&&this.updateTypeAhead()}afterSetValue(e,t,n=!1){console.log("afterSetValue",e),super.afterSetValue(e,t),n||this.updateValue()}beforeSetStore(e,t){return t&&t.destroy(),i.a.beforeSetInstance(e,l.a)}createPickerComponent(){return this.list}focusInputEl(e){let t=this;t.updateTypeAheadValue(t.lastManualInput,!0),t.value=t.lastManualInput,Neo.main.DomAccess.focus({id:t.getInputElId()}).then(()=>{e&&e.apply(t)})}getInputHintEl(){let e=s.a.findVdomChild(this.vdom,this.getInputHintId());return e&&e.vdom}getInputHintId(){return this.id+"__input-hint"}getRecord(){const e=this.list,t=e.selectionModel.getSelection()[0];return t&&this.store.get(e.getItemRecordId(t))||null}onContainerKeyDownEnter(e){this.hidePicker()}onContainerKeyDownEscape(e){this.focusInputEl(this.hidePicker)}onInputValueChange(e){super.onInputValueChange(e),this.lastManualInput=e.value}onKeyDownDown(e){this.onKeyDownEnter(e)}onKeyDownEnter(e){let t=this;t.pickerIsMounted?(t.selectListItem(),super.onKeyDownEnter(e)):super.onKeyDownEnter(e,t.selectListItem)}onKeyDownRight(e){let t=this;t.hintRecordId&&(t.value=t.store.get(t.hintRecordId)[t.displayField])}onKeyDownUp(e){let t=this;t.pickerIsMounted?(t.selectLastListItem(),super.onKeyDownEnter(e)):super.onKeyDownEnter(e,t.selectLastListItem)}onListCreateItems(){let e=this;e.typeAhead&&e.picker&&e.picker.mounted&&e.updateTypeAheadValue()}onListItemClick(e){let t=this,n=t.value,i=e[t.displayField];t.value!==i&&(t.hintRecordId=null,t._value=i,t.getInputHintEl().value=null,t.afterSetValue(i,n,!0),t.fire("select",{record:e,value:e[t.store.keyProperty]}))}onListItemNavigate(e){this.onListItemClick(e)}selectFirstListItem(){this.selectListItem(0)}selectLastListItem(){this.selectListItem(this.store.getCount()-1)}selectListItem(e){let t=this;Neo.isNumber(e)||(e=t.hintRecordId?t.store.indexOfKey(t.hintRecordId):0),t.onListItemNavigate(t.store.getAt(e)),t.list.selectItem(e)}updateTypeAhead(e=!1){let t=this,n=s.a.findVdomChild(t.vdom,t.id+"-input"),i=t.vdom;t.typeAhead?n.parentNode.cn[n.index]={tag:"span",cls:["neo-input-field-wrapper"],cn:[{tag:"input",autocomplete:"off",autocorrect:"off",cls:["neo-textfield-input","neo-typeahead-input"],id:t.getInputHintId(),spellcheck:"false"},n.vdom]}:s.a.replaceVdomChild(i,n.parentNode.id,n.vdom),t[e?"_vdom":"vdom"]=i}updateTypeAheadValue(e,t=!1){let n,i=this,o=!1,a=i.store,l=0,s=a.getCount(),r=i.vdom,c=i.getInputHintEl();if(void 0===e&&(e=i.value),e&&e.length>0){for(;l<s;l++)if(n=a.items[l][i.displayField],0===n.toLowerCase().indexOf(e.toLowerCase())){o=!0;break}o&&(c.value=e+n.substr(e.length),i.hintRecordId=a.items[l][a.keyProperty||a.model.keyProperty])}!o&&c&&(c.value="",i.hintRecordId=null),i[t?"_vdom":"vdom"]=r}updateValue(){let e,t=this,n=t.store;n&&!Neo.isEmpty(n.filters)&&(e=n.getFilter(t.displayField),e&&(e.value=t.value)),t.typeAhead&&(t.picker&&t.picker.containsFocus||t.updateTypeAheadValue())}}Neo.applyClassConfig(r)},70:function(e,t,n){"use strict";n.r(t),n.d(t,"onStart",(function(){return m}));var i=n(17),o=n(32),a=n(26),l=n(21);class s extends l.a{static getConfig(){return{className:"TestApp.MainModel",ntype:"main-model",keyProperty:"abbreviation",fields:[{name:"abbreviation",type:"string"},{name:"name",type:"string"}]}}}Neo.applyClassConfig(s);class r extends a.a{static getConfig(){return{className:"TestApp.MainStore",ntype:"main-store",autoLoad:!0,keyProperty:"abbreviation",model:s,url:"../../resources/examples/data/us_states.json",sorters:[{property:"name",direction:"ASC"}]}}}Neo.applyClassConfig(r);var c=n(20),p=n(45),d=n(19),u=n(13);class h extends o.a{static getConfig(){return{className:"TestApp.MainContainer",ntype:"main-container",autoMount:!0,configItemLabelWidth:160,layout:{ntype:"hbox",align:"stretch"}}}createConfigurationComponents(){let e=this;return[{module:i.a,checked:e.exampleComponent.clearable,labelText:"clearable",listeners:{change:e.onConfigChange.bind(e,"clearable")}},{module:i.a,checked:e.exampleComponent.clearToOriginalValue,labelText:"clearToOriginalValue",listeners:{change:e.onConfigChange.bind(e,"clearToOriginalValue")},style:{marginTop:"10px"}},{module:i.a,checked:e.exampleComponent.hideLabel,labelText:"hideLabel",listeners:{change:e.onConfigChange.bind(e,"hideLabel")},style:{marginTop:"10px"}},{module:i.a,checked:e.exampleComponent.hidePickerOnSelect,labelText:"hidePickerOnSelect",listeners:{change:e.onConfigChange.bind(e,"hidePickerOnSelect")},style:{marginTop:"10px"}},{module:d.a,checked:"top"===e.exampleComponent.labelPosition,hideValueLabel:!1,labelText:"labelPosition",listeners:{change:e.onRadioChange.bind(e,"labelPosition","top")},name:"labelPosition",style:{marginTop:"10px"},valueLabelText:"top"},{module:d.a,checked:"right"===e.exampleComponent.labelPosition,hideValueLabel:!1,labelText:"",listeners:{change:e.onRadioChange.bind(e,"labelPosition","right")},name:"labelPosition",valueLabelText:"right"},{module:d.a,checked:"bottom"===e.exampleComponent.labelPosition,hideValueLabel:!1,labelText:"",listeners:{change:e.onRadioChange.bind(e,"labelPosition","bottom")},name:"labelPosition",valueLabelText:"bottom"},{module:d.a,checked:"left"===e.exampleComponent.labelPosition,hideValueLabel:!1,labelText:"",listeners:{change:e.onRadioChange.bind(e,"labelPosition","left")},name:"labelPosition",valueLabelText:"left"},{module:d.a,checked:"inline"===e.exampleComponent.labelPosition,hideValueLabel:!1,labelText:"",listeners:{change:e.onRadioChange.bind(e,"labelPosition","inline")},name:"labelPosition",valueLabelText:"inline"},{module:u.a,labelText:"labelText",style:{marginTop:"10px"},listeners:{change:e.onConfigChange.bind(e,"labelText")},value:e.exampleComponent.labelText},{module:c.a,labelText:"labelWidth",listeners:{change:e.onConfigChange.bind(e,"labelWidth")},maxValue:200,minValue:50,stepSize:5,value:e.exampleComponent.labelWidth},{module:u.a,labelText:"placeholderText",listeners:{change:e.onConfigChange.bind(e,"placeholderText")},value:e.exampleComponent.placeholderText},{module:i.a,checked:e.exampleComponent.typeAhead,labelText:"typeAhead",listeners:{change:e.onConfigChange.bind(e,"typeAhead")},style:{marginTop:"10px"}},{module:c.a,labelText:"width",listeners:{change:e.onConfigChange.bind(e,"width")},maxValue:300,minValue:50,stepSize:5,style:{marginTop:"10px"},value:e.exampleComponent.width}]}createExampleComponent(){return Neo.create({module:p.a,displayField:"name",labelPosition:"inline",labelText:"US States",labelWidth:80,width:200,store:{module:r}})}}Neo.applyClassConfig(h);const m=()=>Neo.app({appPath:"examples/form/field/select/",mainView:h,name:"TestApp"})}});