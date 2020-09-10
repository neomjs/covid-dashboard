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
            flex  : 'none',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3NoYXJlZGNvdmlkL1V0aWwubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWQvYXBwLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3NoYXJlZGNvdmlkL21vZGVsL0NvdW50cnkubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWQvbW9kZWwvSGlzdG9yaWNhbERhdGEubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWQvc3RvcmUvQ291bnRyaWVzLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3NoYXJlZGNvdmlkL3N0b3JlL0hpc3RvcmljYWxEYXRhLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3NoYXJlZGNvdmlkL3ZpZXcvQXR0cmlidXRpb25Db21wb25lbnQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWQvdmlldy9Gb290ZXJDb250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWQvdmlldy9HYWxsZXJ5Q29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3NoYXJlZGNvdmlkL3ZpZXcvR2FsbGVyeUNvbnRhaW5lckNvbnRyb2xsZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWQvdmlldy9IZWFkZXJDb250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWQvdmlldy9IZWxpeENvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9zaGFyZWRjb3ZpZC92aWV3L0hlbGl4Q29udGFpbmVyQ29udHJvbGxlci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9zaGFyZWRjb3ZpZC92aWV3L01haW5Db250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWQvdmlldy9NYWluQ29udGFpbmVyQ29udHJvbGxlci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9zaGFyZWRjb3ZpZC92aWV3L1RhYmxlQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3NoYXJlZGNvdmlkL3ZpZXcvVGFibGVDb250YWluZXJDb250cm9sbGVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3NoYXJlZGNvdmlkL3ZpZXcvV29ybGRNYXBDb21wb25lbnQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWQvdmlldy9Xb3JsZE1hcENvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9zaGFyZWRjb3ZpZC92aWV3L1dvcmxkTWFwQ29udGFpbmVyQ29udHJvbGxlci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9zaGFyZWRjb3ZpZC92aWV3L2NvdW50cnkvR2FsbGVyeS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9zaGFyZWRjb3ZpZC92aWV3L2NvdW50cnkvSGVsaXgubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWQvdmlldy9jb3VudHJ5L0hpc3RvcmljYWxEYXRhVGFibGUubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWQvdmlldy9jb3VudHJ5L0xpbmVDaGFydENvbXBvbmVudC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9zaGFyZWRjb3ZpZC92aWV3L2NvdW50cnkvVGFibGUubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWQvdmlldy9tYXBib3hHbC9Db21wb25lbnQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWQvdmlldy9tYXBib3hHbC9Db250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWQvdmlldy9tYXBib3hHbC9Db250YWluZXJDb250cm9sbGVyLm1qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUEyQzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwREFBSTtBQUN2Qiw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnR0FBZ0csT0FBTztBQUN2RyxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FB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QUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJ2ZW5kb3JzfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlIGZyb20gJy4uLy4uL3NyYy9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBTdGF0aWMgdXRpbGl0eSBjbGFzc1xuICogQGNsYXNzIFNoYXJlZENvdmlkLlV0aWxcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgVXRpbCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgcmVnZXggdG8gcmVwbGFjZSBibGFuayBjaGFyc1xuICAgICAgICAgKiBAbWVtYmVyIHtSZWdFeHB9IGZsYWdSZWdFeD0vIC9naVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIGZsYWdSZWdFeDogLyAvZ2ksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9OdW1iZXIvdG9Mb2NhbGVTdHJpbmdcbiAgICAgICAgICogQ2hhbmdlIHRoaXMgY29uZmlnIHRvIGVuZm9yY2UgYSBjb3VudHkgc3BlY2lmaWMgZm9ybWF0dGluZyAoZS5nLiAnZGUtREUnKVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGxvY2FsZXM9J2RlZmF1bHQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgbG9jYWxlczogJ2RlZmF1bHQnXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdTaGFyZWRDb3ZpZC5VdGlsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdTaGFyZWRDb3ZpZC5VdGlsJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciB0aGUgY2FzZXNQZXJPbmVNaWxsaW9uIGNvbHVtbiB0byBzaG93ICUgb2YgcG9wdWxhdGlvblxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEudmFsdWVcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyBmb3JtYXRJbmZlY3RlZChkYXRhKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGRhdGEudmFsdWU7XG5cbiAgICAgICAgaWYgKCFOZW8uaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgfHwgJ04vQSc7XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgLyAxMDApO1xuICAgICAgICB2YWx1ZSAvPSAxMDA7XG5cbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0ZpeGVkKDIpICsgJyAlJztcblxuICAgICAgICByZXR1cm4gdmFsdWUudG9Mb2NhbGVTdHJpbmcoVXRpbC5sb2NhbGVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIGdldCB1c2VkIGFzIGEgZ3JpZCByZW5kZXJlciwgc28gdGhlIDJuZCBwYXJhbSBpcyBhbiBvdmVybG9hZCAod291bGQgYmUge09iamVjdH0gcmVjb3JkKVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEudmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2NvbG9yXVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIGZvcm1hdE51bWJlcihkYXRhLCBjb2xvcikge1xuICAgICAgICBsZXQgdmFsdWUgPSBkYXRhLnZhbHVlO1xuXG4gICAgICAgIGlmICghTmVvLmlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlIHx8ICdOL0EnO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0xvY2FsZVN0cmluZyhVdGlsLmxvY2FsZXMpO1xuXG4gICAgICAgIHJldHVybiB0eXBlb2YgY29sb3IgIT09ICdzdHJpbmcnID8gdmFsdWUgOiBgPHNwYW4gc3R5bGU9XCJjb2xvcjoke2NvbG9yfTtcIj4ke3ZhbHVlfTwvc3Bhbj5gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSB1cmxcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Q291bnRyeUZsYWdVcmwobmFtZSkge1xuICAgICAgICBjb25zdCBtYXAgPSB7XG4gICAgICAgICAgICAnYm9zbmlhJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdib3NuaWEtYW5kLWhlcnplZ292aW5hJyxcbiAgICAgICAgICAgICdjYWJvLXZlcmRlJyAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2NhcGUtdmVyZGUnLFxuICAgICAgICAgICAgJ2NhcicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnY2VudHJhbC1hZnJpY2FuLXJlcHVibGljJyxcbiAgICAgICAgICAgICdjYXJpYmJlYW4tbmV0aGVybGFuZHMnICAgICAgICAgICAgICAgIDogJ25ldGhlcmxhbmRzJyxcbiAgICAgICAgICAgICdjaGFubmVsLWlzbGFuZHMnICAgICAgICAgICAgICAgICAgICAgIDogJ2plcnNleScsXG4gICAgICAgICAgICAnY8O0dGUtZFxcJ2l2b2lyZScgICAgICAgICAgICAgICAgICAgICAgIDogJ2l2b3J5LWNvYXN0JyxcbiAgICAgICAgICAgICdjb25nbycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3JlcHVibGljLW9mLXRoZS1jb25nbycsXG4gICAgICAgICAgICAnY29uZ28sLXRoZS1kZW1vY3JhdGljLXJlcHVibGljLW9mLXRoZSc6ICdkZW1vY3JhdGljLXJlcHVibGljLW9mLWNvbmdvJyxcbiAgICAgICAgICAgICdjdXJhw6dhbycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdjdXJhY2FvJyxcbiAgICAgICAgICAgICdjemVjaGlhJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2N6ZWNoLXJlcHVibGljJyxcbiAgICAgICAgICAgICdkaWFtb25kLXByaW5jZXNzJyAgICAgICAgICAgICAgICAgICAgIDogJ2phcGFuJywgLy8gY3J1aXNlIHNoaXBcbiAgICAgICAgICAgICdkcmMnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2RlbW9jcmF0aWMtcmVwdWJsaWMtb2YtY29uZ28nLFxuICAgICAgICAgICAgJ2VsLXNhbHZhZG9yJyAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnc2FsdmFkb3InLFxuICAgICAgICAgICAgJ2Vzd2F0aW5pJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnc3dhemlsYW5kJyxcbiAgICAgICAgICAgICdmYWVyb2UtaXNsYW5kcycgICAgICAgICAgICAgICAgICAgICAgIDogJ2Zhcm9lLWlzbGFuZHMnLFxuICAgICAgICAgICAgJ2ZhbGtsYW5kLWlzbGFuZHMtKG1hbHZpbmFzKScgICAgICAgICAgOiAnZmFsa2xhbmQtaXNsYW5kcycsXG4gICAgICAgICAgICAnZnJlbmNoLWd1aWFuYScgICAgICAgICAgICAgICAgICAgICAgICA6ICdmcmFuY2UnLCAvLyA/XG4gICAgICAgICAgICAnZ3VhZGVsb3VwZScgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdmcmFuY2UnLCAvLyA/XG4gICAgICAgICAgICAnaG9seS1zZWUtKHZhdGljYW4tY2l0eS1zdGF0ZSknICAgICAgICA6ICd2YXRpY2FuLWNpdHknLFxuICAgICAgICAgICAgJ2lyYW4sLWlzbGFtaWMtcmVwdWJsaWMtb2YnICAgICAgICAgICAgOiAnaXJhbicsXG4gICAgICAgICAgICAnbGFvLXBlb3BsZVxcJ3MtZGVtb2NyYXRpYy1yZXB1YmxpYycgICAgOiAnbGFvcycsXG4gICAgICAgICAgICAnbGlieWFuLWFyYWItamFtYWhpcml5YScgICAgICAgICAgICAgICA6ICdsaWJ5YScsXG4gICAgICAgICAgICAnbWFjZWRvbmlhJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdyZXB1YmxpYy1vZi1tYWNlZG9uaWEnLFxuICAgICAgICAgICAgJ21heW90dGUnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnZnJhbmNlJywgLy8gP1xuICAgICAgICAgICAgJ21vbGRvdmEsLXJlcHVibGljLW9mJyAgICAgICAgICAgICAgICAgOiAnbW9sZG92YScsXG4gICAgICAgICAgICAnbXMtemFhbmRhbScgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICduZXRoZXJsYW5kcycsIC8vIGNydWlzZSBzaGlwXG4gICAgICAgICAgICAnbmV3LWNhbGVkb25pYScgICAgICAgICAgICAgICAgICAgICAgICA6ICdmcmFuY2UnLFxuICAgICAgICAgICAgJ3BhbGVzdGluaWFuLXRlcnJpdG9yeSwtb2NjdXBpZWQnICAgICAgOiAncGFsZXN0aW5lJyxcbiAgICAgICAgICAgICdwb2xhbmQnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3JlcHVibGljLW9mLXBvbGFuZCcsXG4gICAgICAgICAgICAncsOpdW5pb24nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnZnJhbmNlJyxcbiAgICAgICAgICAgICdzLi1rb3JlYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3NvdXRoLWtvcmVhJyxcbiAgICAgICAgICAgICdzdC4tYmFydGgnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3N0LWJhcnRzJyxcbiAgICAgICAgICAgICdzYWludC1sdWNpYScgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3N0LWx1Y2lhJyxcbiAgICAgICAgICAgICdzYWludC1tYXJ0aW4nICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3NpbnQtbWFhcnRlbicsXG4gICAgICAgICAgICAnc2FpbnQtcGllcnJlLW1pcXVlbG9uJyAgICAgICAgICAgICAgICA6ICdmcmFuY2UnLFxuICAgICAgICAgICAgJ3NhaW50LXZpbmNlbnQtYW5kLXRoZS1ncmVuYWRpbmVzJyAgICAgOiAnc3QtdmluY2VudC1hbmQtdGhlLWdyZW5hZGluZXMnLFxuICAgICAgICAgICAgJ3N5cmlhbi1hcmFiLXJlcHVibGljJyAgICAgICAgICAgICAgICAgOiAnc3lyaWEnLFxuICAgICAgICAgICAgJ3RhbnphbmlhLC11bml0ZWQtcmVwdWJsaWMtb2YnICAgICAgICAgOiAndGFuemFuaWEnLFxuICAgICAgICAgICAgJ3RpbW9yLWxlc3RlJyAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnZWFzdC10aW1vcicsXG4gICAgICAgICAgICAndHVya3MtYW5kLWNhaWNvcy1pc2xhbmRzJyAgICAgICAgICAgICA6ICd0dXJrcy1hbmQtY2FpY29zJyxcbiAgICAgICAgICAgICd1LnMuLXZpcmdpbi1pc2xhbmRzJyAgICAgICAgICAgICAgICAgIDogJ3Zpcmdpbi1pc2xhbmRzJyxcbiAgICAgICAgICAgICd1YWUnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3VuaXRlZC1hcmFiLWVtaXJhdGVzJyxcbiAgICAgICAgICAgICd1aycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3VuaXRlZC1raW5nZG9tJyxcbiAgICAgICAgICAgICd1c2EnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3VuaXRlZC1zdGF0ZXMtb2YtYW1lcmljYScsXG4gICAgICAgICAgICAndXpiZWtpc3RhbicgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd1emJla2lzdG4nLFxuICAgICAgICAgICAgJ3ZlbmV6dWVsYSwtYm9saXZhcmlhbi1yZXB1YmxpYy1vZicgICAgOiAndmVuZXp1ZWxhJyxcbiAgICAgICAgICAgICd2aWV0LW5hbScgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3ZpZXRuYW0nXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGltYWdlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKFV0aWwuZmxhZ1JlZ0V4LCAnLScpO1xuXG4gICAgICAgIGltYWdlTmFtZSA9IG1hcFtpbWFnZU5hbWVdIHx8IGltYWdlTmFtZTtcblxuICAgICAgICBpZiAoTmVvLmNvbmZpZy5pc0dpdEh1YlBhZ2VzKSB7XG4gICAgICAgICAgICBsZXQgcGF0aCA9ICcuLi8uLi8uLi8uLi9yZXNvdXJjZXMvaW1hZ2VzL2ZsYXRpY29uL2NvdW50cnlfZmxhZ3MvcG5nLycgKyBpbWFnZU5hbWUgKyAnLnBuZyc7XG5cbiAgICAgICAgICAgIGlmICghTmVvLmNvbmZpZy5pc0V4cGVyaW1lbnRhbCkge1xuICAgICAgICAgICAgICAgIHBhdGggPSAnLi4vLi4vJyArIHBhdGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXRoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbmVvbWpzL3BhZ2VzL21hc3Rlci9yZXNvdXJjZXMvaW1hZ2VzL2ZsYXRpY29uL2NvdW50cnlfZmxhZ3MvcG5nLycgKyBpbWFnZU5hbWUgKyAnLnBuZyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLmluZGV4XG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBzdGF0aWMgaW5kZXhSZW5kZXJlcihkYXRhKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbHMgOiBbJ25lby1pbmRleC1jb2x1bW4nLCAnbmVvLXRhYmxlLWNlbGwnXSxcbiAgICAgICAgICAgIGh0bWw6IGRhdGEuaW5kZXggKyAxXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhVdGlsKTtcblxuZXhwb3J0IGRlZmF1bHQgVXRpbDsiLCJpbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuL3ZpZXcvTWFpbkNvbnRhaW5lci5tanMnO1xuXG5jb25zdCBvblN0YXJ0ID0gKCkgPT4gTmVvLmFwcCh7XG4gICAgYXBwUGF0aCA6ICdhcHBzL3NoYXJlZGNvdmlkLycsXG4gICAgbWFpblZpZXc6IE1haW5Db250YWluZXIsXG4gICAgbmFtZSAgICA6ICdTaGFyZWRDb3ZpZCdcbn0pO1xuXG5leHBvcnQge29uU3RhcnQgYXMgb25TdGFydH07IiwiaW1wb3J0IE1vZGVsICBmcm9tICcuLi8uLi8uLi9zcmMvZGF0YS9Nb2RlbC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBTaGFyZWRDb3ZpZC5tb2RlbC5Db3VudHJ5XG4gKiBAZXh0ZW5kcyBOZW8uZGF0YS5Nb2RlbFxuICovXG5jbGFzcyBDb3VudHJ5IGV4dGVuZHMgTW9kZWwge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnU2hhcmVkQ292aWQubW9kZWwuQ291bnRyeScsXG5cbiAgICAgICAgZmllbGRzOiBbe1xuICAgICAgICAgICAgbmFtZTogJ2FjdGl2ZScsXG4gICAgICAgICAgICB0eXBlOiAnSW50ZWdlcidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2Nhc2VzJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnY2FzZXNQZXJPbmVNaWxsaW9uJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnY291bnRyeScsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnY291bnRyeUluZm8nLFxuICAgICAgICAgICAgdHlwZTogJ09iamVjdCcgLy8gX2lkLCBmbGFnLCBpc28yLCBpc28zLCBsYXQsIGxvbmdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2NyaXRpY2FsJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZGVhdGhzJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnaW5kZXgnLFxuICAgICAgICAgICAgdHlwZTogJ0ludGVnZXInXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdpbmZlY3RlZCcsIC8vIHJlbmRlcmVyIHBhcnNlcyB0byAlIG9mIHBvcHVsYXRpb25cbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAncmVjb3ZlcmVkJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAndGVzdHMnLFxuICAgICAgICAgICAgdHlwZTogJ0ludGVnZXInXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICd0ZXN0c1Blck9uZU1pbGxpb24nLFxuICAgICAgICAgICAgdHlwZTogJ0ludGVnZXInXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICd0b2RheUNhc2VzJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAndG9kYXlEZWF0aHMnLFxuICAgICAgICAgICAgdHlwZTogJ0ludGVnZXInXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ291bnRyeSk7XG5cbmV4cG9ydCB7Q291bnRyeSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgTW9kZWwgIGZyb20gJy4uLy4uLy4uL3NyYy9kYXRhL01vZGVsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFNoYXJlZENvdmlkLm1vZGVsLkhpc3RvcmljYWxEYXRhXG4gKiBAZXh0ZW5kcyBOZW8uZGF0YS5Nb2RlbFxuICovXG5jbGFzcyBIaXN0b3JpY2FsRGF0YSBleHRlbmRzIE1vZGVsIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogJ1NoYXJlZENvdmlkLm1vZGVsLkhpc3RvcmljYWxEYXRhJyxcblxuICAgICAgICBmaWVsZHM6IFt7XG4gICAgICAgICAgICBuYW1lOiAnYWN0aXZlJywgLy8gZG9lcyBub3QgZXhpc3QgaW4gdGhlIGFwaSA9PiBjYXNlcyAtIGRlYXRocyAtIHJlY292ZXJlZFxuICAgICAgICAgICAgdHlwZTogJ2ludCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2Nhc2VzJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbnQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdkYXRlJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnIC8vIGRhdGUgPT4gMS8yMi8yMFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZGFpbHlBY3RpdmUnLFxuICAgICAgICAgICAgdHlwZTogJ2ludCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2RhaWx5Q2FzZXMnLFxuICAgICAgICAgICAgdHlwZTogJ2ludCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2RhaWx5RGVhdGhzJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbnQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdkYWlseVJlY292ZXJlZCcsXG4gICAgICAgICAgICB0eXBlOiAnaW50J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZGVhdGhzJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbnQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdyZWNvdmVyZWQnLFxuICAgICAgICAgICAgdHlwZTogJ2ludCdcbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIaXN0b3JpY2FsRGF0YSk7XG5cbmV4cG9ydCB7SGlzdG9yaWNhbERhdGEgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvdW50cnkgZnJvbSAnLi4vbW9kZWwvQ291bnRyeS5tanMnO1xuaW1wb3J0IFN0b3JlICAgZnJvbSAnLi4vLi4vLi4vc3JjL2RhdGEvU3RvcmUubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgU2hhcmVkQ292aWQuc3RvcmUuQ291bnRyaWVzXG4gKiBAZXh0ZW5kcyBOZW8uZGF0YS5TdG9yZVxuICovXG5jbGFzcyBDb3VudHJpZXMgZXh0ZW5kcyBTdG9yZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdTaGFyZWRDb3ZpZC5zdG9yZS5Db3VudHJpZXMnLFxuXG4gICAgICAgIGtleVByb3BlcnR5OiAnY291bnRyeScsXG4gICAgICAgIG1vZGVsICAgICAgOiBDb3VudHJ5LFxuXG4gICAgICAgIHNvcnRlcnM6IFt7XG4gICAgICAgICAgICBwcm9wZXJ0eSA6ICdjYXNlcycsXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdERVNDJ1xuICAgICAgICB9XVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENvdW50cmllcyk7XG5cbmV4cG9ydCB7Q291bnRyaWVzIGFzIGRlZmF1bHR9OyIsImltcG9ydCBIaXN0b3JpY2FsRGF0YU1vZGVsIGZyb20gJy4uL21vZGVsL0hpc3RvcmljYWxEYXRhLm1qcyc7XG5pbXBvcnQgU3RvcmUgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvZGF0YS9TdG9yZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBTaGFyZWRDb3ZpZC5zdG9yZS5IaXN0b3JpY2FsRGF0YVxuICogQGV4dGVuZHMgTmVvLmRhdGEuU3RvcmVcbiAqL1xuY2xhc3MgSGlzdG9yaWNhbERhdGEgZXh0ZW5kcyBTdG9yZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdTaGFyZWRDb3ZpZC5zdG9yZS5IaXN0b3JpY2FsRGF0YScsXG5cbiAgICAgICAga2V5UHJvcGVydHk6ICdkYXRlJyxcbiAgICAgICAgbW9kZWwgICAgICA6IEhpc3RvcmljYWxEYXRhTW9kZWwsXG5cbiAgICAgICAgc29ydGVyczogW3tcbiAgICAgICAgICAgIHByb3BlcnR5IDogJ2RhdGUnLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnREVTQydcbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIaXN0b3JpY2FsRGF0YSk7XG5cbmV4cG9ydCB7SGlzdG9yaWNhbERhdGEgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi9zcmMvY29tcG9uZW50L0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgU2hhcmVkQ292aWQudmlldy5BdHRyaWJ1dGlvbkNvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIEF0dHJpYnV0aW9uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nU2hhcmVkQ292aWQudmlldy5BdHRyaWJ1dGlvbkNvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnU2hhcmVkQ292aWQudmlldy5BdHRyaWJ1dGlvbkNvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnY292aWQtYXR0cmlidXRpb24tY29tcG9uZW50J11cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ2NvdmlkLWF0dHJpYnV0aW9uLWNvbXBvbmVudCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSB2ZG9tXG4gICAgICAgICAqL1xuICAgICAgICB2ZG9tOiB7XG4gICAgICAgICAgICB0YWcgIDogJ2RpdicsXG4gICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzIwcHgnfSxcbiAgICAgICAgICAgIGNuICAgOiBbe1xuICAgICAgICAgICAgICAgIHRhZyA6ICdoMicsXG4gICAgICAgICAgICAgICAgaHRtbDogJ0F0dHJpYnV0aW9uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6ICd1bCcsXG4gICAgICAgICAgICAgICAgY246IFtcbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ2xpJywgaHRtbDogJ1RoZSBsb2dvcyB3ZXJlIGNyZWF0ZWQgYnkgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmRyaWVmbWVpZXIuY29tL1wiPlNlYmFzdGlhbiBEcmllZm1laWVyPC9hPi4gVGhhbmsgeW91ISd9LFxuICAgICAgICAgICAgICAgICAgICB7dGFnOiAnbGknLCBodG1sOiBbJ1RoZSBsb2dvcyBhcmUgYmFzZWQgb24gdGhlIGltYWdlIGZyb20gPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vcGhpbC5jZGMuZ292L0RldGFpbHMuYXNweD9waWQ9MjMzMTJcIj5DREMgUHVibGljIEhlYWx0aCBJbWFnZSBMaWJyYXJ5IChQSElMKTwvYT4sPC9icj4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NvIGNyZWRpdHMgdG8gdGhlIGNvbnRlbnQgcHJvdmlkZXJzIENEQy8gQWxpc3NhIEVja2VydCwgTVM7IERhbiBIaWdnaW5zLCBNQU1TLiddLmpvaW4oJycpfSxcbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ2xpJywgaHRtbDogJ0RhdGEgcHJvdmlkZWQgYnk6IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vTm92ZWxDT1ZJRC9BUElcIj5Ob3ZlbENPVklEIC8gQVBJPC9hPi4nfSxcbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ2xpJywgaHRtbDogJ0NvdW50cnkgRmxhZyBJY29ucyBtYWRlIGJ5IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vYXV0aG9ycy9mcmVlcGlrXCIgdGl0bGU9XCJGcmVlcGlrXCI+RnJlZXBpazwvYT4gZnJvbSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL1wiIHRpdGxlPVwiRmxhdGljb25cIj4gd3d3LmZsYXRpY29uLmNvbTwvYT4uJ30sXG4gICAgICAgICAgICAgICAgICAgIHt0YWc6ICdsaScsIGh0bWw6ICdDaGFydHMgZ290IGNyZWF0ZWQgd2l0aCA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuYW1jaGFydHMuY29tL2RvY3MvdjQvXCI+YW1DaGFydHMgNDwvYT4uJ30sXG4gICAgICAgICAgICAgICAgICAgIHt0YWc6ICdsaScsIGh0bWw6ICdUaGUgQXBwIGlzIGNyZWF0ZWQgd2l0aCB0aGUgd2Vid29ya2VycyBkcml2ZW4gVUkgZnJhbWV3b3JrIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbmVvbWpzL25lb1wiPm5lby5tanM8L2E+Lid9LFxuICAgICAgICAgICAgICAgICAgICB7dGFnOiAnbGknLCBodG1sOiAnVGhlIE1hcGJveCBHTCBNYXAgaXMgYmFzZWQgb24gPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZG9jcy5tYXBib3guY29tL21hcGJveC1nbC1qcy9hcGkvXCI+TWFwYm94IEdMIEpTPC9hPi4nfSxcbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ2xpJywgaHRtbDogJ1RoZSBNYXAgJiBIZWF0bWFwIHN0eWxlcyBhcmUgc3Ryb25nbHkgaW5zcGlyZWQgYnkgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vYmxvZy5tYXBib3guY29tL3Zpc3VhbGl6aW5nLXRoZS1wcm9ncmVzc2lvbi1vZi10aGUtMjAxOS1uY292LW91dGJyZWFrLTY2NzYzZWI1OWU3OVwiPlZpc3VhbGl6aW5nIHRoZSBwcm9ncmVzc2lvbiBvZiB0aGUgMjAxOS1uQ29WIG91dGJyZWFrPC9hPi4nfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhBdHRyaWJ1dGlvbkNvbXBvbmVudCk7XG5cbmV4cG9ydCB7QXR0cmlidXRpb25Db21wb25lbnQgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi8uLi9zcmMvY29udGFpbmVyL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgU2hhcmVkQ292aWQudmlldy5Gb290ZXJDb250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBGb290ZXJDb250YWluZXIgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdTaGFyZWRDb3ZpZC52aWV3LkZvb3RlckNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnU2hhcmVkQ292aWQudmlldy5Gb290ZXJDb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBoZWlnaHQ9MjBcbiAgICAgICAgICovXG4gICAgICAgIGhlaWdodDogMjUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGxheW91dD17bnR5cGU6ICdoYm94J31cbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCd9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSByZWZlcmVuY2U9J2Zvb3RlcidcbiAgICAgICAgICovXG4gICAgICAgIHJlZmVyZW5jZTogJ2Zvb3RlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHN0eWxlPXtvdmVyZmxvdzogJ3Zpc2libGUnfVxuICAgICAgICAgKi9cbiAgICAgICAgc3R5bGU6IHtvdmVyZmxvdzogJ3Zpc2libGUnfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gaXRlbURlZmF1bHRzXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgIGNscyAgOiBbJ25lby1saW5rLWNvbG9yJ10sXG4gICAgICAgICAgICBzdHlsZToge2ZvbnRTaXplOiAnMTNweCcsIHBhZGRpbmc6ICcxMHB4JywgcGFkZGluZ1RvcDogMH1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtc1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBodG1sIDogJ0FwcCBjcmVhdGVkIHdpdGggPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9uZW9tanMvbmVvXCI+bmVvLm1qczwvYT4uJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBmbGV4OiAxXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGh0bWwgOiAnRGF0YSBwcm92aWRlZCBieSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2Rpc2Vhc2Utc2gvQVBJXCI+ZGlzZWFzZS1zaC9BUEk8L2E+LidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZmxleDogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBodG1sIDogJ0NvdW50cnkgRmxhZyBJY29ucyBtYWRlIGJ5IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vYXV0aG9ycy9mcmVlcGlrXCIgdGl0bGU9XCJGcmVlcGlrXCI+RnJlZXBpazwvYT4gZnJvbSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL1wiIHRpdGxlPVwiRmxhdGljb25cIj4gd3d3LmZsYXRpY29uLmNvbTwvYT4uJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgIGNscyAgICA6IFsnbmVvLWJ1dHRvbiddLFxuICAgICAgICAgICAgaGFuZGxlcjogJ29uUmVtb3ZlRm9vdGVyQnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgaGVpZ2h0IDogMjQsXG4gICAgICAgICAgICBzdHlsZSAgOiB7bWFyZ2luOiAwLCBtYXJnaW5SaWdodDogJzEwcHgnLCBtYXJnaW5Ub3A6ICctNXB4J30sXG4gICAgICAgICAgICB0ZXh0ICAgOiAnUmVtb3ZlIEZvb3RlcidcbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhGb290ZXJDb250YWluZXIpO1xuXG5leHBvcnQge0Zvb3RlckNvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29udGFpbmVyICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbnRhaW5lci9CYXNlLm1qcyc7XG5pbXBvcnQgQm94TGFiZWwgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbXBvbmVudC9Cb3hMYWJlbC5tanMnO1xuaW1wb3J0IEdhbGxlcnkgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vY291bnRyeS9HYWxsZXJ5Lm1qcyc7XG5pbXBvcnQgR2FsbGVyeUNvbnRhaW5lckNvbnRyb2xsZXIgZnJvbSAnLi9HYWxsZXJ5Q29udGFpbmVyQ29udHJvbGxlci5tanMnO1xuaW1wb3J0IFBhbmVsICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9jb250YWluZXIvUGFuZWwubWpzJztcbmltcG9ydCBSYW5nZUZpZWxkICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvZm9ybS9maWVsZC9SYW5nZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBTaGFyZWRDb3ZpZC52aWV3LkdhbGxlcnlDb250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBHYWxsZXJ5Q29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nU2hhcmVkQ292aWQudmlldy5HYWxsZXJ5Q29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdTaGFyZWRDb3ZpZC52aWV3LkdhbGxlcnlDb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXV0b01vdW50PXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGF1dG9Nb3VudDogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tZ2FsbGVyeS1tYWluY29udGFpbmVyJywgJ25lby12aWV3cG9ydCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWdhbGxlcnktbWFpbmNvbnRhaW5lcicsICduZW8tdmlld3BvcnQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb250cm9sbGVyLkNvbXBvbmVudHxudWxsfSBjb250cm9sbGVyPUdhbGxlcnlDb250YWluZXJDb250cm9sbGVyXG4gICAgICAgICAqL1xuICAgICAgICBjb250cm9sbGVyOiBHYWxsZXJ5Q29udGFpbmVyQ29udHJvbGxlcixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb21wb25lbnQuR2FsbGVyeXxudWxsfSBnYWxsZXJ5PW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGdhbGxlcnk6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gZ2FsbGVyeUNvbmZpZz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBnYWxsZXJ5Q29uZmlnOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IGxheW91dD17bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W118bnVsbH0gaXRlbXNcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgIGZsZXggIDogMSxcbiAgICAgICAgICAgIGxheW91dDogJ2ZpdCcsXG4gICAgICAgICAgICBpdGVtcyA6IFtdXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogUGFuZWwsXG4gICAgICAgICAgICBjbHMgICAgICA6IFsnbmVvLWNvbmZpZ3VyYXRpb24tcGFuZWwnLCAnbmVvLXBhbmVsJywgJ25lby1jb250YWluZXInXSxcbiAgICAgICAgICAgIGxheW91dCAgIDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAgICAgcmVmZXJlbmNlOiAnY29udHJvbHMtcGFuZWwnLFxuICAgICAgICAgICAgc3R5bGUgICAgOiB7YmFja2dyb3VuZENvbG9yOiAnIzJiMmIyYid9LFxuICAgICAgICAgICAgd2lkdGggICAgOiAyNjAsXG5cbiAgICAgICAgICAgIGNvbnRhaW5lckNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7b3ZlcmZsb3dZOiAnc2Nyb2xsJ31cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGhlYWRlcnM6IFt7XG4gICAgICAgICAgICAgICAgZG9jazogJ3RvcCcsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAnb25Db2xsYXBzZUJ1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ1gnXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdHYWxsZXJ5IENvbnRyb2xzJ1xuICAgICAgICAgICAgICAgIH0sICctPicsIHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvbldpbmRvd0dhbGxlcnlNYXhpbWl6ZUJ1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhciBmYS13aW5kb3ctbWF4aW1pemUnXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dLFxuXG4gICAgICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgICAgICBmbGV4ICAgICAgICAgOiAnMCAxIGF1dG8nLFxuICAgICAgICAgICAgICAgIGxhYmVsV2lkdGggICA6ICcxMTBweCcsXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgICAgIDoge3BhZGRpbmc6ICcxMHB4J30sXG4gICAgICAgICAgICAgICAgdXNlSW5wdXRFdmVudDogdHJ1ZVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgOiBSYW5nZUZpZWxkLFxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1RyYW5zbGF0ZSBYJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDUwMDAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3RyYW5zbGF0ZVgnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogMCxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlIDogJ29uUmFuZ2VmaWVsZENoYW5nZScsXG4gICAgICAgICAgICAgICAgICAgIG1vdW50ZWQ6ICdvblJhbmdlZmllbGRNb3VudGVkJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgICA6IFJhbmdlRmllbGQsXG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnVHJhbnNsYXRlIFknLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMTUwMCxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IC0xNTAwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3RyYW5zbGF0ZVknLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogMCxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiAnb25SYW5nZWZpZWxkQ2hhbmdlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgICA6IFJhbmdlRmllbGQsXG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnVHJhbnNsYXRlIFonLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogNTUwLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogLTQ1MDAsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAndHJhbnNsYXRlWicsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiAwLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2UgOiAnb25SYW5nZWZpZWxkQ2hhbmdlJyxcbiAgICAgICAgICAgICAgICAgICAgbW91bnRlZDogJ29uUmFuZ2VmaWVsZE1vdW50ZWQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgIDogUmFuZ2VGaWVsZCxcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdBbW91bnQgUm93cycsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiAxNSxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IDEsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAnYW1vdW50Um93cycsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiAzLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6ICdvblJhbmdlZmllbGRDaGFuZ2UnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG50eXBlICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvbk9yZGVyQnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgIHRleHQgICA6ICdPcmRlciBieSBSb3cnLFxuICAgICAgICAgICAgICAgIHN0eWxlICA6IHttYXJnaW46ICcyMHB4J31cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICB0ZXh0IDogJ1NvcnQgQnk6J1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG50eXBlIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgICAgICAgICAgc3R5bGUgOiB7bWluSGVpZ2h0OiAnMTM0cHgnLCBwYWRkaW5nOiAnMCd9LFxuXG4gICAgICAgICAgICAgICAgaXRlbXMgOiBbe1xuICAgICAgICAgICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcblxuICAgICAgICAgICAgICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG50eXBlICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uU29ydEJ1dHRvbkNsaWNrJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdjYXNlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ0Nhc2VzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpblRvcDogJzAnfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ2RlYXRocycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ0RlYXRocycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Cb3R0b206ICcxMHB4JywgbWFyZ2luVG9wOiAwfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ2NvdW50cnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdDb3VudHJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpblRvcDogMH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdyZWNvdmVyZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdSZWNvdmVyZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHttYXJnaW46ICcxMHB4JywgbWFyZ2luVG9wOiAwfVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ30sXG5cbiAgICAgICAgICAgICAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvblNvcnRCdXR0b25DbGljaydcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiAndG9kYXlDYXNlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ0Nhc2VzIHRvZGF5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpblRvcDogJzAnfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ3RvZGF5RGVhdGhzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiAnRGVhdGhzIHRvZGF5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpbkJvdHRvbTogJzEwcHgnLCBtYXJnaW5Ub3A6IDB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnY3JpdGljYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdDcml0aWNhbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Cb3R0b206ICc0M3B4JywgbWFyZ2luVG9wOiAwfVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlOiBCb3hMYWJlbCxcbiAgICAgICAgICAgICAgICB0ZXh0ICA6IFtcbiAgICAgICAgICAgICAgICAgICAgJzxiPk5hdmlnYXRpb24gQ29uY2VwdDwvYj4nLFxuICAgICAgICAgICAgICAgICAgICAnPHA+WW91IGNhbiB1c2UgdGhlIEFycm93IEtleXMgdG8gd2FsayB0aHJvdWdoIHRoZSBpdGVtcy48L3A+J1xuICAgICAgICAgICAgICAgIF0uam9pbignJylcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1dXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5nYWxsZXJ5ID0gTmVvLmNyZWF0ZSh7XG4gICAgICAgICAgICBtb2R1bGUgICA6IEdhbGxlcnksXG4gICAgICAgICAgICByZWZlcmVuY2U6ICdnYWxsZXJ5JyxcbiAgICAgICAgICAgIC4uLm1lLmdhbGxlcnlDb25maWcgfHwge31cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuaXRlbXNbMF0uaXRlbXMucHVzaChtZS5nYWxsZXJ5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGRlc3Ryb3koLi4uYXJncykge1xuICAgICAgICB0aGlzLmdhbGxlcnkgPSBudWxsO1xuICAgICAgICBzdXBlci5kZXN0cm95KC4uLmFyZ3MpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoR2FsbGVyeUNvbnRhaW5lcik7XG5cbmV4cG9ydCB7R2FsbGVyeUNvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29tcG9uZW50Q29udHJvbGxlciBmcm9tICcuLi8uLi8uLi9zcmMvY29udHJvbGxlci9Db21wb25lbnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgU2hhcmVkQ292aWQudmlldy5HYWxsZXJ5Q29udGFpbmVyQ29udHJvbGxlclxuICogQGV4dGVuZHMgTmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50XG4gKi9cbmNsYXNzIEdhbGxlcnlDb250YWluZXJDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50Q29udHJvbGxlciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1NoYXJlZENvdmlkLnZpZXcuR2FsbGVyeUNvbnRhaW5lckNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1NoYXJlZENvdmlkLnZpZXcuR2FsbGVyeUNvbnRhaW5lckNvbnRyb2xsZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbXBvbmVudC5HYWxsZXJ5fG51bGx9IGdhbGxlcnlfPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgZ2FsbGVyeV86IG51bGxcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIHdoZW4gYWNjZXNzaW5nIHRoZSBnYWxsZXJ5IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5HYWxsZXJ5fG51bGx9IHZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZUdldEdhbGxlcnkodmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZ2FsbGVyeSA9IHZhbHVlID0gdGhpcy5nZXRSZWZlcmVuY2UoJ2dhbGxlcnknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Db2xsYXBzZUJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgY29uc3QgcGFuZWwgID0gdGhpcy5nZXRSZWZlcmVuY2UoJ2NvbnRyb2xzLXBhbmVsJyksXG4gICAgICAgICAgICAgIGV4cGFuZCA9IHBhbmVsLndpZHRoID09PSA0MDtcblxuICAgICAgICBwYW5lbC53aWR0aCA9IGV4cGFuZCA/IDI1MCA6IDQwO1xuXG4gICAgICAgIGRhdGEuY29tcG9uZW50LnRleHQgPSBleHBhbmQgPyAnWCcgOiAnKyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uT3JkZXJCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIGNvbnN0IGdhbGxlcnkgICAgPSB0aGlzLmdhbGxlcnksXG4gICAgICAgICAgICAgIG9yZGVyQnlSb3cgPSAhZ2FsbGVyeS5vcmRlckJ5Um93O1xuXG4gICAgICAgIGRhdGEuY29tcG9uZW50LnRleHQgPSBvcmRlckJ5Um93ID09PSB0cnVlID8gJ09yZGVyIEJ5IENvbHVtbicgOiAnT3JkZXIgYnkgUm93JztcblxuICAgICAgICBnYWxsZXJ5Lm9yZGVyQnlSb3cgPSBvcmRlckJ5Um93O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvblJhbmdlZmllbGRDaGFuZ2UoZGF0YSkge1xuICAgICAgICB0aGlzLmdhbGxlcnlbZGF0YS5jb21wb25lbnQubmFtZV0gPSBkYXRhLnZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICovXG4gICAgb25SYW5nZWZpZWxkTW91bnRlZChpZCkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IE5lby5nZXRDb21wb25lbnQoaWQpO1xuXG4gICAgICAgIHRoaXMuZ2FsbGVyeS5vbignY2hhbmdlJyArIE5lby5jYXBpdGFsaXplKGZpZWxkLm5hbWUpLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgZmllbGQubWluVmFsdWUpLCBmaWVsZC5tYXhWYWx1ZSk7XG4gICAgICAgICAgICBmaWVsZC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Tb3J0QnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmdhbGxlcnkuc3RvcmUuc29ydGVycyA9IFt7XG4gICAgICAgICAgICBwcm9wZXJ0eSA6IGRhdGEuY29tcG9uZW50LmZpZWxkLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnREVTQydcbiAgICAgICAgfV07XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhHYWxsZXJ5Q29udGFpbmVyQ29udHJvbGxlcik7XG5cbmV4cG9ydCB7R2FsbGVyeUNvbnRhaW5lckNvbnRyb2xsZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbnRhaW5lciAgICBmcm9tICcuLi8uLi8uLi9zcmMvY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBDb3VudHJ5U3RvcmUgZnJvbSAnLi4vc3RvcmUvQ291bnRyaWVzLm1qcyc7XG5pbXBvcnQgU2VsZWN0RmllbGQgIGZyb20gJy4uLy4uLy4uL3NyYy9mb3JtL2ZpZWxkL1NlbGVjdC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBTaGFyZWRDb3ZpZC52aWV3LkhlYWRlckNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5CYXNlXG4gKi9cbmNsYXNzIEhlYWRlckNvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1NoYXJlZENvdmlkLnZpZXcuSGVhZGVyQ29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdTaGFyZWRDb3ZpZC52aWV3LkhlYWRlckNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnY292aWQtaGVhZGVyLWNvbnRhaW5lciddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnY292aWQtaGVhZGVyLWNvbnRhaW5lciddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBoZWlnaHQ9NzBcbiAgICAgICAgICovXG4gICAgICAgIGhlaWdodDogMTIwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsYXlvdXQ9e250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtc1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBudHlwZSAgICA6ICdjb21wb25lbnQnLFxuICAgICAgICAgICAgbWluV2lkdGggOiAyNjcsXG4gICAgICAgICAgICByZWZlcmVuY2U6ICdsb2dvJyxcbiAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpbjogJzEwcHgnfSxcbiAgICAgICAgICAgIHdpZHRoICAgIDogMjY3LFxuXG4gICAgICAgICAgICB2ZG9tOiB7XG4gICAgICAgICAgICAgICAgdGFnOiAnaW1nJyxcbiAgICAgICAgICAgICAgICBzcmM6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbmVvbWpzL3BhZ2VzL21hc3Rlci9yZXNvdXJjZXMvaW1hZ2VzL2FwcHMvY292aWQvY292aWRfbG9nb19kYXJrLmpwZydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgIGxheW91dDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAgICAgaXRlbXMgOiBbe1xuICAgICAgICAgICAgICAgIG50eXBlICAgIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgaGVpZ2h0ICAgOiA2NSxcbiAgICAgICAgICAgICAgICBsYXlvdXQgICA6IHtudHlwZTogJ2hib3gnfSxcbiAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICd0b3RhbC1zdGF0cycsXG5cbiAgICAgICAgICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGU6ICdjb21wb25lbnQnXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICBjbHMgOiBbJ2NvdmlkLW51bWJlcmJveCddLFxuICAgICAgICAgICAgICAgICAgICB2ZG9tOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjbHM6IFsnY292aWQtbnVtYmVyYm94LXRpdGxlJywgICdjYXNlcyddLCAgaHRtbDonQ2FzZXMnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvdmlkLW51bWJlcmJveC1udW1iZXInLCAnY2FzZXMnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgY2xzIDogWydjb3ZpZC1udW1iZXJib3gnXSxcbiAgICAgICAgICAgICAgICAgICAgdmRvbToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvdmlkLW51bWJlcmJveC10aXRsZScsICAnYWN0aXZlJ10sIGh0bWw6J0FjdGl2ZSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjbHM6IFsnY292aWQtbnVtYmVyYm94LW51bWJlcicsICdhY3RpdmUnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgY2xzIDogWydjb3ZpZC1udW1iZXJib3gnXSxcbiAgICAgICAgICAgICAgICAgICAgdmRvbToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvdmlkLW51bWJlcmJveC10aXRsZScsICAncmVjb3ZlcmVkJ10sIGh0bWw6J1JlY292ZXJlZCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjbHM6IFsnY292aWQtbnVtYmVyYm94LW51bWJlcicsICdyZWNvdmVyZWQnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgY2xzIDogWydjb3ZpZC1udW1iZXJib3gnXSxcbiAgICAgICAgICAgICAgICAgICAgdmRvbToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvdmlkLW51bWJlcmJveC10aXRsZScsICAnZGVhdGhzJ10sIGh0bWw6J0RlYXRocyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjbHM6IFsnY292aWQtbnVtYmVyYm94LW51bWJlcicsICdkZWF0aHMnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtwYWRkaW5nOiAnMTBweCd9LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTI1LFxuICAgICAgICAgICAgICAgICAgICB2ZG9tIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnICAgICAgICAgICAgICA6ICdhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1sYWJlbCcgICAgIDogJ1N0YXIgbmVvbWpzL25lbyBvbiBHaXRIdWInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNscyAgICAgICAgICAgICAgOiBbJ2dpdGh1Yi1idXR0b24nXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1zaG93LWNvdW50JzogJ3RydWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLXNpemUnICAgICAgOiAnbGFyZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWYgICAgICAgICAgICAgOiAnaHR0cHM6Ly9naXRodWIuY29tL25lb21qcy9uZW8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgICAgICAgICAgICAgOiAnU3RhcidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7cGFkZGluZzogJzEwcHgnfSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwNSxcbiAgICAgICAgICAgICAgICAgICAgdmRvbSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZyAgICAgICAgICAgICAgOiAnYScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWwnICAgICA6ICdTcG9uc29yIEB0b2JpdSBvbiBHaXRIdWInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNscyAgICAgICAgICAgICAgOiBbJ2dpdGh1Yi1idXR0b24nXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1pY29uJyAgICAgIDogJ29jdGljb24taGVhcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLXNpemUnICAgICAgOiAnbGFyZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWYgICAgICAgICAgICAgOiAnaHR0cHM6Ly9naXRodWIuY29tL3Nwb25zb3JzL3RvYml1JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sICAgICAgICAgICAgIDogJ1Nwb25zb3InXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCd9LFxuXG4gICAgICAgICAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50J1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBpdGVtcyA6IFt7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZSAgICAgICA6IFNlbGVjdEZpZWxkLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RmllbGQgOiAnY291bnRyeScsXG4gICAgICAgICAgICAgICAgICAgIGZsZXggICAgICAgICA6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ICAgICAgIDogMjUsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb246ICdpbmxpbmUnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbFRleHQgICAgOiAnU2VsZWN0IGEgQ291bnRyeScsXG4gICAgICAgICAgICAgICAgICAgIG1pbldpZHRoICAgICA6IDE0MCxcbiAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlICAgIDogJ2NvdW50cnktZmllbGQnLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZSAgICAgICAgOiB7bWFyZ2luVG9wOiAnMTVweCd9LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aCAgICAgICAgOiAyMDAsXG5cbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhciA6ICdvbkNvdW50cnlGaWVsZENsZWFyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdDogJ29uQ291bnRyeUZpZWxkU2VsZWN0J1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUgOiBDb3VudHJ5U3RvcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0ZXJzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5IDogJ2NvdW50cnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ0FTQydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICBmbGV4ICAgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvblN3aXRjaFRoZW1lQnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgOiAyNSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLXN1bicsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlICA6IHttYXJnaW5MZWZ0OiAnMTBweCcsIG1hcmdpblRvcDogJzE1cHgnfSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ1RoZW1lIExpZ2h0J1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIGZsZXggICA6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uUmVsb2FkRGF0YUJ1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IDogMjUsXG4gICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1zeW5jLWFsdCcsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlICA6IHttYXJnaW5MZWZ0OiAnMTBweCcsIG1hcmdpblRvcDogJzE1cHgnfSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ1JlbG9hZCBEYXRhJ1xuICAgICAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgICA6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCAgIDogMjUsXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZTogJ2xhc3QtdXBkYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5Ub3A6ICcxOHB4J30sXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJydcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIZWFkZXJDb250YWluZXIpO1xuXG5leHBvcnQge0hlYWRlckNvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQm94TGFiZWwgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9jb21wb25lbnQvQm94TGFiZWwubWpzJztcbmltcG9ydCBDb250YWluZXIgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbnRhaW5lci9CYXNlLm1qcyc7XG5pbXBvcnQgSGVsaXggICAgICAgICAgICAgICAgICAgIGZyb20gJy4vY291bnRyeS9IZWxpeC5tanMnO1xuaW1wb3J0IEhlbGl4Q29udGFpbmVyQ29udHJvbGxlciBmcm9tICcuL0hlbGl4Q29udGFpbmVyQ29udHJvbGxlci5tanMnO1xuaW1wb3J0IFBhbmVsICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvY29udGFpbmVyL1BhbmVsLm1qcyc7XG5pbXBvcnQgUmFuZ2VGaWVsZCAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9mb3JtL2ZpZWxkL1JhbmdlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFNoYXJlZENvdmlkLnZpZXcuSGVsaXhDb250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBIZWxpeENvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1NoYXJlZENvdmlkLnZpZXcuSGVsaXhDb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1NoYXJlZENvdmlkLnZpZXcuSGVsaXhDb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXV0b01vdW50PXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGF1dG9Nb3VudDogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8taGVsaXgtbWFpbmNvbnRhaW5lcicsICduZW8tdmlld3BvcnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1oZWxpeC1tYWluY29udGFpbmVyJywgJ25lby12aWV3cG9ydCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50fG51bGx9IGNvbnRyb2xsZXI9SGVsaXhDb250YWluZXJDb250cm9sbGVyXG4gICAgICAgICAqL1xuICAgICAgICBjb250cm9sbGVyOiBIZWxpeENvbnRhaW5lckNvbnRyb2xsZXIsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29tcG9uZW50LkhlbGl4fG51bGx9IGhlbGl4PW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGhlbGl4OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IGhlbGl4Q29uZmlnPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGhlbGl4Q29uZmlnOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IGxheW91dD17bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W118bnVsbH0gaXRlbXNcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgIGZsZXggIDogMSxcbiAgICAgICAgICAgIGl0ZW1zIDogW10sXG4gICAgICAgICAgICBsYXlvdXQ6ICdmaXQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogUGFuZWwsXG4gICAgICAgICAgICBjbHMgICAgICA6IFsnbmVvLWNvbmZpZ3VyYXRpb24tcGFuZWwnLCAnbmVvLXBhbmVsJywgJ25lby1jb250YWluZXInXSxcbiAgICAgICAgICAgIGxheW91dCAgIDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAgICAgcmVmZXJlbmNlOiAnY29udHJvbHMtcGFuZWwnLFxuICAgICAgICAgICAgc3R5bGUgICAgOiB7YmFja2dyb3VuZENvbG9yOiAnIzJiMmIyYid9LFxuICAgICAgICAgICAgd2lkdGggICAgOiAyNTAsXG5cbiAgICAgICAgICAgIGNvbnRhaW5lckNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7b3ZlcmZsb3dZOiAnc2Nyb2xsJ31cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGhlYWRlcnM6IFt7XG4gICAgICAgICAgICAgICAgZG9jayA6ICd0b3AnLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uQ29sbGFwc2VCdXR0b25DbGljaycsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdYJ1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGU6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgOiAnSGVsaXggQ29udHJvbHMnXG4gICAgICAgICAgICAgICAgfSwgJy0+Jywge1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uV2luZG93SGVsaXhNYXhpbWl6ZUJ1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhciBmYS13aW5kb3ctbWF4aW1pemUnXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dLFxuXG4gICAgICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgICAgICBudHlwZSAgICAgICAgOiAncmFuZ2VmaWVsZCcsXG4gICAgICAgICAgICAgICAgZmxleCAgICAgICAgIDogJzAgMSBhdXRvJyxcbiAgICAgICAgICAgICAgICBsYWJlbFdpZHRoICAgOiAnMTAwcHgnLFxuICAgICAgICAgICAgICAgIHN0eWxlICAgICAgICA6IHtwYWRkaW5nOiAnMTBweCd9LFxuICAgICAgICAgICAgICAgIHVzZUlucHV0RXZlbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzICAgIDoge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6ICdvblJhbmdlZmllbGRDaGFuZ2UnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnVHJhbnNsYXRlIFgnLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMjAwMCxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IC0yMDAwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3RyYW5zbGF0ZVgnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogNDAwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnVHJhbnNsYXRlIFknLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMjUwMCxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IC0yNTAwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3RyYW5zbGF0ZVknLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogLTM1MFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogJ2NoYW5nZVRyYW5zbGF0ZVonLFxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1RyYW5zbGF0ZSBaJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDQ1MDAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAtNDUwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICd0cmFuc2xhdGVaJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IC0xNTAwLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2UgOiAnb25SYW5nZWZpZWxkQ2hhbmdlJyxcbiAgICAgICAgICAgICAgICAgICAgbW91bnRlZDogJ29uUmFuZ2VmaWVsZE1vdW50ZWQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dCA6ICdEZWx0YSBZJyxcbiAgICAgICAgICAgICAgICBsYWJlbEFsaWduOiAndG9wJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSAgOiA2MDAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgIDogLTYwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICAgOiAnZGVsdGFZJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICAgOiA3MFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogJ2NoYW5nZVJvdGF0aW9uJyxcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdSb3RhdGUnLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogLTcyMCxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDcyMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICdyb3RhdGlvbkFuZ2xlJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDAsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZSA6ICdvblJhbmdlZmllbGRDaGFuZ2UnLFxuICAgICAgICAgICAgICAgICAgICBtb3VudGVkOiAnb25SYW5nZWZpZWxkTW91bnRlZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnUmFkaXVzJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDM1MDAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiA5MDAsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAncmFkaXVzJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDE1MDBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdQZXJzcGVjdGl2ZScsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiA1MCxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDMwMDAsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAncGVyc3BlY3RpdmUnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogODAwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnSXRlbSBBbmdsZScsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAxLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMzYsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAnaXRlbUFuZ2xlJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDhcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdNYXggT3BhY2l0eScsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAnbWF4T3BhY2l0eScsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAwLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMTAwLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogODAgLy8gdG9kbzogbXVsdGktdGh1bWIgc2xpZGVyIFszMCwgODBdXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnTWluIE9wYWNpdHknLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ21pbk9wYWNpdHknLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogMCxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDEwMCxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDMwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGUgICAgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgaGFuZGxlciAgOiAnb25GbGlwSXRlbXNCdXR0b25DbGljaycsXG4gICAgICAgICAgICAgICAgdGV4dCAgICAgIDogJ0ZsaXAgSXRlbXMnLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge30sXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luOiAnMjBweCd9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGU6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgdGV4dCA6ICdTb3J0IEJ5OidcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAgICAgICAgIHN0eWxlIDoge21pbkhlaWdodDogJzEzNHB4JywgcGFkZGluZzogJzAnfSxcblxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcblxuICAgICAgICAgICAgICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG50eXBlICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uU29ydEJ1dHRvbkNsaWNrJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdjYXNlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ0Nhc2VzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpblRvcDogJzAnfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ2RlYXRocycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ0RlYXRocycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Cb3R0b206ICcxMHB4JywgbWFyZ2luVG9wOiAwfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ2NvdW50cnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdDb3VudHJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpblRvcDogMH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdyZWNvdmVyZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdSZWNvdmVyZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHttYXJnaW46ICcxMHB4JywgbWFyZ2luVG9wOiAwfVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ30sXG5cbiAgICAgICAgICAgICAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvblNvcnRCdXR0b25DbGljaydcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiAndG9kYXlDYXNlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ0Nhc2VzIHRvZGF5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpblRvcDogJzAnfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ3RvZGF5RGVhdGhzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiAnRGVhdGhzIHRvZGF5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpbkJvdHRvbTogJzEwcHgnLCBtYXJnaW5Ub3A6IDB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnY3JpdGljYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdDcml0aWNhbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Cb3R0b206ICc0M3B4JywgbWFyZ2luVG9wOiAwfVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGUgICAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVyICA6ICdvbkZvbGxvd1NlbGVjdGlvbkJ1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICBpY29uQ2xzICA6ICdmYSBmYS1zcXVhcmUnLFxuICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0ZvbGxvdyBTZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge30sXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luICAgICAgOiAnMjBweCcsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG1vZHVsZTogQm94TGFiZWwsXG4gICAgICAgICAgICAgICAgdGV4dCAgOiBbXG4gICAgICAgICAgICAgICAgICAgICc8Yj5OYXZpZ2F0aW9uIENvbmNlcHQ8L2I+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxwPkNsaWNrIG9uIGFuIGl0ZW0gdG8gc2VsZWN0IGl0LiBBZnRlcndhcmRzIHlvdSBjYW4gdXNlIHRoZSBBcnJvdyBLZXlzIHRvIHdhbGsgdGhyb3VnaCB0aGUgaXRlbXMuPC9wPicsXG4gICAgICAgICAgICAgICAgICAgICc8cD5IaXQgdGhlIFNwYWNlIEtleSB0byByb3RhdGUgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtIHRvIHRoZSBmcm9udC48L3A+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxwPkhpdCB0aGUgRW50ZXIgS2V5IHRvIGV4cGFuZCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0uPC9wPidcbiAgICAgICAgICAgICAgICBdLmpvaW4oJycpXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuaGVsaXggPSBOZW8uY3JlYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogSGVsaXgsXG4gICAgICAgICAgICByZWZlcmVuY2U6ICdoZWxpeCcsXG4gICAgICAgICAgICAuLi5tZS5oZWxpeENvbmZpZyB8fCB7fVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5pdGVtc1swXS5pdGVtcy5wdXNoKG1lLmhlbGl4KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEhlbGl4Q29udGFpbmVyKTtcblxuZXhwb3J0IHtIZWxpeENvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29tcG9uZW50Q29udHJvbGxlciBmcm9tICcuLi8uLi8uLi9zcmMvY29udHJvbGxlci9Db21wb25lbnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgU2hhcmVkQ292aWQudmlldy5IZWxpeENvbnRhaW5lckNvbnRyb2xsZXJcbiAqIEBleHRlbmRzIE5lby5jb250cm9sbGVyLkNvbXBvbmVudFxuICovXG5jbGFzcyBIZWxpeENvbnRhaW5lckNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnRDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nU2hhcmVkQ292aWQudmlldy5IZWxpeENvbnRhaW5lckNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1NoYXJlZENvdmlkLnZpZXcuSGVsaXhDb250YWluZXJDb250cm9sbGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb21wb25lbnQuSGVsaXh8bnVsbH0gaGVsaXhfPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaGVsaXhfOiBudWxsXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCB3aGVuIGFjY2Vzc2luZyB0aGUgaGVsaXggY29uZmlnXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkhlbGl4fG51bGx9IHZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZUdldEhlbGl4KHZhbHVlKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2hlbGl4ID0gdmFsdWUgPSB0aGlzLmdldFJlZmVyZW5jZSgnaGVsaXgnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Db2xsYXBzZUJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgY29uc3QgcGFuZWwgID0gdGhpcy5nZXRSZWZlcmVuY2UoJ2NvbnRyb2xzLXBhbmVsJyksXG4gICAgICAgICAgICAgIGV4cGFuZCA9IHBhbmVsLndpZHRoID09PSA0MDtcblxuICAgICAgICBwYW5lbC53aWR0aCA9IGV4cGFuZCA/IDI1MCA6IDQwO1xuXG4gICAgICAgIGRhdGEuY29tcG9uZW50LnRleHQgPSBleHBhbmQgPyAnWCcgOiAnKyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRmxpcEl0ZW1zQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmhlbGl4LmZsaXBwZWQgPSAhdGhpcy5oZWxpeC5mbGlwcGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkZvbGxvd1NlbGVjdGlvbkJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZGF0YS5jb21wb25lbnQ7XG5cbiAgICAgICAgaWYgKGJ1dHRvbi5pY29uQ2xzID09PSAnZmEgZmEtc3F1YXJlJykge1xuICAgICAgICAgICAgdGhpcy5oZWxpeC5mb2xsb3dTZWxlY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgYnV0dG9uLmljb25DbHMgPSAnZmEgZmEtY2hlY2stc3F1YXJlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGVsaXguZm9sbG93U2VsZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICBidXR0b24uaWNvbkNscyA9ICdmYSBmYS1zcXVhcmUnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uUmFuZ2VmaWVsZENoYW5nZShkYXRhKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkYXRhLmNvbXBvbmVudC5uYW1lO1xuXG4gICAgICAgIGlmIChbJ2RlbHRhWScsICdtYXhPcGFjaXR5JywgJ21pbk9wYWNpdHknXS5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgICAgICAgZGF0YS52YWx1ZSAvPSAxMDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhlbGl4W25hbWVdID0gZGF0YS52YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAqL1xuICAgIG9uUmFuZ2VmaWVsZE1vdW50ZWQoaWQpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBOZW8uZ2V0Q29tcG9uZW50KGlkKTtcblxuICAgICAgICB0aGlzLmhlbGl4Lm9uKGZpZWxkLmV2ZW50TmFtZSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIGZpZWxkLm1pblZhbHVlKSwgZmllbGQubWF4VmFsdWUpO1xuICAgICAgICAgICAgZmllbGQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uU29ydEJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5oZWxpeC5zdG9yZS5zb3J0ZXJzID0gW3tcbiAgICAgICAgICAgIHByb3BlcnR5IDogZGF0YS5jb21wb25lbnQuZmllbGQsXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdERVNDJ1xuICAgICAgICB9XTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEhlbGl4Q29udGFpbmVyQ29udHJvbGxlcik7XG5cbmV4cG9ydCB7SGVsaXhDb250YWluZXJDb250cm9sbGVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBBdHRyaWJ1dGlvbkNvbXBvbmVudCAgICBmcm9tICcuL0F0dHJpYnV0aW9uQ29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgRm9vdGVyQ29udGFpbmVyICAgICAgICAgZnJvbSAnLi9Gb290ZXJDb250YWluZXIubWpzJztcbmltcG9ydCBHYWxsZXJ5Q29udGFpbmVyICAgICAgICBmcm9tICcuL0dhbGxlcnlDb250YWluZXIubWpzJztcbmltcG9ydCBIZWFkZXJDb250YWluZXIgICAgICAgICBmcm9tICcuL0hlYWRlckNvbnRhaW5lci5tanMnO1xuaW1wb3J0IEhlbGl4Q29udGFpbmVyICAgICAgICAgIGZyb20gJy4vSGVsaXhDb250YWluZXIubWpzJztcbmltcG9ydCBNYWluQ29udGFpbmVyQ29udHJvbGxlciBmcm9tICcuL01haW5Db250YWluZXJDb250cm9sbGVyLm1qcyc7XG5pbXBvcnQgTWFwYm94R2xDb250YWluZXIgICAgICAgZnJvbSAnLi9tYXBib3hHbC9Db250YWluZXIubWpzJztcbmltcG9ydCBUYWJDb250YWluZXIgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvdGFiL0NvbnRhaW5lci5tanMnO1xuaW1wb3J0IFRhYmxlQ29udGFpbmVyICAgICAgICAgIGZyb20gJy4vVGFibGVDb250YWluZXIubWpzJztcbmltcG9ydCBWaWV3cG9ydCAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvY29udGFpbmVyL1ZpZXdwb3J0Lm1qcyc7XG5pbXBvcnQgV29ybGRNYXBDb250YWluZXIgICAgICAgZnJvbSAnLi9Xb3JsZE1hcENvbnRhaW5lci5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBTaGFyZWRDb3ZpZC52aWV3Lk1haW5Db250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuVmlld3BvcnRcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lciBleHRlbmRzIFZpZXdwb3J0IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nU2hhcmVkQ292aWQudmlldy5NYWluQ29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdTaGFyZWRDb3ZpZC52aWV3Lk1haW5Db250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXV0b01vdW50PXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGF1dG9Nb3VudDogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBjbHM9Wydjb3ZpZC12aWV3cG9ydCcsICduZW8tdmlld3BvcnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ2NvdmlkLXZpZXdwb3J0JywgJ25lby12aWV3cG9ydCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50fSBjb250cm9sbGVyPU1haW5Db250YWluZXJDb250cm9sbGVyXG4gICAgICAgICAqL1xuICAgICAgICBjb250cm9sbGVyOiBNYWluQ29udGFpbmVyQ29udHJvbGxlcixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtc1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFtIZWFkZXJDb250YWluZXIsIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogVGFiQ29udGFpbmVyLFxuICAgICAgICAgICAgZmxleCAgICAgOiAxLFxuICAgICAgICAgICAgcmVmZXJlbmNlOiAndGFiLWNvbnRhaW5lcicsXG4gICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW46ICcxMHB4JywgbWFyZ2luVG9wOiAwfSxcblxuICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgICAgICAgOiBUYWJsZUNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICByZWZlcmVuY2UgICAgICA6ICd0YWJsZS1jb250YWluZXInLFxuICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtdGFibGUnLFxuICAgICAgICAgICAgICAgICAgICByb3V0ZSAgOiAnbWFpbnZpZXc9dGFibGUnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnVGFibGUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgICAgICAgIDogTWFwYm94R2xDb250YWluZXIsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlICAgICAgOiAnbWFwYm94LWdsLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1nbG9iZS1hbWVyaWNhcycsXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICA6ICdtYWludmlldz1tYXBib3hnbG1hcCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdNYXBib3ggR0wgTWFwJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgICAgICAgICA6IFdvcmxkTWFwQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtZ2xvYmUtYW1lcmljYXMnLFxuICAgICAgICAgICAgICAgICAgICByb3V0ZSAgOiAnbWFpbnZpZXc9d29ybGRtYXAnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnV29ybGQgTWFwJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgICAgICAgICA6IEdhbGxlcnlDb250YWluZXIsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlICAgICAgOiAnZ2FsbGVyeS1jb250YWluZXInLFxuICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtaW1hZ2VzJyxcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgIDogJ21haW52aWV3PWdhbGxlcnknLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnR2FsbGVyeSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgICAgICAgOiBIZWxpeENvbnRhaW5lcixcbiAgICAgICAgICAgICAgICByZWZlcmVuY2UgICAgICA6ICdoZWxpeC1jb250YWluZXInLFxuICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtZG5hJyxcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgIDogJ21haW52aWV3PWhlbGl4JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ0hlbGl4J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgICAgICAgICA6IEF0dHJpYnV0aW9uQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZSAgICAgIDogJ2F0dHJpYnV0aW9uJyxcbiAgICAgICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWNvcHlyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICA6ICdtYWludmlldz1hdHRyaWJ1dGlvbicsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdBdHRyaWJ1dGlvbidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XVxuICAgICAgICB9LCBGb290ZXJDb250YWluZXJdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsYXlvdXQ9e250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5Db250YWluZXIpO1xuXG5leHBvcnQge01haW5Db250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbXBvbmVudENvbnRyb2xsZXIgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXIvQ29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvdXRpbC9BcnJheS5tanMnO1xuaW1wb3J0IFV0aWwgICAgICAgICAgICAgICAgZnJvbSAnLi4vVXRpbC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBTaGFyZWRDb3ZpZC52aWV3Lk1haW5Db250YWluZXJDb250cm9sbGVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udHJvbGxlci5Db21wb25lbnRcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnRDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nU2hhcmVkQ292aWQudmlldy5NYWluQ29udGFpbmVyQ29udHJvbGxlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnU2hhcmVkQ292aWQudmlldy5NYWluQ29udGFpbmVyQ29udHJvbGxlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdtYWluY29udGFpbmVyLWNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbWFpbmNvbnRhaW5lci1jb250cm9sbGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gYWN0aXZlTWFpblRhYkluZGV4PTBcbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2ZU1haW5UYWJJbmRleDogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYXBpU3VtbWFyeVVybD0naHR0cHM6Ly9kaXNlYXNlLnNoL3YyL2FsbCdcbiAgICAgICAgICovXG4gICAgICAgIGFwaVN1bW1hcnlVcmw6ICdodHRwczovL2Rpc2Vhc2Uuc2gvdjIvYWxsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYXBpVXJsPSdodHRwczovL2Rpc2Vhc2Uuc2gvY291bnRyaWVzJ1xuICAgICAgICAgKi9cbiAgICAgICAgYXBpVXJsOiAnaHR0cHM6Ly9kaXNlYXNlLnNoL3YyL2NvdW50cmllcycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY29ubmVjdGVkQXBwcz1bXVxuICAgICAgICAgKi9cbiAgICAgICAgY29ubmVjdGVkQXBwczogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gY291bnRyeVJlY29yZD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBjb3VudHJ5UmVjb3JkOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W118bnVsbH0gZGF0YT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogSW50ZXJuYWwgZmxhZyB0byBwcmV2ZW50IG5vbiBtYWluIHdpbmRvd3MgZnJvbSB0cmlnZ2VyaW5nIHRoZWlyIGluaXRpYWwgcm91dGUgYXMgYSBjaGFuZ2VcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gZmlyc3RIYXNoQ2hhbmdlPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGZpcnN0SGFzaENoYW5nZTogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBtYWluVGFicz1bJ3RhYmxlJywgJ21hcGJveGdsbWFwJywgJ3dvcmxkbWFwJywgJ2dhbGxlcnknLCAnaGVsaXgnLCAnYXR0cmlidXRpb24nXVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBtYWluVGFiczogWyd0YWJsZScsJ21hcGJveGdsbWFwJywgJ3dvcmxkbWFwJywgJ2dhbGxlcnknLCAnaGVsaXgnLCAnYXR0cmlidXRpb24nXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZsYWcgdG8gb25seSBsb2FkIHRoZSBtYXAgb25jZSBvbkhhc2hDaGFuZ2UsIGJ1dCBhbHdheXMgb24gcmVsb2FkIGJ1dHRvbiBjbGlja1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBtYXBib3hnbE1hcEhhc0RhdGE9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbWFwYm94Z2xNYXBIYXNEYXRhOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gc3VtbWFyeURhdGE9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc3VtbWFyeURhdGE6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGbGFnIHRvIG9ubHkgbG9hZCB0aGUgbWFwIG9uY2Ugb25IYXNoQ2hhbmdlLCBidXQgYWx3YXlzIG9uIHJlbG9hZCBidXR0b24gY2xpY2tcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gd29ybGRNYXBIYXNEYXRhPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHdvcmxkTWFwSGFzRGF0YTogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHdpbmRvd0NoYXJ0PW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHdpbmRvd0NoYXJ0OiBudWxsLFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUubG9hZERhdGEoKTtcbiAgICAgICAgbWUubG9hZFN1bW1hcnlEYXRhKCk7XG5cbiAgICAgICAgbWUudmlldy5vbih7XG4gICAgICAgICAgICBjb25uZWN0ICAgOiBtZS5vbkFwcENvbm5lY3QsXG4gICAgICAgICAgICBkaXNjb25uZWN0OiBtZS5vbkFwcERpc2Nvbm5lY3QsXG4gICAgICAgICAgICBtb3VudGVkICAgOiBtZS5vbk1haW5WaWV3TW91bnRlZCxcbiAgICAgICAgICAgIHNjb3BlICAgICA6IG1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihtZSwge1xuICAgICAgICAgICAgICAgIGdhbGxlcnlWaWV3OiBtZS5nZXRSZWZlcmVuY2UoJ2dhbGxlcnknKSxcbiAgICAgICAgICAgICAgICBoZWxpeFZpZXcgIDogbWUuZ2V0UmVmZXJlbmNlKCdoZWxpeCcpLFxuICAgICAgICAgICAgICAgIG1hcEJveFZpZXcgOiBtZS5nZXRSZWZlcmVuY2UoJ21hcGJveGdsbWFwJyksXG4gICAgICAgICAgICAgICAgdGFibGVWaWV3ICA6IG1lLmdldFJlZmVyZW5jZSgndGFibGUnKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gZGF0YVxuICAgICAqL1xuICAgIGFkZFN0b3JlSXRlbXMoZGF0YSkge1xuICAgICAgICBjb25zdCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICBjb3VudHJ5U3RvcmUgPSBtZS5nZXRSZWZlcmVuY2UoJ2NvdW50cnktZmllbGQnKS5zdG9yZSxcbiAgICAgICAgICAgICAgcmVmZXJlbmNlICAgID0gbWUubWFpblRhYnNbbWUuYWN0aXZlTWFpblRhYkluZGV4XSxcbiAgICAgICAgICAgICAgYWN0aXZlVGFiICAgID0gbWUuZ2V0UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgICAgLy8gd29ybGRvbWV0ZXIgYWRkZWQgd29ybGQgYXMgYSBjb3VudHJ5XG4gICAgICAgIC8vIG1pZ2h0IGdldCByZW1vdmVkIGJ5IHRoZSBOb3ZlbENvdmlkIEFQSVxuICAgICAgICBpZiAoZGF0YVswXSAmJiBkYXRhWzBdLmNvdW50cnkgPT09ICdXb3JsZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHdvcmxkRGF0YSA9IGRhdGEuc2hpZnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmNvdW50cnkuaW5jbHVkZXMoJ1wiJykpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNvdW50cnkgPSBpdGVtLmNvdW50cnkucmVwbGFjZSgnXCInLCBcIlxcJ1wiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbS5jYXNlc1Blck9uZU1pbGxpb24gPSBpdGVtLmNhc2VzUGVyT25lTWlsbGlvbiA+IGl0ZW0uY2FzZXMgPyAnTi9BJyA6IGl0ZW0uY2FzZXNQZXJPbmVNaWxsaW9uIHx8IDA7XG4gICAgICAgICAgICBpdGVtLmluZmVjdGVkICAgICAgICAgICA9IGl0ZW0uY2FzZXNQZXJPbmVNaWxsaW9uO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZS5kYXRhID0gZGF0YTtcblxuICAgICAgICBpZiAoY291bnRyeVN0b3JlLmdldENvdW50KCkgPCAxKSB7XG4gICAgICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ2NvdW50cnktZmllbGQnKS5zdG9yZS5kYXRhID0gZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChbJ2dhbGxlcnknLCAnaGVsaXgnLCAndGFibGUnXS5pbmNsdWRlcyhyZWZlcmVuY2UpKSB7XG4gICAgICAgICAgICBhY3RpdmVUYWIuc3RvcmUuZGF0YSA9IGRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmIChyZWZlcmVuY2UgPT09ICdtYXBib3hnbG1hcCcpIHtcbiAgICAgICAgICAgIG1lLmdldFJlZmVyZW5jZSgnbWFwYm94Z2xtYXAnKS5kYXRhID0gZGF0YTtcbiAgICAgICAgICAgIG1lLm1hcGJveGdsTWFwSGFzRGF0YSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmIChyZWZlcmVuY2UgPT09ICd3b3JsZG1hcCcpIHtcbiAgICAgICAgICAgIGFjdGl2ZVRhYi5sb2FkRGF0YShkYXRhKTtcbiAgICAgICAgICAgIG1lLndvcmxkTWFwSGFzRGF0YSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEuYWN0aXZlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEuY2FzZXNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS5kZWF0aHNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS5yZWNvdmVyZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS51cGRhdGVkIC8vIHRpbWVzdGFtcFxuICAgICAqL1xuICAgIGFwcGx5U3VtbWFyeURhdGEoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IG1lLmdldFJlZmVyZW5jZSgndG90YWwtc3RhdHMnKSxcbiAgICAgICAgICAgIHZkb20gICAgICA9IGNvbnRhaW5lci52ZG9tO1xuXG4gICAgICAgIG1lLnN1bW1hcnlEYXRhID0gZGF0YTtcblxuICAgICAgICB2ZG9tLmNuWzBdLmNuWzFdLmh0bWwgPSBVdGlsLmZvcm1hdE51bWJlcih7dmFsdWU6IGRhdGEuY2FzZXN9KTtcbiAgICAgICAgdmRvbS5jblsxXS5jblsxXS5odG1sID0gVXRpbC5mb3JtYXROdW1iZXIoe3ZhbHVlOiBkYXRhLmFjdGl2ZX0pO1xuICAgICAgICB2ZG9tLmNuWzJdLmNuWzFdLmh0bWwgPSBVdGlsLmZvcm1hdE51bWJlcih7dmFsdWU6IGRhdGEucmVjb3ZlcmVkfSk7XG4gICAgICAgIHZkb20uY25bM10uY25bMV0uaHRtbCA9IFV0aWwuZm9ybWF0TnVtYmVyKHt2YWx1ZTogZGF0YS5kZWF0aHN9KTtcblxuICAgICAgICBjb250YWluZXIudmRvbSA9IHZkb207XG5cbiAgICAgICAgY29udGFpbmVyID0gbWUuZ2V0UmVmZXJlbmNlKCdsYXN0LXVwZGF0ZScpO1xuICAgICAgICB2ZG9tICAgICAgPSBjb250YWluZXIudmRvbTtcblxuICAgICAgICB2ZG9tLmh0bWwgPSAnTGFzdCBVcGRhdGU6ICcgKyBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZGVmYXVsdCcsIHtcbiAgICAgICAgICAgIGhvdXIgIDogJ251bWVyaWMnLFxuICAgICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJ1xuICAgICAgICB9KS5mb3JtYXQobmV3IERhdGUoZGF0YS51cGRhdGVkKSk7XG5cbiAgICAgICAgY29udGFpbmVyLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqL1xuICAgIGNsZWFyQ291bnRyeUZpZWxkKHJlY29yZCkge1xuICAgICAgICB0aGlzLmdldFJlZmVyZW5jZSgnY291bnRyeS1maWVsZCcpLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbnRhaW5lclJlZmVyZW5jZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gd2luZG93TmFtZVxuICAgICAqL1xuICAgIGNyZWF0ZVBvcHVwV2luZG93KGNvbnRhaW5lclJlZmVyZW5jZSwgdXJsLCB3aW5kb3dOYW1lKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgTmVvLk1haW4uZ2V0V2luZG93RGF0YSgpLnRoZW4od2luRGF0YSA9PiB7XG4gICAgICAgICAgICBOZW8ubWFpbi5Eb21BY2Nlc3MuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHtcbiAgICAgICAgICAgICAgICBpZDogW21lLmdldFJlZmVyZW5jZShjb250YWluZXJSZWZlcmVuY2UpLmlkXVxuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBsZXQge2hlaWdodCwgbGVmdCwgdG9wLCB3aWR0aH0gPSBkYXRhWzBdO1xuXG4gICAgICAgICAgICAgICAgaGVpZ2h0IC09IDUwOyAvLyBwb3B1cCBoZWFkZXIgaW4gQ2hyb21lXG4gICAgICAgICAgICAgICAgbGVmdCAgICs9IHdpbkRhdGEuc2NyZWVuTGVmdDtcbiAgICAgICAgICAgICAgICB0b3AgICAgKz0gKHdpbkRhdGEub3V0ZXJIZWlnaHQgLSB3aW5EYXRhLmlubmVySGVpZ2h0ICsgd2luRGF0YS5zY3JlZW5Ub3ApO1xuXG4gICAgICAgICAgICAgICAgTmVvLk1haW4ud2luZG93T3Blbih7XG4gICAgICAgICAgICAgICAgICAgIHVybCAgICAgICAgICAgOiBgLi4vJHt1cmx9L2luZGV4Lmh0bWxgLFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dGZWF0dXJlczogYGhlaWdodD0ke2hlaWdodH0sbGVmdD0ke2xlZnR9LHRvcD0ke3RvcH0sd2lkdGg9JHt3aWR0aH1gLFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dOYW1lICAgIDogd2luZG93TmFtZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFthcHBOYW1lXVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29tcG9uZW50LkJhc2V9XG4gICAgICovXG4gICAgZ2V0TWFpblZpZXcoYXBwTmFtZSkge1xuICAgICAgICBpZiAoIWFwcE5hbWUgfHwgYXBwTmFtZSA9PT0gJ0NvdmlkJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmlldztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBOZW8uYXBwc1thcHBOYW1lXS5tYWluVmlld0luc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGhhc2hPYmplY3RcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaGFzaE9iamVjdC5tYWludmlld1xuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0VGFiSW5kZXgoaGFzaE9iamVjdCkge1xuICAgICAgICBpZiAoIWhhc2hPYmplY3QgfHwgIWhhc2hPYmplY3QubWFpbnZpZXcpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubWFpblRhYnMuaW5kZXhPZihoYXNoT2JqZWN0Lm1haW52aWV3KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB0YWJJbmRleFxuICAgICAqIEByZXR1cm5zIHtOZW8uY29tcG9uZW50LkJhc2V9XG4gICAgICovXG4gICAgZ2V0Vmlldyh0YWJJbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRSZWZlcmVuY2UodGhpcy5tYWluVGFic1t0YWJJbmRleF0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgbG9hZERhdGEoKSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBmZXRjaChtZS5hcGlVcmwpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IG1lLmFkZFN0b3JlSXRlbXMoZGF0YSkpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdDYW7igJl0IGFjY2VzcyAnICsgbWUuYXBpVXJsLCBlcnIpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGxvYWRTdW1tYXJ5RGF0YSgpIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIGZldGNoKG1lLmFwaVN1bW1hcnlVcmwpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IG1lLmFwcGx5U3VtbWFyeURhdGEoZGF0YSkpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdDYW7igJl0IGFjY2VzcyAnICsgbWUuYXBpU3VtbWFyeVVybCwgZXJyKSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW1lLnN1bW1hcnlEYXRhKSB7XG4gICAgICAgICAgICAgICAgbWUub25Mb2FkU3VtbWFyeURhdGFGYWlsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDIwMDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgKi9cbiAgICBvbkFwcENvbm5lY3QobmFtZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnb25BcHBDb25uZWN0JywgbmFtZSk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIHBhcmVudFZpZXcsIHZpZXc7XG5cbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdTaGFyZWRDb3ZpZENoYXJ0JzpcbiAgICAgICAgICAgICAgICB2aWV3ID0gbWUuZ2V0UmVmZXJlbmNlKCdjb250cm9scy1wYW5lbCcpO1xuICAgICAgICAgICAgICAgIHBhcmVudFZpZXcgPSBOZW8uZ2V0Q29tcG9uZW50KHZpZXcucGFyZW50SWQpO1xuICAgICAgICAgICAgICAgIHBhcmVudFZpZXcuc3RvcmVSZWZlcmVuY2VzKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTaGFyZWRDb3ZpZEdhbGxlcnknOlxuICAgICAgICAgICAgICAgIHZpZXcgPSBtZS5nZXRSZWZlcmVuY2UoJ2dhbGxlcnktY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKG1lLm1haW5UYWJzLCAnZ2FsbGVyeScpO1xuICAgICAgICAgICAgICAgIG1lLmFjdGl2ZU1haW5UYWJJbmRleC0tO1xuICAgICAgICAgICAgICAgIE5lby5NYWluLmVkaXRSb3V0ZSh7bWFpbnZpZXc6IG1lLm1haW5UYWJzW21lLmFjdGl2ZU1haW5UYWJJbmRleF19KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1NoYXJlZENvdmlkSGVsaXgnOlxuICAgICAgICAgICAgICAgIHZpZXcgPSBtZS5nZXRSZWZlcmVuY2UoJ2hlbGl4LWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShtZS5tYWluVGFicywgJ2hlbGl4Jyk7XG4gICAgICAgICAgICAgICAgbWUuYWN0aXZlTWFpblRhYkluZGV4LS07XG4gICAgICAgICAgICAgICAgTmVvLk1haW4uZWRpdFJvdXRlKHttYWludmlldzogbWUubWFpblRhYnNbbWUuYWN0aXZlTWFpblRhYkluZGV4XX0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnU2hhcmVkQ292aWRNYXAnOlxuICAgICAgICAgICAgICAgIHZpZXcgPSBtZS5nZXRSZWZlcmVuY2UoJ21hcGJveC1nbC1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUobWUubWFpblRhYnMsICdtYXBib3hnbG1hcCcpO1xuICAgICAgICAgICAgICAgIG1lLmFjdGl2ZU1haW5UYWJJbmRleC0tO1xuICAgICAgICAgICAgICAgIE5lby5NYWluLmVkaXRSb3V0ZSh7bWFpbnZpZXc6IG1lLm1haW5UYWJzW21lLmFjdGl2ZU1haW5UYWJJbmRleF19KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2aWV3KSB7XG4gICAgICAgICAgICBOZW9BcnJheS5hZGQobWUuY29ubmVjdGVkQXBwcywgbmFtZSk7XG5cbiAgICAgICAgICAgIHBhcmVudFZpZXcgPSBwYXJlbnRWaWV3ID8gcGFyZW50VmlldyA6IHZpZXcuaXNUYWIgPyB2aWV3LnVwKCd0YWItY29udGFpbmVyJykgOiBOZW8uZ2V0Q29tcG9uZW50KHZpZXcucGFyZW50SWQpO1xuICAgICAgICAgICAgcGFyZW50Vmlldy5yZW1vdmUodmlldywgZmFsc2UpO1xuXG4gICAgICAgICAgICBOZW8uYXBwc1tuYW1lXS5vbigncmVuZGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtZS5nZXRNYWluVmlldyhuYW1lKS5hZGQodmlldyk7XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAgICovXG4gICAgb25BcHBEaXNjb25uZWN0KG5hbWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgcGFyZW50VmlldyA9IG1lLmdldE1haW5WaWV3KG5hbWUpLFxuICAgICAgICAgICAgdmlldyAgICAgICA9IHBhcmVudFZpZXcuaXRlbXNbMF0sXG4gICAgICAgICAgICBpbmRleDtcblxuICAgICAgICBjb25zb2xlLmxvZygnb25BcHBEaXNjb25uZWN0JywgbmFtZSk7XG5cbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdTaGFyZWRDb3ZpZCc6XG4gICAgICAgICAgICAgICAgTmVvLk1haW4ud2luZG93Q2xvc2Uoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lczogbWUuY29ubmVjdGVkQXBwcyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1NoYXJlZENvdmlkQ2hhcnQnOlxuICAgICAgICAgICAgY2FzZSAnU2hhcmVkQ292aWRHYWxsZXJ5JzpcbiAgICAgICAgICAgIGNhc2UgJ1NoYXJlZENvdmlkSGVsaXgnOlxuICAgICAgICAgICAgY2FzZSAnU2hhcmVkQ292aWRNYXAnOlxuICAgICAgICAgICAgICAgIHZpZXcgPSBwYXJlbnRWaWV3Lml0ZW1zWzBdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZpZXcpIHtcbiAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShtZS5jb25uZWN0ZWRBcHBzLCBuYW1lKTtcblxuICAgICAgICAgICAgcGFyZW50Vmlldy5yZW1vdmUodmlldywgZmFsc2UpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdTaGFyZWRDb3ZpZENoYXJ0JzpcbiAgICAgICAgICAgICAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCd0YWJsZS1jb250YWluZXInKS5hZGQodmlldyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1NoYXJlZENvdmlkR2FsbGVyeSc6XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gbWUuY29ubmVjdGVkQXBwcy5pbmNsdWRlcygnU2hhcmVkQ292aWRNYXAnKSA/IDIgOiAzO1xuICAgICAgICAgICAgICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ3RhYi1jb250YWluZXInKS5pbnNlcnQoaW5kZXgsIHZpZXcpO1xuICAgICAgICAgICAgICAgICAgICBtZS5tYWluVGFicy5zcGxpY2UoaW5kZXgsIDAsICdnYWxsZXJ5Jyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1NoYXJlZENvdmlkSGVsaXgnOlxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gbWUuY29ubmVjdGVkQXBwcy5pbmNsdWRlcygnU2hhcmVkQ292aWRHYWxsZXJ5JykgPyBpbmRleCAtIDEgOiBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBtZS5jb25uZWN0ZWRBcHBzLmluY2x1ZGVzKCdTaGFyZWRDb3ZpZE1hcCcpICAgICA/IGluZGV4IC0gMSA6IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ3RhYi1jb250YWluZXInKS5pbnNlcnQoaW5kZXgsIHZpZXcpO1xuICAgICAgICAgICAgICAgICAgICBtZS5tYWluVGFicy5zcGxpY2UoaW5kZXgsIDAsICdoZWxpeCcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdTaGFyZWRDb3ZpZE1hcCc6XG4gICAgICAgICAgICAgICAgICAgIG1lLmdldFJlZmVyZW5jZSgndGFiLWNvbnRhaW5lcicpLmluc2VydCgxLCB2aWV3KTtcbiAgICAgICAgICAgICAgICAgICAgbWUubWFpblRhYnMuc3BsaWNlKDEsIDAsICdtYXBib3hnbG1hcCcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db3VudHJ5RmllbGRDbGVhcigpIHtcbiAgICAgICAgdGhpcy5jb3VudHJ5UmVjb3JkID0gbnVsbDtcblxuICAgICAgICBOZW8uTWFpbi5lZGl0Um91dGUoe1xuICAgICAgICAgICAgY291bnRyeTogbnVsbFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Db3VudHJ5RmllbGRTZWxlY3QoZGF0YSkge2NvbnNvbGUubG9nKCdvbkNvdW50cnlGaWVsZFNlbGVjdCcsIGRhdGEpO1xuICAgICAgICB0aGlzLmNvdW50cnlSZWNvcmQgPSBkYXRhLnJlY29yZDtcblxuICAgICAgICBOZW8uTWFpbi5lZGl0Um91dGUoe1xuICAgICAgICAgICAgY291bnRyeTogZGF0YS52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvbGRWYWx1ZVxuICAgICAqL1xuICAgIG9uSGFzaENoYW5nZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4ICAgICAgID0gbWUuZ2V0VGFiSW5kZXgodmFsdWUuaGFzaCksXG4gICAgICAgICAgICBjb3VudHJ5ICAgICAgICAgICA9IHZhbHVlLmhhc2ggJiYgdmFsdWUuaGFzaC5jb3VudHJ5LFxuICAgICAgICAgICAgY291bnRyeUZpZWxkICAgICAgPSBtZS5nZXRSZWZlcmVuY2UoJ2NvdW50cnktZmllbGQnKSxcbiAgICAgICAgICAgIHRhYkNvbnRhaW5lciAgICAgID0gbWUuZ2V0UmVmZXJlbmNlKCd0YWItY29udGFpbmVyJyksXG4gICAgICAgICAgICBhY3RpdmVWaWV3ICAgICAgICA9IG1lLmdldFZpZXcoYWN0aXZlSW5kZXgpLFxuICAgICAgICAgICAgZGVsYXlTZWxlY3Rpb24gICAgPSAhbWUuZGF0YSA/IDEwMDAgOiB0YWJDb250YWluZXIuYWN0aXZlSW5kZXggIT09IGFjdGl2ZUluZGV4ID8gMTAwIDogMCxcbiAgICAgICAgICAgIGlkLCBzZWxlY3Rpb25Nb2RlbDtcblxuICAgICAgICBpZiAobWUuZmlyc3RIYXNoQ2hhbmdlIHx8IHZhbHVlLmFwcE5hbWUpIHtjb25zb2xlLmxvZygnb25IYXNoQ2hhbmdlJywgdmFsdWUpO1xuICAgICAgICAgICAgc2VsZWN0aW9uTW9kZWwgPSBhY3RpdmVWaWV3LnNlbGVjdGlvbk1vZGVsO1xuXG4gICAgICAgICAgICB0YWJDb250YWluZXIuYWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleDtcbiAgICAgICAgICAgIG1lLmFjdGl2ZU1haW5UYWJJbmRleCAgICA9IGFjdGl2ZUluZGV4O1xuXG4gICAgICAgICAgICBpZiAoYWN0aXZlVmlldy5udHlwZSA9PT0gJ2hlbGl4Jykge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVZpZXcuZ2V0T2Zmc2V0VmFsdWVzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHRvZG86IHRoaXMgd2lsbCBvbmx5IGxvYWQgZWFjaCBzdG9yZSBvbmNlLiBhZGp1c3QgdGhlIGxvZ2ljIGluIGNhc2Ugd2Ugd2FudCB0byBzdXBwb3J0IHJlbG9hZGluZyB0aGUgQVBJXG5cbiAgICAgICAgICAgIGlmIChtZS5kYXRhICYmIGFjdGl2ZVZpZXcuc3RvcmUgJiYgYWN0aXZlVmlldy5zdG9yZS5nZXRDb3VudCgpIDwgMSkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVZpZXcuc3RvcmUuZGF0YSA9IG1lLmRhdGE7XG4gICAgICAgICAgICAgICAgZGVsYXlTZWxlY3Rpb24gPSA1MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHRvZG86IGh0dHBzOi8vZ2l0aHViLmNvbS9uZW9tanMvbmVvL2lzc3Vlcy80ODNcbiAgICAgICAgICAgIC8vIHF1aWNrIGhhY2suIHNlbGVjdGlvbk1vZGVscyB1cGRhdGUgdGhlIHZkb20gb2YgdGhlIHRhYmxlLkNvbnRhaW5lci5cbiAgICAgICAgICAgIC8vIGlmIHRhYmxlLlZpZXcgaXMgdmRvbSB1cGRhdGluZywgdGhpcyBjYW4gcmVzdWx0IGluIGEgMnggcmVuZGVyaW5nIG9mIGFsbCByb3dzLlxuICAgICAgICAgICAgaWYgKGRlbGF5U2VsZWN0aW9uID09PSAxMDAwICYmIGFjdGl2ZVZpZXcubnR5cGUgPT09ICd0YWJsZS1jb250YWluZXInKSB7XG4gICAgICAgICAgICAgICAgZGVsYXlTZWxlY3Rpb24gPSAyMDAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWN0aXZlVmlldy5udHlwZSA9PT0gJ2NvdmlkLXdvcmxkLW1hcCcgJiYgbWUuZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmICghbWUud29ybGRNYXBIYXNEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVZpZXcubG9hZERhdGEobWUuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIG1lLndvcmxkTWFwSGFzRGF0YSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB0b2RvOiBpbnN0ZWFkIG9mIGEgdGltZW91dCB0aGlzIHNob3VsZCBhZGQgYSBzdG9yZSBsb2FkIGxpc3RlbmVyIChzaW5nbGU6IHRydWUpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobWUuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeUZpZWxkLnZhbHVlID0gY291bnRyeTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmNvdW50cnkgPSAnYWxsJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmVWaWV3Lm50eXBlID09PSAnZ2FsbGVyeScgfHwgbWUuY29ubmVjdGVkQXBwcy5pbmNsdWRlcygnU2hhcmVkQ292aWRHYWxsZXJ5JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3VudHJ5ICYmICFtZS5nYWxsZXJ5Vmlldy5zZWxlY3Rpb25Nb2RlbC5pc1NlbGVjdGVkKGNvdW50cnkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUuZ2FsbGVyeVZpZXcuc2VsZWN0aW9uTW9kZWwuc2VsZWN0KGNvdW50cnksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmVWaWV3Lm50eXBlID09PSAnaGVsaXgnIHx8IG1lLmNvbm5lY3RlZEFwcHMuaW5jbHVkZXMoJ1NoYXJlZENvdmlkSGVsaXgnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50cnkgJiYgIW1lLmhlbGl4Vmlldy5zZWxlY3Rpb25Nb2RlbC5pc1NlbGVjdGVkKGNvdW50cnkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUuaGVsaXhWaWV3LnNlbGVjdGlvbk1vZGVsLnNlbGVjdChjb3VudHJ5LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUuaGVsaXhWaWV3Lm9uS2V5RG93blNwYWNlKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKChhY3RpdmVWaWV3Lm50eXBlID09PSAnbWFwYm94Z2wnIHx8IG1lLmNvbm5lY3RlZEFwcHMuaW5jbHVkZXMoJ1NoYXJlZENvdmlkTWFwJykpICYmIG1lLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWUubWFwYm94Z2xNYXBIYXNEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUubWFwQm94Vmlldy5kYXRhID0gbWUuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZS5tYXBib3hnbE1hcEhhc0RhdGEgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWUuY291bnRyeVJlY29yZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1haW5Db250YWluZXJDb250cm9sbGVyLnNlbGVjdE1hcGJveEdsQ291bnRyeShtZS5tYXBCb3hWaWV3LCBtZS50YWJsZVZpZXcuc3RvcmUuZ2V0KGNvdW50cnkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbWUubWFwQm94Vmlldy5hdXRvUmVzaXplKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aXZlVmlldy5udHlwZSA9PT0gJ3RhYmxlLWNvbnRhaW5lcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkID0gc2VsZWN0aW9uTW9kZWwuZ2V0Um93SWQoYWN0aXZlVmlldy5zdG9yZS5pbmRleE9mKGNvdW50cnkpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCd0YWJsZS1jb250YWluZXInKS5maXJlKCdjb3VudHJ5U2VsZWN0Jywge3JlY29yZDogYWN0aXZlVmlldy5zdG9yZS5nZXQoY291bnRyeSl9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50cnkgJiYgIXNlbGVjdGlvbk1vZGVsLmlzU2VsZWN0ZWQoaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uTW9kZWwuc2VsZWN0KGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZW8ubWFpbi5Eb21BY2Nlc3Muc2Nyb2xsVG9UYWJsZVJvdyh7aWQ6IGlkfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBkZWxheVNlbGVjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBtZS5maXJzdEhhc2hDaGFuZ2UgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uTG9hZFN1bW1hcnlEYXRhRmFpbCgpIHtcbiAgICAgICAgY29uc3QgdGFibGUgPSB0aGlzLmdldFJlZmVyZW5jZSgndGFibGUnKSxcbiAgICAgICAgICAgICAgdmRvbSA9IHRhYmxlLnZkb207XG5cbiAgICAgICAgdmRvbS5jblswXS5jblsxXS5jbi5wdXNoKHtcbiAgICAgICAgICAgIHRhZyAgOiAnZGl2JyxcbiAgICAgICAgICAgIGNscyAgOiBbJ25lby1ib3gtbGFiZWwnLCAnbmVvLWxhYmVsJ10sXG4gICAgICAgICAgICBodG1sIDogW1xuICAgICAgICAgICAgICAgICdTdW1tYXJ5IGRhdGEgZGlkIG5vdCBhcnJpdmUgYWZ0ZXIgMnMuPC9icj4nLFxuICAgICAgICAgICAgICAgICdQbGVhc2UgZG91YmxlLWNoZWNrIGlmIHRoZSBBUEkgaXMgb2ZmbGluZTo8L2JyPjwvYnI+JyxcbiAgICAgICAgICAgICAgICAnPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZGlzZWFzZS5zaC9hbGxcIj5Ob3ZlbENPVklEL0FQSSBhbGwgZW5kcG9pbnQ8L2E+PC9icj48L2JyPicsXG4gICAgICAgICAgICAgICAgJ2FuZCBpZiBzbyBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLidcbiAgICAgICAgICAgIF0uam9pbignJyksXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogJzIwcHgnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRhYmxlLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25NYWluVmlld01vdW50ZWQoKSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBOZW8ubWFpbi5Eb21BY2Nlc3MuYWRkU2NyaXB0KHtcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgZGVmZXI6IHRydWUsXG4gICAgICAgICAgICBzcmMgIDogJ2h0dHBzOi8vYnV0dG9ucy5naXRodWIuaW8vYnV0dG9ucy5qcydcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdnYWxsZXJ5Jykub24oJ3NlbGVjdCcsIG1lLnVwZGF0ZUNvdW50cnlGaWVsZCwgbWUpO1xuICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ2hlbGl4JykgIC5vbignc2VsZWN0JywgbWUudXBkYXRlQ291bnRyeUZpZWxkLCBtZSk7XG5cbiAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCd0YWJsZScpLm9uKHtcbiAgICAgICAgICAgIGRlc2VsZWN0OiBtZS5jbGVhckNvdW50cnlGaWVsZCxcbiAgICAgICAgICAgIHNlbGVjdCAgOiBtZS51cGRhdGVDb3VudHJ5RmllbGQsXG4gICAgICAgICAgICBzY29wZSAgIDogbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvblJlbG9hZERhdGFCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICAgICAgdGhpcy5sb2FkU3VtbWFyeURhdGEoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uUmVtb3ZlRm9vdGVyQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICBjb25zdCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICBhY3RpdmVUYWIgPSBtZS5nZXRSZWZlcmVuY2UoJ3RhYi1jb250YWluZXInKS5nZXRBY3RpdmVDYXJkKCk7XG5cbiAgICAgICAgbWUudmlldy5yZW1vdmUobWUuZ2V0UmVmZXJlbmNlKCdmb290ZXInKSwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKGFjdGl2ZVRhYi5udHlwZSA9PT0gJ2NvdmlkLW1hcGJveGdsLWNvbnRhaW5lcicpIHtcbiAgICAgICAgICAgIG1lLmdldFJlZmVyZW5jZSgnbWFwYm94Z2xtYXAnKS5hdXRvUmVzaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uU3dpdGNoVGhlbWVCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBidXR0b24gICA9IGRhdGEuY29tcG9uZW50LFxuICAgICAgICAgICAgbG9nbyAgICAgPSBtZS5nZXRSZWZlcmVuY2UoJ2xvZ28nKSxcbiAgICAgICAgICAgIGxvZ29QYXRoID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9uZW9tanMvcGFnZXMvbWFzdGVyL3Jlc291cmNlcy9pbWFnZXMvYXBwcy9jb3ZpZC8nLFxuICAgICAgICAgICAgdmRvbSAgICAgPSBsb2dvLnZkb20sXG4gICAgICAgICAgICB2aWV3ICAgICA9IG1lLnZpZXcsXG4gICAgICAgICAgICBidXR0b25UZXh0LCBjbHMsIGhyZWYsIGljb25DbHMsIG1hcFZpZXcsIG1hcFZpZXdTdHlsZSwgdGhlbWU7XG5cbiAgICAgICAgaWYgKG1lLmNvbm5lY3RlZEFwcHMuaW5jbHVkZXMoJ1NoYXJlZENvdmlkTWFwJykpIHtcbiAgICAgICAgICAgIG1hcFZpZXcgPSBtZS5nZXRNYWluVmlldygnU2hhcmVkQ292aWRNYXAnKS5pdGVtc1swXS5pdGVtc1swXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1hcFZpZXcgPSBtZS5nZXRSZWZlcmVuY2UoJ21hcGJveGdsbWFwJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYnV0dG9uLnRleHQgPT09ICdUaGVtZSBMaWdodCcpIHtcbiAgICAgICAgICAgIGJ1dHRvblRleHQgICA9ICdUaGVtZSBEYXJrJztcbiAgICAgICAgICAgIGhyZWYgICAgICAgICA9ICcuLi9kaXN0L2RldmVsb3BtZW50L25lby10aGVtZS1saWdodC1uby1jc3M0LmNzcyc7XG4gICAgICAgICAgICBpY29uQ2xzICAgICAgPSAnZmEgZmEtbW9vbic7XG4gICAgICAgICAgICBtYXBWaWV3U3R5bGUgPSBtYXBWaWV3Lm1hcGJveFN0eWxlTGlnaHQ7XG4gICAgICAgICAgICB0aGVtZSAgICAgICAgPSAnbmVvLXRoZW1lLWxpZ2h0JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvblRleHQgICA9ICdUaGVtZSBMaWdodCc7XG4gICAgICAgICAgICBocmVmICAgICAgICAgPSAnLi4vZGlzdC9kZXZlbG9wbWVudC9uZW8tdGhlbWUtZGFyay1uby1jc3M0LmNzcyc7XG4gICAgICAgICAgICBpY29uQ2xzICAgICAgPSAnZmEgZmEtc3VuJztcbiAgICAgICAgICAgIG1hcFZpZXdTdHlsZSA9IG1hcFZpZXcubWFwYm94U3R5bGVEYXJrO1xuICAgICAgICAgICAgdGhlbWUgICAgICAgID0gJ25lby10aGVtZS1kYXJrJztcbiAgICAgICAgfVxuXG4gICAgICAgIHZkb20uc3JjID0gbG9nb1BhdGggKyAodGhlbWUgPT09ICduZW8tdGhlbWUtZGFyaycgPyAnY292aWRfbG9nb19kYXJrLmpwZycgOiAnY292aWRfbG9nb19saWdodC5qcGcnKTtcbiAgICAgICAgbG9nby52ZG9tID0gdmRvbTtcblxuXG4gICAgICAgIGlmIChOZW8uY29uZmlnLnVzZUNzczQpIHtcbiAgICAgICAgICAgIFt2aWV3LmFwcE5hbWUsIC4uLm1lLmNvbm5lY3RlZEFwcHNdLmZvckVhY2goYXBwTmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgdmlldyA9IG1lLmdldE1haW5WaWV3KGFwcE5hbWUpO1xuXG4gICAgICAgICAgICAgICAgY2xzID0gWy4uLnZpZXcuY2xzXTtcblxuICAgICAgICAgICAgICAgIHZpZXcuY2xzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmluY2x1ZGVzKCduZW8tdGhlbWUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIE5lb0FycmF5LmFkZChjbHMsIHRoZW1lKTtcbiAgICAgICAgICAgICAgICB2aWV3LmNscyA9IGNscztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBidXR0b24uc2V0KHtcbiAgICAgICAgICAgICAgICBpY29uQ2xzOiBpY29uQ2xzLFxuICAgICAgICAgICAgICAgIHRleHQgICA6IGJ1dHRvblRleHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgW3ZpZXcuYXBwTmFtZSwgLi4ubWUuY29ubmVjdGVkQXBwc10uZm9yRWFjaChhcHBOYW1lID0+IHtcbiAgICAgICAgICAgICAgICBOZW8ubWFpbi5hZGRvbi5TdHlsZXNoZWV0LnN3YXBTdHlsZVNoZWV0KHtcbiAgICAgICAgICAgICAgICAgICAgYXBwTmFtZTogYXBwTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaHJlZiAgIDogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgaWQgICAgIDogJ25lby10aGVtZSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uLnNldCh7XG4gICAgICAgICAgICBpY29uQ2xzOiBpY29uQ2xzLFxuICAgICAgICAgICAgdGV4dCAgIDogYnV0dG9uVGV4dFxuICAgICAgICB9KTtcblxuICAgICAgICBtYXBWaWV3Lm1hcGJveFN0eWxlID0gbWFwVmlld1N0eWxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25XaW5kb3dDaGFydE1heGltaXplQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmNyZWF0ZVBvcHVwV2luZG93KCdjb250cm9scy1wYW5lbCcsICdzaGFyZWRjb3ZpZGNoYXJ0JywgJ1NoYXJlZENvdmlkQ2hhcnQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uV2luZG93R2FsbGVyeU1heGltaXplQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmNyZWF0ZVBvcHVwV2luZG93KCdnYWxsZXJ5LWNvbnRhaW5lcicsICdzaGFyZWRjb3ZpZGdhbGxlcnknLCAnU2hhcmVkQ292aWRHYWxsZXJ5Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbldpbmRvd0hlbGl4TWF4aW1pemVCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlUG9wdXBXaW5kb3coJ2hlbGl4LWNvbnRhaW5lcicsICdzaGFyZWRjb3ZpZGhlbGl4JywgJ1NoYXJlZENvdmlkSGVsaXgnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uV2luZG93TWFwTWF4aW1pemVCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlUG9wdXBXaW5kb3coJ21hcGJveC1nbC1jb250YWluZXInLCAnc2hhcmVkY292aWRtYXAnLCAnU2hhcmVkQ292aWRNYXAnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2aWV3XG4gICAgICogQHBhcmFtIHJlY29yZFxuICAgICAqL1xuICAgIHN0YXRpYyBzZWxlY3RNYXBib3hHbENvdW50cnkodmlldywgcmVjb3JkKSB7Y29uc29sZS5sb2cocmVjb3JkLmNvdW50cnlJbmZvLmlzbzIpO1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbmVvbWpzL25lby9pc3N1ZXMvNDkwXG4gICAgICAgIC8vIHRoZXJlIGFyZSBtaXNzaW5nIGlzbzImMyB2YWx1ZXMgb24gbmF0dXJhbCBlYXJ0aCB2ZWN0b3JcbiAgICAgICAgY29uc3QgbWFwID0ge1xuICAgICAgICAgICAgRlJBICAgIDogWydtYXRjaCcsIFsnZ2V0JywgJ05BTUUnXSwgWydGcmFuY2UnXSwgdHJ1ZSwgZmFsc2VdLFxuICAgICAgICAgICAgTk9SICAgIDogWydtYXRjaCcsIFsnZ2V0JywgJ05BTUUnXSwgWydOb3J3YXknXSwgdHJ1ZSwgZmFsc2VdLFxuICAgICAgICAgICAgZGVmYXVsdDogWydtYXRjaCcsIFsnZ2V0JywgJ0lTT19BMyddLCBbcmVjb3JkLmNvdW50cnlJbmZvLmlzbzNdLCB0cnVlLCBmYWxzZV1cbiAgICAgICAgfTtcblxuICAgICAgICB2aWV3LnNldEZpbHRlcih7XG4gICAgICAgICAgICBsYXllcklkOiAnbmUtMTBtLWFkbWluLTAtY291bnRyaWVzLTRzN3J2ZicsXG4gICAgICAgICAgICB2YWx1ZSAgOiBtYXBbcmVjb3JkLmNvdW50cnlJbmZvLmlzbzNdIHx8IG1hcFsnZGVmYXVsdCddXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdmlldy5mbHlUbyh7XG4gICAgICAgICAgICBsYXQ6IHJlY29yZC5jb3VudHJ5SW5mby5sYXQsXG4gICAgICAgICAgICBsbmc6IHJlY29yZC5jb3VudHJ5SW5mby5sb25nXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZpZXcuem9vbSA9IDU7IC8vIHRvZG86IHdlIGNvdWxkIHVzZSBhIGRpZmZlcmVudCB2YWx1ZSBmb3IgYmlnIGNvdW50cmllcyAoUnVzc2lhLCBVU0EsLi4uKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YS5yZWNvcmRcbiAgICAgKi9cbiAgICB1cGRhdGVDb3VudHJ5RmllbGQoZGF0YSkge1xuICAgICAgICBOZW8uTWFpbi5lZGl0Um91dGUoe1xuICAgICAgICAgICAgY291bnRyeTogZGF0YS5yZWNvcmQuY291bnRyeVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5Db250YWluZXJDb250cm9sbGVyKTtcblxuZXhwb3J0IHtNYWluQ29udGFpbmVyQ29udHJvbGxlciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ2hlY2tCb3ggICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9mb3JtL2ZpZWxkL0NoZWNrQm94Lm1qcyc7XG5pbXBvcnQgQ29udGFpbmVyICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9jb250YWluZXIvQmFzZS5tanMnO1xuaW1wb3J0IEhpc3RvcmljYWxEYXRhVGFibGUgICAgICBmcm9tICcuL2NvdW50cnkvSGlzdG9yaWNhbERhdGFUYWJsZS5tanMnO1xuaW1wb3J0IExpbmVDaGFydENvbXBvbmVudCAgICAgICBmcm9tICcuL2NvdW50cnkvTGluZUNoYXJ0Q29tcG9uZW50Lm1qcydcbmltcG9ydCBQYW5lbCAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbnRhaW5lci9QYW5lbC5tanMnO1xuaW1wb3J0IFRhYkNvbnRhaW5lciAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvdGFiL0NvbnRhaW5lci5tanMnO1xuaW1wb3J0IFRhYmxlICAgICAgICAgICAgICAgICAgICBmcm9tICcuL2NvdW50cnkvVGFibGUubWpzJztcbmltcG9ydCBUYWJsZUNvbnRhaW5lckNvbnRyb2xsZXIgZnJvbSAnLi9UYWJsZUNvbnRhaW5lckNvbnRyb2xsZXIubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgU2hhcmVkQ292aWQudmlldy5UYWJsZUNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5CYXNlXG4gKi9cbmNsYXNzIFRhYmxlQ29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nU2hhcmVkQ292aWQudmlldy5UYWJsZUNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnU2hhcmVkQ292aWQudmlldy5UYWJsZUNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBhdXRvTW91bnQ9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgYXV0b01vdW50OiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50fG51bGx9IGNvbnRyb2xsZXI9VGFibGVDb250YWluZXJDb250cm9sbGVyXG4gICAgICAgICAqL1xuICAgICAgICBjb250cm9sbGVyOiBUYWJsZUNvbnRhaW5lckNvbnRyb2xsZXIsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGhpc3RvcnlQYW5lbFdpZHRoPTUyMFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBoaXN0b3J5UGFuZWxXaWR0aDogNTIwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLnRhYmxlLkNvbnRhaW5lcnxudWxsfSB0YWJsZT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB0YWJsZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSB0YWJsZUNvbmZpZz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB0YWJsZUNvbmZpZzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBsYXlvdXQ9e250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfG51bGx9IGl0ZW1zXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgIG50eXBlIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICBmbGV4ICA6IDEsXG4gICAgICAgICAgICBsYXlvdXQ6ICdmaXQnLFxuICAgICAgICAgICAgaXRlbXMgOiBbXVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICA6IFBhbmVsLFxuICAgICAgICAgICAgY2xzICAgICAgOiBbJ25lby1jb25maWd1cmF0aW9uLXBhbmVsJywgJ25lby1wYW5lbCcsICduZW8tY29udGFpbmVyJ10sXG4gICAgICAgICAgICBsYXlvdXQgICA6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgICAgIHJlZmVyZW5jZTogJ2NvbnRyb2xzLXBhbmVsJyxcbiAgICAgICAgICAgIHN0eWxlICAgIDoge2JhY2tncm91bmRDb2xvcjogJyMyYjJiMmInfSxcbiAgICAgICAgICAgIHdpZHRoICAgIDogJ0Bjb25maWc6aGlzdG9yeVBhbmVsV2lkdGgnLFxuXG4gICAgICAgICAgICBjb250YWluZXJDb25maWc6IHtcbiAgICAgICAgICAgICAgICBmbGV4IDogbnVsbCxcbiAgICAgICAgICAgICAgICBzdHlsZToge292ZXJmbG93WTogJ3Njcm9sbCd9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBoZWFkZXJzOiBbe1xuICAgICAgICAgICAgICAgIGRvY2s6ICd0b3AnLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uQ29sbGFwc2VCdXR0b25DbGljaycsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdYJ1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgICAgOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICdoaXN0b3JpY2FsLWRhdGEtbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdIaXN0b3JpY2FsIERhdGEnXG4gICAgICAgICAgICAgICAgfSwgJy0+Jywge1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uNTIwcHhCdXR0b25DbGljaycsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA6IDI0LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnNTIwcHgnXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uODAwcHhCdXR0b25DbGljaycsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA6IDI0LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnODAwcHgnXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uV2luZG93Q2hhcnRNYXhpbWl6ZUJ1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhciBmYS13aW5kb3ctbWF4aW1pemUnXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dLFxuXG4gICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICBtb2R1bGU6IFRhYkNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICBzdHlsZSA6IHttYXJnaW5Ub3A6ICcxMHB4J30sXG4gICAgICAgICAgICAgICAgaXRlbXMgOiBbe1xuICAgICAgICAgICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMgOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgbnR5cGU6ICd0b29sYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXggOiAnMCAxIGF1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlICAgIDogQ2hlY2tCb3gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZCAgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFRleHQgOiAnTG9nYXJpdGhtaWMgU2NhbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsV2lkdGg6IDEzNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2UgOiAnbG9nYXJpdGhtaWMtc2NhbGUtY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiAnb25Mb2dhcml0aG1pY1NjYWxlQ2hhbmdlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUgICAgOiBDaGVja0JveCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFRleHQgOiAnRGFpbHkgVmFsdWVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSAgICAgOiB7bWFyZ2luTGVmdDogJzMwcHgnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFdpZHRoOiA5NSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogJ29uRGFpbHlWYWx1ZXNDaGFuZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlICAgOiBMaW5lQ2hhcnRDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4ICAgICA6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICdsaW5lLWNoYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgfV0sXG5cbiAgICAgICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtY2hhcnQtbGluZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnQ2hhcnQnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfV1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmhpc3RvcmljYWxEYXRhVGFibGUgPSBOZW8uY3JlYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogSGlzdG9yaWNhbERhdGFUYWJsZSxcbiAgICAgICAgICAgIHJlZmVyZW5jZTogJ2hpc3RvcmljYWwtZGF0YS10YWJsZScsXG5cbiAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS10YWJsZScsXG4gICAgICAgICAgICAgICAgdGV4dCAgIDogJ1RhYmxlJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLi4ubWUuaGlzdG9yaWNhbERhdGFUYWJsZUNvbmZpZyB8fCB7fVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5pdGVtc1sxXS5pdGVtc1swXS5pdGVtcy5wdXNoKG1lLmhpc3RvcmljYWxEYXRhVGFibGUpO1xuXG4gICAgICAgIG1lLnRhYmxlID0gTmVvLmNyZWF0ZSh7XG4gICAgICAgICAgICBtb2R1bGUgICA6IFRhYmxlLFxuICAgICAgICAgICAgcmVmZXJlbmNlOiAndGFibGUnLFxuICAgICAgICAgICAgLi4ubWUudGFibGVDb25maWcgfHwge31cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuaXRlbXNbMF0uaXRlbXMucHVzaChtZS50YWJsZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBzdG9yZVJlZmVyZW5jZXMoKSB7XG4gICAgICAgIHRoaXMuY29udHJvbGxlci5zdG9yZVJlZmVyZW5jZXMoKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFRhYmxlQ29udGFpbmVyKTtcblxuZXhwb3J0IHtUYWJsZUNvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29tcG9uZW50Q29udHJvbGxlciBmcm9tICcuLi8uLi8uLi9zcmMvY29udHJvbGxlci9Db21wb25lbnQubWpzJztcbmltcG9ydCBOZW9BcnJheSAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy91dGlsL0FycmF5Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFNoYXJlZENvdmlkLnZpZXcuVGFibGVDb250YWluZXJDb250cm9sbGVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udHJvbGxlci5Db21wb25lbnRcbiAqL1xuY2xhc3MgVGFibGVDb250YWluZXJDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50Q29udHJvbGxlciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1NoYXJlZENvdmlkLnZpZXcuVGFibGVDb250YWluZXJDb250cm9sbGVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdTaGFyZWRDb3ZpZC52aWV3LlRhYmxlQ29udGFpbmVyQ29udHJvbGxlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGFwaUJhc2VVcmw9J2h0dHBzOi8vZGlzZWFzZS5zaC8nXG4gICAgICAgICAqL1xuICAgICAgICBhcGlCYXNlVXJsOiAnaHR0cHM6Ly9kaXNlYXNlLnNoLycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGFwaUhpc3RvcmljYWxEYXRhRW5kcG9pbnQ9J2hpc3RvcmljYWwnXG4gICAgICAgICAqL1xuICAgICAgICBhcGlIaXN0b3JpY2FsRGF0YUVuZHBvaW50OiAndjIvaGlzdG9yaWNhbC8nLFxuICAgICAgICAvKipcbiAgICAgICAgICogTnVtYmVyIG9mIGRheXMgeW91IHdhbnQgdGhlIGRhdGEgdG8gZ28gYmFjayB0by4gRGVmYXVsdCBpcyAzMC4gVXNlIGFsbCBmb3IgZnVsbCBkYXRhIHNldC4gRXg6IDE1LCBhbGwsIDI0XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxTdHJpbmd9IGFwaUhpc3RvcmljYWxEYXRhVGltZVJhbmdlPSdhbGwnXG4gICAgICAgICAqL1xuICAgICAgICBhcGlIaXN0b3JpY2FsRGF0YVRpbWVSYW5nZTogJ2FsbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgYWxsIHJlY29yZHMgd2l0aCAwIGNhc2VzIGZyb20gdGhlIGhpc3RvcmljYWwgZGF0YSAodGFibGUgJiBjaGFydClcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcmVtb3ZlRW1wdHlSZWNvcmRzPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHJlbW92ZUVtcHR5UmVjb3JkczogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gc2VsZWN0ZWRSZWNvcmQ9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZWN0ZWRSZWNvcmQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8udGFibGUuQ29udGFpbmVyfG51bGx9IHRhYmxlXz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHRhYmxlXzogbnVsbFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUudmlldy5vbignY291bnRyeVNlbGVjdCcsIG1lLm9uVGFibGVTZWxlY3QsIG1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgYWRkU3RvcmVJdGVtcyhkYXRhKSB7XG4gICAgICAgIGNvbnN0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgIGRhdGFBcnJheSA9IFtdLFxuICAgICAgICAgICAgICBtYXAgICAgICAgPSB7fTtcblxuICAgICAgICBsZXQgdGltZWxpbmUgID0gZGF0YSAmJiBkYXRhLnRpbWVsaW5lLFxuICAgICAgICAgICAgbmV4dEl0ZW07XG5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL05vdmVsQ09WSUQvQVBJL2lzc3Vlcy8zMDkgLy8gZGlmZmVyZW50IGZvcm1hdCBmb3IgJ2FsbCdcbiAgICAgICAgaWYgKGRhdGEgJiYgIWRhdGEudGltZWxpbmUpIHtcbiAgICAgICAgICAgIHRpbWVsaW5lID0gZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aW1lbGluZSkge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGltZWxpbmUuY2FzZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIG1hcFtrZXldID0ge2RhdGU6IG5ldyBEYXRlKGtleSkudG9JU09TdHJpbmcoKSwgY2FzZXM6IHZhbHVlfTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aW1lbGluZS5kZWF0aHMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChtYXAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBtYXBba2V5XS5kZWF0aHMgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtYXBba2V5XSA9IHtkYXRlOiBuZXcgRGF0ZShrZXkpLnRvSVNPU3RyaW5nKCksIGRlYXRoczogdmFsdWV9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodGltZWxpbmUuaGFzT3duUHJvcGVydHkoJ3JlY292ZXJlZCcpKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGltZWxpbmUucmVjb3ZlcmVkKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hcC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBba2V5XS5yZWNvdmVyZWQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFtrZXldID0ge2RhdGU6IG5ldyBEYXRlKGtleSkudG9JU09TdHJpbmcoKSwgcmVjb3ZlcmVkOiB2YWx1ZX07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMobWFwKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5hY3RpdmUgPSB2YWx1ZS5jYXNlcyAtIHZhbHVlLmRlYXRocyAtIHZhbHVlLnJlY292ZXJlZDtcbiAgICAgICAgICAgICAgICBkYXRhQXJyYXkucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG1lLnJlbW92ZUVtcHR5UmVjb3Jkcykge1xuICAgICAgICAgICAgICAgIFsuLi5kYXRhQXJyYXldLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmNhc2VzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUoZGF0YUFycmF5LCBpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB0aGUgYXJyYXkgaXMgc29ydGVkIGJ5IGRhdGUgQVNDXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGRhdGFBcnJheVswXSwge1xuICAgICAgICAgICAgICAgIGRhaWx5QWN0aXZlICAgOiBkYXRhQXJyYXlbMF0uYWN0aXZlLFxuICAgICAgICAgICAgICAgIGRhaWx5Q2FzZXMgICAgOiBkYXRhQXJyYXlbMF0uY2FzZXMsXG4gICAgICAgICAgICAgICAgZGFpbHlEZWF0aHMgICA6IGRhdGFBcnJheVswXS5kZWF0aHMsXG4gICAgICAgICAgICAgICAgZGFpbHlSZWNvdmVyZWQ6IGRhdGFBcnJheVswXS5yZWNvdmVyZWRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkYXRhQXJyYXkuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBuZXh0SXRlbSA9IGRhdGFBcnJheVtpbmRleCArIDFdO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5leHRJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obmV4dEl0ZW0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhaWx5QWN0aXZlICAgOiBuZXh0SXRlbS5hY3RpdmUgICAgLSBpdGVtLmFjdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhaWx5Q2FzZXMgICAgOiBuZXh0SXRlbS5jYXNlcyAgICAgLSBpdGVtLmNhc2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGFpbHlEZWF0aHMgICA6IG5leHRJdGVtLmRlYXRocyAgICAtIGl0ZW0uZGVhdGhzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGFpbHlSZWNvdmVyZWQ6IG5leHRJdGVtLnJlY292ZXJlZCAtIGl0ZW0ucmVjb3ZlcmVkXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyB0b2RvOiB3ZSBjb3VsZCBvbmx5IHVwZGF0ZSB0aGUgYWN0aXZlIHRhYlxuICAgICAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdoaXN0b3JpY2FsLWRhdGEtdGFibGUnKS5zdG9yZS5kYXRhID0gZGF0YUFycmF5O1xuICAgICAgICAgICAgbWUudXBkYXRlTGluZUNoYXJ0KGRhdGFBcnJheSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBzdGF0aWMgYXNzaWduRmllbGRzT3JOdWxsKHJlY29yZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWN0aXZlICAgICAgICA6IHJlY29yZC5hY3RpdmUgICAgICAgICB8fCBudWxsLFxuICAgICAgICAgICAgY2FzZXMgICAgICAgICA6IHJlY29yZC5jYXNlcyAgICAgICAgICB8fCBudWxsLFxuICAgICAgICAgICAgZGVhdGhzICAgICAgICA6IHJlY29yZC5kZWF0aHMgICAgICAgICB8fCBudWxsLFxuICAgICAgICAgICAgZGFpbHlBY3RpdmUgICA6IHJlY29yZC5kYWlseUFjdGl2ZSAgICB8fCBudWxsLFxuICAgICAgICAgICAgZGFpbHlDYXNlcyAgICA6IHJlY29yZC5kYWlseUNhc2VzICAgICB8fCBudWxsLFxuICAgICAgICAgICAgZGFpbHlEZWF0aHMgICA6IHJlY29yZC5kYWlseURlYXRocyAgICB8fCBudWxsLFxuICAgICAgICAgICAgZGFpbHlSZWNvdmVyZWQ6IHJlY29yZC5kYWlseVJlY292ZXJlZCB8fCBudWxsLFxuICAgICAgICAgICAgcmVjb3ZlcmVkICAgICA6IHJlY29yZC5yZWNvdmVyZWQgICAgICB8fCBudWxsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIHdoZW4gYWNjZXNzaW5nIHRoZSB0YWJsZSBjb25maWdcbiAgICAgKiBAcGFyYW0ge05lby50YWJsZS5Db250YWluZXJ8bnVsbH0gdmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlR2V0VGFibGUodmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdGFibGUgPSB2YWx1ZSA9IHRoaXMuZ2V0UmVmZXJlbmNlKCd0YWJsZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvdW50cnlOYW1lXG4gICAgICovXG4gICAgbG9hZEhpc3RvcmljYWxEYXRhKGNvdW50cnlOYW1lKSB7XG4gICAgICAgIGNvbnN0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICBhcGlQYXRoID0gbWUuYXBpQmFzZVVybCArIG1lLmFwaUhpc3RvcmljYWxEYXRhRW5kcG9pbnQgKyBjb3VudHJ5TmFtZSArICc/bGFzdGRheXM9JyArIG1lLmFwaUhpc3RvcmljYWxEYXRhVGltZVJhbmdlO1xuXG4gICAgICAgIGZldGNoKGFwaVBhdGgpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IG1lLmFkZFN0b3JlSXRlbXMoZGF0YSkpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdDYW7igJl0IGFjY2VzcyAnICsgYXBpUGF0aCwgZXJyKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uNTIwcHhCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIHRoaXMuZ2V0UmVmZXJlbmNlKCdjb250cm9scy1wYW5lbCcpLndpZHRoID0gNTIwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbjgwMHB4QnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmdldFJlZmVyZW5jZSgnY29udHJvbHMtcGFuZWwnKS53aWR0aCA9IDgwMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Db2xsYXBzZUJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgY29uc3QgcGFuZWwgID0gdGhpcy5nZXRSZWZlcmVuY2UoJ2NvbnRyb2xzLXBhbmVsJyksXG4gICAgICAgICAgICAgIGV4cGFuZCA9IHBhbmVsLndpZHRoID09PSA0MDtcblxuICAgICAgICBwYW5lbC53aWR0aCA9IGV4cGFuZCA/IHRoaXMudmlldy5oaXN0b3J5UGFuZWxXaWR0aCA6IDQwO1xuXG4gICAgICAgIGRhdGEuY29tcG9uZW50LnRleHQgPSBleHBhbmQgPyAnWCcgOiAnKyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRGFpbHlWYWx1ZXNDaGFuZ2UoZGF0YSkge1xuICAgICAgICBjb25zdCBjaGFydElkICAgICA9IHRoaXMuZ2V0UmVmZXJlbmNlKCdsaW5lLWNoYXJ0JykuaWQsXG4gICAgICAgICAgICAgIGxvZ0NoZWNrYm94ID0gdGhpcy5nZXRSZWZlcmVuY2UoJ2xvZ2FyaXRobWljLXNjYWxlLWNoZWNrYm94JyksXG4gICAgICAgICAgICAgIHZhbHVlICAgICAgID0gZGF0YS52YWx1ZTtcblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxvZ0NoZWNrYm94LnNldCh7XG4gICAgICAgICAgICAgICAgY2hlY2tlZCA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBkYXRhLnZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvZ0NoZWNrYm94LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBOZW8ubWFpbi5hZGRvbi5BbUNoYXJ0cy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgICAgIGFwcE5hbWUgICA6IHRoaXMudmlldy5hcHBOYW1lLFxuICAgICAgICAgICAgaWQgICAgICAgIDogY2hhcnRJZCxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAnc2VyaWVzLnZhbHVlcy4wLmRhdGFGaWVsZHMudmFsdWVZJyA6IHZhbHVlID8gJ2RhaWx5QWN0aXZlJyAgICA6ICdhY3RpdmUnLFxuICAgICAgICAgICAgICAgICdzZXJpZXMudmFsdWVzLjEuZGF0YUZpZWxkcy52YWx1ZVknIDogdmFsdWUgPyAnZGFpbHlDYXNlcycgICAgIDogJ2Nhc2VzJyxcbiAgICAgICAgICAgICAgICAnc2VyaWVzLnZhbHVlcy4yLmRhdGFGaWVsZHMudmFsdWVZJyA6IHZhbHVlID8gJ2RhaWx5RGVhdGhzJyAgICA6ICdkZWF0aHMnLFxuICAgICAgICAgICAgICAgICdzZXJpZXMudmFsdWVzLjMuZGF0YUZpZWxkcy52YWx1ZVknIDogdmFsdWUgPyAnZGFpbHlSZWNvdmVyZWQnIDogJ3JlY292ZXJlZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgTmVvLm1haW4uYWRkb24uQW1DaGFydHMuY2FsbE1ldGhvZCh7XG4gICAgICAgICAgICBhcHBOYW1lOiBsb2dDaGVja2JveC5hcHBOYW1lLFxuICAgICAgICAgICAgaWQgICAgIDogY2hhcnRJZCxcbiAgICAgICAgICAgIHBhdGggICA6ICdpbnZhbGlkYXRlRGF0YSdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uTG9nYXJpdGhtaWNTY2FsZUNoYW5nZShkYXRhKSB7XG4gICAgICAgIGNvbnN0IGxpbmVDaGFydCA9IHRoaXMuZ2V0UmVmZXJlbmNlKCdsaW5lLWNoYXJ0Jyk7XG5cbiAgICAgICAgTmVvLm1haW4uYWRkb24uQW1DaGFydHMuc2V0UHJvcGVydHkoe1xuICAgICAgICAgICAgYXBwTmFtZTogbGluZUNoYXJ0LmFwcE5hbWUsXG4gICAgICAgICAgICBpZCAgICAgOiBsaW5lQ2hhcnQuaWQsXG4gICAgICAgICAgICBwYXRoICAgOiAneUF4ZXMudmFsdWVzLjAubG9nYXJpdGhtaWMnLFxuICAgICAgICAgICAgdmFsdWUgIDogZGF0YS52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7T2JqZWN0fSBkYXRhXG4gICAgICoge09iamVjdH0gZGF0YS5yZWNvcmRcbiAgICAgKi9cbiAgICBvblRhYmxlU2VsZWN0KGRhdGEpIHtcbiAgICAgICAgY29uc3QgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgIHJlY29yZCAgPSBkYXRhLnJlY29yZDtcblxuICAgICAgICBpZiAoZGF0YS5yZWNvcmQpIHtcbiAgICAgICAgICAgIG1lLnNlbGVjdGVkUmVjb3JkID0gey4uLnJlY29yZH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5zZWxlY3RlZFJlY29yZCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZW1vdmVkIG9wdGlvbmFsIGNoYWluaW5nIGZvciBub3csIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL25lb21qcy9uZW8vaXNzdWVzLzQ2N1xuICAgICAgICBtZS5sb2FkSGlzdG9yaWNhbERhdGEocmVjb3JkICYmIHJlY29yZC5jb3VudHJ5SW5mbyAmJiByZWNvcmQuY291bnRyeUluZm8uaXNvMiB8fCAnYWxsJyk7XG5cbiAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdoaXN0b3JpY2FsLWRhdGEtbGFiZWwnKS5odG1sID0gJ0hpc3RvcmljYWwgRGF0YSAoJyArIChyZWNvcmQgJiYgcmVjb3JkLmNvdW50cnkgfHwgJ1dvcmxkJykgKyAnKSc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBzdG9yZVJlZmVyZW5jZXMoKSB7XG4gICAgICAgIHRoaXMuZ2V0UmVmZXJlbmNlKCdsaW5lLWNoYXJ0Jyk7XG4gICAgICAgIHRoaXMuZ2V0UmVmZXJlbmNlKCdsb2dhcml0aG1pYy1zY2FsZS1jaGVja2JveCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZ2FyaXRobWljIEF4aXMgYnJlYWsgZm9yIHZhbHVlcyBvZiAwLCBzbyB3ZSBuZWVkIHRvIGNoYW5nZSB0aG9zZSB0byBudWxsXG4gICAgICogQWRkaW5nIHRoZSBjdXJyZW50IHJlY29yZCwgc2luY2UgdGhlIGhpc3RvcmljYWwgZGF0YSBzdGFydHMgXCJ5ZXN0ZXJkYXlcIlxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IGRhdGFBcnJheVxuICAgICAqL1xuICAgIHVwZGF0ZUxpbmVDaGFydChkYXRhQXJyYXkpIHtcbiAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICByZWNvcmQgPSBtZS5zZWxlY3RlZFJlY29yZCxcbiAgICAgICAgICAgIGNoYXJ0ICA9IG1lLmdldFJlZmVyZW5jZSgnbGluZS1jaGFydCcpO1xuXG4gICAgICAgIGRhdGFBcnJheS5mb3JFYWNoKGl0ZW0gPT4gT2JqZWN0LmFzc2lnbihpdGVtLCBUYWJsZUNvbnRhaW5lckNvbnRyb2xsZXIuYXNzaWduRmllbGRzT3JOdWxsKGl0ZW0pKSk7XG5cbiAgICAgICAgaWYgKCFyZWNvcmQpIHtcbiAgICAgICAgICAgIHJlY29yZCA9IG1lLmdldFBhcmVudCgpLnN1bW1hcnlEYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlY29yZCkge1xuICAgICAgICAgICAgZGF0YUFycmF5LnB1c2goe1xuICAgICAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAuLi5UYWJsZUNvbnRhaW5lckNvbnRyb2xsZXIuYXNzaWduRmllbGRzT3JOdWxsKHJlY29yZClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hhcnQuZGF0YSA9IGRhdGFBcnJheTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFRhYmxlQ29udGFpbmVyQ29udHJvbGxlcik7XG5cbmV4cG9ydCB7VGFibGVDb250YWluZXJDb250cm9sbGVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBBbUNoYXJ0Q29tcG9uZW50IGZyb20gJy4uLy4uLy4uL3NyYy9jb21wb25lbnQvd3JhcHBlci9BbUNoYXJ0Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFNoYXJlZENvdmlkLnZpZXcuV29ybGRNYXBDb21wb25lbnRcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQud3JhcHBlci5BbUNoYXJ0XG4gKi9cbmNsYXNzIFdvcmxkTWFwQ29tcG9uZW50IGV4dGVuZHMgQW1DaGFydENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1NoYXJlZENvdmlkLnZpZXcuV29ybGRNYXBDb21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1NoYXJlZENvdmlkLnZpZXcuV29ybGRNYXBDb21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY292aWQtd29ybGQtbWFwJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NvdmlkLXdvcmxkLW1hcCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNoYXJ0VHlwZT0nTWFwQ2hhcnQnXG4gICAgICAgICAqL1xuICAgICAgICBjaGFydFR5cGU6ICdNYXBDaGFydCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnY292aWQtbGluZS1jaGFydCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnY292aWQtd29ybGQtbWFwJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGRhdGFQYXRoPSdkYXRhLnNlcmllcy52YWx1ZXMuMCdcbiAgICAgICAgICovXG4gICAgICAgIGRhdGFQYXRoOiAnc2VyaWVzLnZhbHVlcy4wJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gaGVhdFJ1bGVzTWF4VmFsdWU9MTUwMDBcbiAgICAgICAgICovXG4gICAgICAgIGhlYXRSdWxlc01heFZhbHVlOiAxNTAwMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gcGFja2FnZT0nYW00bWFwcydcbiAgICAgICAgICovXG4gICAgICAgIHBhY2thZ2U6ICdhbTRtYXBzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gY2hhcnRDb25maWdcbiAgICAgICAgICovXG4gICAgICAgIGNoYXJ0Q29uZmlnOiB7XG4gICAgICAgICAgICBwcm9qZWN0aW9uOiAnTWlsbGVyJyxcbiAgICAgICAgICAgIGdlb2RhdGEgICA6ICd3b3JsZExvdycsXG5cbiAgICAgICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAgICAgICB0eXBlICAgICAgOiAnTWFwUG9seWdvblNlcmllcycsXG4gICAgICAgICAgICAgICAgZXhjbHVkZSAgIDogWydBUSddLFxuICAgICAgICAgICAgICAgIHVzZUdlb2RhdGE6IHRydWUsXG5cbiAgICAgICAgICAgICAgICBkYXRhRmllbGRzOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnYWN0aXZlJ1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBoZWF0UnVsZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgIG1heCAgICAgOiAnIzY0YjVmNicsXG4gICAgICAgICAgICAgICAgICAgIG1heFZhbHVlOiAnQGNvbmZpZzpoZWF0UnVsZXNNYXhWYWx1ZScsXG4gICAgICAgICAgICAgICAgICAgIG1pbiAgICAgOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAgICAgICAgIG1pblZhbHVlOiAwLFxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogJ2ZpbGwnLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgIDogJ21hcFBvbHlnb25zLnRlbXBsYXRlJ1xuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIG1hcFBvbHlnb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBUZXh0OiAne25hbWV9OiBbYm9sZF17dmFsdWV9Wy9dJyxcbiAgICAgICAgICAgICAgICAgICAgLy9maWxsICAgICAgIDogJyM3NEIyNjYnLFxuXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZmlsbDogJyMzNjdCMjUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IGRhdGFcbiAgICAgKi9cbiAgICBsb2FkRGF0YShkYXRhKSB7XG4gICAgICAgIGNvbnN0IGNoYXJ0RGF0YSA9IFtdO1xuXG4gICAgICAgIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGNoYXJ0RGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICBhY3RpdmUgICA6IGl0ZW0uYWN0aXZlLFxuICAgICAgICAgICAgICAgIGNhc2VzICAgIDogaXRlbS5jYXNlcyxcbiAgICAgICAgICAgICAgICBjcml0aWNhbCA6IGl0ZW0uY3JpdGljYWwsXG4gICAgICAgICAgICAgICAgZGVhdGhzICAgOiBpdGVtLmRlYXRocyxcbiAgICAgICAgICAgICAgICBpZCAgICAgICA6IGl0ZW0uY291bnRyeUluZm8uaXNvMixcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6IGl0ZW0uY291bnRyeSxcbiAgICAgICAgICAgICAgICByZWNvdmVyZWQ6IGl0ZW0ucmVjb3ZlcmVkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIE5lby5tYWluLmFkZG9uLkFtQ2hhcnRzLnVwZGF0ZURhdGEoe1xuICAgICAgICAgICAgZGF0YSAgICA6IGNoYXJ0RGF0YSxcbiAgICAgICAgICAgIGRhdGFQYXRoOiB0aGlzLmRhdGFQYXRoLFxuICAgICAgICAgICAgaWQgICAgICA6IHRoaXMuaWRcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhXb3JsZE1hcENvbXBvbmVudCk7XG5cbmV4cG9ydCB7V29ybGRNYXBDb21wb25lbnQgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbnRhaW5lciAgICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBOdW1iZXJGaWVsZCAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2Zvcm0vZmllbGQvTnVtYmVyLm1qcyc7XG5pbXBvcnQgVG9vbGJhciAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9jb250YWluZXIvVG9vbGJhci5tanMnO1xuaW1wb3J0IFdvcmxkTWFwQ29tcG9uZW50ICAgICAgICAgICBmcm9tICcuL1dvcmxkTWFwQ29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgV29ybGRNYXBDb250YWluZXJDb250cm9sbGVyIGZyb20gJy4vV29ybGRNYXBDb250YWluZXJDb250cm9sbGVyLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFNoYXJlZENvdmlkLnZpZXcuV29ybGRNYXBDb250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBXb3JsZE1hcENvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1NoYXJlZENvdmlkLnZpZXcuV29ybGRNYXBDb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1NoYXJlZENvdmlkLnZpZXcuV29ybGRNYXBDb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50fSBjb250cm9sbGVyPVdvcmxkTWFwQ29udGFpbmVyQ29udHJvbGxlclxuICAgICAgICAgKi9cbiAgICAgICAgY29udHJvbGxlcjogV29ybGRNYXBDb250YWluZXJDb250cm9sbGVyLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsYXlvdXQ9e250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtc1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBtb2R1bGU6IFRvb2xiYXIsXG4gICAgICAgICAgICBmbGV4ICA6ICdub25lJyxcbiAgICAgICAgICAgIGl0ZW1zIDogW3tcbiAgICAgICAgICAgICAgICBudHlwZSAgICA6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAnY3VycmVudE1hcFZpZXdMYWJlbCcsXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luUmlnaHQ6ICcyMHB4J30sXG4gICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnQ3VycmVudCB2aWV3OiBBY3RpdmUnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgICAgIDogTnVtYmVyRmllbGQsXG4gICAgICAgICAgICAgICAgY2xlYXJUb09yaWdpbmFsVmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbjogJ2lubGluZScsXG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0ICAgIDogJ0hlYXRSdWxlIG1heFZhbHVlJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSAgICAgOiAxZTYsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgICAgIDogMTAwLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZSAgICA6ICdoZWF0UnVsZUZpZWxkJyxcbiAgICAgICAgICAgICAgICBzdGVwU2l6ZSAgICAgOiAxMDAsXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgICAgIDoge21hcmdpbjogMH0sXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgICAgIDogMTUwMDAsXG4gICAgICAgICAgICAgICAgd2lkdGggICAgICAgIDogMTUwLFxuXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogJ29uSGVhdFJ1bGVGaWVsZENoYW5nZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAnLT4nLCB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uU2VyaWVzQnV0dG9uQ2xpY2snLFxuICAgICAgICAgICAgICAgIHNlcmllcyA6ICdjYXNlcycsXG4gICAgICAgICAgICAgICAgc3R5bGUgIDoge21hcmdpblJpZ2h0OiAnMnB4J30sXG4gICAgICAgICAgICAgICAgdGV4dCAgIDogJzxzcGFuIHN0eWxlPVwiY29sb3I6ICNiYmJiYmJcIj7il488L3NwYW4+IENhc2VzJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvblNlcmllc0J1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICBzZXJpZXMgOiAnYWN0aXZlJyxcbiAgICAgICAgICAgICAgICBzdHlsZSAgOiB7bWFyZ2luUmlnaHQ6ICcycHgnfSxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnPHNwYW4gc3R5bGU9XCJjb2xvcjogIzY0YjVmNlwiPuKXjzwvc3Bhbj4gQWN0aXZlJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvblNlcmllc0J1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICBzZXJpZXMgOiAncmVjb3ZlcmVkJyxcbiAgICAgICAgICAgICAgICBzdHlsZSAgOiB7bWFyZ2luUmlnaHQ6ICcycHgnfSxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnPHNwYW4gc3R5bGU9XCJjb2xvcjogIzI4Y2E2OFwiPuKXjzwvc3Bhbj4gUmVjb3ZlcmVkJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdvblNlcmllc0J1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICBzZXJpZXMgOiAnZGVhdGhzJyxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnPHNwYW4gc3R5bGU9XCJjb2xvcjogI2ZiNjc2N1wiPuKXjzwvc3Bhbj4gRGVhdGhzJ1xuICAgICAgICAgICAgfV1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgOiBXb3JsZE1hcENvbXBvbmVudCxcbiAgICAgICAgICAgIGZsZXggICAgIDogMSxcbiAgICAgICAgICAgIHJlZmVyZW5jZTogJ3dvcmxkbWFwJ1xuICAgICAgICB9XVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFdvcmxkTWFwQ29udGFpbmVyKTtcblxuZXhwb3J0IHtXb3JsZE1hcENvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29tcG9uZW50Q29udHJvbGxlciBmcm9tICcuLi8uLi8uLi9zcmMvY29udHJvbGxlci9Db21wb25lbnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgU2hhcmVkQ292aWQudmlldy5Xb3JsZE1hcENvbnRhaW5lckNvbnRyb2xsZXJcbiAqIEBleHRlbmRzIE5lby5jb250cm9sbGVyLkNvbXBvbmVudFxuICovXG5jbGFzcyBXb3JsZE1hcENvbnRhaW5lckNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnRDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nU2hhcmVkQ292aWQudmlldy5Xb3JsZE1hcENvbnRhaW5lckNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1NoYXJlZENvdmlkLnZpZXcuV29ybGRNYXBDb250YWluZXJDb250cm9sbGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gaGVhdFJ1bGVDaGFuZ2VEZWxheT0xNTBcbiAgICAgICAgICovXG4gICAgICAgIGhlYXRSdWxlQ2hhbmdlRGVsYXk6IDE1MCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBoZWF0UnVsZUNoYW5nZVRpbWVvdXQ9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaGVhdFJ1bGVDaGFuZ2VUaW1lb3V0OiBudWxsXG4gICAgfX1cblxuICAgIGNoYW5nZUhlYXRSdWxlKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGNoYXJ0SWQgPSB0aGlzLmdldFJlZmVyZW5jZSgnd29ybGRtYXAnKS5pZDtcblxuICAgICAgICBOZW8ubWFpbi5hZGRvbi5BbUNoYXJ0cy5zZXRQcm9wZXJ0eSh7XG4gICAgICAgICAgICBpZCAgICAgOiB0aGlzLmdldFJlZmVyZW5jZSgnd29ybGRtYXAnKS5pZCxcbiAgICAgICAgICAgIHBhdGggICA6ICdzZXJpZXMudmFsdWVzLjAuaGVhdFJ1bGVzLnZhbHVlcy4wLm1heFZhbHVlJyxcbiAgICAgICAgICAgIHZhbHVlICA6IHZhbHVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIE5lby5tYWluLmFkZG9uLkFtQ2hhcnRzLmNhbGxNZXRob2Qoe1xuICAgICAgICAgICAgaWQgIDogY2hhcnRJZCxcbiAgICAgICAgICAgIHBhdGg6ICdzZXJpZXMudmFsdWVzLjAuaW52YWxpZGF0ZURhdGEnXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkhlYXRSdWxlRmllbGRDaGFuZ2UoZGF0YSkge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KG1lLmhlYXRSdWxlQ2hhbmdlVGltZW91dCk7XG5cbiAgICAgICAgbWUuaGVhdFJ1bGVDaGFuZ2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBtZS5jaGFuZ2VIZWF0UnVsZShkYXRhLnZhbHVlKTtcbiAgICAgICAgfSwgbWUuaGVhdFJ1bGVDaGFuZ2VEZWxheSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uU2VyaWVzQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICBjb25zdCBtZSAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgIGNoYXJ0SWQgICAgID0gbWUuZ2V0UmVmZXJlbmNlKCd3b3JsZG1hcCcpLmlkLFxuICAgICAgICAgICAgICBjb3VudHJ5RGF0YSA9IFsuLi5tZS5nZXRQYXJlbnQoKS5kYXRhXTtcblxuICAgICAgICBjb25zdCBjb2xvck1hcCA9IHtcbiAgICAgICAgICAgIGFjdGl2ZSAgIDogJyM2NGI1ZjYnLFxuICAgICAgICAgICAgY2FzZXMgICAgOiAnI2JiYmJiYicsXG4gICAgICAgICAgICBkZWF0aHMgICA6ICcjZmI2NzY3JyxcbiAgICAgICAgICAgIHJlY292ZXJlZDogJyMyOGNhNjgnXG4gICAgICAgIH07XG5cbiAgICAgICAgTmVvLm1haW4uYWRkb24uQW1DaGFydHMuc2V0UHJvcGVydHkoe1xuICAgICAgICAgICAgaWQgICAgIDogY2hhcnRJZCxcbiAgICAgICAgICAgIGlzQ29sb3I6IHRydWUsXG4gICAgICAgICAgICBwYXRoICAgOiAnc2VyaWVzLnZhbHVlcy4wLmhlYXRSdWxlcy52YWx1ZXMuMC5tYXgnLFxuICAgICAgICAgICAgdmFsdWUgIDogY29sb3JNYXBbZGF0YS5jb21wb25lbnQuc2VyaWVzXVxuICAgICAgICB9KTtcblxuICAgICAgICBOZW8ubWFpbi5hZGRvbi5BbUNoYXJ0cy5zZXRQcm9wZXJ0eSh7XG4gICAgICAgICAgICBpZCAgIDogY2hhcnRJZCxcbiAgICAgICAgICAgIHBhdGggOiAnc2VyaWVzLnZhbHVlcy4wLmRhdGFGaWVsZHMudmFsdWUnLFxuICAgICAgICAgICAgdmFsdWU6IGRhdGEuY29tcG9uZW50LnNlcmllc1xuICAgICAgICB9KTtcblxuICAgICAgICBOZW8ubWFpbi5hZGRvbi5BbUNoYXJ0cy5jYWxsTWV0aG9kKHtcbiAgICAgICAgICAgIGlkICA6IGNoYXJ0SWQsXG4gICAgICAgICAgICBwYXRoOiAnc2VyaWVzLnZhbHVlcy4wLmludmFsaWRhdGVEYXRhJ1xuICAgICAgICB9KS4gdGhlbigoKSA9PiB7XG4gICAgICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ2N1cnJlbnRNYXBWaWV3TGFiZWwnKS50ZXh0ID0gJ0N1cnJlbnQgdmlldzogJyArIE5lby5jYXBpdGFsaXplKGRhdGEuY29tcG9uZW50LnNlcmllcyk7XG5cbiAgICAgICAgICAgIGNvdW50cnlEYXRhLnNvcnQoKGEsIGIpID0+IGJbZGF0YS5jb21wb25lbnQuc2VyaWVzXSAtIGFbZGF0YS5jb21wb25lbnQuc2VyaWVzXSk7XG5cbiAgICAgICAgICAgIG1lLmdldFJlZmVyZW5jZSgnaGVhdFJ1bGVGaWVsZCcpLnZhbHVlID0gTWF0aC5jZWlsKGNvdW50cnlEYXRhWzldW2RhdGEuY29tcG9uZW50LnNlcmllc10gLyAxMDApICogMTAwO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFdvcmxkTWFwQ29udGFpbmVyQ29udHJvbGxlcik7XG5cbmV4cG9ydCB7V29ybGRNYXBDb250YWluZXJDb250cm9sbGVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb3VudHJ5U3RvcmUgZnJvbSAnLi4vLi4vc3RvcmUvQ291bnRyaWVzLm1qcyc7XG5pbXBvcnQgR2FsbGVyeSAgICAgIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnQvR2FsbGVyeS5tanMnO1xuaW1wb3J0IFV0aWwgICAgICAgICBmcm9tICcuLi8uLi9VdGlsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFNoYXJlZENvdmlkLnZpZXcuY291bnRyeS5HYWxsZXJ5XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkdhbGxlcnlcbiAqL1xuY2xhc3MgQ291bnRyeUdhbGxlcnkgZXh0ZW5kcyBHYWxsZXJ5IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nU2hhcmVkQ292aWQudmlldy5jb3VudHJ5LkdhbGxlcnknXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1NoYXJlZENvdmlkLnZpZXcuY291bnRyeS5HYWxsZXJ5JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9Wydjb3ZpZC1jb3VudHJ5LWdhbGxlcnknLCAnbmVvLWdhbGxlcnknLCAncGFnZScsICd2aWV3J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWydjb3ZpZC1jb3VudHJ5LWdhbGxlcnknLCAnbmVvLWdhbGxlcnknLCAncGFnZScsICd2aWV3J10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaW1hZ2UgaGVpZ2h0IG9mIHRoZSBnYWxsZXJ5XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gaW1hZ2VIZWlnaHQ9MjQwXG4gICAgICAgICAqL1xuICAgICAgICBpbWFnZUhlaWdodDogMjgwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGltYWdlIHdpZHRoIG9mIHRoZSBnYWxsZXJ5XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gaW1hZ2VXaWR0aD0zMjBcbiAgICAgICAgICovXG4gICAgICAgIGltYWdlV2lkdGg6IDM0MCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gaXRlbVRwbF9cbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1UcGw6IHtcbiAgICAgICAgICAgIGNscyAgICAgOiBbJ25lby1nYWxsZXJ5LWl0ZW0nLCAnaW1hZ2Utd3JhcCcsICd2aWV3JywgJ25lby10cmFuc2l0aW9uLTEwMDAnXSxcbiAgICAgICAgICAgIHRhYkluZGV4OiAnLTEnLFxuICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgY2xzICA6IFsnbmVvLWl0ZW0td3JhcHBlciddLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICAgICAgdGFnICA6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICBjbHMgIDogWyduZW8tY291bnRyeS1nYWxsZXJ5LWl0ZW0nXSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuXG4gICAgICAgICAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1pdGVtLWhlYWRlciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAnaW1nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWZsYWcnXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICd0YWJsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWNvbnRlbnQtdGFibGUnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICd0cicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGh0bWw6ICdDYXNlcyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBjbHM6IFsnbmVvLWFsaWduLXJpZ2h0J119LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBzdHlsZToge3dpZHRoOiAnMTAwJSd9fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgaHRtbDogJ0Nhc2VzIHRvZGF5J30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGNsczogWyduZW8tYWxpZ24tcmlnaHQnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAndHInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNuIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBodG1sOiAnRGVhdGhzJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGNsczogWyduZW8tYWxpZ24tcmlnaHQnLCAnbmVvLWNvbnRlbnQtZGVhdGhzJ119LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBzdHlsZToge3dpZHRoOiAnMTAwJSd9fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgaHRtbDogJ0RlYXRocyB0b2RheSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBjbHM6IFsnbmVvLWFsaWduLXJpZ2h0JywgJ25lby1jb250ZW50LWRlYXRocyddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICd0cicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGh0bWw6ICdSZWNvdmVyZWQnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgY2xzOiBbJ25lby1hbGlnbi1yaWdodCcsICduZW8tY29udGVudC1yZWNvdmVyZWQnXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIHN0eWxlOiB7d2lkdGg6ICcxMDAlJ319LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBodG1sOiAnQ3JpdGljYWwnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgY2xzOiBbJ25lby1hbGlnbi1yaWdodCcsICduZW8tY29udGVudC1jcml0aWNhbCddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdW5pcXVlIHJlY29yZCBmaWVsZCBjb250YWluaW5nIHRoZSBpZC5cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBrZXlQcm9wZXJ0eT0naWQnXG4gICAgICAgICAqL1xuICAgICAgICBrZXlQcm9wZXJ0eTogJ2NvdW50cnknLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSB0byBzZWxlY3QgdGhlIGl0ZW0gaW5zaWRlIHRoZSBtaWRkbGUgb2YgdGhlIHN0b3JlIGl0ZW1zIG9uIG1vdW50XG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNlbGVjdE9uTW91bnQ9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHNlbGVjdE9uTW91bnQ6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmRhdGEuU3RvcmV9IHN0b3JlPUNvdW50cnlTdG9yZVxuICAgICAgICAgKi9cbiAgICAgICAgc3RvcmU6IENvdW50cnlTdG9yZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBnZXQgZGlmZmVyZW50IGl0ZW0tbWFya3Vwc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tSXRlbVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB2ZG9tSXRlbVxuICAgICAqL1xuICAgIGNyZWF0ZUl0ZW0odmRvbUl0ZW0sIHJlY29yZCwgaW5kZXgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZmlyc3RDaGlsZCA9IHZkb21JdGVtLmNuWzBdLmNuWzBdLFxuICAgICAgICAgICAgZk4gICAgICAgICA9IFV0aWwuZm9ybWF0TnVtYmVyLFxuICAgICAgICAgICAgdGFibGUgICAgICA9IGZpcnN0Q2hpbGQuY25bMV07XG5cbiAgICAgICAgdmRvbUl0ZW0uaWQgPSBtZS5nZXRJdGVtVm5vZGVJZChyZWNvcmRbbWUua2V5UHJvcGVydHldKTtcblxuICAgICAgICB2ZG9tSXRlbS5jblswXS5zdHlsZS5oZWlnaHQgPSBtZS5pbWFnZUhlaWdodCArICdweCc7XG5cbiAgICAgICAgZmlyc3RDaGlsZC5zdHlsZS5oZWlnaHQgPSAobWUuaW1hZ2VIZWlnaHQgLSA3MCkgKyAncHgnO1xuICAgICAgICBmaXJzdENoaWxkLnN0eWxlLndpZHRoICA9IG1lLmltYWdlV2lkdGggICsgJ3B4JztcblxuICAgICAgICBmaXJzdENoaWxkLmNuWzBdLmNuWzBdLnNyYyAgPSBVdGlsLmdldENvdW50cnlGbGFnVXJsKHJlY29yZC5jb3VudHJ5KTtcbiAgICAgICAgZmlyc3RDaGlsZC5jblswXS5jblsxXS5odG1sID0gcmVjb3JkLmNvdW50cnk7XG5cbiAgICAgICAgdGFibGUuY25bMF0uY25bMV0uaHRtbCA9IGZOKHt2YWx1ZTogcmVjb3JkLmNhc2VzfSk7XG4gICAgICAgIHRhYmxlLmNuWzFdLmNuWzFdLmh0bWwgPSBmTih7dmFsdWU6IHJlY29yZC5kZWF0aHN9KTtcbiAgICAgICAgdGFibGUuY25bMl0uY25bMV0uaHRtbCA9IGZOKHt2YWx1ZTogcmVjb3JkLnJlY292ZXJlZH0pO1xuXG4gICAgICAgIHRhYmxlLmNuWzBdLmNuWzRdLmh0bWwgPSBmTih7dmFsdWU6IHJlY29yZC50b2RheUNhc2VzfSk7XG4gICAgICAgIHRhYmxlLmNuWzFdLmNuWzRdLmh0bWwgPSBmTih7dmFsdWU6IHJlY29yZC50b2RheURlYXRoc30pO1xuICAgICAgICB0YWJsZS5jblsyXS5jbls0XS5odG1sID0gZk4oe3ZhbHVlOiByZWNvcmQuY3JpdGljYWx9KTtcblxuICAgICAgICByZXR1cm4gdmRvbUl0ZW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdm5vZGVJZFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IGl0ZW1JZFxuICAgICAqL1xuICAgIGdldEl0ZW1JZCh2bm9kZUlkKSB7XG4gICAgICAgIHJldHVybiB2bm9kZUlkLnNwbGl0KCdfXycpWzFdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gaXRlbXNcbiAgICAgKi9cbiAgICBvblN0b3JlTG9hZChpdGVtcykge1xuICAgICAgICBzdXBlci5vblN0b3JlTG9hZChpdGVtcyk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdE9uTW91bnQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5hZnRlclNldE1vdW50ZWQodHJ1ZSwgZmFsc2UpO1xuICAgICAgICB9LCAyMDApO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ291bnRyeUdhbGxlcnkpO1xuXG5leHBvcnQge0NvdW50cnlHYWxsZXJ5IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb3VudHJ5U3RvcmUgZnJvbSAnLi4vLi4vc3RvcmUvQ291bnRyaWVzLm1qcyc7XG5pbXBvcnQgSGVsaXggICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnQvSGVsaXgubWpzJztcbmltcG9ydCBVdGlsICAgICAgICAgZnJvbSAnLi4vLi4vVXRpbC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBTaGFyZWRDb3ZpZC52aWV3LmNvdW50cnkuSGVsaXhcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuSGVsaXhcbiAqL1xuY2xhc3MgQ291bnRyeUhlbGl4IGV4dGVuZHMgSGVsaXgge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdTaGFyZWRDb3ZpZC52aWV3LmNvdW50cnkuSGVsaXgnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1NoYXJlZENvdmlkLnZpZXcuY291bnRyeS5IZWxpeCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnY292aWQtY291bnRyeS1oZWxpeCcsICduZW8taGVsaXgnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ2NvdmlkLWNvdW50cnktaGVsaXgnLCAnbmVvLWhlbGl4J10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdmVydGljYWwgZGVsdGEgYmV0d2VlbiBlYWNoIGhlbGl4IGl0ZW0gKGluY3JlYXNpbmcgdGhpcyB2YWx1ZSB3aWxsIGNyZWF0ZSBhIHNwaXJhbClcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBkZWx0YVk9MS4yXG4gICAgICAgICAqL1xuICAgICAgICBkZWx0YVk6IDEuMixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gaXRlbVRwbF9cbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1UcGw6IHtcbiAgICAgICAgICAgIGNscyAgICAgOiBbJ3N1cmZhY2UnLCAnbmVvLWhlbGl4LWl0ZW0nXSxcbiAgICAgICAgICAgIHN0eWxlICAgOiB7fSxcbiAgICAgICAgICAgIHRhYkluZGV4OiAnLTEnLFxuICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgY2xzICA6IFsnbmVvLWl0ZW0td3JhcHBlciddLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICAgICAgdGFnICA6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICBjbHMgIDogWyduZW8tY291bnRyeS1oZWxpeC1pdGVtJ10sXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7fSxcblxuICAgICAgICAgICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsczogWyduZW8taXRlbS1oZWFkZXInXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ2ltZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1mbGFnJ11cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAndGFibGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1jb250ZW50LXRhYmxlJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAndHInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNuIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBodG1sOiAnQ2FzZXMnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgY2xzOiBbJ25lby1hbGlnbi1yaWdodCddfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgc3R5bGU6IHt3aWR0aDogJzEwMCUnfX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGh0bWw6ICdDYXNlcyB0b2RheSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBjbHM6IFsnbmVvLWFsaWduLXJpZ2h0J119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ3RyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbiA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgaHRtbDogJ0RlYXRocyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBjbHM6IFsnbmVvLWFsaWduLXJpZ2h0JywgJ25lby1jb250ZW50LWRlYXRocyddfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgc3R5bGU6IHt3aWR0aDogJzEwMCUnfX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGh0bWw6ICdEZWF0aHMgdG9kYXknfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgY2xzOiBbJ25lby1hbGlnbi1yaWdodCcsICduZW8tY29udGVudC1kZWF0aHMnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAndHInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNuIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBodG1sOiAnUmVjb3ZlcmVkJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGNsczogWyduZW8tYWxpZ24tcmlnaHQnLCAnbmVvLWNvbnRlbnQtcmVjb3ZlcmVkJ119LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBzdHlsZToge3dpZHRoOiAnMTAwJSd9fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgaHRtbDogJ0NyaXRpY2FsJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGNsczogWyduZW8tYWxpZ24tcmlnaHQnLCAnbmVvLWNvbnRlbnQtY3JpdGljYWwnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHVuaXF1ZSByZWNvcmQgZmllbGQgY29udGFpbmluZyB0aGUgaWQuXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30ga2V5UHJvcGVydHk9J2lkJ1xuICAgICAgICAgKi9cbiAgICAgICAga2V5UHJvcGVydHk6ICdjb3VudHJ5JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSByYWRpdXMgb2YgdGhlIEhlbGl4IGluIHB4XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gcmFkaXVzPTI1MDBcbiAgICAgICAgICovXG4gICAgICAgIHJhZGl1czogMjUwMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSByb3RhdGlvbkFuZ2xlIG9mIHRoZSBIZWxpeCBpbiBkZWdyZWVzXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gcm90YXRpb25BbmdsZT03MjBcbiAgICAgICAgICovXG4gICAgICAgIHJvdGF0aW9uQW5nbGU6IDcyMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgZGlzcGxheXMgdGhlIGZpcnN0ICYgbGFzdCBuYW1lIHJlY29yZCBmaWVsZHMgYmVsb3cgYW4gZXhwYW5kZWQgaXRlbVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaG93Q2xvbmVJbmZvPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBzaG93Q2xvbmVJbmZvOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5kYXRhLlN0b3JlfSBzdG9yZT1Db3VudHJ5U3RvcmVcbiAgICAgICAgICovXG4gICAgICAgIHN0b3JlOiBDb3VudHJ5U3RvcmUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHJhbnNsYXRlWCB2YWx1ZSBnZXRzIGluY2x1ZGVkIGludG8gZWFjaCBoZWxpeCBpdGVtXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gdHJhbnNsYXRlWT01MDBcbiAgICAgICAgICovXG4gICAgICAgIHRyYW5zbGF0ZVk6IDUwMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0cmFuc2xhdGVYIHZhbHVlIGdldHMgaW5jbHVkZWQgaW50byBlYWNoIGhlbGl4IGl0ZW1cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSB0cmFuc2xhdGVaXz0tMjMwMFxuICAgICAgICAgKi9cbiAgICAgICAgdHJhbnNsYXRlWjogLTIzMDBcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbUl0ZW1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjb3JkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge09iamVjdH0gdmRvbUl0ZW1cbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtKHZkb21JdGVtLCByZWNvcmQsIGluZGV4KSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGZpcnN0Q2hpbGQgPSB2ZG9tSXRlbS5jblswXS5jblswXSxcbiAgICAgICAgICAgIGZOICAgICAgICAgPSBVdGlsLmZvcm1hdE51bWJlcixcbiAgICAgICAgICAgIHRhYmxlICAgICAgPSBmaXJzdENoaWxkLmNuWzFdO1xuXG4gICAgICAgIHZkb21JdGVtLmlkID0gbWUuZ2V0SXRlbVZub2RlSWQocmVjb3JkW21lLmtleVByb3BlcnR5XSk7XG5cbiAgICAgICAgZmlyc3RDaGlsZC5jblswXS5jblswXS5zcmMgID0gVXRpbC5nZXRDb3VudHJ5RmxhZ1VybChyZWNvcmQuY291bnRyeSk7XG4gICAgICAgIGZpcnN0Q2hpbGQuY25bMF0uY25bMV0uaHRtbCA9IHJlY29yZC5jb3VudHJ5O1xuXG4gICAgICAgIHRhYmxlLmNuWzBdLmNuWzFdLmh0bWwgPSBmTih7dmFsdWU6IHJlY29yZC5jYXNlc30pO1xuICAgICAgICB0YWJsZS5jblsxXS5jblsxXS5odG1sID0gZk4oe3ZhbHVlOiByZWNvcmQuZGVhdGhzfSk7XG4gICAgICAgIHRhYmxlLmNuWzJdLmNuWzFdLmh0bWwgPSBmTih7dmFsdWU6IHJlY29yZC5yZWNvdmVyZWR9KTtcblxuICAgICAgICB0YWJsZS5jblswXS5jbls0XS5odG1sID0gZk4oe3ZhbHVlOiByZWNvcmQudG9kYXlDYXNlc30pO1xuICAgICAgICB0YWJsZS5jblsxXS5jbls0XS5odG1sID0gZk4oe3ZhbHVlOiByZWNvcmQudG9kYXlEZWF0aHN9KTtcbiAgICAgICAgdGFibGUuY25bMl0uY25bNF0uaHRtbCA9IGZOKHt2YWx1ZTogcmVjb3JkLmNyaXRpY2FsfSk7XG5cbiAgICAgICAgcmV0dXJuIHZkb21JdGVtO1xuICAgIH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0Q2xvbmVUcmFuc2Zvcm0oKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVggPSAobWUub2Zmc2V0V2lkdGggIC0gMjgwMCkgLyA2LFxuICAgICAgICAgICAgdHJhbnNsYXRlWSA9IChtZS5vZmZzZXRIZWlnaHQgLSAyNzAwKSAvIDYsXG4gICAgICAgICAgICB0cmFuc2xhdGVaID0gMTAwNDAwICsgbWUucGVyc3BlY3RpdmUgLyAxLjU7XG5cbiAgICAgICAgcmV0dXJuICdtYXRyaXgzZCgxLDAsMCwwLDAsMSwwLDAsMCwwLDEsMCwnK3RyYW5zbGF0ZVgrJywnK3RyYW5zbGF0ZVkrJywnK3RyYW5zbGF0ZVorJywxKSc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdm5vZGVJZFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SXRlbUlkKHZub2RlSWQpIHtcbiAgICAgICAgcmV0dXJuIHZub2RlSWQuc3BsaXQoJ19fJylbMV07XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb3VudHJ5SGVsaXgpO1xuXG5leHBvcnQge0NvdW50cnlIZWxpeCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29udGFpbmVyICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL3RhYmxlL0NvbnRhaW5lci5tanMnO1xuaW1wb3J0IEhpc3RvcmljYWxEYXRhIGZyb20gJy4uLy4uL3N0b3JlL0hpc3RvcmljYWxEYXRhLm1qcyc7XG5pbXBvcnQgVXRpbCAgICAgICAgICAgZnJvbSAnLi4vLi4vVXRpbC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBTaGFyZWRDb3ZpZC52aWV3LmNvdW50cnkuSGlzdG9yaWNhbERhdGFUYWJsZVxuICogQGV4dGVuZHMgTmVvLnRhYmxlLkNvbnRhaW5lclxuICovXG5jbGFzcyBIaXN0b3JpY2FsRGF0YVRhYmxlIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nU2hhcmVkQ292aWQudmlldy5jb3VudHJ5Lkhpc3RvcmljYWxEYXRhVGFibGUnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1NoYXJlZENvdmlkLnZpZXcuY291bnRyeS5IaXN0b3JpY2FsRGF0YVRhYmxlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9Wydjb3ZpZC1oaXN0b3JpY2FsLWRhdGEtdGFibGUnLCAnbmVvLXRhYmxlLWNvbnRhaW5lciddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnY292aWQtaGlzdG9yaWNhbC1kYXRhLXRhYmxlJywgJ25lby10YWJsZS1jb250YWluZXInXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmF1bHQgY29uZmlncyBmb3IgZWFjaCBjb2x1bW5cbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBjb2x1bW5EZWZhdWx0c1xuICAgICAgICAgKi9cbiAgICAgICAgY29sdW1uRGVmYXVsdHM6IHtcbiAgICAgICAgICAgIGFsaWduICAgICAgICAgICAgICAgOiAncmlnaHQnLFxuICAgICAgICAgICAgZGVmYXVsdFNvcnREaXJlY3Rpb246ICdERVNDJyxcbiAgICAgICAgICAgIHJlbmRlcmVyICAgICAgICAgICAgOiBVdGlsLmZvcm1hdE51bWJlclxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W119IGNvbHVtbnNcbiAgICAgICAgICovXG4gICAgICAgIGNvbHVtbnM6IFt7XG4gICAgICAgICAgICBhbGlnbiAgICA6ICdsZWZ0JyxcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ2RhdGUnLFxuICAgICAgICAgICAgZG9jayAgICAgOiAnbGVmdCcsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICdEYXRlJyxcbiAgICAgICAgICAgIHdpZHRoICAgIDogMTAwLFxuICAgICAgICAgICAgcmVuZGVyZXIgOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY2xzIDogWyduZW8tZGF0ZS1jb2x1bW4nLCAnbmVvLXRhYmxlLWNlbGwnXSxcbiAgICAgICAgICAgICAgICAgICAgaHRtbDogbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2RlZmF1bHQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXkgIDogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9udGg6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXIgOiAnbnVtZXJpYydcbiAgICAgICAgICAgICAgICAgICAgfSkuZm9ybWF0KG5ldyBEYXRlKGRhdGEudmFsdWUpKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ2Nhc2VzJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ0Nhc2VzJyxcbiAgICAgICAgICAgIHJlbmRlcmVyIDogZGF0YSA9PiBVdGlsLmZvcm1hdE51bWJlcihkYXRhKVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICdhY3RpdmUnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnQWN0aXZlJyxcbiAgICAgICAgICAgIHJlbmRlcmVyIDogZGF0YSA9PiBVdGlsLmZvcm1hdE51bWJlcihkYXRhLCAnIzY0QjVGNicpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ3JlY292ZXJlZCcsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICdSZWNvdmVyZWQnLFxuICAgICAgICAgICAgcmVuZGVyZXIgOiBkYXRhID0+IFV0aWwuZm9ybWF0TnVtYmVyKGRhdGEsICcjMjhjYTY4JylcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAnZGVhdGhzJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ0RlYXRocycsXG4gICAgICAgICAgICByZW5kZXJlciA6IGRhdGEgPT4gVXRpbC5mb3JtYXROdW1iZXIoZGF0YSwgJyNmYjY3NjcnKVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICdkYWlseUNhc2VzJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ0RhaWx5IEMnLFxuICAgICAgICAgICAgcmVuZGVyZXIgOiBkYXRhID0+IFV0aWwuZm9ybWF0TnVtYmVyKGRhdGEpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ2RhaWx5QWN0aXZlJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ0RhaWx5IEEnLFxuICAgICAgICAgICAgcmVuZGVyZXIgOiBkYXRhID0+IFV0aWwuZm9ybWF0TnVtYmVyKGRhdGEsICcjNjRCNUY2JylcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAnZGFpbHlSZWNvdmVyZWQnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnRGFpbHkgUicsXG4gICAgICAgICAgICByZW5kZXJlciA6IGRhdGEgPT4gVXRpbC5mb3JtYXROdW1iZXIoZGF0YSwgJyMyOGNhNjgnKVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICdkYWlseURlYXRocycsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICdEYWlseSBEJyxcbiAgICAgICAgICAgIHJlbmRlcmVyIDogZGF0YSA9PiBVdGlsLmZvcm1hdE51bWJlcihkYXRhLCAnI2ZiNjc2NycpXG4gICAgICAgIH1dLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmRhdGEuU3RvcmV9IHN0b3JlPUhpc3RvcmljYWxEYXRhXG4gICAgICAgICAqL1xuICAgICAgICBzdG9yZTogSGlzdG9yaWNhbERhdGFcbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIaXN0b3JpY2FsRGF0YVRhYmxlKTtcblxuZXhwb3J0IHtIaXN0b3JpY2FsRGF0YVRhYmxlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBBbUNoYXJ0Q29tcG9uZW50IGZyb20gJy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnQvd3JhcHBlci9BbUNoYXJ0Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFNoYXJlZENvdmlkLnZpZXcuY291bnRyeS5MaW5lQ2hhcnRDb21wb25lbnRcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQud3JhcHBlci5BbUNoYXJ0XG4gKi9cbmNsYXNzIExpbmVDaGFydENvbXBvbmVudCBleHRlbmRzIEFtQ2hhcnRDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdTaGFyZWRDb3ZpZC52aWV3LmNvdW50cnkuTGluZUNoYXJ0Q29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdTaGFyZWRDb3ZpZC52aWV3LmNvdW50cnkuTGluZUNoYXJ0Q29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9Wydjb3ZpZC1saW5lLWNoYXJ0J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWydjb3ZpZC1saW5lLWNoYXJ0J10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGNoYXJ0Q29uZmlnXG4gICAgICAgICAqL1xuICAgICAgICBjaGFydENvbmZpZzoge1xuICAgICAgICAgICAgY3Vyc29yOiB7XG4gICAgICAgICAgICAgICAgbWF4VG9vbHRpcERpc3RhbmNlOiAtMVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAnI2JiYidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHhBeGVzOiBbe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdEYXRlQXhpcycsXG5cbiAgICAgICAgICAgICAgICByZW5kZXJlcjoge1xuICAgICAgICAgICAgICAgICAgICBtaW5HcmlkRGlzdGFuY2U6IDYwLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogJyNiYmInXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSxcblxuICAgICAgICAgICAgeUF4ZXM6IFt7XG4gICAgICAgICAgICAgICAgdHlwZSAgICAgICA6ICdWYWx1ZUF4aXMnLFxuICAgICAgICAgICAgICAgIGxvZ2FyaXRobWljOiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgbnVtYmVyRm9ybWF0dGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIG51bWJlckZvcm1hdDogJyMuMGEnLFxuXG4gICAgICAgICAgICAgICAgICAgIGJpZ051bWJlclByZWZpeGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7bnVtYmVyOiAxZTMsIHN1ZmZpeDogJ0snfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtudW1iZXI6IDFlNiwgc3VmZml4OiAnTSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAge251bWJlcjogMWU5LCBzdWZmaXg6ICdCJ31cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVuZGVyZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgbWluR3JpZERpc3RhbmNlOiA2MCxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICcjYmJiJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0sXG5cbiAgICAgICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAgICAgICB0eXBlICAgICAgIDogJ0xpbmVTZXJpZXMnLFxuICAgICAgICAgICAgICAgIGRhdGFGaWVsZHMgOiB7ZGF0ZVggOiAnZGF0ZScsIHZhbHVlWTogJ2FjdGl2ZSd9LFxuICAgICAgICAgICAgICAgIGZpbGwgICAgICAgOiAnIzY0YjVmNicsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgICA6ICdBY3RpdmUnLFxuICAgICAgICAgICAgICAgIHN0cm9rZSAgICAgOiAnIzY0YjVmNicsXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDMsXG5cbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQgICAgICAgOiB7ZmlsbDogJyNmZmYnfSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0RmlsbEZyb21PYmplY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbCAgICAgICAgICAgIDoge2ZpbGw6ICcjMDAwJ31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdHlwZSAgICAgICA6ICdMaW5lU2VyaWVzJyxcbiAgICAgICAgICAgICAgICBkYXRhRmllbGRzIDoge2RhdGVYIDogJ2RhdGUnLCB2YWx1ZVk6ICdjYXNlcyd9LFxuICAgICAgICAgICAgICAgIGZpbGwgICAgICAgOiAnI2JiYicsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgICA6ICdDYXNlcycsXG4gICAgICAgICAgICAgICAgc3Ryb2tlICAgICA6ICcjYmJiJyxcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogMyxcbiAgICAgICAgICAgICAgICAvL3RlbnNpb25YICAgOiAuOSxcblxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZCAgICAgICA6IHtmaWxsOiAnI2ZmZid9LFxuICAgICAgICAgICAgICAgICAgICBnZXRGaWxsRnJvbU9iamVjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsICAgICAgICAgICAgOiB7ZmlsbDogJyMwMDAnfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0eXBlICAgICAgIDogJ0xpbmVTZXJpZXMnLFxuICAgICAgICAgICAgICAgIGRhdGFGaWVsZHMgOiB7ZGF0ZVggOiAnZGF0ZScsIHZhbHVlWTogJ2RlYXRocyd9LFxuICAgICAgICAgICAgICAgIGZpbGwgICAgICAgOiAnI2ZiNjc2NycsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgICA6ICdEZWF0aHMnLFxuICAgICAgICAgICAgICAgIHN0cm9rZSAgICAgOiAnI2ZiNjc2NycsXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDMsXG5cbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQgICAgICAgOiB7ZmlsbDogJyNmZmYnfSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0RmlsbEZyb21PYmplY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbCAgICAgICAgICAgIDoge2ZpbGw6ICcjMDAwJ31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdHlwZSAgICAgICA6ICdMaW5lU2VyaWVzJyxcbiAgICAgICAgICAgICAgICBkYXRhRmllbGRzIDoge2RhdGVYIDogJ2RhdGUnLCB2YWx1ZVk6ICdyZWNvdmVyZWQnfSxcbiAgICAgICAgICAgICAgICBmaWxsICAgICAgIDogJyMyOGNhNjgnLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgICAgOiAnUmVjb3ZlcmVkJyxcbiAgICAgICAgICAgICAgICBzdHJva2UgICAgIDogJyMyOGNhNjgnLFxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAzLFxuXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kICAgICAgIDoge2ZpbGw6ICcjZmZmJ30sXG4gICAgICAgICAgICAgICAgICAgIGdldEZpbGxGcm9tT2JqZWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwgICAgICAgICAgICA6IHtmaWxsOiAnIzAwMCd9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGNvbWJpbmVTZXJpZXNUb29sdGlwPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGNvbWJpbmVTZXJpZXNUb29sdGlwOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gZml0UGFyZW50SGVpZ2h0PXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGZpdFBhcmVudEhlaWdodDogdHJ1ZVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKExpbmVDaGFydENvbXBvbmVudCk7XG5cbmV4cG9ydCB7TGluZUNoYXJ0Q29tcG9uZW50IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb250YWluZXIgICAgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL3RhYmxlL0NvbnRhaW5lci5tanMnO1xuaW1wb3J0IENvdW50cnlTdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9Db3VudHJpZXMubWpzJztcbmltcG9ydCBVdGlsICAgICAgICAgZnJvbSAnLi4vLi4vVXRpbC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBTaGFyZWRDb3ZpZC52aWV3LmNvdW50cnkuVGFibGVcbiAqIEBleHRlbmRzIE5lby50YWJsZS5Db250YWluZXJcbiAqL1xuY2xhc3MgVGFibGUgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdTaGFyZWRDb3ZpZC52aWV3LmNvdW50cnkuVGFibGUnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1NoYXJlZENvdmlkLnZpZXcuY291bnRyeS5UYWJsZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnY292aWQtY291bnRyeS10YWJsZScsICduZW8tdGFibGUtY29udGFpbmVyJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWydjb3ZpZC1jb3VudHJ5LXRhYmxlJywgJ25lby10YWJsZS1jb250YWluZXInXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmF1bHQgY29uZmlncyBmb3IgZWFjaCBjb2x1bW5cbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBjb2x1bW5EZWZhdWx0c1xuICAgICAgICAgKi9cbiAgICAgICAgY29sdW1uRGVmYXVsdHM6IHtcbiAgICAgICAgICAgIGFsaWduICAgICAgICAgICAgICAgOiAncmlnaHQnLFxuICAgICAgICAgICAgZGVmYXVsdFNvcnREaXJlY3Rpb246ICdERVNDJyxcbiAgICAgICAgICAgIHJlbmRlcmVyICAgICAgICAgICAgOiBVdGlsLmZvcm1hdE51bWJlclxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W119IGNvbHVtbnNcbiAgICAgICAgICovXG4gICAgICAgIGNvbHVtbnM6IFt7XG4gICAgICAgICAgICBjbHMgICAgICA6IFsnbmVvLWluZGV4LWNvbHVtbicsICduZW8tdGFibGUtaGVhZGVyLWJ1dHRvbiddLFxuICAgICAgICAgICAgZGF0YUZpZWxkOiAnaW5kZXgnLFxuICAgICAgICAgICAgZG9jayAgICAgOiAnbGVmdCcsXG4gICAgICAgICAgICBtaW5XaWR0aCA6IDQwLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnIycsXG4gICAgICAgICAgICByZW5kZXJlciA6IFV0aWwuaW5kZXhSZW5kZXJlcixcbiAgICAgICAgICAgIHdpZHRoICAgIDogNDBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgYWxpZ24gICAgICAgICAgICAgICA6ICdsZWZ0JyxcbiAgICAgICAgICAgIGRhdGFGaWVsZCAgICAgICAgICAgOiAnY291bnRyeScsXG4gICAgICAgICAgICBkZWZhdWx0U29ydERpcmVjdGlvbjogJ0FTQycsXG4gICAgICAgICAgICBkb2NrICAgICAgICAgICAgICAgIDogJ2xlZnQnLFxuICAgICAgICAgICAgdGV4dCAgICAgICAgICAgICAgICA6ICdDb3VudHJ5JyxcbiAgICAgICAgICAgIHdpZHRoICAgICAgICAgICAgICAgOiAyMDAsXG5cbiAgICAgICAgICAgIHJlbmRlcmVyOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY2xzIDogWyduZW8tY291bnRyeS1jb2x1bW4nLCAnbmVvLXRhYmxlLWNlbGwnXSxcbiAgICAgICAgICAgICAgICAgICAgaHRtbDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyXCI+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGltZyBzdHlsZT1cImhlaWdodDoyMHB4OyBtYXJnaW4tcmlnaHQ6MTBweDsgd2lkdGg6MjBweDtcIiBzcmM9XCInICsgVXRpbC5nZXRDb3VudHJ5RmxhZ1VybChkYXRhLnZhbHVlKSArICdcIj4nICsgZGF0YS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbignJylcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICdjYXNlcycsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICdDYXNlcydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAnY2FzZXNQZXJPbmVNaWxsaW9uJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ0Nhc2VzIC8gMU0nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ2luZmVjdGVkJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ0luZmVjdGVkJyxcbiAgICAgICAgICAgIHJlbmRlcmVyIDogZGF0YSA9PiBVdGlsLmZvcm1hdEluZmVjdGVkKGRhdGEpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ2FjdGl2ZScsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICdBY3RpdmUnLFxuICAgICAgICAgICAgcmVuZGVyZXIgOiBkYXRhID0+IFV0aWwuZm9ybWF0TnVtYmVyKGRhdGEsICcjNjRCNUY2JylcbiAgICAgICAgfSwgIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ3JlY292ZXJlZCcsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICdSZWNvdmVyZWQnLFxuICAgICAgICAgICAgcmVuZGVyZXIgOiBkYXRhID0+IFV0aWwuZm9ybWF0TnVtYmVyKGRhdGEsICcjMjhjYTY4JylcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAnY3JpdGljYWwnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnQ3JpdGljYWwnLFxuICAgICAgICAgICAgcmVuZGVyZXIgOiBkYXRhID0+IFV0aWwuZm9ybWF0TnVtYmVyKGRhdGEsICdvcmFuZ2UnKVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICdkZWF0aHMnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnRGVhdGhzJyxcbiAgICAgICAgICAgIHJlbmRlcmVyIDogZGF0YSA9PiBVdGlsLmZvcm1hdE51bWJlcihkYXRhLCAnI2ZiNjc2NycpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ3RvZGF5Q2FzZXMnLFxuICAgICAgICAgICAgdGV4dCAgICAgOiAnQ2FzZXMgdG9kYXknXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ3RvZGF5RGVhdGhzJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ0RlYXRocyB0b2RheScsXG4gICAgICAgICAgICByZW5kZXJlciA6IGRhdGEgPT4gVXRpbC5mb3JtYXROdW1iZXIoZGF0YSwgJyNmYjY3NjcnKVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhRmllbGQ6ICd0ZXN0cycsXG4gICAgICAgICAgICB0ZXh0ICAgICA6ICdUZXN0cydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YUZpZWxkOiAndGVzdHNQZXJPbmVNaWxsaW9uJyxcbiAgICAgICAgICAgIHRleHQgICAgIDogJ1Rlc3RzIC8gMU0nXG4gICAgICAgIH1dLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmRhdGEuU3RvcmV9IHN0b3JlPUNvdW50cnlTdG9yZVxuICAgICAgICAgKi9cbiAgICAgICAgc3RvcmU6IENvdW50cnlTdG9yZVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFRhYmxlKTtcblxuZXhwb3J0IHtUYWJsZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50L3dyYXBwZXIvTWFwYm94R0wubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgU2hhcmVkQ292aWQudmlldy5tYXBib3hHbC5Db21wb25lbnRcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQud3JhcHBlci5NYXBib3hHTFxuICovXG5jbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nU2hhcmVkQ292aWQudmlldy5tYXBib3hHbC5Db21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1NoYXJlZENvdmlkLnZpZXcubWFwYm94R2wuQ29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBhY2Nlc3NUb2tlblxuICAgICAgICAgKi9cbiAgICAgICAgYWNjZXNzVG9rZW46ICdway5leUoxSWpvaWRHOWlhWFVpTENKaElqb2lZMnM0ZFRsc2RIQTVNRFJtWXpOdGNHeGxjekZwY0dWbmN5SjkucWNtekRqcGR5UWVMdHo5ejdkN0NrQScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGNlbnRlcj17bGF0OiA0MCwgbG5nOiAyMH1cbiAgICAgICAgICovXG4gICAgICAgIGNlbnRlcjoge2xhdDogNDAsIGxuZzogMjB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBkYXRhU291cmNlSWQ9J2NvdmlkMTknXG4gICAgICAgICAqL1xuICAgICAgICBkYXRhU291cmNlSWQ6ICdjb3ZpZDE5JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfVxuICAgICAgICAgKi9cbiAgICAgICAgbGF5ZXJzOiBbe1xuICAgICAgICAgICAgYmVmb3JlSWQ6ICd3YXRlcndheS1sYWJlbCcsXG4gICAgICAgICAgICBpZCAgICAgIDogJ2hpbGxzaGFkaW5nJyxcbiAgICAgICAgICAgIHNvdXJjZSAgOiAnZGVtJyxcbiAgICAgICAgICAgIHR5cGUgICAgOiAnaGlsbHNoYWRlJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBiZWZvcmVJZDogJ3dhdGVyd2F5LWxhYmVsJyxcbiAgICAgICAgICAgIGZpbHRlciAgOiBbJz4nLCBbJ2dldCcsICdjYXNlcyddLCAwXSxcbiAgICAgICAgICAgIGlkICAgICAgOiAnY292aWQxOS1oZWF0JyxcbiAgICAgICAgICAgIHNvdXJjZSAgOiAnY292aWQxOScsXG4gICAgICAgICAgICB0eXBlICAgIDogJ2hlYXRtYXAnLFxuXG4gICAgICAgICAgICBwYWludDoge1xuICAgICAgICAgICAgICAgICdoZWF0bWFwLWNvbG9yJyAgICA6IFsnaW50ZXJwb2xhdGUnLCBbJ2xpbmVhciddLCBbJ2hlYXRtYXAtZGVuc2l0eSddLCAwLCAncmdiYSgwLDAsMCwwKScsIDAuMSwgJyM5Mjc5MDMnLCAwLjE1LCAnI2ZmZDQwMycsIDEsICcjZmYwMDAwJ10sXG4gICAgICAgICAgICAgICAgJ2hlYXRtYXAtaW50ZW5zaXR5JzogWydpbnRlcnBvbGF0ZScsIFsnbGluZWFyJ10sIFsnem9vbSddLCAwLCAzLCA5LCA1XSxcbiAgICAgICAgICAgICAgICAnaGVhdG1hcC1vcGFjaXR5JyAgOiBbJ2ludGVycG9sYXRlJywgWydsaW5lYXInXSwgWyd6b29tJ10sIDUsIC45NSwgNiwgMF0sXG4gICAgICAgICAgICAgICAgJ2hlYXRtYXAtcmFkaXVzJyAgIDogWydpbnRlcnBvbGF0ZScsIFsnbGluZWFyJ10sIFsnem9vbSddLCAwLCAyLCAxLCA0LCAyLCA4LCAzLCAxNiwgNCwgMzIsIDUsIDY0LCA2LCAxMjgsIDcsIDI1NiwgOCwgNTEyLCA5LCAxMDI0XSxcbiAgICAgICAgICAgICAgICAnaGVhdG1hcC13ZWlnaHQnICAgOiBbJ2ludGVycG9sYXRlJywgWydsaW5lYXInXSwgWydnZXQnLCAnY2FzZXMnXSwgMCwgMCwgMWU0LCAxXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBiZWZvcmVJZDogJ3dhdGVyd2F5LWxhYmVsJyxcbiAgICAgICAgICAgIGZpbHRlciAgOiBbJz4nLCBbJ2dldCcsICdjYXNlcyddLCAwXSxcbiAgICAgICAgICAgIGlkICAgICAgOiAnY292aWQxOS1jaXJjbGUnLFxuICAgICAgICAgICAgc291cmNlICA6ICdjb3ZpZDE5JyxcbiAgICAgICAgICAgIHR5cGUgICAgOiAnY2lyY2xlJyxcbiAgICAgICAgICAgIG1pbnpvb20gOiA1LFxuXG4gICAgICAgICAgICBwYWludDoge1xuICAgICAgICAgICAgICAgICdjaXJjbGUtY29sb3InICAgIDogWydzdGVwJywgWydnZXQnLCAnY2FzZXMnXSwgJyM5YWQ1ZmYnLCAwLCAnIzlhZjZmZicsIDIwLCAnIzAwZmZmZicsIDIwMCwgJyNmZmZmMDAnLCA0MDAsICcjZjFmMDc1JywgODAwLCAnI2Y5YjE5NicsIDFlMywgJyNmMjhjYjEnLCAyZTMsICcjZjI4Y2IxJ10sXG4gICAgICAgICAgICAgICAgJ2NpcmNsZS1vcGFjaXR5JyAgOiBbJ2ludGVycG9sYXRlJywgWydsaW5lYXInXSwgWyd6b29tJ10sIDUsIDAsIDYsIC42XSxcbiAgICAgICAgICAgICAgICAnY2lyY2xlLXJhZGl1cycgICA6IFsnc3RlcCcsIFsnZ2V0JywgJ2Nhc2VzJ10sIDEwLCAxMDAsIDIwLCA1MDAsIDMwLCAxZTMsIDQwLCAxZTQsIDUwXSxcbiAgICAgICAgICAgICAgICAnY2lyY2xlLXRyYW5zbGF0ZSc6IFswLCAyMF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgYmVmb3JlSWQ6ICd3YXRlcndheS1sYWJlbCcsXG4gICAgICAgICAgICBmaWx0ZXIgIDogWyc+JywgWydnZXQnLCAnY2FzZXMnXSwgMF0sXG4gICAgICAgICAgICBpZCAgICAgIDogJ2NvdmlkMTktY2lyY2xlLXRleHQnLFxuICAgICAgICAgICAgc291cmNlICA6ICdjb3ZpZDE5JyxcbiAgICAgICAgICAgIHR5cGUgICAgOiAnc3ltYm9sJyxcbiAgICAgICAgICAgIG1pbnpvb20gOiA1LFxuXG4gICAgICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICAgICAgICAndGV4dC1hbGxvdy1vdmVybGFwJyAgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAndGV4dC1maWVsZCcgICAgICAgICAgIDogWyd0by1zdHJpbmcnLCBbJ2dldCcsICdjYXNlcyddXSxcbiAgICAgICAgICAgICAgICAndGV4dC1mb250JyAgICAgICAgICAgIDogWydESU4gT2ZmYyBQcm8gTWVkaXVtJywgJ0FyaWFsIFVuaWNvZGUgTVMgQm9sZCddLFxuICAgICAgICAgICAgICAgICd0ZXh0LWlnbm9yZS1wbGFjZW1lbnQnOiB0cnVlLFxuICAgICAgICAgICAgICAgICd0ZXh0LXNpemUnICAgICAgICAgICAgOiAxMlxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcGFpbnQ6IHtcbiAgICAgICAgICAgICAgICAndGV4dC1vcGFjaXR5JyAgOiBbJ2ludGVycG9sYXRlJywgWydsaW5lYXInXSwgWyd6b29tJ10sIDUsIDAsIDcsIDFdLFxuICAgICAgICAgICAgICAgICd0ZXh0LXRyYW5zbGF0ZSc6IFswLCAyMF0sXG4gICAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgICAvKipcbiAgICAgICAgICogaHR0cHM6Ly9kb2NzLm1hcGJveC5jb20vbWFwYm94LWdsLWpzL3N0eWxlLXNwZWMvXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxTdHJpbmd9IG1hcGJveFN0eWxlPSdtYXBib3g6Ly9zdHlsZXMvdG9iaXUvY2s5NDR5ZXJxM2hyajFpcDkxbzM0ZmE3ZCdcbiAgICAgICAgICovXG4gICAgICAgIG1hcGJveFN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL3RvYml1L2NrOTQ0eWVycTNocmoxaXA5MW8zNGZhN2QnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVmVyc2lvbiBmb3IgdGhlIG5lby1kYXJrIHRoZW1lXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxTdHJpbmd9IG1hcGJveFN0eWxlPSdtYXBib3g6Ly9zdHlsZXMvdG9iaXUvY2s5NDR5ZXJxM2hyajFpcDkxbzM0ZmE3ZCdcbiAgICAgICAgICovXG4gICAgICAgIG1hcGJveFN0eWxlRGFyazogJ21hcGJveDovL3N0eWxlcy90b2JpdS9jazh5YXhha3gxMXp4MWlsZ3NocTQ1MWN2JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZlcnNpb24gZm9yIHRoZSBuZW8tbGlnaHQgdGhlbWVcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fFN0cmluZ30gbWFwYm94U3R5bGU9J21hcGJveDovL3N0eWxlcy90b2JpdS9jazk0NTlwbGUwcWM3MWludnVnZHo2YmJmJ1xuICAgICAgICAgKi9cbiAgICAgICAgbWFwYm94U3R5bGVMaWdodDogJ21hcGJveDovL3N0eWxlcy90b2JpdS9jazk0NTlwbGUwcWM3MWludnVnZHo2YmJmJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfVxuICAgICAgICAgKi9cbiAgICAgICAgc291cmNlczogW3tcbiAgICAgICAgICAgIGlkICA6ICdjb3ZpZDE5JyxcbiAgICAgICAgICAgIHR5cGU6ICdnZW9qc29uJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB0eXBlICAgIDogJ0ZlYXR1cmVDb2xsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICBmZWF0dXJlczogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgaWQgIDogJ2RlbScsXG4gICAgICAgICAgICB0eXBlOiAncmFzdGVyLWRlbScsXG4gICAgICAgICAgICB1cmwgOiAnbWFwYm94Oi8vbWFwYm94LnRlcnJhaW4tcmdiJ1xuICAgICAgICB9XVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENvbXBvbmVudCk7XG5cbmV4cG9ydCB7Q29tcG9uZW50IGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlQ29udGFpbmVyICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9jb250YWluZXIvQmFzZS5tanMnO1xuaW1wb3J0IENoZWNrQm94ICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2Zvcm0vZmllbGQvQ2hlY2tCb3gubWpzJztcbmltcG9ydCBDb21wb25lbnQgICAgICAgICAgIGZyb20gJy4vQ29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgQ29udGFpbmVyQ29udHJvbGxlciBmcm9tICcuL0NvbnRhaW5lckNvbnRyb2xsZXIubWpzJztcbmltcG9ydCBQYW5lbCAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9jb250YWluZXIvUGFuZWwubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgU2hhcmVkQ292aWQudmlldy5tYXBib3hHbC5Db250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBDb250YWluZXIgZXh0ZW5kcyBCYXNlQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nU2hhcmVkQ292aWQudmlldy5tYXBib3hHbC5Db250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1NoYXJlZENvdmlkLnZpZXcubWFwYm94R2wuQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NvdmlkLW1hcGJveGdsLWNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjb3ZpZC1tYXBib3hnbC1jb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50fSBjb250cm9sbGVyPUNvbnRhaW5lckNvbnRyb2xsZXJcbiAgICAgICAgICovXG4gICAgICAgIGNvbnRyb2xsZXI6IENvbnRhaW5lckNvbnRyb2xsZXIsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX0gaXRlbXNcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgbW9kdWxlICAgOiBDb21wb25lbnQsXG4gICAgICAgICAgICByZWZlcmVuY2U6ICdtYXBib3hnbG1hcCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgOiBQYW5lbCxcbiAgICAgICAgICAgIGhlaWdodCAgICAgIDogMTUwLFxuICAgICAgICAgICAgaWdub3JlTGF5b3V0OiB0cnVlLFxuXG4gICAgICAgICAgICBjb250YWluZXJDb25maWc6IHtcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjYsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGhlYWRlcnM6IFt7XG4gICAgICAgICAgICAgICAgZG9jazogJ3RvcCcsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAnb25XaW5kb3dNYXBNYXhpbWl6ZUJ1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhciBmYS13aW5kb3ctbWF4aW1pemUnXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdNYXAgQ29udHJvbHMnXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dLFxuXG4gICAgICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgICAgOiBDaGVja0JveCxcbiAgICAgICAgICAgICAgICBmbGV4ICAgICAgOiAnMCAxIGF1dG8nLFxuICAgICAgICAgICAgICAgIGxhYmVsV2lkdGg6IDEwMFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgY2hlY2tlZCAgOiB0cnVlLFxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ0RldGFpbCBDaXJjbGVzJyxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtjaGFuZ2U6ICdvbkRldGFpbENpcmNsZXNDaGFuZ2UnfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGNoZWNrZWQgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdIZWF0TWFwJyxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtjaGFuZ2U6ICdvbkhlYXRNYXBDaGFuZ2UnfSxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW5Ub3A6ICc1cHgnfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGNoZWNrZWQgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdUZXJyYWluJyxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtjaGFuZ2U6ICdvblRlcnJhaW5DaGFuZ2UnfSxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW5Ub3A6ICc1cHgnfVxuICAgICAgICAgICAgfV0sXG5cbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uICAgICAgIDogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICByaWdodCAgICAgICAgICA6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICB0b3AgICAgICAgICAgICA6ICcxMHB4J1xuICAgICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbGF5b3V0PXtudHlwZTogJ2ZpdCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2ZpdCd9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbToge1xuICAgICAgICAgICAgc3R5bGU6IHtwb3NpdGlvbjogJ3JlbGF0aXZlJywgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnMTAwJSd9LFxuICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtwb3NpdGlvbjogJ2Fic29sdXRlJywgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnMTAwJSd9LFxuICAgICAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge2hlaWdodDogJzEwMCUnfSxcbiAgICAgICAgICAgICAgICAgICAgY246IFtdXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBnZXRWZG9tUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmRvbS5jblswXS5jblswXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGdldFZub2RlUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudm5vZGUuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ29udGFpbmVyKTtcblxuZXhwb3J0IHtDb250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbXBvbmVudENvbnRyb2xsZXIgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXIvQ29tcG9uZW50Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFNoYXJlZENvdmlkLnZpZXcubWFwYm94R2wuQ29udGFpbmVyQ29udHJvbGxlclxuICogQGV4dGVuZHMgTmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50XG4gKi9cbmNsYXNzIENvbnRhaW5lckNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnRDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nU2hhcmVkQ292aWQudmlldy5tYXBib3hHbC5Db250YWluZXJDb250cm9sbGVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdTaGFyZWRDb3ZpZC52aWV3Lm1hcGJveEdsLkNvbnRhaW5lckNvbnRyb2xsZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbWFwYm94Z2wtY29udGFpbmVyLWNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbWFwYm94Z2wtY29udGFpbmVyLWNvbnRyb2xsZXInXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGxheWVySWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmlzaWJpbGl0eVxuICAgICAqL1xuICAgIGNoYW5nZUxheWVyVmlzaWJpbGl0eShsYXllcklkLCB2aXNpYmlsaXR5KSB7XG4gICAgICAgIHRoaXMuZ2V0UmVmZXJlbmNlKCdtYXBib3hnbG1hcCcpLnNldExheW91dFByb3BlcnR5KHtcbiAgICAgICAgICAgIGxheWVySWQ6IGxheWVySWQsXG4gICAgICAgICAgICBrZXkgICAgOiAndmlzaWJpbGl0eScsXG4gICAgICAgICAgICB2YWx1ZSAgOiB2aXNpYmlsaXR5XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkRldGFpbENpcmNsZXNDaGFuZ2UoZGF0YSkge1xuICAgICAgICBjb25zdCB2aXNpYmlsaXR5ID0gZGF0YS52YWx1ZSA/ICd2aXNpYmxlJyA6ICdub25lJztcblxuICAgICAgICB0aGlzLmNoYW5nZUxheWVyVmlzaWJpbGl0eSgnY292aWQxOS1jaXJjbGUnLCAgICAgIHZpc2liaWxpdHkpO1xuICAgICAgICB0aGlzLmNoYW5nZUxheWVyVmlzaWJpbGl0eSgnY292aWQxOS1jaXJjbGUtdGV4dCcsIHZpc2liaWxpdHkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkhlYXRNYXBDaGFuZ2UoZGF0YSkge1xuICAgICAgICB0aGlzLmNoYW5nZUxheWVyVmlzaWJpbGl0eSgnY292aWQxOS1oZWF0JywgZGF0YS52YWx1ZSA/ICd2aXNpYmxlJyA6ICdub25lJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uVGVycmFpbkNoYW5nZShkYXRhKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlTGF5ZXJWaXNpYmlsaXR5KCdoaWxsc2hhZGluZycsIGRhdGEudmFsdWUgPyAndmlzaWJsZScgOiAnbm9uZScpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ29udGFpbmVyQ29udHJvbGxlcik7XG5cbmV4cG9ydCB7Q29udGFpbmVyQ29udHJvbGxlciBhcyBkZWZhdWx0fTsiXSwic291cmNlUm9vdCI6IiJ9