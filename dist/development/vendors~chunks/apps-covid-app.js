self["webpackChunk"](["vendors~chunks/apps-covid-app"],{

/***/ "./node_modules/neo.mjs/apps/covid/Util.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/apps/covid/Util.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * Static utility class
 * @class Covid.Util
 * @extends Neo.core.Base
 */
class Util extends _src_core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ "./node_modules/neo.mjs/apps/covid/app.mjs":
/*!*************************************************!*\
  !*** ./node_modules/neo.mjs/apps/covid/app.mjs ***!
  \*************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/MainContainer.mjs */ "./node_modules/neo.mjs/apps/covid/view/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'apps/covid/',
    mainView: _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'Covid'
});



/***/ }),

/***/ "./node_modules/neo.mjs/apps/covid/model/Country.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/neo.mjs/apps/covid/model/Country.mjs ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Country; });
/* harmony import */ var _src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class Covid.model.Country
 * @extends Neo.data.Model
 */
class Country extends _src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ "./node_modules/neo.mjs/apps/covid/model/HistoricalData.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/covid/model/HistoricalData.mjs ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HistoricalData; });
/* harmony import */ var _src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class Covid.model.HistoricalData
 * @extends Neo.data.Model
 */
class HistoricalData extends _src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ "./node_modules/neo.mjs/apps/covid/store/Countries.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/covid/store/Countries.mjs ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Countries; });
/* harmony import */ var _model_Country_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Country.mjs */ "./node_modules/neo.mjs/apps/covid/model/Country.mjs");
/* harmony import */ var _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");



/**
 * @class Covid.store.Countries
 * @extends Neo.data.Store
 */
class Countries extends _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
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

/***/ "./node_modules/neo.mjs/apps/covid/store/HistoricalData.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/covid/store/HistoricalData.mjs ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HistoricalData; });
/* harmony import */ var _model_HistoricalData_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/HistoricalData.mjs */ "./node_modules/neo.mjs/apps/covid/model/HistoricalData.mjs");
/* harmony import */ var _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");



/**
 * @class Covid.store.HistoricalData
 * @extends Neo.data.Store
 */
class HistoricalData extends _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
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

/***/ "./node_modules/neo.mjs/apps/covid/view/AttributionComponent.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/covid/view/AttributionComponent.mjs ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AttributionComponent; });
/* harmony import */ var _src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class Covid.view.AttributionComponent
 * @extends Neo.component.Base
 */
class AttributionComponent extends _src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ "./node_modules/neo.mjs/apps/covid/view/FooterContainer.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/covid/view/FooterContainer.mjs ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterContainer; });
/* harmony import */ var _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");


/**
 * @class Covid.view.FooterContainer
 * @extends Neo.container.Base
 */
class FooterContainer extends _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ "./node_modules/neo.mjs/apps/covid/view/GalleryContainer.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/covid/view/GalleryContainer.mjs ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GalleryContainer; });
/* harmony import */ var _src_component_BoxLabel_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/component/BoxLabel.mjs */ "./node_modules/neo.mjs/src/component/BoxLabel.mjs");
/* harmony import */ var _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _country_Gallery_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country/Gallery.mjs */ "./node_modules/neo.mjs/apps/covid/view/country/Gallery.mjs");
/* harmony import */ var _GalleryContainerController_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GalleryContainerController.mjs */ "./node_modules/neo.mjs/apps/covid/view/GalleryContainerController.mjs");
/* harmony import */ var _src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/container/Panel.mjs */ "./node_modules/neo.mjs/src/container/Panel.mjs");
/* harmony import */ var _src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/form/field/Range.mjs */ "./node_modules/neo.mjs/src/form/field/Range.mjs");







/**
 * @class Covid.view.GalleryContainer
 * @extends Neo.container.Base
 */
class GalleryContainer extends _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
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
            module   : _src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
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
                module   : _src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
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
                module   : _src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
                labelText: 'Translate Y',
                maxValue : 1500,
                minValue : -1500,
                name     : 'translateY',
                value    : 0,
                listeners: {
                    change: 'onRangefieldChange'
                }
            }, {
                module   : _src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
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
                module   : _src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
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
                module: _src_component_BoxLabel_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./node_modules/neo.mjs/apps/covid/view/GalleryContainerController.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/covid/view/GalleryContainerController.mjs ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GalleryContainerController; });
/* harmony import */ var _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");


/**
 * @class Covid.view.GalleryContainerController
 * @extends Neo.controller.Component
 */
class GalleryContainerController extends _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ "./node_modules/neo.mjs/apps/covid/view/HeaderContainer.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/covid/view/HeaderContainer.mjs ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderContainer; });
/* harmony import */ var _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _store_Countries_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/Countries.mjs */ "./node_modules/neo.mjs/apps/covid/store/Countries.mjs");
/* harmony import */ var _src_form_field_Select_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/form/field/Select.mjs */ "./node_modules/neo.mjs/src/form/field/Select.mjs");




/**
 * @class Covid.view.HeaderContainer
 * @extends Neo.container.Base
 */
class HeaderContainer extends _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
                    module       : _src_form_field_Select_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
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

/***/ "./node_modules/neo.mjs/apps/covid/view/HelixContainer.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/covid/view/HelixContainer.mjs ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HelixContainer; });
/* harmony import */ var _src_component_BoxLabel_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/component/BoxLabel.mjs */ "./node_modules/neo.mjs/src/component/BoxLabel.mjs");
/* harmony import */ var _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _country_Helix_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country/Helix.mjs */ "./node_modules/neo.mjs/apps/covid/view/country/Helix.mjs");
/* harmony import */ var _HelixContainerController_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HelixContainerController.mjs */ "./node_modules/neo.mjs/apps/covid/view/HelixContainerController.mjs");
/* harmony import */ var _src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/container/Panel.mjs */ "./node_modules/neo.mjs/src/container/Panel.mjs");
/* harmony import */ var _src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/form/field/Range.mjs */ "./node_modules/neo.mjs/src/form/field/Range.mjs");







/**
 * @class Covid.view.HelixContainer
 * @extends Neo.container.Base
 */
class HelixContainer extends _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
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
            module   : _src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
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
                module: _src_component_BoxLabel_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./node_modules/neo.mjs/apps/covid/view/HelixContainerController.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/covid/view/HelixContainerController.mjs ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HelixContainerController; });
/* harmony import */ var _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");


/**
 * @class Covid.view.HelixContainerController
 * @extends Neo.controller.Component
 */
class HelixContainerController extends _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ "./node_modules/neo.mjs/apps/covid/view/MainContainer.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/covid/view/MainContainer.mjs ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _AttributionComponent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AttributionComponent.mjs */ "./node_modules/neo.mjs/apps/covid/view/AttributionComponent.mjs");
/* harmony import */ var _FooterContainer_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterContainer.mjs */ "./node_modules/neo.mjs/apps/covid/view/FooterContainer.mjs");
/* harmony import */ var _GalleryContainer_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GalleryContainer.mjs */ "./node_modules/neo.mjs/apps/covid/view/GalleryContainer.mjs");
/* harmony import */ var _HeaderContainer_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderContainer.mjs */ "./node_modules/neo.mjs/apps/covid/view/HeaderContainer.mjs");
/* harmony import */ var _HelixContainer_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HelixContainer.mjs */ "./node_modules/neo.mjs/apps/covid/view/HelixContainer.mjs");
/* harmony import */ var _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MainContainerController.mjs */ "./node_modules/neo.mjs/apps/covid/view/MainContainerController.mjs");
/* harmony import */ var _mapboxGl_Container_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapboxGl/Container.mjs */ "./node_modules/neo.mjs/apps/covid/view/mapboxGl/Container.mjs");
/* harmony import */ var _src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/tab/Container.mjs */ "./node_modules/neo.mjs/src/tab/Container.mjs");
/* harmony import */ var _TableContainer_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TableContainer.mjs */ "./node_modules/neo.mjs/apps/covid/view/TableContainer.mjs");
/* harmony import */ var _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");
/* harmony import */ var _WorldMapContainer_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./WorldMapContainer.mjs */ "./node_modules/neo.mjs/apps/covid/view/WorldMapContainer.mjs");












/**
 * @class Covid.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_9__["default"] {
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
            module   : _src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_7__["default"],
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

/***/ "./node_modules/neo.mjs/apps/covid/view/MainContainerController.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/covid/view/MainContainerController.mjs ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainerController; });
/* harmony import */ var _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");
/* harmony import */ var _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _Util_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util.mjs */ "./node_modules/neo.mjs/apps/covid/Util.mjs");




/**
 * @class Covid.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
                    _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, item);
                }
            });

            _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, theme);
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

/***/ "./node_modules/neo.mjs/apps/covid/view/TableContainer.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/covid/view/TableContainer.mjs ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TableContainer; });
/* harmony import */ var _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/form/field/CheckBox.mjs */ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs");
/* harmony import */ var _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _country_HistoricalDataTable_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country/HistoricalDataTable.mjs */ "./node_modules/neo.mjs/apps/covid/view/country/HistoricalDataTable.mjs");
/* harmony import */ var _country_LineChartComponent_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./country/LineChartComponent.mjs */ "./node_modules/neo.mjs/apps/covid/view/country/LineChartComponent.mjs");
/* harmony import */ var _src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/container/Panel.mjs */ "./node_modules/neo.mjs/src/container/Panel.mjs");
/* harmony import */ var _src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/tab/Container.mjs */ "./node_modules/neo.mjs/src/tab/Container.mjs");
/* harmony import */ var _country_Table_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./country/Table.mjs */ "./node_modules/neo.mjs/apps/covid/view/country/Table.mjs");
/* harmony import */ var _TableContainerController_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TableContainerController.mjs */ "./node_modules/neo.mjs/apps/covid/view/TableContainerController.mjs");









/**
 * @class Covid.view.TableContainer
 * @extends Neo.container.Base
 */
class TableContainer extends _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
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
            module   : _src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
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
                module: _src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
                style : {marginTop: '10px'},
                items : [{
                    ntype : 'container',
                    layout: {ntype: 'vbox', align: 'stretch'},
                    items : [{
                        ntype: 'toolbar',
                        flex : '0 1 auto',
                        items: [{
                            module    : _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
                            checked   : true,
                            labelText : 'Logarithmic Scale',
                            labelWidth: 135,
                            reference : 'logarithmic-scale-checkbox',
                            listeners : {
                                change: 'onLogarithmicScaleChange'
                            }
                        }, {
                            module    : _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./node_modules/neo.mjs/apps/covid/view/TableContainerController.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/covid/view/TableContainerController.mjs ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TableContainerController; });
/* harmony import */ var _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");
/* harmony import */ var _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Covid.view.TableContainerController
 * @extends Neo.controller.Component
 */
class TableContainerController extends _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
                        _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(dataArray, item);
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

/***/ "./node_modules/neo.mjs/apps/covid/view/WorldMapComponent.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/covid/view/WorldMapComponent.mjs ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorldMapComponent; });
/* harmony import */ var _src_component_wrapper_AmChart_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/component/wrapper/AmChart.mjs */ "./node_modules/neo.mjs/src/component/wrapper/AmChart.mjs");


/**
 * @class Covid.view.WorldMapComponent
 * @extends Neo.component.wrapper.AmChart
 */
class WorldMapComponent extends _src_component_wrapper_AmChart_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ "./node_modules/neo.mjs/apps/covid/view/WorldMapContainer.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/covid/view/WorldMapContainer.mjs ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorldMapContainer; });
/* harmony import */ var _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/form/field/Number.mjs */ "./node_modules/neo.mjs/src/form/field/Number.mjs");
/* harmony import */ var _src_container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/container/Toolbar.mjs */ "./node_modules/neo.mjs/src/container/Toolbar.mjs");
/* harmony import */ var _WorldMapComponent_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WorldMapComponent.mjs */ "./node_modules/neo.mjs/apps/covid/view/WorldMapComponent.mjs");
/* harmony import */ var _WorldMapContainerController_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WorldMapContainerController.mjs */ "./node_modules/neo.mjs/apps/covid/view/WorldMapContainerController.mjs");






/**
 * @class Covid.view.WorldMapContainer
 * @extends Neo.container.Base
 */
class WorldMapContainer extends _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
            module: _src_container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            items : [{
                ntype    : 'label',
                reference: 'currentMapViewLabel',
                style    : {marginRight: '20px'},
                text     : 'Current view: Active'
            }, {
                module       : _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
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

/***/ "./node_modules/neo.mjs/apps/covid/view/WorldMapContainerController.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/covid/view/WorldMapContainerController.mjs ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorldMapContainerController; });
/* harmony import */ var _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");


/**
 * @class Covid.view.WorldMapContainerController
 * @extends Neo.controller.Component
 */
class WorldMapContainerController extends _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ "./node_modules/neo.mjs/apps/covid/view/country/Gallery.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/covid/view/country/Gallery.mjs ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountryGallery; });
/* harmony import */ var _store_Countries_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/Countries.mjs */ "./node_modules/neo.mjs/apps/covid/store/Countries.mjs");
/* harmony import */ var _src_component_Gallery_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/component/Gallery.mjs */ "./node_modules/neo.mjs/src/component/Gallery.mjs");
/* harmony import */ var _Util_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util.mjs */ "./node_modules/neo.mjs/apps/covid/Util.mjs");




/**
 * @class Covid.view.country.Gallery
 * @extends Neo.component.Gallery
 */
class CountryGallery extends _src_component_Gallery_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
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

/***/ "./node_modules/neo.mjs/apps/covid/view/country/Helix.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/covid/view/country/Helix.mjs ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountryHelix; });
/* harmony import */ var _store_Countries_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/Countries.mjs */ "./node_modules/neo.mjs/apps/covid/store/Countries.mjs");
/* harmony import */ var _src_component_Helix_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/component/Helix.mjs */ "./node_modules/neo.mjs/src/component/Helix.mjs");
/* harmony import */ var _Util_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util.mjs */ "./node_modules/neo.mjs/apps/covid/Util.mjs");




/**
 * @class Covid.view.country.Helix
 * @extends Neo.component.Helix
 */
class CountryHelix extends _src_component_Helix_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
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

/***/ "./node_modules/neo.mjs/apps/covid/view/country/HistoricalDataTable.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/covid/view/country/HistoricalDataTable.mjs ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HistoricalDataTable; });
/* harmony import */ var _src_table_Container_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/table/Container.mjs */ "./node_modules/neo.mjs/src/table/Container.mjs");
/* harmony import */ var _store_HistoricalData_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/HistoricalData.mjs */ "./node_modules/neo.mjs/apps/covid/store/HistoricalData.mjs");
/* harmony import */ var _Util_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util.mjs */ "./node_modules/neo.mjs/apps/covid/Util.mjs");




/**
 * @class Covid.view.country.HistoricalDataTable
 * @extends Neo.table.Container
 */
class HistoricalDataTable extends _src_table_Container_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ "./node_modules/neo.mjs/apps/covid/view/country/LineChartComponent.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/covid/view/country/LineChartComponent.mjs ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LineChartComponent; });
/* harmony import */ var _src_component_wrapper_AmChart_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/component/wrapper/AmChart.mjs */ "./node_modules/neo.mjs/src/component/wrapper/AmChart.mjs");


/**
 * @class Covid.view.country.LineChartComponent
 * @extends Neo.component.wrapper.AmChart
 */
class LineChartComponent extends _src_component_wrapper_AmChart_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ "./node_modules/neo.mjs/apps/covid/view/country/Table.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/covid/view/country/Table.mjs ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Table; });
/* harmony import */ var _src_table_Container_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/table/Container.mjs */ "./node_modules/neo.mjs/src/table/Container.mjs");
/* harmony import */ var _store_Countries_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/Countries.mjs */ "./node_modules/neo.mjs/apps/covid/store/Countries.mjs");
/* harmony import */ var _Util_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util.mjs */ "./node_modules/neo.mjs/apps/covid/Util.mjs");




/**
 * @class Covid.view.country.Table
 * @extends Neo.table.Container
 */
class Table extends _src_table_Container_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ "./node_modules/neo.mjs/apps/covid/view/mapboxGl/Component.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/covid/view/mapboxGl/Component.mjs ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
/* harmony import */ var _src_component_wrapper_MapboxGL_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/component/wrapper/MapboxGL.mjs */ "./node_modules/neo.mjs/src/component/wrapper/MapboxGL.mjs");


/**
 * @class Covid.view.mapboxGl.Component
 * @extends Neo.component.wrapper.MapboxGL
 */
class Component extends _src_component_wrapper_MapboxGL_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ "./node_modules/neo.mjs/apps/covid/view/mapboxGl/Container.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/covid/view/mapboxGl/Container.mjs ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
/* harmony import */ var _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/form/field/CheckBox.mjs */ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs");
/* harmony import */ var _Component_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component.mjs */ "./node_modules/neo.mjs/apps/covid/view/mapboxGl/Component.mjs");
/* harmony import */ var _ContainerController_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContainerController.mjs */ "./node_modules/neo.mjs/apps/covid/view/mapboxGl/ContainerController.mjs");
/* harmony import */ var _src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/container/Panel.mjs */ "./node_modules/neo.mjs/src/container/Panel.mjs");






/**
 * @class Covid.view.mapboxGl.Container
 * @extends Neo.container.Base
 */
class Container extends _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
            module      : _src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
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
                module    : _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
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

/***/ "./node_modules/neo.mjs/apps/covid/view/mapboxGl/ContainerController.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/covid/view/mapboxGl/ContainerController.mjs ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContainerController; });
/* harmony import */ var _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");


/**
 * @class Covid.view.mapboxGl.ContainerController
 * @extends Neo.controller.Component
 */
