self["webpackChunk"](["vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0fa39ba1"],{

/***/ "./node_modules/neo.mjs/src/tab/Container.mjs":
/*!****************************************************!*\
  !*** ./node_modules/neo.mjs/src/tab/Container.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
/* harmony import */ var _container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _header_Button_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/Button.mjs */ "./node_modules/neo.mjs/src/tab/header/Button.mjs");
/* harmony import */ var _header_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/Toolbar.mjs */ "./node_modules/neo.mjs/src/tab/header/Toolbar.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _Strip_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Strip.mjs */ "./node_modules/neo.mjs/src/tab/Strip.mjs");






/**
 * @class Neo.tab.Container
 * @extends Neo.container.Base
 */
class Container extends _container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * Valid values for tabBarPosition
         * @member {String[]} tabBarPositions=['top', 'right', 'bottom', 'left']
         * @protected
         * @static
         */
        tabBarPositions: ['top', 'right', 'bottom', 'left']
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.tab.Container'
         * @protected
         */
        className: 'Neo.tab.Container',
        /**
         * @member {String} ntype='tab-container'
         * @protected
         */
        ntype: 'tab-container',
        /**
         * @member {Number} activeIndex_=0
         */
        activeIndex_: 0,
        /**
         * True will activate a tab which gets dynamically inserted / added after the TabContainer is mounted
         * @member {Boolean} activateInsertedTabs=false
         */
        activateInsertedTabs: false,
        /**
         * @member {String} baseCls='neo-tab-container'
         */
        baseCls: 'neo-tab-container',
        /**
         * @member {String|null} [cardContainerId]=null
         */
        cardContainerId: null,
        /**
         * adds baseCls + '-plain' is case plain is set to true
         * @member {String[]} cls=['neo-tab-container'],
         * @protected
         */
        cls: ['neo-tab-container'],
        /**
         * Default configs for the tab.Strip
         * @member {Object|null} [contentContainerDefaults]=null
         */
        contentContainerDefaults: null,
        /**
         * Default configs for the tab.HeaderToolbar
         * @member {Object|null} [headerToolbarDefaults]=null
         */
        headerToolbarDefaults: null,
        /**
         * True to not apply a background effect to the tab header container
         * @member {Boolean} plain_=true
         */
        plain_: true,
        /*
         * Remove the DOM of inactive cards (TabContainer Body).
         * This will keep the instances & vdom trees
         * @member {Boolean} removeInactiveCards=true
         */
        removeInactiveCards: true,
        /**
         * @member {String|null} tabBarId=null
         */
        tabBarId: null,
        /**
         * Default configs for the tab.Strip
         * @member {Object|null} [tabStripDefaults]=null
         */
        tabStripDefaults: null,
        /**
         * @member {String|null} [tabStripId]=null
         */
        tabStripId: null,
        /**
         * The position of the tab header toolbar.
         * Valid values are top, right, bottom, left.
         * @member {String} tabBarPosition_='top'
         */
        tabBarPosition_: 'top',
        /**
         * @member {Boolean} useActiveTabIndicator_=true
         */
        useActiveTabIndicator_: true
    }}

    /**
     *
     */
    onConstructed() {
        this._layout = this.getLayoutConfig(); // silent update
        super.onConstructed();
    }

    /**
     * Adds one or multiple tabs at the end of the header
     * @param {Object|Array} item
     * @returns {Neo.component.Base|Neo.component.Base[]}
     */
    add(item) {
        return this.insert(this.getTabBar().items.length, item);
    }

    /**
     * Triggered after the activeIndex config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetActiveIndex(value, oldValue) {
        if (oldValue !== undefined) {
            let me            = this,
                cardContainer = Neo.getComponent(me.cardContainerId);

            if (cardContainer && value > -1) {
                me.updateTabButtons();

                cardContainer.layout.activeIndex = value;

                me.fire('activeIndexChange', {
                    oldValue: oldValue,
                    value   : value
                });
            }
        }
    }

    /**
     * Triggered after the plain config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetPlain(value, oldValue) {
        let me      = this,
            baseCls = me.baseCls,
            cls     = me.cls || [];

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_3__["default"][value ? 'unshift' : 'remove'](cls, baseCls + '-plain');
        me.cls = cls;
    }

    /**
     * Triggered after the tabBarPosition config got changed
     * @param {String} value 'top', 'right', 'bottom', 'left'
     * @param {String} oldValue 'top', 'right', 'bottom', 'left'
     * @protected
     */
    afterSetTabBarPosition(value, oldValue) {
        let me  = this,
            cls = me.cls;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].remove(cls, 'neo-' + oldValue);
        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].add(cls, 'neo-' + value);
        me.cls = cls;

        if (me.rendered) {
            me.layout = me.getLayoutConfig();
            me.getTabBar().dock = value;
            me.getTabStrip().cls = ['neo-tab-strip',  'neo-dock-' + value];

            me.fire('tabBarPositionChange', {
                component: me,
                oldValue : oldValue,
                value    : value
            });
        }
    }

    /**
     * Triggered after the useActiveTabIndicator config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetUseActiveTabIndicator(value, oldValue) {
        if (oldValue !== undefined) {
            this.getTabBar()  .useActiveTabIndicator = value;
            this.getTabStrip().useActiveTabIndicator = value;
        }
    }

    /**
     * Triggered before the tabBarPosition config gets changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     * @returns {String} value
     */
    beforeSetTabBarPosition(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'tabBarPosition');
    }

    /**
     *
     * @protected
     */
    createItems() {
        let me            = this,
            items         = me.items || [],
            tabButtons    = [],
            tabComponents = [];

        Object.assign(me, {
            cardContainerId: me.cardContainerId || Neo.getId('container'),
            tabBarId       : me.tabBarId        || Neo.getId('tab-header-toolbar'),
            tabStripId     : me.tabStripId      || Neo.getId('tab-strip')
        });

        items.forEach((item, index) => {
            tabButtons.push(me.getTabButtonConfig(item.tabButtonConfig, index));

            if (!(item instanceof Neo.component.Base)) {
                item = {...me.itemDefaults, flex: 1, isTab:true, ...item};
            }

            tabComponents.push(item);
        });

        me.items = [{
            module               : _header_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            dock                 : me.tabBarPosition,
            flex                 : 'none',
            id                   : me.tabBarId,
            items                : tabButtons,
            useActiveTabIndicator: me.useActiveTabIndicator,
            ...me.headerToolbarDefaults || {}
        }, {
            module               : _Strip_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            cls                  : ['neo-tab-strip', 'neo-dock-' + me.tabBarPosition],
            flex                 : 'none',
            id                   : me.tabStripId,
            tabContainerId       : me.id,
            useActiveTabIndicator: me.useActiveTabIndicator,
            ...me.tabStripDefaults || {}
        }, {
            ntype                : 'container',
            cls                  : ['neo-container', 'neo-tab-content-container'],
            id                   : me.cardContainerId,
            itemDefaults         : me.itemDefaults,
            items                : tabComponents,
            layout               : {ntype: 'card', activeIndex: me.activeIndex, removeInactiveCards: me.removeInactiveCards},
            useActiveTabIndicator: me.useActiveTabIndicator,
            ...me.contentContainerDefaults || {}
        }];

        me.itemDefaults = null;

        super.createItems();
    }

    /**
     * Returns the card matching this.activeIndex
     * @returns {Neo.component.Base|null}
     */
    getActiveCard() {
        return this.getCardContainer().items[this.activeIndex] || null;
    }

    /**
     * Returns a card by a given index
     * @param {Number} index
     * @returns {Neo.component.Base|null}
     */
    getCard(index) {
        return this.getCardContainer().items[index] || null;
    }

    /**
     * @returns {Neo.container.Base}
     */
    getCardContainer() {
        return Neo.getComponent(this.cardContainerId);
    }

    /**
     * Returns the amount of items inside the tab header toolbar
     * @returns {Number}
     */
    getCount() {
        return this.getTabBar().items.length;
    }

    /**
     *
     * @returns {Object} layoutConfig
     * @protected
     */
    getLayoutConfig() {
        let me           = this,
            layoutConfig = null;

        switch(me.tabBarPosition) {
            case 'bottom':
                layoutConfig = {
                    ntype    : 'vbox',
                    align    : 'stretch',
                    direction: 'column-reverse',
                    pack     : 'start'
                };
                break;
            case 'left':
                layoutConfig = {
                    ntype    : 'hbox',
                    align    : 'stretch',
                    direction: 'row',
                    pack     : 'start'
                };
                break;
            case 'right':
                layoutConfig = {
                    ntype    : 'hbox',
                    align    : 'stretch',
                    direction: 'row-reverse',
                    pack     : 'start'
                };
                break;
            case 'top':
                layoutConfig = {
                    ntype: 'vbox',
                    align: 'stretch'
                };
                break;
        }

        return layoutConfig;
    }

    /**
     *
     * @param {Number} index
     * @returns {Neo.tab.header.Button|null}
     */
    getTabAtIndex(index) {
        return this.getTabBar().items[index] || null;
    }

    /**
     * @returns {Neo.container.Toolbar}
     */
    getTabBar() {
        return Neo.getComponent(this.tabBarId);
    }

    /**
     *
     * @param {Object} config
     * @param {Number} index
     * @returns {Object} The merged config
     * @protected
     */
    getTabButtonConfig(config, index) {
        let me = this,
            defaultConfig = {
                module : _header_Button_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
                flex   : 'none',
                index  : index,
                pressed: me.activeIndex === index,

                domListeners: {
                    click: {
                        fn: function(data) {
                            me.activeIndex = Neo.getComponent(data.target.id).index;
                        },
                        scope: me
                    }
                }
            };

        return {...defaultConfig, ...config};
    }

    /**
     * @returns {Neo.tab.Strip}
     */
    getTabStrip() {
        return Neo.getComponent(this.tabStripId);
    }

    /**
     * Inserts an item or array of items at a specific index
     * @param {Number} index
     * @param {Object|Object[]} item
     * @returns {Neo.component.Base|Neo.component.Base[]}
     */
    insert(index, item) {
        let me            = this,
            cardContainer = me.getCardContainer(),
            tabBar        = me.getTabBar(),
            hasItem       = false,
            i, len, superItem, tab, tabButtonConfig;

        if (Array.isArray(item)) {
            i   = 0;
            len = item.length;

            for (; i < len; i++) {
                // todo: render is async, ensure the order of items is correct

                // insert the array backwards
                item[i] = me.insert(item[len - 1], index);
            }
        } else if (typeof item === 'object') {
            i   = 0;
            len = cardContainer.items.length;

            for (; i < len; i++) {
                if (cardContainer.items[i].id === item.id) {
                    hasItem   = true;
                    superItem = cardContainer.items[i];
                    me.activeIndex = i;
                    break;
                }
            }
        }

        if (!hasItem) {
            tabButtonConfig = item.tabButtonConfig;

            tab = tabBar.insert(index, me.getTabButtonConfig(tabButtonConfig, index));

            // todo: non index based matching of tab buttons and cards
            i   = 0;
            len = tabBar.items.length;

            for (; i < len; i++) {
                tabBar.items[i].index = i;

            }

            item.flex = 1;
            superItem = cardContainer.insert(index, item);

            if (me.activateInsertedTabs) {
                if (!me.vnode) {
                    me.activeIndex = index;
                } else {
                    tab.on('mounted', me.onTabButtonMounted, me);
                }
            }
        }

        return superItem
    }

    /**
     * Gets triggered once a dynamically added header.Button gets mounted
     * in case activateInsertedTabs is set to true
     * @param {String} buttonId
     * @protected
     */
    onTabButtonMounted(buttonId) {
        let me            = this,
            cardContainer = me.getCardContainer(),
            tabBar        = me.getTabBar(),
            i             = 0,
            len           = tabBar.items.length,
            index         = -1,
            card, listenerId;

        for (; i < len; i++) {
            if (tabBar.items[i].id === buttonId) {
                index = i;
                break;
            }
        }

        if (index > -1) {
            card = cardContainer.items[index];

            if (me.vnode && !card.mounted) {
                listenerId = card.on('mounted', () => {
                    card.un('mounted', listenerId);
                    me.activeIndex = index;
                });
            } else {
                me.activeIndex = index;
            }
        }
    }

    /**
     * Removes a container item by reference
     * @param {Neo.component.Base} component
     * @param {Boolean} [destroyItem=true]
     * @param {Boolean} [silent=false]
     */
    remove(component, destroyItem=true, silent=false) {
        let items = [...this.getCardContainer().items],
            i     = 0,
            len   = items.length;

        for (; i < len; i++) {
            if (items[i].id === component.id) {
                this.removeAt(i, destroyItem, silent);
            }
        }
    }

    /**
     *
     * @param {Number} index
     * @param {Boolean} [destroyItem=true]
     * @param {Boolean} [silent=false]
     */
    removeAt(index, destroyItem=true, silent=false) {
        let me            = this,
            activeIndex   = me.activeIndex,
            cardContainer = me.getCardContainer(),
            tabBar        = me.getTabBar(),
            i, len;

        cardContainer.removeAt(index, destroyItem, silent);
        tabBar       .removeAt(index, true,        false);

        if (index < activeIndex) {
            // silent updates
            me._activeIndex = activeIndex - 1;
            cardContainer.layout._activeIndex = activeIndex - 1;
        } else if (index === activeIndex) {
            me.activeIndex = activeIndex - 1;
        }

        // todo: non index based matching of tab buttons and cards
        i   = 0;
        len = tabBar.items.length;

        for (; i < len; i++) {
            tabBar.items[i].index = i;
        }
    }

    /**
     *
     * @protected
     */
    updateTabButtons() {
        let me          = this,
            activeIndex = me.activeIndex,
            tabBar      = me.getTabBar(),
            tabButtons  = tabBar.items || [];

        tabButtons.forEach((item, index) => {
            item.pressed = index === activeIndex;
        });
    }
}

