self.webpackChunk([49],{17:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(18);class o extends a.a{static getConfig(){return{className:"Neo.form.field.CheckBox",ntype:"checkboxfield",checked_:!1,cls:["neo-checkboxfield"],hideLabel_:!1,hideValueLabel_:!0,inputType_:"checkbox",labelText_:"LabelText",labelWidth_:150,name_:"",valueLabelText_:"ValueLabel",_vdom:{cn:[{tag:"label",cls:["neo-checkbox-label"]},{tag:"input",cls:["neo-checkbox-input"]},{tag:"label",cls:["neo-checkbox-value-label"]}]}}}constructor(e){super(e);let t=this,n=Neo.clone(t.domListeners,!0),a=t.vdom,o=a.cn[1],i=a.cn[2];o.id=i.for=t.id+"-input",t.vdom=a,n.push({change:{fn:t.onInputValueChange,scope:t}}),t.domListeners=n}afterSetChecked(e,t){let n=this,a=n.vdom;a.cn[1].checked=e,n.vdom=a,void 0!==t&&n.fire("change",{component:n,oldValue:t,value:e})}afterSetHideLabel(e,t){let n=this.vdom;n.cn[0].removeDom=e,this.vdom=n}afterSetHideValueLabel(e,t){let n=this.vdom;n.cn[2].removeDom=e,this.vdom=n}afterSetInputType(e,t){let n=this.vdom;n.cn[1].type=e,this.vdom=n}afterSetLabelText(e,t){let n=this.vdom;n.cn[0].innerHTML=e,this.vdom=n}afterSetLabelWidth(e,t){let n=this,a=n.vdom;n.hideLabel||(a.cn[0].width=e,n.vdom=a)}afterSetName(e,t){let n=this.vdom;n.cn[1].name=e,this.vdom=n}afterSetValue(e,t){if(e){let t=this.vdom;t.cn[1].value=e,this.vdom=t}super.afterSetValue(e,t)}afterSetValueLabelText(e,t){let n=this,a=n.vdom;n.hideValueLabel||(a.cn[2].innerHTML=e,n.vdom=a)}onInputValueChange(e){let t=this,n=e.target.checked;t._checked=n,t.vdom.cn[1].checked=n,t.vnode.childNodes[t.hideLabel?0:1].attributes.checked=n+"",t.fire("change",{component:t,oldValue:!n,value:n})}}Neo.applyClassConfig(o)},19:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(17),o=n(2);class i extends a.a{static getConfig(){return{className:"Neo.form.field.Radio",ntype:"radiofield",cls:["neo-radiofield"],inputType:"radio",_vdom:{cn:[{tag:"label",cls:["neo-radio-label"]},{tag:"input",cls:["neo-radio-input"]},{tag:"label",cls:["neo-radio-value-label"]}]}}}afterSetChecked(e,t){super.afterSetChecked(e,t),e&&this.uncheckGroupItems()}onInputValueChange(e){super.onInputValueChange(e),this.uncheckGroupItems()}uncheckGroupItems(){let e,t=this;e=o.a.find({ntype:"radiofield",name:t.name}),e.forEach(e=>{e.id!==t.id&&e._checked&&(e._checked=!1,e.vdom.cn[1].checked=!1,e.vnode&&(e.vnode.childNodes[t.hideLabel?0:1].attributes.checked="false"),e.fire("change",{component:t,oldValue:!0,value:!1}))})}}Neo.applyClassConfig(i)},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(8);class o extends a.a{static getConfig(){return{className:"Neo.form.field.trigger.SpinDown",ntype:"trigger-spindown",align:"start",iconCls:"fa fa-chevron-left",type:"spindown"}}onTriggerClick(e){this.field.onSpinButtonDownClick()}}Neo.applyClassConfig(o);class i extends a.a{static getConfig(){return{className:"Neo.form.field.trigger.SpinUp",ntype:"trigger-spinup",iconCls:"fa fa-chevron-right",type:"spinup"}}onTriggerClick(e){this.field.onSpinButtonUpClick()}}Neo.applyClassConfig(i);class l extends a.a{static getConfig(){return{className:"Neo.form.field.trigger.SpinUpDown",ntype:"trigger-spinupdown",cls:["neo-field-trigger","neo-spin-buttons"],spinButtonDownIconCls:"fa fa-chevron-down",spinButtonUpIconCls:"fa fa-chevron-up",type:"spinupdown"}}onConstructed(){let e=this.vdom;e.cn=[{cls:["neo-spin-button","neo-up",this.spinButtonUpIconCls]},{cls:["neo-spin-button","neo-down",this.spinButtonDownIconCls]}],this.vdom=e,super.onConstructed()}onTriggerClick(e){let t=this,n=e.path[0].cls.join(" ");n.includes("neo-down")?t.field.onSpinButtonDownClick():n.includes("neo-up")&&t.field.onSpinButtonUpClick()}}Neo.applyClassConfig(l);var s=n(13);class r extends s.a{static getStaticConfig(){return{triggerPositions:["right","sides"]}}static getConfig(){return{className:"Neo.form.field.Number",ntype:"numberfield",cls:["neo-numberfield","neo-textfield"],excludedValues:null,inputEditable_:!0,inputType:"number",maxValue_:100,minValue_:0,stepSize_:1,triggerPosition_:"right",useSpinButtons_:!0}}onConstructed(){this.updateTriggers(),super.onConstructed()}afterSetInputEditable(e,t){let n=this.vdom,a=this.getInputEl().style||{};e?delete a.pointerEvents:a.pointerEvents="none",this.vdom=n}afterSetMaxValue(e,t){this.changeInputElKey("max",e)}afterSetMinValue(e,t){this.changeInputElKey("min",e)}afterSetStepSize(e,t){let n,a=this,o=a.value;a.changeInputElKey("step",e),null!==o&&(n=(o-a.minValue)%e,0!==n&&(n/e>.5?o+e-n<a.maxValue?a.value=o+e-n:o-n>a.minValue&&(a.value=o-n):o-n>a.minValue?a.value=o-n:o+e-n<a.maxValue&&(a.value=o+e-n)))}afterSetTriggerPosition(e,t){t&&this.updateTriggers()}afterSetUseSpinButtons(e,t){"boolean"==typeof t&&this.updateTriggers()}beforeSetTriggerPosition(e,t){return this.beforeSetEnumValue(e,t,"triggerPosition")}onInputValueChange(e){let t=this,n=e.value,a=t.value;n||t.required?(n=parseInt(n),Neo.isNumber(n)?(n-=n%t.stepSize,n=Math.max(t.minValue,n),n=Math.min(t.maxValue,n),e.value=n,super.onInputValueChange(e)):t._value=a):super.onInputValueChange(e)}onSpinButtonDownClick(){let e=this,t=e.value||e.maxValue+e.stepSize,n=Math.max(e.minValue,t-e.stepSize);if(e.excludedValues)for(;e.excludedValues.includes(n);)n=Math.max(e.minValue,n-e.stepSize);t!==n&&(e.value=n)}onSpinButtonUpClick(){let e=this,t=e.value||e.minValue-e.stepSize,n=Math.min(e.maxValue,t+e.stepSize);if(e.excludedValues)for(;e.excludedValues.includes(n);)n=Math.min(e.maxValue,n+e.stepSize);t!==n&&(e.value=n)}updateTriggers(){let e=this,t=e.triggers||[];e.useSpinButtons?"right"===e.triggerPosition?(e.hasTrigger("spinupdown")||t.push(l),e.removeTrigger("spindown",!0,t),e.removeTrigger("spinup",!0,t)):(e.hasTrigger("spindown")||t.push(o),e.hasTrigger("spinup")||t.push(i),e.removeTrigger("spinupdown",!0,t)):(e.removeTrigger("spindown",!0,t),e.removeTrigger("spinup",!0,t),e.removeTrigger("spinupdown",!0,t)),e.triggers=t}}Neo.applyClassConfig(r)},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(7);class o extends a.a{static getConfig(){return{className:"Neo.container.Viewport",ntype:"viewport",applyBodyCls:!0,cls:["neo-viewport"]}}onConstructed(){super.onConstructed(),this.applyBodyCls&&Neo.main.DomAccess.applyBodyCls({appName:this.appName,cls:["neo-body-viewport"]})}}Neo.applyClassConfig(o)},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(7);n(25);class o extends a.a{static getConfig(){return{className:"Neo.container.Panel",ntype:"panel",cls:["neo-panel","neo-container"],containerConfig:null,headerDefaults:null,headers:null,_layout:{ntype:"vbox",align:"stretch"},verticalHeadersFirst:!1}}constructor(e){super(e);let t=this;(e&&!0===e.verticalHeadersFirst||!0===t.verticalHeadersFirst)&&(t.layout={ntype:"hbox",align:"stretch"})}createItems(){let e,t=this,n=!1===t.verticalHeadersFirst,a=t.headers||[],i=a.filter(e=>e.dock===(n?"bottom":"right")),l=a.filter(e=>e.dock===(n?"left":"top")),s=a.filter(e=>e.dock===(n?"right":"bottom")),r=a.filter(e=>e.dock===(n?"top":"left")),u=i.length>0||r.length>0,p=l.length>0||s.length>0,c=t.items,d=[],m=[];a.length<1&&Neo.error("Panel without headers, please use a Container instead",t.id),r.forEach(e=>{m.push(o.createHeaderConfig(e))}),p&&(n&&u||!n&&u)?(l.forEach(e=>{d.push(o.createHeaderConfig(e))}),e={ntype:"container",flex:1,items:c,itemDefaults:t.itemDefaults,...t.containerConfig||{}},d.push({...t.headerDefaults,...e}),s.forEach(e=>{d.push(o.createHeaderConfig(e))}),m.push({ntype:"container",items:d,layout:{ntype:n?"hbox":"vbox",align:"stretch"}})):(e={ntype:"container",flex:1,items:c,itemDefaults:t.itemDefaults,...t.containerConfig||{}},m.push({...t.headerDefaults,...e})),i.forEach(e=>{m.push(o.createHeaderConfig(e))}),t.items=m,t.itemDefaults=null,super.createItems()}static createHeaderConfig(e){let t={ntype:"toolbar",flex:"0 1 auto"};return e.text&&(t.items=[{ntype:"label",cls:["neo-panel-header-text","neo-label"],text:e.text}],delete e.text),Neo.isArray(e.items)&&e.items.forEach(e=>{"label"===e.ntype&&(e.cls=["neo-panel-header-text","neo-label"])}),{...t,...e}}}Neo.applyClassConfig(o)},32:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(12),o=n(7),i=n(0),l=n(30),s=n(29);class r extends s.a{static getConfig(){return{className:"Neo.examples.ConfigurationContainer",ntype:"configuration-viewport",autoMount:!0,layout:{ntype:"hbox",align:"stretch"},configItemLabelWidth:150,configItemWidth:270,configPanelFlex:1,exampleComponent:null,exampleComponentFlex:2}}onConstructed(){let e=this;e.exampleComponent=e.createExampleComponent(),e.configurationComponents=e.createConfigurationComponents()||[],e.items=[{module:o.a,items:[e.exampleComponent],flex:e.exampleComponentFlex,layout:"base",style:{padding:"20px"}},{module:l.a,cls:["neo-panel","neo-container","neo-configuration-panel"],flex:e.configPanelFlex,style:{margin:"20px"},containerConfig:{style:{overflowY:"scroll"}},headers:[{dock:"top",items:[{ntype:"label",text:"Configuration"},{ntype:"component",flex:1},{module:a.a,handler:e.onSwitchTheme.bind(e),id:e.id+"__switchThemeButton",text:"Theme Dark"}]}],items:[{module:o.a,layout:{ntype:"vbox"},style:{padding:"10px"},cls:["neo-configuration-panel-body"],itemDefaults:{clearToOriginalValue:!0,labelWidth:e.configItemLabelWidth,width:e.configItemWidth},items:[...e.configurationComponents,{module:a.a,handler:e.onSwitchTheme.bind(e,"cmp"),id:e.id+"_cmp_switchThemeButton",style:{marginTop:"20px"},text:"Theme Dark",width:100},{module:a.a,handler:()=>{console.log(e.exampleComponent)},text:"Log Instance",width:100}]}]}],super.onConstructed()}createConfigurationComponents(){return null}createExampleComponent(){return null}onConfigChange(e,t){this.exampleComponent[e]=t.value}onRadioChange(e,t,n){!0===n.value&&(this.exampleComponent[e]=t)}onSwitchTheme(e){let t=this,n=Neo.getComponent(t.id+("cmp"!==e?"__":"_cmp_")+"switchThemeButton"),a="cmp"===e?t.exampleComponent.cls:t.cls;"Theme Light"===n.text?(n.text="Theme Dark",i.a.remove(a,"neo-theme-dark"),i.a.add(a,"neo-theme-light")):(n.text="Theme Light",i.a.remove(a,"neo-theme-light"),i.a.add(a,"neo-theme-dark")),"cmp"===e?t.exampleComponent.cls=a:t.cls=a}}Neo.applyClassConfig(r)},83:function(e,t,n){"use strict";n.r(t),n.d(t,"onStart",(function(){return u}));var a=n(17),o=n(32),i=n(20),l=n(19),s=n(13);class r extends o.a{static getConfig(){return{className:"TestApp.MainContainer",ntype:"main-container",autoMount:!0,configItemLabelWidth:160,layout:{ntype:"hbox",align:"stretch"}}}createConfigurationComponents(){let e=this;return[{module:a.a,checked:e.exampleComponent.clearable,labelText:"clearable",listeners:{change:e.onConfigChange.bind(e,"clearable")}},{module:a.a,checked:e.exampleComponent.clearToOriginalValue,labelText:"clearToOriginalValue",listeners:{change:e.onConfigChange.bind(e,"clearToOriginalValue")},style:{marginTop:"10px"}},{module:a.a,checked:e.exampleComponent.hideLabel,labelText:"hideLabel",listeners:{change:e.onConfigChange.bind(e,"hideLabel")},style:{marginTop:"10px"}},{module:s.a,labelText:"labelText",listeners:{change:e.onConfigChange.bind(e,"labelText")},style:{marginTop:"10px"},value:e.exampleComponent.labelText},{module:i.a,labelText:"labelWidth",listeners:{change:e.onConfigChange.bind(e,"labelWidth")},maxValue:200,minValue:50,stepSize:10,value:e.exampleComponent.labelWidth},{module:i.a,labelText:"maxValue",listeners:{change:e.onConfigChange.bind(e,"maxValue")},maxValue:100,minValue:5,value:e.exampleComponent.maxValue},{module:i.a,labelText:"minValue",listeners:{change:e.onConfigChange.bind(e,"minValue")},maxValue:50,minValue:-100,value:e.exampleComponent.minValue},{module:s.a,labelText:"placeholderText",listeners:{change:e.onConfigChange.bind(e,"placeholderText")},value:e.exampleComponent.placeholderText},{module:i.a,labelText:"stepSize",listeners:{change:e.onConfigChange.bind(e,"stepSize")},maxValue:10,minValue:1,value:e.exampleComponent.stepSize},{module:l.a,checked:"right"===e.exampleComponent.triggerPosition,hideValueLabel:!1,labelText:"triggerPosition",listeners:{change:e.onRadioChange.bind(e,"triggerPosition","right")},name:"triggerPosition",style:{marginTop:"10px"},valueLabelText:"right"},{module:l.a,checked:"sides"===e.exampleComponent.triggerPosition,hideValueLabel:!1,labelText:"",listeners:{change:e.onRadioChange.bind(e,"triggerPosition","sides")},name:"triggerPosition",valueLabelText:"sides"},{module:a.a,checked:e.exampleComponent.useSpinButtons,style:{marginTop:"10px"},labelText:"useSpinButtons",listeners:{change:e.onConfigChange.bind(e,"useSpinButtons")}},{module:i.a,labelText:"width",listeners:{change:e.onConfigChange.bind(e,"width")},maxValue:300,minValue:50,stepSize:5,style:{marginTop:"10px"},value:e.exampleComponent.width}]}createExampleComponent(){return Neo.create(i.a,{autoRender:!1,clearToOriginalValue:!0,labelText:"Label",labelWidth:70,value:20,width:200})}}Neo.applyClassConfig(r);const u=()=>Neo.app({appPath:"examples/form/field/number/",mainView:r,name:"TestApp"})}});