self["webpackChunk"](["vendors~chunks/examples-calendar-basic-app~chunks/examples-form-field-time-app"],{

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

/***/ "./node_modules/neo.mjs/src/form/field/Time.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/Time.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Time; });
/* harmony import */ var _collection_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../collection/Base.mjs */ "./node_modules/neo.mjs/src/collection/Base.mjs");
/* harmony import */ var _list_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../list/Base.mjs */ "./node_modules/neo.mjs/src/list/Base.mjs");
/* harmony import */ var _Picker_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Picker.mjs */ "./node_modules/neo.mjs/src/form/field/Picker.mjs");
/* harmony import */ var _trigger_Time_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trigger/Time.mjs */ "./node_modules/neo.mjs/src/form/field/trigger/Time.mjs");





/**
 *
 * @class Neo.form.field.Time
 * @extends Neo.form.field.Picker
 */
class Time extends _Picker_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.Time'
         * @protected
         */
        className: 'Neo.form.field.Time',
        /**
         * @member {String} ntype='timefield'
         * @protected
         */
        ntype: 'timefield',
        /**
         * @member {String[]} cls=['neo-timefield', 'neo-pickerfield', 'neo-textfield']
         */
        cls: ['neo-timefield', 'neo-pickerfield', 'neo-textfield'],
        /**
         * @member {Neo.collection.Base|null} collection=null
         */
        collection: null,
        /**
         * @member {String} inputType='time'
         */
        inputType: 'time',
        /**
         * Additional used keys for the selection model
         * @member {Object} keys
         */
        keys: {
            'Enter' : 'onKeyDownEnter',
            'Escape': 'onKeyDownEscape'
        },
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
         * @member {String} maxValue_='16:00'
         */
        maxValue_: '16:00',
        /**
         * @member {String} minValue_='08:00'
         */
        minValue_: '08:00',
        /**
         * The height of the picker container. Defaults to px.
         * @member {Number|null} pickerHeight=150
         */
        pickerHeight: 150,
        /**
         * Defaults to 1min
         * @member {Number} stepSize_=60*5
         */
        stepSize_: 60 * 5, // 5min
        /**
         * @member {Object|Object[]} triggers=[{module: TimeTrigger}]
         * @protected
         */
        triggers: [{
            module: _trigger_Time_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]
        }]
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        me.collection = Neo.create({
            module     : _collection_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            items      : me.createCollectionItems(),
            keyProperty: 'value'
        });

        me.list = Neo.create({
            module        : _list_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            displayField  : 'value',
            store         : me.collection,
            ...me.listConfig || {}
        });

        me.list.keys._keys.push(
            {fn: 'onContainerKeyDownEnter',  key: 'Enter',  scope: me.id},
            {fn: 'onContainerKeyDownEscape', key: 'Escape', scope: me.id}
        );

        me.list.on({
            itemClick   : me.onListItemClick,
            itemNavigate: me.onListItemNavigate,
            scope       : me
        });
    }

    /**
     * Triggered after the maxValue config got changed
     * @param {Text} value
     * @param {Text} oldValue
     * @protected
     */
    afterSetMaxValue(value, oldValue) {
        this.changeInputElKey('max', value);
    }

    /**
     * Triggered after the minValue config got changed
     * @param {Text} value
     * @param {Text} oldValue
     * @protected
     */
    afterSetMinValue(value, oldValue) {
        this.changeInputElKey('min', value);
    }

    /**
     * Triggered after the stepSize config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetStepSize(value, oldValue) {
        this.changeInputElKey('step', value);

        // todo: adjust min & max value => see: form.field.Number
    }

    /**
     * Triggered after the value config got changed
     * @param {String|null} value
     * @param {String|null} oldValue
     * @param {Boolean} [preventListSelect=false]
     * @protected
     */
    afterSetValue(value, oldValue, preventListSelect=false) {
        super.afterSetValue(value, oldValue);

        if (this.pickerIsMounted && !preventListSelect) {
            this.selectCurrentListItem(true);
        }
    }

    /**
     * Triggered before the maxValue config gets changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     * @returns {String}
     */
    beforeSetMaxValue(value, oldValue) {
        // todo: check format => '08:00'
        return value;
    }

    /**
     * Triggered before the minValue config gets changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     * @returns {String}
     */
    beforeSetMinValue(value, oldValue) {
        // todo: check format => '08:00'
        return value;
    }

    /**
     *
     * @returns {String[]}
     */
    createCollectionItems() {
        let me          = this,
            currentDate = new Date(),
            end         = me.maxValue.split(':').map(Number),
            endDate     = new Date(),
            start       = me.minValue.split(':').map(Number),
            listItems   = [];

        const dt = new Intl.DateTimeFormat(Neo.config.locale, {
            hour  : '2-digit',
            minute: '2-digit',
            second: me.stepSize < 60 ? '2-digit' : undefined
        });

        if (end.length < 3) {end.push(0);}
        endDate.setHours(...end);

        if (start.length < 3) {start.push(0);}
        currentDate.setHours(...start);

        while (currentDate <= endDate) {//console.log(currentDate);
            listItems.push({
                value: dt.format(currentDate)
            });

            currentDate.setSeconds(currentDate.getSeconds() + me.stepSize);
        }

        return listItems;
    }

    /**
     *
     * @returns {Neo.component.DateSelector}
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

        Neo.main.DomAccess.focus({
            id: me.getInputElId()
        }).then(() => {
            if (callback) {
                callback.apply(me);
            }
        });
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
     *
     * @param {Object} data
     * @protected
     */
    onKeyDownEnter(data) {
        let me = this;

        if (me.pickerIsMounted) {
            super.onKeyDownEnter(data);
            me.selectCurrentListItem();
        } else {
            super.onKeyDownEnter(data, me.selectCurrentListItem);
        }
    }

    /**
     *
     * @param {Object} record
     */
    onListItemClick(record) {
        let me       = this,
            oldValue = me.value,
            value    = record.value;

        if (me.value !== value) {
            me._value = value;
            me.afterSetValue(value, oldValue, true); // prevent the list from getting selected / focused
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
     * @param {Boolean} [preventFocus=false]
     */
    selectCurrentListItem(preventFocus=false) {
        let me   = this,
            list = me.list,
            id   = list.getItemId(me.value);

        list.selectionModel.select(id);

        if (!preventFocus) {
            list.focus(id);
        } else {
            Neo.main.DomAccess.scrollIntoView({
                id: id
            });
        }
    }
}

Neo.applyClassConfig(Time);



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

/***/ "./node_modules/neo.mjs/src/form/field/trigger/Time.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/trigger/Time.mjs ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Time; });
/* harmony import */ var _Picker_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Picker.mjs */ "./node_modules/neo.mjs/src/form/field/trigger/Picker.mjs");


