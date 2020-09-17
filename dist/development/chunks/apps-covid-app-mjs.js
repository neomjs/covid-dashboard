self["webpackChunk"](["chunks/apps-covid-app-mjs"],{

/***/ "./apps/covid/Util.mjs":
/*!*****************************!*\
  !*** ./apps/covid/Util.mjs ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_neo_mjs_src_core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/neo.mjs/src/core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * Static utility class
 * @class Covid.Util
 * @extends Neo.core.Base
 */
class Util extends _node_modules_neo_mjs_src_core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * A regex to replace blank chars
         * @member {RegExp} flagRegEx=/ /gi
         * @protected
         * @static
         */
        flagRegEx: / /gi,
        /**
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
         * Change this config to enforce a county specific formatting (e.g. 'de-DE')
         * @member {String} locales='default'
         * @protected
         * @static
         */
        locales: 'default'
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Covid.Util'
         * @protected
         */
        className: 'Covid.Util'
    }}

    /**
     * Used for the casesPerOneMillion column to show % of population
     * @param {Object} data
     * @param {Number} data.value
     * @returns {String}
     */
    static formatInfected(data) {
        let value = data.value;

        if (!Neo.isNumber(value)) {
            return value || 'N/A';
        }

        value = Math.round(value / 100);
        value /= 100;

        value = value.toFixed(2) + ' %';

        return value.toLocaleString(Util.locales);
    }

    /**
     * This method will get used as a grid renderer, so the 2nd param is an overload (would be {Object} record)
     * @param {Object} data
     * @param {Number} data.value
     * @param {String} [color]
     * @returns {String}
     */
    static formatNumber(data, color) {
        let value = data.value;

        if (!Neo.isNumber(value)) {
            return value || 'N/A';
        }

        value = value.toLocaleString(Util.locales);

        return typeof color !== 'string' ? value : `<span style="color:${color};">${value}</span>`;
    }

    /**
     *
     * @param {String} name
     * @returns {String} url
     */
    static getCountryFlagUrl(name) {
        const map = {
            'bosnia'                               : 'bosnia-and-herzegovina',
            'cabo-verde'                           : 'cape-verde',
            'car'                                  : 'central-african-republic',
            'caribbean-netherlands'                : 'netherlands',
            'channel-islands'                      : 'jersey',
            'côte-d\'ivoire'                       : 'ivory-coast',
            'congo'                                : 'republic-of-the-congo',
            'congo,-the-democratic-republic-of-the': 'democratic-republic-of-congo',
            'curaçao'                              : 'curacao',
            'czechia'                              : 'czech-republic',
            'diamond-princess'                     : 'japan', // cruise ship
            'drc'                                  : 'democratic-republic-of-congo',
            'el-salvador'                          : 'salvador',
            'eswatini'                             : 'swaziland',
            'faeroe-islands'                       : 'faroe-islands',
            'falkland-islands-(malvinas)'          : 'falkland-islands',
            'french-guiana'                        : 'france', // ?
            'guadeloupe'                           : 'france', // ?
            'holy-see-(vatican-city-state)'        : 'vatican-city',
            'iran,-islamic-republic-of'            : 'iran',
            'lao-people\'s-democratic-republic'    : 'laos',
            'libyan-arab-jamahiriya'               : 'libya',
            'macedonia'                            : 'republic-of-macedonia',
            'mayotte'                              : 'france', // ?
            'moldova,-republic-of'                 : 'moldova',
            'ms-zaandam'                           : 'netherlands', // cruise ship
            'new-caledonia'                        : 'france',
            'palestinian-territory,-occupied'      : 'palestine',
            'poland'                               : 'republic-of-poland',
            'réunion'                              : 'france',
            's.-korea'                             : 'south-korea',
            'st.-barth'                            : 'st-barts',
            'saint-lucia'                          : 'st-lucia',
            'saint-martin'                         : 'sint-maarten',
            'saint-pierre-miquelon'                : 'france',
            'saint-vincent-and-the-grenadines'     : 'st-vincent-and-the-grenadines',
            'syrian-arab-republic'                 : 'syria',
            'tanzania,-united-republic-of'         : 'tanzania',
            'timor-leste'                          : 'east-timor',
            'turks-and-caicos-islands'             : 'turks-and-caicos',
            'u.s.-virgin-islands'                  : 'virgin-islands',
            'uae'                                  : 'united-arab-emirates',
            'uk'                                   : 'united-kingdom',
            'usa'                                  : 'united-states-of-america',
            'uzbekistan'                           : 'uzbekistn',
            'venezuela,-bolivarian-republic-of'    : 'venezuela',
            'viet-nam'                             : 'vietnam'
        };

        let imageName = name.toLowerCase().replace(Util.flagRegEx, '-');

        imageName = map[imageName] || imageName;

        if (Neo.config.isGitHubPages) {
            let path = '../../../../resources/images/flaticon/country_flags/png/' + imageName + '.png';

            if (!Neo.config.isExperimental) {
                path = '../../' + path;
            }

            return path;
        }

        return 'https://raw.githubusercontent.com/neomjs/pages/master/resources/images/flaticon/country_flags/png/' + imageName + '.png';
    }

    /**
     *
     * @param {Object} data
     * @param {Number} data.index
     * @returns {Object}
     */
    static indexRenderer(data) {
        return {
            cls : ['neo-index-column', 'neo-table-cell'],
            html: data.index + 1
        };
    }
}

Neo.applyClassConfig(Util);

/* harmony default export */ __webpack_exports__["default"] = (Util);

/***/ }),

/***/ "./apps/covid/app.mjs":
/*!****************************!*\
  !*** ./apps/covid/app.mjs ***!
  \****************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/MainContainer.mjs */ "./apps/covid/view/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'apps/covid/',
    mainView: _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'Covid'
});



/***/ }),

/***/ "./apps/covid/model/Country.mjs":
/*!**************************************!*\
  !*** ./apps/covid/model/Country.mjs ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Country; });
/* harmony import */ var _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class Covid.model.Country
 * @extends Neo.data.Model
 */
class Country extends _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        className: 'Covid.model.Country',

        fields: [{
            name: 'active',
            type: 'Integer'
        }, {
            name: 'cases',
            type: 'Integer'
        }, {
            name: 'casesPerOneMillion',
            type: 'Integer'
        }, {
            name: 'country',
            type: 'String'
        }, {
            name: 'countryInfo',
            type: 'Object' // _id, flag, iso2, iso3, lat, long
        }, {
            name: 'critical',
            type: 'Integer'
        }, {
            name: 'deaths',
            type: 'Integer'
        }, {
            name: 'index',
            type: 'Integer'
        }, {
            name: 'infected', // renderer parses to % of population
            type: 'Integer'
        }, {
            name: 'recovered',
            type: 'Integer'
        }, {
            name: 'tests',
            type: 'Integer'
        }, {
            name: 'testsPerOneMillion',
            type: 'Integer'
        }, {
            name: 'todayCases',
            type: 'Integer'
        }, {
            name: 'todayDeaths',
            type: 'Integer'
        }]
    }}
}

Neo.applyClassConfig(Country);



/***/ }),

/***/ "./apps/covid/model/HistoricalData.mjs":
/*!*********************************************!*\
  !*** ./apps/covid/model/HistoricalData.mjs ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HistoricalData; });
/* harmony import */ var _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class Covid.model.HistoricalData
 * @extends Neo.data.Model
 */
class HistoricalData extends _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        className: 'Covid.model.HistoricalData',

        fields: [{
            name: 'active', // does not exist in the api => cases - deaths - recovered
            type: 'int'
        }, {
            name: 'cases',
            type: 'int'
        }, {
            name: 'date',
            type: 'string' // date => 1/22/20
        }, {
            name: 'dailyActive',
            type: 'int'
        }, {
            name: 'dailyCases',
            type: 'int'
        }, {
            name: 'dailyDeaths',
            type: 'int'
        }, {
            name: 'dailyRecovered',
            type: 'int'
        }, {
            name: 'deaths',
            type: 'int'
        }, {
            name: 'recovered',
            type: 'int'
        }]
    }}
}

Neo.applyClassConfig(HistoricalData);



/***/ }),

/***/ "./apps/covid/store/Countries.mjs":
/*!****************************************!*\
  !*** ./apps/covid/store/Countries.mjs ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Countries; });
/* harmony import */ var _model_Country_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Country.mjs */ "./apps/covid/model/Country.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");



/**
 * @class Covid.store.Countries
 * @extends Neo.data.Store
 */
class Countries extends _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        className: 'Covid.store.Countries',

        keyProperty: 'country',
        model      : _model_Country_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],

        sorters: [{
            property : 'cases',
            direction: 'DESC'
        }]
    }}
}

Neo.applyClassConfig(Countries);



/***/ }),

/***/ "./apps/covid/store/HistoricalData.mjs":
/*!*********************************************!*\
  !*** ./apps/covid/store/HistoricalData.mjs ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HistoricalData; });
/* harmony import */ var _model_HistoricalData_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/HistoricalData.mjs */ "./apps/covid/model/HistoricalData.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");



/**
 * @class Covid.store.HistoricalData
 * @extends Neo.data.Store
 */
class HistoricalData extends _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        className: 'Covid.store.HistoricalData',

        keyProperty: 'date',
        model      : _model_HistoricalData_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],

        sorters: [{
            property : 'date',
            direction: 'DESC'
        }]
    }}
}

Neo.applyClassConfig(HistoricalData);



/***/ }),

/***/ "./apps/covid/view/AttributionComponent.mjs":
/*!**************************************************!*\
  !*** ./apps/covid/view/AttributionComponent.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AttributionComponent; });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class Covid.view.AttributionComponent
 * @extends Neo.component.Base
 */
class AttributionComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Covid.view.AttributionComponent'
         * @protected
         */
        className: 'Covid.view.AttributionComponent',
        /**
         * @member {String[]} cls=['covid-attribution-component']
         * @protected
         */
        cls: ['covid-attribution-component'],
        /**
         * @member {Object} vdom
         */
        vdom: {
            tag  : 'div',
            style: {margin: '20px'},
            cn   : [{
                tag : 'h2',
                html: 'Attribution'
            },
            {
                tag: 'ul',
                cn: [
                    {tag: 'li', html: 'The logos were created by <a target="_blank" href="https://www.driefmeier.com/">Sebastian Driefmeier</a>. Thank you!'},
                    {tag: 'li', html: ['The logos are based on the image from <a target="_blank" href="https://phil.cdc.gov/Details.aspx?pid=23312">CDC Public Health Image Library (PHIL)</a>,</br>',
                        'so credits to the content providers CDC/ Alissa Eckert, MS; Dan Higgins, MAMS.'].join('')},
                    {tag: 'li', html: 'Data provided by: <a target="_blank" href="https://github.com/NovelCOVID/API">NovelCOVID / API</a>.'},
                    {tag: 'li', html: 'Country Flag Icons made by <a target="_blank" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a target="_blank" href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>.'},
                    {tag: 'li', html: 'Charts got created with <a target="_blank" href="https://www.amcharts.com/docs/v4/">amCharts 4</a>.'},
                    {tag: 'li', html: 'The App is created with the webworkers driven UI framework <a target="_blank" href="https://github.com/neomjs/neo">neo.mjs</a>.'},
                    {tag: 'li', html: 'The Mapbox GL Map is based on <a target="_blank" href="https://docs.mapbox.com/mapbox-gl-js/api/">Mapbox GL JS</a>.'},
                    {tag: 'li', html: 'The Map & Heatmap styles are strongly inspired by <a target="_blank" href="https://blog.mapbox.com/visualizing-the-progression-of-the-2019-ncov-outbreak-66763eb59e79">Visualizing the progression of the 2019-nCoV outbreak</a>.'}
                ]
            }]
        }
    }}
}

Neo.applyClassConfig(AttributionComponent);



/***/ }),

/***/ "./apps/covid/view/FooterContainer.mjs":
/*!*********************************************!*\
  !*** ./apps/covid/view/FooterContainer.mjs ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterContainer; });
/* harmony import */ var _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");


/**
 * @class Covid.view.FooterContainer
 * @extends Neo.container.Base
 */
class FooterContainer extends _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Covid.view.FooterContainer'
         * @protected
         */
        className: 'Covid.view.FooterContainer',
        /**
         * @member {Number} height=20
         */
        height: 25,
        /**
         * @member {Object} layout={ntype: 'hbox'}
         */
        layout: {ntype: 'hbox'},
        /**
         * @member {String} reference='footer'
         */
        reference: 'footer',
        /**
         * @member {Object} style={overflow: 'visible'}
         */
        style: {overflow: 'visible'},
        /**
         * @member {Object} itemDefaults
         */
        itemDefaults: {
            ntype: 'component',
            cls  : ['neo-link-color'],
            style: {fontSize: '13px', padding: '10px', paddingTop: 0}
        },
        /**
         * @member {Array} items
         */
        items: [{
            html : 'App created with <a target="_blank" href="https://github.com/neomjs/neo">neo.mjs</a>.'
        }, {
            flex: 1
        }, {
            html : 'Data provided by <a target="_blank" href="https://github.com/disease-sh/API">disease.sh/API</a>.'
        }, {
            flex: 1
        }, {
            html : 'Country Flag Icons made by <a target="_blank" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a target="_blank" href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>.'
        }, {
            ntype  : 'button',
            cls    : ['neo-button'],
            handler: 'onRemoveFooterButtonClick',
            height : 24,
            style  : {margin: 0, marginRight: '10px', marginTop: '-5px'},
            text   : 'Remove Footer'
        }]
    }}
}

Neo.applyClassConfig(FooterContainer);



/***/ }),

/***/ "./apps/covid/view/GalleryContainer.mjs":
/*!**********************************************!*\
  !*** ./apps/covid/view/GalleryContainer.mjs ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GalleryContainer; });
/* harmony import */ var _node_modules_neo_mjs_src_component_BoxLabel_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/component/BoxLabel.mjs */ "./node_modules/neo.mjs/src/component/BoxLabel.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _country_Gallery_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country/Gallery.mjs */ "./apps/covid/view/country/Gallery.mjs");
/* harmony import */ var _GalleryContainerController_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GalleryContainerController.mjs */ "./apps/covid/view/GalleryContainerController.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Panel.mjs */ "./node_modules/neo.mjs/src/container/Panel.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/form/field/Range.mjs */ "./node_modules/neo.mjs/src/form/field/Range.mjs");







/**
 * @class Covid.view.GalleryContainer
 * @extends Neo.container.Base
 */
class GalleryContainer extends _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Covid.view.GalleryContainer'
         * @protected
         */
        className: 'Covid.view.GalleryContainer',
        /**
         * @member {String[]} cls=['neo-gallery-maincontainer', 'neo-viewport']
         */
        cls: ['neo-gallery-maincontainer', 'neo-viewport'],
        /**
         * @member {Neo.controller.Component|null} controller=GalleryContainerController
         */
        controller: _GalleryContainerController_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
        /**
         * @member {Neo.component.Gallery|null} gallery=null
         */
        gallery: null,
        /**
         * @member {Object|null} galleryConfig=null
         */
        galleryConfig: null,
        /**
         * @member {Object|null} layout={ntype: 'hbox', align: 'stretch'}
         */
        layout: {ntype: 'hbox', align: 'stretch'},
        /**
         * @member {Object[]|null} items
         */
        items: [{
            ntype : 'container',
            flex  : 1,
            layout: 'fit',
            items : []
        }, {
            module   : _node_modules_neo_mjs_src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            cls      : ['neo-configuration-panel', 'neo-panel', 'neo-container'],
            layout   : {ntype: 'vbox', align: 'stretch'},
            reference: 'controls-panel',
            style    : {backgroundColor: '#2b2b2b'},
            width    : 260,

            containerConfig: {
                style: {overflowY: 'scroll'}
            },

            headers: [{
                dock: 'top',
                items: [{
                    ntype  : 'button',
                    handler: 'onCollapseButtonClick',
                    text   : 'X'
                }, {
                    ntype: 'label',
                    text : 'Gallery Controls'
                }]
            }],

            itemDefaults: {
                flex         : '0 1 auto',
                labelWidth   : '110px',
                style        : {padding: '10px'},
                useInputEvent: true
            },

            items: [{
                module   : _node_modules_neo_mjs_src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
                labelText: 'Translate X',
                maxValue : 5000,
                minValue : 0,
                name     : 'translateX',
                value    : 0,
                listeners: {
                    change : 'onRangefieldChange',
                    mounted: 'onRangefieldMounted'
                }
            }, {
                module   : _node_modules_neo_mjs_src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
                labelText: 'Translate Y',
                maxValue : 1500,
                minValue : -1500,
                name     : 'translateY',
                value    : 0,
                listeners: {
                    change: 'onRangefieldChange'
                }
            }, {
                module   : _node_modules_neo_mjs_src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
                labelText: 'Translate Z',
                maxValue : 550,
                minValue : -4500,
                name     : 'translateZ',
                value    : 0,
                listeners: {
                    change : 'onRangefieldChange',
                    mounted: 'onRangefieldMounted'
                }
            }, {
                module   : _node_modules_neo_mjs_src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
                labelText: 'Amount Rows',
                maxValue : 15,
                minValue : 1,
                name     : 'amountRows',
                value    : 3,
                listeners: {
                    change: 'onRangefieldChange'
                }
            }, {
                ntype  : 'button',
                handler: 'onOrderButtonClick',
                text   : 'Order by Row',
                style  : {margin: '20px'}
            }, {
                ntype: 'label',
                text : 'Sort By:'
            }, {
                ntype : 'container',
                layout: {ntype: 'hbox', align: 'stretch'},
                style : {minHeight: '134px', padding: '0'},

                items : [{
                    ntype : 'container',
                    layout: {ntype: 'vbox', align: 'stretch'},

                    itemDefaults: {
                        ntype  : 'button',
                        handler: 'onSortButtonClick'
                    },

                    items: [{
                        field: 'cases',
                        text : 'Cases',
                        style: {margin: '10px', marginTop: '0'}
                    }, {
                        field: 'deaths',
                        text : 'Deaths',
                        style: {margin: '10px', marginBottom: '10px', marginTop: 0}
                    }, {
                        field: 'country',
                        text : 'Country',
                        style: {margin: '10px', marginTop: 0}
                    }, {
                        field: 'recovered',
                        text : 'Recovered',
                        style: {margin: '10px', marginTop: 0}
                    }]
                }, {
                    ntype : 'container',
                    layout: {ntype: 'vbox', align: 'stretch'},

                    itemDefaults: {
                        ntype  : 'button',
                        handler: 'onSortButtonClick'
                    },

                    items: [{
                        field: 'todayCases',
                        text : 'Cases today',
                        style: {margin: '10px', marginTop: '0'}
                    }, {
                        field: 'todayDeaths',
                        text : 'Deaths today',
                        style: {margin: '10px', marginBottom: '10px', marginTop: 0}
                    }, {
                        field: 'critical',
                        text : 'Critical',
                        style: {margin: '10px', marginBottom: '43px', marginTop: 0}
                    }]
                }]
            }, {
                module: _node_modules_neo_mjs_src_component_BoxLabel_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
                text  : [
                    '<b>Navigation Concept</b>',
                    '<p>You can use the Arrow Keys to walk through the items.</p>'
                ].join('')
            }]
        }]
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        const me = this;

        me.gallery = Neo.create({
            module   : _country_Gallery_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            reference: 'gallery',
            ...me.galleryConfig || {}
        });

        me.items[0].items.push(me.gallery);
    }

    /**
     *
     */
    destroy(...args) {
        this.gallery = null;
        super.destroy(...args);
    }
}

Neo.applyClassConfig(GalleryContainer);



/***/ }),

/***/ "./apps/covid/view/GalleryContainerController.mjs":
/*!********************************************************!*\
  !*** ./apps/covid/view/GalleryContainerController.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GalleryContainerController; });
/* harmony import */ var _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");


/**
 * @class Covid.view.GalleryContainerController
 * @extends Neo.controller.Component
 */
class GalleryContainerController extends _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Covid.view.GalleryContainerController'
         * @protected
         */
        className: 'Covid.view.GalleryContainerController',
        /**
         * @member {Neo.component.Gallery|null} gallery_=null
         * @protected
         */
        gallery_: null
    }}

    /**
     * Triggered when accessing the gallery config
     * @param {Neo.component.Gallery|null} value
     * @protected
     */
    beforeGetGallery(value) {
        if (!value) {
            this._gallery = value = this.getReference('gallery');
        }

        return value;
    }

    /**
     * {Object} data
     */
    onCollapseButtonClick(data) {
        const panel  = this.getReference('controls-panel'),
              expand = panel.width === 40;

        panel.width = expand ? 250 : 40;

        data.component.text = expand ? 'X' : '+';
    }

    /**
     *
     * @param {Object} data
     */
    onOrderButtonClick(data) {
        const gallery    = this.gallery,
              orderByRow = !gallery.orderByRow;

        data.component.text = orderByRow === true ? 'Order By Column' : 'Order by Row';

        gallery.orderByRow = orderByRow;
    }

    /**
     *
     * @param {Object} data
     */
    onRangefieldChange(data) {
        this.gallery[data.component.name] = data.value;
    }

    /**
     *
     * @param {String} id
     */
    onRangefieldMounted(id) {
        const field = Neo.getComponent(id);

        this.gallery.on('change' + Neo.capitalize(field.name), function(value) {
            value = Math.min(Math.max(value, field.minValue), field.maxValue);
            field.value = value;
        });
    }

    /**
     *
     * @param {Object} data
     */
    onSortButtonClick(data) {
        this.gallery.store.sorters = [{
            property : data.component.field,
            direction: 'DESC'
        }];
    }
}

Neo.applyClassConfig(GalleryContainerController);



/***/ }),

/***/ "./apps/covid/view/HeaderContainer.mjs":
/*!*********************************************!*\
  !*** ./apps/covid/view/HeaderContainer.mjs ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderContainer; });
/* harmony import */ var _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _store_Countries_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/Countries.mjs */ "./apps/covid/store/Countries.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_form_field_Select_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/form/field/Select.mjs */ "./node_modules/neo.mjs/src/form/field/Select.mjs");




/**
 * @class Covid.view.HeaderContainer
 * @extends Neo.container.Base
 */
class HeaderContainer extends _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Covid.view.HeaderContainer'
         * @protected
         */
        className: 'Covid.view.HeaderContainer',
        /**
         * @member {String[]} cls=['covid-header-container']
         */
        cls: ['covid-header-container'],
        /**
         * @member {Number} height=70
         */
        height: 120,
        /**
         * @member {Object} layout={ntype: 'hbox', align: 'stretch'}
         */
        layout: {ntype: 'hbox', align: 'stretch'},
        /**
         * @member {Array} items
         */
        items: [{
            ntype    : 'component',
            minWidth : 267,
            reference: 'logo',
            style    : {margin: '10px'},
            width    : 267,

            vdom: {
                tag: 'img',
                src: 'https://raw.githubusercontent.com/neomjs/pages/master/resources/images/apps/covid/covid_logo_dark.jpg'
            }
        }, {
            ntype : 'container',
            layout: {ntype: 'vbox', align: 'stretch'},
            items : [{
                ntype    : 'container',
                height   : 65,
                layout   : {ntype: 'hbox'},
                reference: 'total-stats',

                itemDefaults: {
                    ntype: 'component'
                },

                items: [{
                    cls : ['covid-numberbox'],
                    vdom: {
                        cn: [
                            {cls: ['covid-numberbox-title',  'cases'],  html:'Cases'},
                            {cls: ['covid-numberbox-number', 'cases']}
                        ]
                    }
                }, {
                    cls : ['covid-numberbox'],
                    vdom: {
                        cn: [
                            {cls: ['covid-numberbox-title',  'active'], html:'Active'},
                            {cls: ['covid-numberbox-number', 'active']}
                        ]
                    }
                }, {
                    cls : ['covid-numberbox'],
                    vdom: {
                        cn: [
                            {cls: ['covid-numberbox-title',  'recovered'], html:'Recovered'},
                            {cls: ['covid-numberbox-number', 'recovered']}
                        ]
                    }
                }, {
                    cls : ['covid-numberbox'],
                    vdom: {
                        cn: [
                            {cls: ['covid-numberbox-title',  'deaths'], html:'Deaths'},
                            {cls: ['covid-numberbox-number', 'deaths']}
                        ]
                    }
                }, {
                    flex: 1
                }, {
                    style: {padding: '10px'},
                    width: 125,
                    vdom : {
                        cn: [{
                            tag              : 'a',
                            'aria-label'     : 'Star neomjs/neo on GitHub',
                            cls              : ['github-button'],
                            'data-show-count': 'true',
                            'data-size'      : 'large',
                            href             : 'https://github.com/neomjs/neo',
                            html             : 'Star'
                        }]
                    }
                }, {
                    style: {padding: '10px'},
                    width: 105,
                    vdom : {
                        cn: [{
                            tag              : 'a',
                            'aria-label'     : 'Sponsor @tobiu on GitHub',
                            cls              : ['github-button'],
                            'data-icon'      : 'octicon-heart',
                            'data-size'      : 'large',
                            href             : 'https://github.com/sponsors/tobiu',
                            html             : 'Sponsor'
                        }]
                    }
                }]
            }, {
                ntype : 'container',
                layout: {ntype: 'hbox'},

                itemDefaults: {
                    ntype: 'component'
                },

                items : [{
                    module       : _node_modules_neo_mjs_src_form_field_Select_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
                    displayField : 'country',
                    flex         : 'none',
                    height       : 25,
                    labelPosition: 'inline',
                    labelText    : 'Select a Country',
                    minWidth     : 140,
                    reference    : 'country-field',
                    style        : {marginTop: '15px'},
                    width        : 200,

                    listeners: {
                        clear : 'onCountryFieldClear',
                        select: 'onCountryFieldSelect'
                    },

                    store: {
                        module : _store_Countries_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
                        sorters: [{
                            property : 'country',
                            direction: 'ASC'
                        }]
                    }
                }, {
                    ntype  : 'button',
                    flex   : 'none',
                    handler: 'onSwitchThemeButtonClick',
                    height : 25,
                    iconCls: 'fa fa-sun',
                    style  : {marginLeft: '10px', marginTop: '15px'},
                    text   : 'Theme Light'
                }, {
                    ntype  : 'button',
                    flex   : 'none',
                    handler: 'onReloadDataButtonClick',
                    height : 25,
                    iconCls: 'fa fa-sync-alt',
                    style  : {marginLeft: '10px', marginTop: '15px'},
                    text   : 'Reload Data'
                },{
                    ntype    : 'label',
                    height   : 25,
                    reference: 'last-update',
                    style    : {marginLeft: '10px', marginTop: '18px'},
                    text     : ''
                }]
            }]
        }]
    }}
}

Neo.applyClassConfig(HeaderContainer);



/***/ }),

/***/ "./apps/covid/view/HelixContainer.mjs":
/*!********************************************!*\
  !*** ./apps/covid/view/HelixContainer.mjs ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HelixContainer; });
/* harmony import */ var _node_modules_neo_mjs_src_component_BoxLabel_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/component/BoxLabel.mjs */ "./node_modules/neo.mjs/src/component/BoxLabel.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _country_Helix_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country/Helix.mjs */ "./apps/covid/view/country/Helix.mjs");
/* harmony import */ var _HelixContainerController_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HelixContainerController.mjs */ "./apps/covid/view/HelixContainerController.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Panel.mjs */ "./node_modules/neo.mjs/src/container/Panel.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/form/field/Range.mjs */ "./node_modules/neo.mjs/src/form/field/Range.mjs");







/**
 * @class Covid.view.HelixContainer
 * @extends Neo.container.Base
 */
class HelixContainer extends _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Covid.view.HelixContainer'
         * @protected
         */
        className: 'Covid.view.HelixContainer',
        /**
         * @member {String[]} cls=['neo-helix-maincontainer', 'neo-viewport']
         */
        cls: ['neo-helix-maincontainer', 'neo-viewport'],
        /**
         * @member {Neo.controller.Component|null} controller=HelixContainerController
         */
        controller: _HelixContainerController_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
        /**
         * @member {Neo.component.Helix|null} helix=null
         */
        helix: null,
        /**
         * @member {Object|null} helixConfig=null
         */
        helixConfig: null,
        /**
         * @member {Object|null} layout={ntype: 'hbox', align: 'stretch'}
         */
        layout: {ntype: 'hbox', align: 'stretch'},
        /**
         * @member {Object[]|null} items
         */
        items: [{
            ntype : 'container',
            flex  : 1,
            items : [],
            layout: 'fit'
        }, {
            module   : _node_modules_neo_mjs_src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            cls      : ['neo-configuration-panel', 'neo-panel', 'neo-container'],
            layout   : {ntype: 'vbox', align: 'stretch'},
            reference: 'controls-panel',
            style    : {backgroundColor: '#2b2b2b'},
            width    : 250,

            containerConfig: {
                style: {overflowY: 'scroll'}
            },

            headers: [{
                dock : 'top',
                items: [{
                    ntype  : 'button',
                    handler: 'onCollapseButtonClick',
                    text   : 'X'
                }, {
                    ntype: 'label',
                    text : 'Helix Controls'
                }]
            }],

            itemDefaults: {
                ntype        : 'rangefield',
                flex         : '0 1 auto',
                labelWidth   : '100px',
                style        : {padding: '10px'},
                useInputEvent: true,
                listeners    : {
                    change: 'onRangefieldChange'
                }
            },

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
                eventName: 'changeTranslateZ',
                labelText: 'Translate Z',
                maxValue : 4500,
                minValue : -4500,
                name     : 'translateZ',
                value    : -1500,
                listeners: {
                    change : 'onRangefieldChange',
                    mounted: 'onRangefieldMounted'
                }
            }, {
                labelText : 'Delta Y',
                labelAlign: 'top',
                maxValue  : 600,
                minValue  : -600,
                name      : 'deltaY',
                value     : 70
            }, {
                eventName: 'changeRotation',
                labelText: 'Rotate',
                minValue : -720,
                maxValue : 720,
                name     : 'rotationAngle',
                value    : 0,
                listeners: {
                    change : 'onRangefieldChange',
                    mounted: 'onRangefieldMounted'
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
                value    : 80 // todo: multi-thumb slider [30, 80]
            }, {
                labelText: 'Min Opacity',
                name     : 'minOpacity',
                minValue : 0,
                maxValue : 100,
                value    : 30
            }, {
                ntype     : 'button',
                handler  : 'onFlipItemsButtonClick',
                text      : 'Flip Items',
                listeners: {},
                style    : {margin: '20px'}
            }, {
                ntype: 'label',
                text : 'Sort By:'
            }, {
                ntype : 'container',
                layout: {ntype: 'hbox', align: 'stretch'},
                style : {minHeight: '134px', padding: '0'},

                items: [{
                    ntype : 'container',
                    layout: {ntype: 'vbox', align: 'stretch'},

                    itemDefaults: {
                        ntype  : 'button',
                        handler: 'onSortButtonClick'
                    },

                    items: [{
                        field: 'cases',
                        text : 'Cases',
                        style: {margin: '10px', marginTop: '0'}
                    }, {
                        field: 'deaths',
                        text : 'Deaths',
                        style: {margin: '10px', marginBottom: '10px', marginTop: 0}
                    }, {
                        field: 'country',
                        text : 'Country',
                        style: {margin: '10px', marginTop: 0}
                    }, {
                        field: 'recovered',
                        text : 'Recovered',
                        style: {margin: '10px', marginTop: 0}
                    }]
                }, {
                    ntype : 'container',
                    layout: {ntype: 'vbox', align: 'stretch'},

                    itemDefaults: {
                        ntype  : 'button',
                        handler: 'onSortButtonClick'
                    },

                    items: [{
                        field: 'todayCases',
                        text : 'Cases today',
                        style: {margin: '10px', marginTop: '0'}
                    }, {
                        field: 'todayDeaths',
                        text : 'Deaths today',
                        style: {margin: '10px', marginBottom: '10px', marginTop: 0}
                    }, {
                        field: 'critical',
                        text : 'Critical',
                        style: {margin: '10px', marginBottom: '43px', marginTop: 0}
                    }]
                }]
            }, {
                ntype    : 'button',
                handler  : 'onFollowSelectionButtonClick',
                iconCls  : 'fa fa-square',
                text     : 'Follow Selection',
                listeners: {},
                style: {
                    margin      : '20px',
                    marginBottom: '10px'
                }
            }, {
                module: _node_modules_neo_mjs_src_component_BoxLabel_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
                text  : [
                    '<b>Navigation Concept</b>',
                    '<p>Click on an item to select it. Afterwards you can use the Arrow Keys to walk through the items.</p>',
                    '<p>Hit the Space Key to rotate the currently selected item to the front.</p>',
                    '<p>Hit the Enter Key to expand the currently selected item.</p>'
                ].join('')
            }]
        }]
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        const me = this;

        me.helix = Neo.create({
            module   : _country_Helix_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            reference: 'helix',
            ...me.helixConfig || {}
        });

        me.items[0].items.push(me.helix);
    }
}

Neo.applyClassConfig(HelixContainer);



/***/ }),

/***/ "./apps/covid/view/HelixContainerController.mjs":
/*!******************************************************!*\
  !*** ./apps/covid/view/HelixContainerController.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HelixContainerController; });
/* harmony import */ var _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");


/**
 * @class Covid.view.HelixContainerController
 * @extends Neo.controller.Component
 */
class HelixContainerController extends _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Covid.view.HelixContainerController'
         * @protected
         */
        className: 'Covid.view.HelixContainerController',
        /**
         * @member {Neo.component.Helix|null} helix_=null
         * @protected
         */
        helix_: null
    }}

    /**
     * Triggered when accessing the helix config
     * @param {Neo.component.Helix|null} value
     * @protected
     */
    beforeGetHelix(value) {
        if (!value) {
            this._helix = value = this.getReference('helix');
        }

        return value;
    }

    /**
     * {Object} data
     */
    onCollapseButtonClick(data) {
        const panel  = this.getReference('controls-panel'),
              expand = panel.width === 40;

        panel.width = expand ? 250 : 40;

        data.component.text = expand ? 'X' : '+';
    }

    /**
     * {Object} data
     */
    onFlipItemsButtonClick(data) {
        this.helix.flipped = !this.helix.flipped;
    }

    /**
     * {Object} data
     */
    onFollowSelectionButtonClick(data) {
        const button = data.component;

        if (button.iconCls === 'fa fa-square') {
            this.helix.followSelection = true;
            button.iconCls = 'fa fa-check-square';
        } else {
            this.helix.followSelection = false;
            button.iconCls = 'fa fa-square';
        }
    }

    /**
     *
     * @param {Object} data
     */
    onRangefieldChange(data) {
        const name = data.component.name;

        if (['deltaY', 'maxOpacity', 'minOpacity'].includes(name)) {
            data.value /= 100;
        }

        this.helix[name] = data.value;
    }

    /**
     *
     * @param {String} id
     */
    onRangefieldMounted(id) {
        const field = Neo.getComponent(id);

        this.helix.on(field.eventName, function(value) {
            value = Math.min(Math.max(value, field.minValue), field.maxValue);
            field.value = value;
        });
    }

    /**
     *
     * @param {Object} data
     */
    onSortButtonClick(data) {
        this.helix.store.sorters = [{
            property : data.component.field,
            direction: 'DESC'
        }];
    }
}

Neo.applyClassConfig(HelixContainerController);



/***/ }),

/***/ "./apps/covid/view/MainContainer.mjs":
/*!*******************************************!*\
  !*** ./apps/covid/view/MainContainer.mjs ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _AttributionComponent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AttributionComponent.mjs */ "./apps/covid/view/AttributionComponent.mjs");
/* harmony import */ var _FooterContainer_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterContainer.mjs */ "./apps/covid/view/FooterContainer.mjs");
/* harmony import */ var _GalleryContainer_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GalleryContainer.mjs */ "./apps/covid/view/GalleryContainer.mjs");
/* harmony import */ var _HeaderContainer_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderContainer.mjs */ "./apps/covid/view/HeaderContainer.mjs");
/* harmony import */ var _HelixContainer_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HelixContainer.mjs */ "./apps/covid/view/HelixContainer.mjs");
/* harmony import */ var _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MainContainerController.mjs */ "./apps/covid/view/MainContainerController.mjs");
/* harmony import */ var _mapboxGl_Container_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapboxGl/Container.mjs */ "./apps/covid/view/mapboxGl/Container.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/tab/Container.mjs */ "./node_modules/neo.mjs/src/tab/Container.mjs");
/* harmony import */ var _TableContainer_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TableContainer.mjs */ "./apps/covid/view/TableContainer.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");
/* harmony import */ var _WorldMapContainer_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./WorldMapContainer.mjs */ "./apps/covid/view/WorldMapContainer.mjs");