Neo.applyClassConfig(Container);



/***/ }),

/***/ "./node_modules/neo.mjs/src/tab/Strip.mjs":
/*!************************************************!*\
  !*** ./node_modules/neo.mjs/src/tab/Strip.mjs ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Strip; });
/* harmony import */ var _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class Neo.tab.Strip
 * @extends Neo.component.Base
 */
class Strip extends _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.tab.Strip'
         * @protected
         */
        className: 'Neo.tab.Strip',
        /**
         * @member {String} ntype='tab-strip'
         * @protected
         */
        ntype: 'tab-strip',
        /**
         * @member {Array} cls=['neo-tab-strip']
         */
        cls: ['neo-tab-strip'],
        /**
         * @member {String|null} tabContainerId=null
         */
        tabContainerId: null,
        /**
         * @member {Boolean} useActiveTabIndicator_=true
         */
        useActiveTabIndicator_: true,
        /**
         * @member {Object} _vdom={cn: [{cls: 'neo-active-tab-indicator'}]}
         */
        _vdom: {
            cn: [{
                cls: ['neo-active-tab-indicator']
            }]
        }
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        me.getTabContainer().on({
            activeIndexChange: me.getActiveTabRectThenMove,
            scope            : me
        });
    }

    /**
     * Triggered after the useActiveTabIndicator config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetUseActiveTabIndicator(value, oldValue) {
        if (oldValue !== undefined) {
            let me   = this,
                vdom = me.vdom;

            vdom.cn[0].removeDom = !value;

            if (me.mounted && value) {
                me._vdom = vdom; // silent update
                me.getActiveTabRectThenMove();
            } else {
                me.vdom = vdom;
            }
        }
    }

    /**
     * @param {Object|null} opts
     * @param {Number} opts.oldValue
     * @param {Number} opts.value
     * Gets the DomRect of the active tab, then moves the indicator
     */
    getActiveTabRectThenMove(opts) {
        let me           = this,
            ids          = [],
            tabContainer = me.getTabContainer();

        if (me.vnode) {
            if (opts) {
                ids.push(tabContainer.getTabAtIndex(opts.value), tabContainer.getTabAtIndex(opts.oldValue));
            } else {
                ids.push(tabContainer.getTabAtIndex(tabContainer.activeIndex));
            }

            ids = ids.map(e => e && e.id).filter(Boolean);

            if (me.useActiveTabIndicator) {
                // remote method access
                Neo.main.DomAccess.getBoundingClientRect({
                    id: ids
                }).then(data => {
                    me.moveActiveIndicator(data);
                });
            }
        }
    }

    /**
     *
     */
    getTabContainer() {
        return Neo.getComponent(this.tabContainerId);
    }

    /**
     * Can either contain the new target rect or the new and old one
     * @param {Object[]} rects
     * @param {Number} rects[0].bottom
     * @param {Number} rects[0].height
     * @param {Number} rects[0].left
     * @param {Number} rects[0].right
     * @param {Number} rects[0].top
     * @param {Number} rects[0].width
     * @param {Number} rects[0].x
     * @param {Number} rects[0].y
     */
    moveActiveIndicator(rects) {
        let me   = this,
            rect = rects[1] || rects[0],
            activeTabIndicator, tabContainer, vdom;

        if (me.useActiveTabIndicator) {
            vdom               = me.vdom;
            activeTabIndicator = vdom.cn[0];
            tabContainer       = me.getTabContainer();

            switch (tabContainer.tabBarPosition) {
                case 'bottom':
                case 'top':
                    activeTabIndicator.style = {
                        height: null,
                        left  : `${rect.left}px`,
                        top   : null,
                        width : `${rect.width}px`
                    };
                    break;
                case 'left':
                case 'right':
                    activeTabIndicator.style = {
                        height: `${rect.height}px`,
                        left  : null,
                        top   : `${rect.top}px`,
                        width : null
                    };
                    break;
            }

            // in case there is a dynamic change (oldValue), call this method again
            if (rects[1]) {
                activeTabIndicator.style.opacity = 0;
                me.vdom = vdom;

                setTimeout(() => {
                    me.moveActiveIndicator([rects[0]]);
                }, 50)
            } else {
                activeTabIndicator.style.opacity = 1;
                me.vdom = vdom;

                setTimeout(() => {
                    activeTabIndicator.style.opacity = 0;
                    me.vdom = vdom;
                }, 300);
            }
        }
    }
}

