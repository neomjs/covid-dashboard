self["webpackChunk"](["vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5"],{

/***/ "./node_modules/neo.mjs/examples/ConfigurationViewport.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/ConfigurationViewport.mjs ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConfigurationViewport; });
/* harmony import */ var _src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/button/Base.mjs */ "./node_modules/neo.mjs/src/button/Base.mjs");
/* harmony import */ var _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/container/Panel.mjs */ "./node_modules/neo.mjs/src/container/Panel.mjs");
/* harmony import */ var _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");






/**
 * Base class for example Apps which should be configurable
 * @class Neo.examples.ConfigurationViewport
 * @extends Neo.container.Viewport
 * @abstract
 */
class ConfigurationViewport extends _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_4__["default"] {
    static getConfig() {return {
        className: 'Neo.examples.ConfigurationContainer',
        ntype    : 'configuration-viewport',

        autoMount: true,
        layout   : {ntype: 'hbox', align: 'stretch'},

        /**
         * @member {Number} configItemLabelWidth=150
         */
        configItemLabelWidth: 150,
        /**
         * @member {Number} configItemWidth=270
         */
        configItemWidth: 270,
        /**
         * @member {Number} configItemWidth=270
         */
        configPanelFlex: 1,
        /**
         * @member {Neo.component.Base|null} exampleComponent=null
         */
        exampleComponent: null,
        /**
         * @member {Number} exampleComponentFlex=1
         */
        exampleComponentFlex: 2
    }}

    onConstructed() {
        let me = this;

        me.exampleComponent        = me.createExampleComponent();
        me.configurationComponents = me.createConfigurationComponents() || [];
        
        me.items = [{
            module: _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            items : [me.exampleComponent],
            flex  : me.exampleComponentFlex,
            layout: 'base',
            style : {padding: '20px'}
        }, {
            module: _src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            cls   : ['neo-panel', 'neo-container', 'neo-configuration-panel'],
            flex  : me.configPanelFlex,
            style : {margin: '20px'},

            containerConfig: {
                style: {overflowY: 'scroll'}
            },

            headers: [{
                dock : 'top',
                items: [{
                    ntype: 'label',
                    text : 'Configuration'
                }, {
                    ntype: 'component',
                    flex : 1
                }, {
                    module : _src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
                    handler: me.onSwitchTheme.bind(me),
                    id     : me.id + '__' + 'switchThemeButton',
                    text   : 'Theme Dark'
                }]
            }],

            items: [{
                module: _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
                layout: {ntype: 'vbox'},
                style : {padding: '10px'},
                cls   : ['neo-configuration-panel-body'],
                itemDefaults: {
                    clearToOriginalValue: true,
                    labelWidth          : me.configItemLabelWidth,
                    width               : me.configItemWidth
                },

                items: [...me.configurationComponents, {
                    module : _src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
                    handler: me.onSwitchTheme.bind(me, 'cmp'),
                    id     : me.id + '_cmp_' + 'switchThemeButton',
                    style  : {marginTop: '20px'},
                    text   : 'Theme Dark',
                    width  : 100
                }, {
                    module : _src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
                    handler: (() => {console.log(me.exampleComponent);}),
                    text   : 'Log Instance',
                    width  : 100
                }]
            }]
        }];

        super.onConstructed();
    }

    /**
     * Override this method to create the components to show inside the configuration container
     * @returns {Neo.component.Base[]|null}
     */
    createConfigurationComponents() {
        return null;
    }

    /**
     * Override this method to create the component to show inside the current example
     * @returns {Neo.component.Base|null}
     */
    createExampleComponent() {
        return null;
    }

    /**
     *
     * @param {String} config
     * @param {Object} opts
     */
    onConfigChange(config, opts) {
        this.exampleComponent[config] = opts.value;
    }

    /**
     *
     * @param {String} config
     * @param {String} value
     * @param {Object} opts
     */
    onRadioChange(config, value, opts) {
        if (opts.value === true) { // we only want to listen to check events, not uncheck
            this.exampleComponent[config] = value;
        }
    }

