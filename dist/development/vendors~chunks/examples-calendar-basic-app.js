self["webpackChunk"](["vendors~chunks/examples-calendar-basic-app"],{

/***/ "./node_modules/neo.mjs/examples/calendar/basic/MainContainer.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/calendar/basic/MainContainer.mjs ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/button/Base.mjs */ "./node_modules/neo.mjs/src/button/Base.mjs");
/* harmony import */ var _src_calendar_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/calendar/MainContainer.mjs */ "./node_modules/neo.mjs/src/calendar/MainContainer.mjs");
/* harmony import */ var _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainContainerController.mjs */ "./node_modules/neo.mjs/examples/calendar/basic/MainContainerController.mjs");
/* harmony import */ var _src_container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/container/Toolbar.mjs */ "./node_modules/neo.mjs/src/container/Toolbar.mjs");
/* harmony import */ var _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");






/**
 * @class CalendarBasic.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_4__["default"] {
    static getConfig() {return {
        className: 'CalendarBasic.MainContainer',
        ntype    : 'calendar-basic-maincontainer',

        autoMount : true,
        controller: _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
        layout    : {ntype: 'vbox', align: 'stretch'},

        items: [{
            module : _src_container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            flex   : 'none',
            padding: 20,
            reference: 'headerToolbar',

            style: {
                backgroundColor: '#f2f2f2',
                padding        : '10px 5px 10px 10px'
            },

            items: [{
                ntype: 'component',
                cls  : ['neo-header'],
                html : '<i class="fa fa-calendar"></i>neo.mjs Calendar (Sneak Preview)'
            }, '->', {
                module : _src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
                handler: 'onSwitchThemeButtonClick',
                height : 27,
                iconCls: 'fa fa-moon',
                text   : 'Theme Dark'
            }, {
                module : _src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
                height : 27,
                iconCls: 'fab fa-github',
                style  : {marginLeft: '5px'},
                text   : 'GitHub',
                url    : 'https://github.com/neomjs/neo/tree/dev/src/calendar'
            }]
        }, {
            module     : _src_calendar_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            currentDate: new Date('2020-07-20'),
            flex       : 1,
            reference  : 'calendar',

            calendarStoreConfig: {
                autoLoad: true,
                url     : '../../examples/calendar/basic/data/calendars.json'
            },

            eventStoreConfig: {
                autoLoad: true,
                url     : '../../examples/calendar/basic/data/events.json'
            }
        }]
    }}
}

Neo.applyClassConfig(MainContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/calendar/basic/MainContainerController.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/calendar/basic/MainContainerController.mjs ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainerController; });
/* harmony import */ var _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");
/* harmony import */ var _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class CalendarBasic.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='CalendarBasic.MainContainerController'
         * @protected
         */
        className: 'CalendarBasic.MainContainerController'
    }}

    /**
     *
     * @param {Object} data
     */
    onSwitchThemeButtonClick(data) {
        let me            = this,
            button        = data.component,
            headerToolbar = me.getReference('headerToolbar'),
            view          = me.view,
            buttonText, cls, headerColor, iconCls, theme;

        if (button.text === 'Theme Light') {
            buttonText  = 'Theme Dark';
            headerColor = '#f2f2f2';
            iconCls     = 'fa fa-moon';
            theme       = 'neo-theme-light';
        } else {
            buttonText  = 'Theme Light';
            headerColor = '#33343d';
            iconCls     = 'fa fa-sun';
            theme       = 'neo-theme-dark';
        }

        cls = [...view.cls];

        view.cls.forEach(item => {
            if (item.includes('neo-theme')) {
                _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, item);
            }
        });

        _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, theme);
        view.cls = cls;

        button.set({
            iconCls: iconCls,
            text   : buttonText
        });

        let style = headerToolbar.style || {};
        style.backgroundColor = headerColor;
        headerToolbar.style = style;
    }
}

Neo.applyClassConfig(MainContainerController);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/calendar/basic/app.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/calendar/basic/app.mjs ***!
  \**************************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainContainer.mjs */ "./node_modules/neo.mjs/examples/calendar/basic/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'examples/calendar/basic/',
    mainView: _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'CalendarBasic'
});



/***/ }),

/***/ "./node_modules/neo.mjs/src/calendar/MainContainer.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/neo.mjs/src/calendar/MainContainer.mjs ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _view_CalendarsContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/CalendarsContainer.mjs */ "./node_modules/neo.mjs/src/calendar/view/CalendarsContainer.mjs");
/* harmony import */ var _store_Calendars_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/Calendars.mjs */ "./node_modules/neo.mjs/src/calendar/store/Calendars.mjs");
/* harmony import */ var _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/ClassSystem.mjs */ "./node_modules/neo.mjs/src/util/ClassSystem.mjs");
/* harmony import */ var _container_Base_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _component_DateSelector_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/DateSelector.mjs */ "./node_modules/neo.mjs/src/component/DateSelector.mjs");
/* harmony import */ var _util_Date_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/Date.mjs */ "./node_modules/neo.mjs/src/util/Date.mjs");
/* harmony import */ var _view_DayComponent_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/DayComponent.mjs */ "./node_modules/neo.mjs/src/calendar/view/DayComponent.mjs");
/* harmony import */ var _store_Events_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/Events.mjs */ "./node_modules/neo.mjs/src/calendar/store/Events.mjs");
/* harmony import */ var _view_MonthComponent_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/MonthComponent.mjs */ "./node_modules/neo.mjs/src/calendar/view/MonthComponent.mjs");
/* harmony import */ var _view_SettingsContainer_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/SettingsContainer.mjs */ "./node_modules/neo.mjs/src/calendar/view/SettingsContainer.mjs");
/* harmony import */ var _container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../container/Toolbar.mjs */ "./node_modules/neo.mjs/src/container/Toolbar.mjs");
/* harmony import */ var _view_WeekComponent_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view/WeekComponent.mjs */ "./node_modules/neo.mjs/src/calendar/view/WeekComponent.mjs");
/* harmony import */ var _view_YearComponent_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view/YearComponent.mjs */ "./node_modules/neo.mjs/src/calendar/view/YearComponent.mjs");














const todayDate = new Date();

/**
 * @class Neo.calendar.MainContainer
 * @extends Neo.container.Base
 */
class MainContainer extends _container_Base_mjs__WEBPACK_IMPORTED_MODULE_3__["default"] {
    static getStaticConfig() {return {
        /**
         * Valid entries for the views config
         * @member {String[]} validViews=['day', 'week', 'month', 'year']
         * @static
         */
        validViews: ['day', 'week', 'month', 'year']
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.calendar.MainContainer'
         * @protected
         */
        className: 'Neo.calendar.MainContainer',
        /**
         * @member {String} ntype='calendar-maincontainer'
         * @protected
         */
        ntype: 'calendar-maincontainer',
        /**
         * The currently active view. Must be a value included inside the views config.
         * @member {String} activeView_='week'
         */
        activeView_: 'week',
        /**
         * Scale the calendar with using s different base font-size
         * @member {Number|null} baseFontSize_=null
         */
        baseFontSize_: null,
        /**
         * @member {Neo.calendar.view.CalendarsContainer|null} calendarsContainer=null
         */
        calendarsContainer: null,
        /**
         * @member {Neo.calendar.store.Calendars|null} calendarStore_=null
         */
        calendarStore_: null,
        /**
         * @member {Object|null} calendarStoreConfig=null
         */
        calendarStoreConfig: null,
        /**
         * @member {String[]} cls=['neo-container']
         */
        cls: ['neo-calendar-maincontainer', 'neo-container'],
        /**
         * The currently active date inside all views
         * @member {Date} currentDate_=new Date()
         */
        currentDate_: todayDate,
        /**
         * @member {Neo.component.DateSelector|null} dateSelector=null
         */
        dateSelector: null,
        /**
         * @member {Object|null} dateSelectorConfig=null
         */
        dateSelectorConfig: null,
        /**
         * @member {Neo.calendar.view.DayComponent|null} dayComponent=null
         */
        dayComponent: null,
        /**
         * @member {Object|null} dayComponentConfig=null
         */
        dayComponentConfig: null,
        /**
         * @member {Neo.calendar.store.Events|null} eventStore_=null
         */
        eventStore_: null,
        /**
         * @member {Object|null} eventStoreConfig=null
         */
        eventStoreConfig: null,
        /**
         * @member {Object} layout={ntype:'vbox',align:'stretch'}
         * @protected
         */
        layout: {ntype: 'vbox', align: 'stretch'},
        /**
         * @member {String} locale_=Neo.config.locale
         */
        locale_: Neo.config.locale,
        /**
         * @member {Neo.calendar.view.MonthComponent|null} monthComponent=null
         */
        monthComponent: null,
        /**
         * @member {Object|null} monthComponentConfig=null
         */
        monthComponentConfig: null,
        /**
         * True to only keep the active view inside the DOM
         * @member {Boolean} removeInactiveCards=true
         */
        removeInactiveCards: true,
        /**
         * True to scroll new years in from the top
         * @member {Boolean} scrollNewYearFromTop_=false
         */
        scrollNewYearFromTop_: false,
        /**
         * @member {Object|null} settingsContainerConfig=null
         */
        settingsContainerConfig: null,
        /**
         * @member {Number} settingsContainerWidth=300
         */
        settingsContainerWidth: 310,
        /**
         * @member {Boolean} settingsExpanded_=false
         */
        settingsExpanded_: false,
        /**
         * @member {Boolean} showWeekends_=true
         */
        showWeekends_: true,
        /**
         * @member {Boolean} sideBarExpanded_=true
         */
        sideBarExpanded_: true,
        /**
         * @member {Number} sideBarWidth=220
         */
        sideBarWidth: 220,
        /**
         * @member {Boolean} useSettingsContainer_=true
         */
        useSettingsContainer_: true,
        /**
         * Any combination and order of 'day', 'week', 'month', 'year'
         * @member {String[]} views_=['day', 'week', 'month', 'year']
         */
        views_: ['day', 'week', 'month', 'year'],
        /**
         * @member {Neo.calendar.view.WeekComponent|null} weekComponent=null
         */
        weekComponent: null,
        /**
         * @member {Object|null} weekComponentConfig=null
         */
        weekComponentConfig: null,
        /**
         * 0-6 => Sun-Sat
         * @member {Number} weekStartDay_=0
         */
        weekStartDay_: 0,
        /**
         * @member {Neo.calendar.view.YearComponent|null} yearComponent=null
         */
        yearComponent: null,
        /**
         * @member {Object|null} yearComponentConfig=null
         */
        yearComponentConfig: null
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        me.createItemsContent();

        if (!me.sideBarExpanded) {
            me.afterSetSideBarExpanded(false, true);
        }
    }

    /**
     * Triggered after the baseFontSize config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetBaseFontSize(value, oldValue) {
        if (oldValue !== undefined) {
            let style = this.style || {};

            if (!value) {
                delete style.fontSize;
            } else {
                style.fontSize = `${value}px`;
            }

            this.style = style;
        }
    }

    /**
     * Triggered after the currentDate config got changed
     * todo: Only update the active view, adjust the state on card change
     * @param {Date} value
     * @param {Date} oldValue
     * @protected
     */
    afterSetCurrentDate(value, oldValue) {
        if (oldValue !== undefined) {
            let me = this;

            me.weekComponent.currentDate = value;
            me.yearComponent.currentDate = value;
            me.dateSelector .value       = _util_Date_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].convertToyyyymmdd(value);
        }
    }

    /**
     * Triggered after the locale config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetLocale(value, oldValue) {
        if (oldValue !== undefined) {
            this.setViewConfig('locale', value);
        }
    }

    /**
     * Triggered after the eventStore config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetEventStore(value, oldValue) {
        if (oldValue !== undefined) {
            this.weekComponent.eventStore = value;
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
            this.setViewConfig('showWeekends', value);
        }
    }

    /**
     * Triggered after the settingsExpanded config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetSettingsExpanded(value, oldValue) {
        if (Neo.isBoolean(oldValue)) {
            let me                = this,
                settingsContainer = me.items[1].items[2];

            if (value) {
                settingsContainer.expand();
            } else {
                settingsContainer.collapse(me.settingsContainerWidth);
            }
        }
    }

    /**
     * Triggered after the scrollNewYearFromTop config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetScrollNewYearFromTop(value, oldValue) {
        if (oldValue !== undefined) {
            this.dateSelector .scrollNewYearFromTop = value;
            this.yearComponent.scrollNewYearFromTop = value;
        }
    }

    /**
     * Triggered after the sideBarExpanded config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetSideBarExpanded(value, oldValue) {
        if (oldValue !== undefined) {
            let me      = this,
                sideBar = me.items[1].items[0],
                style   = sideBar.style || {},
                vdom;

            if (value) {
                delete sideBar.vdom.removeDom;

                me.promiseVdomUpdate().then(() => {
                    sideBar.mounted = true;

                    setTimeout(() => {
                        style.marginLeft = '0px';
                        sideBar.style = style;
                    }, 50);
                });
            } else {
                style.marginLeft    = `-${me.sideBarWidth}px`;
                sideBar._style      = style; // silent update
                sideBar._vdom.style = style; // silent update

                me.promiseVdomUpdate().then(() => {
                    setTimeout(() => {
                        vdom = sideBar.vdom;
                        vdom.removeDom = true;
                        sideBar.vdom = vdom;
                    }, 400);
                });
            }
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
            this.setViewConfig('weekStartDay', value);
        }
    }

    /**
     * Triggered before the calendarStore config gets changed.
     * @param {Neo.calendar.store.Calendars} value
     * @param {Neo.calendar.store.Calendars} oldValue
     * @protected
     */
    beforeSetCalendarStore(value, oldValue) {
        let me = this;

        if (oldValue) {
            oldValue.destroy();
        }

        return _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].beforeSetInstance(value, _store_Calendars_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], {
            listeners: {load: me.onCalendarStoreLoad, scope: me},
            ...me.calendarStoreConfig || {}
        });
    }

    /**
     * Triggered before the eventStore config gets changed.
     * @param {Neo.calendar.store.Events} value
     * @param {Neo.calendar.store.Events} oldValue
     * @protected
     */
    beforeSetEventStore(value, oldValue) {
        let me = this;

        if (oldValue) {
            oldValue.destroy();
        }

        return _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].beforeSetInstance(value, _store_Events_mjs__WEBPACK_IMPORTED_MODULE_7__["default"], {
            listeners: {load: me.onEventStoreLoad, scope: me},
            ...me.eventStoreConfig || {}
        });
    }

    /**
     * Triggered before the views config gets changed.
     * @param {String[]} value
     * @param {String[]} oldValue
     * @protected
     */
    beforeSetViews(value, oldValue) {
        let validViews = this.getStaticConfig('validViews');

        value.forEach(view => {
            if (!validViews.includes(view)) {
                console.error(view, 'is not a valid entry for views. Stick to:', validViews);
                return oldValue;
            }
        });

        return value;
    }

    /**
     *
     * @param {String} interval
     * @protected
     */
    changeTimeInterval(interval) {
        let me = this;

        me.items[1].items[1].layout.activeIndex = me.views.indexOf(interval);

        me.items[0].items[1].items.forEach(item => {
            if (item.toggleGroup === 'timeInterval') {
                item.pressed = item.value === interval;
            }
        });

        me.activeView = interval;
    }

    /**
     *
     * @returns {Neo.component.Base[]}
     */
    createHeaderItems() {
        let me    = this,
            items = [{
            module: _container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_10__["default"],
            cls   : ['neo-calendar-header-toolbar', 'neo-left', 'neo-toolbar'],
            width : me.sideBarWidth,
            items : [{
                handler: me.toggleSidebar.bind(me),
                iconCls: 'fa fa-bars'
            }, '->', {
                handler: me.onPreviousIntervalButtonClick.bind(me),
                iconCls: 'fa fa-chevron-left',
            }, {
                handler: me.onTodayButtonClick.bind(me),
                height : 24,
                text   : 'Today'
            }, {
                handler: me.onNextIntervalButtonClick.bind(me),
                iconCls: 'fa fa-chevron-right'
            }]
        }, {
            module: _container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_10__["default"],
            cls   : ['neo-calendar-header-toolbar', 'neo-toolbar'],
            items : ['->', ...me.createViewHeaderButtons()]
        }];

        if (me.useSettingsContainer) {
            items[1].items.push({
                handler: me.toggleSettings.bind(me),
                iconCls: 'fa fa-cog',
                style  : {marginLeft: '10px'}
            });
        }

        return items;
    }

    /**
     *
     * @protected
     */
    createItemsContent() {
        let me = this;

        me.calendarsContainer = Neo.create({
            module       : _view_CalendarsContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            calendarStore: me.calendarStore,
            flex         : 1
        });

        me.dateSelector = Neo.create({
            module              : _component_DateSelector_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            flex                : 'none',
            height              : me.sideBarWidth,
            listeners           : {change: me.onDateSelectorChange, scope: me},
            locale              : me.locale,
            scrollNewYearFromTop: me.scrollNewYearFromTop,
            showWeekends        : me.showWeekends,
            value               : _util_Date_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].convertToyyyymmdd(me.currentDate),
            weekStartDay        : me.weekStartDay,
            ...me.dateSelectorConfig || {}
        });

        me.items = [{
            module: _container_Base_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            flex  : 'none',
            layout: {ntype: 'hbox', align: 'stretch'},
            items : me.createHeaderItems()
        }, {
            module: _container_Base_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            flex  : 1,
            layout: {ntype: 'hbox', align: 'stretch'},
            items : [{
                module: _container_Base_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
                cls   : ['neo-calendar-sidebar', 'neo-container'],
                layout: {ntype: 'vbox', align: 'stretch'},
                width : me.sideBarWidth,
                items : [me.dateSelector, me.calendarsContainer]
            }, {
                module: _container_Base_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
                flex  : 1,
                items : me.createViews(),
                layout: {
                    ntype              : 'card',
                    activeIndex        : me.views.indexOf(me.activeView),
                    removeInactiveCards: me.removeInactiveCards
                }
            }]
        }];

        if (me.useSettingsContainer) {
            me.items[1].items.push({
                module: _view_SettingsContainer_mjs__WEBPACK_IMPORTED_MODULE_9__["default"],
                removeInactiveCards: me.removeInactiveCards,
                style              : {marginRight: me.settingsExpanded ? '0' : `-${me.settingsContainerWidth}px`},
                width              : me.settingsContainerWidth,
                ...me.settingsContainerConfig
            });
        }
    }

    /**
     *
     * @returns {Neo.component.Base[]}
     */
    createViewHeaderButtons() {
        let me          = this,
            activeIndex = me.views.indexOf(me.activeView),
            buttons     = [];

        me.views.forEach((view, index) => {
            buttons.push({
                handler    : me.changeTimeInterval.bind(me, view),
                height     : 24,
                pressed    : activeIndex === index,
                text       : Neo.capitalize(view),
                toggleGroup: 'timeInterval',
                value      : view
            });
        });

        return buttons;
    }

    /**
     *
     * @returns {Neo.component.Base[]}
     */
    createViews() {
        let me    = this,
            cards = [],
            cmp;

        const defaultConfig = {
            currentDate : me.currentDate,
            eventStore  : me.eventStore,
            locale      : me.locale,
            showWeekends: me.showWeekends,
            weekStartDay: me.weekStartDay
        };

        const map = {
            day: {
                module: _view_DayComponent_mjs__WEBPACK_IMPORTED_MODULE_6__["default"],
                style : {padding: '20px'},
                ...defaultConfig,
                ...me.dayComponentConfig || {}
            },
            month: {
                module: _view_MonthComponent_mjs__WEBPACK_IMPORTED_MODULE_8__["default"],
                ...defaultConfig,
                ...me.monthComponentConfig || {}
            },
            week: {
                module: _view_WeekComponent_mjs__WEBPACK_IMPORTED_MODULE_11__["default"],
                ...defaultConfig,
                ...me.weekComponentConfig || {}
            },
            year: {
                module              : _view_YearComponent_mjs__WEBPACK_IMPORTED_MODULE_12__["default"],
                scrollNewYearFromTop: me.scrollNewYearFromTop,
                ...defaultConfig,
                ...me.yearComponentConfig || {}
            }
        }

        me.views.forEach(view => {
            me[view + 'Component'] = cmp = Neo.create(map[view]);
            cards.push(cmp);
        });

        return cards;
    }

    /**
     *
     */
    destroy(...args) {
        let me = this;

        // remove references, the super call will remove component tree based instances
        me.calendarsContainer = null;
        me.dateSelector       = null;
        me.dayComponent       = null;
        me.monthComponent     = null;
        me.weekComponent      = null;
        me.yearComponent      = null;

        super.destroy(...args);
    }

    /**
     *
     * @param {Object[]} data
     */
    onCalendarStoreLoad(data) {
        this.calendarsContainer.onStoreLoad(data);
    }

    /**
     *
     * @param {Object} opts
     * @param {String} opts.oldValue
     * @param {String} opts.value
     */
    onDateSelectorChange(opts) {
        if (opts.oldValue !== undefined) {
            this.currentDate = new Date(opts.value);
        }
    }

    /**
     *
     * @param {Object[]} data
     */
    onEventStoreLoad(data) {
        // todo: update the active view (card)
        this.weekComponent.updateEvents();
    }

    /**
     *
     * @param data
     */
    onNextIntervalButtonClick(data) {
        this.switchInterval(1);
    }

    /**
     *
     * @param data
     */
    onPreviousIntervalButtonClick(data) {
        this.switchInterval(-1);
    }

    /**
     *
     * @param data
     */
    onTodayButtonClick(data) {
        this.currentDate = todayDate;
    }

    /**
     * Sets a config for the DateSelector and all views (cards)
     * @param {String} key
     * @param {*} value
     */
    setViewConfig(key, value) {
        let me = this;

        me.dateSelector[key] = value;

        me.views.forEach(view => {
            me[`${view}Component`][key] = value;
        });
    }

    /**
     *
     * @protected
     */
    toggleSettings() {
        this.settingsExpanded = !this.settingsExpanded;
    }

    /**
     *
     * @protected
     */
    toggleSidebar() {
        this.sideBarExpanded = !this.sideBarExpanded;
    }

    /**
     *
     * @param {Number} multiplier
     */
    switchInterval(multiplier) {
        let me          = this,
            currentDate = me.currentDate; // cloned

        const map = {
            day  : () => {currentDate.setDate(    currentDate.getDate()     + multiplier)},
            month: () => {currentDate.setMonth(   currentDate.getMonth()    + multiplier)},
            week : () => {currentDate.setDate(    currentDate.getDate() + 7 * multiplier)},
            year : () => {currentDate.setFullYear(currentDate.getFullYear() + multiplier)}
        };

        map[me.activeView]();
        me.currentDate = currentDate;
    }
}

Neo.applyClassConfig(MainContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/src/calendar/draggable/WeekEventDragZone.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/neo.mjs/src/calendar/draggable/WeekEventDragZone.mjs ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WeekEventDragZone; });
/* harmony import */ var _draggable_DragZone_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../draggable/DragZone.mjs */ "./node_modules/neo.mjs/src/draggable/DragZone.mjs");
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");



/**
 * @class Neo.calendar.draggable.WeekEventDragZone
 * @extends Neo.draggable.DragZone
 */
class WeekEventDragZone extends _draggable_DragZone_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.calendar.draggable.WeekEventDragZone'
         * @protected
         */
        className: 'Neo.calendar.draggable.WeekEventDragZone',
        /**
         * @member {String} ntype='calendar-week-event-dragzone'
         * @protected
         */
        ntype: 'calendar-week-event-dragzone',
        /**
         * @member {Number} columnHeight=0
         */
        columnHeight: 0,
        /**
         * @member {Number} columnTop=0
         */
        columnTop: 0,
        /**
         * @member {Number} currentInterval=0
         */
        currentInterval: 0,
        /**
         * @member {Number} startTime=0
         */
        endTime: 0,
        /**
         * time in minutes
         * @member {Number} eventDuration=0
         */
        eventDuration: 0,
        /**
         * @member {Object} eventRecord=null
         */
        eventRecord: null,
        /**
         * @member {Boolean} moveHorizontal=false
         */
        moveHorizontal: false,
        /**
         * @member {Boolean} moveInMainThread=false
         */
        moveInMainThread: false,
        /**
         * @member {Neo.calendar.view.WeekComponent} owner=null
         */
        owner: null,
        /**
         * @member {Number} scrollFactorLeft=3
         */
        scrollFactorLeft: 3,
        /**
         * @member {Number} startTime=0
         */
        startTime: 0,
        /**
         * @member {Boolean} useProxyWrapper=false
         */
        useProxyWrapper: false
    }}

    /**
     * Triggered after the proxyParentId config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetProxyParentId(value, oldValue) {
        if (value && oldValue !== undefined) {
            let me = this;

            // check if the node did not get removed yet
            if (me.dragProxy && me.dragProxy.vdom.cn[0].id) {
                Neo.currentWorker.promiseMessage('main', {
                    action: 'updateDom',
                    deltas: [{
                        action  : 'moveNode',
                        id      : me.dragProxy.id,
                        index   : 0,
                        parentId: value
                    }]
                });
            }
        }
    }

    /**
     * DragEnd equals drop, since we can only drag to valid positions
     * todo: ESC key
     */
    dragEnd() {
        super.dragEnd();

        let me        = this,
            startDate = new Date(_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].findVdomChild(me.owner.vdom, me.proxyParentId).vdom.flag),
            endDate;

        startDate.setHours(me.startTime);
        startDate.setMinutes(me.currentInterval * 15);

        endDate = new Date(startDate.valueOf());
        endDate.setMinutes(endDate.getMinutes() + me.eventDuration);

        // if an event ends at 24:00, change it to 23:59 => otherwise the day increases by 1
        if (endDate.getHours() === 0 && endDate.getMinutes() === 0) {
            endDate.setMinutes(endDate.getMinutes() - 1);
        }

        me.eventRecord.endDate   = endDate;
        me.eventRecord.startDate = startDate;

        me.owner.updateEvents();
    }

    /**
     *
     * @param {Object} data
     */
    dragMove(data) {
        let me          = this,
            path        = data.targetPath,
            i           = 0,
            len         = path.length,
            oldInterval = me.currentInterval,
            intervalHeight, intervals, position, startTime;

        if (me.dragProxy) {
            for (; i < len; i++) {
                if (path[i].cls.includes('neo-c-w-column')) {
                    me.proxyParentId = path[i].id;
                    break;
                }
            }

            intervals      = (me.endTime - me.startTime) * 4; // 15 minutes each
            intervalHeight = me.columnHeight / intervals;

            position = Math.min(me.columnHeight, data.clientY - me.offsetY - me.columnTop);
            position = Math.max(0, position);

            me.currentInterval = Math.floor(position / intervalHeight);

            // events must not end after the last visible interval
            me.currentInterval = Math.min(me.currentInterval, intervals - (me.eventDuration / 15));

            if (oldInterval !== me.currentInterval) {
                startTime = new Date(me.eventRecord.startDate.valueOf());
                startTime.setHours(me.startTime);
                startTime.setMinutes(me.currentInterval * 15);
                startTime = me.owner.intlFormat_time.format(startTime);

                position = me.currentInterval * intervalHeight; // snap to valid intervals
                position = position / me.columnHeight * 100;

                // check if the node did not get removed yet
                if (me.dragProxy.vdom.cn[0].id) {
                    Neo.currentWorker.promiseMessage('main', {
                        action: 'updateDom',
                        deltas: [{
                            id       : me.dragProxy.vdom.cn[0].id,
                            innerHTML: startTime
                        }, {
                            id   : me.dragProxy.id,
                            style: {top: `calc(${position}% + 1px)`}
                        }]
                    });
                }
            }
        }
    }

    /**
     *
     * @param {Object} data
     */
    dragStart(data) {
        let me = this;

        Neo.main.DomAccess.getBoundingClientRect({
            id: [me.dragElement.id, data.path[1].id]
        }).then(rects => {
            Object.assign(me, {
                columnHeight : rects[1].height,
                columnTop    : rects[1].top,
                eventDuration: (me.eventRecord.endDate - me.eventRecord.startDate) / 60 / 1000,
                offsetX      : data.clientX - rects[0].left,
                offsetY      : data.clientY - rects[0].top
            });

            me.createDragProxy(rects[0]);
            me.dragMove(data);
        });
    }
}

Neo.applyClassConfig(WeekEventDragZone);



/***/ }),

/***/ "./node_modules/neo.mjs/src/calendar/model/Calendar.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/neo.mjs/src/calendar/model/Calendar.mjs ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Calendar; });
/* harmony import */ var _data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class Neo.calendar.model.Calendar
 * @extends Neo.data.Model
 */
class Calendar extends _data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.calendar.model.Calendar'
         * @protected
         */
        className: 'Neo.calendar.model.Calendar',
        /**
         * @member {Object[]} fields
         * @protected
         */
        fields: [{
            name: 'active',
            type: 'Boolean'
        }, {
            name: 'color',
            type: 'String'
        }, {
            name: 'id',
            type: 'Integer'
        }, {
            name: 'name',
            type: 'String'
        }]
    }}
}

Neo.applyClassConfig(Calendar);



/***/ }),

/***/ "./node_modules/neo.mjs/src/calendar/model/Event.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/neo.mjs/src/calendar/model/Event.mjs ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Event; });
/* harmony import */ var _data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class Neo.calendar.model.Event
 * @extends Neo.data.Model
 */
class Event extends _data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.calendar.model.Event'
         * @protected
         */
        className: 'Neo.calendar.model.Event',
        /**
         * @member {Object[]} fields
         * @protected
         */
        fields: [{
            name: 'attendees',
            type: 'Array'
        }, {
            name: 'allDay',
            type: 'Boolean'
        }, {
            name: 'id',
            type: 'Integer'
        }, {
            name: 'calendarId',
            type: 'String'
        }, {
            name: 'description',
            type: 'String'
        }, {
            name: 'endDate',
            type: 'Date'
        }, {
            name: 'startDate',
            type: 'Date'
        }, {
            name: 'title',
            type: 'String'
        }]
    }}
}

Neo.applyClassConfig(Event);



/***/ }),

/***/ "./node_modules/neo.mjs/src/calendar/store/Calendars.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/neo.mjs/src/calendar/store/Calendars.mjs ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Calendars; });
/* harmony import */ var _model_Calendar_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Calendar.mjs */ "./node_modules/neo.mjs/src/calendar/model/Calendar.mjs");
/* harmony import */ var _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");



/**
 * @class Neo.calendar.store.Calendars
 * @extends Neo.data.Store
 */
class Calendars extends _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.calendar.store.Calendars'
         * @protected
         */
        className: 'Neo.calendar.store.Calendars',
        /**
         * @member {String} keyProperty='id'
         * @protected
         */
        keyProperty: 'id',
        /**
         * @member {Neo.data.Model} model=Calendar
         * @protected
         */
        model: _model_Calendar_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
        /**
         * @member {Object[]} sorters
         * @protected
         */
        sorters: [{
            property : 'name',
            direction: 'ASC'
        }]
    }}
}

Neo.applyClassConfig(Calendars);



/***/ }),

/***/ "./node_modules/neo.mjs/src/calendar/store/Events.mjs":
/*!************************************************************!*\
  !*** ./node_modules/neo.mjs/src/calendar/store/Events.mjs ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Events; });
/* harmony import */ var _model_Event_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Event.mjs */ "./node_modules/neo.mjs/src/calendar/model/Event.mjs");
/* harmony import */ var _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");



/**
 * @class Neo.calendar.store.Events
 * @extends Neo.data.Store
 */
class Events extends _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.calendar.store.Events'
         * @protected
         */
        className: 'Neo.calendar.store.Events',
        /**
         * @member {String} keyProperty='id'
         * @protected
         */
        keyProperty: 'id',
        /**
         * @member {Neo.data.Model} model=Event
         * @protected
         */
        model: _model_Event_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
        /**
         * @member {Object[]} sorters
         * @protected
         */
        sorters: [{
            property : 'startDate',
            direction: 'ASC'
        }]
    }}
}

Neo.applyClassConfig(Events);



/***/ }),

/***/ "./node_modules/neo.mjs/src/calendar/view/CalendarsContainer.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/neo.mjs/src/calendar/view/CalendarsContainer.mjs ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CalendarsContainer; });
/* harmony import */ var _form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../form/field/CheckBox.mjs */ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs");
/* harmony import */ var _container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");



/**
 * @class Neo.calendar.view.CalendarsContainer
 * @extends Neo.container.Base
 */
class CalendarsContainer extends _container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.calendar.view.CalendarsContainer'
         * @protected
         */
        className: 'Neo.calendar.view.CalendarsContainer',
        /**
         * @member {String} ntype='calendar-calendarscontainer'
         * @protected
         */
        ntype: 'calendar-calendarscontainer',
        /**
         * @member {Neo.calendar.store.Calendars|null} calendarStore_=null
         */
        calendarStore_: null,
        /**
         * @member {String[]} cls=['neo-calendar-calendarscontainer', 'neo-container']
         */
        cls: ['neo-calendar-calendarscontainer', 'neo-container'],
        /**
         * @member {Object} itemDefaults
         * @protected
         */
        itemDefaults: {
            module        : _form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            flex          : 'none',
            hideLabel     : true,
            hideValueLabel: false,
        },
        /**
         * @member {Object} layout={ntype:'vbox',align:'stretch'}
         * @protected
         */
        layout: {ntype: 'vbox', align: 'stretch'}
    }}

    /**
     *
     * @param {Object[]} data
     */
    onStoreLoad(data) {
        let me    = this,
            items = [];

        if (!me.mounted && me.rendering) {
            const listenerId = me.on('rendered', () => {
                me.un('rendered', listenerId);
                me.onStoreLoad(data);
            });
        } else {
            data.forEach(item => {
                items.push({
                    checked       : item.active,
                    valueLabelText: item.name
                });
            });

            me._items = items;

            me.parseItemConfigs(items);
            me.createItems();
        }
    }
}

Neo.applyClassConfig(CalendarsContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/src/calendar/view/DayComponent.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/neo.mjs/src/calendar/view/DayComponent.mjs ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DayComponent; });
/* harmony import */ var _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


const todayDate = new Date();

const today = {
    day  : todayDate.getDate(),
    month: todayDate.getMonth(),
    year : todayDate.getFullYear()
};

/**
 * @class Neo.calendar.view.DayComponent
 * @extends Neo.component.Base
 */
class DayComponent extends _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.calendar.view.DayComponent'
         * @protected
         */
        className: 'Neo.calendar.view.DayComponent',
        /**
         * @member {String} ntype='calendar-view-daycomponent'
         * @protected
         */
        ntype: 'calendar-view-daycomponent',
        /**
         * @member {String[]} cls=['neo-calendar-daycomponent']
         */
        cls: ['neo-calendar-daycomponent'],
        /**
         * Will get passed from the MainContainer
         * @member {Date|null} currentDate_=null
         * @protected
         */
        currentDate_: null,
        /**
         * @member {Neo.calendar.store.Events|null} eventStore_=null
         */
        eventStore_: null,
        /**
         * @member {String} html='Month'
         */
        html: 'Day', // todo: remove
        /**
         * @member {Object} vdom
         */
        vdom: {},
        /**
         * 0-6 => Sun-Sat
         * @member {Number} weekStartDay_=0
         */
        weekStartDay_: 0
    }}
}

Neo.applyClassConfig(DayComponent);



/***/ }),

/***/ "./node_modules/neo.mjs/src/calendar/view/MonthComponent.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/neo.mjs/src/calendar/view/MonthComponent.mjs ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MonthComponent; });
/* harmony import */ var _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/Date.mjs */ "./node_modules/neo.mjs/src/util/Date.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");





const todayDate = new Date();

const today = {
    day  : todayDate.getDate(),
    month: todayDate.getMonth(),
    year : todayDate.getFullYear()
};

/**
 * @class Neo.calendar.view.MonthComponent
 * @extends Neo.component.Base
 */
class MonthComponent extends _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.calendar.view.MonthComponent'
         * @protected
         */
        className: 'Neo.calendar.view.MonthComponent',
        /**
         * @member {String} ntype='calendar-view-monthcomponent'
         * @protected
         */
        ntype: 'calendar-view-monthcomponent',
        /**
         * @member {String[]} cls=['neo-calendar-monthcomponent']
         */
        cls: ['neo-calendar-monthcomponent'],
        /**
         * Will get passed from the MainContainer
         * @member {Date|null} currentDate_=null
         * @protected
         */
        currentDate_: null,
        /**
         * The format of the column headers.
         * Valid values are: narrow, short & long
         * @member {String} dayNameFormat_='short'
         */
        dayNameFormat_: 'short',
        /**
         * @member {Neo.calendar.store.Events|null} eventStore_=null
         */
        eventStore_: null,
        /**
         * Internal flag to store the header height in px after getting mounted.
         * Needed for the infinite scrolling
         * @member {Number|null} headerHeight=null
         * @protected
         */
        headerHeight: null,
        /**
         * @member {Intl.DateTimeFormat|null} intlFormat_day=null
         * @protected
         */
        intlFormat_day: null,
        /**
         * @member {Intl.DateTimeFormat|null} intlFormat_month=null
         * @protected
         */
        intlFormat_month: null,
        /**
         * @member {Boolean} isScrolling=false
         * @protected
         */
        isScrolling: false,
        /**
         * @member {String} locale_=Neo.config.locale
         */
        locale_: Neo.config.locale,
        /**
         * The format of the month header names.
         * Valid values are: narrow, short & long
         * @member {String} monthNameFormat_='long'
         */
        monthNameFormat_: 'short',
        /**
         * @member {String|null} scrollTask=null
         * @protected
         */
        scrollTaskId: null,
        /**
         * @member {Boolean} showWeekends_=true
         */
        showWeekends_: true,
        /**
         * True to use box shadows for the months while scrolling
         * @member {Boolean} useScrollBoxShadows_=true
         */
        useScrollBoxShadows_: true,
        /**
         * @member {Object} vdom
         */
        vdom: {
            cn: [{
                cls: ['neo-days-header'],
                cn : [{
                    cls  : ['neo-static-header'],
                    style: {},
                    cn   : [{
                        tag : 'span',
                        cls : ['neo-month-name'],
                        flag: 'month-name'
                    }, {
                        vtype: 'text'
                    }]
                }]
            }, {
                cls: ['neo-c-m-scrollcontainer']
            }]
        },
        /**
         * 0-6 => Sun-Sat
         * @member {Number} weekStartDay_=0
         */
        weekStartDay_: 0
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me           = this,
            date         = me.currentDate, // cloned
            vdom         = me.vdom,
            header       = vdom.cn[0].cn[0],
            domListeners = me.domListeners;

        domListeners.push({
            wheel: {fn: me.onWheel, scope: me}
        });

        me.domListeners = domListeners;

        header.cn[0].html = me.intlFormat_month.format(date);
        header.cn[1].html = ` ${date.getFullYear()}`;

        me.updateHeader(true);
        me.createContent();
    }

    /**
     * Triggered after the dayNameFormat config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetDayNameFormat(value, oldValue) {
        let me = this;

        me.intlFormat_day = new Intl.DateTimeFormat(me.locale, {weekday: value});

        if (oldValue !== undefined) {
            me.updateHeader();
        }
    }

    /**
     * Triggered after the locale config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetLocale(value, oldValue) {
        if (oldValue !== undefined) {
            let me = this;

            me.intlFormat_day   = new Intl.DateTimeFormat(value, {weekday: me.dayNameFormat});
            me.intlFormat_month = new Intl.DateTimeFormat(value, {month  : me.monthNameFormat});

            me.updateMonthNames(true);
            me.updateHeader();
        }
    }

    /**
     * Triggered after the monthNameFormat config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetMonthNameFormat(value, oldValue) {
        let me = this;

        me.intlFormat_month = new Intl.DateTimeFormat(me.locale, {month: value});

        if (oldValue !== undefined) {
            me.updateMonthNames();
        }
    }

    /**
     * Triggered after the mounted config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetMounted(value, oldValue) {
        if (value) {
            setTimeout(() => {
                let me = this;

                Neo.main.DomAccess.getBoundingClientRect({
                    id: [me.vdom.cn[1].id, me.vdom.cn[0].id]
                }).then(data => {
                    me.headerHeight = data[1].height;

                    Neo.main.DomAccess.scrollBy({
                        direction: 'top',
                        id       : me.vdom.cn[1].id,
                        value    : data[0].height - data[1].height
                    });
                });
            }, 20);
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
            let me   = this,
                vdom = me.vdom,
                i, item;

            vdom.cn[1].cn.forEach(row => {
                if (row.flag) {
                    for (i=0; i < 7; i++) {
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
            me.updateHeader();
        }
    }

    /**
     * Triggered after the useScrollBoxShadows config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetUseScrollBoxShadows(value, oldValue) {
        let me   = this,
            vdom = me.vdom;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__["default"][value ? 'add' : 'remove'](me.vdom.cn[1].cls, 'neo-scroll-shadows');
        me.vdom = vdom;
    }

    /**
     * Triggered after the weekStartDay config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetWeekStartDay(value, oldValue) {
        if (oldValue !== undefined) {
            this.createContent(true);
            this.updateHeader();
        }
    }

    /**
     * Triggered before the dayNameFormat config gets changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    beforeSetDayNameFormat(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'dayNameFormat', _util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.dayNameFormats);
    }

    /**
     * Triggered before the monthNameFormat config gets changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    beforeSetMonthNameFormat(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'monthNameFormat', _util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.monthNameFormats);
    }

    /**
     *
     * @param {Boolean} [silent=false]
     */
    createContent(silent=false) {
        let me   = this,
            date = me.currentDate, // cloned
            vdom = me.vdom,
            i    = 0,
            firstDayOffset, row;

        vdom.cn[1].cn = [];

        firstDayOffset = _util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getFirstDayOffset(date, me.weekStartDay);

        date.setDate(1 - firstDayOffset);

        date.setDate(date.getDate() - 6 * 7);

        for (; i < 18; i++) {
            row = me.createWeek(_util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].clone(date));

            if (row.header) {
                vdom.cn[1].cn.push(row.header);
            }

            vdom.cn[1].cn.push(row.row);

            date.setDate(date.getDate() + 7);
        }

        me[silent ? '_vdom' : 'vdom'] = vdom;
    }

    /**
     *
     * @param {Date} date
     * @returns {Object}
     */
    createWeek(date) {
        let me     = this,
            i      = 0,
            header = null,
            day, dayConfig, row, weekDay;

        row = {
            flag: _util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].convertToyyyymmdd(date),
            cls : ['neo-week'],
            cn  : []
        };

        for (; i < 7; i++) {
            day = date.getDate();

            if (day === 1) {
                row.flag = _util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].convertToyyyymmdd(date); // the first day of a month wins

                header = {
                    cls: ['neo-month-header'],
                    cn : [{
                        cls: ['neo-month-header-content'],
                        cn : [{
                            tag : 'span',
                            cls : ['neo-month-name'],
                            flag: 'month-name',
                            html: me.intlFormat_month.format(date)
                        }, {
                            vtype: 'text',
                            html : ` ${date.getFullYear()}`
                        }]
                    }]
                };
            }

            dayConfig = {
                cls : ['neo-day'],
                html: day
            };

            weekDay = date.getDay();

            if (weekDay === 0 || weekDay === 6) {
                dayConfig.cls.push('neo-weekend');

                if (!me.showWeekends) {
                    dayConfig.removeDom = true;
                }
            }

            row.cn.push(dayConfig);

            date.setDate(date.getDate() + 1);
        }

        return {
            header: header,
            row   : row
        }
    }

    /**
     *
     * @param {Object} data
     */
    onWheel(data) {
        if (Math.abs(data.deltaY) > Math.abs(data.deltaX)) {
            let me        = this,
                vdom      = me.vdom,
                container = vdom.cn[1],
                i         = 0,
                date, len, week;

            // console.log(data.scrollTop, Math.round(data.scrollTop / (data.clientHeight - me.headerHeight) * 6));

            if (data.deltaY > 0 && Math.round(data.scrollTop / (data.clientHeight - me.headerHeight) * 6) > 11) {
                date = new Date(container.cn[container.cn.length - 1].flag);

                date.setDate(date.getDate() - (date.getDay() - me.weekStartDay));

                for (; i < 6; i++) {
                    if (container.cn[1].cls.includes('neo-month-header')) {
                        container.cn.splice(1, 1);
                    }

                    container.cn.shift();

                    date.setDate(date.getDate() + 7);

                    week = me.createWeek(_util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].clone(date));

                    if (week.header) {
                        container.cn.push(week.header);
                    }

                    container.cn.push(week.row);
                }

                me.vdom = vdom;
            }

            else if (data.deltaY < 0 && Math.round(data.scrollTop / (data.clientHeight - me.headerHeight) * 6) < 1) {
                if (container.cn[0].flag) {
                    date = new Date(container.cn[0].flag);
                } else {
                    date = new Date(container.cn[1].flag);
                }

                date.setDate(date.getDate() - (date.getDay() - me.weekStartDay));

                for (; i < 6; i++) {
                    len = container.cn.length;

                    if (container.cn[len - 2].cls.includes('neo-month-header')) {
                        container.cn.splice(len - 2, 1);
                    }

                    container.cn.pop();

                    date.setDate(date.getDate() - 7);

                    week = me.createWeek(_util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].clone(date));

                    container.cn.unshift(week.row);

                    if (week.header) {
                        container.cn.unshift(week.header);
                    }
                }

                me.promiseVdomUpdate(me.vdom).then(() => {
                    Neo.main.DomAccess.scrollTo({
                        direction: 'top',
                        id       : me.vdom.cn[1].id,
                        value    : data.clientHeight - me.headerHeight
                    });
                });
            }

            if (!me.isScrolling) {
                me.isScrolling = true;
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].add(me.vdom.cn[1].cls, 'neo-is-scrolling');
                me.vdom.cn[0].cn[0].style.opacity = 0;
                me.vdom = vdom;
            }

            if (me.scrollTaskId) {
                clearTimeout(me.scrollTaskId);
            }

            me.scrollTaskId = setTimeout(me.onWheelEnd.bind(me), 300);
        }
    }

    /**
     *
     */
    onWheelEnd() {
        let me     = this,
            vdom   = me.vdom,
            header = vdom.cn[0].cn[0],
            i      = 6,
            date, flag;

        me.isScrolling = false;

        for (; i < 12; i++) {
            flag = vdom.cn[1].cn[i].flag; // todo: #989 => get the date of the first fully visible row for the header

            if (flag) {
                date = new Date(flag);
                date.setMonth(date.getMonth() + 1);
                header.cn[0].html = me.intlFormat_month.format(date);
                header.cn[1].html = ` ${date.getFullYear()}`;
                break;
            }
        }

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].remove(vdom.cn[1].cls, 'neo-is-scrolling');
        header.style.opacity = 1;

        me.vdom = vdom;

        // todo: #990 => scroll the view to the closest row
    }

    /**
     *
     * @param {Boolean} [create=false]
     */
    updateHeader(create=false) {
        let me   = this,
            date = me.currentDate, // cloned
            vdom = me.vdom,
            i    = 1,
            day, node;

        date.setDate(me.currentDate.getDate() - me.currentDate.getDay() + me.weekStartDay);

        for (; i < 8; i++) {
            day = date.getDay();

            if (create) {
                node = {
                    cls : ['neo-day-name'],
                    html: me.intlFormat_day.format(date)
                };

                if (!me.showWeekends && (day === 0 || day === 6)) {
                    node.removeDom = true;
                }

                vdom.cn[0].cn.push(node);
            } else {
                node = vdom.cn[0].cn[i];

                node.html = me.intlFormat_day.format(date);

                if (!me.showWeekends && (day === 0 || day === 6)) {
                    node.removeDom = true;
                } else {
                    delete node.removeDom;
                }
            }

            date.setDate(date.getDate() + 1);
        }

        me.vdom = vdom;
    }

    /**
     *
     * @param {Boolean} [silent=false]
     */
    updateMonthNames(silent=false) {
        let me     = this,
            date   = me.currentDate, // cloned
            vdom   = me.vdom,
            months = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getFlags(vdom, 'month-name');

        months.forEach(month => {
            month.html = me.intlFormat_month.format(date);
            date.setMonth(date.getMonth() + 1);
        });

        me[silent ? '_vdom' : 'vdom'] = vdom;
    }
}

Neo.applyClassConfig(MonthComponent);



/***/ }),

/***/ "./node_modules/neo.mjs/src/calendar/view/SettingsContainer.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/neo.mjs/src/calendar/view/SettingsContainer.mjs ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingsContainer; });
/* harmony import */ var _container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _settings_GeneralContainer_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings/GeneralContainer.mjs */ "./node_modules/neo.mjs/src/calendar/view/settings/GeneralContainer.mjs");
/* harmony import */ var _settings_MonthContainer_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/MonthContainer.mjs */ "./node_modules/neo.mjs/src/calendar/view/settings/MonthContainer.mjs");
/* harmony import */ var _tab_Container_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tab/Container.mjs */ "./node_modules/neo.mjs/src/tab/Container.mjs");
/* harmony import */ var _settings_WeekContainer_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/WeekContainer.mjs */ "./node_modules/neo.mjs/src/calendar/view/settings/WeekContainer.mjs");
/* harmony import */ var _settings_YearContainer_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/YearContainer.mjs */ "./node_modules/neo.mjs/src/calendar/view/settings/YearContainer.mjs");







/**
 * @class Neo.calendar.view.SettingsContainer
 * @extends Neo.container.Base
 */
class SettingsContainer extends _container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.calendar.view.SettingsContainer'
         * @protected
         */
        className: 'Neo.calendar.view.SettingsContainer',
        /**
         * @member {String} ntype='calendar-settingscontainer'
         * @protected
         */
        ntype: 'calendar-settingscontainer',
        /**
         * @member {String[]} cls=['neo-calendar-settingscontainer', 'neo-container']
         */
        cls: ['neo-calendar-settingscontainer', 'neo-container'],
        /**
         * @member {Object} layout={ntype:'vbox',align:'stretch'}
         * @protected
         */
        layout: {ntype: 'vbox', align: 'stretch'},
        /**
         * True to only keep the active view inside the DOM
         * @member {Boolean} removeInactiveCards=true
         */
        removeInactiveCards: true
    }}

    /**
     *
     * @param config
     */
    constructor(config) {
        super(config);
        this.vdom.removeDom = true;
        this.createItems();
    }

    /**
     *
     * @param {Number} width
     */
    collapse(width) {
        let me    = this,
            style = me.style || {},
            vdom;

        style.marginRight = `-${width}px`;
        me._style      = style; // silent update
        me._vdom.style = style; // silent update

        Neo.getComponent(me.parentId).promiseVdomUpdate().then(() => {
            setTimeout(() => {
                vdom = me.vdom;
                vdom.removeDom = true;
                me.vdom = vdom;
            }, 400);
        });
    }

    /**
     *
     */
    createItems() {
        let me = this;

        me.items = [{
            ntype : 'component',
            cls   : ['neo-header'],
            height: 48,
            html  : '<i class="fa fa-cog"></i>Settings'
        }, {
            module             : _tab_Container_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            removeInactiveCards: me.removeInactiveCards,

            items: [{
                module: _settings_GeneralContainer_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
                style : {padding: '20px'},

                tabButtonConfig: {
                    text: 'General'
                }
            }, {
                ntype: 'component',
                html : 'Day',
                style: {padding: '20px'},

                tabButtonConfig: {
                    text: 'Day'
                }
            }, {
                module: _settings_WeekContainer_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
                style : {padding: '20px'},

                tabButtonConfig: {
                    text: 'Week'
                }
            }, {
                module: _settings_MonthContainer_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
                style : {padding: '20px'},

                tabButtonConfig: {
                    text: 'Month'
                }
            }, {
                module: _settings_YearContainer_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
                style : {padding: '20px'},

                tabButtonConfig: {
                    text: 'Year'
                }
            }]
        }];

        super.createItems();
    }

    /**
     *
     */
    expand() {
        let me = this,
            style;

        delete me.vdom.removeDom;

        Neo.getComponent(me.parentId).promiseVdomUpdate().then(() => {
            me.mounted = true;

            setTimeout(() => {
                style = me.style || {}
                style.marginRight = '0px';
                me.style = style;
            }, 50);
        });
    }
}

Neo.applyClassConfig(SettingsContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/src/calendar/view/TimeAxisComponent.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/neo.mjs/src/calendar/view/TimeAxisComponent.mjs ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimeAxisComponent; });
/* harmony import */ var _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class Neo.calendar.view.TimeAxisComponent
 * @extends Neo.container.Base
 */
class TimeAxisComponent extends _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * Valid values for interval
         * @member {Number[]} intervals=[15, 30, 60]
         * @protected
         * @static
         */
        intervals: [15, 30, 60]
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.calendar.view.TimeAxisComponent'
         * @protected
         */
        className: 'Neo.calendar.view.TimeAxisComponent',
        /**
         * @member {String} ntype='calendar-timeaxis'
         * @protected
         */
        ntype: 'calendar-timeaxis',
        /**
         * @member {String[]} cls=['neo-calendar-timeaxis']
         */
        cls: ['neo-calendar-timeaxis'],
        /**
         * Only full hours are valid for now
         * format: 'hh:mm'
         * @member {String} endTime_='24:00'
         */
        endTime_: '24:00',
        /**
         * The time interval in minutes to display as rows.
         * Valid values: 15, 30, 60
         * @member {Number} interval_=30
         */
        interval_: 30,
        /**
         * @member {Number} rowHeight_=20
         */
        rowHeight_: 20,
        /**
         * Only full hours are valid for now
         * format: 'hh:mm'
         * @member {String} startTime_='00:00'
         */
        startTime_: '00:00',
        /**
         * @member {Object} vdom
         */
        vdom: {
            style: {}
        }
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        me.createItems();
        me.afterSetRowHeight(me.rowHeight, 0);
    }

    /**
     * Triggered after the endTime config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetEndTime(value, oldValue) {
        if (oldValue !== undefined) {
            let me = this;

            // todo: handle 24:00 as 23:59
            if (!value) {
                me.endTime = '24:00';
            }

            me.afterSetRowHeight(me.rowHeight, 0);
        }
    }

    /**
     * Triggered after the interval config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetInterval(value, oldValue) {
        if (oldValue !== undefined) {
            this.afterSetRowHeight(this.rowHeight, 0);
        }
    }

    /**
     * Triggered after the rowHeight config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetRowHeight(value, oldValue) {
        if (oldValue !== undefined) {
            let me          = this,
                endTime     = me.getTime(me.endTime),
                startTime   = me.getTime(me.startTime),
                vdom        = me.vdom,
                rowHeight   = me.rowHeight,
                rowsPerItem = me.getRowsPerItem(),
                itemHeight  = rowsPerItem * rowHeight + rowsPerItem, // rowsPerItem * 1px borders
                totalHeight = rowHeight + ((endTime - startTime) * itemHeight),
                i, itemStyle;

            Object.assign(vdom.style, {
                backgroundImage    : `linear-gradient(var(--c-w-background-color) ${itemHeight - 1}px, var(--c-w-border-color) 1px)`,
                backgroundPositionY: `${-itemHeight + 1}px`,
                backgroundSize     : `0.4em ${itemHeight}px`,
                height             : `${totalHeight - rowHeight + 1}px`,
                maxHeight          : `${totalHeight - rowHeight + 1}px`
            });

            for (i=0; i < 25; i++) {
                itemStyle = {
                    height: `${itemHeight}px`
                };

                if (i === startTime) {
                    itemStyle.marginTop = `${-2 - rowHeight * (rowsPerItem === 1 ? 0.5 : rowsPerItem === 2 ? 1 : 2)}px`;
                } else {
                    delete itemStyle.marginTop;
                }

                vdom.cn[i].style = itemStyle;

                vdom.cn[i].removeDom = (i < startTime || i - 1 >= endTime);
            }

            // silent update: the view containing this component will trigger the vdom update
            me._vdom = vdom;

            me.fire('change', {
                component  : me,
                rowHeight  : rowHeight,
                rowsPerItem: rowsPerItem,
                totalHeight: totalHeight
            });
        }
    }

    /**
     * Triggered after the startTime config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetStartTime(value, oldValue) {
        if (oldValue !== undefined) {
            this.afterSetRowHeight(this.rowHeight, 0);
        }
    }

    /**
     * Triggered before the interval config gets changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    beforeSetInterval(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'interval');
    }

    /**
     *
     */
    createItems() {
        let vdom = this.vdom,
            html, i;

        vdom.cn = [];

        for (i=0; i < 25; i++) {
            html = i === 24 ? '00:00' : (i < 10 ? '0' : '') + i + ':00';

            vdom.cn.push({
                cls  : ['neo-c-w-timeaxis-item'],
                cn   : [{html: html}]
            });
        }
    }

    /**
     * Calculates the amount of rows related to the interval config
     * @returns {Number}
     */
    getRowsPerItem() {
        return this.interval === 60 ? 1 : this.interval === 30 ? 2 : 4;
    }

    /**
     * Calculates the time for the end- or startTime
     * @param {String} value
     * @returns {Number}
     */
    getTime(value) {
        return value.split(':').map(Number)[0];
    }
}

Neo.applyClassConfig(TimeAxisComponent);



/***/ }),

/***/ "./node_modules/neo.mjs/src/calendar/view/WeekComponent.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/neo.mjs/src/calendar/view/WeekComponent.mjs ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WeekComponent; });
/* harmony import */ var _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/Date.mjs */ "./node_modules/neo.mjs/src/util/Date.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _TimeAxisComponent_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TimeAxisComponent.mjs */ "./node_modules/neo.mjs/src/calendar/view/TimeAxisComponent.mjs");
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");
/* harmony import */ var _draggable_WeekEventDragZone_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../draggable/WeekEventDragZone.mjs */ "./node_modules/neo.mjs/src/calendar/draggable/WeekEventDragZone.mjs");







const todayDate = new Date();

const today = {
    day  : todayDate.getDate(),
    month: todayDate.getMonth(),
    year : todayDate.getFullYear()
};

/**
 * @class Neo.calendar.view.WeekComponent
 * @extends Neo.component.Base
 */
class WeekComponent extends _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * Valid values for timeAxisPosition
         * @member {String[]} timeAxisPositions=['end', 'start']
         * @protected
         * @static
         */
        timeAxisPositions: ['end', 'start']
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.calendar.view.WeekComponent'
         * @protected
         */
        className: 'Neo.calendar.view.WeekComponent',
        /**
         * @member {String} ntype='calendar-view-weekcomponent'
         * @protected
         */
        ntype: 'calendar-view-weekcomponent',
        /**
         * @member {String[]} cls=['neo-calendar-weekcomponent']
         */
        cls: ['neo-calendar-weekcomponent'],
        /**
         * Will get passed from the MainContainer
         * @member {Date|null} currentDate_=null
         * @protected
         */
        currentDate_: null,
        /**
         * The format of the column headers.
         * Valid values are: narrow, short & long
         * @member {String} dayNameFormat_='short'
         */
        dayNameFormat_: 'short',
        /**
         * @member {Neo.draggable.DragZone|null} eventDragZone=null
         */
        eventDragZone: null,
        /**
         * @member {Neo.calendar.store.Events|null} eventStore_=null
         */
        eventStore_: null,
        /**
         * Will get passed from updateHeader()
         * @member {Date|null} firstColumnDate=null
         * @protected
         */
        firstColumnDate: null,
        /**
         * Internal flag to check if updateHeader(true) has already run
         * @member {Boolean} headerCreated=false
         * @protected
         */
        headerCreated: false,
        /**
         * @member {Intl.DateTimeFormat|null} intlFormat_day=null
         * @protected
         */
        intlFormat_day: null,
        /**
         * @member {Intl.DateTimeFormat|null} intlFormat_time=null
         * @protected
         */
        intlFormat_time: null,
        /**
         * @member {Boolean} isUpdating=false
         * @protected
         */
        isUpdating: false,
        /**
         * @member {String} locale_=Neo.config.locale
         */
        locale_: Neo.config.locale,
        /**
         * @member {Object} timeAxis=null
         */
        timeAxis: null,
        /**
         * @member {Object} timeAxisConfig=null
         */
        timeAxisConfig: null,
        /**
         * Position the timeAxis at the left or right side.
         * Valid values are start & end.
         * start => left, end => right in LTR mode.
         * @member {String} timeAxisPosition_='start'
         */
        timeAxisPosition_: 'start',
        /**
         * @member {Object} timeFormat_=null
         */
        timeFormat_: {hour: '2-digit', minute: '2-digit'},
        /**
         * @member {Object} vdom
         */
        vdom: {
            cn: [{
                cls: ['neo-header']
            }, {
                cls: ['neo-scroll-overlay']
            }, {
                cls : ['neo-c-w-scrollcontainer'],
                flag: 'neo-c-w-scrollcontainer',
                cn  : [{
                    cls : ['neo-header-row'],
                    flag: 'neo-header-row',
                    cn  : []
                }, {
                    cls : ['neo-c-w-column-timeaxis-container'],
                    flag: 'neo-c-w-column-timeaxis-container',
                    cn  : [{
                        cls  : ['neo-c-w-column-container'],
                        flag : 'neo-c-w-column-container',
                        style: {},
                        cn   : []
                    }]
                }]
            }]
        },
        /**
         * 0-6 => Sun-Sat
         * @member {Number} weekStartDay_=0
         */
        weekStartDay_: 0
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me           = this,
            domListeners = me.domListeners;

        domListeners.push(
            {dblclick    : me.onEventDoubleClick, scope: me, delegate: '.neo-event'},
            {'drag:end'  : me.onColumnDragEnd,    scope: me, delegate: '.neo-c-w-column'},
            {'drag:end'  : me.onEventDragEnd,     scope: me, delegate: '.neo-event'},
            {'drag:move' : me.onColumnDragMove,   scope: me, delegate: '.neo-c-w-column'},
            {'drag:move' : me.onEventDragMove,    scope: me, delegate: '.neo-event'},
            {'drag:start': me.onColumnDragStart,  scope: me, delegate: '.neo-c-w-column'},
            {'drag:start': me.onEventDragStart,   scope: me, delegate: '.neo-event'},
            {wheel       : me.onWheel,            scope: me}
        );

        me.domListeners = domListeners;

        me.timeAxis = Neo.create(_TimeAxisComponent_mjs__WEBPACK_IMPORTED_MODULE_3__["default"], {
            parentId : me.id,
            listeners: {
                change: me.onTimeAxisChange,
                scope : me
            },
            ...me.timeAxisConfig || {}
        });

        me.getColumnTimeAxisContainer().cn[me.timeAxisPosition === 'start' ? 'unshift' : 'push'](me.timeAxis.vdom);

        me.updateHeader(true);

        me.headerCreated = true;
    }

    /**
     *
     * @param {Object} data
     * @param {Neo.component.Base} data.component
     * @param {Number} data.rowHeight
     * @param {Number} data.rowsPerItem
     * @param {Number} data.totalHeight
     * @param {Boolean} [silent=false]
     */
    adjustTotalHeight(data, silent=false) {
        let me          = this,
            rowHeight   = data.rowHeight,
            rowsPerItem = data.rowsPerItem,
            height      = data.totalHeight - rowHeight,
            vdom        = me.vdom,
            i           = 0,
            gradient    = [];

        for (; i < rowsPerItem; i++) {
            gradient.push(
                `var(--c-w-background-color) ${i * rowHeight + i}px`,
                `var(--c-w-background-color) ${(i + 1) * rowHeight + i}px`,
                'var(--c-w-border-color) 0'
            );
        }

        Object.assign(me.getColumnContainer().style, {
            backgroundImage: `linear-gradient(${gradient.join(',')})`,
            backgroundSize : `1px ${rowsPerItem * rowHeight + rowsPerItem}px`,
            height         : `${height}px`,
            maxHeight      : `${height}px`
        });

        me[silent ? '_vdom' : 'vdom'] = vdom;
    }

    /**
     * Triggered after the currentDate config got changed
     * @param {Date} value
     * @param {Date} oldValue
     * @protected
     */
    afterSetCurrentDate(value, oldValue) {
        if (oldValue !== undefined) {
            this.updateHeader();
        }
    }

    /**
     * Triggered after the dayNameFormat config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetDayNameFormat(value, oldValue) {
        let me = this;

        me.intlFormat_day = new Intl.DateTimeFormat(me.locale, {weekday: value});

        if (oldValue !== undefined) {
            me.updateHeader();
        }
    }

    /**
     * Triggered after the eventStore config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetEventStore(value, oldValue) {
        // console.log('afterSetEventStore', value);
    }

    /**
     * Triggered after the locale config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetLocale(value, oldValue) {
        if (oldValue !== undefined) {
            let me = this;

            me.intlFormat_day  = new Intl.DateTimeFormat(value, {weekday: me.dayNameFormat});
            me.intlFormat_time = new Intl.DateTimeFormat(value, me.timeFormat);

            me.updateHeader();
        }
    }

    /**
     * Triggered after the mounted config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetMounted(value, oldValue) {
        if (value) {
            setTimeout(() => {
                let me = this;

                Neo.main.DomAccess.getBoundingClientRect({
                    id: me.getColumnContainer().id
                }).then(data => {
                    Neo.main.DomAccess.scrollBy({
                        direction: 'left',
                        id       : me.getScrollContainer().id,
                        value    : data.width / 3
                    });
                });
            }, 20);
        }
    }

    /**
     * Triggered after the timeAxisPosition config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetTimeAxisPosition(value, oldValue) {
        let me                = this,
            cls               = me.cls,
            vdom              = me.vdom,
            timeAxisContainer = me.getColumnTimeAxisContainer();

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__["default"][value === 'end' ? 'add' : 'remove'](cls,  'neo-timeaxis-end');

        if (oldValue !== undefined) {
            timeAxisContainer.cn.unshift(timeAxisContainer.cn.pop()); // switch the order of the 2 items
        }

        me._cls = cls;
        me.vdom = vdom;
    }

    /**
     * Triggered after the timeFormat config got changed
     * @param {Object} value
     * @param {Object} oldValue
     * @protected
     */
    afterSetTimeFormat(value, oldValue) {
        let me = this;

        me.intlFormat_time = new Intl.DateTimeFormat(me.locale, value);
    }

    /**
     * Triggered after the weekStartDay config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetWeekStartDay(value, oldValue) {
        if (oldValue !== undefined) {
            this.updateHeader(false, true);
            this.updateEvents();
        }
    }

    /**
     * Triggered before the dayNameFormat config gets changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    beforeSetDayNameFormat(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'dayNameFormat', _util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.dayNameFormats);
    }

    /**
     * Triggered before the timeAxisPosition config gets changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    beforeSetTimeAxisPosition(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'timeAxisPosition');
    }

    /**
     * Triggered before the weekStartDay config gets changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    beforeSetWeekStartDay(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'weekStartDay', _util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.weekStartDays);
    }

    /**
     *
     * @param {Date} date
     * @returns {Object}
     */
    createColumnAndHeader(date) {
        let me          = this,
            columnCls   = ['neo-c-w-column', 'neo-draggable'],
            currentDate = date.getDate(),
            currentDay  = date.getDay(),
            dateCls     = ['neo-date'],
            column, header;

        if (currentDay === 0 || currentDay === 6) {
            columnCls.push('neo-weekend');
        } else {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].remove(columnCls, 'neo-weekend');
        }

        if (currentDate        === today.day   &&
            date.getMonth()    === today.month &&
            date.getFullYear() === today.year) {
            dateCls.push('neo-today');
        }

        column = {
            cls : columnCls,
            flag: _util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].convertToyyyymmdd(date)
        };

        header = {
            cls: ['neo-header-row-item'],
            cn : [{
                cls : ['neo-day'],
                html: me.intlFormat_day.format(date)
            }, {
                cls : dateCls,
                html: currentDate
            }]
        };

        return {
            column: column,
            header: header
        };
    }

    /**
     *
     */
    destroy(...args) {
        this.eventStore = null;
        this.timeAxis   = null;

        super.destroy(...args);
    }

    /**
     *
     */
    getColumnContainer() {
        return _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].getByFlag(this.vdom, 'neo-c-w-column-container');
    }

    /**
     *
     * @param {Date} date
     * @returns {String}
     */
    getColumnId(date) {
        return `${this.id}_col_${_util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].convertToyyyymmdd(date)}`;
    }

    /**
     *
     * @param {Date} date
     * @returns {String}
     */
    getColumnHeaderId(date) {
        return `${this.id}_ch_${_util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].convertToyyyymmdd(date)}`;
    }

    /**
     *
     */
    getColumnTimeAxisContainer() {
        return _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].getByFlag(this.vdom, 'neo-c-w-column-timeaxis-container');
    }

    /**
     *
     */
    getHeaderContainer() {
        return _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].getByFlag(this.vdom, 'neo-header-row');
    }

    /**
     * Used inside createId() as the default value passed to the IdGenerator.
     * @returns {String}
     */
    getIdKey() {
        return 'c-w';
    }

    /**
     *
     */
    getScrollContainer() {
        return _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].getByFlag(this.vdom, 'neo-c-w-scrollcontainer');
    }

    /**
     *
     * @param {Object} data
     */
    onColumnDragEnd(data) {
        if (!data.path[0].cls.includes('neo-event')) {
            console.log('onColumnDragEnd', data);
        }
    }

    /**
     *
     * @param {Object} data
     */
    onColumnDragMove(data) {
        if (!data.path[0].cls.includes('neo-event')) {
            console.log('onColumnDragMove', data);
        }
    }

    /**
     *
     * @param {Object} data
     */
    onColumnDragStart(data) {
        if (!data.path[0].cls.includes('neo-event')) {
            console.log('onColumnDragStart', data);
        }
    }

    /**
     *
     * @param {Object} data
     */
    onEventDoubleClick(data) {
        console.log('onEventDoubleClick', data);
    }

    /**
     *
     * @param {Object} data
     */
    onEventDragEnd(data) {
        this.eventDragZone.dragEnd();
    }

    /**
     *
     * @param {Object} data
     */
    onEventDragMove(data) {
        this.eventDragZone.dragMove(data);
    }

    /**
     *
     * @param {Object} data
     */
    onEventDragStart(data) {
        let me          = this,
            id          = data.path[0].id,
            dragElement = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].findVdomChild(me.vdom, id).vdom,
            timeAxis    = me.timeAxis;

        const config = {
            dragElement      : dragElement,
            endTime          : timeAxis.getTime(timeAxis.endTime),
            eventRecord      : me.eventStore.get(dragElement.flag),
            proxyParentId    : data.path[1].id,
            scrollContainerId: me.getScrollContainer().id,
            startTime        : timeAxis.getTime(timeAxis.startTime)
        };

        if (!me.eventDragZone) {
            me.eventDragZone = Neo.create({
                module : _draggable_WeekEventDragZone_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
                appName: me.appName,
                owner  : me,
                ...config,

                dragProxyConfig: {
                    style: {
                        transition: 'none',
                        willChange: 'height'
                    }
                }
            });
        } else {
            me.eventDragZone.set(config);
        }

        me.eventDragZone.dragStart(data);
    }

    /**
     *
     * @param {Object} data
     * @param {Neo.component.Base} data.component
     * @param {Number} data.rowHeight
     * @param {Number} data.rowsPerItem
     * @param {Number} data.totalHeight
     */
    onTimeAxisChange(data) {
        let me = this;

        me.adjustTotalHeight(data, me.headerCreated);

        if (me.headerCreated) {
            me.updateEvents();
        }
    }

    /**
     *
     * @param {Object} data
     */
    onWheel(data) {
        if (!this.isUpdating && Math.abs(data.deltaX) > Math.abs(data.deltaY)) {
            let me            = this,
                columns       = me.getColumnContainer(),
                header        = me.getHeaderContainer(),
                i             = 0,
                timeAxisWidth = 50,
                width         = data.clientWidth - timeAxisWidth,
                config, date, scrollValue;

            // console.log(data.scrollLeft, Math.round(data.scrollLeft / (data.clientWidth - timeAxisWidth) * 7));

            if (data.deltaX > 0 && Math.round(data.scrollLeft / width * 7) > 13) {
                date = new Date(columns.cn[columns.cn.length - 1].flag);

                columns.cn.splice(0, 7);
                header.cn.splice(0, 7);

                for (; i < 7; i++) {
                    date.setDate(date.getDate() + 1);

                    config= me.createColumnAndHeader(date);

                    columns.cn.push(config.column);
                    header.cn.push(config.header);
                }

                scrollValue = -width;
            }

            else if (data.deltaX < 0 && Math.round(data.scrollLeft / width * 7) < 1) {
                date = new Date(columns.cn[0].flag);

                columns.cn.length = 14;
                header.cn.length = 14;

                for (; i < 7; i++) {
                    date.setDate(date.getDate() - 1);

                    config= me.createColumnAndHeader(date);

                    columns.cn.unshift(config.column);
                    header.cn.unshift(config.header);
                }

                scrollValue = width;
            }

            if (scrollValue) {
                me.isUpdating = true;

                me.promiseVdomUpdate().then(() => {
                    Neo.main.DomAccess.scrollBy({
                        direction: 'left',
                        id       : me.getScrollContainer().id,
                        value    : scrollValue
                    }).then(() => {
                        me.isUpdating = false;
                    });
                });
            }
        }
    }

    /**
     * The algorithm relies on the eventStore being sorted by startDate ASC
     */
    updateEvents() {
        let me         = this,
            timeAxis   = me.timeAxis,
            endTime    = timeAxis.getTime(timeAxis.endTime),
            startTime  = timeAxis.getTime(timeAxis.startTime),
            totalTime  = endTime - startTime,
            date       = _util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].clone(me.firstColumnDate),
            eventStore = me.eventStore,
            vdom       = me.vdom,
            content    = me.getColumnContainer(),
            j          = 0,
            len        = eventStore.getCount(),
            column, duration, height, i, record, recordKey, startHours, top;

        // remove previous events from the vdom
        content.cn.forEach(item => item.cn = []);

        for (; j < 21; j++) {
            column = content.cn[j];

            for (i = 0; i < len; i++) {
                record = eventStore.items[i];

                // todo: we need a check for date overlaps => startDate < current day, endDate >= current day
                if (_util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].matchDate(date, record.startDate)) {
                    if (_util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].matchDate(date, record.endDate)) {
                        recordKey  = record[eventStore.keyProperty];
                        duration   = (record.endDate - record.startDate) / 60 / 60 / 1000; // duration in hours
                        height     = Math.round(duration / totalTime * 100 * 1000) / 1000;
                        startHours = (record.startDate.getHours() * 60 + record.startDate.getMinutes()) / 60;
                        top        = Math.round((startHours - startTime) / totalTime * 100 * 1000) / 1000;

                        // console.log(j, record);
                        // console.log(top);

                        column.cn.push({
                            cls     : ['neo-event', 'neo-draggable'],
                            flag    : record[eventStore.keyProperty],
                            id      : me.id + '__' + recordKey,
                            tabIndex: -1,

                            cn: [{
                                cls : ['neo-event-time'],
                                html: me.intlFormat_time.format(record.startDate),
                                id  : me.id + '__time__' + recordKey
                            }, {
                                cls : ['neo-event-title'],
                                html: record.title,
                                id  : me.id + '__title__' + recordKey
                            }],

                            style: {
                                height: `calc(${height}% - 2px)`,
                                top   : `calc(${top}% + 1px)`,
                                width : 'calc(100% - 1px)' // todo
                            }
                        });
                    }
                }
            }

            date.setDate(date.getDate() + 1);
        }

        me.vdom = vdom;
    }

    /**
     *
     * @param {Boolean} [create=false]
     * @param {Boolean} [silent=false]
     */
    updateHeader(create=false, silent=false) {
        let me      = this,
            date    = me.currentDate, // cloned
            vdom    = me.vdom,
            content = me.getColumnContainer(),
            header  = me.getHeaderContainer(),
            i       = 0,
            columnCls, currentDate, currentDay, dateCls, headerId;

        date.setDate(me.currentDate.getDate() - me.currentDate.getDay() + me.weekStartDay - 7);

        me.firstColumnDate = _util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].clone(date);

        for (; i < 21; i++) {
            columnCls   = ['neo-c-w-column', 'neo-draggable'];
            currentDate = date.getDate();
            currentDay  = date.getDay();
            dateCls     = ['neo-date'];

            if (currentDay === 0 || currentDay === 6) {
                columnCls.push('neo-weekend');
            } else {
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].remove(columnCls, 'neo-weekend');
            }

            if (currentDate        === today.day   &&
                date.getMonth()    === today.month &&
                date.getFullYear() === today.year) {
                dateCls.push('neo-today');
            } else {
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].remove(dateCls, 'neo-today');
            }

            headerId = me.getColumnHeaderId(date);

            if (create) {
                content.cn.push({
                    cls : columnCls,
                    flag: _util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].convertToyyyymmdd(date),
                    id  : me.getColumnId(date)
                });

                header.cn.push({
                    cls: ['neo-header-row-item'],
                    id : headerId,
                    cn : [{
                        cls : ['neo-day'],
                        html: me.intlFormat_day.format(date),
                        id  : `${headerId}_day`
                    }, {
                        cls : dateCls,
                        html: currentDate,
                        id  : `${headerId}_date`
                    }]
                });
            } else {
                Object.assign(content.cn[i], {
                    cls : columnCls,
                    flag: _util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].convertToyyyymmdd(date),
                    id  : me.getColumnId(date)
                });

                header.cn[i].id = headerId;

                Object.assign(header.cn[i].cn[0], {
                    html: me.intlFormat_day.format(date),
                    id  : `${headerId}_day`
                });

                Object.assign(header.cn[i].cn[1], {
                    cls : dateCls,
                    html: currentDate,
                    id  : `${headerId}_date`
                });
            }

            date.setDate(date.getDate() + 1);
        }

        me[silent ? '_vdom' : 'vdom'] = vdom;
    }
}

Neo.applyClassConfig(WeekComponent);



/***/ }),

/***/ "./node_modules/neo.mjs/src/calendar/view/YearComponent.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/neo.mjs/src/calendar/view/YearComponent.mjs ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return YearComponent; });
/* harmony import */ var _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/Date.mjs */ "./node_modules/neo.mjs/src/util/Date.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");




const todayDate = new Date();

const today = {
    day  : todayDate.getDate(),
    month: todayDate.getMonth(),
    year : todayDate.getFullYear()
};

/**
 * @class Neo.calendar.view.YearComponent
 * @extends Neo.component.Base
 */
class YearComponent extends _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.calendar.view.YearComponent'
         * @protected
         */
        className: 'Neo.calendar.view.YearComponent',
        /**
         * @member {String} ntype='calendar-view-yearcomponent'
         * @protected
         */
        ntype: 'calendar-view-yearcomponent',
        /**
         * Stores the last date change which got triggered while a year transition was running
         * @member {Date|null} cachedUpdate=null
         * @protected
         */
        cachedUpdate: null,
        /**
         * @member {String[]} cls=['neo-calendar-yearcomponent']
         */
        cls: ['neo-calendar-yearcomponent'],
        /**
         * Will get passed from the MainContainer
         * @member {Date|null} currentDate_=null
         * @protected
         */
        currentDate_: null,
        /**
         * The format of the column headers.
         * Valid values are: narrow, short & long
         * @member {String} dayNameFormat_='narrow'
         */
        dayNameFormat_: 'narrow',
        /**
         * @member {Neo.calendar.store.Events|null} eventStore_=null
         */
        eventStore_: null,
        /**
         * @member {Intl.DateTimeFormat|null} intlFormat_day=null
         * @protected
         */
        intlFormat_day: null,
        /**
         * @member {Intl.DateTimeFormat|null} intlFormat_month=null
         * @protected
         */
        intlFormat_month: null,
        /**
         * Internal flag to prevent changing the date while change animations are still running
         * @member {Boolean} isUpdating_=false
         * @protected
         */
        isUpdating_: false,
        /**
         * @member {String} locale_=Neo.config.locale
         */
        locale_: Neo.config.locale,
        /**
         * The format of the month header names.
         * Valid values are: narrow, short & long
         * @member {String} monthNameFormat_='long'
         */
        monthNameFormat_: 'long',
        /**
         * True to scroll new years in from the top
         * @member {Boolean} scrollNewYearFromTop=false
         */
        scrollNewYearFromTop: false,
        /**
         * True to show borders for the calendar month cells
         * @member {Boolean} showCellBorders_=false
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
         * True to show the week number as the first column of each month
         * @member {Boolean} showWeekNumbers_=true
         */
        showWeekNumbers_: true,
        /**
         * True to show 6 weeks for each month, so that all months have the same height
         * @member {Boolean} sixWeeksPerMonth_=false
         */
        sixWeeksPerMonth_: false,
        /**
         * True to use sliding animations
         * @member {Boolean} useAnimations=true
         */
        useAnimations: true,
        /**
         * @member {Object} vdom
         */
        vdom: {
            cn: [{
                cls: ['neo-content-wrapper'],
                cn : [{
                    cls: ['neo-year-header']
                }, {
                    cls: ['neo-months-container']
                }]
            }]
        },
        /**
         * 0-6 => Sun-Sat
         * @member {Number} weekStartDay_=0
         */
        weekStartDay_: 0
    }}

    /**
     *
     * @param config
     */
    constructor(config) {
        super(config);

        let me           = this,
            domListeners = me.domListeners;

        domListeners.push({
            wheel: {fn: me.onWheel, scope: me}
        });

        me.domListeners = domListeners;

        me.updateHeaderYear();
        me.createMonths();
    }

    /**
     * Triggered after the currentDate config got changed
     * @param {Date} value
     * @param {Date} oldValue
     * @protected
     */
    afterSetCurrentDate(value, oldValue) {
        if (oldValue !== undefined) {
            let oldYear = oldValue.getFullYear(),
                year    = value   .getFullYear();

            if (year !== oldYear) {
                this.changeYear(year - oldYear);
            } else {
                // todo
                console.log('## select a new day', value.getMonth(), value.getDate());
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
        this.updateDayNamesRows(value, oldValue);
    }

    /**
     * Triggered after the locale config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetLocale(value, oldValue) {
        if (oldValue !== undefined) {
            let me = this;

            me.updateDayNamesRows(me.dayNameFormat, '', true);
            me.updateMonthNameFormat(me.monthNameFormat, '');
        }
    }

    /**
     * Triggered after the monthNameFormat config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetMonthNameFormat(value, oldValue) {
        this.updateMonthNameFormat(value, oldValue);
    }

    /**
     * Triggered after the showCellBorders config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetShowCellBorders(value, oldValue) {
        let cls = this.cls;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__["default"][value ? 'add' : 'remove'](cls, 'neo-show-cell-borders');
        this.cls = cls;
    }

    /**
     * Triggered after the showWeekends config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetShowWeekends(value, oldValue) {
        if (oldValue !== undefined) {
            let me   = this,
                vdom = me.vdom,
                i    = 0,
                item, itemCn, j, k, len;

            for (; i < 12; i++) { // months
                itemCn = vdom.cn[0].cn[1].cn[i].cn;
                len    = itemCn.length;

                for (j=1; j < len; j++) { // weeks
                    for (k=1; k < 8; k++) { // days
                        item = itemCn[j].cn[k];

                        if (item.cls.includes('neo-weekend')) {
                            if (value) {
                                delete item.removeDom;
                            } else {
                                item.removeDom = true;
                            }
                        }
                    }
                }
            }

            // triggers the vdom update
            me.updateDayNamesRows(me.dayNameFormat, '');
        }
    }

    /**
     * Triggered after the showWeekNumbers config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetShowWeekNumbers(value, oldValue) {
        if (oldValue !== undefined) {
            let me   = this,
                vdom = me.vdom,
                i    = 0,
                itemCn, j, len;

            for (; i < 12; i++) {
                itemCn = vdom.cn[0].cn[1].cn[i].cn;
                len    = itemCn.length;

                for (j = 1; j < len; j++) {
                    itemCn[j].cn[0].removeDom = !value;
                }
            }

            me.vdom = vdom;
        }
    }

    /**
     * Triggered after the sixWeeksPerMonth config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetSixWeeksPerMonth(value, oldValue) {
        if (oldValue !== undefined) {
            let me   = this,
                vdom = me.vdom,
                date = me.currentDate, // cloned
                i    = 0;

            date.setMonth(0);
            date.setDate(1);

            for (; i < 12; i++) {
                vdom.cn[0].cn[1].cn[i].cn[7].removeDom = _util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getWeeksOfMonth(date, me.weekStartDay) === 5 && !value;
                date.setMonth(date.getMonth() + 1);
            }

            me.vdom = vdom;
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
            this.createMonths();
        }
    }

    /**
     * Triggered before the dayNameFormat config gets changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    beforeSetDayNameFormat(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'dayNameFormat', _util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.dayNameFormats);
    }

    /**
     * Triggered before the monthNameFormat config gets changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    beforeSetMonthNameFormat(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'monthNameFormat', _util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.monthNameFormats);
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
     */
    changeYear(increment) {
        let me = this,
            scrollFromTop, vdom, y;

        if (!me.useAnimations) {
            // me.recreateContent(increment); // todo
        } else {
            if (!me.isUpdating) {
                me.isUpdating = true;

                Neo.main.DomAccess.getBoundingClientRect({
                    id: me.id
                }).then(data => {
                    scrollFromTop = me.scrollNewYearFromTop && increment < 0 || !me.scrollNewYearFromTop && increment > 0;
                    vdom          = me.vdom;
                    y             = scrollFromTop ? 0 : -data.height;

                    vdom.cn.push({
                        cls: ['neo-relative'],
                        cn : [{
                            cls: ['neo-animation-wrapper'],
                            cn : [{
                                cls: ['neo-content-wrapper'],
                                cn : [{
                                    cls : ['neo-year-header'],
                                    html: me.currentDate.getFullYear()
                                }, {
                                    cls: ['neo-months-container']
                                }]
                            }],
                            style: {
                                height   : `${2 * data.height}px`,
                                transform: `translateY(${y}px)`,
                                width    : `${data.width}px`
                            }
                        }]
                    });

                    me.createMonths(true, vdom.cn[1].cn[0].cn[0].cn[1]);
                    vdom.cn[1].cn[0].cn[scrollFromTop ? 'unshift' : 'push'](vdom.cn[0]);
                    vdom.cn.splice(0, 1);

                    me.promiseVdomUpdate(vdom).then(() => {
                        y = scrollFromTop ? -data.height : 0;
                        vdom.cn[0].cn[0].style.transform = `translateY(${y}px)`;
                        me.vdom = vdom;

                        setTimeout(() => {
                            vdom.cn[0] = vdom.cn[0].cn[0].cn[scrollFromTop ? 1 : 0];
                            me.triggerVdomUpdate();
                        }, 300);
                    });
                });
            }
        }
    }

    /**
     *
     */
    createDayNamesRow() {
        let me   = this,
            date = me.currentDate, // cloned
            i    = 0,
            row  = {cls: ['neo-calendar-week'], cn: [{cls: ['neo-cell', 'neo-top-left-spacer']}]},
            day, node;

        date.setDate(me.currentDate.getDate() - me.currentDate.getDay() + me.weekStartDay);

        for (; i < 7; i++) {
            node = {
                cls : ['neo-cell', 'neo-weekday-cell'],
                html: me.intlFormat_day.format(date)
            };

            day = date.getDay();

            if (!me.showWeekends && (day === 0 || day === 6)) {
                node.removeDom = true;
            }

            row.cn.push(node);

            date.setDate(date.getDate() + 1);
        }

        return row;
    }

    /**
     *
     * @param {Object} containerEl
     * @param {Date} currentDate
     * @returns {Object} vdom
     */
    createMonthContent(containerEl, currentDate) {
        let me             = this,
            currentDay     = currentDate.getDate(),
            currentMonth   = currentDate.getMonth(),
            currentYear    = currentDate.getFullYear(),
            date           = _util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].clone(currentDate),
            valueDate      = me.currentDate, // cloned
            valueMonth     = valueDate.getMonth(),
            valueYear      = valueDate.getFullYear(),
            daysInMonth    = _util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getDaysInMonth(currentDate),
            firstDayOffset = _util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getFirstDayOffset(currentDate, me.weekStartDay),
            columns        = 7,
            i              = 0,
            weekDate       = _util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].clone(currentDate),
            cellId, config, dateDay, day, hasContent, j, row, rows;

        rows = (daysInMonth + firstDayOffset) / 7 > 5 ? 6 : 5;
        day  = 1 - firstDayOffset;

        date.setDate(day);
        weekDate.setDate(day + 7);

        for (; i < 6; i++) {
            row = {
                cls      : ['neo-calendar-week'],
                removeDom: i === rows && !me.sixWeeksPerMonth,

                cn: [{
                    cls      : ['neo-cell', 'neo-weeknumber-cell'],
                    html     : _util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getWeekOfYear(weekDate),
                    removeDom: !me.showWeekNumbers
                }]
            };

            weekDate.setDate(weekDate.getDate() + 7);

            for (j=0; j < columns; j++) {
                hasContent = day > 0 && day <= daysInMonth;
                cellId     = me.getCellId(currentYear, currentMonth + 1, day);
                dateDay    = date.getDay();

                config = {
                    id      : cellId,
                    cls     : hasContent ? ['neo-cell'] : ['neo-cell', 'neo-disabled'],
                    tabIndex: hasContent ? -1 : null,

                    cn: [{
                        cls : ['neo-cell-content'],
                        html: hasContent ? day : me.showDisabledDays ? date.getDate() : ''
                    }]
                };

                if (dateDay === 0 || dateDay === 6) {
                    config.cls.push('neo-weekend');

                    if (!me.showWeekends) {
                        config.removeDom = true;
                    }
                }

                if (today.year === currentYear && today.month === currentMonth && today.day === day) {
                    config.cn[0].cls.push('neo-today');
                }

                if (valueYear === currentYear && valueMonth === currentMonth && day === currentDay) {
                    config.cls.push('neo-selected');
                }

                row.cn.push(config);

                date.setDate(date.getDate() + 1);

                day++;
            }

            containerEl.cn.push(row);
        }

        return containerEl;
    }

    /**
     * @param {Boolean} [silent=false] true to update the vdom silently
     * @param {Object} [containerEl]
     */
    createMonths(silent=false, containerEl) {
        let me             = this,
            currentDate    = me.currentDate, // cloned
            vdom           = me.vdom,
            monthContainer = containerEl || vdom.cn[0].cn[1],
            i              = 0,
            monthVdom;

        monthContainer.cn = [];

        for (; i < 12; i++) {
            currentDate.setMonth(i);
            currentDate.setDate(1);

            monthVdom = {
                cls: ['neo-month'],
                cn : [
                    {
                        cls : ['neo-month-name'],
                        html: me.intlFormat_month.format(currentDate)
                    },
                    me.createDayNamesRow()
                ]
            };

            monthVdom = me.createMonthContent(monthVdom, _util_Date_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].clone(currentDate));

            monthContainer.cn.push(monthVdom);
        }

        if (!silent) {
            me.vdom = vdom;
        }
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
     * @param {Object} data
     */
    onWheel(data) {
        if (Math.abs(data.deltaY) > Math.abs(data.deltaX)) {
            let me          = this,
                currentDate = me.currentDate; // cloned

            currentDate.setFullYear(currentDate.getFullYear() + (data.deltaY > 0 ? 1 : -1));

            me.currentDate = currentDate;
        }
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
     * Dynamically update the weekday rows inside each month
     * @param {String} value
     * @param {String} oldValue
     * @param {Boolean} [silent=false]
     */
    updateDayNamesRows(value, oldValue, silent=false) {
        let me = this;

        me.intlFormat_day = new Intl.DateTimeFormat(me.locale, {weekday: value});

        if (oldValue !== undefined) {
            let date = me.currentDate, // cloned
                vdom = me.vdom,
                i    = 1,
                day, j, node;

            date.setDate(me.currentDate.getDate() - me.currentDate.getDay() + me.weekStartDay);

            for (; i < 8; i++) {
                for (j=0; j < 12; j++) {
                    day  = date.getDay();
                    node = vdom.cn[0].cn[1].cn[j].cn[1].cn[i];

                    node.html = me.intlFormat_day.format(date);

                    if (!me.showWeekends && (day === 0 || day === 6)) {
                        node.removeDom = true;
                    } else {
                        delete node.removeDom;
                    }
                }

                date.setDate(date.getDate() + 1);
            }

            me[silent ? '_vdom' : 'vdom'] = vdom;
        }
    }

    /**
     *
     */
    updateHeaderYear() {
        this.vdom.cn[0].cn[0].html = this.currentDate.getFullYear();
    }

    /**
     * Dynamically update the monthNameFormat
     * @param {String} value
     * @param {String} oldValue
     * @param {Boolean} [silent=false]
     * @protected
     */
    updateMonthNameFormat(value, oldValue, silent=false) {
        let me = this;

        me.intlFormat_month = new Intl.DateTimeFormat(me.locale, {month: value});

        if (oldValue !== undefined) {
            let vdom        = me.vdom,
                i           = 0,
                currentDate = me.currentDate;

            for (; i < 12; i++) {
                currentDate.setMonth(i);
                currentDate.setDate(1);

                vdom.cn[0].cn[1].cn[i].cn[0].html = me.intlFormat_month.format(currentDate);
            }

            me[silent ? '_vdom' : 'vdom'] = vdom;
        }
    }
}

Neo.applyClassConfig(YearComponent);



/***/ }),

/***/ "./node_modules/neo.mjs/src/calendar/view/settings/GeneralContainer.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/neo.mjs/src/calendar/view/settings/GeneralContainer.mjs ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GeneralContainer; });
/* harmony import */ var _form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../form/field/CheckBox.mjs */ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs");
/* harmony import */ var _container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../form/field/Number.mjs */ "./node_modules/neo.mjs/src/form/field/Number.mjs");
/* harmony import */ var _form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../form/field/Radio.mjs */ "./node_modules/neo.mjs/src/form/field/Radio.mjs");





/**
 * @class Neo.calendar.view.settings.GeneralContainer
 * @extends Neo.container.Base
 */
class GeneralContainer extends _container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.calendar.view.settings.GeneralContainer'
         * @protected
         */
        className: 'Neo.calendar.view.settings.GeneralContainer',
        /**
         * @member {Object} layout={ntype:'vbox',align:'stretch'}
         */
        layout: {ntype: 'vbox', align: 'stretch'}
    }}

    /**
     *
     * @param config
     */
    constructor(config) {
        super(config);
        this.createItems();
    }

    /**
     *
     */
    createItems() {
        let me       = this,
            calendar = me.up('calendar-maincontainer');

        me.items = [{
            module    : _form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            clearable : true,
            flex      : 'none',
            labelText : 'baseFontSize',
            labelWidth: 110,
            listeners : {change: me.onConfigChange, scope: me},
            maxValue  : 20,
            minValue  : 10,
            name      : 'baseFontSize',
            value     : calendar.baseFontSize
        }, {
            module        : _form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            checked       : calendar.locale === 'default',
            fieldValue    : 'default',
            flex          : 'none',
            hideValueLabel: false,
            labelText     : 'locale',
            labelWidth    : 110,
            listeners     : {change: me.onRadioChange, scope: me},
            name          : 'locale',
            style         : {marginTop: '5px'},
            valueLabelText: 'default'
        }, {
            module        : _form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            checked       : calendar.locale === 'de-DE',
            fieldValue    : 'de-DE',
            flex          : 'none',
            hideValueLabel: false,
            labelText     : '',
            labelWidth    : 110,
            listeners     : {change: me.onRadioChange, scope: me},
            name          : 'locale',
            style         : {marginTop: '5px'},
            valueLabelText: 'de-DE'
        }, {
            module        : _form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            checked       : calendar.locale === 'en-US',
            fieldValue    : 'en-US',
            flex          : 'none',
            hideValueLabel: false,
            labelText     : '',
            labelWidth    : 110,
            listeners     : {change: me.onRadioChange, scope: me},
            name          : 'locale',
            style         : {marginTop: '5px'},
            valueLabelText: 'en-US'
        }, {
            module        : _form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            checked       : calendar.locale === 'es-ES',
            fieldValue    : 'es-ES',
            flex          : 'none',
            hideValueLabel: false,
            labelText     : '',
            labelWidth    : 110,
            listeners     : {change: me.onRadioChange, scope: me},
            name          : 'locale',
            style         : {marginTop: '5px'},
            valueLabelText: 'es-ES'
        }, {
            module        : _form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            checked       : calendar.locale === 'fr-FR',
            fieldValue    : 'fr-FR',
            flex          : 'none',
            hideValueLabel: false,
            labelText     : '',
            labelWidth    : 110,
            listeners     : {change: me.onRadioChange, scope: me},
            name          : 'locale',
            style         : {marginTop: '5px'},
            valueLabelText: 'fr-FR'
        }, {
            module        : _form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            checked       : calendar.weekStartDay === 0,
            fieldValue    : 0,
            flex          : 'none',
            hideValueLabel: false,
            labelText     : 'weekStartDay',
            labelWidth    : 110,
            listeners     : {change: me.onRadioChange, scope: me},
            name          : 'weekStartDay',
            style         : {marginTop: '10px'},
            valueLabelText: 'Sunday'
        }, {
            module        : _form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            checked       : calendar.weekStartDay === 1,
            fieldValue    : 1,
            flex          : 'none',
            hideValueLabel: false,
            labelText     : '',
            labelWidth    : 110,
            listeners     : {change: me.onRadioChange, scope: me},
            name          : 'weekStartDay',
            style         : {marginTop: '5px'},
            valueLabelText: 'Monday'
        }, {
            module        : _form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            checked       : calendar.showWeekends,
            flex          : 'none',
            hideLabel     : true,
            hideValueLabel: false,
            listeners     : {change: me.onConfigChange, scope: me},
            name          : 'showWeekends',
            style         : {marginTop: '10px'},
            valueLabelText: 'showWeekends'
        }, {
            module        : _form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            checked       : calendar.scrollNewYearFromTop,
            flex          : 'none',
            hideLabel     : true,
            hideValueLabel: false,
            listeners     : {change: me.onConfigChange, scope: me},
            name          : 'scrollNewYearFromTop',
            style         : {marginTop: '10px'},
            valueLabelText: 'scrollNewYearFromTop'
        }];

        super.createItems();
    }

    /**
     *
     * @param {Object} data
     */
    onConfigChange(data) {
        this.up('calendar-maincontainer')[data.component.name] = data.value;
    }

    /**
     *
     * @param {Object} data
     */
    onRadioChange(data) {
        if (data.value) {
            this.up('calendar-maincontainer')[data.component.name] = data.component.fieldValue;
        }
    }
}

Neo.applyClassConfig(GeneralContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/src/calendar/view/settings/MonthContainer.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/neo.mjs/src/calendar/view/settings/MonthContainer.mjs ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MonthContainer; });
/* harmony import */ var _form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../form/field/CheckBox.mjs */ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs");
/* harmony import */ var _container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../form/field/Radio.mjs */ "./node_modules/neo.mjs/src/form/field/Radio.mjs");




/**
 * @class Neo.calendar.view.settings.MonthContainer
 * @extends Neo.container.Base
 */
class MonthContainer extends _container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.calendar.view.settings.MonthContainer'
         * @protected
         */
        className: 'Neo.calendar.view.settings.MonthContainer',
        /**
         * @member {Object} layout={ntype:'vbox',align:'stretch'}
         */
        layout: {ntype: 'vbox', align: 'stretch'}
    }}

    /**
     *
     * @param config
     */
    constructor(config) {
        super(config);
        this.createItems();
    }

    /**
     *
     */
    createItems() {
        let me             = this,
            labelWidth     = 140,
            monthComponent = me.getMonthComponent();

        me.items = [{
            module        : _form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            checked       : monthComponent.dayNameFormat === 'narrow',
            fieldValue    : 'narrow',
            flex          : 'none',
            hideValueLabel: false,
            labelText     : 'dayNameFormat',
            labelWidth    : labelWidth,
            listeners     : {change: me.onRadioChange, scope: me},
            name          : 'cm_dayNameFormat',
            valueLabelText: 'narrow'
        }, {
            module        : _form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            checked       : monthComponent.dayNameFormat === 'short',
            fieldValue    : 'short',
            flex          : 'none',
            hideValueLabel: false,
            labelText     : '',
            labelWidth    : labelWidth,
            listeners     : {change: me.onRadioChange, scope: me},
            name          : 'cm_dayNameFormat',
            style         : {marginTop: '5px'},
            valueLabelText: 'short'
        }, {
            module        : _form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            checked       : monthComponent.dayNameFormat === 'long',
            fieldValue    : 'long',
            flex          : 'none',
            hideValueLabel: false,
            labelText     : '',
            labelWidth    : labelWidth,
            listeners     : {change: me.onRadioChange, scope: me},
            name          : 'cm_dayNameFormat',
            style         : {marginTop: '5px'},
            valueLabelText: 'long'
        }, {
            module        : _form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            checked       : monthComponent.monthNameFormat === 'short',
            fieldValue    : 'short',
            flex          : 'none',
            hideValueLabel: false,
            labelText     : 'monthNameFormat',
            labelWidth    : labelWidth,
            listeners     : {change: me.onRadioChange, scope: me},
            name          : 'cm_monthNameFormat',
            style         : {marginTop: '10px'},
            valueLabelText: 'short'
        }, {
            module        : _form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            checked       : monthComponent.monthNameFormat === 'long',
            fieldValue    : 'long',
            flex          : 'none',
            hideValueLabel: false,
            labelText     : '',
            labelWidth    : labelWidth,
            listeners     : {change: me.onRadioChange, scope: me},
            name          : 'cm_monthNameFormat',
            style         : {marginTop: '5px'},
            valueLabelText: 'long'
        }, {
            module        : _form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            checked       : monthComponent.useScrollBoxShadows,
            flex          : 'none',
            hideLabel     : true,
            hideValueLabel: false,
            listeners     : {change: me.onConfigChange, scope: me},
            name          : 'useScrollBoxShadows',
            style         : {marginTop: '10px'},
            valueLabelText: 'useScrollBoxShadows'
        }];

        super.createItems();
    }

    /**
     *
     * @returns {Neo.calendar.view.MonthComponent}
     */
    getMonthComponent() {
        return this.up('calendar-maincontainer').monthComponent;
    }

    /**
     *
     * @param {Object} data
     */
    onConfigChange(data) {
        this.getMonthComponent()[data.component.name] = data.value;
    }

    /**
     *
     * @param {Object} data
     */
    onRadioChange(data) {
        if (data.value) {
            let name = data.component.name;

            if (name.startsWith('cm_')) {
                name = name.substring(3);
            }

            this.getMonthComponent()[name] = data.component.fieldValue;
        }
    }
}

Neo.applyClassConfig(MonthContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/src/calendar/view/settings/WeekContainer.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/neo.mjs/src/calendar/view/settings/WeekContainer.mjs ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WeekContainer; });
/* harmony import */ var _container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../form/field/Number.mjs */ "./node_modules/neo.mjs/src/form/field/Number.mjs");
/* harmony import */ var _form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../form/field/Radio.mjs */ "./node_modules/neo.mjs/src/form/field/Radio.mjs");
/* harmony import */ var _form_field_Time_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../form/field/Time.mjs */ "./node_modules/neo.mjs/src/form/field/Time.mjs");





/**
 * @class Neo.calendar.view.settings.WeekContainer
 * @extends Neo.container.Base
 */
class WeekContainer extends _container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.calendar.view.settings.WeekContainer'
         * @protected
         */
        className: 'Neo.calendar.view.settings.WeekContainer',
        /**
         * @member {Object} itemDefaults
         */
        itemDefaults: {
            flex      : 'none',
            labelWidth: 130,
            style     : {marginTop: '5px'}
        },
        /**
         * @member {Object} layout={ntype:'vbox',align:'stretch'}
         */
        layout: {ntype: 'vbox', align: 'stretch'}
    }}

    /**
     *
     * @param config
     */
    constructor(config) {
        super(config);
        this.createItems();
    }

    /**
     *
     */
    createItems() {
        let me            = this,
            weekComponent = me.getWeekComponent(),
            timeAxis      = weekComponent.timeAxis;

        me.items = [{
            module              : _form_field_Time_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            clearable           : true,
            clearToOriginalValue: true,
            labelText           : 'startTime',
            listeners           : {change: me.onTimeAxisConfigChange, scope: me},
            maxValue            : '10:00',
            minValue            : '00:00',
            name                : 'startTime',
            stepSize            : 60 * 60, // 1h
            style               : {},
            value               : timeAxis.startTime
        }, {
            module   : _form_field_Time_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            labelText: 'endTime',
            listeners: {change: me.onTimeAxisConfigChange, scope: me},
            maxValue : '23:00',
            minValue : '14:00',
            name     : 'endTime',
            stepSize : 60 * 60, // 1h
            value    : timeAxis.endTime !== '24:00' ? timeAxis.endTime : null
        }, {
            module              : _form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            clearable           : true,
            clearToOriginalValue: true,
            excludedValues      : [45],
            inputEditable       : false,
            labelText           : 'interval',
            listeners           : {change: me.onTimeAxisConfigChange, scope: me},
            maxValue            : 60,
            minValue            : 15,
            name                : 'interval',
            stepSize            : 15,
            value               : timeAxis.interval
        }, {
            module              : _form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            clearable           : true,
            clearToOriginalValue: true,
            labelText           : 'rowHeight',
            listeners           : {change: me.onTimeAxisConfigChange, scope: me},
            maxValue            : 100,
            minValue            : 8,
            name                : 'rowHeight',
            stepSize            : 2,
            value               : timeAxis.rowHeight
        }, {
            module        : _form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            checked       : weekComponent.timeAxisPosition === 'start',
            fieldValue    : 'start',
            hideValueLabel: false,
            labelText     : 'timeAxisPosition',
            listeners     : {change: me.onTimeAxisPositionChange, scope: me},
            name          : 'timeAxisPosition',
            valueLabelText: 'start'
        }, {
            module        : _form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            checked       : weekComponent.timeAxisPosition === 'end',
            fieldValue    : 'end',
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onTimeAxisPositionChange, scope: me},
            name          : 'timeAxisPosition',
            valueLabelText: 'end'
        }];

        super.createItems();
    }

    /**
     *
     * @returns {Neo.calendar.view.TimeAxisComponent}
     */
    getTimeAxis() {
        return this.getWeekComponent().timeAxis;
    }

    /**
     *
     * @returns {Neo.calendar.view.WeekComponent}
     */
    getWeekComponent() {
        return this.up('calendar-maincontainer').weekComponent;
    }

    /**
     *
     * @param {Object} data
     */
    onTimeAxisConfigChange(data) {
        this.getTimeAxis()[data.component.name] = data.value;
    }

    /**
     *
     * @param data
     */
    onTimeAxisPositionChange(data) {
        if (data.value) {
            this.getWeekComponent().timeAxisPosition = data.component.fieldValue;
        }
    }
}

Neo.applyClassConfig(WeekContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/src/calendar/view/settings/YearContainer.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/neo.mjs/src/calendar/view/settings/YearContainer.mjs ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return YearContainer; });
/* harmony import */ var _form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../form/field/CheckBox.mjs */ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs");
/* harmony import */ var _container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../form/field/Radio.mjs */ "./node_modules/neo.mjs/src/form/field/Radio.mjs");




/**
 * @class Neo.calendar.view.settings.YearContainer
 * @extends Neo.container.Base
 */
class YearContainer extends _container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.calendar.view.settings.YearContainer'
         * @protected
         */
        className: 'Neo.calendar.view.settings.YearContainer',
        /**
         * @member {Object} layout={ntype:'vbox',align:'stretch'}
         */
        layout: {ntype: 'vbox', align: 'stretch'}
    }}

    /**
     *
     * @param config
     */
    constructor(config) {
        super(config);
        this.createItems();
    }

    /**
     *
     */
    createItems() {
        let me            = this,
            labelWidth    = 160,
            yearComponent = me.getYearComponent();

        me.items = [{
            module        : _form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            checked       : yearComponent.monthNameFormat === 'short',
            fieldValue    : 'short',
            flex          : 'none',
            hideValueLabel: false,
            labelText     : 'monthNameFormat',
            labelWidth    : labelWidth,
            listeners     : {change: me.onRadioChange, scope: me},
            name          : 'monthNameFormat',
            valueLabelText: 'short'
        }, {
            module        : _form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            checked       : yearComponent.monthNameFormat === 'long',
            fieldValue    : 'long',
            flex          : 'none',
            hideValueLabel: false,
            labelText     : '',
            labelWidth    : labelWidth,
            listeners     : {change: me.onRadioChange, scope: me},
            name          : 'monthNameFormat',
            style         : {marginTop: '5px'},
            valueLabelText: 'long'
        }, {
            module    : _form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            checked   : yearComponent.showCellBorders,
            flex      : 'none',
            labelText : 'showCellBorders',
            labelWidth: labelWidth,
            listeners : {change: me.onConfigChange, scope: me},
            name      : 'showCellBorders',
            style     : {marginTop: '10px'}
        }, {
            module    : _form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            checked   : yearComponent.showWeekNumbers,
            flex      : 'none',
            labelText : 'showWeekNumbers',
            labelWidth: labelWidth,
            listeners : {change: me.onConfigChange, scope: me},
            name      : 'showWeekNumbers',
            style     : {marginTop: '10px'}
        }, {
            module    : _form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            checked   : yearComponent.sixWeeksPerMonth,
            flex      : 'none',
            labelText : 'sixWeeksPerMonth',
            labelWidth: labelWidth,
            listeners : {change: me.onConfigChange, scope: me},
            name      : 'sixWeeksPerMonth',
            style     : {marginTop: '10px'}
        }];

        super.createItems();
    }

    /**
     *
     * @returns {Neo.calendar.view.YearComponent}
     */
    getYearComponent() {
        return this.up('calendar-maincontainer').yearComponent;
    }

    /**
     *
     * @param {Object} data
     */
    onRadioChange(data) {
        if (data.value) {
            this.getYearComponent()[data.component.name] = data.component.fieldValue;
        }
    }

    /**
     *
     * @param {Object} data
     */
    onConfigChange(data) {
        this.getYearComponent()[data.component.name] = data.value;
    }
}

Neo.applyClassConfig(YearContainer);



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

/***/ "./node_modules/neo.mjs/src/draggable/DragProxyComponent.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/neo.mjs/src/draggable/DragProxyComponent.mjs ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DragProxyComponent; });
/* harmony import */ var _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class Neo.draggable.DragProxyComponent
 * @extends Neo.component.Base
 */
class DragProxyComponent extends _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.draggable.DragProxyComponent'
         * @protected
         */
        className: 'Neo.draggable.DragProxyComponent',
        /**
         * @member {String} ntype='dragproxy'
         * @protected
         */
        ntype: 'dragproxy',
        /**
         * @member {Boolean} autoMount=true
         */
        autoMount: true,
        /**
         * @member {Boolean} autoRender=true
         */
        autoRender: true,
        /**
         * @member {String[]} cls=['neo-dragproxy']
         */
        cls: ['neo-dragproxy'],
        /**
         * @member {Boolean} moveInMainThread=true
         */
        moveInMainThread: true
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        me.on('mounted', me.onMounted, me);
    }

    /**
     *
     * @param {String} id
     */
    onMounted(id) {
        if (this.moveInMainThread) {
            Neo.main.addon.DragDrop.setDragProxyElement({
                id: id
            });
        }
    }
}

Neo.applyClassConfig(DragProxyComponent);



/***/ }),

/***/ "./node_modules/neo.mjs/src/draggable/DragZone.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/neo.mjs/src/draggable/DragZone.mjs ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DragZone; });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _DragProxyComponent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DragProxyComponent.mjs */ "./node_modules/neo.mjs/src/draggable/DragProxyComponent.mjs");
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");




/**
 * @class Neo.draggable.DragZone
 * @extends Neo.core.Base
 */
class DragZone extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.draggable.DragZone'
         * @protected
         */
        className: 'Neo.draggable.DragZone',
        /**
         * @member {String} ntype='dragzone'
         * @protected
         */
        ntype: 'dragzone',
        /**
         * The name of the App this instance belongs to
         * @member {String|null} appName=null
         */
        appName: null,
        /**
         * @member {String|null} boundaryContainerId_=null
         */
        boundaryContainerId_: null,
        /**
         * The vdom (tree) of the element you want to drag
         * @member {Object|null} dragElement=null
         */
        dragElement: null,
        /**
         * @member {Neo.component.Base|null} dragProxy=null
         * @protected
         */
        dragProxy: null,
        /**
         * @member {Object|null} dragProxyConfig=null
         */
        dragProxyConfig: null,
        /**
         * @member {Boolean} moveHorizontal=true
         */
        moveHorizontal: true,
        /**
         * @member {Boolean} moveInMainThread=true
         */
        moveInMainThread: true,
        /**
         * @member {Boolean} moveVertical=true
         */
        moveVertical: true,
        /**
         * @member {Number} offsetX=0
         */
        offsetX: 0,
        /**
         * @member {Number} offsetY=0
         */
        offsetY: 0,
        /**
         * @member {String} proxyParentId_='document.body'
         */
        proxyParentId_: 'document.body',
        /**
         * @member {String|null} scrollContainerId_=null
         */
        scrollContainerId_: null,
        /**
         * @member {Number} scrollFactorLeft_=1
         */
        scrollFactorLeft_: 1,
        /**
         * @member {Number} scrollFactorTop_=1
         */
        scrollFactorTop_: 1,
        /**
         * True creates a position:absolute wrapper div which contains the cloned element
         * @member {Boolean} useProxyWrapper=true
         */
        useProxyWrapper: true
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        if (!Neo.main.addon.DragDrop) {
            throw new Error('You can not use Neo.draggable.DragZone without adding Neo.main.addon.DragDrop to the main thread addons');
        }
    }

    /**
     * Triggered after the scrollContainerId config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetScrollContainerId(value, oldValue) {
        if (value) {
            Neo.main.addon.DragDrop.setScrollContainer({
                id: value
            });
        }
    }

    /**
     * Triggered after the boundaryContainerId config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetBoundaryContainerId(value, oldValue) {
        if (value) {
            Neo.main.addon.DragDrop.setBoundaryContainer({
                id: value
            });
        }
    }

    /**
     * Triggered after the scrollFactorLeft config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetScrollFactorLeft(value, oldValue) {
        if (!(value === 1 && oldValue === undefined)) {
            Neo.main.addon.DragDrop.setScrollFactorLeft({
                value: value
            });
        }
    }

    /**
     * Triggered after the scrollFactorTop config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetScrollFactorTop(value, oldValue) {
        if (!(value === 1 && oldValue === undefined)) {
            Neo.main.addon.DragDrop.setScrollFactorTop({
                value: value
            });
        }
    }

    /**
     *
     * @param {Object} data
     */
    createDragProxy(data) {
        let me    = this,
            clone = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].clone(me.dragElement);

        const config = {
            module          : _DragProxyComponent_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            appName         : me.appName,
            moveInMainThread: me.moveInMainThread,
            parentId        : me.proxyParentId,
            vdom            : me.useProxyWrapper ? {cn: [clone]} : clone,

            style: {
                height: `${data.height}px`,
                left  : `${me.moveHorizontal ? data.left : 0}px`,
                top   : `${me.moveVertical   ? data.top  : 0}px`,
                width : `${data.width}px`
            },

            ...me.dragProxyConfig || {}
        };

        if (!me.useProxyWrapper) {
            config.cls = clone.cls;
        }

        me.dragProxy = Neo.create(config);
    }

    /**
     * Override for using custom animations
     */
    destroyDragProxy() {
        let me = this,
            id = me.dragProxy.id;

        setTimeout(() => {
            Neo.currentWorker.promiseMessage('main', {
                action: 'updateDom',
                deltas: [{action: 'removeNode', id: id}]
            });
        }, me.moveInMainThread ? 0 : 30);

        me.dragProxy.destroy();
    }

    /**
     *
     */
    dragEnd() {
        let me = this;

        if (me.dragProxy) {
            me.destroyDragProxy();
            me.dragProxy = null;
        }

        me.scrollContainerId = null;
    }

    /**
     *
     * @param {Object} data
     */
    dragMove(data) {
        let me = this,
            style;

        if (!me.moveInMainThread && me.dragProxy) {
            style = me.dragProxy.style;

            if (me.moveHorizontal) {
                style.left = `${data.clientX - me.offsetX}px`;
            }

            if (me.moveVertical) {
                style.top = `${data.clientY - me.offsetY}px`;
            }

            me.dragProxy.style = style;
        }
    }

    /**
     *
     * @param {Object} data
     */
    dragStart(data) {
        let me = this;

        Neo.main.DomAccess.getBoundingClientRect({
            id: me.dragElement.id
        }).then(rect => {
            me.offsetX = data.clientX - rect.left;
            me.offsetY = data.clientY - rect.top;

            me.createDragProxy(rect);
        });
    }
}

Neo.applyClassConfig(DragZone);



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9jYWxlbmRhci9iYXNpYy9NYWluQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9jYWxlbmRhci9iYXNpYy9NYWluQ29udGFpbmVyQ29udHJvbGxlci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvY2FsZW5kYXIvYmFzaWMvYXBwLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY2FsZW5kYXIvTWFpbkNvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NhbGVuZGFyL2RyYWdnYWJsZS9XZWVrRXZlbnREcmFnWm9uZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NhbGVuZGFyL21vZGVsL0NhbGVuZGFyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY2FsZW5kYXIvbW9kZWwvRXZlbnQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jYWxlbmRhci9zdG9yZS9DYWxlbmRhcnMubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jYWxlbmRhci9zdG9yZS9FdmVudHMubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jYWxlbmRhci92aWV3L0NhbGVuZGFyc0NvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NhbGVuZGFyL3ZpZXcvRGF5Q29tcG9uZW50Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY2FsZW5kYXIvdmlldy9Nb250aENvbXBvbmVudC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NhbGVuZGFyL3ZpZXcvU2V0dGluZ3NDb250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jYWxlbmRhci92aWV3L1RpbWVBeGlzQ29tcG9uZW50Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY2FsZW5kYXIvdmlldy9XZWVrQ29tcG9uZW50Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY2FsZW5kYXIvdmlldy9ZZWFyQ29tcG9uZW50Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY2FsZW5kYXIvdmlldy9zZXR0aW5ncy9HZW5lcmFsQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY2FsZW5kYXIvdmlldy9zZXR0aW5ncy9Nb250aENvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NhbGVuZGFyL3ZpZXcvc2V0dGluZ3MvV2Vla0NvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NhbGVuZGFyL3ZpZXcvc2V0dGluZ3MvWWVhckNvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRhaW5lci9WaWV3cG9ydC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2RyYWdnYWJsZS9EcmFnUHJveHlDb21wb25lbnQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9kcmFnZ2FibGUvRHJhZ1pvbmUubWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtRTtBQUNXO0FB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QkFBOEIsK0RBQWtCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxZQUFZOztBQUVoRTtBQUNBLDJCQUEyQixZQUFZO0FBQ3ZDLDJCQUEyQixrQ0FBa0M7QUFDN0QsMkJBQTJCLGtDQUFrQztBQUM3RCwyQkFBMkIsV0FBVztBQUN0QyxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw2QkFBNkI7QUFDdkQsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLDBCQUEwQjtBQUMxRDs7QUFFQTtBQUNBLCtCQUErQiwwQkFBMEI7QUFDekQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBIiwiZmlsZSI6InZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWNhbGVuZGFyLWJhc2ljLWFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvYnV0dG9uL0Jhc2UubWpzJztcbmltcG9ydCBDYWxlbmRhciAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvY2FsZW5kYXIvTWFpbkNvbnRhaW5lci5tanMnO1xuaW1wb3J0IE1haW5Db250YWluZXJDb250cm9sbGVyIGZyb20gJy4vTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIubWpzJztcbmltcG9ydCBUb29sYmFyICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvY29udGFpbmVyL1Rvb2xiYXIubWpzJztcbmltcG9ydCBWaWV3cG9ydCAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvY29udGFpbmVyL1ZpZXdwb3J0Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENhbGVuZGFyQmFzaWMuTWFpbkNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5WaWV3cG9ydFxuICovXG5jbGFzcyBNYWluQ29udGFpbmVyIGV4dGVuZHMgVmlld3BvcnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnQ2FsZW5kYXJCYXNpYy5NYWluQ29udGFpbmVyJyxcbiAgICAgICAgbnR5cGUgICAgOiAnY2FsZW5kYXItYmFzaWMtbWFpbmNvbnRhaW5lcicsXG5cbiAgICAgICAgYXV0b01vdW50IDogdHJ1ZSxcbiAgICAgICAgY29udHJvbGxlcjogTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIsXG4gICAgICAgIGxheW91dCAgICA6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcblxuICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgIG1vZHVsZSA6IFRvb2xiYXIsXG4gICAgICAgICAgICBmbGV4ICAgOiAnbm9uZScsXG4gICAgICAgICAgICBwYWRkaW5nOiAyMCxcbiAgICAgICAgICAgIHJlZmVyZW5jZTogJ2hlYWRlclRvb2xiYXInLFxuXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmMmYyZjInLFxuICAgICAgICAgICAgICAgIHBhZGRpbmcgICAgICAgIDogJzEwcHggNXB4IDEwcHggMTBweCdcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgICAgICBjbHMgIDogWyduZW8taGVhZGVyJ10sXG4gICAgICAgICAgICAgICAgaHRtbCA6ICc8aSBjbGFzcz1cImZhIGZhLWNhbGVuZGFyXCI+PC9pPm5lby5tanMgQ2FsZW5kYXIgKFNuZWFrIFByZXZpZXcpJ1xuICAgICAgICAgICAgfSwgJy0+Jywge1xuICAgICAgICAgICAgICAgIG1vZHVsZSA6IEJ1dHRvbixcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiAnb25Td2l0Y2hUaGVtZUJ1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQgOiAyNyxcbiAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtbW9vbicsXG4gICAgICAgICAgICAgICAgdGV4dCAgIDogJ1RoZW1lIERhcmsnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlIDogQnV0dG9uLFxuICAgICAgICAgICAgICAgIGhlaWdodCA6IDI3LFxuICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYWIgZmEtZ2l0aHViJyxcbiAgICAgICAgICAgICAgICBzdHlsZSAgOiB7bWFyZ2luTGVmdDogJzVweCd9LFxuICAgICAgICAgICAgICAgIHRleHQgICA6ICdHaXRIdWInLFxuICAgICAgICAgICAgICAgIHVybCAgICA6ICdodHRwczovL2dpdGh1Yi5jb20vbmVvbWpzL25lby90cmVlL2Rldi9zcmMvY2FsZW5kYXInXG4gICAgICAgICAgICB9XVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgIDogQ2FsZW5kYXIsXG4gICAgICAgICAgICBjdXJyZW50RGF0ZTogbmV3IERhdGUoJzIwMjAtMDctMjAnKSxcbiAgICAgICAgICAgIGZsZXggICAgICAgOiAxLFxuICAgICAgICAgICAgcmVmZXJlbmNlICA6ICdjYWxlbmRhcicsXG5cbiAgICAgICAgICAgIGNhbGVuZGFyU3RvcmVDb25maWc6IHtcbiAgICAgICAgICAgICAgICBhdXRvTG9hZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1cmwgICAgIDogJy4uLy4uL2V4YW1wbGVzL2NhbGVuZGFyL2Jhc2ljL2RhdGEvY2FsZW5kYXJzLmpzb24nXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBldmVudFN0b3JlQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgYXV0b0xvYWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdXJsICAgICA6ICcuLi8uLi9leGFtcGxlcy9jYWxlbmRhci9iYXNpYy9kYXRhL2V2ZW50cy5qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5Db250YWluZXIpO1xuXG5leHBvcnQge01haW5Db250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbXBvbmVudENvbnRyb2xsZXIgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXIvQ29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvdXRpbC9BcnJheS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBDYWxlbmRhckJhc2ljLk1haW5Db250YWluZXJDb250cm9sbGVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udHJvbGxlci5Db21wb25lbnRcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnRDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nQ2FsZW5kYXJCYXNpYy5NYWluQ29udGFpbmVyQ29udHJvbGxlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnQ2FsZW5kYXJCYXNpYy5NYWluQ29udGFpbmVyQ29udHJvbGxlcidcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uU3dpdGNoVGhlbWVCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGJ1dHRvbiAgICAgICAgPSBkYXRhLmNvbXBvbmVudCxcbiAgICAgICAgICAgIGhlYWRlclRvb2xiYXIgPSBtZS5nZXRSZWZlcmVuY2UoJ2hlYWRlclRvb2xiYXInKSxcbiAgICAgICAgICAgIHZpZXcgICAgICAgICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgYnV0dG9uVGV4dCwgY2xzLCBoZWFkZXJDb2xvciwgaWNvbkNscywgdGhlbWU7XG5cbiAgICAgICAgaWYgKGJ1dHRvbi50ZXh0ID09PSAnVGhlbWUgTGlnaHQnKSB7XG4gICAgICAgICAgICBidXR0b25UZXh0ICA9ICdUaGVtZSBEYXJrJztcbiAgICAgICAgICAgIGhlYWRlckNvbG9yID0gJyNmMmYyZjInO1xuICAgICAgICAgICAgaWNvbkNscyAgICAgPSAnZmEgZmEtbW9vbic7XG4gICAgICAgICAgICB0aGVtZSAgICAgICA9ICduZW8tdGhlbWUtbGlnaHQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnV0dG9uVGV4dCAgPSAnVGhlbWUgTGlnaHQnO1xuICAgICAgICAgICAgaGVhZGVyQ29sb3IgPSAnIzMzMzQzZCc7XG4gICAgICAgICAgICBpY29uQ2xzICAgICA9ICdmYSBmYS1zdW4nO1xuICAgICAgICAgICAgdGhlbWUgICAgICAgPSAnbmVvLXRoZW1lLWRhcmsnO1xuICAgICAgICB9XG5cbiAgICAgICAgY2xzID0gWy4uLnZpZXcuY2xzXTtcblxuICAgICAgICB2aWV3LmNscy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uaW5jbHVkZXMoJ25lby10aGVtZScpKSB7XG4gICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIE5lb0FycmF5LmFkZChjbHMsIHRoZW1lKTtcbiAgICAgICAgdmlldy5jbHMgPSBjbHM7XG5cbiAgICAgICAgYnV0dG9uLnNldCh7XG4gICAgICAgICAgICBpY29uQ2xzOiBpY29uQ2xzLFxuICAgICAgICAgICAgdGV4dCAgIDogYnV0dG9uVGV4dFxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgc3R5bGUgPSBoZWFkZXJUb29sYmFyLnN0eWxlIHx8IHt9O1xuICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBoZWFkZXJDb2xvcjtcbiAgICAgICAgaGVhZGVyVG9vbGJhci5zdHlsZSA9IHN0eWxlO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIpO1xuXG5leHBvcnQge01haW5Db250YWluZXJDb250cm9sbGVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gJy4vTWFpbkNvbnRhaW5lci5tanMnO1xuXG5jb25zdCBvblN0YXJ0ID0gKCkgPT4gTmVvLmFwcCh7XG4gICAgYXBwUGF0aCA6ICdleGFtcGxlcy9jYWxlbmRhci9iYXNpYy8nLFxuICAgIG1haW5WaWV3OiBNYWluQ29udGFpbmVyLFxuICAgIG5hbWUgICAgOiAnQ2FsZW5kYXJCYXNpYydcbn0pO1xuXG5leHBvcnQge29uU3RhcnQgYXMgb25TdGFydH07IiwiaW1wb3J0IENhbGVuZGFyc0NvbnRhaW5lciBmcm9tICcuL3ZpZXcvQ2FsZW5kYXJzQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgQ2FsZW5kYXJTdG9yZSAgICAgIGZyb20gJy4vc3RvcmUvQ2FsZW5kYXJzLm1qcyc7XG5pbXBvcnQgQ2xhc3NTeXN0ZW1VdGlsICAgIGZyb20gJy4uL3V0aWwvQ2xhc3NTeXN0ZW0ubWpzJztcbmltcG9ydCBDb250YWluZXIgICAgICAgICAgZnJvbSAnLi4vY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBEYXRlU2VsZWN0b3IgICAgICAgZnJvbSAnLi4vY29tcG9uZW50L0RhdGVTZWxlY3Rvci5tanMnO1xuaW1wb3J0IERhdGVVdGlsICAgICAgICAgICBmcm9tICcuLi91dGlsL0RhdGUubWpzJztcbmltcG9ydCBEYXlDb21wb25lbnQgICAgICAgZnJvbSAnLi92aWV3L0RheUNvbXBvbmVudC5tanMnO1xuaW1wb3J0IEV2ZW50U3RvcmUgICAgICAgICBmcm9tICcuL3N0b3JlL0V2ZW50cy5tanMnO1xuaW1wb3J0IE1vbnRoQ29tcG9uZW50ICAgICBmcm9tICcuL3ZpZXcvTW9udGhDb21wb25lbnQubWpzJztcbmltcG9ydCBTZXR0aW5nc0NvbnRhaW5lciAgZnJvbSAnLi92aWV3L1NldHRpbmdzQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgVG9vbGJhciAgICAgICAgICAgIGZyb20gJy4uL2NvbnRhaW5lci9Ub29sYmFyLm1qcyc7XG5pbXBvcnQgV2Vla0NvbXBvbmVudCAgICAgIGZyb20gJy4vdmlldy9XZWVrQ29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgWWVhckNvbXBvbmVudCAgICAgIGZyb20gJy4vdmlldy9ZZWFyQ29tcG9uZW50Lm1qcyc7XG5cbmNvbnN0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKCk7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jYWxlbmRhci5NYWluQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWQgZW50cmllcyBmb3IgdGhlIHZpZXdzIGNvbmZpZ1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gdmFsaWRWaWV3cz1bJ2RheScsICd3ZWVrJywgJ21vbnRoJywgJ3llYXInXVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICB2YWxpZFZpZXdzOiBbJ2RheScsICd3ZWVrJywgJ21vbnRoJywgJ3llYXInXVxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNhbGVuZGFyLk1haW5Db250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jYWxlbmRhci5NYWluQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NhbGVuZGFyLW1haW5jb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY2FsZW5kYXItbWFpbmNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY3VycmVudGx5IGFjdGl2ZSB2aWV3LiBNdXN0IGJlIGEgdmFsdWUgaW5jbHVkZWQgaW5zaWRlIHRoZSB2aWV3cyBjb25maWcuXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYWN0aXZlVmlld189J3dlZWsnXG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmVWaWV3XzogJ3dlZWsnLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2NhbGUgdGhlIGNhbGVuZGFyIHdpdGggdXNpbmcgcyBkaWZmZXJlbnQgYmFzZSBmb250LXNpemVcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IGJhc2VGb250U2l6ZV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgYmFzZUZvbnRTaXplXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jYWxlbmRhci52aWV3LkNhbGVuZGFyc0NvbnRhaW5lcnxudWxsfSBjYWxlbmRhcnNDb250YWluZXI9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgY2FsZW5kYXJzQ29udGFpbmVyOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNhbGVuZGFyLnN0b3JlLkNhbGVuZGFyc3xudWxsfSBjYWxlbmRhclN0b3JlXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBjYWxlbmRhclN0b3JlXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBjYWxlbmRhclN0b3JlQ29uZmlnPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGNhbGVuZGFyU3RvcmVDb25maWc6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWNvbnRhaW5lciddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWNhbGVuZGFyLW1haW5jb250YWluZXInLCAnbmVvLWNvbnRhaW5lciddLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGF0ZSBpbnNpZGUgYWxsIHZpZXdzXG4gICAgICAgICAqIEBtZW1iZXIge0RhdGV9IGN1cnJlbnREYXRlXz1uZXcgRGF0ZSgpXG4gICAgICAgICAqL1xuICAgICAgICBjdXJyZW50RGF0ZV86IHRvZGF5RGF0ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb21wb25lbnQuRGF0ZVNlbGVjdG9yfG51bGx9IGRhdGVTZWxlY3Rvcj1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBkYXRlU2VsZWN0b3I6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gZGF0ZVNlbGVjdG9yQ29uZmlnPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGRhdGVTZWxlY3RvckNvbmZpZzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jYWxlbmRhci52aWV3LkRheUNvbXBvbmVudHxudWxsfSBkYXlDb21wb25lbnQ9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZGF5Q29tcG9uZW50OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IGRheUNvbXBvbmVudENvbmZpZz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBkYXlDb21wb25lbnRDb25maWc6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY2FsZW5kYXIuc3RvcmUuRXZlbnRzfG51bGx9IGV2ZW50U3RvcmVfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGV2ZW50U3RvcmVfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IGV2ZW50U3RvcmVDb25maWc9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZXZlbnRTdG9yZUNvbmZpZzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbGF5b3V0PXtudHlwZTondmJveCcsYWxpZ246J3N0cmV0Y2gnfVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbG9jYWxlXz1OZW8uY29uZmlnLmxvY2FsZVxuICAgICAgICAgKi9cbiAgICAgICAgbG9jYWxlXzogTmVvLmNvbmZpZy5sb2NhbGUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY2FsZW5kYXIudmlldy5Nb250aENvbXBvbmVudHxudWxsfSBtb250aENvbXBvbmVudD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBtb250aENvbXBvbmVudDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBtb250aENvbXBvbmVudENvbmZpZz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBtb250aENvbXBvbmVudENvbmZpZzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgdG8gb25seSBrZWVwIHRoZSBhY3RpdmUgdmlldyBpbnNpZGUgdGhlIERPTVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSByZW1vdmVJbmFjdGl2ZUNhcmRzPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHJlbW92ZUluYWN0aXZlQ2FyZHM6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHRvIHNjcm9sbCBuZXcgeWVhcnMgaW4gZnJvbSB0aGUgdG9wXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNjcm9sbE5ld1llYXJGcm9tVG9wXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgc2Nyb2xsTmV3WWVhckZyb21Ub3BfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBzZXR0aW5nc0NvbnRhaW5lckNvbmZpZz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzZXR0aW5nc0NvbnRhaW5lckNvbmZpZzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gc2V0dGluZ3NDb250YWluZXJXaWR0aD0zMDBcbiAgICAgICAgICovXG4gICAgICAgIHNldHRpbmdzQ29udGFpbmVyV2lkdGg6IDMxMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNldHRpbmdzRXhwYW5kZWRfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBzZXR0aW5nc0V4cGFuZGVkXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaG93V2Vla2VuZHNfPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHNob3dXZWVrZW5kc186IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaWRlQmFyRXhwYW5kZWRfPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHNpZGVCYXJFeHBhbmRlZF86IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHNpZGVCYXJXaWR0aD0yMjBcbiAgICAgICAgICovXG4gICAgICAgIHNpZGVCYXJXaWR0aDogMjIwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gdXNlU2V0dGluZ3NDb250YWluZXJfPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHVzZVNldHRpbmdzQ29udGFpbmVyXzogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFueSBjb21iaW5hdGlvbiBhbmQgb3JkZXIgb2YgJ2RheScsICd3ZWVrJywgJ21vbnRoJywgJ3llYXInXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSB2aWV3c189WydkYXknLCAnd2VlaycsICdtb250aCcsICd5ZWFyJ11cbiAgICAgICAgICovXG4gICAgICAgIHZpZXdzXzogWydkYXknLCAnd2VlaycsICdtb250aCcsICd5ZWFyJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY2FsZW5kYXIudmlldy5XZWVrQ29tcG9uZW50fG51bGx9IHdlZWtDb21wb25lbnQ9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgd2Vla0NvbXBvbmVudDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSB3ZWVrQ29tcG9uZW50Q29uZmlnPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHdlZWtDb21wb25lbnRDb25maWc6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAwLTYgPT4gU3VuLVNhdFxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHdlZWtTdGFydERheV89MFxuICAgICAgICAgKi9cbiAgICAgICAgd2Vla1N0YXJ0RGF5XzogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jYWxlbmRhci52aWV3LlllYXJDb21wb25lbnR8bnVsbH0geWVhckNvbXBvbmVudD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB5ZWFyQ29tcG9uZW50OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IHllYXJDb21wb25lbnRDb25maWc9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgeWVhckNvbXBvbmVudENvbmZpZzogbnVsbFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmNyZWF0ZUl0ZW1zQ29udGVudCgpO1xuXG4gICAgICAgIGlmICghbWUuc2lkZUJhckV4cGFuZGVkKSB7XG4gICAgICAgICAgICBtZS5hZnRlclNldFNpZGVCYXJFeHBhbmRlZChmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGJhc2VGb250U2l6ZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRCYXNlRm9udFNpemUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXQgc3R5bGUgPSB0aGlzLnN0eWxlIHx8IHt9O1xuXG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHN0eWxlLmZvbnRTaXplO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHlsZS5mb250U2l6ZSA9IGAke3ZhbHVlfXB4YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBjdXJyZW50RGF0ZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiB0b2RvOiBPbmx5IHVwZGF0ZSB0aGUgYWN0aXZlIHZpZXcsIGFkanVzdCB0aGUgc3RhdGUgb24gY2FyZCBjaGFuZ2VcbiAgICAgKiBAcGFyYW0ge0RhdGV9IHZhbHVlXG4gICAgICogQHBhcmFtIHtEYXRlfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEN1cnJlbnREYXRlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAgICAgbWUud2Vla0NvbXBvbmVudC5jdXJyZW50RGF0ZSA9IHZhbHVlO1xuICAgICAgICAgICAgbWUueWVhckNvbXBvbmVudC5jdXJyZW50RGF0ZSA9IHZhbHVlO1xuICAgICAgICAgICAgbWUuZGF0ZVNlbGVjdG9yIC52YWx1ZSAgICAgICA9IERhdGVVdGlsLmNvbnZlcnRUb3l5eXltbWRkKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbG9jYWxlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldExvY2FsZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Vmlld0NvbmZpZygnbG9jYWxlJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBldmVudFN0b3JlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEV2ZW50U3RvcmUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLndlZWtDb21wb25lbnQuZXZlbnRTdG9yZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBzaG93V2Vla2VuZHMgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTaG93V2Vla2VuZHModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFZpZXdDb25maWcoJ3Nob3dXZWVrZW5kcycsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc2V0dGluZ3NFeHBhbmRlZCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFNldHRpbmdzRXhwYW5kZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChOZW8uaXNCb29sZWFuKG9sZFZhbHVlKSkge1xuICAgICAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBzZXR0aW5nc0NvbnRhaW5lciA9IG1lLml0ZW1zWzFdLml0ZW1zWzJdO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzZXR0aW5nc0NvbnRhaW5lci5leHBhbmQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0dGluZ3NDb250YWluZXIuY29sbGFwc2UobWUuc2V0dGluZ3NDb250YWluZXJXaWR0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHNjcm9sbE5ld1llYXJGcm9tVG9wIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFNjcm9sbE5ld1llYXJGcm9tVG9wKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5kYXRlU2VsZWN0b3IgLnNjcm9sbE5ld1llYXJGcm9tVG9wID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnllYXJDb21wb25lbnQuc2Nyb2xsTmV3WWVhckZyb21Ub3AgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc2lkZUJhckV4cGFuZGVkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U2lkZUJhckV4cGFuZGVkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHNpZGVCYXIgPSBtZS5pdGVtc1sxXS5pdGVtc1swXSxcbiAgICAgICAgICAgICAgICBzdHlsZSAgID0gc2lkZUJhci5zdHlsZSB8fCB7fSxcbiAgICAgICAgICAgICAgICB2ZG9tO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgc2lkZUJhci52ZG9tLnJlbW92ZURvbTtcblxuICAgICAgICAgICAgICAgIG1lLnByb21pc2VWZG9tVXBkYXRlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNpZGVCYXIubW91bnRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZS5tYXJnaW5MZWZ0ID0gJzBweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWRlQmFyLnN0eWxlID0gc3R5bGU7XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3R5bGUubWFyZ2luTGVmdCAgICA9IGAtJHttZS5zaWRlQmFyV2lkdGh9cHhgO1xuICAgICAgICAgICAgICAgIHNpZGVCYXIuX3N0eWxlICAgICAgPSBzdHlsZTsgLy8gc2lsZW50IHVwZGF0ZVxuICAgICAgICAgICAgICAgIHNpZGVCYXIuX3Zkb20uc3R5bGUgPSBzdHlsZTsgLy8gc2lsZW50IHVwZGF0ZVxuXG4gICAgICAgICAgICAgICAgbWUucHJvbWlzZVZkb21VcGRhdGUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZG9tID0gc2lkZUJhci52ZG9tO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmRvbS5yZW1vdmVEb20gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZUJhci52ZG9tID0gdmRvbTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNDAwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgd2Vla1N0YXJ0RGF5IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFdlZWtTdGFydERheSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Vmlld0NvbmZpZygnd2Vla1N0YXJ0RGF5JywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgY2FsZW5kYXJTdG9yZSBjb25maWcgZ2V0cyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7TmVvLmNhbGVuZGFyLnN0b3JlLkNhbGVuZGFyc30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge05lby5jYWxlbmRhci5zdG9yZS5DYWxlbmRhcnN9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldENhbGVuZGFyU3RvcmUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICBvbGRWYWx1ZS5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQ2xhc3NTeXN0ZW1VdGlsLmJlZm9yZVNldEluc3RhbmNlKHZhbHVlLCBDYWxlbmRhclN0b3JlLCB7XG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHtsb2FkOiBtZS5vbkNhbGVuZGFyU3RvcmVMb2FkLCBzY29wZTogbWV9LFxuICAgICAgICAgICAgLi4ubWUuY2FsZW5kYXJTdG9yZUNvbmZpZyB8fCB7fVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBldmVudFN0b3JlIGNvbmZpZyBnZXRzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtOZW8uY2FsZW5kYXIuc3RvcmUuRXZlbnRzfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TmVvLmNhbGVuZGFyLnN0b3JlLkV2ZW50c30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0RXZlbnRTdG9yZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBDbGFzc1N5c3RlbVV0aWwuYmVmb3JlU2V0SW5zdGFuY2UodmFsdWUsIEV2ZW50U3RvcmUsIHtcbiAgICAgICAgICAgIGxpc3RlbmVyczoge2xvYWQ6IG1lLm9uRXZlbnRTdG9yZUxvYWQsIHNjb3BlOiBtZX0sXG4gICAgICAgICAgICAuLi5tZS5ldmVudFN0b3JlQ29uZmlnIHx8IHt9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIHZpZXdzIGNvbmZpZyBnZXRzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ1tdfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRWaWV3cyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZhbGlkVmlld3MgPSB0aGlzLmdldFN0YXRpY0NvbmZpZygndmFsaWRWaWV3cycpO1xuXG4gICAgICAgIHZhbHVlLmZvckVhY2godmlldyA9PiB7XG4gICAgICAgICAgICBpZiAoIXZhbGlkVmlld3MuaW5jbHVkZXModmlldykpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHZpZXcsICdpcyBub3QgYSB2YWxpZCBlbnRyeSBmb3Igdmlld3MuIFN0aWNrIHRvOicsIHZhbGlkVmlld3MpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvbGRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGludGVydmFsXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGNoYW5nZVRpbWVJbnRlcnZhbChpbnRlcnZhbCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLml0ZW1zWzFdLml0ZW1zWzFdLmxheW91dC5hY3RpdmVJbmRleCA9IG1lLnZpZXdzLmluZGV4T2YoaW50ZXJ2YWwpO1xuXG4gICAgICAgIG1lLml0ZW1zWzBdLml0ZW1zWzFdLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS50b2dnbGVHcm91cCA9PT0gJ3RpbWVJbnRlcnZhbCcpIHtcbiAgICAgICAgICAgICAgICBpdGVtLnByZXNzZWQgPSBpdGVtLnZhbHVlID09PSBpbnRlcnZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuYWN0aXZlVmlldyA9IGludGVydmFsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZVtdfVxuICAgICAqL1xuICAgIGNyZWF0ZUhlYWRlckl0ZW1zKCkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgaXRlbXMgPSBbe1xuICAgICAgICAgICAgbW9kdWxlOiBUb29sYmFyLFxuICAgICAgICAgICAgY2xzICAgOiBbJ25lby1jYWxlbmRhci1oZWFkZXItdG9vbGJhcicsICduZW8tbGVmdCcsICduZW8tdG9vbGJhciddLFxuICAgICAgICAgICAgd2lkdGggOiBtZS5zaWRlQmFyV2lkdGgsXG4gICAgICAgICAgICBpdGVtcyA6IFt7XG4gICAgICAgICAgICAgICAgaGFuZGxlcjogbWUudG9nZ2xlU2lkZWJhci5iaW5kKG1lKSxcbiAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtYmFycydcbiAgICAgICAgICAgIH0sICctPicsIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBtZS5vblByZXZpb3VzSW50ZXJ2YWxCdXR0b25DbGljay5iaW5kKG1lKSxcbiAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtY2hldnJvbi1sZWZ0JyxcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBtZS5vblRvZGF5QnV0dG9uQ2xpY2suYmluZChtZSksXG4gICAgICAgICAgICAgICAgaGVpZ2h0IDogMjQsXG4gICAgICAgICAgICAgICAgdGV4dCAgIDogJ1RvZGF5J1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGhhbmRsZXI6IG1lLm9uTmV4dEludGVydmFsQnV0dG9uQ2xpY2suYmluZChtZSksXG4gICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWNoZXZyb24tcmlnaHQnXG4gICAgICAgICAgICB9XVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGU6IFRvb2xiYXIsXG4gICAgICAgICAgICBjbHMgICA6IFsnbmVvLWNhbGVuZGFyLWhlYWRlci10b29sYmFyJywgJ25lby10b29sYmFyJ10sXG4gICAgICAgICAgICBpdGVtcyA6IFsnLT4nLCAuLi5tZS5jcmVhdGVWaWV3SGVhZGVyQnV0dG9ucygpXVxuICAgICAgICB9XTtcblxuICAgICAgICBpZiAobWUudXNlU2V0dGluZ3NDb250YWluZXIpIHtcbiAgICAgICAgICAgIGl0ZW1zWzFdLml0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICAgIGhhbmRsZXI6IG1lLnRvZ2dsZVNldHRpbmdzLmJpbmQobWUpLFxuICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1jb2cnLFxuICAgICAgICAgICAgICAgIHN0eWxlICA6IHttYXJnaW5MZWZ0OiAnMTBweCd9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtc0NvbnRlbnQoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuY2FsZW5kYXJzQ29udGFpbmVyID0gTmVvLmNyZWF0ZSh7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgOiBDYWxlbmRhcnNDb250YWluZXIsXG4gICAgICAgICAgICBjYWxlbmRhclN0b3JlOiBtZS5jYWxlbmRhclN0b3JlLFxuICAgICAgICAgICAgZmxleCAgICAgICAgIDogMVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5kYXRlU2VsZWN0b3IgPSBOZW8uY3JlYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICAgICAgICAgOiBEYXRlU2VsZWN0b3IsXG4gICAgICAgICAgICBmbGV4ICAgICAgICAgICAgICAgIDogJ25vbmUnLFxuICAgICAgICAgICAgaGVpZ2h0ICAgICAgICAgICAgICA6IG1lLnNpZGVCYXJXaWR0aCxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgICAgICAgICAgOiB7Y2hhbmdlOiBtZS5vbkRhdGVTZWxlY3RvckNoYW5nZSwgc2NvcGU6IG1lfSxcbiAgICAgICAgICAgIGxvY2FsZSAgICAgICAgICAgICAgOiBtZS5sb2NhbGUsXG4gICAgICAgICAgICBzY3JvbGxOZXdZZWFyRnJvbVRvcDogbWUuc2Nyb2xsTmV3WWVhckZyb21Ub3AsXG4gICAgICAgICAgICBzaG93V2Vla2VuZHMgICAgICAgIDogbWUuc2hvd1dlZWtlbmRzLFxuICAgICAgICAgICAgdmFsdWUgICAgICAgICAgICAgICA6IERhdGVVdGlsLmNvbnZlcnRUb3l5eXltbWRkKG1lLmN1cnJlbnREYXRlKSxcbiAgICAgICAgICAgIHdlZWtTdGFydERheSAgICAgICAgOiBtZS53ZWVrU3RhcnREYXksXG4gICAgICAgICAgICAuLi5tZS5kYXRlU2VsZWN0b3JDb25maWcgfHwge31cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuaXRlbXMgPSBbe1xuICAgICAgICAgICAgbW9kdWxlOiBDb250YWluZXIsXG4gICAgICAgICAgICBmbGV4ICA6ICdub25lJyxcbiAgICAgICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAgICAgaXRlbXMgOiBtZS5jcmVhdGVIZWFkZXJJdGVtcygpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZTogQ29udGFpbmVyLFxuICAgICAgICAgICAgZmxleCAgOiAxLFxuICAgICAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgICAgICBpdGVtcyA6IFt7XG4gICAgICAgICAgICAgICAgbW9kdWxlOiBDb250YWluZXIsXG4gICAgICAgICAgICAgICAgY2xzICAgOiBbJ25lby1jYWxlbmRhci1zaWRlYmFyJywgJ25lby1jb250YWluZXInXSxcbiAgICAgICAgICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgICAgICAgICB3aWR0aCA6IG1lLnNpZGVCYXJXaWR0aCxcbiAgICAgICAgICAgICAgICBpdGVtcyA6IFttZS5kYXRlU2VsZWN0b3IsIG1lLmNhbGVuZGFyc0NvbnRhaW5lcl1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBtb2R1bGU6IENvbnRhaW5lcixcbiAgICAgICAgICAgICAgICBmbGV4ICA6IDEsXG4gICAgICAgICAgICAgICAgaXRlbXMgOiBtZS5jcmVhdGVWaWV3cygpLFxuICAgICAgICAgICAgICAgIGxheW91dDoge1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgICAgICAgICAgICAgOiAnY2FyZCcsXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUluZGV4ICAgICAgICA6IG1lLnZpZXdzLmluZGV4T2YobWUuYWN0aXZlVmlldyksXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUluYWN0aXZlQ2FyZHM6IG1lLnJlbW92ZUluYWN0aXZlQ2FyZHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XVxuICAgICAgICB9XTtcblxuICAgICAgICBpZiAobWUudXNlU2V0dGluZ3NDb250YWluZXIpIHtcbiAgICAgICAgICAgIG1lLml0ZW1zWzFdLml0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICAgIG1vZHVsZTogU2V0dGluZ3NDb250YWluZXIsXG4gICAgICAgICAgICAgICAgcmVtb3ZlSW5hY3RpdmVDYXJkczogbWUucmVtb3ZlSW5hY3RpdmVDYXJkcyxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICAgICAgICAgICAgOiB7bWFyZ2luUmlnaHQ6IG1lLnNldHRpbmdzRXhwYW5kZWQgPyAnMCcgOiBgLSR7bWUuc2V0dGluZ3NDb250YWluZXJXaWR0aH1weGB9LFxuICAgICAgICAgICAgICAgIHdpZHRoICAgICAgICAgICAgICA6IG1lLnNldHRpbmdzQ29udGFpbmVyV2lkdGgsXG4gICAgICAgICAgICAgICAgLi4ubWUuc2V0dGluZ3NDb250YWluZXJDb25maWdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlW119XG4gICAgICovXG4gICAgY3JlYXRlVmlld0hlYWRlckJ1dHRvbnMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBhY3RpdmVJbmRleCA9IG1lLnZpZXdzLmluZGV4T2YobWUuYWN0aXZlVmlldyksXG4gICAgICAgICAgICBidXR0b25zICAgICA9IFtdO1xuXG4gICAgICAgIG1lLnZpZXdzLmZvckVhY2goKHZpZXcsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBidXR0b25zLnB1c2goe1xuICAgICAgICAgICAgICAgIGhhbmRsZXIgICAgOiBtZS5jaGFuZ2VUaW1lSW50ZXJ2YWwuYmluZChtZSwgdmlldyksXG4gICAgICAgICAgICAgICAgaGVpZ2h0ICAgICA6IDI0LFxuICAgICAgICAgICAgICAgIHByZXNzZWQgICAgOiBhY3RpdmVJbmRleCA9PT0gaW5kZXgsXG4gICAgICAgICAgICAgICAgdGV4dCAgICAgICA6IE5lby5jYXBpdGFsaXplKHZpZXcpLFxuICAgICAgICAgICAgICAgIHRvZ2dsZUdyb3VwOiAndGltZUludGVydmFsJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICAgIDogdmlld1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBidXR0b25zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZVtdfVxuICAgICAqL1xuICAgIGNyZWF0ZVZpZXdzKCkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgY2FyZHMgPSBbXSxcbiAgICAgICAgICAgIGNtcDtcblxuICAgICAgICBjb25zdCBkZWZhdWx0Q29uZmlnID0ge1xuICAgICAgICAgICAgY3VycmVudERhdGUgOiBtZS5jdXJyZW50RGF0ZSxcbiAgICAgICAgICAgIGV2ZW50U3RvcmUgIDogbWUuZXZlbnRTdG9yZSxcbiAgICAgICAgICAgIGxvY2FsZSAgICAgIDogbWUubG9jYWxlLFxuICAgICAgICAgICAgc2hvd1dlZWtlbmRzOiBtZS5zaG93V2Vla2VuZHMsXG4gICAgICAgICAgICB3ZWVrU3RhcnREYXk6IG1lLndlZWtTdGFydERheVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG1hcCA9IHtcbiAgICAgICAgICAgIGRheToge1xuICAgICAgICAgICAgICAgIG1vZHVsZTogRGF5Q29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHN0eWxlIDoge3BhZGRpbmc6ICcyMHB4J30sXG4gICAgICAgICAgICAgICAgLi4uZGVmYXVsdENvbmZpZyxcbiAgICAgICAgICAgICAgICAuLi5tZS5kYXlDb21wb25lbnRDb25maWcgfHwge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb250aDoge1xuICAgICAgICAgICAgICAgIG1vZHVsZTogTW9udGhDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgLi4uZGVmYXVsdENvbmZpZyxcbiAgICAgICAgICAgICAgICAuLi5tZS5tb250aENvbXBvbmVudENvbmZpZyB8fCB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdlZWs6IHtcbiAgICAgICAgICAgICAgICBtb2R1bGU6IFdlZWtDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgLi4uZGVmYXVsdENvbmZpZyxcbiAgICAgICAgICAgICAgICAuLi5tZS53ZWVrQ29tcG9uZW50Q29uZmlnIHx8IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeWVhcjoge1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgICAgICAgICAgICAgOiBZZWFyQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHNjcm9sbE5ld1llYXJGcm9tVG9wOiBtZS5zY3JvbGxOZXdZZWFyRnJvbVRvcCxcbiAgICAgICAgICAgICAgICAuLi5kZWZhdWx0Q29uZmlnLFxuICAgICAgICAgICAgICAgIC4uLm1lLnllYXJDb21wb25lbnRDb25maWcgfHwge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnZpZXdzLmZvckVhY2godmlldyA9PiB7XG4gICAgICAgICAgICBtZVt2aWV3ICsgJ0NvbXBvbmVudCddID0gY21wID0gTmVvLmNyZWF0ZShtYXBbdmlld10pO1xuICAgICAgICAgICAgY2FyZHMucHVzaChjbXApO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY2FyZHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBkZXN0cm95KC4uLmFyZ3MpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAvLyByZW1vdmUgcmVmZXJlbmNlcywgdGhlIHN1cGVyIGNhbGwgd2lsbCByZW1vdmUgY29tcG9uZW50IHRyZWUgYmFzZWQgaW5zdGFuY2VzXG4gICAgICAgIG1lLmNhbGVuZGFyc0NvbnRhaW5lciA9IG51bGw7XG4gICAgICAgIG1lLmRhdGVTZWxlY3RvciAgICAgICA9IG51bGw7XG4gICAgICAgIG1lLmRheUNvbXBvbmVudCAgICAgICA9IG51bGw7XG4gICAgICAgIG1lLm1vbnRoQ29tcG9uZW50ICAgICA9IG51bGw7XG4gICAgICAgIG1lLndlZWtDb21wb25lbnQgICAgICA9IG51bGw7XG4gICAgICAgIG1lLnllYXJDb21wb25lbnQgICAgICA9IG51bGw7XG5cbiAgICAgICAgc3VwZXIuZGVzdHJveSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IGRhdGFcbiAgICAgKi9cbiAgICBvbkNhbGVuZGFyU3RvcmVMb2FkKGRhdGEpIHtcbiAgICAgICAgdGhpcy5jYWxlbmRhcnNDb250YWluZXIub25TdG9yZUxvYWQoZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRzLm9sZFZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdHMudmFsdWVcbiAgICAgKi9cbiAgICBvbkRhdGVTZWxlY3RvckNoYW5nZShvcHRzKSB7XG4gICAgICAgIGlmIChvcHRzLm9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGUgPSBuZXcgRGF0ZShvcHRzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gZGF0YVxuICAgICAqL1xuICAgIG9uRXZlbnRTdG9yZUxvYWQoZGF0YSkge1xuICAgICAgICAvLyB0b2RvOiB1cGRhdGUgdGhlIGFjdGl2ZSB2aWV3IChjYXJkKVxuICAgICAgICB0aGlzLndlZWtDb21wb25lbnQudXBkYXRlRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIG9uTmV4dEludGVydmFsQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLnN3aXRjaEludGVydmFsKDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBvblByZXZpb3VzSW50ZXJ2YWxCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoSW50ZXJ2YWwoLTEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBvblRvZGF5QnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gdG9kYXlEYXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgYSBjb25maWcgZm9yIHRoZSBEYXRlU2VsZWN0b3IgYW5kIGFsbCB2aWV3cyAoY2FyZHMpXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKi9cbiAgICBzZXRWaWV3Q29uZmlnKGtleSwgdmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5kYXRlU2VsZWN0b3Jba2V5XSA9IHZhbHVlO1xuXG4gICAgICAgIG1lLnZpZXdzLmZvckVhY2godmlldyA9PiB7XG4gICAgICAgICAgICBtZVtgJHt2aWV3fUNvbXBvbmVudGBdW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgdG9nZ2xlU2V0dGluZ3MoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3NFeHBhbmRlZCA9ICF0aGlzLnNldHRpbmdzRXhwYW5kZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgdG9nZ2xlU2lkZWJhcigpIHtcbiAgICAgICAgdGhpcy5zaWRlQmFyRXhwYW5kZWQgPSAhdGhpcy5zaWRlQmFyRXhwYW5kZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbXVsdGlwbGllclxuICAgICAqL1xuICAgIHN3aXRjaEludGVydmFsKG11bHRpcGxpZXIpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGN1cnJlbnREYXRlID0gbWUuY3VycmVudERhdGU7IC8vIGNsb25lZFxuXG4gICAgICAgIGNvbnN0IG1hcCA9IHtcbiAgICAgICAgICAgIGRheSAgOiAoKSA9PiB7Y3VycmVudERhdGUuc2V0RGF0ZSggICAgY3VycmVudERhdGUuZ2V0RGF0ZSgpICAgICArIG11bHRpcGxpZXIpfSxcbiAgICAgICAgICAgIG1vbnRoOiAoKSA9PiB7Y3VycmVudERhdGUuc2V0TW9udGgoICAgY3VycmVudERhdGUuZ2V0TW9udGgoKSAgICArIG11bHRpcGxpZXIpfSxcbiAgICAgICAgICAgIHdlZWsgOiAoKSA9PiB7Y3VycmVudERhdGUuc2V0RGF0ZSggICAgY3VycmVudERhdGUuZ2V0RGF0ZSgpICsgNyAqIG11bHRpcGxpZXIpfSxcbiAgICAgICAgICAgIHllYXIgOiAoKSA9PiB7Y3VycmVudERhdGUuc2V0RnVsbFllYXIoY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSArIG11bHRpcGxpZXIpfVxuICAgICAgICB9O1xuXG4gICAgICAgIG1hcFttZS5hY3RpdmVWaWV3XSgpO1xuICAgICAgICBtZS5jdXJyZW50RGF0ZSA9IGN1cnJlbnREYXRlO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWFpbkNvbnRhaW5lcik7XG5cbmV4cG9ydCB7TWFpbkNvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgRHJhZ1pvbmUgZnJvbSAnLi4vLi4vZHJhZ2dhYmxlL0RyYWdab25lLm1qcyc7XG5pbXBvcnQgVkRvbVV0aWwgZnJvbSAnLi4vLi4vdXRpbC9WRG9tLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jYWxlbmRhci5kcmFnZ2FibGUuV2Vla0V2ZW50RHJhZ1pvbmVcbiAqIEBleHRlbmRzIE5lby5kcmFnZ2FibGUuRHJhZ1pvbmVcbiAqL1xuY2xhc3MgV2Vla0V2ZW50RHJhZ1pvbmUgZXh0ZW5kcyBEcmFnWm9uZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jYWxlbmRhci5kcmFnZ2FibGUuV2Vla0V2ZW50RHJhZ1pvbmUnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jYWxlbmRhci5kcmFnZ2FibGUuV2Vla0V2ZW50RHJhZ1pvbmUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY2FsZW5kYXItd2Vlay1ldmVudC1kcmFnem9uZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjYWxlbmRhci13ZWVrLWV2ZW50LWRyYWd6b25lJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gY29sdW1uSGVpZ2h0PTBcbiAgICAgICAgICovXG4gICAgICAgIGNvbHVtbkhlaWdodDogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gY29sdW1uVG9wPTBcbiAgICAgICAgICovXG4gICAgICAgIGNvbHVtblRvcDogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gY3VycmVudEludGVydmFsPTBcbiAgICAgICAgICovXG4gICAgICAgIGN1cnJlbnRJbnRlcnZhbDogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gc3RhcnRUaW1lPTBcbiAgICAgICAgICovXG4gICAgICAgIGVuZFRpbWU6IDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB0aW1lIGluIG1pbnV0ZXNcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBldmVudER1cmF0aW9uPTBcbiAgICAgICAgICovXG4gICAgICAgIGV2ZW50RHVyYXRpb246IDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGV2ZW50UmVjb3JkPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGV2ZW50UmVjb3JkOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbW92ZUhvcml6b250YWw9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIG1vdmVIb3Jpem9udGFsOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1vdmVJbk1haW5UaHJlYWQ9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIG1vdmVJbk1haW5UaHJlYWQ6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNhbGVuZGFyLnZpZXcuV2Vla0NvbXBvbmVudH0gb3duZXI9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgb3duZXI6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHNjcm9sbEZhY3RvckxlZnQ9M1xuICAgICAgICAgKi9cbiAgICAgICAgc2Nyb2xsRmFjdG9yTGVmdDogMyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gc3RhcnRUaW1lPTBcbiAgICAgICAgICovXG4gICAgICAgIHN0YXJ0VGltZTogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHVzZVByb3h5V3JhcHBlcj1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgdXNlUHJveHlXcmFwcGVyOiBmYWxzZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHByb3h5UGFyZW50SWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0UHJveHlQYXJlbnRJZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICYmIG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBub2RlIGRpZCBub3QgZ2V0IHJlbW92ZWQgeWV0XG4gICAgICAgICAgICBpZiAobWUuZHJhZ1Byb3h5ICYmIG1lLmRyYWdQcm94eS52ZG9tLmNuWzBdLmlkKSB7XG4gICAgICAgICAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiAgOiAnbW92ZU5vZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgICAgICA6IG1lLmRyYWdQcm94eS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ICAgOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQ6IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcmFnRW5kIGVxdWFscyBkcm9wLCBzaW5jZSB3ZSBjYW4gb25seSBkcmFnIHRvIHZhbGlkIHBvc2l0aW9uc1xuICAgICAqIHRvZG86IEVTQyBrZXlcbiAgICAgKi9cbiAgICBkcmFnRW5kKCkge1xuICAgICAgICBzdXBlci5kcmFnRW5kKCk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBzdGFydERhdGUgPSBuZXcgRGF0ZShWRG9tVXRpbC5maW5kVmRvbUNoaWxkKG1lLm93bmVyLnZkb20sIG1lLnByb3h5UGFyZW50SWQpLnZkb20uZmxhZyksXG4gICAgICAgICAgICBlbmREYXRlO1xuXG4gICAgICAgIHN0YXJ0RGF0ZS5zZXRIb3VycyhtZS5zdGFydFRpbWUpO1xuICAgICAgICBzdGFydERhdGUuc2V0TWludXRlcyhtZS5jdXJyZW50SW50ZXJ2YWwgKiAxNSk7XG5cbiAgICAgICAgZW5kRGF0ZSA9IG5ldyBEYXRlKHN0YXJ0RGF0ZS52YWx1ZU9mKCkpO1xuICAgICAgICBlbmREYXRlLnNldE1pbnV0ZXMoZW5kRGF0ZS5nZXRNaW51dGVzKCkgKyBtZS5ldmVudER1cmF0aW9uKTtcblxuICAgICAgICAvLyBpZiBhbiBldmVudCBlbmRzIGF0IDI0OjAwLCBjaGFuZ2UgaXQgdG8gMjM6NTkgPT4gb3RoZXJ3aXNlIHRoZSBkYXkgaW5jcmVhc2VzIGJ5IDFcbiAgICAgICAgaWYgKGVuZERhdGUuZ2V0SG91cnMoKSA9PT0gMCAmJiBlbmREYXRlLmdldE1pbnV0ZXMoKSA9PT0gMCkge1xuICAgICAgICAgICAgZW5kRGF0ZS5zZXRNaW51dGVzKGVuZERhdGUuZ2V0TWludXRlcygpIC0gMSk7XG4gICAgICAgIH1cblxuICAgICAgICBtZS5ldmVudFJlY29yZC5lbmREYXRlICAgPSBlbmREYXRlO1xuICAgICAgICBtZS5ldmVudFJlY29yZC5zdGFydERhdGUgPSBzdGFydERhdGU7XG5cbiAgICAgICAgbWUub3duZXIudXBkYXRlRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIGRyYWdNb3ZlKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHBhdGggICAgICAgID0gZGF0YS50YXJnZXRQYXRoLFxuICAgICAgICAgICAgaSAgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgICAgPSBwYXRoLmxlbmd0aCxcbiAgICAgICAgICAgIG9sZEludGVydmFsID0gbWUuY3VycmVudEludGVydmFsLFxuICAgICAgICAgICAgaW50ZXJ2YWxIZWlnaHQsIGludGVydmFscywgcG9zaXRpb24sIHN0YXJ0VGltZTtcblxuICAgICAgICBpZiAobWUuZHJhZ1Byb3h5KSB7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhdGhbaV0uY2xzLmluY2x1ZGVzKCduZW8tYy13LWNvbHVtbicpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLnByb3h5UGFyZW50SWQgPSBwYXRoW2ldLmlkO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGludGVydmFscyAgICAgID0gKG1lLmVuZFRpbWUgLSBtZS5zdGFydFRpbWUpICogNDsgLy8gMTUgbWludXRlcyBlYWNoXG4gICAgICAgICAgICBpbnRlcnZhbEhlaWdodCA9IG1lLmNvbHVtbkhlaWdodCAvIGludGVydmFscztcblxuICAgICAgICAgICAgcG9zaXRpb24gPSBNYXRoLm1pbihtZS5jb2x1bW5IZWlnaHQsIGRhdGEuY2xpZW50WSAtIG1lLm9mZnNldFkgLSBtZS5jb2x1bW5Ub3ApO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBNYXRoLm1heCgwLCBwb3NpdGlvbik7XG5cbiAgICAgICAgICAgIG1lLmN1cnJlbnRJbnRlcnZhbCA9IE1hdGguZmxvb3IocG9zaXRpb24gLyBpbnRlcnZhbEhlaWdodCk7XG5cbiAgICAgICAgICAgIC8vIGV2ZW50cyBtdXN0IG5vdCBlbmQgYWZ0ZXIgdGhlIGxhc3QgdmlzaWJsZSBpbnRlcnZhbFxuICAgICAgICAgICAgbWUuY3VycmVudEludGVydmFsID0gTWF0aC5taW4obWUuY3VycmVudEludGVydmFsLCBpbnRlcnZhbHMgLSAobWUuZXZlbnREdXJhdGlvbiAvIDE1KSk7XG5cbiAgICAgICAgICAgIGlmIChvbGRJbnRlcnZhbCAhPT0gbWUuY3VycmVudEludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lID0gbmV3IERhdGUobWUuZXZlbnRSZWNvcmQuc3RhcnREYXRlLnZhbHVlT2YoKSk7XG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lLnNldEhvdXJzKG1lLnN0YXJ0VGltZSk7XG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lLnNldE1pbnV0ZXMobWUuY3VycmVudEludGVydmFsICogMTUpO1xuICAgICAgICAgICAgICAgIHN0YXJ0VGltZSA9IG1lLm93bmVyLmludGxGb3JtYXRfdGltZS5mb3JtYXQoc3RhcnRUaW1lKTtcblxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gbWUuY3VycmVudEludGVydmFsICogaW50ZXJ2YWxIZWlnaHQ7IC8vIHNuYXAgdG8gdmFsaWQgaW50ZXJ2YWxzXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbiAvIG1lLmNvbHVtbkhlaWdodCAqIDEwMDtcblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBub2RlIGRpZCBub3QgZ2V0IHJlbW92ZWQgeWV0XG4gICAgICAgICAgICAgICAgaWYgKG1lLmRyYWdQcm94eS52ZG9tLmNuWzBdLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAndXBkYXRlRG9tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCAgICAgICA6IG1lLmRyYWdQcm94eS52ZG9tLmNuWzBdLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogc3RhcnRUaW1lXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgICA6IG1lLmRyYWdQcm94eS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge3RvcDogYGNhbGMoJHtwb3NpdGlvbn0lICsgMXB4KWB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgZHJhZ1N0YXJ0KGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBOZW8ubWFpbi5Eb21BY2Nlc3MuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHtcbiAgICAgICAgICAgIGlkOiBbbWUuZHJhZ0VsZW1lbnQuaWQsIGRhdGEucGF0aFsxXS5pZF1cbiAgICAgICAgfSkudGhlbihyZWN0cyA9PiB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKG1lLCB7XG4gICAgICAgICAgICAgICAgY29sdW1uSGVpZ2h0IDogcmVjdHNbMV0uaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGNvbHVtblRvcCAgICA6IHJlY3RzWzFdLnRvcCxcbiAgICAgICAgICAgICAgICBldmVudER1cmF0aW9uOiAobWUuZXZlbnRSZWNvcmQuZW5kRGF0ZSAtIG1lLmV2ZW50UmVjb3JkLnN0YXJ0RGF0ZSkgLyA2MCAvIDEwMDAsXG4gICAgICAgICAgICAgICAgb2Zmc2V0WCAgICAgIDogZGF0YS5jbGllbnRYIC0gcmVjdHNbMF0ubGVmdCxcbiAgICAgICAgICAgICAgICBvZmZzZXRZICAgICAgOiBkYXRhLmNsaWVudFkgLSByZWN0c1swXS50b3BcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtZS5jcmVhdGVEcmFnUHJveHkocmVjdHNbMF0pO1xuICAgICAgICAgICAgbWUuZHJhZ01vdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoV2Vla0V2ZW50RHJhZ1pvbmUpO1xuXG5leHBvcnQge1dlZWtFdmVudERyYWdab25lIGFzIGRlZmF1bHR9OyIsImltcG9ydCBNb2RlbCBmcm9tICcuLi8uLi9kYXRhL01vZGVsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jYWxlbmRhci5tb2RlbC5DYWxlbmRhclxuICogQGV4dGVuZHMgTmVvLmRhdGEuTW9kZWxcbiAqL1xuY2xhc3MgQ2FsZW5kYXIgZXh0ZW5kcyBNb2RlbCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jYWxlbmRhci5tb2RlbC5DYWxlbmRhcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNhbGVuZGFyLm1vZGVsLkNhbGVuZGFyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfSBmaWVsZHNcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgZmllbGRzOiBbe1xuICAgICAgICAgICAgbmFtZTogJ2FjdGl2ZScsXG4gICAgICAgICAgICB0eXBlOiAnQm9vbGVhbidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2NvbG9yJyxcbiAgICAgICAgICAgIHR5cGU6ICdTdHJpbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICB0eXBlOiAnSW50ZWdlcidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZydcbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDYWxlbmRhcik7XG5cbmV4cG9ydCB7Q2FsZW5kYXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IE1vZGVsIGZyb20gJy4uLy4uL2RhdGEvTW9kZWwubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNhbGVuZGFyLm1vZGVsLkV2ZW50XG4gKiBAZXh0ZW5kcyBOZW8uZGF0YS5Nb2RlbFxuICovXG5jbGFzcyBFdmVudCBleHRlbmRzIE1vZGVsIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNhbGVuZGFyLm1vZGVsLkV2ZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY2FsZW5kYXIubW9kZWwuRXZlbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W119IGZpZWxkc1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBmaWVsZHM6IFt7XG4gICAgICAgICAgICBuYW1lOiAnYXR0ZW5kZWVzJyxcbiAgICAgICAgICAgIHR5cGU6ICdBcnJheSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2FsbERheScsXG4gICAgICAgICAgICB0eXBlOiAnQm9vbGVhbidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnY2FsZW5kYXJJZCcsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2VuZERhdGUnLFxuICAgICAgICAgICAgdHlwZTogJ0RhdGUnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdzdGFydERhdGUnLFxuICAgICAgICAgICAgdHlwZTogJ0RhdGUnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICd0aXRsZScsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJ1xuICAgICAgICB9XVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEV2ZW50KTtcblxuZXhwb3J0IHtFdmVudCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi4vbW9kZWwvQ2FsZW5kYXIubWpzJztcbmltcG9ydCBTdG9yZSAgICBmcm9tICcuLi8uLi8uLi9zcmMvZGF0YS9TdG9yZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY2FsZW5kYXIuc3RvcmUuQ2FsZW5kYXJzXG4gKiBAZXh0ZW5kcyBOZW8uZGF0YS5TdG9yZVxuICovXG5jbGFzcyBDYWxlbmRhcnMgZXh0ZW5kcyBTdG9yZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jYWxlbmRhci5zdG9yZS5DYWxlbmRhcnMnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jYWxlbmRhci5zdG9yZS5DYWxlbmRhcnMnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBrZXlQcm9wZXJ0eT0naWQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGtleVByb3BlcnR5OiAnaWQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmRhdGEuTW9kZWx9IG1vZGVsPUNhbGVuZGFyXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG1vZGVsOiBDYWxlbmRhcixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfSBzb3J0ZXJzXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNvcnRlcnM6IFt7XG4gICAgICAgICAgICBwcm9wZXJ0eSA6ICduYW1lJyxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ0FTQydcbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDYWxlbmRhcnMpO1xuXG5leHBvcnQge0NhbGVuZGFycyBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgRXZlbnQgZnJvbSAnLi4vbW9kZWwvRXZlbnQubWpzJztcbmltcG9ydCBTdG9yZSBmcm9tICcuLi8uLi8uLi9zcmMvZGF0YS9TdG9yZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY2FsZW5kYXIuc3RvcmUuRXZlbnRzXG4gKiBAZXh0ZW5kcyBOZW8uZGF0YS5TdG9yZVxuICovXG5jbGFzcyBFdmVudHMgZXh0ZW5kcyBTdG9yZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jYWxlbmRhci5zdG9yZS5FdmVudHMnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jYWxlbmRhci5zdG9yZS5FdmVudHMnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBrZXlQcm9wZXJ0eT0naWQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGtleVByb3BlcnR5OiAnaWQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmRhdGEuTW9kZWx9IG1vZGVsPUV2ZW50XG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG1vZGVsOiBFdmVudCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfSBzb3J0ZXJzXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNvcnRlcnM6IFt7XG4gICAgICAgICAgICBwcm9wZXJ0eSA6ICdzdGFydERhdGUnLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnQVNDJ1xuICAgICAgICB9XVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEV2ZW50cyk7XG5cbmV4cG9ydCB7RXZlbnRzIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDaGVja0JveEZpZWxkIGZyb20gJy4uLy4uL2Zvcm0vZmllbGQvQ2hlY2tCb3gubWpzJztcbmltcG9ydCBDb250YWluZXIgICAgIGZyb20gJy4uLy4uL2NvbnRhaW5lci9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jYWxlbmRhci52aWV3LkNhbGVuZGFyc0NvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5CYXNlXG4gKi9cbmNsYXNzIENhbGVuZGFyc0NvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jYWxlbmRhci52aWV3LkNhbGVuZGFyc0NvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNhbGVuZGFyLnZpZXcuQ2FsZW5kYXJzQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NhbGVuZGFyLWNhbGVuZGFyc2NvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjYWxlbmRhci1jYWxlbmRhcnNjb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNhbGVuZGFyLnN0b3JlLkNhbGVuZGFyc3xudWxsfSBjYWxlbmRhclN0b3JlXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBjYWxlbmRhclN0b3JlXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tY2FsZW5kYXItY2FsZW5kYXJzY29udGFpbmVyJywgJ25lby1jb250YWluZXInXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1jYWxlbmRhci1jYWxlbmRhcnNjb250YWluZXInLCAnbmVvLWNvbnRhaW5lciddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBpdGVtRGVmYXVsdHNcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogQ2hlY2tCb3hGaWVsZCxcbiAgICAgICAgICAgIGZsZXggICAgICAgICAgOiAnbm9uZScsXG4gICAgICAgICAgICBoaWRlTGFiZWwgICAgIDogdHJ1ZSxcbiAgICAgICAgICAgIGhpZGVWYWx1ZUxhYmVsOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbGF5b3V0PXtudHlwZTondmJveCcsYWxpZ246J3N0cmV0Y2gnfVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IGRhdGFcbiAgICAgKi9cbiAgICBvblN0b3JlTG9hZChkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICA9IHRoaXMsXG4gICAgICAgICAgICBpdGVtcyA9IFtdO1xuXG4gICAgICAgIGlmICghbWUubW91bnRlZCAmJiBtZS5yZW5kZXJpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVySWQgPSBtZS5vbigncmVuZGVyZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWUudW4oJ3JlbmRlcmVkJywgbGlzdGVuZXJJZCk7XG4gICAgICAgICAgICAgICAgbWUub25TdG9yZUxvYWQoZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZCAgICAgICA6IGl0ZW0uYWN0aXZlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZUxhYmVsVGV4dDogaXRlbS5uYW1lXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWUuX2l0ZW1zID0gaXRlbXM7XG5cbiAgICAgICAgICAgIG1lLnBhcnNlSXRlbUNvbmZpZ3MoaXRlbXMpO1xuICAgICAgICAgICAgbWUuY3JlYXRlSXRlbXMoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ2FsZW5kYXJzQ29udGFpbmVyKTtcblxuZXhwb3J0IHtDYWxlbmRhcnNDb250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi9jb21wb25lbnQvQmFzZS5tanMnO1xuXG5jb25zdCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpO1xuXG5jb25zdCB0b2RheSA9IHtcbiAgICBkYXkgIDogdG9kYXlEYXRlLmdldERhdGUoKSxcbiAgICBtb250aDogdG9kYXlEYXRlLmdldE1vbnRoKCksXG4gICAgeWVhciA6IHRvZGF5RGF0ZS5nZXRGdWxsWWVhcigpXG59O1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY2FsZW5kYXIudmlldy5EYXlDb21wb25lbnRcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBEYXlDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY2FsZW5kYXIudmlldy5EYXlDb21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jYWxlbmRhci52aWV3LkRheUNvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjYWxlbmRhci12aWV3LWRheWNvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjYWxlbmRhci12aWV3LWRheWNvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWNhbGVuZGFyLWRheWNvbXBvbmVudCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWNhbGVuZGFyLWRheWNvbXBvbmVudCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogV2lsbCBnZXQgcGFzc2VkIGZyb20gdGhlIE1haW5Db250YWluZXJcbiAgICAgICAgICogQG1lbWJlciB7RGF0ZXxudWxsfSBjdXJyZW50RGF0ZV89bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjdXJyZW50RGF0ZV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY2FsZW5kYXIuc3RvcmUuRXZlbnRzfG51bGx9IGV2ZW50U3RvcmVfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGV2ZW50U3RvcmVfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBodG1sPSdNb250aCdcbiAgICAgICAgICovXG4gICAgICAgIGh0bWw6ICdEYXknLCAvLyB0b2RvOiByZW1vdmVcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgdmRvbToge30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAwLTYgPT4gU3VuLVNhdFxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHdlZWtTdGFydERheV89MFxuICAgICAgICAgKi9cbiAgICAgICAgd2Vla1N0YXJ0RGF5XzogMFxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKERheUNvbXBvbmVudCk7XG5cbmV4cG9ydCB7RGF5Q29tcG9uZW50IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50L0Jhc2UubWpzJztcbmltcG9ydCBEYXRlVXRpbCAgZnJvbSAnLi4vLi4vdXRpbC9EYXRlLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgIGZyb20gJy4uLy4uL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCBWRG9tVXRpbCAgZnJvbSAnLi4vLi4vdXRpbC9WRG9tLm1qcyc7XG5cbmNvbnN0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKCk7XG5cbmNvbnN0IHRvZGF5ID0ge1xuICAgIGRheSAgOiB0b2RheURhdGUuZ2V0RGF0ZSgpLFxuICAgIG1vbnRoOiB0b2RheURhdGUuZ2V0TW9udGgoKSxcbiAgICB5ZWFyIDogdG9kYXlEYXRlLmdldEZ1bGxZZWFyKClcbn07XG5cbi8qKlxuICogQGNsYXNzIE5lby5jYWxlbmRhci52aWV3Lk1vbnRoQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgTW9udGhDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY2FsZW5kYXIudmlldy5Nb250aENvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNhbGVuZGFyLnZpZXcuTW9udGhDb21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY2FsZW5kYXItdmlldy1tb250aGNvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjYWxlbmRhci12aWV3LW1vbnRoY29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tY2FsZW5kYXItbW9udGhjb21wb25lbnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1jYWxlbmRhci1tb250aGNvbXBvbmVudCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogV2lsbCBnZXQgcGFzc2VkIGZyb20gdGhlIE1haW5Db250YWluZXJcbiAgICAgICAgICogQG1lbWJlciB7RGF0ZXxudWxsfSBjdXJyZW50RGF0ZV89bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjdXJyZW50RGF0ZV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZm9ybWF0IG9mIHRoZSBjb2x1bW4gaGVhZGVycy5cbiAgICAgICAgICogVmFsaWQgdmFsdWVzIGFyZTogbmFycm93LCBzaG9ydCAmIGxvbmdcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBkYXlOYW1lRm9ybWF0Xz0nc2hvcnQnXG4gICAgICAgICAqL1xuICAgICAgICBkYXlOYW1lRm9ybWF0XzogJ3Nob3J0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jYWxlbmRhci5zdG9yZS5FdmVudHN8bnVsbH0gZXZlbnRTdG9yZV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZXZlbnRTdG9yZV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnRlcm5hbCBmbGFnIHRvIHN0b3JlIHRoZSBoZWFkZXIgaGVpZ2h0IGluIHB4IGFmdGVyIGdldHRpbmcgbW91bnRlZC5cbiAgICAgICAgICogTmVlZGVkIGZvciB0aGUgaW5maW5pdGUgc2Nyb2xsaW5nXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxudWxsfSBoZWFkZXJIZWlnaHQ9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBoZWFkZXJIZWlnaHQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtJbnRsLkRhdGVUaW1lRm9ybWF0fG51bGx9IGludGxGb3JtYXRfZGF5PW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaW50bEZvcm1hdF9kYXk6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtJbnRsLkRhdGVUaW1lRm9ybWF0fG51bGx9IGludGxGb3JtYXRfbW9udGg9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBpbnRsRm9ybWF0X21vbnRoOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaXNTY3JvbGxpbmc9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaXNTY3JvbGxpbmc6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBsb2NhbGVfPU5lby5jb25maWcubG9jYWxlXG4gICAgICAgICAqL1xuICAgICAgICBsb2NhbGVfOiBOZW8uY29uZmlnLmxvY2FsZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBmb3JtYXQgb2YgdGhlIG1vbnRoIGhlYWRlciBuYW1lcy5cbiAgICAgICAgICogVmFsaWQgdmFsdWVzIGFyZTogbmFycm93LCBzaG9ydCAmIGxvbmdcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBtb250aE5hbWVGb3JtYXRfPSdsb25nJ1xuICAgICAgICAgKi9cbiAgICAgICAgbW9udGhOYW1lRm9ybWF0XzogJ3Nob3J0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBzY3JvbGxUYXNrPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2Nyb2xsVGFza0lkOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hvd1dlZWtlbmRzXz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBzaG93V2Vla2VuZHNfOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSB0byB1c2UgYm94IHNoYWRvd3MgZm9yIHRoZSBtb250aHMgd2hpbGUgc2Nyb2xsaW5nXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHVzZVNjcm9sbEJveFNoYWRvd3NfPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHVzZVNjcm9sbEJveFNoYWRvd3NfOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSB2ZG9tXG4gICAgICAgICAqL1xuICAgICAgICB2ZG9tOiB7XG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWRheXMtaGVhZGVyJ10sXG4gICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICBjbHMgIDogWyduZW8tc3RhdGljLWhlYWRlciddLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgICAgICAgIGNuICAgOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnIDogJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xzIDogWyduZW8tbW9udGgtbmFtZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxhZzogJ21vbnRoLW5hbWUnXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZ0eXBlOiAndGV4dCdcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGNsczogWyduZW8tYy1tLXNjcm9sbGNvbnRhaW5lciddXG4gICAgICAgICAgICB9XVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogMC02ID0+IFN1bi1TYXRcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSB3ZWVrU3RhcnREYXlfPTBcbiAgICAgICAgICovXG4gICAgICAgIHdlZWtTdGFydERheV86IDBcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkYXRlICAgICAgICAgPSBtZS5jdXJyZW50RGF0ZSwgLy8gY2xvbmVkXG4gICAgICAgICAgICB2ZG9tICAgICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgaGVhZGVyICAgICAgID0gdmRvbS5jblswXS5jblswXSxcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IG1lLmRvbUxpc3RlbmVycztcblxuICAgICAgICBkb21MaXN0ZW5lcnMucHVzaCh7XG4gICAgICAgICAgICB3aGVlbDoge2ZuOiBtZS5vbldoZWVsLCBzY29wZTogbWV9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmRvbUxpc3RlbmVycyA9IGRvbUxpc3RlbmVycztcblxuICAgICAgICBoZWFkZXIuY25bMF0uaHRtbCA9IG1lLmludGxGb3JtYXRfbW9udGguZm9ybWF0KGRhdGUpO1xuICAgICAgICBoZWFkZXIuY25bMV0uaHRtbCA9IGAgJHtkYXRlLmdldEZ1bGxZZWFyKCl9YDtcblxuICAgICAgICBtZS51cGRhdGVIZWFkZXIodHJ1ZSk7XG4gICAgICAgIG1lLmNyZWF0ZUNvbnRlbnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGRheU5hbWVGb3JtYXQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RGF5TmFtZUZvcm1hdCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5pbnRsRm9ybWF0X2RheSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KG1lLmxvY2FsZSwge3dlZWtkYXk6IHZhbHVlfSk7XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG1lLnVwZGF0ZUhlYWRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBsb2NhbGUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TG9jYWxlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAgICAgbWUuaW50bEZvcm1hdF9kYXkgICA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHZhbHVlLCB7d2Vla2RheTogbWUuZGF5TmFtZUZvcm1hdH0pO1xuICAgICAgICAgICAgbWUuaW50bEZvcm1hdF9tb250aCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHZhbHVlLCB7bW9udGggIDogbWUubW9udGhOYW1lRm9ybWF0fSk7XG5cbiAgICAgICAgICAgIG1lLnVwZGF0ZU1vbnRoTmFtZXModHJ1ZSk7XG4gICAgICAgICAgICBtZS51cGRhdGVIZWFkZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbW9udGhOYW1lRm9ybWF0IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldE1vbnRoTmFtZUZvcm1hdCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5pbnRsRm9ybWF0X21vbnRoID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobWUubG9jYWxlLCB7bW9udGg6IHZhbHVlfSk7XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG1lLnVwZGF0ZU1vbnRoTmFtZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbW91bnRlZCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldE1vdW50ZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAgICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5nZXRCb3VuZGluZ0NsaWVudFJlY3Qoe1xuICAgICAgICAgICAgICAgICAgICBpZDogW21lLnZkb20uY25bMV0uaWQsIG1lLnZkb20uY25bMF0uaWRdXG4gICAgICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbWUuaGVhZGVySGVpZ2h0ID0gZGF0YVsxXS5oZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLnNjcm9sbEJ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCAgICAgICA6IG1lLnZkb20uY25bMV0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IGRhdGFbMF0uaGVpZ2h0IC0gZGF0YVsxXS5oZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAyMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHNob3dXZWVrZW5kcyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFNob3dXZWVrZW5kcyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICB2ZG9tID0gbWUudmRvbSxcbiAgICAgICAgICAgICAgICBpLCBpdGVtO1xuXG4gICAgICAgICAgICB2ZG9tLmNuWzFdLmNuLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocm93LmZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpPTA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSByb3cuY25baV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmNscy5pbmNsdWRlcygnbmVvLXdlZWtlbmQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgaXRlbS5yZW1vdmVEb207XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5yZW1vdmVEb20gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyB0cmlnZ2VycyB0aGUgdmRvbSB1cGRhdGVcbiAgICAgICAgICAgIG1lLnVwZGF0ZUhlYWRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB1c2VTY3JvbGxCb3hTaGFkb3dzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VXNlU2Nyb2xsQm94U2hhZG93cyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgTmVvQXJyYXlbdmFsdWUgPyAnYWRkJyA6ICdyZW1vdmUnXShtZS52ZG9tLmNuWzFdLmNscywgJ25lby1zY3JvbGwtc2hhZG93cycpO1xuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHdlZWtTdGFydERheSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRXZWVrU3RhcnREYXkodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbnRlbnQodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUhlYWRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgZGF5TmFtZUZvcm1hdCBjb25maWcgZ2V0cyBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldERheU5hbWVGb3JtYXQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJlZm9yZVNldEVudW1WYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICdkYXlOYW1lRm9ybWF0JywgRGF0ZVV0aWwucHJvdG90eXBlLmRheU5hbWVGb3JtYXRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBtb250aE5hbWVGb3JtYXQgY29uZmlnIGdldHMgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRNb250aE5hbWVGb3JtYXQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJlZm9yZVNldEVudW1WYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICdtb250aE5hbWVGb3JtYXQnLCBEYXRlVXRpbC5wcm90b3R5cGUubW9udGhOYW1lRm9ybWF0cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzaWxlbnQ9ZmFsc2VdXG4gICAgICovXG4gICAgY3JlYXRlQ29udGVudChzaWxlbnQ9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgZGF0ZSA9IG1lLmN1cnJlbnREYXRlLCAvLyBjbG9uZWRcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tLFxuICAgICAgICAgICAgaSAgICA9IDAsXG4gICAgICAgICAgICBmaXJzdERheU9mZnNldCwgcm93O1xuXG4gICAgICAgIHZkb20uY25bMV0uY24gPSBbXTtcblxuICAgICAgICBmaXJzdERheU9mZnNldCA9IERhdGVVdGlsLmdldEZpcnN0RGF5T2Zmc2V0KGRhdGUsIG1lLndlZWtTdGFydERheSk7XG5cbiAgICAgICAgZGF0ZS5zZXREYXRlKDEgLSBmaXJzdERheU9mZnNldCk7XG5cbiAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gNiAqIDcpO1xuXG4gICAgICAgIGZvciAoOyBpIDwgMTg7IGkrKykge1xuICAgICAgICAgICAgcm93ID0gbWUuY3JlYXRlV2VlayhEYXRlVXRpbC5jbG9uZShkYXRlKSk7XG5cbiAgICAgICAgICAgIGlmIChyb3cuaGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgdmRvbS5jblsxXS5jbi5wdXNoKHJvdy5oZWFkZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2ZG9tLmNuWzFdLmNuLnB1c2gocm93LnJvdyk7XG5cbiAgICAgICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDcpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVbc2lsZW50ID8gJ192ZG9tJyA6ICd2ZG9tJ10gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtEYXRlfSBkYXRlXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBjcmVhdGVXZWVrKGRhdGUpIHtcbiAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpICAgICAgPSAwLFxuICAgICAgICAgICAgaGVhZGVyID0gbnVsbCxcbiAgICAgICAgICAgIGRheSwgZGF5Q29uZmlnLCByb3csIHdlZWtEYXk7XG5cbiAgICAgICAgcm93ID0ge1xuICAgICAgICAgICAgZmxhZzogRGF0ZVV0aWwuY29udmVydFRveXl5eW1tZGQoZGF0ZSksXG4gICAgICAgICAgICBjbHMgOiBbJ25lby13ZWVrJ10sXG4gICAgICAgICAgICBjbiAgOiBbXVxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAoOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICBkYXkgPSBkYXRlLmdldERhdGUoKTtcblxuICAgICAgICAgICAgaWYgKGRheSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJvdy5mbGFnID0gRGF0ZVV0aWwuY29udmVydFRveXl5eW1tZGQoZGF0ZSk7IC8vIHRoZSBmaXJzdCBkYXkgb2YgYSBtb250aCB3aW5zXG5cbiAgICAgICAgICAgICAgICBoZWFkZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNsczogWyduZW8tbW9udGgtaGVhZGVyJ10sXG4gICAgICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsczogWyduZW8tbW9udGgtaGVhZGVyLWNvbnRlbnQnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWcgOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzIDogWyduZW8tbW9udGgtbmFtZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYWc6ICdtb250aC1uYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sOiBtZS5pbnRsRm9ybWF0X21vbnRoLmZvcm1hdChkYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZ0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCA6IGAgJHtkYXRlLmdldEZ1bGxZZWFyKCl9YFxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkYXlDb25maWcgPSB7XG4gICAgICAgICAgICAgICAgY2xzIDogWyduZW8tZGF5J10sXG4gICAgICAgICAgICAgICAgaHRtbDogZGF5XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB3ZWVrRGF5ID0gZGF0ZS5nZXREYXkoKTtcblxuICAgICAgICAgICAgaWYgKHdlZWtEYXkgPT09IDAgfHwgd2Vla0RheSA9PT0gNikge1xuICAgICAgICAgICAgICAgIGRheUNvbmZpZy5jbHMucHVzaCgnbmVvLXdlZWtlbmQnKTtcblxuICAgICAgICAgICAgICAgIGlmICghbWUuc2hvd1dlZWtlbmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGRheUNvbmZpZy5yZW1vdmVEb20gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcm93LmNuLnB1c2goZGF5Q29uZmlnKTtcblxuICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXIsXG4gICAgICAgICAgICByb3cgICA6IHJvd1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uV2hlZWwoZGF0YSkge1xuICAgICAgICBpZiAoTWF0aC5hYnMoZGF0YS5kZWx0YVkpID4gTWF0aC5hYnMoZGF0YS5kZWx0YVgpKSB7XG4gICAgICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICB2ZG9tICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IHZkb20uY25bMV0sXG4gICAgICAgICAgICAgICAgaSAgICAgICAgID0gMCxcbiAgICAgICAgICAgICAgICBkYXRlLCBsZW4sIHdlZWs7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEuc2Nyb2xsVG9wLCBNYXRoLnJvdW5kKGRhdGEuc2Nyb2xsVG9wIC8gKGRhdGEuY2xpZW50SGVpZ2h0IC0gbWUuaGVhZGVySGVpZ2h0KSAqIDYpKTtcblxuICAgICAgICAgICAgaWYgKGRhdGEuZGVsdGFZID4gMCAmJiBNYXRoLnJvdW5kKGRhdGEuc2Nyb2xsVG9wIC8gKGRhdGEuY2xpZW50SGVpZ2h0IC0gbWUuaGVhZGVySGVpZ2h0KSAqIDYpID4gMTEpIHtcbiAgICAgICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoY29udGFpbmVyLmNuW2NvbnRhaW5lci5jbi5sZW5ndGggLSAxXS5mbGFnKTtcblxuICAgICAgICAgICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIChkYXRlLmdldERheSgpIC0gbWUud2Vla1N0YXJ0RGF5KSk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyLmNuWzFdLmNscy5pbmNsdWRlcygnbmVvLW1vbnRoLWhlYWRlcicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuY24uc3BsaWNlKDEsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmNuLnNoaWZ0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgNyk7XG5cbiAgICAgICAgICAgICAgICAgICAgd2VlayA9IG1lLmNyZWF0ZVdlZWsoRGF0ZVV0aWwuY2xvbmUoZGF0ZSkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh3ZWVrLmhlYWRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmNuLnB1c2god2Vlay5oZWFkZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmNuLnB1c2god2Vlay5yb3cpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhLmRlbHRhWSA8IDAgJiYgTWF0aC5yb3VuZChkYXRhLnNjcm9sbFRvcCAvIChkYXRhLmNsaWVudEhlaWdodCAtIG1lLmhlYWRlckhlaWdodCkgKiA2KSA8IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyLmNuWzBdLmZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGNvbnRhaW5lci5jblswXS5mbGFnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoY29udGFpbmVyLmNuWzFdLmZsYWcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIChkYXRlLmdldERheSgpIC0gbWUud2Vla1N0YXJ0RGF5KSk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZW4gPSBjb250YWluZXIuY24ubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIuY25bbGVuIC0gMl0uY2xzLmluY2x1ZGVzKCduZW8tbW9udGgtaGVhZGVyJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jbi5zcGxpY2UobGVuIC0gMiwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuY24ucG9wKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gNyk7XG5cbiAgICAgICAgICAgICAgICAgICAgd2VlayA9IG1lLmNyZWF0ZVdlZWsoRGF0ZVV0aWwuY2xvbmUoZGF0ZSkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jbi51bnNoaWZ0KHdlZWsucm93KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAod2Vlay5oZWFkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jbi51bnNoaWZ0KHdlZWsuaGVhZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1lLnByb21pc2VWZG9tVXBkYXRlKG1lLnZkb20pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBOZW8ubWFpbi5Eb21BY2Nlc3Muc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAndG9wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkICAgICAgIDogbWUudmRvbS5jblsxXS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgIDogZGF0YS5jbGllbnRIZWlnaHQgLSBtZS5oZWFkZXJIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghbWUuaXNTY3JvbGxpbmcpIHtcbiAgICAgICAgICAgICAgICBtZS5pc1Njcm9sbGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgTmVvQXJyYXkuYWRkKG1lLnZkb20uY25bMV0uY2xzLCAnbmVvLWlzLXNjcm9sbGluZycpO1xuICAgICAgICAgICAgICAgIG1lLnZkb20uY25bMF0uY25bMF0uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtZS5zY3JvbGxUYXNrSWQpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQobWUuc2Nyb2xsVGFza0lkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUuc2Nyb2xsVGFza0lkID0gc2V0VGltZW91dChtZS5vbldoZWVsRW5kLmJpbmQobWUpLCAzMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbldoZWVsRW5kKCkge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gICA9IG1lLnZkb20sXG4gICAgICAgICAgICBoZWFkZXIgPSB2ZG9tLmNuWzBdLmNuWzBdLFxuICAgICAgICAgICAgaSAgICAgID0gNixcbiAgICAgICAgICAgIGRhdGUsIGZsYWc7XG5cbiAgICAgICAgbWUuaXNTY3JvbGxpbmcgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgICAgIGZsYWcgPSB2ZG9tLmNuWzFdLmNuW2ldLmZsYWc7IC8vIHRvZG86ICM5ODkgPT4gZ2V0IHRoZSBkYXRlIG9mIHRoZSBmaXJzdCBmdWxseSB2aXNpYmxlIHJvdyBmb3IgdGhlIGhlYWRlclxuXG4gICAgICAgICAgICBpZiAoZmxhZykge1xuICAgICAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShmbGFnKTtcbiAgICAgICAgICAgICAgICBkYXRlLnNldE1vbnRoKGRhdGUuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgIGhlYWRlci5jblswXS5odG1sID0gbWUuaW50bEZvcm1hdF9tb250aC5mb3JtYXQoZGF0ZSk7XG4gICAgICAgICAgICAgICAgaGVhZGVyLmNuWzFdLmh0bWwgPSBgICR7ZGF0ZS5nZXRGdWxsWWVhcigpfWA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBOZW9BcnJheS5yZW1vdmUodmRvbS5jblsxXS5jbHMsICduZW8taXMtc2Nyb2xsaW5nJyk7XG4gICAgICAgIGhlYWRlci5zdHlsZS5vcGFjaXR5ID0gMTtcblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICAvLyB0b2RvOiAjOTkwID0+IHNjcm9sbCB0aGUgdmlldyB0byB0aGUgY2xvc2VzdCByb3dcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2NyZWF0ZT1mYWxzZV1cbiAgICAgKi9cbiAgICB1cGRhdGVIZWFkZXIoY3JlYXRlPWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGRhdGUgPSBtZS5jdXJyZW50RGF0ZSwgLy8gY2xvbmVkXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbSxcbiAgICAgICAgICAgIGkgICAgPSAxLFxuICAgICAgICAgICAgZGF5LCBub2RlO1xuXG4gICAgICAgIGRhdGUuc2V0RGF0ZShtZS5jdXJyZW50RGF0ZS5nZXREYXRlKCkgLSBtZS5jdXJyZW50RGF0ZS5nZXREYXkoKSArIG1lLndlZWtTdGFydERheSk7XG5cbiAgICAgICAgZm9yICg7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG5cbiAgICAgICAgICAgIGlmIChjcmVhdGUpIHtcbiAgICAgICAgICAgICAgICBub2RlID0ge1xuICAgICAgICAgICAgICAgICAgICBjbHMgOiBbJ25lby1kYXktbmFtZSddLFxuICAgICAgICAgICAgICAgICAgICBodG1sOiBtZS5pbnRsRm9ybWF0X2RheS5mb3JtYXQoZGF0ZSlcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKCFtZS5zaG93V2Vla2VuZHMgJiYgKGRheSA9PT0gMCB8fCBkYXkgPT09IDYpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlRG9tID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2ZG9tLmNuWzBdLmNuLnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGUgPSB2ZG9tLmNuWzBdLmNuW2ldO1xuXG4gICAgICAgICAgICAgICAgbm9kZS5odG1sID0gbWUuaW50bEZvcm1hdF9kYXkuZm9ybWF0KGRhdGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFtZS5zaG93V2Vla2VuZHMgJiYgKGRheSA9PT0gMCB8fCBkYXkgPT09IDYpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlRG9tID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbm9kZS5yZW1vdmVEb207XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbc2lsZW50PWZhbHNlXVxuICAgICAqL1xuICAgIHVwZGF0ZU1vbnRoTmFtZXMoc2lsZW50PWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZGF0ZSAgID0gbWUuY3VycmVudERhdGUsIC8vIGNsb25lZFxuICAgICAgICAgICAgdmRvbSAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIG1vbnRocyA9IFZEb21VdGlsLmdldEZsYWdzKHZkb20sICdtb250aC1uYW1lJyk7XG5cbiAgICAgICAgbW9udGhzLmZvckVhY2gobW9udGggPT4ge1xuICAgICAgICAgICAgbW9udGguaHRtbCA9IG1lLmludGxGb3JtYXRfbW9udGguZm9ybWF0KGRhdGUpO1xuICAgICAgICAgICAgZGF0ZS5zZXRNb250aChkYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVbc2lsZW50ID8gJ192ZG9tJyA6ICd2ZG9tJ10gPSB2ZG9tO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTW9udGhDb21wb25lbnQpO1xuXG5leHBvcnQge01vbnRoQ29tcG9uZW50IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb250YWluZXIgICAgICAgIGZyb20gJy4uLy4uL2NvbnRhaW5lci9CYXNlLm1qcyc7XG5pbXBvcnQgR2VuZXJhbENvbnRhaW5lciBmcm9tICcuL3NldHRpbmdzL0dlbmVyYWxDb250YWluZXIubWpzJztcbmltcG9ydCBNb250aENvbnRhaW5lciAgIGZyb20gJy4vc2V0dGluZ3MvTW9udGhDb250YWluZXIubWpzJztcbmltcG9ydCBUYWJDb250YWluZXIgICAgIGZyb20gJy4uLy4uL3RhYi9Db250YWluZXIubWpzJztcbmltcG9ydCBXZWVrQ29udGFpbmVyICAgIGZyb20gJy4vc2V0dGluZ3MvV2Vla0NvbnRhaW5lci5tanMnO1xuaW1wb3J0IFllYXJDb250YWluZXIgICAgZnJvbSAnLi9zZXR0aW5ncy9ZZWFyQ29udGFpbmVyLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jYWxlbmRhci52aWV3LlNldHRpbmdzQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgU2V0dGluZ3NDb250YWluZXIgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY2FsZW5kYXIudmlldy5TZXR0aW5nc0NvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNhbGVuZGFyLnZpZXcuU2V0dGluZ3NDb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY2FsZW5kYXItc2V0dGluZ3Njb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY2FsZW5kYXItc2V0dGluZ3Njb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1jYWxlbmRhci1zZXR0aW5nc2NvbnRhaW5lcicsICduZW8tY29udGFpbmVyJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tY2FsZW5kYXItc2V0dGluZ3Njb250YWluZXInLCAnbmVvLWNvbnRhaW5lciddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsYXlvdXQ9e250eXBlOid2Ym94JyxhbGlnbjonc3RyZXRjaCd9XG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSB0byBvbmx5IGtlZXAgdGhlIGFjdGl2ZSB2aWV3IGluc2lkZSB0aGUgRE9NXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJlbW92ZUluYWN0aXZlQ2FyZHM9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3ZlSW5hY3RpdmVDYXJkczogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcbiAgICAgICAgdGhpcy52ZG9tLnJlbW92ZURvbSA9IHRydWU7XG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aFxuICAgICAqL1xuICAgIGNvbGxhcHNlKHdpZHRoKSB7XG4gICAgICAgIGxldCBtZSAgICA9IHRoaXMsXG4gICAgICAgICAgICBzdHlsZSA9IG1lLnN0eWxlIHx8IHt9LFxuICAgICAgICAgICAgdmRvbTtcblxuICAgICAgICBzdHlsZS5tYXJnaW5SaWdodCA9IGAtJHt3aWR0aH1weGA7XG4gICAgICAgIG1lLl9zdHlsZSAgICAgID0gc3R5bGU7IC8vIHNpbGVudCB1cGRhdGVcbiAgICAgICAgbWUuX3Zkb20uc3R5bGUgPSBzdHlsZTsgLy8gc2lsZW50IHVwZGF0ZVxuXG4gICAgICAgIE5lby5nZXRDb21wb25lbnQobWUucGFyZW50SWQpLnByb21pc2VWZG9tVXBkYXRlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcbiAgICAgICAgICAgICAgICB2ZG9tLnJlbW92ZURvbSA9IHRydWU7XG4gICAgICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgICAgICB9LCA0MDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGNyZWF0ZUl0ZW1zKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLml0ZW1zID0gW3tcbiAgICAgICAgICAgIG50eXBlIDogJ2NvbXBvbmVudCcsXG4gICAgICAgICAgICBjbHMgICA6IFsnbmVvLWhlYWRlciddLFxuICAgICAgICAgICAgaGVpZ2h0OiA0OCxcbiAgICAgICAgICAgIGh0bWwgIDogJzxpIGNsYXNzPVwiZmEgZmEtY29nXCI+PC9pPlNldHRpbmdzJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgICAgICAgOiBUYWJDb250YWluZXIsXG4gICAgICAgICAgICByZW1vdmVJbmFjdGl2ZUNhcmRzOiBtZS5yZW1vdmVJbmFjdGl2ZUNhcmRzLFxuXG4gICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICBtb2R1bGU6IEdlbmVyYWxDb250YWluZXIsXG4gICAgICAgICAgICAgICAgc3R5bGUgOiB7cGFkZGluZzogJzIwcHgnfSxcblxuICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnR2VuZXJhbCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGU6ICdjb21wb25lbnQnLFxuICAgICAgICAgICAgICAgIGh0bWwgOiAnRGF5JyxcbiAgICAgICAgICAgICAgICBzdHlsZToge3BhZGRpbmc6ICcyMHB4J30sXG5cbiAgICAgICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0RheSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlOiBXZWVrQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgIHN0eWxlIDoge3BhZGRpbmc6ICcyMHB4J30sXG5cbiAgICAgICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1dlZWsnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG1vZHVsZTogTW9udGhDb250YWluZXIsXG4gICAgICAgICAgICAgICAgc3R5bGUgOiB7cGFkZGluZzogJzIwcHgnfSxcblxuICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnTW9udGgnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG1vZHVsZTogWWVhckNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICBzdHlsZSA6IHtwYWRkaW5nOiAnMjBweCd9LFxuXG4gICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdZZWFyJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1dO1xuXG4gICAgICAgIHN1cGVyLmNyZWF0ZUl0ZW1zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBleHBhbmQoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBzdHlsZTtcblxuICAgICAgICBkZWxldGUgbWUudmRvbS5yZW1vdmVEb207XG5cbiAgICAgICAgTmVvLmdldENvbXBvbmVudChtZS5wYXJlbnRJZCkucHJvbWlzZVZkb21VcGRhdGUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIG1lLm1vdW50ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzdHlsZSA9IG1lLnN0eWxlIHx8IHt9XG4gICAgICAgICAgICAgICAgc3R5bGUubWFyZ2luUmlnaHQgPSAnMHB4JztcbiAgICAgICAgICAgICAgICBtZS5zdHlsZSA9IHN0eWxlO1xuICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFNldHRpbmdzQ29udGFpbmVyKTtcblxuZXhwb3J0IHtTZXR0aW5nc0NvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jYWxlbmRhci52aWV3LlRpbWVBeGlzQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgVGltZUF4aXNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlcyBmb3IgaW50ZXJ2YWxcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyW119IGludGVydmFscz1bMTUsIDMwLCA2MF1cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBpbnRlcnZhbHM6IFsxNSwgMzAsIDYwXVxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNhbGVuZGFyLnZpZXcuVGltZUF4aXNDb21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jYWxlbmRhci52aWV3LlRpbWVBeGlzQ29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NhbGVuZGFyLXRpbWVheGlzJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NhbGVuZGFyLXRpbWVheGlzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tY2FsZW5kYXItdGltZWF4aXMnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1jYWxlbmRhci10aW1lYXhpcyddLFxuICAgICAgICAvKipcbiAgICAgICAgICogT25seSBmdWxsIGhvdXJzIGFyZSB2YWxpZCBmb3Igbm93XG4gICAgICAgICAqIGZvcm1hdDogJ2hoOm1tJ1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGVuZFRpbWVfPScyNDowMCdcbiAgICAgICAgICovXG4gICAgICAgIGVuZFRpbWVfOiAnMjQ6MDAnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRpbWUgaW50ZXJ2YWwgaW4gbWludXRlcyB0byBkaXNwbGF5IGFzIHJvd3MuXG4gICAgICAgICAqIFZhbGlkIHZhbHVlczogMTUsIDMwLCA2MFxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGludGVydmFsXz0zMFxuICAgICAgICAgKi9cbiAgICAgICAgaW50ZXJ2YWxfOiAzMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gcm93SGVpZ2h0Xz0yMFxuICAgICAgICAgKi9cbiAgICAgICAgcm93SGVpZ2h0XzogMjAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPbmx5IGZ1bGwgaG91cnMgYXJlIHZhbGlkIGZvciBub3dcbiAgICAgICAgICogZm9ybWF0OiAnaGg6bW0nXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gc3RhcnRUaW1lXz0nMDA6MDAnXG4gICAgICAgICAqL1xuICAgICAgICBzdGFydFRpbWVfOiAnMDA6MDAnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSB2ZG9tXG4gICAgICAgICAqL1xuICAgICAgICB2ZG9tOiB7XG4gICAgICAgICAgICBzdHlsZToge31cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmNyZWF0ZUl0ZW1zKCk7XG4gICAgICAgIG1lLmFmdGVyU2V0Um93SGVpZ2h0KG1lLnJvd0hlaWdodCwgMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBlbmRUaW1lIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEVuZFRpbWUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgICAgICAvLyB0b2RvOiBoYW5kbGUgMjQ6MDAgYXMgMjM6NTlcbiAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBtZS5lbmRUaW1lID0gJzI0OjAwJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUuYWZ0ZXJTZXRSb3dIZWlnaHQobWUucm93SGVpZ2h0LCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaW50ZXJ2YWwgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SW50ZXJ2YWwodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmFmdGVyU2V0Um93SGVpZ2h0KHRoaXMucm93SGVpZ2h0LCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgcm93SGVpZ2h0IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFJvd0hlaWdodCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgZW5kVGltZSAgICAgPSBtZS5nZXRUaW1lKG1lLmVuZFRpbWUpLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZSAgID0gbWUuZ2V0VGltZShtZS5zdGFydFRpbWUpLFxuICAgICAgICAgICAgICAgIHZkb20gICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgICAgICByb3dIZWlnaHQgICA9IG1lLnJvd0hlaWdodCxcbiAgICAgICAgICAgICAgICByb3dzUGVySXRlbSA9IG1lLmdldFJvd3NQZXJJdGVtKCksXG4gICAgICAgICAgICAgICAgaXRlbUhlaWdodCAgPSByb3dzUGVySXRlbSAqIHJvd0hlaWdodCArIHJvd3NQZXJJdGVtLCAvLyByb3dzUGVySXRlbSAqIDFweCBib3JkZXJzXG4gICAgICAgICAgICAgICAgdG90YWxIZWlnaHQgPSByb3dIZWlnaHQgKyAoKGVuZFRpbWUgLSBzdGFydFRpbWUpICogaXRlbUhlaWdodCksXG4gICAgICAgICAgICAgICAgaSwgaXRlbVN0eWxlO1xuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHZkb20uc3R5bGUsIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UgICAgOiBgbGluZWFyLWdyYWRpZW50KHZhcigtLWMtdy1iYWNrZ3JvdW5kLWNvbG9yKSAke2l0ZW1IZWlnaHQgLSAxfXB4LCB2YXIoLS1jLXctYm9yZGVyLWNvbG9yKSAxcHgpYCxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb25ZOiBgJHstaXRlbUhlaWdodCArIDF9cHhgLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplICAgICA6IGAwLjRlbSAke2l0ZW1IZWlnaHR9cHhgLFxuICAgICAgICAgICAgICAgIGhlaWdodCAgICAgICAgICAgICA6IGAke3RvdGFsSGVpZ2h0IC0gcm93SGVpZ2h0ICsgMX1weGAsXG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0ICAgICAgICAgIDogYCR7dG90YWxIZWlnaHQgLSByb3dIZWlnaHQgKyAxfXB4YFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZvciAoaT0wOyBpIDwgMjU7IGkrKykge1xuICAgICAgICAgICAgICAgIGl0ZW1TdHlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtpdGVtSGVpZ2h0fXB4YFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gc3RhcnRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1TdHlsZS5tYXJnaW5Ub3AgPSBgJHstMiAtIHJvd0hlaWdodCAqIChyb3dzUGVySXRlbSA9PT0gMSA/IDAuNSA6IHJvd3NQZXJJdGVtID09PSAyID8gMSA6IDIpfXB4YDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgaXRlbVN0eWxlLm1hcmdpblRvcDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2ZG9tLmNuW2ldLnN0eWxlID0gaXRlbVN0eWxlO1xuXG4gICAgICAgICAgICAgICAgdmRvbS5jbltpXS5yZW1vdmVEb20gPSAoaSA8IHN0YXJ0VGltZSB8fCBpIC0gMSA+PSBlbmRUaW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc2lsZW50IHVwZGF0ZTogdGhlIHZpZXcgY29udGFpbmluZyB0aGlzIGNvbXBvbmVudCB3aWxsIHRyaWdnZXIgdGhlIHZkb20gdXBkYXRlXG4gICAgICAgICAgICBtZS5fdmRvbSA9IHZkb207XG5cbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgIDogbWUsXG4gICAgICAgICAgICAgICAgcm93SGVpZ2h0ICA6IHJvd0hlaWdodCxcbiAgICAgICAgICAgICAgICByb3dzUGVySXRlbTogcm93c1Blckl0ZW0sXG4gICAgICAgICAgICAgICAgdG90YWxIZWlnaHQ6IHRvdGFsSGVpZ2h0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc3RhcnRUaW1lIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFN0YXJ0VGltZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJTZXRSb3dIZWlnaHQodGhpcy5yb3dIZWlnaHQsIDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgaW50ZXJ2YWwgY29uZmlnIGdldHMgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRJbnRlcnZhbCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmVmb3JlU2V0RW51bVZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgJ2ludGVydmFsJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtcygpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb20sXG4gICAgICAgICAgICBodG1sLCBpO1xuXG4gICAgICAgIHZkb20uY24gPSBbXTtcblxuICAgICAgICBmb3IgKGk9MDsgaSA8IDI1OyBpKyspIHtcbiAgICAgICAgICAgIGh0bWwgPSBpID09PSAyNCA/ICcwMDowMCcgOiAoaSA8IDEwID8gJzAnIDogJycpICsgaSArICc6MDAnO1xuXG4gICAgICAgICAgICB2ZG9tLmNuLnB1c2goe1xuICAgICAgICAgICAgICAgIGNscyAgOiBbJ25lby1jLXctdGltZWF4aXMtaXRlbSddLFxuICAgICAgICAgICAgICAgIGNuICAgOiBbe2h0bWw6IGh0bWx9XVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBhbW91bnQgb2Ygcm93cyByZWxhdGVkIHRvIHRoZSBpbnRlcnZhbCBjb25maWdcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldFJvd3NQZXJJdGVtKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcnZhbCA9PT0gNjAgPyAxIDogdGhpcy5pbnRlcnZhbCA9PT0gMzAgPyAyIDogNDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSB0aW1lIGZvciB0aGUgZW5kLSBvciBzdGFydFRpbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldFRpbWUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnNwbGl0KCc6JykubWFwKE51bWJlcilbMF07XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhUaW1lQXhpc0NvbXBvbmVudCk7XG5cbmV4cG9ydCB7VGltZUF4aXNDb21wb25lbnQgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbXBvbmVudCAgICAgICAgIGZyb20gJy4uLy4uL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5pbXBvcnQgRGF0ZVV0aWwgICAgICAgICAgZnJvbSAnLi4vLi4vdXRpbC9EYXRlLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgICAgICAgICAgZnJvbSAnLi4vLi4vdXRpbC9BcnJheS5tanMnO1xuaW1wb3J0IFRpbWVBeGlzQ29tcG9uZW50IGZyb20gJy4vVGltZUF4aXNDb21wb25lbnQubWpzJztcbmltcG9ydCBWRG9tVXRpbCAgICAgICAgICBmcm9tICcuLi8uLi91dGlsL1ZEb20ubWpzJztcbmltcG9ydCBXZWVrRXZlbnREcmFnWm9uZSBmcm9tICcuLi9kcmFnZ2FibGUvV2Vla0V2ZW50RHJhZ1pvbmUubWpzJztcblxuY29uc3QgdG9kYXlEYXRlID0gbmV3IERhdGUoKTtcblxuY29uc3QgdG9kYXkgPSB7XG4gICAgZGF5ICA6IHRvZGF5RGF0ZS5nZXREYXRlKCksXG4gICAgbW9udGg6IHRvZGF5RGF0ZS5nZXRNb250aCgpLFxuICAgIHllYXIgOiB0b2RheURhdGUuZ2V0RnVsbFllYXIoKVxufTtcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNhbGVuZGFyLnZpZXcuV2Vla0NvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIFdlZWtDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlcyBmb3IgdGltZUF4aXNQb3NpdGlvblxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gdGltZUF4aXNQb3NpdGlvbnM9WydlbmQnLCAnc3RhcnQnXVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIHRpbWVBeGlzUG9zaXRpb25zOiBbJ2VuZCcsICdzdGFydCddXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY2FsZW5kYXIudmlldy5XZWVrQ29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY2FsZW5kYXIudmlldy5XZWVrQ29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NhbGVuZGFyLXZpZXctd2Vla2NvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjYWxlbmRhci12aWV3LXdlZWtjb21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1jYWxlbmRhci13ZWVrY29tcG9uZW50J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tY2FsZW5kYXItd2Vla2NvbXBvbmVudCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogV2lsbCBnZXQgcGFzc2VkIGZyb20gdGhlIE1haW5Db250YWluZXJcbiAgICAgICAgICogQG1lbWJlciB7RGF0ZXxudWxsfSBjdXJyZW50RGF0ZV89bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjdXJyZW50RGF0ZV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZm9ybWF0IG9mIHRoZSBjb2x1bW4gaGVhZGVycy5cbiAgICAgICAgICogVmFsaWQgdmFsdWVzIGFyZTogbmFycm93LCBzaG9ydCAmIGxvbmdcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBkYXlOYW1lRm9ybWF0Xz0nc2hvcnQnXG4gICAgICAgICAqL1xuICAgICAgICBkYXlOYW1lRm9ybWF0XzogJ3Nob3J0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5kcmFnZ2FibGUuRHJhZ1pvbmV8bnVsbH0gZXZlbnREcmFnWm9uZT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBldmVudERyYWdab25lOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNhbGVuZGFyLnN0b3JlLkV2ZW50c3xudWxsfSBldmVudFN0b3JlXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBldmVudFN0b3JlXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdpbGwgZ2V0IHBhc3NlZCBmcm9tIHVwZGF0ZUhlYWRlcigpXG4gICAgICAgICAqIEBtZW1iZXIge0RhdGV8bnVsbH0gZmlyc3RDb2x1bW5EYXRlPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgZmlyc3RDb2x1bW5EYXRlOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogSW50ZXJuYWwgZmxhZyB0byBjaGVjayBpZiB1cGRhdGVIZWFkZXIodHJ1ZSkgaGFzIGFscmVhZHkgcnVuXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGhlYWRlckNyZWF0ZWQ9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaGVhZGVyQ3JlYXRlZDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtJbnRsLkRhdGVUaW1lRm9ybWF0fG51bGx9IGludGxGb3JtYXRfZGF5PW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaW50bEZvcm1hdF9kYXk6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtJbnRsLkRhdGVUaW1lRm9ybWF0fG51bGx9IGludGxGb3JtYXRfdGltZT1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGludGxGb3JtYXRfdGltZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGlzVXBkYXRpbmc9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGxvY2FsZV89TmVvLmNvbmZpZy5sb2NhbGVcbiAgICAgICAgICovXG4gICAgICAgIGxvY2FsZV86IE5lby5jb25maWcubG9jYWxlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSB0aW1lQXhpcz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB0aW1lQXhpczogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gdGltZUF4aXNDb25maWc9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdGltZUF4aXNDb25maWc6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQb3NpdGlvbiB0aGUgdGltZUF4aXMgYXQgdGhlIGxlZnQgb3IgcmlnaHQgc2lkZS5cbiAgICAgICAgICogVmFsaWQgdmFsdWVzIGFyZSBzdGFydCAmIGVuZC5cbiAgICAgICAgICogc3RhcnQgPT4gbGVmdCwgZW5kID0+IHJpZ2h0IGluIExUUiBtb2RlLlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHRpbWVBeGlzUG9zaXRpb25fPSdzdGFydCdcbiAgICAgICAgICovXG4gICAgICAgIHRpbWVBeGlzUG9zaXRpb25fOiAnc3RhcnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSB0aW1lRm9ybWF0Xz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB0aW1lRm9ybWF0Xzoge2hvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCd9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSB2ZG9tXG4gICAgICAgICAqL1xuICAgICAgICB2ZG9tOiB7XG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWhlYWRlciddXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby1zY3JvbGwtb3ZlcmxheSddXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgY2xzIDogWyduZW8tYy13LXNjcm9sbGNvbnRhaW5lciddLFxuICAgICAgICAgICAgICAgIGZsYWc6ICduZW8tYy13LXNjcm9sbGNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgY24gIDogW3tcbiAgICAgICAgICAgICAgICAgICAgY2xzIDogWyduZW8taGVhZGVyLXJvdyddLFxuICAgICAgICAgICAgICAgICAgICBmbGFnOiAnbmVvLWhlYWRlci1yb3cnLFxuICAgICAgICAgICAgICAgICAgICBjbiAgOiBbXVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgY2xzIDogWyduZW8tYy13LWNvbHVtbi10aW1lYXhpcy1jb250YWluZXInXSxcbiAgICAgICAgICAgICAgICAgICAgZmxhZzogJ25lby1jLXctY29sdW1uLXRpbWVheGlzLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIGNuICA6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbHMgIDogWyduZW8tYy13LWNvbHVtbi1jb250YWluZXInXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYWcgOiAnbmVvLWMtdy1jb2x1bW4tY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuICAgOiBbXVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogMC02ID0+IFN1bi1TYXRcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSB3ZWVrU3RhcnREYXlfPTBcbiAgICAgICAgICovXG4gICAgICAgIHdlZWtTdGFydERheV86IDBcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBtZS5kb21MaXN0ZW5lcnM7XG5cbiAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goXG4gICAgICAgICAgICB7ZGJsY2xpY2sgICAgOiBtZS5vbkV2ZW50RG91YmxlQ2xpY2ssIHNjb3BlOiBtZSwgZGVsZWdhdGU6ICcubmVvLWV2ZW50J30sXG4gICAgICAgICAgICB7J2RyYWc6ZW5kJyAgOiBtZS5vbkNvbHVtbkRyYWdFbmQsICAgIHNjb3BlOiBtZSwgZGVsZWdhdGU6ICcubmVvLWMtdy1jb2x1bW4nfSxcbiAgICAgICAgICAgIHsnZHJhZzplbmQnICA6IG1lLm9uRXZlbnREcmFnRW5kLCAgICAgc2NvcGU6IG1lLCBkZWxlZ2F0ZTogJy5uZW8tZXZlbnQnfSxcbiAgICAgICAgICAgIHsnZHJhZzptb3ZlJyA6IG1lLm9uQ29sdW1uRHJhZ01vdmUsICAgc2NvcGU6IG1lLCBkZWxlZ2F0ZTogJy5uZW8tYy13LWNvbHVtbid9LFxuICAgICAgICAgICAgeydkcmFnOm1vdmUnIDogbWUub25FdmVudERyYWdNb3ZlLCAgICBzY29wZTogbWUsIGRlbGVnYXRlOiAnLm5lby1ldmVudCd9LFxuICAgICAgICAgICAgeydkcmFnOnN0YXJ0JzogbWUub25Db2x1bW5EcmFnU3RhcnQsICBzY29wZTogbWUsIGRlbGVnYXRlOiAnLm5lby1jLXctY29sdW1uJ30sXG4gICAgICAgICAgICB7J2RyYWc6c3RhcnQnOiBtZS5vbkV2ZW50RHJhZ1N0YXJ0LCAgIHNjb3BlOiBtZSwgZGVsZWdhdGU6ICcubmVvLWV2ZW50J30sXG4gICAgICAgICAgICB7d2hlZWwgICAgICAgOiBtZS5vbldoZWVsLCAgICAgICAgICAgIHNjb3BlOiBtZX1cbiAgICAgICAgKTtcblxuICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG5cbiAgICAgICAgbWUudGltZUF4aXMgPSBOZW8uY3JlYXRlKFRpbWVBeGlzQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBwYXJlbnRJZCA6IG1lLmlkLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgY2hhbmdlOiBtZS5vblRpbWVBeGlzQ2hhbmdlLFxuICAgICAgICAgICAgICAgIHNjb3BlIDogbWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi5tZS50aW1lQXhpc0NvbmZpZyB8fCB7fVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5nZXRDb2x1bW5UaW1lQXhpc0NvbnRhaW5lcigpLmNuW21lLnRpbWVBeGlzUG9zaXRpb24gPT09ICdzdGFydCcgPyAndW5zaGlmdCcgOiAncHVzaCddKG1lLnRpbWVBeGlzLnZkb20pO1xuXG4gICAgICAgIG1lLnVwZGF0ZUhlYWRlcih0cnVlKTtcblxuICAgICAgICBtZS5oZWFkZXJDcmVhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGRhdGEuY29tcG9uZW50XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEucm93SGVpZ2h0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEucm93c1Blckl0ZW1cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS50b3RhbEhlaWdodFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV1cbiAgICAgKi9cbiAgICBhZGp1c3RUb3RhbEhlaWdodChkYXRhLCBzaWxlbnQ9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHJvd0hlaWdodCAgID0gZGF0YS5yb3dIZWlnaHQsXG4gICAgICAgICAgICByb3dzUGVySXRlbSA9IGRhdGEucm93c1Blckl0ZW0sXG4gICAgICAgICAgICBoZWlnaHQgICAgICA9IGRhdGEudG90YWxIZWlnaHQgLSByb3dIZWlnaHQsXG4gICAgICAgICAgICB2ZG9tICAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBpICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBncmFkaWVudCAgICA9IFtdO1xuXG4gICAgICAgIGZvciAoOyBpIDwgcm93c1Blckl0ZW07IGkrKykge1xuICAgICAgICAgICAgZ3JhZGllbnQucHVzaChcbiAgICAgICAgICAgICAgICBgdmFyKC0tYy13LWJhY2tncm91bmQtY29sb3IpICR7aSAqIHJvd0hlaWdodCArIGl9cHhgLFxuICAgICAgICAgICAgICAgIGB2YXIoLS1jLXctYmFja2dyb3VuZC1jb2xvcikgJHsoaSArIDEpICogcm93SGVpZ2h0ICsgaX1weGAsXG4gICAgICAgICAgICAgICAgJ3ZhcigtLWMtdy1ib3JkZXItY29sb3IpIDAnXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihtZS5nZXRDb2x1bW5Db250YWluZXIoKS5zdHlsZSwge1xuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KCR7Z3JhZGllbnQuam9pbignLCcpfSlgLFxuICAgICAgICAgICAgYmFja2dyb3VuZFNpemUgOiBgMXB4ICR7cm93c1Blckl0ZW0gKiByb3dIZWlnaHQgKyByb3dzUGVySXRlbX1weGAsXG4gICAgICAgICAgICBoZWlnaHQgICAgICAgICA6IGAke2hlaWdodH1weGAsXG4gICAgICAgICAgICBtYXhIZWlnaHQgICAgICA6IGAke2hlaWdodH1weGBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVbc2lsZW50ID8gJ192ZG9tJyA6ICd2ZG9tJ10gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgY3VycmVudERhdGUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtEYXRlfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7RGF0ZX0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRDdXJyZW50RGF0ZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSGVhZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGRheU5hbWVGb3JtYXQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RGF5TmFtZUZvcm1hdCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5pbnRsRm9ybWF0X2RheSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KG1lLmxvY2FsZSwge3dlZWtkYXk6IHZhbHVlfSk7XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG1lLnVwZGF0ZUhlYWRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBldmVudFN0b3JlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEV2ZW50U3RvcmUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZnRlclNldEV2ZW50U3RvcmUnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBsb2NhbGUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TG9jYWxlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAgICAgbWUuaW50bEZvcm1hdF9kYXkgID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQodmFsdWUsIHt3ZWVrZGF5OiBtZS5kYXlOYW1lRm9ybWF0fSk7XG4gICAgICAgICAgICBtZS5pbnRsRm9ybWF0X3RpbWUgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCh2YWx1ZSwgbWUudGltZUZvcm1hdCk7XG5cbiAgICAgICAgICAgIG1lLnVwZGF0ZUhlYWRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBtb3VudGVkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TW91bnRlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBtZS5nZXRDb2x1bW5Db250YWluZXIoKS5pZFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5zY3JvbGxCeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkICAgICAgIDogbWUuZ2V0U2Nyb2xsQ29udGFpbmVyKCkuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IGRhdGEud2lkdGggLyAzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgMjApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB0aW1lQXhpc1Bvc2l0aW9uIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFRpbWVBeGlzUG9zaXRpb24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjbHMgICAgICAgICAgICAgICA9IG1lLmNscyxcbiAgICAgICAgICAgIHZkb20gICAgICAgICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIHRpbWVBeGlzQ29udGFpbmVyID0gbWUuZ2V0Q29sdW1uVGltZUF4aXNDb250YWluZXIoKTtcblxuICAgICAgICBOZW9BcnJheVt2YWx1ZSA9PT0gJ2VuZCcgPyAnYWRkJyA6ICdyZW1vdmUnXShjbHMsICAnbmVvLXRpbWVheGlzLWVuZCcpO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aW1lQXhpc0NvbnRhaW5lci5jbi51bnNoaWZ0KHRpbWVBeGlzQ29udGFpbmVyLmNuLnBvcCgpKTsgLy8gc3dpdGNoIHRoZSBvcmRlciBvZiB0aGUgMiBpdGVtc1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuX2NscyA9IGNscztcbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB0aW1lRm9ybWF0IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFRpbWVGb3JtYXQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuaW50bEZvcm1hdF90aW1lID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobWUubG9jYWxlLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB3ZWVrU3RhcnREYXkgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0V2Vla1N0YXJ0RGF5KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVIZWFkZXIoZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVFdmVudHMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIGRheU5hbWVGb3JtYXQgY29uZmlnIGdldHMgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXREYXlOYW1lRm9ybWF0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iZWZvcmVTZXRFbnVtVmFsdWUodmFsdWUsIG9sZFZhbHVlLCAnZGF5TmFtZUZvcm1hdCcsIERhdGVVdGlsLnByb3RvdHlwZS5kYXlOYW1lRm9ybWF0cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgdGltZUF4aXNQb3NpdGlvbiBjb25maWcgZ2V0cyBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldFRpbWVBeGlzUG9zaXRpb24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJlZm9yZVNldEVudW1WYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICd0aW1lQXhpc1Bvc2l0aW9uJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgd2Vla1N0YXJ0RGF5IGNvbmZpZyBnZXRzIGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0V2Vla1N0YXJ0RGF5KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iZWZvcmVTZXRFbnVtVmFsdWUodmFsdWUsIG9sZFZhbHVlLCAnd2Vla1N0YXJ0RGF5JywgRGF0ZVV0aWwucHJvdG90eXBlLndlZWtTdGFydERheXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtEYXRlfSBkYXRlXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBjcmVhdGVDb2x1bW5BbmRIZWFkZXIoZGF0ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29sdW1uQ2xzICAgPSBbJ25lby1jLXctY29sdW1uJywgJ25lby1kcmFnZ2FibGUnXSxcbiAgICAgICAgICAgIGN1cnJlbnREYXRlID0gZGF0ZS5nZXREYXRlKCksXG4gICAgICAgICAgICBjdXJyZW50RGF5ICA9IGRhdGUuZ2V0RGF5KCksXG4gICAgICAgICAgICBkYXRlQ2xzICAgICA9IFsnbmVvLWRhdGUnXSxcbiAgICAgICAgICAgIGNvbHVtbiwgaGVhZGVyO1xuXG4gICAgICAgIGlmIChjdXJyZW50RGF5ID09PSAwIHx8IGN1cnJlbnREYXkgPT09IDYpIHtcbiAgICAgICAgICAgIGNvbHVtbkNscy5wdXNoKCduZW8td2Vla2VuZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNvbHVtbkNscywgJ25lby13ZWVrZW5kJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudERhdGUgICAgICAgID09PSB0b2RheS5kYXkgICAmJlxuICAgICAgICAgICAgZGF0ZS5nZXRNb250aCgpICAgID09PSB0b2RheS5tb250aCAmJlxuICAgICAgICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpID09PSB0b2RheS55ZWFyKSB7XG4gICAgICAgICAgICBkYXRlQ2xzLnB1c2goJ25lby10b2RheScpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29sdW1uID0ge1xuICAgICAgICAgICAgY2xzIDogY29sdW1uQ2xzLFxuICAgICAgICAgICAgZmxhZzogRGF0ZVV0aWwuY29udmVydFRveXl5eW1tZGQoZGF0ZSlcbiAgICAgICAgfTtcblxuICAgICAgICBoZWFkZXIgPSB7XG4gICAgICAgICAgICBjbHM6IFsnbmVvLWhlYWRlci1yb3ctaXRlbSddLFxuICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgIGNscyA6IFsnbmVvLWRheSddLFxuICAgICAgICAgICAgICAgIGh0bWw6IG1lLmludGxGb3JtYXRfZGF5LmZvcm1hdChkYXRlKVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGNscyA6IGRhdGVDbHMsXG4gICAgICAgICAgICAgICAgaHRtbDogY3VycmVudERhdGVcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGRlc3Ryb3koLi4uYXJncykge1xuICAgICAgICB0aGlzLmV2ZW50U3RvcmUgPSBudWxsO1xuICAgICAgICB0aGlzLnRpbWVBeGlzICAgPSBudWxsO1xuXG4gICAgICAgIHN1cGVyLmRlc3Ryb3koLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBnZXRDb2x1bW5Db250YWluZXIoKSB7XG4gICAgICAgIHJldHVybiBWRG9tVXRpbC5nZXRCeUZsYWcodGhpcy52ZG9tLCAnbmVvLWMtdy1jb2x1bW4tY29udGFpbmVyJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0RhdGV9IGRhdGVcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldENvbHVtbklkKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuaWR9X2NvbF8ke0RhdGVVdGlsLmNvbnZlcnRUb3l5eXltbWRkKGRhdGUpfWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0RhdGV9IGRhdGVcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldENvbHVtbkhlYWRlcklkKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuaWR9X2NoXyR7RGF0ZVV0aWwuY29udmVydFRveXl5eW1tZGQoZGF0ZSl9YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGdldENvbHVtblRpbWVBeGlzQ29udGFpbmVyKCkge1xuICAgICAgICByZXR1cm4gVkRvbVV0aWwuZ2V0QnlGbGFnKHRoaXMudmRvbSwgJ25lby1jLXctY29sdW1uLXRpbWVheGlzLWNvbnRhaW5lcicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZ2V0SGVhZGVyQ29udGFpbmVyKCkge1xuICAgICAgICByZXR1cm4gVkRvbVV0aWwuZ2V0QnlGbGFnKHRoaXMudmRvbSwgJ25lby1oZWFkZXItcm93Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlZCBpbnNpZGUgY3JlYXRlSWQoKSBhcyB0aGUgZGVmYXVsdCB2YWx1ZSBwYXNzZWQgdG8gdGhlIElkR2VuZXJhdG9yLlxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SWRLZXkoKSB7XG4gICAgICAgIHJldHVybiAnYy13JztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGdldFNjcm9sbENvbnRhaW5lcigpIHtcbiAgICAgICAgcmV0dXJuIFZEb21VdGlsLmdldEJ5RmxhZyh0aGlzLnZkb20sICduZW8tYy13LXNjcm9sbGNvbnRhaW5lcicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkNvbHVtbkRyYWdFbmQoZGF0YSkge1xuICAgICAgICBpZiAoIWRhdGEucGF0aFswXS5jbHMuaW5jbHVkZXMoJ25lby1ldmVudCcpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb25Db2x1bW5EcmFnRW5kJywgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Db2x1bW5EcmFnTW92ZShkYXRhKSB7XG4gICAgICAgIGlmICghZGF0YS5wYXRoWzBdLmNscy5pbmNsdWRlcygnbmVvLWV2ZW50JykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbkNvbHVtbkRyYWdNb3ZlJywgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Db2x1bW5EcmFnU3RhcnQoZGF0YSkge1xuICAgICAgICBpZiAoIWRhdGEucGF0aFswXS5jbHMuaW5jbHVkZXMoJ25lby1ldmVudCcpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb25Db2x1bW5EcmFnU3RhcnQnLCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkV2ZW50RG91YmxlQ2xpY2soZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZygnb25FdmVudERvdWJsZUNsaWNrJywgZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRXZlbnREcmFnRW5kKGRhdGEpIHtcbiAgICAgICAgdGhpcy5ldmVudERyYWdab25lLmRyYWdFbmQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25FdmVudERyYWdNb3ZlKGRhdGEpIHtcbiAgICAgICAgdGhpcy5ldmVudERyYWdab25lLmRyYWdNb3ZlKGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkV2ZW50RHJhZ1N0YXJ0KGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGlkICAgICAgICAgID0gZGF0YS5wYXRoWzBdLmlkLFxuICAgICAgICAgICAgZHJhZ0VsZW1lbnQgPSBWRG9tVXRpbC5maW5kVmRvbUNoaWxkKG1lLnZkb20sIGlkKS52ZG9tLFxuICAgICAgICAgICAgdGltZUF4aXMgICAgPSBtZS50aW1lQXhpcztcblxuICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICBkcmFnRWxlbWVudCAgICAgIDogZHJhZ0VsZW1lbnQsXG4gICAgICAgICAgICBlbmRUaW1lICAgICAgICAgIDogdGltZUF4aXMuZ2V0VGltZSh0aW1lQXhpcy5lbmRUaW1lKSxcbiAgICAgICAgICAgIGV2ZW50UmVjb3JkICAgICAgOiBtZS5ldmVudFN0b3JlLmdldChkcmFnRWxlbWVudC5mbGFnKSxcbiAgICAgICAgICAgIHByb3h5UGFyZW50SWQgICAgOiBkYXRhLnBhdGhbMV0uaWQsXG4gICAgICAgICAgICBzY3JvbGxDb250YWluZXJJZDogbWUuZ2V0U2Nyb2xsQ29udGFpbmVyKCkuaWQsXG4gICAgICAgICAgICBzdGFydFRpbWUgICAgICAgIDogdGltZUF4aXMuZ2V0VGltZSh0aW1lQXhpcy5zdGFydFRpbWUpXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFtZS5ldmVudERyYWdab25lKSB7XG4gICAgICAgICAgICBtZS5ldmVudERyYWdab25lID0gTmVvLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgbW9kdWxlIDogV2Vla0V2ZW50RHJhZ1pvbmUsXG4gICAgICAgICAgICAgICAgYXBwTmFtZTogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBvd25lciAgOiBtZSxcbiAgICAgICAgICAgICAgICAuLi5jb25maWcsXG5cbiAgICAgICAgICAgICAgICBkcmFnUHJveHlDb25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbGxDaGFuZ2U6ICdoZWlnaHQnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLmV2ZW50RHJhZ1pvbmUuc2V0KGNvbmZpZyk7XG4gICAgICAgIH1cblxuICAgICAgICBtZS5ldmVudERyYWdab25lLmRyYWdTdGFydChkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGRhdGEuY29tcG9uZW50XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEucm93SGVpZ2h0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEucm93c1Blckl0ZW1cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS50b3RhbEhlaWdodFxuICAgICAqL1xuICAgIG9uVGltZUF4aXNDaGFuZ2UoZGF0YSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmFkanVzdFRvdGFsSGVpZ2h0KGRhdGEsIG1lLmhlYWRlckNyZWF0ZWQpO1xuXG4gICAgICAgIGlmIChtZS5oZWFkZXJDcmVhdGVkKSB7XG4gICAgICAgICAgICBtZS51cGRhdGVFdmVudHMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbldoZWVsKGRhdGEpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVXBkYXRpbmcgJiYgTWF0aC5hYnMoZGF0YS5kZWx0YVgpID4gTWF0aC5hYnMoZGF0YS5kZWx0YVkpKSB7XG4gICAgICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgY29sdW1ucyAgICAgICA9IG1lLmdldENvbHVtbkNvbnRhaW5lcigpLFxuICAgICAgICAgICAgICAgIGhlYWRlciAgICAgICAgPSBtZS5nZXRIZWFkZXJDb250YWluZXIoKSxcbiAgICAgICAgICAgICAgICBpICAgICAgICAgICAgID0gMCxcbiAgICAgICAgICAgICAgICB0aW1lQXhpc1dpZHRoID0gNTAsXG4gICAgICAgICAgICAgICAgd2lkdGggICAgICAgICA9IGRhdGEuY2xpZW50V2lkdGggLSB0aW1lQXhpc1dpZHRoLFxuICAgICAgICAgICAgICAgIGNvbmZpZywgZGF0ZSwgc2Nyb2xsVmFsdWU7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEuc2Nyb2xsTGVmdCwgTWF0aC5yb3VuZChkYXRhLnNjcm9sbExlZnQgLyAoZGF0YS5jbGllbnRXaWR0aCAtIHRpbWVBeGlzV2lkdGgpICogNykpO1xuXG4gICAgICAgICAgICBpZiAoZGF0YS5kZWx0YVggPiAwICYmIE1hdGgucm91bmQoZGF0YS5zY3JvbGxMZWZ0IC8gd2lkdGggKiA3KSA+IDEzKSB7XG4gICAgICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGNvbHVtbnMuY25bY29sdW1ucy5jbi5sZW5ndGggLSAxXS5mbGFnKTtcblxuICAgICAgICAgICAgICAgIGNvbHVtbnMuY24uc3BsaWNlKDAsIDcpO1xuICAgICAgICAgICAgICAgIGhlYWRlci5jbi5zcGxpY2UoMCwgNyk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IDc7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyAxKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25maWc9IG1lLmNyZWF0ZUNvbHVtbkFuZEhlYWRlcihkYXRlKTtcblxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zLmNuLnB1c2goY29uZmlnLmNvbHVtbik7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlci5jbi5wdXNoKGNvbmZpZy5oZWFkZXIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNjcm9sbFZhbHVlID0gLXdpZHRoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhLmRlbHRhWCA8IDAgJiYgTWF0aC5yb3VuZChkYXRhLnNjcm9sbExlZnQgLyB3aWR0aCAqIDcpIDwgMSkge1xuICAgICAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShjb2x1bW5zLmNuWzBdLmZsYWcpO1xuXG4gICAgICAgICAgICAgICAgY29sdW1ucy5jbi5sZW5ndGggPSAxNDtcbiAgICAgICAgICAgICAgICBoZWFkZXIuY24ubGVuZ3RoID0gMTQ7XG5cbiAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IDc7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSAxKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25maWc9IG1lLmNyZWF0ZUNvbHVtbkFuZEhlYWRlcihkYXRlKTtcblxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zLmNuLnVuc2hpZnQoY29uZmlnLmNvbHVtbik7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlci5jbi51bnNoaWZ0KGNvbmZpZy5oZWFkZXIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNjcm9sbFZhbHVlID0gd2lkdGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzY3JvbGxWYWx1ZSkge1xuICAgICAgICAgICAgICAgIG1lLmlzVXBkYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgbWUucHJvbWlzZVZkb21VcGRhdGUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLnNjcm9sbEJ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgICAgICAgOiBtZS5nZXRTY3JvbGxDb250YWluZXIoKS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgIDogc2Nyb2xsVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5pc1VwZGF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGFsZ29yaXRobSByZWxpZXMgb24gdGhlIGV2ZW50U3RvcmUgYmVpbmcgc29ydGVkIGJ5IHN0YXJ0RGF0ZSBBU0NcbiAgICAgKi9cbiAgICB1cGRhdGVFdmVudHMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHRpbWVBeGlzICAgPSBtZS50aW1lQXhpcyxcbiAgICAgICAgICAgIGVuZFRpbWUgICAgPSB0aW1lQXhpcy5nZXRUaW1lKHRpbWVBeGlzLmVuZFRpbWUpLFxuICAgICAgICAgICAgc3RhcnRUaW1lICA9IHRpbWVBeGlzLmdldFRpbWUodGltZUF4aXMuc3RhcnRUaW1lKSxcbiAgICAgICAgICAgIHRvdGFsVGltZSAgPSBlbmRUaW1lIC0gc3RhcnRUaW1lLFxuICAgICAgICAgICAgZGF0ZSAgICAgICA9IERhdGVVdGlsLmNsb25lKG1lLmZpcnN0Q29sdW1uRGF0ZSksXG4gICAgICAgICAgICBldmVudFN0b3JlID0gbWUuZXZlbnRTdG9yZSxcbiAgICAgICAgICAgIHZkb20gICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgY29udGVudCAgICA9IG1lLmdldENvbHVtbkNvbnRhaW5lcigpLFxuICAgICAgICAgICAgaiAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgID0gZXZlbnRTdG9yZS5nZXRDb3VudCgpLFxuICAgICAgICAgICAgY29sdW1uLCBkdXJhdGlvbiwgaGVpZ2h0LCBpLCByZWNvcmQsIHJlY29yZEtleSwgc3RhcnRIb3VycywgdG9wO1xuXG4gICAgICAgIC8vIHJlbW92ZSBwcmV2aW91cyBldmVudHMgZnJvbSB0aGUgdmRvbVxuICAgICAgICBjb250ZW50LmNuLmZvckVhY2goaXRlbSA9PiBpdGVtLmNuID0gW10pO1xuXG4gICAgICAgIGZvciAoOyBqIDwgMjE7IGorKykge1xuICAgICAgICAgICAgY29sdW1uID0gY29udGVudC5jbltqXTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmVjb3JkID0gZXZlbnRTdG9yZS5pdGVtc1tpXTtcblxuICAgICAgICAgICAgICAgIC8vIHRvZG86IHdlIG5lZWQgYSBjaGVjayBmb3IgZGF0ZSBvdmVybGFwcyA9PiBzdGFydERhdGUgPCBjdXJyZW50IGRheSwgZW5kRGF0ZSA+PSBjdXJyZW50IGRheVxuICAgICAgICAgICAgICAgIGlmIChEYXRlVXRpbC5tYXRjaERhdGUoZGF0ZSwgcmVjb3JkLnN0YXJ0RGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKERhdGVVdGlsLm1hdGNoRGF0ZShkYXRlLCByZWNvcmQuZW5kRGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZEtleSAgPSByZWNvcmRbZXZlbnRTdG9yZS5rZXlQcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbiAgID0gKHJlY29yZC5lbmREYXRlIC0gcmVjb3JkLnN0YXJ0RGF0ZSkgLyA2MCAvIDYwIC8gMTAwMDsgLy8gZHVyYXRpb24gaW4gaG91cnNcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCAgICAgPSBNYXRoLnJvdW5kKGR1cmF0aW9uIC8gdG90YWxUaW1lICogMTAwICogMTAwMCkgLyAxMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRIb3VycyA9IChyZWNvcmQuc3RhcnREYXRlLmdldEhvdXJzKCkgKiA2MCArIHJlY29yZC5zdGFydERhdGUuZ2V0TWludXRlcygpKSAvIDYwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wICAgICAgICA9IE1hdGgucm91bmQoKHN0YXJ0SG91cnMgLSBzdGFydFRpbWUpIC8gdG90YWxUaW1lICogMTAwICogMTAwMCkgLyAxMDAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhqLCByZWNvcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codG9wKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uLmNuLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNscyAgICAgOiBbJ25lby1ldmVudCcsICduZW8tZHJhZ2dhYmxlJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhZyAgICA6IHJlY29yZFtldmVudFN0b3JlLmtleVByb3BlcnR5XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCAgICAgIDogbWUuaWQgKyAnX18nICsgcmVjb3JkS2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4OiAtMSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHMgOiBbJ25lby1ldmVudC10aW1lJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6IG1lLmludGxGb3JtYXRfdGltZS5mb3JtYXQocmVjb3JkLnN0YXJ0RGF0ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkICA6IG1lLmlkICsgJ19fdGltZV9fJyArIHJlY29yZEtleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzIDogWyduZW8tZXZlbnQtdGl0bGUnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogcmVjb3JkLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCAgOiBtZS5pZCArICdfX3RpdGxlX18nICsgcmVjb3JkS2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGBjYWxjKCR7aGVpZ2h0fSUgLSAycHgpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wICAgOiBgY2FsYygke3RvcH0lICsgMXB4KWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIDogJ2NhbGMoMTAwJSAtIDFweCknIC8vIHRvZG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2NyZWF0ZT1mYWxzZV1cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzaWxlbnQ9ZmFsc2VdXG4gICAgICovXG4gICAgdXBkYXRlSGVhZGVyKGNyZWF0ZT1mYWxzZSwgc2lsZW50PWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRhdGUgICAgPSBtZS5jdXJyZW50RGF0ZSwgLy8gY2xvbmVkXG4gICAgICAgICAgICB2ZG9tICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGNvbnRlbnQgPSBtZS5nZXRDb2x1bW5Db250YWluZXIoKSxcbiAgICAgICAgICAgIGhlYWRlciAgPSBtZS5nZXRIZWFkZXJDb250YWluZXIoKSxcbiAgICAgICAgICAgIGkgICAgICAgPSAwLFxuICAgICAgICAgICAgY29sdW1uQ2xzLCBjdXJyZW50RGF0ZSwgY3VycmVudERheSwgZGF0ZUNscywgaGVhZGVySWQ7XG5cbiAgICAgICAgZGF0ZS5zZXREYXRlKG1lLmN1cnJlbnREYXRlLmdldERhdGUoKSAtIG1lLmN1cnJlbnREYXRlLmdldERheSgpICsgbWUud2Vla1N0YXJ0RGF5IC0gNyk7XG5cbiAgICAgICAgbWUuZmlyc3RDb2x1bW5EYXRlID0gRGF0ZVV0aWwuY2xvbmUoZGF0ZSk7XG5cbiAgICAgICAgZm9yICg7IGkgPCAyMTsgaSsrKSB7XG4gICAgICAgICAgICBjb2x1bW5DbHMgICA9IFsnbmVvLWMtdy1jb2x1bW4nLCAnbmVvLWRyYWdnYWJsZSddO1xuICAgICAgICAgICAgY3VycmVudERhdGUgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgICAgIGN1cnJlbnREYXkgID0gZGF0ZS5nZXREYXkoKTtcbiAgICAgICAgICAgIGRhdGVDbHMgICAgID0gWyduZW8tZGF0ZSddO1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudERheSA9PT0gMCB8fCBjdXJyZW50RGF5ID09PSA2KSB7XG4gICAgICAgICAgICAgICAgY29sdW1uQ2xzLnB1c2goJ25lby13ZWVrZW5kJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShjb2x1bW5DbHMsICduZW8td2Vla2VuZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY3VycmVudERhdGUgICAgICAgID09PSB0b2RheS5kYXkgICAmJlxuICAgICAgICAgICAgICAgIGRhdGUuZ2V0TW9udGgoKSAgICA9PT0gdG9kYXkubW9udGggJiZcbiAgICAgICAgICAgICAgICBkYXRlLmdldEZ1bGxZZWFyKCkgPT09IHRvZGF5LnllYXIpIHtcbiAgICAgICAgICAgICAgICBkYXRlQ2xzLnB1c2goJ25lby10b2RheScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUoZGF0ZUNscywgJ25lby10b2RheScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoZWFkZXJJZCA9IG1lLmdldENvbHVtbkhlYWRlcklkKGRhdGUpO1xuXG4gICAgICAgICAgICBpZiAoY3JlYXRlKSB7XG4gICAgICAgICAgICAgICAgY29udGVudC5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgY2xzIDogY29sdW1uQ2xzLFxuICAgICAgICAgICAgICAgICAgICBmbGFnOiBEYXRlVXRpbC5jb252ZXJ0VG95eXl5bW1kZChkYXRlKSxcbiAgICAgICAgICAgICAgICAgICAgaWQgIDogbWUuZ2V0Q29sdW1uSWQoZGF0ZSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGhlYWRlci5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1oZWFkZXItcm93LWl0ZW0nXSxcbiAgICAgICAgICAgICAgICAgICAgaWQgOiBoZWFkZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xzIDogWyduZW8tZGF5J10sXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sOiBtZS5pbnRsRm9ybWF0X2RheS5mb3JtYXQoZGF0ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCAgOiBgJHtoZWFkZXJJZH1fZGF5YFxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbHMgOiBkYXRlQ2xzLFxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogY3VycmVudERhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCAgOiBgJHtoZWFkZXJJZH1fZGF0ZWBcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjb250ZW50LmNuW2ldLCB7XG4gICAgICAgICAgICAgICAgICAgIGNscyA6IGNvbHVtbkNscyxcbiAgICAgICAgICAgICAgICAgICAgZmxhZzogRGF0ZVV0aWwuY29udmVydFRveXl5eW1tZGQoZGF0ZSksXG4gICAgICAgICAgICAgICAgICAgIGlkICA6IG1lLmdldENvbHVtbklkKGRhdGUpXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBoZWFkZXIuY25baV0uaWQgPSBoZWFkZXJJZDtcblxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oaGVhZGVyLmNuW2ldLmNuWzBdLCB7XG4gICAgICAgICAgICAgICAgICAgIGh0bWw6IG1lLmludGxGb3JtYXRfZGF5LmZvcm1hdChkYXRlKSxcbiAgICAgICAgICAgICAgICAgICAgaWQgIDogYCR7aGVhZGVySWR9X2RheWBcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oaGVhZGVyLmNuW2ldLmNuWzFdLCB7XG4gICAgICAgICAgICAgICAgICAgIGNscyA6IGRhdGVDbHMsXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6IGN1cnJlbnREYXRlLFxuICAgICAgICAgICAgICAgICAgICBpZCAgOiBgJHtoZWFkZXJJZH1fZGF0ZWBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBtZVtzaWxlbnQgPyAnX3Zkb20nIDogJ3Zkb20nXSA9IHZkb207XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhXZWVrQ29tcG9uZW50KTtcblxuZXhwb3J0IHtXZWVrQ29tcG9uZW50IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50L0Jhc2UubWpzJztcbmltcG9ydCBEYXRlVXRpbCAgZnJvbSAnLi4vLi4vdXRpbC9EYXRlLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgIGZyb20gJy4uLy4uL3V0aWwvQXJyYXkubWpzJztcblxuY29uc3QgdG9kYXlEYXRlID0gbmV3IERhdGUoKTtcblxuY29uc3QgdG9kYXkgPSB7XG4gICAgZGF5ICA6IHRvZGF5RGF0ZS5nZXREYXRlKCksXG4gICAgbW9udGg6IHRvZGF5RGF0ZS5nZXRNb250aCgpLFxuICAgIHllYXIgOiB0b2RheURhdGUuZ2V0RnVsbFllYXIoKVxufTtcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNhbGVuZGFyLnZpZXcuWWVhckNvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIFllYXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY2FsZW5kYXIudmlldy5ZZWFyQ29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY2FsZW5kYXIudmlldy5ZZWFyQ29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NhbGVuZGFyLXZpZXcteWVhcmNvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjYWxlbmRhci12aWV3LXllYXJjb21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogU3RvcmVzIHRoZSBsYXN0IGRhdGUgY2hhbmdlIHdoaWNoIGdvdCB0cmlnZ2VyZWQgd2hpbGUgYSB5ZWFyIHRyYW5zaXRpb24gd2FzIHJ1bm5pbmdcbiAgICAgICAgICogQG1lbWJlciB7RGF0ZXxudWxsfSBjYWNoZWRVcGRhdGU9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjYWNoZWRVcGRhdGU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWNhbGVuZGFyLXllYXJjb21wb25lbnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1jYWxlbmRhci15ZWFyY29tcG9uZW50J10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaWxsIGdldCBwYXNzZWQgZnJvbSB0aGUgTWFpbkNvbnRhaW5lclxuICAgICAgICAgKiBAbWVtYmVyIHtEYXRlfG51bGx9IGN1cnJlbnREYXRlXz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGN1cnJlbnREYXRlXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBmb3JtYXQgb2YgdGhlIGNvbHVtbiBoZWFkZXJzLlxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXMgYXJlOiBuYXJyb3csIHNob3J0ICYgbG9uZ1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGRheU5hbWVGb3JtYXRfPSduYXJyb3cnXG4gICAgICAgICAqL1xuICAgICAgICBkYXlOYW1lRm9ybWF0XzogJ25hcnJvdycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY2FsZW5kYXIuc3RvcmUuRXZlbnRzfG51bGx9IGV2ZW50U3RvcmVfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGV2ZW50U3RvcmVfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7SW50bC5EYXRlVGltZUZvcm1hdHxudWxsfSBpbnRsRm9ybWF0X2RheT1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGludGxGb3JtYXRfZGF5OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7SW50bC5EYXRlVGltZUZvcm1hdHxudWxsfSBpbnRsRm9ybWF0X21vbnRoPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaW50bEZvcm1hdF9tb250aDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludGVybmFsIGZsYWcgdG8gcHJldmVudCBjaGFuZ2luZyB0aGUgZGF0ZSB3aGlsZSBjaGFuZ2UgYW5pbWF0aW9ucyBhcmUgc3RpbGwgcnVubmluZ1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBpc1VwZGF0aW5nXz1mYWxzZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBpc1VwZGF0aW5nXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGxvY2FsZV89TmVvLmNvbmZpZy5sb2NhbGVcbiAgICAgICAgICovXG4gICAgICAgIGxvY2FsZV86IE5lby5jb25maWcubG9jYWxlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGZvcm1hdCBvZiB0aGUgbW9udGggaGVhZGVyIG5hbWVzLlxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXMgYXJlOiBuYXJyb3csIHNob3J0ICYgbG9uZ1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG1vbnRoTmFtZUZvcm1hdF89J2xvbmcnXG4gICAgICAgICAqL1xuICAgICAgICBtb250aE5hbWVGb3JtYXRfOiAnbG9uZycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHRvIHNjcm9sbCBuZXcgeWVhcnMgaW4gZnJvbSB0aGUgdG9wXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNjcm9sbE5ld1llYXJGcm9tVG9wPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBzY3JvbGxOZXdZZWFyRnJvbVRvcDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHRvIHNob3cgYm9yZGVycyBmb3IgdGhlIGNhbGVuZGFyIG1vbnRoIGNlbGxzXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNob3dDZWxsQm9yZGVyc189ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHNob3dDZWxsQm9yZGVyc186IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSB0byBzaG93IHRoZSBkYXlzIG9mIHRoZSBwcmV2aW91cyBvciBuZXh0IG1vbnRoIChub3Qgc2VsZWN0YWJsZSlcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hvd0Rpc2FibGVkRGF5c189dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgc2hvd0Rpc2FibGVkRGF5c186IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaG93V2Vla2VuZHNfPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHNob3dXZWVrZW5kc186IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHRvIHNob3cgdGhlIHdlZWsgbnVtYmVyIGFzIHRoZSBmaXJzdCBjb2x1bW4gb2YgZWFjaCBtb250aFxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaG93V2Vla051bWJlcnNfPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHNob3dXZWVrTnVtYmVyc186IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHRvIHNob3cgNiB3ZWVrcyBmb3IgZWFjaCBtb250aCwgc28gdGhhdCBhbGwgbW9udGhzIGhhdmUgdGhlIHNhbWUgaGVpZ2h0XG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpeFdlZWtzUGVyTW9udGhfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBzaXhXZWVrc1Blck1vbnRoXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHRvIHVzZSBzbGlkaW5nIGFuaW1hdGlvbnNcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gdXNlQW5pbWF0aW9ucz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICB1c2VBbmltYXRpb25zOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSB2ZG9tXG4gICAgICAgICAqL1xuICAgICAgICB2ZG9tOiB7XG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWNvbnRlbnQtd3JhcHBlciddLFxuICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby15ZWFyLWhlYWRlciddXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLW1vbnRocy1jb250YWluZXInXVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogMC02ID0+IFN1bi1TYXRcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSB3ZWVrU3RhcnREYXlfPTBcbiAgICAgICAgICovXG4gICAgICAgIHdlZWtTdGFydERheV86IDBcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBtZS5kb21MaXN0ZW5lcnM7XG5cbiAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgd2hlZWw6IHtmbjogbWUub25XaGVlbCwgc2NvcGU6IG1lfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG5cbiAgICAgICAgbWUudXBkYXRlSGVhZGVyWWVhcigpO1xuICAgICAgICBtZS5jcmVhdGVNb250aHMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGN1cnJlbnREYXRlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7RGF0ZX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0RhdGV9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0Q3VycmVudERhdGUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXQgb2xkWWVhciA9IG9sZFZhbHVlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICAgICAgeWVhciAgICA9IHZhbHVlICAgLmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgICAgIGlmICh5ZWFyICE9PSBvbGRZZWFyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VZZWFyKHllYXIgLSBvbGRZZWFyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdG9kb1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcjIyBzZWxlY3QgYSBuZXcgZGF5JywgdmFsdWUuZ2V0TW9udGgoKSwgdmFsdWUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgZGF5TmFtZUZvcm1hdCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXREYXlOYW1lRm9ybWF0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZURheU5hbWVzUm93cyh2YWx1ZSwgb2xkVmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbG9jYWxlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldExvY2FsZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgICAgIG1lLnVwZGF0ZURheU5hbWVzUm93cyhtZS5kYXlOYW1lRm9ybWF0LCAnJywgdHJ1ZSk7XG4gICAgICAgICAgICBtZS51cGRhdGVNb250aE5hbWVGb3JtYXQobWUubW9udGhOYW1lRm9ybWF0LCAnJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1vbnRoTmFtZUZvcm1hdCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNb250aE5hbWVGb3JtYXQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlTW9udGhOYW1lRm9ybWF0KHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBzaG93Q2VsbEJvcmRlcnMgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTaG93Q2VsbEJvcmRlcnModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBjbHMgPSB0aGlzLmNscztcblxuICAgICAgICBOZW9BcnJheVt2YWx1ZSA/ICdhZGQnIDogJ3JlbW92ZSddKGNscywgJ25lby1zaG93LWNlbGwtYm9yZGVycycpO1xuICAgICAgICB0aGlzLmNscyA9IGNscztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHNob3dXZWVrZW5kcyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFNob3dXZWVrZW5kcyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICB2ZG9tID0gbWUudmRvbSxcbiAgICAgICAgICAgICAgICBpICAgID0gMCxcbiAgICAgICAgICAgICAgICBpdGVtLCBpdGVtQ24sIGosIGssIGxlbjtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCAxMjsgaSsrKSB7IC8vIG1vbnRoc1xuICAgICAgICAgICAgICAgIGl0ZW1DbiA9IHZkb20uY25bMF0uY25bMV0uY25baV0uY247XG4gICAgICAgICAgICAgICAgbGVuICAgID0gaXRlbUNuLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGZvciAoaj0xOyBqIDwgbGVuOyBqKyspIHsgLy8gd2Vla3NcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrPTE7IGsgPCA4OyBrKyspIHsgLy8gZGF5c1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGl0ZW1DbltqXS5jbltrXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2xzLmluY2x1ZGVzKCduZW8td2Vla2VuZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBpdGVtLnJlbW92ZURvbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnJlbW92ZURvbSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB0cmlnZ2VycyB0aGUgdmRvbSB1cGRhdGVcbiAgICAgICAgICAgIG1lLnVwZGF0ZURheU5hbWVzUm93cyhtZS5kYXlOYW1lRm9ybWF0LCAnJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHNob3dXZWVrTnVtYmVycyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFNob3dXZWVrTnVtYmVycyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICB2ZG9tID0gbWUudmRvbSxcbiAgICAgICAgICAgICAgICBpICAgID0gMCxcbiAgICAgICAgICAgICAgICBpdGVtQ24sIGosIGxlbjtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaXRlbUNuID0gdmRvbS5jblswXS5jblsxXS5jbltpXS5jbjtcbiAgICAgICAgICAgICAgICBsZW4gICAgPSBpdGVtQ24ubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgZm9yIChqID0gMTsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1DbltqXS5jblswXS5yZW1vdmVEb20gPSAhdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc2l4V2Vla3NQZXJNb250aCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFNpeFdlZWtzUGVyTW9udGgodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgdmRvbSA9IG1lLnZkb20sXG4gICAgICAgICAgICAgICAgZGF0ZSA9IG1lLmN1cnJlbnREYXRlLCAvLyBjbG9uZWRcbiAgICAgICAgICAgICAgICBpICAgID0gMDtcblxuICAgICAgICAgICAgZGF0ZS5zZXRNb250aCgwKTtcbiAgICAgICAgICAgIGRhdGUuc2V0RGF0ZSgxKTtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmRvbS5jblswXS5jblsxXS5jbltpXS5jbls3XS5yZW1vdmVEb20gPSBEYXRlVXRpbC5nZXRXZWVrc09mTW9udGgoZGF0ZSwgbWUud2Vla1N0YXJ0RGF5KSA9PT0gNSAmJiAhdmFsdWU7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRNb250aChkYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHdlZWtTdGFydERheSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRXZWVrU3RhcnREYXkodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1vbnRocygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgZGF5TmFtZUZvcm1hdCBjb25maWcgZ2V0cyBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldERheU5hbWVGb3JtYXQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJlZm9yZVNldEVudW1WYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICdkYXlOYW1lRm9ybWF0JywgRGF0ZVV0aWwucHJvdG90eXBlLmRheU5hbWVGb3JtYXRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBtb250aE5hbWVGb3JtYXQgY29uZmlnIGdldHMgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRNb250aE5hbWVGb3JtYXQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJlZm9yZVNldEVudW1WYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICdtb250aE5hbWVGb3JtYXQnLCBEYXRlVXRpbC5wcm90b3R5cGUubW9udGhOYW1lRm9ybWF0cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RvcmVzIHRoZSBsYXN0IGRhdGUgY2hhbmdlIHdoaWNoIGNvdWxkIG5vdCBnZXQgYXBwbGllZCB3aGlsZSBhIHRyYW5zaXRpb24gd2FzIHJ1bm5pbmdcbiAgICAgKiBAcGFyYW0ge0RhdGV9IFtkYXRlPXRoaXMuY3VycmVudERhdGVdXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGNhY2hlVXBkYXRlKGRhdGU9dGhpcy5jdXJyZW50RGF0ZSkge1xuICAgICAgICB0aGlzLmNhY2hlZFVwZGF0ZSA9IGRhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5jcmVtZW50XG4gICAgICovXG4gICAgY2hhbmdlWWVhcihpbmNyZW1lbnQpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIHNjcm9sbEZyb21Ub3AsIHZkb20sIHk7XG5cbiAgICAgICAgaWYgKCFtZS51c2VBbmltYXRpb25zKSB7XG4gICAgICAgICAgICAvLyBtZS5yZWNyZWF0ZUNvbnRlbnQoaW5jcmVtZW50KTsgLy8gdG9kb1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFtZS5pc1VwZGF0aW5nKSB7XG4gICAgICAgICAgICAgICAgbWUuaXNVcGRhdGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBOZW8ubWFpbi5Eb21BY2Nlc3MuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG1lLmlkXG4gICAgICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsRnJvbVRvcCA9IG1lLnNjcm9sbE5ld1llYXJGcm9tVG9wICYmIGluY3JlbWVudCA8IDAgfHwgIW1lLnNjcm9sbE5ld1llYXJGcm9tVG9wICYmIGluY3JlbWVudCA+IDA7XG4gICAgICAgICAgICAgICAgICAgIHZkb20gICAgICAgICAgPSBtZS52ZG9tO1xuICAgICAgICAgICAgICAgICAgICB5ICAgICAgICAgICAgID0gc2Nyb2xsRnJvbVRvcCA/IDAgOiAtZGF0YS5oZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgdmRvbS5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsczogWyduZW8tcmVsYXRpdmUnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWFuaW1hdGlvbi13cmFwcGVyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWNvbnRlbnQtd3JhcHBlciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHMgOiBbJ25lby15ZWFyLWhlYWRlciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogbWUuY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLW1vbnRocy1jb250YWluZXInXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCAgIDogYCR7MiAqIGRhdGEuaGVpZ2h0fXB4YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgke3l9cHgpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggICAgOiBgJHtkYXRhLndpZHRofXB4YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIG1lLmNyZWF0ZU1vbnRocyh0cnVlLCB2ZG9tLmNuWzFdLmNuWzBdLmNuWzBdLmNuWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgdmRvbS5jblsxXS5jblswXS5jbltzY3JvbGxGcm9tVG9wID8gJ3Vuc2hpZnQnIDogJ3B1c2gnXSh2ZG9tLmNuWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgdmRvbS5jbi5zcGxpY2UoMCwgMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbWUucHJvbWlzZVZkb21VcGRhdGUodmRvbSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5ID0gc2Nyb2xsRnJvbVRvcCA/IC1kYXRhLmhlaWdodCA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZG9tLmNuWzBdLmNuWzBdLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7eX1weClgO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZkb20uY25bMF0gPSB2ZG9tLmNuWzBdLmNuWzBdLmNuW3Njcm9sbEZyb21Ub3AgPyAxIDogMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUudHJpZ2dlclZkb21VcGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBjcmVhdGVEYXlOYW1lc1JvdygpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgZGF0ZSA9IG1lLmN1cnJlbnREYXRlLCAvLyBjbG9uZWRcbiAgICAgICAgICAgIGkgICAgPSAwLFxuICAgICAgICAgICAgcm93ICA9IHtjbHM6IFsnbmVvLWNhbGVuZGFyLXdlZWsnXSwgY246IFt7Y2xzOiBbJ25lby1jZWxsJywgJ25lby10b3AtbGVmdC1zcGFjZXInXX1dfSxcbiAgICAgICAgICAgIGRheSwgbm9kZTtcblxuICAgICAgICBkYXRlLnNldERhdGUobWUuY3VycmVudERhdGUuZ2V0RGF0ZSgpIC0gbWUuY3VycmVudERhdGUuZ2V0RGF5KCkgKyBtZS53ZWVrU3RhcnREYXkpO1xuXG4gICAgICAgIGZvciAoOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICBub2RlID0ge1xuICAgICAgICAgICAgICAgIGNscyA6IFsnbmVvLWNlbGwnLCAnbmVvLXdlZWtkYXktY2VsbCddLFxuICAgICAgICAgICAgICAgIGh0bWw6IG1lLmludGxGb3JtYXRfZGF5LmZvcm1hdChkYXRlKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZGF5ID0gZGF0ZS5nZXREYXkoKTtcblxuICAgICAgICAgICAgaWYgKCFtZS5zaG93V2Vla2VuZHMgJiYgKGRheSA9PT0gMCB8fCBkYXkgPT09IDYpKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVEb20gPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByb3cuY24ucHVzaChub2RlKTtcblxuICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcm93O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbnRhaW5lckVsXG4gICAgICogQHBhcmFtIHtEYXRlfSBjdXJyZW50RGF0ZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHZkb21cbiAgICAgKi9cbiAgICBjcmVhdGVNb250aENvbnRlbnQoY29udGFpbmVyRWwsIGN1cnJlbnREYXRlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjdXJyZW50RGF5ICAgICA9IGN1cnJlbnREYXRlLmdldERhdGUoKSxcbiAgICAgICAgICAgIGN1cnJlbnRNb250aCAgID0gY3VycmVudERhdGUuZ2V0TW9udGgoKSxcbiAgICAgICAgICAgIGN1cnJlbnRZZWFyICAgID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgIGRhdGUgICAgICAgICAgID0gRGF0ZVV0aWwuY2xvbmUoY3VycmVudERhdGUpLFxuICAgICAgICAgICAgdmFsdWVEYXRlICAgICAgPSBtZS5jdXJyZW50RGF0ZSwgLy8gY2xvbmVkXG4gICAgICAgICAgICB2YWx1ZU1vbnRoICAgICA9IHZhbHVlRGF0ZS5nZXRNb250aCgpLFxuICAgICAgICAgICAgdmFsdWVZZWFyICAgICAgPSB2YWx1ZURhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgIGRheXNJbk1vbnRoICAgID0gRGF0ZVV0aWwuZ2V0RGF5c0luTW9udGgoY3VycmVudERhdGUpLFxuICAgICAgICAgICAgZmlyc3REYXlPZmZzZXQgPSBEYXRlVXRpbC5nZXRGaXJzdERheU9mZnNldChjdXJyZW50RGF0ZSwgbWUud2Vla1N0YXJ0RGF5KSxcbiAgICAgICAgICAgIGNvbHVtbnMgICAgICAgID0gNyxcbiAgICAgICAgICAgIGkgICAgICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIHdlZWtEYXRlICAgICAgID0gRGF0ZVV0aWwuY2xvbmUoY3VycmVudERhdGUpLFxuICAgICAgICAgICAgY2VsbElkLCBjb25maWcsIGRhdGVEYXksIGRheSwgaGFzQ29udGVudCwgaiwgcm93LCByb3dzO1xuXG4gICAgICAgIHJvd3MgPSAoZGF5c0luTW9udGggKyBmaXJzdERheU9mZnNldCkgLyA3ID4gNSA/IDYgOiA1O1xuICAgICAgICBkYXkgID0gMSAtIGZpcnN0RGF5T2Zmc2V0O1xuXG4gICAgICAgIGRhdGUuc2V0RGF0ZShkYXkpO1xuICAgICAgICB3ZWVrRGF0ZS5zZXREYXRlKGRheSArIDcpO1xuXG4gICAgICAgIGZvciAoOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICByb3cgPSB7XG4gICAgICAgICAgICAgICAgY2xzICAgICAgOiBbJ25lby1jYWxlbmRhci13ZWVrJ10sXG4gICAgICAgICAgICAgICAgcmVtb3ZlRG9tOiBpID09PSByb3dzICYmICFtZS5zaXhXZWVrc1Blck1vbnRoLFxuXG4gICAgICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgICAgIGNscyAgICAgIDogWyduZW8tY2VsbCcsICduZW8td2Vla251bWJlci1jZWxsJ10sXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgICAgIDogRGF0ZVV0aWwuZ2V0V2Vla09mWWVhcih3ZWVrRGF0ZSksXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZURvbTogIW1lLnNob3dXZWVrTnVtYmVyc1xuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB3ZWVrRGF0ZS5zZXREYXRlKHdlZWtEYXRlLmdldERhdGUoKSArIDcpO1xuXG4gICAgICAgICAgICBmb3IgKGo9MDsgaiA8IGNvbHVtbnM7IGorKykge1xuICAgICAgICAgICAgICAgIGhhc0NvbnRlbnQgPSBkYXkgPiAwICYmIGRheSA8PSBkYXlzSW5Nb250aDtcbiAgICAgICAgICAgICAgICBjZWxsSWQgICAgID0gbWUuZ2V0Q2VsbElkKGN1cnJlbnRZZWFyLCBjdXJyZW50TW9udGggKyAxLCBkYXkpO1xuICAgICAgICAgICAgICAgIGRhdGVEYXkgICAgPSBkYXRlLmdldERheSgpO1xuXG4gICAgICAgICAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgICAgICBpZCAgICAgIDogY2VsbElkLFxuICAgICAgICAgICAgICAgICAgICBjbHMgICAgIDogaGFzQ29udGVudCA/IFsnbmVvLWNlbGwnXSA6IFsnbmVvLWNlbGwnLCAnbmVvLWRpc2FibGVkJ10sXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4OiBoYXNDb250ZW50ID8gLTEgOiBudWxsLFxuXG4gICAgICAgICAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xzIDogWyduZW8tY2VsbC1jb250ZW50J10sXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sOiBoYXNDb250ZW50ID8gZGF5IDogbWUuc2hvd0Rpc2FibGVkRGF5cyA/IGRhdGUuZ2V0RGF0ZSgpIDogJydcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGVEYXkgPT09IDAgfHwgZGF0ZURheSA9PT0gNikge1xuICAgICAgICAgICAgICAgICAgICBjb25maWcuY2xzLnB1c2goJ25lby13ZWVrZW5kJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtZS5zaG93V2Vla2VuZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy5yZW1vdmVEb20gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRvZGF5LnllYXIgPT09IGN1cnJlbnRZZWFyICYmIHRvZGF5Lm1vbnRoID09PSBjdXJyZW50TW9udGggJiYgdG9kYXkuZGF5ID09PSBkYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLmNuWzBdLmNscy5wdXNoKCduZW8tdG9kYXknKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWVZZWFyID09PSBjdXJyZW50WWVhciAmJiB2YWx1ZU1vbnRoID09PSBjdXJyZW50TW9udGggJiYgZGF5ID09PSBjdXJyZW50RGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5jbHMucHVzaCgnbmVvLXNlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcm93LmNuLnB1c2goY29uZmlnKTtcblxuICAgICAgICAgICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDEpO1xuXG4gICAgICAgICAgICAgICAgZGF5Kys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRhaW5lckVsLmNuLnB1c2gocm93KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb250YWluZXJFbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzaWxlbnQ9ZmFsc2VdIHRydWUgdG8gdXBkYXRlIHRoZSB2ZG9tIHNpbGVudGx5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtjb250YWluZXJFbF1cbiAgICAgKi9cbiAgICBjcmVhdGVNb250aHMoc2lsZW50PWZhbHNlLCBjb250YWluZXJFbCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY3VycmVudERhdGUgICAgPSBtZS5jdXJyZW50RGF0ZSwgLy8gY2xvbmVkXG4gICAgICAgICAgICB2ZG9tICAgICAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBtb250aENvbnRhaW5lciA9IGNvbnRhaW5lckVsIHx8IHZkb20uY25bMF0uY25bMV0sXG4gICAgICAgICAgICBpICAgICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBtb250aFZkb207XG5cbiAgICAgICAgbW9udGhDb250YWluZXIuY24gPSBbXTtcblxuICAgICAgICBmb3IgKDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgICAgIGN1cnJlbnREYXRlLnNldE1vbnRoKGkpO1xuICAgICAgICAgICAgY3VycmVudERhdGUuc2V0RGF0ZSgxKTtcblxuICAgICAgICAgICAgbW9udGhWZG9tID0ge1xuICAgICAgICAgICAgICAgIGNsczogWyduZW8tbW9udGgnXSxcbiAgICAgICAgICAgICAgICBjbiA6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xzIDogWyduZW8tbW9udGgtbmFtZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogbWUuaW50bEZvcm1hdF9tb250aC5mb3JtYXQoY3VycmVudERhdGUpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1lLmNyZWF0ZURheU5hbWVzUm93KClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBtb250aFZkb20gPSBtZS5jcmVhdGVNb250aENvbnRlbnQobW9udGhWZG9tLCBEYXRlVXRpbC5jbG9uZShjdXJyZW50RGF0ZSkpO1xuXG4gICAgICAgICAgICBtb250aENvbnRhaW5lci5jbi5wdXNoKG1vbnRoVmRvbSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNpbGVudCkge1xuICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IHllYXJcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IG1vbnRoXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBkYXlcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBpZFxuICAgICAqL1xuICAgIGdldENlbGxJZCh5ZWFyLCBtb250aCwgZGF5KSB7XG4gICAgICAgIGRheSA9IGRheS50b1N0cmluZygpO1xuXG4gICAgICAgIGlmIChkYXkubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgZGF5ID0gJzAnICsgZGF5O1xuICAgICAgICB9XG5cbiAgICAgICAgbW9udGggPSBtb250aC50b1N0cmluZygpO1xuXG4gICAgICAgIGlmIChtb250aC5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICBtb250aCA9ICcwJyArIG1vbnRoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaWQgKyAnX18nICsgeWVhciArICctJyArIG1vbnRoICsgJy0nICsgZGF5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbldoZWVsKGRhdGEpIHtcbiAgICAgICAgaWYgKE1hdGguYWJzKGRhdGEuZGVsdGFZKSA+IE1hdGguYWJzKGRhdGEuZGVsdGFYKSkge1xuICAgICAgICAgICAgbGV0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZSA9IG1lLmN1cnJlbnREYXRlOyAvLyBjbG9uZWRcblxuICAgICAgICAgICAgY3VycmVudERhdGUuc2V0RnVsbFllYXIoY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSArIChkYXRhLmRlbHRhWSA+IDAgPyAxIDogLTEpKTtcblxuICAgICAgICAgICAgbWUuY3VycmVudERhdGUgPSBjdXJyZW50RGF0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJzIGEgdmRvbSB1cGRhdGUgJiBzZXRzIGlzVXBkYXRpbmdcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzaWxlbnQ9ZmFsc2VdXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHRyaWdnZXJWZG9tVXBkYXRlKHNpbGVudD1mYWxzZSkge1xuICAgICAgICBpZiAoIXNpbGVudCkge1xuICAgICAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAgICAgbWUuaXNVcGRhdGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIG1lLnByb21pc2VWZG9tVXBkYXRlKG1lLnZkb20pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1lLmlzVXBkYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHluYW1pY2FsbHkgdXBkYXRlIHRoZSB3ZWVrZGF5IHJvd3MgaW5zaWRlIGVhY2ggbW9udGhcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzaWxlbnQ9ZmFsc2VdXG4gICAgICovXG4gICAgdXBkYXRlRGF5TmFtZXNSb3dzKHZhbHVlLCBvbGRWYWx1ZSwgc2lsZW50PWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuaW50bEZvcm1hdF9kYXkgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChtZS5sb2NhbGUsIHt3ZWVrZGF5OiB2YWx1ZX0pO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IG1lLmN1cnJlbnREYXRlLCAvLyBjbG9uZWRcbiAgICAgICAgICAgICAgICB2ZG9tID0gbWUudmRvbSxcbiAgICAgICAgICAgICAgICBpICAgID0gMSxcbiAgICAgICAgICAgICAgICBkYXksIGosIG5vZGU7XG5cbiAgICAgICAgICAgIGRhdGUuc2V0RGF0ZShtZS5jdXJyZW50RGF0ZS5nZXREYXRlKCkgLSBtZS5jdXJyZW50RGF0ZS5nZXREYXkoKSArIG1lLndlZWtTdGFydERheSk7XG5cbiAgICAgICAgICAgIGZvciAoOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChqPTA7IGogPCAxMjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRheSAgPSBkYXRlLmdldERheSgpO1xuICAgICAgICAgICAgICAgICAgICBub2RlID0gdmRvbS5jblswXS5jblsxXS5jbltqXS5jblsxXS5jbltpXTtcblxuICAgICAgICAgICAgICAgICAgICBub2RlLmh0bWwgPSBtZS5pbnRsRm9ybWF0X2RheS5mb3JtYXQoZGF0ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtZS5zaG93V2Vla2VuZHMgJiYgKGRheSA9PT0gMCB8fCBkYXkgPT09IDYpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZURvbSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgbm9kZS5yZW1vdmVEb207XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWVbc2lsZW50ID8gJ192ZG9tJyA6ICd2ZG9tJ10gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICB1cGRhdGVIZWFkZXJZZWFyKCkge1xuICAgICAgICB0aGlzLnZkb20uY25bMF0uY25bMF0uaHRtbCA9IHRoaXMuY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEeW5hbWljYWxseSB1cGRhdGUgdGhlIG1vbnRoTmFtZUZvcm1hdFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgdXBkYXRlTW9udGhOYW1lRm9ybWF0KHZhbHVlLCBvbGRWYWx1ZSwgc2lsZW50PWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuaW50bEZvcm1hdF9tb250aCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KG1lLmxvY2FsZSwge21vbnRoOiB2YWx1ZX0pO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXQgdmRvbSAgICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgICAgIGkgICAgICAgICAgID0gMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZSA9IG1lLmN1cnJlbnREYXRlO1xuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZS5zZXRNb250aChpKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZS5zZXREYXRlKDEpO1xuXG4gICAgICAgICAgICAgICAgdmRvbS5jblswXS5jblsxXS5jbltpXS5jblswXS5odG1sID0gbWUuaW50bEZvcm1hdF9tb250aC5mb3JtYXQoY3VycmVudERhdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZVtzaWxlbnQgPyAnX3Zkb20nIDogJ3Zkb20nXSA9IHZkb207XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFllYXJDb21wb25lbnQpO1xuXG5leHBvcnQge1llYXJDb21wb25lbnQgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENoZWNrQm94RmllbGQgZnJvbSAnLi4vLi4vLi4vZm9ybS9maWVsZC9DaGVja0JveC5tanMnO1xuaW1wb3J0IENvbnRhaW5lciAgICAgZnJvbSAnLi4vLi4vLi4vY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBOdW1iZXJGaWVsZCAgIGZyb20gJy4uLy4uLy4uL2Zvcm0vZmllbGQvTnVtYmVyLm1qcyc7XG5pbXBvcnQgUmFkaW9GaWVsZCAgICBmcm9tICcuLi8uLi8uLi9mb3JtL2ZpZWxkL1JhZGlvLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jYWxlbmRhci52aWV3LnNldHRpbmdzLkdlbmVyYWxDb250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBHZW5lcmFsQ29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNhbGVuZGFyLnZpZXcuc2V0dGluZ3MuR2VuZXJhbENvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNhbGVuZGFyLnZpZXcuc2V0dGluZ3MuR2VuZXJhbENvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGxheW91dD17bnR5cGU6J3Zib3gnLGFsaWduOidzdHJldGNoJ31cbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW1zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNhbGVuZGFyID0gbWUudXAoJ2NhbGVuZGFyLW1haW5jb250YWluZXInKTtcblxuICAgICAgICBtZS5pdGVtcyA9IFt7XG4gICAgICAgICAgICBtb2R1bGUgICAgOiBOdW1iZXJGaWVsZCxcbiAgICAgICAgICAgIGNsZWFyYWJsZSA6IHRydWUsXG4gICAgICAgICAgICBmbGV4ICAgICAgOiAnbm9uZScsXG4gICAgICAgICAgICBsYWJlbFRleHQgOiAnYmFzZUZvbnRTaXplJyxcbiAgICAgICAgICAgIGxhYmVsV2lkdGg6IDExMCxcbiAgICAgICAgICAgIGxpc3RlbmVycyA6IHtjaGFuZ2U6IG1lLm9uQ29uZmlnQ2hhbmdlLCBzY29wZTogbWV9LFxuICAgICAgICAgICAgbWF4VmFsdWUgIDogMjAsXG4gICAgICAgICAgICBtaW5WYWx1ZSAgOiAxMCxcbiAgICAgICAgICAgIG5hbWUgICAgICA6ICdiYXNlRm9udFNpemUnLFxuICAgICAgICAgICAgdmFsdWUgICAgIDogY2FsZW5kYXIuYmFzZUZvbnRTaXplXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICAgOiBSYWRpb0ZpZWxkLFxuICAgICAgICAgICAgY2hlY2tlZCAgICAgICA6IGNhbGVuZGFyLmxvY2FsZSA9PT0gJ2RlZmF1bHQnLFxuICAgICAgICAgICAgZmllbGRWYWx1ZSAgICA6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgIGZsZXggICAgICAgICAgOiAnbm9uZScsXG4gICAgICAgICAgICBoaWRlVmFsdWVMYWJlbDogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgIDogJ2xvY2FsZScsXG4gICAgICAgICAgICBsYWJlbFdpZHRoICAgIDogMTEwLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHtjaGFuZ2U6IG1lLm9uUmFkaW9DaGFuZ2UsIHNjb3BlOiBtZX0sXG4gICAgICAgICAgICBuYW1lICAgICAgICAgIDogJ2xvY2FsZScsXG4gICAgICAgICAgICBzdHlsZSAgICAgICAgIDoge21hcmdpblRvcDogJzVweCd9LFxuICAgICAgICAgICAgdmFsdWVMYWJlbFRleHQ6ICdkZWZhdWx0J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogUmFkaW9GaWVsZCxcbiAgICAgICAgICAgIGNoZWNrZWQgICAgICAgOiBjYWxlbmRhci5sb2NhbGUgPT09ICdkZS1ERScsXG4gICAgICAgICAgICBmaWVsZFZhbHVlICAgIDogJ2RlLURFJyxcbiAgICAgICAgICAgIGZsZXggICAgICAgICAgOiAnbm9uZScsXG4gICAgICAgICAgICBoaWRlVmFsdWVMYWJlbDogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgIDogJycsXG4gICAgICAgICAgICBsYWJlbFdpZHRoICAgIDogMTEwLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHtjaGFuZ2U6IG1lLm9uUmFkaW9DaGFuZ2UsIHNjb3BlOiBtZX0sXG4gICAgICAgICAgICBuYW1lICAgICAgICAgIDogJ2xvY2FsZScsXG4gICAgICAgICAgICBzdHlsZSAgICAgICAgIDoge21hcmdpblRvcDogJzVweCd9LFxuICAgICAgICAgICAgdmFsdWVMYWJlbFRleHQ6ICdkZS1ERSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICA6IFJhZGlvRmllbGQsXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogY2FsZW5kYXIubG9jYWxlID09PSAnZW4tVVMnLFxuICAgICAgICAgICAgZmllbGRWYWx1ZSAgICA6ICdlbi1VUycsXG4gICAgICAgICAgICBmbGV4ICAgICAgICAgIDogJ25vbmUnLFxuICAgICAgICAgICAgaGlkZVZhbHVlTGFiZWw6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWxUZXh0ICAgICA6ICcnLFxuICAgICAgICAgICAgbGFiZWxXaWR0aCAgICA6IDExMCxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgICAgOiB7Y2hhbmdlOiBtZS5vblJhZGlvQ2hhbmdlLCBzY29wZTogbWV9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgICA6ICdsb2NhbGUnLFxuICAgICAgICAgICAgc3R5bGUgICAgICAgICA6IHttYXJnaW5Ub3A6ICc1cHgnfSxcbiAgICAgICAgICAgIHZhbHVlTGFiZWxUZXh0OiAnZW4tVVMnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICAgOiBSYWRpb0ZpZWxkLFxuICAgICAgICAgICAgY2hlY2tlZCAgICAgICA6IGNhbGVuZGFyLmxvY2FsZSA9PT0gJ2VzLUVTJyxcbiAgICAgICAgICAgIGZpZWxkVmFsdWUgICAgOiAnZXMtRVMnLFxuICAgICAgICAgICAgZmxleCAgICAgICAgICA6ICdub25lJyxcbiAgICAgICAgICAgIGhpZGVWYWx1ZUxhYmVsOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsVGV4dCAgICAgOiAnJyxcbiAgICAgICAgICAgIGxhYmVsV2lkdGggICAgOiAxMTAsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICAgIDoge2NoYW5nZTogbWUub25SYWRpb0NoYW5nZSwgc2NvcGU6IG1lfSxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICAgOiAnbG9jYWxlJyxcbiAgICAgICAgICAgIHN0eWxlICAgICAgICAgOiB7bWFyZ2luVG9wOiAnNXB4J30sXG4gICAgICAgICAgICB2YWx1ZUxhYmVsVGV4dDogJ2VzLUVTJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogUmFkaW9GaWVsZCxcbiAgICAgICAgICAgIGNoZWNrZWQgICAgICAgOiBjYWxlbmRhci5sb2NhbGUgPT09ICdmci1GUicsXG4gICAgICAgICAgICBmaWVsZFZhbHVlICAgIDogJ2ZyLUZSJyxcbiAgICAgICAgICAgIGZsZXggICAgICAgICAgOiAnbm9uZScsXG4gICAgICAgICAgICBoaWRlVmFsdWVMYWJlbDogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgIDogJycsXG4gICAgICAgICAgICBsYWJlbFdpZHRoICAgIDogMTEwLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHtjaGFuZ2U6IG1lLm9uUmFkaW9DaGFuZ2UsIHNjb3BlOiBtZX0sXG4gICAgICAgICAgICBuYW1lICAgICAgICAgIDogJ2xvY2FsZScsXG4gICAgICAgICAgICBzdHlsZSAgICAgICAgIDoge21hcmdpblRvcDogJzVweCd9LFxuICAgICAgICAgICAgdmFsdWVMYWJlbFRleHQ6ICdmci1GUidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICA6IFJhZGlvRmllbGQsXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogY2FsZW5kYXIud2Vla1N0YXJ0RGF5ID09PSAwLFxuICAgICAgICAgICAgZmllbGRWYWx1ZSAgICA6IDAsXG4gICAgICAgICAgICBmbGV4ICAgICAgICAgIDogJ25vbmUnLFxuICAgICAgICAgICAgaGlkZVZhbHVlTGFiZWw6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWxUZXh0ICAgICA6ICd3ZWVrU3RhcnREYXknLFxuICAgICAgICAgICAgbGFiZWxXaWR0aCAgICA6IDExMCxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgICAgOiB7Y2hhbmdlOiBtZS5vblJhZGlvQ2hhbmdlLCBzY29wZTogbWV9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgICA6ICd3ZWVrU3RhcnREYXknLFxuICAgICAgICAgICAgc3R5bGUgICAgICAgICA6IHttYXJnaW5Ub3A6ICcxMHB4J30sXG4gICAgICAgICAgICB2YWx1ZUxhYmVsVGV4dDogJ1N1bmRheSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICA6IFJhZGlvRmllbGQsXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogY2FsZW5kYXIud2Vla1N0YXJ0RGF5ID09PSAxLFxuICAgICAgICAgICAgZmllbGRWYWx1ZSAgICA6IDEsXG4gICAgICAgICAgICBmbGV4ICAgICAgICAgIDogJ25vbmUnLFxuICAgICAgICAgICAgaGlkZVZhbHVlTGFiZWw6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWxUZXh0ICAgICA6ICcnLFxuICAgICAgICAgICAgbGFiZWxXaWR0aCAgICA6IDExMCxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgICAgOiB7Y2hhbmdlOiBtZS5vblJhZGlvQ2hhbmdlLCBzY29wZTogbWV9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgICA6ICd3ZWVrU3RhcnREYXknLFxuICAgICAgICAgICAgc3R5bGUgICAgICAgICA6IHttYXJnaW5Ub3A6ICc1cHgnfSxcbiAgICAgICAgICAgIHZhbHVlTGFiZWxUZXh0OiAnTW9uZGF5J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogQ2hlY2tCb3hGaWVsZCxcbiAgICAgICAgICAgIGNoZWNrZWQgICAgICAgOiBjYWxlbmRhci5zaG93V2Vla2VuZHMsXG4gICAgICAgICAgICBmbGV4ICAgICAgICAgIDogJ25vbmUnLFxuICAgICAgICAgICAgaGlkZUxhYmVsICAgICA6IHRydWUsXG4gICAgICAgICAgICBoaWRlVmFsdWVMYWJlbDogZmFsc2UsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICAgIDoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UsIHNjb3BlOiBtZX0sXG4gICAgICAgICAgICBuYW1lICAgICAgICAgIDogJ3Nob3dXZWVrZW5kcycsXG4gICAgICAgICAgICBzdHlsZSAgICAgICAgIDoge21hcmdpblRvcDogJzEwcHgnfSxcbiAgICAgICAgICAgIHZhbHVlTGFiZWxUZXh0OiAnc2hvd1dlZWtlbmRzJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogQ2hlY2tCb3hGaWVsZCxcbiAgICAgICAgICAgIGNoZWNrZWQgICAgICAgOiBjYWxlbmRhci5zY3JvbGxOZXdZZWFyRnJvbVRvcCxcbiAgICAgICAgICAgIGZsZXggICAgICAgICAgOiAnbm9uZScsXG4gICAgICAgICAgICBoaWRlTGFiZWwgICAgIDogdHJ1ZSxcbiAgICAgICAgICAgIGhpZGVWYWx1ZUxhYmVsOiBmYWxzZSxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgICAgOiB7Y2hhbmdlOiBtZS5vbkNvbmZpZ0NoYW5nZSwgc2NvcGU6IG1lfSxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICAgOiAnc2Nyb2xsTmV3WWVhckZyb21Ub3AnLFxuICAgICAgICAgICAgc3R5bGUgICAgICAgICA6IHttYXJnaW5Ub3A6ICcxMHB4J30sXG4gICAgICAgICAgICB2YWx1ZUxhYmVsVGV4dDogJ3Njcm9sbE5ld1llYXJGcm9tVG9wJ1xuICAgICAgICB9XTtcblxuICAgICAgICBzdXBlci5jcmVhdGVJdGVtcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkNvbmZpZ0NoYW5nZShkYXRhKSB7XG4gICAgICAgIHRoaXMudXAoJ2NhbGVuZGFyLW1haW5jb250YWluZXInKVtkYXRhLmNvbXBvbmVudC5uYW1lXSA9IGRhdGEudmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uUmFkaW9DaGFuZ2UoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YS52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy51cCgnY2FsZW5kYXItbWFpbmNvbnRhaW5lcicpW2RhdGEuY29tcG9uZW50Lm5hbWVdID0gZGF0YS5jb21wb25lbnQuZmllbGRWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoR2VuZXJhbENvbnRhaW5lcik7XG5cbmV4cG9ydCB7R2VuZXJhbENvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ2hlY2tCb3hGaWVsZCBmcm9tICcuLi8uLi8uLi9mb3JtL2ZpZWxkL0NoZWNrQm94Lm1qcyc7XG5pbXBvcnQgQ29udGFpbmVyICAgICBmcm9tICcuLi8uLi8uLi9jb250YWluZXIvQmFzZS5tanMnO1xuaW1wb3J0IFJhZGlvRmllbGQgICAgZnJvbSAnLi4vLi4vLi4vZm9ybS9maWVsZC9SYWRpby5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY2FsZW5kYXIudmlldy5zZXR0aW5ncy5Nb250aENvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5CYXNlXG4gKi9cbmNsYXNzIE1vbnRoQ29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNhbGVuZGFyLnZpZXcuc2V0dGluZ3MuTW9udGhDb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jYWxlbmRhci52aWV3LnNldHRpbmdzLk1vbnRoQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbGF5b3V0PXtudHlwZTondmJveCcsYWxpZ246J3N0cmV0Y2gnfVxuICAgICAgICAgKi9cbiAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGNyZWF0ZUl0ZW1zKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgbGFiZWxXaWR0aCAgICAgPSAxNDAsXG4gICAgICAgICAgICBtb250aENvbXBvbmVudCA9IG1lLmdldE1vbnRoQ29tcG9uZW50KCk7XG5cbiAgICAgICAgbWUuaXRlbXMgPSBbe1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICA6IFJhZGlvRmllbGQsXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogbW9udGhDb21wb25lbnQuZGF5TmFtZUZvcm1hdCA9PT0gJ25hcnJvdycsXG4gICAgICAgICAgICBmaWVsZFZhbHVlICAgIDogJ25hcnJvdycsXG4gICAgICAgICAgICBmbGV4ICAgICAgICAgIDogJ25vbmUnLFxuICAgICAgICAgICAgaGlkZVZhbHVlTGFiZWw6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWxUZXh0ICAgICA6ICdkYXlOYW1lRm9ybWF0JyxcbiAgICAgICAgICAgIGxhYmVsV2lkdGggICAgOiBsYWJlbFdpZHRoLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHtjaGFuZ2U6IG1lLm9uUmFkaW9DaGFuZ2UsIHNjb3BlOiBtZX0sXG4gICAgICAgICAgICBuYW1lICAgICAgICAgIDogJ2NtX2RheU5hbWVGb3JtYXQnLFxuICAgICAgICAgICAgdmFsdWVMYWJlbFRleHQ6ICduYXJyb3cnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICAgOiBSYWRpb0ZpZWxkLFxuICAgICAgICAgICAgY2hlY2tlZCAgICAgICA6IG1vbnRoQ29tcG9uZW50LmRheU5hbWVGb3JtYXQgPT09ICdzaG9ydCcsXG4gICAgICAgICAgICBmaWVsZFZhbHVlICAgIDogJ3Nob3J0JyxcbiAgICAgICAgICAgIGZsZXggICAgICAgICAgOiAnbm9uZScsXG4gICAgICAgICAgICBoaWRlVmFsdWVMYWJlbDogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgIDogJycsXG4gICAgICAgICAgICBsYWJlbFdpZHRoICAgIDogbGFiZWxXaWR0aCxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgICAgOiB7Y2hhbmdlOiBtZS5vblJhZGlvQ2hhbmdlLCBzY29wZTogbWV9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgICA6ICdjbV9kYXlOYW1lRm9ybWF0JyxcbiAgICAgICAgICAgIHN0eWxlICAgICAgICAgOiB7bWFyZ2luVG9wOiAnNXB4J30sXG4gICAgICAgICAgICB2YWx1ZUxhYmVsVGV4dDogJ3Nob3J0J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogUmFkaW9GaWVsZCxcbiAgICAgICAgICAgIGNoZWNrZWQgICAgICAgOiBtb250aENvbXBvbmVudC5kYXlOYW1lRm9ybWF0ID09PSAnbG9uZycsXG4gICAgICAgICAgICBmaWVsZFZhbHVlICAgIDogJ2xvbmcnLFxuICAgICAgICAgICAgZmxleCAgICAgICAgICA6ICdub25lJyxcbiAgICAgICAgICAgIGhpZGVWYWx1ZUxhYmVsOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsVGV4dCAgICAgOiAnJyxcbiAgICAgICAgICAgIGxhYmVsV2lkdGggICAgOiBsYWJlbFdpZHRoLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHtjaGFuZ2U6IG1lLm9uUmFkaW9DaGFuZ2UsIHNjb3BlOiBtZX0sXG4gICAgICAgICAgICBuYW1lICAgICAgICAgIDogJ2NtX2RheU5hbWVGb3JtYXQnLFxuICAgICAgICAgICAgc3R5bGUgICAgICAgICA6IHttYXJnaW5Ub3A6ICc1cHgnfSxcbiAgICAgICAgICAgIHZhbHVlTGFiZWxUZXh0OiAnbG9uZydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICA6IFJhZGlvRmllbGQsXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogbW9udGhDb21wb25lbnQubW9udGhOYW1lRm9ybWF0ID09PSAnc2hvcnQnLFxuICAgICAgICAgICAgZmllbGRWYWx1ZSAgICA6ICdzaG9ydCcsXG4gICAgICAgICAgICBmbGV4ICAgICAgICAgIDogJ25vbmUnLFxuICAgICAgICAgICAgaGlkZVZhbHVlTGFiZWw6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWxUZXh0ICAgICA6ICdtb250aE5hbWVGb3JtYXQnLFxuICAgICAgICAgICAgbGFiZWxXaWR0aCAgICA6IGxhYmVsV2lkdGgsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICAgIDoge2NoYW5nZTogbWUub25SYWRpb0NoYW5nZSwgc2NvcGU6IG1lfSxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICAgOiAnY21fbW9udGhOYW1lRm9ybWF0JyxcbiAgICAgICAgICAgIHN0eWxlICAgICAgICAgOiB7bWFyZ2luVG9wOiAnMTBweCd9LFxuICAgICAgICAgICAgdmFsdWVMYWJlbFRleHQ6ICdzaG9ydCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICA6IFJhZGlvRmllbGQsXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogbW9udGhDb21wb25lbnQubW9udGhOYW1lRm9ybWF0ID09PSAnbG9uZycsXG4gICAgICAgICAgICBmaWVsZFZhbHVlICAgIDogJ2xvbmcnLFxuICAgICAgICAgICAgZmxleCAgICAgICAgICA6ICdub25lJyxcbiAgICAgICAgICAgIGhpZGVWYWx1ZUxhYmVsOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsVGV4dCAgICAgOiAnJyxcbiAgICAgICAgICAgIGxhYmVsV2lkdGggICAgOiBsYWJlbFdpZHRoLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHtjaGFuZ2U6IG1lLm9uUmFkaW9DaGFuZ2UsIHNjb3BlOiBtZX0sXG4gICAgICAgICAgICBuYW1lICAgICAgICAgIDogJ2NtX21vbnRoTmFtZUZvcm1hdCcsXG4gICAgICAgICAgICBzdHlsZSAgICAgICAgIDoge21hcmdpblRvcDogJzVweCd9LFxuICAgICAgICAgICAgdmFsdWVMYWJlbFRleHQ6ICdsb25nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogQ2hlY2tCb3hGaWVsZCxcbiAgICAgICAgICAgIGNoZWNrZWQgICAgICAgOiBtb250aENvbXBvbmVudC51c2VTY3JvbGxCb3hTaGFkb3dzLFxuICAgICAgICAgICAgZmxleCAgICAgICAgICA6ICdub25lJyxcbiAgICAgICAgICAgIGhpZGVMYWJlbCAgICAgOiB0cnVlLFxuICAgICAgICAgICAgaGlkZVZhbHVlTGFiZWw6IGZhbHNlLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHtjaGFuZ2U6IG1lLm9uQ29uZmlnQ2hhbmdlLCBzY29wZTogbWV9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgICA6ICd1c2VTY3JvbGxCb3hTaGFkb3dzJyxcbiAgICAgICAgICAgIHN0eWxlICAgICAgICAgOiB7bWFyZ2luVG9wOiAnMTBweCd9LFxuICAgICAgICAgICAgdmFsdWVMYWJlbFRleHQ6ICd1c2VTY3JvbGxCb3hTaGFkb3dzJ1xuICAgICAgICB9XTtcblxuICAgICAgICBzdXBlci5jcmVhdGVJdGVtcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge05lby5jYWxlbmRhci52aWV3Lk1vbnRoQ29tcG9uZW50fVxuICAgICAqL1xuICAgIGdldE1vbnRoQ29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cCgnY2FsZW5kYXItbWFpbmNvbnRhaW5lcicpLm1vbnRoQ29tcG9uZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkNvbmZpZ0NoYW5nZShkYXRhKSB7XG4gICAgICAgIHRoaXMuZ2V0TW9udGhDb21wb25lbnQoKVtkYXRhLmNvbXBvbmVudC5uYW1lXSA9IGRhdGEudmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uUmFkaW9DaGFuZ2UoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YS52YWx1ZSkge1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBkYXRhLmNvbXBvbmVudC5uYW1lO1xuXG4gICAgICAgICAgICBpZiAobmFtZS5zdGFydHNXaXRoKCdjbV8nKSkge1xuICAgICAgICAgICAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cmluZygzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5nZXRNb250aENvbXBvbmVudCgpW25hbWVdID0gZGF0YS5jb21wb25lbnQuZmllbGRWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTW9udGhDb250YWluZXIpO1xuXG5leHBvcnQge01vbnRoQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb250YWluZXIgICBmcm9tICcuLi8uLi8uLi9jb250YWluZXIvQmFzZS5tanMnO1xuaW1wb3J0IE51bWJlckZpZWxkIGZyb20gJy4uLy4uLy4uL2Zvcm0vZmllbGQvTnVtYmVyLm1qcyc7XG5pbXBvcnQgUmFkaW9GaWVsZCAgZnJvbSAnLi4vLi4vLi4vZm9ybS9maWVsZC9SYWRpby5tanMnO1xuaW1wb3J0IFRpbWVGaWVsZCAgIGZyb20gJy4uLy4uLy4uL2Zvcm0vZmllbGQvVGltZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY2FsZW5kYXIudmlldy5zZXR0aW5ncy5XZWVrQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgV2Vla0NvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jYWxlbmRhci52aWV3LnNldHRpbmdzLldlZWtDb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jYWxlbmRhci52aWV3LnNldHRpbmdzLldlZWtDb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBpdGVtRGVmYXVsdHNcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1EZWZhdWx0czoge1xuICAgICAgICAgICAgZmxleCAgICAgIDogJ25vbmUnLFxuICAgICAgICAgICAgbGFiZWxXaWR0aDogMTMwLFxuICAgICAgICAgICAgc3R5bGUgICAgIDoge21hcmdpblRvcDogJzVweCd9XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGxheW91dD17bnR5cGU6J3Zib3gnLGFsaWduOidzdHJldGNoJ31cbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW1zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgd2Vla0NvbXBvbmVudCA9IG1lLmdldFdlZWtDb21wb25lbnQoKSxcbiAgICAgICAgICAgIHRpbWVBeGlzICAgICAgPSB3ZWVrQ29tcG9uZW50LnRpbWVBeGlzO1xuXG4gICAgICAgIG1lLml0ZW1zID0gW3tcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICAgICAgICAgOiBUaW1lRmllbGQsXG4gICAgICAgICAgICBjbGVhcmFibGUgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgICAgICAgIGNsZWFyVG9PcmlnaW5hbFZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgbGFiZWxUZXh0ICAgICAgICAgICA6ICdzdGFydFRpbWUnLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICAgICAgICA6IHtjaGFuZ2U6IG1lLm9uVGltZUF4aXNDb25maWdDaGFuZ2UsIHNjb3BlOiBtZX0sXG4gICAgICAgICAgICBtYXhWYWx1ZSAgICAgICAgICAgIDogJzEwOjAwJyxcbiAgICAgICAgICAgIG1pblZhbHVlICAgICAgICAgICAgOiAnMDA6MDAnLFxuICAgICAgICAgICAgbmFtZSAgICAgICAgICAgICAgICA6ICdzdGFydFRpbWUnLFxuICAgICAgICAgICAgc3RlcFNpemUgICAgICAgICAgICA6IDYwICogNjAsIC8vIDFoXG4gICAgICAgICAgICBzdHlsZSAgICAgICAgICAgICAgIDoge30sXG4gICAgICAgICAgICB2YWx1ZSAgICAgICAgICAgICAgIDogdGltZUF4aXMuc3RhcnRUaW1lXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogVGltZUZpZWxkLFxuICAgICAgICAgICAgbGFiZWxUZXh0OiAnZW5kVGltZScsXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHtjaGFuZ2U6IG1lLm9uVGltZUF4aXNDb25maWdDaGFuZ2UsIHNjb3BlOiBtZX0sXG4gICAgICAgICAgICBtYXhWYWx1ZSA6ICcyMzowMCcsXG4gICAgICAgICAgICBtaW5WYWx1ZSA6ICcxNDowMCcsXG4gICAgICAgICAgICBuYW1lICAgICA6ICdlbmRUaW1lJyxcbiAgICAgICAgICAgIHN0ZXBTaXplIDogNjAgKiA2MCwgLy8gMWhcbiAgICAgICAgICAgIHZhbHVlICAgIDogdGltZUF4aXMuZW5kVGltZSAhPT0gJzI0OjAwJyA/IHRpbWVBeGlzLmVuZFRpbWUgOiBudWxsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICAgICAgICAgOiBOdW1iZXJGaWVsZCxcbiAgICAgICAgICAgIGNsZWFyYWJsZSAgICAgICAgICAgOiB0cnVlLFxuICAgICAgICAgICAgY2xlYXJUb09yaWdpbmFsVmFsdWU6IHRydWUsXG4gICAgICAgICAgICBleGNsdWRlZFZhbHVlcyAgICAgIDogWzQ1XSxcbiAgICAgICAgICAgIGlucHV0RWRpdGFibGUgICAgICAgOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsVGV4dCAgICAgICAgICAgOiAnaW50ZXJ2YWwnLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICAgICAgICA6IHtjaGFuZ2U6IG1lLm9uVGltZUF4aXNDb25maWdDaGFuZ2UsIHNjb3BlOiBtZX0sXG4gICAgICAgICAgICBtYXhWYWx1ZSAgICAgICAgICAgIDogNjAsXG4gICAgICAgICAgICBtaW5WYWx1ZSAgICAgICAgICAgIDogMTUsXG4gICAgICAgICAgICBuYW1lICAgICAgICAgICAgICAgIDogJ2ludGVydmFsJyxcbiAgICAgICAgICAgIHN0ZXBTaXplICAgICAgICAgICAgOiAxNSxcbiAgICAgICAgICAgIHZhbHVlICAgICAgICAgICAgICAgOiB0aW1lQXhpcy5pbnRlcnZhbFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgICAgICAgIDogTnVtYmVyRmllbGQsXG4gICAgICAgICAgICBjbGVhcmFibGUgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgICAgICAgIGNsZWFyVG9PcmlnaW5hbFZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgbGFiZWxUZXh0ICAgICAgICAgICA6ICdyb3dIZWlnaHQnLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICAgICAgICA6IHtjaGFuZ2U6IG1lLm9uVGltZUF4aXNDb25maWdDaGFuZ2UsIHNjb3BlOiBtZX0sXG4gICAgICAgICAgICBtYXhWYWx1ZSAgICAgICAgICAgIDogMTAwLFxuICAgICAgICAgICAgbWluVmFsdWUgICAgICAgICAgICA6IDgsXG4gICAgICAgICAgICBuYW1lICAgICAgICAgICAgICAgIDogJ3Jvd0hlaWdodCcsXG4gICAgICAgICAgICBzdGVwU2l6ZSAgICAgICAgICAgIDogMixcbiAgICAgICAgICAgIHZhbHVlICAgICAgICAgICAgICAgOiB0aW1lQXhpcy5yb3dIZWlnaHRcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICA6IFJhZGlvRmllbGQsXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogd2Vla0NvbXBvbmVudC50aW1lQXhpc1Bvc2l0aW9uID09PSAnc3RhcnQnLFxuICAgICAgICAgICAgZmllbGRWYWx1ZSAgICA6ICdzdGFydCcsXG4gICAgICAgICAgICBoaWRlVmFsdWVMYWJlbDogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgIDogJ3RpbWVBeGlzUG9zaXRpb24nLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHtjaGFuZ2U6IG1lLm9uVGltZUF4aXNQb3NpdGlvbkNoYW5nZSwgc2NvcGU6IG1lfSxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICAgOiAndGltZUF4aXNQb3NpdGlvbicsXG4gICAgICAgICAgICB2YWx1ZUxhYmVsVGV4dDogJ3N0YXJ0J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogUmFkaW9GaWVsZCxcbiAgICAgICAgICAgIGNoZWNrZWQgICAgICAgOiB3ZWVrQ29tcG9uZW50LnRpbWVBeGlzUG9zaXRpb24gPT09ICdlbmQnLFxuICAgICAgICAgICAgZmllbGRWYWx1ZSAgICA6ICdlbmQnLFxuICAgICAgICAgICAgaGlkZVZhbHVlTGFiZWw6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWxUZXh0ICAgICA6ICcnLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHtjaGFuZ2U6IG1lLm9uVGltZUF4aXNQb3NpdGlvbkNoYW5nZSwgc2NvcGU6IG1lfSxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICAgOiAndGltZUF4aXNQb3NpdGlvbicsXG4gICAgICAgICAgICB2YWx1ZUxhYmVsVGV4dDogJ2VuZCdcbiAgICAgICAgfV07XG5cbiAgICAgICAgc3VwZXIuY3JlYXRlSXRlbXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtOZW8uY2FsZW5kYXIudmlldy5UaW1lQXhpc0NvbXBvbmVudH1cbiAgICAgKi9cbiAgICBnZXRUaW1lQXhpcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0V2Vla0NvbXBvbmVudCgpLnRpbWVBeGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge05lby5jYWxlbmRhci52aWV3LldlZWtDb21wb25lbnR9XG4gICAgICovXG4gICAgZ2V0V2Vla0NvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXAoJ2NhbGVuZGFyLW1haW5jb250YWluZXInKS53ZWVrQ29tcG9uZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvblRpbWVBeGlzQ29uZmlnQ2hhbmdlKGRhdGEpIHtcbiAgICAgICAgdGhpcy5nZXRUaW1lQXhpcygpW2RhdGEuY29tcG9uZW50Lm5hbWVdID0gZGF0YS52YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgb25UaW1lQXhpc1Bvc2l0aW9uQ2hhbmdlKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0V2Vla0NvbXBvbmVudCgpLnRpbWVBeGlzUG9zaXRpb24gPSBkYXRhLmNvbXBvbmVudC5maWVsZFZhbHVlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhXZWVrQ29udGFpbmVyKTtcblxuZXhwb3J0IHtXZWVrQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDaGVja0JveEZpZWxkIGZyb20gJy4uLy4uLy4uL2Zvcm0vZmllbGQvQ2hlY2tCb3gubWpzJztcbmltcG9ydCBDb250YWluZXIgICAgIGZyb20gJy4uLy4uLy4uL2NvbnRhaW5lci9CYXNlLm1qcyc7XG5pbXBvcnQgUmFkaW9GaWVsZCAgICBmcm9tICcuLi8uLi8uLi9mb3JtL2ZpZWxkL1JhZGlvLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jYWxlbmRhci52aWV3LnNldHRpbmdzLlllYXJDb250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBZZWFyQ29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNhbGVuZGFyLnZpZXcuc2V0dGluZ3MuWWVhckNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNhbGVuZGFyLnZpZXcuc2V0dGluZ3MuWWVhckNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGxheW91dD17bnR5cGU6J3Zib3gnLGFsaWduOidzdHJldGNoJ31cbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW1zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgbGFiZWxXaWR0aCAgICA9IDE2MCxcbiAgICAgICAgICAgIHllYXJDb21wb25lbnQgPSBtZS5nZXRZZWFyQ29tcG9uZW50KCk7XG5cbiAgICAgICAgbWUuaXRlbXMgPSBbe1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICA6IFJhZGlvRmllbGQsXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogeWVhckNvbXBvbmVudC5tb250aE5hbWVGb3JtYXQgPT09ICdzaG9ydCcsXG4gICAgICAgICAgICBmaWVsZFZhbHVlICAgIDogJ3Nob3J0JyxcbiAgICAgICAgICAgIGZsZXggICAgICAgICAgOiAnbm9uZScsXG4gICAgICAgICAgICBoaWRlVmFsdWVMYWJlbDogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgIDogJ21vbnRoTmFtZUZvcm1hdCcsXG4gICAgICAgICAgICBsYWJlbFdpZHRoICAgIDogbGFiZWxXaWR0aCxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgICAgOiB7Y2hhbmdlOiBtZS5vblJhZGlvQ2hhbmdlLCBzY29wZTogbWV9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgICA6ICdtb250aE5hbWVGb3JtYXQnLFxuICAgICAgICAgICAgdmFsdWVMYWJlbFRleHQ6ICdzaG9ydCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICA6IFJhZGlvRmllbGQsXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogeWVhckNvbXBvbmVudC5tb250aE5hbWVGb3JtYXQgPT09ICdsb25nJyxcbiAgICAgICAgICAgIGZpZWxkVmFsdWUgICAgOiAnbG9uZycsXG4gICAgICAgICAgICBmbGV4ICAgICAgICAgIDogJ25vbmUnLFxuICAgICAgICAgICAgaGlkZVZhbHVlTGFiZWw6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWxUZXh0ICAgICA6ICcnLFxuICAgICAgICAgICAgbGFiZWxXaWR0aCAgICA6IGxhYmVsV2lkdGgsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICAgIDoge2NoYW5nZTogbWUub25SYWRpb0NoYW5nZSwgc2NvcGU6IG1lfSxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICAgOiAnbW9udGhOYW1lRm9ybWF0JyxcbiAgICAgICAgICAgIHN0eWxlICAgICAgICAgOiB7bWFyZ2luVG9wOiAnNXB4J30sXG4gICAgICAgICAgICB2YWx1ZUxhYmVsVGV4dDogJ2xvbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICA6IENoZWNrQm94RmllbGQsXG4gICAgICAgICAgICBjaGVja2VkICAgOiB5ZWFyQ29tcG9uZW50LnNob3dDZWxsQm9yZGVycyxcbiAgICAgICAgICAgIGZsZXggICAgICA6ICdub25lJyxcbiAgICAgICAgICAgIGxhYmVsVGV4dCA6ICdzaG93Q2VsbEJvcmRlcnMnLFxuICAgICAgICAgICAgbGFiZWxXaWR0aDogbGFiZWxXaWR0aCxcbiAgICAgICAgICAgIGxpc3RlbmVycyA6IHtjaGFuZ2U6IG1lLm9uQ29uZmlnQ2hhbmdlLCBzY29wZTogbWV9LFxuICAgICAgICAgICAgbmFtZSAgICAgIDogJ3Nob3dDZWxsQm9yZGVycycsXG4gICAgICAgICAgICBzdHlsZSAgICAgOiB7bWFyZ2luVG9wOiAnMTBweCd9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICA6IENoZWNrQm94RmllbGQsXG4gICAgICAgICAgICBjaGVja2VkICAgOiB5ZWFyQ29tcG9uZW50LnNob3dXZWVrTnVtYmVycyxcbiAgICAgICAgICAgIGZsZXggICAgICA6ICdub25lJyxcbiAgICAgICAgICAgIGxhYmVsVGV4dCA6ICdzaG93V2Vla051bWJlcnMnLFxuICAgICAgICAgICAgbGFiZWxXaWR0aDogbGFiZWxXaWR0aCxcbiAgICAgICAgICAgIGxpc3RlbmVycyA6IHtjaGFuZ2U6IG1lLm9uQ29uZmlnQ2hhbmdlLCBzY29wZTogbWV9LFxuICAgICAgICAgICAgbmFtZSAgICAgIDogJ3Nob3dXZWVrTnVtYmVycycsXG4gICAgICAgICAgICBzdHlsZSAgICAgOiB7bWFyZ2luVG9wOiAnMTBweCd9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICA6IENoZWNrQm94RmllbGQsXG4gICAgICAgICAgICBjaGVja2VkICAgOiB5ZWFyQ29tcG9uZW50LnNpeFdlZWtzUGVyTW9udGgsXG4gICAgICAgICAgICBmbGV4ICAgICAgOiAnbm9uZScsXG4gICAgICAgICAgICBsYWJlbFRleHQgOiAnc2l4V2Vla3NQZXJNb250aCcsXG4gICAgICAgICAgICBsYWJlbFdpZHRoOiBsYWJlbFdpZHRoLFxuICAgICAgICAgICAgbGlzdGVuZXJzIDoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UsIHNjb3BlOiBtZX0sXG4gICAgICAgICAgICBuYW1lICAgICAgOiAnc2l4V2Vla3NQZXJNb250aCcsXG4gICAgICAgICAgICBzdHlsZSAgICAgOiB7bWFyZ2luVG9wOiAnMTBweCd9XG4gICAgICAgIH1dO1xuXG4gICAgICAgIHN1cGVyLmNyZWF0ZUl0ZW1zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNhbGVuZGFyLnZpZXcuWWVhckNvbXBvbmVudH1cbiAgICAgKi9cbiAgICBnZXRZZWFyQ29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cCgnY2FsZW5kYXItbWFpbmNvbnRhaW5lcicpLnllYXJDb21wb25lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uUmFkaW9DaGFuZ2UoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YS52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5nZXRZZWFyQ29tcG9uZW50KClbZGF0YS5jb21wb25lbnQubmFtZV0gPSBkYXRhLmNvbXBvbmVudC5maWVsZFZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uQ29uZmlnQ2hhbmdlKGRhdGEpIHtcbiAgICAgICAgdGhpcy5nZXRZZWFyQ29tcG9uZW50KClbZGF0YS5jb21wb25lbnQubmFtZV0gPSBkYXRhLnZhbHVlO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoWWVhckNvbnRhaW5lcik7XG5cbmV4cG9ydCB7WWVhckNvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29udGFpbmVyLlZpZXdwb3J0XG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgVmlld3BvcnQgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29udGFpbmVyLlZpZXdwb3J0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29udGFpbmVyLlZpZXdwb3J0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3ZpZXdwb3J0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3ZpZXdwb3J0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRydWUgYXBwbGllcyAnbmVvLWJvZHktdmlld3BvcnQnIHRvIHRoZSBkb2N1bWVudC5ib2R5XG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGFwcGx5Qm9keUNscz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBhcHBseUJvZHlDbHM6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLXZpZXdwb3J0J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tdmlld3BvcnQnXVxuICAgIH19XG5cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuYXBwbHlCb2R5Q2xzKSB7XG4gICAgICAgICAgICBOZW8ubWFpbi5Eb21BY2Nlc3MuYXBwbHlCb2R5Q2xzKHtcbiAgICAgICAgICAgICAgICBhcHBOYW1lOiB0aGlzLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgY2xzICAgIDogWyduZW8tYm9keS12aWV3cG9ydCddXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVmlld3BvcnQpO1xuXG5leHBvcnQge1ZpZXdwb3J0IGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlIGZyb20gJy4uL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5kcmFnZ2FibGUuRHJhZ1Byb3h5Q29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgRHJhZ1Byb3h5Q29tcG9uZW50IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5kcmFnZ2FibGUuRHJhZ1Byb3h5Q29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uZHJhZ2dhYmxlLkRyYWdQcm94eUNvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdkcmFncHJveHknXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnZHJhZ3Byb3h5JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGF1dG9Nb3VudD10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBhdXRvTW91bnQ6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBhdXRvUmVuZGVyPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGF1dG9SZW5kZXI6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWRyYWdwcm94eSddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWRyYWdwcm94eSddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbW92ZUluTWFpblRocmVhZD10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBtb3ZlSW5NYWluVGhyZWFkOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUub24oJ21vdW50ZWQnLCBtZS5vbk1vdW50ZWQsIG1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAqL1xuICAgIG9uTW91bnRlZChpZCkge1xuICAgICAgICBpZiAodGhpcy5tb3ZlSW5NYWluVGhyZWFkKSB7XG4gICAgICAgICAgICBOZW8ubWFpbi5hZGRvbi5EcmFnRHJvcC5zZXREcmFnUHJveHlFbGVtZW50KHtcbiAgICAgICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhEcmFnUHJveHlDb21wb25lbnQpO1xuXG5leHBvcnQge0RyYWdQcm94eUNvbXBvbmVudCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSAgICAgICAgICAgICAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuaW1wb3J0IERyYWdQcm94eUNvbXBvbmVudCBmcm9tICcuL0RyYWdQcm94eUNvbXBvbmVudC5tanMnO1xuaW1wb3J0IFZEb21VdGlsICAgICAgICAgICBmcm9tICcuLi91dGlsL1ZEb20ubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmRyYWdnYWJsZS5EcmFnWm9uZVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBEcmFnWm9uZSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZHJhZ2dhYmxlLkRyYWdab25lJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uZHJhZ2dhYmxlLkRyYWdab25lJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2RyYWd6b25lJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2RyYWd6b25lJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBuYW1lIG9mIHRoZSBBcHAgdGhpcyBpbnN0YW5jZSBiZWxvbmdzIHRvXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBhcHBOYW1lPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGFwcE5hbWU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gYm91bmRhcnlDb250YWluZXJJZF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgYm91bmRhcnlDb250YWluZXJJZF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdmRvbSAodHJlZSkgb2YgdGhlIGVsZW1lbnQgeW91IHdhbnQgdG8gZHJhZ1xuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gZHJhZ0VsZW1lbnQ9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZHJhZ0VsZW1lbnQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29tcG9uZW50LkJhc2V8bnVsbH0gZHJhZ1Byb3h5PW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgZHJhZ1Byb3h5OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IGRyYWdQcm94eUNvbmZpZz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBkcmFnUHJveHlDb25maWc6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBtb3ZlSG9yaXpvbnRhbD10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBtb3ZlSG9yaXpvbnRhbDogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1vdmVJbk1haW5UaHJlYWQ9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgbW92ZUluTWFpblRocmVhZDogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1vdmVWZXJ0aWNhbD10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBtb3ZlVmVydGljYWw6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IG9mZnNldFg9MFxuICAgICAgICAgKi9cbiAgICAgICAgb2Zmc2V0WDogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gb2Zmc2V0WT0wXG4gICAgICAgICAqL1xuICAgICAgICBvZmZzZXRZOiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBwcm94eVBhcmVudElkXz0nZG9jdW1lbnQuYm9keSdcbiAgICAgICAgICovXG4gICAgICAgIHByb3h5UGFyZW50SWRfOiAnZG9jdW1lbnQuYm9keScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gc2Nyb2xsQ29udGFpbmVySWRfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHNjcm9sbENvbnRhaW5lcklkXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gc2Nyb2xsRmFjdG9yTGVmdF89MVxuICAgICAgICAgKi9cbiAgICAgICAgc2Nyb2xsRmFjdG9yTGVmdF86IDEsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHNjcm9sbEZhY3RvclRvcF89MVxuICAgICAgICAgKi9cbiAgICAgICAgc2Nyb2xsRmFjdG9yVG9wXzogMSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgY3JlYXRlcyBhIHBvc2l0aW9uOmFic29sdXRlIHdyYXBwZXIgZGl2IHdoaWNoIGNvbnRhaW5zIHRoZSBjbG9uZWQgZWxlbWVudFxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSB1c2VQcm94eVdyYXBwZXI9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgdXNlUHJveHlXcmFwcGVyOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGlmICghTmVvLm1haW4uYWRkb24uRHJhZ0Ryb3ApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGNhbiBub3QgdXNlIE5lby5kcmFnZ2FibGUuRHJhZ1pvbmUgd2l0aG91dCBhZGRpbmcgTmVvLm1haW4uYWRkb24uRHJhZ0Ryb3AgdG8gdGhlIG1haW4gdGhyZWFkIGFkZG9ucycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBzY3JvbGxDb250YWluZXJJZCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTY3JvbGxDb250YWluZXJJZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBOZW8ubWFpbi5hZGRvbi5EcmFnRHJvcC5zZXRTY3JvbGxDb250YWluZXIoe1xuICAgICAgICAgICAgICAgIGlkOiB2YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGJvdW5kYXJ5Q29udGFpbmVySWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0Qm91bmRhcnlDb250YWluZXJJZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBOZW8ubWFpbi5hZGRvbi5EcmFnRHJvcC5zZXRCb3VuZGFyeUNvbnRhaW5lcih7XG4gICAgICAgICAgICAgICAgaWQ6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc2Nyb2xsRmFjdG9yTGVmdCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTY3JvbGxGYWN0b3JMZWZ0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAoISh2YWx1ZSA9PT0gMSAmJiBvbGRWYWx1ZSA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgTmVvLm1haW4uYWRkb24uRHJhZ0Ryb3Auc2V0U2Nyb2xsRmFjdG9yTGVmdCh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc2Nyb2xsRmFjdG9yVG9wIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFNjcm9sbEZhY3RvclRvcCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKCEodmFsdWUgPT09IDEgJiYgb2xkVmFsdWUgPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgIE5lby5tYWluLmFkZG9uLkRyYWdEcm9wLnNldFNjcm9sbEZhY3RvclRvcCh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBjcmVhdGVEcmFnUHJveHkoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgY2xvbmUgPSBWRG9tVXRpbC5jbG9uZShtZS5kcmFnRWxlbWVudCk7XG5cbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICAgIDogRHJhZ1Byb3h5Q29tcG9uZW50LFxuICAgICAgICAgICAgYXBwTmFtZSAgICAgICAgIDogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgIG1vdmVJbk1haW5UaHJlYWQ6IG1lLm1vdmVJbk1haW5UaHJlYWQsXG4gICAgICAgICAgICBwYXJlbnRJZCAgICAgICAgOiBtZS5wcm94eVBhcmVudElkLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgICAgIDogbWUudXNlUHJveHlXcmFwcGVyID8ge2NuOiBbY2xvbmVdfSA6IGNsb25lLFxuXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7ZGF0YS5oZWlnaHR9cHhgLFxuICAgICAgICAgICAgICAgIGxlZnQgIDogYCR7bWUubW92ZUhvcml6b250YWwgPyBkYXRhLmxlZnQgOiAwfXB4YCxcbiAgICAgICAgICAgICAgICB0b3AgICA6IGAke21lLm1vdmVWZXJ0aWNhbCAgID8gZGF0YS50b3AgIDogMH1weGAsXG4gICAgICAgICAgICAgICAgd2lkdGggOiBgJHtkYXRhLndpZHRofXB4YFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLi4ubWUuZHJhZ1Byb3h5Q29uZmlnIHx8IHt9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFtZS51c2VQcm94eVdyYXBwZXIpIHtcbiAgICAgICAgICAgIGNvbmZpZy5jbHMgPSBjbG9uZS5jbHM7XG4gICAgICAgIH1cblxuICAgICAgICBtZS5kcmFnUHJveHkgPSBOZW8uY3JlYXRlKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgZm9yIHVzaW5nIGN1c3RvbSBhbmltYXRpb25zXG4gICAgICovXG4gICAgZGVzdHJveURyYWdQcm94eSgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIGlkID0gbWUuZHJhZ1Byb3h5LmlkO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAndXBkYXRlRG9tJyxcbiAgICAgICAgICAgICAgICBkZWx0YXM6IFt7YWN0aW9uOiAncmVtb3ZlTm9kZScsIGlkOiBpZH1dXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgbWUubW92ZUluTWFpblRocmVhZCA/IDAgOiAzMCk7XG5cbiAgICAgICAgbWUuZHJhZ1Byb3h5LmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGRyYWdFbmQoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLmRyYWdQcm94eSkge1xuICAgICAgICAgICAgbWUuZGVzdHJveURyYWdQcm94eSgpO1xuICAgICAgICAgICAgbWUuZHJhZ1Byb3h5ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnNjcm9sbENvbnRhaW5lcklkID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgZHJhZ01vdmUoZGF0YSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgc3R5bGU7XG5cbiAgICAgICAgaWYgKCFtZS5tb3ZlSW5NYWluVGhyZWFkICYmIG1lLmRyYWdQcm94eSkge1xuICAgICAgICAgICAgc3R5bGUgPSBtZS5kcmFnUHJveHkuc3R5bGU7XG5cbiAgICAgICAgICAgIGlmIChtZS5tb3ZlSG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICAgIHN0eWxlLmxlZnQgPSBgJHtkYXRhLmNsaWVudFggLSBtZS5vZmZzZXRYfXB4YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1lLm1vdmVWZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIHN0eWxlLnRvcCA9IGAke2RhdGEuY2xpZW50WSAtIG1lLm9mZnNldFl9cHhgO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZS5kcmFnUHJveHkuc3R5bGUgPSBzdHlsZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBkcmFnU3RhcnQoZGF0YSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5nZXRCb3VuZGluZ0NsaWVudFJlY3Qoe1xuICAgICAgICAgICAgaWQ6IG1lLmRyYWdFbGVtZW50LmlkXG4gICAgICAgIH0pLnRoZW4ocmVjdCA9PiB7XG4gICAgICAgICAgICBtZS5vZmZzZXRYID0gZGF0YS5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgbWUub2Zmc2V0WSA9IGRhdGEuY2xpZW50WSAtIHJlY3QudG9wO1xuXG4gICAgICAgICAgICBtZS5jcmVhdGVEcmFnUHJveHkocmVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRHJhZ1pvbmUpO1xuXG5leHBvcnQge0RyYWdab25lIGFzIGRlZmF1bHR9OyJdLCJzb3VyY2VSb290IjoiIn0=