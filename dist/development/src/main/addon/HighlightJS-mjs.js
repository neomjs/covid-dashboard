(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src/main/addon/HighlightJS-mjs"],{

/***/ "./node_modules/neo.mjs/src/main/addon/HighlightJS.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/addon/HighlightJS.mjs ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DomAccess.mjs */ "./node_modules/neo.mjs/src/main/DomAccess.mjs");
/* harmony import */ var _Stylesheet_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stylesheet.mjs */ "./node_modules/neo.mjs/src/main/addon/Stylesheet.mjs");




/**
 * Required for the docs app which uses highlight.js for the source views
 * @class Neo.main.addon.HighlightJS
 * @extends Neo.core.Base
 * @singleton
 */
class HighlightJS extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {
        return {
            /**
             * @member {String} className='Neo.main.addon.HighlightJS'
             * @protected
             */
            className: 'Neo.main.addon.HighlightJS',
            /**
             * @member {String} highlightJsPath='./resources/highlight/highlight.pack.js'
             * @protected
             */
            highlightJsPath: './resources/highlight/highlight.pack.js',
            /**
             * @member {String} highlightJsLineNumbersPath=Neo.config.basePath + 'node_modules/highlightjs-line-numbers.js/dist/highlightjs-line-numbers.min.js'
             * @protected
             */
            highlightJsLineNumbersPath: Neo.config.basePath + 'node_modules/highlightjs-line-numbers.js/dist/highlightjs-line-numbers.min.js',
            /**
             * Remote method access for other workers
             * @member {Object} remote={app: [//...]}
             * @protected
             */
            remote: {
                app: [
                    'scrollIntoView',
                    'syntaxHighlight',
                    'syntaxHighlightInit',
                    'syntaxHighlightLine'
                ]
            },
            /**
             * @member {Boolean} singleton=true
             * @protected
             */
            singleton: true,
            /**
             * @member {String} themePath='./resources/highlightjs-custom-github-theme.css'
             * @protected
             */
            themePath: './resources/highlightjs-custom-github-theme.css'
        }
    }

    /**
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        _DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].loadScript(me.highlightJsPath).then(() => {
            _DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].addScript({src: me.highlightJsLineNumbersPath});
        });

        _Stylesheet_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].createStyleSheet(null, 'hljs-theme', me.themePath);
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.text
     * @param {String} data.vnodeId
     * @protected
     */
    scrollIntoView(data) {
        let parentEl = _DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getElement(data.vnodeId),
            el       = parentEl.querySelector('[data-list-header="' + data.text + '"]');

        if (el) {
            el.previousSibling.scrollIntoView({
                behavior: 'smooth',
                block   : 'start',
                inline  : 'nearest'
            });
        }
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.vnodeId
     */
    syntaxHighlight(data) {
        if (hljs) {
            let node = document.getElementById(data.vnodeId);

            hljs.highlightBlock(node);
            hljs.lineNumbersBlock(node);
        } else {
            console.error('highlight.js is not included inside the main thread.');
        }
    }

    /**
     *
     * @param {Object} data
     */
    syntaxHighlightInit(data) {
        if (hljs) {
            let blocks = document.querySelectorAll('pre code:not(.hljs)');
            Array.prototype.forEach.call(blocks, hljs.highlightBlock);
        } else {
            console.error('highlight.js is not included inside the main thread.');
        }
    }

    /**
     *
     * @param {Object} data
     * @param {Number} data.addLine
     * @param {String} data.vnodeId
     * @param {Number} data.removeLine
     */
    syntaxHighlightLine(data) {
        let parentEl = document.getElementById(data.vnodeId),
            cls      = 'neo-highlighted-line',
            el;

        if (Neo.isNumber(data.addLine)) {
            el = parentEl.querySelector('[data-line-number="' + data.addLine + '"]');

            if (el) {
                el.parentNode.classList.add(cls);

                el.parentNode.scrollIntoView({
                    behavior: 'smooth',
                    block   : 'start',
                    inline  : 'nearest'
                });
            }
        }

        if (Neo.isNumber(data.removeLine)) {
            el = parentEl.querySelector('[data-line-number="' + data.removeLine + '"]');

            if (el) {
                el.parentNode.classList.remove(cls);
            }
        }
    }
}

