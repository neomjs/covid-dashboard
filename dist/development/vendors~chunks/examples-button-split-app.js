self["webpackChunk"](["vendors~chunks/examples-button-split-app"],{

/***/ "./node_modules/neo.mjs/examples/button/split/MainContainer.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/button/split/MainContainer.mjs ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _src_button_Split_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/button/Split.mjs */ "./node_modules/neo.mjs/src/button/Split.mjs");
/* harmony import */ var _ConfigurationViewport_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ConfigurationViewport.mjs */ "./node_modules/neo.mjs/examples/ConfigurationViewport.mjs");
/* harmony import */ var _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/form/field/Radio.mjs */ "./node_modules/neo.mjs/src/form/field/Radio.mjs");
/* harmony import */ var _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/form/field/Number.mjs */ "./node_modules/neo.mjs/src/form/field/Number.mjs");
/* harmony import */ var _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/form/field/Text.mjs */ "./node_modules/neo.mjs/src/form/field/Text.mjs");






/**
 * @class ExampleSplitButton.MainContainer
 * @extends Neo.examples.ConfigurationViewport
 */
class MainContainer extends _ConfigurationViewport_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        className: 'ExampleSplitButton.MainContainer',
        ntype    : 'main-container',

        autoMount           : true,
        configItemLabelWidth: 110,
        configItemWidth     : 230,
        layout              : {ntype: 'hbox', align: 'stretch'}
    }}

    createConfigurationComponents() {
        let me = this;

        return [{
            module    :  _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            clearable : true,
            labelText : 'height',
            listeners : {change: me.onConfigChange.bind(me, 'height')},
            maxValue  : 300,
            minValue  : 30,
            stepSize  : 5,
            value     : me.exampleComponent.height
        }, {
            module    :  _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_4__["default"], // todo: selectField with options
            labelText : 'iconCls',
            listeners : {change: me.onConfigChange.bind(me, 'iconCls')},
            value     : me.exampleComponent.iconCls
        }, {
            module    :  _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_4__["default"], // todo: colorPickerField
            clearable : true,
            labelText : 'iconColor',
            listeners : {change: me.onConfigChange.bind(me, 'iconColor')},
            value     : me.exampleComponent.iconColor
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            checked       : me.exampleComponent.iconPosition === 'top',
            hideValueLabel: false,
            labelText     : 'iconPosition',
            listeners     : {change: me.onRadioChange.bind(me, 'iconPosition', 'top')},
            name          : 'iconPosition',
            style         : {marginTop: '10px'},
            valueLabelText: 'Top'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            checked       : me.exampleComponent.iconPosition === 'right',
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onRadioChange.bind(me, 'iconPosition', 'right')},
            name          : 'iconPosition',
            valueLabelText: 'Right'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            checked       : me.exampleComponent.iconPosition === 'bottom',
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onRadioChange.bind(me, 'iconPosition', 'bottom')},
            name          : 'iconPosition',
            valueLabelText: 'Bottom'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            checked       : me.exampleComponent.iconPosition === 'left',
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onRadioChange.bind(me, 'iconPosition', 'left')},
            name          : 'iconPosition',
            valueLabelText: 'Left'
        }, {
            module    :  _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            clearable : true,
            labelText : 'text',
            listeners : {change: me.onConfigChange.bind(me, 'text')},
            style     : {marginTop: '10px'},
            value     : me.exampleComponent.text
        }, {
            module    :  _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            clearable : true,
            labelText : 'width',
            listeners : {change: me.onConfigChange.bind(me, 'width')},
            maxValue  : 300,
            minValue  : 100,
            stepSize  : 5,
            value     : me.exampleComponent.width
        }];
    }

    createExampleComponent() {
        return Neo.create({
            module : _src_button_Split_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            iconCls: 'fa fa-home',
            text   : 'Hello World',

            handler: data => {
                console.log('button click =>', data.component.id);
            },

            splitButtonHandler: data => {
                console.log('split button click =>', data.component.id);
            }
        });
    }
}

Neo.applyClassConfig(MainContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/button/split/app.mjs":
/*!************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/button/split/app.mjs ***!
  \************************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainContainer.mjs */ "./node_modules/neo.mjs/examples/button/split/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'examples/button/split/',
    mainView: _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'ExampleSplitButton'
});



/***/ }),

/***/ "./node_modules/neo.mjs/src/button/Split.mjs":
/*!***************************************************!*\
  !*** ./node_modules/neo.mjs/src/button/Split.mjs ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Split; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/button/Base.mjs");


/**
 * A wrapper div containing 2 Buttons.
 * We are extending button.Base and are using getVdomRoot() to map the main Button into the first vdom child.
 * @class Neo.button.Split
 * @extends Neo.button.Base
 */