    /**
     *
     * @param {String} target
     */
    onSwitchTheme(target) {
        let me     = this,
            button = Neo.getComponent(me.id + (target !== 'cmp' ? '__' : '_cmp_') + 'switchThemeButton'),
            cls    = target === 'cmp' ? me.exampleComponent.cls : me.cls;

        if (button.text === 'Theme Light') {
            button.text = 'Theme Dark';
            _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].remove(cls, 'neo-theme-dark');
            _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].add(cls, 'neo-theme-light');
        } else {
            button.text = 'Theme Light';
            _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].remove(cls, 'neo-theme-light');
            _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].add(cls, 'neo-theme-dark');
        }

        if (target === 'cmp') {
            me.exampleComponent.cls = cls;
        } else {
            me.cls = cls;
        }
    }
}

Neo.applyClassConfig(ConfigurationViewport);



/***/ }),

/***/ "./node_modules/neo.mjs/src/container/Panel.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/container/Panel.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Panel; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _Toolbar_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toolbar.mjs */ "./node_modules/neo.mjs/src/container/Toolbar.mjs");



/**
 * An extended Container supporting multiple docked header toolbars
 * @class Neo.container.Panel
 * @extends Neo.container.Base
 */
class Panel extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.container.Panel'
         * @protected
         */
        className: 'Neo.container.Panel',
        /**
         * @member {String} ntype='panel'
         * @protected
         */
        ntype: 'panel',
        /**
         * @member {String[]} cls=['neo-panel', 'neo-container']
         */
        cls: ['neo-panel', 'neo-container'],
        /**
         * @member {Object} containerConfig=null
         */
        containerConfig: null,
        /**
         * @member {Object} headerDefaults=null
         */
        headerDefaults: null,
        /**
         * @member {Array} headers=null
         */
        headers: null,
        /**
         * @member {Object} items={ntype: 'vbox', align: 'stretch'}
         */
        _layout: {
            ntype: 'vbox',
            align: 'stretch'
        },
        /**
         * @member {Boolean} verticalHeadersFirst=false
         */
        verticalHeadersFirst: false
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this,
            hf = config && config.verticalHeadersFirst === true || me.verticalHeadersFirst === true;

        if (hf) {
            me.layout = {
                ntype: 'hbox',
                align: 'stretch'
            };
        }
    }

    /**
     *
     */
    createItems() {
        let me                   = this,
            hf                   = me.verticalHeadersFirst === false,
            headers              = me.headers || [],
            bottomHeaders        = headers.filter(header => {return header.dock === (hf ?'bottom': 'right')}),
            leftHeaders          = headers.filter(header => {return header.dock === (hf ?'left'  : 'top')}),
            rightHeaders         = headers.filter(header => {return header.dock === (hf ?'right' : 'bottom')}),
            topHeaders           = headers.filter(header => {return header.dock === (hf ?'top'   : 'left')}),
            hasHorizontalHeaders = bottomHeaders.length > 0 || topHeaders  .length > 0,
            hasVerticalHeaders   = leftHeaders  .length > 0 || rightHeaders.length > 0,
            items                = me.items,
            horizontalItems      = [],
            verticalItems        = [],
            config;

        if (headers.length < 1) {
            Neo.error('Panel without headers, please use a Container instead', me.id);
        }

        topHeaders.forEach(header => {
            verticalItems.push(Panel.createHeaderConfig(header));
        });

        if (hasVerticalHeaders && (hf && hasHorizontalHeaders || !hf && hasHorizontalHeaders)) {
            leftHeaders.forEach(header => {
                horizontalItems.push(Panel.createHeaderConfig(header));
            });

            config = {
                ntype       : 'container',
                flex        : 1,
                items       : items,
                itemDefaults: me.itemDefaults,
                ...me.containerConfig || {}
            };

            horizontalItems.push({...me.headerDefaults, ...config});

            rightHeaders.forEach(header => {
                horizontalItems.push(Panel.createHeaderConfig(header));
            });

            verticalItems.push({
                ntype : 'container',
                items : horizontalItems,
                layout: {
                    ntype: (hf ? 'hbox' : 'vbox'),
                    align: 'stretch'
                }
            });
        } else {
            config = {
                ntype       : 'container',
                flex        : 1,
                items       : items,
                itemDefaults: me.itemDefaults,
                ...me.containerConfig || {}
            };

            verticalItems.push({...me.headerDefaults, ...config});
        }

        bottomHeaders.forEach(header => {
            verticalItems.push(Panel.createHeaderConfig(header));
        });

        me.items = verticalItems;

        me.itemDefaults = null;

        super.createItems();
    }

    /**
     *
     * @param {Object} header the header config
     * @returns {Object}
     */
    static createHeaderConfig(header) {
        let config = {
            ntype: 'toolbar',
            flex : '0 1 auto'
        };

        if (header.text) {
            config.items = [
                {
                    ntype: 'label',
                    cls  : ['neo-panel-header-text', 'neo-label'],
                    text : header.text
                }
            ];

            delete header.text;
        }

        // assuming all labels inside a Panel Header are meant to be titles -> look the same way
        if (Neo.isArray(header.items)) {
            header.items.forEach(item => {
                if (item.ntype === 'label') {
                    item.cls = ['neo-panel-header-text', 'neo-label'];
                }
            });
        }

        return {...config, ...header};
    }
}

