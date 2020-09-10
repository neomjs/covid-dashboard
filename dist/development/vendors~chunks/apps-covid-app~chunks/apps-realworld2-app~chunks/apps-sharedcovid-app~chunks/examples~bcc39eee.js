self["webpackChunk"](["vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~bcc39eee"],{

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

/***/ "./node_modules/neo.mjs/src/form/field/Select.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/Select.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Select; });
/* harmony import */ var _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/ClassSystem.mjs */ "./node_modules/neo.mjs/src/util/ClassSystem.mjs");
/* harmony import */ var _list_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../list/Base.mjs */ "./node_modules/neo.mjs/src/list/Base.mjs");
/* harmony import */ var _Picker_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Picker.mjs */ "./node_modules/neo.mjs/src/form/field/Picker.mjs");
/* harmony import */ var _data_Store_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");






/**
 * Provides a drop down list to select one or multiple items
 * @class Neo.form.field.Select
 * @extends Neo.form.field.Picker
 */
class Select extends _Picker_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.Select'
         * @protected
         */
        className: 'Neo.form.field.Select',
        /**
         * @member {String} ntype='selectfield'
         * @protected
         */
        ntype: 'selectfield',
        /**
         * @member {String[]} cls=['neo-selectfield', 'neo-pickerfield', 'neo-textfield']
         */
        cls: ['neo-selectfield', 'neo-pickerfield', 'neo-textfield'],
        /**
         * @member {String} displayField='name'
         */
        displayField: 'name',
        /**
         * @member {String|Number|null} hintRecordId=null
         */
        hintRecordId: null,
        /**
         * Additional used keys for the selection model
         * @member {Object} keys
         */
        keys: {
            'Down'  : 'onKeyDownDown',
            'Enter' : 'onKeyDownEnter',
            'Escape': 'onKeyDownEscape',
            'Right' : 'onKeyDownRight',
            'Up'    : 'onKeyDownUp'
        },
        /**
         * @member {String|null} lastManualInput=null
         * @protected
         */
        lastManualInput: null,
        /**
         * @member {Neo.list.Base} list=null
         * @protected
         */
        list: null,
        /**
         * @member {Object|null} listConfig=null
         */
        listConfig: null,
        /**
         * The height of the picker container. Defaults to px.
         * @member {Number|null} pickerHeight=null
         */
        pickerHeight: null,
        /**
         * @member {Neo.data.Store|null} store_=null
         */
        store_: null,
        /**
         * Display the first matching result while typing
         * @member {Boolean} typeAhead_=true
         */
        typeAhead_: true
    }}

    /**
     *
     * @param config
     */
    constructor(config) {
        super(config);

        let me = this;

        me.list = Neo.create({
            module        : _list_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            displayField  : me.displayField,
            selectionModel: {stayInList: false},
            silentSelect  : true,
            store         : me.store,
            ...me.listConfig || {}
        });

        me.list.keys._keys.push(
            {fn: 'onContainerKeyDownEnter',  key: 'Enter',  scope: me.id},
            {fn: 'onContainerKeyDownEscape', key: 'Escape', scope: me.id}
        );

        me.list.on({
            createItems       : me.onListCreateItems,
            itemClick         : me.onListItemClick,
            itemNavigate      : me.onListItemNavigate,
            selectPostLastItem: me.focusInputEl,
            selectPreFirstItem: me.focusInputEl,
            scope             : me
        });

        if (me.typeAhead) {
            me.updateTypeAhead();
        }
    }

    /**
     * Triggered after the store config got changed
     * @param {Neo.data.Store} value
     * @param {Neo.data.Store} oldValue
     * @protected
     */
    afterSetStore(value, oldValue) {
        let me = this,
            filters;

        if (value) {
            filters = value.filters || [];

            filters.push({
                includeEmptyValues: true,
                operator          : 'like',
                property          : me.displayField,
                value             : me.value
            });

            value.filters = filters;
        }
    }

    /**
     * Triggered after the typeAhead config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetTypeAhead(value, oldValue) {
        if (this.rendered) {
            this.updateTypeAhead();
        }
    }

    /**
     * Triggered after the value config got changed
     * @param {String|null} value
     * @param {String|null} oldValue
     * @param {Boolean} [preventFilter=false]
     * @protected
     */
    afterSetValue(value, oldValue, preventFilter=false) {console.log('afterSetValue', value);
        super.afterSetValue(value, oldValue);

        if (!preventFilter) {
            this.updateValue();
        }
    }

    /**
     * Triggered before the store config gets changed.
     * @param {Object|Neo.data.Store|null} value
     * @param {Neo.data.Store} oldValue
     * @returns {Neo.data.Store}
     * @protected
     */
    beforeSetStore(value, oldValue) {
        if (oldValue) {
            oldValue.destroy();
        }

        return _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].beforeSetInstance(value, _data_Store_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]);
    }

    /**
     *
     * @returns {Neo.list.Base}
     */
    createPickerComponent() {
        return this.list;
    }

    /**
     *
     * @param {Function} [callback]
     */
    focusInputEl(callback) {
        let me = this;

        me.updateTypeAheadValue(me.lastManualInput, true);
        me.value = me.lastManualInput;

        Neo.main.DomAccess.focus({
            id: me.getInputElId()
        }).then(() => {
            if (callback) {
                callback.apply(me);
            }
        });
    }

    /**
     *
     * @returns {Object}
     */
    getInputHintEl() {
        let el = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].findVdomChild(this.vdom, this.getInputHintId());
        return el && el.vdom;
    }

    /**
     *
     * @returns {String}
     */
    getInputHintId() {
        return this.id + '__input-hint'
    }

    /**
     * Returns the first selected record or null
     * returns {Object}
     */
    getRecord() {
        const list      = this.list,
              recordKey = list.selectionModel.getSelection()[0];

        return recordKey && this.store.get(list.getItemRecordId(recordKey)) || null;
    }

    /**
     * @param {Object} data
     * @protected
     */
    onContainerKeyDownEnter(data) {
        this.hidePicker();
    }

    /**
     * @param {Object} data
     * @protected
     */
    onContainerKeyDownEscape(data) {
        this.focusInputEl(this.hidePicker);
    }

    /**
     * @param {Object} data
     * @protected
     */
    onInputValueChange(data) {
        super.onInputValueChange(data);
        this.lastManualInput = data.value;
    }

    /**
     *
     * @param {Object} data
     * @protected
     */
    onKeyDownDown(data) {
        this.onKeyDownEnter(data);
    }

    /**
     *
     * @param {Object} data
     * @protected
     */
    onKeyDownEnter(data) {
        let me    = this;

        if (me.pickerIsMounted) {
            me.selectListItem();
            super.onKeyDownEnter(data);
        } else {
            super.onKeyDownEnter(data, me.selectListItem);
        }
    }

    /**
     *
     * @param {Object} data
     * @protected
     */
    onKeyDownRight(data) {
        let me = this;

        if (me.hintRecordId) {
            me.value = me.store.get(me.hintRecordId)[me.displayField];
        }
    }

    /**
     *
     * @param {Object} data
     * @protected
     */
    onKeyDownUp(data) {
        let me = this;

        if (me.pickerIsMounted) {
            me.selectLastListItem();
            super.onKeyDownEnter(data);
        } else {
            super.onKeyDownEnter(data, me.selectLastListItem);
        }
    }

    /**
     * List items got created or updated
     * Since the list & inputHint update would run in parallel => before getting the new vnode back
     * this could cause invalid states, so we delay updateTypeAheadValue() until the list is done.
     * @protected
     */
    onListCreateItems() {
        let me = this;

        if (me.typeAhead) {
            if (me.picker && me.picker.mounted) {
                me.updateTypeAheadValue();
            }
        }
    }

    /**
     *
     * @param {Object} record
     */
    onListItemClick(record) {
        let me       = this,
            oldValue = me.value,
            value    = record[me.displayField];

        if (me.value !== value) {
            me.hintRecordId = null;
            me._value       = value;
            me.getInputHintEl().value = null;

            me.afterSetValue(value, oldValue, true); // prevent the list from getting filtered

            me.fire('select', {
                record: record,
                value : record[me.store.keyProperty]
            });
        }
    }

    /**
     *
     * @param {Object} record
     */
    onListItemNavigate(record) {
        this.onListItemClick(record);
    }

    /**
     *
     */
    selectFirstListItem() {
        this.selectListItem(0);
    }

    /**
     *
     */
    selectLastListItem() {
        this.selectListItem(this.store.getCount() -1);
    }

    /**
     * If no index is passed, the index matching to the field input will get used (0 if none)
     * @param {Number} [index]
     */
    selectListItem(index) {
        let me = this;

        if (!Neo.isNumber(index)) {
            if (me.hintRecordId) {
                index = me.store.indexOfKey(me.hintRecordId);
            } else {
                index = 0;
            }
        }

        me.onListItemNavigate(me.store.getAt(index));
        me.list.selectItem(index);
    }

    /**
     *
     * @param {Boolean} [silent=false]
     * @protected
     */
    updateTypeAhead(silent=false) {
        let me      = this,
            inputEl = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].findVdomChild(me.vdom, me.id + '-input'),
            vdom    = me.vdom;

        if (me.typeAhead) {
            inputEl.parentNode.cn[inputEl.index] = {
                tag: 'span',
                cls: ['neo-input-field-wrapper'],
                cn : [{
                    tag         : 'input',
                    autocomplete: 'off',
                    autocorrect : 'off',
                    cls         : ['neo-textfield-input', 'neo-typeahead-input'],
                    id          : me.getInputHintId(),
                    spellcheck  : 'false'
                }, inputEl.vdom]
            }
        } else {
            _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].replaceVdomChild(vdom, inputEl.parentNode.id, inputEl.vdom);
        }

        me[silent ? '_vdom' : 'vdom'] = vdom;
    }

    /**
     *
     * @param {String|null} [value]
     * @param {Boolean} [silent=false]
     * @protected
     */
    updateTypeAheadValue(value, silent=false) {
        let me          = this,
            hasMatch    = false,
            store       = me.store,
            i           = 0,
            len         = store.getCount(),
            vdom        = me.vdom,
            inputHintEl = me.getInputHintEl(),
            storeValue;

        if (value === undefined) {
            value = me.value;
        }

        if (value && value.length > 0) {
            for (; i < len; i++) {
                storeValue = store.items[i][me.displayField];

                if (storeValue.toLowerCase().indexOf(value.toLowerCase()) === 0) {
                    hasMatch = true;
                    break;
                }
            }

            if (hasMatch) {
                inputHintEl.value = value + storeValue.substr(value.length);
                me.hintRecordId = store.items[i][store.keyProperty || store.model.keyProperty];
            }
        }

        if (!hasMatch && inputHintEl) {
            inputHintEl.value = '';
            me.hintRecordId = null;
        }

        me[silent ? '_vdom' : 'vdom'] = vdom;
    }

    /**
     *
     * @protected
     */
    updateValue() {
        let me    = this,
            store = me.store,
            filter;

        if (store && !Neo.isEmpty(store.filters)) {
            filter = store.getFilter(me.displayField);

            if (filter) {
                filter.value = me.value;
            }
        }

        if (me.typeAhead) {
            if (!(me.picker && me.picker.containsFocus)) {
                me.updateTypeAheadValue();
            }
        }
    }
}