class Split extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.button.Split'
         * @protected
         */
        className: 'Neo.button.Split',
        /**
         * @member {String} ntype='split-button'
         * @protected
         */
        ntype: 'split-button',
        /**
         * Read only, it will get created inside the ctor.
         * Use triggerButtonConfig to pass initial config for it.
         * @member {Neo.button.Base|null} triggerButton=null
         * @protected
         */
        triggerButton: null,
        /**
         * Configs to apply to the trigger button instance
         * @member {Object|null} triggerButtonConfig=null
         * @protected
         */
        triggerButtonConfig: null,
        /**
         * The CSS class to use for the SplitButton icon, e.g. 'fa fa-home'
         * @member {String} triggerButtonCls_='fa fa-caret-down'
         */
        triggerButtonIconCls_: 'fa fa-caret-down',
        /**
         * @member {String} _vdom
         */
        _vdom: {
            cls: ['neo-split-button'],
            cn : [{
                tag: 'button',
                cn : [{
                    tag: 'span',
                    cls: ['neo-button-glyph']
                },{
                    tag: 'span',
                    cls: ['neo-button-text']
                }]
            }]
        }
    }}

    /**
     *
     * @returns {Object} The new vdom root
     */
    getVdomRoot() {
        return this.vdom.cn[0];
    }

    /**
     *
     * @returns {Object} The new vnode root
     */
    getVnodeRoot() {
        return this.vnode.childNodes[0];
    }

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me   = this,
            vdom = me.vdom;

        me.triggerButton = Neo.create({
            module  : _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            appName : me.appName,
            disabled: me.disabled,
            handler : me.splitButtonHandler,
            iconCls : me.triggerButtonIconCls,
            parentId: me.id,
            pressed : me.pressed,
            ...me.triggerButtonConfig || {}
        });

        vdom.cn.push(me.triggerButton.vdom);
        me.vdom = vdom;
    }

    /**
     * Triggered after the disabled config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetDisabled(value, oldValue) {
        let me = this;

        if (me.triggerButton) {
            me.triggerButton.disabled = value;
        }

        super.afterSetDisabled(value, oldValue);
    }

    /**
     * Triggered after the pressed config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetPressed(value, oldValue) {
        let me = this;

        if (me.triggerButton) {
            me.triggerButton.pressed = value;
        }

        super.afterSetPressed(value, oldValue);
    }

    /**
     * Triggered after the triggerButtonIconCls config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetTriggerButtonIconCls(value, oldValue) {
        let me = this;

        if (me.triggerButton) {
            me.triggerButton.iconCls = value;
        }
    }

    /**
     *
     * @param {Boolean} [updateParentVdom=false]
     * @param {Boolean} [silent=false]
     */
    destroy(updateParentVdom=false, silent=false) {
        this.triggerButton.destroy(); // default opts => no parent update
        super.destroy(updateParentVdom, silent);
    }

    /**
     * Override as needed or pass a controller based handler into triggerButtonConfig
     * @param {Object} data
     */
    splitButtonHandler(data) {

    }
}

Neo.applyClassConfig(Split);



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/CheckBox.mjs ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckBox; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/form/field/Base.mjs");


/**
 * @class Neo.form.field.CheckBox
 * @extends Neo.form.field.Base
 */
class CheckBox extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.CheckBox'
         * @protected
         */
        className: 'Neo.form.field.CheckBox',
        /**
         * @member {String} ntype='checkboxfield'
         * @protected
         */
        ntype: 'checkboxfield',
        /**
         * @member {Boolean} checked_=false
         */
        checked_: false,
        /**
         * @member {Array} cls=['neo-checkboxfield']
         */
        cls: ['neo-checkboxfield'],
        /**
         * @member {Boolean} hideLabel_=false
         */
        hideLabel_: false,
        /**
         * @member {Boolean} hideValueLabel_=false
         */
        hideValueLabel_: true,
        /**
         * @member {String} inputType_='checkbox'
         */
        inputType_: 'checkbox',
        /**
         * @member {String} labelText_='LabelText'
         */
        labelText_: 'LabelText',
        /**
         * defaults to px
         * @member {Number|String} labelWidth_=150
         */
        labelWidth_: 150,
        /**
         * @member {String} The name (group) of the input dom node
         */
        name_: '',
        /**
         * @member {String} valueLabelText_='ValueLabel'
         */
        valueLabelText_: 'ValueLabel',
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            cn: [{
                tag: 'label',
                cls: ['neo-checkbox-label']
            }, {
                tag: 'input',
                cls: ['neo-checkbox-input']
            }, {
                tag: 'label',
                cls: ['neo-checkbox-value-label']
            }]
        }
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me           = this,
            domListeners = Neo.clone(me.domListeners, true),
            vdom         = me.vdom,
            inputEl      = vdom.cn[1],
            valueLabel   = vdom.cn[2];

        inputEl.id = valueLabel.for = me.id + '-input';
        me.vdom = vdom;

        domListeners.push({
            change: {
                fn   : me.onInputValueChange,
                scope: me
            }
        });

        me.domListeners = domListeners;
    }

    /**
     *
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetChecked(value, oldValue) {
        let me   = this,
            vdom = me.vdom;

        vdom.cn[1].checked = value;
        me.vdom = vdom;

        if (oldValue !== undefined) {
            me.fire('change', {
                component: me,
                oldValue : oldValue,
                value    : value
            });
        }
    }

    /**
     * Triggered after the hideLabel config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetHideLabel(value, oldValue) {
        let vdom = this.vdom;

        vdom.cn[0].removeDom = value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the hideLabelValue config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetHideValueLabel(value, oldValue) {
        let vdom = this.vdom;

        vdom.cn[2].removeDom = value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the inputType config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetInputType(value, oldValue) {
        let vdom = this.vdom;

        vdom.cn[1].type = value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the labelText config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetLabelText(value, oldValue) {
        let vdom = this.vdom;

        vdom.cn[0].innerHTML = value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the labelWidth config got changed
     * @param {Number|String} value
     * @param {Number|String} oldValue
     * @protected
     */
    afterSetLabelWidth(value, oldValue) {
        let me   = this,
            vdom = me.vdom;

        if (!me.hideLabel) {
            vdom.cn[0].width = value;
            me.vdom = vdom;
        }
    }

    /**
     * Triggered after the name config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetName(value, oldValue) {
        let vdom = this.vdom;

        vdom.cn[1].name = value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the value config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetValue(value, oldValue) {
        if (value) {
            let vdom = this.vdom;

            vdom.cn[1].value = value;
            this.vdom = vdom;
        }

        super.afterSetValue(value, oldValue);
    }

    /**
     * Triggered after the valueLabel config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetValueLabelText(value, oldValue) {
        let me   = this,
            vdom = me.vdom;

        if (!me.hideValueLabel) {
            vdom.cn[2].innerHTML = value;
            me.vdom = vdom;
        }
    }

    /**
     * Gets triggered when a user checks a checkbox input.
     * @param {Object} data
     */
    onInputValueChange(data) {
        let me      = this,
            checked = data.target.checked;

        me._checked = checked; // silent update

        // keep the vdom & vnode in sync for future updates
        me.vdom.cn[1].checked = checked;
        me.vnode.childNodes[me.hideLabel ? 0 : 1].attributes.checked = checked + '';

        me.fire('change', {
            component: me,
            oldValue : !checked,
            value    : checked
        });
    }
}

