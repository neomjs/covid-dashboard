self["webpackChunk"](["vendors~chunks/examples-component-dateSelector-app"],{

/***/ "./node_modules/neo.mjs/examples/component/dateSelector/MainContainer.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/component/dateSelector/MainContainer.mjs ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/form/field/CheckBox.mjs */ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs");
/* harmony import */ var _ConfigurationViewport_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ConfigurationViewport.mjs */ "./node_modules/neo.mjs/examples/ConfigurationViewport.mjs");
/* harmony import */ var _src_component_DateSelector_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/component/DateSelector.mjs */ "./node_modules/neo.mjs/src/component/DateSelector.mjs");
/* harmony import */ var _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/form/field/Radio.mjs */ "./node_modules/neo.mjs/src/form/field/Radio.mjs");
/* harmony import */ var _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/form/field/Number.mjs */ "./node_modules/neo.mjs/src/form/field/Number.mjs");






/**
 * @class TestApp.MainContainer
 * @extends Neo.examples.ConfigurationViewport
 */
class MainContainer extends _ConfigurationViewport_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        className: 'TestApp.MainContainer',
        ntype    : 'main-container'
    }}

    createConfigurationComponents() {
        let me = this;

        return [{
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            checked       : me.exampleComponent.currentDate.getMonth() === 0,
            hideValueLabel: false,
            labelText     : 'currentDate (month)',
            listeners     : {change: me.onMonthRadioChange.bind(me, 0)},
            name          : 'month',
            valueLabelText: 'Jan'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            checked       : me.exampleComponent.currentDate.getMonth() === 1,
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onMonthRadioChange.bind(me, 1)},
            name          : 'month',
            valueLabelText: 'Feb'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            checked       : me.exampleComponent.currentDate.getMonth() === 2,
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onMonthRadioChange.bind(me, 2)},
            name          : 'month',
            valueLabelText: 'Mar'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            checked       : me.exampleComponent.currentDate.getMonth() === 3,
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onMonthRadioChange.bind(me, 3)},
            name          : 'month',
            valueLabelText: 'Apr'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            checked       : me.exampleComponent.currentDate.getFullYear() === 2021,
            hideValueLabel: false,
            labelText     : 'currentDate (year)',
            listeners     : {change: me.onYearRadioChange.bind(me, 2021)},
            name          : 'year',
            style         : {marginTop: '10px'},
            valueLabelText: '2021'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            checked       : me.exampleComponent.currentDate.getFullYear() === 2020,
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onYearRadioChange.bind(me, 2020)},
            name          : 'year',
            valueLabelText: '2020'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            checked       : me.exampleComponent.currentDate.getFullYear() === 2019,
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onYearRadioChange.bind(me, 2019)},
            name          : 'year',
            valueLabelText: '2019'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            checked       : me.exampleComponent.currentDate.getFullYear() === 2018,
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onYearRadioChange.bind(me, 2018)},
            name          : 'year',
            valueLabelText: '2018'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            checked       : me.exampleComponent.dayNameFormat === 'narrow',
            hideValueLabel: false,
            labelText     : 'dayNameFormat',
            listeners     : {change: me.onRadioChange.bind(me, 'dayNameFormat', 'narrow')},
            name          : 'dayNameFormat',
            style         : {marginTop: '10px'},
            valueLabelText: 'narrow'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            checked       : me.exampleComponent.dayNameFormat === 'short',
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onRadioChange.bind(me, 'dayNameFormat', 'short')},
            name          : 'dayNameFormat',
            valueLabelText: 'short'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            checked       : me.exampleComponent.dayNameFormat === 'long',
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onRadioChange.bind(me, 'dayNameFormat', 'long')},
            name          : 'dayNameFormat',
            valueLabelText: 'long'
        }, {
            module    :  _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            clearable : true,
            labelText : 'height',
            listeners : {change: me.onConfigChange.bind(me, 'height')},
            maxValue  : 800,
            minValue  : 230,
            stepSize  : 10,
            style     : {marginTop: '10px'},
            value     : me.exampleComponent.height
        }, {
            module   : _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            checked  : me.exampleComponent.showCellBorders,
            labelText: 'showCellBorders',
            listeners: {change: me.onConfigChange.bind(me, 'showCellBorders')},
            style    : {marginTop: '10px'}
        }, {
            module   : _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            checked  : me.exampleComponent.showDisabledDays,
            labelText: 'showDisabledDays',
            listeners: {change: me.onConfigChange.bind(me, 'showDisabledDays')},
            style    : {marginTop: '10px'}
        }, {
            module   : _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            checked  : me.exampleComponent.useAnimations,
            labelText: 'useAnimations',
            listeners: {change: me.onConfigChange.bind(me, 'useAnimations')},
            style    : {marginTop: '10px'}
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            checked       : me.exampleComponent.weekStartDay === 6,
            hideValueLabel: false,
            labelText     : 'weekStartDay',
            listeners     : {change: me.onRadioChange.bind(me, 'weekStartDay', 6)},
            name          : 'weekStartDay',
            style         : {marginTop: '10px'},
            valueLabelText: '6 (Saturday)'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            checked       : me.exampleComponent.weekStartDay === 0,
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onRadioChange.bind(me, 'weekStartDay', 0)},
            name          : 'weekStartDay',
            valueLabelText: '0 (Sunday)'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            checked       : me.exampleComponent.weekStartDay === 1,
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onRadioChange.bind(me, 'weekStartDay', 1)},
            name          : 'weekStartDay',
            valueLabelText: '1 (Monday)'
        }, {
            module    :  _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            clearable : true,
            labelText : 'width',
            listeners : {change: me.onConfigChange.bind(me, 'width')},
            maxValue  : 800,
            minValue  : 240,
            stepSize  : 10,
            style     : {marginTop: '10px'},
            value     : me.exampleComponent.width
        }];
    }

    createExampleComponent() {
        return Neo.create(_src_component_DateSelector_mjs__WEBPACK_IMPORTED_MODULE_2__["default"], {
            height: 300,
            width : 300
        });
    }

    onMonthRadioChange(value, opts) {
        if (opts.value === true) { // we only want to listen to check events, not uncheck
            let date = this.exampleComponent.currentDate;
            date.setMonth(value);
            this.exampleComponent.currentDate = date;
        }
    }

    onYearRadioChange(value, opts) {
        if (opts.value === true) { // we only want to listen to check events, not uncheck
            let date = this.exampleComponent.currentDate;
            date.setFullYear(value);
            this.exampleComponent.currentDate = date;
        }
    }
}

