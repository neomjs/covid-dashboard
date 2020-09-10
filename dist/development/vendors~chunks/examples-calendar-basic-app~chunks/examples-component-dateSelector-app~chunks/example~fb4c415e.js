self["webpackChunk"](["vendors~chunks/examples-calendar-basic-app~chunks/examples-component-dateSelector-app~chunks/example~fb4c415e"],{

/***/ "./node_modules/neo.mjs/src/component/DateSelector.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/neo.mjs/src/component/DateSelector.mjs ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateSelector; });
/* harmony import */ var _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/ClassSystem.mjs */ "./node_modules/neo.mjs/src/util/ClassSystem.mjs");
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _selection_DateSelectorModel_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selection/DateSelectorModel.mjs */ "./node_modules/neo.mjs/src/selection/DateSelectorModel.mjs");
/* harmony import */ var _util_Date_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/Date.mjs */ "./node_modules/neo.mjs/src/util/Date.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");







const todayDate = new Date();

const today = {
    day  : todayDate.getDate(),
    month: todayDate.getMonth(),
    year : todayDate.getFullYear()
};

/**
 * @class Neo.component.DateSelector
 * @extends Neo.component.Base
 */
class DateSelector extends _Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.component.DateSelector'
         * @protected
         */
        className: 'Neo.component.DateSelector',
        /**
         * @member {String} ntype='dateselector'
         * @protected
         */
        ntype: 'dateselector',
        /**
         * Stores the last date change which got triggered while a month / year transition was running
         * @member {Date|null} cachedUpdate=null
         * @protected
         */
        cachedUpdate: null,
        /**
         * @member {String[]} cls=['neo-dateselector']
         */
        cls: ['neo-dateselector'],
        /**
         * Date object created on the value config
         * @member {Date|null} currentDate_=null
         * @protected
         */
        currentDate_: null,
        /**
         * @member {String} dateFormat='Y-m-d'
         */
        dateFormat: 'Y-m-d',
        /**
         * The format of the column headers.
         * Valid values are: narrow, short & long
         * @member {String} dayNameFormat_='short'
         */
        dayNameFormat_: 'short',
        /**
         * @member {Intl.DateTimeFormat|null} intlFormat_day=null
         * @protected
         */
        intlFormat_day: null,
        /**
         * Internal flag to prevent changing the date while change animations are still running
         * @member {Boolean} isUpdating_=false
         * @protected
         */
        isUpdating_: false,
        /**
         * Additional used keys for the selection model
         * @member {Object} keys
         */
        keys: {},
        /**
         * @member {String} locale_=Neo.config.locale
         */
        locale_: Neo.config.locale,
        /**
         * Used for wheel events. min value = 1.
         * A higher value means lesser sensitivity for wheel events
         * => you need to scroll "more" to trigger a month / year change
         * @member {Number} mouseWheelDelta=1
         */
        mouseWheelDelta: 1,
        /**
         * True to scroll new years in from the top
         * @member {Boolean} scrollNewYearFromTop=false
         */
        scrollNewYearFromTop: false,
        /**
         * Either pass a selection.Model module, an instance or a config object
         * @member {Object|Neo.selection.Model} selectionModel_=null
         */
        selectionModel_: null,
        /**
         * True to show inner cell & header cell borders
         * @member {Boolean} showCellBorders_=true
         */
        showCellBorders_: false,
        /**
         * True to show the days of the previous or next month (not selectable)
         * @member {Boolean} showDisabledDays_=true
         */
        showDisabledDays_: true,
        /**
         * @member {Boolean} showWeekends_=true
         */
        showWeekends_: true,
        /**
         * True to use sliding animations
         * @member {Boolean} useAnimations=true
         */
        useAnimations: true,
        /**
         * @member {String} value_=DateUtil.convertToyyyymmdd(new Date())
         */
        value_: _util_Date_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].convertToyyyymmdd(new Date()),
        /**
         * 0-6 => Sun-Sat
         * @member {Number} weekStartDay_=0
         */
        weekStartDay_: 0,
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            tabIndex: -1,
            cn: [{
                cls: ['neo-dateselector-header'],
                cn : [{
                    cls: ['neo-nav-button', 'neo-prev-button']
                }, {
                    cls: ['neo-center-region'],
                    cn : [
                        {cls: ['neo-month-text']},
                        {cls: ['neo-year-text']}
                    ]
                }, {
                    cls: ['neo-nav-button', 'neo-next-button']
                }]
            }, {
                cls: ['neo-dateselector-content'],
                cn : []
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
            domListeners = me.domListeners;

        domListeners.push({
            click: {fn: me.onComponentClick, scope: me},
            wheel: {fn: me.onComponentWheel, scope: me}
        });

        me.domListeners = domListeners;

        me.updateHeaderMonth(0, 0, true);
        me.updateHeaderYear(0, true);
        me.createDayViewContent(false);
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        if (me.selectionModel) {
            me.selectionModel.register(me);
        }
    }

    /**
     * Triggered after the currentDate config got changed
     * @param {Date} value
     * @param {Date} oldValue
     * @protected
     */
    afterSetCurrentDate(value, oldValue) {
        let me = this,
            dayIncrement, method, methodParams,  monthIncrement, yearIncrement;

        if (me.mounted) {
            dayIncrement   = value.getDate()     - oldValue.getDate();
            monthIncrement = value.getMonth()    - oldValue.getMonth();
            yearIncrement  = value.getFullYear() - oldValue.getFullYear();

            if (monthIncrement !== 0) { // gets used when month & year changed as well
                method       = 'changeMonth';
                methodParams = [monthIncrement, yearIncrement];
            } else if (yearIncrement !== 0) {
                method       = 'changeYear';
                methodParams = [yearIncrement];
            } else if (dayIncrement !== 0) {
                me.selectionModel.select(me.id + '__' + _util_Date_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].convertToyyyymmdd(value));
            }

            if (method) {
                if (me.containsFocus) {
                    Neo.main.DomAccess.focus({
                        id: me.id
                    }).then(data => {
                        me[method](...methodParams);
                    });
                } else {
                    me[method](...methodParams);
                }
            }
        }
    }

    /**
     * Triggered after the dayNameFormat config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetDayNameFormat(value, oldValue) {
        this.updateHeaderDays(value, oldValue);
    }

    /**
     * Triggered after the locale config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetLocale(value, oldValue) {
        if (oldValue !== undefined) {
            let me   = this,
                dt   = new Intl.DateTimeFormat(me.locale, {month: 'short'}),
                vdom = me.vdom;

            me.updateHeaderDays(me.dayNameFormat, '', true);

            me.getHeaderMonthEl().html = dt.format(me.currentDate);

            me.vdom = vdom;
        }
    }

    /**
     * Triggered after the showCellBorders config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetShowCellBorders(value, oldValue) {
        let me  = this,
            cls = me.cls;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__["default"][value ? 'remove' : 'add'](cls, 'neo-hide-inner-borders');
        me.cls = cls;
    }

    /**
     * Triggered after the isUpdating config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetIsUpdating(value, oldValue) {
        if (value === false) {
            let me = this;

            if (me.cachedUpdate && me.cachedUpdate !== new Date(me.value)) {
                me.afterSetValue(me.value, _util_Date_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].convertToyyyymmdd(me.cachedUpdate));
            }

            me.cachedUpdate = null;
        }
    }

    /**
     * Triggered after the showDisabledDays config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetShowDisabledDays(value, oldValue) {
        if (oldValue !== undefined) {
            this.recreateDayViewContent();
        }
    }

    /**
     * Triggered after the showWeekends config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetShowWeekends(value, oldValue) {
        if (oldValue !== undefined) {
            let me  = this,
                len = 7,
                i, item;

            me.getCenterContentEl().cn.forEach((row, index) => {
                // ignore the header
                if (index > 0) {
                    for (i=0; i < len; i++) {
                        item = row.cn[i];

                        if (item.cls.includes('neo-weekend')) {
                            if (value) {
                                delete item.removeDom;
                            } else {
                                item.removeDom = true;
                            }
                        }
                    }
                }
            });

            // triggers the vdom update
            me.updateHeaderDays(me.dayNameFormat, '');
        }
    }

    /**
     * Triggered after the selectionModel config got changed
     * @param {Neo.selection.Model} value
     * @param {Neo.selection.Model} oldValue
     * @protected
     */
    afterSetSelectionModel(value, oldValue) {
        if (oldValue !== undefined) {
            value.register(this);
        }
    }

    /**
     * Triggered after the value config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetValue(value, oldValue) {
        let me = this;

        if (!me.isUpdating) {
            me.currentDate = new Date(value);

            me.fire('change', {
                oldValue: oldValue,
                value   : value
            });
        } else {
            me.cacheUpdate();
        }
    }

    /**
     * Triggered after the weekStartDay config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetWeekStartDay(value, oldValue) {
        if (oldValue !== undefined) {
            this.recreateDayViewContent(false, false);
        }
    }

    /**
     * Triggered before the dayNameFormat config gets changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    beforeSetDayNameFormat(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'dayNameFormat', _util_Date_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].prototype.dayNameFormats);
    }

    /**
     * Triggered before the selectionModel config gets changed.
     * @param {Neo.selection.Model} value
     * @param {Neo.selection.Model} oldValue
     * @protected
     */
    beforeSetSelectionModel(value, oldValue) {
        if (oldValue) {
            oldValue.destroy();
        }

        return _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].beforeSetInstance(value, _selection_DateSelectorModel_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]);
    }

    /**
     * Triggered before the weekStartDay config gets changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    beforeSetWeekStartDay(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'weekStartDay', _util_Date_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].prototype.weekStartDays);
    }

    /**
     * Stores the last date change which could not get applied while a transition was running
     * @param {Date} [date=this.currentDate]
     * @protected
     */
    cacheUpdate(date=this.currentDate) {
        this.cachedUpdate = date;
    }

    /**
     *
     * @param {Number} increment
     * @param {Number} yearIncrement
     */
    changeMonth(increment, yearIncrement) {
        let me             = this,
            slideDirection = yearIncrement > 0 ? 'right' : yearIncrement < 0 ? 'left' : increment < 0 ? 'left' : 'right',
            headerMonthOpts, vdom, x;

        if (!me.useAnimations) {
            me.recreateContent(increment, yearIncrement);
        } else {
            if (!me.isUpdating) {
                me.isUpdating = true;

                Neo.main.DomAccess.getBoundingClientRect({
                    id: [me.getCenterContentEl().id, me.getHeaderMonthEl().id]
                }).then(data => {
                    vdom = me.vdom;
                    x    = slideDirection === 'right' ? 0 : -data[0].width;

                    vdom.cn.push({
                        cls: ['neo-relative'],
                        cn : [{
                            cls: ['neo-animation-wrapper'],
                            cn : [{
                                cls: ['neo-dateselector-content'],
                                cn : []
                            }],
                            style: {
                                height   : `${data[0].height}px`,
                                transform: `translateX(${x}px)`,
                                width    : `${2 * data[0].width}px`
                            }
                        }]
                    });

                    headerMonthOpts = me.updateHeaderMonth(increment, yearIncrement, true, data[1]);

                    if (yearIncrement !== 0) {
                        me.updateHeaderYear(increment, true);
                    }

                    me.createDayViewContent(true, vdom.cn[2].cn[0].cn[0]);
                    vdom.cn[2].cn[0].cn[slideDirection === 'right'? 'unshift' : 'push'](vdom.cn[1]);
                    vdom.cn.splice(1, 1);

                    me.promiseVdomUpdate().then(() => {
                        me.changeMonthTransitionCallback({data: data[0], slideDirection: slideDirection});
                        me.updateHeaderMonthTransitionCallback(headerMonthOpts);
                        me.vdom = vdom;

                        setTimeout(() => {
                            me.changeMonthWrapperCallback(slideDirection);
                            me.updateHeaderMonthWrapperCallback(headerMonthOpts);
                            me.triggerVdomUpdate();
                        }, 300);
                    });
                });
            } else {
                me.cacheUpdate();
            }
        }
    }

    /**
     * Slides the wrapper div to the left or right
     * @param {Object} opts
     * @param {Object} opts.data
     * @param {String} opts.slideDirection
     * @protected
     */
    changeMonthTransitionCallback(opts) {
        let me   = this,
            vdom = me.vdom,
            {data, slideDirection} = opts,
            x;

        x = slideDirection === 'right' ? -data.width : 0;
        vdom.cn[1].cn[0].style.transform = `translateX(${x}px)`;
        me._vdom = vdom; // silent update
    }

    /**
     * Replaces the wrapper div with the target month
     * @param {String} slideDirection
     * @protected
     */
    changeMonthWrapperCallback(slideDirection) {
        let me   = this,
            vdom = me.vdom;

        vdom.cn[1] = vdom.cn[1].cn[0].cn[slideDirection === 'right' ? 1 : 0];
        me._vdom = vdom; // silent update
    }

    /**
     *
     * @param {Number} increment
     */
    changeYear(increment) {
        let me = this,
            scrollFromTop, vdom, y;

        if (!me.useAnimations) {
            me.recreateContent(0, increment);
        } else {
            if (!me.isUpdating) {
                me.isUpdating = true;

                Neo.main.DomAccess.getBoundingClientRect({
                    id: me.getCenterContentEl().id
                }).then(data => {
                    scrollFromTop = me.scrollNewYearFromTop && increment < 0 || !me.scrollNewYearFromTop && increment > 0;
                    vdom          = me.vdom;
                    y             = scrollFromTop ? 0 : -data.height;

                    vdom.cn.push({
                        cls: ['neo-relative'],
                        cn : [{
                            cls: ['neo-animation-wrapper'],
                            cn : [{
                                cls: ['neo-dateselector-content'],
                                cn : []
                            }],
                            style: {
                                flexDirection: 'column',
                                height       : `${2 * data.height}px`,
                                transform    : `translateY(${y}px)`,
                                width        : `${data.width}px`
                            }
                        }]
                    });

                    me.updateHeaderYear(increment, true);

                    me.createDayViewContent(true, vdom.cn[2].cn[0].cn[0]);
                    vdom.cn[2].cn[0].cn[scrollFromTop ? 'unshift' : 'push'](vdom.cn[1]);
                    vdom.cn.splice(1, 1);

                    me.promiseVdomUpdate(vdom).then(() => {
                        y = scrollFromTop ? -data.height : 0;
                        vdom.cn[1].cn[0].style.transform = `translateY(${y}px)`;
                        me.vdom = vdom;

                        setTimeout(() => {
                            vdom.cn[1] = vdom.cn[1].cn[0].cn[scrollFromTop ? 1 : 0];
                            me.triggerVdomUpdate();
                        }, 300);
                    });
                });
            } else {
                me.cacheUpdate();
            }
        }
    }

    /**
     *
     */
    createDayNamesRow() {
        let me   = this,
            date = _util_Date_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].clone(me.currentDate),
            i    = 0,
            len  = 7,
            row  = {cls: ['neo-row', 'neo-header-row'], cn: []},
            config, day;

        date.setDate(me.currentDate.getDate() - me.currentDate.getDay() + me.weekStartDay);

        for (; i < len; i++) {
            config = {
                cls: ['neo-cell'],
                cn : [{
                    cls : ['neo-cell-content'],
                    html: me.intlFormat_day.format(date)
                }]
            };

            day = date.getDay();

            if (!me.showWeekends && (day === 0 || day === 6)) {
                config.removeDom = true;
            }

            row.cn.push(config);

            date.setDate(date.getDate() + 1);
        }

        return row;
    }

    /**
     *
     * @param {Boolean} silent true to update the vdom silently
     * @param {Object} [containerEl]
     */
    createDayViewContent(silent, containerEl) {
        let me              = this,
            currentDate     = me.currentDate,
            currentDay      = currentDate.getDate(),
            currentMonth    = currentDate.getMonth(),
            currentYear     = currentDate.getFullYear(),
            date            = me.currentDate, // cloned
            valueDate       = new Date(me.value),
            valueMonth      = valueDate.getMonth(),
            valueYear       = valueDate.getFullYear(),
            daysInMonth     = _util_Date_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getDaysInMonth(currentDate),
            firstDayInMonth = _util_Date_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getFirstDayOfMonth(currentDate),
            firstDayOffset  = firstDayInMonth - me.weekStartDay,
            vdom            = me.vdom,
            centerEl        = containerEl || me.getCenterContentEl(),
            columns         = 7,
            i               = 0,
            cellId, config, dateDay, day, hasContent, j, row, rows;

        firstDayOffset = firstDayOffset < 0 ? firstDayOffset + 7 : firstDayOffset;
        rows           = (daysInMonth + firstDayOffset) / 7 > 5 ? 6 : 5;
        day            = 1 - firstDayOffset;

        date.setDate(day);

        centerEl.cn.push(me.createDayNamesRow());

        for (; i < rows; i++) {
            row = {cls: ['neo-row'], cn: []};

            for (j=0; j < columns; j++) {
                hasContent = day > 0 && day <= daysInMonth;
                cellId     = me.getCellId(currentYear, currentMonth + 1, day);

                dateDay = date.getDay();

                config = {
                    id      : cellId,
                    cls     : hasContent ? ['neo-cell'] : ['neo-cell', 'neo-disabled'],
                    tabIndex: hasContent ? -1 : null,
                    cn: [{
                        cls : ['neo-cell-content'],
                        html: hasContent ? day : me.showDisabledDays ? date.getDate() : ''
                    }]
                }

                if (dateDay === 0 || dateDay === 6) {
                    if (!me.showWeekends) {
                        config.removeDom = true;
                    }

                    config.cls.push('neo-weekend');
                }

                if (today.year === currentYear && today.month === currentMonth && today.day === day) {
                    config.cn[0].cls.push('neo-today');
                }

                if (valueYear === currentYear && valueMonth === currentMonth && day === currentDay) {
                    config.cls.push('neo-selected');
                    me.selectionModel.items = [cellId]; // silent update
                }

                row.cn.push(config);

                date.setDate(date.getDate() + 1);

                day++;
            }

            centerEl.cn.push(row);
        }

        me[silent ? '_vdom' : 'vdom'] = vdom;
    }

    /**
     *
     */
    focusCurrentItem() {
        this.focus(this.selectionModel.items[0]);
    }

    /**
     * @param {Number|String} year
     * @param {Number|String} month
     * @param {Number|String} day
     * @returns {String} id
     */
    getCellId(year, month, day) {
        day = day.toString();

        if (day.length < 2) {
            day = '0' + day;
        }

        month = month.toString();

        if (month.length < 2) {
            month = '0' + month;
        }

        return this.id + '__' + year + '-' + month + '-' + day;
    }

    /**
     *
     * @returns {Object}
     */
    getCenterContentEl() {
        return this.vdom.cn[1];
    }

    /**
     *
     * @returns {Object}
     */
    getHeaderMonthEl() {
        return this.vdom.cn[0].cn[1].cn[0];
    }

    /**
     *
     * @returns {Object}
     */
    getHeaderYearEl() {
        return this.vdom.cn[0].cn[1].cn[1];
    }

    /**
     *
     * @param {Object} data
     */
    onComponentClick(data) {
        let me  = this,
            cls = data.path[0].cls,
            date, monthIncrement;

             if (cls.includes('neo-cell'))        {me.onCellClick(data);}
        else if (cls.includes('neo-next-button')) {monthIncrement =  1;}
        else if (cls.includes('neo-prev-button')) {monthIncrement = -1;}

        if (monthIncrement) {
            date = me.currentDate; // cloned
            date.setMonth(date.getMonth() + monthIncrement);
            me.value = _util_Date_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].convertToyyyymmdd(date);
        }
    }

    /**
     *
     * @param {Object} data
     */
    onCellClick(data) {
        let me     = this,
            cellEl = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].findVdomChild(me.vdom, data.path[0].id),
            date   = me.currentDate; // cloned

        date.setDate(parseInt(cellEl.vdom.cn[0].html));
        me.value = _util_Date_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].convertToyyyymmdd(date);
    }

    /**
     *
     * @param {Object} data
     */
    onComponentWheel(data) {
        let me         = this,
            wheelDelta = me.mouseWheelDelta,
            date, monthIncrement, yearIncrement;

        if (Math.abs(data.deltaY) >= Math.abs(data.deltaX)) {
                 if (data.deltaY <= -wheelDelta) {yearIncrement  =  1;}
            else if (data.deltaY >=  wheelDelta) {yearIncrement  = -1;}
        } else {
                 if (data.deltaX >=  wheelDelta) {monthIncrement =  1;}
            else if (data.deltaX <= -wheelDelta) {monthIncrement = -1;}
        }

        if (yearIncrement && !me.scrollNewYearFromTop) {
            yearIncrement *= -1;
        }

        if (monthIncrement) {
            date = me.currentDate; // cloned
            date.setMonth(date.getMonth() + monthIncrement);
            me.value = _util_Date_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].convertToyyyymmdd(date);
        } else if (yearIncrement) {
            date = me.currentDate; // cloned
            date.setFullYear(date.getFullYear() + yearIncrement);
            me.value = _util_Date_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].convertToyyyymmdd(date);
        }
    }

    /**
     * Recreates the current centerEl, month & year el
     * @param {Number} monthIncrement
     * @param {Number} yearIncrement
     * @param {Boolean} [silent=false]
     * @protected
     */
    recreateContent(monthIncrement, yearIncrement, silent=false) {
        let me = this;

        me.recreateDayViewContent(true);

        if (monthIncrement !== 0) {
            me.updateHeaderMonth(monthIncrement, yearIncrement, true);
        }

        if (yearIncrement !== 0) {
            me.updateHeaderYear(yearIncrement, true);
        }

        me.triggerVdomUpdate(silent);
    }

    /**
     * Recreates the current centerEl
     * @param {Boolean} [silent=false]
     * @param {Boolean} [syncIds=true]
     * @protected
     */
    recreateDayViewContent(silent=false, syncIds=true) {
        let me = this;

        me.getCenterContentEl().cn = [];
        me.createDayViewContent(true);

        if (syncIds) {
            me.syncVdomIds();
        }

        me.triggerVdomUpdate(silent);
    }

    /**
     * Triggers a vdom update & sets isUpdating
     * @param {Boolean} [silent=false]
     * @protected
     */
    triggerVdomUpdate(silent=false) {
        if (!silent) {
            let me = this;

            me.isUpdating = true;

            me.promiseVdomUpdate(me.vdom).then(() => {
                me.isUpdating = false;
            });
        }
    }

    /**
     *
     * @param {String} value
     * @param {String} oldValue
     * @param {Boolean} [silent=false]
     */
    updateHeaderDays(value, oldValue, silent=false) {
        let me = this;

        me.intlFormat_day = new Intl.DateTimeFormat(me.locale, {weekday: value});

        if (oldValue !== undefined) {
            let centerEl = me.getCenterContentEl().cn[0],
                date     = me.currentDate, // cloned
                vdom     = me.vdom,
                i        = 0,
                day, node;

            date.setDate(me.currentDate.getDate() - me.currentDate.getDay() + me.weekStartDay);

            for (; i < 7; i++) {
                node = centerEl.cn[i];

                node.cn[0].html = me.intlFormat_day.format(date);

                day = date.getDay();

                if (!me.showWeekends && (day === 0 || day === 6)) {
                    node.removeDom = true;
                } else {
                    delete node.removeDom;
                }

                date.setDate(date.getDate() + 1);
            }

            me[silent ? '_vdom' : 'vdom'] = vdom;
        }
    }

    /**
     *
     * @param {Number} increment
     * @param {Number} yearIncrement
     * @param {Boolean} silent=false
     * @param {Object} monthElDomRect
     * @returns {Object|null} opts or null in case no transitions are needed
     */
    updateHeaderMonth(increment, yearIncrement, silent=false, monthElDomRect) {
        let me             = this,
            dt             = new Intl.DateTimeFormat(me.locale, {month: 'short'}),
            currentMonth   = dt.format(me.currentDate),
            monthEl        = me.getHeaderMonthEl(),
            slideDirection = yearIncrement > 0 ? 'bottom' : yearIncrement < 0 ? 'top' : increment < 0 ? 'top' : 'bottom',
            vdom           = me.vdom,
            headerCenterEl, y;

        if (!me.rendered || !me.useAnimations) {
            monthEl.html = currentMonth;
            me[silent ? '_vdom' : 'vdom'] = vdom;
            return null;
        } else {
            y = slideDirection === 'top' ? 0 : -monthElDomRect.height;

            vdom.cn[0].cn[1].cn.unshift({
                cls  : ['neo-relative-header'],
                style: {
                    height: monthElDomRect.height + 'px',
                    width : monthElDomRect.width  + 'px'
                },
                cn: [{
                    cls: ['neo-animation-wrapper-header'],
                    cn : [],
                    style: {
                        height   : 2 * monthElDomRect.height + 'px',
                        transform: `translateY(${y}px)`,
                        width    : monthElDomRect.width + 'px'
                    }
                }]
            });

            headerCenterEl = vdom.cn[0].cn[1];

            headerCenterEl.cn[0].cn[0].cn.push({
                cls : ['neo-month-text'],
                html: currentMonth
            });

            headerCenterEl.cn[0].cn[0].cn[slideDirection === 'top' ? 'unshift' : 'push'](headerCenterEl.cn[1]);
            headerCenterEl.cn.splice(1, 1);

            me[silent ? '_vdom' : 'vdom'] = vdom;

            return {
                data          : monthElDomRect,
                headerCenterEl: headerCenterEl,
                increment     : increment,
                yearIncrement : yearIncrement
            };
        }
    }

    /**
     * Slides the wrapper div to the top or bottom
     * @param {Object} opts
     * @param {Object} opts.data
     * @param {Object} opts.headerCenterEl
     * @param {Number} opts.increment
     * @param {Number} opts.yearIncrement
     * @protected
     */
    updateHeaderMonthTransitionCallback(opts) {
        let {data, headerCenterEl, increment, yearIncrement} = opts,
            me             = this,
            vdom           = me.vdom,
            slideDirection = yearIncrement > 0 ? 'bottom' : yearIncrement < 0 ? 'top' : increment < 0 ? 'top' : 'bottom',
            y;

        y = slideDirection === 'top' ? -data.height : 0;
        headerCenterEl.cn[0].cn[0].style.transform = `translateY(${y}px)`;
        me._vdom = vdom; // silent update
    }

    /**
     * Replaces the wrapper div to the left or right
     * @param {Object} opts
     * @param {Object} opts.headerCenterEl
     * @param {Number} opts.increment
     * @param {Number} opts.yearIncrement
     * @protected
     */
    updateHeaderMonthWrapperCallback(opts) {
        let {headerCenterEl, increment, yearIncrement} = opts,
            me             = this,
            vdom           = me.vdom,
            slideDirection = yearIncrement > 0 ? 'bottom' : yearIncrement < 0 ? 'top' : increment < 0 ? 'top' : 'bottom';

        headerCenterEl.cn[0] = headerCenterEl.cn[0].cn[0].cn[slideDirection === 'top' ? 1 : 0];
        me._vdom = vdom; // silent update
    }

    /**
     *
     * @param {Number} increment
     * @param {Boolean} [silent=false]
     */
    updateHeaderYear(increment, silent=false) {
        let me     = this,
            vdom   = me.vdom,
            yearEl = me.getHeaderYearEl();

        yearEl.html = me.currentDate.getFullYear();

        me[silent ? '_vdom' : 'vdom'] = vdom;
    }
}