Neo.applyClassConfig(CheckBox);



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/Radio.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/Radio.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Radio; });
/* harmony import */ var _CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckBox.mjs */ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs");
/* harmony import */ var _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../manager/Component.mjs */ "./node_modules/neo.mjs/src/manager/Component.mjs");



/**
 * @class Neo.form.field.Radio
 * @extends Neo.form.field.CheckBox
 */
class Radio extends _CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.Radio'
         * @protected
         */
        className: 'Neo.form.field.Radio',
        /**
         * @member {String} ntype='radiofield'
         * @protected
         */
        ntype: 'radiofield',
        /**
         * @member {Array} cls=['neo-radiofield']
         */
        cls: ['neo-radiofield'],
        /**
         * @member {String} inputType='radio'
         */
        inputType: 'radio',
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            cn: [{
                tag: 'label',
                cls: ['neo-radio-label']
            }, {
                tag: 'input',
                cls: ['neo-radio-input']
            }, {
                tag: 'label',
                cls: ['neo-radio-value-label']
            }]
        }
    }}

    /**
     * Triggered after the checked config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetChecked(value, oldValue) {
        super.afterSetChecked(value, oldValue);

        // update radios with the same name to be unchecked
        if (value) {
            this.uncheckGroupItems();
        }
    }

    /**
     * Gets triggered when a user checks a radio input.
     * @param {Object} data
     */
    onInputValueChange(data) {
        super.onInputValueChange(data);
        this.uncheckGroupItems();
    }

    /**
     * Radios do not fire a change event for "uncheck", so we need to iterate over other radios with the same name.
     */
    uncheckGroupItems() {
        let me = this,
            radios;

        // discuss: we could limit this to radios inside the same form, IF a top level form is used
        radios = _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].find({
            ntype: 'radiofield',
            name : me.name
        });

        radios.forEach(item => {
            if (item.id !== me.id && item._checked) {
                item._checked = false; // silent update

                // keep the vdom & vnode in sync for future updates
                item.vdom.cn[1].checked = false;

                if (item.vnode) {
                    item.vnode.childNodes[me.hideLabel ? 0 : 1].attributes.checked = 'false';
                }

                item.fire('change', {
                    component: me,
                    oldValue : true,
                    value    : false
                });
            }
        });
    }
}

