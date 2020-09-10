self["webpackChunk"](["vendors~chunks/examples-tab-container-app"],{

/***/ "./node_modules/neo.mjs/examples/tab/container/MainContainer.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/tab/container/MainContainer.mjs ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/form/field/CheckBox.mjs */ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs");
/* harmony import */ var _ConfigurationViewport_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ConfigurationViewport.mjs */ "./node_modules/neo.mjs/examples/ConfigurationViewport.mjs");
/* harmony import */ var _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/form/field/Number.mjs */ "./node_modules/neo.mjs/src/form/field/Number.mjs");
/* harmony import */ var _src_form_field_Picker_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/form/field/Picker.mjs */ "./node_modules/neo.mjs/src/form/field/Picker.mjs");
/* harmony import */ var _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/form/field/Radio.mjs */ "./node_modules/neo.mjs/src/form/field/Radio.mjs");
/* harmony import */ var _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/form/field/Text.mjs */ "./node_modules/neo.mjs/src/form/field/Text.mjs");
/* harmony import */ var _src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/tab/Container.mjs */ "./node_modules/neo.mjs/src/tab/Container.mjs");








/**
 * @class TestApp.MainContainer
 * @extends Neo.examples.ConfigurationViewport
 */
class MainContainer extends _ConfigurationViewport_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        className: 'TestApp.MainContainer',
        ntype    : 'main-container',

        autoMount           : true,
        configItemLabelWidth: 130,
        layout              : {ntype: 'hbox', align: 'stretch'}
    }}

    createConfigurationComponents() {
        let me = this;

        return [{
            module   : _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            id       : 'activeIndexField',
            labelText: 'activeIndex',
            listeners: {change: me.onConfigChange.bind(me, 'activeIndex')},
            maxValue : 2,
            minValue : 0,
            value    : me.exampleComponent.activeIndex
        }, {
            module   : _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            labelText: 'height',
            listeners: {change: me.onConfigChange.bind(me, 'height')},
            maxValue : 800,
            minValue : 300,
            stepSize : 5,
            value    : me.exampleComponent.height
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            checked       : me.exampleComponent.tabBarPosition === 'top',
            hideValueLabel: false,
            labelText     : 'tabBarPosition',
            listeners     : {change: me.onRadioChange.bind(me, 'tabBarPosition', 'top')},
            name          : 'tabBarPosition',
            style         : {marginTop: '10px'},
            valueLabelText: 'top'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            checked       : me.exampleComponent.tabBarPosition === 'right',
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onRadioChange.bind(me, 'tabBarPosition', 'right')},
            name          : 'tabBarPosition',
            valueLabelText: 'right'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            checked       : me.exampleComponent.tabBarPosition === 'bottom',
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onRadioChange.bind(me, 'tabBarPosition', 'bottom')},
            name          : 'tabBarPosition',
            valueLabelText: 'bottom'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            checked       : me.exampleComponent.tabBarPosition === 'left',
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onRadioChange.bind(me, 'tabBarPosition', 'left')},
            name          : 'tabBarPosition',
            valueLabelText: 'left'
        }, {
            module   : _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            labelText: 'width',
            listeners: {change: me.onConfigChange.bind(me, 'width')},
            maxValue : 800,
            minValue : 250,
            stepSize : 5,
            style    : {marginTop: '10px'},
            value    : me.exampleComponent.width
        }, {
            module        : _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            checked       : me.exampleComponent.useActiveTabIndicator,
            hideLabel     : true,
            hideValueLabel: false,
            listeners     : {change: me.onConfigChange.bind(me, 'useActiveTabIndicator')},
            name          : 'tabBarPosition',
            style         : {marginTop: '20px'},
            valueLabelText: 'useActiveTabIndicator'
        }, {
            module   : _src_form_field_Picker_mjs__WEBPACK_IMPORTED_MODULE_3__["default"], // todo: SelectField
            labelText: 'Tab 1 iconCls',
            listeners: {change: me.onFirstTabHeaderConfigChange.bind(me, 'iconCls')},
            style    : {marginTop: '50px'},
            value    : me.getFirstTabHeader().iconCls
        }, {
            module   : _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_5__["default"], // todo: ColorPicker
            labelText: 'Tab 1 iconColor',
            listeners: {change: me.onFirstTabHeaderConfigChange.bind(me, 'iconColor')},
            value    : me.getFirstTabHeader().iconColor
        }, {
            module   : _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
            labelText: 'Tab 1 text',
            listeners: {change: me.onFirstTabHeaderConfigChange.bind(me, 'text')},
            value    : me.getFirstTabHeader().text
        }];
    }

    createExampleComponent() {
        return Neo.create(_src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_6__["default"], {
            height: 300,
            width : 500,
            style : {margin: '20px'},

            itemDefaults: {
                ntype: 'component',
                cls  : ['neo-examples-tab-component'],
                style: {
                    padding: '20px'
                }
            },

            items: [{
                tabButtonConfig: {iconCls: 'fa fa-home',        text     : 'Tab 1'},
                vdom           : {innerHTML: 'Tab 1 Content'}
            }, {
                tabButtonConfig: {iconCls: 'fa fa-play-circle', text     : 'Tab 2'},
                vdom           : {innerHTML: 'Tab 2 Content'}
            }, {
                tabButtonConfig: {iconCls: 'fa fa-user',        text     : 'Tab 3'},
                vdom           : {innerHTML: 'Tab 3 Content'}
            }],

            listeners: {
                activeIndexChange: this.onUserActiveIndexChange,
                scope            : this
            }
        });
    }

    /**
     *
     * @param {String} config
     * @param {Object} opts
     */
    onFirstTabHeaderConfigChange(config, opts) {
        this.exampleComponent.getTabBar().items[0][config] = opts.value;;
    }

    /**
     *
     * @returns {Neo.tab.header.Button}
     */
    getFirstTabHeader() {
        return this.exampleComponent.getTabBar().items[0];
    }

    /**
     *
     * @param {Object} opts
     */
    onUserActiveIndexChange(opts) {
        Neo.getComponent('activeIndexField').value = opts.value;
    }
}

Neo.applyClassConfig(MainContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/tab/container/app.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/tab/container/app.mjs ***!
  \*************************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainContainer.mjs */ "./node_modules/neo.mjs/examples/tab/container/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'examples/tab/container/',
    mainView: _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'TestApp'
});



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

/***/ "./node_modules/neo.mjs/src/form/field/Picker.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/Picker.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Picker; });
/* harmony import */ var _container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _trigger_Picker_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trigger/Picker.mjs */ "./node_modules/neo.mjs/src/form/field/trigger/Picker.mjs");
/* harmony import */ var _Text_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Text.mjs */ "./node_modules/neo.mjs/src/form/field/Text.mjs");
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");





