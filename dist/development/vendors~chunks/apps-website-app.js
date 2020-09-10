self["webpackChunk"](["vendors~chunks/apps-website-app"],{

/***/ "./node_modules/neo.mjs/apps/website/app.mjs":
/*!***************************************************!*\
  !*** ./node_modules/neo.mjs/apps/website/app.mjs ***!
  \***************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/MainContainer.mjs */ "./node_modules/neo.mjs/apps/website/view/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'apps/website/',
    mainView: _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'Website'
});



/***/ }),

/***/ "./node_modules/neo.mjs/apps/website/model/BlogPost.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/website/model/BlogPost.mjs ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogPost; });
/* harmony import */ var _src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class Website.model.BlogPost
 * @extends Neo.data.Model
 */
class BlogPost extends _src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Website.model.BlogPost'
         * @protected
         */
        className: 'BlogPost.model.BlogPost',
        /**
         * @member {Object[]} fields
         * @protected
         */
        fields: [{
            name: 'author',
            type: 'String'
        }, {
            name: 'authorImage',
            type: 'String'
        }, {
            name: 'backgroundColor',
            type: 'String'
        }, {
            name: 'date',
            type: 'String'
        }, {
            name: 'id',
            type: 'Integer'
        }, {
            name: 'image',
            type: 'String'
        }, {
            name: 'name',
            type: 'String'
        }, {
            name: 'provider',
            type: 'String'
        },{
            name: 'publisher',
            type: 'String'
        }, {
            name: 'selectedInto',
            type: 'Array'
        }, {
            name: 'type',
            type: 'String'
        }, {
            name: 'url',
            type: 'String'
        }]
    }}
}

Neo.applyClassConfig(BlogPost);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/website/model/Example.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/website/model/Example.mjs ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Example; });
/* harmony import */ var _src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class Website.model.Example
 * @extends Neo.data.Model
 */
class Example extends _src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Website.model.Example'
         * @protected
         */
        className: 'BlogPost.model.Example',
        /**
         * @member {Object[]} fields
         * @protected
         */
        fields: [{
            name: 'backgroundColor',
            type: 'String'
        }, {
            name: 'browsers',
            type: 'Array'
        }, {
            name: 'environments',
            type: 'Array'
        }, {
            name: 'id',
            type: 'Integer'
        }, {
            name: 'image',
            type: 'String'
        }, {
            name: 'name',
            type: 'String'
        }, {
            name: 'sourceUrl',
            type: 'String'
        }, {
            name: 'url',
            type: 'String'
        }]
    }}
}

Neo.applyClassConfig(Example);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/website/store/BlogPosts.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/website/store/BlogPosts.mjs ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogPosts; });
/* harmony import */ var _model_BlogPost_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/BlogPost.mjs */ "./node_modules/neo.mjs/apps/website/model/BlogPost.mjs");
/* harmony import */ var _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");



/**
 * @class Website.store.BlogPosts
 * @extends Neo.data.Store
 */
class BlogPosts extends _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Website.store.BlogPosts'
         * @protected
         */
        className: 'Website.store.BlogPosts',
        /**
         * @member {String} keyProperty='id'
         */
        keyProperty: 'id',
        /**
         * @member {Neo.data.Model} model=BlogPost
         */
        model: _model_BlogPost_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
        /**
         * @member {Object[]} sorters=[{property: 'id', direction: 'DESC'}]
         */
        sorters: [{
            property : 'id',
            direction: 'DESC'
        }],
        /**
         * @member {String} url='../../apps/website/data/blog.json'
         */
        url: '../../apps/website/data/blog.json'
    }}
}

Neo.applyClassConfig(BlogPosts);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/website/store/Examples.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/website/store/Examples.mjs ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Examples; });
/* harmony import */ var _model_Example_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Example.mjs */ "./node_modules/neo.mjs/apps/website/model/Example.mjs");
/* harmony import */ var _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");



/**
 * @class Website.store.Examples
 * @extends Neo.data.Store
 */
class Examples extends _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Website.store.Examples'
         * @protected
         */
        className: 'Website.store.Examples',
        /**
         * @member {String} keyProperty='id'
         */
        keyProperty: 'id',
        /**
         * @member {Neo.data.Model} model=Example
         */
        model: _model_Example_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
        /**
         * @member {Object[]} sorters=[{property: 'id', direction: 'ASC'}]
         */
        sorters: [{
            property : 'id',
            direction: 'DESC'
        }]
    }}
}

Neo.applyClassConfig(Examples);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/website/view/HeaderContainer.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/website/view/HeaderContainer.mjs ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderContainer; });
/* harmony import */ var _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");


/**
 * @class Website.view.HeaderContainer
 * @extends Neo.container.Base
 */
class HeaderContainer extends _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Website.view.HeaderContainer'
         * @protected
         */
        className: 'Website.view.HeaderContainer',
        /**
         * @member {String[]} cls=['website-header-container']
         */
        cls: ['website-header-container'],
        /**
         * @member {Object} layout={ntype: 'hbox', align: 'stretch'}
         */
        layout: {ntype: 'fit'},
        /**
         * @member {Array} items
         */
        items: [{
            ntype    : 'component',
            reference: 'logo',

            vdom: {
                cn: [{
                    cls  : ['neo-full-size', 'neo-logo']
                }, {
                    cls: ['neo-relative'],
                    cn : [{
                        cls: ['neo-absolute', 'neo-item-bottom-position'],
                        cn : [{
                            cls : ['neo-title'],
                            html: 'neo.mjs'
                        }, {
                            cls: ['neo-inner-content'],
                            cn : [{
                                cls : ['neo-inner-details'],
                                html: 'Create multithreaded Web Apps'
                            }]
                        }]
                    }]
                }]
            }
        }, {
            ntype : 'container',
            cls   : ['website-header-buttons'],
            layout: {ntype: 'hbox', align: 'stretch'},

            itemDefaults: {
                ntype: 'button'
            },

            items: [{
                handler: 'onSwitchThemeButtonClick',
                iconCls: 'fa fa-moon'
            }, {
                iconCls: 'fab fa-github',
                url    : 'https://github.com/neomjs/neo'
            }, {
                iconCls: 'fab fa-facebook-f',
                url    : 'https://www.facebook.com/Neomjs-101788847886539/'
            }, {
                iconCls: 'fab fa-linkedin-in',
                url    : 'https://www.linkedin.com/company/26254666/'
            }, {
                iconCls: 'fab fa-twitter',
                url    : 'https://twitter.com/UhligTobias'
            }]
        }]
    }}
}

Neo.applyClassConfig(HeaderContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/website/view/MainContainer.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/website/view/MainContainer.mjs ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _blog_Container_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog/Container.mjs */ "./node_modules/neo.mjs/apps/website/view/blog/Container.mjs");
/* harmony import */ var _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _examples_List_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./examples/List.mjs */ "./node_modules/neo.mjs/apps/website/view/examples/List.mjs");
/* harmony import */ var _examples_TabContainer_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/TabContainer.mjs */ "./node_modules/neo.mjs/apps/website/view/examples/TabContainer.mjs");
/* harmony import */ var _HeaderContainer_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeaderContainer.mjs */ "./node_modules/neo.mjs/apps/website/view/HeaderContainer.mjs");
/* harmony import */ var _home_TabContainer_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/TabContainer.mjs */ "./node_modules/neo.mjs/apps/website/view/home/TabContainer.mjs");
/* harmony import */ var _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MainContainerController.mjs */ "./node_modules/neo.mjs/apps/website/view/MainContainerController.mjs");
/* harmony import */ var _src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/tab/Container.mjs */ "./node_modules/neo.mjs/src/tab/Container.mjs");
/* harmony import */ var _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");










/**
 * @class Website.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_8__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Website.view.MainContainer'
         * @protected
         */
        className: 'Website.view.MainContainer',
        /**
         * @member {Boolean} autoMount=true
         */
        autoMount: true,
        /**
         * @member {String[]} cls=['website-header-container']
         */
        cls: ['website-main-container', 'neo-viewport'],
        /**
         * @member {Neo.controller.Component} controller=MainContainerController
         */
        controller: _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_6__["default"],
        /**
         * @member {Object} layout={ntype: 'hbox', align: 'stretch'}
         */
        layout: {ntype: 'hbox', align: 'stretch'},
        /**
         * @member {Array} items
         */
        items: [{
            module: _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            cls   : ['website-center-region'],
            layout: {ntype: 'vbox', align: 'stretch'},
            items : [{
                module   : _HeaderContainer_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
                flex     : 'none',
                reference: 'header-container'
            }, {
                module   : _src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_7__["default"],
                cls      : ['website-main-tabcontainer', 'neo-tab-container'],
                flex     : 1,
                reference: 'main-tab-container',

                items: [{
                    module         : _home_TabContainer_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
                    reference      : 'home-tab-container',
                    tabButtonConfig: {
                        editRoute: false,
                        iconCls  : 'fa fa-home',
                        route    : 'mainview=home',
                        text     : 'Home'
                    }
                }, {
                    module         : _blog_Container_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
                    tabButtonConfig: {
                        editRoute: false,
                        iconCls  : 'fa fa-rss',
                        route    : 'mainview=blog',
                        text     : 'Blog'
                    }
                }, {
                    module         : _examples_TabContainer_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
                    reference      : 'examples-tab-container',
                    tabButtonConfig: {
                        editRoute: false,
                        iconCls  : 'fa fa-images',
                        route    : 'mainview=examples',
                        text     : 'Examples'
                    }
                }, {
                    module         : _examples_List_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
                    reference      : 'docs-list',
                    storeUrl       : '../../apps/website/data/docs.json',
                    tabButtonConfig: {
                        editRoute: false,
                        iconCls  : 'fa fa-hands-helping',
                        route    : 'mainview=docs',
                        text     : 'Docs'
                    }
                }]
            }]
        }]
    }}
}

Neo.applyClassConfig(MainContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/website/view/MainContainerController.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/website/view/MainContainerController.mjs ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainerController; });
/* harmony import */ var _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");
/* harmony import */ var _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Website.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Website.view.MainContainerController'
         * @protected
         */
        className: 'Website.view.MainContainerController'
    }}

    /**
     *
     * @param {Object} value
     * @param {Object} oldValue
     */
    onHashChange(value, oldValue) {
        let me               = this,
            hash             = value && value.hash,
            tabContainer     = me.getReference('main-tab-container'),
            activeChildIndex = -1,
            activeIndex      = -1,
            store;

        switch (hash.mainview) {
            case 'home':
                activeIndex = 0;

                switch (hash.childview) {
                    case 'developers':
                        activeChildIndex = 0;
                        break;
                    default:
                        activeChildIndex = 1;
                        break;
                }

                me.getReference('home-tab-container').activeIndex = activeChildIndex;
                break;
            case 'blog':
                activeIndex = 1;
                store       = me.getReference('blog-list').store;
                break;
            case 'examples':
                activeIndex = 2;

                switch (hash.childview) {
                    case 'devmode':
                        activeChildIndex = 0;
                        store            = me.getReference('examples-devmode-list').store;
                        break;
                    case 'dist_dev':
                        activeChildIndex = 1;
                        store            = me.getReference('examples-dist-dev-list').store;
                        break;
                    default:
                        activeChildIndex = 2;
                        store            = me.getReference('examples-dist-prod-list').store;
                        break;
                }

                me.getReference('examples-tab-container').activeIndex = activeChildIndex;
                break;
            case 'docs':
                activeIndex = 3;
                store       = me.getReference('docs-list').store;
                break;
        }

        if (activeIndex > -1) {
            tabContainer.activeIndex = activeIndex;
        }

        if (store && store.getCount() < 1) {
            store.load();
        }
    }

    /**
     *
     * @param {Object} data
     */
    onNavLinkClick(data) {
        const targetId = data.target.data.target;

        Neo.main.DomAccess.scrollIntoView({
            id: targetId
        }).then(() => {
            setTimeout(() => {
                Neo.main.DomAccess.setStyle({
                    id: targetId,
                    style: {
                        color: 'red'
                    }
                }).then(() => {
                    setTimeout(() => {
                        Neo.main.DomAccess.setStyle({
                            id: targetId,
                            style: {
                                color: null
                            }
                        });
                    }, 300)
                });
            }, 900)
        });
    }

    /**
     *
     * @param {Object} data
     */
    onSearchFieldChange(data) {
        this.getReference('blog-list').filterItems(data);
    }

    /**
     * @param {Object} data
     */
    onSwitchThemeButtonClick(data) {
        let me     = this,
            button = data.component,
            view   = me.view,
            cls, iconCls, theme;

        if (button.iconCls === 'fa fa-sun') {
            iconCls = 'fa fa-moon';
            theme   = 'neo-theme-light';
        } else {
            iconCls = 'fa fa-sun';
            theme   = 'neo-theme-dark';
        }

        cls = [...view.cls];

        view.cls.forEach(item => {
            if (item.includes('neo-theme')) {
                _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, item);
            }
        });

        _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, theme);
        view.cls = cls;

        button.iconCls = iconCls;
    }
}

Neo.applyClassConfig(MainContainerController);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/website/view/blog/Container.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/website/view/blog/Container.mjs ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
/* harmony import */ var _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _List_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.mjs */ "./node_modules/neo.mjs/apps/website/view/blog/List.mjs");
/* harmony import */ var _src_form_field_Search_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/form/field/Search.mjs */ "./node_modules/neo.mjs/src/form/field/Search.mjs");




/**
 * @class Website.view.blog.Container
 * @extends Neo.container.Base
 */
class Container extends _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Website.view.blog.Container'
         * @protected
         */
        className: 'Website.view.blog.Container',
        /**
         * @member {String[]} cls=['website-blog-container', 'neo-container']
         */
        cls: ['website-blog-container', 'neo-container'],
        /**
         * @member {Array} items
         */
        items: [{ //#323232
            module: _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            cls   : ['website-blog-toolbar', 'neo-container'],
            flex  : 'none',
            layout: {ntype: 'hbox', align: 'stretch'},

            items: [{
                module         : _src_form_field_Search_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
                cls            : ['website-blog-searchfield', 'neo-searchfield', 'neo-textfield'],
                listeners      : {change: 'onSearchFieldChange'},
                placeholderText: 'Filter Items',
                width          : 240
            }]
        }, {
            module   : _List_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            flex     : 1,
            reference: 'blog-list'
        }],
        /**
         * @member {Object} layout={ntype: 'vbox', align: 'stretch'}
         */
        layout: {ntype: 'vbox', align: 'stretch'}
    }}
}

Neo.applyClassConfig(Container);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/website/view/blog/List.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/website/view/blog/List.mjs ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var _src_list_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/list/Base.mjs */ "./node_modules/neo.mjs/src/list/Base.mjs");
/* harmony import */ var _store_BlogPosts_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/BlogPosts.mjs */ "./node_modules/neo.mjs/apps/website/store/BlogPosts.mjs");
/* harmony import */ var _src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");




/**
 * @class Website.view.blog.List
 * @extends Neo.list.Base
 */
class List extends _src_list_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * A regex to enforce a maxLength (word break)
         * @member {RegExp} nameRegEx
         * @protected
         * @static
         */
        nameRegEx: /^(.{65}[^\s]*).*/
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Website.view.blog.List'
         * @protected
         */
        className: 'Website.view.blog.List',
        /**
         * @member {String[]} cls=['website-blog-list','neo-list-container','neo-list']
         */
        cls: ['website-blog-list', 'neo-list-container', 'neo-list'],
        /**
         * @member {Neo.data.Store} store=BlogPosts
         */
        store: _store_BlogPosts_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]
    }}

    /**
     * @param {Object} record
     */
    createItemContent(record) {
        let basePath;

        if (Neo.config.isGitHubPages) {
            basePath = '../../../../resources/website';

            if (!Neo.config.isExperimental) {
                basePath = '../../' + basePath;
            }
        } else {
            basePath = 'https://raw.githubusercontent.com/neomjs/pages/master/resources/website';
        }

        const vdomCn = [{
            cls: ['content'],
            cn : [{
                cls  : ['neo-full-size', 'preview-image'],
                style: {
                    backgroundImage: `url('${basePath}/blog/${record.image}'), linear-gradient(#777, #333)`
                }
            }, {
                cls: ['neo-relative'],
                cn : [{
                    cls: ['neo-absolute', 'neo-item-bottom-position'],
                    cn : [{
                        cls   : ['neo-title'],
                        href  : record.url,
                        tag   : 'a',
                        target: '_blank',
                        cn    : [{
                            flag: 'name',
                            html: record.name.replace(List.nameRegEx, "$1")
                        }]
                    }, {
                        cls: ['neo-top-20'],
                        cn : [{
                            tag: 'img',
                            cls: ['neo-user-image'],
                            src: `${basePath}/blogAuthor/${record.authorImage}`
                        }, {
                            cls: ['neo-inner-content'],
                            cn : [{
                                cls : ['neo-inner-details'],
                                flag: 'author',
                                cn  : [{
                                    cls : ['neo-bold'],
                                    tag : 'span',
                                    html: record.author
                                }]
                            }, {
                                cls : ['neo-inner-details'],
                                html: record.date
                            }]
                        }]
                    }]
                }]
            }]
        }];

        if (record.publisher.length > 0) {
            _src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getByFlag(vdomCn[0], 'author').cn.push({
                vtype: 'text',
                html : ' in '
            }, {
                cls : ['neo-bold'],
                tag : 'span',
                html: record.publisher
            });
        }

        if (record.selectedInto.length > 0) {
            vdomCn[0].cn[1].cn.unshift({
                cls: ['neo-absolute', 'neo-item-top-position'],
                cn : [{
                    html: `Officially selected by ${record.provider} into`
                }, {
                    cls : ['neo-bold'],
                    html: record.selectedInto.join('</br>')
                }]
            });
        }

        return vdomCn;
    }

    /**
     * Custom filtering logic
     * @param {Object} data
     */
    filterItems(data) {
        let me         = this,
            emptyValue = !data.value || data.value === '',
            store      = me.store,
            valueRegEx = new RegExp(data.value, 'gi'),
            vdom       = me.vdom,
            hasMatch, itemName, name, record;

        vdom.cn.forEach((item, index) => {
            hasMatch = false;
            itemName = _src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getByFlag(item, 'name');
            record   = store.getAt(index);
            name     = record.name.replace(List.nameRegEx, "$1");

            item.style = item.style || {};

            if (emptyValue) {
                itemName.html = name;
                delete item.style.display;
            } else {
                itemName.html = name.replace(valueRegEx, match => {
                    hasMatch = true;
                    return `<span class="neo-highlight-search">${match}</span>`;
                });

                if (hasMatch) {
                    delete item.style.display;
                } else {
                    item.style.display = 'none';
                }
            }
        });

        me.vdom = vdom;
    }
}

Neo.applyClassConfig(List);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/website/view/examples/List.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/website/view/examples/List.mjs ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var _src_list_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/list/Base.mjs */ "./node_modules/neo.mjs/src/list/Base.mjs");
/* harmony import */ var _store_Examples_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/Examples.mjs */ "./node_modules/neo.mjs/apps/website/store/Examples.mjs");



/**
 * @class Website.view.examples.List
 * @extends Neo.list.Base
 */
class List extends _src_list_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * A regex to enforce a maxLength (word break)
         * @member {RegExp} nameRegEx
         * @protected
         * @static
         */
        nameRegEx: /^(.{65}[^\s]*).*/
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Website.view.examples.List'
         * @protected
         */
        className: 'Website.view.examples.List',
        /**
         * @member {String[]} cls=['website-examples-list','neo-list-container','neo-list']
         */
        cls: ['website-examples-list', 'neo-list-container', 'neo-list'],
        /**
         * @member {Neo.data.Store} store=Examples
         */
        store: _store_Examples_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
        /**
         * @member {String|null} storeUrl_=null
         */
        storeUrl_: null
    }}

    /**
     * Triggered before the store config gets changed.
     * @param {Object|Neo.data.Store} value
     * @param {Object|Neo.data.Store} oldValue
     * @returns {Neo.data.Store}
     * @protected
     */
    beforeSetStore(value, oldValue) {
        if (value) {
            if (value.isClass) {
                value = {
                    module: value,
                    url   : this.storeUrl
                };
            } else if (Neo.isObject(value)) {
                value.url = this.storeUrl;
            }
        }

        return super.beforeSetStore(value, oldValue);
    }

    /**
     * @param {Object} record
     */
    createItemContent(record) {
        let basePath;

        if (Neo.config.isGitHubPages) {
            basePath = '../../../../resources/website/examples';

            if (!Neo.config.isExperimental) {
                basePath = '../../' + basePath;
            }
        } else {
            basePath = 'https://raw.githubusercontent.com/neomjs/pages/master/resources/website/examples';
        }

        return [{
            cls: ['content'],
            cn : [{
                cls  : ['neo-full-size', 'preview-image'],
                style: {
                    backgroundImage: `url('${basePath}/${record.image}'), linear-gradient(#777, #333)`
                }
            }, {
                cls: ['neo-relative'],
                cn : [{
                    cls: ['neo-absolute', 'neo-item-bottom-position'],
                    cn : [{
                        tag   : 'a',
                        cls   : ['neo-title'],
                        href  : record.url,
                        target: '_blank',
                        cn    : [{
                            html: record.name.replace(List.nameRegEx, "$1")
                        }]
                    }, {
                        cls: ['neo-top-20'],
                        cn : [{
                            tag   : 'a',
                            cls   : ['fab fa-github', 'neo-github-image'],
                            href  : record.sourceUrl,
                            target: '_blank'
                        }, {
                            cls: ['neo-inner-content'],
                            cn : [{
                                cls : ['neo-inner-details'],
                                html: record.browsers.join(', ')
                            }, {
                                cls : ['neo-inner-details'],
                                html: record.environments.join(', ')
                            }]
                        }]
                    }]
                }]
            }]
        }];
    }
}

Neo.applyClassConfig(List);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/website/view/examples/TabContainer.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/website/view/examples/TabContainer.mjs ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TabContainer; });
/* harmony import */ var _src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/tab/Container.mjs */ "./node_modules/neo.mjs/src/tab/Container.mjs");
/* harmony import */ var _List_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.mjs */ "./node_modules/neo.mjs/apps/website/view/examples/List.mjs");



/**
 * @class Website.view.examples.TabContainer
 * @extends Neo.container.Base
 */
class TabContainer extends _src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Website.view.examples.TabContainer'
         * @protected
         */
        className: 'Website.view.examples.TabContainer',
        /**
         * @member {Number} activeIndex=2
         */
        activeIndex: 2,
        /**
         * @member {Array} items
         */
        items: [{
            module         : _List_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            reference      : 'examples-devmode-list',
            storeUrl       : '../../apps/website/data/examples_devmode.json',
            tabButtonConfig: {
                iconCls: 'fa fa-chess-knight',
                route  : 'childview=devmode',
                text   : 'DevMode'
            }
        }, {
            module         : _List_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            reference      : 'examples-dist-dev-list',
            storeUrl       : '../../apps/website/data/examples_dist_dev.json',
            tabButtonConfig: {
                iconCls: 'fa fa-chess-queen',
                route  : 'childview=dist_dev',
                text   : 'dist/dev'
            }
        }, {
            module         : _List_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            reference      : 'examples-dist-prod-list',
            storeUrl       : '../../apps/website/data/examples_dist_prod.json',
            tabButtonConfig: {
                iconCls: 'fa fa-chess-king',
                route  : 'childview=dist_prod',
                text   : 'dist/prod'
            }
        }],
        /**
         * @member {String} tabBarPosition='left'
         */
        tabBarPosition: 'left',
    }}
}

Neo.applyClassConfig(TabContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/website/view/home/DeveloperIntroComponent.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/website/view/home/DeveloperIntroComponent.mjs ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeveloperIntroComponent; });
/* harmony import */ var _src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class Website.view.home.DeveloperIntroComponent
 * @extends Neo.component.Base
 */
