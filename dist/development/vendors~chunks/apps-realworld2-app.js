self["webpackChunk"](["vendors~chunks/apps-realworld2-app"],{

/***/ "./node_modules/neo.mjs/apps/realworld2/api/Article.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/realworld2/api/Article.mjs ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/apps/realworld2/api/Base.mjs");


/**
 * @class RealWorld2.api.Article
 * @extends RealWorld2.api.Base
 */
class Article extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld2.api.Article'
         * @protected
         */
        className: 'RealWorld2.api.Article',
        /**
         * @member {String} resource='/articles'
         */
        resource: '/articles'
    }}

    /**
     *
     * @param {String} slug
     * @param {Number} id
     */
    deleteComment(slug, id) {
        return this.delete({
            url: `/articles/${slug}/comments/${id}`
        });
    }

    /**
     *
     * @param {String} slug
     */
    getComments(slug) {
        return this.get({
            url: `/articles/${slug}/comments`
        });
    }

    /**
     *
     * @param {String} slug
     * @param {Object} opts
     */
    postComment(slug, opts) {
        return this.post({
            ...opts,
            url: `/articles/${slug}/comments`
        });
    }
}

Neo.applyClassConfig(Article);

let instance = Neo.create(Article);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/apps/realworld2/api/Base.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/neo.mjs/apps/realworld2/api/Base.mjs ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _config_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.mjs */ "./node_modules/neo.mjs/apps/realworld2/api/config.mjs");
/* harmony import */ var _src_core_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");



/**
 * @class RealWorld2.api.Base
 * @extends Neo.core.Base
 */
class Base extends _src_core_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
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
         * @member {String} className='RealWorld2.api.Base'
         * @protected
         */
        className: 'RealWorld2.api.Base',
        /**
         * @member {Object|null} defaultHeaders=null
         */
        defaultHeaders: null,
        /**
         * @member {Boolean} isReady=false
         */
        isReady: false,
        /**
         * @member {String} resource=''
         */
        resource: '/'
    }}

    onConstructed() {
        super.onConstructed();

        const me = this;

        if (!Base.initialTokenRequestSent) {
            Base.initialTokenRequestSent = true;

            setTimeout(() => {
                Neo.main.addon.LocalStorage.readLocalStorageItem({
                    key: _config_mjs__WEBPACK_IMPORTED_MODULE_0__["LOCAL_STORAGE_KEY"]
                }).then(data => {
                    const token = data.value;

                    if (token) {
                        Base.token = token;
                    }

                    me.onReady(token);
                    Base.fire('ready', token);
                });
            }, Neo.config.isExperimental ? 0 : 200);
        } else {
            Base.on({
                ready: me.onReady,
                scope: me
            });
        }
    }

    /**
     *
     * @param {Object} [opts={}]
     * @param {Object} [opts.data]
     * @param {Object} [opts.params]
     * @param {String} [opts.resource]
     * @param {String} [opts.slug]
     * @param {String} [opts.url]
     * @returns {String} url
     */
    createUrl(opts) {
        if (opts.url) {
            return _config_mjs__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + opts.url;
        }

        return _config_mjs__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + (opts.resource || this.resource) + (opts.slug ? '/' + opts.slug : '');
    }

    /**
     *
     * @param {Object} [opts={}]
     * @param {Object} [opts.data]
     * @param {Object} [opts.params]
     * @param {String} [opts.resource]
     * @param {String} [opts.slug]
     * @returns {Promise<any>}
     */
    delete(opts={}) {
        console.log('delete', opts);

        return Neo.Xhr.promiseJson({
            data   : opts.data,
            method : 'DELETE',
            params : opts.params,
            url    : this.createUrl(opts),

            headers: {
                ...this.defaultHeaders || {},
                'Content-Type'    : 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).catch(error => {
            console.log('RealWorld2.api.Base:get()', error);
        });
    }

    /**
     *
     * @param {Object} [opts={}]
     * @param {Object} [opts.data]
     * @param {Object} [opts.params]
     * @param {String} [opts.resource]
     * @param {String} [opts.slug]
     * @returns {Promise<any>}
     */
    get(opts={}) {
        console.log('get', opts);

        return Neo.Xhr.promiseJson({
            data   : opts.data,
            method : 'GET',
            params : opts.params,
            url    : this.createUrl(opts),

            headers: {
                ...this.defaultHeaders || {},
                'Content-Type'    : 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).catch(error => {
            console.log('RealWorld2.api.Base:get()', error);
        });
    }

    /**
     * Placeholder method which gets triggered once the token is fetched from the local storage
     * @param {String|null} token
     */
    onReady(token) {
        let me = this;

        if (token) {
            me.defaultHeaders = me.defaultHeaders || {};
            me.defaultHeaders['Authorization'] = 'Token ' + token;
        }

        me.isReady = true;
        me.fire('ready', token);
    }

    /**
     *
     * @param {Object} [opts={}]
     * @param {Object} [opts.data]
     * @param {Object} [opts.params]
     * @param {String} [opts.resource]
     * @param {String} [opts.slug]
     * @returns {Promise<any>}
     */
    post(opts={}) {
        console.log('post', opts);

        const params = opts.params;
        delete opts.params;

        return Neo.Xhr.promiseJson({
            data   : opts.data,
            method : 'POST',
            params : params,
            url    : this.createUrl(opts),

            headers: {
                ...this.defaultHeaders || {},
                'Content-Type'    : 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).catch(error => {
            console.log('RealWorld2.api.Base:post()', error);
        });
    }

    /**
     *
     * @param {Object} [opts={}]
     * @param {Object} [opts.data]
     * @param {Object} [opts.params]
     * @param {String} [opts.resource]
     * @param {String} [opts.slug]
     * @returns {Promise<any>}
     */
    put(opts={}) {
        console.log('put', opts);

        const params = opts.params;
        delete opts.params;

        return Neo.Xhr.promiseJson({
            data   : opts.data,
            method : 'PUT',
            params : params,
            url    : this.createUrl(opts),

            headers: {
                ...this.defaultHeaders || {},
                'Content-Type'    : 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).catch(error => {
            console.log('RealWorld2.api.Base:put()', error);
        });
    }
}

Base.initialTokenRequestSent = false;
Base.token                   = null;

Neo.applyClassConfig(Base);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/realworld2/api/Favorite.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/realworld2/api/Favorite.mjs ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/apps/realworld2/api/Base.mjs");


/**
 * @class RealWorld2.api.Favorite
 * @extends RealWorld2.api.Base
 */
class Favorite extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld2.api.Favorite'
         * @protected
         */
        className: 'RealWorld2.api.Favorite'
    }}

    /**
     *
     * @param {String} slug
     */
    add(slug) {
        return this.post({
            url: `/articles/${slug}/favorite`
        });
    }

    /**
     *
     * @param {String} slug
     */
    remove(slug) {
        return this.delete({
            url: `/articles/${slug}/favorite`
        });
    }
}

Neo.applyClassConfig(Favorite);

let instance = Neo.create(Favorite);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/apps/realworld2/api/Profile.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/realworld2/api/Profile.mjs ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/apps/realworld2/api/Base.mjs");


/**
 * @class RealWorld2.api.Profile
 * @extends RealWorld2.api.Base
 */
class Profile extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld2.api.Profile'
         * @protected
         */
        className: 'RealWorld2.api.Profile',
        /**
         * @member {String} resource='/profiles'
         */
        resource: '/profiles'
    }}

    /**
     *
     * @param {String} slug
     */
    follow(slug) {
        return this.post({
            url: `/profiles/${slug}/follow`
        });
    }

    /**
     *
     * @param {String} slug
     */
    unfollow(slug) {
        return this.delete({
            url: `/profiles/${slug}/follow`
        });
    }
}

Neo.applyClassConfig(Profile);

let instance = Neo.create(Profile);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/apps/realworld2/api/Tag.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/neo.mjs/apps/realworld2/api/Tag.mjs ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/apps/realworld2/api/Base.mjs");


/**
 * @class RealWorld2.api.Tag
 * @extends RealWorld2.api.Base
 */
class Tag extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld2.api.Tag'
         * @protected
         */
        className: 'RealWorld2.api.Tag',
        /**
         * @member {String} resource='/tags'
         */
        resource: '/tags'
    }}
}

Neo.applyClassConfig(Tag);

let instance = Neo.create(Tag);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/apps/realworld2/api/User.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/neo.mjs/apps/realworld2/api/User.mjs ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/apps/realworld2/api/Base.mjs");


/**
 * @class RealWorld2.api.User
 * @extends RealWorld2.api.Base
 */
class User extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld2.api.User'
         * @protected
         */
        className: 'RealWorld2.api.User',
        /**
         * @member {String} resource='/tags'
         */
        resource: '/users'
    }}
}

Neo.applyClassConfig(User);

let instance = Neo.create(User);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/apps/realworld2/api/config.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/realworld2/api/config.mjs ***!
  \*************************************************************/
/*! exports provided: API_URL, LOCAL_STORAGE_KEY, default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STORAGE_KEY", function() { return LOCAL_STORAGE_KEY; });
const API_URL           = 'https://conduit.productionready.io/api';
const LOCAL_STORAGE_KEY = 'neoRealWorldToken';

/* harmony default export */ __webpack_exports__["default"] = ({API_URL, LOCAL_STORAGE_KEY});

/***/ }),

/***/ "./node_modules/neo.mjs/apps/realworld2/app.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/apps/realworld2/app.mjs ***!
  \******************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/MainContainer.mjs */ "./node_modules/neo.mjs/apps/realworld2/view/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'apps/realworld2/',
    mainView: _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'RealWorld2'
});



/***/ }),

/***/ "./node_modules/neo.mjs/apps/realworld2/model/ArticlePreview.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/realworld2/model/ArticlePreview.mjs ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArticlePreview; });
/* harmony import */ var _src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class RealWorld2.model.ArticlePreview
 * @extends Neo.data.Model
 */
class ArticlePreview extends _src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        className: 'RealWorld2.model.ArticlePreview',

        fields: [{
            name: 'author',
            type: 'Object'
        }, {
            name: 'body',
            type: 'String'
        }, {
            name: 'createdAt',
            type: 'String' // date
        }, {
            name: 'description',
            type: 'String'
        }, {
            name: 'favorited',
            type: 'Boolean'
        }, {
            name: 'favoritesCount',
            type: 'Number'
        }, {
            name: 'slug',
            type: 'String'
        }, {
            name: 'tagList',
            type: 'Array'
        }, {
            name: 'title',
            type: 'String'
        }, {
            name: 'updatedAt',
            type: 'String' // date
        }]
    }}
}

Neo.applyClassConfig(ArticlePreview);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/realworld2/store/ArticlePreviews.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/realworld2/store/ArticlePreviews.mjs ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArticlePreviews; });
/* harmony import */ var _model_ArticlePreview_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/ArticlePreview.mjs */ "./node_modules/neo.mjs/apps/realworld2/model/ArticlePreview.mjs");
/* harmony import */ var _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");



/**
 * @class RealWorld2.store.ArticlePreviews
 * @extends Neo.data.Store
 */
class ArticlePreviews extends _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        className: 'RealWorld2.store.ArticlePreviews',

        keyProperty: 'slug',
        model      : _model_ArticlePreview_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]
    }}
}

Neo.applyClassConfig(ArticlePreviews);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/realworld2/view/FooterComponent.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/realworld2/view/FooterComponent.mjs ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterComponent; });
/* harmony import */ var _src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class RealWorld2.view.FooterComponent
 * @extends Neo.component.Base
 */
class FooterComponent extends _src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld2.view.FooterComponent'
         * @protected
         */
        className: 'RealWorld2.view.FooterComponent',
        /**
         * @member {String[]} cls=['rw2-footer-component']
         */
        cls: ['rw2-footer-component'],
        /**
         * @member {Number} height=40
         */
        height: 40,
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            tag: 'footer',
            cn : [{
                cls: ['container'],
                cn : [{
                    tag : 'a',
                    cls : ['logo-font'],
                    href: '#/',
                    html: 'conduit'
                }, {
                    tag : 'span',
                    cls : 'attribution',
                    html: 'An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.'
                }]
            }]
        }
    }}
}

Neo.applyClassConfig(FooterComponent);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/realworld2/view/HeaderToolbar.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/realworld2/view/HeaderToolbar.mjs ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderToolbar; });
/* harmony import */ var _HeaderToolbarController_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderToolbarController.mjs */ "./node_modules/neo.mjs/apps/realworld2/view/HeaderToolbarController.mjs");
/* harmony import */ var _src_container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/container/Toolbar.mjs */ "./node_modules/neo.mjs/src/container/Toolbar.mjs");



/**
 * @class RealWorld2.view.HeaderToolbar
 * @extends Neo.container.Toolbar
 */
class HeaderToolbar extends _src_container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld2.view.HeaderToolbar'
         * @protected
         */
        className: 'RealWorld2.view.HeaderToolbar',
        /**
         * @member {String[]} cls=['rw2-header-toolbar', 'neo-toolbar']
         */
        cls: ['rw2-header-toolbar', 'neo-toolbar'],
        /**
         * @member {Neo.controller.Component} controller=HeaderToolbarController
         */
        controller: _HeaderToolbarController_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
        /**
         * @member {Number} height=56
         */
        height: 56,
        /**
         * @member {Number} minHeight=56
         */
        minHeight: 56,
        /**
         * @member {Array} items
         */
        items: [{
            text   : 'conduit',
            handler: 'onHomeButtonClick'
        }, '->', {
            iconCls: 'fa fa-home',
            text   : 'Home',
            handler: 'onHomeButtonClick'
        }, {
            iconCls: 'fa fa-sign-in-alt',
            text   : 'Login',
            handler: 'onLoginButtonClick'
        }, {
            iconCls: 'fa fa-dna',
            text   : 'Helix',
            handler: 'onHelixButtonClick'
        }, {
            iconCls: 'fa fa-images',
            text   : 'Gallery',
            handler: 'onGalleryButtonClick'
        }, {
            iconCls: 'fa fa-edit',
            text   : 'New Article',
            handler: 'onNewArticleButtonClick'
        }, {
            iconCls: 'fa fa-user-cog',
            text   : 'Settings',
            handler: 'onSettingsButtonClick'
        }, {
            text   : 'Profile',
            handler: 'onProfileButtonClick'
        }]
    }}
}

Neo.applyClassConfig(HeaderToolbar);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/realworld2/view/HeaderToolbarController.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/realworld2/view/HeaderToolbarController.mjs ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderToolbarController; });
/* harmony import */ var _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");


/**
 * @class RealWorld2.view.HeaderToolbarController
 * @extends Neo.controller.Component
 */
class HeaderToolbarController extends _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld2.view.HeaderToolbarController'
         * @protected
         */
        className: 'RealWorld2.view.HeaderToolbarController'
    }}

    onGalleryButtonClick() {
        this.setRoute('/gallery');
    }

    onHelixButtonClick() {
        this.setRoute('/helix');
    }

    onHomeButtonClick() {
        this.setRoute('/');
    }

    onLoginButtonClick() {
        this.setRoute('/login');
    }

    onNewArticleButtonClick() {
        this.setRoute('/editor');
    }

    onSettingsButtonClick() {
        this.setRoute('/settings');
    }

    /**
     *
     * @param {String} hash
     */
    setRoute(hash) {
        Neo.Main.setRoute({
            value: hash
        });
    }
}

Neo.applyClassConfig(HeaderToolbarController);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/realworld2/view/HomeContainer.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/realworld2/view/HomeContainer.mjs ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomeContainer; });
/* harmony import */ var _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _article_PreviewList_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article/PreviewList.mjs */ "./node_modules/neo.mjs/apps/realworld2/view/article/PreviewList.mjs");
/* harmony import */ var _src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/tab/Container.mjs */ "./node_modules/neo.mjs/src/tab/Container.mjs");
/* harmony import */ var _article_TagListComponent_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article/TagListComponent.mjs */ "./node_modules/neo.mjs/apps/realworld2/view/article/TagListComponent.mjs");





/**
 * @class RealWorld2.view.HomeContainer
 * @extends Neo.container.Base
 */
class HomeContainer extends _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld2.view.HomeContainer'
         * @protected
         */
        className: 'RealWorld2.view.HomeContainer',
        /**
         * @member {String[]} cls=['rw2-home-container', 'neo-container']
         */
        cls: ['rw2-home-container', 'neo-container'],
        /**
         * @member {Object} layout={ntype: 'vbox', align: 'stretch'}
         */
        layout: {
            ntype: 'vbox',
            align: 'stretch'
        },
        /**
         * @member {Array} items
         */
        items: [{
            ntype : 'component',
            cls   : ['banner'],
            height: 170,
            vdom  : {
                cn: [{
                    cls: ['container'],
                    cn : [{
                        tag : 'h1',
                        cls : ['logo-font'],
                        html: 'conduit v2'
                    }, {
                        tag : 'p',
                        html: 'A place to share your knowledge.'
                    }]
                }]
            }
        }, {
            module: _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            cls   : ['neo-container', 'center', 'container'],
            flex  : 1,
            layout: {ntype: 'hbox', align: 'stretch'},
            items: [{
                module     : _src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
                activeIndex: 1,
                flex       : 3,

                items: [{
                    ntype          : 'component',
                    cls            : ['neo-examples-tab-component'],
                    style          : {padding: '20px'},
                    tabButtonConfig: {iconCls: 'fa fa-user-ninja', text: 'Your Feed'},
                    vdom           : {innerHTML: 'todo'}
                }, {
                    module         : _article_PreviewList_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
                    tabButtonConfig: {iconCls: 'fa fa-globe-europe', text: 'Global Feed'}
                }]
            }, {
                module: _article_TagListComponent_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
                flex  : 1
            }]
        }]
    }}

    /**
     *
     * @param {Object} [params={}]
     * @param {Object} [opts={}]
     */
    getArticles(params={}, opts={}) {
        let me = this;

        if (me.activeTag) {
            params = {
                tag: me.activeTag,
                ...params
            };
        }

        me.getController().getArticles(params, opts).then(data => {
            console.log(data.json);

            // todo: create an easier way to access the store
            me.items[1].items[0].getCardContainer().items[1].store.data = data.json.articles;
        });
    }

    getTagList() {
        return this.down({module: _article_TagListComponent_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]});
    }
}

Neo.applyClassConfig(HomeContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/realworld2/view/MainContainer.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/realworld2/view/MainContainer.mjs ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _FooterComponent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FooterComponent.mjs */ "./node_modules/neo.mjs/apps/realworld2/view/FooterComponent.mjs");
/* harmony import */ var _article_GalleryContainer_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article/GalleryContainer.mjs */ "./node_modules/neo.mjs/apps/realworld2/view/article/GalleryContainer.mjs");
/* harmony import */ var _HeaderToolbar_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderToolbar.mjs */ "./node_modules/neo.mjs/apps/realworld2/view/HeaderToolbar.mjs");
/* harmony import */ var _article_HelixContainer_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article/HelixContainer.mjs */ "./node_modules/neo.mjs/apps/realworld2/view/article/HelixContainer.mjs");
/* harmony import */ var _HomeContainer_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HomeContainer.mjs */ "./node_modules/neo.mjs/apps/realworld2/view/HomeContainer.mjs");
/* harmony import */ var _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MainContainerController.mjs */ "./node_modules/neo.mjs/apps/realworld2/view/MainContainerController.mjs");
/* harmony import */ var _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");








/**
 * @class RealWorld2.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_6__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld2.view.MainContainer'
         * @protected
         */
        className: 'RealWorld2.view.MainContainer',
        /**
         * @member {Boolean} autoMount=true
         * @protected
         */
        autoMount: true,
        /**
         * @member {String[]} cls=['rw2-home-container']
         */
        cls: ['rw2-main-container', 'neo-viewport'],
        /**
         * @member {Neo.controller.Component} controller=MainContainerController
         */
        controller: _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
        /**
         * @member {Object} layout={ntype: 'vbox', align: 'stretch'}
         */
        layout: {
            ntype: 'vbox',
            align: 'stretch'
        },
        /**
         * @member {Array} items
         */
        items: [{
            module: _HeaderToolbar_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]
        }, {
            ntype    : 'container',
            flex     : 1,
            items    : [],
            layout   : {ntype: 'card'},
            reference: 'cards'
        }, {
            module: _FooterComponent_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]
        }]
    }}
}

Neo.applyClassConfig(MainContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/realworld2/view/MainContainerController.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/realworld2/view/MainContainerController.mjs ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainerController; });
/* harmony import */ var _api_Article_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Article.mjs */ "./node_modules/neo.mjs/apps/realworld2/api/Article.mjs");
/* harmony import */ var _article_DetailsContainer_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article/DetailsContainer.mjs */ "./node_modules/neo.mjs/apps/realworld2/view/article/DetailsContainer.mjs");
/* harmony import */ var _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");
/* harmony import */ var _api_Favorite_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/Favorite.mjs */ "./node_modules/neo.mjs/apps/realworld2/api/Favorite.mjs");
/* harmony import */ var _article_FormContainer_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article/FormContainer.mjs */ "./node_modules/neo.mjs/apps/realworld2/view/article/FormContainer.mjs");
/* harmony import */ var _article_GalleryContainer_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article/GalleryContainer.mjs */ "./node_modules/neo.mjs/apps/realworld2/view/article/GalleryContainer.mjs");
/* harmony import */ var _article_HelixContainer_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article/HelixContainer.mjs */ "./node_modules/neo.mjs/apps/realworld2/view/article/HelixContainer.mjs");
/* harmony import */ var _HomeContainer_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HomeContainer.mjs */ "./node_modules/neo.mjs/apps/realworld2/view/HomeContainer.mjs");
/* harmony import */ var _user_LoginFormContainer_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/LoginFormContainer.mjs */ "./node_modules/neo.mjs/apps/realworld2/view/user/LoginFormContainer.mjs");
/* harmony import */ var _api_config_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api/config.mjs */ "./node_modules/neo.mjs/apps/realworld2/api/config.mjs");
/* harmony import */ var _api_Profile_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../api/Profile.mjs */ "./node_modules/neo.mjs/apps/realworld2/api/Profile.mjs");
/* harmony import */ var _user_ProfileContainer_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/ProfileContainer.mjs */ "./node_modules/neo.mjs/apps/realworld2/view/user/ProfileContainer.mjs");
/* harmony import */ var _user_SettingsFormContainer_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/SettingsFormContainer.mjs */ "./node_modules/neo.mjs/apps/realworld2/view/user/SettingsFormContainer.mjs");
/* harmony import */ var _api_Tag_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../api/Tag.mjs */ "./node_modules/neo.mjs/apps/realworld2/api/Tag.mjs");
/* harmony import */ var _api_User_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../api/User.mjs */ "./node_modules/neo.mjs/apps/realworld2/api/User.mjs");
