/**
 * The select event fires when a list item gets selected
 * @event select
 * @param {Object} record
 * @param {value} record[store.keyProperty]
 * @returns {Object}
 */

Neo.applyClassConfig(Select);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9QaWNrZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL1NlbGVjdC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2Zvcm0vZmllbGQvdHJpZ2dlci9QaWNrZXIubWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUQ7QUFDSjtBQUNWO0FBQ1M7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlEQUFJO0FBQ3pCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixNQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJEQUFh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Q0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isc0RBQVE7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVCxZQUFZLHNEQUFRO0FBQ3BCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsWUFBWTtBQUMzQixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsU0FBUztBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsTUFBTTtBQUNqQixhQUFhO0FBQ2I7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDcGZBO0FBQUE7QUFBQTtBQUE4Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpREFBSTtBQUN6Qix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzfmJjYzM5ZWVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhaW5lciAgICAgZnJvbSAnLi4vLi4vY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBQaWNrZXJUcmlnZ2VyIGZyb20gJy4vdHJpZ2dlci9QaWNrZXIubWpzJztcbmltcG9ydCBUZXh0ICAgICAgICAgIGZyb20gJy4vVGV4dC5tanMnO1xuaW1wb3J0IFZEb21VdGlsICAgICAgZnJvbSAnLi4vLi4vdXRpbC9WRG9tLm1qcyc7XG5cbi8qKlxuICogVGhlIGFic3RyYWN0IHBpY2tlciBmaWVsZCBwcm92aWRlcyBhbiBhcnJvdyBkb3duIHRyaWdnZXIgd2hpY2ggb3BlbnMgYSBmbG9hdGluZyBjb250YWluZXIgdG8gcHJvdmlkZVxuICogbW9yZSBkYXRhIHNlbGVjdGlvbiBvcHRpb25zXG4gKiBAY2xhc3MgTmVvLmZvcm0uZmllbGQuUGlja2VyXG4gKiBAZXh0ZW5kcyBOZW8uZm9ybS5maWVsZC5UZXh0XG4gKiBAYWJzdHJhY3RcbiAqL1xuY2xhc3MgUGlja2VyIGV4dGVuZHMgVGV4dCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5mb3JtLmZpZWxkLlBpY2tlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmZvcm0uZmllbGQuUGlja2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3BpY2tlcmZpZWxkJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3BpY2tlcmZpZWxkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0b3JlcyB0aGUgZGF0YSBmcm9tIHRoZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBjYWxsIChwaWNrZXIgJiBib2R5IERvbVJlY3RzKVxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gY2xpZW50UmVjdHM9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGllbnRSZWN0czogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tcGlja2VyZmllbGQnLCAnbmVvLXRleHRmaWVsZCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLXBpY2tlcmZpZWxkJywgJ25lby10ZXh0ZmllbGQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZGl0aW9uYWwgdXNlZCBrZXlzIGZvciB0aGUgc2VsZWN0aW9uIG1vZGVsXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0ga2V5c1xuICAgICAgICAgKi9cbiAgICAgICAga2V5czoge1xuICAgICAgICAgICAgJ0VudGVyJyA6ICdvbktleURvd25FbnRlcicsXG4gICAgICAgICAgICAnRXNjYXBlJzogJ29uS2V5RG93bkVzY2FwZSdcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1hdGNoUGlja2VyV2lkdGg9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgbWF0Y2hQaWNrZXJXaWR0aDogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBwaWNrZXI9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBwaWNrZXI6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25maWdzIHRvIHBhc3MgdG8gdGhlIHBpY2tlciBjb250YWluZXJcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IHBpY2tlckNvbmZpZz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBwaWNrZXJDb25maWc6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBwaWNrZXIgY29udGFpbmVyLiBEZWZhdWx0cyB0byBweC5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IHBpY2tlckhlaWdodD0xMDBcbiAgICAgICAgICovXG4gICAgICAgIHBpY2tlckhlaWdodDogMTAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcGlja2VySXNNb3VudGVkPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHBpY2tlcklzTW91bnRlZDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBwaWNrZXIgY29udGFpbmVyLiBEZWZhdWx0cyB0byBweC5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IHBpY2tlck1heEhlaWdodD0yMDBcbiAgICAgICAgICovXG4gICAgICAgIHBpY2tlck1heEhlaWdodDogMjAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHdpZHRoIG9mIHRoZSBwaWNrZXIgY29udGFpbmVyLiBEZWZhdWx0cyB0byBweC5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IHBpY2tlcldpZHRoPTEwMFxuICAgICAgICAgKi9cbiAgICAgICAgcGlja2VyV2lkdGg6IDEwMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxPYmplY3RbXX0gdHJpZ2dlcnM9W11cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgdHJpZ2dlcnM6IFt7XG4gICAgICAgICAgICBtb2R1bGU6IFBpY2tlclRyaWdnZXJcbiAgICAgICAgfV1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbnRhaW5lci5CYXNlfVxuICAgICAqL1xuICAgIGNyZWF0ZVBpY2tlcigpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBwaWNrZXJDb21wb25lbnQgPSBtZS5jcmVhdGVQaWNrZXJDb21wb25lbnQoKTtcblxuICAgICAgICByZXR1cm4gTmVvLmNyZWF0ZShDb250YWluZXIsIHtcbiAgICAgICAgICAgIGFwcE5hbWUgIDogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgIGNscyAgICAgIDogWyduZW8tcGlja2VyLWNvbnRhaW5lcicsICduZW8tY29udGFpbmVyJ10sXG4gICAgICAgICAgICBoZWlnaHQgICA6IG1lLnBpY2tlckhlaWdodCxcbiAgICAgICAgICAgIGlkICAgICAgIDogbWUuZ2V0UGlja2VySWQoKSxcbiAgICAgICAgICAgIGl0ZW1zICAgIDogcGlja2VyQ29tcG9uZW50ID8gW3BpY2tlckNvbXBvbmVudF0gOiBbXSxcbiAgICAgICAgICAgIG1heEhlaWdodDogbWUucGlja2VyTWF4SGVpZ2h0LFxuICAgICAgICAgICAgdmRvbSAgICAgOiB7Y246IFtdLCB0YWJJbmRleDogLTF9LFxuICAgICAgICAgICAgd2lkdGggICAgOiBtZS5waWNrZXJXaWR0aCxcbiAgICAgICAgICAgIC4uLm1lLnBpY2tlckNvbmZpZyB8fCB7fVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gc2lsZW50XG4gICAgICovXG4gICAgYXBwbHlDbGllbnRSZWN0cyhzaWxlbnQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGJvZHlSZWN0ICAgID0gbWUuY2xpZW50UmVjdHNbMl0sXG4gICAgICAgICAgICBpbnB1dFJlY3QgICA9IG1lLmNsaWVudFJlY3RzWzFdLFxuICAgICAgICAgICAgdHJpZ2dlclJlY3QgPSBtZS5jbGllbnRSZWN0c1swXSxcbiAgICAgICAgICAgIHZkb20gICAgICAgID0gbWUucGlja2VyLnZkb20sXG4gICAgICAgICAgICB3aWR0aCAgICAgICA9IG1lLm1hdGNoUGlja2VyV2lkdGggPyAoaW5wdXRSZWN0LndpZHRoIC0gMSkgOiBtZS5waWNrZXJXaWR0aDtcblxuICAgICAgICBtZS5waWNrZXJXaWR0aCA9IHdpZHRoO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24odmRvbS5zdHlsZSwge1xuICAgICAgICAgICAgbGVmdCA6IGAke3RyaWdnZXJSZWN0LmxlZnQgKyB0cmlnZ2VyUmVjdC53aWR0aCAtIHdpZHRofXB4YCxcbiAgICAgICAgICAgIHRvcCAgOiBgJHt0cmlnZ2VyUmVjdC50b3AgKyB0cmlnZ2VyUmVjdC5oZWlnaHQgKyAxfXB4YCxcbiAgICAgICAgICAgIHdpZHRoOiBgJHt3aWR0aH1weGBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUucGlja2VyW3NpbGVudCA/ICdfdmRvbScgOiAndmRvbSddID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudWxsfVxuICAgICAqL1xuICAgIGNyZWF0ZVBpY2tlckNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrU2NvcGVdXG4gICAgICovXG4gICAgZ2V0Q2xpZW50UmVjdHNUaGVuU2hvdyhjYWxsYmFjaywgY2FsbGJhY2tTY29wZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5nZXRCb3VuZGluZ0NsaWVudFJlY3Qoe1xuICAgICAgICAgICAgaWQ6IFttZS5pZCwgbWUuaWQgKyAnLWlucHV0LXdyYXBwZXInLCAnYm9keSddXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBtZS5jbGllbnRSZWN0cyA9IGRhdGE7XG4gICAgICAgICAgICBtZS5zaG93UGlja2VyKGNhbGxiYWNrLCBjYWxsYmFja1Njb3BlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcGlja2VyIGluc3RhbmNlIGFuZCBjcmVhdGVzIGl0IGluIGNhc2UgaXQgZG9lcyBub3QgZXhpc3QgeWV0XG4gICAgICogQHJldHVybnMge05lby5jb250YWluZXIuQmFzZX1cbiAgICAgKi9cbiAgICBnZXRQaWNrZXIoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCFtZS5waWNrZXIpIHtcbiAgICAgICAgICAgIG1lLnBpY2tlciA9IG1lLmNyZWF0ZVBpY2tlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1lLnBpY2tlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0UGlja2VySWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkICsgJ19fcGlja2VyJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV1cbiAgICAgKi9cbiAgICBoaWRlUGlja2VyKHNpbGVudD1mYWxzZSkge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHBpY2tlciA9IG1lLmdldFBpY2tlcigpLFxuICAgICAgICAgICAgdmRvbSAgID0gbWUudmRvbTtcblxuICAgICAgICBpZiAobWUucGlja2VySXNNb3VudGVkKSB7XG4gICAgICAgICAgICBWRG9tVXRpbC5yZW1vdmVWZG9tQ2hpbGQodmRvbSwgbWUuZ2V0UGlja2VySWQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBtZS5waWNrZXJJc01vdW50ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc2lsZW50KSB7XG4gICAgICAgICAgICBtZS5fdmRvbSA9IHZkb207XG4gICAgICAgICAgICBwaWNrZXIubW91bnRlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUucHJvbWlzZVZkb21VcGRhdGUoKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHBpY2tlci5tb3VudGVkID0gbWUucGlja2VySXNNb3VudGVkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGRhdGFcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25Gb2N1c0xlYXZlKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAvLyBpbmxpbmUgd2lsbCB0cmlnZ2VyIGFuIHZkb20gdXBkYXRlLCBzbyBoaWRlIHBpY2tlciBzaG91bGQgYmUgc2lsZW50XG4gICAgICAgIGlmIChtZS5sYWJlbFBvc2l0aW9uID09PSAnaW5saW5lJyAmJiAobWUudmFsdWUgPT09ICcnIHx8IG1lLnZhbHVlID09PSBudWxsKSkge1xuICAgICAgICAgICAgbWUuaGlkZVBpY2tlcih0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLmhpZGVQaWNrZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLm9uRm9jdXNMZWF2ZShkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja1Njb3BlXVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbktleURvd25FbnRlcihkYXRhLCBjYWxsYmFjaywgY2FsbGJhY2tTY29wZSkge1xuICAgICAgICBpZiAoIXRoaXMucGlja2VySXNNb3VudGVkKSB7XG4gICAgICAgICAgICB0aGlzLmdldENsaWVudFJlY3RzVGhlblNob3coY2FsbGJhY2ssIGNhbGxiYWNrU2NvcGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbktleURvd25Fc2NhcGUoZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5waWNrZXJJc01vdW50ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZVBpY2tlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGJ5IGZvcm0uZmllbGQudHJpZ2dlci5QaWNrZXJcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25QaWNrZXJUcmlnZ2VyQ2xpY2soKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLnBpY2tlcklzTW91bnRlZCkge1xuICAgICAgICAgICAgbWUuaGlkZVBpY2tlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUuZ2V0Q2xpZW50UmVjdHNUaGVuU2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrU2NvcGVdXG4gICAgICovXG4gICAgc2hvd1BpY2tlcihjYWxsYmFjaywgY2FsbGJhY2tTY29wZSkge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHBpY2tlciA9IG1lLmdldFBpY2tlcigpLFxuICAgICAgICAgICAgdmRvbSAgID0gbWUudmRvbTtcblxuICAgICAgICBtZS5hcHBseUNsaWVudFJlY3RzKHRydWUpO1xuICAgICAgICB2ZG9tLmNuLnB1c2gocGlja2VyLnZkb20pO1xuXG4gICAgICAgIG1lLnBpY2tlcklzTW91bnRlZCA9IHRydWU7XG5cbiAgICAgICAgbWUucHJvbWlzZVZkb21VcGRhdGUoKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgcGlja2VyLm1vdW50ZWQgPSBtZS5waWNrZXJJc01vdW50ZWQ7XG5cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KGNhbGxiYWNrU2NvcGUgfHwgbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFBpY2tlcik7XG5cbmV4cG9ydCB7UGlja2VyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDbGFzc1N5c3RlbVV0aWwgZnJvbSAnLi4vLi4vdXRpbC9DbGFzc1N5c3RlbS5tanMnO1xuaW1wb3J0IExpc3QgICAgICAgICAgICBmcm9tICcuLi8uLi9saXN0L0Jhc2UubWpzJztcbmltcG9ydCBQaWNrZXIgICAgICAgICAgZnJvbSAnLi9QaWNrZXIubWpzJztcbmltcG9ydCBTdG9yZSAgICAgICAgICAgZnJvbSAnLi4vLi4vZGF0YS9TdG9yZS5tanMnO1xuaW1wb3J0IFZEb21VdGlsICAgICAgICBmcm9tICcuLi8uLi91dGlsL1ZEb20ubWpzJztcblxuLyoqXG4gKiBQcm92aWRlcyBhIGRyb3AgZG93biBsaXN0IHRvIHNlbGVjdCBvbmUgb3IgbXVsdGlwbGUgaXRlbXNcbiAqIEBjbGFzcyBOZW8uZm9ybS5maWVsZC5TZWxlY3RcbiAqIEBleHRlbmRzIE5lby5mb3JtLmZpZWxkLlBpY2tlclxuICovXG5jbGFzcyBTZWxlY3QgZXh0ZW5kcyBQaWNrZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZm9ybS5maWVsZC5TZWxlY3QnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5mb3JtLmZpZWxkLlNlbGVjdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdzZWxlY3RmaWVsZCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdzZWxlY3RmaWVsZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLXNlbGVjdGZpZWxkJywgJ25lby1waWNrZXJmaWVsZCcsICduZW8tdGV4dGZpZWxkJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tc2VsZWN0ZmllbGQnLCAnbmVvLXBpY2tlcmZpZWxkJywgJ25lby10ZXh0ZmllbGQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZGlzcGxheUZpZWxkPSduYW1lJ1xuICAgICAgICAgKi9cbiAgICAgICAgZGlzcGxheUZpZWxkOiAnbmFtZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8TnVtYmVyfG51bGx9IGhpbnRSZWNvcmRJZD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBoaW50UmVjb3JkSWQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRpdGlvbmFsIHVzZWQga2V5cyBmb3IgdGhlIHNlbGVjdGlvbiBtb2RlbFxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGtleXNcbiAgICAgICAgICovXG4gICAgICAgIGtleXM6IHtcbiAgICAgICAgICAgICdEb3duJyAgOiAnb25LZXlEb3duRG93bicsXG4gICAgICAgICAgICAnRW50ZXInIDogJ29uS2V5RG93bkVudGVyJyxcbiAgICAgICAgICAgICdFc2NhcGUnOiAnb25LZXlEb3duRXNjYXBlJyxcbiAgICAgICAgICAgICdSaWdodCcgOiAnb25LZXlEb3duUmlnaHQnLFxuICAgICAgICAgICAgJ1VwJyAgICA6ICdvbktleURvd25VcCdcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBsYXN0TWFudWFsSW5wdXQ9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBsYXN0TWFudWFsSW5wdXQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8ubGlzdC5CYXNlfSBsaXN0PW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbGlzdDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBsaXN0Q29uZmlnPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGxpc3RDb25maWc6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBwaWNrZXIgY29udGFpbmVyLiBEZWZhdWx0cyB0byBweC5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IHBpY2tlckhlaWdodD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBwaWNrZXJIZWlnaHQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5TdG9yZXxudWxsfSBzdG9yZV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc3RvcmVfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzcGxheSB0aGUgZmlyc3QgbWF0Y2hpbmcgcmVzdWx0IHdoaWxlIHR5cGluZ1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSB0eXBlQWhlYWRfPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHR5cGVBaGVhZF86IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5saXN0ID0gTmVvLmNyZWF0ZSh7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogTGlzdCxcbiAgICAgICAgICAgIGRpc3BsYXlGaWVsZCAgOiBtZS5kaXNwbGF5RmllbGQsXG4gICAgICAgICAgICBzZWxlY3Rpb25Nb2RlbDoge3N0YXlJbkxpc3Q6IGZhbHNlfSxcbiAgICAgICAgICAgIHNpbGVudFNlbGVjdCAgOiB0cnVlLFxuICAgICAgICAgICAgc3RvcmUgICAgICAgICA6IG1lLnN0b3JlLFxuICAgICAgICAgICAgLi4ubWUubGlzdENvbmZpZyB8fCB7fVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5saXN0LmtleXMuX2tleXMucHVzaChcbiAgICAgICAgICAgIHtmbjogJ29uQ29udGFpbmVyS2V5RG93bkVudGVyJywgIGtleTogJ0VudGVyJywgIHNjb3BlOiBtZS5pZH0sXG4gICAgICAgICAgICB7Zm46ICdvbkNvbnRhaW5lcktleURvd25Fc2NhcGUnLCBrZXk6ICdFc2NhcGUnLCBzY29wZTogbWUuaWR9XG4gICAgICAgICk7XG5cbiAgICAgICAgbWUubGlzdC5vbih7XG4gICAgICAgICAgICBjcmVhdGVJdGVtcyAgICAgICA6IG1lLm9uTGlzdENyZWF0ZUl0ZW1zLFxuICAgICAgICAgICAgaXRlbUNsaWNrICAgICAgICAgOiBtZS5vbkxpc3RJdGVtQ2xpY2ssXG4gICAgICAgICAgICBpdGVtTmF2aWdhdGUgICAgICA6IG1lLm9uTGlzdEl0ZW1OYXZpZ2F0ZSxcbiAgICAgICAgICAgIHNlbGVjdFBvc3RMYXN0SXRlbTogbWUuZm9jdXNJbnB1dEVsLFxuICAgICAgICAgICAgc2VsZWN0UHJlRmlyc3RJdGVtOiBtZS5mb2N1c0lucHV0RWwsXG4gICAgICAgICAgICBzY29wZSAgICAgICAgICAgICA6IG1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtZS50eXBlQWhlYWQpIHtcbiAgICAgICAgICAgIG1lLnVwZGF0ZVR5cGVBaGVhZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBzdG9yZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge05lby5kYXRhLlN0b3JlfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TmVvLmRhdGEuU3RvcmV9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U3RvcmUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBmaWx0ZXJzO1xuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgZmlsdGVycyA9IHZhbHVlLmZpbHRlcnMgfHwgW107XG5cbiAgICAgICAgICAgIGZpbHRlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaW5jbHVkZUVtcHR5VmFsdWVzOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yICAgICAgICAgIDogJ2xpa2UnLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5ICAgICAgICAgIDogbWUuZGlzcGxheUZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgICAgICAgICAgIDogbWUudmFsdWVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YWx1ZS5maWx0ZXJzID0gZmlsdGVycztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdHlwZUFoZWFkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VHlwZUFoZWFkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5yZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUeXBlQWhlYWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdmFsdWUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3ByZXZlbnRGaWx0ZXI9ZmFsc2VdXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VmFsdWUodmFsdWUsIG9sZFZhbHVlLCBwcmV2ZW50RmlsdGVyPWZhbHNlKSB7Y29uc29sZS5sb2coJ2FmdGVyU2V0VmFsdWUnLCB2YWx1ZSk7XG4gICAgICAgIHN1cGVyLmFmdGVyU2V0VmFsdWUodmFsdWUsIG9sZFZhbHVlKTtcblxuICAgICAgICBpZiAoIXByZXZlbnRGaWx0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIHN0b3JlIGNvbmZpZyBnZXRzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtPYmplY3R8TmVvLmRhdGEuU3RvcmV8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge05lby5kYXRhLlN0b3JlfSBvbGRWYWx1ZVxuICAgICAqIEByZXR1cm5zIHtOZW8uZGF0YS5TdG9yZX1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0U3RvcmUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgb2xkVmFsdWUuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIENsYXNzU3lzdGVtVXRpbC5iZWZvcmVTZXRJbnN0YW5jZSh2YWx1ZSwgU3RvcmUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge05lby5saXN0LkJhc2V9XG4gICAgICovXG4gICAgY3JlYXRlUGlja2VyQ29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXVxuICAgICAqL1xuICAgIGZvY3VzSW5wdXRFbChjYWxsYmFjaykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLnVwZGF0ZVR5cGVBaGVhZFZhbHVlKG1lLmxhc3RNYW51YWxJbnB1dCwgdHJ1ZSk7XG4gICAgICAgIG1lLnZhbHVlID0gbWUubGFzdE1hbnVhbElucHV0O1xuXG4gICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5mb2N1cyh7XG4gICAgICAgICAgICBpZDogbWUuZ2V0SW5wdXRFbElkKClcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRJbnB1dEhpbnRFbCgpIHtcbiAgICAgICAgbGV0IGVsID0gVkRvbVV0aWwuZmluZFZkb21DaGlsZCh0aGlzLnZkb20sIHRoaXMuZ2V0SW5wdXRIaW50SWQoKSk7XG4gICAgICAgIHJldHVybiBlbCAmJiBlbC52ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRJbnB1dEhpbnRJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQgKyAnX19pbnB1dC1oaW50J1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZpcnN0IHNlbGVjdGVkIHJlY29yZCBvciBudWxsXG4gICAgICogcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldFJlY29yZCgpIHtcbiAgICAgICAgY29uc3QgbGlzdCAgICAgID0gdGhpcy5saXN0LFxuICAgICAgICAgICAgICByZWNvcmRLZXkgPSBsaXN0LnNlbGVjdGlvbk1vZGVsLmdldFNlbGVjdGlvbigpWzBdO1xuXG4gICAgICAgIHJldHVybiByZWNvcmRLZXkgJiYgdGhpcy5zdG9yZS5nZXQobGlzdC5nZXRJdGVtUmVjb3JkSWQocmVjb3JkS2V5KSkgfHwgbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbkNvbnRhaW5lcktleURvd25FbnRlcihkYXRhKSB7XG4gICAgICAgIHRoaXMuaGlkZVBpY2tlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uQ29udGFpbmVyS2V5RG93bkVzY2FwZShkYXRhKSB7XG4gICAgICAgIHRoaXMuZm9jdXNJbnB1dEVsKHRoaXMuaGlkZVBpY2tlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25JbnB1dFZhbHVlQ2hhbmdlKGRhdGEpIHtcbiAgICAgICAgc3VwZXIub25JbnB1dFZhbHVlQ2hhbmdlKGRhdGEpO1xuICAgICAgICB0aGlzLmxhc3RNYW51YWxJbnB1dCA9IGRhdGEudmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbktleURvd25Eb3duKGRhdGEpIHtcbiAgICAgICAgdGhpcy5vbktleURvd25FbnRlcihkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uS2V5RG93bkVudGVyKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgID0gdGhpcztcblxuICAgICAgICBpZiAobWUucGlja2VySXNNb3VudGVkKSB7XG4gICAgICAgICAgICBtZS5zZWxlY3RMaXN0SXRlbSgpO1xuICAgICAgICAgICAgc3VwZXIub25LZXlEb3duRW50ZXIoZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdXBlci5vbktleURvd25FbnRlcihkYXRhLCBtZS5zZWxlY3RMaXN0SXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uS2V5RG93blJpZ2h0KGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUuaGludFJlY29yZElkKSB7XG4gICAgICAgICAgICBtZS52YWx1ZSA9IG1lLnN0b3JlLmdldChtZS5oaW50UmVjb3JkSWQpW21lLmRpc3BsYXlGaWVsZF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uS2V5RG93blVwKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUucGlja2VySXNNb3VudGVkKSB7XG4gICAgICAgICAgICBtZS5zZWxlY3RMYXN0TGlzdEl0ZW0oKTtcbiAgICAgICAgICAgIHN1cGVyLm9uS2V5RG93bkVudGVyKGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIub25LZXlEb3duRW50ZXIoZGF0YSwgbWUuc2VsZWN0TGFzdExpc3RJdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpc3QgaXRlbXMgZ290IGNyZWF0ZWQgb3IgdXBkYXRlZFxuICAgICAqIFNpbmNlIHRoZSBsaXN0ICYgaW5wdXRIaW50IHVwZGF0ZSB3b3VsZCBydW4gaW4gcGFyYWxsZWwgPT4gYmVmb3JlIGdldHRpbmcgdGhlIG5ldyB2bm9kZSBiYWNrXG4gICAgICogdGhpcyBjb3VsZCBjYXVzZSBpbnZhbGlkIHN0YXRlcywgc28gd2UgZGVsYXkgdXBkYXRlVHlwZUFoZWFkVmFsdWUoKSB1bnRpbCB0aGUgbGlzdCBpcyBkb25lLlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbkxpc3RDcmVhdGVJdGVtcygpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUudHlwZUFoZWFkKSB7XG4gICAgICAgICAgICBpZiAobWUucGlja2VyICYmIG1lLnBpY2tlci5tb3VudGVkKSB7XG4gICAgICAgICAgICAgICAgbWUudXBkYXRlVHlwZUFoZWFkVmFsdWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqL1xuICAgIG9uTGlzdEl0ZW1DbGljayhyZWNvcmQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIG9sZFZhbHVlID0gbWUudmFsdWUsXG4gICAgICAgICAgICB2YWx1ZSAgICA9IHJlY29yZFttZS5kaXNwbGF5RmllbGRdO1xuXG4gICAgICAgIGlmIChtZS52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIG1lLmhpbnRSZWNvcmRJZCA9IG51bGw7XG4gICAgICAgICAgICBtZS5fdmFsdWUgICAgICAgPSB2YWx1ZTtcbiAgICAgICAgICAgIG1lLmdldElucHV0SGludEVsKCkudmFsdWUgPSBudWxsO1xuXG4gICAgICAgICAgICBtZS5hZnRlclNldFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgdHJ1ZSk7IC8vIHByZXZlbnQgdGhlIGxpc3QgZnJvbSBnZXR0aW5nIGZpbHRlcmVkXG5cbiAgICAgICAgICAgIG1lLmZpcmUoJ3NlbGVjdCcsIHtcbiAgICAgICAgICAgICAgICByZWNvcmQ6IHJlY29yZCxcbiAgICAgICAgICAgICAgICB2YWx1ZSA6IHJlY29yZFttZS5zdG9yZS5rZXlQcm9wZXJ0eV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjb3JkXG4gICAgICovXG4gICAgb25MaXN0SXRlbU5hdmlnYXRlKHJlY29yZCkge1xuICAgICAgICB0aGlzLm9uTGlzdEl0ZW1DbGljayhyZWNvcmQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgc2VsZWN0Rmlyc3RMaXN0SXRlbSgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RMaXN0SXRlbSgwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHNlbGVjdExhc3RMaXN0SXRlbSgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RMaXN0SXRlbSh0aGlzLnN0b3JlLmdldENvdW50KCkgLTEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIG5vIGluZGV4IGlzIHBhc3NlZCwgdGhlIGluZGV4IG1hdGNoaW5nIHRvIHRoZSBmaWVsZCBpbnB1dCB3aWxsIGdldCB1c2VkICgwIGlmIG5vbmUpXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtpbmRleF1cbiAgICAgKi9cbiAgICBzZWxlY3RMaXN0SXRlbShpbmRleCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICghTmVvLmlzTnVtYmVyKGluZGV4KSkge1xuICAgICAgICAgICAgaWYgKG1lLmhpbnRSZWNvcmRJZCkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gbWUuc3RvcmUuaW5kZXhPZktleShtZS5oaW50UmVjb3JkSWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZS5vbkxpc3RJdGVtTmF2aWdhdGUobWUuc3RvcmUuZ2V0QXQoaW5kZXgpKTtcbiAgICAgICAgbWUubGlzdC5zZWxlY3RJdGVtKGluZGV4KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgdXBkYXRlVHlwZUFoZWFkKHNpbGVudD1mYWxzZSkge1xuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpbnB1dEVsID0gVkRvbVV0aWwuZmluZFZkb21DaGlsZChtZS52ZG9tLCBtZS5pZCArICctaW5wdXQnKSxcbiAgICAgICAgICAgIHZkb20gICAgPSBtZS52ZG9tO1xuXG4gICAgICAgIGlmIChtZS50eXBlQWhlYWQpIHtcbiAgICAgICAgICAgIGlucHV0RWwucGFyZW50Tm9kZS5jbltpbnB1dEVsLmluZGV4XSA9IHtcbiAgICAgICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWlucHV0LWZpZWxkLXdyYXBwZXInXSxcbiAgICAgICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgICAgIHRhZyAgICAgICAgIDogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiAnb2ZmJyxcbiAgICAgICAgICAgICAgICAgICAgYXV0b2NvcnJlY3QgOiAnb2ZmJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzICAgICAgICAgOiBbJ25lby10ZXh0ZmllbGQtaW5wdXQnLCAnbmVvLXR5cGVhaGVhZC1pbnB1dCddLFxuICAgICAgICAgICAgICAgICAgICBpZCAgICAgICAgICA6IG1lLmdldElucHV0SGludElkKCksXG4gICAgICAgICAgICAgICAgICAgIHNwZWxsY2hlY2sgIDogJ2ZhbHNlJ1xuICAgICAgICAgICAgICAgIH0sIGlucHV0RWwudmRvbV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFZEb21VdGlsLnJlcGxhY2VWZG9tQ2hpbGQodmRvbSwgaW5wdXRFbC5wYXJlbnROb2RlLmlkLCBpbnB1dEVsLnZkb20pO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVbc2lsZW50ID8gJ192ZG9tJyA6ICd2ZG9tJ10gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gW3ZhbHVlXVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgdXBkYXRlVHlwZUFoZWFkVmFsdWUodmFsdWUsIHNpbGVudD1mYWxzZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaGFzTWF0Y2ggICAgPSBmYWxzZSxcbiAgICAgICAgICAgIHN0b3JlICAgICAgID0gbWUuc3RvcmUsXG4gICAgICAgICAgICBpICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgICA9IHN0b3JlLmdldENvdW50KCksXG4gICAgICAgICAgICB2ZG9tICAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBpbnB1dEhpbnRFbCA9IG1lLmdldElucHV0SGludEVsKCksXG4gICAgICAgICAgICBzdG9yZVZhbHVlO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG1lLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzdG9yZVZhbHVlID0gc3RvcmUuaXRlbXNbaV1bbWUuZGlzcGxheUZpZWxkXTtcblxuICAgICAgICAgICAgICAgIGlmIChzdG9yZVZhbHVlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWx1ZS50b0xvd2VyQ2FzZSgpKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhhc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRIaW50RWwudmFsdWUgPSB2YWx1ZSArIHN0b3JlVmFsdWUuc3Vic3RyKHZhbHVlLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgbWUuaGludFJlY29yZElkID0gc3RvcmUuaXRlbXNbaV1bc3RvcmUua2V5UHJvcGVydHkgfHwgc3RvcmUubW9kZWwua2V5UHJvcGVydHldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFoYXNNYXRjaCAmJiBpbnB1dEhpbnRFbCkge1xuICAgICAgICAgICAgaW5wdXRIaW50RWwudmFsdWUgPSAnJztcbiAgICAgICAgICAgIG1lLmhpbnRSZWNvcmRJZCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBtZVtzaWxlbnQgPyAnX3Zkb20nIDogJ3Zkb20nXSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgdXBkYXRlVmFsdWUoKSB7XG4gICAgICAgIGxldCBtZSAgICA9IHRoaXMsXG4gICAgICAgICAgICBzdG9yZSA9IG1lLnN0b3JlLFxuICAgICAgICAgICAgZmlsdGVyO1xuXG4gICAgICAgIGlmIChzdG9yZSAmJiAhTmVvLmlzRW1wdHkoc3RvcmUuZmlsdGVycykpIHtcbiAgICAgICAgICAgIGZpbHRlciA9IHN0b3JlLmdldEZpbHRlcihtZS5kaXNwbGF5RmllbGQpO1xuXG4gICAgICAgICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyLnZhbHVlID0gbWUudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWUudHlwZUFoZWFkKSB7XG4gICAgICAgICAgICBpZiAoIShtZS5waWNrZXIgJiYgbWUucGlja2VyLmNvbnRhaW5zRm9jdXMpKSB7XG4gICAgICAgICAgICAgICAgbWUudXBkYXRlVHlwZUFoZWFkVmFsdWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBUaGUgc2VsZWN0IGV2ZW50IGZpcmVzIHdoZW4gYSBsaXN0IGl0ZW0gZ2V0cyBzZWxlY3RlZFxuICogQGV2ZW50IHNlbGVjdFxuICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICogQHBhcmFtIHt2YWx1ZX0gcmVjb3JkW3N0b3JlLmtleVByb3BlcnR5XVxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhTZWxlY3QpO1xuXG5leHBvcnQge1NlbGVjdCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBVc2VkIGJ5IGZvcm0uZmllbGQuUGlja2VyXG4gKiBAY2xhc3MgTmVvLmZvcm0uZmllbGQudHJpZ2dlci5QaWNrZXJcbiAqIEBleHRlbmRzIE5lby5mb3JtLmZpZWxkLnRyaWdnZXIuQmFzZVxuICovXG5jbGFzcyBQaWNrZXIgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmZvcm0uZmllbGQudHJpZ2dlci5QaWNrZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5mb3JtLmZpZWxkLnRyaWdnZXIuUGlja2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3RyaWdnZXItcGlja2VyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3RyaWdnZXItcGlja2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBpY29uQ2xzPSdmYSBmYS1jYXJldC1kb3duJ1xuICAgICAgICAgKi9cbiAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWNhcmV0LWRvd24nLFxuICAgICAgICAvKipcbiAgICAgICAgICogSW50ZXJuYWwgZmxhZyB1c2VkIGJ5IGZpZWxkLmdldFRyaWdnZXIoKVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHR5cGU9J3BpY2tlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgdHlwZTogJ3BpY2tlcidcbiAgICB9fVxuXG4gICAgb25UcmlnZ2VyQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmZpZWxkLm9uUGlja2VyVHJpZ2dlckNsaWNrKCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhQaWNrZXIpO1xuXG5leHBvcnQge1BpY2tlciBhcyBkZWZhdWx0fTsiXSwic291cmNlUm9vdCI6IiJ9