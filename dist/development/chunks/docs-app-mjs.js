self["webpackChunk"](["chunks/docs-app-mjs"],{

/***/ "./docs/app.mjs":
/*!**********************!*\
  !*** ./docs/app.mjs ***!
  \**********************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _app_view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/view/MainContainer.mjs */ "./docs/app/view/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'docs/',
    mainView: _app_view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'Docs'
});



/***/ }),

/***/ "./docs/app/view/ApiTreeList.mjs":
/*!***************************************!*\
  !*** ./docs/app/view/ApiTreeList.mjs ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ApiTreeList; });
/* harmony import */ var _node_modules_neo_mjs_src_list_TreeList_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/list/TreeList.mjs */ "./node_modules/neo.mjs/src/list/TreeList.mjs");


/**
 * @class Docs.app.view.ApiTreeList
 * @extends Neo.list.TreeList
 */
class ApiTreeList extends _node_modules_neo_mjs_src_list_TreeList_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.view.ApiTreeList'
         * @protected
         */
        className: 'Docs.app.view.ApiTreeList',
        /**
         * @member {String} ntype='api-treelist'
         * @protected
         */
        ntype: 'api-treelist'
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        Neo.Xhr.promiseJson({
            url: '../../docs/output/structure.json'
        }).then(data => {
            let vdom     = me.vdom,
                itemRoot = me.getListItemsRoot();

            me.store.items = data.json;
            itemRoot = me.createItems(null, itemRoot, 0);

            me.vdom = vdom;
        });
    }
}

Neo.applyClassConfig(ApiTreeList);



/***/ }),

/***/ "./docs/app/view/ContentTabContainer.mjs":
/*!***********************************************!*\
  !*** ./docs/app/view/ContentTabContainer.mjs ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentTabContainer; });
/* harmony import */ var _node_modules_neo_mjs_src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/tab/Container.mjs */ "./node_modules/neo.mjs/src/tab/Container.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_tab_header_Button_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/tab/header/Button.mjs */ "./node_modules/neo.mjs/src/tab/header/Button.mjs");



/**
 * @class Docs.app.view.ContentTabContainer
 * @extends Neo.tab.Container
 */
class ContentTabContainer extends _node_modules_neo_mjs_src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.view.ContentTabContainer'
         * @protected
         */
        className: 'Docs.app.view.ContentTabContainer',
        /**
         * @member {String} ntype='docs-content-tabcontainer'
         * @protected
         */
        ntype: 'docs-content-tabcontainer',
        /**
         * @member {Boolean} activateInsertedTabs=true
         */
        activateInsertedTabs: true,
        /**
         * @member {Object} contentContainerDefaults={cls:[//...]}
         */
        contentContainerDefaults: {
            cls: [
                'neo-docs-tab-content-container',
                'neo-tab-content-container',
                'neo-container'
            ]
        },
        /**
         * @member {Object} headerToolbarDefaults={cls:[//...]}
         */
        headerToolbarDefaults: {
            cls: [
                'docs-tab-header-toolbar',
                'neo-tab-header-toolbar',
                'neo-toolbar'
            ]
        },
        /**
         * @member {Array} items=[//...]]
         */
        items: [{
            ntype: 'component',
            html : 'Welcome to the neo.mjs docs!',
            style: {padding: '20px'},

            tabButtonConfig: {
                iconCls: 'fa fa-users',
                text   : 'Welcome!'
            }
        }]
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me  = this,
            cls = me.cls;

        cls.unshift('docs-content-tabcontainer');
        me.cls = cls;
    }

    /**
     * Overriding the button click listener to allow closing tabs on icon click
     * @param {Object} config
     * @param {Number} index
     * @returns {Object} The merged config
     * @protected
     * @override
     */
    getTabButtonConfig(config, index) {
        let me = this,
            defaultConfig = {
                module : _node_modules_neo_mjs_src_tab_header_Button_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
                flex   : 'none',
                index  : index,
                pressed: me.activeIndex === index,

                domListeners: {
                    click: {
                        fn: function (data) {
                            let path = data.path.map(e => e.id);

                            if (path[0].indexOf('neo-tab-header-button-') === 0) {
                                me.activeIndex = Neo.getComponent(data.target.id).index;
                            } else {
                                me.removeAt(Neo.getComponent(me.tabBarId).indexOf(path[1]))
                            }
                        },
                        scope: me
                    }
                }
            };

        return {...defaultConfig, ...config};
    }
}

Neo.applyClassConfig(ContentTabContainer);



/***/ }),

/***/ "./docs/app/view/ExamplesTreeList.mjs":
/*!********************************************!*\
  !*** ./docs/app/view/ExamplesTreeList.mjs ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExamplesTreeList; });
/* harmony import */ var _node_modules_neo_mjs_src_list_TreeList_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/list/TreeList.mjs */ "./node_modules/neo.mjs/src/list/TreeList.mjs");


/**
 * @class Docs.app.view.ExamplesTreeList
 * @extends Neo.list.TreeList
 */
class ExamplesTreeList extends _node_modules_neo_mjs_src_list_TreeList_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.view.ExamplesTreeList'
         * @protected
         */
        className: 'Docs.app.view.ExamplesTreeList',
        /**
         * @member {String} ntype='examples-treelist'
         * @protected
         */
        ntype: 'examples-treelist',
        /**
         * @member {String[]} cls=['docs-examples-treelist', 'neo-tree-list', 'neo-list-container', 'neo-list']
         */
        cls: [
            'docs-examples-treelist',
            'neo-tree-list',
            'neo-list-container',
            'neo-list'
        ]
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        Neo.Xhr.promiseJson({
            url: '../../docs/examples.json'
        }).then(data => {
            let vdom     = me.vdom,
                itemRoot = me.getListItemsRoot();

            me.store.items = data.json;
            itemRoot = me.createItems(null, itemRoot, 0);

            me.vdom = vdom;
        });
    }
}

Neo.applyClassConfig(ExamplesTreeList);



/***/ }),

/***/ "./docs/app/view/HeaderContainer.mjs":
/*!*******************************************!*\
  !*** ./docs/app/view/HeaderContainer.mjs ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderContainer; });
/* harmony import */ var _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/button/Base.mjs */ "./node_modules/neo.mjs/src/button/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_form_field_Search_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/form/field/Search.mjs */ "./node_modules/neo.mjs/src/form/field/Search.mjs");




/**
 * @class Docs.app.view.HeaderContainer
 * @extends Neo.container.Base
 */
class HeaderContainer extends _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.view.HeaderContainer'
         * @protected
         */
        className: 'Docs.app.view.HeaderContainer',
        /**
         * @member {String} ntype='header-container'
         * @protected
         */
        ntype: 'neo-docs-header-container',
        /**
         * @member {String[]} cls=['neo-docs-header-container']
         */
        cls: ['neo-docs-header-container'],
        /**
         * @member {Number} height=55
         */
        height: 55,
        /**
         * @member {Object} layout={ntype: 'hbox', align: 'stretch'}
         */
        layout: {ntype: 'hbox', align: 'stretch'},
        /**
         * @member {Array} items=[//...]
         */
        items: [{
            module         : _node_modules_neo_mjs_src_form_field_Search_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            listeners      : {change: 'onNavigationSearchFieldChange'},
            placeholderText: 'Filter Navigation',
            style          : {padding: '10px'},
            width          : 240
        }, {
            module      : _node_modules_neo_mjs_src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            domListeners: {click: 'onSwitchThemeButtonClick'},
            flex        : 'none',
            height      : 27,
            reference   : 'theme-button',
            style       : {marginTop: '5px'},
            text        : 'Theme Dark'
        }, {
            module      : _node_modules_neo_mjs_src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            domListeners: {click: 'onSwitchSourceViewThemeButtonClick'},
            flex        : 'none',
            height      : 27,
            reference   : 'source-view-theme-button',
            style       : {marginLeft: '10px', marginTop: '5px'},
            text        : 'Source View Theme Dark'
        }, {
            ntype: 'component',
            flex : 1
        }, {
            ntype: 'component',
            cls  : ['neo-logo-text'],
            html : 'neo.mjs docs',
            width: 210
        }]
    }}
}

Neo.applyClassConfig(HeaderContainer);



/***/ }),

/***/ "./docs/app/view/MainContainer.mjs":
/*!*****************************************!*\
  !*** ./docs/app/view/MainContainer.mjs ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _ApiTreeList_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiTreeList.mjs */ "./docs/app/view/ApiTreeList.mjs");
/* harmony import */ var _classdetails_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classdetails/MainContainer.mjs */ "./docs/app/view/classdetails/MainContainer.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_collection_Base_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/collection/Base.mjs */ "./node_modules/neo.mjs/src/collection/Base.mjs");
/* harmony import */ var _ContentTabContainer_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContentTabContainer.mjs */ "./docs/app/view/ContentTabContainer.mjs");
/* harmony import */ var _ExamplesTreeList_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExamplesTreeList.mjs */ "./docs/app/view/ExamplesTreeList.mjs");
/* harmony import */ var _HeaderContainer_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderContainer.mjs */ "./docs/app/view/HeaderContainer.mjs");
/* harmony import */ var _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MainContainerController.mjs */ "./docs/app/view/MainContainerController.mjs");
/* harmony import */ var _classdetails_SourceViewComponent_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./classdetails/SourceViewComponent.mjs */ "./docs/app/view/classdetails/SourceViewComponent.mjs");
/* harmony import */ var _classdetails_TutorialComponent_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./classdetails/TutorialComponent.mjs */ "./docs/app/view/classdetails/TutorialComponent.mjs");
/* harmony import */ var _TutorialsTreeList_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TutorialsTreeList.mjs */ "./docs/app/view/TutorialsTreeList.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");












/**
 * @class Docs.app.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_10__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.view.MainContainer'
         * @protected
         */
        className: 'Docs.app.view.MainContainer',
        /**
         * @member {String} ntype='main-container'
         * @protected
         */
        ntype: 'main-container',
        /**
         * @member {Boolean} autoMount=true
         */
        autoMount : true,
        /**
         * @member {String[]} cls=['neo-docs-maincontainer', 'neo-viewport']
         */
        cls: ['neo-docs-maincontainer', 'neo-viewport'],
        /**
         * @member {Neo.controller.Component} controller=MainContainerController
         */
        controller: _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_6__["default"],
        /**
         * @member {Object} layout={ntype: 'vbox', align: 'stretch'}
         */
        layout: {ntype: 'vbox', align: 'stretch'},
        /**
         * @member {Neo.collection.Base|null} store_=null
         */
        store_: null,
        /**
         * @member {Array} items=[//...]
         */
        items: [_HeaderContainer_mjs__WEBPACK_IMPORTED_MODULE_5__["default"], {
            ntype : 'container',
            flex  : 1,
            layout: {ntype: 'hbox', align: 'stretch'},

            items: [{
                ntype   : 'tab-container',
                cls     : ['neo-docs-navigation-tab-container', 'neo-tab-container'],
                minWidth: 290,
                width   : 290,

                items: [{
                    module   : _ApiTreeList_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
                    listeners: {leafItemClick: 'onApiListLeafClick'},
                    reference: 'api-treelist',

                    tabButtonConfig: {
                        iconCls: 'fa fa-code',
                        text   : 'API'
                    }
                }, {
                    module   : _TutorialsTreeList_mjs__WEBPACK_IMPORTED_MODULE_9__["default"],
                    listeners: {leafItemClick: 'onTutorialListLeafClick'},
                    reference: 'tutorials-treelist',

                    tabButtonConfig: {
                        iconCls: 'fa fa-hands-helping',
                        text   : 'Tutorials'
                    }
                }, {
                    module   : _ExamplesTreeList_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
                    listeners: {leafItemClick: 'onExamplesListLeafClick'},
                    reference: 'examples-treelist',

                    tabButtonConfig: {
                        iconCls: 'fa fa-desktop',
                        text   : 'Examples'
                    }
                }]
            }, {
                module   : _ContentTabContainer_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
                flex     : 1,
                reference: 'content-tabcontainer'
            }]
        }]
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        if (!me.store) {
            me.store = Neo.create(_node_modules_neo_mjs_src_collection_Base_mjs__WEBPACK_IMPORTED_MODULE_2__["default"], {
                keyProperty: 'id'
            });
        }

        // Disable the examples Tab for dist versions until the webpack builds can handle this (see: #140)
        me.items[1].items[0].items[2].tabButtonConfig.disabled = Neo.config.environment !== 'development';
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        Neo.Xhr.promiseJson({
            url: '../../docs/output/all.json'
        }).then(data => {
            me.store.items = data.json;
        });
    }
}

Neo.applyClassConfig(MainContainer);



/***/ }),

/***/ "./docs/app/view/MainContainerController.mjs":
/*!***************************************************!*\
  !*** ./docs/app/view/MainContainerController.mjs ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainerController; });
/* harmony import */ var _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Docs.app.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.view.MainContainerController'
         * @protected
         */
        className: 'Docs.app.view.MainContainerController',
        /**
         * @member {String} ntype='docs-maincontainer-controller'
         * @protected
         */
        ntype: 'docs-maincontainer-controller'
    }}

    /**
     *
     * @param {Object} record
     */
    onApiListLeafClick(record) {
        let me                  = this,
            contentTabContainer = me.getReference('content-tabcontainer');

        contentTabContainer.add({
            ntype        : 'classdetails-maincontainer',
            id           : record.className,
            structureData: record,

            tabButtonConfig: {
                iconCls: record.singleton ? 'fa fa-arrow-alt-circle-right' : 'fa fa-copyright',
                text   : record.name
            }
        });
    }

    /**
     *
     * @param {Object} record
     */
    onExamplesListLeafClick(record) {
        let me                  = this,
            contentTabContainer = me.getReference('content-tabcontainer'),
            name                = record.name,
            pathArray           = [],
            store               = me.getReference('examples-treelist').store,
            tmpRecord           = record,
            tabButtonConfig;

        while (tmpRecord.parentId !== null) {
            tmpRecord = store.get(tmpRecord.parentId);
            name      = tmpRecord.name + '.' + name;
        }

        name = 'examples_' + name;

        tabButtonConfig = {
            iconCls: 'fa fa-desktop',
            text   : record.name
        };

        if (!Array.isArray(record.path)) {
            import(
                /* webpackIgnore: true */
                record.path).then((module) => {
                    contentTabContainer.add({
                        ntype          : module.default.prototype.ntype,
                        id             : name,
                        tabButtonConfig: tabButtonConfig
                    });
                }
            );
        } else {
            record.path.forEach(path => {
                pathArray.push(import(/* webpackIgnore: true */ path));
            });

            Promise.all(pathArray).then(function(modules) {
                let items = [];

                modules.forEach(module => {
                    items.push({
                        ntype: module.default.prototype.ntype
                    });
                });

                contentTabContainer.add({
                    ntype          : 'container',
                    id             : name,
                    items          : items,
                    style          : {padding: '10px'},
                    tabButtonConfig: tabButtonConfig
                });
            })
        }
    }

    /**
     *
     * @param {Object} value
     * @param {Object} oldValue
     */
    onHashChange(value, oldValue) {
        let me                  = this,
            hash                = value && value.hash,
            contentTabContainer = me.getReference('content-tabcontainer'),
            structureStore      = me.getReference('api-treelist').store,
            record, tab;

        if (hash && hash.hasOwnProperty('viewSource')) {
            record = structureStore.find('className', hash.viewSource)[0];

            if (record) {
                tab = contentTabContainer.add({
                    ntype        : 'classdetails-sourceviewcomponent',
                    id           : hash.viewSource + '__source',
                    line         : hash.line,
                    structureData: record,

                    tabButtonConfig: {
                        iconCls: 'fa fa-code',
                        text   : record.name
                    }
                });

                // adjust the highlighted line for already added source view tabs
                tab.line = hash.line;
            }
        }
    }

    /**
     *
     * @param {Object} data
     */
    onNavigationSearchFieldChange(data) {
        let me    = this,
            value = data.value;

        me.getReference('examples-treelist') .filter('name', value, null);
        me.getReference('api-treelist')      .filter('name', value, null);
        me.getReference('tutorials-treelist').filter('name', value, null);
    }

    /**
     *
     */
    onSwitchSourceViewThemeButtonClick() {
        let me     = this,
            button = me.getReference('source-view-theme-button'),
            buttonText, href;

        if (button.text === 'Source View Theme Light') {
            buttonText = 'Source View Theme Dark';
            href       = './resources/highlightjs-custom-github-theme.css';
        } else {
            buttonText = 'Source View Theme Light';
            href       = './resources/highlightjs-custom-dark-theme.css';
        }

        Neo.main.addon.Stylesheet.swapStyleSheet({
            href: href,
            id  : 'hljs-theme'
        }).then(data => {
            button.text = buttonText;
        });
    }

    /**
     *
     */
    onSwitchThemeButtonClick() {
        let me     = this,
            button = me.getReference('theme-button'),
            view   = me.view,
            buttonText, cls, href, theme;

        if (button.text === 'Theme Light') {
            buttonText = 'Theme Dark';
            href       = '../dist/development/neo-theme-light-no-css-vars.css';
            theme      = 'neo-theme-light';
        } else {
            buttonText = 'Theme Light';
            href       = '../dist/development/neo-theme-dark-no-css-vars.css';
            theme      = 'neo-theme-dark';
        }

        if (Neo.config.useCssVars) {
            cls = [...view.cls];

            view.cls.forEach((item, index) => {
                if (item.includes('neo-theme')) {
                    _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, item);
                }
            });

            _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, theme);
            view.cls = cls;

            button.text = buttonText;
        } else {
            Neo.main.addon.Stylesheet.swapStyleSheet({
                href: href,
                id  : 'neo-theme'
            }).then(data => {
                button.text = buttonText;
            });
        }
    }

    /**
     *
     * @param {Object} record
     */
    onTutorialListLeafClick(record) {
        let me                  = this,
            contentTabContainer = me.getReference('content-tabcontainer');

        contentTabContainer.add({
            ntype   : 'classdetails-tutorialcomponent',
            fileName: record.fileName,
            fileType: record.type,
            id      : record.name,

            tabButtonConfig: {
                iconCls: 'fa fa-hands-helping',
                text   : record.name
            }
        });
    }
}