/**
 * @class RealWorld2.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld2.view.MainContainerController'
         * @protected
         */
        className: 'RealWorld2.view.MainContainerController',
        /**
         * Stores the current user data after logging in
         * @member {Object|null} currentUser_=null
         * @protected
         */
        currentUser_: null,
        /**
         * @member {String|null} hashString=null
         */
        hashString: null
    }}

    onConstructed() {
        super.onConstructed();

        const me = this;

        _api_User_mjs__WEBPACK_IMPORTED_MODULE_14__["default"].on('ready', me.getCurrentUser, me);

        // default route => home
        if (!Neo.config.hash) {
            me.onHashChange({
                appName   : 'RealWorld2',
                hash      : {'/': ''},
                hashString: '/'
            }, null);
        }
    }

    /**
     * Triggered after the articlesOffset config got changed
     * @param {Object} value
     * @param {Object} oldValue
     * @protected
     */
    afterSetArticlesOffset(value, oldValue) {
        // ignore the initial config setter call
        if (Neo.isNumber(oldValue)) {
            this.getArticles();
        }
    }

    /**
     * Triggered after the currentUser config got changed
     * @param {Object} value
     * @param {Object} oldValue
     * @protected
     */
    afterSetCurrentUser(value, oldValue) {
        if (typeof oldValue === 'object') {
            /*this.getReference('header').set({
                loggedIn : !!value,
                userImage: value ? value.image    : null,
                userName : value ? value.username : null
            }).then(() => {
                this.fire('afterSetCurrentUser', value);
            });*/
        }
    }

    /**
     *
     * @param {String} slug
     */
    deleteArticle(slug) {
        _api_Article_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].delete({slug: slug}).then(data => {
            Neo.Main.setRoute({
                value: '/'
            });
        });
    }

    /**
     *
     * @param {Number} id
     * @returns {Promise<any>}
     */
    deleteComment(id) {
        let me   = this,
            slug = me.hashString.split('/').pop();

        return _api_Article_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].deleteComment(slug, id).then(data => {
            me.getComments(slug);
        });
    }

    /**
     *
     * @param {String} slug
     * @param {Boolean} favorited
     */
    favoriteArticle(slug, favorited) {
        return _api_Favorite_mjs__WEBPACK_IMPORTED_MODULE_3__["default"][favorited ? 'add' : 'remove'](slug);
    }

    /**
     *
     * @param {String} slug
     * @param {Boolean} follow
     */
    followUser(slug, follow) {
        return _api_Profile_mjs__WEBPACK_IMPORTED_MODULE_10__["default"][follow ? 'follow' : 'unfollow'](slug);
    }

    /**
     * Article details: get an article providing a user slug
     * @param {String} slug
     */
    getArticle(slug) {
        return _api_Article_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].get({
            slug: slug
        });
    }

    /**
     *
     * @param {Object} [params={}]
     * @param {Object} [opts={}]
     * @returns {Promise<any>}
     */
    getArticles(params={}, opts={}) {
        return _api_Article_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].get({
            params: {
                limit : 20,
                ...params
            },
            ...opts
        });
    }

    /**
     *
     * @param {String} slug
     */
    getComments(slug) {
        _api_Article_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].getComments(slug).then(data => {
            //this.articleComponent.comments = data.json.comments;
        });
    }

    /**
     *
     * @param {String} token
     */
    getCurrentUser(token) {
        if (token) {
            _api_User_mjs__WEBPACK_IMPORTED_MODULE_14__["default"].get({
                resource: '/user' // edge case, user instead of users
            }).then(data => {
                this.currentUser = data.json.user;
                console.log(this.currentUser);
            });
        }
    }

    /**
     *
     * @param {String} slug
     */
    getProfile(slug) {
        const me = this;

        _api_Profile_mjs__WEBPACK_IMPORTED_MODULE_10__["default"].get({
            slug: slug
        }).then(data => {
            /*me.profileComponent.update({
                ...data.json.profile,
                myProfile: data.json.profile.username === (me.currentUser && me.currentUser.username)
            });*/
        });
    }

    /**
     *
     */
    getTags() {
        _api_Tag_mjs__WEBPACK_IMPORTED_MODULE_13__["default"].get().then(data => {
            this.getReference('home').getTagList().tags = data.json.tags;
        });
    }

    /**
     *
     * @param {String} reference
     * @param {Neo.component.Base} module
     * @returns {Neo.component.Base} The matching view instance
     */
    getView(reference, module) {
        let me   = this,
            card = me.getReference(reference);

        if (!card) {
            card = me.getReference('cards').add({
                module   : module,
                reference: reference
            });
        }

        return card;
    }

    /**
     * @param {Object} userData
     */
    login(userData) {
        this.currentUser = userData;

        Neo.main.addon.LocalStorage.createLocalStorageItem({
            key  : _api_config_mjs__WEBPACK_IMPORTED_MODULE_9__["LOCAL_STORAGE_KEY"],
            value: userData.token
        }).then(() => {
            // wait until the header vdom-update is done to avoid showing sign up & sign in twice
            setTimeout(() => {
                Neo.Main.setRoute({
                    value: '/'
                });
            }, 50);
        });
    }

    /**
     *
     */
    logout() {
        this.currentUser = null;

        Neo.main.addon.LocalStorage.destroyLocalStorageItem({
            key: _api_config_mjs__WEBPACK_IMPORTED_MODULE_9__["LOCAL_STORAGE_KEY"]
        }).then(() => {
            // wait until the header vdom-update is done to avoid showing sign up & sign in twice
            setTimeout(() => {
                Neo.Main.setRoute({
                    value: '/'
                });
            }, 50);
        });
    }

    /**
     *
     * @param {Object} value
     * @param {Object} oldValue
     */
    onHashChange(value, oldValue) {
        let me         = this,
            hash       = value.hash,
            hashString = value.hashString,
            view       = me.view,
            cards, newView, slug;

        if (!view.mounted) { // the initial hash change gets triggered before the vnode got back from the vdom worker (using autoMount)
            view.on('mounted', () => {
                me.onHashChange(value, oldValue, hashString);
            });
        } else {
            console.log('onHashChange', value, hashString);

            cards = me.getReference('cards');

            me.hashString = hashString;

            // adjust the active header link
            // view.items[0].activeItem = Object.keys(value)[0];

                 if (hashString === '/')               {newView = me.getView('home',     _HomeContainer_mjs__WEBPACK_IMPORTED_MODULE_7__["default"]);}
            else if (hashString.includes('/article/')) {newView = me.getView('article',  _article_DetailsContainer_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]);}
            else if (hashString === '/editor')         {newView = me.getView('editor',   _article_FormContainer_mjs__WEBPACK_IMPORTED_MODULE_4__["default"]);}
            else if (hashString === '/helix')          {newView = me.getView('helix',    _article_HelixContainer_mjs__WEBPACK_IMPORTED_MODULE_6__["default"]);}
            else if (hashString === '/gallery')        {newView = me.getView('gallery',  _article_GalleryContainer_mjs__WEBPACK_IMPORTED_MODULE_5__["default"]);}
            else if (hashString === '/login')          {newView = me.getView('login',    _user_LoginFormContainer_mjs__WEBPACK_IMPORTED_MODULE_8__["default"]); newView.mode = 'login';}
            else if (hashString.includes('/profile/')) {newView = me.getView('profile',  _user_ProfileContainer_mjs__WEBPACK_IMPORTED_MODULE_11__["default"]);}
            else if (hashString === '/settings')       {newView = me.getView('settings', _user_SettingsFormContainer_mjs__WEBPACK_IMPORTED_MODULE_12__["default"]);}
          /*else if (value.hasOwnProperty('/register')) {newView = me.getView('signUpComponent',   SignUpComponent,   'signup'); newView.mode = 'signup';}

            if (!(oldValue && (
                oldValue.hasOwnProperty('/login')    && value.hasOwnProperty('/register') ||
                oldValue.hasOwnProperty('/register') && value.hasOwnProperty('/login')))
            ) {
                if (view.items.length > 2) {
                    view.removeAt(1, false, true);
                }

                if (newView) {
                    view.insert(1, newView);
                }
            }*/

            // short delay to ensure the new card already got added
            setTimeout(() => {
                cards.layout.activeIndex = cards.indexOf(newView);
            }, 100);

            switch (newView.reference) {
                case 'gallery':
                    newView.getArticles();
                    break;
                case 'helix':
                    newView.getArticles();
                    break;
                case 'home':
                    //me.homeComponent.loggedIn = !!me.currentUser;
                    newView.getArticles();
                    me.getTags();
                    break;
            }
        }
    }

    onProfileButtonClick() {
        Neo.Main.setRoute({
            value: '/profile/' + this.currentUser.username
        });
    }

    /**
     *
     * @param {Object} [opts)
     * @returns {Promise<any>}
     */
    postComment(opts={}) {
        let me   = this,
            slug = me.hashString.split('/').pop();

        return _api_Article_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].postComment(slug, opts).then(data => {
            me.getComments(slug);
        });
    }

    /**
     *
     * @param {Object} opts
     * @returns {Promise<any>}
     */
    saveUser(opts) {
        return _api_User_mjs__WEBPACK_IMPORTED_MODULE_14__["default"].post(opts);
    }

    /**
     *
     * @param {Object} [opts)
     * @returns {Promise<any>}
     */
    updateSettings(opts={}) {
        return _api_User_mjs__WEBPACK_IMPORTED_MODULE_14__["default"].put({
            ...opts,
            resource: '/user' // edge case, user instead of users
        }).then(data => {
            if (!data.json.errors) {
                this.currentUser = data.json.user;
            }

            return data;
        });
    }
}

Neo.applyClassConfig(MainContainerController);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/realworld2/view/article/DetailsContainer.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/realworld2/view/article/DetailsContainer.mjs ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DetailsContainer; });
/* harmony import */ var _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");


/**
 * @class RealWorld2.view.article.DetailsContainer
 * @extends Neo.form.Container
 */
class DetailsContainer extends _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld2.view.article.DetailsContainer'
         * @protected
         */
        className: 'RealWorld2.view.article.DetailsContainer',
        /**
         * @member {Array} items
         */
        items: [{
            ntype: 'component',
            html : 'article.DetailsContainer'
        }],
        /**
         * @member {Object} style
         */
        style: {
            padding: '20px'
        }
    }}
}

Neo.applyClassConfig(DetailsContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/realworld2/view/article/FormContainer.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/realworld2/view/article/FormContainer.mjs ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormContainer; });
/* harmony import */ var _src_form_field_Chip_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/form/field/Chip.mjs */ "./node_modules/neo.mjs/src/form/field/Chip.mjs");
/* harmony import */ var _src_form_Container_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/form/Container.mjs */ "./node_modules/neo.mjs/src/form/Container.mjs");
/* harmony import */ var _src_form_field_TextArea_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/form/field/TextArea.mjs */ "./node_modules/neo.mjs/src/form/field/TextArea.mjs");
/* harmony import */ var _src_container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/container/Toolbar.mjs */ "./node_modules/neo.mjs/src/container/Toolbar.mjs");
/* harmony import */ var _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/form/field/Text.mjs */ "./node_modules/neo.mjs/src/form/field/Text.mjs");






/**
 * @class RealWorld2.view.article.FormContainer
 * @extends Neo.form.Container
 */
class FormContainer extends _src_form_Container_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld2.view.article.FormContainer'
         * @protected
         */
        className: 'RealWorld2.view.article.FormContainer',
        /**
         * @member {Object} itemDefaults
         */
        itemDefaults: {
            style: {
                maxWidth: '500px'
            }
        },
        /**
         * @member {Array} items
         */
        items: [{
            module       : _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            labelPosition: 'inline',
            labelText    : 'Article Title',
            name         : 'title'
        }, {
            module       : _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            labelPosition: 'inline',
            labelText    : 'What\'s this article about?',
            name         : 'description'
        }, {
            module       : _src_form_field_TextArea_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            labelPosition: 'inline',
            labelText    : 'Write your article (in markdown)',
            name         : 'body'
        }, {
            module       : _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_4__["default"], // todo: ChipField
            labelPosition: 'inline',
            labelText    : 'Enter Tags',
            name         : 'tags'
        }, {
            module: _src_container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            items : ['->', {
                text: 'Publish Article'
            }],
            style: {
                maxWidth: '500px',
                padding : 0
            }
        }],
        /**
         * @member {Object} layout
         */
        layout: {ntype: 'base'}
    }}
}

Neo.applyClassConfig(FormContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/realworld2/view/article/Gallery.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/realworld2/view/article/Gallery.mjs ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gallery; });
/* harmony import */ var _src_component_Gallery_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/component/Gallery.mjs */ "./node_modules/neo.mjs/src/component/Gallery.mjs");
/* harmony import */ var _PreviewComponent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreviewComponent.mjs */ "./node_modules/neo.mjs/apps/realworld2/view/article/PreviewComponent.mjs");



/**
 * @class RealWorld2.view.article.Gallery
 * @extends Neo.component.Gallery
 */
class Gallery extends _src_component_Gallery_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld2.view.article.Gallery'
         * @protected
         */
        className: 'RealWorld2.view.article.Gallery',
        /**
         * @member {String[]} cls=['rw2-article-gallery', 'neo-gallery', 'page', 'view']
         */
        cls: ['rw2-article-gallery', 'neo-gallery', 'page', 'view'],
        /**
         * The image height of the gallery
         * @member {Number} imageHeight=240
         */
        imageHeight: 240,
        /**
         * The image width of the gallery
         * @member {Number} imageWidth=320
         */
        imageWidth: 320,
        /**
         * Array containing the PreviewComponent references
         * @member {Array} items=[]
         */
        items: [],
        /**
         * True to select the item inside the middle of the store items on mount
         * @member {Boolean} selectOnMount=false
         */
        selectOnMount: false
    }}

    /**
     * Override this method to get different item-markups
     * @param {Object} vdomItem
     * @param {Object} record
     * @param {Number} index
     * @returns {Object} vdomItem
     */
    createItem(vdomItem, record, index) {
        let me = this;

        if (!me.items[index]) {
            me.items[index] = vdomItem = Neo.create({
                module   : _PreviewComponent_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
                parentId : me.id,
                ...record,
                author   : record.author.username, // todo: PreviewComponent should use an author object
                userImage: record.author.image
            });
        } else {
            vdomItem.set({
                ...record,
                author   : record.author.username,
                userImage: record.author.image
            }, true); // silent update
        }

        return {
            cls     : ['neo-gallery-item', 'image-wrap', 'view', 'neo-transition-1000'],
            id      : me.getItemVnodeId(record[me.keyProperty]),
            tabIndex: '-1',
            style: {
                height: me.imageHeight + 'px',
                width : me.imageWidth  + 'px'
            },
            cn: [{
                cls: ['item-wrapper'],
                cn : [vdomItem.vdom]
            }],
        };
    }

    /**
     *
     * @param {String} vnodeId
     * @returns {String}
     */
    getItemId(vnodeId) {
        return vnodeId.split('__')[1];
    }

    /**
     *
     * @param {Array} items
     */
    onStoreLoad(items) {
        super.onStoreLoad(items);

        setTimeout(() => {
            this.selectOnMount = true;
            this.afterSetMounted(true, false);
        }, 200);
    }
}

Neo.applyClassConfig(Gallery);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/realworld2/view/article/GalleryContainer.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/realworld2/view/article/GalleryContainer.mjs ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GalleryContainer; });
/* harmony import */ var _store_ArticlePreviews_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/ArticlePreviews.mjs */ "./node_modules/neo.mjs/apps/realworld2/store/ArticlePreviews.mjs");
/* harmony import */ var _Gallery_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gallery.mjs */ "./node_modules/neo.mjs/apps/realworld2/view/article/Gallery.mjs");
/* harmony import */ var _examples_component_gallery_GalleryMainContainer_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../examples/component/gallery/GalleryMainContainer.mjs */ "./node_modules/neo.mjs/examples/component/gallery/GalleryMainContainer.mjs");




/**
 * @class RealWorld2.view.article.GalleryContainer
 * @extends Neo.examples.component.gallery.GalleryMainContainer
 */
class GalleryContainer extends _examples_component_gallery_GalleryMainContainer_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld2.view.article.GalleryContainer'
         * @protected
         */
        className: 'RealWorld2.view.article.GalleryContainer',
        /**
         * @member {Object} galleryConfig
         */
        galleryConfig: {
            module     : _Gallery_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            imageField : 'author.image',
            imageSource: '',
            keyProperty: 'slug',
            store      : _store_ArticlePreviews_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]
        }
    }}

    /**
     *
     * @param {Object} [params={}]
     * @param {Object} [opts={}]
     */
    getArticles(params={}, opts={}) {
        let me = this;

        params = {
            limit: me.gallery.maxItems,
            ...params
        };

        if (me.activeTag) {
            params.tag = me.activeTag;
        }

        me.getController().getArticles(params, opts).then(data => {
            console.log(data.json);
            me.getStore().data = data.json.articles;
        });
    }
}

Neo.applyClassConfig(GalleryContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/realworld2/view/article/Helix.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/realworld2/view/article/Helix.mjs ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Helix; });
/* harmony import */ var _src_component_Helix_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/component/Helix.mjs */ "./node_modules/neo.mjs/src/component/Helix.mjs");
/* harmony import */ var _PreviewComponent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreviewComponent.mjs */ "./node_modules/neo.mjs/apps/realworld2/view/article/PreviewComponent.mjs");



/**
 * @class RealWorld2.view.article.Helix
 * @extends Neo.component.Helix
 */
class Helix extends _src_component_Helix_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld2.view.article.Helix'
         * @protected
         */
        className: 'RealWorld2.view.article.Helix',
        /**
         * @member {String[]} cls=['rw2-article-helix', 'neo-helix']
         */
        cls: ['rw2-article-helix', 'neo-helix'],
        /**
         * Array containing the PreviewComponent references
         * @member {Array} items=[]
         */
        items: [],
        /**
         * The radius of the Helix in px
         * @member {Number} radius=2500
         */
        radius: 2500,
        /**
         * True displays the first & last name record fields below an expanded item
         * @member {Boolean} showCloneInfo=false
         */
        showCloneInfo: false
    }}

    /**
     *
     * @param {Object} vdomItem
     * @param {Object} record
     * @param {Number} index
     * @returns {Object} vdomItem
     */
    createItem(vdomItem, record, index) {
        let me = this;

        if (!me.items[index]) {
            me.items[index] = vdomItem = Neo.create({
                module  : _PreviewComponent_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
                parentId: me.id,
                ...record,
                author   : record.author.username, // todo: PreviewComponent should use an author object
                userImage: record.author.image
            });
        } else {
            vdomItem.set({
                ...record,
                author   : record.author.username,
                userImage: record.author.image
            }, true); // silent update
        }

        return {
            cls     : ['surface', 'neo-helix-item'],
            cn      : [vdomItem.vdom],
            id      : me.getItemVnodeId(record[me.keyProperty]),
            tabIndex: '-1'
        };
    }

    /**
     *
     * @param {String} vnodeId
     * @returns {String}
     */
    getItemId(vnodeId) {
        return vnodeId.split('__')[1];
    }
}

Neo.applyClassConfig(Helix);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/realworld2/view/article/HelixContainer.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/realworld2/view/article/HelixContainer.mjs ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HelixContainer; });
/* harmony import */ var _store_ArticlePreviews_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/ArticlePreviews.mjs */ "./node_modules/neo.mjs/apps/realworld2/store/ArticlePreviews.mjs");
/* harmony import */ var _Helix_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Helix.mjs */ "./node_modules/neo.mjs/apps/realworld2/view/article/Helix.mjs");
/* harmony import */ var _examples_component_helix_HelixMainContainer_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../examples/component/helix/HelixMainContainer.mjs */ "./node_modules/neo.mjs/examples/component/helix/HelixMainContainer.mjs");




/**
 * @class RealWorld2.view.article.HelixContainer
 * @extends Neo.examples.component.helix.HelixMainContainer
 */
class HelixContainer extends _examples_component_helix_HelixMainContainer_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld2.view.article.HelixContainer'
         * @protected
         */
        className: 'RealWorld2.view.article.HelixContainer',
        /**
         * @member {Object} helixConfig
         */
        helixConfig: {
            module     : _Helix_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            imageField : 'author.image',
            imageSource: '',
            keyProperty: 'slug',
            store      : _store_ArticlePreviews_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]
        }
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        // disable maxItems for now
        me.items[1].items[10].disabled = true;

        me.items[1].items[12] = {
            ntype       : 'button',
            text        : 'Sort by date',
            listeners   : {},
            style       : {margin: '20px', marginBottom: '10px'},
            domListeners: {
                click: data => {
                    me.getStore().sort({property: 'createdAt', direction: 'DESC'});
                    console.log(me.getStore().items[0]);
                }
            }
        };

        me.items[1].items[13] = {
            ntype       : 'button',
            text        : 'Sort by title',
            listeners   : {},
            style       : {margin: '20px', marginTop: 0},
            domListeners: {
                click: data => {
                    me.getStore().sort({property: 'title', direction: 'ASC'});
                    console.log(me.getStore().items[0]);
                }
            }
        };
    }

    /**
     *
     * @param {Object} [params={}]
     * @param {Object} [opts={}]
     */
    getArticles(params={}, opts={}) {
        let me = this;

        params = {
            limit: me.helix.maxItems,
            ...params
        };

        if (me.activeTag) {
            params.tag = me.activeTag;
        }

        me.getController().getArticles(params, opts).then(data => {
            console.log(data.json);
            me.getStore().data = data.json.articles;
        });
    }
}

Neo.applyClassConfig(HelixContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/realworld2/view/article/PreviewComponent.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/realworld2/view/article/PreviewComponent.mjs ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PreviewComponent; });
/* harmony import */ var _src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");




/**
 * @class RealWorld2.view.article.PreviewComponent
 * @extends Neo.component.Base
 */
class PreviewComponent extends _src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld2.view.article.PreviewComponent'
         * @protected
         */
        className: 'RealWorld2.view.article.PreviewComponent',
        /**
         * @member {String|null} author_=null
         */
        author_: null,
        /**
         * @member {String[]} cls=['rw2-preview-component']
         */
        cls: ['rw2-preview-component'],
        /**
         * ISO 8601 timestamp
         * @member {String|null} createdAt_=null
         */
        createdAt_: null,
        /**
         * @member {String|null} description_=null
         */
        description_: null,
        /**
         * @member {Boolean} favorited_=false
         */
        favorited_: false,
        /**
         * @member {Number|null} favoritesCount_=null
         */
        favoritesCount_: null,
        /**
         * @member {String|null} slug_=null
         */
        slug_: null,
        /**
         * @member {Array|null} tagList_=null
         */
        tagList_: null,
        /**
         * @member {String|null} title_=null
         */
        title_: null,
        /**
         * @member {String|null} userImage_=null
         */
        userImage_: null,
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            cn: [{
                cls: ['article-meta'],
                cn : [{
                    tag : 'a',
                    flag: 'userImageLink',
                    cn  : [{tag: 'img'}]
                }, {
                    cls: ['info'],
                    cn : [
                        {tag: 'a',    cls: ['author'], flag: 'author'},
                        {tag: 'span', cls: ['date'],   flag: 'createdAt'}
                    ]
                }, {
                    tag: 'button',
                    cls: ['btn', 'btn-sm', 'pull-xs-right'],
                    cn : [
                        {tag  : 'i',    cls : ['fa fa-heart']},
                        {vtype: 'text', flag: 'favoritesCount'}
                    ]
                }]
            }, {
                tag : 'a',
                cls : ['preview-link'],
                flag: 'preview-link',
                cn  : [
                    {tag: 'h1',   flag: 'title'},
                    {tag: 'p',    flag: 'description'},
                    {tag: 'span', html: 'Read more...'}
                ]
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
            click: {
                fn      : me.onFavoriteButtonClick,
                delegate: '.pull-xs-right',
                scope   : me
            }
        });

        me.domListeners = domListeners;
    }

    /**
     * Triggered after the author config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetAuthor(value, oldValue) {
        let vdom = this.vdom,
            node = _src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getByFlag(vdom, 'author'),
            href = '#/profile/' + value;

        // todo: disabled until the new profile view is ready
        //node.href = href;
        node.html = value;

        //VDomUtil.getByFlag(vdom, 'userImageLink').href = href;

        this.vdom = vdom;
    }

    /**
     * Triggered after the createdAt config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetCreatedAt(value, oldValue) {
        let vdom = this.vdom;

        _src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getByFlag(vdom, 'createdAt').html = new Intl.DateTimeFormat('en-US', {
            day  : 'numeric',
            month: 'long',
            year : 'numeric'
        }).format(new Date(value));

        this.vdom = vdom;
    }

    /**
     * Triggered after the description config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetDescription(value, oldValue) {
        let vdom = this.vdom;

        _src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getByFlag(vdom, 'description').html = value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the favorited config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetFavorited(value, oldValue) {
        let me     = this,
            vdom   = me.vdom,
            button = vdom.cn[0].cn[2];

        _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(button.cls, value ? 'btn-primary' : 'btn-outline-primary');
        _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(button.cls, value ? 'btn-outline-primary' : 'btn-primary');

        me.vdom = vdom;

        // ignore the initial setter call
        if (Neo.isBoolean(oldValue)) {
            me.getController().favoriteArticle(me.slug, value);
        }
    }

    /**
     * Triggered after the favoritesCount config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetFavoritesCount(value, oldValue) {
        let vdom = this.vdom;

        _src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getByFlag(vdom, 'favoritesCount').html = ' ' + value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the slug config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetSlug(value, oldValue) {
        let vdom = this.vdom;

        // todo: re-add once the new details view is in place
        //VDomUtil.getByFlag(vdom, 'preview-link').href = '#/article/' + value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the tagList config got changed
     * @param {Array} value
     * @param {Array} oldValue
     * @protected
     */
    afterSetTagList(value, oldValue) {
        let me   = this,
            vdom = me.vdom,
            tagList;

        // remove old tags if exists
        if (vdom.cn[1].cn[3]) {
            vdom.cn[1].cn.pop();
        }

        if (Array.isArray(value) && value.length > 0) {
            tagList = {
                tag: 'ul',
                cls: ['tag-list'],
                cn : []
            };

            value.forEach(item => {
                tagList.cn.push({
                    tag : 'li',
                    cls : ['tag-default', 'tag-pill', 'tag-outline'],
                    html: item
                })
            });

            vdom.cn[1].cn.push(tagList);

            me.vdom = vdom;
        }
    }

    /**
     * Triggered after the title config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetTitle(value, oldValue) {
        let vdom = this.vdom;

        _src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getByFlag(vdom, 'title').html = value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the userImage config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetUserImage(value, oldValue) {
        let vdom = this.vdom;

        _src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getByFlag(vdom, 'userImageLink').cn[0].src = value;
        this.vdom = vdom;
    }

    /**
     *
     * @param {Object} data
     */
    onFavoriteButtonClick(data) {
        let me        = this,
            favorited = !me.favorited;

        me.set({
            favorited     : favorited,
            favoritesCount: favorited ? (me.favoritesCount + 1) : (me.favoritesCount - 1)
        });
    }
}

Neo.applyClassConfig(PreviewComponent);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/realworld2/view/article/PreviewList.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/realworld2/view/article/PreviewList.mjs ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PreviewList; });
/* harmony import */ var _store_ArticlePreviews_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/ArticlePreviews.mjs */ "./node_modules/neo.mjs/apps/realworld2/store/ArticlePreviews.mjs");
/* harmony import */ var _src_list_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/list/Base.mjs */ "./node_modules/neo.mjs/src/list/Base.mjs");
/* harmony import */ var _PreviewComponent_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PreviewComponent.mjs */ "./node_modules/neo.mjs/apps/realworld2/view/article/PreviewComponent.mjs");




