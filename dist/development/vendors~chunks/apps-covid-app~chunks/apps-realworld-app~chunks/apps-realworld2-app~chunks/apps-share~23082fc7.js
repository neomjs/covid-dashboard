self["webpackChunk"](["vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~23082fc7"],{

/***/ "./node_modules/neo.mjs/src/controller/Component.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/neo.mjs/src/controller/Component.mjs ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/controller/Base.mjs");
/* harmony import */ var _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manager/Component.mjs */ "./node_modules/neo.mjs/src/manager/Component.mjs");
/* harmony import */ var _manager_DomEvent_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manager/DomEvent.mjs */ "./node_modules/neo.mjs/src/manager/DomEvent.mjs");
/* harmony import */ var _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Logger.mjs */ "./node_modules/neo.mjs/src/core/Logger.mjs");
/* harmony import */ var _util_Function_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Function.mjs */ "./node_modules/neo.mjs/src/util/Function.mjs");






/**
 * @class Neo.controller.Component
 * @extends Neo.controller.Base
 */
class Component extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.controller.Component'
         * @protected
         */
        className: 'Neo.controller.Component',
        /**
         * @member {String} ntype='view-controller'
         * @protected
         */
        ntype: 'component-controller',
        /**
         * @member {Object} references=null
         * @protected
         */
        references: null,
        /**
         * @member {Object} view_=null
         * @protected
         */
        view_: null
    }}

    constructor(config) {
        super(config);

        let me = this;

        me.references = {};

        _util_Function_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].createSequence(me.view, 'onConstructed', me.onViewConstructed, me);
    }

    /**
     * Triggered when accessing the view config
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    beforeGetView(value, oldValue) {
        return Neo.get(value);
    }

    /**
     * Triggered before the view config gets changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    beforeSetView(value, oldValue) {
        return value.id;
    }

    /**
     *
     * @param {String} [ntype]
     * @returns {Neo.controller.Component|null}
     */
    getParent(ntype) {
        let me      = this,
            view    = me.view,
            parents = _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getParents(view),
            i       = 0,
            len     = parents.length,
            controller;

        for (; i < len; i++) {
            controller = parents[i].controller;

            if (controller) {
                if (ntype) {
                    if (ntype === controller.ntype) {
                        return controller;
                    }
                } else {
                    return controller;
                }
            }
        }

        return null;
    }

    /**
     *
     * @param {String} handlerName
     * @returns {Neo.controller.Component|null}
     */
    getParentHandlerScope(handlerName) {
        let me      = this,
            view    = me.view,
            parents = _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getParents(view),
            i       = 0,
            len     = parents.length,
            controller;

        for (; i < len; i++) {
            controller = parents[i].controller;

            if (controller && controller[handlerName]) {
                return controller;
            }
        }

        return null;
    }

    /**
     * todo: cleanup no longer existing references
     * todo: update changed references (e.g. container.remove() then container.add() using the same key)
     * @param {String} name
     * @returns {*}
     */
    getReference(name) {
        let me          = this,
            componentId = me.references[name],
            component;

        if (componentId) {
            component = Neo.getComponent(componentId);
        }

        if (!component) {
            component = me.view.down({reference: name});

            if (component) {
                me.references[name] = component.id;
            }
        }

        return component || null;
    }

    /**
     *
     * @param {Neo.component.Base} view
     */
    onViewConstructed(view) {
        let me = this,
            domListeners, eventHandler, fn, parentController;

        view = view || me.view;

        view.domListeners = Neo.clone(view.domListeners, true, true); // ensure there is no interference on prototype level
        domListeners = view.domListeners;

        if (domListeners) {
            if (!Array.isArray(domListeners)) {
                domListeners = [domListeners];
            }

            domListeners.forEach(domListener => {
                Object.entries(domListener).forEach(([key, value]) => {
                    eventHandler = null;

                    if (key !== 'scope' && key !== 'delegate') {
                        if (Neo.isString(value)) {
                            eventHandler = value;
                        } else if (Neo.isObject(value) && value.hasOwnProperty('fn') && Neo.isString(value.fn)) {
                            eventHandler = value.fn;
                        }

                        if (eventHandler) {
                            if (!me[eventHandler]) {
                                parentController = me.getParentHandlerScope(eventHandler);

                                if (!parentController) {
                                    _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].logError('Unknown domEvent handler for', view, eventHandler);
                                } else {
                                    fn               = parentController[eventHandler].bind(parentController);
                                    domListener[key] = fn;

                                    _manager_DomEvent_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].updateListenerPlaceholder({
                                        componentId       : view.id,
                                        eventHandlerMethod: fn,
                                        eventHandlerName  : eventHandler,
                                        eventName         : key,
                                        scope             : parentController
                                    });
                                }
                            } else {
                                fn               = me[eventHandler].bind(me);
                                domListener[key] = fn;

                                _manager_DomEvent_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].updateListenerPlaceholder({
                                    componentId       : view.id,
                                    eventHandlerMethod: fn,
                                    eventHandlerName  : eventHandler,
                                    eventName         : key,
                                    scope             : me
                                });
                            }
                        }
                    }
                });
            });
        }

        if (view.listeners) {
            Object.entries(view.listeners).forEach(([name, listener]) => {
                if (Array.isArray(listener)) {
                    listener.forEach(key => {
                        eventHandler = null;

                        if (Neo.isObject(key) && key.hasOwnProperty('fn') && Neo.isString(key.fn)) {
                            eventHandler = key.fn;

                            if (!me[eventHandler]) {
                                _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].logError('Unknown event handler for', view, eventHandler);
                            } else {
                                key.fn = me[eventHandler].bind(me);
                            }
                        }
                    });
                }
            });
        }

        if (view.items) {
            view.items.forEach(item => {
                if (!item.controller) {
                    me.onViewConstructed(item);
                }
            });
        }
    }

    /**
     *
     * @param {Object} config
     */
    parseConfig(config) {
        let me           = this,
            view         = config || me.view,
            domListeners = view.domListeners,
            eventHandler;

        if (domListeners) {
            if (!Array.isArray(domListeners)) {
                domListeners = [domListeners];
            }

            domListeners.forEach(domListener => {
                Object.entries(domListener).forEach(([key, value]) => {
                    eventHandler = null;

                    if (key !== 'scope' && key !== 'delegate') {
                        if (Neo.isString(value)) {
                            eventHandler = value;
                        } else if (Neo.isObject(value) && value.hasOwnProperty('fn') && Neo.isString(value.fn)) {
                            eventHandler = value.fn;
                        }

                        if (eventHandler) {
                            if (!me[eventHandler]) {
                                _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].logError('Unknown domEvent handler for', view, eventHandler);
                            } else {console.log('#', key, me.id);
                                console.log('parseConfig', eventHandler);
                                domListener[key] = me[eventHandler].bind(me);
                            }
                        }
                    }
                });
            });
        }

        if (view.listeners) {
            Object.entries(view.listeners).forEach(([key, value]) => {
                eventHandler = null;

                if (key !== 'scope' && key !== 'delegate') {
                    if (Neo.isString(value)) {
                        eventHandler = value;
                    } else if (Neo.isObject(value) && value.hasOwnProperty('fn') && Neo.isString(value.fn)) {
                        eventHandler = value.fn;
                    }

                    if (eventHandler) {
                        if (!me[eventHandler]) {
                            _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].logError('Unknown event handler for', view, eventHandler);
                        } else {
                            view.listeners[key] = me[eventHandler].bind(me);
                        }
                    }
                }
            });
        }

        if (view.headers) {
            view.headers.forEach(header => {
                if (!header.controller) {
                    me.parseConfig(header);
                }
            });
        }

        if (view.items) {
            view.items.forEach(item => {
                if (!item.controller) {
                    me.parseConfig(item);
                }
            });
        }
    }
}

