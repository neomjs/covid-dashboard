self["webpackChunk"](["vendors~chunks/apps-sharedcovid-app"],{

/***/ "./node_modules/neo.mjs/apps/sharedcovid/Util.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/apps/sharedcovid/Util.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * Static utility class
 * @class SharedCovid.Util
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
         * @member {String} className='SharedCovid.Util'
         * @protected
         */
        className: 'SharedCovid.Util'
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

/***/ "./node_modules/neo.mjs/apps/sharedcovid/app.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/apps/sharedcovid/app.mjs ***!
  \*******************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/MainContainer.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/view/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'apps/sharedcovid/',
    mainView: _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'SharedCovid'
});



/***/ }),

/***/ "./node_modules/neo.mjs/apps/sharedcovid/model/Country.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/sharedcovid/model/Country.mjs ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Country; });
/* harmony import */ var _src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class SharedCovid.model.Country
 * @extends Neo.data.Model
 */
class Country extends _src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        className: 'SharedCovid.model.Country',

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

/***/ "./node_modules/neo.mjs/apps/sharedcovid/model/HistoricalData.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/sharedcovid/model/HistoricalData.mjs ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HistoricalData; });
/* harmony import */ var _src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class SharedCovid.model.HistoricalData
 * @extends Neo.data.Model
 */
class HistoricalData extends _src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        className: 'SharedCovid.model.HistoricalData',

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

/***/ "./node_modules/neo.mjs/apps/sharedcovid/store/Countries.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/sharedcovid/store/Countries.mjs ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Countries; });
/* harmony import */ var _model_Country_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Country.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/model/Country.mjs");
/* harmony import */ var _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");



/**
 * @class SharedCovid.store.Countries
 * @extends Neo.data.Store
 */
class Countries extends _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        className: 'SharedCovid.store.Countries',

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

/***/ "./node_modules/neo.mjs/apps/sharedcovid/store/HistoricalData.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/sharedcovid/store/HistoricalData.mjs ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HistoricalData; });
/* harmony import */ var _model_HistoricalData_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/HistoricalData.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/model/HistoricalData.mjs");
/* harmony import */ var _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");



/**
 * @class SharedCovid.store.HistoricalData
 * @extends Neo.data.Store
 */
class HistoricalData extends _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        className: 'SharedCovid.store.HistoricalData',

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

/***/ "./node_modules/neo.mjs/apps/sharedcovid/view/AttributionComponent.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/sharedcovid/view/AttributionComponent.mjs ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AttributionComponent; });
/* harmony import */ var _src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class SharedCovid.view.AttributionComponent
 * @extends Neo.component.Base
 */
class AttributionComponent extends _src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='SharedCovid.view.AttributionComponent'
         * @protected
         */
        className: 'SharedCovid.view.AttributionComponent',
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

/***/ "./node_modules/neo.mjs/apps/sharedcovid/view/FooterContainer.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/sharedcovid/view/FooterContainer.mjs ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterContainer; });
/* harmony import */ var _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");


/**
 * @class SharedCovid.view.FooterContainer
 * @extends Neo.container.Base
 */
class FooterContainer extends _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='SharedCovid.view.FooterContainer'
         * @protected
         */
        className: 'SharedCovid.view.FooterContainer',
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
            html : 'Data provided by <a target="_blank" href="https://github.com/disease-sh/API">disease-sh/API</a>.'
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

/***/ "./node_modules/neo.mjs/apps/sharedcovid/view/GalleryContainer.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/sharedcovid/view/GalleryContainer.mjs ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GalleryContainer; });
/* harmony import */ var _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _src_component_BoxLabel_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/component/BoxLabel.mjs */ "./node_modules/neo.mjs/src/component/BoxLabel.mjs");
/* harmony import */ var _country_Gallery_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country/Gallery.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/view/country/Gallery.mjs");
/* harmony import */ var _GalleryContainerController_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GalleryContainerController.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/view/GalleryContainerController.mjs");
/* harmony import */ var _src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/container/Panel.mjs */ "./node_modules/neo.mjs/src/container/Panel.mjs");
/* harmony import */ var _src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/form/field/Range.mjs */ "./node_modules/neo.mjs/src/form/field/Range.mjs");







/**
 * @class SharedCovid.view.GalleryContainer
 * @extends Neo.container.Base
 */
class GalleryContainer extends _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='SharedCovid.view.GalleryContainer'
         * @protected
         */
        className: 'SharedCovid.view.GalleryContainer',
        /**
         * @member {Boolean} autoMount=true
         */
        autoMount: true,
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
                }, '->', {
                    ntype  : 'button',
                    handler: 'onWindowGalleryMaximizeButtonClick',
                    iconCls: 'far fa-window-maximize'
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
                module: _src_component_BoxLabel_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
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

/***/ "./node_modules/neo.mjs/apps/sharedcovid/view/GalleryContainerController.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/sharedcovid/view/GalleryContainerController.mjs ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GalleryContainerController; });
/* harmony import */ var _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");


/**
 * @class SharedCovid.view.GalleryContainerController
 * @extends Neo.controller.Component
 */
class GalleryContainerController extends _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='SharedCovid.view.GalleryContainerController'
         * @protected
         */
        className: 'SharedCovid.view.GalleryContainerController',
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

/***/ "./node_modules/neo.mjs/apps/sharedcovid/view/HeaderContainer.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/sharedcovid/view/HeaderContainer.mjs ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderContainer; });
/* harmony import */ var _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _store_Countries_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/Countries.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/store/Countries.mjs");
/* harmony import */ var _src_form_field_Select_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/form/field/Select.mjs */ "./node_modules/neo.mjs/src/form/field/Select.mjs");




/**
 * @class SharedCovid.view.HeaderContainer
 * @extends Neo.container.Base
 */
class HeaderContainer extends _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='SharedCovid.view.HeaderContainer'
         * @protected
         */
        className: 'SharedCovid.view.HeaderContainer',
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

/***/ "./node_modules/neo.mjs/apps/sharedcovid/view/HelixContainer.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/sharedcovid/view/HelixContainer.mjs ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HelixContainer; });
/* harmony import */ var _src_component_BoxLabel_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/component/BoxLabel.mjs */ "./node_modules/neo.mjs/src/component/BoxLabel.mjs");
/* harmony import */ var _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _country_Helix_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country/Helix.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/view/country/Helix.mjs");
/* harmony import */ var _HelixContainerController_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HelixContainerController.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/view/HelixContainerController.mjs");
/* harmony import */ var _src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/container/Panel.mjs */ "./node_modules/neo.mjs/src/container/Panel.mjs");
/* harmony import */ var _src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/form/field/Range.mjs */ "./node_modules/neo.mjs/src/form/field/Range.mjs");







/**
 * @class SharedCovid.view.HelixContainer
 * @extends Neo.container.Base
 */
class HelixContainer extends _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='SharedCovid.view.HelixContainer'
         * @protected
         */
        className: 'SharedCovid.view.HelixContainer',
        /**
         * @member {Boolean} autoMount=true
         */
        autoMount: true,
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
                }, '->', {
                    ntype  : 'button',
                    handler: 'onWindowHelixMaximizeButtonClick',
                    iconCls: 'far fa-window-maximize'
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

/***/ "./node_modules/neo.mjs/apps/sharedcovid/view/HelixContainerController.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/sharedcovid/view/HelixContainerController.mjs ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HelixContainerController; });
/* harmony import */ var _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");


/**
 * @class SharedCovid.view.HelixContainerController
 * @extends Neo.controller.Component
 */
class HelixContainerController extends _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='SharedCovid.view.HelixContainerController'
         * @protected
         */
        className: 'SharedCovid.view.HelixContainerController',
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

/***/ "./node_modules/neo.mjs/apps/sharedcovid/view/MainContainer.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/sharedcovid/view/MainContainer.mjs ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _AttributionComponent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AttributionComponent.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/view/AttributionComponent.mjs");
/* harmony import */ var _FooterContainer_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterContainer.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/view/FooterContainer.mjs");
/* harmony import */ var _GalleryContainer_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GalleryContainer.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/view/GalleryContainer.mjs");
/* harmony import */ var _HeaderContainer_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderContainer.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/view/HeaderContainer.mjs");
/* harmony import */ var _HelixContainer_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HelixContainer.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/view/HelixContainer.mjs");
/* harmony import */ var _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MainContainerController.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/view/MainContainerController.mjs");
/* harmony import */ var _mapboxGl_Container_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapboxGl/Container.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/view/mapboxGl/Container.mjs");
/* harmony import */ var _src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/tab/Container.mjs */ "./node_modules/neo.mjs/src/tab/Container.mjs");
/* harmony import */ var _TableContainer_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TableContainer.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/view/TableContainer.mjs");
/* harmony import */ var _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");
/* harmony import */ var _WorldMapContainer_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./WorldMapContainer.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/view/WorldMapContainer.mjs");












/**
 * @class SharedCovid.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_9__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='SharedCovid.view.MainContainer'
         * @protected
         */
        className: 'SharedCovid.view.MainContainer',
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
                reference      : 'mapbox-gl-container',
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
                reference      : 'gallery-container',
                tabButtonConfig: {
                    iconCls: 'fa fa-images',
                    route  : 'mainview=gallery',
                    text   : 'Gallery'
                }
            }, {
                module         : _HelixContainer_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
                reference      : 'helix-container',
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

/***/ "./node_modules/neo.mjs/apps/sharedcovid/view/MainContainerController.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/sharedcovid/view/MainContainerController.mjs ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainerController; });
/* harmony import */ var _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");
/* harmony import */ var _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _Util_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/Util.mjs");




/**
 * @class SharedCovid.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='SharedCovid.view.MainContainerController'
         * @protected
         */
        className: 'SharedCovid.view.MainContainerController',
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
         * @member {String} apiUrl='https://disease.sh/countries'
         */
        apiUrl: 'https://disease.sh/v2/countries',
        /**
         * @member {String[]} connectedApps=[]
         */
        connectedApps: [],
        /**
         * @member {Object|null} countryRecord=null
         */
        countryRecord: null,
        /**
         * @member {Object[]|null} data=null
         */
        data: null,
        /**
         * Internal flag to prevent non main windows from triggering their initial route as a change
         * @member {Boolean} firstHashChange=true
         */
        firstHashChange: true,
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
        worldMapHasData: false,
        /**
         * @member {Object} windowChart=null
         */
        windowChart: null,
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        const me = this;

        me.loadData();
        me.loadSummaryData();

        me.view.on({
            connect   : me.onAppConnect,
            disconnect: me.onAppDisconnect,
            mounted   : me.onMainViewMounted,
            scope     : me
        });

        setTimeout(() => {
            Object.assign(me, {
                galleryView: me.getReference('gallery'),
                helixView  : me.getReference('helix'),
                mapBoxView : me.getReference('mapboxglmap'),
                tableView  : me.getReference('table')
            });
        }, 1);
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
     * @param {String} containerReference
     * @param {String} url
     * @param {String} windowName
     */
    createPopupWindow(containerReference, url, windowName) {
        let me = this;

        Neo.Main.getWindowData().then(winData => {
            Neo.main.DomAccess.getBoundingClientRect({
                id: [me.getReference(containerReference).id]
            }).then(data => {
                let {height, left, top, width} = data[0];

                height -= 50; // popup header in Chrome
                left   += winData.screenLeft;
                top    += (winData.outerHeight - winData.innerHeight + winData.screenTop);

                Neo.Main.windowOpen({
                    url           : `../${url}/index.html`,
                    windowFeatures: `height=${height},left=${left},top=${top},width=${width}`,
                    windowName    : windowName
                });
            });
        });
    }

    /**
     *
     * @param {String} [appName]
     * @returns {Neo.component.Base}
     */
    getMainView(appName) {
        if (!appName || appName === 'Covid') {
            return this.view;
        }

        return Neo.apps[appName].mainViewInstance;
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
     * @param {String} name
     */
    onAppConnect(name) {
        console.log('onAppConnect', name);

        let me = this,
            parentView, view;

        switch (name) {
            case 'SharedCovidChart':
                view = me.getReference('controls-panel');
                parentView = Neo.getComponent(view.parentId);
                parentView.storeReferences();
                break;
            case 'SharedCovidGallery':
                view = me.getReference('gallery-container');
                _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(me.mainTabs, 'gallery');
                me.activeMainTabIndex--;
                Neo.Main.editRoute({mainview: me.mainTabs[me.activeMainTabIndex]});
                break;
            case 'SharedCovidHelix':
                view = me.getReference('helix-container');
                _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(me.mainTabs, 'helix');
                me.activeMainTabIndex--;
                Neo.Main.editRoute({mainview: me.mainTabs[me.activeMainTabIndex]});
                break;
            case 'SharedCovidMap':
                view = me.getReference('mapbox-gl-container');
                _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(me.mainTabs, 'mapboxglmap');
                me.activeMainTabIndex--;
                Neo.Main.editRoute({mainview: me.mainTabs[me.activeMainTabIndex]});
                break;
        }

        if (view) {
            _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(me.connectedApps, name);

            parentView = parentView ? parentView : view.isTab ? view.up('tab-container') : Neo.getComponent(view.parentId);
            parentView.remove(view, false);

            Neo.apps[name].on('render', () => {
                setTimeout(() => {
                    me.getMainView(name).add(view);
                }, 100);
            });

        }
    }

    /**
     *
     * @param {String} name
     */
    onAppDisconnect(name) {
        let me         = this,
            parentView = me.getMainView(name),
            view       = parentView.items[0],
            index;

        console.log('onAppDisconnect', name);

        switch (name) {
            case 'SharedCovid':
                Neo.Main.windowClose({
                    names: me.connectedApps,
                });
                break;
            case 'SharedCovidChart':
            case 'SharedCovidGallery':
            case 'SharedCovidHelix':
            case 'SharedCovidMap':
                view = parentView.items[0];
                break;
        }

        if (view) {
            _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(me.connectedApps, name);

            parentView.remove(view, false);

            switch (name) {
                case 'SharedCovidChart':
                    me.getReference('table-container').add(view);
                    break;
                case 'SharedCovidGallery':
                    index = me.connectedApps.includes('SharedCovidMap') ? 2 : 3;
                    me.getReference('tab-container').insert(index, view);
                    me.mainTabs.splice(index, 0, 'gallery');
                    break;
                case 'SharedCovidHelix':
                    index = 4;
                    index = me.connectedApps.includes('SharedCovidGallery') ? index - 1 : index;
                    index = me.connectedApps.includes('SharedCovidMap')     ? index - 1 : index;
                    me.getReference('tab-container').insert(index, view);
                    me.mainTabs.splice(index, 0, 'helix');
                    break;
                case 'SharedCovidMap':
                    me.getReference('tab-container').insert(1, view);
                    me.mainTabs.splice(1, 0, 'mapboxglmap');
                    break;
            }
        }
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
    onCountryFieldSelect(data) {console.log('onCountryFieldSelect', data);
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
            delaySelection    = !me.data ? 1000 : tabContainer.activeIndex !== activeIndex ? 100 : 0,
            id, selectionModel;

        if (me.firstHashChange || value.appName) {console.log('onHashChange', value);
            selectionModel = activeView.selectionModel;

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

            if (activeView.ntype === 'covid-world-map' && me.data) {
                if (!me.worldMapHasData) {
                    activeView.loadData(me.data);
                    me.worldMapHasData = true;
                }
            }

            // todo: instead of a timeout this should add a store load listener (single: true)
            setTimeout(() => {
                if (me.data) {
                    if (country) {
                        countryField.value = country;
                    } else {
                        value.country = 'all';
                    }

                    if (activeView.ntype === 'gallery' || me.connectedApps.includes('SharedCovidGallery')) {
                        if (country && !me.galleryView.selectionModel.isSelected(country)) {
                            me.galleryView.selectionModel.select(country, false);
                        }
                    }

                    if (activeView.ntype === 'helix' || me.connectedApps.includes('SharedCovidHelix')) {
                        if (country && !me.helixView.selectionModel.isSelected(country)) {
                            me.helixView.selectionModel.select(country, false);
                            me.helixView.onKeyDownSpace(null);
                        }
                    }

                    if ((activeView.ntype === 'mapboxgl' || me.connectedApps.includes('SharedCovidMap')) && me.data) {
                        if (!me.mapboxglMapHasData) {
                            me.mapBoxView.data = me.data;
                            me.mapboxglMapHasData = true;
                        }

                        if (me.countryRecord) {
                            MainContainerController.selectMapboxGlCountry(me.mapBoxView, me.tableView.store.get(country));
                        }

                        me.mapBoxView.autoResize();
                    }

                    if (activeView.ntype === 'table-container') {
                        id = selectionModel.getRowId(activeView.store.indexOf(country));

                        me.getReference('table-container').fire('countrySelect', {record: activeView.store.get(country)});

                        if (country && !selectionModel.isSelected(id)) {
                            selectionModel.select(id);
                            Neo.main.DomAccess.scrollToTableRow({id: id});
                        }
                    }
                }
            }, delaySelection);
        }

        me.firstHashChange = false;
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
            vdom     = logo.vdom,
            view     = me.view,
            buttonText, cls, href, iconCls, mapView, mapViewStyle, theme;

        if (me.connectedApps.includes('SharedCovidMap')) {
            mapView = me.getMainView('SharedCovidMap').items[0].items[0];
        } else {
            mapView = me.getReference('mapboxglmap');
        }

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
            [view.appName, ...me.connectedApps].forEach(appName => {
                view = me.getMainView(appName);

                cls = [...view.cls];

                view.cls.forEach(item => {
                    if (item.includes('neo-theme')) {
                        _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, item);
                    }
                });

                _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, theme);
                view.cls = cls;
            });

            button.set({
                iconCls: iconCls,
                text   : buttonText
            });
        } else {
            [view.appName, ...me.connectedApps].forEach(appName => {
                Neo.main.addon.Stylesheet.swapStyleSheet({
                    appName: appName,
                    href   : href,
                    id     : 'neo-theme'
                });
            });
        }

        button.set({
            iconCls: iconCls,
            text   : buttonText
        });

        mapView.mapboxStyle = mapViewStyle;
    }

    /**
     * @param {Object} data
     */
    onWindowChartMaximizeButtonClick(data) {
        this.createPopupWindow('controls-panel', 'sharedcovidchart', 'SharedCovidChart');
    }

    /**
     * @param {Object} data
     */
    onWindowGalleryMaximizeButtonClick(data) {
        this.createPopupWindow('gallery-container', 'sharedcovidgallery', 'SharedCovidGallery');
    }

    /**
     * @param {Object} data
     */
    onWindowHelixMaximizeButtonClick(data) {
        this.createPopupWindow('helix-container', 'sharedcovidhelix', 'SharedCovidHelix');
    }

    /**
     * @param {Object} data
     */
    onWindowMapMaximizeButtonClick(data) {
        this.createPopupWindow('mapbox-gl-container', 'sharedcovidmap', 'SharedCovidMap');
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

/***/ "./node_modules/neo.mjs/apps/sharedcovid/view/TableContainer.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/sharedcovid/view/TableContainer.mjs ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TableContainer; });
/* harmony import */ var _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/form/field/CheckBox.mjs */ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs");
/* harmony import */ var _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _country_HistoricalDataTable_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country/HistoricalDataTable.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/view/country/HistoricalDataTable.mjs");
/* harmony import */ var _country_LineChartComponent_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./country/LineChartComponent.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/view/country/LineChartComponent.mjs");
/* harmony import */ var _src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/container/Panel.mjs */ "./node_modules/neo.mjs/src/container/Panel.mjs");
/* harmony import */ var _src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/tab/Container.mjs */ "./node_modules/neo.mjs/src/tab/Container.mjs");
/* harmony import */ var _country_Table_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./country/Table.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/view/country/Table.mjs");
/* harmony import */ var _TableContainerController_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TableContainerController.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/view/TableContainerController.mjs");









/**
 * @class SharedCovid.view.TableContainer
 * @extends Neo.container.Base
 */
class TableContainer extends _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='SharedCovid.view.TableContainer'
         * @protected
         */
        className: 'SharedCovid.view.TableContainer',
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
                    height : 24,
                    text   : '520px'
                }, {
                    ntype  : 'button',
                    handler: 'on800pxButtonClick',
                    height : 24,
                    text   : '800px'
                }, {
                    ntype  : 'button',
                    handler: 'onWindowChartMaximizeButtonClick',
                    iconCls: 'far fa-window-maximize'
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

    /**
     *
     */
    storeReferences() {
        this.controller.storeReferences();
    }
}

Neo.applyClassConfig(TableContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/sharedcovid/view/TableContainerController.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/sharedcovid/view/TableContainerController.mjs ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TableContainerController; });
/* harmony import */ var _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");
/* harmony import */ var _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class SharedCovid.view.TableContainerController
 * @extends Neo.controller.Component
 */
class TableContainerController extends _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='SharedCovid.view.TableContainerController'
         * @protected
         */
        className: 'SharedCovid.view.TableContainerController',
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
            appName   : this.view.appName,
            id        : chartId,
            properties: {
                'series.values.0.dataFields.valueY' : value ? 'dailyActive'    : 'active',
                'series.values.1.dataFields.valueY' : value ? 'dailyCases'     : 'cases',
                'series.values.2.dataFields.valueY' : value ? 'dailyDeaths'    : 'deaths',
                'series.values.3.dataFields.valueY' : value ? 'dailyRecovered' : 'recovered'
            }
        });

        Neo.main.addon.AmCharts.callMethod({
            appName: logCheckbox.appName,
            id     : chartId,
            path   : 'invalidateData'
        });
    }

    /**
     * {Object} data
     */
    onLogarithmicScaleChange(data) {
        const lineChart = this.getReference('line-chart');

        Neo.main.addon.AmCharts.setProperty({
            appName: lineChart.appName,
            id     : lineChart.id,
            path   : 'yAxes.values.0.logarithmic',
            value  : data.value
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
     *
     */
    storeReferences() {
        this.getReference('line-chart');
        this.getReference('logarithmic-scale-checkbox');
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

/***/ "./node_modules/neo.mjs/apps/sharedcovid/view/WorldMapComponent.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/sharedcovid/view/WorldMapComponent.mjs ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorldMapComponent; });
/* harmony import */ var _src_component_wrapper_AmChart_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/component/wrapper/AmChart.mjs */ "./node_modules/neo.mjs/src/component/wrapper/AmChart.mjs");


/**
 * @class SharedCovid.view.WorldMapComponent
 * @extends Neo.component.wrapper.AmChart
 */
class WorldMapComponent extends _src_component_wrapper_AmChart_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='SharedCovid.view.WorldMapComponent'
         * @protected
         */
        className: 'SharedCovid.view.WorldMapComponent',
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

/***/ "./node_modules/neo.mjs/apps/sharedcovid/view/WorldMapContainer.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/sharedcovid/view/WorldMapContainer.mjs ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorldMapContainer; });
/* harmony import */ var _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/form/field/Number.mjs */ "./node_modules/neo.mjs/src/form/field/Number.mjs");
/* harmony import */ var _src_container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/container/Toolbar.mjs */ "./node_modules/neo.mjs/src/container/Toolbar.mjs");
/* harmony import */ var _WorldMapComponent_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WorldMapComponent.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/view/WorldMapComponent.mjs");
/* harmony import */ var _WorldMapContainerController_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WorldMapContainerController.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/view/WorldMapContainerController.mjs");






/**
 * @class SharedCovid.view.WorldMapContainer
 * @extends Neo.container.Base
 */
class WorldMapContainer extends _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='SharedCovid.view.WorldMapContainer'
         * @protected
         */
        className: 'SharedCovid.view.WorldMapContainer',
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

/***/ "./node_modules/neo.mjs/apps/sharedcovid/view/WorldMapContainerController.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/sharedcovid/view/WorldMapContainerController.mjs ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorldMapContainerController; });
/* harmony import */ var _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");


/**
 * @class SharedCovid.view.WorldMapContainerController
 * @extends Neo.controller.Component
 */
class WorldMapContainerController extends _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='SharedCovid.view.WorldMapContainerController'
         * @protected
         */
        className: 'SharedCovid.view.WorldMapContainerController',
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

/***/ "./node_modules/neo.mjs/apps/sharedcovid/view/country/Gallery.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/sharedcovid/view/country/Gallery.mjs ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountryGallery; });
/* harmony import */ var _store_Countries_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/Countries.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/store/Countries.mjs");
/* harmony import */ var _src_component_Gallery_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/component/Gallery.mjs */ "./node_modules/neo.mjs/src/component/Gallery.mjs");
/* harmony import */ var _Util_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/Util.mjs");




/**
 * @class SharedCovid.view.country.Gallery
 * @extends Neo.component.Gallery
 */
class CountryGallery extends _src_component_Gallery_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='SharedCovid.view.country.Gallery'
         * @protected
         */
        className: 'SharedCovid.view.country.Gallery',
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
        }, 200);
    }
}

Neo.applyClassConfig(CountryGallery);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/sharedcovid/view/country/Helix.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/sharedcovid/view/country/Helix.mjs ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountryHelix; });
/* harmony import */ var _store_Countries_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/Countries.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/store/Countries.mjs");
/* harmony import */ var _src_component_Helix_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/component/Helix.mjs */ "./node_modules/neo.mjs/src/component/Helix.mjs");
/* harmony import */ var _Util_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/Util.mjs");




/**
 * @class SharedCovid.view.country.Helix
 * @extends Neo.component.Helix
 */
class CountryHelix extends _src_component_Helix_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='SharedCovid.view.country.Helix'
         * @protected
         */
        className: 'SharedCovid.view.country.Helix',
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

/***/ "./node_modules/neo.mjs/apps/sharedcovid/view/country/HistoricalDataTable.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/sharedcovid/view/country/HistoricalDataTable.mjs ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HistoricalDataTable; });
/* harmony import */ var _src_table_Container_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/table/Container.mjs */ "./node_modules/neo.mjs/src/table/Container.mjs");
/* harmony import */ var _store_HistoricalData_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/HistoricalData.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/store/HistoricalData.mjs");
/* harmony import */ var _Util_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/Util.mjs");




/**
 * @class SharedCovid.view.country.HistoricalDataTable
 * @extends Neo.table.Container
 */
class HistoricalDataTable extends _src_table_Container_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='SharedCovid.view.country.HistoricalDataTable'
         * @protected
         */
        className: 'SharedCovid.view.country.HistoricalDataTable',
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

/***/ "./node_modules/neo.mjs/apps/sharedcovid/view/country/LineChartComponent.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/sharedcovid/view/country/LineChartComponent.mjs ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LineChartComponent; });
/* harmony import */ var _src_component_wrapper_AmChart_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/component/wrapper/AmChart.mjs */ "./node_modules/neo.mjs/src/component/wrapper/AmChart.mjs");


/**
 * @class SharedCovid.view.country.LineChartComponent
 * @extends Neo.component.wrapper.AmChart
 */
class LineChartComponent extends _src_component_wrapper_AmChart_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='SharedCovid.view.country.LineChartComponent'
         * @protected
         */
        className: 'SharedCovid.view.country.LineChartComponent',
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

/***/ "./node_modules/neo.mjs/apps/sharedcovid/view/country/Table.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/sharedcovid/view/country/Table.mjs ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Table; });
/* harmony import */ var _src_table_Container_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/table/Container.mjs */ "./node_modules/neo.mjs/src/table/Container.mjs");
/* harmony import */ var _store_Countries_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/Countries.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/store/Countries.mjs");
/* harmony import */ var _Util_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/Util.mjs");




/**
 * @class SharedCovid.view.country.Table
 * @extends Neo.table.Container
 */
class Table extends _src_table_Container_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='SharedCovid.view.country.Table'
         * @protected
         */
        className: 'SharedCovid.view.country.Table',
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

            renderer: function(data) {
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

/***/ "./node_modules/neo.mjs/apps/sharedcovid/view/mapboxGl/Component.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/sharedcovid/view/mapboxGl/Component.mjs ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
/* harmony import */ var _src_component_wrapper_MapboxGL_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/component/wrapper/MapboxGL.mjs */ "./node_modules/neo.mjs/src/component/wrapper/MapboxGL.mjs");


/**
 * @class SharedCovid.view.mapboxGl.Component
 * @extends Neo.component.wrapper.MapboxGL
 */
class Component extends _src_component_wrapper_MapboxGL_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='SharedCovid.view.mapboxGl.Component'
         * @protected
         */
        className: 'SharedCovid.view.mapboxGl.Component',
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

/***/ "./node_modules/neo.mjs/apps/sharedcovid/view/mapboxGl/Container.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/sharedcovid/view/mapboxGl/Container.mjs ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
/* harmony import */ var _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/form/field/CheckBox.mjs */ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs");
/* harmony import */ var _Component_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/view/mapboxGl/Component.mjs");
/* harmony import */ var _ContainerController_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContainerController.mjs */ "./node_modules/neo.mjs/apps/sharedcovid/view/mapboxGl/ContainerController.mjs");
/* harmony import */ var _src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/container/Panel.mjs */ "./node_modules/neo.mjs/src/container/Panel.mjs");






/**
 * @class SharedCovid.view.mapboxGl.Container
 * @extends Neo.container.Base
 */
class Container extends _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='SharedCovid.view.mapboxGl.Container'
         * @protected
         */
        className: 'SharedCovid.view.mapboxGl.Container',
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
                    handler: 'onWindowMapMaximizeButtonClick',
                    iconCls: 'far fa-window-maximize'
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

/***/ "./node_modules/neo.mjs/apps/sharedcovid/view/mapboxGl/ContainerController.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/sharedcovid/view/mapboxGl/ContainerController.mjs ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContainerController; });
/* harmony import */ var _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");


/**
 * @class SharedCovid.view.mapboxGl.ContainerController
 * @extends Neo.controller.Component
 */