/**
 * @class RealWorld2.view.article.PreviewList
 * @extends Neo.list.Base
 */
class PreviewList extends _src_list_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld2.view.article.PreviewList'
         * @protected
         */
        className: 'RealWorld2.view.article.PreviewList',
        /**
         * @member {String} displayField='title'
         */
        displayField: 'title',
        /**
         * @member {Neo.data.Store} store=ArticlePreviews
         */
        store: _store_ArticlePreviews_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]
    }}

    /**
     * @param {Boolean} [silent=false]
     */
    createItems(silent=false) {
        let me   = this,
            vdom = me.vdom,
            listItem;

        vdom.cn = [];

        me.store.items.forEach(item => {
            listItem = Neo.create({
                module  : _PreviewComponent_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
                parentId: me.id,
                ...item,
                author   : item.author.username, // todo: PreviewComponent should use an author object
                userImage: item.author.image
            });

            vdom.cn.push(listItem.vdom);
        });

        if (silent) {
            me._vdom = vdom;
        } else {
            me.promiseVdomUpdate().then(() => {
                me.fire('createItems');
            });
        }
    }
}

Neo.applyClassConfig(PreviewList);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/realworld2/view/article/TagListComponent.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/realworld2/view/article/TagListComponent.mjs ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TagListComponent; });
/* harmony import */ var _src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class RealWorld2.view.article.TagListComponent
 * @extends Neo.component.Base
 */
class TagListComponent extends _src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core.Observable mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='RealWorld2.view.article.TagListComponent'
         * @protected
         */
        className: 'RealWorld2.view.article.TagListComponent',
        /**
         * @member {String|null} activeTag_
         */
        activeTag_: null,
        /**
         * @member {String[]} cls=['rw2-taglist-component']
         */
        cls: ['rw2-taglist-component'],
        /**
         * @member {String[]} tags_=[]
         */
        tags_: [],
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            cn: [{
                cls: ['sidebar'],
                cn : [{
                    tag : 'p',
                    html: 'Popular Tags'
                }, {
                    cls: ['tag-list']
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

        Neo.main.DomEvents.registerPreventDefaultTargets({
            name: 'click',
            cls : 'tag-pill'
        });

        let me           = this,
            domListeners = me.domListeners;

        domListeners.push({
            click: {
                fn      : me.onTagLinkClick,
                delegate: '.tag-pill',
                scope   : me
            }
        });

        me.domListeners = domListeners;
    }

    /**
     * Triggered after the activeTag config got changed
     * @param {String[]|null} value
     * @param {String[]|null} oldValue
     * @protected
     */
    afterSetActiveTag(value, oldValue) {
        if (oldValue !== undefined) {
            this.fire('tagChange', {
                oldValue: oldValue,
                value   : value
            });
        }
    }

    /**
     * Triggered after the tags config got changed
     * @param {String[]|null} value
     * @param {String[]|null} oldValue
     * @protected
     */
    afterSetTags(value, oldValue) {
        let me   = this,
            vdom = me.vdom;

        vdom.cn[0].cn[1].cn = [];

        if (Array.isArray(value)) {
            value.forEach(item => {
                vdom.cn[0].cn[1].cn.push({
                    tag : 'a',
                    cls : ['tag-pill', 'tag-default'],
                    href: '',
                    html: item,
                    id  : me.getTagVdomId(item)
                });
            });

            me.vdom = vdom;
        }
    }

    /**
     *
     * @param {String} nodeId
     * @returns {String}
     */
    getTagId(nodeId) {
        return nodeId.split('__')[1];
    }

    /**
     *
     * @param {String} name
     * @returns {String}
     */
    getTagVdomId(name) {
        return this.id + '__' + name;
    }

    /**
     *
     * @param {Object} data
     */
    onTagLinkClick(data) {
        this.activeTag = this.getTagId(data.path[0].id);
    }
}

Neo.applyClassConfig(TagListComponent);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/realworld2/view/user/LoginFormContainer.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/realworld2/view/user/LoginFormContainer.mjs ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginFormContainer; });
/* harmony import */ var _src_form_Container_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/form/Container.mjs */ "./node_modules/neo.mjs/src/form/Container.mjs");
/* harmony import */ var _src_form_field_Password_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/form/field/Password.mjs */ "./node_modules/neo.mjs/src/form/field/Password.mjs");
/* harmony import */ var _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/form/field/Text.mjs */ "./node_modules/neo.mjs/src/form/field/Text.mjs");
/* harmony import */ var _src_container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/container/Toolbar.mjs */ "./node_modules/neo.mjs/src/container/Toolbar.mjs");





/**
 * @class RealWorld2.view.user.LoginFormContainer
 * @extends Neo.form.Container
 */
class LoginFormContainer extends _src_form_Container_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld2.view.user.LoginFormContainer'
         * @protected
         */
        className: 'RealWorld2.view.user.LoginFormContainer',
        /**
         * @member {Object} itemDefaults
         */
        itemDefaults: {
            style: {
                maxWidth: '500px'
            }
        },
        /**
         * @member {Array|null} items
         */
        items: null,
        /**
         * @member {Object} layout
         */
        layout: {ntype: 'base'}
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        me.items = [{
            module       : _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            labelPosition: 'inline',
            labelText    : 'Email',
            name         : 'email',
            required     : true
        }, {
            module       : _src_form_field_Password_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            labelPosition: 'inline',
            labelText    : 'Password',
            name         : 'password',
            required     : true
        }, {
            module: _src_container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            items : ['->', {
                handler     : me.onLoginButtonClick,
                handlerScope: me,
                text        : 'Submit'
            }],
            style: {
                maxWidth: '500px',
                padding : 0
            }
        }];
    }

    /**
     *
     */
    onLoginButtonClick() {
        let values = this.getValues();

        console.log(values);
        console.log(this.isValid());
    }
}

Neo.applyClassConfig(LoginFormContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/realworld2/view/user/ProfileContainer.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/realworld2/view/user/ProfileContainer.mjs ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProfileContainer; });
/* harmony import */ var _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");


/**
 * @class RealWorld2.view.user.ProfileContainer
 * @extends Neo.container.Base
 */
class ProfileContainer extends _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld2.view.user.ProfileContainer'
         * @protected
         */
        className: 'RealWorld2.view.user.ProfileContainer',
        /**
         * @member {Array} items
         */
        items: [{
            ntype: 'component',
            html : 'ProfileContainer'
        }],
        /**
         * @member {Object} style
         */
        style: {
            padding: '20px'
        }
    }}
}

Neo.applyClassConfig(ProfileContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/realworld2/view/user/SettingsFormContainer.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/realworld2/view/user/SettingsFormContainer.mjs ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingsFormContainer; });
/* harmony import */ var _src_form_Container_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/form/Container.mjs */ "./node_modules/neo.mjs/src/form/Container.mjs");
/* harmony import */ var _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/form/field/Text.mjs */ "./node_modules/neo.mjs/src/form/field/Text.mjs");
/* harmony import */ var _src_container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/container/Toolbar.mjs */ "./node_modules/neo.mjs/src/container/Toolbar.mjs");




/**
 * @class RealWorld2.view.user.SettingsFormContainer
 * @extends Neo.form.Container
 */
class SettingsFormContainer extends _src_form_Container_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld2.view.user.SettingsFormContainer'
         * @protected
         */
        className: 'RealWorld2.view.user.SettingsFormContainer',
        /**
         * @member {Object} itemDefaults
         */
        itemDefaults: {
            style: {
                maxWidth: '500px'
            }
        },
        /**
         * @member {Array} items
         */
        items: [{
            module       : _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            labelPosition: 'inline',
            labelText    : 'URL of profile picture',
            name         : 'image'
        }, {
            module       : _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            labelPosition: 'inline',
            labelText    : 'Your Name',
            name         : 'name'
        }, {
            module: _src_container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            items : ['->', {
                text: 'Submit'
            }],
            style: {
                maxWidth: '500px',
                padding : 0
            }
        }],
        /**
         * @member {Object} layout
         */
        layout: {ntype: 'base'}
    }}
}

Neo.applyClassConfig(SettingsFormContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/component/gallery/GalleryMainContainer.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/component/gallery/GalleryMainContainer.mjs ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GalleryMainContainer; });
/* harmony import */ var _src_component_Gallery_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/component/Gallery.mjs */ "./node_modules/neo.mjs/src/component/Gallery.mjs");
/* harmony import */ var _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/form/field/Number.mjs */ "./node_modules/neo.mjs/src/form/field/Number.mjs");
/* harmony import */ var _src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/container/Panel.mjs */ "./node_modules/neo.mjs/src/container/Panel.mjs");
/* harmony import */ var _src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/form/field/Range.mjs */ "./node_modules/neo.mjs/src/form/field/Range.mjs");
/* harmony import */ var _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");






/**
 * @class TestApp.GalleryMainContainer
 * @extends Neo.tab.Container
 */
class GalleryMainContainer extends _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_4__["default"] {
    static getConfig() {return {
        className: 'TestApp.MainContainer',
        ntype: 'main-container',

        autoMount: true,
        /**
         * @member {Neo.component.Gallery|null} gallery=null
         */
        gallery: null,
        /**
         * @member {Object|null} galleryConfig=null
         */
        galleryConfig: null,
        layout: {ntype: 'hbox', align: 'stretch'},

        items: [{
            ntype : 'container',
            flex  : 1,
            layout: 'fit',
            items : []
        }, {
            ntype : 'panel',
            layout: {ntype: 'vbox', align: 'stretch'},
            style : {backgroundColor: '#2b2b2b'},
            width : 260,

            itemDefaults: {
                ntype        : 'rangefield',
                flex         : '0 1 auto',
                labelWidth   : '110px',
                style        : {padding: '10px'},
                useInputEvent: true,

                listeners: {
                    change: function(data) {
                        if (this.name === 'opacity') {
                            data.value /= 100;
                        }
                        Neo.get('neo-gallery-1')[this.name] = data.value;
                    }
                }
            },

            headers: [{
                dock: 'top',
                text: 'Gallery Controls'
            }],

            items: [{
                labelText: 'Translate X',
                maxValue : 5000,
                minValue : 0,
                name     : 'translateX',
                value    : 0,
                listeners: {
                    change: function(data) {
                        Neo.get('neo-gallery-1')[this.name] = data.value;
                    },
                    mounted: function(fieldId) {
                        let field = Neo.get(fieldId);

                        Neo.get('neo-gallery-1').on('changeTranslateX', function(value) {
                            value = Math.min(Math.max(value, this.minValue), this.maxValue);
                            this.value = value;
                        }, field);
                    }
                }
            }, {
                labelText: 'Translate Y',
                maxValue : 1500,
                minValue : -1500,
                name     : 'translateY',
                value    : 0
            }, {
                labelText: 'Translate Z',
                maxValue : 550,
                minValue : -4500,
                name     : 'translateZ',
                value    : 0,
                listeners: {
                    change: function(data) {
                        Neo.get('neo-gallery-1')[this.name] = data.value;
                    },
                    mounted: function(fieldId) {
                        let field = Neo.get(fieldId);

                        Neo.get('neo-gallery-1').on('changeTranslateZ', function(value) {
                            value = Math.min(Math.max(value, this.minValue), this.maxValue);
                            this.value = value;
                        }, field);
                    }
                }
            }, {
                labelText: 'Amount Rows',
                maxValue : 15,
                minValue : 1,
                name     : 'amountRows',
                value    : 3
            }, {
                module   : _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
                clearable: false,
                labelText: 'Max Items',
                maxValue : 600,
                minValue : 100,
                name     : 'maxItems',
                stepSize : 100,
                value    : 300
            }, {
                ntype       : 'button',
                text        : 'Order by Row',
                listeners   : {},
                style       : {margin: '20px'},
                domListeners: {
                    click: function() {
                        const gallery    = Neo.get('neo-gallery-1'),
                              orderByRow = !gallery.orderByRow;

                        this.text = orderByRow === true ? 'Order By Column' : 'Order by Row';

                        gallery.orderByRow = orderByRow;
                    }
                }
            }, {
                ntype    : 'button',
                disabled : true,
                text     : 'Sort by Lastname',
                listeners: {},
                style    : {margin: '20px', marginBottom: '10px'},

                domListeners: {
                    click: function() {
                        Neo.get('neo-gallery-1').store.sorters = [{
                            property : 'lastname',
                            direction: 'ASC'
                        }, {
                            property : 'firstname',
                            direction: 'ASC'
                        }];
                    }
                }
            }, {
                ntype    : 'button',
                disabled : true,
                text     : 'Sort by Firstname',
                listeners: {},
                style    : {margin: '20px', marginTop: 0},

                domListeners: {
                    click: function() {
                        Neo.get('neo-gallery-1').store.sorters = [{
                            property : 'firstname',
                            direction: 'ASC'
                        }, {
                            property : 'lastname',
                            direction: 'ASC'
                        }];
                    }
                }
            }, {
                ntype: 'label',
                text : [
                    '<b>Navigation Concept</b>',
                    '<p>Click on an item to select it. Afterwards you can use the Arrow Keys to walk through the items.</p>'
                ].join(''),

                style: {
                    backgroundColor: '#323232',
                    color          : '#ddd',
                    fontSize       : '13px',
                    margin         : '10px',
                    padding        : '10px',
                    whiteSpace     : 'normal'
                }
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

        me.gallery = Neo.create({
            module: _src_component_Gallery_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            id    : 'neo-gallery-1',
            ...me.galleryConfig || {}
        });

        me.items[0].items.push(me.gallery);
    }

    /**
     *
     * @returns {Neo.data.Store}
     */
    getStore() {
        return this.items[0].items[0].store;
    }
}

Neo.applyClassConfig(GalleryMainContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/component/helix/HelixMainContainer.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/component/helix/HelixMainContainer.mjs ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HelixMainContainer; });
/* harmony import */ var _src_component_Helix_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/component/Helix.mjs */ "./node_modules/neo.mjs/src/component/Helix.mjs");
/* harmony import */ var _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/form/field/Number.mjs */ "./node_modules/neo.mjs/src/form/field/Number.mjs");
/* harmony import */ var _src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/container/Panel.mjs */ "./node_modules/neo.mjs/src/container/Panel.mjs");
/* harmony import */ var _src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/form/field/Range.mjs */ "./node_modules/neo.mjs/src/form/field/Range.mjs");
/* harmony import */ var _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");






/**
 * @class TestApp.HelixMainContainer
 * @extends Neo.container.Viewport
 */
class HelixMainContainer extends _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_4__["default"] {
    static getConfig() {return {
        className: 'TestApp.HelixMainContainer',
        ntype    : 'main-container',

        autoMount: true,
        /**
         * @member {Neo.component.Helix|null} helix=null
         */
        helix: null,
        /**
         * @member {Object|null} helixConfig=null
         */
        helixConfig: null,
        layout: {ntype: 'hbox', align: 'stretch'},

        items: [{
            ntype : 'container',
            flex  : 1,
            layout: 'fit',
            items : []
        }, {
            ntype : 'panel',
            layout: {ntype: 'vbox',align: 'stretch'},
            style : {backgroundColor: '#2b2b2b'},
            width : 250,

            containerConfig: {
                flex : null,
                style: {overflowY: 'scroll'}
            },

            itemDefaults: {
                ntype        : 'rangefield',
                flex         : '0 1 auto',
                labelWidth   : '100px',
                style        : {padding: '10px'},
                useInputEvent: true,

                listeners: {
                    change: function(data) {
                        if (['deltaY', 'maxOpacity', 'minOpacity'].includes(this.name)) {
                            data.value /= 100;
                        }
                        Neo.get('neo-helix-1')[this.name] = data.value;
                    }
                }
            },

            headers: [{
                dock: 'top',
                text: 'Helix Controls'
            }],

            items: [{
                labelText: 'Translate X',
                maxValue : 2000,
                minValue : -2000,
                name     : 'translateX',
                value    : 400
            }, {
                labelText: 'Translate Y',
                maxValue : 2500,
                minValue : -2500,
                name     : 'translateY',
                value    : -350
            }, {
                labelText: 'Translate Z',
                maxValue : 4500,
                minValue : -4500,
                name     : 'translateZ',
                value    : -1500,
                listeners: {
                    change: function(data) {
                        Neo.get('neo-helix-1')[this.name] = data.value;
                    },
                    mounted: function(fieldId) {
                        let field = Neo.get(fieldId);

                        Neo.get('neo-helix-1').on('changeTranslateZ', function(value) {
                            value = Math.min(Math.max(value, this.minValue), this.maxValue);
                            this.value = value;
                        }, field);
                    }
                }
            }, {
                labelText : 'Delta Y',
                labelAlign: 'top',
                maxValue  : 600,
                minValue  : -600,
                name      : 'deltaY',
                value     : 70
            }, {
                labelText: 'Rotate',
                minValue : -720,
                maxValue : 720,
                name     : 'rotationAngle',
                value    : 0,
                listeners: {
                    change: function(data) {
                        Neo.get('neo-helix-1')[this.name] = data.value;
                    },
                    mounted: function(fieldId) {
                        let field = Neo.get(fieldId);

                        Neo.get('neo-helix-1').on('changeRotation', function(value) {
                            value = Math.min(Math.max(value, this.minValue), this.maxValue);
                            this.value = value;
                        }, field);
                    }
                }
            }, {
                labelText: 'Radius',
                maxValue : 3500,
                minValue : 900,
                name     : 'radius',
                value    : 1500
            }, {
                labelText: 'Perspective',
                minValue : 50,
                maxValue : 3000,
                name     : 'perspective',
                value    : 800
            }, {
                labelText: 'Item Angle',
                minValue : 1,
                maxValue : 36,
                name     : 'itemAngle',
                value    : 8
            }, {
                labelText: 'Max Opacity',
                name     : 'maxOpacity',
                minValue : 0,
                maxValue : 100,
                value    : 80 // todo [30, 80]
            }, {
                labelText: 'Min Opacity',
                name     : 'minOpacity',
                minValue : 0,
                maxValue : 100,
                value    : 30
            }, {
                module   : _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
                clearable: false,
                labelText: 'Max Items',
                maxValue : 600,
                minValue : 100,
                name     : 'maxItems',
                stepSize : 100,
                value    : 300
            }, {
                ntype     : 'button',
                text      : 'Flip Items',
                listeners: {},
                style    : {margin: '20px'},
                domListeners: {
                    click: data => {
                        const helix = Neo.get('neo-helix-1');
                        helix.flipped = !helix.flipped;
                    }
                }
            }, {
                ntype     : 'button',
                disabled  : true, // component.Helix: buffered sorting #105
                text      : 'Sort by Lastname',
                listeners: {},
                domListeners: {
                    click: data => {
                        Neo.get('neo-helix-1').store.sorters = [{
                            property : 'lastname',
                            direction: 'ASC'
                        }, {
                            property : 'firstname',
                            direction: 'ASC'
                        }];
                    }
                },
                style: {
                    margin      : '20px',
                    marginBottom: '10px'
                }
            }, {
                ntype     : 'button',
                disabled  : true, // component.Helix: buffered sorting #105
                text      : 'Sort by Firstname',
                listeners: {},
                domListeners: {
                    click: data => {
                        Neo.get('neo-helix-1').store.sorters = [{
                            property : 'firstname',
                            direction: 'ASC'
                        }, {
                            property : 'lastname',
                            direction: 'ASC'
                        }];
                    }
                },
                style: {
                    margin   : '20px',
                    marginTop: 0
                }
            }, {
                ntype    : 'button',
                iconCls  : 'fa fa-square',
                text     : 'Follow Selection',
                listeners: {},
                domListeners: {
                    click: function(data) {
                        let me   = this,
                            helix = Neo.get('neo-helix-1');

                        if (me.iconCls === 'fa fa-square') {
                            helix.followSelection = true;
                            me.iconCls = 'fa fa-check-square';
                        } else {
                            helix.followSelection = false;
                            me.iconCls = 'fa fa-square';
                        }
                    }
                },
                style: {
                    margin      : '20px',
                    marginBottom: '10px'
                }
            }, {
                ntype: 'label',
                text : [
                    '<b>Navigation Concept</b>',
                    '<p>Click on an item to select it. Afterwards you can use the Arrow Keys to walk through the items.</p>',
                    '<p>Hit the Space Key to rotate the currently selected item to the front.</p>',
                    '<p>Hit the Enter Key to expand the currently selected item.</p>'
                ].join(''),

                style: {
                    backgroundColor: '#323232',
                    color          : '#ddd',
                    fontSize       : '13px',
                    margin         : '10px',
                    padding        : '10px',
                    whiteSpace     : 'normal'
                }
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

        me.helix = Neo.create({
            module: _src_component_Helix_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            id    : 'neo-helix-1',
            ...me.helixConfig || {}
        });

        me.items[0].items.push(me.helix);
    }

    /**
     *
     * @returns {Neo.data.Store}
     */
    getStore() {
        return this.items[0].items[0].store;
    }
}

Neo.applyClassConfig(HelixMainContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/Container.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/Container.mjs ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
/* harmony import */ var _container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _form_field_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form/field/Base.mjs */ "./node_modules/neo.mjs/src/form/field/Base.mjs");
/* harmony import */ var _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manager/Component.mjs */ "./node_modules/neo.mjs/src/manager/Component.mjs");




/**
 * @class Neo.form.Container
 * @extends Neo.container.Base
 */
class Container extends _container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.Container'
         * @protected
         */
        className: 'Neo.form.Container',
        /**
         * @member {String} ntype='form-container'
         * @protected
         */
        ntype: 'form-container',
        /**
         * @member {String[]} cls=['neo-form-container'],
         * @protected
         */
        cls: ['neo-form-container'],
        /**
         * @member {Object} vdom={tag: 'form',cn: []}
         */
        vdom: {
            tag: 'form',
            cn : []
        }
    }}

    /**
     *
     * @returns {Neo.form.field.Base[]} fields
     */
    getFields() {
        let children = _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getChildren(this),
            fields   = [];

        children.forEach(item => {
            if (item instanceof _form_field_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]) {
                fields.push(item);
            }
        });

        return fields;
    }

    /**
     *
     * @returns {Object} values
     */
    getValues() {
        let fields = this.getFields(),
            values = {};

        fields.forEach(item => {
            values[item.name || item.id] = item.value;
        });

        return values;
    }

    /**
     * Returns true in case no form field isValid() call returns false
     * @returns {Boolean}
     */
    isValid() {
        let fields = this.getFields(),
            i      = 0,
            len    = fields.length;

        for (; i < len; i++) {
            if (!fields[i].isValid()) {
                return false;
            }
        }

        return true;
    }

    /**
     * Set field values by field name or field id
     * @param {Object} values={}
     */
    setValues(values={}) {
        let fields = this.getFields(),
            keys   = Object.keys(values),
            index;

        fields.forEach(item => {
            index = keys.indexOf(item.name);

            if (index < 0) {
                index = keys.indexOf(item.id);
            }

            if (index > -1) {
                item.value = values[keys[index]];
            }
        });
    }
}

Neo.applyClassConfig(Container);



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/Chip.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/Chip.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Chip; });
/* harmony import */ var _Select_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select.mjs */ "./node_modules/neo.mjs/src/form/field/Select.mjs");


/**
 * @class Neo.form.field.Chip
 * @extends Neo.form.field.Select
 */
class Chip extends _Select_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.Chip'
         * @protected
         */
        className: 'Neo.form.field.Chip',
        /**
         * @member {String} ntype='chipfield'
         * @protected
         */
        ntype: 'chipfield',
        /**
         * @member {Object|null} listConfig={useCheckBoxes: true}
         */
        listConfig: {
            useCheckBoxes: true
        }
    }}
}

Neo.applyClassConfig(Chip);



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/Password.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/Password.mjs ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Password; });
/* harmony import */ var _Text_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text.mjs */ "./node_modules/neo.mjs/src/form/field/Text.mjs");


/**
 * @class Neo.form.field.Password
 * @extends Neo.form.field.Text
 */
class Password extends _Text_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.Password'
         * @protected
         */
        className: 'Neo.form.field.Password',
        /**
         * @member {String} ntype='passwordfield'
         * @protected
         */
        ntype: 'passwordfield',
        /**
         * Value for the inputType_ textfield config
         * @member {String} inputType='password'
         */
        inputType: 'password'
    }}
}

Neo.applyClassConfig(Password);



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/TextArea.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/TextArea.mjs ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextArea; });
/* harmony import */ var _Text_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text.mjs */ "./node_modules/neo.mjs/src/form/field/Text.mjs");


/**
 *
 * @class Neo.form.field.TextArea
 * @extends Neo.form.field.Text
 * @abstract
 */