Neo.applyClassConfig(MainContainerController);



/***/ }),

/***/ "./docs/app/view/TutorialsTreeList.mjs":
/*!*********************************************!*\
  !*** ./docs/app/view/TutorialsTreeList.mjs ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TutorialsTreeList; });
/* harmony import */ var _node_modules_neo_mjs_src_list_TreeList_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/list/TreeList.mjs */ "./node_modules/neo.mjs/src/list/TreeList.mjs");


/**
 * @class Docs.app.view.TutorialsTreeList
 * @extends Neo.list.TreeList
 */
class TutorialsTreeList extends _node_modules_neo_mjs_src_list_TreeList_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.view.TutorialsTreeList'
         * @protected
         */
        className: 'Docs.app.view.TutorialsTreeList',
        /**
         * @member {String} ntype='tutorials-treelist'
         * @protected
         */
        ntype: 'tutorials-treelist',
        /**
         * @member {String[]} cls=['docs-tutorials-treelist', 'neo-tree-list', 'neo-list-container', 'neo-list']
         */
        cls: [
            'docs-tutorials-treelist',
            'neo-tree-list',
            'neo-list-container',
            'neo-list'
        ]
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        Neo.Xhr.promiseJson({
            url: '../../docs/tutorials/tutorials.json'
        }).then(data => {
            let vdom     = me.vdom,
                itemRoot = me.getListItemsRoot();

            me.store.items = data.json;
            itemRoot = me.createItems(null, itemRoot, 0);

            me.vdom = vdom;
        });
    }
}

Neo.applyClassConfig(TutorialsTreeList);



/***/ }),

/***/ "./docs/app/view/classdetails/HeaderComponent.mjs":
/*!********************************************************!*\
  !*** ./docs/app/view/classdetails/HeaderComponent.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderComponent; });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _SourceViewComponent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SourceViewComponent.mjs */ "./docs/app/view/classdetails/SourceViewComponent.mjs");



/**
 * @class Docs.app.view.classdetails.HeaderComponent
 * @extends Neo.component.Base
 */
class HeaderComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.view.classdetails.HeaderComponent'
         * @protected
         */
        className: 'Docs.app.view.classdetails.HeaderComponent',
        /**
         * @member {String} ntype='classdetails-headercomponent'
         * @protected
         */
        ntype: 'classdetails-headercomponent',
        /**
         * @member {String[]} cls=['neo-docs-classdetails-headercomponent']
         */
        cls: ['neo-docs-classdetails-headercomponent'],
        /**
         * @member {Object|null} record_=null
         */
        record_: null,
        /**
         * @member {Object} domListeners
         */
        domListeners: {
            click: {
                fn      : 'onHeaderClick', // Docs.app.view.MainContainerController
                delegate: '.neo-docs-header-text'
            }
        },
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            cn: [{
                tag: 'span',
                cls: ['neo-docs-header-text']
            }]
        }
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me         = this,
            vdom      = me.vdom,
            className = me.record.className,
            store     = me.up('main-container').store,
            record    = store.find({$kind: className === 'Neo' ? 'module' : 'class', neoClassName: className})[0],
            i         = 0,
            len       = record && record.tags && record.tags.length || 0,
            singleton = false;

        for (; i < len; i++) {
            if (record.tags[i].title === 'singleton') {
                singleton = true;
                break;
            }
        }

        vdom.cn[0].innerHTML = singleton ? (className + ' → Singleton') : className;

        if (record.description) {
            vdom.cn.push({
                cls      : ['neo-docs-header-description'],
                innerHTML: record.description
            });
        }

        me.vdom = vdom;
    }
}

Neo.applyClassConfig(HeaderComponent);



/***/ }),

/***/ "./docs/app/view/classdetails/HierarchyTreeList.mjs":
/*!**********************************************************!*\
  !*** ./docs/app/view/classdetails/HierarchyTreeList.mjs ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HierarchyTreeList; });
/* harmony import */ var _node_modules_neo_mjs_src_list_TreeList_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/list/TreeList.mjs */ "./node_modules/neo.mjs/src/list/TreeList.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Docs.app.view.classdetails.HierarchyTreeList
 * @extends Neo.list.TreeList
 */
class HierarchyTreeList extends _node_modules_neo_mjs_src_list_TreeList_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.view.classdetails.HierarchyTreeList'
         * @protected
         */
        className: 'Docs.app.view.classdetails.HierarchyTreeList',
        /**
         * @member {String} ntype='classdetails-treelist'
         * @protected
         */
        ntype: 'classhierarchy-treelist',
        /**
         * @member {String[]} cls=['docs-classhierarchy-treelist', 'neo-list-container', 'neo-list']
         */
        cls: [
            'docs-classhierarchy-treelist',
            'neo-list-container',
            'neo-tree-list',
            'neo-list'
        ],
        /**
         * @member {Boolean} showCollapseExpandAllIcons=false
         */
        showCollapseExpandAllIcons: false,
        /**
         * @member {Object|null} structureData=null
         */
        structureData: null
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        me.createStoreItems();
        me.createItems(null, me.getListItemsRoot(), 0);
    }

    /**
     *
     */
    createStoreItems() {
        let me            = this,
            className     = me.structureData.className,
            mainContainer = me.up('main-container'),
            mainStore     = mainContainer.store,
            storeItems    = [],
            tmpItems      = [],
            item, parentId;

        item = mainStore.find({
            $kind       : className === 'Neo' ? 'module' : 'class',
            neoClassName: me.structureData.className
        })[0];

        tmpItems.unshift(item);

        while (item && item.hasOwnProperty('augments')) {
            item = mainStore.find({
                $kind       : 'class',
                neoClassName: item.augments[0]
            })[0];

            tmpItems.unshift(item);
        }

        tmpItems.forEach((key, index) => {
            if (key) {
                parentId = tmpItems[index - 1] ? tmpItems[index - 1].id : null;

                storeItems.push({
                    checked : true,
                    id      : key.id,
                    isLeaf  : true,
                    name    : key.neoClassName,
                    parentId: parentId
                });
            }
        });

        me.store.items = storeItems;
    }

    /**
     *
     * @param {Object} record
     */
    onLeafItemClick(record) {
        let me       = this,
            vnodeId  = me.getItemId(record.id),
            vdom     = me.vdom,
            vdomNode = me.getVdomChild(vnodeId);

        _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"][record.checked ? 'add' : 'remove'](vdomNode.cls, 'unchecked');

        record.checked = !record.checked;

        me.vdom = vdom;

        me.fire('refreshClassMembers');
    }
}

Neo.applyClassConfig(HierarchyTreeList);



/***/ }),

/***/ "./docs/app/view/classdetails/MainContainer.mjs":
/*!******************************************************!*\
  !*** ./docs/app/view/classdetails/MainContainer.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _HeaderComponent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderComponent.mjs */ "./docs/app/view/classdetails/HeaderComponent.mjs");
/* harmony import */ var _HierarchyTreeList_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HierarchyTreeList.mjs */ "./docs/app/view/classdetails/HierarchyTreeList.mjs");
/* harmony import */ var _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainContainerController.mjs */ "./docs/app/view/classdetails/MainContainerController.mjs");
/* harmony import */ var _MembersList_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MembersList.mjs */ "./docs/app/view/classdetails/MembersList.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/container/Panel.mjs */ "./node_modules/neo.mjs/src/container/Panel.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_form_field_Search_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/form/field/Search.mjs */ "./node_modules/neo.mjs/src/form/field/Search.mjs");








/**
 * @class Docs.app.view.classdetails.MainContainer
 * @extends Neo.container.Base
 */
class MainContainer extends _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.view.classdetails.MainContainer'
         * @protected
         */
        className: 'Docs.app.view.classdetails.MainContainer',
        /**
         * @member {String} ntype='classdetails-maincontainer'
         * @protected
         */
        ntype: 'classdetails-maincontainer',
        /**
         * @member {String[]} cls=['neo-docs-classdetails-maincontainer', 'neo-container']
         */
        cls: ['neo-docs-classdetails-maincontainer', 'neo-container'],
        /**
         * @member {Neo.controller.Component} controller=MainContainerController
         */
        controller: _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
        /**
         * @member {Object} layout={ntype: 'vbox', align: 'stretch'}
         */
        layout: {ntype: 'vbox', align: 'stretch'},
        /**
         * @member {Object|null} structureData=null
         */
        structureData: null,
        /**
         * @member {Array} items=[//...]]
         */
        items: [{
            ntype : 'container',
            _cls  : ['neo-docs-classdetails-headercontainer'],
            flex  : '0 1 auto',
            layout: {ntype: 'hbox', align: 'stretch'},

            items: [{
                module : _node_modules_neo_mjs_src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
                cls    : ['neo-docs-classdetails-headerpanel', 'neo-panel', 'neo-container'],
                headers: [{
                    dock : 'bottom',
                    style: {borderWidth: 0},
                    items: [{
                        handler  : 'onScrollIntoView',
                        reference: 'showConfigs',
                        style    : {marginRight: '5px'},
                        text     : 'Configs'
                    }, {
                        handler  : 'onScrollIntoView',
                        reference: 'showMethods',
                        style    : {marginRight: '5px'},
                        text     : 'Methods'
                    }, {
                        handler  : 'onScrollIntoView',
                        reference: 'showEvents',
                        text     : 'Events'
                    }, {
                        ntype: 'component',
                        flex : 1
                    }, {
                        module         : _node_modules_neo_mjs_src_form_field_Search_mjs__WEBPACK_IMPORTED_MODULE_6__["default"],
                        listeners      : {change: 'onSearchFieldChange'},
                        placeholderText: 'Filter Members',
                        width          : 160,

                        style: {
                            margin     : 0,
                            marginRight: '5px',
                            paddingTop : '2px'
                        }
                    }, {
                        checked  : true,
                        handler  : 'onToggleMembers',
                        iconCls  : 'fa fa-check-square',
                        reference: 'showPrivateMembers',
                        style    : {marginRight: '5px'},
                        text     : 'Private',
                    }, {
                        checked  : true,
                        handler  : 'onToggleMembers',
                        iconCls  : 'fa fa-check-square',
                        reference: 'showProtectedMembers',
                        style    : {marginRight: '5px'},
                        text     : 'Protected',
                    }, {
                        checked  : true,
                        handler  : 'onToggleMembers',
                        iconCls  : 'fa fa-check-square',
                        reference: 'showStaticMembers',
                        text     : 'Static'
                    }]
                }],

                items: [{
                    module: _HeaderComponent_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
                    flex  : 1,
                    record: '@config:structureData'
                }]
            }, {
                module       : _HierarchyTreeList_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
                flex         : '0 0 auto',
                minWidth     : 330,
                structureData: '@config:structureData'
            }]
        }, {
            module   : _MembersList_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            flex     : 1,
            listeners: {mutateItems: 'onMutateItems'},
            reference: 'classdetails-memberslist'
        }]
    }}
}

Neo.applyClassConfig(MainContainer);



/***/ }),

/***/ "./docs/app/view/classdetails/MainContainerController.mjs":
/*!****************************************************************!*\
  !*** ./docs/app/view/classdetails/MainContainerController.mjs ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainerController; });
/* harmony import */ var _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");
/* harmony import */ var _SourceViewComponent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SourceViewComponent.mjs */ "./docs/app/view/classdetails/SourceViewComponent.mjs");



/**
 * @class Docs.app.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.view.classdetails.MainContainerController'
         * @protected
         */
        className: 'Docs.app.view.classdetails.MainContainerController',
        /**
         * @member {String} ntype='docs-classdetails-maincontainer-controller'
         * @protected
         */
        ntype: 'docs-classdetails-maincontainer-controller'
    }}

    /**
     *
     * @param {Object} data
     */
    onHeaderClick(data) {
        let me                  = this,
            record              = me.view.structureData,
            mainContainer       = me.view.up('main-container'),
            contentTabContainer = mainContainer.down('docs-content-tabcontainer'),
            className           = (record.path ? record.path + '.' : '') + record.name;

        contentTabContainer.add({
            module       : _SourceViewComponent_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            id           : className + '__source',
            structureData: record,

            tabButtonConfig: {
                iconCls: 'fa fa-code',
                text   : className
            }
        });
    }

    /**
     *
     * @param {Neo.collection.Base} store
     */
    onMutateItems(store) {
        let me              = this,
            countConfigs    = 0,
            countEvents     = 0,
            countMethods    = 0,
            countPrivates   = 0,
            countProtecteds = 0,
            countStatics    = 0;

        store.items.forEach(item => {
            if (item.kind === 'function') {
                countMethods++;
            } else if (item.kind === 'member') {
                countConfigs++;
            } else {
                countEvents++;
            }

            if (item.access === 'private') {
                countPrivates++;
            } else if (item.access === 'protected') {
                countProtecteds++;
            }

            if (item.scope === 'static') {
                countStatics++;
            }
        });

        me.getReference('showConfigs')         .text = 'Configs '   + countConfigs;
        me.getReference('showMethods')         .text = 'Methods '   + countMethods;
        me.getReference('showEvents')          .text = 'Events '    + countEvents;
        me.getReference('showPrivateMembers')  .text = 'Private '   + countPrivates;
        me.getReference('showProtectedMembers').text = 'Protected ' + countProtecteds;
        me.getReference('showStaticMembers')   .text = 'Static '    + countStatics;
    }

    /**
     *
     * @param {Object} data
     */
    onScrollIntoView(data) {
        let me     = this,
            button = Neo.getComponent(data.target.id);

        Neo.main.addon.HighlightJS.scrollIntoView({
            text   : button.reference.substr(4),
            vnodeId: me.view.vdom.id
        });
    }

    /**
     *
     * @param {Object} data
     */
    onSearchFieldChange(data) {
        this.getReference('classdetails-memberslist').filterMembersQuery = data.value;
    }

    /**
     *
     * @param {Object} data
     */
    onToggleMembers(data) {
        let button      = Neo.getComponent(data.target.id),
            membersList = this.getReference('classdetails-memberslist');

        button.iconCls = button.checked ? 'fa fa-square' : 'fa fa-check-square';
        button.checked = !button.checked;

        membersList[button.reference] = button.checked;
    }
}

Neo.applyClassConfig(MainContainerController);



/***/ }),

/***/ "./docs/app/view/classdetails/MembersList.mjs":
/*!****************************************************!*\
  !*** ./docs/app/view/classdetails/MembersList.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MembersList; });
/* harmony import */ var _node_modules_neo_mjs_src_list_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/list/Base.mjs */ "./node_modules/neo.mjs/src/list/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_collection_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/collection/Base.mjs */ "./node_modules/neo.mjs/src/collection/Base.mjs");



/**
 * @class Docs.app.view.classdetails.MembersList
 * @extends Neo.list.Base
 */
