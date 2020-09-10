self["webpackChunk"](["vendors~chunks/examples-tableFiltering-app"],{

/***/ "./node_modules/neo.mjs/examples/tableFiltering/MainContainer.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/tableFiltering/MainContainer.mjs ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _src_filter_BooleanContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/filter/BooleanContainer.mjs */ "./node_modules/neo.mjs/src/filter/BooleanContainer.mjs");
/* harmony import */ var _src_selection_table_CellModel_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/selection/table/CellModel.mjs */ "./node_modules/neo.mjs/src/selection/table/CellModel.mjs");
/* harmony import */ var _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/form/field/CheckBox.mjs */ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs");
/* harmony import */ var _src_filter_DateContainer_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/filter/DateContainer.mjs */ "./node_modules/neo.mjs/src/filter/DateContainer.mjs");
/* harmony import */ var _src_util_Date_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/util/Date.mjs */ "./node_modules/neo.mjs/src/util/Date.mjs");
/* harmony import */ var _MainStore_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MainStore.mjs */ "./node_modules/neo.mjs/examples/tableFiltering/MainStore.mjs");
/* harmony import */ var _src_filter_NumberContainer_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/filter/NumberContainer.mjs */ "./node_modules/neo.mjs/src/filter/NumberContainer.mjs");
/* harmony import */ var _src_form_field_Select_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/form/field/Select.mjs */ "./node_modules/neo.mjs/src/form/field/Select.mjs");
/* harmony import */ var _src_table_Container_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/table/Container.mjs */ "./node_modules/neo.mjs/src/table/Container.mjs");
/* harmony import */ var _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");











/**
 * @class TableFiltering.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_9__["default"] {
    static getConfig() {return {
        className: 'TableFiltering.MainContainer',
        ntype    : 'main-container',

        autoMount: true,
        layout   : {ntype: 'vbox', align: 'stretch'},
        style    : {padding: '20px'},

        items: [{
            ntype: 'toolbar',
            flex : '0 1 auto',
            style: {marginBottom: '5px', padding: 0},

            items: [{
                ntype: 'label',
                style: {margin: '4px 10px 0 5px'},
                text : 'Table Filtering Demo'
            }, {
                ntype: 'component',
                flex : 1
            }, {
                module        : _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
                checked       : true,
                hideLabel     : true,
                hideValueLabel: false,
                valueLabelText: 'Show Filters',

                listeners: {
                    change: function(opts) {
                        Neo.getComponent('myTableFilterContainer').showHeaderFilters = opts.value;
                    }
                }
            }]
        }, {
            module           : _src_table_Container_mjs__WEBPACK_IMPORTED_MODULE_8__["default"],
            id               : 'myTableFilterContainer',
            selectionModel   : _src_selection_table_CellModel_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            showHeaderFilters: true,
            store            : _MainStore_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
            width            : '100%',
            wrapperStyle     : {height: '300px'},

            columns: [{
                dataField: 'firstname',
                text     : 'Firstname'
            }, {
                dataField: 'lastname',
                text     : 'Lastname'
            }, {
                dataField: 'country',
                text     : 'Country',

                editorConfig: {
                    module: _src_form_field_Select_mjs__WEBPACK_IMPORTED_MODULE_7__["default"],

                    store: {
                        autoLoad   : true,
                        keyProperty: 'name',
                        url        : '../../resources/examples/data/countries.json',

                        model: {
                            fields: [{
                                name: 'code',
                                type: 'String'
                            }, {
                                name: 'name',
                                type: 'String'
                            }]
                        }
                    }
                }
            }, {
                dataField   : 'luckyNumber',
                filterConfig: {operator: '==='},
                text        : 'Lucky Number',

                editorConfig: {
                    module: _src_filter_NumberContainer_mjs__WEBPACK_IMPORTED_MODULE_6__["default"],

                    fieldConfig: {
                        maxValue: 10,
                        minValue: 1
                    }
                }
            }, {
                dataField   : 'specialDate',
                flex        : 2,
                filterConfig: {operator: '==='},
                renderer    : data => _src_util_Date_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].convertToyyyymmdd(data.value),
                text        : 'Special Date',

                editorConfig: {
                    module: _src_filter_DateContainer_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],

                    fieldConfig: {
                        matchPickerWidth: false
                    }
                }
            }, {
                dataField   : 'isOnline',
                filterConfig: {operator: '==='},
                renderer    : data => `<i class="fa fa-${data.value ? 'check' : 'times'}"></i>`,
                text        : 'Online',

                editorConfig: {
                    module: _src_filter_BooleanContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]
                }
            }]
        }]
    }}
}

Neo.applyClassConfig(MainContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/tableFiltering/MainModel.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/tableFiltering/MainModel.mjs ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainModel; });
/* harmony import */ var _src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class TableFiltering.MainModel
 * @extends Neo.data.Model
 */
class MainModel extends _src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        className: 'TableFiltering.MainModel',
        ntype    : 'main-model',

        fields: [{
            name: 'country',
            type: 'String'
        }, {
            name: 'firstname',
            type: 'String'
        }, {
            name: 'id',
            type: 'Int'
        }, {
            name: 'isOnline',
            type: 'Boolean'
        }, {
            name: 'lastname',
            type: 'String'
        }, {
            name: 'luckyNumber',
            type: 'Int'
        }, {
            name: 'specialDate',
            type: 'Date'
        }]
    }}
}

Neo.applyClassConfig(MainModel);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/tableFiltering/MainStore.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/tableFiltering/MainStore.mjs ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainStore; });
/* harmony import */ var _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");
/* harmony import */ var _MainModel_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainModel.mjs */ "./node_modules/neo.mjs/examples/tableFiltering/MainModel.mjs");



/**
 * @class TableFiltering.MainStore
 * @extends Neo.data.Store
 */
class MainStore extends _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        className: 'TableFiltering.MainStore',
        ntype    : 'main-store',

        keyProperty: 'id',
        model      : _MainModel_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],

        data: [
            {id:  1, country: 'Germany',       firstname: 'Tobias',  isOnline: true,  lastname: 'Uhlig',    luckyNumber: 1, specialDate: '2020-08-10'},
            {id:  2, country: 'United States', firstname: 'Rich',    isOnline: false, lastname: 'Waters',   luckyNumber: 2, specialDate: '2020-08-09'},
            {id:  3, country: 'Germany',       firstname: 'Nils',    isOnline: true,  lastname: 'Dehl',     luckyNumber: 3, specialDate: '2020-08-09'},
            {id:  4, country: 'United States', firstname: 'Gerard',  isOnline: true,  lastname: 'Horan',    luckyNumber: 1, specialDate: '2020-08-10'},
            {id:  5, country: 'Slovakia',      firstname: 'Jozef',   isOnline: false, lastname: 'Sakalos',  luckyNumber: 2, specialDate: '2020-08-08'},
            {id:  6, country: 'Germany',       firstname: 'Bastian', isOnline: false, lastname: 'Haustein', luckyNumber: 3, specialDate: '2020-08-10'},
            {id:  7, country: 'United States', firstname: 'Durlabh', isOnline: true,  lastname: 'Jain',     luckyNumber: 1, specialDate: '2020-08-08'},
            {id:  8, country: 'Canada',        firstname: 'Kevin',   isOnline: true,  lastname: 'Cassidy',  luckyNumber: 2, specialDate: '2020-08-10'},
            {id:  9, country: 'UK',            firstname: 'Nikola',  isOnline: true,  lastname: 'Markovic', luckyNumber: 3, specialDate: '2020-08-09'},
            {id: 10, country: 'United States', firstname: 'Hyle',    isOnline: false, lastname: 'Campbell', luckyNumber: 1, specialDate: '2020-08-10'}
        ]
    }}
}

Neo.applyClassConfig(MainStore);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/tableFiltering/app.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/tableFiltering/app.mjs ***!
  \**************************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainContainer.mjs */ "./node_modules/neo.mjs/examples/tableFiltering/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'examples/tableFiltering/',
    mainView: _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'TestApp'
});



/***/ }),

/***/ "./node_modules/neo.mjs/src/container/Viewport.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/neo.mjs/src/container/Viewport.mjs ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Viewport; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");


/**
 * @class Neo.container.Viewport
 * @extends Neo.container.Base
 */