Neo.applyClassConfig(Component);



/***/ }),

/***/ "./node_modules/neo.mjs/src/util/Function.mjs":
/*!****************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/Function.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.util.Function
 * @extends Neo.core.Base
 */
class NeoFunction extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.Function'
         * @protected
         */
        className: 'Neo.util.Function'
    }}

    /**
     * Append args instead of prepending them
     * @param {Object} scope
     * @returns {Function}
     */
    static bindAppend(scope) {
        const fn   = this,
              args = [].slice.call(arguments).slice(1);

        return function() {
            return fn.apply(scope, [].slice.call(arguments).concat(args));
        }
    }

    /**
     *
     * @param {Neo.core.Base} target
     * @param {String} methodName
     * @param {Function} fn
     * @param {Object} scope
     * @returns {Function}
     */
    static createSequence(target, methodName, fn, scope) {
        let method = target[methodName] || Neo.emptyFn;

        return (target[methodName] = function() {
            method.apply(this, arguments);
            return fn.apply(scope || this, arguments);
        });
    }

    /**
     *
     * @param {Neo.core.Base} target
     * @param {String} methodName
     * @param {Function} fn
     * @param {Object} scope
     * @returns {Function}
     */
    static intercept(target, methodName, fn, scope) {
        let method = target[methodName] || Neo.emptyFn;

        return (target[methodName] = function() {
            let returnValue = fn.apply(scope || this, arguments);
            method.apply(this, arguments);

            return returnValue;
        });
    }
}