/**
 * The abstract picker field provides an arrow down trigger which opens a floating container to provide
 * more data selection options
 * @class Neo.form.field.Picker
 * @extends Neo.form.field.Text
 * @abstract
 */
class Picker extends _Text_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.Picker'
         * @protected
         */
        className: 'Neo.form.field.Picker',
        /**
         * @member {String} ntype='pickerfield'
         * @protected
         */
        ntype: 'pickerfield',
        /**
         * Stores the data from the getBoundingClientRect() call (picker & body DomRects)
         * @member {Array} clientRects=null
         * @protected
         */
        clientRects: null,
        /**
         * @member {String[]} cls=['neo-pickerfield', 'neo-textfield']
         */
        cls: ['neo-pickerfield', 'neo-textfield'],
        /**
         * Additional used keys for the selection model
         * @member {Object} keys
         */
        keys: {
            'Enter' : 'onKeyDownEnter',
            'Escape': 'onKeyDownEscape'
        },
        /**
         * @member {Boolean} matchPickerWidth=true
         */
        matchPickerWidth: true,
        /**
         * @member {Object|null} picker=null
         * @protected
         */
        picker: null,
        /**
         * Configs to pass to the picker container
         * @member {Object|null} pickerConfig=null
         */
        pickerConfig: null,
        /**
         * The height of the picker container. Defaults to px.
         * @member {Number|null} pickerHeight=100
         */
        pickerHeight: 100,
        /**
         * @member {Boolean} pickerIsMounted=false
         * @protected
         */
        pickerIsMounted: false,
        /**
         * The height of the picker container. Defaults to px.
         * @member {Number|null} pickerMaxHeight=200
         */
        pickerMaxHeight: 200,
        /**
         * The width of the picker container. Defaults to px.
         * @member {Number|null} pickerWidth=100
         */
        pickerWidth: 100,
        /**
         * @member {Object|Object[]} triggers=[]
         * @protected
         */
        triggers: [{
            module: _trigger_Picker_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]
        }]
    }}

    /**
     *
     * @returns {Neo.container.Base}
     */
    createPicker() {
        let me              = this,
            pickerComponent = me.createPickerComponent();

        return Neo.create(_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"], {
            appName  : me.appName,
            cls      : ['neo-picker-container', 'neo-container'],
            height   : me.pickerHeight,
            id       : me.getPickerId(),
            items    : pickerComponent ? [pickerComponent] : [],
            maxHeight: me.pickerMaxHeight,
            vdom     : {cn: [], tabIndex: -1},
            width    : me.pickerWidth,
            ...me.pickerConfig || {}
        });
    }

    /**
     *
     * @param {Boolean} silent
     */
    applyClientRects(silent) {
        let me          = this,
            bodyRect    = me.clientRects[2],
            inputRect   = me.clientRects[1],
            triggerRect = me.clientRects[0],
            vdom        = me.picker.vdom,
            width       = me.matchPickerWidth ? (inputRect.width - 1) : me.pickerWidth;

        me.pickerWidth = width;

        Object.assign(vdom.style, {
            left : `${triggerRect.left + triggerRect.width - width}px`,
            top  : `${triggerRect.top + triggerRect.height + 1}px`,
            width: `${width}px`
        });

        me.picker[silent ? '_vdom' : 'vdom'] = vdom;
    }

    /**
     *
     * @returns {null}
     */
    createPickerComponent() {
        return null;
    }

    /**
     *
     * @param {Function} [callback]
     * @param {Function} [callbackScope]
     */
    getClientRectsThenShow(callback, callbackScope) {
        let me = this;

        Neo.main.DomAccess.getBoundingClientRect({
            id: [me.id, me.id + '-input-wrapper', 'body']
        }).then(data => {
            me.clientRects = data;
            me.showPicker(callback, callbackScope);
        });
    }

    /**
     * Returns the picker instance and creates it in case it does not exist yet
     * @returns {Neo.container.Base}
     */
    getPicker() {
        let me = this;

        if (!me.picker) {
            me.picker = me.createPicker();
        }

        return me.picker;
    }

    /**
     *
     * @returns {String}
     */
    getPickerId() {
        return this.id + '__picker';
    }

    /**
     *
     * @param {Boolean} [silent=false]
     */
    hidePicker(silent=false) {
        let me     = this,
            picker = me.getPicker(),
            vdom   = me.vdom;

        if (me.pickerIsMounted) {
            _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].removeVdomChild(vdom, me.getPickerId());
        }

        me.pickerIsMounted = false;

        if (silent) {
            me._vdom = vdom;
            picker.mounted = false;
        } else {
            me.promiseVdomUpdate().then(data => {
                picker.mounted = me.pickerIsMounted;
            });
        }
    }

    /**
     *
     * @param {Array} data
     * @protected
     */
    onFocusLeave(data) {
        let me = this;

        // inline will trigger an vdom update, so hide picker should be silent
        if (me.labelPosition === 'inline' && (me.value === '' || me.value === null)) {
            me.hidePicker(true);
        } else {
            me.hidePicker();
        }

        super.onFocusLeave(data);
    }

    /**
     *
     * @param {Object} data
     * @param {Function} [callback]
     * @param {Function} [callbackScope]
     * @protected
     */
    onKeyDownEnter(data, callback, callbackScope) {
        if (!this.pickerIsMounted) {
            this.getClientRectsThenShow(callback, callbackScope);
        }
    }

    /**
     *
     * @param {Object} data
     * @protected
     */
    onKeyDownEscape(data) {
        if (this.pickerIsMounted) {
            this.hidePicker();
        }
    }

    /**
     * Called by form.field.trigger.Picker
     * @protected
     */
    onPickerTriggerClick() {
        let me = this;

        if (me.pickerIsMounted) {
            me.hidePicker();
        } else {
            me.getClientRectsThenShow();
        }
    }

    /**
     *
     * @param {Function} [callback]
     * @param {Function} [callbackScope]
     */
    showPicker(callback, callbackScope) {
        let me     = this,
            picker = me.getPicker(),
            vdom   = me.vdom;

        me.applyClientRects(true);
        vdom.cn.push(picker.vdom);

        me.pickerIsMounted = true;

        me.promiseVdomUpdate().then(data => {
            picker.mounted = me.pickerIsMounted;

            if (callback) {
                callback.apply(callbackScope || me);
            }
        });
    }
}

Neo.applyClassConfig(Picker);



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



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/trigger/Picker.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/trigger/Picker.mjs ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Picker; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/form/field/trigger/Base.mjs");


/**
 * Used by form.field.Picker
 * @class Neo.form.field.trigger.Picker
 * @extends Neo.form.field.trigger.Base
 */