/**
 * @class Covid.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_9__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Covid.view.MainContainer'
         * @protected
         */
        className: 'Covid.view.MainContainer',
        /**
         * @member {Boolean} autoMount=true
         */
        autoMount: true,
        /**
         * @member {Array} cls=['covid-viewport', 'neo-viewport']
         */
        cls: ['covid-viewport', 'neo-viewport'],
        /**
         * @member {Neo.controller.Component} controller=MainContainerController
         */
        controller: _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
        /**
         * @member {Array} items
         */
        items: [_HeaderContainer_mjs__WEBPACK_IMPORTED_MODULE_3__["default"], {
            module   : _node_modules_neo_mjs_src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_7__["default"],
            flex     : 1,
            reference: 'tab-container',
            style    : {margin: '10px', marginTop: 0},

            items: [{
                module         : _TableContainer_mjs__WEBPACK_IMPORTED_MODULE_8__["default"],
                reference      : 'table-container',
                tabButtonConfig: {
                    iconCls: 'fa fa-table',
                    route  : 'mainview=table',
                    text   : 'Table'
                }
            }, {
                module         : _mapboxGl_Container_mjs__WEBPACK_IMPORTED_MODULE_6__["default"],
                tabButtonConfig: {
                    iconCls: 'fa fa-globe-americas',
                    route  : 'mainview=mapboxglmap',
                    text   : 'Mapbox GL Map'
                }
            }, {
                module         : _WorldMapContainer_mjs__WEBPACK_IMPORTED_MODULE_10__["default"],
                tabButtonConfig: {
                    iconCls: 'fa fa-globe-americas',
                    route  : 'mainview=worldmap',
                    text   : 'World Map'
                }
            }, {
                module         : _GalleryContainer_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
                tabButtonConfig: {
                    iconCls: 'fa fa-images',
                    route  : 'mainview=gallery',
                    text   : 'Gallery'
                }
            }, {
                module         : _HelixContainer_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
                tabButtonConfig: {
                    iconCls: 'fa fa-dna',
                    route  : 'mainview=helix',
                    text   : 'Helix'
                }
            }, {
                module         : _AttributionComponent_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
                reference      : 'attribution',
                tabButtonConfig: {
                    iconCls: 'fa fa-copyright',
                    route  : 'mainview=attribution',
                    text   : 'Attribution'
                }
            }]
        }, _FooterContainer_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]],
        /**
         * @member {Object} layout={ntype: 'vbox', align: 'stretch'}
         */
        layout: {ntype: 'vbox', align: 'stretch'}
    }}
}

Neo.applyClassConfig(MainContainer);



/***/ }),

/***/ "./apps/covid/view/MainContainerController.mjs":
/*!*****************************************************!*\
  !*** ./apps/covid/view/MainContainerController.mjs ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainerController; });
/* harmony import */ var _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _Util_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util.mjs */ "./apps/covid/Util.mjs");




/**
 * @class Covid.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Covid.view.MainContainerController'
         * @protected
         */
        className: 'Covid.view.MainContainerController',
        /**
         * @member {String} ntype='maincontainer-controller'
         * @protected
         */
        ntype: 'maincontainer-controller',
        /**
         * @member {Number} activeMainTabIndex=0
         */
        activeMainTabIndex: 0,
        /**
         * @member {String} apiSummaryUrl='https://disease.sh/v2/all'
         */
        apiSummaryUrl: 'https://disease.sh/v2/all',
        /**
         * @member {String} apiUrl='https://disease.sh/v2/countries'
         */
        apiUrl: 'https://disease.sh/v2/countries',
        /**
         * @member {Object|null} countryRecord=null
         */
        countryRecord: null,
        /**
         * @member {Object[]|null} data=null
         */
        data: null,
        /**
         * @member {String[]} mainTabs=['table', 'mapboxglmap', 'worldmap', 'gallery', 'helix', 'attribution']
         * @protected
         */
        mainTabs: ['table','mapboxglmap', 'worldmap', 'gallery', 'helix', 'attribution'],
        /**
         * Flag to only load the map once onHashChange, but always on reload button click
         * @member {Boolean} mapboxglMapHasData=false
         * @protected
         */
        mapboxglMapHasData: false,
        /**
         * @member {Object} summaryData=null
         */
        summaryData: null,
        /**
         * Flag to only load the map once onHashChange, but always on reload button click
         * @member {Boolean} worldMapHasData=false
         * @protected
         */
        worldMapHasData: false
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        const me = this;

        me.loadData();
        me.loadSummaryData();

        me.view.on('mounted', me.onMainViewMounted, me);
    }

    /**
     *
     * @param {Object[]} data
     */
    addStoreItems(data) {
        const me           = this,
              countryStore = me.getReference('country-field').store,
              reference    = me.mainTabs[me.activeMainTabIndex],
              activeTab    = me.getReference(reference);

        // worldometer added world as a country
        // might get removed by the NovelCovid API
        if (data[0] && data[0].country === 'World') {
            const worldData = data.shift();
            console.log(worldData);
        }

        data.forEach(item => {
            if (item.country.includes('"')) {
                item.country = item.country.replace('"', "\'");
            }

            item.casesPerOneMillion = item.casesPerOneMillion > item.cases ? 'N/A' : item.casesPerOneMillion || 0;
            item.infected           = item.casesPerOneMillion;
        });

        me.data = data;

        if (countryStore.getCount() < 1) {
            me.getReference('country-field').store.data = data;
        }

        if (['gallery', 'helix', 'table'].includes(reference)) {
            activeTab.store.data = data;
        }

        else if (reference === 'mapboxglmap') {
            me.getReference('mapboxglmap').data = data;
            me.mapboxglMapHasData = true;
        }

        else if (reference === 'worldmap') {
            activeTab.loadData(data);
            me.worldMapHasData = true;
        }
    }

    /**
     *
     * @param {Object} data
     * @param {Number} data.active
     * @param {Number} data.cases
     * @param {Number} data.deaths
     * @param {Number} data.recovered
     * @param {Number} data.updated // timestamp
     */
    applySummaryData(data) {
        let me        = this,
            container = me.getReference('total-stats'),
            vdom      = container.vdom;

        me.summaryData = data;

        vdom.cn[0].cn[1].html = _Util_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].formatNumber({value: data.cases});
        vdom.cn[1].cn[1].html = _Util_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].formatNumber({value: data.active});
        vdom.cn[2].cn[1].html = _Util_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].formatNumber({value: data.recovered});
        vdom.cn[3].cn[1].html = _Util_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].formatNumber({value: data.deaths});

        container.vdom = vdom;

        container = me.getReference('last-update');
        vdom      = container.vdom;

        vdom.html = 'Last Update: ' + new Intl.DateTimeFormat('default', {
            hour  : 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }).format(new Date(data.updated));

        container.vdom = vdom;
    }

    /**
     *
     * @param {Object} record
     */
    clearCountryField(record) {
        this.getReference('country-field').clear();
    }

    /**
     *
     * @param {Object} hashObject
     * @param {String} hashObject.mainview
     * @returns {Number}
     */
    getTabIndex(hashObject) {
        if (!hashObject || !hashObject.mainview) {
            return 0;
        }

        return this.mainTabs.indexOf(hashObject.mainview);
    }

    /**
     *
     * @param {Number} tabIndex
     * @returns {Neo.component.Base}
     */
    getView(tabIndex) {
        return this.getReference(this.mainTabs[tabIndex]);
    }

    /**
     *
     */
    loadData() {
        const me = this;

        fetch(me.apiUrl)
            .then(response => response.json())
            .then(data => me.addStoreItems(data))
            .catch(err => console.log('Can’t access ' + me.apiUrl, err));
    }

    /**
     *
     */
    loadSummaryData() {
        const me = this;

        fetch(me.apiSummaryUrl)
            .then(response => response.json())
            .then(data => me.applySummaryData(data))
            .catch(err => console.log('Can’t access ' + me.apiSummaryUrl, err));

        setTimeout(() => {
            if (!me.summaryData) {
                me.onLoadSummaryDataFail();
            }
        }, 2000);
    }

    /**
     *
     */
    onCountryFieldClear() {
        this.countryRecord = null;

        Neo.Main.editRoute({
            country: null
        });
    }

    /**
     *
     * @param {Object} data
     */
    onCountryFieldSelect(data) {
        this.countryRecord = data.record;

        Neo.Main.editRoute({
            country: data.value
        });
    }

    /**
     *
     * @param {Object} value
     * @param {Object} oldValue
     */
    onHashChange(value, oldValue) {
        let me                = this,
            activeIndex       = me.getTabIndex(value.hash),
            country           = value.hash && value.hash.country,
            countryField      = me.getReference('country-field'),
            tabContainer      = me.getReference('tab-container'),
            activeView        = me.getView(activeIndex),
            selectionModel    = activeView.selectionModel,
            delaySelection    = !me.data ? 1000 : tabContainer.activeIndex !== activeIndex ? 100 : 0,
            id;

        tabContainer.activeIndex = activeIndex;
        me.activeMainTabIndex    = activeIndex;

        if (activeView.ntype === 'helix') {
            activeView.getOffsetValues();
        }

        // todo: this will only load each store once. adjust the logic in case we want to support reloading the API

        if (me.data && activeView.store && activeView.store.getCount() < 1) {
            activeView.store.data = me.data;
            delaySelection = 500;
        }

        // todo: https://github.com/neomjs/neo/issues/483
        // quick hack. selectionModels update the vdom of the table.Container.
        // if table.View is vdom updating, this can result in a 2x rendering of all rows.
        if (delaySelection === 1000 && activeView.ntype === 'table-container') {
            delaySelection = 2000;
        }

        if (activeView.ntype === 'mapboxgl' && me.data) {
            if (!me.mapboxglMapHasData) {
                activeView.data = me.data;
                me.mapboxglMapHasData = true;
            }

            // console.log(countryField.getRecord());

            if (me.countryRecord) {
                MainContainerController.selectMapboxGlCountry(activeView, me.countryRecord);
            }

            activeView.autoResize();
        } else if (activeView.ntype === 'covid-world-map' && me.data) {
            if (!me.worldMapHasData) {
                activeView.loadData(me.data);
                me.worldMapHasData = true;
            }
        } else {
            // todo: instead of a timeout this should add a store load listener (single: true)
            setTimeout(() => {
                if (me.data) {
                    if (country) {
                        countryField.value = country;
                    } else {
                        value.country = 'all';
                    }

                    switch(activeView.ntype) {
                        case 'gallery':
                            if (country && !selectionModel.isSelected(country)) {
                                selectionModel.select(country, false);
                            }
                            break;
                        case 'helix':
                            if (country && !selectionModel.isSelected(country)) {
                                selectionModel.select(country, false);
                                activeView.onKeyDownSpace(null);
                            }
                            break;
                        case 'table-container':
                            id = selectionModel.getRowId(activeView.store.indexOf(country));

                            me.getReference('table-container').fire('countrySelect', {record: activeView.store.get(country)});

                            if (country && !selectionModel.isSelected(id)) {
                                selectionModel.select(id);
                                Neo.main.DomAccess.scrollToTableRow({id: id});
                            }
                            break;
                    }
                }
            }, delaySelection);
        }
    }

    /**
     *
     */
    onLoadSummaryDataFail() {
        const table = this.getReference('table'),
              vdom = table.vdom;

        vdom.cn[0].cn[1].cn.push({
            tag  : 'div',
            cls  : ['neo-box-label', 'neo-label'],
            html : [
                'Summary data did not arrive after 2s.</br>',
                'Please double-check if the API is offline:</br></br>',
                '<a target="_blank" href="https://disease.sh/all">NovelCOVID/API all endpoint</a></br></br>',
                'and if so please try again later.'
            ].join(''),
            style: {
                margin: '20px'
            }
        });

        table.vdom = vdom;
    }

    /**
     *
     */
    onMainViewMounted() {
        const me = this;

        Neo.main.DomAccess.addScript({
            async: true,
            defer: true,
            src  : 'https://buttons.github.io/buttons.js'
        });

        me.getReference('gallery').on('select', me.updateCountryField, me);
        me.getReference('helix')  .on('select', me.updateCountryField, me);

        me.getReference('table').on({
            deselect: me.clearCountryField,
            select  : me.updateCountryField,
            scope   : me
        });
    }

    /**
     * @param {Object} data
     */
    onReloadDataButtonClick(data) {
        this.loadData();
        this.loadSummaryData();
    }

    /**
     * @param {Object} data
     */
    onRemoveFooterButtonClick(data) {
        const me        = this,
              activeTab = me.getReference('tab-container').getActiveCard();

        me.view.remove(me.getReference('footer'), true);

        if (activeTab.ntype === 'covid-mapboxgl-container') {
            me.getReference('mapboxglmap').autoResize();
        }
    }

    /**
     * @param {Object} data
     */
    onSwitchThemeButtonClick(data) {
        let me       = this,
            button   = data.component,
            logo     = me.getReference('logo'),
            logoPath = 'https://raw.githubusercontent.com/neomjs/pages/master/resources/images/apps/covid/',
            mapView  = me.getReference('mapboxglmap'),
            vdom     = logo.vdom,
            view     = me.view,
            buttonText, cls, href, iconCls, mapViewStyle, theme;

        if (button.text === 'Theme Light') {
            buttonText   = 'Theme Dark';
            href         = '../dist/development/neo-theme-light-no-css4.css';
            iconCls      = 'fa fa-moon';
            mapViewStyle = mapView.mapboxStyleLight;
            theme        = 'neo-theme-light';
        } else {
            buttonText   = 'Theme Light';
            href         = '../dist/development/neo-theme-dark-no-css4.css';
            iconCls      = 'fa fa-sun';
            mapViewStyle = mapView.mapboxStyleDark;
            theme        = 'neo-theme-dark';
        }

        vdom.src = logoPath + (theme === 'neo-theme-dark' ? 'covid_logo_dark.jpg' : 'covid_logo_light.jpg');
        logo.vdom = vdom;


        if (Neo.config.useCss4) {
            cls = [...view.cls];

            view.cls.forEach(item => {
                if (item.includes('neo-theme')) {
                    _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, item);
                }
            });

            _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, theme);
            view.cls = cls;

            button.set({
                iconCls: iconCls,
                text   : buttonText
            });
        } else {
            Neo.main.addon.Stylesheet.swapStyleSheet({
                href: href,
                id  : 'neo-theme'
            }).then(data => {
                button.text = buttonText;
            });
        }

        mapView.mapboxStyle = mapViewStyle;
    }

    /**
     *
     * @param view
     * @param record
     */
    static selectMapboxGlCountry(view, record) {console.log(record.countryInfo.iso2);
        // https://github.com/neomjs/neo/issues/490
        // there are missing iso2&3 values on natural earth vector
        const map = {
            FRA    : ['match', ['get', 'NAME'], ['France'], true, false],
            NOR    : ['match', ['get', 'NAME'], ['Norway'], true, false],
            default: ['match', ['get', 'ISO_A3'], [record.countryInfo.iso3], true, false]
        };

        view.setFilter({
            layerId: 'ne-10m-admin-0-countries-4s7rvf',
            value  : map[record.countryInfo.iso3] || map['default']
        });
        
        view.flyTo({
            lat: record.countryInfo.lat,
            lng: record.countryInfo.long
        });

        view.zoom = 5; // todo: we could use a different value for big countries (Russia, USA,...)
    }

    /**
     *
     * @param {Object} data
     * @param {Object} data.record
     */
    updateCountryField(data) {
        Neo.Main.editRoute({
            country: data.record.country
        });
    }
}

Neo.applyClassConfig(MainContainerController);



/***/ }),

/***/ "./apps/covid/view/TableContainer.mjs":
/*!********************************************!*\
  !*** ./apps/covid/view/TableContainer.mjs ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TableContainer; });
/* harmony import */ var _node_modules_neo_mjs_src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/form/field/CheckBox.mjs */ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _country_HistoricalDataTable_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country/HistoricalDataTable.mjs */ "./apps/covid/view/country/HistoricalDataTable.mjs");
/* harmony import */ var _country_LineChartComponent_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./country/LineChartComponent.mjs */ "./apps/covid/view/country/LineChartComponent.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Panel.mjs */ "./node_modules/neo.mjs/src/container/Panel.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/tab/Container.mjs */ "./node_modules/neo.mjs/src/tab/Container.mjs");
/* harmony import */ var _country_Table_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./country/Table.mjs */ "./apps/covid/view/country/Table.mjs");
/* harmony import */ var _TableContainerController_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TableContainerController.mjs */ "./apps/covid/view/TableContainerController.mjs");









/**
 * @class Covid.view.TableContainer
 * @extends Neo.container.Base
 */
class TableContainer extends _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Covid.view.TableContainer'
         * @protected
         */
        className: 'Covid.view.TableContainer',
        /**
         * @member {Boolean} autoMount=true
         */
        autoMount: true,
        /**
         * @member {Neo.controller.Component|null} controller=TableContainerController
         */
        controller: _TableContainerController_mjs__WEBPACK_IMPORTED_MODULE_7__["default"],
        /**
         * @member {Number} historyPanelWidth=520
         * @protected
         */
        historyPanelWidth: 520,
        /**
         * @member {Neo.table.Container|null} table=null
         */
        table: null,
        /**
         * @member {Object|null} tableConfig=null
         */
        tableConfig: null,
        /**
         * @member {Object|null} layout={ntype: 'hbox', align: 'stretch'}
         */
        layout: {ntype: 'hbox', align: 'stretch'},
        /**
         * @member {Object[]|null} items
         */
        items: [{
            ntype : 'container',
            flex  : 1,
            layout: 'fit',
            items : []
        }, {
            module   : _node_modules_neo_mjs_src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            cls      : ['neo-configuration-panel', 'neo-panel', 'neo-container'],
            layout   : {ntype: 'vbox', align: 'stretch'},
            reference: 'controls-panel',
            style    : {backgroundColor: '#2b2b2b'},
            width    : '@config:historyPanelWidth',

            containerConfig: {
                flex : null,
                style: {overflowY: 'scroll'}
            },

            headers: [{
                dock: 'top',
                items: [{
                    ntype  : 'button',
                    handler: 'onCollapseButtonClick',
                    text   : 'X'
                }, {
                    ntype    : 'label',
                    reference: 'historical-data-label',
                    text     : 'Historical Data'
                }, '->', {
                    ntype  : 'button',
                    handler: 'on520pxButtonClick',
                    text   : '520px'
                }, {
                    ntype  : 'button',
                    handler: 'on800pxButtonClick',
                    text   : '800px'
                }]
            }],

            items: [{
                module: _node_modules_neo_mjs_src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
                style : {marginTop: '10px'},
                items : [{
                    ntype : 'container',
                    layout: {ntype: 'vbox', align: 'stretch'},
                    items : [{
                        ntype: 'toolbar',
                        flex : '0 1 auto',
                        items: [{
                            module    : _node_modules_neo_mjs_src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
                            checked   : true,
                            labelText : 'Logarithmic Scale',
                            labelWidth: 135,
                            reference : 'logarithmic-scale-checkbox',
                            listeners : {
                                change: 'onLogarithmicScaleChange'
                            }
                        }, {
                            module    : _node_modules_neo_mjs_src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
                            labelText : 'Daily Values',
                            style     : {marginLeft: '30px'},
                            labelWidth: 95,
                            listeners : {
                                change: 'onDailyValuesChange'
                            }
                        }]
                    }, {
                        module   : _country_LineChartComponent_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
                        flex     : 1,
                        reference: 'line-chart',
                    }],

                    tabButtonConfig: {
                        iconCls: 'fa fa-chart-line',
                        text   : 'Chart'
                    }
                }]
            }]
        }]
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        const me = this;

        me.historicalDataTable = Neo.create({
            module   : _country_HistoricalDataTable_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            reference: 'historical-data-table',

            tabButtonConfig: {
                iconCls: 'fa fa-table',
                text   : 'Table'
            },

            ...me.historicalDataTableConfig || {}
        });

        me.items[1].items[0].items.push(me.historicalDataTable);

        me.table = Neo.create({
            module   : _country_Table_mjs__WEBPACK_IMPORTED_MODULE_6__["default"],
            reference: 'table',
            ...me.tableConfig || {}
        });

        me.items[0].items.push(me.table);
    }
}

Neo.applyClassConfig(TableContainer);



/***/ }),

/***/ "./apps/covid/view/TableContainerController.mjs":
/*!******************************************************!*\
  !*** ./apps/covid/view/TableContainerController.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TableContainerController; });
/* harmony import */ var _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Covid.view.TableContainerController
 * @extends Neo.controller.Component
 */
class TableContainerController extends _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Covid.view.TableContainerController'
         * @protected
         */
        className: 'Covid.view.TableContainerController',
        /**
         * @member {String} apiBaseUrl='https://disease.sh/'
         */
        apiBaseUrl: 'https://disease.sh/',
        /**
         * @member {String} apiHistoricalDataEndpoint='historical'
         */
        apiHistoricalDataEndpoint: 'v2/historical/',
        /**
         * Number of days you want the data to go back to. Default is 30. Use all for full data set. Ex: 15, all, 24
         * @member {Number|String} apiHistoricalDataTimeRange='all'
         */
        apiHistoricalDataTimeRange: 'all',
        /**
         * Remove all records with 0 cases from the historical data (table & chart)
         * @member {Boolean} removeEmptyRecords=true
         */
        removeEmptyRecords: true,
        /**
         * @member {Object} selectedRecord=null
         */
        selectedRecord: null,
        /**
         * @member {Neo.table.Container|null} table_=null
         * @protected
         */
        table_: null
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        const me = this;

        me.view.on('countrySelect', me.onTableSelect, me);
    }

    /**
     *
     * @param {Object} data
     */
    addStoreItems(data) {
        const me        = this,
              dataArray = [],
              map       = {};

        let timeline  = data && data.timeline,
            nextItem;

        // https://github.com/NovelCOVID/API/issues/309 // different format for 'all'
        if (data && !data.timeline) {
            timeline = data;
        }

        if (timeline) {
            Object.entries(timeline.cases).forEach(([key, value]) => {
                map[key] = {date: new Date(key).toISOString(), cases: value};
            });

            Object.entries(timeline.deaths).forEach(([key, value]) => {
                if (map.hasOwnProperty(key)) {
                    map[key].deaths = value;
                } else {
                    map[key] = {date: new Date(key).toISOString(), deaths: value};
                }
            });

            if (timeline.hasOwnProperty('recovered')) {
                Object.entries(timeline.recovered).forEach(([key, value]) => {
                    if (map.hasOwnProperty(key)) {
                        map[key].recovered = value;
                    } else {
                        map[key] = {date: new Date(key).toISOString(), recovered: value};
                    }
                });
            }

            Object.entries(map).forEach(([key, value]) => {
                value.active = value.cases - value.deaths - value.recovered;
                dataArray.push(value);
            });

            if (me.removeEmptyRecords) {
                [...dataArray].forEach(item => {
                    if (item.cases === 0) {
                        _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(dataArray, item);
                    }
                });
            }

            // the array is sorted by date ASC
            Object.assign(dataArray[0], {
                dailyActive   : dataArray[0].active,
                dailyCases    : dataArray[0].cases,
                dailyDeaths   : dataArray[0].deaths,
                dailyRecovered: dataArray[0].recovered
            });

            dataArray.forEach((item, index) => {
                nextItem = dataArray[index + 1];

                if (nextItem) {
                    Object.assign(nextItem, {
                        dailyActive   : nextItem.active    - item.active,
                        dailyCases    : nextItem.cases     - item.cases,
                        dailyDeaths   : nextItem.deaths    - item.deaths,
                        dailyRecovered: nextItem.recovered - item.recovered
                    });
                }
            });

            // todo: we could only update the active tab
            me.getReference('historical-data-table').store.data = dataArray;
            me.updateLineChart(dataArray);
        }
    }

    /**
     *
     * @param {Object} record
     * @protected
     * @returns {Object}
     */
    static assignFieldsOrNull(record) {
        return {
            active        : record.active         || null,
            cases         : record.cases          || null,
            deaths        : record.deaths         || null,
            dailyActive   : record.dailyActive    || null,
            dailyCases    : record.dailyCases     || null,
            dailyDeaths   : record.dailyDeaths    || null,
            dailyRecovered: record.dailyRecovered || null,
            recovered     : record.recovered      || null
        };
    }

    /**
     * Triggered when accessing the table config
     * @param {Neo.table.Container|null} value
     * @protected
     */
    beforeGetTable(value) {
        if (!value) {
            this._table = value = this.getReference('table');
        }

        return value;
    }

    /**
     *
     * @param {String} countryName
     */
    loadHistoricalData(countryName) {
        const me      = this,
              apiPath = me.apiBaseUrl + me.apiHistoricalDataEndpoint + countryName + '?lastdays=' + me.apiHistoricalDataTimeRange;

        fetch(apiPath)
            .then(response => response.json())
            .then(data => me.addStoreItems(data))
            .catch(err => console.log('Can’t access ' + apiPath, err));
    }

    /**
     * {Object} data
     */
    on520pxButtonClick(data) {
        this.getReference('controls-panel').width = 520;
    }

    /**
     * {Object} data
     */
    on800pxButtonClick(data) {
        this.getReference('controls-panel').width = 800;
    }

    /**
     * {Object} data
     */
    onCollapseButtonClick(data) {
        const panel  = this.getReference('controls-panel'),
              expand = panel.width === 40;

        panel.width = expand ? this.view.historyPanelWidth : 40;

        data.component.text = expand ? 'X' : '+';
    }

    /**
     * {Object} data
     */
    onDailyValuesChange(data) {
        const chartId     = this.getReference('line-chart').id,
              logCheckbox = this.getReference('logarithmic-scale-checkbox'),
              value       = data.value;

        if (value) {
            logCheckbox.set({
                checked : false,
                disabled: data.value
            });
        } else {
            logCheckbox.disabled = false;
        }

        Neo.main.addon.AmCharts.setProperties({
            id        : chartId,
            properties: {
                'series.values.0.dataFields.valueY' : value ? 'dailyActive'    : 'active',
                'series.values.1.dataFields.valueY' : value ? 'dailyCases'     : 'cases',
                'series.values.2.dataFields.valueY' : value ? 'dailyDeaths'    : 'deaths',
                'series.values.3.dataFields.valueY' : value ? 'dailyRecovered' : 'recovered'
            }
        });

        Neo.main.addon.AmCharts.callMethod({
            id  : chartId,
            path: 'invalidateData'
        });
    }

    /**
     * {Object} data
     */
    onLogarithmicScaleChange(data) {
        Neo.main.addon.AmCharts.setProperty({
            id   : this.getReference('line-chart').id,
            path : 'yAxes.values.0.logarithmic',
            value: data.value
        });
    }

    /**
     * {Object} data
     * {Object} data.record
     */
    onTableSelect(data) {
        const me      = this,
              record  = data.record;

        if (data.record) {
            me.selectedRecord = {...record};
        } else {
            me.selectedRecord = null;
        }

        // removed optional chaining for now, see: https://github.com/neomjs/neo/issues/467
        me.loadHistoricalData(record && record.countryInfo && record.countryInfo.iso2 || 'all');

        me.getReference('historical-data-label').html = 'Historical Data (' + (record && record.country || 'World') + ')';
    }

    /**
     * Logarithmic Axis break for values of 0, so we need to change those to null
     * Adding the current record, since the historical data starts "yesterday"
     * @param {Object[]} dataArray
     */
    updateLineChart(dataArray) {
        let me     = this,
            record = me.selectedRecord,
            chart  = me.getReference('line-chart');

        dataArray.forEach(item => Object.assign(item, TableContainerController.assignFieldsOrNull(item)));

        if (!record) {
            record = me.getParent().summaryData;
        }

        if (record) {
            dataArray.push({
                date: new Date().toISOString(),
                ...TableContainerController.assignFieldsOrNull(record)
            });
        }

        chart.data = dataArray;
    }
}

Neo.applyClassConfig(TableContainerController);



/***/ }),

/***/ "./apps/covid/view/WorldMapComponent.mjs":
/*!***********************************************!*\
  !*** ./apps/covid/view/WorldMapComponent.mjs ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorldMapComponent; });
/* harmony import */ var _node_modules_neo_mjs_src_component_wrapper_AmChart_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/component/wrapper/AmChart.mjs */ "./node_modules/neo.mjs/src/component/wrapper/AmChart.mjs");


/**
 * @class Covid.view.WorldMapComponent
 * @extends Neo.component.wrapper.AmChart
 */
class WorldMapComponent extends _node_modules_neo_mjs_src_component_wrapper_AmChart_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Covid.view.WorldMapComponent'
         * @protected
         */
        className: 'Covid.view.WorldMapComponent',
        /**
         * @member {String} ntype='covid-world-map'
         * @protected
         */
        ntype: 'covid-world-map',
        /**
         * @member {String} chartType='MapChart'
         */
        chartType: 'MapChart',
        /**
         * @member {String[]} cls=['covid-line-chart']
         */
        cls: ['covid-world-map'],
        /**
         * @member {String} dataPath='data.series.values.0'
         */
        dataPath: 'series.values.0',
        /**
         * @member {Number} heatRulesMaxValue=15000
         */
        heatRulesMaxValue: 15000,
        /**
         * @member {String} package='am4maps'
         */
        package: 'am4maps',
        /**
         * @member {Object} chartConfig
         */
        chartConfig: {
            projection: 'Miller',
            geodata   : 'worldLow',

            series: [{
                type      : 'MapPolygonSeries',
                exclude   : ['AQ'],
                useGeodata: true,

                dataFields: {
                    value: 'active'
                },

                heatRules: [{
                    max     : '#64b5f6',
                    maxValue: '@config:heatRulesMaxValue',
                    min     : '#ffffff',
                    minValue: 0,
                    property: 'fill',
                    target  : 'mapPolygons.template'
                }],
                
                mapPolygons: {
                    tooltipText: '{name}: [bold]{value}[/]',
                    //fill       : '#74B266',

                    states: {
                        hover: {
                            properties: {
                                //fill: '#367B25'
                            }
                        }
                    }
                }
            }]
        }
    }}

    /**
     *
     * @param {Object[]} data
     */
    loadData(data) {
        const chartData = [];

        data.forEach(item => {
            chartData.push({
                active   : item.active,
                cases    : item.cases,
                critical : item.critical,
                deaths   : item.deaths,
                id       : item.countryInfo.iso2,
                name     : item.country,
                recovered: item.recovered,
            });
        });

        Neo.main.addon.AmCharts.updateData({
            data    : chartData,
            dataPath: this.dataPath,
            id      : this.id
        });
    }
}

Neo.applyClassConfig(WorldMapComponent);



/***/ }),

/***/ "./apps/covid/view/WorldMapContainer.mjs":
/*!***********************************************!*\
  !*** ./apps/covid/view/WorldMapContainer.mjs ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorldMapContainer; });
/* harmony import */ var _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/form/field/Number.mjs */ "./node_modules/neo.mjs/src/form/field/Number.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Toolbar.mjs */ "./node_modules/neo.mjs/src/container/Toolbar.mjs");
/* harmony import */ var _WorldMapComponent_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WorldMapComponent.mjs */ "./apps/covid/view/WorldMapComponent.mjs");
/* harmony import */ var _WorldMapContainerController_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WorldMapContainerController.mjs */ "./apps/covid/view/WorldMapContainerController.mjs");






/**
 * @class Covid.view.WorldMapContainer
 * @extends Neo.container.Base
 */
class WorldMapContainer extends _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Covid.view.WorldMapContainer'
         * @protected
         */
        className: 'Covid.view.WorldMapContainer',
        /**
         * @member {Neo.controller.Component} controller=WorldMapContainerController
         */
        controller: _WorldMapContainerController_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
        /**
         * @member {Object} layout={ntype: 'vbox', align: 'stretch'}
         */
        layout: {ntype: 'vbox', align: 'stretch'},
        /**
         * @member {Array} items
         */
        items: [{
            module: _node_modules_neo_mjs_src_container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            flex  : 'none',
            items : [{
                ntype    : 'label',
                reference: 'currentMapViewLabel',
                style    : {marginRight: '20px'},
                text     : 'Current view: Active'
            }, {
                module       : _node_modules_neo_mjs_src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
                clearToOriginalValue: true,
                labelPosition: 'inline',
                labelText    : 'HeatRule maxValue',
                maxValue     : 1e6,
                minValue     : 100,
                reference    : 'heatRuleField',
                stepSize     : 100,
                style        : {margin: 0},
                value        : 15000,
                width        : 150,

                listeners: {
                    change: 'onHeatRuleFieldChange'
                }
            }, '->', {
                handler: 'onSeriesButtonClick',
                series : 'cases',
                style  : {marginRight: '2px'},
                text   : '<span style="color: #bbbbbb">●</span> Cases'
            }, {
                handler: 'onSeriesButtonClick',
                series : 'active',
                style  : {marginRight: '2px'},
                text   : '<span style="color: #64b5f6">●</span> Active'
            }, {
                handler: 'onSeriesButtonClick',
                series : 'recovered',
                style  : {marginRight: '2px'},
                text   : '<span style="color: #28ca68">●</span> Recovered'
            }, {
                handler: 'onSeriesButtonClick',
                series : 'deaths',
                text   : '<span style="color: #fb6767">●</span> Deaths'
            }]
        }, {
            module   : _WorldMapComponent_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            flex     : 1,
            reference: 'worldmap'
        }]
    }}
}

Neo.applyClassConfig(WorldMapContainer);



/***/ }),

/***/ "./apps/covid/view/WorldMapContainerController.mjs":
/*!*********************************************************!*\
  !*** ./apps/covid/view/WorldMapContainerController.mjs ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorldMapContainerController; });
/* harmony import */ var _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");


/**
 * @class Covid.view.WorldMapContainerController
 * @extends Neo.controller.Component
 */
class WorldMapContainerController extends _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Covid.view.WorldMapContainerController'
         * @protected
         */
        className: 'Covid.view.WorldMapContainerController',
        /**
         * @member {Number} heatRuleChangeDelay=150
         */
        heatRuleChangeDelay: 150,
        /**
         * @member {String|null} heatRuleChangeTimeout=null
         */
        heatRuleChangeTimeout: null
    }}

    changeHeatRule(value) {
        const chartId = this.getReference('worldmap').id;

        Neo.main.addon.AmCharts.setProperty({
            id     : this.getReference('worldmap').id,
            path   : 'series.values.0.heatRules.values.0.maxValue',
            value  : value
        });

        Neo.main.addon.AmCharts.callMethod({
            id  : chartId,
            path: 'series.values.0.invalidateData'
        });
    }

    /**
     *
     * @param {Object} data
     */
    onHeatRuleFieldChange(data) {
        const me = this;

        clearTimeout(me.heatRuleChangeTimeout);

        me.heatRuleChangeTimeout = setTimeout(() => {
            me.changeHeatRule(data.value);
        }, me.heatRuleChangeDelay);
    }

    /**
     *
     * @param {Object} data
     */
    onSeriesButtonClick(data) {
        const me          = this,
              chartId     = me.getReference('worldmap').id,
              countryData = [...me.getParent().data];

        const colorMap = {
            active   : '#64b5f6',
            cases    : '#bbbbbb',
            deaths   : '#fb6767',
            recovered: '#28ca68'
        };

        Neo.main.addon.AmCharts.setProperty({
            id     : chartId,
            isColor: true,
            path   : 'series.values.0.heatRules.values.0.max',
            value  : colorMap[data.component.series]
        });

        Neo.main.addon.AmCharts.setProperty({
            id   : chartId,
            path : 'series.values.0.dataFields.value',
            value: data.component.series
        });

        Neo.main.addon.AmCharts.callMethod({
            id  : chartId,
            path: 'series.values.0.invalidateData'
        }). then(() => {
            me.getReference('currentMapViewLabel').text = 'Current view: ' + Neo.capitalize(data.component.series);

            countryData.sort((a, b) => b[data.component.series] - a[data.component.series]);

            me.getReference('heatRuleField').value = Math.ceil(countryData[9][data.component.series] / 100) * 100;
        });
    }
}