class ContainerController extends _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='SharedCovid.view.mapboxGl.ContainerController'
         * @protected
         */
        className: 'SharedCovid.view.mapboxGl.ContainerController',
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
    onTerrainChange(data) {
        this.changeLayerVisibility('hillshading', data.value ? 'visible' : 'none');
    }
}

Neo.applyClassConfig(ContainerController);



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3NoYXJlZGNvdmlkL1V0aWwubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWQvYXBwLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3NoYXJlZGNvdmlkL21vZGVsL0NvdW50cnkubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWQvbW9kZWwvSGlzdG9yaWNhbERhdGEubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWQvc3RvcmUvQ291bnRyaWVzLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3NoYXJlZGNvdmlkL3N0b3JlL0hpc3RvcmljYWxEYXRhLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3NoYXJlZGNvdmlkL3ZpZXcvQXR0cmlidXRpb25Db21wb25lbnQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWQvdmlldy9Gb290ZXJDb250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWQvdmlldy9HYWxsZXJ5Q29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3NoYXJlZGNvdmlkL3ZpZXcvR2FsbGVyeUNvbnRhaW5lckNvbnRyb2xsZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWQvdmlldy9IZWFkZXJDb250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWQvdmlldy9IZWxpeENvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9zaGFyZWRjb3ZpZC92aWV3L0hlbGl4Q29udGFpbmVyQ29udHJvbGxlci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9zaGFyZWRjb3ZpZC92aWV3L01haW5Db250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWQvdmlldy9NYWluQ29udGFpbmVyQ29udHJvbGxlci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9zaGFyZWRjb3ZpZC92aWV3L1RhYmxlQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3NoYXJlZGNvdmlkL3ZpZXcvVGFibGVDb250YWluZXJDb250cm9sbGVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3NoYXJlZGNvdmlkL3ZpZXcvV29ybGRNYXBDb21wb25lbnQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWQvdmlldy9Xb3JsZE1hcENvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9zaGFyZWRjb3ZpZC92aWV3L1dvcmxkTWFwQ29udGFpbmVyQ29udHJvbGxlci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9zaGFyZWRjb3ZpZC92aWV3L2NvdW50cnkvR2FsbGVyeS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9zaGFyZWRjb3ZpZC92aWV3L2NvdW50cnkvSGVsaXgubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWQvdmlldy9jb3VudHJ5L0hpc3RvcmljYWxEYXRhVGFibGUubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWQvdmlldy9jb3VudHJ5L0xpbmVDaGFydENvbXBvbmVudC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9zaGFyZWRjb3ZpZC92aWV3L2NvdW50cnkvVGFibGUubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWQvdmlldy9tYXBib3hHbC9Db21wb25lbnQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWQvdmlldy9tYXBib3hHbC9Db250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWQvdmlldy9tYXBib3hHbC9Db250YWluZXJDb250cm9sbGVyLm1qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUEyQzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwREFBSTtBQUN2Qiw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnR0FBZ0csT0FBTztBQUN2RyxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FB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QUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoidmVuZG9yc35jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZSBmcm9tICcuLi8uLi9zcmMvY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogU3RhdGljIHV0aWxpdHkgY2xhc3NcbiAqIEBjbGFzcyBTaGFyZWRDb3ZpZC5VdGlsXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIFV0aWwgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHJlZ2V4IHRvIHJlcGxhY2UgYmxhbmsgY2hhcnNcbiAgICAgICAgICogQG1lbWJlciB7UmVnRXhwfSBmbGFnUmVnRXg9LyAvZ2lcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBmbGFnUmVnRXg6IC8gL2dpLFxuICAgICAgICAvKipcbiAgICAgICAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTnVtYmVyL3RvTG9jYWxlU3RyaW5nXG4gICAgICAgICAqIENoYW5nZSB0aGlzIGNvbmZpZyB0byBlbmZvcmNlIGEgY291bnR5IHNwZWNpZmljIGZvcm1hdHRpbmcgKGUuZy4gJ2RlLURFJylcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBsb2NhbGVzPSdkZWZhdWx0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIGxvY2FsZXM6ICdkZWZhdWx0J1xuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nU2hhcmVkQ292aWQuVXRpbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnU2hhcmVkQ292aWQuVXRpbCdcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogVXNlZCBmb3IgdGhlIGNhc2VzUGVyT25lTWlsbGlvbiBjb2x1bW4gdG8gc2hvdyAlIG9mIHBvcHVsYXRpb25cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLnZhbHVlXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgZm9ybWF0SW5mZWN0ZWQoZGF0YSkge1xuICAgICAgICBsZXQgdmFsdWUgPSBkYXRhLnZhbHVlO1xuXG4gICAgICAgIGlmICghTmVvLmlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlIHx8ICdOL0EnO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlIC8gMTAwKTtcbiAgICAgICAgdmFsdWUgLz0gMTAwO1xuXG4gICAgICAgIHZhbHVlID0gdmFsdWUudG9GaXhlZCgyKSArICcgJSc7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvTG9jYWxlU3RyaW5nKFV0aWwubG9jYWxlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgd2lsbCBnZXQgdXNlZCBhcyBhIGdyaWQgcmVuZGVyZXIsIHNvIHRoZSAybmQgcGFyYW0gaXMgYW4gb3ZlcmxvYWQgKHdvdWxkIGJlIHtPYmplY3R9IHJlY29yZClcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLnZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtjb2xvcl1cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyBmb3JtYXROdW1iZXIoZGF0YSwgY29sb3IpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gZGF0YS52YWx1ZTtcblxuICAgICAgICBpZiAoIU5lby5pc051bWJlcih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSB8fCAnTi9BJztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlID0gdmFsdWUudG9Mb2NhbGVTdHJpbmcoVXRpbC5sb2NhbGVzKTtcblxuICAgICAgICByZXR1cm4gdHlwZW9mIGNvbG9yICE9PSAnc3RyaW5nJyA/IHZhbHVlIDogYDxzcGFuIHN0eWxlPVwiY29sb3I6JHtjb2xvcn07XCI+JHt2YWx1ZX08L3NwYW4+YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge1N0cmluZ30gdXJsXG4gICAgICovXG4gICAgc3RhdGljIGdldENvdW50cnlGbGFnVXJsKG5hbWUpIHtcbiAgICAgICAgY29uc3QgbWFwID0ge1xuICAgICAgICAgICAgJ2Jvc25pYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnYm9zbmlhLWFuZC1oZXJ6ZWdvdmluYScsXG4gICAgICAgICAgICAnY2Fiby12ZXJkZScgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdjYXBlLXZlcmRlJyxcbiAgICAgICAgICAgICdjYXInICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2NlbnRyYWwtYWZyaWNhbi1yZXB1YmxpYycsXG4gICAgICAgICAgICAnY2FyaWJiZWFuLW5ldGhlcmxhbmRzJyAgICAgICAgICAgICAgICA6ICduZXRoZXJsYW5kcycsXG4gICAgICAgICAgICAnY2hhbm5lbC1pc2xhbmRzJyAgICAgICAgICAgICAgICAgICAgICA6ICdqZXJzZXknLFxuICAgICAgICAgICAgJ2PDtHRlLWRcXCdpdm9pcmUnICAgICAgICAgICAgICAgICAgICAgICA6ICdpdm9yeS1jb2FzdCcsXG4gICAgICAgICAgICAnY29uZ28nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdyZXB1YmxpYy1vZi10aGUtY29uZ28nLFxuICAgICAgICAgICAgJ2NvbmdvLC10aGUtZGVtb2NyYXRpYy1yZXB1YmxpYy1vZi10aGUnOiAnZGVtb2NyYXRpYy1yZXB1YmxpYy1vZi1jb25nbycsXG4gICAgICAgICAgICAnY3VyYcOnYW8nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnY3VyYWNhbycsXG4gICAgICAgICAgICAnY3plY2hpYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdjemVjaC1yZXB1YmxpYycsXG4gICAgICAgICAgICAnZGlhbW9uZC1wcmluY2VzcycgICAgICAgICAgICAgICAgICAgICA6ICdqYXBhbicsIC8vIGNydWlzZSBzaGlwXG4gICAgICAgICAgICAnZHJjJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdkZW1vY3JhdGljLXJlcHVibGljLW9mLWNvbmdvJyxcbiAgICAgICAgICAgICdlbC1zYWx2YWRvcicgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3NhbHZhZG9yJyxcbiAgICAgICAgICAgICdlc3dhdGluaScgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3N3YXppbGFuZCcsXG4gICAgICAgICAgICAnZmFlcm9lLWlzbGFuZHMnICAgICAgICAgICAgICAgICAgICAgICA6ICdmYXJvZS1pc2xhbmRzJyxcbiAgICAgICAgICAgICdmYWxrbGFuZC1pc2xhbmRzLShtYWx2aW5hcyknICAgICAgICAgIDogJ2ZhbGtsYW5kLWlzbGFuZHMnLFxuICAgICAgICAgICAgJ2ZyZW5jaC1ndWlhbmEnICAgICAgICAgICAgICAgICAgICAgICAgOiAnZnJhbmNlJywgLy8gP1xuICAgICAgICAgICAgJ2d1YWRlbG91cGUnICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnZnJhbmNlJywgLy8gP1xuICAgICAgICAgICAgJ2hvbHktc2VlLSh2YXRpY2FuLWNpdHktc3RhdGUpJyAgICAgICAgOiAndmF0aWNhbi1jaXR5JyxcbiAgICAgICAgICAgICdpcmFuLC1pc2xhbWljLXJlcHVibGljLW9mJyAgICAgICAgICAgIDogJ2lyYW4nLFxuICAgICAgICAgICAgJ2xhby1wZW9wbGVcXCdzLWRlbW9jcmF0aWMtcmVwdWJsaWMnICAgIDogJ2xhb3MnLFxuICAgICAgICAgICAgJ2xpYnlhbi1hcmFiLWphbWFoaXJpeWEnICAgICAgICAgICAgICAgOiAnbGlieWEnLFxuICAgICAgICAgICAgJ21hY2Vkb25pYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAncmVwdWJsaWMtb2YtbWFjZWRvbmlhJyxcbiAgICAgICAgICAgICdtYXlvdHRlJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2ZyYW5jZScsIC8vID9cbiAgICAgICAgICAgICdtb2xkb3ZhLC1yZXB1YmxpYy1vZicgICAgICAgICAgICAgICAgIDogJ21vbGRvdmEnLFxuICAgICAgICAgICAgJ21zLXphYW5kYW0nICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnbmV0aGVybGFuZHMnLCAvLyBjcnVpc2Ugc2hpcFxuICAgICAgICAgICAgJ25ldy1jYWxlZG9uaWEnICAgICAgICAgICAgICAgICAgICAgICAgOiAnZnJhbmNlJyxcbiAgICAgICAgICAgICdwYWxlc3Rpbmlhbi10ZXJyaXRvcnksLW9jY3VwaWVkJyAgICAgIDogJ3BhbGVzdGluZScsXG4gICAgICAgICAgICAncG9sYW5kJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdyZXB1YmxpYy1vZi1wb2xhbmQnLFxuICAgICAgICAgICAgJ3LDqXVuaW9uJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2ZyYW5jZScsXG4gICAgICAgICAgICAncy4ta29yZWEnICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzb3V0aC1rb3JlYScsXG4gICAgICAgICAgICAnc3QuLWJhcnRoJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzdC1iYXJ0cycsXG4gICAgICAgICAgICAnc2FpbnQtbHVjaWEnICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzdC1sdWNpYScsXG4gICAgICAgICAgICAnc2FpbnQtbWFydGluJyAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzaW50LW1hYXJ0ZW4nLFxuICAgICAgICAgICAgJ3NhaW50LXBpZXJyZS1taXF1ZWxvbicgICAgICAgICAgICAgICAgOiAnZnJhbmNlJyxcbiAgICAgICAgICAgICdzYWludC12aW5jZW50LWFuZC10aGUtZ3JlbmFkaW5lcycgICAgIDogJ3N0LXZpbmNlbnQtYW5kLXRoZS1ncmVuYWRpbmVzJyxcbiAgICAgICAgICAgICdzeXJpYW4tYXJhYi1yZXB1YmxpYycgICAgICAgICAgICAgICAgIDogJ3N5cmlhJyxcbiAgICAgICAgICAgICd0YW56YW5pYSwtdW5pdGVkLXJlcHVibGljLW9mJyAgICAgICAgIDogJ3RhbnphbmlhJyxcbiAgICAgICAgICAgICd0aW1vci1sZXN0ZScgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2Vhc3QtdGltb3InLFxuICAgICAgICAgICAgJ3R1cmtzLWFuZC1jYWljb3MtaXNsYW5kcycgICAgICAgICAgICAgOiAndHVya3MtYW5kLWNhaWNvcycsXG4gICAgICAgICAgICAndS5zLi12aXJnaW4taXNsYW5kcycgICAgICAgICAgICAgICAgICA6ICd2aXJnaW4taXNsYW5kcycsXG4gICAgICAgICAgICAndWFlJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd1bml0ZWQtYXJhYi1lbWlyYXRlcycsXG4gICAgICAgICAgICAndWsnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd1bml0ZWQta2luZ2RvbScsXG4gICAgICAgICAgICAndXNhJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd1bml0ZWQtc3RhdGVzLW9mLWFtZXJpY2EnLFxuICAgICAgICAgICAgJ3V6YmVraXN0YW4nICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndXpiZWtpc3RuJyxcbiAgICAgICAgICAgICd2ZW5lenVlbGEsLWJvbGl2YXJpYW4tcmVwdWJsaWMtb2YnICAgIDogJ3ZlbmV6dWVsYScsXG4gICAgICAgICAgICAndmlldC1uYW0nICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd2aWV0bmFtJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBpbWFnZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZShVdGlsLmZsYWdSZWdFeCwgJy0nKTtcblxuICAgICAgICBpbWFnZU5hbWUgPSBtYXBbaW1hZ2VOYW1lXSB8fCBpbWFnZU5hbWU7XG5cbiAgICAgICAgaWYgKE5lby5jb25maWcuaXNHaXRIdWJQYWdlcykge1xuICAgICAgICAgICAgbGV0IHBhdGggPSAnLi4vLi4vLi4vLi4vcmVzb3VyY2VzL2ltYWdlcy9mbGF0aWNvbi9jb3VudHJ5X2ZsYWdzL3BuZy8nICsgaW1hZ2VOYW1lICsgJy5wbmcnO1xuXG4gICAgICAgICAgICBpZiAoIU5lby5jb25maWcuaXNFeHBlcmltZW50YWwpIHtcbiAgICAgICAgICAgICAgICBwYXRoID0gJy4uLy4uLycgKyBwYXRoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL25lb21qcy9wYWdlcy9tYXN0ZXIvcmVzb3VyY2VzL2ltYWdlcy9mbGF0aWNvbi9jb3VudHJ5X2ZsYWdzL3BuZy8nICsgaW1hZ2VOYW1lICsgJy5wbmcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS5pbmRleFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgc3RhdGljIGluZGV4UmVuZGVyZXIoZGF0YSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xzIDogWyduZW8taW5kZXgtY29sdW1uJywgJ25lby10YWJsZS1jZWxsJ10sXG4gICAgICAgICAgICBodG1sOiBkYXRhLmluZGV4ICsgMVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVXRpbCk7XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWw7IiwiaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSAnLi92aWV3L01haW5Db250YWluZXIubWpzJztcblxuY29uc3Qgb25TdGFydCA9ICgpID0+IE5lby5hcHAoe1xuICAgIGFwcFBhdGggOiAnYXBwcy9zaGFyZWRjb3ZpZC8nLFxuICAgIG1haW5WaWV3OiBNYWluQ29udGFpbmVyLFxuICAgIG5hbWUgICAgOiAnU2hhcmVkQ292aWQnXG59KTtcblxuZXhwb3J0IHtvblN0YXJ0IGFzIG9uU3RhcnR9OyIsImltcG9ydCBNb2RlbCAgZnJvbSAnLi4vLi4vLi4vc3JjL2RhdGEvTW9kZWwubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgU2hhcmVkQ292aWQubW9kZWwuQ291bnRyeVxuICogQGV4dGVuZHMgTmVvLmRhdGEuTW9kZWxcbiAqL1xuY2xhc3MgQ291bnRyeSBleHRlbmRzIE1vZGVsIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogJ1NoYXJlZENvdmlkLm1vZGVsLkNvdW50cnknLFxuXG4gICAgICAgIGZpZWxkczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdhY3RpdmUnLFxuICAgICAgICAgICAgdHlwZTogJ0ludGVnZXInXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdjYXNlcycsXG4gICAgICAgICAgICB0eXBlOiAnSW50ZWdlcidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2Nhc2VzUGVyT25lTWlsbGlvbicsXG4gICAgICAgICAgICB0eXBlOiAnSW50ZWdlcidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2NvdW50cnknLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2NvdW50cnlJbmZvJyxcbiAgICAgICAgICAgIHR5cGU6ICdPYmplY3QnIC8vIF9pZCwgZmxhZywgaXNvMiwgaXNvMywgbGF0LCBsb25nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdjcml0aWNhbCcsXG4gICAgICAgICAgICB0eXBlOiAnSW50ZWdlcidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2RlYXRocycsXG4gICAgICAgICAgICB0eXBlOiAnSW50ZWdlcidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2luZGV4JyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnaW5mZWN0ZWQnLCAvLyByZW5kZXJlciBwYXJzZXMgdG8gJSBvZiBwb3B1bGF0aW9uXG4gICAgICAgICAgICB0eXBlOiAnSW50ZWdlcidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3JlY292ZXJlZCcsXG4gICAgICAgICAgICB0eXBlOiAnSW50ZWdlcidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3Rlc3RzJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAndGVzdHNQZXJPbmVNaWxsaW9uJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAndG9kYXlDYXNlcycsXG4gICAgICAgICAgICB0eXBlOiAnSW50ZWdlcidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3RvZGF5RGVhdGhzJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9XVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENvdW50cnkpO1xuXG5leHBvcnQge0NvdW50cnkgYXMgZGVmYXVsdH07IiwiaW1wb3J0IE1vZGVsICBmcm9tICcuLi8uLi8uLi9zcmMvZGF0YS9Nb2RlbC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBTaGFyZWRDb3ZpZC5tb2RlbC5IaXN0b3JpY2FsRGF0YVxuICogQGV4dGVuZHMgTmVvLmRhdGEuTW9kZWxcbiAqL1xuY2xhc3MgSGlzdG9yaWNhbERhdGEgZXh0ZW5kcyBNb2RlbCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdTaGFyZWRDb3ZpZC5tb2RlbC5IaXN0b3JpY2FsRGF0YScsXG5cbiAgICAgICAgZmllbGRzOiBbe1xuICAgICAgICAgICAgbmFtZTogJ2FjdGl2ZScsIC8vIGRvZXMgbm90IGV4aXN0IGluIHRoZSBhcGkgPT4gY2FzZXMgLSBkZWF0aHMgLSByZWNvdmVyZWRcbiAgICAgICAgICAgIHR5cGU6ICdpbnQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdjYXNlcycsXG4gICAgICAgICAgICB0eXBlOiAnaW50J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZGF0ZScsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyAvLyBkYXRlID0+IDEvMjIvMjBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2RhaWx5QWN0aXZlJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbnQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdkYWlseUNhc2VzJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbnQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdkYWlseURlYXRocycsXG4gICAgICAgICAgICB0eXBlOiAnaW50J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZGFpbHlSZWNvdmVyZWQnLFxuICAgICAgICAgICAgdHlwZTogJ2ludCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2RlYXRocycsXG4gICAgICAgICAgICB0eXBlOiAnaW50J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAncmVjb3ZlcmVkJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbnQnXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGlzdG9yaWNhbERhdGEpO1xuXG5leHBvcnQge0hpc3RvcmljYWxEYXRhIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb3VudHJ5IGZyb20gJy4uL21vZGVsL0NvdW50cnkubWpzJztcbmltcG9ydCBTdG9yZSAgIGZyb20gJy4uLy4uLy4uL3NyYy9kYXRhL1N0b3JlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFNoYXJlZENvdmlkLnN0b3JlLkNvdW50cmllc1xuICogQGV4dGVuZHMgTmVvLmRhdGEuU3RvcmVcbiAqL1xuY2xhc3MgQ291bnRyaWVzIGV4dGVuZHMgU3RvcmUge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnU2hhcmVkQ292aWQuc3RvcmUuQ291bnRyaWVzJyxcblxuICAgICAgICBrZXlQcm9wZXJ0eTogJ2NvdW50cnknLFxuICAgICAgICBtb2RlbCAgICAgIDogQ291bnRyeSxcblxuICAgICAgICBzb3J0ZXJzOiBbe1xuICAgICAgICAgICAgcHJvcGVydHkgOiAnY2FzZXMnLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnREVTQydcbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb3VudHJpZXMpO1xuXG5leHBvcnQge0NvdW50cmllcyBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgSGlzdG9yaWNhbERhdGFNb2RlbCBmcm9tICcuLi9tb2RlbC9IaXN0b3JpY2FsRGF0YS5tanMnO1xuaW1wb3J0IFN0b3JlICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2RhdGEvU3RvcmUubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgU2hhcmVkQ292aWQuc3RvcmUuSGlzdG9yaWNhbERhdGFcbiAqIEBleHRlbmRzIE5lby5kYXRhLlN0b3JlXG4gKi9cbmNsYXNzIEhpc3RvcmljYWxEYXRhIGV4dGVuZHMgU3RvcmUge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnU2hhcmVkQ292aWQuc3RvcmUuSGlzdG9yaWNhbERhdGEnLFxuXG4gICAgICAgIGtleVByb3BlcnR5OiAnZGF0ZScsXG4gICAgICAgIG1vZGVsICAgICAgOiBIaXN0b3JpY2FsRGF0YU1vZGVsLFxuXG4gICAgICAgIHNvcnRlcnM6IFt7XG4gICAgICAgICAgICBwcm9wZXJ0eSA6ICdkYXRlJyxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ0RFU0MnXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGlzdG9yaWNhbERhdGEpO1xuXG5leHBvcnQge0hpc3RvcmljYWxEYXRhIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFNoYXJlZENvdmlkLnZpZXcuQXR0cmlidXRpb25Db21wb25lbnRcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBBdHRyaWJ1dGlvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1NoYXJlZENvdmlkLnZpZXcuQXR0cmlidXRpb25Db21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1NoYXJlZENvdmlkLnZpZXcuQXR0cmlidXRpb25Db21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2NvdmlkLWF0dHJpYnV0aW9uLWNvbXBvbmVudCddXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsczogWydjb3ZpZC1hdHRyaWJ1dGlvbi1jb21wb25lbnQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgdmRvbToge1xuICAgICAgICAgICAgdGFnICA6ICdkaXYnLFxuICAgICAgICAgICAgc3R5bGU6IHttYXJnaW46ICcyMHB4J30sXG4gICAgICAgICAgICBjbiAgIDogW3tcbiAgICAgICAgICAgICAgICB0YWcgOiAnaDInLFxuICAgICAgICAgICAgICAgIGh0bWw6ICdBdHRyaWJ1dGlvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiAndWwnLFxuICAgICAgICAgICAgICAgIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgIHt0YWc6ICdsaScsIGh0bWw6ICdUaGUgbG9nb3Mgd2VyZSBjcmVhdGVkIGJ5IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5kcmllZm1laWVyLmNvbS9cIj5TZWJhc3RpYW4gRHJpZWZtZWllcjwvYT4uIFRoYW5rIHlvdSEnfSxcbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ2xpJywgaHRtbDogWydUaGUgbG9nb3MgYXJlIGJhc2VkIG9uIHRoZSBpbWFnZSBmcm9tIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3BoaWwuY2RjLmdvdi9EZXRhaWxzLmFzcHg/cGlkPTIzMzEyXCI+Q0RDIFB1YmxpYyBIZWFsdGggSW1hZ2UgTGlicmFyeSAoUEhJTCk8L2E+LDwvYnI+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdzbyBjcmVkaXRzIHRvIHRoZSBjb250ZW50IHByb3ZpZGVycyBDREMvIEFsaXNzYSBFY2tlcnQsIE1TOyBEYW4gSGlnZ2lucywgTUFNUy4nXS5qb2luKCcnKX0sXG4gICAgICAgICAgICAgICAgICAgIHt0YWc6ICdsaScsIGh0bWw6ICdEYXRhIHByb3ZpZGVkIGJ5OiA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL05vdmVsQ09WSUQvQVBJXCI+Tm92ZWxDT1ZJRCAvIEFQSTwvYT4uJ30sXG4gICAgICAgICAgICAgICAgICAgIHt0YWc6ICdsaScsIGh0bWw6ICdDb3VudHJ5IEZsYWcgSWNvbnMgbWFkZSBieSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2F1dGhvcnMvZnJlZXBpa1wiIHRpdGxlPVwiRnJlZXBpa1wiPkZyZWVwaWs8L2E+IGZyb20gPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9cIiB0aXRsZT1cIkZsYXRpY29uXCI+IHd3dy5mbGF0aWNvbi5jb208L2E+Lid9LFxuICAgICAgICAgICAgICAgICAgICB7dGFnOiAnbGknLCBodG1sOiAnQ2hhcnRzIGdvdCBjcmVhdGVkIHdpdGggPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmFtY2hhcnRzLmNvbS9kb2NzL3Y0L1wiPmFtQ2hhcnRzIDQ8L2E+Lid9LFxuICAgICAgICAgICAgICAgICAgICB7dGFnOiAnbGknLCBodG1sOiAnVGhlIEFwcCBpcyBjcmVhdGVkIHdpdGggdGhlIHdlYndvcmtlcnMgZHJpdmVuIFVJIGZyYW1ld29yayA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL25lb21qcy9uZW9cIj5uZW8ubWpzPC9hPi4nfSxcbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ2xpJywgaHRtbDogJ1RoZSBNYXBib3ggR0wgTWFwIGlzIGJhc2VkIG9uIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2RvY3MubWFwYm94LmNvbS9tYXBib3gtZ2wtanMvYXBpL1wiPk1hcGJveCBHTCBKUzwvYT4uJ30sXG4gICAgICAgICAgICAgICAgICAgIHt0YWc6ICdsaScsIGh0bWw6ICdUaGUgTWFwICYgSGVhdG1hcCBzdHlsZXMgYXJlIHN0cm9uZ2x5IGluc3BpcmVkIGJ5IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2Jsb2cubWFwYm94LmNvbS92aXN1YWxpemluZy10aGUtcHJvZ3Jlc3Npb24tb2YtdGhlLTIwMTktbmNvdi1vdXRicmVhay02Njc2M2ViNTllNzlcIj5WaXN1YWxpemluZyB0aGUgcHJvZ3Jlc3Npb24gb2YgdGhlIDIwMTktbkNvViBvdXRicmVhazwvYT4uJ31cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQXR0cmlidXRpb25Db21wb25lbnQpO1xuXG5leHBvcnQge0F0dHJpYnV0aW9uQ29tcG9uZW50IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbnRhaW5lci9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFNoYXJlZENvdmlkLnZpZXcuRm9vdGVyQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgRm9vdGVyQ29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nU2hhcmVkQ292aWQudmlldy5Gb290ZXJDb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1NoYXJlZENvdmlkLnZpZXcuRm9vdGVyQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gaGVpZ2h0PTIwXG4gICAgICAgICAqL1xuICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsYXlvdXQ9e250eXBlOiAnaGJveCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2hib3gnfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gcmVmZXJlbmNlPSdmb290ZXInXG4gICAgICAgICAqL1xuICAgICAgICByZWZlcmVuY2U6ICdmb290ZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBzdHlsZT17b3ZlcmZsb3c6ICd2aXNpYmxlJ31cbiAgICAgICAgICovXG4gICAgICAgIHN0eWxlOiB7b3ZlcmZsb3c6ICd2aXNpYmxlJ30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGl0ZW1EZWZhdWx0c1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICBudHlwZTogJ2NvbXBvbmVudCcsXG4gICAgICAgICAgICBjbHMgIDogWyduZW8tbGluay1jb2xvciddLFxuICAgICAgICAgICAgc3R5bGU6IHtmb250U2l6ZTogJzEzcHgnLCBwYWRkaW5nOiAnMTBweCcsIHBhZGRpbmdUb3A6IDB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gaXRlbXNcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgaHRtbCA6ICdBcHAgY3JlYXRlZCB3aXRoIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbmVvbWpzL25lb1wiPm5lby5tanM8L2E+LidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZmxleDogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBodG1sIDogJ0RhdGEgcHJvdmlkZWQgYnkgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kaXNlYXNlLXNoL0FQSVwiPmRpc2Vhc2Utc2gvQVBJPC9hPi4nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGZsZXg6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgaHRtbCA6ICdDb3VudHJ5IEZsYWcgSWNvbnMgbWFkZSBieSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2F1dGhvcnMvZnJlZXBpa1wiIHRpdGxlPVwiRnJlZXBpa1wiPkZyZWVwaWs8L2E+IGZyb20gPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9cIiB0aXRsZT1cIkZsYXRpY29uXCI+IHd3dy5mbGF0aWNvbi5jb208L2E+LidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICBjbHMgICAgOiBbJ25lby1idXR0b24nXSxcbiAgICAgICAgICAgIGhhbmRsZXI6ICdvblJlbW92ZUZvb3RlckJ1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgIGhlaWdodCA6IDI0LFxuICAgICAgICAgICAgc3R5bGUgIDoge21hcmdpbjogMCwgbWFyZ2luUmlnaHQ6ICcxMHB4JywgbWFyZ2luVG9wOiAnLTVweCd9LFxuICAgICAgICAgICAgdGV4dCAgIDogJ1JlbW92ZSBGb290ZXInXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRm9vdGVyQ29udGFpbmVyKTtcblxuZXhwb3J0IHtGb290ZXJDb250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbnRhaW5lciAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9jb250YWluZXIvQmFzZS5tanMnO1xuaW1wb3J0IEJveExhYmVsICAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9jb21wb25lbnQvQm94TGFiZWwubWpzJztcbmltcG9ydCBHYWxsZXJ5ICAgICAgICAgICAgICAgICAgICBmcm9tICcuL2NvdW50cnkvR2FsbGVyeS5tanMnO1xuaW1wb3J0IEdhbGxlcnlDb250YWluZXJDb250cm9sbGVyIGZyb20gJy4vR2FsbGVyeUNvbnRhaW5lckNvbnRyb2xsZXIubWpzJztcbmltcG9ydCBQYW5lbCAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvY29udGFpbmVyL1BhbmVsLm1qcyc7XG5pbXBvcnQgUmFuZ2VGaWVsZCAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2Zvcm0vZmllbGQvUmFuZ2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgU2hhcmVkQ292aWQudmlldy5HYWxsZXJ5Q29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgR2FsbGVyeUNvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1NoYXJlZENvdmlkLnZpZXcuR2FsbGVyeUNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnU2hhcmVkQ292aWQudmlldy5HYWxsZXJ5Q29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGF1dG9Nb3VudD10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBhdXRvTW91bnQ6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWdhbGxlcnktbWFpbmNvbnRhaW5lcicsICduZW8tdmlld3BvcnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1nYWxsZXJ5LW1haW5jb250YWluZXInLCAnbmVvLXZpZXdwb3J0J10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29udHJvbGxlci5Db21wb25lbnR8bnVsbH0gY29udHJvbGxlcj1HYWxsZXJ5Q29udGFpbmVyQ29udHJvbGxlclxuICAgICAgICAgKi9cbiAgICAgICAgY29udHJvbGxlcjogR2FsbGVyeUNvbnRhaW5lckNvbnRyb2xsZXIsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29tcG9uZW50LkdhbGxlcnl8bnVsbH0gZ2FsbGVyeT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBnYWxsZXJ5OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IGdhbGxlcnlDb25maWc9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZ2FsbGVyeUNvbmZpZzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBsYXlvdXQ9e250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfG51bGx9IGl0ZW1zXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgIG50eXBlIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICBmbGV4ICA6IDEsXG4gICAgICAgICAgICBsYXlvdXQ6ICdmaXQnLFxuICAgICAgICAgICAgaXRlbXMgOiBbXVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICA6IFBhbmVsLFxuICAgICAgICAgICAgY2xzICAgICAgOiBbJ25lby1jb25maWd1cmF0aW9uLXBhbmVsJywgJ25lby1wYW5lbCcsICduZW8tY29udGFpbmVyJ10sXG4gICAgICAgICAgICBsYXlvdXQgICA6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgICAgIHJlZmVyZW5jZTogJ2NvbnRyb2xzLXBhbmVsJyxcbiAgICAgICAgICAgIHN0eWxlICAgIDoge2JhY2tncm91bmRDb2xvcjogJyMyYjJiMmInfSxcbiAgICAgICAgICAgIHdpZHRoICAgIDogMjYwLFxuXG4gICAgICAgICAgICBjb250YWluZXJDb25maWc6IHtcbiAgICAgICAgICAgICAgICBzdHlsZToge292ZXJmbG93WTogJ3Njcm9sbCd9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBoZWFkZXJzOiBbe1xuICAgICAgICAgICAgICAgIGRvY2s6ICd0b3AnLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uQ29sbGFwc2VCdXR0b25DbGljaycsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdYJ1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGU6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgOiAnR2FsbGVyeSBDb250cm9scydcbiAgICAgICAgICAgICAgICB9LCAnLT4nLCB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAnb25XaW5kb3dHYWxsZXJ5TWF4aW1pemVCdXR0b25DbGljaycsXG4gICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYXIgZmEtd2luZG93LW1heGltaXplJ1xuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XSxcblxuICAgICAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgZmxleCAgICAgICAgIDogJzAgMSBhdXRvJyxcbiAgICAgICAgICAgICAgICBsYWJlbFdpZHRoICAgOiAnMTEwcHgnLFxuICAgICAgICAgICAgICAgIHN0eWxlICAgICAgICA6IHtwYWRkaW5nOiAnMTBweCd9LFxuICAgICAgICAgICAgICAgIHVzZUlucHV0RXZlbnQ6IHRydWVcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgIDogUmFuZ2VGaWVsZCxcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdUcmFuc2xhdGUgWCcsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiA1MDAwLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICd0cmFuc2xhdGVYJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDAsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZSA6ICdvblJhbmdlZmllbGRDaGFuZ2UnLFxuICAgICAgICAgICAgICAgICAgICBtb3VudGVkOiAnb25SYW5nZWZpZWxkTW91bnRlZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgOiBSYW5nZUZpZWxkLFxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1RyYW5zbGF0ZSBZJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDE1MDAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAtMTUwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICd0cmFuc2xhdGVZJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDAsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogJ29uUmFuZ2VmaWVsZENoYW5nZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgOiBSYW5nZUZpZWxkLFxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1RyYW5zbGF0ZSBaJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDU1MCxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IC00NTAwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3RyYW5zbGF0ZVonLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogMCxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlIDogJ29uUmFuZ2VmaWVsZENoYW5nZScsXG4gICAgICAgICAgICAgICAgICAgIG1vdW50ZWQ6ICdvblJhbmdlZmllbGRNb3VudGVkJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgICA6IFJhbmdlRmllbGQsXG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnQW1vdW50IFJvd3MnLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMTUsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAxLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ2Ftb3VudFJvd3MnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogMyxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiAnb25SYW5nZWZpZWxkQ2hhbmdlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiAnb25PcmRlckJ1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnT3JkZXIgYnkgUm93JyxcbiAgICAgICAgICAgICAgICBzdHlsZSAgOiB7bWFyZ2luOiAnMjBweCd9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGU6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgdGV4dCA6ICdTb3J0IEJ5OidcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAgICAgICAgIHN0eWxlIDoge21pbkhlaWdodDogJzEzNHB4JywgcGFkZGluZzogJzAnfSxcblxuICAgICAgICAgICAgICAgIGl0ZW1zIDogW3tcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ30sXG5cbiAgICAgICAgICAgICAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvblNvcnRCdXR0b25DbGljaydcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnY2FzZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdDYXNlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Ub3A6ICcwJ31cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdkZWF0aHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdEZWF0aHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHttYXJnaW46ICcxMHB4JywgbWFyZ2luQm90dG9tOiAnMTBweCcsIG1hcmdpblRvcDogMH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdjb3VudHJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiAnQ291bnRyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Ub3A6IDB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiAncmVjb3ZlcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiAnUmVjb3ZlcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpblRvcDogMH1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIGxheW91dDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1EZWZhdWx0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAnb25Tb3J0QnV0dG9uQ2xpY2snXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ3RvZGF5Q2FzZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdDYXNlcyB0b2RheScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Ub3A6ICcwJ31cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICd0b2RheURlYXRocycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ0RlYXRocyB0b2RheScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Cb3R0b206ICcxMHB4JywgbWFyZ2luVG9wOiAwfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ2NyaXRpY2FsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiAnQ3JpdGljYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHttYXJnaW46ICcxMHB4JywgbWFyZ2luQm90dG9tOiAnNDNweCcsIG1hcmdpblRvcDogMH1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG1vZHVsZTogQm94TGFiZWwsXG4gICAgICAgICAgICAgICAgdGV4dCAgOiBbXG4gICAgICAgICAgICAgICAgICAgICc8Yj5OYXZpZ2F0aW9uIENvbmNlcHQ8L2I+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxwPllvdSBjYW4gdXNlIHRoZSBBcnJvdyBLZXlzIHRvIHdhbGsgdGhyb3VnaCB0aGUgaXRlbXMuPC9wPidcbiAgICAgICAgICAgICAgICBdLmpvaW4oJycpXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuZ2FsbGVyeSA9IE5lby5jcmVhdGUoe1xuICAgICAgICAgICAgbW9kdWxlICAgOiBHYWxsZXJ5LFxuICAgICAgICAgICAgcmVmZXJlbmNlOiAnZ2FsbGVyeScsXG4gICAgICAgICAgICAuLi5tZS5nYWxsZXJ5Q29uZmlnIHx8IHt9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLml0ZW1zWzBdLml0ZW1zLnB1c2gobWUuZ2FsbGVyeSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBkZXN0cm95KC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5nYWxsZXJ5ID0gbnVsbDtcbiAgICAgICAgc3VwZXIuZGVzdHJveSguLi5hcmdzKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEdhbGxlcnlDb250YWluZXIpO1xuXG5leHBvcnQge0dhbGxlcnlDb250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbXBvbmVudENvbnRyb2xsZXIgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXIvQ29tcG9uZW50Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFNoYXJlZENvdmlkLnZpZXcuR2FsbGVyeUNvbnRhaW5lckNvbnRyb2xsZXJcbiAqIEBleHRlbmRzIE5lby5jb250cm9sbGVyLkNvbXBvbmVudFxuICovXG5jbGFzcyBHYWxsZXJ5Q29udGFpbmVyQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdTaGFyZWRDb3ZpZC52aWV3LkdhbGxlcnlDb250YWluZXJDb250cm9sbGVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdTaGFyZWRDb3ZpZC52aWV3LkdhbGxlcnlDb250YWluZXJDb250cm9sbGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb21wb25lbnQuR2FsbGVyeXxudWxsfSBnYWxsZXJ5Xz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGdhbGxlcnlfOiBudWxsXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCB3aGVuIGFjY2Vzc2luZyB0aGUgZ2FsbGVyeSBjb25maWdcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuR2FsbGVyeXxudWxsfSB2YWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVHZXRHYWxsZXJ5KHZhbHVlKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2dhbGxlcnkgPSB2YWx1ZSA9IHRoaXMuZ2V0UmVmZXJlbmNlKCdnYWxsZXJ5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uQ29sbGFwc2VCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIGNvbnN0IHBhbmVsICA9IHRoaXMuZ2V0UmVmZXJlbmNlKCdjb250cm9scy1wYW5lbCcpLFxuICAgICAgICAgICAgICBleHBhbmQgPSBwYW5lbC53aWR0aCA9PT0gNDA7XG5cbiAgICAgICAgcGFuZWwud2lkdGggPSBleHBhbmQgPyAyNTAgOiA0MDtcblxuICAgICAgICBkYXRhLmNvbXBvbmVudC50ZXh0ID0gZXhwYW5kID8gJ1gnIDogJysnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbk9yZGVyQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICBjb25zdCBnYWxsZXJ5ICAgID0gdGhpcy5nYWxsZXJ5LFxuICAgICAgICAgICAgICBvcmRlckJ5Um93ID0gIWdhbGxlcnkub3JkZXJCeVJvdztcblxuICAgICAgICBkYXRhLmNvbXBvbmVudC50ZXh0ID0gb3JkZXJCeVJvdyA9PT0gdHJ1ZSA/ICdPcmRlciBCeSBDb2x1bW4nIDogJ09yZGVyIGJ5IFJvdyc7XG5cbiAgICAgICAgZ2FsbGVyeS5vcmRlckJ5Um93ID0gb3JkZXJCeVJvdztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25SYW5nZWZpZWxkQ2hhbmdlKGRhdGEpIHtcbiAgICAgICAgdGhpcy5nYWxsZXJ5W2RhdGEuY29tcG9uZW50Lm5hbWVdID0gZGF0YS52YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAqL1xuICAgIG9uUmFuZ2VmaWVsZE1vdW50ZWQoaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBOZW8uZ2V0Q29tcG9uZW50KGlkKTtcblxuICAgICAgICB0aGlzLmdhbGxlcnkub24oJ2NoYW5nZScgKyBOZW8uY2FwaXRhbGl6ZShmaWVsZC5uYW1lKSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIGZpZWxkLm1pblZhbHVlKSwgZmllbGQubWF4VmFsdWUpO1xuICAgICAgICAgICAgZmllbGQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uU29ydEJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5nYWxsZXJ5LnN0b3JlLnNvcnRlcnMgPSBbe1xuICAgICAgICAgICAgcHJvcGVydHkgOiBkYXRhLmNvbXBvbmVudC5maWVsZCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ0RFU0MnXG4gICAgICAgIH1dO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoR2FsbGVyeUNvbnRhaW5lckNvbnRyb2xsZXIpO1xuXG5leHBvcnQge0dhbGxlcnlDb250YWluZXJDb250cm9sbGVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb250YWluZXIgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbnRhaW5lci9CYXNlLm1qcyc7XG5pbXBvcnQgQ291bnRyeVN0b3JlIGZyb20gJy4uL3N0b3JlL0NvdW50cmllcy5tanMnO1xuaW1wb3J0IFNlbGVjdEZpZWxkICBmcm9tICcuLi8uLi8uLi9zcmMvZm9ybS9maWVsZC9TZWxlY3QubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgU2hhcmVkQ292aWQudmlldy5IZWFkZXJDb250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBIZWFkZXJDb250YWluZXIgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdTaGFyZWRDb3ZpZC52aWV3LkhlYWRlckNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnU2hhcmVkQ292aWQudmlldy5IZWFkZXJDb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2NvdmlkLWhlYWRlci1jb250YWluZXInXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ2NvdmlkLWhlYWRlci1jb250YWluZXInXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gaGVpZ2h0PTcwXG4gICAgICAgICAqL1xuICAgICAgICBoZWlnaHQ6IDEyMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbGF5b3V0PXtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgICAgICAgKi9cbiAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gaXRlbXNcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgbnR5cGUgICAgOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgIG1pbldpZHRoIDogMjY3LFxuICAgICAgICAgICAgcmVmZXJlbmNlOiAnbG9nbycsXG4gICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW46ICcxMHB4J30sXG4gICAgICAgICAgICB3aWR0aCAgICA6IDI2NyxcblxuICAgICAgICAgICAgdmRvbToge1xuICAgICAgICAgICAgICAgIHRhZzogJ2ltZycsXG4gICAgICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL25lb21qcy9wYWdlcy9tYXN0ZXIvcmVzb3VyY2VzL2ltYWdlcy9hcHBzL2NvdmlkL2NvdmlkX2xvZ29fZGFyay5qcGcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG50eXBlIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgICAgIGl0ZW1zIDogW3tcbiAgICAgICAgICAgICAgICBudHlwZSAgICA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgIGhlaWdodCAgIDogNjUsXG4gICAgICAgICAgICAgICAgbGF5b3V0ICAgOiB7bnR5cGU6ICdoYm94J30sXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAndG90YWwtc3RhdHMnLFxuXG4gICAgICAgICAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50J1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgY2xzIDogWydjb3ZpZC1udW1iZXJib3gnXSxcbiAgICAgICAgICAgICAgICAgICAgdmRvbToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvdmlkLW51bWJlcmJveC10aXRsZScsICAnY2FzZXMnXSwgIGh0bWw6J0Nhc2VzJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NsczogWydjb3ZpZC1udW1iZXJib3gtbnVtYmVyJywgJ2Nhc2VzJ119XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGNscyA6IFsnY292aWQtbnVtYmVyYm94J10sXG4gICAgICAgICAgICAgICAgICAgIHZkb206IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NsczogWydjb3ZpZC1udW1iZXJib3gtdGl0bGUnLCAgJ2FjdGl2ZSddLCBodG1sOidBY3RpdmUnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvdmlkLW51bWJlcmJveC1udW1iZXInLCAnYWN0aXZlJ119XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGNscyA6IFsnY292aWQtbnVtYmVyYm94J10sXG4gICAgICAgICAgICAgICAgICAgIHZkb206IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NsczogWydjb3ZpZC1udW1iZXJib3gtdGl0bGUnLCAgJ3JlY292ZXJlZCddLCBodG1sOidSZWNvdmVyZWQnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvdmlkLW51bWJlcmJveC1udW1iZXInLCAncmVjb3ZlcmVkJ119XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGNscyA6IFsnY292aWQtbnVtYmVyYm94J10sXG4gICAgICAgICAgICAgICAgICAgIHZkb206IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NsczogWydjb3ZpZC1udW1iZXJib3gtdGl0bGUnLCAgJ2RlYXRocyddLCBodG1sOidEZWF0aHMnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvdmlkLW51bWJlcmJveC1udW1iZXInLCAnZGVhdGhzJ119XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDFcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7cGFkZGluZzogJzEwcHgnfSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyNSxcbiAgICAgICAgICAgICAgICAgICAgdmRvbSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZyAgICAgICAgICAgICAgOiAnYScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWwnICAgICA6ICdTdGFyIG5lb21qcy9uZW8gb24gR2l0SHViJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHMgICAgICAgICAgICAgIDogWydnaXRodWItYnV0dG9uJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtc2hvdy1jb3VudCc6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1zaXplJyAgICAgIDogJ2xhcmdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmICAgICAgICAgICAgIDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9uZW9tanMvbmVvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sICAgICAgICAgICAgIDogJ1N0YXInXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge3BhZGRpbmc6ICcxMHB4J30sXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDUsXG4gICAgICAgICAgICAgICAgICAgIHZkb20gOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWcgICAgICAgICAgICAgIDogJ2EnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWxhYmVsJyAgICAgOiAnU3BvbnNvciBAdG9iaXUgb24gR2l0SHViJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHMgICAgICAgICAgICAgIDogWydnaXRodWItYnV0dG9uJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtaWNvbicgICAgICA6ICdvY3RpY29uLWhlYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1zaXplJyAgICAgIDogJ2xhcmdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmICAgICAgICAgICAgIDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zcG9uc29ycy90b2JpdScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCAgICAgICAgICAgICA6ICdTcG9uc29yJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2hib3gnfSxcblxuICAgICAgICAgICAgICAgIGl0ZW1EZWZhdWx0czoge1xuICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2NvbXBvbmVudCdcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgaXRlbXMgOiBbe1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGUgICAgICAgOiBTZWxlY3RGaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUZpZWxkIDogJ2NvdW50cnknLFxuICAgICAgICAgICAgICAgICAgICBmbGV4ICAgICAgICAgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCAgICAgICA6IDI1LFxuICAgICAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uOiAnaW5saW5lJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0ICAgIDogJ1NlbGVjdCBhIENvdW50cnknLFxuICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aCAgICAgOiAxNDAsXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZSAgICA6ICdjb3VudHJ5LWZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgICAgICAgIDoge21hcmdpblRvcDogJzE1cHgnfSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggICAgICAgIDogMjAwLFxuXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXIgOiAnb25Db3VudHJ5RmllbGRDbGVhcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Q6ICdvbkNvdW50cnlGaWVsZFNlbGVjdCdcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBzdG9yZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlIDogQ291bnRyeVN0b3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGVyczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6ICdjb3VudHJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdBU0MnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgZmxleCAgIDogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAnb25Td2l0Y2hUaGVtZUJ1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IDogMjUsXG4gICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1zdW4nLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZSAgOiB7bWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5Ub3A6ICcxNXB4J30sXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdUaGVtZSBMaWdodCdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICBmbGV4ICAgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvblJlbG9hZERhdGFCdXR0b25DbGljaycsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA6IDI1LFxuICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtc3luYy1hbHQnLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZSAgOiB7bWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5Ub3A6ICcxNXB4J30sXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdSZWxvYWQgRGF0YSdcbiAgICAgICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgICAgOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgICA6IDI1LFxuICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICdsYXN0LXVwZGF0ZScsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpbkxlZnQ6ICcxMHB4JywgbWFyZ2luVG9wOiAnMThweCd9LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICcnXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGVhZGVyQ29udGFpbmVyKTtcblxuZXhwb3J0IHtIZWFkZXJDb250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJveExhYmVsICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvY29tcG9uZW50L0JveExhYmVsLm1qcyc7XG5pbXBvcnQgQ29udGFpbmVyICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9jb250YWluZXIvQmFzZS5tanMnO1xuaW1wb3J0IEhlbGl4ICAgICAgICAgICAgICAgICAgICBmcm9tICcuL2NvdW50cnkvSGVsaXgubWpzJztcbmltcG9ydCBIZWxpeENvbnRhaW5lckNvbnRyb2xsZXIgZnJvbSAnLi9IZWxpeENvbnRhaW5lckNvbnRyb2xsZXIubWpzJztcbmltcG9ydCBQYW5lbCAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbnRhaW5lci9QYW5lbC5tanMnO1xuaW1wb3J0IFJhbmdlRmllbGQgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvZm9ybS9maWVsZC9SYW5nZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBTaGFyZWRDb3ZpZC52aWV3LkhlbGl4Q29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgSGVsaXhDb250YWluZXIgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdTaGFyZWRDb3ZpZC52aWV3LkhlbGl4Q29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdTaGFyZWRDb3ZpZC52aWV3LkhlbGl4Q29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGF1dG9Nb3VudD10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBhdXRvTW91bnQ6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWhlbGl4LW1haW5jb250YWluZXInLCAnbmVvLXZpZXdwb3J0J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8taGVsaXgtbWFpbmNvbnRhaW5lcicsICduZW8tdmlld3BvcnQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb250cm9sbGVyLkNvbXBvbmVudHxudWxsfSBjb250cm9sbGVyPUhlbGl4Q29udGFpbmVyQ29udHJvbGxlclxuICAgICAgICAgKi9cbiAgICAgICAgY29udHJvbGxlcjogSGVsaXhDb250YWluZXJDb250cm9sbGVyLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbXBvbmVudC5IZWxpeHxudWxsfSBoZWxpeD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBoZWxpeDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBoZWxpeENvbmZpZz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBoZWxpeENvbmZpZzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBsYXlvdXQ9e250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfG51bGx9IGl0ZW1zXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgIG50eXBlIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICBmbGV4ICA6IDEsXG4gICAgICAgICAgICBpdGVtcyA6IFtdLFxuICAgICAgICAgICAgbGF5b3V0OiAnZml0J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICA6IFBhbmVsLFxuICAgICAgICAgICAgY2xzICAgICAgOiBbJ25lby1jb25maWd1cmF0aW9uLXBhbmVsJywgJ25lby1wYW5lbCcsICduZW8tY29udGFpbmVyJ10sXG4gICAgICAgICAgICBsYXlvdXQgICA6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgICAgIHJlZmVyZW5jZTogJ2NvbnRyb2xzLXBhbmVsJyxcbiAgICAgICAgICAgIHN0eWxlICAgIDoge2JhY2tncm91bmRDb2xvcjogJyMyYjJiMmInfSxcbiAgICAgICAgICAgIHdpZHRoICAgIDogMjUwLFxuXG4gICAgICAgICAgICBjb250YWluZXJDb25maWc6IHtcbiAgICAgICAgICAgICAgICBzdHlsZToge292ZXJmbG93WTogJ3Njcm9sbCd9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBoZWFkZXJzOiBbe1xuICAgICAgICAgICAgICAgIGRvY2sgOiAndG9wJyxcbiAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvbkNvbGxhcHNlQnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnWCdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ0hlbGl4IENvbnRyb2xzJ1xuICAgICAgICAgICAgICAgIH0sICctPicsIHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvbldpbmRvd0hlbGl4TWF4aW1pemVCdXR0b25DbGljaycsXG4gICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYXIgZmEtd2luZG93LW1heGltaXplJ1xuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XSxcblxuICAgICAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgbnR5cGUgICAgICAgIDogJ3JhbmdlZmllbGQnLFxuICAgICAgICAgICAgICAgIGZsZXggICAgICAgICA6ICcwIDEgYXV0bycsXG4gICAgICAgICAgICAgICAgbGFiZWxXaWR0aCAgIDogJzEwMHB4JyxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICAgICAgOiB7cGFkZGluZzogJzEwcHgnfSxcbiAgICAgICAgICAgICAgICB1c2VJbnB1dEV2ZW50OiB0cnVlLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVycyAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiAnb25SYW5nZWZpZWxkQ2hhbmdlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1RyYW5zbGF0ZSBYJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDIwMDAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAtMjAwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICd0cmFuc2xhdGVYJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDQwMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1RyYW5zbGF0ZSBZJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDI1MDAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAtMjUwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICd0cmFuc2xhdGVZJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IC0zNTBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBldmVudE5hbWU6ICdjaGFuZ2VUcmFuc2xhdGVaJyxcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdUcmFuc2xhdGUgWicsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiA0NTAwLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogLTQ1MDAsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAndHJhbnNsYXRlWicsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiAtMTUwMCxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlIDogJ29uUmFuZ2VmaWVsZENoYW5nZScsXG4gICAgICAgICAgICAgICAgICAgIG1vdW50ZWQ6ICdvblJhbmdlZmllbGRNb3VudGVkJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQgOiAnRGVsdGEgWScsXG4gICAgICAgICAgICAgICAgbGFiZWxBbGlnbjogJ3RvcCcsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgIDogNjAwLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlICA6IC02MDAsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgIDogJ2RlbHRhWScsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgIDogNzBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBldmVudE5hbWU6ICdjaGFuZ2VSb3RhdGlvbicsXG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnUm90YXRlJyxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IC03MjAsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiA3MjAsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAncm90YXRpb25BbmdsZScsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiAwLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2UgOiAnb25SYW5nZWZpZWxkQ2hhbmdlJyxcbiAgICAgICAgICAgICAgICAgICAgbW91bnRlZDogJ29uUmFuZ2VmaWVsZE1vdW50ZWQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1JhZGl1cycsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiAzNTAwLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogOTAwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3JhZGl1cycsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiAxNTAwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnUGVyc3BlY3RpdmUnLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogNTAsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiAzMDAwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3BlcnNwZWN0aXZlJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDgwMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ0l0ZW0gQW5nbGUnLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogMSxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDM2LFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ2l0ZW1BbmdsZScsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiA4XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnTWF4IE9wYWNpdHknLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ21heE9wYWNpdHknLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogMCxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDEwMCxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDgwIC8vIHRvZG86IG11bHRpLXRodW1iIHNsaWRlciBbMzAsIDgwXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ01pbiBPcGFjaXR5JyxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICdtaW5PcGFjaXR5JyxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IDAsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiAxMDAsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiAzMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG50eXBlICAgICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgIGhhbmRsZXIgIDogJ29uRmxpcEl0ZW1zQnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgIHRleHQgICAgICA6ICdGbGlwIEl0ZW1zJyxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHt9LFxuICAgICAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpbjogJzIwcHgnfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG50eXBlOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIHRleHQgOiAnU29ydCBCeTonXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgICAgICAgICBzdHlsZSA6IHttaW5IZWlnaHQ6ICcxMzRweCcsIHBhZGRpbmc6ICcwJ30sXG5cbiAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ30sXG5cbiAgICAgICAgICAgICAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvblNvcnRCdXR0b25DbGljaydcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnY2FzZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdDYXNlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Ub3A6ICcwJ31cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdkZWF0aHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdEZWF0aHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHttYXJnaW46ICcxMHB4JywgbWFyZ2luQm90dG9tOiAnMTBweCcsIG1hcmdpblRvcDogMH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdjb3VudHJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiAnQ291bnRyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Ub3A6IDB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiAncmVjb3ZlcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiAnUmVjb3ZlcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpblRvcDogMH1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIGxheW91dDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1EZWZhdWx0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAnb25Tb3J0QnV0dG9uQ2xpY2snXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ3RvZGF5Q2FzZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdDYXNlcyB0b2RheScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Ub3A6ICcwJ31cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICd0b2RheURlYXRocycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ0RlYXRocyB0b2RheScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Cb3R0b206ICcxMHB4JywgbWFyZ2luVG9wOiAwfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ2NyaXRpY2FsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiAnQ3JpdGljYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHttYXJnaW46ICcxMHB4JywgbWFyZ2luQm90dG9tOiAnNDNweCcsIG1hcmdpblRvcDogMH1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG50eXBlICAgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgaGFuZGxlciAgOiAnb25Gb2xsb3dTZWxlY3Rpb25CdXR0b25DbGljaycsXG4gICAgICAgICAgICAgICAgaWNvbkNscyAgOiAnZmEgZmEtc3F1YXJlJyxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdGb2xsb3cgU2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHt9LFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbiAgICAgIDogJzIwcHgnLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxMHB4J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBtb2R1bGU6IEJveExhYmVsLFxuICAgICAgICAgICAgICAgIHRleHQgIDogW1xuICAgICAgICAgICAgICAgICAgICAnPGI+TmF2aWdhdGlvbiBDb25jZXB0PC9iPicsXG4gICAgICAgICAgICAgICAgICAgICc8cD5DbGljayBvbiBhbiBpdGVtIHRvIHNlbGVjdCBpdC4gQWZ0ZXJ3YXJkcyB5b3UgY2FuIHVzZSB0aGUgQXJyb3cgS2V5cyB0byB3YWxrIHRocm91Z2ggdGhlIGl0ZW1zLjwvcD4nLFxuICAgICAgICAgICAgICAgICAgICAnPHA+SGl0IHRoZSBTcGFjZSBLZXkgdG8gcm90YXRlIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbSB0byB0aGUgZnJvbnQuPC9wPicsXG4gICAgICAgICAgICAgICAgICAgICc8cD5IaXQgdGhlIEVudGVyIEtleSB0byBleHBhbmQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLjwvcD4nXG4gICAgICAgICAgICAgICAgXS5qb2luKCcnKVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfV1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmhlbGl4ID0gTmVvLmNyZWF0ZSh7XG4gICAgICAgICAgICBtb2R1bGUgICA6IEhlbGl4LFxuICAgICAgICAgICAgcmVmZXJlbmNlOiAnaGVsaXgnLFxuICAgICAgICAgICAgLi4ubWUuaGVsaXhDb25maWcgfHwge31cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuaXRlbXNbMF0uaXRlbXMucHVzaChtZS5oZWxpeCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIZWxpeENvbnRhaW5lcik7XG5cbmV4cG9ydCB7SGVsaXhDb250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbXBvbmVudENvbnRyb2xsZXIgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXIvQ29tcG9uZW50Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFNoYXJlZENvdmlkLnZpZXcuSGVsaXhDb250YWluZXJDb250cm9sbGVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udHJvbGxlci5Db21wb25lbnRcbiAqL1xuY2xhc3MgSGVsaXhDb250YWluZXJDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50Q29udHJvbGxlciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1NoYXJlZENvdmlkLnZpZXcuSGVsaXhDb250YWluZXJDb250cm9sbGVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdTaGFyZWRDb3ZpZC52aWV3LkhlbGl4Q29udGFpbmVyQ29udHJvbGxlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29tcG9uZW50LkhlbGl4fG51bGx9IGhlbGl4Xz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGhlbGl4XzogbnVsbFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgd2hlbiBhY2Nlc3NpbmcgdGhlIGhlbGl4IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5IZWxpeHxudWxsfSB2YWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVHZXRIZWxpeCh2YWx1ZSkge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9oZWxpeCA9IHZhbHVlID0gdGhpcy5nZXRSZWZlcmVuY2UoJ2hlbGl4Jyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uQ29sbGFwc2VCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIGNvbnN0IHBhbmVsICA9IHRoaXMuZ2V0UmVmZXJlbmNlKCdjb250cm9scy1wYW5lbCcpLFxuICAgICAgICAgICAgICBleHBhbmQgPSBwYW5lbC53aWR0aCA9PT0gNDA7XG5cbiAgICAgICAgcGFuZWwud2lkdGggPSBleHBhbmQgPyAyNTAgOiA0MDtcblxuICAgICAgICBkYXRhLmNvbXBvbmVudC50ZXh0ID0gZXhwYW5kID8gJ1gnIDogJysnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkZsaXBJdGVtc0J1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5oZWxpeC5mbGlwcGVkID0gIXRoaXMuaGVsaXguZmxpcHBlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Gb2xsb3dTZWxlY3Rpb25CdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRhdGEuY29tcG9uZW50O1xuXG4gICAgICAgIGlmIChidXR0b24uaWNvbkNscyA9PT0gJ2ZhIGZhLXNxdWFyZScpIHtcbiAgICAgICAgICAgIHRoaXMuaGVsaXguZm9sbG93U2VsZWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIGJ1dHRvbi5pY29uQ2xzID0gJ2ZhIGZhLWNoZWNrLXNxdWFyZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhlbGl4LmZvbGxvd1NlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgYnV0dG9uLmljb25DbHMgPSAnZmEgZmEtc3F1YXJlJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvblJhbmdlZmllbGRDaGFuZ2UoZGF0YSkge1xuICAgICAgICBjb25zdCBuYW1lID0gZGF0YS5jb21wb25lbnQubmFtZTtcblxuICAgICAgICBpZiAoWydkZWx0YVknLCAnbWF4T3BhY2l0eScsICdtaW5PcGFjaXR5J10uaW5jbHVkZXMobmFtZSkpIHtcbiAgICAgICAgICAgIGRhdGEudmFsdWUgLz0gMTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oZWxpeFtuYW1lXSA9IGRhdGEudmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgKi9cbiAgICBvblJhbmdlZmllbGRNb3VudGVkKGlkKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gTmVvLmdldENvbXBvbmVudChpZCk7XG5cbiAgICAgICAgdGhpcy5oZWxpeC5vbihmaWVsZC5ldmVudE5hbWUsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBmaWVsZC5taW5WYWx1ZSksIGZpZWxkLm1heFZhbHVlKTtcbiAgICAgICAgICAgIGZpZWxkLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvblNvcnRCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIHRoaXMuaGVsaXguc3RvcmUuc29ydGVycyA9IFt7XG4gICAgICAgICAgICBwcm9wZXJ0eSA6IGRhdGEuY29tcG9uZW50LmZpZWxkLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnREVTQydcbiAgICAgICAgfV07XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIZWxpeENvbnRhaW5lckNvbnRyb2xsZXIpO1xuXG5leHBvcnQge0hlbGl4Q29udGFpbmVyQ29udHJvbGxlciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQXR0cmlidXRpb25Db21wb25lbnQgICAgZnJvbSAnLi9BdHRyaWJ1dGlvbkNvbXBvbmVudC5tanMnO1xuaW1wb3J0IEZvb3RlckNvbnRhaW5lciAgICAgICAgIGZyb20gJy4vRm9vdGVyQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgR2FsbGVyeUNvbnRhaW5lciAgICAgICAgZnJvbSAnLi9HYWxsZXJ5Q29udGFpbmVyLm1qcyc7XG5pbXBvcnQgSGVhZGVyQ29udGFpbmVyICAgICAgICAgZnJvbSAnLi9IZWFkZXJDb250YWluZXIubWpzJztcbmltcG9ydCBIZWxpeENvbnRhaW5lciAgICAgICAgICBmcm9tICcuL0hlbGl4Q29udGFpbmVyLm1qcyc7XG5pbXBvcnQgTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIgZnJvbSAnLi9NYWluQ29udGFpbmVyQ29udHJvbGxlci5tanMnO1xuaW1wb3J0IE1hcGJveEdsQ29udGFpbmVyICAgICAgIGZyb20gJy4vbWFwYm94R2wvQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgVGFiQ29udGFpbmVyICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL3RhYi9Db250YWluZXIubWpzJztcbmltcG9ydCBUYWJsZUNvbnRhaW5lciAgICAgICAgICBmcm9tICcuL1RhYmxlQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgVmlld3BvcnQgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbnRhaW5lci9WaWV3cG9ydC5tanMnO1xuaW1wb3J0IFdvcmxkTWFwQ29udGFpbmVyICAgICAgIGZyb20gJy4vV29ybGRNYXBDb250YWluZXIubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgU2hhcmVkQ292aWQudmlldy5NYWluQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLlZpZXdwb3J0XG4gKi9cbmNsYXNzIE1haW5Db250YWluZXIgZXh0ZW5kcyBWaWV3cG9ydCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1NoYXJlZENvdmlkLnZpZXcuTWFpbkNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnU2hhcmVkQ292aWQudmlldy5NYWluQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGF1dG9Nb3VudD10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBhdXRvTW91bnQ6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gY2xzPVsnY292aWQtdmlld3BvcnQnLCAnbmVvLXZpZXdwb3J0J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWydjb3ZpZC12aWV3cG9ydCcsICduZW8tdmlld3BvcnQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb250cm9sbGVyLkNvbXBvbmVudH0gY29udHJvbGxlcj1NYWluQ29udGFpbmVyQ29udHJvbGxlclxuICAgICAgICAgKi9cbiAgICAgICAgY29udHJvbGxlcjogTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gaXRlbXNcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBbSGVhZGVyQ29udGFpbmVyLCB7XG4gICAgICAgICAgICBtb2R1bGUgICA6IFRhYkNvbnRhaW5lcixcbiAgICAgICAgICAgIGZsZXggICAgIDogMSxcbiAgICAgICAgICAgIHJlZmVyZW5jZTogJ3RhYi1jb250YWluZXInLFxuICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpblRvcDogMH0sXG5cbiAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgICAgICAgIDogVGFibGVDb250YWluZXIsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlICAgICAgOiAndGFibGUtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLXRhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgIDogJ21haW52aWV3PXRhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ1RhYmxlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgICAgICAgICA6IE1hcGJveEdsQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZSAgICAgIDogJ21hcGJveC1nbC1jb250YWluZXInLFxuICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtZ2xvYmUtYW1lcmljYXMnLFxuICAgICAgICAgICAgICAgICAgICByb3V0ZSAgOiAnbWFpbnZpZXc9bWFwYm94Z2xtYXAnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnTWFwYm94IEdMIE1hcCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgICAgICAgOiBXb3JsZE1hcENvbnRhaW5lcixcbiAgICAgICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWdsb2JlLWFtZXJpY2FzJyxcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgIDogJ21haW52aWV3PXdvcmxkbWFwJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ1dvcmxkIE1hcCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgICAgICAgOiBHYWxsZXJ5Q29udGFpbmVyLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZSAgICAgIDogJ2dhbGxlcnktY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWltYWdlcycsXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICA6ICdtYWludmlldz1nYWxsZXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ0dhbGxlcnknXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgICAgICAgIDogSGVsaXhDb250YWluZXIsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlICAgICAgOiAnaGVsaXgtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWRuYScsXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICA6ICdtYWludmlldz1oZWxpeCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdIZWxpeCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgICAgICAgOiBBdHRyaWJ1dGlvbkNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICByZWZlcmVuY2UgICAgICA6ICdhdHRyaWJ1dGlvbicsXG4gICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1jb3B5cmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICByb3V0ZSAgOiAnbWFpbnZpZXc9YXR0cmlidXRpb24nLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnQXR0cmlidXRpb24nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSwgRm9vdGVyQ29udGFpbmVyXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbGF5b3V0PXtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgICAgICAgKi9cbiAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyKTtcblxuZXhwb3J0IHtNYWluQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb21wb25lbnRDb250cm9sbGVyIGZyb20gJy4uLy4uLy4uL3NyYy9jb250cm9sbGVyL0NvbXBvbmVudC5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCBVdGlsICAgICAgICAgICAgICAgIGZyb20gJy4uL1V0aWwubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgU2hhcmVkQ292aWQudmlldy5NYWluQ29udGFpbmVyQ29udHJvbGxlclxuICogQGV4dGVuZHMgTmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50XG4gKi9cbmNsYXNzIE1haW5Db250YWluZXJDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50Q29udHJvbGxlciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1NoYXJlZENvdmlkLnZpZXcuTWFpbkNvbnRhaW5lckNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1NoYXJlZENvdmlkLnZpZXcuTWFpbkNvbnRhaW5lckNvbnRyb2xsZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbWFpbmNvbnRhaW5lci1jb250cm9sbGVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ21haW5jb250YWluZXItY29udHJvbGxlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGFjdGl2ZU1haW5UYWJJbmRleD0wXG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmVNYWluVGFiSW5kZXg6IDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGFwaVN1bW1hcnlVcmw9J2h0dHBzOi8vZGlzZWFzZS5zaC92Mi9hbGwnXG4gICAgICAgICAqL1xuICAgICAgICBhcGlTdW1tYXJ5VXJsOiAnaHR0cHM6Ly9kaXNlYXNlLnNoL3YyL2FsbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGFwaVVybD0naHR0cHM6Ly9kaXNlYXNlLnNoL2NvdW50cmllcydcbiAgICAgICAgICovXG4gICAgICAgIGFwaVVybDogJ2h0dHBzOi8vZGlzZWFzZS5zaC92Mi9jb3VudHJpZXMnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNvbm5lY3RlZEFwcHM9W11cbiAgICAgICAgICovXG4gICAgICAgIGNvbm5lY3RlZEFwcHM6IFtdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IGNvdW50cnlSZWNvcmQ9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgY291bnRyeVJlY29yZDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfG51bGx9IGRhdGE9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludGVybmFsIGZsYWcgdG8gcHJldmVudCBub24gbWFpbiB3aW5kb3dzIGZyb20gdHJpZ2dlcmluZyB0aGVpciBpbml0aWFsIHJvdXRlIGFzIGEgY2hhbmdlXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGZpcnN0SGFzaENoYW5nZT10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBmaXJzdEhhc2hDaGFuZ2U6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gbWFpblRhYnM9Wyd0YWJsZScsICdtYXBib3hnbG1hcCcsICd3b3JsZG1hcCcsICdnYWxsZXJ5JywgJ2hlbGl4JywgJ2F0dHJpYnV0aW9uJ11cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbWFpblRhYnM6IFsndGFibGUnLCdtYXBib3hnbG1hcCcsICd3b3JsZG1hcCcsICdnYWxsZXJ5JywgJ2hlbGl4JywgJ2F0dHJpYnV0aW9uJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGbGFnIHRvIG9ubHkgbG9hZCB0aGUgbWFwIG9uY2Ugb25IYXNoQ2hhbmdlLCBidXQgYWx3YXlzIG9uIHJlbG9hZCBidXR0b24gY2xpY2tcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbWFwYm94Z2xNYXBIYXNEYXRhPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG1hcGJveGdsTWFwSGFzRGF0YTogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHN1bW1hcnlEYXRhPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHN1bW1hcnlEYXRhOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogRmxhZyB0byBvbmx5IGxvYWQgdGhlIG1hcCBvbmNlIG9uSGFzaENoYW5nZSwgYnV0IGFsd2F5cyBvbiByZWxvYWQgYnV0dG9uIGNsaWNrXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHdvcmxkTWFwSGFzRGF0YT1mYWxzZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB3b3JsZE1hcEhhc0RhdGE6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSB3aW5kb3dDaGFydD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB3aW5kb3dDaGFydDogbnVsbCxcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmxvYWREYXRhKCk7XG4gICAgICAgIG1lLmxvYWRTdW1tYXJ5RGF0YSgpO1xuXG4gICAgICAgIG1lLnZpZXcub24oe1xuICAgICAgICAgICAgY29ubmVjdCAgIDogbWUub25BcHBDb25uZWN0LFxuICAgICAgICAgICAgZGlzY29ubmVjdDogbWUub25BcHBEaXNjb25uZWN0LFxuICAgICAgICAgICAgbW91bnRlZCAgIDogbWUub25NYWluVmlld01vdW50ZWQsXG4gICAgICAgICAgICBzY29wZSAgICAgOiBtZVxuICAgICAgICB9KTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obWUsIHtcbiAgICAgICAgICAgICAgICBnYWxsZXJ5VmlldzogbWUuZ2V0UmVmZXJlbmNlKCdnYWxsZXJ5JyksXG4gICAgICAgICAgICAgICAgaGVsaXhWaWV3ICA6IG1lLmdldFJlZmVyZW5jZSgnaGVsaXgnKSxcbiAgICAgICAgICAgICAgICBtYXBCb3hWaWV3IDogbWUuZ2V0UmVmZXJlbmNlKCdtYXBib3hnbG1hcCcpLFxuICAgICAgICAgICAgICAgIHRhYmxlVmlldyAgOiBtZS5nZXRSZWZlcmVuY2UoJ3RhYmxlJylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IGRhdGFcbiAgICAgKi9cbiAgICBhZGRTdG9yZUl0ZW1zKGRhdGEpIHtcbiAgICAgICAgY29uc3QgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgY291bnRyeVN0b3JlID0gbWUuZ2V0UmVmZXJlbmNlKCdjb3VudHJ5LWZpZWxkJykuc3RvcmUsXG4gICAgICAgICAgICAgIHJlZmVyZW5jZSAgICA9IG1lLm1haW5UYWJzW21lLmFjdGl2ZU1haW5UYWJJbmRleF0sXG4gICAgICAgICAgICAgIGFjdGl2ZVRhYiAgICA9IG1lLmdldFJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICAgIC8vIHdvcmxkb21ldGVyIGFkZGVkIHdvcmxkIGFzIGEgY291bnRyeVxuICAgICAgICAvLyBtaWdodCBnZXQgcmVtb3ZlZCBieSB0aGUgTm92ZWxDb3ZpZCBBUElcbiAgICAgICAgaWYgKGRhdGFbMF0gJiYgZGF0YVswXS5jb3VudHJ5ID09PSAnV29ybGQnKSB7XG4gICAgICAgICAgICBjb25zdCB3b3JsZERhdGEgPSBkYXRhLnNoaWZ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5jb3VudHJ5LmluY2x1ZGVzKCdcIicpKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jb3VudHJ5ID0gaXRlbS5jb3VudHJ5LnJlcGxhY2UoJ1wiJywgXCJcXCdcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGl0ZW0uY2FzZXNQZXJPbmVNaWxsaW9uID0gaXRlbS5jYXNlc1Blck9uZU1pbGxpb24gPiBpdGVtLmNhc2VzID8gJ04vQScgOiBpdGVtLmNhc2VzUGVyT25lTWlsbGlvbiB8fCAwO1xuICAgICAgICAgICAgaXRlbS5pbmZlY3RlZCAgICAgICAgICAgPSBpdGVtLmNhc2VzUGVyT25lTWlsbGlvbjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuZGF0YSA9IGRhdGE7XG5cbiAgICAgICAgaWYgKGNvdW50cnlTdG9yZS5nZXRDb3VudCgpIDwgMSkge1xuICAgICAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdjb3VudHJ5LWZpZWxkJykuc3RvcmUuZGF0YSA9IGRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoWydnYWxsZXJ5JywgJ2hlbGl4JywgJ3RhYmxlJ10uaW5jbHVkZXMocmVmZXJlbmNlKSkge1xuICAgICAgICAgICAgYWN0aXZlVGFiLnN0b3JlLmRhdGEgPSBkYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZiAocmVmZXJlbmNlID09PSAnbWFwYm94Z2xtYXAnKSB7XG4gICAgICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ21hcGJveGdsbWFwJykuZGF0YSA9IGRhdGE7XG4gICAgICAgICAgICBtZS5tYXBib3hnbE1hcEhhc0RhdGEgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZiAocmVmZXJlbmNlID09PSAnd29ybGRtYXAnKSB7XG4gICAgICAgICAgICBhY3RpdmVUYWIubG9hZERhdGEoZGF0YSk7XG4gICAgICAgICAgICBtZS53b3JsZE1hcEhhc0RhdGEgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLmFjdGl2ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLmNhc2VzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEuZGVhdGhzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEucmVjb3ZlcmVkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEudXBkYXRlZCAvLyB0aW1lc3RhbXBcbiAgICAgKi9cbiAgICBhcHBseVN1bW1hcnlEYXRhKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb250YWluZXIgPSBtZS5nZXRSZWZlcmVuY2UoJ3RvdGFsLXN0YXRzJyksXG4gICAgICAgICAgICB2ZG9tICAgICAgPSBjb250YWluZXIudmRvbTtcblxuICAgICAgICBtZS5zdW1tYXJ5RGF0YSA9IGRhdGE7XG5cbiAgICAgICAgdmRvbS5jblswXS5jblsxXS5odG1sID0gVXRpbC5mb3JtYXROdW1iZXIoe3ZhbHVlOiBkYXRhLmNhc2VzfSk7XG4gICAgICAgIHZkb20uY25bMV0uY25bMV0uaHRtbCA9IFV0aWwuZm9ybWF0TnVtYmVyKHt2YWx1ZTogZGF0YS5hY3RpdmV9KTtcbiAgICAgICAgdmRvbS5jblsyXS5jblsxXS5odG1sID0gVXRpbC5mb3JtYXROdW1iZXIoe3ZhbHVlOiBkYXRhLnJlY292ZXJlZH0pO1xuICAgICAgICB2ZG9tLmNuWzNdLmNuWzFdLmh0bWwgPSBVdGlsLmZvcm1hdE51bWJlcih7dmFsdWU6IGRhdGEuZGVhdGhzfSk7XG5cbiAgICAgICAgY29udGFpbmVyLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgIGNvbnRhaW5lciA9IG1lLmdldFJlZmVyZW5jZSgnbGFzdC11cGRhdGUnKTtcbiAgICAgICAgdmRvbSAgICAgID0gY29udGFpbmVyLnZkb207XG5cbiAgICAgICAgdmRvbS5odG1sID0gJ0xhc3QgVXBkYXRlOiAnICsgbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2RlZmF1bHQnLCB7XG4gICAgICAgICAgICBob3VyICA6ICdudW1lcmljJyxcbiAgICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICAgICAgc2Vjb25kOiAnbnVtZXJpYydcbiAgICAgICAgfSkuZm9ybWF0KG5ldyBEYXRlKGRhdGEudXBkYXRlZCkpO1xuXG4gICAgICAgIGNvbnRhaW5lci52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICAgKi9cbiAgICBjbGVhckNvdW50cnlGaWVsZChyZWNvcmQpIHtcbiAgICAgICAgdGhpcy5nZXRSZWZlcmVuY2UoJ2NvdW50cnktZmllbGQnKS5jbGVhcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb250YWluZXJSZWZlcmVuY2VcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHdpbmRvd05hbWVcbiAgICAgKi9cbiAgICBjcmVhdGVQb3B1cFdpbmRvdyhjb250YWluZXJSZWZlcmVuY2UsIHVybCwgd2luZG93TmFtZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE5lby5NYWluLmdldFdpbmRvd0RhdGEoKS50aGVuKHdpbkRhdGEgPT4ge1xuICAgICAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCh7XG4gICAgICAgICAgICAgICAgaWQ6IFttZS5nZXRSZWZlcmVuY2UoY29udGFpbmVyUmVmZXJlbmNlKS5pZF1cbiAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHtoZWlnaHQsIGxlZnQsIHRvcCwgd2lkdGh9ID0gZGF0YVswXTtcblxuICAgICAgICAgICAgICAgIGhlaWdodCAtPSA1MDsgLy8gcG9wdXAgaGVhZGVyIGluIENocm9tZVxuICAgICAgICAgICAgICAgIGxlZnQgICArPSB3aW5EYXRhLnNjcmVlbkxlZnQ7XG4gICAgICAgICAgICAgICAgdG9wICAgICs9ICh3aW5EYXRhLm91dGVySGVpZ2h0IC0gd2luRGF0YS5pbm5lckhlaWdodCArIHdpbkRhdGEuc2NyZWVuVG9wKTtcblxuICAgICAgICAgICAgICAgIE5lby5NYWluLndpbmRvd09wZW4oe1xuICAgICAgICAgICAgICAgICAgICB1cmwgICAgICAgICAgIDogYC4uLyR7dXJsfS9pbmRleC5odG1sYCxcbiAgICAgICAgICAgICAgICAgICAgd2luZG93RmVhdHVyZXM6IGBoZWlnaHQ9JHtoZWlnaHR9LGxlZnQ9JHtsZWZ0fSx0b3A9JHt0b3B9LHdpZHRoPSR7d2lkdGh9YCxcbiAgICAgICAgICAgICAgICAgICAgd2luZG93TmFtZSAgICA6IHdpbmRvd05hbWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbYXBwTmFtZV1cbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlfVxuICAgICAqL1xuICAgIGdldE1haW5WaWV3KGFwcE5hbWUpIHtcbiAgICAgICAgaWYgKCFhcHBOYW1lIHx8IGFwcE5hbWUgPT09ICdDb3ZpZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZpZXc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gTmVvLmFwcHNbYXBwTmFtZV0ubWFpblZpZXdJbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoT2JqZWN0XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGhhc2hPYmplY3QubWFpbnZpZXdcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldFRhYkluZGV4KGhhc2hPYmplY3QpIHtcbiAgICAgICAgaWYgKCFoYXNoT2JqZWN0IHx8ICFoYXNoT2JqZWN0Lm1haW52aWV3KSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLm1haW5UYWJzLmluZGV4T2YoaGFzaE9iamVjdC5tYWludmlldyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdGFiSW5kZXhcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlfVxuICAgICAqL1xuICAgIGdldFZpZXcodGFiSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVmZXJlbmNlKHRoaXMubWFpblRhYnNbdGFiSW5kZXhdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGxvYWREYXRhKCkge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgZmV0Y2gobWUuYXBpVXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBtZS5hZGRTdG9yZUl0ZW1zKGRhdGEpKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnQ2Fu4oCZdCBhY2Nlc3MgJyArIG1lLmFwaVVybCwgZXJyKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBsb2FkU3VtbWFyeURhdGEoKSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBmZXRjaChtZS5hcGlTdW1tYXJ5VXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBtZS5hcHBseVN1bW1hcnlEYXRhKGRhdGEpKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnQ2Fu4oCZdCBhY2Nlc3MgJyArIG1lLmFwaVN1bW1hcnlVcmwsIGVycikpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFtZS5zdW1tYXJ5RGF0YSkge1xuICAgICAgICAgICAgICAgIG1lLm9uTG9hZFN1bW1hcnlEYXRhRmFpbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAyMDAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAgICovXG4gICAgb25BcHBDb25uZWN0KG5hbWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uQXBwQ29ubmVjdCcsIG5hbWUpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBwYXJlbnRWaWV3LCB2aWV3O1xuXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnU2hhcmVkQ292aWRDaGFydCc6XG4gICAgICAgICAgICAgICAgdmlldyA9IG1lLmdldFJlZmVyZW5jZSgnY29udHJvbHMtcGFuZWwnKTtcbiAgICAgICAgICAgICAgICBwYXJlbnRWaWV3ID0gTmVvLmdldENvbXBvbmVudCh2aWV3LnBhcmVudElkKTtcbiAgICAgICAgICAgICAgICBwYXJlbnRWaWV3LnN0b3JlUmVmZXJlbmNlcygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnU2hhcmVkQ292aWRHYWxsZXJ5JzpcbiAgICAgICAgICAgICAgICB2aWV3ID0gbWUuZ2V0UmVmZXJlbmNlKCdnYWxsZXJ5LWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShtZS5tYWluVGFicywgJ2dhbGxlcnknKTtcbiAgICAgICAgICAgICAgICBtZS5hY3RpdmVNYWluVGFiSW5kZXgtLTtcbiAgICAgICAgICAgICAgICBOZW8uTWFpbi5lZGl0Um91dGUoe21haW52aWV3OiBtZS5tYWluVGFic1ttZS5hY3RpdmVNYWluVGFiSW5kZXhdfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTaGFyZWRDb3ZpZEhlbGl4JzpcbiAgICAgICAgICAgICAgICB2aWV3ID0gbWUuZ2V0UmVmZXJlbmNlKCdoZWxpeC1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUobWUubWFpblRhYnMsICdoZWxpeCcpO1xuICAgICAgICAgICAgICAgIG1lLmFjdGl2ZU1haW5UYWJJbmRleC0tO1xuICAgICAgICAgICAgICAgIE5lby5NYWluLmVkaXRSb3V0ZSh7bWFpbnZpZXc6IG1lLm1haW5UYWJzW21lLmFjdGl2ZU1haW5UYWJJbmRleF19KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1NoYXJlZENvdmlkTWFwJzpcbiAgICAgICAgICAgICAgICB2aWV3ID0gbWUuZ2V0UmVmZXJlbmNlKCdtYXBib3gtZ2wtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKG1lLm1haW5UYWJzLCAnbWFwYm94Z2xtYXAnKTtcbiAgICAgICAgICAgICAgICBtZS5hY3RpdmVNYWluVGFiSW5kZXgtLTtcbiAgICAgICAgICAgICAgICBOZW8uTWFpbi5lZGl0Um91dGUoe21haW52aWV3OiBtZS5tYWluVGFic1ttZS5hY3RpdmVNYWluVGFiSW5kZXhdfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmlldykge1xuICAgICAgICAgICAgTmVvQXJyYXkuYWRkKG1lLmNvbm5lY3RlZEFwcHMsIG5hbWUpO1xuXG4gICAgICAgICAgICBwYXJlbnRWaWV3ID0gcGFyZW50VmlldyA/IHBhcmVudFZpZXcgOiB2aWV3LmlzVGFiID8gdmlldy51cCgndGFiLWNvbnRhaW5lcicpIDogTmVvLmdldENvbXBvbmVudCh2aWV3LnBhcmVudElkKTtcbiAgICAgICAgICAgIHBhcmVudFZpZXcucmVtb3ZlKHZpZXcsIGZhbHNlKTtcblxuICAgICAgICAgICAgTmVvLmFwcHNbbmFtZV0ub24oJ3JlbmRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbWUuZ2V0TWFpblZpZXcobmFtZSkuYWRkKHZpZXcpO1xuICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqL1xuICAgIG9uQXBwRGlzY29ubmVjdChuYW1lKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHBhcmVudFZpZXcgPSBtZS5nZXRNYWluVmlldyhuYW1lKSxcbiAgICAgICAgICAgIHZpZXcgICAgICAgPSBwYXJlbnRWaWV3Lml0ZW1zWzBdLFxuICAgICAgICAgICAgaW5kZXg7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ29uQXBwRGlzY29ubmVjdCcsIG5hbWUpO1xuXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnU2hhcmVkQ292aWQnOlxuICAgICAgICAgICAgICAgIE5lby5NYWluLndpbmRvd0Nsb3NlKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZXM6IG1lLmNvbm5lY3RlZEFwcHMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTaGFyZWRDb3ZpZENoYXJ0JzpcbiAgICAgICAgICAgIGNhc2UgJ1NoYXJlZENvdmlkR2FsbGVyeSc6XG4gICAgICAgICAgICBjYXNlICdTaGFyZWRDb3ZpZEhlbGl4JzpcbiAgICAgICAgICAgIGNhc2UgJ1NoYXJlZENvdmlkTWFwJzpcbiAgICAgICAgICAgICAgICB2aWV3ID0gcGFyZW50Vmlldy5pdGVtc1swXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2aWV3KSB7XG4gICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUobWUuY29ubmVjdGVkQXBwcywgbmFtZSk7XG5cbiAgICAgICAgICAgIHBhcmVudFZpZXcucmVtb3ZlKHZpZXcsIGZhbHNlKTtcblxuICAgICAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnU2hhcmVkQ292aWRDaGFydCc6XG4gICAgICAgICAgICAgICAgICAgIG1lLmdldFJlZmVyZW5jZSgndGFibGUtY29udGFpbmVyJykuYWRkKHZpZXcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdTaGFyZWRDb3ZpZEdhbGxlcnknOlxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IG1lLmNvbm5lY3RlZEFwcHMuaW5jbHVkZXMoJ1NoYXJlZENvdmlkTWFwJykgPyAyIDogMztcbiAgICAgICAgICAgICAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCd0YWItY29udGFpbmVyJykuaW5zZXJ0KGluZGV4LCB2aWV3KTtcbiAgICAgICAgICAgICAgICAgICAgbWUubWFpblRhYnMuc3BsaWNlKGluZGV4LCAwLCAnZ2FsbGVyeScpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdTaGFyZWRDb3ZpZEhlbGl4JzpcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSA0O1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IG1lLmNvbm5lY3RlZEFwcHMuaW5jbHVkZXMoJ1NoYXJlZENvdmlkR2FsbGVyeScpID8gaW5kZXggLSAxIDogaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gbWUuY29ubmVjdGVkQXBwcy5pbmNsdWRlcygnU2hhcmVkQ292aWRNYXAnKSAgICAgPyBpbmRleCAtIDEgOiBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCd0YWItY29udGFpbmVyJykuaW5zZXJ0KGluZGV4LCB2aWV3KTtcbiAgICAgICAgICAgICAgICAgICAgbWUubWFpblRhYnMuc3BsaWNlKGluZGV4LCAwLCAnaGVsaXgnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnU2hhcmVkQ292aWRNYXAnOlxuICAgICAgICAgICAgICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ3RhYi1jb250YWluZXInKS5pbnNlcnQoMSwgdmlldyk7XG4gICAgICAgICAgICAgICAgICAgIG1lLm1haW5UYWJzLnNwbGljZSgxLCAwLCAnbWFwYm94Z2xtYXAnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ291bnRyeUZpZWxkQ2xlYXIoKSB7XG4gICAgICAgIHRoaXMuY291bnRyeVJlY29yZCA9IG51bGw7XG5cbiAgICAgICAgTmVvLk1haW4uZWRpdFJvdXRlKHtcbiAgICAgICAgICAgIGNvdW50cnk6IG51bGxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uQ291bnRyeUZpZWxkU2VsZWN0KGRhdGEpIHtjb25zb2xlLmxvZygnb25Db3VudHJ5RmllbGRTZWxlY3QnLCBkYXRhKTtcbiAgICAgICAgdGhpcy5jb3VudHJ5UmVjb3JkID0gZGF0YS5yZWNvcmQ7XG5cbiAgICAgICAgTmVvLk1haW4uZWRpdFJvdXRlKHtcbiAgICAgICAgICAgIGNvdW50cnk6IGRhdGEudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2xkVmFsdWVcbiAgICAgKi9cbiAgICBvbkhhc2hDaGFuZ2UodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBhY3RpdmVJbmRleCAgICAgICA9IG1lLmdldFRhYkluZGV4KHZhbHVlLmhhc2gpLFxuICAgICAgICAgICAgY291bnRyeSAgICAgICAgICAgPSB2YWx1ZS5oYXNoICYmIHZhbHVlLmhhc2guY291bnRyeSxcbiAgICAgICAgICAgIGNvdW50cnlGaWVsZCAgICAgID0gbWUuZ2V0UmVmZXJlbmNlKCdjb3VudHJ5LWZpZWxkJyksXG4gICAgICAgICAgICB0YWJDb250YWluZXIgICAgICA9IG1lLmdldFJlZmVyZW5jZSgndGFiLWNvbnRhaW5lcicpLFxuICAgICAgICAgICAgYWN0aXZlVmlldyAgICAgICAgPSBtZS5nZXRWaWV3KGFjdGl2ZUluZGV4KSxcbiAgICAgICAgICAgIGRlbGF5U2VsZWN0aW9uICAgID0gIW1lLmRhdGEgPyAxMDAwIDogdGFiQ29udGFpbmVyLmFjdGl2ZUluZGV4ICE9PSBhY3RpdmVJbmRleCA/IDEwMCA6IDAsXG4gICAgICAgICAgICBpZCwgc2VsZWN0aW9uTW9kZWw7XG5cbiAgICAgICAgaWYgKG1lLmZpcnN0SGFzaENoYW5nZSB8fCB2YWx1ZS5hcHBOYW1lKSB7Y29uc29sZS5sb2coJ29uSGFzaENoYW5nZScsIHZhbHVlKTtcbiAgICAgICAgICAgIHNlbGVjdGlvbk1vZGVsID0gYWN0aXZlVmlldy5zZWxlY3Rpb25Nb2RlbDtcblxuICAgICAgICAgICAgdGFiQ29udGFpbmVyLmFjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXg7XG4gICAgICAgICAgICBtZS5hY3RpdmVNYWluVGFiSW5kZXggICAgPSBhY3RpdmVJbmRleDtcblxuICAgICAgICAgICAgaWYgKGFjdGl2ZVZpZXcubnR5cGUgPT09ICdoZWxpeCcpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVWaWV3LmdldE9mZnNldFZhbHVlcygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB0b2RvOiB0aGlzIHdpbGwgb25seSBsb2FkIGVhY2ggc3RvcmUgb25jZS4gYWRqdXN0IHRoZSBsb2dpYyBpbiBjYXNlIHdlIHdhbnQgdG8gc3VwcG9ydCByZWxvYWRpbmcgdGhlIEFQSVxuXG4gICAgICAgICAgICBpZiAobWUuZGF0YSAmJiBhY3RpdmVWaWV3LnN0b3JlICYmIGFjdGl2ZVZpZXcuc3RvcmUuZ2V0Q291bnQoKSA8IDEpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVWaWV3LnN0b3JlLmRhdGEgPSBtZS5kYXRhO1xuICAgICAgICAgICAgICAgIGRlbGF5U2VsZWN0aW9uID0gNTAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB0b2RvOiBodHRwczovL2dpdGh1Yi5jb20vbmVvbWpzL25lby9pc3N1ZXMvNDgzXG4gICAgICAgICAgICAvLyBxdWljayBoYWNrLiBzZWxlY3Rpb25Nb2RlbHMgdXBkYXRlIHRoZSB2ZG9tIG9mIHRoZSB0YWJsZS5Db250YWluZXIuXG4gICAgICAgICAgICAvLyBpZiB0YWJsZS5WaWV3IGlzIHZkb20gdXBkYXRpbmcsIHRoaXMgY2FuIHJlc3VsdCBpbiBhIDJ4IHJlbmRlcmluZyBvZiBhbGwgcm93cy5cbiAgICAgICAgICAgIGlmIChkZWxheVNlbGVjdGlvbiA9PT0gMTAwMCAmJiBhY3RpdmVWaWV3Lm50eXBlID09PSAndGFibGUtY29udGFpbmVyJykge1xuICAgICAgICAgICAgICAgIGRlbGF5U2VsZWN0aW9uID0gMjAwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFjdGl2ZVZpZXcubnR5cGUgPT09ICdjb3ZpZC13b3JsZC1tYXAnICYmIG1lLmRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW1lLndvcmxkTWFwSGFzRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVWaWV3LmxvYWREYXRhKG1lLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBtZS53b3JsZE1hcEhhc0RhdGEgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdG9kbzogaW5zdGVhZCBvZiBhIHRpbWVvdXQgdGhpcyBzaG91bGQgYWRkIGEgc3RvcmUgbG9hZCBsaXN0ZW5lciAoc2luZ2xlOiB0cnVlKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG1lLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50cnlGaWVsZC52YWx1ZSA9IGNvdW50cnk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jb3VudHJ5ID0gJ2FsbCc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aXZlVmlldy5udHlwZSA9PT0gJ2dhbGxlcnknIHx8IG1lLmNvbm5lY3RlZEFwcHMuaW5jbHVkZXMoJ1NoYXJlZENvdmlkR2FsbGVyeScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRyeSAmJiAhbWUuZ2FsbGVyeVZpZXcuc2VsZWN0aW9uTW9kZWwuaXNTZWxlY3RlZChjb3VudHJ5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLmdhbGxlcnlWaWV3LnNlbGVjdGlvbk1vZGVsLnNlbGVjdChjb3VudHJ5LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aXZlVmlldy5udHlwZSA9PT0gJ2hlbGl4JyB8fCBtZS5jb25uZWN0ZWRBcHBzLmluY2x1ZGVzKCdTaGFyZWRDb3ZpZEhlbGl4JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3VudHJ5ICYmICFtZS5oZWxpeFZpZXcuc2VsZWN0aW9uTW9kZWwuaXNTZWxlY3RlZChjb3VudHJ5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLmhlbGl4Vmlldy5zZWxlY3Rpb25Nb2RlbC5zZWxlY3QoY291bnRyeSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLmhlbGl4Vmlldy5vbktleURvd25TcGFjZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICgoYWN0aXZlVmlldy5udHlwZSA9PT0gJ21hcGJveGdsJyB8fCBtZS5jb25uZWN0ZWRBcHBzLmluY2x1ZGVzKCdTaGFyZWRDb3ZpZE1hcCcpKSAmJiBtZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1lLm1hcGJveGdsTWFwSGFzRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLm1hcEJveFZpZXcuZGF0YSA9IG1lLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUubWFwYm94Z2xNYXBIYXNEYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lLmNvdW50cnlSZWNvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWluQ29udGFpbmVyQ29udHJvbGxlci5zZWxlY3RNYXBib3hHbENvdW50cnkobWUubWFwQm94VmlldywgbWUudGFibGVWaWV3LnN0b3JlLmdldChjb3VudHJ5KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLm1hcEJveFZpZXcuYXV0b1Jlc2l6ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZVZpZXcubnR5cGUgPT09ICd0YWJsZS1jb250YWluZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA9IHNlbGVjdGlvbk1vZGVsLmdldFJvd0lkKGFjdGl2ZVZpZXcuc3RvcmUuaW5kZXhPZihjb3VudHJ5KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLmdldFJlZmVyZW5jZSgndGFibGUtY29udGFpbmVyJykuZmlyZSgnY291bnRyeVNlbGVjdCcsIHtyZWNvcmQ6IGFjdGl2ZVZpZXcuc3RvcmUuZ2V0KGNvdW50cnkpfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3VudHJ5ICYmICFzZWxlY3Rpb25Nb2RlbC5pc1NlbGVjdGVkKGlkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbk1vZGVsLnNlbGVjdChpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLnNjcm9sbFRvVGFibGVSb3coe2lkOiBpZH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZGVsYXlTZWxlY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuZmlyc3RIYXNoQ2hhbmdlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkxvYWRTdW1tYXJ5RGF0YUZhaWwoKSB7XG4gICAgICAgIGNvbnN0IHRhYmxlID0gdGhpcy5nZXRSZWZlcmVuY2UoJ3RhYmxlJyksXG4gICAgICAgICAgICAgIHZkb20gPSB0YWJsZS52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMF0uY25bMV0uY24ucHVzaCh7XG4gICAgICAgICAgICB0YWcgIDogJ2RpdicsXG4gICAgICAgICAgICBjbHMgIDogWyduZW8tYm94LWxhYmVsJywgJ25lby1sYWJlbCddLFxuICAgICAgICAgICAgaHRtbCA6IFtcbiAgICAgICAgICAgICAgICAnU3VtbWFyeSBkYXRhIGRpZCBub3QgYXJyaXZlIGFmdGVyIDJzLjwvYnI+JyxcbiAgICAgICAgICAgICAgICAnUGxlYXNlIGRvdWJsZS1jaGVjayBpZiB0aGUgQVBJIGlzIG9mZmxpbmU6PC9icj48L2JyPicsXG4gICAgICAgICAgICAgICAgJzxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2Rpc2Vhc2Uuc2gvYWxsXCI+Tm92ZWxDT1ZJRC9BUEkgYWxsIGVuZHBvaW50PC9hPjwvYnI+PC9icj4nLFxuICAgICAgICAgICAgICAgICdhbmQgaWYgc28gcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nXG4gICAgICAgICAgICBdLmpvaW4oJycpLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcyMHB4J1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0YWJsZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uTWFpblZpZXdNb3VudGVkKCkge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmFkZFNjcmlwdCh7XG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgIGRlZmVyOiB0cnVlLFxuICAgICAgICAgICAgc3JjICA6ICdodHRwczovL2J1dHRvbnMuZ2l0aHViLmlvL2J1dHRvbnMuanMnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmdldFJlZmVyZW5jZSgnZ2FsbGVyeScpLm9uKCdzZWxlY3QnLCBtZS51cGRhdGVDb3VudHJ5RmllbGQsIG1lKTtcbiAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdoZWxpeCcpICAub24oJ3NlbGVjdCcsIG1lLnVwZGF0ZUNvdW50cnlGaWVsZCwgbWUpO1xuXG4gICAgICAgIG1lLmdldFJlZmVyZW5jZSgndGFibGUnKS5vbih7XG4gICAgICAgICAgICBkZXNlbGVjdDogbWUuY2xlYXJDb3VudHJ5RmllbGQsXG4gICAgICAgICAgICBzZWxlY3QgIDogbWUudXBkYXRlQ291bnRyeUZpZWxkLFxuICAgICAgICAgICAgc2NvcGUgICA6IG1lXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25SZWxvYWREYXRhQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgICAgIHRoaXMubG9hZFN1bW1hcnlEYXRhKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvblJlbW92ZUZvb3RlckJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgY29uc3QgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgYWN0aXZlVGFiID0gbWUuZ2V0UmVmZXJlbmNlKCd0YWItY29udGFpbmVyJykuZ2V0QWN0aXZlQ2FyZCgpO1xuXG4gICAgICAgIG1lLnZpZXcucmVtb3ZlKG1lLmdldFJlZmVyZW5jZSgnZm9vdGVyJyksIHRydWUpO1xuXG4gICAgICAgIGlmIChhY3RpdmVUYWIubnR5cGUgPT09ICdjb3ZpZC1tYXBib3hnbC1jb250YWluZXInKSB7XG4gICAgICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ21hcGJveGdsbWFwJykuYXV0b1Jlc2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvblN3aXRjaFRoZW1lQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYnV0dG9uICAgPSBkYXRhLmNvbXBvbmVudCxcbiAgICAgICAgICAgIGxvZ28gICAgID0gbWUuZ2V0UmVmZXJlbmNlKCdsb2dvJyksXG4gICAgICAgICAgICBsb2dvUGF0aCA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbmVvbWpzL3BhZ2VzL21hc3Rlci9yZXNvdXJjZXMvaW1hZ2VzL2FwcHMvY292aWQvJyxcbiAgICAgICAgICAgIHZkb20gICAgID0gbG9nby52ZG9tLFxuICAgICAgICAgICAgdmlldyAgICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgYnV0dG9uVGV4dCwgY2xzLCBocmVmLCBpY29uQ2xzLCBtYXBWaWV3LCBtYXBWaWV3U3R5bGUsIHRoZW1lO1xuXG4gICAgICAgIGlmIChtZS5jb25uZWN0ZWRBcHBzLmluY2x1ZGVzKCdTaGFyZWRDb3ZpZE1hcCcpKSB7XG4gICAgICAgICAgICBtYXBWaWV3ID0gbWUuZ2V0TWFpblZpZXcoJ1NoYXJlZENvdmlkTWFwJykuaXRlbXNbMF0uaXRlbXNbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXBWaWV3ID0gbWUuZ2V0UmVmZXJlbmNlKCdtYXBib3hnbG1hcCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJ1dHRvbi50ZXh0ID09PSAnVGhlbWUgTGlnaHQnKSB7XG4gICAgICAgICAgICBidXR0b25UZXh0ICAgPSAnVGhlbWUgRGFyayc7XG4gICAgICAgICAgICBocmVmICAgICAgICAgPSAnLi4vZGlzdC9kZXZlbG9wbWVudC9uZW8tdGhlbWUtbGlnaHQtbm8tY3NzNC5jc3MnO1xuICAgICAgICAgICAgaWNvbkNscyAgICAgID0gJ2ZhIGZhLW1vb24nO1xuICAgICAgICAgICAgbWFwVmlld1N0eWxlID0gbWFwVmlldy5tYXBib3hTdHlsZUxpZ2h0O1xuICAgICAgICAgICAgdGhlbWUgICAgICAgID0gJ25lby10aGVtZS1saWdodCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidXR0b25UZXh0ICAgPSAnVGhlbWUgTGlnaHQnO1xuICAgICAgICAgICAgaHJlZiAgICAgICAgID0gJy4uL2Rpc3QvZGV2ZWxvcG1lbnQvbmVvLXRoZW1lLWRhcmstbm8tY3NzNC5jc3MnO1xuICAgICAgICAgICAgaWNvbkNscyAgICAgID0gJ2ZhIGZhLXN1bic7XG4gICAgICAgICAgICBtYXBWaWV3U3R5bGUgPSBtYXBWaWV3Lm1hcGJveFN0eWxlRGFyaztcbiAgICAgICAgICAgIHRoZW1lICAgICAgICA9ICduZW8tdGhlbWUtZGFyayc7XG4gICAgICAgIH1cblxuICAgICAgICB2ZG9tLnNyYyA9IGxvZ29QYXRoICsgKHRoZW1lID09PSAnbmVvLXRoZW1lLWRhcmsnID8gJ2NvdmlkX2xvZ29fZGFyay5qcGcnIDogJ2NvdmlkX2xvZ29fbGlnaHQuanBnJyk7XG4gICAgICAgIGxvZ28udmRvbSA9IHZkb207XG5cblxuICAgICAgICBpZiAoTmVvLmNvbmZpZy51c2VDc3M0KSB7XG4gICAgICAgICAgICBbdmlldy5hcHBOYW1lLCAuLi5tZS5jb25uZWN0ZWRBcHBzXS5mb3JFYWNoKGFwcE5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIHZpZXcgPSBtZS5nZXRNYWluVmlldyhhcHBOYW1lKTtcblxuICAgICAgICAgICAgICAgIGNscyA9IFsuLi52aWV3LmNsc107XG5cbiAgICAgICAgICAgICAgICB2aWV3LmNscy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pbmNsdWRlcygnbmVvLXRoZW1lJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsIGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBOZW9BcnJheS5hZGQoY2xzLCB0aGVtZSk7XG4gICAgICAgICAgICAgICAgdmlldy5jbHMgPSBjbHM7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYnV0dG9uLnNldCh7XG4gICAgICAgICAgICAgICAgaWNvbkNsczogaWNvbkNscyxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgOiBidXR0b25UZXh0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFt2aWV3LmFwcE5hbWUsIC4uLm1lLmNvbm5lY3RlZEFwcHNdLmZvckVhY2goYXBwTmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgTmVvLm1haW4uYWRkb24uU3R5bGVzaGVldC5zd2FwU3R5bGVTaGVldCh7XG4gICAgICAgICAgICAgICAgICAgIGFwcE5hbWU6IGFwcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGhyZWYgICA6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgIGlkICAgICA6ICduZW8tdGhlbWUnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbi5zZXQoe1xuICAgICAgICAgICAgaWNvbkNsczogaWNvbkNscyxcbiAgICAgICAgICAgIHRleHQgICA6IGJ1dHRvblRleHRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWFwVmlldy5tYXBib3hTdHlsZSA9IG1hcFZpZXdTdHlsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uV2luZG93Q2hhcnRNYXhpbWl6ZUJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVQb3B1cFdpbmRvdygnY29udHJvbHMtcGFuZWwnLCAnc2hhcmVkY292aWRjaGFydCcsICdTaGFyZWRDb3ZpZENoYXJ0Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbldpbmRvd0dhbGxlcnlNYXhpbWl6ZUJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVQb3B1cFdpbmRvdygnZ2FsbGVyeS1jb250YWluZXInLCAnc2hhcmVkY292aWRnYWxsZXJ5JywgJ1NoYXJlZENvdmlkR2FsbGVyeScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25XaW5kb3dIZWxpeE1heGltaXplQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmNyZWF0ZVBvcHVwV2luZG93KCdoZWxpeC1jb250YWluZXInLCAnc2hhcmVkY292aWRoZWxpeCcsICdTaGFyZWRDb3ZpZEhlbGl4Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbldpbmRvd01hcE1heGltaXplQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmNyZWF0ZVBvcHVwV2luZG93KCdtYXBib3gtZ2wtY29udGFpbmVyJywgJ3NoYXJlZGNvdmlkbWFwJywgJ1NoYXJlZENvdmlkTWFwJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmlld1xuICAgICAqIEBwYXJhbSByZWNvcmRcbiAgICAgKi9cbiAgICBzdGF0aWMgc2VsZWN0TWFwYm94R2xDb3VudHJ5KHZpZXcsIHJlY29yZCkge2NvbnNvbGUubG9nKHJlY29yZC5jb3VudHJ5SW5mby5pc28yKTtcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL25lb21qcy9uZW8vaXNzdWVzLzQ5MFxuICAgICAgICAvLyB0aGVyZSBhcmUgbWlzc2luZyBpc28yJjMgdmFsdWVzIG9uIG5hdHVyYWwgZWFydGggdmVjdG9yXG4gICAgICAgIGNvbnN0IG1hcCA9IHtcbiAgICAgICAgICAgIEZSQSAgICA6IFsnbWF0Y2gnLCBbJ2dldCcsICdOQU1FJ10sIFsnRnJhbmNlJ10sIHRydWUsIGZhbHNlXSxcbiAgICAgICAgICAgIE5PUiAgICA6IFsnbWF0Y2gnLCBbJ2dldCcsICdOQU1FJ10sIFsnTm9yd2F5J10sIHRydWUsIGZhbHNlXSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFsnbWF0Y2gnLCBbJ2dldCcsICdJU09fQTMnXSwgW3JlY29yZC5jb3VudHJ5SW5mby5pc28zXSwgdHJ1ZSwgZmFsc2VdXG4gICAgICAgIH07XG5cbiAgICAgICAgdmlldy5zZXRGaWx0ZXIoe1xuICAgICAgICAgICAgbGF5ZXJJZDogJ25lLTEwbS1hZG1pbi0wLWNvdW50cmllcy00czdydmYnLFxuICAgICAgICAgICAgdmFsdWUgIDogbWFwW3JlY29yZC5jb3VudHJ5SW5mby5pc28zXSB8fCBtYXBbJ2RlZmF1bHQnXVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHZpZXcuZmx5VG8oe1xuICAgICAgICAgICAgbGF0OiByZWNvcmQuY291bnRyeUluZm8ubGF0LFxuICAgICAgICAgICAgbG5nOiByZWNvcmQuY291bnRyeUluZm8ubG9uZ1xuICAgICAgICB9KTtcblxuICAgICAgICB2aWV3Lnpvb20gPSA1OyAvLyB0b2RvOiB3ZSBjb3VsZCB1c2UgYSBkaWZmZXJlbnQgdmFsdWUgZm9yIGJpZyBjb3VudHJpZXMgKFJ1c3NpYSwgVVNBLC4uLilcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEucmVjb3JkXG4gICAgICovXG4gICAgdXBkYXRlQ291bnRyeUZpZWxkKGRhdGEpIHtcbiAgICAgICAgTmVvLk1haW4uZWRpdFJvdXRlKHtcbiAgICAgICAgICAgIGNvdW50cnk6IGRhdGEucmVjb3JkLmNvdW50cnlcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyQ29udHJvbGxlcik7XG5cbmV4cG9ydCB7TWFpbkNvbnRhaW5lckNvbnRyb2xsZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENoZWNrQm94ICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvZm9ybS9maWVsZC9DaGVja0JveC5tanMnO1xuaW1wb3J0IENvbnRhaW5lciAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBIaXN0b3JpY2FsRGF0YVRhYmxlICAgICAgZnJvbSAnLi9jb3VudHJ5L0hpc3RvcmljYWxEYXRhVGFibGUubWpzJztcbmltcG9ydCBMaW5lQ2hhcnRDb21wb25lbnQgICAgICAgZnJvbSAnLi9jb3VudHJ5L0xpbmVDaGFydENvbXBvbmVudC5tanMnXG5pbXBvcnQgUGFuZWwgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9jb250YWluZXIvUGFuZWwubWpzJztcbmltcG9ydCBUYWJDb250YWluZXIgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL3RhYi9Db250YWluZXIubWpzJztcbmltcG9ydCBUYWJsZSAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9jb3VudHJ5L1RhYmxlLm1qcyc7XG5pbXBvcnQgVGFibGVDb250YWluZXJDb250cm9sbGVyIGZyb20gJy4vVGFibGVDb250YWluZXJDb250cm9sbGVyLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFNoYXJlZENvdmlkLnZpZXcuVGFibGVDb250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBUYWJsZUNvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1NoYXJlZENvdmlkLnZpZXcuVGFibGVDb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1NoYXJlZENvdmlkLnZpZXcuVGFibGVDb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXV0b01vdW50PXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGF1dG9Nb3VudDogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb250cm9sbGVyLkNvbXBvbmVudHxudWxsfSBjb250cm9sbGVyPVRhYmxlQ29udGFpbmVyQ29udHJvbGxlclxuICAgICAgICAgKi9cbiAgICAgICAgY29udHJvbGxlcjogVGFibGVDb250YWluZXJDb250cm9sbGVyLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBoaXN0b3J5UGFuZWxXaWR0aD01MjBcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaGlzdG9yeVBhbmVsV2lkdGg6IDUyMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby50YWJsZS5Db250YWluZXJ8bnVsbH0gdGFibGU9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdGFibGU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gdGFibGVDb25maWc9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdGFibGVDb25maWc6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gbGF5b3V0PXtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgICAgICAgKi9cbiAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXXxudWxsfSBpdGVtc1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgZmxleCAgOiAxLFxuICAgICAgICAgICAgbGF5b3V0OiAnZml0JyxcbiAgICAgICAgICAgIGl0ZW1zIDogW11cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgOiBQYW5lbCxcbiAgICAgICAgICAgIGNscyAgICAgIDogWyduZW8tY29uZmlndXJhdGlvbi1wYW5lbCcsICduZW8tcGFuZWwnLCAnbmVvLWNvbnRhaW5lciddLFxuICAgICAgICAgICAgbGF5b3V0ICAgOiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgICAgICByZWZlcmVuY2U6ICdjb250cm9scy1wYW5lbCcsXG4gICAgICAgICAgICBzdHlsZSAgICA6IHtiYWNrZ3JvdW5kQ29sb3I6ICcjMmIyYjJiJ30sXG4gICAgICAgICAgICB3aWR0aCAgICA6ICdAY29uZmlnOmhpc3RvcnlQYW5lbFdpZHRoJyxcblxuICAgICAgICAgICAgY29udGFpbmVyQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgZmxleCA6IG51bGwsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtvdmVyZmxvd1k6ICdzY3JvbGwnfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaGVhZGVyczogW3tcbiAgICAgICAgICAgICAgICBkb2NrOiAndG9wJyxcbiAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvbkNvbGxhcHNlQnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnWCdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlICAgIDogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAnaGlzdG9yaWNhbC1kYXRhLWxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnSGlzdG9yaWNhbCBEYXRhJ1xuICAgICAgICAgICAgICAgIH0sICctPicsIHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvbjUyMHB4QnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgOiAyNCxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJzUyMHB4J1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvbjgwMHB4QnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgOiAyNCxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJzgwMHB4J1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvbldpbmRvd0NoYXJ0TWF4aW1pemVCdXR0b25DbGljaycsXG4gICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYXIgZmEtd2luZG93LW1heGltaXplJ1xuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XSxcblxuICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgbW9kdWxlOiBUYWJDb250YWluZXIsXG4gICAgICAgICAgICAgICAgc3R5bGUgOiB7bWFyZ2luVG9wOiAnMTBweCd9LFxuICAgICAgICAgICAgICAgIGl0ZW1zIDogW3tcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG50eXBlOiAndG9vbGJhcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4IDogJzAgMSBhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZSAgICA6IENoZWNrQm94LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQgICA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0IDogJ0xvZ2FyaXRobWljIFNjYWxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFdpZHRoOiAxMzUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlIDogJ2xvZ2FyaXRobWljLXNjYWxlLWNoZWNrYm94JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogJ29uTG9nYXJpdGhtaWNTY2FsZUNoYW5nZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlICAgIDogQ2hlY2tCb3gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0IDogJ0RhaWx5IFZhbHVlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgICAgIDoge21hcmdpbkxlZnQ6ICczMHB4J30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxXaWR0aDogOTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6ICdvbkRhaWx5VmFsdWVzQ2hhbmdlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZSAgIDogTGluZUNoYXJ0Q29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleCAgICAgOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAnbGluZS1jaGFydCcsXG4gICAgICAgICAgICAgICAgICAgIH1dLFxuXG4gICAgICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWNoYXJ0LWxpbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ0NoYXJ0J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1dXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5oaXN0b3JpY2FsRGF0YVRhYmxlID0gTmVvLmNyZWF0ZSh7XG4gICAgICAgICAgICBtb2R1bGUgICA6IEhpc3RvcmljYWxEYXRhVGFibGUsXG4gICAgICAgICAgICByZWZlcmVuY2U6ICdoaXN0b3JpY2FsLWRhdGEtdGFibGUnLFxuXG4gICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtdGFibGUnLFxuICAgICAgICAgICAgICAgIHRleHQgICA6ICdUYWJsZSdcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC4uLm1lLmhpc3RvcmljYWxEYXRhVGFibGVDb25maWcgfHwge31cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuaXRlbXNbMV0uaXRlbXNbMF0uaXRlbXMucHVzaChtZS5oaXN0b3JpY2FsRGF0YVRhYmxlKTtcblxuICAgICAgICBtZS50YWJsZSA9IE5lby5jcmVhdGUoe1xuICAgICAgICAgICAgbW9kdWxlICAgOiBUYWJsZSxcbiAgICAgICAgICAgIHJlZmVyZW5jZTogJ3RhYmxlJyxcbiAgICAgICAgICAgIC4uLm1lLnRhYmxlQ29uZmlnIHx8IHt9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLml0ZW1zWzBdLml0ZW1zLnB1c2gobWUudGFibGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgc3RvcmVSZWZlcmVuY2VzKCkge1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuc3RvcmVSZWZlcmVuY2VzKCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhUYWJsZUNvbnRhaW5lcik7XG5cbmV4cG9ydCB7VGFibGVDb250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbXBvbmVudENvbnRyb2xsZXIgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXIvQ29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvdXRpbC9BcnJheS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBTaGFyZWRDb3ZpZC52aWV3LlRhYmxlQ29udGFpbmVyQ29udHJvbGxlclxuICogQGV4dGVuZHMgTmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50XG4gKi9cbmNsYXNzIFRhYmxlQ29udGFpbmVyQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdTaGFyZWRDb3ZpZC52aWV3LlRhYmxlQ29udGFpbmVyQ29udHJvbGxlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnU2hhcmVkQ292aWQudmlldy5UYWJsZUNvbnRhaW5lckNvbnRyb2xsZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBhcGlCYXNlVXJsPSdodHRwczovL2Rpc2Vhc2Uuc2gvJ1xuICAgICAgICAgKi9cbiAgICAgICAgYXBpQmFzZVVybDogJ2h0dHBzOi8vZGlzZWFzZS5zaC8nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBhcGlIaXN0b3JpY2FsRGF0YUVuZHBvaW50PSdoaXN0b3JpY2FsJ1xuICAgICAgICAgKi9cbiAgICAgICAgYXBpSGlzdG9yaWNhbERhdGFFbmRwb2ludDogJ3YyL2hpc3RvcmljYWwvJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE51bWJlciBvZiBkYXlzIHlvdSB3YW50IHRoZSBkYXRhIHRvIGdvIGJhY2sgdG8uIERlZmF1bHQgaXMgMzAuIFVzZSBhbGwgZm9yIGZ1bGwgZGF0YSBzZXQuIEV4OiAxNSwgYWxsLCAyNFxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8U3RyaW5nfSBhcGlIaXN0b3JpY2FsRGF0YVRpbWVSYW5nZT0nYWxsJ1xuICAgICAgICAgKi9cbiAgICAgICAgYXBpSGlzdG9yaWNhbERhdGFUaW1lUmFuZ2U6ICdhbGwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIGFsbCByZWNvcmRzIHdpdGggMCBjYXNlcyBmcm9tIHRoZSBoaXN0b3JpY2FsIGRhdGEgKHRhYmxlICYgY2hhcnQpXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJlbW92ZUVtcHR5UmVjb3Jkcz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICByZW1vdmVFbXB0eVJlY29yZHM6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHNlbGVjdGVkUmVjb3JkPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHNlbGVjdGVkUmVjb3JkOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLnRhYmxlLkNvbnRhaW5lcnxudWxsfSB0YWJsZV89bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB0YWJsZV86IG51bGxcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLnZpZXcub24oJ2NvdW50cnlTZWxlY3QnLCBtZS5vblRhYmxlU2VsZWN0LCBtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIGFkZFN0b3JlSXRlbXMoZGF0YSkge1xuICAgICAgICBjb25zdCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICBkYXRhQXJyYXkgPSBbXSxcbiAgICAgICAgICAgICAgbWFwICAgICAgID0ge307XG5cbiAgICAgICAgbGV0IHRpbWVsaW5lICA9IGRhdGEgJiYgZGF0YS50aW1lbGluZSxcbiAgICAgICAgICAgIG5leHRJdGVtO1xuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Ob3ZlbENPVklEL0FQSS9pc3N1ZXMvMzA5IC8vIGRpZmZlcmVudCBmb3JtYXQgZm9yICdhbGwnXG4gICAgICAgIGlmIChkYXRhICYmICFkYXRhLnRpbWVsaW5lKSB7XG4gICAgICAgICAgICB0aW1lbGluZSA9IGRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGltZWxpbmUpIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRpbWVsaW5lLmNhc2VzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBtYXBba2V5XSA9IHtkYXRlOiBuZXcgRGF0ZShrZXkpLnRvSVNPU3RyaW5nKCksIGNhc2VzOiB2YWx1ZX07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGltZWxpbmUuZGVhdGhzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobWFwLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFwW2tleV0uZGVhdGhzID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFwW2tleV0gPSB7ZGF0ZTogbmV3IERhdGUoa2V5KS50b0lTT1N0cmluZygpLCBkZWF0aHM6IHZhbHVlfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHRpbWVsaW5lLmhhc093blByb3BlcnR5KCdyZWNvdmVyZWQnKSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRpbWVsaW5lLnJlY292ZXJlZCkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwW2tleV0ucmVjb3ZlcmVkID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBba2V5XSA9IHtkYXRlOiBuZXcgRGF0ZShrZXkpLnRvSVNPU3RyaW5nKCksIHJlY292ZXJlZDogdmFsdWV9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG1hcCkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFsdWUuYWN0aXZlID0gdmFsdWUuY2FzZXMgLSB2YWx1ZS5kZWF0aHMgLSB2YWx1ZS5yZWNvdmVyZWQ7XG4gICAgICAgICAgICAgICAgZGF0YUFycmF5LnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChtZS5yZW1vdmVFbXB0eVJlY29yZHMpIHtcbiAgICAgICAgICAgICAgICBbLi4uZGF0YUFycmF5XS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5jYXNlcyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGRhdGFBcnJheSwgaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdGhlIGFycmF5IGlzIHNvcnRlZCBieSBkYXRlIEFTQ1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhQXJyYXlbMF0sIHtcbiAgICAgICAgICAgICAgICBkYWlseUFjdGl2ZSAgIDogZGF0YUFycmF5WzBdLmFjdGl2ZSxcbiAgICAgICAgICAgICAgICBkYWlseUNhc2VzICAgIDogZGF0YUFycmF5WzBdLmNhc2VzLFxuICAgICAgICAgICAgICAgIGRhaWx5RGVhdGhzICAgOiBkYXRhQXJyYXlbMF0uZGVhdGhzLFxuICAgICAgICAgICAgICAgIGRhaWx5UmVjb3ZlcmVkOiBkYXRhQXJyYXlbMF0ucmVjb3ZlcmVkXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZGF0YUFycmF5LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgbmV4dEl0ZW0gPSBkYXRhQXJyYXlbaW5kZXggKyAxXTtcblxuICAgICAgICAgICAgICAgIGlmIChuZXh0SXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKG5leHRJdGVtLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYWlseUFjdGl2ZSAgIDogbmV4dEl0ZW0uYWN0aXZlICAgIC0gaXRlbS5hY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYWlseUNhc2VzICAgIDogbmV4dEl0ZW0uY2FzZXMgICAgIC0gaXRlbS5jYXNlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhaWx5RGVhdGhzICAgOiBuZXh0SXRlbS5kZWF0aHMgICAgLSBpdGVtLmRlYXRocyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhaWx5UmVjb3ZlcmVkOiBuZXh0SXRlbS5yZWNvdmVyZWQgLSBpdGVtLnJlY292ZXJlZFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gdG9kbzogd2UgY291bGQgb25seSB1cGRhdGUgdGhlIGFjdGl2ZSB0YWJcbiAgICAgICAgICAgIG1lLmdldFJlZmVyZW5jZSgnaGlzdG9yaWNhbC1kYXRhLXRhYmxlJykuc3RvcmUuZGF0YSA9IGRhdGFBcnJheTtcbiAgICAgICAgICAgIG1lLnVwZGF0ZUxpbmVDaGFydChkYXRhQXJyYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjb3JkXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgc3RhdGljIGFzc2lnbkZpZWxkc09yTnVsbChyZWNvcmQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjdGl2ZSAgICAgICAgOiByZWNvcmQuYWN0aXZlICAgICAgICAgfHwgbnVsbCxcbiAgICAgICAgICAgIGNhc2VzICAgICAgICAgOiByZWNvcmQuY2FzZXMgICAgICAgICAgfHwgbnVsbCxcbiAgICAgICAgICAgIGRlYXRocyAgICAgICAgOiByZWNvcmQuZGVhdGhzICAgICAgICAgfHwgbnVsbCxcbiAgICAgICAgICAgIGRhaWx5QWN0aXZlICAgOiByZWNvcmQuZGFpbHlBY3RpdmUgICAgfHwgbnVsbCxcbiAgICAgICAgICAgIGRhaWx5Q2FzZXMgICAgOiByZWNvcmQuZGFpbHlDYXNlcyAgICAgfHwgbnVsbCxcbiAgICAgICAgICAgIGRhaWx5RGVhdGhzICAgOiByZWNvcmQuZGFpbHlEZWF0aHMgICAgfHwgbnVsbCxcbiAgICAgICAgICAgIGRhaWx5UmVjb3ZlcmVkOiByZWNvcmQuZGFpbHlSZWNvdmVyZWQgfHwgbnVsbCxcbiAgICAgICAgICAgIHJlY292ZXJlZCAgICAgOiByZWNvcmQucmVjb3ZlcmVkICAgICAgfHwgbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCB3aGVuIGFjY2Vzc2luZyB0aGUgdGFibGUgY29uZmlnXG4gICAgICogQHBhcmFtIHtOZW8udGFibGUuQ29udGFpbmVyfG51bGx9IHZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZUdldFRhYmxlKHZhbHVlKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3RhYmxlID0gdmFsdWUgPSB0aGlzLmdldFJlZmVyZW5jZSgndGFibGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb3VudHJ5TmFtZVxuICAgICAqL1xuICAgIGxvYWRIaXN0b3JpY2FsRGF0YShjb3VudHJ5TmFtZSkge1xuICAgICAgICBjb25zdCBtZSAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgYXBpUGF0aCA9IG1lLmFwaUJhc2VVcmwgKyBtZS5hcGlIaXN0b3JpY2FsRGF0YUVuZHBvaW50ICsgY291bnRyeU5hbWUgKyAnP2xhc3RkYXlzPScgKyBtZS5hcGlIaXN0b3JpY2FsRGF0YVRpbWVSYW5nZTtcblxuICAgICAgICBmZXRjaChhcGlQYXRoKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBtZS5hZGRTdG9yZUl0ZW1zKGRhdGEpKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnQ2Fu4oCZdCBhY2Nlc3MgJyArIGFwaVBhdGgsIGVycikpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbjUyMHB4QnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmdldFJlZmVyZW5jZSgnY29udHJvbHMtcGFuZWwnKS53aWR0aCA9IDUyMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb244MDBweEJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5nZXRSZWZlcmVuY2UoJ2NvbnRyb2xzLXBhbmVsJykud2lkdGggPSA4MDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uQ29sbGFwc2VCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIGNvbnN0IHBhbmVsICA9IHRoaXMuZ2V0UmVmZXJlbmNlKCdjb250cm9scy1wYW5lbCcpLFxuICAgICAgICAgICAgICBleHBhbmQgPSBwYW5lbC53aWR0aCA9PT0gNDA7XG5cbiAgICAgICAgcGFuZWwud2lkdGggPSBleHBhbmQgPyB0aGlzLnZpZXcuaGlzdG9yeVBhbmVsV2lkdGggOiA0MDtcblxuICAgICAgICBkYXRhLmNvbXBvbmVudC50ZXh0ID0gZXhwYW5kID8gJ1gnIDogJysnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkRhaWx5VmFsdWVzQ2hhbmdlKGRhdGEpIHtcbiAgICAgICAgY29uc3QgY2hhcnRJZCAgICAgPSB0aGlzLmdldFJlZmVyZW5jZSgnbGluZS1jaGFydCcpLmlkLFxuICAgICAgICAgICAgICBsb2dDaGVja2JveCA9IHRoaXMuZ2V0UmVmZXJlbmNlKCdsb2dhcml0aG1pYy1zY2FsZS1jaGVja2JveCcpLFxuICAgICAgICAgICAgICB2YWx1ZSAgICAgICA9IGRhdGEudmFsdWU7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsb2dDaGVja2JveC5zZXQoe1xuICAgICAgICAgICAgICAgIGNoZWNrZWQgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZGF0YS52YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2dDaGVja2JveC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvLm1haW4uYWRkb24uQW1DaGFydHMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgICAgICBhcHBOYW1lICAgOiB0aGlzLnZpZXcuYXBwTmFtZSxcbiAgICAgICAgICAgIGlkICAgICAgICA6IGNoYXJ0SWQsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgJ3Nlcmllcy52YWx1ZXMuMC5kYXRhRmllbGRzLnZhbHVlWScgOiB2YWx1ZSA/ICdkYWlseUFjdGl2ZScgICAgOiAnYWN0aXZlJyxcbiAgICAgICAgICAgICAgICAnc2VyaWVzLnZhbHVlcy4xLmRhdGFGaWVsZHMudmFsdWVZJyA6IHZhbHVlID8gJ2RhaWx5Q2FzZXMnICAgICA6ICdjYXNlcycsXG4gICAgICAgICAgICAgICAgJ3Nlcmllcy52YWx1ZXMuMi5kYXRhRmllbGRzLnZhbHVlWScgOiB2YWx1ZSA/ICdkYWlseURlYXRocycgICAgOiAnZGVhdGhzJyxcbiAgICAgICAgICAgICAgICAnc2VyaWVzLnZhbHVlcy4zLmRhdGFGaWVsZHMudmFsdWVZJyA6IHZhbHVlID8gJ2RhaWx5UmVjb3ZlcmVkJyA6ICdyZWNvdmVyZWQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIE5lby5tYWluLmFkZG9uLkFtQ2hhcnRzLmNhbGxNZXRob2Qoe1xuICAgICAgICAgICAgYXBwTmFtZTogbG9nQ2hlY2tib3guYXBwTmFtZSxcbiAgICAgICAgICAgIGlkICAgICA6IGNoYXJ0SWQsXG4gICAgICAgICAgICBwYXRoICAgOiAnaW52YWxpZGF0ZURhdGEnXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkxvZ2FyaXRobWljU2NhbGVDaGFuZ2UoZGF0YSkge1xuICAgICAgICBjb25zdCBsaW5lQ2hhcnQgPSB0aGlzLmdldFJlZmVyZW5jZSgnbGluZS1jaGFydCcpO1xuXG4gICAgICAgIE5lby5tYWluLmFkZG9uLkFtQ2hhcnRzLnNldFByb3BlcnR5KHtcbiAgICAgICAgICAgIGFwcE5hbWU6IGxpbmVDaGFydC5hcHBOYW1lLFxuICAgICAgICAgICAgaWQgICAgIDogbGluZUNoYXJ0LmlkLFxuICAgICAgICAgICAgcGF0aCAgIDogJ3lBeGVzLnZhbHVlcy4wLmxvZ2FyaXRobWljJyxcbiAgICAgICAgICAgIHZhbHVlICA6IGRhdGEudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge09iamVjdH0gZGF0YVxuICAgICAqIHtPYmplY3R9IGRhdGEucmVjb3JkXG4gICAgICovXG4gICAgb25UYWJsZVNlbGVjdChkYXRhKSB7XG4gICAgICAgIGNvbnN0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICByZWNvcmQgID0gZGF0YS5yZWNvcmQ7XG5cbiAgICAgICAgaWYgKGRhdGEucmVjb3JkKSB7XG4gICAgICAgICAgICBtZS5zZWxlY3RlZFJlY29yZCA9IHsuLi5yZWNvcmR9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUuc2VsZWN0ZWRSZWNvcmQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVtb3ZlZCBvcHRpb25hbCBjaGFpbmluZyBmb3Igbm93LCBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9uZW9tanMvbmVvL2lzc3Vlcy80NjdcbiAgICAgICAgbWUubG9hZEhpc3RvcmljYWxEYXRhKHJlY29yZCAmJiByZWNvcmQuY291bnRyeUluZm8gJiYgcmVjb3JkLmNvdW50cnlJbmZvLmlzbzIgfHwgJ2FsbCcpO1xuXG4gICAgICAgIG1lLmdldFJlZmVyZW5jZSgnaGlzdG9yaWNhbC1kYXRhLWxhYmVsJykuaHRtbCA9ICdIaXN0b3JpY2FsIERhdGEgKCcgKyAocmVjb3JkICYmIHJlY29yZC5jb3VudHJ5IHx8ICdXb3JsZCcpICsgJyknO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgc3RvcmVSZWZlcmVuY2VzKCkge1xuICAgICAgICB0aGlzLmdldFJlZmVyZW5jZSgnbGluZS1jaGFydCcpO1xuICAgICAgICB0aGlzLmdldFJlZmVyZW5jZSgnbG9nYXJpdGhtaWMtc2NhbGUtY2hlY2tib3gnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2dhcml0aG1pYyBBeGlzIGJyZWFrIGZvciB2YWx1ZXMgb2YgMCwgc28gd2UgbmVlZCB0byBjaGFuZ2UgdGhvc2UgdG8gbnVsbFxuICAgICAqIEFkZGluZyB0aGUgY3VycmVudCByZWNvcmQsIHNpbmNlIHRoZSBoaXN0b3JpY2FsIGRhdGEgc3RhcnRzIFwieWVzdGVyZGF5XCJcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfSBkYXRhQXJyYXlcbiAgICAgKi9cbiAgICB1cGRhdGVMaW5lQ2hhcnQoZGF0YUFycmF5KSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgcmVjb3JkID0gbWUuc2VsZWN0ZWRSZWNvcmQsXG4gICAgICAgICAgICBjaGFydCAgPSBtZS5nZXRSZWZlcmVuY2UoJ2xpbmUtY2hhcnQnKTtcblxuICAgICAgICBkYXRhQXJyYXkuZm9yRWFjaChpdGVtID0+IE9iamVjdC5hc3NpZ24oaXRlbSwgVGFibGVDb250YWluZXJDb250cm9sbGVyLmFzc2lnbkZpZWxkc09yTnVsbChpdGVtKSkpO1xuXG4gICAgICAgIGlmICghcmVjb3JkKSB7XG4gICAgICAgICAgICByZWNvcmQgPSBtZS5nZXRQYXJlbnQoKS5zdW1tYXJ5RGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZWNvcmQpIHtcbiAgICAgICAgICAgIGRhdGFBcnJheS5wdXNoKHtcbiAgICAgICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgLi4uVGFibGVDb250YWluZXJDb250cm9sbGVyLmFzc2lnbkZpZWxkc09yTnVsbChyZWNvcmQpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoYXJ0LmRhdGEgPSBkYXRhQXJyYXk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhUYWJsZUNvbnRhaW5lckNvbnRyb2xsZXIpO1xuXG5leHBvcnQge1RhYmxlQ29udGFpbmVyQ29udHJvbGxlciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQW1DaGFydENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi9zcmMvY29tcG9uZW50L3dyYXBwZXIvQW1DaGFydC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBTaGFyZWRDb3ZpZC52aWV3LldvcmxkTWFwQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LndyYXBwZXIuQW1DaGFydFxuICovXG5jbGFzcyBXb3JsZE1hcENvbXBvbmVudCBleHRlbmRzIEFtQ2hhcnRDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdTaGFyZWRDb3ZpZC52aWV3LldvcmxkTWFwQ29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdTaGFyZWRDb3ZpZC52aWV3LldvcmxkTWFwQ29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NvdmlkLXdvcmxkLW1hcCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjb3ZpZC13b3JsZC1tYXAnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjaGFydFR5cGU9J01hcENoYXJ0J1xuICAgICAgICAgKi9cbiAgICAgICAgY2hhcnRUeXBlOiAnTWFwQ2hhcnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2NvdmlkLWxpbmUtY2hhcnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ2NvdmlkLXdvcmxkLW1hcCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBkYXRhUGF0aD0nZGF0YS5zZXJpZXMudmFsdWVzLjAnXG4gICAgICAgICAqL1xuICAgICAgICBkYXRhUGF0aDogJ3Nlcmllcy52YWx1ZXMuMCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGhlYXRSdWxlc01heFZhbHVlPTE1MDAwXG4gICAgICAgICAqL1xuICAgICAgICBoZWF0UnVsZXNNYXhWYWx1ZTogMTUwMDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHBhY2thZ2U9J2FtNG1hcHMnXG4gICAgICAgICAqL1xuICAgICAgICBwYWNrYWdlOiAnYW00bWFwcycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGNoYXJ0Q29uZmlnXG4gICAgICAgICAqL1xuICAgICAgICBjaGFydENvbmZpZzoge1xuICAgICAgICAgICAgcHJvamVjdGlvbjogJ01pbGxlcicsXG4gICAgICAgICAgICBnZW9kYXRhICAgOiAnd29ybGRMb3cnLFxuXG4gICAgICAgICAgICBzZXJpZXM6IFt7XG4gICAgICAgICAgICAgICAgdHlwZSAgICAgIDogJ01hcFBvbHlnb25TZXJpZXMnLFxuICAgICAgICAgICAgICAgIGV4Y2x1ZGUgICA6IFsnQVEnXSxcbiAgICAgICAgICAgICAgICB1c2VHZW9kYXRhOiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgZGF0YUZpZWxkczoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2FjdGl2ZSdcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgaGVhdFJ1bGVzOiBbe1xuICAgICAgICAgICAgICAgICAgICBtYXggICAgIDogJyM2NGI1ZjYnLFxuICAgICAgICAgICAgICAgICAgICBtYXhWYWx1ZTogJ0Bjb25maWc6aGVhdFJ1bGVzTWF4VmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICBtaW4gICAgIDogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgICAgICBtaW5WYWx1ZTogMCxcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6ICdmaWxsJyxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ICA6ICdtYXBQb2x5Z29ucy50ZW1wbGF0ZSdcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBtYXBQb2x5Z29uczoge1xuICAgICAgICAgICAgICAgICAgICB0b29sdGlwVGV4dDogJ3tuYW1lfTogW2JvbGRde3ZhbHVlfVsvXScsXG4gICAgICAgICAgICAgICAgICAgIC8vZmlsbCAgICAgICA6ICcjNzRCMjY2JyxcblxuICAgICAgICAgICAgICAgICAgICBzdGF0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2ZpbGw6ICcjMzY3QjI1J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfSBkYXRhXG4gICAgICovXG4gICAgbG9hZERhdGEoZGF0YSkge1xuICAgICAgICBjb25zdCBjaGFydERhdGEgPSBbXTtcblxuICAgICAgICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBjaGFydERhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgYWN0aXZlICAgOiBpdGVtLmFjdGl2ZSxcbiAgICAgICAgICAgICAgICBjYXNlcyAgICA6IGl0ZW0uY2FzZXMsXG4gICAgICAgICAgICAgICAgY3JpdGljYWwgOiBpdGVtLmNyaXRpY2FsLFxuICAgICAgICAgICAgICAgIGRlYXRocyAgIDogaXRlbS5kZWF0aHMsXG4gICAgICAgICAgICAgICAgaWQgICAgICAgOiBpdGVtLmNvdW50cnlJbmZvLmlzbzIsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiBpdGVtLmNvdW50cnksXG4gICAgICAgICAgICAgICAgcmVjb3ZlcmVkOiBpdGVtLnJlY292ZXJlZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBOZW8ubWFpbi5hZGRvbi5BbUNoYXJ0cy51cGRhdGVEYXRhKHtcbiAgICAgICAgICAgIGRhdGEgICAgOiBjaGFydERhdGEsXG4gICAgICAgICAgICBkYXRhUGF0aDogdGhpcy5kYXRhUGF0aCxcbiAgICAgICAgICAgIGlkICAgICAgOiB0aGlzLmlkXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoV29ybGRNYXBDb21wb25lbnQpO1xuXG5leHBvcnQge1dvcmxkTWFwQ29tcG9uZW50IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb250YWluZXIgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbnRhaW5lci9CYXNlLm1qcyc7XG5pbXBvcnQgTnVtYmVyRmllbGQgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9mb3JtL2ZpZWxkL051bWJlci5tanMnO1xuaW1wb3J0IFRvb2xiYXIgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvY29udGFpbmVyL1Rvb2xiYXIubWpzJztcbmltcG9ydCBXb3JsZE1hcENvbXBvbmVudCAgICAgICAgICAgZnJvbSAnLi9Xb3JsZE1hcENvbXBvbmVudC5tanMnO1xuaW1wb3J0IFdvcmxkTWFwQ29udGFpbmVyQ29udHJvbGxlciBmcm9tICcuL1dvcmxkTWFwQ29udGFpbmVyQ29udHJvbGxlci5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBTaGFyZWRDb3ZpZC52aWV3LldvcmxkTWFwQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgV29ybGRNYXBDb250YWluZXIgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdTaGFyZWRDb3ZpZC52aWV3LldvcmxkTWFwQ29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdTaGFyZWRDb3ZpZC52aWV3LldvcmxkTWFwQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb250cm9sbGVyLkNvbXBvbmVudH0gY29udHJvbGxlcj1Xb3JsZE1hcENvbnRhaW5lckNvbnRyb2xsZXJcbiAgICAgICAgICovXG4gICAgICAgIGNvbnRyb2xsZXI6IFdvcmxkTWFwQ29udGFpbmVyQ29udHJvbGxlcixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbGF5b3V0PXtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgICAgICAgKi9cbiAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gaXRlbXNcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgbW9kdWxlOiBUb29sYmFyLFxuICAgICAgICAgICAgaXRlbXMgOiBbe1xuICAgICAgICAgICAgICAgIG50eXBlICAgIDogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICdjdXJyZW50TWFwVmlld0xhYmVsJyxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW5SaWdodDogJzIwcHgnfSxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdDdXJyZW50IHZpZXc6IEFjdGl2ZSdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgICAgICAgOiBOdW1iZXJGaWVsZCxcbiAgICAgICAgICAgICAgICBjbGVhclRvT3JpZ2luYWxWYWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uOiAnaW5saW5lJyxcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQgICAgOiAnSGVhdFJ1bGUgbWF4VmFsdWUnLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlICAgICA6IDFlNixcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSAgICAgOiAxMDAsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlICAgIDogJ2hlYXRSdWxlRmllbGQnLFxuICAgICAgICAgICAgICAgIHN0ZXBTaXplICAgICA6IDEwMCxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICAgICAgOiB7bWFyZ2luOiAwfSxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICAgICAgOiAxNTAwMCxcbiAgICAgICAgICAgICAgICB3aWR0aCAgICAgICAgOiAxNTAsXG5cbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiAnb25IZWF0UnVsZUZpZWxkQ2hhbmdlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sICctPicsIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiAnb25TZXJpZXNCdXR0b25DbGljaycsXG4gICAgICAgICAgICAgICAgc2VyaWVzIDogJ2Nhc2VzJyxcbiAgICAgICAgICAgICAgICBzdHlsZSAgOiB7bWFyZ2luUmlnaHQ6ICcycHgnfSxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnPHNwYW4gc3R5bGU9XCJjb2xvcjogI2JiYmJiYlwiPuKXjzwvc3Bhbj4gQ2FzZXMnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uU2VyaWVzQnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgIHNlcmllcyA6ICdhY3RpdmUnLFxuICAgICAgICAgICAgICAgIHN0eWxlICA6IHttYXJnaW5SaWdodDogJzJweCd9LFxuICAgICAgICAgICAgICAgIHRleHQgICA6ICc8c3BhbiBzdHlsZT1cImNvbG9yOiAjNjRiNWY2XCI+4pePPC9zcGFuPiBBY3RpdmUnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uU2VyaWVzQnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgIHNlcmllcyA6ICdyZWNvdmVyZWQnLFxuICAgICAgICAgICAgICAgIHN0eWxlICA6IHttYXJnaW5SaWdodDogJzJweCd9LFxuICAgICAgICAgICAgICAgIHRleHQgICA6ICc8c3BhbiBzdHlsZT1cImNvbG9yOiAjMjhjYTY4XCI+4pePPC9zcGFuPiBSZWNvdmVyZWQnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uU2VyaWVzQnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgIHNlcmllcyA6ICdkZWF0aHMnLFxuICAgICAgICAgICAgICAgIHRleHQgICA6ICc8c3BhbiBzdHlsZT1cImNvbG9yOiAjZmI2NzY3XCI+4pePPC9zcGFuPiBEZWF0aHMnXG4gICAgICAgICAgICB9XVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICA6IFdvcmxkTWFwQ29tcG9uZW50LFxuICAgICAgICAgICAgZmxleCAgICAgOiAxLFxuICAgICAgICAgICAgcmVmZXJlbmNlOiAnd29ybGRtYXAnXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoV29ybGRNYXBDb250YWluZXIpO1xuXG5leHBvcnQge1dvcmxkTWFwQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb21wb25lbnRDb250cm9sbGVyIGZyb20gJy4uLy4uLy4uL3NyYy9jb250cm9sbGVyL0NvbXBvbmVudC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBTaGFyZWRDb3ZpZC52aWV3LldvcmxkTWFwQ29udGFpbmVyQ29udHJvbGxlclxuICogQGV4dGVuZHMgTmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50XG4gKi9cbmNsYXNzIFdvcmxkTWFwQ29udGFpbmVyQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdTaGFyZWRDb3ZpZC52aWV3LldvcmxkTWFwQ29udGFpbmVyQ29udHJvbGxlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnU2hhcmVkQ292aWQudmlldy5Xb3JsZE1hcENvbnRhaW5lckNvbnRyb2xsZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBoZWF0UnVsZUNoYW5nZURlbGF5PTE1MFxuICAgICAgICAgKi9cbiAgICAgICAgaGVhdFJ1bGVDaGFuZ2VEZWxheTogMTUwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGhlYXRSdWxlQ2hhbmdlVGltZW91dD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBoZWF0UnVsZUNoYW5nZVRpbWVvdXQ6IG51bGxcbiAgICB9fVxuXG4gICAgY2hhbmdlSGVhdFJ1bGUodmFsdWUpIHtcbiAgICAgICAgY29uc3QgY2hhcnRJZCA9IHRoaXMuZ2V0UmVmZXJlbmNlKCd3b3JsZG1hcCcpLmlkO1xuXG4gICAgICAgIE5lby5tYWluLmFkZG9uLkFtQ2hhcnRzLnNldFByb3BlcnR5KHtcbiAgICAgICAgICAgIGlkICAgICA6IHRoaXMuZ2V0UmVmZXJlbmNlKCd3b3JsZG1hcCcpLmlkLFxuICAgICAgICAgICAgcGF0aCAgIDogJ3Nlcmllcy52YWx1ZXMuMC5oZWF0UnVsZXMudmFsdWVzLjAubWF4VmFsdWUnLFxuICAgICAgICAgICAgdmFsdWUgIDogdmFsdWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTmVvLm1haW4uYWRkb24uQW1DaGFydHMuY2FsbE1ldGhvZCh7XG4gICAgICAgICAgICBpZCAgOiBjaGFydElkLFxuICAgICAgICAgICAgcGF0aDogJ3Nlcmllcy52YWx1ZXMuMC5pbnZhbGlkYXRlRGF0YSdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uSGVhdFJ1bGVGaWVsZENoYW5nZShkYXRhKSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBjbGVhclRpbWVvdXQobWUuaGVhdFJ1bGVDaGFuZ2VUaW1lb3V0KTtcblxuICAgICAgICBtZS5oZWF0UnVsZUNoYW5nZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG1lLmNoYW5nZUhlYXRSdWxlKGRhdGEudmFsdWUpO1xuICAgICAgICB9LCBtZS5oZWF0UnVsZUNoYW5nZURlbGF5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25TZXJpZXNCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIGNvbnN0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgY2hhcnRJZCAgICAgPSBtZS5nZXRSZWZlcmVuY2UoJ3dvcmxkbWFwJykuaWQsXG4gICAgICAgICAgICAgIGNvdW50cnlEYXRhID0gWy4uLm1lLmdldFBhcmVudCgpLmRhdGFdO1xuXG4gICAgICAgIGNvbnN0IGNvbG9yTWFwID0ge1xuICAgICAgICAgICAgYWN0aXZlICAgOiAnIzY0YjVmNicsXG4gICAgICAgICAgICBjYXNlcyAgICA6ICcjYmJiYmJiJyxcbiAgICAgICAgICAgIGRlYXRocyAgIDogJyNmYjY3NjcnLFxuICAgICAgICAgICAgcmVjb3ZlcmVkOiAnIzI4Y2E2OCdcbiAgICAgICAgfTtcblxuICAgICAgICBOZW8ubWFpbi5hZGRvbi5BbUNoYXJ0cy5zZXRQcm9wZXJ0eSh7XG4gICAgICAgICAgICBpZCAgICAgOiBjaGFydElkLFxuICAgICAgICAgICAgaXNDb2xvcjogdHJ1ZSxcbiAgICAgICAgICAgIHBhdGggICA6ICdzZXJpZXMudmFsdWVzLjAuaGVhdFJ1bGVzLnZhbHVlcy4wLm1heCcsXG4gICAgICAgICAgICB2YWx1ZSAgOiBjb2xvck1hcFtkYXRhLmNvbXBvbmVudC5zZXJpZXNdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIE5lby5tYWluLmFkZG9uLkFtQ2hhcnRzLnNldFByb3BlcnR5KHtcbiAgICAgICAgICAgIGlkICAgOiBjaGFydElkLFxuICAgICAgICAgICAgcGF0aCA6ICdzZXJpZXMudmFsdWVzLjAuZGF0YUZpZWxkcy52YWx1ZScsXG4gICAgICAgICAgICB2YWx1ZTogZGF0YS5jb21wb25lbnQuc2VyaWVzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIE5lby5tYWluLmFkZG9uLkFtQ2hhcnRzLmNhbGxNZXRob2Qoe1xuICAgICAgICAgICAgaWQgIDogY2hhcnRJZCxcbiAgICAgICAgICAgIHBhdGg6ICdzZXJpZXMudmFsdWVzLjAuaW52YWxpZGF0ZURhdGEnXG4gICAgICAgIH0pLiB0aGVuKCgpID0+IHtcbiAgICAgICAgICAgIG1lLmdldFJlZmVyZW5jZSgnY3VycmVudE1hcFZpZXdMYWJlbCcpLnRleHQgPSAnQ3VycmVudCB2aWV3OiAnICsgTmVvLmNhcGl0YWxpemUoZGF0YS5jb21wb25lbnQuc2VyaWVzKTtcblxuICAgICAgICAgICAgY291bnRyeURhdGEuc29ydCgoYSwgYikgPT4gYltkYXRhLmNvbXBvbmVudC5zZXJpZXNdIC0gYVtkYXRhLmNvbXBvbmVudC5zZXJpZXNdKTtcblxuICAgICAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdoZWF0UnVsZUZpZWxkJykudmFsdWUgPSBNYXRoLmNlaWwoY291bnRyeURhdGFbOV1bZGF0YS5jb21wb25lbnQuc2VyaWVzXSAvIDEwMCkgKiAxMDA7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoV29ybGRNYXBDb250YWluZXJDb250cm9sbGVyKTtcblxuZXhwb3J0IHtXb3JsZE1hcENvbnRhaW5lckNvbnRyb2xsZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvdW50cnlTdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9Db3VudHJpZXMubWpzJztcbmltcG9ydCBHYWxsZXJ5ICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudC9HYWxsZXJ5Lm1qcyc7XG5pbXBvcnQgVXRpbCAgICAgICAgIGZyb20gJy4uLy4uL1V0aWwubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgU2hhcmVkQ292aWQudmlldy5jb3VudHJ5LkdhbGxlcnlcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuR2FsbGVyeVxuICovXG5jbGFzcyBDb3VudHJ5R2FsbGVyeSBleHRlbmRzIEdhbGxlcnkge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdTaGFyZWRDb3ZpZC52aWV3LmNvdW50cnkuR2FsbGVyeSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnU2hhcmVkQ292aWQudmlldy5jb3VudHJ5LkdhbGxlcnknLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2NvdmlkLWNvdW50cnktZ2FsbGVyeScsICduZW8tZ2FsbGVyeScsICdwYWdlJywgJ3ZpZXcnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ2NvdmlkLWNvdW50cnktZ2FsbGVyeScsICduZW8tZ2FsbGVyeScsICdwYWdlJywgJ3ZpZXcnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpbWFnZSBoZWlnaHQgb2YgdGhlIGdhbGxlcnlcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBpbWFnZUhlaWdodD0yNDBcbiAgICAgICAgICovXG4gICAgICAgIGltYWdlSGVpZ2h0OiAyODAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaW1hZ2Ugd2lkdGggb2YgdGhlIGdhbGxlcnlcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBpbWFnZVdpZHRoPTMyMFxuICAgICAgICAgKi9cbiAgICAgICAgaW1hZ2VXaWR0aDogMzQwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBpdGVtVHBsX1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbVRwbDoge1xuICAgICAgICAgICAgY2xzICAgICA6IFsnbmVvLWdhbGxlcnktaXRlbScsICdpbWFnZS13cmFwJywgJ3ZpZXcnLCAnbmVvLXRyYW5zaXRpb24tMTAwMCddLFxuICAgICAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICBjbHMgIDogWyduZW8taXRlbS13cmFwcGVyJ10sXG4gICAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgICAgICB0YWcgIDogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIGNscyAgOiBbJ25lby1jb3VudHJ5LWdhbGxlcnktaXRlbSddLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge30sXG5cbiAgICAgICAgICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWl0ZW0taGVhZGVyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICdpbWcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsczogWyduZW8tZmxhZyddXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ3RhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsczogWyduZW8tY29udGVudC10YWJsZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ3RyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbiA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgaHRtbDogJ0Nhc2VzJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGNsczogWyduZW8tYWxpZ24tcmlnaHQnXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIHN0eWxlOiB7d2lkdGg6ICcxMDAlJ319LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBodG1sOiAnQ2FzZXMgdG9kYXknfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgY2xzOiBbJ25lby1hbGlnbi1yaWdodCddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICd0cicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGh0bWw6ICdEZWF0aHMnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgY2xzOiBbJ25lby1hbGlnbi1yaWdodCcsICduZW8tY29udGVudC1kZWF0aHMnXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIHN0eWxlOiB7d2lkdGg6ICcxMDAlJ319LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBodG1sOiAnRGVhdGhzIHRvZGF5J30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGNsczogWyduZW8tYWxpZ24tcmlnaHQnLCAnbmVvLWNvbnRlbnQtZGVhdGhzJ119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ3RyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbiA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgaHRtbDogJ1JlY292ZXJlZCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBjbHM6IFsnbmVvLWFsaWduLXJpZ2h0JywgJ25lby1jb250ZW50LXJlY292ZXJlZCddfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgc3R5bGU6IHt3aWR0aDogJzEwMCUnfX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGh0bWw6ICdDcml0aWNhbCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBjbHM6IFsnbmVvLWFsaWduLXJpZ2h0JywgJ25lby1jb250ZW50LWNyaXRpY2FsJ119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB1bmlxdWUgcmVjb3JkIGZpZWxkIGNvbnRhaW5pbmcgdGhlIGlkLlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGtleVByb3BlcnR5PSdpZCdcbiAgICAgICAgICovXG4gICAgICAgIGtleVByb3BlcnR5OiAnY291bnRyeScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHRvIHNlbGVjdCB0aGUgaXRlbSBpbnNpZGUgdGhlIG1pZGRsZSBvZiB0aGUgc3RvcmUgaXRlbXMgb24gbW91bnRcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2VsZWN0T25Nb3VudD1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZWN0T25Nb3VudDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5TdG9yZX0gc3RvcmU9Q291bnRyeVN0b3JlXG4gICAgICAgICAqL1xuICAgICAgICBzdG9yZTogQ291bnRyeVN0b3JlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGdldCBkaWZmZXJlbnQgaXRlbS1tYXJrdXBzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21JdGVtXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHZkb21JdGVtXG4gICAgICovXG4gICAgY3JlYXRlSXRlbSh2ZG9tSXRlbSwgcmVjb3JkLCBpbmRleCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBmaXJzdENoaWxkID0gdmRvbUl0ZW0uY25bMF0uY25bMF0sXG4gICAgICAgICAgICBmTiAgICAgICAgID0gVXRpbC5mb3JtYXROdW1iZXIsXG4gICAgICAgICAgICB0YWJsZSAgICAgID0gZmlyc3RDaGlsZC5jblsxXTtcblxuICAgICAgICB2ZG9tSXRlbS5pZCA9IG1lLmdldEl0ZW1Wbm9kZUlkKHJlY29yZFttZS5rZXlQcm9wZXJ0eV0pO1xuXG4gICAgICAgIHZkb21JdGVtLmNuWzBdLnN0eWxlLmhlaWdodCA9IG1lLmltYWdlSGVpZ2h0ICsgJ3B4JztcblxuICAgICAgICBmaXJzdENoaWxkLnN0eWxlLmhlaWdodCA9IChtZS5pbWFnZUhlaWdodCAtIDcwKSArICdweCc7XG4gICAgICAgIGZpcnN0Q2hpbGQuc3R5bGUud2lkdGggID0gbWUuaW1hZ2VXaWR0aCAgKyAncHgnO1xuXG4gICAgICAgIGZpcnN0Q2hpbGQuY25bMF0uY25bMF0uc3JjICA9IFV0aWwuZ2V0Q291bnRyeUZsYWdVcmwocmVjb3JkLmNvdW50cnkpO1xuICAgICAgICBmaXJzdENoaWxkLmNuWzBdLmNuWzFdLmh0bWwgPSByZWNvcmQuY291bnRyeTtcblxuICAgICAgICB0YWJsZS5jblswXS5jblsxXS5odG1sID0gZk4oe3ZhbHVlOiByZWNvcmQuY2FzZXN9KTtcbiAgICAgICAgdGFibGUuY25bMV0uY25bMV0uaHRtbCA9IGZOKHt2YWx1ZTogcmVjb3JkLmRlYXRoc30pO1xuICAgICAgICB0YWJsZS5jblsyXS5jblsxXS5odG1sID0gZk4oe3ZhbHVlOiByZWNvcmQucmVjb3ZlcmVkfSk7XG5cbiAgICAgICAgdGFibGUuY25bMF0uY25bNF0uaHRtbCA9IGZOKHt2YWx1ZTogcmVjb3JkLnRvZGF5Q2FzZXN9KTtcbiAgICAgICAgdGFibGUuY25bMV0uY25bNF0uaHRtbCA9IGZOKHt2YWx1ZTogcmVjb3JkLnRvZGF5RGVhdGhzfSk7XG4gICAgICAgIHRhYmxlLmNuWzJdLmNuWzRdLmh0bWwgPSBmTih7dmFsdWU6IHJlY29yZC5jcml0aWNhbH0pO1xuXG4gICAgICAgIHJldHVybiB2ZG9tSXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2bm9kZUlkXG4gICAgICogQHJldHVybnMge1N0cmluZ30gaXRlbUlkXG4gICAgICovXG4gICAgZ2V0SXRlbUlkKHZub2RlSWQpIHtcbiAgICAgICAgcmV0dXJuIHZub2RlSWQuc3BsaXQoJ19fJylbMV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBpdGVtc1xuICAgICAqL1xuICAgIG9uU3RvcmVMb2FkKGl0ZW1zKSB7XG4gICAgICAgIHN1cGVyLm9uU3RvcmVMb2FkKGl0ZW1zKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0T25Nb3VudCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmFmdGVyU2V0TW91bnRlZCh0cnVlLCBmYWxzZSk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb3VudHJ5R2FsbGVyeSk7XG5cbmV4cG9ydCB7Q291bnRyeUdhbGxlcnkgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvdW50cnlTdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9Db3VudHJpZXMubWpzJztcbmltcG9ydCBIZWxpeCAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudC9IZWxpeC5tanMnO1xuaW1wb3J0IFV0aWwgICAgICAgICBmcm9tICcuLi8uLi9VdGlsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFNoYXJlZENvdmlkLnZpZXcuY291bnRyeS5IZWxpeFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5IZWxpeFxuICovXG5jbGFzcyBDb3VudHJ5SGVsaXggZXh0ZW5kcyBIZWxpeCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1NoYXJlZENvdmlkLnZpZXcuY291bnRyeS5IZWxpeCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnU2hhcmVkQ292aWQudmlldy5jb3VudHJ5LkhlbGl4JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9Wydjb3ZpZC1jb3VudHJ5LWhlbGl4JywgJ25lby1oZWxpeCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnY292aWQtY291bnRyeS1oZWxpeCcsICduZW8taGVsaXgnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB2ZXJ0aWNhbCBkZWx0YSBiZXR3ZWVuIGVhY2ggaGVsaXggaXRlbSAoaW5jcmVhc2luZyB0aGlzIHZhbHVlIHdpbGwgY3JlYXRlIGEgc3BpcmFsKVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGRlbHRhWT0xLjJcbiAgICAgICAgICovXG4gICAgICAgIGRlbHRhWTogMS4yLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBpdGVtVHBsX1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbVRwbDoge1xuICAgICAgICAgICAgY2xzICAgICA6IFsnc3VyZmFjZScsICduZW8taGVsaXgtaXRlbSddLFxuICAgICAgICAgICAgc3R5bGUgICA6IHt9LFxuICAgICAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICBjbHMgIDogWyduZW8taXRlbS13cmFwcGVyJ10sXG4gICAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgICAgICB0YWcgIDogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIGNscyAgOiBbJ25lby1jb3VudHJ5LWhlbGl4LWl0ZW0nXSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuXG4gICAgICAgICAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1pdGVtLWhlYWRlciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAnaW1nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWZsYWcnXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICd0YWJsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWNvbnRlbnQtdGFibGUnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICd0cicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGh0bWw6ICdDYXNlcyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBjbHM6IFsnbmVvLWFsaWduLXJpZ2h0J119LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBzdHlsZToge3dpZHRoOiAnMTAwJSd9fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgaHRtbDogJ0Nhc2VzIHRvZGF5J30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGNsczogWyduZW8tYWxpZ24tcmlnaHQnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAndHInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNuIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBodG1sOiAnRGVhdGhzJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGNsczogWyduZW8tYWxpZ24tcmlnaHQnLCAnbmVvLWNvbnRlbnQtZGVhdGhzJ119LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBzdHlsZToge3dpZHRoOiAnMTAwJSd9fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgaHRtbDogJ0RlYXRocyB0b2RheSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBjbHM6IFsnbmVvLWFsaWduLXJpZ2h0JywgJ25lby1jb250ZW50LWRlYXRocyddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICd0cicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGh0bWw6ICdSZWNvdmVyZWQnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgY2xzOiBbJ25lby1hbGlnbi1yaWdodCcsICduZW8tY29udGVudC1yZWNvdmVyZWQnXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIHN0eWxlOiB7d2lkdGg6ICcxMDAlJ319LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBodG1sOiAnQ3JpdGljYWwnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgY2xzOiBbJ25lby1hbGlnbi1yaWdodCcsICduZW8tY29udGVudC1jcml0aWNhbCddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdW5pcXVlIHJlY29yZCBmaWVsZCBjb250YWluaW5nIHRoZSBpZC5cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBrZXlQcm9wZXJ0eT0naWQnXG4gICAgICAgICAqL1xuICAgICAgICBrZXlQcm9wZXJ0eTogJ2NvdW50cnknLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHJhZGl1cyBvZiB0aGUgSGVsaXggaW4gcHhcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSByYWRpdXM9MjUwMFxuICAgICAgICAgKi9cbiAgICAgICAgcmFkaXVzOiAyNTAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHJvdGF0aW9uQW5nbGUgb2YgdGhlIEhlbGl4IGluIGRlZ3JlZXNcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSByb3RhdGlvbkFuZ2xlPTcyMFxuICAgICAgICAgKi9cbiAgICAgICAgcm90YXRpb25BbmdsZTogNzIwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBkaXNwbGF5cyB0aGUgZmlyc3QgJiBsYXN0IG5hbWUgcmVjb3JkIGZpZWxkcyBiZWxvdyBhbiBleHBhbmRlZCBpdGVtXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNob3dDbG9uZUluZm89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHNob3dDbG9uZUluZm86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmRhdGEuU3RvcmV9IHN0b3JlPUNvdW50cnlTdG9yZVxuICAgICAgICAgKi9cbiAgICAgICAgc3RvcmU6IENvdW50cnlTdG9yZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0cmFuc2xhdGVYIHZhbHVlIGdldHMgaW5jbHVkZWQgaW50byBlYWNoIGhlbGl4IGl0ZW1cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSB0cmFuc2xhdGVZPTUwMFxuICAgICAgICAgKi9cbiAgICAgICAgdHJhbnNsYXRlWTogNTAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRyYW5zbGF0ZVggdmFsdWUgZ2V0cyBpbmNsdWRlZCBpbnRvIGVhY2ggaGVsaXggaXRlbVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHRyYW5zbGF0ZVpfPS0yMzAwXG4gICAgICAgICAqL1xuICAgICAgICB0cmFuc2xhdGVaOiAtMjMwMFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tSXRlbVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB2ZG9tSXRlbVxuICAgICAqL1xuICAgIGNyZWF0ZUl0ZW0odmRvbUl0ZW0sIHJlY29yZCwgaW5kZXgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZmlyc3RDaGlsZCA9IHZkb21JdGVtLmNuWzBdLmNuWzBdLFxuICAgICAgICAgICAgZk4gICAgICAgICA9IFV0aWwuZm9ybWF0TnVtYmVyLFxuICAgICAgICAgICAgdGFibGUgICAgICA9IGZpcnN0Q2hpbGQuY25bMV07XG5cbiAgICAgICAgdmRvbUl0ZW0uaWQgPSBtZS5nZXRJdGVtVm5vZGVJZChyZWNvcmRbbWUua2V5UHJvcGVydHldKTtcblxuICAgICAgICBmaXJzdENoaWxkLmNuWzBdLmNuWzBdLnNyYyAgPSBVdGlsLmdldENvdW50cnlGbGFnVXJsKHJlY29yZC5jb3VudHJ5KTtcbiAgICAgICAgZmlyc3RDaGlsZC5jblswXS5jblsxXS5odG1sID0gcmVjb3JkLmNvdW50cnk7XG5cbiAgICAgICAgdGFibGUuY25bMF0uY25bMV0uaHRtbCA9IGZOKHt2YWx1ZTogcmVjb3JkLmNhc2VzfSk7XG4gICAgICAgIHRhYmxlLmNuWzFdLmNuWzFdLmh0bWwgPSBmTih7dmFsdWU6IHJlY29yZC5kZWF0aHN9KTtcbiAgICAgICAgdGFibGUuY25bMl0uY25bMV0uaHRtbCA9IGZOKHt2YWx1ZTogcmVjb3JkLnJlY292ZXJlZH0pO1xuXG4gICAgICAgIHRhYmxlLmNuWzBdLmNuWzRdLmh0bWwgPSBmTih7dmFsdWU6IHJlY29yZC50b2RheUNhc2VzfSk7XG4gICAgICAgIHRhYmxlLmNuWzFdLmNuWzRdLmh0bWwgPSBmTih7dmFsdWU6IHJlY29yZC50b2RheURlYXRoc30pO1xuICAgICAgICB0YWJsZS5jblsyXS5jbls0XS5odG1sID0gZk4oe3ZhbHVlOiByZWNvcmQuY3JpdGljYWx9KTtcblxuICAgICAgICByZXR1cm4gdmRvbUl0ZW07XG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRDbG9uZVRyYW5zZm9ybSgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdHJhbnNsYXRlWCA9IChtZS5vZmZzZXRXaWR0aCAgLSAyODAwKSAvIDYsXG4gICAgICAgICAgICB0cmFuc2xhdGVZID0gKG1lLm9mZnNldEhlaWdodCAtIDI3MDApIC8gNixcbiAgICAgICAgICAgIHRyYW5zbGF0ZVogPSAxMDA0MDAgKyBtZS5wZXJzcGVjdGl2ZSAvIDEuNTtcblxuICAgICAgICByZXR1cm4gJ21hdHJpeDNkKDEsMCwwLDAsMCwxLDAsMCwwLDAsMSwwLCcrdHJhbnNsYXRlWCsnLCcrdHJhbnNsYXRlWSsnLCcrdHJhbnNsYXRlWisnLDEpJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2bm9kZUlkXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRJdGVtSWQodm5vZGVJZCkge1xuICAgICAgICByZXR1cm4gdm5vZGVJZC5zcGxpdCgnX18nKVsxXTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENvdW50cnlIZWxpeCk7XG5cbmV4cG9ydCB7Q291bnRyeUhlbGl4IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb250YWluZXIgICAgICBmcm9tICcuLi8uLi8uLi8uLi9zcmMvdGFibGUvQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgSGlzdG9yaWNhbERhdGEgZnJvbSAnLi4vLi4vc3RvcmUvSGlzdG9yaWNhbERhdGEubWpzJztcbmltcG9ydCBVdGlsICAgICAgICAgICBmcm9tICcuLi8uLi9VdGlsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFNoYXJlZENvdmlkLnZpZXcuY291bnRyeS5IaXN0b3JpY2FsRGF0YVRhYmxlXG4gKiBAZXh0ZW5kcyBOZW8udGFibGUuQ29udGFpbmVyXG4gKi9cbmNsYXNzIEhpc3RvcmljYWxEYXRhVGFibGUgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdTaGFyZWRDb3ZpZC52aWV3LmNvdW50cnkuSGlzdG9yaWNhbERhdGFUYWJsZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnU2hhcmVkQ292aWQudmlldy5jb3VudHJ5Lkhpc3RvcmljYWxEYXRhVGFibGUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2NvdmlkLWhpc3RvcmljYWwtZGF0YS10YWJsZScsICduZW8tdGFibGUtY29udGFpbmVyJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWydjb3ZpZC1oaXN0b3JpY2FsLWRhdGEtdGFibGUnLCAnbmVvLXRhYmxlLWNvbnRhaW5lciddLFxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmYXVsdCBjb25maWdzIGZvciBlYWNoIGNvbHVtblxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGNvbHVtbkRlZmF1bHRzXG4gICAgICAgICAqL1xuICAgICAgICBjb2x1bW5EZWZhdWx0czoge1xuICAgICAgICAgICAgYWxpZ24gICAgICAgICAgICAgICA6ICdyaWdodCcsXG4gICAgICAgICAgICBkZWZhdWx0U29ydERpcmVjdGlvbjogJ0RFU0MnLFxuICAgICAgICAgICAgcmVuZGVyZXIgICAgICAgICAgICA6IFV0aWwuZm9ybWF0TnVtYmVyXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX0gY29sdW1uc1xuICAgICAgICAgKi9cbiAgICAgICAgY29sdW1uczogW3tcbiAgICAgICAgICAgIGFsaWduICAgIDogJ2xlZnQnLFxuICAgICAgICAgICAgZGF0YUZpZWxkOiAnZGF0ZScsXG4gICAgICAgICAgICBkb2NrICAgICA6ICdsZWZ0JyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ0RhdGUnLFxuICAgICAgICAgICAgd2lkdGggICAgOiAxMDAsXG4gICAgICAgICAgICByZW5kZXJlciA6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjbHMgOiBbJ25lby1kYXRlLWNvbHVtbicsICduZW8tdGFibGUtY2VsbCddLFxuICAgICAgICAgICAgICAgICAgICBodG1sOiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZGVmYXVsdCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheSAgOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb250aDogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeWVhciA6ICdudW1lcmljJ1xuICAgICAgICAgICAgICAgICAgICB9KS5mb3JtYXQobmV3IERhdGUoZGF0YS52YWx1ZSkpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAnY2FzZXMnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnQ2FzZXMnLFxuICAgICAgICAgICAgcmVuZGVyZXIgOiBkYXRhID0+IFV0aWwuZm9ybWF0TnVtYmVyKGRhdGEpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ2FjdGl2ZScsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICdBY3RpdmUnLFxuICAgICAgICAgICAgcmVuZGVyZXIgOiBkYXRhID0+IFV0aWwuZm9ybWF0TnVtYmVyKGRhdGEsICcjNjRCNUY2JylcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAncmVjb3ZlcmVkJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ1JlY292ZXJlZCcsXG4gICAgICAgICAgICByZW5kZXJlciA6IGRhdGEgPT4gVXRpbC5mb3JtYXROdW1iZXIoZGF0YSwgJyMyOGNhNjgnKVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICdkZWF0aHMnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnRGVhdGhzJyxcbiAgICAgICAgICAgIHJlbmRlcmVyIDogZGF0YSA9PiBVdGlsLmZvcm1hdE51bWJlcihkYXRhLCAnI2ZiNjc2NycpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ2RhaWx5Q2FzZXMnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnRGFpbHkgQycsXG4gICAgICAgICAgICByZW5kZXJlciA6IGRhdGEgPT4gVXRpbC5mb3JtYXROdW1iZXIoZGF0YSlcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAnZGFpbHlBY3RpdmUnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnRGFpbHkgQScsXG4gICAgICAgICAgICByZW5kZXJlciA6IGRhdGEgPT4gVXRpbC5mb3JtYXROdW1iZXIoZGF0YSwgJyM2NEI1RjYnKVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICdkYWlseVJlY292ZXJlZCcsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICdEYWlseSBSJyxcbiAgICAgICAgICAgIHJlbmRlcmVyIDogZGF0YSA9PiBVdGlsLmZvcm1hdE51bWJlcihkYXRhLCAnIzI4Y2E2OCcpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ2RhaWx5RGVhdGhzJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ0RhaWx5IEQnLFxuICAgICAgICAgICAgcmVuZGVyZXIgOiBkYXRhID0+IFV0aWwuZm9ybWF0TnVtYmVyKGRhdGEsICcjZmI2NzY3JylcbiAgICAgICAgfV0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5TdG9yZX0gc3RvcmU9SGlzdG9yaWNhbERhdGFcbiAgICAgICAgICovXG4gICAgICAgIHN0b3JlOiBIaXN0b3JpY2FsRGF0YVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEhpc3RvcmljYWxEYXRhVGFibGUpO1xuXG5leHBvcnQge0hpc3RvcmljYWxEYXRhVGFibGUgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEFtQ2hhcnRDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudC93cmFwcGVyL0FtQ2hhcnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgU2hhcmVkQ292aWQudmlldy5jb3VudHJ5LkxpbmVDaGFydENvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC53cmFwcGVyLkFtQ2hhcnRcbiAqL1xuY2xhc3MgTGluZUNoYXJ0Q29tcG9uZW50IGV4dGVuZHMgQW1DaGFydENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1NoYXJlZENvdmlkLnZpZXcuY291bnRyeS5MaW5lQ2hhcnRDb21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1NoYXJlZENvdmlkLnZpZXcuY291bnRyeS5MaW5lQ2hhcnRDb21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2NvdmlkLWxpbmUtY2hhcnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ2NvdmlkLWxpbmUtY2hhcnQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gY2hhcnRDb25maWdcbiAgICAgICAgICovXG4gICAgICAgIGNoYXJ0Q29uZmlnOiB7XG4gICAgICAgICAgICBjdXJzb3I6IHtcbiAgICAgICAgICAgICAgICBtYXhUb29sdGlwRGlzdGFuY2U6IC0xXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICcjYmJiJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgeEF4ZXM6IFt7XG4gICAgICAgICAgICAgICAgdHlwZTogJ0RhdGVBeGlzJyxcblxuICAgICAgICAgICAgICAgIHJlbmRlcmVyOiB7XG4gICAgICAgICAgICAgICAgICAgIG1pbkdyaWREaXN0YW5jZTogNjAsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAnI2JiYidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dLFxuXG4gICAgICAgICAgICB5QXhlczogW3tcbiAgICAgICAgICAgICAgICB0eXBlICAgICAgIDogJ1ZhbHVlQXhpcycsXG4gICAgICAgICAgICAgICAgbG9nYXJpdGhtaWM6IHRydWUsXG5cbiAgICAgICAgICAgICAgICBudW1iZXJGb3JtYXR0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyRm9ybWF0OiAnIy4wYScsXG5cbiAgICAgICAgICAgICAgICAgICAgYmlnTnVtYmVyUHJlZml4ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtudW1iZXI6IDFlMywgc3VmZml4OiAnSyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAge251bWJlcjogMWU2LCBzdWZmaXg6ICdNJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICB7bnVtYmVyOiAxZTksIHN1ZmZpeDogJ0InfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZW5kZXJlcjoge1xuICAgICAgICAgICAgICAgICAgICBtaW5HcmlkRGlzdGFuY2U6IDYwLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogJyNiYmInXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSxcblxuICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgIHR5cGUgICAgICAgOiAnTGluZVNlcmllcycsXG4gICAgICAgICAgICAgICAgZGF0YUZpZWxkcyA6IHtkYXRlWCA6ICdkYXRlJywgdmFsdWVZOiAnYWN0aXZlJ30sXG4gICAgICAgICAgICAgICAgZmlsbCAgICAgICA6ICcjNjRiNWY2JyxcbiAgICAgICAgICAgICAgICBuYW1lICAgICAgIDogJ0FjdGl2ZScsXG4gICAgICAgICAgICAgICAgc3Ryb2tlICAgICA6ICcjNjRiNWY2JyxcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogMyxcblxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZCAgICAgICA6IHtmaWxsOiAnI2ZmZid9LFxuICAgICAgICAgICAgICAgICAgICBnZXRGaWxsRnJvbU9iamVjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsICAgICAgICAgICAgOiB7ZmlsbDogJyMwMDAnfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0eXBlICAgICAgIDogJ0xpbmVTZXJpZXMnLFxuICAgICAgICAgICAgICAgIGRhdGFGaWVsZHMgOiB7ZGF0ZVggOiAnZGF0ZScsIHZhbHVlWTogJ2Nhc2VzJ30sXG4gICAgICAgICAgICAgICAgZmlsbCAgICAgICA6ICcjYmJiJyxcbiAgICAgICAgICAgICAgICBuYW1lICAgICAgIDogJ0Nhc2VzJyxcbiAgICAgICAgICAgICAgICBzdHJva2UgICAgIDogJyNiYmInLFxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAzLFxuICAgICAgICAgICAgICAgIC8vdGVuc2lvblggICA6IC45LFxuXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kICAgICAgIDoge2ZpbGw6ICcjZmZmJ30sXG4gICAgICAgICAgICAgICAgICAgIGdldEZpbGxGcm9tT2JqZWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwgICAgICAgICAgICA6IHtmaWxsOiAnIzAwMCd9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHR5cGUgICAgICAgOiAnTGluZVNlcmllcycsXG4gICAgICAgICAgICAgICAgZGF0YUZpZWxkcyA6IHtkYXRlWCA6ICdkYXRlJywgdmFsdWVZOiAnZGVhdGhzJ30sXG4gICAgICAgICAgICAgICAgZmlsbCAgICAgICA6ICcjZmI2NzY3JyxcbiAgICAgICAgICAgICAgICBuYW1lICAgICAgIDogJ0RlYXRocycsXG4gICAgICAgICAgICAgICAgc3Ryb2tlICAgICA6ICcjZmI2NzY3JyxcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogMyxcblxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZCAgICAgICA6IHtmaWxsOiAnI2ZmZid9LFxuICAgICAgICAgICAgICAgICAgICBnZXRGaWxsRnJvbU9iamVjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsICAgICAgICAgICAgOiB7ZmlsbDogJyMwMDAnfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0eXBlICAgICAgIDogJ0xpbmVTZXJpZXMnLFxuICAgICAgICAgICAgICAgIGRhdGFGaWVsZHMgOiB7ZGF0ZVggOiAnZGF0ZScsIHZhbHVlWTogJ3JlY292ZXJlZCd9LFxuICAgICAgICAgICAgICAgIGZpbGwgICAgICAgOiAnIzI4Y2E2OCcsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgICA6ICdSZWNvdmVyZWQnLFxuICAgICAgICAgICAgICAgIHN0cm9rZSAgICAgOiAnIzI4Y2E2OCcsXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDMsXG5cbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQgICAgICAgOiB7ZmlsbDogJyNmZmYnfSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0RmlsbEZyb21PYmplY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbCAgICAgICAgICAgIDoge2ZpbGw6ICcjMDAwJ31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gY29tYmluZVNlcmllc1Rvb2x0aXA9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgY29tYmluZVNlcmllc1Rvb2x0aXA6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBmaXRQYXJlbnRIZWlnaHQ9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgZml0UGFyZW50SGVpZ2h0OiB0cnVlXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTGluZUNoYXJ0Q29tcG9uZW50KTtcblxuZXhwb3J0IHtMaW5lQ2hhcnRDb21wb25lbnQgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbnRhaW5lciAgICBmcm9tICcuLi8uLi8uLi8uLi9zcmMvdGFibGUvQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgQ291bnRyeVN0b3JlIGZyb20gJy4uLy4uL3N0b3JlL0NvdW50cmllcy5tanMnO1xuaW1wb3J0IFV0aWwgICAgICAgICBmcm9tICcuLi8uLi9VdGlsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFNoYXJlZENvdmlkLnZpZXcuY291bnRyeS5UYWJsZVxuICogQGV4dGVuZHMgTmVvLnRhYmxlLkNvbnRhaW5lclxuICovXG5jbGFzcyBUYWJsZSBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1NoYXJlZENvdmlkLnZpZXcuY291bnRyeS5UYWJsZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnU2hhcmVkQ292aWQudmlldy5jb3VudHJ5LlRhYmxlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9Wydjb3ZpZC1jb3VudHJ5LXRhYmxlJywgJ25lby10YWJsZS1jb250YWluZXInXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ2NvdmlkLWNvdW50cnktdGFibGUnLCAnbmVvLXRhYmxlLWNvbnRhaW5lciddLFxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmYXVsdCBjb25maWdzIGZvciBlYWNoIGNvbHVtblxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGNvbHVtbkRlZmF1bHRzXG4gICAgICAgICAqL1xuICAgICAgICBjb2x1bW5EZWZhdWx0czoge1xuICAgICAgICAgICAgYWxpZ24gICAgICAgICAgICAgICA6ICdyaWdodCcsXG4gICAgICAgICAgICBkZWZhdWx0U29ydERpcmVjdGlvbjogJ0RFU0MnLFxuICAgICAgICAgICAgcmVuZGVyZXIgICAgICAgICAgICA6IFV0aWwuZm9ybWF0TnVtYmVyXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX0gY29sdW1uc1xuICAgICAgICAgKi9cbiAgICAgICAgY29sdW1uczogW3tcbiAgICAgICAgICAgIGNscyAgICAgIDogWyduZW8taW5kZXgtY29sdW1uJywgJ25lby10YWJsZS1oZWFkZXItYnV0dG9uJ10sXG4gICAgICAgICAgICBkYXRhRmllbGQ6ICdpbmRleCcsXG4gICAgICAgICAgICBkb2NrICAgICA6ICdsZWZ0JyxcbiAgICAgICAgICAgIG1pbldpZHRoIDogNDAsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICcjJyxcbiAgICAgICAgICAgIHJlbmRlcmVyIDogVXRpbC5pbmRleFJlbmRlcmVyLFxuICAgICAgICAgICAgd2lkdGggICAgOiA0MFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBhbGlnbiAgICAgICAgICAgICAgIDogJ2xlZnQnLFxuICAgICAgICAgICAgZGF0YUZpZWxkICAgICAgICAgICA6ICdjb3VudHJ5JyxcbiAgICAgICAgICAgIGRlZmF1bHRTb3J0RGlyZWN0aW9uOiAnQVNDJyxcbiAgICAgICAgICAgIGRvY2sgICAgICAgICAgICAgICAgOiAnbGVmdCcsXG4gICAgICAgICAgICB0ZXh0ICAgICAgICAgICAgICAgIDogJ0NvdW50cnknLFxuICAgICAgICAgICAgd2lkdGggICAgICAgICAgICAgICA6IDIwMCxcblxuICAgICAgICAgICAgcmVuZGVyZXI6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjbHMgOiBbJ25lby1jb3VudHJ5LWNvbHVtbicsICduZW8tdGFibGUtY2VsbCddLFxuICAgICAgICAgICAgICAgICAgICBodG1sOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXJcIj4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8aW1nIHN0eWxlPVwiaGVpZ2h0OjIwcHg7IG1hcmdpbi1yaWdodDoxMHB4OyB3aWR0aDoyMHB4O1wiIHNyYz1cIicgKyBVdGlsLmdldENvdW50cnlGbGFnVXJsKGRhdGEudmFsdWUpICsgJ1wiPicgKyBkYXRhLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PidcbiAgICAgICAgICAgICAgICAgICAgXS5qb2luKCcnKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ2Nhc2VzJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ0Nhc2VzJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICdjYXNlc1Blck9uZU1pbGxpb24nLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnQ2FzZXMgLyAxTSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAnaW5mZWN0ZWQnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnSW5mZWN0ZWQnLFxuICAgICAgICAgICAgcmVuZGVyZXIgOiBkYXRhID0+IFV0aWwuZm9ybWF0SW5mZWN0ZWQoZGF0YSlcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAnYWN0aXZlJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ0FjdGl2ZScsXG4gICAgICAgICAgICByZW5kZXJlciA6IGRhdGEgPT4gVXRpbC5mb3JtYXROdW1iZXIoZGF0YSwgJyM2NEI1RjYnKVxuICAgICAgICB9LCAge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAncmVjb3ZlcmVkJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ1JlY292ZXJlZCcsXG4gICAgICAgICAgICByZW5kZXJlciA6IGRhdGEgPT4gVXRpbC5mb3JtYXROdW1iZXIoZGF0YSwgJyMyOGNhNjgnKVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICdjcml0aWNhbCcsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICdDcml0aWNhbCcsXG4gICAgICAgICAgICByZW5kZXJlciA6IGRhdGEgPT4gVXRpbC5mb3JtYXROdW1iZXIoZGF0YSwgJ29yYW5nZScpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ2RlYXRocycsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICdEZWF0aHMnLFxuICAgICAgICAgICAgcmVuZGVyZXIgOiBkYXRhID0+IFV0aWwuZm9ybWF0TnVtYmVyKGRhdGEsICcjZmI2NzY3JylcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAndG9kYXlDYXNlcycsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICdDYXNlcyB0b2RheSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAndG9kYXlEZWF0aHMnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnRGVhdGhzIHRvZGF5JyxcbiAgICAgICAgICAgIHJlbmRlcmVyIDogZGF0YSA9PiBVdGlsLmZvcm1hdE51bWJlcihkYXRhLCAnI2ZiNjc2NycpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ3Rlc3RzJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ1Rlc3RzJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICd0ZXN0c1Blck9uZU1pbGxpb24nLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnVGVzdHMgLyAxTSdcbiAgICAgICAgfV0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5TdG9yZX0gc3RvcmU9Q291bnRyeVN0b3JlXG4gICAgICAgICAqL1xuICAgICAgICBzdG9yZTogQ291bnRyeVN0b3JlXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVGFibGUpO1xuXG5leHBvcnQge1RhYmxlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnQvd3JhcHBlci9NYXBib3hHTC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBTaGFyZWRDb3ZpZC52aWV3Lm1hcGJveEdsLkNvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC53cmFwcGVyLk1hcGJveEdMXG4gKi9cbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdTaGFyZWRDb3ZpZC52aWV3Lm1hcGJveEdsLkNvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnU2hhcmVkQ292aWQudmlldy5tYXBib3hHbC5Db21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGFjY2Vzc1Rva2VuXG4gICAgICAgICAqL1xuICAgICAgICBhY2Nlc3NUb2tlbjogJ3BrLmV5SjFJam9pZEc5aWFYVWlMQ0poSWpvaVkyczRkVGxzZEhBNU1EUm1Zek50Y0d4bGN6RnBjR1ZuY3lKOS5xY216RGpwZHlRZUx0ejl6N2Q3Q2tBJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gY2VudGVyPXtsYXQ6IDQwLCBsbmc6IDIwfVxuICAgICAgICAgKi9cbiAgICAgICAgY2VudGVyOiB7bGF0OiA0MCwgbG5nOiAyMH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGRhdGFTb3VyY2VJZD0nY292aWQxOSdcbiAgICAgICAgICovXG4gICAgICAgIGRhdGFTb3VyY2VJZDogJ2NvdmlkMTknLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W119XG4gICAgICAgICAqL1xuICAgICAgICBsYXllcnM6IFt7XG4gICAgICAgICAgICBiZWZvcmVJZDogJ3dhdGVyd2F5LWxhYmVsJyxcbiAgICAgICAgICAgIGlkICAgICAgOiAnaGlsbHNoYWRpbmcnLFxuICAgICAgICAgICAgc291cmNlICA6ICdkZW0nLFxuICAgICAgICAgICAgdHlwZSAgICA6ICdoaWxsc2hhZGUnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGJlZm9yZUlkOiAnd2F0ZXJ3YXktbGFiZWwnLFxuICAgICAgICAgICAgZmlsdGVyICA6IFsnPicsIFsnZ2V0JywgJ2Nhc2VzJ10sIDBdLFxuICAgICAgICAgICAgaWQgICAgICA6ICdjb3ZpZDE5LWhlYXQnLFxuICAgICAgICAgICAgc291cmNlICA6ICdjb3ZpZDE5JyxcbiAgICAgICAgICAgIHR5cGUgICAgOiAnaGVhdG1hcCcsXG5cbiAgICAgICAgICAgIHBhaW50OiB7XG4gICAgICAgICAgICAgICAgJ2hlYXRtYXAtY29sb3InICAgIDogWydpbnRlcnBvbGF0ZScsIFsnbGluZWFyJ10sIFsnaGVhdG1hcC1kZW5zaXR5J10sIDAsICdyZ2JhKDAsMCwwLDApJywgMC4xLCAnIzkyNzkwMycsIDAuMTUsICcjZmZkNDAzJywgMSwgJyNmZjAwMDAnXSxcbiAgICAgICAgICAgICAgICAnaGVhdG1hcC1pbnRlbnNpdHknOiBbJ2ludGVycG9sYXRlJywgWydsaW5lYXInXSwgWyd6b29tJ10sIDAsIDMsIDksIDVdLFxuICAgICAgICAgICAgICAgICdoZWF0bWFwLW9wYWNpdHknICA6IFsnaW50ZXJwb2xhdGUnLCBbJ2xpbmVhciddLCBbJ3pvb20nXSwgNSwgLjk1LCA2LCAwXSxcbiAgICAgICAgICAgICAgICAnaGVhdG1hcC1yYWRpdXMnICAgOiBbJ2ludGVycG9sYXRlJywgWydsaW5lYXInXSwgWyd6b29tJ10sIDAsIDIsIDEsIDQsIDIsIDgsIDMsIDE2LCA0LCAzMiwgNSwgNjQsIDYsIDEyOCwgNywgMjU2LCA4LCA1MTIsIDksIDEwMjRdLFxuICAgICAgICAgICAgICAgICdoZWF0bWFwLXdlaWdodCcgICA6IFsnaW50ZXJwb2xhdGUnLCBbJ2xpbmVhciddLCBbJ2dldCcsICdjYXNlcyddLCAwLCAwLCAxZTQsIDFdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGJlZm9yZUlkOiAnd2F0ZXJ3YXktbGFiZWwnLFxuICAgICAgICAgICAgZmlsdGVyICA6IFsnPicsIFsnZ2V0JywgJ2Nhc2VzJ10sIDBdLFxuICAgICAgICAgICAgaWQgICAgICA6ICdjb3ZpZDE5LWNpcmNsZScsXG4gICAgICAgICAgICBzb3VyY2UgIDogJ2NvdmlkMTknLFxuICAgICAgICAgICAgdHlwZSAgICA6ICdjaXJjbGUnLFxuICAgICAgICAgICAgbWluem9vbSA6IDUsXG5cbiAgICAgICAgICAgIHBhaW50OiB7XG4gICAgICAgICAgICAgICAgJ2NpcmNsZS1jb2xvcicgICAgOiBbJ3N0ZXAnLCBbJ2dldCcsICdjYXNlcyddLCAnIzlhZDVmZicsIDAsICcjOWFmNmZmJywgMjAsICcjMDBmZmZmJywgMjAwLCAnI2ZmZmYwMCcsIDQwMCwgJyNmMWYwNzUnLCA4MDAsICcjZjliMTk2JywgMWUzLCAnI2YyOGNiMScsIDJlMywgJyNmMjhjYjEnXSxcbiAgICAgICAgICAgICAgICAnY2lyY2xlLW9wYWNpdHknICA6IFsnaW50ZXJwb2xhdGUnLCBbJ2xpbmVhciddLCBbJ3pvb20nXSwgNSwgMCwgNiwgLjZdLFxuICAgICAgICAgICAgICAgICdjaXJjbGUtcmFkaXVzJyAgIDogWydzdGVwJywgWydnZXQnLCAnY2FzZXMnXSwgMTAsIDEwMCwgMjAsIDUwMCwgMzAsIDFlMywgNDAsIDFlNCwgNTBdLFxuICAgICAgICAgICAgICAgICdjaXJjbGUtdHJhbnNsYXRlJzogWzAsIDIwXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBiZWZvcmVJZDogJ3dhdGVyd2F5LWxhYmVsJyxcbiAgICAgICAgICAgIGZpbHRlciAgOiBbJz4nLCBbJ2dldCcsICdjYXNlcyddLCAwXSxcbiAgICAgICAgICAgIGlkICAgICAgOiAnY292aWQxOS1jaXJjbGUtdGV4dCcsXG4gICAgICAgICAgICBzb3VyY2UgIDogJ2NvdmlkMTknLFxuICAgICAgICAgICAgdHlwZSAgICA6ICdzeW1ib2wnLFxuICAgICAgICAgICAgbWluem9vbSA6IDUsXG5cbiAgICAgICAgICAgIGxheW91dDoge1xuICAgICAgICAgICAgICAgICd0ZXh0LWFsbG93LW92ZXJsYXAnICAgOiB0cnVlLFxuICAgICAgICAgICAgICAgICd0ZXh0LWZpZWxkJyAgICAgICAgICAgOiBbJ3RvLXN0cmluZycsIFsnZ2V0JywgJ2Nhc2VzJ11dLFxuICAgICAgICAgICAgICAgICd0ZXh0LWZvbnQnICAgICAgICAgICAgOiBbJ0RJTiBPZmZjIFBybyBNZWRpdW0nLCAnQXJpYWwgVW5pY29kZSBNUyBCb2xkJ10sXG4gICAgICAgICAgICAgICAgJ3RleHQtaWdub3JlLXBsYWNlbWVudCc6IHRydWUsXG4gICAgICAgICAgICAgICAgJ3RleHQtc2l6ZScgICAgICAgICAgICA6IDEyXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBwYWludDoge1xuICAgICAgICAgICAgICAgICd0ZXh0LW9wYWNpdHknICA6IFsnaW50ZXJwb2xhdGUnLCBbJ2xpbmVhciddLCBbJ3pvb20nXSwgNSwgMCwgNywgMV0sXG4gICAgICAgICAgICAgICAgJ3RleHQtdHJhbnNsYXRlJzogWzAsIDIwXSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBodHRwczovL2RvY3MubWFwYm94LmNvbS9tYXBib3gtZ2wtanMvc3R5bGUtc3BlYy9cbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fFN0cmluZ30gbWFwYm94U3R5bGU9J21hcGJveDovL3N0eWxlcy90b2JpdS9jazk0NHllcnEzaHJqMWlwOTFvMzRmYTdkJ1xuICAgICAgICAgKi9cbiAgICAgICAgbWFwYm94U3R5bGU6ICdtYXBib3g6Ly9zdHlsZXMvdG9iaXUvY2s5NDR5ZXJxM2hyajFpcDkxbzM0ZmE3ZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWZXJzaW9uIGZvciB0aGUgbmVvLWRhcmsgdGhlbWVcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fFN0cmluZ30gbWFwYm94U3R5bGU9J21hcGJveDovL3N0eWxlcy90b2JpdS9jazk0NHllcnEzaHJqMWlwOTFvMzRmYTdkJ1xuICAgICAgICAgKi9cbiAgICAgICAgbWFwYm94U3R5bGVEYXJrOiAnbWFwYm94Oi8vc3R5bGVzL3RvYml1L2NrOHlheGFreDExengxaWxnc2hxNDUxY3YnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVmVyc2lvbiBmb3IgdGhlIG5lby1saWdodCB0aGVtZVxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8U3RyaW5nfSBtYXBib3hTdHlsZT0nbWFwYm94Oi8vc3R5bGVzL3RvYml1L2NrOTQ1OXBsZTBxYzcxaW52dWdkejZiYmYnXG4gICAgICAgICAqL1xuICAgICAgICBtYXBib3hTdHlsZUxpZ2h0OiAnbWFwYm94Oi8vc3R5bGVzL3RvYml1L2NrOTQ1OXBsZTBxYzcxaW52dWdkejZiYmYnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W119XG4gICAgICAgICAqL1xuICAgICAgICBzb3VyY2VzOiBbe1xuICAgICAgICAgICAgaWQgIDogJ2NvdmlkMTknLFxuICAgICAgICAgICAgdHlwZTogJ2dlb2pzb24nLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHR5cGUgICAgOiAnRmVhdHVyZUNvbGxlY3Rpb24nLFxuICAgICAgICAgICAgICAgIGZlYXR1cmVzOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBpZCAgOiAnZGVtJyxcbiAgICAgICAgICAgIHR5cGU6ICdyYXN0ZXItZGVtJyxcbiAgICAgICAgICAgIHVybCA6ICdtYXBib3g6Ly9tYXBib3gudGVycmFpbi1yZ2InXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ29tcG9uZW50KTtcblxuZXhwb3J0IHtDb21wb25lbnQgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2VDb250YWluZXIgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2NvbnRhaW5lci9CYXNlLm1qcyc7XG5pbXBvcnQgQ2hlY2tCb3ggICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9zcmMvZm9ybS9maWVsZC9DaGVja0JveC5tanMnO1xuaW1wb3J0IENvbXBvbmVudCAgICAgICAgICAgZnJvbSAnLi9Db21wb25lbnQubWpzJztcbmltcG9ydCBDb250YWluZXJDb250cm9sbGVyIGZyb20gJy4vQ29udGFpbmVyQ29udHJvbGxlci5tanMnO1xuaW1wb3J0IFBhbmVsICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2NvbnRhaW5lci9QYW5lbC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBTaGFyZWRDb3ZpZC52aWV3Lm1hcGJveEdsLkNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5CYXNlXG4gKi9cbmNsYXNzIENvbnRhaW5lciBleHRlbmRzIEJhc2VDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdTaGFyZWRDb3ZpZC52aWV3Lm1hcGJveEdsLkNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnU2hhcmVkQ292aWQudmlldy5tYXBib3hHbC5Db250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY292aWQtbWFwYm94Z2wtY29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NvdmlkLW1hcGJveGdsLWNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29udHJvbGxlci5Db21wb25lbnR9IGNvbnRyb2xsZXI9Q29udGFpbmVyQ29udHJvbGxlclxuICAgICAgICAgKi9cbiAgICAgICAgY29udHJvbGxlcjogQ29udGFpbmVyQ29udHJvbGxlcixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfSBpdGVtc1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBtb2R1bGUgICA6IENvbXBvbmVudCxcbiAgICAgICAgICAgIHJlZmVyZW5jZTogJ21hcGJveGdsbWFwJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICA6IFBhbmVsLFxuICAgICAgICAgICAgaGVpZ2h0ICAgICAgOiAxNTAsXG4gICAgICAgICAgICBpZ25vcmVMYXlvdXQ6IHRydWUsXG5cbiAgICAgICAgICAgIGNvbnRhaW5lckNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNixcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzEwcHgnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaGVhZGVyczogW3tcbiAgICAgICAgICAgICAgICBkb2NrOiAndG9wJyxcbiAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvbldpbmRvd01hcE1heGltaXplQnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmFyIGZhLXdpbmRvdy1tYXhpbWl6ZSdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ01hcCBDb250cm9scydcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0sXG5cbiAgICAgICAgICAgIGl0ZW1EZWZhdWx0czoge1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgICA6IENoZWNrQm94LFxuICAgICAgICAgICAgICAgIGZsZXggICAgICA6ICcwIDEgYXV0bycsXG4gICAgICAgICAgICAgICAgbGFiZWxXaWR0aDogMTAwXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICBjaGVja2VkICA6IHRydWUsXG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnRGV0YWlsIENpcmNsZXMnLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogJ29uRGV0YWlsQ2lyY2xlc0NoYW5nZSd9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZCAgOiB0cnVlLFxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ0hlYXRNYXAnLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogJ29uSGVhdE1hcENoYW5nZSd9LFxuICAgICAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpblRvcDogJzVweCd9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZCAgOiB0cnVlLFxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1RlcnJhaW4nLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogJ29uVGVycmFpbkNoYW5nZSd9LFxuICAgICAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpblRvcDogJzVweCd9XG4gICAgICAgICAgICB9XSxcblxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gICAgICAgOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIHJpZ2h0ICAgICAgICAgIDogJzEwcHgnLFxuICAgICAgICAgICAgICAgIHRvcCAgICAgICAgICAgIDogJzEwcHgnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsYXlvdXQ9e250eXBlOiAnZml0J31cbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDoge250eXBlOiAnZml0J30sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICBzdHlsZToge3Bvc2l0aW9uOiAncmVsYXRpdmUnLCBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJ30sXG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICBzdHlsZToge3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJ30sXG4gICAgICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7aGVpZ2h0OiAnMTAwJSd9LFxuICAgICAgICAgICAgICAgICAgICBjbjogW11cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGdldFZkb21Sb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52ZG9tLmNuWzBdLmNuWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZ2V0Vm5vZGVSb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52bm9kZS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF07XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb250YWluZXIpO1xuXG5leHBvcnQge0NvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29tcG9uZW50Q29udHJvbGxlciBmcm9tICcuLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlci9Db21wb25lbnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgU2hhcmVkQ292aWQudmlldy5tYXBib3hHbC5Db250YWluZXJDb250cm9sbGVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udHJvbGxlci5Db21wb25lbnRcbiAqL1xuY2xhc3MgQ29udGFpbmVyQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdTaGFyZWRDb3ZpZC52aWV3Lm1hcGJveEdsLkNvbnRhaW5lckNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1NoYXJlZENvdmlkLnZpZXcubWFwYm94R2wuQ29udGFpbmVyQ29udHJvbGxlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdtYXBib3hnbC1jb250YWluZXItY29udHJvbGxlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdtYXBib3hnbC1jb250YWluZXItY29udHJvbGxlcidcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbGF5ZXJJZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2aXNpYmlsaXR5XG4gICAgICovXG4gICAgY2hhbmdlTGF5ZXJWaXNpYmlsaXR5KGxheWVySWQsIHZpc2liaWxpdHkpIHtcbiAgICAgICAgdGhpcy5nZXRSZWZlcmVuY2UoJ21hcGJveGdsbWFwJykuc2V0TGF5b3V0UHJvcGVydHkoe1xuICAgICAgICAgICAgbGF5ZXJJZDogbGF5ZXJJZCxcbiAgICAgICAgICAgIGtleSAgICA6ICd2aXNpYmlsaXR5JyxcbiAgICAgICAgICAgIHZhbHVlICA6IHZpc2liaWxpdHlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRGV0YWlsQ2lyY2xlc0NoYW5nZShkYXRhKSB7XG4gICAgICAgIGNvbnN0IHZpc2liaWxpdHkgPSBkYXRhLnZhbHVlID8gJ3Zpc2libGUnIDogJ25vbmUnO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlTGF5ZXJWaXNpYmlsaXR5KCdjb3ZpZDE5LWNpcmNsZScsICAgICAgdmlzaWJpbGl0eSk7XG4gICAgICAgIHRoaXMuY2hhbmdlTGF5ZXJWaXNpYmlsaXR5KCdjb3ZpZDE5LWNpcmNsZS10ZXh0JywgdmlzaWJpbGl0eSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uSGVhdE1hcENoYW5nZShkYXRhKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlTGF5ZXJWaXNpYmlsaXR5KCdjb3ZpZDE5LWhlYXQnLCBkYXRhLnZhbHVlID8gJ3Zpc2libGUnIDogJ25vbmUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25UZXJyYWluQ2hhbmdlKGRhdGEpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VMYXllclZpc2liaWxpdHkoJ2hpbGxzaGFkaW5nJywgZGF0YS52YWx1ZSA/ICd2aXNpYmxlJyA6ICdub25lJyk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb250YWluZXJDb250cm9sbGVyKTtcblxuZXhwb3J0IHtDb250YWluZXJDb250cm9sbGVyIGFzIGRlZmF1bHR9OyJdLCJzb3VyY2VSb290IjoiIn0=