self["webpackChunk"](["vendors~chunks/apps-covid-app~chunks/apps-sharedcovid-app"],{

/***/ "./node_modules/neo.mjs/src/component/BoxLabel.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/neo.mjs/src/component/BoxLabel.mjs ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BoxLabel; });
/* harmony import */ var _Label_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Label.mjs */ "./node_modules/neo.mjs/src/component/Label.mjs");


/**
 * Convenience class to render a bordered label with a text
 * @class Neo.component.BoxLabel
 * @extends Neo.component.Label
 */
class BoxLabel extends _Label_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.component.BoxLabel'
         * @protected
         */
        className: 'Neo.component.BoxLabel',
        /**
         * @member {String} ntype='box-label'
         * @protected
         */
        ntype: 'box-label',
        /**
         * @member {String[]} cls=['neo-label']
         */
        cls: ['neo-box-label', 'neo-label']
    }}
}

Neo.applyClassConfig(BoxLabel);



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

/***/ "./node_modules/neo.mjs/src/component/wrapper/MapboxGL.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/neo.mjs/src/component/wrapper/MapboxGL.mjs ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MapboxGL; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * Convenience class to render Mapbox GL maps
 * Requires setting Neo.config.useMapboxGL to true (or manually include the lib)
 * @class Neo.component.wrapper.MapboxGL
 * @extends Neo.component.Base
 */