class MembersList extends _node_modules_neo_mjs_src_list_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.view.classdetails.MembersList'
         * @protected
         */
        className: 'Docs.app.view.classdetails.MembersList',
        /**
         * @member {String} ntype='classdetails-memberslist'
         * @protected
         */
        ntype: 'classdetails-memberslist',
        /**
         * @member {String[]} cls=['docs-classhierarchy-memberslist']
         */
        cls: ['docs-classhierarchy-memberslist'],
        /**
         * @member {String} filterMembersQuery_=''
         * @protected
         */
        filterMembersQuery_: '',
        /**
         * @member {Boolean} showPrivateMembers_=true
         */
        showPrivateMembers_: true,
        /**
         * @member {Boolean} showProtectedMembers_=true
         */
        showProtectedMembers_: true,
        /**
         * @member {Boolean} showStaticMembers_=true
         */
        showStaticMembers_: true,
        /**
         * @member {Neo.collection.Base} store=null
         */
        store: null,
        /**
         * @member {String|null} targetClassName=null
         */
        targetClassName: null,
        /**
         * @member {Object} _vdom={cn: []}
         */
        _vdom: {
            cn: []
        }
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me            = this,
            hierarchyView = me.up('classdetails-maincontainer').down('classhierarchy-treelist'),
            mainStore     = me.up('main-container').store;

        hierarchyView.on({
            refreshClassMembers: me.onRefreshClassMembers,
            scope              : me
        });

        me.store = Neo.create(_node_modules_neo_mjs_src_collection_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], {
            filterMode: 'advanced',
            sourceId  : mainStore.id
        });

        me.onRefreshClassMembers();
    }

    /**
     * Triggered after the filterMembersQuery config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetFilterMembersQuery(value, oldValue) {
        if (oldValue !== undefined) {
            this.onRefreshClassMembers();
        }
    }

    /**
     * Triggered after the showProtectedMembers config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetShowProtectedMembers(value, oldValue) {
        if (oldValue !== undefined) {
            this.onRefreshClassMembers();
        }
    }

    /**
     * Triggered after the showPrivateMembers config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetShowPrivateMembers(value, oldValue) {
        if (oldValue !== undefined) {
            this.onRefreshClassMembers();
        }
    }

    /**
     * Triggered after the showStaticMembers config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetShowStaticMembers(value, oldValue) {
        if (oldValue !== undefined) {
            this.onRefreshClassMembers();
        }
    }

    /**
     *
     * @param {Neo.collection.Base} store
     * @param {Object} vdom
     * @returns {Object} vdom
     */
    applyConfigsHeader(store, vdom) {
        if (store.items[0] && store.items[0].kind === 'member') {
            vdom.cn.push({
                // scrolling placeholder
            }, {
                cls      : ['neo-docs-memberlist-group-header'],
                innerHTML: 'Configs',
                'data-list-header': 'Configs'
            });
        }

        return vdom;
    }

    /**
     *
     * @param {Object} item
     * @param {Number} index
     * @param {Neo.collection.Base} store
     * @param {Object} vdom
     * @returns {Object} vdom
     */
    applyEventsHeader(item, index, store, vdom) {
        if (
            item.kind === 'event' &&
            store.items[index -1] &&
            store.items[index -1].kind !== 'event'
        ) {
            vdom.cn.push({
                // scrolling placeholder
            }, {
                cls      : ['neo-docs-memberlist-group-header'],
                innerHTML: 'Events',
                style    : {zIndex: 3},
                'data-list-header': 'Events'
            });
        }

        return vdom;
    }

    /**
     *
     * @param {Object} item
     * @param {Number} index
     * @param {Neo.collection.Base} store
     * @param {Object} vdom
     * @returns {Object} vdom
     */
    applyMethodsHeader(item, index, store, vdom) {
        if (
            item.kind === 'function' &&
            (
                !store.items[index -1] || (
                    store.items[index -1] &&
                    store.items[index -1].kind !== 'function'
                )
            )
        ) {
            vdom.cn.push({
                // scrolling placeholder
            }, {
                cls      : ['neo-docs-memberlist-group-header'],
                innerHTML: 'Methods',
                style    : {zIndex: 2},
                'data-list-header': 'Methods'
            });
        }

        return vdom;
    }

    /**
     *
     */
    createItems() {
        let me                 = this,
            filterMembersRegEx = new RegExp(me.filterMembersQuery || '', 'gi'),
            hasExamples        = false,
            targetClassName    = me.targetClassName,
            vdom               = me.vdom,
            headerText, itemAttributes, itemConfig, path;

        vdom.cn = [];
        vdom = me.applyConfigsHeader(me.store, vdom);

        me.store.items.forEach((item, index) => {
            vdom = me.applyEventsHeader( item, index, me.store, vdom);
            vdom = me.applyMethodsHeader(item, index, me.store, vdom);

            itemAttributes = [];

            if (item.name.substr(-1) === '_') {
                item.name = item.name.slice(0, -1) ;
                itemAttributes.push('GS');
            }

            if (item.neoClassName !== targetClassName) {
                itemAttributes.push('inherited');
            }

            if (item.access === 'private' || item.access === 'protected') {
                itemAttributes.push(item.access);
            }

            if (item.scope === 'static') {
                itemAttributes.push('static');
            }

            headerText = item.name;

            if (me.filterMembersQuery !== '' && me.filterMembersQuery !== null) {
                headerText = headerText.replace(filterMembersRegEx, match => `<span class="neo-highlight-search">${match}</span>`);
            }

            // configs
            if (item.type && item.type.names) {
                headerText += (': {' + MembersList.escapeHtml(item.type.names.join('|')) + '}');
            }

            if (item.hasOwnProperty('defaultvalue')) {
                headerText += (' = ' + item.defaultvalue);
            }

            // methods
            if (item.params && item.kind !== 'event') {
                headerText += ('(' + item.params.reduce((result, param) => {
                    if (param.name.indexOf('.') < 0) {
                        if (param.optional) {
                            result.push('[' + param.name + ']');
                        } else {
                            result.push(param.name);
                        }
                    }
                    return result;
                }, []).join(', ') + ')');
            }

            if (item.returns) {
                headerText += (' → {' + MembersList.escapeHtml(item.returns[0].type.names.join('|') + '}'));
            }

            path = item.meta.path;

            if (path.includes('/neo.mjs/')) {
                path = path.substr(path.indexOf('/neo.mjs/') + 9);
            } else if (path.includes('/neomjs/')) {
                path = path.substr(path.indexOf('/neomjs/')  + 8);
            } else if (path.includes('/neo/')) {
                path = path.substr(path.indexOf('/neo/')     + 5);
            }

            itemConfig = {
                cls: ['neo-list-item'],
                cn : [{
                    cls: ['neo-list-item-header-container'],
                    cn : [{
                        cls      : ['neo-list-item-header'],
                        innerHTML: headerText
                    }, {
                        style: {
                            flex: 1
                        }
                    }, {
                        cls      : ['neo-list-item-header'],
                        innerHTML: itemAttributes.join(', ')
                    }]
                }, {
                    cls: 'neo-docs-view-source-link-container',
                    cn :[{
                        tag      : 'a',
                        cls      : ['neo-docs-view-source-link'],
                        href     : '#viewSource=' + item.neoClassName + '&line=' + item.meta.lineno,
                        innerHTML: 'Source: ' + path + '/' + item.meta.filename + ' (Line ' + item.meta.lineno + ')'
                    }]
                }, {
                    innerHTML: item.description
                }]
            };

            if (item.examples && item.examples.length > 0) {
                hasExamples = true;

                item.examples.forEach(example => {
                    itemConfig.cn.push({
                        tag: 'pre',
                        cn : [{
                            tag : 'code',
                            html: example
                        }]
                    });
                });
            }

            if (item.params && item.params.length > 0) {
                itemConfig.cn.push(MembersList.createParametersTable(item.params));
            }

            if (item.returns && item.kind !== 'event') {
                itemConfig.cn.push({
                    innerHTML: 'Returns {' + MembersList.escapeHtml(item.returns[0].type.names.join('|') + '} ') + (item.returns[0].description || '')
                });
            }

            vdom.cn.push(itemConfig);
        });

        me.vdom = vdom;

        if (hasExamples) {
            setTimeout(() => {
                Neo.main.addon.HighlightJS.syntaxHighlightInit();
            }, 100);
        }
    }

    /**
     *
     * @param {Object} params
     * @returns {Object} vdom
     */
    static createParametersTable(params) {
        let hasDefaultValues  = false,
            hasOptionalParams = false,
            description, nestedParams, paramTable;

        params.forEach(param => {
            if (param.hasOwnProperty('defaultvalue')) {
                hasDefaultValues = true;
            }

            if (param.hasOwnProperty('optional')) {
                hasOptionalParams = true;
            }
        });

        paramTable = {
            tag: 'table',
            cls: 'docs-param-table',
            cn : [{
                tag: 'thead',
                cn : [{
                    tag      : 'th',
                    innerHTML: 'Name'
                }, {
                    tag      : 'th',
                    innerHTML: 'Type'
                }, {
                    tag      : 'th',
                    innerHTML: 'Description'
                }]
            }]
        };

        if (hasDefaultValues) {
            paramTable.cn[0].cn.splice(2, 0, {
                tag      : 'th',
                innerHTML: 'Default'
            });
        }

        if (hasOptionalParams) {
            paramTable.cn[0].cn.splice(2, 0, {
                tag      : 'th',
                innerHTML: 'Optional'
            });
        }

        params.forEach(param => {
            if (param.name.indexOf('.') < 0) { // ignore nested params
                description = {
                    tag      : 'td',
                    innerHTML: param.description
                };
                nestedParams = [];

                params.forEach(p => {
                    if (p.name.indexOf(param.name + '.') === 0) {
                        p = Neo.clone(p, true);

                        p.name = p.name.split('.');
                        p.name.shift();
                        p.name = p.name.join('.');

                        nestedParams.push(p);
                    }
                });

                if (nestedParams.length > 0) {
                    description = {
                        tag: 'td',
                        cn : [{
                            innerHTML: description.innerHTML
                        },
                        MembersList.createParametersTable(nestedParams)]
                    }
                }

                paramTable.cn.push({
                    tag: 'tr',
                    cn : [{
                        tag      : 'td',
                        innerHTML: param.name
                    }, {
                        tag      : 'td',
                        innerHTML: param.type ? MembersList.escapeHtml(param.type.names.join(' | ')) : ''
                    },
                    description]
                });

                if (hasDefaultValues) {
                    paramTable.cn[paramTable.cn.length - 1].cn.splice(2, 0, {
                        tag      : 'td',
                        innerHTML: param.defaultvalue === undefined ? '' : (param.defaultvalue + '')
                    });
                }

                if (hasOptionalParams) {
                    paramTable.cn[paramTable.cn.length - 1].cn.splice(2, 0, {
                        tag      : 'td',
                        innerHTML: param.optional
                    });
                }
            }
        });

        return paramTable;
    }

    /**
     * Replaces '<' & '>'
     * @param {String} value
     * @returns {String}
     */
    static escapeHtml(value) {
        return value.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    /**
     *
     */
    filterAndSortItems() {
        let me             = this,
            hierarchyMap   = {},
            hierarchyStore = me.up('classdetails-maincontainer').down('classhierarchy-treelist').store,
            hierarchyItems = hierarchyStore.items,
            i              = 0,
            tmpItems       = [],
            filters, tmpItemsLen;

        hierarchyItems.forEach(cls => {
            if (cls.checked === true) {
                tmpItems.push(cls.name);
            }
        });

        tmpItemsLen = tmpItems.length;

        for (; i < tmpItemsLen; i++) {
            hierarchyMap[tmpItems[i]] = i;
        }

        me.targetClassName = hierarchyItems[hierarchyItems.length -1].name;

        filters = [{
            operator: 'included',
            property: 'neoClassName',
            value   : tmpItems
        }, {
            operator: '!==',
            property: 'kind',
            value   : 'class'
        }, {
            operator: '!==',
            property: 'kind',
            value   : 'constant' // todo?
        }, {
            operator: '!==',
            property: 'kind',
            value   : 'module'
        }, {
            operator: 'isUndefined',
            property: 'inherited'
        }];

        if (!me.showPrivateMembers) {
            filters.push({
                operator: '!==',
                property: 'access',
                value   : 'private'
            });
        }

        if (!me.showProtectedMembers) {
            filters.push({
                operator: '!==',
                property: 'access',
                value   : 'protected'
            });
        }

        if (!me.showStaticMembers) {
            filters.push({
                operator: '!==',
                property: 'scope',
                value   : 'static'
            });
        }

        if (me.filterMembersQuery !== '' && me.filterMembersQuery !== null) {
            filters.push({
                operator: 'like',
                property: 'name',
                value   : me.filterMembersQuery
            });
        }

        filters.push({
            scope   : me,
            filterBy: function(item, filteredItems, allItems) {
                let me              = this,
                    targetClassName = me.targetClassName,
                    filteredItem, i, len;

                // always exclude inherited alternateClassName & ntype configs
                if ((item.name === 'alternateClassName' || item.name === 'ntype') && item.neoClassName !== targetClassName
                ) {
                    return true;
                }

                if (item.neoClassName !== targetClassName) {
                    i   = 0;
                    len = filteredItems.length;

                    for (; i < len; i++) {
                        filteredItem = filteredItems[i];

                        if (item.id !== filteredItem.id) {
                            if (
                                item.name  === filteredItem.name  &&
                                item.scope === filteredItem.scope && // static VS instance members
                                hierarchyMap[item.neoClassName] < hierarchyMap[filteredItem.neoClassName]
                            ) {
                                return true;
                            }
                        }
                    }
                }

                return false;
            }
        });

        me.store.filters = filters;

        me.store.sorters = [{
            // Configs => Methods => Events
            sortBy: function(a, b) {
                a = a.kind === 'member' ? 0 : a.kind === 'function' ? 1 : 2;
                b = b.kind === 'member' ? 0 : b.kind === 'function' ? 1 : 2;

                return a > b ? 1 : a < b ? -1 : 0;
            }
        }, {
            direction: 'ASC',
            property : 'name'
        }];

        me.fire('mutateItems', me.store);
    }

    /**
     * Override to not call createItems() at this point => onRefreshClassMembers()
     */
    onStoreFilter() {}

    /**
     *
     */
    onRefreshClassMembers() {
        this.filterAndSortItems();
        this.createItems();
    }
}

Neo.applyClassConfig(MembersList);



/***/ }),

/***/ "./docs/app/view/classdetails/SourceViewComponent.mjs":
/*!************************************************************!*\
  !*** ./docs/app/view/classdetails/SourceViewComponent.mjs ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SourceViewComponent; });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class Docs.app.view.classdetails.SourceViewComponent
 * @extends Neo.component.Base
 */
class SourceViewComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.view.classdetails.SourceViewComponent'
         * @protected
         */
        className: 'Docs.app.view.classdetails.SourceViewComponent',
        /**
         * @member {String} ntype='classdetails-sourceviewcomponent'
         * @protected
         */
        ntype: 'classdetails-sourceviewcomponent',
        /**
         * @member {Boolean} isHighlighted_=false
         * @protected
         */
        isHighlighted_: false,
        /**
         * @member {Number|null} line_=null
         * @protected
         */
        line_: null,
        /**
         * @member {Number|null} previousLine=null
         * @protected
         */
        previousLine: null,
        /**
         * @member {Object|null} structureData=null
         * @protected
         */
        structureData: null,
        /**
         * @member {Object} style= {overflow: 'auto'}
         */
        style: {
            overflow: 'auto'
        },
        /**
         * @member {Object} _vdom={cn: [//...]}
         */
        _vdom: {
            cn: [{
                tag: 'pre',
                cn : [{
                    tag  : 'code',
                    class: 'javascript'
                }]
            }]
        }
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me   = this,
            url  = '../../' + me.structureData.srcPath;

        Neo.Xhr.promiseRequest({
            url: url
        }).then(data => {
            setTimeout(() => { // ensure we are not mounting
                me.applySourceCode(data.response);
            }, 100);
        });
    }

    /**
     * Triggered after the isHighlighted config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetIsHighlighted(value, oldValue) {
        if (value) {
            let me = this;

            setTimeout(() => {
                Neo.main.addon.HighlightJS.syntaxHighlightLine({
                    addLine   : me.line,
                    removeLine: me.previousLine,
                    vnodeId   : me.vdom.cn[0].id
                });
            }, 50);
        }
    }

    /**
     * Triggered after the line config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetLine(value, oldValue) {
        let me = this;

        if (oldValue) {
            me.previousLine = oldValue;
        }

        if (me.isHighlighted) {
            me.afterSetIsHighlighted(true, false);
        }
    }

    /**
     *
     * @param {Object} data
     */
    applySourceCode(data) {
        let me   = this,
            vdom = me.vdom,
            node = vdom.cn[0]; // pre tag

        node.cn[0].innerHTML = data; // code tag
        me.vdom = vdom;

        setTimeout(() => {
            me.syntaxHighlight(node.id);
        }, 50);
    }

    /**
     *
     * @param {String} vnodeId
     */
    syntaxHighlight(vnodeId) {
        let me = this,
            id;

        if (me.vnode) {
            Neo.main.addon.HighlightJS.syntaxHighlight({
                vnodeId: me.vdom.cn[0].id
            }).then(() => {
                me.isHighlighted = true;
            });
        } else {
            id = me.on('mounted', () => {
                setTimeout(() => {
                    me.un('mounted', id);
                    me.syntaxHighlight(vnodeId);
                }, 50);
            });
        }
    }
}

Neo.applyClassConfig(SourceViewComponent);



/***/ }),

/***/ "./docs/app/view/classdetails/TutorialComponent.mjs":
/*!**********************************************************!*\
  !*** ./docs/app/view/classdetails/TutorialComponent.mjs ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TutorialComponent; });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class Docs.app.view.classdetails.TutorialComponent
 * @extends Neo.component.Base
 */
class TutorialComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.view.classdetails.TutorialComponent'
         * @protected
         */
        className: 'Docs.app.view.classdetails.TutorialComponent',
        /**
         * @member {String} ntype='classdetails-tutorialcomponent'
         * @protected
         */
        ntype: 'classdetails-tutorialcomponent',
        /**
         * @member {String[]} cls=['neo-classdetails-tutorialcomponent']
         */
        cls: ['neo-classdetails-tutorialcomponent'],
        /**
         * @member {String|null} fileName=null
         */
        fileName: null,
        /**
         * @member {String|null} fileType=null
         */
        fileType: null,
        /**
         * @member {Object} style={overflow: 'auto'}
         */
        style: {
            overflow: 'auto'
        }
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me     = this,
            isJson = me.fileType === 'json',
            url    = '../../docs/tutorials/' + me.fileName;

        Neo.Xhr[isJson ? 'promiseJson' : 'promiseRequest']({
            url: url
        }).then(data => {
            setTimeout(() => { // ensure we are not mounting
                me.applySourceCode(isJson ? data.json : data.response);
            }, 100);
        });
    }

    /**
     *
     * @param {Object} data
     */
    applySourceCode(data) {
        let me   = this,
            vdom = me.vdom;

        if (me.fileType === 'json') {
            vdom.cn = data;
        } else {
            vdom.innerHTML = data;
        }

        me.vdom = vdom;

        setTimeout(() => {
            TutorialComponent.syntaxHighlight();
        }, 50);
    }

    /**
     *
     */
    static syntaxHighlight() {
        Neo.main.addon.HighlightJS.syntaxHighlightInit();
    }
}