class DeveloperIntroComponent extends _src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Website.view.home.DeveloperIntroComponent'
         * @protected
         */
        className: 'Website.view.home.DeveloperIntroComponent',
        /**
         * @member {String[]} cls=['website-intro-component']
         * @protected
         */
        cls: ['website-intro-component'],
        /**
         * @member {Object[]} domListeners
         * @protected
         */
        domListeners: [{
            click   : 'onNavLinkClick',
            delegate: '.nav-link'
        }],
        /**
         * @member {Object} vdom
         */
        vdom: {innerHTML: [
            '<h1>Content</h1>',
            '<ol>',
                '<li><a class="nav-link" data-target="exec-nav-1">Introduction</a></li>',
                '<li>',
                    '<a class="nav-link" data-target="exec-nav-2">Current pain points inside the UI sector</a>',
                    '<ul>',
                        '<li>2.1 <a class="nav-link" data-target="dev-nav-2.1">Performance</a></li>',
                        '<li>2.2 <a class="nav-link" data-target="dev-nav-2.2">Multi Browser Window Apps</a></li>',
                        '<li>2.3 <a class="nav-link" data-target="dev-nav-2.3">Developing UIs inside nodejs</a></li>',
                        '<li>2.4 <a class="nav-link" data-target="dev-nav-2.4">Scalable Architectures</a></li>',
                        '<li>2.5 <a class="nav-link" data-target="dev-nav-2.5">Memory Leaks</a></li>',
                        '<li>2.6 <a class="nav-link" data-target="dev-nav-2.6">Templates</a></li>',
                        '<li>2.7 <a class="nav-link" data-target="dev-nav-2.7">Consistent Code</a></li>',
                    '</ul>',
                '</li>',
                '<li><a class="nav-link" data-target="dev-nav-3">How to get up to speed?</a></li>',
                '<li><a class="nav-link" data-target="dev-nav-4">Join neo.mjs as a Contributor</a></li>',
                '<li><a class="nav-link" data-target="dev-nav-5">Incentives for Contributors</a></li>',
            '<ol>',
            '<h1 class="nav-target" id="dev-nav-1">1. Introduction</h1>',
            '<p>',
                'neo.mjs is the next generation UI framework for creating desktop & mobile Web Apps. ',
                'It has a very strong focus on performance and creating scalable & modular architectures. ',
                'A clean & consistent API, as well as the ability to run without any build processes, ',
                'will increase the productivity of your team, while creating better solutions at the same time.',
            '</p>',
            '<h1 class="nav-target" id="dev-nav-2">2. Current pain points inside the UI sector</h1>',
            '<ol>',
                '<li>',
                    '<b class="nav-target" id="dev-nav-2.1">Performance</b>',
                    '<p>',
                        '<b>Problem:</b> While current libraries / frameworks like Angular, React or Vue provide a reasonable performance for ',
                        'small or mostly static Apps, they lack when it comes to big Apps or complex Components. ',
                        'The problem is, that most Apps today run within a single thread (CPU), while each computer or mobile ',
                        'device has several CPUs available. Some Apps move expensive tasks into separate threads, but this ',
                        'is by far not enough.',
                    '</p>',
                    '<p>',
                        '<b>Solution:</b> Using neo.mjs, most parts of the framework as well as the Apps which you create ',
                        'with it, run inside a separate thread. This architecture leaves the main thread mostly idle, so ',
                        'it can fully concentrate on its purpose: to only manipulate the real DOM (HTML). Expensive tasks ',
                        'simply can not interfere with your animations or even freeze your UI.',
                    '</p>',
                '</li>',
                '<li>',
                    '<b class="nav-target" id="dev-nav-2.2">Multi Browser Window Apps</b>',
                    '<p>',
                        '<b>Problem:</b> Expanding Single Page Apps into multiple Browser Windows is simply impossible ',
                        'with any other library or framework out there.',
                    '</p>',
                    '<p>',
                        '<b>Solution:</b> Using neo.mjs, you can do it today. With the SharedWorkers setup, you can not ',
                        'only directly communicate between Windows, but you can move entire Component trees around, ',
                        're-using the same JS instances and no need to care about DOM events. This architecture will rock ',
                        'on mobile devices as well, as soon as the Webkit team catches up. Imagine a Native Shell using ',
                        'multiple WebViews. Take a look at:',
                    '</p>',
                    '<p>',
                        '<a target="_blank" href="https://medium.com/swlh/expanding-single-page-apps-into-multiple-browser-windows-e6d9bd155d59?source=friends_link&sk=bbfe1dada95c5674669e463f93360822">Expanding Single Page Apps into multiple Browser Windows</a>',
                    '</p>',
                '</li>',
                '<li>',
                    '<b class="nav-target" id="dev-nav-2.3">Developing UIs inside nodejs</b>',
                    '<p>',
                        '<b>Problem:</b> nodejs evolved faster than JS inside Browsers, but did not stick to W3C standards. ',
                        'Libraries / frameworks like Angular, React & Vue picked this up and moved the entire UI development ',
                        'into nodejs. This allows developers to use ES6+ features like classes & JS modules, but at an extremely ',
                        'high cost: every change inside your code base requires a build or transpilation, before you can see it. ',
                        'An entire ecosystem evolved, like hot module replacements & using source maps to reduce the pain point a bit.',
                    '</p>',
                    '<p>',
                        '<b>Solution:</b> In a couple of years, we will most likely look back at this madness and laugh. Calling it ',
                        '"a hiccup in the history of Web Development". Browsers did catch up. Using neo.mjs, you can run the Development ',
                        'Mode directly inside the Browser. No build processes or source maps needed. You can debug the real ES8+ code. ',
                        'This has saved me a lot of time already, since it is the best possible debugging experience.',
                    '</p>',
                '</li>',
                '<li>',
                    '<b class="nav-target" id="dev-nav-2.4">Scalable Architectures</b>',
                    '<p>',
                        '<b>Problem:</b> While scalability is an important item inside the backend area (Cloud), it got mostly ',
                        'ignored on the frontend side so far.',
                    '</p>',
                    '<p>',
                        '<b>Solution:</b> With the current worker setup, you already have a solid starting point. We can further enhance this, ',
                        'if needed. E.g. add a second Vdom worker, in case this one is a bottle-neck. You can stick to common ',
                        'patterns like MVC or MVVM, if you like to. You can create multiple Apps on one page and with using ',
                        'JS Modules, you can lazy load classes => packages as needed.',
                    '</p>',
                '</li>',
                '<li>',
                    '<b class="nav-target" id="dev-nav-2.5">Memory Leaks</b>',
                    '<p>',
                        '<b>Problem:</b> Destroying & re-creating Component Trees can easily lead to memory leaks. Especially in case the destruction ',
                        'logic of self created Components is not fully polished.',
                    '</p>',
                    '<p>',
                        '<b>Solution:</b> Using neo.mjs, you can easily re-use existing ',
                        'JS instances and just unmount & re-mount their (V)DOM. You can easily move Components Trees to different ',
                        'spots inside your App as well.',
                    '</p>',
                '</li>',
                '<li>',
                    '<b class="nav-target" id="dev-nav-2.6">Templates</b>',
                    '<p>',
                        '<b>Problem:</b> Close to all current libraries / frameworks out there are template driven. Developers have to create ',
                        'a compact, but very messy pseudo XML markup. Variables and methods get mixed into them, with various ',
                        'combinations of brackets. Especially complex Components like a Grid (Table) can contain over 1000 lines ',
                        'including big amounts of template if & else statements. While you can compile them at build time (e.g. Svelte), ',
                        'they are very static. Changes at runtime',
                        'this leaves',
                    '</p>',
                    '<p>',
                        '<b>Solution:</b> There are no templates inside neo.mjs. Instead, you create a JSON based virtual DOM tree ',
                        '(a bit similar to creating a simplified JSX output). You can dynamically change these structures any way ',
                        'you like to. There is no need for parsing the structures, since JS is meant to work with objects & arrays. ',
                        'The performance gain for run-time changes is significant. The best part is that you can modify the vdom tress ',
                        'exactly the same way throughout the entire Component lifecycle (e.g. before & after mounting).',
                    '</p>',
                '</li>',
                '<li>',
                    '<b class="nav-target" id="dev-nav-2.7">Consistent Code</b>',
                    '<p>',
                        '<b>Problem:</b> Especially when working with libraries (e.g. React), you don\'t get everything you need ',
                        'for creating an UI. You will need several 3rd party extensions, which won\'t provide a consistent code ',
                        'base. Another big problem is, that libraries like React do not expose a core. Component is the base class ',
                        'for everything and this makes no sense. A router, controller or utility class does not have a DOM output, ',
                        'so they really should not use Component as the base class.',
                    '</p>',
                    '<p>',
                        '<b>Solution:</b> neo.mjs is a framework, not a library. The core is exposed (core.Base). There are already ',
                        'a big amount a classes available, which follow the same design patterns & API. neo.mjs is created with a ',
                        'strong focus on being extendable. It is very easy to create new Components or other classes on your own.',
                    '</p>',
                '</li>',
            '</ol>',
            '<h1 class="nav-target" id="dev-nav-3">3. How to get up to speed?</h1>',
            '<p>',
                'As a first step, explore the Blog Posts & Examples on this page to figure out if you like the framework in general.',
            '</p>',
            '<p>',
                'Afterwards, I strongly recommend to follow the first 2 Tutorials:',
            '</p>',
            '<p>',
                '<a target="_blank" href="https://medium.com/swlh/how-to-create-a-webworkers-driven-multithreading-app-part-1-fa0cc78a4237?source=friends_link&sk=a10ca85002f5f9c3ee8c69f53c79d95f">How to create a webworkers driven multithreading App — Part 1</a>',
            '</p>',
            '<p>',
                '<a target="_blank" href="https://medium.com/swlh/how-to-create-a-webworkers-driven-multithreading-app-part-2-3c5b3c2d1adb?source=friends_link&sk=cf4b5c0e014fcfd6fc1d9845f4eb3097">How to create a webworkers driven multithreading App — Part 2</a>',
            '</p>',
            '<p>',
                'At this point, you are definitely ready to create a first neo.mjs App on your own.',
            '</p>',
            '<p>',
                'Use the neo.mjs issues tracker to create new tickets or comment on existing ones:',
            '</p>',
            '<p>',
                '<a target="_blank" href="https://github.com/neomjs/neo/issues">neo.mjs issues tracker</a>',
            '</p>',
            '<p>',
                'Join the Slack Channel for questions & feedback:',
            '</p>',
            '<p>',
                '<a target="_blank" href="https://join.slack.com/t/neotericjs/shared_invite/enQtNDk2NjEwMTIxODQ2LWRjNGQ3ZTMzODRmZGM2NDM2NzZmZTMzZmE2YjEwNDM4NDhjZDllNWY2ZDkwOWQ5N2JmZWViYjYzZTg5YjdiMDc">Slack Channel Invite Link</a>',
            '</p>',
            '<p>',
                'I am willing to help getting the first developers up to speed. For free. Don\'t miss out on this.',
            '</p>',
            '<h1 class="nav-target" id="dev-nav-4">4. Join neo.mjs as a Contributor</h1>',
            '<p>',
                'Open source projects rely on <b>your</b> support. Successful projects require contributors to bring the ideas, ',
                'innovations and collaboration required for a robust and solid project.',
            '</p>',
            '<p>',
                'Contributions do not necessarily have to be code based. While we encourage you to use the code base and contribute to it, ',
                'we can also use your help in providing other input. Some examples of helpful contributions include:',
                '<ol>',
                    '<li>Work on the source code, enhancing and improving it</li>',
                    '<li>Providing documentation content, review and editing</li>',
                    '<li>Sample application creation</li>',
                    '<li>Blog content</li>',
                    '<li>Guides and How-To docs</li>',
                '</ol>',
            '</p>',
            '<p>',
                'With your help, especially in case you are a curious and passionate developer, we can speed up the development of neo.mjs. A lot.',
            '</p>',
            '<p>',
                'To get started, make sure to join our ',
                '<a target="_blank" href="https://join.slack.com/t/neotericjs/shared_invite/enQtNDk2NjEwMTIxODQ2LWRjNGQ3ZTMzODRmZGM2NDM2NzZmZTMzZmE2YjEwNDM4NDhjZDllNWY2ZDkwOWQ5N2JmZWViYjYzZTg5YjdiMDc">Slack Channel</a>',
                ' as it is a great resource and a way to communicate with the growing neo.mjs community. ',
                'You may also comment on existing tickets which you find interesting or ',
                'create new ones as needed. Please feel free to fork the repository and create pull requests as needed.',
            '</p>',
            '<p>',
                'For more information, please review our contribution guide <a target="_blank" href="https://github.com/neomjs/neo/blob/dev/CONTRIBUTING.md">here</a>.',
            '</p>',
            '<h1 class="nav-target" id="dev-nav-5">5. Incentives for Contributors</h1>',
            '<p>',
                'The neo.mjs project is in its infancy, but growing every day in both content and exposure. We firmly believe that neo.mjs ',
                'will gain traction and adoption as it matures and this is where your contributions don\'t end with just source code and ',
                'content. Your active participation in sharing your experiences and knowledge of neo.mjs is crucial to its growth. ',
            '</p>',
            '<p>',
                'Additionally, actively contributing to open source projects increases your exposure to different projects and gives you ',
                'more experience in code design and collaborating with other developers. This is a much sought after skill set for employers ',
                'and gives you better professional credit. This experience can also result in better salaries for you as an employee, or ',
                'better hourly rates for you as a contractor.',
            '</p>',
            '<p>',
                'As neo.mjs grows and adoption increases, there will be projects and jobs requiring skilled and experienced neo.mjs developers. ',
                'While it can be very hard to get a reputation of being a skilled Angular, React or Vue developer (primarily because of the ', 
                'established large developer community) it will be the pioneer contributors and adopters of neo.mjs who will gain reputation ',
                'as being an expert in this framework.',
            '</p>',
            '<p>',
                'We plan on creating a <b>Certified Developer</b> program and those who show a true interest in being a contributor and ',
                'ambassador for neo.mjs will be the first to receive such certification. This will be our way of thanking you for your work and ',
                'dedication to neo.mjs.',
            '</p>',
            '<p>',
                'And finally, if you have had the chance to read the Executives\' Introduction, you will also know that we plan on ',
                'creating jobs and contractor positions when we get financially sustainable. Of course, we will be looking to our ',
                'contributors first to fulfill these positions.',
            '</p>',
            '<p>',
                'Thank you for taking the time to read this and we look forward to the future of neo.mjs and your participation in it!',
            '</p>',
        ].join('')}
    }}
}

Neo.applyClassConfig(DeveloperIntroComponent);




/***/ }),

/***/ "./node_modules/neo.mjs/apps/website/view/home/ExecutiveIntroComponent.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/website/view/home/ExecutiveIntroComponent.mjs ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExecutiveIntroComponent; });
/* harmony import */ var _src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class Website.view.home.ExecutiveIntroComponent
 * @extends Neo.component.Base
 */
class ExecutiveIntroComponent extends _src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Website.view.home.ExecutiveIntroComponent'
         * @protected
         */
        className: 'Website.view.home.ExecutiveIntroComponent',
        /**
         * @member {String[]} cls=['website-intro-component']
         * @protected
         */
        cls: ['website-intro-component'],
        /**
         * @member {Object[]} domListeners
         * @protected
         */
        domListeners: [{
            click   : 'onNavLinkClick',
            delegate: '.nav-link'
        }],
        /**
         * For dynamic structures, you would use the JSON based syntax
         * @member {Object} vdom
         */
        vdom: {innerHTML: [
            '<h1>Content</h1>',
            '<ol>',
                '<li><a class="nav-link" data-target="exec-nav-1">Introduction</a></li>',
                '<li>',
                    '<a class="nav-link" data-target="exec-nav-2">Current pain points inside the UI sector</a>',
                    '<ul>',
                        '<li>2.1 <a class="nav-link" data-target="exec-nav-2.1">Performance</a></li>',
                        '<li>2.2 <a class="nav-link" data-target="exec-nav-2.2">Multi Browser Window Apps</a></li>',
                        '<li>2.3 <a class="nav-link" data-target="exec-nav-2.3">Developing UIs inside nodejs</a></li>',
                        '<li>2.4 <a class="nav-link" data-target="exec-nav-2.4">Scalable Architectures</a></li>',
                        '<li>2.5 <a class="nav-link" data-target="exec-nav-2.5">Memory Leaks</a></li>',
                        '<li>2.6 <a class="nav-link" data-target="exec-nav-2.6">No Templates</a></li>',
                        '<li>2.7 <a class="nav-link" data-target="exec-nav-2.7">Consistent Code</a></li>',
                    '</ul>',
                '</li>',
                '<li><a class="nav-link" data-target="exec-nav-3">Sponsorship</a></li>',
                '<li>',
                    '<a class="nav-link" data-target="exec-nav-4">The planned Business Model (BaaS)</a>',
                '<ul>',
                    '<li>4.1 <a class="nav-link" data-target="exec-nav-4.1">Professional Services</a></li>',
                    '<li>4.2 <a class="nav-link" data-target="exec-nav-4.2">Trainings</a></li>',
                    '<li>4.3 <a class="nav-link" data-target="exec-nav-4.3">Support</a></li>',
                    '<li>4.4 <a class="nav-link" data-target="exec-nav-4.4">Developer Certifications</a></li>',
                    '</ul>',
                '</li>',
                '<li><a class="nav-link" data-target="exec-nav-5">You can influence the neo.mjs roadmap</a></li>',
                '<li><a class="nav-link" data-target="exec-nav-6">Do you need help creating a prototype App for your use case?</a></li>',
                '<li><a class="nav-link" data-target="exec-nav-7">What is the long term goal?</a></li>',
                '<li><a class="nav-link" data-target="exec-nav-8">Can I join as an investor?</a></li>',
                '<li><a class="nav-link" data-target="exec-nav-9">How to get in touch?</a></li>',
            '</ol>',
            '<h1 class="nav-target" id="exec-nav-1">1. Introduction</h1>',
            '<p>',
                'neo.mjs is the next generation UI framework for creating desktop & mobile Web Apps. ',
                'It has a very strong focus on performance and creating scalable & modular architectures. ',
                'A clean & consistent API, as well as the ability to run without any build processes, ',
                'will increase the productivity of your team, while creating better solutions at the same time.',
            '</p>',
            '<h1 class="nav-target" id="exec-nav-2">2. Current pain points inside the UI sector</h1>',
            '<ol>',
                '<li>',
                    '<b class="nav-target" id="exec-nav-2.1">Performance</b>',
                    '<p>',
                        '<b>Problem:</b> While current libraries / frameworks like Angular, React or Vue provide a reasonable performance for ',
                        'small or mostly static Apps, they lack when it comes to big Apps or complex Components. ',
                        'The problem is, that most Apps today run within a single thread (CPU), while each computer or mobile ',
                        'device has several CPUs available. Some Apps move expensive tasks into separate threads, but this ',
                        'is by far not enough.',
                    '</p>',
                    '<p>',
                        '<b>Solution:</b> Using neo.mjs, most parts of the framework as well as the Apps which you create ',
                        'with it, run inside a separate thread. This architecture leaves the main thread mostly idle, so ',
                        'it can fully concentrate on its purpose: to only manipulate the real DOM (HTML). Expensive tasks ',
                        'simply can not interfere with your animations or even freeze your UI.',
                    '</p>',
                '</li>',
                '<li>',
                    '<b class="nav-target" id="exec-nav-2.2">Multi Browser Window Apps</b>',
                    '<p>',
                        '<b>Problem:</b> Expanding Single Page Apps into multiple Browser Windows is simply impossible ',
                        'with any other library or framework out there.',
                    '</p>',
                    '<p>',
                        '<b>Solution:</b> Using neo.mjs, you can do it today. With the SharedWorkers setup, you can not ',
                        'only directly communicate between Windows, but you can move entire Component trees around, ',
                        're-using the same JS instances and no need to care about DOM events. This architecture will rock ',
                        'on mobile devices as well, as soon as the Webkit team catches up. Imagine a Native Shell using ',
                        'multiple WebViews. Take a look at:',
                    '</p>',
                    '<p>',
                        '<a target="_blank" href="https://medium.com/swlh/expanding-single-page-apps-into-multiple-browser-windows-e6d9bd155d59?source=friends_link&sk=bbfe1dada95c5674669e463f93360822">Expanding Single Page Apps into multiple Browser Windows</a>',
                    '</p>',
               '</li>',
                '<li>',
                    '<b class="nav-target" id="exec-nav-2.3">Developing UIs inside nodejs</b>',
                    '<p>',
                        '<b>Problem:</b> nodejs evolved faster than JS inside Browsers, but did not stick to W3C standards. ',
                        'Libraries / frameworks like Angular, React & Vue picked this up and moved the entire UI development ',
                        'into nodejs. This allows developers to use ES6+ features like classes & JS modules, but at an extremely ',
                        'high cost: every change inside your code base requires a build or transpilation, before you can see it. ',
                        'An entire ecosystem evolved, like hot module replacements & using source maps to reduce the pain point a bit.',
                    '</p>',
                    '<p>',
                        '<b>Solution:</b> In a couple of years, we will most likely look back at this madness and laugh. Calling it ',
                        '"a hiccup in the history of Web Development". Browsers did catch up. Using neo.mjs, you can run the Development ',
                        'Mode directly inside the Browser. No build processes or source maps needed. You can debug the real ES8+ code. ',
                        'This has saved me a lot of time already, since it is the best possible debugging experience.',
                    '</p>',
                '</li>',
                '<li>',
                    '<b class="nav-target" id="exec-nav-2.4">Scalable Architectures</b>',
                    '<p>',
                        '<b>Problem:</b> While scalability is an important item inside the backend area (Cloud), it got mostly ',
                        'ignored on the frontend side so far.',
                    '</p>',
                    '<p>',
                        '<b>Solution:</b> With the current worker setup, you already have a solid starting point. We can further enhance this, ',
                        'if needed. E.g. add a second Vdom worker, in case this one is a bottle-neck. You can stick to common ',
                        'patterns like MVC or MVVM, if you like to. You can create multiple Apps on one page and with using ',
                        'JS Modules, you can lazy load classes => packages as needed.',
                    '</p>',
                '</li>',
                '<li>',
                    '<b class="nav-target" id="exec-nav-2.5">Memory Leaks</b>',
                    '<p>',
                        '<b>Problem:</b> Destroying & re-creating Component Trees can easily lead to memory leaks. Especially in case the destruction ',
                        'logic of self created Components is not fully polished.',
                    '</p>',
                    '<p>',
                        '<b>Solution:</b> Using neo.mjs, you can easily re-use existing ',
                        'JS instances and just unmount & re-mount their (V)DOM. You can easily move Components Trees to different ',
                        'spots inside your App as well.',
                    '</p>',
                '</li>',
                '<li>',
                    '<b class="nav-target" id="exec-nav-2.6">Templates</b>',
                    '<p>',
                        '<b>Problem:</b> Close to all current libraries / frameworks out there are template driven. Developers have to create ',
                        'a compact, but very messy pseudo XML markup. Variables and methods get mixed into them, with various ',
                        'combinations of brackets. Especially complex Components like a Grid (Table) can contain over 1000 lines ',
                        'including big amounts of template if & else statements. While you can compile them at build time (e.g. Svelte), ',
                        'they are very static. Changes at runtime',
                        'this leaves',
                    '</p>',
                    '<p>',
                        '<b>Solution:</b> There are no templates inside neo.mjs. Instead, you create a JSON based virtual DOM tree ',
                        '(a bit similar to creating a simplified JSX output). You can dynamically change these structures any way ',
                        'you like to. There is no need for parsing the structures, since JS is meant to work with objects & arrays. ',
                        'The performance gain for run-time changes is significant. The best part is that you can modify the vdom tress ',
                        'exactly the same way throughout the entire Component lifecycle (e.g. before & after mounting).',
                    '</p>',
                '</li>',
                '<li>',
                    '<b class="nav-target" id="exec-nav-2.7">Consistent Code</b>',
                    '<p>',
                        '<b>Problem:</b> Especially when working with libraries (e.g. React), you don\'t get everything you need ',
                        'for creating an UI. You will need several 3rd party extensions, which won\'t provide a consistent code ',
                        'base. Another big problem is, that libraries like React do not expose a core. Component is the base class ',
                        'for everything and this makes no sense. A router, controller or utility class does not have a DOM output, ',
                        'so they really should not use Component as the base class.',
                    '</p>',
                    '<p>',
                        '<b>Solution:</b> neo.mjs is a framework, not a library. The core is exposed (core.Base). There are already ',
                        'a big amount a classes available, which follow the same design patterns & API. neo.mjs is created with a ',
                        'strong focus on being extendable. It is very easy to create new Components or other classes on your own.',
                    '</p>',
                '</li>',
            '</ol>',
            '<h1 class="nav-target" id="exec-nav-3">3. Sponsorship</h1>',
            '<p>',
                'The entire neo.mjs ecosystem, including all examples & Demo Apps is open sourced (MIT licensed). ',
                'You can use it for free. However, creating a framework of this complexity is taking a massive amount ',
                'of time and effort on my end and will continue to do so.',
            '</p>',
            '<p>',
                'Please ask yourself the following 2 questions:',
            '</p>',
            '<ol>',
                '<li>Does neo.mjs create business value for your company?</li>',
                '<li>Will it create business value for your company in the future?</li>',
            '</ol>',
            '<p>',
                'If the answer for at least one of them is "Yes", please consider supporting the project as a sponsor:',
            '</p>',
            '<p>',
                '<a target="_blank" href="https://github.com/sponsors/tobiu">Sign up as a sponsor</a>',
            '</p>',
            '<p>',
                'This will enable me to spend more time on neo.mjs, enabling me to develop new widgets, features and address bugfixes ',
                'much faster. Your company logo & link will get added to different places depending on the tier level, ',
                'which will increase your reputation inside the neo.mjs developer community.',
            '</p>',
            '<h1 class="nav-target" id="exec-nav-4">4. The planned Business Model (BaaS)</h1>',
            '<p>',
                'Business as a Service means to provide you with additional help, if needed.',
                '<ol>',
                    '<li>',
                        '<b class="nav-target" id="exec-nav-4.1">Professional Services</b></br>',
                        'In case you need help with your App development, code reviews or even new framework components, ',
                        'themes or features which do not exist yet, the PS team will be there for you. ',
                        'Remote help is available for €150/h, onsite help for €200/h (plus travel & lodging costs). ',
                        'VAT (if applicable) is not included.',
                    '</li>',
                    '<li>',
                        '<b class="nav-target" id="exec-nav-4.2">Trainings</b></br>',
                        'While you can learn using neo.mjs with following the publicly available tutorials, ',
                        'it can be a nicer and more productive learning experience to get an onsite training. ',
                        '6 - 15 attendees, 1 week (5 * 8 hours). ',
                        'I have moderated several UI framework related trainings in the past, ',
                        'so I have a very good idea on how it should work.',
                    '</li>',
                    '<li>',
                        '<b class="nav-target" id="exec-nav-4.3">Support</b></br>',
                        'In case you need a guaranteed response time for your questions & tickets, there will be support ',
                        'packages to ensure this. The exact details are not figured out yet.',
                    '</li>',
                    '<li>',
                        '<b class="nav-target" id="exec-nav-4.4">Developer Certifications</b></br>',
                        'Once there is a demand for neo.mjs developers on the job market, I would like to create a Certification Program, ',
                        'to help you identifying the most talented developers more easily.',
                    '</li>',
                '</ol>',
            '</p>',
            '<p>',
                'In case the BaaS options are interesting for you, you are very welcome to reach out to me.',
            '</p>',
            '<h1 class="nav-target" id="exec-nav-5">5. You can influence the neo.mjs roadmap</h1>',
            '<p>',
                'In my opinion, a library like React is designed to best fit the needs of Facebook. ',
                'As a true open source project, the future development of the neo.mjs framework is intended to focus on ',
                '<b>your</b> needs as good as possible. To make this happen, it is important to create new tickets or ',
                'comment on existing ones:',
            '</p>',
            '<p>',
                '<a target="_blank" href="https://github.com/neomjs/neo/issues">neo.mjs issues tracker</a>',
            '</p>',
            '<h1 class="nav-target" id="exec-nav-6">6. Do you need help creating a prototype App for your use case?</h1>',
            '<p>',
                'Figuring out if neo.mjs is a good fit for your project can be tricky. Several impressive Demo Apps ',
                'exist already, but these can obviously not cover all possible areas. In case you do need help creating a ',
                'prototype App which fits your use case, feel free to reach out. This way, you can create perfect benchmarks ',
                'on your own to compare the various framework / library options out there.',
            '</p>',
            '<h1 class="nav-target" id="exec-nav-7">7. What is the long term goal?</h1>',
            '<p>',
                'From a project perspective, the goal is to further enhance the framework (there are a lot more items on ',
                'the roadmap), to provide you with even more widgets & features.',
            '</p>',
            '<p>',
                'From a business perspective, I am not aiming for a quick exit. My goal is to create a team of 10 - 20 ',
                'full time employees (creating new jobs).',
            '</p>',
            '<p>',
                '<b>Both aspects are leading to the ultimate goal:</b></br>',
                'Creating long lasting client relationships, ',
                'to make <b>your</b> User Interface development as successful as possible.',
            '</p>',
            '<h1 class="nav-target" id="exec-nav-8">8. Can I join as an investor?</h1>',
            '<p>',
                'Right now, the preferred way to support the neo.mjs project is to sign up as a sponsor. ',
                'However, I am open minded. In case you can provide a very strong value on the business side, ',
                'we can definitely talk. I am not looking for investors who only want to drop in money.',
            '</p>',
            '<h1 class="nav-target" id="exec-nav-9">9. How to get in touch?</h1>',
            '<p>',
                'Feel free to send me a contact request or a private message on LinkedIn. ',
                'You are welcome to take a closer look into my professional experience (e.g. recommendations) as well.',
            '</p>',
            '<p>',
                '<a target="_blank" href="https://www.linkedin.com/in/tobiasuhlig/">Tobias Uhlig\'s LinkedIn Profile</a>',
            '</p>'
        ].join('')}
    }}
}