class MapboxGL extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.component.wrapper.MapboxGL'
         * @protected
         */
        className: 'Neo.component.wrapper.MapboxGL',
        /**
         * @member {String} ntype='mapboxgl'
         * @protected
         */
        ntype: 'mapboxgl',
        /**
         *
         * @member {String|null} accessToken=null
         */
        accessToken: null,
        /**
         * @member {Object} center_={lat: 0, lng: 0}
         */
        center_: {lat: 0, lng: 0},
        /**
         * @member {Boolean} convertDataToGeoJson=true
         * @protected
         */
        convertDataToGeoJson: true,
        /**
         * @member {Array|null} data_=null
         */
        data_: null,
        /**
         * Assuming there is just 1 source for data changes.
         * Create a ticket in case it needs to get enhanced.
         * @member {String|null} dataSourceId=null
         */
        dataSourceId: null,
        /**
         * Additional layers to add to the map style.
         * beforeId is a custom property which will get passed as the second param for:
         * https://docs.mapbox.com/mapbox-gl-js/api/#map#addlayer
         * @member {Object[]|null} layers_=null
         */
        layers_: null,
        /**
         * https://docs.mapbox.com/mapbox-gl-js/style-spec/
         * @member {Object|String} mapboxStyle=null
         */
        mapboxStyle_: null,
        /**
         * Data sources for the map.
         * id is a custom property which will get passed as the first param for:
         * https://docs.mapbox.com/mapbox-gl-js/api/#map#addsource
         * @member {Object[]|null} sources_=null
         */
        sources_: null,
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            style: {position: 'relative', height: '100%', width: '100%'},
            cn: [{
                style: {position: 'absolute', height: '100%', width: '100%'},
                cn: [{
                    style: { height: '100%'}
                }]
            }]
        },
        /**
         *
         * @member {Number} zoom_=3
         */
        zoom_: 3
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
     * Triggered after the center config got changed
     * @param {Object} value
     * @param {Object} oldValue
     * @protected
     */
    afterSetCenter(value, oldValue) {
        this.centerMap(value);
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
            Neo.main.addon.MapboxGL.updateData({
                appName     : me.appName,
                data        : value,
                dataSourceId: me.dataSourceId,
                id          : me.id
            });
        }
    }

    /**
     * Triggered after the layers config got changed
     * @param {Object[]|null} value
     * @param {Object[]|null} oldValue
     * @protected
     */
    afterSetLayers(value, oldValue) {
        if (value) {
            Neo.main.addon.MapboxGL.addLayers({
                appName: this.appName,
                id     : this.id,
                layers : value
            });
        }
    }

    /**
     * Triggered after the mapboxStyle config got changed
     * @param {Object|String} value
     * @param {Object|String} oldValue
     * @protected
     */
    afterSetMapboxStyle(value, oldValue) {
        let me = this;

        if (this.mounted) {
            Neo.main.addon.MapboxGL.setStyle({
                accessToken: me.accessToken,
                appName    : me.appName,
                id         : me.id,
                style      : value
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
            Neo.main.addon.MapboxGL.destroy({
                appName: me.appName,
                id     : me.id
            });
        }

        super.afterSetMounted(value, oldValue);

        if (value) {
            const opts = {
                accessToken: me.accessToken,
                appName    : me.appName,
                center     : me.center,
                id         : me.id,
                mapboxStyle: me.mapboxStyle,
                zoom       : me.zoom
            };

            if (me.data) {
                opts.data         = me.data;
                opts.dataSourceId = me.dataSourceId;
            }

            if (me.layers) {
                opts.layers = me.layers;
            }

            if (me.sources) {
                opts.sources = me.sources;
            }

            Neo.main.addon.MapboxGL.create(opts).then(me.onMapMounted);
        }
    }

    /**
     * Triggered after the sources config got changed
     * @param {Object[]|null} value
     * @param {Object[]|null} oldValue
     * @protected
     */
    afterSetSources(value, oldValue) {
        if (value) {
            Neo.main.addon.MapboxGL.addSources({
                appName: this.appName,
                id     : this.id,
                sources: value
            });
        }
    }

    /**
     * Triggered after the zoom config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetZoom(value, oldValue) {
        let me = this;

        if (me.mounted) {
            Neo.main.addon.MapboxGL.zoom({
                appName: me.appName,
                id     : me.id,
                zoom   : value
            });
        }
    }

    /**
     *
     */
    autoResize() {
        Neo.main.addon.MapboxGL.autoResize({
            appName: this.appName,
            id     : this.id
        });
    }

    /**
     * Triggered before the center config gets changed.
     * @param {Object} value
     * @param {Object} oldValue
     * @protected
     */
    beforeSetCenter(value, oldValue) {
        if (value && value.long) {
            value.lng = value.long;
            delete value.long;
        }

        return value;
    }

    /**
     * Triggered before the data config gets changed.
     * @param {Array|null} value
     * @param {Array|null} oldValue
     * @protected
     */
    beforeSetData(value, oldValue) {
        if (value && this.convertDataToGeoJson) {
            value = this.convertToGeoJson(value);
        }

        return value;
    }

    /**
     * Use component.center = {} or component.flyTo() instead
     * @param {Object} value
     * @param {Number} value.lat
     * @param {Number} value.lng
     * @param {Boolean} animate=false
     * @protected
     */
    centerMap(value, animate=false) {
        Neo.main.addon.MapboxGL.center({
            animate: animate,
            appName: this.appName,
            id     : this.id,
            lat    : value.lat,
            lng    : value.lng
        });
    }

    /**
     *
     * @param {Object[]} data
     * @returns {Object} Object matching the geojson format
     */
    convertToGeoJson(data) {
        const geoJson = {
            type    : 'FeatureCollection',
            features: []
        };

        data.forEach(item => {
            // todo: this needs to get more generic
            geoJson.features.push({
                type: 'Feature',

                properties: {
                    active   : item.active,
                    cases    : item.cases,
                    deaths   : item.deaths,
                    id       : item.countryInfo.iso2,
                    recovered: item.recovered,
                    time     : item.updated
                },

                geometry: {
                    type       : 'Point',
                    coordinates: [item.countryInfo.long, item.countryInfo.lat]
                }
            })
        });

        return geoJson;
    }

    /**
     *
     * @param {Object} value
     * @param {Number} value.lat
     * @param {Number} value.lng
     */
    flyTo(value) {
        const me = this;

        value = me.beforeSetCenter(value, null); // long => lng if needed

        me._center = {lat: value.lat, lng: value.lng}; // silent update

        me.centerMap(value, true);
    }

    /**
     * Override this method to trigger logic after the map got mounted into the dom
     */
    onMapMounted() {

    }

    /**
     *
     * @param {Object} data
     * @param {String} data.layerId
     * @param {Object} data.options
     * @param {Boolean} data.options.validate = true
     * @param {Array} data.value
     */
    setFilter(data) {
        Neo.main.addon.MapboxGL.setFilter({
            appName: this.appName,
            id     : this.id,
            layerId: data.layerId,
            options: data.options,
            value  : data.value
        });
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.layerId
     * @param {String} data.key
     * @param {Object} data.options
     * @param {Boolean} data.options.validate = true
     * @param {String} data.value
     */
    setLayoutProperty(data) {
        Neo.main.addon.MapboxGL.setLayoutProperty({
            appName: this.appName,
            id     : this.id,
            key    : data.key,
            layerId: data.layerId,
            options: data.options,
            value  : data.value
        });
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.layerId
     * @param {String} data.key
     * @param {Object} data.options
     * @param {Boolean} data.options.validate = true
     * @param {String} data.value
     */
    setPaintProperty(data) {
        Neo.main.addon.MapboxGL.setPaintProperty({
            appName: this.appName,
            id     : this.id,
            key    : data.key,
            layerId: data.layerId,
            options: data.options,
            value  : data.value
        });
    }
}

Neo.applyClassConfig(MapboxGL);



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/CheckBox.mjs ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckBox; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/form/field/Base.mjs");


/**
 * @class Neo.form.field.CheckBox
 * @extends Neo.form.field.Base
 */
class CheckBox extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.CheckBox'
         * @protected
         */
        className: 'Neo.form.field.CheckBox',
        /**
         * @member {String} ntype='checkboxfield'
         * @protected
         */
        ntype: 'checkboxfield',
        /**
         * @member {Boolean} checked_=false
         */
        checked_: false,
        /**
         * @member {Array} cls=['neo-checkboxfield']
         */
        cls: ['neo-checkboxfield'],
        /**
         * @member {Boolean} hideLabel_=false
         */
        hideLabel_: false,
        /**
         * @member {Boolean} hideValueLabel_=false
         */
        hideValueLabel_: true,
        /**
         * @member {String} inputType_='checkbox'
         */
        inputType_: 'checkbox',
        /**
         * @member {String} labelText_='LabelText'
         */
        labelText_: 'LabelText',
        /**
         * defaults to px
         * @member {Number|String} labelWidth_=150
         */
        labelWidth_: 150,
        /**
         * @member {String} The name (group) of the input dom node
         */
        name_: '',
        /**
         * @member {String} valueLabelText_='ValueLabel'
         */
        valueLabelText_: 'ValueLabel',
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            cn: [{
                tag: 'label',
                cls: ['neo-checkbox-label']
            }, {
                tag: 'input',
                cls: ['neo-checkbox-input']
            }, {
                tag: 'label',
                cls: ['neo-checkbox-value-label']
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
            domListeners = Neo.clone(me.domListeners, true),
            vdom         = me.vdom,
            inputEl      = vdom.cn[1],
            valueLabel   = vdom.cn[2];

        inputEl.id = valueLabel.for = me.id + '-input';
        me.vdom = vdom;

        domListeners.push({
            change: {
                fn   : me.onInputValueChange,
                scope: me
            }
        });

        me.domListeners = domListeners;
    }

    /**
     *
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetChecked(value, oldValue) {
        let me   = this,
            vdom = me.vdom;

        vdom.cn[1].checked = value;
        me.vdom = vdom;

        if (oldValue !== undefined) {
            me.fire('change', {
                component: me,
                oldValue : oldValue,
                value    : value
            });
        }
    }

    /**
     * Triggered after the hideLabel config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetHideLabel(value, oldValue) {
        let vdom = this.vdom;

        vdom.cn[0].removeDom = value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the hideLabelValue config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetHideValueLabel(value, oldValue) {
        let vdom = this.vdom;

        vdom.cn[2].removeDom = value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the inputType config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetInputType(value, oldValue) {
        let vdom = this.vdom;

        vdom.cn[1].type = value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the labelText config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetLabelText(value, oldValue) {
        let vdom = this.vdom;

        vdom.cn[0].innerHTML = value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the labelWidth config got changed
     * @param {Number|String} value
     * @param {Number|String} oldValue
     * @protected
     */
    afterSetLabelWidth(value, oldValue) {
        let me   = this,
            vdom = me.vdom;

        if (!me.hideLabel) {
            vdom.cn[0].width = value;
            me.vdom = vdom;
        }
    }

    /**
     * Triggered after the name config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetName(value, oldValue) {
        let vdom = this.vdom;

        vdom.cn[1].name = value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the value config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetValue(value, oldValue) {
        if (value) {
            let vdom = this.vdom;

            vdom.cn[1].value = value;
            this.vdom = vdom;
        }

        super.afterSetValue(value, oldValue);
    }

    /**
     * Triggered after the valueLabel config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetValueLabelText(value, oldValue) {
        let me   = this,
            vdom = me.vdom;

        if (!me.hideValueLabel) {
            vdom.cn[2].innerHTML = value;
            me.vdom = vdom;
        }
    }

    /**
     * Gets triggered when a user checks a checkbox input.
     * @param {Object} data
     */
    onInputValueChange(data) {
        let me      = this,
            checked = data.target.checked;

        me._checked = checked; // silent update

        // keep the vdom & vnode in sync for future updates
        me.vdom.cn[1].checked = checked;
        me.vnode.childNodes[me.hideLabel ? 0 : 1].attributes.checked = checked + '';

        me.fire('change', {
            component: me,
            oldValue : !checked,
            value    : checked
        });
    }
}

Neo.applyClassConfig(CheckBox);



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0JveExhYmVsLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L3dyYXBwZXIvQW1DaGFydC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC93cmFwcGVyL01hcGJveEdMLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9DaGVja0JveC5tanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFnQzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrREFBSztBQUM1Qix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUFBO0FBQW9DO0FBQ1U7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpREFBUztBQUMvQix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFdBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsZ0RBQWdEO0FB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QUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0IsZUFBZSxjQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCLGVBQWUsY0FBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QixlQUFlLGNBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUIsZUFBZSxXQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDO0FBQ2hD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ZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QixlQUFlLGNBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCQUE4Qjs7QUFFOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEiLCJmaWxlIjoidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExhYmVsIGZyb20gJy4vTGFiZWwubWpzJztcblxuLyoqXG4gKiBDb252ZW5pZW5jZSBjbGFzcyB0byByZW5kZXIgYSBib3JkZXJlZCBsYWJlbCB3aXRoIGEgdGV4dFxuICogQGNsYXNzIE5lby5jb21wb25lbnQuQm94TGFiZWxcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuTGFiZWxcbiAqL1xuY2xhc3MgQm94TGFiZWwgZXh0ZW5kcyBMYWJlbCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb21wb25lbnQuQm94TGFiZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb21wb25lbnQuQm94TGFiZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nYm94LWxhYmVsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2JveC1sYWJlbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWxhYmVsJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tYm94LWxhYmVsJywgJ25lby1sYWJlbCddXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQm94TGFiZWwpO1xuXG5leHBvcnQge0JveExhYmVsIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vQmFzZS5tanMnO1xuaW1wb3J0IExvZ2dlciAgICBmcm9tICcuLi8uLi9jb3JlL0xvZ2dlci5tanMnO1xuXG4vKipcbiAqIENvbnZlbmllbmNlIGNsYXNzIHRvIHJlbmRlciBhbiBhbUNoYXJ0XG4gKiBSZXF1aXJlcyBzZXR0aW5nIE5lby5jb25maWcudXNlQW1DaGFydHMgdG8gdHJ1ZSAob3IgbWFudWFsbHkgaW5jbHVkZSB0aGUgbGliKVxuICogQGNsYXNzIE5lby5jb21wb25lbnQud3JhcHBlci5BbUNoYXJ0XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgQW1DaGFydCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb21wb25lbnQud3JhcHBlci5BbUNoYXJ0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29tcG9uZW50LndyYXBwZXIuQW1DaGFydCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdhbS1jaGFydCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdhbS1jaGFydCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZWU6IGh0dHBzOi8vd3d3LmFtY2hhcnRzLmNvbS9kb2NzL3Y0L1xuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGNoYXJ0Q29uZmlnPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGNoYXJ0Q29uZmlnOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjaGFydFR5cGU9J1hZQ2hhcnQnXG4gICAgICAgICAqL1xuICAgICAgICBjaGFydFR5cGU6ICdYWUNoYXJ0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBkZWZpbmUgYWRhcHRlcnMgdmlhIGpzb24sIHNvIHdlIHBhc3MgYSBmbGFnIHRvIG1haW4gaW5zdGVhZFxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBjb21iaW5lU2VyaWVzVG9vbHRpcD1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgY29tYmluZVNlcmllc1Rvb2x0aXA6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogU3RvcmVzIHRoZSBjaGFydCBkYXRhXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fG51bGx9IGRhdGFfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGRhdGFfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hhcnRzICYgbWFwcyBjYW4gaGF2ZSBkaWZmZXJlbnQgdGFyZ2V0cyB0byBhcHBseSB0aGUgZGF0YSB0by4gRS5nLjpcbiAgICAgICAgICogbXlDaGFydC5kYXRhID0gZGF0YTsgLy8gPT4gJydcbiAgICAgICAgICogbXlDaGFydC5zZXJpZXMudmFsdWVzWzBdLmRhdGEgPSBkYXRhOyAvLyA9PiAnc2VyaWVzLnZhbHVlcy4wJ1xuICAgICAgICAgKiBVc2UgYSBOZW8ubnMoKSBjb25mb3JtIHN5bnRheCB3aXRoIGRvdHMgYmV0d2VlbiBwcm9wc1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGRhdGFQYXRoPScnXG4gICAgICAgICAqL1xuICAgICAgICBkYXRhUGF0aDogJycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhbTRjaGFydHMsIGFtNG1hcHNcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBwYWNrYWdlPSdhbTRjaGFydHMnXG4gICAgICAgICAqL1xuICAgICAgICBwYWNrYWdlOiAnYW00Y2hhcnRzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICBzdHlsZToge3Bvc2l0aW9uOiAncmVsYXRpdmUnLCBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJ30sXG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICBzdHlsZToge3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJ30sXG4gICAgICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7aGVpZ2h0OiAnMTAwJSd9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBnZXRWZG9tUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmRvbS5jblswXS5jblswXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGdldFZub2RlUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudm5vZGUuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAoIW1lLmNoYXJ0Q29uZmlnKSB7XG4gICAgICAgICAgICBMb2dnZXIubG9nRXJyb3IoJ3dyYXBwZXIuQW1DaGFydCBkZWZpbmVkIHdpdGhvdXQgYSBjaGFydENvbmZpZycsIG1lLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnBhcnNlQ2hhcnRDb25maWcobWUuY2hhcnRDb25maWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgZGF0YSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0FycmF5fG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtBcnJheXxudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldERhdGEodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBOZW8ubWFpbi5hZGRvbi5BbUNoYXJ0cy51cGRhdGVEYXRhKHtcbiAgICAgICAgICAgICAgICBhcHBOYW1lIDogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBkYXRhICAgIDogdmFsdWUsXG4gICAgICAgICAgICAgICAgZGF0YVBhdGg6IG1lLmRhdGFQYXRoLFxuICAgICAgICAgICAgICAgIGlkICAgICAgOiBtZS5pZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1vdW50ZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNb3VudGVkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UgJiYgb2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgTmVvLm1haW4uYWRkb24uQW1DaGFydHMuZGVzdHJveSh7XG4gICAgICAgICAgICAgICAgYXBwTmFtZTogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBpZCAgICAgOiBtZS5pZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5hZnRlclNldE1vdW50ZWQodmFsdWUsIG9sZFZhbHVlKTtcblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICAgICAgICAgICAgYXBwTmFtZSAgICAgICAgICAgICA6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgY29tYmluZVNlcmllc1Rvb2x0aXA6IG1lLmNvbWJpbmVTZXJpZXNUb29sdGlwLFxuICAgICAgICAgICAgICAgIGNvbmZpZyAgICAgICAgICAgICAgOiBtZS5jaGFydENvbmZpZyxcbiAgICAgICAgICAgICAgICBkYXRhICAgICAgICAgICAgICAgIDogbWUuZGF0YSxcbiAgICAgICAgICAgICAgICBpZCAgICAgICAgICAgICAgICAgIDogbWUuaWQsXG4gICAgICAgICAgICAgICAgcGFja2FnZSAgICAgICAgICAgICA6IG1lLnBhY2thZ2UsXG4gICAgICAgICAgICAgICAgdHlwZSAgICAgICAgICAgICAgICA6IG1lLmNoYXJ0VHlwZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKG1lLmRhdGEpIHtcbiAgICAgICAgICAgICAgICBvcHRzLmRhdGEgICAgID0gbWUuZGF0YTtcbiAgICAgICAgICAgICAgICBvcHRzLmRhdGFQYXRoID0gbWUuZGF0YVBhdGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIE5lby5tYWluLmFkZG9uLkFtQ2hhcnRzLmNyZWF0ZShvcHRzKS50aGVuKG1lLm9uQ2hhcnRNb3VudGVkKTtcbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHRyaWdnZXIgbG9naWMgYWZ0ZXIgdGhlIGNoYXJ0IGdvdCBtb3VudGVkIGludG8gdGhlIGRvbVxuICAgICAqL1xuICAgIG9uQ2hhcnRNb3VudGVkKCkge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgcGFyc2VDaGFydENvbmZpZyhjb25maWcpIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChOZW8uaXNBcnJheShjb25maWcpKSB7XG4gICAgICAgICAgICBjb25maWcuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBtZS5wYXJzZUNoYXJ0Q29uZmlnKGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhjb25maWcpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChOZW8uaXNBcnJheSh2YWx1ZSkgfHwgTmVvLmlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBtZS5wYXJzZUNoYXJ0Q29uZmlnKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKE5lby5pc1N0cmluZyh2YWx1ZSkgJiYgdmFsdWUuc3RhcnRzV2l0aCgnQGNvbmZpZzonKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cig4KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIW1lW3ZhbHVlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmxvZ0Vycm9yKCdUaGUgdXNlZCBAY29uZmlnIGRvZXMgbm90IGV4aXN0OicsIHZhbHVlLCBtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWdba2V5XSA9IG1lW3ZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhBbUNoYXJ0KTtcblxuZXhwb3J0IHtBbUNoYXJ0IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vQmFzZS5tanMnO1xuXG4vKipcbiAqIENvbnZlbmllbmNlIGNsYXNzIHRvIHJlbmRlciBNYXBib3ggR0wgbWFwc1xuICogUmVxdWlyZXMgc2V0dGluZyBOZW8uY29uZmlnLnVzZU1hcGJveEdMIHRvIHRydWUgKG9yIG1hbnVhbGx5IGluY2x1ZGUgdGhlIGxpYilcbiAqIEBjbGFzcyBOZW8uY29tcG9uZW50LndyYXBwZXIuTWFwYm94R0xcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBNYXBib3hHTCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb21wb25lbnQud3JhcHBlci5NYXBib3hHTCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbXBvbmVudC53cmFwcGVyLk1hcGJveEdMJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J21hcGJveGdsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ21hcGJveGdsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBhY2Nlc3NUb2tlbj1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBhY2Nlc3NUb2tlbjogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gY2VudGVyXz17bGF0OiAwLCBsbmc6IDB9XG4gICAgICAgICAqL1xuICAgICAgICBjZW50ZXJfOiB7bGF0OiAwLCBsbmc6IDB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gY29udmVydERhdGFUb0dlb0pzb249dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjb252ZXJ0RGF0YVRvR2VvSnNvbjogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fG51bGx9IGRhdGFfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGRhdGFfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQXNzdW1pbmcgdGhlcmUgaXMganVzdCAxIHNvdXJjZSBmb3IgZGF0YSBjaGFuZ2VzLlxuICAgICAgICAgKiBDcmVhdGUgYSB0aWNrZXQgaW4gY2FzZSBpdCBuZWVkcyB0byBnZXQgZW5oYW5jZWQuXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBkYXRhU291cmNlSWQ9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZGF0YVNvdXJjZUlkOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkaXRpb25hbCBsYXllcnMgdG8gYWRkIHRvIHRoZSBtYXAgc3R5bGUuXG4gICAgICAgICAqIGJlZm9yZUlkIGlzIGEgY3VzdG9tIHByb3BlcnR5IHdoaWNoIHdpbGwgZ2V0IHBhc3NlZCBhcyB0aGUgc2Vjb25kIHBhcmFtIGZvcjpcbiAgICAgICAgICogaHR0cHM6Ly9kb2NzLm1hcGJveC5jb20vbWFwYm94LWdsLWpzL2FwaS8jbWFwI2FkZGxheWVyXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfG51bGx9IGxheWVyc189bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgbGF5ZXJzXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGh0dHBzOi8vZG9jcy5tYXBib3guY29tL21hcGJveC1nbC1qcy9zdHlsZS1zcGVjL1xuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8U3RyaW5nfSBtYXBib3hTdHlsZT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBtYXBib3hTdHlsZV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEYXRhIHNvdXJjZXMgZm9yIHRoZSBtYXAuXG4gICAgICAgICAqIGlkIGlzIGEgY3VzdG9tIHByb3BlcnR5IHdoaWNoIHdpbGwgZ2V0IHBhc3NlZCBhcyB0aGUgZmlyc3QgcGFyYW0gZm9yOlxuICAgICAgICAgKiBodHRwczovL2RvY3MubWFwYm94LmNvbS9tYXBib3gtZ2wtanMvYXBpLyNtYXAjYWRkc291cmNlXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfG51bGx9IHNvdXJjZXNfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHNvdXJjZXNfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIHN0eWxlOiB7cG9zaXRpb246ICdyZWxhdGl2ZScsIGhlaWdodDogJzEwMCUnLCB3aWR0aDogJzEwMCUnfSxcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7cG9zaXRpb246ICdhYnNvbHV0ZScsIGhlaWdodDogJzEwMCUnLCB3aWR0aDogJzEwMCUnfSxcbiAgICAgICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgaGVpZ2h0OiAnMTAwJSd9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHpvb21fPTNcbiAgICAgICAgICovXG4gICAgICAgIHpvb21fOiAzXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZ2V0VmRvbVJvb3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZkb20uY25bMF0uY25bMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBnZXRWbm9kZVJvb3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZub2RlLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGNlbnRlciBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRDZW50ZXIodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2VudGVyTWFwKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGRhdGEgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtBcnJheXxudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXREYXRhKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgTmVvLm1haW4uYWRkb24uTWFwYm94R0wudXBkYXRlRGF0YSh7XG4gICAgICAgICAgICAgICAgYXBwTmFtZSAgICAgOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgIGRhdGEgICAgICAgIDogdmFsdWUsXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZUlkOiBtZS5kYXRhU291cmNlSWQsXG4gICAgICAgICAgICAgICAgaWQgICAgICAgICAgOiBtZS5pZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGxheWVycyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3RbXXxudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldExheWVycyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBOZW8ubWFpbi5hZGRvbi5NYXBib3hHTC5hZGRMYXllcnMoe1xuICAgICAgICAgICAgICAgIGFwcE5hbWU6IHRoaXMuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBpZCAgICAgOiB0aGlzLmlkLFxuICAgICAgICAgICAgICAgIGxheWVycyA6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbWFwYm94U3R5bGUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNYXBib3hTdHlsZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XG4gICAgICAgICAgICBOZW8ubWFpbi5hZGRvbi5NYXBib3hHTC5zZXRTdHlsZSh7XG4gICAgICAgICAgICAgICAgYWNjZXNzVG9rZW46IG1lLmFjY2Vzc1Rva2VuLFxuICAgICAgICAgICAgICAgIGFwcE5hbWUgICAgOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgIGlkICAgICAgICAgOiBtZS5pZCxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICAgIDogdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBtb3VudGVkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TW91bnRlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlICYmIG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIE5lby5tYWluLmFkZG9uLk1hcGJveEdMLmRlc3Ryb3koe1xuICAgICAgICAgICAgICAgIGFwcE5hbWU6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgaWQgICAgIDogbWUuaWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIuYWZ0ZXJTZXRNb3VudGVkKHZhbHVlLCBvbGRWYWx1ZSk7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRzID0ge1xuICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBtZS5hY2Nlc3NUb2tlbixcbiAgICAgICAgICAgICAgICBhcHBOYW1lICAgIDogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBjZW50ZXIgICAgIDogbWUuY2VudGVyLFxuICAgICAgICAgICAgICAgIGlkICAgICAgICAgOiBtZS5pZCxcbiAgICAgICAgICAgICAgICBtYXBib3hTdHlsZTogbWUubWFwYm94U3R5bGUsXG4gICAgICAgICAgICAgICAgem9vbSAgICAgICA6IG1lLnpvb21cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChtZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgb3B0cy5kYXRhICAgICAgICAgPSBtZS5kYXRhO1xuICAgICAgICAgICAgICAgIG9wdHMuZGF0YVNvdXJjZUlkID0gbWUuZGF0YVNvdXJjZUlkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWUubGF5ZXJzKSB7XG4gICAgICAgICAgICAgICAgb3B0cy5sYXllcnMgPSBtZS5sYXllcnM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtZS5zb3VyY2VzKSB7XG4gICAgICAgICAgICAgICAgb3B0cy5zb3VyY2VzID0gbWUuc291cmNlcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTmVvLm1haW4uYWRkb24uTWFwYm94R0wuY3JlYXRlKG9wdHMpLnRoZW4obWUub25NYXBNb3VudGVkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc291cmNlcyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3RbXXxudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFNvdXJjZXModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgTmVvLm1haW4uYWRkb24uTWFwYm94R0wuYWRkU291cmNlcyh7XG4gICAgICAgICAgICAgICAgYXBwTmFtZTogdGhpcy5hcHBOYW1lLFxuICAgICAgICAgICAgICAgIGlkICAgICA6IHRoaXMuaWQsXG4gICAgICAgICAgICAgICAgc291cmNlczogdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB6b29tIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFpvb20odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLm1vdW50ZWQpIHtcbiAgICAgICAgICAgIE5lby5tYWluLmFkZG9uLk1hcGJveEdMLnpvb20oe1xuICAgICAgICAgICAgICAgIGFwcE5hbWU6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgaWQgICAgIDogbWUuaWQsXG4gICAgICAgICAgICAgICAgem9vbSAgIDogdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBhdXRvUmVzaXplKCkge1xuICAgICAgICBOZW8ubWFpbi5hZGRvbi5NYXBib3hHTC5hdXRvUmVzaXplKHtcbiAgICAgICAgICAgIGFwcE5hbWU6IHRoaXMuYXBwTmFtZSxcbiAgICAgICAgICAgIGlkICAgICA6IHRoaXMuaWRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgY2VudGVyIGNvbmZpZyBnZXRzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldENlbnRlcih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLmxvbmcpIHtcbiAgICAgICAgICAgIHZhbHVlLmxuZyA9IHZhbHVlLmxvbmc7XG4gICAgICAgICAgICBkZWxldGUgdmFsdWUubG9uZztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBkYXRhIGNvbmZpZyBnZXRzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtBcnJheXxudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0RGF0YSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICYmIHRoaXMuY29udmVydERhdGFUb0dlb0pzb24pIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5jb252ZXJ0VG9HZW9Kc29uKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2UgY29tcG9uZW50LmNlbnRlciA9IHt9IG9yIGNvbXBvbmVudC5mbHlUbygpIGluc3RlYWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWUubGF0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlLmxuZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gYW5pbWF0ZT1mYWxzZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBjZW50ZXJNYXAodmFsdWUsIGFuaW1hdGU9ZmFsc2UpIHtcbiAgICAgICAgTmVvLm1haW4uYWRkb24uTWFwYm94R0wuY2VudGVyKHtcbiAgICAgICAgICAgIGFuaW1hdGU6IGFuaW1hdGUsXG4gICAgICAgICAgICBhcHBOYW1lOiB0aGlzLmFwcE5hbWUsXG4gICAgICAgICAgICBpZCAgICAgOiB0aGlzLmlkLFxuICAgICAgICAgICAgbGF0ICAgIDogdmFsdWUubGF0LFxuICAgICAgICAgICAgbG5nICAgIDogdmFsdWUubG5nXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gZGF0YVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IE9iamVjdCBtYXRjaGluZyB0aGUgZ2VvanNvbiBmb3JtYXRcbiAgICAgKi9cbiAgICBjb252ZXJ0VG9HZW9Kc29uKGRhdGEpIHtcbiAgICAgICAgY29uc3QgZ2VvSnNvbiA9IHtcbiAgICAgICAgICAgIHR5cGUgICAgOiAnRmVhdHVyZUNvbGxlY3Rpb24nLFxuICAgICAgICAgICAgZmVhdHVyZXM6IFtdXG4gICAgICAgIH07XG5cbiAgICAgICAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgLy8gdG9kbzogdGhpcyBuZWVkcyB0byBnZXQgbW9yZSBnZW5lcmljXG4gICAgICAgICAgICBnZW9Kc29uLmZlYXR1cmVzLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdGZWF0dXJlJyxcblxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlICAgOiBpdGVtLmFjdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgY2FzZXMgICAgOiBpdGVtLmNhc2VzLFxuICAgICAgICAgICAgICAgICAgICBkZWF0aHMgICA6IGl0ZW0uZGVhdGhzLFxuICAgICAgICAgICAgICAgICAgICBpZCAgICAgICA6IGl0ZW0uY291bnRyeUluZm8uaXNvMixcbiAgICAgICAgICAgICAgICAgICAgcmVjb3ZlcmVkOiBpdGVtLnJlY292ZXJlZCxcbiAgICAgICAgICAgICAgICAgICAgdGltZSAgICAgOiBpdGVtLnVwZGF0ZWRcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSAgICAgICA6ICdQb2ludCcsXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBbaXRlbS5jb3VudHJ5SW5mby5sb25nLCBpdGVtLmNvdW50cnlJbmZvLmxhdF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZ2VvSnNvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZS5sYXRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWUubG5nXG4gICAgICovXG4gICAgZmx5VG8odmFsdWUpIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIHZhbHVlID0gbWUuYmVmb3JlU2V0Q2VudGVyKHZhbHVlLCBudWxsKTsgLy8gbG9uZyA9PiBsbmcgaWYgbmVlZGVkXG5cbiAgICAgICAgbWUuX2NlbnRlciA9IHtsYXQ6IHZhbHVlLmxhdCwgbG5nOiB2YWx1ZS5sbmd9OyAvLyBzaWxlbnQgdXBkYXRlXG5cbiAgICAgICAgbWUuY2VudGVyTWFwKHZhbHVlLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byB0cmlnZ2VyIGxvZ2ljIGFmdGVyIHRoZSBtYXAgZ290IG1vdW50ZWQgaW50byB0aGUgZG9tXG4gICAgICovXG4gICAgb25NYXBNb3VudGVkKCkge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmxheWVySWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YS5vcHRpb25zXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBkYXRhLm9wdGlvbnMudmFsaWRhdGUgPSB0cnVlXG4gICAgICogQHBhcmFtIHtBcnJheX0gZGF0YS52YWx1ZVxuICAgICAqL1xuICAgIHNldEZpbHRlcihkYXRhKSB7XG4gICAgICAgIE5lby5tYWluLmFkZG9uLk1hcGJveEdMLnNldEZpbHRlcih7XG4gICAgICAgICAgICBhcHBOYW1lOiB0aGlzLmFwcE5hbWUsXG4gICAgICAgICAgICBpZCAgICAgOiB0aGlzLmlkLFxuICAgICAgICAgICAgbGF5ZXJJZDogZGF0YS5sYXllcklkLFxuICAgICAgICAgICAgb3B0aW9uczogZGF0YS5vcHRpb25zLFxuICAgICAgICAgICAgdmFsdWUgIDogZGF0YS52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEubGF5ZXJJZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmtleVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhLm9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGRhdGEub3B0aW9ucy52YWxpZGF0ZSA9IHRydWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS52YWx1ZVxuICAgICAqL1xuICAgIHNldExheW91dFByb3BlcnR5KGRhdGEpIHtcbiAgICAgICAgTmVvLm1haW4uYWRkb24uTWFwYm94R0wuc2V0TGF5b3V0UHJvcGVydHkoe1xuICAgICAgICAgICAgYXBwTmFtZTogdGhpcy5hcHBOYW1lLFxuICAgICAgICAgICAgaWQgICAgIDogdGhpcy5pZCxcbiAgICAgICAgICAgIGtleSAgICA6IGRhdGEua2V5LFxuICAgICAgICAgICAgbGF5ZXJJZDogZGF0YS5sYXllcklkLFxuICAgICAgICAgICAgb3B0aW9uczogZGF0YS5vcHRpb25zLFxuICAgICAgICAgICAgdmFsdWUgIDogZGF0YS52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEubGF5ZXJJZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmtleVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhLm9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGRhdGEub3B0aW9ucy52YWxpZGF0ZSA9IHRydWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS52YWx1ZVxuICAgICAqL1xuICAgIHNldFBhaW50UHJvcGVydHkoZGF0YSkge1xuICAgICAgICBOZW8ubWFpbi5hZGRvbi5NYXBib3hHTC5zZXRQYWludFByb3BlcnR5KHtcbiAgICAgICAgICAgIGFwcE5hbWU6IHRoaXMuYXBwTmFtZSxcbiAgICAgICAgICAgIGlkICAgICA6IHRoaXMuaWQsXG4gICAgICAgICAgICBrZXkgICAgOiBkYXRhLmtleSxcbiAgICAgICAgICAgIGxheWVySWQ6IGRhdGEubGF5ZXJJZCxcbiAgICAgICAgICAgIG9wdGlvbnM6IGRhdGEub3B0aW9ucyxcbiAgICAgICAgICAgIHZhbHVlICA6IGRhdGEudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYXBib3hHTCk7XG5cbmV4cG9ydCB7TWFwYm94R0wgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5mb3JtLmZpZWxkLkNoZWNrQm94XG4gKiBAZXh0ZW5kcyBOZW8uZm9ybS5maWVsZC5CYXNlXG4gKi9cbmNsYXNzIENoZWNrQm94IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5mb3JtLmZpZWxkLkNoZWNrQm94J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uZm9ybS5maWVsZC5DaGVja0JveCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjaGVja2JveGZpZWxkJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NoZWNrYm94ZmllbGQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gY2hlY2tlZF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGNoZWNrZWRfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBjbHM9WyduZW8tY2hlY2tib3hmaWVsZCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWNoZWNrYm94ZmllbGQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGhpZGVMYWJlbF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGhpZGVMYWJlbF86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaGlkZVZhbHVlTGFiZWxfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBoaWRlVmFsdWVMYWJlbF86IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGlucHV0VHlwZV89J2NoZWNrYm94J1xuICAgICAgICAgKi9cbiAgICAgICAgaW5wdXRUeXBlXzogJ2NoZWNrYm94JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbGFiZWxUZXh0Xz0nTGFiZWxUZXh0J1xuICAgICAgICAgKi9cbiAgICAgICAgbGFiZWxUZXh0XzogJ0xhYmVsVGV4dCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBkZWZhdWx0cyB0byBweFxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8U3RyaW5nfSBsYWJlbFdpZHRoXz0xNTBcbiAgICAgICAgICovXG4gICAgICAgIGxhYmVsV2lkdGhfOiAxNTAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IFRoZSBuYW1lIChncm91cCkgb2YgdGhlIGlucHV0IGRvbSBub2RlXG4gICAgICAgICAqL1xuICAgICAgICBuYW1lXzogJycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHZhbHVlTGFiZWxUZXh0Xz0nVmFsdWVMYWJlbCdcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlTGFiZWxUZXh0XzogJ1ZhbHVlTGFiZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIHRhZzogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWNoZWNrYm94LWxhYmVsJ11cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0YWc6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby1jaGVja2JveC1pbnB1dCddXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGFnOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIGNsczogWyduZW8tY2hlY2tib3gtdmFsdWUtbGFiZWwnXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IE5lby5jbG9uZShtZS5kb21MaXN0ZW5lcnMsIHRydWUpLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGlucHV0RWwgICAgICA9IHZkb20uY25bMV0sXG4gICAgICAgICAgICB2YWx1ZUxhYmVsICAgPSB2ZG9tLmNuWzJdO1xuXG4gICAgICAgIGlucHV0RWwuaWQgPSB2YWx1ZUxhYmVsLmZvciA9IG1lLmlkICsgJy1pbnB1dCc7XG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgIGRvbUxpc3RlbmVycy5wdXNoKHtcbiAgICAgICAgICAgIGNoYW5nZToge1xuICAgICAgICAgICAgICAgIGZuICAgOiBtZS5vbklucHV0VmFsdWVDaGFuZ2UsXG4gICAgICAgICAgICAgICAgc2NvcGU6IG1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmRvbUxpc3RlbmVycyA9IGRvbUxpc3RlbmVycztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0Q2hlY2tlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgdmRvbS5jblsxXS5jaGVja2VkID0gdmFsdWU7XG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBtZS5maXJlKCdjaGFuZ2UnLCB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBtZSxcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZSA6IG9sZFZhbHVlLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBoaWRlTGFiZWwgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SGlkZUxhYmVsKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICB2ZG9tLmNuWzBdLnJlbW92ZURvbSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaGlkZUxhYmVsVmFsdWUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SGlkZVZhbHVlTGFiZWwodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMl0ucmVtb3ZlRG9tID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBpbnB1dFR5cGUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SW5wdXRUeXBlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICB2ZG9tLmNuWzFdLnR5cGUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGxhYmVsVGV4dCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRMYWJlbFRleHQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMF0uaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBsYWJlbFdpZHRoIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TGFiZWxXaWR0aCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgaWYgKCFtZS5oaWRlTGFiZWwpIHtcbiAgICAgICAgICAgIHZkb20uY25bMF0ud2lkdGggPSB2YWx1ZTtcbiAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBuYW1lIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldE5hbWUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMV0ubmFtZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdmFsdWUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VmFsdWUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgICAgIHZkb20uY25bMV0udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5hZnRlclNldFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB2YWx1ZUxhYmVsIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFZhbHVlTGFiZWxUZXh0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICBpZiAoIW1lLmhpZGVWYWx1ZUxhYmVsKSB7XG4gICAgICAgICAgICB2ZG9tLmNuWzJdLmlubmVySFRNTCA9IHZhbHVlO1xuICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRyaWdnZXJlZCB3aGVuIGEgdXNlciBjaGVja3MgYSBjaGVja2JveCBpbnB1dC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uSW5wdXRWYWx1ZUNoYW5nZShkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNoZWNrZWQgPSBkYXRhLnRhcmdldC5jaGVja2VkO1xuXG4gICAgICAgIG1lLl9jaGVja2VkID0gY2hlY2tlZDsgLy8gc2lsZW50IHVwZGF0ZVxuXG4gICAgICAgIC8vIGtlZXAgdGhlIHZkb20gJiB2bm9kZSBpbiBzeW5jIGZvciBmdXR1cmUgdXBkYXRlc1xuICAgICAgICBtZS52ZG9tLmNuWzFdLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgICAgICBtZS52bm9kZS5jaGlsZE5vZGVzW21lLmhpZGVMYWJlbCA/IDAgOiAxXS5hdHRyaWJ1dGVzLmNoZWNrZWQgPSBjaGVja2VkICsgJyc7XG5cbiAgICAgICAgbWUuZmlyZSgnY2hhbmdlJywge1xuICAgICAgICAgICAgY29tcG9uZW50OiBtZSxcbiAgICAgICAgICAgIG9sZFZhbHVlIDogIWNoZWNrZWQsXG4gICAgICAgICAgICB2YWx1ZSAgICA6IGNoZWNrZWRcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDaGVja0JveCk7XG5cbmV4cG9ydCB7Q2hlY2tCb3ggYXMgZGVmYXVsdH07Il0sInNvdXJjZVJvb3QiOiIifQ==