Neo.applyClassConfig(TutorialComponent);



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL2FwcC5tanMiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9hcHAvdmlldy9BcGlUcmVlTGlzdC5tanMiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9hcHAvdmlldy9Db250ZW50VGFiQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9kb2NzL2FwcC92aWV3L0V4YW1wbGVzVHJlZUxpc3QubWpzIiwid2VicGFjazovLy8uL2RvY3MvYXBwL3ZpZXcvSGVhZGVyQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9kb2NzL2FwcC92aWV3L01haW5Db250YWluZXIubWpzIiwid2VicGFjazovLy8uL2RvY3MvYXBwL3ZpZXcvTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIubWpzIiwid2VicGFjazovLy8uL2RvY3MvYXBwL3ZpZXcvVHV0b3JpYWxzVHJlZUxpc3QubWpzIiwid2VicGFjazovLy8uL2RvY3MvYXBwL3ZpZXcvY2xhc3NkZXRhaWxzL0hlYWRlckNvbXBvbmVudC5tanMiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9hcHAvdmlldy9jbGFzc2RldGFpbHMvSGllcmFyY2h5VHJlZUxpc3QubWpzIiwid2VicGFjazovLy8uL2RvY3MvYXBwL3ZpZXcvY2xhc3NkZXRhaWxzL01haW5Db250YWluZXIubWpzIiwid2VicGFjazovLy8uL2RvY3MvYXBwL3ZpZXcvY2xhc3NkZXRhaWxzL01haW5Db250YWluZXJDb250cm9sbGVyLm1qcyIsIndlYnBhY2s6Ly8vLi9kb2NzL2FwcC92aWV3L2NsYXNzZGV0YWlscy9NZW1iZXJzTGlzdC5tanMiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9hcHAvdmlldy9jbGFzc2RldGFpbHMvU291cmNlVmlld0NvbXBvbmVudC5tanMiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9hcHAvdmlldy9jbGFzc2RldGFpbHMvVHV0b3JpYWxDb21wb25lbnQubWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFB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U0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQzdKQTtBQUFBO0FBQUE7QUFBZ0Y7O0FBRWhGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG9GQUFTO0FBQ3pDLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTyxRQUFRO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsOEJBQThCO0FBQzlCO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6ImNodW5rcy9kb2NzLWFwcC1tanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuL2FwcC92aWV3L01haW5Db250YWluZXIubWpzJztcblxuY29uc3Qgb25TdGFydCA9ICgpID0+IE5lby5hcHAoe1xuICAgIGFwcFBhdGggOiAnZG9jcy8nLFxuICAgIG1haW5WaWV3OiBNYWluQ29udGFpbmVyLFxuICAgIG5hbWUgICAgOiAnRG9jcydcbn0pO1xuXG5leHBvcnQge29uU3RhcnQgYXMgb25TdGFydH07IiwiaW1wb3J0IFRyZWVMaXN0IGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9saXN0L1RyZWVMaXN0Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIERvY3MuYXBwLnZpZXcuQXBpVHJlZUxpc3RcbiAqIEBleHRlbmRzIE5lby5saXN0LlRyZWVMaXN0XG4gKi9cbmNsYXNzIEFwaVRyZWVMaXN0IGV4dGVuZHMgVHJlZUxpc3Qge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLmFwcC52aWV3LkFwaVRyZWVMaXN0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLmFwcC52aWV3LkFwaVRyZWVMaXN0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2FwaS10cmVlbGlzdCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdhcGktdHJlZWxpc3QnXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgTmVvLlhoci5wcm9taXNlSnNvbih7XG4gICAgICAgICAgICB1cmw6ICcuLi8uLi9kb2NzL291dHB1dC9zdHJ1Y3R1cmUuanNvbidcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGxldCB2ZG9tICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICAgICAgaXRlbVJvb3QgPSBtZS5nZXRMaXN0SXRlbXNSb290KCk7XG5cbiAgICAgICAgICAgIG1lLnN0b3JlLml0ZW1zID0gZGF0YS5qc29uO1xuICAgICAgICAgICAgaXRlbVJvb3QgPSBtZS5jcmVhdGVJdGVtcyhudWxsLCBpdGVtUm9vdCwgMCk7XG5cbiAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEFwaVRyZWVMaXN0KTtcblxuZXhwb3J0IHtBcGlUcmVlTGlzdCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29udGFpbmVyICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy90YWIvQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgSGVhZGVyQnV0dG9uIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy90YWIvaGVhZGVyL0J1dHRvbi5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLmFwcC52aWV3LkNvbnRlbnRUYWJDb250YWluZXJcbiAqIEBleHRlbmRzIE5lby50YWIuQ29udGFpbmVyXG4gKi9cbmNsYXNzIENvbnRlbnRUYWJDb250YWluZXIgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLmFwcC52aWV3LkNvbnRlbnRUYWJDb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0RvY3MuYXBwLnZpZXcuQ29udGVudFRhYkNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdkb2NzLWNvbnRlbnQtdGFiY29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2RvY3MtY29udGVudC10YWJjb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYWN0aXZhdGVJbnNlcnRlZFRhYnM9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZhdGVJbnNlcnRlZFRhYnM6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGNvbnRlbnRDb250YWluZXJEZWZhdWx0cz17Y2xzOlsvLy4uLl19XG4gICAgICAgICAqL1xuICAgICAgICBjb250ZW50Q29udGFpbmVyRGVmYXVsdHM6IHtcbiAgICAgICAgICAgIGNsczogW1xuICAgICAgICAgICAgICAgICduZW8tZG9jcy10YWItY29udGVudC1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICduZW8tdGFiLWNvbnRlbnQtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAnbmVvLWNvbnRhaW5lcidcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gaGVhZGVyVG9vbGJhckRlZmF1bHRzPXtjbHM6Wy8vLi4uXX1cbiAgICAgICAgICovXG4gICAgICAgIGhlYWRlclRvb2xiYXJEZWZhdWx0czoge1xuICAgICAgICAgICAgY2xzOiBbXG4gICAgICAgICAgICAgICAgJ2RvY3MtdGFiLWhlYWRlci10b29sYmFyJyxcbiAgICAgICAgICAgICAgICAnbmVvLXRhYi1oZWFkZXItdG9vbGJhcicsXG4gICAgICAgICAgICAgICAgJ25lby10b29sYmFyJ1xuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGl0ZW1zPVsvLy4uLl1dXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgIGh0bWwgOiAnV2VsY29tZSB0byB0aGUgbmVvLm1qcyBkb2NzIScsXG4gICAgICAgICAgICBzdHlsZToge3BhZGRpbmc6ICcyMHB4J30sXG5cbiAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS11c2VycycsXG4gICAgICAgICAgICAgICAgdGV4dCAgIDogJ1dlbGNvbWUhJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIGNscyA9IG1lLmNscztcblxuICAgICAgICBjbHMudW5zaGlmdCgnZG9jcy1jb250ZW50LXRhYmNvbnRhaW5lcicpO1xuICAgICAgICBtZS5jbHMgPSBjbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGluZyB0aGUgYnV0dG9uIGNsaWNrIGxpc3RlbmVyIHRvIGFsbG93IGNsb3NpbmcgdGFicyBvbiBpY29uIGNsaWNrXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBtZXJnZWQgY29uZmlnXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIGdldFRhYkJ1dHRvbkNvbmZpZyhjb25maWcsIGluZGV4KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBkZWZhdWx0Q29uZmlnID0ge1xuICAgICAgICAgICAgICAgIG1vZHVsZSA6IEhlYWRlckJ1dHRvbixcbiAgICAgICAgICAgICAgICBmbGV4ICAgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgaW5kZXggIDogaW5kZXgsXG4gICAgICAgICAgICAgICAgcHJlc3NlZDogbWUuYWN0aXZlSW5kZXggPT09IGluZGV4LFxuXG4gICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGF0aCA9IGRhdGEucGF0aC5tYXAoZSA9PiBlLmlkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXRoWzBdLmluZGV4T2YoJ25lby10YWItaGVhZGVyLWJ1dHRvbi0nKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZS5hY3RpdmVJbmRleCA9IE5lby5nZXRDb21wb25lbnQoZGF0YS50YXJnZXQuaWQpLmluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLnJlbW92ZUF0KE5lby5nZXRDb21wb25lbnQobWUudGFiQmFySWQpLmluZGV4T2YocGF0aFsxXSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlOiBtZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gey4uLmRlZmF1bHRDb25maWcsIC4uLmNvbmZpZ307XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb250ZW50VGFiQ29udGFpbmVyKTtcblxuZXhwb3J0IHtDb250ZW50VGFiQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBUcmVlTGlzdCBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbGlzdC9UcmVlTGlzdC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLmFwcC52aWV3LkV4YW1wbGVzVHJlZUxpc3RcbiAqIEBleHRlbmRzIE5lby5saXN0LlRyZWVMaXN0XG4gKi9cbmNsYXNzIEV4YW1wbGVzVHJlZUxpc3QgZXh0ZW5kcyBUcmVlTGlzdCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3MuYXBwLnZpZXcuRXhhbXBsZXNUcmVlTGlzdCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy5hcHAudmlldy5FeGFtcGxlc1RyZWVMaXN0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2V4YW1wbGVzLXRyZWVsaXN0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2V4YW1wbGVzLXRyZWVsaXN0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9Wydkb2NzLWV4YW1wbGVzLXRyZWVsaXN0JywgJ25lby10cmVlLWxpc3QnLCAnbmVvLWxpc3QtY29udGFpbmVyJywgJ25lby1saXN0J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogW1xuICAgICAgICAgICAgJ2RvY3MtZXhhbXBsZXMtdHJlZWxpc3QnLFxuICAgICAgICAgICAgJ25lby10cmVlLWxpc3QnLFxuICAgICAgICAgICAgJ25lby1saXN0LWNvbnRhaW5lcicsXG4gICAgICAgICAgICAnbmVvLWxpc3QnXG4gICAgICAgIF1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBOZW8uWGhyLnByb21pc2VKc29uKHtcbiAgICAgICAgICAgIHVybDogJy4uLy4uL2RvY3MvZXhhbXBsZXMuanNvbidcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGxldCB2ZG9tICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICAgICAgaXRlbVJvb3QgPSBtZS5nZXRMaXN0SXRlbXNSb290KCk7XG5cbiAgICAgICAgICAgIG1lLnN0b3JlLml0ZW1zID0gZGF0YS5qc29uO1xuICAgICAgICAgICAgaXRlbVJvb3QgPSBtZS5jcmVhdGVJdGVtcyhudWxsLCBpdGVtUm9vdCwgMCk7XG5cbiAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEV4YW1wbGVzVHJlZUxpc3QpO1xuXG5leHBvcnQge0V4YW1wbGVzVHJlZUxpc3QgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbnRhaW5lciAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250YWluZXIvQmFzZS5tanMnO1xuaW1wb3J0IEJ1dHRvbiAgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9idXR0b24vQmFzZS5tanMnO1xuaW1wb3J0IFNlYXJjaEZpZWxkIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL1NlYXJjaC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLmFwcC52aWV3LkhlYWRlckNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5CYXNlXG4gKi9cbmNsYXNzIEhlYWRlckNvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3MuYXBwLnZpZXcuSGVhZGVyQ29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLmFwcC52aWV3LkhlYWRlckNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdoZWFkZXItY29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ25lby1kb2NzLWhlYWRlci1jb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1kb2NzLWhlYWRlci1jb250YWluZXInXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1kb2NzLWhlYWRlci1jb250YWluZXInXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gaGVpZ2h0PTU1XG4gICAgICAgICAqL1xuICAgICAgICBoZWlnaHQ6IDU1LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsYXlvdXQ9e250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtcz1bLy8uLi5dXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICAgIDogU2VhcmNoRmllbGQsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICAgICA6IHtjaGFuZ2U6ICdvbk5hdmlnYXRpb25TZWFyY2hGaWVsZENoYW5nZSd9LFxuICAgICAgICAgICAgcGxhY2Vob2xkZXJUZXh0OiAnRmlsdGVyIE5hdmlnYXRpb24nLFxuICAgICAgICAgICAgc3R5bGUgICAgICAgICAgOiB7cGFkZGluZzogJzEwcHgnfSxcbiAgICAgICAgICAgIHdpZHRoICAgICAgICAgIDogMjQwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgIDogQnV0dG9uLFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7Y2xpY2s6ICdvblN3aXRjaFRoZW1lQnV0dG9uQ2xpY2snfSxcbiAgICAgICAgICAgIGZsZXggICAgICAgIDogJ25vbmUnLFxuICAgICAgICAgICAgaGVpZ2h0ICAgICAgOiAyNyxcbiAgICAgICAgICAgIHJlZmVyZW5jZSAgIDogJ3RoZW1lLWJ1dHRvbicsXG4gICAgICAgICAgICBzdHlsZSAgICAgICA6IHttYXJnaW5Ub3A6ICc1cHgnfSxcbiAgICAgICAgICAgIHRleHQgICAgICAgIDogJ1RoZW1lIERhcmsnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgIDogQnV0dG9uLFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7Y2xpY2s6ICdvblN3aXRjaFNvdXJjZVZpZXdUaGVtZUJ1dHRvbkNsaWNrJ30sXG4gICAgICAgICAgICBmbGV4ICAgICAgICA6ICdub25lJyxcbiAgICAgICAgICAgIGhlaWdodCAgICAgIDogMjcsXG4gICAgICAgICAgICByZWZlcmVuY2UgICA6ICdzb3VyY2Utdmlldy10aGVtZS1idXR0b24nLFxuICAgICAgICAgICAgc3R5bGUgICAgICAgOiB7bWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5Ub3A6ICc1cHgnfSxcbiAgICAgICAgICAgIHRleHQgICAgICAgIDogJ1NvdXJjZSBWaWV3IFRoZW1lIERhcmsnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgIGZsZXggOiAxXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgIGNscyAgOiBbJ25lby1sb2dvLXRleHQnXSxcbiAgICAgICAgICAgIGh0bWwgOiAnbmVvLm1qcyBkb2NzJyxcbiAgICAgICAgICAgIHdpZHRoOiAyMTBcbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIZWFkZXJDb250YWluZXIpO1xuXG5leHBvcnQge0hlYWRlckNvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQXBpVHJlZUxpc3QgICAgICAgICAgICAgZnJvbSAnLi9BcGlUcmVlTGlzdC5tanMnO1xuaW1wb3J0IENsYXNzRGV0YWlsc0NvbnRhaW5lciAgIGZyb20gJy4vY2xhc3NkZXRhaWxzL01haW5Db250YWluZXIubWpzJztcbmltcG9ydCBDb2xsZWN0aW9uICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29sbGVjdGlvbi9CYXNlLm1qcyc7XG5pbXBvcnQgQ29udGVudFRhYkNvbnRhaW5lciAgICAgZnJvbSAnLi9Db250ZW50VGFiQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgRXhhbXBsZXNUcmVlTGlzdCAgICAgICAgZnJvbSAnLi9FeGFtcGxlc1RyZWVMaXN0Lm1qcyc7XG5pbXBvcnQgSGVhZGVyQ29udGFpbmVyICAgICAgICAgZnJvbSAnLi9IZWFkZXJDb250YWluZXIubWpzJztcbmltcG9ydCBNYWluQ29udGFpbmVyQ29udHJvbGxlciBmcm9tICcuL01haW5Db250YWluZXJDb250cm9sbGVyLm1qcyc7XG5pbXBvcnQgU291cmNlVmlld0NvbXBvbmVudCAgICAgZnJvbSAnLi9jbGFzc2RldGFpbHMvU291cmNlVmlld0NvbXBvbmVudC5tanMnO1xuaW1wb3J0IFR1dG9yaWFsQ29tcG9uZW50ICAgICAgIGZyb20gJy4vY2xhc3NkZXRhaWxzL1R1dG9yaWFsQ29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgVHV0b3JpYWxzVHJlZUxpc3QgICAgICAgZnJvbSAnLi9UdXRvcmlhbHNUcmVlTGlzdC5tanMnO1xuaW1wb3J0IFZpZXdwb3J0ICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250YWluZXIvVmlld3BvcnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy5hcHAudmlldy5NYWluQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLlZpZXdwb3J0XG4gKi9cbmNsYXNzIE1haW5Db250YWluZXIgZXh0ZW5kcyBWaWV3cG9ydCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3MuYXBwLnZpZXcuTWFpbkNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy5hcHAudmlldy5NYWluQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J21haW4tY29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ21haW4tY29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGF1dG9Nb3VudD10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBhdXRvTW91bnQgOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1kb2NzLW1haW5jb250YWluZXInLCAnbmVvLXZpZXdwb3J0J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tZG9jcy1tYWluY29udGFpbmVyJywgJ25lby12aWV3cG9ydCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50fSBjb250cm9sbGVyPU1haW5Db250YWluZXJDb250cm9sbGVyXG4gICAgICAgICAqL1xuICAgICAgICBjb250cm9sbGVyOiBNYWluQ29udGFpbmVyQ29udHJvbGxlcixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbGF5b3V0PXtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgICAgICAgKi9cbiAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29sbGVjdGlvbi5CYXNlfG51bGx9IHN0b3JlXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzdG9yZV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gaXRlbXM9Wy8vLi4uXVxuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFtIZWFkZXJDb250YWluZXIsIHtcbiAgICAgICAgICAgIG50eXBlIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICBmbGV4ICA6IDEsXG4gICAgICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcblxuICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgbnR5cGUgICA6ICd0YWItY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICBjbHMgICAgIDogWyduZW8tZG9jcy1uYXZpZ2F0aW9uLXRhYi1jb250YWluZXInLCAnbmVvLXRhYi1jb250YWluZXInXSxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogMjkwLFxuICAgICAgICAgICAgICAgIHdpZHRoICAgOiAyOTAsXG5cbiAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlICAgOiBBcGlUcmVlTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7bGVhZkl0ZW1DbGljazogJ29uQXBpTGlzdExlYWZDbGljayd9LFxuICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICdhcGktdHJlZWxpc3QnLFxuXG4gICAgICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWNvZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ0FQSSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlICAgOiBUdXRvcmlhbHNUcmVlTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7bGVhZkl0ZW1DbGljazogJ29uVHV0b3JpYWxMaXN0TGVhZkNsaWNrJ30sXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZTogJ3R1dG9yaWFscy10cmVlbGlzdCcsXG5cbiAgICAgICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtaGFuZHMtaGVscGluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnVHV0b3JpYWxzJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGUgICA6IEV4YW1wbGVzVHJlZUxpc3QsXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge2xlYWZJdGVtQ2xpY2s6ICdvbkV4YW1wbGVzTGlzdExlYWZDbGljayd9LFxuICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICdleGFtcGxlcy10cmVlbGlzdCcsXG5cbiAgICAgICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtZGVza3RvcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnRXhhbXBsZXMnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgIDogQ29udGVudFRhYkNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICBmbGV4ICAgICA6IDEsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAnY29udGVudC10YWJjb250YWluZXInXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICghbWUuc3RvcmUpIHtcbiAgICAgICAgICAgIG1lLnN0b3JlID0gTmVvLmNyZWF0ZShDb2xsZWN0aW9uLCB7XG4gICAgICAgICAgICAgICAga2V5UHJvcGVydHk6ICdpZCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGlzYWJsZSB0aGUgZXhhbXBsZXMgVGFiIGZvciBkaXN0IHZlcnNpb25zIHVudGlsIHRoZSB3ZWJwYWNrIGJ1aWxkcyBjYW4gaGFuZGxlIHRoaXMgKHNlZTogIzE0MClcbiAgICAgICAgbWUuaXRlbXNbMV0uaXRlbXNbMF0uaXRlbXNbMl0udGFiQnV0dG9uQ29uZmlnLmRpc2FibGVkID0gTmVvLmNvbmZpZy5lbnZpcm9ubWVudCAhPT0gJ2RldmVsb3BtZW50JztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE5lby5YaHIucHJvbWlzZUpzb24oe1xuICAgICAgICAgICAgdXJsOiAnLi4vLi4vZG9jcy9vdXRwdXQvYWxsLmpzb24nXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBtZS5zdG9yZS5pdGVtcyA9IGRhdGEuanNvbjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyKTtcblxuZXhwb3J0IHtNYWluQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRyb2xsZXIvQ29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL0FycmF5Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIERvY3MuYXBwLnZpZXcuTWFpbkNvbnRhaW5lckNvbnRyb2xsZXJcbiAqIEBleHRlbmRzIE5lby5jb250cm9sbGVyLkNvbXBvbmVudFxuICovXG5jbGFzcyBNYWluQ29udGFpbmVyQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3MuYXBwLnZpZXcuTWFpbkNvbnRhaW5lckNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0RvY3MuYXBwLnZpZXcuTWFpbkNvbnRhaW5lckNvbnRyb2xsZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nZG9jcy1tYWluY29udGFpbmVyLWNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnZG9jcy1tYWluY29udGFpbmVyLWNvbnRyb2xsZXInXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqL1xuICAgIG9uQXBpTGlzdExlYWZDbGljayhyZWNvcmQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29udGVudFRhYkNvbnRhaW5lciA9IG1lLmdldFJlZmVyZW5jZSgnY29udGVudC10YWJjb250YWluZXInKTtcblxuICAgICAgICBjb250ZW50VGFiQ29udGFpbmVyLmFkZCh7XG4gICAgICAgICAgICBudHlwZSAgICAgICAgOiAnY2xhc3NkZXRhaWxzLW1haW5jb250YWluZXInLFxuICAgICAgICAgICAgaWQgICAgICAgICAgIDogcmVjb3JkLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIHN0cnVjdHVyZURhdGE6IHJlY29yZCxcblxuICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgaWNvbkNsczogcmVjb3JkLnNpbmdsZXRvbiA/ICdmYSBmYS1hcnJvdy1hbHQtY2lyY2xlLXJpZ2h0JyA6ICdmYSBmYS1jb3B5cmlnaHQnLFxuICAgICAgICAgICAgICAgIHRleHQgICA6IHJlY29yZC5uYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqL1xuICAgIG9uRXhhbXBsZXNMaXN0TGVhZkNsaWNrKHJlY29yZCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb250ZW50VGFiQ29udGFpbmVyID0gbWUuZ2V0UmVmZXJlbmNlKCdjb250ZW50LXRhYmNvbnRhaW5lcicpLFxuICAgICAgICAgICAgbmFtZSAgICAgICAgICAgICAgICA9IHJlY29yZC5uYW1lLFxuICAgICAgICAgICAgcGF0aEFycmF5ICAgICAgICAgICA9IFtdLFxuICAgICAgICAgICAgc3RvcmUgICAgICAgICAgICAgICA9IG1lLmdldFJlZmVyZW5jZSgnZXhhbXBsZXMtdHJlZWxpc3QnKS5zdG9yZSxcbiAgICAgICAgICAgIHRtcFJlY29yZCAgICAgICAgICAgPSByZWNvcmQsXG4gICAgICAgICAgICB0YWJCdXR0b25Db25maWc7XG5cbiAgICAgICAgd2hpbGUgKHRtcFJlY29yZC5wYXJlbnRJZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdG1wUmVjb3JkID0gc3RvcmUuZ2V0KHRtcFJlY29yZC5wYXJlbnRJZCk7XG4gICAgICAgICAgICBuYW1lICAgICAgPSB0bXBSZWNvcmQubmFtZSArICcuJyArIG5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBuYW1lID0gJ2V4YW1wbGVzXycgKyBuYW1lO1xuXG4gICAgICAgIHRhYkJ1dHRvbkNvbmZpZyA9IHtcbiAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1kZXNrdG9wJyxcbiAgICAgICAgICAgIHRleHQgICA6IHJlY29yZC5uYW1lXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJlY29yZC5wYXRoKSkge1xuICAgICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgICAgIC8qIHdlYnBhY2tJZ25vcmU6IHRydWUgKi9cbiAgICAgICAgICAgICAgICByZWNvcmQucGF0aCkudGhlbigobW9kdWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUYWJDb250YWluZXIuYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG50eXBlICAgICAgICAgIDogbW9kdWxlLmRlZmF1bHQucHJvdG90eXBlLm50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgICAgICAgICAgICAgOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB0YWJCdXR0b25Db25maWdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlY29yZC5wYXRoLmZvckVhY2gocGF0aCA9PiB7XG4gICAgICAgICAgICAgICAgcGF0aEFycmF5LnB1c2goaW1wb3J0KC8qIHdlYnBhY2tJZ25vcmU6IHRydWUgKi8gcGF0aCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIFByb21pc2UuYWxsKHBhdGhBcnJheSkudGhlbihmdW5jdGlvbihtb2R1bGVzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1zID0gW107XG5cbiAgICAgICAgICAgICAgICBtb2R1bGVzLmZvckVhY2gobW9kdWxlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBudHlwZTogbW9kdWxlLmRlZmF1bHQucHJvdG90eXBlLm50eXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29udGVudFRhYkNvbnRhaW5lci5hZGQoe1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgICAgICAgICA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBpZCAgICAgICAgICAgICA6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zICAgICAgICAgIDogaXRlbXMsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlICAgICAgICAgIDoge3BhZGRpbmc6ICcxMHB4J30sXG4gICAgICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzogdGFiQnV0dG9uQ29uZmlnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2xkVmFsdWVcbiAgICAgKi9cbiAgICBvbkhhc2hDaGFuZ2UodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGhhc2ggICAgICAgICAgICAgICAgPSB2YWx1ZSAmJiB2YWx1ZS5oYXNoLFxuICAgICAgICAgICAgY29udGVudFRhYkNvbnRhaW5lciA9IG1lLmdldFJlZmVyZW5jZSgnY29udGVudC10YWJjb250YWluZXInKSxcbiAgICAgICAgICAgIHN0cnVjdHVyZVN0b3JlICAgICAgPSBtZS5nZXRSZWZlcmVuY2UoJ2FwaS10cmVlbGlzdCcpLnN0b3JlLFxuICAgICAgICAgICAgcmVjb3JkLCB0YWI7XG5cbiAgICAgICAgaWYgKGhhc2ggJiYgaGFzaC5oYXNPd25Qcm9wZXJ0eSgndmlld1NvdXJjZScpKSB7XG4gICAgICAgICAgICByZWNvcmQgPSBzdHJ1Y3R1cmVTdG9yZS5maW5kKCdjbGFzc05hbWUnLCBoYXNoLnZpZXdTb3VyY2UpWzBdO1xuXG4gICAgICAgICAgICBpZiAocmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgdGFiID0gY29udGVudFRhYkNvbnRhaW5lci5hZGQoe1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgICAgICAgOiAnY2xhc3NkZXRhaWxzLXNvdXJjZXZpZXdjb21wb25lbnQnLFxuICAgICAgICAgICAgICAgICAgICBpZCAgICAgICAgICAgOiBoYXNoLnZpZXdTb3VyY2UgKyAnX19zb3VyY2UnLFxuICAgICAgICAgICAgICAgICAgICBsaW5lICAgICAgICAgOiBoYXNoLmxpbmUsXG4gICAgICAgICAgICAgICAgICAgIHN0cnVjdHVyZURhdGE6IHJlY29yZCxcblxuICAgICAgICAgICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1jb2RlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICA6IHJlY29yZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIGFkanVzdCB0aGUgaGlnaGxpZ2h0ZWQgbGluZSBmb3IgYWxyZWFkeSBhZGRlZCBzb3VyY2UgdmlldyB0YWJzXG4gICAgICAgICAgICAgICAgdGFiLmxpbmUgPSBoYXNoLmxpbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25OYXZpZ2F0aW9uU2VhcmNoRmllbGRDaGFuZ2UoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmFsdWUgPSBkYXRhLnZhbHVlO1xuXG4gICAgICAgIG1lLmdldFJlZmVyZW5jZSgnZXhhbXBsZXMtdHJlZWxpc3QnKSAuZmlsdGVyKCduYW1lJywgdmFsdWUsIG51bGwpO1xuICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ2FwaS10cmVlbGlzdCcpICAgICAgLmZpbHRlcignbmFtZScsIHZhbHVlLCBudWxsKTtcbiAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCd0dXRvcmlhbHMtdHJlZWxpc3QnKS5maWx0ZXIoJ25hbWUnLCB2YWx1ZSwgbnVsbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvblN3aXRjaFNvdXJjZVZpZXdUaGVtZUJ1dHRvbkNsaWNrKCkge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGJ1dHRvbiA9IG1lLmdldFJlZmVyZW5jZSgnc291cmNlLXZpZXctdGhlbWUtYnV0dG9uJyksXG4gICAgICAgICAgICBidXR0b25UZXh0LCBocmVmO1xuXG4gICAgICAgIGlmIChidXR0b24udGV4dCA9PT0gJ1NvdXJjZSBWaWV3IFRoZW1lIExpZ2h0Jykge1xuICAgICAgICAgICAgYnV0dG9uVGV4dCA9ICdTb3VyY2UgVmlldyBUaGVtZSBEYXJrJztcbiAgICAgICAgICAgIGhyZWYgICAgICAgPSAnLi9yZXNvdXJjZXMvaGlnaGxpZ2h0anMtY3VzdG9tLWdpdGh1Yi10aGVtZS5jc3MnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnV0dG9uVGV4dCA9ICdTb3VyY2UgVmlldyBUaGVtZSBMaWdodCc7XG4gICAgICAgICAgICBocmVmICAgICAgID0gJy4vcmVzb3VyY2VzL2hpZ2hsaWdodGpzLWN1c3RvbS1kYXJrLXRoZW1lLmNzcyc7XG4gICAgICAgIH1cblxuICAgICAgICBOZW8ubWFpbi5hZGRvbi5TdHlsZXNoZWV0LnN3YXBTdHlsZVNoZWV0KHtcbiAgICAgICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgICAgICBpZCAgOiAnaGxqcy10aGVtZSdcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0ID0gYnV0dG9uVGV4dDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvblN3aXRjaFRoZW1lQnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYnV0dG9uID0gbWUuZ2V0UmVmZXJlbmNlKCd0aGVtZS1idXR0b24nKSxcbiAgICAgICAgICAgIHZpZXcgICA9IG1lLnZpZXcsXG4gICAgICAgICAgICBidXR0b25UZXh0LCBjbHMsIGhyZWYsIHRoZW1lO1xuXG4gICAgICAgIGlmIChidXR0b24udGV4dCA9PT0gJ1RoZW1lIExpZ2h0Jykge1xuICAgICAgICAgICAgYnV0dG9uVGV4dCA9ICdUaGVtZSBEYXJrJztcbiAgICAgICAgICAgIGhyZWYgICAgICAgPSAnLi4vZGlzdC9kZXZlbG9wbWVudC9uZW8tdGhlbWUtbGlnaHQtbm8tY3NzLXZhcnMuY3NzJztcbiAgICAgICAgICAgIHRoZW1lICAgICAgPSAnbmVvLXRoZW1lLWxpZ2h0JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvblRleHQgPSAnVGhlbWUgTGlnaHQnO1xuICAgICAgICAgICAgaHJlZiAgICAgICA9ICcuLi9kaXN0L2RldmVsb3BtZW50L25lby10aGVtZS1kYXJrLW5vLWNzcy12YXJzLmNzcyc7XG4gICAgICAgICAgICB0aGVtZSAgICAgID0gJ25lby10aGVtZS1kYXJrJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChOZW8uY29uZmlnLnVzZUNzc1ZhcnMpIHtcbiAgICAgICAgICAgIGNscyA9IFsuLi52aWV3LmNsc107XG5cbiAgICAgICAgICAgIHZpZXcuY2xzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaW5jbHVkZXMoJ25lby10aGVtZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsIGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBOZW9BcnJheS5hZGQoY2xzLCB0aGVtZSk7XG4gICAgICAgICAgICB2aWV3LmNscyA9IGNscztcblxuICAgICAgICAgICAgYnV0dG9uLnRleHQgPSBidXR0b25UZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTmVvLm1haW4uYWRkb24uU3R5bGVzaGVldC5zd2FwU3R5bGVTaGVldCh7XG4gICAgICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgICAgICBpZCAgOiAnbmVvLXRoZW1lJ1xuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBidXR0b24udGV4dCA9IGJ1dHRvblRleHQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqL1xuICAgIG9uVHV0b3JpYWxMaXN0TGVhZkNsaWNrKHJlY29yZCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb250ZW50VGFiQ29udGFpbmVyID0gbWUuZ2V0UmVmZXJlbmNlKCdjb250ZW50LXRhYmNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnRlbnRUYWJDb250YWluZXIuYWRkKHtcbiAgICAgICAgICAgIG50eXBlICAgOiAnY2xhc3NkZXRhaWxzLXR1dG9yaWFsY29tcG9uZW50JyxcbiAgICAgICAgICAgIGZpbGVOYW1lOiByZWNvcmQuZmlsZU5hbWUsXG4gICAgICAgICAgICBmaWxlVHlwZTogcmVjb3JkLnR5cGUsXG4gICAgICAgICAgICBpZCAgICAgIDogcmVjb3JkLm5hbWUsXG5cbiAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1oYW5kcy1oZWxwaW5nJyxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgOiByZWNvcmQubmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5Db250YWluZXJDb250cm9sbGVyKTtcblxuZXhwb3J0IHtNYWluQ29udGFpbmVyQ29udHJvbGxlciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgVHJlZUxpc3QgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2xpc3QvVHJlZUxpc3QubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy5hcHAudmlldy5UdXRvcmlhbHNUcmVlTGlzdFxuICogQGV4dGVuZHMgTmVvLmxpc3QuVHJlZUxpc3RcbiAqL1xuY2xhc3MgVHV0b3JpYWxzVHJlZUxpc3QgZXh0ZW5kcyBUcmVlTGlzdCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3MuYXBwLnZpZXcuVHV0b3JpYWxzVHJlZUxpc3QnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0RvY3MuYXBwLnZpZXcuVHV0b3JpYWxzVHJlZUxpc3QnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndHV0b3JpYWxzLXRyZWVsaXN0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3R1dG9yaWFscy10cmVlbGlzdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnZG9jcy10dXRvcmlhbHMtdHJlZWxpc3QnLCAnbmVvLXRyZWUtbGlzdCcsICduZW8tbGlzdC1jb250YWluZXInLCAnbmVvLWxpc3QnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbXG4gICAgICAgICAgICAnZG9jcy10dXRvcmlhbHMtdHJlZWxpc3QnLFxuICAgICAgICAgICAgJ25lby10cmVlLWxpc3QnLFxuICAgICAgICAgICAgJ25lby1saXN0LWNvbnRhaW5lcicsXG4gICAgICAgICAgICAnbmVvLWxpc3QnXG4gICAgICAgIF1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBOZW8uWGhyLnByb21pc2VKc29uKHtcbiAgICAgICAgICAgIHVybDogJy4uLy4uL2RvY3MvdHV0b3JpYWxzL3R1dG9yaWFscy5qc29uJ1xuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgbGV0IHZkb20gICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgICAgICBpdGVtUm9vdCA9IG1lLmdldExpc3RJdGVtc1Jvb3QoKTtcblxuICAgICAgICAgICAgbWUuc3RvcmUuaXRlbXMgPSBkYXRhLmpzb247XG4gICAgICAgICAgICBpdGVtUm9vdCA9IG1lLmNyZWF0ZUl0ZW1zKG51bGwsIGl0ZW1Sb290LCAwKTtcblxuICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVHV0b3JpYWxzVHJlZUxpc3QpO1xuXG5leHBvcnQge1R1dG9yaWFsc1RyZWVMaXN0IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb21wb25lbnQgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvQmFzZS5tanMnO1xuaW1wb3J0IFNvdXJjZVZpZXdDb21wb25lbnQgZnJvbSAnLi9Tb3VyY2VWaWV3Q29tcG9uZW50Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIERvY3MuYXBwLnZpZXcuY2xhc3NkZXRhaWxzLkhlYWRlckNvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIEhlYWRlckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3MuYXBwLnZpZXcuY2xhc3NkZXRhaWxzLkhlYWRlckNvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy5hcHAudmlldy5jbGFzc2RldGFpbHMuSGVhZGVyQ29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NsYXNzZGV0YWlscy1oZWFkZXJjb21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY2xhc3NkZXRhaWxzLWhlYWRlcmNvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWRvY3MtY2xhc3NkZXRhaWxzLWhlYWRlcmNvbXBvbmVudCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWRvY3MtY2xhc3NkZXRhaWxzLWhlYWRlcmNvbXBvbmVudCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IHJlY29yZF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgcmVjb3JkXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gZG9tTGlzdGVuZXJzXG4gICAgICAgICAqL1xuICAgICAgICBkb21MaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgIGNsaWNrOiB7XG4gICAgICAgICAgICAgICAgZm4gICAgICA6ICdvbkhlYWRlckNsaWNrJywgLy8gRG9jcy5hcHAudmlldy5NYWluQ29udGFpbmVyQ29udHJvbGxlclxuICAgICAgICAgICAgICAgIGRlbGVnYXRlOiAnLm5lby1kb2NzLWhlYWRlci10ZXh0J1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgICAgICAgIGNsczogWyduZW8tZG9jcy1oZWFkZXItdGV4dCddXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBtZS5yZWNvcmQuY2xhc3NOYW1lLFxuICAgICAgICAgICAgc3RvcmUgICAgID0gbWUudXAoJ21haW4tY29udGFpbmVyJykuc3RvcmUsXG4gICAgICAgICAgICByZWNvcmQgICAgPSBzdG9yZS5maW5kKHska2luZDogY2xhc3NOYW1lID09PSAnTmVvJyA/ICdtb2R1bGUnIDogJ2NsYXNzJywgbmVvQ2xhc3NOYW1lOiBjbGFzc05hbWV9KVswXSxcbiAgICAgICAgICAgIGkgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgPSByZWNvcmQgJiYgcmVjb3JkLnRhZ3MgJiYgcmVjb3JkLnRhZ3MubGVuZ3RoIHx8IDAsXG4gICAgICAgICAgICBzaW5nbGV0b24gPSBmYWxzZTtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocmVjb3JkLnRhZ3NbaV0udGl0bGUgPT09ICdzaW5nbGV0b24nKSB7XG4gICAgICAgICAgICAgICAgc2luZ2xldG9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZkb20uY25bMF0uaW5uZXJIVE1MID0gc2luZ2xldG9uID8gKGNsYXNzTmFtZSArICcg4oaSIFNpbmdsZXRvbicpIDogY2xhc3NOYW1lO1xuXG4gICAgICAgIGlmIChyZWNvcmQuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHZkb20uY24ucHVzaCh7XG4gICAgICAgICAgICAgICAgY2xzICAgICAgOiBbJ25lby1kb2NzLWhlYWRlci1kZXNjcmlwdGlvbiddLFxuICAgICAgICAgICAgICAgIGlubmVySFRNTDogcmVjb3JkLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGVhZGVyQ29tcG9uZW50KTtcblxuZXhwb3J0IHtIZWFkZXJDb21wb25lbnQgYXMgZGVmYXVsdH07IiwiaW1wb3J0IFRyZWVMaXN0IGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9saXN0L1RyZWVMaXN0Lm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvQXJyYXkubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy5hcHAudmlldy5jbGFzc2RldGFpbHMuSGllcmFyY2h5VHJlZUxpc3RcbiAqIEBleHRlbmRzIE5lby5saXN0LlRyZWVMaXN0XG4gKi9cbmNsYXNzIEhpZXJhcmNoeVRyZWVMaXN0IGV4dGVuZHMgVHJlZUxpc3Qge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLmFwcC52aWV3LmNsYXNzZGV0YWlscy5IaWVyYXJjaHlUcmVlTGlzdCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy5hcHAudmlldy5jbGFzc2RldGFpbHMuSGllcmFyY2h5VHJlZUxpc3QnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY2xhc3NkZXRhaWxzLXRyZWVsaXN0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NsYXNzaGllcmFyY2h5LXRyZWVsaXN0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9Wydkb2NzLWNsYXNzaGllcmFyY2h5LXRyZWVsaXN0JywgJ25lby1saXN0LWNvbnRhaW5lcicsICduZW8tbGlzdCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFtcbiAgICAgICAgICAgICdkb2NzLWNsYXNzaGllcmFyY2h5LXRyZWVsaXN0JyxcbiAgICAgICAgICAgICduZW8tbGlzdC1jb250YWluZXInLFxuICAgICAgICAgICAgJ25lby10cmVlLWxpc3QnLFxuICAgICAgICAgICAgJ25lby1saXN0J1xuICAgICAgICBdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hvd0NvbGxhcHNlRXhwYW5kQWxsSWNvbnM9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHNob3dDb2xsYXBzZUV4cGFuZEFsbEljb25zOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBzdHJ1Y3R1cmVEYXRhPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHN0cnVjdHVyZURhdGE6IG51bGxcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5jcmVhdGVTdG9yZUl0ZW1zKCk7XG4gICAgICAgIG1lLmNyZWF0ZUl0ZW1zKG51bGwsIG1lLmdldExpc3RJdGVtc1Jvb3QoKSwgMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBjcmVhdGVTdG9yZUl0ZW1zKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjbGFzc05hbWUgICAgID0gbWUuc3RydWN0dXJlRGF0YS5jbGFzc05hbWUsXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyID0gbWUudXAoJ21haW4tY29udGFpbmVyJyksXG4gICAgICAgICAgICBtYWluU3RvcmUgICAgID0gbWFpbkNvbnRhaW5lci5zdG9yZSxcbiAgICAgICAgICAgIHN0b3JlSXRlbXMgICAgPSBbXSxcbiAgICAgICAgICAgIHRtcEl0ZW1zICAgICAgPSBbXSxcbiAgICAgICAgICAgIGl0ZW0sIHBhcmVudElkO1xuXG4gICAgICAgIGl0ZW0gPSBtYWluU3RvcmUuZmluZCh7XG4gICAgICAgICAgICAka2luZCAgICAgICA6IGNsYXNzTmFtZSA9PT0gJ05lbycgPyAnbW9kdWxlJyA6ICdjbGFzcycsXG4gICAgICAgICAgICBuZW9DbGFzc05hbWU6IG1lLnN0cnVjdHVyZURhdGEuY2xhc3NOYW1lXG4gICAgICAgIH0pWzBdO1xuXG4gICAgICAgIHRtcEl0ZW1zLnVuc2hpZnQoaXRlbSk7XG5cbiAgICAgICAgd2hpbGUgKGl0ZW0gJiYgaXRlbS5oYXNPd25Qcm9wZXJ0eSgnYXVnbWVudHMnKSkge1xuICAgICAgICAgICAgaXRlbSA9IG1haW5TdG9yZS5maW5kKHtcbiAgICAgICAgICAgICAgICAka2luZCAgICAgICA6ICdjbGFzcycsXG4gICAgICAgICAgICAgICAgbmVvQ2xhc3NOYW1lOiBpdGVtLmF1Z21lbnRzWzBdXG4gICAgICAgICAgICB9KVswXTtcblxuICAgICAgICAgICAgdG1wSXRlbXMudW5zaGlmdChpdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRtcEl0ZW1zLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRJZCA9IHRtcEl0ZW1zW2luZGV4IC0gMV0gPyB0bXBJdGVtc1tpbmRleCAtIDFdLmlkIDogbnVsbDtcblxuICAgICAgICAgICAgICAgIHN0b3JlSXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBpZCAgICAgIDoga2V5LmlkLFxuICAgICAgICAgICAgICAgICAgICBpc0xlYWYgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZSAgICA6IGtleS5uZW9DbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudElkOiBwYXJlbnRJZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5zdG9yZS5pdGVtcyA9IHN0b3JlSXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjb3JkXG4gICAgICovXG4gICAgb25MZWFmSXRlbUNsaWNrKHJlY29yZCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdm5vZGVJZCAgPSBtZS5nZXRJdGVtSWQocmVjb3JkLmlkKSxcbiAgICAgICAgICAgIHZkb20gICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIHZkb21Ob2RlID0gbWUuZ2V0VmRvbUNoaWxkKHZub2RlSWQpO1xuXG4gICAgICAgIE5lb0FycmF5W3JlY29yZC5jaGVja2VkID8gJ2FkZCcgOiAncmVtb3ZlJ10odmRvbU5vZGUuY2xzLCAndW5jaGVja2VkJyk7XG5cbiAgICAgICAgcmVjb3JkLmNoZWNrZWQgPSAhcmVjb3JkLmNoZWNrZWQ7XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgbWUuZmlyZSgncmVmcmVzaENsYXNzTWVtYmVycycpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGllcmFyY2h5VHJlZUxpc3QpO1xuXG5leHBvcnQge0hpZXJhcmNoeVRyZWVMaXN0IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb250YWluZXIgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBIZWFkZXJDb21wb25lbnQgICAgICAgICBmcm9tICcuL0hlYWRlckNvbXBvbmVudC5tanMnO1xuaW1wb3J0IEhpZXJhcmNoeVRyZWVMaXN0ICAgICAgIGZyb20gJy4vSGllcmFyY2h5VHJlZUxpc3QubWpzJztcbmltcG9ydCBNYWluQ29udGFpbmVyQ29udHJvbGxlciBmcm9tICcuL01haW5Db250YWluZXJDb250cm9sbGVyLm1qcyc7XG5pbXBvcnQgTWVtYmVyc0xpc3QgICAgICAgICAgICAgZnJvbSAnLi9NZW1iZXJzTGlzdC5tanMnO1xuaW1wb3J0IFBhbmVsICAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250YWluZXIvUGFuZWwubWpzJztcbmltcG9ydCBTZWFyY2hGaWVsZCAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9TZWFyY2gubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy5hcHAudmlldy5jbGFzc2RldGFpbHMuTWFpbkNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5CYXNlXG4gKi9cbmNsYXNzIE1haW5Db250YWluZXIgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLmFwcC52aWV3LmNsYXNzZGV0YWlscy5NYWluQ29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLmFwcC52aWV3LmNsYXNzZGV0YWlscy5NYWluQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NsYXNzZGV0YWlscy1tYWluY29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NsYXNzZGV0YWlscy1tYWluY29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tZG9jcy1jbGFzc2RldGFpbHMtbWFpbmNvbnRhaW5lcicsICduZW8tY29udGFpbmVyJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tZG9jcy1jbGFzc2RldGFpbHMtbWFpbmNvbnRhaW5lcicsICduZW8tY29udGFpbmVyJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29udHJvbGxlci5Db21wb25lbnR9IGNvbnRyb2xsZXI9TWFpbkNvbnRhaW5lckNvbnRyb2xsZXJcbiAgICAgICAgICovXG4gICAgICAgIGNvbnRyb2xsZXI6IE1haW5Db250YWluZXJDb250cm9sbGVyLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsYXlvdXQ9e250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBzdHJ1Y3R1cmVEYXRhPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHN0cnVjdHVyZURhdGE6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gaXRlbXM9Wy8vLi4uXV1cbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgIF9jbHMgIDogWyduZW8tZG9jcy1jbGFzc2RldGFpbHMtaGVhZGVyY29udGFpbmVyJ10sXG4gICAgICAgICAgICBmbGV4ICA6ICcwIDEgYXV0bycsXG4gICAgICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcblxuICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgbW9kdWxlIDogUGFuZWwsXG4gICAgICAgICAgICAgICAgY2xzICAgIDogWyduZW8tZG9jcy1jbGFzc2RldGFpbHMtaGVhZGVycGFuZWwnLCAnbmVvLXBhbmVsJywgJ25lby1jb250YWluZXInXSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBbe1xuICAgICAgICAgICAgICAgICAgICBkb2NrIDogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7Ym9yZGVyV2lkdGg6IDB9LFxuICAgICAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIgIDogJ29uU2Nyb2xsSW50b1ZpZXcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAnc2hvd0NvbmZpZ3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luUmlnaHQ6ICc1cHgnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0NvbmZpZ3MnXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIgIDogJ29uU2Nyb2xsSW50b1ZpZXcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAnc2hvd01ldGhvZHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luUmlnaHQ6ICc1cHgnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ01ldGhvZHMnXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIgIDogJ29uU2Nyb2xsSW50b1ZpZXcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAnc2hvd0V2ZW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdFdmVudHMnXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXggOiAxXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZSAgICAgICAgIDogU2VhcmNoRmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgICAgICA6IHtjaGFuZ2U6ICdvblNlYXJjaEZpZWxkQ2hhbmdlJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlclRleHQ6ICdGaWx0ZXIgTWVtYmVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCAgICAgICAgICA6IDE2MCxcblxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4gICAgIDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzVweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcCA6ICcycHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIgIDogJ29uVG9nZ2xlTWVtYmVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xzICA6ICdmYSBmYS1jaGVjay1zcXVhcmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAnc2hvd1ByaXZhdGVNZW1iZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpblJpZ2h0OiAnNXB4J30sXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdQcml2YXRlJyxcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZCAgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlciAgOiAnb25Ub2dnbGVNZW1iZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25DbHMgIDogJ2ZhIGZhLWNoZWNrLXNxdWFyZScsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICdzaG93UHJvdGVjdGVkTWVtYmVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW5SaWdodDogJzVweCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnUHJvdGVjdGVkJyxcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZCAgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlciAgOiAnb25Ub2dnbGVNZW1iZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25DbHMgIDogJ2ZhIGZhLWNoZWNrLXNxdWFyZScsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICdzaG93U3RhdGljTWVtYmVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdTdGF0aWMnXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfV0sXG5cbiAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiBIZWFkZXJDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgIGZsZXggIDogMSxcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkOiAnQGNvbmZpZzpzdHJ1Y3R1cmVEYXRhJ1xuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgICAgIDogSGllcmFyY2h5VHJlZUxpc3QsXG4gICAgICAgICAgICAgICAgZmxleCAgICAgICAgIDogJzAgMCBhdXRvJyxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aCAgICAgOiAzMzAsXG4gICAgICAgICAgICAgICAgc3RydWN0dXJlRGF0YTogJ0Bjb25maWc6c3RydWN0dXJlRGF0YSdcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogTWVtYmVyc0xpc3QsXG4gICAgICAgICAgICBmbGV4ICAgICA6IDEsXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHttdXRhdGVJdGVtczogJ29uTXV0YXRlSXRlbXMnfSxcbiAgICAgICAgICAgIHJlZmVyZW5jZTogJ2NsYXNzZGV0YWlscy1tZW1iZXJzbGlzdCdcbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyKTtcblxuZXhwb3J0IHtNYWluQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb21wb25lbnQgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250cm9sbGVyL0NvbXBvbmVudC5tanMnO1xuaW1wb3J0IFNvdXJjZVZpZXdDb21wb25lbnQgZnJvbSBcIi4vU291cmNlVmlld0NvbXBvbmVudC5tanNcIjtcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy5hcHAudmlldy5NYWluQ29udGFpbmVyQ29udHJvbGxlclxuICogQGV4dGVuZHMgTmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50XG4gKi9cbmNsYXNzIE1haW5Db250YWluZXJDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy5hcHAudmlldy5jbGFzc2RldGFpbHMuTWFpbkNvbnRhaW5lckNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0RvY3MuYXBwLnZpZXcuY2xhc3NkZXRhaWxzLk1haW5Db250YWluZXJDb250cm9sbGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2RvY3MtY2xhc3NkZXRhaWxzLW1haW5jb250YWluZXItY29udHJvbGxlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdkb2NzLWNsYXNzZGV0YWlscy1tYWluY29udGFpbmVyLWNvbnRyb2xsZXInXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkhlYWRlckNsaWNrKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgcmVjb3JkICAgICAgICAgICAgICA9IG1lLnZpZXcuc3RydWN0dXJlRGF0YSxcbiAgICAgICAgICAgIG1haW5Db250YWluZXIgICAgICAgPSBtZS52aWV3LnVwKCdtYWluLWNvbnRhaW5lcicpLFxuICAgICAgICAgICAgY29udGVudFRhYkNvbnRhaW5lciA9IG1haW5Db250YWluZXIuZG93bignZG9jcy1jb250ZW50LXRhYmNvbnRhaW5lcicpLFxuICAgICAgICAgICAgY2xhc3NOYW1lICAgICAgICAgICA9IChyZWNvcmQucGF0aCA/IHJlY29yZC5wYXRoICsgJy4nIDogJycpICsgcmVjb3JkLm5hbWU7XG5cbiAgICAgICAgY29udGVudFRhYkNvbnRhaW5lci5hZGQoe1xuICAgICAgICAgICAgbW9kdWxlICAgICAgIDogU291cmNlVmlld0NvbXBvbmVudCxcbiAgICAgICAgICAgIGlkICAgICAgICAgICA6IGNsYXNzTmFtZSArICdfX3NvdXJjZScsXG4gICAgICAgICAgICBzdHJ1Y3R1cmVEYXRhOiByZWNvcmQsXG5cbiAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1jb2RlJyxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgOiBjbGFzc05hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05lby5jb2xsZWN0aW9uLkJhc2V9IHN0b3JlXG4gICAgICovXG4gICAgb25NdXRhdGVJdGVtcyhzdG9yZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvdW50Q29uZmlncyAgICA9IDAsXG4gICAgICAgICAgICBjb3VudEV2ZW50cyAgICAgPSAwLFxuICAgICAgICAgICAgY291bnRNZXRob2RzICAgID0gMCxcbiAgICAgICAgICAgIGNvdW50UHJpdmF0ZXMgICA9IDAsXG4gICAgICAgICAgICBjb3VudFByb3RlY3RlZHMgPSAwLFxuICAgICAgICAgICAgY291bnRTdGF0aWNzICAgID0gMDtcblxuICAgICAgICBzdG9yZS5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0ua2luZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvdW50TWV0aG9kcysrO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmtpbmQgPT09ICdtZW1iZXInKSB7XG4gICAgICAgICAgICAgICAgY291bnRDb25maWdzKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvdW50RXZlbnRzKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVtLmFjY2VzcyA9PT0gJ3ByaXZhdGUnKSB7XG4gICAgICAgICAgICAgICAgY291bnRQcml2YXRlcysrO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmFjY2VzcyA9PT0gJ3Byb3RlY3RlZCcpIHtcbiAgICAgICAgICAgICAgICBjb3VudFByb3RlY3RlZHMrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZW0uc2NvcGUgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgICAgICAgICAgY291bnRTdGF0aWNzKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmdldFJlZmVyZW5jZSgnc2hvd0NvbmZpZ3MnKSAgICAgICAgIC50ZXh0ID0gJ0NvbmZpZ3MgJyAgICsgY291bnRDb25maWdzO1xuICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ3Nob3dNZXRob2RzJykgICAgICAgICAudGV4dCA9ICdNZXRob2RzICcgICArIGNvdW50TWV0aG9kcztcbiAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdzaG93RXZlbnRzJykgICAgICAgICAgLnRleHQgPSAnRXZlbnRzICcgICAgKyBjb3VudEV2ZW50cztcbiAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdzaG93UHJpdmF0ZU1lbWJlcnMnKSAgLnRleHQgPSAnUHJpdmF0ZSAnICAgKyBjb3VudFByaXZhdGVzO1xuICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ3Nob3dQcm90ZWN0ZWRNZW1iZXJzJykudGV4dCA9ICdQcm90ZWN0ZWQgJyArIGNvdW50UHJvdGVjdGVkcztcbiAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdzaG93U3RhdGljTWVtYmVycycpICAgLnRleHQgPSAnU3RhdGljICcgICAgKyBjb3VudFN0YXRpY3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uU2Nyb2xsSW50b1ZpZXcoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGJ1dHRvbiA9IE5lby5nZXRDb21wb25lbnQoZGF0YS50YXJnZXQuaWQpO1xuXG4gICAgICAgIE5lby5tYWluLmFkZG9uLkhpZ2hsaWdodEpTLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgICAgIHRleHQgICA6IGJ1dHRvbi5yZWZlcmVuY2Uuc3Vic3RyKDQpLFxuICAgICAgICAgICAgdm5vZGVJZDogbWUudmlldy52ZG9tLmlkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvblNlYXJjaEZpZWxkQ2hhbmdlKGRhdGEpIHtcbiAgICAgICAgdGhpcy5nZXRSZWZlcmVuY2UoJ2NsYXNzZGV0YWlscy1tZW1iZXJzbGlzdCcpLmZpbHRlck1lbWJlcnNRdWVyeSA9IGRhdGEudmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uVG9nZ2xlTWVtYmVycyhkYXRhKSB7XG4gICAgICAgIGxldCBidXR0b24gICAgICA9IE5lby5nZXRDb21wb25lbnQoZGF0YS50YXJnZXQuaWQpLFxuICAgICAgICAgICAgbWVtYmVyc0xpc3QgPSB0aGlzLmdldFJlZmVyZW5jZSgnY2xhc3NkZXRhaWxzLW1lbWJlcnNsaXN0Jyk7XG5cbiAgICAgICAgYnV0dG9uLmljb25DbHMgPSBidXR0b24uY2hlY2tlZCA/ICdmYSBmYS1zcXVhcmUnIDogJ2ZhIGZhLWNoZWNrLXNxdWFyZSc7XG4gICAgICAgIGJ1dHRvbi5jaGVja2VkID0gIWJ1dHRvbi5jaGVja2VkO1xuXG4gICAgICAgIG1lbWJlcnNMaXN0W2J1dHRvbi5yZWZlcmVuY2VdID0gYnV0dG9uLmNoZWNrZWQ7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyQ29udHJvbGxlcik7XG5cbmV4cG9ydCB7TWFpbkNvbnRhaW5lckNvbnRyb2xsZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2xpc3QvQmFzZS5tanMnO1xuaW1wb3J0IENvbGxlY3Rpb24gZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbGxlY3Rpb24vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLmFwcC52aWV3LmNsYXNzZGV0YWlscy5NZW1iZXJzTGlzdFxuICogQGV4dGVuZHMgTmVvLmxpc3QuQmFzZVxuICovXG5jbGFzcyBNZW1iZXJzTGlzdCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLmFwcC52aWV3LmNsYXNzZGV0YWlscy5NZW1iZXJzTGlzdCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy5hcHAudmlldy5jbGFzc2RldGFpbHMuTWVtYmVyc0xpc3QnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY2xhc3NkZXRhaWxzLW1lbWJlcnNsaXN0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NsYXNzZGV0YWlscy1tZW1iZXJzbGlzdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnZG9jcy1jbGFzc2hpZXJhcmNoeS1tZW1iZXJzbGlzdCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnZG9jcy1jbGFzc2hpZXJhcmNoeS1tZW1iZXJzbGlzdCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBmaWx0ZXJNZW1iZXJzUXVlcnlfPScnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGZpbHRlck1lbWJlcnNRdWVyeV86ICcnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hvd1ByaXZhdGVNZW1iZXJzXz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBzaG93UHJpdmF0ZU1lbWJlcnNfOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hvd1Byb3RlY3RlZE1lbWJlcnNfPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHNob3dQcm90ZWN0ZWRNZW1iZXJzXzogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNob3dTdGF0aWNNZW1iZXJzXz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBzaG93U3RhdGljTWVtYmVyc186IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29sbGVjdGlvbi5CYXNlfSBzdG9yZT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzdG9yZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSB0YXJnZXRDbGFzc05hbWU9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdGFyZ2V0Q2xhc3NOYW1lOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbT17Y246IFtdfVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIGNuOiBbXVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGhpZXJhcmNoeVZpZXcgPSBtZS51cCgnY2xhc3NkZXRhaWxzLW1haW5jb250YWluZXInKS5kb3duKCdjbGFzc2hpZXJhcmNoeS10cmVlbGlzdCcpLFxuICAgICAgICAgICAgbWFpblN0b3JlICAgICA9IG1lLnVwKCdtYWluLWNvbnRhaW5lcicpLnN0b3JlO1xuXG4gICAgICAgIGhpZXJhcmNoeVZpZXcub24oe1xuICAgICAgICAgICAgcmVmcmVzaENsYXNzTWVtYmVyczogbWUub25SZWZyZXNoQ2xhc3NNZW1iZXJzLFxuICAgICAgICAgICAgc2NvcGUgICAgICAgICAgICAgIDogbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuc3RvcmUgPSBOZW8uY3JlYXRlKENvbGxlY3Rpb24sIHtcbiAgICAgICAgICAgIGZpbHRlck1vZGU6ICdhZHZhbmNlZCcsXG4gICAgICAgICAgICBzb3VyY2VJZCAgOiBtYWluU3RvcmUuaWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUub25SZWZyZXNoQ2xhc3NNZW1iZXJzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBmaWx0ZXJNZW1iZXJzUXVlcnkgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RmlsdGVyTWVtYmVyc1F1ZXJ5KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5vblJlZnJlc2hDbGFzc01lbWJlcnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc2hvd1Byb3RlY3RlZE1lbWJlcnMgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTaG93UHJvdGVjdGVkTWVtYmVycyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMub25SZWZyZXNoQ2xhc3NNZW1iZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHNob3dQcml2YXRlTWVtYmVycyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFNob3dQcml2YXRlTWVtYmVycyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMub25SZWZyZXNoQ2xhc3NNZW1iZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHNob3dTdGF0aWNNZW1iZXJzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U2hvd1N0YXRpY01lbWJlcnModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm9uUmVmcmVzaENsYXNzTWVtYmVycygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05lby5jb2xsZWN0aW9uLkJhc2V9IHN0b3JlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB2ZG9tXG4gICAgICovXG4gICAgYXBwbHlDb25maWdzSGVhZGVyKHN0b3JlLCB2ZG9tKSB7XG4gICAgICAgIGlmIChzdG9yZS5pdGVtc1swXSAmJiBzdG9yZS5pdGVtc1swXS5raW5kID09PSAnbWVtYmVyJykge1xuICAgICAgICAgICAgdmRvbS5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAvLyBzY3JvbGxpbmcgcGxhY2Vob2xkZXJcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBjbHMgICAgICA6IFsnbmVvLWRvY3MtbWVtYmVybGlzdC1ncm91cC1oZWFkZXInXSxcbiAgICAgICAgICAgICAgICBpbm5lckhUTUw6ICdDb25maWdzJyxcbiAgICAgICAgICAgICAgICAnZGF0YS1saXN0LWhlYWRlcic6ICdDb25maWdzJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHBhcmFtIHtOZW8uY29sbGVjdGlvbi5CYXNlfSBzdG9yZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXG4gICAgICogQHJldHVybnMge09iamVjdH0gdmRvbVxuICAgICAqL1xuICAgIGFwcGx5RXZlbnRzSGVhZGVyKGl0ZW0sIGluZGV4LCBzdG9yZSwgdmRvbSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBpdGVtLmtpbmQgPT09ICdldmVudCcgJiZcbiAgICAgICAgICAgIHN0b3JlLml0ZW1zW2luZGV4IC0xXSAmJlxuICAgICAgICAgICAgc3RvcmUuaXRlbXNbaW5kZXggLTFdLmtpbmQgIT09ICdldmVudCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB2ZG9tLmNuLnB1c2goe1xuICAgICAgICAgICAgICAgIC8vIHNjcm9sbGluZyBwbGFjZWhvbGRlclxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGNscyAgICAgIDogWyduZW8tZG9jcy1tZW1iZXJsaXN0LWdyb3VwLWhlYWRlciddLFxuICAgICAgICAgICAgICAgIGlubmVySFRNTDogJ0V2ZW50cycsXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7ekluZGV4OiAzfSxcbiAgICAgICAgICAgICAgICAnZGF0YS1saXN0LWhlYWRlcic6ICdFdmVudHMnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcGFyYW0ge05lby5jb2xsZWN0aW9uLkJhc2V9IHN0b3JlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB2ZG9tXG4gICAgICovXG4gICAgYXBwbHlNZXRob2RzSGVhZGVyKGl0ZW0sIGluZGV4LCBzdG9yZSwgdmRvbSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBpdGVtLmtpbmQgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAhc3RvcmUuaXRlbXNbaW5kZXggLTFdIHx8IChcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuaXRlbXNbaW5kZXggLTFdICYmXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLml0ZW1zW2luZGV4IC0xXS5raW5kICE9PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHZkb20uY24ucHVzaCh7XG4gICAgICAgICAgICAgICAgLy8gc2Nyb2xsaW5nIHBsYWNlaG9sZGVyXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgY2xzICAgICAgOiBbJ25lby1kb2NzLW1lbWJlcmxpc3QtZ3JvdXAtaGVhZGVyJ10sXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MOiAnTWV0aG9kcycsXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7ekluZGV4OiAyfSxcbiAgICAgICAgICAgICAgICAnZGF0YS1saXN0LWhlYWRlcic6ICdNZXRob2RzJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGNyZWF0ZUl0ZW1zKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGZpbHRlck1lbWJlcnNSZWdFeCA9IG5ldyBSZWdFeHAobWUuZmlsdGVyTWVtYmVyc1F1ZXJ5IHx8ICcnLCAnZ2knKSxcbiAgICAgICAgICAgIGhhc0V4YW1wbGVzICAgICAgICA9IGZhbHNlLFxuICAgICAgICAgICAgdGFyZ2V0Q2xhc3NOYW1lICAgID0gbWUudGFyZ2V0Q2xhc3NOYW1lLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGhlYWRlclRleHQsIGl0ZW1BdHRyaWJ1dGVzLCBpdGVtQ29uZmlnLCBwYXRoO1xuXG4gICAgICAgIHZkb20uY24gPSBbXTtcbiAgICAgICAgdmRvbSA9IG1lLmFwcGx5Q29uZmlnc0hlYWRlcihtZS5zdG9yZSwgdmRvbSk7XG5cbiAgICAgICAgbWUuc3RvcmUuaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHZkb20gPSBtZS5hcHBseUV2ZW50c0hlYWRlciggaXRlbSwgaW5kZXgsIG1lLnN0b3JlLCB2ZG9tKTtcbiAgICAgICAgICAgIHZkb20gPSBtZS5hcHBseU1ldGhvZHNIZWFkZXIoaXRlbSwgaW5kZXgsIG1lLnN0b3JlLCB2ZG9tKTtcblxuICAgICAgICAgICAgaXRlbUF0dHJpYnV0ZXMgPSBbXTtcblxuICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZS5zdWJzdHIoLTEpID09PSAnXycpIHtcbiAgICAgICAgICAgICAgICBpdGVtLm5hbWUgPSBpdGVtLm5hbWUuc2xpY2UoMCwgLTEpIDtcbiAgICAgICAgICAgICAgICBpdGVtQXR0cmlidXRlcy5wdXNoKCdHUycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXRlbS5uZW9DbGFzc05hbWUgIT09IHRhcmdldENsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIGl0ZW1BdHRyaWJ1dGVzLnB1c2goJ2luaGVyaXRlZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXRlbS5hY2Nlc3MgPT09ICdwcml2YXRlJyB8fCBpdGVtLmFjY2VzcyA9PT0gJ3Byb3RlY3RlZCcpIHtcbiAgICAgICAgICAgICAgICBpdGVtQXR0cmlidXRlcy5wdXNoKGl0ZW0uYWNjZXNzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZW0uc2NvcGUgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgICAgICAgICAgaXRlbUF0dHJpYnV0ZXMucHVzaCgnc3RhdGljJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhlYWRlclRleHQgPSBpdGVtLm5hbWU7XG5cbiAgICAgICAgICAgIGlmIChtZS5maWx0ZXJNZW1iZXJzUXVlcnkgIT09ICcnICYmIG1lLmZpbHRlck1lbWJlcnNRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGhlYWRlclRleHQgPSBoZWFkZXJUZXh0LnJlcGxhY2UoZmlsdGVyTWVtYmVyc1JlZ0V4LCBtYXRjaCA9PiBgPHNwYW4gY2xhc3M9XCJuZW8taGlnaGxpZ2h0LXNlYXJjaFwiPiR7bWF0Y2h9PC9zcGFuPmApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjb25maWdzXG4gICAgICAgICAgICBpZiAoaXRlbS50eXBlICYmIGl0ZW0udHlwZS5uYW1lcykge1xuICAgICAgICAgICAgICAgIGhlYWRlclRleHQgKz0gKCc6IHsnICsgTWVtYmVyc0xpc3QuZXNjYXBlSHRtbChpdGVtLnR5cGUubmFtZXMuam9pbignfCcpKSArICd9Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVtLmhhc093blByb3BlcnR5KCdkZWZhdWx0dmFsdWUnKSkge1xuICAgICAgICAgICAgICAgIGhlYWRlclRleHQgKz0gKCcgPSAnICsgaXRlbS5kZWZhdWx0dmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBtZXRob2RzXG4gICAgICAgICAgICBpZiAoaXRlbS5wYXJhbXMgJiYgaXRlbS5raW5kICE9PSAnZXZlbnQnKSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyVGV4dCArPSAoJygnICsgaXRlbS5wYXJhbXMucmVkdWNlKChyZXN1bHQsIHBhcmFtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbS5uYW1lLmluZGV4T2YoJy4nKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbS5vcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKCdbJyArIHBhcmFtLm5hbWUgKyAnXScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXJhbS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH0sIFtdKS5qb2luKCcsICcpICsgJyknKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZW0ucmV0dXJucykge1xuICAgICAgICAgICAgICAgIGhlYWRlclRleHQgKz0gKCcg4oaSIHsnICsgTWVtYmVyc0xpc3QuZXNjYXBlSHRtbChpdGVtLnJldHVybnNbMF0udHlwZS5uYW1lcy5qb2luKCd8JykgKyAnfScpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGF0aCA9IGl0ZW0ubWV0YS5wYXRoO1xuXG4gICAgICAgICAgICBpZiAocGF0aC5pbmNsdWRlcygnL25lby5tanMvJykpIHtcbiAgICAgICAgICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHIocGF0aC5pbmRleE9mKCcvbmVvLm1qcy8nKSArIDkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXRoLmluY2x1ZGVzKCcvbmVvbWpzLycpKSB7XG4gICAgICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKHBhdGguaW5kZXhPZignL25lb21qcy8nKSAgKyA4KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGF0aC5pbmNsdWRlcygnL25lby8nKSkge1xuICAgICAgICAgICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cihwYXRoLmluZGV4T2YoJy9uZW8vJykgICAgICsgNSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGl0ZW1Db25maWcgPSB7XG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby1saXN0LWl0ZW0nXSxcbiAgICAgICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgICAgIGNsczogWyduZW8tbGlzdC1pdGVtLWhlYWRlci1jb250YWluZXInXSxcbiAgICAgICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xzICAgICAgOiBbJ25lby1saXN0LWl0ZW0taGVhZGVyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IGhlYWRlclRleHRcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNscyAgICAgIDogWyduZW8tbGlzdC1pdGVtLWhlYWRlciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBpdGVtQXR0cmlidXRlcy5qb2luKCcsICcpXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBjbHM6ICduZW8tZG9jcy12aWV3LXNvdXJjZS1saW5rLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIGNuIDpbe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnICAgICAgOiAnYScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbHMgICAgICA6IFsnbmVvLWRvY3Mtdmlldy1zb3VyY2UtbGluayddLFxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZiAgICAgOiAnI3ZpZXdTb3VyY2U9JyArIGl0ZW0ubmVvQ2xhc3NOYW1lICsgJyZsaW5lPScgKyBpdGVtLm1ldGEubGluZW5vLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiAnU291cmNlOiAnICsgcGF0aCArICcvJyArIGl0ZW0ubWV0YS5maWxlbmFtZSArICcgKExpbmUgJyArIGl0ZW0ubWV0YS5saW5lbm8gKyAnKSdcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogaXRlbS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoaXRlbS5leGFtcGxlcyAmJiBpdGVtLmV4YW1wbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBoYXNFeGFtcGxlcyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBpdGVtLmV4YW1wbGVzLmZvckVhY2goZXhhbXBsZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1Db25maWcuY24ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICdwcmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZyA6ICdjb2RlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sOiBleGFtcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZW0ucGFyYW1zICYmIGl0ZW0ucGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpdGVtQ29uZmlnLmNuLnB1c2goTWVtYmVyc0xpc3QuY3JlYXRlUGFyYW1ldGVyc1RhYmxlKGl0ZW0ucGFyYW1zKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVtLnJldHVybnMgJiYgaXRlbS5raW5kICE9PSAnZXZlbnQnKSB7XG4gICAgICAgICAgICAgICAgaXRlbUNvbmZpZy5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiAnUmV0dXJucyB7JyArIE1lbWJlcnNMaXN0LmVzY2FwZUh0bWwoaXRlbS5yZXR1cm5zWzBdLnR5cGUubmFtZXMuam9pbignfCcpICsgJ30gJykgKyAoaXRlbS5yZXR1cm5zWzBdLmRlc2NyaXB0aW9uIHx8ICcnKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2ZG9tLmNuLnB1c2goaXRlbUNvbmZpZyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgIGlmIChoYXNFeGFtcGxlcykge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgTmVvLm1haW4uYWRkb24uSGlnaGxpZ2h0SlMuc3ludGF4SGlnaGxpZ2h0SW5pdCgpO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHZkb21cbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlUGFyYW1ldGVyc1RhYmxlKHBhcmFtcykge1xuICAgICAgICBsZXQgaGFzRGVmYXVsdFZhbHVlcyAgPSBmYWxzZSxcbiAgICAgICAgICAgIGhhc09wdGlvbmFsUGFyYW1zID0gZmFsc2UsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiwgbmVzdGVkUGFyYW1zLCBwYXJhbVRhYmxlO1xuXG4gICAgICAgIHBhcmFtcy5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJhbS5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdHZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICBoYXNEZWZhdWx0VmFsdWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhcmFtLmhhc093blByb3BlcnR5KCdvcHRpb25hbCcpKSB7XG4gICAgICAgICAgICAgICAgaGFzT3B0aW9uYWxQYXJhbXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBwYXJhbVRhYmxlID0ge1xuICAgICAgICAgICAgdGFnOiAndGFibGUnLFxuICAgICAgICAgICAgY2xzOiAnZG9jcy1wYXJhbS10YWJsZScsXG4gICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgdGFnOiAndGhlYWQnLFxuICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgdGFnICAgICAgOiAndGgnLFxuICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6ICdOYW1lJ1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdGFnICAgICAgOiAndGgnLFxuICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6ICdUeXBlJ1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdGFnICAgICAgOiAndGgnLFxuICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6ICdEZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoaGFzRGVmYXVsdFZhbHVlcykge1xuICAgICAgICAgICAgcGFyYW1UYWJsZS5jblswXS5jbi5zcGxpY2UoMiwgMCwge1xuICAgICAgICAgICAgICAgIHRhZyAgICAgIDogJ3RoJyxcbiAgICAgICAgICAgICAgICBpbm5lckhUTUw6ICdEZWZhdWx0J1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzT3B0aW9uYWxQYXJhbXMpIHtcbiAgICAgICAgICAgIHBhcmFtVGFibGUuY25bMF0uY24uc3BsaWNlKDIsIDAsIHtcbiAgICAgICAgICAgICAgICB0YWcgICAgICA6ICd0aCcsXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MOiAnT3B0aW9uYWwnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmFtcy5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJhbS5uYW1lLmluZGV4T2YoJy4nKSA8IDApIHsgLy8gaWdub3JlIG5lc3RlZCBwYXJhbXNcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGFnICAgICAgOiAndGQnLFxuICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IHBhcmFtLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBuZXN0ZWRQYXJhbXMgPSBbXTtcblxuICAgICAgICAgICAgICAgIHBhcmFtcy5mb3JFYWNoKHAgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocC5uYW1lLmluZGV4T2YocGFyYW0ubmFtZSArICcuJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHAgPSBOZW8uY2xvbmUocCwgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHAubmFtZSA9IHAubmFtZS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcC5uYW1lLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwLm5hbWUgPSBwLm5hbWUuam9pbignLicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXN0ZWRQYXJhbXMucHVzaChwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5lc3RlZFBhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAndGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogZGVzY3JpcHRpb24uaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgTWVtYmVyc0xpc3QuY3JlYXRlUGFyYW1ldGVyc1RhYmxlKG5lc3RlZFBhcmFtcyldXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwYXJhbVRhYmxlLmNuLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICd0cicsXG4gICAgICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZyAgICAgIDogJ3RkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogcGFyYW0ubmFtZVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWcgICAgICA6ICd0ZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IHBhcmFtLnR5cGUgPyBNZW1iZXJzTGlzdC5lc2NhcGVIdG1sKHBhcmFtLnR5cGUubmFtZXMuam9pbignIHwgJykpIDogJydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25dXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaGFzRGVmYXVsdFZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbVRhYmxlLmNuW3BhcmFtVGFibGUuY24ubGVuZ3RoIC0gMV0uY24uc3BsaWNlKDIsIDAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZyAgICAgIDogJ3RkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogcGFyYW0uZGVmYXVsdHZhbHVlID09PSB1bmRlZmluZWQgPyAnJyA6IChwYXJhbS5kZWZhdWx0dmFsdWUgKyAnJylcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGhhc09wdGlvbmFsUGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtVGFibGUuY25bcGFyYW1UYWJsZS5jbi5sZW5ndGggLSAxXS5jbi5zcGxpY2UoMiwgMCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnICAgICAgOiAndGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBwYXJhbS5vcHRpb25hbFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwYXJhbVRhYmxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzICc8JyAmICc+J1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIGVzY2FwZUh0bWwodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBmaWx0ZXJBbmRTb3J0SXRlbXMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBoaWVyYXJjaHlNYXAgICA9IHt9LFxuICAgICAgICAgICAgaGllcmFyY2h5U3RvcmUgPSBtZS51cCgnY2xhc3NkZXRhaWxzLW1haW5jb250YWluZXInKS5kb3duKCdjbGFzc2hpZXJhcmNoeS10cmVlbGlzdCcpLnN0b3JlLFxuICAgICAgICAgICAgaGllcmFyY2h5SXRlbXMgPSBoaWVyYXJjaHlTdG9yZS5pdGVtcyxcbiAgICAgICAgICAgIGkgICAgICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIHRtcEl0ZW1zICAgICAgID0gW10sXG4gICAgICAgICAgICBmaWx0ZXJzLCB0bXBJdGVtc0xlbjtcblxuICAgICAgICBoaWVyYXJjaHlJdGVtcy5mb3JFYWNoKGNscyA9PiB7XG4gICAgICAgICAgICBpZiAoY2xzLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0bXBJdGVtcy5wdXNoKGNscy5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdG1wSXRlbXNMZW4gPSB0bXBJdGVtcy5sZW5ndGg7XG5cbiAgICAgICAgZm9yICg7IGkgPCB0bXBJdGVtc0xlbjsgaSsrKSB7XG4gICAgICAgICAgICBoaWVyYXJjaHlNYXBbdG1wSXRlbXNbaV1dID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnRhcmdldENsYXNzTmFtZSA9IGhpZXJhcmNoeUl0ZW1zW2hpZXJhcmNoeUl0ZW1zLmxlbmd0aCAtMV0ubmFtZTtcblxuICAgICAgICBmaWx0ZXJzID0gW3tcbiAgICAgICAgICAgIG9wZXJhdG9yOiAnaW5jbHVkZWQnLFxuICAgICAgICAgICAgcHJvcGVydHk6ICduZW9DbGFzc05hbWUnLFxuICAgICAgICAgICAgdmFsdWUgICA6IHRtcEl0ZW1zXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG9wZXJhdG9yOiAnIT09JyxcbiAgICAgICAgICAgIHByb3BlcnR5OiAna2luZCcsXG4gICAgICAgICAgICB2YWx1ZSAgIDogJ2NsYXNzJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBvcGVyYXRvcjogJyE9PScsXG4gICAgICAgICAgICBwcm9wZXJ0eTogJ2tpbmQnLFxuICAgICAgICAgICAgdmFsdWUgICA6ICdjb25zdGFudCcgLy8gdG9kbz9cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgb3BlcmF0b3I6ICchPT0nLFxuICAgICAgICAgICAgcHJvcGVydHk6ICdraW5kJyxcbiAgICAgICAgICAgIHZhbHVlICAgOiAnbW9kdWxlJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBvcGVyYXRvcjogJ2lzVW5kZWZpbmVkJyxcbiAgICAgICAgICAgIHByb3BlcnR5OiAnaW5oZXJpdGVkJ1xuICAgICAgICB9XTtcblxuICAgICAgICBpZiAoIW1lLnNob3dQcml2YXRlTWVtYmVycykge1xuICAgICAgICAgICAgZmlsdGVycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJyE9PScsXG4gICAgICAgICAgICAgICAgcHJvcGVydHk6ICdhY2Nlc3MnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgOiAncHJpdmF0ZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFtZS5zaG93UHJvdGVjdGVkTWVtYmVycykge1xuICAgICAgICAgICAgZmlsdGVycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJyE9PScsXG4gICAgICAgICAgICAgICAgcHJvcGVydHk6ICdhY2Nlc3MnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgOiAncHJvdGVjdGVkJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW1lLnNob3dTdGF0aWNNZW1iZXJzKSB7XG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnIT09JyxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTogJ3Njb3BlJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgIDogJ3N0YXRpYydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lLmZpbHRlck1lbWJlcnNRdWVyeSAhPT0gJycgJiYgbWUuZmlsdGVyTWVtYmVyc1F1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnbGlrZScsXG4gICAgICAgICAgICAgICAgcHJvcGVydHk6ICduYW1lJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgIDogbWUuZmlsdGVyTWVtYmVyc1F1ZXJ5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZpbHRlcnMucHVzaCh7XG4gICAgICAgICAgICBzY29wZSAgIDogbWUsXG4gICAgICAgICAgICBmaWx0ZXJCeTogZnVuY3Rpb24oaXRlbSwgZmlsdGVyZWRJdGVtcywgYWxsSXRlbXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgbWUgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q2xhc3NOYW1lID0gbWUudGFyZ2V0Q2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW0sIGksIGxlbjtcblxuICAgICAgICAgICAgICAgIC8vIGFsd2F5cyBleGNsdWRlIGluaGVyaXRlZCBhbHRlcm5hdGVDbGFzc05hbWUgJiBudHlwZSBjb25maWdzXG4gICAgICAgICAgICAgICAgaWYgKChpdGVtLm5hbWUgPT09ICdhbHRlcm5hdGVDbGFzc05hbWUnIHx8IGl0ZW0ubmFtZSA9PT0gJ250eXBlJykgJiYgaXRlbS5uZW9DbGFzc05hbWUgIT09IHRhcmdldENsYXNzTmFtZVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5uZW9DbGFzc05hbWUgIT09IHRhcmdldENsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpICAgPSAwO1xuICAgICAgICAgICAgICAgICAgICBsZW4gPSBmaWx0ZXJlZEl0ZW1zLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW0gPSBmaWx0ZXJlZEl0ZW1zW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCAhPT0gZmlsdGVyZWRJdGVtLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm5hbWUgID09PSBmaWx0ZXJlZEl0ZW0ubmFtZSAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zY29wZSA9PT0gZmlsdGVyZWRJdGVtLnNjb3BlICYmIC8vIHN0YXRpYyBWUyBpbnN0YW5jZSBtZW1iZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZXJhcmNoeU1hcFtpdGVtLm5lb0NsYXNzTmFtZV0gPCBoaWVyYXJjaHlNYXBbZmlsdGVyZWRJdGVtLm5lb0NsYXNzTmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5zdG9yZS5maWx0ZXJzID0gZmlsdGVycztcblxuICAgICAgICBtZS5zdG9yZS5zb3J0ZXJzID0gW3tcbiAgICAgICAgICAgIC8vIENvbmZpZ3MgPT4gTWV0aG9kcyA9PiBFdmVudHNcbiAgICAgICAgICAgIHNvcnRCeTogZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIGEgPSBhLmtpbmQgPT09ICdtZW1iZXInID8gMCA6IGEua2luZCA9PT0gJ2Z1bmN0aW9uJyA/IDEgOiAyO1xuICAgICAgICAgICAgICAgIGIgPSBiLmtpbmQgPT09ICdtZW1iZXInID8gMCA6IGIua2luZCA9PT0gJ2Z1bmN0aW9uJyA/IDEgOiAyO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgPiBiID8gMSA6IGEgPCBiID8gLTEgOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkaXJlY3Rpb246ICdBU0MnLFxuICAgICAgICAgICAgcHJvcGVydHkgOiAnbmFtZSdcbiAgICAgICAgfV07XG5cbiAgICAgICAgbWUuZmlyZSgnbXV0YXRlSXRlbXMnLCBtZS5zdG9yZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgdG8gbm90IGNhbGwgY3JlYXRlSXRlbXMoKSBhdCB0aGlzIHBvaW50ID0+IG9uUmVmcmVzaENsYXNzTWVtYmVycygpXG4gICAgICovXG4gICAgb25TdG9yZUZpbHRlcigpIHt9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uUmVmcmVzaENsYXNzTWVtYmVycygpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJBbmRTb3J0SXRlbXMoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtcygpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWVtYmVyc0xpc3QpO1xuXG5leHBvcnQge01lbWJlcnNMaXN0IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIERvY3MuYXBwLnZpZXcuY2xhc3NkZXRhaWxzLlNvdXJjZVZpZXdDb21wb25lbnRcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBTb3VyY2VWaWV3Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy5hcHAudmlldy5jbGFzc2RldGFpbHMuU291cmNlVmlld0NvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy5hcHAudmlldy5jbGFzc2RldGFpbHMuU291cmNlVmlld0NvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjbGFzc2RldGFpbHMtc291cmNldmlld2NvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjbGFzc2RldGFpbHMtc291cmNldmlld2NvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBpc0hpZ2hsaWdodGVkXz1mYWxzZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBpc0hpZ2hsaWdodGVkXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8bnVsbH0gbGluZV89bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBsaW5lXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxudWxsfSBwcmV2aW91c0xpbmU9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBwcmV2aW91c0xpbmU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gc3RydWN0dXJlRGF0YT1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHN0cnVjdHVyZURhdGE6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHN0eWxlPSB7b3ZlcmZsb3c6ICdhdXRvJ31cbiAgICAgICAgICovXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tPXtjbjogWy8vLi4uXX1cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICB0YWc6ICdwcmUnLFxuICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgdGFnICA6ICdjb2RlJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdqYXZhc2NyaXB0J1xuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHVybCAgPSAnLi4vLi4vJyArIG1lLnN0cnVjdHVyZURhdGEuc3JjUGF0aDtcblxuICAgICAgICBOZW8uWGhyLnByb21pc2VSZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgLy8gZW5zdXJlIHdlIGFyZSBub3QgbW91bnRpbmdcbiAgICAgICAgICAgICAgICBtZS5hcHBseVNvdXJjZUNvZGUoZGF0YS5yZXNwb25zZSk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGlzSGlnaGxpZ2h0ZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRJc0hpZ2hsaWdodGVkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIE5lby5tYWluLmFkZG9uLkhpZ2hsaWdodEpTLnN5bnRheEhpZ2hsaWdodExpbmUoe1xuICAgICAgICAgICAgICAgICAgICBhZGRMaW5lICAgOiBtZS5saW5lLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVMaW5lOiBtZS5wcmV2aW91c0xpbmUsXG4gICAgICAgICAgICAgICAgICAgIHZub2RlSWQgICA6IG1lLnZkb20uY25bMF0uaWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbGluZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRMaW5lKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgbWUucHJldmlvdXNMaW5lID0gb2xkVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWUuaXNIaWdobGlnaHRlZCkge1xuICAgICAgICAgICAgbWUuYWZ0ZXJTZXRJc0hpZ2hsaWdodGVkKHRydWUsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBhcHBseVNvdXJjZUNvZGUoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbSxcbiAgICAgICAgICAgIG5vZGUgPSB2ZG9tLmNuWzBdOyAvLyBwcmUgdGFnXG5cbiAgICAgICAgbm9kZS5jblswXS5pbm5lckhUTUwgPSBkYXRhOyAvLyBjb2RlIHRhZ1xuICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG1lLnN5bnRheEhpZ2hsaWdodChub2RlLmlkKTtcbiAgICAgICAgfSwgNTApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZub2RlSWRcbiAgICAgKi9cbiAgICBzeW50YXhIaWdobGlnaHQodm5vZGVJZCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgaWQ7XG5cbiAgICAgICAgaWYgKG1lLnZub2RlKSB7XG4gICAgICAgICAgICBOZW8ubWFpbi5hZGRvbi5IaWdobGlnaHRKUy5zeW50YXhIaWdobGlnaHQoe1xuICAgICAgICAgICAgICAgIHZub2RlSWQ6IG1lLnZkb20uY25bMF0uaWRcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1lLmlzSGlnaGxpZ2h0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZCA9IG1lLm9uKCdtb3VudGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtZS51bignbW91bnRlZCcsIGlkKTtcbiAgICAgICAgICAgICAgICAgICAgbWUuc3ludGF4SGlnaGxpZ2h0KHZub2RlSWQpO1xuICAgICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhTb3VyY2VWaWV3Q29tcG9uZW50KTtcblxuZXhwb3J0IHtTb3VyY2VWaWV3Q29tcG9uZW50IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIERvY3MuYXBwLnZpZXcuY2xhc3NkZXRhaWxzLlR1dG9yaWFsQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgVHV0b3JpYWxDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLmFwcC52aWV3LmNsYXNzZGV0YWlscy5UdXRvcmlhbENvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy5hcHAudmlldy5jbGFzc2RldGFpbHMuVHV0b3JpYWxDb21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY2xhc3NkZXRhaWxzLXR1dG9yaWFsY29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NsYXNzZGV0YWlscy10dXRvcmlhbGNvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWNsYXNzZGV0YWlscy10dXRvcmlhbGNvbXBvbmVudCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWNsYXNzZGV0YWlscy10dXRvcmlhbGNvbXBvbmVudCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGZpbGVOYW1lPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGZpbGVOYW1lOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGZpbGVUeXBlPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGZpbGVUeXBlOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBzdHlsZT17b3ZlcmZsb3c6ICdhdXRvJ31cbiAgICAgICAgICovXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpc0pzb24gPSBtZS5maWxlVHlwZSA9PT0gJ2pzb24nLFxuICAgICAgICAgICAgdXJsICAgID0gJy4uLy4uL2RvY3MvdHV0b3JpYWxzLycgKyBtZS5maWxlTmFtZTtcblxuICAgICAgICBOZW8uWGhyW2lzSnNvbiA/ICdwcm9taXNlSnNvbicgOiAncHJvbWlzZVJlcXVlc3QnXSh7XG4gICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IC8vIGVuc3VyZSB3ZSBhcmUgbm90IG1vdW50aW5nXG4gICAgICAgICAgICAgICAgbWUuYXBwbHlTb3VyY2VDb2RlKGlzSnNvbiA/IGRhdGEuanNvbiA6IGRhdGEucmVzcG9uc2UpO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIGFwcGx5U291cmNlQ29kZShkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgIGlmIChtZS5maWxlVHlwZSA9PT0gJ2pzb24nKSB7XG4gICAgICAgICAgICB2ZG9tLmNuID0gZGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZkb20uaW5uZXJIVE1MID0gZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgVHV0b3JpYWxDb21wb25lbnQuc3ludGF4SGlnaGxpZ2h0KCk7XG4gICAgICAgIH0sIDUwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHN0YXRpYyBzeW50YXhIaWdobGlnaHQoKSB7XG4gICAgICAgIE5lby5tYWluLmFkZG9uLkhpZ2hsaWdodEpTLnN5bnRheEhpZ2hsaWdodEluaXQoKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFR1dG9yaWFsQ29tcG9uZW50KTtcblxuZXhwb3J0IHtUdXRvcmlhbENvbXBvbmVudCBhcyBkZWZhdWx0fTsiXSwic291cmNlUm9vdCI6IiJ9