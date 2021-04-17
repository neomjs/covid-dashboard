(self["webpackChunkcovid19_dashboard"] = self["webpackChunkcovid19_dashboard"] || []).push([["apps_covid_app_mjs"],{

/***/ "./apps/covid/Util.mjs":
/*!*****************************!*\
  !*** ./apps/covid/Util.mjs ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/neo.mjs/src/core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * Static utility class
 * @class Covid.Util
 * @extends Neo.core.Base
 */
class Util extends _node_modules_neo_mjs_src_core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
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
            'marshall-islands'                     : 'marshall-island',
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
            'viet-nam'                             : 'vietnam',
            'wallis-and-futuna'                    : 'france'
        };

        let imageName = name.toLowerCase().replace(Util.flagRegEx, '-');

        imageName = map[imageName] || imageName;

        if (Neo.config.isGitHubPages) {
            let path = '../../../../resources/images/flaticon/country_flags/png/' + imageName + '.png';

            if (Neo.config.environment !== 'development') {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Util);

/***/ }),

/***/ "./apps/covid/app.mjs":
/*!****************************!*\
  !*** ./apps/covid/app.mjs ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onStart": () => (/* binding */ onStart)
/* harmony export */ });
/* harmony import */ var _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/MainContainer.mjs */ "./apps/covid/view/MainContainer.mjs");


const onStart = () => Neo.app({
    mainView: _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__.default,
    name    : 'Covid'
});



/***/ }),

/***/ "./apps/covid/model/Country.mjs":
/*!**************************************!*\
  !*** ./apps/covid/model/Country.mjs ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Country)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class Covid.model.Country
 * @extends Neo.data.Model
 */
class Country extends _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HistoricalData)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class Covid.model.HistoricalData
 * @extends Neo.data.Model
 */
class HistoricalData extends _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Countries)
/* harmony export */ });
/* harmony import */ var _model_Country_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Country.mjs */ "./apps/covid/model/Country.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");



/**
 * @class Covid.store.Countries
 * @extends Neo.data.Store
 */
class Countries extends _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__.default {
    static getConfig() {return {
        className: 'Covid.store.Countries',

        keyProperty: 'country',
        model      : _model_Country_mjs__WEBPACK_IMPORTED_MODULE_0__.default,

        sorters: [{
            property : 'active',
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HistoricalData)
/* harmony export */ });
/* harmony import */ var _model_HistoricalData_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/HistoricalData.mjs */ "./apps/covid/model/HistoricalData.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");



/**
 * @class Covid.store.HistoricalData
 * @extends Neo.data.Store
 */
class HistoricalData extends _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__.default {
    static getConfig() {return {
        className: 'Covid.store.HistoricalData',

        keyProperty: 'date',
        model      : _model_HistoricalData_mjs__WEBPACK_IMPORTED_MODULE_0__.default,

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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AttributionComponent)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class Covid.view.AttributionComponent
 * @extends Neo.component.Base
 */
class AttributionComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FooterContainer)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");


/**
 * @class Covid.view.FooterContainer
 * @extends Neo.container.Base
 */
class FooterContainer extends _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GalleryContainer)
/* harmony export */ });
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
class GalleryContainer extends _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__.default {
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
        controller: _GalleryContainerController_mjs__WEBPACK_IMPORTED_MODULE_3__.default,
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
            module   : _node_modules_neo_mjs_src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_4__.default,
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
                module   : _node_modules_neo_mjs_src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_5__.default,
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
                module   : _node_modules_neo_mjs_src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_5__.default,
                labelText: 'Translate Y',
                maxValue : 1500,
                minValue : -1500,
                name     : 'translateY',
                value    : 0,
                listeners: {
                    change: 'onRangefieldChange'
                }
            }, {
                module   : _node_modules_neo_mjs_src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_5__.default,
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
                module   : _node_modules_neo_mjs_src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_5__.default,
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
                module: _node_modules_neo_mjs_src_component_BoxLabel_mjs__WEBPACK_IMPORTED_MODULE_0__.default,
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
            module   : _country_Gallery_mjs__WEBPACK_IMPORTED_MODULE_2__.default,
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GalleryContainerController)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");


/**
 * @class Covid.view.GalleryContainerController
 * @extends Neo.controller.Component
 */
class GalleryContainerController extends _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderContainer)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _store_Countries_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/Countries.mjs */ "./apps/covid/store/Countries.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_form_field_Select_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/form/field/Select.mjs */ "./node_modules/neo.mjs/src/form/field/Select.mjs");




/**
 * @class Covid.view.HeaderContainer
 * @extends Neo.container.Base
 */
class HeaderContainer extends _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
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
                    module       : _node_modules_neo_mjs_src_form_field_Select_mjs__WEBPACK_IMPORTED_MODULE_2__.default,
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
                        module : _store_Countries_mjs__WEBPACK_IMPORTED_MODULE_1__.default,
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HelixContainer)
/* harmony export */ });
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
class HelixContainer extends _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__.default {
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
        controller: _HelixContainerController_mjs__WEBPACK_IMPORTED_MODULE_3__.default,
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
            module   : _node_modules_neo_mjs_src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_4__.default,
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
                module: _node_modules_neo_mjs_src_component_BoxLabel_mjs__WEBPACK_IMPORTED_MODULE_0__.default,
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
            module   : _country_Helix_mjs__WEBPACK_IMPORTED_MODULE_2__.default,
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HelixContainerController)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");


/**
 * @class Covid.view.HelixContainerController
 * @extends Neo.controller.Component
 */
class HelixContainerController extends _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainContainer)
/* harmony export */ });
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
class MainContainer extends _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_9__.default {
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
        controller: _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_5__.default,
        /**
         * @member {Array} items
         */
        items: [_HeaderContainer_mjs__WEBPACK_IMPORTED_MODULE_3__.default, {
            module   : _node_modules_neo_mjs_src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_7__.default,
            flex     : 1,
            reference: 'tab-container',
            sortable : true,
            style    : {margin: '10px', marginTop: 0},

            items: [{
                module         : _TableContainer_mjs__WEBPACK_IMPORTED_MODULE_8__.default,
                reference      : 'table-container',
                tabButtonConfig: {
                    iconCls: 'fa fa-table',
                    route  : 'mainview=table',
                    text   : 'Table'
                }
            }, {
                module         : _mapboxGl_Container_mjs__WEBPACK_IMPORTED_MODULE_6__.default,
                tabButtonConfig: {
                    iconCls: 'fa fa-globe-americas',
                    route  : 'mainview=mapboxglmap',
                    text   : 'Mapbox GL Map'
                }
            }, {
                module         : _WorldMapContainer_mjs__WEBPACK_IMPORTED_MODULE_10__.default,
                tabButtonConfig: {
                    iconCls: 'fa fa-globe-americas',
                    route  : 'mainview=worldmap',
                    text   : 'World Map'
                }
            }, {
                module         : _GalleryContainer_mjs__WEBPACK_IMPORTED_MODULE_2__.default,
                tabButtonConfig: {
                    iconCls: 'fa fa-images',
                    route  : 'mainview=gallery',
                    text   : 'Gallery'
                }
            }, {
                module         : _HelixContainer_mjs__WEBPACK_IMPORTED_MODULE_4__.default,
                tabButtonConfig: {
                    iconCls: 'fa fa-dna',
                    route  : 'mainview=helix',
                    text   : 'Helix'
                }
            }, {
                module         : _AttributionComponent_mjs__WEBPACK_IMPORTED_MODULE_0__.default,
                reference      : 'attribution',
                tabButtonConfig: {
                    iconCls: 'fa fa-copyright',
                    route  : 'mainview=attribution',
                    text   : 'Attribution'
                }
            }]
        }, _FooterContainer_mjs__WEBPACK_IMPORTED_MODULE_1__.default],
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainContainerController)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _Util_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util.mjs */ "./apps/covid/Util.mjs");




/**
 * @class Covid.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
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

        me.component.on('mounted', me.onMainViewMounted, me);
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

        vdom.cn[0].cn[1].html = _Util_mjs__WEBPACK_IMPORTED_MODULE_2__.default.formatNumber({value: data.cases});
        vdom.cn[1].cn[1].html = _Util_mjs__WEBPACK_IMPORTED_MODULE_2__.default.formatNumber({value: data.active});
        vdom.cn[2].cn[1].html = _Util_mjs__WEBPACK_IMPORTED_MODULE_2__.default.formatNumber({value: data.recovered});
        vdom.cn[3].cn[1].html = _Util_mjs__WEBPACK_IMPORTED_MODULE_2__.default.formatNumber({value: data.deaths});

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

        me.getReference('gallery')      .on('select', me.updateCountryField, me);
        me.getReference('helix')        .on('select', me.updateCountryField, me);
        me.getReference('tab-container').on('moveTo', me.onTabMove,          me);

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

        me.component.remove(me.getReference('footer'), true);

        if (activeTab.ntype === 'covid-mapboxgl-container') {
            me.getReference('mapboxglmap').autoResize();
        }
    }

    /**
     * @param {Object} data
     */
    onSwitchThemeButtonClick(data) {
        let me        = this,
            button    = data.component,
            component = me.component,
            logo      = me.getReference('logo'),
            logoPath  = 'https://raw.githubusercontent.com/neomjs/pages/master/resources/images/apps/covid/',
            mapView   = me.getReference('mapboxglmap'),
            vdom      = logo.vdom,
            buttonText, cls, href, iconCls, mapViewStyle, theme;

        if (button.text === 'Theme Light') {
            buttonText   = 'Theme Dark';
            href         = '../dist/development/neo-theme-light-no-css-vars.css';
            iconCls      = 'fa fa-moon';
            mapViewStyle = mapView.mapboxStyleLight;
            theme        = 'neo-theme-light';
        } else {
            buttonText   = 'Theme Light';
            href         = '../dist/development/neo-theme-dark-no-css-vars.css';
            iconCls      = 'fa fa-sun';
            mapViewStyle = mapView.mapboxStyleDark;
            theme        = 'neo-theme-dark';
        }

        vdom.src = logoPath + (theme === 'neo-theme-dark' ? 'covid_logo_dark.jpg' : 'covid_logo_light.jpg');
        logo.vdom = vdom;


        if (Neo.config.useCssVars) {
            cls = [...component.cls];

            component.cls.forEach(item => {
                if (item.includes('neo-theme')) {
                    _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__.default.remove(cls, item);
                }
            });

            _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__.default.add(cls, theme);
            component.cls = cls;

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
     * @param {Object} data
     */
    onTabMove(data) {
        _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__.default.move(this.mainTabs, data.fromIndex, data.toIndex);
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TableContainer)
/* harmony export */ });
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
class TableContainer extends _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__.default {
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
        controller: _TableContainerController_mjs__WEBPACK_IMPORTED_MODULE_7__.default,
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
            module   : _node_modules_neo_mjs_src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_4__.default,
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
                module: _node_modules_neo_mjs_src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_5__.default,
                style : {marginTop: '10px'},
                items : [{
                    ntype : 'container',
                    layout: {ntype: 'vbox', align: 'stretch'},
                    items : [{
                        ntype: 'toolbar',
                        flex : '0 1 auto',
                        items: [{
                            module    : _node_modules_neo_mjs_src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__.default,
                            checked   : true,
                            labelText : 'Logarithmic Scale',
                            labelWidth: 135,
                            reference : 'logarithmic-scale-checkbox',
                            listeners : {
                                change: 'onLogarithmicScaleChange'
                            }
                        }, {
                            module    : _node_modules_neo_mjs_src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__.default,
                            labelText : 'Daily Values',
                            style     : {marginLeft: '30px'},
                            labelWidth: 95,
                            listeners : {
                                change: 'onDailyValuesChange'
                            }
                        }]
                    }, {
                        module   : _country_LineChartComponent_mjs__WEBPACK_IMPORTED_MODULE_3__.default,
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
            module   : _country_HistoricalDataTable_mjs__WEBPACK_IMPORTED_MODULE_2__.default,
            reference: 'historical-data-table',

            tabButtonConfig: {
                iconCls: 'fa fa-table',
                text   : 'Table'
            },

            ...me.historicalDataTableConfig || {}
        });

        me.items[1].items[0].items.push(me.historicalDataTable);

        me.table = Neo.create({
            module   : _country_Table_mjs__WEBPACK_IMPORTED_MODULE_6__.default,
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TableContainerController)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Covid.view.TableContainerController
 * @extends Neo.controller.Component
 */
class TableContainerController extends _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
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

        me.component.on('countrySelect', me.onTableSelect, me);
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
                        _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__.default.remove(dataArray, item);
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

        panel.width = expand ? this.component.historyPanelWidth : 40;

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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WorldMapComponent)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_wrapper_AmChart_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/component/wrapper/AmChart.mjs */ "./node_modules/neo.mjs/src/component/wrapper/AmChart.mjs");


/**
 * @class Covid.view.WorldMapComponent
 * @extends Neo.component.wrapper.AmChart
 */
class WorldMapComponent extends _node_modules_neo_mjs_src_component_wrapper_AmChart_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WorldMapContainer)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/form/field/Number.mjs */ "./node_modules/neo.mjs/src/form/field/Number.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Toolbar.mjs */ "./node_modules/neo.mjs/src/container/Toolbar.mjs");
/* harmony import */ var _WorldMapComponent_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WorldMapComponent.mjs */ "./apps/covid/view/WorldMapComponent.mjs");
/* harmony import */ var _WorldMapContainerController_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WorldMapContainerController.mjs */ "./apps/covid/view/WorldMapContainerController.mjs");






/**
 * @class Covid.view.WorldMapContainer
 * @extends Neo.container.Base
 */
class WorldMapContainer extends _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Covid.view.WorldMapContainer'
         * @protected
         */
        className: 'Covid.view.WorldMapContainer',
        /**
         * @member {Neo.controller.Component} controller=WorldMapContainerController
         */
        controller: _WorldMapContainerController_mjs__WEBPACK_IMPORTED_MODULE_4__.default,
        /**
         * @member {Object} layout={ntype: 'vbox', align: 'stretch'}
         */
        layout: {ntype: 'vbox', align: 'stretch'},
        /**
         * @member {Array} items
         */
        items: [{
            module: _node_modules_neo_mjs_src_container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_2__.default,
            flex  : 'none',
            items : [{
                ntype    : 'label',
                reference: 'currentMapViewLabel',
                style    : {marginRight: '20px'},
                text     : 'Current view: Active'
            }, {
                module       : _node_modules_neo_mjs_src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_1__.default,
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
            module   : _WorldMapComponent_mjs__WEBPACK_IMPORTED_MODULE_3__.default,
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WorldMapContainerController)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");


/**
 * @class Covid.view.WorldMapContainerController
 * @extends Neo.controller.Component
 */
class WorldMapContainerController extends _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CountryGallery)
/* harmony export */ });
/* harmony import */ var _store_Countries_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/Countries.mjs */ "./apps/covid/store/Countries.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_component_Gallery_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Gallery.mjs */ "./node_modules/neo.mjs/src/component/Gallery.mjs");
/* harmony import */ var _Util_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util.mjs */ "./apps/covid/Util.mjs");




/**
 * @class Covid.view.country.Gallery
 * @extends Neo.component.Gallery
 */
class CountryGallery extends _node_modules_neo_mjs_src_component_Gallery_mjs__WEBPACK_IMPORTED_MODULE_1__.default {
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
        store: _store_Countries_mjs__WEBPACK_IMPORTED_MODULE_0__.default
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
            fN         = _Util_mjs__WEBPACK_IMPORTED_MODULE_2__.default.formatNumber,
            table      = firstChild.cn[1];

        vdomItem.id = me.getItemVnodeId(record[me.keyProperty]);

        vdomItem.cn[0].style.height = me.imageHeight + 'px';

        firstChild.style.height = (me.imageHeight - 70) + 'px';
        firstChild.style.width  = me.imageWidth  + 'px';

        firstChild.cn[0].cn[0].src  = _Util_mjs__WEBPACK_IMPORTED_MODULE_2__.default.getCountryFlagUrl(record.country);
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CountryHelix)
/* harmony export */ });
/* harmony import */ var _store_Countries_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/Countries.mjs */ "./apps/covid/store/Countries.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_component_Helix_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Helix.mjs */ "./node_modules/neo.mjs/src/component/Helix.mjs");
/* harmony import */ var _Util_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util.mjs */ "./apps/covid/Util.mjs");




/**
 * @class Covid.view.country.Helix
 * @extends Neo.component.Helix
 */
class CountryHelix extends _node_modules_neo_mjs_src_component_Helix_mjs__WEBPACK_IMPORTED_MODULE_1__.default {
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
        store: _store_Countries_mjs__WEBPACK_IMPORTED_MODULE_0__.default,
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
            fN         = _Util_mjs__WEBPACK_IMPORTED_MODULE_2__.default.formatNumber,
            table      = firstChild.cn[1];

        vdomItem.id = me.getItemVnodeId(record[me.keyProperty]);

        firstChild.cn[0].cn[0].src  = _Util_mjs__WEBPACK_IMPORTED_MODULE_2__.default.getCountryFlagUrl(record.country);
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HistoricalDataTable)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_table_Container_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/table/Container.mjs */ "./node_modules/neo.mjs/src/table/Container.mjs");
/* harmony import */ var _store_HistoricalData_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/HistoricalData.mjs */ "./apps/covid/store/HistoricalData.mjs");
/* harmony import */ var _Util_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util.mjs */ "./apps/covid/Util.mjs");




/**
 * @class Covid.view.country.HistoricalDataTable
 * @extends Neo.table.Container
 */
class HistoricalDataTable extends _node_modules_neo_mjs_src_table_Container_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
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
            renderer            : _Util_mjs__WEBPACK_IMPORTED_MODULE_2__.default.formatNumber
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
            renderer : data => _Util_mjs__WEBPACK_IMPORTED_MODULE_2__.default.formatNumber(data)
        }, {
            dataField: 'active',
            text     : 'Active',
            renderer : data => _Util_mjs__WEBPACK_IMPORTED_MODULE_2__.default.formatNumber(data, '#64B5F6')
        }, {
            dataField: 'recovered',
            text     : 'Recovered',
            renderer : data => _Util_mjs__WEBPACK_IMPORTED_MODULE_2__.default.formatNumber(data, '#28ca68')
        }, {
            dataField: 'deaths',
            text     : 'Deaths',
            renderer : data => _Util_mjs__WEBPACK_IMPORTED_MODULE_2__.default.formatNumber(data, '#fb6767')
        }, {
            dataField: 'dailyCases',
            text     : 'Daily C',
            renderer : data => _Util_mjs__WEBPACK_IMPORTED_MODULE_2__.default.formatNumber(data)
        }, {
            dataField: 'dailyActive',
            text     : 'Daily A',
            renderer : data => _Util_mjs__WEBPACK_IMPORTED_MODULE_2__.default.formatNumber(data, '#64B5F6')
        }, {
            dataField: 'dailyRecovered',
            text     : 'Daily R',
            renderer : data => _Util_mjs__WEBPACK_IMPORTED_MODULE_2__.default.formatNumber(data, '#28ca68')
        }, {
            dataField: 'dailyDeaths',
            text     : 'Daily D',
            renderer : data => _Util_mjs__WEBPACK_IMPORTED_MODULE_2__.default.formatNumber(data, '#fb6767')
        }],
        /**
         * @member {Neo.data.Store} store=HistoricalData
         */
        store: _store_HistoricalData_mjs__WEBPACK_IMPORTED_MODULE_1__.default
    }}
}

Neo.applyClassConfig(HistoricalDataTable);



/***/ }),

/***/ "./apps/covid/view/country/LineChartComponent.mjs":
/*!********************************************************!*\
  !*** ./apps/covid/view/country/LineChartComponent.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LineChartComponent)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_wrapper_AmChart_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/wrapper/AmChart.mjs */ "./node_modules/neo.mjs/src/component/wrapper/AmChart.mjs");


/**
 * @class Covid.view.country.LineChartComponent
 * @extends Neo.component.wrapper.AmChart
 */
class LineChartComponent extends _node_modules_neo_mjs_src_component_wrapper_AmChart_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Table)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_table_Container_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/table/Container.mjs */ "./node_modules/neo.mjs/src/table/Container.mjs");
/* harmony import */ var _store_Countries_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/Countries.mjs */ "./apps/covid/store/Countries.mjs");
/* harmony import */ var _Util_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util.mjs */ "./apps/covid/Util.mjs");




/**
 * @class Covid.view.country.Table
 * @extends Neo.table.Container
 */
class Table extends _node_modules_neo_mjs_src_table_Container_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
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
            renderer            : _Util_mjs__WEBPACK_IMPORTED_MODULE_2__.default.formatNumber
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
            renderer : _Util_mjs__WEBPACK_IMPORTED_MODULE_2__.default.indexRenderer,
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
                            '<img style="height:20px; margin-right:10px; width:20px;" src="' + _Util_mjs__WEBPACK_IMPORTED_MODULE_2__.default.getCountryFlagUrl(data.value) + '">' + data.value,
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
            renderer : data => _Util_mjs__WEBPACK_IMPORTED_MODULE_2__.default.formatInfected(data)
        }, {
            dataField: 'active',
            text     : 'Active',
            renderer : data => _Util_mjs__WEBPACK_IMPORTED_MODULE_2__.default.formatNumber(data, '#64B5F6')
        },  {
            dataField: 'recovered',
            text     : 'Recovered',
            renderer : data => _Util_mjs__WEBPACK_IMPORTED_MODULE_2__.default.formatNumber(data, '#28ca68')
        }, {
            dataField: 'critical',
            text     : 'Critical',
            renderer : data => _Util_mjs__WEBPACK_IMPORTED_MODULE_2__.default.formatNumber(data, 'orange')
        }, {
            dataField: 'deaths',
            text     : 'Deaths',
            renderer : data => _Util_mjs__WEBPACK_IMPORTED_MODULE_2__.default.formatNumber(data, '#fb6767')
        }, {
            dataField: 'todayCases',
            text     : 'Cases today'
        }, {
            dataField: 'todayDeaths',
            text     : 'Deaths today',
            renderer : data => _Util_mjs__WEBPACK_IMPORTED_MODULE_2__.default.formatNumber(data, '#fb6767')
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
        store: _store_Countries_mjs__WEBPACK_IMPORTED_MODULE_1__.default
    }}
}

Neo.applyClassConfig(Table);



/***/ }),

/***/ "./apps/covid/view/mapboxGl/Component.mjs":
/*!************************************************!*\
  !*** ./apps/covid/view/mapboxGl/Component.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_wrapper_MapboxGL_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/wrapper/MapboxGL.mjs */ "./node_modules/neo.mjs/src/component/wrapper/MapboxGL.mjs");


/**
 * @class Covid.view.mapboxGl.Component
 * @extends Neo.component.wrapper.MapboxGL
 */
class Component extends _node_modules_neo_mjs_src_component_wrapper_MapboxGL_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/form/field/CheckBox.mjs */ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs");
/* harmony import */ var _Component_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component.mjs */ "./apps/covid/view/mapboxGl/Component.mjs");
/* harmony import */ var _ContainerController_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContainerController.mjs */ "./apps/covid/view/mapboxGl/ContainerController.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/container/Panel.mjs */ "./node_modules/neo.mjs/src/container/Panel.mjs");






/**
 * @class Covid.view.mapboxGl.Container
 * @extends Neo.container.Base
 */
