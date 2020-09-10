self["webpackChunk"](["vendors~chunks/examples-form-field-date-app"],{

/***/ "./node_modules/neo.mjs/examples/form/field/date/MainContainer.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/form/field/date/MainContainer.mjs ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/form/field/CheckBox.mjs */ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs");
/* harmony import */ var _ConfigurationViewport_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ConfigurationViewport.mjs */ "./node_modules/neo.mjs/examples/ConfigurationViewport.mjs");
/* harmony import */ var _src_form_field_Date_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/form/field/Date.mjs */ "./node_modules/neo.mjs/src/form/field/Date.mjs");
/* harmony import */ var _src_util_Date_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/util/Date.mjs */ "./node_modules/neo.mjs/src/util/Date.mjs");
/* harmony import */ var _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/form/field/Number.mjs */ "./node_modules/neo.mjs/src/form/field/Number.mjs");
/* harmony import */ var _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/form/field/Radio.mjs */ "./node_modules/neo.mjs/src/form/field/Radio.mjs");
/* harmony import */ var _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../src/form/field/Text.mjs */ "./node_modules/neo.mjs/src/form/field/Text.mjs");








/**
 * @class TestApp.MainContainer
 * @extends Neo.examples.ConfigurationViewport
 */
class MainContainer extends _ConfigurationViewport_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        className: 'TestApp.MainContainer',
        ntype    : 'main-container',

        autoMount           : true,
        configItemLabelWidth: 160,
        layout              : {ntype: 'hbox', align: 'stretch'}
    }}

    createConfigurationComponents() {
        let me = this;

        return [{
            module   : _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            checked  : me.exampleComponent.clearable,
            labelText: 'clearable',
            listeners: {change: me.onConfigChange.bind(me, 'clearable')}
        }, {
            module   : _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            checked  : me.exampleComponent.clearToOriginalValue,
            labelText: 'clearToOriginalValue',
            listeners: {change: me.onConfigChange.bind(me, 'clearToOriginalValue')},
            style    : {marginTop: '10px'}
        }, {
            module   : _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            checked  : me.exampleComponent.hideLabel,
            labelText: 'hideLabel',
            listeners: {change: me.onConfigChange.bind(me, 'hideLabel')},
            style    : {marginTop: '10px'}
        }, {
            module   : _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            checked  : me.exampleComponent.hidePickerOnSelect,
            labelText: 'hidePickerOnSelect',
            listeners: {change: me.onConfigChange.bind(me, 'hidePickerOnSelect')},
            style    : {marginTop: '10px'}
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
            checked       : me.exampleComponent.labelPosition === 'top',
            hideValueLabel: false,
            labelText     : 'labelPosition',
            listeners     : {change: me.onRadioChange.bind(me, 'labelPosition', 'top')},
            name          : 'labelPosition',
            style         : {marginTop: '10px'},
            valueLabelText: 'top'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
            checked       : me.exampleComponent.labelPosition === 'right',
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onRadioChange.bind(me, 'labelPosition', 'right')},
            name          : 'labelPosition',
            valueLabelText: 'right'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
            checked       : me.exampleComponent.labelPosition === 'bottom',
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onRadioChange.bind(me, 'labelPosition', 'bottom')},
            name          : 'labelPosition',
            valueLabelText: 'bottom'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
            checked       : me.exampleComponent.labelPosition === 'left',
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onRadioChange.bind(me, 'labelPosition', 'left')},
            name          : 'labelPosition',
            valueLabelText: 'left'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
            checked       : me.exampleComponent.labelPosition === 'inline',
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onRadioChange.bind(me, 'labelPosition', 'inline')},
            name          : 'labelPosition',
            valueLabelText: 'inline'
        }, {
            module   : _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_6__["default"],
            labelText: 'labelText',
            style    : {marginTop: '10px'},
            listeners: {change: me.onConfigChange.bind(me, 'labelText')},
            value    : me.exampleComponent.labelText
        }, {
            module   : _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            labelText: 'labelWidth',
            listeners: {change: me.onConfigChange.bind(me, 'labelWidth')},
            maxValue : 200,
            minValue : 50,
            stepSize : 5,
            value    : me.exampleComponent.labelWidth
        }, {
            module   : _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_6__["default"],
            labelText: 'placeholderText',
            listeners: {change: me.onConfigChange.bind(me, 'placeholderText')},
            value    : me.exampleComponent.placeholderText
        }, {
            module   : _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            labelText: 'width',
            listeners: {change: me.onConfigChange.bind(me, 'width')},
            maxValue : 300,
            minValue : 50,
            stepSize : 5,
            value    : me.exampleComponent.width
        }];
    }

    createExampleComponent() {
        return Neo.create(_src_form_field_Date_mjs__WEBPACK_IMPORTED_MODULE_2__["default"], {
            clearToOriginalValue: true,
            labelText           : 'Label',
            labelWidth          : 70,
            value               : _src_util_Date_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].convertToyyyymmdd(new Date()),
            width               : 250
        });
    }
}

Neo.applyClassConfig(MainContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/form/field/date/app.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/form/field/date/app.mjs ***!
  \***************************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainContainer.mjs */ "./node_modules/neo.mjs/examples/form/field/date/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'examples/form/field/date/',
    mainView: _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'TestApp'
});



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/Date.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/Date.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateField; });
/* harmony import */ var _component_DateSelector_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/DateSelector.mjs */ "./node_modules/neo.mjs/src/component/DateSelector.mjs");
/* harmony import */ var _trigger_Date_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trigger/Date.mjs */ "./node_modules/neo.mjs/src/form/field/trigger/Date.mjs");
/* harmony import */ var _util_Date_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/Date.mjs */ "./node_modules/neo.mjs/src/util/Date.mjs");
/* harmony import */ var _Picker_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Picker.mjs */ "./node_modules/neo.mjs/src/form/field/Picker.mjs");
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");






/**
 * @class Neo.form.field.Date
 * @extends Neo.form.field.Picker
 */