Neo.applyClassConfig(Radio);



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9idXR0b24vc3BsaXQvTWFpbkNvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvYnV0dG9uL3NwbGl0L2FwcC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2J1dHRvbi9TcGxpdC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2Zvcm0vZmllbGQvQ2hlY2tCb3gubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL1JhZGlvLm1qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0U7QUFDRTtBQUNFO0FBQ0M7QUFDRjs7QUFFckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsa0VBQXFCO0FBQ2pELHdCQUF3QjtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLGtFQUFXO0FBQ3BDO0FBQ0E7QUFDQSx5QkFBeUIsNkNBQTZDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHlCQUF5QixnRUFBUztBQUNsQztBQUNBLHlCQUF5Qiw4Q0FBOEM7QUFDdkU7QUFDQSxTQUFTO0FBQ1QseUJBQXlCLGdFQUFTO0FBQ2xDO0FBQ0E7QUFDQSx5QkFBeUIsZ0RBQWdEO0FBQ3pFO0FBQ0EsU0FBUztBQUNULDRCQUE0QixpRUFBSztBQUNqQztBQUNBO0FBQ0E7QUFDQSw2QkFBNkIseURBQXlEO0FBQ3RGO0FBQ0EsNkJBQTZCLGtCQUFrQjtBQUMvQztBQUNBLFNBQVM7QUFDVCw0QkFBNEIsaUVBQUs7QUFDakM7QUFDQTtBQUNBO0FBQ0EsNkJBQTZC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O0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQiw4REFBZ0I7QUFDakM7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSIsImZpbGUiOiJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1idXR0b24tc3BsaXQtYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwbGl0QnV0dG9uICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvYnV0dG9uL1NwbGl0Lm1qcyc7XG5pbXBvcnQgQ29uZmlndXJhdGlvblZpZXdwb3J0IGZyb20gJy4uLy4uL0NvbmZpZ3VyYXRpb25WaWV3cG9ydC5tanMnO1xuaW1wb3J0IFJhZGlvICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvZm9ybS9maWVsZC9SYWRpby5tanMnO1xuaW1wb3J0IE51bWJlckZpZWxkICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvZm9ybS9maWVsZC9OdW1iZXIubWpzJztcbmltcG9ydCBUZXh0RmllbGQgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2Zvcm0vZmllbGQvVGV4dC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBFeGFtcGxlU3BsaXRCdXR0b24uTWFpbkNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmV4YW1wbGVzLkNvbmZpZ3VyYXRpb25WaWV3cG9ydFxuICovXG5jbGFzcyBNYWluQ29udGFpbmVyIGV4dGVuZHMgQ29uZmlndXJhdGlvblZpZXdwb3J0IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogJ0V4YW1wbGVTcGxpdEJ1dHRvbi5NYWluQ29udGFpbmVyJyxcbiAgICAgICAgbnR5cGUgICAgOiAnbWFpbi1jb250YWluZXInLFxuXG4gICAgICAgIGF1dG9Nb3VudCAgICAgICAgICAgOiB0cnVlLFxuICAgICAgICBjb25maWdJdGVtTGFiZWxXaWR0aDogMTEwLFxuICAgICAgICBjb25maWdJdGVtV2lkdGggICAgIDogMjMwLFxuICAgICAgICBsYXlvdXQgICAgICAgICAgICAgIDoge250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgfX1cblxuICAgIGNyZWF0ZUNvbmZpZ3VyYXRpb25Db21wb25lbnRzKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIHJldHVybiBbe1xuICAgICAgICAgICAgbW9kdWxlICAgIDogIE51bWJlckZpZWxkLFxuICAgICAgICAgICAgY2xlYXJhYmxlIDogdHJ1ZSxcbiAgICAgICAgICAgIGxhYmVsVGV4dCA6ICdoZWlnaHQnLFxuICAgICAgICAgICAgbGlzdGVuZXJzIDoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ2hlaWdodCcpfSxcbiAgICAgICAgICAgIG1heFZhbHVlICA6IDMwMCxcbiAgICAgICAgICAgIG1pblZhbHVlICA6IDMwLFxuICAgICAgICAgICAgc3RlcFNpemUgIDogNSxcbiAgICAgICAgICAgIHZhbHVlICAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQuaGVpZ2h0XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICA6ICBUZXh0RmllbGQsIC8vIHRvZG86IHNlbGVjdEZpZWxkIHdpdGggb3B0aW9uc1xuICAgICAgICAgICAgbGFiZWxUZXh0IDogJ2ljb25DbHMnLFxuICAgICAgICAgICAgbGlzdGVuZXJzIDoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ2ljb25DbHMnKX0sXG4gICAgICAgICAgICB2YWx1ZSAgICAgOiBtZS5leGFtcGxlQ29tcG9uZW50Lmljb25DbHNcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgIDogIFRleHRGaWVsZCwgLy8gdG9kbzogY29sb3JQaWNrZXJGaWVsZFxuICAgICAgICAgICAgY2xlYXJhYmxlIDogdHJ1ZSxcbiAgICAgICAgICAgIGxhYmVsVGV4dCA6ICdpY29uQ29sb3InLFxuICAgICAgICAgICAgbGlzdGVuZXJzIDoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ2ljb25Db2xvcicpfSxcbiAgICAgICAgICAgIHZhbHVlICAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQuaWNvbkNvbG9yXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICAgOiBSYWRpbyxcbiAgICAgICAgICAgIGNoZWNrZWQgICAgICAgOiBtZS5leGFtcGxlQ29tcG9uZW50Lmljb25Qb3NpdGlvbiA9PT0gJ3RvcCcsXG4gICAgICAgICAgICBoaWRlVmFsdWVMYWJlbDogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgIDogJ2ljb25Qb3NpdGlvbicsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICAgIDoge2NoYW5nZTogbWUub25SYWRpb0NoYW5nZS5iaW5kKG1lLCAnaWNvblBvc2l0aW9uJywgJ3RvcCcpfSxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICAgOiAnaWNvblBvc2l0aW9uJyxcbiAgICAgICAgICAgIHN0eWxlICAgICAgICAgOiB7bWFyZ2luVG9wOiAnMTBweCd9LFxuICAgICAgICAgICAgdmFsdWVMYWJlbFRleHQ6ICdUb3AnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICAgOiBSYWRpbyxcbiAgICAgICAgICAgIGNoZWNrZWQgICAgICAgOiBtZS5leGFtcGxlQ29tcG9uZW50Lmljb25Qb3NpdGlvbiA9PT0gJ3JpZ2h0JyxcbiAgICAgICAgICAgIGhpZGVWYWx1ZUxhYmVsOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsVGV4dCAgICAgOiAnJyxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgICAgOiB7Y2hhbmdlOiBtZS5vblJhZGlvQ2hhbmdlLmJpbmQobWUsICdpY29uUG9zaXRpb24nLCAncmlnaHQnKX0sXG4gICAgICAgICAgICBuYW1lICAgICAgICAgIDogJ2ljb25Qb3NpdGlvbicsXG4gICAgICAgICAgICB2YWx1ZUxhYmVsVGV4dDogJ1JpZ2h0J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogUmFkaW8sXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5pY29uUG9zaXRpb24gPT09ICdib3R0b20nLFxuICAgICAgICAgICAgaGlkZVZhbHVlTGFiZWw6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWxUZXh0ICAgICA6ICcnLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHtjaGFuZ2U6IG1lLm9uUmFkaW9DaGFuZ2UuYmluZChtZSwgJ2ljb25Qb3NpdGlvbicsICdib3R0b20nKX0sXG4gICAgICAgICAgICBuYW1lICAgICAgICAgIDogJ2ljb25Qb3NpdGlvbicsXG4gICAgICAgICAgICB2YWx1ZUxhYmVsVGV4dDogJ0JvdHRvbSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICA6IFJhZGlvLFxuICAgICAgICAgICAgY2hlY2tlZCAgICAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQuaWNvblBvc2l0aW9uID09PSAnbGVmdCcsXG4gICAgICAgICAgICBoaWRlVmFsdWVMYWJlbDogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgIDogJycsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICAgIDoge2NoYW5nZTogbWUub25SYWRpb0NoYW5nZS5iaW5kKG1lLCAnaWNvblBvc2l0aW9uJywgJ2xlZnQnKX0sXG4gICAgICAgICAgICBuYW1lICAgICAgICAgIDogJ2ljb25Qb3NpdGlvbicsXG4gICAgICAgICAgICB2YWx1ZUxhYmVsVGV4dDogJ0xlZnQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICA6ICBUZXh0RmllbGQsXG4gICAgICAgICAgICBjbGVhcmFibGUgOiB0cnVlLFxuICAgICAgICAgICAgbGFiZWxUZXh0IDogJ3RleHQnLFxuICAgICAgICAgICAgbGlzdGVuZXJzIDoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ3RleHQnKX0sXG4gICAgICAgICAgICBzdHlsZSAgICAgOiB7bWFyZ2luVG9wOiAnMTBweCd9LFxuICAgICAgICAgICAgdmFsdWUgICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC50ZXh0XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICA6ICBOdW1iZXJGaWVsZCxcbiAgICAgICAgICAgIGNsZWFyYWJsZSA6IHRydWUsXG4gICAgICAgICAgICBsYWJlbFRleHQgOiAnd2lkdGgnLFxuICAgICAgICAgICAgbGlzdGVuZXJzIDoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ3dpZHRoJyl9LFxuICAgICAgICAgICAgbWF4VmFsdWUgIDogMzAwLFxuICAgICAgICAgICAgbWluVmFsdWUgIDogMTAwLFxuICAgICAgICAgICAgc3RlcFNpemUgIDogNSxcbiAgICAgICAgICAgIHZhbHVlICAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQud2lkdGhcbiAgICAgICAgfV07XG4gICAgfVxuXG4gICAgY3JlYXRlRXhhbXBsZUNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIE5lby5jcmVhdGUoe1xuICAgICAgICAgICAgbW9kdWxlIDogU3BsaXRCdXR0b24sXG4gICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICAgICAgICB0ZXh0ICAgOiAnSGVsbG8gV29ybGQnLFxuXG4gICAgICAgICAgICBoYW5kbGVyOiBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYnV0dG9uIGNsaWNrID0+JywgZGF0YS5jb21wb25lbnQuaWQpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc3BsaXRCdXR0b25IYW5kbGVyOiBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3BsaXQgYnV0dG9uIGNsaWNrID0+JywgZGF0YS5jb21wb25lbnQuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5Db250YWluZXIpO1xuXG5leHBvcnQge01haW5Db250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSAnLi9NYWluQ29udGFpbmVyLm1qcyc7XG5cbmNvbnN0IG9uU3RhcnQgPSAoKSA9PiBOZW8uYXBwKHtcbiAgICBhcHBQYXRoIDogJ2V4YW1wbGVzL2J1dHRvbi9zcGxpdC8nLFxuICAgIG1haW5WaWV3OiBNYWluQ29udGFpbmVyLFxuICAgIG5hbWUgICAgOiAnRXhhbXBsZVNwbGl0QnV0dG9uJ1xufSk7XG5cbmV4cG9ydCB7b25TdGFydCBhcyBvblN0YXJ0fTsiLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEEgd3JhcHBlciBkaXYgY29udGFpbmluZyAyIEJ1dHRvbnMuXG4gKiBXZSBhcmUgZXh0ZW5kaW5nIGJ1dHRvbi5CYXNlIGFuZCBhcmUgdXNpbmcgZ2V0VmRvbVJvb3QoKSB0byBtYXAgdGhlIG1haW4gQnV0dG9uIGludG8gdGhlIGZpcnN0IHZkb20gY2hpbGQuXG4gKiBAY2xhc3MgTmVvLmJ1dHRvbi5TcGxpdFxuICogQGV4dGVuZHMgTmVvLmJ1dHRvbi5CYXNlXG4gKi9cbmNsYXNzIFNwbGl0IGV4dGVuZHMgQnV0dG9uIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmJ1dHRvbi5TcGxpdCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmJ1dHRvbi5TcGxpdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdzcGxpdC1idXR0b24nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnc3BsaXQtYnV0dG9uJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlYWQgb25seSwgaXQgd2lsbCBnZXQgY3JlYXRlZCBpbnNpZGUgdGhlIGN0b3IuXG4gICAgICAgICAqIFVzZSB0cmlnZ2VyQnV0dG9uQ29uZmlnIHRvIHBhc3MgaW5pdGlhbCBjb25maWcgZm9yIGl0LlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uYnV0dG9uLkJhc2V8bnVsbH0gdHJpZ2dlckJ1dHRvbj1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHRyaWdnZXJCdXR0b246IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25maWdzIHRvIGFwcGx5IHRvIHRoZSB0cmlnZ2VyIGJ1dHRvbiBpbnN0YW5jZVxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gdHJpZ2dlckJ1dHRvbkNvbmZpZz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHRyaWdnZXJCdXR0b25Db25maWc6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgQ1NTIGNsYXNzIHRvIHVzZSBmb3IgdGhlIFNwbGl0QnV0dG9uIGljb24sIGUuZy4gJ2ZhIGZhLWhvbWUnXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gdHJpZ2dlckJ1dHRvbkNsc189J2ZhIGZhLWNhcmV0LWRvd24nXG4gICAgICAgICAqL1xuICAgICAgICB0cmlnZ2VyQnV0dG9uSWNvbkNsc186ICdmYSBmYS1jYXJldC1kb3duJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICBjbHM6IFsnbmVvLXNwbGl0LWJ1dHRvbiddLFxuICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1idXR0b24tZ2x5cGgnXVxuICAgICAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1idXR0b24tdGV4dCddXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgbmV3IHZkb20gcm9vdFxuICAgICAqL1xuICAgIGdldFZkb21Sb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52ZG9tLmNuWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIG5ldyB2bm9kZSByb290XG4gICAgICovXG4gICAgZ2V0Vm5vZGVSb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52bm9kZS5jaGlsZE5vZGVzWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgIG1lLnRyaWdnZXJCdXR0b24gPSBOZW8uY3JlYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZSAgOiBCdXR0b24sXG4gICAgICAgICAgICBhcHBOYW1lIDogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgIGRpc2FibGVkOiBtZS5kaXNhYmxlZCxcbiAgICAgICAgICAgIGhhbmRsZXIgOiBtZS5zcGxpdEJ1dHRvbkhhbmRsZXIsXG4gICAgICAgICAgICBpY29uQ2xzIDogbWUudHJpZ2dlckJ1dHRvbkljb25DbHMsXG4gICAgICAgICAgICBwYXJlbnRJZDogbWUuaWQsXG4gICAgICAgICAgICBwcmVzc2VkIDogbWUucHJlc3NlZCxcbiAgICAgICAgICAgIC4uLm1lLnRyaWdnZXJCdXR0b25Db25maWcgfHwge31cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmRvbS5jbi5wdXNoKG1lLnRyaWdnZXJCdXR0b24udmRvbSk7XG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgZGlzYWJsZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXREaXNhYmxlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUudHJpZ2dlckJ1dHRvbikge1xuICAgICAgICAgICAgbWUudHJpZ2dlckJ1dHRvbi5kaXNhYmxlZCA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIuYWZ0ZXJTZXREaXNhYmxlZCh2YWx1ZSwgb2xkVmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgcHJlc3NlZCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFByZXNzZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLnRyaWdnZXJCdXR0b24pIHtcbiAgICAgICAgICAgIG1lLnRyaWdnZXJCdXR0b24ucHJlc3NlZCA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIuYWZ0ZXJTZXRQcmVzc2VkKHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB0cmlnZ2VyQnV0dG9uSWNvbkNscyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRUcmlnZ2VyQnV0dG9uSWNvbkNscyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUudHJpZ2dlckJ1dHRvbikge1xuICAgICAgICAgICAgbWUudHJpZ2dlckJ1dHRvbi5pY29uQ2xzID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3VwZGF0ZVBhcmVudFZkb209ZmFsc2VdXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbc2lsZW50PWZhbHNlXVxuICAgICAqL1xuICAgIGRlc3Ryb3kodXBkYXRlUGFyZW50VmRvbT1mYWxzZSwgc2lsZW50PWZhbHNlKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlckJ1dHRvbi5kZXN0cm95KCk7IC8vIGRlZmF1bHQgb3B0cyA9PiBubyBwYXJlbnQgdXBkYXRlXG4gICAgICAgIHN1cGVyLmRlc3Ryb3kodXBkYXRlUGFyZW50VmRvbSwgc2lsZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSBhcyBuZWVkZWQgb3IgcGFzcyBhIGNvbnRyb2xsZXIgYmFzZWQgaGFuZGxlciBpbnRvIHRyaWdnZXJCdXR0b25Db25maWdcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIHNwbGl0QnV0dG9uSGFuZGxlcihkYXRhKSB7XG5cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFNwbGl0KTtcblxuZXhwb3J0IHtTcGxpdCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmZvcm0uZmllbGQuQ2hlY2tCb3hcbiAqIEBleHRlbmRzIE5lby5mb3JtLmZpZWxkLkJhc2VcbiAqL1xuY2xhc3MgQ2hlY2tCb3ggZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmZvcm0uZmllbGQuQ2hlY2tCb3gnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5mb3JtLmZpZWxkLkNoZWNrQm94JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NoZWNrYm94ZmllbGQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY2hlY2tib3hmaWVsZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBjaGVja2VkXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgY2hlY2tlZF86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGNscz1bJ25lby1jaGVja2JveGZpZWxkJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tY2hlY2tib3hmaWVsZCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaGlkZUxhYmVsXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgaGlkZUxhYmVsXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBoaWRlVmFsdWVMYWJlbF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGhpZGVWYWx1ZUxhYmVsXzogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gaW5wdXRUeXBlXz0nY2hlY2tib3gnXG4gICAgICAgICAqL1xuICAgICAgICBpbnB1dFR5cGVfOiAnY2hlY2tib3gnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBsYWJlbFRleHRfPSdMYWJlbFRleHQnXG4gICAgICAgICAqL1xuICAgICAgICBsYWJlbFRleHRfOiAnTGFiZWxUZXh0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGRlZmF1bHRzIHRvIHB4XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxTdHJpbmd9IGxhYmVsV2lkdGhfPTE1MFxuICAgICAgICAgKi9cbiAgICAgICAgbGFiZWxXaWR0aF86IDE1MCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gVGhlIG5hbWUgKGdyb3VwKSBvZiB0aGUgaW5wdXQgZG9tIG5vZGVcbiAgICAgICAgICovXG4gICAgICAgIG5hbWVfOiAnJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gdmFsdWVMYWJlbFRleHRfPSdWYWx1ZUxhYmVsJ1xuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWVMYWJlbFRleHRfOiAnVmFsdWVMYWJlbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbToge1xuICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgdGFnOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIGNsczogWyduZW8tY2hlY2tib3gtbGFiZWwnXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRhZzogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWNoZWNrYm94LWlucHV0J11cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0YWc6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby1jaGVja2JveC12YWx1ZS1sYWJlbCddXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gTmVvLmNsb25lKG1lLmRvbUxpc3RlbmVycywgdHJ1ZSksXG4gICAgICAgICAgICB2ZG9tICAgICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgaW5wdXRFbCAgICAgID0gdmRvbS5jblsxXSxcbiAgICAgICAgICAgIHZhbHVlTGFiZWwgICA9IHZkb20uY25bMl07XG5cbiAgICAgICAgaW5wdXRFbC5pZCA9IHZhbHVlTGFiZWwuZm9yID0gbWUuaWQgKyAnLWlucHV0JztcbiAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgY2hhbmdlOiB7XG4gICAgICAgICAgICAgICAgZm4gICA6IG1lLm9uSW5wdXRWYWx1ZUNoYW5nZSxcbiAgICAgICAgICAgICAgICBzY29wZTogbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuZG9tTGlzdGVuZXJzID0gZG9tTGlzdGVuZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRDaGVja2VkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICB2ZG9tLmNuWzFdLmNoZWNrZWQgPSB2YWx1ZTtcbiAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IG1lLFxuICAgICAgICAgICAgICAgIG9sZFZhbHVlIDogb2xkVmFsdWUsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiB2YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGhpZGVMYWJlbCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRIaWRlTGFiZWwodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMF0ucmVtb3ZlRG9tID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBoaWRlTGFiZWxWYWx1ZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRIaWRlVmFsdWVMYWJlbCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgdmRvbS5jblsyXS5yZW1vdmVEb20gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGlucHV0VHlwZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRJbnB1dFR5cGUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMV0udHlwZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbGFiZWxUZXh0IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldExhYmVsVGV4dCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgdmRvbS5jblswXS5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGxhYmVsV2lkdGggY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRMYWJlbFdpZHRoKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICBpZiAoIW1lLmhpZGVMYWJlbCkge1xuICAgICAgICAgICAgdmRvbS5jblswXS53aWR0aCA9IHZhbHVlO1xuICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG5hbWUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TmFtZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgdmRvbS5jblsxXS5uYW1lID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB2YWx1ZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICAgICAgdmRvbS5jblsxXS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLmFmdGVyU2V0VmFsdWUodmFsdWUsIG9sZFZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHZhbHVlTGFiZWwgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VmFsdWVMYWJlbFRleHQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgIGlmICghbWUuaGlkZVZhbHVlTGFiZWwpIHtcbiAgICAgICAgICAgIHZkb20uY25bMl0uaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdHJpZ2dlcmVkIHdoZW4gYSB1c2VyIGNoZWNrcyBhIGNoZWNrYm94IGlucHV0LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25JbnB1dFZhbHVlQ2hhbmdlKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY2hlY2tlZCA9IGRhdGEudGFyZ2V0LmNoZWNrZWQ7XG5cbiAgICAgICAgbWUuX2NoZWNrZWQgPSBjaGVja2VkOyAvLyBzaWxlbnQgdXBkYXRlXG5cbiAgICAgICAgLy8ga2VlcCB0aGUgdmRvbSAmIHZub2RlIGluIHN5bmMgZm9yIGZ1dHVyZSB1cGRhdGVzXG4gICAgICAgIG1lLnZkb20uY25bMV0uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgICAgIG1lLnZub2RlLmNoaWxkTm9kZXNbbWUuaGlkZUxhYmVsID8gMCA6IDFdLmF0dHJpYnV0ZXMuY2hlY2tlZCA9IGNoZWNrZWQgKyAnJztcblxuICAgICAgICBtZS5maXJlKCdjaGFuZ2UnLCB7XG4gICAgICAgICAgICBjb21wb25lbnQ6IG1lLFxuICAgICAgICAgICAgb2xkVmFsdWUgOiAhY2hlY2tlZCxcbiAgICAgICAgICAgIHZhbHVlICAgIDogY2hlY2tlZFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENoZWNrQm94KTtcblxuZXhwb3J0IHtDaGVja0JveCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ2hlY2tCb3ggICAgICAgICBmcm9tICcuL0NoZWNrQm94Lm1qcyc7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tICcuLi8uLi9tYW5hZ2VyL0NvbXBvbmVudC5tanMnXG5cbi8qKlxuICogQGNsYXNzIE5lby5mb3JtLmZpZWxkLlJhZGlvXG4gKiBAZXh0ZW5kcyBOZW8uZm9ybS5maWVsZC5DaGVja0JveFxuICovXG5jbGFzcyBSYWRpbyBleHRlbmRzIENoZWNrQm94IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmZvcm0uZmllbGQuUmFkaW8nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5mb3JtLmZpZWxkLlJhZGlvJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3JhZGlvZmllbGQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAncmFkaW9maWVsZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gY2xzPVsnbmVvLXJhZGlvZmllbGQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1yYWRpb2ZpZWxkJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGlucHV0VHlwZT0ncmFkaW8nXG4gICAgICAgICAqL1xuICAgICAgICBpbnB1dFR5cGU6ICdyYWRpbycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbToge1xuICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgdGFnOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIGNsczogWyduZW8tcmFkaW8tbGFiZWwnXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRhZzogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLXJhZGlvLWlucHV0J11cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0YWc6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby1yYWRpby12YWx1ZS1sYWJlbCddXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgY2hlY2tlZCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldENoZWNrZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHN1cGVyLmFmdGVyU2V0Q2hlY2tlZCh2YWx1ZSwgb2xkVmFsdWUpO1xuXG4gICAgICAgIC8vIHVwZGF0ZSByYWRpb3Mgd2l0aCB0aGUgc2FtZSBuYW1lIHRvIGJlIHVuY2hlY2tlZFxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudW5jaGVja0dyb3VwSXRlbXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdHJpZ2dlcmVkIHdoZW4gYSB1c2VyIGNoZWNrcyBhIHJhZGlvIGlucHV0LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25JbnB1dFZhbHVlQ2hhbmdlKGRhdGEpIHtcbiAgICAgICAgc3VwZXIub25JbnB1dFZhbHVlQ2hhbmdlKGRhdGEpO1xuICAgICAgICB0aGlzLnVuY2hlY2tHcm91cEl0ZW1zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmFkaW9zIGRvIG5vdCBmaXJlIGEgY2hhbmdlIGV2ZW50IGZvciBcInVuY2hlY2tcIiwgc28gd2UgbmVlZCB0byBpdGVyYXRlIG92ZXIgb3RoZXIgcmFkaW9zIHdpdGggdGhlIHNhbWUgbmFtZS5cbiAgICAgKi9cbiAgICB1bmNoZWNrR3JvdXBJdGVtcygpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIHJhZGlvcztcblxuICAgICAgICAvLyBkaXNjdXNzOiB3ZSBjb3VsZCBsaW1pdCB0aGlzIHRvIHJhZGlvcyBpbnNpZGUgdGhlIHNhbWUgZm9ybSwgSUYgYSB0b3AgbGV2ZWwgZm9ybSBpcyB1c2VkXG4gICAgICAgIHJhZGlvcyA9IENvbXBvbmVudE1hbmFnZXIuZmluZCh7XG4gICAgICAgICAgICBudHlwZTogJ3JhZGlvZmllbGQnLFxuICAgICAgICAgICAgbmFtZSA6IG1lLm5hbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmFkaW9zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5pZCAhPT0gbWUuaWQgJiYgaXRlbS5fY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGl0ZW0uX2NoZWNrZWQgPSBmYWxzZTsgLy8gc2lsZW50IHVwZGF0ZVxuXG4gICAgICAgICAgICAgICAgLy8ga2VlcCB0aGUgdmRvbSAmIHZub2RlIGluIHN5bmMgZm9yIGZ1dHVyZSB1cGRhdGVzXG4gICAgICAgICAgICAgICAgaXRlbS52ZG9tLmNuWzFdLmNoZWNrZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmIChpdGVtLnZub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udm5vZGUuY2hpbGROb2Rlc1ttZS5oaWRlTGFiZWwgPyAwIDogMV0uYXR0cmlidXRlcy5jaGVja2VkID0gJ2ZhbHNlJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpdGVtLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBtZSxcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWUgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoUmFkaW8pO1xuXG5leHBvcnQge1JhZGlvIGFzIGRlZmF1bHR9OyJdLCJzb3VyY2VSb290IjoiIn0=