Neo.applyClassConfig(Strip);



/***/ }),

/***/ "./node_modules/neo.mjs/src/tab/header/Button.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/src/tab/header/Button.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var _button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../button/Base.mjs */ "./node_modules/neo.mjs/src/button/Base.mjs");


/**
 * @class Neo.tab.header.Button
 * @extends Neo.button.Base
 */
class Button extends _button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.tab.header.Button'
         * @protected
         */
        className: 'Neo.tab.header.Button',
        /**
         * @member {String} ntype='tab-header-button'
         * @protected
         */
        ntype: 'tab-header-button',
        /**
         * @member {Array} cls=['neo-button', 'neo-tab-button']
         */
        cls: ['neo-tab-header-button', 'neo-button'],
        /**
         * @member {Boolean} useActiveTabIndicator_=true
         */
        useActiveTabIndicator_: true,
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            tag: 'button',
            cn : [{
                tag: 'span',
                cls: ['neo-button-glyph']
            }, {
                tag: 'span',
                cls: ['neo-button-text']
            }, {
                cls: ['neo-tab-button-indicator']
            }]
        }
    }}

    /**
     * Triggered after the useActiveTabIndicator config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetUseActiveTabIndicator(value, oldValue) {
        this.updateUseActiveTabIndicator();
    }

    /**
     *
     * @param {Boolean} [silent=false]
     */
    updateUseActiveTabIndicator(silent=false) {
        let me   = this,
            vdom = me.vdom;

        vdom.cn[2].removeDom = !me.useActiveTabIndicator;

        me[silent ? '_vdom' : 'vdom'] = vdom;
    }
}

Neo.applyClassConfig(Button);



/***/ }),

/***/ "./node_modules/neo.mjs/src/tab/header/Toolbar.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/neo.mjs/src/tab/header/Toolbar.mjs ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toolbar; });
/* harmony import */ var _container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../container/Toolbar.mjs */ "./node_modules/neo.mjs/src/container/Toolbar.mjs");


/**
 * @class Neo.tab.header.Toolbar
 * @extends Neo.container.Toolbar
 */
class Toolbar extends _container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.tab.header.Toolbar'
         * @protected
         */
        className: 'Neo.tab.header.Toolbar',
        /**
         * @member {String} ntype='tab-header-toolbar'
         * @protected
         */
        ntype: 'tab-header-toolbar',
        /**
         * @member {Array} cls=['neo-tab-header-toolbar','neo-toolbar']
         */
        cls: ['neo-tab-header-toolbar', 'neo-toolbar'],
        /**
         * @member {Boolean} useActiveTabIndicator_=true
         */
        useActiveTabIndicator_: true
    }}

    /**
     * Triggered after the useActiveTabIndicator config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetUseActiveTabIndicator(value, oldValue) {
        if (oldValue !== undefined) {
            let me   = this,
                vdom = me.vdom;

            me.items.forEach(item => {
                // silent updates
                item._useActiveTabIndicator = value;
                item.updateUseActiveTabIndicator(true);
            });

            me.vdom = vdom;
        }
    }

    /**
     *
     * @protected
     */
    createItems() {
        let me       = this,
            defaults = me.itemDefaults || {};

        defaults.useActiveTabIndicator = me.useActiveTabIndicator;
        me.itemDefaults = defaults;

        super.createItems();
    }

    /**
     * Returns the layout config matching to the dock position
     * @returns {Object} layoutConfig
     * @protected
     */
    getLayoutConfig() {
        let layoutConfig;

        switch(this.dock) {
            case 'bottom':
            case 'top':
                layoutConfig = {
                    ntype: 'hbox',
                    align: 'center',
                    pack : 'start'
                };
                break;
            case 'left':
                layoutConfig = {
                    ntype    : 'vbox',
                    align    : 'center',
                    direction: 'column-reverse',
                    pack     : 'end'
                };
                break;
            case 'right':
                layoutConfig = {
                    ntype    : 'vbox',
                    align    : 'center',
                    direction: 'column',
                    pack     : 'start'
                };
                break;
        }

        return layoutConfig;
    }
}