class Viewport extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.container.Viewport'
         * @protected
         */
        className: 'Neo.container.Viewport',
        /**
         * @member {String} ntype='viewport'
         * @protected
         */
        ntype: 'viewport',
        /**
         * true applies 'neo-body-viewport' to the document.body
         * @member {Boolean} applyBodyCls=true
         */
        applyBodyCls: true,
        /**
         * @member {String[]} cls=['neo-viewport']
         */
        cls: ['neo-viewport']
    }}

    onConstructed() {
        super.onConstructed();

        if (this.applyBodyCls) {
            Neo.main.DomAccess.applyBodyCls({
                appName: this.appName,
                cls    : ['neo-body-viewport']
            });
        }
    }
}

Neo.applyClassConfig(Viewport);



/***/ }),

/***/ "./node_modules/neo.mjs/src/filter/BooleanContainer.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/neo.mjs/src/filter/BooleanContainer.mjs ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BooleanContainer; });
/* harmony import */ var _container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form/field/Radio.mjs */ "./node_modules/neo.mjs/src/form/field/Radio.mjs");



/**
 * @class Neo.filter.BooleanContainer
 * @extends Neo.container.Base
 */
class BooleanContainer extends _container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.filter.BooleanContainer'
         * @protected
         */
        className: 'Neo.filter.BooleanContainer',
        /**
         * @member {String} ntype='filter-booleancontainer'
         * @protected
         */
        ntype: 'filter-booleancontainer',
        /**
         * @member {Array} cls=['neo-filter-booleancontainer']
         */
        cls: ['neo-filter-booleancontainer'],
        /**
         * @member {Object} layout={ntype: 'hbox', align: 'center'}
         */
        layout: {ntype: 'hbox', align: 'center'},
        /**
         * Pass config to the Radio Fields
         * @member {Object|null} radioConfig=null
         */
        radioConfig: null,
        /**
         * @member {Boolean|null} value_=null
         */
        value_: null
    }}

    /**
     * Triggered after the value config got changed
     * @param {Boolean|null} value
     * @param {Boolean|null} oldValue
     */
    afterSetValue(value, oldValue) {
        if (oldValue !== undefined) {
            this.fire('change', {
                component: this,
                oldValue : oldValue,
                value    : value
            });
        }
    }

    /**
     *
     */
    createItems() {
        let me = this;

        const defaults = {
            module        : _form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            hideLabel     : true,
            hideValueLabel: false,
            listeners     : {change: me.onRadioChange, scope: me},
            name          : me.id
        };

        me.items = [{
            ...defaults,
            checked       : me.value === true,
            fieldValue    : true,
            valueLabelText: '<i class="fa fa-check"></i>',
            ...me.radioConfig || {}
        }, {
            ...defaults,
            checked       : me.value === false,
            fieldValue    : false,
            valueLabelText: '<i class="fa fa-times"></i>',
            ...me.radioConfig || {}
        }, {
            ...defaults,
            checked       : me.value === null,
            fieldValue    : null,
            valueLabelText: '<i class="fa fa-check"></i> <i class="fa fa-times"></i>',
            ...me.radioConfig || {}
        }];

        super.createItems();
    }

    /**
     *
     * @param {Object} data
     */
    onRadioChange(data) {
        if (data.value) {
            this.value = data.component.fieldValue;
        }
    }
}

Neo.applyClassConfig(BooleanContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/src/filter/DateContainer.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/neo.mjs/src/filter/DateContainer.mjs ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateContainer; });
/* harmony import */ var _form_field_Date_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form/field/Date.mjs */ "./node_modules/neo.mjs/src/form/field/Date.mjs");
/* harmony import */ var _NumberContainer_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NumberContainer.mjs */ "./node_modules/neo.mjs/src/filter/NumberContainer.mjs");



/**
 * @class Neo.filter.DateContainer
 * @extends Neo.filter.NumberContainer
 */
class DateContainer extends _NumberContainer_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.filter.DateContainer'
         * @protected
         */
        className: 'Neo.filter.DateContainer',
        /**
         * @member {String} ntype='filter-datecontainer'
         * @protected
         */
        ntype: 'filter-datecontainer',
        /**
         * @member {Neo.form.field.Base} fieldModule=Date
         */
        fieldModule: _form_field_Date_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]
    }}
}

Neo.applyClassConfig(DateContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/src/filter/NumberContainer.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/neo.mjs/src/filter/NumberContainer.mjs ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NumberContainer; });
/* harmony import */ var _container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form/field/Number.mjs */ "./node_modules/neo.mjs/src/form/field/Number.mjs");
/* harmony import */ var _ToggleOperatorsButton_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToggleOperatorsButton.mjs */ "./node_modules/neo.mjs/src/filter/ToggleOperatorsButton.mjs");




/**
 * @class Neo.filter.NumberContainer
 * @extends Neo.container.Base
 */
class NumberContainer extends _container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.filter.NumberContainer'
         * @protected
         */
        className: 'Neo.filter.NumberContainer',
        /**
         * @member {String} ntype='filter-numbercontainer'
         * @protected
         */
        ntype: 'filter-numbercontainer',
        /**
         * Pass config to the ToggleOperatorsButton
         * @member {Object|null} buttonConfig=null
         */
        buttonConfig: null,
        /**
         * @member {Array} cls=['neo-filter-numbercontainer']
         */
        cls: ['neo-filter-numbercontainer'],
        /**
         * @member {Neo.form.field.Base} fieldModule=Number
         */
        fieldModule: _form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
        /**
         * @member {Object} layout={ntype: 'hbox', align: 'stretch'}
         */
        layout: {ntype: 'hbox', align: 'stretch'},
        /**
         * Pass config to the Number Field
         * @member {Object|null} fieldConfig=null
         */
        fieldConfig: null,
        /**
         * @member {String|null} operator_=null
         */
        operator_: null,
        /**
         * @member {Boolean|null} value_=null
         */
        value_: null
    }}

    /**
     * Triggered after the operator config got changed
     * @param {String|null} value
     * @param {String|null} oldValue
     */
    afterSetOperator(value, oldValue) {
        if (oldValue !== undefined) {
            this.fire('operatorChange', {
                component: this,
                oldValue : oldValue,
                value    : value
            });
        }
    }

    /**
     * Triggered after the value config got changed
     * @param {Boolean|null} value
     * @param {Boolean|null} oldValue
     */
    afterSetValue(value, oldValue) {
        if (oldValue !== undefined) {
            this.fire('change', {
                component: this,
                oldValue : oldValue,
                value    : value
            });
        }
    }

    /**
     *
     */
    createItems() {
        let me = this;

        me.items = [{
            module   : _ToggleOperatorsButton_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            flex     : 'none',
            listeners: {change: me.onOperatorChange, scope: me},
            value    : me.operator,
            ...me.buttonConfig || {}
        }, {
            module   : me.fieldModule,
            flex     : '1 1 auto',
            hideLabel: true,
            listeners: {change: me.onValueChange, scope: me},
            ...me.fieldConfig || {}
        }];

        super.createItems();
    }

    /**
     *
     * @param {Object} data
     */
    onOperatorChange(data) {
        this.operator = data.component.value;
    }

    /**
     *
     * @param {Object} data
     */
    onValueChange(data) {
        this.value = data.component.value;
    }
}

Neo.applyClassConfig(NumberContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/src/filter/ToggleOperatorsButton.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/neo.mjs/src/filter/ToggleOperatorsButton.mjs ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ToggleOperatorsButton; });
/* harmony import */ var _button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button/Base.mjs */ "./node_modules/neo.mjs/src/button/Base.mjs");
/* harmony import */ var _collection_Filter_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../collection/Filter.mjs */ "./node_modules/neo.mjs/src/collection/Filter.mjs");



/**
 * @class Neo.filter.ToggleOperatorsButton
 * @extends Neo.button.Base
 */