Neo.applyClassConfig(HighlightJS);

let instance = Neo.create(HighlightJS);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/main/addon/Stylesheet.mjs":
/*!************************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/addon/Stylesheet.mjs ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * Logic to work with stylesheets, e.g. apply & switch Neo based themes
 * main.addon.HighlightJS requires this file
 * @class Neo.main.addon.Stylesheet
 * @extends Neo.core.Base
 * @singleton
 */
class Stylesheet extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {
        return {
            /**
             * @member {String} className='Neo.main.addon.Stylesheet'
             * @protected
             */
            className: 'Neo.main.addon.Stylesheet',
            /**
             * Remote method access for other workers
             * @member {Object} remote={app: [//...]}
             * @protected
             */
            remote: {
                app: [
                    'createStyleSheet',
                    'insertCssRules',
                    'swapStyleSheet'
                ]
            },
            /**
             * @member {Boolean} singleton=true
             * @protected
             */
            singleton: true
        }
    }

    /**
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        if (Neo.config.useFontAwesome) {
            this.createStyleSheet(null, null, Neo.config.basePath + 'node_modules/@fortawesome/fontawesome-free/css/all.min.css');
        }

        if (Neo.config.themes.length > 0 && Neo.config.themes[0] !== '') {
            this.insertTheme();
        }
    }

    /**
     * Use either name for a neo theme (e.g. 'neo-theme-dark.css') or pass a href
     * @param {String} [name]
     * @param {String} [id]
     * @param {String} [href]
     */
    createStyleSheet(name, id, href) {
        if (!name && !href) {
            throw new Error('createStyleSheet: you need to either pass a name or a href');
        }

        const link = document.createElement('link'),
              env  = Neo.config.environment,
              path = env.startsWith('dist/') ? env : ('dist/' + env),
              url  = href ? href : Neo.config.cssPath
                  ? Neo.config.cssPath + name
                  : Neo.config.basePath + path + '/' + name;

        Object.assign(link, {
            href: url,
            rel : 'stylesheet',
            type: 'text/css'
        });

        if (id) {
            link.id = id;
        }

        document.head.appendChild(link);
    }

    /**
     *
     * @param {String} token
     * @returns {Boolean}
     */
    hasStyleSheet(token) {
        let i   = 0,
            len = document.styleSheets.length,
            sheet;

        for (; i < len; i++) {
            sheet = document.styleSheets[i];
            if (sheet.href && sheet.href.includes(token)) {
                return true;
            }
        }

        return false;
    }

    /**
     *
     * @param {Object} data
     * @protected
     */
    insertCssRules(data) {
        let styleEl = document.getElementById('neoDynamicStyleSheet'),
            i     = 0,
            len   = data.rules.length,
            styleSheet;

        if (!styleEl) {
            styleEl = document.createElement('style');

            styleEl.id = 'neoDynamicStyleSheet';
            document.head.appendChild(styleEl);
        }

        styleSheet = styleEl.sheet;

        for (; i < len; i++) {
            styleSheet.insertRule(data.rules[i], styleSheet.cssRules.length);
        }
    }

    /**
     *
     * @protected
     */
    insertTheme() {
        let me     = this,
            themes = Neo.config.themes;

        if (!Array.isArray(themes)) {
            themes = [themes];
        }

        if (themes[0]) {
            document.body.classList.add(themes[0]);
        }

        if (Neo.config.useCssVars) {
            me.removeStyleSheets({
                included: ['neo-theme-', '-no-css-vars.css']
            });

            if (themes.length > 0 && !me.hasStyleSheet('neo-structure.css')) {
                me.createStyleSheet('neo-structure.css');
            }

            themes.forEach(theme => {
                if (!me.hasStyleSheet(theme + '.css')) {
                    me.createStyleSheet(theme + '.css');
                }
            });
        } else {
            me.removeStyleSheets({
                included: ['neo-structure.css']
            });

            me.removeStyleSheets({
                included: ['neo-theme-'],
                excluded: ['-no-css-vars.css']
            });

            if (themes.length > 0 && !me.hasStyleSheet(themes[0] + '-no-css-vars.css')) {
                me.createStyleSheet(themes[0] + '-no-css-vars.css', 'neo-theme');
            }
        }
    }

    /**
     *
     * @param {Object} opts
     * @param {String[]} opts.included
     * @param {String[]} opts.excluded
     */
    removeStyleSheets(opts) {
        let i        = 0,
            len      = document.styleSheets.length,
            included = opts.included || [],
            excluded = opts.included || [],
            sheet, removeSheet;

        for (; i < len; i++) {
            sheet = document.styleSheets[i];

            removeSheet = true;

            if (sheet.href) {
                excluded.forEach(name => {
                    if (sheet.href.includes(name)) {
                        removeSheet = false;
                    }
                });

                if (removeSheet) {
                    included.forEach(name => {
                        if (!sheet.href.includes(name)) {
                            removeSheet = false;
                        }
                    });

                    if (removeSheet) {
                        console.log('removeSheet', sheet.href);
                        sheet.ownerNode.parentNode.removeChild(sheet.ownerNode);
                    }
                }
            }
        }
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.href
     * @param {String} data.id
     */
    swapStyleSheet(data) {
        document.getElementById(data.id).setAttribute('href', data.href);
    }
}