class DateField extends _Picker_mjs__WEBPACK_IMPORTED_MODULE_3__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.Date'
         * @protected
         */
        className: 'Neo.form.field.Date',
        /**
         * @member {String} ntype='datefield'
         * @protected
         */
        ntype: 'datefield',
        /**
         * @member {String[]} cls=['neo-datefield', 'neo-pickerfield', 'neo-textfield']
         */
        cls: ['neo-datefield', 'neo-pickerfield', 'neo-textfield'],
        /**
         * @member {Neo.component.DateSelector} dateSelector=null
         * @protected
         */
        dateSelector: null,
        /**
         * @member {Object|null} dateSelectorConfig=null
         */
        dateSelectorConfig: null,
        /**
         * True to hide the DatePicker when selecting a day
         * @member {Boolean} hidePickerOnSelect=false
         */
        hidePickerOnSelect: false,
        /**
         * @member {String} inputType='date'
         */
        inputType: 'date',
        /**
         * @member {Number} pickerHeight=225
         */
        pickerHeight: 225,
        /**
         * @member {Number} pickerWidth=200
         */
        pickerWidth: 200,
        /**
         * @member {Object|Object[]} triggers=[{module: DateTrigger}]
         * @protected
         */
        triggers: [{
            module: _trigger_Date_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]
        }]
    }}

    /**
     *
     * @param config
     */
    constructor(config) {
        super(config);

        let me = this;

        me.dateSelector = Neo.create(_component_DateSelector_mjs__WEBPACK_IMPORTED_MODULE_0__["default"], {
            dayNameFormat: 'short',
            value        : me.value  || _util_Date_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].convertToyyyymmdd(new Date()),
            ...me.dateSelectorConfig || {}
        });

        me.dateSelector.keys._keys.push(
            {fn: 'onContainerKeyDownEscape', key: 'Escape', scope: me.id}
        );

        me.dateSelector.on({
            change: me.onDatePickerChange,
            scope : me
        });
    }

    /**
     *
     * @returns {Neo.component.DateSelector}
     */
    createPickerComponent() {
        return this.dateSelector;
    }

    /**
     * @param {Object} data
     * @protected
     */
    onContainerKeyDownEscape(data) {
        let me = this;

        me.hidePicker();
        me.focus(me.getInputElId());
    }

    /**
     *
     * @param {Object} opts
     */
    onDatePickerChange(opts) {
        let me   = this,
            vdom = me.vdom;

        if (me.hidePickerOnSelect) {
            _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].removeVdomChild(vdom, me.getPickerId());

            me.promiseVdomUpdate().then(data => {
                me.value = opts.value;
            });
        } else {
            me.value = opts.value;
        }
    }

    /**
     *
     * @param {Object} data
     * @protected
     */
    onKeyDownEnter(data) {
        let me = this;

        if (me.pickerIsMounted) {
            me.dateSelector.focusCurrentItem();
            super.onKeyDownEnter(data);
        } else {
            super.onKeyDownEnter(data, me.dateSelector.focusCurrentItem, me.dateSelector);
        }
    }

    /**
     * @param {Object} data
     * @protected
     */
    onInputValueChange(data) {
        let me       = this,
            value    = data.value,
            oldValue = me.value;

        if (data.valid === true) {
            super.onInputValueChange(data);

            if (value !== oldValue) {
                me.dateSelector.value = value;
            }
        }
    }
}

Neo.applyClassConfig(DateField);



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

/***/ "./node_modules/neo.mjs/src/form/field/trigger/Date.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/trigger/Date.mjs ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Date; });
/* harmony import */ var _Picker_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Picker.mjs */ "./node_modules/neo.mjs/src/form/field/trigger/Picker.mjs");


/**
 * used by form.field.Date
 * @class Neo.form.field.trigger.Date
 * @extends Neo.form.field.trigger.Picker
 */
class Date extends _Picker_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.trigger.Date'
         * @protected
         */
        className: 'Neo.form.field.trigger.Date',
        /**
         * @member {String} ntype='trigger-date'
         * @protected
         */
        ntype: 'trigger-date',
        /**
         * @member {String|null} iconCls='fa fa-calendar-alt'
         */
        iconCls: 'fa fa-calendar-alt'
    }}
}

Neo.applyClassConfig(Date);



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



/***/ }),

/***/ "./node_modules/neo.mjs/src/selection/Model.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/selection/Model.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Model; });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");




/**
 * @class Neo.selection.Model
 * @extends Neo.core.Base
 */
class Model extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.selection.Model'
         * @protected
         */
        className: 'Neo.selection.Model',
        /**
         * @member {String} ntype='selection-model'
         * @protected
         */
        ntype: 'selection-model',
        /**
         * Placeholder for extended classes to add a custom css rule to this owner component
         * @member {String|null} cls=null
         * @protected
         */
        cls: null,
        /**
         * @member {Array} items=[]
         * @protected
         */
        items: [],
        /**
         * @member {String} selectedCls='selected'
         */
        selectedCls: 'neo-selected',
        /**
         * @member {Boolean} singleSelect=true
         */
        singleSelect: true,
        /**
         * Internally saves the view id, but the getter will return the matching instance
         * @member {Object} view_=null
         * @protected
         */
        view_: null
    }}

    /**
     * Gets triggered before getting the value of the view config
     * @returns {Neo.component.Base}
     */
    beforeGetView() {
        return Neo.getComponent(this._view);
    }

    /**
     * Gets triggered before setting the value of the view config
     * @returns {String} the view id
     */
    beforeSetView(value) {
        return value && value.id;
    }

    /**
     *
     */
    addDomListener() {}

    /**
     *
     * @param {Object} item
     * @param {Boolean} [silent] true to prevent a vdom update
     * @param {Array} [itemCollection]
     * @param {String} [selectedCls]
     */
    deselect(item, silent, itemCollection, selectedCls) {
        let me   = this,
            view = me.view,
            vdom = view.vdom,
            node = view.getVdomChild(item), // todo: support for nodes (right now limited to ids)
            cls;

        if (node) {
            cls = node.cls || [];
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, selectedCls || me.selectedCls);
            node.cls = cls;
        }

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(itemCollection || me.items, item);

        if (!silent) {
            view.vdom = vdom;
        }
    }

    /**
     *
     * @param {Boolean} [silent] true to prevent a vdom update
     */
    deselectAll(silent) {
        let me    = this,
            items = [...me.items],
            view  = me.view,
            vdom  = view.vdom;

        items.forEach(item => {
            me.deselect(item, true);
        });

        if (!silent && items.length > 0) {
            view.vdom = vdom;
        }
    }

    /**
     *
     */
    destroy() {
        this.unregister();
        super.destroy();
    }

    /**
     *
     * @returns {Array} this.items
     */
    getSelection() {
        return this.items;
    }

    /**
     *
     * @returns {Boolean} true in case there is a selection
     */
    hasSelection() {
        return this.items.length > 0;
    }

    /**
     *
     * @param {String} id
     * @returns {Boolean} true in case the item is selected
     */
    isSelected(id) {
        return this.items.indexOf(id) > -1;
    }

    /**
     *
     * @param {Neo.component.Base} component
     */
    register(component) {
        let me  = this,
            cls = component.cls || [];

        if (me.cls && !cls.includes(me.cls)) {
            cls.push(me.cls);
            component.cls = cls;
        }

        me.view = component;
        me.addDomListener();
    }

    /**
     *
     */
    removeDomListeners() {
        let me           = this,
            component    = me.view,
            domListeners = [...component.domListeners];

        component.domListeners.forEach(listener => {
            if (listener.scope === me) {
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(domListeners, listener);
            }
        });

        component.domListeners = domListeners;
    }

    /**
     *
     * @param {Object|Object[]|String[]} items
     * @param {Array} [itemCollection]
     * @param {String} [selectedCls]
     */
    select(items, itemCollection, selectedCls) {
        items = Array.isArray(items) ? items : [items];

        let me   = this,
            view = me.view,
            vdom = view.vdom,
            cls;

        if (me.singleSelect) {
            me.deselectAll(true);
        }

        items.forEach(node => {
            if (typeof node === 'string') {
                node = view.getVdomChild(node);
            }

            if (node) {
                cls = node.cls || [];
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, selectedCls || me.selectedCls);
                node.cls = cls;
            }
        });

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(itemCollection || me.items, items);

        view[view.hasOwnProperty('silentSelect') && view.silentSelect === true ? '_vdom' : 'vdom'] = vdom;
    }

    /**
     *
     * @param {Object} item
     */
    toggleSelection(item) {
        let me = this;

        if (me.isSelected(item)) {
            me.deselect(item);
        } else {
            me.select(item);
        }
    }

    /**
     *
     */
    unregister() {
        let me  = this,
            cls = me.view.cls || [];

        if (me.cls && cls.includes(me.cls)) {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, me.cls);
            me.view.cls = cls;
        }

        me.deselectAll();

        me.removeDomListeners();
    }
}