class ToggleOperatorsButton extends _button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.filter.ToggleOperatorsButton'
         * @protected
         */
        className: 'Neo.filter.ToggleOperatorsButton',
        /**
         * @member {String} ntype='filter-toggleoperatorsbutton'
         * @protected
         */
        ntype: 'filter-toggleoperatorsbutton',
        /**
         * @member {String[]} operators_=['===', '>', '<']
         */
        operators_: ['===', '>', '<'],
        /**
         * @member {String|null} value_=null
         */
        value_: null
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        me.handler = me.onButtonClick;

        me.text = me.value || me.operators[0];
    }

    /**
     * Triggered after the value config got changed
     * @param {String|null} value
     * @param {String|null} oldValue
     */
    afterSetValue(value, oldValue) {
        if (oldValue !== undefined) {
            let me = this;

            me.text = value;

            me.fire('change', {
                component: me,
                oldValue : oldValue,
                value    : value
            });
        }
    }

    /**
     * Triggered before the operators config gets changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    beforeSetOperators(value, oldValue) {
        if (Array.isArray(value)) {
            let i   = 0,
                len = value.length;

            for (; i < len; i++) {
                if (this.beforeSetEnumValue(value[i], oldValue, 'operators', _collection_Filter_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].operators) !== value[i]) {
                    return oldValue;
                }
            }
        }

        return value;
    }

    /**
     *
     * @param {Object} data
     */
    onButtonClick(data) {
        let me    = this,
            index = (me.operators.indexOf(data.component.text) + 1) % me.operators.length;

        me.value = me.operators[index];
    }
}

Neo.applyClassConfig(ToggleOperatorsButton);



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

/***/ "./node_modules/neo.mjs/src/selection/table/CellModel.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/neo.mjs/src/selection/table/CellModel.mjs ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CellModel; });
/* harmony import */ var _Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model.mjs */ "./node_modules/neo.mjs/src/selection/Model.mjs");


/**
 * @class Neo.selection.table.CellModel
 * @extends Neo.selection.Model
 */
