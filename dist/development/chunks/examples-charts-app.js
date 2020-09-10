self["webpackChunk"](["chunks/examples-charts-app"],{

/***/ "./node_modules/neo.mjs/examples/charts/MainContainer.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/charts/MainContainer.mjs ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _src_component_wrapper_AmChart_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/component/wrapper/AmChart.mjs */ "./node_modules/neo.mjs/src/component/wrapper/AmChart.mjs");
/* harmony import */ var _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");



/**
 * @class TestApp.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        className: 'TestApp.MainContainer',
        ntype    : 'main-container',

        autoMount: true,
        layout   : 'fit',

        style: {
            padding: '50px'
        },

        items: [{
            module     : _src_component_wrapper_AmChart_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            chartType  : 'PieChart',
            chartConfig: {
                legend: {},

                series: [{
                    type: "PieSeries",

                    dataFields: {
                        value   : "litres",
                        category: "country"
                    }
                }],

                data: [{
                    country: "Lithuania",
                    litres : 501.9
                }, {
                    country: "Czech Republic",
                    litres : 301.9
                }, {
                    country: "Ireland",
                    litres : 201.1
                }, {
                    country: "Germany",
                    litres : 165.8
                }, {
                    country: "Australia",
                    litres : 139.9
                }, {
                    country: "Austria",
                    litres : 128.3
                }, {
                    country: "UK",
                    litres : 99
                }, {
                    country: "Belgium",
                    litres : 60
                }, {
                    country: "The Netherlands",
                    litres : 50
                }]
            }
        }]
    }}
}

Neo.applyClassConfig(MainContainer);




/***/ }),

/***/ "./node_modules/neo.mjs/examples/charts/app.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/examples/charts/app.mjs ***!
  \******************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainContainer.mjs */ "./node_modules/neo.mjs/examples/charts/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'examples/charts/',
    mainView: _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'TestApp'
});



/***/ }),

/***/ "./node_modules/neo.mjs/src/component/wrapper/AmChart.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/neo.mjs/src/component/wrapper/AmChart.mjs ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AmChart; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Logger.mjs */ "./node_modules/neo.mjs/src/core/Logger.mjs");



/**
 * Convenience class to render an amChart
 * Requires setting Neo.config.useAmCharts to true (or manually include the lib)
 * @class Neo.component.wrapper.AmChart
 * @extends Neo.component.Base
 */