Neo.applyClassConfig(WorldMapContainerController);



/***/ }),

/***/ "./apps/covid/view/country/Gallery.mjs":
/*!*********************************************!*\
  !*** ./apps/covid/view/country/Gallery.mjs ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountryGallery; });
/* harmony import */ var _store_Countries_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/Countries.mjs */ "./apps/covid/store/Countries.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_component_Gallery_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Gallery.mjs */ "./node_modules/neo.mjs/src/component/Gallery.mjs");
/* harmony import */ var _Util_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util.mjs */ "./apps/covid/Util.mjs");




/**
 * @class Covid.view.country.Gallery
 * @extends Neo.component.Gallery
 */
class CountryGallery extends _node_modules_neo_mjs_src_component_Gallery_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Covid.view.country.Gallery'
         * @protected
         */
        className: 'Covid.view.country.Gallery',
        /**
         * @member {String[]} cls=['covid-country-gallery', 'neo-gallery', 'page', 'view']
         */
        cls: ['covid-country-gallery', 'neo-gallery', 'page', 'view'],
        /**
         * The image height of the gallery
         * @member {Number} imageHeight=240
         */
        imageHeight: 280,
        /**
         * The image width of the gallery
         * @member {Number} imageWidth=320
         */
        imageWidth: 340,
        /**
         * @member {Object} itemTpl_
         */
        itemTpl: {
            cls     : ['neo-gallery-item', 'image-wrap', 'view', 'neo-transition-1000'],
            tabIndex: '-1',
            cn: [{
                cls  : ['neo-item-wrapper'],
                style: {},
                cn: [{
                    tag  : 'div',
                    cls  : ['neo-country-gallery-item'],
                    style: {},

                    cn: [{
                        cls: ['neo-item-header'],
                        cn: [{
                            tag: 'img',
                            cls: ['neo-flag']
                        }, {

                        }]
                    }, {
                        tag: 'table',
                        cls: ['neo-content-table'],
                        cn : [{
                            tag: 'tr',
                            cn : [
                                {tag: 'td', html: 'Cases'},
                                {tag: 'td', cls: ['neo-align-right']},
                                {tag: 'td', style: {width: '100%'}},
                                {tag: 'td', html: 'Cases today'},
                                {tag: 'td', cls: ['neo-align-right']}
                            ]
                        }, {
                            tag: 'tr',
                            cn : [
                                {tag: 'td', html: 'Deaths'},
                                {tag: 'td', cls: ['neo-align-right', 'neo-content-deaths']},
                                {tag: 'td', style: {width: '100%'}},
                                {tag: 'td', html: 'Deaths today'},
                                {tag: 'td', cls: ['neo-align-right', 'neo-content-deaths']}
                            ]
                        }, {
                            tag: 'tr',
                            cn : [
                                {tag: 'td', html: 'Recovered'},
                                {tag: 'td', cls: ['neo-align-right', 'neo-content-recovered']},
                                {tag: 'td', style: {width: '100%'}},
                                {tag: 'td', html: 'Critical'},
                                {tag: 'td', cls: ['neo-align-right', 'neo-content-critical']}
                            ]
                        }]
                    }]
                }]
            }]
        },
        /**
         * The unique record field containing the id.
         * @member {String} keyProperty='id'
         */
        keyProperty: 'country',
        /**
         * True to select the item inside the middle of the store items on mount
         * @member {Boolean} selectOnMount=false
         */
        selectOnMount: false,
        /**
         * @member {Neo.data.Store} store=CountryStore
         */
        store: _store_Countries_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]
    }}

    /**
     * Override this method to get different item-markups
     * @param {Object} vdomItem
     * @param {Object} record
     * @param {Number} index
     * @returns {Object} vdomItem
     */
    createItem(vdomItem, record, index) {
        let me         = this,
            firstChild = vdomItem.cn[0].cn[0],
            fN         = _Util_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].formatNumber,
            table      = firstChild.cn[1];

        vdomItem.id = me.getItemVnodeId(record[me.keyProperty]);

        vdomItem.cn[0].style.height = me.imageHeight + 'px';

        firstChild.style.height = (me.imageHeight - 70) + 'px';
        firstChild.style.width  = me.imageWidth  + 'px';

        firstChild.cn[0].cn[0].src  = _Util_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getCountryFlagUrl(record.country);
        firstChild.cn[0].cn[1].html = record.country;

        table.cn[0].cn[1].html = fN({value: record.cases});
        table.cn[1].cn[1].html = fN({value: record.deaths});
        table.cn[2].cn[1].html = fN({value: record.recovered});

        table.cn[0].cn[4].html = fN({value: record.todayCases});
        table.cn[1].cn[4].html = fN({value: record.todayDeaths});
        table.cn[2].cn[4].html = fN({value: record.critical});

        return vdomItem;
    }

    /**
     *
     * @param {String} vnodeId
     * @returns {String} itemId
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
        }, 400);
    }
}

Neo.applyClassConfig(CountryGallery);



/***/ }),

/***/ "./apps/covid/view/country/Helix.mjs":
/*!*******************************************!*\
  !*** ./apps/covid/view/country/Helix.mjs ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountryHelix; });
/* harmony import */ var _store_Countries_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/Countries.mjs */ "./apps/covid/store/Countries.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_component_Helix_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Helix.mjs */ "./node_modules/neo.mjs/src/component/Helix.mjs");
/* harmony import */ var _Util_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util.mjs */ "./apps/covid/Util.mjs");




/**
 * @class Covid.view.country.Helix
 * @extends Neo.component.Helix
 */
class CountryHelix extends _node_modules_neo_mjs_src_component_Helix_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Covid.view.country.Helix'
         * @protected
         */
        className: 'Covid.view.country.Helix',
        /**
         * @member {String[]} cls=['covid-country-helix', 'neo-helix']
         */
        cls: ['covid-country-helix', 'neo-helix'],
        /**
         * The vertical delta between each helix item (increasing this value will create a spiral)
         * @member {Number} deltaY=1.2
         */
        deltaY: 1.2,
        /**
         * @member {Object} itemTpl_
         */
        itemTpl: {
            cls     : ['surface', 'neo-helix-item'],
            style   : {},
            tabIndex: '-1',
            cn: [{
                cls  : ['neo-item-wrapper'],
                style: {},
                cn: [{
                    tag  : 'div',
                    cls  : ['neo-country-helix-item'],
                    style: {},

                    cn: [{
                        cls: ['neo-item-header'],
                        cn: [{
                            tag: 'img',
                            cls: ['neo-flag']
                        }, {

                        }]
                    }, {
                        tag: 'table',
                        cls: ['neo-content-table'],
                        cn : [{
                            tag: 'tr',
                            cn : [
                                {tag: 'td', html: 'Cases'},
                                {tag: 'td', cls: ['neo-align-right']},
                                {tag: 'td', style: {width: '100%'}},
                                {tag: 'td', html: 'Cases today'},
                                {tag: 'td', cls: ['neo-align-right']}
                            ]
                        }, {
                            tag: 'tr',
                            cn : [
                                {tag: 'td', html: 'Deaths'},
                                {tag: 'td', cls: ['neo-align-right', 'neo-content-deaths']},
                                {tag: 'td', style: {width: '100%'}},
                                {tag: 'td', html: 'Deaths today'},
                                {tag: 'td', cls: ['neo-align-right', 'neo-content-deaths']}
                            ]
                        }, {
                            tag: 'tr',
                            cn : [
                                {tag: 'td', html: 'Recovered'},
                                {tag: 'td', cls: ['neo-align-right', 'neo-content-recovered']},
                                {tag: 'td', style: {width: '100%'}},
                                {tag: 'td', html: 'Critical'},
                                {tag: 'td', cls: ['neo-align-right', 'neo-content-critical']}
                            ]
                        }]
                    }]
                }]
            }]
        },
        /**
         * The unique record field containing the id.
         * @member {String} keyProperty='id'
         */
        keyProperty: 'country',
        /**
         * The radius of the Helix in px
         * @member {Number} radius=2500
         */
        radius: 2500,
        /**
         * The rotationAngle of the Helix in degrees
         * @member {Number} rotationAngle=720
         */
        rotationAngle: 720,
        /**
         * True displays the first & last name record fields below an expanded item
         * @member {Boolean} showCloneInfo=false
         */
        showCloneInfo: false,
        /**
         * @member {Neo.data.Store} store=CountryStore
         */
        store: _store_Countries_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
        /**
         * The translateX value gets included into each helix item
         * @member {Number} translateY=500
         */
        translateY: 500,
        /**
         * The translateX value gets included into each helix item
         * @member {Number} translateZ_=-2300
         */
        translateZ: -2300
    }}

    /**
     *
     * @param {Object} vdomItem
     * @param {Object} record
     * @param {Number} index
     * @returns {Object} vdomItem
     */
    createItem(vdomItem, record, index) {
        let me         = this,
            firstChild = vdomItem.cn[0].cn[0],
            fN         = _Util_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].formatNumber,
            table      = firstChild.cn[1];

        vdomItem.id = me.getItemVnodeId(record[me.keyProperty]);

        firstChild.cn[0].cn[0].src  = _Util_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getCountryFlagUrl(record.country);
        firstChild.cn[0].cn[1].html = record.country;

        table.cn[0].cn[1].html = fN({value: record.cases});
        table.cn[1].cn[1].html = fN({value: record.deaths});
        table.cn[2].cn[1].html = fN({value: record.recovered});

        table.cn[0].cn[4].html = fN({value: record.todayCases});
        table.cn[1].cn[4].html = fN({value: record.todayDeaths});
        table.cn[2].cn[4].html = fN({value: record.critical});

        return vdomItem;
    }
    /**
     *
     * @returns {String}
     */
    getCloneTransform() {
        let me         = this,
            translateX = (me.offsetWidth  - 2800) / 6,
            translateY = (me.offsetHeight - 2700) / 6,
            translateZ = 100400 + me.perspective / 1.5;

        return 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,'+translateX+','+translateY+','+translateZ+',1)';
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

Neo.applyClassConfig(CountryHelix);



/***/ }),

/***/ "./apps/covid/view/country/HistoricalDataTable.mjs":
/*!*********************************************************!*\
  !*** ./apps/covid/view/country/HistoricalDataTable.mjs ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HistoricalDataTable; });
/* harmony import */ var _node_modules_neo_mjs_src_table_Container_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/table/Container.mjs */ "./node_modules/neo.mjs/src/table/Container.mjs");
/* harmony import */ var _store_HistoricalData_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/HistoricalData.mjs */ "./apps/covid/store/HistoricalData.mjs");
/* harmony import */ var _Util_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util.mjs */ "./apps/covid/Util.mjs");




/**
 * @class Covid.view.country.HistoricalDataTable
 * @extends Neo.table.Container
 */
class HistoricalDataTable extends _node_modules_neo_mjs_src_table_Container_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Covid.view.country.HistoricalDataTable'
         * @protected
         */
        className: 'Covid.view.country.HistoricalDataTable',
        /**
         * @member {String[]} cls=['covid-historical-data-table', 'neo-table-container']
         */
        cls: ['covid-historical-data-table', 'neo-table-container'],
        /**
         * Default configs for each column
         * @member {Object} columnDefaults
         */
        columnDefaults: {
            align               : 'right',
            defaultSortDirection: 'DESC',
            renderer            : _Util_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].formatNumber
        },
        /**
         * @member {Object[]} columns
         */
        columns: [{
            align    : 'left',
            dataField: 'date',
            dock     : 'left',
            text     : 'Date',
            width    : 100,
            renderer : function(data) {
                return {
                    cls : ['neo-date-column', 'neo-table-cell'],
                    html: new Intl.DateTimeFormat('default', {
                        day  : 'numeric',
                        month: 'numeric',
                        year : 'numeric'
                    }).format(new Date(data.value))
                };
            }
        }, {
            dataField: 'cases',
            text     : 'Cases',
            renderer : data => _Util_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].formatNumber(data)
        }, {
            dataField: 'active',
            text     : 'Active',
            renderer : data => _Util_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].formatNumber(data, '#64B5F6')
        }, {
            dataField: 'recovered',
            text     : 'Recovered',
            renderer : data => _Util_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].formatNumber(data, '#28ca68')
        }, {
            dataField: 'deaths',
            text     : 'Deaths',
            renderer : data => _Util_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].formatNumber(data, '#fb6767')
        }, {
            dataField: 'dailyCases',
            text     : 'Daily C',
            renderer : data => _Util_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].formatNumber(data)
        }, {
            dataField: 'dailyActive',
            text     : 'Daily A',
            renderer : data => _Util_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].formatNumber(data, '#64B5F6')
        }, {
            dataField: 'dailyRecovered',
            text     : 'Daily R',
            renderer : data => _Util_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].formatNumber(data, '#28ca68')
        }, {
            dataField: 'dailyDeaths',
            text     : 'Daily D',
            renderer : data => _Util_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].formatNumber(data, '#fb6767')
        }],
        /**
         * @member {Neo.data.Store} store=HistoricalData
         */
        store: _store_HistoricalData_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]
    }}
}

Neo.applyClassConfig(HistoricalDataTable);



/***/ }),

/***/ "./apps/covid/view/country/LineChartComponent.mjs":
/*!********************************************************!*\
  !*** ./apps/covid/view/country/LineChartComponent.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LineChartComponent; });
/* harmony import */ var _node_modules_neo_mjs_src_component_wrapper_AmChart_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/wrapper/AmChart.mjs */ "./node_modules/neo.mjs/src/component/wrapper/AmChart.mjs");


/**
 * @class Covid.view.country.LineChartComponent
 * @extends Neo.component.wrapper.AmChart
 */
class LineChartComponent extends _node_modules_neo_mjs_src_component_wrapper_AmChart_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Covid.view.country.LineChartComponent'
         * @protected
         */
        className: 'Covid.view.country.LineChartComponent',
        /**
         * @member {String[]} cls=['covid-line-chart']
         */
        cls: ['covid-line-chart'],
        /**
         * @member {Object} chartConfig
         */
        chartConfig: {
            cursor: {
                maxTooltipDistance: -1
            },

            legend: {
                labels: {
                    template: {
                        fill: '#bbb'
                    }
                }
            },

            xAxes: [{
                type: 'DateAxis',

                renderer: {
                    minGridDistance: 60,
                    labels: {
                        template: {
                            fill: '#bbb'
                        }
                    }
                }
            }],

            yAxes: [{
                type       : 'ValueAxis',
                logarithmic: true,

                numberFormatter: {
                    numberFormat: '#.0a',

                    bigNumberPrefixes: [
                        {number: 1e3, suffix: 'K'},
                        {number: 1e6, suffix: 'M'},
                        {number: 1e9, suffix: 'B'}
                    ]
                },
                renderer: {
                    minGridDistance: 60,
                    labels: {
                        template: {
                            fill: '#bbb'
                        }
                    }
                }
            }],

            series: [{
                type       : 'LineSeries',
                dataFields : {dateX : 'date', valueY: 'active'},
                fill       : '#64b5f6',
                name       : 'Active',
                stroke     : '#64b5f6',
                strokeWidth: 3,

                tooltip: {
                    background       : {fill: '#fff'},
                    getFillFromObject: false,
                    label            : {fill: '#000'}
                }
            }, {
                type       : 'LineSeries',
                dataFields : {dateX : 'date', valueY: 'cases'},
                fill       : '#bbb',
                name       : 'Cases',
                stroke     : '#bbb',
                strokeWidth: 3,
                //tensionX   : .9,

                tooltip: {
                    background       : {fill: '#fff'},
                    getFillFromObject: false,
                    label            : {fill: '#000'}
                }
            }, {
                type       : 'LineSeries',
                dataFields : {dateX : 'date', valueY: 'deaths'},
                fill       : '#fb6767',
                name       : 'Deaths',
                stroke     : '#fb6767',
                strokeWidth: 3,

                tooltip: {
                    background       : {fill: '#fff'},
                    getFillFromObject: false,
                    label            : {fill: '#000'}
                }
            }, {
                type       : 'LineSeries',
                dataFields : {dateX : 'date', valueY: 'recovered'},
                fill       : '#28ca68',
                name       : 'Recovered',
                stroke     : '#28ca68',
                strokeWidth: 3,

                tooltip: {
                    background       : {fill: '#fff'},
                    getFillFromObject: false,
                    label            : {fill: '#000'}
                }
            }]
        },
        /**
         * @member {Boolean} combineSeriesTooltip=true
         */
        combineSeriesTooltip: true,
        /**
         * @member {Boolean} fitParentHeight=true
         */
        fitParentHeight: true
    }}
}

Neo.applyClassConfig(LineChartComponent);



/***/ }),

/***/ "./apps/covid/view/country/Table.mjs":
/*!*******************************************!*\
  !*** ./apps/covid/view/country/Table.mjs ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Table; });
/* harmony import */ var _node_modules_neo_mjs_src_table_Container_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/table/Container.mjs */ "./node_modules/neo.mjs/src/table/Container.mjs");
/* harmony import */ var _store_Countries_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/Countries.mjs */ "./apps/covid/store/Countries.mjs");
/* harmony import */ var _Util_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util.mjs */ "./apps/covid/Util.mjs");




/**
 * @class Covid.view.country.Table
 * @extends Neo.table.Container
 */
class Table extends _node_modules_neo_mjs_src_table_Container_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Covid.view.country.Table'
         * @protected
         */
        className: 'Covid.view.country.Table',
        /**
         * @member {String[]} cls=['covid-country-table', 'neo-table-container']
         */
        cls: ['covid-country-table', 'neo-table-container'],
        /**
         * Default configs for each column
         * @member {Object} columnDefaults
         */
        columnDefaults: {
            align               : 'right',
            defaultSortDirection: 'DESC',
            renderer            : _Util_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].formatNumber
        },
        /**
         * @member {Object[]} columns
         */
        columns: [{
            cls      : ['neo-index-column', 'neo-table-header-button'],
            dataField: 'index',
            dock     : 'left',
            minWidth : 40,
            text     : '#',
            renderer : _Util_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].indexRenderer,
            width    : 40
        }, {
            align               : 'left',
            dataField           : 'country',
            defaultSortDirection: 'ASC',
            dock                : 'left',
            text                : 'Country',
            width               : 200,

            renderer: data => {
                return {
                    cls : ['neo-country-column', 'neo-table-cell'],
                    html: [
                        '<div style="display: flex; align-items: center">',
                            '<img style="height:20px; margin-right:10px; width:20px;" src="' + _Util_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getCountryFlagUrl(data.value) + '">' + data.value,
                        '</div>'
                    ].join('')
                };
            }
        }, {
            dataField: 'cases',
            text     : 'Cases'
        }, {
            dataField: 'casesPerOneMillion',
            text     : 'Cases / 1M'
        }, {
            dataField: 'infected',
            text     : 'Infected',
            renderer : data => _Util_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].formatInfected(data)
        }, {
            dataField: 'active',
            text     : 'Active',
            renderer : data => _Util_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].formatNumber(data, '#64B5F6')
        },  {
            dataField: 'recovered',
            text     : 'Recovered',
            renderer : data => _Util_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].formatNumber(data, '#28ca68')
        }, {
            dataField: 'critical',
            text     : 'Critical',
            renderer : data => _Util_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].formatNumber(data, 'orange')
        }, {
            dataField: 'deaths',
            text     : 'Deaths',
            renderer : data => _Util_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].formatNumber(data, '#fb6767')
        }, {
            dataField: 'todayCases',
            text     : 'Cases today'
        }, {
            dataField: 'todayDeaths',
            text     : 'Deaths today',
            renderer : data => _Util_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].formatNumber(data, '#fb6767')
        }, {
            dataField: 'tests',
            text     : 'Tests'
        }, {
            dataField: 'testsPerOneMillion',
            text     : 'Tests / 1M'
        }],
        /**
         * @member {Neo.data.Store} store=CountryStore
         */
        store: _store_Countries_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]
    }}
}

Neo.applyClassConfig(Table);



/***/ }),

/***/ "./apps/covid/view/mapboxGl/Component.mjs":
/*!************************************************!*\
  !*** ./apps/covid/view/mapboxGl/Component.mjs ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
/* harmony import */ var _node_modules_neo_mjs_src_component_wrapper_MapboxGL_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/wrapper/MapboxGL.mjs */ "./node_modules/neo.mjs/src/component/wrapper/MapboxGL.mjs");


/**
 * @class Covid.view.mapboxGl.Component
 * @extends Neo.component.wrapper.MapboxGL
 */
class Component extends _node_modules_neo_mjs_src_component_wrapper_MapboxGL_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Covid.view.mapboxGl.Component'
         * @protected
         */
        className: 'Covid.view.mapboxGl.Component',
        /**
         * @member {String|null} accessToken
         */
        accessToken: 'pk.eyJ1IjoidG9iaXUiLCJhIjoiY2s4dTlsdHA5MDRmYzNtcGxlczFpcGVncyJ9.qcmzDjpdyQeLtz9z7d7CkA',
        /**
         * @member {Object} center={lat: 40, lng: 20}
         */
        center: {lat: 40, lng: 20},
        /**
         * @member {String} dataSourceId='covid19'
         */
        dataSourceId: 'covid19',
        /**
         * @member {Object[]}
         */
        layers: [{
            beforeId: 'waterway-label',
            id      : 'hillshading',
            source  : 'dem',
            type    : 'hillshade'
        }, {
            beforeId: 'waterway-label',
            filter  : ['>', ['get', 'cases'], 0],
            id      : 'covid19-heat',
            source  : 'covid19',
            type    : 'heatmap',

            paint: {
                'heatmap-color'    : ['interpolate', ['linear'], ['heatmap-density'], 0, 'rgba(0,0,0,0)', 0.1, '#927903', 0.15, '#ffd403', 1, '#ff0000'],
                'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 3, 9, 5],
                'heatmap-opacity'  : ['interpolate', ['linear'], ['zoom'], 5, .95, 6, 0],
                'heatmap-radius'   : ['interpolate', ['linear'], ['zoom'], 0, 2, 1, 4, 2, 8, 3, 16, 4, 32, 5, 64, 6, 128, 7, 256, 8, 512, 9, 1024],
                'heatmap-weight'   : ['interpolate', ['linear'], ['get', 'cases'], 0, 0, 1e4, 1]
            }
        }, {
            beforeId: 'waterway-label',
            filter  : ['>', ['get', 'cases'], 0],
            id      : 'covid19-circle',
            source  : 'covid19',
            type    : 'circle',
            minzoom : 5,

            paint: {
                'circle-color'    : ['step', ['get', 'cases'], '#9ad5ff', 0, '#9af6ff', 20, '#00ffff', 200, '#ffff00', 400, '#f1f075', 800, '#f9b196', 1e3, '#f28cb1', 2e3, '#f28cb1'],
                'circle-opacity'  : ['interpolate', ['linear'], ['zoom'], 5, 0, 6, .6],
                'circle-radius'   : ['step', ['get', 'cases'], 10, 100, 20, 500, 30, 1e3, 40, 1e4, 50],
                'circle-translate': [0, 20]
            }
        }, {
            beforeId: 'waterway-label',
            filter  : ['>', ['get', 'cases'], 0],
            id      : 'covid19-circle-text',
            source  : 'covid19',
            type    : 'symbol',
            minzoom : 5,

            layout: {
                'text-allow-overlap'   : true,
                'text-field'           : ['to-string', ['get', 'cases']],
                'text-font'            : ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                'text-ignore-placement': true,
                'text-size'            : 12
            },

            paint: {
                'text-opacity'  : ['interpolate', ['linear'], ['zoom'], 5, 0, 7, 1],
                'text-translate': [0, 20],
            }
        }],
        /**
         * https://docs.mapbox.com/mapbox-gl-js/style-spec/
         * @member {Object|String} mapboxStyle='mapbox://styles/tobiu/ck944yerq3hrj1ip91o34fa7d'
         */
        mapboxStyle: 'mapbox://styles/tobiu/ck944yerq3hrj1ip91o34fa7d',
        /**
         * Version for the neo-dark theme
         * @member {Object|String} mapboxStyle='mapbox://styles/tobiu/ck944yerq3hrj1ip91o34fa7d'
         */
        mapboxStyleDark: 'mapbox://styles/tobiu/ck8yaxakx11zx1ilgshq451cv',
        /**
         * Version for the neo-light theme
         * @member {Object|String} mapboxStyle='mapbox://styles/tobiu/ck9459ple0qc71invugdz6bbf'
         */
        mapboxStyleLight: 'mapbox://styles/tobiu/ck9459ple0qc71invugdz6bbf',
        /**
         * @member {Object[]}
         */
        sources: [{
            id  : 'covid19',
            type: 'geojson',
            data: {
                type    : 'FeatureCollection',
                features: []
            }
        }, {
            id  : 'dem',
            type: 'raster-dem',
            url : 'mapbox://mapbox.terrain-rgb'
        }]
    }}
}

Neo.applyClassConfig(Component);



/***/ }),

/***/ "./apps/covid/view/mapboxGl/Container.mjs":
/*!************************************************!*\
  !*** ./apps/covid/view/mapboxGl/Container.mjs ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
/* harmony import */ var _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/form/field/CheckBox.mjs */ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs");
/* harmony import */ var _Component_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component.mjs */ "./apps/covid/view/mapboxGl/Component.mjs");
/* harmony import */ var _ContainerController_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContainerController.mjs */ "./apps/covid/view/mapboxGl/ContainerController.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/container/Panel.mjs */ "./node_modules/neo.mjs/src/container/Panel.mjs");






/**
 * @class Covid.view.mapboxGl.Container
 * @extends Neo.container.Base
 */
class Container extends _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Covid.view.mapboxGl.Container'
         * @protected
         */
        className: 'Covid.view.mapboxGl.Container',
        /**
         * @member {String} ntype='covid-mapboxgl-container'
         * @protected
         */
        ntype: 'covid-mapboxgl-container',
        /**
         * @member {Neo.controller.Component} controller=ContainerController
         */
        controller: _ContainerController_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
        /**
         * @member {Object[]} items
         */
        items: [{
            module   : _Component_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            reference: 'mapboxglmap'
        }, {
            module      : _node_modules_neo_mjs_src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            height      : 150,
            ignoreLayout: true,

            containerConfig: {
                style: {
                    opacity: 0.6,
                    padding: '10px'
                }
            },

            headers: [{
                dock: 'top',
                items: [{
                    ntype  : 'button',
                    handler: 'onHideMapControlsButtonClick',
                    text   : 'X'
                }, {
                    ntype: 'label',
                    text : 'Map Controls'
                }],
                style: {
                    opacity: 1
                }
            }],

            itemDefaults: {
                module    : _node_modules_neo_mjs_src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
                flex      : '0 1 auto',
                labelWidth: 100
            },

            items: [{
                checked  : true,
                labelText: 'Detail Circles',
                listeners: {change: 'onDetailCirclesChange'}
            }, {
                checked  : true,
                labelText: 'HeatMap',
                listeners: {change: 'onHeatMapChange'},
                style    : {marginTop: '5px'}
            }, {
                checked  : true,
                labelText: 'Terrain',
                listeners: {change: 'onTerrainChange'},
                style    : {marginTop: '5px'}
            }],

            style: {
                backgroundColor: 'transparent',
                position       : 'absolute',
                right          : '10px',
                top            : '10px'
            }
        }],
        /**
         * @member {Object} layout={ntype: 'fit'}
         */
        layout: {ntype: 'fit'},

        /**
         * @member {Object} _vdom
         */
        _vdom: {
            style: {position: 'relative', height: '100%', width: '100%'},
            cn: [{
                style: {position: 'absolute', height: '100%', width: '100%'},
                cn: [{
                    style: {height: '100%'},
                    cn: []
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
}

Neo.applyClassConfig(Container);



/***/ }),

/***/ "./apps/covid/view/mapboxGl/ContainerController.mjs":
/*!**********************************************************!*\
  !*** ./apps/covid/view/mapboxGl/ContainerController.mjs ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContainerController; });
/* harmony import */ var _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");


/**
 * @class Covid.view.mapboxGl.ContainerController
 * @extends Neo.controller.Component
 */
class ContainerController extends _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Covid.view.mapboxGl.ContainerController'
         * @protected
         */
        className: 'Covid.view.mapboxGl.ContainerController',
        /**
         * @member {String} ntype='mapboxgl-container-controller'
         * @protected
         */
        ntype: 'mapboxgl-container-controller'
    }}

    /**
     *
     * @param {String} layerId
     * @param {String} visibility
     */
    changeLayerVisibility(layerId, visibility) {
        this.getReference('mapboxglmap').setLayoutProperty({
            layerId: layerId,
            key    : 'visibility',
            value  : visibility
        });
    }

    /**
     *
     * @param {Object} data
     */
    onDetailCirclesChange(data) {
        const visibility = data.value ? 'visible' : 'none';

        this.changeLayerVisibility('covid19-circle',      visibility);
        this.changeLayerVisibility('covid19-circle-text', visibility);
    }

    /**
     *
     * @param {Object} data
     */
    onHeatMapChange(data) {
        this.changeLayerVisibility('covid19-heat', data.value ? 'visible' : 'none');
    }

    /**
     *
     * @param {Object} data
     */
    onHideMapControlsButtonClick(data) {
        console.log('onHideMapControlsButtonClick', data);
    }

    /**
     *
     * @param {Object} data
     */
    onTerrainChange(data) {
        this.changeLayerVisibility('hillshading', data.value ? 'visible' : 'none');
    }
}