Neo.applyClassConfig(Panel);



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



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9Db25maWd1cmF0aW9uVmlld3BvcnQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250YWluZXIvUGFuZWwubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250YWluZXIvVmlld3BvcnQubWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUNHO0FBQ0o7QUFDSztBQUNHOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsbUVBQVE7QUFDNUMsd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsZ0NBQWdDOztBQUVwRDtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiwrREFBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsU0FBUztBQUNULG9CQUFvQixnRUFBSztBQUN6QjtBQUNBO0FBQ0EscUJBQXFCLGVBQWU7O0FBRXBDO0FBQ0Esd0JBQXdCO0FBQ3hCLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLDZCQUE2Qiw0REFBTTtBQUNuQztBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTs7QUFFYjtBQUNBLHdCQUF3QiwrREFBUztBQUNqQyx5QkFB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RUEsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDbkxBO0FBQUE7QUFBQTtBQUFtQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaURBQVM7QUFDaEMsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWJ1dHRvbi1iYXNlLWFwcH5jaHVua3MvZXhhbXBsZXMtYnV0dG9uLXNwbGl0LWFwcH5jaHVua3MvZXhhbXBsZXMtY29tcG9uZW50LWN+YWQxYjUyYzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uICAgIGZyb20gJy4uL3NyYy9idXR0b24vQmFzZS5tanMnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9zcmMvY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBOZW9BcnJheSAgZnJvbSAnLi4vc3JjL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCBQYW5lbCAgICAgZnJvbSAnLi4vc3JjL2NvbnRhaW5lci9QYW5lbC5tanMnO1xuaW1wb3J0IFZpZXdwb3J0ICBmcm9tICcuLi9zcmMvY29udGFpbmVyL1ZpZXdwb3J0Lm1qcyc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgZXhhbXBsZSBBcHBzIHdoaWNoIHNob3VsZCBiZSBjb25maWd1cmFibGVcbiAqIEBjbGFzcyBOZW8uZXhhbXBsZXMuQ29uZmlndXJhdGlvblZpZXdwb3J0XG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLlZpZXdwb3J0XG4gKiBAYWJzdHJhY3RcbiAqL1xuY2xhc3MgQ29uZmlndXJhdGlvblZpZXdwb3J0IGV4dGVuZHMgVmlld3BvcnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmV4YW1wbGVzLkNvbmZpZ3VyYXRpb25Db250YWluZXInLFxuICAgICAgICBudHlwZSAgICA6ICdjb25maWd1cmF0aW9uLXZpZXdwb3J0JyxcblxuICAgICAgICBhdXRvTW91bnQ6IHRydWUsXG4gICAgICAgIGxheW91dCAgIDoge250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGNvbmZpZ0l0ZW1MYWJlbFdpZHRoPTE1MFxuICAgICAgICAgKi9cbiAgICAgICAgY29uZmlnSXRlbUxhYmVsV2lkdGg6IDE1MCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gY29uZmlnSXRlbVdpZHRoPTI3MFxuICAgICAgICAgKi9cbiAgICAgICAgY29uZmlnSXRlbVdpZHRoOiAyNzAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGNvbmZpZ0l0ZW1XaWR0aD0yNzBcbiAgICAgICAgICovXG4gICAgICAgIGNvbmZpZ1BhbmVsRmxleDogMSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb21wb25lbnQuQmFzZXxudWxsfSBleGFtcGxlQ29tcG9uZW50PW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGV4YW1wbGVDb21wb25lbnQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGV4YW1wbGVDb21wb25lbnRGbGV4PTFcbiAgICAgICAgICovXG4gICAgICAgIGV4YW1wbGVDb21wb25lbnRGbGV4OiAyXG4gICAgfX1cblxuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuZXhhbXBsZUNvbXBvbmVudCAgICAgICAgPSBtZS5jcmVhdGVFeGFtcGxlQ29tcG9uZW50KCk7XG4gICAgICAgIG1lLmNvbmZpZ3VyYXRpb25Db21wb25lbnRzID0gbWUuY3JlYXRlQ29uZmlndXJhdGlvbkNvbXBvbmVudHMoKSB8fCBbXTtcbiAgICAgICAgXG4gICAgICAgIG1lLml0ZW1zID0gW3tcbiAgICAgICAgICAgIG1vZHVsZTogQ29udGFpbmVyLFxuICAgICAgICAgICAgaXRlbXMgOiBbbWUuZXhhbXBsZUNvbXBvbmVudF0sXG4gICAgICAgICAgICBmbGV4ICA6IG1lLmV4YW1wbGVDb21wb25lbnRGbGV4LFxuICAgICAgICAgICAgbGF5b3V0OiAnYmFzZScsXG4gICAgICAgICAgICBzdHlsZSA6IHtwYWRkaW5nOiAnMjBweCd9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZTogUGFuZWwsXG4gICAgICAgICAgICBjbHMgICA6IFsnbmVvLXBhbmVsJywgJ25lby1jb250YWluZXInLCAnbmVvLWNvbmZpZ3VyYXRpb24tcGFuZWwnXSxcbiAgICAgICAgICAgIGZsZXggIDogbWUuY29uZmlnUGFuZWxGbGV4LFxuICAgICAgICAgICAgc3R5bGUgOiB7bWFyZ2luOiAnMjBweCd9LFxuXG4gICAgICAgICAgICBjb250YWluZXJDb25maWc6IHtcbiAgICAgICAgICAgICAgICBzdHlsZToge292ZXJmbG93WTogJ3Njcm9sbCd9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBoZWFkZXJzOiBbe1xuICAgICAgICAgICAgICAgIGRvY2sgOiAndG9wJyxcbiAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgbnR5cGU6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgOiAnQ29uZmlndXJhdGlvbidcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgICAgICAgICAgZmxleCA6IDFcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZSA6IEJ1dHRvbixcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogbWUub25Td2l0Y2hUaGVtZS5iaW5kKG1lKSxcbiAgICAgICAgICAgICAgICAgICAgaWQgICAgIDogbWUuaWQgKyAnX18nICsgJ3N3aXRjaFRoZW1lQnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ1RoZW1lIERhcmsnXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dLFxuXG4gICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICBtb2R1bGU6IENvbnRhaW5lcixcbiAgICAgICAgICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ3Zib3gnfSxcbiAgICAgICAgICAgICAgICBzdHlsZSA6IHtwYWRkaW5nOiAnMTBweCd9LFxuICAgICAgICAgICAgICAgIGNscyAgIDogWyduZW8tY29uZmlndXJhdGlvbi1wYW5lbC1ib2R5J10sXG4gICAgICAgICAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVG9PcmlnaW5hbFZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbFdpZHRoICAgICAgICAgIDogbWUuY29uZmlnSXRlbUxhYmVsV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoICAgICAgICAgICAgICAgOiBtZS5jb25maWdJdGVtV2lkdGhcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgaXRlbXM6IFsuLi5tZS5jb25maWd1cmF0aW9uQ29tcG9uZW50cywge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGUgOiBCdXR0b24sXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IG1lLm9uU3dpdGNoVGhlbWUuYmluZChtZSwgJ2NtcCcpLFxuICAgICAgICAgICAgICAgICAgICBpZCAgICAgOiBtZS5pZCArICdfY21wXycgKyAnc3dpdGNoVGhlbWVCdXR0b24nLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZSAgOiB7bWFyZ2luVG9wOiAnMjBweCd9LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnVGhlbWUgRGFyaycsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoICA6IDEwMFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlIDogQnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAoKCkgPT4ge2NvbnNvbGUubG9nKG1lLmV4YW1wbGVDb21wb25lbnQpO30pLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnTG9nIEluc3RhbmNlJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggIDogMTAwXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1dO1xuXG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBjcmVhdGUgdGhlIGNvbXBvbmVudHMgdG8gc2hvdyBpbnNpZGUgdGhlIGNvbmZpZ3VyYXRpb24gY29udGFpbmVyXG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZVtdfG51bGx9XG4gICAgICovXG4gICAgY3JlYXRlQ29uZmlndXJhdGlvbkNvbXBvbmVudHMoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGNyZWF0ZSB0aGUgY29tcG9uZW50IHRvIHNob3cgaW5zaWRlIHRoZSBjdXJyZW50IGV4YW1wbGVcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlfG51bGx9XG4gICAgICovXG4gICAgY3JlYXRlRXhhbXBsZUNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKi9cbiAgICBvbkNvbmZpZ0NoYW5nZShjb25maWcsIG9wdHMpIHtcbiAgICAgICAgdGhpcy5leGFtcGxlQ29tcG9uZW50W2NvbmZpZ10gPSBvcHRzLnZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICovXG4gICAgb25SYWRpb0NoYW5nZShjb25maWcsIHZhbHVlLCBvcHRzKSB7XG4gICAgICAgIGlmIChvcHRzLnZhbHVlID09PSB0cnVlKSB7IC8vIHdlIG9ubHkgd2FudCB0byBsaXN0ZW4gdG8gY2hlY2sgZXZlbnRzLCBub3QgdW5jaGVja1xuICAgICAgICAgICAgdGhpcy5leGFtcGxlQ29tcG9uZW50W2NvbmZpZ10gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRhcmdldFxuICAgICAqL1xuICAgIG9uU3dpdGNoVGhlbWUodGFyZ2V0KSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYnV0dG9uID0gTmVvLmdldENvbXBvbmVudChtZS5pZCArICh0YXJnZXQgIT09ICdjbXAnID8gJ19fJyA6ICdfY21wXycpICsgJ3N3aXRjaFRoZW1lQnV0dG9uJyksXG4gICAgICAgICAgICBjbHMgICAgPSB0YXJnZXQgPT09ICdjbXAnID8gbWUuZXhhbXBsZUNvbXBvbmVudC5jbHMgOiBtZS5jbHM7XG5cbiAgICAgICAgaWYgKGJ1dHRvbi50ZXh0ID09PSAnVGhlbWUgTGlnaHQnKSB7XG4gICAgICAgICAgICBidXR0b24udGV4dCA9ICdUaGVtZSBEYXJrJztcbiAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsICduZW8tdGhlbWUtZGFyaycpO1xuICAgICAgICAgICAgTmVvQXJyYXkuYWRkKGNscywgJ25lby10aGVtZS1saWdodCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnV0dG9uLnRleHQgPSAnVGhlbWUgTGlnaHQnO1xuICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgJ25lby10aGVtZS1saWdodCcpO1xuICAgICAgICAgICAgTmVvQXJyYXkuYWRkKGNscywgJ25lby10aGVtZS1kYXJrJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0ID09PSAnY21wJykge1xuICAgICAgICAgICAgbWUuZXhhbXBsZUNvbXBvbmVudC5jbHMgPSBjbHM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5jbHMgPSBjbHM7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENvbmZpZ3VyYXRpb25WaWV3cG9ydCk7XG5cbmV4cG9ydCB7Q29uZmlndXJhdGlvblZpZXdwb3J0IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb250YWluZXIgZnJvbSAnLi9CYXNlLm1qcyc7XG5pbXBvcnQgVG9vbGJhciAgIGZyb20gJy4vVG9vbGJhci5tanMnO1xuXG4vKipcbiAqIEFuIGV4dGVuZGVkIENvbnRhaW5lciBzdXBwb3J0aW5nIG11bHRpcGxlIGRvY2tlZCBoZWFkZXIgdG9vbGJhcnNcbiAqIEBjbGFzcyBOZW8uY29udGFpbmVyLlBhbmVsXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgUGFuZWwgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29udGFpbmVyLlBhbmVsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29udGFpbmVyLlBhbmVsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3BhbmVsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3BhbmVsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tcGFuZWwnLCAnbmVvLWNvbnRhaW5lciddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLXBhbmVsJywgJ25lby1jb250YWluZXInXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gY29udGFpbmVyQ29uZmlnPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGNvbnRhaW5lckNvbmZpZzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gaGVhZGVyRGVmYXVsdHM9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaGVhZGVyRGVmYXVsdHM6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gaGVhZGVycz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBoZWFkZXJzOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBpdGVtcz17bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICAgICAgICovXG4gICAgICAgIF9sYXlvdXQ6IHtcbiAgICAgICAgICAgIG50eXBlOiAndmJveCcsXG4gICAgICAgICAgICBhbGlnbjogJ3N0cmV0Y2gnXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSB2ZXJ0aWNhbEhlYWRlcnNGaXJzdD1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgdmVydGljYWxIZWFkZXJzRmlyc3Q6IGZhbHNlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBoZiA9IGNvbmZpZyAmJiBjb25maWcudmVydGljYWxIZWFkZXJzRmlyc3QgPT09IHRydWUgfHwgbWUudmVydGljYWxIZWFkZXJzRmlyc3QgPT09IHRydWU7XG5cbiAgICAgICAgaWYgKGhmKSB7XG4gICAgICAgICAgICBtZS5sYXlvdXQgPSB7XG4gICAgICAgICAgICAgICAgbnR5cGU6ICdoYm94JyxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ3N0cmV0Y2gnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGhmICAgICAgICAgICAgICAgICAgID0gbWUudmVydGljYWxIZWFkZXJzRmlyc3QgPT09IGZhbHNlLFxuICAgICAgICAgICAgaGVhZGVycyAgICAgICAgICAgICAgPSBtZS5oZWFkZXJzIHx8IFtdLFxuICAgICAgICAgICAgYm90dG9tSGVhZGVycyAgICAgICAgPSBoZWFkZXJzLmZpbHRlcihoZWFkZXIgPT4ge3JldHVybiBoZWFkZXIuZG9jayA9PT0gKGhmID8nYm90dG9tJzogJ3JpZ2h0Jyl9KSxcbiAgICAgICAgICAgIGxlZnRIZWFkZXJzICAgICAgICAgID0gaGVhZGVycy5maWx0ZXIoaGVhZGVyID0+IHtyZXR1cm4gaGVhZGVyLmRvY2sgPT09IChoZiA/J2xlZnQnICA6ICd0b3AnKX0pLFxuICAgICAgICAgICAgcmlnaHRIZWFkZXJzICAgICAgICAgPSBoZWFkZXJzLmZpbHRlcihoZWFkZXIgPT4ge3JldHVybiBoZWFkZXIuZG9jayA9PT0gKGhmID8ncmlnaHQnIDogJ2JvdHRvbScpfSksXG4gICAgICAgICAgICB0b3BIZWFkZXJzICAgICAgICAgICA9IGhlYWRlcnMuZmlsdGVyKGhlYWRlciA9PiB7cmV0dXJuIGhlYWRlci5kb2NrID09PSAoaGYgPyd0b3AnICAgOiAnbGVmdCcpfSksXG4gICAgICAgICAgICBoYXNIb3Jpem9udGFsSGVhZGVycyA9IGJvdHRvbUhlYWRlcnMubGVuZ3RoID4gMCB8fCB0b3BIZWFkZXJzICAubGVuZ3RoID4gMCxcbiAgICAgICAgICAgIGhhc1ZlcnRpY2FsSGVhZGVycyAgID0gbGVmdEhlYWRlcnMgIC5sZW5ndGggPiAwIHx8IHJpZ2h0SGVhZGVycy5sZW5ndGggPiAwLFxuICAgICAgICAgICAgaXRlbXMgICAgICAgICAgICAgICAgPSBtZS5pdGVtcyxcbiAgICAgICAgICAgIGhvcml6b250YWxJdGVtcyAgICAgID0gW10sXG4gICAgICAgICAgICB2ZXJ0aWNhbEl0ZW1zICAgICAgICA9IFtdLFxuICAgICAgICAgICAgY29uZmlnO1xuXG4gICAgICAgIGlmIChoZWFkZXJzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIE5lby5lcnJvcignUGFuZWwgd2l0aG91dCBoZWFkZXJzLCBwbGVhc2UgdXNlIGEgQ29udGFpbmVyIGluc3RlYWQnLCBtZS5pZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0b3BIZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcbiAgICAgICAgICAgIHZlcnRpY2FsSXRlbXMucHVzaChQYW5lbC5jcmVhdGVIZWFkZXJDb25maWcoaGVhZGVyKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChoYXNWZXJ0aWNhbEhlYWRlcnMgJiYgKGhmICYmIGhhc0hvcml6b250YWxIZWFkZXJzIHx8ICFoZiAmJiBoYXNIb3Jpem9udGFsSGVhZGVycykpIHtcbiAgICAgICAgICAgIGxlZnRIZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsSXRlbXMucHVzaChQYW5lbC5jcmVhdGVIZWFkZXJDb25maWcoaGVhZGVyKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIG50eXBlICAgICAgIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgZmxleCAgICAgICAgOiAxLFxuICAgICAgICAgICAgICAgIGl0ZW1zICAgICAgIDogaXRlbXMsXG4gICAgICAgICAgICAgICAgaXRlbURlZmF1bHRzOiBtZS5pdGVtRGVmYXVsdHMsXG4gICAgICAgICAgICAgICAgLi4ubWUuY29udGFpbmVyQ29uZmlnIHx8IHt9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBob3Jpem9udGFsSXRlbXMucHVzaCh7Li4ubWUuaGVhZGVyRGVmYXVsdHMsIC4uLmNvbmZpZ30pO1xuXG4gICAgICAgICAgICByaWdodEhlYWRlcnMuZm9yRWFjaChoZWFkZXIgPT4ge1xuICAgICAgICAgICAgICAgIGhvcml6b250YWxJdGVtcy5wdXNoKFBhbmVsLmNyZWF0ZUhlYWRlckNvbmZpZyhoZWFkZXIpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2ZXJ0aWNhbEl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICAgIG50eXBlIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgaXRlbXMgOiBob3Jpem9udGFsSXRlbXMsXG4gICAgICAgICAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlOiAoaGYgPyAnaGJveCcgOiAndmJveCcpLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ3N0cmV0Y2gnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgbnR5cGUgICAgICAgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICBmbGV4ICAgICAgICA6IDEsXG4gICAgICAgICAgICAgICAgaXRlbXMgICAgICAgOiBpdGVtcyxcbiAgICAgICAgICAgICAgICBpdGVtRGVmYXVsdHM6IG1lLml0ZW1EZWZhdWx0cyxcbiAgICAgICAgICAgICAgICAuLi5tZS5jb250YWluZXJDb25maWcgfHwge31cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZlcnRpY2FsSXRlbXMucHVzaCh7Li4ubWUuaGVhZGVyRGVmYXVsdHMsIC4uLmNvbmZpZ30pO1xuICAgICAgICB9XG5cbiAgICAgICAgYm90dG9tSGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XG4gICAgICAgICAgICB2ZXJ0aWNhbEl0ZW1zLnB1c2goUGFuZWwuY3JlYXRlSGVhZGVyQ29uZmlnKGhlYWRlcikpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZS5pdGVtcyA9IHZlcnRpY2FsSXRlbXM7XG5cbiAgICAgICAgbWUuaXRlbURlZmF1bHRzID0gbnVsbDtcblxuICAgICAgICBzdXBlci5jcmVhdGVJdGVtcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGhlYWRlciB0aGUgaGVhZGVyIGNvbmZpZ1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZUhlYWRlckNvbmZpZyhoZWFkZXIpIHtcbiAgICAgICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG50eXBlOiAndG9vbGJhcicsXG4gICAgICAgICAgICBmbGV4IDogJzAgMSBhdXRvJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChoZWFkZXIudGV4dCkge1xuICAgICAgICAgICAgY29uZmlnLml0ZW1zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGU6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgIGNscyAgOiBbJ25lby1wYW5lbC1oZWFkZXItdGV4dCcsICduZW8tbGFiZWwnXSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA6IGhlYWRlci50ZXh0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgZGVsZXRlIGhlYWRlci50ZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXNzdW1pbmcgYWxsIGxhYmVscyBpbnNpZGUgYSBQYW5lbCBIZWFkZXIgYXJlIG1lYW50IHRvIGJlIHRpdGxlcyAtPiBsb29rIHRoZSBzYW1lIHdheVxuICAgICAgICBpZiAoTmVvLmlzQXJyYXkoaGVhZGVyLml0ZW1zKSkge1xuICAgICAgICAgICAgaGVhZGVyLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ubnR5cGUgPT09ICdsYWJlbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbHMgPSBbJ25lby1wYW5lbC1oZWFkZXItdGV4dCcsICduZW8tbGFiZWwnXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7Li4uY29uZmlnLCAuLi5oZWFkZXJ9O1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoUGFuZWwpO1xuXG5leHBvcnQge1BhbmVsIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb250YWluZXIgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb250YWluZXIuVmlld3BvcnRcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBWaWV3cG9ydCBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb250YWluZXIuVmlld3BvcnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb250YWluZXIuVmlld3BvcnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndmlld3BvcnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAndmlld3BvcnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogdHJ1ZSBhcHBsaWVzICduZW8tYm9keS12aWV3cG9ydCcgdG8gdGhlIGRvY3VtZW50LmJvZHlcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXBwbHlCb2R5Q2xzPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGFwcGx5Qm9keUNsczogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tdmlld3BvcnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby12aWV3cG9ydCddXG4gICAgfX1cblxuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBpZiAodGhpcy5hcHBseUJvZHlDbHMpIHtcbiAgICAgICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5hcHBseUJvZHlDbHMoe1xuICAgICAgICAgICAgICAgIGFwcE5hbWU6IHRoaXMuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBjbHMgICAgOiBbJ25lby1ib2R5LXZpZXdwb3J0J11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhWaWV3cG9ydCk7XG5cbmV4cG9ydCB7Vmlld3BvcnQgYXMgZGVmYXVsdH07Il0sInNvdXJjZVJvb3QiOiIifQ==