Neo.applyClassConfig(Stylesheet);

let instance = Neo.create(Stylesheet);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9IaWdobGlnaHRKUy5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vU3R5bGVzaGVldC5tanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZDO0FBQ0g7QUFDRDs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHNEQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU8sU0FBUztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBOztBQUVBLFFBQVEsc0RBQVM7QUFDakIsWUFBWSxzREFBUyxZQUFZLG1DQUFtQztBQUNwRSxTQUFTOztBQUVULFFBQVEsdURBQVU7QUFDbEI7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzREFBUztBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRWUsdUVBQVEsRTs7Ozs7Ozs7Ozs7O0FDaEt2QjtBQUFBO0FBQXVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixzREFBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU8sU0FBUztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLFNBQVM7QUFDeEIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsU0FBUztBQUN2Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVlLHVFQUFRLEUiLCJmaWxlIjoic3JjL21haW4vYWRkb24vSGlnaGxpZ2h0SlMtbWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2UgICAgICAgZnJvbSAnLi4vLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgRG9tQWNjZXNzICBmcm9tICcuLi9Eb21BY2Nlc3MubWpzJztcbmltcG9ydCBTdHlsZXNoZWV0IGZyb20gJy4vU3R5bGVzaGVldC5tanMnXG5cbi8qKlxuICogUmVxdWlyZWQgZm9yIHRoZSBkb2NzIGFwcCB3aGljaCB1c2VzIGhpZ2hsaWdodC5qcyBmb3IgdGhlIHNvdXJjZSB2aWV3c1xuICogQGNsYXNzIE5lby5tYWluLmFkZG9uLkhpZ2hsaWdodEpTXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIEhpZ2hsaWdodEpTIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYWluLmFkZG9uLkhpZ2hsaWdodEpTJ1xuICAgICAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFpbi5hZGRvbi5IaWdobGlnaHRKUycsXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gaGlnaGxpZ2h0SnNQYXRoPScuL3Jlc291cmNlcy9oaWdobGlnaHQvaGlnaGxpZ2h0LnBhY2suanMnXG4gICAgICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGhpZ2hsaWdodEpzUGF0aDogJy4vcmVzb3VyY2VzL2hpZ2hsaWdodC9oaWdobGlnaHQucGFjay5qcycsXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gaGlnaGxpZ2h0SnNMaW5lTnVtYmVyc1BhdGg9TmVvLmNvbmZpZy5iYXNlUGF0aCArICdub2RlX21vZHVsZXMvaGlnaGxpZ2h0anMtbGluZS1udW1iZXJzLmpzL2Rpc3QvaGlnaGxpZ2h0anMtbGluZS1udW1iZXJzLm1pbi5qcydcbiAgICAgICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaGlnaGxpZ2h0SnNMaW5lTnVtYmVyc1BhdGg6IE5lby5jb25maWcuYmFzZVBhdGggKyAnbm9kZV9tb2R1bGVzL2hpZ2hsaWdodGpzLWxpbmUtbnVtYmVycy5qcy9kaXN0L2hpZ2hsaWdodGpzLWxpbmUtbnVtYmVycy5taW4uanMnLFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZW1vdGUgbWV0aG9kIGFjY2VzcyBmb3Igb3RoZXIgd29ya2Vyc1xuICAgICAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSByZW1vdGU9e2FwcDogWy8vLi4uXX1cbiAgICAgICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVtb3RlOiB7XG4gICAgICAgICAgICAgICAgYXBwOiBbXG4gICAgICAgICAgICAgICAgICAgICdzY3JvbGxJbnRvVmlldycsXG4gICAgICAgICAgICAgICAgICAgICdzeW50YXhIaWdobGlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAnc3ludGF4SGlnaGxpZ2h0SW5pdCcsXG4gICAgICAgICAgICAgICAgICAgICdzeW50YXhIaWdobGlnaHRMaW5lJ1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXG4gICAgICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNpbmdsZXRvbjogdHJ1ZSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB0aGVtZVBhdGg9Jy4vcmVzb3VyY2VzL2hpZ2hsaWdodGpzLWN1c3RvbS1naXRodWItdGhlbWUuY3NzJ1xuICAgICAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGVtZVBhdGg6ICcuL3Jlc291cmNlcy9oaWdobGlnaHRqcy1jdXN0b20tZ2l0aHViLXRoZW1lLmNzcydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIERvbUFjY2Vzcy5sb2FkU2NyaXB0KG1lLmhpZ2hsaWdodEpzUGF0aCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBEb21BY2Nlc3MuYWRkU2NyaXB0KHtzcmM6IG1lLmhpZ2hsaWdodEpzTGluZU51bWJlcnNQYXRofSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFN0eWxlc2hlZXQuY3JlYXRlU3R5bGVTaGVldChudWxsLCAnaGxqcy10aGVtZScsIG1lLnRoZW1lUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLnRleHRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS52bm9kZUlkXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHNjcm9sbEludG9WaWV3KGRhdGEpIHtcbiAgICAgICAgbGV0IHBhcmVudEVsID0gRG9tQWNjZXNzLmdldEVsZW1lbnQoZGF0YS52bm9kZUlkKSxcbiAgICAgICAgICAgIGVsICAgICAgID0gcGFyZW50RWwucXVlcnlTZWxlY3RvcignW2RhdGEtbGlzdC1oZWFkZXI9XCInICsgZGF0YS50ZXh0ICsgJ1wiXScpO1xuXG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgZWwucHJldmlvdXNTaWJsaW5nLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgICAgICAgICAgYmxvY2sgICA6ICdzdGFydCcsXG4gICAgICAgICAgICAgICAgaW5saW5lICA6ICduZWFyZXN0J1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEudm5vZGVJZFxuICAgICAqL1xuICAgIHN5bnRheEhpZ2hsaWdodChkYXRhKSB7XG4gICAgICAgIGlmIChobGpzKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEudm5vZGVJZCk7XG5cbiAgICAgICAgICAgIGhsanMuaGlnaGxpZ2h0QmxvY2sobm9kZSk7XG4gICAgICAgICAgICBobGpzLmxpbmVOdW1iZXJzQmxvY2sobm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdoaWdobGlnaHQuanMgaXMgbm90IGluY2x1ZGVkIGluc2lkZSB0aGUgbWFpbiB0aHJlYWQuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgc3ludGF4SGlnaGxpZ2h0SW5pdChkYXRhKSB7XG4gICAgICAgIGlmIChobGpzKSB7XG4gICAgICAgICAgICBsZXQgYmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgncHJlIGNvZGU6bm90KC5obGpzKScpO1xuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChibG9ja3MsIGhsanMuaGlnaGxpZ2h0QmxvY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignaGlnaGxpZ2h0LmpzIGlzIG5vdCBpbmNsdWRlZCBpbnNpZGUgdGhlIG1haW4gdGhyZWFkLicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLmFkZExpbmVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS52bm9kZUlkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEucmVtb3ZlTGluZVxuICAgICAqL1xuICAgIHN5bnRheEhpZ2hsaWdodExpbmUoZGF0YSkge1xuICAgICAgICBsZXQgcGFyZW50RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhLnZub2RlSWQpLFxuICAgICAgICAgICAgY2xzICAgICAgPSAnbmVvLWhpZ2hsaWdodGVkLWxpbmUnLFxuICAgICAgICAgICAgZWw7XG5cbiAgICAgICAgaWYgKE5lby5pc051bWJlcihkYXRhLmFkZExpbmUpKSB7XG4gICAgICAgICAgICBlbCA9IHBhcmVudEVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWxpbmUtbnVtYmVyPVwiJyArIGRhdGEuYWRkTGluZSArICdcIl0nKTtcblxuICAgICAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICAgICAgZWwucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKGNscyk7XG5cbiAgICAgICAgICAgICAgICBlbC5wYXJlbnROb2RlLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICAgICAgICAgICAgICBibG9jayAgIDogJ3N0YXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgaW5saW5lICA6ICduZWFyZXN0J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE5lby5pc051bWJlcihkYXRhLnJlbW92ZUxpbmUpKSB7XG4gICAgICAgICAgICBlbCA9IHBhcmVudEVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWxpbmUtbnVtYmVyPVwiJyArIGRhdGEucmVtb3ZlTGluZSArICdcIl0nKTtcblxuICAgICAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICAgICAgZWwucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEhpZ2hsaWdodEpTKTtcblxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShIaWdobGlnaHRKUyk7XG5cbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuLi8uLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBMb2dpYyB0byB3b3JrIHdpdGggc3R5bGVzaGVldHMsIGUuZy4gYXBwbHkgJiBzd2l0Y2ggTmVvIGJhc2VkIHRoZW1lc1xuICogbWFpbi5hZGRvbi5IaWdobGlnaHRKUyByZXF1aXJlcyB0aGlzIGZpbGVcbiAqIEBjbGFzcyBOZW8ubWFpbi5hZGRvbi5TdHlsZXNoZWV0XG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIFN0eWxlc2hlZXQgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1haW4uYWRkb24uU3R5bGVzaGVldCdcbiAgICAgICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1haW4uYWRkb24uU3R5bGVzaGVldCcsXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJlbW90ZSBtZXRob2QgYWNjZXNzIGZvciBvdGhlciB3b3JrZXJzXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHJlbW90ZT17YXBwOiBbLy8uLi5dfVxuICAgICAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZW1vdGU6IHtcbiAgICAgICAgICAgICAgICBhcHA6IFtcbiAgICAgICAgICAgICAgICAgICAgJ2NyZWF0ZVN0eWxlU2hlZXQnLFxuICAgICAgICAgICAgICAgICAgICAnaW5zZXJ0Q3NzUnVsZXMnLFxuICAgICAgICAgICAgICAgICAgICAnc3dhcFN0eWxlU2hlZXQnXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcbiAgICAgICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2luZ2xldG9uOiB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgaWYgKE5lby5jb25maWcudXNlRm9udEF3ZXNvbWUpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU3R5bGVTaGVldChudWxsLCBudWxsLCBOZW8uY29uZmlnLmJhc2VQYXRoICsgJ25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3MnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChOZW8uY29uZmlnLnRoZW1lcy5sZW5ndGggPiAwICYmIE5lby5jb25maWcudGhlbWVzWzBdICE9PSAnJykge1xuICAgICAgICAgICAgdGhpcy5pbnNlcnRUaGVtZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlIGVpdGhlciBuYW1lIGZvciBhIG5lbyB0aGVtZSAoZS5nLiAnbmVvLXRoZW1lLWRhcmsuY3NzJykgb3IgcGFzcyBhIGhyZWZcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW25hbWVdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtpZF1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2hyZWZdXG4gICAgICovXG4gICAgY3JlYXRlU3R5bGVTaGVldChuYW1lLCBpZCwgaHJlZikge1xuICAgICAgICBpZiAoIW5hbWUgJiYgIWhyZWYpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY3JlYXRlU3R5bGVTaGVldDogeW91IG5lZWQgdG8gZWl0aGVyIHBhc3MgYSBuYW1lIG9yIGEgaHJlZicpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKSxcbiAgICAgICAgICAgICAgZW52ICA9IE5lby5jb25maWcuZW52aXJvbm1lbnQsXG4gICAgICAgICAgICAgIHBhdGggPSBlbnYuc3RhcnRzV2l0aCgnZGlzdC8nKSA/IGVudiA6ICgnZGlzdC8nICsgZW52KSxcbiAgICAgICAgICAgICAgdXJsICA9IGhyZWYgPyBocmVmIDogTmVvLmNvbmZpZy5jc3NQYXRoXG4gICAgICAgICAgICAgICAgICA/IE5lby5jb25maWcuY3NzUGF0aCArIG5hbWVcbiAgICAgICAgICAgICAgICAgIDogTmVvLmNvbmZpZy5iYXNlUGF0aCArIHBhdGggKyAnLycgKyBuYW1lO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24obGluaywge1xuICAgICAgICAgICAgaHJlZjogdXJsLFxuICAgICAgICAgICAgcmVsIDogJ3N0eWxlc2hlZXQnLFxuICAgICAgICAgICAgdHlwZTogJ3RleHQvY3NzJ1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgIGxpbmsuaWQgPSBpZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdG9rZW5cbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBoYXNTdHlsZVNoZWV0KHRva2VuKSB7XG4gICAgICAgIGxldCBpICAgPSAwLFxuICAgICAgICAgICAgbGVuID0gZG9jdW1lbnQuc3R5bGVTaGVldHMubGVuZ3RoLFxuICAgICAgICAgICAgc2hlZXQ7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgc2hlZXQgPSBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXTtcbiAgICAgICAgICAgIGlmIChzaGVldC5ocmVmICYmIHNoZWV0LmhyZWYuaW5jbHVkZXModG9rZW4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBpbnNlcnRDc3NSdWxlcyhkYXRhKSB7XG4gICAgICAgIGxldCBzdHlsZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25lb0R5bmFtaWNTdHlsZVNoZWV0JyksXG4gICAgICAgICAgICBpICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICA9IGRhdGEucnVsZXMubGVuZ3RoLFxuICAgICAgICAgICAgc3R5bGVTaGVldDtcblxuICAgICAgICBpZiAoIXN0eWxlRWwpIHtcbiAgICAgICAgICAgIHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gICAgICAgICAgICBzdHlsZUVsLmlkID0gJ25lb0R5bmFtaWNTdHlsZVNoZWV0JztcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdHlsZVNoZWV0ID0gc3R5bGVFbC5zaGVldDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBzdHlsZVNoZWV0Lmluc2VydFJ1bGUoZGF0YS5ydWxlc1tpXSwgc3R5bGVTaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgaW5zZXJ0VGhlbWUoKSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdGhlbWVzID0gTmVvLmNvbmZpZy50aGVtZXM7XG5cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHRoZW1lcykpIHtcbiAgICAgICAgICAgIHRoZW1lcyA9IFt0aGVtZXNdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoZW1lc1swXSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHRoZW1lc1swXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTmVvLmNvbmZpZy51c2VDc3NWYXJzKSB7XG4gICAgICAgICAgICBtZS5yZW1vdmVTdHlsZVNoZWV0cyh7XG4gICAgICAgICAgICAgICAgaW5jbHVkZWQ6IFsnbmVvLXRoZW1lLScsICctbm8tY3NzLXZhcnMuY3NzJ11cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodGhlbWVzLmxlbmd0aCA+IDAgJiYgIW1lLmhhc1N0eWxlU2hlZXQoJ25lby1zdHJ1Y3R1cmUuY3NzJykpIHtcbiAgICAgICAgICAgICAgICBtZS5jcmVhdGVTdHlsZVNoZWV0KCduZW8tc3RydWN0dXJlLmNzcycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGVtZXMuZm9yRWFjaCh0aGVtZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFtZS5oYXNTdHlsZVNoZWV0KHRoZW1lICsgJy5jc3MnKSkge1xuICAgICAgICAgICAgICAgICAgICBtZS5jcmVhdGVTdHlsZVNoZWV0KHRoZW1lICsgJy5jc3MnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLnJlbW92ZVN0eWxlU2hlZXRzKHtcbiAgICAgICAgICAgICAgICBpbmNsdWRlZDogWyduZW8tc3RydWN0dXJlLmNzcyddXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWUucmVtb3ZlU3R5bGVTaGVldHMoe1xuICAgICAgICAgICAgICAgIGluY2x1ZGVkOiBbJ25lby10aGVtZS0nXSxcbiAgICAgICAgICAgICAgICBleGNsdWRlZDogWyctbm8tY3NzLXZhcnMuY3NzJ11cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodGhlbWVzLmxlbmd0aCA+IDAgJiYgIW1lLmhhc1N0eWxlU2hlZXQodGhlbWVzWzBdICsgJy1uby1jc3MtdmFycy5jc3MnKSkge1xuICAgICAgICAgICAgICAgIG1lLmNyZWF0ZVN0eWxlU2hlZXQodGhlbWVzWzBdICsgJy1uby1jc3MtdmFycy5jc3MnLCAnbmVvLXRoZW1lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXX0gb3B0cy5pbmNsdWRlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nW119IG9wdHMuZXhjbHVkZWRcbiAgICAgKi9cbiAgICByZW1vdmVTdHlsZVNoZWV0cyhvcHRzKSB7XG4gICAgICAgIGxldCBpICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICA9IGRvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aCxcbiAgICAgICAgICAgIGluY2x1ZGVkID0gb3B0cy5pbmNsdWRlZCB8fCBbXSxcbiAgICAgICAgICAgIGV4Y2x1ZGVkID0gb3B0cy5pbmNsdWRlZCB8fCBbXSxcbiAgICAgICAgICAgIHNoZWV0LCByZW1vdmVTaGVldDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBzaGVldCA9IGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldO1xuXG4gICAgICAgICAgICByZW1vdmVTaGVldCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmIChzaGVldC5ocmVmKSB7XG4gICAgICAgICAgICAgICAgZXhjbHVkZWQuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoZWV0LmhyZWYuaW5jbHVkZXMobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVNoZWV0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChyZW1vdmVTaGVldCkge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlZC5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzaGVldC5ocmVmLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU2hlZXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbW92ZVNoZWV0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZlU2hlZXQnLCBzaGVldC5ocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoZWV0Lm93bmVyTm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNoZWV0Lm93bmVyTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuaHJlZlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmlkXG4gICAgICovXG4gICAgc3dhcFN0eWxlU2hlZXQoZGF0YSkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhLmlkKS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBkYXRhLmhyZWYpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoU3R5bGVzaGVldCk7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoU3R5bGVzaGVldCk7XG5cbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiXSwic291cmNlUm9vdCI6IiJ9