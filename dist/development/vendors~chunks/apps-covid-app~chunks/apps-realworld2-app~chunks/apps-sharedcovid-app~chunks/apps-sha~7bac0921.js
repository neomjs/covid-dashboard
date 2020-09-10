self["webpackChunk"](["vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921"],{

/***/ "./node_modules/neo.mjs/src/button/Base.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/button/Base.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Neo.button.Base
 * @extends Neo.component.Base
 */
class Base extends _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * Valid values for iconPosition
         * @member {String[]} iconPositions=['top', 'right', 'bottom', 'left']
         * @protected
         * @static
         */
        iconPositions: ['top', 'right', 'bottom', 'left']
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.button.Base'
         * @protected
         */
        className: 'Neo.button.Base',
        /**
         * @member {String} ntype='button'
         * @protected
         */
        ntype: 'button',
        /**
         * @member {String[]} cls=['neo-button']
         */
        cls: ['neo-button'],
        /**
         * false calls Neo.Main.setRoute()
         * @member {Boolean} editRoute=true
         */
        editRoute: true,
        /**
         * Shortcut for domListeners={click:handler}
         * A string based value assumes that the handlerFn lives inside a ComponentController
         * @member {Function|String|null} handler_=null
         */
        handler_: null,
        /**
         * The scope (this pointer) inside the handler function.
         * Points to the button instance by default.
         * @member {Object|null} handlerScope=null
         */
        handlerScope: null,
        /**
         * The CSS class to use for an icon, e.g. 'fa fa-home'
         * @member {String|null} [iconCls_=null]
         */
        iconCls_: null,
        /**
         * The color to use for an icon, e.g. '#ff0000' [optional]
         * @member {String|null} iconColor_=null
         */
        iconColor_: null,
        /**
         * The position of the icon in case iconCls has a value.
         * Valid values are: 'top', 'right', 'bottom', 'left'
         * @member {String} iconPosition_='left'
         */
        iconPosition_: 'left',
        /**
         * The pressed state of the Button
         * @member {Boolean} pressed_=false
         */
        pressed_: false,
        /**
         * Change the browser hash value on click
         * @member {String|null} route_=null
         */
        route_: null,
        /**
         * The text displayed on the button [optional]
         * @member {String} text_=''
         */
        text_: '',
        /**
         * Transforms the button tag into an a tag [optional]
         * @member {String|null} url_=null
         */
        url_: null,
        /**
         * If url is set, applies the target attribute on the top level vdom node [optional]
         * @member {String} urlTarget_='_blank'
         */
        urlTarget_: '_blank',
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            tag: 'button',
            cn : [
                {tag: 'span', cls: ['neo-button-glyph']},
                {tag: 'span', cls: ['neo-button-text']}
            ]
        }
    }}

    /**
     * Triggered after the handler config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetHandler(value, oldValue) {
        if (value) {
            let me           = this,
                domListeners = me.domListeners || [];

            domListeners.push({
                click: value,
                scope: me.handlerScope || me
            });

            me.domListeners = domListeners;
        }
    }

    /**
     * Triggered after the iconCls config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetIconCls(value, oldValue) {
        let me       = this,
            vdom     = me.vdom,
            iconNode = me.getVdomRoot().cn[0];

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(iconNode.cls, oldValue);

        if (!value || value === '') {
            iconNode.removeDom = true;
        } else {
            iconNode.removeDom = false;
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(iconNode.cls, value);
        }

        me.vdom = vdom;
    }

    /**
     * Triggered after the iconColor config got changed
     * @param {String|null} value
     * @param {String|null} oldValue
     * @protected
     */
    afterSetIconColor(value, oldValue) {
        let me       = this,
            vdom     = me.vdom,
            iconNode = me.getVdomRoot().cn[0];

        if (!iconNode.style) {
            iconNode.style = {};
        }

        if (value === '') {
            value = null;
        }

        iconNode.style.color = value;
        me.vdom = vdom;
    }

    /**
     * Triggered after the iconPosition config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetIconPosition(value, oldValue) {
        let cls = this.cls;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, 'icon-' + oldValue);
        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, 'icon-' + value);

        this.cls = cls;
    }

    /**
     * Triggered after the pressed config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetPressed(value, oldValue) {
        let cls = this.cls;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"][value === true ? 'add' : 'remove'](cls, 'pressed');
        this.cls = cls;
    }

    /**
     * Triggered after the route config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetRoute(value, oldValue) {
        if (value) {
            let me           = this,
                domListeners = me.domListeners || [];

            domListeners.push({
                click: me.changeRoute,
                scope: me
            });

            me.domListeners = domListeners;
        }
    }

    /**
     * Triggered after the text config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetText(value, oldValue) {
        let me       = this,
            vdom     = me.vdom,
            vdomRoot = me.getVdomRoot(),
            textNode = vdomRoot.cn[1];

        if (value === '') {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(me._cls,      'no-text');
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(vdomRoot.cls, 'no-text');
            textNode.removeDom = true;
        } else {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(me._cls,      'no-text');
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(vdomRoot.cls, 'no-text');
            textNode.removeDom = false;
            textNode.innerHTML = value;
        }

        me.vdom = vdom;
    }

    /**
     * Triggered after the url config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetUrl(value, oldValue) {
        let me       = this,
            vdom     = me.vdom,
            vdomRoot = me.getVdomRoot();

        if (value) {
            vdomRoot.href = value;
            vdomRoot.tag  = 'a';
        } else {
            delete vdomRoot.href;
            vdomRoot.tag = 'button';
        }

        me.vdom = vdom;
    }

    /**
     * Triggered after the urlTarget config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetUrlTarget(value, oldValue) {
        let me       = this,
            vdom     = me.vdom,
            vdomRoot = me.getVdomRoot();

        if (me.url) {
            vdomRoot.target = value;
        } else {
            delete vdomRoot.target;
        }

        me.vdom = vdom;
    }

    /**
     * Converts the iconCls array into a string on beforeGet
     * @returns {String}
     * @protected
     */
    beforeGetIconCls() {
        let iconCls = this._iconCls;

        if (Array.isArray(iconCls)) {
            return iconCls.join(' ');
        }

        return iconCls;
    }

    /**
     * Triggered before the iconCls config gets changed. Converts the string into an array if needed.
     * @param {Array|String|null} value
     * @param {Array|String|null} oldValue
     * @returns {Array}
     * @protected
     */
    beforeSetIconCls(value, oldValue) {
        if (value && !Array.isArray(value)) {
            value = value.split(' ');
        }

        return value;
    }

    /**
     * Triggered before the iconPosition config gets changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    beforeSetIconPosition(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'iconPosition');
    }

    /**
     * @protected
     */
    changeRoute() {
        const me = this;

        if (me.editRoute) {
            Neo.Main.editRoute(this.route);
        } else {
            Neo.Main.setRoute({
                value: me.route
            });
        }
    }
}