Neo.applyClassConfig(ExecutiveIntroComponent);




/***/ }),

/***/ "./node_modules/neo.mjs/apps/website/view/home/TabContainer.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/website/view/home/TabContainer.mjs ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TabContainer; });
/* harmony import */ var _src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/tab/Container.mjs */ "./node_modules/neo.mjs/src/tab/Container.mjs");
/* harmony import */ var _DeveloperIntroComponent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeveloperIntroComponent.mjs */ "./node_modules/neo.mjs/apps/website/view/home/DeveloperIntroComponent.mjs");
/* harmony import */ var _ExecutiveIntroComponent_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExecutiveIntroComponent.mjs */ "./node_modules/neo.mjs/apps/website/view/home/ExecutiveIntroComponent.mjs");




/**
 * @class Website.view.home.TabContainer
 * @extends Neo.container.Base
 */
class TabContainer extends _src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Website.view.home.TabContainer'
         * @protected
         */
        className: 'Website.view.home.TabContainer',
        /**
         * @member {Number} activeIndex=1
         */
        activeIndex: 1,
        /**
         * @member {String[]} cls=['website-home-tab-container', 'neo-tab-container'],
         * @protected
         */
        cls: ['website-home-tab-container', 'neo-tab-container'],
        /**
         * @member {Array} items
         */
        items: [{
            module         : _DeveloperIntroComponent_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            tabButtonConfig: {
                iconCls: 'fa fa-chess-pawn',
                route  : 'childview=developers',
                text   : 'For Developers'
            }
        }, {
            module         : _ExecutiveIntroComponent_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            tabButtonConfig: {
                iconCls: 'fa fa-chess-king',
                route  : 'childview=executives',
                text   : 'For Executives'
            }
        }],
        /**
         * @member {String} tabBarPosition='left'
         */
        tabBarPosition: 'left'
    }}
}

Neo.applyClassConfig(TabContainer);



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

/***/ "./node_modules/neo.mjs/src/form/field/Search.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/Search.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var _Text_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text.mjs */ "./node_modules/neo.mjs/src/form/field/Text.mjs");


/**
 * @class Neo.form.field.Search
 * @extends Neo.form.field.Text
 */
class Search extends _Text_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.Search'
         * @protected
         */
        className: 'Neo.form.field.Search',
        /**
         * @member {String} ntype='searchfield'
         * @protected
         */
        ntype: 'searchfield',
        /**
         * @member {Array} cls=['neo-searchfield', 'neo-textfield']
         */
        cls: ['neo-searchfield', 'neo-textfield'],
        /**
         * Value for the hideLabel_ textfield config
         * @member {Boolean} hideLabel=true
         */
        hideLabel: true,
        /**
         * Value for the placeholderText_ textfield config
         * @member {String} placeholderText='Search'
         */
        placeholderText: 'Search',
    }}
}