class AmChart extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.component.wrapper.AmChart'
         * @protected
         */
        className: 'Neo.component.wrapper.AmChart',
        /**
         * @member {String} ntype='am-chart'
         * @protected
         */
        ntype: 'am-chart',
        /**
         * See: https://www.amcharts.com/docs/v4/
         * @member {Object} chartConfig=null
         */
        chartConfig: null,
        /**
         * @member {String} chartType='XYChart'
         */
        chartType: 'XYChart',
        /**
         * It is not possible to define adapters via json, so we pass a flag to main instead
         * @member {Boolean} combineSeriesTooltip=false
         */
        combineSeriesTooltip: false,
        /**
         * Stores the chart data
         * @member {Array|null} data_=null
         */
        data_: null,
        /**
         * Charts & maps can have different targets to apply the data to. E.g.:
         * myChart.data = data; // => ''
         * myChart.series.values[0].data = data; // => 'series.values.0'
         * Use a Neo.ns() conform syntax with dots between props
         * @member {String} dataPath=''
         */
        dataPath: '',
        /**
         * am4charts, am4maps
         * @member {String} package='am4charts'
         */
        package: 'am4charts',
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            style: {position: 'relative', height: '100%', width: '100%'},
            cn: [{
                style: {position: 'absolute', height: '100%', width: '100%'},
                cn: [{
                    style: {height: '100%'}
                }]
            }]
        }
    }}

    /**
     *
     */
    getVdomRoot() {
        return this.vdom.cn[0].cn[0];
    }

    /**
     *
     */
    getVnodeRoot() {
        return this.vnode.childNodes[0].childNodes[0];
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        const me = this;

        if (!me.chartConfig) {
            _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].logError('wrapper.AmChart defined without a chartConfig', me.id);
        }

        me.parseChartConfig(me.chartConfig);
    }

    /**
     * Triggered after the data config got changed
     * @param {Array|null} value
     * @param {Array|null} oldValue
     * @protected
     */
    afterSetData(value, oldValue) {
        let me = this;

        if (value) {
            Neo.main.addon.AmCharts.updateData({
                appName : me.appName,
                data    : value,
                dataPath: me.dataPath,
                id      : me.id
            });
        }
    }

    /**
     * Triggered after the mounted config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetMounted(value, oldValue) {
        let me = this;

        if (value === false && oldValue !== undefined) {
            Neo.main.addon.AmCharts.destroy({
                appName: me.appName,
                id     : me.id
            });
        }

        super.afterSetMounted(value, oldValue);

        if (value) {
            const opts = {
                appName             : me.appName,
                combineSeriesTooltip: me.combineSeriesTooltip,
                config              : me.chartConfig,
                data                : me.data,
                id                  : me.id,
                package             : me.package,
                type                : me.chartType
            };

            if (me.data) {
                opts.data     = me.data;
                opts.dataPath = me.dataPath;
            }

            setTimeout(() => {
                Neo.main.addon.AmCharts.create(opts).then(me.onChartMounted);
            }, 50);
        }
    }

    /**
     * Override this method to trigger logic after the chart got mounted into the dom
     */
    onChartMounted() {

    }

    /**
     *
     * @param {Array|Object} config
     */
    parseChartConfig(config) {
        const me = this;

        if (Neo.isArray(config)) {
            config.forEach(item => {
                me.parseChartConfig(item);
            });
        } else {
            Object.entries(config).forEach(([key, value]) => {
                if (Neo.isArray(value) || Neo.isObject(value)) {
                    me.parseChartConfig(value);
                } else if (Neo.isString(value) && value.startsWith('@config:')) {
                    value = value.substr(8);

                    if (!me[value]) {
                        _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].logError('The used @config does not exist:', value, me);
                    } else {
                        config[key] = me[value];
                    }
                }
            });
        }
    }
}