Neo.applyClassConfig(Model);



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9mb3JtL2ZpZWxkL2RhdGUvTWFpbkNvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvZm9ybS9maWVsZC9kYXRlL2FwcC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2Zvcm0vZmllbGQvRGF0ZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2Zvcm0vZmllbGQvUGlja2VyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC90cmlnZ2VyL0RhdGUubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL3RyaWdnZXIvUGlja2VyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvc2VsZWN0aW9uL01vZGVsLm1qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRFO0FBQ0w7QUFDQztBQUNOO0FBQ1E7QUFDRDtBQUNEOztBQUV4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixrRUFBcUI7QUFDakQsd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLG9FQUFRO0FBQy9CO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsU0FBUztBQUNULHVCQUF1QixvRUFBUTtBQUMvQjtBQUNBO0FBQ0Esd0JBQXdCLDJEQUEyRDtBQUNuRix3QkFBd0I7QUFDeEIsU0FBUztBQUNULHVCQUF1QixvRUFBUTtBQUMvQjtBQUNBO0FBQ0Esd0JBQXdCLGdEQUFnRDtBQUN4RSx3QkFB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Q0E7QUFDQSxlQUFlLG1CQUFtQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQix1REFBUTtBQUN4QjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSx5QkFBeUI7QUFDeEMsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsdURBQVE7QUFDeEI7QUFDQTtBQUNBLFNBQVM7O0FBRVQsUUFBUSx1REFBUTs7QUFFaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLHVEQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWZvcm0tZmllbGQtZGF0ZS1hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hlY2tCb3ggICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9mb3JtL2ZpZWxkL0NoZWNrQm94Lm1qcyc7XG5pbXBvcnQgQ29uZmlndXJhdGlvblZpZXdwb3J0IGZyb20gJy4uLy4uLy4uL0NvbmZpZ3VyYXRpb25WaWV3cG9ydC5tanMnO1xuaW1wb3J0IERhdGVGaWVsZCAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9zcmMvZm9ybS9maWVsZC9EYXRlLm1qcyc7XG5pbXBvcnQgRGF0ZVV0aWwgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL3NyYy91dGlsL0RhdGUubWpzJztcbmltcG9ydCBOdW1iZXJGaWVsZCAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2Zvcm0vZmllbGQvTnVtYmVyLm1qcyc7XG5pbXBvcnQgUmFkaW8gICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9mb3JtL2ZpZWxkL1JhZGlvLm1qcyc7XG5pbXBvcnQgVGV4dEZpZWxkICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9mb3JtL2ZpZWxkL1RleHQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgVGVzdEFwcC5NYWluQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uZXhhbXBsZXMuQ29uZmlndXJhdGlvblZpZXdwb3J0XG4gKi9cbmNsYXNzIE1haW5Db250YWluZXIgZXh0ZW5kcyBDb25maWd1cmF0aW9uVmlld3BvcnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnVGVzdEFwcC5NYWluQ29udGFpbmVyJyxcbiAgICAgICAgbnR5cGUgICAgOiAnbWFpbi1jb250YWluZXInLFxuXG4gICAgICAgIGF1dG9Nb3VudCAgICAgICAgICAgOiB0cnVlLFxuICAgICAgICBjb25maWdJdGVtTGFiZWxXaWR0aDogMTYwLFxuICAgICAgICBsYXlvdXQgICAgICAgICAgICAgIDoge250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgfX1cblxuICAgIGNyZWF0ZUNvbmZpZ3VyYXRpb25Db21wb25lbnRzKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIHJldHVybiBbe1xuICAgICAgICAgICAgbW9kdWxlICAgOiBDaGVja0JveCxcbiAgICAgICAgICAgIGNoZWNrZWQgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5jbGVhcmFibGUsXG4gICAgICAgICAgICBsYWJlbFRleHQ6ICdjbGVhcmFibGUnLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7Y2hhbmdlOiBtZS5vbkNvbmZpZ0NoYW5nZS5iaW5kKG1lLCAnY2xlYXJhYmxlJyl9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogQ2hlY2tCb3gsXG4gICAgICAgICAgICBjaGVja2VkICA6IG1lLmV4YW1wbGVDb21wb25lbnQuY2xlYXJUb09yaWdpbmFsVmFsdWUsXG4gICAgICAgICAgICBsYWJlbFRleHQ6ICdjbGVhclRvT3JpZ2luYWxWYWx1ZScsXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHtjaGFuZ2U6IG1lLm9uQ29uZmlnQ2hhbmdlLmJpbmQobWUsICdjbGVhclRvT3JpZ2luYWxWYWx1ZScpfSxcbiAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpblRvcDogJzEwcHgnfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICA6IENoZWNrQm94LFxuICAgICAgICAgICAgY2hlY2tlZCAgOiBtZS5leGFtcGxlQ29tcG9uZW50LmhpZGVMYWJlbCxcbiAgICAgICAgICAgIGxhYmVsVGV4dDogJ2hpZGVMYWJlbCcsXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHtjaGFuZ2U6IG1lLm9uQ29uZmlnQ2hhbmdlLmJpbmQobWUsICdoaWRlTGFiZWwnKX0sXG4gICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW5Ub3A6ICcxMHB4J31cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgOiBDaGVja0JveCxcbiAgICAgICAgICAgIGNoZWNrZWQgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5oaWRlUGlja2VyT25TZWxlY3QsXG4gICAgICAgICAgICBsYWJlbFRleHQ6ICdoaWRlUGlja2VyT25TZWxlY3QnLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7Y2hhbmdlOiBtZS5vbkNvbmZpZ0NoYW5nZS5iaW5kKG1lLCAnaGlkZVBpY2tlck9uU2VsZWN0Jyl9LFxuICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luVG9wOiAnMTBweCd9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICAgOiBSYWRpbyxcbiAgICAgICAgICAgIGNoZWNrZWQgICAgICAgOiBtZS5leGFtcGxlQ29tcG9uZW50LmxhYmVsUG9zaXRpb24gPT09ICd0b3AnLFxuICAgICAgICAgICAgaGlkZVZhbHVlTGFiZWw6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWxUZXh0ICAgICA6ICdsYWJlbFBvc2l0aW9uJyxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgICAgOiB7Y2hhbmdlOiBtZS5vblJhZGlvQ2hhbmdlLmJpbmQobWUsICdsYWJlbFBvc2l0aW9uJywgJ3RvcCcpfSxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICAgOiAnbGFiZWxQb3NpdGlvbicsXG4gICAgICAgICAgICBzdHlsZSAgICAgICAgIDoge21hcmdpblRvcDogJzEwcHgnfSxcbiAgICAgICAgICAgIHZhbHVlTGFiZWxUZXh0OiAndG9wJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogUmFkaW8sXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5sYWJlbFBvc2l0aW9uID09PSAncmlnaHQnLFxuICAgICAgICAgICAgaGlkZVZhbHVlTGFiZWw6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWxUZXh0ICAgICA6ICcnLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHtjaGFuZ2U6IG1lLm9uUmFkaW9DaGFuZ2UuYmluZChtZSwgJ2xhYmVsUG9zaXRpb24nLCAncmlnaHQnKX0sXG4gICAgICAgICAgICBuYW1lICAgICAgICAgIDogJ2xhYmVsUG9zaXRpb24nLFxuICAgICAgICAgICAgdmFsdWVMYWJlbFRleHQ6ICdyaWdodCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICA6IFJhZGlvLFxuICAgICAgICAgICAgY2hlY2tlZCAgICAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQubGFiZWxQb3NpdGlvbiA9PT0gJ2JvdHRvbScsXG4gICAgICAgICAgICBoaWRlVmFsdWVMYWJlbDogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgIDogJycsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICAgIDoge2NoYW5nZTogbWUub25SYWRpb0NoYW5nZS5iaW5kKG1lLCAnbGFiZWxQb3NpdGlvbicsICdib3R0b20nKX0sXG4gICAgICAgICAgICBuYW1lICAgICAgICAgIDogJ2xhYmVsUG9zaXRpb24nLFxuICAgICAgICAgICAgdmFsdWVMYWJlbFRleHQ6ICdib3R0b20nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICAgOiBSYWRpbyxcbiAgICAgICAgICAgIGNoZWNrZWQgICAgICAgOiBtZS5leGFtcGxlQ29tcG9uZW50LmxhYmVsUG9zaXRpb24gPT09ICdsZWZ0JyxcbiAgICAgICAgICAgIGhpZGVWYWx1ZUxhYmVsOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsVGV4dCAgICAgOiAnJyxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgICAgOiB7Y2hhbmdlOiBtZS5vblJhZGlvQ2hhbmdlLmJpbmQobWUsICdsYWJlbFBvc2l0aW9uJywgJ2xlZnQnKX0sXG4gICAgICAgICAgICBuYW1lICAgICAgICAgIDogJ2xhYmVsUG9zaXRpb24nLFxuICAgICAgICAgICAgdmFsdWVMYWJlbFRleHQ6ICdsZWZ0J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogUmFkaW8sXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5sYWJlbFBvc2l0aW9uID09PSAnaW5saW5lJyxcbiAgICAgICAgICAgIGhpZGVWYWx1ZUxhYmVsOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsVGV4dCAgICAgOiAnJyxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgICAgOiB7Y2hhbmdlOiBtZS5vblJhZGlvQ2hhbmdlLmJpbmQobWUsICdsYWJlbFBvc2l0aW9uJywgJ2lubGluZScpfSxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICAgOiAnbGFiZWxQb3NpdGlvbicsXG4gICAgICAgICAgICB2YWx1ZUxhYmVsVGV4dDogJ2lubGluZSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgOiBUZXh0RmllbGQsXG4gICAgICAgICAgICBsYWJlbFRleHQ6ICdsYWJlbFRleHQnLFxuICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luVG9wOiAnMTBweCd9LFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7Y2hhbmdlOiBtZS5vbkNvbmZpZ0NoYW5nZS5iaW5kKG1lLCAnbGFiZWxUZXh0Jyl9LFxuICAgICAgICAgICAgdmFsdWUgICAgOiBtZS5leGFtcGxlQ29tcG9uZW50LmxhYmVsVGV4dFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICA6IE51bWJlckZpZWxkLFxuICAgICAgICAgICAgbGFiZWxUZXh0OiAnbGFiZWxXaWR0aCcsXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHtjaGFuZ2U6IG1lLm9uQ29uZmlnQ2hhbmdlLmJpbmQobWUsICdsYWJlbFdpZHRoJyl9LFxuICAgICAgICAgICAgbWF4VmFsdWUgOiAyMDAsXG4gICAgICAgICAgICBtaW5WYWx1ZSA6IDUwLFxuICAgICAgICAgICAgc3RlcFNpemUgOiA1LFxuICAgICAgICAgICAgdmFsdWUgICAgOiBtZS5leGFtcGxlQ29tcG9uZW50LmxhYmVsV2lkdGhcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgOiBUZXh0RmllbGQsXG4gICAgICAgICAgICBsYWJlbFRleHQ6ICdwbGFjZWhvbGRlclRleHQnLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7Y2hhbmdlOiBtZS5vbkNvbmZpZ0NoYW5nZS5iaW5kKG1lLCAncGxhY2Vob2xkZXJUZXh0Jyl9LFxuICAgICAgICAgICAgdmFsdWUgICAgOiBtZS5leGFtcGxlQ29tcG9uZW50LnBsYWNlaG9sZGVyVGV4dFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICA6IE51bWJlckZpZWxkLFxuICAgICAgICAgICAgbGFiZWxUZXh0OiAnd2lkdGgnLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7Y2hhbmdlOiBtZS5vbkNvbmZpZ0NoYW5nZS5iaW5kKG1lLCAnd2lkdGgnKX0sXG4gICAgICAgICAgICBtYXhWYWx1ZSA6IDMwMCxcbiAgICAgICAgICAgIG1pblZhbHVlIDogNTAsXG4gICAgICAgICAgICBzdGVwU2l6ZSA6IDUsXG4gICAgICAgICAgICB2YWx1ZSAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQud2lkdGhcbiAgICAgICAgfV07XG4gICAgfVxuXG4gICAgY3JlYXRlRXhhbXBsZUNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIE5lby5jcmVhdGUoRGF0ZUZpZWxkLCB7XG4gICAgICAgICAgICBjbGVhclRvT3JpZ2luYWxWYWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgIGxhYmVsVGV4dCAgICAgICAgICAgOiAnTGFiZWwnLFxuICAgICAgICAgICAgbGFiZWxXaWR0aCAgICAgICAgICA6IDcwLFxuICAgICAgICAgICAgdmFsdWUgICAgICAgICAgICAgICA6IERhdGVVdGlsLmNvbnZlcnRUb3l5eXltbWRkKG5ldyBEYXRlKCkpLFxuICAgICAgICAgICAgd2lkdGggICAgICAgICAgICAgICA6IDI1MFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5Db250YWluZXIpO1xuXG5leHBvcnQge01haW5Db250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSAnLi9NYWluQ29udGFpbmVyLm1qcyc7XG5cbmNvbnN0IG9uU3RhcnQgPSAoKSA9PiBOZW8uYXBwKHtcbiAgICBhcHBQYXRoIDogJ2V4YW1wbGVzL2Zvcm0vZmllbGQvZGF0ZS8nLFxuICAgIG1haW5WaWV3OiBNYWluQ29udGFpbmVyLFxuICAgIG5hbWUgICAgOiAnVGVzdEFwcCdcbn0pO1xuXG5leHBvcnQge29uU3RhcnQgYXMgb25TdGFydH07IiwiaW1wb3J0IERhdGVTZWxlY3RvciBmcm9tICcuLi8uLi9jb21wb25lbnQvRGF0ZVNlbGVjdG9yLm1qcydcbmltcG9ydCBEYXRlVHJpZ2dlciAgZnJvbSAnLi90cmlnZ2VyL0RhdGUubWpzJ1xuaW1wb3J0IERhdGVVdGlsICAgICBmcm9tICcuLi8uLi91dGlsL0RhdGUubWpzJztcbmltcG9ydCBQaWNrZXIgICAgICAgZnJvbSAnLi9QaWNrZXIubWpzJztcbmltcG9ydCBWRG9tVXRpbCAgICAgZnJvbSAnLi4vLi4vdXRpbC9WRG9tLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5mb3JtLmZpZWxkLkRhdGVcbiAqIEBleHRlbmRzIE5lby5mb3JtLmZpZWxkLlBpY2tlclxuICovXG5jbGFzcyBEYXRlRmllbGQgZXh0ZW5kcyBQaWNrZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZm9ybS5maWVsZC5EYXRlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uZm9ybS5maWVsZC5EYXRlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2RhdGVmaWVsZCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdkYXRlZmllbGQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1kYXRlZmllbGQnLCAnbmVvLXBpY2tlcmZpZWxkJywgJ25lby10ZXh0ZmllbGQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1kYXRlZmllbGQnLCAnbmVvLXBpY2tlcmZpZWxkJywgJ25lby10ZXh0ZmllbGQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb21wb25lbnQuRGF0ZVNlbGVjdG9yfSBkYXRlU2VsZWN0b3I9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBkYXRlU2VsZWN0b3I6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gZGF0ZVNlbGVjdG9yQ29uZmlnPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGRhdGVTZWxlY3RvckNvbmZpZzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgdG8gaGlkZSB0aGUgRGF0ZVBpY2tlciB3aGVuIHNlbGVjdGluZyBhIGRheVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBoaWRlUGlja2VyT25TZWxlY3Q9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGhpZGVQaWNrZXJPblNlbGVjdDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGlucHV0VHlwZT0nZGF0ZSdcbiAgICAgICAgICovXG4gICAgICAgIGlucHV0VHlwZTogJ2RhdGUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBwaWNrZXJIZWlnaHQ9MjI1XG4gICAgICAgICAqL1xuICAgICAgICBwaWNrZXJIZWlnaHQ6IDIyNSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gcGlja2VyV2lkdGg9MjAwXG4gICAgICAgICAqL1xuICAgICAgICBwaWNrZXJXaWR0aDogMjAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fE9iamVjdFtdfSB0cmlnZ2Vycz1be21vZHVsZTogRGF0ZVRyaWdnZXJ9XVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB0cmlnZ2VyczogW3tcbiAgICAgICAgICAgIG1vZHVsZTogRGF0ZVRyaWdnZXJcbiAgICAgICAgfV1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5kYXRlU2VsZWN0b3IgPSBOZW8uY3JlYXRlKERhdGVTZWxlY3Rvciwge1xuICAgICAgICAgICAgZGF5TmFtZUZvcm1hdDogJ3Nob3J0JyxcbiAgICAgICAgICAgIHZhbHVlICAgICAgICA6IG1lLnZhbHVlICB8fCBEYXRlVXRpbC5jb252ZXJ0VG95eXl5bW1kZChuZXcgRGF0ZSgpKSxcbiAgICAgICAgICAgIC4uLm1lLmRhdGVTZWxlY3RvckNvbmZpZyB8fCB7fVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5kYXRlU2VsZWN0b3Iua2V5cy5fa2V5cy5wdXNoKFxuICAgICAgICAgICAge2ZuOiAnb25Db250YWluZXJLZXlEb3duRXNjYXBlJywga2V5OiAnRXNjYXBlJywgc2NvcGU6IG1lLmlkfVxuICAgICAgICApO1xuXG4gICAgICAgIG1lLmRhdGVTZWxlY3Rvci5vbih7XG4gICAgICAgICAgICBjaGFuZ2U6IG1lLm9uRGF0ZVBpY2tlckNoYW5nZSxcbiAgICAgICAgICAgIHNjb3BlIDogbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5EYXRlU2VsZWN0b3J9XG4gICAgICovXG4gICAgY3JlYXRlUGlja2VyQ29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRlU2VsZWN0b3I7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25Db250YWluZXJLZXlEb3duRXNjYXBlKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5oaWRlUGlja2VyKCk7XG4gICAgICAgIG1lLmZvY3VzKG1lLmdldElucHV0RWxJZCgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICovXG4gICAgb25EYXRlUGlja2VyQ2hhbmdlKG9wdHMpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgaWYgKG1lLmhpZGVQaWNrZXJPblNlbGVjdCkge1xuICAgICAgICAgICAgVkRvbVV0aWwucmVtb3ZlVmRvbUNoaWxkKHZkb20sIG1lLmdldFBpY2tlcklkKCkpO1xuXG4gICAgICAgICAgICBtZS5wcm9taXNlVmRvbVVwZGF0ZSgpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgbWUudmFsdWUgPSBvcHRzLnZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS52YWx1ZSA9IG9wdHMudmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uS2V5RG93bkVudGVyKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUucGlja2VySXNNb3VudGVkKSB7XG4gICAgICAgICAgICBtZS5kYXRlU2VsZWN0b3IuZm9jdXNDdXJyZW50SXRlbSgpO1xuICAgICAgICAgICAgc3VwZXIub25LZXlEb3duRW50ZXIoZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdXBlci5vbktleURvd25FbnRlcihkYXRhLCBtZS5kYXRlU2VsZWN0b3IuZm9jdXNDdXJyZW50SXRlbSwgbWUuZGF0ZVNlbGVjdG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uSW5wdXRWYWx1ZUNoYW5nZShkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2YWx1ZSAgICA9IGRhdGEudmFsdWUsXG4gICAgICAgICAgICBvbGRWYWx1ZSA9IG1lLnZhbHVlO1xuXG4gICAgICAgIGlmIChkYXRhLnZhbGlkID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzdXBlci5vbklucHV0VmFsdWVDaGFuZ2UoZGF0YSk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBtZS5kYXRlU2VsZWN0b3IudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRGF0ZUZpZWxkKTtcblxuZXhwb3J0IHtEYXRlRmllbGQgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbnRhaW5lciAgICAgZnJvbSAnLi4vLi4vY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBQaWNrZXJUcmlnZ2VyIGZyb20gJy4vdHJpZ2dlci9QaWNrZXIubWpzJztcbmltcG9ydCBUZXh0ICAgICAgICAgIGZyb20gJy4vVGV4dC5tanMnO1xuaW1wb3J0IFZEb21VdGlsICAgICAgZnJvbSAnLi4vLi4vdXRpbC9WRG9tLm1qcyc7XG5cbi8qKlxuICogVGhlIGFic3RyYWN0IHBpY2tlciBmaWVsZCBwcm92aWRlcyBhbiBhcnJvdyBkb3duIHRyaWdnZXIgd2hpY2ggb3BlbnMgYSBmbG9hdGluZyBjb250YWluZXIgdG8gcHJvdmlkZVxuICogbW9yZSBkYXRhIHNlbGVjdGlvbiBvcHRpb25zXG4gKiBAY2xhc3MgTmVvLmZvcm0uZmllbGQuUGlja2VyXG4gKiBAZXh0ZW5kcyBOZW8uZm9ybS5maWVsZC5UZXh0XG4gKiBAYWJzdHJhY3RcbiAqL1xuY2xhc3MgUGlja2VyIGV4dGVuZHMgVGV4dCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5mb3JtLmZpZWxkLlBpY2tlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmZvcm0uZmllbGQuUGlja2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3BpY2tlcmZpZWxkJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3BpY2tlcmZpZWxkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0b3JlcyB0aGUgZGF0YSBmcm9tIHRoZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBjYWxsIChwaWNrZXIgJiBib2R5IERvbVJlY3RzKVxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gY2xpZW50UmVjdHM9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGllbnRSZWN0czogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tcGlja2VyZmllbGQnLCAnbmVvLXRleHRmaWVsZCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLXBpY2tlcmZpZWxkJywgJ25lby10ZXh0ZmllbGQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZGl0aW9uYWwgdXNlZCBrZXlzIGZvciB0aGUgc2VsZWN0aW9uIG1vZGVsXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0ga2V5c1xuICAgICAgICAgKi9cbiAgICAgICAga2V5czoge1xuICAgICAgICAgICAgJ0VudGVyJyA6ICdvbktleURvd25FbnRlcicsXG4gICAgICAgICAgICAnRXNjYXBlJzogJ29uS2V5RG93bkVzY2FwZSdcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1hdGNoUGlja2VyV2lkdGg9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgbWF0Y2hQaWNrZXJXaWR0aDogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBwaWNrZXI9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBwaWNrZXI6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25maWdzIHRvIHBhc3MgdG8gdGhlIHBpY2tlciBjb250YWluZXJcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IHBpY2tlckNvbmZpZz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBwaWNrZXJDb25maWc6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBwaWNrZXIgY29udGFpbmVyLiBEZWZhdWx0cyB0byBweC5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IHBpY2tlckhlaWdodD0xMDBcbiAgICAgICAgICovXG4gICAgICAgIHBpY2tlckhlaWdodDogMTAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcGlja2VySXNNb3VudGVkPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHBpY2tlcklzTW91bnRlZDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBwaWNrZXIgY29udGFpbmVyLiBEZWZhdWx0cyB0byBweC5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IHBpY2tlck1heEhlaWdodD0yMDBcbiAgICAgICAgICovXG4gICAgICAgIHBpY2tlck1heEhlaWdodDogMjAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHdpZHRoIG9mIHRoZSBwaWNrZXIgY29udGFpbmVyLiBEZWZhdWx0cyB0byBweC5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IHBpY2tlcldpZHRoPTEwMFxuICAgICAgICAgKi9cbiAgICAgICAgcGlja2VyV2lkdGg6IDEwMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxPYmplY3RbXX0gdHJpZ2dlcnM9W11cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgdHJpZ2dlcnM6IFt7XG4gICAgICAgICAgICBtb2R1bGU6IFBpY2tlclRyaWdnZXJcbiAgICAgICAgfV1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbnRhaW5lci5CYXNlfVxuICAgICAqL1xuICAgIGNyZWF0ZVBpY2tlcigpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBwaWNrZXJDb21wb25lbnQgPSBtZS5jcmVhdGVQaWNrZXJDb21wb25lbnQoKTtcblxuICAgICAgICByZXR1cm4gTmVvLmNyZWF0ZShDb250YWluZXIsIHtcbiAgICAgICAgICAgIGFwcE5hbWUgIDogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgIGNscyAgICAgIDogWyduZW8tcGlja2VyLWNvbnRhaW5lcicsICduZW8tY29udGFpbmVyJ10sXG4gICAgICAgICAgICBoZWlnaHQgICA6IG1lLnBpY2tlckhlaWdodCxcbiAgICAgICAgICAgIGlkICAgICAgIDogbWUuZ2V0UGlja2VySWQoKSxcbiAgICAgICAgICAgIGl0ZW1zICAgIDogcGlja2VyQ29tcG9uZW50ID8gW3BpY2tlckNvbXBvbmVudF0gOiBbXSxcbiAgICAgICAgICAgIG1heEhlaWdodDogbWUucGlja2VyTWF4SGVpZ2h0LFxuICAgICAgICAgICAgdmRvbSAgICAgOiB7Y246IFtdLCB0YWJJbmRleDogLTF9LFxuICAgICAgICAgICAgd2lkdGggICAgOiBtZS5waWNrZXJXaWR0aCxcbiAgICAgICAgICAgIC4uLm1lLnBpY2tlckNvbmZpZyB8fCB7fVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gc2lsZW50XG4gICAgICovXG4gICAgYXBwbHlDbGllbnRSZWN0cyhzaWxlbnQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGJvZHlSZWN0ICAgID0gbWUuY2xpZW50UmVjdHNbMl0sXG4gICAgICAgICAgICBpbnB1dFJlY3QgICA9IG1lLmNsaWVudFJlY3RzWzFdLFxuICAgICAgICAgICAgdHJpZ2dlclJlY3QgPSBtZS5jbGllbnRSZWN0c1swXSxcbiAgICAgICAgICAgIHZkb20gICAgICAgID0gbWUucGlja2VyLnZkb20sXG4gICAgICAgICAgICB3aWR0aCAgICAgICA9IG1lLm1hdGNoUGlja2VyV2lkdGggPyAoaW5wdXRSZWN0LndpZHRoIC0gMSkgOiBtZS5waWNrZXJXaWR0aDtcblxuICAgICAgICBtZS5waWNrZXJXaWR0aCA9IHdpZHRoO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24odmRvbS5zdHlsZSwge1xuICAgICAgICAgICAgbGVmdCA6IGAke3RyaWdnZXJSZWN0LmxlZnQgKyB0cmlnZ2VyUmVjdC53aWR0aCAtIHdpZHRofXB4YCxcbiAgICAgICAgICAgIHRvcCAgOiBgJHt0cmlnZ2VyUmVjdC50b3AgKyB0cmlnZ2VyUmVjdC5oZWlnaHQgKyAxfXB4YCxcbiAgICAgICAgICAgIHdpZHRoOiBgJHt3aWR0aH1weGBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUucGlja2VyW3NpbGVudCA/ICdfdmRvbScgOiAndmRvbSddID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudWxsfVxuICAgICAqL1xuICAgIGNyZWF0ZVBpY2tlckNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrU2NvcGVdXG4gICAgICovXG4gICAgZ2V0Q2xpZW50UmVjdHNUaGVuU2hvdyhjYWxsYmFjaywgY2FsbGJhY2tTY29wZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5nZXRCb3VuZGluZ0NsaWVudFJlY3Qoe1xuICAgICAgICAgICAgaWQ6IFttZS5pZCwgbWUuaWQgKyAnLWlucHV0LXdyYXBwZXInLCAnYm9keSddXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBtZS5jbGllbnRSZWN0cyA9IGRhdGE7XG4gICAgICAgICAgICBtZS5zaG93UGlja2VyKGNhbGxiYWNrLCBjYWxsYmFja1Njb3BlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcGlja2VyIGluc3RhbmNlIGFuZCBjcmVhdGVzIGl0IGluIGNhc2UgaXQgZG9lcyBub3QgZXhpc3QgeWV0XG4gICAgICogQHJldHVybnMge05lby5jb250YWluZXIuQmFzZX1cbiAgICAgKi9cbiAgICBnZXRQaWNrZXIoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCFtZS5waWNrZXIpIHtcbiAgICAgICAgICAgIG1lLnBpY2tlciA9IG1lLmNyZWF0ZVBpY2tlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1lLnBpY2tlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0UGlja2VySWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkICsgJ19fcGlja2VyJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV1cbiAgICAgKi9cbiAgICBoaWRlUGlja2VyKHNpbGVudD1mYWxzZSkge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHBpY2tlciA9IG1lLmdldFBpY2tlcigpLFxuICAgICAgICAgICAgdmRvbSAgID0gbWUudmRvbTtcblxuICAgICAgICBpZiAobWUucGlja2VySXNNb3VudGVkKSB7XG4gICAgICAgICAgICBWRG9tVXRpbC5yZW1vdmVWZG9tQ2hpbGQodmRvbSwgbWUuZ2V0UGlja2VySWQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBtZS5waWNrZXJJc01vdW50ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc2lsZW50KSB7XG4gICAgICAgICAgICBtZS5fdmRvbSA9IHZkb207XG4gICAgICAgICAgICBwaWNrZXIubW91bnRlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUucHJvbWlzZVZkb21VcGRhdGUoKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHBpY2tlci5tb3VudGVkID0gbWUucGlja2VySXNNb3VudGVkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGRhdGFcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25Gb2N1c0xlYXZlKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAvLyBpbmxpbmUgd2lsbCB0cmlnZ2VyIGFuIHZkb20gdXBkYXRlLCBzbyBoaWRlIHBpY2tlciBzaG91bGQgYmUgc2lsZW50XG4gICAgICAgIGlmIChtZS5sYWJlbFBvc2l0aW9uID09PSAnaW5saW5lJyAmJiAobWUudmFsdWUgPT09ICcnIHx8IG1lLnZhbHVlID09PSBudWxsKSkge1xuICAgICAgICAgICAgbWUuaGlkZVBpY2tlcih0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLmhpZGVQaWNrZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLm9uRm9jdXNMZWF2ZShkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja1Njb3BlXVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbktleURvd25FbnRlcihkYXRhLCBjYWxsYmFjaywgY2FsbGJhY2tTY29wZSkge1xuICAgICAgICBpZiAoIXRoaXMucGlja2VySXNNb3VudGVkKSB7XG4gICAgICAgICAgICB0aGlzLmdldENsaWVudFJlY3RzVGhlblNob3coY2FsbGJhY2ssIGNhbGxiYWNrU2NvcGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbktleURvd25Fc2NhcGUoZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5waWNrZXJJc01vdW50ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZVBpY2tlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGJ5IGZvcm0uZmllbGQudHJpZ2dlci5QaWNrZXJcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25QaWNrZXJUcmlnZ2VyQ2xpY2soKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLnBpY2tlcklzTW91bnRlZCkge1xuICAgICAgICAgICAgbWUuaGlkZVBpY2tlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUuZ2V0Q2xpZW50UmVjdHNUaGVuU2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrU2NvcGVdXG4gICAgICovXG4gICAgc2hvd1BpY2tlcihjYWxsYmFjaywgY2FsbGJhY2tTY29wZSkge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHBpY2tlciA9IG1lLmdldFBpY2tlcigpLFxuICAgICAgICAgICAgdmRvbSAgID0gbWUudmRvbTtcblxuICAgICAgICBtZS5hcHBseUNsaWVudFJlY3RzKHRydWUpO1xuICAgICAgICB2ZG9tLmNuLnB1c2gocGlja2VyLnZkb20pO1xuXG4gICAgICAgIG1lLnBpY2tlcklzTW91bnRlZCA9IHRydWU7XG5cbiAgICAgICAgbWUucHJvbWlzZVZkb21VcGRhdGUoKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgcGlja2VyLm1vdW50ZWQgPSBtZS5waWNrZXJJc01vdW50ZWQ7XG5cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KGNhbGxiYWNrU2NvcGUgfHwgbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFBpY2tlcik7XG5cbmV4cG9ydCB7UGlja2VyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBQaWNrZXIgZnJvbSAnLi9QaWNrZXIubWpzJztcblxuLyoqXG4gKiB1c2VkIGJ5IGZvcm0uZmllbGQuRGF0ZVxuICogQGNsYXNzIE5lby5mb3JtLmZpZWxkLnRyaWdnZXIuRGF0ZVxuICogQGV4dGVuZHMgTmVvLmZvcm0uZmllbGQudHJpZ2dlci5QaWNrZXJcbiAqL1xuY2xhc3MgRGF0ZSBleHRlbmRzIFBpY2tlciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5mb3JtLmZpZWxkLnRyaWdnZXIuRGF0ZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmZvcm0uZmllbGQudHJpZ2dlci5EYXRlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3RyaWdnZXItZGF0ZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICd0cmlnZ2VyLWRhdGUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGljb25DbHM9J2ZhIGZhLWNhbGVuZGFyLWFsdCdcbiAgICAgICAgICovXG4gICAgICAgIGljb25DbHM6ICdmYSBmYS1jYWxlbmRhci1hbHQnXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRGF0ZSk7XG5cbmV4cG9ydCB7RGF0ZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBVc2VkIGJ5IGZvcm0uZmllbGQuUGlja2VyXG4gKiBAY2xhc3MgTmVvLmZvcm0uZmllbGQudHJpZ2dlci5QaWNrZXJcbiAqIEBleHRlbmRzIE5lby5mb3JtLmZpZWxkLnRyaWdnZXIuQmFzZVxuICovXG5jbGFzcyBQaWNrZXIgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmZvcm0uZmllbGQudHJpZ2dlci5QaWNrZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5mb3JtLmZpZWxkLnRyaWdnZXIuUGlja2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3RyaWdnZXItcGlja2VyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3RyaWdnZXItcGlja2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBpY29uQ2xzPSdmYSBmYS1jYXJldC1kb3duJ1xuICAgICAgICAgKi9cbiAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWNhcmV0LWRvd24nLFxuICAgICAgICAvKipcbiAgICAgICAgICogSW50ZXJuYWwgZmxhZyB1c2VkIGJ5IGZpZWxkLmdldFRyaWdnZXIoKVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHR5cGU9J3BpY2tlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgdHlwZTogJ3BpY2tlcidcbiAgICB9fVxuXG4gICAgb25UcmlnZ2VyQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmZpZWxkLm9uUGlja2VyVHJpZ2dlckNsaWNrKCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhQaWNrZXIpO1xuXG5leHBvcnQge1BpY2tlciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSAgICAgICBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCBOZW9BcnJheSAgIGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCBPYnNlcnZhYmxlIGZyb20gJy4uL2NvcmUvT2JzZXJ2YWJsZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uc2VsZWN0aW9uLk1vZGVsXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIE1vZGVsIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZXMgdGhlIGNvcmUvT2JzZXJ2YWJsZS5tanMgbWl4aW5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT10cnVlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIG9ic2VydmFibGU6IHRydWVcbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5zZWxlY3Rpb24uTW9kZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5zZWxlY3Rpb24uTW9kZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nc2VsZWN0aW9uLW1vZGVsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3NlbGVjdGlvbi1tb2RlbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQbGFjZWhvbGRlciBmb3IgZXh0ZW5kZWQgY2xhc3NlcyB0byBhZGQgYSBjdXN0b20gY3NzIHJ1bGUgdG8gdGhpcyBvd25lciBjb21wb25lbnRcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGNscz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsczogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtcz1bXVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtczogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHNlbGVjdGVkQ2xzPSdzZWxlY3RlZCdcbiAgICAgICAgICovXG4gICAgICAgIHNlbGVjdGVkQ2xzOiAnbmVvLXNlbGVjdGVkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZVNlbGVjdD10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGVTZWxlY3Q6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnRlcm5hbGx5IHNhdmVzIHRoZSB2aWV3IGlkLCBidXQgdGhlIGdldHRlciB3aWxsIHJldHVybiB0aGUgbWF0Y2hpbmcgaW5zdGFuY2VcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSB2aWV3Xz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHZpZXdfOiBudWxsXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdHJpZ2dlcmVkIGJlZm9yZSBnZXR0aW5nIHRoZSB2YWx1ZSBvZiB0aGUgdmlldyBjb25maWdcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlfVxuICAgICAqL1xuICAgIGJlZm9yZUdldFZpZXcoKSB7XG4gICAgICAgIHJldHVybiBOZW8uZ2V0Q29tcG9uZW50KHRoaXMuX3ZpZXcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdHJpZ2dlcmVkIGJlZm9yZSBzZXR0aW5nIHRoZSB2YWx1ZSBvZiB0aGUgdmlldyBjb25maWdcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgdmlldyBpZFxuICAgICAqL1xuICAgIGJlZm9yZVNldFZpZXcodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgYWRkRG9tTGlzdGVuZXIoKSB7fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudF0gdHJ1ZSB0byBwcmV2ZW50IGEgdmRvbSB1cGRhdGVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBbaXRlbUNvbGxlY3Rpb25dXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtzZWxlY3RlZENsc11cbiAgICAgKi9cbiAgICBkZXNlbGVjdChpdGVtLCBzaWxlbnQsIGl0ZW1Db2xsZWN0aW9uLCBzZWxlY3RlZENscykge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2aWV3ID0gbWUudmlldyxcbiAgICAgICAgICAgIHZkb20gPSB2aWV3LnZkb20sXG4gICAgICAgICAgICBub2RlID0gdmlldy5nZXRWZG9tQ2hpbGQoaXRlbSksIC8vIHRvZG86IHN1cHBvcnQgZm9yIG5vZGVzIChyaWdodCBub3cgbGltaXRlZCB0byBpZHMpXG4gICAgICAgICAgICBjbHM7XG5cbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIGNscyA9IG5vZGUuY2xzIHx8IFtdO1xuICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgc2VsZWN0ZWRDbHMgfHwgbWUuc2VsZWN0ZWRDbHMpO1xuICAgICAgICAgICAgbm9kZS5jbHMgPSBjbHM7XG4gICAgICAgIH1cblxuICAgICAgICBOZW9BcnJheS5yZW1vdmUoaXRlbUNvbGxlY3Rpb24gfHwgbWUuaXRlbXMsIGl0ZW0pO1xuXG4gICAgICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgICAgICB2aWV3LnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzaWxlbnRdIHRydWUgdG8gcHJldmVudCBhIHZkb20gdXBkYXRlXG4gICAgICovXG4gICAgZGVzZWxlY3RBbGwoc2lsZW50KSB7XG4gICAgICAgIGxldCBtZSAgICA9IHRoaXMsXG4gICAgICAgICAgICBpdGVtcyA9IFsuLi5tZS5pdGVtc10sXG4gICAgICAgICAgICB2aWV3ICA9IG1lLnZpZXcsXG4gICAgICAgICAgICB2ZG9tICA9IHZpZXcudmRvbTtcblxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgbWUuZGVzZWxlY3QoaXRlbSwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghc2lsZW50ICYmIGl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZpZXcudmRvbSA9IHZkb207XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudW5yZWdpc3RlcigpO1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IHRoaXMuaXRlbXNcbiAgICAgKi9cbiAgICBnZXRTZWxlY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGVyZSBpcyBhIHNlbGVjdGlvblxuICAgICAqL1xuICAgIGhhc1NlbGVjdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlIGl0ZW0gaXMgc2VsZWN0ZWRcbiAgICAgKi9cbiAgICBpc1NlbGVjdGVkKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmluZGV4T2YoaWQpID4gLTE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gY29tcG9uZW50XG4gICAgICovXG4gICAgcmVnaXN0ZXIoY29tcG9uZW50KSB7XG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxuICAgICAgICAgICAgY2xzID0gY29tcG9uZW50LmNscyB8fCBbXTtcblxuICAgICAgICBpZiAobWUuY2xzICYmICFjbHMuaW5jbHVkZXMobWUuY2xzKSkge1xuICAgICAgICAgICAgY2xzLnB1c2gobWUuY2xzKTtcbiAgICAgICAgICAgIGNvbXBvbmVudC5jbHMgPSBjbHM7XG4gICAgICAgIH1cblxuICAgICAgICBtZS52aWV3ID0gY29tcG9uZW50O1xuICAgICAgICBtZS5hZGREb21MaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgcmVtb3ZlRG9tTGlzdGVuZXJzKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbXBvbmVudCAgICA9IG1lLnZpZXcsXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBbLi4uY29tcG9uZW50LmRvbUxpc3RlbmVyc107XG5cbiAgICAgICAgY29tcG9uZW50LmRvbUxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lci5zY29wZSA9PT0gbWUpIHtcbiAgICAgICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUoZG9tTGlzdGVuZXJzLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbXBvbmVudC5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdHxPYmplY3RbXXxTdHJpbmdbXX0gaXRlbXNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBbaXRlbUNvbGxlY3Rpb25dXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtzZWxlY3RlZENsc11cbiAgICAgKi9cbiAgICBzZWxlY3QoaXRlbXMsIGl0ZW1Db2xsZWN0aW9uLCBzZWxlY3RlZENscykge1xuICAgICAgICBpdGVtcyA9IEFycmF5LmlzQXJyYXkoaXRlbXMpID8gaXRlbXMgOiBbaXRlbXNdO1xuXG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZpZXcgPSBtZS52aWV3LFxuICAgICAgICAgICAgdmRvbSA9IHZpZXcudmRvbSxcbiAgICAgICAgICAgIGNscztcblxuICAgICAgICBpZiAobWUuc2luZ2xlU2VsZWN0KSB7XG4gICAgICAgICAgICBtZS5kZXNlbGVjdEFsbCh0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW1zLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IHZpZXcuZ2V0VmRvbUNoaWxkKG5vZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgIGNscyA9IG5vZGUuY2xzIHx8IFtdO1xuICAgICAgICAgICAgICAgIE5lb0FycmF5LmFkZChjbHMsIHNlbGVjdGVkQ2xzIHx8IG1lLnNlbGVjdGVkQ2xzKTtcbiAgICAgICAgICAgICAgICBub2RlLmNscyA9IGNscztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgTmVvQXJyYXkuYWRkKGl0ZW1Db2xsZWN0aW9uIHx8IG1lLml0ZW1zLCBpdGVtcyk7XG5cbiAgICAgICAgdmlld1t2aWV3Lmhhc093blByb3BlcnR5KCdzaWxlbnRTZWxlY3QnKSAmJiB2aWV3LnNpbGVudFNlbGVjdCA9PT0gdHJ1ZSA/ICdfdmRvbScgOiAndmRvbSddID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXG4gICAgICovXG4gICAgdG9nZ2xlU2VsZWN0aW9uKGl0ZW0pIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUuaXNTZWxlY3RlZChpdGVtKSkge1xuICAgICAgICAgICAgbWUuZGVzZWxlY3QoaXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5zZWxlY3QoaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHVucmVnaXN0ZXIoKSB7XG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxuICAgICAgICAgICAgY2xzID0gbWUudmlldy5jbHMgfHwgW107XG5cbiAgICAgICAgaWYgKG1lLmNscyAmJiBjbHMuaW5jbHVkZXMobWUuY2xzKSkge1xuICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgbWUuY2xzKTtcbiAgICAgICAgICAgIG1lLnZpZXcuY2xzID0gY2xzO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuZGVzZWxlY3RBbGwoKTtcblxuICAgICAgICBtZS5yZW1vdmVEb21MaXN0ZW5lcnMoKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1vZGVsKTtcblxuZXhwb3J0IHtNb2RlbCBhcyBkZWZhdWx0fTsiXSwic291cmNlUm9vdCI6IiJ9