class TextArea extends _Text_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * Valid values for wrap
         * @member {String[]} wrapValues=['hard', 'off', 'soft', null]
         * @protected
         * @static
         */
        wrapValues: ['hard', 'off', 'soft', null]
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.TextArea'
         * @protected
         */
        className: 'Neo.form.field.TextArea',
        /**
         * @member {String} ntype='textarea'
         * @protected
         */
        ntype: 'textarea',
        /**
         * @member {String[]} cls=['neo-textarea', 'neo-textfield']
         */
        cls: ['neo-textarea', 'neo-textfield'],
        /**
         * The visible width of the text control, in average character widths.
         * If it is specified, it must be a positive integer.
         * If it is not specified, the default value is 20.
         * @member {Number|null} cols_=null
         */
        cols_: null,
        /**
         * @member {String} inputTag_='textarea'
         */
        inputTag_: 'textarea',
        /**
         * Disabling to set a type for the textarea tag
         * @member {String|null} inputType=null
         * @protected
         */
        inputType: null,
        /**
         * Use false to disable the browsers default resizing feature
         * @member {Boolean} resizable_=true
         */
        resizable_: true,
        /**
         * An integer > 0 or null
         * @member {Number|null} rows_=3
         */
        rows_: 3,
        /**
         * Indicates how the control wraps text. Possible values are: hard, soft, off
         * If this attribute is not specified, soft is its default value.
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
         * @member {String|null} wrap_=null
         */
        wrap_: null
    }}

    /**
     * Triggered after the cols config got changed
     * @param {Number|null} value
     * @param {Number|null} oldValue
     * @protected
     */
    afterSetCols(value, oldValue) {
        this.changeInputElKey('cols', value);
    }

    /**
     * Triggered after the inputTag config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetInputTag(value, oldValue) {
        this.changeInputElKey('tag', value);
    }

    /**
     * Triggered after the resizable config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetResizable(value, oldValue) {
        let me    = this,
            style = this.getInputEl().style,
            vdom  = me.vdom;

        style.resize = value ? null : 'none';
        me.vdom = vdom;
    }

    /**
     * Triggered after the rows config got changed
     * @param {Number|null} value
     * @param {Number|null} oldValue
     * @protected
     */
    afterSetRows(value, oldValue) {
        this.changeInputElKey('rows', value);
    }

    /**
     * Triggered after the wrap config got changed
     * @param {Number|null} value
     * @param {Number|null} oldValue
     * @protected
     */
    afterSetWrap(value, oldValue) {
        this.changeInputElKey('wrap', value);
    }

    /**
     * Checks if the new wrap value matches a value of the static wrapValues config
     * @param {String} value
     * @param {String} oldValue
     * @returns {String} value
     * @protected
     */
    beforeSetWrap(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'wrap', 'wrapValues');
    }
}