Neo.applyClassConfig(DateSelector);



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



/***/ }),

/***/ "./node_modules/neo.mjs/src/selection/DateSelectorModel.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/neo.mjs/src/selection/DateSelectorModel.mjs ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateSelectorModel; });
/* harmony import */ var _util_Date_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Date.mjs */ "./node_modules/neo.mjs/src/util/Date.mjs");
/* harmony import */ var _Model_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Model.mjs */ "./node_modules/neo.mjs/src/selection/Model.mjs");



/**
 * @class Neo.selection.DateSelectorModel
 * @extends Neo.selection.Model
 */
class DateSelectorModel extends _Model_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.selection.DateSelectorModel'
         * @protected
         */
        className: 'Neo.selection.DateSelectorModel',
        /**
         * @member {String} ntype='selection-dateselectormodel'
         * @protected
         */
        ntype: 'selection-dateselectormodel',
        /**
         * true to stay inside the same column when navigating up or downwards
         * @member {Boolean} stayInColumn=false
         */
        stayInColumn: false
    }}

    /**
     *
     * @param {Object} data
     * @returns {Date}
     */
    getCellDate(data) {
        let selection = this.getSelection(),
            idArray, tmpArray;

        if (selection[0]) {
            idArray = selection[0].split('__');
        } else {
            idArray = data.path[0].id.split('__');
        }

        tmpArray = idArray[1].split('-').map(e => parseInt(e));

        tmpArray[1]--; // the month inside the view is 1 based, a date needs 0 based

        return new Date(...tmpArray);
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownDown(data) {
        this.onNavKeyRow(data, 7);
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
        this.onNavKeyRow(data, -7);
    }

    /**
     *
     * @param {Object} data
     * @param {Number} step
     */
    onNavKeyColumn(data, step) {
        let me       = this,
            cellDate = me.getCellDate(data),
            view     = me.view,
            daysInMonth, id, newDay;

        daysInMonth = _util_Date_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].getDaysInMonth(cellDate);
        newDay      = (cellDate.getDate() + step) % daysInMonth;

        newDay = newDay === 0 ? daysInMonth : newDay;

        id = view.getCellId(cellDate.getFullYear(), cellDate.getMonth() + 1, newDay);

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
            cellDate = me.getCellDate(data),
            view     = me.view,
            daysInMonth, id, newDay;

        daysInMonth = _util_Date_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].getDaysInMonth(cellDate);
        newDay      = cellDate.getDate() + step;

        if (newDay > daysInMonth) {
            if (!me.stayInColumn) {
                newDay += 1;
            }

            while (newDay > 7) {
                newDay -= step;
            }
        } else if (newDay < 1) {
            if (!me.stayInColumn) {
                newDay -= 1;
            }

            while (newDay < daysInMonth - 6) {
                newDay -= step;
            }
        }

        id = view.getCellId(cellDate.getFullYear(), cellDate.getMonth() + 1, newDay);

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