Neo.applyClassConfig(Base);



/***/ }),

/***/ "./node_modules/neo.mjs/src/component/Label.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/component/Label.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Label; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * Convenience class to render a label with a text
 * @class Neo.component.Label
 * @extends Neo.component.Base
 */
class Label extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.component.Label'
         * @protected
         */
        className: 'Neo.component.Label',
        /**
         * @member {String} ntype='label'
         * @protected
         */
        ntype: 'label',
        /**
         * @member {String[]} cls=['neo-label']
         */
        cls: ['neo-label'],
        /**
         * @member {String} text_=''
         */
        text_: '',
        /**
         * @member {Object} _vdom={tag: 'label'}
         */
        _vdom: {
            tag      : 'label',
            draggable: false
        }
    }}

    /**
     * Triggered after the text config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetText(value, oldValue) {
        let vdom = this.vdom;
        vdom.html = value;
        this.vdom = vdom;
    }
}

Neo.applyClassConfig(Label);



/***/ }),

/***/ "./node_modules/neo.mjs/src/container/Toolbar.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/src/container/Toolbar.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toolbar; });
/* harmony import */ var _button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button/Base.mjs */ "./node_modules/neo.mjs/src/button/Base.mjs");
/* harmony import */ var _component_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _component_Label_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/Label.mjs */ "./node_modules/neo.mjs/src/component/Label.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");






/**
 * @class Neo.container.Toolbar
 * @extends Neo.container.Base
 */