Neo.applyClassConfig(NeoFunction);

/* harmony default export */ __webpack_exports__["default"] = (NeoFunction);

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udHJvbGxlci9Db21wb25lbnQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL0Z1bmN0aW9uLm1qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEM7QUFDYztBQUNEO0FBQ0w7QUFDRTs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaURBQUk7QUFDNUIsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxRQUFRLDBEQUFXO0FBQ25COztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4REFBZ0I7QUFDdEM7QUFDQTtBQUNBOztBQUVBLGNBQWMsU0FBUztBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsOERBQWdC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a3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjIzMDgyZmM3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2UgICAgICAgICAgICAgZnJvbSAnLi9CYXNlLm1qcyc7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tICcuLi9tYW5hZ2VyL0NvbXBvbmVudC5tanMnO1xuaW1wb3J0IERvbUV2ZW50TWFuYWdlciAgZnJvbSAnLi4vbWFuYWdlci9Eb21FdmVudC5tanMnO1xuaW1wb3J0IExvZ2dlciAgICAgICAgICAgZnJvbSAnLi4vY29yZS9Mb2dnZXIubWpzJztcbmltcG9ydCBOZW9GdW5jdGlvbiAgICAgIGZyb20gJy4uL3V0aWwvRnVuY3Rpb24ubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29udHJvbGxlci5CYXNlXG4gKi9cbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29udHJvbGxlci5Db21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb250cm9sbGVyLkNvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd2aWV3LWNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY29tcG9uZW50LWNvbnRyb2xsZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSByZWZlcmVuY2VzPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVmZXJlbmNlczogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gdmlld189bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB2aWV3XzogbnVsbFxuICAgIH19XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLnJlZmVyZW5jZXMgPSB7fTtcblxuICAgICAgICBOZW9GdW5jdGlvbi5jcmVhdGVTZXF1ZW5jZShtZS52aWV3LCAnb25Db25zdHJ1Y3RlZCcsIG1lLm9uVmlld0NvbnN0cnVjdGVkLCBtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIHdoZW4gYWNjZXNzaW5nIHRoZSB2aWV3IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZUdldFZpZXcodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBOZW8uZ2V0KHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSB2aWV3IGNvbmZpZyBnZXRzIGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRWaWV3KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUuaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW250eXBlXVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29udHJvbGxlci5Db21wb25lbnR8bnVsbH1cbiAgICAgKi9cbiAgICBnZXRQYXJlbnQobnR5cGUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmlldyAgICA9IG1lLnZpZXcsXG4gICAgICAgICAgICBwYXJlbnRzID0gQ29tcG9uZW50TWFuYWdlci5nZXRQYXJlbnRzKHZpZXcpLFxuICAgICAgICAgICAgaSAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgID0gcGFyZW50cy5sZW5ndGgsXG4gICAgICAgICAgICBjb250cm9sbGVyO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIgPSBwYXJlbnRzW2ldLmNvbnRyb2xsZXI7XG5cbiAgICAgICAgICAgIGlmIChjb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKG50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChudHlwZSA9PT0gY29udHJvbGxlci5udHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRyb2xsZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udHJvbGxlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBoYW5kbGVyTmFtZVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29udHJvbGxlci5Db21wb25lbnR8bnVsbH1cbiAgICAgKi9cbiAgICBnZXRQYXJlbnRIYW5kbGVyU2NvcGUoaGFuZGxlck5hbWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmlldyAgICA9IG1lLnZpZXcsXG4gICAgICAgICAgICBwYXJlbnRzID0gQ29tcG9uZW50TWFuYWdlci5nZXRQYXJlbnRzKHZpZXcpLFxuICAgICAgICAgICAgaSAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgID0gcGFyZW50cy5sZW5ndGgsXG4gICAgICAgICAgICBjb250cm9sbGVyO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIgPSBwYXJlbnRzW2ldLmNvbnRyb2xsZXI7XG5cbiAgICAgICAgICAgIGlmIChjb250cm9sbGVyICYmIGNvbnRyb2xsZXJbaGFuZGxlck5hbWVdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRyb2xsZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB0b2RvOiBjbGVhbnVwIG5vIGxvbmdlciBleGlzdGluZyByZWZlcmVuY2VzXG4gICAgICogdG9kbzogdXBkYXRlIGNoYW5nZWQgcmVmZXJlbmNlcyAoZS5nLiBjb250YWluZXIucmVtb3ZlKCkgdGhlbiBjb250YWluZXIuYWRkKCkgdXNpbmcgdGhlIHNhbWUga2V5KVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0UmVmZXJlbmNlKG5hbWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbXBvbmVudElkID0gbWUucmVmZXJlbmNlc1tuYW1lXSxcbiAgICAgICAgICAgIGNvbXBvbmVudDtcblxuICAgICAgICBpZiAoY29tcG9uZW50SWQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IE5lby5nZXRDb21wb25lbnQoY29tcG9uZW50SWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjb21wb25lbnQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IG1lLnZpZXcuZG93bih7cmVmZXJlbmNlOiBuYW1lfSk7XG5cbiAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBtZS5yZWZlcmVuY2VzW25hbWVdID0gY29tcG9uZW50LmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudCB8fCBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IHZpZXdcbiAgICAgKi9cbiAgICBvblZpZXdDb25zdHJ1Y3RlZCh2aWV3KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMsIGV2ZW50SGFuZGxlciwgZm4sIHBhcmVudENvbnRyb2xsZXI7XG5cbiAgICAgICAgdmlldyA9IHZpZXcgfHwgbWUudmlldztcblxuICAgICAgICB2aWV3LmRvbUxpc3RlbmVycyA9IE5lby5jbG9uZSh2aWV3LmRvbUxpc3RlbmVycywgdHJ1ZSwgdHJ1ZSk7IC8vIGVuc3VyZSB0aGVyZSBpcyBubyBpbnRlcmZlcmVuY2Ugb24gcHJvdG90eXBlIGxldmVsXG4gICAgICAgIGRvbUxpc3RlbmVycyA9IHZpZXcuZG9tTGlzdGVuZXJzO1xuXG4gICAgICAgIGlmIChkb21MaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkb21MaXN0ZW5lcnMpKSB7XG4gICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gW2RvbUxpc3RlbmVyc107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRvbUxpc3RlbmVycy5mb3JFYWNoKGRvbUxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhkb21MaXN0ZW5lcikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SGFuZGxlciA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ3Njb3BlJyAmJiBrZXkgIT09ICdkZWxlZ2F0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOZW8uaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKE5lby5pc09iamVjdCh2YWx1ZSkgJiYgdmFsdWUuaGFzT3duUHJvcGVydHkoJ2ZuJykgJiYgTmVvLmlzU3RyaW5nKHZhbHVlLmZuKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50SGFuZGxlciA9IHZhbHVlLmZuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtZVtldmVudEhhbmRsZXJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENvbnRyb2xsZXIgPSBtZS5nZXRQYXJlbnRIYW5kbGVyU2NvcGUoZXZlbnRIYW5kbGVyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcmVudENvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlci5sb2dFcnJvcignVW5rbm93biBkb21FdmVudCBoYW5kbGVyIGZvcicsIHZpZXcsIGV2ZW50SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbiAgICAgICAgICAgICAgID0gcGFyZW50Q29udHJvbGxlcltldmVudEhhbmRsZXJdLmJpbmQocGFyZW50Q29udHJvbGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcltrZXldID0gZm47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvbUV2ZW50TWFuYWdlci51cGRhdGVMaXN0ZW5lclBsYWNlaG9sZGVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRJZCAgICAgICA6IHZpZXcuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyTWV0aG9kOiBmbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudEhhbmRsZXJOYW1lICA6IGV2ZW50SGFuZGxlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE5hbWUgICAgICAgICA6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZSAgICAgICAgICAgICA6IHBhcmVudENvbnRyb2xsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm4gICAgICAgICAgICAgICA9IG1lW2V2ZW50SGFuZGxlcl0uYmluZChtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbUxpc3RlbmVyW2tleV0gPSBmbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb21FdmVudE1hbmFnZXIudXBkYXRlTGlzdGVuZXJQbGFjZWhvbGRlcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRJZCAgICAgICA6IHZpZXcuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudEhhbmRsZXJNZXRob2Q6IGZuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyTmFtZSAgOiBldmVudEhhbmRsZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE5hbWUgICAgICAgICA6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlICAgICAgICAgICAgIDogbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2aWV3Lmxpc3RlbmVycykge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmlldy5saXN0ZW5lcnMpLmZvckVhY2goKFtuYW1lLCBsaXN0ZW5lcl0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShsaXN0ZW5lcikpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdChrZXkpICYmIGtleS5oYXNPd25Qcm9wZXJ0eSgnZm4nKSAmJiBOZW8uaXNTdHJpbmcoa2V5LmZuKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50SGFuZGxlciA9IGtleS5mbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWVbZXZlbnRIYW5kbGVyXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIubG9nRXJyb3IoJ1Vua25vd24gZXZlbnQgaGFuZGxlciBmb3InLCB2aWV3LCBldmVudEhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleS5mbiA9IG1lW2V2ZW50SGFuZGxlcl0uYmluZChtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2aWV3Lml0ZW1zKSB7XG4gICAgICAgICAgICB2aWV3Lml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUub25WaWV3Q29uc3RydWN0ZWQoaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBwYXJzZUNvbmZpZyhjb25maWcpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2aWV3ICAgICAgICAgPSBjb25maWcgfHwgbWUudmlldyxcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IHZpZXcuZG9tTGlzdGVuZXJzLFxuICAgICAgICAgICAgZXZlbnRIYW5kbGVyO1xuXG4gICAgICAgIGlmIChkb21MaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkb21MaXN0ZW5lcnMpKSB7XG4gICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gW2RvbUxpc3RlbmVyc107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRvbUxpc3RlbmVycy5mb3JFYWNoKGRvbUxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhkb21MaXN0ZW5lcikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SGFuZGxlciA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ3Njb3BlJyAmJiBrZXkgIT09ICdkZWxlZ2F0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOZW8uaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKE5lby5pc09iamVjdCh2YWx1ZSkgJiYgdmFsdWUuaGFzT3duUHJvcGVydHkoJ2ZuJykgJiYgTmVvLmlzU3RyaW5nKHZhbHVlLmZuKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50SGFuZGxlciA9IHZhbHVlLmZuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtZVtldmVudEhhbmRsZXJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlci5sb2dFcnJvcignVW5rbm93biBkb21FdmVudCBoYW5kbGVyIGZvcicsIHZpZXcsIGV2ZW50SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtjb25zb2xlLmxvZygnIycsIGtleSwgbWUuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGFyc2VDb25maWcnLCBldmVudEhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcltrZXldID0gbWVbZXZlbnRIYW5kbGVyXS5iaW5kKG1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZpZXcubGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh2aWV3Lmxpc3RlbmVycykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICdzY29wZScgJiYga2V5ICE9PSAnZGVsZWdhdGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChOZW8uaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudEhhbmRsZXIgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChOZW8uaXNPYmplY3QodmFsdWUpICYmIHZhbHVlLmhhc093blByb3BlcnR5KCdmbicpICYmIE5lby5pc1N0cmluZyh2YWx1ZS5mbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50SGFuZGxlciA9IHZhbHVlLmZuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50SGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtZVtldmVudEhhbmRsZXJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmxvZ0Vycm9yKCdVbmtub3duIGV2ZW50IGhhbmRsZXIgZm9yJywgdmlldywgZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlldy5saXN0ZW5lcnNba2V5XSA9IG1lW2V2ZW50SGFuZGxlcl0uYmluZChtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2aWV3LmhlYWRlcnMpIHtcbiAgICAgICAgICAgIHZpZXcuaGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFoZWFkZXIuY29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgICAgICBtZS5wYXJzZUNvbmZpZyhoZWFkZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZpZXcuaXRlbXMpIHtcbiAgICAgICAgICAgIHZpZXcuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0uY29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgICAgICBtZS5wYXJzZUNvbmZpZyhpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ29tcG9uZW50KTtcblxuZXhwb3J0IHtDb21wb25lbnQgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby51dGlsLkZ1bmN0aW9uXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIE5lb0Z1bmN0aW9uIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby51dGlsLkZ1bmN0aW9uJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5GdW5jdGlvbidcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQXBwZW5kIGFyZ3MgaW5zdGVhZCBvZiBwcmVwZW5kaW5nIHRoZW1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc2NvcGVcbiAgICAgKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gICAgICovXG4gICAgc3RhdGljIGJpbmRBcHBlbmQoc2NvcGUpIHtcbiAgICAgICAgY29uc3QgZm4gICA9IHRoaXMsXG4gICAgICAgICAgICAgIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykuc2xpY2UoMSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHNjb3BlLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykuY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSB0YXJnZXRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNjb3BlXG4gICAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVTZXF1ZW5jZSh0YXJnZXQsIG1ldGhvZE5hbWUsIGZuLCBzY29wZSkge1xuICAgICAgICBsZXQgbWV0aG9kID0gdGFyZ2V0W21ldGhvZE5hbWVdIHx8IE5lby5lbXB0eUZuO1xuXG4gICAgICAgIHJldHVybiAodGFyZ2V0W21ldGhvZE5hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBtZXRob2QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShzY29wZSB8fCB0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gdGFyZ2V0XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWVcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZVxuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaW50ZXJjZXB0KHRhcmdldCwgbWV0aG9kTmFtZSwgZm4sIHNjb3BlKSB7XG4gICAgICAgIGxldCBtZXRob2QgPSB0YXJnZXRbbWV0aG9kTmFtZV0gfHwgTmVvLmVtcHR5Rm47XG5cbiAgICAgICAgcmV0dXJuICh0YXJnZXRbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCByZXR1cm5WYWx1ZSA9IGZuLmFwcGx5KHNjb3BlIHx8IHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBtZXRob2QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE5lb0Z1bmN0aW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgTmVvRnVuY3Rpb247Il0sInNvdXJjZVJvb3QiOiIifQ==