Neo.applyClassConfig(Toolbar);



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdGFiL0NvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3RhYi9TdHJpcC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3RhYi9oZWFkZXIvQnV0dG9uLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdGFiL2hlYWRlci9Ub29sYmFyLm1qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDRjtBQUNDO0FBQ0g7QUFDTjs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMkRBQWE7QUFDckMsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0Es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O0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUFBO0FBQUE7QUFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDhEQUFXO0FBQ2pDLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsTUFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjBmYTM5YmExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VDb250YWluZXIgZnJvbSAnLi4vY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBIZWFkZXJCdXR0b24gIGZyb20gJy4vaGVhZGVyL0J1dHRvbi5tanMnO1xuaW1wb3J0IEhlYWRlclRvb2xiYXIgZnJvbSAnLi9oZWFkZXIvVG9vbGJhci5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICAgICAgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuaW1wb3J0IFN0cmlwICAgICAgICAgZnJvbSAnLi9TdHJpcC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udGFiLkNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5CYXNlXG4gKi9cbmNsYXNzIENvbnRhaW5lciBleHRlbmRzIEJhc2VDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlcyBmb3IgdGFiQmFyUG9zaXRpb25cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IHRhYkJhclBvc2l0aW9ucz1bJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgdGFiQmFyUG9zaXRpb25zOiBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udGFiLkNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnRhYi5Db250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndGFiLWNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICd0YWItY29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gYWN0aXZlSW5kZXhfPTBcbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2ZUluZGV4XzogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgd2lsbCBhY3RpdmF0ZSBhIHRhYiB3aGljaCBnZXRzIGR5bmFtaWNhbGx5IGluc2VydGVkIC8gYWRkZWQgYWZ0ZXIgdGhlIFRhYkNvbnRhaW5lciBpcyBtb3VudGVkXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGFjdGl2YXRlSW5zZXJ0ZWRUYWJzPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmF0ZUluc2VydGVkVGFiczogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGJhc2VDbHM9J25lby10YWItY29udGFpbmVyJ1xuICAgICAgICAgKi9cbiAgICAgICAgYmFzZUNsczogJ25lby10YWItY29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBbY2FyZENvbnRhaW5lcklkXT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBjYXJkQ29udGFpbmVySWQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhZGRzIGJhc2VDbHMgKyAnLXBsYWluJyBpcyBjYXNlIHBsYWluIGlzIHNldCB0byB0cnVlXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tdGFiLWNvbnRhaW5lciddLFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLXRhYi1jb250YWluZXInXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmF1bHQgY29uZmlncyBmb3IgdGhlIHRhYi5TdHJpcFxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gW2NvbnRlbnRDb250YWluZXJEZWZhdWx0c109bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgY29udGVudENvbnRhaW5lckRlZmF1bHRzOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmYXVsdCBjb25maWdzIGZvciB0aGUgdGFiLkhlYWRlclRvb2xiYXJcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IFtoZWFkZXJUb29sYmFyRGVmYXVsdHNdPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGhlYWRlclRvb2xiYXJEZWZhdWx0czogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgdG8gbm90IGFwcGx5IGEgYmFja2dyb3VuZCBlZmZlY3QgdG8gdGhlIHRhYiBoZWFkZXIgY29udGFpbmVyXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHBsYWluXz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwbGFpbl86IHRydWUsXG4gICAgICAgIC8qXG4gICAgICAgICAqIFJlbW92ZSB0aGUgRE9NIG9mIGluYWN0aXZlIGNhcmRzIChUYWJDb250YWluZXIgQm9keSkuXG4gICAgICAgICAqIFRoaXMgd2lsbCBrZWVwIHRoZSBpbnN0YW5jZXMgJiB2ZG9tIHRyZWVzXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJlbW92ZUluYWN0aXZlQ2FyZHM9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3ZlSW5hY3RpdmVDYXJkczogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSB0YWJCYXJJZD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB0YWJCYXJJZDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmF1bHQgY29uZmlncyBmb3IgdGhlIHRhYi5TdHJpcFxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gW3RhYlN0cmlwRGVmYXVsdHNdPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHRhYlN0cmlwRGVmYXVsdHM6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gW3RhYlN0cmlwSWRdPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHRhYlN0cmlwSWQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcG9zaXRpb24gb2YgdGhlIHRhYiBoZWFkZXIgdG9vbGJhci5cbiAgICAgICAgICogVmFsaWQgdmFsdWVzIGFyZSB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQuXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gdGFiQmFyUG9zaXRpb25fPSd0b3AnXG4gICAgICAgICAqL1xuICAgICAgICB0YWJCYXJQb3NpdGlvbl86ICd0b3AnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gdXNlQWN0aXZlVGFiSW5kaWNhdG9yXz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICB1c2VBY3RpdmVUYWJJbmRpY2F0b3JfOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgdGhpcy5fbGF5b3V0ID0gdGhpcy5nZXRMYXlvdXRDb25maWcoKTsgLy8gc2lsZW50IHVwZGF0ZVxuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBvbmUgb3IgbXVsdGlwbGUgdGFicyBhdCB0aGUgZW5kIG9mIHRoZSBoZWFkZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdHxBcnJheX0gaXRlbVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29tcG9uZW50LkJhc2V8TmVvLmNvbXBvbmVudC5CYXNlW119XG4gICAgICovXG4gICAgYWRkKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zZXJ0KHRoaXMuZ2V0VGFiQmFyKCkuaXRlbXMubGVuZ3RoLCBpdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGFjdGl2ZUluZGV4IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEFjdGl2ZUluZGV4KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IG1lICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGNhcmRDb250YWluZXIgPSBOZW8uZ2V0Q29tcG9uZW50KG1lLmNhcmRDb250YWluZXJJZCk7XG5cbiAgICAgICAgICAgIGlmIChjYXJkQ29udGFpbmVyICYmIHZhbHVlID4gLTEpIHtcbiAgICAgICAgICAgICAgICBtZS51cGRhdGVUYWJCdXR0b25zKCk7XG5cbiAgICAgICAgICAgICAgICBjYXJkQ29udGFpbmVyLmxheW91dC5hY3RpdmVJbmRleCA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgbWUuZmlyZSgnYWN0aXZlSW5kZXhDaGFuZ2UnLCB7XG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHBsYWluIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0UGxhaW4odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGJhc2VDbHMgPSBtZS5iYXNlQ2xzLFxuICAgICAgICAgICAgY2xzICAgICA9IG1lLmNscyB8fCBbXTtcblxuICAgICAgICBOZW9BcnJheVt2YWx1ZSA/ICd1bnNoaWZ0JyA6ICdyZW1vdmUnXShjbHMsIGJhc2VDbHMgKyAnLXBsYWluJyk7XG4gICAgICAgIG1lLmNscyA9IGNscztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHRhYkJhclBvc2l0aW9uIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZSAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFRhYkJhclBvc2l0aW9uKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIGNscyA9IG1lLmNscztcblxuICAgICAgICBOZW9BcnJheS5yZW1vdmUoY2xzLCAnbmVvLScgKyBvbGRWYWx1ZSk7XG4gICAgICAgIE5lb0FycmF5LmFkZChjbHMsICduZW8tJyArIHZhbHVlKTtcbiAgICAgICAgbWUuY2xzID0gY2xzO1xuXG4gICAgICAgIGlmIChtZS5yZW5kZXJlZCkge1xuICAgICAgICAgICAgbWUubGF5b3V0ID0gbWUuZ2V0TGF5b3V0Q29uZmlnKCk7XG4gICAgICAgICAgICBtZS5nZXRUYWJCYXIoKS5kb2NrID0gdmFsdWU7XG4gICAgICAgICAgICBtZS5nZXRUYWJTdHJpcCgpLmNscyA9IFsnbmVvLXRhYi1zdHJpcCcsICAnbmVvLWRvY2stJyArIHZhbHVlXTtcblxuICAgICAgICAgICAgbWUuZmlyZSgndGFiQmFyUG9zaXRpb25DaGFuZ2UnLCB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBtZSxcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZSA6IG9sZFZhbHVlLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB1c2VBY3RpdmVUYWJJbmRpY2F0b3IgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRVc2VBY3RpdmVUYWJJbmRpY2F0b3IodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmdldFRhYkJhcigpICAudXNlQWN0aXZlVGFiSW5kaWNhdG9yID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLmdldFRhYlN0cmlwKCkudXNlQWN0aXZlVGFiSW5kaWNhdG9yID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSB0YWJCYXJQb3NpdGlvbiBjb25maWcgZ2V0cyBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IHZhbHVlXG4gICAgICovXG4gICAgYmVmb3JlU2V0VGFiQmFyUG9zaXRpb24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJlZm9yZVNldEVudW1WYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICd0YWJCYXJQb3NpdGlvbicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGNyZWF0ZUl0ZW1zKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgID0gbWUuaXRlbXMgfHwgW10sXG4gICAgICAgICAgICB0YWJCdXR0b25zICAgID0gW10sXG4gICAgICAgICAgICB0YWJDb21wb25lbnRzID0gW107XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihtZSwge1xuICAgICAgICAgICAgY2FyZENvbnRhaW5lcklkOiBtZS5jYXJkQ29udGFpbmVySWQgfHwgTmVvLmdldElkKCdjb250YWluZXInKSxcbiAgICAgICAgICAgIHRhYkJhcklkICAgICAgIDogbWUudGFiQmFySWQgICAgICAgIHx8IE5lby5nZXRJZCgndGFiLWhlYWRlci10b29sYmFyJyksXG4gICAgICAgICAgICB0YWJTdHJpcElkICAgICA6IG1lLnRhYlN0cmlwSWQgICAgICB8fCBOZW8uZ2V0SWQoJ3RhYi1zdHJpcCcpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB0YWJCdXR0b25zLnB1c2gobWUuZ2V0VGFiQnV0dG9uQ29uZmlnKGl0ZW0udGFiQnV0dG9uQ29uZmlnLCBpbmRleCkpO1xuXG4gICAgICAgICAgICBpZiAoIShpdGVtIGluc3RhbmNlb2YgTmVvLmNvbXBvbmVudC5CYXNlKSkge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSB7Li4ubWUuaXRlbURlZmF1bHRzLCBmbGV4OiAxLCBpc1RhYjp0cnVlLCAuLi5pdGVtfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGFiQ29tcG9uZW50cy5wdXNoKGl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZS5pdGVtcyA9IFt7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgICAgICAgICA6IEhlYWRlclRvb2xiYXIsXG4gICAgICAgICAgICBkb2NrICAgICAgICAgICAgICAgICA6IG1lLnRhYkJhclBvc2l0aW9uLFxuICAgICAgICAgICAgZmxleCAgICAgICAgICAgICAgICAgOiAnbm9uZScsXG4gICAgICAgICAgICBpZCAgICAgICAgICAgICAgICAgICA6IG1lLnRhYkJhcklkLFxuICAgICAgICAgICAgaXRlbXMgICAgICAgICAgICAgICAgOiB0YWJCdXR0b25zLFxuICAgICAgICAgICAgdXNlQWN0aXZlVGFiSW5kaWNhdG9yOiBtZS51c2VBY3RpdmVUYWJJbmRpY2F0b3IsXG4gICAgICAgICAgICAuLi5tZS5oZWFkZXJUb29sYmFyRGVmYXVsdHMgfHwge31cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICAgICAgICAgOiBTdHJpcCxcbiAgICAgICAgICAgIGNscyAgICAgICAgICAgICAgICAgIDogWyduZW8tdGFiLXN0cmlwJywgJ25lby1kb2NrLScgKyBtZS50YWJCYXJQb3NpdGlvbl0sXG4gICAgICAgICAgICBmbGV4ICAgICAgICAgICAgICAgICA6ICdub25lJyxcbiAgICAgICAgICAgIGlkICAgICAgICAgICAgICAgICAgIDogbWUudGFiU3RyaXBJZCxcbiAgICAgICAgICAgIHRhYkNvbnRhaW5lcklkICAgICAgIDogbWUuaWQsXG4gICAgICAgICAgICB1c2VBY3RpdmVUYWJJbmRpY2F0b3I6IG1lLnVzZUFjdGl2ZVRhYkluZGljYXRvcixcbiAgICAgICAgICAgIC4uLm1lLnRhYlN0cmlwRGVmYXVsdHMgfHwge31cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbnR5cGUgICAgICAgICAgICAgICAgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgIGNscyAgICAgICAgICAgICAgICAgIDogWyduZW8tY29udGFpbmVyJywgJ25lby10YWItY29udGVudC1jb250YWluZXInXSxcbiAgICAgICAgICAgIGlkICAgICAgICAgICAgICAgICAgIDogbWUuY2FyZENvbnRhaW5lcklkLFxuICAgICAgICAgICAgaXRlbURlZmF1bHRzICAgICAgICAgOiBtZS5pdGVtRGVmYXVsdHMsXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgICAgICAgICA6IHRhYkNvbXBvbmVudHMsXG4gICAgICAgICAgICBsYXlvdXQgICAgICAgICAgICAgICA6IHtudHlwZTogJ2NhcmQnLCBhY3RpdmVJbmRleDogbWUuYWN0aXZlSW5kZXgsIHJlbW92ZUluYWN0aXZlQ2FyZHM6IG1lLnJlbW92ZUluYWN0aXZlQ2FyZHN9LFxuICAgICAgICAgICAgdXNlQWN0aXZlVGFiSW5kaWNhdG9yOiBtZS51c2VBY3RpdmVUYWJJbmRpY2F0b3IsXG4gICAgICAgICAgICAuLi5tZS5jb250ZW50Q29udGFpbmVyRGVmYXVsdHMgfHwge31cbiAgICAgICAgfV07XG5cbiAgICAgICAgbWUuaXRlbURlZmF1bHRzID0gbnVsbDtcblxuICAgICAgICBzdXBlci5jcmVhdGVJdGVtcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNhcmQgbWF0Y2hpbmcgdGhpcy5hY3RpdmVJbmRleFxuICAgICAqIEByZXR1cm5zIHtOZW8uY29tcG9uZW50LkJhc2V8bnVsbH1cbiAgICAgKi9cbiAgICBnZXRBY3RpdmVDYXJkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDYXJkQ29udGFpbmVyKCkuaXRlbXNbdGhpcy5hY3RpdmVJbmRleF0gfHwgbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgY2FyZCBieSBhIGdpdmVuIGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZXxudWxsfVxuICAgICAqL1xuICAgIGdldENhcmQoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2FyZENvbnRhaW5lcigpLml0ZW1zW2luZGV4XSB8fCBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtOZW8uY29udGFpbmVyLkJhc2V9XG4gICAgICovXG4gICAgZ2V0Q2FyZENvbnRhaW5lcigpIHtcbiAgICAgICAgcmV0dXJuIE5lby5nZXRDb21wb25lbnQodGhpcy5jYXJkQ29udGFpbmVySWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGFtb3VudCBvZiBpdGVtcyBpbnNpZGUgdGhlIHRhYiBoZWFkZXIgdG9vbGJhclxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0Q291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFRhYkJhcigpLml0ZW1zLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IGxheW91dENvbmZpZ1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBnZXRMYXlvdXRDb25maWcoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgbGF5b3V0Q29uZmlnID0gbnVsbDtcblxuICAgICAgICBzd2l0Y2gobWUudGFiQmFyUG9zaXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICAgICAgbGF5b3V0Q29uZmlnID0ge1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgICA6ICd2Ym94JyxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24gICAgOiAnc3RyZXRjaCcsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2NvbHVtbi1yZXZlcnNlJyxcbiAgICAgICAgICAgICAgICAgICAgcGFjayAgICAgOiAnc3RhcnQnXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgIGxheW91dENvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgICAgOiAnaGJveCcsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduICAgIDogJ3N0cmV0Y2gnLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICAgICAgICAgICAgICBwYWNrICAgICA6ICdzdGFydCdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgIGxheW91dENvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgICAgOiAnaGJveCcsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduICAgIDogJ3N0cmV0Y2gnLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdyb3ctcmV2ZXJzZScsXG4gICAgICAgICAgICAgICAgICAgIHBhY2sgICAgIDogJ3N0YXJ0J1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgICAgICAgIGxheW91dENvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGU6ICd2Ym94JyxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdzdHJldGNoJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGF5b3V0Q29uZmlnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge05lby50YWIuaGVhZGVyLkJ1dHRvbnxudWxsfVxuICAgICAqL1xuICAgIGdldFRhYkF0SW5kZXgoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGFiQmFyKCkuaXRlbXNbaW5kZXhdIHx8IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge05lby5jb250YWluZXIuVG9vbGJhcn1cbiAgICAgKi9cbiAgICBnZXRUYWJCYXIoKSB7XG4gICAgICAgIHJldHVybiBOZW8uZ2V0Q29tcG9uZW50KHRoaXMudGFiQmFySWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBtZXJnZWQgY29uZmlnXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGdldFRhYkJ1dHRvbkNvbmZpZyhjb25maWcsIGluZGV4KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBkZWZhdWx0Q29uZmlnID0ge1xuICAgICAgICAgICAgICAgIG1vZHVsZSA6IEhlYWRlckJ1dHRvbixcbiAgICAgICAgICAgICAgICBmbGV4ICAgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgaW5kZXggIDogaW5kZXgsXG4gICAgICAgICAgICAgICAgcHJlc3NlZDogbWUuYWN0aXZlSW5kZXggPT09IGluZGV4LFxuXG4gICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLmFjdGl2ZUluZGV4ID0gTmVvLmdldENvbXBvbmVudChkYXRhLnRhcmdldC5pZCkuaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU6IG1lXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7Li4uZGVmYXVsdENvbmZpZywgLi4uY29uZmlnfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7TmVvLnRhYi5TdHJpcH1cbiAgICAgKi9cbiAgICBnZXRUYWJTdHJpcCgpIHtcbiAgICAgICAgcmV0dXJuIE5lby5nZXRDb21wb25lbnQodGhpcy50YWJTdHJpcElkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnNlcnRzIGFuIGl0ZW0gb3IgYXJyYXkgb2YgaXRlbXMgYXQgYSBzcGVjaWZpYyBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fE9iamVjdFtdfSBpdGVtXG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZXxOZW8uY29tcG9uZW50LkJhc2VbXX1cbiAgICAgKi9cbiAgICBpbnNlcnQoaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY2FyZENvbnRhaW5lciA9IG1lLmdldENhcmRDb250YWluZXIoKSxcbiAgICAgICAgICAgIHRhYkJhciAgICAgICAgPSBtZS5nZXRUYWJCYXIoKSxcbiAgICAgICAgICAgIGhhc0l0ZW0gICAgICAgPSBmYWxzZSxcbiAgICAgICAgICAgIGksIGxlbiwgc3VwZXJJdGVtLCB0YWIsIHRhYkJ1dHRvbkNvbmZpZztcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgICAgICAgICAgaSAgID0gMDtcbiAgICAgICAgICAgIGxlbiA9IGl0ZW0ubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gdG9kbzogcmVuZGVyIGlzIGFzeW5jLCBlbnN1cmUgdGhlIG9yZGVyIG9mIGl0ZW1zIGlzIGNvcnJlY3RcblxuICAgICAgICAgICAgICAgIC8vIGluc2VydCB0aGUgYXJyYXkgYmFja3dhcmRzXG4gICAgICAgICAgICAgICAgaXRlbVtpXSA9IG1lLmluc2VydChpdGVtW2xlbiAtIDFdLCBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpICAgPSAwO1xuICAgICAgICAgICAgbGVuID0gY2FyZENvbnRhaW5lci5pdGVtcy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FyZENvbnRhaW5lci5pdGVtc1tpXS5pZCA9PT0gaXRlbS5pZCkge1xuICAgICAgICAgICAgICAgICAgICBoYXNJdGVtICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBzdXBlckl0ZW0gPSBjYXJkQ29udGFpbmVyLml0ZW1zW2ldO1xuICAgICAgICAgICAgICAgICAgICBtZS5hY3RpdmVJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaGFzSXRlbSkge1xuICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnID0gaXRlbS50YWJCdXR0b25Db25maWc7XG5cbiAgICAgICAgICAgIHRhYiA9IHRhYkJhci5pbnNlcnQoaW5kZXgsIG1lLmdldFRhYkJ1dHRvbkNvbmZpZyh0YWJCdXR0b25Db25maWcsIGluZGV4KSk7XG5cbiAgICAgICAgICAgIC8vIHRvZG86IG5vbiBpbmRleCBiYXNlZCBtYXRjaGluZyBvZiB0YWIgYnV0dG9ucyBhbmQgY2FyZHNcbiAgICAgICAgICAgIGkgICA9IDA7XG4gICAgICAgICAgICBsZW4gPSB0YWJCYXIuaXRlbXMubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGFiQmFyLml0ZW1zW2ldLmluZGV4ID0gaTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdGVtLmZsZXggPSAxO1xuICAgICAgICAgICAgc3VwZXJJdGVtID0gY2FyZENvbnRhaW5lci5pbnNlcnQoaW5kZXgsIGl0ZW0pO1xuXG4gICAgICAgICAgICBpZiAobWUuYWN0aXZhdGVJbnNlcnRlZFRhYnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW1lLnZub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLmFjdGl2ZUluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFiLm9uKCdtb3VudGVkJywgbWUub25UYWJCdXR0b25Nb3VudGVkLCBtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1cGVySXRlbVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdHJpZ2dlcmVkIG9uY2UgYSBkeW5hbWljYWxseSBhZGRlZCBoZWFkZXIuQnV0dG9uIGdldHMgbW91bnRlZFxuICAgICAqIGluIGNhc2UgYWN0aXZhdGVJbnNlcnRlZFRhYnMgaXMgc2V0IHRvIHRydWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYnV0dG9uSWRcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25UYWJCdXR0b25Nb3VudGVkKGJ1dHRvbklkKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNhcmRDb250YWluZXIgPSBtZS5nZXRDYXJkQ29udGFpbmVyKCksXG4gICAgICAgICAgICB0YWJCYXIgICAgICAgID0gbWUuZ2V0VGFiQmFyKCksXG4gICAgICAgICAgICBpICAgICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgICAgPSB0YWJCYXIuaXRlbXMubGVuZ3RoLFxuICAgICAgICAgICAgaW5kZXggICAgICAgICA9IC0xLFxuICAgICAgICAgICAgY2FyZCwgbGlzdGVuZXJJZDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGFiQmFyLml0ZW1zW2ldLmlkID09PSBidXR0b25JZCkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBjYXJkID0gY2FyZENvbnRhaW5lci5pdGVtc1tpbmRleF07XG5cbiAgICAgICAgICAgIGlmIChtZS52bm9kZSAmJiAhY2FyZC5tb3VudGVkKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJJZCA9IGNhcmQub24oJ21vdW50ZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNhcmQudW4oJ21vdW50ZWQnLCBsaXN0ZW5lcklkKTtcbiAgICAgICAgICAgICAgICAgICAgbWUuYWN0aXZlSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWUuYWN0aXZlSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBjb250YWluZXIgaXRlbSBieSByZWZlcmVuY2VcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gY29tcG9uZW50XG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbZGVzdHJveUl0ZW09dHJ1ZV1cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzaWxlbnQ9ZmFsc2VdXG4gICAgICovXG4gICAgcmVtb3ZlKGNvbXBvbmVudCwgZGVzdHJveUl0ZW09dHJ1ZSwgc2lsZW50PWZhbHNlKSB7XG4gICAgICAgIGxldCBpdGVtcyA9IFsuLi50aGlzLmdldENhcmRDb250YWluZXIoKS5pdGVtc10sXG4gICAgICAgICAgICBpICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICA9IGl0ZW1zLmxlbmd0aDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXRlbXNbaV0uaWQgPT09IGNvbXBvbmVudC5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQXQoaSwgZGVzdHJveUl0ZW0sIHNpbGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2Rlc3Ryb3lJdGVtPXRydWVdXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbc2lsZW50PWZhbHNlXVxuICAgICAqL1xuICAgIHJlbW92ZUF0KGluZGV4LCBkZXN0cm95SXRlbT10cnVlLCBzaWxlbnQ9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYWN0aXZlSW5kZXggICA9IG1lLmFjdGl2ZUluZGV4LFxuICAgICAgICAgICAgY2FyZENvbnRhaW5lciA9IG1lLmdldENhcmRDb250YWluZXIoKSxcbiAgICAgICAgICAgIHRhYkJhciAgICAgICAgPSBtZS5nZXRUYWJCYXIoKSxcbiAgICAgICAgICAgIGksIGxlbjtcblxuICAgICAgICBjYXJkQ29udGFpbmVyLnJlbW92ZUF0KGluZGV4LCBkZXN0cm95SXRlbSwgc2lsZW50KTtcbiAgICAgICAgdGFiQmFyICAgICAgIC5yZW1vdmVBdChpbmRleCwgdHJ1ZSwgICAgICAgIGZhbHNlKTtcblxuICAgICAgICBpZiAoaW5kZXggPCBhY3RpdmVJbmRleCkge1xuICAgICAgICAgICAgLy8gc2lsZW50IHVwZGF0ZXNcbiAgICAgICAgICAgIG1lLl9hY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4IC0gMTtcbiAgICAgICAgICAgIGNhcmRDb250YWluZXIubGF5b3V0Ll9hY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4IC0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgICAgIG1lLmFjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXggLSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdG9kbzogbm9uIGluZGV4IGJhc2VkIG1hdGNoaW5nIG9mIHRhYiBidXR0b25zIGFuZCBjYXJkc1xuICAgICAgICBpICAgPSAwO1xuICAgICAgICBsZW4gPSB0YWJCYXIuaXRlbXMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHRhYkJhci5pdGVtc1tpXS5pbmRleCA9IGk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB1cGRhdGVUYWJCdXR0b25zKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYWN0aXZlSW5kZXggPSBtZS5hY3RpdmVJbmRleCxcbiAgICAgICAgICAgIHRhYkJhciAgICAgID0gbWUuZ2V0VGFiQmFyKCksXG4gICAgICAgICAgICB0YWJCdXR0b25zICA9IHRhYkJhci5pdGVtcyB8fCBbXTtcblxuICAgICAgICB0YWJCdXR0b25zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpdGVtLnByZXNzZWQgPSBpbmRleCA9PT0gYWN0aXZlSW5kZXg7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ29udGFpbmVyKTtcblxuZXhwb3J0IHtDb250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udGFiLlN0cmlwXG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgU3RyaXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udGFiLlN0cmlwJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udGFiLlN0cmlwJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3RhYi1zdHJpcCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICd0YWItc3RyaXAnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGNscz1bJ25lby10YWItc3RyaXAnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby10YWItc3RyaXAnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSB0YWJDb250YWluZXJJZD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB0YWJDb250YWluZXJJZDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHVzZUFjdGl2ZVRhYkluZGljYXRvcl89dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgdXNlQWN0aXZlVGFiSW5kaWNhdG9yXzogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb209e2NuOiBbe2NsczogJ25lby1hY3RpdmUtdGFiLWluZGljYXRvcid9XX1cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWFjdGl2ZS10YWItaW5kaWNhdG9yJ11cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5nZXRUYWJDb250YWluZXIoKS5vbih7XG4gICAgICAgICAgICBhY3RpdmVJbmRleENoYW5nZTogbWUuZ2V0QWN0aXZlVGFiUmVjdFRoZW5Nb3ZlLFxuICAgICAgICAgICAgc2NvcGUgICAgICAgICAgICA6IG1lXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdXNlQWN0aXZlVGFiSW5kaWNhdG9yIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VXNlQWN0aXZlVGFiSW5kaWNhdG9yKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgICAgICB2ZG9tLmNuWzBdLnJlbW92ZURvbSA9ICF2YWx1ZTtcblxuICAgICAgICAgICAgaWYgKG1lLm1vdW50ZWQgJiYgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBtZS5fdmRvbSA9IHZkb207IC8vIHNpbGVudCB1cGRhdGVcbiAgICAgICAgICAgICAgICBtZS5nZXRBY3RpdmVUYWJSZWN0VGhlbk1vdmUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdHxudWxsfSBvcHRzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdHMub2xkVmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb3B0cy52YWx1ZVxuICAgICAqIEdldHMgdGhlIERvbVJlY3Qgb2YgdGhlIGFjdGl2ZSB0YWIsIHRoZW4gbW92ZXMgdGhlIGluZGljYXRvclxuICAgICAqL1xuICAgIGdldEFjdGl2ZVRhYlJlY3RUaGVuTW92ZShvcHRzKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaWRzICAgICAgICAgID0gW10sXG4gICAgICAgICAgICB0YWJDb250YWluZXIgPSBtZS5nZXRUYWJDb250YWluZXIoKTtcblxuICAgICAgICBpZiAobWUudm5vZGUpIHtcbiAgICAgICAgICAgIGlmIChvcHRzKSB7XG4gICAgICAgICAgICAgICAgaWRzLnB1c2godGFiQ29udGFpbmVyLmdldFRhYkF0SW5kZXgob3B0cy52YWx1ZSksIHRhYkNvbnRhaW5lci5nZXRUYWJBdEluZGV4KG9wdHMub2xkVmFsdWUpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWRzLnB1c2godGFiQ29udGFpbmVyLmdldFRhYkF0SW5kZXgodGFiQ29udGFpbmVyLmFjdGl2ZUluZGV4KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlkcyA9IGlkcy5tYXAoZSA9PiBlICYmIGUuaWQpLmZpbHRlcihCb29sZWFuKTtcblxuICAgICAgICAgICAgaWYgKG1lLnVzZUFjdGl2ZVRhYkluZGljYXRvcikge1xuICAgICAgICAgICAgICAgIC8vIHJlbW90ZSBtZXRob2QgYWNjZXNzXG4gICAgICAgICAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZHNcbiAgICAgICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtZS5tb3ZlQWN0aXZlSW5kaWNhdG9yKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBnZXRUYWJDb250YWluZXIoKSB7XG4gICAgICAgIHJldHVybiBOZW8uZ2V0Q29tcG9uZW50KHRoaXMudGFiQ29udGFpbmVySWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbiBlaXRoZXIgY29udGFpbiB0aGUgbmV3IHRhcmdldCByZWN0IG9yIHRoZSBuZXcgYW5kIG9sZCBvbmVcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfSByZWN0c1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSByZWN0c1swXS5ib3R0b21cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcmVjdHNbMF0uaGVpZ2h0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHJlY3RzWzBdLmxlZnRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcmVjdHNbMF0ucmlnaHRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcmVjdHNbMF0udG9wXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHJlY3RzWzBdLndpZHRoXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHJlY3RzWzBdLnhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcmVjdHNbMF0ueVxuICAgICAqL1xuICAgIG1vdmVBY3RpdmVJbmRpY2F0b3IocmVjdHMpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgcmVjdCA9IHJlY3RzWzFdIHx8IHJlY3RzWzBdLFxuICAgICAgICAgICAgYWN0aXZlVGFiSW5kaWNhdG9yLCB0YWJDb250YWluZXIsIHZkb207XG5cbiAgICAgICAgaWYgKG1lLnVzZUFjdGl2ZVRhYkluZGljYXRvcikge1xuICAgICAgICAgICAgdmRvbSAgICAgICAgICAgICAgID0gbWUudmRvbTtcbiAgICAgICAgICAgIGFjdGl2ZVRhYkluZGljYXRvciA9IHZkb20uY25bMF07XG4gICAgICAgICAgICB0YWJDb250YWluZXIgICAgICAgPSBtZS5nZXRUYWJDb250YWluZXIoKTtcblxuICAgICAgICAgICAgc3dpdGNoICh0YWJDb250YWluZXIudGFiQmFyUG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRhYkluZGljYXRvci5zdHlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgIDogYCR7cmVjdC5sZWZ0fXB4YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcCAgIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIDogYCR7cmVjdC53aWR0aH1weGBcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVUYWJJbmRpY2F0b3Iuc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke3JlY3QuaGVpZ2h0fXB4YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcCAgIDogYCR7cmVjdC50b3B9cHhgLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggOiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpbiBjYXNlIHRoZXJlIGlzIGEgZHluYW1pYyBjaGFuZ2UgKG9sZFZhbHVlKSwgY2FsbCB0aGlzIG1ldGhvZCBhZ2FpblxuICAgICAgICAgICAgaWYgKHJlY3RzWzFdKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlVGFiSW5kaWNhdG9yLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1lLm1vdmVBY3RpdmVJbmRpY2F0b3IoW3JlY3RzWzBdXSk7XG4gICAgICAgICAgICAgICAgfSwgNTApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVRhYkluZGljYXRvci5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVUYWJJbmRpY2F0b3Iuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFN0cmlwKTtcblxuZXhwb3J0IHtTdHJpcCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZUJ1dHRvbiBmcm9tICcuLi8uLi9idXR0b24vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udGFiLmhlYWRlci5CdXR0b25cbiAqIEBleHRlbmRzIE5lby5idXR0b24uQmFzZVxuICovXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBCYXNlQnV0dG9uIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnRhYi5oZWFkZXIuQnV0dG9uJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udGFiLmhlYWRlci5CdXR0b24nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndGFiLWhlYWRlci1idXR0b24nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAndGFiLWhlYWRlci1idXR0b24nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGNscz1bJ25lby1idXR0b24nLCAnbmVvLXRhYi1idXR0b24nXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby10YWItaGVhZGVyLWJ1dHRvbicsICduZW8tYnV0dG9uJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSB1c2VBY3RpdmVUYWJJbmRpY2F0b3JfPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHVzZUFjdGl2ZVRhYkluZGljYXRvcl86IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbToge1xuICAgICAgICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWJ1dHRvbi1nbHlwaCddXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby1idXR0b24tdGV4dCddXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby10YWItYnV0dG9uLWluZGljYXRvciddXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdXNlQWN0aXZlVGFiSW5kaWNhdG9yIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VXNlQWN0aXZlVGFiSW5kaWNhdG9yKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVVzZUFjdGl2ZVRhYkluZGljYXRvcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbc2lsZW50PWZhbHNlXVxuICAgICAqL1xuICAgIHVwZGF0ZVVzZUFjdGl2ZVRhYkluZGljYXRvcihzaWxlbnQ9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgdmRvbS5jblsyXS5yZW1vdmVEb20gPSAhbWUudXNlQWN0aXZlVGFiSW5kaWNhdG9yO1xuXG4gICAgICAgIG1lW3NpbGVudCA/ICdfdmRvbScgOiAndmRvbSddID0gdmRvbTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEJ1dHRvbik7XG5cbmV4cG9ydCB7QnV0dG9uIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlVG9vbGJhciBmcm9tICcuLi8uLi9jb250YWluZXIvVG9vbGJhci5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udGFiLmhlYWRlci5Ub29sYmFyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLlRvb2xiYXJcbiAqL1xuY2xhc3MgVG9vbGJhciBleHRlbmRzIEJhc2VUb29sYmFyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnRhYi5oZWFkZXIuVG9vbGJhcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnRhYi5oZWFkZXIuVG9vbGJhcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd0YWItaGVhZGVyLXRvb2xiYXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAndGFiLWhlYWRlci10b29sYmFyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBjbHM9WyduZW8tdGFiLWhlYWRlci10b29sYmFyJywnbmVvLXRvb2xiYXInXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby10YWItaGVhZGVyLXRvb2xiYXInLCAnbmVvLXRvb2xiYXInXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHVzZUFjdGl2ZVRhYkluZGljYXRvcl89dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgdXNlQWN0aXZlVGFiSW5kaWNhdG9yXzogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHVzZUFjdGl2ZVRhYkluZGljYXRvciBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFVzZUFjdGl2ZVRhYkluZGljYXRvcih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICAgICAgbWUuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAvLyBzaWxlbnQgdXBkYXRlc1xuICAgICAgICAgICAgICAgIGl0ZW0uX3VzZUFjdGl2ZVRhYkluZGljYXRvciA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGl0ZW0udXBkYXRlVXNlQWN0aXZlVGFiSW5kaWNhdG9yKHRydWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgY3JlYXRlSXRlbXMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkZWZhdWx0cyA9IG1lLml0ZW1EZWZhdWx0cyB8fCB7fTtcblxuICAgICAgICBkZWZhdWx0cy51c2VBY3RpdmVUYWJJbmRpY2F0b3IgPSBtZS51c2VBY3RpdmVUYWJJbmRpY2F0b3I7XG4gICAgICAgIG1lLml0ZW1EZWZhdWx0cyA9IGRlZmF1bHRzO1xuXG4gICAgICAgIHN1cGVyLmNyZWF0ZUl0ZW1zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGF5b3V0IGNvbmZpZyBtYXRjaGluZyB0byB0aGUgZG9jayBwb3NpdGlvblxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IGxheW91dENvbmZpZ1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBnZXRMYXlvdXRDb25maWcoKSB7XG4gICAgICAgIGxldCBsYXlvdXRDb25maWc7XG5cbiAgICAgICAgc3dpdGNoKHRoaXMuZG9jaykge1xuICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICAgICAgbGF5b3V0Q29uZmlnID0ge1xuICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2hib3gnLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIHBhY2sgOiAnc3RhcnQnXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgIGxheW91dENvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgICAgOiAndmJveCcsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduICAgIDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2NvbHVtbi1yZXZlcnNlJyxcbiAgICAgICAgICAgICAgICAgICAgcGFjayAgICAgOiAnZW5kJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgbGF5b3V0Q29uZmlnID0ge1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgICA6ICd2Ym94JyxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24gICAgOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgICAgICAgcGFjayAgICAgOiAnc3RhcnQnXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsYXlvdXRDb25maWc7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhUb29sYmFyKTtcblxuZXhwb3J0IHtUb29sYmFyIGFzIGRlZmF1bHR9OyJdLCJzb3VyY2VSb290IjoiIn0=