Neo.applyClassConfig(TextArea);



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3JlYWx3b3JsZDIvYXBpL0FydGljbGUubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvcmVhbHdvcmxkMi9hcGkvQmFzZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9yZWFsd29ybGQyL2FwaS9GYXZvcml0ZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9yZWFsd29ybGQyL2FwaS9Qcm9maWxlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3JlYWx3b3JsZDIvYXBpL1RhZy5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9yZWFsd29ybGQyL2FwaS9Vc2VyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3JlYWx3b3JsZDIvYXBpL2NvbmZpZy5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9yZWFsd29ybGQyL2FwcC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9yZWFsd29ybGQyL21vZGVsL0FydGljbGVQcmV2aWV3Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3JlYWx3b3JsZDIvc3RvcmUvQXJ0aWNsZVByZXZpZXdzLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3JlYWx3b3JsZDIvdmlldy9Gb290ZXJDb21wb25lbnQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvcmVhbHdvcmxkMi92aWV3L0hlYWRlclRvb2xiYXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvcmVhbHdvcmxkMi92aWV3L0hlYWRlclRvb2xiYXJDb250cm9sbGVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3JlYWx3b3JsZDIvdmlldy9Ib21lQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3JlYWx3b3JsZDIvdmlldy9NYWluQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3JlYWx3b3JsZDIvdmlldy9NYWluQ29udGFpbmVyQ29udHJvbGxlci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9yZWFsd29ybGQyL3ZpZXcvYXJ0aWNsZS9EZXRhaWxzQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3JlYWx3b3JsZDIvdmlldy9hcnRpY2xlL0Zvcm1Db250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvcmVhbHdvcmxkMi92aWV3L2FydGljbGUvR2FsbGVyeS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9yZWFsd29ybGQyL3ZpZXcvYXJ0aWNsZS9HYWxsZXJ5Q29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3JlYWx3b3JsZDIvdmlldy9hcnRpY2xlL0hlbGl4Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3JlYWx3b3JsZDIvdmlldy9hcnRpY2xlL0hlbGl4Q29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3JlYWx3b3JsZDIvdmlldy9hcnRpY2xlL1ByZXZpZXdDb21wb25lbnQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvcmVhbHdvcmxkMi92aWV3L2FydGljbGUvUHJldmlld0xpc3QubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvcmVhbHdvcmxkMi92aWV3L2FydGljbGUvVGFnTGlzdENvbXBvbmVudC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9yZWFsd29ybGQyL3ZpZXcvdXNlci9Mb2dpbkZvcm1Db250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvcmVhbHdvcmxkMi92aWV3L3VzZXIvUHJvZmlsZUNvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9yZWFsd29ybGQyL3ZpZXcvdXNlci9TZXR0aW5nc0Zvcm1Db250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL2NvbXBvbmVudC9nYWxsZXJ5L0dhbGxlcnlNYWluQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9jb21wb25lbnQvaGVsaXgvSGVsaXhNYWluQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9Db250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL0NoaXAubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL1Bhc3N3b3JkLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9UZXh0QXJlYS5tanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlEQUFJO0FBQzFCLHdCQUF3QjtB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QixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCLGVBQWUsWUFBWTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCLGVBQWUsWUFBWTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0IsZUFBZSxZQUFZO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InZlbmRvcnN+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgUmVhbFdvcmxkMi5hcGkuQXJ0aWNsZVxuICogQGV4dGVuZHMgUmVhbFdvcmxkMi5hcGkuQmFzZVxuICovXG5jbGFzcyBBcnRpY2xlIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1JlYWxXb3JsZDIuYXBpLkFydGljbGUnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZDIuYXBpLkFydGljbGUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSByZXNvdXJjZT0nL2FydGljbGVzJ1xuICAgICAgICAgKi9cbiAgICAgICAgcmVzb3VyY2U6ICcvYXJ0aWNsZXMnXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNsdWdcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaWRcbiAgICAgKi9cbiAgICBkZWxldGVDb21tZW50KHNsdWcsIGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZSh7XG4gICAgICAgICAgICB1cmw6IGAvYXJ0aWNsZXMvJHtzbHVnfS9jb21tZW50cy8ke2lkfWBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2x1Z1xuICAgICAqL1xuICAgIGdldENvbW1lbnRzKHNsdWcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHtcbiAgICAgICAgICAgIHVybDogYC9hcnRpY2xlcy8ke3NsdWd9L2NvbW1lbnRzYFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzbHVnXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKi9cbiAgICBwb3N0Q29tbWVudChzbHVnLCBvcHRzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc3Qoe1xuICAgICAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgICAgIHVybDogYC9hcnRpY2xlcy8ke3NsdWd9L2NvbW1lbnRzYFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEFydGljbGUpO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKEFydGljbGUpO1xuXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7IiwiaW1wb3J0IHtBUElfVVJMLCBMT0NBTF9TVE9SQUdFX0tFWX0gZnJvbSAnLi9jb25maWcubWpzJztcbmltcG9ydCBDb3JlQmFzZSAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgUmVhbFdvcmxkMi5hcGkuQmFzZVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBCYXNlIGV4dGVuZHMgQ29yZUJhc2Uge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlL09ic2VydmFibGUubWpzIG1peGluXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9ic2VydmFibGU9dHJ1ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBvYnNlcnZhYmxlOiB0cnVlXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdSZWFsV29ybGQyLmFwaS5CYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdSZWFsV29ybGQyLmFwaS5CYXNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBkZWZhdWx0SGVhZGVycz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBkZWZhdWx0SGVhZGVyczogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGlzUmVhZHk9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGlzUmVhZHk6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSByZXNvdXJjZT0nJ1xuICAgICAgICAgKi9cbiAgICAgICAgcmVzb3VyY2U6ICcvJ1xuICAgIH19XG5cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICghQmFzZS5pbml0aWFsVG9rZW5SZXF1ZXN0U2VudCkge1xuICAgICAgICAgICAgQmFzZS5pbml0aWFsVG9rZW5SZXF1ZXN0U2VudCA9IHRydWU7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIE5lby5tYWluLmFkZG9uLkxvY2FsU3RvcmFnZS5yZWFkTG9jYWxTdG9yYWdlSXRlbSh7XG4gICAgICAgICAgICAgICAgICAgIGtleTogTE9DQUxfU1RPUkFHRV9LRVlcbiAgICAgICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2tlbiA9IGRhdGEudmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBCYXNlLnRva2VuID0gdG9rZW47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBtZS5vblJlYWR5KHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgQmFzZS5maXJlKCdyZWFkeScsIHRva2VuKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIE5lby5jb25maWcuaXNFeHBlcmltZW50YWwgPyAwIDogMjAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEJhc2Uub24oe1xuICAgICAgICAgICAgICAgIHJlYWR5OiBtZS5vblJlYWR5LFxuICAgICAgICAgICAgICAgIHNjb3BlOiBtZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cz17fV1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHMuZGF0YV1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHMucGFyYW1zXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0cy5yZXNvdXJjZV1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdHMuc2x1Z11cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdHMudXJsXVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IHVybFxuICAgICAqL1xuICAgIGNyZWF0ZVVybChvcHRzKSB7XG4gICAgICAgIGlmIChvcHRzLnVybCkge1xuICAgICAgICAgICAgcmV0dXJuIEFQSV9VUkwgKyBvcHRzLnVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBBUElfVVJMICsgKG9wdHMucmVzb3VyY2UgfHwgdGhpcy5yZXNvdXJjZSkgKyAob3B0cy5zbHVnID8gJy8nICsgb3B0cy5zbHVnIDogJycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzPXt9XVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cy5kYXRhXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cy5wYXJhbXNdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRzLnJlc291cmNlXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0cy5zbHVnXVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgZGVsZXRlKG9wdHM9e30pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZScsIG9wdHMpO1xuXG4gICAgICAgIHJldHVybiBOZW8uWGhyLnByb21pc2VKc29uKHtcbiAgICAgICAgICAgIGRhdGEgICA6IG9wdHMuZGF0YSxcbiAgICAgICAgICAgIG1ldGhvZCA6ICdERUxFVEUnLFxuICAgICAgICAgICAgcGFyYW1zIDogb3B0cy5wYXJhbXMsXG4gICAgICAgICAgICB1cmwgICAgOiB0aGlzLmNyZWF0ZVVybChvcHRzKSxcblxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuZGVmYXVsdEhlYWRlcnMgfHwge30sXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZScgICAgOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZWFsV29ybGQyLmFwaS5CYXNlOmdldCgpJywgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cz17fV1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHMuZGF0YV1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHMucGFyYW1zXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0cy5yZXNvdXJjZV1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdHMuc2x1Z11cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIGdldChvcHRzPXt9KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXQnLCBvcHRzKTtcblxuICAgICAgICByZXR1cm4gTmVvLlhoci5wcm9taXNlSnNvbih7XG4gICAgICAgICAgICBkYXRhICAgOiBvcHRzLmRhdGEsXG4gICAgICAgICAgICBtZXRob2QgOiAnR0VUJyxcbiAgICAgICAgICAgIHBhcmFtcyA6IG9wdHMucGFyYW1zLFxuICAgICAgICAgICAgdXJsICAgIDogdGhpcy5jcmVhdGVVcmwob3B0cyksXG5cbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLmRlZmF1bHRIZWFkZXJzIHx8IHt9LFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnICAgIDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVhbFdvcmxkMi5hcGkuQmFzZTpnZXQoKScsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxhY2Vob2xkZXIgbWV0aG9kIHdoaWNoIGdldHMgdHJpZ2dlcmVkIG9uY2UgdGhlIHRva2VuIGlzIGZldGNoZWQgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHRva2VuXG4gICAgICovXG4gICAgb25SZWFkeSh0b2tlbikge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgbWUuZGVmYXVsdEhlYWRlcnMgPSBtZS5kZWZhdWx0SGVhZGVycyB8fCB7fTtcbiAgICAgICAgICAgIG1lLmRlZmF1bHRIZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSAnVG9rZW4gJyArIHRva2VuO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIG1lLmZpcmUoJ3JlYWR5JywgdG9rZW4pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzPXt9XVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cy5kYXRhXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cy5wYXJhbXNdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRzLnJlc291cmNlXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0cy5zbHVnXVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgcG9zdChvcHRzPXt9KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwb3N0Jywgb3B0cyk7XG5cbiAgICAgICAgY29uc3QgcGFyYW1zID0gb3B0cy5wYXJhbXM7XG4gICAgICAgIGRlbGV0ZSBvcHRzLnBhcmFtcztcblxuICAgICAgICByZXR1cm4gTmVvLlhoci5wcm9taXNlSnNvbih7XG4gICAgICAgICAgICBkYXRhICAgOiBvcHRzLmRhdGEsXG4gICAgICAgICAgICBtZXRob2QgOiAnUE9TVCcsXG4gICAgICAgICAgICBwYXJhbXMgOiBwYXJhbXMsXG4gICAgICAgICAgICB1cmwgICAgOiB0aGlzLmNyZWF0ZVVybChvcHRzKSxcblxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuZGVmYXVsdEhlYWRlcnMgfHwge30sXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZScgICAgOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZWFsV29ybGQyLmFwaS5CYXNlOnBvc3QoKScsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHM9e31dXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzLmRhdGFdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzLnBhcmFtc11cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdHMucmVzb3VyY2VdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRzLnNsdWddXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICAgKi9cbiAgICBwdXQob3B0cz17fSkge1xuICAgICAgICBjb25zb2xlLmxvZygncHV0Jywgb3B0cyk7XG5cbiAgICAgICAgY29uc3QgcGFyYW1zID0gb3B0cy5wYXJhbXM7XG4gICAgICAgIGRlbGV0ZSBvcHRzLnBhcmFtcztcblxuICAgICAgICByZXR1cm4gTmVvLlhoci5wcm9taXNlSnNvbih7XG4gICAgICAgICAgICBkYXRhICAgOiBvcHRzLmRhdGEsXG4gICAgICAgICAgICBtZXRob2QgOiAnUFVUJyxcbiAgICAgICAgICAgIHBhcmFtcyA6IHBhcmFtcyxcbiAgICAgICAgICAgIHVybCAgICA6IHRoaXMuY3JlYXRlVXJsKG9wdHMpLFxuXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5kZWZhdWx0SGVhZGVycyB8fCB7fSxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJyAgICA6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlYWxXb3JsZDIuYXBpLkJhc2U6cHV0KCknLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuQmFzZS5pbml0aWFsVG9rZW5SZXF1ZXN0U2VudCA9IGZhbHNlO1xuQmFzZS50b2tlbiAgICAgICAgICAgICAgICAgICA9IG51bGw7XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xuXG5leHBvcnQge0Jhc2UgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFJlYWxXb3JsZDIuYXBpLkZhdm9yaXRlXG4gKiBAZXh0ZW5kcyBSZWFsV29ybGQyLmFwaS5CYXNlXG4gKi9cbmNsYXNzIEZhdm9yaXRlIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1JlYWxXb3JsZDIuYXBpLkZhdm9yaXRlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdSZWFsV29ybGQyLmFwaS5GYXZvcml0ZSdcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2x1Z1xuICAgICAqL1xuICAgIGFkZChzbHVnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc3Qoe1xuICAgICAgICAgICAgdXJsOiBgL2FydGljbGVzLyR7c2x1Z30vZmF2b3JpdGVgXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNsdWdcbiAgICAgKi9cbiAgICByZW1vdmUoc2x1Zykge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxldGUoe1xuICAgICAgICAgICAgdXJsOiBgL2FydGljbGVzLyR7c2x1Z30vZmF2b3JpdGVgXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRmF2b3JpdGUpO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKEZhdm9yaXRlKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBSZWFsV29ybGQyLmFwaS5Qcm9maWxlXG4gKiBAZXh0ZW5kcyBSZWFsV29ybGQyLmFwaS5CYXNlXG4gKi9cbmNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nUmVhbFdvcmxkMi5hcGkuUHJvZmlsZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnUmVhbFdvcmxkMi5hcGkuUHJvZmlsZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHJlc291cmNlPScvcHJvZmlsZXMnXG4gICAgICAgICAqL1xuICAgICAgICByZXNvdXJjZTogJy9wcm9maWxlcydcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2x1Z1xuICAgICAqL1xuICAgIGZvbGxvdyhzbHVnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc3Qoe1xuICAgICAgICAgICAgdXJsOiBgL3Byb2ZpbGVzLyR7c2x1Z30vZm9sbG93YFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzbHVnXG4gICAgICovXG4gICAgdW5mb2xsb3coc2x1Zykge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxldGUoe1xuICAgICAgICAgICAgdXJsOiBgL3Byb2ZpbGVzLyR7c2x1Z30vZm9sbG93YFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFByb2ZpbGUpO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKFByb2ZpbGUpO1xuXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFJlYWxXb3JsZDIuYXBpLlRhZ1xuICogQGV4dGVuZHMgUmVhbFdvcmxkMi5hcGkuQmFzZVxuICovXG5jbGFzcyBUYWcgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nUmVhbFdvcmxkMi5hcGkuVGFnJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdSZWFsV29ybGQyLmFwaS5UYWcnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSByZXNvdXJjZT0nL3RhZ3MnXG4gICAgICAgICAqL1xuICAgICAgICByZXNvdXJjZTogJy90YWdzJ1xuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFRhZyk7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoVGFnKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBSZWFsV29ybGQyLmFwaS5Vc2VyXG4gKiBAZXh0ZW5kcyBSZWFsV29ybGQyLmFwaS5CYXNlXG4gKi9cbmNsYXNzIFVzZXIgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nUmVhbFdvcmxkMi5hcGkuVXNlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnUmVhbFdvcmxkMi5hcGkuVXNlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHJlc291cmNlPScvdGFncydcbiAgICAgICAgICovXG4gICAgICAgIHJlc291cmNlOiAnL3VzZXJzJ1xuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFVzZXIpO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKFVzZXIpO1xuXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7IiwiZXhwb3J0IGNvbnN0IEFQSV9VUkwgICAgICAgICAgID0gJ2h0dHBzOi8vY29uZHVpdC5wcm9kdWN0aW9ucmVhZHkuaW8vYXBpJztcbmV4cG9ydCBjb25zdCBMT0NBTF9TVE9SQUdFX0tFWSA9ICduZW9SZWFsV29ybGRUb2tlbic7XG5cbmV4cG9ydCBkZWZhdWx0IHtBUElfVVJMLCBMT0NBTF9TVE9SQUdFX0tFWX07IiwiaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSAnLi92aWV3L01haW5Db250YWluZXIubWpzJztcblxuY29uc3Qgb25TdGFydCA9ICgpID0+IE5lby5hcHAoe1xuICAgIGFwcFBhdGggOiAnYXBwcy9yZWFsd29ybGQyLycsXG4gICAgbWFpblZpZXc6IE1haW5Db250YWluZXIsXG4gICAgbmFtZSAgICA6ICdSZWFsV29ybGQyJ1xufSk7XG5cbmV4cG9ydCB7b25TdGFydCBhcyBvblN0YXJ0fTsiLCJpbXBvcnQgTW9kZWwgIGZyb20gJy4uLy4uLy4uL3NyYy9kYXRhL01vZGVsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFJlYWxXb3JsZDIubW9kZWwuQXJ0aWNsZVByZXZpZXdcbiAqIEBleHRlbmRzIE5lby5kYXRhLk1vZGVsXG4gKi9cbmNsYXNzIEFydGljbGVQcmV2aWV3IGV4dGVuZHMgTW9kZWwge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnUmVhbFdvcmxkMi5tb2RlbC5BcnRpY2xlUHJldmlldycsXG5cbiAgICAgICAgZmllbGRzOiBbe1xuICAgICAgICAgICAgbmFtZTogJ2F1dGhvcicsXG4gICAgICAgICAgICB0eXBlOiAnT2JqZWN0J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnYm9keScsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnY3JlYXRlZEF0JyxcbiAgICAgICAgICAgIHR5cGU6ICdTdHJpbmcnIC8vIGRhdGVcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgIHR5cGU6ICdTdHJpbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdmYXZvcml0ZWQnLFxuICAgICAgICAgICAgdHlwZTogJ0Jvb2xlYW4nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdmYXZvcml0ZXNDb3VudCcsXG4gICAgICAgICAgICB0eXBlOiAnTnVtYmVyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnc2x1ZycsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAndGFnTGlzdCcsXG4gICAgICAgICAgICB0eXBlOiAnQXJyYXknXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICd0aXRsZScsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAndXBkYXRlZEF0JyxcbiAgICAgICAgICAgIHR5cGU6ICdTdHJpbmcnIC8vIGRhdGVcbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhBcnRpY2xlUHJldmlldyk7XG5cbmV4cG9ydCB7QXJ0aWNsZVByZXZpZXcgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEFydGljbGVQcmV2aWV3IGZyb20gJy4uL21vZGVsL0FydGljbGVQcmV2aWV3Lm1qcyc7XG5pbXBvcnQgU3RvcmUgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2RhdGEvU3RvcmUubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgUmVhbFdvcmxkMi5zdG9yZS5BcnRpY2xlUHJldmlld3NcbiAqIEBleHRlbmRzIE5lby5kYXRhLlN0b3JlXG4gKi9cbmNsYXNzIEFydGljbGVQcmV2aWV3cyBleHRlbmRzIFN0b3JlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZDIuc3RvcmUuQXJ0aWNsZVByZXZpZXdzJyxcblxuICAgICAgICBrZXlQcm9wZXJ0eTogJ3NsdWcnLFxuICAgICAgICBtb2RlbCAgICAgIDogQXJ0aWNsZVByZXZpZXdcbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhBcnRpY2xlUHJldmlld3MpO1xuXG5leHBvcnQge0FydGljbGVQcmV2aWV3cyBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL3NyYy9jb21wb25lbnQvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBSZWFsV29ybGQyLnZpZXcuRm9vdGVyQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgRm9vdGVyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nUmVhbFdvcmxkMi52aWV3LkZvb3RlckNvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnUmVhbFdvcmxkMi52aWV3LkZvb3RlckNvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsncncyLWZvb3Rlci1jb21wb25lbnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ3J3Mi1mb290ZXItY29tcG9uZW50J10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGhlaWdodD00MFxuICAgICAgICAgKi9cbiAgICAgICAgaGVpZ2h0OiA0MCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICB0YWc6ICdmb290ZXInLFxuICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgIGNsczogWydjb250YWluZXInXSxcbiAgICAgICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgICAgIHRhZyA6ICdhJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzIDogWydsb2dvLWZvbnQnXSxcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogJyMvJyxcbiAgICAgICAgICAgICAgICAgICAgaHRtbDogJ2NvbmR1aXQnXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB0YWcgOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIGNscyA6ICdhdHRyaWJ1dGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6ICdBbiBpbnRlcmFjdGl2ZSBsZWFybmluZyBwcm9qZWN0IGZyb20gPGEgaHJlZj1cImh0dHBzOi8vdGhpbmtzdGVyLmlvXCI+VGhpbmtzdGVyPC9hPi4gQ29kZSAmYW1wOyBkZXNpZ24gbGljZW5zZWQgdW5kZXIgTUlULidcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEZvb3RlckNvbXBvbmVudCk7XG5cbmV4cG9ydCB7Rm9vdGVyQ29tcG9uZW50IGFzIGRlZmF1bHR9OyIsImltcG9ydCBIZWFkZXJUb29sYmFyQ29udHJvbGxlciBmcm9tICcuL0hlYWRlclRvb2xiYXJDb250cm9sbGVyLm1qcyc7XG5pbXBvcnQgVG9vbGJhciAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbnRhaW5lci9Ub29sYmFyLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFJlYWxXb3JsZDIudmlldy5IZWFkZXJUb29sYmFyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLlRvb2xiYXJcbiAqL1xuY2xhc3MgSGVhZGVyVG9vbGJhciBleHRlbmRzIFRvb2xiYXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdSZWFsV29ybGQyLnZpZXcuSGVhZGVyVG9vbGJhcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnUmVhbFdvcmxkMi52aWV3LkhlYWRlclRvb2xiYXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ3J3Mi1oZWFkZXItdG9vbGJhcicsICduZW8tdG9vbGJhciddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsncncyLWhlYWRlci10b29sYmFyJywgJ25lby10b29sYmFyJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29udHJvbGxlci5Db21wb25lbnR9IGNvbnRyb2xsZXI9SGVhZGVyVG9vbGJhckNvbnRyb2xsZXJcbiAgICAgICAgICovXG4gICAgICAgIGNvbnRyb2xsZXI6IEhlYWRlclRvb2xiYXJDb250cm9sbGVyLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBoZWlnaHQ9NTZcbiAgICAgICAgICovXG4gICAgICAgIGhlaWdodDogNTYsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IG1pbkhlaWdodD01NlxuICAgICAgICAgKi9cbiAgICAgICAgbWluSGVpZ2h0OiA1NixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtc1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICB0ZXh0ICAgOiAnY29uZHVpdCcsXG4gICAgICAgICAgICBoYW5kbGVyOiAnb25Ib21lQnV0dG9uQ2xpY2snXG4gICAgICAgIH0sICctPicsIHtcbiAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgICAgICAgIHRleHQgICA6ICdIb21lJyxcbiAgICAgICAgICAgIGhhbmRsZXI6ICdvbkhvbWVCdXR0b25DbGljaydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLXNpZ24taW4tYWx0JyxcbiAgICAgICAgICAgIHRleHQgICA6ICdMb2dpbicsXG4gICAgICAgICAgICBoYW5kbGVyOiAnb25Mb2dpbkJ1dHRvbkNsaWNrJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtZG5hJyxcbiAgICAgICAgICAgIHRleHQgICA6ICdIZWxpeCcsXG4gICAgICAgICAgICBoYW5kbGVyOiAnb25IZWxpeEJ1dHRvbkNsaWNrJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtaW1hZ2VzJyxcbiAgICAgICAgICAgIHRleHQgICA6ICdHYWxsZXJ5JyxcbiAgICAgICAgICAgIGhhbmRsZXI6ICdvbkdhbGxlcnlCdXR0b25DbGljaydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWVkaXQnLFxuICAgICAgICAgICAgdGV4dCAgIDogJ05ldyBBcnRpY2xlJyxcbiAgICAgICAgICAgIGhhbmRsZXI6ICdvbk5ld0FydGljbGVCdXR0b25DbGljaydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLXVzZXItY29nJyxcbiAgICAgICAgICAgIHRleHQgICA6ICdTZXR0aW5ncycsXG4gICAgICAgICAgICBoYW5kbGVyOiAnb25TZXR0aW5nc0J1dHRvbkNsaWNrJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0ZXh0ICAgOiAnUHJvZmlsZScsXG4gICAgICAgICAgICBoYW5kbGVyOiAnb25Qcm9maWxlQnV0dG9uQ2xpY2snXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGVhZGVyVG9vbGJhcik7XG5cbmV4cG9ydCB7SGVhZGVyVG9vbGJhciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29tcG9uZW50Q29udHJvbGxlciBmcm9tICcuLi8uLi8uLi9zcmMvY29udHJvbGxlci9Db21wb25lbnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgUmVhbFdvcmxkMi52aWV3LkhlYWRlclRvb2xiYXJDb250cm9sbGVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udHJvbGxlci5Db21wb25lbnRcbiAqL1xuY2xhc3MgSGVhZGVyVG9vbGJhckNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnRDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nUmVhbFdvcmxkMi52aWV3LkhlYWRlclRvb2xiYXJDb250cm9sbGVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdSZWFsV29ybGQyLnZpZXcuSGVhZGVyVG9vbGJhckNvbnRyb2xsZXInXG4gICAgfX1cblxuICAgIG9uR2FsbGVyeUJ1dHRvbkNsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFJvdXRlKCcvZ2FsbGVyeScpO1xuICAgIH1cblxuICAgIG9uSGVsaXhCdXR0b25DbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRSb3V0ZSgnL2hlbGl4Jyk7XG4gICAgfVxuXG4gICAgb25Ib21lQnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0Um91dGUoJy8nKTtcbiAgICB9XG5cbiAgICBvbkxvZ2luQnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0Um91dGUoJy9sb2dpbicpO1xuICAgIH1cblxuICAgIG9uTmV3QXJ0aWNsZUJ1dHRvbkNsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFJvdXRlKCcvZWRpdG9yJyk7XG4gICAgfVxuXG4gICAgb25TZXR0aW5nc0J1dHRvbkNsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFJvdXRlKCcvc2V0dGluZ3MnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBoYXNoXG4gICAgICovXG4gICAgc2V0Um91dGUoaGFzaCkge1xuICAgICAgICBOZW8uTWFpbi5zZXRSb3V0ZSh7XG4gICAgICAgICAgICB2YWx1ZTogaGFzaFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEhlYWRlclRvb2xiYXJDb250cm9sbGVyKTtcblxuZXhwb3J0IHtIZWFkZXJUb29sYmFyQ29udHJvbGxlciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29udGFpbmVyICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBQcmV2aWV3TGlzdCAgICAgIGZyb20gJy4vYXJ0aWNsZS9QcmV2aWV3TGlzdC5tanMnO1xuaW1wb3J0IFRhYkNvbnRhaW5lciAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL3RhYi9Db250YWluZXIubWpzJztcbmltcG9ydCBUYWdMaXN0Q29tcG9uZW50IGZyb20gJy4vYXJ0aWNsZS9UYWdMaXN0Q29tcG9uZW50Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFJlYWxXb3JsZDIudmlldy5Ib21lQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgSG9tZUNvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1JlYWxXb3JsZDIudmlldy5Ib21lQ29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdSZWFsV29ybGQyLnZpZXcuSG9tZUNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsncncyLWhvbWUtY29udGFpbmVyJywgJ25lby1jb250YWluZXInXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ3J3Mi1ob21lLWNvbnRhaW5lcicsICduZW8tY29udGFpbmVyJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGxheW91dD17bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDoge1xuICAgICAgICAgICAgbnR5cGU6ICd2Ym94JyxcbiAgICAgICAgICAgIGFsaWduOiAnc3RyZXRjaCdcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtc1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBudHlwZSA6ICdjb21wb25lbnQnLFxuICAgICAgICAgICAgY2xzICAgOiBbJ2Jhbm5lciddLFxuICAgICAgICAgICAgaGVpZ2h0OiAxNzAsXG4gICAgICAgICAgICB2ZG9tICA6IHtcbiAgICAgICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ2NvbnRhaW5lciddLFxuICAgICAgICAgICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWcgOiAnaDEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xzIDogWydsb2dvLWZvbnQnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6ICdjb25kdWl0IHYyJ1xuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWcgOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sOiAnQSBwbGFjZSB0byBzaGFyZSB5b3VyIGtub3dsZWRnZS4nXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlOiBDb250YWluZXIsXG4gICAgICAgICAgICBjbHMgICA6IFsnbmVvLWNvbnRhaW5lcicsICdjZW50ZXInLCAnY29udGFpbmVyJ10sXG4gICAgICAgICAgICBmbGV4ICA6IDEsXG4gICAgICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgICAgOiBUYWJDb250YWluZXIsXG4gICAgICAgICAgICAgICAgYWN0aXZlSW5kZXg6IDEsXG4gICAgICAgICAgICAgICAgZmxleCAgICAgICA6IDMsXG5cbiAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgICAgICAgICAgOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgICAgICAgICAgY2xzICAgICAgICAgICAgOiBbJ25lby1leGFtcGxlcy10YWItY29tcG9uZW50J10sXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlICAgICAgICAgIDoge3BhZGRpbmc6ICcyMHB4J30sXG4gICAgICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge2ljb25DbHM6ICdmYSBmYS11c2VyLW5pbmphJywgdGV4dDogJ1lvdXIgRmVlZCd9LFxuICAgICAgICAgICAgICAgICAgICB2ZG9tICAgICAgICAgICA6IHtpbm5lckhUTUw6ICd0b2RvJ31cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZSAgICAgICAgIDogUHJldmlld0xpc3QsXG4gICAgICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge2ljb25DbHM6ICdmYSBmYS1nbG9iZS1ldXJvcGUnLCB0ZXh0OiAnR2xvYmFsIEZlZWQnfVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlOiBUYWdMaXN0Q29tcG9uZW50LFxuICAgICAgICAgICAgICAgIGZsZXggIDogMVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfV1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtcz17fV1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHM9e31dXG4gICAgICovXG4gICAgZ2V0QXJ0aWNsZXMocGFyYW1zPXt9LCBvcHRzPXt9KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLmFjdGl2ZVRhZykge1xuICAgICAgICAgICAgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIHRhZzogbWUuYWN0aXZlVGFnLFxuICAgICAgICAgICAgICAgIC4uLnBhcmFtc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmdldENvbnRyb2xsZXIoKS5nZXRBcnRpY2xlcyhwYXJhbXMsIG9wdHMpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmpzb24pO1xuXG4gICAgICAgICAgICAvLyB0b2RvOiBjcmVhdGUgYW4gZWFzaWVyIHdheSB0byBhY2Nlc3MgdGhlIHN0b3JlXG4gICAgICAgICAgICBtZS5pdGVtc1sxXS5pdGVtc1swXS5nZXRDYXJkQ29udGFpbmVyKCkuaXRlbXNbMV0uc3RvcmUuZGF0YSA9IGRhdGEuanNvbi5hcnRpY2xlcztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0VGFnTGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG93bih7bW9kdWxlOiBUYWdMaXN0Q29tcG9uZW50fSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIb21lQ29udGFpbmVyKTtcblxuZXhwb3J0IHtIb21lQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBGb290ZXJDb21wb25lbnQgICAgICAgICBmcm9tICcuL0Zvb3RlckNvbXBvbmVudC5tanMnO1xuaW1wb3J0IEdhbGxlcnlDb250YWluZXIgICAgICAgIGZyb20gJy4vYXJ0aWNsZS9HYWxsZXJ5Q29udGFpbmVyLm1qcyc7XG5pbXBvcnQgSGVhZGVyVG9vbGJhciAgICAgICAgICAgZnJvbSAnLi9IZWFkZXJUb29sYmFyLm1qcyc7XG5pbXBvcnQgSGVsaXhDb250YWluZXIgICAgICAgICAgZnJvbSAnLi9hcnRpY2xlL0hlbGl4Q29udGFpbmVyLm1qcyc7XG5pbXBvcnQgSG9tZUNvbnRhaW5lciAgICAgICAgICAgZnJvbSAnLi9Ib21lQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIgZnJvbSAnLi9NYWluQ29udGFpbmVyQ29udHJvbGxlci5tanMnO1xuaW1wb3J0IFZpZXdwb3J0ICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9jb250YWluZXIvVmlld3BvcnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgUmVhbFdvcmxkMi52aWV3Lk1haW5Db250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuVmlld3BvcnRcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lciBleHRlbmRzIFZpZXdwb3J0IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nUmVhbFdvcmxkMi52aWV3Lk1haW5Db250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZDIudmlldy5NYWluQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGF1dG9Nb3VudD10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGF1dG9Nb3VudDogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WydydzItaG9tZS1jb250YWluZXInXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ3J3Mi1tYWluLWNvbnRhaW5lcicsICduZW8tdmlld3BvcnQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb250cm9sbGVyLkNvbXBvbmVudH0gY29udHJvbGxlcj1NYWluQ29udGFpbmVyQ29udHJvbGxlclxuICAgICAgICAgKi9cbiAgICAgICAgY29udHJvbGxlcjogTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGxheW91dD17bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDoge1xuICAgICAgICAgICAgbnR5cGU6ICd2Ym94JyxcbiAgICAgICAgICAgIGFsaWduOiAnc3RyZXRjaCdcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtc1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBtb2R1bGU6IEhlYWRlclRvb2xiYXJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbnR5cGUgICAgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgIGZsZXggICAgIDogMSxcbiAgICAgICAgICAgIGl0ZW1zICAgIDogW10sXG4gICAgICAgICAgICBsYXlvdXQgICA6IHtudHlwZTogJ2NhcmQnfSxcbiAgICAgICAgICAgIHJlZmVyZW5jZTogJ2NhcmRzJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGU6IEZvb3RlckNvbXBvbmVudFxuICAgICAgICB9XVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5Db250YWluZXIpO1xuXG5leHBvcnQge01haW5Db250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEFydGljbGVBcGkgICAgICAgICAgICAgIGZyb20gJy4uL2FwaS9BcnRpY2xlLm1qcyc7XG5pbXBvcnQgQXJ0aWNsZURldGFpbHNDb250YWluZXIgZnJvbSAnLi9hcnRpY2xlL0RldGFpbHNDb250YWluZXIubWpzJztcbmltcG9ydCBDb21wb25lbnRDb250cm9sbGVyICAgICBmcm9tICcuLi8uLi8uLi9zcmMvY29udHJvbGxlci9Db21wb25lbnQubWpzJztcbmltcG9ydCBGYXZvcml0ZUFwaSAgICAgICAgICAgICBmcm9tICcuLi9hcGkvRmF2b3JpdGUubWpzJztcbmltcG9ydCBGb3JtQ29udGFpbmVyICAgICAgICAgICBmcm9tICcuL2FydGljbGUvRm9ybUNvbnRhaW5lci5tanMnO1xuaW1wb3J0IEdhbGxlcnlDb250YWluZXIgICAgICAgIGZyb20gJy4vYXJ0aWNsZS9HYWxsZXJ5Q29udGFpbmVyLm1qcyc7XG5pbXBvcnQgSGVsaXhDb250YWluZXIgICAgICAgICAgZnJvbSAnLi9hcnRpY2xlL0hlbGl4Q29udGFpbmVyLm1qcyc7XG5pbXBvcnQgSG9tZUNvbnRhaW5lciAgICAgICAgICAgZnJvbSAnLi9Ib21lQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgTG9naW5Gb3JtQ29udGFpbmVyICAgICAgZnJvbSAnLi91c2VyL0xvZ2luRm9ybUNvbnRhaW5lci5tanMnO1xuaW1wb3J0IHtMT0NBTF9TVE9SQUdFX0tFWX0gICAgIGZyb20gJy4uL2FwaS9jb25maWcubWpzJztcbmltcG9ydCBQcm9maWxlQXBpICAgICAgICAgICAgICBmcm9tICcuLi9hcGkvUHJvZmlsZS5tanMnO1xuaW1wb3J0IFByb2ZpbGVDb250YWluZXIgICAgICAgIGZyb20gJy4vdXNlci9Qcm9maWxlQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgU2V0dGluZ3NGb3JtQ29udGFpbmVyICAgZnJvbSAnLi91c2VyL1NldHRpbmdzRm9ybUNvbnRhaW5lci5tanMnO1xuaW1wb3J0IFRhZ0FwaSAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2FwaS9UYWcubWpzJztcbmltcG9ydCBVc2VyQXBpICAgICAgICAgICAgICAgICBmcm9tICcuLi9hcGkvVXNlci5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBSZWFsV29ybGQyLnZpZXcuTWFpbkNvbnRhaW5lckNvbnRyb2xsZXJcbiAqIEBleHRlbmRzIE5lby5jb250cm9sbGVyLkNvbXBvbmVudFxuICovXG5jbGFzcyBNYWluQ29udGFpbmVyQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdSZWFsV29ybGQyLnZpZXcuTWFpbkNvbnRhaW5lckNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZDIudmlldy5NYWluQ29udGFpbmVyQ29udHJvbGxlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdG9yZXMgdGhlIGN1cnJlbnQgdXNlciBkYXRhIGFmdGVyIGxvZ2dpbmcgaW5cbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IGN1cnJlbnRVc2VyXz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGN1cnJlbnRVc2VyXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBoYXNoU3RyaW5nPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGhhc2hTdHJpbmc6IG51bGxcbiAgICB9fVxuXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBVc2VyQXBpLm9uKCdyZWFkeScsIG1lLmdldEN1cnJlbnRVc2VyLCBtZSk7XG5cbiAgICAgICAgLy8gZGVmYXVsdCByb3V0ZSA9PiBob21lXG4gICAgICAgIGlmICghTmVvLmNvbmZpZy5oYXNoKSB7XG4gICAgICAgICAgICBtZS5vbkhhc2hDaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIGFwcE5hbWUgICA6ICdSZWFsV29ybGQyJyxcbiAgICAgICAgICAgICAgICBoYXNoICAgICAgOiB7Jy8nOiAnJ30sXG4gICAgICAgICAgICAgICAgaGFzaFN0cmluZzogJy8nXG4gICAgICAgICAgICB9LCBudWxsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgYXJ0aWNsZXNPZmZzZXQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0QXJ0aWNsZXNPZmZzZXQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIC8vIGlnbm9yZSB0aGUgaW5pdGlhbCBjb25maWcgc2V0dGVyIGNhbGxcbiAgICAgICAgaWYgKE5lby5pc051bWJlcihvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0QXJ0aWNsZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgY3VycmVudFVzZXIgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0Q3VycmVudFVzZXIodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2xkVmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAvKnRoaXMuZ2V0UmVmZXJlbmNlKCdoZWFkZXInKS5zZXQoe1xuICAgICAgICAgICAgICAgIGxvZ2dlZEluIDogISF2YWx1ZSxcbiAgICAgICAgICAgICAgICB1c2VySW1hZ2U6IHZhbHVlID8gdmFsdWUuaW1hZ2UgICAgOiBudWxsLFxuICAgICAgICAgICAgICAgIHVzZXJOYW1lIDogdmFsdWUgPyB2YWx1ZS51c2VybmFtZSA6IG51bGxcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlyZSgnYWZ0ZXJTZXRDdXJyZW50VXNlcicsIHZhbHVlKTtcbiAgICAgICAgICAgIH0pOyovXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzbHVnXG4gICAgICovXG4gICAgZGVsZXRlQXJ0aWNsZShzbHVnKSB7XG4gICAgICAgIEFydGljbGVBcGkuZGVsZXRlKHtzbHVnOiBzbHVnfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIE5lby5NYWluLnNldFJvdXRlKHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogJy8nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaWRcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIGRlbGV0ZUNvbW1lbnQoaWQpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgc2x1ZyA9IG1lLmhhc2hTdHJpbmcuc3BsaXQoJy8nKS5wb3AoKTtcblxuICAgICAgICByZXR1cm4gQXJ0aWNsZUFwaS5kZWxldGVDb21tZW50KHNsdWcsIGlkKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgbWUuZ2V0Q29tbWVudHMoc2x1Zyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNsdWdcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGZhdm9yaXRlZFxuICAgICAqL1xuICAgIGZhdm9yaXRlQXJ0aWNsZShzbHVnLCBmYXZvcml0ZWQpIHtcbiAgICAgICAgcmV0dXJuIEZhdm9yaXRlQXBpW2Zhdm9yaXRlZCA/ICdhZGQnIDogJ3JlbW92ZSddKHNsdWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNsdWdcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGZvbGxvd1xuICAgICAqL1xuICAgIGZvbGxvd1VzZXIoc2x1ZywgZm9sbG93KSB7XG4gICAgICAgIHJldHVybiBQcm9maWxlQXBpW2ZvbGxvdyA/ICdmb2xsb3cnIDogJ3VuZm9sbG93J10oc2x1Zyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXJ0aWNsZSBkZXRhaWxzOiBnZXQgYW4gYXJ0aWNsZSBwcm92aWRpbmcgYSB1c2VyIHNsdWdcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2x1Z1xuICAgICAqL1xuICAgIGdldEFydGljbGUoc2x1Zykge1xuICAgICAgICByZXR1cm4gQXJ0aWNsZUFwaS5nZXQoe1xuICAgICAgICAgICAgc2x1Zzogc2x1Z1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zPXt9XVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cz17fV1cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIGdldEFydGljbGVzKHBhcmFtcz17fSwgb3B0cz17fSkge1xuICAgICAgICByZXR1cm4gQXJ0aWNsZUFwaS5nZXQoe1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgbGltaXQgOiAyMCxcbiAgICAgICAgICAgICAgICAuLi5wYXJhbXNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi5vcHRzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNsdWdcbiAgICAgKi9cbiAgICBnZXRDb21tZW50cyhzbHVnKSB7XG4gICAgICAgIEFydGljbGVBcGkuZ2V0Q29tbWVudHMoc2x1ZykudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIC8vdGhpcy5hcnRpY2xlQ29tcG9uZW50LmNvbW1lbnRzID0gZGF0YS5qc29uLmNvbW1lbnRzO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0b2tlblxuICAgICAqL1xuICAgIGdldEN1cnJlbnRVc2VyKHRva2VuKSB7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgVXNlckFwaS5nZXQoe1xuICAgICAgICAgICAgICAgIHJlc291cmNlOiAnL3VzZXInIC8vIGVkZ2UgY2FzZSwgdXNlciBpbnN0ZWFkIG9mIHVzZXJzXG4gICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBkYXRhLmpzb24udXNlcjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRVc2VyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2x1Z1xuICAgICAqL1xuICAgIGdldFByb2ZpbGUoc2x1Zykge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgUHJvZmlsZUFwaS5nZXQoe1xuICAgICAgICAgICAgc2x1Zzogc2x1Z1xuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgLyptZS5wcm9maWxlQ29tcG9uZW50LnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgLi4uZGF0YS5qc29uLnByb2ZpbGUsXG4gICAgICAgICAgICAgICAgbXlQcm9maWxlOiBkYXRhLmpzb24ucHJvZmlsZS51c2VybmFtZSA9PT0gKG1lLmN1cnJlbnRVc2VyICYmIG1lLmN1cnJlbnRVc2VyLnVzZXJuYW1lKVxuICAgICAgICAgICAgfSk7Ki9cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBnZXRUYWdzKCkge1xuICAgICAgICBUYWdBcGkuZ2V0KCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVmZXJlbmNlKCdob21lJykuZ2V0VGFnTGlzdCgpLnRhZ3MgPSBkYXRhLmpzb24udGFncztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcmVmZXJlbmNlXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IG1vZHVsZVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29tcG9uZW50LkJhc2V9IFRoZSBtYXRjaGluZyB2aWV3IGluc3RhbmNlXG4gICAgICovXG4gICAgZ2V0VmlldyhyZWZlcmVuY2UsIG1vZHVsZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBjYXJkID0gbWUuZ2V0UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgICAgaWYgKCFjYXJkKSB7XG4gICAgICAgICAgICBjYXJkID0gbWUuZ2V0UmVmZXJlbmNlKCdjYXJkcycpLmFkZCh7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgOiBtb2R1bGUsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlOiByZWZlcmVuY2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNhcmQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHVzZXJEYXRhXG4gICAgICovXG4gICAgbG9naW4odXNlckRhdGEpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHVzZXJEYXRhO1xuXG4gICAgICAgIE5lby5tYWluLmFkZG9uLkxvY2FsU3RvcmFnZS5jcmVhdGVMb2NhbFN0b3JhZ2VJdGVtKHtcbiAgICAgICAgICAgIGtleSAgOiBMT0NBTF9TVE9SQUdFX0tFWSxcbiAgICAgICAgICAgIHZhbHVlOiB1c2VyRGF0YS50b2tlblxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIC8vIHdhaXQgdW50aWwgdGhlIGhlYWRlciB2ZG9tLXVwZGF0ZSBpcyBkb25lIHRvIGF2b2lkIHNob3dpbmcgc2lnbiB1cCAmIHNpZ24gaW4gdHdpY2VcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIE5lby5NYWluLnNldFJvdXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICcvJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGxvZ291dCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IG51bGw7XG5cbiAgICAgICAgTmVvLm1haW4uYWRkb24uTG9jYWxTdG9yYWdlLmRlc3Ryb3lMb2NhbFN0b3JhZ2VJdGVtKHtcbiAgICAgICAgICAgIGtleTogTE9DQUxfU1RPUkFHRV9LRVlcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAvLyB3YWl0IHVudGlsIHRoZSBoZWFkZXIgdmRvbS11cGRhdGUgaXMgZG9uZSB0byBhdm9pZCBzaG93aW5nIHNpZ24gdXAgJiBzaWduIGluIHR3aWNlXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBOZW8uTWFpbi5zZXRSb3V0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnLydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2xkVmFsdWVcbiAgICAgKi9cbiAgICBvbkhhc2hDaGFuZ2UodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGhhc2ggICAgICAgPSB2YWx1ZS5oYXNoLFxuICAgICAgICAgICAgaGFzaFN0cmluZyA9IHZhbHVlLmhhc2hTdHJpbmcsXG4gICAgICAgICAgICB2aWV3ICAgICAgID0gbWUudmlldyxcbiAgICAgICAgICAgIGNhcmRzLCBuZXdWaWV3LCBzbHVnO1xuXG4gICAgICAgIGlmICghdmlldy5tb3VudGVkKSB7IC8vIHRoZSBpbml0aWFsIGhhc2ggY2hhbmdlIGdldHMgdHJpZ2dlcmVkIGJlZm9yZSB0aGUgdm5vZGUgZ290IGJhY2sgZnJvbSB0aGUgdmRvbSB3b3JrZXIgKHVzaW5nIGF1dG9Nb3VudClcbiAgICAgICAgICAgIHZpZXcub24oJ21vdW50ZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWUub25IYXNoQ2hhbmdlKHZhbHVlLCBvbGRWYWx1ZSwgaGFzaFN0cmluZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbkhhc2hDaGFuZ2UnLCB2YWx1ZSwgaGFzaFN0cmluZyk7XG5cbiAgICAgICAgICAgIGNhcmRzID0gbWUuZ2V0UmVmZXJlbmNlKCdjYXJkcycpO1xuXG4gICAgICAgICAgICBtZS5oYXNoU3RyaW5nID0gaGFzaFN0cmluZztcblxuICAgICAgICAgICAgLy8gYWRqdXN0IHRoZSBhY3RpdmUgaGVhZGVyIGxpbmtcbiAgICAgICAgICAgIC8vIHZpZXcuaXRlbXNbMF0uYWN0aXZlSXRlbSA9IE9iamVjdC5rZXlzKHZhbHVlKVswXTtcblxuICAgICAgICAgICAgICAgICBpZiAoaGFzaFN0cmluZyA9PT0gJy8nKSAgICAgICAgICAgICAgIHtuZXdWaWV3ID0gbWUuZ2V0VmlldygnaG9tZScsICAgICBIb21lQ29udGFpbmVyKTt9XG4gICAgICAgICAgICBlbHNlIGlmIChoYXNoU3RyaW5nLmluY2x1ZGVzKCcvYXJ0aWNsZS8nKSkge25ld1ZpZXcgPSBtZS5nZXRWaWV3KCdhcnRpY2xlJywgIEFydGljbGVEZXRhaWxzQ29udGFpbmVyKTt9XG4gICAgICAgICAgICBlbHNlIGlmIChoYXNoU3RyaW5nID09PSAnL2VkaXRvcicpICAgICAgICAge25ld1ZpZXcgPSBtZS5nZXRWaWV3KCdlZGl0b3InLCAgIEZvcm1Db250YWluZXIpO31cbiAgICAgICAgICAgIGVsc2UgaWYgKGhhc2hTdHJpbmcgPT09ICcvaGVsaXgnKSAgICAgICAgICB7bmV3VmlldyA9IG1lLmdldFZpZXcoJ2hlbGl4JywgICAgSGVsaXhDb250YWluZXIpO31cbiAgICAgICAgICAgIGVsc2UgaWYgKGhhc2hTdHJpbmcgPT09ICcvZ2FsbGVyeScpICAgICAgICB7bmV3VmlldyA9IG1lLmdldFZpZXcoJ2dhbGxlcnknLCAgR2FsbGVyeUNvbnRhaW5lcik7fVxuICAgICAgICAgICAgZWxzZSBpZiAoaGFzaFN0cmluZyA9PT0gJy9sb2dpbicpICAgICAgICAgIHtuZXdWaWV3ID0gbWUuZ2V0VmlldygnbG9naW4nLCAgICBMb2dpbkZvcm1Db250YWluZXIpOyBuZXdWaWV3Lm1vZGUgPSAnbG9naW4nO31cbiAgICAgICAgICAgIGVsc2UgaWYgKGhhc2hTdHJpbmcuaW5jbHVkZXMoJy9wcm9maWxlLycpKSB7bmV3VmlldyA9IG1lLmdldFZpZXcoJ3Byb2ZpbGUnLCAgUHJvZmlsZUNvbnRhaW5lcik7fVxuICAgICAgICAgICAgZWxzZSBpZiAoaGFzaFN0cmluZyA9PT0gJy9zZXR0aW5ncycpICAgICAgIHtuZXdWaWV3ID0gbWUuZ2V0Vmlldygnc2V0dGluZ3MnLCBTZXR0aW5nc0Zvcm1Db250YWluZXIpO31cbiAgICAgICAgICAvKmVsc2UgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KCcvcmVnaXN0ZXInKSkge25ld1ZpZXcgPSBtZS5nZXRWaWV3KCdzaWduVXBDb21wb25lbnQnLCAgIFNpZ25VcENvbXBvbmVudCwgICAnc2lnbnVwJyk7IG5ld1ZpZXcubW9kZSA9ICdzaWdudXAnO31cblxuICAgICAgICAgICAgaWYgKCEob2xkVmFsdWUgJiYgKFxuICAgICAgICAgICAgICAgIG9sZFZhbHVlLmhhc093blByb3BlcnR5KCcvbG9naW4nKSAgICAmJiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgnL3JlZ2lzdGVyJykgfHxcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZS5oYXNPd25Qcm9wZXJ0eSgnL3JlZ2lzdGVyJykgJiYgdmFsdWUuaGFzT3duUHJvcGVydHkoJy9sb2dpbicpKSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGlmICh2aWV3Lml0ZW1zLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmlldy5yZW1vdmVBdCgxLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmlldy5pbnNlcnQoMSwgbmV3Vmlldyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSovXG5cbiAgICAgICAgICAgIC8vIHNob3J0IGRlbGF5IHRvIGVuc3VyZSB0aGUgbmV3IGNhcmQgYWxyZWFkeSBnb3QgYWRkZWRcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNhcmRzLmxheW91dC5hY3RpdmVJbmRleCA9IGNhcmRzLmluZGV4T2YobmV3Vmlldyk7XG4gICAgICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKG5ld1ZpZXcucmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnZ2FsbGVyeSc6XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZpZXcuZ2V0QXJ0aWNsZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnaGVsaXgnOlxuICAgICAgICAgICAgICAgICAgICBuZXdWaWV3LmdldEFydGljbGVzKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICAgICAgICAgICAgICAvL21lLmhvbWVDb21wb25lbnQubG9nZ2VkSW4gPSAhIW1lLmN1cnJlbnRVc2VyO1xuICAgICAgICAgICAgICAgICAgICBuZXdWaWV3LmdldEFydGljbGVzKCk7XG4gICAgICAgICAgICAgICAgICAgIG1lLmdldFRhZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblByb2ZpbGVCdXR0b25DbGljaygpIHtcbiAgICAgICAgTmVvLk1haW4uc2V0Um91dGUoe1xuICAgICAgICAgICAgdmFsdWU6ICcvcHJvZmlsZS8nICsgdGhpcy5jdXJyZW50VXNlci51c2VybmFtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cylcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIHBvc3RDb21tZW50KG9wdHM9e30pIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgc2x1ZyA9IG1lLmhhc2hTdHJpbmcuc3BsaXQoJy8nKS5wb3AoKTtcblxuICAgICAgICByZXR1cm4gQXJ0aWNsZUFwaS5wb3N0Q29tbWVudChzbHVnLCBvcHRzKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgbWUuZ2V0Q29tbWVudHMoc2x1Zyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIHNhdmVVc2VyKG9wdHMpIHtcbiAgICAgICAgcmV0dXJuIFVzZXJBcGkucG9zdChvcHRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cylcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIHVwZGF0ZVNldHRpbmdzKG9wdHM9e30pIHtcbiAgICAgICAgcmV0dXJuIFVzZXJBcGkucHV0KHtcbiAgICAgICAgICAgIC4uLm9wdHMsXG4gICAgICAgICAgICByZXNvdXJjZTogJy91c2VyJyAvLyBlZGdlIGNhc2UsIHVzZXIgaW5zdGVhZCBvZiB1c2Vyc1xuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgaWYgKCFkYXRhLmpzb24uZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IGRhdGEuanNvbi51c2VyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyQ29udHJvbGxlcik7XG5cbmV4cG9ydCB7TWFpbkNvbnRhaW5lckNvbnRyb2xsZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi8uLi8uLi9zcmMvY29udGFpbmVyL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgUmVhbFdvcmxkMi52aWV3LmFydGljbGUuRGV0YWlsc0NvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmZvcm0uQ29udGFpbmVyXG4gKi9cbmNsYXNzIERldGFpbHNDb250YWluZXIgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdSZWFsV29ybGQyLnZpZXcuYXJ0aWNsZS5EZXRhaWxzQ29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdSZWFsV29ybGQyLnZpZXcuYXJ0aWNsZS5EZXRhaWxzQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtc1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBudHlwZTogJ2NvbXBvbmVudCcsXG4gICAgICAgICAgICBodG1sIDogJ2FydGljbGUuRGV0YWlsc0NvbnRhaW5lcidcbiAgICAgICAgfV0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHN0eWxlXG4gICAgICAgICAqL1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgcGFkZGluZzogJzIwcHgnXG4gICAgICAgIH1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhEZXRhaWxzQ29udGFpbmVyKTtcblxuZXhwb3J0IHtEZXRhaWxzQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDaGlwRmllbGQgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2Zvcm0vZmllbGQvQ2hpcC5tanMnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi8uLi8uLi9zcmMvZm9ybS9Db250YWluZXIubWpzJztcbmltcG9ydCBUZXh0QXJlYSAgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2Zvcm0vZmllbGQvVGV4dEFyZWEubWpzJztcbmltcG9ydCBUb29sYmFyICAgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2NvbnRhaW5lci9Ub29sYmFyLm1qcyc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9mb3JtL2ZpZWxkL1RleHQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgUmVhbFdvcmxkMi52aWV3LmFydGljbGUuRm9ybUNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmZvcm0uQ29udGFpbmVyXG4gKi9cbmNsYXNzIEZvcm1Db250YWluZXIgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdSZWFsV29ybGQyLnZpZXcuYXJ0aWNsZS5Gb3JtQ29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdSZWFsV29ybGQyLnZpZXcuYXJ0aWNsZS5Gb3JtQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gaXRlbURlZmF1bHRzXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc1MDBweCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtc1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgOiBUZXh0RmllbGQsXG4gICAgICAgICAgICBsYWJlbFBvc2l0aW9uOiAnaW5saW5lJyxcbiAgICAgICAgICAgIGxhYmVsVGV4dCAgICA6ICdBcnRpY2xlIFRpdGxlJyxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICA6ICd0aXRsZSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgIDogVGV4dEZpZWxkLFxuICAgICAgICAgICAgbGFiZWxQb3NpdGlvbjogJ2lubGluZScsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgOiAnV2hhdFxcJ3MgdGhpcyBhcnRpY2xlIGFib3V0PycsXG4gICAgICAgICAgICBuYW1lICAgICAgICAgOiAnZGVzY3JpcHRpb24nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICA6IFRleHRBcmVhLFxuICAgICAgICAgICAgbGFiZWxQb3NpdGlvbjogJ2lubGluZScsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgOiAnV3JpdGUgeW91ciBhcnRpY2xlIChpbiBtYXJrZG93biknLFxuICAgICAgICAgICAgbmFtZSAgICAgICAgIDogJ2JvZHknXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICA6IFRleHRGaWVsZCwgLy8gdG9kbzogQ2hpcEZpZWxkXG4gICAgICAgICAgICBsYWJlbFBvc2l0aW9uOiAnaW5saW5lJyxcbiAgICAgICAgICAgIGxhYmVsVGV4dCAgICA6ICdFbnRlciBUYWdzJyxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICA6ICd0YWdzJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGU6IFRvb2xiYXIsXG4gICAgICAgICAgICBpdGVtcyA6IFsnLT4nLCB7XG4gICAgICAgICAgICAgICAgdGV4dDogJ1B1Ymxpc2ggQXJ0aWNsZSdcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzUwMHB4JyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nIDogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbGF5b3V0XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2Jhc2UnfVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEZvcm1Db250YWluZXIpO1xuXG5leHBvcnQge0Zvcm1Db250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2VHYWxsZXJ5ICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudC9HYWxsZXJ5Lm1qcyc7XG5pbXBvcnQgUHJldmlld0NvbXBvbmVudCBmcm9tICcuL1ByZXZpZXdDb21wb25lbnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgUmVhbFdvcmxkMi52aWV3LmFydGljbGUuR2FsbGVyeVxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5HYWxsZXJ5XG4gKi9cbmNsYXNzIEdhbGxlcnkgZXh0ZW5kcyBCYXNlR2FsbGVyeSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1JlYWxXb3JsZDIudmlldy5hcnRpY2xlLkdhbGxlcnknXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZDIudmlldy5hcnRpY2xlLkdhbGxlcnknLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ3J3Mi1hcnRpY2xlLWdhbGxlcnknLCAnbmVvLWdhbGxlcnknLCAncGFnZScsICd2aWV3J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWydydzItYXJ0aWNsZS1nYWxsZXJ5JywgJ25lby1nYWxsZXJ5JywgJ3BhZ2UnLCAndmlldyddLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGltYWdlIGhlaWdodCBvZiB0aGUgZ2FsbGVyeVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGltYWdlSGVpZ2h0PTI0MFxuICAgICAgICAgKi9cbiAgICAgICAgaW1hZ2VIZWlnaHQ6IDI0MCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpbWFnZSB3aWR0aCBvZiB0aGUgZ2FsbGVyeVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGltYWdlV2lkdGg9MzIwXG4gICAgICAgICAqL1xuICAgICAgICBpbWFnZVdpZHRoOiAzMjAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBcnJheSBjb250YWluaW5nIHRoZSBQcmV2aWV3Q29tcG9uZW50IHJlZmVyZW5jZXNcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGl0ZW1zPVtdXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtczogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHRvIHNlbGVjdCB0aGUgaXRlbSBpbnNpZGUgdGhlIG1pZGRsZSBvZiB0aGUgc3RvcmUgaXRlbXMgb24gbW91bnRcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2VsZWN0T25Nb3VudD1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZWN0T25Nb3VudDogZmFsc2VcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gZ2V0IGRpZmZlcmVudCBpdGVtLW1hcmt1cHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbUl0ZW1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjb3JkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge09iamVjdH0gdmRvbUl0ZW1cbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtKHZkb21JdGVtLCByZWNvcmQsIGluZGV4KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCFtZS5pdGVtc1tpbmRleF0pIHtcbiAgICAgICAgICAgIG1lLml0ZW1zW2luZGV4XSA9IHZkb21JdGVtID0gTmVvLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgOiBQcmV2aWV3Q29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHBhcmVudElkIDogbWUuaWQsXG4gICAgICAgICAgICAgICAgLi4ucmVjb3JkLFxuICAgICAgICAgICAgICAgIGF1dGhvciAgIDogcmVjb3JkLmF1dGhvci51c2VybmFtZSwgLy8gdG9kbzogUHJldmlld0NvbXBvbmVudCBzaG91bGQgdXNlIGFuIGF1dGhvciBvYmplY3RcbiAgICAgICAgICAgICAgICB1c2VySW1hZ2U6IHJlY29yZC5hdXRob3IuaW1hZ2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmRvbUl0ZW0uc2V0KHtcbiAgICAgICAgICAgICAgICAuLi5yZWNvcmQsXG4gICAgICAgICAgICAgICAgYXV0aG9yICAgOiByZWNvcmQuYXV0aG9yLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIHVzZXJJbWFnZTogcmVjb3JkLmF1dGhvci5pbWFnZVxuICAgICAgICAgICAgfSwgdHJ1ZSk7IC8vIHNpbGVudCB1cGRhdGVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbHMgICAgIDogWyduZW8tZ2FsbGVyeS1pdGVtJywgJ2ltYWdlLXdyYXAnLCAndmlldycsICduZW8tdHJhbnNpdGlvbi0xMDAwJ10sXG4gICAgICAgICAgICBpZCAgICAgIDogbWUuZ2V0SXRlbVZub2RlSWQocmVjb3JkW21lLmtleVByb3BlcnR5XSksXG4gICAgICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBtZS5pbWFnZUhlaWdodCArICdweCcsXG4gICAgICAgICAgICAgICAgd2lkdGggOiBtZS5pbWFnZVdpZHRoICArICdweCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICBjbHM6IFsnaXRlbS13cmFwcGVyJ10sXG4gICAgICAgICAgICAgICAgY24gOiBbdmRvbUl0ZW0udmRvbV1cbiAgICAgICAgICAgIH1dLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZub2RlSWRcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldEl0ZW1JZCh2bm9kZUlkKSB7XG4gICAgICAgIHJldHVybiB2bm9kZUlkLnNwbGl0KCdfXycpWzFdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gaXRlbXNcbiAgICAgKi9cbiAgICBvblN0b3JlTG9hZChpdGVtcykge1xuICAgICAgICBzdXBlci5vblN0b3JlTG9hZChpdGVtcyk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdE9uTW91bnQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5hZnRlclNldE1vdW50ZWQodHJ1ZSwgZmFsc2UpO1xuICAgICAgICB9LCAyMDApO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoR2FsbGVyeSk7XG5cbmV4cG9ydCB7R2FsbGVyeSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQXJ0aWNsZVByZXZpZXdzICAgICAgZnJvbSAnLi4vLi4vc3RvcmUvQXJ0aWNsZVByZXZpZXdzLm1qcydcbmltcG9ydCBHYWxsZXJ5ICAgICAgICAgICAgICBmcm9tICcuL0dhbGxlcnkubWpzJ1xuaW1wb3J0IEdhbGxlcnlNYWluQ29udGFpbmVyIGZyb20gJy4uLy4uLy4uLy4uL2V4YW1wbGVzL2NvbXBvbmVudC9nYWxsZXJ5L0dhbGxlcnlNYWluQ29udGFpbmVyLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFJlYWxXb3JsZDIudmlldy5hcnRpY2xlLkdhbGxlcnlDb250YWluZXJcbiAqIEBleHRlbmRzIE5lby5leGFtcGxlcy5jb21wb25lbnQuZ2FsbGVyeS5HYWxsZXJ5TWFpbkNvbnRhaW5lclxuICovXG5jbGFzcyBHYWxsZXJ5Q29udGFpbmVyIGV4dGVuZHMgR2FsbGVyeU1haW5Db250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdSZWFsV29ybGQyLnZpZXcuYXJ0aWNsZS5HYWxsZXJ5Q29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdSZWFsV29ybGQyLnZpZXcuYXJ0aWNsZS5HYWxsZXJ5Q29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gZ2FsbGVyeUNvbmZpZ1xuICAgICAgICAgKi9cbiAgICAgICAgZ2FsbGVyeUNvbmZpZzoge1xuICAgICAgICAgICAgbW9kdWxlICAgICA6IEdhbGxlcnksXG4gICAgICAgICAgICBpbWFnZUZpZWxkIDogJ2F1dGhvci5pbWFnZScsXG4gICAgICAgICAgICBpbWFnZVNvdXJjZTogJycsXG4gICAgICAgICAgICBrZXlQcm9wZXJ0eTogJ3NsdWcnLFxuICAgICAgICAgICAgc3RvcmUgICAgICA6IEFydGljbGVQcmV2aWV3c1xuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXM9e31dXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzPXt9XVxuICAgICAqL1xuICAgIGdldEFydGljbGVzKHBhcmFtcz17fSwgb3B0cz17fSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIHBhcmFtcyA9IHtcbiAgICAgICAgICAgIGxpbWl0OiBtZS5nYWxsZXJ5Lm1heEl0ZW1zLFxuICAgICAgICAgICAgLi4ucGFyYW1zXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG1lLmFjdGl2ZVRhZykge1xuICAgICAgICAgICAgcGFyYW1zLnRhZyA9IG1lLmFjdGl2ZVRhZztcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmdldENvbnRyb2xsZXIoKS5nZXRBcnRpY2xlcyhwYXJhbXMsIG9wdHMpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmpzb24pO1xuICAgICAgICAgICAgbWUuZ2V0U3RvcmUoKS5kYXRhID0gZGF0YS5qc29uLmFydGljbGVzO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEdhbGxlcnlDb250YWluZXIpO1xuXG5leHBvcnQge0dhbGxlcnlDb250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2VIZWxpeCAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudC9IZWxpeC5tanMnO1xuaW1wb3J0IFByZXZpZXdDb21wb25lbnQgZnJvbSAnLi9QcmV2aWV3Q29tcG9uZW50Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFJlYWxXb3JsZDIudmlldy5hcnRpY2xlLkhlbGl4XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkhlbGl4XG4gKi9cbmNsYXNzIEhlbGl4IGV4dGVuZHMgQmFzZUhlbGl4IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nUmVhbFdvcmxkMi52aWV3LmFydGljbGUuSGVsaXgnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZDIudmlldy5hcnRpY2xlLkhlbGl4JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WydydzItYXJ0aWNsZS1oZWxpeCcsICduZW8taGVsaXgnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ3J3Mi1hcnRpY2xlLWhlbGl4JywgJ25lby1oZWxpeCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQXJyYXkgY29udGFpbmluZyB0aGUgUHJldmlld0NvbXBvbmVudCByZWZlcmVuY2VzXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtcz1bXVxuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHJhZGl1cyBvZiB0aGUgSGVsaXggaW4gcHhcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSByYWRpdXM9MjUwMFxuICAgICAgICAgKi9cbiAgICAgICAgcmFkaXVzOiAyNTAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBkaXNwbGF5cyB0aGUgZmlyc3QgJiBsYXN0IG5hbWUgcmVjb3JkIGZpZWxkcyBiZWxvdyBhbiBleHBhbmRlZCBpdGVtXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNob3dDbG9uZUluZm89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHNob3dDbG9uZUluZm86IGZhbHNlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21JdGVtXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHZkb21JdGVtXG4gICAgICovXG4gICAgY3JlYXRlSXRlbSh2ZG9tSXRlbSwgcmVjb3JkLCBpbmRleCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICghbWUuaXRlbXNbaW5kZXhdKSB7XG4gICAgICAgICAgICBtZS5pdGVtc1tpbmRleF0gPSB2ZG9tSXRlbSA9IE5lby5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgOiBQcmV2aWV3Q29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHBhcmVudElkOiBtZS5pZCxcbiAgICAgICAgICAgICAgICAuLi5yZWNvcmQsXG4gICAgICAgICAgICAgICAgYXV0aG9yICAgOiByZWNvcmQuYXV0aG9yLnVzZXJuYW1lLCAvLyB0b2RvOiBQcmV2aWV3Q29tcG9uZW50IHNob3VsZCB1c2UgYW4gYXV0aG9yIG9iamVjdFxuICAgICAgICAgICAgICAgIHVzZXJJbWFnZTogcmVjb3JkLmF1dGhvci5pbWFnZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2ZG9tSXRlbS5zZXQoe1xuICAgICAgICAgICAgICAgIC4uLnJlY29yZCxcbiAgICAgICAgICAgICAgICBhdXRob3IgICA6IHJlY29yZC5hdXRob3IudXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgdXNlckltYWdlOiByZWNvcmQuYXV0aG9yLmltYWdlXG4gICAgICAgICAgICB9LCB0cnVlKTsgLy8gc2lsZW50IHVwZGF0ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNscyAgICAgOiBbJ3N1cmZhY2UnLCAnbmVvLWhlbGl4LWl0ZW0nXSxcbiAgICAgICAgICAgIGNuICAgICAgOiBbdmRvbUl0ZW0udmRvbV0sXG4gICAgICAgICAgICBpZCAgICAgIDogbWUuZ2V0SXRlbVZub2RlSWQocmVjb3JkW21lLmtleVByb3BlcnR5XSksXG4gICAgICAgICAgICB0YWJJbmRleDogJy0xJ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZub2RlSWRcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldEl0ZW1JZCh2bm9kZUlkKSB7XG4gICAgICAgIHJldHVybiB2bm9kZUlkLnNwbGl0KCdfXycpWzFdO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGVsaXgpO1xuXG5leHBvcnQge0hlbGl4IGFzIGRlZmF1bHR9OyIsImltcG9ydCBBcnRpY2xlUHJldmlld3MgICAgZnJvbSAnLi4vLi4vc3RvcmUvQXJ0aWNsZVByZXZpZXdzLm1qcydcbmltcG9ydCBIZWxpeCAgICAgICAgICAgICAgZnJvbSAnLi9IZWxpeC5tanMnXG5pbXBvcnQgSGVsaXhNYWluQ29udGFpbmVyIGZyb20gJy4uLy4uLy4uLy4uL2V4YW1wbGVzL2NvbXBvbmVudC9oZWxpeC9IZWxpeE1haW5Db250YWluZXIubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgUmVhbFdvcmxkMi52aWV3LmFydGljbGUuSGVsaXhDb250YWluZXJcbiAqIEBleHRlbmRzIE5lby5leGFtcGxlcy5jb21wb25lbnQuaGVsaXguSGVsaXhNYWluQ29udGFpbmVyXG4gKi9cbmNsYXNzIEhlbGl4Q29udGFpbmVyIGV4dGVuZHMgSGVsaXhNYWluQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nUmVhbFdvcmxkMi52aWV3LmFydGljbGUuSGVsaXhDb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZDIudmlldy5hcnRpY2xlLkhlbGl4Q29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gaGVsaXhDb25maWdcbiAgICAgICAgICovXG4gICAgICAgIGhlbGl4Q29uZmlnOiB7XG4gICAgICAgICAgICBtb2R1bGUgICAgIDogSGVsaXgsXG4gICAgICAgICAgICBpbWFnZUZpZWxkIDogJ2F1dGhvci5pbWFnZScsXG4gICAgICAgICAgICBpbWFnZVNvdXJjZTogJycsXG4gICAgICAgICAgICBrZXlQcm9wZXJ0eTogJ3NsdWcnLFxuICAgICAgICAgICAgc3RvcmUgICAgICA6IEFydGljbGVQcmV2aWV3c1xuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgLy8gZGlzYWJsZSBtYXhJdGVtcyBmb3Igbm93XG4gICAgICAgIG1lLml0ZW1zWzFdLml0ZW1zWzEwXS5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgbWUuaXRlbXNbMV0uaXRlbXNbMTJdID0ge1xuICAgICAgICAgICAgbnR5cGUgICAgICAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgIHRleHQgICAgICAgIDogJ1NvcnQgYnkgZGF0ZScsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICA6IHt9LFxuICAgICAgICAgICAgc3R5bGUgICAgICAgOiB7bWFyZ2luOiAnMjBweCcsIG1hcmdpbkJvdHRvbTogJzEwcHgnfSxcbiAgICAgICAgICAgIGRvbUxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbWUuZ2V0U3RvcmUoKS5zb3J0KHtwcm9wZXJ0eTogJ2NyZWF0ZWRBdCcsIGRpcmVjdGlvbjogJ0RFU0MnfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lLmdldFN0b3JlKCkuaXRlbXNbMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBtZS5pdGVtc1sxXS5pdGVtc1sxM10gPSB7XG4gICAgICAgICAgICBudHlwZSAgICAgICA6ICdidXR0b24nLFxuICAgICAgICAgICAgdGV4dCAgICAgICAgOiAnU29ydCBieSB0aXRsZScsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICA6IHt9LFxuICAgICAgICAgICAgc3R5bGUgICAgICAgOiB7bWFyZ2luOiAnMjBweCcsIG1hcmdpblRvcDogMH0sXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICBjbGljazogZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1lLmdldFN0b3JlKCkuc29ydCh7cHJvcGVydHk6ICd0aXRsZScsIGRpcmVjdGlvbjogJ0FTQyd9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobWUuZ2V0U3RvcmUoKS5pdGVtc1swXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXM9e31dXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzPXt9XVxuICAgICAqL1xuICAgIGdldEFydGljbGVzKHBhcmFtcz17fSwgb3B0cz17fSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIHBhcmFtcyA9IHtcbiAgICAgICAgICAgIGxpbWl0OiBtZS5oZWxpeC5tYXhJdGVtcyxcbiAgICAgICAgICAgIC4uLnBhcmFtc1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChtZS5hY3RpdmVUYWcpIHtcbiAgICAgICAgICAgIHBhcmFtcy50YWcgPSBtZS5hY3RpdmVUYWc7XG4gICAgICAgIH1cblxuICAgICAgICBtZS5nZXRDb250cm9sbGVyKCkuZ2V0QXJ0aWNsZXMocGFyYW1zLCBvcHRzKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5qc29uKTtcbiAgICAgICAgICAgIG1lLmdldFN0b3JlKCkuZGF0YSA9IGRhdGEuanNvbi5hcnRpY2xlcztcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIZWxpeENvbnRhaW5lcik7XG5cbmV4cG9ydCB7SGVsaXhDb250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50L0Jhc2UubWpzJztcbmltcG9ydCBOZW9BcnJheSAgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCBWRG9tVXRpbCAgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL3V0aWwvVkRvbS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBSZWFsV29ybGQyLnZpZXcuYXJ0aWNsZS5QcmV2aWV3Q29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgUHJldmlld0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1JlYWxXb3JsZDIudmlldy5hcnRpY2xlLlByZXZpZXdDb21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZDIudmlldy5hcnRpY2xlLlByZXZpZXdDb21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGF1dGhvcl89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgYXV0aG9yXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WydydzItcHJldmlldy1jb21wb25lbnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ3J3Mi1wcmV2aWV3LWNvbXBvbmVudCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogSVNPIDg2MDEgdGltZXN0YW1wXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBjcmVhdGVkQXRfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGNyZWF0ZWRBdF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gZGVzY3JpcHRpb25fPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGRlc2NyaXB0aW9uXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGZhdm9yaXRlZF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGZhdm9yaXRlZF86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IGZhdm9yaXRlc0NvdW50Xz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBmYXZvcml0ZXNDb3VudF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gc2x1Z189bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc2x1Z186IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheXxudWxsfSB0YWdMaXN0Xz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB0YWdMaXN0XzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSB0aXRsZV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdGl0bGVfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHVzZXJJbWFnZV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdXNlckltYWdlXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICBjbHM6IFsnYXJ0aWNsZS1tZXRhJ10sXG4gICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICB0YWcgOiAnYScsXG4gICAgICAgICAgICAgICAgICAgIGZsYWc6ICd1c2VySW1hZ2VMaW5rJyxcbiAgICAgICAgICAgICAgICAgICAgY24gIDogW3t0YWc6ICdpbWcnfV1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGNsczogWydpbmZvJ10sXG4gICAgICAgICAgICAgICAgICAgIGNuIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2EnLCAgICBjbHM6IFsnYXV0aG9yJ10sIGZsYWc6ICdhdXRob3InfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdzcGFuJywgY2xzOiBbJ2RhdGUnXSwgICBmbGFnOiAnY3JlYXRlZEF0J31cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ2J0bicsICdidG4tc20nLCAncHVsbC14cy1yaWdodCddLFxuICAgICAgICAgICAgICAgICAgICBjbiA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWcgIDogJ2knLCAgICBjbHMgOiBbJ2ZhIGZhLWhlYXJ0J119LFxuICAgICAgICAgICAgICAgICAgICAgICAge3Z0eXBlOiAndGV4dCcsIGZsYWc6ICdmYXZvcml0ZXNDb3VudCd9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRhZyA6ICdhJyxcbiAgICAgICAgICAgICAgICBjbHMgOiBbJ3ByZXZpZXctbGluayddLFxuICAgICAgICAgICAgICAgIGZsYWc6ICdwcmV2aWV3LWxpbmsnLFxuICAgICAgICAgICAgICAgIGNuICA6IFtcbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ2gxJywgICBmbGFnOiAndGl0bGUnfSxcbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ3AnLCAgICBmbGFnOiAnZGVzY3JpcHRpb24nfSxcbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ3NwYW4nLCBodG1sOiAnUmVhZCBtb3JlLi4uJ31cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gbWUuZG9tTGlzdGVuZXJzO1xuXG4gICAgICAgIGRvbUxpc3RlbmVycy5wdXNoKHtcbiAgICAgICAgICAgIGNsaWNrOiB7XG4gICAgICAgICAgICAgICAgZm4gICAgICA6IG1lLm9uRmF2b3JpdGVCdXR0b25DbGljayxcbiAgICAgICAgICAgICAgICBkZWxlZ2F0ZTogJy5wdWxsLXhzLXJpZ2h0JyxcbiAgICAgICAgICAgICAgICBzY29wZSAgIDogbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuZG9tTGlzdGVuZXJzID0gZG9tTGlzdGVuZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgYXV0aG9yIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEF1dGhvcih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb20sXG4gICAgICAgICAgICBub2RlID0gVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICdhdXRob3InKSxcbiAgICAgICAgICAgIGhyZWYgPSAnIy9wcm9maWxlLycgKyB2YWx1ZTtcblxuICAgICAgICAvLyB0b2RvOiBkaXNhYmxlZCB1bnRpbCB0aGUgbmV3IHByb2ZpbGUgdmlldyBpcyByZWFkeVxuICAgICAgICAvL25vZGUuaHJlZiA9IGhyZWY7XG4gICAgICAgIG5vZGUuaHRtbCA9IHZhbHVlO1xuXG4gICAgICAgIC8vVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICd1c2VySW1hZ2VMaW5rJykuaHJlZiA9IGhyZWY7XG5cbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGNyZWF0ZWRBdCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRDcmVhdGVkQXQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAnY3JlYXRlZEF0JykuaHRtbCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1VUycsIHtcbiAgICAgICAgICAgIGRheSAgOiAnbnVtZXJpYycsXG4gICAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgICAgeWVhciA6ICdudW1lcmljJ1xuICAgICAgICB9KS5mb3JtYXQobmV3IERhdGUodmFsdWUpKTtcblxuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgZGVzY3JpcHRpb24gY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RGVzY3JpcHRpb24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAnZGVzY3JpcHRpb24nKS5odG1sID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBmYXZvcml0ZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRGYXZvcml0ZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGJ1dHRvbiA9IHZkb20uY25bMF0uY25bMl07XG5cbiAgICAgICAgTmVvQXJyYXkuYWRkKGJ1dHRvbi5jbHMsIHZhbHVlID8gJ2J0bi1wcmltYXJ5JyA6ICdidG4tb3V0bGluZS1wcmltYXJ5Jyk7XG4gICAgICAgIE5lb0FycmF5LnJlbW92ZShidXR0b24uY2xzLCB2YWx1ZSA/ICdidG4tb3V0bGluZS1wcmltYXJ5JyA6ICdidG4tcHJpbWFyeScpO1xuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgIC8vIGlnbm9yZSB0aGUgaW5pdGlhbCBzZXR0ZXIgY2FsbFxuICAgICAgICBpZiAoTmVvLmlzQm9vbGVhbihvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgIG1lLmdldENvbnRyb2xsZXIoKS5mYXZvcml0ZUFydGljbGUobWUuc2x1ZywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBmYXZvcml0ZXNDb3VudCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRGYXZvcml0ZXNDb3VudCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICdmYXZvcml0ZXNDb3VudCcpLmh0bWwgPSAnICcgKyB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHNsdWcgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U2x1Zyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgLy8gdG9kbzogcmUtYWRkIG9uY2UgdGhlIG5ldyBkZXRhaWxzIHZpZXcgaXMgaW4gcGxhY2VcbiAgICAgICAgLy9WRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ3ByZXZpZXctbGluaycpLmhyZWYgPSAnIy9hcnRpY2xlLycgKyB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHRhZ0xpc3QgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFRhZ0xpc3QodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tLFxuICAgICAgICAgICAgdGFnTGlzdDtcblxuICAgICAgICAvLyByZW1vdmUgb2xkIHRhZ3MgaWYgZXhpc3RzXG4gICAgICAgIGlmICh2ZG9tLmNuWzFdLmNuWzNdKSB7XG4gICAgICAgICAgICB2ZG9tLmNuWzFdLmNuLnBvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRhZ0xpc3QgPSB7XG4gICAgICAgICAgICAgICAgdGFnOiAndWwnLFxuICAgICAgICAgICAgICAgIGNsczogWyd0YWctbGlzdCddLFxuICAgICAgICAgICAgICAgIGNuIDogW11cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgdGFnTGlzdC5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdGFnIDogJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzIDogWyd0YWctZGVmYXVsdCcsICd0YWctcGlsbCcsICd0YWctb3V0bGluZSddLFxuICAgICAgICAgICAgICAgICAgICBodG1sOiBpdGVtXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2ZG9tLmNuWzFdLmNuLnB1c2godGFnTGlzdCk7XG5cbiAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB0aXRsZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRUaXRsZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICd0aXRsZScpLmh0bWwgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHVzZXJJbWFnZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRVc2VySW1hZ2UodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAndXNlckltYWdlTGluaycpLmNuWzBdLnNyYyA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkZhdm9yaXRlQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGZhdm9yaXRlZCA9ICFtZS5mYXZvcml0ZWQ7XG5cbiAgICAgICAgbWUuc2V0KHtcbiAgICAgICAgICAgIGZhdm9yaXRlZCAgICAgOiBmYXZvcml0ZWQsXG4gICAgICAgICAgICBmYXZvcml0ZXNDb3VudDogZmF2b3JpdGVkID8gKG1lLmZhdm9yaXRlc0NvdW50ICsgMSkgOiAobWUuZmF2b3JpdGVzQ291bnQgLSAxKVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFByZXZpZXdDb21wb25lbnQpO1xuXG5leHBvcnQge1ByZXZpZXdDb21wb25lbnQgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEFydGljbGVQcmV2aWV3cyAgZnJvbSAnLi4vLi4vc3RvcmUvQXJ0aWNsZVByZXZpZXdzLm1qcydcbmltcG9ydCBMaXN0ICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9saXN0L0Jhc2UubWpzJztcbmltcG9ydCBQcmV2aWV3Q29tcG9uZW50IGZyb20gJy4vUHJldmlld0NvbXBvbmVudC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBSZWFsV29ybGQyLnZpZXcuYXJ0aWNsZS5QcmV2aWV3TGlzdFxuICogQGV4dGVuZHMgTmVvLmxpc3QuQmFzZVxuICovXG5jbGFzcyBQcmV2aWV3TGlzdCBleHRlbmRzIExpc3Qge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdSZWFsV29ybGQyLnZpZXcuYXJ0aWNsZS5QcmV2aWV3TGlzdCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnUmVhbFdvcmxkMi52aWV3LmFydGljbGUuUHJldmlld0xpc3QnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBkaXNwbGF5RmllbGQ9J3RpdGxlJ1xuICAgICAgICAgKi9cbiAgICAgICAgZGlzcGxheUZpZWxkOiAndGl0bGUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmRhdGEuU3RvcmV9IHN0b3JlPUFydGljbGVQcmV2aWV3c1xuICAgICAgICAgKi9cbiAgICAgICAgc3RvcmU6IEFydGljbGVQcmV2aWV3c1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzaWxlbnQ9ZmFsc2VdXG4gICAgICovXG4gICAgY3JlYXRlSXRlbXMoc2lsZW50PWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tLFxuICAgICAgICAgICAgbGlzdEl0ZW07XG5cbiAgICAgICAgdmRvbS5jbiA9IFtdO1xuXG4gICAgICAgIG1lLnN0b3JlLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBsaXN0SXRlbSA9IE5lby5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgOiBQcmV2aWV3Q29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHBhcmVudElkOiBtZS5pZCxcbiAgICAgICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgICAgIGF1dGhvciAgIDogaXRlbS5hdXRob3IudXNlcm5hbWUsIC8vIHRvZG86IFByZXZpZXdDb21wb25lbnQgc2hvdWxkIHVzZSBhbiBhdXRob3Igb2JqZWN0XG4gICAgICAgICAgICAgICAgdXNlckltYWdlOiBpdGVtLmF1dGhvci5pbWFnZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZkb20uY24ucHVzaChsaXN0SXRlbS52ZG9tKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHNpbGVudCkge1xuICAgICAgICAgICAgbWUuX3Zkb20gPSB2ZG9tO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUucHJvbWlzZVZkb21VcGRhdGUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBtZS5maXJlKCdjcmVhdGVJdGVtcycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFByZXZpZXdMaXN0KTtcblxuZXhwb3J0IHtQcmV2aWV3TGlzdCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnQvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBSZWFsV29ybGQyLnZpZXcuYXJ0aWNsZS5UYWdMaXN0Q29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgVGFnTGlzdENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZXMgdGhlIGNvcmUuT2JzZXJ2YWJsZSBtaXhpblxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvYnNlcnZhYmxlPXRydWVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nUmVhbFdvcmxkMi52aWV3LmFydGljbGUuVGFnTGlzdENvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnUmVhbFdvcmxkMi52aWV3LmFydGljbGUuVGFnTGlzdENvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gYWN0aXZlVGFnX1xuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZlVGFnXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WydydzItdGFnbGlzdC1jb21wb25lbnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ3J3Mi10YWdsaXN0LWNvbXBvbmVudCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IHRhZ3NfPVtdXG4gICAgICAgICAqL1xuICAgICAgICB0YWdzXzogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbToge1xuICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgY2xzOiBbJ3NpZGViYXInXSxcbiAgICAgICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgICAgIHRhZyA6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgaHRtbDogJ1BvcHVsYXIgVGFncydcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGNsczogWyd0YWctbGlzdCddXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgTmVvLm1haW4uRG9tRXZlbnRzLnJlZ2lzdGVyUHJldmVudERlZmF1bHRUYXJnZXRzKHtcbiAgICAgICAgICAgIG5hbWU6ICdjbGljaycsXG4gICAgICAgICAgICBjbHMgOiAndGFnLXBpbGwnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gbWUuZG9tTGlzdGVuZXJzO1xuXG4gICAgICAgIGRvbUxpc3RlbmVycy5wdXNoKHtcbiAgICAgICAgICAgIGNsaWNrOiB7XG4gICAgICAgICAgICAgICAgZm4gICAgICA6IG1lLm9uVGFnTGlua0NsaWNrLFxuICAgICAgICAgICAgICAgIGRlbGVnYXRlOiAnLnRhZy1waWxsJyxcbiAgICAgICAgICAgICAgICBzY29wZSAgIDogbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuZG9tTGlzdGVuZXJzID0gZG9tTGlzdGVuZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgYWN0aXZlVGFnIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nW118bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ1tdfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0QWN0aXZlVGFnKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5maXJlKCd0YWdDaGFuZ2UnLCB7XG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgOiB2YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHRhZ3MgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXXxudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nW118bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRUYWdzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICB2ZG9tLmNuWzBdLmNuWzFdLmNuID0gW107XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIHZkb20uY25bMF0uY25bMV0uY24ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHRhZyA6ICdhJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzIDogWyd0YWctcGlsbCcsICd0YWctZGVmYXVsdCddLFxuICAgICAgICAgICAgICAgICAgICBocmVmOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgaHRtbDogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgaWQgIDogbWUuZ2V0VGFnVmRvbUlkKGl0ZW0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBub2RlSWRcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldFRhZ0lkKG5vZGVJZCkge1xuICAgICAgICByZXR1cm4gbm9kZUlkLnNwbGl0KCdfXycpWzFdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldFRhZ1Zkb21JZChuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkICsgJ19fJyArIG5hbWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uVGFnTGlua0NsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVUYWcgPSB0aGlzLmdldFRhZ0lkKGRhdGEucGF0aFswXS5pZCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhUYWdMaXN0Q29tcG9uZW50KTtcblxuZXhwb3J0IHtUYWdMaXN0Q29tcG9uZW50IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb250YWluZXIgICAgIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9mb3JtL0NvbnRhaW5lci5tanMnO1xuaW1wb3J0IFBhc3N3b3JkRmllbGQgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2Zvcm0vZmllbGQvUGFzc3dvcmQubWpzJztcbmltcG9ydCBUZXh0RmllbGQgICAgIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9mb3JtL2ZpZWxkL1RleHQubWpzJztcbmltcG9ydCBUb29sYmFyICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9jb250YWluZXIvVG9vbGJhci5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBSZWFsV29ybGQyLnZpZXcudXNlci5Mb2dpbkZvcm1Db250YWluZXJcbiAqIEBleHRlbmRzIE5lby5mb3JtLkNvbnRhaW5lclxuICovXG5jbGFzcyBMb2dpbkZvcm1Db250YWluZXIgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdSZWFsV29ybGQyLnZpZXcudXNlci5Mb2dpbkZvcm1Db250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZDIudmlldy51c2VyLkxvZ2luRm9ybUNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGl0ZW1EZWZhdWx0c1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnNTAwcHgnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheXxudWxsfSBpdGVtc1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGxheW91dFxuICAgICAgICAgKi9cbiAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICdiYXNlJ31cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5pdGVtcyA9IFt7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgOiBUZXh0RmllbGQsXG4gICAgICAgICAgICBsYWJlbFBvc2l0aW9uOiAnaW5saW5lJyxcbiAgICAgICAgICAgIGxhYmVsVGV4dCAgICA6ICdFbWFpbCcsXG4gICAgICAgICAgICBuYW1lICAgICAgICAgOiAnZW1haWwnLFxuICAgICAgICAgICAgcmVxdWlyZWQgICAgIDogdHJ1ZVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgOiBQYXNzd29yZEZpZWxkLFxuICAgICAgICAgICAgbGFiZWxQb3NpdGlvbjogJ2lubGluZScsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgOiAnUGFzc3dvcmQnLFxuICAgICAgICAgICAgbmFtZSAgICAgICAgIDogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgIHJlcXVpcmVkICAgICA6IHRydWVcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlOiBUb29sYmFyLFxuICAgICAgICAgICAgaXRlbXMgOiBbJy0+Jywge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIgICAgIDogbWUub25Mb2dpbkJ1dHRvbkNsaWNrLFxuICAgICAgICAgICAgICAgIGhhbmRsZXJTY29wZTogbWUsXG4gICAgICAgICAgICAgICAgdGV4dCAgICAgICAgOiAnU3VibWl0J1xuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnNTAwcHgnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmcgOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1dO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Mb2dpbkJ1dHRvbkNsaWNrKCkge1xuICAgICAgICBsZXQgdmFsdWVzID0gdGhpcy5nZXRWYWx1ZXMoKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlzVmFsaWQoKSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhMb2dpbkZvcm1Db250YWluZXIpO1xuXG5leHBvcnQge0xvZ2luRm9ybUNvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9jb250YWluZXIvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBSZWFsV29ybGQyLnZpZXcudXNlci5Qcm9maWxlQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgUHJvZmlsZUNvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1JlYWxXb3JsZDIudmlldy51c2VyLlByb2ZpbGVDb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZDIudmlldy51c2VyLlByb2ZpbGVDb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGl0ZW1zXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgIGh0bWwgOiAnUHJvZmlsZUNvbnRhaW5lcidcbiAgICAgICAgfV0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHN0eWxlXG4gICAgICAgICAqL1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgcGFkZGluZzogJzIwcHgnXG4gICAgICAgIH1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhQcm9maWxlQ29udGFpbmVyKTtcblxuZXhwb3J0IHtQcm9maWxlQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2Zvcm0vQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9mb3JtL2ZpZWxkL1RleHQubWpzJztcbmltcG9ydCBUb29sYmFyICAgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2NvbnRhaW5lci9Ub29sYmFyLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFJlYWxXb3JsZDIudmlldy51c2VyLlNldHRpbmdzRm9ybUNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmZvcm0uQ29udGFpbmVyXG4gKi9cbmNsYXNzIFNldHRpbmdzRm9ybUNvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1JlYWxXb3JsZDIudmlldy51c2VyLlNldHRpbmdzRm9ybUNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnUmVhbFdvcmxkMi52aWV3LnVzZXIuU2V0dGluZ3NGb3JtQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gaXRlbURlZmF1bHRzXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc1MDBweCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtc1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgOiBUZXh0RmllbGQsXG4gICAgICAgICAgICBsYWJlbFBvc2l0aW9uOiAnaW5saW5lJyxcbiAgICAgICAgICAgIGxhYmVsVGV4dCAgICA6ICdVUkwgb2YgcHJvZmlsZSBwaWN0dXJlJyxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICA6ICdpbWFnZSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgIDogVGV4dEZpZWxkLFxuICAgICAgICAgICAgbGFiZWxQb3NpdGlvbjogJ2lubGluZScsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgOiAnWW91ciBOYW1lJyxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICA6ICduYW1lJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGU6IFRvb2xiYXIsXG4gICAgICAgICAgICBpdGVtcyA6IFsnLT4nLCB7XG4gICAgICAgICAgICAgICAgdGV4dDogJ1N1Ym1pdCdcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzUwMHB4JyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nIDogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbGF5b3V0XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2Jhc2UnfVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFNldHRpbmdzRm9ybUNvbnRhaW5lcik7XG5cbmV4cG9ydCB7U2V0dGluZ3NGb3JtQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBHYWxsZXJ5ICAgICBmcm9tICcuLi8uLi8uLi9zcmMvY29tcG9uZW50L0dhbGxlcnkubWpzJztcbmltcG9ydCBOdW1iZXJGaWVsZCBmcm9tICcuLi8uLi8uLi9zcmMvZm9ybS9maWVsZC9OdW1iZXIubWpzJztcbmltcG9ydCBQYW5lbCAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvY29udGFpbmVyL1BhbmVsLm1qcyc7XG5pbXBvcnQgUmFuZ2VGaWVsZCAgZnJvbSAnLi4vLi4vLi4vc3JjL2Zvcm0vZmllbGQvUmFuZ2UubWpzJztcbmltcG9ydCBWaWV3cG9ydCAgICBmcm9tICcuLi8uLi8uLi9zcmMvY29udGFpbmVyL1ZpZXdwb3J0Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFRlc3RBcHAuR2FsbGVyeU1haW5Db250YWluZXJcbiAqIEBleHRlbmRzIE5lby50YWIuQ29udGFpbmVyXG4gKi9cbmNsYXNzIEdhbGxlcnlNYWluQ29udGFpbmVyIGV4dGVuZHMgVmlld3BvcnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnVGVzdEFwcC5NYWluQ29udGFpbmVyJyxcbiAgICAgICAgbnR5cGU6ICdtYWluLWNvbnRhaW5lcicsXG5cbiAgICAgICAgYXV0b01vdW50OiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbXBvbmVudC5HYWxsZXJ5fG51bGx9IGdhbGxlcnk9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZ2FsbGVyeTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBnYWxsZXJ5Q29uZmlnPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGdhbGxlcnlDb25maWc6IG51bGwsXG4gICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgIGZsZXggIDogMSxcbiAgICAgICAgICAgIGxheW91dDogJ2ZpdCcsXG4gICAgICAgICAgICBpdGVtcyA6IFtdXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG50eXBlIDogJ3BhbmVsJyxcbiAgICAgICAgICAgIGxheW91dDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAgICAgc3R5bGUgOiB7YmFja2dyb3VuZENvbG9yOiAnIzJiMmIyYid9LFxuICAgICAgICAgICAgd2lkdGggOiAyNjAsXG5cbiAgICAgICAgICAgIGl0ZW1EZWZhdWx0czoge1xuICAgICAgICAgICAgICAgIG50eXBlICAgICAgICA6ICdyYW5nZWZpZWxkJyxcbiAgICAgICAgICAgICAgICBmbGV4ICAgICAgICAgOiAnMCAxIGF1dG8nLFxuICAgICAgICAgICAgICAgIGxhYmVsV2lkdGggICA6ICcxMTBweCcsXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgICAgIDoge3BhZGRpbmc6ICcxMHB4J30sXG4gICAgICAgICAgICAgICAgdXNlSW5wdXRFdmVudDogdHJ1ZSxcblxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm5hbWUgPT09ICdvcGFjaXR5Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudmFsdWUgLz0gMTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgTmVvLmdldCgnbmVvLWdhbGxlcnktMScpW3RoaXMubmFtZV0gPSBkYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaGVhZGVyczogW3tcbiAgICAgICAgICAgICAgICBkb2NrOiAndG9wJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnR2FsbGVyeSBDb250cm9scydcbiAgICAgICAgICAgIH1dLFxuXG4gICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdUcmFuc2xhdGUgWCcsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiA1MDAwLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICd0cmFuc2xhdGVYJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDAsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTmVvLmdldCgnbmVvLWdhbGxlcnktMScpW3RoaXMubmFtZV0gPSBkYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb3VudGVkOiBmdW5jdGlvbihmaWVsZElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmllbGQgPSBOZW8uZ2V0KGZpZWxkSWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBOZW8uZ2V0KCduZW8tZ2FsbGVyeS0xJykub24oJ2NoYW5nZVRyYW5zbGF0ZVgnLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIHRoaXMubWluVmFsdWUpLCB0aGlzLm1heFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnVHJhbnNsYXRlIFknLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMTUwMCxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IC0xNTAwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3RyYW5zbGF0ZVknLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1RyYW5zbGF0ZSBaJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDU1MCxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IC00NTAwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3RyYW5zbGF0ZVonLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogMCxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBOZW8uZ2V0KCduZW8tZ2FsbGVyeS0xJylbdGhpcy5uYW1lXSA9IGRhdGEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKGZpZWxkSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWVsZCA9IE5lby5nZXQoZmllbGRJZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5lby5nZXQoJ25lby1nYWxsZXJ5LTEnKS5vbignY2hhbmdlVHJhbnNsYXRlWicsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgdGhpcy5taW5WYWx1ZSksIHRoaXMubWF4VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdBbW91bnQgUm93cycsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiAxNSxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IDEsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAnYW1vdW50Um93cycsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiAzXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgOiBOdW1iZXJGaWVsZCxcbiAgICAgICAgICAgICAgICBjbGVhcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ01heCBJdGVtcycsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiA2MDAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAxMDAsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAnbWF4SXRlbXMnLFxuICAgICAgICAgICAgICAgIHN0ZXBTaXplIDogMTAwLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogMzAwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGUgICAgICAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgICAgICA6ICdPcmRlciBieSBSb3cnLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVycyAgIDoge30sXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgICAgOiB7bWFyZ2luOiAnMjBweCd9LFxuICAgICAgICAgICAgICAgIGRvbUxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnYWxsZXJ5ICAgID0gTmVvLmdldCgnbmVvLWdhbGxlcnktMScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeVJvdyA9ICFnYWxsZXJ5Lm9yZGVyQnlSb3c7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dCA9IG9yZGVyQnlSb3cgPT09IHRydWUgPyAnT3JkZXIgQnkgQ29sdW1uJyA6ICdPcmRlciBieSBSb3cnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5Lm9yZGVyQnlSb3cgPSBvcmRlckJ5Um93O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG50eXBlICAgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQgOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ1NvcnQgYnkgTGFzdG5hbWUnLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge30sXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luOiAnMjBweCcsIG1hcmdpbkJvdHRvbTogJzEwcHgnfSxcblxuICAgICAgICAgICAgICAgIGRvbUxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBOZW8uZ2V0KCduZW8tZ2FsbGVyeS0xJykuc3RvcmUuc29ydGVycyA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkgOiAnbGFzdG5hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ0FTQydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6ICdmaXJzdG5hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ0FTQydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG50eXBlICAgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQgOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ1NvcnQgYnkgRmlyc3RuYW1lJyxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHt9LFxuICAgICAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpbjogJzIwcHgnLCBtYXJnaW5Ub3A6IDB9LFxuXG4gICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE5lby5nZXQoJ25lby1nYWxsZXJ5LTEnKS5zdG9yZS5zb3J0ZXJzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6ICdmaXJzdG5hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ0FTQydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6ICdsYXN0bmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnQVNDJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGU6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgdGV4dCA6IFtcbiAgICAgICAgICAgICAgICAgICAgJzxiPk5hdmlnYXRpb24gQ29uY2VwdDwvYj4nLFxuICAgICAgICAgICAgICAgICAgICAnPHA+Q2xpY2sgb24gYW4gaXRlbSB0byBzZWxlY3QgaXQuIEFmdGVyd2FyZHMgeW91IGNhbiB1c2UgdGhlIEFycm93IEtleXMgdG8gd2FsayB0aHJvdWdoIHRoZSBpdGVtcy48L3A+J1xuICAgICAgICAgICAgICAgIF0uam9pbignJyksXG5cbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzIzMjMyJyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgICAgICAgICAgOiAnI2RkZCcsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplICAgICAgIDogJzEzcHgnLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4gICAgICAgICA6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZyAgICAgICAgOiAnMTBweCcsXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2UgICAgIDogJ25vcm1hbCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XVxuICAgICAgICB9XVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmdhbGxlcnkgPSBOZW8uY3JlYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZTogR2FsbGVyeSxcbiAgICAgICAgICAgIGlkICAgIDogJ25lby1nYWxsZXJ5LTEnLFxuICAgICAgICAgICAgLi4ubWUuZ2FsbGVyeUNvbmZpZyB8fCB7fVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5pdGVtc1swXS5pdGVtcy5wdXNoKG1lLmdhbGxlcnkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge05lby5kYXRhLlN0b3JlfVxuICAgICAqL1xuICAgIGdldFN0b3JlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1swXS5pdGVtc1swXS5zdG9yZTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEdhbGxlcnlNYWluQ29udGFpbmVyKTtcblxuZXhwb3J0IHtHYWxsZXJ5TWFpbkNvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgSGVsaXggICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbXBvbmVudC9IZWxpeC5tanMnO1xuaW1wb3J0IE51bWJlckZpZWxkIGZyb20gJy4uLy4uLy4uL3NyYy9mb3JtL2ZpZWxkL051bWJlci5tanMnO1xuaW1wb3J0IFBhbmVsICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9jb250YWluZXIvUGFuZWwubWpzJztcbmltcG9ydCBSYW5nZUZpZWxkICBmcm9tICcuLi8uLi8uLi9zcmMvZm9ybS9maWVsZC9SYW5nZS5tanMnO1xuaW1wb3J0IFZpZXdwb3J0ICAgIGZyb20gJy4uLy4uLy4uL3NyYy9jb250YWluZXIvVmlld3BvcnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgVGVzdEFwcC5IZWxpeE1haW5Db250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuVmlld3BvcnRcbiAqL1xuY2xhc3MgSGVsaXhNYWluQ29udGFpbmVyIGV4dGVuZHMgVmlld3BvcnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnVGVzdEFwcC5IZWxpeE1haW5Db250YWluZXInLFxuICAgICAgICBudHlwZSAgICA6ICdtYWluLWNvbnRhaW5lcicsXG5cbiAgICAgICAgYXV0b01vdW50OiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbXBvbmVudC5IZWxpeHxudWxsfSBoZWxpeD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBoZWxpeDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBoZWxpeENvbmZpZz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBoZWxpeENvbmZpZzogbnVsbCxcbiAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ30sXG5cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgZmxleCAgOiAxLFxuICAgICAgICAgICAgbGF5b3V0OiAnZml0JyxcbiAgICAgICAgICAgIGl0ZW1zIDogW11cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbnR5cGUgOiAncGFuZWwnLFxuICAgICAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICd2Ym94JyxhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgICAgIHN0eWxlIDoge2JhY2tncm91bmRDb2xvcjogJyMyYjJiMmInfSxcbiAgICAgICAgICAgIHdpZHRoIDogMjUwLFxuXG4gICAgICAgICAgICBjb250YWluZXJDb25maWc6IHtcbiAgICAgICAgICAgICAgICBmbGV4IDogbnVsbCxcbiAgICAgICAgICAgICAgICBzdHlsZToge292ZXJmbG93WTogJ3Njcm9sbCd9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgICAgICBudHlwZSAgICAgICAgOiAncmFuZ2VmaWVsZCcsXG4gICAgICAgICAgICAgICAgZmxleCAgICAgICAgIDogJzAgMSBhdXRvJyxcbiAgICAgICAgICAgICAgICBsYWJlbFdpZHRoICAgOiAnMTAwcHgnLFxuICAgICAgICAgICAgICAgIHN0eWxlICAgICAgICA6IHtwYWRkaW5nOiAnMTBweCd9LFxuICAgICAgICAgICAgICAgIHVzZUlucHV0RXZlbnQ6IHRydWUsXG5cbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoWydkZWx0YVknLCAnbWF4T3BhY2l0eScsICdtaW5PcGFjaXR5J10uaW5jbHVkZXModGhpcy5uYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudmFsdWUgLz0gMTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgTmVvLmdldCgnbmVvLWhlbGl4LTEnKVt0aGlzLm5hbWVdID0gZGF0YS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGhlYWRlcnM6IFt7XG4gICAgICAgICAgICAgICAgZG9jazogJ3RvcCcsXG4gICAgICAgICAgICAgICAgdGV4dDogJ0hlbGl4IENvbnRyb2xzJ1xuICAgICAgICAgICAgfV0sXG5cbiAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1RyYW5zbGF0ZSBYJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDIwMDAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAtMjAwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICd0cmFuc2xhdGVYJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDQwMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1RyYW5zbGF0ZSBZJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDI1MDAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAtMjUwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICd0cmFuc2xhdGVZJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IC0zNTBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdUcmFuc2xhdGUgWicsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiA0NTAwLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogLTQ1MDAsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAndHJhbnNsYXRlWicsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiAtMTUwMCxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBOZW8uZ2V0KCduZW8taGVsaXgtMScpW3RoaXMubmFtZV0gPSBkYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb3VudGVkOiBmdW5jdGlvbihmaWVsZElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmllbGQgPSBOZW8uZ2V0KGZpZWxkSWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBOZW8uZ2V0KCduZW8taGVsaXgtMScpLm9uKCdjaGFuZ2VUcmFuc2xhdGVaJywgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCB0aGlzLm1pblZhbHVlKSwgdGhpcy5tYXhWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dCA6ICdEZWx0YSBZJyxcbiAgICAgICAgICAgICAgICBsYWJlbEFsaWduOiAndG9wJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSAgOiA2MDAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgIDogLTYwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICAgOiAnZGVsdGFZJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICAgOiA3MFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1JvdGF0ZScsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAtNzIwLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogNzIwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3JvdGF0aW9uQW5nbGUnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogMCxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBOZW8uZ2V0KCduZW8taGVsaXgtMScpW3RoaXMubmFtZV0gPSBkYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb3VudGVkOiBmdW5jdGlvbihmaWVsZElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmllbGQgPSBOZW8uZ2V0KGZpZWxkSWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBOZW8uZ2V0KCduZW8taGVsaXgtMScpLm9uKCdjaGFuZ2VSb3RhdGlvbicsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgdGhpcy5taW5WYWx1ZSksIHRoaXMubWF4VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdSYWRpdXMnLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMzUwMCxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IDkwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICdyYWRpdXMnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogMTUwMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1BlcnNwZWN0aXZlJyxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IDUwLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMzAwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICdwZXJzcGVjdGl2ZScsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiA4MDBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdJdGVtIEFuZ2xlJyxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IDEsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiAzNixcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICdpdGVtQW5nbGUnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogOFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ01heCBPcGFjaXR5JyxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICdtYXhPcGFjaXR5JyxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IDAsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiAxMDAsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiA4MCAvLyB0b2RvIFszMCwgODBdXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnTWluIE9wYWNpdHknLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ21pbk9wYWNpdHknLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogMCxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDEwMCxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDMwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgOiBOdW1iZXJGaWVsZCxcbiAgICAgICAgICAgICAgICBjbGVhcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ01heCBJdGVtcycsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiA2MDAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAxMDAsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAnbWF4SXRlbXMnLFxuICAgICAgICAgICAgICAgIHN0ZXBTaXplIDogMTAwLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogMzAwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGUgICAgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgdGV4dCAgICAgIDogJ0ZsaXAgSXRlbXMnLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge30sXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luOiAnMjBweCd9LFxuICAgICAgICAgICAgICAgIGRvbUxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWxpeCA9IE5lby5nZXQoJ25lby1oZWxpeC0xJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxpeC5mbGlwcGVkID0gIWhlbGl4LmZsaXBwZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGUgICAgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQgIDogdHJ1ZSwgLy8gY29tcG9uZW50LkhlbGl4OiBidWZmZXJlZCBzb3J0aW5nICMxMDVcbiAgICAgICAgICAgICAgICB0ZXh0ICAgICAgOiAnU29ydCBieSBMYXN0bmFtZScsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7fSxcbiAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgTmVvLmdldCgnbmVvLWhlbGl4LTEnKS5zdG9yZS5zb3J0ZXJzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6ICdsYXN0bmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnQVNDJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5IDogJ2ZpcnN0bmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnQVNDJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbiAgICAgIDogJzIwcHgnLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxMHB4J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZSAgICAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZCAgOiB0cnVlLCAvLyBjb21wb25lbnQuSGVsaXg6IGJ1ZmZlcmVkIHNvcnRpbmcgIzEwNVxuICAgICAgICAgICAgICAgIHRleHQgICAgICA6ICdTb3J0IGJ5IEZpcnN0bmFtZScsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7fSxcbiAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgTmVvLmdldCgnbmVvLWhlbGl4LTEnKS5zdG9yZS5zb3J0ZXJzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6ICdmaXJzdG5hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ0FTQydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6ICdsYXN0bmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnQVNDJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbiAgIDogJzIwcHgnLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGUgICAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICBpY29uQ2xzICA6ICdmYSBmYS1zcXVhcmUnLFxuICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0ZvbGxvdyBTZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge30sXG4gICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVsaXggPSBOZW8uZ2V0KCduZW8taGVsaXgtMScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWUuaWNvbkNscyA9PT0gJ2ZhIGZhLXNxdWFyZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxpeC5mb2xsb3dTZWxlY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLmljb25DbHMgPSAnZmEgZmEtY2hlY2stc3F1YXJlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVsaXguZm9sbG93U2VsZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUuaWNvbkNscyA9ICdmYSBmYS1zcXVhcmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4gICAgICA6ICcyMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTBweCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGU6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgdGV4dCA6IFtcbiAgICAgICAgICAgICAgICAgICAgJzxiPk5hdmlnYXRpb24gQ29uY2VwdDwvYj4nLFxuICAgICAgICAgICAgICAgICAgICAnPHA+Q2xpY2sgb24gYW4gaXRlbSB0byBzZWxlY3QgaXQuIEFmdGVyd2FyZHMgeW91IGNhbiB1c2UgdGhlIEFycm93IEtleXMgdG8gd2FsayB0aHJvdWdoIHRoZSBpdGVtcy48L3A+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxwPkhpdCB0aGUgU3BhY2UgS2V5IHRvIHJvdGF0ZSB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0gdG8gdGhlIGZyb250LjwvcD4nLFxuICAgICAgICAgICAgICAgICAgICAnPHA+SGl0IHRoZSBFbnRlciBLZXkgdG8gZXhwYW5kIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbS48L3A+J1xuICAgICAgICAgICAgICAgIF0uam9pbignJyksXG5cbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzIzMjMyJyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgICAgICAgICAgOiAnI2RkZCcsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplICAgICAgIDogJzEzcHgnLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4gICAgICAgICA6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZyAgICAgICAgOiAnMTBweCcsXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2UgICAgIDogJ25vcm1hbCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XVxuICAgICAgICB9XVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmhlbGl4ID0gTmVvLmNyZWF0ZSh7XG4gICAgICAgICAgICBtb2R1bGU6IEhlbGl4LFxuICAgICAgICAgICAgaWQgICAgOiAnbmVvLWhlbGl4LTEnLFxuICAgICAgICAgICAgLi4ubWUuaGVsaXhDb25maWcgfHwge31cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuaXRlbXNbMF0uaXRlbXMucHVzaChtZS5oZWxpeCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7TmVvLmRhdGEuU3RvcmV9XG4gICAgICovXG4gICAgZ2V0U3RvcmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zWzBdLml0ZW1zWzBdLnN0b3JlO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGVsaXhNYWluQ29udGFpbmVyKTtcblxuZXhwb3J0IHtIZWxpeE1haW5Db250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2VDb250YWluZXIgICAgZnJvbSAnLi4vY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBCYXNlRmllbGQgICAgICAgIGZyb20gJy4uL2Zvcm0vZmllbGQvQmFzZS5tanMnO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSAnLi4vbWFuYWdlci9Db21wb25lbnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmZvcm0uQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgQmFzZUNvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5mb3JtLkNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmZvcm0uQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2Zvcm0tY29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2Zvcm0tY29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tZm9ybS1jb250YWluZXInXSxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1mb3JtLWNvbnRhaW5lciddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSB2ZG9tPXt0YWc6ICdmb3JtJyxjbjogW119XG4gICAgICAgICAqL1xuICAgICAgICB2ZG9tOiB7XG4gICAgICAgICAgICB0YWc6ICdmb3JtJyxcbiAgICAgICAgICAgIGNuIDogW11cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtOZW8uZm9ybS5maWVsZC5CYXNlW119IGZpZWxkc1xuICAgICAqL1xuICAgIGdldEZpZWxkcygpIHtcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gQ29tcG9uZW50TWFuYWdlci5nZXRDaGlsZHJlbih0aGlzKSxcbiAgICAgICAgICAgIGZpZWxkcyAgID0gW107XG5cbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgQmFzZUZpZWxkKSB7XG4gICAgICAgICAgICAgICAgZmllbGRzLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmaWVsZHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB2YWx1ZXNcbiAgICAgKi9cbiAgICBnZXRWYWx1ZXMoKSB7XG4gICAgICAgIGxldCBmaWVsZHMgPSB0aGlzLmdldEZpZWxkcygpLFxuICAgICAgICAgICAgdmFsdWVzID0ge307XG5cbiAgICAgICAgZmllbGRzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICB2YWx1ZXNbaXRlbS5uYW1lIHx8IGl0ZW0uaWRdID0gaXRlbS52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaW4gY2FzZSBubyBmb3JtIGZpZWxkIGlzVmFsaWQoKSBjYWxsIHJldHVybnMgZmFsc2VcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBsZXQgZmllbGRzID0gdGhpcy5nZXRGaWVsZHMoKSxcbiAgICAgICAgICAgIGkgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgPSBmaWVsZHMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghZmllbGRzW2ldLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBmaWVsZCB2YWx1ZXMgYnkgZmllbGQgbmFtZSBvciBmaWVsZCBpZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXM9e31cbiAgICAgKi9cbiAgICBzZXRWYWx1ZXModmFsdWVzPXt9KSB7XG4gICAgICAgIGxldCBmaWVsZHMgPSB0aGlzLmdldEZpZWxkcygpLFxuICAgICAgICAgICAga2V5cyAgID0gT2JqZWN0LmtleXModmFsdWVzKSxcbiAgICAgICAgICAgIGluZGV4O1xuXG4gICAgICAgIGZpZWxkcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaW5kZXggPSBrZXlzLmluZGV4T2YoaXRlbS5uYW1lKTtcblxuICAgICAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0ga2V5cy5pbmRleE9mKGl0ZW0uaWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUgPSB2YWx1ZXNba2V5c1tpbmRleF1dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENvbnRhaW5lcik7XG5cbmV4cG9ydCB7Q29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBTZWxlY3QgZnJvbSAnLi9TZWxlY3QubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmZvcm0uZmllbGQuQ2hpcFxuICogQGV4dGVuZHMgTmVvLmZvcm0uZmllbGQuU2VsZWN0XG4gKi9cbmNsYXNzIENoaXAgZXh0ZW5kcyBTZWxlY3Qge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZm9ybS5maWVsZC5DaGlwJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uZm9ybS5maWVsZC5DaGlwJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NoaXBmaWVsZCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjaGlwZmllbGQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IGxpc3RDb25maWc9e3VzZUNoZWNrQm94ZXM6IHRydWV9XG4gICAgICAgICAqL1xuICAgICAgICBsaXN0Q29uZmlnOiB7XG4gICAgICAgICAgICB1c2VDaGVja0JveGVzOiB0cnVlXG4gICAgICAgIH1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDaGlwKTtcblxuZXhwb3J0IHtDaGlwIGFzIGRlZmF1bHR9OyIsImltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uZm9ybS5maWVsZC5QYXNzd29yZFxuICogQGV4dGVuZHMgTmVvLmZvcm0uZmllbGQuVGV4dFxuICovXG5jbGFzcyBQYXNzd29yZCBleHRlbmRzIFRleHQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZm9ybS5maWVsZC5QYXNzd29yZCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmZvcm0uZmllbGQuUGFzc3dvcmQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ncGFzc3dvcmRmaWVsZCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdwYXNzd29yZGZpZWxkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVlIGZvciB0aGUgaW5wdXRUeXBlXyB0ZXh0ZmllbGQgY29uZmlnXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gaW5wdXRUeXBlPSdwYXNzd29yZCdcbiAgICAgICAgICovXG4gICAgICAgIGlucHV0VHlwZTogJ3Bhc3N3b3JkJ1xuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFBhc3N3b3JkKTtcblxuZXhwb3J0IHtQYXNzd29yZCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgVGV4dCBmcm9tICcuL1RleHQubWpzJztcblxuLyoqXG4gKlxuICogQGNsYXNzIE5lby5mb3JtLmZpZWxkLlRleHRBcmVhXG4gKiBAZXh0ZW5kcyBOZW8uZm9ybS5maWVsZC5UZXh0XG4gKiBAYWJzdHJhY3RcbiAqL1xuY2xhc3MgVGV4dEFyZWEgZXh0ZW5kcyBUZXh0IHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXMgZm9yIHdyYXBcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IHdyYXBWYWx1ZXM9WydoYXJkJywgJ29mZicsICdzb2Z0JywgbnVsbF1cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICB3cmFwVmFsdWVzOiBbJ2hhcmQnLCAnb2ZmJywgJ3NvZnQnLCBudWxsXVxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmZvcm0uZmllbGQuVGV4dEFyZWEnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5mb3JtLmZpZWxkLlRleHRBcmVhJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3RleHRhcmVhJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3RleHRhcmVhJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tdGV4dGFyZWEnLCAnbmVvLXRleHRmaWVsZCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLXRleHRhcmVhJywgJ25lby10ZXh0ZmllbGQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB2aXNpYmxlIHdpZHRoIG9mIHRoZSB0ZXh0IGNvbnRyb2wsIGluIGF2ZXJhZ2UgY2hhcmFjdGVyIHdpZHRocy5cbiAgICAgICAgICogSWYgaXQgaXMgc3BlY2lmaWVkLCBpdCBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlci5cbiAgICAgICAgICogSWYgaXQgaXMgbm90IHNwZWNpZmllZCwgdGhlIGRlZmF1bHQgdmFsdWUgaXMgMjAuXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxudWxsfSBjb2xzXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBjb2xzXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gaW5wdXRUYWdfPSd0ZXh0YXJlYSdcbiAgICAgICAgICovXG4gICAgICAgIGlucHV0VGFnXzogJ3RleHRhcmVhJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERpc2FibGluZyB0byBzZXQgYSB0eXBlIGZvciB0aGUgdGV4dGFyZWEgdGFnXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBpbnB1dFR5cGU9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBpbnB1dFR5cGU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVc2UgZmFsc2UgdG8gZGlzYWJsZSB0aGUgYnJvd3NlcnMgZGVmYXVsdCByZXNpemluZyBmZWF0dXJlXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJlc2l6YWJsZV89dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVzaXphYmxlXzogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGludGVnZXIgPiAwIG9yIG51bGxcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IHJvd3NfPTNcbiAgICAgICAgICovXG4gICAgICAgIHJvd3NfOiAzLFxuICAgICAgICAvKipcbiAgICAgICAgICogSW5kaWNhdGVzIGhvdyB0aGUgY29udHJvbCB3cmFwcyB0ZXh0LiBQb3NzaWJsZSB2YWx1ZXMgYXJlOiBoYXJkLCBzb2Z0LCBvZmZcbiAgICAgICAgICogSWYgdGhpcyBhdHRyaWJ1dGUgaXMgbm90IHNwZWNpZmllZCwgc29mdCBpcyBpdHMgZGVmYXVsdCB2YWx1ZS5cbiAgICAgICAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L3RleHRhcmVhXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSB3cmFwXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB3cmFwXzogbnVsbFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGNvbHMgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcnxudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldENvbHModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlSW5wdXRFbEtleSgnY29scycsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGlucHV0VGFnIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldElucHV0VGFnKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNoYW5nZUlucHV0RWxLZXkoJ3RhZycsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHJlc2l6YWJsZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFJlc2l6YWJsZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgID0gdGhpcyxcbiAgICAgICAgICAgIHN0eWxlID0gdGhpcy5nZXRJbnB1dEVsKCkuc3R5bGUsXG4gICAgICAgICAgICB2ZG9tICA9IG1lLnZkb207XG5cbiAgICAgICAgc3R5bGUucmVzaXplID0gdmFsdWUgPyBudWxsIDogJ25vbmUnO1xuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHJvd3MgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcnxudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFJvd3ModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlSW5wdXRFbEtleSgncm93cycsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHdyYXAgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcnxudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFdyYXAodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlSW5wdXRFbEtleSgnd3JhcCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIG5ldyB3cmFwIHZhbHVlIG1hdGNoZXMgYSB2YWx1ZSBvZiB0aGUgc3RhdGljIHdyYXBWYWx1ZXMgY29uZmlnXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHJldHVybnMge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0V3JhcCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmVmb3JlU2V0RW51bVZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgJ3dyYXAnLCAnd3JhcFZhbHVlcycpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVGV4dEFyZWEpO1xuXG5leHBvcnQge1RleHRBcmVhIGFzIGRlZmF1bHR9OyJdLCJzb3VyY2VSb290IjoiIn0=