class ContainerController extends _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL2NvdmlkL1V0aWwubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvY292aWQvYXBwLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL2NvdmlkL21vZGVsL0NvdW50cnkubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvY292aWQvbW9kZWwvSGlzdG9yaWNhbERhdGEubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvY292aWQvc3RvcmUvQ291bnRyaWVzLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL2NvdmlkL3N0b3JlL0hpc3RvcmljYWxEYXRhLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL2NvdmlkL3ZpZXcvQXR0cmlidXRpb25Db21wb25lbnQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvY292aWQvdmlldy9Gb290ZXJDb250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvY292aWQvdmlldy9HYWxsZXJ5Q29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL2NvdmlkL3ZpZXcvR2FsbGVyeUNvbnRhaW5lckNvbnRyb2xsZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvY292aWQvdmlldy9IZWFkZXJDb250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvY292aWQvdmlldy9IZWxpeENvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9jb3ZpZC92aWV3L0hlbGl4Q29udGFpbmVyQ29udHJvbGxlci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9jb3ZpZC92aWV3L01haW5Db250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvY292aWQvdmlldy9NYWluQ29udGFpbmVyQ29udHJvbGxlci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9jb3ZpZC92aWV3L1RhYmxlQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL2NvdmlkL3ZpZXcvVGFibGVDb250YWluZXJDb250cm9sbGVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL2NvdmlkL3ZpZXcvV29ybGRNYXBDb21wb25lbnQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvY292aWQvdmlldy9Xb3JsZE1hcENvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9jb3ZpZC92aWV3L1dvcmxkTWFwQ29udGFpbmVyQ29udHJvbGxlci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9jb3ZpZC92aWV3L2NvdW50cnkvR2FsbGVyeS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9jb3ZpZC92aWV3L2NvdW50cnkvSGVsaXgubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvY292aWQvdmlldy9jb3VudHJ5L0hpc3RvcmljYWxEYXRhVGFibGUubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvY292aWQvdmlldy9jb3VudHJ5L0xpbmVDaGFydENvbXBvbmVudC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9jb3ZpZC92aWV3L2NvdW50cnkvVGFibGUubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvY292aWQvdmlldy9tYXBib3hHbC9Db21wb25lbnQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvY292aWQvdmlldy9tYXBib3hHbC9Db250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvY292aWQvdmlldy9tYXBib3hHbC9Db250YWluZXJDb250cm9sbGVyLm1qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUEyQzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwREFBSTtBQUN2Qiw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnR0FBZ0csT0FBTztBQUN2RyxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx5RUFBeUUsT0FBTyxJQUFJLE1BQU07QUFDMUY7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlIGZyb20gJy4uLy4uL3NyYy9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBTdGF0aWMgdXRpbGl0eSBjbGFzc1xuICogQGNsYXNzIENvdmlkLlV0aWxcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgVXRpbCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgcmVnZXggdG8gcmVwbGFjZSBibGFuayBjaGFyc1xuICAgICAgICAgKiBAbWVtYmVyIHtSZWdFeHB9IGZsYWdSZWdFeD0vIC9naVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIGZsYWdSZWdFeDogLyAvZ2ksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9OdW1iZXIvdG9Mb2NhbGVTdHJpbmdcbiAgICAgICAgICogQ2hhbmdlIHRoaXMgY29uZmlnIHRvIGVuZm9yY2UgYSBjb3VudHkgc3BlY2lmaWMgZm9ybWF0dGluZyAoZS5nLiAnZGUtREUnKVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGxvY2FsZXM9J2RlZmF1bHQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgbG9jYWxlczogJ2RlZmF1bHQnXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdDb3ZpZC5VdGlsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdDb3ZpZC5VdGlsJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciB0aGUgY2FzZXNQZXJPbmVNaWxsaW9uIGNvbHVtbiB0byBzaG93ICUgb2YgcG9wdWxhdGlvblxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEudmFsdWVcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyBmb3JtYXRJbmZlY3RlZChkYXRhKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGRhdGEudmFsdWU7XG5cbiAgICAgICAgaWYgKCFOZW8uaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgfHwgJ04vQSc7XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgLyAxMDApO1xuICAgICAgICB2YWx1ZSAvPSAxMDA7XG5cbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0ZpeGVkKDIpICsgJyAlJztcblxuICAgICAgICByZXR1cm4gdmFsdWUudG9Mb2NhbGVTdHJpbmcoVXRpbC5sb2NhbGVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIGdldCB1c2VkIGFzIGEgZ3JpZCByZW5kZXJlciwgc28gdGhlIDJuZCBwYXJhbSBpcyBhbiBvdmVybG9hZCAod291bGQgYmUge09iamVjdH0gcmVjb3JkKVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEudmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2NvbG9yXVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIGZvcm1hdE51bWJlcihkYXRhLCBjb2xvcikge1xuICAgICAgICBsZXQgdmFsdWUgPSBkYXRhLnZhbHVlO1xuXG4gICAgICAgIGlmICghTmVvLmlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlIHx8ICdOL0EnO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0xvY2FsZVN0cmluZyhVdGlsLmxvY2FsZXMpO1xuXG4gICAgICAgIHJldHVybiB0eXBlb2YgY29sb3IgIT09ICdzdHJpbmcnID8gdmFsdWUgOiBgPHNwYW4gc3R5bGU9XCJjb2xvcjoke2NvbG9yfTtcIj4ke3ZhbHVlfTwvc3Bhbj5gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSB1cmxcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Q291bnRyeUZsYWdVcmwobmFtZSkge1xuICAgICAgICBjb25zdCBtYXAgPSB7XG4gICAgICAgICAgICAnYm9zbmlhJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdib3NuaWEtYW5kLWhlcnplZ292aW5hJyxcbiAgICAgICAgICAgICdjYWJvLXZlcmRlJyAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2NhcGUtdmVyZGUnLFxuICAgICAgICAgICAgJ2NhcicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnY2VudHJhbC1hZnJpY2FuLXJlcHVibGljJyxcbiAgICAgICAgICAgICdjYXJpYmJlYW4tbmV0aGVybGFuZHMnICAgICAgICAgICAgICAgIDogJ25ldGhlcmxhbmRzJyxcbiAgICAgICAgICAgICdjaGFubmVsLWlzbGFuZHMnICAgICAgICAgICAgICAgICAgICAgIDogJ2plcnNleScsXG4gICAgICAgICAgICAnY8O0dGUtZFxcJ2l2b2lyZScgICAgICAgICAgICAgICAgICAgICAgIDogJ2l2b3J5LWNvYXN0JyxcbiAgICAgICAgICAgICdjb25nbycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3JlcHVibGljLW9mLXRoZS1jb25nbycsXG4gICAgICAgICAgICAnY29uZ28sLXRoZS1kZW1vY3JhdGljLXJlcHVibGljLW9mLXRoZSc6ICdkZW1vY3JhdGljLXJlcHVibGljLW9mLWNvbmdvJyxcbiAgICAgICAgICAgICdjdXJhw6dhbycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdjdXJhY2FvJyxcbiAgICAgICAgICAgICdjemVjaGlhJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2N6ZWNoLXJlcHVibGljJyxcbiAgICAgICAgICAgICdkaWFtb25kLXByaW5jZXNzJyAgICAgICAgICAgICAgICAgICAgIDogJ2phcGFuJywgLy8gY3J1aXNlIHNoaXBcbiAgICAgICAgICAgICdkcmMnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2RlbW9jcmF0aWMtcmVwdWJsaWMtb2YtY29uZ28nLFxuICAgICAgICAgICAgJ2VsLXNhbHZhZG9yJyAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnc2FsdmFkb3InLFxuICAgICAgICAgICAgJ2Vzd2F0aW5pJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnc3dhemlsYW5kJyxcbiAgICAgICAgICAgICdmYWVyb2UtaXNsYW5kcycgICAgICAgICAgICAgICAgICAgICAgIDogJ2Zhcm9lLWlzbGFuZHMnLFxuICAgICAgICAgICAgJ2ZhbGtsYW5kLWlzbGFuZHMtKG1hbHZpbmFzKScgICAgICAgICAgOiAnZmFsa2xhbmQtaXNsYW5kcycsXG4gICAgICAgICAgICAnZnJlbmNoLWd1aWFuYScgICAgICAgICAgICAgICAgICAgICAgICA6ICdmcmFuY2UnLCAvLyA/XG4gICAgICAgICAgICAnZ3VhZGVsb3VwZScgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdmcmFuY2UnLCAvLyA/XG4gICAgICAgICAgICAnaG9seS1zZWUtKHZhdGljYW4tY2l0eS1zdGF0ZSknICAgICAgICA6ICd2YXRpY2FuLWNpdHknLFxuICAgICAgICAgICAgJ2lyYW4sLWlzbGFtaWMtcmVwdWJsaWMtb2YnICAgICAgICAgICAgOiAnaXJhbicsXG4gICAgICAgICAgICAnbGFvLXBlb3BsZVxcJ3MtZGVtb2NyYXRpYy1yZXB1YmxpYycgICAgOiAnbGFvcycsXG4gICAgICAgICAgICAnbGlieWFuLWFyYWItamFtYWhpcml5YScgICAgICAgICAgICAgICA6ICdsaWJ5YScsXG4gICAgICAgICAgICAnbWFjZWRvbmlhJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdyZXB1YmxpYy1vZi1tYWNlZG9uaWEnLFxuICAgICAgICAgICAgJ21heW90dGUnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnZnJhbmNlJywgLy8gP1xuICAgICAgICAgICAgJ21vbGRvdmEsLXJlcHVibGljLW9mJyAgICAgICAgICAgICAgICAgOiAnbW9sZG92YScsXG4gICAgICAgICAgICAnbXMtemFhbmRhbScgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICduZXRoZXJsYW5kcycsIC8vIGNydWlzZSBzaGlwXG4gICAgICAgICAgICAnbmV3LWNhbGVkb25pYScgICAgICAgICAgICAgICAgICAgICAgICA6ICdmcmFuY2UnLFxuICAgICAgICAgICAgJ3BhbGVzdGluaWFuLXRlcnJpdG9yeSwtb2NjdXBpZWQnICAgICAgOiAncGFsZXN0aW5lJyxcbiAgICAgICAgICAgICdwb2xhbmQnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3JlcHVibGljLW9mLXBvbGFuZCcsXG4gICAgICAgICAgICAncsOpdW5pb24nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnZnJhbmNlJyxcbiAgICAgICAgICAgICdzLi1rb3JlYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3NvdXRoLWtvcmVhJyxcbiAgICAgICAgICAgICdzdC4tYmFydGgnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3N0LWJhcnRzJyxcbiAgICAgICAgICAgICdzYWludC1sdWNpYScgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3N0LWx1Y2lhJyxcbiAgICAgICAgICAgICdzYWludC1tYXJ0aW4nICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3NpbnQtbWFhcnRlbicsXG4gICAgICAgICAgICAnc2FpbnQtcGllcnJlLW1pcXVlbG9uJyAgICAgICAgICAgICAgICA6ICdmcmFuY2UnLFxuICAgICAgICAgICAgJ3NhaW50LXZpbmNlbnQtYW5kLXRoZS1ncmVuYWRpbmVzJyAgICAgOiAnc3QtdmluY2VudC1hbmQtdGhlLWdyZW5hZGluZXMnLFxuICAgICAgICAgICAgJ3N5cmlhbi1hcmFiLXJlcHVibGljJyAgICAgICAgICAgICAgICAgOiAnc3lyaWEnLFxuICAgICAgICAgICAgJ3RhbnphbmlhLC11bml0ZWQtcmVwdWJsaWMtb2YnICAgICAgICAgOiAndGFuemFuaWEnLFxuICAgICAgICAgICAgJ3RpbW9yLWxlc3RlJyAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnZWFzdC10aW1vcicsXG4gICAgICAgICAgICAndHVya3MtYW5kLWNhaWNvcy1pc2xhbmRzJyAgICAgICAgICAgICA6ICd0dXJrcy1hbmQtY2FpY29zJyxcbiAgICAgICAgICAgICd1LnMuLXZpcmdpbi1pc2xhbmRzJyAgICAgICAgICAgICAgICAgIDogJ3Zpcmdpbi1pc2xhbmRzJyxcbiAgICAgICAgICAgICd1YWUnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3VuaXRlZC1hcmFiLWVtaXJhdGVzJyxcbiAgICAgICAgICAgICd1aycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3VuaXRlZC1raW5nZG9tJyxcbiAgICAgICAgICAgICd1c2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3VuaXRlZC1zdGF0ZXMtb2YtYW1lcmljYScsXG4gICAgICAgICAgICAndXpiZWtpc3RhbicgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd1emJla2lzdG4nLFxuICAgICAgICAgICAgJ3ZlbmV6dWVsYSwtYm9saXZhcmlhbi1yZXB1YmxpYy1vZicgICAgOiAndmVuZXp1ZWxhJyxcbiAgICAgICAgICAgICd2aWV0LW5hbScgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3ZpZXRuYW0nXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGltYWdlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKFV0aWwuZmxhZ1JlZ0V4LCAnLScpO1xuXG4gICAgICAgIGltYWdlTmFtZSA9IG1hcFtpbWFnZU5hbWVdIHx8IGltYWdlTmFtZTtcblxuICAgICAgICBpZiAoTmVvLmNvbmZpZy5pc0dpdEh1YlBhZ2VzKSB7XG4gICAgICAgICAgICBsZXQgcGF0aCA9ICcuLi8uLi8uLi8uLi9yZXNvdXJjZXMvaW1hZ2VzL2ZsYXRpY29uL2NvdW50cnlfZmxhZ3MvcG5nLycgKyBpbWFnZU5hbWUgKyAnLnBuZyc7XG5cbiAgICAgICAgICAgIGlmICghTmVvLmNvbmZpZy5pc0V4cGVyaW1lbnRhbCkge1xuICAgICAgICAgICAgICAgIHBhdGggPSAnLi4vLi4vJyArIHBhdGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXRoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbmVvbWpzL3BhZ2VzL21hc3Rlci9yZXNvdXJjZXMvaW1hZ2VzL2ZsYXRpY29uL2NvdW50cnlfZmxhZ3MvcG5nLycgKyBpbWFnZU5hbWUgKyAnLnBuZyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLmluZGV4XG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBzdGF0aWMgaW5kZXhSZW5kZXJlcihkYXRhKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbHMgOiBbJ25lby1pbmRleC1jb2x1bW4nLCAnbmVvLXRhYmxlLWNlbGwnXSxcbiAgICAgICAgICAgIGh0bWw6IGRhdGEuaW5kZXggKyAxXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhVdGlsKTtcblxuZXhwb3J0IGRlZmF1bHQgVXRpbDsiLCJpbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuL3ZpZXcvTWFpbkNvbnRhaW5lci5tanMnO1xuXG5jb25zdCBvblN0YXJ0ID0gKCkgPT4gTmVvLmFwcCh7XG4gICAgYXBwUGF0aCA6ICdhcHBzL2NvdmlkLycsXG4gICAgbWFpblZpZXc6IE1haW5Db250YWluZXIsXG4gICAgbmFtZSAgICA6ICdDb3ZpZCdcbn0pO1xuXG5leHBvcnQge29uU3RhcnQgYXMgb25TdGFydH07IiwiaW1wb3J0IE1vZGVsICBmcm9tICcuLi8uLi8uLi9zcmMvZGF0YS9Nb2RlbC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb3ZpZC5tb2RlbC5Db3VudHJ5XG4gKiBAZXh0ZW5kcyBOZW8uZGF0YS5Nb2RlbFxuICovXG5jbGFzcyBDb3VudHJ5IGV4dGVuZHMgTW9kZWwge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQubW9kZWwuQ291bnRyeScsXG5cbiAgICAgICAgZmllbGRzOiBbe1xuICAgICAgICAgICAgbmFtZTogJ2FjdGl2ZScsXG4gICAgICAgICAgICB0eXBlOiAnSW50ZWdlcidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2Nhc2VzJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnY2FzZXNQZXJPbmVNaWxsaW9uJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnY291bnRyeScsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnY291bnRyeUluZm8nLFxuICAgICAgICAgICAgdHlwZTogJ09iamVjdCcgLy8gX2lkLCBmbGFnLCBpc28yLCBpc28zLCBsYXQsIGxvbmdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2NyaXRpY2FsJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZGVhdGhzJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnaW5kZXgnLFxuICAgICAgICAgICAgdHlwZTogJ0ludGVnZXInXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdpbmZlY3RlZCcsIC8vIHJlbmRlcmVyIHBhcnNlcyB0byAlIG9mIHBvcHVsYXRpb25cbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAncmVjb3ZlcmVkJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAndGVzdHMnLFxuICAgICAgICAgICAgdHlwZTogJ0ludGVnZXInXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICd0ZXN0c1Blck9uZU1pbGxpb24nLFxuICAgICAgICAgICAgdHlwZTogJ0ludGVnZXInXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICd0b2RheUNhc2VzJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAndG9kYXlEZWF0aHMnLFxuICAgICAgICAgICAgdHlwZTogJ0ludGVnZXInXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ291bnRyeSk7XG5cbmV4cG9ydCB7Q291bnRyeSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgTW9kZWwgIGZyb20gJy4uLy4uLy4uL3NyYy9kYXRhL01vZGVsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLm1vZGVsLkhpc3RvcmljYWxEYXRhXG4gKiBAZXh0ZW5kcyBOZW8uZGF0YS5Nb2RlbFxuICovXG5jbGFzcyBIaXN0b3JpY2FsRGF0YSBleHRlbmRzIE1vZGVsIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkLm1vZGVsLkhpc3RvcmljYWxEYXRhJyxcblxuICAgICAgICBmaWVsZHM6IFt7XG4gICAgICAgICAgICBuYW1lOiAnYWN0aXZlJywgLy8gZG9lcyBub3QgZXhpc3QgaW4gdGhlIGFwaSA9PiBjYXNlcyAtIGRlYXRocyAtIHJlY292ZXJlZFxuICAgICAgICAgICAgdHlwZTogJ2ludCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2Nhc2VzJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbnQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdkYXRlJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnIC8vIGRhdGUgPT4gMS8yMi8yMFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZGFpbHlBY3RpdmUnLFxuICAgICAgICAgICAgdHlwZTogJ2ludCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2RhaWx5Q2FzZXMnLFxuICAgICAgICAgICAgdHlwZTogJ2ludCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2RhaWx5RGVhdGhzJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbnQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdkYWlseVJlY292ZXJlZCcsXG4gICAgICAgICAgICB0eXBlOiAnaW50J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZGVhdGhzJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbnQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdyZWNvdmVyZWQnLFxuICAgICAgICAgICAgdHlwZTogJ2ludCdcbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIaXN0b3JpY2FsRGF0YSk7XG5cbmV4cG9ydCB7SGlzdG9yaWNhbERhdGEgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvdW50cnkgZnJvbSAnLi4vbW9kZWwvQ291bnRyeS5tanMnO1xuaW1wb3J0IFN0b3JlICAgZnJvbSAnLi4vLi4vLi4vc3JjL2RhdGEvU3RvcmUubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgQ292aWQuc3RvcmUuQ291bnRyaWVzXG4gKiBAZXh0ZW5kcyBOZW8uZGF0YS5TdG9yZVxuICovXG5jbGFzcyBDb3VudHJpZXMgZXh0ZW5kcyBTdG9yZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdDb3ZpZC5zdG9yZS5Db3VudHJpZXMnLFxuXG4gICAgICAgIGtleVByb3BlcnR5OiAnY291bnRyeScsXG4gICAgICAgIG1vZGVsICAgICAgOiBDb3VudHJ5LFxuXG4gICAgICAgIHNvcnRlcnM6IFt7XG4gICAgICAgICAgICBwcm9wZXJ0eSA6ICdjYXNlcycsXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdERVNDJ1xuICAgICAgICB9XVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENvdW50cmllcyk7XG5cbmV4cG9ydCB7Q291bnRyaWVzIGFzIGRlZmF1bHR9OyIsImltcG9ydCBIaXN0b3JpY2FsRGF0YU1vZGVsIGZyb20gJy4uL21vZGVsL0hpc3RvcmljYWxEYXRhLm1qcyc7XG5pbXBvcnQgU3RvcmUgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvZGF0YS9TdG9yZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb3ZpZC5zdG9yZS5IaXN0b3JpY2FsRGF0YVxuICogQGV4dGVuZHMgTmVvLmRhdGEuU3RvcmVcbiAqL1xuY2xhc3MgSGlzdG9yaWNhbERhdGEgZXh0ZW5kcyBTdG9yZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdDb3ZpZC5zdG9yZS5IaXN0b3JpY2FsRGF0YScsXG5cbiAgICAgICAga2V5UHJvcGVydHk6ICdkYXRlJyxcbiAgICAgICAgbW9kZWwgICAgICA6IEhpc3RvcmljYWxEYXRhTW9kZWwsXG5cbiAgICAgICAgc29ydGVyczogW3tcbiAgICAgICAgICAgIHByb3BlcnR5IDogJ2RhdGUnLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnREVTQydcbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIaXN0b3JpY2FsRGF0YSk7XG5cbmV4cG9ydCB7SGlzdG9yaWNhbERhdGEgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi9zcmMvY29tcG9uZW50L0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgQ292aWQudmlldy5BdHRyaWJ1dGlvbkNvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIEF0dHJpYnV0aW9uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nQ292aWQudmlldy5BdHRyaWJ1dGlvbkNvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQudmlldy5BdHRyaWJ1dGlvbkNvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnY292aWQtYXR0cmlidXRpb24tY29tcG9uZW50J11cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ2NvdmlkLWF0dHJpYnV0aW9uLWNvbXBvbmVudCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSB2ZG9tXG4gICAgICAgICAqL1xuICAgICAgICB2ZG9tOiB7XG4gICAgICAgICAgICB0YWcgIDogJ2RpdicsXG4gICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzIwcHgnfSxcbiAgICAgICAgICAgIGNuICAgOiBbe1xuICAgICAgICAgICAgICAgIHRhZyA6ICdoMicsXG4gICAgICAgICAgICAgICAgaHRtbDogJ0F0dHJpYnV0aW9uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6ICd1bCcsXG4gICAgICAgICAgICAgICAgY246IFtcbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ2xpJywgaHRtbDogJ1RoZSBsb2dvcyB3ZXJlIGNyZWF0ZWQgYnkgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmRyaWVmbWVpZXIuY29tL1wiPlNlYmFzdGlhbiBEcmllZm1laWVyPC9hPi4gVGhhbmsgeW91ISd9LFxuICAgICAgICAgICAgICAgICAgICB7dGFnOiAnbGknLCBodG1sOiBbJ1RoZSBsb2dvcyBhcmUgYmFzZWQgb24gdGhlIGltYWdlIGZyb20gPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vcGhpbC5jZGMuZ292L0RldGFpbHMuYXNweD9waWQ9MjMzMTJcIj5DREMgUHVibGljIEhlYWx0aCBJbWFnZSBMaWJyYXJ5IChQSElMKTwvYT4sPC9icj4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NvIGNyZWRpdHMgdG8gdGhlIGNvbnRlbnQgcHJvdmlkZXJzIENEQy8gQWxpc3NhIEVja2VydCwgTVM7IERhbiBIaWdnaW5zLCBNQU1TLiddLmpvaW4oJycpfSxcbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ2xpJywgaHRtbDogJ0RhdGEgcHJvdmlkZWQgYnk6IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vTm92ZWxDT1ZJRC9BUElcIj5Ob3ZlbENPVklEIC8gQVBJPC9hPi4nfSxcbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ2xpJywgaHRtbDogJ0NvdW50cnkgRmxhZyBJY29ucyBtYWRlIGJ5IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vYXV0aG9ycy9mcmVlcGlrXCIgdGl0bGU9XCJGcmVlcGlrXCI+RnJlZXBpazwvYT4gZnJvbSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL1wiIHRpdGxlPVwiRmxhdGljb25cIj4gd3d3LmZsYXRpY29uLmNvbTwvYT4uJ30sXG4gICAgICAgICAgICAgICAgICAgIHt0YWc6ICdsaScsIGh0bWw6ICdDaGFydHMgZ290IGNyZWF0ZWQgd2l0aCA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuYW1jaGFydHMuY29tL2RvY3MvdjQvXCI+YW1DaGFydHMgNDwvYT4uJ30sXG4gICAgICAgICAgICAgICAgICAgIHt0YWc6ICdsaScsIGh0bWw6ICdUaGUgQXBwIGlzIGNyZWF0ZWQgd2l0aCB0aGUgd2Vid29ya2VycyBkcml2ZW4gVUkgZnJhbWV3b3JrIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbmVvbWpzL25lb1wiPm5lby5tanM8L2E+Lid9LFxuICAgICAgICAgICAgICAgICAgICB7dGFnOiAnbGknLCBodG1sOiAnVGhlIE1hcGJveCBHTCBNYXAgaXMgYmFzZWQgb24gPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZG9jcy5tYXBib3guY29tL21hcGJveC1nbC1qcy9hcGkvXCI+TWFwYm94IEdMIEpTPC9hPi4nfSxcbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ2xpJywgaHRtbDogJ1RoZSBNYXAgJiBIZWF0bWFwIHN0eWxlcyBhcmUgc3Ryb25nbHkgaW5zcGlyZWQgYnkgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vYmxvZy5tYXBib3guY29tL3Zpc3VhbGl6aW5nLXRoZS1wcm9ncmVzc2lvbi1vZi10aGUtMjAxOS1uY292LW91dGJyZWFrLTY2NzYzZWI1OWU3OVwiPlZpc3VhbGl6aW5nIHRoZSBwcm9ncmVzc2lvbiBvZiB0aGUgMjAxOS1uQ29WIG91dGJyZWFrPC9hPi4nfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhBdHRyaWJ1dGlvbkNvbXBvbmVudCk7XG5cbmV4cG9ydCB7QXR0cmlidXRpb25Db21wb25lbnQgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi8uLi9zcmMvY29udGFpbmVyL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgQ292aWQudmlldy5Gb290ZXJDb250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBGb290ZXJDb250YWluZXIgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdDb3ZpZC52aWV3LkZvb3RlckNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQudmlldy5Gb290ZXJDb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBoZWlnaHQ9MjBcbiAgICAgICAgICovXG4gICAgICAgIGhlaWdodDogMjUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGxheW91dD17bnR5cGU6ICdoYm94J31cbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCd9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSByZWZlcmVuY2U9J2Zvb3RlcidcbiAgICAgICAgICovXG4gICAgICAgIHJlZmVyZW5jZTogJ2Zvb3RlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHN0eWxlPXtvdmVyZmxvdzogJ3Zpc2libGUnfVxuICAgICAgICAgKi9cbiAgICAgICAgc3R5bGU6IHtvdmVyZmxvdzogJ3Zpc2libGUnfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gaXRlbURlZmF1bHRzXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgIGNscyAgOiBbJ25lby1saW5rLWNvbG9yJ10sXG4gICAgICAgICAgICBzdHlsZToge2ZvbnRTaXplOiAnMTNweCcsIHBhZGRpbmc6ICcxMHB4JywgcGFkZGluZ1RvcDogMH1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtc1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBodG1sIDogJ0FwcCBjcmVhdGVkIHdpdGggPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9uZW9tanMvbmVvXCI+bmVvLm1qczwvYT4uJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBmbGV4OiAxXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGh0bWwgOiAnRGF0YSBwcm92aWRlZCBieSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2Rpc2Vhc2Utc2gvQVBJXCI+ZGlzZWFzZS5zaC9BUEk8L2E+LidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZmxleDogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBodG1sIDogJ0NvdW50cnkgRmxhZyBJY29ucyBtYWRlIGJ5IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vYXV0aG9ycy9mcmVlcGlrXCIgdGl0bGU9XCJGcmVlcGlrXCI+RnJlZXBpazwvYT4gZnJvbSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL1wiIHRpdGxlPVwiRmxhdGljb25cIj4gd3d3LmZsYXRpY29uLmNvbTwvYT4uJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgIGNscyAgICA6IFsnbmVvLWJ1dHRvbiddLFxuICAgICAgICAgICAgaGFuZGxlcjogJ29uUmVtb3ZlRm9vdGVyQnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgaGVpZ2h0IDogMjQsXG4gICAgICAgICAgICBzdHlsZSAgOiB7bWFyZ2luOiAwLCBtYXJnaW5SaWdodDogJzEwcHgnLCBtYXJnaW5Ub3A6ICctNXB4J30sXG4gICAgICAgICAgICB0ZXh0ICAgOiAnUmVtb3ZlIEZvb3RlcidcbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhGb290ZXJDb250YWluZXIpO1xuXG5leHBvcnQge0Zvb3RlckNvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQm94TGFiZWwgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbXBvbmVudC9Cb3hMYWJlbC5tanMnO1xuaW1wb3J0IENvbnRhaW5lciAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9jb250YWluZXIvQmFzZS5tanMnO1xuaW1wb3J0IEdhbGxlcnkgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vY291bnRyeS9HYWxsZXJ5Lm1qcyc7XG5pbXBvcnQgR2FsbGVyeUNvbnRhaW5lckNvbnRyb2xsZXIgZnJvbSAnLi9HYWxsZXJ5Q29udGFpbmVyQ29udHJvbGxlci5tanMnO1xuaW1wb3J0IFBhbmVsICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9jb250YWluZXIvUGFuZWwubWpzJztcbmltcG9ydCBSYW5nZUZpZWxkICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvZm9ybS9maWVsZC9SYW5nZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb3ZpZC52aWV3LkdhbGxlcnlDb250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBHYWxsZXJ5Q29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nQ292aWQudmlldy5HYWxsZXJ5Q29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdDb3ZpZC52aWV3LkdhbGxlcnlDb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1nYWxsZXJ5LW1haW5jb250YWluZXInLCAnbmVvLXZpZXdwb3J0J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tZ2FsbGVyeS1tYWluY29udGFpbmVyJywgJ25lby12aWV3cG9ydCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50fG51bGx9IGNvbnRyb2xsZXI9R2FsbGVyeUNvbnRhaW5lckNvbnRyb2xsZXJcbiAgICAgICAgICovXG4gICAgICAgIGNvbnRyb2xsZXI6IEdhbGxlcnlDb250YWluZXJDb250cm9sbGVyLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbXBvbmVudC5HYWxsZXJ5fG51bGx9IGdhbGxlcnk9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZ2FsbGVyeTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBnYWxsZXJ5Q29uZmlnPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGdhbGxlcnlDb25maWc6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gbGF5b3V0PXtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgICAgICAgKi9cbiAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXXxudWxsfSBpdGVtc1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgZmxleCAgOiAxLFxuICAgICAgICAgICAgbGF5b3V0OiAnZml0JyxcbiAgICAgICAgICAgIGl0ZW1zIDogW11cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgOiBQYW5lbCxcbiAgICAgICAgICAgIGNscyAgICAgIDogWyduZW8tY29uZmlndXJhdGlvbi1wYW5lbCcsICduZW8tcGFuZWwnLCAnbmVvLWNvbnRhaW5lciddLFxuICAgICAgICAgICAgbGF5b3V0ICAgOiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgICAgICByZWZlcmVuY2U6ICdjb250cm9scy1wYW5lbCcsXG4gICAgICAgICAgICBzdHlsZSAgICA6IHtiYWNrZ3JvdW5kQ29sb3I6ICcjMmIyYjJiJ30sXG4gICAgICAgICAgICB3aWR0aCAgICA6IDI2MCxcblxuICAgICAgICAgICAgY29udGFpbmVyQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtvdmVyZmxvd1k6ICdzY3JvbGwnfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaGVhZGVyczogW3tcbiAgICAgICAgICAgICAgICBkb2NrOiAndG9wJyxcbiAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvbkNvbGxhcHNlQnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnWCdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ0dhbGxlcnkgQ29udHJvbHMnXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dLFxuXG4gICAgICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgICAgICBmbGV4ICAgICAgICAgOiAnMCAxIGF1dG8nLFxuICAgICAgICAgICAgICAgIGxhYmVsV2lkdGggICA6ICcxMTBweCcsXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgICAgIDoge3BhZGRpbmc6ICcxMHB4J30sXG4gICAgICAgICAgICAgICAgdXNlSW5wdXRFdmVudDogdHJ1ZVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgOiBSYW5nZUZpZWxkLFxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1RyYW5zbGF0ZSBYJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDUwMDAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3RyYW5zbGF0ZVgnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogMCxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlIDogJ29uUmFuZ2VmaWVsZENoYW5nZScsXG4gICAgICAgICAgICAgICAgICAgIG1vdW50ZWQ6ICdvblJhbmdlZmllbGRNb3VudGVkJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgICA6IFJhbmdlRmllbGQsXG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnVHJhbnNsYXRlIFknLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMTUwMCxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IC0xNTAwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3RyYW5zbGF0ZVknLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogMCxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiAnb25SYW5nZWZpZWxkQ2hhbmdlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgICA6IFJhbmdlRmllbGQsXG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnVHJhbnNsYXRlIFonLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogNTUwLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogLTQ1MDAsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAndHJhbnNsYXRlWicsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiAwLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2UgOiAnb25SYW5nZWZpZWxkQ2hhbmdlJyxcbiAgICAgICAgICAgICAgICAgICAgbW91bnRlZDogJ29uUmFuZ2VmaWVsZE1vdW50ZWQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgIDogUmFuZ2VGaWVsZCxcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdBbW91bnQgUm93cycsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiAxNSxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IDEsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAnYW1vdW50Um93cycsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiAzLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6ICdvblJhbmdlZmllbGRDaGFuZ2UnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG50eXBlICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvbk9yZGVyQnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgIHRleHQgICA6ICdPcmRlciBieSBSb3cnLFxuICAgICAgICAgICAgICAgIHN0eWxlICA6IHttYXJnaW46ICcyMHB4J31cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICB0ZXh0IDogJ1NvcnQgQnk6J1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG50eXBlIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgICAgICAgICAgc3R5bGUgOiB7bWluSGVpZ2h0OiAnMTM0cHgnLCBwYWRkaW5nOiAnMCd9LFxuXG4gICAgICAgICAgICAgICAgaXRlbXMgOiBbe1xuICAgICAgICAgICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcblxuICAgICAgICAgICAgICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG50eXBlICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uU29ydEJ1dHRvbkNsaWNrJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdjYXNlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ0Nhc2VzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpblRvcDogJzAnfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ2RlYXRocycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ0RlYXRocycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Cb3R0b206ICcxMHB4JywgbWFyZ2luVG9wOiAwfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ2NvdW50cnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdDb3VudHJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpblRvcDogMH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdyZWNvdmVyZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdSZWNvdmVyZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHttYXJnaW46ICcxMHB4JywgbWFyZ2luVG9wOiAwfVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ30sXG5cbiAgICAgICAgICAgICAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvblNvcnRCdXR0b25DbGljaydcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiAndG9kYXlDYXNlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ0Nhc2VzIHRvZGF5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpblRvcDogJzAnfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ3RvZGF5RGVhdGhzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiAnRGVhdGhzIHRvZGF5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpbkJvdHRvbTogJzEwcHgnLCBtYXJnaW5Ub3A6IDB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnY3JpdGljYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdDcml0aWNhbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Cb3R0b206ICc0M3B4JywgbWFyZ2luVG9wOiAwfVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlOiBCb3hMYWJlbCxcbiAgICAgICAgICAgICAgICB0ZXh0ICA6IFtcbiAgICAgICAgICAgICAgICAgICAgJzxiPk5hdmlnYXRpb24gQ29uY2VwdDwvYj4nLFxuICAgICAgICAgICAgICAgICAgICAnPHA+WW91IGNhbiB1c2UgdGhlIEFycm93IEtleXMgdG8gd2FsayB0aHJvdWdoIHRoZSBpdGVtcy48L3A+J1xuICAgICAgICAgICAgICAgIF0uam9pbignJylcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1dXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5nYWxsZXJ5ID0gTmVvLmNyZWF0ZSh7XG4gICAgICAgICAgICBtb2R1bGUgICA6IEdhbGxlcnksXG4gICAgICAgICAgICByZWZlcmVuY2U6ICdnYWxsZXJ5JyxcbiAgICAgICAgICAgIC4uLm1lLmdhbGxlcnlDb25maWcgfHwge31cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuaXRlbXNbMF0uaXRlbXMucHVzaChtZS5nYWxsZXJ5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGRlc3Ryb3koLi4uYXJncykge1xuICAgICAgICB0aGlzLmdhbGxlcnkgPSBudWxsO1xuICAgICAgICBzdXBlci5kZXN0cm95KC4uLmFyZ3MpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoR2FsbGVyeUNvbnRhaW5lcik7XG5cbmV4cG9ydCB7R2FsbGVyeUNvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29tcG9uZW50Q29udHJvbGxlciBmcm9tICcuLi8uLi8uLi9zcmMvY29udHJvbGxlci9Db21wb25lbnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgQ292aWQudmlldy5HYWxsZXJ5Q29udGFpbmVyQ29udHJvbGxlclxuICogQGV4dGVuZHMgTmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50XG4gKi9cbmNsYXNzIEdhbGxlcnlDb250YWluZXJDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50Q29udHJvbGxlciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0NvdmlkLnZpZXcuR2FsbGVyeUNvbnRhaW5lckNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkLnZpZXcuR2FsbGVyeUNvbnRhaW5lckNvbnRyb2xsZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbXBvbmVudC5HYWxsZXJ5fG51bGx9IGdhbGxlcnlfPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgZ2FsbGVyeV86IG51bGxcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIHdoZW4gYWNjZXNzaW5nIHRoZSBnYWxsZXJ5IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5HYWxsZXJ5fG51bGx9IHZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZUdldEdhbGxlcnkodmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZ2FsbGVyeSA9IHZhbHVlID0gdGhpcy5nZXRSZWZlcmVuY2UoJ2dhbGxlcnknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Db2xsYXBzZUJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgY29uc3QgcGFuZWwgID0gdGhpcy5nZXRSZWZlcmVuY2UoJ2NvbnRyb2xzLXBhbmVsJyksXG4gICAgICAgICAgICAgIGV4cGFuZCA9IHBhbmVsLndpZHRoID09PSA0MDtcblxuICAgICAgICBwYW5lbC53aWR0aCA9IGV4cGFuZCA/IDI1MCA6IDQwO1xuXG4gICAgICAgIGRhdGEuY29tcG9uZW50LnRleHQgPSBleHBhbmQgPyAnWCcgOiAnKyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uT3JkZXJCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIGNvbnN0IGdhbGxlcnkgICAgPSB0aGlzLmdhbGxlcnksXG4gICAgICAgICAgICAgIG9yZGVyQnlSb3cgPSAhZ2FsbGVyeS5vcmRlckJ5Um93O1xuXG4gICAgICAgIGRhdGEuY29tcG9uZW50LnRleHQgPSBvcmRlckJ5Um93ID09PSB0cnVlID8gJ09yZGVyIEJ5IENvbHVtbicgOiAnT3JkZXIgYnkgUm93JztcblxuICAgICAgICBnYWxsZXJ5Lm9yZGVyQnlSb3cgPSBvcmRlckJ5Um93O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvblJhbmdlZmllbGRDaGFuZ2UoZGF0YSkge1xuICAgICAgICB0aGlzLmdhbGxlcnlbZGF0YS5jb21wb25lbnQubmFtZV0gPSBkYXRhLnZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICovXG4gICAgb25SYW5nZWZpZWxkTW91bnRlZChpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IE5lby5nZXRDb21wb25lbnQoaWQpO1xuXG4gICAgICAgIHRoaXMuZ2FsbGVyeS5vbignY2hhbmdlJyArIE5lby5jYXBpdGFsaXplKGZpZWxkLm5hbWUpLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgZmllbGQubWluVmFsdWUpLCBmaWVsZC5tYXhWYWx1ZSk7XG4gICAgICAgICAgICBmaWVsZC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Tb3J0QnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmdhbGxlcnkuc3RvcmUuc29ydGVycyA9IFt7XG4gICAgICAgICAgICBwcm9wZXJ0eSA6IGRhdGEuY29tcG9uZW50LmZpZWxkLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnREVTQydcbiAgICAgICAgfV07XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhHYWxsZXJ5Q29udGFpbmVyQ29udHJvbGxlcik7XG5cbmV4cG9ydCB7R2FsbGVyeUNvbnRhaW5lckNvbnRyb2xsZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbnRhaW5lciAgICBmcm9tICcuLi8uLi8uLi9zcmMvY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBDb3VudHJ5U3RvcmUgZnJvbSAnLi4vc3RvcmUvQ291bnRyaWVzLm1qcyc7XG5pbXBvcnQgU2VsZWN0RmllbGQgIGZyb20gJy4uLy4uLy4uL3NyYy9mb3JtL2ZpZWxkL1NlbGVjdC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb3ZpZC52aWV3LkhlYWRlckNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5CYXNlXG4gKi9cbmNsYXNzIEhlYWRlckNvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0NvdmlkLnZpZXcuSGVhZGVyQ29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdDb3ZpZC52aWV3LkhlYWRlckNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnY292aWQtaGVhZGVyLWNvbnRhaW5lciddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnY292aWQtaGVhZGVyLWNvbnRhaW5lciddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBoZWlnaHQ9NzBcbiAgICAgICAgICovXG4gICAgICAgIGhlaWdodDogMTIwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsYXlvdXQ9e250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtc1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBudHlwZSAgICA6ICdjb21wb25lbnQnLFxuICAgICAgICAgICAgbWluV2lkdGggOiAyNjcsXG4gICAgICAgICAgICByZWZlcmVuY2U6ICdsb2dvJyxcbiAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpbjogJzEwcHgnfSxcbiAgICAgICAgICAgIHdpZHRoICAgIDogMjY3LFxuXG4gICAgICAgICAgICB2ZG9tOiB7XG4gICAgICAgICAgICAgICAgdGFnOiAnaW1nJyxcbiAgICAgICAgICAgICAgICBzcmM6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbmVvbWpzL3BhZ2VzL21hc3Rlci9yZXNvdXJjZXMvaW1hZ2VzL2FwcHMvY292aWQvY292aWRfbG9nb19kYXJrLmpwZydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgIGxheW91dDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAgICAgaXRlbXMgOiBbe1xuICAgICAgICAgICAgICAgIG50eXBlICAgIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgaGVpZ2h0ICAgOiA2NSxcbiAgICAgICAgICAgICAgICBsYXlvdXQgICA6IHtudHlwZTogJ2hib3gnfSxcbiAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICd0b3RhbC1zdGF0cycsXG5cbiAgICAgICAgICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGU6ICdjb21wb25lbnQnXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICBjbHMgOiBbJ2NvdmlkLW51bWJlcmJveCddLFxuICAgICAgICAgICAgICAgICAgICB2ZG9tOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjbHM6IFsnY292aWQtbnVtYmVyYm94LXRpdGxlJywgICdjYXNlcyddLCAgaHRtbDonQ2FzZXMnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvdmlkLW51bWJlcmJveC1udW1iZXInLCAnY2FzZXMnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgY2xzIDogWydjb3ZpZC1udW1iZXJib3gnXSxcbiAgICAgICAgICAgICAgICAgICAgdmRvbToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvdmlkLW51bWJlcmJveC10aXRsZScsICAnYWN0aXZlJ10sIGh0bWw6J0FjdGl2ZSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjbHM6IFsnY292aWQtbnVtYmVyYm94LW51bWJlcicsICdhY3RpdmUnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgY2xzIDogWydjb3ZpZC1udW1iZXJib3gnXSxcbiAgICAgICAgICAgICAgICAgICAgdmRvbToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvdmlkLW51bWJlcmJveC10aXRsZScsICAncmVjb3ZlcmVkJ10sIGh0bWw6J1JlY292ZXJlZCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjbHM6IFsnY292aWQtbnVtYmVyYm94LW51bWJlcicsICdyZWNvdmVyZWQnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgY2xzIDogWydjb3ZpZC1udW1iZXJib3gnXSxcbiAgICAgICAgICAgICAgICAgICAgdmRvbToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvdmlkLW51bWJlcmJveC10aXRsZScsICAnZGVhdGhzJ10sIGh0bWw6J0RlYXRocyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjbHM6IFsnY292aWQtbnVtYmVyYm94LW51bWJlcicsICdkZWF0aHMnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtwYWRkaW5nOiAnMTBweCd9LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTI1LFxuICAgICAgICAgICAgICAgICAgICB2ZG9tIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnICAgICAgICAgICAgICA6ICdhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1sYWJlbCcgICAgIDogJ1N0YXIgbmVvbWpzL25lbyBvbiBHaXRIdWInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNscyAgICAgICAgICAgICAgOiBbJ2dpdGh1Yi1idXR0b24nXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1zaG93LWNvdW50JzogJ3RydWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLXNpemUnICAgICAgOiAnbGFyZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWYgICAgICAgICAgICAgOiAnaHR0cHM6Ly9naXRodWIuY29tL25lb21qcy9uZW8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgICAgICAgICAgICAgOiAnU3RhcidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7cGFkZGluZzogJzEwcHgnfSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwNSxcbiAgICAgICAgICAgICAgICAgICAgdmRvbSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZyAgICAgICAgICAgICAgOiAnYScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWwnICAgICA6ICdTcG9uc29yIEB0b2JpdSBvbiBHaXRIdWInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNscyAgICAgICAgICAgICAgOiBbJ2dpdGh1Yi1idXR0b24nXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1pY29uJyAgICAgIDogJ29jdGljb24taGVhcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLXNpemUnICAgICAgOiAnbGFyZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWYgICAgICAgICAgICAgOiAnaHR0cHM6Ly9naXRodWIuY29tL3Nwb25zb3JzL3RvYml1JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sICAgICAgICAgICAgIDogJ1Nwb25zb3InXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCd9LFxuXG4gICAgICAgICAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50J1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBpdGVtcyA6IFt7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZSAgICAgICA6IFNlbGVjdEZpZWxkLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RmllbGQgOiAnY291bnRyeScsXG4gICAgICAgICAgICAgICAgICAgIGZsZXggICAgICAgICA6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ICAgICAgIDogMjUsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb246ICdpbmxpbmUnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbFRleHQgICAgOiAnU2VsZWN0IGEgQ291bnRyeScsXG4gICAgICAgICAgICAgICAgICAgIG1pbldpZHRoICAgICA6IDE0MCxcbiAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlICAgIDogJ2NvdW50cnktZmllbGQnLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZSAgICAgICAgOiB7bWFyZ2luVG9wOiAnMTVweCd9LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aCAgICAgICAgOiAyMDAsXG5cbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhciA6ICdvbkNvdW50cnlGaWVsZENsZWFyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdDogJ29uQ291bnRyeUZpZWxkU2VsZWN0J1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUgOiBDb3VudHJ5U3RvcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0ZXJzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5IDogJ2NvdW50cnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ0FTQydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICBmbGV4ICAgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvblN3aXRjaFRoZW1lQnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgOiAyNSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLXN1bicsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlICA6IHttYXJnaW5MZWZ0OiAnMTBweCcsIG1hcmdpblRvcDogJzE1cHgnfSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ1RoZW1lIExpZ2h0J1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIGZsZXggICA6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uUmVsb2FkRGF0YUJ1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IDogMjUsXG4gICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1zeW5jLWFsdCcsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlICA6IHttYXJnaW5MZWZ0OiAnMTBweCcsIG1hcmdpblRvcDogJzE1cHgnfSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ1JlbG9hZCBEYXRhJ1xuICAgICAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgICA6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCAgIDogMjUsXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZTogJ2xhc3QtdXBkYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5Ub3A6ICcxOHB4J30sXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJydcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIZWFkZXJDb250YWluZXIpO1xuXG5leHBvcnQge0hlYWRlckNvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQm94TGFiZWwgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9jb21wb25lbnQvQm94TGFiZWwubWpzJztcbmltcG9ydCBDb250YWluZXIgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbnRhaW5lci9CYXNlLm1qcyc7XG5pbXBvcnQgSGVsaXggICAgICAgICAgICAgICAgICAgIGZyb20gJy4vY291bnRyeS9IZWxpeC5tanMnO1xuaW1wb3J0IEhlbGl4Q29udGFpbmVyQ29udHJvbGxlciBmcm9tICcuL0hlbGl4Q29udGFpbmVyQ29udHJvbGxlci5tanMnO1xuaW1wb3J0IFBhbmVsICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvY29udGFpbmVyL1BhbmVsLm1qcyc7XG5pbXBvcnQgUmFuZ2VGaWVsZCAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9mb3JtL2ZpZWxkL1JhbmdlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLnZpZXcuSGVsaXhDb250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBIZWxpeENvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0NvdmlkLnZpZXcuSGVsaXhDb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkLnZpZXcuSGVsaXhDb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1oZWxpeC1tYWluY29udGFpbmVyJywgJ25lby12aWV3cG9ydCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWhlbGl4LW1haW5jb250YWluZXInLCAnbmVvLXZpZXdwb3J0J10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29udHJvbGxlci5Db21wb25lbnR8bnVsbH0gY29udHJvbGxlcj1IZWxpeENvbnRhaW5lckNvbnRyb2xsZXJcbiAgICAgICAgICovXG4gICAgICAgIGNvbnRyb2xsZXI6IEhlbGl4Q29udGFpbmVyQ29udHJvbGxlcixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb21wb25lbnQuSGVsaXh8bnVsbH0gaGVsaXg9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaGVsaXg6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gaGVsaXhDb25maWc9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaGVsaXhDb25maWc6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gbGF5b3V0PXtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgICAgICAgKi9cbiAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXXxudWxsfSBpdGVtc1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgZmxleCAgOiAxLFxuICAgICAgICAgICAgaXRlbXMgOiBbXSxcbiAgICAgICAgICAgIGxheW91dDogJ2ZpdCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgOiBQYW5lbCxcbiAgICAgICAgICAgIGNscyAgICAgIDogWyduZW8tY29uZmlndXJhdGlvbi1wYW5lbCcsICduZW8tcGFuZWwnLCAnbmVvLWNvbnRhaW5lciddLFxuICAgICAgICAgICAgbGF5b3V0ICAgOiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgICAgICByZWZlcmVuY2U6ICdjb250cm9scy1wYW5lbCcsXG4gICAgICAgICAgICBzdHlsZSAgICA6IHtiYWNrZ3JvdW5kQ29sb3I6ICcjMmIyYjJiJ30sXG4gICAgICAgICAgICB3aWR0aCAgICA6IDI1MCxcblxuICAgICAgICAgICAgY29udGFpbmVyQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtvdmVyZmxvd1k6ICdzY3JvbGwnfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaGVhZGVyczogW3tcbiAgICAgICAgICAgICAgICBkb2NrIDogJ3RvcCcsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAnb25Db2xsYXBzZUJ1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ1gnXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdIZWxpeCBDb250cm9scydcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV0sXG5cbiAgICAgICAgICAgIGl0ZW1EZWZhdWx0czoge1xuICAgICAgICAgICAgICAgIG50eXBlICAgICAgICA6ICdyYW5nZWZpZWxkJyxcbiAgICAgICAgICAgICAgICBmbGV4ICAgICAgICAgOiAnMCAxIGF1dG8nLFxuICAgICAgICAgICAgICAgIGxhYmVsV2lkdGggICA6ICcxMDBweCcsXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgICAgIDoge3BhZGRpbmc6ICcxMHB4J30sXG4gICAgICAgICAgICAgICAgdXNlSW5wdXRFdmVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogJ29uUmFuZ2VmaWVsZENoYW5nZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdUcmFuc2xhdGUgWCcsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiAyMDAwLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogLTIwMDAsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAndHJhbnNsYXRlWCcsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiA0MDBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdUcmFuc2xhdGUgWScsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiAyNTAwLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogLTI1MDAsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAndHJhbnNsYXRlWScsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiAtMzUwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZXZlbnROYW1lOiAnY2hhbmdlVHJhbnNsYXRlWicsXG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnVHJhbnNsYXRlIFonLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogNDUwMCxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IC00NTAwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3RyYW5zbGF0ZVonLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogLTE1MDAsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZSA6ICdvblJhbmdlZmllbGRDaGFuZ2UnLFxuICAgICAgICAgICAgICAgICAgICBtb3VudGVkOiAnb25SYW5nZWZpZWxkTW91bnRlZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0IDogJ0RlbHRhIFknLFxuICAgICAgICAgICAgICAgIGxhYmVsQWxpZ246ICd0b3AnLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlICA6IDYwMCxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSAgOiAtNjAwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgICA6ICdkZWx0YVknLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgICA6IDcwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZXZlbnROYW1lOiAnY2hhbmdlUm90YXRpb24nLFxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1JvdGF0ZScsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAtNzIwLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogNzIwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3JvdGF0aW9uQW5nbGUnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogMCxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlIDogJ29uUmFuZ2VmaWVsZENoYW5nZScsXG4gICAgICAgICAgICAgICAgICAgIG1vdW50ZWQ6ICdvblJhbmdlZmllbGRNb3VudGVkJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdSYWRpdXMnLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMzUwMCxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IDkwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICdyYWRpdXMnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogMTUwMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1BlcnNwZWN0aXZlJyxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IDUwLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMzAwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICdwZXJzcGVjdGl2ZScsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiA4MDBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdJdGVtIEFuZ2xlJyxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IDEsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiAzNixcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICdpdGVtQW5nbGUnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogOFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ01heCBPcGFjaXR5JyxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICdtYXhPcGFjaXR5JyxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IDAsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiAxMDAsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiA4MCAvLyB0b2RvOiBtdWx0aS10aHVtYiBzbGlkZXIgWzMwLCA4MF1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdNaW4gT3BhY2l0eScsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAnbWluT3BhY2l0eScsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAwLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMTAwLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogMzBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZSAgICAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVyICA6ICdvbkZsaXBJdGVtc0J1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgICAgOiAnRmxpcCBJdGVtcycsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7fSxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW46ICcyMHB4J31cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICB0ZXh0IDogJ1NvcnQgQnk6J1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG50eXBlIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgICAgICAgICAgc3R5bGUgOiB7bWluSGVpZ2h0OiAnMTM0cHgnLCBwYWRkaW5nOiAnMCd9LFxuXG4gICAgICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIGxheW91dDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1EZWZhdWx0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAnb25Tb3J0QnV0dG9uQ2xpY2snXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ2Nhc2VzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiAnQ2FzZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHttYXJnaW46ICcxMHB4JywgbWFyZ2luVG9wOiAnMCd9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnZGVhdGhzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiAnRGVhdGhzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpbkJvdHRvbTogJzEwcHgnLCBtYXJnaW5Ub3A6IDB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnY291bnRyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ0NvdW50cnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHttYXJnaW46ICcxMHB4JywgbWFyZ2luVG9wOiAwfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ3JlY292ZXJlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ1JlY292ZXJlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Ub3A6IDB9XG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcblxuICAgICAgICAgICAgICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG50eXBlICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uU29ydEJ1dHRvbkNsaWNrJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICd0b2RheUNhc2VzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiAnQ2FzZXMgdG9kYXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHttYXJnaW46ICcxMHB4JywgbWFyZ2luVG9wOiAnMCd9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiAndG9kYXlEZWF0aHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdEZWF0aHMgdG9kYXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHttYXJnaW46ICcxMHB4JywgbWFyZ2luQm90dG9tOiAnMTBweCcsIG1hcmdpblRvcDogMH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdjcml0aWNhbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ0NyaXRpY2FsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpbkJvdHRvbTogJzQzcHgnLCBtYXJnaW5Ub3A6IDB9XG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZSAgICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgIGhhbmRsZXIgIDogJ29uRm9sbG93U2VsZWN0aW9uQnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgIGljb25DbHMgIDogJ2ZhIGZhLXNxdWFyZScsXG4gICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnRm9sbG93IFNlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7fSxcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4gICAgICA6ICcyMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTBweCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlOiBCb3hMYWJlbCxcbiAgICAgICAgICAgICAgICB0ZXh0ICA6IFtcbiAgICAgICAgICAgICAgICAgICAgJzxiPk5hdmlnYXRpb24gQ29uY2VwdDwvYj4nLFxuICAgICAgICAgICAgICAgICAgICAnPHA+Q2xpY2sgb24gYW4gaXRlbSB0byBzZWxlY3QgaXQuIEFmdGVyd2FyZHMgeW91IGNhbiB1c2UgdGhlIEFycm93IEtleXMgdG8gd2FsayB0aHJvdWdoIHRoZSBpdGVtcy48L3A+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxwPkhpdCB0aGUgU3BhY2UgS2V5IHRvIHJvdGF0ZSB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0gdG8gdGhlIGZyb250LjwvcD4nLFxuICAgICAgICAgICAgICAgICAgICAnPHA+SGl0IHRoZSBFbnRlciBLZXkgdG8gZXhwYW5kIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbS48L3A+J1xuICAgICAgICAgICAgICAgIF0uam9pbignJylcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1dXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5oZWxpeCA9IE5lby5jcmVhdGUoe1xuICAgICAgICAgICAgbW9kdWxlICAgOiBIZWxpeCxcbiAgICAgICAgICAgIHJlZmVyZW5jZTogJ2hlbGl4JyxcbiAgICAgICAgICAgIC4uLm1lLmhlbGl4Q29uZmlnIHx8IHt9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLml0ZW1zWzBdLml0ZW1zLnB1c2gobWUuaGVsaXgpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGVsaXhDb250YWluZXIpO1xuXG5leHBvcnQge0hlbGl4Q29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb21wb25lbnRDb250cm9sbGVyIGZyb20gJy4uLy4uLy4uL3NyYy9jb250cm9sbGVyL0NvbXBvbmVudC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb3ZpZC52aWV3LkhlbGl4Q29udGFpbmVyQ29udHJvbGxlclxuICogQGV4dGVuZHMgTmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50XG4gKi9cbmNsYXNzIEhlbGl4Q29udGFpbmVyQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdDb3ZpZC52aWV3LkhlbGl4Q29udGFpbmVyQ29udHJvbGxlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQudmlldy5IZWxpeENvbnRhaW5lckNvbnRyb2xsZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbXBvbmVudC5IZWxpeHxudWxsfSBoZWxpeF89bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBoZWxpeF86IG51bGxcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIHdoZW4gYWNjZXNzaW5nIHRoZSBoZWxpeCBjb25maWdcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuSGVsaXh8bnVsbH0gdmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlR2V0SGVsaXgodmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5faGVsaXggPSB2YWx1ZSA9IHRoaXMuZ2V0UmVmZXJlbmNlKCdoZWxpeCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkNvbGxhcHNlQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICBjb25zdCBwYW5lbCAgPSB0aGlzLmdldFJlZmVyZW5jZSgnY29udHJvbHMtcGFuZWwnKSxcbiAgICAgICAgICAgICAgZXhwYW5kID0gcGFuZWwud2lkdGggPT09IDQwO1xuXG4gICAgICAgIHBhbmVsLndpZHRoID0gZXhwYW5kID8gMjUwIDogNDA7XG5cbiAgICAgICAgZGF0YS5jb21wb25lbnQudGV4dCA9IGV4cGFuZCA/ICdYJyA6ICcrJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25GbGlwSXRlbXNCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIHRoaXMuaGVsaXguZmxpcHBlZCA9ICF0aGlzLmhlbGl4LmZsaXBwZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRm9sbG93U2VsZWN0aW9uQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkYXRhLmNvbXBvbmVudDtcblxuICAgICAgICBpZiAoYnV0dG9uLmljb25DbHMgPT09ICdmYSBmYS1zcXVhcmUnKSB7XG4gICAgICAgICAgICB0aGlzLmhlbGl4LmZvbGxvd1NlbGVjdGlvbiA9IHRydWU7XG4gICAgICAgICAgICBidXR0b24uaWNvbkNscyA9ICdmYSBmYS1jaGVjay1zcXVhcmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oZWxpeC5mb2xsb3dTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIGJ1dHRvbi5pY29uQ2xzID0gJ2ZhIGZhLXNxdWFyZSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25SYW5nZWZpZWxkQ2hhbmdlKGRhdGEpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRhdGEuY29tcG9uZW50Lm5hbWU7XG5cbiAgICAgICAgaWYgKFsnZGVsdGFZJywgJ21heE9wYWNpdHknLCAnbWluT3BhY2l0eSddLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICAgICAgICBkYXRhLnZhbHVlIC89IDEwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGVsaXhbbmFtZV0gPSBkYXRhLnZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICovXG4gICAgb25SYW5nZWZpZWxkTW91bnRlZChpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IE5lby5nZXRDb21wb25lbnQoaWQpO1xuXG4gICAgICAgIHRoaXMuaGVsaXgub24oZmllbGQuZXZlbnROYW1lLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgZmllbGQubWluVmFsdWUpLCBmaWVsZC5tYXhWYWx1ZSk7XG4gICAgICAgICAgICBmaWVsZC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Tb3J0QnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmhlbGl4LnN0b3JlLnNvcnRlcnMgPSBbe1xuICAgICAgICAgICAgcHJvcGVydHkgOiBkYXRhLmNvbXBvbmVudC5maWVsZCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ0RFU0MnXG4gICAgICAgIH1dO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGVsaXhDb250YWluZXJDb250cm9sbGVyKTtcblxuZXhwb3J0IHtIZWxpeENvbnRhaW5lckNvbnRyb2xsZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEF0dHJpYnV0aW9uQ29tcG9uZW50ICAgIGZyb20gJy4vQXR0cmlidXRpb25Db21wb25lbnQubWpzJztcbmltcG9ydCBGb290ZXJDb250YWluZXIgICAgICAgICBmcm9tICcuL0Zvb3RlckNvbnRhaW5lci5tanMnO1xuaW1wb3J0IEdhbGxlcnlDb250YWluZXIgICAgICAgIGZyb20gJy4vR2FsbGVyeUNvbnRhaW5lci5tanMnO1xuaW1wb3J0IEhlYWRlckNvbnRhaW5lciAgICAgICAgIGZyb20gJy4vSGVhZGVyQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgSGVsaXhDb250YWluZXIgICAgICAgICAgZnJvbSAnLi9IZWxpeENvbnRhaW5lci5tanMnO1xuaW1wb3J0IE1haW5Db250YWluZXJDb250cm9sbGVyIGZyb20gJy4vTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIubWpzJztcbmltcG9ydCBNYXBib3hHbENvbnRhaW5lciAgICAgICBmcm9tICcuL21hcGJveEdsL0NvbnRhaW5lci5tanMnO1xuaW1wb3J0IFRhYkNvbnRhaW5lciAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy90YWIvQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgVGFibGVDb250YWluZXIgICAgICAgICAgZnJvbSAnLi9UYWJsZUNvbnRhaW5lci5tanMnO1xuaW1wb3J0IFZpZXdwb3J0ICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9jb250YWluZXIvVmlld3BvcnQubWpzJztcbmltcG9ydCBXb3JsZE1hcENvbnRhaW5lciAgICAgICBmcm9tICcuL1dvcmxkTWFwQ29udGFpbmVyLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLnZpZXcuTWFpbkNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5WaWV3cG9ydFxuICovXG5jbGFzcyBNYWluQ29udGFpbmVyIGV4dGVuZHMgVmlld3BvcnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdDb3ZpZC52aWV3Lk1haW5Db250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkLnZpZXcuTWFpbkNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBhdXRvTW91bnQ9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgYXV0b01vdW50OiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGNscz1bJ2NvdmlkLXZpZXdwb3J0JywgJ25lby12aWV3cG9ydCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnY292aWQtdmlld3BvcnQnLCAnbmVvLXZpZXdwb3J0J10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29udHJvbGxlci5Db21wb25lbnR9IGNvbnRyb2xsZXI9TWFpbkNvbnRhaW5lckNvbnRyb2xsZXJcbiAgICAgICAgICovXG4gICAgICAgIGNvbnRyb2xsZXI6IE1haW5Db250YWluZXJDb250cm9sbGVyLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGl0ZW1zXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtczogW0hlYWRlckNvbnRhaW5lciwge1xuICAgICAgICAgICAgbW9kdWxlICAgOiBUYWJDb250YWluZXIsXG4gICAgICAgICAgICBmbGV4ICAgICA6IDEsXG4gICAgICAgICAgICByZWZlcmVuY2U6ICd0YWItY29udGFpbmVyJyxcbiAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Ub3A6IDB9LFxuXG4gICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICBtb2R1bGUgICAgICAgICA6IFRhYmxlQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZSAgICAgIDogJ3RhYmxlLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS10YWJsZScsXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICA6ICdtYWludmlldz10YWJsZScsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdUYWJsZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgICAgICAgOiBNYXBib3hHbENvbnRhaW5lcixcbiAgICAgICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWdsb2JlLWFtZXJpY2FzJyxcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgIDogJ21haW52aWV3PW1hcGJveGdsbWFwJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ01hcGJveCBHTCBNYXAnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgICAgICAgIDogV29ybGRNYXBDb250YWluZXIsXG4gICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1nbG9iZS1hbWVyaWNhcycsXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICA6ICdtYWludmlldz13b3JsZG1hcCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdXb3JsZCBNYXAnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgICAgICAgIDogR2FsbGVyeUNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWltYWdlcycsXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICA6ICdtYWludmlldz1nYWxsZXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ0dhbGxlcnknXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgICAgICAgIDogSGVsaXhDb250YWluZXIsXG4gICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1kbmEnLFxuICAgICAgICAgICAgICAgICAgICByb3V0ZSAgOiAnbWFpbnZpZXc9aGVsaXgnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnSGVsaXgnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgICAgICAgIDogQXR0cmlidXRpb25Db21wb25lbnQsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlICAgICAgOiAnYXR0cmlidXRpb24nLFxuICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtY29weXJpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgIDogJ21haW52aWV3PWF0dHJpYnV0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ0F0dHJpYnV0aW9uJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0sIEZvb3RlckNvbnRhaW5lcl0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGxheW91dD17bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWFpbkNvbnRhaW5lcik7XG5cbmV4cG9ydCB7TWFpbkNvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29tcG9uZW50Q29udHJvbGxlciBmcm9tICcuLi8uLi8uLi9zcmMvY29udHJvbGxlci9Db21wb25lbnQubWpzJztcbmltcG9ydCBOZW9BcnJheSAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy91dGlsL0FycmF5Lm1qcyc7XG5pbXBvcnQgVXRpbCAgICAgICAgICAgICAgICBmcm9tICcuLi9VdGlsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLnZpZXcuTWFpbkNvbnRhaW5lckNvbnRyb2xsZXJcbiAqIEBleHRlbmRzIE5lby5jb250cm9sbGVyLkNvbXBvbmVudFxuICovXG5jbGFzcyBNYWluQ29udGFpbmVyQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdDb3ZpZC52aWV3Lk1haW5Db250YWluZXJDb250cm9sbGVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdDb3ZpZC52aWV3Lk1haW5Db250YWluZXJDb250cm9sbGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J21haW5jb250YWluZXItY29udHJvbGxlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdtYWluY29udGFpbmVyLWNvbnRyb2xsZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBhY3RpdmVNYWluVGFiSW5kZXg9MFxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZlTWFpblRhYkluZGV4OiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBhcGlTdW1tYXJ5VXJsPSdodHRwczovL2Rpc2Vhc2Uuc2gvdjIvYWxsJ1xuICAgICAgICAgKi9cbiAgICAgICAgYXBpU3VtbWFyeVVybDogJ2h0dHBzOi8vZGlzZWFzZS5zaC92Mi9hbGwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBhcGlVcmw9J2h0dHBzOi8vZGlzZWFzZS5zaC92Mi9jb3VudHJpZXMnXG4gICAgICAgICAqL1xuICAgICAgICBhcGlVcmw6ICdodHRwczovL2Rpc2Vhc2Uuc2gvdjIvY291bnRyaWVzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBjb3VudHJ5UmVjb3JkPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGNvdW50cnlSZWNvcmQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXXxudWxsfSBkYXRhPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gbWFpblRhYnM9Wyd0YWJsZScsICdtYXBib3hnbG1hcCcsICd3b3JsZG1hcCcsICdnYWxsZXJ5JywgJ2hlbGl4JywgJ2F0dHJpYnV0aW9uJ11cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbWFpblRhYnM6IFsndGFibGUnLCdtYXBib3hnbG1hcCcsICd3b3JsZG1hcCcsICdnYWxsZXJ5JywgJ2hlbGl4JywgJ2F0dHJpYnV0aW9uJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGbGFnIHRvIG9ubHkgbG9hZCB0aGUgbWFwIG9uY2Ugb25IYXNoQ2hhbmdlLCBidXQgYWx3YXlzIG9uIHJlbG9hZCBidXR0b24gY2xpY2tcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbWFwYm94Z2xNYXBIYXNEYXRhPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG1hcGJveGdsTWFwSGFzRGF0YTogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHN1bW1hcnlEYXRhPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHN1bW1hcnlEYXRhOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogRmxhZyB0byBvbmx5IGxvYWQgdGhlIG1hcCBvbmNlIG9uSGFzaENoYW5nZSwgYnV0IGFsd2F5cyBvbiByZWxvYWQgYnV0dG9uIGNsaWNrXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHdvcmxkTWFwSGFzRGF0YT1mYWxzZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB3b3JsZE1hcEhhc0RhdGE6IGZhbHNlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5sb2FkRGF0YSgpO1xuICAgICAgICBtZS5sb2FkU3VtbWFyeURhdGEoKTtcblxuICAgICAgICBtZS52aWV3Lm9uKCdtb3VudGVkJywgbWUub25NYWluVmlld01vdW50ZWQsIG1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IGRhdGFcbiAgICAgKi9cbiAgICBhZGRTdG9yZUl0ZW1zKGRhdGEpIHtcbiAgICAgICAgY29uc3QgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgY291bnRyeVN0b3JlID0gbWUuZ2V0UmVmZXJlbmNlKCdjb3VudHJ5LWZpZWxkJykuc3RvcmUsXG4gICAgICAgICAgICAgIHJlZmVyZW5jZSAgICA9IG1lLm1haW5UYWJzW21lLmFjdGl2ZU1haW5UYWJJbmRleF0sXG4gICAgICAgICAgICAgIGFjdGl2ZVRhYiAgICA9IG1lLmdldFJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICAgIC8vIHdvcmxkb21ldGVyIGFkZGVkIHdvcmxkIGFzIGEgY291bnRyeVxuICAgICAgICAvLyBtaWdodCBnZXQgcmVtb3ZlZCBieSB0aGUgTm92ZWxDb3ZpZCBBUElcbiAgICAgICAgaWYgKGRhdGFbMF0gJiYgZGF0YVswXS5jb3VudHJ5ID09PSAnV29ybGQnKSB7XG4gICAgICAgICAgICBjb25zdCB3b3JsZERhdGEgPSBkYXRhLnNoaWZ0KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh3b3JsZERhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uY291bnRyeS5pbmNsdWRlcygnXCInKSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uY291bnRyeSA9IGl0ZW0uY291bnRyeS5yZXBsYWNlKCdcIicsIFwiXFwnXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdGVtLmNhc2VzUGVyT25lTWlsbGlvbiA9IGl0ZW0uY2FzZXNQZXJPbmVNaWxsaW9uID4gaXRlbS5jYXNlcyA/ICdOL0EnIDogaXRlbS5jYXNlc1Blck9uZU1pbGxpb24gfHwgMDtcbiAgICAgICAgICAgIGl0ZW0uaW5mZWN0ZWQgICAgICAgICAgID0gaXRlbS5jYXNlc1Blck9uZU1pbGxpb247XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmRhdGEgPSBkYXRhO1xuXG4gICAgICAgIGlmIChjb3VudHJ5U3RvcmUuZ2V0Q291bnQoKSA8IDEpIHtcbiAgICAgICAgICAgIG1lLmdldFJlZmVyZW5jZSgnY291bnRyeS1maWVsZCcpLnN0b3JlLmRhdGEgPSBkYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFsnZ2FsbGVyeScsICdoZWxpeCcsICd0YWJsZSddLmluY2x1ZGVzKHJlZmVyZW5jZSkpIHtcbiAgICAgICAgICAgIGFjdGl2ZVRhYi5zdG9yZS5kYXRhID0gZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKHJlZmVyZW5jZSA9PT0gJ21hcGJveGdsbWFwJykge1xuICAgICAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdtYXBib3hnbG1hcCcpLmRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgbWUubWFwYm94Z2xNYXBIYXNEYXRhID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKHJlZmVyZW5jZSA9PT0gJ3dvcmxkbWFwJykge1xuICAgICAgICAgICAgYWN0aXZlVGFiLmxvYWREYXRhKGRhdGEpO1xuICAgICAgICAgICAgbWUud29ybGRNYXBIYXNEYXRhID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS5hY3RpdmVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS5jYXNlc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLmRlYXRoc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLnJlY292ZXJlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLnVwZGF0ZWQgLy8gdGltZXN0YW1wXG4gICAgICovXG4gICAgYXBwbHlTdW1tYXJ5RGF0YShkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29udGFpbmVyID0gbWUuZ2V0UmVmZXJlbmNlKCd0b3RhbC1zdGF0cycpLFxuICAgICAgICAgICAgdmRvbSAgICAgID0gY29udGFpbmVyLnZkb207XG5cbiAgICAgICAgbWUuc3VtbWFyeURhdGEgPSBkYXRhO1xuXG4gICAgICAgIHZkb20uY25bMF0uY25bMV0uaHRtbCA9IFV0aWwuZm9ybWF0TnVtYmVyKHt2YWx1ZTogZGF0YS5jYXNlc30pO1xuICAgICAgICB2ZG9tLmNuWzFdLmNuWzFdLmh0bWwgPSBVdGlsLmZvcm1hdE51bWJlcih7dmFsdWU6IGRhdGEuYWN0aXZlfSk7XG4gICAgICAgIHZkb20uY25bMl0uY25bMV0uaHRtbCA9IFV0aWwuZm9ybWF0TnVtYmVyKHt2YWx1ZTogZGF0YS5yZWNvdmVyZWR9KTtcbiAgICAgICAgdmRvbS5jblszXS5jblsxXS5odG1sID0gVXRpbC5mb3JtYXROdW1iZXIoe3ZhbHVlOiBkYXRhLmRlYXRoc30pO1xuXG4gICAgICAgIGNvbnRhaW5lci52ZG9tID0gdmRvbTtcblxuICAgICAgICBjb250YWluZXIgPSBtZS5nZXRSZWZlcmVuY2UoJ2xhc3QtdXBkYXRlJyk7XG4gICAgICAgIHZkb20gICAgICA9IGNvbnRhaW5lci52ZG9tO1xuXG4gICAgICAgIHZkb20uaHRtbCA9ICdMYXN0IFVwZGF0ZTogJyArIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdkZWZhdWx0Jywge1xuICAgICAgICAgICAgaG91ciAgOiAnbnVtZXJpYycsXG4gICAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICAgIHNlY29uZDogJ251bWVyaWMnXG4gICAgICAgIH0pLmZvcm1hdChuZXcgRGF0ZShkYXRhLnVwZGF0ZWQpKTtcblxuICAgICAgICBjb250YWluZXIudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjb3JkXG4gICAgICovXG4gICAgY2xlYXJDb3VudHJ5RmllbGQocmVjb3JkKSB7XG4gICAgICAgIHRoaXMuZ2V0UmVmZXJlbmNlKCdjb3VudHJ5LWZpZWxkJykuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoT2JqZWN0XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGhhc2hPYmplY3QubWFpbnZpZXdcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldFRhYkluZGV4KGhhc2hPYmplY3QpIHtcbiAgICAgICAgaWYgKCFoYXNoT2JqZWN0IHx8ICFoYXNoT2JqZWN0Lm1haW52aWV3KSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLm1haW5UYWJzLmluZGV4T2YoaGFzaE9iamVjdC5tYWludmlldyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdGFiSW5kZXhcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlfVxuICAgICAqL1xuICAgIGdldFZpZXcodGFiSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVmZXJlbmNlKHRoaXMubWFpblRhYnNbdGFiSW5kZXhdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGxvYWREYXRhKCkge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgZmV0Y2gobWUuYXBpVXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBtZS5hZGRTdG9yZUl0ZW1zKGRhdGEpKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnQ2Fu4oCZdCBhY2Nlc3MgJyArIG1lLmFwaVVybCwgZXJyKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBsb2FkU3VtbWFyeURhdGEoKSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBmZXRjaChtZS5hcGlTdW1tYXJ5VXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBtZS5hcHBseVN1bW1hcnlEYXRhKGRhdGEpKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnQ2Fu4oCZdCBhY2Nlc3MgJyArIG1lLmFwaVN1bW1hcnlVcmwsIGVycikpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFtZS5zdW1tYXJ5RGF0YSkge1xuICAgICAgICAgICAgICAgIG1lLm9uTG9hZFN1bW1hcnlEYXRhRmFpbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAyMDAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ291bnRyeUZpZWxkQ2xlYXIoKSB7XG4gICAgICAgIHRoaXMuY291bnRyeVJlY29yZCA9IG51bGw7XG5cbiAgICAgICAgTmVvLk1haW4uZWRpdFJvdXRlKHtcbiAgICAgICAgICAgIGNvdW50cnk6IG51bGxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uQ291bnRyeUZpZWxkU2VsZWN0KGRhdGEpIHtcbiAgICAgICAgdGhpcy5jb3VudHJ5UmVjb3JkID0gZGF0YS5yZWNvcmQ7XG5cbiAgICAgICAgTmVvLk1haW4uZWRpdFJvdXRlKHtcbiAgICAgICAgICAgIGNvdW50cnk6IGRhdGEudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2xkVmFsdWVcbiAgICAgKi9cbiAgICBvbkhhc2hDaGFuZ2UodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBhY3RpdmVJbmRleCAgICAgICA9IG1lLmdldFRhYkluZGV4KHZhbHVlLmhhc2gpLFxuICAgICAgICAgICAgY291bnRyeSAgICAgICAgICAgPSB2YWx1ZS5oYXNoICYmIHZhbHVlLmhhc2guY291bnRyeSxcbiAgICAgICAgICAgIGNvdW50cnlGaWVsZCAgICAgID0gbWUuZ2V0UmVmZXJlbmNlKCdjb3VudHJ5LWZpZWxkJyksXG4gICAgICAgICAgICB0YWJDb250YWluZXIgICAgICA9IG1lLmdldFJlZmVyZW5jZSgndGFiLWNvbnRhaW5lcicpLFxuICAgICAgICAgICAgYWN0aXZlVmlldyAgICAgICAgPSBtZS5nZXRWaWV3KGFjdGl2ZUluZGV4KSxcbiAgICAgICAgICAgIHNlbGVjdGlvbk1vZGVsICAgID0gYWN0aXZlVmlldy5zZWxlY3Rpb25Nb2RlbCxcbiAgICAgICAgICAgIGRlbGF5U2VsZWN0aW9uICAgID0gIW1lLmRhdGEgPyAxMDAwIDogdGFiQ29udGFpbmVyLmFjdGl2ZUluZGV4ICE9PSBhY3RpdmVJbmRleCA/IDEwMCA6IDAsXG4gICAgICAgICAgICBpZDtcblxuICAgICAgICB0YWJDb250YWluZXIuYWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleDtcbiAgICAgICAgbWUuYWN0aXZlTWFpblRhYkluZGV4ICAgID0gYWN0aXZlSW5kZXg7XG5cbiAgICAgICAgaWYgKGFjdGl2ZVZpZXcubnR5cGUgPT09ICdoZWxpeCcpIHtcbiAgICAgICAgICAgIGFjdGl2ZVZpZXcuZ2V0T2Zmc2V0VmFsdWVzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0b2RvOiB0aGlzIHdpbGwgb25seSBsb2FkIGVhY2ggc3RvcmUgb25jZS4gYWRqdXN0IHRoZSBsb2dpYyBpbiBjYXNlIHdlIHdhbnQgdG8gc3VwcG9ydCByZWxvYWRpbmcgdGhlIEFQSVxuXG4gICAgICAgIGlmIChtZS5kYXRhICYmIGFjdGl2ZVZpZXcuc3RvcmUgJiYgYWN0aXZlVmlldy5zdG9yZS5nZXRDb3VudCgpIDwgMSkge1xuICAgICAgICAgICAgYWN0aXZlVmlldy5zdG9yZS5kYXRhID0gbWUuZGF0YTtcbiAgICAgICAgICAgIGRlbGF5U2VsZWN0aW9uID0gNTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdG9kbzogaHR0cHM6Ly9naXRodWIuY29tL25lb21qcy9uZW8vaXNzdWVzLzQ4M1xuICAgICAgICAvLyBxdWljayBoYWNrLiBzZWxlY3Rpb25Nb2RlbHMgdXBkYXRlIHRoZSB2ZG9tIG9mIHRoZSB0YWJsZS5Db250YWluZXIuXG4gICAgICAgIC8vIGlmIHRhYmxlLlZpZXcgaXMgdmRvbSB1cGRhdGluZywgdGhpcyBjYW4gcmVzdWx0IGluIGEgMnggcmVuZGVyaW5nIG9mIGFsbCByb3dzLlxuICAgICAgICBpZiAoZGVsYXlTZWxlY3Rpb24gPT09IDEwMDAgJiYgYWN0aXZlVmlldy5udHlwZSA9PT0gJ3RhYmxlLWNvbnRhaW5lcicpIHtcbiAgICAgICAgICAgIGRlbGF5U2VsZWN0aW9uID0gMjAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3RpdmVWaWV3Lm50eXBlID09PSAnbWFwYm94Z2wnICYmIG1lLmRhdGEpIHtcbiAgICAgICAgICAgIGlmICghbWUubWFwYm94Z2xNYXBIYXNEYXRhKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlVmlldy5kYXRhID0gbWUuZGF0YTtcbiAgICAgICAgICAgICAgICBtZS5tYXBib3hnbE1hcEhhc0RhdGEgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb3VudHJ5RmllbGQuZ2V0UmVjb3JkKCkpO1xuXG4gICAgICAgICAgICBpZiAobWUuY291bnRyeVJlY29yZCkge1xuICAgICAgICAgICAgICAgIE1haW5Db250YWluZXJDb250cm9sbGVyLnNlbGVjdE1hcGJveEdsQ291bnRyeShhY3RpdmVWaWV3LCBtZS5jb3VudHJ5UmVjb3JkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWN0aXZlVmlldy5hdXRvUmVzaXplKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aXZlVmlldy5udHlwZSA9PT0gJ2NvdmlkLXdvcmxkLW1hcCcgJiYgbWUuZGF0YSkge1xuICAgICAgICAgICAgaWYgKCFtZS53b3JsZE1hcEhhc0RhdGEpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVWaWV3LmxvYWREYXRhKG1lLmRhdGEpO1xuICAgICAgICAgICAgICAgIG1lLndvcmxkTWFwSGFzRGF0YSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB0b2RvOiBpbnN0ZWFkIG9mIGEgdGltZW91dCB0aGlzIHNob3VsZCBhZGQgYSBzdG9yZSBsb2FkIGxpc3RlbmVyIChzaW5nbGU6IHRydWUpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobWUuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeUZpZWxkLnZhbHVlID0gY291bnRyeTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmNvdW50cnkgPSAnYWxsJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChhY3RpdmVWaWV3Lm50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdnYWxsZXJ5JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRyeSAmJiAhc2VsZWN0aW9uTW9kZWwuaXNTZWxlY3RlZChjb3VudHJ5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25Nb2RlbC5zZWxlY3QoY291bnRyeSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2hlbGl4JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRyeSAmJiAhc2VsZWN0aW9uTW9kZWwuaXNTZWxlY3RlZChjb3VudHJ5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25Nb2RlbC5zZWxlY3QoY291bnRyeSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVWaWV3Lm9uS2V5RG93blNwYWNlKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RhYmxlLWNvbnRhaW5lcic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSBzZWxlY3Rpb25Nb2RlbC5nZXRSb3dJZChhY3RpdmVWaWV3LnN0b3JlLmluZGV4T2YoY291bnRyeSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCd0YWJsZS1jb250YWluZXInKS5maXJlKCdjb3VudHJ5U2VsZWN0Jywge3JlY29yZDogYWN0aXZlVmlldy5zdG9yZS5nZXQoY291bnRyeSl9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3VudHJ5ICYmICFzZWxlY3Rpb25Nb2RlbC5pc1NlbGVjdGVkKGlkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25Nb2RlbC5zZWxlY3QoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZW8ubWFpbi5Eb21BY2Nlc3Muc2Nyb2xsVG9UYWJsZVJvdyh7aWQ6IGlkfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZGVsYXlTZWxlY3Rpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkxvYWRTdW1tYXJ5RGF0YUZhaWwoKSB7XG4gICAgICAgIGNvbnN0IHRhYmxlID0gdGhpcy5nZXRSZWZlcmVuY2UoJ3RhYmxlJyksXG4gICAgICAgICAgICAgIHZkb20gPSB0YWJsZS52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMF0uY25bMV0uY24ucHVzaCh7XG4gICAgICAgICAgICB0YWcgIDogJ2RpdicsXG4gICAgICAgICAgICBjbHMgIDogWyduZW8tYm94LWxhYmVsJywgJ25lby1sYWJlbCddLFxuICAgICAgICAgICAgaHRtbCA6IFtcbiAgICAgICAgICAgICAgICAnU3VtbWFyeSBkYXRhIGRpZCBub3QgYXJyaXZlIGFmdGVyIDJzLjwvYnI+JyxcbiAgICAgICAgICAgICAgICAnUGxlYXNlIGRvdWJsZS1jaGVjayBpZiB0aGUgQVBJIGlzIG9mZmxpbmU6PC9icj48L2JyPicsXG4gICAgICAgICAgICAgICAgJzxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2Rpc2Vhc2Uuc2gvYWxsXCI+Tm92ZWxDT1ZJRC9BUEkgYWxsIGVuZHBvaW50PC9hPjwvYnI+PC9icj4nLFxuICAgICAgICAgICAgICAgICdhbmQgaWYgc28gcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nXG4gICAgICAgICAgICBdLmpvaW4oJycpLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcyMHB4J1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0YWJsZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uTWFpblZpZXdNb3VudGVkKCkge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmFkZFNjcmlwdCh7XG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgIGRlZmVyOiB0cnVlLFxuICAgICAgICAgICAgc3JjICA6ICdodHRwczovL2J1dHRvbnMuZ2l0aHViLmlvL2J1dHRvbnMuanMnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmdldFJlZmVyZW5jZSgnZ2FsbGVyeScpLm9uKCdzZWxlY3QnLCBtZS51cGRhdGVDb3VudHJ5RmllbGQsIG1lKTtcbiAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdoZWxpeCcpICAub24oJ3NlbGVjdCcsIG1lLnVwZGF0ZUNvdW50cnlGaWVsZCwgbWUpO1xuXG4gICAgICAgIG1lLmdldFJlZmVyZW5jZSgndGFibGUnKS5vbih7XG4gICAgICAgICAgICBkZXNlbGVjdDogbWUuY2xlYXJDb3VudHJ5RmllbGQsXG4gICAgICAgICAgICBzZWxlY3QgIDogbWUudXBkYXRlQ291bnRyeUZpZWxkLFxuICAgICAgICAgICAgc2NvcGUgICA6IG1lXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25SZWxvYWREYXRhQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgICAgIHRoaXMubG9hZFN1bW1hcnlEYXRhKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvblJlbW92ZUZvb3RlckJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgY29uc3QgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgYWN0aXZlVGFiID0gbWUuZ2V0UmVmZXJlbmNlKCd0YWItY29udGFpbmVyJykuZ2V0QWN0aXZlQ2FyZCgpO1xuXG4gICAgICAgIG1lLnZpZXcucmVtb3ZlKG1lLmdldFJlZmVyZW5jZSgnZm9vdGVyJyksIHRydWUpO1xuXG4gICAgICAgIGlmIChhY3RpdmVUYWIubnR5cGUgPT09ICdjb3ZpZC1tYXBib3hnbC1jb250YWluZXInKSB7XG4gICAgICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ21hcGJveGdsbWFwJykuYXV0b1Jlc2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvblN3aXRjaFRoZW1lQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYnV0dG9uICAgPSBkYXRhLmNvbXBvbmVudCxcbiAgICAgICAgICAgIGxvZ28gICAgID0gbWUuZ2V0UmVmZXJlbmNlKCdsb2dvJyksXG4gICAgICAgICAgICBsb2dvUGF0aCA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbmVvbWpzL3BhZ2VzL21hc3Rlci9yZXNvdXJjZXMvaW1hZ2VzL2FwcHMvY292aWQvJyxcbiAgICAgICAgICAgIG1hcFZpZXcgID0gbWUuZ2V0UmVmZXJlbmNlKCdtYXBib3hnbG1hcCcpLFxuICAgICAgICAgICAgdmRvbSAgICAgPSBsb2dvLnZkb20sXG4gICAgICAgICAgICB2aWV3ICAgICA9IG1lLnZpZXcsXG4gICAgICAgICAgICBidXR0b25UZXh0LCBjbHMsIGhyZWYsIGljb25DbHMsIG1hcFZpZXdTdHlsZSwgdGhlbWU7XG5cbiAgICAgICAgaWYgKGJ1dHRvbi50ZXh0ID09PSAnVGhlbWUgTGlnaHQnKSB7XG4gICAgICAgICAgICBidXR0b25UZXh0ICAgPSAnVGhlbWUgRGFyayc7XG4gICAgICAgICAgICBocmVmICAgICAgICAgPSAnLi4vZGlzdC9kZXZlbG9wbWVudC9uZW8tdGhlbWUtbGlnaHQtbm8tY3NzNC5jc3MnO1xuICAgICAgICAgICAgaWNvbkNscyAgICAgID0gJ2ZhIGZhLW1vb24nO1xuICAgICAgICAgICAgbWFwVmlld1N0eWxlID0gbWFwVmlldy5tYXBib3hTdHlsZUxpZ2h0O1xuICAgICAgICAgICAgdGhlbWUgICAgICAgID0gJ25lby10aGVtZS1saWdodCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidXR0b25UZXh0ICAgPSAnVGhlbWUgTGlnaHQnO1xuICAgICAgICAgICAgaHJlZiAgICAgICAgID0gJy4uL2Rpc3QvZGV2ZWxvcG1lbnQvbmVvLXRoZW1lLWRhcmstbm8tY3NzNC5jc3MnO1xuICAgICAgICAgICAgaWNvbkNscyAgICAgID0gJ2ZhIGZhLXN1bic7XG4gICAgICAgICAgICBtYXBWaWV3U3R5bGUgPSBtYXBWaWV3Lm1hcGJveFN0eWxlRGFyaztcbiAgICAgICAgICAgIHRoZW1lICAgICAgICA9ICduZW8tdGhlbWUtZGFyayc7XG4gICAgICAgIH1cblxuICAgICAgICB2ZG9tLnNyYyA9IGxvZ29QYXRoICsgKHRoZW1lID09PSAnbmVvLXRoZW1lLWRhcmsnID8gJ2NvdmlkX2xvZ29fZGFyay5qcGcnIDogJ2NvdmlkX2xvZ29fbGlnaHQuanBnJyk7XG4gICAgICAgIGxvZ28udmRvbSA9IHZkb207XG5cblxuICAgICAgICBpZiAoTmVvLmNvbmZpZy51c2VDc3M0KSB7XG4gICAgICAgICAgICBjbHMgPSBbLi4udmlldy5jbHNdO1xuXG4gICAgICAgICAgICB2aWV3LmNscy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmluY2x1ZGVzKCduZW8tdGhlbWUnKSkge1xuICAgICAgICAgICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUoY2xzLCBpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgTmVvQXJyYXkuYWRkKGNscywgdGhlbWUpO1xuICAgICAgICAgICAgdmlldy5jbHMgPSBjbHM7XG5cbiAgICAgICAgICAgIGJ1dHRvbi5zZXQoe1xuICAgICAgICAgICAgICAgIGljb25DbHM6IGljb25DbHMsXG4gICAgICAgICAgICAgICAgdGV4dCAgIDogYnV0dG9uVGV4dFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBOZW8ubWFpbi5hZGRvbi5TdHlsZXNoZWV0LnN3YXBTdHlsZVNoZWV0KHtcbiAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgICAgICAgIGlkICA6ICduZW8tdGhlbWUnXG4gICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi50ZXh0ID0gYnV0dG9uVGV4dDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFwVmlldy5tYXBib3hTdHlsZSA9IG1hcFZpZXdTdHlsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2aWV3XG4gICAgICogQHBhcmFtIHJlY29yZFxuICAgICAqL1xuICAgIHN0YXRpYyBzZWxlY3RNYXBib3hHbENvdW50cnkodmlldywgcmVjb3JkKSB7Y29uc29sZS5sb2cocmVjb3JkLmNvdW50cnlJbmZvLmlzbzIpO1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbmVvbWpzL25lby9pc3N1ZXMvNDkwXG4gICAgICAgIC8vIHRoZXJlIGFyZSBtaXNzaW5nIGlzbzImMyB2YWx1ZXMgb24gbmF0dXJhbCBlYXJ0aCB2ZWN0b3JcbiAgICAgICAgY29uc3QgbWFwID0ge1xuICAgICAgICAgICAgRlJBICAgIDogWydtYXRjaCcsIFsnZ2V0JywgJ05BTUUnXSwgWydGcmFuY2UnXSwgdHJ1ZSwgZmFsc2VdLFxuICAgICAgICAgICAgTk9SICAgIDogWydtYXRjaCcsIFsnZ2V0JywgJ05BTUUnXSwgWydOb3J3YXknXSwgdHJ1ZSwgZmFsc2VdLFxuICAgICAgICAgICAgZGVmYXVsdDogWydtYXRjaCcsIFsnZ2V0JywgJ0lTT19BMyddLCBbcmVjb3JkLmNvdW50cnlJbmZvLmlzbzNdLCB0cnVlLCBmYWxzZV1cbiAgICAgICAgfTtcblxuICAgICAgICB2aWV3LnNldEZpbHRlcih7XG4gICAgICAgICAgICBsYXllcklkOiAnbmUtMTBtLWFkbWluLTAtY291bnRyaWVzLTRzN3J2ZicsXG4gICAgICAgICAgICB2YWx1ZSAgOiBtYXBbcmVjb3JkLmNvdW50cnlJbmZvLmlzbzNdIHx8IG1hcFsnZGVmYXVsdCddXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdmlldy5mbHlUbyh7XG4gICAgICAgICAgICBsYXQ6IHJlY29yZC5jb3VudHJ5SW5mby5sYXQsXG4gICAgICAgICAgICBsbmc6IHJlY29yZC5jb3VudHJ5SW5mby5sb25nXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZpZXcuem9vbSA9IDU7IC8vIHRvZG86IHdlIGNvdWxkIHVzZSBhIGRpZmZlcmVudCB2YWx1ZSBmb3IgYmlnIGNvdW50cmllcyAoUnVzc2lhLCBVU0EsLi4uKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YS5yZWNvcmRcbiAgICAgKi9cbiAgICB1cGRhdGVDb3VudHJ5RmllbGQoZGF0YSkge1xuICAgICAgICBOZW8uTWFpbi5lZGl0Um91dGUoe1xuICAgICAgICAgICAgY291bnRyeTogZGF0YS5yZWNvcmQuY291bnRyeVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5Db250YWluZXJDb250cm9sbGVyKTtcblxuZXhwb3J0IHtNYWluQ29udGFpbmVyQ29udHJvbGxlciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ2hlY2tCb3ggICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9mb3JtL2ZpZWxkL0NoZWNrQm94Lm1qcyc7XG5pbXBvcnQgQ29udGFpbmVyICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9jb250YWluZXIvQmFzZS5tanMnO1xuaW1wb3J0IEhpc3RvcmljYWxEYXRhVGFibGUgICAgICBmcm9tICcuL2NvdW50cnkvSGlzdG9yaWNhbERhdGFUYWJsZS5tanMnO1xuaW1wb3J0IExpbmVDaGFydENvbXBvbmVudCAgICAgICBmcm9tICcuL2NvdW50cnkvTGluZUNoYXJ0Q29tcG9uZW50Lm1qcydcbmltcG9ydCBQYW5lbCAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbnRhaW5lci9QYW5lbC5tanMnO1xuaW1wb3J0IFRhYkNvbnRhaW5lciAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvdGFiL0NvbnRhaW5lci5tanMnO1xuaW1wb3J0IFRhYmxlICAgICAgICAgICAgICAgICAgICBmcm9tICcuL2NvdW50cnkvVGFibGUubWpzJztcbmltcG9ydCBUYWJsZUNvbnRhaW5lckNvbnRyb2xsZXIgZnJvbSAnLi9UYWJsZUNvbnRhaW5lckNvbnRyb2xsZXIubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgQ292aWQudmlldy5UYWJsZUNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5CYXNlXG4gKi9cbmNsYXNzIFRhYmxlQ29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nQ292aWQudmlldy5UYWJsZUNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQudmlldy5UYWJsZUNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBhdXRvTW91bnQ9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgYXV0b01vdW50OiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50fG51bGx9IGNvbnRyb2xsZXI9VGFibGVDb250YWluZXJDb250cm9sbGVyXG4gICAgICAgICAqL1xuICAgICAgICBjb250cm9sbGVyOiBUYWJsZUNvbnRhaW5lckNvbnRyb2xsZXIsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGhpc3RvcnlQYW5lbFdpZHRoPTUyMFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBoaXN0b3J5UGFuZWxXaWR0aDogNTIwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLnRhYmxlLkNvbnRhaW5lcnxudWxsfSB0YWJsZT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB0YWJsZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSB0YWJsZUNvbmZpZz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB0YWJsZUNvbmZpZzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBsYXlvdXQ9e250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfG51bGx9IGl0ZW1zXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgIG50eXBlIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICBmbGV4ICA6IDEsXG4gICAgICAgICAgICBsYXlvdXQ6ICdmaXQnLFxuICAgICAgICAgICAgaXRlbXMgOiBbXVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICA6IFBhbmVsLFxuICAgICAgICAgICAgY2xzICAgICAgOiBbJ25lby1jb25maWd1cmF0aW9uLXBhbmVsJywgJ25lby1wYW5lbCcsICduZW8tY29udGFpbmVyJ10sXG4gICAgICAgICAgICBsYXlvdXQgICA6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgICAgIHJlZmVyZW5jZTogJ2NvbnRyb2xzLXBhbmVsJyxcbiAgICAgICAgICAgIHN0eWxlICAgIDoge2JhY2tncm91bmRDb2xvcjogJyMyYjJiMmInfSxcbiAgICAgICAgICAgIHdpZHRoICAgIDogJ0Bjb25maWc6aGlzdG9yeVBhbmVsV2lkdGgnLFxuXG4gICAgICAgICAgICBjb250YWluZXJDb25maWc6IHtcbiAgICAgICAgICAgICAgICBmbGV4IDogbnVsbCxcbiAgICAgICAgICAgICAgICBzdHlsZToge292ZXJmbG93WTogJ3Njcm9sbCd9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBoZWFkZXJzOiBbe1xuICAgICAgICAgICAgICAgIGRvY2s6ICd0b3AnLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uQ29sbGFwc2VCdXR0b25DbGljaycsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdYJ1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgICAgOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICdoaXN0b3JpY2FsLWRhdGEtbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdIaXN0b3JpY2FsIERhdGEnXG4gICAgICAgICAgICAgICAgfSwgJy0+Jywge1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uNTIwcHhCdXR0b25DbGljaycsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICc1MjBweCdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAnb244MDBweEJ1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJzgwMHB4J1xuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XSxcblxuICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgbW9kdWxlOiBUYWJDb250YWluZXIsXG4gICAgICAgICAgICAgICAgc3R5bGUgOiB7bWFyZ2luVG9wOiAnMTBweCd9LFxuICAgICAgICAgICAgICAgIGl0ZW1zIDogW3tcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG50eXBlOiAndG9vbGJhcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4IDogJzAgMSBhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZSAgICA6IENoZWNrQm94LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQgICA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0IDogJ0xvZ2FyaXRobWljIFNjYWxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFdpZHRoOiAxMzUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlIDogJ2xvZ2FyaXRobWljLXNjYWxlLWNoZWNrYm94JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogJ29uTG9nYXJpdGhtaWNTY2FsZUNoYW5nZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlICAgIDogQ2hlY2tCb3gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0IDogJ0RhaWx5IFZhbHVlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgICAgIDoge21hcmdpbkxlZnQ6ICczMHB4J30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxXaWR0aDogOTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6ICdvbkRhaWx5VmFsdWVzQ2hhbmdlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZSAgIDogTGluZUNoYXJ0Q29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleCAgICAgOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAnbGluZS1jaGFydCcsXG4gICAgICAgICAgICAgICAgICAgIH1dLFxuXG4gICAgICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWNoYXJ0LWxpbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ0NoYXJ0J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1dXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5oaXN0b3JpY2FsRGF0YVRhYmxlID0gTmVvLmNyZWF0ZSh7XG4gICAgICAgICAgICBtb2R1bGUgICA6IEhpc3RvcmljYWxEYXRhVGFibGUsXG4gICAgICAgICAgICByZWZlcmVuY2U6ICdoaXN0b3JpY2FsLWRhdGEtdGFibGUnLFxuXG4gICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtdGFibGUnLFxuICAgICAgICAgICAgICAgIHRleHQgICA6ICdUYWJsZSdcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC4uLm1lLmhpc3RvcmljYWxEYXRhVGFibGVDb25maWcgfHwge31cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuaXRlbXNbMV0uaXRlbXNbMF0uaXRlbXMucHVzaChtZS5oaXN0b3JpY2FsRGF0YVRhYmxlKTtcblxuICAgICAgICBtZS50YWJsZSA9IE5lby5jcmVhdGUoe1xuICAgICAgICAgICAgbW9kdWxlICAgOiBUYWJsZSxcbiAgICAgICAgICAgIHJlZmVyZW5jZTogJ3RhYmxlJyxcbiAgICAgICAgICAgIC4uLm1lLnRhYmxlQ29uZmlnIHx8IHt9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLml0ZW1zWzBdLml0ZW1zLnB1c2gobWUudGFibGUpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVGFibGVDb250YWluZXIpO1xuXG5leHBvcnQge1RhYmxlQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb21wb25lbnRDb250cm9sbGVyIGZyb20gJy4uLy4uLy4uL3NyYy9jb250cm9sbGVyL0NvbXBvbmVudC5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL3V0aWwvQXJyYXkubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgQ292aWQudmlldy5UYWJsZUNvbnRhaW5lckNvbnRyb2xsZXJcbiAqIEBleHRlbmRzIE5lby5jb250cm9sbGVyLkNvbXBvbmVudFxuICovXG5jbGFzcyBUYWJsZUNvbnRhaW5lckNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnRDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nQ292aWQudmlldy5UYWJsZUNvbnRhaW5lckNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkLnZpZXcuVGFibGVDb250YWluZXJDb250cm9sbGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYXBpQmFzZVVybD0naHR0cHM6Ly9kaXNlYXNlLnNoLydcbiAgICAgICAgICovXG4gICAgICAgIGFwaUJhc2VVcmw6ICdodHRwczovL2Rpc2Vhc2Uuc2gvJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYXBpSGlzdG9yaWNhbERhdGFFbmRwb2ludD0naGlzdG9yaWNhbCdcbiAgICAgICAgICovXG4gICAgICAgIGFwaUhpc3RvcmljYWxEYXRhRW5kcG9pbnQ6ICd2Mi9oaXN0b3JpY2FsLycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOdW1iZXIgb2YgZGF5cyB5b3Ugd2FudCB0aGUgZGF0YSB0byBnbyBiYWNrIHRvLiBEZWZhdWx0IGlzIDMwLiBVc2UgYWxsIGZvciBmdWxsIGRhdGEgc2V0LiBFeDogMTUsIGFsbCwgMjRcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfFN0cmluZ30gYXBpSGlzdG9yaWNhbERhdGFUaW1lUmFuZ2U9J2FsbCdcbiAgICAgICAgICovXG4gICAgICAgIGFwaUhpc3RvcmljYWxEYXRhVGltZVJhbmdlOiAnYWxsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSBhbGwgcmVjb3JkcyB3aXRoIDAgY2FzZXMgZnJvbSB0aGUgaGlzdG9yaWNhbCBkYXRhICh0YWJsZSAmIGNoYXJ0KVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSByZW1vdmVFbXB0eVJlY29yZHM9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3ZlRW1wdHlSZWNvcmRzOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBzZWxlY3RlZFJlY29yZD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzZWxlY3RlZFJlY29yZDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby50YWJsZS5Db250YWluZXJ8bnVsbH0gdGFibGVfPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgdGFibGVfOiBudWxsXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBtZS52aWV3Lm9uKCdjb3VudHJ5U2VsZWN0JywgbWUub25UYWJsZVNlbGVjdCwgbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBhZGRTdG9yZUl0ZW1zKGRhdGEpIHtcbiAgICAgICAgY29uc3QgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgZGF0YUFycmF5ID0gW10sXG4gICAgICAgICAgICAgIG1hcCAgICAgICA9IHt9O1xuXG4gICAgICAgIGxldCB0aW1lbGluZSAgPSBkYXRhICYmIGRhdGEudGltZWxpbmUsXG4gICAgICAgICAgICBuZXh0SXRlbTtcblxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTm92ZWxDT1ZJRC9BUEkvaXNzdWVzLzMwOSAvLyBkaWZmZXJlbnQgZm9ybWF0IGZvciAnYWxsJ1xuICAgICAgICBpZiAoZGF0YSAmJiAhZGF0YS50aW1lbGluZSkge1xuICAgICAgICAgICAgdGltZWxpbmUgPSBkYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRpbWVsaW5lKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aW1lbGluZS5jYXNlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgbWFwW2tleV0gPSB7ZGF0ZTogbmV3IERhdGUoa2V5KS50b0lTT1N0cmluZygpLCBjYXNlczogdmFsdWV9O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRpbWVsaW5lLmRlYXRocykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG1hcC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcFtrZXldLmRlYXRocyA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcFtrZXldID0ge2RhdGU6IG5ldyBEYXRlKGtleSkudG9JU09TdHJpbmcoKSwgZGVhdGhzOiB2YWx1ZX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aW1lbGluZS5oYXNPd25Qcm9wZXJ0eSgncmVjb3ZlcmVkJykpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aW1lbGluZS5yZWNvdmVyZWQpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWFwLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFtrZXldLnJlY292ZXJlZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwW2tleV0gPSB7ZGF0ZTogbmV3IERhdGUoa2V5KS50b0lTT1N0cmluZygpLCByZWNvdmVyZWQ6IHZhbHVlfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhtYXApLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIHZhbHVlLmFjdGl2ZSA9IHZhbHVlLmNhc2VzIC0gdmFsdWUuZGVhdGhzIC0gdmFsdWUucmVjb3ZlcmVkO1xuICAgICAgICAgICAgICAgIGRhdGFBcnJheS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobWUucmVtb3ZlRW1wdHlSZWNvcmRzKSB7XG4gICAgICAgICAgICAgICAgWy4uLmRhdGFBcnJheV0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2FzZXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShkYXRhQXJyYXksIGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHRoZSBhcnJheSBpcyBzb3J0ZWQgYnkgZGF0ZSBBU0NcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YUFycmF5WzBdLCB7XG4gICAgICAgICAgICAgICAgZGFpbHlBY3RpdmUgICA6IGRhdGFBcnJheVswXS5hY3RpdmUsXG4gICAgICAgICAgICAgICAgZGFpbHlDYXNlcyAgICA6IGRhdGFBcnJheVswXS5jYXNlcyxcbiAgICAgICAgICAgICAgICBkYWlseURlYXRocyAgIDogZGF0YUFycmF5WzBdLmRlYXRocyxcbiAgICAgICAgICAgICAgICBkYWlseVJlY292ZXJlZDogZGF0YUFycmF5WzBdLnJlY292ZXJlZFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRhdGFBcnJheS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIG5leHRJdGVtID0gZGF0YUFycmF5W2luZGV4ICsgMV07XG5cbiAgICAgICAgICAgICAgICBpZiAobmV4dEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihuZXh0SXRlbSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGFpbHlBY3RpdmUgICA6IG5leHRJdGVtLmFjdGl2ZSAgICAtIGl0ZW0uYWN0aXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGFpbHlDYXNlcyAgICA6IG5leHRJdGVtLmNhc2VzICAgICAtIGl0ZW0uY2FzZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYWlseURlYXRocyAgIDogbmV4dEl0ZW0uZGVhdGhzICAgIC0gaXRlbS5kZWF0aHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYWlseVJlY292ZXJlZDogbmV4dEl0ZW0ucmVjb3ZlcmVkIC0gaXRlbS5yZWNvdmVyZWRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIHRvZG86IHdlIGNvdWxkIG9ubHkgdXBkYXRlIHRoZSBhY3RpdmUgdGFiXG4gICAgICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ2hpc3RvcmljYWwtZGF0YS10YWJsZScpLnN0b3JlLmRhdGEgPSBkYXRhQXJyYXk7XG4gICAgICAgICAgICBtZS51cGRhdGVMaW5lQ2hhcnQoZGF0YUFycmF5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIHN0YXRpYyBhc3NpZ25GaWVsZHNPck51bGwocmVjb3JkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY3RpdmUgICAgICAgIDogcmVjb3JkLmFjdGl2ZSAgICAgICAgIHx8IG51bGwsXG4gICAgICAgICAgICBjYXNlcyAgICAgICAgIDogcmVjb3JkLmNhc2VzICAgICAgICAgIHx8IG51bGwsXG4gICAgICAgICAgICBkZWF0aHMgICAgICAgIDogcmVjb3JkLmRlYXRocyAgICAgICAgIHx8IG51bGwsXG4gICAgICAgICAgICBkYWlseUFjdGl2ZSAgIDogcmVjb3JkLmRhaWx5QWN0aXZlICAgIHx8IG51bGwsXG4gICAgICAgICAgICBkYWlseUNhc2VzICAgIDogcmVjb3JkLmRhaWx5Q2FzZXMgICAgIHx8IG51bGwsXG4gICAgICAgICAgICBkYWlseURlYXRocyAgIDogcmVjb3JkLmRhaWx5RGVhdGhzICAgIHx8IG51bGwsXG4gICAgICAgICAgICBkYWlseVJlY292ZXJlZDogcmVjb3JkLmRhaWx5UmVjb3ZlcmVkIHx8IG51bGwsXG4gICAgICAgICAgICByZWNvdmVyZWQgICAgIDogcmVjb3JkLnJlY292ZXJlZCAgICAgIHx8IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgd2hlbiBhY2Nlc3NpbmcgdGhlIHRhYmxlIGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7TmVvLnRhYmxlLkNvbnRhaW5lcnxudWxsfSB2YWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVHZXRUYWJsZSh2YWx1ZSkge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl90YWJsZSA9IHZhbHVlID0gdGhpcy5nZXRSZWZlcmVuY2UoJ3RhYmxlJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY291bnRyeU5hbWVcbiAgICAgKi9cbiAgICBsb2FkSGlzdG9yaWNhbERhdGEoY291bnRyeU5hbWUpIHtcbiAgICAgICAgY29uc3QgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgIGFwaVBhdGggPSBtZS5hcGlCYXNlVXJsICsgbWUuYXBpSGlzdG9yaWNhbERhdGFFbmRwb2ludCArIGNvdW50cnlOYW1lICsgJz9sYXN0ZGF5cz0nICsgbWUuYXBpSGlzdG9yaWNhbERhdGFUaW1lUmFuZ2U7XG5cbiAgICAgICAgZmV0Y2goYXBpUGF0aClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gbWUuYWRkU3RvcmVJdGVtcyhkYXRhKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ0NhbuKAmXQgYWNjZXNzICcgKyBhcGlQYXRoLCBlcnIpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb241MjBweEJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5nZXRSZWZlcmVuY2UoJ2NvbnRyb2xzLXBhbmVsJykud2lkdGggPSA1MjA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uODAwcHhCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIHRoaXMuZ2V0UmVmZXJlbmNlKCdjb250cm9scy1wYW5lbCcpLndpZHRoID0gODAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkNvbGxhcHNlQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICBjb25zdCBwYW5lbCAgPSB0aGlzLmdldFJlZmVyZW5jZSgnY29udHJvbHMtcGFuZWwnKSxcbiAgICAgICAgICAgICAgZXhwYW5kID0gcGFuZWwud2lkdGggPT09IDQwO1xuXG4gICAgICAgIHBhbmVsLndpZHRoID0gZXhwYW5kID8gdGhpcy52aWV3Lmhpc3RvcnlQYW5lbFdpZHRoIDogNDA7XG5cbiAgICAgICAgZGF0YS5jb21wb25lbnQudGV4dCA9IGV4cGFuZCA/ICdYJyA6ICcrJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25EYWlseVZhbHVlc0NoYW5nZShkYXRhKSB7XG4gICAgICAgIGNvbnN0IGNoYXJ0SWQgICAgID0gdGhpcy5nZXRSZWZlcmVuY2UoJ2xpbmUtY2hhcnQnKS5pZCxcbiAgICAgICAgICAgICAgbG9nQ2hlY2tib3ggPSB0aGlzLmdldFJlZmVyZW5jZSgnbG9nYXJpdGhtaWMtc2NhbGUtY2hlY2tib3gnKSxcbiAgICAgICAgICAgICAgdmFsdWUgICAgICAgPSBkYXRhLnZhbHVlO1xuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbG9nQ2hlY2tib3guc2V0KHtcbiAgICAgICAgICAgICAgICBjaGVja2VkIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGRhdGEudmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9nQ2hlY2tib3guZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIE5lby5tYWluLmFkZG9uLkFtQ2hhcnRzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICAgICAgaWQgICAgICAgIDogY2hhcnRJZCxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAnc2VyaWVzLnZhbHVlcy4wLmRhdGFGaWVsZHMudmFsdWVZJyA6IHZhbHVlID8gJ2RhaWx5QWN0aXZlJyAgICA6ICdhY3RpdmUnLFxuICAgICAgICAgICAgICAgICdzZXJpZXMudmFsdWVzLjEuZGF0YUZpZWxkcy52YWx1ZVknIDogdmFsdWUgPyAnZGFpbHlDYXNlcycgICAgIDogJ2Nhc2VzJyxcbiAgICAgICAgICAgICAgICAnc2VyaWVzLnZhbHVlcy4yLmRhdGFGaWVsZHMudmFsdWVZJyA6IHZhbHVlID8gJ2RhaWx5RGVhdGhzJyAgICA6ICdkZWF0aHMnLFxuICAgICAgICAgICAgICAgICdzZXJpZXMudmFsdWVzLjMuZGF0YUZpZWxkcy52YWx1ZVknIDogdmFsdWUgPyAnZGFpbHlSZWNvdmVyZWQnIDogJ3JlY292ZXJlZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgTmVvLm1haW4uYWRkb24uQW1DaGFydHMuY2FsbE1ldGhvZCh7XG4gICAgICAgICAgICBpZCAgOiBjaGFydElkLFxuICAgICAgICAgICAgcGF0aDogJ2ludmFsaWRhdGVEYXRhJ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Mb2dhcml0aG1pY1NjYWxlQ2hhbmdlKGRhdGEpIHtcbiAgICAgICAgTmVvLm1haW4uYWRkb24uQW1DaGFydHMuc2V0UHJvcGVydHkoe1xuICAgICAgICAgICAgaWQgICA6IHRoaXMuZ2V0UmVmZXJlbmNlKCdsaW5lLWNoYXJ0JykuaWQsXG4gICAgICAgICAgICBwYXRoIDogJ3lBeGVzLnZhbHVlcy4wLmxvZ2FyaXRobWljJyxcbiAgICAgICAgICAgIHZhbHVlOiBkYXRhLnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtPYmplY3R9IGRhdGFcbiAgICAgKiB7T2JqZWN0fSBkYXRhLnJlY29yZFxuICAgICAqL1xuICAgIG9uVGFibGVTZWxlY3QoZGF0YSkge1xuICAgICAgICBjb25zdCBtZSAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgcmVjb3JkICA9IGRhdGEucmVjb3JkO1xuXG4gICAgICAgIGlmIChkYXRhLnJlY29yZCkge1xuICAgICAgICAgICAgbWUuc2VsZWN0ZWRSZWNvcmQgPSB7Li4ucmVjb3JkfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLnNlbGVjdGVkUmVjb3JkID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlbW92ZWQgb3B0aW9uYWwgY2hhaW5pbmcgZm9yIG5vdywgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vbmVvbWpzL25lby9pc3N1ZXMvNDY3XG4gICAgICAgIG1lLmxvYWRIaXN0b3JpY2FsRGF0YShyZWNvcmQgJiYgcmVjb3JkLmNvdW50cnlJbmZvICYmIHJlY29yZC5jb3VudHJ5SW5mby5pc28yIHx8ICdhbGwnKTtcblxuICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ2hpc3RvcmljYWwtZGF0YS1sYWJlbCcpLmh0bWwgPSAnSGlzdG9yaWNhbCBEYXRhICgnICsgKHJlY29yZCAmJiByZWNvcmQuY291bnRyeSB8fCAnV29ybGQnKSArICcpJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2dhcml0aG1pYyBBeGlzIGJyZWFrIGZvciB2YWx1ZXMgb2YgMCwgc28gd2UgbmVlZCB0byBjaGFuZ2UgdGhvc2UgdG8gbnVsbFxuICAgICAqIEFkZGluZyB0aGUgY3VycmVudCByZWNvcmQsIHNpbmNlIHRoZSBoaXN0b3JpY2FsIGRhdGEgc3RhcnRzIFwieWVzdGVyZGF5XCJcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfSBkYXRhQXJyYXlcbiAgICAgKi9cbiAgICB1cGRhdGVMaW5lQ2hhcnQoZGF0YUFycmF5KSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgcmVjb3JkID0gbWUuc2VsZWN0ZWRSZWNvcmQsXG4gICAgICAgICAgICBjaGFydCAgPSBtZS5nZXRSZWZlcmVuY2UoJ2xpbmUtY2hhcnQnKTtcblxuICAgICAgICBkYXRhQXJyYXkuZm9yRWFjaChpdGVtID0+IE9iamVjdC5hc3NpZ24oaXRlbSwgVGFibGVDb250YWluZXJDb250cm9sbGVyLmFzc2lnbkZpZWxkc09yTnVsbChpdGVtKSkpO1xuXG4gICAgICAgIGlmICghcmVjb3JkKSB7XG4gICAgICAgICAgICByZWNvcmQgPSBtZS5nZXRQYXJlbnQoKS5zdW1tYXJ5RGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZWNvcmQpIHtcbiAgICAgICAgICAgIGRhdGFBcnJheS5wdXNoKHtcbiAgICAgICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgLi4uVGFibGVDb250YWluZXJDb250cm9sbGVyLmFzc2lnbkZpZWxkc09yTnVsbChyZWNvcmQpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoYXJ0LmRhdGEgPSBkYXRhQXJyYXk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhUYWJsZUNvbnRhaW5lckNvbnRyb2xsZXIpO1xuXG5leHBvcnQge1RhYmxlQ29udGFpbmVyQ29udHJvbGxlciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQW1DaGFydENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi9zcmMvY29tcG9uZW50L3dyYXBwZXIvQW1DaGFydC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb3ZpZC52aWV3LldvcmxkTWFwQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LndyYXBwZXIuQW1DaGFydFxuICovXG5jbGFzcyBXb3JsZE1hcENvbXBvbmVudCBleHRlbmRzIEFtQ2hhcnRDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdDb3ZpZC52aWV3LldvcmxkTWFwQ29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdDb3ZpZC52aWV3LldvcmxkTWFwQ29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NvdmlkLXdvcmxkLW1hcCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjb3ZpZC13b3JsZC1tYXAnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjaGFydFR5cGU9J01hcENoYXJ0J1xuICAgICAgICAgKi9cbiAgICAgICAgY2hhcnRUeXBlOiAnTWFwQ2hhcnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2NvdmlkLWxpbmUtY2hhcnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ2NvdmlkLXdvcmxkLW1hcCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBkYXRhUGF0aD0nZGF0YS5zZXJpZXMudmFsdWVzLjAnXG4gICAgICAgICAqL1xuICAgICAgICBkYXRhUGF0aDogJ3Nlcmllcy52YWx1ZXMuMCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGhlYXRSdWxlc01heFZhbHVlPTE1MDAwXG4gICAgICAgICAqL1xuICAgICAgICBoZWF0UnVsZXNNYXhWYWx1ZTogMTUwMDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHBhY2thZ2U9J2FtNG1hcHMnXG4gICAgICAgICAqL1xuICAgICAgICBwYWNrYWdlOiAnYW00bWFwcycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGNoYXJ0Q29uZmlnXG4gICAgICAgICAqL1xuICAgICAgICBjaGFydENvbmZpZzoge1xuICAgICAgICAgICAgcHJvamVjdGlvbjogJ01pbGxlcicsXG4gICAgICAgICAgICBnZW9kYXRhICAgOiAnd29ybGRMb3cnLFxuXG4gICAgICAgICAgICBzZXJpZXM6IFt7XG4gICAgICAgICAgICAgICAgdHlwZSAgICAgIDogJ01hcFBvbHlnb25TZXJpZXMnLFxuICAgICAgICAgICAgICAgIGV4Y2x1ZGUgICA6IFsnQVEnXSxcbiAgICAgICAgICAgICAgICB1c2VHZW9kYXRhOiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgZGF0YUZpZWxkczoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2FjdGl2ZSdcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgaGVhdFJ1bGVzOiBbe1xuICAgICAgICAgICAgICAgICAgICBtYXggICAgIDogJyM2NGI1ZjYnLFxuICAgICAgICAgICAgICAgICAgICBtYXhWYWx1ZTogJ0Bjb25maWc6aGVhdFJ1bGVzTWF4VmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICBtaW4gICAgIDogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgICAgICBtaW5WYWx1ZTogMCxcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6ICdmaWxsJyxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ICA6ICdtYXBQb2x5Z29ucy50ZW1wbGF0ZSdcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBtYXBQb2x5Z29uczoge1xuICAgICAgICAgICAgICAgICAgICB0b29sdGlwVGV4dDogJ3tuYW1lfTogW2JvbGRde3ZhbHVlfVsvXScsXG4gICAgICAgICAgICAgICAgICAgIC8vZmlsbCAgICAgICA6ICcjNzRCMjY2JyxcblxuICAgICAgICAgICAgICAgICAgICBzdGF0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2ZpbGw6ICcjMzY3QjI1J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfSBkYXRhXG4gICAgICovXG4gICAgbG9hZERhdGEoZGF0YSkge1xuICAgICAgICBjb25zdCBjaGFydERhdGEgPSBbXTtcblxuICAgICAgICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBjaGFydERhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgYWN0aXZlICAgOiBpdGVtLmFjdGl2ZSxcbiAgICAgICAgICAgICAgICBjYXNlcyAgICA6IGl0ZW0uY2FzZXMsXG4gICAgICAgICAgICAgICAgY3JpdGljYWwgOiBpdGVtLmNyaXRpY2FsLFxuICAgICAgICAgICAgICAgIGRlYXRocyAgIDogaXRlbS5kZWF0aHMsXG4gICAgICAgICAgICAgICAgaWQgICAgICAgOiBpdGVtLmNvdW50cnlJbmZvLmlzbzIsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiBpdGVtLmNvdW50cnksXG4gICAgICAgICAgICAgICAgcmVjb3ZlcmVkOiBpdGVtLnJlY292ZXJlZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBOZW8ubWFpbi5hZGRvbi5BbUNoYXJ0cy51cGRhdGVEYXRhKHtcbiAgICAgICAgICAgIGRhdGEgICAgOiBjaGFydERhdGEsXG4gICAgICAgICAgICBkYXRhUGF0aDogdGhpcy5kYXRhUGF0aCxcbiAgICAgICAgICAgIGlkICAgICAgOiB0aGlzLmlkXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoV29ybGRNYXBDb21wb25lbnQpO1xuXG5leHBvcnQge1dvcmxkTWFwQ29tcG9uZW50IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb250YWluZXIgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbnRhaW5lci9CYXNlLm1qcyc7XG5pbXBvcnQgTnVtYmVyRmllbGQgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9mb3JtL2ZpZWxkL051bWJlci5tanMnO1xuaW1wb3J0IFRvb2xiYXIgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvY29udGFpbmVyL1Rvb2xiYXIubWpzJztcbmltcG9ydCBXb3JsZE1hcENvbXBvbmVudCAgICAgICAgICAgZnJvbSAnLi9Xb3JsZE1hcENvbXBvbmVudC5tanMnO1xuaW1wb3J0IFdvcmxkTWFwQ29udGFpbmVyQ29udHJvbGxlciBmcm9tICcuL1dvcmxkTWFwQ29udGFpbmVyQ29udHJvbGxlci5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb3ZpZC52aWV3LldvcmxkTWFwQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgV29ybGRNYXBDb250YWluZXIgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdDb3ZpZC52aWV3LldvcmxkTWFwQ29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdDb3ZpZC52aWV3LldvcmxkTWFwQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb250cm9sbGVyLkNvbXBvbmVudH0gY29udHJvbGxlcj1Xb3JsZE1hcENvbnRhaW5lckNvbnRyb2xsZXJcbiAgICAgICAgICovXG4gICAgICAgIGNvbnRyb2xsZXI6IFdvcmxkTWFwQ29udGFpbmVyQ29udHJvbGxlcixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbGF5b3V0PXtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgICAgICAgKi9cbiAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gaXRlbXNcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgbW9kdWxlOiBUb29sYmFyLFxuICAgICAgICAgICAgaXRlbXMgOiBbe1xuICAgICAgICAgICAgICAgIG50eXBlICAgIDogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICdjdXJyZW50TWFwVmlld0xhYmVsJyxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW5SaWdodDogJzIwcHgnfSxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdDdXJyZW50IHZpZXc6IEFjdGl2ZSdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgICAgICAgOiBOdW1iZXJGaWVsZCxcbiAgICAgICAgICAgICAgICBjbGVhclRvT3JpZ2luYWxWYWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uOiAnaW5saW5lJyxcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQgICAgOiAnSGVhdFJ1bGUgbWF4VmFsdWUnLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlICAgICA6IDFlNixcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSAgICAgOiAxMDAsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlICAgIDogJ2hlYXRSdWxlRmllbGQnLFxuICAgICAgICAgICAgICAgIHN0ZXBTaXplICAgICA6IDEwMCxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICAgICAgOiB7bWFyZ2luOiAwfSxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICAgICAgOiAxNTAwMCxcbiAgICAgICAgICAgICAgICB3aWR0aCAgICAgICAgOiAxNTAsXG5cbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiAnb25IZWF0UnVsZUZpZWxkQ2hhbmdlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sICctPicsIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiAnb25TZXJpZXNCdXR0b25DbGljaycsXG4gICAgICAgICAgICAgICAgc2VyaWVzIDogJ2Nhc2VzJyxcbiAgICAgICAgICAgICAgICBzdHlsZSAgOiB7bWFyZ2luUmlnaHQ6ICcycHgnfSxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnPHNwYW4gc3R5bGU9XCJjb2xvcjogI2JiYmJiYlwiPuKXjzwvc3Bhbj4gQ2FzZXMnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uU2VyaWVzQnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgIHNlcmllcyA6ICdhY3RpdmUnLFxuICAgICAgICAgICAgICAgIHN0eWxlICA6IHttYXJnaW5SaWdodDogJzJweCd9LFxuICAgICAgICAgICAgICAgIHRleHQgICA6ICc8c3BhbiBzdHlsZT1cImNvbG9yOiAjNjRiNWY2XCI+4pePPC9zcGFuPiBBY3RpdmUnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uU2VyaWVzQnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgIHNlcmllcyA6ICdyZWNvdmVyZWQnLFxuICAgICAgICAgICAgICAgIHN0eWxlICA6IHttYXJnaW5SaWdodDogJzJweCd9LFxuICAgICAgICAgICAgICAgIHRleHQgICA6ICc8c3BhbiBzdHlsZT1cImNvbG9yOiAjMjhjYTY4XCI+4pePPC9zcGFuPiBSZWNvdmVyZWQnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uU2VyaWVzQnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgIHNlcmllcyA6ICdkZWF0aHMnLFxuICAgICAgICAgICAgICAgIHRleHQgICA6ICc8c3BhbiBzdHlsZT1cImNvbG9yOiAjZmI2NzY3XCI+4pePPC9zcGFuPiBEZWF0aHMnXG4gICAgICAgICAgICB9XVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICA6IFdvcmxkTWFwQ29tcG9uZW50LFxuICAgICAgICAgICAgZmxleCAgICAgOiAxLFxuICAgICAgICAgICAgcmVmZXJlbmNlOiAnd29ybGRtYXAnXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoV29ybGRNYXBDb250YWluZXIpO1xuXG5leHBvcnQge1dvcmxkTWFwQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb21wb25lbnRDb250cm9sbGVyIGZyb20gJy4uLy4uLy4uL3NyYy9jb250cm9sbGVyL0NvbXBvbmVudC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb3ZpZC52aWV3LldvcmxkTWFwQ29udGFpbmVyQ29udHJvbGxlclxuICogQGV4dGVuZHMgTmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50XG4gKi9cbmNsYXNzIFdvcmxkTWFwQ29udGFpbmVyQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdDb3ZpZC52aWV3LldvcmxkTWFwQ29udGFpbmVyQ29udHJvbGxlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQudmlldy5Xb3JsZE1hcENvbnRhaW5lckNvbnRyb2xsZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBoZWF0UnVsZUNoYW5nZURlbGF5PTE1MFxuICAgICAgICAgKi9cbiAgICAgICAgaGVhdFJ1bGVDaGFuZ2VEZWxheTogMTUwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGhlYXRSdWxlQ2hhbmdlVGltZW91dD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBoZWF0UnVsZUNoYW5nZVRpbWVvdXQ6IG51bGxcbiAgICB9fVxuXG4gICAgY2hhbmdlSGVhdFJ1bGUodmFsdWUpIHtcbiAgICAgICAgY29uc3QgY2hhcnRJZCA9IHRoaXMuZ2V0UmVmZXJlbmNlKCd3b3JsZG1hcCcpLmlkO1xuXG4gICAgICAgIE5lby5tYWluLmFkZG9uLkFtQ2hhcnRzLnNldFByb3BlcnR5KHtcbiAgICAgICAgICAgIGlkICAgICA6IHRoaXMuZ2V0UmVmZXJlbmNlKCd3b3JsZG1hcCcpLmlkLFxuICAgICAgICAgICAgcGF0aCAgIDogJ3Nlcmllcy52YWx1ZXMuMC5oZWF0UnVsZXMudmFsdWVzLjAubWF4VmFsdWUnLFxuICAgICAgICAgICAgdmFsdWUgIDogdmFsdWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTmVvLm1haW4uYWRkb24uQW1DaGFydHMuY2FsbE1ldGhvZCh7XG4gICAgICAgICAgICBpZCAgOiBjaGFydElkLFxuICAgICAgICAgICAgcGF0aDogJ3Nlcmllcy52YWx1ZXMuMC5pbnZhbGlkYXRlRGF0YSdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uSGVhdFJ1bGVGaWVsZENoYW5nZShkYXRhKSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBjbGVhclRpbWVvdXQobWUuaGVhdFJ1bGVDaGFuZ2VUaW1lb3V0KTtcblxuICAgICAgICBtZS5oZWF0UnVsZUNoYW5nZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG1lLmNoYW5nZUhlYXRSdWxlKGRhdGEudmFsdWUpO1xuICAgICAgICB9LCBtZS5oZWF0UnVsZUNoYW5nZURlbGF5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25TZXJpZXNCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIGNvbnN0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgY2hhcnRJZCAgICAgPSBtZS5nZXRSZWZlcmVuY2UoJ3dvcmxkbWFwJykuaWQsXG4gICAgICAgICAgICAgIGNvdW50cnlEYXRhID0gWy4uLm1lLmdldFBhcmVudCgpLmRhdGFdO1xuXG4gICAgICAgIGNvbnN0IGNvbG9yTWFwID0ge1xuICAgICAgICAgICAgYWN0aXZlICAgOiAnIzY0YjVmNicsXG4gICAgICAgICAgICBjYXNlcyAgICA6ICcjYmJiYmJiJyxcbiAgICAgICAgICAgIGRlYXRocyAgIDogJyNmYjY3NjcnLFxuICAgICAgICAgICAgcmVjb3ZlcmVkOiAnIzI4Y2E2OCdcbiAgICAgICAgfTtcblxuICAgICAgICBOZW8ubWFpbi5hZGRvbi5BbUNoYXJ0cy5zZXRQcm9wZXJ0eSh7XG4gICAgICAgICAgICBpZCAgICAgOiBjaGFydElkLFxuICAgICAgICAgICAgaXNDb2xvcjogdHJ1ZSxcbiAgICAgICAgICAgIHBhdGggICA6ICdzZXJpZXMudmFsdWVzLjAuaGVhdFJ1bGVzLnZhbHVlcy4wLm1heCcsXG4gICAgICAgICAgICB2YWx1ZSAgOiBjb2xvck1hcFtkYXRhLmNvbXBvbmVudC5zZXJpZXNdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIE5lby5tYWluLmFkZG9uLkFtQ2hhcnRzLnNldFByb3BlcnR5KHtcbiAgICAgICAgICAgIGlkICAgOiBjaGFydElkLFxuICAgICAgICAgICAgcGF0aCA6ICdzZXJpZXMudmFsdWVzLjAuZGF0YUZpZWxkcy52YWx1ZScsXG4gICAgICAgICAgICB2YWx1ZTogZGF0YS5jb21wb25lbnQuc2VyaWVzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIE5lby5tYWluLmFkZG9uLkFtQ2hhcnRzLmNhbGxNZXRob2Qoe1xuICAgICAgICAgICAgaWQgIDogY2hhcnRJZCxcbiAgICAgICAgICAgIHBhdGg6ICdzZXJpZXMudmFsdWVzLjAuaW52YWxpZGF0ZURhdGEnXG4gICAgICAgIH0pLiB0aGVuKCgpID0+IHtcbiAgICAgICAgICAgIG1lLmdldFJlZmVyZW5jZSgnY3VycmVudE1hcFZpZXdMYWJlbCcpLnRleHQgPSAnQ3VycmVudCB2aWV3OiAnICsgTmVvLmNhcGl0YWxpemUoZGF0YS5jb21wb25lbnQuc2VyaWVzKTtcblxuICAgICAgICAgICAgY291bnRyeURhdGEuc29ydCgoYSwgYikgPT4gYltkYXRhLmNvbXBvbmVudC5zZXJpZXNdIC0gYVtkYXRhLmNvbXBvbmVudC5zZXJpZXNdKTtcblxuICAgICAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdoZWF0UnVsZUZpZWxkJykudmFsdWUgPSBNYXRoLmNlaWwoY291bnRyeURhdGFbOV1bZGF0YS5jb21wb25lbnQuc2VyaWVzXSAvIDEwMCkgKiAxMDA7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoV29ybGRNYXBDb250YWluZXJDb250cm9sbGVyKTtcblxuZXhwb3J0IHtXb3JsZE1hcENvbnRhaW5lckNvbnRyb2xsZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvdW50cnlTdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9Db3VudHJpZXMubWpzJztcbmltcG9ydCBHYWxsZXJ5ICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudC9HYWxsZXJ5Lm1qcyc7XG5pbXBvcnQgVXRpbCAgICAgICAgIGZyb20gJy4uLy4uL1V0aWwubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgQ292aWQudmlldy5jb3VudHJ5LkdhbGxlcnlcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuR2FsbGVyeVxuICovXG5jbGFzcyBDb3VudHJ5R2FsbGVyeSBleHRlbmRzIEdhbGxlcnkge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdDb3ZpZC52aWV3LmNvdW50cnkuR2FsbGVyeSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQudmlldy5jb3VudHJ5LkdhbGxlcnknLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2NvdmlkLWNvdW50cnktZ2FsbGVyeScsICduZW8tZ2FsbGVyeScsICdwYWdlJywgJ3ZpZXcnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ2NvdmlkLWNvdW50cnktZ2FsbGVyeScsICduZW8tZ2FsbGVyeScsICdwYWdlJywgJ3ZpZXcnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpbWFnZSBoZWlnaHQgb2YgdGhlIGdhbGxlcnlcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBpbWFnZUhlaWdodD0yNDBcbiAgICAgICAgICovXG4gICAgICAgIGltYWdlSGVpZ2h0OiAyODAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaW1hZ2Ugd2lkdGggb2YgdGhlIGdhbGxlcnlcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBpbWFnZVdpZHRoPTMyMFxuICAgICAgICAgKi9cbiAgICAgICAgaW1hZ2VXaWR0aDogMzQwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBpdGVtVHBsX1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbVRwbDoge1xuICAgICAgICAgICAgY2xzICAgICA6IFsnbmVvLWdhbGxlcnktaXRlbScsICdpbWFnZS13cmFwJywgJ3ZpZXcnLCAnbmVvLXRyYW5zaXRpb24tMTAwMCddLFxuICAgICAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICBjbHMgIDogWyduZW8taXRlbS13cmFwcGVyJ10sXG4gICAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgICAgICB0YWcgIDogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIGNscyAgOiBbJ25lby1jb3VudHJ5LWdhbGxlcnktaXRlbSddLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge30sXG5cbiAgICAgICAgICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWl0ZW0taGVhZGVyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICdpbWcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsczogWyduZW8tZmxhZyddXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ3RhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsczogWyduZW8tY29udGVudC10YWJsZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ3RyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbiA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgaHRtbDogJ0Nhc2VzJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGNsczogWyduZW8tYWxpZ24tcmlnaHQnXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIHN0eWxlOiB7d2lkdGg6ICcxMDAlJ319LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBodG1sOiAnQ2FzZXMgdG9kYXknfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgY2xzOiBbJ25lby1hbGlnbi1yaWdodCddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICd0cicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGh0bWw6ICdEZWF0aHMnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgY2xzOiBbJ25lby1hbGlnbi1yaWdodCcsICduZW8tY29udGVudC1kZWF0aHMnXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIHN0eWxlOiB7d2lkdGg6ICcxMDAlJ319LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBodG1sOiAnRGVhdGhzIHRvZGF5J30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGNsczogWyduZW8tYWxpZ24tcmlnaHQnLCAnbmVvLWNvbnRlbnQtZGVhdGhzJ119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ3RyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbiA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgaHRtbDogJ1JlY292ZXJlZCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBjbHM6IFsnbmVvLWFsaWduLXJpZ2h0JywgJ25lby1jb250ZW50LXJlY292ZXJlZCddfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgc3R5bGU6IHt3aWR0aDogJzEwMCUnfX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGh0bWw6ICdDcml0aWNhbCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBjbHM6IFsnbmVvLWFsaWduLXJpZ2h0JywgJ25lby1jb250ZW50LWNyaXRpY2FsJ119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB1bmlxdWUgcmVjb3JkIGZpZWxkIGNvbnRhaW5pbmcgdGhlIGlkLlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGtleVByb3BlcnR5PSdpZCdcbiAgICAgICAgICovXG4gICAgICAgIGtleVByb3BlcnR5OiAnY291bnRyeScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHRvIHNlbGVjdCB0aGUgaXRlbSBpbnNpZGUgdGhlIG1pZGRsZSBvZiB0aGUgc3RvcmUgaXRlbXMgb24gbW91bnRcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2VsZWN0T25Nb3VudD1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZWN0T25Nb3VudDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5TdG9yZX0gc3RvcmU9Q291bnRyeVN0b3JlXG4gICAgICAgICAqL1xuICAgICAgICBzdG9yZTogQ291bnRyeVN0b3JlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGdldCBkaWZmZXJlbnQgaXRlbS1tYXJrdXBzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21JdGVtXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHZkb21JdGVtXG4gICAgICovXG4gICAgY3JlYXRlSXRlbSh2ZG9tSXRlbSwgcmVjb3JkLCBpbmRleCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBmaXJzdENoaWxkID0gdmRvbUl0ZW0uY25bMF0uY25bMF0sXG4gICAgICAgICAgICBmTiAgICAgICAgID0gVXRpbC5mb3JtYXROdW1iZXIsXG4gICAgICAgICAgICB0YWJsZSAgICAgID0gZmlyc3RDaGlsZC5jblsxXTtcblxuICAgICAgICB2ZG9tSXRlbS5pZCA9IG1lLmdldEl0ZW1Wbm9kZUlkKHJlY29yZFttZS5rZXlQcm9wZXJ0eV0pO1xuXG4gICAgICAgIHZkb21JdGVtLmNuWzBdLnN0eWxlLmhlaWdodCA9IG1lLmltYWdlSGVpZ2h0ICsgJ3B4JztcblxuICAgICAgICBmaXJzdENoaWxkLnN0eWxlLmhlaWdodCA9IChtZS5pbWFnZUhlaWdodCAtIDcwKSArICdweCc7XG4gICAgICAgIGZpcnN0Q2hpbGQuc3R5bGUud2lkdGggID0gbWUuaW1hZ2VXaWR0aCAgKyAncHgnO1xuXG4gICAgICAgIGZpcnN0Q2hpbGQuY25bMF0uY25bMF0uc3JjICA9IFV0aWwuZ2V0Q291bnRyeUZsYWdVcmwocmVjb3JkLmNvdW50cnkpO1xuICAgICAgICBmaXJzdENoaWxkLmNuWzBdLmNuWzFdLmh0bWwgPSByZWNvcmQuY291bnRyeTtcblxuICAgICAgICB0YWJsZS5jblswXS5jblsxXS5odG1sID0gZk4oe3ZhbHVlOiByZWNvcmQuY2FzZXN9KTtcbiAgICAgICAgdGFibGUuY25bMV0uY25bMV0uaHRtbCA9IGZOKHt2YWx1ZTogcmVjb3JkLmRlYXRoc30pO1xuICAgICAgICB0YWJsZS5jblsyXS5jblsxXS5odG1sID0gZk4oe3ZhbHVlOiByZWNvcmQucmVjb3ZlcmVkfSk7XG5cbiAgICAgICAgdGFibGUuY25bMF0uY25bNF0uaHRtbCA9IGZOKHt2YWx1ZTogcmVjb3JkLnRvZGF5Q2FzZXN9KTtcbiAgICAgICAgdGFibGUuY25bMV0uY25bNF0uaHRtbCA9IGZOKHt2YWx1ZTogcmVjb3JkLnRvZGF5RGVhdGhzfSk7XG4gICAgICAgIHRhYmxlLmNuWzJdLmNuWzRdLmh0bWwgPSBmTih7dmFsdWU6IHJlY29yZC5jcml0aWNhbH0pO1xuXG4gICAgICAgIHJldHVybiB2ZG9tSXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2bm9kZUlkXG4gICAgICogQHJldHVybnMge1N0cmluZ30gaXRlbUlkXG4gICAgICovXG4gICAgZ2V0SXRlbUlkKHZub2RlSWQpIHtcbiAgICAgICAgcmV0dXJuIHZub2RlSWQuc3BsaXQoJ19fJylbMV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBpdGVtc1xuICAgICAqL1xuICAgIG9uU3RvcmVMb2FkKGl0ZW1zKSB7XG4gICAgICAgIHN1cGVyLm9uU3RvcmVMb2FkKGl0ZW1zKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0T25Nb3VudCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmFmdGVyU2V0TW91bnRlZCh0cnVlLCBmYWxzZSk7XG4gICAgICAgIH0sIDQwMCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb3VudHJ5R2FsbGVyeSk7XG5cbmV4cG9ydCB7Q291bnRyeUdhbGxlcnkgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvdW50cnlTdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9Db3VudHJpZXMubWpzJztcbmltcG9ydCBIZWxpeCAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudC9IZWxpeC5tanMnO1xuaW1wb3J0IFV0aWwgICAgICAgICBmcm9tICcuLi8uLi9VdGlsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLnZpZXcuY291bnRyeS5IZWxpeFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5IZWxpeFxuICovXG5jbGFzcyBDb3VudHJ5SGVsaXggZXh0ZW5kcyBIZWxpeCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0NvdmlkLnZpZXcuY291bnRyeS5IZWxpeCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQudmlldy5jb3VudHJ5LkhlbGl4JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9Wydjb3ZpZC1jb3VudHJ5LWhlbGl4JywgJ25lby1oZWxpeCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnY292aWQtY291bnRyeS1oZWxpeCcsICduZW8taGVsaXgnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB2ZXJ0aWNhbCBkZWx0YSBiZXR3ZWVuIGVhY2ggaGVsaXggaXRlbSAoaW5jcmVhc2luZyB0aGlzIHZhbHVlIHdpbGwgY3JlYXRlIGEgc3BpcmFsKVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGRlbHRhWT0xLjJcbiAgICAgICAgICovXG4gICAgICAgIGRlbHRhWTogMS4yLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBpdGVtVHBsX1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbVRwbDoge1xuICAgICAgICAgICAgY2xzICAgICA6IFsnc3VyZmFjZScsICduZW8taGVsaXgtaXRlbSddLFxuICAgICAgICAgICAgc3R5bGUgICA6IHt9LFxuICAgICAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICBjbHMgIDogWyduZW8taXRlbS13cmFwcGVyJ10sXG4gICAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgICAgICB0YWcgIDogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIGNscyAgOiBbJ25lby1jb3VudHJ5LWhlbGl4LWl0ZW0nXSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuXG4gICAgICAgICAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1pdGVtLWhlYWRlciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAnaW1nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWZsYWcnXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICd0YWJsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWNvbnRlbnQtdGFibGUnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICd0cicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGh0bWw6ICdDYXNlcyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBjbHM6IFsnbmVvLWFsaWduLXJpZ2h0J119LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBzdHlsZToge3dpZHRoOiAnMTAwJSd9fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgaHRtbDogJ0Nhc2VzIHRvZGF5J30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGNsczogWyduZW8tYWxpZ24tcmlnaHQnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAndHInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNuIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBodG1sOiAnRGVhdGhzJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGNsczogWyduZW8tYWxpZ24tcmlnaHQnLCAnbmVvLWNvbnRlbnQtZGVhdGhzJ119LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBzdHlsZToge3dpZHRoOiAnMTAwJSd9fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgaHRtbDogJ0RlYXRocyB0b2RheSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBjbHM6IFsnbmVvLWFsaWduLXJpZ2h0JywgJ25lby1jb250ZW50LWRlYXRocyddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICd0cicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGh0bWw6ICdSZWNvdmVyZWQnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgY2xzOiBbJ25lby1hbGlnbi1yaWdodCcsICduZW8tY29udGVudC1yZWNvdmVyZWQnXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIHN0eWxlOiB7d2lkdGg6ICcxMDAlJ319LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBodG1sOiAnQ3JpdGljYWwnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgY2xzOiBbJ25lby1hbGlnbi1yaWdodCcsICduZW8tY29udGVudC1jcml0aWNhbCddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdW5pcXVlIHJlY29yZCBmaWVsZCBjb250YWluaW5nIHRoZSBpZC5cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBrZXlQcm9wZXJ0eT0naWQnXG4gICAgICAgICAqL1xuICAgICAgICBrZXlQcm9wZXJ0eTogJ2NvdW50cnknLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHJhZGl1cyBvZiB0aGUgSGVsaXggaW4gcHhcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSByYWRpdXM9MjUwMFxuICAgICAgICAgKi9cbiAgICAgICAgcmFkaXVzOiAyNTAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHJvdGF0aW9uQW5nbGUgb2YgdGhlIEhlbGl4IGluIGRlZ3JlZXNcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSByb3RhdGlvbkFuZ2xlPTcyMFxuICAgICAgICAgKi9cbiAgICAgICAgcm90YXRpb25BbmdsZTogNzIwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBkaXNwbGF5cyB0aGUgZmlyc3QgJiBsYXN0IG5hbWUgcmVjb3JkIGZpZWxkcyBiZWxvdyBhbiBleHBhbmRlZCBpdGVtXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNob3dDbG9uZUluZm89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHNob3dDbG9uZUluZm86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmRhdGEuU3RvcmV9IHN0b3JlPUNvdW50cnlTdG9yZVxuICAgICAgICAgKi9cbiAgICAgICAgc3RvcmU6IENvdW50cnlTdG9yZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0cmFuc2xhdGVYIHZhbHVlIGdldHMgaW5jbHVkZWQgaW50byBlYWNoIGhlbGl4IGl0ZW1cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSB0cmFuc2xhdGVZPTUwMFxuICAgICAgICAgKi9cbiAgICAgICAgdHJhbnNsYXRlWTogNTAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRyYW5zbGF0ZVggdmFsdWUgZ2V0cyBpbmNsdWRlZCBpbnRvIGVhY2ggaGVsaXggaXRlbVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHRyYW5zbGF0ZVpfPS0yMzAwXG4gICAgICAgICAqL1xuICAgICAgICB0cmFuc2xhdGVaOiAtMjMwMFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tSXRlbVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB2ZG9tSXRlbVxuICAgICAqL1xuICAgIGNyZWF0ZUl0ZW0odmRvbUl0ZW0sIHJlY29yZCwgaW5kZXgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZmlyc3RDaGlsZCA9IHZkb21JdGVtLmNuWzBdLmNuWzBdLFxuICAgICAgICAgICAgZk4gICAgICAgICA9IFV0aWwuZm9ybWF0TnVtYmVyLFxuICAgICAgICAgICAgdGFibGUgICAgICA9IGZpcnN0Q2hpbGQuY25bMV07XG5cbiAgICAgICAgdmRvbUl0ZW0uaWQgPSBtZS5nZXRJdGVtVm5vZGVJZChyZWNvcmRbbWUua2V5UHJvcGVydHldKTtcblxuICAgICAgICBmaXJzdENoaWxkLmNuWzBdLmNuWzBdLnNyYyAgPSBVdGlsLmdldENvdW50cnlGbGFnVXJsKHJlY29yZC5jb3VudHJ5KTtcbiAgICAgICAgZmlyc3RDaGlsZC5jblswXS5jblsxXS5odG1sID0gcmVjb3JkLmNvdW50cnk7XG5cbiAgICAgICAgdGFibGUuY25bMF0uY25bMV0uaHRtbCA9IGZOKHt2YWx1ZTogcmVjb3JkLmNhc2VzfSk7XG4gICAgICAgIHRhYmxlLmNuWzFdLmNuWzFdLmh0bWwgPSBmTih7dmFsdWU6IHJlY29yZC5kZWF0aHN9KTtcbiAgICAgICAgdGFibGUuY25bMl0uY25bMV0uaHRtbCA9IGZOKHt2YWx1ZTogcmVjb3JkLnJlY292ZXJlZH0pO1xuXG4gICAgICAgIHRhYmxlLmNuWzBdLmNuWzRdLmh0bWwgPSBmTih7dmFsdWU6IHJlY29yZC50b2RheUNhc2VzfSk7XG4gICAgICAgIHRhYmxlLmNuWzFdLmNuWzRdLmh0bWwgPSBmTih7dmFsdWU6IHJlY29yZC50b2RheURlYXRoc30pO1xuICAgICAgICB0YWJsZS5jblsyXS5jbls0XS5odG1sID0gZk4oe3ZhbHVlOiByZWNvcmQuY3JpdGljYWx9KTtcblxuICAgICAgICByZXR1cm4gdmRvbUl0ZW07XG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRDbG9uZVRyYW5zZm9ybSgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdHJhbnNsYXRlWCA9IChtZS5vZmZzZXRXaWR0aCAgLSAyODAwKSAvIDYsXG4gICAgICAgICAgICB0cmFuc2xhdGVZID0gKG1lLm9mZnNldEhlaWdodCAtIDI3MDApIC8gNixcbiAgICAgICAgICAgIHRyYW5zbGF0ZVogPSAxMDA0MDAgKyBtZS5wZXJzcGVjdGl2ZSAvIDEuNTtcblxuICAgICAgICByZXR1cm4gJ21hdHJpeDNkKDEsMCwwLDAsMCwxLDAsMCwwLDAsMSwwLCcrdHJhbnNsYXRlWCsnLCcrdHJhbnNsYXRlWSsnLCcrdHJhbnNsYXRlWisnLDEpJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2bm9kZUlkXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRJdGVtSWQodm5vZGVJZCkge1xuICAgICAgICByZXR1cm4gdm5vZGVJZC5zcGxpdCgnX18nKVsxXTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENvdW50cnlIZWxpeCk7XG5cbmV4cG9ydCB7Q291bnRyeUhlbGl4IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb250YWluZXIgICAgICBmcm9tICcuLi8uLi8uLi8uLi9zcmMvdGFibGUvQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgSGlzdG9yaWNhbERhdGEgZnJvbSAnLi4vLi4vc3RvcmUvSGlzdG9yaWNhbERhdGEubWpzJztcbmltcG9ydCBVdGlsICAgICAgICAgICBmcm9tICcuLi8uLi9VdGlsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLnZpZXcuY291bnRyeS5IaXN0b3JpY2FsRGF0YVRhYmxlXG4gKiBAZXh0ZW5kcyBOZW8udGFibGUuQ29udGFpbmVyXG4gKi9cbmNsYXNzIEhpc3RvcmljYWxEYXRhVGFibGUgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdDb3ZpZC52aWV3LmNvdW50cnkuSGlzdG9yaWNhbERhdGFUYWJsZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQudmlldy5jb3VudHJ5Lkhpc3RvcmljYWxEYXRhVGFibGUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2NvdmlkLWhpc3RvcmljYWwtZGF0YS10YWJsZScsICduZW8tdGFibGUtY29udGFpbmVyJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWydjb3ZpZC1oaXN0b3JpY2FsLWRhdGEtdGFibGUnLCAnbmVvLXRhYmxlLWNvbnRhaW5lciddLFxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmYXVsdCBjb25maWdzIGZvciBlYWNoIGNvbHVtblxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGNvbHVtbkRlZmF1bHRzXG4gICAgICAgICAqL1xuICAgICAgICBjb2x1bW5EZWZhdWx0czoge1xuICAgICAgICAgICAgYWxpZ24gICAgICAgICAgICAgICA6ICdyaWdodCcsXG4gICAgICAgICAgICBkZWZhdWx0U29ydERpcmVjdGlvbjogJ0RFU0MnLFxuICAgICAgICAgICAgcmVuZGVyZXIgICAgICAgICAgICA6IFV0aWwuZm9ybWF0TnVtYmVyXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX0gY29sdW1uc1xuICAgICAgICAgKi9cbiAgICAgICAgY29sdW1uczogW3tcbiAgICAgICAgICAgIGFsaWduICAgIDogJ2xlZnQnLFxuICAgICAgICAgICAgZGF0YUZpZWxkOiAnZGF0ZScsXG4gICAgICAgICAgICBkb2NrICAgICA6ICdsZWZ0JyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ0RhdGUnLFxuICAgICAgICAgICAgd2lkdGggICAgOiAxMDAsXG4gICAgICAgICAgICByZW5kZXJlciA6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjbHMgOiBbJ25lby1kYXRlLWNvbHVtbicsICduZW8tdGFibGUtY2VsbCddLFxuICAgICAgICAgICAgICAgICAgICBodG1sOiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZGVmYXVsdCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheSAgOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb250aDogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeWVhciA6ICdudW1lcmljJ1xuICAgICAgICAgICAgICAgICAgICB9KS5mb3JtYXQobmV3IERhdGUoZGF0YS52YWx1ZSkpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAnY2FzZXMnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnQ2FzZXMnLFxuICAgICAgICAgICAgcmVuZGVyZXIgOiBkYXRhID0+IFV0aWwuZm9ybWF0TnVtYmVyKGRhdGEpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ2FjdGl2ZScsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICdBY3RpdmUnLFxuICAgICAgICAgICAgcmVuZGVyZXIgOiBkYXRhID0+IFV0aWwuZm9ybWF0TnVtYmVyKGRhdGEsICcjNjRCNUY2JylcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAncmVjb3ZlcmVkJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ1JlY292ZXJlZCcsXG4gICAgICAgICAgICByZW5kZXJlciA6IGRhdGEgPT4gVXRpbC5mb3JtYXROdW1iZXIoZGF0YSwgJyMyOGNhNjgnKVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICdkZWF0aHMnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnRGVhdGhzJyxcbiAgICAgICAgICAgIHJlbmRlcmVyIDogZGF0YSA9PiBVdGlsLmZvcm1hdE51bWJlcihkYXRhLCAnI2ZiNjc2NycpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ2RhaWx5Q2FzZXMnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnRGFpbHkgQycsXG4gICAgICAgICAgICByZW5kZXJlciA6IGRhdGEgPT4gVXRpbC5mb3JtYXROdW1iZXIoZGF0YSlcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAnZGFpbHlBY3RpdmUnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnRGFpbHkgQScsXG4gICAgICAgICAgICByZW5kZXJlciA6IGRhdGEgPT4gVXRpbC5mb3JtYXROdW1iZXIoZGF0YSwgJyM2NEI1RjYnKVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICdkYWlseVJlY292ZXJlZCcsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICdEYWlseSBSJyxcbiAgICAgICAgICAgIHJlbmRlcmVyIDogZGF0YSA9PiBVdGlsLmZvcm1hdE51bWJlcihkYXRhLCAnIzI4Y2E2OCcpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ2RhaWx5RGVhdGhzJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ0RhaWx5IEQnLFxuICAgICAgICAgICAgcmVuZGVyZXIgOiBkYXRhID0+IFV0aWwuZm9ybWF0TnVtYmVyKGRhdGEsICcjZmI2NzY3JylcbiAgICAgICAgfV0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5TdG9yZX0gc3RvcmU9SGlzdG9yaWNhbERhdGFcbiAgICAgICAgICovXG4gICAgICAgIHN0b3JlOiBIaXN0b3JpY2FsRGF0YVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEhpc3RvcmljYWxEYXRhVGFibGUpO1xuXG5leHBvcnQge0hpc3RvcmljYWxEYXRhVGFibGUgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEFtQ2hhcnRDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudC93cmFwcGVyL0FtQ2hhcnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgQ292aWQudmlldy5jb3VudHJ5LkxpbmVDaGFydENvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC53cmFwcGVyLkFtQ2hhcnRcbiAqL1xuY2xhc3MgTGluZUNoYXJ0Q29tcG9uZW50IGV4dGVuZHMgQW1DaGFydENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0NvdmlkLnZpZXcuY291bnRyeS5MaW5lQ2hhcnRDb21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkLnZpZXcuY291bnRyeS5MaW5lQ2hhcnRDb21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2NvdmlkLWxpbmUtY2hhcnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ2NvdmlkLWxpbmUtY2hhcnQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gY2hhcnRDb25maWdcbiAgICAgICAgICovXG4gICAgICAgIGNoYXJ0Q29uZmlnOiB7XG4gICAgICAgICAgICBjdXJzb3I6IHtcbiAgICAgICAgICAgICAgICBtYXhUb29sdGlwRGlzdGFuY2U6IC0xXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICcjYmJiJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgeEF4ZXM6IFt7XG4gICAgICAgICAgICAgICAgdHlwZTogJ0RhdGVBeGlzJyxcblxuICAgICAgICAgICAgICAgIHJlbmRlcmVyOiB7XG4gICAgICAgICAgICAgICAgICAgIG1pbkdyaWREaXN0YW5jZTogNjAsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAnI2JiYidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dLFxuXG4gICAgICAgICAgICB5QXhlczogW3tcbiAgICAgICAgICAgICAgICB0eXBlICAgICAgIDogJ1ZhbHVlQXhpcycsXG4gICAgICAgICAgICAgICAgbG9nYXJpdGhtaWM6IHRydWUsXG5cbiAgICAgICAgICAgICAgICBudW1iZXJGb3JtYXR0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyRm9ybWF0OiAnIy4wYScsXG5cbiAgICAgICAgICAgICAgICAgICAgYmlnTnVtYmVyUHJlZml4ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtudW1iZXI6IDFlMywgc3VmZml4OiAnSyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAge251bWJlcjogMWU2LCBzdWZmaXg6ICdNJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICB7bnVtYmVyOiAxZTksIHN1ZmZpeDogJ0InfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZW5kZXJlcjoge1xuICAgICAgICAgICAgICAgICAgICBtaW5HcmlkRGlzdGFuY2U6IDYwLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogJyNiYmInXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSxcblxuICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgIHR5cGUgICAgICAgOiAnTGluZVNlcmllcycsXG4gICAgICAgICAgICAgICAgZGF0YUZpZWxkcyA6IHtkYXRlWCA6ICdkYXRlJywgdmFsdWVZOiAnYWN0aXZlJ30sXG4gICAgICAgICAgICAgICAgZmlsbCAgICAgICA6ICcjNjRiNWY2JyxcbiAgICAgICAgICAgICAgICBuYW1lICAgICAgIDogJ0FjdGl2ZScsXG4gICAgICAgICAgICAgICAgc3Ryb2tlICAgICA6ICcjNjRiNWY2JyxcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogMyxcblxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZCAgICAgICA6IHtmaWxsOiAnI2ZmZid9LFxuICAgICAgICAgICAgICAgICAgICBnZXRGaWxsRnJvbU9iamVjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsICAgICAgICAgICAgOiB7ZmlsbDogJyMwMDAnfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0eXBlICAgICAgIDogJ0xpbmVTZXJpZXMnLFxuICAgICAgICAgICAgICAgIGRhdGFGaWVsZHMgOiB7ZGF0ZVggOiAnZGF0ZScsIHZhbHVlWTogJ2Nhc2VzJ30sXG4gICAgICAgICAgICAgICAgZmlsbCAgICAgICA6ICcjYmJiJyxcbiAgICAgICAgICAgICAgICBuYW1lICAgICAgIDogJ0Nhc2VzJyxcbiAgICAgICAgICAgICAgICBzdHJva2UgICAgIDogJyNiYmInLFxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAzLFxuICAgICAgICAgICAgICAgIC8vdGVuc2lvblggICA6IC45LFxuXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kICAgICAgIDoge2ZpbGw6ICcjZmZmJ30sXG4gICAgICAgICAgICAgICAgICAgIGdldEZpbGxGcm9tT2JqZWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwgICAgICAgICAgICA6IHtmaWxsOiAnIzAwMCd9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHR5cGUgICAgICAgOiAnTGluZVNlcmllcycsXG4gICAgICAgICAgICAgICAgZGF0YUZpZWxkcyA6IHtkYXRlWCA6ICdkYXRlJywgdmFsdWVZOiAnZGVhdGhzJ30sXG4gICAgICAgICAgICAgICAgZmlsbCAgICAgICA6ICcjZmI2NzY3JyxcbiAgICAgICAgICAgICAgICBuYW1lICAgICAgIDogJ0RlYXRocycsXG4gICAgICAgICAgICAgICAgc3Ryb2tlICAgICA6ICcjZmI2NzY3JyxcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogMyxcblxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZCAgICAgICA6IHtmaWxsOiAnI2ZmZid9LFxuICAgICAgICAgICAgICAgICAgICBnZXRGaWxsRnJvbU9iamVjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsICAgICAgICAgICAgOiB7ZmlsbDogJyMwMDAnfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0eXBlICAgICAgIDogJ0xpbmVTZXJpZXMnLFxuICAgICAgICAgICAgICAgIGRhdGFGaWVsZHMgOiB7ZGF0ZVggOiAnZGF0ZScsIHZhbHVlWTogJ3JlY292ZXJlZCd9LFxuICAgICAgICAgICAgICAgIGZpbGwgICAgICAgOiAnIzI4Y2E2OCcsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgICA6ICdSZWNvdmVyZWQnLFxuICAgICAgICAgICAgICAgIHN0cm9rZSAgICAgOiAnIzI4Y2E2OCcsXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDMsXG5cbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQgICAgICAgOiB7ZmlsbDogJyNmZmYnfSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0RmlsbEZyb21PYmplY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbCAgICAgICAgICAgIDoge2ZpbGw6ICcjMDAwJ31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gY29tYmluZVNlcmllc1Rvb2x0aXA9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgY29tYmluZVNlcmllc1Rvb2x0aXA6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBmaXRQYXJlbnRIZWlnaHQ9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgZml0UGFyZW50SGVpZ2h0OiB0cnVlXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTGluZUNoYXJ0Q29tcG9uZW50KTtcblxuZXhwb3J0IHtMaW5lQ2hhcnRDb21wb25lbnQgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbnRhaW5lciAgICBmcm9tICcuLi8uLi8uLi8uLi9zcmMvdGFibGUvQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgQ291bnRyeVN0b3JlIGZyb20gJy4uLy4uL3N0b3JlL0NvdW50cmllcy5tanMnO1xuaW1wb3J0IFV0aWwgICAgICAgICBmcm9tICcuLi8uLi9VdGlsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLnZpZXcuY291bnRyeS5UYWJsZVxuICogQGV4dGVuZHMgTmVvLnRhYmxlLkNvbnRhaW5lclxuICovXG5jbGFzcyBUYWJsZSBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0NvdmlkLnZpZXcuY291bnRyeS5UYWJsZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQudmlldy5jb3VudHJ5LlRhYmxlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9Wydjb3ZpZC1jb3VudHJ5LXRhYmxlJywgJ25lby10YWJsZS1jb250YWluZXInXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ2NvdmlkLWNvdW50cnktdGFibGUnLCAnbmVvLXRhYmxlLWNvbnRhaW5lciddLFxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmYXVsdCBjb25maWdzIGZvciBlYWNoIGNvbHVtblxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGNvbHVtbkRlZmF1bHRzXG4gICAgICAgICAqL1xuICAgICAgICBjb2x1bW5EZWZhdWx0czoge1xuICAgICAgICAgICAgYWxpZ24gICAgICAgICAgICAgICA6ICdyaWdodCcsXG4gICAgICAgICAgICBkZWZhdWx0U29ydERpcmVjdGlvbjogJ0RFU0MnLFxuICAgICAgICAgICAgcmVuZGVyZXIgICAgICAgICAgICA6IFV0aWwuZm9ybWF0TnVtYmVyXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX0gY29sdW1uc1xuICAgICAgICAgKi9cbiAgICAgICAgY29sdW1uczogW3tcbiAgICAgICAgICAgIGNscyAgICAgIDogWyduZW8taW5kZXgtY29sdW1uJywgJ25lby10YWJsZS1oZWFkZXItYnV0dG9uJ10sXG4gICAgICAgICAgICBkYXRhRmllbGQ6ICdpbmRleCcsXG4gICAgICAgICAgICBkb2NrICAgICA6ICdsZWZ0JyxcbiAgICAgICAgICAgIG1pbldpZHRoIDogNDAsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICcjJyxcbiAgICAgICAgICAgIHJlbmRlcmVyIDogVXRpbC5pbmRleFJlbmRlcmVyLFxuICAgICAgICAgICAgd2lkdGggICAgOiA0MFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBhbGlnbiAgICAgICAgICAgICAgIDogJ2xlZnQnLFxuICAgICAgICAgICAgZGF0YUZpZWxkICAgICAgICAgICA6ICdjb3VudHJ5JyxcbiAgICAgICAgICAgIGRlZmF1bHRTb3J0RGlyZWN0aW9uOiAnQVNDJyxcbiAgICAgICAgICAgIGRvY2sgICAgICAgICAgICAgICAgOiAnbGVmdCcsXG4gICAgICAgICAgICB0ZXh0ICAgICAgICAgICAgICAgIDogJ0NvdW50cnknLFxuICAgICAgICAgICAgd2lkdGggICAgICAgICAgICAgICA6IDIwMCxcblxuICAgICAgICAgICAgcmVuZGVyZXI6IGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNscyA6IFsnbmVvLWNvdW50cnktY29sdW1uJywgJ25lby10YWJsZS1jZWxsJ10sXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlclwiPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxpbWcgc3R5bGU9XCJoZWlnaHQ6MjBweDsgbWFyZ2luLXJpZ2h0OjEwcHg7IHdpZHRoOjIwcHg7XCIgc3JjPVwiJyArIFV0aWwuZ2V0Q291bnRyeUZsYWdVcmwoZGF0YS52YWx1ZSkgKyAnXCI+JyArIGRhdGEudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+J1xuICAgICAgICAgICAgICAgICAgICBdLmpvaW4oJycpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAnY2FzZXMnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnQ2FzZXMnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ2Nhc2VzUGVyT25lTWlsbGlvbicsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICdDYXNlcyAvIDFNJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICdpbmZlY3RlZCcsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICdJbmZlY3RlZCcsXG4gICAgICAgICAgICByZW5kZXJlciA6IGRhdGEgPT4gVXRpbC5mb3JtYXRJbmZlY3RlZChkYXRhKVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICdhY3RpdmUnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnQWN0aXZlJyxcbiAgICAgICAgICAgIHJlbmRlcmVyIDogZGF0YSA9PiBVdGlsLmZvcm1hdE51bWJlcihkYXRhLCAnIzY0QjVGNicpXG4gICAgICAgIH0sICB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICdyZWNvdmVyZWQnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnUmVjb3ZlcmVkJyxcbiAgICAgICAgICAgIHJlbmRlcmVyIDogZGF0YSA9PiBVdGlsLmZvcm1hdE51bWJlcihkYXRhLCAnIzI4Y2E2OCcpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ2NyaXRpY2FsJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ0NyaXRpY2FsJyxcbiAgICAgICAgICAgIHJlbmRlcmVyIDogZGF0YSA9PiBVdGlsLmZvcm1hdE51bWJlcihkYXRhLCAnb3JhbmdlJylcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAnZGVhdGhzJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ0RlYXRocycsXG4gICAgICAgICAgICByZW5kZXJlciA6IGRhdGEgPT4gVXRpbC5mb3JtYXROdW1iZXIoZGF0YSwgJyNmYjY3NjcnKVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICd0b2RheUNhc2VzJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ0Nhc2VzIHRvZGF5J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICd0b2RheURlYXRocycsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICdEZWF0aHMgdG9kYXknLFxuICAgICAgICAgICAgcmVuZGVyZXIgOiBkYXRhID0+IFV0aWwuZm9ybWF0TnVtYmVyKGRhdGEsICcjZmI2NzY3JylcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAndGVzdHMnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnVGVzdHMnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ3Rlc3RzUGVyT25lTWlsbGlvbicsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICdUZXN0cyAvIDFNJ1xuICAgICAgICB9XSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5kYXRhLlN0b3JlfSBzdG9yZT1Db3VudHJ5U3RvcmVcbiAgICAgICAgICovXG4gICAgICAgIHN0b3JlOiBDb3VudHJ5U3RvcmVcbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhUYWJsZSk7XG5cbmV4cG9ydCB7VGFibGUgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudC93cmFwcGVyL01hcGJveEdMLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLnZpZXcubWFwYm94R2wuQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LndyYXBwZXIuTWFwYm94R0xcbiAqL1xuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0NvdmlkLnZpZXcubWFwYm94R2wuQ29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdDb3ZpZC52aWV3Lm1hcGJveEdsLkNvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gYWNjZXNzVG9rZW5cbiAgICAgICAgICovXG4gICAgICAgIGFjY2Vzc1Rva2VuOiAncGsuZXlKMUlqb2lkRzlpYVhVaUxDSmhJam9pWTJzNGRUbHNkSEE1TURSbVl6TnRjR3hsY3pGcGNHVm5jeUo5LnFjbXpEanBkeVFlTHR6OXo3ZDdDa0EnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBjZW50ZXI9e2xhdDogNDAsIGxuZzogMjB9XG4gICAgICAgICAqL1xuICAgICAgICBjZW50ZXI6IHtsYXQ6IDQwLCBsbmc6IDIwfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZGF0YVNvdXJjZUlkPSdjb3ZpZDE5J1xuICAgICAgICAgKi9cbiAgICAgICAgZGF0YVNvdXJjZUlkOiAnY292aWQxOScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX1cbiAgICAgICAgICovXG4gICAgICAgIGxheWVyczogW3tcbiAgICAgICAgICAgIGJlZm9yZUlkOiAnd2F0ZXJ3YXktbGFiZWwnLFxuICAgICAgICAgICAgaWQgICAgICA6ICdoaWxsc2hhZGluZycsXG4gICAgICAgICAgICBzb3VyY2UgIDogJ2RlbScsXG4gICAgICAgICAgICB0eXBlICAgIDogJ2hpbGxzaGFkZSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgYmVmb3JlSWQ6ICd3YXRlcndheS1sYWJlbCcsXG4gICAgICAgICAgICBmaWx0ZXIgIDogWyc+JywgWydnZXQnLCAnY2FzZXMnXSwgMF0sXG4gICAgICAgICAgICBpZCAgICAgIDogJ2NvdmlkMTktaGVhdCcsXG4gICAgICAgICAgICBzb3VyY2UgIDogJ2NvdmlkMTknLFxuICAgICAgICAgICAgdHlwZSAgICA6ICdoZWF0bWFwJyxcblxuICAgICAgICAgICAgcGFpbnQ6IHtcbiAgICAgICAgICAgICAgICAnaGVhdG1hcC1jb2xvcicgICAgOiBbJ2ludGVycG9sYXRlJywgWydsaW5lYXInXSwgWydoZWF0bWFwLWRlbnNpdHknXSwgMCwgJ3JnYmEoMCwwLDAsMCknLCAwLjEsICcjOTI3OTAzJywgMC4xNSwgJyNmZmQ0MDMnLCAxLCAnI2ZmMDAwMCddLFxuICAgICAgICAgICAgICAgICdoZWF0bWFwLWludGVuc2l0eSc6IFsnaW50ZXJwb2xhdGUnLCBbJ2xpbmVhciddLCBbJ3pvb20nXSwgMCwgMywgOSwgNV0sXG4gICAgICAgICAgICAgICAgJ2hlYXRtYXAtb3BhY2l0eScgIDogWydpbnRlcnBvbGF0ZScsIFsnbGluZWFyJ10sIFsnem9vbSddLCA1LCAuOTUsIDYsIDBdLFxuICAgICAgICAgICAgICAgICdoZWF0bWFwLXJhZGl1cycgICA6IFsnaW50ZXJwb2xhdGUnLCBbJ2xpbmVhciddLCBbJ3pvb20nXSwgMCwgMiwgMSwgNCwgMiwgOCwgMywgMTYsIDQsIDMyLCA1LCA2NCwgNiwgMTI4LCA3LCAyNTYsIDgsIDUxMiwgOSwgMTAyNF0sXG4gICAgICAgICAgICAgICAgJ2hlYXRtYXAtd2VpZ2h0JyAgIDogWydpbnRlcnBvbGF0ZScsIFsnbGluZWFyJ10sIFsnZ2V0JywgJ2Nhc2VzJ10sIDAsIDAsIDFlNCwgMV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgYmVmb3JlSWQ6ICd3YXRlcndheS1sYWJlbCcsXG4gICAgICAgICAgICBmaWx0ZXIgIDogWyc+JywgWydnZXQnLCAnY2FzZXMnXSwgMF0sXG4gICAgICAgICAgICBpZCAgICAgIDogJ2NvdmlkMTktY2lyY2xlJyxcbiAgICAgICAgICAgIHNvdXJjZSAgOiAnY292aWQxOScsXG4gICAgICAgICAgICB0eXBlICAgIDogJ2NpcmNsZScsXG4gICAgICAgICAgICBtaW56b29tIDogNSxcblxuICAgICAgICAgICAgcGFpbnQ6IHtcbiAgICAgICAgICAgICAgICAnY2lyY2xlLWNvbG9yJyAgICA6IFsnc3RlcCcsIFsnZ2V0JywgJ2Nhc2VzJ10sICcjOWFkNWZmJywgMCwgJyM5YWY2ZmYnLCAyMCwgJyMwMGZmZmYnLCAyMDAsICcjZmZmZjAwJywgNDAwLCAnI2YxZjA3NScsIDgwMCwgJyNmOWIxOTYnLCAxZTMsICcjZjI4Y2IxJywgMmUzLCAnI2YyOGNiMSddLFxuICAgICAgICAgICAgICAgICdjaXJjbGUtb3BhY2l0eScgIDogWydpbnRlcnBvbGF0ZScsIFsnbGluZWFyJ10sIFsnem9vbSddLCA1LCAwLCA2LCAuNl0sXG4gICAgICAgICAgICAgICAgJ2NpcmNsZS1yYWRpdXMnICAgOiBbJ3N0ZXAnLCBbJ2dldCcsICdjYXNlcyddLCAxMCwgMTAwLCAyMCwgNTAwLCAzMCwgMWUzLCA0MCwgMWU0LCA1MF0sXG4gICAgICAgICAgICAgICAgJ2NpcmNsZS10cmFuc2xhdGUnOiBbMCwgMjBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGJlZm9yZUlkOiAnd2F0ZXJ3YXktbGFiZWwnLFxuICAgICAgICAgICAgZmlsdGVyICA6IFsnPicsIFsnZ2V0JywgJ2Nhc2VzJ10sIDBdLFxuICAgICAgICAgICAgaWQgICAgICA6ICdjb3ZpZDE5LWNpcmNsZS10ZXh0JyxcbiAgICAgICAgICAgIHNvdXJjZSAgOiAnY292aWQxOScsXG4gICAgICAgICAgICB0eXBlICAgIDogJ3N5bWJvbCcsXG4gICAgICAgICAgICBtaW56b29tIDogNSxcblxuICAgICAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICAgICAgICAgJ3RleHQtYWxsb3ctb3ZlcmxhcCcgICA6IHRydWUsXG4gICAgICAgICAgICAgICAgJ3RleHQtZmllbGQnICAgICAgICAgICA6IFsndG8tc3RyaW5nJywgWydnZXQnLCAnY2FzZXMnXV0sXG4gICAgICAgICAgICAgICAgJ3RleHQtZm9udCcgICAgICAgICAgICA6IFsnRElOIE9mZmMgUHJvIE1lZGl1bScsICdBcmlhbCBVbmljb2RlIE1TIEJvbGQnXSxcbiAgICAgICAgICAgICAgICAndGV4dC1pZ25vcmUtcGxhY2VtZW50JzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAndGV4dC1zaXplJyAgICAgICAgICAgIDogMTJcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHBhaW50OiB7XG4gICAgICAgICAgICAgICAgJ3RleHQtb3BhY2l0eScgIDogWydpbnRlcnBvbGF0ZScsIFsnbGluZWFyJ10sIFsnem9vbSddLCA1LCAwLCA3LCAxXSxcbiAgICAgICAgICAgICAgICAndGV4dC10cmFuc2xhdGUnOiBbMCwgMjBdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGh0dHBzOi8vZG9jcy5tYXBib3guY29tL21hcGJveC1nbC1qcy9zdHlsZS1zcGVjL1xuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8U3RyaW5nfSBtYXBib3hTdHlsZT0nbWFwYm94Oi8vc3R5bGVzL3RvYml1L2NrOTQ0eWVycTNocmoxaXA5MW8zNGZhN2QnXG4gICAgICAgICAqL1xuICAgICAgICBtYXBib3hTdHlsZTogJ21hcGJveDovL3N0eWxlcy90b2JpdS9jazk0NHllcnEzaHJqMWlwOTFvMzRmYTdkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZlcnNpb24gZm9yIHRoZSBuZW8tZGFyayB0aGVtZVxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8U3RyaW5nfSBtYXBib3hTdHlsZT0nbWFwYm94Oi8vc3R5bGVzL3RvYml1L2NrOTQ0eWVycTNocmoxaXA5MW8zNGZhN2QnXG4gICAgICAgICAqL1xuICAgICAgICBtYXBib3hTdHlsZURhcms6ICdtYXBib3g6Ly9zdHlsZXMvdG9iaXUvY2s4eWF4YWt4MTF6eDFpbGdzaHE0NTFjdicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWZXJzaW9uIGZvciB0aGUgbmVvLWxpZ2h0IHRoZW1lXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxTdHJpbmd9IG1hcGJveFN0eWxlPSdtYXBib3g6Ly9zdHlsZXMvdG9iaXUvY2s5NDU5cGxlMHFjNzFpbnZ1Z2R6NmJiZidcbiAgICAgICAgICovXG4gICAgICAgIG1hcGJveFN0eWxlTGlnaHQ6ICdtYXBib3g6Ly9zdHlsZXMvdG9iaXUvY2s5NDU5cGxlMHFjNzFpbnZ1Z2R6NmJiZicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX1cbiAgICAgICAgICovXG4gICAgICAgIHNvdXJjZXM6IFt7XG4gICAgICAgICAgICBpZCAgOiAnY292aWQxOScsXG4gICAgICAgICAgICB0eXBlOiAnZ2VvanNvbicsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgdHlwZSAgICA6ICdGZWF0dXJlQ29sbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgZmVhdHVyZXM6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGlkICA6ICdkZW0nLFxuICAgICAgICAgICAgdHlwZTogJ3Jhc3Rlci1kZW0nLFxuICAgICAgICAgICAgdXJsIDogJ21hcGJveDovL21hcGJveC50ZXJyYWluLXJnYidcbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb21wb25lbnQpO1xuXG5leHBvcnQge0NvbXBvbmVudCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZUNvbnRhaW5lciAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9zcmMvY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBDaGVja0JveCAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9mb3JtL2ZpZWxkL0NoZWNrQm94Lm1qcyc7XG5pbXBvcnQgQ29tcG9uZW50ICAgICAgICAgICBmcm9tICcuL0NvbXBvbmVudC5tanMnO1xuaW1wb3J0IENvbnRhaW5lckNvbnRyb2xsZXIgZnJvbSAnLi9Db250YWluZXJDb250cm9sbGVyLm1qcyc7XG5pbXBvcnQgUGFuZWwgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9zcmMvY29udGFpbmVyL1BhbmVsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkLnZpZXcubWFwYm94R2wuQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgQmFzZUNvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0NvdmlkLnZpZXcubWFwYm94R2wuQ29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdDb3ZpZC52aWV3Lm1hcGJveEdsLkNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjb3ZpZC1tYXBib3hnbC1jb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY292aWQtbWFwYm94Z2wtY29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb250cm9sbGVyLkNvbXBvbmVudH0gY29udHJvbGxlcj1Db250YWluZXJDb250cm9sbGVyXG4gICAgICAgICAqL1xuICAgICAgICBjb250cm9sbGVyOiBDb250YWluZXJDb250cm9sbGVyLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W119IGl0ZW1zXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgIG1vZHVsZSAgIDogQ29tcG9uZW50LFxuICAgICAgICAgICAgcmVmZXJlbmNlOiAnbWFwYm94Z2xtYXAnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgIDogUGFuZWwsXG4gICAgICAgICAgICBoZWlnaHQgICAgICA6IDE1MCxcbiAgICAgICAgICAgIGlnbm9yZUxheW91dDogdHJ1ZSxcblxuICAgICAgICAgICAgY29udGFpbmVyQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC42LFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTBweCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBoZWFkZXJzOiBbe1xuICAgICAgICAgICAgICAgIGRvY2s6ICd0b3AnLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uSGlkZU1hcENvbnRyb2xzQnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnWCdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ01hcCBDb250cm9scydcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0sXG5cbiAgICAgICAgICAgIGl0ZW1EZWZhdWx0czoge1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgICA6IENoZWNrQm94LFxuICAgICAgICAgICAgICAgIGZsZXggICAgICA6ICcwIDEgYXV0bycsXG4gICAgICAgICAgICAgICAgbGFiZWxXaWR0aDogMTAwXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICBjaGVja2VkICA6IHRydWUsXG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnRGV0YWlsIENpcmNsZXMnLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogJ29uRGV0YWlsQ2lyY2xlc0NoYW5nZSd9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZCAgOiB0cnVlLFxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ0hlYXRNYXAnLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogJ29uSGVhdE1hcENoYW5nZSd9LFxuICAgICAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpblRvcDogJzVweCd9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZCAgOiB0cnVlLFxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1RlcnJhaW4nLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogJ29uVGVycmFpbkNoYW5nZSd9LFxuICAgICAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpblRvcDogJzVweCd9XG4gICAgICAgICAgICB9XSxcblxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gICAgICAgOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIHJpZ2h0ICAgICAgICAgIDogJzEwcHgnLFxuICAgICAgICAgICAgICAgIHRvcCAgICAgICAgICAgIDogJzEwcHgnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsYXlvdXQ9e250eXBlOiAnZml0J31cbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDoge250eXBlOiAnZml0J30sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICBzdHlsZToge3Bvc2l0aW9uOiAncmVsYXRpdmUnLCBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJ30sXG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICBzdHlsZToge3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJ30sXG4gICAgICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7aGVpZ2h0OiAnMTAwJSd9LFxuICAgICAgICAgICAgICAgICAgICBjbjogW11cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGdldFZkb21Sb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52ZG9tLmNuWzBdLmNuWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZ2V0Vm5vZGVSb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52bm9kZS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF07XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb250YWluZXIpO1xuXG5leHBvcnQge0NvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29tcG9uZW50Q29udHJvbGxlciBmcm9tICcuLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlci9Db21wb25lbnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgQ292aWQudmlldy5tYXBib3hHbC5Db250YWluZXJDb250cm9sbGVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udHJvbGxlci5Db21wb25lbnRcbiAqL1xuY2xhc3MgQ29udGFpbmVyQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdDb3ZpZC52aWV3Lm1hcGJveEdsLkNvbnRhaW5lckNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkLnZpZXcubWFwYm94R2wuQ29udGFpbmVyQ29udHJvbGxlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdtYXBib3hnbC1jb250YWluZXItY29udHJvbGxlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdtYXBib3hnbC1jb250YWluZXItY29udHJvbGxlcidcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbGF5ZXJJZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2aXNpYmlsaXR5XG4gICAgICovXG4gICAgY2hhbmdlTGF5ZXJWaXNpYmlsaXR5KGxheWVySWQsIHZpc2liaWxpdHkpIHtcbiAgICAgICAgdGhpcy5nZXRSZWZlcmVuY2UoJ21hcGJveGdsbWFwJykuc2V0TGF5b3V0UHJvcGVydHkoe1xuICAgICAgICAgICAgbGF5ZXJJZDogbGF5ZXJJZCxcbiAgICAgICAgICAgIGtleSAgICA6ICd2aXNpYmlsaXR5JyxcbiAgICAgICAgICAgIHZhbHVlICA6IHZpc2liaWxpdHlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRGV0YWlsQ2lyY2xlc0NoYW5nZShkYXRhKSB7XG4gICAgICAgIGNvbnN0IHZpc2liaWxpdHkgPSBkYXRhLnZhbHVlID8gJ3Zpc2libGUnIDogJ25vbmUnO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlTGF5ZXJWaXNpYmlsaXR5KCdjb3ZpZDE5LWNpcmNsZScsICAgICAgdmlzaWJpbGl0eSk7XG4gICAgICAgIHRoaXMuY2hhbmdlTGF5ZXJWaXNpYmlsaXR5KCdjb3ZpZDE5LWNpcmNsZS10ZXh0JywgdmlzaWJpbGl0eSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uSGVhdE1hcENoYW5nZShkYXRhKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlTGF5ZXJWaXNpYmlsaXR5KCdjb3ZpZDE5LWhlYXQnLCBkYXRhLnZhbHVlID8gJ3Zpc2libGUnIDogJ25vbmUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25IaWRlTWFwQ29udHJvbHNCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbkhpZGVNYXBDb250cm9sc0J1dHRvbkNsaWNrJywgZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uVGVycmFpbkNoYW5nZShkYXRhKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlTGF5ZXJWaXNpYmlsaXR5KCdoaWxsc2hhZGluZycsIGRhdGEudmFsdWUgPyAndmlzaWJsZScgOiAnbm9uZScpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ29udGFpbmVyQ29udHJvbGxlcik7XG5cbmV4cG9ydCB7Q29udGFpbmVyQ29udHJvbGxlciBhcyBkZWZhdWx0fTsiXSwic291cmNlUm9vdCI6IiJ9