/**
 * Used by form.field.Time
 * @class Neo.form.field.trigger.Time
 * @extends Neo.form.field.trigger.Picker
 */
class Time extends _Picker_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.trigger.Time'
         * @protected
         */
        className: 'Neo.form.field.trigger.Time',
        /**
         * @member {String} ntype='trigger-time'
         * @protected
         */
        ntype: 'trigger-time',
        /**
         * @member {String|null} iconCls='fa fa-clock'
         */
        iconCls: 'fa fa-clock'
    }}
}

Neo.applyClassConfig(Time);



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9QaWNrZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL1RpbWUubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL3RyaWdnZXIvUGlja2VyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC90cmlnZ2VyL1RpbWUubWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUQ7QUFDSjtBQUNWO0FBQ1M7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlEQUFJO0FBQ3pCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixNQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQUE7QUFBQTtBQUFrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtREFBTTtBQUN6Qix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtY2FsZW5kYXItYmFzaWMtYXBwfmNodW5rcy9leGFtcGxlcy1mb3JtLWZpZWxkLXRpbWUtYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhaW5lciAgICAgZnJvbSAnLi4vLi4vY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBQaWNrZXJUcmlnZ2VyIGZyb20gJy4vdHJpZ2dlci9QaWNrZXIubWpzJztcbmltcG9ydCBUZXh0ICAgICAgICAgIGZyb20gJy4vVGV4dC5tanMnO1xuaW1wb3J0IFZEb21VdGlsICAgICAgZnJvbSAnLi4vLi4vdXRpbC9WRG9tLm1qcyc7XG5cbi8qKlxuICogVGhlIGFic3RyYWN0IHBpY2tlciBmaWVsZCBwcm92aWRlcyBhbiBhcnJvdyBkb3duIHRyaWdnZXIgd2hpY2ggb3BlbnMgYSBmbG9hdGluZyBjb250YWluZXIgdG8gcHJvdmlkZVxuICogbW9yZSBkYXRhIHNlbGVjdGlvbiBvcHRpb25zXG4gKiBAY2xhc3MgTmVvLmZvcm0uZmllbGQuUGlja2VyXG4gKiBAZXh0ZW5kcyBOZW8uZm9ybS5maWVsZC5UZXh0XG4gKiBAYWJzdHJhY3RcbiAqL1xuY2xhc3MgUGlja2VyIGV4dGVuZHMgVGV4dCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5mb3JtLmZpZWxkLlBpY2tlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmZvcm0uZmllbGQuUGlja2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3BpY2tlcmZpZWxkJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3BpY2tlcmZpZWxkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0b3JlcyB0aGUgZGF0YSBmcm9tIHRoZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBjYWxsIChwaWNrZXIgJiBib2R5IERvbVJlY3RzKVxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gY2xpZW50UmVjdHM9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGllbnRSZWN0czogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tcGlja2VyZmllbGQnLCAnbmVvLXRleHRmaWVsZCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLXBpY2tlcmZpZWxkJywgJ25lby10ZXh0ZmllbGQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZGl0aW9uYWwgdXNlZCBrZXlzIGZvciB0aGUgc2VsZWN0aW9uIG1vZGVsXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0ga2V5c1xuICAgICAgICAgKi9cbiAgICAgICAga2V5czoge1xuICAgICAgICAgICAgJ0VudGVyJyA6ICdvbktleURvd25FbnRlcicsXG4gICAgICAgICAgICAnRXNjYXBlJzogJ29uS2V5RG93bkVzY2FwZSdcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1hdGNoUGlja2VyV2lkdGg9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgbWF0Y2hQaWNrZXJXaWR0aDogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBwaWNrZXI9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBwaWNrZXI6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25maWdzIHRvIHBhc3MgdG8gdGhlIHBpY2tlciBjb250YWluZXJcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IHBpY2tlckNvbmZpZz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBwaWNrZXJDb25maWc6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBwaWNrZXIgY29udGFpbmVyLiBEZWZhdWx0cyB0byBweC5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IHBpY2tlckhlaWdodD0xMDBcbiAgICAgICAgICovXG4gICAgICAgIHBpY2tlckhlaWdodDogMTAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcGlja2VySXNNb3VudGVkPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHBpY2tlcklzTW91bnRlZDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBwaWNrZXIgY29udGFpbmVyLiBEZWZhdWx0cyB0byBweC5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IHBpY2tlck1heEhlaWdodD0yMDBcbiAgICAgICAgICovXG4gICAgICAgIHBpY2tlck1heEhlaWdodDogMjAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHdpZHRoIG9mIHRoZSBwaWNrZXIgY29udGFpbmVyLiBEZWZhdWx0cyB0byBweC5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IHBpY2tlcldpZHRoPTEwMFxuICAgICAgICAgKi9cbiAgICAgICAgcGlja2VyV2lkdGg6IDEwMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxPYmplY3RbXX0gdHJpZ2dlcnM9W11cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgdHJpZ2dlcnM6IFt7XG4gICAgICAgICAgICBtb2R1bGU6IFBpY2tlclRyaWdnZXJcbiAgICAgICAgfV1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbnRhaW5lci5CYXNlfVxuICAgICAqL1xuICAgIGNyZWF0ZVBpY2tlcigpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBwaWNrZXJDb21wb25lbnQgPSBtZS5jcmVhdGVQaWNrZXJDb21wb25lbnQoKTtcblxuICAgICAgICByZXR1cm4gTmVvLmNyZWF0ZShDb250YWluZXIsIHtcbiAgICAgICAgICAgIGFwcE5hbWUgIDogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgIGNscyAgICAgIDogWyduZW8tcGlja2VyLWNvbnRhaW5lcicsICduZW8tY29udGFpbmVyJ10sXG4gICAgICAgICAgICBoZWlnaHQgICA6IG1lLnBpY2tlckhlaWdodCxcbiAgICAgICAgICAgIGlkICAgICAgIDogbWUuZ2V0UGlja2VySWQoKSxcbiAgICAgICAgICAgIGl0ZW1zICAgIDogcGlja2VyQ29tcG9uZW50ID8gW3BpY2tlckNvbXBvbmVudF0gOiBbXSxcbiAgICAgICAgICAgIG1heEhlaWdodDogbWUucGlja2VyTWF4SGVpZ2h0LFxuICAgICAgICAgICAgdmRvbSAgICAgOiB7Y246IFtdLCB0YWJJbmRleDogLTF9LFxuICAgICAgICAgICAgd2lkdGggICAgOiBtZS5waWNrZXJXaWR0aCxcbiAgICAgICAgICAgIC4uLm1lLnBpY2tlckNvbmZpZyB8fCB7fVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gc2lsZW50XG4gICAgICovXG4gICAgYXBwbHlDbGllbnRSZWN0cyhzaWxlbnQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGJvZHlSZWN0ICAgID0gbWUuY2xpZW50UmVjdHNbMl0sXG4gICAgICAgICAgICBpbnB1dFJlY3QgICA9IG1lLmNsaWVudFJlY3RzWzFdLFxuICAgICAgICAgICAgdHJpZ2dlclJlY3QgPSBtZS5jbGllbnRSZWN0c1swXSxcbiAgICAgICAgICAgIHZkb20gICAgICAgID0gbWUucGlja2VyLnZkb20sXG4gICAgICAgICAgICB3aWR0aCAgICAgICA9IG1lLm1hdGNoUGlja2VyV2lkdGggPyAoaW5wdXRSZWN0LndpZHRoIC0gMSkgOiBtZS5waWNrZXJXaWR0aDtcblxuICAgICAgICBtZS5waWNrZXJXaWR0aCA9IHdpZHRoO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24odmRvbS5zdHlsZSwge1xuICAgICAgICAgICAgbGVmdCA6IGAke3RyaWdnZXJSZWN0LmxlZnQgKyB0cmlnZ2VyUmVjdC53aWR0aCAtIHdpZHRofXB4YCxcbiAgICAgICAgICAgIHRvcCAgOiBgJHt0cmlnZ2VyUmVjdC50b3AgKyB0cmlnZ2VyUmVjdC5oZWlnaHQgKyAxfXB4YCxcbiAgICAgICAgICAgIHdpZHRoOiBgJHt3aWR0aH1weGBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUucGlja2VyW3NpbGVudCA/ICdfdmRvbScgOiAndmRvbSddID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudWxsfVxuICAgICAqL1xuICAgIGNyZWF0ZVBpY2tlckNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrU2NvcGVdXG4gICAgICovXG4gICAgZ2V0Q2xpZW50UmVjdHNUaGVuU2hvdyhjYWxsYmFjaywgY2FsbGJhY2tTY29wZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5nZXRCb3VuZGluZ0NsaWVudFJlY3Qoe1xuICAgICAgICAgICAgaWQ6IFttZS5pZCwgbWUuaWQgKyAnLWlucHV0LXdyYXBwZXInLCAnYm9keSddXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBtZS5jbGllbnRSZWN0cyA9IGRhdGE7XG4gICAgICAgICAgICBtZS5zaG93UGlja2VyKGNhbGxiYWNrLCBjYWxsYmFja1Njb3BlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcGlja2VyIGluc3RhbmNlIGFuZCBjcmVhdGVzIGl0IGluIGNhc2UgaXQgZG9lcyBub3QgZXhpc3QgeWV0XG4gICAgICogQHJldHVybnMge05lby5jb250YWluZXIuQmFzZX1cbiAgICAgKi9cbiAgICBnZXRQaWNrZXIoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCFtZS5waWNrZXIpIHtcbiAgICAgICAgICAgIG1lLnBpY2tlciA9IG1lLmNyZWF0ZVBpY2tlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1lLnBpY2tlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0UGlja2VySWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkICsgJ19fcGlja2VyJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV1cbiAgICAgKi9cbiAgICBoaWRlUGlja2VyKHNpbGVudD1mYWxzZSkge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHBpY2tlciA9IG1lLmdldFBpY2tlcigpLFxuICAgICAgICAgICAgdmRvbSAgID0gbWUudmRvbTtcblxuICAgICAgICBpZiAobWUucGlja2VySXNNb3VudGVkKSB7XG4gICAgICAgICAgICBWRG9tVXRpbC5yZW1vdmVWZG9tQ2hpbGQodmRvbSwgbWUuZ2V0UGlja2VySWQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBtZS5waWNrZXJJc01vdW50ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc2lsZW50KSB7XG4gICAgICAgICAgICBtZS5fdmRvbSA9IHZkb207XG4gICAgICAgICAgICBwaWNrZXIubW91bnRlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUucHJvbWlzZVZkb21VcGRhdGUoKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHBpY2tlci5tb3VudGVkID0gbWUucGlja2VySXNNb3VudGVkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGRhdGFcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25Gb2N1c0xlYXZlKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAvLyBpbmxpbmUgd2lsbCB0cmlnZ2VyIGFuIHZkb20gdXBkYXRlLCBzbyBoaWRlIHBpY2tlciBzaG91bGQgYmUgc2lsZW50XG4gICAgICAgIGlmIChtZS5sYWJlbFBvc2l0aW9uID09PSAnaW5saW5lJyAmJiAobWUudmFsdWUgPT09ICcnIHx8IG1lLnZhbHVlID09PSBudWxsKSkge1xuICAgICAgICAgICAgbWUuaGlkZVBpY2tlcih0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLmhpZGVQaWNrZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLm9uRm9jdXNMZWF2ZShkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja1Njb3BlXVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbktleURvd25FbnRlcihkYXRhLCBjYWxsYmFjaywgY2FsbGJhY2tTY29wZSkge1xuICAgICAgICBpZiAoIXRoaXMucGlja2VySXNNb3VudGVkKSB7XG4gICAgICAgICAgICB0aGlzLmdldENsaWVudFJlY3RzVGhlblNob3coY2FsbGJhY2ssIGNhbGxiYWNrU2NvcGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbktleURvd25Fc2NhcGUoZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5waWNrZXJJc01vdW50ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZVBpY2tlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGJ5IGZvcm0uZmllbGQudHJpZ2dlci5QaWNrZXJcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25QaWNrZXJUcmlnZ2VyQ2xpY2soKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLnBpY2tlcklzTW91bnRlZCkge1xuICAgICAgICAgICAgbWUuaGlkZVBpY2tlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUuZ2V0Q2xpZW50UmVjdHNUaGVuU2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrU2NvcGVdXG4gICAgICovXG4gICAgc2hvd1BpY2tlcihjYWxsYmFjaywgY2FsbGJhY2tTY29wZSkge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHBpY2tlciA9IG1lLmdldFBpY2tlcigpLFxuICAgICAgICAgICAgdmRvbSAgID0gbWUudmRvbTtcblxuICAgICAgICBtZS5hcHBseUNsaWVudFJlY3RzKHRydWUpO1xuICAgICAgICB2ZG9tLmNuLnB1c2gocGlja2VyLnZkb20pO1xuXG4gICAgICAgIG1lLnBpY2tlcklzTW91bnRlZCA9IHRydWU7XG5cbiAgICAgICAgbWUucHJvbWlzZVZkb21VcGRhdGUoKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgcGlja2VyLm1vdW50ZWQgPSBtZS5waWNrZXJJc01vdW50ZWQ7XG5cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KGNhbGxiYWNrU2NvcGUgfHwgbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFBpY2tlcik7XG5cbmV4cG9ydCB7UGlja2VyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb2xsZWN0aW9uICBmcm9tICcuLi8uLi9jb2xsZWN0aW9uL0Jhc2UubWpzJztcbmltcG9ydCBMaXN0ICAgICAgICBmcm9tICcuLi8uLi9saXN0L0Jhc2UubWpzJztcbmltcG9ydCBQaWNrZXIgICAgICBmcm9tICcuL1BpY2tlci5tanMnO1xuaW1wb3J0IFRpbWVUcmlnZ2VyIGZyb20gJy4vdHJpZ2dlci9UaW1lLm1qcyc7XG5cbi8qKlxuICpcbiAqIEBjbGFzcyBOZW8uZm9ybS5maWVsZC5UaW1lXG4gKiBAZXh0ZW5kcyBOZW8uZm9ybS5maWVsZC5QaWNrZXJcbiAqL1xuY2xhc3MgVGltZSBleHRlbmRzIFBpY2tlciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5mb3JtLmZpZWxkLlRpbWUnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5mb3JtLmZpZWxkLlRpbWUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndGltZWZpZWxkJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3RpbWVmaWVsZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLXRpbWVmaWVsZCcsICduZW8tcGlja2VyZmllbGQnLCAnbmVvLXRleHRmaWVsZCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLXRpbWVmaWVsZCcsICduZW8tcGlja2VyZmllbGQnLCAnbmVvLXRleHRmaWVsZCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbGxlY3Rpb24uQmFzZXxudWxsfSBjb2xsZWN0aW9uPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGNvbGxlY3Rpb246IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGlucHV0VHlwZT0ndGltZSdcbiAgICAgICAgICovXG4gICAgICAgIGlucHV0VHlwZTogJ3RpbWUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkaXRpb25hbCB1c2VkIGtleXMgZm9yIHRoZSBzZWxlY3Rpb24gbW9kZWxcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBrZXlzXG4gICAgICAgICAqL1xuICAgICAgICBrZXlzOiB7XG4gICAgICAgICAgICAnRW50ZXInIDogJ29uS2V5RG93bkVudGVyJyxcbiAgICAgICAgICAgICdFc2NhcGUnOiAnb25LZXlEb3duRXNjYXBlJ1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmxpc3QuQmFzZX0gbGlzdD1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGxpc3Q6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gbGlzdENvbmZpZz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBsaXN0Q29uZmlnOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBtYXhWYWx1ZV89JzE2OjAwJ1xuICAgICAgICAgKi9cbiAgICAgICAgbWF4VmFsdWVfOiAnMTY6MDAnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBtaW5WYWx1ZV89JzA4OjAwJ1xuICAgICAgICAgKi9cbiAgICAgICAgbWluVmFsdWVfOiAnMDg6MDAnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGhlaWdodCBvZiB0aGUgcGlja2VyIGNvbnRhaW5lci4gRGVmYXVsdHMgdG8gcHguXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxudWxsfSBwaWNrZXJIZWlnaHQ9MTUwXG4gICAgICAgICAqL1xuICAgICAgICBwaWNrZXJIZWlnaHQ6IDE1MCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmF1bHRzIHRvIDFtaW5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBzdGVwU2l6ZV89NjAqNVxuICAgICAgICAgKi9cbiAgICAgICAgc3RlcFNpemVfOiA2MCAqIDUsIC8vIDVtaW5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxPYmplY3RbXX0gdHJpZ2dlcnM9W3ttb2R1bGU6IFRpbWVUcmlnZ2VyfV1cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgdHJpZ2dlcnM6IFt7XG4gICAgICAgICAgICBtb2R1bGU6IFRpbWVUcmlnZ2VyXG4gICAgICAgIH1dXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuY29sbGVjdGlvbiA9IE5lby5jcmVhdGUoe1xuICAgICAgICAgICAgbW9kdWxlICAgICA6IENvbGxlY3Rpb24sXG4gICAgICAgICAgICBpdGVtcyAgICAgIDogbWUuY3JlYXRlQ29sbGVjdGlvbkl0ZW1zKCksXG4gICAgICAgICAgICBrZXlQcm9wZXJ0eTogJ3ZhbHVlJ1xuICAgICAgICB9KTtcblxuICAgICAgICBtZS5saXN0ID0gTmVvLmNyZWF0ZSh7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogTGlzdCxcbiAgICAgICAgICAgIGRpc3BsYXlGaWVsZCAgOiAndmFsdWUnLFxuICAgICAgICAgICAgc3RvcmUgICAgICAgICA6IG1lLmNvbGxlY3Rpb24sXG4gICAgICAgICAgICAuLi5tZS5saXN0Q29uZmlnIHx8IHt9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmxpc3Qua2V5cy5fa2V5cy5wdXNoKFxuICAgICAgICAgICAge2ZuOiAnb25Db250YWluZXJLZXlEb3duRW50ZXInLCAga2V5OiAnRW50ZXInLCAgc2NvcGU6IG1lLmlkfSxcbiAgICAgICAgICAgIHtmbjogJ29uQ29udGFpbmVyS2V5RG93bkVzY2FwZScsIGtleTogJ0VzY2FwZScsIHNjb3BlOiBtZS5pZH1cbiAgICAgICAgKTtcblxuICAgICAgICBtZS5saXN0Lm9uKHtcbiAgICAgICAgICAgIGl0ZW1DbGljayAgIDogbWUub25MaXN0SXRlbUNsaWNrLFxuICAgICAgICAgICAgaXRlbU5hdmlnYXRlOiBtZS5vbkxpc3RJdGVtTmF2aWdhdGUsXG4gICAgICAgICAgICBzY29wZSAgICAgICA6IG1lXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbWF4VmFsdWUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtUZXh0fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7VGV4dH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNYXhWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VJbnB1dEVsS2V5KCdtYXgnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBtaW5WYWx1ZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1RleHR9IHZhbHVlXG4gICAgICogQHBhcmFtIHtUZXh0fSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldE1pblZhbHVlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNoYW5nZUlucHV0RWxLZXkoJ21pbicsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHN0ZXBTaXplIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFN0ZXBTaXplKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNoYW5nZUlucHV0RWxLZXkoJ3N0ZXAnLCB2YWx1ZSk7XG5cbiAgICAgICAgLy8gdG9kbzogYWRqdXN0IG1pbiAmIG1heCB2YWx1ZSA9PiBzZWU6IGZvcm0uZmllbGQuTnVtYmVyXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB2YWx1ZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcHJldmVudExpc3RTZWxlY3Q9ZmFsc2VdXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VmFsdWUodmFsdWUsIG9sZFZhbHVlLCBwcmV2ZW50TGlzdFNlbGVjdD1mYWxzZSkge1xuICAgICAgICBzdXBlci5hZnRlclNldFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSk7XG5cbiAgICAgICAgaWYgKHRoaXMucGlja2VySXNNb3VudGVkICYmICFwcmV2ZW50TGlzdFNlbGVjdCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RDdXJyZW50TGlzdEl0ZW0odHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBtYXhWYWx1ZSBjb25maWcgZ2V0cyBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgYmVmb3JlU2V0TWF4VmFsdWUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIC8vIHRvZG86IGNoZWNrIGZvcm1hdCA9PiAnMDg6MDAnXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBtaW5WYWx1ZSBjb25maWcgZ2V0cyBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgYmVmb3JlU2V0TWluVmFsdWUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIC8vIHRvZG86IGNoZWNrIGZvcm1hdCA9PiAnMDg6MDAnXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtTdHJpbmdbXX1cbiAgICAgKi9cbiAgICBjcmVhdGVDb2xsZWN0aW9uSXRlbXMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCksXG4gICAgICAgICAgICBlbmQgICAgICAgICA9IG1lLm1heFZhbHVlLnNwbGl0KCc6JykubWFwKE51bWJlciksXG4gICAgICAgICAgICBlbmREYXRlICAgICA9IG5ldyBEYXRlKCksXG4gICAgICAgICAgICBzdGFydCAgICAgICA9IG1lLm1pblZhbHVlLnNwbGl0KCc6JykubWFwKE51bWJlciksXG4gICAgICAgICAgICBsaXN0SXRlbXMgICA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGR0ID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoTmVvLmNvbmZpZy5sb2NhbGUsIHtcbiAgICAgICAgICAgIGhvdXIgIDogJzItZGlnaXQnLFxuICAgICAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXG4gICAgICAgICAgICBzZWNvbmQ6IG1lLnN0ZXBTaXplIDwgNjAgPyAnMi1kaWdpdCcgOiB1bmRlZmluZWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGVuZC5sZW5ndGggPCAzKSB7ZW5kLnB1c2goMCk7fVxuICAgICAgICBlbmREYXRlLnNldEhvdXJzKC4uLmVuZCk7XG5cbiAgICAgICAgaWYgKHN0YXJ0Lmxlbmd0aCA8IDMpIHtzdGFydC5wdXNoKDApO31cbiAgICAgICAgY3VycmVudERhdGUuc2V0SG91cnMoLi4uc3RhcnQpO1xuXG4gICAgICAgIHdoaWxlIChjdXJyZW50RGF0ZSA8PSBlbmREYXRlKSB7Ly9jb25zb2xlLmxvZyhjdXJyZW50RGF0ZSk7XG4gICAgICAgICAgICBsaXN0SXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGR0LmZvcm1hdChjdXJyZW50RGF0ZSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjdXJyZW50RGF0ZS5zZXRTZWNvbmRzKGN1cnJlbnREYXRlLmdldFNlY29uZHMoKSArIG1lLnN0ZXBTaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaXN0SXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5EYXRlU2VsZWN0b3J9XG4gICAgICovXG4gICAgY3JlYXRlUGlja2VyQ29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXVxuICAgICAqL1xuICAgIGZvY3VzSW5wdXRFbChjYWxsYmFjaykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5mb2N1cyh7XG4gICAgICAgICAgICBpZDogbWUuZ2V0SW5wdXRFbElkKClcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uQ29udGFpbmVyS2V5RG93bkVudGVyKGRhdGEpIHtcbiAgICAgICAgdGhpcy5oaWRlUGlja2VyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25Db250YWluZXJLZXlEb3duRXNjYXBlKGRhdGEpIHtcbiAgICAgICAgdGhpcy5mb2N1c0lucHV0RWwodGhpcy5oaWRlUGlja2VyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uS2V5RG93bkVudGVyKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUucGlja2VySXNNb3VudGVkKSB7XG4gICAgICAgICAgICBzdXBlci5vbktleURvd25FbnRlcihkYXRhKTtcbiAgICAgICAgICAgIG1lLnNlbGVjdEN1cnJlbnRMaXN0SXRlbSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIub25LZXlEb3duRW50ZXIoZGF0YSwgbWUuc2VsZWN0Q3VycmVudExpc3RJdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqL1xuICAgIG9uTGlzdEl0ZW1DbGljayhyZWNvcmQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIG9sZFZhbHVlID0gbWUudmFsdWUsXG4gICAgICAgICAgICB2YWx1ZSAgICA9IHJlY29yZC52YWx1ZTtcblxuICAgICAgICBpZiAobWUudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBtZS5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIG1lLmFmdGVyU2V0VmFsdWUodmFsdWUsIG9sZFZhbHVlLCB0cnVlKTsgLy8gcHJldmVudCB0aGUgbGlzdCBmcm9tIGdldHRpbmcgc2VsZWN0ZWQgLyBmb2N1c2VkXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICAgKi9cbiAgICBvbkxpc3RJdGVtTmF2aWdhdGUocmVjb3JkKSB7XG4gICAgICAgIHRoaXMub25MaXN0SXRlbUNsaWNrKHJlY29yZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcHJldmVudEZvY3VzPWZhbHNlXVxuICAgICAqL1xuICAgIHNlbGVjdEN1cnJlbnRMaXN0SXRlbShwcmV2ZW50Rm9jdXM9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgbGlzdCA9IG1lLmxpc3QsXG4gICAgICAgICAgICBpZCAgID0gbGlzdC5nZXRJdGVtSWQobWUudmFsdWUpO1xuXG4gICAgICAgIGxpc3Quc2VsZWN0aW9uTW9kZWwuc2VsZWN0KGlkKTtcblxuICAgICAgICBpZiAoIXByZXZlbnRGb2N1cykge1xuICAgICAgICAgICAgbGlzdC5mb2N1cyhpZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBOZW8ubWFpbi5Eb21BY2Nlc3Muc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFRpbWUpO1xuXG5leHBvcnQge1RpbWUgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogVXNlZCBieSBmb3JtLmZpZWxkLlBpY2tlclxuICogQGNsYXNzIE5lby5mb3JtLmZpZWxkLnRyaWdnZXIuUGlja2VyXG4gKiBAZXh0ZW5kcyBOZW8uZm9ybS5maWVsZC50cmlnZ2VyLkJhc2VcbiAqL1xuY2xhc3MgUGlja2VyIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5mb3JtLmZpZWxkLnRyaWdnZXIuUGlja2VyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uZm9ybS5maWVsZC50cmlnZ2VyLlBpY2tlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd0cmlnZ2VyLXBpY2tlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICd0cmlnZ2VyLXBpY2tlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gaWNvbkNscz0nZmEgZmEtY2FyZXQtZG93bidcbiAgICAgICAgICovXG4gICAgICAgIGljb25DbHM6ICdmYSBmYS1jYXJldC1kb3duJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludGVybmFsIGZsYWcgdXNlZCBieSBmaWVsZC5nZXRUcmlnZ2VyKClcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB0eXBlPSdwaWNrZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHR5cGU6ICdwaWNrZXInXG4gICAgfX1cblxuICAgIG9uVHJpZ2dlckNsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5maWVsZC5vblBpY2tlclRyaWdnZXJDbGljaygpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoUGlja2VyKTtcblxuZXhwb3J0IHtQaWNrZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IFBpY2tlciBmcm9tICcuL1BpY2tlci5tanMnO1xuXG4vKipcbiAqIFVzZWQgYnkgZm9ybS5maWVsZC5UaW1lXG4gKiBAY2xhc3MgTmVvLmZvcm0uZmllbGQudHJpZ2dlci5UaW1lXG4gKiBAZXh0ZW5kcyBOZW8uZm9ybS5maWVsZC50cmlnZ2VyLlBpY2tlclxuICovXG5jbGFzcyBUaW1lIGV4dGVuZHMgUGlja2VyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmZvcm0uZmllbGQudHJpZ2dlci5UaW1lJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uZm9ybS5maWVsZC50cmlnZ2VyLlRpbWUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndHJpZ2dlci10aW1lJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3RyaWdnZXItdGltZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gaWNvbkNscz0nZmEgZmEtY2xvY2snXG4gICAgICAgICAqL1xuICAgICAgICBpY29uQ2xzOiAnZmEgZmEtY2xvY2snXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVGltZSk7XG5cbmV4cG9ydCB7VGltZSBhcyBkZWZhdWx0fTsiXSwic291cmNlUm9vdCI6IiJ9