Neo.applyClassConfig(DateSelectorModel);



/***/ }),

/***/ "./node_modules/neo.mjs/src/util/Date.mjs":
/*!************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/Date.mjs ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.util.Date
 * @extends Neo.core.Base
 */
class DateUtil extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.Date'
         * @protected
         */
        className: 'Neo.util.Date',
        /**
         * Valid values for dayNameFormat
         * @member {String[]} dayNameFormats=['narrow', 'short', 'long']
         * @protected
         * @static
         */
        dayNameFormats: ['narrow', 'short', 'long'],
        /**
         * Valid values for monthNameFormat
         * @member {String[]} monthNameFormats=['narrow', 'short', 'long']
         * @protected
         * @static
         */
        monthNameFormats: ['narrow', 'short', 'long'],
        /**
         * Valid values for dayNameFormat
         * @member {Number[]} weekStartDays=[0, 1, 2, 3, 4, 5, 6]
         * @protected
         * @static
         */
        weekStartDays: [0, 1, 2, 3, 4, 5, 6]
    }}

    /**
     * Clones a Date instance using the same value
     * @param {Date} date
     * @returns {Date} the cloned date object
     */
    static clone(date) {
        return new Date(date.valueOf());
    }

    /**
     * Returns the yyyy-mm-dd formatted value of a given Date instance
     * @param {Date} date
     * @returns {String} the yyyy-mm-dd formatted date
     */
    static convertToyyyymmdd(date) {
        return new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
    }

    /**
     * Returns the amount of days inside the month of a passed date object
     * @param {Date} date
     * @returns {Number} days inside the month
     */
    static getDaysInMonth(date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    }

    /**
     *
     * @param {Date} date
     * @param {Number} weekStartDay 0-6
     * @returns {Number}
     */
    static getFirstDayOffset(date, weekStartDay) {
        let firstDayInMonth = DateUtil.getFirstDayOfMonth(date),
            firstDayOffset  = firstDayInMonth - weekStartDay;

        return firstDayOffset < 0 ? firstDayOffset + 7 : firstDayOffset;
    }

    /**
     * Returns the day number of the first day of a passed date object
     * @param {Date} date
     * @returns {Number} 0-6 (Sun-Sat)
     */
    static getFirstDayOfMonth(date) {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    }

    /**
     * Returns the week number of the passed date
     * https://en.wikipedia.org/wiki/ISO_8601
     * @param {Date} targetDate
     * @returns {Number}
     */
    static getWeekOfYear(targetDate) {
        let date      = new Date(targetDate.valueOf()),
            dayNumber = (targetDate.getUTCDay() + 6) % 7,
            firstThursday;

        date.setUTCDate(date.getUTCDate() - dayNumber + 3);
        firstThursday = date.valueOf();
        date.setUTCMonth(0, 1);

        if (date.getUTCDay() !== 4) {
            date.setUTCMonth(0, 1 + ((4 - date.getUTCDay()) + 7) % 7);
        }

        return Math.ceil((firstThursday - date) /  (7 * 24 * 3600 * 1000)) + 1;
    }

    /**
     *
     * @param {Date} date
     * @param {Number} weekStartDay 0-6
     * @returns {Number} 5-6
     */
    static getWeeksOfMonth(date, weekStartDay) {
        let daysInMonth    = DateUtil.getDaysInMonth(date),
            firstDayOffset = DateUtil.getFirstDayOffset(date, weekStartDay);

        return (daysInMonth + firstDayOffset) / 7 > 5 ? 6 : 5;
    }

    /**
     * Returns true in case the day, month & year of 2 given Date objects are the same
     * @param {Date} date1
     * @param {Date} date2
     * @returns {Boolean}
     */
    static matchDate(date1, date2) {
        return date1.getFullYear() === date2.getFullYear() &&
               date1.getMonth()    === date2.getMonth()    &&
               date1.getDate()     === date2.getDate();
    }
}

Neo.applyClassConfig(DateUtil);