class Container extends _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
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
        controller: _ContainerController_mjs__WEBPACK_IMPORTED_MODULE_3__.default,
        /**
         * @member {Object[]} items
         */
        items: [{
            module   : _Component_mjs__WEBPACK_IMPORTED_MODULE_2__.default,
            reference: 'mapboxglmap'
        }, {
            module      : _node_modules_neo_mjs_src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_4__.default,
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
                module    : _node_modules_neo_mjs_src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_1__.default,
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContainerController)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");


/**
 * @class Covid.view.mapboxGl.ContainerController
 * @extends Neo.controller.Component
 */
class ContainerController extends _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3ZpZDE5LWRhc2hib2FyZC8uL2FwcHMvY292aWQvVXRpbC5tanMiLCJ3ZWJwYWNrOi8vY292aWQxOS1kYXNoYm9hcmQvLi9hcHBzL2NvdmlkL2FwcC5tanMiLCJ3ZWJwYWNrOi8vY292aWQxOS1kYXNoYm9hcmQvLi9hcHBzL2NvdmlkL21vZGVsL0NvdW50cnkubWpzIiwid2VicGFjazovL2NvdmlkMTktZGFzaGJvYXJkLy4vYXBwcy9jb3ZpZC9tb2RlbC9IaXN0b3JpY2FsRGF0YS5tanMiLCJ3ZWJwYWNrOi8vY292aWQxOS1kYXNoYm9hcmQvLi9hcHBzL2NvdmlkL3N0b3JlL0NvdW50cmllcy5tanMiLCJ3ZWJwYWNrOi8vY292aWQxOS1kYXNoYm9hcmQvLi9hcHBzL2NvdmlkL3N0b3JlL0hpc3RvcmljYWxEYXRhLm1qcyIsIndlYnBhY2s6Ly9jb3ZpZDE5LWRhc2hib2FyZC8uL2FwcHMvY292aWQvdmlldy9BdHRyaWJ1dGlvbkNvbXBvbmVudC5tanMiLCJ3ZWJwYWNrOi8vY292aWQxOS1kYXNoYm9hcmQvLi9hcHBzL2NvdmlkL3ZpZXcvRm9vdGVyQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly9jb3ZpZDE5LWRhc2hib2FyZC8uL2FwcHMvY292aWQvdmlldy9HYWxsZXJ5Q29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly9jb3ZpZDE5LWRhc2hib2FyZC8uL2FwcHMvY292aWQvdmlldy9HYWxsZXJ5Q29udGFpbmVyQ29udHJvbGxlci5tanMiLCJ3ZWJwYWNrOi8vY292aWQxOS1kYXNoYm9hcmQvLi9hcHBzL2NvdmlkL3ZpZXcvSGVhZGVyQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly9jb3ZpZDE5LWRhc2hib2FyZC8uL2FwcHMvY292aWQvdmlldy9IZWxpeENvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vY292aWQxOS1kYXNoYm9hcmQvLi9hcHBzL2NvdmlkL3ZpZXcvSGVsaXhDb250YWluZXJDb250cm9sbGVyLm1qcyIsIndlYnBhY2s6Ly9jb3ZpZDE5LWRhc2hib2FyZC8uL2FwcHMvY292aWQvdmlldy9NYWluQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly9jb3ZpZDE5LWRhc2hib2FyZC8uL2FwcHMvY292aWQvdmlldy9NYWluQ29udGFpbmVyQ29udHJvbGxlci5tanMiLCJ3ZWJwYWNrOi8vY292aWQxOS1kYXNoYm9hcmQvLi9hcHBzL2NvdmlkL3ZpZXcvVGFibGVDb250YWluZXIubWpzIiwid2VicGFjazovL2NvdmlkMTktZGFzaGJvYXJkLy4vYXBwcy9jb3ZpZC92aWV3L1RhYmxlQ29udGFpbmVyQ29udHJvbGxlci5tanMiLCJ3ZWJwYWNrOi8vY292aWQxOS1kYXNoYm9hcmQvLi9hcHBzL2NvdmlkL3ZpZXcvV29ybGRNYXBDb21wb25lbnQubWpzIiwid2VicGFjazovL2NvdmlkMTktZGFzaGJvYXJkLy4vYXBwcy9jb3ZpZC92aWV3L1dvcmxkTWFwQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly9jb3ZpZDE5LWRhc2hib2FyZC8uL2FwcHMvY292aWQvdmlldy9Xb3JsZE1hcENvbnRhaW5lckNvbnRyb2xsZXIubWpzIiwid2VicGFjazovL2NvdmlkMTktZGFzaGJvYXJkLy4vYXBwcy9jb3ZpZC92aWV3L2NvdW50cnkvR2FsbGVyeS5tanMiLCJ3ZWJwYWNrOi8vY292aWQxOS1kYXNoYm9hcmQvLi9hcHBzL2NvdmlkL3ZpZXcvY291bnRyeS9IZWxpeC5tanMiLCJ3ZWJwYWNrOi8vY292aWQxOS1kYXNoYm9hcmQvLi9hcHBzL2NvdmlkL3ZpZXcvY291bnRyeS9IaXN0b3JpY2FsRGF0YVRhYmxlLm1qcyIsIndlYnBhY2s6Ly9jb3ZpZDE5LWRhc2hib2FyZC8uL2FwcHMvY292aWQvdmlldy9jb3VudHJ5L0xpbmVDaGFydENvbXBvbmVudC5tanMiLCJ3ZWJwYWNrOi8vY292aWQxOS1kYXNoYm9hcmQvLi9hcHBzL2NvdmlkL3ZpZXcvY291bnRyeS9UYWJsZS5tanMiLCJ3ZWJwYWNrOi8vY292aWQxOS1kYXNoYm9hcmQvLi9hcHBzL2NvdmlkL3ZpZXcvbWFwYm94R2wvQ29tcG9uZW50Lm1qcyIsIndlYnBhY2s6Ly9jb3ZpZDE5LWRhc2hib2FyZC8uL2FwcHMvY292aWQvdmlldy9tYXBib3hHbC9Db250YWluZXIubWpzIiwid2VicGFjazovL2NvdmlkMTktZGFzaGJvYXJkLy4vYXBwcy9jb3ZpZC92aWV3L21hcGJveEdsL0NvbnRhaW5lckNvbnRyb2xsZXIubWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWdFOztBQUVoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRFQUFJO0FBQ3ZCLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdHQUFnRyxPQUFPO0FBQ3ZHLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLHlFQUF5RSxPQUFPLElBQUksTUFBTTtBQUMxRjs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0ZBQXNGLHNDQUFzQzs7QUFFNUg7QUFDQTtBQUNBLHFFQUFxRSxPQUFPO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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RDtBQUM1RTtBQUNBLDRCQUE0QixlQUFlO0FBQzNDO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0hnRzs7QUFFaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsdUZBQW1CO0FBQ3JELHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6ImNodW5rcy9hcHAvYXBwc19jb3ZpZF9hcHBfbWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2UgZnJvbSAnLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIFN0YXRpYyB1dGlsaXR5IGNsYXNzXG4gKiBAY2xhc3MgQ292aWQuVXRpbFxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBVdGlsIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQSByZWdleCB0byByZXBsYWNlIGJsYW5rIGNoYXJzXG4gICAgICAgICAqIEBtZW1iZXIge1JlZ0V4cH0gZmxhZ1JlZ0V4PS8gL2dpXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgZmxhZ1JlZ0V4OiAvIC9naSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL051bWJlci90b0xvY2FsZVN0cmluZ1xuICAgICAgICAgKiBDaGFuZ2UgdGhpcyBjb25maWcgdG8gZW5mb3JjZSBhIGNvdW50eSBzcGVjaWZpYyBmb3JtYXR0aW5nIChlLmcuICdkZS1ERScpXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbG9jYWxlcz0nZGVmYXVsdCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBsb2NhbGVzOiAnZGVmYXVsdCdcbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0NvdmlkLlV0aWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkLlV0aWwnXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIHRoZSBjYXNlc1Blck9uZU1pbGxpb24gY29sdW1uIHRvIHNob3cgJSBvZiBwb3B1bGF0aW9uXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS52YWx1ZVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIGZvcm1hdEluZmVjdGVkKGRhdGEpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gZGF0YS52YWx1ZTtcblxuICAgICAgICBpZiAoIU5lby5pc051bWJlcih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSB8fCAnTi9BJztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAvIDEwMCk7XG4gICAgICAgIHZhbHVlIC89IDEwMDtcblxuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvRml4ZWQoMikgKyAnICUnO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZS50b0xvY2FsZVN0cmluZyhVdGlsLmxvY2FsZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHdpbGwgZ2V0IHVzZWQgYXMgYSBncmlkIHJlbmRlcmVyLCBzbyB0aGUgMm5kIHBhcmFtIGlzIGFuIG92ZXJsb2FkICh3b3VsZCBiZSB7T2JqZWN0fSByZWNvcmQpXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS52YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbY29sb3JdXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgZm9ybWF0TnVtYmVyKGRhdGEsIGNvbG9yKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGRhdGEudmFsdWU7XG5cbiAgICAgICAgaWYgKCFOZW8uaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgfHwgJ04vQSc7XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvTG9jYWxlU3RyaW5nKFV0aWwubG9jYWxlcyk7XG5cbiAgICAgICAgcmV0dXJuIHR5cGVvZiBjb2xvciAhPT0gJ3N0cmluZycgPyB2YWx1ZSA6IGA8c3BhbiBzdHlsZT1cImNvbG9yOiR7Y29sb3J9O1wiPiR7dmFsdWV9PC9zcGFuPmA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IHVybFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDb3VudHJ5RmxhZ1VybChuYW1lKSB7XG4gICAgICAgIGNvbnN0IG1hcCA9IHtcbiAgICAgICAgICAgICdib3NuaWEnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2Jvc25pYS1hbmQtaGVyemVnb3ZpbmEnLFxuICAgICAgICAgICAgJ2NhYm8tdmVyZGUnICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnY2FwZS12ZXJkZScsXG4gICAgICAgICAgICAnY2FyJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdjZW50cmFsLWFmcmljYW4tcmVwdWJsaWMnLFxuICAgICAgICAgICAgJ2NhcmliYmVhbi1uZXRoZXJsYW5kcycgICAgICAgICAgICAgICAgOiAnbmV0aGVybGFuZHMnLFxuICAgICAgICAgICAgJ2NoYW5uZWwtaXNsYW5kcycgICAgICAgICAgICAgICAgICAgICAgOiAnamVyc2V5JyxcbiAgICAgICAgICAgICdjw7R0ZS1kXFwnaXZvaXJlJyAgICAgICAgICAgICAgICAgICAgICAgOiAnaXZvcnktY29hc3QnLFxuICAgICAgICAgICAgJ2NvbmdvJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAncmVwdWJsaWMtb2YtdGhlLWNvbmdvJyxcbiAgICAgICAgICAgICdjb25nbywtdGhlLWRlbW9jcmF0aWMtcmVwdWJsaWMtb2YtdGhlJzogJ2RlbW9jcmF0aWMtcmVwdWJsaWMtb2YtY29uZ28nLFxuICAgICAgICAgICAgJ2N1cmHDp2FvJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2N1cmFjYW8nLFxuICAgICAgICAgICAgJ2N6ZWNoaWEnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnY3plY2gtcmVwdWJsaWMnLFxuICAgICAgICAgICAgJ2RpYW1vbmQtcHJpbmNlc3MnICAgICAgICAgICAgICAgICAgICAgOiAnamFwYW4nLCAvLyBjcnVpc2Ugc2hpcFxuICAgICAgICAgICAgJ2RyYycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnZGVtb2NyYXRpYy1yZXB1YmxpYy1vZi1jb25nbycsXG4gICAgICAgICAgICAnZWwtc2FsdmFkb3InICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzYWx2YWRvcicsXG4gICAgICAgICAgICAnZXN3YXRpbmknICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzd2F6aWxhbmQnLFxuICAgICAgICAgICAgJ2ZhZXJvZS1pc2xhbmRzJyAgICAgICAgICAgICAgICAgICAgICAgOiAnZmFyb2UtaXNsYW5kcycsXG4gICAgICAgICAgICAnZmFsa2xhbmQtaXNsYW5kcy0obWFsdmluYXMpJyAgICAgICAgICA6ICdmYWxrbGFuZC1pc2xhbmRzJyxcbiAgICAgICAgICAgICdmcmVuY2gtZ3VpYW5hJyAgICAgICAgICAgICAgICAgICAgICAgIDogJ2ZyYW5jZScsIC8vID9cbiAgICAgICAgICAgICdndWFkZWxvdXBlJyAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2ZyYW5jZScsIC8vID9cbiAgICAgICAgICAgICdob2x5LXNlZS0odmF0aWNhbi1jaXR5LXN0YXRlKScgICAgICAgIDogJ3ZhdGljYW4tY2l0eScsXG4gICAgICAgICAgICAnaXJhbiwtaXNsYW1pYy1yZXB1YmxpYy1vZicgICAgICAgICAgICA6ICdpcmFuJyxcbiAgICAgICAgICAgICdsYW8tcGVvcGxlXFwncy1kZW1vY3JhdGljLXJlcHVibGljJyAgICA6ICdsYW9zJyxcbiAgICAgICAgICAgICdsaWJ5YW4tYXJhYi1qYW1haGlyaXlhJyAgICAgICAgICAgICAgIDogJ2xpYnlhJyxcbiAgICAgICAgICAgICdtYWNlZG9uaWEnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3JlcHVibGljLW9mLW1hY2Vkb25pYScsXG4gICAgICAgICAgICAnbWFyc2hhbGwtaXNsYW5kcycgICAgICAgICAgICAgICAgICAgICA6ICdtYXJzaGFsbC1pc2xhbmQnLFxuICAgICAgICAgICAgJ21heW90dGUnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnZnJhbmNlJywgLy8gP1xuICAgICAgICAgICAgJ21vbGRvdmEsLXJlcHVibGljLW9mJyAgICAgICAgICAgICAgICAgOiAnbW9sZG92YScsXG4gICAgICAgICAgICAnbXMtemFhbmRhbScgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICduZXRoZXJsYW5kcycsIC8vIGNydWlzZSBzaGlwXG4gICAgICAgICAgICAnbmV3LWNhbGVkb25pYScgICAgICAgICAgICAgICAgICAgICAgICA6ICdmcmFuY2UnLFxuICAgICAgICAgICAgJ3BhbGVzdGluaWFuLXRlcnJpdG9yeSwtb2NjdXBpZWQnICAgICAgOiAncGFsZXN0aW5lJyxcbiAgICAgICAgICAgICdwb2xhbmQnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3JlcHVibGljLW9mLXBvbGFuZCcsXG4gICAgICAgICAgICAncsOpdW5pb24nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnZnJhbmNlJyxcbiAgICAgICAgICAgICdzLi1rb3JlYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3NvdXRoLWtvcmVhJyxcbiAgICAgICAgICAgICdzdC4tYmFydGgnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3N0LWJhcnRzJyxcbiAgICAgICAgICAgICdzYWludC1sdWNpYScgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3N0LWx1Y2lhJyxcbiAgICAgICAgICAgICdzYWludC1tYXJ0aW4nICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3NpbnQtbWFhcnRlbicsXG4gICAgICAgICAgICAnc2FpbnQtcGllcnJlLW1pcXVlbG9uJyAgICAgICAgICAgICAgICA6ICdmcmFuY2UnLFxuICAgICAgICAgICAgJ3NhaW50LXZpbmNlbnQtYW5kLXRoZS1ncmVuYWRpbmVzJyAgICAgOiAnc3QtdmluY2VudC1hbmQtdGhlLWdyZW5hZGluZXMnLFxuICAgICAgICAgICAgJ3N5cmlhbi1hcmFiLXJlcHVibGljJyAgICAgICAgICAgICAgICAgOiAnc3lyaWEnLFxuICAgICAgICAgICAgJ3RhbnphbmlhLC11bml0ZWQtcmVwdWJsaWMtb2YnICAgICAgICAgOiAndGFuemFuaWEnLFxuICAgICAgICAgICAgJ3RpbW9yLWxlc3RlJyAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnZWFzdC10aW1vcicsXG4gICAgICAgICAgICAndHVya3MtYW5kLWNhaWNvcy1pc2xhbmRzJyAgICAgICAgICAgICA6ICd0dXJrcy1hbmQtY2FpY29zJyxcbiAgICAgICAgICAgICd1LnMuLXZpcmdpbi1pc2xhbmRzJyAgICAgICAgICAgICAgICAgIDogJ3Zpcmdpbi1pc2xhbmRzJyxcbiAgICAgICAgICAgICd1YWUnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3VuaXRlZC1hcmFiLWVtaXJhdGVzJyxcbiAgICAgICAgICAgICd1aycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3VuaXRlZC1raW5nZG9tJyxcbiAgICAgICAgICAgICd1c2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3VuaXRlZC1zdGF0ZXMtb2YtYW1lcmljYScsXG4gICAgICAgICAgICAndXpiZWtpc3RhbicgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd1emJla2lzdG4nLFxuICAgICAgICAgICAgJ3ZlbmV6dWVsYSwtYm9saXZhcmlhbi1yZXB1YmxpYy1vZicgICAgOiAndmVuZXp1ZWxhJyxcbiAgICAgICAgICAgICd2aWV0LW5hbScgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3ZpZXRuYW0nLFxuICAgICAgICAgICAgJ3dhbGxpcy1hbmQtZnV0dW5hJyAgICAgICAgICAgICAgICAgICAgOiAnZnJhbmNlJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBpbWFnZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZShVdGlsLmZsYWdSZWdFeCwgJy0nKTtcblxuICAgICAgICBpbWFnZU5hbWUgPSBtYXBbaW1hZ2VOYW1lXSB8fCBpbWFnZU5hbWU7XG5cbiAgICAgICAgaWYgKE5lby5jb25maWcuaXNHaXRIdWJQYWdlcykge1xuICAgICAgICAgICAgbGV0IHBhdGggPSAnLi4vLi4vLi4vLi4vcmVzb3VyY2VzL2ltYWdlcy9mbGF0aWNvbi9jb3VudHJ5X2ZsYWdzL3BuZy8nICsgaW1hZ2VOYW1lICsgJy5wbmcnO1xuXG4gICAgICAgICAgICBpZiAoTmVvLmNvbmZpZy5lbnZpcm9ubWVudCAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgIHBhdGggPSAnLi4vLi4vJyArIHBhdGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXRoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbmVvbWpzL3BhZ2VzL21hc3Rlci9yZXNvdXJjZXMvaW1hZ2VzL2ZsYXRpY29uL2NvdW50cnlfZmxhZ3MvcG5nLycgKyBpbWFnZU5hbWUgKyAnLnBuZyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLmluZGV4XG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBzdGF0aWMgaW5kZXhSZW5kZXJlcihkYXRhKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbHMgOiBbJ25lby1pbmRleC1jb2x1bW4nLCAnbmVvLXRhYmxlLWNlbGwnXSxcbiAgICAgICAgICAgIGh0bWw6IGRhdGEuaW5kZXggKyAxXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhVdGlsKTtcblxuZXhwb3J0IGRlZmF1bHQgVXRpbDsiLCJpbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuL3ZpZXcvTWFpbkNvbnRhaW5lci5tanMnO1xuXG5jb25zdCBvblN0YXJ0ID0gKCkgPT4gTmVvLmFwcCh7XG4gICAgbWFpblZpZXc6IE1haW5Db250YWluZXIsXG4gICAgbmFtZSAgICA6ICdDb3ZpZCdcbn0pO1xuXG5leHBvcnQge29uU3RhcnQgYXMgb25TdGFydH07IiwiaW1wb3J0IE1vZGVsICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZGF0YS9Nb2RlbC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb3ZpZC5tb2RlbC5Db3VudHJ5XG4gKiBAZXh0ZW5kcyBOZW8uZGF0YS5Nb2RlbFxuICovXG5jbGFzcyBDb3VudHJ5IGV4dGVuZHMgTW9kZWwge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQubW9kZWwuQ291bnRyeScsXG5cbiAgICAgICAgZmllbGRzOiBbe1xuICAgICAgICAgICAgbmFtZTogJ2FjdGl2ZScsXG4gICAgICAgICAgICB0eXBlOiAnSW50ZWdlcidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2Nhc2VzJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnY2FzZXNQZXJPbmVNaWxsaW9uJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnY291bnRyeScsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnY291bnRyeUluZm8nLFxuICAgICAgICAgICAgdHlwZTogJ09iamVjdCcgLy8gX2lkLCBmbGFnLCBpc28yLCBpc28zLCBsYXQsIGxvbmdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2NyaXRpY2FsJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZGVhdGhzJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnaW5kZXgnLFxuICAgICAgICAgICAgdHlwZTogJ0ludGVnZXInXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdpbmZlY3RlZCcsIC8vIHJlbmRlcmVyIHBhcnNlcyB0byAlIG9mIHBvcHVsYXRpb25cbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAncmVjb3ZlcmVkJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAndGVzdHMnLFxuICAgICAgICAgICAgdHlwZTogJ0ludGVnZXInXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICd0ZXN0c1Blck9uZU1pbGxpb24nLFxuICAgICAgICAgICAgdHlwZTogJ0ludGVnZXInXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICd0b2RheUNhc2VzJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAndG9kYXlEZWF0aHMnLFxuICAgICAgICAgICAgdHlwZTogJ0ludGVnZXInXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ291bnRyeSk7XG5cbmV4cG9ydCB7Q291bnRyeSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgTW9kZWwgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9kYXRhL01vZGVsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLm1vZGVsLkhpc3RvcmljYWxEYXRhXG4gKiBAZXh0ZW5kcyBOZW8uZGF0YS5Nb2RlbFxuICovXG5jbGFzcyBIaXN0b3JpY2FsRGF0YSBleHRlbmRzIE1vZGVsIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkLm1vZGVsLkhpc3RvcmljYWxEYXRhJyxcblxuICAgICAgICBmaWVsZHM6IFt7XG4gICAgICAgICAgICBuYW1lOiAnYWN0aXZlJywgLy8gZG9lcyBub3QgZXhpc3QgaW4gdGhlIGFwaSA9PiBjYXNlcyAtIGRlYXRocyAtIHJlY292ZXJlZFxuICAgICAgICAgICAgdHlwZTogJ2ludCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2Nhc2VzJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbnQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdkYXRlJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnIC8vIGRhdGUgPT4gMS8yMi8yMFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZGFpbHlBY3RpdmUnLFxuICAgICAgICAgICAgdHlwZTogJ2ludCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2RhaWx5Q2FzZXMnLFxuICAgICAgICAgICAgdHlwZTogJ2ludCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2RhaWx5RGVhdGhzJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbnQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdkYWlseVJlY292ZXJlZCcsXG4gICAgICAgICAgICB0eXBlOiAnaW50J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZGVhdGhzJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbnQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdyZWNvdmVyZWQnLFxuICAgICAgICAgICAgdHlwZTogJ2ludCdcbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIaXN0b3JpY2FsRGF0YSk7XG5cbmV4cG9ydCB7SGlzdG9yaWNhbERhdGEgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvdW50cnkgZnJvbSAnLi4vbW9kZWwvQ291bnRyeS5tanMnO1xuaW1wb3J0IFN0b3JlICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2RhdGEvU3RvcmUubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgQ292aWQuc3RvcmUuQ291bnRyaWVzXG4gKiBAZXh0ZW5kcyBOZW8uZGF0YS5TdG9yZVxuICovXG5jbGFzcyBDb3VudHJpZXMgZXh0ZW5kcyBTdG9yZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdDb3ZpZC5zdG9yZS5Db3VudHJpZXMnLFxuXG4gICAgICAgIGtleVByb3BlcnR5OiAnY291bnRyeScsXG4gICAgICAgIG1vZGVsICAgICAgOiBDb3VudHJ5LFxuXG4gICAgICAgIHNvcnRlcnM6IFt7XG4gICAgICAgICAgICBwcm9wZXJ0eSA6ICdhY3RpdmUnLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnREVTQydcbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb3VudHJpZXMpO1xuXG5leHBvcnQge0NvdW50cmllcyBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgSGlzdG9yaWNhbERhdGFNb2RlbCBmcm9tICcuLi9tb2RlbC9IaXN0b3JpY2FsRGF0YS5tanMnO1xuaW1wb3J0IFN0b3JlICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2RhdGEvU3RvcmUubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgQ292aWQuc3RvcmUuSGlzdG9yaWNhbERhdGFcbiAqIEBleHRlbmRzIE5lby5kYXRhLlN0b3JlXG4gKi9cbmNsYXNzIEhpc3RvcmljYWxEYXRhIGV4dGVuZHMgU3RvcmUge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQuc3RvcmUuSGlzdG9yaWNhbERhdGEnLFxuXG4gICAgICAgIGtleVByb3BlcnR5OiAnZGF0ZScsXG4gICAgICAgIG1vZGVsICAgICAgOiBIaXN0b3JpY2FsRGF0YU1vZGVsLFxuXG4gICAgICAgIHNvcnRlcnM6IFt7XG4gICAgICAgICAgICBwcm9wZXJ0eSA6ICdkYXRlJyxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ0RFU0MnXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGlzdG9yaWNhbERhdGEpO1xuXG5leHBvcnQge0hpc3RvcmljYWxEYXRhIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLnZpZXcuQXR0cmlidXRpb25Db21wb25lbnRcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBBdHRyaWJ1dGlvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0NvdmlkLnZpZXcuQXR0cmlidXRpb25Db21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkLnZpZXcuQXR0cmlidXRpb25Db21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2NvdmlkLWF0dHJpYnV0aW9uLWNvbXBvbmVudCddXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsczogWydjb3ZpZC1hdHRyaWJ1dGlvbi1jb21wb25lbnQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgdmRvbToge1xuICAgICAgICAgICAgdGFnICA6ICdkaXYnLFxuICAgICAgICAgICAgc3R5bGU6IHttYXJnaW46ICcyMHB4J30sXG4gICAgICAgICAgICBjbiAgIDogW3tcbiAgICAgICAgICAgICAgICB0YWcgOiAnaDInLFxuICAgICAgICAgICAgICAgIGh0bWw6ICdBdHRyaWJ1dGlvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiAndWwnLFxuICAgICAgICAgICAgICAgIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgIHt0YWc6ICdsaScsIGh0bWw6ICdUaGUgbG9nb3Mgd2VyZSBjcmVhdGVkIGJ5IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5kcmllZm1laWVyLmNvbS9cIj5TZWJhc3RpYW4gRHJpZWZtZWllcjwvYT4uIFRoYW5rIHlvdSEnfSxcbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ2xpJywgaHRtbDogWydUaGUgbG9nb3MgYXJlIGJhc2VkIG9uIHRoZSBpbWFnZSBmcm9tIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3BoaWwuY2RjLmdvdi9EZXRhaWxzLmFzcHg/cGlkPTIzMzEyXCI+Q0RDIFB1YmxpYyBIZWFsdGggSW1hZ2UgTGlicmFyeSAoUEhJTCk8L2E+LDwvYnI+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdzbyBjcmVkaXRzIHRvIHRoZSBjb250ZW50IHByb3ZpZGVycyBDREMvIEFsaXNzYSBFY2tlcnQsIE1TOyBEYW4gSGlnZ2lucywgTUFNUy4nXS5qb2luKCcnKX0sXG4gICAgICAgICAgICAgICAgICAgIHt0YWc6ICdsaScsIGh0bWw6ICdEYXRhIHByb3ZpZGVkIGJ5OiA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL05vdmVsQ09WSUQvQVBJXCI+Tm92ZWxDT1ZJRCAvIEFQSTwvYT4uJ30sXG4gICAgICAgICAgICAgICAgICAgIHt0YWc6ICdsaScsIGh0bWw6ICdDb3VudHJ5IEZsYWcgSWNvbnMgbWFkZSBieSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2F1dGhvcnMvZnJlZXBpa1wiIHRpdGxlPVwiRnJlZXBpa1wiPkZyZWVwaWs8L2E+IGZyb20gPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9cIiB0aXRsZT1cIkZsYXRpY29uXCI+IHd3dy5mbGF0aWNvbi5jb208L2E+Lid9LFxuICAgICAgICAgICAgICAgICAgICB7dGFnOiAnbGknLCBodG1sOiAnQ2hhcnRzIGdvdCBjcmVhdGVkIHdpdGggPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmFtY2hhcnRzLmNvbS9kb2NzL3Y0L1wiPmFtQ2hhcnRzIDQ8L2E+Lid9LFxuICAgICAgICAgICAgICAgICAgICB7dGFnOiAnbGknLCBodG1sOiAnVGhlIEFwcCBpcyBjcmVhdGVkIHdpdGggdGhlIHdlYndvcmtlcnMgZHJpdmVuIFVJIGZyYW1ld29yayA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL25lb21qcy9uZW9cIj5uZW8ubWpzPC9hPi4nfSxcbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ2xpJywgaHRtbDogJ1RoZSBNYXBib3ggR0wgTWFwIGlzIGJhc2VkIG9uIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2RvY3MubWFwYm94LmNvbS9tYXBib3gtZ2wtanMvYXBpL1wiPk1hcGJveCBHTCBKUzwvYT4uJ30sXG4gICAgICAgICAgICAgICAgICAgIHt0YWc6ICdsaScsIGh0bWw6ICdUaGUgTWFwICYgSGVhdG1hcCBzdHlsZXMgYXJlIHN0cm9uZ2x5IGluc3BpcmVkIGJ5IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2Jsb2cubWFwYm94LmNvbS92aXN1YWxpemluZy10aGUtcHJvZ3Jlc3Npb24tb2YtdGhlLTIwMTktbmNvdi1vdXRicmVhay02Njc2M2ViNTllNzlcIj5WaXN1YWxpemluZyB0aGUgcHJvZ3Jlc3Npb24gb2YgdGhlIDIwMTktbkNvViBvdXRicmVhazwvYT4uJ31cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQXR0cmlidXRpb25Db21wb25lbnQpO1xuXG5leHBvcnQge0F0dHJpYnV0aW9uQ29tcG9uZW50IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRhaW5lci9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLnZpZXcuRm9vdGVyQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgRm9vdGVyQ29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nQ292aWQudmlldy5Gb290ZXJDb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkLnZpZXcuRm9vdGVyQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gaGVpZ2h0PTIwXG4gICAgICAgICAqL1xuICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsYXlvdXQ9e250eXBlOiAnaGJveCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2hib3gnfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gcmVmZXJlbmNlPSdmb290ZXInXG4gICAgICAgICAqL1xuICAgICAgICByZWZlcmVuY2U6ICdmb290ZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBzdHlsZT17b3ZlcmZsb3c6ICd2aXNpYmxlJ31cbiAgICAgICAgICovXG4gICAgICAgIHN0eWxlOiB7b3ZlcmZsb3c6ICd2aXNpYmxlJ30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGl0ZW1EZWZhdWx0c1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICBudHlwZTogJ2NvbXBvbmVudCcsXG4gICAgICAgICAgICBjbHMgIDogWyduZW8tbGluay1jb2xvciddLFxuICAgICAgICAgICAgc3R5bGU6IHtmb250U2l6ZTogJzEzcHgnLCBwYWRkaW5nOiAnMTBweCcsIHBhZGRpbmdUb3A6IDB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gaXRlbXNcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgaHRtbCA6ICdBcHAgY3JlYXRlZCB3aXRoIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbmVvbWpzL25lb1wiPm5lby5tanM8L2E+LidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZmxleDogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBodG1sIDogJ0RhdGEgcHJvdmlkZWQgYnkgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kaXNlYXNlLXNoL0FQSVwiPmRpc2Vhc2Uuc2gvQVBJPC9hPi4nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGZsZXg6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgaHRtbCA6ICdDb3VudHJ5IEZsYWcgSWNvbnMgbWFkZSBieSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2F1dGhvcnMvZnJlZXBpa1wiIHRpdGxlPVwiRnJlZXBpa1wiPkZyZWVwaWs8L2E+IGZyb20gPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9cIiB0aXRsZT1cIkZsYXRpY29uXCI+IHd3dy5mbGF0aWNvbi5jb208L2E+LidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICBjbHMgICAgOiBbJ25lby1idXR0b24nXSxcbiAgICAgICAgICAgIGhhbmRsZXI6ICdvblJlbW92ZUZvb3RlckJ1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgIGhlaWdodCA6IDI0LFxuICAgICAgICAgICAgc3R5bGUgIDoge21hcmdpbjogMCwgbWFyZ2luUmlnaHQ6ICcxMHB4JywgbWFyZ2luVG9wOiAnLTVweCd9LFxuICAgICAgICAgICAgdGV4dCAgIDogJ1JlbW92ZSBGb290ZXInXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRm9vdGVyQ29udGFpbmVyKTtcblxuZXhwb3J0IHtGb290ZXJDb250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJveExhYmVsICAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvQm94TGFiZWwubWpzJztcbmltcG9ydCBDb250YWluZXIgICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBHYWxsZXJ5ICAgICAgICAgICAgICAgICAgICBmcm9tICcuL2NvdW50cnkvR2FsbGVyeS5tanMnO1xuaW1wb3J0IEdhbGxlcnlDb250YWluZXJDb250cm9sbGVyIGZyb20gJy4vR2FsbGVyeUNvbnRhaW5lckNvbnRyb2xsZXIubWpzJztcbmltcG9ydCBQYW5lbCAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL1BhbmVsLm1qcyc7XG5pbXBvcnQgUmFuZ2VGaWVsZCAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2Zvcm0vZmllbGQvUmFuZ2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgQ292aWQudmlldy5HYWxsZXJ5Q29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgR2FsbGVyeUNvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0NvdmlkLnZpZXcuR2FsbGVyeUNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQudmlldy5HYWxsZXJ5Q29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tZ2FsbGVyeS1tYWluY29udGFpbmVyJywgJ25lby12aWV3cG9ydCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWdhbGxlcnktbWFpbmNvbnRhaW5lcicsICduZW8tdmlld3BvcnQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb250cm9sbGVyLkNvbXBvbmVudHxudWxsfSBjb250cm9sbGVyPUdhbGxlcnlDb250YWluZXJDb250cm9sbGVyXG4gICAgICAgICAqL1xuICAgICAgICBjb250cm9sbGVyOiBHYWxsZXJ5Q29udGFpbmVyQ29udHJvbGxlcixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb21wb25lbnQuR2FsbGVyeXxudWxsfSBnYWxsZXJ5PW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGdhbGxlcnk6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gZ2FsbGVyeUNvbmZpZz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBnYWxsZXJ5Q29uZmlnOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IGxheW91dD17bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W118bnVsbH0gaXRlbXNcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgIGZsZXggIDogMSxcbiAgICAgICAgICAgIGxheW91dDogJ2ZpdCcsXG4gICAgICAgICAgICBpdGVtcyA6IFtdXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogUGFuZWwsXG4gICAgICAgICAgICBjbHMgICAgICA6IFsnbmVvLWNvbmZpZ3VyYXRpb24tcGFuZWwnLCAnbmVvLXBhbmVsJywgJ25lby1jb250YWluZXInXSxcbiAgICAgICAgICAgIGxheW91dCAgIDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAgICAgcmVmZXJlbmNlOiAnY29udHJvbHMtcGFuZWwnLFxuICAgICAgICAgICAgc3R5bGUgICAgOiB7YmFja2dyb3VuZENvbG9yOiAnIzJiMmIyYid9LFxuICAgICAgICAgICAgd2lkdGggICAgOiAyNjAsXG5cbiAgICAgICAgICAgIGNvbnRhaW5lckNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7b3ZlcmZsb3dZOiAnc2Nyb2xsJ31cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGhlYWRlcnM6IFt7XG4gICAgICAgICAgICAgICAgZG9jazogJ3RvcCcsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAnb25Db2xsYXBzZUJ1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ1gnXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdHYWxsZXJ5IENvbnRyb2xzJ1xuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XSxcblxuICAgICAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgZmxleCAgICAgICAgIDogJzAgMSBhdXRvJyxcbiAgICAgICAgICAgICAgICBsYWJlbFdpZHRoICAgOiAnMTEwcHgnLFxuICAgICAgICAgICAgICAgIHN0eWxlICAgICAgICA6IHtwYWRkaW5nOiAnMTBweCd9LFxuICAgICAgICAgICAgICAgIHVzZUlucHV0RXZlbnQ6IHRydWVcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgIDogUmFuZ2VGaWVsZCxcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdUcmFuc2xhdGUgWCcsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiA1MDAwLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICd0cmFuc2xhdGVYJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDAsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZSA6ICdvblJhbmdlZmllbGRDaGFuZ2UnLFxuICAgICAgICAgICAgICAgICAgICBtb3VudGVkOiAnb25SYW5nZWZpZWxkTW91bnRlZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgOiBSYW5nZUZpZWxkLFxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1RyYW5zbGF0ZSBZJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDE1MDAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAtMTUwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICd0cmFuc2xhdGVZJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDAsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogJ29uUmFuZ2VmaWVsZENoYW5nZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgOiBSYW5nZUZpZWxkLFxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1RyYW5zbGF0ZSBaJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDU1MCxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IC00NTAwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3RyYW5zbGF0ZVonLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogMCxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlIDogJ29uUmFuZ2VmaWVsZENoYW5nZScsXG4gICAgICAgICAgICAgICAgICAgIG1vdW50ZWQ6ICdvblJhbmdlZmllbGRNb3VudGVkJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgICA6IFJhbmdlRmllbGQsXG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnQW1vdW50IFJvd3MnLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMTUsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAxLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ2Ftb3VudFJvd3MnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogMyxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiAnb25SYW5nZWZpZWxkQ2hhbmdlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiAnb25PcmRlckJ1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnT3JkZXIgYnkgUm93JyxcbiAgICAgICAgICAgICAgICBzdHlsZSAgOiB7bWFyZ2luOiAnMjBweCd9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGU6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgdGV4dCA6ICdTb3J0IEJ5OidcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAgICAgICAgIHN0eWxlIDoge21pbkhlaWdodDogJzEzNHB4JywgcGFkZGluZzogJzAnfSxcblxuICAgICAgICAgICAgICAgIGl0ZW1zIDogW3tcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ30sXG5cbiAgICAgICAgICAgICAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvblNvcnRCdXR0b25DbGljaydcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnY2FzZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdDYXNlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Ub3A6ICcwJ31cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdkZWF0aHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdEZWF0aHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHttYXJnaW46ICcxMHB4JywgbWFyZ2luQm90dG9tOiAnMTBweCcsIG1hcmdpblRvcDogMH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdjb3VudHJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiAnQ291bnRyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Ub3A6IDB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiAncmVjb3ZlcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiAnUmVjb3ZlcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpblRvcDogMH1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIGxheW91dDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1EZWZhdWx0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAnb25Tb3J0QnV0dG9uQ2xpY2snXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ3RvZGF5Q2FzZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdDYXNlcyB0b2RheScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Ub3A6ICcwJ31cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICd0b2RheURlYXRocycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ0RlYXRocyB0b2RheScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Cb3R0b206ICcxMHB4JywgbWFyZ2luVG9wOiAwfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ2NyaXRpY2FsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiAnQ3JpdGljYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHttYXJnaW46ICcxMHB4JywgbWFyZ2luQm90dG9tOiAnNDNweCcsIG1hcmdpblRvcDogMH1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG1vZHVsZTogQm94TGFiZWwsXG4gICAgICAgICAgICAgICAgdGV4dCAgOiBbXG4gICAgICAgICAgICAgICAgICAgICc8Yj5OYXZpZ2F0aW9uIENvbmNlcHQ8L2I+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxwPllvdSBjYW4gdXNlIHRoZSBBcnJvdyBLZXlzIHRvIHdhbGsgdGhyb3VnaCB0aGUgaXRlbXMuPC9wPidcbiAgICAgICAgICAgICAgICBdLmpvaW4oJycpXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuZ2FsbGVyeSA9IE5lby5jcmVhdGUoe1xuICAgICAgICAgICAgbW9kdWxlICAgOiBHYWxsZXJ5LFxuICAgICAgICAgICAgcmVmZXJlbmNlOiAnZ2FsbGVyeScsXG4gICAgICAgICAgICAuLi5tZS5nYWxsZXJ5Q29uZmlnIHx8IHt9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLml0ZW1zWzBdLml0ZW1zLnB1c2gobWUuZ2FsbGVyeSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBkZXN0cm95KC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5nYWxsZXJ5ID0gbnVsbDtcbiAgICAgICAgc3VwZXIuZGVzdHJveSguLi5hcmdzKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEdhbGxlcnlDb250YWluZXIpO1xuXG5leHBvcnQge0dhbGxlcnlDb250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbXBvbmVudENvbnRyb2xsZXIgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRyb2xsZXIvQ29tcG9uZW50Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLnZpZXcuR2FsbGVyeUNvbnRhaW5lckNvbnRyb2xsZXJcbiAqIEBleHRlbmRzIE5lby5jb250cm9sbGVyLkNvbXBvbmVudFxuICovXG5jbGFzcyBHYWxsZXJ5Q29udGFpbmVyQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdDb3ZpZC52aWV3LkdhbGxlcnlDb250YWluZXJDb250cm9sbGVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdDb3ZpZC52aWV3LkdhbGxlcnlDb250YWluZXJDb250cm9sbGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb21wb25lbnQuR2FsbGVyeXxudWxsfSBnYWxsZXJ5Xz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGdhbGxlcnlfOiBudWxsXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCB3aGVuIGFjY2Vzc2luZyB0aGUgZ2FsbGVyeSBjb25maWdcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuR2FsbGVyeXxudWxsfSB2YWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVHZXRHYWxsZXJ5KHZhbHVlKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2dhbGxlcnkgPSB2YWx1ZSA9IHRoaXMuZ2V0UmVmZXJlbmNlKCdnYWxsZXJ5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uQ29sbGFwc2VCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIGNvbnN0IHBhbmVsICA9IHRoaXMuZ2V0UmVmZXJlbmNlKCdjb250cm9scy1wYW5lbCcpLFxuICAgICAgICAgICAgICBleHBhbmQgPSBwYW5lbC53aWR0aCA9PT0gNDA7XG5cbiAgICAgICAgcGFuZWwud2lkdGggPSBleHBhbmQgPyAyNTAgOiA0MDtcblxuICAgICAgICBkYXRhLmNvbXBvbmVudC50ZXh0ID0gZXhwYW5kID8gJ1gnIDogJysnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbk9yZGVyQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICBjb25zdCBnYWxsZXJ5ICAgID0gdGhpcy5nYWxsZXJ5LFxuICAgICAgICAgICAgICBvcmRlckJ5Um93ID0gIWdhbGxlcnkub3JkZXJCeVJvdztcblxuICAgICAgICBkYXRhLmNvbXBvbmVudC50ZXh0ID0gb3JkZXJCeVJvdyA9PT0gdHJ1ZSA/ICdPcmRlciBCeSBDb2x1bW4nIDogJ09yZGVyIGJ5IFJvdyc7XG5cbiAgICAgICAgZ2FsbGVyeS5vcmRlckJ5Um93ID0gb3JkZXJCeVJvdztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25SYW5nZWZpZWxkQ2hhbmdlKGRhdGEpIHtcbiAgICAgICAgdGhpcy5nYWxsZXJ5W2RhdGEuY29tcG9uZW50Lm5hbWVdID0gZGF0YS52YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAqL1xuICAgIG9uUmFuZ2VmaWVsZE1vdW50ZWQoaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBOZW8uZ2V0Q29tcG9uZW50KGlkKTtcblxuICAgICAgICB0aGlzLmdhbGxlcnkub24oJ2NoYW5nZScgKyBOZW8uY2FwaXRhbGl6ZShmaWVsZC5uYW1lKSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIGZpZWxkLm1pblZhbHVlKSwgZmllbGQubWF4VmFsdWUpO1xuICAgICAgICAgICAgZmllbGQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uU29ydEJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5nYWxsZXJ5LnN0b3JlLnNvcnRlcnMgPSBbe1xuICAgICAgICAgICAgcHJvcGVydHkgOiBkYXRhLmNvbXBvbmVudC5maWVsZCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ0RFU0MnXG4gICAgICAgIH1dO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoR2FsbGVyeUNvbnRhaW5lckNvbnRyb2xsZXIpO1xuXG5leHBvcnQge0dhbGxlcnlDb250YWluZXJDb250cm9sbGVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb250YWluZXIgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRhaW5lci9CYXNlLm1qcyc7XG5pbXBvcnQgQ291bnRyeVN0b3JlIGZyb20gJy4uL3N0b3JlL0NvdW50cmllcy5tanMnO1xuaW1wb3J0IFNlbGVjdEZpZWxkICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9TZWxlY3QubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgQ292aWQudmlldy5IZWFkZXJDb250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBIZWFkZXJDb250YWluZXIgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdDb3ZpZC52aWV3LkhlYWRlckNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQudmlldy5IZWFkZXJDb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2NvdmlkLWhlYWRlci1jb250YWluZXInXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ2NvdmlkLWhlYWRlci1jb250YWluZXInXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gaGVpZ2h0PTcwXG4gICAgICAgICAqL1xuICAgICAgICBoZWlnaHQ6IDEyMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbGF5b3V0PXtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgICAgICAgKi9cbiAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gaXRlbXNcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgbnR5cGUgICAgOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgIG1pbldpZHRoIDogMjY3LFxuICAgICAgICAgICAgcmVmZXJlbmNlOiAnbG9nbycsXG4gICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW46ICcxMHB4J30sXG4gICAgICAgICAgICB3aWR0aCAgICA6IDI2NyxcblxuICAgICAgICAgICAgdmRvbToge1xuICAgICAgICAgICAgICAgIHRhZzogJ2ltZycsXG4gICAgICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL25lb21qcy9wYWdlcy9tYXN0ZXIvcmVzb3VyY2VzL2ltYWdlcy9hcHBzL2NvdmlkL2NvdmlkX2xvZ29fZGFyay5qcGcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG50eXBlIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgICAgIGl0ZW1zIDogW3tcbiAgICAgICAgICAgICAgICBudHlwZSAgICA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgIGhlaWdodCAgIDogNjUsXG4gICAgICAgICAgICAgICAgbGF5b3V0ICAgOiB7bnR5cGU6ICdoYm94J30sXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAndG90YWwtc3RhdHMnLFxuXG4gICAgICAgICAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50J1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgY2xzIDogWydjb3ZpZC1udW1iZXJib3gnXSxcbiAgICAgICAgICAgICAgICAgICAgdmRvbToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvdmlkLW51bWJlcmJveC10aXRsZScsICAnY2FzZXMnXSwgIGh0bWw6J0Nhc2VzJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NsczogWydjb3ZpZC1udW1iZXJib3gtbnVtYmVyJywgJ2Nhc2VzJ119XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGNscyA6IFsnY292aWQtbnVtYmVyYm94J10sXG4gICAgICAgICAgICAgICAgICAgIHZkb206IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NsczogWydjb3ZpZC1udW1iZXJib3gtdGl0bGUnLCAgJ2FjdGl2ZSddLCBodG1sOidBY3RpdmUnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvdmlkLW51bWJlcmJveC1udW1iZXInLCAnYWN0aXZlJ119XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGNscyA6IFsnY292aWQtbnVtYmVyYm94J10sXG4gICAgICAgICAgICAgICAgICAgIHZkb206IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NsczogWydjb3ZpZC1udW1iZXJib3gtdGl0bGUnLCAgJ3JlY292ZXJlZCddLCBodG1sOidSZWNvdmVyZWQnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvdmlkLW51bWJlcmJveC1udW1iZXInLCAncmVjb3ZlcmVkJ119XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGNscyA6IFsnY292aWQtbnVtYmVyYm94J10sXG4gICAgICAgICAgICAgICAgICAgIHZkb206IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NsczogWydjb3ZpZC1udW1iZXJib3gtdGl0bGUnLCAgJ2RlYXRocyddLCBodG1sOidEZWF0aHMnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvdmlkLW51bWJlcmJveC1udW1iZXInLCAnZGVhdGhzJ119XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDFcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7cGFkZGluZzogJzEwcHgnfSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyNSxcbiAgICAgICAgICAgICAgICAgICAgdmRvbSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZyAgICAgICAgICAgICAgOiAnYScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWwnICAgICA6ICdTdGFyIG5lb21qcy9uZW8gb24gR2l0SHViJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHMgICAgICAgICAgICAgIDogWydnaXRodWItYnV0dG9uJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtc2hvdy1jb3VudCc6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1zaXplJyAgICAgIDogJ2xhcmdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmICAgICAgICAgICAgIDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9uZW9tanMvbmVvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sICAgICAgICAgICAgIDogJ1N0YXInXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge3BhZGRpbmc6ICcxMHB4J30sXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDUsXG4gICAgICAgICAgICAgICAgICAgIHZkb20gOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWcgICAgICAgICAgICAgIDogJ2EnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWxhYmVsJyAgICAgOiAnU3BvbnNvciBAdG9iaXUgb24gR2l0SHViJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHMgICAgICAgICAgICAgIDogWydnaXRodWItYnV0dG9uJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtaWNvbicgICAgICA6ICdvY3RpY29uLWhlYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1zaXplJyAgICAgIDogJ2xhcmdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmICAgICAgICAgICAgIDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zcG9uc29ycy90b2JpdScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCAgICAgICAgICAgICA6ICdTcG9uc29yJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2hib3gnfSxcblxuICAgICAgICAgICAgICAgIGl0ZW1EZWZhdWx0czoge1xuICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2NvbXBvbmVudCdcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgaXRlbXMgOiBbe1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGUgICAgICAgOiBTZWxlY3RGaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUZpZWxkIDogJ2NvdW50cnknLFxuICAgICAgICAgICAgICAgICAgICBmbGV4ICAgICAgICAgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCAgICAgICA6IDI1LFxuICAgICAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uOiAnaW5saW5lJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0ICAgIDogJ1NlbGVjdCBhIENvdW50cnknLFxuICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aCAgICAgOiAxNDAsXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZSAgICA6ICdjb3VudHJ5LWZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgICAgICAgIDoge21hcmdpblRvcDogJzE1cHgnfSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggICAgICAgIDogMjAwLFxuXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXIgOiAnb25Db3VudHJ5RmllbGRDbGVhcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Q6ICdvbkNvdW50cnlGaWVsZFNlbGVjdCdcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBzdG9yZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlIDogQ291bnRyeVN0b3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGVyczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6ICdjb3VudHJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdBU0MnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgZmxleCAgIDogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAnb25Td2l0Y2hUaGVtZUJ1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IDogMjUsXG4gICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1zdW4nLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZSAgOiB7bWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5Ub3A6ICcxNXB4J30sXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdUaGVtZSBMaWdodCdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICBmbGV4ICAgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvblJlbG9hZERhdGFCdXR0b25DbGljaycsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA6IDI1LFxuICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtc3luYy1hbHQnLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZSAgOiB7bWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5Ub3A6ICcxNXB4J30sXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdSZWxvYWQgRGF0YSdcbiAgICAgICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgICAgOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgICA6IDI1LFxuICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICdsYXN0LXVwZGF0ZScsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpbkxlZnQ6ICcxMHB4JywgbWFyZ2luVG9wOiAnMThweCd9LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICcnXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGVhZGVyQ29udGFpbmVyKTtcblxuZXhwb3J0IHtIZWFkZXJDb250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJveExhYmVsICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0JveExhYmVsLm1qcyc7XG5pbXBvcnQgQ29udGFpbmVyICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250YWluZXIvQmFzZS5tanMnO1xuaW1wb3J0IEhlbGl4ICAgICAgICAgICAgICAgICAgICBmcm9tICcuL2NvdW50cnkvSGVsaXgubWpzJztcbmltcG9ydCBIZWxpeENvbnRhaW5lckNvbnRyb2xsZXIgZnJvbSAnLi9IZWxpeENvbnRhaW5lckNvbnRyb2xsZXIubWpzJztcbmltcG9ydCBQYW5lbCAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRhaW5lci9QYW5lbC5tanMnO1xuaW1wb3J0IFJhbmdlRmllbGQgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9SYW5nZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb3ZpZC52aWV3LkhlbGl4Q29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgSGVsaXhDb250YWluZXIgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdDb3ZpZC52aWV3LkhlbGl4Q29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdDb3ZpZC52aWV3LkhlbGl4Q29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8taGVsaXgtbWFpbmNvbnRhaW5lcicsICduZW8tdmlld3BvcnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1oZWxpeC1tYWluY29udGFpbmVyJywgJ25lby12aWV3cG9ydCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50fG51bGx9IGNvbnRyb2xsZXI9SGVsaXhDb250YWluZXJDb250cm9sbGVyXG4gICAgICAgICAqL1xuICAgICAgICBjb250cm9sbGVyOiBIZWxpeENvbnRhaW5lckNvbnRyb2xsZXIsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29tcG9uZW50LkhlbGl4fG51bGx9IGhlbGl4PW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGhlbGl4OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IGhlbGl4Q29uZmlnPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGhlbGl4Q29uZmlnOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IGxheW91dD17bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W118bnVsbH0gaXRlbXNcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgIGZsZXggIDogMSxcbiAgICAgICAgICAgIGl0ZW1zIDogW10sXG4gICAgICAgICAgICBsYXlvdXQ6ICdmaXQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogUGFuZWwsXG4gICAgICAgICAgICBjbHMgICAgICA6IFsnbmVvLWNvbmZpZ3VyYXRpb24tcGFuZWwnLCAnbmVvLXBhbmVsJywgJ25lby1jb250YWluZXInXSxcbiAgICAgICAgICAgIGxheW91dCAgIDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAgICAgcmVmZXJlbmNlOiAnY29udHJvbHMtcGFuZWwnLFxuICAgICAgICAgICAgc3R5bGUgICAgOiB7YmFja2dyb3VuZENvbG9yOiAnIzJiMmIyYid9LFxuICAgICAgICAgICAgd2lkdGggICAgOiAyNTAsXG5cbiAgICAgICAgICAgIGNvbnRhaW5lckNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7b3ZlcmZsb3dZOiAnc2Nyb2xsJ31cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGhlYWRlcnM6IFt7XG4gICAgICAgICAgICAgICAgZG9jayA6ICd0b3AnLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uQ29sbGFwc2VCdXR0b25DbGljaycsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdYJ1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGU6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgOiAnSGVsaXggQ29udHJvbHMnXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dLFxuXG4gICAgICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgICAgICBudHlwZSAgICAgICAgOiAncmFuZ2VmaWVsZCcsXG4gICAgICAgICAgICAgICAgZmxleCAgICAgICAgIDogJzAgMSBhdXRvJyxcbiAgICAgICAgICAgICAgICBsYWJlbFdpZHRoICAgOiAnMTAwcHgnLFxuICAgICAgICAgICAgICAgIHN0eWxlICAgICAgICA6IHtwYWRkaW5nOiAnMTBweCd9LFxuICAgICAgICAgICAgICAgIHVzZUlucHV0RXZlbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzICAgIDoge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6ICdvblJhbmdlZmllbGRDaGFuZ2UnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnVHJhbnNsYXRlIFgnLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMjAwMCxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IC0yMDAwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3RyYW5zbGF0ZVgnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogNDAwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnVHJhbnNsYXRlIFknLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMjUwMCxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IC0yNTAwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3RyYW5zbGF0ZVknLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogLTM1MFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogJ2NoYW5nZVRyYW5zbGF0ZVonLFxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1RyYW5zbGF0ZSBaJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDQ1MDAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAtNDUwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICd0cmFuc2xhdGVaJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IC0xNTAwLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2UgOiAnb25SYW5nZWZpZWxkQ2hhbmdlJyxcbiAgICAgICAgICAgICAgICAgICAgbW91bnRlZDogJ29uUmFuZ2VmaWVsZE1vdW50ZWQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dCA6ICdEZWx0YSBZJyxcbiAgICAgICAgICAgICAgICBsYWJlbEFsaWduOiAndG9wJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSAgOiA2MDAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgIDogLTYwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICAgOiAnZGVsdGFZJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICAgOiA3MFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogJ2NoYW5nZVJvdGF0aW9uJyxcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdSb3RhdGUnLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogLTcyMCxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDcyMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICdyb3RhdGlvbkFuZ2xlJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDAsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZSA6ICdvblJhbmdlZmllbGRDaGFuZ2UnLFxuICAgICAgICAgICAgICAgICAgICBtb3VudGVkOiAnb25SYW5nZWZpZWxkTW91bnRlZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnUmFkaXVzJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDM1MDAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiA5MDAsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAncmFkaXVzJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDE1MDBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdQZXJzcGVjdGl2ZScsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiA1MCxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDMwMDAsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAncGVyc3BlY3RpdmUnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogODAwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnSXRlbSBBbmdsZScsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAxLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMzYsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAnaXRlbUFuZ2xlJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDhcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdNYXggT3BhY2l0eScsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAnbWF4T3BhY2l0eScsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAwLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMTAwLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogODAgLy8gdG9kbzogbXVsdGktdGh1bWIgc2xpZGVyIFszMCwgODBdXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnTWluIE9wYWNpdHknLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ21pbk9wYWNpdHknLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogMCxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDEwMCxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDMwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGUgICAgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgaGFuZGxlciAgOiAnb25GbGlwSXRlbXNCdXR0b25DbGljaycsXG4gICAgICAgICAgICAgICAgdGV4dCAgICAgIDogJ0ZsaXAgSXRlbXMnLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge30sXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luOiAnMjBweCd9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGU6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgdGV4dCA6ICdTb3J0IEJ5OidcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAgICAgICAgIHN0eWxlIDoge21pbkhlaWdodDogJzEzNHB4JywgcGFkZGluZzogJzAnfSxcblxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcblxuICAgICAgICAgICAgICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG50eXBlICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uU29ydEJ1dHRvbkNsaWNrJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdjYXNlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ0Nhc2VzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpblRvcDogJzAnfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ2RlYXRocycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ0RlYXRocycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Cb3R0b206ICcxMHB4JywgbWFyZ2luVG9wOiAwfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ2NvdW50cnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdDb3VudHJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpblRvcDogMH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdyZWNvdmVyZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdSZWNvdmVyZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHttYXJnaW46ICcxMHB4JywgbWFyZ2luVG9wOiAwfVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ30sXG5cbiAgICAgICAgICAgICAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvblNvcnRCdXR0b25DbGljaydcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiAndG9kYXlDYXNlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ0Nhc2VzIHRvZGF5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpblRvcDogJzAnfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ3RvZGF5RGVhdGhzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiAnRGVhdGhzIHRvZGF5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpbkJvdHRvbTogJzEwcHgnLCBtYXJnaW5Ub3A6IDB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnY3JpdGljYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdDcml0aWNhbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Cb3R0b206ICc0M3B4JywgbWFyZ2luVG9wOiAwfVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGUgICAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVyICA6ICdvbkZvbGxvd1NlbGVjdGlvbkJ1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICBpY29uQ2xzICA6ICdmYSBmYS1zcXVhcmUnLFxuICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0ZvbGxvdyBTZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge30sXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luICAgICAgOiAnMjBweCcsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG1vZHVsZTogQm94TGFiZWwsXG4gICAgICAgICAgICAgICAgdGV4dCAgOiBbXG4gICAgICAgICAgICAgICAgICAgICc8Yj5OYXZpZ2F0aW9uIENvbmNlcHQ8L2I+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxwPkNsaWNrIG9uIGFuIGl0ZW0gdG8gc2VsZWN0IGl0LiBBZnRlcndhcmRzIHlvdSBjYW4gdXNlIHRoZSBBcnJvdyBLZXlzIHRvIHdhbGsgdGhyb3VnaCB0aGUgaXRlbXMuPC9wPicsXG4gICAgICAgICAgICAgICAgICAgICc8cD5IaXQgdGhlIFNwYWNlIEtleSB0byByb3RhdGUgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtIHRvIHRoZSBmcm9udC48L3A+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxwPkhpdCB0aGUgRW50ZXIgS2V5IHRvIGV4cGFuZCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0uPC9wPidcbiAgICAgICAgICAgICAgICBdLmpvaW4oJycpXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuaGVsaXggPSBOZW8uY3JlYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogSGVsaXgsXG4gICAgICAgICAgICByZWZlcmVuY2U6ICdoZWxpeCcsXG4gICAgICAgICAgICAuLi5tZS5oZWxpeENvbmZpZyB8fCB7fVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5pdGVtc1swXS5pdGVtcy5wdXNoKG1lLmhlbGl4KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEhlbGl4Q29udGFpbmVyKTtcblxuZXhwb3J0IHtIZWxpeENvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29tcG9uZW50Q29udHJvbGxlciBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udHJvbGxlci9Db21wb25lbnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgQ292aWQudmlldy5IZWxpeENvbnRhaW5lckNvbnRyb2xsZXJcbiAqIEBleHRlbmRzIE5lby5jb250cm9sbGVyLkNvbXBvbmVudFxuICovXG5jbGFzcyBIZWxpeENvbnRhaW5lckNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnRDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nQ292aWQudmlldy5IZWxpeENvbnRhaW5lckNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkLnZpZXcuSGVsaXhDb250YWluZXJDb250cm9sbGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb21wb25lbnQuSGVsaXh8bnVsbH0gaGVsaXhfPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaGVsaXhfOiBudWxsXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCB3aGVuIGFjY2Vzc2luZyB0aGUgaGVsaXggY29uZmlnXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkhlbGl4fG51bGx9IHZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZUdldEhlbGl4KHZhbHVlKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2hlbGl4ID0gdmFsdWUgPSB0aGlzLmdldFJlZmVyZW5jZSgnaGVsaXgnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Db2xsYXBzZUJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgY29uc3QgcGFuZWwgID0gdGhpcy5nZXRSZWZlcmVuY2UoJ2NvbnRyb2xzLXBhbmVsJyksXG4gICAgICAgICAgICAgIGV4cGFuZCA9IHBhbmVsLndpZHRoID09PSA0MDtcblxuICAgICAgICBwYW5lbC53aWR0aCA9IGV4cGFuZCA/IDI1MCA6IDQwO1xuXG4gICAgICAgIGRhdGEuY29tcG9uZW50LnRleHQgPSBleHBhbmQgPyAnWCcgOiAnKyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRmxpcEl0ZW1zQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmhlbGl4LmZsaXBwZWQgPSAhdGhpcy5oZWxpeC5mbGlwcGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkZvbGxvd1NlbGVjdGlvbkJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZGF0YS5jb21wb25lbnQ7XG5cbiAgICAgICAgaWYgKGJ1dHRvbi5pY29uQ2xzID09PSAnZmEgZmEtc3F1YXJlJykge1xuICAgICAgICAgICAgdGhpcy5oZWxpeC5mb2xsb3dTZWxlY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgYnV0dG9uLmljb25DbHMgPSAnZmEgZmEtY2hlY2stc3F1YXJlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGVsaXguZm9sbG93U2VsZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICBidXR0b24uaWNvbkNscyA9ICdmYSBmYS1zcXVhcmUnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uUmFuZ2VmaWVsZENoYW5nZShkYXRhKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkYXRhLmNvbXBvbmVudC5uYW1lO1xuXG4gICAgICAgIGlmIChbJ2RlbHRhWScsICdtYXhPcGFjaXR5JywgJ21pbk9wYWNpdHknXS5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgICAgICAgZGF0YS52YWx1ZSAvPSAxMDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhlbGl4W25hbWVdID0gZGF0YS52YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAqL1xuICAgIG9uUmFuZ2VmaWVsZE1vdW50ZWQoaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBOZW8uZ2V0Q29tcG9uZW50KGlkKTtcblxuICAgICAgICB0aGlzLmhlbGl4Lm9uKGZpZWxkLmV2ZW50TmFtZSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIGZpZWxkLm1pblZhbHVlKSwgZmllbGQubWF4VmFsdWUpO1xuICAgICAgICAgICAgZmllbGQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uU29ydEJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5oZWxpeC5zdG9yZS5zb3J0ZXJzID0gW3tcbiAgICAgICAgICAgIHByb3BlcnR5IDogZGF0YS5jb21wb25lbnQuZmllbGQsXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdERVNDJ1xuICAgICAgICB9XTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEhlbGl4Q29udGFpbmVyQ29udHJvbGxlcik7XG5cbmV4cG9ydCB7SGVsaXhDb250YWluZXJDb250cm9sbGVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBBdHRyaWJ1dGlvbkNvbXBvbmVudCAgICBmcm9tICcuL0F0dHJpYnV0aW9uQ29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgRm9vdGVyQ29udGFpbmVyICAgICAgICAgZnJvbSAnLi9Gb290ZXJDb250YWluZXIubWpzJztcbmltcG9ydCBHYWxsZXJ5Q29udGFpbmVyICAgICAgICBmcm9tICcuL0dhbGxlcnlDb250YWluZXIubWpzJztcbmltcG9ydCBIZWFkZXJDb250YWluZXIgICAgICAgICBmcm9tICcuL0hlYWRlckNvbnRhaW5lci5tanMnO1xuaW1wb3J0IEhlbGl4Q29udGFpbmVyICAgICAgICAgIGZyb20gJy4vSGVsaXhDb250YWluZXIubWpzJztcbmltcG9ydCBNYWluQ29udGFpbmVyQ29udHJvbGxlciBmcm9tICcuL01haW5Db250YWluZXJDb250cm9sbGVyLm1qcyc7XG5pbXBvcnQgTWFwYm94R2xDb250YWluZXIgICAgICAgZnJvbSAnLi9tYXBib3hHbC9Db250YWluZXIubWpzJztcbmltcG9ydCBUYWJDb250YWluZXIgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdGFiL0NvbnRhaW5lci5tanMnO1xuaW1wb3J0IFRhYmxlQ29udGFpbmVyICAgICAgICAgIGZyb20gJy4vVGFibGVDb250YWluZXIubWpzJztcbmltcG9ydCBWaWV3cG9ydCAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL1ZpZXdwb3J0Lm1qcyc7XG5pbXBvcnQgV29ybGRNYXBDb250YWluZXIgICAgICAgZnJvbSAnLi9Xb3JsZE1hcENvbnRhaW5lci5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb3ZpZC52aWV3Lk1haW5Db250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuVmlld3BvcnRcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lciBleHRlbmRzIFZpZXdwb3J0IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nQ292aWQudmlldy5NYWluQ29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdDb3ZpZC52aWV3Lk1haW5Db250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXV0b01vdW50PXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGF1dG9Nb3VudDogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBjbHM9Wydjb3ZpZC12aWV3cG9ydCcsICduZW8tdmlld3BvcnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ2NvdmlkLXZpZXdwb3J0JywgJ25lby12aWV3cG9ydCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50fSBjb250cm9sbGVyPU1haW5Db250YWluZXJDb250cm9sbGVyXG4gICAgICAgICAqL1xuICAgICAgICBjb250cm9sbGVyOiBNYWluQ29udGFpbmVyQ29udHJvbGxlcixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtc1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFtIZWFkZXJDb250YWluZXIsIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogVGFiQ29udGFpbmVyLFxuICAgICAgICAgICAgZmxleCAgICAgOiAxLFxuICAgICAgICAgICAgcmVmZXJlbmNlOiAndGFiLWNvbnRhaW5lcicsXG4gICAgICAgICAgICBzb3J0YWJsZSA6IHRydWUsXG4gICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW46ICcxMHB4JywgbWFyZ2luVG9wOiAwfSxcblxuICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgICAgICAgOiBUYWJsZUNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICByZWZlcmVuY2UgICAgICA6ICd0YWJsZS1jb250YWluZXInLFxuICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtdGFibGUnLFxuICAgICAgICAgICAgICAgICAgICByb3V0ZSAgOiAnbWFpbnZpZXc9dGFibGUnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnVGFibGUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgICAgICAgIDogTWFwYm94R2xDb250YWluZXIsXG4gICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1nbG9iZS1hbWVyaWNhcycsXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICA6ICdtYWludmlldz1tYXBib3hnbG1hcCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdNYXBib3ggR0wgTWFwJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgICAgICAgICA6IFdvcmxkTWFwQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtZ2xvYmUtYW1lcmljYXMnLFxuICAgICAgICAgICAgICAgICAgICByb3V0ZSAgOiAnbWFpbnZpZXc9d29ybGRtYXAnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnV29ybGQgTWFwJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgICAgICAgICA6IEdhbGxlcnlDb250YWluZXIsXG4gICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1pbWFnZXMnLFxuICAgICAgICAgICAgICAgICAgICByb3V0ZSAgOiAnbWFpbnZpZXc9Z2FsbGVyeScsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdHYWxsZXJ5J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgICAgICAgICA6IEhlbGl4Q29udGFpbmVyLFxuICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtZG5hJyxcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgIDogJ21haW52aWV3PWhlbGl4JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ0hlbGl4J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgICAgICAgICA6IEF0dHJpYnV0aW9uQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZSAgICAgIDogJ2F0dHJpYnV0aW9uJyxcbiAgICAgICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWNvcHlyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICA6ICdtYWludmlldz1hdHRyaWJ1dGlvbicsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdBdHRyaWJ1dGlvbidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XVxuICAgICAgICB9LCBGb290ZXJDb250YWluZXJdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsYXlvdXQ9e250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5Db250YWluZXIpO1xuXG5leHBvcnQge01haW5Db250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbXBvbmVudENvbnRyb2xsZXIgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRyb2xsZXIvQ29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9BcnJheS5tanMnO1xuaW1wb3J0IFV0aWwgICAgICAgICAgICAgICAgZnJvbSAnLi4vVXRpbC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb3ZpZC52aWV3Lk1haW5Db250YWluZXJDb250cm9sbGVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udHJvbGxlci5Db21wb25lbnRcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnRDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nQ292aWQudmlldy5NYWluQ29udGFpbmVyQ29udHJvbGxlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQudmlldy5NYWluQ29udGFpbmVyQ29udHJvbGxlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdtYWluY29udGFpbmVyLWNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbWFpbmNvbnRhaW5lci1jb250cm9sbGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gYWN0aXZlTWFpblRhYkluZGV4PTBcbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2ZU1haW5UYWJJbmRleDogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYXBpU3VtbWFyeVVybD0naHR0cHM6Ly9kaXNlYXNlLnNoL3YyL2FsbCdcbiAgICAgICAgICovXG4gICAgICAgIGFwaVN1bW1hcnlVcmw6ICdodHRwczovL2Rpc2Vhc2Uuc2gvdjIvYWxsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYXBpVXJsPSdodHRwczovL2Rpc2Vhc2Uuc2gvdjIvY291bnRyaWVzJ1xuICAgICAgICAgKi9cbiAgICAgICAgYXBpVXJsOiAnaHR0cHM6Ly9kaXNlYXNlLnNoL3YyL2NvdW50cmllcycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gY291bnRyeVJlY29yZD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBjb3VudHJ5UmVjb3JkOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W118bnVsbH0gZGF0YT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IG1haW5UYWJzPVsndGFibGUnLCAnbWFwYm94Z2xtYXAnLCAnd29ybGRtYXAnLCAnZ2FsbGVyeScsICdoZWxpeCcsICdhdHRyaWJ1dGlvbiddXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG1haW5UYWJzOiBbJ3RhYmxlJywnbWFwYm94Z2xtYXAnLCAnd29ybGRtYXAnLCAnZ2FsbGVyeScsICdoZWxpeCcsICdhdHRyaWJ1dGlvbiddLFxuICAgICAgICAvKipcbiAgICAgICAgICogRmxhZyB0byBvbmx5IGxvYWQgdGhlIG1hcCBvbmNlIG9uSGFzaENoYW5nZSwgYnV0IGFsd2F5cyBvbiByZWxvYWQgYnV0dG9uIGNsaWNrXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1hcGJveGdsTWFwSGFzRGF0YT1mYWxzZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBtYXBib3hnbE1hcEhhc0RhdGE6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBzdW1tYXJ5RGF0YT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzdW1tYXJ5RGF0YTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZsYWcgdG8gb25seSBsb2FkIHRoZSBtYXAgb25jZSBvbkhhc2hDaGFuZ2UsIGJ1dCBhbHdheXMgb24gcmVsb2FkIGJ1dHRvbiBjbGlja1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSB3b3JsZE1hcEhhc0RhdGE9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgd29ybGRNYXBIYXNEYXRhOiBmYWxzZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUubG9hZERhdGEoKTtcbiAgICAgICAgbWUubG9hZFN1bW1hcnlEYXRhKCk7XG5cbiAgICAgICAgbWUuY29tcG9uZW50Lm9uKCdtb3VudGVkJywgbWUub25NYWluVmlld01vdW50ZWQsIG1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IGRhdGFcbiAgICAgKi9cbiAgICBhZGRTdG9yZUl0ZW1zKGRhdGEpIHtcbiAgICAgICAgY29uc3QgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgY291bnRyeVN0b3JlID0gbWUuZ2V0UmVmZXJlbmNlKCdjb3VudHJ5LWZpZWxkJykuc3RvcmUsXG4gICAgICAgICAgICAgIHJlZmVyZW5jZSAgICA9IG1lLm1haW5UYWJzW21lLmFjdGl2ZU1haW5UYWJJbmRleF0sXG4gICAgICAgICAgICAgIGFjdGl2ZVRhYiAgICA9IG1lLmdldFJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICAgIC8vIHdvcmxkb21ldGVyIGFkZGVkIHdvcmxkIGFzIGEgY291bnRyeVxuICAgICAgICAvLyBtaWdodCBnZXQgcmVtb3ZlZCBieSB0aGUgTm92ZWxDb3ZpZCBBUElcbiAgICAgICAgaWYgKGRhdGFbMF0gJiYgZGF0YVswXS5jb3VudHJ5ID09PSAnV29ybGQnKSB7XG4gICAgICAgICAgICBjb25zdCB3b3JsZERhdGEgPSBkYXRhLnNoaWZ0KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh3b3JsZERhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uY291bnRyeS5pbmNsdWRlcygnXCInKSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uY291bnRyeSA9IGl0ZW0uY291bnRyeS5yZXBsYWNlKCdcIicsIFwiXFwnXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdGVtLmNhc2VzUGVyT25lTWlsbGlvbiA9IGl0ZW0uY2FzZXNQZXJPbmVNaWxsaW9uID4gaXRlbS5jYXNlcyA/ICdOL0EnIDogaXRlbS5jYXNlc1Blck9uZU1pbGxpb24gfHwgMDtcbiAgICAgICAgICAgIGl0ZW0uaW5mZWN0ZWQgICAgICAgICAgID0gaXRlbS5jYXNlc1Blck9uZU1pbGxpb247XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmRhdGEgPSBkYXRhO1xuXG4gICAgICAgIGlmIChjb3VudHJ5U3RvcmUuZ2V0Q291bnQoKSA8IDEpIHtcbiAgICAgICAgICAgIG1lLmdldFJlZmVyZW5jZSgnY291bnRyeS1maWVsZCcpLnN0b3JlLmRhdGEgPSBkYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFsnZ2FsbGVyeScsICdoZWxpeCcsICd0YWJsZSddLmluY2x1ZGVzKHJlZmVyZW5jZSkpIHtcbiAgICAgICAgICAgIGFjdGl2ZVRhYi5zdG9yZS5kYXRhID0gZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKHJlZmVyZW5jZSA9PT0gJ21hcGJveGdsbWFwJykge1xuICAgICAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdtYXBib3hnbG1hcCcpLmRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgbWUubWFwYm94Z2xNYXBIYXNEYXRhID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKHJlZmVyZW5jZSA9PT0gJ3dvcmxkbWFwJykge1xuICAgICAgICAgICAgYWN0aXZlVGFiLmxvYWREYXRhKGRhdGEpO1xuICAgICAgICAgICAgbWUud29ybGRNYXBIYXNEYXRhID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS5hY3RpdmVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS5jYXNlc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLmRlYXRoc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLnJlY292ZXJlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLnVwZGF0ZWQgLy8gdGltZXN0YW1wXG4gICAgICovXG4gICAgYXBwbHlTdW1tYXJ5RGF0YShkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29udGFpbmVyID0gbWUuZ2V0UmVmZXJlbmNlKCd0b3RhbC1zdGF0cycpLFxuICAgICAgICAgICAgdmRvbSAgICAgID0gY29udGFpbmVyLnZkb207XG5cbiAgICAgICAgbWUuc3VtbWFyeURhdGEgPSBkYXRhO1xuXG4gICAgICAgIHZkb20uY25bMF0uY25bMV0uaHRtbCA9IFV0aWwuZm9ybWF0TnVtYmVyKHt2YWx1ZTogZGF0YS5jYXNlc30pO1xuICAgICAgICB2ZG9tLmNuWzFdLmNuWzFdLmh0bWwgPSBVdGlsLmZvcm1hdE51bWJlcih7dmFsdWU6IGRhdGEuYWN0aXZlfSk7XG4gICAgICAgIHZkb20uY25bMl0uY25bMV0uaHRtbCA9IFV0aWwuZm9ybWF0TnVtYmVyKHt2YWx1ZTogZGF0YS5yZWNvdmVyZWR9KTtcbiAgICAgICAgdmRvbS5jblszXS5jblsxXS5odG1sID0gVXRpbC5mb3JtYXROdW1iZXIoe3ZhbHVlOiBkYXRhLmRlYXRoc30pO1xuXG4gICAgICAgIGNvbnRhaW5lci52ZG9tID0gdmRvbTtcblxuICAgICAgICBjb250YWluZXIgPSBtZS5nZXRSZWZlcmVuY2UoJ2xhc3QtdXBkYXRlJyk7XG4gICAgICAgIHZkb20gICAgICA9IGNvbnRhaW5lci52ZG9tO1xuXG4gICAgICAgIHZkb20uaHRtbCA9ICdMYXN0IFVwZGF0ZTogJyArIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdkZWZhdWx0Jywge1xuICAgICAgICAgICAgaG91ciAgOiAnbnVtZXJpYycsXG4gICAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnXG4gICAgICAgIH0pLmZvcm1hdChuZXcgRGF0ZShkYXRhLnVwZGF0ZWQpKTtcblxuICAgICAgICBjb250YWluZXIudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjb3JkXG4gICAgICovXG4gICAgY2xlYXJDb3VudHJ5RmllbGQocmVjb3JkKSB7XG4gICAgICAgIHRoaXMuZ2V0UmVmZXJlbmNlKCdjb3VudHJ5LWZpZWxkJykuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoT2JqZWN0XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGhhc2hPYmplY3QubWFpbnZpZXdcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldFRhYkluZGV4KGhhc2hPYmplY3QpIHtcbiAgICAgICAgaWYgKCFoYXNoT2JqZWN0IHx8ICFoYXNoT2JqZWN0Lm1haW52aWV3KSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLm1haW5UYWJzLmluZGV4T2YoaGFzaE9iamVjdC5tYWludmlldyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdGFiSW5kZXhcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlfVxuICAgICAqL1xuICAgIGdldFZpZXcodGFiSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVmZXJlbmNlKHRoaXMubWFpblRhYnNbdGFiSW5kZXhdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGxvYWREYXRhKCkge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgZmV0Y2gobWUuYXBpVXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBtZS5hZGRTdG9yZUl0ZW1zKGRhdGEpKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnQ2Fu4oCZdCBhY2Nlc3MgJyArIG1lLmFwaVVybCwgZXJyKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBsb2FkU3VtbWFyeURhdGEoKSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBmZXRjaChtZS5hcGlTdW1tYXJ5VXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBtZS5hcHBseVN1bW1hcnlEYXRhKGRhdGEpKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnQ2Fu4oCZdCBhY2Nlc3MgJyArIG1lLmFwaVN1bW1hcnlVcmwsIGVycikpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFtZS5zdW1tYXJ5RGF0YSkge1xuICAgICAgICAgICAgICAgIG1lLm9uTG9hZFN1bW1hcnlEYXRhRmFpbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAyMDAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ291bnRyeUZpZWxkQ2xlYXIoKSB7XG4gICAgICAgIHRoaXMuY291bnRyeVJlY29yZCA9IG51bGw7XG5cbiAgICAgICAgTmVvLk1haW4uZWRpdFJvdXRlKHtcbiAgICAgICAgICAgIGNvdW50cnk6IG51bGxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uQ291bnRyeUZpZWxkU2VsZWN0KGRhdGEpIHtcbiAgICAgICAgdGhpcy5jb3VudHJ5UmVjb3JkID0gZGF0YS5yZWNvcmQ7XG5cbiAgICAgICAgTmVvLk1haW4uZWRpdFJvdXRlKHtcbiAgICAgICAgICAgIGNvdW50cnk6IGRhdGEudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2xkVmFsdWVcbiAgICAgKi9cbiAgICBvbkhhc2hDaGFuZ2UodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBhY3RpdmVJbmRleCAgICAgICA9IG1lLmdldFRhYkluZGV4KHZhbHVlLmhhc2gpLFxuICAgICAgICAgICAgY291bnRyeSAgICAgICAgICAgPSB2YWx1ZS5oYXNoICYmIHZhbHVlLmhhc2guY291bnRyeSxcbiAgICAgICAgICAgIGNvdW50cnlGaWVsZCAgICAgID0gbWUuZ2V0UmVmZXJlbmNlKCdjb3VudHJ5LWZpZWxkJyksXG4gICAgICAgICAgICB0YWJDb250YWluZXIgICAgICA9IG1lLmdldFJlZmVyZW5jZSgndGFiLWNvbnRhaW5lcicpLFxuICAgICAgICAgICAgYWN0aXZlVmlldyAgICAgICAgPSBtZS5nZXRWaWV3KGFjdGl2ZUluZGV4KSxcbiAgICAgICAgICAgIHNlbGVjdGlvbk1vZGVsICAgID0gYWN0aXZlVmlldy5zZWxlY3Rpb25Nb2RlbCxcbiAgICAgICAgICAgIGRlbGF5U2VsZWN0aW9uICAgID0gIW1lLmRhdGEgPyAxMDAwIDogdGFiQ29udGFpbmVyLmFjdGl2ZUluZGV4ICE9PSBhY3RpdmVJbmRleCA/IDEwMCA6IDAsXG4gICAgICAgICAgICBpZDtcblxuICAgICAgICB0YWJDb250YWluZXIuYWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleDtcbiAgICAgICAgbWUuYWN0aXZlTWFpblRhYkluZGV4ICAgID0gYWN0aXZlSW5kZXg7XG5cbiAgICAgICAgaWYgKGFjdGl2ZVZpZXcubnR5cGUgPT09ICdoZWxpeCcpIHtcbiAgICAgICAgICAgIGFjdGl2ZVZpZXcuZ2V0T2Zmc2V0VmFsdWVzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0b2RvOiB0aGlzIHdpbGwgb25seSBsb2FkIGVhY2ggc3RvcmUgb25jZS4gYWRqdXN0IHRoZSBsb2dpYyBpbiBjYXNlIHdlIHdhbnQgdG8gc3VwcG9ydCByZWxvYWRpbmcgdGhlIEFQSVxuXG4gICAgICAgIGlmIChtZS5kYXRhICYmIGFjdGl2ZVZpZXcuc3RvcmUgJiYgYWN0aXZlVmlldy5zdG9yZS5nZXRDb3VudCgpIDwgMSkge1xuICAgICAgICAgICAgYWN0aXZlVmlldy5zdG9yZS5kYXRhID0gbWUuZGF0YTtcbiAgICAgICAgICAgIGRlbGF5U2VsZWN0aW9uID0gNTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdG9kbzogaHR0cHM6Ly9naXRodWIuY29tL25lb21qcy9uZW8vaXNzdWVzLzQ4M1xuICAgICAgICAvLyBxdWljayBoYWNrLiBzZWxlY3Rpb25Nb2RlbHMgdXBkYXRlIHRoZSB2ZG9tIG9mIHRoZSB0YWJsZS5Db250YWluZXIuXG4gICAgICAgIC8vIGlmIHRhYmxlLlZpZXcgaXMgdmRvbSB1cGRhdGluZywgdGhpcyBjYW4gcmVzdWx0IGluIGEgMnggcmVuZGVyaW5nIG9mIGFsbCByb3dzLlxuICAgICAgICBpZiAoZGVsYXlTZWxlY3Rpb24gPT09IDEwMDAgJiYgYWN0aXZlVmlldy5udHlwZSA9PT0gJ3RhYmxlLWNvbnRhaW5lcicpIHtcbiAgICAgICAgICAgIGRlbGF5U2VsZWN0aW9uID0gMjAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3RpdmVWaWV3Lm50eXBlID09PSAnbWFwYm94Z2wnICYmIG1lLmRhdGEpIHtcbiAgICAgICAgICAgIGlmICghbWUubWFwYm94Z2xNYXBIYXNEYXRhKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlVmlldy5kYXRhID0gbWUuZGF0YTtcbiAgICAgICAgICAgICAgICBtZS5tYXBib3hnbE1hcEhhc0RhdGEgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb3VudHJ5RmllbGQuZ2V0UmVjb3JkKCkpO1xuXG4gICAgICAgICAgICBpZiAobWUuY291bnRyeVJlY29yZCkge1xuICAgICAgICAgICAgICAgIE1haW5Db250YWluZXJDb250cm9sbGVyLnNlbGVjdE1hcGJveEdsQ291bnRyeShhY3RpdmVWaWV3LCBtZS5jb3VudHJ5UmVjb3JkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWN0aXZlVmlldy5hdXRvUmVzaXplKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aXZlVmlldy5udHlwZSA9PT0gJ2NvdmlkLXdvcmxkLW1hcCcgJiYgbWUuZGF0YSkge1xuICAgICAgICAgICAgaWYgKCFtZS53b3JsZE1hcEhhc0RhdGEpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVWaWV3LmxvYWREYXRhKG1lLmRhdGEpO1xuICAgICAgICAgICAgICAgIG1lLndvcmxkTWFwSGFzRGF0YSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB0b2RvOiBpbnN0ZWFkIG9mIGEgdGltZW91dCB0aGlzIHNob3VsZCBhZGQgYSBzdG9yZSBsb2FkIGxpc3RlbmVyIChzaW5nbGU6IHRydWUpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobWUuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeUZpZWxkLnZhbHVlID0gY291bnRyeTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmNvdW50cnkgPSAnYWxsJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChhY3RpdmVWaWV3Lm50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdnYWxsZXJ5JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRyeSAmJiAhc2VsZWN0aW9uTW9kZWwuaXNTZWxlY3RlZChjb3VudHJ5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25Nb2RlbC5zZWxlY3QoY291bnRyeSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2hlbGl4JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRyeSAmJiAhc2VsZWN0aW9uTW9kZWwuaXNTZWxlY3RlZChjb3VudHJ5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25Nb2RlbC5zZWxlY3QoY291bnRyeSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVWaWV3Lm9uS2V5RG93blNwYWNlKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RhYmxlLWNvbnRhaW5lcic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSBzZWxlY3Rpb25Nb2RlbC5nZXRSb3dJZChhY3RpdmVWaWV3LnN0b3JlLmluZGV4T2YoY291bnRyeSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCd0YWJsZS1jb250YWluZXInKS5maXJlKCdjb3VudHJ5U2VsZWN0Jywge3JlY29yZDogYWN0aXZlVmlldy5zdG9yZS5nZXQoY291bnRyeSl9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3VudHJ5ICYmICFzZWxlY3Rpb25Nb2RlbC5pc1NlbGVjdGVkKGlkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25Nb2RlbC5zZWxlY3QoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZW8ubWFpbi5Eb21BY2Nlc3Muc2Nyb2xsVG9UYWJsZVJvdyh7aWQ6IGlkfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZGVsYXlTZWxlY3Rpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkxvYWRTdW1tYXJ5RGF0YUZhaWwoKSB7XG4gICAgICAgIGNvbnN0IHRhYmxlID0gdGhpcy5nZXRSZWZlcmVuY2UoJ3RhYmxlJyksXG4gICAgICAgICAgICAgIHZkb20gPSB0YWJsZS52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMF0uY25bMV0uY24ucHVzaCh7XG4gICAgICAgICAgICB0YWcgIDogJ2RpdicsXG4gICAgICAgICAgICBjbHMgIDogWyduZW8tYm94LWxhYmVsJywgJ25lby1sYWJlbCddLFxuICAgICAgICAgICAgaHRtbCA6IFtcbiAgICAgICAgICAgICAgICAnU3VtbWFyeSBkYXRhIGRpZCBub3QgYXJyaXZlIGFmdGVyIDJzLjwvYnI+JyxcbiAgICAgICAgICAgICAgICAnUGxlYXNlIGRvdWJsZS1jaGVjayBpZiB0aGUgQVBJIGlzIG9mZmxpbmU6PC9icj48L2JyPicsXG4gICAgICAgICAgICAgICAgJzxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2Rpc2Vhc2Uuc2gvYWxsXCI+Tm92ZWxDT1ZJRC9BUEkgYWxsIGVuZHBvaW50PC9hPjwvYnI+PC9icj4nLFxuICAgICAgICAgICAgICAgICdhbmQgaWYgc28gcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nXG4gICAgICAgICAgICBdLmpvaW4oJycpLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcyMHB4J1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0YWJsZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uTWFpblZpZXdNb3VudGVkKCkge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmFkZFNjcmlwdCh7XG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgIGRlZmVyOiB0cnVlLFxuICAgICAgICAgICAgc3JjICA6ICdodHRwczovL2J1dHRvbnMuZ2l0aHViLmlvL2J1dHRvbnMuanMnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmdldFJlZmVyZW5jZSgnZ2FsbGVyeScpICAgICAgLm9uKCdzZWxlY3QnLCBtZS51cGRhdGVDb3VudHJ5RmllbGQsIG1lKTtcbiAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdoZWxpeCcpICAgICAgICAub24oJ3NlbGVjdCcsIG1lLnVwZGF0ZUNvdW50cnlGaWVsZCwgbWUpO1xuICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ3RhYi1jb250YWluZXInKS5vbignbW92ZVRvJywgbWUub25UYWJNb3ZlLCAgICAgICAgICBtZSk7XG5cbiAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCd0YWJsZScpLm9uKHtcbiAgICAgICAgICAgIGRlc2VsZWN0OiBtZS5jbGVhckNvdW50cnlGaWVsZCxcbiAgICAgICAgICAgIHNlbGVjdCAgOiBtZS51cGRhdGVDb3VudHJ5RmllbGQsXG4gICAgICAgICAgICBzY29wZSAgIDogbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvblJlbG9hZERhdGFCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICAgICAgdGhpcy5sb2FkU3VtbWFyeURhdGEoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uUmVtb3ZlRm9vdGVyQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICBjb25zdCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICBhY3RpdmVUYWIgPSBtZS5nZXRSZWZlcmVuY2UoJ3RhYi1jb250YWluZXInKS5nZXRBY3RpdmVDYXJkKCk7XG5cbiAgICAgICAgbWUuY29tcG9uZW50LnJlbW92ZShtZS5nZXRSZWZlcmVuY2UoJ2Zvb3RlcicpLCB0cnVlKTtcblxuICAgICAgICBpZiAoYWN0aXZlVGFiLm50eXBlID09PSAnY292aWQtbWFwYm94Z2wtY29udGFpbmVyJykge1xuICAgICAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdtYXBib3hnbG1hcCcpLmF1dG9SZXNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Td2l0Y2hUaGVtZUJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBidXR0b24gICAgPSBkYXRhLmNvbXBvbmVudCxcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IG1lLmNvbXBvbmVudCxcbiAgICAgICAgICAgIGxvZ28gICAgICA9IG1lLmdldFJlZmVyZW5jZSgnbG9nbycpLFxuICAgICAgICAgICAgbG9nb1BhdGggID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9uZW9tanMvcGFnZXMvbWFzdGVyL3Jlc291cmNlcy9pbWFnZXMvYXBwcy9jb3ZpZC8nLFxuICAgICAgICAgICAgbWFwVmlldyAgID0gbWUuZ2V0UmVmZXJlbmNlKCdtYXBib3hnbG1hcCcpLFxuICAgICAgICAgICAgdmRvbSAgICAgID0gbG9nby52ZG9tLFxuICAgICAgICAgICAgYnV0dG9uVGV4dCwgY2xzLCBocmVmLCBpY29uQ2xzLCBtYXBWaWV3U3R5bGUsIHRoZW1lO1xuXG4gICAgICAgIGlmIChidXR0b24udGV4dCA9PT0gJ1RoZW1lIExpZ2h0Jykge1xuICAgICAgICAgICAgYnV0dG9uVGV4dCAgID0gJ1RoZW1lIERhcmsnO1xuICAgICAgICAgICAgaHJlZiAgICAgICAgID0gJy4uL2Rpc3QvZGV2ZWxvcG1lbnQvbmVvLXRoZW1lLWxpZ2h0LW5vLWNzcy12YXJzLmNzcyc7XG4gICAgICAgICAgICBpY29uQ2xzICAgICAgPSAnZmEgZmEtbW9vbic7XG4gICAgICAgICAgICBtYXBWaWV3U3R5bGUgPSBtYXBWaWV3Lm1hcGJveFN0eWxlTGlnaHQ7XG4gICAgICAgICAgICB0aGVtZSAgICAgICAgPSAnbmVvLXRoZW1lLWxpZ2h0JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvblRleHQgICA9ICdUaGVtZSBMaWdodCc7XG4gICAgICAgICAgICBocmVmICAgICAgICAgPSAnLi4vZGlzdC9kZXZlbG9wbWVudC9uZW8tdGhlbWUtZGFyay1uby1jc3MtdmFycy5jc3MnO1xuICAgICAgICAgICAgaWNvbkNscyAgICAgID0gJ2ZhIGZhLXN1bic7XG4gICAgICAgICAgICBtYXBWaWV3U3R5bGUgPSBtYXBWaWV3Lm1hcGJveFN0eWxlRGFyaztcbiAgICAgICAgICAgIHRoZW1lICAgICAgICA9ICduZW8tdGhlbWUtZGFyayc7XG4gICAgICAgIH1cblxuICAgICAgICB2ZG9tLnNyYyA9IGxvZ29QYXRoICsgKHRoZW1lID09PSAnbmVvLXRoZW1lLWRhcmsnID8gJ2NvdmlkX2xvZ29fZGFyay5qcGcnIDogJ2NvdmlkX2xvZ29fbGlnaHQuanBnJyk7XG4gICAgICAgIGxvZ28udmRvbSA9IHZkb207XG5cblxuICAgICAgICBpZiAoTmVvLmNvbmZpZy51c2VDc3NWYXJzKSB7XG4gICAgICAgICAgICBjbHMgPSBbLi4uY29tcG9uZW50LmNsc107XG5cbiAgICAgICAgICAgIGNvbXBvbmVudC5jbHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pbmNsdWRlcygnbmVvLXRoZW1lJykpIHtcbiAgICAgICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIE5lb0FycmF5LmFkZChjbHMsIHRoZW1lKTtcbiAgICAgICAgICAgIGNvbXBvbmVudC5jbHMgPSBjbHM7XG5cbiAgICAgICAgICAgIGJ1dHRvbi5zZXQoe1xuICAgICAgICAgICAgICAgIGljb25DbHM6IGljb25DbHMsXG4gICAgICAgICAgICAgICAgdGV4dCAgIDogYnV0dG9uVGV4dFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBOZW8ubWFpbi5hZGRvbi5TdHlsZXNoZWV0LnN3YXBTdHlsZVNoZWV0KHtcbiAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgICAgICAgIGlkICA6ICduZW8tdGhlbWUnXG4gICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi50ZXh0ID0gYnV0dG9uVGV4dDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFwVmlldy5tYXBib3hTdHlsZSA9IG1hcFZpZXdTdHlsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uVGFiTW92ZShkYXRhKSB7XG4gICAgICAgIE5lb0FycmF5Lm1vdmUodGhpcy5tYWluVGFicywgZGF0YS5mcm9tSW5kZXgsIGRhdGEudG9JbmRleCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmlld1xuICAgICAqIEBwYXJhbSByZWNvcmRcbiAgICAgKi9cbiAgICBzdGF0aWMgc2VsZWN0TWFwYm94R2xDb3VudHJ5KHZpZXcsIHJlY29yZCkge2NvbnNvbGUubG9nKHJlY29yZC5jb3VudHJ5SW5mby5pc28yKTtcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL25lb21qcy9uZW8vaXNzdWVzLzQ5MFxuICAgICAgICAvLyB0aGVyZSBhcmUgbWlzc2luZyBpc28yJjMgdmFsdWVzIG9uIG5hdHVyYWwgZWFydGggdmVjdG9yXG4gICAgICAgIGNvbnN0IG1hcCA9IHtcbiAgICAgICAgICAgIEZSQSAgICA6IFsnbWF0Y2gnLCBbJ2dldCcsICdOQU1FJ10sIFsnRnJhbmNlJ10sIHRydWUsIGZhbHNlXSxcbiAgICAgICAgICAgIE5PUiAgICA6IFsnbWF0Y2gnLCBbJ2dldCcsICdOQU1FJ10sIFsnTm9yd2F5J10sIHRydWUsIGZhbHNlXSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFsnbWF0Y2gnLCBbJ2dldCcsICdJU09fQTMnXSwgW3JlY29yZC5jb3VudHJ5SW5mby5pc28zXSwgdHJ1ZSwgZmFsc2VdXG4gICAgICAgIH07XG5cbiAgICAgICAgdmlldy5zZXRGaWx0ZXIoe1xuICAgICAgICAgICAgbGF5ZXJJZDogJ25lLTEwbS1hZG1pbi0wLWNvdW50cmllcy00czdydmYnLFxuICAgICAgICAgICAgdmFsdWUgIDogbWFwW3JlY29yZC5jb3VudHJ5SW5mby5pc28zXSB8fCBtYXBbJ2RlZmF1bHQnXVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHZpZXcuZmx5VG8oe1xuICAgICAgICAgICAgbGF0OiByZWNvcmQuY291bnRyeUluZm8ubGF0LFxuICAgICAgICAgICAgbG5nOiByZWNvcmQuY291bnRyeUluZm8ubG9uZ1xuICAgICAgICB9KTtcblxuICAgICAgICB2aWV3Lnpvb20gPSA1OyAvLyB0b2RvOiB3ZSBjb3VsZCB1c2UgYSBkaWZmZXJlbnQgdmFsdWUgZm9yIGJpZyBjb3VudHJpZXMgKFJ1c3NpYSwgVVNBLC4uLilcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEucmVjb3JkXG4gICAgICovXG4gICAgdXBkYXRlQ291bnRyeUZpZWxkKGRhdGEpIHtcbiAgICAgICAgTmVvLk1haW4uZWRpdFJvdXRlKHtcbiAgICAgICAgICAgIGNvdW50cnk6IGRhdGEucmVjb3JkLmNvdW50cnlcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyQ29udHJvbGxlcik7XG5cbmV4cG9ydCB7TWFpbkNvbnRhaW5lckNvbnRyb2xsZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENoZWNrQm94ICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9DaGVja0JveC5tanMnO1xuaW1wb3J0IENvbnRhaW5lciAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBIaXN0b3JpY2FsRGF0YVRhYmxlICAgICAgZnJvbSAnLi9jb3VudHJ5L0hpc3RvcmljYWxEYXRhVGFibGUubWpzJztcbmltcG9ydCBMaW5lQ2hhcnRDb21wb25lbnQgICAgICAgZnJvbSAnLi9jb3VudHJ5L0xpbmVDaGFydENvbXBvbmVudC5tanMnXG5pbXBvcnQgUGFuZWwgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250YWluZXIvUGFuZWwubWpzJztcbmltcG9ydCBUYWJDb250YWluZXIgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3RhYi9Db250YWluZXIubWpzJztcbmltcG9ydCBUYWJsZSAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9jb3VudHJ5L1RhYmxlLm1qcyc7XG5pbXBvcnQgVGFibGVDb250YWluZXJDb250cm9sbGVyIGZyb20gJy4vVGFibGVDb250YWluZXJDb250cm9sbGVyLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLnZpZXcuVGFibGVDb250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBUYWJsZUNvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0NvdmlkLnZpZXcuVGFibGVDb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkLnZpZXcuVGFibGVDb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXV0b01vdW50PXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGF1dG9Nb3VudDogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb250cm9sbGVyLkNvbXBvbmVudHxudWxsfSBjb250cm9sbGVyPVRhYmxlQ29udGFpbmVyQ29udHJvbGxlclxuICAgICAgICAgKi9cbiAgICAgICAgY29udHJvbGxlcjogVGFibGVDb250YWluZXJDb250cm9sbGVyLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBoaXN0b3J5UGFuZWxXaWR0aD01MjBcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaGlzdG9yeVBhbmVsV2lkdGg6IDUyMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby50YWJsZS5Db250YWluZXJ8bnVsbH0gdGFibGU9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdGFibGU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gdGFibGVDb25maWc9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdGFibGVDb25maWc6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gbGF5b3V0PXtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgICAgICAgKi9cbiAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXXxudWxsfSBpdGVtc1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgZmxleCAgOiAxLFxuICAgICAgICAgICAgbGF5b3V0OiAnZml0JyxcbiAgICAgICAgICAgIGl0ZW1zIDogW11cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgOiBQYW5lbCxcbiAgICAgICAgICAgIGNscyAgICAgIDogWyduZW8tY29uZmlndXJhdGlvbi1wYW5lbCcsICduZW8tcGFuZWwnLCAnbmVvLWNvbnRhaW5lciddLFxuICAgICAgICAgICAgbGF5b3V0ICAgOiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgICAgICByZWZlcmVuY2U6ICdjb250cm9scy1wYW5lbCcsXG4gICAgICAgICAgICBzdHlsZSAgICA6IHtiYWNrZ3JvdW5kQ29sb3I6ICcjMmIyYjJiJ30sXG4gICAgICAgICAgICB3aWR0aCAgICA6ICdAY29uZmlnOmhpc3RvcnlQYW5lbFdpZHRoJyxcblxuICAgICAgICAgICAgY29udGFpbmVyQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgZmxleCA6IG51bGwsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtvdmVyZmxvd1k6ICdzY3JvbGwnfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaGVhZGVyczogW3tcbiAgICAgICAgICAgICAgICBkb2NrOiAndG9wJyxcbiAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvbkNvbGxhcHNlQnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnWCdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlICAgIDogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAnaGlzdG9yaWNhbC1kYXRhLWxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnSGlzdG9yaWNhbCBEYXRhJ1xuICAgICAgICAgICAgICAgIH0sICctPicsIHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvbjUyMHB4QnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnNTIwcHgnXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uODAwcHhCdXR0b25DbGljaycsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICc4MDBweCdcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV0sXG5cbiAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgIG1vZHVsZTogVGFiQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgIHN0eWxlIDoge21hcmdpblRvcDogJzEwcHgnfSxcbiAgICAgICAgICAgICAgICBpdGVtcyA6IFt7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIGxheW91dDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAgICAgICAgICAgICBpdGVtcyA6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBudHlwZTogJ3Rvb2xiYXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleCA6ICcwIDEgYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUgICAgOiBDaGVja0JveCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkICAgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsVGV4dCA6ICdMb2dhcml0aG1pYyBTY2FsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxXaWR0aDogMTM1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZSA6ICdsb2dhcml0aG1pYy1zY2FsZS1jaGVja2JveCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6ICdvbkxvZ2FyaXRobWljU2NhbGVDaGFuZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZSAgICA6IENoZWNrQm94LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsVGV4dCA6ICdEYWlseSBWYWx1ZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlICAgICA6IHttYXJnaW5MZWZ0OiAnMzBweCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsV2lkdGg6IDk1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiAnb25EYWlseVZhbHVlc0NoYW5nZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUgICA6IExpbmVDaGFydENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXggICAgIDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZTogJ2xpbmUtY2hhcnQnLFxuICAgICAgICAgICAgICAgICAgICB9XSxcblxuICAgICAgICAgICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1jaGFydC1saW5lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdDaGFydCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuaGlzdG9yaWNhbERhdGFUYWJsZSA9IE5lby5jcmVhdGUoe1xuICAgICAgICAgICAgbW9kdWxlICAgOiBIaXN0b3JpY2FsRGF0YVRhYmxlLFxuICAgICAgICAgICAgcmVmZXJlbmNlOiAnaGlzdG9yaWNhbC1kYXRhLXRhYmxlJyxcblxuICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLXRhYmxlJyxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnVGFibGUnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAuLi5tZS5oaXN0b3JpY2FsRGF0YVRhYmxlQ29uZmlnIHx8IHt9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLml0ZW1zWzFdLml0ZW1zWzBdLml0ZW1zLnB1c2gobWUuaGlzdG9yaWNhbERhdGFUYWJsZSk7XG5cbiAgICAgICAgbWUudGFibGUgPSBOZW8uY3JlYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogVGFibGUsXG4gICAgICAgICAgICByZWZlcmVuY2U6ICd0YWJsZScsXG4gICAgICAgICAgICAuLi5tZS50YWJsZUNvbmZpZyB8fCB7fVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5pdGVtc1swXS5pdGVtcy5wdXNoKG1lLnRhYmxlKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFRhYmxlQ29udGFpbmVyKTtcblxuZXhwb3J0IHtUYWJsZUNvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29tcG9uZW50Q29udHJvbGxlciBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udHJvbGxlci9Db21wb25lbnQubWpzJztcbmltcG9ydCBOZW9BcnJheSAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL0FycmF5Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLnZpZXcuVGFibGVDb250YWluZXJDb250cm9sbGVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udHJvbGxlci5Db21wb25lbnRcbiAqL1xuY2xhc3MgVGFibGVDb250YWluZXJDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50Q29udHJvbGxlciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0NvdmlkLnZpZXcuVGFibGVDb250YWluZXJDb250cm9sbGVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdDb3ZpZC52aWV3LlRhYmxlQ29udGFpbmVyQ29udHJvbGxlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGFwaUJhc2VVcmw9J2h0dHBzOi8vZGlzZWFzZS5zaC8nXG4gICAgICAgICAqL1xuICAgICAgICBhcGlCYXNlVXJsOiAnaHR0cHM6Ly9kaXNlYXNlLnNoLycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGFwaUhpc3RvcmljYWxEYXRhRW5kcG9pbnQ9J2hpc3RvcmljYWwnXG4gICAgICAgICAqL1xuICAgICAgICBhcGlIaXN0b3JpY2FsRGF0YUVuZHBvaW50OiAndjIvaGlzdG9yaWNhbC8nLFxuICAgICAgICAvKipcbiAgICAgICAgICogTnVtYmVyIG9mIGRheXMgeW91IHdhbnQgdGhlIGRhdGEgdG8gZ28gYmFjayB0by4gRGVmYXVsdCBpcyAzMC4gVXNlIGFsbCBmb3IgZnVsbCBkYXRhIHNldC4gRXg6IDE1LCBhbGwsIDI0XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxTdHJpbmd9IGFwaUhpc3RvcmljYWxEYXRhVGltZVJhbmdlPSdhbGwnXG4gICAgICAgICAqL1xuICAgICAgICBhcGlIaXN0b3JpY2FsRGF0YVRpbWVSYW5nZTogJ2FsbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgYWxsIHJlY29yZHMgd2l0aCAwIGNhc2VzIGZyb20gdGhlIGhpc3RvcmljYWwgZGF0YSAodGFibGUgJiBjaGFydClcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcmVtb3ZlRW1wdHlSZWNvcmRzPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHJlbW92ZUVtcHR5UmVjb3JkczogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gc2VsZWN0ZWRSZWNvcmQ9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZWN0ZWRSZWNvcmQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8udGFibGUuQ29udGFpbmVyfG51bGx9IHRhYmxlXz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHRhYmxlXzogbnVsbFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuY29tcG9uZW50Lm9uKCdjb3VudHJ5U2VsZWN0JywgbWUub25UYWJsZVNlbGVjdCwgbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBhZGRTdG9yZUl0ZW1zKGRhdGEpIHtcbiAgICAgICAgY29uc3QgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgZGF0YUFycmF5ID0gW10sXG4gICAgICAgICAgICAgIG1hcCAgICAgICA9IHt9O1xuXG4gICAgICAgIGxldCB0aW1lbGluZSAgPSBkYXRhICYmIGRhdGEudGltZWxpbmUsXG4gICAgICAgICAgICBuZXh0SXRlbTtcblxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTm92ZWxDT1ZJRC9BUEkvaXNzdWVzLzMwOSAvLyBkaWZmZXJlbnQgZm9ybWF0IGZvciAnYWxsJ1xuICAgICAgICBpZiAoZGF0YSAmJiAhZGF0YS50aW1lbGluZSkge1xuICAgICAgICAgICAgdGltZWxpbmUgPSBkYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRpbWVsaW5lKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aW1lbGluZS5jYXNlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgbWFwW2tleV0gPSB7ZGF0ZTogbmV3IERhdGUoa2V5KS50b0lTT1N0cmluZygpLCBjYXNlczogdmFsdWV9O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRpbWVsaW5lLmRlYXRocykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG1hcC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcFtrZXldLmRlYXRocyA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcFtrZXldID0ge2RhdGU6IG5ldyBEYXRlKGtleSkudG9JU09TdHJpbmcoKSwgZGVhdGhzOiB2YWx1ZX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aW1lbGluZS5oYXNPd25Qcm9wZXJ0eSgncmVjb3ZlcmVkJykpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aW1lbGluZS5yZWNvdmVyZWQpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWFwLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFtrZXldLnJlY292ZXJlZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwW2tleV0gPSB7ZGF0ZTogbmV3IERhdGUoa2V5KS50b0lTT1N0cmluZygpLCByZWNvdmVyZWQ6IHZhbHVlfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhtYXApLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIHZhbHVlLmFjdGl2ZSA9IHZhbHVlLmNhc2VzIC0gdmFsdWUuZGVhdGhzIC0gdmFsdWUucmVjb3ZlcmVkO1xuICAgICAgICAgICAgICAgIGRhdGFBcnJheS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobWUucmVtb3ZlRW1wdHlSZWNvcmRzKSB7XG4gICAgICAgICAgICAgICAgWy4uLmRhdGFBcnJheV0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2FzZXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShkYXRhQXJyYXksIGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHRoZSBhcnJheSBpcyBzb3J0ZWQgYnkgZGF0ZSBBU0NcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YUFycmF5WzBdLCB7XG4gICAgICAgICAgICAgICAgZGFpbHlBY3RpdmUgICA6IGRhdGFBcnJheVswXS5hY3RpdmUsXG4gICAgICAgICAgICAgICAgZGFpbHlDYXNlcyAgICA6IGRhdGFBcnJheVswXS5jYXNlcyxcbiAgICAgICAgICAgICAgICBkYWlseURlYXRocyAgIDogZGF0YUFycmF5WzBdLmRlYXRocyxcbiAgICAgICAgICAgICAgICBkYWlseVJlY292ZXJlZDogZGF0YUFycmF5WzBdLnJlY292ZXJlZFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRhdGFBcnJheS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIG5leHRJdGVtID0gZGF0YUFycmF5W2luZGV4ICsgMV07XG5cbiAgICAgICAgICAgICAgICBpZiAobmV4dEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihuZXh0SXRlbSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGFpbHlBY3RpdmUgICA6IG5leHRJdGVtLmFjdGl2ZSAgICAtIGl0ZW0uYWN0aXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGFpbHlDYXNlcyAgICA6IG5leHRJdGVtLmNhc2VzICAgICAtIGl0ZW0uY2FzZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYWlseURlYXRocyAgIDogbmV4dEl0ZW0uZGVhdGhzICAgIC0gaXRlbS5kZWF0aHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYWlseVJlY292ZXJlZDogbmV4dEl0ZW0ucmVjb3ZlcmVkIC0gaXRlbS5yZWNvdmVyZWRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIHRvZG86IHdlIGNvdWxkIG9ubHkgdXBkYXRlIHRoZSBhY3RpdmUgdGFiXG4gICAgICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ2hpc3RvcmljYWwtZGF0YS10YWJsZScpLnN0b3JlLmRhdGEgPSBkYXRhQXJyYXk7XG4gICAgICAgICAgICBtZS51cGRhdGVMaW5lQ2hhcnQoZGF0YUFycmF5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIHN0YXRpYyBhc3NpZ25GaWVsZHNPck51bGwocmVjb3JkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY3RpdmUgICAgICAgIDogcmVjb3JkLmFjdGl2ZSAgICAgICAgIHx8IG51bGwsXG4gICAgICAgICAgICBjYXNlcyAgICAgICAgIDogcmVjb3JkLmNhc2VzICAgICAgICAgIHx8IG51bGwsXG4gICAgICAgICAgICBkZWF0aHMgICAgICAgIDogcmVjb3JkLmRlYXRocyAgICAgICAgIHx8IG51bGwsXG4gICAgICAgICAgICBkYWlseUFjdGl2ZSAgIDogcmVjb3JkLmRhaWx5QWN0aXZlICAgIHx8IG51bGwsXG4gICAgICAgICAgICBkYWlseUNhc2VzICAgIDogcmVjb3JkLmRhaWx5Q2FzZXMgICAgIHx8IG51bGwsXG4gICAgICAgICAgICBkYWlseURlYXRocyAgIDogcmVjb3JkLmRhaWx5RGVhdGhzICAgIHx8IG51bGwsXG4gICAgICAgICAgICBkYWlseVJlY292ZXJlZDogcmVjb3JkLmRhaWx5UmVjb3ZlcmVkIHx8IG51bGwsXG4gICAgICAgICAgICByZWNvdmVyZWQgICAgIDogcmVjb3JkLnJlY292ZXJlZCAgICAgIHx8IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgd2hlbiBhY2Nlc3NpbmcgdGhlIHRhYmxlIGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7TmVvLnRhYmxlLkNvbnRhaW5lcnxudWxsfSB2YWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVHZXRUYWJsZSh2YWx1ZSkge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl90YWJsZSA9IHZhbHVlID0gdGhpcy5nZXRSZWZlcmVuY2UoJ3RhYmxlJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY291bnRyeU5hbWVcbiAgICAgKi9cbiAgICBsb2FkSGlzdG9yaWNhbERhdGEoY291bnRyeU5hbWUpIHtcbiAgICAgICAgY29uc3QgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgIGFwaVBhdGggPSBtZS5hcGlCYXNlVXJsICsgbWUuYXBpSGlzdG9yaWNhbERhdGFFbmRwb2ludCArIGNvdW50cnlOYW1lICsgJz9sYXN0ZGF5cz0nICsgbWUuYXBpSGlzdG9yaWNhbERhdGFUaW1lUmFuZ2U7XG5cbiAgICAgICAgZmV0Y2goYXBpUGF0aClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gbWUuYWRkU3RvcmVJdGVtcyhkYXRhKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ0NhbuKAmXQgYWNjZXNzICcgKyBhcGlQYXRoLCBlcnIpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb241MjBweEJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5nZXRSZWZlcmVuY2UoJ2NvbnRyb2xzLXBhbmVsJykud2lkdGggPSA1MjA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uODAwcHhCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIHRoaXMuZ2V0UmVmZXJlbmNlKCdjb250cm9scy1wYW5lbCcpLndpZHRoID0gODAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkNvbGxhcHNlQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICBjb25zdCBwYW5lbCAgPSB0aGlzLmdldFJlZmVyZW5jZSgnY29udHJvbHMtcGFuZWwnKSxcbiAgICAgICAgICAgICAgZXhwYW5kID0gcGFuZWwud2lkdGggPT09IDQwO1xuXG4gICAgICAgIHBhbmVsLndpZHRoID0gZXhwYW5kID8gdGhpcy5jb21wb25lbnQuaGlzdG9yeVBhbmVsV2lkdGggOiA0MDtcblxuICAgICAgICBkYXRhLmNvbXBvbmVudC50ZXh0ID0gZXhwYW5kID8gJ1gnIDogJysnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkRhaWx5VmFsdWVzQ2hhbmdlKGRhdGEpIHtcbiAgICAgICAgY29uc3QgY2hhcnRJZCAgICAgPSB0aGlzLmdldFJlZmVyZW5jZSgnbGluZS1jaGFydCcpLmlkLFxuICAgICAgICAgICAgICBsb2dDaGVja2JveCA9IHRoaXMuZ2V0UmVmZXJlbmNlKCdsb2dhcml0aG1pYy1zY2FsZS1jaGVja2JveCcpLFxuICAgICAgICAgICAgICB2YWx1ZSAgICAgICA9IGRhdGEudmFsdWU7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsb2dDaGVja2JveC5zZXQoe1xuICAgICAgICAgICAgICAgIGNoZWNrZWQgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZGF0YS52YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2dDaGVja2JveC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvLm1haW4uYWRkb24uQW1DaGFydHMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgICAgICBpZCAgICAgICAgOiBjaGFydElkLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgICdzZXJpZXMudmFsdWVzLjAuZGF0YUZpZWxkcy52YWx1ZVknIDogdmFsdWUgPyAnZGFpbHlBY3RpdmUnICAgIDogJ2FjdGl2ZScsXG4gICAgICAgICAgICAgICAgJ3Nlcmllcy52YWx1ZXMuMS5kYXRhRmllbGRzLnZhbHVlWScgOiB2YWx1ZSA/ICdkYWlseUNhc2VzJyAgICAgOiAnY2FzZXMnLFxuICAgICAgICAgICAgICAgICdzZXJpZXMudmFsdWVzLjIuZGF0YUZpZWxkcy52YWx1ZVknIDogdmFsdWUgPyAnZGFpbHlEZWF0aHMnICAgIDogJ2RlYXRocycsXG4gICAgICAgICAgICAgICAgJ3Nlcmllcy52YWx1ZXMuMy5kYXRhRmllbGRzLnZhbHVlWScgOiB2YWx1ZSA/ICdkYWlseVJlY292ZXJlZCcgOiAncmVjb3ZlcmVkJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBOZW8ubWFpbi5hZGRvbi5BbUNoYXJ0cy5jYWxsTWV0aG9kKHtcbiAgICAgICAgICAgIGlkICA6IGNoYXJ0SWQsXG4gICAgICAgICAgICBwYXRoOiAnaW52YWxpZGF0ZURhdGEnXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkxvZ2FyaXRobWljU2NhbGVDaGFuZ2UoZGF0YSkge1xuICAgICAgICBOZW8ubWFpbi5hZGRvbi5BbUNoYXJ0cy5zZXRQcm9wZXJ0eSh7XG4gICAgICAgICAgICBpZCAgIDogdGhpcy5nZXRSZWZlcmVuY2UoJ2xpbmUtY2hhcnQnKS5pZCxcbiAgICAgICAgICAgIHBhdGggOiAneUF4ZXMudmFsdWVzLjAubG9nYXJpdGhtaWMnLFxuICAgICAgICAgICAgdmFsdWU6IGRhdGEudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge09iamVjdH0gZGF0YVxuICAgICAqIHtPYmplY3R9IGRhdGEucmVjb3JkXG4gICAgICovXG4gICAgb25UYWJsZVNlbGVjdChkYXRhKSB7XG4gICAgICAgIGNvbnN0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICByZWNvcmQgID0gZGF0YS5yZWNvcmQ7XG5cbiAgICAgICAgaWYgKGRhdGEucmVjb3JkKSB7XG4gICAgICAgICAgICBtZS5zZWxlY3RlZFJlY29yZCA9IHsuLi5yZWNvcmR9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUuc2VsZWN0ZWRSZWNvcmQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVtb3ZlZCBvcHRpb25hbCBjaGFpbmluZyBmb3Igbm93LCBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9uZW9tanMvbmVvL2lzc3Vlcy80NjdcbiAgICAgICAgbWUubG9hZEhpc3RvcmljYWxEYXRhKHJlY29yZCAmJiByZWNvcmQuY291bnRyeUluZm8gJiYgcmVjb3JkLmNvdW50cnlJbmZvLmlzbzIgfHwgJ2FsbCcpO1xuXG4gICAgICAgIG1lLmdldFJlZmVyZW5jZSgnaGlzdG9yaWNhbC1kYXRhLWxhYmVsJykuaHRtbCA9ICdIaXN0b3JpY2FsIERhdGEgKCcgKyAocmVjb3JkICYmIHJlY29yZC5jb3VudHJ5IHx8ICdXb3JsZCcpICsgJyknO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZ2FyaXRobWljIEF4aXMgYnJlYWsgZm9yIHZhbHVlcyBvZiAwLCBzbyB3ZSBuZWVkIHRvIGNoYW5nZSB0aG9zZSB0byBudWxsXG4gICAgICogQWRkaW5nIHRoZSBjdXJyZW50IHJlY29yZCwgc2luY2UgdGhlIGhpc3RvcmljYWwgZGF0YSBzdGFydHMgXCJ5ZXN0ZXJkYXlcIlxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IGRhdGFBcnJheVxuICAgICAqL1xuICAgIHVwZGF0ZUxpbmVDaGFydChkYXRhQXJyYXkpIHtcbiAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICByZWNvcmQgPSBtZS5zZWxlY3RlZFJlY29yZCxcbiAgICAgICAgICAgIGNoYXJ0ICA9IG1lLmdldFJlZmVyZW5jZSgnbGluZS1jaGFydCcpO1xuXG4gICAgICAgIGRhdGFBcnJheS5mb3JFYWNoKGl0ZW0gPT4gT2JqZWN0LmFzc2lnbihpdGVtLCBUYWJsZUNvbnRhaW5lckNvbnRyb2xsZXIuYXNzaWduRmllbGRzT3JOdWxsKGl0ZW0pKSk7XG5cbiAgICAgICAgaWYgKCFyZWNvcmQpIHtcbiAgICAgICAgICAgIHJlY29yZCA9IG1lLmdldFBhcmVudCgpLnN1bW1hcnlEYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlY29yZCkge1xuICAgICAgICAgICAgZGF0YUFycmF5LnB1c2goe1xuICAgICAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAuLi5UYWJsZUNvbnRhaW5lckNvbnRyb2xsZXIuYXNzaWduRmllbGRzT3JOdWxsKHJlY29yZClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hhcnQuZGF0YSA9IGRhdGFBcnJheTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFRhYmxlQ29udGFpbmVyQ29udHJvbGxlcik7XG5cbmV4cG9ydCB7VGFibGVDb250YWluZXJDb250cm9sbGVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBBbUNoYXJ0Q29tcG9uZW50IGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvd3JhcHBlci9BbUNoYXJ0Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLnZpZXcuV29ybGRNYXBDb21wb25lbnRcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQud3JhcHBlci5BbUNoYXJ0XG4gKi9cbmNsYXNzIFdvcmxkTWFwQ29tcG9uZW50IGV4dGVuZHMgQW1DaGFydENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0NvdmlkLnZpZXcuV29ybGRNYXBDb21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkLnZpZXcuV29ybGRNYXBDb21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY292aWQtd29ybGQtbWFwJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NvdmlkLXdvcmxkLW1hcCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNoYXJ0VHlwZT0nTWFwQ2hhcnQnXG4gICAgICAgICAqL1xuICAgICAgICBjaGFydFR5cGU6ICdNYXBDaGFydCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnY292aWQtbGluZS1jaGFydCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnY292aWQtd29ybGQtbWFwJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGRhdGFQYXRoPSdkYXRhLnNlcmllcy52YWx1ZXMuMCdcbiAgICAgICAgICovXG4gICAgICAgIGRhdGFQYXRoOiAnc2VyaWVzLnZhbHVlcy4wJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gaGVhdFJ1bGVzTWF4VmFsdWU9MTUwMDBcbiAgICAgICAgICovXG4gICAgICAgIGhlYXRSdWxlc01heFZhbHVlOiAxNTAwMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gcGFja2FnZT0nYW00bWFwcydcbiAgICAgICAgICovXG4gICAgICAgIHBhY2thZ2U6ICdhbTRtYXBzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gY2hhcnRDb25maWdcbiAgICAgICAgICovXG4gICAgICAgIGNoYXJ0Q29uZmlnOiB7XG4gICAgICAgICAgICBwcm9qZWN0aW9uOiAnTWlsbGVyJyxcbiAgICAgICAgICAgIGdlb2RhdGEgICA6ICd3b3JsZExvdycsXG5cbiAgICAgICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAgICAgICB0eXBlICAgICAgOiAnTWFwUG9seWdvblNlcmllcycsXG4gICAgICAgICAgICAgICAgZXhjbHVkZSAgIDogWydBUSddLFxuICAgICAgICAgICAgICAgIHVzZUdlb2RhdGE6IHRydWUsXG5cbiAgICAgICAgICAgICAgICBkYXRhRmllbGRzOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnYWN0aXZlJ1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBoZWF0UnVsZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgIG1heCAgICAgOiAnIzY0YjVmNicsXG4gICAgICAgICAgICAgICAgICAgIG1heFZhbHVlOiAnQGNvbmZpZzpoZWF0UnVsZXNNYXhWYWx1ZScsXG4gICAgICAgICAgICAgICAgICAgIG1pbiAgICAgOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAgICAgICAgIG1pblZhbHVlOiAwLFxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogJ2ZpbGwnLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgIDogJ21hcFBvbHlnb25zLnRlbXBsYXRlJ1xuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIG1hcFBvbHlnb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBUZXh0OiAne25hbWV9OiBbYm9sZF17dmFsdWV9Wy9dJyxcbiAgICAgICAgICAgICAgICAgICAgLy9maWxsICAgICAgIDogJyM3NEIyNjYnLFxuXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZmlsbDogJyMzNjdCMjUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IGRhdGFcbiAgICAgKi9cbiAgICBsb2FkRGF0YShkYXRhKSB7XG4gICAgICAgIGNvbnN0IGNoYXJ0RGF0YSA9IFtdO1xuXG4gICAgICAgIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGNoYXJ0RGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICBhY3RpdmUgICA6IGl0ZW0uYWN0aXZlLFxuICAgICAgICAgICAgICAgIGNhc2VzICAgIDogaXRlbS5jYXNlcyxcbiAgICAgICAgICAgICAgICBjcml0aWNhbCA6IGl0ZW0uY3JpdGljYWwsXG4gICAgICAgICAgICAgICAgZGVhdGhzICAgOiBpdGVtLmRlYXRocyxcbiAgICAgICAgICAgICAgICBpZCAgICAgICA6IGl0ZW0uY291bnRyeUluZm8uaXNvMixcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6IGl0ZW0uY291bnRyeSxcbiAgICAgICAgICAgICAgICByZWNvdmVyZWQ6IGl0ZW0ucmVjb3ZlcmVkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIE5lby5tYWluLmFkZG9uLkFtQ2hhcnRzLnVwZGF0ZURhdGEoe1xuICAgICAgICAgICAgZGF0YSAgICA6IGNoYXJ0RGF0YSxcbiAgICAgICAgICAgIGRhdGFQYXRoOiB0aGlzLmRhdGFQYXRoLFxuICAgICAgICAgICAgaWQgICAgICA6IHRoaXMuaWRcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhXb3JsZE1hcENvbXBvbmVudCk7XG5cbmV4cG9ydCB7V29ybGRNYXBDb21wb25lbnQgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbnRhaW5lciAgICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBOdW1iZXJGaWVsZCAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2Zvcm0vZmllbGQvTnVtYmVyLm1qcyc7XG5pbXBvcnQgVG9vbGJhciAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250YWluZXIvVG9vbGJhci5tanMnO1xuaW1wb3J0IFdvcmxkTWFwQ29tcG9uZW50ICAgICAgICAgICBmcm9tICcuL1dvcmxkTWFwQ29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgV29ybGRNYXBDb250YWluZXJDb250cm9sbGVyIGZyb20gJy4vV29ybGRNYXBDb250YWluZXJDb250cm9sbGVyLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLnZpZXcuV29ybGRNYXBDb250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBXb3JsZE1hcENvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0NvdmlkLnZpZXcuV29ybGRNYXBDb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkLnZpZXcuV29ybGRNYXBDb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50fSBjb250cm9sbGVyPVdvcmxkTWFwQ29udGFpbmVyQ29udHJvbGxlclxuICAgICAgICAgKi9cbiAgICAgICAgY29udHJvbGxlcjogV29ybGRNYXBDb250YWluZXJDb250cm9sbGVyLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsYXlvdXQ9e250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtc1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBtb2R1bGU6IFRvb2xiYXIsXG4gICAgICAgICAgICBmbGV4ICA6ICdub25lJyxcbiAgICAgICAgICAgIGl0ZW1zIDogW3tcbiAgICAgICAgICAgICAgICBudHlwZSAgICA6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAnY3VycmVudE1hcFZpZXdMYWJlbCcsXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luUmlnaHQ6ICcyMHB4J30sXG4gICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnQ3VycmVudCB2aWV3OiBBY3RpdmUnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgICAgIDogTnVtYmVyRmllbGQsXG4gICAgICAgICAgICAgICAgY2xlYXJUb09yaWdpbmFsVmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbjogJ2lubGluZScsXG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0ICAgIDogJ0hlYXRSdWxlIG1heFZhbHVlJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSAgICAgOiAxZTYsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgICAgIDogMTAwLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZSAgICA6ICdoZWF0UnVsZUZpZWxkJyxcbiAgICAgICAgICAgICAgICBzdGVwU2l6ZSAgICAgOiAxMDAsXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgICAgIDoge21hcmdpbjogMH0sXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgICAgIDogMTUwMDAsXG4gICAgICAgICAgICAgICAgd2lkdGggICAgICAgIDogMTUwLFxuXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogJ29uSGVhdFJ1bGVGaWVsZENoYW5nZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAnLT4nLCB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uU2VyaWVzQnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgIHNlcmllcyA6ICdjYXNlcycsXG4gICAgICAgICAgICAgICAgc3R5bGUgIDoge21hcmdpblJpZ2h0OiAnMnB4J30sXG4gICAgICAgICAgICAgICAgdGV4dCAgIDogJzxzcGFuIHN0eWxlPVwiY29sb3I6ICNiYmJiYmJcIj7il488L3NwYW4+IENhc2VzJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvblNlcmllc0J1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICBzZXJpZXMgOiAnYWN0aXZlJyxcbiAgICAgICAgICAgICAgICBzdHlsZSAgOiB7bWFyZ2luUmlnaHQ6ICcycHgnfSxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnPHNwYW4gc3R5bGU9XCJjb2xvcjogIzY0YjVmNlwiPuKXjzwvc3Bhbj4gQWN0aXZlJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvblNlcmllc0J1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICBzZXJpZXMgOiAncmVjb3ZlcmVkJyxcbiAgICAgICAgICAgICAgICBzdHlsZSAgOiB7bWFyZ2luUmlnaHQ6ICcycHgnfSxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnPHNwYW4gc3R5bGU9XCJjb2xvcjogIzI4Y2E2OFwiPuKXjzwvc3Bhbj4gUmVjb3ZlcmVkJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvblNlcmllc0J1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICBzZXJpZXMgOiAnZGVhdGhzJyxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnPHNwYW4gc3R5bGU9XCJjb2xvcjogI2ZiNjc2N1wiPuKXjzwvc3Bhbj4gRGVhdGhzJ1xuICAgICAgICAgICAgfV1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgOiBXb3JsZE1hcENvbXBvbmVudCxcbiAgICAgICAgICAgIGZsZXggICAgIDogMSxcbiAgICAgICAgICAgIHJlZmVyZW5jZTogJ3dvcmxkbWFwJ1xuICAgICAgICB9XVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFdvcmxkTWFwQ29udGFpbmVyKTtcblxuZXhwb3J0IHtXb3JsZE1hcENvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29tcG9uZW50Q29udHJvbGxlciBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udHJvbGxlci9Db21wb25lbnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgQ292aWQudmlldy5Xb3JsZE1hcENvbnRhaW5lckNvbnRyb2xsZXJcbiAqIEBleHRlbmRzIE5lby5jb250cm9sbGVyLkNvbXBvbmVudFxuICovXG5jbGFzcyBXb3JsZE1hcENvbnRhaW5lckNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnRDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nQ292aWQudmlldy5Xb3JsZE1hcENvbnRhaW5lckNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkLnZpZXcuV29ybGRNYXBDb250YWluZXJDb250cm9sbGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gaGVhdFJ1bGVDaGFuZ2VEZWxheT0xNTBcbiAgICAgICAgICovXG4gICAgICAgIGhlYXRSdWxlQ2hhbmdlRGVsYXk6IDE1MCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBoZWF0UnVsZUNoYW5nZVRpbWVvdXQ9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaGVhdFJ1bGVDaGFuZ2VUaW1lb3V0OiBudWxsXG4gICAgfX1cblxuICAgIGNoYW5nZUhlYXRSdWxlKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGNoYXJ0SWQgPSB0aGlzLmdldFJlZmVyZW5jZSgnd29ybGRtYXAnKS5pZDtcblxuICAgICAgICBOZW8ubWFpbi5hZGRvbi5BbUNoYXJ0cy5zZXRQcm9wZXJ0eSh7XG4gICAgICAgICAgICBpZCAgICAgOiB0aGlzLmdldFJlZmVyZW5jZSgnd29ybGRtYXAnKS5pZCxcbiAgICAgICAgICAgIHBhdGggICA6ICdzZXJpZXMudmFsdWVzLjAuaGVhdFJ1bGVzLnZhbHVlcy4wLm1heFZhbHVlJyxcbiAgICAgICAgICAgIHZhbHVlICA6IHZhbHVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIE5lby5tYWluLmFkZG9uLkFtQ2hhcnRzLmNhbGxNZXRob2Qoe1xuICAgICAgICAgICAgaWQgIDogY2hhcnRJZCxcbiAgICAgICAgICAgIHBhdGg6ICdzZXJpZXMudmFsdWVzLjAuaW52YWxpZGF0ZURhdGEnXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkhlYXRSdWxlRmllbGRDaGFuZ2UoZGF0YSkge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KG1lLmhlYXRSdWxlQ2hhbmdlVGltZW91dCk7XG5cbiAgICAgICAgbWUuaGVhdFJ1bGVDaGFuZ2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBtZS5jaGFuZ2VIZWF0UnVsZShkYXRhLnZhbHVlKTtcbiAgICAgICAgfSwgbWUuaGVhdFJ1bGVDaGFuZ2VEZWxheSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uU2VyaWVzQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICBjb25zdCBtZSAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgIGNoYXJ0SWQgICAgID0gbWUuZ2V0UmVmZXJlbmNlKCd3b3JsZG1hcCcpLmlkLFxuICAgICAgICAgICAgICBjb3VudHJ5RGF0YSA9IFsuLi5tZS5nZXRQYXJlbnQoKS5kYXRhXTtcblxuICAgICAgICBjb25zdCBjb2xvck1hcCA9IHtcbiAgICAgICAgICAgIGFjdGl2ZSAgIDogJyM2NGI1ZjYnLFxuICAgICAgICAgICAgY2FzZXMgICAgOiAnI2JiYmJiYicsXG4gICAgICAgICAgICBkZWF0aHMgICA6ICcjZmI2NzY3JyxcbiAgICAgICAgICAgIHJlY292ZXJlZDogJyMyOGNhNjgnXG4gICAgICAgIH07XG5cbiAgICAgICAgTmVvLm1haW4uYWRkb24uQW1DaGFydHMuc2V0UHJvcGVydHkoe1xuICAgICAgICAgICAgaWQgICAgIDogY2hhcnRJZCxcbiAgICAgICAgICAgIGlzQ29sb3I6IHRydWUsXG4gICAgICAgICAgICBwYXRoICAgOiAnc2VyaWVzLnZhbHVlcy4wLmhlYXRSdWxlcy52YWx1ZXMuMC5tYXgnLFxuICAgICAgICAgICAgdmFsdWUgIDogY29sb3JNYXBbZGF0YS5jb21wb25lbnQuc2VyaWVzXVxuICAgICAgICB9KTtcblxuICAgICAgICBOZW8ubWFpbi5hZGRvbi5BbUNoYXJ0cy5zZXRQcm9wZXJ0eSh7XG4gICAgICAgICAgICBpZCAgIDogY2hhcnRJZCxcbiAgICAgICAgICAgIHBhdGggOiAnc2VyaWVzLnZhbHVlcy4wLmRhdGFGaWVsZHMudmFsdWUnLFxuICAgICAgICAgICAgdmFsdWU6IGRhdGEuY29tcG9uZW50LnNlcmllc1xuICAgICAgICB9KTtcblxuICAgICAgICBOZW8ubWFpbi5hZGRvbi5BbUNoYXJ0cy5jYWxsTWV0aG9kKHtcbiAgICAgICAgICAgIGlkICA6IGNoYXJ0SWQsXG4gICAgICAgICAgICBwYXRoOiAnc2VyaWVzLnZhbHVlcy4wLmludmFsaWRhdGVEYXRhJ1xuICAgICAgICB9KS4gdGhlbigoKSA9PiB7XG4gICAgICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ2N1cnJlbnRNYXBWaWV3TGFiZWwnKS50ZXh0ID0gJ0N1cnJlbnQgdmlldzogJyArIE5lby5jYXBpdGFsaXplKGRhdGEuY29tcG9uZW50LnNlcmllcyk7XG5cbiAgICAgICAgICAgIGNvdW50cnlEYXRhLnNvcnQoKGEsIGIpID0+IGJbZGF0YS5jb21wb25lbnQuc2VyaWVzXSAtIGFbZGF0YS5jb21wb25lbnQuc2VyaWVzXSk7XG5cbiAgICAgICAgICAgIG1lLmdldFJlZmVyZW5jZSgnaGVhdFJ1bGVGaWVsZCcpLnZhbHVlID0gTWF0aC5jZWlsKGNvdW50cnlEYXRhWzldW2RhdGEuY29tcG9uZW50LnNlcmllc10gLyAxMDApICogMTAwO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFdvcmxkTWFwQ29udGFpbmVyQ29udHJvbGxlcik7XG5cbmV4cG9ydCB7V29ybGRNYXBDb250YWluZXJDb250cm9sbGVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb3VudHJ5U3RvcmUgZnJvbSAnLi4vLi4vc3RvcmUvQ291bnRyaWVzLm1qcyc7XG5pbXBvcnQgR2FsbGVyeSAgICAgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvR2FsbGVyeS5tanMnO1xuaW1wb3J0IFV0aWwgICAgICAgICBmcm9tICcuLi8uLi9VdGlsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLnZpZXcuY291bnRyeS5HYWxsZXJ5XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkdhbGxlcnlcbiAqL1xuY2xhc3MgQ291bnRyeUdhbGxlcnkgZXh0ZW5kcyBHYWxsZXJ5IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nQ292aWQudmlldy5jb3VudHJ5LkdhbGxlcnknXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkLnZpZXcuY291bnRyeS5HYWxsZXJ5JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9Wydjb3ZpZC1jb3VudHJ5LWdhbGxlcnknLCAnbmVvLWdhbGxlcnknLCAncGFnZScsICd2aWV3J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWydjb3ZpZC1jb3VudHJ5LWdhbGxlcnknLCAnbmVvLWdhbGxlcnknLCAncGFnZScsICd2aWV3J10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaW1hZ2UgaGVpZ2h0IG9mIHRoZSBnYWxsZXJ5XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gaW1hZ2VIZWlnaHQ9MjQwXG4gICAgICAgICAqL1xuICAgICAgICBpbWFnZUhlaWdodDogMjgwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGltYWdlIHdpZHRoIG9mIHRoZSBnYWxsZXJ5XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gaW1hZ2VXaWR0aD0zMjBcbiAgICAgICAgICovXG4gICAgICAgIGltYWdlV2lkdGg6IDM0MCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gaXRlbVRwbF9cbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1UcGw6IHtcbiAgICAgICAgICAgIGNscyAgICAgOiBbJ25lby1nYWxsZXJ5LWl0ZW0nLCAnaW1hZ2Utd3JhcCcsICd2aWV3JywgJ25lby10cmFuc2l0aW9uLTEwMDAnXSxcbiAgICAgICAgICAgIHRhYkluZGV4OiAnLTEnLFxuICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgY2xzICA6IFsnbmVvLWl0ZW0td3JhcHBlciddLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICAgICAgdGFnICA6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICBjbHMgIDogWyduZW8tY291bnRyeS1nYWxsZXJ5LWl0ZW0nXSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuXG4gICAgICAgICAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1pdGVtLWhlYWRlciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAnaW1nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWZsYWcnXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICd0YWJsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWNvbnRlbnQtdGFibGUnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICd0cicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGh0bWw6ICdDYXNlcyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBjbHM6IFsnbmVvLWFsaWduLXJpZ2h0J119LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBzdHlsZToge3dpZHRoOiAnMTAwJSd9fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgaHRtbDogJ0Nhc2VzIHRvZGF5J30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGNsczogWyduZW8tYWxpZ24tcmlnaHQnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAndHInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNuIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBodG1sOiAnRGVhdGhzJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGNsczogWyduZW8tYWxpZ24tcmlnaHQnLCAnbmVvLWNvbnRlbnQtZGVhdGhzJ119LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBzdHlsZToge3dpZHRoOiAnMTAwJSd9fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgaHRtbDogJ0RlYXRocyB0b2RheSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBjbHM6IFsnbmVvLWFsaWduLXJpZ2h0JywgJ25lby1jb250ZW50LWRlYXRocyddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICd0cicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGh0bWw6ICdSZWNvdmVyZWQnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgY2xzOiBbJ25lby1hbGlnbi1yaWdodCcsICduZW8tY29udGVudC1yZWNvdmVyZWQnXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIHN0eWxlOiB7d2lkdGg6ICcxMDAlJ319LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBodG1sOiAnQ3JpdGljYWwnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgY2xzOiBbJ25lby1hbGlnbi1yaWdodCcsICduZW8tY29udGVudC1jcml0aWNhbCddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdW5pcXVlIHJlY29yZCBmaWVsZCBjb250YWluaW5nIHRoZSBpZC5cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBrZXlQcm9wZXJ0eT0naWQnXG4gICAgICAgICAqL1xuICAgICAgICBrZXlQcm9wZXJ0eTogJ2NvdW50cnknLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSB0byBzZWxlY3QgdGhlIGl0ZW0gaW5zaWRlIHRoZSBtaWRkbGUgb2YgdGhlIHN0b3JlIGl0ZW1zIG9uIG1vdW50XG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNlbGVjdE9uTW91bnQ9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHNlbGVjdE9uTW91bnQ6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmRhdGEuU3RvcmV9IHN0b3JlPUNvdW50cnlTdG9yZVxuICAgICAgICAgKi9cbiAgICAgICAgc3RvcmU6IENvdW50cnlTdG9yZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBnZXQgZGlmZmVyZW50IGl0ZW0tbWFya3Vwc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tSXRlbVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB2ZG9tSXRlbVxuICAgICAqL1xuICAgIGNyZWF0ZUl0ZW0odmRvbUl0ZW0sIHJlY29yZCwgaW5kZXgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZmlyc3RDaGlsZCA9IHZkb21JdGVtLmNuWzBdLmNuWzBdLFxuICAgICAgICAgICAgZk4gICAgICAgICA9IFV0aWwuZm9ybWF0TnVtYmVyLFxuICAgICAgICAgICAgdGFibGUgICAgICA9IGZpcnN0Q2hpbGQuY25bMV07XG5cbiAgICAgICAgdmRvbUl0ZW0uaWQgPSBtZS5nZXRJdGVtVm5vZGVJZChyZWNvcmRbbWUua2V5UHJvcGVydHldKTtcblxuICAgICAgICB2ZG9tSXRlbS5jblswXS5zdHlsZS5oZWlnaHQgPSBtZS5pbWFnZUhlaWdodCArICdweCc7XG5cbiAgICAgICAgZmlyc3RDaGlsZC5zdHlsZS5oZWlnaHQgPSAobWUuaW1hZ2VIZWlnaHQgLSA3MCkgKyAncHgnO1xuICAgICAgICBmaXJzdENoaWxkLnN0eWxlLndpZHRoICA9IG1lLmltYWdlV2lkdGggICsgJ3B4JztcblxuICAgICAgICBmaXJzdENoaWxkLmNuWzBdLmNuWzBdLnNyYyAgPSBVdGlsLmdldENvdW50cnlGbGFnVXJsKHJlY29yZC5jb3VudHJ5KTtcbiAgICAgICAgZmlyc3RDaGlsZC5jblswXS5jblsxXS5odG1sID0gcmVjb3JkLmNvdW50cnk7XG5cbiAgICAgICAgdGFibGUuY25bMF0uY25bMV0uaHRtbCA9IGZOKHt2YWx1ZTogcmVjb3JkLmNhc2VzfSk7XG4gICAgICAgIHRhYmxlLmNuWzFdLmNuWzFdLmh0bWwgPSBmTih7dmFsdWU6IHJlY29yZC5kZWF0aHN9KTtcbiAgICAgICAgdGFibGUuY25bMl0uY25bMV0uaHRtbCA9IGZOKHt2YWx1ZTogcmVjb3JkLnJlY292ZXJlZH0pO1xuXG4gICAgICAgIHRhYmxlLmNuWzBdLmNuWzRdLmh0bWwgPSBmTih7dmFsdWU6IHJlY29yZC50b2RheUNhc2VzfSk7XG4gICAgICAgIHRhYmxlLmNuWzFdLmNuWzRdLmh0bWwgPSBmTih7dmFsdWU6IHJlY29yZC50b2RheURlYXRoc30pO1xuICAgICAgICB0YWJsZS5jblsyXS5jbls0XS5odG1sID0gZk4oe3ZhbHVlOiByZWNvcmQuY3JpdGljYWx9KTtcblxuICAgICAgICByZXR1cm4gdmRvbUl0ZW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdm5vZGVJZFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IGl0ZW1JZFxuICAgICAqL1xuICAgIGdldEl0ZW1JZCh2bm9kZUlkKSB7XG4gICAgICAgIHJldHVybiB2bm9kZUlkLnNwbGl0KCdfXycpWzFdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gaXRlbXNcbiAgICAgKi9cbiAgICBvblN0b3JlTG9hZChpdGVtcykge1xuICAgICAgICBzdXBlci5vblN0b3JlTG9hZChpdGVtcyk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdE9uTW91bnQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5hZnRlclNldE1vdW50ZWQodHJ1ZSwgZmFsc2UpO1xuICAgICAgICB9LCA0MDApO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ291bnRyeUdhbGxlcnkpO1xuXG5leHBvcnQge0NvdW50cnlHYWxsZXJ5IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb3VudHJ5U3RvcmUgZnJvbSAnLi4vLi4vc3RvcmUvQ291bnRyaWVzLm1qcyc7XG5pbXBvcnQgSGVsaXggICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvSGVsaXgubWpzJztcbmltcG9ydCBVdGlsICAgICAgICAgZnJvbSAnLi4vLi4vVXRpbC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb3ZpZC52aWV3LmNvdW50cnkuSGVsaXhcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuSGVsaXhcbiAqL1xuY2xhc3MgQ291bnRyeUhlbGl4IGV4dGVuZHMgSGVsaXgge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdDb3ZpZC52aWV3LmNvdW50cnkuSGVsaXgnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkLnZpZXcuY291bnRyeS5IZWxpeCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnY292aWQtY291bnRyeS1oZWxpeCcsICduZW8taGVsaXgnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ2NvdmlkLWNvdW50cnktaGVsaXgnLCAnbmVvLWhlbGl4J10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdmVydGljYWwgZGVsdGEgYmV0d2VlbiBlYWNoIGhlbGl4IGl0ZW0gKGluY3JlYXNpbmcgdGhpcyB2YWx1ZSB3aWxsIGNyZWF0ZSBhIHNwaXJhbClcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBkZWx0YVk9MS4yXG4gICAgICAgICAqL1xuICAgICAgICBkZWx0YVk6IDEuMixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gaXRlbVRwbF9cbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1UcGw6IHtcbiAgICAgICAgICAgIGNscyAgICAgOiBbJ3N1cmZhY2UnLCAnbmVvLWhlbGl4LWl0ZW0nXSxcbiAgICAgICAgICAgIHN0eWxlICAgOiB7fSxcbiAgICAgICAgICAgIHRhYkluZGV4OiAnLTEnLFxuICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgY2xzICA6IFsnbmVvLWl0ZW0td3JhcHBlciddLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICAgICAgdGFnICA6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICBjbHMgIDogWyduZW8tY291bnRyeS1oZWxpeC1pdGVtJ10sXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7fSxcblxuICAgICAgICAgICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsczogWyduZW8taXRlbS1oZWFkZXInXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ2ltZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1mbGFnJ11cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAndGFibGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1jb250ZW50LXRhYmxlJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAndHInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNuIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBodG1sOiAnQ2FzZXMnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgY2xzOiBbJ25lby1hbGlnbi1yaWdodCddfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgc3R5bGU6IHt3aWR0aDogJzEwMCUnfX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGh0bWw6ICdDYXNlcyB0b2RheSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBjbHM6IFsnbmVvLWFsaWduLXJpZ2h0J119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ3RyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbiA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgaHRtbDogJ0RlYXRocyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBjbHM6IFsnbmVvLWFsaWduLXJpZ2h0JywgJ25lby1jb250ZW50LWRlYXRocyddfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgc3R5bGU6IHt3aWR0aDogJzEwMCUnfX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGh0bWw6ICdEZWF0aHMgdG9kYXknfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgY2xzOiBbJ25lby1hbGlnbi1yaWdodCcsICduZW8tY29udGVudC1kZWF0aHMnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAndHInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNuIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBodG1sOiAnUmVjb3ZlcmVkJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGNsczogWyduZW8tYWxpZ24tcmlnaHQnLCAnbmVvLWNvbnRlbnQtcmVjb3ZlcmVkJ119LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBzdHlsZToge3dpZHRoOiAnMTAwJSd9fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgaHRtbDogJ0NyaXRpY2FsJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGNsczogWyduZW8tYWxpZ24tcmlnaHQnLCAnbmVvLWNvbnRlbnQtY3JpdGljYWwnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHVuaXF1ZSByZWNvcmQgZmllbGQgY29udGFpbmluZyB0aGUgaWQuXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30ga2V5UHJvcGVydHk9J2lkJ1xuICAgICAgICAgKi9cbiAgICAgICAga2V5UHJvcGVydHk6ICdjb3VudHJ5JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSByYWRpdXMgb2YgdGhlIEhlbGl4IGluIHB4XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gcmFkaXVzPTI1MDBcbiAgICAgICAgICovXG4gICAgICAgIHJhZGl1czogMjUwMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSByb3RhdGlvbkFuZ2xlIG9mIHRoZSBIZWxpeCBpbiBkZWdyZWVzXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gcm90YXRpb25BbmdsZT03MjBcbiAgICAgICAgICovXG4gICAgICAgIHJvdGF0aW9uQW5nbGU6IDcyMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgZGlzcGxheXMgdGhlIGZpcnN0ICYgbGFzdCBuYW1lIHJlY29yZCBmaWVsZHMgYmVsb3cgYW4gZXhwYW5kZWQgaXRlbVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaG93Q2xvbmVJbmZvPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBzaG93Q2xvbmVJbmZvOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5kYXRhLlN0b3JlfSBzdG9yZT1Db3VudHJ5U3RvcmVcbiAgICAgICAgICovXG4gICAgICAgIHN0b3JlOiBDb3VudHJ5U3RvcmUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHJhbnNsYXRlWCB2YWx1ZSBnZXRzIGluY2x1ZGVkIGludG8gZWFjaCBoZWxpeCBpdGVtXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gdHJhbnNsYXRlWT01MDBcbiAgICAgICAgICovXG4gICAgICAgIHRyYW5zbGF0ZVk6IDUwMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0cmFuc2xhdGVYIHZhbHVlIGdldHMgaW5jbHVkZWQgaW50byBlYWNoIGhlbGl4IGl0ZW1cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSB0cmFuc2xhdGVaXz0tMjMwMFxuICAgICAgICAgKi9cbiAgICAgICAgdHJhbnNsYXRlWjogLTIzMDBcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbUl0ZW1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjb3JkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge09iamVjdH0gdmRvbUl0ZW1cbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtKHZkb21JdGVtLCByZWNvcmQsIGluZGV4KSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGZpcnN0Q2hpbGQgPSB2ZG9tSXRlbS5jblswXS5jblswXSxcbiAgICAgICAgICAgIGZOICAgICAgICAgPSBVdGlsLmZvcm1hdE51bWJlcixcbiAgICAgICAgICAgIHRhYmxlICAgICAgPSBmaXJzdENoaWxkLmNuWzFdO1xuXG4gICAgICAgIHZkb21JdGVtLmlkID0gbWUuZ2V0SXRlbVZub2RlSWQocmVjb3JkW21lLmtleVByb3BlcnR5XSk7XG5cbiAgICAgICAgZmlyc3RDaGlsZC5jblswXS5jblswXS5zcmMgID0gVXRpbC5nZXRDb3VudHJ5RmxhZ1VybChyZWNvcmQuY291bnRyeSk7XG4gICAgICAgIGZpcnN0Q2hpbGQuY25bMF0uY25bMV0uaHRtbCA9IHJlY29yZC5jb3VudHJ5O1xuXG4gICAgICAgIHRhYmxlLmNuWzBdLmNuWzFdLmh0bWwgPSBmTih7dmFsdWU6IHJlY29yZC5jYXNlc30pO1xuICAgICAgICB0YWJsZS5jblsxXS5jblsxXS5odG1sID0gZk4oe3ZhbHVlOiByZWNvcmQuZGVhdGhzfSk7XG4gICAgICAgIHRhYmxlLmNuWzJdLmNuWzFdLmh0bWwgPSBmTih7dmFsdWU6IHJlY29yZC5yZWNvdmVyZWR9KTtcblxuICAgICAgICB0YWJsZS5jblswXS5jbls0XS5odG1sID0gZk4oe3ZhbHVlOiByZWNvcmQudG9kYXlDYXNlc30pO1xuICAgICAgICB0YWJsZS5jblsxXS5jbls0XS5odG1sID0gZk4oe3ZhbHVlOiByZWNvcmQudG9kYXlEZWF0aHN9KTtcbiAgICAgICAgdGFibGUuY25bMl0uY25bNF0uaHRtbCA9IGZOKHt2YWx1ZTogcmVjb3JkLmNyaXRpY2FsfSk7XG5cbiAgICAgICAgcmV0dXJuIHZkb21JdGVtO1xuICAgIH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0Q2xvbmVUcmFuc2Zvcm0oKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVggPSAobWUub2Zmc2V0V2lkdGggIC0gMjgwMCkgLyA2LFxuICAgICAgICAgICAgdHJhbnNsYXRlWSA9IChtZS5vZmZzZXRIZWlnaHQgLSAyNzAwKSAvIDYsXG4gICAgICAgICAgICB0cmFuc2xhdGVaID0gMTAwNDAwICsgbWUucGVyc3BlY3RpdmUgLyAxLjU7XG5cbiAgICAgICAgcmV0dXJuICdtYXRyaXgzZCgxLDAsMCwwLDAsMSwwLDAsMCwwLDEsMCwnK3RyYW5zbGF0ZVgrJywnK3RyYW5zbGF0ZVkrJywnK3RyYW5zbGF0ZVorJywxKSc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdm5vZGVJZFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SXRlbUlkKHZub2RlSWQpIHtcbiAgICAgICAgcmV0dXJuIHZub2RlSWQuc3BsaXQoJ19fJylbMV07XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb3VudHJ5SGVsaXgpO1xuXG5leHBvcnQge0NvdW50cnlIZWxpeCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29udGFpbmVyICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3RhYmxlL0NvbnRhaW5lci5tanMnO1xuaW1wb3J0IEhpc3RvcmljYWxEYXRhIGZyb20gJy4uLy4uL3N0b3JlL0hpc3RvcmljYWxEYXRhLm1qcyc7XG5pbXBvcnQgVXRpbCAgICAgICAgICAgZnJvbSAnLi4vLi4vVXRpbC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb3ZpZC52aWV3LmNvdW50cnkuSGlzdG9yaWNhbERhdGFUYWJsZVxuICogQGV4dGVuZHMgTmVvLnRhYmxlLkNvbnRhaW5lclxuICovXG5jbGFzcyBIaXN0b3JpY2FsRGF0YVRhYmxlIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nQ292aWQudmlldy5jb3VudHJ5Lkhpc3RvcmljYWxEYXRhVGFibGUnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkLnZpZXcuY291bnRyeS5IaXN0b3JpY2FsRGF0YVRhYmxlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9Wydjb3ZpZC1oaXN0b3JpY2FsLWRhdGEtdGFibGUnLCAnbmVvLXRhYmxlLWNvbnRhaW5lciddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnY292aWQtaGlzdG9yaWNhbC1kYXRhLXRhYmxlJywgJ25lby10YWJsZS1jb250YWluZXInXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmF1bHQgY29uZmlncyBmb3IgZWFjaCBjb2x1bW5cbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBjb2x1bW5EZWZhdWx0c1xuICAgICAgICAgKi9cbiAgICAgICAgY29sdW1uRGVmYXVsdHM6IHtcbiAgICAgICAgICAgIGFsaWduICAgICAgICAgICAgICAgOiAncmlnaHQnLFxuICAgICAgICAgICAgZGVmYXVsdFNvcnREaXJlY3Rpb246ICdERVNDJyxcbiAgICAgICAgICAgIHJlbmRlcmVyICAgICAgICAgICAgOiBVdGlsLmZvcm1hdE51bWJlclxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W119IGNvbHVtbnNcbiAgICAgICAgICovXG4gICAgICAgIGNvbHVtbnM6IFt7XG4gICAgICAgICAgICBhbGlnbiAgICA6ICdsZWZ0JyxcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ2RhdGUnLFxuICAgICAgICAgICAgZG9jayAgICAgOiAnbGVmdCcsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICdEYXRlJyxcbiAgICAgICAgICAgIHdpZHRoICAgIDogMTAwLFxuICAgICAgICAgICAgcmVuZGVyZXIgOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY2xzIDogWyduZW8tZGF0ZS1jb2x1bW4nLCAnbmVvLXRhYmxlLWNlbGwnXSxcbiAgICAgICAgICAgICAgICAgICAgaHRtbDogbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2RlZmF1bHQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXkgIDogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9udGg6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXIgOiAnbnVtZXJpYydcbiAgICAgICAgICAgICAgICAgICAgfSkuZm9ybWF0KG5ldyBEYXRlKGRhdGEudmFsdWUpKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ2Nhc2VzJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ0Nhc2VzJyxcbiAgICAgICAgICAgIHJlbmRlcmVyIDogZGF0YSA9PiBVdGlsLmZvcm1hdE51bWJlcihkYXRhKVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICdhY3RpdmUnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnQWN0aXZlJyxcbiAgICAgICAgICAgIHJlbmRlcmVyIDogZGF0YSA9PiBVdGlsLmZvcm1hdE51bWJlcihkYXRhLCAnIzY0QjVGNicpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ3JlY292ZXJlZCcsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICdSZWNvdmVyZWQnLFxuICAgICAgICAgICAgcmVuZGVyZXIgOiBkYXRhID0+IFV0aWwuZm9ybWF0TnVtYmVyKGRhdGEsICcjMjhjYTY4JylcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAnZGVhdGhzJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ0RlYXRocycsXG4gICAgICAgICAgICByZW5kZXJlciA6IGRhdGEgPT4gVXRpbC5mb3JtYXROdW1iZXIoZGF0YSwgJyNmYjY3NjcnKVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICdkYWlseUNhc2VzJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ0RhaWx5IEMnLFxuICAgICAgICAgICAgcmVuZGVyZXIgOiBkYXRhID0+IFV0aWwuZm9ybWF0TnVtYmVyKGRhdGEpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ2RhaWx5QWN0aXZlJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ0RhaWx5IEEnLFxuICAgICAgICAgICAgcmVuZGVyZXIgOiBkYXRhID0+IFV0aWwuZm9ybWF0TnVtYmVyKGRhdGEsICcjNjRCNUY2JylcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAnZGFpbHlSZWNvdmVyZWQnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnRGFpbHkgUicsXG4gICAgICAgICAgICByZW5kZXJlciA6IGRhdGEgPT4gVXRpbC5mb3JtYXROdW1iZXIoZGF0YSwgJyMyOGNhNjgnKVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICdkYWlseURlYXRocycsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICdEYWlseSBEJyxcbiAgICAgICAgICAgIHJlbmRlcmVyIDogZGF0YSA9PiBVdGlsLmZvcm1hdE51bWJlcihkYXRhLCAnI2ZiNjc2NycpXG4gICAgICAgIH1dLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmRhdGEuU3RvcmV9IHN0b3JlPUhpc3RvcmljYWxEYXRhXG4gICAgICAgICAqL1xuICAgICAgICBzdG9yZTogSGlzdG9yaWNhbERhdGFcbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIaXN0b3JpY2FsRGF0YVRhYmxlKTtcblxuZXhwb3J0IHtIaXN0b3JpY2FsRGF0YVRhYmxlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBBbUNoYXJ0Q29tcG9uZW50IGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvd3JhcHBlci9BbUNoYXJ0Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLnZpZXcuY291bnRyeS5MaW5lQ2hhcnRDb21wb25lbnRcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQud3JhcHBlci5BbUNoYXJ0XG4gKi9cbmNsYXNzIExpbmVDaGFydENvbXBvbmVudCBleHRlbmRzIEFtQ2hhcnRDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdDb3ZpZC52aWV3LmNvdW50cnkuTGluZUNoYXJ0Q29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdDb3ZpZC52aWV3LmNvdW50cnkuTGluZUNoYXJ0Q29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9Wydjb3ZpZC1saW5lLWNoYXJ0J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWydjb3ZpZC1saW5lLWNoYXJ0J10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGNoYXJ0Q29uZmlnXG4gICAgICAgICAqL1xuICAgICAgICBjaGFydENvbmZpZzoge1xuICAgICAgICAgICAgY3Vyc29yOiB7XG4gICAgICAgICAgICAgICAgbWF4VG9vbHRpcERpc3RhbmNlOiAtMVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAnI2JiYidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHhBeGVzOiBbe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdEYXRlQXhpcycsXG5cbiAgICAgICAgICAgICAgICByZW5kZXJlcjoge1xuICAgICAgICAgICAgICAgICAgICBtaW5HcmlkRGlzdGFuY2U6IDYwLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogJyNiYmInXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSxcblxuICAgICAgICAgICAgeUF4ZXM6IFt7XG4gICAgICAgICAgICAgICAgdHlwZSAgICAgICA6ICdWYWx1ZUF4aXMnLFxuICAgICAgICAgICAgICAgIGxvZ2FyaXRobWljOiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgbnVtYmVyRm9ybWF0dGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIG51bWJlckZvcm1hdDogJyMuMGEnLFxuXG4gICAgICAgICAgICAgICAgICAgIGJpZ051bWJlclByZWZpeGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7bnVtYmVyOiAxZTMsIHN1ZmZpeDogJ0snfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtudW1iZXI6IDFlNiwgc3VmZml4OiAnTSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAge251bWJlcjogMWU5LCBzdWZmaXg6ICdCJ31cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVuZGVyZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgbWluR3JpZERpc3RhbmNlOiA2MCxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICcjYmJiJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0sXG5cbiAgICAgICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAgICAgICB0eXBlICAgICAgIDogJ0xpbmVTZXJpZXMnLFxuICAgICAgICAgICAgICAgIGRhdGFGaWVsZHMgOiB7ZGF0ZVggOiAnZGF0ZScsIHZhbHVlWTogJ2FjdGl2ZSd9LFxuICAgICAgICAgICAgICAgIGZpbGwgICAgICAgOiAnIzY0YjVmNicsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgICA6ICdBY3RpdmUnLFxuICAgICAgICAgICAgICAgIHN0cm9rZSAgICAgOiAnIzY0YjVmNicsXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDMsXG5cbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQgICAgICAgOiB7ZmlsbDogJyNmZmYnfSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0RmlsbEZyb21PYmplY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbCAgICAgICAgICAgIDoge2ZpbGw6ICcjMDAwJ31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdHlwZSAgICAgICA6ICdMaW5lU2VyaWVzJyxcbiAgICAgICAgICAgICAgICBkYXRhRmllbGRzIDoge2RhdGVYIDogJ2RhdGUnLCB2YWx1ZVk6ICdjYXNlcyd9LFxuICAgICAgICAgICAgICAgIGZpbGwgICAgICAgOiAnI2JiYicsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgICA6ICdDYXNlcycsXG4gICAgICAgICAgICAgICAgc3Ryb2tlICAgICA6ICcjYmJiJyxcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogMyxcbiAgICAgICAgICAgICAgICAvL3RlbnNpb25YICAgOiAuOSxcblxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZCAgICAgICA6IHtmaWxsOiAnI2ZmZid9LFxuICAgICAgICAgICAgICAgICAgICBnZXRGaWxsRnJvbU9iamVjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsICAgICAgICAgICAgOiB7ZmlsbDogJyMwMDAnfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0eXBlICAgICAgIDogJ0xpbmVTZXJpZXMnLFxuICAgICAgICAgICAgICAgIGRhdGFGaWVsZHMgOiB7ZGF0ZVggOiAnZGF0ZScsIHZhbHVlWTogJ2RlYXRocyd9LFxuICAgICAgICAgICAgICAgIGZpbGwgICAgICAgOiAnI2ZiNjc2NycsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgICA6ICdEZWF0aHMnLFxuICAgICAgICAgICAgICAgIHN0cm9rZSAgICAgOiAnI2ZiNjc2NycsXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDMsXG5cbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQgICAgICAgOiB7ZmlsbDogJyNmZmYnfSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0RmlsbEZyb21PYmplY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbCAgICAgICAgICAgIDoge2ZpbGw6ICcjMDAwJ31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdHlwZSAgICAgICA6ICdMaW5lU2VyaWVzJyxcbiAgICAgICAgICAgICAgICBkYXRhRmllbGRzIDoge2RhdGVYIDogJ2RhdGUnLCB2YWx1ZVk6ICdyZWNvdmVyZWQnfSxcbiAgICAgICAgICAgICAgICBmaWxsICAgICAgIDogJyMyOGNhNjgnLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgICAgOiAnUmVjb3ZlcmVkJyxcbiAgICAgICAgICAgICAgICBzdHJva2UgICAgIDogJyMyOGNhNjgnLFxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAzLFxuXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kICAgICAgIDoge2ZpbGw6ICcjZmZmJ30sXG4gICAgICAgICAgICAgICAgICAgIGdldEZpbGxGcm9tT2JqZWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwgICAgICAgICAgICA6IHtmaWxsOiAnIzAwMCd9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGNvbWJpbmVTZXJpZXNUb29sdGlwPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGNvbWJpbmVTZXJpZXNUb29sdGlwOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gZml0UGFyZW50SGVpZ2h0PXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGZpdFBhcmVudEhlaWdodDogdHJ1ZVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKExpbmVDaGFydENvbXBvbmVudCk7XG5cbmV4cG9ydCB7TGluZUNoYXJ0Q29tcG9uZW50IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb250YWluZXIgICAgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3RhYmxlL0NvbnRhaW5lci5tanMnO1xuaW1wb3J0IENvdW50cnlTdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9Db3VudHJpZXMubWpzJztcbmltcG9ydCBVdGlsICAgICAgICAgZnJvbSAnLi4vLi4vVXRpbC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb3ZpZC52aWV3LmNvdW50cnkuVGFibGVcbiAqIEBleHRlbmRzIE5lby50YWJsZS5Db250YWluZXJcbiAqL1xuY2xhc3MgVGFibGUgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdDb3ZpZC52aWV3LmNvdW50cnkuVGFibGUnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkLnZpZXcuY291bnRyeS5UYWJsZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnY292aWQtY291bnRyeS10YWJsZScsICduZW8tdGFibGUtY29udGFpbmVyJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWydjb3ZpZC1jb3VudHJ5LXRhYmxlJywgJ25lby10YWJsZS1jb250YWluZXInXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmF1bHQgY29uZmlncyBmb3IgZWFjaCBjb2x1bW5cbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBjb2x1bW5EZWZhdWx0c1xuICAgICAgICAgKi9cbiAgICAgICAgY29sdW1uRGVmYXVsdHM6IHtcbiAgICAgICAgICAgIGFsaWduICAgICAgICAgICAgICAgOiAncmlnaHQnLFxuICAgICAgICAgICAgZGVmYXVsdFNvcnREaXJlY3Rpb246ICdERVNDJyxcbiAgICAgICAgICAgIHJlbmRlcmVyICAgICAgICAgICAgOiBVdGlsLmZvcm1hdE51bWJlclxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W119IGNvbHVtbnNcbiAgICAgICAgICovXG4gICAgICAgIGNvbHVtbnM6IFt7XG4gICAgICAgICAgICBjbHMgICAgICA6IFsnbmVvLWluZGV4LWNvbHVtbicsICduZW8tdGFibGUtaGVhZGVyLWJ1dHRvbiddLFxuICAgICAgICAgICAgZGF0YUZpZWxkOiAnaW5kZXgnLFxuICAgICAgICAgICAgZG9jayAgICAgOiAnbGVmdCcsXG4gICAgICAgICAgICBtaW5XaWR0aCA6IDQwLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnIycsXG4gICAgICAgICAgICByZW5kZXJlciA6IFV0aWwuaW5kZXhSZW5kZXJlcixcbiAgICAgICAgICAgIHdpZHRoICAgIDogNDBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgYWxpZ24gICAgICAgICAgICAgICA6ICdsZWZ0JyxcbiAgICAgICAgICAgIGRhdGFGaWVsZCAgICAgICAgICAgOiAnY291bnRyeScsXG4gICAgICAgICAgICBkZWZhdWx0U29ydERpcmVjdGlvbjogJ0FTQycsXG4gICAgICAgICAgICBkb2NrICAgICAgICAgICAgICAgIDogJ2xlZnQnLFxuICAgICAgICAgICAgdGV4dCAgICAgICAgICAgICAgICA6ICdDb3VudHJ5JyxcbiAgICAgICAgICAgIHdpZHRoICAgICAgICAgICAgICAgOiAyMDAsXG5cbiAgICAgICAgICAgIHJlbmRlcmVyOiBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjbHMgOiBbJ25lby1jb3VudHJ5LWNvbHVtbicsICduZW8tdGFibGUtY2VsbCddLFxuICAgICAgICAgICAgICAgICAgICBodG1sOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXJcIj4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8aW1nIHN0eWxlPVwiaGVpZ2h0OjIwcHg7IG1hcmdpbi1yaWdodDoxMHB4OyB3aWR0aDoyMHB4O1wiIHNyYz1cIicgKyBVdGlsLmdldENvdW50cnlGbGFnVXJsKGRhdGEudmFsdWUpICsgJ1wiPicgKyBkYXRhLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PidcbiAgICAgICAgICAgICAgICAgICAgXS5qb2luKCcnKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ2Nhc2VzJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ0Nhc2VzJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICdjYXNlc1Blck9uZU1pbGxpb24nLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnQ2FzZXMgLyAxTSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAnaW5mZWN0ZWQnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnSW5mZWN0ZWQnLFxuICAgICAgICAgICAgcmVuZGVyZXIgOiBkYXRhID0+IFV0aWwuZm9ybWF0SW5mZWN0ZWQoZGF0YSlcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAnYWN0aXZlJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ0FjdGl2ZScsXG4gICAgICAgICAgICByZW5kZXJlciA6IGRhdGEgPT4gVXRpbC5mb3JtYXROdW1iZXIoZGF0YSwgJyM2NEI1RjYnKVxuICAgICAgICB9LCAge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAncmVjb3ZlcmVkJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ1JlY292ZXJlZCcsXG4gICAgICAgICAgICByZW5kZXJlciA6IGRhdGEgPT4gVXRpbC5mb3JtYXROdW1iZXIoZGF0YSwgJyMyOGNhNjgnKVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICdjcml0aWNhbCcsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICdDcml0aWNhbCcsXG4gICAgICAgICAgICByZW5kZXJlciA6IGRhdGEgPT4gVXRpbC5mb3JtYXROdW1iZXIoZGF0YSwgJ29yYW5nZScpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ2RlYXRocycsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICdEZWF0aHMnLFxuICAgICAgICAgICAgcmVuZGVyZXIgOiBkYXRhID0+IFV0aWwuZm9ybWF0TnVtYmVyKGRhdGEsICcjZmI2NzY3JylcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAndG9kYXlDYXNlcycsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICdDYXNlcyB0b2RheSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAndG9kYXlEZWF0aHMnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnRGVhdGhzIHRvZGF5JyxcbiAgICAgICAgICAgIHJlbmRlcmVyIDogZGF0YSA9PiBVdGlsLmZvcm1hdE51bWJlcihkYXRhLCAnI2ZiNjc2NycpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ3Rlc3RzJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ1Rlc3RzJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICd0ZXN0c1Blck9uZU1pbGxpb24nLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnVGVzdHMgLyAxTSdcbiAgICAgICAgfV0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5TdG9yZX0gc3RvcmU9Q291bnRyeVN0b3JlXG4gICAgICAgICAqL1xuICAgICAgICBzdG9yZTogQ291bnRyeVN0b3JlXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVGFibGUpO1xuXG5leHBvcnQge1RhYmxlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvd3JhcHBlci9NYXBib3hHTC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb3ZpZC52aWV3Lm1hcGJveEdsLkNvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC53cmFwcGVyLk1hcGJveEdMXG4gKi9cbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdDb3ZpZC52aWV3Lm1hcGJveEdsLkNvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQudmlldy5tYXBib3hHbC5Db21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGFjY2Vzc1Rva2VuXG4gICAgICAgICAqL1xuICAgICAgICBhY2Nlc3NUb2tlbjogJ3BrLmV5SjFJam9pZEc5aWFYVWlMQ0poSWpvaVkyczRkVGxzZEhBNU1EUm1Zek50Y0d4bGN6RnBjR1ZuY3lKOS5xY216RGpwZHlRZUx0ejl6N2Q3Q2tBJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gY2VudGVyPXtsYXQ6IDQwLCBsbmc6IDIwfVxuICAgICAgICAgKi9cbiAgICAgICAgY2VudGVyOiB7bGF0OiA0MCwgbG5nOiAyMH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGRhdGFTb3VyY2VJZD0nY292aWQxOSdcbiAgICAgICAgICovXG4gICAgICAgIGRhdGFTb3VyY2VJZDogJ2NvdmlkMTknLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W119XG4gICAgICAgICAqL1xuICAgICAgICBsYXllcnM6IFt7XG4gICAgICAgICAgICBiZWZvcmVJZDogJ3dhdGVyd2F5LWxhYmVsJyxcbiAgICAgICAgICAgIGlkICAgICAgOiAnaGlsbHNoYWRpbmcnLFxuICAgICAgICAgICAgc291cmNlICA6ICdkZW0nLFxuICAgICAgICAgICAgdHlwZSAgICA6ICdoaWxsc2hhZGUnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGJlZm9yZUlkOiAnd2F0ZXJ3YXktbGFiZWwnLFxuICAgICAgICAgICAgZmlsdGVyICA6IFsnPicsIFsnZ2V0JywgJ2Nhc2VzJ10sIDBdLFxuICAgICAgICAgICAgaWQgICAgICA6ICdjb3ZpZDE5LWhlYXQnLFxuICAgICAgICAgICAgc291cmNlICA6ICdjb3ZpZDE5JyxcbiAgICAgICAgICAgIHR5cGUgICAgOiAnaGVhdG1hcCcsXG5cbiAgICAgICAgICAgIHBhaW50OiB7XG4gICAgICAgICAgICAgICAgJ2hlYXRtYXAtY29sb3InICAgIDogWydpbnRlcnBvbGF0ZScsIFsnbGluZWFyJ10sIFsnaGVhdG1hcC1kZW5zaXR5J10sIDAsICdyZ2JhKDAsMCwwLDApJywgMC4xLCAnIzkyNzkwMycsIDAuMTUsICcjZmZkNDAzJywgMSwgJyNmZjAwMDAnXSxcbiAgICAgICAgICAgICAgICAnaGVhdG1hcC1pbnRlbnNpdHknOiBbJ2ludGVycG9sYXRlJywgWydsaW5lYXInXSwgWyd6b29tJ10sIDAsIDMsIDksIDVdLFxuICAgICAgICAgICAgICAgICdoZWF0bWFwLW9wYWNpdHknICA6IFsnaW50ZXJwb2xhdGUnLCBbJ2xpbmVhciddLCBbJ3pvb20nXSwgNSwgLjk1LCA2LCAwXSxcbiAgICAgICAgICAgICAgICAnaGVhdG1hcC1yYWRpdXMnICAgOiBbJ2ludGVycG9sYXRlJywgWydsaW5lYXInXSwgWyd6b29tJ10sIDAsIDIsIDEsIDQsIDIsIDgsIDMsIDE2LCA0LCAzMiwgNSwgNjQsIDYsIDEyOCwgNywgMjU2LCA4LCA1MTIsIDksIDEwMjRdLFxuICAgICAgICAgICAgICAgICdoZWF0bWFwLXdlaWdodCcgICA6IFsnaW50ZXJwb2xhdGUnLCBbJ2xpbmVhciddLCBbJ2dldCcsICdjYXNlcyddLCAwLCAwLCAxZTQsIDFdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGJlZm9yZUlkOiAnd2F0ZXJ3YXktbGFiZWwnLFxuICAgICAgICAgICAgZmlsdGVyICA6IFsnPicsIFsnZ2V0JywgJ2Nhc2VzJ10sIDBdLFxuICAgICAgICAgICAgaWQgICAgICA6ICdjb3ZpZDE5LWNpcmNsZScsXG4gICAgICAgICAgICBzb3VyY2UgIDogJ2NvdmlkMTknLFxuICAgICAgICAgICAgdHlwZSAgICA6ICdjaXJjbGUnLFxuICAgICAgICAgICAgbWluem9vbSA6IDUsXG5cbiAgICAgICAgICAgIHBhaW50OiB7XG4gICAgICAgICAgICAgICAgJ2NpcmNsZS1jb2xvcicgICAgOiBbJ3N0ZXAnLCBbJ2dldCcsICdjYXNlcyddLCAnIzlhZDVmZicsIDAsICcjOWFmNmZmJywgMjAsICcjMDBmZmZmJywgMjAwLCAnI2ZmZmYwMCcsIDQwMCwgJyNmMWYwNzUnLCA4MDAsICcjZjliMTk2JywgMWUzLCAnI2YyOGNiMScsIDJlMywgJyNmMjhjYjEnXSxcbiAgICAgICAgICAgICAgICAnY2lyY2xlLW9wYWNpdHknICA6IFsnaW50ZXJwb2xhdGUnLCBbJ2xpbmVhciddLCBbJ3pvb20nXSwgNSwgMCwgNiwgLjZdLFxuICAgICAgICAgICAgICAgICdjaXJjbGUtcmFkaXVzJyAgIDogWydzdGVwJywgWydnZXQnLCAnY2FzZXMnXSwgMTAsIDEwMCwgMjAsIDUwMCwgMzAsIDFlMywgNDAsIDFlNCwgNTBdLFxuICAgICAgICAgICAgICAgICdjaXJjbGUtdHJhbnNsYXRlJzogWzAsIDIwXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBiZWZvcmVJZDogJ3dhdGVyd2F5LWxhYmVsJyxcbiAgICAgICAgICAgIGZpbHRlciAgOiBbJz4nLCBbJ2dldCcsICdjYXNlcyddLCAwXSxcbiAgICAgICAgICAgIGlkICAgICAgOiAnY292aWQxOS1jaXJjbGUtdGV4dCcsXG4gICAgICAgICAgICBzb3VyY2UgIDogJ2NvdmlkMTknLFxuICAgICAgICAgICAgdHlwZSAgICA6ICdzeW1ib2wnLFxuICAgICAgICAgICAgbWluem9vbSA6IDUsXG5cbiAgICAgICAgICAgIGxheW91dDoge1xuICAgICAgICAgICAgICAgICd0ZXh0LWFsbG93LW92ZXJsYXAnICAgOiB0cnVlLFxuICAgICAgICAgICAgICAgICd0ZXh0LWZpZWxkJyAgICAgICAgICAgOiBbJ3RvLXN0cmluZycsIFsnZ2V0JywgJ2Nhc2VzJ11dLFxuICAgICAgICAgICAgICAgICd0ZXh0LWZvbnQnICAgICAgICAgICAgOiBbJ0RJTiBPZmZjIFBybyBNZWRpdW0nLCAnQXJpYWwgVW5pY29kZSBNUyBCb2xkJ10sXG4gICAgICAgICAgICAgICAgJ3RleHQtaWdub3JlLXBsYWNlbWVudCc6IHRydWUsXG4gICAgICAgICAgICAgICAgJ3RleHQtc2l6ZScgICAgICAgICAgICA6IDEyXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBwYWludDoge1xuICAgICAgICAgICAgICAgICd0ZXh0LW9wYWNpdHknICA6IFsnaW50ZXJwb2xhdGUnLCBbJ2xpbmVhciddLCBbJ3pvb20nXSwgNSwgMCwgNywgMV0sXG4gICAgICAgICAgICAgICAgJ3RleHQtdHJhbnNsYXRlJzogWzAsIDIwXSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBodHRwczovL2RvY3MubWFwYm94LmNvbS9tYXBib3gtZ2wtanMvc3R5bGUtc3BlYy9cbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fFN0cmluZ30gbWFwYm94U3R5bGU9J21hcGJveDovL3N0eWxlcy90b2JpdS9jazk0NHllcnEzaHJqMWlwOTFvMzRmYTdkJ1xuICAgICAgICAgKi9cbiAgICAgICAgbWFwYm94U3R5bGU6ICdtYXBib3g6Ly9zdHlsZXMvdG9iaXUvY2s5NDR5ZXJxM2hyajFpcDkxbzM0ZmE3ZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWZXJzaW9uIGZvciB0aGUgbmVvLWRhcmsgdGhlbWVcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fFN0cmluZ30gbWFwYm94U3R5bGU9J21hcGJveDovL3N0eWxlcy90b2JpdS9jazk0NHllcnEzaHJqMWlwOTFvMzRmYTdkJ1xuICAgICAgICAgKi9cbiAgICAgICAgbWFwYm94U3R5bGVEYXJrOiAnbWFwYm94Oi8vc3R5bGVzL3RvYml1L2NrOHlheGFreDExengxaWxnc2hxNDUxY3YnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVmVyc2lvbiBmb3IgdGhlIG5lby1saWdodCB0aGVtZVxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8U3RyaW5nfSBtYXBib3hTdHlsZT0nbWFwYm94Oi8vc3R5bGVzL3RvYml1L2NrOTQ1OXBsZTBxYzcxaW52dWdkejZiYmYnXG4gICAgICAgICAqL1xuICAgICAgICBtYXBib3hTdHlsZUxpZ2h0OiAnbWFwYm94Oi8vc3R5bGVzL3RvYml1L2NrOTQ1OXBsZTBxYzcxaW52dWdkejZiYmYnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W119XG4gICAgICAgICAqL1xuICAgICAgICBzb3VyY2VzOiBbe1xuICAgICAgICAgICAgaWQgIDogJ2NvdmlkMTknLFxuICAgICAgICAgICAgdHlwZTogJ2dlb2pzb24nLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHR5cGUgICAgOiAnRmVhdHVyZUNvbGxlY3Rpb24nLFxuICAgICAgICAgICAgICAgIGZlYXR1cmVzOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBpZCAgOiAnZGVtJyxcbiAgICAgICAgICAgIHR5cGU6ICdyYXN0ZXItZGVtJyxcbiAgICAgICAgICAgIHVybCA6ICdtYXBib3g6Ly9tYXBib3gudGVycmFpbi1yZ2InXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ29tcG9uZW50KTtcblxuZXhwb3J0IHtDb21wb25lbnQgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2VDb250YWluZXIgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRhaW5lci9CYXNlLm1qcyc7XG5pbXBvcnQgQ2hlY2tCb3ggICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9DaGVja0JveC5tanMnO1xuaW1wb3J0IENvbXBvbmVudCAgICAgICAgICAgZnJvbSAnLi9Db21wb25lbnQubWpzJztcbmltcG9ydCBDb250YWluZXJDb250cm9sbGVyIGZyb20gJy4vQ29udGFpbmVyQ29udHJvbGxlci5tanMnO1xuaW1wb3J0IFBhbmVsICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRhaW5lci9QYW5lbC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb3ZpZC52aWV3Lm1hcGJveEdsLkNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5CYXNlXG4gKi9cbmNsYXNzIENvbnRhaW5lciBleHRlbmRzIEJhc2VDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdDb3ZpZC52aWV3Lm1hcGJveEdsLkNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQudmlldy5tYXBib3hHbC5Db250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY292aWQtbWFwYm94Z2wtY29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NvdmlkLW1hcGJveGdsLWNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29udHJvbGxlci5Db21wb25lbnR9IGNvbnRyb2xsZXI9Q29udGFpbmVyQ29udHJvbGxlclxuICAgICAgICAgKi9cbiAgICAgICAgY29udHJvbGxlcjogQ29udGFpbmVyQ29udHJvbGxlcixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfSBpdGVtc1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBtb2R1bGUgICA6IENvbXBvbmVudCxcbiAgICAgICAgICAgIHJlZmVyZW5jZTogJ21hcGJveGdsbWFwJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICA6IFBhbmVsLFxuICAgICAgICAgICAgaGVpZ2h0ICAgICAgOiAxNTAsXG4gICAgICAgICAgICBpZ25vcmVMYXlvdXQ6IHRydWUsXG5cbiAgICAgICAgICAgIGNvbnRhaW5lckNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNixcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzEwcHgnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaGVhZGVyczogW3tcbiAgICAgICAgICAgICAgICBkb2NrOiAndG9wJyxcbiAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvbkhpZGVNYXBDb250cm9sc0J1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ1gnXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdNYXAgQ29udHJvbHMnXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dLFxuXG4gICAgICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgICAgOiBDaGVja0JveCxcbiAgICAgICAgICAgICAgICBmbGV4ICAgICAgOiAnMCAxIGF1dG8nLFxuICAgICAgICAgICAgICAgIGxhYmVsV2lkdGg6IDEwMFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgY2hlY2tlZCAgOiB0cnVlLFxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ0RldGFpbCBDaXJjbGVzJyxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtjaGFuZ2U6ICdvbkRldGFpbENpcmNsZXNDaGFuZ2UnfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGNoZWNrZWQgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdIZWF0TWFwJyxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtjaGFuZ2U6ICdvbkhlYXRNYXBDaGFuZ2UnfSxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW5Ub3A6ICc1cHgnfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGNoZWNrZWQgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdUZXJyYWluJyxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtjaGFuZ2U6ICdvblRlcnJhaW5DaGFuZ2UnfSxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW5Ub3A6ICc1cHgnfVxuICAgICAgICAgICAgfV0sXG5cbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uICAgICAgIDogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICByaWdodCAgICAgICAgICA6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICB0b3AgICAgICAgICAgICA6ICcxMHB4J1xuICAgICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbGF5b3V0PXtudHlwZTogJ2ZpdCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2ZpdCd9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbToge1xuICAgICAgICAgICAgc3R5bGU6IHtwb3NpdGlvbjogJ3JlbGF0aXZlJywgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnMTAwJSd9LFxuICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtwb3NpdGlvbjogJ2Fic29sdXRlJywgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnMTAwJSd9LFxuICAgICAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge2hlaWdodDogJzEwMCUnfSxcbiAgICAgICAgICAgICAgICAgICAgY246IFtdXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBnZXRWZG9tUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmRvbS5jblswXS5jblswXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGdldFZub2RlUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudm5vZGUuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ29udGFpbmVyKTtcblxuZXhwb3J0IHtDb250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbXBvbmVudENvbnRyb2xsZXIgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRyb2xsZXIvQ29tcG9uZW50Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLnZpZXcubWFwYm94R2wuQ29udGFpbmVyQ29udHJvbGxlclxuICogQGV4dGVuZHMgTmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50XG4gKi9cbmNsYXNzIENvbnRhaW5lckNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnRDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nQ292aWQudmlldy5tYXBib3hHbC5Db250YWluZXJDb250cm9sbGVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdDb3ZpZC52aWV3Lm1hcGJveEdsLkNvbnRhaW5lckNvbnRyb2xsZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbWFwYm94Z2wtY29udGFpbmVyLWNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbWFwYm94Z2wtY29udGFpbmVyLWNvbnRyb2xsZXInXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGxheWVySWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmlzaWJpbGl0eVxuICAgICAqL1xuICAgIGNoYW5nZUxheWVyVmlzaWJpbGl0eShsYXllcklkLCB2aXNpYmlsaXR5KSB7XG4gICAgICAgIHRoaXMuZ2V0UmVmZXJlbmNlKCdtYXBib3hnbG1hcCcpLnNldExheW91dFByb3BlcnR5KHtcbiAgICAgICAgICAgIGxheWVySWQ6IGxheWVySWQsXG4gICAgICAgICAgICBrZXkgICAgOiAndmlzaWJpbGl0eScsXG4gICAgICAgICAgICB2YWx1ZSAgOiB2aXNpYmlsaXR5XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkRldGFpbENpcmNsZXNDaGFuZ2UoZGF0YSkge1xuICAgICAgICBjb25zdCB2aXNpYmlsaXR5ID0gZGF0YS52YWx1ZSA/ICd2aXNpYmxlJyA6ICdub25lJztcblxuICAgICAgICB0aGlzLmNoYW5nZUxheWVyVmlzaWJpbGl0eSgnY292aWQxOS1jaXJjbGUnLCAgICAgIHZpc2liaWxpdHkpO1xuICAgICAgICB0aGlzLmNoYW5nZUxheWVyVmlzaWJpbGl0eSgnY292aWQxOS1jaXJjbGUtdGV4dCcsIHZpc2liaWxpdHkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkhlYXRNYXBDaGFuZ2UoZGF0YSkge1xuICAgICAgICB0aGlzLmNoYW5nZUxheWVyVmlzaWJpbGl0eSgnY292aWQxOS1oZWF0JywgZGF0YS52YWx1ZSA/ICd2aXNpYmxlJyA6ICdub25lJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uSGlkZU1hcENvbnRyb2xzQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZygnb25IaWRlTWFwQ29udHJvbHNCdXR0b25DbGljaycsIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvblRlcnJhaW5DaGFuZ2UoZGF0YSkge1xuICAgICAgICB0aGlzLmNoYW5nZUxheWVyVmlzaWJpbGl0eSgnaGlsbHNoYWRpbmcnLCBkYXRhLnZhbHVlID8gJ3Zpc2libGUnIDogJ25vbmUnKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENvbnRhaW5lckNvbnRyb2xsZXIpO1xuXG5leHBvcnQge0NvbnRhaW5lckNvbnRyb2xsZXIgYXMgZGVmYXVsdH07Il0sInNvdXJjZVJvb3QiOiIifQ==