class Picker extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.trigger.Picker'
         * @protected
         */
        className: 'Neo.form.field.trigger.Picker',
        /**
         * @member {String} ntype='trigger-picker'
         * @protected
         */
        ntype: 'trigger-picker',
        /**
         * @member {String|null} iconCls='fa fa-caret-down'
         */
        iconCls: 'fa fa-caret-down',
        /**
         * Internal flag used by field.getTrigger()
         * @member {String} type='picker'
         * @protected
         */
        type: 'picker'
    }}

    onTriggerClick(data) {
        this.field.onPickerTriggerClick();
    }
}

Neo.applyClassConfig(Picker);



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy90YWIvY29udGFpbmVyL01haW5Db250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL3RhYi9jb250YWluZXIvYXBwLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9DaGVja0JveC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2Zvcm0vZmllbGQvUGlja2VyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9SYWRpby5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2Zvcm0vZmllbGQvdHJpZ2dlci9QaWNrZXIubWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUU7QUFDTDtBQUNHO0FBQ0E7QUFDRDtBQUNEO0FBQ0Y7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtFQUFxQjtBQUNqRCx3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsa0VBQVc7QUFDbEM7QUFDQTtBQUNBLHdCQUF3QixrREFBa0Q7QUFDMUU7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHVCQUF1QixrRUFBVztBQUNsQztBQUNBLHdCQUF3Qiw2Q0FBNkM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCLGlFQUFLO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwyREFBMkQ7QUFDeEY7QUFDQSw2QkFBNkIsa0JBQWtCO0FBQy9DO0FBQ0EsU0FBUztBQUNULDRC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QVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCLGVBQWUsY0FBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCOztBQUU5QjtBQUNBO0FBQ0E7O0FBRUE7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QW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLXRhYi1jb250YWluZXItYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoZWNrQm94ICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvZm9ybS9maWVsZC9DaGVja0JveC5tanMnO1xuaW1wb3J0IENvbmZpZ3VyYXRpb25WaWV3cG9ydCBmcm9tICcuLi8uLi9Db25maWd1cmF0aW9uVmlld3BvcnQubWpzJztcbmltcG9ydCBOdW1iZXJGaWVsZCAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2Zvcm0vZmllbGQvTnVtYmVyLm1qcyc7XG5pbXBvcnQgUGlja2VyRmllbGQgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9mb3JtL2ZpZWxkL1BpY2tlci5tanMnO1xuaW1wb3J0IFJhZGlvICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvZm9ybS9maWVsZC9SYWRpby5tanMnO1xuaW1wb3J0IFRleHRGaWVsZCAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvZm9ybS9maWVsZC9UZXh0Lm1qcyc7XG5pbXBvcnQgVGFiQ29udGFpbmVyICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy90YWIvQ29udGFpbmVyLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFRlc3RBcHAuTWFpbkNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmV4YW1wbGVzLkNvbmZpZ3VyYXRpb25WaWV3cG9ydFxuICovXG5jbGFzcyBNYWluQ29udGFpbmVyIGV4dGVuZHMgQ29uZmlndXJhdGlvblZpZXdwb3J0IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogJ1Rlc3RBcHAuTWFpbkNvbnRhaW5lcicsXG4gICAgICAgIG50eXBlICAgIDogJ21haW4tY29udGFpbmVyJyxcblxuICAgICAgICBhdXRvTW91bnQgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgICAgY29uZmlnSXRlbUxhYmVsV2lkdGg6IDEzMCxcbiAgICAgICAgbGF5b3V0ICAgICAgICAgICAgICA6IHtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgIH19XG5cbiAgICBjcmVhdGVDb25maWd1cmF0aW9uQ29tcG9uZW50cygpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgIG1vZHVsZSAgIDogTnVtYmVyRmllbGQsXG4gICAgICAgICAgICBpZCAgICAgICA6ICdhY3RpdmVJbmRleEZpZWxkJyxcbiAgICAgICAgICAgIGxhYmVsVGV4dDogJ2FjdGl2ZUluZGV4JyxcbiAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ2FjdGl2ZUluZGV4Jyl9LFxuICAgICAgICAgICAgbWF4VmFsdWUgOiAyLFxuICAgICAgICAgICAgbWluVmFsdWUgOiAwLFxuICAgICAgICAgICAgdmFsdWUgICAgOiBtZS5leGFtcGxlQ29tcG9uZW50LmFjdGl2ZUluZGV4XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogTnVtYmVyRmllbGQsXG4gICAgICAgICAgICBsYWJlbFRleHQ6ICdoZWlnaHQnLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7Y2hhbmdlOiBtZS5vbkNvbmZpZ0NoYW5nZS5iaW5kKG1lLCAnaGVpZ2h0Jyl9LFxuICAgICAgICAgICAgbWF4VmFsdWUgOiA4MDAsXG4gICAgICAgICAgICBtaW5WYWx1ZSA6IDMwMCxcbiAgICAgICAgICAgIHN0ZXBTaXplIDogNSxcbiAgICAgICAgICAgIHZhbHVlICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5oZWlnaHRcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICA6IFJhZGlvLFxuICAgICAgICAgICAgY2hlY2tlZCAgICAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQudGFiQmFyUG9zaXRpb24gPT09ICd0b3AnLFxuICAgICAgICAgICAgaGlkZVZhbHVlTGFiZWw6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWxUZXh0ICAgICA6ICd0YWJCYXJQb3NpdGlvbicsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICAgIDoge2NoYW5nZTogbWUub25SYWRpb0NoYW5nZS5iaW5kKG1lLCAndGFiQmFyUG9zaXRpb24nLCAndG9wJyl9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgICA6ICd0YWJCYXJQb3NpdGlvbicsXG4gICAgICAgICAgICBzdHlsZSAgICAgICAgIDoge21hcmdpblRvcDogJzEwcHgnfSxcbiAgICAgICAgICAgIHZhbHVlTGFiZWxUZXh0OiAndG9wJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogUmFkaW8sXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC50YWJCYXJQb3NpdGlvbiA9PT0gJ3JpZ2h0JyxcbiAgICAgICAgICAgIGhpZGVWYWx1ZUxhYmVsOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsVGV4dCAgICAgOiAnJyxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgICAgOiB7Y2hhbmdlOiBtZS5vblJhZGlvQ2hhbmdlLmJpbmQobWUsICd0YWJCYXJQb3NpdGlvbicsICdyaWdodCcpfSxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICAgOiAndGFiQmFyUG9zaXRpb24nLFxuICAgICAgICAgICAgdmFsdWVMYWJlbFRleHQ6ICdyaWdodCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICA6IFJhZGlvLFxuICAgICAgICAgICAgY2hlY2tlZCAgICAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQudGFiQmFyUG9zaXRpb24gPT09ICdib3R0b20nLFxuICAgICAgICAgICAgaGlkZVZhbHVlTGFiZWw6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWxUZXh0ICAgICA6ICcnLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHtjaGFuZ2U6IG1lLm9uUmFkaW9DaGFuZ2UuYmluZChtZSwgJ3RhYkJhclBvc2l0aW9uJywgJ2JvdHRvbScpfSxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICAgOiAndGFiQmFyUG9zaXRpb24nLFxuICAgICAgICAgICAgdmFsdWVMYWJlbFRleHQ6ICdib3R0b20nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICAgOiBSYWRpbyxcbiAgICAgICAgICAgIGNoZWNrZWQgICAgICAgOiBtZS5leGFtcGxlQ29tcG9uZW50LnRhYkJhclBvc2l0aW9uID09PSAnbGVmdCcsXG4gICAgICAgICAgICBoaWRlVmFsdWVMYWJlbDogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgIDogJycsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICAgIDoge2NoYW5nZTogbWUub25SYWRpb0NoYW5nZS5iaW5kKG1lLCAndGFiQmFyUG9zaXRpb24nLCAnbGVmdCcpfSxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICAgOiAndGFiQmFyUG9zaXRpb24nLFxuICAgICAgICAgICAgdmFsdWVMYWJlbFRleHQ6ICdsZWZ0J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICA6IE51bWJlckZpZWxkLFxuICAgICAgICAgICAgbGFiZWxUZXh0OiAnd2lkdGgnLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7Y2hhbmdlOiBtZS5vbkNvbmZpZ0NoYW5nZS5iaW5kKG1lLCAnd2lkdGgnKX0sXG4gICAgICAgICAgICBtYXhWYWx1ZSA6IDgwMCxcbiAgICAgICAgICAgIG1pblZhbHVlIDogMjUwLFxuICAgICAgICAgICAgc3RlcFNpemUgOiA1LFxuICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luVG9wOiAnMTBweCd9LFxuICAgICAgICAgICAgdmFsdWUgICAgOiBtZS5leGFtcGxlQ29tcG9uZW50LndpZHRoXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICAgOiBDaGVja0JveCxcbiAgICAgICAgICAgIGNoZWNrZWQgICAgICAgOiBtZS5leGFtcGxlQ29tcG9uZW50LnVzZUFjdGl2ZVRhYkluZGljYXRvcixcbiAgICAgICAgICAgIGhpZGVMYWJlbCAgICAgOiB0cnVlLFxuICAgICAgICAgICAgaGlkZVZhbHVlTGFiZWw6IGZhbHNlLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHtjaGFuZ2U6IG1lLm9uQ29uZmlnQ2hhbmdlLmJpbmQobWUsICd1c2VBY3RpdmVUYWJJbmRpY2F0b3InKX0sXG4gICAgICAgICAgICBuYW1lICAgICAgICAgIDogJ3RhYkJhclBvc2l0aW9uJyxcbiAgICAgICAgICAgIHN0eWxlICAgICAgICAgOiB7bWFyZ2luVG9wOiAnMjBweCd9LFxuICAgICAgICAgICAgdmFsdWVMYWJlbFRleHQ6ICd1c2VBY3RpdmVUYWJJbmRpY2F0b3InXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogUGlja2VyRmllbGQsIC8vIHRvZG86IFNlbGVjdEZpZWxkXG4gICAgICAgICAgICBsYWJlbFRleHQ6ICdUYWIgMSBpY29uQ2xzJyxcbiAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogbWUub25GaXJzdFRhYkhlYWRlckNvbmZpZ0NoYW5nZS5iaW5kKG1lLCAnaWNvbkNscycpfSxcbiAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpblRvcDogJzUwcHgnfSxcbiAgICAgICAgICAgIHZhbHVlICAgIDogbWUuZ2V0Rmlyc3RUYWJIZWFkZXIoKS5pY29uQ2xzXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogVGV4dEZpZWxkLCAvLyB0b2RvOiBDb2xvclBpY2tlclxuICAgICAgICAgICAgbGFiZWxUZXh0OiAnVGFiIDEgaWNvbkNvbG9yJyxcbiAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogbWUub25GaXJzdFRhYkhlYWRlckNvbmZpZ0NoYW5nZS5iaW5kKG1lLCAnaWNvbkNvbG9yJyl9LFxuICAgICAgICAgICAgdmFsdWUgICAgOiBtZS5nZXRGaXJzdFRhYkhlYWRlcigpLmljb25Db2xvclxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICA6IFRleHRGaWVsZCxcbiAgICAgICAgICAgIGxhYmVsVGV4dDogJ1RhYiAxIHRleHQnLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7Y2hhbmdlOiBtZS5vbkZpcnN0VGFiSGVhZGVyQ29uZmlnQ2hhbmdlLmJpbmQobWUsICd0ZXh0Jyl9LFxuICAgICAgICAgICAgdmFsdWUgICAgOiBtZS5nZXRGaXJzdFRhYkhlYWRlcigpLnRleHRcbiAgICAgICAgfV07XG4gICAgfVxuXG4gICAgY3JlYXRlRXhhbXBsZUNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIE5lby5jcmVhdGUoVGFiQ29udGFpbmVyLCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwMCxcbiAgICAgICAgICAgIHdpZHRoIDogNTAwLFxuICAgICAgICAgICAgc3R5bGUgOiB7bWFyZ2luOiAnMjBweCd9LFxuXG4gICAgICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgICAgICBudHlwZTogJ2NvbXBvbmVudCcsXG4gICAgICAgICAgICAgICAgY2xzICA6IFsnbmVvLWV4YW1wbGVzLXRhYi1jb21wb25lbnQnXSxcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMjBweCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtpY29uQ2xzOiAnZmEgZmEtaG9tZScsICAgICAgICB0ZXh0ICAgICA6ICdUYWIgMSd9LFxuICAgICAgICAgICAgICAgIHZkb20gICAgICAgICAgIDoge2lubmVySFRNTDogJ1RhYiAxIENvbnRlbnQnfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge2ljb25DbHM6ICdmYSBmYS1wbGF5LWNpcmNsZScsIHRleHQgICAgIDogJ1RhYiAyJ30sXG4gICAgICAgICAgICAgICAgdmRvbSAgICAgICAgICAgOiB7aW5uZXJIVE1MOiAnVGFiIDIgQ29udGVudCd9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7aWNvbkNsczogJ2ZhIGZhLXVzZXInLCAgICAgICAgdGV4dCAgICAgOiAnVGFiIDMnfSxcbiAgICAgICAgICAgICAgICB2ZG9tICAgICAgICAgICA6IHtpbm5lckhUTUw6ICdUYWIgMyBDb250ZW50J31cbiAgICAgICAgICAgIH1dLFxuXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICBhY3RpdmVJbmRleENoYW5nZTogdGhpcy5vblVzZXJBY3RpdmVJbmRleENoYW5nZSxcbiAgICAgICAgICAgICAgICBzY29wZSAgICAgICAgICAgIDogdGhpc1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWdcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqL1xuICAgIG9uRmlyc3RUYWJIZWFkZXJDb25maWdDaGFuZ2UoY29uZmlnLCBvcHRzKSB7XG4gICAgICAgIHRoaXMuZXhhbXBsZUNvbXBvbmVudC5nZXRUYWJCYXIoKS5pdGVtc1swXVtjb25maWddID0gb3B0cy52YWx1ZTs7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7TmVvLnRhYi5oZWFkZXIuQnV0dG9ufVxuICAgICAqL1xuICAgIGdldEZpcnN0VGFiSGVhZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leGFtcGxlQ29tcG9uZW50LmdldFRhYkJhcigpLml0ZW1zWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKi9cbiAgICBvblVzZXJBY3RpdmVJbmRleENoYW5nZShvcHRzKSB7XG4gICAgICAgIE5lby5nZXRDb21wb25lbnQoJ2FjdGl2ZUluZGV4RmllbGQnKS52YWx1ZSA9IG9wdHMudmFsdWU7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyKTtcblxuZXhwb3J0IHtNYWluQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gJy4vTWFpbkNvbnRhaW5lci5tanMnO1xuXG5jb25zdCBvblN0YXJ0ID0gKCkgPT4gTmVvLmFwcCh7XG4gICAgYXBwUGF0aCA6ICdleGFtcGxlcy90YWIvY29udGFpbmVyLycsXG4gICAgbWFpblZpZXc6IE1haW5Db250YWluZXIsXG4gICAgbmFtZSAgICA6ICdUZXN0QXBwJ1xufSk7XG5cbmV4cG9ydCB7b25TdGFydCBhcyBvblN0YXJ0fTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmZvcm0uZmllbGQuQ2hlY2tCb3hcbiAqIEBleHRlbmRzIE5lby5mb3JtLmZpZWxkLkJhc2VcbiAqL1xuY2xhc3MgQ2hlY2tCb3ggZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmZvcm0uZmllbGQuQ2hlY2tCb3gnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5mb3JtLmZpZWxkLkNoZWNrQm94JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NoZWNrYm94ZmllbGQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY2hlY2tib3hmaWVsZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBjaGVja2VkXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgY2hlY2tlZF86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGNscz1bJ25lby1jaGVja2JveGZpZWxkJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tY2hlY2tib3hmaWVsZCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaGlkZUxhYmVsXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgaGlkZUxhYmVsXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBoaWRlVmFsdWVMYWJlbF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGhpZGVWYWx1ZUxhYmVsXzogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gaW5wdXRUeXBlXz0nY2hlY2tib3gnXG4gICAgICAgICAqL1xuICAgICAgICBpbnB1dFR5cGVfOiAnY2hlY2tib3gnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBsYWJlbFRleHRfPSdMYWJlbFRleHQnXG4gICAgICAgICAqL1xuICAgICAgICBsYWJlbFRleHRfOiAnTGFiZWxUZXh0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGRlZmF1bHRzIHRvIHB4XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxTdHJpbmd9IGxhYmVsV2lkdGhfPTE1MFxuICAgICAgICAgKi9cbiAgICAgICAgbGFiZWxXaWR0aF86IDE1MCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gVGhlIG5hbWUgKGdyb3VwKSBvZiB0aGUgaW5wdXQgZG9tIG5vZGVcbiAgICAgICAgICovXG4gICAgICAgIG5hbWVfOiAnJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gdmFsdWVMYWJlbFRleHRfPSdWYWx1ZUxhYmVsJ1xuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWVMYWJlbFRleHRfOiAnVmFsdWVMYWJlbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbToge1xuICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgdGFnOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIGNsczogWyduZW8tY2hlY2tib3gtbGFiZWwnXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRhZzogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWNoZWNrYm94LWlucHV0J11cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0YWc6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby1jaGVja2JveC12YWx1ZS1sYWJlbCddXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gTmVvLmNsb25lKG1lLmRvbUxpc3RlbmVycywgdHJ1ZSksXG4gICAgICAgICAgICB2ZG9tICAgICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgaW5wdXRFbCAgICAgID0gdmRvbS5jblsxXSxcbiAgICAgICAgICAgIHZhbHVlTGFiZWwgICA9IHZkb20uY25bMl07XG5cbiAgICAgICAgaW5wdXRFbC5pZCA9IHZhbHVlTGFiZWwuZm9yID0gbWUuaWQgKyAnLWlucHV0JztcbiAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgY2hhbmdlOiB7XG4gICAgICAgICAgICAgICAgZm4gICA6IG1lLm9uSW5wdXRWYWx1ZUNoYW5nZSxcbiAgICAgICAgICAgICAgICBzY29wZTogbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuZG9tTGlzdGVuZXJzID0gZG9tTGlzdGVuZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRDaGVja2VkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICB2ZG9tLmNuWzFdLmNoZWNrZWQgPSB2YWx1ZTtcbiAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IG1lLFxuICAgICAgICAgICAgICAgIG9sZFZhbHVlIDogb2xkVmFsdWUsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiB2YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGhpZGVMYWJlbCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRIaWRlTGFiZWwodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMF0ucmVtb3ZlRG9tID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBoaWRlTGFiZWxWYWx1ZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRIaWRlVmFsdWVMYWJlbCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgdmRvbS5jblsyXS5yZW1vdmVEb20gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGlucHV0VHlwZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRJbnB1dFR5cGUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMV0udHlwZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbGFiZWxUZXh0IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldExhYmVsVGV4dCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgdmRvbS5jblswXS5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGxhYmVsV2lkdGggY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRMYWJlbFdpZHRoKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICBpZiAoIW1lLmhpZGVMYWJlbCkge1xuICAgICAgICAgICAgdmRvbS5jblswXS53aWR0aCA9IHZhbHVlO1xuICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG5hbWUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TmFtZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgdmRvbS5jblsxXS5uYW1lID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB2YWx1ZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICAgICAgdmRvbS5jblsxXS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLmFmdGVyU2V0VmFsdWUodmFsdWUsIG9sZFZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHZhbHVlTGFiZWwgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VmFsdWVMYWJlbFRleHQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgIGlmICghbWUuaGlkZVZhbHVlTGFiZWwpIHtcbiAgICAgICAgICAgIHZkb20uY25bMl0uaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdHJpZ2dlcmVkIHdoZW4gYSB1c2VyIGNoZWNrcyBhIGNoZWNrYm94IGlucHV0LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25JbnB1dFZhbHVlQ2hhbmdlKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY2hlY2tlZCA9IGRhdGEudGFyZ2V0LmNoZWNrZWQ7XG5cbiAgICAgICAgbWUuX2NoZWNrZWQgPSBjaGVja2VkOyAvLyBzaWxlbnQgdXBkYXRlXG5cbiAgICAgICAgLy8ga2VlcCB0aGUgdmRvbSAmIHZub2RlIGluIHN5bmMgZm9yIGZ1dHVyZSB1cGRhdGVzXG4gICAgICAgIG1lLnZkb20uY25bMV0uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgICAgIG1lLnZub2RlLmNoaWxkTm9kZXNbbWUuaGlkZUxhYmVsID8gMCA6IDFdLmF0dHJpYnV0ZXMuY2hlY2tlZCA9IGNoZWNrZWQgKyAnJztcblxuICAgICAgICBtZS5maXJlKCdjaGFuZ2UnLCB7XG4gICAgICAgICAgICBjb21wb25lbnQ6IG1lLFxuICAgICAgICAgICAgb2xkVmFsdWUgOiAhY2hlY2tlZCxcbiAgICAgICAgICAgIHZhbHVlICAgIDogY2hlY2tlZFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENoZWNrQm94KTtcblxuZXhwb3J0IHtDaGVja0JveCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29udGFpbmVyICAgICBmcm9tICcuLi8uLi9jb250YWluZXIvQmFzZS5tanMnO1xuaW1wb3J0IFBpY2tlclRyaWdnZXIgZnJvbSAnLi90cmlnZ2VyL1BpY2tlci5tanMnO1xuaW1wb3J0IFRleHQgICAgICAgICAgZnJvbSAnLi9UZXh0Lm1qcyc7XG5pbXBvcnQgVkRvbVV0aWwgICAgICBmcm9tICcuLi8uLi91dGlsL1ZEb20ubWpzJztcblxuLyoqXG4gKiBUaGUgYWJzdHJhY3QgcGlja2VyIGZpZWxkIHByb3ZpZGVzIGFuIGFycm93IGRvd24gdHJpZ2dlciB3aGljaCBvcGVucyBhIGZsb2F0aW5nIGNvbnRhaW5lciB0byBwcm92aWRlXG4gKiBtb3JlIGRhdGEgc2VsZWN0aW9uIG9wdGlvbnNcbiAqIEBjbGFzcyBOZW8uZm9ybS5maWVsZC5QaWNrZXJcbiAqIEBleHRlbmRzIE5lby5mb3JtLmZpZWxkLlRleHRcbiAqIEBhYnN0cmFjdFxuICovXG5jbGFzcyBQaWNrZXIgZXh0ZW5kcyBUZXh0IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmZvcm0uZmllbGQuUGlja2VyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uZm9ybS5maWVsZC5QaWNrZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ncGlja2VyZmllbGQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAncGlja2VyZmllbGQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogU3RvcmVzIHRoZSBkYXRhIGZyb20gdGhlIGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGNhbGwgKHBpY2tlciAmIGJvZHkgRG9tUmVjdHMpXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBjbGllbnRSZWN0cz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsaWVudFJlY3RzOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1waWNrZXJmaWVsZCcsICduZW8tdGV4dGZpZWxkJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tcGlja2VyZmllbGQnLCAnbmVvLXRleHRmaWVsZCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkaXRpb25hbCB1c2VkIGtleXMgZm9yIHRoZSBzZWxlY3Rpb24gbW9kZWxcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBrZXlzXG4gICAgICAgICAqL1xuICAgICAgICBrZXlzOiB7XG4gICAgICAgICAgICAnRW50ZXInIDogJ29uS2V5RG93bkVudGVyJyxcbiAgICAgICAgICAgICdFc2NhcGUnOiAnb25LZXlEb3duRXNjYXBlJ1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbWF0Y2hQaWNrZXJXaWR0aD10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBtYXRjaFBpY2tlcldpZHRoOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IHBpY2tlcj1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHBpY2tlcjogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbmZpZ3MgdG8gcGFzcyB0byB0aGUgcGlja2VyIGNvbnRhaW5lclxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gcGlja2VyQ29uZmlnPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHBpY2tlckNvbmZpZzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIHBpY2tlciBjb250YWluZXIuIERlZmF1bHRzIHRvIHB4LlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8bnVsbH0gcGlja2VySGVpZ2h0PTEwMFxuICAgICAgICAgKi9cbiAgICAgICAgcGlja2VySGVpZ2h0OiAxMDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBwaWNrZXJJc01vdW50ZWQ9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgcGlja2VySXNNb3VudGVkOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIHBpY2tlciBjb250YWluZXIuIERlZmF1bHRzIHRvIHB4LlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8bnVsbH0gcGlja2VyTWF4SGVpZ2h0PTIwMFxuICAgICAgICAgKi9cbiAgICAgICAgcGlja2VyTWF4SGVpZ2h0OiAyMDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgd2lkdGggb2YgdGhlIHBpY2tlciBjb250YWluZXIuIERlZmF1bHRzIHRvIHB4LlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8bnVsbH0gcGlja2VyV2lkdGg9MTAwXG4gICAgICAgICAqL1xuICAgICAgICBwaWNrZXJXaWR0aDogMTAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fE9iamVjdFtdfSB0cmlnZ2Vycz1bXVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB0cmlnZ2VyczogW3tcbiAgICAgICAgICAgIG1vZHVsZTogUGlja2VyVHJpZ2dlclxuICAgICAgICB9XVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtOZW8uY29udGFpbmVyLkJhc2V9XG4gICAgICovXG4gICAgY3JlYXRlUGlja2VyKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHBpY2tlckNvbXBvbmVudCA9IG1lLmNyZWF0ZVBpY2tlckNvbXBvbmVudCgpO1xuXG4gICAgICAgIHJldHVybiBOZW8uY3JlYXRlKENvbnRhaW5lciwge1xuICAgICAgICAgICAgYXBwTmFtZSAgOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgY2xzICAgICAgOiBbJ25lby1waWNrZXItY29udGFpbmVyJywgJ25lby1jb250YWluZXInXSxcbiAgICAgICAgICAgIGhlaWdodCAgIDogbWUucGlja2VySGVpZ2h0LFxuICAgICAgICAgICAgaWQgICAgICAgOiBtZS5nZXRQaWNrZXJJZCgpLFxuICAgICAgICAgICAgaXRlbXMgICAgOiBwaWNrZXJDb21wb25lbnQgPyBbcGlja2VyQ29tcG9uZW50XSA6IFtdLFxuICAgICAgICAgICAgbWF4SGVpZ2h0OiBtZS5waWNrZXJNYXhIZWlnaHQsXG4gICAgICAgICAgICB2ZG9tICAgICA6IHtjbjogW10sIHRhYkluZGV4OiAtMX0sXG4gICAgICAgICAgICB3aWR0aCAgICA6IG1lLnBpY2tlcldpZHRoLFxuICAgICAgICAgICAgLi4ubWUucGlja2VyQ29uZmlnIHx8IHt9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBzaWxlbnRcbiAgICAgKi9cbiAgICBhcHBseUNsaWVudFJlY3RzKHNpbGVudCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYm9keVJlY3QgICAgPSBtZS5jbGllbnRSZWN0c1syXSxcbiAgICAgICAgICAgIGlucHV0UmVjdCAgID0gbWUuY2xpZW50UmVjdHNbMV0sXG4gICAgICAgICAgICB0cmlnZ2VyUmVjdCA9IG1lLmNsaWVudFJlY3RzWzBdLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgPSBtZS5waWNrZXIudmRvbSxcbiAgICAgICAgICAgIHdpZHRoICAgICAgID0gbWUubWF0Y2hQaWNrZXJXaWR0aCA/IChpbnB1dFJlY3Qud2lkdGggLSAxKSA6IG1lLnBpY2tlcldpZHRoO1xuXG4gICAgICAgIG1lLnBpY2tlcldpZHRoID0gd2lkdGg7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbih2ZG9tLnN0eWxlLCB7XG4gICAgICAgICAgICBsZWZ0IDogYCR7dHJpZ2dlclJlY3QubGVmdCArIHRyaWdnZXJSZWN0LndpZHRoIC0gd2lkdGh9cHhgLFxuICAgICAgICAgICAgdG9wICA6IGAke3RyaWdnZXJSZWN0LnRvcCArIHRyaWdnZXJSZWN0LmhlaWdodCArIDF9cHhgLFxuICAgICAgICAgICAgd2lkdGg6IGAke3dpZHRofXB4YFxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5waWNrZXJbc2lsZW50ID8gJ192ZG9tJyA6ICd2ZG9tJ10gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge251bGx9XG4gICAgICovXG4gICAgY3JlYXRlUGlja2VyQ29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja11cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tTY29wZV1cbiAgICAgKi9cbiAgICBnZXRDbGllbnRSZWN0c1RoZW5TaG93KGNhbGxiYWNrLCBjYWxsYmFja1Njb3BlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCh7XG4gICAgICAgICAgICBpZDogW21lLmlkLCBtZS5pZCArICctaW5wdXQtd3JhcHBlcicsICdib2R5J11cbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIG1lLmNsaWVudFJlY3RzID0gZGF0YTtcbiAgICAgICAgICAgIG1lLnNob3dQaWNrZXIoY2FsbGJhY2ssIGNhbGxiYWNrU2NvcGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwaWNrZXIgaW5zdGFuY2UgYW5kIGNyZWF0ZXMgaXQgaW4gY2FzZSBpdCBkb2VzIG5vdCBleGlzdCB5ZXRcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbnRhaW5lci5CYXNlfVxuICAgICAqL1xuICAgIGdldFBpY2tlcigpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAoIW1lLnBpY2tlcikge1xuICAgICAgICAgICAgbWUucGlja2VyID0gbWUuY3JlYXRlUGlja2VyKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWUucGlja2VyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRQaWNrZXJJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQgKyAnX19waWNrZXInO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbc2lsZW50PWZhbHNlXVxuICAgICAqL1xuICAgIGhpZGVQaWNrZXIoc2lsZW50PWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgcGlja2VyID0gbWUuZ2V0UGlja2VyKCksXG4gICAgICAgICAgICB2ZG9tICAgPSBtZS52ZG9tO1xuXG4gICAgICAgIGlmIChtZS5waWNrZXJJc01vdW50ZWQpIHtcbiAgICAgICAgICAgIFZEb21VdGlsLnJlbW92ZVZkb21DaGlsZCh2ZG9tLCBtZS5nZXRQaWNrZXJJZCgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnBpY2tlcklzTW91bnRlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzaWxlbnQpIHtcbiAgICAgICAgICAgIG1lLl92ZG9tID0gdmRvbTtcbiAgICAgICAgICAgIHBpY2tlci5tb3VudGVkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5wcm9taXNlVmRvbVVwZGF0ZSgpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgcGlja2VyLm1vdW50ZWQgPSBtZS5waWNrZXJJc01vdW50ZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gZGF0YVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbkZvY3VzTGVhdmUoZGF0YSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIC8vIGlubGluZSB3aWxsIHRyaWdnZXIgYW4gdmRvbSB1cGRhdGUsIHNvIGhpZGUgcGlja2VyIHNob3VsZCBiZSBzaWxlbnRcbiAgICAgICAgaWYgKG1lLmxhYmVsUG9zaXRpb24gPT09ICdpbmxpbmUnICYmIChtZS52YWx1ZSA9PT0gJycgfHwgbWUudmFsdWUgPT09IG51bGwpKSB7XG4gICAgICAgICAgICBtZS5oaWRlUGlja2VyKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUuaGlkZVBpY2tlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIub25Gb2N1c0xlYXZlKGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrU2NvcGVdXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uS2V5RG93bkVudGVyKGRhdGEsIGNhbGxiYWNrLCBjYWxsYmFja1Njb3BlKSB7XG4gICAgICAgIGlmICghdGhpcy5waWNrZXJJc01vdW50ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q2xpZW50UmVjdHNUaGVuU2hvdyhjYWxsYmFjaywgY2FsbGJhY2tTY29wZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uS2V5RG93bkVzY2FwZShkYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLnBpY2tlcklzTW91bnRlZCkge1xuICAgICAgICAgICAgdGhpcy5oaWRlUGlja2VyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgYnkgZm9ybS5maWVsZC50cmlnZ2VyLlBpY2tlclxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvblBpY2tlclRyaWdnZXJDbGljaygpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUucGlja2VySXNNb3VudGVkKSB7XG4gICAgICAgICAgICBtZS5oaWRlUGlja2VyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5nZXRDbGllbnRSZWN0c1RoZW5TaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja11cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tTY29wZV1cbiAgICAgKi9cbiAgICBzaG93UGlja2VyKGNhbGxiYWNrLCBjYWxsYmFja1Njb3BlKSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgcGlja2VyID0gbWUuZ2V0UGlja2VyKCksXG4gICAgICAgICAgICB2ZG9tICAgPSBtZS52ZG9tO1xuXG4gICAgICAgIG1lLmFwcGx5Q2xpZW50UmVjdHModHJ1ZSk7XG4gICAgICAgIHZkb20uY24ucHVzaChwaWNrZXIudmRvbSk7XG5cbiAgICAgICAgbWUucGlja2VySXNNb3VudGVkID0gdHJ1ZTtcblxuICAgICAgICBtZS5wcm9taXNlVmRvbVVwZGF0ZSgpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBwaWNrZXIubW91bnRlZCA9IG1lLnBpY2tlcklzTW91bnRlZDtcblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkoY2FsbGJhY2tTY29wZSB8fCBtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoUGlja2VyKTtcblxuZXhwb3J0IHtQaWNrZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENoZWNrQm94ICAgICAgICAgZnJvbSAnLi9DaGVja0JveC5tanMnO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSAnLi4vLi4vbWFuYWdlci9Db21wb25lbnQubWpzJ1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uZm9ybS5maWVsZC5SYWRpb1xuICogQGV4dGVuZHMgTmVvLmZvcm0uZmllbGQuQ2hlY2tCb3hcbiAqL1xuY2xhc3MgUmFkaW8gZXh0ZW5kcyBDaGVja0JveCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5mb3JtLmZpZWxkLlJhZGlvJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uZm9ybS5maWVsZC5SYWRpbycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdyYWRpb2ZpZWxkJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3JhZGlvZmllbGQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGNscz1bJ25lby1yYWRpb2ZpZWxkJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tcmFkaW9maWVsZCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBpbnB1dFR5cGU9J3JhZGlvJ1xuICAgICAgICAgKi9cbiAgICAgICAgaW5wdXRUeXBlOiAncmFkaW8nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIHRhZzogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLXJhZGlvLWxhYmVsJ11cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0YWc6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby1yYWRpby1pbnB1dCddXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGFnOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIGNsczogWyduZW8tcmFkaW8tdmFsdWUtbGFiZWwnXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGNoZWNrZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRDaGVja2VkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBzdXBlci5hZnRlclNldENoZWNrZWQodmFsdWUsIG9sZFZhbHVlKTtcblxuICAgICAgICAvLyB1cGRhdGUgcmFkaW9zIHdpdGggdGhlIHNhbWUgbmFtZSB0byBiZSB1bmNoZWNrZWRcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnVuY2hlY2tHcm91cEl0ZW1zKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRyaWdnZXJlZCB3aGVuIGEgdXNlciBjaGVja3MgYSByYWRpbyBpbnB1dC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uSW5wdXRWYWx1ZUNoYW5nZShkYXRhKSB7XG4gICAgICAgIHN1cGVyLm9uSW5wdXRWYWx1ZUNoYW5nZShkYXRhKTtcbiAgICAgICAgdGhpcy51bmNoZWNrR3JvdXBJdGVtcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJhZGlvcyBkbyBub3QgZmlyZSBhIGNoYW5nZSBldmVudCBmb3IgXCJ1bmNoZWNrXCIsIHNvIHdlIG5lZWQgdG8gaXRlcmF0ZSBvdmVyIG90aGVyIHJhZGlvcyB3aXRoIHRoZSBzYW1lIG5hbWUuXG4gICAgICovXG4gICAgdW5jaGVja0dyb3VwSXRlbXMoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICByYWRpb3M7XG5cbiAgICAgICAgLy8gZGlzY3Vzczogd2UgY291bGQgbGltaXQgdGhpcyB0byByYWRpb3MgaW5zaWRlIHRoZSBzYW1lIGZvcm0sIElGIGEgdG9wIGxldmVsIGZvcm0gaXMgdXNlZFxuICAgICAgICByYWRpb3MgPSBDb21wb25lbnRNYW5hZ2VyLmZpbmQoe1xuICAgICAgICAgICAgbnR5cGU6ICdyYWRpb2ZpZWxkJyxcbiAgICAgICAgICAgIG5hbWUgOiBtZS5uYW1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJhZGlvcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uaWQgIT09IG1lLmlkICYmIGl0ZW0uX2NoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBpdGVtLl9jaGVja2VkID0gZmFsc2U7IC8vIHNpbGVudCB1cGRhdGVcblxuICAgICAgICAgICAgICAgIC8vIGtlZXAgdGhlIHZkb20gJiB2bm9kZSBpbiBzeW5jIGZvciBmdXR1cmUgdXBkYXRlc1xuICAgICAgICAgICAgICAgIGl0ZW0udmRvbS5jblsxXS5jaGVja2VkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbS52bm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnZub2RlLmNoaWxkTm9kZXNbbWUuaGlkZUxhYmVsID8gMCA6IDFdLmF0dHJpYnV0ZXMuY2hlY2tlZCA9ICdmYWxzZSc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaXRlbS5maXJlKCdjaGFuZ2UnLCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogbWUsXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgICAgOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFJhZGlvKTtcblxuZXhwb3J0IHtSYWRpbyBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBVc2VkIGJ5IGZvcm0uZmllbGQuUGlja2VyXG4gKiBAY2xhc3MgTmVvLmZvcm0uZmllbGQudHJpZ2dlci5QaWNrZXJcbiAqIEBleHRlbmRzIE5lby5mb3JtLmZpZWxkLnRyaWdnZXIuQmFzZVxuICovXG5jbGFzcyBQaWNrZXIgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmZvcm0uZmllbGQudHJpZ2dlci5QaWNrZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5mb3JtLmZpZWxkLnRyaWdnZXIuUGlja2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3RyaWdnZXItcGlja2VyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3RyaWdnZXItcGlja2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBpY29uQ2xzPSdmYSBmYS1jYXJldC1kb3duJ1xuICAgICAgICAgKi9cbiAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWNhcmV0LWRvd24nLFxuICAgICAgICAvKipcbiAgICAgICAgICogSW50ZXJuYWwgZmxhZyB1c2VkIGJ5IGZpZWxkLmdldFRyaWdnZXIoKVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHR5cGU9J3BpY2tlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgdHlwZTogJ3BpY2tlcidcbiAgICB9fVxuXG4gICAgb25UcmlnZ2VyQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmZpZWxkLm9uUGlja2VyVHJpZ2dlckNsaWNrKCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhQaWNrZXIpO1xuXG5leHBvcnQge1BpY2tlciBhcyBkZWZhdWx0fTsiXSwic291cmNlUm9vdCI6IiJ9