Neo.applyClassConfig(ContainerController);



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHBzL2NvdmlkL1V0aWwubWpzIiwid2VicGFjazovLy8uL2FwcHMvY292aWQvYXBwLm1qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL2NvdmlkL21vZGVsL0NvdW50cnkubWpzIiwid2VicGFjazovLy8uL2FwcHMvY292aWQvbW9kZWwvSGlzdG9yaWNhbERhdGEubWpzIiwid2VicGFjazovLy8uL2FwcHMvY292aWQvc3RvcmUvQ291bnRyaWVzLm1qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL2NvdmlkL3N0b3JlL0hpc3RvcmljYWxEYXRhLm1qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL2NvdmlkL3ZpZXcvQXR0cmlidXRpb25Db21wb25lbnQubWpzIiwid2VicGFjazovLy8uL2FwcHMvY292aWQvdmlldy9Gb290ZXJDb250YWluZXIubWpzIiwid2VicGFjazovLy8uL2FwcHMvY292aWQvdmlldy9HYWxsZXJ5Q29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL2NvdmlkL3ZpZXcvR2FsbGVyeUNvbnRhaW5lckNvbnRyb2xsZXIubWpzIiwid2VicGFjazovLy8uL2FwcHMvY292aWQvdmlldy9IZWFkZXJDb250YWluZXIubWpzIiwid2VicGFjazovLy8uL2FwcHMvY292aWQvdmlldy9IZWxpeENvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9jb3ZpZC92aWV3L0hlbGl4Q29udGFpbmVyQ29udHJvbGxlci5tanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9jb3ZpZC92aWV3L01haW5Db250YWluZXIubWpzIiwid2VicGFjazovLy8uL2FwcHMvY292aWQvdmlldy9NYWluQ29udGFpbmVyQ29udHJvbGxlci5tanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9jb3ZpZC92aWV3L1RhYmxlQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL2NvdmlkL3ZpZXcvVGFibGVDb250YWluZXJDb250cm9sbGVyLm1qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL2NvdmlkL3ZpZXcvV29ybGRNYXBDb21wb25lbnQubWpzIiwid2VicGFjazovLy8uL2FwcHMvY292aWQvdmlldy9Xb3JsZE1hcENvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9jb3ZpZC92aWV3L1dvcmxkTWFwQ29udGFpbmVyQ29udHJvbGxlci5tanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9jb3ZpZC92aWV3L2NvdW50cnkvR2FsbGVyeS5tanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9jb3ZpZC92aWV3L2NvdW50cnkvSGVsaXgubWpzIiwid2VicGFjazovLy8uL2FwcHMvY292aWQvdmlldy9jb3VudHJ5L0hpc3RvcmljYWxEYXRhVGFibGUubWpzIiwid2VicGFjazovLy8uL2FwcHMvY292aWQvdmlldy9jb3VudHJ5L0xpbmVDaGFydENvbXBvbmVudC5tanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9jb3ZpZC92aWV3L2NvdW50cnkvVGFibGUubWpzIiwid2VicGFjazovLy8uL2FwcHMvY292aWQvdmlldy9tYXBib3hHbC9Db21wb25lbnQubWpzIiwid2VicGFjazovLy8uL2FwcHMvY292aWQvdmlldy9tYXBib3hHbC9Db250YWluZXIubWpzIiwid2VicGFjazovLy8uL2FwcHMvY292aWQvdmlldy9tYXBib3hHbC9Db250YWluZXJDb250cm9sbGVyLm1qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFnRTs7QUFFaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwrRUFBSTtBQUN2Qiw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FB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O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNGQUFzRixzQ0FBc0M7O0FBRTVIO0FBQ0E7QUFDQSxxRUFBcUUsT0FBTztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGdGQUFRO0FBQzVCO0FBQ0EsYUFBYTs7QUFFYixZQUFZLGdGQUFRO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Es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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDM0hBO0FBQUE7QUFBQTtBQUFnRzs7QUFFaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsMEZBQW1CO0FBQ3JELHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6ImNodW5rcy9hcHBzLWNvdmlkLWFwcC1tanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZSBmcm9tICcuLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogU3RhdGljIHV0aWxpdHkgY2xhc3NcbiAqIEBjbGFzcyBDb3ZpZC5VdGlsXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIFV0aWwgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHJlZ2V4IHRvIHJlcGxhY2UgYmxhbmsgY2hhcnNcbiAgICAgICAgICogQG1lbWJlciB7UmVnRXhwfSBmbGFnUmVnRXg9LyAvZ2lcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBmbGFnUmVnRXg6IC8gL2dpLFxuICAgICAgICAvKipcbiAgICAgICAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTnVtYmVyL3RvTG9jYWxlU3RyaW5nXG4gICAgICAgICAqIENoYW5nZSB0aGlzIGNvbmZpZyB0byBlbmZvcmNlIGEgY291bnR5IHNwZWNpZmljIGZvcm1hdHRpbmcgKGUuZy4gJ2RlLURFJylcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBsb2NhbGVzPSdkZWZhdWx0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIGxvY2FsZXM6ICdkZWZhdWx0J1xuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nQ292aWQuVXRpbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQuVXRpbCdcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogVXNlZCBmb3IgdGhlIGNhc2VzUGVyT25lTWlsbGlvbiBjb2x1bW4gdG8gc2hvdyAlIG9mIHBvcHVsYXRpb25cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLnZhbHVlXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgZm9ybWF0SW5mZWN0ZWQoZGF0YSkge1xuICAgICAgICBsZXQgdmFsdWUgPSBkYXRhLnZhbHVlO1xuXG4gICAgICAgIGlmICghTmVvLmlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlIHx8ICdOL0EnO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlIC8gMTAwKTtcbiAgICAgICAgdmFsdWUgLz0gMTAwO1xuXG4gICAgICAgIHZhbHVlID0gdmFsdWUudG9GaXhlZCgyKSArICcgJSc7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvTG9jYWxlU3RyaW5nKFV0aWwubG9jYWxlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgd2lsbCBnZXQgdXNlZCBhcyBhIGdyaWQgcmVuZGVyZXIsIHNvIHRoZSAybmQgcGFyYW0gaXMgYW4gb3ZlcmxvYWQgKHdvdWxkIGJlIHtPYmplY3R9IHJlY29yZClcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLnZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtjb2xvcl1cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyBmb3JtYXROdW1iZXIoZGF0YSwgY29sb3IpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gZGF0YS52YWx1ZTtcblxuICAgICAgICBpZiAoIU5lby5pc051bWJlcih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSB8fCAnTi9BJztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlID0gdmFsdWUudG9Mb2NhbGVTdHJpbmcoVXRpbC5sb2NhbGVzKTtcblxuICAgICAgICByZXR1cm4gdHlwZW9mIGNvbG9yICE9PSAnc3RyaW5nJyA/IHZhbHVlIDogYDxzcGFuIHN0eWxlPVwiY29sb3I6JHtjb2xvcn07XCI+JHt2YWx1ZX08L3NwYW4+YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge1N0cmluZ30gdXJsXG4gICAgICovXG4gICAgc3RhdGljIGdldENvdW50cnlGbGFnVXJsKG5hbWUpIHtcbiAgICAgICAgY29uc3QgbWFwID0ge1xuICAgICAgICAgICAgJ2Jvc25pYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnYm9zbmlhLWFuZC1oZXJ6ZWdvdmluYScsXG4gICAgICAgICAgICAnY2Fiby12ZXJkZScgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdjYXBlLXZlcmRlJyxcbiAgICAgICAgICAgICdjYXInICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2NlbnRyYWwtYWZyaWNhbi1yZXB1YmxpYycsXG4gICAgICAgICAgICAnY2FyaWJiZWFuLW5ldGhlcmxhbmRzJyAgICAgICAgICAgICAgICA6ICduZXRoZXJsYW5kcycsXG4gICAgICAgICAgICAnY2hhbm5lbC1pc2xhbmRzJyAgICAgICAgICAgICAgICAgICAgICA6ICdqZXJzZXknLFxuICAgICAgICAgICAgJ2PDtHRlLWRcXCdpdm9pcmUnICAgICAgICAgICAgICAgICAgICAgICA6ICdpdm9yeS1jb2FzdCcsXG4gICAgICAgICAgICAnY29uZ28nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdyZXB1YmxpYy1vZi10aGUtY29uZ28nLFxuICAgICAgICAgICAgJ2NvbmdvLC10aGUtZGVtb2NyYXRpYy1yZXB1YmxpYy1vZi10aGUnOiAnZGVtb2NyYXRpYy1yZXB1YmxpYy1vZi1jb25nbycsXG4gICAgICAgICAgICAnY3VyYcOnYW8nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnY3VyYWNhbycsXG4gICAgICAgICAgICAnY3plY2hpYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdjemVjaC1yZXB1YmxpYycsXG4gICAgICAgICAgICAnZGlhbW9uZC1wcmluY2VzcycgICAgICAgICAgICAgICAgICAgICA6ICdqYXBhbicsIC8vIGNydWlzZSBzaGlwXG4gICAgICAgICAgICAnZHJjJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdkZW1vY3JhdGljLXJlcHVibGljLW9mLWNvbmdvJyxcbiAgICAgICAgICAgICdlbC1zYWx2YWRvcicgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3NhbHZhZG9yJyxcbiAgICAgICAgICAgICdlc3dhdGluaScgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3N3YXppbGFuZCcsXG4gICAgICAgICAgICAnZmFlcm9lLWlzbGFuZHMnICAgICAgICAgICAgICAgICAgICAgICA6ICdmYXJvZS1pc2xhbmRzJyxcbiAgICAgICAgICAgICdmYWxrbGFuZC1pc2xhbmRzLShtYWx2aW5hcyknICAgICAgICAgIDogJ2ZhbGtsYW5kLWlzbGFuZHMnLFxuICAgICAgICAgICAgJ2ZyZW5jaC1ndWlhbmEnICAgICAgICAgICAgICAgICAgICAgICAgOiAnZnJhbmNlJywgLy8gP1xuICAgICAgICAgICAgJ2d1YWRlbG91cGUnICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnZnJhbmNlJywgLy8gP1xuICAgICAgICAgICAgJ2hvbHktc2VlLSh2YXRpY2FuLWNpdHktc3RhdGUpJyAgICAgICAgOiAndmF0aWNhbi1jaXR5JyxcbiAgICAgICAgICAgICdpcmFuLC1pc2xhbWljLXJlcHVibGljLW9mJyAgICAgICAgICAgIDogJ2lyYW4nLFxuICAgICAgICAgICAgJ2xhby1wZW9wbGVcXCdzLWRlbW9jcmF0aWMtcmVwdWJsaWMnICAgIDogJ2xhb3MnLFxuICAgICAgICAgICAgJ2xpYnlhbi1hcmFiLWphbWFoaXJpeWEnICAgICAgICAgICAgICAgOiAnbGlieWEnLFxuICAgICAgICAgICAgJ21hY2Vkb25pYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAncmVwdWJsaWMtb2YtbWFjZWRvbmlhJyxcbiAgICAgICAgICAgICdtYXlvdHRlJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2ZyYW5jZScsIC8vID9cbiAgICAgICAgICAgICdtb2xkb3ZhLC1yZXB1YmxpYy1vZicgICAgICAgICAgICAgICAgIDogJ21vbGRvdmEnLFxuICAgICAgICAgICAgJ21zLXphYW5kYW0nICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnbmV0aGVybGFuZHMnLCAvLyBjcnVpc2Ugc2hpcFxuICAgICAgICAgICAgJ25ldy1jYWxlZG9uaWEnICAgICAgICAgICAgICAgICAgICAgICAgOiAnZnJhbmNlJyxcbiAgICAgICAgICAgICdwYWxlc3Rpbmlhbi10ZXJyaXRvcnksLW9jY3VwaWVkJyAgICAgIDogJ3BhbGVzdGluZScsXG4gICAgICAgICAgICAncG9sYW5kJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdyZXB1YmxpYy1vZi1wb2xhbmQnLFxuICAgICAgICAgICAgJ3LDqXVuaW9uJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2ZyYW5jZScsXG4gICAgICAgICAgICAncy4ta29yZWEnICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzb3V0aC1rb3JlYScsXG4gICAgICAgICAgICAnc3QuLWJhcnRoJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzdC1iYXJ0cycsXG4gICAgICAgICAgICAnc2FpbnQtbHVjaWEnICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzdC1sdWNpYScsXG4gICAgICAgICAgICAnc2FpbnQtbWFydGluJyAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzaW50LW1hYXJ0ZW4nLFxuICAgICAgICAgICAgJ3NhaW50LXBpZXJyZS1taXF1ZWxvbicgICAgICAgICAgICAgICAgOiAnZnJhbmNlJyxcbiAgICAgICAgICAgICdzYWludC12aW5jZW50LWFuZC10aGUtZ3JlbmFkaW5lcycgICAgIDogJ3N0LXZpbmNlbnQtYW5kLXRoZS1ncmVuYWRpbmVzJyxcbiAgICAgICAgICAgICdzeXJpYW4tYXJhYi1yZXB1YmxpYycgICAgICAgICAgICAgICAgIDogJ3N5cmlhJyxcbiAgICAgICAgICAgICd0YW56YW5pYSwtdW5pdGVkLXJlcHVibGljLW9mJyAgICAgICAgIDogJ3RhbnphbmlhJyxcbiAgICAgICAgICAgICd0aW1vci1sZXN0ZScgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2Vhc3QtdGltb3InLFxuICAgICAgICAgICAgJ3R1cmtzLWFuZC1jYWljb3MtaXNsYW5kcycgICAgICAgICAgICAgOiAndHVya3MtYW5kLWNhaWNvcycsXG4gICAgICAgICAgICAndS5zLi12aXJnaW4taXNsYW5kcycgICAgICAgICAgICAgICAgICA6ICd2aXJnaW4taXNsYW5kcycsXG4gICAgICAgICAgICAndWFlJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd1bml0ZWQtYXJhYi1lbWlyYXRlcycsXG4gICAgICAgICAgICAndWsnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd1bml0ZWQta2luZ2RvbScsXG4gICAgICAgICAgICAndXNhJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd1bml0ZWQtc3RhdGVzLW9mLWFtZXJpY2EnLFxuICAgICAgICAgICAgJ3V6YmVraXN0YW4nICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndXpiZWtpc3RuJyxcbiAgICAgICAgICAgICd2ZW5lenVlbGEsLWJvbGl2YXJpYW4tcmVwdWJsaWMtb2YnICAgIDogJ3ZlbmV6dWVsYScsXG4gICAgICAgICAgICAndmlldC1uYW0nICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd2aWV0bmFtJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBpbWFnZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZShVdGlsLmZsYWdSZWdFeCwgJy0nKTtcblxuICAgICAgICBpbWFnZU5hbWUgPSBtYXBbaW1hZ2VOYW1lXSB8fCBpbWFnZU5hbWU7XG5cbiAgICAgICAgaWYgKE5lby5jb25maWcuaXNHaXRIdWJQYWdlcykge1xuICAgICAgICAgICAgbGV0IHBhdGggPSAnLi4vLi4vLi4vLi4vcmVzb3VyY2VzL2ltYWdlcy9mbGF0aWNvbi9jb3VudHJ5X2ZsYWdzL3BuZy8nICsgaW1hZ2VOYW1lICsgJy5wbmcnO1xuXG4gICAgICAgICAgICBpZiAoIU5lby5jb25maWcuaXNFeHBlcmltZW50YWwpIHtcbiAgICAgICAgICAgICAgICBwYXRoID0gJy4uLy4uLycgKyBwYXRoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL25lb21qcy9wYWdlcy9tYXN0ZXIvcmVzb3VyY2VzL2ltYWdlcy9mbGF0aWNvbi9jb3VudHJ5X2ZsYWdzL3BuZy8nICsgaW1hZ2VOYW1lICsgJy5wbmcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS5pbmRleFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgc3RhdGljIGluZGV4UmVuZGVyZXIoZGF0YSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xzIDogWyduZW8taW5kZXgtY29sdW1uJywgJ25lby10YWJsZS1jZWxsJ10sXG4gICAgICAgICAgICBodG1sOiBkYXRhLmluZGV4ICsgMVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVXRpbCk7XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWw7IiwiaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSAnLi92aWV3L01haW5Db250YWluZXIubWpzJztcblxuY29uc3Qgb25TdGFydCA9ICgpID0+IE5lby5hcHAoe1xuICAgIGFwcFBhdGggOiAnYXBwcy9jb3ZpZC8nLFxuICAgIG1haW5WaWV3OiBNYWluQ29udGFpbmVyLFxuICAgIG5hbWUgICAgOiAnQ292aWQnXG59KTtcblxuZXhwb3J0IHtvblN0YXJ0IGFzIG9uU3RhcnR9OyIsImltcG9ydCBNb2RlbCAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2RhdGEvTW9kZWwubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgQ292aWQubW9kZWwuQ291bnRyeVxuICogQGV4dGVuZHMgTmVvLmRhdGEuTW9kZWxcbiAqL1xuY2xhc3MgQ291bnRyeSBleHRlbmRzIE1vZGVsIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkLm1vZGVsLkNvdW50cnknLFxuXG4gICAgICAgIGZpZWxkczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdhY3RpdmUnLFxuICAgICAgICAgICAgdHlwZTogJ0ludGVnZXInXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdjYXNlcycsXG4gICAgICAgICAgICB0eXBlOiAnSW50ZWdlcidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2Nhc2VzUGVyT25lTWlsbGlvbicsXG4gICAgICAgICAgICB0eXBlOiAnSW50ZWdlcidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2NvdW50cnknLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2NvdW50cnlJbmZvJyxcbiAgICAgICAgICAgIHR5cGU6ICdPYmplY3QnIC8vIF9pZCwgZmxhZywgaXNvMiwgaXNvMywgbGF0LCBsb25nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdjcml0aWNhbCcsXG4gICAgICAgICAgICB0eXBlOiAnSW50ZWdlcidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2RlYXRocycsXG4gICAgICAgICAgICB0eXBlOiAnSW50ZWdlcidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2luZGV4JyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnaW5mZWN0ZWQnLCAvLyByZW5kZXJlciBwYXJzZXMgdG8gJSBvZiBwb3B1bGF0aW9uXG4gICAgICAgICAgICB0eXBlOiAnSW50ZWdlcidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3JlY292ZXJlZCcsXG4gICAgICAgICAgICB0eXBlOiAnSW50ZWdlcidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3Rlc3RzJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAndGVzdHNQZXJPbmVNaWxsaW9uJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAndG9kYXlDYXNlcycsXG4gICAgICAgICAgICB0eXBlOiAnSW50ZWdlcidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3RvZGF5RGVhdGhzJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9XVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENvdW50cnkpO1xuXG5leHBvcnQge0NvdW50cnkgYXMgZGVmYXVsdH07IiwiaW1wb3J0IE1vZGVsICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZGF0YS9Nb2RlbC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb3ZpZC5tb2RlbC5IaXN0b3JpY2FsRGF0YVxuICogQGV4dGVuZHMgTmVvLmRhdGEuTW9kZWxcbiAqL1xuY2xhc3MgSGlzdG9yaWNhbERhdGEgZXh0ZW5kcyBNb2RlbCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdDb3ZpZC5tb2RlbC5IaXN0b3JpY2FsRGF0YScsXG5cbiAgICAgICAgZmllbGRzOiBbe1xuICAgICAgICAgICAgbmFtZTogJ2FjdGl2ZScsIC8vIGRvZXMgbm90IGV4aXN0IGluIHRoZSBhcGkgPT4gY2FzZXMgLSBkZWF0aHMgLSByZWNvdmVyZWRcbiAgICAgICAgICAgIHR5cGU6ICdpbnQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdjYXNlcycsXG4gICAgICAgICAgICB0eXBlOiAnaW50J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZGF0ZScsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyAvLyBkYXRlID0+IDEvMjIvMjBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2RhaWx5QWN0aXZlJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbnQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdkYWlseUNhc2VzJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbnQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdkYWlseURlYXRocycsXG4gICAgICAgICAgICB0eXBlOiAnaW50J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZGFpbHlSZWNvdmVyZWQnLFxuICAgICAgICAgICAgdHlwZTogJ2ludCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2RlYXRocycsXG4gICAgICAgICAgICB0eXBlOiAnaW50J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAncmVjb3ZlcmVkJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbnQnXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGlzdG9yaWNhbERhdGEpO1xuXG5leHBvcnQge0hpc3RvcmljYWxEYXRhIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb3VudHJ5IGZyb20gJy4uL21vZGVsL0NvdW50cnkubWpzJztcbmltcG9ydCBTdG9yZSAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9kYXRhL1N0b3JlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLnN0b3JlLkNvdW50cmllc1xuICogQGV4dGVuZHMgTmVvLmRhdGEuU3RvcmVcbiAqL1xuY2xhc3MgQ291bnRyaWVzIGV4dGVuZHMgU3RvcmUge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQuc3RvcmUuQ291bnRyaWVzJyxcblxuICAgICAgICBrZXlQcm9wZXJ0eTogJ2NvdW50cnknLFxuICAgICAgICBtb2RlbCAgICAgIDogQ291bnRyeSxcblxuICAgICAgICBzb3J0ZXJzOiBbe1xuICAgICAgICAgICAgcHJvcGVydHkgOiAnY2FzZXMnLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnREVTQydcbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb3VudHJpZXMpO1xuXG5leHBvcnQge0NvdW50cmllcyBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgSGlzdG9yaWNhbERhdGFNb2RlbCBmcm9tICcuLi9tb2RlbC9IaXN0b3JpY2FsRGF0YS5tanMnO1xuaW1wb3J0IFN0b3JlICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2RhdGEvU3RvcmUubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgQ292aWQuc3RvcmUuSGlzdG9yaWNhbERhdGFcbiAqIEBleHRlbmRzIE5lby5kYXRhLlN0b3JlXG4gKi9cbmNsYXNzIEhpc3RvcmljYWxEYXRhIGV4dGVuZHMgU3RvcmUge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQuc3RvcmUuSGlzdG9yaWNhbERhdGEnLFxuXG4gICAgICAgIGtleVByb3BlcnR5OiAnZGF0ZScsXG4gICAgICAgIG1vZGVsICAgICAgOiBIaXN0b3JpY2FsRGF0YU1vZGVsLFxuXG4gICAgICAgIHNvcnRlcnM6IFt7XG4gICAgICAgICAgICBwcm9wZXJ0eSA6ICdkYXRlJyxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ0RFU0MnXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGlzdG9yaWNhbERhdGEpO1xuXG5leHBvcnQge0hpc3RvcmljYWxEYXRhIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLnZpZXcuQXR0cmlidXRpb25Db21wb25lbnRcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBBdHRyaWJ1dGlvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0NvdmlkLnZpZXcuQXR0cmlidXRpb25Db21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkLnZpZXcuQXR0cmlidXRpb25Db21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2NvdmlkLWF0dHJpYnV0aW9uLWNvbXBvbmVudCddXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsczogWydjb3ZpZC1hdHRyaWJ1dGlvbi1jb21wb25lbnQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgdmRvbToge1xuICAgICAgICAgICAgdGFnICA6ICdkaXYnLFxuICAgICAgICAgICAgc3R5bGU6IHttYXJnaW46ICcyMHB4J30sXG4gICAgICAgICAgICBjbiAgIDogW3tcbiAgICAgICAgICAgICAgICB0YWcgOiAnaDInLFxuICAgICAgICAgICAgICAgIGh0bWw6ICdBdHRyaWJ1dGlvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiAndWwnLFxuICAgICAgICAgICAgICAgIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgIHt0YWc6ICdsaScsIGh0bWw6ICdUaGUgbG9nb3Mgd2VyZSBjcmVhdGVkIGJ5IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5kcmllZm1laWVyLmNvbS9cIj5TZWJhc3RpYW4gRHJpZWZtZWllcjwvYT4uIFRoYW5rIHlvdSEnfSxcbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ2xpJywgaHRtbDogWydUaGUgbG9nb3MgYXJlIGJhc2VkIG9uIHRoZSBpbWFnZSBmcm9tIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3BoaWwuY2RjLmdvdi9EZXRhaWxzLmFzcHg/cGlkPTIzMzEyXCI+Q0RDIFB1YmxpYyBIZWFsdGggSW1hZ2UgTGlicmFyeSAoUEhJTCk8L2E+LDwvYnI+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdzbyBjcmVkaXRzIHRvIHRoZSBjb250ZW50IHByb3ZpZGVycyBDREMvIEFsaXNzYSBFY2tlcnQsIE1TOyBEYW4gSGlnZ2lucywgTUFNUy4nXS5qb2luKCcnKX0sXG4gICAgICAgICAgICAgICAgICAgIHt0YWc6ICdsaScsIGh0bWw6ICdEYXRhIHByb3ZpZGVkIGJ5OiA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL05vdmVsQ09WSUQvQVBJXCI+Tm92ZWxDT1ZJRCAvIEFQSTwvYT4uJ30sXG4gICAgICAgICAgICAgICAgICAgIHt0YWc6ICdsaScsIGh0bWw6ICdDb3VudHJ5IEZsYWcgSWNvbnMgbWFkZSBieSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2F1dGhvcnMvZnJlZXBpa1wiIHRpdGxlPVwiRnJlZXBpa1wiPkZyZWVwaWs8L2E+IGZyb20gPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9cIiB0aXRsZT1cIkZsYXRpY29uXCI+IHd3dy5mbGF0aWNvbi5jb208L2E+Lid9LFxuICAgICAgICAgICAgICAgICAgICB7dGFnOiAnbGknLCBodG1sOiAnQ2hhcnRzIGdvdCBjcmVhdGVkIHdpdGggPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmFtY2hhcnRzLmNvbS9kb2NzL3Y0L1wiPmFtQ2hhcnRzIDQ8L2E+Lid9LFxuICAgICAgICAgICAgICAgICAgICB7dGFnOiAnbGknLCBodG1sOiAnVGhlIEFwcCBpcyBjcmVhdGVkIHdpdGggdGhlIHdlYndvcmtlcnMgZHJpdmVuIFVJIGZyYW1ld29yayA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL25lb21qcy9uZW9cIj5uZW8ubWpzPC9hPi4nfSxcbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ2xpJywgaHRtbDogJ1RoZSBNYXBib3ggR0wgTWFwIGlzIGJhc2VkIG9uIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2RvY3MubWFwYm94LmNvbS9tYXBib3gtZ2wtanMvYXBpL1wiPk1hcGJveCBHTCBKUzwvYT4uJ30sXG4gICAgICAgICAgICAgICAgICAgIHt0YWc6ICdsaScsIGh0bWw6ICdUaGUgTWFwICYgSGVhdG1hcCBzdHlsZXMgYXJlIHN0cm9uZ2x5IGluc3BpcmVkIGJ5IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2Jsb2cubWFwYm94LmNvbS92aXN1YWxpemluZy10aGUtcHJvZ3Jlc3Npb24tb2YtdGhlLTIwMTktbmNvdi1vdXRicmVhay02Njc2M2ViNTllNzlcIj5WaXN1YWxpemluZyB0aGUgcHJvZ3Jlc3Npb24gb2YgdGhlIDIwMTktbkNvViBvdXRicmVhazwvYT4uJ31cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQXR0cmlidXRpb25Db21wb25lbnQpO1xuXG5leHBvcnQge0F0dHJpYnV0aW9uQ29tcG9uZW50IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRhaW5lci9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLnZpZXcuRm9vdGVyQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgRm9vdGVyQ29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nQ292aWQudmlldy5Gb290ZXJDb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkLnZpZXcuRm9vdGVyQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gaGVpZ2h0PTIwXG4gICAgICAgICAqL1xuICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsYXlvdXQ9e250eXBlOiAnaGJveCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2hib3gnfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gcmVmZXJlbmNlPSdmb290ZXInXG4gICAgICAgICAqL1xuICAgICAgICByZWZlcmVuY2U6ICdmb290ZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBzdHlsZT17b3ZlcmZsb3c6ICd2aXNpYmxlJ31cbiAgICAgICAgICovXG4gICAgICAgIHN0eWxlOiB7b3ZlcmZsb3c6ICd2aXNpYmxlJ30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGl0ZW1EZWZhdWx0c1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICBudHlwZTogJ2NvbXBvbmVudCcsXG4gICAgICAgICAgICBjbHMgIDogWyduZW8tbGluay1jb2xvciddLFxuICAgICAgICAgICAgc3R5bGU6IHtmb250U2l6ZTogJzEzcHgnLCBwYWRkaW5nOiAnMTBweCcsIHBhZGRpbmdUb3A6IDB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gaXRlbXNcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgaHRtbCA6ICdBcHAgY3JlYXRlZCB3aXRoIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbmVvbWpzL25lb1wiPm5lby5tanM8L2E+LidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZmxleDogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBodG1sIDogJ0RhdGEgcHJvdmlkZWQgYnkgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kaXNlYXNlLXNoL0FQSVwiPmRpc2Vhc2Uuc2gvQVBJPC9hPi4nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGZsZXg6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgaHRtbCA6ICdDb3VudHJ5IEZsYWcgSWNvbnMgbWFkZSBieSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2F1dGhvcnMvZnJlZXBpa1wiIHRpdGxlPVwiRnJlZXBpa1wiPkZyZWVwaWs8L2E+IGZyb20gPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9cIiB0aXRsZT1cIkZsYXRpY29uXCI+IHd3dy5mbGF0aWNvbi5jb208L2E+LidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICBjbHMgICAgOiBbJ25lby1idXR0b24nXSxcbiAgICAgICAgICAgIGhhbmRsZXI6ICdvblJlbW92ZUZvb3RlckJ1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgIGhlaWdodCA6IDI0LFxuICAgICAgICAgICAgc3R5bGUgIDoge21hcmdpbjogMCwgbWFyZ2luUmlnaHQ6ICcxMHB4JywgbWFyZ2luVG9wOiAnLTVweCd9LFxuICAgICAgICAgICAgdGV4dCAgIDogJ1JlbW92ZSBGb290ZXInXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRm9vdGVyQ29udGFpbmVyKTtcblxuZXhwb3J0IHtGb290ZXJDb250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJveExhYmVsICAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvQm94TGFiZWwubWpzJztcbmltcG9ydCBDb250YWluZXIgICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBHYWxsZXJ5ICAgICAgICAgICAgICAgICAgICBmcm9tICcuL2NvdW50cnkvR2FsbGVyeS5tanMnO1xuaW1wb3J0IEdhbGxlcnlDb250YWluZXJDb250cm9sbGVyIGZyb20gJy4vR2FsbGVyeUNvbnRhaW5lckNvbnRyb2xsZXIubWpzJztcbmltcG9ydCBQYW5lbCAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL1BhbmVsLm1qcyc7XG5pbXBvcnQgUmFuZ2VGaWVsZCAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2Zvcm0vZmllbGQvUmFuZ2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgQ292aWQudmlldy5HYWxsZXJ5Q29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgR2FsbGVyeUNvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0NvdmlkLnZpZXcuR2FsbGVyeUNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQudmlldy5HYWxsZXJ5Q29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tZ2FsbGVyeS1tYWluY29udGFpbmVyJywgJ25lby12aWV3cG9ydCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWdhbGxlcnktbWFpbmNvbnRhaW5lcicsICduZW8tdmlld3BvcnQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb250cm9sbGVyLkNvbXBvbmVudHxudWxsfSBjb250cm9sbGVyPUdhbGxlcnlDb250YWluZXJDb250cm9sbGVyXG4gICAgICAgICAqL1xuICAgICAgICBjb250cm9sbGVyOiBHYWxsZXJ5Q29udGFpbmVyQ29udHJvbGxlcixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb21wb25lbnQuR2FsbGVyeXxudWxsfSBnYWxsZXJ5PW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGdhbGxlcnk6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gZ2FsbGVyeUNvbmZpZz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBnYWxsZXJ5Q29uZmlnOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IGxheW91dD17bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W118bnVsbH0gaXRlbXNcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgIGZsZXggIDogMSxcbiAgICAgICAgICAgIGxheW91dDogJ2ZpdCcsXG4gICAgICAgICAgICBpdGVtcyA6IFtdXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogUGFuZWwsXG4gICAgICAgICAgICBjbHMgICAgICA6IFsnbmVvLWNvbmZpZ3VyYXRpb24tcGFuZWwnLCAnbmVvLXBhbmVsJywgJ25lby1jb250YWluZXInXSxcbiAgICAgICAgICAgIGxheW91dCAgIDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAgICAgcmVmZXJlbmNlOiAnY29udHJvbHMtcGFuZWwnLFxuICAgICAgICAgICAgc3R5bGUgICAgOiB7YmFja2dyb3VuZENvbG9yOiAnIzJiMmIyYid9LFxuICAgICAgICAgICAgd2lkdGggICAgOiAyNjAsXG5cbiAgICAgICAgICAgIGNvbnRhaW5lckNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7b3ZlcmZsb3dZOiAnc2Nyb2xsJ31cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGhlYWRlcnM6IFt7XG4gICAgICAgICAgICAgICAgZG9jazogJ3RvcCcsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAnb25Db2xsYXBzZUJ1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ1gnXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdHYWxsZXJ5IENvbnRyb2xzJ1xuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XSxcblxuICAgICAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgZmxleCAgICAgICAgIDogJzAgMSBhdXRvJyxcbiAgICAgICAgICAgICAgICBsYWJlbFdpZHRoICAgOiAnMTEwcHgnLFxuICAgICAgICAgICAgICAgIHN0eWxlICAgICAgICA6IHtwYWRkaW5nOiAnMTBweCd9LFxuICAgICAgICAgICAgICAgIHVzZUlucHV0RXZlbnQ6IHRydWVcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgIDogUmFuZ2VGaWVsZCxcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdUcmFuc2xhdGUgWCcsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiA1MDAwLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICd0cmFuc2xhdGVYJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDAsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZSA6ICdvblJhbmdlZmllbGRDaGFuZ2UnLFxuICAgICAgICAgICAgICAgICAgICBtb3VudGVkOiAnb25SYW5nZWZpZWxkTW91bnRlZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgOiBSYW5nZUZpZWxkLFxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1RyYW5zbGF0ZSBZJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDE1MDAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAtMTUwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICd0cmFuc2xhdGVZJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDAsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogJ29uUmFuZ2VmaWVsZENoYW5nZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgOiBSYW5nZUZpZWxkLFxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1RyYW5zbGF0ZSBaJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDU1MCxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IC00NTAwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3RyYW5zbGF0ZVonLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogMCxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlIDogJ29uUmFuZ2VmaWVsZENoYW5nZScsXG4gICAgICAgICAgICAgICAgICAgIG1vdW50ZWQ6ICdvblJhbmdlZmllbGRNb3VudGVkJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgICA6IFJhbmdlRmllbGQsXG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnQW1vdW50IFJvd3MnLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMTUsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAxLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ2Ftb3VudFJvd3MnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogMyxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiAnb25SYW5nZWZpZWxkQ2hhbmdlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiAnb25PcmRlckJ1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnT3JkZXIgYnkgUm93JyxcbiAgICAgICAgICAgICAgICBzdHlsZSAgOiB7bWFyZ2luOiAnMjBweCd9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGU6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgdGV4dCA6ICdTb3J0IEJ5OidcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAgICAgICAgIHN0eWxlIDoge21pbkhlaWdodDogJzEzNHB4JywgcGFkZGluZzogJzAnfSxcblxuICAgICAgICAgICAgICAgIGl0ZW1zIDogW3tcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ30sXG5cbiAgICAgICAgICAgICAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvblNvcnRCdXR0b25DbGljaydcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnY2FzZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdDYXNlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Ub3A6ICcwJ31cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdkZWF0aHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdEZWF0aHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHttYXJnaW46ICcxMHB4JywgbWFyZ2luQm90dG9tOiAnMTBweCcsIG1hcmdpblRvcDogMH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdjb3VudHJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiAnQ291bnRyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Ub3A6IDB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiAncmVjb3ZlcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiAnUmVjb3ZlcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpblRvcDogMH1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIGxheW91dDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1EZWZhdWx0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAnb25Tb3J0QnV0dG9uQ2xpY2snXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ3RvZGF5Q2FzZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdDYXNlcyB0b2RheScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Ub3A6ICcwJ31cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICd0b2RheURlYXRocycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ0RlYXRocyB0b2RheScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Cb3R0b206ICcxMHB4JywgbWFyZ2luVG9wOiAwfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ2NyaXRpY2FsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiAnQ3JpdGljYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHttYXJnaW46ICcxMHB4JywgbWFyZ2luQm90dG9tOiAnNDNweCcsIG1hcmdpblRvcDogMH1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG1vZHVsZTogQm94TGFiZWwsXG4gICAgICAgICAgICAgICAgdGV4dCAgOiBbXG4gICAgICAgICAgICAgICAgICAgICc8Yj5OYXZpZ2F0aW9uIENvbmNlcHQ8L2I+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxwPllvdSBjYW4gdXNlIHRoZSBBcnJvdyBLZXlzIHRvIHdhbGsgdGhyb3VnaCB0aGUgaXRlbXMuPC9wPidcbiAgICAgICAgICAgICAgICBdLmpvaW4oJycpXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuZ2FsbGVyeSA9IE5lby5jcmVhdGUoe1xuICAgICAgICAgICAgbW9kdWxlICAgOiBHYWxsZXJ5LFxuICAgICAgICAgICAgcmVmZXJlbmNlOiAnZ2FsbGVyeScsXG4gICAgICAgICAgICAuLi5tZS5nYWxsZXJ5Q29uZmlnIHx8IHt9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLml0ZW1zWzBdLml0ZW1zLnB1c2gobWUuZ2FsbGVyeSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBkZXN0cm95KC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5nYWxsZXJ5ID0gbnVsbDtcbiAgICAgICAgc3VwZXIuZGVzdHJveSguLi5hcmdzKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEdhbGxlcnlDb250YWluZXIpO1xuXG5leHBvcnQge0dhbGxlcnlDb250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbXBvbmVudENvbnRyb2xsZXIgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRyb2xsZXIvQ29tcG9uZW50Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLnZpZXcuR2FsbGVyeUNvbnRhaW5lckNvbnRyb2xsZXJcbiAqIEBleHRlbmRzIE5lby5jb250cm9sbGVyLkNvbXBvbmVudFxuICovXG5jbGFzcyBHYWxsZXJ5Q29udGFpbmVyQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdDb3ZpZC52aWV3LkdhbGxlcnlDb250YWluZXJDb250cm9sbGVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdDb3ZpZC52aWV3LkdhbGxlcnlDb250YWluZXJDb250cm9sbGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb21wb25lbnQuR2FsbGVyeXxudWxsfSBnYWxsZXJ5Xz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGdhbGxlcnlfOiBudWxsXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCB3aGVuIGFjY2Vzc2luZyB0aGUgZ2FsbGVyeSBjb25maWdcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuR2FsbGVyeXxudWxsfSB2YWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVHZXRHYWxsZXJ5KHZhbHVlKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2dhbGxlcnkgPSB2YWx1ZSA9IHRoaXMuZ2V0UmVmZXJlbmNlKCdnYWxsZXJ5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uQ29sbGFwc2VCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIGNvbnN0IHBhbmVsICA9IHRoaXMuZ2V0UmVmZXJlbmNlKCdjb250cm9scy1wYW5lbCcpLFxuICAgICAgICAgICAgICBleHBhbmQgPSBwYW5lbC53aWR0aCA9PT0gNDA7XG5cbiAgICAgICAgcGFuZWwud2lkdGggPSBleHBhbmQgPyAyNTAgOiA0MDtcblxuICAgICAgICBkYXRhLmNvbXBvbmVudC50ZXh0ID0gZXhwYW5kID8gJ1gnIDogJysnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbk9yZGVyQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICBjb25zdCBnYWxsZXJ5ICAgID0gdGhpcy5nYWxsZXJ5LFxuICAgICAgICAgICAgICBvcmRlckJ5Um93ID0gIWdhbGxlcnkub3JkZXJCeVJvdztcblxuICAgICAgICBkYXRhLmNvbXBvbmVudC50ZXh0ID0gb3JkZXJCeVJvdyA9PT0gdHJ1ZSA/ICdPcmRlciBCeSBDb2x1bW4nIDogJ09yZGVyIGJ5IFJvdyc7XG5cbiAgICAgICAgZ2FsbGVyeS5vcmRlckJ5Um93ID0gb3JkZXJCeVJvdztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25SYW5nZWZpZWxkQ2hhbmdlKGRhdGEpIHtcbiAgICAgICAgdGhpcy5nYWxsZXJ5W2RhdGEuY29tcG9uZW50Lm5hbWVdID0gZGF0YS52YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAqL1xuICAgIG9uUmFuZ2VmaWVsZE1vdW50ZWQoaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBOZW8uZ2V0Q29tcG9uZW50KGlkKTtcblxuICAgICAgICB0aGlzLmdhbGxlcnkub24oJ2NoYW5nZScgKyBOZW8uY2FwaXRhbGl6ZShmaWVsZC5uYW1lKSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIGZpZWxkLm1pblZhbHVlKSwgZmllbGQubWF4VmFsdWUpO1xuICAgICAgICAgICAgZmllbGQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uU29ydEJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5nYWxsZXJ5LnN0b3JlLnNvcnRlcnMgPSBbe1xuICAgICAgICAgICAgcHJvcGVydHkgOiBkYXRhLmNvbXBvbmVudC5maWVsZCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ0RFU0MnXG4gICAgICAgIH1dO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoR2FsbGVyeUNvbnRhaW5lckNvbnRyb2xsZXIpO1xuXG5leHBvcnQge0dhbGxlcnlDb250YWluZXJDb250cm9sbGVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb250YWluZXIgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRhaW5lci9CYXNlLm1qcyc7XG5pbXBvcnQgQ291bnRyeVN0b3JlIGZyb20gJy4uL3N0b3JlL0NvdW50cmllcy5tanMnO1xuaW1wb3J0IFNlbGVjdEZpZWxkICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9TZWxlY3QubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgQ292aWQudmlldy5IZWFkZXJDb250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBIZWFkZXJDb250YWluZXIgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdDb3ZpZC52aWV3LkhlYWRlckNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQudmlldy5IZWFkZXJDb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2NvdmlkLWhlYWRlci1jb250YWluZXInXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ2NvdmlkLWhlYWRlci1jb250YWluZXInXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gaGVpZ2h0PTcwXG4gICAgICAgICAqL1xuICAgICAgICBoZWlnaHQ6IDEyMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbGF5b3V0PXtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgICAgICAgKi9cbiAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gaXRlbXNcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgbnR5cGUgICAgOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgIG1pbldpZHRoIDogMjY3LFxuICAgICAgICAgICAgcmVmZXJlbmNlOiAnbG9nbycsXG4gICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW46ICcxMHB4J30sXG4gICAgICAgICAgICB3aWR0aCAgICA6IDI2NyxcblxuICAgICAgICAgICAgdmRvbToge1xuICAgICAgICAgICAgICAgIHRhZzogJ2ltZycsXG4gICAgICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL25lb21qcy9wYWdlcy9tYXN0ZXIvcmVzb3VyY2VzL2ltYWdlcy9hcHBzL2NvdmlkL2NvdmlkX2xvZ29fZGFyay5qcGcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG50eXBlIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgICAgIGl0ZW1zIDogW3tcbiAgICAgICAgICAgICAgICBudHlwZSAgICA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgIGhlaWdodCAgIDogNjUsXG4gICAgICAgICAgICAgICAgbGF5b3V0ICAgOiB7bnR5cGU6ICdoYm94J30sXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAndG90YWwtc3RhdHMnLFxuXG4gICAgICAgICAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50J1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgY2xzIDogWydjb3ZpZC1udW1iZXJib3gnXSxcbiAgICAgICAgICAgICAgICAgICAgdmRvbToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvdmlkLW51bWJlcmJveC10aXRsZScsICAnY2FzZXMnXSwgIGh0bWw6J0Nhc2VzJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NsczogWydjb3ZpZC1udW1iZXJib3gtbnVtYmVyJywgJ2Nhc2VzJ119XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGNscyA6IFsnY292aWQtbnVtYmVyYm94J10sXG4gICAgICAgICAgICAgICAgICAgIHZkb206IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NsczogWydjb3ZpZC1udW1iZXJib3gtdGl0bGUnLCAgJ2FjdGl2ZSddLCBodG1sOidBY3RpdmUnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvdmlkLW51bWJlcmJveC1udW1iZXInLCAnYWN0aXZlJ119XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGNscyA6IFsnY292aWQtbnVtYmVyYm94J10sXG4gICAgICAgICAgICAgICAgICAgIHZkb206IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NsczogWydjb3ZpZC1udW1iZXJib3gtdGl0bGUnLCAgJ3JlY292ZXJlZCddLCBodG1sOidSZWNvdmVyZWQnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvdmlkLW51bWJlcmJveC1udW1iZXInLCAncmVjb3ZlcmVkJ119XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGNscyA6IFsnY292aWQtbnVtYmVyYm94J10sXG4gICAgICAgICAgICAgICAgICAgIHZkb206IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NsczogWydjb3ZpZC1udW1iZXJib3gtdGl0bGUnLCAgJ2RlYXRocyddLCBodG1sOidEZWF0aHMnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvdmlkLW51bWJlcmJveC1udW1iZXInLCAnZGVhdGhzJ119XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDFcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7cGFkZGluZzogJzEwcHgnfSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyNSxcbiAgICAgICAgICAgICAgICAgICAgdmRvbSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZyAgICAgICAgICAgICAgOiAnYScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWwnICAgICA6ICdTdGFyIG5lb21qcy9uZW8gb24gR2l0SHViJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHMgICAgICAgICAgICAgIDogWydnaXRodWItYnV0dG9uJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtc2hvdy1jb3VudCc6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1zaXplJyAgICAgIDogJ2xhcmdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmICAgICAgICAgICAgIDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9uZW9tanMvbmVvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sICAgICAgICAgICAgIDogJ1N0YXInXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge3BhZGRpbmc6ICcxMHB4J30sXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDUsXG4gICAgICAgICAgICAgICAgICAgIHZkb20gOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWcgICAgICAgICAgICAgIDogJ2EnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWxhYmVsJyAgICAgOiAnU3BvbnNvciBAdG9iaXUgb24gR2l0SHViJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHMgICAgICAgICAgICAgIDogWydnaXRodWItYnV0dG9uJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtaWNvbicgICAgICA6ICdvY3RpY29uLWhlYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1zaXplJyAgICAgIDogJ2xhcmdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmICAgICAgICAgICAgIDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zcG9uc29ycy90b2JpdScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCAgICAgICAgICAgICA6ICdTcG9uc29yJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2hib3gnfSxcblxuICAgICAgICAgICAgICAgIGl0ZW1EZWZhdWx0czoge1xuICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2NvbXBvbmVudCdcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgaXRlbXMgOiBbe1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGUgICAgICAgOiBTZWxlY3RGaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUZpZWxkIDogJ2NvdW50cnknLFxuICAgICAgICAgICAgICAgICAgICBmbGV4ICAgICAgICAgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCAgICAgICA6IDI1LFxuICAgICAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uOiAnaW5saW5lJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0ICAgIDogJ1NlbGVjdCBhIENvdW50cnknLFxuICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aCAgICAgOiAxNDAsXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZSAgICA6ICdjb3VudHJ5LWZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgICAgICAgIDoge21hcmdpblRvcDogJzE1cHgnfSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggICAgICAgIDogMjAwLFxuXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXIgOiAnb25Db3VudHJ5RmllbGRDbGVhcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Q6ICdvbkNvdW50cnlGaWVsZFNlbGVjdCdcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBzdG9yZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlIDogQ291bnRyeVN0b3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGVyczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6ICdjb3VudHJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdBU0MnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgZmxleCAgIDogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAnb25Td2l0Y2hUaGVtZUJ1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IDogMjUsXG4gICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1zdW4nLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZSAgOiB7bWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5Ub3A6ICcxNXB4J30sXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdUaGVtZSBMaWdodCdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICBmbGV4ICAgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvblJlbG9hZERhdGFCdXR0b25DbGljaycsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA6IDI1LFxuICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtc3luYy1hbHQnLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZSAgOiB7bWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5Ub3A6ICcxNXB4J30sXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdSZWxvYWQgRGF0YSdcbiAgICAgICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgICAgOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgICA6IDI1LFxuICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICdsYXN0LXVwZGF0ZScsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpbkxlZnQ6ICcxMHB4JywgbWFyZ2luVG9wOiAnMThweCd9LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICcnXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGVhZGVyQ29udGFpbmVyKTtcblxuZXhwb3J0IHtIZWFkZXJDb250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJveExhYmVsICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0JveExhYmVsLm1qcyc7XG5pbXBvcnQgQ29udGFpbmVyICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250YWluZXIvQmFzZS5tanMnO1xuaW1wb3J0IEhlbGl4ICAgICAgICAgICAgICAgICAgICBmcm9tICcuL2NvdW50cnkvSGVsaXgubWpzJztcbmltcG9ydCBIZWxpeENvbnRhaW5lckNvbnRyb2xsZXIgZnJvbSAnLi9IZWxpeENvbnRhaW5lckNvbnRyb2xsZXIubWpzJztcbmltcG9ydCBQYW5lbCAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRhaW5lci9QYW5lbC5tanMnO1xuaW1wb3J0IFJhbmdlRmllbGQgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9SYW5nZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb3ZpZC52aWV3LkhlbGl4Q29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgSGVsaXhDb250YWluZXIgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdDb3ZpZC52aWV3LkhlbGl4Q29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdDb3ZpZC52aWV3LkhlbGl4Q29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8taGVsaXgtbWFpbmNvbnRhaW5lcicsICduZW8tdmlld3BvcnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1oZWxpeC1tYWluY29udGFpbmVyJywgJ25lby12aWV3cG9ydCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50fG51bGx9IGNvbnRyb2xsZXI9SGVsaXhDb250YWluZXJDb250cm9sbGVyXG4gICAgICAgICAqL1xuICAgICAgICBjb250cm9sbGVyOiBIZWxpeENvbnRhaW5lckNvbnRyb2xsZXIsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29tcG9uZW50LkhlbGl4fG51bGx9IGhlbGl4PW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGhlbGl4OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IGhlbGl4Q29uZmlnPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGhlbGl4Q29uZmlnOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IGxheW91dD17bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W118bnVsbH0gaXRlbXNcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgIGZsZXggIDogMSxcbiAgICAgICAgICAgIGl0ZW1zIDogW10sXG4gICAgICAgICAgICBsYXlvdXQ6ICdmaXQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogUGFuZWwsXG4gICAgICAgICAgICBjbHMgICAgICA6IFsnbmVvLWNvbmZpZ3VyYXRpb24tcGFuZWwnLCAnbmVvLXBhbmVsJywgJ25lby1jb250YWluZXInXSxcbiAgICAgICAgICAgIGxheW91dCAgIDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAgICAgcmVmZXJlbmNlOiAnY29udHJvbHMtcGFuZWwnLFxuICAgICAgICAgICAgc3R5bGUgICAgOiB7YmFja2dyb3VuZENvbG9yOiAnIzJiMmIyYid9LFxuICAgICAgICAgICAgd2lkdGggICAgOiAyNTAsXG5cbiAgICAgICAgICAgIGNvbnRhaW5lckNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7b3ZlcmZsb3dZOiAnc2Nyb2xsJ31cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGhlYWRlcnM6IFt7XG4gICAgICAgICAgICAgICAgZG9jayA6ICd0b3AnLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uQ29sbGFwc2VCdXR0b25DbGljaycsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdYJ1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGU6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgOiAnSGVsaXggQ29udHJvbHMnXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dLFxuXG4gICAgICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgICAgICBudHlwZSAgICAgICAgOiAncmFuZ2VmaWVsZCcsXG4gICAgICAgICAgICAgICAgZmxleCAgICAgICAgIDogJzAgMSBhdXRvJyxcbiAgICAgICAgICAgICAgICBsYWJlbFdpZHRoICAgOiAnMTAwcHgnLFxuICAgICAgICAgICAgICAgIHN0eWxlICAgICAgICA6IHtwYWRkaW5nOiAnMTBweCd9LFxuICAgICAgICAgICAgICAgIHVzZUlucHV0RXZlbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzICAgIDoge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6ICdvblJhbmdlZmllbGRDaGFuZ2UnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnVHJhbnNsYXRlIFgnLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMjAwMCxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IC0yMDAwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3RyYW5zbGF0ZVgnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogNDAwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnVHJhbnNsYXRlIFknLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMjUwMCxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IC0yNTAwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3RyYW5zbGF0ZVknLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogLTM1MFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogJ2NoYW5nZVRyYW5zbGF0ZVonLFxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1RyYW5zbGF0ZSBaJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDQ1MDAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAtNDUwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICd0cmFuc2xhdGVaJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IC0xNTAwLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2UgOiAnb25SYW5nZWZpZWxkQ2hhbmdlJyxcbiAgICAgICAgICAgICAgICAgICAgbW91bnRlZDogJ29uUmFuZ2VmaWVsZE1vdW50ZWQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dCA6ICdEZWx0YSBZJyxcbiAgICAgICAgICAgICAgICBsYWJlbEFsaWduOiAndG9wJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSAgOiA2MDAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgIDogLTYwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICAgOiAnZGVsdGFZJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICAgOiA3MFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogJ2NoYW5nZVJvdGF0aW9uJyxcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdSb3RhdGUnLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogLTcyMCxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDcyMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICdyb3RhdGlvbkFuZ2xlJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDAsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZSA6ICdvblJhbmdlZmllbGRDaGFuZ2UnLFxuICAgICAgICAgICAgICAgICAgICBtb3VudGVkOiAnb25SYW5nZWZpZWxkTW91bnRlZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnUmFkaXVzJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDM1MDAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiA5MDAsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAncmFkaXVzJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDE1MDBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdQZXJzcGVjdGl2ZScsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiA1MCxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDMwMDAsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAncGVyc3BlY3RpdmUnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogODAwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnSXRlbSBBbmdsZScsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAxLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMzYsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAnaXRlbUFuZ2xlJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDhcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdNYXggT3BhY2l0eScsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAnbWF4T3BhY2l0eScsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAwLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMTAwLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogODAgLy8gdG9kbzogbXVsdGktdGh1bWIgc2xpZGVyIFszMCwgODBdXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnTWluIE9wYWNpdHknLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ21pbk9wYWNpdHknLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogMCxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDEwMCxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDMwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGUgICAgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgaGFuZGxlciAgOiAnb25GbGlwSXRlbXNCdXR0b25DbGljaycsXG4gICAgICAgICAgICAgICAgdGV4dCAgICAgIDogJ0ZsaXAgSXRlbXMnLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge30sXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luOiAnMjBweCd9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGU6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgdGV4dCA6ICdTb3J0IEJ5OidcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAgICAgICAgIHN0eWxlIDoge21pbkhlaWdodDogJzEzNHB4JywgcGFkZGluZzogJzAnfSxcblxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcblxuICAgICAgICAgICAgICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG50eXBlICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uU29ydEJ1dHRvbkNsaWNrJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdjYXNlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ0Nhc2VzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpblRvcDogJzAnfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ2RlYXRocycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ0RlYXRocycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Cb3R0b206ICcxMHB4JywgbWFyZ2luVG9wOiAwfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ2NvdW50cnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdDb3VudHJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpblRvcDogMH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdyZWNvdmVyZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdSZWNvdmVyZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHttYXJnaW46ICcxMHB4JywgbWFyZ2luVG9wOiAwfVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ30sXG5cbiAgICAgICAgICAgICAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvblNvcnRCdXR0b25DbGljaydcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiAndG9kYXlDYXNlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ0Nhc2VzIHRvZGF5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpblRvcDogJzAnfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ3RvZGF5RGVhdGhzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiAnRGVhdGhzIHRvZGF5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpbkJvdHRvbTogJzEwcHgnLCBtYXJnaW5Ub3A6IDB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnY3JpdGljYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdDcml0aWNhbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Cb3R0b206ICc0M3B4JywgbWFyZ2luVG9wOiAwfVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGUgICAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVyICA6ICdvbkZvbGxvd1NlbGVjdGlvbkJ1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICBpY29uQ2xzICA6ICdmYSBmYS1zcXVhcmUnLFxuICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0ZvbGxvdyBTZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge30sXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luICAgICAgOiAnMjBweCcsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG1vZHVsZTogQm94TGFiZWwsXG4gICAgICAgICAgICAgICAgdGV4dCAgOiBbXG4gICAgICAgICAgICAgICAgICAgICc8Yj5OYXZpZ2F0aW9uIENvbmNlcHQ8L2I+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxwPkNsaWNrIG9uIGFuIGl0ZW0gdG8gc2VsZWN0IGl0LiBBZnRlcndhcmRzIHlvdSBjYW4gdXNlIHRoZSBBcnJvdyBLZXlzIHRvIHdhbGsgdGhyb3VnaCB0aGUgaXRlbXMuPC9wPicsXG4gICAgICAgICAgICAgICAgICAgICc8cD5IaXQgdGhlIFNwYWNlIEtleSB0byByb3RhdGUgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtIHRvIHRoZSBmcm9udC48L3A+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxwPkhpdCB0aGUgRW50ZXIgS2V5IHRvIGV4cGFuZCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0uPC9wPidcbiAgICAgICAgICAgICAgICBdLmpvaW4oJycpXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuaGVsaXggPSBOZW8uY3JlYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogSGVsaXgsXG4gICAgICAgICAgICByZWZlcmVuY2U6ICdoZWxpeCcsXG4gICAgICAgICAgICAuLi5tZS5oZWxpeENvbmZpZyB8fCB7fVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5pdGVtc1swXS5pdGVtcy5wdXNoKG1lLmhlbGl4KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEhlbGl4Q29udGFpbmVyKTtcblxuZXhwb3J0IHtIZWxpeENvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29tcG9uZW50Q29udHJvbGxlciBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udHJvbGxlci9Db21wb25lbnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgQ292aWQudmlldy5IZWxpeENvbnRhaW5lckNvbnRyb2xsZXJcbiAqIEBleHRlbmRzIE5lby5jb250cm9sbGVyLkNvbXBvbmVudFxuICovXG5jbGFzcyBIZWxpeENvbnRhaW5lckNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnRDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nQ292aWQudmlldy5IZWxpeENvbnRhaW5lckNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkLnZpZXcuSGVsaXhDb250YWluZXJDb250cm9sbGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb21wb25lbnQuSGVsaXh8bnVsbH0gaGVsaXhfPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaGVsaXhfOiBudWxsXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCB3aGVuIGFjY2Vzc2luZyB0aGUgaGVsaXggY29uZmlnXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkhlbGl4fG51bGx9IHZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZUdldEhlbGl4KHZhbHVlKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2hlbGl4ID0gdmFsdWUgPSB0aGlzLmdldFJlZmVyZW5jZSgnaGVsaXgnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Db2xsYXBzZUJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgY29uc3QgcGFuZWwgID0gdGhpcy5nZXRSZWZlcmVuY2UoJ2NvbnRyb2xzLXBhbmVsJyksXG4gICAgICAgICAgICAgIGV4cGFuZCA9IHBhbmVsLndpZHRoID09PSA0MDtcblxuICAgICAgICBwYW5lbC53aWR0aCA9IGV4cGFuZCA/IDI1MCA6IDQwO1xuXG4gICAgICAgIGRhdGEuY29tcG9uZW50LnRleHQgPSBleHBhbmQgPyAnWCcgOiAnKyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRmxpcEl0ZW1zQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmhlbGl4LmZsaXBwZWQgPSAhdGhpcy5oZWxpeC5mbGlwcGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkZvbGxvd1NlbGVjdGlvbkJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZGF0YS5jb21wb25lbnQ7XG5cbiAgICAgICAgaWYgKGJ1dHRvbi5pY29uQ2xzID09PSAnZmEgZmEtc3F1YXJlJykge1xuICAgICAgICAgICAgdGhpcy5oZWxpeC5mb2xsb3dTZWxlY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgYnV0dG9uLmljb25DbHMgPSAnZmEgZmEtY2hlY2stc3F1YXJlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGVsaXguZm9sbG93U2VsZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICBidXR0b24uaWNvbkNscyA9ICdmYSBmYS1zcXVhcmUnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uUmFuZ2VmaWVsZENoYW5nZShkYXRhKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkYXRhLmNvbXBvbmVudC5uYW1lO1xuXG4gICAgICAgIGlmIChbJ2RlbHRhWScsICdtYXhPcGFjaXR5JywgJ21pbk9wYWNpdHknXS5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgICAgICAgZGF0YS52YWx1ZSAvPSAxMDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhlbGl4W25hbWVdID0gZGF0YS52YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAqL1xuICAgIG9uUmFuZ2VmaWVsZE1vdW50ZWQoaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBOZW8uZ2V0Q29tcG9uZW50KGlkKTtcblxuICAgICAgICB0aGlzLmhlbGl4Lm9uKGZpZWxkLmV2ZW50TmFtZSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIGZpZWxkLm1pblZhbHVlKSwgZmllbGQubWF4VmFsdWUpO1xuICAgICAgICAgICAgZmllbGQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uU29ydEJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5oZWxpeC5zdG9yZS5zb3J0ZXJzID0gW3tcbiAgICAgICAgICAgIHByb3BlcnR5IDogZGF0YS5jb21wb25lbnQuZmllbGQsXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdERVNDJ1xuICAgICAgICB9XTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEhlbGl4Q29udGFpbmVyQ29udHJvbGxlcik7XG5cbmV4cG9ydCB7SGVsaXhDb250YWluZXJDb250cm9sbGVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBBdHRyaWJ1dGlvbkNvbXBvbmVudCAgICBmcm9tICcuL0F0dHJpYnV0aW9uQ29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgRm9vdGVyQ29udGFpbmVyICAgICAgICAgZnJvbSAnLi9Gb290ZXJDb250YWluZXIubWpzJztcbmltcG9ydCBHYWxsZXJ5Q29udGFpbmVyICAgICAgICBmcm9tICcuL0dhbGxlcnlDb250YWluZXIubWpzJztcbmltcG9ydCBIZWFkZXJDb250YWluZXIgICAgICAgICBmcm9tICcuL0hlYWRlckNvbnRhaW5lci5tanMnO1xuaW1wb3J0IEhlbGl4Q29udGFpbmVyICAgICAgICAgIGZyb20gJy4vSGVsaXhDb250YWluZXIubWpzJztcbmltcG9ydCBNYWluQ29udGFpbmVyQ29udHJvbGxlciBmcm9tICcuL01haW5Db250YWluZXJDb250cm9sbGVyLm1qcyc7XG5pbXBvcnQgTWFwYm94R2xDb250YWluZXIgICAgICAgZnJvbSAnLi9tYXBib3hHbC9Db250YWluZXIubWpzJztcbmltcG9ydCBUYWJDb250YWluZXIgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdGFiL0NvbnRhaW5lci5tanMnO1xuaW1wb3J0IFRhYmxlQ29udGFpbmVyICAgICAgICAgIGZyb20gJy4vVGFibGVDb250YWluZXIubWpzJztcbmltcG9ydCBWaWV3cG9ydCAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL1ZpZXdwb3J0Lm1qcyc7XG5pbXBvcnQgV29ybGRNYXBDb250YWluZXIgICAgICAgZnJvbSAnLi9Xb3JsZE1hcENvbnRhaW5lci5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb3ZpZC52aWV3Lk1haW5Db250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuVmlld3BvcnRcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lciBleHRlbmRzIFZpZXdwb3J0IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nQ292aWQudmlldy5NYWluQ29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdDb3ZpZC52aWV3Lk1haW5Db250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXV0b01vdW50PXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGF1dG9Nb3VudDogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBjbHM9Wydjb3ZpZC12aWV3cG9ydCcsICduZW8tdmlld3BvcnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ2NvdmlkLXZpZXdwb3J0JywgJ25lby12aWV3cG9ydCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50fSBjb250cm9sbGVyPU1haW5Db250YWluZXJDb250cm9sbGVyXG4gICAgICAgICAqL1xuICAgICAgICBjb250cm9sbGVyOiBNYWluQ29udGFpbmVyQ29udHJvbGxlcixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtc1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFtIZWFkZXJDb250YWluZXIsIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogVGFiQ29udGFpbmVyLFxuICAgICAgICAgICAgZmxleCAgICAgOiAxLFxuICAgICAgICAgICAgcmVmZXJlbmNlOiAndGFiLWNvbnRhaW5lcicsXG4gICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW46ICcxMHB4JywgbWFyZ2luVG9wOiAwfSxcblxuICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgICAgICAgOiBUYWJsZUNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICByZWZlcmVuY2UgICAgICA6ICd0YWJsZS1jb250YWluZXInLFxuICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtdGFibGUnLFxuICAgICAgICAgICAgICAgICAgICByb3V0ZSAgOiAnbWFpbnZpZXc9dGFibGUnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnVGFibGUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgICAgICAgIDogTWFwYm94R2xDb250YWluZXIsXG4gICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1nbG9iZS1hbWVyaWNhcycsXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICA6ICdtYWludmlldz1tYXBib3hnbG1hcCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdNYXBib3ggR0wgTWFwJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgICAgICAgICA6IFdvcmxkTWFwQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtZ2xvYmUtYW1lcmljYXMnLFxuICAgICAgICAgICAgICAgICAgICByb3V0ZSAgOiAnbWFpbnZpZXc9d29ybGRtYXAnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnV29ybGQgTWFwJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgICAgICAgICA6IEdhbGxlcnlDb250YWluZXIsXG4gICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1pbWFnZXMnLFxuICAgICAgICAgICAgICAgICAgICByb3V0ZSAgOiAnbWFpbnZpZXc9Z2FsbGVyeScsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdHYWxsZXJ5J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgICAgICAgICA6IEhlbGl4Q29udGFpbmVyLFxuICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtZG5hJyxcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgIDogJ21haW52aWV3PWhlbGl4JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ0hlbGl4J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgICAgICAgICA6IEF0dHJpYnV0aW9uQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZSAgICAgIDogJ2F0dHJpYnV0aW9uJyxcbiAgICAgICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWNvcHlyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICA6ICdtYWludmlldz1hdHRyaWJ1dGlvbicsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdBdHRyaWJ1dGlvbidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XVxuICAgICAgICB9LCBGb290ZXJDb250YWluZXJdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsYXlvdXQ9e250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5Db250YWluZXIpO1xuXG5leHBvcnQge01haW5Db250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbXBvbmVudENvbnRyb2xsZXIgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRyb2xsZXIvQ29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9BcnJheS5tanMnO1xuaW1wb3J0IFV0aWwgICAgICAgICAgICAgICAgZnJvbSAnLi4vVXRpbC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb3ZpZC52aWV3Lk1haW5Db250YWluZXJDb250cm9sbGVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udHJvbGxlci5Db21wb25lbnRcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnRDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nQ292aWQudmlldy5NYWluQ29udGFpbmVyQ29udHJvbGxlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQudmlldy5NYWluQ29udGFpbmVyQ29udHJvbGxlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdtYWluY29udGFpbmVyLWNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbWFpbmNvbnRhaW5lci1jb250cm9sbGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gYWN0aXZlTWFpblRhYkluZGV4PTBcbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2ZU1haW5UYWJJbmRleDogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYXBpU3VtbWFyeVVybD0naHR0cHM6Ly9kaXNlYXNlLnNoL3YyL2FsbCdcbiAgICAgICAgICovXG4gICAgICAgIGFwaVN1bW1hcnlVcmw6ICdodHRwczovL2Rpc2Vhc2Uuc2gvdjIvYWxsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYXBpVXJsPSdodHRwczovL2Rpc2Vhc2Uuc2gvdjIvY291bnRyaWVzJ1xuICAgICAgICAgKi9cbiAgICAgICAgYXBpVXJsOiAnaHR0cHM6Ly9kaXNlYXNlLnNoL3YyL2NvdW50cmllcycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gY291bnRyeVJlY29yZD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBjb3VudHJ5UmVjb3JkOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W118bnVsbH0gZGF0YT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IG1haW5UYWJzPVsndGFibGUnLCAnbWFwYm94Z2xtYXAnLCAnd29ybGRtYXAnLCAnZ2FsbGVyeScsICdoZWxpeCcsICdhdHRyaWJ1dGlvbiddXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG1haW5UYWJzOiBbJ3RhYmxlJywnbWFwYm94Z2xtYXAnLCAnd29ybGRtYXAnLCAnZ2FsbGVyeScsICdoZWxpeCcsICdhdHRyaWJ1dGlvbiddLFxuICAgICAgICAvKipcbiAgICAgICAgICogRmxhZyB0byBvbmx5IGxvYWQgdGhlIG1hcCBvbmNlIG9uSGFzaENoYW5nZSwgYnV0IGFsd2F5cyBvbiByZWxvYWQgYnV0dG9uIGNsaWNrXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1hcGJveGdsTWFwSGFzRGF0YT1mYWxzZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBtYXBib3hnbE1hcEhhc0RhdGE6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBzdW1tYXJ5RGF0YT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzdW1tYXJ5RGF0YTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZsYWcgdG8gb25seSBsb2FkIHRoZSBtYXAgb25jZSBvbkhhc2hDaGFuZ2UsIGJ1dCBhbHdheXMgb24gcmVsb2FkIGJ1dHRvbiBjbGlja1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSB3b3JsZE1hcEhhc0RhdGE9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgd29ybGRNYXBIYXNEYXRhOiBmYWxzZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUubG9hZERhdGEoKTtcbiAgICAgICAgbWUubG9hZFN1bW1hcnlEYXRhKCk7XG5cbiAgICAgICAgbWUudmlldy5vbignbW91bnRlZCcsIG1lLm9uTWFpblZpZXdNb3VudGVkLCBtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfSBkYXRhXG4gICAgICovXG4gICAgYWRkU3RvcmVJdGVtcyhkYXRhKSB7XG4gICAgICAgIGNvbnN0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgIGNvdW50cnlTdG9yZSA9IG1lLmdldFJlZmVyZW5jZSgnY291bnRyeS1maWVsZCcpLnN0b3JlLFxuICAgICAgICAgICAgICByZWZlcmVuY2UgICAgPSBtZS5tYWluVGFic1ttZS5hY3RpdmVNYWluVGFiSW5kZXhdLFxuICAgICAgICAgICAgICBhY3RpdmVUYWIgICAgPSBtZS5nZXRSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgICAvLyB3b3JsZG9tZXRlciBhZGRlZCB3b3JsZCBhcyBhIGNvdW50cnlcbiAgICAgICAgLy8gbWlnaHQgZ2V0IHJlbW92ZWQgYnkgdGhlIE5vdmVsQ292aWQgQVBJXG4gICAgICAgIGlmIChkYXRhWzBdICYmIGRhdGFbMF0uY291bnRyeSA9PT0gJ1dvcmxkJykge1xuICAgICAgICAgICAgY29uc3Qgd29ybGREYXRhID0gZGF0YS5zaGlmdCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cod29ybGREYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmNvdW50cnkuaW5jbHVkZXMoJ1wiJykpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNvdW50cnkgPSBpdGVtLmNvdW50cnkucmVwbGFjZSgnXCInLCBcIlxcJ1wiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbS5jYXNlc1Blck9uZU1pbGxpb24gPSBpdGVtLmNhc2VzUGVyT25lTWlsbGlvbiA+IGl0ZW0uY2FzZXMgPyAnTi9BJyA6IGl0ZW0uY2FzZXNQZXJPbmVNaWxsaW9uIHx8IDA7XG4gICAgICAgICAgICBpdGVtLmluZmVjdGVkICAgICAgICAgICA9IGl0ZW0uY2FzZXNQZXJPbmVNaWxsaW9uO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZS5kYXRhID0gZGF0YTtcblxuICAgICAgICBpZiAoY291bnRyeVN0b3JlLmdldENvdW50KCkgPCAxKSB7XG4gICAgICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ2NvdW50cnktZmllbGQnKS5zdG9yZS5kYXRhID0gZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChbJ2dhbGxlcnknLCAnaGVsaXgnLCAndGFibGUnXS5pbmNsdWRlcyhyZWZlcmVuY2UpKSB7XG4gICAgICAgICAgICBhY3RpdmVUYWIuc3RvcmUuZGF0YSA9IGRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmIChyZWZlcmVuY2UgPT09ICdtYXBib3hnbG1hcCcpIHtcbiAgICAgICAgICAgIG1lLmdldFJlZmVyZW5jZSgnbWFwYm94Z2xtYXAnKS5kYXRhID0gZGF0YTtcbiAgICAgICAgICAgIG1lLm1hcGJveGdsTWFwSGFzRGF0YSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmIChyZWZlcmVuY2UgPT09ICd3b3JsZG1hcCcpIHtcbiAgICAgICAgICAgIGFjdGl2ZVRhYi5sb2FkRGF0YShkYXRhKTtcbiAgICAgICAgICAgIG1lLndvcmxkTWFwSGFzRGF0YSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEuYWN0aXZlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEuY2FzZXNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS5kZWF0aHNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS5yZWNvdmVyZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS51cGRhdGVkIC8vIHRpbWVzdGFtcFxuICAgICAqL1xuICAgIGFwcGx5U3VtbWFyeURhdGEoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IG1lLmdldFJlZmVyZW5jZSgndG90YWwtc3RhdHMnKSxcbiAgICAgICAgICAgIHZkb20gICAgICA9IGNvbnRhaW5lci52ZG9tO1xuXG4gICAgICAgIG1lLnN1bW1hcnlEYXRhID0gZGF0YTtcblxuICAgICAgICB2ZG9tLmNuWzBdLmNuWzFdLmh0bWwgPSBVdGlsLmZvcm1hdE51bWJlcih7dmFsdWU6IGRhdGEuY2FzZXN9KTtcbiAgICAgICAgdmRvbS5jblsxXS5jblsxXS5odG1sID0gVXRpbC5mb3JtYXROdW1iZXIoe3ZhbHVlOiBkYXRhLmFjdGl2ZX0pO1xuICAgICAgICB2ZG9tLmNuWzJdLmNuWzFdLmh0bWwgPSBVdGlsLmZvcm1hdE51bWJlcih7dmFsdWU6IGRhdGEucmVjb3ZlcmVkfSk7XG4gICAgICAgIHZkb20uY25bM10uY25bMV0uaHRtbCA9IFV0aWwuZm9ybWF0TnVtYmVyKHt2YWx1ZTogZGF0YS5kZWF0aHN9KTtcblxuICAgICAgICBjb250YWluZXIudmRvbSA9IHZkb207XG5cbiAgICAgICAgY29udGFpbmVyID0gbWUuZ2V0UmVmZXJlbmNlKCdsYXN0LXVwZGF0ZScpO1xuICAgICAgICB2ZG9tICAgICAgPSBjb250YWluZXIudmRvbTtcblxuICAgICAgICB2ZG9tLmh0bWwgPSAnTGFzdCBVcGRhdGU6ICcgKyBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZGVmYXVsdCcsIHtcbiAgICAgICAgICAgIGhvdXIgIDogJ251bWVyaWMnLFxuICAgICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJ1xuICAgICAgICB9KS5mb3JtYXQobmV3IERhdGUoZGF0YS51cGRhdGVkKSk7XG5cbiAgICAgICAgY29udGFpbmVyLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqL1xuICAgIGNsZWFyQ291bnRyeUZpZWxkKHJlY29yZCkge1xuICAgICAgICB0aGlzLmdldFJlZmVyZW5jZSgnY291bnRyeS1maWVsZCcpLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaGFzaE9iamVjdFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBoYXNoT2JqZWN0Lm1haW52aWV3XG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXRUYWJJbmRleChoYXNoT2JqZWN0KSB7XG4gICAgICAgIGlmICghaGFzaE9iamVjdCB8fCAhaGFzaE9iamVjdC5tYWludmlldykge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5tYWluVGFicy5pbmRleE9mKGhhc2hPYmplY3QubWFpbnZpZXcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHRhYkluZGV4XG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZX1cbiAgICAgKi9cbiAgICBnZXRWaWV3KHRhYkluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFJlZmVyZW5jZSh0aGlzLm1haW5UYWJzW3RhYkluZGV4XSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBsb2FkRGF0YSgpIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIGZldGNoKG1lLmFwaVVybClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gbWUuYWRkU3RvcmVJdGVtcyhkYXRhKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ0NhbuKAmXQgYWNjZXNzICcgKyBtZS5hcGlVcmwsIGVycikpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgbG9hZFN1bW1hcnlEYXRhKCkge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgZmV0Y2gobWUuYXBpU3VtbWFyeVVybClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gbWUuYXBwbHlTdW1tYXJ5RGF0YShkYXRhKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ0NhbuKAmXQgYWNjZXNzICcgKyBtZS5hcGlTdW1tYXJ5VXJsLCBlcnIpKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICghbWUuc3VtbWFyeURhdGEpIHtcbiAgICAgICAgICAgICAgICBtZS5vbkxvYWRTdW1tYXJ5RGF0YUZhaWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMjAwMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvdW50cnlGaWVsZENsZWFyKCkge1xuICAgICAgICB0aGlzLmNvdW50cnlSZWNvcmQgPSBudWxsO1xuXG4gICAgICAgIE5lby5NYWluLmVkaXRSb3V0ZSh7XG4gICAgICAgICAgICBjb3VudHJ5OiBudWxsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkNvdW50cnlGaWVsZFNlbGVjdChkYXRhKSB7XG4gICAgICAgIHRoaXMuY291bnRyeVJlY29yZCA9IGRhdGEucmVjb3JkO1xuXG4gICAgICAgIE5lby5NYWluLmVkaXRSb3V0ZSh7XG4gICAgICAgICAgICBjb3VudHJ5OiBkYXRhLnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9sZFZhbHVlXG4gICAgICovXG4gICAgb25IYXNoQ2hhbmdlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYWN0aXZlSW5kZXggICAgICAgPSBtZS5nZXRUYWJJbmRleCh2YWx1ZS5oYXNoKSxcbiAgICAgICAgICAgIGNvdW50cnkgICAgICAgICAgID0gdmFsdWUuaGFzaCAmJiB2YWx1ZS5oYXNoLmNvdW50cnksXG4gICAgICAgICAgICBjb3VudHJ5RmllbGQgICAgICA9IG1lLmdldFJlZmVyZW5jZSgnY291bnRyeS1maWVsZCcpLFxuICAgICAgICAgICAgdGFiQ29udGFpbmVyICAgICAgPSBtZS5nZXRSZWZlcmVuY2UoJ3RhYi1jb250YWluZXInKSxcbiAgICAgICAgICAgIGFjdGl2ZVZpZXcgICAgICAgID0gbWUuZ2V0VmlldyhhY3RpdmVJbmRleCksXG4gICAgICAgICAgICBzZWxlY3Rpb25Nb2RlbCAgICA9IGFjdGl2ZVZpZXcuc2VsZWN0aW9uTW9kZWwsXG4gICAgICAgICAgICBkZWxheVNlbGVjdGlvbiAgICA9ICFtZS5kYXRhID8gMTAwMCA6IHRhYkNvbnRhaW5lci5hY3RpdmVJbmRleCAhPT0gYWN0aXZlSW5kZXggPyAxMDAgOiAwLFxuICAgICAgICAgICAgaWQ7XG5cbiAgICAgICAgdGFiQ29udGFpbmVyLmFjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXg7XG4gICAgICAgIG1lLmFjdGl2ZU1haW5UYWJJbmRleCAgICA9IGFjdGl2ZUluZGV4O1xuXG4gICAgICAgIGlmIChhY3RpdmVWaWV3Lm50eXBlID09PSAnaGVsaXgnKSB7XG4gICAgICAgICAgICBhY3RpdmVWaWV3LmdldE9mZnNldFZhbHVlcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdG9kbzogdGhpcyB3aWxsIG9ubHkgbG9hZCBlYWNoIHN0b3JlIG9uY2UuIGFkanVzdCB0aGUgbG9naWMgaW4gY2FzZSB3ZSB3YW50IHRvIHN1cHBvcnQgcmVsb2FkaW5nIHRoZSBBUElcblxuICAgICAgICBpZiAobWUuZGF0YSAmJiBhY3RpdmVWaWV3LnN0b3JlICYmIGFjdGl2ZVZpZXcuc3RvcmUuZ2V0Q291bnQoKSA8IDEpIHtcbiAgICAgICAgICAgIGFjdGl2ZVZpZXcuc3RvcmUuZGF0YSA9IG1lLmRhdGE7XG4gICAgICAgICAgICBkZWxheVNlbGVjdGlvbiA9IDUwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRvZG86IGh0dHBzOi8vZ2l0aHViLmNvbS9uZW9tanMvbmVvL2lzc3Vlcy80ODNcbiAgICAgICAgLy8gcXVpY2sgaGFjay4gc2VsZWN0aW9uTW9kZWxzIHVwZGF0ZSB0aGUgdmRvbSBvZiB0aGUgdGFibGUuQ29udGFpbmVyLlxuICAgICAgICAvLyBpZiB0YWJsZS5WaWV3IGlzIHZkb20gdXBkYXRpbmcsIHRoaXMgY2FuIHJlc3VsdCBpbiBhIDJ4IHJlbmRlcmluZyBvZiBhbGwgcm93cy5cbiAgICAgICAgaWYgKGRlbGF5U2VsZWN0aW9uID09PSAxMDAwICYmIGFjdGl2ZVZpZXcubnR5cGUgPT09ICd0YWJsZS1jb250YWluZXInKSB7XG4gICAgICAgICAgICBkZWxheVNlbGVjdGlvbiA9IDIwMDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aXZlVmlldy5udHlwZSA9PT0gJ21hcGJveGdsJyAmJiBtZS5kYXRhKSB7XG4gICAgICAgICAgICBpZiAoIW1lLm1hcGJveGdsTWFwSGFzRGF0YSkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVZpZXcuZGF0YSA9IG1lLmRhdGE7XG4gICAgICAgICAgICAgICAgbWUubWFwYm94Z2xNYXBIYXNEYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY291bnRyeUZpZWxkLmdldFJlY29yZCgpKTtcblxuICAgICAgICAgICAgaWYgKG1lLmNvdW50cnlSZWNvcmQpIHtcbiAgICAgICAgICAgICAgICBNYWluQ29udGFpbmVyQ29udHJvbGxlci5zZWxlY3RNYXBib3hHbENvdW50cnkoYWN0aXZlVmlldywgbWUuY291bnRyeVJlY29yZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFjdGl2ZVZpZXcuYXV0b1Jlc2l6ZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGFjdGl2ZVZpZXcubnR5cGUgPT09ICdjb3ZpZC13b3JsZC1tYXAnICYmIG1lLmRhdGEpIHtcbiAgICAgICAgICAgIGlmICghbWUud29ybGRNYXBIYXNEYXRhKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlVmlldy5sb2FkRGF0YShtZS5kYXRhKTtcbiAgICAgICAgICAgICAgICBtZS53b3JsZE1hcEhhc0RhdGEgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdG9kbzogaW5zdGVhZCBvZiBhIHRpbWVvdXQgdGhpcyBzaG91bGQgYWRkIGEgc3RvcmUgbG9hZCBsaXN0ZW5lciAoc2luZ2xlOiB0cnVlKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG1lLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50cnlGaWVsZC52YWx1ZSA9IGNvdW50cnk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jb3VudHJ5ID0gJ2FsbCc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYWN0aXZlVmlldy5udHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZ2FsbGVyeSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50cnkgJiYgIXNlbGVjdGlvbk1vZGVsLmlzU2VsZWN0ZWQoY291bnRyeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uTW9kZWwuc2VsZWN0KGNvdW50cnksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdoZWxpeCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50cnkgJiYgIXNlbGVjdGlvbk1vZGVsLmlzU2VsZWN0ZWQoY291bnRyeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uTW9kZWwuc2VsZWN0KGNvdW50cnksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlVmlldy5vbktleURvd25TcGFjZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0YWJsZS1jb250YWluZXInOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkID0gc2VsZWN0aW9uTW9kZWwuZ2V0Um93SWQoYWN0aXZlVmlldy5zdG9yZS5pbmRleE9mKGNvdW50cnkpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLmdldFJlZmVyZW5jZSgndGFibGUtY29udGFpbmVyJykuZmlyZSgnY291bnRyeVNlbGVjdCcsIHtyZWNvcmQ6IGFjdGl2ZVZpZXcuc3RvcmUuZ2V0KGNvdW50cnkpfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRyeSAmJiAhc2VsZWN0aW9uTW9kZWwuaXNTZWxlY3RlZChpZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uTW9kZWwuc2VsZWN0KGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLnNjcm9sbFRvVGFibGVSb3coe2lkOiBpZH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGRlbGF5U2VsZWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Mb2FkU3VtbWFyeURhdGFGYWlsKCkge1xuICAgICAgICBjb25zdCB0YWJsZSA9IHRoaXMuZ2V0UmVmZXJlbmNlKCd0YWJsZScpLFxuICAgICAgICAgICAgICB2ZG9tID0gdGFibGUudmRvbTtcblxuICAgICAgICB2ZG9tLmNuWzBdLmNuWzFdLmNuLnB1c2goe1xuICAgICAgICAgICAgdGFnICA6ICdkaXYnLFxuICAgICAgICAgICAgY2xzICA6IFsnbmVvLWJveC1sYWJlbCcsICduZW8tbGFiZWwnXSxcbiAgICAgICAgICAgIGh0bWwgOiBbXG4gICAgICAgICAgICAgICAgJ1N1bW1hcnkgZGF0YSBkaWQgbm90IGFycml2ZSBhZnRlciAycy48L2JyPicsXG4gICAgICAgICAgICAgICAgJ1BsZWFzZSBkb3VibGUtY2hlY2sgaWYgdGhlIEFQSSBpcyBvZmZsaW5lOjwvYnI+PC9icj4nLFxuICAgICAgICAgICAgICAgICc8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9kaXNlYXNlLnNoL2FsbFwiPk5vdmVsQ09WSUQvQVBJIGFsbCBlbmRwb2ludDwvYT48L2JyPjwvYnI+JyxcbiAgICAgICAgICAgICAgICAnYW5kIGlmIHNvIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJ1xuICAgICAgICAgICAgXS5qb2luKCcnKSxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnMjBweCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGFibGUudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbk1haW5WaWV3TW91bnRlZCgpIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5hZGRTY3JpcHQoe1xuICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICBkZWZlcjogdHJ1ZSxcbiAgICAgICAgICAgIHNyYyAgOiAnaHR0cHM6Ly9idXR0b25zLmdpdGh1Yi5pby9idXR0b25zLmpzJ1xuICAgICAgICB9KTtcblxuICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ2dhbGxlcnknKS5vbignc2VsZWN0JywgbWUudXBkYXRlQ291bnRyeUZpZWxkLCBtZSk7XG4gICAgICAgIG1lLmdldFJlZmVyZW5jZSgnaGVsaXgnKSAgLm9uKCdzZWxlY3QnLCBtZS51cGRhdGVDb3VudHJ5RmllbGQsIG1lKTtcblxuICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ3RhYmxlJykub24oe1xuICAgICAgICAgICAgZGVzZWxlY3Q6IG1lLmNsZWFyQ291bnRyeUZpZWxkLFxuICAgICAgICAgICAgc2VsZWN0ICA6IG1lLnVwZGF0ZUNvdW50cnlGaWVsZCxcbiAgICAgICAgICAgIHNjb3BlICAgOiBtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uUmVsb2FkRGF0YUJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgICAgICB0aGlzLmxvYWRTdW1tYXJ5RGF0YSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25SZW1vdmVGb290ZXJCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIGNvbnN0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgIGFjdGl2ZVRhYiA9IG1lLmdldFJlZmVyZW5jZSgndGFiLWNvbnRhaW5lcicpLmdldEFjdGl2ZUNhcmQoKTtcblxuICAgICAgICBtZS52aWV3LnJlbW92ZShtZS5nZXRSZWZlcmVuY2UoJ2Zvb3RlcicpLCB0cnVlKTtcblxuICAgICAgICBpZiAoYWN0aXZlVGFiLm50eXBlID09PSAnY292aWQtbWFwYm94Z2wtY29udGFpbmVyJykge1xuICAgICAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdtYXBib3hnbG1hcCcpLmF1dG9SZXNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Td2l0Y2hUaGVtZUJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGJ1dHRvbiAgID0gZGF0YS5jb21wb25lbnQsXG4gICAgICAgICAgICBsb2dvICAgICA9IG1lLmdldFJlZmVyZW5jZSgnbG9nbycpLFxuICAgICAgICAgICAgbG9nb1BhdGggPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL25lb21qcy9wYWdlcy9tYXN0ZXIvcmVzb3VyY2VzL2ltYWdlcy9hcHBzL2NvdmlkLycsXG4gICAgICAgICAgICBtYXBWaWV3ICA9IG1lLmdldFJlZmVyZW5jZSgnbWFwYm94Z2xtYXAnKSxcbiAgICAgICAgICAgIHZkb20gICAgID0gbG9nby52ZG9tLFxuICAgICAgICAgICAgdmlldyAgICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgYnV0dG9uVGV4dCwgY2xzLCBocmVmLCBpY29uQ2xzLCBtYXBWaWV3U3R5bGUsIHRoZW1lO1xuXG4gICAgICAgIGlmIChidXR0b24udGV4dCA9PT0gJ1RoZW1lIExpZ2h0Jykge1xuICAgICAgICAgICAgYnV0dG9uVGV4dCAgID0gJ1RoZW1lIERhcmsnO1xuICAgICAgICAgICAgaHJlZiAgICAgICAgID0gJy4uL2Rpc3QvZGV2ZWxvcG1lbnQvbmVvLXRoZW1lLWxpZ2h0LW5vLWNzczQuY3NzJztcbiAgICAgICAgICAgIGljb25DbHMgICAgICA9ICdmYSBmYS1tb29uJztcbiAgICAgICAgICAgIG1hcFZpZXdTdHlsZSA9IG1hcFZpZXcubWFwYm94U3R5bGVMaWdodDtcbiAgICAgICAgICAgIHRoZW1lICAgICAgICA9ICduZW8tdGhlbWUtbGlnaHQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnV0dG9uVGV4dCAgID0gJ1RoZW1lIExpZ2h0JztcbiAgICAgICAgICAgIGhyZWYgICAgICAgICA9ICcuLi9kaXN0L2RldmVsb3BtZW50L25lby10aGVtZS1kYXJrLW5vLWNzczQuY3NzJztcbiAgICAgICAgICAgIGljb25DbHMgICAgICA9ICdmYSBmYS1zdW4nO1xuICAgICAgICAgICAgbWFwVmlld1N0eWxlID0gbWFwVmlldy5tYXBib3hTdHlsZURhcms7XG4gICAgICAgICAgICB0aGVtZSAgICAgICAgPSAnbmVvLXRoZW1lLWRhcmsnO1xuICAgICAgICB9XG5cbiAgICAgICAgdmRvbS5zcmMgPSBsb2dvUGF0aCArICh0aGVtZSA9PT0gJ25lby10aGVtZS1kYXJrJyA/ICdjb3ZpZF9sb2dvX2RhcmsuanBnJyA6ICdjb3ZpZF9sb2dvX2xpZ2h0LmpwZycpO1xuICAgICAgICBsb2dvLnZkb20gPSB2ZG9tO1xuXG5cbiAgICAgICAgaWYgKE5lby5jb25maWcudXNlQ3NzNCkge1xuICAgICAgICAgICAgY2xzID0gWy4uLnZpZXcuY2xzXTtcblxuICAgICAgICAgICAgdmlldy5jbHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pbmNsdWRlcygnbmVvLXRoZW1lJykpIHtcbiAgICAgICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIE5lb0FycmF5LmFkZChjbHMsIHRoZW1lKTtcbiAgICAgICAgICAgIHZpZXcuY2xzID0gY2xzO1xuXG4gICAgICAgICAgICBidXR0b24uc2V0KHtcbiAgICAgICAgICAgICAgICBpY29uQ2xzOiBpY29uQ2xzLFxuICAgICAgICAgICAgICAgIHRleHQgICA6IGJ1dHRvblRleHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTmVvLm1haW4uYWRkb24uU3R5bGVzaGVldC5zd2FwU3R5bGVTaGVldCh7XG4gICAgICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgICAgICBpZCAgOiAnbmVvLXRoZW1lJ1xuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBidXR0b24udGV4dCA9IGJ1dHRvblRleHQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcFZpZXcubWFwYm94U3R5bGUgPSBtYXBWaWV3U3R5bGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmlld1xuICAgICAqIEBwYXJhbSByZWNvcmRcbiAgICAgKi9cbiAgICBzdGF0aWMgc2VsZWN0TWFwYm94R2xDb3VudHJ5KHZpZXcsIHJlY29yZCkge2NvbnNvbGUubG9nKHJlY29yZC5jb3VudHJ5SW5mby5pc28yKTtcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL25lb21qcy9uZW8vaXNzdWVzLzQ5MFxuICAgICAgICAvLyB0aGVyZSBhcmUgbWlzc2luZyBpc28yJjMgdmFsdWVzIG9uIG5hdHVyYWwgZWFydGggdmVjdG9yXG4gICAgICAgIGNvbnN0IG1hcCA9IHtcbiAgICAgICAgICAgIEZSQSAgICA6IFsnbWF0Y2gnLCBbJ2dldCcsICdOQU1FJ10sIFsnRnJhbmNlJ10sIHRydWUsIGZhbHNlXSxcbiAgICAgICAgICAgIE5PUiAgICA6IFsnbWF0Y2gnLCBbJ2dldCcsICdOQU1FJ10sIFsnTm9yd2F5J10sIHRydWUsIGZhbHNlXSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFsnbWF0Y2gnLCBbJ2dldCcsICdJU09fQTMnXSwgW3JlY29yZC5jb3VudHJ5SW5mby5pc28zXSwgdHJ1ZSwgZmFsc2VdXG4gICAgICAgIH07XG5cbiAgICAgICAgdmlldy5zZXRGaWx0ZXIoe1xuICAgICAgICAgICAgbGF5ZXJJZDogJ25lLTEwbS1hZG1pbi0wLWNvdW50cmllcy00czdydmYnLFxuICAgICAgICAgICAgdmFsdWUgIDogbWFwW3JlY29yZC5jb3VudHJ5SW5mby5pc28zXSB8fCBtYXBbJ2RlZmF1bHQnXVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHZpZXcuZmx5VG8oe1xuICAgICAgICAgICAgbGF0OiByZWNvcmQuY291bnRyeUluZm8ubGF0LFxuICAgICAgICAgICAgbG5nOiByZWNvcmQuY291bnRyeUluZm8ubG9uZ1xuICAgICAgICB9KTtcblxuICAgICAgICB2aWV3Lnpvb20gPSA1OyAvLyB0b2RvOiB3ZSBjb3VsZCB1c2UgYSBkaWZmZXJlbnQgdmFsdWUgZm9yIGJpZyBjb3VudHJpZXMgKFJ1c3NpYSwgVVNBLC4uLilcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEucmVjb3JkXG4gICAgICovXG4gICAgdXBkYXRlQ291bnRyeUZpZWxkKGRhdGEpIHtcbiAgICAgICAgTmVvLk1haW4uZWRpdFJvdXRlKHtcbiAgICAgICAgICAgIGNvdW50cnk6IGRhdGEucmVjb3JkLmNvdW50cnlcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyQ29udHJvbGxlcik7XG5cbmV4cG9ydCB7TWFpbkNvbnRhaW5lckNvbnRyb2xsZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENoZWNrQm94ICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9DaGVja0JveC5tanMnO1xuaW1wb3J0IENvbnRhaW5lciAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBIaXN0b3JpY2FsRGF0YVRhYmxlICAgICAgZnJvbSAnLi9jb3VudHJ5L0hpc3RvcmljYWxEYXRhVGFibGUubWpzJztcbmltcG9ydCBMaW5lQ2hhcnRDb21wb25lbnQgICAgICAgZnJvbSAnLi9jb3VudHJ5L0xpbmVDaGFydENvbXBvbmVudC5tanMnXG5pbXBvcnQgUGFuZWwgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250YWluZXIvUGFuZWwubWpzJztcbmltcG9ydCBUYWJDb250YWluZXIgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3RhYi9Db250YWluZXIubWpzJztcbmltcG9ydCBUYWJsZSAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9jb3VudHJ5L1RhYmxlLm1qcyc7XG5pbXBvcnQgVGFibGVDb250YWluZXJDb250cm9sbGVyIGZyb20gJy4vVGFibGVDb250YWluZXJDb250cm9sbGVyLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLnZpZXcuVGFibGVDb250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBUYWJsZUNvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0NvdmlkLnZpZXcuVGFibGVDb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkLnZpZXcuVGFibGVDb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXV0b01vdW50PXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGF1dG9Nb3VudDogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb250cm9sbGVyLkNvbXBvbmVudHxudWxsfSBjb250cm9sbGVyPVRhYmxlQ29udGFpbmVyQ29udHJvbGxlclxuICAgICAgICAgKi9cbiAgICAgICAgY29udHJvbGxlcjogVGFibGVDb250YWluZXJDb250cm9sbGVyLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBoaXN0b3J5UGFuZWxXaWR0aD01MjBcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaGlzdG9yeVBhbmVsV2lkdGg6IDUyMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby50YWJsZS5Db250YWluZXJ8bnVsbH0gdGFibGU9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdGFibGU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gdGFibGVDb25maWc9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdGFibGVDb25maWc6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gbGF5b3V0PXtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgICAgICAgKi9cbiAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXXxudWxsfSBpdGVtc1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgZmxleCAgOiAxLFxuICAgICAgICAgICAgbGF5b3V0OiAnZml0JyxcbiAgICAgICAgICAgIGl0ZW1zIDogW11cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgOiBQYW5lbCxcbiAgICAgICAgICAgIGNscyAgICAgIDogWyduZW8tY29uZmlndXJhdGlvbi1wYW5lbCcsICduZW8tcGFuZWwnLCAnbmVvLWNvbnRhaW5lciddLFxuICAgICAgICAgICAgbGF5b3V0ICAgOiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgICAgICByZWZlcmVuY2U6ICdjb250cm9scy1wYW5lbCcsXG4gICAgICAgICAgICBzdHlsZSAgICA6IHtiYWNrZ3JvdW5kQ29sb3I6ICcjMmIyYjJiJ30sXG4gICAgICAgICAgICB3aWR0aCAgICA6ICdAY29uZmlnOmhpc3RvcnlQYW5lbFdpZHRoJyxcblxuICAgICAgICAgICAgY29udGFpbmVyQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgZmxleCA6IG51bGwsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtvdmVyZmxvd1k6ICdzY3JvbGwnfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaGVhZGVyczogW3tcbiAgICAgICAgICAgICAgICBkb2NrOiAndG9wJyxcbiAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvbkNvbGxhcHNlQnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnWCdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlICAgIDogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAnaGlzdG9yaWNhbC1kYXRhLWxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnSGlzdG9yaWNhbCBEYXRhJ1xuICAgICAgICAgICAgICAgIH0sICctPicsIHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvbjUyMHB4QnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnNTIwcHgnXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uODAwcHhCdXR0b25DbGljaycsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICc4MDBweCdcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV0sXG5cbiAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgIG1vZHVsZTogVGFiQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgIHN0eWxlIDoge21hcmdpblRvcDogJzEwcHgnfSxcbiAgICAgICAgICAgICAgICBpdGVtcyA6IFt7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIGxheW91dDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAgICAgICAgICAgICBpdGVtcyA6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBudHlwZTogJ3Rvb2xiYXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleCA6ICcwIDEgYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUgICAgOiBDaGVja0JveCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkICAgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsVGV4dCA6ICdMb2dhcml0aG1pYyBTY2FsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxXaWR0aDogMTM1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZSA6ICdsb2dhcml0aG1pYy1zY2FsZS1jaGVja2JveCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6ICdvbkxvZ2FyaXRobWljU2NhbGVDaGFuZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZSAgICA6IENoZWNrQm94LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsVGV4dCA6ICdEYWlseSBWYWx1ZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlICAgICA6IHttYXJnaW5MZWZ0OiAnMzBweCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsV2lkdGg6IDk1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiAnb25EYWlseVZhbHVlc0NoYW5nZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUgICA6IExpbmVDaGFydENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXggICAgIDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZTogJ2xpbmUtY2hhcnQnLFxuICAgICAgICAgICAgICAgICAgICB9XSxcblxuICAgICAgICAgICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1jaGFydC1saW5lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdDaGFydCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuaGlzdG9yaWNhbERhdGFUYWJsZSA9IE5lby5jcmVhdGUoe1xuICAgICAgICAgICAgbW9kdWxlICAgOiBIaXN0b3JpY2FsRGF0YVRhYmxlLFxuICAgICAgICAgICAgcmVmZXJlbmNlOiAnaGlzdG9yaWNhbC1kYXRhLXRhYmxlJyxcblxuICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLXRhYmxlJyxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnVGFibGUnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAuLi5tZS5oaXN0b3JpY2FsRGF0YVRhYmxlQ29uZmlnIHx8IHt9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLml0ZW1zWzFdLml0ZW1zWzBdLml0ZW1zLnB1c2gobWUuaGlzdG9yaWNhbERhdGFUYWJsZSk7XG5cbiAgICAgICAgbWUudGFibGUgPSBOZW8uY3JlYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogVGFibGUsXG4gICAgICAgICAgICByZWZlcmVuY2U6ICd0YWJsZScsXG4gICAgICAgICAgICAuLi5tZS50YWJsZUNvbmZpZyB8fCB7fVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5pdGVtc1swXS5pdGVtcy5wdXNoKG1lLnRhYmxlKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFRhYmxlQ29udGFpbmVyKTtcblxuZXhwb3J0IHtUYWJsZUNvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29tcG9uZW50Q29udHJvbGxlciBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udHJvbGxlci9Db21wb25lbnQubWpzJztcbmltcG9ydCBOZW9BcnJheSAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL0FycmF5Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLnZpZXcuVGFibGVDb250YWluZXJDb250cm9sbGVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udHJvbGxlci5Db21wb25lbnRcbiAqL1xuY2xhc3MgVGFibGVDb250YWluZXJDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50Q29udHJvbGxlciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0NvdmlkLnZpZXcuVGFibGVDb250YWluZXJDb250cm9sbGVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdDb3ZpZC52aWV3LlRhYmxlQ29udGFpbmVyQ29udHJvbGxlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGFwaUJhc2VVcmw9J2h0dHBzOi8vZGlzZWFzZS5zaC8nXG4gICAgICAgICAqL1xuICAgICAgICBhcGlCYXNlVXJsOiAnaHR0cHM6Ly9kaXNlYXNlLnNoLycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGFwaUhpc3RvcmljYWxEYXRhRW5kcG9pbnQ9J2hpc3RvcmljYWwnXG4gICAgICAgICAqL1xuICAgICAgICBhcGlIaXN0b3JpY2FsRGF0YUVuZHBvaW50OiAndjIvaGlzdG9yaWNhbC8nLFxuICAgICAgICAvKipcbiAgICAgICAgICogTnVtYmVyIG9mIGRheXMgeW91IHdhbnQgdGhlIGRhdGEgdG8gZ28gYmFjayB0by4gRGVmYXVsdCBpcyAzMC4gVXNlIGFsbCBmb3IgZnVsbCBkYXRhIHNldC4gRXg6IDE1LCBhbGwsIDI0XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxTdHJpbmd9IGFwaUhpc3RvcmljYWxEYXRhVGltZVJhbmdlPSdhbGwnXG4gICAgICAgICAqL1xuICAgICAgICBhcGlIaXN0b3JpY2FsRGF0YVRpbWVSYW5nZTogJ2FsbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgYWxsIHJlY29yZHMgd2l0aCAwIGNhc2VzIGZyb20gdGhlIGhpc3RvcmljYWwgZGF0YSAodGFibGUgJiBjaGFydClcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcmVtb3ZlRW1wdHlSZWNvcmRzPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHJlbW92ZUVtcHR5UmVjb3JkczogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gc2VsZWN0ZWRSZWNvcmQ9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZWN0ZWRSZWNvcmQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8udGFibGUuQ29udGFpbmVyfG51bGx9IHRhYmxlXz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHRhYmxlXzogbnVsbFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUudmlldy5vbignY291bnRyeVNlbGVjdCcsIG1lLm9uVGFibGVTZWxlY3QsIG1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgYWRkU3RvcmVJdGVtcyhkYXRhKSB7XG4gICAgICAgIGNvbnN0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgIGRhdGFBcnJheSA9IFtdLFxuICAgICAgICAgICAgICBtYXAgICAgICAgPSB7fTtcblxuICAgICAgICBsZXQgdGltZWxpbmUgID0gZGF0YSAmJiBkYXRhLnRpbWVsaW5lLFxuICAgICAgICAgICAgbmV4dEl0ZW07XG5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL05vdmVsQ09WSUQvQVBJL2lzc3Vlcy8zMDkgLy8gZGlmZmVyZW50IGZvcm1hdCBmb3IgJ2FsbCdcbiAgICAgICAgaWYgKGRhdGEgJiYgIWRhdGEudGltZWxpbmUpIHtcbiAgICAgICAgICAgIHRpbWVsaW5lID0gZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aW1lbGluZSkge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGltZWxpbmUuY2FzZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIG1hcFtrZXldID0ge2RhdGU6IG5ldyBEYXRlKGtleSkudG9JU09TdHJpbmcoKSwgY2FzZXM6IHZhbHVlfTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aW1lbGluZS5kZWF0aHMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChtYXAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBtYXBba2V5XS5kZWF0aHMgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtYXBba2V5XSA9IHtkYXRlOiBuZXcgRGF0ZShrZXkpLnRvSVNPU3RyaW5nKCksIGRlYXRoczogdmFsdWV9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodGltZWxpbmUuaGFzT3duUHJvcGVydHkoJ3JlY292ZXJlZCcpKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGltZWxpbmUucmVjb3ZlcmVkKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hcC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBba2V5XS5yZWNvdmVyZWQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFtrZXldID0ge2RhdGU6IG5ldyBEYXRlKGtleSkudG9JU09TdHJpbmcoKSwgcmVjb3ZlcmVkOiB2YWx1ZX07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMobWFwKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5hY3RpdmUgPSB2YWx1ZS5jYXNlcyAtIHZhbHVlLmRlYXRocyAtIHZhbHVlLnJlY292ZXJlZDtcbiAgICAgICAgICAgICAgICBkYXRhQXJyYXkucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG1lLnJlbW92ZUVtcHR5UmVjb3Jkcykge1xuICAgICAgICAgICAgICAgIFsuLi5kYXRhQXJyYXldLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmNhc2VzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUoZGF0YUFycmF5LCBpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB0aGUgYXJyYXkgaXMgc29ydGVkIGJ5IGRhdGUgQVNDXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGRhdGFBcnJheVswXSwge1xuICAgICAgICAgICAgICAgIGRhaWx5QWN0aXZlICAgOiBkYXRhQXJyYXlbMF0uYWN0aXZlLFxuICAgICAgICAgICAgICAgIGRhaWx5Q2FzZXMgICAgOiBkYXRhQXJyYXlbMF0uY2FzZXMsXG4gICAgICAgICAgICAgICAgZGFpbHlEZWF0aHMgICA6IGRhdGFBcnJheVswXS5kZWF0aHMsXG4gICAgICAgICAgICAgICAgZGFpbHlSZWNvdmVyZWQ6IGRhdGFBcnJheVswXS5yZWNvdmVyZWRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkYXRhQXJyYXkuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBuZXh0SXRlbSA9IGRhdGFBcnJheVtpbmRleCArIDFdO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5leHRJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obmV4dEl0ZW0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhaWx5QWN0aXZlICAgOiBuZXh0SXRlbS5hY3RpdmUgICAgLSBpdGVtLmFjdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhaWx5Q2FzZXMgICAgOiBuZXh0SXRlbS5jYXNlcyAgICAgLSBpdGVtLmNhc2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGFpbHlEZWF0aHMgICA6IG5leHRJdGVtLmRlYXRocyAgICAtIGl0ZW0uZGVhdGhzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGFpbHlSZWNvdmVyZWQ6IG5leHRJdGVtLnJlY292ZXJlZCAtIGl0ZW0ucmVjb3ZlcmVkXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyB0b2RvOiB3ZSBjb3VsZCBvbmx5IHVwZGF0ZSB0aGUgYWN0aXZlIHRhYlxuICAgICAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdoaXN0b3JpY2FsLWRhdGEtdGFibGUnKS5zdG9yZS5kYXRhID0gZGF0YUFycmF5O1xuICAgICAgICAgICAgbWUudXBkYXRlTGluZUNoYXJ0KGRhdGFBcnJheSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBzdGF0aWMgYXNzaWduRmllbGRzT3JOdWxsKHJlY29yZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWN0aXZlICAgICAgICA6IHJlY29yZC5hY3RpdmUgICAgICAgICB8fCBudWxsLFxuICAgICAgICAgICAgY2FzZXMgICAgICAgICA6IHJlY29yZC5jYXNlcyAgICAgICAgICB8fCBudWxsLFxuICAgICAgICAgICAgZGVhdGhzICAgICAgICA6IHJlY29yZC5kZWF0aHMgICAgICAgICB8fCBudWxsLFxuICAgICAgICAgICAgZGFpbHlBY3RpdmUgICA6IHJlY29yZC5kYWlseUFjdGl2ZSAgICB8fCBudWxsLFxuICAgICAgICAgICAgZGFpbHlDYXNlcyAgICA6IHJlY29yZC5kYWlseUNhc2VzICAgICB8fCBudWxsLFxuICAgICAgICAgICAgZGFpbHlEZWF0aHMgICA6IHJlY29yZC5kYWlseURlYXRocyAgICB8fCBudWxsLFxuICAgICAgICAgICAgZGFpbHlSZWNvdmVyZWQ6IHJlY29yZC5kYWlseVJlY292ZXJlZCB8fCBudWxsLFxuICAgICAgICAgICAgcmVjb3ZlcmVkICAgICA6IHJlY29yZC5yZWNvdmVyZWQgICAgICB8fCBudWxsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIHdoZW4gYWNjZXNzaW5nIHRoZSB0YWJsZSBjb25maWdcbiAgICAgKiBAcGFyYW0ge05lby50YWJsZS5Db250YWluZXJ8bnVsbH0gdmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlR2V0VGFibGUodmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdGFibGUgPSB2YWx1ZSA9IHRoaXMuZ2V0UmVmZXJlbmNlKCd0YWJsZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvdW50cnlOYW1lXG4gICAgICovXG4gICAgbG9hZEhpc3RvcmljYWxEYXRhKGNvdW50cnlOYW1lKSB7XG4gICAgICAgIGNvbnN0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICBhcGlQYXRoID0gbWUuYXBpQmFzZVVybCArIG1lLmFwaUhpc3RvcmljYWxEYXRhRW5kcG9pbnQgKyBjb3VudHJ5TmFtZSArICc/bGFzdGRheXM9JyArIG1lLmFwaUhpc3RvcmljYWxEYXRhVGltZVJhbmdlO1xuXG4gICAgICAgIGZldGNoKGFwaVBhdGgpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IG1lLmFkZFN0b3JlSXRlbXMoZGF0YSkpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdDYW7igJl0IGFjY2VzcyAnICsgYXBpUGF0aCwgZXJyKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uNTIwcHhCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIHRoaXMuZ2V0UmVmZXJlbmNlKCdjb250cm9scy1wYW5lbCcpLndpZHRoID0gNTIwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbjgwMHB4QnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmdldFJlZmVyZW5jZSgnY29udHJvbHMtcGFuZWwnKS53aWR0aCA9IDgwMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Db2xsYXBzZUJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgY29uc3QgcGFuZWwgID0gdGhpcy5nZXRSZWZlcmVuY2UoJ2NvbnRyb2xzLXBhbmVsJyksXG4gICAgICAgICAgICAgIGV4cGFuZCA9IHBhbmVsLndpZHRoID09PSA0MDtcblxuICAgICAgICBwYW5lbC53aWR0aCA9IGV4cGFuZCA/IHRoaXMudmlldy5oaXN0b3J5UGFuZWxXaWR0aCA6IDQwO1xuXG4gICAgICAgIGRhdGEuY29tcG9uZW50LnRleHQgPSBleHBhbmQgPyAnWCcgOiAnKyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRGFpbHlWYWx1ZXNDaGFuZ2UoZGF0YSkge1xuICAgICAgICBjb25zdCBjaGFydElkICAgICA9IHRoaXMuZ2V0UmVmZXJlbmNlKCdsaW5lLWNoYXJ0JykuaWQsXG4gICAgICAgICAgICAgIGxvZ0NoZWNrYm94ID0gdGhpcy5nZXRSZWZlcmVuY2UoJ2xvZ2FyaXRobWljLXNjYWxlLWNoZWNrYm94JyksXG4gICAgICAgICAgICAgIHZhbHVlICAgICAgID0gZGF0YS52YWx1ZTtcblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxvZ0NoZWNrYm94LnNldCh7XG4gICAgICAgICAgICAgICAgY2hlY2tlZCA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBkYXRhLnZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvZ0NoZWNrYm94LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBOZW8ubWFpbi5hZGRvbi5BbUNoYXJ0cy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgICAgIGlkICAgICAgICA6IGNoYXJ0SWQsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgJ3Nlcmllcy52YWx1ZXMuMC5kYXRhRmllbGRzLnZhbHVlWScgOiB2YWx1ZSA/ICdkYWlseUFjdGl2ZScgICAgOiAnYWN0aXZlJyxcbiAgICAgICAgICAgICAgICAnc2VyaWVzLnZhbHVlcy4xLmRhdGFGaWVsZHMudmFsdWVZJyA6IHZhbHVlID8gJ2RhaWx5Q2FzZXMnICAgICA6ICdjYXNlcycsXG4gICAgICAgICAgICAgICAgJ3Nlcmllcy52YWx1ZXMuMi5kYXRhRmllbGRzLnZhbHVlWScgOiB2YWx1ZSA/ICdkYWlseURlYXRocycgICAgOiAnZGVhdGhzJyxcbiAgICAgICAgICAgICAgICAnc2VyaWVzLnZhbHVlcy4zLmRhdGFGaWVsZHMudmFsdWVZJyA6IHZhbHVlID8gJ2RhaWx5UmVjb3ZlcmVkJyA6ICdyZWNvdmVyZWQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIE5lby5tYWluLmFkZG9uLkFtQ2hhcnRzLmNhbGxNZXRob2Qoe1xuICAgICAgICAgICAgaWQgIDogY2hhcnRJZCxcbiAgICAgICAgICAgIHBhdGg6ICdpbnZhbGlkYXRlRGF0YSdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uTG9nYXJpdGhtaWNTY2FsZUNoYW5nZShkYXRhKSB7XG4gICAgICAgIE5lby5tYWluLmFkZG9uLkFtQ2hhcnRzLnNldFByb3BlcnR5KHtcbiAgICAgICAgICAgIGlkICAgOiB0aGlzLmdldFJlZmVyZW5jZSgnbGluZS1jaGFydCcpLmlkLFxuICAgICAgICAgICAgcGF0aCA6ICd5QXhlcy52YWx1ZXMuMC5sb2dhcml0aG1pYycsXG4gICAgICAgICAgICB2YWx1ZTogZGF0YS52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7T2JqZWN0fSBkYXRhXG4gICAgICoge09iamVjdH0gZGF0YS5yZWNvcmRcbiAgICAgKi9cbiAgICBvblRhYmxlU2VsZWN0KGRhdGEpIHtcbiAgICAgICAgY29uc3QgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgIHJlY29yZCAgPSBkYXRhLnJlY29yZDtcblxuICAgICAgICBpZiAoZGF0YS5yZWNvcmQpIHtcbiAgICAgICAgICAgIG1lLnNlbGVjdGVkUmVjb3JkID0gey4uLnJlY29yZH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5zZWxlY3RlZFJlY29yZCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZW1vdmVkIG9wdGlvbmFsIGNoYWluaW5nIGZvciBub3csIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL25lb21qcy9uZW8vaXNzdWVzLzQ2N1xuICAgICAgICBtZS5sb2FkSGlzdG9yaWNhbERhdGEocmVjb3JkICYmIHJlY29yZC5jb3VudHJ5SW5mbyAmJiByZWNvcmQuY291bnRyeUluZm8uaXNvMiB8fCAnYWxsJyk7XG5cbiAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdoaXN0b3JpY2FsLWRhdGEtbGFiZWwnKS5odG1sID0gJ0hpc3RvcmljYWwgRGF0YSAoJyArIChyZWNvcmQgJiYgcmVjb3JkLmNvdW50cnkgfHwgJ1dvcmxkJykgKyAnKSc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9nYXJpdGhtaWMgQXhpcyBicmVhayBmb3IgdmFsdWVzIG9mIDAsIHNvIHdlIG5lZWQgdG8gY2hhbmdlIHRob3NlIHRvIG51bGxcbiAgICAgKiBBZGRpbmcgdGhlIGN1cnJlbnQgcmVjb3JkLCBzaW5jZSB0aGUgaGlzdG9yaWNhbCBkYXRhIHN0YXJ0cyBcInllc3RlcmRheVwiXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gZGF0YUFycmF5XG4gICAgICovXG4gICAgdXBkYXRlTGluZUNoYXJ0KGRhdGFBcnJheSkge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHJlY29yZCA9IG1lLnNlbGVjdGVkUmVjb3JkLFxuICAgICAgICAgICAgY2hhcnQgID0gbWUuZ2V0UmVmZXJlbmNlKCdsaW5lLWNoYXJ0Jyk7XG5cbiAgICAgICAgZGF0YUFycmF5LmZvckVhY2goaXRlbSA9PiBPYmplY3QuYXNzaWduKGl0ZW0sIFRhYmxlQ29udGFpbmVyQ29udHJvbGxlci5hc3NpZ25GaWVsZHNPck51bGwoaXRlbSkpKTtcblxuICAgICAgICBpZiAoIXJlY29yZCkge1xuICAgICAgICAgICAgcmVjb3JkID0gbWUuZ2V0UGFyZW50KCkuc3VtbWFyeURhdGE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVjb3JkKSB7XG4gICAgICAgICAgICBkYXRhQXJyYXkucHVzaCh7XG4gICAgICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICAgIC4uLlRhYmxlQ29udGFpbmVyQ29udHJvbGxlci5hc3NpZ25GaWVsZHNPck51bGwocmVjb3JkKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGFydC5kYXRhID0gZGF0YUFycmF5O1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVGFibGVDb250YWluZXJDb250cm9sbGVyKTtcblxuZXhwb3J0IHtUYWJsZUNvbnRhaW5lckNvbnRyb2xsZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEFtQ2hhcnRDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC93cmFwcGVyL0FtQ2hhcnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgQ292aWQudmlldy5Xb3JsZE1hcENvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC53cmFwcGVyLkFtQ2hhcnRcbiAqL1xuY2xhc3MgV29ybGRNYXBDb21wb25lbnQgZXh0ZW5kcyBBbUNoYXJ0Q29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nQ292aWQudmlldy5Xb3JsZE1hcENvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQudmlldy5Xb3JsZE1hcENvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjb3ZpZC13b3JsZC1tYXAnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY292aWQtd29ybGQtbWFwJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2hhcnRUeXBlPSdNYXBDaGFydCdcbiAgICAgICAgICovXG4gICAgICAgIGNoYXJ0VHlwZTogJ01hcENoYXJ0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9Wydjb3ZpZC1saW5lLWNoYXJ0J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWydjb3ZpZC13b3JsZC1tYXAnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZGF0YVBhdGg9J2RhdGEuc2VyaWVzLnZhbHVlcy4wJ1xuICAgICAgICAgKi9cbiAgICAgICAgZGF0YVBhdGg6ICdzZXJpZXMudmFsdWVzLjAnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBoZWF0UnVsZXNNYXhWYWx1ZT0xNTAwMFxuICAgICAgICAgKi9cbiAgICAgICAgaGVhdFJ1bGVzTWF4VmFsdWU6IDE1MDAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBwYWNrYWdlPSdhbTRtYXBzJ1xuICAgICAgICAgKi9cbiAgICAgICAgcGFja2FnZTogJ2FtNG1hcHMnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBjaGFydENvbmZpZ1xuICAgICAgICAgKi9cbiAgICAgICAgY2hhcnRDb25maWc6IHtcbiAgICAgICAgICAgIHByb2plY3Rpb246ICdNaWxsZXInLFxuICAgICAgICAgICAgZ2VvZGF0YSAgIDogJ3dvcmxkTG93JyxcblxuICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgIHR5cGUgICAgICA6ICdNYXBQb2x5Z29uU2VyaWVzJyxcbiAgICAgICAgICAgICAgICBleGNsdWRlICAgOiBbJ0FRJ10sXG4gICAgICAgICAgICAgICAgdXNlR2VvZGF0YTogdHJ1ZSxcblxuICAgICAgICAgICAgICAgIGRhdGFGaWVsZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdhY3RpdmUnXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGhlYXRSdWxlczogW3tcbiAgICAgICAgICAgICAgICAgICAgbWF4ICAgICA6ICcjNjRiNWY2JyxcbiAgICAgICAgICAgICAgICAgICAgbWF4VmFsdWU6ICdAY29uZmlnOmhlYXRSdWxlc01heFZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgbWluICAgICA6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgICAgICAgbWluVmFsdWU6IDAsXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiAnZmlsbCcsXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCAgOiAnbWFwUG9seWdvbnMudGVtcGxhdGUnXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbWFwUG9seWdvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFRleHQ6ICd7bmFtZX06IFtib2xkXXt2YWx1ZX1bL10nLFxuICAgICAgICAgICAgICAgICAgICAvL2ZpbGwgICAgICAgOiAnIzc0QjI2NicsXG5cbiAgICAgICAgICAgICAgICAgICAgc3RhdGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3Zlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9maWxsOiAnIzM2N0IyNSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gZGF0YVxuICAgICAqL1xuICAgIGxvYWREYXRhKGRhdGEpIHtcbiAgICAgICAgY29uc3QgY2hhcnREYXRhID0gW107XG5cbiAgICAgICAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY2hhcnREYXRhLnB1c2goe1xuICAgICAgICAgICAgICAgIGFjdGl2ZSAgIDogaXRlbS5hY3RpdmUsXG4gICAgICAgICAgICAgICAgY2FzZXMgICAgOiBpdGVtLmNhc2VzLFxuICAgICAgICAgICAgICAgIGNyaXRpY2FsIDogaXRlbS5jcml0aWNhbCxcbiAgICAgICAgICAgICAgICBkZWF0aHMgICA6IGl0ZW0uZGVhdGhzLFxuICAgICAgICAgICAgICAgIGlkICAgICAgIDogaXRlbS5jb3VudHJ5SW5mby5pc28yLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogaXRlbS5jb3VudHJ5LFxuICAgICAgICAgICAgICAgIHJlY292ZXJlZDogaXRlbS5yZWNvdmVyZWQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTmVvLm1haW4uYWRkb24uQW1DaGFydHMudXBkYXRlRGF0YSh7XG4gICAgICAgICAgICBkYXRhICAgIDogY2hhcnREYXRhLFxuICAgICAgICAgICAgZGF0YVBhdGg6IHRoaXMuZGF0YVBhdGgsXG4gICAgICAgICAgICBpZCAgICAgIDogdGhpcy5pZFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFdvcmxkTWFwQ29tcG9uZW50KTtcblxuZXhwb3J0IHtXb3JsZE1hcENvbXBvbmVudCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29udGFpbmVyICAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250YWluZXIvQmFzZS5tanMnO1xuaW1wb3J0IE51bWJlckZpZWxkICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9OdW1iZXIubWpzJztcbmltcG9ydCBUb29sYmFyICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRhaW5lci9Ub29sYmFyLm1qcyc7XG5pbXBvcnQgV29ybGRNYXBDb21wb25lbnQgICAgICAgICAgIGZyb20gJy4vV29ybGRNYXBDb21wb25lbnQubWpzJztcbmltcG9ydCBXb3JsZE1hcENvbnRhaW5lckNvbnRyb2xsZXIgZnJvbSAnLi9Xb3JsZE1hcENvbnRhaW5lckNvbnRyb2xsZXIubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgQ292aWQudmlldy5Xb3JsZE1hcENvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5CYXNlXG4gKi9cbmNsYXNzIFdvcmxkTWFwQ29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nQ292aWQudmlldy5Xb3JsZE1hcENvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQudmlldy5Xb3JsZE1hcENvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29udHJvbGxlci5Db21wb25lbnR9IGNvbnRyb2xsZXI9V29ybGRNYXBDb250YWluZXJDb250cm9sbGVyXG4gICAgICAgICAqL1xuICAgICAgICBjb250cm9sbGVyOiBXb3JsZE1hcENvbnRhaW5lckNvbnRyb2xsZXIsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGxheW91dD17bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGl0ZW1zXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgIG1vZHVsZTogVG9vbGJhcixcbiAgICAgICAgICAgIGZsZXggIDogJ25vbmUnLFxuICAgICAgICAgICAgaXRlbXMgOiBbe1xuICAgICAgICAgICAgICAgIG50eXBlICAgIDogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICdjdXJyZW50TWFwVmlld0xhYmVsJyxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW5SaWdodDogJzIwcHgnfSxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdDdXJyZW50IHZpZXc6IEFjdGl2ZSdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgICAgICAgOiBOdW1iZXJGaWVsZCxcbiAgICAgICAgICAgICAgICBjbGVhclRvT3JpZ2luYWxWYWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uOiAnaW5saW5lJyxcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQgICAgOiAnSGVhdFJ1bGUgbWF4VmFsdWUnLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlICAgICA6IDFlNixcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSAgICAgOiAxMDAsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlICAgIDogJ2hlYXRSdWxlRmllbGQnLFxuICAgICAgICAgICAgICAgIHN0ZXBTaXplICAgICA6IDEwMCxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICAgICAgOiB7bWFyZ2luOiAwfSxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICAgICAgOiAxNTAwMCxcbiAgICAgICAgICAgICAgICB3aWR0aCAgICAgICAgOiAxNTAsXG5cbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiAnb25IZWF0UnVsZUZpZWxkQ2hhbmdlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sICctPicsIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiAnb25TZXJpZXNCdXR0b25DbGljaycsXG4gICAgICAgICAgICAgICAgc2VyaWVzIDogJ2Nhc2VzJyxcbiAgICAgICAgICAgICAgICBzdHlsZSAgOiB7bWFyZ2luUmlnaHQ6ICcycHgnfSxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnPHNwYW4gc3R5bGU9XCJjb2xvcjogI2JiYmJiYlwiPuKXjzwvc3Bhbj4gQ2FzZXMnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uU2VyaWVzQnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgIHNlcmllcyA6ICdhY3RpdmUnLFxuICAgICAgICAgICAgICAgIHN0eWxlICA6IHttYXJnaW5SaWdodDogJzJweCd9LFxuICAgICAgICAgICAgICAgIHRleHQgICA6ICc8c3BhbiBzdHlsZT1cImNvbG9yOiAjNjRiNWY2XCI+4pePPC9zcGFuPiBBY3RpdmUnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uU2VyaWVzQnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgIHNlcmllcyA6ICdyZWNvdmVyZWQnLFxuICAgICAgICAgICAgICAgIHN0eWxlICA6IHttYXJnaW5SaWdodDogJzJweCd9LFxuICAgICAgICAgICAgICAgIHRleHQgICA6ICc8c3BhbiBzdHlsZT1cImNvbG9yOiAjMjhjYTY4XCI+4pePPC9zcGFuPiBSZWNvdmVyZWQnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uU2VyaWVzQnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgIHNlcmllcyA6ICdkZWF0aHMnLFxuICAgICAgICAgICAgICAgIHRleHQgICA6ICc8c3BhbiBzdHlsZT1cImNvbG9yOiAjZmI2NzY3XCI+4pePPC9zcGFuPiBEZWF0aHMnXG4gICAgICAgICAgICB9XVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICA6IFdvcmxkTWFwQ29tcG9uZW50LFxuICAgICAgICAgICAgZmxleCAgICAgOiAxLFxuICAgICAgICAgICAgcmVmZXJlbmNlOiAnd29ybGRtYXAnXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoV29ybGRNYXBDb250YWluZXIpO1xuXG5leHBvcnQge1dvcmxkTWFwQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb21wb25lbnRDb250cm9sbGVyIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250cm9sbGVyL0NvbXBvbmVudC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb3ZpZC52aWV3LldvcmxkTWFwQ29udGFpbmVyQ29udHJvbGxlclxuICogQGV4dGVuZHMgTmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50XG4gKi9cbmNsYXNzIFdvcmxkTWFwQ29udGFpbmVyQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdDb3ZpZC52aWV3LldvcmxkTWFwQ29udGFpbmVyQ29udHJvbGxlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQudmlldy5Xb3JsZE1hcENvbnRhaW5lckNvbnRyb2xsZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBoZWF0UnVsZUNoYW5nZURlbGF5PTE1MFxuICAgICAgICAgKi9cbiAgICAgICAgaGVhdFJ1bGVDaGFuZ2VEZWxheTogMTUwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGhlYXRSdWxlQ2hhbmdlVGltZW91dD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBoZWF0UnVsZUNoYW5nZVRpbWVvdXQ6IG51bGxcbiAgICB9fVxuXG4gICAgY2hhbmdlSGVhdFJ1bGUodmFsdWUpIHtcbiAgICAgICAgY29uc3QgY2hhcnRJZCA9IHRoaXMuZ2V0UmVmZXJlbmNlKCd3b3JsZG1hcCcpLmlkO1xuXG4gICAgICAgIE5lby5tYWluLmFkZG9uLkFtQ2hhcnRzLnNldFByb3BlcnR5KHtcbiAgICAgICAgICAgIGlkICAgICA6IHRoaXMuZ2V0UmVmZXJlbmNlKCd3b3JsZG1hcCcpLmlkLFxuICAgICAgICAgICAgcGF0aCAgIDogJ3Nlcmllcy52YWx1ZXMuMC5oZWF0UnVsZXMudmFsdWVzLjAubWF4VmFsdWUnLFxuICAgICAgICAgICAgdmFsdWUgIDogdmFsdWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTmVvLm1haW4uYWRkb24uQW1DaGFydHMuY2FsbE1ldGhvZCh7XG4gICAgICAgICAgICBpZCAgOiBjaGFydElkLFxuICAgICAgICAgICAgcGF0aDogJ3Nlcmllcy52YWx1ZXMuMC5pbnZhbGlkYXRlRGF0YSdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uSGVhdFJ1bGVGaWVsZENoYW5nZShkYXRhKSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBjbGVhclRpbWVvdXQobWUuaGVhdFJ1bGVDaGFuZ2VUaW1lb3V0KTtcblxuICAgICAgICBtZS5oZWF0UnVsZUNoYW5nZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG1lLmNoYW5nZUhlYXRSdWxlKGRhdGEudmFsdWUpO1xuICAgICAgICB9LCBtZS5oZWF0UnVsZUNoYW5nZURlbGF5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25TZXJpZXNCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIGNvbnN0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgY2hhcnRJZCAgICAgPSBtZS5nZXRSZWZlcmVuY2UoJ3dvcmxkbWFwJykuaWQsXG4gICAgICAgICAgICAgIGNvdW50cnlEYXRhID0gWy4uLm1lLmdldFBhcmVudCgpLmRhdGFdO1xuXG4gICAgICAgIGNvbnN0IGNvbG9yTWFwID0ge1xuICAgICAgICAgICAgYWN0aXZlICAgOiAnIzY0YjVmNicsXG4gICAgICAgICAgICBjYXNlcyAgICA6ICcjYmJiYmJiJyxcbiAgICAgICAgICAgIGRlYXRocyAgIDogJyNmYjY3NjcnLFxuICAgICAgICAgICAgcmVjb3ZlcmVkOiAnIzI4Y2E2OCdcbiAgICAgICAgfTtcblxuICAgICAgICBOZW8ubWFpbi5hZGRvbi5BbUNoYXJ0cy5zZXRQcm9wZXJ0eSh7XG4gICAgICAgICAgICBpZCAgICAgOiBjaGFydElkLFxuICAgICAgICAgICAgaXNDb2xvcjogdHJ1ZSxcbiAgICAgICAgICAgIHBhdGggICA6ICdzZXJpZXMudmFsdWVzLjAuaGVhdFJ1bGVzLnZhbHVlcy4wLm1heCcsXG4gICAgICAgICAgICB2YWx1ZSAgOiBjb2xvck1hcFtkYXRhLmNvbXBvbmVudC5zZXJpZXNdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIE5lby5tYWluLmFkZG9uLkFtQ2hhcnRzLnNldFByb3BlcnR5KHtcbiAgICAgICAgICAgIGlkICAgOiBjaGFydElkLFxuICAgICAgICAgICAgcGF0aCA6ICdzZXJpZXMudmFsdWVzLjAuZGF0YUZpZWxkcy52YWx1ZScsXG4gICAgICAgICAgICB2YWx1ZTogZGF0YS5jb21wb25lbnQuc2VyaWVzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIE5lby5tYWluLmFkZG9uLkFtQ2hhcnRzLmNhbGxNZXRob2Qoe1xuICAgICAgICAgICAgaWQgIDogY2hhcnRJZCxcbiAgICAgICAgICAgIHBhdGg6ICdzZXJpZXMudmFsdWVzLjAuaW52YWxpZGF0ZURhdGEnXG4gICAgICAgIH0pLiB0aGVuKCgpID0+IHtcbiAgICAgICAgICAgIG1lLmdldFJlZmVyZW5jZSgnY3VycmVudE1hcFZpZXdMYWJlbCcpLnRleHQgPSAnQ3VycmVudCB2aWV3OiAnICsgTmVvLmNhcGl0YWxpemUoZGF0YS5jb21wb25lbnQuc2VyaWVzKTtcblxuICAgICAgICAgICAgY291bnRyeURhdGEuc29ydCgoYSwgYikgPT4gYltkYXRhLmNvbXBvbmVudC5zZXJpZXNdIC0gYVtkYXRhLmNvbXBvbmVudC5zZXJpZXNdKTtcblxuICAgICAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdoZWF0UnVsZUZpZWxkJykudmFsdWUgPSBNYXRoLmNlaWwoY291bnRyeURhdGFbOV1bZGF0YS5jb21wb25lbnQuc2VyaWVzXSAvIDEwMCkgKiAxMDA7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoV29ybGRNYXBDb250YWluZXJDb250cm9sbGVyKTtcblxuZXhwb3J0IHtXb3JsZE1hcENvbnRhaW5lckNvbnRyb2xsZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvdW50cnlTdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9Db3VudHJpZXMubWpzJztcbmltcG9ydCBHYWxsZXJ5ICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9HYWxsZXJ5Lm1qcyc7XG5pbXBvcnQgVXRpbCAgICAgICAgIGZyb20gJy4uLy4uL1V0aWwubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgQ292aWQudmlldy5jb3VudHJ5LkdhbGxlcnlcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuR2FsbGVyeVxuICovXG5jbGFzcyBDb3VudHJ5R2FsbGVyeSBleHRlbmRzIEdhbGxlcnkge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdDb3ZpZC52aWV3LmNvdW50cnkuR2FsbGVyeSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQudmlldy5jb3VudHJ5LkdhbGxlcnknLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2NvdmlkLWNvdW50cnktZ2FsbGVyeScsICduZW8tZ2FsbGVyeScsICdwYWdlJywgJ3ZpZXcnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ2NvdmlkLWNvdW50cnktZ2FsbGVyeScsICduZW8tZ2FsbGVyeScsICdwYWdlJywgJ3ZpZXcnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpbWFnZSBoZWlnaHQgb2YgdGhlIGdhbGxlcnlcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBpbWFnZUhlaWdodD0yNDBcbiAgICAgICAgICovXG4gICAgICAgIGltYWdlSGVpZ2h0OiAyODAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaW1hZ2Ugd2lkdGggb2YgdGhlIGdhbGxlcnlcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBpbWFnZVdpZHRoPTMyMFxuICAgICAgICAgKi9cbiAgICAgICAgaW1hZ2VXaWR0aDogMzQwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBpdGVtVHBsX1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbVRwbDoge1xuICAgICAgICAgICAgY2xzICAgICA6IFsnbmVvLWdhbGxlcnktaXRlbScsICdpbWFnZS13cmFwJywgJ3ZpZXcnLCAnbmVvLXRyYW5zaXRpb24tMTAwMCddLFxuICAgICAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICBjbHMgIDogWyduZW8taXRlbS13cmFwcGVyJ10sXG4gICAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgICAgICB0YWcgIDogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIGNscyAgOiBbJ25lby1jb3VudHJ5LWdhbGxlcnktaXRlbSddLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge30sXG5cbiAgICAgICAgICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWl0ZW0taGVhZGVyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICdpbWcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsczogWyduZW8tZmxhZyddXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ3RhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsczogWyduZW8tY29udGVudC10YWJsZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ3RyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbiA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgaHRtbDogJ0Nhc2VzJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGNsczogWyduZW8tYWxpZ24tcmlnaHQnXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIHN0eWxlOiB7d2lkdGg6ICcxMDAlJ319LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBodG1sOiAnQ2FzZXMgdG9kYXknfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgY2xzOiBbJ25lby1hbGlnbi1yaWdodCddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICd0cicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGh0bWw6ICdEZWF0aHMnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgY2xzOiBbJ25lby1hbGlnbi1yaWdodCcsICduZW8tY29udGVudC1kZWF0aHMnXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIHN0eWxlOiB7d2lkdGg6ICcxMDAlJ319LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBodG1sOiAnRGVhdGhzIHRvZGF5J30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGNsczogWyduZW8tYWxpZ24tcmlnaHQnLCAnbmVvLWNvbnRlbnQtZGVhdGhzJ119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ3RyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbiA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgaHRtbDogJ1JlY292ZXJlZCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBjbHM6IFsnbmVvLWFsaWduLXJpZ2h0JywgJ25lby1jb250ZW50LXJlY292ZXJlZCddfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgc3R5bGU6IHt3aWR0aDogJzEwMCUnfX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGh0bWw6ICdDcml0aWNhbCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBjbHM6IFsnbmVvLWFsaWduLXJpZ2h0JywgJ25lby1jb250ZW50LWNyaXRpY2FsJ119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB1bmlxdWUgcmVjb3JkIGZpZWxkIGNvbnRhaW5pbmcgdGhlIGlkLlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGtleVByb3BlcnR5PSdpZCdcbiAgICAgICAgICovXG4gICAgICAgIGtleVByb3BlcnR5OiAnY291bnRyeScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHRvIHNlbGVjdCB0aGUgaXRlbSBpbnNpZGUgdGhlIG1pZGRsZSBvZiB0aGUgc3RvcmUgaXRlbXMgb24gbW91bnRcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2VsZWN0T25Nb3VudD1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZWN0T25Nb3VudDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5TdG9yZX0gc3RvcmU9Q291bnRyeVN0b3JlXG4gICAgICAgICAqL1xuICAgICAgICBzdG9yZTogQ291bnRyeVN0b3JlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGdldCBkaWZmZXJlbnQgaXRlbS1tYXJrdXBzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21JdGVtXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHZkb21JdGVtXG4gICAgICovXG4gICAgY3JlYXRlSXRlbSh2ZG9tSXRlbSwgcmVjb3JkLCBpbmRleCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBmaXJzdENoaWxkID0gdmRvbUl0ZW0uY25bMF0uY25bMF0sXG4gICAgICAgICAgICBmTiAgICAgICAgID0gVXRpbC5mb3JtYXROdW1iZXIsXG4gICAgICAgICAgICB0YWJsZSAgICAgID0gZmlyc3RDaGlsZC5jblsxXTtcblxuICAgICAgICB2ZG9tSXRlbS5pZCA9IG1lLmdldEl0ZW1Wbm9kZUlkKHJlY29yZFttZS5rZXlQcm9wZXJ0eV0pO1xuXG4gICAgICAgIHZkb21JdGVtLmNuWzBdLnN0eWxlLmhlaWdodCA9IG1lLmltYWdlSGVpZ2h0ICsgJ3B4JztcblxuICAgICAgICBmaXJzdENoaWxkLnN0eWxlLmhlaWdodCA9IChtZS5pbWFnZUhlaWdodCAtIDcwKSArICdweCc7XG4gICAgICAgIGZpcnN0Q2hpbGQuc3R5bGUud2lkdGggID0gbWUuaW1hZ2VXaWR0aCAgKyAncHgnO1xuXG4gICAgICAgIGZpcnN0Q2hpbGQuY25bMF0uY25bMF0uc3JjICA9IFV0aWwuZ2V0Q291bnRyeUZsYWdVcmwocmVjb3JkLmNvdW50cnkpO1xuICAgICAgICBmaXJzdENoaWxkLmNuWzBdLmNuWzFdLmh0bWwgPSByZWNvcmQuY291bnRyeTtcblxuICAgICAgICB0YWJsZS5jblswXS5jblsxXS5odG1sID0gZk4oe3ZhbHVlOiByZWNvcmQuY2FzZXN9KTtcbiAgICAgICAgdGFibGUuY25bMV0uY25bMV0uaHRtbCA9IGZOKHt2YWx1ZTogcmVjb3JkLmRlYXRoc30pO1xuICAgICAgICB0YWJsZS5jblsyXS5jblsxXS5odG1sID0gZk4oe3ZhbHVlOiByZWNvcmQucmVjb3ZlcmVkfSk7XG5cbiAgICAgICAgdGFibGUuY25bMF0uY25bNF0uaHRtbCA9IGZOKHt2YWx1ZTogcmVjb3JkLnRvZGF5Q2FzZXN9KTtcbiAgICAgICAgdGFibGUuY25bMV0uY25bNF0uaHRtbCA9IGZOKHt2YWx1ZTogcmVjb3JkLnRvZGF5RGVhdGhzfSk7XG4gICAgICAgIHRhYmxlLmNuWzJdLmNuWzRdLmh0bWwgPSBmTih7dmFsdWU6IHJlY29yZC5jcml0aWNhbH0pO1xuXG4gICAgICAgIHJldHVybiB2ZG9tSXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2bm9kZUlkXG4gICAgICogQHJldHVybnMge1N0cmluZ30gaXRlbUlkXG4gICAgICovXG4gICAgZ2V0SXRlbUlkKHZub2RlSWQpIHtcbiAgICAgICAgcmV0dXJuIHZub2RlSWQuc3BsaXQoJ19fJylbMV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBpdGVtc1xuICAgICAqL1xuICAgIG9uU3RvcmVMb2FkKGl0ZW1zKSB7XG4gICAgICAgIHN1cGVyLm9uU3RvcmVMb2FkKGl0ZW1zKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0T25Nb3VudCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmFmdGVyU2V0TW91bnRlZCh0cnVlLCBmYWxzZSk7XG4gICAgICAgIH0sIDQwMCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb3VudHJ5R2FsbGVyeSk7XG5cbmV4cG9ydCB7Q291bnRyeUdhbGxlcnkgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvdW50cnlTdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9Db3VudHJpZXMubWpzJztcbmltcG9ydCBIZWxpeCAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9IZWxpeC5tanMnO1xuaW1wb3J0IFV0aWwgICAgICAgICBmcm9tICcuLi8uLi9VdGlsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLnZpZXcuY291bnRyeS5IZWxpeFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5IZWxpeFxuICovXG5jbGFzcyBDb3VudHJ5SGVsaXggZXh0ZW5kcyBIZWxpeCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0NvdmlkLnZpZXcuY291bnRyeS5IZWxpeCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQudmlldy5jb3VudHJ5LkhlbGl4JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9Wydjb3ZpZC1jb3VudHJ5LWhlbGl4JywgJ25lby1oZWxpeCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnY292aWQtY291bnRyeS1oZWxpeCcsICduZW8taGVsaXgnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB2ZXJ0aWNhbCBkZWx0YSBiZXR3ZWVuIGVhY2ggaGVsaXggaXRlbSAoaW5jcmVhc2luZyB0aGlzIHZhbHVlIHdpbGwgY3JlYXRlIGEgc3BpcmFsKVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGRlbHRhWT0xLjJcbiAgICAgICAgICovXG4gICAgICAgIGRlbHRhWTogMS4yLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBpdGVtVHBsX1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbVRwbDoge1xuICAgICAgICAgICAgY2xzICAgICA6IFsnc3VyZmFjZScsICduZW8taGVsaXgtaXRlbSddLFxuICAgICAgICAgICAgc3R5bGUgICA6IHt9LFxuICAgICAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICBjbHMgIDogWyduZW8taXRlbS13cmFwcGVyJ10sXG4gICAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgICAgICB0YWcgIDogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIGNscyAgOiBbJ25lby1jb3VudHJ5LWhlbGl4LWl0ZW0nXSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuXG4gICAgICAgICAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1pdGVtLWhlYWRlciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAnaW1nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWZsYWcnXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICd0YWJsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWNvbnRlbnQtdGFibGUnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICd0cicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGh0bWw6ICdDYXNlcyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBjbHM6IFsnbmVvLWFsaWduLXJpZ2h0J119LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBzdHlsZToge3dpZHRoOiAnMTAwJSd9fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgaHRtbDogJ0Nhc2VzIHRvZGF5J30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGNsczogWyduZW8tYWxpZ24tcmlnaHQnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAndHInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNuIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBodG1sOiAnRGVhdGhzJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGNsczogWyduZW8tYWxpZ24tcmlnaHQnLCAnbmVvLWNvbnRlbnQtZGVhdGhzJ119LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBzdHlsZToge3dpZHRoOiAnMTAwJSd9fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgaHRtbDogJ0RlYXRocyB0b2RheSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBjbHM6IFsnbmVvLWFsaWduLXJpZ2h0JywgJ25lby1jb250ZW50LWRlYXRocyddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICd0cicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGh0bWw6ICdSZWNvdmVyZWQnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgY2xzOiBbJ25lby1hbGlnbi1yaWdodCcsICduZW8tY29udGVudC1yZWNvdmVyZWQnXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIHN0eWxlOiB7d2lkdGg6ICcxMDAlJ319LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBodG1sOiAnQ3JpdGljYWwnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgY2xzOiBbJ25lby1hbGlnbi1yaWdodCcsICduZW8tY29udGVudC1jcml0aWNhbCddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdW5pcXVlIHJlY29yZCBmaWVsZCBjb250YWluaW5nIHRoZSBpZC5cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBrZXlQcm9wZXJ0eT0naWQnXG4gICAgICAgICAqL1xuICAgICAgICBrZXlQcm9wZXJ0eTogJ2NvdW50cnknLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHJhZGl1cyBvZiB0aGUgSGVsaXggaW4gcHhcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSByYWRpdXM9MjUwMFxuICAgICAgICAgKi9cbiAgICAgICAgcmFkaXVzOiAyNTAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHJvdGF0aW9uQW5nbGUgb2YgdGhlIEhlbGl4IGluIGRlZ3JlZXNcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSByb3RhdGlvbkFuZ2xlPTcyMFxuICAgICAgICAgKi9cbiAgICAgICAgcm90YXRpb25BbmdsZTogNzIwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBkaXNwbGF5cyB0aGUgZmlyc3QgJiBsYXN0IG5hbWUgcmVjb3JkIGZpZWxkcyBiZWxvdyBhbiBleHBhbmRlZCBpdGVtXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNob3dDbG9uZUluZm89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHNob3dDbG9uZUluZm86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmRhdGEuU3RvcmV9IHN0b3JlPUNvdW50cnlTdG9yZVxuICAgICAgICAgKi9cbiAgICAgICAgc3RvcmU6IENvdW50cnlTdG9yZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0cmFuc2xhdGVYIHZhbHVlIGdldHMgaW5jbHVkZWQgaW50byBlYWNoIGhlbGl4IGl0ZW1cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSB0cmFuc2xhdGVZPTUwMFxuICAgICAgICAgKi9cbiAgICAgICAgdHJhbnNsYXRlWTogNTAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRyYW5zbGF0ZVggdmFsdWUgZ2V0cyBpbmNsdWRlZCBpbnRvIGVhY2ggaGVsaXggaXRlbVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHRyYW5zbGF0ZVpfPS0yMzAwXG4gICAgICAgICAqL1xuICAgICAgICB0cmFuc2xhdGVaOiAtMjMwMFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tSXRlbVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB2ZG9tSXRlbVxuICAgICAqL1xuICAgIGNyZWF0ZUl0ZW0odmRvbUl0ZW0sIHJlY29yZCwgaW5kZXgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZmlyc3RDaGlsZCA9IHZkb21JdGVtLmNuWzBdLmNuWzBdLFxuICAgICAgICAgICAgZk4gICAgICAgICA9IFV0aWwuZm9ybWF0TnVtYmVyLFxuICAgICAgICAgICAgdGFibGUgICAgICA9IGZpcnN0Q2hpbGQuY25bMV07XG5cbiAgICAgICAgdmRvbUl0ZW0uaWQgPSBtZS5nZXRJdGVtVm5vZGVJZChyZWNvcmRbbWUua2V5UHJvcGVydHldKTtcblxuICAgICAgICBmaXJzdENoaWxkLmNuWzBdLmNuWzBdLnNyYyAgPSBVdGlsLmdldENvdW50cnlGbGFnVXJsKHJlY29yZC5jb3VudHJ5KTtcbiAgICAgICAgZmlyc3RDaGlsZC5jblswXS5jblsxXS5odG1sID0gcmVjb3JkLmNvdW50cnk7XG5cbiAgICAgICAgdGFibGUuY25bMF0uY25bMV0uaHRtbCA9IGZOKHt2YWx1ZTogcmVjb3JkLmNhc2VzfSk7XG4gICAgICAgIHRhYmxlLmNuWzFdLmNuWzFdLmh0bWwgPSBmTih7dmFsdWU6IHJlY29yZC5kZWF0aHN9KTtcbiAgICAgICAgdGFibGUuY25bMl0uY25bMV0uaHRtbCA9IGZOKHt2YWx1ZTogcmVjb3JkLnJlY292ZXJlZH0pO1xuXG4gICAgICAgIHRhYmxlLmNuWzBdLmNuWzRdLmh0bWwgPSBmTih7dmFsdWU6IHJlY29yZC50b2RheUNhc2VzfSk7XG4gICAgICAgIHRhYmxlLmNuWzFdLmNuWzRdLmh0bWwgPSBmTih7dmFsdWU6IHJlY29yZC50b2RheURlYXRoc30pO1xuICAgICAgICB0YWJsZS5jblsyXS5jbls0XS5odG1sID0gZk4oe3ZhbHVlOiByZWNvcmQuY3JpdGljYWx9KTtcblxuICAgICAgICByZXR1cm4gdmRvbUl0ZW07XG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRDbG9uZVRyYW5zZm9ybSgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdHJhbnNsYXRlWCA9IChtZS5vZmZzZXRXaWR0aCAgLSAyODAwKSAvIDYsXG4gICAgICAgICAgICB0cmFuc2xhdGVZID0gKG1lLm9mZnNldEhlaWdodCAtIDI3MDApIC8gNixcbiAgICAgICAgICAgIHRyYW5zbGF0ZVogPSAxMDA0MDAgKyBtZS5wZXJzcGVjdGl2ZSAvIDEuNTtcblxuICAgICAgICByZXR1cm4gJ21hdHJpeDNkKDEsMCwwLDAsMCwxLDAsMCwwLDAsMSwwLCcrdHJhbnNsYXRlWCsnLCcrdHJhbnNsYXRlWSsnLCcrdHJhbnNsYXRlWisnLDEpJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2bm9kZUlkXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRJdGVtSWQodm5vZGVJZCkge1xuICAgICAgICByZXR1cm4gdm5vZGVJZC5zcGxpdCgnX18nKVsxXTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENvdW50cnlIZWxpeCk7XG5cbmV4cG9ydCB7Q291bnRyeUhlbGl4IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb250YWluZXIgICAgICBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdGFibGUvQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgSGlzdG9yaWNhbERhdGEgZnJvbSAnLi4vLi4vc3RvcmUvSGlzdG9yaWNhbERhdGEubWpzJztcbmltcG9ydCBVdGlsICAgICAgICAgICBmcm9tICcuLi8uLi9VdGlsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLnZpZXcuY291bnRyeS5IaXN0b3JpY2FsRGF0YVRhYmxlXG4gKiBAZXh0ZW5kcyBOZW8udGFibGUuQ29udGFpbmVyXG4gKi9cbmNsYXNzIEhpc3RvcmljYWxEYXRhVGFibGUgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdDb3ZpZC52aWV3LmNvdW50cnkuSGlzdG9yaWNhbERhdGFUYWJsZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQudmlldy5jb3VudHJ5Lkhpc3RvcmljYWxEYXRhVGFibGUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2NvdmlkLWhpc3RvcmljYWwtZGF0YS10YWJsZScsICduZW8tdGFibGUtY29udGFpbmVyJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWydjb3ZpZC1oaXN0b3JpY2FsLWRhdGEtdGFibGUnLCAnbmVvLXRhYmxlLWNvbnRhaW5lciddLFxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmYXVsdCBjb25maWdzIGZvciBlYWNoIGNvbHVtblxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGNvbHVtbkRlZmF1bHRzXG4gICAgICAgICAqL1xuICAgICAgICBjb2x1bW5EZWZhdWx0czoge1xuICAgICAgICAgICAgYWxpZ24gICAgICAgICAgICAgICA6ICdyaWdodCcsXG4gICAgICAgICAgICBkZWZhdWx0U29ydERpcmVjdGlvbjogJ0RFU0MnLFxuICAgICAgICAgICAgcmVuZGVyZXIgICAgICAgICAgICA6IFV0aWwuZm9ybWF0TnVtYmVyXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX0gY29sdW1uc1xuICAgICAgICAgKi9cbiAgICAgICAgY29sdW1uczogW3tcbiAgICAgICAgICAgIGFsaWduICAgIDogJ2xlZnQnLFxuICAgICAgICAgICAgZGF0YUZpZWxkOiAnZGF0ZScsXG4gICAgICAgICAgICBkb2NrICAgICA6ICdsZWZ0JyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ0RhdGUnLFxuICAgICAgICAgICAgd2lkdGggICAgOiAxMDAsXG4gICAgICAgICAgICByZW5kZXJlciA6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjbHMgOiBbJ25lby1kYXRlLWNvbHVtbicsICduZW8tdGFibGUtY2VsbCddLFxuICAgICAgICAgICAgICAgICAgICBodG1sOiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZGVmYXVsdCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheSAgOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb250aDogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeWVhciA6ICdudW1lcmljJ1xuICAgICAgICAgICAgICAgICAgICB9KS5mb3JtYXQobmV3IERhdGUoZGF0YS52YWx1ZSkpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAnY2FzZXMnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnQ2FzZXMnLFxuICAgICAgICAgICAgcmVuZGVyZXIgOiBkYXRhID0+IFV0aWwuZm9ybWF0TnVtYmVyKGRhdGEpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ2FjdGl2ZScsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICdBY3RpdmUnLFxuICAgICAgICAgICAgcmVuZGVyZXIgOiBkYXRhID0+IFV0aWwuZm9ybWF0TnVtYmVyKGRhdGEsICcjNjRCNUY2JylcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAncmVjb3ZlcmVkJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ1JlY292ZXJlZCcsXG4gICAgICAgICAgICByZW5kZXJlciA6IGRhdGEgPT4gVXRpbC5mb3JtYXROdW1iZXIoZGF0YSwgJyMyOGNhNjgnKVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICdkZWF0aHMnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnRGVhdGhzJyxcbiAgICAgICAgICAgIHJlbmRlcmVyIDogZGF0YSA9PiBVdGlsLmZvcm1hdE51bWJlcihkYXRhLCAnI2ZiNjc2NycpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ2RhaWx5Q2FzZXMnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnRGFpbHkgQycsXG4gICAgICAgICAgICByZW5kZXJlciA6IGRhdGEgPT4gVXRpbC5mb3JtYXROdW1iZXIoZGF0YSlcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAnZGFpbHlBY3RpdmUnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnRGFpbHkgQScsXG4gICAgICAgICAgICByZW5kZXJlciA6IGRhdGEgPT4gVXRpbC5mb3JtYXROdW1iZXIoZGF0YSwgJyM2NEI1RjYnKVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICdkYWlseVJlY292ZXJlZCcsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICdEYWlseSBSJyxcbiAgICAgICAgICAgIHJlbmRlcmVyIDogZGF0YSA9PiBVdGlsLmZvcm1hdE51bWJlcihkYXRhLCAnIzI4Y2E2OCcpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ2RhaWx5RGVhdGhzJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ0RhaWx5IEQnLFxuICAgICAgICAgICAgcmVuZGVyZXIgOiBkYXRhID0+IFV0aWwuZm9ybWF0TnVtYmVyKGRhdGEsICcjZmI2NzY3JylcbiAgICAgICAgfV0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5TdG9yZX0gc3RvcmU9SGlzdG9yaWNhbERhdGFcbiAgICAgICAgICovXG4gICAgICAgIHN0b3JlOiBIaXN0b3JpY2FsRGF0YVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEhpc3RvcmljYWxEYXRhVGFibGUpO1xuXG5leHBvcnQge0hpc3RvcmljYWxEYXRhVGFibGUgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEFtQ2hhcnRDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC93cmFwcGVyL0FtQ2hhcnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgQ292aWQudmlldy5jb3VudHJ5LkxpbmVDaGFydENvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC53cmFwcGVyLkFtQ2hhcnRcbiAqL1xuY2xhc3MgTGluZUNoYXJ0Q29tcG9uZW50IGV4dGVuZHMgQW1DaGFydENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0NvdmlkLnZpZXcuY291bnRyeS5MaW5lQ2hhcnRDb21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkLnZpZXcuY291bnRyeS5MaW5lQ2hhcnRDb21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2NvdmlkLWxpbmUtY2hhcnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ2NvdmlkLWxpbmUtY2hhcnQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gY2hhcnRDb25maWdcbiAgICAgICAgICovXG4gICAgICAgIGNoYXJ0Q29uZmlnOiB7XG4gICAgICAgICAgICBjdXJzb3I6IHtcbiAgICAgICAgICAgICAgICBtYXhUb29sdGlwRGlzdGFuY2U6IC0xXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICcjYmJiJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgeEF4ZXM6IFt7XG4gICAgICAgICAgICAgICAgdHlwZTogJ0RhdGVBeGlzJyxcblxuICAgICAgICAgICAgICAgIHJlbmRlcmVyOiB7XG4gICAgICAgICAgICAgICAgICAgIG1pbkdyaWREaXN0YW5jZTogNjAsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAnI2JiYidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dLFxuXG4gICAgICAgICAgICB5QXhlczogW3tcbiAgICAgICAgICAgICAgICB0eXBlICAgICAgIDogJ1ZhbHVlQXhpcycsXG4gICAgICAgICAgICAgICAgbG9nYXJpdGhtaWM6IHRydWUsXG5cbiAgICAgICAgICAgICAgICBudW1iZXJGb3JtYXR0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyRm9ybWF0OiAnIy4wYScsXG5cbiAgICAgICAgICAgICAgICAgICAgYmlnTnVtYmVyUHJlZml4ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtudW1iZXI6IDFlMywgc3VmZml4OiAnSyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAge251bWJlcjogMWU2LCBzdWZmaXg6ICdNJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICB7bnVtYmVyOiAxZTksIHN1ZmZpeDogJ0InfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZW5kZXJlcjoge1xuICAgICAgICAgICAgICAgICAgICBtaW5HcmlkRGlzdGFuY2U6IDYwLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogJyNiYmInXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSxcblxuICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgIHR5cGUgICAgICAgOiAnTGluZVNlcmllcycsXG4gICAgICAgICAgICAgICAgZGF0YUZpZWxkcyA6IHtkYXRlWCA6ICdkYXRlJywgdmFsdWVZOiAnYWN0aXZlJ30sXG4gICAgICAgICAgICAgICAgZmlsbCAgICAgICA6ICcjNjRiNWY2JyxcbiAgICAgICAgICAgICAgICBuYW1lICAgICAgIDogJ0FjdGl2ZScsXG4gICAgICAgICAgICAgICAgc3Ryb2tlICAgICA6ICcjNjRiNWY2JyxcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogMyxcblxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZCAgICAgICA6IHtmaWxsOiAnI2ZmZid9LFxuICAgICAgICAgICAgICAgICAgICBnZXRGaWxsRnJvbU9iamVjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsICAgICAgICAgICAgOiB7ZmlsbDogJyMwMDAnfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0eXBlICAgICAgIDogJ0xpbmVTZXJpZXMnLFxuICAgICAgICAgICAgICAgIGRhdGFGaWVsZHMgOiB7ZGF0ZVggOiAnZGF0ZScsIHZhbHVlWTogJ2Nhc2VzJ30sXG4gICAgICAgICAgICAgICAgZmlsbCAgICAgICA6ICcjYmJiJyxcbiAgICAgICAgICAgICAgICBuYW1lICAgICAgIDogJ0Nhc2VzJyxcbiAgICAgICAgICAgICAgICBzdHJva2UgICAgIDogJyNiYmInLFxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAzLFxuICAgICAgICAgICAgICAgIC8vdGVuc2lvblggICA6IC45LFxuXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kICAgICAgIDoge2ZpbGw6ICcjZmZmJ30sXG4gICAgICAgICAgICAgICAgICAgIGdldEZpbGxGcm9tT2JqZWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwgICAgICAgICAgICA6IHtmaWxsOiAnIzAwMCd9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHR5cGUgICAgICAgOiAnTGluZVNlcmllcycsXG4gICAgICAgICAgICAgICAgZGF0YUZpZWxkcyA6IHtkYXRlWCA6ICdkYXRlJywgdmFsdWVZOiAnZGVhdGhzJ30sXG4gICAgICAgICAgICAgICAgZmlsbCAgICAgICA6ICcjZmI2NzY3JyxcbiAgICAgICAgICAgICAgICBuYW1lICAgICAgIDogJ0RlYXRocycsXG4gICAgICAgICAgICAgICAgc3Ryb2tlICAgICA6ICcjZmI2NzY3JyxcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogMyxcblxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZCAgICAgICA6IHtmaWxsOiAnI2ZmZid9LFxuICAgICAgICAgICAgICAgICAgICBnZXRGaWxsRnJvbU9iamVjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsICAgICAgICAgICAgOiB7ZmlsbDogJyMwMDAnfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0eXBlICAgICAgIDogJ0xpbmVTZXJpZXMnLFxuICAgICAgICAgICAgICAgIGRhdGFGaWVsZHMgOiB7ZGF0ZVggOiAnZGF0ZScsIHZhbHVlWTogJ3JlY292ZXJlZCd9LFxuICAgICAgICAgICAgICAgIGZpbGwgICAgICAgOiAnIzI4Y2E2OCcsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgICA6ICdSZWNvdmVyZWQnLFxuICAgICAgICAgICAgICAgIHN0cm9rZSAgICAgOiAnIzI4Y2E2OCcsXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDMsXG5cbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQgICAgICAgOiB7ZmlsbDogJyNmZmYnfSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0RmlsbEZyb21PYmplY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbCAgICAgICAgICAgIDoge2ZpbGw6ICcjMDAwJ31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gY29tYmluZVNlcmllc1Rvb2x0aXA9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgY29tYmluZVNlcmllc1Rvb2x0aXA6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBmaXRQYXJlbnRIZWlnaHQ9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgZml0UGFyZW50SGVpZ2h0OiB0cnVlXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTGluZUNoYXJ0Q29tcG9uZW50KTtcblxuZXhwb3J0IHtMaW5lQ2hhcnRDb21wb25lbnQgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbnRhaW5lciAgICBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdGFibGUvQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgQ291bnRyeVN0b3JlIGZyb20gJy4uLy4uL3N0b3JlL0NvdW50cmllcy5tanMnO1xuaW1wb3J0IFV0aWwgICAgICAgICBmcm9tICcuLi8uLi9VdGlsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLnZpZXcuY291bnRyeS5UYWJsZVxuICogQGV4dGVuZHMgTmVvLnRhYmxlLkNvbnRhaW5lclxuICovXG5jbGFzcyBUYWJsZSBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0NvdmlkLnZpZXcuY291bnRyeS5UYWJsZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQudmlldy5jb3VudHJ5LlRhYmxlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9Wydjb3ZpZC1jb3VudHJ5LXRhYmxlJywgJ25lby10YWJsZS1jb250YWluZXInXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ2NvdmlkLWNvdW50cnktdGFibGUnLCAnbmVvLXRhYmxlLWNvbnRhaW5lciddLFxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmYXVsdCBjb25maWdzIGZvciBlYWNoIGNvbHVtblxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGNvbHVtbkRlZmF1bHRzXG4gICAgICAgICAqL1xuICAgICAgICBjb2x1bW5EZWZhdWx0czoge1xuICAgICAgICAgICAgYWxpZ24gICAgICAgICAgICAgICA6ICdyaWdodCcsXG4gICAgICAgICAgICBkZWZhdWx0U29ydERpcmVjdGlvbjogJ0RFU0MnLFxuICAgICAgICAgICAgcmVuZGVyZXIgICAgICAgICAgICA6IFV0aWwuZm9ybWF0TnVtYmVyXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX0gY29sdW1uc1xuICAgICAgICAgKi9cbiAgICAgICAgY29sdW1uczogW3tcbiAgICAgICAgICAgIGNscyAgICAgIDogWyduZW8taW5kZXgtY29sdW1uJywgJ25lby10YWJsZS1oZWFkZXItYnV0dG9uJ10sXG4gICAgICAgICAgICBkYXRhRmllbGQ6ICdpbmRleCcsXG4gICAgICAgICAgICBkb2NrICAgICA6ICdsZWZ0JyxcbiAgICAgICAgICAgIG1pbldpZHRoIDogNDAsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICcjJyxcbiAgICAgICAgICAgIHJlbmRlcmVyIDogVXRpbC5pbmRleFJlbmRlcmVyLFxuICAgICAgICAgICAgd2lkdGggICAgOiA0MFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBhbGlnbiAgICAgICAgICAgICAgIDogJ2xlZnQnLFxuICAgICAgICAgICAgZGF0YUZpZWxkICAgICAgICAgICA6ICdjb3VudHJ5JyxcbiAgICAgICAgICAgIGRlZmF1bHRTb3J0RGlyZWN0aW9uOiAnQVNDJyxcbiAgICAgICAgICAgIGRvY2sgICAgICAgICAgICAgICAgOiAnbGVmdCcsXG4gICAgICAgICAgICB0ZXh0ICAgICAgICAgICAgICAgIDogJ0NvdW50cnknLFxuICAgICAgICAgICAgd2lkdGggICAgICAgICAgICAgICA6IDIwMCxcblxuICAgICAgICAgICAgcmVuZGVyZXI6IGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNscyA6IFsnbmVvLWNvdW50cnktY29sdW1uJywgJ25lby10YWJsZS1jZWxsJ10sXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlclwiPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxpbWcgc3R5bGU9XCJoZWlnaHQ6MjBweDsgbWFyZ2luLXJpZ2h0OjEwcHg7IHdpZHRoOjIwcHg7XCIgc3JjPVwiJyArIFV0aWwuZ2V0Q291bnRyeUZsYWdVcmwoZGF0YS52YWx1ZSkgKyAnXCI+JyArIGRhdGEudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+J1xuICAgICAgICAgICAgICAgICAgICBdLmpvaW4oJycpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAnY2FzZXMnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnQ2FzZXMnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ2Nhc2VzUGVyT25lTWlsbGlvbicsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICdDYXNlcyAvIDFNJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICdpbmZlY3RlZCcsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICdJbmZlY3RlZCcsXG4gICAgICAgICAgICByZW5kZXJlciA6IGRhdGEgPT4gVXRpbC5mb3JtYXRJbmZlY3RlZChkYXRhKVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICdhY3RpdmUnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnQWN0aXZlJyxcbiAgICAgICAgICAgIHJlbmRlcmVyIDogZGF0YSA9PiBVdGlsLmZvcm1hdE51bWJlcihkYXRhLCAnIzY0QjVGNicpXG4gICAgICAgIH0sICB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICdyZWNvdmVyZWQnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnUmVjb3ZlcmVkJyxcbiAgICAgICAgICAgIHJlbmRlcmVyIDogZGF0YSA9PiBVdGlsLmZvcm1hdE51bWJlcihkYXRhLCAnIzI4Y2E2OCcpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ2NyaXRpY2FsJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ0NyaXRpY2FsJyxcbiAgICAgICAgICAgIHJlbmRlcmVyIDogZGF0YSA9PiBVdGlsLmZvcm1hdE51bWJlcihkYXRhLCAnb3JhbmdlJylcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAnZGVhdGhzJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ0RlYXRocycsXG4gICAgICAgICAgICByZW5kZXJlciA6IGRhdGEgPT4gVXRpbC5mb3JtYXROdW1iZXIoZGF0YSwgJyNmYjY3NjcnKVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICd0b2RheUNhc2VzJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ0Nhc2VzIHRvZGF5J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICd0b2RheURlYXRocycsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICdEZWF0aHMgdG9kYXknLFxuICAgICAgICAgICAgcmVuZGVyZXIgOiBkYXRhID0+IFV0aWwuZm9ybWF0TnVtYmVyKGRhdGEsICcjZmI2NzY3JylcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAndGVzdHMnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnVGVzdHMnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ3Rlc3RzUGVyT25lTWlsbGlvbicsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICdUZXN0cyAvIDFNJ1xuICAgICAgICB9XSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5kYXRhLlN0b3JlfSBzdG9yZT1Db3VudHJ5U3RvcmVcbiAgICAgICAgICovXG4gICAgICAgIHN0b3JlOiBDb3VudHJ5U3RvcmVcbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhUYWJsZSk7XG5cbmV4cG9ydCB7VGFibGUgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC93cmFwcGVyL01hcGJveEdMLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLnZpZXcubWFwYm94R2wuQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LndyYXBwZXIuTWFwYm94R0xcbiAqL1xuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0NvdmlkLnZpZXcubWFwYm94R2wuQ29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdDb3ZpZC52aWV3Lm1hcGJveEdsLkNvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gYWNjZXNzVG9rZW5cbiAgICAgICAgICovXG4gICAgICAgIGFjY2Vzc1Rva2VuOiAncGsuZXlKMUlqb2lkRzlpYVhVaUxDSmhJam9pWTJzNGRUbHNkSEE1TURSbVl6TnRjR3hsY3pGcGNHVm5jeUo5LnFjbXpEanBkeVFlTHR6OXo3ZDdDa0EnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBjZW50ZXI9e2xhdDogNDAsIGxuZzogMjB9XG4gICAgICAgICAqL1xuICAgICAgICBjZW50ZXI6IHtsYXQ6IDQwLCBsbmc6IDIwfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZGF0YVNvdXJjZUlkPSdjb3ZpZDE5J1xuICAgICAgICAgKi9cbiAgICAgICAgZGF0YVNvdXJjZUlkOiAnY292aWQxOScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX1cbiAgICAgICAgICovXG4gICAgICAgIGxheWVyczogW3tcbiAgICAgICAgICAgIGJlZm9yZUlkOiAnd2F0ZXJ3YXktbGFiZWwnLFxuICAgICAgICAgICAgaWQgICAgICA6ICdoaWxsc2hhZGluZycsXG4gICAgICAgICAgICBzb3VyY2UgIDogJ2RlbScsXG4gICAgICAgICAgICB0eXBlICAgIDogJ2hpbGxzaGFkZSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgYmVmb3JlSWQ6ICd3YXRlcndheS1sYWJlbCcsXG4gICAgICAgICAgICBmaWx0ZXIgIDogWyc+JywgWydnZXQnLCAnY2FzZXMnXSwgMF0sXG4gICAgICAgICAgICBpZCAgICAgIDogJ2NvdmlkMTktaGVhdCcsXG4gICAgICAgICAgICBzb3VyY2UgIDogJ2NvdmlkMTknLFxuICAgICAgICAgICAgdHlwZSAgICA6ICdoZWF0bWFwJyxcblxuICAgICAgICAgICAgcGFpbnQ6IHtcbiAgICAgICAgICAgICAgICAnaGVhdG1hcC1jb2xvcicgICAgOiBbJ2ludGVycG9sYXRlJywgWydsaW5lYXInXSwgWydoZWF0bWFwLWRlbnNpdHknXSwgMCwgJ3JnYmEoMCwwLDAsMCknLCAwLjEsICcjOTI3OTAzJywgMC4xNSwgJyNmZmQ0MDMnLCAxLCAnI2ZmMDAwMCddLFxuICAgICAgICAgICAgICAgICdoZWF0bWFwLWludGVuc2l0eSc6IFsnaW50ZXJwb2xhdGUnLCBbJ2xpbmVhciddLCBbJ3pvb20nXSwgMCwgMywgOSwgNV0sXG4gICAgICAgICAgICAgICAgJ2hlYXRtYXAtb3BhY2l0eScgIDogWydpbnRlcnBvbGF0ZScsIFsnbGluZWFyJ10sIFsnem9vbSddLCA1LCAuOTUsIDYsIDBdLFxuICAgICAgICAgICAgICAgICdoZWF0bWFwLXJhZGl1cycgICA6IFsnaW50ZXJwb2xhdGUnLCBbJ2xpbmVhciddLCBbJ3pvb20nXSwgMCwgMiwgMSwgNCwgMiwgOCwgMywgMTYsIDQsIDMyLCA1LCA2NCwgNiwgMTI4LCA3LCAyNTYsIDgsIDUxMiwgOSwgMTAyNF0sXG4gICAgICAgICAgICAgICAgJ2hlYXRtYXAtd2VpZ2h0JyAgIDogWydpbnRlcnBvbGF0ZScsIFsnbGluZWFyJ10sIFsnZ2V0JywgJ2Nhc2VzJ10sIDAsIDAsIDFlNCwgMV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgYmVmb3JlSWQ6ICd3YXRlcndheS1sYWJlbCcsXG4gICAgICAgICAgICBmaWx0ZXIgIDogWyc+JywgWydnZXQnLCAnY2FzZXMnXSwgMF0sXG4gICAgICAgICAgICBpZCAgICAgIDogJ2NvdmlkMTktY2lyY2xlJyxcbiAgICAgICAgICAgIHNvdXJjZSAgOiAnY292aWQxOScsXG4gICAgICAgICAgICB0eXBlICAgIDogJ2NpcmNsZScsXG4gICAgICAgICAgICBtaW56b29tIDogNSxcblxuICAgICAgICAgICAgcGFpbnQ6IHtcbiAgICAgICAgICAgICAgICAnY2lyY2xlLWNvbG9yJyAgICA6IFsnc3RlcCcsIFsnZ2V0JywgJ2Nhc2VzJ10sICcjOWFkNWZmJywgMCwgJyM5YWY2ZmYnLCAyMCwgJyMwMGZmZmYnLCAyMDAsICcjZmZmZjAwJywgNDAwLCAnI2YxZjA3NScsIDgwMCwgJyNmOWIxOTYnLCAxZTMsICcjZjI4Y2IxJywgMmUzLCAnI2YyOGNiMSddLFxuICAgICAgICAgICAgICAgICdjaXJjbGUtb3BhY2l0eScgIDogWydpbnRlcnBvbGF0ZScsIFsnbGluZWFyJ10sIFsnem9vbSddLCA1LCAwLCA2LCAuNl0sXG4gICAgICAgICAgICAgICAgJ2NpcmNsZS1yYWRpdXMnICAgOiBbJ3N0ZXAnLCBbJ2dldCcsICdjYXNlcyddLCAxMCwgMTAwLCAyMCwgNTAwLCAzMCwgMWUzLCA0MCwgMWU0LCA1MF0sXG4gICAgICAgICAgICAgICAgJ2NpcmNsZS10cmFuc2xhdGUnOiBbMCwgMjBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGJlZm9yZUlkOiAnd2F0ZXJ3YXktbGFiZWwnLFxuICAgICAgICAgICAgZmlsdGVyICA6IFsnPicsIFsnZ2V0JywgJ2Nhc2VzJ10sIDBdLFxuICAgICAgICAgICAgaWQgICAgICA6ICdjb3ZpZDE5LWNpcmNsZS10ZXh0JyxcbiAgICAgICAgICAgIHNvdXJjZSAgOiAnY292aWQxOScsXG4gICAgICAgICAgICB0eXBlICAgIDogJ3N5bWJvbCcsXG4gICAgICAgICAgICBtaW56b29tIDogNSxcblxuICAgICAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICAgICAgICAgJ3RleHQtYWxsb3ctb3ZlcmxhcCcgICA6IHRydWUsXG4gICAgICAgICAgICAgICAgJ3RleHQtZmllbGQnICAgICAgICAgICA6IFsndG8tc3RyaW5nJywgWydnZXQnLCAnY2FzZXMnXV0sXG4gICAgICAgICAgICAgICAgJ3RleHQtZm9udCcgICAgICAgICAgICA6IFsnRElOIE9mZmMgUHJvIE1lZGl1bScsICdBcmlhbCBVbmljb2RlIE1TIEJvbGQnXSxcbiAgICAgICAgICAgICAgICAndGV4dC1pZ25vcmUtcGxhY2VtZW50JzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAndGV4dC1zaXplJyAgICAgICAgICAgIDogMTJcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHBhaW50OiB7XG4gICAgICAgICAgICAgICAgJ3RleHQtb3BhY2l0eScgIDogWydpbnRlcnBvbGF0ZScsIFsnbGluZWFyJ10sIFsnem9vbSddLCA1LCAwLCA3LCAxXSxcbiAgICAgICAgICAgICAgICAndGV4dC10cmFuc2xhdGUnOiBbMCwgMjBdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGh0dHBzOi8vZG9jcy5tYXBib3guY29tL21hcGJveC1nbC1qcy9zdHlsZS1zcGVjL1xuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8U3RyaW5nfSBtYXBib3hTdHlsZT0nbWFwYm94Oi8vc3R5bGVzL3RvYml1L2NrOTQ0eWVycTNocmoxaXA5MW8zNGZhN2QnXG4gICAgICAgICAqL1xuICAgICAgICBtYXBib3hTdHlsZTogJ21hcGJveDovL3N0eWxlcy90b2JpdS9jazk0NHllcnEzaHJqMWlwOTFvMzRmYTdkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZlcnNpb24gZm9yIHRoZSBuZW8tZGFyayB0aGVtZVxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8U3RyaW5nfSBtYXBib3hTdHlsZT0nbWFwYm94Oi8vc3R5bGVzL3RvYml1L2NrOTQ0eWVycTNocmoxaXA5MW8zNGZhN2QnXG4gICAgICAgICAqL1xuICAgICAgICBtYXBib3hTdHlsZURhcms6ICdtYXBib3g6Ly9zdHlsZXMvdG9iaXUvY2s4eWF4YWt4MTF6eDFpbGdzaHE0NTFjdicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWZXJzaW9uIGZvciB0aGUgbmVvLWxpZ2h0IHRoZW1lXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxTdHJpbmd9IG1hcGJveFN0eWxlPSdtYXBib3g6Ly9zdHlsZXMvdG9iaXUvY2s5NDU5cGxlMHFjNzFpbnZ1Z2R6NmJiZidcbiAgICAgICAgICovXG4gICAgICAgIG1hcGJveFN0eWxlTGlnaHQ6ICdtYXBib3g6Ly9zdHlsZXMvdG9iaXUvY2s5NDU5cGxlMHFjNzFpbnZ1Z2R6NmJiZicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX1cbiAgICAgICAgICovXG4gICAgICAgIHNvdXJjZXM6IFt7XG4gICAgICAgICAgICBpZCAgOiAnY292aWQxOScsXG4gICAgICAgICAgICB0eXBlOiAnZ2VvanNvbicsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgdHlwZSAgICA6ICdGZWF0dXJlQ29sbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgZmVhdHVyZXM6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGlkICA6ICdkZW0nLFxuICAgICAgICAgICAgdHlwZTogJ3Jhc3Rlci1kZW0nLFxuICAgICAgICAgICAgdXJsIDogJ21hcGJveDovL21hcGJveC50ZXJyYWluLXJnYidcbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb21wb25lbnQpO1xuXG5leHBvcnQge0NvbXBvbmVudCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZUNvbnRhaW5lciAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBDaGVja0JveCAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL0NoZWNrQm94Lm1qcyc7XG5pbXBvcnQgQ29tcG9uZW50ICAgICAgICAgICBmcm9tICcuL0NvbXBvbmVudC5tanMnO1xuaW1wb3J0IENvbnRhaW5lckNvbnRyb2xsZXIgZnJvbSAnLi9Db250YWluZXJDb250cm9sbGVyLm1qcyc7XG5pbXBvcnQgUGFuZWwgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL1BhbmVsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLnZpZXcubWFwYm94R2wuQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgQmFzZUNvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0NvdmlkLnZpZXcubWFwYm94R2wuQ29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdDb3ZpZC52aWV3Lm1hcGJveEdsLkNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjb3ZpZC1tYXBib3hnbC1jb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY292aWQtbWFwYm94Z2wtY29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb250cm9sbGVyLkNvbXBvbmVudH0gY29udHJvbGxlcj1Db250YWluZXJDb250cm9sbGVyXG4gICAgICAgICAqL1xuICAgICAgICBjb250cm9sbGVyOiBDb250YWluZXJDb250cm9sbGVyLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W119IGl0ZW1zXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgIG1vZHVsZSAgIDogQ29tcG9uZW50LFxuICAgICAgICAgICAgcmVmZXJlbmNlOiAnbWFwYm94Z2xtYXAnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgIDogUGFuZWwsXG4gICAgICAgICAgICBoZWlnaHQgICAgICA6IDE1MCxcbiAgICAgICAgICAgIGlnbm9yZUxheW91dDogdHJ1ZSxcblxuICAgICAgICAgICAgY29udGFpbmVyQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC42LFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTBweCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBoZWFkZXJzOiBbe1xuICAgICAgICAgICAgICAgIGRvY2s6ICd0b3AnLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uSGlkZU1hcENvbnRyb2xzQnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnWCdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ01hcCBDb250cm9scydcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0sXG5cbiAgICAgICAgICAgIGl0ZW1EZWZhdWx0czoge1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgICA6IENoZWNrQm94LFxuICAgICAgICAgICAgICAgIGZsZXggICAgICA6ICcwIDEgYXV0bycsXG4gICAgICAgICAgICAgICAgbGFiZWxXaWR0aDogMTAwXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICBjaGVja2VkICA6IHRydWUsXG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnRGV0YWlsIENpcmNsZXMnLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogJ29uRGV0YWlsQ2lyY2xlc0NoYW5nZSd9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZCAgOiB0cnVlLFxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ0hlYXRNYXAnLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogJ29uSGVhdE1hcENoYW5nZSd9LFxuICAgICAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpblRvcDogJzVweCd9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZCAgOiB0cnVlLFxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1RlcnJhaW4nLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogJ29uVGVycmFpbkNoYW5nZSd9LFxuICAgICAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpblRvcDogJzVweCd9XG4gICAgICAgICAgICB9XSxcblxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gICAgICAgOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIHJpZ2h0ICAgICAgICAgIDogJzEwcHgnLFxuICAgICAgICAgICAgICAgIHRvcCAgICAgICAgICAgIDogJzEwcHgnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsYXlvdXQ9e250eXBlOiAnZml0J31cbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDoge250eXBlOiAnZml0J30sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICBzdHlsZToge3Bvc2l0aW9uOiAncmVsYXRpdmUnLCBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJ30sXG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICBzdHlsZToge3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJ30sXG4gICAgICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7aGVpZ2h0OiAnMTAwJSd9LFxuICAgICAgICAgICAgICAgICAgICBjbjogW11cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGdldFZkb21Sb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52ZG9tLmNuWzBdLmNuWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZ2V0Vm5vZGVSb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52bm9kZS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF07XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb250YWluZXIpO1xuXG5leHBvcnQge0NvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29tcG9uZW50Q29udHJvbGxlciBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udHJvbGxlci9Db21wb25lbnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgQ292aWQudmlldy5tYXBib3hHbC5Db250YWluZXJDb250cm9sbGVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udHJvbGxlci5Db21wb25lbnRcbiAqL1xuY2xhc3MgQ29udGFpbmVyQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdDb3ZpZC52aWV3Lm1hcGJveEdsLkNvbnRhaW5lckNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkLnZpZXcubWFwYm94R2wuQ29udGFpbmVyQ29udHJvbGxlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdtYXBib3hnbC1jb250YWluZXItY29udHJvbGxlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdtYXBib3hnbC1jb250YWluZXItY29udHJvbGxlcidcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbGF5ZXJJZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2aXNpYmlsaXR5XG4gICAgICovXG4gICAgY2hhbmdlTGF5ZXJWaXNpYmlsaXR5KGxheWVySWQsIHZpc2liaWxpdHkpIHtcbiAgICAgICAgdGhpcy5nZXRSZWZlcmVuY2UoJ21hcGJveGdsbWFwJykuc2V0TGF5b3V0UHJvcGVydHkoe1xuICAgICAgICAgICAgbGF5ZXJJZDogbGF5ZXJJZCxcbiAgICAgICAgICAgIGtleSAgICA6ICd2aXNpYmlsaXR5JyxcbiAgICAgICAgICAgIHZhbHVlICA6IHZpc2liaWxpdHlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRGV0YWlsQ2lyY2xlc0NoYW5nZShkYXRhKSB7XG4gICAgICAgIGNvbnN0IHZpc2liaWxpdHkgPSBkYXRhLnZhbHVlID8gJ3Zpc2libGUnIDogJ25vbmUnO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlTGF5ZXJWaXNpYmlsaXR5KCdjb3ZpZDE5LWNpcmNsZScsICAgICAgdmlzaWJpbGl0eSk7XG4gICAgICAgIHRoaXMuY2hhbmdlTGF5ZXJWaXNpYmlsaXR5KCdjb3ZpZDE5LWNpcmNsZS10ZXh0JywgdmlzaWJpbGl0eSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uSGVhdE1hcENoYW5nZShkYXRhKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlTGF5ZXJWaXNpYmlsaXR5KCdjb3ZpZDE5LWhlYXQnLCBkYXRhLnZhbHVlID8gJ3Zpc2libGUnIDogJ25vbmUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25IaWRlTWFwQ29udHJvbHNCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbkhpZGVNYXBDb250cm9sc0J1dHRvbkNsaWNrJywgZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uVGVycmFpbkNoYW5nZShkYXRhKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlTGF5ZXJWaXNpYmlsaXR5KCdoaWxsc2hhZGluZycsIGRhdGEudmFsdWUgPyAndmlzaWJsZScgOiAnbm9uZScpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ29udGFpbmVyQ29udHJvbGxlcik7XG5cbmV4cG9ydCB7Q29udGFpbmVyQ29udHJvbGxlciBhcyBkZWZhdWx0fTsiXSwic291cmNlUm9vdCI6IiJ9