self.webpackChunk([52],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"onStart",(function(){return u}));var a=n(17),l=n(32),o=n(20),i=n(19),s=n(118),r=n(13);class p extends l.a{static getConfig(){return{className:"TestApp.MainContainer",ntype:"main-container",autoMount:!0,configItemLabelWidth:160,layout:{ntype:"hbox",align:"stretch"}}}createConfigurationComponents(){let e=this;return[{module:a.a,checked:e.exampleComponent.clearable,labelText:"clearable",listeners:{change:e.onConfigChange.bind(e,"clearable")}},{module:a.a,checked:e.exampleComponent.clearToOriginalValue,labelText:"clearToOriginalValue",listeners:{change:e.onConfigChange.bind(e,"clearToOriginalValue")},style:{marginTop:"10px"}},{module:o.a,labelText:"cols",listeners:{change:e.onConfigChange.bind(e,"cols")},maxValue:100,minValue:0,stepSize:1,style:{marginTop:"10px"},value:e.exampleComponent.cols},{module:a.a,checked:e.exampleComponent.hideLabel,labelText:"hideLabel",listeners:{change:e.onConfigChange.bind(e,"hideLabel")},style:{marginTop:"10px"}},{module:i.a,checked:"top"===e.exampleComponent.labelPosition,hideValueLabel:!1,labelText:"labelPosition",listeners:{change:e.onRadioChange.bind(e,"labelPosition","top")},name:"labelPosition",style:{marginTop:"10px"},valueLabelText:"top"},{module:i.a,checked:"right"===e.exampleComponent.labelPosition,hideValueLabel:!1,labelText:"",listeners:{change:e.onRadioChange.bind(e,"labelPosition","right")},name:"labelPosition",valueLabelText:"right"},{module:i.a,checked:"bottom"===e.exampleComponent.labelPosition,hideValueLabel:!1,labelText:"",listeners:{change:e.onRadioChange.bind(e,"labelPosition","bottom")},name:"labelPosition",valueLabelText:"bottom"},{module:i.a,checked:"left"===e.exampleComponent.labelPosition,hideValueLabel:!1,labelText:"",listeners:{change:e.onRadioChange.bind(e,"labelPosition","left")},name:"labelPosition",valueLabelText:"left"},{module:i.a,checked:"inline"===e.exampleComponent.labelPosition,hideValueLabel:!1,labelText:"",listeners:{change:e.onRadioChange.bind(e,"labelPosition","inline")},name:"labelPosition",valueLabelText:"inline"},{module:r.a,labelText:"labelText",listeners:{change:e.onConfigChange.bind(e,"labelText")},style:{marginTop:"10px"},value:e.exampleComponent.labelText},{module:o.a,labelText:"labelWidth",listeners:{change:e.onConfigChange.bind(e,"labelWidth")},maxValue:200,minValue:50,stepSize:5,value:e.exampleComponent.labelWidth},{module:r.a,clearable:!0,labelText:"placeholderText",listeners:{change:e.onConfigChange.bind(e,"placeholderText")},value:e.exampleComponent.placeholderText},{module:a.a,checked:e.exampleComponent.resizable,labelText:"resizable",listeners:{change:e.onConfigChange.bind(e,"resizable")},style:{marginTop:"10px"}},{module:a.a,checked:e.exampleComponent.required,labelText:"required",listeners:{change:e.onConfigChange.bind(e,"required")},style:{marginTop:"10px"}},{module:o.a,labelText:"rows",listeners:{change:e.onConfigChange.bind(e,"rows")},maxValue:100,minValue:0,stepSize:1,style:{marginTop:"10px"},value:e.exampleComponent.rows},{module:o.a,labelText:"width",listeners:{change:e.onConfigChange.bind(e,"width")},maxValue:300,minValue:50,stepSize:5,value:e.exampleComponent.width},{module:i.a,checked:"hard"===e.exampleComponent.wrap,hideValueLabel:!1,labelText:"wrap",listeners:{change:e.onRadioChange.bind(e,"wrap","hard")},name:"wrap",style:{marginTop:"10px"},valueLabelText:"hard"},{module:i.a,checked:"off"===e.exampleComponent.wrap,hideValueLabel:!1,labelText:"",listeners:{change:e.onRadioChange.bind(e,"wrap","off")},name:"wrap",valueLabelText:"off"},{module:i.a,checked:"soft"===e.exampleComponent.wrap,hideValueLabel:!1,labelText:"",listeners:{change:e.onRadioChange.bind(e,"wrap","soft")},name:"wrap",valueLabelText:"soft"},{module:i.a,checked:null===e.exampleComponent.wrap,hideValueLabel:!1,labelText:"",listeners:{change:e.onRadioChange.bind(e,"wrap",null)},name:"wrap",valueLabelText:"null"}]}createExampleComponent(){return Neo.create(s.a,{clearable:!0,labelText:"Label",labelWidth:70,value:"Hello World",width:200})}}Neo.applyClassConfig(p);const u=()=>Neo.app({appPath:"examples/form/field/textarea/",mainView:p,name:"TestApp"})},118:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(13);class l extends a.a{static getStaticConfig(){return{wrapValues:["hard","off","soft",null]}}static getConfig(){return{className:"Neo.form.field.TextArea",ntype:"textarea",cls:["neo-textarea","neo-textfield"],cols_:null,inputTag_:"textarea",inputType:null,resizable_:!0,rows_:3,wrap_:null}}afterSetCols(e,t){this.changeInputElKey("cols",e)}afterSetInputTag(e,t){this.changeInputElKey("tag",e)}afterSetResizable(e,t){let n=this.getInputEl().style,a=this.vdom;n.resize=e?null:"none",this.vdom=a}afterSetRows(e,t){this.changeInputElKey("rows",e)}afterSetWrap(e,t){this.changeInputElKey("wrap",e)}beforeSetWrap(e,t){return this.beforeSetEnumValue(e,t,"wrap","wrapValues")}}Neo.applyClassConfig(l)},17:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(18);class l extends a.a{static getConfig(){return{className:"Neo.form.field.CheckBox",ntype:"checkboxfield",checked_:!1,cls:["neo-checkboxfield"],hideLabel_:!1,hideValueLabel_:!0,inputType_:"checkbox",labelText_:"LabelText",labelWidth_:150,name_:"",valueLabelText_:"ValueLabel",_vdom:{cn:[{tag:"label",cls:["neo-checkbox-label"]},{tag:"input",cls:["neo-checkbox-input"]},{tag:"label",cls:["neo-checkbox-value-label"]}]}}}constructor(e){super(e);let t=this,n=Neo.clone(t.domListeners,!0),a=t.vdom,l=a.cn[1],o=a.cn[2];l.id=o.for=t.id+"-input",t.vdom=a,n.push({change:{fn:t.onInputValueChange,scope:t}}),t.domListeners=n}afterSetChecked(e,t){let n=this,a=n.vdom;a.cn[1].checked=e,n.vdom=a,void 0!==t&&n.fire("change",{component:n,oldValue:t,value:e})}afterSetHideLabel(e,t){let n=this.vdom;n.cn[0].removeDom=e,this.vdom=n}afterSetHideValueLabel(e,t){let n=this.vdom;n.cn[2].removeDom=e,this.vdom=n}afterSetInputType(e,t){let n=this.vdom;n.cn[1].type=e,this.vdom=n}afterSetLabelText(e,t){let n=this.vdom;n.cn[0].innerHTML=e,this.vdom=n}afterSetLabelWidth(e,t){let n=this,a=n.vdom;n.hideLabel||(a.cn[0].width=e,n.vdom=a)}afterSetName(e,t){let n=this.vdom;n.cn[1].name=e,this.vdom=n}afterSetValue(e,t){if(e){let t=this.vdom;t.cn[1].value=e,this.vdom=t}super.afterSetValue(e,t)}afterSetValueLabelText(e,t){let n=this,a=n.vdom;n.hideValueLabel||(a.cn[2].innerHTML=e,n.vdom=a)}onInputValueChange(e){let t=this,n=e.target.checked;t._checked=n,t.vdom.cn[1].checked=n,t.vnode.childNodes[t.hideLabel?0:1].attributes.checked=n+"",t.fire("change",{component:t,oldValue:!n,value:n})}}Neo.applyClassConfig(l)},19:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(17),l=n(2);class o extends a.a{static getConfig(){return{className:"Neo.form.field.Radio",ntype:"radiofield",cls:["neo-radiofield"],inputType:"radio",_vdom:{cn:[{tag:"label",cls:["neo-radio-label"]},{tag:"input",cls:["neo-radio-input"]},{tag:"label",cls:["neo-radio-value-label"]}]}}}afterSetChecked(e,t){super.afterSetChecked(e,t),e&&this.uncheckGroupItems()}onInputValueChange(e){super.onInputValueChange(e),this.uncheckGroupItems()}uncheckGroupItems(){let e,t=this;e=l.a.find({ntype:"radiofield",name:t.name}),e.forEach(e=>{e.id!==t.id&&e._checked&&(e._checked=!1,e.vdom.cn[1].checked=!1,e.vnode&&(e.vnode.childNodes[t.hideLabel?0:1].attributes.checked="false"),e.fire("change",{component:t,oldValue:!0,value:!1}))})}}Neo.applyClassConfig(o)},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(8);class l extends a.a{static getConfig(){return{className:"Neo.form.field.trigger.SpinDown",ntype:"trigger-spindown",align:"start",iconCls:"fa fa-chevron-left",type:"spindown"}}onTriggerClick(e){this.field.onSpinButtonDownClick()}}Neo.applyClassConfig(l);class o extends a.a{static getConfig(){return{className:"Neo.form.field.trigger.SpinUp",ntype:"trigger-spinup",iconCls:"fa fa-chevron-right",type:"spinup"}}onTriggerClick(e){this.field.onSpinButtonUpClick()}}Neo.applyClassConfig(o);class i extends a.a{static getConfig(){return{className:"Neo.form.field.trigger.SpinUpDown",ntype:"trigger-spinupdown",cls:["neo-field-trigger","neo-spin-buttons"],spinButtonDownIconCls:"fa fa-chevron-down",spinButtonUpIconCls:"fa fa-chevron-up",type:"spinupdown"}}onConstructed(){let e=this.vdom;e.cn=[{cls:["neo-spin-button","neo-up",this.spinButtonUpIconCls]},{cls:["neo-spin-button","neo-down",this.spinButtonDownIconCls]}],this.vdom=e,super.onConstructed()}onTriggerClick(e){let t=this,n=e.path[0].cls.join(" ");n.includes("neo-down")?t.field.onSpinButtonDownClick():n.includes("neo-up")&&t.field.onSpinButtonUpClick()}}Neo.applyClassConfig(i);var s=n(13);class r extends s.a{static getStaticConfig(){return{triggerPositions:["right","sides"]}}static getConfig(){return{className:"Neo.form.field.Number",ntype:"numberfield",cls:["neo-numberfield","neo-textfield"],excludedValues:null,inputEditable_:!0,inputType:"number",maxValue_:100,minValue_:0,stepSize_:1,triggerPosition_:"right",useSpinButtons_:!0}}onConstructed(){this.updateTriggers(),super.onConstructed()}afterSetInputEditable(e,t){let n=this.vdom,a=this.getInputEl().style||{};e?delete a.pointerEvents:a.pointerEvents="none",this.vdom=n}afterSetMaxValue(e,t){this.changeInputElKey("max",e)}afterSetMinValue(e,t){this.changeInputElKey("min",e)}afterSetStepSize(e,t){let n,a=this,l=a.value;a.changeInputElKey("step",e),null!==l&&(n=(l-a.minValue)%e,0!==n&&(n/e>.5?l+e-n<a.maxValue?a.value=l+e-n:l-n>a.minValue&&(a.value=l-n):l-n>a.minValue?a.value=l-n:l+e-n<a.maxValue&&(a.value=l+e-n)))}afterSetTriggerPosition(e,t){t&&this.updateTriggers()}afterSetUseSpinButtons(e,t){"boolean"==typeof t&&this.updateTriggers()}beforeSetTriggerPosition(e,t){return this.beforeSetEnumValue(e,t,"triggerPosition")}onInputValueChange(e){let t=this,n=e.value,a=t.value;n||t.required?(n=parseInt(n),Neo.isNumber(n)?(n-=n%t.stepSize,n=Math.max(t.minValue,n),n=Math.min(t.maxValue,n),e.value=n,super.onInputValueChange(e)):t._value=a):super.onInputValueChange(e)}onSpinButtonDownClick(){let e=this,t=e.value||e.maxValue+e.stepSize,n=Math.max(e.minValue,t-e.stepSize);if(e.excludedValues)for(;e.excludedValues.includes(n);)n=Math.max(e.minValue,n-e.stepSize);t!==n&&(e.value=n)}onSpinButtonUpClick(){let e=this,t=e.value||e.minValue-e.stepSize,n=Math.min(e.maxValue,t+e.stepSize);if(e.excludedValues)for(;e.excludedValues.includes(n);)n=Math.min(e.maxValue,n+e.stepSize);t!==n&&(e.value=n)}updateTriggers(){let e=this,t=e.triggers||[];e.useSpinButtons?"right"===e.triggerPosition?(e.hasTrigger("spinupdown")||t.push(i),e.removeTrigger("spindown",!0,t),e.removeTrigger("spinup",!0,t)):(e.hasTrigger("spindown")||t.push(l),e.hasTrigger("spinup")||t.push(o),e.removeTrigger("spinupdown",!0,t)):(e.removeTrigger("spindown",!0,t),e.removeTrigger("spinup",!0,t),e.removeTrigger("spinupdown",!0,t)),e.triggers=t}}Neo.applyClassConfig(r)},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(7);class l extends a.a{static getConfig(){return{className:"Neo.container.Viewport",ntype:"viewport",applyBodyCls:!0,cls:["neo-viewport"]}}onConstructed(){super.onConstructed(),this.applyBodyCls&&Neo.main.DomAccess.applyBodyCls({appName:this.appName,cls:["neo-body-viewport"]})}}Neo.applyClassConfig(l)},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(7);n(25);class l extends a.a{static getConfig(){return{className:"Neo.container.Panel",ntype:"panel",cls:["neo-panel","neo-container"],containerConfig:null,headerDefaults:null,headers:null,_layout:{ntype:"vbox",align:"stretch"},verticalHeadersFirst:!1}}constructor(e){super(e);let t=this;(e&&!0===e.verticalHeadersFirst||!0===t.verticalHeadersFirst)&&(t.layout={ntype:"hbox",align:"stretch"})}createItems(){let e,t=this,n=!1===t.verticalHeadersFirst,a=t.headers||[],o=a.filter(e=>e.dock===(n?"bottom":"right")),i=a.filter(e=>e.dock===(n?"left":"top")),s=a.filter(e=>e.dock===(n?"right":"bottom")),r=a.filter(e=>e.dock===(n?"top":"left")),p=o.length>0||r.length>0,u=i.length>0||s.length>0,c=t.items,d=[],h=[];a.length<1&&Neo.error("Panel without headers, please use a Container instead",t.id),r.forEach(e=>{h.push(l.createHeaderConfig(e))}),u&&(n&&p||!n&&p)?(i.forEach(e=>{d.push(l.createHeaderConfig(e))}),e={ntype:"container",flex:1,items:c,itemDefaults:t.itemDefaults,...t.containerConfig||{}},d.push({...t.headerDefaults,...e}),s.forEach(e=>{d.push(l.createHeaderConfig(e))}),h.push({ntype:"container",items:d,layout:{ntype:n?"hbox":"vbox",align:"stretch"}})):(e={ntype:"container",flex:1,items:c,itemDefaults:t.itemDefaults,...t.containerConfig||{}},h.push({...t.headerDefaults,...e})),o.forEach(e=>{h.push(l.createHeaderConfig(e))}),t.items=h,t.itemDefaults=null,super.createItems()}static createHeaderConfig(e){let t={ntype:"toolbar",flex:"0 1 auto"};return e.text&&(t.items=[{ntype:"label",cls:["neo-panel-header-text","neo-label"],text:e.text}],delete e.text),Neo.isArray(e.items)&&e.items.forEach(e=>{"label"===e.ntype&&(e.cls=["neo-panel-header-text","neo-label"])}),{...t,...e}}}Neo.applyClassConfig(l)},32:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(12),l=n(7),o=n(0),i=n(30),s=n(29);class r extends s.a{static getConfig(){return{className:"Neo.examples.ConfigurationContainer",ntype:"configuration-viewport",autoMount:!0,layout:{ntype:"hbox",align:"stretch"},configItemLabelWidth:150,configItemWidth:270,configPanelFlex:1,exampleComponent:null,exampleComponentFlex:2}}onConstructed(){let e=this;e.exampleComponent=e.createExampleComponent(),e.configurationComponents=e.createConfigurationComponents()||[],e.items=[{module:l.a,items:[e.exampleComponent],flex:e.exampleComponentFlex,layout:"base",style:{padding:"20px"}},{module:i.a,cls:["neo-panel","neo-container","neo-configuration-panel"],flex:e.configPanelFlex,style:{margin:"20px"},containerConfig:{style:{overflowY:"scroll"}},headers:[{dock:"top",items:[{ntype:"label",text:"Configuration"},{ntype:"component",flex:1},{module:a.a,handler:e.onSwitchTheme.bind(e),id:e.id+"__switchThemeButton",text:"Theme Dark"}]}],items:[{module:l.a,layout:{ntype:"vbox"},style:{padding:"10px"},cls:["neo-configuration-panel-body"],itemDefaults:{clearToOriginalValue:!0,labelWidth:e.configItemLabelWidth,width:e.configItemWidth},items:[...e.configurationComponents,{module:a.a,handler:e.onSwitchTheme.bind(e,"cmp"),id:e.id+"_cmp_switchThemeButton",style:{marginTop:"20px"},text:"Theme Dark",width:100},{module:a.a,handler:()=>{console.log(e.exampleComponent)},text:"Log Instance",width:100}]}]}],super.onConstructed()}createConfigurationComponents(){return null}createExampleComponent(){return null}onConfigChange(e,t){this.exampleComponent[e]=t.value}onRadioChange(e,t,n){!0===n.value&&(this.exampleComponent[e]=t)}onSwitchTheme(e){let t=this,n=Neo.getComponent(t.id+("cmp"!==e?"__":"_cmp_")+"switchThemeButton"),a="cmp"===e?t.exampleComponent.cls:t.cls;"Theme Light"===n.text?(n.text="Theme Dark",o.a.remove(a,"neo-theme-dark"),o.a.add(a,"neo-theme-light")):(n.text="Theme Light",o.a.remove(a,"neo-theme-light"),o.a.add(a,"neo-theme-dark")),"cmp"===e?t.exampleComponent.cls=a:t.cls=a}}Neo.applyClassConfig(r)}});