class Toolbar extends _Base_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {
    static getStaticConfig() {return {
        /**
         * Valid values for dock
         * @member {String[]} dockPositions=['top', 'right', 'bottom', 'left']
         * @static
         */
        dockPositions: ['top', 'right', 'bottom', 'left'],
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.container.Toolbar'
         * @protected
         */
        className: 'Neo.container.Toolbar',
        /**
         * @member {String} ntype='toolbar'
         * @protected
         */
        ntype: 'toolbar',
        /**
         * @member {String[]} cls=['neo-toolbar']
         */
        cls: ['neo-toolbar'],
        /**
         * @member {String} dock_='top'
         */
        dock_: 'top',
        /**
         * @member {Object} itemDefaults={ntype: 'button'}
         */
        itemDefaults: {
            ntype: 'button'
        },
        /**
         * @member {Object} _layout={ntype: 'hbox', align: 'center', pack : 'start'}
         */
        _layout: {
            ntype: 'hbox',
            align: 'center',
            pack : 'start'
        }
    }}

    /**
     * Creates a layout config depending on this.dock
     * @returns {Object} layoutConfig
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
                    pack     : 'start'
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

    /**
     * Triggered after the dock config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetDock(value, oldValue) {
        let me            = this,
            cls           = me.cls,
            dockPositions = me.getStaticConfig('dockPositions');

        dockPositions.forEach(key => {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__["default"][key === value ? 'add' : 'remove'](cls, 'neo-dock-' + key);
        });

        me.cls    = cls;
        me.layout = me.getLayoutConfig();
    }

    /**
     * Checks if the new dock position matches a value of the static dockPositions config
     * @param {String} value
     * @param {String} oldValue
     * @returns {String} value
     * @protected
     */
    beforeSetDock(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'dock', 'dockPositions');
    }

    createItems() {
        const items = this._items;

        if (Array.isArray(items)) {
            items.forEach((item, index) => {
                if (item === '->') {
                    items[index] = Neo.create({
                        module: _component_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
                        flex  : 1
                    });
                }
            });
        }

        return super.createItems();
    }
}