Neo.applyClassConfig(Search);



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3dlYnNpdGUvYXBwLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3dlYnNpdGUvbW9kZWwvQmxvZ1Bvc3QubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvd2Vic2l0ZS9tb2RlbC9FeGFtcGxlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3dlYnNpdGUvc3RvcmUvQmxvZ1Bvc3RzLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3dlYnNpdGUvc3RvcmUvRXhhbXBsZXMubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvd2Vic2l0ZS92aWV3L0hlYWRlckNvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy93ZWJzaXRlL3ZpZXcvTWFpbkNvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy93ZWJzaXRlL3ZpZXcvTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvd2Vic2l0ZS92aWV3L2Jsb2cvQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3dlYnNpdGUvdmlldy9ibG9nL0xpc3QubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvd2Vic2l0ZS92aWV3L2V4YW1wbGVzL0xpc3QubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvd2Vic2l0ZS92aWV3L2V4YW1wbGVzL1RhYkNvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy93ZWJzaXRlL3ZpZXcvaG9tZS9EZXZlbG9wZXJJbnRyb0NvbXBvbmVudC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy93ZWJzaXRlL3ZpZXcvaG9tZS9FeGVjdXRpdmVJbnRyb0NvbXBvbmVudC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy93ZWJzaXRlL3ZpZXcvaG9tZS9UYWJDb250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250YWluZXIvVmlld3BvcnQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL1NlYXJjaC5tanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFxRDs7QUFFckQ7QUFDQTtBQUNBLGNBQWMsK0RBQWE7QUFDM0I7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ05EO0FBQUE7QUFBQTtBQUFpRDs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkRBQUs7QUFDNUIsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUFBO0FBQUE7QUFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFNEM7Ozs7Ozs7Ozs7Ozs7QUNoUzVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUU7QUFDSDtBQUNBOztBQUVwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw4REFBUztBQUNwQyx3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE1BQU07QUFDMUI7QUFDQTtBQUNBLDZCQUE2QixvRUFBdUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw2QkFBNkIsb0VBQXVCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFBQTtBQUFBO0FBQW1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpREFBUztBQUNoQyx3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBQUE7QUFBQTtBQUE4Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaURBQUk7QUFDekIsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixNQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJ2ZW5kb3JzfmNodW5rcy9hcHBzLXdlYnNpdGUtYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSAnLi92aWV3L01haW5Db250YWluZXIubWpzJztcblxuY29uc3Qgb25TdGFydCA9ICgpID0+IE5lby5hcHAoe1xuICAgIGFwcFBhdGggOiAnYXBwcy93ZWJzaXRlLycsXG4gICAgbWFpblZpZXc6IE1haW5Db250YWluZXIsXG4gICAgbmFtZSAgICA6ICdXZWJzaXRlJ1xufSk7XG5cbmV4cG9ydCB7b25TdGFydCBhcyBvblN0YXJ0fTsiLCJpbXBvcnQgTW9kZWwgIGZyb20gJy4uLy4uLy4uL3NyYy9kYXRhL01vZGVsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFdlYnNpdGUubW9kZWwuQmxvZ1Bvc3RcbiAqIEBleHRlbmRzIE5lby5kYXRhLk1vZGVsXG4gKi9cbmNsYXNzIEJsb2dQb3N0IGV4dGVuZHMgTW9kZWwge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdXZWJzaXRlLm1vZGVsLkJsb2dQb3N0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdCbG9nUG9zdC5tb2RlbC5CbG9nUG9zdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX0gZmllbGRzXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGZpZWxkczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdhdXRob3InLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2F1dGhvckltYWdlJyxcbiAgICAgICAgICAgIHR5cGU6ICdTdHJpbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdiYWNrZ3JvdW5kQ29sb3InLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2RhdGUnLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnaW1hZ2UnLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3Byb3ZpZGVyJyxcbiAgICAgICAgICAgIHR5cGU6ICdTdHJpbmcnXG4gICAgICAgIH0se1xuICAgICAgICAgICAgbmFtZTogJ3B1Ymxpc2hlcicsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnc2VsZWN0ZWRJbnRvJyxcbiAgICAgICAgICAgIHR5cGU6ICdBcnJheSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3R5cGUnLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3VybCcsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJ1xuICAgICAgICB9XVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEJsb2dQb3N0KTtcblxuZXhwb3J0IHtCbG9nUG9zdCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgTW9kZWwgIGZyb20gJy4uLy4uLy4uL3NyYy9kYXRhL01vZGVsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFdlYnNpdGUubW9kZWwuRXhhbXBsZVxuICogQGV4dGVuZHMgTmVvLmRhdGEuTW9kZWxcbiAqL1xuY2xhc3MgRXhhbXBsZSBleHRlbmRzIE1vZGVsIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nV2Vic2l0ZS5tb2RlbC5FeGFtcGxlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdCbG9nUG9zdC5tb2RlbC5FeGFtcGxlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfSBmaWVsZHNcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgZmllbGRzOiBbe1xuICAgICAgICAgICAgbmFtZTogJ2JhY2tncm91bmRDb2xvcicsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnYnJvd3NlcnMnLFxuICAgICAgICAgICAgdHlwZTogJ0FycmF5J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZW52aXJvbm1lbnRzJyxcbiAgICAgICAgICAgIHR5cGU6ICdBcnJheSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnaW1hZ2UnLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3NvdXJjZVVybCcsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAndXJsJyxcbiAgICAgICAgICAgIHR5cGU6ICdTdHJpbmcnXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRXhhbXBsZSk7XG5cbmV4cG9ydCB7RXhhbXBsZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmxvZ1Bvc3QgZnJvbSAnLi4vbW9kZWwvQmxvZ1Bvc3QubWpzJztcbmltcG9ydCBTdG9yZSAgICBmcm9tICcuLi8uLi8uLi9zcmMvZGF0YS9TdG9yZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBXZWJzaXRlLnN0b3JlLkJsb2dQb3N0c1xuICogQGV4dGVuZHMgTmVvLmRhdGEuU3RvcmVcbiAqL1xuY2xhc3MgQmxvZ1Bvc3RzIGV4dGVuZHMgU3RvcmUge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdXZWJzaXRlLnN0b3JlLkJsb2dQb3N0cydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnV2Vic2l0ZS5zdG9yZS5CbG9nUG9zdHMnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBrZXlQcm9wZXJ0eT0naWQnXG4gICAgICAgICAqL1xuICAgICAgICBrZXlQcm9wZXJ0eTogJ2lkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5kYXRhLk1vZGVsfSBtb2RlbD1CbG9nUG9zdFxuICAgICAgICAgKi9cbiAgICAgICAgbW9kZWw6IEJsb2dQb3N0LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W119IHNvcnRlcnM9W3twcm9wZXJ0eTogJ2lkJywgZGlyZWN0aW9uOiAnREVTQyd9XVxuICAgICAgICAgKi9cbiAgICAgICAgc29ydGVyczogW3tcbiAgICAgICAgICAgIHByb3BlcnR5IDogJ2lkJyxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ0RFU0MnXG4gICAgICAgIH1dLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB1cmw9Jy4uLy4uL2FwcHMvd2Vic2l0ZS9kYXRhL2Jsb2cuanNvbidcbiAgICAgICAgICovXG4gICAgICAgIHVybDogJy4uLy4uL2FwcHMvd2Vic2l0ZS9kYXRhL2Jsb2cuanNvbidcbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCbG9nUG9zdHMpO1xuXG5leHBvcnQge0Jsb2dQb3N0cyBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgRXhhbXBsZSBmcm9tICcuLi9tb2RlbC9FeGFtcGxlLm1qcyc7XG5pbXBvcnQgU3RvcmUgICBmcm9tICcuLi8uLi8uLi9zcmMvZGF0YS9TdG9yZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBXZWJzaXRlLnN0b3JlLkV4YW1wbGVzXG4gKiBAZXh0ZW5kcyBOZW8uZGF0YS5TdG9yZVxuICovXG5jbGFzcyBFeGFtcGxlcyBleHRlbmRzIFN0b3JlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nV2Vic2l0ZS5zdG9yZS5FeGFtcGxlcydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnV2Vic2l0ZS5zdG9yZS5FeGFtcGxlcycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGtleVByb3BlcnR5PSdpZCdcbiAgICAgICAgICovXG4gICAgICAgIGtleVByb3BlcnR5OiAnaWQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmRhdGEuTW9kZWx9IG1vZGVsPUV4YW1wbGVcbiAgICAgICAgICovXG4gICAgICAgIG1vZGVsOiBFeGFtcGxlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W119IHNvcnRlcnM9W3twcm9wZXJ0eTogJ2lkJywgZGlyZWN0aW9uOiAnQVNDJ31dXG4gICAgICAgICAqL1xuICAgICAgICBzb3J0ZXJzOiBbe1xuICAgICAgICAgICAgcHJvcGVydHkgOiAnaWQnLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnREVTQydcbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhFeGFtcGxlcyk7XG5cbmV4cG9ydCB7RXhhbXBsZXMgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi8uLi9zcmMvY29udGFpbmVyL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgV2Vic2l0ZS52aWV3LkhlYWRlckNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5CYXNlXG4gKi9cbmNsYXNzIEhlYWRlckNvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1dlYnNpdGUudmlldy5IZWFkZXJDb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1dlYnNpdGUudmlldy5IZWFkZXJDb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ3dlYnNpdGUtaGVhZGVyLWNvbnRhaW5lciddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnd2Vic2l0ZS1oZWFkZXItY29udGFpbmVyJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGxheW91dD17bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDoge250eXBlOiAnZml0J30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gaXRlbXNcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgbnR5cGUgICAgOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgIHJlZmVyZW5jZTogJ2xvZ28nLFxuXG4gICAgICAgICAgICB2ZG9tOiB7XG4gICAgICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgICAgIGNscyAgOiBbJ25lby1mdWxsLXNpemUnLCAnbmVvLWxvZ28nXVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1yZWxhdGl2ZSddLFxuICAgICAgICAgICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWFic29sdXRlJywgJ25lby1pdGVtLWJvdHRvbS1wb3NpdGlvbiddLFxuICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNscyA6IFsnbmVvLXRpdGxlJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogJ25lby5tanMnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1pbm5lci1jb250ZW50J10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHMgOiBbJ25lby1pbm5lci1kZXRhaWxzJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6ICdDcmVhdGUgbXVsdGl0aHJlYWRlZCBXZWIgQXBwcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgY2xzICAgOiBbJ3dlYnNpdGUtaGVhZGVyLWJ1dHRvbnMnXSxcbiAgICAgICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuXG4gICAgICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgICAgICBudHlwZTogJ2J1dHRvbidcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvblN3aXRjaFRoZW1lQnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1tb29uJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYWIgZmEtZ2l0aHViJyxcbiAgICAgICAgICAgICAgICB1cmwgICAgOiAnaHR0cHM6Ly9naXRodWIuY29tL25lb21qcy9uZW8nXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhYiBmYS1mYWNlYm9vay1mJyxcbiAgICAgICAgICAgICAgICB1cmwgICAgOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL05lb21qcy0xMDE3ODg4NDc4ODY1MzkvJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYWIgZmEtbGlua2VkaW4taW4nLFxuICAgICAgICAgICAgICAgIHVybCAgICA6ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS8yNjI1NDY2Ni8nXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhYiBmYS10d2l0dGVyJyxcbiAgICAgICAgICAgICAgICB1cmwgICAgOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9VaGxpZ1RvYmlhcydcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGVhZGVyQ29udGFpbmVyKTtcblxuZXhwb3J0IHtIZWFkZXJDb250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJsb2dDb250YWluZXIgICAgICAgICAgIGZyb20gJy4vYmxvZy9Db250YWluZXIubWpzJztcbmltcG9ydCBDb250YWluZXIgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBFeGFtcGxlc0xpc3QgICAgICAgICAgICBmcm9tICcuL2V4YW1wbGVzL0xpc3QubWpzJztcbmltcG9ydCBFeGFtcGxlc1RhYkNvbnRhaW5lciAgICBmcm9tICcuL2V4YW1wbGVzL1RhYkNvbnRhaW5lci5tanMnO1xuaW1wb3J0IEhlYWRlckNvbnRhaW5lciAgICAgICAgIGZyb20gJy4vSGVhZGVyQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgSG9tZVRhYkNvbnRhaW5lciAgICAgICAgZnJvbSAnLi9ob21lL1RhYkNvbnRhaW5lci5tanMnO1xuaW1wb3J0IE1haW5Db250YWluZXJDb250cm9sbGVyIGZyb20gJy4vTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIubWpzJztcbmltcG9ydCBUYWJDb250YWluZXIgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvdGFiL0NvbnRhaW5lci5tanMnO1xuaW1wb3J0IFZpZXdwb3J0ICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9jb250YWluZXIvVmlld3BvcnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgV2Vic2l0ZS52aWV3Lk1haW5Db250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuVmlld3BvcnRcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lciBleHRlbmRzIFZpZXdwb3J0IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nV2Vic2l0ZS52aWV3Lk1haW5Db250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1dlYnNpdGUudmlldy5NYWluQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGF1dG9Nb3VudD10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBhdXRvTW91bnQ6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnd2Vic2l0ZS1oZWFkZXItY29udGFpbmVyJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyd3ZWJzaXRlLW1haW4tY29udGFpbmVyJywgJ25lby12aWV3cG9ydCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50fSBjb250cm9sbGVyPU1haW5Db250YWluZXJDb250cm9sbGVyXG4gICAgICAgICAqL1xuICAgICAgICBjb250cm9sbGVyOiBNYWluQ29udGFpbmVyQ29udHJvbGxlcixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbGF5b3V0PXtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgICAgICAgKi9cbiAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gaXRlbXNcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgbW9kdWxlOiBDb250YWluZXIsXG4gICAgICAgICAgICBjbHMgICA6IFsnd2Vic2l0ZS1jZW50ZXItcmVnaW9uJ10sXG4gICAgICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgICAgIGl0ZW1zIDogW3tcbiAgICAgICAgICAgICAgICBtb2R1bGUgICA6IEhlYWRlckNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICBmbGV4ICAgICA6ICdub25lJyxcbiAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICdoZWFkZXItY29udGFpbmVyJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgIDogVGFiQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgIGNscyAgICAgIDogWyd3ZWJzaXRlLW1haW4tdGFiY29udGFpbmVyJywgJ25lby10YWItY29udGFpbmVyJ10sXG4gICAgICAgICAgICAgICAgZmxleCAgICAgOiAxLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZTogJ21haW4tdGFiLWNvbnRhaW5lcicsXG5cbiAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlICAgICAgICAgOiBIb21lVGFiQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2UgICAgICA6ICdob21lLXRhYi1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRSb3V0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xzICA6ICdmYSBmYS1ob21lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICAgIDogJ21haW52aWV3PWhvbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnSG9tZSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlICAgICAgICAgOiBCbG9nQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRSb3V0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xzICA6ICdmYSBmYS1yc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgICAgOiAnbWFpbnZpZXc9YmxvZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdCbG9nJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGUgICAgICAgICA6IEV4YW1wbGVzVGFiQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2UgICAgICA6ICdleGFtcGxlcy10YWItY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0Um91dGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNscyAgOiAnZmEgZmEtaW1hZ2VzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICAgIDogJ21haW52aWV3PWV4YW1wbGVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0V4YW1wbGVzJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGUgICAgICAgICA6IEV4YW1wbGVzTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlICAgICAgOiAnZG9jcy1saXN0JyxcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVVcmwgICAgICAgOiAnLi4vLi4vYXBwcy93ZWJzaXRlL2RhdGEvZG9jcy5qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0Um91dGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNscyAgOiAnZmEgZmEtaGFuZHMtaGVscGluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSAgICA6ICdtYWludmlldz1kb2NzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0RvY3MnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyKTtcblxuZXhwb3J0IHtNYWluQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb21wb25lbnRDb250cm9sbGVyIGZyb20gJy4uLy4uLy4uL3NyYy9jb250cm9sbGVyL0NvbXBvbmVudC5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL3V0aWwvQXJyYXkubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgV2Vic2l0ZS52aWV3Lk1haW5Db250YWluZXJDb250cm9sbGVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udHJvbGxlci5Db21wb25lbnRcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnRDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nV2Vic2l0ZS52aWV3Lk1haW5Db250YWluZXJDb250cm9sbGVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdXZWJzaXRlLnZpZXcuTWFpbkNvbnRhaW5lckNvbnRyb2xsZXInXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9sZFZhbHVlXG4gICAgICovXG4gICAgb25IYXNoQ2hhbmdlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBoYXNoICAgICAgICAgICAgID0gdmFsdWUgJiYgdmFsdWUuaGFzaCxcbiAgICAgICAgICAgIHRhYkNvbnRhaW5lciAgICAgPSBtZS5nZXRSZWZlcmVuY2UoJ21haW4tdGFiLWNvbnRhaW5lcicpLFxuICAgICAgICAgICAgYWN0aXZlQ2hpbGRJbmRleCA9IC0xLFxuICAgICAgICAgICAgYWN0aXZlSW5kZXggICAgICA9IC0xLFxuICAgICAgICAgICAgc3RvcmU7XG5cbiAgICAgICAgc3dpdGNoIChoYXNoLm1haW52aWV3KSB7XG4gICAgICAgICAgICBjYXNlICdob21lJzpcbiAgICAgICAgICAgICAgICBhY3RpdmVJbmRleCA9IDA7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGhhc2guY2hpbGR2aWV3KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2RldmVsb3BlcnMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2hpbGRJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNoaWxkSW5kZXggPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdob21lLXRhYi1jb250YWluZXInKS5hY3RpdmVJbmRleCA9IGFjdGl2ZUNoaWxkSW5kZXg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdibG9nJzpcbiAgICAgICAgICAgICAgICBhY3RpdmVJbmRleCA9IDE7XG4gICAgICAgICAgICAgICAgc3RvcmUgICAgICAgPSBtZS5nZXRSZWZlcmVuY2UoJ2Jsb2ctbGlzdCcpLnN0b3JlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZXhhbXBsZXMnOlxuICAgICAgICAgICAgICAgIGFjdGl2ZUluZGV4ID0gMjtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoaGFzaC5jaGlsZHZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGV2bW9kZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDaGlsZEluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlICAgICAgICAgICAgPSBtZS5nZXRSZWZlcmVuY2UoJ2V4YW1wbGVzLWRldm1vZGUtbGlzdCcpLnN0b3JlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Rpc3RfZGV2JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNoaWxkSW5kZXggPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgICAgICAgICAgICA9IG1lLmdldFJlZmVyZW5jZSgnZXhhbXBsZXMtZGlzdC1kZXYtbGlzdCcpLnN0b3JlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDaGlsZEluZGV4ID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlICAgICAgICAgICAgPSBtZS5nZXRSZWZlcmVuY2UoJ2V4YW1wbGVzLWRpc3QtcHJvZC1saXN0Jykuc3RvcmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ2V4YW1wbGVzLXRhYi1jb250YWluZXInKS5hY3RpdmVJbmRleCA9IGFjdGl2ZUNoaWxkSW5kZXg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkb2NzJzpcbiAgICAgICAgICAgICAgICBhY3RpdmVJbmRleCA9IDM7XG4gICAgICAgICAgICAgICAgc3RvcmUgICAgICAgPSBtZS5nZXRSZWZlcmVuY2UoJ2RvY3MtbGlzdCcpLnN0b3JlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGl2ZUluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHRhYkNvbnRhaW5lci5hY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0b3JlICYmIHN0b3JlLmdldENvdW50KCkgPCAxKSB7XG4gICAgICAgICAgICBzdG9yZS5sb2FkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25OYXZMaW5rQ2xpY2soZGF0YSkge1xuICAgICAgICBjb25zdCB0YXJnZXRJZCA9IGRhdGEudGFyZ2V0LmRhdGEudGFyZ2V0O1xuXG4gICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgICBpZDogdGFyZ2V0SWRcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBOZW8ubWFpbi5Eb21BY2Nlc3Muc2V0U3R5bGUoe1xuICAgICAgICAgICAgICAgICAgICBpZDogdGFyZ2V0SWQsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JlZCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5zZXRTdHlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRhcmdldElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDkwMClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uU2VhcmNoRmllbGRDaGFuZ2UoZGF0YSkge1xuICAgICAgICB0aGlzLmdldFJlZmVyZW5jZSgnYmxvZy1saXN0JykuZmlsdGVySXRlbXMoZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvblN3aXRjaFRoZW1lQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGJ1dHRvbiA9IGRhdGEuY29tcG9uZW50LFxuICAgICAgICAgICAgdmlldyAgID0gbWUudmlldyxcbiAgICAgICAgICAgIGNscywgaWNvbkNscywgdGhlbWU7XG5cbiAgICAgICAgaWYgKGJ1dHRvbi5pY29uQ2xzID09PSAnZmEgZmEtc3VuJykge1xuICAgICAgICAgICAgaWNvbkNscyA9ICdmYSBmYS1tb29uJztcbiAgICAgICAgICAgIHRoZW1lICAgPSAnbmVvLXRoZW1lLWxpZ2h0JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGljb25DbHMgPSAnZmEgZmEtc3VuJztcbiAgICAgICAgICAgIHRoZW1lICAgPSAnbmVvLXRoZW1lLWRhcmsnO1xuICAgICAgICB9XG5cbiAgICAgICAgY2xzID0gWy4uLnZpZXcuY2xzXTtcblxuICAgICAgICB2aWV3LmNscy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uaW5jbHVkZXMoJ25lby10aGVtZScpKSB7XG4gICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIE5lb0FycmF5LmFkZChjbHMsIHRoZW1lKTtcbiAgICAgICAgdmlldy5jbHMgPSBjbHM7XG5cbiAgICAgICAgYnV0dG9uLmljb25DbHMgPSBpY29uQ2xzO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIpO1xuXG5leHBvcnQge01haW5Db250YWluZXJDb250cm9sbGVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlQ29udGFpbmVyIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9jb250YWluZXIvQmFzZS5tanMnO1xuaW1wb3J0IExpc3QgICAgICAgICAgZnJvbSAnLi9MaXN0Lm1qcyc7XG5pbXBvcnQgU2VhcmNoRmllbGQgICBmcm9tICcuLi8uLi8uLi8uLi9zcmMvZm9ybS9maWVsZC9TZWFyY2gubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgV2Vic2l0ZS52aWV3LmJsb2cuQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgQmFzZUNvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1dlYnNpdGUudmlldy5ibG9nLkNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnV2Vic2l0ZS52aWV3LmJsb2cuQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9Wyd3ZWJzaXRlLWJsb2ctY29udGFpbmVyJywgJ25lby1jb250YWluZXInXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ3dlYnNpdGUtYmxvZy1jb250YWluZXInLCAnbmVvLWNvbnRhaW5lciddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGl0ZW1zXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtczogW3sgLy8jMzIzMjMyXG4gICAgICAgICAgICBtb2R1bGU6IEJhc2VDb250YWluZXIsXG4gICAgICAgICAgICBjbHMgICA6IFsnd2Vic2l0ZS1ibG9nLXRvb2xiYXInLCAnbmVvLWNvbnRhaW5lciddLFxuICAgICAgICAgICAgZmxleCAgOiAnbm9uZScsXG4gICAgICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcblxuICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgICAgICAgOiBTZWFyY2hGaWVsZCxcbiAgICAgICAgICAgICAgICBjbHMgICAgICAgICAgICA6IFsnd2Vic2l0ZS1ibG9nLXNlYXJjaGZpZWxkJywgJ25lby1zZWFyY2hmaWVsZCcsICduZW8tdGV4dGZpZWxkJ10sXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzICAgICAgOiB7Y2hhbmdlOiAnb25TZWFyY2hGaWVsZENoYW5nZSd9LFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyVGV4dDogJ0ZpbHRlciBJdGVtcycsXG4gICAgICAgICAgICAgICAgd2lkdGggICAgICAgICAgOiAyNDBcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogTGlzdCxcbiAgICAgICAgICAgIGZsZXggICAgIDogMSxcbiAgICAgICAgICAgIHJlZmVyZW5jZTogJ2Jsb2ctbGlzdCdcbiAgICAgICAgfV0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGxheW91dD17bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ29udGFpbmVyKTtcblxuZXhwb3J0IHtDb250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2VMaXN0ICBmcm9tICcuLi8uLi8uLi8uLi9zcmMvbGlzdC9CYXNlLm1qcyc7XG5pbXBvcnQgQmxvZ1Bvc3RzIGZyb20gJy4uLy4uL3N0b3JlL0Jsb2dQb3N0cy5tanMnO1xuaW1wb3J0IFZEb21VdGlsICBmcm9tICcuLi8uLi8uLi8uLi9zcmMvdXRpbC9WRG9tLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFdlYnNpdGUudmlldy5ibG9nLkxpc3RcbiAqIEBleHRlbmRzIE5lby5saXN0LkJhc2VcbiAqL1xuY2xhc3MgTGlzdCBleHRlbmRzIEJhc2VMaXN0IHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHJlZ2V4IHRvIGVuZm9yY2UgYSBtYXhMZW5ndGggKHdvcmQgYnJlYWspXG4gICAgICAgICAqIEBtZW1iZXIge1JlZ0V4cH0gbmFtZVJlZ0V4XG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgbmFtZVJlZ0V4OiAvXiguezY1fVteXFxzXSopLiovXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdXZWJzaXRlLnZpZXcuYmxvZy5MaXN0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdXZWJzaXRlLnZpZXcuYmxvZy5MaXN0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9Wyd3ZWJzaXRlLWJsb2ctbGlzdCcsJ25lby1saXN0LWNvbnRhaW5lcicsJ25lby1saXN0J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyd3ZWJzaXRlLWJsb2ctbGlzdCcsICduZW8tbGlzdC1jb250YWluZXInLCAnbmVvLWxpc3QnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5kYXRhLlN0b3JlfSBzdG9yZT1CbG9nUG9zdHNcbiAgICAgICAgICovXG4gICAgICAgIHN0b3JlOiBCbG9nUG9zdHNcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqL1xuICAgIGNyZWF0ZUl0ZW1Db250ZW50KHJlY29yZCkge1xuICAgICAgICBsZXQgYmFzZVBhdGg7XG5cbiAgICAgICAgaWYgKE5lby5jb25maWcuaXNHaXRIdWJQYWdlcykge1xuICAgICAgICAgICAgYmFzZVBhdGggPSAnLi4vLi4vLi4vLi4vcmVzb3VyY2VzL3dlYnNpdGUnO1xuXG4gICAgICAgICAgICBpZiAoIU5lby5jb25maWcuaXNFeHBlcmltZW50YWwpIHtcbiAgICAgICAgICAgICAgICBiYXNlUGF0aCA9ICcuLi8uLi8nICsgYmFzZVBhdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBiYXNlUGF0aCA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbmVvbWpzL3BhZ2VzL21hc3Rlci9yZXNvdXJjZXMvd2Vic2l0ZSc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2ZG9tQ24gPSBbe1xuICAgICAgICAgICAgY2xzOiBbJ2NvbnRlbnQnXSxcbiAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICBjbHMgIDogWyduZW8tZnVsbC1zaXplJywgJ3ByZXZpZXctaW1hZ2UnXSxcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJyR7YmFzZVBhdGh9L2Jsb2cvJHtyZWNvcmQuaW1hZ2V9JyksIGxpbmVhci1ncmFkaWVudCgjNzc3LCAjMzMzKWBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby1yZWxhdGl2ZSddLFxuICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1hYnNvbHV0ZScsICduZW8taXRlbS1ib3R0b20tcG9zaXRpb24nXSxcbiAgICAgICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xzICAgOiBbJ25lby10aXRsZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZiAgOiByZWNvcmQudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnICAgOiAnYScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY24gICAgOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYWc6ICduYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sOiByZWNvcmQubmFtZS5yZXBsYWNlKExpc3QubmFtZVJlZ0V4LCBcIiQxXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLXRvcC0yMCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ2ltZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby11c2VyLWltYWdlJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBgJHtiYXNlUGF0aH0vYmxvZ0F1dGhvci8ke3JlY29yZC5hdXRob3JJbWFnZX1gXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1pbm5lci1jb250ZW50J10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHMgOiBbJ25lby1pbm5lci1kZXRhaWxzJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYWc6ICdhdXRob3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbiAgOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzIDogWyduZW8tYm9sZCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnIDogJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogcmVjb3JkLmF1dGhvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzIDogWyduZW8taW5uZXItZGV0YWlscyddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sOiByZWNvcmQuZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XTtcblxuICAgICAgICBpZiAocmVjb3JkLnB1Ymxpc2hlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbUNuWzBdLCAnYXV0aG9yJykuY24ucHVzaCh7XG4gICAgICAgICAgICAgICAgdnR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICBodG1sIDogJyBpbiAnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgY2xzIDogWyduZW8tYm9sZCddLFxuICAgICAgICAgICAgICAgIHRhZyA6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICBodG1sOiByZWNvcmQucHVibGlzaGVyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZWNvcmQuc2VsZWN0ZWRJbnRvLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZkb21DblswXS5jblsxXS5jbi51bnNoaWZ0KHtcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWFic29sdXRlJywgJ25lby1pdGVtLXRvcC1wb3NpdGlvbiddLFxuICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgaHRtbDogYE9mZmljaWFsbHkgc2VsZWN0ZWQgYnkgJHtyZWNvcmQucHJvdmlkZXJ9IGludG9gXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBjbHMgOiBbJ25lby1ib2xkJ10sXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6IHJlY29yZC5zZWxlY3RlZEludG8uam9pbignPC9icj4nKVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZG9tQ247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3VzdG9tIGZpbHRlcmluZyBsb2dpY1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgZmlsdGVySXRlbXMoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBlbXB0eVZhbHVlID0gIWRhdGEudmFsdWUgfHwgZGF0YS52YWx1ZSA9PT0gJycsXG4gICAgICAgICAgICBzdG9yZSAgICAgID0gbWUuc3RvcmUsXG4gICAgICAgICAgICB2YWx1ZVJlZ0V4ID0gbmV3IFJlZ0V4cChkYXRhLnZhbHVlLCAnZ2knKSxcbiAgICAgICAgICAgIHZkb20gICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgaGFzTWF0Y2gsIGl0ZW1OYW1lLCBuYW1lLCByZWNvcmQ7XG5cbiAgICAgICAgdmRvbS5jbi5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaGFzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgIGl0ZW1OYW1lID0gVkRvbVV0aWwuZ2V0QnlGbGFnKGl0ZW0sICduYW1lJyk7XG4gICAgICAgICAgICByZWNvcmQgICA9IHN0b3JlLmdldEF0KGluZGV4KTtcbiAgICAgICAgICAgIG5hbWUgICAgID0gcmVjb3JkLm5hbWUucmVwbGFjZShMaXN0Lm5hbWVSZWdFeCwgXCIkMVwiKTtcblxuICAgICAgICAgICAgaXRlbS5zdHlsZSA9IGl0ZW0uc3R5bGUgfHwge307XG5cbiAgICAgICAgICAgIGlmIChlbXB0eVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaXRlbU5hbWUuaHRtbCA9IG5hbWU7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGl0ZW0uc3R5bGUuZGlzcGxheTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbU5hbWUuaHRtbCA9IG5hbWUucmVwbGFjZSh2YWx1ZVJlZ0V4LCBtYXRjaCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGhhc01hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cIm5lby1oaWdobGlnaHQtc2VhcmNoXCI+JHttYXRjaH08L3NwYW4+YDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChoYXNNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgaXRlbS5zdHlsZS5kaXNwbGF5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTGlzdCk7XG5cbmV4cG9ydCB7TGlzdCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZUxpc3QgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2xpc3QvQmFzZS5tanMnO1xuaW1wb3J0IEV4YW1wbGVzIGZyb20gJy4uLy4uL3N0b3JlL0V4YW1wbGVzLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFdlYnNpdGUudmlldy5leGFtcGxlcy5MaXN0XG4gKiBAZXh0ZW5kcyBOZW8ubGlzdC5CYXNlXG4gKi9cbmNsYXNzIExpc3QgZXh0ZW5kcyBCYXNlTGlzdCB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQSByZWdleCB0byBlbmZvcmNlIGEgbWF4TGVuZ3RoICh3b3JkIGJyZWFrKVxuICAgICAgICAgKiBAbWVtYmVyIHtSZWdFeHB9IG5hbWVSZWdFeFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIG5hbWVSZWdFeDogL14oLns2NX1bXlxcc10qKS4qL1xuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nV2Vic2l0ZS52aWV3LmV4YW1wbGVzLkxpc3QnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1dlYnNpdGUudmlldy5leGFtcGxlcy5MaXN0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9Wyd3ZWJzaXRlLWV4YW1wbGVzLWxpc3QnLCduZW8tbGlzdC1jb250YWluZXInLCduZW8tbGlzdCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnd2Vic2l0ZS1leGFtcGxlcy1saXN0JywgJ25lby1saXN0LWNvbnRhaW5lcicsICduZW8tbGlzdCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmRhdGEuU3RvcmV9IHN0b3JlPUV4YW1wbGVzXG4gICAgICAgICAqL1xuICAgICAgICBzdG9yZTogRXhhbXBsZXMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gc3RvcmVVcmxfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHN0b3JlVXJsXzogbnVsbFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBzdG9yZSBjb25maWcgZ2V0cyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fE5lby5kYXRhLlN0b3JlfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fE5lby5kYXRhLlN0b3JlfSBvbGRWYWx1ZVxuICAgICAqIEByZXR1cm5zIHtOZW8uZGF0YS5TdG9yZX1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0U3RvcmUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlLmlzQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdXJsICAgOiB0aGlzLnN0b3JlVXJsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoTmVvLmlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnVybCA9IHRoaXMuc3RvcmVVcmw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VwZXIuYmVmb3JlU2V0U3RvcmUodmFsdWUsIG9sZFZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjb3JkXG4gICAgICovXG4gICAgY3JlYXRlSXRlbUNvbnRlbnQocmVjb3JkKSB7XG4gICAgICAgIGxldCBiYXNlUGF0aDtcblxuICAgICAgICBpZiAoTmVvLmNvbmZpZy5pc0dpdEh1YlBhZ2VzKSB7XG4gICAgICAgICAgICBiYXNlUGF0aCA9ICcuLi8uLi8uLi8uLi9yZXNvdXJjZXMvd2Vic2l0ZS9leGFtcGxlcyc7XG5cbiAgICAgICAgICAgIGlmICghTmVvLmNvbmZpZy5pc0V4cGVyaW1lbnRhbCkge1xuICAgICAgICAgICAgICAgIGJhc2VQYXRoID0gJy4uLy4uLycgKyBiYXNlUGF0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJhc2VQYXRoID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9uZW9tanMvcGFnZXMvbWFzdGVyL3Jlc291cmNlcy93ZWJzaXRlL2V4YW1wbGVzJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbe1xuICAgICAgICAgICAgY2xzOiBbJ2NvbnRlbnQnXSxcbiAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICBjbHMgIDogWyduZW8tZnVsbC1zaXplJywgJ3ByZXZpZXctaW1hZ2UnXSxcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJyR7YmFzZVBhdGh9LyR7cmVjb3JkLmltYWdlfScpLCBsaW5lYXItZ3JhZGllbnQoIzc3NywgIzMzMylgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGNsczogWyduZW8tcmVsYXRpdmUnXSxcbiAgICAgICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgICAgIGNsczogWyduZW8tYWJzb2x1dGUnLCAnbmVvLWl0ZW0tYm90dG9tLXBvc2l0aW9uJ10sXG4gICAgICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZyAgIDogJ2EnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xzICAgOiBbJ25lby10aXRsZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZiAgOiByZWNvcmQudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuICAgIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sOiByZWNvcmQubmFtZS5yZXBsYWNlKExpc3QubmFtZVJlZ0V4LCBcIiQxXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLXRvcC0yMCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZyAgIDogJ2EnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNscyAgIDogWydmYWIgZmEtZ2l0aHViJywgJ25lby1naXRodWItaW1hZ2UnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmICA6IHJlY29yZC5zb3VyY2VVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsczogWyduZW8taW5uZXItY29udGVudCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzIDogWyduZW8taW5uZXItZGV0YWlscyddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sOiByZWNvcmQuYnJvd3NlcnMuam9pbignLCAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzIDogWyduZW8taW5uZXItZGV0YWlscyddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sOiByZWNvcmQuZW52aXJvbm1lbnRzLmpvaW4oJywgJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfV07XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhMaXN0KTtcblxuZXhwb3J0IHtMaXN0IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL3RhYi9Db250YWluZXIubWpzJztcbmltcG9ydCBMaXN0ICAgICAgZnJvbSAnLi9MaXN0Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFdlYnNpdGUudmlldy5leGFtcGxlcy5UYWJDb250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBUYWJDb250YWluZXIgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdXZWJzaXRlLnZpZXcuZXhhbXBsZXMuVGFiQ29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdXZWJzaXRlLnZpZXcuZXhhbXBsZXMuVGFiQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gYWN0aXZlSW5kZXg9MlxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZlSW5kZXg6IDIsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gaXRlbXNcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICAgOiBMaXN0LFxuICAgICAgICAgICAgcmVmZXJlbmNlICAgICAgOiAnZXhhbXBsZXMtZGV2bW9kZS1saXN0JyxcbiAgICAgICAgICAgIHN0b3JlVXJsICAgICAgIDogJy4uLy4uL2FwcHMvd2Vic2l0ZS9kYXRhL2V4YW1wbGVzX2Rldm1vZGUuanNvbicsXG4gICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtY2hlc3Mta25pZ2h0JyxcbiAgICAgICAgICAgICAgICByb3V0ZSAgOiAnY2hpbGR2aWV3PWRldm1vZGUnLFxuICAgICAgICAgICAgICAgIHRleHQgICA6ICdEZXZNb2RlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgICA6IExpc3QsXG4gICAgICAgICAgICByZWZlcmVuY2UgICAgICA6ICdleGFtcGxlcy1kaXN0LWRldi1saXN0JyxcbiAgICAgICAgICAgIHN0b3JlVXJsICAgICAgIDogJy4uLy4uL2FwcHMvd2Vic2l0ZS9kYXRhL2V4YW1wbGVzX2Rpc3RfZGV2Lmpzb24nLFxuICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWNoZXNzLXF1ZWVuJyxcbiAgICAgICAgICAgICAgICByb3V0ZSAgOiAnY2hpbGR2aWV3PWRpc3RfZGV2JyxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnZGlzdC9kZXYnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICAgIDogTGlzdCxcbiAgICAgICAgICAgIHJlZmVyZW5jZSAgICAgIDogJ2V4YW1wbGVzLWRpc3QtcHJvZC1saXN0JyxcbiAgICAgICAgICAgIHN0b3JlVXJsICAgICAgIDogJy4uLy4uL2FwcHMvd2Vic2l0ZS9kYXRhL2V4YW1wbGVzX2Rpc3RfcHJvZC5qc29uJyxcbiAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1jaGVzcy1raW5nJyxcbiAgICAgICAgICAgICAgICByb3V0ZSAgOiAnY2hpbGR2aWV3PWRpc3RfcHJvZCcsXG4gICAgICAgICAgICAgICAgdGV4dCAgIDogJ2Rpc3QvcHJvZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHRhYkJhclBvc2l0aW9uPSdsZWZ0J1xuICAgICAgICAgKi9cbiAgICAgICAgdGFiQmFyUG9zaXRpb246ICdsZWZ0JyxcbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhUYWJDb250YWluZXIpO1xuXG5leHBvcnQge1RhYkNvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnQvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBXZWJzaXRlLnZpZXcuaG9tZS5EZXZlbG9wZXJJbnRyb0NvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIERldmVsb3BlckludHJvQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nV2Vic2l0ZS52aWV3LmhvbWUuRGV2ZWxvcGVySW50cm9Db21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1dlYnNpdGUudmlldy5ob21lLkRldmVsb3BlckludHJvQ29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9Wyd3ZWJzaXRlLWludHJvLWNvbXBvbmVudCddXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyd3ZWJzaXRlLWludHJvLWNvbXBvbmVudCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W119IGRvbUxpc3RlbmVyc1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBkb21MaXN0ZW5lcnM6IFt7XG4gICAgICAgICAgICBjbGljayAgIDogJ29uTmF2TGlua0NsaWNrJyxcbiAgICAgICAgICAgIGRlbGVnYXRlOiAnLm5hdi1saW5rJ1xuICAgICAgICB9XSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgdmRvbToge2lubmVySFRNTDogW1xuICAgICAgICAgICAgJzxoMT5Db250ZW50PC9oMT4nLFxuICAgICAgICAgICAgJzxvbD4nLFxuICAgICAgICAgICAgICAgICc8bGk+PGEgY2xhc3M9XCJuYXYtbGlua1wiIGRhdGEtdGFyZ2V0PVwiZXhlYy1uYXYtMVwiPkludHJvZHVjdGlvbjwvYT48L2xpPicsXG4gICAgICAgICAgICAgICAgJzxsaT4nLFxuICAgICAgICAgICAgICAgICAgICAnPGEgY2xhc3M9XCJuYXYtbGlua1wiIGRhdGEtdGFyZ2V0PVwiZXhlYy1uYXYtMlwiPkN1cnJlbnQgcGFpbiBwb2ludHMgaW5zaWRlIHRoZSBVSSBzZWN0b3I8L2E+JyxcbiAgICAgICAgICAgICAgICAgICAgJzx1bD4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxsaT4yLjEgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGRhdGEtdGFyZ2V0PVwiZGV2LW5hdi0yLjFcIj5QZXJmb3JtYW5jZTwvYT48L2xpPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGxpPjIuMiA8YSBjbGFzcz1cIm5hdi1saW5rXCIgZGF0YS10YXJnZXQ9XCJkZXYtbmF2LTIuMlwiPk11bHRpIEJyb3dzZXIgV2luZG93IEFwcHM8L2E+PC9saT4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxsaT4yLjMgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGRhdGEtdGFyZ2V0PVwiZGV2LW5hdi0yLjNcIj5EZXZlbG9waW5nIFVJcyBpbnNpZGUgbm9kZWpzPC9hPjwvbGk+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICc8bGk+Mi40IDxhIGNsYXNzPVwibmF2LWxpbmtcIiBkYXRhLXRhcmdldD1cImRldi1uYXYtMi40XCI+U2NhbGFibGUgQXJjaGl0ZWN0dXJlczwvYT48L2xpPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGxpPjIuNSA8YSBjbGFzcz1cIm5hdi1saW5rXCIgZGF0YS10YXJnZXQ9XCJkZXYtbmF2LTIuNVwiPk1lbW9yeSBMZWFrczwvYT48L2xpPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGxpPjIuNiA8YSBjbGFzcz1cIm5hdi1saW5rXCIgZGF0YS10YXJnZXQ9XCJkZXYtbmF2LTIuNlwiPlRlbXBsYXRlczwvYT48L2xpPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGxpPjIuNyA8YSBjbGFzcz1cIm5hdi1saW5rXCIgZGF0YS10YXJnZXQ9XCJkZXYtbmF2LTIuN1wiPkNvbnNpc3RlbnQgQ29kZTwvYT48L2xpPicsXG4gICAgICAgICAgICAgICAgICAgICc8L3VsPicsXG4gICAgICAgICAgICAgICAgJzwvbGk+JyxcbiAgICAgICAgICAgICAgICAnPGxpPjxhIGNsYXNzPVwibmF2LWxpbmtcIiBkYXRhLXRhcmdldD1cImRldi1uYXYtM1wiPkhvdyB0byBnZXQgdXAgdG8gc3BlZWQ/PC9hPjwvbGk+JyxcbiAgICAgICAgICAgICAgICAnPGxpPjxhIGNsYXNzPVwibmF2LWxpbmtcIiBkYXRhLXRhcmdldD1cImRldi1uYXYtNFwiPkpvaW4gbmVvLm1qcyBhcyBhIENvbnRyaWJ1dG9yPC9hPjwvbGk+JyxcbiAgICAgICAgICAgICAgICAnPGxpPjxhIGNsYXNzPVwibmF2LWxpbmtcIiBkYXRhLXRhcmdldD1cImRldi1uYXYtNVwiPkluY2VudGl2ZXMgZm9yIENvbnRyaWJ1dG9yczwvYT48L2xpPicsXG4gICAgICAgICAgICAnPG9sPicsXG4gICAgICAgICAgICAnPGgxIGNsYXNzPVwibmF2LXRhcmdldFwiIGlkPVwiZGV2LW5hdi0xXCI+MS4gSW50cm9kdWN0aW9uPC9oMT4nLFxuICAgICAgICAgICAgJzxwPicsXG4gICAgICAgICAgICAgICAgJ25lby5tanMgaXMgdGhlIG5leHQgZ2VuZXJhdGlvbiBVSSBmcmFtZXdvcmsgZm9yIGNyZWF0aW5nIGRlc2t0b3AgJiBtb2JpbGUgV2ViIEFwcHMuICcsXG4gICAgICAgICAgICAgICAgJ0l0IGhhcyBhIHZlcnkgc3Ryb25nIGZvY3VzIG9uIHBlcmZvcm1hbmNlIGFuZCBjcmVhdGluZyBzY2FsYWJsZSAmIG1vZHVsYXIgYXJjaGl0ZWN0dXJlcy4gJyxcbiAgICAgICAgICAgICAgICAnQSBjbGVhbiAmIGNvbnNpc3RlbnQgQVBJLCBhcyB3ZWxsIGFzIHRoZSBhYmlsaXR5IHRvIHJ1biB3aXRob3V0IGFueSBidWlsZCBwcm9jZXNzZXMsICcsXG4gICAgICAgICAgICAgICAgJ3dpbGwgaW5jcmVhc2UgdGhlIHByb2R1Y3Rpdml0eSBvZiB5b3VyIHRlYW0sIHdoaWxlIGNyZWF0aW5nIGJldHRlciBzb2x1dGlvbnMgYXQgdGhlIHNhbWUgdGltZS4nLFxuICAgICAgICAgICAgJzwvcD4nLFxuICAgICAgICAgICAgJzxoMSBjbGFzcz1cIm5hdi10YXJnZXRcIiBpZD1cImRldi1uYXYtMlwiPjIuIEN1cnJlbnQgcGFpbiBwb2ludHMgaW5zaWRlIHRoZSBVSSBzZWN0b3I8L2gxPicsXG4gICAgICAgICAgICAnPG9sPicsXG4gICAgICAgICAgICAgICAgJzxsaT4nLFxuICAgICAgICAgICAgICAgICAgICAnPGIgY2xhc3M9XCJuYXYtdGFyZ2V0XCIgaWQ9XCJkZXYtbmF2LTIuMVwiPlBlcmZvcm1hbmNlPC9iPicsXG4gICAgICAgICAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxiPlByb2JsZW06PC9iPiBXaGlsZSBjdXJyZW50IGxpYnJhcmllcyAvIGZyYW1ld29ya3MgbGlrZSBBbmd1bGFyLCBSZWFjdCBvciBWdWUgcHJvdmlkZSBhIHJlYXNvbmFibGUgcGVyZm9ybWFuY2UgZm9yICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnc21hbGwgb3IgbW9zdGx5IHN0YXRpYyBBcHBzLCB0aGV5IGxhY2sgd2hlbiBpdCBjb21lcyB0byBiaWcgQXBwcyBvciBjb21wbGV4IENvbXBvbmVudHMuICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnVGhlIHByb2JsZW0gaXMsIHRoYXQgbW9zdCBBcHBzIHRvZGF5IHJ1biB3aXRoaW4gYSBzaW5nbGUgdGhyZWFkIChDUFUpLCB3aGlsZSBlYWNoIGNvbXB1dGVyIG9yIG1vYmlsZSAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RldmljZSBoYXMgc2V2ZXJhbCBDUFVzIGF2YWlsYWJsZS4gU29tZSBBcHBzIG1vdmUgZXhwZW5zaXZlIHRhc2tzIGludG8gc2VwYXJhdGUgdGhyZWFkcywgYnV0IHRoaXMgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdpcyBieSBmYXIgbm90IGVub3VnaC4nLFxuICAgICAgICAgICAgICAgICAgICAnPC9wPicsXG4gICAgICAgICAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxiPlNvbHV0aW9uOjwvYj4gVXNpbmcgbmVvLm1qcywgbW9zdCBwYXJ0cyBvZiB0aGUgZnJhbWV3b3JrIGFzIHdlbGwgYXMgdGhlIEFwcHMgd2hpY2ggeW91IGNyZWF0ZSAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3dpdGggaXQsIHJ1biBpbnNpZGUgYSBzZXBhcmF0ZSB0aHJlYWQuIFRoaXMgYXJjaGl0ZWN0dXJlIGxlYXZlcyB0aGUgbWFpbiB0aHJlYWQgbW9zdGx5IGlkbGUsIHNvICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnaXQgY2FuIGZ1bGx5IGNvbmNlbnRyYXRlIG9uIGl0cyBwdXJwb3NlOiB0byBvbmx5IG1hbmlwdWxhdGUgdGhlIHJlYWwgRE9NIChIVE1MKS4gRXhwZW5zaXZlIHRhc2tzICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnc2ltcGx5IGNhbiBub3QgaW50ZXJmZXJlIHdpdGggeW91ciBhbmltYXRpb25zIG9yIGV2ZW4gZnJlZXplIHlvdXIgVUkuJyxcbiAgICAgICAgICAgICAgICAgICAgJzwvcD4nLFxuICAgICAgICAgICAgICAgICc8L2xpPicsXG4gICAgICAgICAgICAgICAgJzxsaT4nLFxuICAgICAgICAgICAgICAgICAgICAnPGIgY2xhc3M9XCJuYXYtdGFyZ2V0XCIgaWQ9XCJkZXYtbmF2LTIuMlwiPk11bHRpIEJyb3dzZXIgV2luZG93IEFwcHM8L2I+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxwPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGI+UHJvYmxlbTo8L2I+IEV4cGFuZGluZyBTaW5nbGUgUGFnZSBBcHBzIGludG8gbXVsdGlwbGUgQnJvd3NlciBXaW5kb3dzIGlzIHNpbXBseSBpbXBvc3NpYmxlICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnd2l0aCBhbnkgb3RoZXIgbGlicmFyeSBvciBmcmFtZXdvcmsgb3V0IHRoZXJlLicsXG4gICAgICAgICAgICAgICAgICAgICc8L3A+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxwPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGI+U29sdXRpb246PC9iPiBVc2luZyBuZW8ubWpzLCB5b3UgY2FuIGRvIGl0IHRvZGF5LiBXaXRoIHRoZSBTaGFyZWRXb3JrZXJzIHNldHVwLCB5b3UgY2FuIG5vdCAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ29ubHkgZGlyZWN0bHkgY29tbXVuaWNhdGUgYmV0d2VlbiBXaW5kb3dzLCBidXQgeW91IGNhbiBtb3ZlIGVudGlyZSBDb21wb25lbnQgdHJlZXMgYXJvdW5kLCAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3JlLXVzaW5nIHRoZSBzYW1lIEpTIGluc3RhbmNlcyBhbmQgbm8gbmVlZCB0byBjYXJlIGFib3V0IERPTSBldmVudHMuIFRoaXMgYXJjaGl0ZWN0dXJlIHdpbGwgcm9jayAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ29uIG1vYmlsZSBkZXZpY2VzIGFzIHdlbGwsIGFzIHNvb24gYXMgdGhlIFdlYmtpdCB0ZWFtIGNhdGNoZXMgdXAuIEltYWdpbmUgYSBOYXRpdmUgU2hlbGwgdXNpbmcgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdtdWx0aXBsZSBXZWJWaWV3cy4gVGFrZSBhIGxvb2sgYXQ6JyxcbiAgICAgICAgICAgICAgICAgICAgJzwvcD4nLFxuICAgICAgICAgICAgICAgICAgICAnPHA+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICc8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9tZWRpdW0uY29tL3N3bGgvZXhwYW5kaW5nLXNpbmdsZS1wYWdlLWFwcHMtaW50by1tdWx0aXBsZS1icm93c2VyLXdpbmRvd3MtZTZkOWJkMTU1ZDU5P3NvdXJjZT1mcmllbmRzX2xpbmsmc2s9YmJmZTFkYWRhOTVjNTY3NDY2OWU0NjNmOTMzNjA4MjJcIj5FeHBhbmRpbmcgU2luZ2xlIFBhZ2UgQXBwcyBpbnRvIG11bHRpcGxlIEJyb3dzZXIgV2luZG93czwvYT4nLFxuICAgICAgICAgICAgICAgICAgICAnPC9wPicsXG4gICAgICAgICAgICAgICAgJzwvbGk+JyxcbiAgICAgICAgICAgICAgICAnPGxpPicsXG4gICAgICAgICAgICAgICAgICAgICc8YiBjbGFzcz1cIm5hdi10YXJnZXRcIiBpZD1cImRldi1uYXYtMi4zXCI+RGV2ZWxvcGluZyBVSXMgaW5zaWRlIG5vZGVqczwvYj4nLFxuICAgICAgICAgICAgICAgICAgICAnPHA+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICc8Yj5Qcm9ibGVtOjwvYj4gbm9kZWpzIGV2b2x2ZWQgZmFzdGVyIHRoYW4gSlMgaW5zaWRlIEJyb3dzZXJzLCBidXQgZGlkIG5vdCBzdGljayB0byBXM0Mgc3RhbmRhcmRzLiAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0xpYnJhcmllcyAvIGZyYW1ld29ya3MgbGlrZSBBbmd1bGFyLCBSZWFjdCAmIFZ1ZSBwaWNrZWQgdGhpcyB1cCBhbmQgbW92ZWQgdGhlIGVudGlyZSBVSSBkZXZlbG9wbWVudCAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ludG8gbm9kZWpzLiBUaGlzIGFsbG93cyBkZXZlbG9wZXJzIHRvIHVzZSBFUzYrIGZlYXR1cmVzIGxpa2UgY2xhc3NlcyAmIEpTIG1vZHVsZXMsIGJ1dCBhdCBhbiBleHRyZW1lbHkgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdoaWdoIGNvc3Q6IGV2ZXJ5IGNoYW5nZSBpbnNpZGUgeW91ciBjb2RlIGJhc2UgcmVxdWlyZXMgYSBidWlsZCBvciB0cmFuc3BpbGF0aW9uLCBiZWZvcmUgeW91IGNhbiBzZWUgaXQuICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQW4gZW50aXJlIGVjb3N5c3RlbSBldm9sdmVkLCBsaWtlIGhvdCBtb2R1bGUgcmVwbGFjZW1lbnRzICYgdXNpbmcgc291cmNlIG1hcHMgdG8gcmVkdWNlIHRoZSBwYWluIHBvaW50IGEgYml0LicsXG4gICAgICAgICAgICAgICAgICAgICc8L3A+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxwPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGI+U29sdXRpb246PC9iPiBJbiBhIGNvdXBsZSBvZiB5ZWFycywgd2Ugd2lsbCBtb3N0IGxpa2VseSBsb29rIGJhY2sgYXQgdGhpcyBtYWRuZXNzIGFuZCBsYXVnaC4gQ2FsbGluZyBpdCAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1wiYSBoaWNjdXAgaW4gdGhlIGhpc3Rvcnkgb2YgV2ViIERldmVsb3BtZW50XCIuIEJyb3dzZXJzIGRpZCBjYXRjaCB1cC4gVXNpbmcgbmVvLm1qcywgeW91IGNhbiBydW4gdGhlIERldmVsb3BtZW50ICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnTW9kZSBkaXJlY3RseSBpbnNpZGUgdGhlIEJyb3dzZXIuIE5vIGJ1aWxkIHByb2Nlc3NlcyBvciBzb3VyY2UgbWFwcyBuZWVkZWQuIFlvdSBjYW4gZGVidWcgdGhlIHJlYWwgRVM4KyBjb2RlLiAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1RoaXMgaGFzIHNhdmVkIG1lIGEgbG90IG9mIHRpbWUgYWxyZWFkeSwgc2luY2UgaXQgaXMgdGhlIGJlc3QgcG9zc2libGUgZGVidWdnaW5nIGV4cGVyaWVuY2UuJyxcbiAgICAgICAgICAgICAgICAgICAgJzwvcD4nLFxuICAgICAgICAgICAgICAgICc8L2xpPicsXG4gICAgICAgICAgICAgICAgJzxsaT4nLFxuICAgICAgICAgICAgICAgICAgICAnPGIgY2xhc3M9XCJuYXYtdGFyZ2V0XCIgaWQ9XCJkZXYtbmF2LTIuNFwiPlNjYWxhYmxlIEFyY2hpdGVjdHVyZXM8L2I+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxwPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGI+UHJvYmxlbTo8L2I+IFdoaWxlIHNjYWxhYmlsaXR5IGlzIGFuIGltcG9ydGFudCBpdGVtIGluc2lkZSB0aGUgYmFja2VuZCBhcmVhIChDbG91ZCksIGl0IGdvdCBtb3N0bHkgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdpZ25vcmVkIG9uIHRoZSBmcm9udGVuZCBzaWRlIHNvIGZhci4nLFxuICAgICAgICAgICAgICAgICAgICAnPC9wPicsXG4gICAgICAgICAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxiPlNvbHV0aW9uOjwvYj4gV2l0aCB0aGUgY3VycmVudCB3b3JrZXIgc2V0dXAsIHlvdSBhbHJlYWR5IGhhdmUgYSBzb2xpZCBzdGFydGluZyBwb2ludC4gV2UgY2FuIGZ1cnRoZXIgZW5oYW5jZSB0aGlzLCAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2lmIG5lZWRlZC4gRS5nLiBhZGQgYSBzZWNvbmQgVmRvbSB3b3JrZXIsIGluIGNhc2UgdGhpcyBvbmUgaXMgYSBib3R0bGUtbmVjay4gWW91IGNhbiBzdGljayB0byBjb21tb24gJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdwYXR0ZXJucyBsaWtlIE1WQyBvciBNVlZNLCBpZiB5b3UgbGlrZSB0by4gWW91IGNhbiBjcmVhdGUgbXVsdGlwbGUgQXBwcyBvbiBvbmUgcGFnZSBhbmQgd2l0aCB1c2luZyAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0pTIE1vZHVsZXMsIHlvdSBjYW4gbGF6eSBsb2FkIGNsYXNzZXMgPT4gcGFja2FnZXMgYXMgbmVlZGVkLicsXG4gICAgICAgICAgICAgICAgICAgICc8L3A+JyxcbiAgICAgICAgICAgICAgICAnPC9saT4nLFxuICAgICAgICAgICAgICAgICc8bGk+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxiIGNsYXNzPVwibmF2LXRhcmdldFwiIGlkPVwiZGV2LW5hdi0yLjVcIj5NZW1vcnkgTGVha3M8L2I+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxwPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGI+UHJvYmxlbTo8L2I+IERlc3Ryb3lpbmcgJiByZS1jcmVhdGluZyBDb21wb25lbnQgVHJlZXMgY2FuIGVhc2lseSBsZWFkIHRvIG1lbW9yeSBsZWFrcy4gRXNwZWNpYWxseSBpbiBjYXNlIHRoZSBkZXN0cnVjdGlvbiAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2xvZ2ljIG9mIHNlbGYgY3JlYXRlZCBDb21wb25lbnRzIGlzIG5vdCBmdWxseSBwb2xpc2hlZC4nLFxuICAgICAgICAgICAgICAgICAgICAnPC9wPicsXG4gICAgICAgICAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxiPlNvbHV0aW9uOjwvYj4gVXNpbmcgbmVvLm1qcywgeW91IGNhbiBlYXNpbHkgcmUtdXNlIGV4aXN0aW5nICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnSlMgaW5zdGFuY2VzIGFuZCBqdXN0IHVubW91bnQgJiByZS1tb3VudCB0aGVpciAoVilET00uIFlvdSBjYW4gZWFzaWx5IG1vdmUgQ29tcG9uZW50cyBUcmVlcyB0byBkaWZmZXJlbnQgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdzcG90cyBpbnNpZGUgeW91ciBBcHAgYXMgd2VsbC4nLFxuICAgICAgICAgICAgICAgICAgICAnPC9wPicsXG4gICAgICAgICAgICAgICAgJzwvbGk+JyxcbiAgICAgICAgICAgICAgICAnPGxpPicsXG4gICAgICAgICAgICAgICAgICAgICc8YiBjbGFzcz1cIm5hdi10YXJnZXRcIiBpZD1cImRldi1uYXYtMi42XCI+VGVtcGxhdGVzPC9iPicsXG4gICAgICAgICAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxiPlByb2JsZW06PC9iPiBDbG9zZSB0byBhbGwgY3VycmVudCBsaWJyYXJpZXMgLyBmcmFtZXdvcmtzIG91dCB0aGVyZSBhcmUgdGVtcGxhdGUgZHJpdmVuLiBEZXZlbG9wZXJzIGhhdmUgdG8gY3JlYXRlICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYSBjb21wYWN0LCBidXQgdmVyeSBtZXNzeSBwc2V1ZG8gWE1MIG1hcmt1cC4gVmFyaWFibGVzIGFuZCBtZXRob2RzIGdldCBtaXhlZCBpbnRvIHRoZW0sIHdpdGggdmFyaW91cyAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbWJpbmF0aW9ucyBvZiBicmFja2V0cy4gRXNwZWNpYWxseSBjb21wbGV4IENvbXBvbmVudHMgbGlrZSBhIEdyaWQgKFRhYmxlKSBjYW4gY29udGFpbiBvdmVyIDEwMDAgbGluZXMgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdpbmNsdWRpbmcgYmlnIGFtb3VudHMgb2YgdGVtcGxhdGUgaWYgJiBlbHNlIHN0YXRlbWVudHMuIFdoaWxlIHlvdSBjYW4gY29tcGlsZSB0aGVtIGF0IGJ1aWxkIHRpbWUgKGUuZy4gU3ZlbHRlKSwgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0aGV5IGFyZSB2ZXJ5IHN0YXRpYy4gQ2hhbmdlcyBhdCBydW50aW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0aGlzIGxlYXZlcycsXG4gICAgICAgICAgICAgICAgICAgICc8L3A+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxwPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGI+U29sdXRpb246PC9iPiBUaGVyZSBhcmUgbm8gdGVtcGxhdGVzIGluc2lkZSBuZW8ubWpzLiBJbnN0ZWFkLCB5b3UgY3JlYXRlIGEgSlNPTiBiYXNlZCB2aXJ0dWFsIERPTSB0cmVlICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnKGEgYml0IHNpbWlsYXIgdG8gY3JlYXRpbmcgYSBzaW1wbGlmaWVkIEpTWCBvdXRwdXQpLiBZb3UgY2FuIGR5bmFtaWNhbGx5IGNoYW5nZSB0aGVzZSBzdHJ1Y3R1cmVzIGFueSB3YXkgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd5b3UgbGlrZSB0by4gVGhlcmUgaXMgbm8gbmVlZCBmb3IgcGFyc2luZyB0aGUgc3RydWN0dXJlcywgc2luY2UgSlMgaXMgbWVhbnQgdG8gd29yayB3aXRoIG9iamVjdHMgJiBhcnJheXMuICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnVGhlIHBlcmZvcm1hbmNlIGdhaW4gZm9yIHJ1bi10aW1lIGNoYW5nZXMgaXMgc2lnbmlmaWNhbnQuIFRoZSBiZXN0IHBhcnQgaXMgdGhhdCB5b3UgY2FuIG1vZGlmeSB0aGUgdmRvbSB0cmVzcyAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2V4YWN0bHkgdGhlIHNhbWUgd2F5IHRocm91Z2hvdXQgdGhlIGVudGlyZSBDb21wb25lbnQgbGlmZWN5Y2xlIChlLmcuIGJlZm9yZSAmIGFmdGVyIG1vdW50aW5nKS4nLFxuICAgICAgICAgICAgICAgICAgICAnPC9wPicsXG4gICAgICAgICAgICAgICAgJzwvbGk+JyxcbiAgICAgICAgICAgICAgICAnPGxpPicsXG4gICAgICAgICAgICAgICAgICAgICc8YiBjbGFzcz1cIm5hdi10YXJnZXRcIiBpZD1cImRldi1uYXYtMi43XCI+Q29uc2lzdGVudCBDb2RlPC9iPicsXG4gICAgICAgICAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxiPlByb2JsZW06PC9iPiBFc3BlY2lhbGx5IHdoZW4gd29ya2luZyB3aXRoIGxpYnJhcmllcyAoZS5nLiBSZWFjdCksIHlvdSBkb25cXCd0IGdldCBldmVyeXRoaW5nIHlvdSBuZWVkICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZm9yIGNyZWF0aW5nIGFuIFVJLiBZb3Ugd2lsbCBuZWVkIHNldmVyYWwgM3JkIHBhcnR5IGV4dGVuc2lvbnMsIHdoaWNoIHdvblxcJ3QgcHJvdmlkZSBhIGNvbnNpc3RlbnQgY29kZSAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Jhc2UuIEFub3RoZXIgYmlnIHByb2JsZW0gaXMsIHRoYXQgbGlicmFyaWVzIGxpa2UgUmVhY3QgZG8gbm90IGV4cG9zZSBhIGNvcmUuIENvbXBvbmVudCBpcyB0aGUgYmFzZSBjbGFzcyAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZvciBldmVyeXRoaW5nIGFuZCB0aGlzIG1ha2VzIG5vIHNlbnNlLiBBIHJvdXRlciwgY29udHJvbGxlciBvciB1dGlsaXR5IGNsYXNzIGRvZXMgbm90IGhhdmUgYSBET00gb3V0cHV0LCAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NvIHRoZXkgcmVhbGx5IHNob3VsZCBub3QgdXNlIENvbXBvbmVudCBhcyB0aGUgYmFzZSBjbGFzcy4nLFxuICAgICAgICAgICAgICAgICAgICAnPC9wPicsXG4gICAgICAgICAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxiPlNvbHV0aW9uOjwvYj4gbmVvLm1qcyBpcyBhIGZyYW1ld29yaywgbm90IGEgbGlicmFyeS4gVGhlIGNvcmUgaXMgZXhwb3NlZCAoY29yZS5CYXNlKS4gVGhlcmUgYXJlIGFscmVhZHkgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdhIGJpZyBhbW91bnQgYSBjbGFzc2VzIGF2YWlsYWJsZSwgd2hpY2ggZm9sbG93IHRoZSBzYW1lIGRlc2lnbiBwYXR0ZXJucyAmIEFQSS4gbmVvLm1qcyBpcyBjcmVhdGVkIHdpdGggYSAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3N0cm9uZyBmb2N1cyBvbiBiZWluZyBleHRlbmRhYmxlLiBJdCBpcyB2ZXJ5IGVhc3kgdG8gY3JlYXRlIG5ldyBDb21wb25lbnRzIG9yIG90aGVyIGNsYXNzZXMgb24geW91ciBvd24uJyxcbiAgICAgICAgICAgICAgICAgICAgJzwvcD4nLFxuICAgICAgICAgICAgICAgICc8L2xpPicsXG4gICAgICAgICAgICAnPC9vbD4nLFxuICAgICAgICAgICAgJzxoMSBjbGFzcz1cIm5hdi10YXJnZXRcIiBpZD1cImRldi1uYXYtM1wiPjMuIEhvdyB0byBnZXQgdXAgdG8gc3BlZWQ/PC9oMT4nLFxuICAgICAgICAgICAgJzxwPicsXG4gICAgICAgICAgICAgICAgJ0FzIGEgZmlyc3Qgc3RlcCwgZXhwbG9yZSB0aGUgQmxvZyBQb3N0cyAmIEV4YW1wbGVzIG9uIHRoaXMgcGFnZSB0byBmaWd1cmUgb3V0IGlmIHlvdSBsaWtlIHRoZSBmcmFtZXdvcmsgaW4gZ2VuZXJhbC4nLFxuICAgICAgICAgICAgJzwvcD4nLFxuICAgICAgICAgICAgJzxwPicsXG4gICAgICAgICAgICAgICAgJ0FmdGVyd2FyZHMsIEkgc3Ryb25nbHkgcmVjb21tZW5kIHRvIGZvbGxvdyB0aGUgZmlyc3QgMiBUdXRvcmlhbHM6JyxcbiAgICAgICAgICAgICc8L3A+JyxcbiAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICc8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9tZWRpdW0uY29tL3N3bGgvaG93LXRvLWNyZWF0ZS1hLXdlYndvcmtlcnMtZHJpdmVuLW11bHRpdGhyZWFkaW5nLWFwcC1wYXJ0LTEtZmEwY2M3OGE0MjM3P3NvdXJjZT1mcmllbmRzX2xpbmsmc2s9YTEwY2E4NTAwMmY1ZjljM2VlOGM2OWY1M2M3OWQ5NWZcIj5Ib3cgdG8gY3JlYXRlIGEgd2Vid29ya2VycyBkcml2ZW4gbXVsdGl0aHJlYWRpbmcgQXBw4oCK4oCU4oCKUGFydCAxPC9hPicsXG4gICAgICAgICAgICAnPC9wPicsXG4gICAgICAgICAgICAnPHA+JyxcbiAgICAgICAgICAgICAgICAnPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vbWVkaXVtLmNvbS9zd2xoL2hvdy10by1jcmVhdGUtYS13ZWJ3b3JrZXJzLWRyaXZlbi1tdWx0aXRocmVhZGluZy1hcHAtcGFydC0yLTNjNWIzYzJkMWFkYj9zb3VyY2U9ZnJpZW5kc19saW5rJnNrPWNmNGI1YzBlMDE0ZmNmZDZmYzFkOTg0NWY0ZWIzMDk3XCI+SG93IHRvIGNyZWF0ZSBhIHdlYndvcmtlcnMgZHJpdmVuIG11bHRpdGhyZWFkaW5nIEFwcOKAiuKAlOKAilBhcnQgMjwvYT4nLFxuICAgICAgICAgICAgJzwvcD4nLFxuICAgICAgICAgICAgJzxwPicsXG4gICAgICAgICAgICAgICAgJ0F0IHRoaXMgcG9pbnQsIHlvdSBhcmUgZGVmaW5pdGVseSByZWFkeSB0byBjcmVhdGUgYSBmaXJzdCBuZW8ubWpzIEFwcCBvbiB5b3VyIG93bi4nLFxuICAgICAgICAgICAgJzwvcD4nLFxuICAgICAgICAgICAgJzxwPicsXG4gICAgICAgICAgICAgICAgJ1VzZSB0aGUgbmVvLm1qcyBpc3N1ZXMgdHJhY2tlciB0byBjcmVhdGUgbmV3IHRpY2tldHMgb3IgY29tbWVudCBvbiBleGlzdGluZyBvbmVzOicsXG4gICAgICAgICAgICAnPC9wPicsXG4gICAgICAgICAgICAnPHA+JyxcbiAgICAgICAgICAgICAgICAnPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9uZW9tanMvbmVvL2lzc3Vlc1wiPm5lby5tanMgaXNzdWVzIHRyYWNrZXI8L2E+JyxcbiAgICAgICAgICAgICc8L3A+JyxcbiAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICdKb2luIHRoZSBTbGFjayBDaGFubmVsIGZvciBxdWVzdGlvbnMgJiBmZWVkYmFjazonLFxuICAgICAgICAgICAgJzwvcD4nLFxuICAgICAgICAgICAgJzxwPicsXG4gICAgICAgICAgICAgICAgJzxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2pvaW4uc2xhY2suY29tL3QvbmVvdGVyaWNqcy9zaGFyZWRfaW52aXRlL2VuUXRORGsyTmpFd01USXhPRFEyTFdSak5HUTNaVE16T0RSbVpHTTJORE0yTnpabVpUTXpabUUyWWpFd05ETTRORGhqWkRsbE5XWTJaRGt3T1dRNU4ySm1aV1ZpWWpZelpUZzVZamRpTURjXCI+U2xhY2sgQ2hhbm5lbCBJbnZpdGUgTGluazwvYT4nLFxuICAgICAgICAgICAgJzwvcD4nLFxuICAgICAgICAgICAgJzxwPicsXG4gICAgICAgICAgICAgICAgJ0kgYW0gd2lsbGluZyB0byBoZWxwIGdldHRpbmcgdGhlIGZpcnN0IGRldmVsb3BlcnMgdXAgdG8gc3BlZWQuIEZvciBmcmVlLiBEb25cXCd0IG1pc3Mgb3V0IG9uIHRoaXMuJyxcbiAgICAgICAgICAgICc8L3A+JyxcbiAgICAgICAgICAgICc8aDEgY2xhc3M9XCJuYXYtdGFyZ2V0XCIgaWQ9XCJkZXYtbmF2LTRcIj40LiBKb2luIG5lby5tanMgYXMgYSBDb250cmlidXRvcjwvaDE+JyxcbiAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICdPcGVuIHNvdXJjZSBwcm9qZWN0cyByZWx5IG9uIDxiPnlvdXI8L2I+IHN1cHBvcnQuIFN1Y2Nlc3NmdWwgcHJvamVjdHMgcmVxdWlyZSBjb250cmlidXRvcnMgdG8gYnJpbmcgdGhlIGlkZWFzLCAnLFxuICAgICAgICAgICAgICAgICdpbm5vdmF0aW9ucyBhbmQgY29sbGFib3JhdGlvbiByZXF1aXJlZCBmb3IgYSByb2J1c3QgYW5kIHNvbGlkIHByb2plY3QuJyxcbiAgICAgICAgICAgICc8L3A+JyxcbiAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICdDb250cmlidXRpb25zIGRvIG5vdCBuZWNlc3NhcmlseSBoYXZlIHRvIGJlIGNvZGUgYmFzZWQuIFdoaWxlIHdlIGVuY291cmFnZSB5b3UgdG8gdXNlIHRoZSBjb2RlIGJhc2UgYW5kIGNvbnRyaWJ1dGUgdG8gaXQsICcsXG4gICAgICAgICAgICAgICAgJ3dlIGNhbiBhbHNvIHVzZSB5b3VyIGhlbHAgaW4gcHJvdmlkaW5nIG90aGVyIGlucHV0LiBTb21lIGV4YW1wbGVzIG9mIGhlbHBmdWwgY29udHJpYnV0aW9ucyBpbmNsdWRlOicsXG4gICAgICAgICAgICAgICAgJzxvbD4nLFxuICAgICAgICAgICAgICAgICAgICAnPGxpPldvcmsgb24gdGhlIHNvdXJjZSBjb2RlLCBlbmhhbmNpbmcgYW5kIGltcHJvdmluZyBpdDwvbGk+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxsaT5Qcm92aWRpbmcgZG9jdW1lbnRhdGlvbiBjb250ZW50LCByZXZpZXcgYW5kIGVkaXRpbmc8L2xpPicsXG4gICAgICAgICAgICAgICAgICAgICc8bGk+U2FtcGxlIGFwcGxpY2F0aW9uIGNyZWF0aW9uPC9saT4nLFxuICAgICAgICAgICAgICAgICAgICAnPGxpPkJsb2cgY29udGVudDwvbGk+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxsaT5HdWlkZXMgYW5kIEhvdy1UbyBkb2NzPC9saT4nLFxuICAgICAgICAgICAgICAgICc8L29sPicsXG4gICAgICAgICAgICAnPC9wPicsXG4gICAgICAgICAgICAnPHA+JyxcbiAgICAgICAgICAgICAgICAnV2l0aCB5b3VyIGhlbHAsIGVzcGVjaWFsbHkgaW4gY2FzZSB5b3UgYXJlIGEgY3VyaW91cyBhbmQgcGFzc2lvbmF0ZSBkZXZlbG9wZXIsIHdlIGNhbiBzcGVlZCB1cCB0aGUgZGV2ZWxvcG1lbnQgb2YgbmVvLm1qcy4gQSBsb3QuJyxcbiAgICAgICAgICAgICc8L3A+JyxcbiAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICdUbyBnZXQgc3RhcnRlZCwgbWFrZSBzdXJlIHRvIGpvaW4gb3VyICcsXG4gICAgICAgICAgICAgICAgJzxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2pvaW4uc2xhY2suY29tL3QvbmVvdGVyaWNqcy9zaGFyZWRfaW52aXRlL2VuUXRORGsyTmpFd01USXhPRFEyTFdSak5HUTNaVE16T0RSbVpHTTJORE0yTnpabVpUTXpabUUyWWpFd05ETTRORGhqWkRsbE5XWTJaRGt3T1dRNU4ySm1aV1ZpWWpZelpUZzVZamRpTURjXCI+U2xhY2sgQ2hhbm5lbDwvYT4nLFxuICAgICAgICAgICAgICAgICcgYXMgaXQgaXMgYSBncmVhdCByZXNvdXJjZSBhbmQgYSB3YXkgdG8gY29tbXVuaWNhdGUgd2l0aCB0aGUgZ3Jvd2luZyBuZW8ubWpzIGNvbW11bml0eS4gJyxcbiAgICAgICAgICAgICAgICAnWW91IG1heSBhbHNvIGNvbW1lbnQgb24gZXhpc3RpbmcgdGlja2V0cyB3aGljaCB5b3UgZmluZCBpbnRlcmVzdGluZyBvciAnLFxuICAgICAgICAgICAgICAgICdjcmVhdGUgbmV3IG9uZXMgYXMgbmVlZGVkLiBQbGVhc2UgZmVlbCBmcmVlIHRvIGZvcmsgdGhlIHJlcG9zaXRvcnkgYW5kIGNyZWF0ZSBwdWxsIHJlcXVlc3RzIGFzIG5lZWRlZC4nLFxuICAgICAgICAgICAgJzwvcD4nLFxuICAgICAgICAgICAgJzxwPicsXG4gICAgICAgICAgICAgICAgJ0ZvciBtb3JlIGluZm9ybWF0aW9uLCBwbGVhc2UgcmV2aWV3IG91ciBjb250cmlidXRpb24gZ3VpZGUgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9uZW9tanMvbmVvL2Jsb2IvZGV2L0NPTlRSSUJVVElORy5tZFwiPmhlcmU8L2E+LicsXG4gICAgICAgICAgICAnPC9wPicsXG4gICAgICAgICAgICAnPGgxIGNsYXNzPVwibmF2LXRhcmdldFwiIGlkPVwiZGV2LW5hdi01XCI+NS4gSW5jZW50aXZlcyBmb3IgQ29udHJpYnV0b3JzPC9oMT4nLFxuICAgICAgICAgICAgJzxwPicsXG4gICAgICAgICAgICAgICAgJ1RoZSBuZW8ubWpzIHByb2plY3QgaXMgaW4gaXRzIGluZmFuY3ksIGJ1dCBncm93aW5nIGV2ZXJ5IGRheSBpbiBib3RoIGNvbnRlbnQgYW5kIGV4cG9zdXJlLiBXZSBmaXJtbHkgYmVsaWV2ZSB0aGF0IG5lby5tanMgJyxcbiAgICAgICAgICAgICAgICAnd2lsbCBnYWluIHRyYWN0aW9uIGFuZCBhZG9wdGlvbiBhcyBpdCBtYXR1cmVzIGFuZCB0aGlzIGlzIHdoZXJlIHlvdXIgY29udHJpYnV0aW9ucyBkb25cXCd0IGVuZCB3aXRoIGp1c3Qgc291cmNlIGNvZGUgYW5kICcsXG4gICAgICAgICAgICAgICAgJ2NvbnRlbnQuIFlvdXIgYWN0aXZlIHBhcnRpY2lwYXRpb24gaW4gc2hhcmluZyB5b3VyIGV4cGVyaWVuY2VzIGFuZCBrbm93bGVkZ2Ugb2YgbmVvLm1qcyBpcyBjcnVjaWFsIHRvIGl0cyBncm93dGguICcsXG4gICAgICAgICAgICAnPC9wPicsXG4gICAgICAgICAgICAnPHA+JyxcbiAgICAgICAgICAgICAgICAnQWRkaXRpb25hbGx5LCBhY3RpdmVseSBjb250cmlidXRpbmcgdG8gb3BlbiBzb3VyY2UgcHJvamVjdHMgaW5jcmVhc2VzIHlvdXIgZXhwb3N1cmUgdG8gZGlmZmVyZW50IHByb2plY3RzIGFuZCBnaXZlcyB5b3UgJyxcbiAgICAgICAgICAgICAgICAnbW9yZSBleHBlcmllbmNlIGluIGNvZGUgZGVzaWduIGFuZCBjb2xsYWJvcmF0aW5nIHdpdGggb3RoZXIgZGV2ZWxvcGVycy4gVGhpcyBpcyBhIG11Y2ggc291Z2h0IGFmdGVyIHNraWxsIHNldCBmb3IgZW1wbG95ZXJzICcsXG4gICAgICAgICAgICAgICAgJ2FuZCBnaXZlcyB5b3UgYmV0dGVyIHByb2Zlc3Npb25hbCBjcmVkaXQuIFRoaXMgZXhwZXJpZW5jZSBjYW4gYWxzbyByZXN1bHQgaW4gYmV0dGVyIHNhbGFyaWVzIGZvciB5b3UgYXMgYW4gZW1wbG95ZWUsIG9yICcsXG4gICAgICAgICAgICAgICAgJ2JldHRlciBob3VybHkgcmF0ZXMgZm9yIHlvdSBhcyBhIGNvbnRyYWN0b3IuJyxcbiAgICAgICAgICAgICc8L3A+JyxcbiAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICdBcyBuZW8ubWpzIGdyb3dzIGFuZCBhZG9wdGlvbiBpbmNyZWFzZXMsIHRoZXJlIHdpbGwgYmUgcHJvamVjdHMgYW5kIGpvYnMgcmVxdWlyaW5nIHNraWxsZWQgYW5kIGV4cGVyaWVuY2VkIG5lby5tanMgZGV2ZWxvcGVycy4gJyxcbiAgICAgICAgICAgICAgICAnV2hpbGUgaXQgY2FuIGJlIHZlcnkgaGFyZCB0byBnZXQgYSByZXB1dGF0aW9uIG9mIGJlaW5nIGEgc2tpbGxlZCBBbmd1bGFyLCBSZWFjdCBvciBWdWUgZGV2ZWxvcGVyIChwcmltYXJpbHkgYmVjYXVzZSBvZiB0aGUgJywgXG4gICAgICAgICAgICAgICAgJ2VzdGFibGlzaGVkIGxhcmdlIGRldmVsb3BlciBjb21tdW5pdHkpIGl0IHdpbGwgYmUgdGhlIHBpb25lZXIgY29udHJpYnV0b3JzIGFuZCBhZG9wdGVycyBvZiBuZW8ubWpzIHdobyB3aWxsIGdhaW4gcmVwdXRhdGlvbiAnLFxuICAgICAgICAgICAgICAgICdhcyBiZWluZyBhbiBleHBlcnQgaW4gdGhpcyBmcmFtZXdvcmsuJyxcbiAgICAgICAgICAgICc8L3A+JyxcbiAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICdXZSBwbGFuIG9uIGNyZWF0aW5nIGEgPGI+Q2VydGlmaWVkIERldmVsb3BlcjwvYj4gcHJvZ3JhbSBhbmQgdGhvc2Ugd2hvIHNob3cgYSB0cnVlIGludGVyZXN0IGluIGJlaW5nIGEgY29udHJpYnV0b3IgYW5kICcsXG4gICAgICAgICAgICAgICAgJ2FtYmFzc2Fkb3IgZm9yIG5lby5tanMgd2lsbCBiZSB0aGUgZmlyc3QgdG8gcmVjZWl2ZSBzdWNoIGNlcnRpZmljYXRpb24uIFRoaXMgd2lsbCBiZSBvdXIgd2F5IG9mIHRoYW5raW5nIHlvdSBmb3IgeW91ciB3b3JrIGFuZCAnLFxuICAgICAgICAgICAgICAgICdkZWRpY2F0aW9uIHRvIG5lby5tanMuJyxcbiAgICAgICAgICAgICc8L3A+JyxcbiAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICdBbmQgZmluYWxseSwgaWYgeW91IGhhdmUgaGFkIHRoZSBjaGFuY2UgdG8gcmVhZCB0aGUgRXhlY3V0aXZlc1xcJyBJbnRyb2R1Y3Rpb24sIHlvdSB3aWxsIGFsc28ga25vdyB0aGF0IHdlIHBsYW4gb24gJyxcbiAgICAgICAgICAgICAgICAnY3JlYXRpbmcgam9icyBhbmQgY29udHJhY3RvciBwb3NpdGlvbnMgd2hlbiB3ZSBnZXQgZmluYW5jaWFsbHkgc3VzdGFpbmFibGUuIE9mIGNvdXJzZSwgd2Ugd2lsbCBiZSBsb29raW5nIHRvIG91ciAnLFxuICAgICAgICAgICAgICAgICdjb250cmlidXRvcnMgZmlyc3QgdG8gZnVsZmlsbCB0aGVzZSBwb3NpdGlvbnMuJyxcbiAgICAgICAgICAgICc8L3A+JyxcbiAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICdUaGFuayB5b3UgZm9yIHRha2luZyB0aGUgdGltZSB0byByZWFkIHRoaXMgYW5kIHdlIGxvb2sgZm9yd2FyZCB0byB0aGUgZnV0dXJlIG9mIG5lby5tanMgYW5kIHlvdXIgcGFydGljaXBhdGlvbiBpbiBpdCEnLFxuICAgICAgICAgICAgJzwvcD4nLFxuICAgICAgICBdLmpvaW4oJycpfVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKERldmVsb3BlckludHJvQ29tcG9uZW50KTtcblxuZXhwb3J0IHtEZXZlbG9wZXJJbnRyb0NvbXBvbmVudCBhcyBkZWZhdWx0fTtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFdlYnNpdGUudmlldy5ob21lLkV4ZWN1dGl2ZUludHJvQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgRXhlY3V0aXZlSW50cm9Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdXZWJzaXRlLnZpZXcuaG9tZS5FeGVjdXRpdmVJbnRyb0NvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnV2Vic2l0ZS52aWV3LmhvbWUuRXhlY3V0aXZlSW50cm9Db21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ3dlYnNpdGUtaW50cm8tY29tcG9uZW50J11cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ3dlYnNpdGUtaW50cm8tY29tcG9uZW50J10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX0gZG9tTGlzdGVuZXJzXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGRvbUxpc3RlbmVyczogW3tcbiAgICAgICAgICAgIGNsaWNrICAgOiAnb25OYXZMaW5rQ2xpY2snLFxuICAgICAgICAgICAgZGVsZWdhdGU6ICcubmF2LWxpbmsnXG4gICAgICAgIH1dLFxuICAgICAgICAvKipcbiAgICAgICAgICogRm9yIGR5bmFtaWMgc3RydWN0dXJlcywgeW91IHdvdWxkIHVzZSB0aGUgSlNPTiBiYXNlZCBzeW50YXhcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSB2ZG9tXG4gICAgICAgICAqL1xuICAgICAgICB2ZG9tOiB7aW5uZXJIVE1MOiBbXG4gICAgICAgICAgICAnPGgxPkNvbnRlbnQ8L2gxPicsXG4gICAgICAgICAgICAnPG9sPicsXG4gICAgICAgICAgICAgICAgJzxsaT48YSBjbGFzcz1cIm5hdi1saW5rXCIgZGF0YS10YXJnZXQ9XCJleGVjLW5hdi0xXCI+SW50cm9kdWN0aW9uPC9hPjwvbGk+JyxcbiAgICAgICAgICAgICAgICAnPGxpPicsXG4gICAgICAgICAgICAgICAgICAgICc8YSBjbGFzcz1cIm5hdi1saW5rXCIgZGF0YS10YXJnZXQ9XCJleGVjLW5hdi0yXCI+Q3VycmVudCBwYWluIHBvaW50cyBpbnNpZGUgdGhlIFVJIHNlY3RvcjwvYT4nLFxuICAgICAgICAgICAgICAgICAgICAnPHVsPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGxpPjIuMSA8YSBjbGFzcz1cIm5hdi1saW5rXCIgZGF0YS10YXJnZXQ9XCJleGVjLW5hdi0yLjFcIj5QZXJmb3JtYW5jZTwvYT48L2xpPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGxpPjIuMiA8YSBjbGFzcz1cIm5hdi1saW5rXCIgZGF0YS10YXJnZXQ9XCJleGVjLW5hdi0yLjJcIj5NdWx0aSBCcm93c2VyIFdpbmRvdyBBcHBzPC9hPjwvbGk+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICc8bGk+Mi4zIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBkYXRhLXRhcmdldD1cImV4ZWMtbmF2LTIuM1wiPkRldmVsb3BpbmcgVUlzIGluc2lkZSBub2RlanM8L2E+PC9saT4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxsaT4yLjQgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGRhdGEtdGFyZ2V0PVwiZXhlYy1uYXYtMi40XCI+U2NhbGFibGUgQXJjaGl0ZWN0dXJlczwvYT48L2xpPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGxpPjIuNSA8YSBjbGFzcz1cIm5hdi1saW5rXCIgZGF0YS10YXJnZXQ9XCJleGVjLW5hdi0yLjVcIj5NZW1vcnkgTGVha3M8L2E+PC9saT4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxsaT4yLjYgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGRhdGEtdGFyZ2V0PVwiZXhlYy1uYXYtMi42XCI+Tm8gVGVtcGxhdGVzPC9hPjwvbGk+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICc8bGk+Mi43IDxhIGNsYXNzPVwibmF2LWxpbmtcIiBkYXRhLXRhcmdldD1cImV4ZWMtbmF2LTIuN1wiPkNvbnNpc3RlbnQgQ29kZTwvYT48L2xpPicsXG4gICAgICAgICAgICAgICAgICAgICc8L3VsPicsXG4gICAgICAgICAgICAgICAgJzwvbGk+JyxcbiAgICAgICAgICAgICAgICAnPGxpPjxhIGNsYXNzPVwibmF2LWxpbmtcIiBkYXRhLXRhcmdldD1cImV4ZWMtbmF2LTNcIj5TcG9uc29yc2hpcDwvYT48L2xpPicsXG4gICAgICAgICAgICAgICAgJzxsaT4nLFxuICAgICAgICAgICAgICAgICAgICAnPGEgY2xhc3M9XCJuYXYtbGlua1wiIGRhdGEtdGFyZ2V0PVwiZXhlYy1uYXYtNFwiPlRoZSBwbGFubmVkIEJ1c2luZXNzIE1vZGVsIChCYWFTKTwvYT4nLFxuICAgICAgICAgICAgICAgICc8dWw+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxsaT40LjEgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGRhdGEtdGFyZ2V0PVwiZXhlYy1uYXYtNC4xXCI+UHJvZmVzc2lvbmFsIFNlcnZpY2VzPC9hPjwvbGk+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxsaT40LjIgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGRhdGEtdGFyZ2V0PVwiZXhlYy1uYXYtNC4yXCI+VHJhaW5pbmdzPC9hPjwvbGk+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxsaT40LjMgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGRhdGEtdGFyZ2V0PVwiZXhlYy1uYXYtNC4zXCI+U3VwcG9ydDwvYT48L2xpPicsXG4gICAgICAgICAgICAgICAgICAgICc8bGk+NC40IDxhIGNsYXNzPVwibmF2LWxpbmtcIiBkYXRhLXRhcmdldD1cImV4ZWMtbmF2LTQuNFwiPkRldmVsb3BlciBDZXJ0aWZpY2F0aW9uczwvYT48L2xpPicsXG4gICAgICAgICAgICAgICAgICAgICc8L3VsPicsXG4gICAgICAgICAgICAgICAgJzwvbGk+JyxcbiAgICAgICAgICAgICAgICAnPGxpPjxhIGNsYXNzPVwibmF2LWxpbmtcIiBkYXRhLXRhcmdldD1cImV4ZWMtbmF2LTVcIj5Zb3UgY2FuIGluZmx1ZW5jZSB0aGUgbmVvLm1qcyByb2FkbWFwPC9hPjwvbGk+JyxcbiAgICAgICAgICAgICAgICAnPGxpPjxhIGNsYXNzPVwibmF2LWxpbmtcIiBkYXRhLXRhcmdldD1cImV4ZWMtbmF2LTZcIj5EbyB5b3UgbmVlZCBoZWxwIGNyZWF0aW5nIGEgcHJvdG90eXBlIEFwcCBmb3IgeW91ciB1c2UgY2FzZT88L2E+PC9saT4nLFxuICAgICAgICAgICAgICAgICc8bGk+PGEgY2xhc3M9XCJuYXYtbGlua1wiIGRhdGEtdGFyZ2V0PVwiZXhlYy1uYXYtN1wiPldoYXQgaXMgdGhlIGxvbmcgdGVybSBnb2FsPzwvYT48L2xpPicsXG4gICAgICAgICAgICAgICAgJzxsaT48YSBjbGFzcz1cIm5hdi1saW5rXCIgZGF0YS10YXJnZXQ9XCJleGVjLW5hdi04XCI+Q2FuIEkgam9pbiBhcyBhbiBpbnZlc3Rvcj88L2E+PC9saT4nLFxuICAgICAgICAgICAgICAgICc8bGk+PGEgY2xhc3M9XCJuYXYtbGlua1wiIGRhdGEtdGFyZ2V0PVwiZXhlYy1uYXYtOVwiPkhvdyB0byBnZXQgaW4gdG91Y2g/PC9hPjwvbGk+JyxcbiAgICAgICAgICAgICc8L29sPicsXG4gICAgICAgICAgICAnPGgxIGNsYXNzPVwibmF2LXRhcmdldFwiIGlkPVwiZXhlYy1uYXYtMVwiPjEuIEludHJvZHVjdGlvbjwvaDE+JyxcbiAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICduZW8ubWpzIGlzIHRoZSBuZXh0IGdlbmVyYXRpb24gVUkgZnJhbWV3b3JrIGZvciBjcmVhdGluZyBkZXNrdG9wICYgbW9iaWxlIFdlYiBBcHBzLiAnLFxuICAgICAgICAgICAgICAgICdJdCBoYXMgYSB2ZXJ5IHN0cm9uZyBmb2N1cyBvbiBwZXJmb3JtYW5jZSBhbmQgY3JlYXRpbmcgc2NhbGFibGUgJiBtb2R1bGFyIGFyY2hpdGVjdHVyZXMuICcsXG4gICAgICAgICAgICAgICAgJ0EgY2xlYW4gJiBjb25zaXN0ZW50IEFQSSwgYXMgd2VsbCBhcyB0aGUgYWJpbGl0eSB0byBydW4gd2l0aG91dCBhbnkgYnVpbGQgcHJvY2Vzc2VzLCAnLFxuICAgICAgICAgICAgICAgICd3aWxsIGluY3JlYXNlIHRoZSBwcm9kdWN0aXZpdHkgb2YgeW91ciB0ZWFtLCB3aGlsZSBjcmVhdGluZyBiZXR0ZXIgc29sdXRpb25zIGF0IHRoZSBzYW1lIHRpbWUuJyxcbiAgICAgICAgICAgICc8L3A+JyxcbiAgICAgICAgICAgICc8aDEgY2xhc3M9XCJuYXYtdGFyZ2V0XCIgaWQ9XCJleGVjLW5hdi0yXCI+Mi4gQ3VycmVudCBwYWluIHBvaW50cyBpbnNpZGUgdGhlIFVJIHNlY3RvcjwvaDE+JyxcbiAgICAgICAgICAgICc8b2w+JyxcbiAgICAgICAgICAgICAgICAnPGxpPicsXG4gICAgICAgICAgICAgICAgICAgICc8YiBjbGFzcz1cIm5hdi10YXJnZXRcIiBpZD1cImV4ZWMtbmF2LTIuMVwiPlBlcmZvcm1hbmNlPC9iPicsXG4gICAgICAgICAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxiPlByb2JsZW06PC9iPiBXaGlsZSBjdXJyZW50IGxpYnJhcmllcyAvIGZyYW1ld29ya3MgbGlrZSBBbmd1bGFyLCBSZWFjdCBvciBWdWUgcHJvdmlkZSBhIHJlYXNvbmFibGUgcGVyZm9ybWFuY2UgZm9yICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnc21hbGwgb3IgbW9zdGx5IHN0YXRpYyBBcHBzLCB0aGV5IGxhY2sgd2hlbiBpdCBjb21lcyB0byBiaWcgQXBwcyBvciBjb21wbGV4IENvbXBvbmVudHMuICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnVGhlIHByb2JsZW0gaXMsIHRoYXQgbW9zdCBBcHBzIHRvZGF5IHJ1biB3aXRoaW4gYSBzaW5nbGUgdGhyZWFkIChDUFUpLCB3aGlsZSBlYWNoIGNvbXB1dGVyIG9yIG1vYmlsZSAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RldmljZSBoYXMgc2V2ZXJhbCBDUFVzIGF2YWlsYWJsZS4gU29tZSBBcHBzIG1vdmUgZXhwZW5zaXZlIHRhc2tzIGludG8gc2VwYXJhdGUgdGhyZWFkcywgYnV0IHRoaXMgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdpcyBieSBmYXIgbm90IGVub3VnaC4nLFxuICAgICAgICAgICAgICAgICAgICAnPC9wPicsXG4gICAgICAgICAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxiPlNvbHV0aW9uOjwvYj4gVXNpbmcgbmVvLm1qcywgbW9zdCBwYXJ0cyBvZiB0aGUgZnJhbWV3b3JrIGFzIHdlbGwgYXMgdGhlIEFwcHMgd2hpY2ggeW91IGNyZWF0ZSAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3dpdGggaXQsIHJ1biBpbnNpZGUgYSBzZXBhcmF0ZSB0aHJlYWQuIFRoaXMgYXJjaGl0ZWN0dXJlIGxlYXZlcyB0aGUgbWFpbiB0aHJlYWQgbW9zdGx5IGlkbGUsIHNvICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnaXQgY2FuIGZ1bGx5IGNvbmNlbnRyYXRlIG9uIGl0cyBwdXJwb3NlOiB0byBvbmx5IG1hbmlwdWxhdGUgdGhlIHJlYWwgRE9NIChIVE1MKS4gRXhwZW5zaXZlIHRhc2tzICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnc2ltcGx5IGNhbiBub3QgaW50ZXJmZXJlIHdpdGggeW91ciBhbmltYXRpb25zIG9yIGV2ZW4gZnJlZXplIHlvdXIgVUkuJyxcbiAgICAgICAgICAgICAgICAgICAgJzwvcD4nLFxuICAgICAgICAgICAgICAgICc8L2xpPicsXG4gICAgICAgICAgICAgICAgJzxsaT4nLFxuICAgICAgICAgICAgICAgICAgICAnPGIgY2xhc3M9XCJuYXYtdGFyZ2V0XCIgaWQ9XCJleGVjLW5hdi0yLjJcIj5NdWx0aSBCcm93c2VyIFdpbmRvdyBBcHBzPC9iPicsXG4gICAgICAgICAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxiPlByb2JsZW06PC9iPiBFeHBhbmRpbmcgU2luZ2xlIFBhZ2UgQXBwcyBpbnRvIG11bHRpcGxlIEJyb3dzZXIgV2luZG93cyBpcyBzaW1wbHkgaW1wb3NzaWJsZSAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3dpdGggYW55IG90aGVyIGxpYnJhcnkgb3IgZnJhbWV3b3JrIG91dCB0aGVyZS4nLFxuICAgICAgICAgICAgICAgICAgICAnPC9wPicsXG4gICAgICAgICAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxiPlNvbHV0aW9uOjwvYj4gVXNpbmcgbmVvLm1qcywgeW91IGNhbiBkbyBpdCB0b2RheS4gV2l0aCB0aGUgU2hhcmVkV29ya2VycyBzZXR1cCwgeW91IGNhbiBub3QgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdvbmx5IGRpcmVjdGx5IGNvbW11bmljYXRlIGJldHdlZW4gV2luZG93cywgYnV0IHlvdSBjYW4gbW92ZSBlbnRpcmUgQ29tcG9uZW50IHRyZWVzIGFyb3VuZCwgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZS11c2luZyB0aGUgc2FtZSBKUyBpbnN0YW5jZXMgYW5kIG5vIG5lZWQgdG8gY2FyZSBhYm91dCBET00gZXZlbnRzLiBUaGlzIGFyY2hpdGVjdHVyZSB3aWxsIHJvY2sgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdvbiBtb2JpbGUgZGV2aWNlcyBhcyB3ZWxsLCBhcyBzb29uIGFzIHRoZSBXZWJraXQgdGVhbSBjYXRjaGVzIHVwLiBJbWFnaW5lIGEgTmF0aXZlIFNoZWxsIHVzaW5nICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnbXVsdGlwbGUgV2ViVmlld3MuIFRha2UgYSBsb29rIGF0OicsXG4gICAgICAgICAgICAgICAgICAgICc8L3A+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxwPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vbWVkaXVtLmNvbS9zd2xoL2V4cGFuZGluZy1zaW5nbGUtcGFnZS1hcHBzLWludG8tbXVsdGlwbGUtYnJvd3Nlci13aW5kb3dzLWU2ZDliZDE1NWQ1OT9zb3VyY2U9ZnJpZW5kc19saW5rJnNrPWJiZmUxZGFkYTk1YzU2NzQ2NjllNDYzZjkzMzYwODIyXCI+RXhwYW5kaW5nIFNpbmdsZSBQYWdlIEFwcHMgaW50byBtdWx0aXBsZSBCcm93c2VyIFdpbmRvd3M8L2E+JyxcbiAgICAgICAgICAgICAgICAgICAgJzwvcD4nLFxuICAgICAgICAgICAgICAgJzwvbGk+JyxcbiAgICAgICAgICAgICAgICAnPGxpPicsXG4gICAgICAgICAgICAgICAgICAgICc8YiBjbGFzcz1cIm5hdi10YXJnZXRcIiBpZD1cImV4ZWMtbmF2LTIuM1wiPkRldmVsb3BpbmcgVUlzIGluc2lkZSBub2RlanM8L2I+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxwPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGI+UHJvYmxlbTo8L2I+IG5vZGVqcyBldm9sdmVkIGZhc3RlciB0aGFuIEpTIGluc2lkZSBCcm93c2VycywgYnV0IGRpZCBub3Qgc3RpY2sgdG8gVzNDIHN0YW5kYXJkcy4gJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdMaWJyYXJpZXMgLyBmcmFtZXdvcmtzIGxpa2UgQW5ndWxhciwgUmVhY3QgJiBWdWUgcGlja2VkIHRoaXMgdXAgYW5kIG1vdmVkIHRoZSBlbnRpcmUgVUkgZGV2ZWxvcG1lbnQgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdpbnRvIG5vZGVqcy4gVGhpcyBhbGxvd3MgZGV2ZWxvcGVycyB0byB1c2UgRVM2KyBmZWF0dXJlcyBsaWtlIGNsYXNzZXMgJiBKUyBtb2R1bGVzLCBidXQgYXQgYW4gZXh0cmVtZWx5ICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnaGlnaCBjb3N0OiBldmVyeSBjaGFuZ2UgaW5zaWRlIHlvdXIgY29kZSBiYXNlIHJlcXVpcmVzIGEgYnVpbGQgb3IgdHJhbnNwaWxhdGlvbiwgYmVmb3JlIHlvdSBjYW4gc2VlIGl0LiAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0FuIGVudGlyZSBlY29zeXN0ZW0gZXZvbHZlZCwgbGlrZSBob3QgbW9kdWxlIHJlcGxhY2VtZW50cyAmIHVzaW5nIHNvdXJjZSBtYXBzIHRvIHJlZHVjZSB0aGUgcGFpbiBwb2ludCBhIGJpdC4nLFxuICAgICAgICAgICAgICAgICAgICAnPC9wPicsXG4gICAgICAgICAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxiPlNvbHV0aW9uOjwvYj4gSW4gYSBjb3VwbGUgb2YgeWVhcnMsIHdlIHdpbGwgbW9zdCBsaWtlbHkgbG9vayBiYWNrIGF0IHRoaXMgbWFkbmVzcyBhbmQgbGF1Z2guIENhbGxpbmcgaXQgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdcImEgaGljY3VwIGluIHRoZSBoaXN0b3J5IG9mIFdlYiBEZXZlbG9wbWVudFwiLiBCcm93c2VycyBkaWQgY2F0Y2ggdXAuIFVzaW5nIG5lby5tanMsIHlvdSBjYW4gcnVuIHRoZSBEZXZlbG9wbWVudCAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ01vZGUgZGlyZWN0bHkgaW5zaWRlIHRoZSBCcm93c2VyLiBObyBidWlsZCBwcm9jZXNzZXMgb3Igc291cmNlIG1hcHMgbmVlZGVkLiBZb3UgY2FuIGRlYnVnIHRoZSByZWFsIEVTOCsgY29kZS4gJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdUaGlzIGhhcyBzYXZlZCBtZSBhIGxvdCBvZiB0aW1lIGFscmVhZHksIHNpbmNlIGl0IGlzIHRoZSBiZXN0IHBvc3NpYmxlIGRlYnVnZ2luZyBleHBlcmllbmNlLicsXG4gICAgICAgICAgICAgICAgICAgICc8L3A+JyxcbiAgICAgICAgICAgICAgICAnPC9saT4nLFxuICAgICAgICAgICAgICAgICc8bGk+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxiIGNsYXNzPVwibmF2LXRhcmdldFwiIGlkPVwiZXhlYy1uYXYtMi40XCI+U2NhbGFibGUgQXJjaGl0ZWN0dXJlczwvYj4nLFxuICAgICAgICAgICAgICAgICAgICAnPHA+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICc8Yj5Qcm9ibGVtOjwvYj4gV2hpbGUgc2NhbGFiaWxpdHkgaXMgYW4gaW1wb3J0YW50IGl0ZW0gaW5zaWRlIHRoZSBiYWNrZW5kIGFyZWEgKENsb3VkKSwgaXQgZ290IG1vc3RseSAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2lnbm9yZWQgb24gdGhlIGZyb250ZW5kIHNpZGUgc28gZmFyLicsXG4gICAgICAgICAgICAgICAgICAgICc8L3A+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxwPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGI+U29sdXRpb246PC9iPiBXaXRoIHRoZSBjdXJyZW50IHdvcmtlciBzZXR1cCwgeW91IGFscmVhZHkgaGF2ZSBhIHNvbGlkIHN0YXJ0aW5nIHBvaW50LiBXZSBjYW4gZnVydGhlciBlbmhhbmNlIHRoaXMsICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnaWYgbmVlZGVkLiBFLmcuIGFkZCBhIHNlY29uZCBWZG9tIHdvcmtlciwgaW4gY2FzZSB0aGlzIG9uZSBpcyBhIGJvdHRsZS1uZWNrLiBZb3UgY2FuIHN0aWNrIHRvIGNvbW1vbiAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3BhdHRlcm5zIGxpa2UgTVZDIG9yIE1WVk0sIGlmIHlvdSBsaWtlIHRvLiBZb3UgY2FuIGNyZWF0ZSBtdWx0aXBsZSBBcHBzIG9uIG9uZSBwYWdlIGFuZCB3aXRoIHVzaW5nICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnSlMgTW9kdWxlcywgeW91IGNhbiBsYXp5IGxvYWQgY2xhc3NlcyA9PiBwYWNrYWdlcyBhcyBuZWVkZWQuJyxcbiAgICAgICAgICAgICAgICAgICAgJzwvcD4nLFxuICAgICAgICAgICAgICAgICc8L2xpPicsXG4gICAgICAgICAgICAgICAgJzxsaT4nLFxuICAgICAgICAgICAgICAgICAgICAnPGIgY2xhc3M9XCJuYXYtdGFyZ2V0XCIgaWQ9XCJleGVjLW5hdi0yLjVcIj5NZW1vcnkgTGVha3M8L2I+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxwPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGI+UHJvYmxlbTo8L2I+IERlc3Ryb3lpbmcgJiByZS1jcmVhdGluZyBDb21wb25lbnQgVHJlZXMgY2FuIGVhc2lseSBsZWFkIHRvIG1lbW9yeSBsZWFrcy4gRXNwZWNpYWxseSBpbiBjYXNlIHRoZSBkZXN0cnVjdGlvbiAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2xvZ2ljIG9mIHNlbGYgY3JlYXRlZCBDb21wb25lbnRzIGlzIG5vdCBmdWxseSBwb2xpc2hlZC4nLFxuICAgICAgICAgICAgICAgICAgICAnPC9wPicsXG4gICAgICAgICAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxiPlNvbHV0aW9uOjwvYj4gVXNpbmcgbmVvLm1qcywgeW91IGNhbiBlYXNpbHkgcmUtdXNlIGV4aXN0aW5nICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnSlMgaW5zdGFuY2VzIGFuZCBqdXN0IHVubW91bnQgJiByZS1tb3VudCB0aGVpciAoVilET00uIFlvdSBjYW4gZWFzaWx5IG1vdmUgQ29tcG9uZW50cyBUcmVlcyB0byBkaWZmZXJlbnQgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdzcG90cyBpbnNpZGUgeW91ciBBcHAgYXMgd2VsbC4nLFxuICAgICAgICAgICAgICAgICAgICAnPC9wPicsXG4gICAgICAgICAgICAgICAgJzwvbGk+JyxcbiAgICAgICAgICAgICAgICAnPGxpPicsXG4gICAgICAgICAgICAgICAgICAgICc8YiBjbGFzcz1cIm5hdi10YXJnZXRcIiBpZD1cImV4ZWMtbmF2LTIuNlwiPlRlbXBsYXRlczwvYj4nLFxuICAgICAgICAgICAgICAgICAgICAnPHA+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICc8Yj5Qcm9ibGVtOjwvYj4gQ2xvc2UgdG8gYWxsIGN1cnJlbnQgbGlicmFyaWVzIC8gZnJhbWV3b3JrcyBvdXQgdGhlcmUgYXJlIHRlbXBsYXRlIGRyaXZlbi4gRGV2ZWxvcGVycyBoYXZlIHRvIGNyZWF0ZSAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2EgY29tcGFjdCwgYnV0IHZlcnkgbWVzc3kgcHNldWRvIFhNTCBtYXJrdXAuIFZhcmlhYmxlcyBhbmQgbWV0aG9kcyBnZXQgbWl4ZWQgaW50byB0aGVtLCB3aXRoIHZhcmlvdXMgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdjb21iaW5hdGlvbnMgb2YgYnJhY2tldHMuIEVzcGVjaWFsbHkgY29tcGxleCBDb21wb25lbnRzIGxpa2UgYSBHcmlkIChUYWJsZSkgY2FuIGNvbnRhaW4gb3ZlciAxMDAwIGxpbmVzICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnaW5jbHVkaW5nIGJpZyBhbW91bnRzIG9mIHRlbXBsYXRlIGlmICYgZWxzZSBzdGF0ZW1lbnRzLiBXaGlsZSB5b3UgY2FuIGNvbXBpbGUgdGhlbSBhdCBidWlsZCB0aW1lIChlLmcuIFN2ZWx0ZSksICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAndGhleSBhcmUgdmVyeSBzdGF0aWMuIENoYW5nZXMgYXQgcnVudGltZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAndGhpcyBsZWF2ZXMnLFxuICAgICAgICAgICAgICAgICAgICAnPC9wPicsXG4gICAgICAgICAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxiPlNvbHV0aW9uOjwvYj4gVGhlcmUgYXJlIG5vIHRlbXBsYXRlcyBpbnNpZGUgbmVvLm1qcy4gSW5zdGVhZCwgeW91IGNyZWF0ZSBhIEpTT04gYmFzZWQgdmlydHVhbCBET00gdHJlZSAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJyhhIGJpdCBzaW1pbGFyIHRvIGNyZWF0aW5nIGEgc2ltcGxpZmllZCBKU1ggb3V0cHV0KS4gWW91IGNhbiBkeW5hbWljYWxseSBjaGFuZ2UgdGhlc2Ugc3RydWN0dXJlcyBhbnkgd2F5ICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAneW91IGxpa2UgdG8uIFRoZXJlIGlzIG5vIG5lZWQgZm9yIHBhcnNpbmcgdGhlIHN0cnVjdHVyZXMsIHNpbmNlIEpTIGlzIG1lYW50IHRvIHdvcmsgd2l0aCBvYmplY3RzICYgYXJyYXlzLiAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1RoZSBwZXJmb3JtYW5jZSBnYWluIGZvciBydW4tdGltZSBjaGFuZ2VzIGlzIHNpZ25pZmljYW50LiBUaGUgYmVzdCBwYXJ0IGlzIHRoYXQgeW91IGNhbiBtb2RpZnkgdGhlIHZkb20gdHJlc3MgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdleGFjdGx5IHRoZSBzYW1lIHdheSB0aHJvdWdob3V0IHRoZSBlbnRpcmUgQ29tcG9uZW50IGxpZmVjeWNsZSAoZS5nLiBiZWZvcmUgJiBhZnRlciBtb3VudGluZykuJyxcbiAgICAgICAgICAgICAgICAgICAgJzwvcD4nLFxuICAgICAgICAgICAgICAgICc8L2xpPicsXG4gICAgICAgICAgICAgICAgJzxsaT4nLFxuICAgICAgICAgICAgICAgICAgICAnPGIgY2xhc3M9XCJuYXYtdGFyZ2V0XCIgaWQ9XCJleGVjLW5hdi0yLjdcIj5Db25zaXN0ZW50IENvZGU8L2I+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxwPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGI+UHJvYmxlbTo8L2I+IEVzcGVjaWFsbHkgd2hlbiB3b3JraW5nIHdpdGggbGlicmFyaWVzIChlLmcuIFJlYWN0KSwgeW91IGRvblxcJ3QgZ2V0IGV2ZXJ5dGhpbmcgeW91IG5lZWQgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmb3IgY3JlYXRpbmcgYW4gVUkuIFlvdSB3aWxsIG5lZWQgc2V2ZXJhbCAzcmQgcGFydHkgZXh0ZW5zaW9ucywgd2hpY2ggd29uXFwndCBwcm92aWRlIGEgY29uc2lzdGVudCBjb2RlICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmFzZS4gQW5vdGhlciBiaWcgcHJvYmxlbSBpcywgdGhhdCBsaWJyYXJpZXMgbGlrZSBSZWFjdCBkbyBub3QgZXhwb3NlIGEgY29yZS4gQ29tcG9uZW50IGlzIHRoZSBiYXNlIGNsYXNzICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZm9yIGV2ZXJ5dGhpbmcgYW5kIHRoaXMgbWFrZXMgbm8gc2Vuc2UuIEEgcm91dGVyLCBjb250cm9sbGVyIG9yIHV0aWxpdHkgY2xhc3MgZG9lcyBub3QgaGF2ZSBhIERPTSBvdXRwdXQsICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnc28gdGhleSByZWFsbHkgc2hvdWxkIG5vdCB1c2UgQ29tcG9uZW50IGFzIHRoZSBiYXNlIGNsYXNzLicsXG4gICAgICAgICAgICAgICAgICAgICc8L3A+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxwPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGI+U29sdXRpb246PC9iPiBuZW8ubWpzIGlzIGEgZnJhbWV3b3JrLCBub3QgYSBsaWJyYXJ5LiBUaGUgY29yZSBpcyBleHBvc2VkIChjb3JlLkJhc2UpLiBUaGVyZSBhcmUgYWxyZWFkeSAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2EgYmlnIGFtb3VudCBhIGNsYXNzZXMgYXZhaWxhYmxlLCB3aGljaCBmb2xsb3cgdGhlIHNhbWUgZGVzaWduIHBhdHRlcm5zICYgQVBJLiBuZW8ubWpzIGlzIGNyZWF0ZWQgd2l0aCBhICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3Ryb25nIGZvY3VzIG9uIGJlaW5nIGV4dGVuZGFibGUuIEl0IGlzIHZlcnkgZWFzeSB0byBjcmVhdGUgbmV3IENvbXBvbmVudHMgb3Igb3RoZXIgY2xhc3NlcyBvbiB5b3VyIG93bi4nLFxuICAgICAgICAgICAgICAgICAgICAnPC9wPicsXG4gICAgICAgICAgICAgICAgJzwvbGk+JyxcbiAgICAgICAgICAgICc8L29sPicsXG4gICAgICAgICAgICAnPGgxIGNsYXNzPVwibmF2LXRhcmdldFwiIGlkPVwiZXhlYy1uYXYtM1wiPjMuIFNwb25zb3JzaGlwPC9oMT4nLFxuICAgICAgICAgICAgJzxwPicsXG4gICAgICAgICAgICAgICAgJ1RoZSBlbnRpcmUgbmVvLm1qcyBlY29zeXN0ZW0sIGluY2x1ZGluZyBhbGwgZXhhbXBsZXMgJiBEZW1vIEFwcHMgaXMgb3BlbiBzb3VyY2VkIChNSVQgbGljZW5zZWQpLiAnLFxuICAgICAgICAgICAgICAgICdZb3UgY2FuIHVzZSBpdCBmb3IgZnJlZS4gSG93ZXZlciwgY3JlYXRpbmcgYSBmcmFtZXdvcmsgb2YgdGhpcyBjb21wbGV4aXR5IGlzIHRha2luZyBhIG1hc3NpdmUgYW1vdW50ICcsXG4gICAgICAgICAgICAgICAgJ29mIHRpbWUgYW5kIGVmZm9ydCBvbiBteSBlbmQgYW5kIHdpbGwgY29udGludWUgdG8gZG8gc28uJyxcbiAgICAgICAgICAgICc8L3A+JyxcbiAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICdQbGVhc2UgYXNrIHlvdXJzZWxmIHRoZSBmb2xsb3dpbmcgMiBxdWVzdGlvbnM6JyxcbiAgICAgICAgICAgICc8L3A+JyxcbiAgICAgICAgICAgICc8b2w+JyxcbiAgICAgICAgICAgICAgICAnPGxpPkRvZXMgbmVvLm1qcyBjcmVhdGUgYnVzaW5lc3MgdmFsdWUgZm9yIHlvdXIgY29tcGFueT88L2xpPicsXG4gICAgICAgICAgICAgICAgJzxsaT5XaWxsIGl0IGNyZWF0ZSBidXNpbmVzcyB2YWx1ZSBmb3IgeW91ciBjb21wYW55IGluIHRoZSBmdXR1cmU/PC9saT4nLFxuICAgICAgICAgICAgJzwvb2w+JyxcbiAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICdJZiB0aGUgYW5zd2VyIGZvciBhdCBsZWFzdCBvbmUgb2YgdGhlbSBpcyBcIlllc1wiLCBwbGVhc2UgY29uc2lkZXIgc3VwcG9ydGluZyB0aGUgcHJvamVjdCBhcyBhIHNwb25zb3I6JyxcbiAgICAgICAgICAgICc8L3A+JyxcbiAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICc8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3Nwb25zb3JzL3RvYml1XCI+U2lnbiB1cCBhcyBhIHNwb25zb3I8L2E+JyxcbiAgICAgICAgICAgICc8L3A+JyxcbiAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICdUaGlzIHdpbGwgZW5hYmxlIG1lIHRvIHNwZW5kIG1vcmUgdGltZSBvbiBuZW8ubWpzLCBlbmFibGluZyBtZSB0byBkZXZlbG9wIG5ldyB3aWRnZXRzLCBmZWF0dXJlcyBhbmQgYWRkcmVzcyBidWdmaXhlcyAnLFxuICAgICAgICAgICAgICAgICdtdWNoIGZhc3Rlci4gWW91ciBjb21wYW55IGxvZ28gJiBsaW5rIHdpbGwgZ2V0IGFkZGVkIHRvIGRpZmZlcmVudCBwbGFjZXMgZGVwZW5kaW5nIG9uIHRoZSB0aWVyIGxldmVsLCAnLFxuICAgICAgICAgICAgICAgICd3aGljaCB3aWxsIGluY3JlYXNlIHlvdXIgcmVwdXRhdGlvbiBpbnNpZGUgdGhlIG5lby5tanMgZGV2ZWxvcGVyIGNvbW11bml0eS4nLFxuICAgICAgICAgICAgJzwvcD4nLFxuICAgICAgICAgICAgJzxoMSBjbGFzcz1cIm5hdi10YXJnZXRcIiBpZD1cImV4ZWMtbmF2LTRcIj40LiBUaGUgcGxhbm5lZCBCdXNpbmVzcyBNb2RlbCAoQmFhUyk8L2gxPicsXG4gICAgICAgICAgICAnPHA+JyxcbiAgICAgICAgICAgICAgICAnQnVzaW5lc3MgYXMgYSBTZXJ2aWNlIG1lYW5zIHRvIHByb3ZpZGUgeW91IHdpdGggYWRkaXRpb25hbCBoZWxwLCBpZiBuZWVkZWQuJyxcbiAgICAgICAgICAgICAgICAnPG9sPicsXG4gICAgICAgICAgICAgICAgICAgICc8bGk+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICc8YiBjbGFzcz1cIm5hdi10YXJnZXRcIiBpZD1cImV4ZWMtbmF2LTQuMVwiPlByb2Zlc3Npb25hbCBTZXJ2aWNlczwvYj48L2JyPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnSW4gY2FzZSB5b3UgbmVlZCBoZWxwIHdpdGggeW91ciBBcHAgZGV2ZWxvcG1lbnQsIGNvZGUgcmV2aWV3cyBvciBldmVuIG5ldyBmcmFtZXdvcmsgY29tcG9uZW50cywgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0aGVtZXMgb3IgZmVhdHVyZXMgd2hpY2ggZG8gbm90IGV4aXN0IHlldCwgdGhlIFBTIHRlYW0gd2lsbCBiZSB0aGVyZSBmb3IgeW91LiAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1JlbW90ZSBoZWxwIGlzIGF2YWlsYWJsZSBmb3Ig4oKsMTUwL2gsIG9uc2l0ZSBoZWxwIGZvciDigqwyMDAvaCAocGx1cyB0cmF2ZWwgJiBsb2RnaW5nIGNvc3RzKS4gJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdWQVQgKGlmIGFwcGxpY2FibGUpIGlzIG5vdCBpbmNsdWRlZC4nLFxuICAgICAgICAgICAgICAgICAgICAnPC9saT4nLFxuICAgICAgICAgICAgICAgICAgICAnPGxpPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGIgY2xhc3M9XCJuYXYtdGFyZ2V0XCIgaWQ9XCJleGVjLW5hdi00LjJcIj5UcmFpbmluZ3M8L2I+PC9icj4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1doaWxlIHlvdSBjYW4gbGVhcm4gdXNpbmcgbmVvLm1qcyB3aXRoIGZvbGxvd2luZyB0aGUgcHVibGljbHkgYXZhaWxhYmxlIHR1dG9yaWFscywgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdpdCBjYW4gYmUgYSBuaWNlciBhbmQgbW9yZSBwcm9kdWN0aXZlIGxlYXJuaW5nIGV4cGVyaWVuY2UgdG8gZ2V0IGFuIG9uc2l0ZSB0cmFpbmluZy4gJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICc2IC0gMTUgYXR0ZW5kZWVzLCAxIHdlZWsgKDUgKiA4IGhvdXJzKS4gJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdJIGhhdmUgbW9kZXJhdGVkIHNldmVyYWwgVUkgZnJhbWV3b3JrIHJlbGF0ZWQgdHJhaW5pbmdzIGluIHRoZSBwYXN0LCAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NvIEkgaGF2ZSBhIHZlcnkgZ29vZCBpZGVhIG9uIGhvdyBpdCBzaG91bGQgd29yay4nLFxuICAgICAgICAgICAgICAgICAgICAnPC9saT4nLFxuICAgICAgICAgICAgICAgICAgICAnPGxpPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGIgY2xhc3M9XCJuYXYtdGFyZ2V0XCIgaWQ9XCJleGVjLW5hdi00LjNcIj5TdXBwb3J0PC9iPjwvYnI+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdJbiBjYXNlIHlvdSBuZWVkIGEgZ3VhcmFudGVlZCByZXNwb25zZSB0aW1lIGZvciB5b3VyIHF1ZXN0aW9ucyAmIHRpY2tldHMsIHRoZXJlIHdpbGwgYmUgc3VwcG9ydCAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3BhY2thZ2VzIHRvIGVuc3VyZSB0aGlzLiBUaGUgZXhhY3QgZGV0YWlscyBhcmUgbm90IGZpZ3VyZWQgb3V0IHlldC4nLFxuICAgICAgICAgICAgICAgICAgICAnPC9saT4nLFxuICAgICAgICAgICAgICAgICAgICAnPGxpPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGIgY2xhc3M9XCJuYXYtdGFyZ2V0XCIgaWQ9XCJleGVjLW5hdi00LjRcIj5EZXZlbG9wZXIgQ2VydGlmaWNhdGlvbnM8L2I+PC9icj4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ09uY2UgdGhlcmUgaXMgYSBkZW1hbmQgZm9yIG5lby5tanMgZGV2ZWxvcGVycyBvbiB0aGUgam9iIG1hcmtldCwgSSB3b3VsZCBsaWtlIHRvIGNyZWF0ZSBhIENlcnRpZmljYXRpb24gUHJvZ3JhbSwgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0byBoZWxwIHlvdSBpZGVudGlmeWluZyB0aGUgbW9zdCB0YWxlbnRlZCBkZXZlbG9wZXJzIG1vcmUgZWFzaWx5LicsXG4gICAgICAgICAgICAgICAgICAgICc8L2xpPicsXG4gICAgICAgICAgICAgICAgJzwvb2w+JyxcbiAgICAgICAgICAgICc8L3A+JyxcbiAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICdJbiBjYXNlIHRoZSBCYWFTIG9wdGlvbnMgYXJlIGludGVyZXN0aW5nIGZvciB5b3UsIHlvdSBhcmUgdmVyeSB3ZWxjb21lIHRvIHJlYWNoIG91dCB0byBtZS4nLFxuICAgICAgICAgICAgJzwvcD4nLFxuICAgICAgICAgICAgJzxoMSBjbGFzcz1cIm5hdi10YXJnZXRcIiBpZD1cImV4ZWMtbmF2LTVcIj41LiBZb3UgY2FuIGluZmx1ZW5jZSB0aGUgbmVvLm1qcyByb2FkbWFwPC9oMT4nLFxuICAgICAgICAgICAgJzxwPicsXG4gICAgICAgICAgICAgICAgJ0luIG15IG9waW5pb24sIGEgbGlicmFyeSBsaWtlIFJlYWN0IGlzIGRlc2lnbmVkIHRvIGJlc3QgZml0IHRoZSBuZWVkcyBvZiBGYWNlYm9vay4gJyxcbiAgICAgICAgICAgICAgICAnQXMgYSB0cnVlIG9wZW4gc291cmNlIHByb2plY3QsIHRoZSBmdXR1cmUgZGV2ZWxvcG1lbnQgb2YgdGhlIG5lby5tanMgZnJhbWV3b3JrIGlzIGludGVuZGVkIHRvIGZvY3VzIG9uICcsXG4gICAgICAgICAgICAgICAgJzxiPnlvdXI8L2I+IG5lZWRzIGFzIGdvb2QgYXMgcG9zc2libGUuIFRvIG1ha2UgdGhpcyBoYXBwZW4sIGl0IGlzIGltcG9ydGFudCB0byBjcmVhdGUgbmV3IHRpY2tldHMgb3IgJyxcbiAgICAgICAgICAgICAgICAnY29tbWVudCBvbiBleGlzdGluZyBvbmVzOicsXG4gICAgICAgICAgICAnPC9wPicsXG4gICAgICAgICAgICAnPHA+JyxcbiAgICAgICAgICAgICAgICAnPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9uZW9tanMvbmVvL2lzc3Vlc1wiPm5lby5tanMgaXNzdWVzIHRyYWNrZXI8L2E+JyxcbiAgICAgICAgICAgICc8L3A+JyxcbiAgICAgICAgICAgICc8aDEgY2xhc3M9XCJuYXYtdGFyZ2V0XCIgaWQ9XCJleGVjLW5hdi02XCI+Ni4gRG8geW91IG5lZWQgaGVscCBjcmVhdGluZyBhIHByb3RvdHlwZSBBcHAgZm9yIHlvdXIgdXNlIGNhc2U/PC9oMT4nLFxuICAgICAgICAgICAgJzxwPicsXG4gICAgICAgICAgICAgICAgJ0ZpZ3VyaW5nIG91dCBpZiBuZW8ubWpzIGlzIGEgZ29vZCBmaXQgZm9yIHlvdXIgcHJvamVjdCBjYW4gYmUgdHJpY2t5LiBTZXZlcmFsIGltcHJlc3NpdmUgRGVtbyBBcHBzICcsXG4gICAgICAgICAgICAgICAgJ2V4aXN0IGFscmVhZHksIGJ1dCB0aGVzZSBjYW4gb2J2aW91c2x5IG5vdCBjb3ZlciBhbGwgcG9zc2libGUgYXJlYXMuIEluIGNhc2UgeW91IGRvIG5lZWQgaGVscCBjcmVhdGluZyBhICcsXG4gICAgICAgICAgICAgICAgJ3Byb3RvdHlwZSBBcHAgd2hpY2ggZml0cyB5b3VyIHVzZSBjYXNlLCBmZWVsIGZyZWUgdG8gcmVhY2ggb3V0LiBUaGlzIHdheSwgeW91IGNhbiBjcmVhdGUgcGVyZmVjdCBiZW5jaG1hcmtzICcsXG4gICAgICAgICAgICAgICAgJ29uIHlvdXIgb3duIHRvIGNvbXBhcmUgdGhlIHZhcmlvdXMgZnJhbWV3b3JrIC8gbGlicmFyeSBvcHRpb25zIG91dCB0aGVyZS4nLFxuICAgICAgICAgICAgJzwvcD4nLFxuICAgICAgICAgICAgJzxoMSBjbGFzcz1cIm5hdi10YXJnZXRcIiBpZD1cImV4ZWMtbmF2LTdcIj43LiBXaGF0IGlzIHRoZSBsb25nIHRlcm0gZ29hbD88L2gxPicsXG4gICAgICAgICAgICAnPHA+JyxcbiAgICAgICAgICAgICAgICAnRnJvbSBhIHByb2plY3QgcGVyc3BlY3RpdmUsIHRoZSBnb2FsIGlzIHRvIGZ1cnRoZXIgZW5oYW5jZSB0aGUgZnJhbWV3b3JrICh0aGVyZSBhcmUgYSBsb3QgbW9yZSBpdGVtcyBvbiAnLFxuICAgICAgICAgICAgICAgICd0aGUgcm9hZG1hcCksIHRvIHByb3ZpZGUgeW91IHdpdGggZXZlbiBtb3JlIHdpZGdldHMgJiBmZWF0dXJlcy4nLFxuICAgICAgICAgICAgJzwvcD4nLFxuICAgICAgICAgICAgJzxwPicsXG4gICAgICAgICAgICAgICAgJ0Zyb20gYSBidXNpbmVzcyBwZXJzcGVjdGl2ZSwgSSBhbSBub3QgYWltaW5nIGZvciBhIHF1aWNrIGV4aXQuIE15IGdvYWwgaXMgdG8gY3JlYXRlIGEgdGVhbSBvZiAxMCAtIDIwICcsXG4gICAgICAgICAgICAgICAgJ2Z1bGwgdGltZSBlbXBsb3llZXMgKGNyZWF0aW5nIG5ldyBqb2JzKS4nLFxuICAgICAgICAgICAgJzwvcD4nLFxuICAgICAgICAgICAgJzxwPicsXG4gICAgICAgICAgICAgICAgJzxiPkJvdGggYXNwZWN0cyBhcmUgbGVhZGluZyB0byB0aGUgdWx0aW1hdGUgZ29hbDo8L2I+PC9icj4nLFxuICAgICAgICAgICAgICAgICdDcmVhdGluZyBsb25nIGxhc3RpbmcgY2xpZW50IHJlbGF0aW9uc2hpcHMsICcsXG4gICAgICAgICAgICAgICAgJ3RvIG1ha2UgPGI+eW91cjwvYj4gVXNlciBJbnRlcmZhY2UgZGV2ZWxvcG1lbnQgYXMgc3VjY2Vzc2Z1bCBhcyBwb3NzaWJsZS4nLFxuICAgICAgICAgICAgJzwvcD4nLFxuICAgICAgICAgICAgJzxoMSBjbGFzcz1cIm5hdi10YXJnZXRcIiBpZD1cImV4ZWMtbmF2LThcIj44LiBDYW4gSSBqb2luIGFzIGFuIGludmVzdG9yPzwvaDE+JyxcbiAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICdSaWdodCBub3csIHRoZSBwcmVmZXJyZWQgd2F5IHRvIHN1cHBvcnQgdGhlIG5lby5tanMgcHJvamVjdCBpcyB0byBzaWduIHVwIGFzIGEgc3BvbnNvci4gJyxcbiAgICAgICAgICAgICAgICAnSG93ZXZlciwgSSBhbSBvcGVuIG1pbmRlZC4gSW4gY2FzZSB5b3UgY2FuIHByb3ZpZGUgYSB2ZXJ5IHN0cm9uZyB2YWx1ZSBvbiB0aGUgYnVzaW5lc3Mgc2lkZSwgJyxcbiAgICAgICAgICAgICAgICAnd2UgY2FuIGRlZmluaXRlbHkgdGFsay4gSSBhbSBub3QgbG9va2luZyBmb3IgaW52ZXN0b3JzIHdobyBvbmx5IHdhbnQgdG8gZHJvcCBpbiBtb25leS4nLFxuICAgICAgICAgICAgJzwvcD4nLFxuICAgICAgICAgICAgJzxoMSBjbGFzcz1cIm5hdi10YXJnZXRcIiBpZD1cImV4ZWMtbmF2LTlcIj45LiBIb3cgdG8gZ2V0IGluIHRvdWNoPzwvaDE+JyxcbiAgICAgICAgICAgICc8cD4nLFxuICAgICAgICAgICAgICAgICdGZWVsIGZyZWUgdG8gc2VuZCBtZSBhIGNvbnRhY3QgcmVxdWVzdCBvciBhIHByaXZhdGUgbWVzc2FnZSBvbiBMaW5rZWRJbi4gJyxcbiAgICAgICAgICAgICAgICAnWW91IGFyZSB3ZWxjb21lIHRvIHRha2UgYSBjbG9zZXIgbG9vayBpbnRvIG15IHByb2Zlc3Npb25hbCBleHBlcmllbmNlIChlLmcuIHJlY29tbWVuZGF0aW9ucykgYXMgd2VsbC4nLFxuICAgICAgICAgICAgJzwvcD4nLFxuICAgICAgICAgICAgJzxwPicsXG4gICAgICAgICAgICAgICAgJzxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vdG9iaWFzdWhsaWcvXCI+VG9iaWFzIFVobGlnXFwncyBMaW5rZWRJbiBQcm9maWxlPC9hPicsXG4gICAgICAgICAgICAnPC9wPidcbiAgICAgICAgXS5qb2luKCcnKX1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhFeGVjdXRpdmVJbnRyb0NvbXBvbmVudCk7XG5cbmV4cG9ydCB7RXhlY3V0aXZlSW50cm9Db21wb25lbnQgYXMgZGVmYXVsdH07XG4iLCJpbXBvcnQgQ29udGFpbmVyICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9zcmMvdGFiL0NvbnRhaW5lci5tanMnO1xuaW1wb3J0IERldmVsb3BlckludHJvQ29tcG9uZW50IGZyb20gJy4vRGV2ZWxvcGVySW50cm9Db21wb25lbnQubWpzJztcbmltcG9ydCBFeGVjdXRpdmVJbnRyb0NvbXBvbmVudCBmcm9tICcuL0V4ZWN1dGl2ZUludHJvQ29tcG9uZW50Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFdlYnNpdGUudmlldy5ob21lLlRhYkNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5CYXNlXG4gKi9cbmNsYXNzIFRhYkNvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1dlYnNpdGUudmlldy5ob21lLlRhYkNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnV2Vic2l0ZS52aWV3LmhvbWUuVGFiQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gYWN0aXZlSW5kZXg9MVxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZlSW5kZXg6IDEsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnd2Vic2l0ZS1ob21lLXRhYi1jb250YWluZXInLCAnbmVvLXRhYi1jb250YWluZXInXSxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ3dlYnNpdGUtaG9tZS10YWItY29udGFpbmVyJywgJ25lby10YWItY29udGFpbmVyJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gaXRlbXNcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICAgOiBEZXZlbG9wZXJJbnRyb0NvbXBvbmVudCxcbiAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1jaGVzcy1wYXduJyxcbiAgICAgICAgICAgICAgICByb3V0ZSAgOiAnY2hpbGR2aWV3PWRldmVsb3BlcnMnLFxuICAgICAgICAgICAgICAgIHRleHQgICA6ICdGb3IgRGV2ZWxvcGVycydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICAgOiBFeGVjdXRpdmVJbnRyb0NvbXBvbmVudCxcbiAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1jaGVzcy1raW5nJyxcbiAgICAgICAgICAgICAgICByb3V0ZSAgOiAnY2hpbGR2aWV3PWV4ZWN1dGl2ZXMnLFxuICAgICAgICAgICAgICAgIHRleHQgICA6ICdGb3IgRXhlY3V0aXZlcydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHRhYkJhclBvc2l0aW9uPSdsZWZ0J1xuICAgICAgICAgKi9cbiAgICAgICAgdGFiQmFyUG9zaXRpb246ICdsZWZ0J1xuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFRhYkNvbnRhaW5lcik7XG5cbmV4cG9ydCB7VGFiQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb250YWluZXIgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb250YWluZXIuVmlld3BvcnRcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBWaWV3cG9ydCBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb250YWluZXIuVmlld3BvcnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb250YWluZXIuVmlld3BvcnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndmlld3BvcnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAndmlld3BvcnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogdHJ1ZSBhcHBsaWVzICduZW8tYm9keS12aWV3cG9ydCcgdG8gdGhlIGRvY3VtZW50LmJvZHlcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXBwbHlCb2R5Q2xzPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGFwcGx5Qm9keUNsczogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tdmlld3BvcnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby12aWV3cG9ydCddXG4gICAgfX1cblxuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBpZiAodGhpcy5hcHBseUJvZHlDbHMpIHtcbiAgICAgICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5hcHBseUJvZHlDbHMoe1xuICAgICAgICAgICAgICAgIGFwcE5hbWU6IHRoaXMuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBjbHMgICAgOiBbJ25lby1ib2R5LXZpZXdwb3J0J11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhWaWV3cG9ydCk7XG5cbmV4cG9ydCB7Vmlld3BvcnQgYXMgZGVmYXVsdH07IiwiaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5mb3JtLmZpZWxkLlNlYXJjaFxuICogQGV4dGVuZHMgTmVvLmZvcm0uZmllbGQuVGV4dFxuICovXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBUZXh0IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmZvcm0uZmllbGQuU2VhcmNoJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uZm9ybS5maWVsZC5TZWFyY2gnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nc2VhcmNoZmllbGQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnc2VhcmNoZmllbGQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGNscz1bJ25lby1zZWFyY2hmaWVsZCcsICduZW8tdGV4dGZpZWxkJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tc2VhcmNoZmllbGQnLCAnbmVvLXRleHRmaWVsZCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWUgZm9yIHRoZSBoaWRlTGFiZWxfIHRleHRmaWVsZCBjb25maWdcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaGlkZUxhYmVsPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGhpZGVMYWJlbDogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVlIGZvciB0aGUgcGxhY2Vob2xkZXJUZXh0XyB0ZXh0ZmllbGQgY29uZmlnXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gcGxhY2Vob2xkZXJUZXh0PSdTZWFyY2gnXG4gICAgICAgICAqL1xuICAgICAgICBwbGFjZWhvbGRlclRleHQ6ICdTZWFyY2gnLFxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFNlYXJjaCk7XG5cbmV4cG9ydCB7U2VhcmNoIGFzIGRlZmF1bHR9OyJdLCJzb3VyY2VSb290IjoiIn0=