Neo.applyClassConfig(AmChart);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9jaGFydHMvTWFpbkNvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvY2hhcnRzL2FwcC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC93cmFwcGVyL0FtQ2hhcnQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250YWluZXIvVmlld3BvcnQubWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RTtBQUNQOztBQUVoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtRUFBUTtBQUNwQyx3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EseUJBQXlCLDBFQUFnQjtBQUN6QztBQUNBO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRWtDOzs7Ozs7Ozs7Ozs7O0FDckVsQztBQUFBO0FBQUE7QUFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQSxjQUFjLDBEQUFhO0FBQzNCO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNORDtBQUFBO0FBQUE7QUFBQTtBQUFvQztBQUNVOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaURBQVM7QUFDL0Isd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixXQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLGdEQUFnRDtBQUNoRDtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBLG9CQUFvQixvREFBb0Q7QUFDeEU7QUFDQSx3QkFBd0Isb0RBQW9EO0FBQzVFO0FBQ0EsNEJBQTRCO0FBQzVCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxZQUFZLHdEQUFNO0FBQ2xCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsV0FBVztBQUMxQixlQUFlLFdBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGFBQWE7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0Esd0JBQXdCLHdEQUFNO0FBQzlCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQy9MQTtBQUFBO0FBQUE7QUFBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlEQUFTO0FBQ2hDLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJjaHVua3MvZXhhbXBsZXMtY2hhcnRzLWFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbUNoYXJ0Q29tcG9uZW50IGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnQvd3JhcHBlci9BbUNoYXJ0Lm1qcyc7XG5pbXBvcnQgVmlld3BvcnQgICAgICAgICBmcm9tICcuLi8uLi9zcmMvY29udGFpbmVyL1ZpZXdwb3J0Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFRlc3RBcHAuTWFpbkNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5WaWV3cG9ydFxuICovXG5jbGFzcyBNYWluQ29udGFpbmVyIGV4dGVuZHMgVmlld3BvcnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnVGVzdEFwcC5NYWluQ29udGFpbmVyJyxcbiAgICAgICAgbnR5cGUgICAgOiAnbWFpbi1jb250YWluZXInLFxuXG4gICAgICAgIGF1dG9Nb3VudDogdHJ1ZSxcbiAgICAgICAgbGF5b3V0ICAgOiAnZml0JyxcblxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgcGFkZGluZzogJzUwcHgnXG4gICAgICAgIH0sXG5cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBtb2R1bGUgICAgIDogQW1DaGFydENvbXBvbmVudCxcbiAgICAgICAgICAgIGNoYXJ0VHlwZSAgOiAnUGllQ2hhcnQnLFxuICAgICAgICAgICAgY2hhcnRDb25maWc6IHtcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHt9LFxuXG4gICAgICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBpZVNlcmllc1wiLFxuXG4gICAgICAgICAgICAgICAgICAgIGRhdGFGaWVsZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiBcImxpdHJlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiY291bnRyeVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcblxuICAgICAgICAgICAgICAgIGRhdGE6IFt7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnk6IFwiTGl0aHVhbmlhXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpdHJlcyA6IDUwMS45XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5OiBcIkN6ZWNoIFJlcHVibGljXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpdHJlcyA6IDMwMS45XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5OiBcIklyZWxhbmRcIixcbiAgICAgICAgICAgICAgICAgICAgbGl0cmVzIDogMjAxLjFcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnk6IFwiR2VybWFueVwiLFxuICAgICAgICAgICAgICAgICAgICBsaXRyZXMgOiAxNjUuOFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeTogXCJBdXN0cmFsaWFcIixcbiAgICAgICAgICAgICAgICAgICAgbGl0cmVzIDogMTM5LjlcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnk6IFwiQXVzdHJpYVwiLFxuICAgICAgICAgICAgICAgICAgICBsaXRyZXMgOiAxMjguM1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeTogXCJVS1wiLFxuICAgICAgICAgICAgICAgICAgICBsaXRyZXMgOiA5OVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeTogXCJCZWxnaXVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpdHJlcyA6IDYwXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5OiBcIlRoZSBOZXRoZXJsYW5kc1wiLFxuICAgICAgICAgICAgICAgICAgICBsaXRyZXMgOiA1MFxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWFpbkNvbnRhaW5lcik7XG5cbmV4cG9ydCB7TWFpbkNvbnRhaW5lciBhcyBkZWZhdWx0fTtcbiIsImltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gJy4vTWFpbkNvbnRhaW5lci5tanMnO1xuXG5jb25zdCBvblN0YXJ0ID0gKCkgPT4gTmVvLmFwcCh7XG4gICAgYXBwUGF0aCA6ICdleGFtcGxlcy9jaGFydHMvJyxcbiAgICBtYWluVmlldzogTWFpbkNvbnRhaW5lcixcbiAgICBuYW1lICAgIDogJ1Rlc3RBcHAnXG59KTtcblxuZXhwb3J0IHtvblN0YXJ0IGFzIG9uU3RhcnR9OyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vQmFzZS5tanMnO1xuaW1wb3J0IExvZ2dlciAgICBmcm9tICcuLi8uLi9jb3JlL0xvZ2dlci5tanMnO1xuXG4vKipcbiAqIENvbnZlbmllbmNlIGNsYXNzIHRvIHJlbmRlciBhbiBhbUNoYXJ0XG4gKiBSZXF1aXJlcyBzZXR0aW5nIE5lby5jb25maWcudXNlQW1DaGFydHMgdG8gdHJ1ZSAob3IgbWFudWFsbHkgaW5jbHVkZSB0aGUgbGliKVxuICogQGNsYXNzIE5lby5jb21wb25lbnQud3JhcHBlci5BbUNoYXJ0XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgQW1DaGFydCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb21wb25lbnQud3JhcHBlci5BbUNoYXJ0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29tcG9uZW50LndyYXBwZXIuQW1DaGFydCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdhbS1jaGFydCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdhbS1jaGFydCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZWU6IGh0dHBzOi8vd3d3LmFtY2hhcnRzLmNvbS9kb2NzL3Y0L1xuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGNoYXJ0Q29uZmlnPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGNoYXJ0Q29uZmlnOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjaGFydFR5cGU9J1hZQ2hhcnQnXG4gICAgICAgICAqL1xuICAgICAgICBjaGFydFR5cGU6ICdYWUNoYXJ0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBkZWZpbmUgYWRhcHRlcnMgdmlhIGpzb24sIHNvIHdlIHBhc3MgYSBmbGFnIHRvIG1haW4gaW5zdGVhZFxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBjb21iaW5lU2VyaWVzVG9vbHRpcD1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgY29tYmluZVNlcmllc1Rvb2x0aXA6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogU3RvcmVzIHRoZSBjaGFydCBkYXRhXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fG51bGx9IGRhdGFfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGRhdGFfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hhcnRzICYgbWFwcyBjYW4gaGF2ZSBkaWZmZXJlbnQgdGFyZ2V0cyB0byBhcHBseSB0aGUgZGF0YSB0by4gRS5nLjpcbiAgICAgICAgICogbXlDaGFydC5kYXRhID0gZGF0YTsgLy8gPT4gJydcbiAgICAgICAgICogbXlDaGFydC5zZXJpZXMudmFsdWVzWzBdLmRhdGEgPSBkYXRhOyAvLyA9PiAnc2VyaWVzLnZhbHVlcy4wJ1xuICAgICAgICAgKiBVc2UgYSBOZW8ubnMoKSBjb25mb3JtIHN5bnRheCB3aXRoIGRvdHMgYmV0d2VlbiBwcm9wc1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGRhdGFQYXRoPScnXG4gICAgICAgICAqL1xuICAgICAgICBkYXRhUGF0aDogJycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhbTRjaGFydHMsIGFtNG1hcHNcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBwYWNrYWdlPSdhbTRjaGFydHMnXG4gICAgICAgICAqL1xuICAgICAgICBwYWNrYWdlOiAnYW00Y2hhcnRzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICBzdHlsZToge3Bvc2l0aW9uOiAncmVsYXRpdmUnLCBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJ30sXG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICBzdHlsZToge3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJ30sXG4gICAgICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7aGVpZ2h0OiAnMTAwJSd9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBnZXRWZG9tUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmRvbS5jblswXS5jblswXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGdldFZub2RlUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudm5vZGUuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAoIW1lLmNoYXJ0Q29uZmlnKSB7XG4gICAgICAgICAgICBMb2dnZXIubG9nRXJyb3IoJ3dyYXBwZXIuQW1DaGFydCBkZWZpbmVkIHdpdGhvdXQgYSBjaGFydENvbmZpZycsIG1lLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnBhcnNlQ2hhcnRDb25maWcobWUuY2hhcnRDb25maWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgZGF0YSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0FycmF5fG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtBcnJheXxudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldERhdGEodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBOZW8ubWFpbi5hZGRvbi5BbUNoYXJ0cy51cGRhdGVEYXRhKHtcbiAgICAgICAgICAgICAgICBhcHBOYW1lIDogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBkYXRhICAgIDogdmFsdWUsXG4gICAgICAgICAgICAgICAgZGF0YVBhdGg6IG1lLmRhdGFQYXRoLFxuICAgICAgICAgICAgICAgIGlkICAgICAgOiBtZS5pZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1vdW50ZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNb3VudGVkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UgJiYgb2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgTmVvLm1haW4uYWRkb24uQW1DaGFydHMuZGVzdHJveSh7XG4gICAgICAgICAgICAgICAgYXBwTmFtZTogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBpZCAgICAgOiBtZS5pZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5hZnRlclNldE1vdW50ZWQodmFsdWUsIG9sZFZhbHVlKTtcblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICAgICAgICAgICAgYXBwTmFtZSAgICAgICAgICAgICA6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgY29tYmluZVNlcmllc1Rvb2x0aXA6IG1lLmNvbWJpbmVTZXJpZXNUb29sdGlwLFxuICAgICAgICAgICAgICAgIGNvbmZpZyAgICAgICAgICAgICAgOiBtZS5jaGFydENvbmZpZyxcbiAgICAgICAgICAgICAgICBkYXRhICAgICAgICAgICAgICAgIDogbWUuZGF0YSxcbiAgICAgICAgICAgICAgICBpZCAgICAgICAgICAgICAgICAgIDogbWUuaWQsXG4gICAgICAgICAgICAgICAgcGFja2FnZSAgICAgICAgICAgICA6IG1lLnBhY2thZ2UsXG4gICAgICAgICAgICAgICAgdHlwZSAgICAgICAgICAgICAgICA6IG1lLmNoYXJ0VHlwZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKG1lLmRhdGEpIHtcbiAgICAgICAgICAgICAgICBvcHRzLmRhdGEgICAgID0gbWUuZGF0YTtcbiAgICAgICAgICAgICAgICBvcHRzLmRhdGFQYXRoID0gbWUuZGF0YVBhdGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIE5lby5tYWluLmFkZG9uLkFtQ2hhcnRzLmNyZWF0ZShvcHRzKS50aGVuKG1lLm9uQ2hhcnRNb3VudGVkKTtcbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHRyaWdnZXIgbG9naWMgYWZ0ZXIgdGhlIGNoYXJ0IGdvdCBtb3VudGVkIGludG8gdGhlIGRvbVxuICAgICAqL1xuICAgIG9uQ2hhcnRNb3VudGVkKCkge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgcGFyc2VDaGFydENvbmZpZyhjb25maWcpIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChOZW8uaXNBcnJheShjb25maWcpKSB7XG4gICAgICAgICAgICBjb25maWcuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBtZS5wYXJzZUNoYXJ0Q29uZmlnKGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhjb25maWcpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChOZW8uaXNBcnJheSh2YWx1ZSkgfHwgTmVvLmlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBtZS5wYXJzZUNoYXJ0Q29uZmlnKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKE5lby5pc1N0cmluZyh2YWx1ZSkgJiYgdmFsdWUuc3RhcnRzV2l0aCgnQGNvbmZpZzonKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cig4KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIW1lW3ZhbHVlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmxvZ0Vycm9yKCdUaGUgdXNlZCBAY29uZmlnIGRvZXMgbm90IGV4aXN0OicsIHZhbHVlLCBtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWdba2V5XSA9IG1lW3ZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhBbUNoYXJ0KTtcblxuZXhwb3J0IHtBbUNoYXJ0IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb250YWluZXIgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb250YWluZXIuVmlld3BvcnRcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBWaWV3cG9ydCBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb250YWluZXIuVmlld3BvcnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb250YWluZXIuVmlld3BvcnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndmlld3BvcnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAndmlld3BvcnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogdHJ1ZSBhcHBsaWVzICduZW8tYm9keS12aWV3cG9ydCcgdG8gdGhlIGRvY3VtZW50LmJvZHlcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXBwbHlCb2R5Q2xzPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGFwcGx5Qm9keUNsczogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tdmlld3BvcnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby12aWV3cG9ydCddXG4gICAgfX1cblxuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBpZiAodGhpcy5hcHBseUJvZHlDbHMpIHtcbiAgICAgICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5hcHBseUJvZHlDbHMoe1xuICAgICAgICAgICAgICAgIGFwcE5hbWU6IHRoaXMuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBjbHMgICAgOiBbJ25lby1ib2R5LXZpZXdwb3J0J11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhWaWV3cG9ydCk7XG5cbmV4cG9ydCB7Vmlld3BvcnQgYXMgZGVmYXVsdH07Il0sInNvdXJjZVJvb3QiOiIifQ==