class CellModel extends _Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.selection.table.CellModel'
         * @protected
         */
        className: 'Neo.selection.table.CellModel',
        /**
         * @member {String} ntype='selection-table-cellmodel'
         * @protected
         */
        ntype: 'selection-table-cellmodel',
        /**
         * @member {String} cls='selection-cellmodel'
         * @protected
         */
        cls: 'neo-selection-cellmodel'
    }}

    /**
     *
     */
    addDomListener() {
        let me           = this,
            view         = me.view,
            domListeners = view.domListeners;

        domListeners.push({
            click   : me.onCellClick,
            delegate: '.neo-table-cell',
            scope   : me
        });

        view.domListeners = domListeners;
    }

    /**
     *
     * @param {Object} data
     */
    onCellClick(data) {
        let me   = this,
            id   = null,
            path = data.path,
            i    = 0,
            len  = path.length;

        for (; i < len; i++) {
            if (path[i].tagName === 'td') {
                id = path[i].id;
                break;
            }
        }

        if (id) {
            me.toggleSelection(id);
        }
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownDown(data) {
        this.onNavKeyRow(data, 1);
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownLeft(data) {
        this.onNavKeyColumn(data, -1);
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownRight(data) {
        this.onNavKeyColumn(data, 1);
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownUp(data) {
        this.onNavKeyRow(data, -1);
    }

    /**
     *
     * @param {Object} data
     * @param {Number} step
     */
    onNavKeyColumn(data, step) {
        let me            = this,
            view          = me.view,
            idArray       = data.path[0].id.split('__'),
            currentColumn = idArray[2],
            dataFields    = view.columns.map(c => c.dataField),
            newIndex      = (dataFields.indexOf(currentColumn) + step) % dataFields.length,
            id;

        while (newIndex < 0) {
            newIndex += dataFields.length;
        }

        idArray[2] = dataFields[newIndex];
        id = idArray.join('__');

        me.select(id);
        view.focus(id);
    }

    /**
     *
     * @param {Object} data
     * @param {Number} step
     */
    onNavKeyRow(data, step) {
        let me       = this,
            view     = me.view,
            store    = view.store,
            idArray  = data.path[0].id.split('__'),
            recordId = idArray[1],
            newIndex = (store.indexOf(recordId) + step) % store.getCount(),
            id;

        while (newIndex < 0) {
            newIndex += store.getCount();
        }

        idArray[1] = store.getKeyAt(newIndex);
        id = idArray.join('__');

        me.select(id);
        view.focus(id);
    }

    /**
     *
     * @param {Neo.component.Base} component
     */
    register(component) {
        super.register(component);

        let me   = this,
            id   = me.id,
            view = me.view;

        if (view.keys) {
            view.keys._keys.push(
                {fn: 'onKeyDownDown'  ,key: 'Down'  ,scope: id},
                {fn: 'onKeyDownLeft'  ,key: 'Left'  ,scope: id},
                {fn: 'onKeyDownRight' ,key: 'Right' ,scope: id},
                {fn: 'onKeyDownUp'    ,key: 'Up'    ,scope: id}
            );
        }
    }

    /**
     *
     */
    unregister() {
        let me   = this,
            id   = me.id,
            view = me.view;

        if (view.keys) {
            view.keys.removeKeys([
                {fn: 'onKeyDownDown'  ,key: 'Down'  ,scope: id},
                {fn: 'onKeyDownLeft'  ,key: 'Left'  ,scope: id},
                {fn: 'onKeyDownRight' ,key: 'Right' ,scope: id},
                {fn: 'onKeyDownUp'    ,key: 'Up'    ,scope: id}
            ]);
        }

        super.unregister();
    }
}

Neo.applyClassConfig(CellModel);



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy90YWJsZUZpbHRlcmluZy9NYWluQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy90YWJsZUZpbHRlcmluZy9NYWluTW9kZWwubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL3RhYmxlRmlsdGVyaW5nL01haW5TdG9yZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvdGFibGVGaWx0ZXJpbmcvYXBwLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL1ZpZXdwb3J0Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZmlsdGVyL0Jvb2xlYW5Db250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9maWx0ZXIvRGF0ZUNvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2ZpbHRlci9OdW1iZXJDb250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9maWx0ZXIvVG9nZ2xlT3BlcmF0b3JzQnV0dG9uLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9EYXRlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC90cmlnZ2VyL0RhdGUubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9zZWxlY3Rpb24vdGFibGUvQ2VsbE1vZGVsLm1qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFB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QTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLDhDQUE4QztBQUMvRCxpQkFBaUIsOENBQThDO0FBQy9ELGlCQUFpQiw4Q0FBOEM7QUFDL0QsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLDhDQUE4QztBQUMvRCxpQkFBaUIsOENBQThDO0FBQy9ELGlCQUFpQiw4Q0FBOEM7QUFDL0QsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLXRhYmxlRmlsdGVyaW5nLWFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb29sZWFuQ29udGFpbmVyIGZyb20gJy4uLy4uL3NyYy9maWx0ZXIvQm9vbGVhbkNvbnRhaW5lci5tanMnO1xuaW1wb3J0IENlbGxNb2RlbCAgICAgICAgZnJvbSAnLi4vLi4vc3JjL3NlbGVjdGlvbi90YWJsZS9DZWxsTW9kZWwubWpzJztcbmltcG9ydCBDaGVja0JveCAgICAgICAgIGZyb20gJy4uLy4uL3NyYy9mb3JtL2ZpZWxkL0NoZWNrQm94Lm1qcyc7XG5pbXBvcnQgRGF0ZUNvbnRhaW5lciAgICBmcm9tICcuLi8uLi9zcmMvZmlsdGVyL0RhdGVDb250YWluZXIubWpzJztcbmltcG9ydCBEYXRlVXRpbCAgICAgICAgIGZyb20gJy4uLy4uL3NyYy91dGlsL0RhdGUubWpzJztcbmltcG9ydCBNYWluU3RvcmUgICAgICAgIGZyb20gJy4vTWFpblN0b3JlLm1qcyc7XG5pbXBvcnQgTnVtYmVyQ29udGFpbmVyICBmcm9tICcuLi8uLi9zcmMvZmlsdGVyL051bWJlckNvbnRhaW5lci5tanMnO1xuaW1wb3J0IFNlbGVjdEZpZWxkICAgICAgZnJvbSAnLi4vLi4vc3JjL2Zvcm0vZmllbGQvU2VsZWN0Lm1qcyc7XG5pbXBvcnQgVGFibGVDb250YWluZXIgICBmcm9tICcuLi8uLi9zcmMvdGFibGUvQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgVmlld3BvcnQgICAgICAgICBmcm9tICcuLi8uLi9zcmMvY29udGFpbmVyL1ZpZXdwb3J0Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFRhYmxlRmlsdGVyaW5nLk1haW5Db250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuVmlld3BvcnRcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lciBleHRlbmRzIFZpZXdwb3J0IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogJ1RhYmxlRmlsdGVyaW5nLk1haW5Db250YWluZXInLFxuICAgICAgICBudHlwZSAgICA6ICdtYWluLWNvbnRhaW5lcicsXG5cbiAgICAgICAgYXV0b01vdW50OiB0cnVlLFxuICAgICAgICBsYXlvdXQgICA6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgc3R5bGUgICAgOiB7cGFkZGluZzogJzIwcHgnfSxcblxuICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgIG50eXBlOiAndG9vbGJhcicsXG4gICAgICAgICAgICBmbGV4IDogJzAgMSBhdXRvJyxcbiAgICAgICAgICAgIHN0eWxlOiB7bWFyZ2luQm90dG9tOiAnNXB4JywgcGFkZGluZzogMH0sXG5cbiAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgIG50eXBlOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7bWFyZ2luOiAnNHB4IDEwcHggMCA1cHgnfSxcbiAgICAgICAgICAgICAgICB0ZXh0IDogJ1RhYmxlIEZpbHRlcmluZyBEZW1vJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgICAgICBmbGV4IDogMVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgICAgICAgOiBDaGVja0JveCxcbiAgICAgICAgICAgICAgICBjaGVja2VkICAgICAgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBoaWRlTGFiZWwgICAgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBoaWRlVmFsdWVMYWJlbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmFsdWVMYWJlbFRleHQ6ICdTaG93IEZpbHRlcnMnLFxuXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24ob3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgTmVvLmdldENvbXBvbmVudCgnbXlUYWJsZUZpbHRlckNvbnRhaW5lcicpLnNob3dIZWFkZXJGaWx0ZXJzID0gb3B0cy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICAgICAgOiBUYWJsZUNvbnRhaW5lcixcbiAgICAgICAgICAgIGlkICAgICAgICAgICAgICAgOiAnbXlUYWJsZUZpbHRlckNvbnRhaW5lcicsXG4gICAgICAgICAgICBzZWxlY3Rpb25Nb2RlbCAgIDogQ2VsbE1vZGVsLFxuICAgICAgICAgICAgc2hvd0hlYWRlckZpbHRlcnM6IHRydWUsXG4gICAgICAgICAgICBzdG9yZSAgICAgICAgICAgIDogTWFpblN0b3JlLFxuICAgICAgICAgICAgd2lkdGggICAgICAgICAgICA6ICcxMDAlJyxcbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSAgICAgOiB7aGVpZ2h0OiAnMzAwcHgnfSxcblxuICAgICAgICAgICAgY29sdW1uczogW3tcbiAgICAgICAgICAgICAgICBkYXRhRmllbGQ6ICdmaXJzdG5hbWUnLFxuICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0ZpcnN0bmFtZSdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBkYXRhRmllbGQ6ICdsYXN0bmFtZScsXG4gICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnTGFzdG5hbWUnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZGF0YUZpZWxkOiAnY291bnRyeScsXG4gICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnQ291bnRyeScsXG5cbiAgICAgICAgICAgICAgICBlZGl0b3JDb25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiBTZWxlY3RGaWVsZCxcblxuICAgICAgICAgICAgICAgICAgICBzdG9yZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0xvYWQgICA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlQcm9wZXJ0eTogJ25hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsICAgICAgICA6ICcuLi8uLi9yZXNvdXJjZXMvZXhhbXBsZXMvZGF0YS9jb3VudHJpZXMuanNvbicsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY29kZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBkYXRhRmllbGQgICA6ICdsdWNreU51bWJlcicsXG4gICAgICAgICAgICAgICAgZmlsdGVyQ29uZmlnOiB7b3BlcmF0b3I6ICc9PT0nfSxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgICAgICA6ICdMdWNreSBOdW1iZXInLFxuXG4gICAgICAgICAgICAgICAgZWRpdG9yQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZTogTnVtYmVyQ29udGFpbmVyLFxuXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhWYWx1ZTogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5WYWx1ZTogMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGRhdGFGaWVsZCAgIDogJ3NwZWNpYWxEYXRlJyxcbiAgICAgICAgICAgICAgICBmbGV4ICAgICAgICA6IDIsXG4gICAgICAgICAgICAgICAgZmlsdGVyQ29uZmlnOiB7b3BlcmF0b3I6ICc9PT0nfSxcbiAgICAgICAgICAgICAgICByZW5kZXJlciAgICA6IGRhdGEgPT4gRGF0ZVV0aWwuY29udmVydFRveXl5eW1tZGQoZGF0YS52YWx1ZSksXG4gICAgICAgICAgICAgICAgdGV4dCAgICAgICAgOiAnU3BlY2lhbCBEYXRlJyxcblxuICAgICAgICAgICAgICAgIGVkaXRvckNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGU6IERhdGVDb250YWluZXIsXG5cbiAgICAgICAgICAgICAgICAgICAgZmllbGRDb25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoUGlja2VyV2lkdGg6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZGF0YUZpZWxkICAgOiAnaXNPbmxpbmUnLFxuICAgICAgICAgICAgICAgIGZpbHRlckNvbmZpZzoge29wZXJhdG9yOiAnPT09J30sXG4gICAgICAgICAgICAgICAgcmVuZGVyZXIgICAgOiBkYXRhID0+IGA8aSBjbGFzcz1cImZhIGZhLSR7ZGF0YS52YWx1ZSA/ICdjaGVjaycgOiAndGltZXMnfVwiPjwvaT5gLFxuICAgICAgICAgICAgICAgIHRleHQgICAgICAgIDogJ09ubGluZScsXG5cbiAgICAgICAgICAgICAgICBlZGl0b3JDb25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiBCb29sZWFuQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyKTtcblxuZXhwb3J0IHtNYWluQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBNb2RlbCAgZnJvbSAnLi4vLi4vc3JjL2RhdGEvTW9kZWwubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgVGFibGVGaWx0ZXJpbmcuTWFpbk1vZGVsXG4gKiBAZXh0ZW5kcyBOZW8uZGF0YS5Nb2RlbFxuICovXG5jbGFzcyBNYWluTW9kZWwgZXh0ZW5kcyBNb2RlbCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdUYWJsZUZpbHRlcmluZy5NYWluTW9kZWwnLFxuICAgICAgICBudHlwZSAgICA6ICdtYWluLW1vZGVsJyxcblxuICAgICAgICBmaWVsZHM6IFt7XG4gICAgICAgICAgICBuYW1lOiAnY291bnRyeScsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZmlyc3RuYW1lJyxcbiAgICAgICAgICAgIHR5cGU6ICdTdHJpbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICB0eXBlOiAnSW50J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnaXNPbmxpbmUnLFxuICAgICAgICAgICAgdHlwZTogJ0Jvb2xlYW4nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdsYXN0bmFtZScsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnbHVja3lOdW1iZXInLFxuICAgICAgICAgICAgdHlwZTogJ0ludCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3NwZWNpYWxEYXRlJyxcbiAgICAgICAgICAgIHR5cGU6ICdEYXRlJ1xuICAgICAgICB9XVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5Nb2RlbCk7XG5cbmV4cG9ydCB7TWFpbk1vZGVsIGFzIGRlZmF1bHR9OyIsImltcG9ydCBTdG9yZSBmcm9tICcuLi8uLi9zcmMvZGF0YS9TdG9yZS5tanMnO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4vTWFpbk1vZGVsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFRhYmxlRmlsdGVyaW5nLk1haW5TdG9yZVxuICogQGV4dGVuZHMgTmVvLmRhdGEuU3RvcmVcbiAqL1xuY2xhc3MgTWFpblN0b3JlIGV4dGVuZHMgU3RvcmUge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnVGFibGVGaWx0ZXJpbmcuTWFpblN0b3JlJyxcbiAgICAgICAgbnR5cGUgICAgOiAnbWFpbi1zdG9yZScsXG5cbiAgICAgICAga2V5UHJvcGVydHk6ICdpZCcsXG4gICAgICAgIG1vZGVsICAgICAgOiBNb2RlbCxcblxuICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICB7aWQ6ICAxLCBjb3VudHJ5OiAnR2VybWFueScsICAgICAgIGZpcnN0bmFtZTogJ1RvYmlhcycsICBpc09ubGluZTogdHJ1ZSwgIGxhc3RuYW1lOiAnVWhsaWcnLCAgICBsdWNreU51bWJlcjogMSwgc3BlY2lhbERhdGU6ICcyMDIwLTA4LTEwJ30sXG4gICAgICAgICAgICB7aWQ6ICAyLCBjb3VudHJ5OiAnVW5pdGVkIFN0YXRlcycsIGZpcnN0bmFtZTogJ1JpY2gnLCAgICBpc09ubGluZTogZmFsc2UsIGxhc3RuYW1lOiAnV2F0ZXJzJywgICBsdWNreU51bWJlcjogMiwgc3BlY2lhbERhdGU6ICcyMDIwLTA4LTA5J30sXG4gICAgICAgICAgICB7aWQ6ICAzLCBjb3VudHJ5OiAnR2VybWFueScsICAgICAgIGZpcnN0bmFtZTogJ05pbHMnLCAgICBpc09ubGluZTogdHJ1ZSwgIGxhc3RuYW1lOiAnRGVobCcsICAgICBsdWNreU51bWJlcjogMywgc3BlY2lhbERhdGU6ICcyMDIwLTA4LTA5J30sXG4gICAgICAgICAgICB7aWQ6ICA0LCBjb3VudHJ5OiAnVW5pdGVkIFN0YXRlcycsIGZpcnN0bmFtZTogJ0dlcmFyZCcsICBpc09ubGluZTogdHJ1ZSwgIGxhc3RuYW1lOiAnSG9yYW4nLCAgICBsdWNreU51bWJlcjogMSwgc3BlY2lhbERhdGU6ICcyMDIwLTA4LTEwJ30sXG4gICAgICAgICAgICB7aWQ6ICA1LCBjb3VudHJ5OiAnU2xvdmFraWEnLCAgICAgIGZpcnN0bmFtZTogJ0pvemVmJywgICBpc09ubGluZTogZmFsc2UsIGxhc3RuYW1lOiAnU2FrYWxvcycsICBsdWNreU51bWJlcjogMiwgc3BlY2lhbERhdGU6ICcyMDIwLTA4LTA4J30sXG4gICAgICAgICAgICB7aWQ6ICA2LCBjb3VudHJ5OiAnR2VybWFueScsICAgICAgIGZpcnN0bmFtZTogJ0Jhc3RpYW4nLCBpc09ubGluZTogZmFsc2UsIGxhc3RuYW1lOiAnSGF1c3RlaW4nLCBsdWNreU51bWJlcjogMywgc3BlY2lhbERhdGU6ICcyMDIwLTA4LTEwJ30sXG4gICAgICAgICAgICB7aWQ6ICA3LCBjb3VudHJ5OiAnVW5pdGVkIFN0YXRlcycsIGZpcnN0bmFtZTogJ0R1cmxhYmgnLCBpc09ubGluZTogdHJ1ZSwgIGxhc3RuYW1lOiAnSmFpbicsICAgICBsdWNreU51bWJlcjogMSwgc3BlY2lhbERhdGU6ICcyMDIwLTA4LTA4J30sXG4gICAgICAgICAgICB7aWQ6ICA4LCBjb3VudHJ5OiAnQ2FuYWRhJywgICAgICAgIGZpcnN0bmFtZTogJ0tldmluJywgICBpc09ubGluZTogdHJ1ZSwgIGxhc3RuYW1lOiAnQ2Fzc2lkeScsICBsdWNreU51bWJlcjogMiwgc3BlY2lhbERhdGU6ICcyMDIwLTA4LTEwJ30sXG4gICAgICAgICAgICB7aWQ6ICA5LCBjb3VudHJ5OiAnVUsnLCAgICAgICAgICAgIGZpcnN0bmFtZTogJ05pa29sYScsICBpc09ubGluZTogdHJ1ZSwgIGxhc3RuYW1lOiAnTWFya292aWMnLCBsdWNreU51bWJlcjogMywgc3BlY2lhbERhdGU6ICcyMDIwLTA4LTA5J30sXG4gICAgICAgICAgICB7aWQ6IDEwLCBjb3VudHJ5OiAnVW5pdGVkIFN0YXRlcycsIGZpcnN0bmFtZTogJ0h5bGUnLCAgICBpc09ubGluZTogZmFsc2UsIGxhc3RuYW1lOiAnQ2FtcGJlbGwnLCBsdWNreU51bWJlcjogMSwgc3BlY2lhbERhdGU6ICcyMDIwLTA4LTEwJ31cbiAgICAgICAgXVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5TdG9yZSk7XG5cbmV4cG9ydCB7TWFpblN0b3JlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gJy4vTWFpbkNvbnRhaW5lci5tanMnO1xuXG5jb25zdCBvblN0YXJ0ID0gKCkgPT4gTmVvLmFwcCh7XG4gICAgYXBwUGF0aCA6ICdleGFtcGxlcy90YWJsZUZpbHRlcmluZy8nLFxuICAgIG1haW5WaWV3OiBNYWluQ29udGFpbmVyLFxuICAgIG5hbWUgICAgOiAnVGVzdEFwcCdcbn0pO1xuXG5leHBvcnQge29uU3RhcnQgYXMgb25TdGFydH07IiwiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvbnRhaW5lci5WaWV3cG9ydFxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5CYXNlXG4gKi9cbmNsYXNzIFZpZXdwb3J0IGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbnRhaW5lci5WaWV3cG9ydCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbnRhaW5lci5WaWV3cG9ydCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd2aWV3cG9ydCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICd2aWV3cG9ydCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB0cnVlIGFwcGxpZXMgJ25lby1ib2R5LXZpZXdwb3J0JyB0byB0aGUgZG9jdW1lbnQuYm9keVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBhcHBseUJvZHlDbHM9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgYXBwbHlCb2R5Q2xzOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby12aWV3cG9ydCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLXZpZXdwb3J0J11cbiAgICB9fVxuXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmFwcGx5Qm9keUNscykge1xuICAgICAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmFwcGx5Qm9keUNscyh7XG4gICAgICAgICAgICAgICAgYXBwTmFtZTogdGhpcy5hcHBOYW1lLFxuICAgICAgICAgICAgICAgIGNscyAgICA6IFsnbmVvLWJvZHktdmlld3BvcnQnXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFZpZXdwb3J0KTtcblxuZXhwb3J0IHtWaWV3cG9ydCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL2NvbnRhaW5lci9CYXNlLm1qcyc7XG5pbXBvcnQgUmFkaW8gICAgIGZyb20gJy4uL2Zvcm0vZmllbGQvUmFkaW8ubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmZpbHRlci5Cb29sZWFuQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgQm9vbGVhbkNvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5maWx0ZXIuQm9vbGVhbkNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmZpbHRlci5Cb29sZWFuQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2ZpbHRlci1ib29sZWFuY29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2ZpbHRlci1ib29sZWFuY29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBjbHM9WyduZW8tZmlsdGVyLWJvb2xlYW5jb250YWluZXInXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1maWx0ZXItYm9vbGVhbmNvbnRhaW5lciddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsYXlvdXQ9e250eXBlOiAnaGJveCcsIGFsaWduOiAnY2VudGVyJ31cbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCcsIGFsaWduOiAnY2VudGVyJ30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQYXNzIGNvbmZpZyB0byB0aGUgUmFkaW8gRmllbGRzXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSByYWRpb0NvbmZpZz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICByYWRpb0NvbmZpZzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW58bnVsbH0gdmFsdWVfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlXzogbnVsbFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHZhbHVlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbnxudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbnxudWxsfSBvbGRWYWx1ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0VmFsdWUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgICAgICAgICAgb2xkVmFsdWUgOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgY3JlYXRlSXRlbXMoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogUmFkaW8sXG4gICAgICAgICAgICBoaWRlTGFiZWwgICAgIDogdHJ1ZSxcbiAgICAgICAgICAgIGhpZGVWYWx1ZUxhYmVsOiBmYWxzZSxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgICAgOiB7Y2hhbmdlOiBtZS5vblJhZGlvQ2hhbmdlLCBzY29wZTogbWV9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgICA6IG1lLmlkXG4gICAgICAgIH07XG5cbiAgICAgICAgbWUuaXRlbXMgPSBbe1xuICAgICAgICAgICAgLi4uZGVmYXVsdHMsXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogbWUudmFsdWUgPT09IHRydWUsXG4gICAgICAgICAgICBmaWVsZFZhbHVlICAgIDogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlTGFiZWxUZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiPjwvaT4nLFxuICAgICAgICAgICAgLi4ubWUucmFkaW9Db25maWcgfHwge31cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgLi4uZGVmYXVsdHMsXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogbWUudmFsdWUgPT09IGZhbHNlLFxuICAgICAgICAgICAgZmllbGRWYWx1ZSAgICA6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWVMYWJlbFRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPicsXG4gICAgICAgICAgICAuLi5tZS5yYWRpb0NvbmZpZyB8fCB7fVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAuLi5kZWZhdWx0cyxcbiAgICAgICAgICAgIGNoZWNrZWQgICAgICAgOiBtZS52YWx1ZSA9PT0gbnVsbCxcbiAgICAgICAgICAgIGZpZWxkVmFsdWUgICAgOiBudWxsLFxuICAgICAgICAgICAgdmFsdWVMYWJlbFRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLWNoZWNrXCI+PC9pPiA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPicsXG4gICAgICAgICAgICAuLi5tZS5yYWRpb0NvbmZpZyB8fCB7fVxuICAgICAgICB9XTtcblxuICAgICAgICBzdXBlci5jcmVhdGVJdGVtcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvblJhZGlvQ2hhbmdlKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBkYXRhLmNvbXBvbmVudC5maWVsZFZhbHVlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCb29sZWFuQ29udGFpbmVyKTtcblxuZXhwb3J0IHtCb29sZWFuQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBEYXRlICAgICAgICAgICAgZnJvbSAnLi4vZm9ybS9maWVsZC9EYXRlLm1qcyc7XG5pbXBvcnQgTnVtYmVyQ29udGFpbmVyIGZyb20gJy4vTnVtYmVyQ29udGFpbmVyLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5maWx0ZXIuRGF0ZUNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmZpbHRlci5OdW1iZXJDb250YWluZXJcbiAqL1xuY2xhc3MgRGF0ZUNvbnRhaW5lciBleHRlbmRzIE51bWJlckNvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5maWx0ZXIuRGF0ZUNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmZpbHRlci5EYXRlQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2ZpbHRlci1kYXRlY29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2ZpbHRlci1kYXRlY29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5mb3JtLmZpZWxkLkJhc2V9IGZpZWxkTW9kdWxlPURhdGVcbiAgICAgICAgICovXG4gICAgICAgIGZpZWxkTW9kdWxlOiBEYXRlXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRGF0ZUNvbnRhaW5lcik7XG5cbmV4cG9ydCB7RGF0ZUNvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29udGFpbmVyICAgICAgICAgICAgIGZyb20gJy4uL2NvbnRhaW5lci9CYXNlLm1qcyc7XG5pbXBvcnQgTnVtYmVyICAgICAgICAgICAgICAgIGZyb20gJy4uL2Zvcm0vZmllbGQvTnVtYmVyLm1qcyc7XG5pbXBvcnQgVG9nZ2xlT3BlcmF0b3JzQnV0dG9uIGZyb20gJy4vVG9nZ2xlT3BlcmF0b3JzQnV0dG9uLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5maWx0ZXIuTnVtYmVyQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgTnVtYmVyQ29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmZpbHRlci5OdW1iZXJDb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5maWx0ZXIuTnVtYmVyQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2ZpbHRlci1udW1iZXJjb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnZmlsdGVyLW51bWJlcmNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQYXNzIGNvbmZpZyB0byB0aGUgVG9nZ2xlT3BlcmF0b3JzQnV0dG9uXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBidXR0b25Db25maWc9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgYnV0dG9uQ29uZmlnOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGNscz1bJ25lby1maWx0ZXItbnVtYmVyY29udGFpbmVyJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tZmlsdGVyLW51bWJlcmNvbnRhaW5lciddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmZvcm0uZmllbGQuQmFzZX0gZmllbGRNb2R1bGU9TnVtYmVyXG4gICAgICAgICAqL1xuICAgICAgICBmaWVsZE1vZHVsZTogTnVtYmVyLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsYXlvdXQ9e250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhc3MgY29uZmlnIHRvIHRoZSBOdW1iZXIgRmllbGRcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IGZpZWxkQ29uZmlnPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGZpZWxkQ29uZmlnOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IG9wZXJhdG9yXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBvcGVyYXRvcl86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufG51bGx9IHZhbHVlXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZV86IG51bGxcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBvcGVyYXRvciBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICovXG4gICAgYWZ0ZXJTZXRPcGVyYXRvcih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZSgnb3BlcmF0b3JDaGFuZ2UnLCB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICAgICAgICAgIG9sZFZhbHVlIDogb2xkVmFsdWUsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiB2YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHZhbHVlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbnxudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbnxudWxsfSBvbGRWYWx1ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0VmFsdWUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgICAgICAgICAgb2xkVmFsdWUgOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgY3JlYXRlSXRlbXMoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuaXRlbXMgPSBbe1xuICAgICAgICAgICAgbW9kdWxlICAgOiBUb2dnbGVPcGVyYXRvcnNCdXR0b24sXG4gICAgICAgICAgICBmbGV4ICAgICA6ICdub25lJyxcbiAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogbWUub25PcGVyYXRvckNoYW5nZSwgc2NvcGU6IG1lfSxcbiAgICAgICAgICAgIHZhbHVlICAgIDogbWUub3BlcmF0b3IsXG4gICAgICAgICAgICAuLi5tZS5idXR0b25Db25maWcgfHwge31cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgOiBtZS5maWVsZE1vZHVsZSxcbiAgICAgICAgICAgIGZsZXggICAgIDogJzEgMSBhdXRvJyxcbiAgICAgICAgICAgIGhpZGVMYWJlbDogdHJ1ZSxcbiAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogbWUub25WYWx1ZUNoYW5nZSwgc2NvcGU6IG1lfSxcbiAgICAgICAgICAgIC4uLm1lLmZpZWxkQ29uZmlnIHx8IHt9XG4gICAgICAgIH1dO1xuXG4gICAgICAgIHN1cGVyLmNyZWF0ZUl0ZW1zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uT3BlcmF0b3JDaGFuZ2UoZGF0YSkge1xuICAgICAgICB0aGlzLm9wZXJhdG9yID0gZGF0YS5jb21wb25lbnQudmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uVmFsdWVDaGFuZ2UoZGF0YSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gZGF0YS5jb21wb25lbnQudmFsdWU7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhOdW1iZXJDb250YWluZXIpO1xuXG5leHBvcnQge051bWJlckNvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9CYXNlLm1qcyc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uL2NvbGxlY3Rpb24vRmlsdGVyLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5maWx0ZXIuVG9nZ2xlT3BlcmF0b3JzQnV0dG9uXG4gKiBAZXh0ZW5kcyBOZW8uYnV0dG9uLkJhc2VcbiAqL1xuY2xhc3MgVG9nZ2xlT3BlcmF0b3JzQnV0dG9uIGV4dGVuZHMgQnV0dG9uIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmZpbHRlci5Ub2dnbGVPcGVyYXRvcnNCdXR0b24nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5maWx0ZXIuVG9nZ2xlT3BlcmF0b3JzQnV0dG9uJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2ZpbHRlci10b2dnbGVvcGVyYXRvcnNidXR0b24nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnZmlsdGVyLXRvZ2dsZW9wZXJhdG9yc2J1dHRvbicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gb3BlcmF0b3JzXz1bJz09PScsICc+JywgJzwnXVxuICAgICAgICAgKi9cbiAgICAgICAgb3BlcmF0b3JzXzogWyc9PT0nLCAnPicsICc8J10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gdmFsdWVfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlXzogbnVsbFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmhhbmRsZXIgPSBtZS5vbkJ1dHRvbkNsaWNrO1xuXG4gICAgICAgIG1lLnRleHQgPSBtZS52YWx1ZSB8fCBtZS5vcGVyYXRvcnNbMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB2YWx1ZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICovXG4gICAgYWZ0ZXJTZXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgICAgIG1lLnRleHQgPSB2YWx1ZTtcblxuICAgICAgICAgICAgbWUuZmlyZSgnY2hhbmdlJywge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogbWUsXG4gICAgICAgICAgICAgICAgb2xkVmFsdWUgOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIG9wZXJhdG9ycyBjb25maWcgZ2V0cyBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldE9wZXJhdG9ycyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBsZXQgaSAgID0gMCxcbiAgICAgICAgICAgICAgICBsZW4gPSB2YWx1ZS5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iZWZvcmVTZXRFbnVtVmFsdWUodmFsdWVbaV0sIG9sZFZhbHVlLCAnb3BlcmF0b3JzJywgRmlsdGVyLm9wZXJhdG9ycykgIT09IHZhbHVlW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbGRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgaW5kZXggPSAobWUub3BlcmF0b3JzLmluZGV4T2YoZGF0YS5jb21wb25lbnQudGV4dCkgKyAxKSAlIG1lLm9wZXJhdG9ycy5sZW5ndGg7XG5cbiAgICAgICAgbWUudmFsdWUgPSBtZS5vcGVyYXRvcnNbaW5kZXhdO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVG9nZ2xlT3BlcmF0b3JzQnV0dG9uKTtcblxuZXhwb3J0IHtUb2dnbGVPcGVyYXRvcnNCdXR0b24gYXMgZGVmYXVsdH07IiwiaW1wb3J0IERhdGVTZWxlY3RvciBmcm9tICcuLi8uLi9jb21wb25lbnQvRGF0ZVNlbGVjdG9yLm1qcydcbmltcG9ydCBEYXRlVHJpZ2dlciAgZnJvbSAnLi90cmlnZ2VyL0RhdGUubWpzJ1xuaW1wb3J0IERhdGVVdGlsICAgICBmcm9tICcuLi8uLi91dGlsL0RhdGUubWpzJztcbmltcG9ydCBQaWNrZXIgICAgICAgZnJvbSAnLi9QaWNrZXIubWpzJztcbmltcG9ydCBWRG9tVXRpbCAgICAgZnJvbSAnLi4vLi4vdXRpbC9WRG9tLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5mb3JtLmZpZWxkLkRhdGVcbiAqIEBleHRlbmRzIE5lby5mb3JtLmZpZWxkLlBpY2tlclxuICovXG5jbGFzcyBEYXRlRmllbGQgZXh0ZW5kcyBQaWNrZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZm9ybS5maWVsZC5EYXRlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uZm9ybS5maWVsZC5EYXRlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2RhdGVmaWVsZCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdkYXRlZmllbGQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1kYXRlZmllbGQnLCAnbmVvLXBpY2tlcmZpZWxkJywgJ25lby10ZXh0ZmllbGQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1kYXRlZmllbGQnLCAnbmVvLXBpY2tlcmZpZWxkJywgJ25lby10ZXh0ZmllbGQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb21wb25lbnQuRGF0ZVNlbGVjdG9yfSBkYXRlU2VsZWN0b3I9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBkYXRlU2VsZWN0b3I6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gZGF0ZVNlbGVjdG9yQ29uZmlnPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGRhdGVTZWxlY3RvckNvbmZpZzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgdG8gaGlkZSB0aGUgRGF0ZVBpY2tlciB3aGVuIHNlbGVjdGluZyBhIGRheVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBoaWRlUGlja2VyT25TZWxlY3Q9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGhpZGVQaWNrZXJPblNlbGVjdDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGlucHV0VHlwZT0nZGF0ZSdcbiAgICAgICAgICovXG4gICAgICAgIGlucHV0VHlwZTogJ2RhdGUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBwaWNrZXJIZWlnaHQ9MjI1XG4gICAgICAgICAqL1xuICAgICAgICBwaWNrZXJIZWlnaHQ6IDIyNSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gcGlja2VyV2lkdGg9MjAwXG4gICAgICAgICAqL1xuICAgICAgICBwaWNrZXJXaWR0aDogMjAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fE9iamVjdFtdfSB0cmlnZ2Vycz1be21vZHVsZTogRGF0ZVRyaWdnZXJ9XVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB0cmlnZ2VyczogW3tcbiAgICAgICAgICAgIG1vZHVsZTogRGF0ZVRyaWdnZXJcbiAgICAgICAgfV1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5kYXRlU2VsZWN0b3IgPSBOZW8uY3JlYXRlKERhdGVTZWxlY3Rvciwge1xuICAgICAgICAgICAgZGF5TmFtZUZvcm1hdDogJ3Nob3J0JyxcbiAgICAgICAgICAgIHZhbHVlICAgICAgICA6IG1lLnZhbHVlICB8fCBEYXRlVXRpbC5jb252ZXJ0VG95eXl5bW1kZChuZXcgRGF0ZSgpKSxcbiAgICAgICAgICAgIC4uLm1lLmRhdGVTZWxlY3RvckNvbmZpZyB8fCB7fVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5kYXRlU2VsZWN0b3Iua2V5cy5fa2V5cy5wdXNoKFxuICAgICAgICAgICAge2ZuOiAnb25Db250YWluZXJLZXlEb3duRXNjYXBlJywga2V5OiAnRXNjYXBlJywgc2NvcGU6IG1lLmlkfVxuICAgICAgICApO1xuXG4gICAgICAgIG1lLmRhdGVTZWxlY3Rvci5vbih7XG4gICAgICAgICAgICBjaGFuZ2U6IG1lLm9uRGF0ZVBpY2tlckNoYW5nZSxcbiAgICAgICAgICAgIHNjb3BlIDogbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5EYXRlU2VsZWN0b3J9XG4gICAgICovXG4gICAgY3JlYXRlUGlja2VyQ29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRlU2VsZWN0b3I7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25Db250YWluZXJLZXlEb3duRXNjYXBlKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5oaWRlUGlja2VyKCk7XG4gICAgICAgIG1lLmZvY3VzKG1lLmdldElucHV0RWxJZCgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICovXG4gICAgb25EYXRlUGlja2VyQ2hhbmdlKG9wdHMpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgaWYgKG1lLmhpZGVQaWNrZXJPblNlbGVjdCkge1xuICAgICAgICAgICAgVkRvbVV0aWwucmVtb3ZlVmRvbUNoaWxkKHZkb20sIG1lLmdldFBpY2tlcklkKCkpO1xuXG4gICAgICAgICAgICBtZS5wcm9taXNlVmRvbVVwZGF0ZSgpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgbWUudmFsdWUgPSBvcHRzLnZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS52YWx1ZSA9IG9wdHMudmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uS2V5RG93bkVudGVyKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUucGlja2VySXNNb3VudGVkKSB7XG4gICAgICAgICAgICBtZS5kYXRlU2VsZWN0b3IuZm9jdXNDdXJyZW50SXRlbSgpO1xuICAgICAgICAgICAgc3VwZXIub25LZXlEb3duRW50ZXIoZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdXBlci5vbktleURvd25FbnRlcihkYXRhLCBtZS5kYXRlU2VsZWN0b3IuZm9jdXNDdXJyZW50SXRlbSwgbWUuZGF0ZVNlbGVjdG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uSW5wdXRWYWx1ZUNoYW5nZShkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2YWx1ZSAgICA9IGRhdGEudmFsdWUsXG4gICAgICAgICAgICBvbGRWYWx1ZSA9IG1lLnZhbHVlO1xuXG4gICAgICAgIGlmIChkYXRhLnZhbGlkID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzdXBlci5vbklucHV0VmFsdWVDaGFuZ2UoZGF0YSk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBtZS5kYXRlU2VsZWN0b3IudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRGF0ZUZpZWxkKTtcblxuZXhwb3J0IHtEYXRlRmllbGQgYXMgZGVmYXVsdH07IiwiaW1wb3J0IFBpY2tlciBmcm9tICcuL1BpY2tlci5tanMnO1xuXG4vKipcbiAqIHVzZWQgYnkgZm9ybS5maWVsZC5EYXRlXG4gKiBAY2xhc3MgTmVvLmZvcm0uZmllbGQudHJpZ2dlci5EYXRlXG4gKiBAZXh0ZW5kcyBOZW8uZm9ybS5maWVsZC50cmlnZ2VyLlBpY2tlclxuICovXG5jbGFzcyBEYXRlIGV4dGVuZHMgUGlja2VyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmZvcm0uZmllbGQudHJpZ2dlci5EYXRlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uZm9ybS5maWVsZC50cmlnZ2VyLkRhdGUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndHJpZ2dlci1kYXRlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3RyaWdnZXItZGF0ZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gaWNvbkNscz0nZmEgZmEtY2FsZW5kYXItYWx0J1xuICAgICAgICAgKi9cbiAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWNhbGVuZGFyLWFsdCdcbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhEYXRlKTtcblxuZXhwb3J0IHtEYXRlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBNb2RlbCBmcm9tICcuLi9Nb2RlbC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uc2VsZWN0aW9uLnRhYmxlLkNlbGxNb2RlbFxuICogQGV4dGVuZHMgTmVvLnNlbGVjdGlvbi5Nb2RlbFxuICovXG5jbGFzcyBDZWxsTW9kZWwgZXh0ZW5kcyBNb2RlbCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5zZWxlY3Rpb24udGFibGUuQ2VsbE1vZGVsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uc2VsZWN0aW9uLnRhYmxlLkNlbGxNb2RlbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdzZWxlY3Rpb24tdGFibGUtY2VsbG1vZGVsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3NlbGVjdGlvbi10YWJsZS1jZWxsbW9kZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbHM9J3NlbGVjdGlvbi1jZWxsbW9kZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsczogJ25lby1zZWxlY3Rpb24tY2VsbG1vZGVsJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGFkZERvbUxpc3RlbmVyKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZpZXcgICAgICAgICA9IG1lLnZpZXcsXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSB2aWV3LmRvbUxpc3RlbmVycztcblxuICAgICAgICBkb21MaXN0ZW5lcnMucHVzaCh7XG4gICAgICAgICAgICBjbGljayAgIDogbWUub25DZWxsQ2xpY2ssXG4gICAgICAgICAgICBkZWxlZ2F0ZTogJy5uZW8tdGFibGUtY2VsbCcsXG4gICAgICAgICAgICBzY29wZSAgIDogbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmlldy5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uQ2VsbENsaWNrKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgaWQgICA9IG51bGwsXG4gICAgICAgICAgICBwYXRoID0gZGF0YS5wYXRoLFxuICAgICAgICAgICAgaSAgICA9IDAsXG4gICAgICAgICAgICBsZW4gID0gcGF0aC5sZW5ndGg7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKHBhdGhbaV0udGFnTmFtZSA9PT0gJ3RkJykge1xuICAgICAgICAgICAgICAgIGlkID0gcGF0aFtpXS5pZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpZCkge1xuICAgICAgICAgICAgbWUudG9nZ2xlU2VsZWN0aW9uKGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbktleURvd25Eb3duKGRhdGEpIHtcbiAgICAgICAgdGhpcy5vbk5hdktleVJvdyhkYXRhLCAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25LZXlEb3duTGVmdChkYXRhKSB7XG4gICAgICAgIHRoaXMub25OYXZLZXlDb2x1bW4oZGF0YSwgLTEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbktleURvd25SaWdodChkYXRhKSB7XG4gICAgICAgIHRoaXMub25OYXZLZXlDb2x1bW4oZGF0YSwgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uS2V5RG93blVwKGRhdGEpIHtcbiAgICAgICAgdGhpcy5vbk5hdktleVJvdyhkYXRhLCAtMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzdGVwXG4gICAgICovXG4gICAgb25OYXZLZXlDb2x1bW4oZGF0YSwgc3RlcCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2aWV3ICAgICAgICAgID0gbWUudmlldyxcbiAgICAgICAgICAgIGlkQXJyYXkgICAgICAgPSBkYXRhLnBhdGhbMF0uaWQuc3BsaXQoJ19fJyksXG4gICAgICAgICAgICBjdXJyZW50Q29sdW1uID0gaWRBcnJheVsyXSxcbiAgICAgICAgICAgIGRhdGFGaWVsZHMgICAgPSB2aWV3LmNvbHVtbnMubWFwKGMgPT4gYy5kYXRhRmllbGQpLFxuICAgICAgICAgICAgbmV3SW5kZXggICAgICA9IChkYXRhRmllbGRzLmluZGV4T2YoY3VycmVudENvbHVtbikgKyBzdGVwKSAlIGRhdGFGaWVsZHMubGVuZ3RoLFxuICAgICAgICAgICAgaWQ7XG5cbiAgICAgICAgd2hpbGUgKG5ld0luZGV4IDwgMCkge1xuICAgICAgICAgICAgbmV3SW5kZXggKz0gZGF0YUZpZWxkcy5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICBpZEFycmF5WzJdID0gZGF0YUZpZWxkc1tuZXdJbmRleF07XG4gICAgICAgIGlkID0gaWRBcnJheS5qb2luKCdfXycpO1xuXG4gICAgICAgIG1lLnNlbGVjdChpZCk7XG4gICAgICAgIHZpZXcuZm9jdXMoaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc3RlcFxuICAgICAqL1xuICAgIG9uTmF2S2V5Um93KGRhdGEsIHN0ZXApIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZpZXcgICAgID0gbWUudmlldyxcbiAgICAgICAgICAgIHN0b3JlICAgID0gdmlldy5zdG9yZSxcbiAgICAgICAgICAgIGlkQXJyYXkgID0gZGF0YS5wYXRoWzBdLmlkLnNwbGl0KCdfXycpLFxuICAgICAgICAgICAgcmVjb3JkSWQgPSBpZEFycmF5WzFdLFxuICAgICAgICAgICAgbmV3SW5kZXggPSAoc3RvcmUuaW5kZXhPZihyZWNvcmRJZCkgKyBzdGVwKSAlIHN0b3JlLmdldENvdW50KCksXG4gICAgICAgICAgICBpZDtcblxuICAgICAgICB3aGlsZSAobmV3SW5kZXggPCAwKSB7XG4gICAgICAgICAgICBuZXdJbmRleCArPSBzdG9yZS5nZXRDb3VudCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWRBcnJheVsxXSA9IHN0b3JlLmdldEtleUF0KG5ld0luZGV4KTtcbiAgICAgICAgaWQgPSBpZEFycmF5LmpvaW4oJ19fJyk7XG5cbiAgICAgICAgbWUuc2VsZWN0KGlkKTtcbiAgICAgICAgdmlldy5mb2N1cyhpZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gY29tcG9uZW50XG4gICAgICovXG4gICAgcmVnaXN0ZXIoY29tcG9uZW50KSB7XG4gICAgICAgIHN1cGVyLnJlZ2lzdGVyKGNvbXBvbmVudCk7XG5cbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgaWQgICA9IG1lLmlkLFxuICAgICAgICAgICAgdmlldyA9IG1lLnZpZXc7XG5cbiAgICAgICAgaWYgKHZpZXcua2V5cykge1xuICAgICAgICAgICAgdmlldy5rZXlzLl9rZXlzLnB1c2goXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duRG93bicgICxrZXk6ICdEb3duJyAgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duTGVmdCcgICxrZXk6ICdMZWZ0JyAgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duUmlnaHQnICxrZXk6ICdSaWdodCcgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duVXAnICAgICxrZXk6ICdVcCcgICAgLHNjb3BlOiBpZH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHVucmVnaXN0ZXIoKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGlkICAgPSBtZS5pZCxcbiAgICAgICAgICAgIHZpZXcgPSBtZS52aWV3O1xuXG4gICAgICAgIGlmICh2aWV3LmtleXMpIHtcbiAgICAgICAgICAgIHZpZXcua2V5cy5yZW1vdmVLZXlzKFtcbiAgICAgICAgICAgICAgICB7Zm46ICdvbktleURvd25Eb3duJyAgLGtleTogJ0Rvd24nICAsc2NvcGU6IGlkfSxcbiAgICAgICAgICAgICAgICB7Zm46ICdvbktleURvd25MZWZ0JyAgLGtleTogJ0xlZnQnICAsc2NvcGU6IGlkfSxcbiAgICAgICAgICAgICAgICB7Zm46ICdvbktleURvd25SaWdodCcgLGtleTogJ1JpZ2h0JyAsc2NvcGU6IGlkfSxcbiAgICAgICAgICAgICAgICB7Zm46ICdvbktleURvd25VcCcgICAgLGtleTogJ1VwJyAgICAsc2NvcGU6IGlkfVxuICAgICAgICAgICAgXSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci51bnJlZ2lzdGVyKCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDZWxsTW9kZWwpO1xuXG5leHBvcnQge0NlbGxNb2RlbCBhcyBkZWZhdWx0fTsiXSwic291cmNlUm9vdCI6IiJ9