/* harmony default export */ __webpack_exports__["default"] = (DateUtil);

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0RhdGVTZWxlY3Rvci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2Zvcm0vZmllbGQvQ2hlY2tCb3gubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL1JhZGlvLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvc2VsZWN0aW9uL0RhdGVTZWxlY3Rvck1vZGVsLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9EYXRlLm1qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3RDtBQUNiO0FBQ3dCO0FBQ2xCO0FBQ0M7QUFDRDs7QUFFakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpREFBUztBQUNwQyx3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsS0FBSztBQUNwQixpQkFBaUIsS0FBSztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxLQUFLO0FBQ3BCLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEIsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsS0FBSztBQUNwQixlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsS0FBSztBQUNwQixpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsS0FBSztBQUNwQixlQUFlLEtBQUs7QUFDcEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVlLHVFQUFRLEUiLCJmaWxlIjoidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtY2FsZW5kYXItYmFzaWMtYXBwfmNodW5rcy9leGFtcGxlcy1jb21wb25lbnQtZGF0ZVNlbGVjdG9yLWFwcH5jaHVua3MvZXhhbXBsZX5mYjRjNDE1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDbGFzc1N5c3RlbVV0aWwgICBmcm9tICcuLi91dGlsL0NsYXNzU3lzdGVtLm1qcyc7XG5pbXBvcnQgQ29tcG9uZW50ICAgICAgICAgZnJvbSAnLi9CYXNlLm1qcyc7XG5pbXBvcnQgRGF0ZVNlbGVjdG9yTW9kZWwgZnJvbSAnLi4vc2VsZWN0aW9uL0RhdGVTZWxlY3Rvck1vZGVsLm1qcyc7XG5pbXBvcnQgRGF0ZVV0aWwgICAgICAgICAgZnJvbSAnLi4vdXRpbC9EYXRlLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgICAgICAgICAgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuaW1wb3J0IFZEb21VdGlsICAgICAgICAgIGZyb20gJy4uL3V0aWwvVkRvbS5tanMnO1xuXG5jb25zdCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpO1xuXG5jb25zdCB0b2RheSA9IHtcbiAgICBkYXkgIDogdG9kYXlEYXRlLmdldERhdGUoKSxcbiAgICBtb250aDogdG9kYXlEYXRlLmdldE1vbnRoKCksXG4gICAgeWVhciA6IHRvZGF5RGF0ZS5nZXRGdWxsWWVhcigpXG59O1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29tcG9uZW50LkRhdGVTZWxlY3RvclxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIERhdGVTZWxlY3RvciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb21wb25lbnQuRGF0ZVNlbGVjdG9yJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29tcG9uZW50LkRhdGVTZWxlY3RvcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdkYXRlc2VsZWN0b3InXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnZGF0ZXNlbGVjdG9yJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0b3JlcyB0aGUgbGFzdCBkYXRlIGNoYW5nZSB3aGljaCBnb3QgdHJpZ2dlcmVkIHdoaWxlIGEgbW9udGggLyB5ZWFyIHRyYW5zaXRpb24gd2FzIHJ1bm5pbmdcbiAgICAgICAgICogQG1lbWJlciB7RGF0ZXxudWxsfSBjYWNoZWRVcGRhdGU9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjYWNoZWRVcGRhdGU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWRhdGVzZWxlY3RvciddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWRhdGVzZWxlY3RvciddLFxuICAgICAgICAvKipcbiAgICAgICAgICogRGF0ZSBvYmplY3QgY3JlYXRlZCBvbiB0aGUgdmFsdWUgY29uZmlnXG4gICAgICAgICAqIEBtZW1iZXIge0RhdGV8bnVsbH0gY3VycmVudERhdGVfPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY3VycmVudERhdGVfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBkYXRlRm9ybWF0PSdZLW0tZCdcbiAgICAgICAgICovXG4gICAgICAgIGRhdGVGb3JtYXQ6ICdZLW0tZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZm9ybWF0IG9mIHRoZSBjb2x1bW4gaGVhZGVycy5cbiAgICAgICAgICogVmFsaWQgdmFsdWVzIGFyZTogbmFycm93LCBzaG9ydCAmIGxvbmdcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBkYXlOYW1lRm9ybWF0Xz0nc2hvcnQnXG4gICAgICAgICAqL1xuICAgICAgICBkYXlOYW1lRm9ybWF0XzogJ3Nob3J0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0ludGwuRGF0ZVRpbWVGb3JtYXR8bnVsbH0gaW50bEZvcm1hdF9kYXk9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBpbnRsRm9ybWF0X2RheTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludGVybmFsIGZsYWcgdG8gcHJldmVudCBjaGFuZ2luZyB0aGUgZGF0ZSB3aGlsZSBjaGFuZ2UgYW5pbWF0aW9ucyBhcmUgc3RpbGwgcnVubmluZ1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBpc1VwZGF0aW5nXz1mYWxzZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBpc1VwZGF0aW5nXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRpdGlvbmFsIHVzZWQga2V5cyBmb3IgdGhlIHNlbGVjdGlvbiBtb2RlbFxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGtleXNcbiAgICAgICAgICovXG4gICAgICAgIGtleXM6IHt9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBsb2NhbGVfPU5lby5jb25maWcubG9jYWxlXG4gICAgICAgICAqL1xuICAgICAgICBsb2NhbGVfOiBOZW8uY29uZmlnLmxvY2FsZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVzZWQgZm9yIHdoZWVsIGV2ZW50cy4gbWluIHZhbHVlID0gMS5cbiAgICAgICAgICogQSBoaWdoZXIgdmFsdWUgbWVhbnMgbGVzc2VyIHNlbnNpdGl2aXR5IGZvciB3aGVlbCBldmVudHNcbiAgICAgICAgICogPT4geW91IG5lZWQgdG8gc2Nyb2xsIFwibW9yZVwiIHRvIHRyaWdnZXIgYSBtb250aCAvIHllYXIgY2hhbmdlXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gbW91c2VXaGVlbERlbHRhPTFcbiAgICAgICAgICovXG4gICAgICAgIG1vdXNlV2hlZWxEZWx0YTogMSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgdG8gc2Nyb2xsIG5ldyB5ZWFycyBpbiBmcm9tIHRoZSB0b3BcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2Nyb2xsTmV3WWVhckZyb21Ub3A9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHNjcm9sbE5ld1llYXJGcm9tVG9wOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVpdGhlciBwYXNzIGEgc2VsZWN0aW9uLk1vZGVsIG1vZHVsZSwgYW4gaW5zdGFuY2Ugb3IgYSBjb25maWcgb2JqZWN0XG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxOZW8uc2VsZWN0aW9uLk1vZGVsfSBzZWxlY3Rpb25Nb2RlbF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZWN0aW9uTW9kZWxfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSB0byBzaG93IGlubmVyIGNlbGwgJiBoZWFkZXIgY2VsbCBib3JkZXJzXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNob3dDZWxsQm9yZGVyc189dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgc2hvd0NlbGxCb3JkZXJzXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHRvIHNob3cgdGhlIGRheXMgb2YgdGhlIHByZXZpb3VzIG9yIG5leHQgbW9udGggKG5vdCBzZWxlY3RhYmxlKVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaG93RGlzYWJsZWREYXlzXz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBzaG93RGlzYWJsZWREYXlzXzogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNob3dXZWVrZW5kc189dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgc2hvd1dlZWtlbmRzXzogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgdG8gdXNlIHNsaWRpbmcgYW5pbWF0aW9uc1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSB1c2VBbmltYXRpb25zPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHVzZUFuaW1hdGlvbnM6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHZhbHVlXz1EYXRlVXRpbC5jb252ZXJ0VG95eXl5bW1kZChuZXcgRGF0ZSgpKVxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWVfOiBEYXRlVXRpbC5jb252ZXJ0VG95eXl5bW1kZChuZXcgRGF0ZSgpKSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIDAtNiA9PiBTdW4tU2F0XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gd2Vla1N0YXJ0RGF5Xz0wXG4gICAgICAgICAqL1xuICAgICAgICB3ZWVrU3RhcnREYXlfOiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIHRhYkluZGV4OiAtMSxcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIGNsczogWyduZW8tZGF0ZXNlbGVjdG9yLWhlYWRlciddLFxuICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1uYXYtYnV0dG9uJywgJ25lby1wcmV2LWJ1dHRvbiddXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWNlbnRlci1yZWdpb24nXSxcbiAgICAgICAgICAgICAgICAgICAgY24gOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ25lby1tb250aC10ZXh0J119LFxuICAgICAgICAgICAgICAgICAgICAgICAge2NsczogWyduZW8teWVhci10ZXh0J119XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGNsczogWyduZW8tbmF2LWJ1dHRvbicsICduZW8tbmV4dC1idXR0b24nXVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby1kYXRlc2VsZWN0b3ItY29udGVudCddLFxuICAgICAgICAgICAgICAgIGNuIDogW11cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBtZS5kb21MaXN0ZW5lcnM7XG5cbiAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgY2xpY2s6IHtmbjogbWUub25Db21wb25lbnRDbGljaywgc2NvcGU6IG1lfSxcbiAgICAgICAgICAgIHdoZWVsOiB7Zm46IG1lLm9uQ29tcG9uZW50V2hlZWwsIHNjb3BlOiBtZX1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuZG9tTGlzdGVuZXJzID0gZG9tTGlzdGVuZXJzO1xuXG4gICAgICAgIG1lLnVwZGF0ZUhlYWRlck1vbnRoKDAsIDAsIHRydWUpO1xuICAgICAgICBtZS51cGRhdGVIZWFkZXJZZWFyKDAsIHRydWUpO1xuICAgICAgICBtZS5jcmVhdGVEYXlWaWV3Q29udGVudChmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUuc2VsZWN0aW9uTW9kZWwpIHtcbiAgICAgICAgICAgIG1lLnNlbGVjdGlvbk1vZGVsLnJlZ2lzdGVyKG1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgY3VycmVudERhdGUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtEYXRlfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7RGF0ZX0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRDdXJyZW50RGF0ZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIGRheUluY3JlbWVudCwgbWV0aG9kLCBtZXRob2RQYXJhbXMsICBtb250aEluY3JlbWVudCwgeWVhckluY3JlbWVudDtcblxuICAgICAgICBpZiAobWUubW91bnRlZCkge1xuICAgICAgICAgICAgZGF5SW5jcmVtZW50ICAgPSB2YWx1ZS5nZXREYXRlKCkgICAgIC0gb2xkVmFsdWUuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgbW9udGhJbmNyZW1lbnQgPSB2YWx1ZS5nZXRNb250aCgpICAgIC0gb2xkVmFsdWUuZ2V0TW9udGgoKTtcbiAgICAgICAgICAgIHllYXJJbmNyZW1lbnQgID0gdmFsdWUuZ2V0RnVsbFllYXIoKSAtIG9sZFZhbHVlLmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgICAgIGlmIChtb250aEluY3JlbWVudCAhPT0gMCkgeyAvLyBnZXRzIHVzZWQgd2hlbiBtb250aCAmIHllYXIgY2hhbmdlZCBhcyB3ZWxsXG4gICAgICAgICAgICAgICAgbWV0aG9kICAgICAgID0gJ2NoYW5nZU1vbnRoJztcbiAgICAgICAgICAgICAgICBtZXRob2RQYXJhbXMgPSBbbW9udGhJbmNyZW1lbnQsIHllYXJJbmNyZW1lbnRdO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh5ZWFySW5jcmVtZW50ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kICAgICAgID0gJ2NoYW5nZVllYXInO1xuICAgICAgICAgICAgICAgIG1ldGhvZFBhcmFtcyA9IFt5ZWFySW5jcmVtZW50XTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF5SW5jcmVtZW50ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgbWUuc2VsZWN0aW9uTW9kZWwuc2VsZWN0KG1lLmlkICsgJ19fJyArIERhdGVVdGlsLmNvbnZlcnRUb3l5eXltbWRkKHZhbHVlKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgICAgICAgICBpZiAobWUuY29udGFpbnNGb2N1cykge1xuICAgICAgICAgICAgICAgICAgICBOZW8ubWFpbi5Eb21BY2Nlc3MuZm9jdXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG1lLmlkXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZVttZXRob2RdKC4uLm1ldGhvZFBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1lW21ldGhvZF0oLi4ubWV0aG9kUGFyYW1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGRheU5hbWVGb3JtYXQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RGF5TmFtZUZvcm1hdCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVIZWFkZXJEYXlzKHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBsb2NhbGUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TG9jYWxlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGR0ICAgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChtZS5sb2NhbGUsIHttb250aDogJ3Nob3J0J30pLFxuICAgICAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgICAgICBtZS51cGRhdGVIZWFkZXJEYXlzKG1lLmRheU5hbWVGb3JtYXQsICcnLCB0cnVlKTtcblxuICAgICAgICAgICAgbWUuZ2V0SGVhZGVyTW9udGhFbCgpLmh0bWwgPSBkdC5mb3JtYXQobWUuY3VycmVudERhdGUpO1xuXG4gICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc2hvd0NlbGxCb3JkZXJzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U2hvd0NlbGxCb3JkZXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIGNscyA9IG1lLmNscztcblxuICAgICAgICBOZW9BcnJheVt2YWx1ZSA/ICdyZW1vdmUnIDogJ2FkZCddKGNscywgJ25lby1oaWRlLWlubmVyLWJvcmRlcnMnKTtcbiAgICAgICAgbWUuY2xzID0gY2xzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaXNVcGRhdGluZyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldElzVXBkYXRpbmcodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmIChtZS5jYWNoZWRVcGRhdGUgJiYgbWUuY2FjaGVkVXBkYXRlICE9PSBuZXcgRGF0ZShtZS52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBtZS5hZnRlclNldFZhbHVlKG1lLnZhbHVlLCBEYXRlVXRpbC5jb252ZXJ0VG95eXl5bW1kZChtZS5jYWNoZWRVcGRhdGUpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUuY2FjaGVkVXBkYXRlID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc2hvd0Rpc2FibGVkRGF5cyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFNob3dEaXNhYmxlZERheXModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlY3JlYXRlRGF5Vmlld0NvbnRlbnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc2hvd1dlZWtlbmRzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U2hvd1dlZWtlbmRzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IG1lICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgbGVuID0gNyxcbiAgICAgICAgICAgICAgICBpLCBpdGVtO1xuXG4gICAgICAgICAgICBtZS5nZXRDZW50ZXJDb250ZW50RWwoKS5jbi5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gaWdub3JlIHRoZSBoZWFkZXJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaT0wOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSByb3cuY25baV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmNscy5pbmNsdWRlcygnbmVvLXdlZWtlbmQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgaXRlbS5yZW1vdmVEb207XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5yZW1vdmVEb20gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyB0cmlnZ2VycyB0aGUgdmRvbSB1cGRhdGVcbiAgICAgICAgICAgIG1lLnVwZGF0ZUhlYWRlckRheXMobWUuZGF5TmFtZUZvcm1hdCwgJycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBzZWxlY3Rpb25Nb2RlbCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge05lby5zZWxlY3Rpb24uTW9kZWx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOZW8uc2VsZWN0aW9uLk1vZGVsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFNlbGVjdGlvbk1vZGVsKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFsdWUucmVnaXN0ZXIodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHZhbHVlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICghbWUuaXNVcGRhdGluZykge1xuICAgICAgICAgICAgbWUuY3VycmVudERhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG5cbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXG4gICAgICAgICAgICAgICAgdmFsdWUgICA6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLmNhY2hlVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHdlZWtTdGFydERheSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRXZWVrU3RhcnREYXkodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlY3JlYXRlRGF5Vmlld0NvbnRlbnQoZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIGRheU5hbWVGb3JtYXQgY29uZmlnIGdldHMgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXREYXlOYW1lRm9ybWF0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iZWZvcmVTZXRFbnVtVmFsdWUodmFsdWUsIG9sZFZhbHVlLCAnZGF5TmFtZUZvcm1hdCcsIERhdGVVdGlsLnByb3RvdHlwZS5kYXlOYW1lRm9ybWF0cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgc2VsZWN0aW9uTW9kZWwgY29uZmlnIGdldHMgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0ge05lby5zZWxlY3Rpb24uTW9kZWx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOZW8uc2VsZWN0aW9uLk1vZGVsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRTZWxlY3Rpb25Nb2RlbCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICBvbGRWYWx1ZS5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQ2xhc3NTeXN0ZW1VdGlsLmJlZm9yZVNldEluc3RhbmNlKHZhbHVlLCBEYXRlU2VsZWN0b3JNb2RlbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgd2Vla1N0YXJ0RGF5IGNvbmZpZyBnZXRzIGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0V2Vla1N0YXJ0RGF5KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iZWZvcmVTZXRFbnVtVmFsdWUodmFsdWUsIG9sZFZhbHVlLCAnd2Vla1N0YXJ0RGF5JywgRGF0ZVV0aWwucHJvdG90eXBlLndlZWtTdGFydERheXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3JlcyB0aGUgbGFzdCBkYXRlIGNoYW5nZSB3aGljaCBjb3VsZCBub3QgZ2V0IGFwcGxpZWQgd2hpbGUgYSB0cmFuc2l0aW9uIHdhcyBydW5uaW5nXG4gICAgICogQHBhcmFtIHtEYXRlfSBbZGF0ZT10aGlzLmN1cnJlbnREYXRlXVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBjYWNoZVVwZGF0ZShkYXRlPXRoaXMuY3VycmVudERhdGUpIHtcbiAgICAgICAgdGhpcy5jYWNoZWRVcGRhdGUgPSBkYXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluY3JlbWVudFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5ZWFySW5jcmVtZW50XG4gICAgICovXG4gICAgY2hhbmdlTW9udGgoaW5jcmVtZW50LCB5ZWFySW5jcmVtZW50KSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZURpcmVjdGlvbiA9IHllYXJJbmNyZW1lbnQgPiAwID8gJ3JpZ2h0JyA6IHllYXJJbmNyZW1lbnQgPCAwID8gJ2xlZnQnIDogaW5jcmVtZW50IDwgMCA/ICdsZWZ0JyA6ICdyaWdodCcsXG4gICAgICAgICAgICBoZWFkZXJNb250aE9wdHMsIHZkb20sIHg7XG5cbiAgICAgICAgaWYgKCFtZS51c2VBbmltYXRpb25zKSB7XG4gICAgICAgICAgICBtZS5yZWNyZWF0ZUNvbnRlbnQoaW5jcmVtZW50LCB5ZWFySW5jcmVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghbWUuaXNVcGRhdGluZykge1xuICAgICAgICAgICAgICAgIG1lLmlzVXBkYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBbbWUuZ2V0Q2VudGVyQ29udGVudEVsKCkuaWQsIG1lLmdldEhlYWRlck1vbnRoRWwoKS5pZF1cbiAgICAgICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcbiAgICAgICAgICAgICAgICAgICAgeCAgICA9IHNsaWRlRGlyZWN0aW9uID09PSAncmlnaHQnID8gMCA6IC1kYXRhWzBdLndpZHRoO1xuXG4gICAgICAgICAgICAgICAgICAgIHZkb20uY24ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLXJlbGF0aXZlJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1hbmltYXRpb24td3JhcHBlciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1kYXRlc2VsZWN0b3ItY29udGVudCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbiA6IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ICAgOiBgJHtkYXRhWzBdLmhlaWdodH1weGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHt4fXB4KWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoICAgIDogYCR7MiAqIGRhdGFbMF0ud2lkdGh9cHhgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyTW9udGhPcHRzID0gbWUudXBkYXRlSGVhZGVyTW9udGgoaW5jcmVtZW50LCB5ZWFySW5jcmVtZW50LCB0cnVlLCBkYXRhWzFdKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoeWVhckluY3JlbWVudCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUudXBkYXRlSGVhZGVyWWVhcihpbmNyZW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbWUuY3JlYXRlRGF5Vmlld0NvbnRlbnQodHJ1ZSwgdmRvbS5jblsyXS5jblswXS5jblswXSk7XG4gICAgICAgICAgICAgICAgICAgIHZkb20uY25bMl0uY25bMF0uY25bc2xpZGVEaXJlY3Rpb24gPT09ICdyaWdodCc/ICd1bnNoaWZ0JyA6ICdwdXNoJ10odmRvbS5jblsxXSk7XG4gICAgICAgICAgICAgICAgICAgIHZkb20uY24uc3BsaWNlKDEsIDEpO1xuXG4gICAgICAgICAgICAgICAgICAgIG1lLnByb21pc2VWZG9tVXBkYXRlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5jaGFuZ2VNb250aFRyYW5zaXRpb25DYWxsYmFjayh7ZGF0YTogZGF0YVswXSwgc2xpZGVEaXJlY3Rpb246IHNsaWRlRGlyZWN0aW9ufSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS51cGRhdGVIZWFkZXJNb250aFRyYW5zaXRpb25DYWxsYmFjayhoZWFkZXJNb250aE9wdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLmNoYW5nZU1vbnRoV3JhcHBlckNhbGxiYWNrKHNsaWRlRGlyZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZS51cGRhdGVIZWFkZXJNb250aFdyYXBwZXJDYWxsYmFjayhoZWFkZXJNb250aE9wdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLnRyaWdnZXJWZG9tVXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWUuY2FjaGVVcGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNsaWRlcyB0aGUgd3JhcHBlciBkaXYgdG8gdGhlIGxlZnQgb3IgcmlnaHRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0cy5zbGlkZURpcmVjdGlvblxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBjaGFuZ2VNb250aFRyYW5zaXRpb25DYWxsYmFjayhvcHRzKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tLFxuICAgICAgICAgICAge2RhdGEsIHNsaWRlRGlyZWN0aW9ufSA9IG9wdHMsXG4gICAgICAgICAgICB4O1xuXG4gICAgICAgIHggPSBzbGlkZURpcmVjdGlvbiA9PT0gJ3JpZ2h0JyA/IC1kYXRhLndpZHRoIDogMDtcbiAgICAgICAgdmRvbS5jblsxXS5jblswXS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3h9cHgpYDtcbiAgICAgICAgbWUuX3Zkb20gPSB2ZG9tOyAvLyBzaWxlbnQgdXBkYXRlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgdGhlIHdyYXBwZXIgZGl2IHdpdGggdGhlIHRhcmdldCBtb250aFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzbGlkZURpcmVjdGlvblxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBjaGFuZ2VNb250aFdyYXBwZXJDYWxsYmFjayhzbGlkZURpcmVjdGlvbikge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICB2ZG9tLmNuWzFdID0gdmRvbS5jblsxXS5jblswXS5jbltzbGlkZURpcmVjdGlvbiA9PT0gJ3JpZ2h0JyA/IDEgOiAwXTtcbiAgICAgICAgbWUuX3Zkb20gPSB2ZG9tOyAvLyBzaWxlbnQgdXBkYXRlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5jcmVtZW50XG4gICAgICovXG4gICAgY2hhbmdlWWVhcihpbmNyZW1lbnQpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIHNjcm9sbEZyb21Ub3AsIHZkb20sIHk7XG5cbiAgICAgICAgaWYgKCFtZS51c2VBbmltYXRpb25zKSB7XG4gICAgICAgICAgICBtZS5yZWNyZWF0ZUNvbnRlbnQoMCwgaW5jcmVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghbWUuaXNVcGRhdGluZykge1xuICAgICAgICAgICAgICAgIG1lLmlzVXBkYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBtZS5nZXRDZW50ZXJDb250ZW50RWwoKS5pZFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbEZyb21Ub3AgPSBtZS5zY3JvbGxOZXdZZWFyRnJvbVRvcCAmJiBpbmNyZW1lbnQgPCAwIHx8ICFtZS5zY3JvbGxOZXdZZWFyRnJvbVRvcCAmJiBpbmNyZW1lbnQgPiAwO1xuICAgICAgICAgICAgICAgICAgICB2ZG9tICAgICAgICAgID0gbWUudmRvbTtcbiAgICAgICAgICAgICAgICAgICAgeSAgICAgICAgICAgICA9IHNjcm9sbEZyb21Ub3AgPyAwIDogLWRhdGEuaGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgICAgIHZkb20uY24ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLXJlbGF0aXZlJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1hbmltYXRpb24td3JhcHBlciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1kYXRlc2VsZWN0b3ItY29udGVudCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbiA6IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCAgICAgICA6IGAkezIgKiBkYXRhLmhlaWdodH1weGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAgICA6IGB0cmFuc2xhdGVZKCR7eX1weClgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCAgICAgICAgOiBgJHtkYXRhLndpZHRofXB4YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIG1lLnVwZGF0ZUhlYWRlclllYXIoaW5jcmVtZW50LCB0cnVlKTtcblxuICAgICAgICAgICAgICAgICAgICBtZS5jcmVhdGVEYXlWaWV3Q29udGVudCh0cnVlLCB2ZG9tLmNuWzJdLmNuWzBdLmNuWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgdmRvbS5jblsyXS5jblswXS5jbltzY3JvbGxGcm9tVG9wID8gJ3Vuc2hpZnQnIDogJ3B1c2gnXSh2ZG9tLmNuWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgdmRvbS5jbi5zcGxpY2UoMSwgMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbWUucHJvbWlzZVZkb21VcGRhdGUodmRvbSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5ID0gc2Nyb2xsRnJvbVRvcCA/IC1kYXRhLmhlaWdodCA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZG9tLmNuWzFdLmNuWzBdLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7eX1weClgO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZkb20uY25bMV0gPSB2ZG9tLmNuWzFdLmNuWzBdLmNuW3Njcm9sbEZyb21Ub3AgPyAxIDogMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUudHJpZ2dlclZkb21VcGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZS5jYWNoZVVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBjcmVhdGVEYXlOYW1lc1JvdygpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgZGF0ZSA9IERhdGVVdGlsLmNsb25lKG1lLmN1cnJlbnREYXRlKSxcbiAgICAgICAgICAgIGkgICAgPSAwLFxuICAgICAgICAgICAgbGVuICA9IDcsXG4gICAgICAgICAgICByb3cgID0ge2NsczogWyduZW8tcm93JywgJ25lby1oZWFkZXItcm93J10sIGNuOiBbXX0sXG4gICAgICAgICAgICBjb25maWcsIGRheTtcblxuICAgICAgICBkYXRlLnNldERhdGUobWUuY3VycmVudERhdGUuZ2V0RGF0ZSgpIC0gbWUuY3VycmVudERhdGUuZ2V0RGF5KCkgKyBtZS53ZWVrU3RhcnREYXkpO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWNlbGwnXSxcbiAgICAgICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgICAgIGNscyA6IFsnbmVvLWNlbGwtY29udGVudCddLFxuICAgICAgICAgICAgICAgICAgICBodG1sOiBtZS5pbnRsRm9ybWF0X2RheS5mb3JtYXQoZGF0ZSlcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZGF5ID0gZGF0ZS5nZXREYXkoKTtcblxuICAgICAgICAgICAgaWYgKCFtZS5zaG93V2Vla2VuZHMgJiYgKGRheSA9PT0gMCB8fCBkYXkgPT09IDYpKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLnJlbW92ZURvbSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJvdy5jbi5wdXNoKGNvbmZpZyk7XG5cbiAgICAgICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJvdztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gc2lsZW50IHRydWUgdG8gdXBkYXRlIHRoZSB2ZG9tIHNpbGVudGx5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtjb250YWluZXJFbF1cbiAgICAgKi9cbiAgICBjcmVhdGVEYXlWaWV3Q29udGVudChzaWxlbnQsIGNvbnRhaW5lckVsKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY3VycmVudERhdGUgICAgID0gbWUuY3VycmVudERhdGUsXG4gICAgICAgICAgICBjdXJyZW50RGF5ICAgICAgPSBjdXJyZW50RGF0ZS5nZXREYXRlKCksXG4gICAgICAgICAgICBjdXJyZW50TW9udGggICAgPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpLFxuICAgICAgICAgICAgY3VycmVudFllYXIgICAgID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgIGRhdGUgICAgICAgICAgICA9IG1lLmN1cnJlbnREYXRlLCAvLyBjbG9uZWRcbiAgICAgICAgICAgIHZhbHVlRGF0ZSAgICAgICA9IG5ldyBEYXRlKG1lLnZhbHVlKSxcbiAgICAgICAgICAgIHZhbHVlTW9udGggICAgICA9IHZhbHVlRGF0ZS5nZXRNb250aCgpLFxuICAgICAgICAgICAgdmFsdWVZZWFyICAgICAgID0gdmFsdWVEYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICBkYXlzSW5Nb250aCAgICAgPSBEYXRlVXRpbC5nZXREYXlzSW5Nb250aChjdXJyZW50RGF0ZSksXG4gICAgICAgICAgICBmaXJzdERheUluTW9udGggPSBEYXRlVXRpbC5nZXRGaXJzdERheU9mTW9udGgoY3VycmVudERhdGUpLFxuICAgICAgICAgICAgZmlyc3REYXlPZmZzZXQgID0gZmlyc3REYXlJbk1vbnRoIC0gbWUud2Vla1N0YXJ0RGF5LFxuICAgICAgICAgICAgdmRvbSAgICAgICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGNlbnRlckVsICAgICAgICA9IGNvbnRhaW5lckVsIHx8IG1lLmdldENlbnRlckNvbnRlbnRFbCgpLFxuICAgICAgICAgICAgY29sdW1ucyAgICAgICAgID0gNyxcbiAgICAgICAgICAgIGkgICAgICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBjZWxsSWQsIGNvbmZpZywgZGF0ZURheSwgZGF5LCBoYXNDb250ZW50LCBqLCByb3csIHJvd3M7XG5cbiAgICAgICAgZmlyc3REYXlPZmZzZXQgPSBmaXJzdERheU9mZnNldCA8IDAgPyBmaXJzdERheU9mZnNldCArIDcgOiBmaXJzdERheU9mZnNldDtcbiAgICAgICAgcm93cyAgICAgICAgICAgPSAoZGF5c0luTW9udGggKyBmaXJzdERheU9mZnNldCkgLyA3ID4gNSA/IDYgOiA1O1xuICAgICAgICBkYXkgICAgICAgICAgICA9IDEgLSBmaXJzdERheU9mZnNldDtcblxuICAgICAgICBkYXRlLnNldERhdGUoZGF5KTtcblxuICAgICAgICBjZW50ZXJFbC5jbi5wdXNoKG1lLmNyZWF0ZURheU5hbWVzUm93KCkpO1xuXG4gICAgICAgIGZvciAoOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICAgICAgICByb3cgPSB7Y2xzOiBbJ25lby1yb3cnXSwgY246IFtdfTtcblxuICAgICAgICAgICAgZm9yIChqPTA7IGogPCBjb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgICAgICBoYXNDb250ZW50ID0gZGF5ID4gMCAmJiBkYXkgPD0gZGF5c0luTW9udGg7XG4gICAgICAgICAgICAgICAgY2VsbElkICAgICA9IG1lLmdldENlbGxJZChjdXJyZW50WWVhciwgY3VycmVudE1vbnRoICsgMSwgZGF5KTtcblxuICAgICAgICAgICAgICAgIGRhdGVEYXkgPSBkYXRlLmdldERheSgpO1xuXG4gICAgICAgICAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgICAgICBpZCAgICAgIDogY2VsbElkLFxuICAgICAgICAgICAgICAgICAgICBjbHMgICAgIDogaGFzQ29udGVudCA/IFsnbmVvLWNlbGwnXSA6IFsnbmVvLWNlbGwnLCAnbmVvLWRpc2FibGVkJ10sXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4OiBoYXNDb250ZW50ID8gLTEgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNscyA6IFsnbmVvLWNlbGwtY29udGVudCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogaGFzQ29udGVudCA/IGRheSA6IG1lLnNob3dEaXNhYmxlZERheXMgPyBkYXRlLmdldERhdGUoKSA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGVEYXkgPT09IDAgfHwgZGF0ZURheSA9PT0gNikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW1lLnNob3dXZWVrZW5kcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLnJlbW92ZURvbSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25maWcuY2xzLnB1c2goJ25lby13ZWVrZW5kJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRvZGF5LnllYXIgPT09IGN1cnJlbnRZZWFyICYmIHRvZGF5Lm1vbnRoID09PSBjdXJyZW50TW9udGggJiYgdG9kYXkuZGF5ID09PSBkYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLmNuWzBdLmNscy5wdXNoKCduZW8tdG9kYXknKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWVZZWFyID09PSBjdXJyZW50WWVhciAmJiB2YWx1ZU1vbnRoID09PSBjdXJyZW50TW9udGggJiYgZGF5ID09PSBjdXJyZW50RGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5jbHMucHVzaCgnbmVvLXNlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIG1lLnNlbGVjdGlvbk1vZGVsLml0ZW1zID0gW2NlbGxJZF07IC8vIHNpbGVudCB1cGRhdGVcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByb3cuY24ucHVzaChjb25maWcpO1xuXG4gICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMSk7XG5cbiAgICAgICAgICAgICAgICBkYXkrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2VudGVyRWwuY24ucHVzaChyb3cpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVbc2lsZW50ID8gJ192ZG9tJyA6ICd2ZG9tJ10gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZm9jdXNDdXJyZW50SXRlbSgpIHtcbiAgICAgICAgdGhpcy5mb2N1cyh0aGlzLnNlbGVjdGlvbk1vZGVsLml0ZW1zWzBdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IHllYXJcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IG1vbnRoXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBkYXlcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBpZFxuICAgICAqL1xuICAgIGdldENlbGxJZCh5ZWFyLCBtb250aCwgZGF5KSB7XG4gICAgICAgIGRheSA9IGRheS50b1N0cmluZygpO1xuXG4gICAgICAgIGlmIChkYXkubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgZGF5ID0gJzAnICsgZGF5O1xuICAgICAgICB9XG5cbiAgICAgICAgbW9udGggPSBtb250aC50b1N0cmluZygpO1xuXG4gICAgICAgIGlmIChtb250aC5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICBtb250aCA9ICcwJyArIG1vbnRoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaWQgKyAnX18nICsgeWVhciArICctJyArIG1vbnRoICsgJy0nICsgZGF5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRDZW50ZXJDb250ZW50RWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZkb20uY25bMV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldEhlYWRlck1vbnRoRWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZkb20uY25bMF0uY25bMV0uY25bMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldEhlYWRlclllYXJFbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmRvbS5jblswXS5jblsxXS5jblsxXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Db21wb25lbnRDbGljayhkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxuICAgICAgICAgICAgY2xzID0gZGF0YS5wYXRoWzBdLmNscyxcbiAgICAgICAgICAgIGRhdGUsIG1vbnRoSW5jcmVtZW50O1xuXG4gICAgICAgICAgICAgaWYgKGNscy5pbmNsdWRlcygnbmVvLWNlbGwnKSkgICAgICAgIHttZS5vbkNlbGxDbGljayhkYXRhKTt9XG4gICAgICAgIGVsc2UgaWYgKGNscy5pbmNsdWRlcygnbmVvLW5leHQtYnV0dG9uJykpIHttb250aEluY3JlbWVudCA9ICAxO31cbiAgICAgICAgZWxzZSBpZiAoY2xzLmluY2x1ZGVzKCduZW8tcHJldi1idXR0b24nKSkge21vbnRoSW5jcmVtZW50ID0gLTE7fVxuXG4gICAgICAgIGlmIChtb250aEluY3JlbWVudCkge1xuICAgICAgICAgICAgZGF0ZSA9IG1lLmN1cnJlbnREYXRlOyAvLyBjbG9uZWRcbiAgICAgICAgICAgIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgbW9udGhJbmNyZW1lbnQpO1xuICAgICAgICAgICAgbWUudmFsdWUgPSBEYXRlVXRpbC5jb252ZXJ0VG95eXl5bW1kZChkYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkNlbGxDbGljayhkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY2VsbEVsID0gVkRvbVV0aWwuZmluZFZkb21DaGlsZChtZS52ZG9tLCBkYXRhLnBhdGhbMF0uaWQpLFxuICAgICAgICAgICAgZGF0ZSAgID0gbWUuY3VycmVudERhdGU7IC8vIGNsb25lZFxuXG4gICAgICAgIGRhdGUuc2V0RGF0ZShwYXJzZUludChjZWxsRWwudmRvbS5jblswXS5odG1sKSk7XG4gICAgICAgIG1lLnZhbHVlID0gRGF0ZVV0aWwuY29udmVydFRveXl5eW1tZGQoZGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uQ29tcG9uZW50V2hlZWwoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB3aGVlbERlbHRhID0gbWUubW91c2VXaGVlbERlbHRhLFxuICAgICAgICAgICAgZGF0ZSwgbW9udGhJbmNyZW1lbnQsIHllYXJJbmNyZW1lbnQ7XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKGRhdGEuZGVsdGFZKSA+PSBNYXRoLmFicyhkYXRhLmRlbHRhWCkpIHtcbiAgICAgICAgICAgICAgICAgaWYgKGRhdGEuZGVsdGFZIDw9IC13aGVlbERlbHRhKSB7eWVhckluY3JlbWVudCAgPSAgMTt9XG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhLmRlbHRhWSA+PSAgd2hlZWxEZWx0YSkge3llYXJJbmNyZW1lbnQgID0gLTE7fVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICBpZiAoZGF0YS5kZWx0YVggPj0gIHdoZWVsRGVsdGEpIHttb250aEluY3JlbWVudCA9ICAxO31cbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEuZGVsdGFYIDw9IC13aGVlbERlbHRhKSB7bW9udGhJbmNyZW1lbnQgPSAtMTt9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoeWVhckluY3JlbWVudCAmJiAhbWUuc2Nyb2xsTmV3WWVhckZyb21Ub3ApIHtcbiAgICAgICAgICAgIHllYXJJbmNyZW1lbnQgKj0gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9udGhJbmNyZW1lbnQpIHtcbiAgICAgICAgICAgIGRhdGUgPSBtZS5jdXJyZW50RGF0ZTsgLy8gY2xvbmVkXG4gICAgICAgICAgICBkYXRlLnNldE1vbnRoKGRhdGUuZ2V0TW9udGgoKSArIG1vbnRoSW5jcmVtZW50KTtcbiAgICAgICAgICAgIG1lLnZhbHVlID0gRGF0ZVV0aWwuY29udmVydFRveXl5eW1tZGQoZGF0ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoeWVhckluY3JlbWVudCkge1xuICAgICAgICAgICAgZGF0ZSA9IG1lLmN1cnJlbnREYXRlOyAvLyBjbG9uZWRcbiAgICAgICAgICAgIGRhdGUuc2V0RnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpICsgeWVhckluY3JlbWVudCk7XG4gICAgICAgICAgICBtZS52YWx1ZSA9IERhdGVVdGlsLmNvbnZlcnRUb3l5eXltbWRkKGRhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVjcmVhdGVzIHRoZSBjdXJyZW50IGNlbnRlckVsLCBtb250aCAmIHllYXIgZWxcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbW9udGhJbmNyZW1lbnRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geWVhckluY3JlbWVudFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcmVjcmVhdGVDb250ZW50KG1vbnRoSW5jcmVtZW50LCB5ZWFySW5jcmVtZW50LCBzaWxlbnQ9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5yZWNyZWF0ZURheVZpZXdDb250ZW50KHRydWUpO1xuXG4gICAgICAgIGlmIChtb250aEluY3JlbWVudCAhPT0gMCkge1xuICAgICAgICAgICAgbWUudXBkYXRlSGVhZGVyTW9udGgobW9udGhJbmNyZW1lbnQsIHllYXJJbmNyZW1lbnQsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHllYXJJbmNyZW1lbnQgIT09IDApIHtcbiAgICAgICAgICAgIG1lLnVwZGF0ZUhlYWRlclllYXIoeWVhckluY3JlbWVudCwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBtZS50cmlnZ2VyVmRvbVVwZGF0ZShzaWxlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlY3JlYXRlcyB0aGUgY3VycmVudCBjZW50ZXJFbFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV1cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzeW5jSWRzPXRydWVdXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHJlY3JlYXRlRGF5Vmlld0NvbnRlbnQoc2lsZW50PWZhbHNlLCBzeW5jSWRzPXRydWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5nZXRDZW50ZXJDb250ZW50RWwoKS5jbiA9IFtdO1xuICAgICAgICBtZS5jcmVhdGVEYXlWaWV3Q29udGVudCh0cnVlKTtcblxuICAgICAgICBpZiAoc3luY0lkcykge1xuICAgICAgICAgICAgbWUuc3luY1Zkb21JZHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnRyaWdnZXJWZG9tVXBkYXRlKHNpbGVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgYSB2ZG9tIHVwZGF0ZSAmIHNldHMgaXNVcGRhdGluZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgdHJpZ2dlclZkb21VcGRhdGUoc2lsZW50PWZhbHNlKSB7XG4gICAgICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgICAgICBtZS5pc1VwZGF0aW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgbWUucHJvbWlzZVZkb21VcGRhdGUobWUudmRvbSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWUuaXNVcGRhdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV1cbiAgICAgKi9cbiAgICB1cGRhdGVIZWFkZXJEYXlzKHZhbHVlLCBvbGRWYWx1ZSwgc2lsZW50PWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuaW50bEZvcm1hdF9kYXkgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChtZS5sb2NhbGUsIHt3ZWVrZGF5OiB2YWx1ZX0pO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXQgY2VudGVyRWwgPSBtZS5nZXRDZW50ZXJDb250ZW50RWwoKS5jblswXSxcbiAgICAgICAgICAgICAgICBkYXRlICAgICA9IG1lLmN1cnJlbnREYXRlLCAvLyBjbG9uZWRcbiAgICAgICAgICAgICAgICB2ZG9tICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICAgICAgaSAgICAgICAgPSAwLFxuICAgICAgICAgICAgICAgIGRheSwgbm9kZTtcblxuICAgICAgICAgICAgZGF0ZS5zZXREYXRlKG1lLmN1cnJlbnREYXRlLmdldERhdGUoKSAtIG1lLmN1cnJlbnREYXRlLmdldERheSgpICsgbWUud2Vla1N0YXJ0RGF5KTtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgICAgICBub2RlID0gY2VudGVyRWwuY25baV07XG5cbiAgICAgICAgICAgICAgICBub2RlLmNuWzBdLmh0bWwgPSBtZS5pbnRsRm9ybWF0X2RheS5mb3JtYXQoZGF0ZSk7XG5cbiAgICAgICAgICAgICAgICBkYXkgPSBkYXRlLmdldERheSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFtZS5zaG93V2Vla2VuZHMgJiYgKGRheSA9PT0gMCB8fCBkYXkgPT09IDYpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlRG9tID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbm9kZS5yZW1vdmVEb207XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1lW3NpbGVudCA/ICdfdmRvbScgOiAndmRvbSddID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluY3JlbWVudFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5ZWFySW5jcmVtZW50XG4gICAgICogQHBhcmFtIHtCb29sZWFufSBzaWxlbnQ9ZmFsc2VcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbW9udGhFbERvbVJlY3RcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fG51bGx9IG9wdHMgb3IgbnVsbCBpbiBjYXNlIG5vIHRyYW5zaXRpb25zIGFyZSBuZWVkZWRcbiAgICAgKi9cbiAgICB1cGRhdGVIZWFkZXJNb250aChpbmNyZW1lbnQsIHllYXJJbmNyZW1lbnQsIHNpbGVudD1mYWxzZSwgbW9udGhFbERvbVJlY3QpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGR0ICAgICAgICAgICAgID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobWUubG9jYWxlLCB7bW9udGg6ICdzaG9ydCd9KSxcbiAgICAgICAgICAgIGN1cnJlbnRNb250aCAgID0gZHQuZm9ybWF0KG1lLmN1cnJlbnREYXRlKSxcbiAgICAgICAgICAgIG1vbnRoRWwgICAgICAgID0gbWUuZ2V0SGVhZGVyTW9udGhFbCgpLFxuICAgICAgICAgICAgc2xpZGVEaXJlY3Rpb24gPSB5ZWFySW5jcmVtZW50ID4gMCA/ICdib3R0b20nIDogeWVhckluY3JlbWVudCA8IDAgPyAndG9wJyA6IGluY3JlbWVudCA8IDAgPyAndG9wJyA6ICdib3R0b20nLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgaGVhZGVyQ2VudGVyRWwsIHk7XG5cbiAgICAgICAgaWYgKCFtZS5yZW5kZXJlZCB8fCAhbWUudXNlQW5pbWF0aW9ucykge1xuICAgICAgICAgICAgbW9udGhFbC5odG1sID0gY3VycmVudE1vbnRoO1xuICAgICAgICAgICAgbWVbc2lsZW50ID8gJ192ZG9tJyA6ICd2ZG9tJ10gPSB2ZG9tO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB5ID0gc2xpZGVEaXJlY3Rpb24gPT09ICd0b3AnID8gMCA6IC1tb250aEVsRG9tUmVjdC5oZWlnaHQ7XG5cbiAgICAgICAgICAgIHZkb20uY25bMF0uY25bMV0uY24udW5zaGlmdCh7XG4gICAgICAgICAgICAgICAgY2xzICA6IFsnbmVvLXJlbGF0aXZlLWhlYWRlciddLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogbW9udGhFbERvbVJlY3QuaGVpZ2h0ICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggOiBtb250aEVsRG9tUmVjdC53aWR0aCAgKyAncHgnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1hbmltYXRpb24td3JhcHBlci1oZWFkZXInXSxcbiAgICAgICAgICAgICAgICAgICAgY24gOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCAgIDogMiAqIG1vbnRoRWxEb21SZWN0LmhlaWdodCArICdweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKCR7eX1weClgLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggICAgOiBtb250aEVsRG9tUmVjdC53aWR0aCArICdweCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaGVhZGVyQ2VudGVyRWwgPSB2ZG9tLmNuWzBdLmNuWzFdO1xuXG4gICAgICAgICAgICBoZWFkZXJDZW50ZXJFbC5jblswXS5jblswXS5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICBjbHMgOiBbJ25lby1tb250aC10ZXh0J10sXG4gICAgICAgICAgICAgICAgaHRtbDogY3VycmVudE1vbnRoXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaGVhZGVyQ2VudGVyRWwuY25bMF0uY25bMF0uY25bc2xpZGVEaXJlY3Rpb24gPT09ICd0b3AnID8gJ3Vuc2hpZnQnIDogJ3B1c2gnXShoZWFkZXJDZW50ZXJFbC5jblsxXSk7XG4gICAgICAgICAgICBoZWFkZXJDZW50ZXJFbC5jbi5zcGxpY2UoMSwgMSk7XG5cbiAgICAgICAgICAgIG1lW3NpbGVudCA/ICdfdmRvbScgOiAndmRvbSddID0gdmRvbTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkYXRhICAgICAgICAgIDogbW9udGhFbERvbVJlY3QsXG4gICAgICAgICAgICAgICAgaGVhZGVyQ2VudGVyRWw6IGhlYWRlckNlbnRlckVsLFxuICAgICAgICAgICAgICAgIGluY3JlbWVudCAgICAgOiBpbmNyZW1lbnQsXG4gICAgICAgICAgICAgICAgeWVhckluY3JlbWVudCA6IHllYXJJbmNyZW1lbnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTbGlkZXMgdGhlIHdyYXBwZXIgZGl2IHRvIHRoZSB0b3Agb3IgYm90dG9tXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5kYXRhXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMuaGVhZGVyQ2VudGVyRWxcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb3B0cy5pbmNyZW1lbnRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb3B0cy55ZWFySW5jcmVtZW50XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHVwZGF0ZUhlYWRlck1vbnRoVHJhbnNpdGlvbkNhbGxiYWNrKG9wdHMpIHtcbiAgICAgICAgbGV0IHtkYXRhLCBoZWFkZXJDZW50ZXJFbCwgaW5jcmVtZW50LCB5ZWFySW5jcmVtZW50fSA9IG9wdHMsXG4gICAgICAgICAgICBtZSAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tICAgICAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBzbGlkZURpcmVjdGlvbiA9IHllYXJJbmNyZW1lbnQgPiAwID8gJ2JvdHRvbScgOiB5ZWFySW5jcmVtZW50IDwgMCA/ICd0b3AnIDogaW5jcmVtZW50IDwgMCA/ICd0b3AnIDogJ2JvdHRvbScsXG4gICAgICAgICAgICB5O1xuXG4gICAgICAgIHkgPSBzbGlkZURpcmVjdGlvbiA9PT0gJ3RvcCcgPyAtZGF0YS5oZWlnaHQgOiAwO1xuICAgICAgICBoZWFkZXJDZW50ZXJFbC5jblswXS5jblswXS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3l9cHgpYDtcbiAgICAgICAgbWUuX3Zkb20gPSB2ZG9tOyAvLyBzaWxlbnQgdXBkYXRlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgdGhlIHdyYXBwZXIgZGl2IHRvIHRoZSBsZWZ0IG9yIHJpZ2h0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5oZWFkZXJDZW50ZXJFbFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvcHRzLmluY3JlbWVudFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvcHRzLnllYXJJbmNyZW1lbnRcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgdXBkYXRlSGVhZGVyTW9udGhXcmFwcGVyQ2FsbGJhY2sob3B0cykge1xuICAgICAgICBsZXQge2hlYWRlckNlbnRlckVsLCBpbmNyZW1lbnQsIHllYXJJbmNyZW1lbnR9ID0gb3B0cyxcbiAgICAgICAgICAgIG1lICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gICAgICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIHNsaWRlRGlyZWN0aW9uID0geWVhckluY3JlbWVudCA+IDAgPyAnYm90dG9tJyA6IHllYXJJbmNyZW1lbnQgPCAwID8gJ3RvcCcgOiBpbmNyZW1lbnQgPCAwID8gJ3RvcCcgOiAnYm90dG9tJztcblxuICAgICAgICBoZWFkZXJDZW50ZXJFbC5jblswXSA9IGhlYWRlckNlbnRlckVsLmNuWzBdLmNuWzBdLmNuW3NsaWRlRGlyZWN0aW9uID09PSAndG9wJyA/IDEgOiAwXTtcbiAgICAgICAgbWUuX3Zkb20gPSB2ZG9tOyAvLyBzaWxlbnQgdXBkYXRlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5jcmVtZW50XG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbc2lsZW50PWZhbHNlXVxuICAgICAqL1xuICAgIHVwZGF0ZUhlYWRlclllYXIoaW5jcmVtZW50LCBzaWxlbnQ9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgeWVhckVsID0gbWUuZ2V0SGVhZGVyWWVhckVsKCk7XG5cbiAgICAgICAgeWVhckVsLmh0bWwgPSBtZS5jdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgICAgIG1lW3NpbGVudCA/ICdfdmRvbScgOiAndmRvbSddID0gdmRvbTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKERhdGVTZWxlY3Rvcik7XG5cbmV4cG9ydCB7RGF0ZVNlbGVjdG9yIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uZm9ybS5maWVsZC5DaGVja0JveFxuICogQGV4dGVuZHMgTmVvLmZvcm0uZmllbGQuQmFzZVxuICovXG5jbGFzcyBDaGVja0JveCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZm9ybS5maWVsZC5DaGVja0JveCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmZvcm0uZmllbGQuQ2hlY2tCb3gnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY2hlY2tib3hmaWVsZCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjaGVja2JveGZpZWxkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGNoZWNrZWRfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBjaGVja2VkXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gY2xzPVsnbmVvLWNoZWNrYm94ZmllbGQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1jaGVja2JveGZpZWxkJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBoaWRlTGFiZWxfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBoaWRlTGFiZWxfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGhpZGVWYWx1ZUxhYmVsXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgaGlkZVZhbHVlTGFiZWxfOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBpbnB1dFR5cGVfPSdjaGVja2JveCdcbiAgICAgICAgICovXG4gICAgICAgIGlucHV0VHlwZV86ICdjaGVja2JveCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGxhYmVsVGV4dF89J0xhYmVsVGV4dCdcbiAgICAgICAgICovXG4gICAgICAgIGxhYmVsVGV4dF86ICdMYWJlbFRleHQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogZGVmYXVsdHMgdG8gcHhcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfFN0cmluZ30gbGFiZWxXaWR0aF89MTUwXG4gICAgICAgICAqL1xuICAgICAgICBsYWJlbFdpZHRoXzogMTUwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBUaGUgbmFtZSAoZ3JvdXApIG9mIHRoZSBpbnB1dCBkb20gbm9kZVxuICAgICAgICAgKi9cbiAgICAgICAgbmFtZV86ICcnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB2YWx1ZUxhYmVsVGV4dF89J1ZhbHVlTGFiZWwnXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZUxhYmVsVGV4dF86ICdWYWx1ZUxhYmVsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICB0YWc6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby1jaGVja2JveC1sYWJlbCddXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGFnOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgIGNsczogWyduZW8tY2hlY2tib3gtaW5wdXQnXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRhZzogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWNoZWNrYm94LXZhbHVlLWxhYmVsJ11cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBOZW8uY2xvbmUobWUuZG9tTGlzdGVuZXJzLCB0cnVlKSxcbiAgICAgICAgICAgIHZkb20gICAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBpbnB1dEVsICAgICAgPSB2ZG9tLmNuWzFdLFxuICAgICAgICAgICAgdmFsdWVMYWJlbCAgID0gdmRvbS5jblsyXTtcblxuICAgICAgICBpbnB1dEVsLmlkID0gdmFsdWVMYWJlbC5mb3IgPSBtZS5pZCArICctaW5wdXQnO1xuICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICBkb21MaXN0ZW5lcnMucHVzaCh7XG4gICAgICAgICAgICBjaGFuZ2U6IHtcbiAgICAgICAgICAgICAgICBmbiAgIDogbWUub25JbnB1dFZhbHVlQ2hhbmdlLFxuICAgICAgICAgICAgICAgIHNjb3BlOiBtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldENoZWNrZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMV0uY2hlY2tlZCA9IHZhbHVlO1xuICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbWUuZmlyZSgnY2hhbmdlJywge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogbWUsXG4gICAgICAgICAgICAgICAgb2xkVmFsdWUgOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaGlkZUxhYmVsIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEhpZGVMYWJlbCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgdmRvbS5jblswXS5yZW1vdmVEb20gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGhpZGVMYWJlbFZhbHVlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEhpZGVWYWx1ZUxhYmVsKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICB2ZG9tLmNuWzJdLnJlbW92ZURvbSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaW5wdXRUeXBlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldElucHV0VHlwZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgdmRvbS5jblsxXS50eXBlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBsYWJlbFRleHQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TGFiZWxUZXh0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICB2ZG9tLmNuWzBdLmlubmVySFRNTCA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbGFiZWxXaWR0aCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldExhYmVsV2lkdGgodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgIGlmICghbWUuaGlkZUxhYmVsKSB7XG4gICAgICAgICAgICB2ZG9tLmNuWzBdLndpZHRoID0gdmFsdWU7XG4gICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbmFtZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXROYW1lKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICB2ZG9tLmNuWzFdLm5hbWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHZhbHVlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgICAgICB2ZG9tLmNuWzFdLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIuYWZ0ZXJTZXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdmFsdWVMYWJlbCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRWYWx1ZUxhYmVsVGV4dCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgaWYgKCFtZS5oaWRlVmFsdWVMYWJlbCkge1xuICAgICAgICAgICAgdmRvbS5jblsyXS5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0cmlnZ2VyZWQgd2hlbiBhIHVzZXIgY2hlY2tzIGEgY2hlY2tib3ggaW5wdXQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbklucHV0VmFsdWVDaGFuZ2UoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjaGVja2VkID0gZGF0YS50YXJnZXQuY2hlY2tlZDtcblxuICAgICAgICBtZS5fY2hlY2tlZCA9IGNoZWNrZWQ7IC8vIHNpbGVudCB1cGRhdGVcblxuICAgICAgICAvLyBrZWVwIHRoZSB2ZG9tICYgdm5vZGUgaW4gc3luYyBmb3IgZnV0dXJlIHVwZGF0ZXNcbiAgICAgICAgbWUudmRvbS5jblsxXS5jaGVja2VkID0gY2hlY2tlZDtcbiAgICAgICAgbWUudm5vZGUuY2hpbGROb2Rlc1ttZS5oaWRlTGFiZWwgPyAwIDogMV0uYXR0cmlidXRlcy5jaGVja2VkID0gY2hlY2tlZCArICcnO1xuXG4gICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogbWUsXG4gICAgICAgICAgICBvbGRWYWx1ZSA6ICFjaGVja2VkLFxuICAgICAgICAgICAgdmFsdWUgICAgOiBjaGVja2VkXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ2hlY2tCb3gpO1xuXG5leHBvcnQge0NoZWNrQm94IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDaGVja0JveCAgICAgICAgIGZyb20gJy4vQ2hlY2tCb3gubWpzJztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gJy4uLy4uL21hbmFnZXIvQ29tcG9uZW50Lm1qcydcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmZvcm0uZmllbGQuUmFkaW9cbiAqIEBleHRlbmRzIE5lby5mb3JtLmZpZWxkLkNoZWNrQm94XG4gKi9cbmNsYXNzIFJhZGlvIGV4dGVuZHMgQ2hlY2tCb3gge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZm9ybS5maWVsZC5SYWRpbydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmZvcm0uZmllbGQuUmFkaW8nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ncmFkaW9maWVsZCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdyYWRpb2ZpZWxkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBjbHM9WyduZW8tcmFkaW9maWVsZCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLXJhZGlvZmllbGQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gaW5wdXRUeXBlPSdyYWRpbydcbiAgICAgICAgICovXG4gICAgICAgIGlucHV0VHlwZTogJ3JhZGlvJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICB0YWc6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby1yYWRpby1sYWJlbCddXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGFnOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgIGNsczogWyduZW8tcmFkaW8taW5wdXQnXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRhZzogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLXJhZGlvLXZhbHVlLWxhYmVsJ11cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBjaGVja2VkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0Q2hlY2tlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgc3VwZXIuYWZ0ZXJTZXRDaGVja2VkKHZhbHVlLCBvbGRWYWx1ZSk7XG5cbiAgICAgICAgLy8gdXBkYXRlIHJhZGlvcyB3aXRoIHRoZSBzYW1lIG5hbWUgdG8gYmUgdW5jaGVja2VkXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy51bmNoZWNrR3JvdXBJdGVtcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0cmlnZ2VyZWQgd2hlbiBhIHVzZXIgY2hlY2tzIGEgcmFkaW8gaW5wdXQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbklucHV0VmFsdWVDaGFuZ2UoZGF0YSkge1xuICAgICAgICBzdXBlci5vbklucHV0VmFsdWVDaGFuZ2UoZGF0YSk7XG4gICAgICAgIHRoaXMudW5jaGVja0dyb3VwSXRlbXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSYWRpb3MgZG8gbm90IGZpcmUgYSBjaGFuZ2UgZXZlbnQgZm9yIFwidW5jaGVja1wiLCBzbyB3ZSBuZWVkIHRvIGl0ZXJhdGUgb3ZlciBvdGhlciByYWRpb3Mgd2l0aCB0aGUgc2FtZSBuYW1lLlxuICAgICAqL1xuICAgIHVuY2hlY2tHcm91cEl0ZW1zKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgcmFkaW9zO1xuXG4gICAgICAgIC8vIGRpc2N1c3M6IHdlIGNvdWxkIGxpbWl0IHRoaXMgdG8gcmFkaW9zIGluc2lkZSB0aGUgc2FtZSBmb3JtLCBJRiBhIHRvcCBsZXZlbCBmb3JtIGlzIHVzZWRcbiAgICAgICAgcmFkaW9zID0gQ29tcG9uZW50TWFuYWdlci5maW5kKHtcbiAgICAgICAgICAgIG50eXBlOiAncmFkaW9maWVsZCcsXG4gICAgICAgICAgICBuYW1lIDogbWUubmFtZVxuICAgICAgICB9KTtcblxuICAgICAgICByYWRpb3MuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmlkICE9PSBtZS5pZCAmJiBpdGVtLl9jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5fY2hlY2tlZCA9IGZhbHNlOyAvLyBzaWxlbnQgdXBkYXRlXG5cbiAgICAgICAgICAgICAgICAvLyBrZWVwIHRoZSB2ZG9tICYgdm5vZGUgaW4gc3luYyBmb3IgZnV0dXJlIHVwZGF0ZXNcbiAgICAgICAgICAgICAgICBpdGVtLnZkb20uY25bMV0uY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udm5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS52bm9kZS5jaGlsZE5vZGVzW21lLmhpZGVMYWJlbCA/IDAgOiAxXS5hdHRyaWJ1dGVzLmNoZWNrZWQgPSAnZmFsc2UnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGl0ZW0uZmlyZSgnY2hhbmdlJywge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IG1lLFxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZSA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICAgIDogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhSYWRpbyk7XG5cbmV4cG9ydCB7UmFkaW8gYXMgZGVmYXVsdH07IiwiaW1wb3J0IERhdGVVdGlsIGZyb20gJy4uL3V0aWwvRGF0ZS5tanMnO1xuaW1wb3J0IE1vZGVsICAgIGZyb20gJy4vTW9kZWwubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnNlbGVjdGlvbi5EYXRlU2VsZWN0b3JNb2RlbFxuICogQGV4dGVuZHMgTmVvLnNlbGVjdGlvbi5Nb2RlbFxuICovXG5jbGFzcyBEYXRlU2VsZWN0b3JNb2RlbCBleHRlbmRzIE1vZGVsIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnNlbGVjdGlvbi5EYXRlU2VsZWN0b3JNb2RlbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnNlbGVjdGlvbi5EYXRlU2VsZWN0b3JNb2RlbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdzZWxlY3Rpb24tZGF0ZXNlbGVjdG9ybW9kZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnc2VsZWN0aW9uLWRhdGVzZWxlY3Rvcm1vZGVsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRydWUgdG8gc3RheSBpbnNpZGUgdGhlIHNhbWUgY29sdW1uIHdoZW4gbmF2aWdhdGluZyB1cCBvciBkb3dud2FyZHNcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc3RheUluQ29sdW1uPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBzdGF5SW5Db2x1bW46IGZhbHNlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcmV0dXJucyB7RGF0ZX1cbiAgICAgKi9cbiAgICBnZXRDZWxsRGF0ZShkYXRhKSB7XG4gICAgICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLmdldFNlbGVjdGlvbigpLFxuICAgICAgICAgICAgaWRBcnJheSwgdG1wQXJyYXk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvblswXSkge1xuICAgICAgICAgICAgaWRBcnJheSA9IHNlbGVjdGlvblswXS5zcGxpdCgnX18nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlkQXJyYXkgPSBkYXRhLnBhdGhbMF0uaWQuc3BsaXQoJ19fJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0bXBBcnJheSA9IGlkQXJyYXlbMV0uc3BsaXQoJy0nKS5tYXAoZSA9PiBwYXJzZUludChlKSk7XG5cbiAgICAgICAgdG1wQXJyYXlbMV0tLTsgLy8gdGhlIG1vbnRoIGluc2lkZSB0aGUgdmlldyBpcyAxIGJhc2VkLCBhIGRhdGUgbmVlZHMgMCBiYXNlZFxuXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSguLi50bXBBcnJheSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uS2V5RG93bkRvd24oZGF0YSkge1xuICAgICAgICB0aGlzLm9uTmF2S2V5Um93KGRhdGEsIDcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbktleURvd25MZWZ0KGRhdGEpIHtcbiAgICAgICAgdGhpcy5vbk5hdktleUNvbHVtbihkYXRhLCAtMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uS2V5RG93blJpZ2h0KGRhdGEpIHtcbiAgICAgICAgdGhpcy5vbk5hdktleUNvbHVtbihkYXRhLCAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25LZXlEb3duVXAoZGF0YSkge1xuICAgICAgICB0aGlzLm9uTmF2S2V5Um93KGRhdGEsIC03KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0ZXBcbiAgICAgKi9cbiAgICBvbk5hdktleUNvbHVtbihkYXRhLCBzdGVwKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjZWxsRGF0ZSA9IG1lLmdldENlbGxEYXRlKGRhdGEpLFxuICAgICAgICAgICAgdmlldyAgICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgZGF5c0luTW9udGgsIGlkLCBuZXdEYXk7XG5cbiAgICAgICAgZGF5c0luTW9udGggPSBEYXRlVXRpbC5nZXREYXlzSW5Nb250aChjZWxsRGF0ZSk7XG4gICAgICAgIG5ld0RheSAgICAgID0gKGNlbGxEYXRlLmdldERhdGUoKSArIHN0ZXApICUgZGF5c0luTW9udGg7XG5cbiAgICAgICAgbmV3RGF5ID0gbmV3RGF5ID09PSAwID8gZGF5c0luTW9udGggOiBuZXdEYXk7XG5cbiAgICAgICAgaWQgPSB2aWV3LmdldENlbGxJZChjZWxsRGF0ZS5nZXRGdWxsWWVhcigpLCBjZWxsRGF0ZS5nZXRNb250aCgpICsgMSwgbmV3RGF5KTtcblxuICAgICAgICBtZS5zZWxlY3QoaWQpO1xuICAgICAgICB2aWV3LmZvY3VzKGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0ZXBcbiAgICAgKi9cbiAgICBvbk5hdktleVJvdyhkYXRhLCBzdGVwKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjZWxsRGF0ZSA9IG1lLmdldENlbGxEYXRlKGRhdGEpLFxuICAgICAgICAgICAgdmlldyAgICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgZGF5c0luTW9udGgsIGlkLCBuZXdEYXk7XG5cbiAgICAgICAgZGF5c0luTW9udGggPSBEYXRlVXRpbC5nZXREYXlzSW5Nb250aChjZWxsRGF0ZSk7XG4gICAgICAgIG5ld0RheSAgICAgID0gY2VsbERhdGUuZ2V0RGF0ZSgpICsgc3RlcDtcblxuICAgICAgICBpZiAobmV3RGF5ID4gZGF5c0luTW9udGgpIHtcbiAgICAgICAgICAgIGlmICghbWUuc3RheUluQ29sdW1uKSB7XG4gICAgICAgICAgICAgICAgbmV3RGF5ICs9IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdoaWxlIChuZXdEYXkgPiA3KSB7XG4gICAgICAgICAgICAgICAgbmV3RGF5IC09IHN0ZXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobmV3RGF5IDwgMSkge1xuICAgICAgICAgICAgaWYgKCFtZS5zdGF5SW5Db2x1bW4pIHtcbiAgICAgICAgICAgICAgICBuZXdEYXkgLT0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2hpbGUgKG5ld0RheSA8IGRheXNJbk1vbnRoIC0gNikge1xuICAgICAgICAgICAgICAgIG5ld0RheSAtPSBzdGVwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWQgPSB2aWV3LmdldENlbGxJZChjZWxsRGF0ZS5nZXRGdWxsWWVhcigpLCBjZWxsRGF0ZS5nZXRNb250aCgpICsgMSwgbmV3RGF5KTtcblxuICAgICAgICBtZS5zZWxlY3QoaWQpO1xuICAgICAgICB2aWV3LmZvY3VzKGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBjb21wb25lbnRcbiAgICAgKi9cbiAgICByZWdpc3Rlcihjb21wb25lbnQpIHtcbiAgICAgICAgc3VwZXIucmVnaXN0ZXIoY29tcG9uZW50KTtcblxuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBpZCAgID0gbWUuaWQsXG4gICAgICAgICAgICB2aWV3ID0gbWUudmlldztcblxuICAgICAgICBpZiAodmlldy5rZXlzKSB7XG4gICAgICAgICAgICB2aWV3LmtleXMuX2tleXMucHVzaChcbiAgICAgICAgICAgICAgICB7Zm46ICdvbktleURvd25Eb3duJyAgLGtleTogJ0Rvd24nICAsc2NvcGU6IGlkfSxcbiAgICAgICAgICAgICAgICB7Zm46ICdvbktleURvd25MZWZ0JyAgLGtleTogJ0xlZnQnICAsc2NvcGU6IGlkfSxcbiAgICAgICAgICAgICAgICB7Zm46ICdvbktleURvd25SaWdodCcgLGtleTogJ1JpZ2h0JyAsc2NvcGU6IGlkfSxcbiAgICAgICAgICAgICAgICB7Zm46ICdvbktleURvd25VcCcgICAgLGtleTogJ1VwJyAgICAsc2NvcGU6IGlkfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgdW5yZWdpc3RlcigpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgaWQgICA9IG1lLmlkLFxuICAgICAgICAgICAgdmlldyA9IG1lLnZpZXc7XG5cbiAgICAgICAgaWYgKHZpZXcua2V5cykge1xuICAgICAgICAgICAgdmlldy5rZXlzLnJlbW92ZUtleXMoW1xuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93bkRvd24nICAsa2V5OiAnRG93bicgICxzY29wZTogaWR9LFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93bkxlZnQnICAsa2V5OiAnTGVmdCcgICxzY29wZTogaWR9LFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93blJpZ2h0JyAsa2V5OiAnUmlnaHQnICxzY29wZTogaWR9LFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93blVwJyAgICAsa2V5OiAnVXAnICAgICxzY29wZTogaWR9XG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLnVucmVnaXN0ZXIoKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKERhdGVTZWxlY3Rvck1vZGVsKTtcblxuZXhwb3J0IHtEYXRlU2VsZWN0b3JNb2RlbCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnV0aWwuRGF0ZVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBEYXRlVXRpbCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udXRpbC5EYXRlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5EYXRlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlcyBmb3IgZGF5TmFtZUZvcm1hdFxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gZGF5TmFtZUZvcm1hdHM9WyduYXJyb3cnLCAnc2hvcnQnLCAnbG9uZyddXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgZGF5TmFtZUZvcm1hdHM6IFsnbmFycm93JywgJ3Nob3J0JywgJ2xvbmcnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlcyBmb3IgbW9udGhOYW1lRm9ybWF0XG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBtb250aE5hbWVGb3JtYXRzPVsnbmFycm93JywgJ3Nob3J0JywgJ2xvbmcnXVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIG1vbnRoTmFtZUZvcm1hdHM6IFsnbmFycm93JywgJ3Nob3J0JywgJ2xvbmcnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlcyBmb3IgZGF5TmFtZUZvcm1hdFxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJbXX0gd2Vla1N0YXJ0RGF5cz1bMCwgMSwgMiwgMywgNCwgNSwgNl1cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICB3ZWVrU3RhcnREYXlzOiBbMCwgMSwgMiwgMywgNCwgNSwgNl1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQ2xvbmVzIGEgRGF0ZSBpbnN0YW5jZSB1c2luZyB0aGUgc2FtZSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZVxuICAgICAqIEByZXR1cm5zIHtEYXRlfSB0aGUgY2xvbmVkIGRhdGUgb2JqZWN0XG4gICAgICovXG4gICAgc3RhdGljIGNsb25lKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUudmFsdWVPZigpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB5eXl5LW1tLWRkIGZvcm1hdHRlZCB2YWx1ZSBvZiBhIGdpdmVuIERhdGUgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0RhdGV9IGRhdGVcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgeXl5eS1tbS1kZCBmb3JtYXR0ZWQgZGF0ZVxuICAgICAqL1xuICAgIHN0YXRpYyBjb252ZXJ0VG95eXl5bW1kZChkYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSAtIChkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBhbW91bnQgb2YgZGF5cyBpbnNpZGUgdGhlIG1vbnRoIG9mIGEgcGFzc2VkIGRhdGUgb2JqZWN0XG4gICAgICogQHBhcmFtIHtEYXRlfSBkYXRlXG4gICAgICogQHJldHVybnMge051bWJlcn0gZGF5cyBpbnNpZGUgdGhlIG1vbnRoXG4gICAgICovXG4gICAgc3RhdGljIGdldERheXNJbk1vbnRoKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpICsgMSwgMCkuZ2V0RGF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtEYXRlfSBkYXRlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHdlZWtTdGFydERheSAwLTZcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRGaXJzdERheU9mZnNldChkYXRlLCB3ZWVrU3RhcnREYXkpIHtcbiAgICAgICAgbGV0IGZpcnN0RGF5SW5Nb250aCA9IERhdGVVdGlsLmdldEZpcnN0RGF5T2ZNb250aChkYXRlKSxcbiAgICAgICAgICAgIGZpcnN0RGF5T2Zmc2V0ICA9IGZpcnN0RGF5SW5Nb250aCAtIHdlZWtTdGFydERheTtcblxuICAgICAgICByZXR1cm4gZmlyc3REYXlPZmZzZXQgPCAwID8gZmlyc3REYXlPZmZzZXQgKyA3IDogZmlyc3REYXlPZmZzZXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZGF5IG51bWJlciBvZiB0aGUgZmlyc3QgZGF5IG9mIGEgcGFzc2VkIGRhdGUgb2JqZWN0XG4gICAgICogQHBhcmFtIHtEYXRlfSBkYXRlXG4gICAgICogQHJldHVybnMge051bWJlcn0gMC02IChTdW4tU2F0KVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRGaXJzdERheU9mTW9udGgoZGF0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIDEpLmdldERheSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHdlZWsgbnVtYmVyIG9mIHRoZSBwYXNzZWQgZGF0ZVxuICAgICAqIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gICAgICogQHBhcmFtIHtEYXRlfSB0YXJnZXREYXRlXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0V2Vla09mWWVhcih0YXJnZXREYXRlKSB7XG4gICAgICAgIGxldCBkYXRlICAgICAgPSBuZXcgRGF0ZSh0YXJnZXREYXRlLnZhbHVlT2YoKSksXG4gICAgICAgICAgICBkYXlOdW1iZXIgPSAodGFyZ2V0RGF0ZS5nZXRVVENEYXkoKSArIDYpICUgNyxcbiAgICAgICAgICAgIGZpcnN0VGh1cnNkYXk7XG5cbiAgICAgICAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGF5TnVtYmVyICsgMyk7XG4gICAgICAgIGZpcnN0VGh1cnNkYXkgPSBkYXRlLnZhbHVlT2YoKTtcbiAgICAgICAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcblxuICAgICAgICBpZiAoZGF0ZS5nZXRVVENEYXkoKSAhPT0gNCkge1xuICAgICAgICAgICAgZGF0ZS5zZXRVVENNb250aCgwLCAxICsgKCg0IC0gZGF0ZS5nZXRVVENEYXkoKSkgKyA3KSAlIDcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbCgoZmlyc3RUaHVyc2RheSAtIGRhdGUpIC8gICg3ICogMjQgKiAzNjAwICogMTAwMCkpICsgMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB3ZWVrU3RhcnREYXkgMC02XG4gICAgICogQHJldHVybnMge051bWJlcn0gNS02XG4gICAgICovXG4gICAgc3RhdGljIGdldFdlZWtzT2ZNb250aChkYXRlLCB3ZWVrU3RhcnREYXkpIHtcbiAgICAgICAgbGV0IGRheXNJbk1vbnRoICAgID0gRGF0ZVV0aWwuZ2V0RGF5c0luTW9udGgoZGF0ZSksXG4gICAgICAgICAgICBmaXJzdERheU9mZnNldCA9IERhdGVVdGlsLmdldEZpcnN0RGF5T2Zmc2V0KGRhdGUsIHdlZWtTdGFydERheSk7XG5cbiAgICAgICAgcmV0dXJuIChkYXlzSW5Nb250aCArIGZpcnN0RGF5T2Zmc2V0KSAvIDcgPiA1ID8gNiA6IDU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGluIGNhc2UgdGhlIGRheSwgbW9udGggJiB5ZWFyIG9mIDIgZ2l2ZW4gRGF0ZSBvYmplY3RzIGFyZSB0aGUgc2FtZVxuICAgICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZTFcbiAgICAgKiBAcGFyYW0ge0RhdGV9IGRhdGUyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIG1hdGNoRGF0ZShkYXRlMSwgZGF0ZTIpIHtcbiAgICAgICAgcmV0dXJuIGRhdGUxLmdldEZ1bGxZZWFyKCkgPT09IGRhdGUyLmdldEZ1bGxZZWFyKCkgJiZcbiAgICAgICAgICAgICAgIGRhdGUxLmdldE1vbnRoKCkgICAgPT09IGRhdGUyLmdldE1vbnRoKCkgICAgJiZcbiAgICAgICAgICAgICAgIGRhdGUxLmdldERhdGUoKSAgICAgPT09IGRhdGUyLmdldERhdGUoKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKERhdGVVdGlsKTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0ZVV0aWw7Il0sInNvdXJjZVJvb3QiOiIifQ==