Neo.applyClassConfig(MainContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/component/dateSelector/app.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/component/dateSelector/app.mjs ***!
  \**********************************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainContainer.mjs */ "./node_modules/neo.mjs/examples/component/dateSelector/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'examples/component/dateSelector/',
    mainView: _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'TestApp'
});



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9jb21wb25lbnQvZGF0ZVNlbGVjdG9yL01haW5Db250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL2NvbXBvbmVudC9kYXRlU2VsZWN0b3IvYXBwLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvc2VsZWN0aW9uL01vZGVsLm1qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUU7QUFDTDtBQUNRO0FBQ047QUFDQzs7QUFFdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsa0VBQXFCO0FBQ2pELHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixpRUFBSztBQUNqQztBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsMENBQTBDO0FBQ3ZFO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCLGlFQUFLO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwwQ0FBMEM7QUFDdkU7QUFDQTtBQUNBLFNBQVM7QUFDVCw0QkFBNEIsaUVBQUs7QUFDakM7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDBDQUEwQztBQUN2RTtBQUNBO0FBQ0EsU0FBUztBQUNULDRCQUE0QixpRUFBSztBQUNqQztBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsMENBQTBDO0FBQ3ZFO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCLGlFQUFLO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw0Q0FBNEM7QUFDekU7QUFDQSw2QkFBNkIsa0JBQWtCO0FBQy9DO0FBQ0EsU0FBUztBQUNULDRCQUE0QixpRUFBSztBQUNqQztBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNENBQTRDO0FBQ3pFO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNEJB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QTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLHVEQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWNvbXBvbmVudC1kYXRlU2VsZWN0b3ItYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoZWNrQm94ICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvZm9ybS9maWVsZC9DaGVja0JveC5tanMnO1xuaW1wb3J0IENvbmZpZ3VyYXRpb25WaWV3cG9ydCBmcm9tICcuLi8uLi9Db25maWd1cmF0aW9uVmlld3BvcnQubWpzJztcbmltcG9ydCBEYXRlU2VsZWN0b3IgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbXBvbmVudC9EYXRlU2VsZWN0b3IubWpzJztcbmltcG9ydCBSYWRpbyAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2Zvcm0vZmllbGQvUmFkaW8ubWpzJztcbmltcG9ydCBOdW1iZXJGaWVsZCAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2Zvcm0vZmllbGQvTnVtYmVyLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFRlc3RBcHAuTWFpbkNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmV4YW1wbGVzLkNvbmZpZ3VyYXRpb25WaWV3cG9ydFxuICovXG5jbGFzcyBNYWluQ29udGFpbmVyIGV4dGVuZHMgQ29uZmlndXJhdGlvblZpZXdwb3J0IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogJ1Rlc3RBcHAuTWFpbkNvbnRhaW5lcicsXG4gICAgICAgIG50eXBlICAgIDogJ21haW4tY29udGFpbmVyJ1xuICAgIH19XG5cbiAgICBjcmVhdGVDb25maWd1cmF0aW9uQ29tcG9uZW50cygpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICAgOiBSYWRpbyxcbiAgICAgICAgICAgIGNoZWNrZWQgICAgICAgOiBtZS5leGFtcGxlQ29tcG9uZW50LmN1cnJlbnREYXRlLmdldE1vbnRoKCkgPT09IDAsXG4gICAgICAgICAgICBoaWRlVmFsdWVMYWJlbDogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgIDogJ2N1cnJlbnREYXRlIChtb250aCknLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHtjaGFuZ2U6IG1lLm9uTW9udGhSYWRpb0NoYW5nZS5iaW5kKG1lLCAwKX0sXG4gICAgICAgICAgICBuYW1lICAgICAgICAgIDogJ21vbnRoJyxcbiAgICAgICAgICAgIHZhbHVlTGFiZWxUZXh0OiAnSmFuJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogUmFkaW8sXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5jdXJyZW50RGF0ZS5nZXRNb250aCgpID09PSAxLFxuICAgICAgICAgICAgaGlkZVZhbHVlTGFiZWw6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWxUZXh0ICAgICA6ICcnLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHtjaGFuZ2U6IG1lLm9uTW9udGhSYWRpb0NoYW5nZS5iaW5kKG1lLCAxKX0sXG4gICAgICAgICAgICBuYW1lICAgICAgICAgIDogJ21vbnRoJyxcbiAgICAgICAgICAgIHZhbHVlTGFiZWxUZXh0OiAnRmViJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogUmFkaW8sXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5jdXJyZW50RGF0ZS5nZXRNb250aCgpID09PSAyLFxuICAgICAgICAgICAgaGlkZVZhbHVlTGFiZWw6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWxUZXh0ICAgICA6ICcnLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHtjaGFuZ2U6IG1lLm9uTW9udGhSYWRpb0NoYW5nZS5iaW5kKG1lLCAyKX0sXG4gICAgICAgICAgICBuYW1lICAgICAgICAgIDogJ21vbnRoJyxcbiAgICAgICAgICAgIHZhbHVlTGFiZWxUZXh0OiAnTWFyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogUmFkaW8sXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5jdXJyZW50RGF0ZS5nZXRNb250aCgpID09PSAzLFxuICAgICAgICAgICAgaGlkZVZhbHVlTGFiZWw6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWxUZXh0ICAgICA6ICcnLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHtjaGFuZ2U6IG1lLm9uTW9udGhSYWRpb0NoYW5nZS5iaW5kKG1lLCAzKX0sXG4gICAgICAgICAgICBuYW1lICAgICAgICAgIDogJ21vbnRoJyxcbiAgICAgICAgICAgIHZhbHVlTGFiZWxUZXh0OiAnQXByJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogUmFkaW8sXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5jdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpID09PSAyMDIxLFxuICAgICAgICAgICAgaGlkZVZhbHVlTGFiZWw6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWxUZXh0ICAgICA6ICdjdXJyZW50RGF0ZSAoeWVhciknLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHtjaGFuZ2U6IG1lLm9uWWVhclJhZGlvQ2hhbmdlLmJpbmQobWUsIDIwMjEpfSxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICAgOiAneWVhcicsXG4gICAgICAgICAgICBzdHlsZSAgICAgICAgIDoge21hcmdpblRvcDogJzEwcHgnfSxcbiAgICAgICAgICAgIHZhbHVlTGFiZWxUZXh0OiAnMjAyMSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICA6IFJhZGlvLFxuICAgICAgICAgICAgY2hlY2tlZCAgICAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQuY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSA9PT0gMjAyMCxcbiAgICAgICAgICAgIGhpZGVWYWx1ZUxhYmVsOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsVGV4dCAgICAgOiAnJyxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgICAgOiB7Y2hhbmdlOiBtZS5vblllYXJSYWRpb0NoYW5nZS5iaW5kKG1lLCAyMDIwKX0sXG4gICAgICAgICAgICBuYW1lICAgICAgICAgIDogJ3llYXInLFxuICAgICAgICAgICAgdmFsdWVMYWJlbFRleHQ6ICcyMDIwJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogUmFkaW8sXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5jdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpID09PSAyMDE5LFxuICAgICAgICAgICAgaGlkZVZhbHVlTGFiZWw6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWxUZXh0ICAgICA6ICcnLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHtjaGFuZ2U6IG1lLm9uWWVhclJhZGlvQ2hhbmdlLmJpbmQobWUsIDIwMTkpfSxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICAgOiAneWVhcicsXG4gICAgICAgICAgICB2YWx1ZUxhYmVsVGV4dDogJzIwMTknXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICAgOiBSYWRpbyxcbiAgICAgICAgICAgIGNoZWNrZWQgICAgICAgOiBtZS5leGFtcGxlQ29tcG9uZW50LmN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCkgPT09IDIwMTgsXG4gICAgICAgICAgICBoaWRlVmFsdWVMYWJlbDogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgIDogJycsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICAgIDoge2NoYW5nZTogbWUub25ZZWFyUmFkaW9DaGFuZ2UuYmluZChtZSwgMjAxOCl9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgICA6ICd5ZWFyJyxcbiAgICAgICAgICAgIHZhbHVlTGFiZWxUZXh0OiAnMjAxOCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICA6IFJhZGlvLFxuICAgICAgICAgICAgY2hlY2tlZCAgICAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQuZGF5TmFtZUZvcm1hdCA9PT0gJ25hcnJvdycsXG4gICAgICAgICAgICBoaWRlVmFsdWVMYWJlbDogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgIDogJ2RheU5hbWVGb3JtYXQnLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHtjaGFuZ2U6IG1lLm9uUmFkaW9DaGFuZ2UuYmluZChtZSwgJ2RheU5hbWVGb3JtYXQnLCAnbmFycm93Jyl9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgICA6ICdkYXlOYW1lRm9ybWF0JyxcbiAgICAgICAgICAgIHN0eWxlICAgICAgICAgOiB7bWFyZ2luVG9wOiAnMTBweCd9LFxuICAgICAgICAgICAgdmFsdWVMYWJlbFRleHQ6ICduYXJyb3cnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICAgOiBSYWRpbyxcbiAgICAgICAgICAgIGNoZWNrZWQgICAgICAgOiBtZS5leGFtcGxlQ29tcG9uZW50LmRheU5hbWVGb3JtYXQgPT09ICdzaG9ydCcsXG4gICAgICAgICAgICBoaWRlVmFsdWVMYWJlbDogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgIDogJycsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICAgIDoge2NoYW5nZTogbWUub25SYWRpb0NoYW5nZS5iaW5kKG1lLCAnZGF5TmFtZUZvcm1hdCcsICdzaG9ydCcpfSxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICAgOiAnZGF5TmFtZUZvcm1hdCcsXG4gICAgICAgICAgICB2YWx1ZUxhYmVsVGV4dDogJ3Nob3J0J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogUmFkaW8sXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5kYXlOYW1lRm9ybWF0ID09PSAnbG9uZycsXG4gICAgICAgICAgICBoaWRlVmFsdWVMYWJlbDogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgIDogJycsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICAgIDoge2NoYW5nZTogbWUub25SYWRpb0NoYW5nZS5iaW5kKG1lLCAnZGF5TmFtZUZvcm1hdCcsICdsb25nJyl9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgICA6ICdkYXlOYW1lRm9ybWF0JyxcbiAgICAgICAgICAgIHZhbHVlTGFiZWxUZXh0OiAnbG9uZydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgIDogIE51bWJlckZpZWxkLFxuICAgICAgICAgICAgY2xlYXJhYmxlIDogdHJ1ZSxcbiAgICAgICAgICAgIGxhYmVsVGV4dCA6ICdoZWlnaHQnLFxuICAgICAgICAgICAgbGlzdGVuZXJzIDoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ2hlaWdodCcpfSxcbiAgICAgICAgICAgIG1heFZhbHVlICA6IDgwMCxcbiAgICAgICAgICAgIG1pblZhbHVlICA6IDIzMCxcbiAgICAgICAgICAgIHN0ZXBTaXplICA6IDEwLFxuICAgICAgICAgICAgc3R5bGUgICAgIDoge21hcmdpblRvcDogJzEwcHgnfSxcbiAgICAgICAgICAgIHZhbHVlICAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQuaGVpZ2h0XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogQ2hlY2tCb3gsXG4gICAgICAgICAgICBjaGVja2VkICA6IG1lLmV4YW1wbGVDb21wb25lbnQuc2hvd0NlbGxCb3JkZXJzLFxuICAgICAgICAgICAgbGFiZWxUZXh0OiAnc2hvd0NlbGxCb3JkZXJzJyxcbiAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ3Nob3dDZWxsQm9yZGVycycpfSxcbiAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpblRvcDogJzEwcHgnfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICA6IENoZWNrQm94LFxuICAgICAgICAgICAgY2hlY2tlZCAgOiBtZS5leGFtcGxlQ29tcG9uZW50LnNob3dEaXNhYmxlZERheXMsXG4gICAgICAgICAgICBsYWJlbFRleHQ6ICdzaG93RGlzYWJsZWREYXlzJyxcbiAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ3Nob3dEaXNhYmxlZERheXMnKX0sXG4gICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW5Ub3A6ICcxMHB4J31cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgOiBDaGVja0JveCxcbiAgICAgICAgICAgIGNoZWNrZWQgIDogbWUuZXhhbXBsZUNvbXBvbmVudC51c2VBbmltYXRpb25zLFxuICAgICAgICAgICAgbGFiZWxUZXh0OiAndXNlQW5pbWF0aW9ucycsXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHtjaGFuZ2U6IG1lLm9uQ29uZmlnQ2hhbmdlLmJpbmQobWUsICd1c2VBbmltYXRpb25zJyl9LFxuICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luVG9wOiAnMTBweCd9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICAgOiBSYWRpbyxcbiAgICAgICAgICAgIGNoZWNrZWQgICAgICAgOiBtZS5leGFtcGxlQ29tcG9uZW50LndlZWtTdGFydERheSA9PT0gNixcbiAgICAgICAgICAgIGhpZGVWYWx1ZUxhYmVsOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsVGV4dCAgICAgOiAnd2Vla1N0YXJ0RGF5JyxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgICAgOiB7Y2hhbmdlOiBtZS5vblJhZGlvQ2hhbmdlLmJpbmQobWUsICd3ZWVrU3RhcnREYXknLCA2KX0sXG4gICAgICAgICAgICBuYW1lICAgICAgICAgIDogJ3dlZWtTdGFydERheScsXG4gICAgICAgICAgICBzdHlsZSAgICAgICAgIDoge21hcmdpblRvcDogJzEwcHgnfSxcbiAgICAgICAgICAgIHZhbHVlTGFiZWxUZXh0OiAnNiAoU2F0dXJkYXkpJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogUmFkaW8sXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC53ZWVrU3RhcnREYXkgPT09IDAsXG4gICAgICAgICAgICBoaWRlVmFsdWVMYWJlbDogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgIDogJycsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICAgIDoge2NoYW5nZTogbWUub25SYWRpb0NoYW5nZS5iaW5kKG1lLCAnd2Vla1N0YXJ0RGF5JywgMCl9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgICA6ICd3ZWVrU3RhcnREYXknLFxuICAgICAgICAgICAgdmFsdWVMYWJlbFRleHQ6ICcwIChTdW5kYXkpJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogUmFkaW8sXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC53ZWVrU3RhcnREYXkgPT09IDEsXG4gICAgICAgICAgICBoaWRlVmFsdWVMYWJlbDogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgIDogJycsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICAgIDoge2NoYW5nZTogbWUub25SYWRpb0NoYW5nZS5iaW5kKG1lLCAnd2Vla1N0YXJ0RGF5JywgMSl9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgICA6ICd3ZWVrU3RhcnREYXknLFxuICAgICAgICAgICAgdmFsdWVMYWJlbFRleHQ6ICcxIChNb25kYXkpJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgOiAgTnVtYmVyRmllbGQsXG4gICAgICAgICAgICBjbGVhcmFibGUgOiB0cnVlLFxuICAgICAgICAgICAgbGFiZWxUZXh0IDogJ3dpZHRoJyxcbiAgICAgICAgICAgIGxpc3RlbmVycyA6IHtjaGFuZ2U6IG1lLm9uQ29uZmlnQ2hhbmdlLmJpbmQobWUsICd3aWR0aCcpfSxcbiAgICAgICAgICAgIG1heFZhbHVlICA6IDgwMCxcbiAgICAgICAgICAgIG1pblZhbHVlICA6IDI0MCxcbiAgICAgICAgICAgIHN0ZXBTaXplICA6IDEwLFxuICAgICAgICAgICAgc3R5bGUgICAgIDoge21hcmdpblRvcDogJzEwcHgnfSxcbiAgICAgICAgICAgIHZhbHVlICAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQud2lkdGhcbiAgICAgICAgfV07XG4gICAgfVxuXG4gICAgY3JlYXRlRXhhbXBsZUNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIE5lby5jcmVhdGUoRGF0ZVNlbGVjdG9yLCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwMCxcbiAgICAgICAgICAgIHdpZHRoIDogMzAwXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uTW9udGhSYWRpb0NoYW5nZSh2YWx1ZSwgb3B0cykge1xuICAgICAgICBpZiAob3B0cy52YWx1ZSA9PT0gdHJ1ZSkgeyAvLyB3ZSBvbmx5IHdhbnQgdG8gbGlzdGVuIHRvIGNoZWNrIGV2ZW50cywgbm90IHVuY2hlY2tcbiAgICAgICAgICAgIGxldCBkYXRlID0gdGhpcy5leGFtcGxlQ29tcG9uZW50LmN1cnJlbnREYXRlO1xuICAgICAgICAgICAgZGF0ZS5zZXRNb250aCh2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmV4YW1wbGVDb21wb25lbnQuY3VycmVudERhdGUgPSBkYXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25ZZWFyUmFkaW9DaGFuZ2UodmFsdWUsIG9wdHMpIHtcbiAgICAgICAgaWYgKG9wdHMudmFsdWUgPT09IHRydWUpIHsgLy8gd2Ugb25seSB3YW50IHRvIGxpc3RlbiB0byBjaGVjayBldmVudHMsIG5vdCB1bmNoZWNrXG4gICAgICAgICAgICBsZXQgZGF0ZSA9IHRoaXMuZXhhbXBsZUNvbXBvbmVudC5jdXJyZW50RGF0ZTtcbiAgICAgICAgICAgIGRhdGUuc2V0RnVsbFllYXIodmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5leGFtcGxlQ29tcG9uZW50LmN1cnJlbnREYXRlID0gZGF0ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWFpbkNvbnRhaW5lcik7XG5cbmV4cG9ydCB7TWFpbkNvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuL01haW5Db250YWluZXIubWpzJztcblxuY29uc3Qgb25TdGFydCA9ICgpID0+IE5lby5hcHAoe1xuICAgIGFwcFBhdGggOiAnZXhhbXBsZXMvY29tcG9uZW50L2RhdGVTZWxlY3Rvci8nLFxuICAgIG1haW5WaWV3OiBNYWluQ29udGFpbmVyLFxuICAgIG5hbWUgICAgOiAnVGVzdEFwcCdcbn0pO1xuXG5leHBvcnQge29uU3RhcnQgYXMgb25TdGFydH07IiwiaW1wb3J0IEJhc2UgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgICBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XG5pbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICcuLi9jb3JlL09ic2VydmFibGUubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnNlbGVjdGlvbi5Nb2RlbFxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBNb2RlbCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlL09ic2VydmFibGUubWpzIG1peGluXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9ic2VydmFibGU9dHJ1ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBvYnNlcnZhYmxlOiB0cnVlXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uc2VsZWN0aW9uLk1vZGVsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uc2VsZWN0aW9uLk1vZGVsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3NlbGVjdGlvbi1tb2RlbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdzZWxlY3Rpb24tbW9kZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogUGxhY2Vob2xkZXIgZm9yIGV4dGVuZGVkIGNsYXNzZXMgdG8gYWRkIGEgY3VzdG9tIGNzcyBydWxlIHRvIHRoaXMgb3duZXIgY29tcG9uZW50XG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBjbHM9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gaXRlbXM9W11cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBzZWxlY3RlZENscz0nc2VsZWN0ZWQnXG4gICAgICAgICAqL1xuICAgICAgICBzZWxlY3RlZENsczogJ25lby1zZWxlY3RlZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGVTZWxlY3Q9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xlU2VsZWN0OiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogSW50ZXJuYWxseSBzYXZlcyB0aGUgdmlldyBpZCwgYnV0IHRoZSBnZXR0ZXIgd2lsbCByZXR1cm4gdGhlIG1hdGNoaW5nIGluc3RhbmNlXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gdmlld189bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB2aWV3XzogbnVsbFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRyaWdnZXJlZCBiZWZvcmUgZ2V0dGluZyB0aGUgdmFsdWUgb2YgdGhlIHZpZXcgY29uZmlnXG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZX1cbiAgICAgKi9cbiAgICBiZWZvcmVHZXRWaWV3KCkge1xuICAgICAgICByZXR1cm4gTmVvLmdldENvbXBvbmVudCh0aGlzLl92aWV3KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRyaWdnZXJlZCBiZWZvcmUgc2V0dGluZyB0aGUgdmFsdWUgb2YgdGhlIHZpZXcgY29uZmlnXG4gICAgICogQHJldHVybnMge1N0cmluZ30gdGhlIHZpZXcgaWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRWaWV3KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGFkZERvbUxpc3RlbmVyKCkge31cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzaWxlbnRdIHRydWUgdG8gcHJldmVudCBhIHZkb20gdXBkYXRlXG4gICAgICogQHBhcmFtIHtBcnJheX0gW2l0ZW1Db2xsZWN0aW9uXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbc2VsZWN0ZWRDbHNdXG4gICAgICovXG4gICAgZGVzZWxlY3QoaXRlbSwgc2lsZW50LCBpdGVtQ29sbGVjdGlvbiwgc2VsZWN0ZWRDbHMpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmlldyA9IG1lLnZpZXcsXG4gICAgICAgICAgICB2ZG9tID0gdmlldy52ZG9tLFxuICAgICAgICAgICAgbm9kZSA9IHZpZXcuZ2V0VmRvbUNoaWxkKGl0ZW0pLCAvLyB0b2RvOiBzdXBwb3J0IGZvciBub2RlcyAocmlnaHQgbm93IGxpbWl0ZWQgdG8gaWRzKVxuICAgICAgICAgICAgY2xzO1xuXG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBjbHMgPSBub2RlLmNscyB8fCBbXTtcbiAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsIHNlbGVjdGVkQ2xzIHx8IG1lLnNlbGVjdGVkQ2xzKTtcbiAgICAgICAgICAgIG5vZGUuY2xzID0gY2xzO1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGl0ZW1Db2xsZWN0aW9uIHx8IG1lLml0ZW1zLCBpdGVtKTtcblxuICAgICAgICBpZiAoIXNpbGVudCkge1xuICAgICAgICAgICAgdmlldy52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbc2lsZW50XSB0cnVlIHRvIHByZXZlbnQgYSB2ZG9tIHVwZGF0ZVxuICAgICAqL1xuICAgIGRlc2VsZWN0QWxsKHNpbGVudCkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgaXRlbXMgPSBbLi4ubWUuaXRlbXNdLFxuICAgICAgICAgICAgdmlldyAgPSBtZS52aWV3LFxuICAgICAgICAgICAgdmRvbSAgPSB2aWV3LnZkb207XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIG1lLmRlc2VsZWN0KGl0ZW0sIHRydWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXNpbGVudCAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2aWV3LnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnVucmVnaXN0ZXIoKTtcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge0FycmF5fSB0aGlzLml0ZW1zXG4gICAgICovXG4gICAgZ2V0U2VsZWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlcmUgaXMgYSBzZWxlY3Rpb25cbiAgICAgKi9cbiAgICBoYXNTZWxlY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBpdGVtIGlzIHNlbGVjdGVkXG4gICAgICovXG4gICAgaXNTZWxlY3RlZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5pbmRleE9mKGlkKSA+IC0xO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxuICAgICAqL1xuICAgIHJlZ2lzdGVyKGNvbXBvbmVudCkge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIGNscyA9IGNvbXBvbmVudC5jbHMgfHwgW107XG5cbiAgICAgICAgaWYgKG1lLmNscyAmJiAhY2xzLmluY2x1ZGVzKG1lLmNscykpIHtcbiAgICAgICAgICAgIGNscy5wdXNoKG1lLmNscyk7XG4gICAgICAgICAgICBjb21wb25lbnQuY2xzID0gY2xzO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUudmlldyA9IGNvbXBvbmVudDtcbiAgICAgICAgbWUuYWRkRG9tTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHJlbW92ZURvbUxpc3RlbmVycygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb21wb25lbnQgICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gWy4uLmNvbXBvbmVudC5kb21MaXN0ZW5lcnNdO1xuXG4gICAgICAgIGNvbXBvbmVudC5kb21MaXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICBpZiAobGlzdGVuZXIuc2NvcGUgPT09IG1lKSB7XG4gICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGRvbUxpc3RlbmVycywgbGlzdGVuZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb21wb25lbnQuZG9tTGlzdGVuZXJzID0gZG9tTGlzdGVuZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R8T2JqZWN0W118U3RyaW5nW119IGl0ZW1zXG4gICAgICogQHBhcmFtIHtBcnJheX0gW2l0ZW1Db2xsZWN0aW9uXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbc2VsZWN0ZWRDbHNdXG4gICAgICovXG4gICAgc2VsZWN0KGl0ZW1zLCBpdGVtQ29sbGVjdGlvbiwgc2VsZWN0ZWRDbHMpIHtcbiAgICAgICAgaXRlbXMgPSBBcnJheS5pc0FycmF5KGl0ZW1zKSA/IGl0ZW1zIDogW2l0ZW1zXTtcblxuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2aWV3ID0gbWUudmlldyxcbiAgICAgICAgICAgIHZkb20gPSB2aWV3LnZkb20sXG4gICAgICAgICAgICBjbHM7XG5cbiAgICAgICAgaWYgKG1lLnNpbmdsZVNlbGVjdCkge1xuICAgICAgICAgICAgbWUuZGVzZWxlY3RBbGwodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpdGVtcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBub2RlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIG5vZGUgPSB2aWV3LmdldFZkb21DaGlsZChub2RlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBjbHMgPSBub2RlLmNscyB8fCBbXTtcbiAgICAgICAgICAgICAgICBOZW9BcnJheS5hZGQoY2xzLCBzZWxlY3RlZENscyB8fCBtZS5zZWxlY3RlZENscyk7XG4gICAgICAgICAgICAgICAgbm9kZS5jbHMgPSBjbHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIE5lb0FycmF5LmFkZChpdGVtQ29sbGVjdGlvbiB8fCBtZS5pdGVtcywgaXRlbXMpO1xuXG4gICAgICAgIHZpZXdbdmlldy5oYXNPd25Qcm9wZXJ0eSgnc2lsZW50U2VsZWN0JykgJiYgdmlldy5zaWxlbnRTZWxlY3QgPT09IHRydWUgPyAnX3Zkb20nIDogJ3Zkb20nXSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxuICAgICAqL1xuICAgIHRvZ2dsZVNlbGVjdGlvbihpdGVtKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLmlzU2VsZWN0ZWQoaXRlbSkpIHtcbiAgICAgICAgICAgIG1lLmRlc2VsZWN0KGl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUuc2VsZWN0KGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyKCkge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIGNscyA9IG1lLnZpZXcuY2xzIHx8IFtdO1xuXG4gICAgICAgIGlmIChtZS5jbHMgJiYgY2xzLmluY2x1ZGVzKG1lLmNscykpIHtcbiAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsIG1lLmNscyk7XG4gICAgICAgICAgICBtZS52aWV3LmNscyA9IGNscztcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmRlc2VsZWN0QWxsKCk7XG5cbiAgICAgICAgbWUucmVtb3ZlRG9tTGlzdGVuZXJzKCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNb2RlbCk7XG5cbmV4cG9ydCB7TW9kZWwgYXMgZGVmYXVsdH07Il0sInNvdXJjZVJvb3QiOiIifQ==