Neo.applyClassConfig(Toolbar);



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvYnV0dG9uL0Jhc2UubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvTGFiZWwubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250YWluZXIvVG9vbGJhci5tanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThDO0FBQ0o7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJEQUFTO0FBQzVCLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFD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dURBQVE7QUFDcEIsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDJEQUFTO0FBQ3pDO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfjdiYWMwOTIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQvQmFzZS5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5idXR0b24uQmFzZVxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIEJhc2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlcyBmb3IgaWNvblBvc2l0aW9uXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBpY29uUG9zaXRpb25zPVsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J11cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBpY29uUG9zaXRpb25zOiBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uYnV0dG9uLkJhc2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5idXR0b24uQmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdidXR0b24nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tYnV0dG9uJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tYnV0dG9uJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBmYWxzZSBjYWxscyBOZW8uTWFpbi5zZXRSb3V0ZSgpXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGVkaXRSb3V0ZT10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBlZGl0Um91dGU6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG9ydGN1dCBmb3IgZG9tTGlzdGVuZXJzPXtjbGljazpoYW5kbGVyfVxuICAgICAgICAgKiBBIHN0cmluZyBiYXNlZCB2YWx1ZSBhc3N1bWVzIHRoYXQgdGhlIGhhbmRsZXJGbiBsaXZlcyBpbnNpZGUgYSBDb21wb25lbnRDb250cm9sbGVyXG4gICAgICAgICAqIEBtZW1iZXIge0Z1bmN0aW9ufFN0cmluZ3xudWxsfSBoYW5kbGVyXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBoYW5kbGVyXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBzY29wZSAodGhpcyBwb2ludGVyKSBpbnNpZGUgdGhlIGhhbmRsZXIgZnVuY3Rpb24uXG4gICAgICAgICAqIFBvaW50cyB0byB0aGUgYnV0dG9uIGluc3RhbmNlIGJ5IGRlZmF1bHQuXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBoYW5kbGVyU2NvcGU9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaGFuZGxlclNjb3BlOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIENTUyBjbGFzcyB0byB1c2UgZm9yIGFuIGljb24sIGUuZy4gJ2ZhIGZhLWhvbWUnXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBbaWNvbkNsc189bnVsbF1cbiAgICAgICAgICovXG4gICAgICAgIGljb25DbHNfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNvbG9yIHRvIHVzZSBmb3IgYW4gaWNvbiwgZS5nLiAnI2ZmMDAwMCcgW29wdGlvbmFsXVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gaWNvbkNvbG9yXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBpY29uQ29sb3JfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHBvc2l0aW9uIG9mIHRoZSBpY29uIGluIGNhc2UgaWNvbkNscyBoYXMgYSB2YWx1ZS5cbiAgICAgICAgICogVmFsaWQgdmFsdWVzIGFyZTogJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCdcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBpY29uUG9zaXRpb25fPSdsZWZ0J1xuICAgICAgICAgKi9cbiAgICAgICAgaWNvblBvc2l0aW9uXzogJ2xlZnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHByZXNzZWQgc3RhdGUgb2YgdGhlIEJ1dHRvblxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBwcmVzc2VkXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgcHJlc3NlZF86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hhbmdlIHRoZSBicm93c2VyIGhhc2ggdmFsdWUgb24gY2xpY2tcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHJvdXRlXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICByb3V0ZV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdGV4dCBkaXNwbGF5ZWQgb24gdGhlIGJ1dHRvbiBbb3B0aW9uYWxdXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gdGV4dF89JydcbiAgICAgICAgICovXG4gICAgICAgIHRleHRfOiAnJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRyYW5zZm9ybXMgdGhlIGJ1dHRvbiB0YWcgaW50byBhbiBhIHRhZyBbb3B0aW9uYWxdXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSB1cmxfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHVybF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB1cmwgaXMgc2V0LCBhcHBsaWVzIHRoZSB0YXJnZXQgYXR0cmlidXRlIG9uIHRoZSB0b3AgbGV2ZWwgdmRvbSBub2RlIFtvcHRpb25hbF1cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB1cmxUYXJnZXRfPSdfYmxhbmsnXG4gICAgICAgICAqL1xuICAgICAgICB1cmxUYXJnZXRfOiAnX2JsYW5rJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgICAgICAgY24gOiBbXG4gICAgICAgICAgICAgICAge3RhZzogJ3NwYW4nLCBjbHM6IFsnbmVvLWJ1dHRvbi1nbHlwaCddfSxcbiAgICAgICAgICAgICAgICB7dGFnOiAnc3BhbicsIGNsczogWyduZW8tYnV0dG9uLXRleHQnXX1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGhhbmRsZXIgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SGFuZGxlcih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBtZS5kb21MaXN0ZW5lcnMgfHwgW107XG5cbiAgICAgICAgICAgIGRvbUxpc3RlbmVycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBjbGljazogdmFsdWUsXG4gICAgICAgICAgICAgICAgc2NvcGU6IG1lLmhhbmRsZXJTY29wZSB8fCBtZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1lLmRvbUxpc3RlbmVycyA9IGRvbUxpc3RlbmVycztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaWNvbkNscyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRJY29uQ2xzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgaWNvbk5vZGUgPSBtZS5nZXRWZG9tUm9vdCgpLmNuWzBdO1xuXG4gICAgICAgIE5lb0FycmF5LnJlbW92ZShpY29uTm9kZS5jbHMsIG9sZFZhbHVlKTtcblxuICAgICAgICBpZiAoIXZhbHVlIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgaWNvbk5vZGUucmVtb3ZlRG9tID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGljb25Ob2RlLnJlbW92ZURvbSA9IGZhbHNlO1xuICAgICAgICAgICAgTmVvQXJyYXkuYWRkKGljb25Ob2RlLmNscywgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBpY29uQ29sb3IgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEljb25Db2xvcih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGljb25Ob2RlID0gbWUuZ2V0VmRvbVJvb3QoKS5jblswXTtcblxuICAgICAgICBpZiAoIWljb25Ob2RlLnN0eWxlKSB7XG4gICAgICAgICAgICBpY29uTm9kZS5zdHlsZSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWNvbk5vZGUuc3R5bGUuY29sb3IgPSB2YWx1ZTtcbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBpY29uUG9zaXRpb24gY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SWNvblBvc2l0aW9uKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgY2xzID0gdGhpcy5jbHM7XG5cbiAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgJ2ljb24tJyArIG9sZFZhbHVlKTtcbiAgICAgICAgTmVvQXJyYXkuYWRkKGNscywgJ2ljb24tJyArIHZhbHVlKTtcblxuICAgICAgICB0aGlzLmNscyA9IGNscztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHByZXNzZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRQcmVzc2VkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgY2xzID0gdGhpcy5jbHM7XG5cbiAgICAgICAgTmVvQXJyYXlbdmFsdWUgPT09IHRydWUgPyAnYWRkJyA6ICdyZW1vdmUnXShjbHMsICdwcmVzc2VkJyk7XG4gICAgICAgIHRoaXMuY2xzID0gY2xzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgcm91dGUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0Um91dGUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gbWUuZG9tTGlzdGVuZXJzIHx8IFtdO1xuXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgY2xpY2s6IG1lLmNoYW5nZVJvdXRlLFxuICAgICAgICAgICAgICAgIHNjb3BlOiBtZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1lLmRvbUxpc3RlbmVycyA9IGRvbUxpc3RlbmVycztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdGV4dCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRUZXh0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgdmRvbVJvb3QgPSBtZS5nZXRWZG9tUm9vdCgpLFxuICAgICAgICAgICAgdGV4dE5vZGUgPSB2ZG9tUm9vdC5jblsxXTtcblxuICAgICAgICBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICBOZW9BcnJheS5hZGQobWUuX2NscywgICAgICAnbm8tdGV4dCcpO1xuICAgICAgICAgICAgTmVvQXJyYXkuYWRkKHZkb21Sb290LmNscywgJ25vLXRleHQnKTtcbiAgICAgICAgICAgIHRleHROb2RlLnJlbW92ZURvbSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUobWUuX2NscywgICAgICAnbm8tdGV4dCcpO1xuICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKHZkb21Sb290LmNscywgJ25vLXRleHQnKTtcbiAgICAgICAgICAgIHRleHROb2RlLnJlbW92ZURvbSA9IGZhbHNlO1xuICAgICAgICAgICAgdGV4dE5vZGUuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHVybCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRVcmwodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICB2ZG9tUm9vdCA9IG1lLmdldFZkb21Sb290KCk7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB2ZG9tUm9vdC5ocmVmID0gdmFsdWU7XG4gICAgICAgICAgICB2ZG9tUm9vdC50YWcgID0gJ2EnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHZkb21Sb290LmhyZWY7XG4gICAgICAgICAgICB2ZG9tUm9vdC50YWcgPSAnYnV0dG9uJztcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdXJsVGFyZ2V0IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFVybFRhcmdldCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIHZkb21Sb290ID0gbWUuZ2V0VmRvbVJvb3QoKTtcblxuICAgICAgICBpZiAobWUudXJsKSB7XG4gICAgICAgICAgICB2ZG9tUm9vdC50YXJnZXQgPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSB2ZG9tUm9vdC50YXJnZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyB0aGUgaWNvbkNscyBhcnJheSBpbnRvIGEgc3RyaW5nIG9uIGJlZm9yZUdldFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZUdldEljb25DbHMoKSB7XG4gICAgICAgIGxldCBpY29uQ2xzID0gdGhpcy5faWNvbkNscztcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpY29uQ2xzKSkge1xuICAgICAgICAgICAgcmV0dXJuIGljb25DbHMuam9pbignICcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGljb25DbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgaWNvbkNscyBjb25maWcgZ2V0cyBjaGFuZ2VkLiBDb252ZXJ0cyB0aGUgc3RyaW5nIGludG8gYW4gYXJyYXkgaWYgbmVlZGVkLlxuICAgICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldEljb25DbHModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJyAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBpY29uUG9zaXRpb24gY29uZmlnIGdldHMgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRJY29uUG9zaXRpb24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJlZm9yZVNldEVudW1WYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICdpY29uUG9zaXRpb24nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgY2hhbmdlUm91dGUoKSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUuZWRpdFJvdXRlKSB7XG4gICAgICAgICAgICBOZW8uTWFpbi5lZGl0Um91dGUodGhpcy5yb3V0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBOZW8uTWFpbi5zZXRSb3V0ZSh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG1lLnJvdXRlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQmFzZSk7XG5cbmV4cG9ydCB7QmFzZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIENvbnZlbmllbmNlIGNsYXNzIHRvIHJlbmRlciBhIGxhYmVsIHdpdGggYSB0ZXh0XG4gKiBAY2xhc3MgTmVvLmNvbXBvbmVudC5MYWJlbFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIExhYmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbXBvbmVudC5MYWJlbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbXBvbmVudC5MYWJlbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdsYWJlbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdsYWJlbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWxhYmVsJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tbGFiZWwnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gdGV4dF89JydcbiAgICAgICAgICovXG4gICAgICAgIHRleHRfOiAnJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb209e3RhZzogJ2xhYmVsJ31cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICB0YWcgICAgICA6ICdsYWJlbCcsXG4gICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB0ZXh0IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFRleHQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuICAgICAgICB2ZG9tLmh0bWwgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKExhYmVsKTtcblxuZXhwb3J0IHtMYWJlbCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQnV0dG9uICAgIGZyb20gJy4uL2J1dHRvbi9CYXNlLm1qcyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IExhYmVsICAgICBmcm9tICcuLi9jb21wb25lbnQvTGFiZWwubWpzJztcbmltcG9ydCBOZW9BcnJheSAgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29udGFpbmVyLlRvb2xiYXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBUb29sYmFyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXMgZm9yIGRvY2tcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGRvY2tQb3NpdGlvbnM9Wyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBkb2NrUG9zaXRpb25zOiBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLFxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbnRhaW5lci5Ub29sYmFyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29udGFpbmVyLlRvb2xiYXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndG9vbGJhcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICd0b29sYmFyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tdG9vbGJhciddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLXRvb2xiYXInXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZG9ja189J3RvcCdcbiAgICAgICAgICovXG4gICAgICAgIGRvY2tfOiAndG9wJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gaXRlbURlZmF1bHRzPXtudHlwZTogJ2J1dHRvbid9XG4gICAgICAgICAqL1xuICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgIG50eXBlOiAnYnV0dG9uJ1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfbGF5b3V0PXtudHlwZTogJ2hib3gnLCBhbGlnbjogJ2NlbnRlcicsIHBhY2sgOiAnc3RhcnQnfVxuICAgICAgICAgKi9cbiAgICAgICAgX2xheW91dDoge1xuICAgICAgICAgICAgbnR5cGU6ICdoYm94JyxcbiAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgIHBhY2sgOiAnc3RhcnQnXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGxheW91dCBjb25maWcgZGVwZW5kaW5nIG9uIHRoaXMuZG9ja1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IGxheW91dENvbmZpZ1xuICAgICAqL1xuICAgIGdldExheW91dENvbmZpZygpIHtcbiAgICAgICAgbGV0IGxheW91dENvbmZpZztcblxuICAgICAgICBzd2l0Y2godGhpcy5kb2NrKSB7XG4gICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgICBsYXlvdXRDb25maWcgPSB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlOiAnaGJveCcsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgcGFjayA6ICdzdGFydCdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgbGF5b3V0Q29uZmlnID0ge1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgICA6ICd2Ym94JyxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24gICAgOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnY29sdW1uLXJldmVyc2UnLFxuICAgICAgICAgICAgICAgICAgICBwYWNrICAgICA6ICdzdGFydCdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgIGxheW91dENvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgICAgOiAndmJveCcsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduICAgIDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgICAgICAgIHBhY2sgICAgIDogJ3N0YXJ0J1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGF5b3V0Q29uZmlnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgZG9jayBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXREb2NrKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjbHMgICAgICAgICAgID0gbWUuY2xzLFxuICAgICAgICAgICAgZG9ja1Bvc2l0aW9ucyA9IG1lLmdldFN0YXRpY0NvbmZpZygnZG9ja1Bvc2l0aW9ucycpO1xuXG4gICAgICAgIGRvY2tQb3NpdGlvbnMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgTmVvQXJyYXlba2V5ID09PSB2YWx1ZSA/ICdhZGQnIDogJ3JlbW92ZSddKGNscywgJ25lby1kb2NrLScgKyBrZXkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZS5jbHMgICAgPSBjbHM7XG4gICAgICAgIG1lLmxheW91dCA9IG1lLmdldExheW91dENvbmZpZygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgbmV3IGRvY2sgcG9zaXRpb24gbWF0Y2hlcyBhIHZhbHVlIG9mIHRoZSBzdGF0aWMgZG9ja1Bvc2l0aW9ucyBjb25maWdcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXREb2NrKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iZWZvcmVTZXRFbnVtVmFsdWUodmFsdWUsIG9sZFZhbHVlLCAnZG9jaycsICdkb2NrUG9zaXRpb25zJyk7XG4gICAgfVxuXG4gICAgY3JlYXRlSXRlbXMoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5faXRlbXM7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbXMpKSB7XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtID09PSAnLT4nKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2luZGV4XSA9IE5lby5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4ICA6IDFcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VwZXIuY3JlYXRlSXRlbXMoKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFRvb2xiYXIpO1xuXG5leHBvcnQge1Rvb2xiYXIgYXMgZGVmYXVsdH07Il0sInNvdXJjZVJvb3QiOiIifQ==