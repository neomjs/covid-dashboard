self["webpackChunk"](["vendors~chunks/examples-component-coronaHelix-app"],{

/***/ "./node_modules/neo.mjs/examples/component/coronaHelix/CountryHelix.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/component/coronaHelix/CountryHelix.mjs ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountryHelix; });
/* harmony import */ var _CountryStore_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CountryStore.mjs */ "./node_modules/neo.mjs/examples/component/coronaHelix/CountryStore.mjs");
/* harmony import */ var _src_component_Helix_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/component/Helix.mjs */ "./node_modules/neo.mjs/src/component/Helix.mjs");



/**
 * @class Neo.examples.component.coronaHelix.CountryHelix
 * @extends Neo.component.Helix
 */
class CountryHelix extends _src_component_Helix_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getStaticConfig() {return {
        /**
         * A regex to replace blank chars
         * @member {RegExp} flagRegEx=/ /gi
         * @protected
         * @static
         */
        flagRegEx: / /gi
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.examples.component.coronaHelix.CountryHelix'
         * @protected
         */
        className: 'Neo.examples.component.coronaHelix.CountryHelix',
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
        store: _CountryStore_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
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
            table      = firstChild.cn[1];

        vdomItem.id = me.getItemVnodeId(record[me.keyProperty]);

        firstChild.cn[0].cn[0].src  = me.getCountryFlagUrl(record.country);
        firstChild.cn[0].cn[1].html = record.country;

        table.cn[0].cn[1].html = record.cases;
        table.cn[1].cn[1].html = record.deaths;
        table.cn[2].cn[1].html = record.recovered;

        table.cn[0].cn[4].html = record.todayCases;
        table.cn[1].cn[4].html = record.todayDeaths;
        table.cn[2].cn[4].html = record.critical;

        return vdomItem;
    }

    /**
     *
     * @param {String} name
     * @returns {String} url
     */
    getCountryFlagUrl(name) {
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

        let imageName = name.toLowerCase().replace(CountryHelix.flagRegEx, '-');

        imageName = map[imageName] || imageName;

        return 'https://raw.githubusercontent.com/neomjs/pages/master/resources/images/flaticon/country_flags/png/' + imageName + '.png'
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

/***/ "./node_modules/neo.mjs/examples/component/coronaHelix/CountryModel.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/component/coronaHelix/CountryModel.mjs ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountryModel; });
/* harmony import */ var _src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class Neo.examples.component.coronaHelix.CountryModel
 * @extends Neo.data.Model
 */
class CountryModel extends _src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        className: 'Neo.examples.component.coronaHelix.CountryModel',

        fields: [{
            name: 'cases',
            type: 'int'
        }, {
            name: 'country',
            type: 'string'
        }, {
            name: 'critical',
            type: 'int'
        }, {
            name: 'deaths',
            type: 'int'
        }, {
            name: 'recovered',
            type: 'int'
        }, {
            name: 'todayCases',
            type: 'int'
        }, {
            name: 'todayDeaths',
            type: 'int'
        }]
    }}
}

Neo.applyClassConfig(CountryModel);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/component/coronaHelix/CountryStore.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/component/coronaHelix/CountryStore.mjs ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountryStore; });
/* harmony import */ var _CountryModel_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CountryModel.mjs */ "./node_modules/neo.mjs/examples/component/coronaHelix/CountryModel.mjs");
/* harmony import */ var _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");



/**
 * @class Neo.examples.component.coronaHelix.CountryStore
 * @extends Neo.data.Store
 */
class CountryStore extends _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        className: 'Neo.examples.component.coronaHelix.CountryStore',

        keyProperty: 'country',
        model      : _CountryModel_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]
    }}
}

Neo.applyClassConfig(CountryStore);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/component/coronaHelix/HelixMainContainer.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/component/coronaHelix/HelixMainContainer.mjs ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HelixMainContainer; });
/* harmony import */ var _CountryHelix_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CountryHelix.mjs */ "./node_modules/neo.mjs/examples/component/coronaHelix/CountryHelix.mjs");
/* harmony import */ var _src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/container/Panel.mjs */ "./node_modules/neo.mjs/src/container/Panel.mjs");
/* harmony import */ var _src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/form/field/Range.mjs */ "./node_modules/neo.mjs/src/form/field/Range.mjs");
/* harmony import */ var _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");





/**
 * @class TestApp.HelixMainContainer
 * @extends Neo.container.Viewport
 */
class HelixMainContainer extends _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_3__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='TestApp.HelixMainContainer'
         * @protected
         */
        className: 'TestApp.HelixMainContainer',
        /**
         * @member {Boolean} autoMount=true
         */
        autoMount: true,
        /**
         * @member {String[]} cls=['neo-helix-maincontainer', 'neo-viewport']
         */
        cls: ['neo-helix-maincontainer', 'neo-viewport'],
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
         * @member {Boolean} showGitHubStarButton=true
         */
        showGitHubStarButton: true,
        /**
         * @member {Object[]} items
         */
        items: [{
            ntype : 'container',
            flex  : 1,
            layout: 'fit',
            style : {position: 'relative'},

            items: [{
                ntype: 'component',
                html : '<a class="github-button" href="https://github.com/neomjs/neo" data-size="large" data-show-count="true" aria-label="Star neomjs/neo on GitHub">Star</a>',
                style: {
                    position: 'absolute',
                    right   : '20px',
                    top     : '20px',
                    zIndex  : 1
                }
            }]
        }, {
            ntype : 'panel',
            cls   : ['neo-controls-panel', 'neo-panel', 'neo-container'],
            layout: {ntype: 'vbox',align: 'stretch'},
            style : {backgroundColor: '#2b2b2b'},
            width : 250,

            containerConfig: {
                style: {overflowY: 'scroll'}
            },

            headers: [{
                dock: 'top',
                items: [{
                    ntype: 'button',
                    text : 'X',
                    handler: function() {
                        const panel  = this.up('panel'),
                              expand = panel.width === 40;

                        panel.width = expand ? 250 : 40;
                        this.text   = expand ? 'X' : '+';
                    }
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

                listeners: {
                    change: function(data) {
                        if (['deltaY', 'maxOpacity', 'minOpacity'].includes(this.name)) {
                            data.value /= 100;
                        }
                        Neo.get('neo-helix-1')[this.name] = data.value;
                    }
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
                ntype: 'label',
                text : 'Sort By:'
            }, {
                ntype : 'container',
                layout: {ntype: 'hbox', align: 'stretch'},
                style : {minHeight: '134px', padding: '0'},

                items : [{
                    ntype : 'container',
                    layout: {ntype: 'vbox', align: 'stretch'},
                    items : [{
                        ntype    : 'button',
                        text     : 'Cases',
                        listeners: {},
                        style    : {margin: '10px', marginTop: '0'},

                        domListeners: {
                            click: function() {
                                Neo.get('neo-helix-1').store.sorters = [{
                                    property : 'cases',
                                    direction: 'DESC'
                                }];
                            }
                        }
                    }, {
                        ntype    : 'button',
                        text     : 'Deaths',
                        listeners: {},
                        style    : {margin: '10px', marginBottom: '10px', marginTop: 0},

                        domListeners: {
                            click: function() {
                                Neo.get('neo-helix-1').store.sorters = [{
                                    property : 'deaths',
                                    direction: 'DESC'
                                }];
                            }
                        }
                    }, {
                        ntype    : 'button',
                        text     : 'Country',
                        listeners: {},
                        style    : {margin: '10px', marginTop: 0},

                        domListeners: {
                            click: function() {
                                Neo.get('neo-helix-1').store.sorters = [{
                                    property : 'country',
                                    direction: 'ASC'
                                }];
                            }
                        }
                    }, {
                        ntype    : 'button',
                        text     : 'Recovered',
                        listeners: {},
                        style    : {margin: '10px', marginTop: 0},

                        domListeners: {
                            click: function() {
                                Neo.get('neo-helix-1').store.sorters = [{
                                    property : 'recovered',
                                    direction: 'ASC'
                                }];
                            }
                        }
                    }]
                }, {
                    ntype : 'container',
                    layout: {ntype: 'vbox', align: 'stretch'},
                    items : [{
                        ntype    : 'button',
                        text     : 'Cases today',
                        listeners: {},
                        style    : {margin: '10px', marginTop: '0'},

                        domListeners: {
                            click: function() {
                                Neo.get('neo-helix-1').store.sorters = [{
                                    property : 'todayCases',
                                    direction: 'DESC'
                                }];
                            }
                        }
                    }, {
                        ntype    : 'button',
                        text     : 'Deaths today',
                        listeners: {},
                        style    : {margin: '10px', marginBottom: '10px', marginTop: 0},

                        domListeners: {
                            click: function() {
                                Neo.get('neo-helix-1').store.sorters = [{
                                    property : 'todayDeaths',
                                    direction: 'DESC'
                                }];
                            }
                        }
                    }, {
                        ntype    : 'button',
                        text     : 'Critical',
                        listeners: {},
                        style: {margin: '10px', marginBottom: '43px', marginTop: 0},

                        domListeners: {
                            click: function() {
                                Neo.get('neo-helix-1').store.sorters = [{
                                    property : 'critical',
                                    direction: 'DESC'
                                }];
                            }
                        }
                    }]
                }]
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
            }, {
                ntype: 'label',
                cls  : ['neo-link-color'],
                text : [
                    '<b>Attribution</b>',
                    '<p>App created with <a href="https://github.com/neomjs/neo">neo.mjs</a>.</p>',
                    '<p>Data provided by <a href="https://github.com/disease-sh/API">disease.sh/API</a>.</p>',
                    '<p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>.</p>'
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

        const me  = this,
              url = 'https://corona.lmao.ninja/v2/countries';

        me.helix = Neo.create({
            module: _CountryHelix_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            id    : 'neo-helix-1',
            ...me.helixConfig || {}
        });

        me.items[0].items.push(me.helix);

        fetch(url)
            .then(response => response.json())
            .then(data => me.addStoreItems(data))
            .catch(err => console.log('Can’t access ' + url, err));

        if (me.showGitHubStarButton) {
            me.on('mounted', () => {
                Neo.main.DomAccess.addScript({
                    async: true,
                    defer: true,
                    src  : 'https://buttons.github.io/buttons.js'
                });
            });
        }
    }

    addStoreItems(data) {
        this.getStore().data = data;
    }

    /**
     *
     * @returns {Neo.data.Store}
     */
    getStore() {
        return this.items[0].items[1].store;
    }
}

Neo.applyClassConfig(HelixMainContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/component/coronaHelix/app.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/component/coronaHelix/app.mjs ***!
  \*********************************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _HelixMainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HelixMainContainer.mjs */ "./node_modules/neo.mjs/examples/component/coronaHelix/HelixMainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'examples/component/coronaHelix/',
    mainView: _HelixMainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'TestApp'
});



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9jb21wb25lbnQvY29yb25hSGVsaXgvQ291bnRyeUhlbGl4Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9jb21wb25lbnQvY29yb25hSGVsaXgvQ291bnRyeU1vZGVsLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9jb21wb25lbnQvY29yb25hSGVsaXgvQ291bnRyeVN0b3JlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9jb21wb25lbnQvY29yb25hSGVsaXgvSGVsaXhNYWluQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9jb21wb25lbnQvY29yb25hSGVsaXgvYXBwLm1qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEM7QUFDYzs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0VBQUs7QUFDaEMsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekIseUJBQXlCO0FBQ3pC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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDM2FBO0FBQUE7QUFBQTtBQUEyRDs7QUFFM0Q7QUFDQTtBQUNBLGNBQWMsK0RBQWtCO0FBQ2hDO0FBQ0EsQ0FBQyIsImZpbGUiOiJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1jb21wb25lbnQtY29yb25hSGVsaXgtYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvdW50cnlTdG9yZSBmcm9tICcuL0NvdW50cnlTdG9yZS5tanMnO1xuaW1wb3J0IEhlbGl4ICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvY29tcG9uZW50L0hlbGl4Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5leGFtcGxlcy5jb21wb25lbnQuY29yb25hSGVsaXguQ291bnRyeUhlbGl4XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkhlbGl4XG4gKi9cbmNsYXNzIENvdW50cnlIZWxpeCBleHRlbmRzIEhlbGl4IHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHJlZ2V4IHRvIHJlcGxhY2UgYmxhbmsgY2hhcnNcbiAgICAgICAgICogQG1lbWJlciB7UmVnRXhwfSBmbGFnUmVnRXg9LyAvZ2lcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBmbGFnUmVnRXg6IC8gL2dpXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZXhhbXBsZXMuY29tcG9uZW50LmNvcm9uYUhlbGl4LkNvdW50cnlIZWxpeCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmV4YW1wbGVzLmNvbXBvbmVudC5jb3JvbmFIZWxpeC5Db3VudHJ5SGVsaXgnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2NvdmlkLWNvdW50cnktaGVsaXgnLCAnbmVvLWhlbGl4J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWydjb3ZpZC1jb3VudHJ5LWhlbGl4JywgJ25lby1oZWxpeCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHZlcnRpY2FsIGRlbHRhIGJldHdlZW4gZWFjaCBoZWxpeCBpdGVtIChpbmNyZWFzaW5nIHRoaXMgdmFsdWUgd2lsbCBjcmVhdGUgYSBzcGlyYWwpXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gZGVsdGFZPTEuMlxuICAgICAgICAgKi9cbiAgICAgICAgZGVsdGFZOiAxLjIsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGl0ZW1UcGxfXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtVHBsOiB7XG4gICAgICAgICAgICBjbHMgICAgIDogWydzdXJmYWNlJywgJ25lby1oZWxpeC1pdGVtJ10sXG4gICAgICAgICAgICBzdHlsZSAgIDoge30sXG4gICAgICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIGNscyAgOiBbJ25lby1pdGVtLXdyYXBwZXInXSxcbiAgICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgICAgIHRhZyAgOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgY2xzICA6IFsnbmVvLWNvdW50cnktaGVsaXgtaXRlbSddLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge30sXG5cbiAgICAgICAgICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWl0ZW0taGVhZGVyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICdpbWcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsczogWyduZW8tZmxhZyddXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ3RhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsczogWyduZW8tY29udGVudC10YWJsZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ3RyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbiA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgaHRtbDogJ0Nhc2VzJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGNsczogWyduZW8tYWxpZ24tcmlnaHQnXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIHN0eWxlOiB7d2lkdGg6ICcxMDAlJ319LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBodG1sOiAnQ2FzZXMgdG9kYXknfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgY2xzOiBbJ25lby1hbGlnbi1yaWdodCddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICd0cicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGh0bWw6ICdEZWF0aHMnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgY2xzOiBbJ25lby1hbGlnbi1yaWdodCcsICduZW8tY29udGVudC1kZWF0aHMnXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIHN0eWxlOiB7d2lkdGg6ICcxMDAlJ319LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBodG1sOiAnRGVhdGhzIHRvZGF5J30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGNsczogWyduZW8tYWxpZ24tcmlnaHQnLCAnbmVvLWNvbnRlbnQtZGVhdGhzJ119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ3RyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbiA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgaHRtbDogJ1JlY292ZXJlZCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBjbHM6IFsnbmVvLWFsaWduLXJpZ2h0JywgJ25lby1jb250ZW50LXJlY292ZXJlZCddfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgc3R5bGU6IHt3aWR0aDogJzEwMCUnfX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGh0bWw6ICdDcml0aWNhbCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBjbHM6IFsnbmVvLWFsaWduLXJpZ2h0JywgJ25lby1jb250ZW50LWNyaXRpY2FsJ119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB1bmlxdWUgcmVjb3JkIGZpZWxkIGNvbnRhaW5pbmcgdGhlIGlkLlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGtleVByb3BlcnR5PSdpZCdcbiAgICAgICAgICovXG4gICAgICAgIGtleVByb3BlcnR5OiAnY291bnRyeScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcmFkaXVzIG9mIHRoZSBIZWxpeCBpbiBweFxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHJhZGl1cz0yNTAwXG4gICAgICAgICAqL1xuICAgICAgICByYWRpdXM6IDI1MDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcm90YXRpb25BbmdsZSBvZiB0aGUgSGVsaXggaW4gZGVncmVlc1xuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHJvdGF0aW9uQW5nbGU9NzIwXG4gICAgICAgICAqL1xuICAgICAgICByb3RhdGlvbkFuZ2xlOiA3MjAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGRpc3BsYXlzIHRoZSBmaXJzdCAmIGxhc3QgbmFtZSByZWNvcmQgZmllbGRzIGJlbG93IGFuIGV4cGFuZGVkIGl0ZW1cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hvd0Nsb25lSW5mbz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgc2hvd0Nsb25lSW5mbzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5TdG9yZX0gc3RvcmU9Q291bnRyeVN0b3JlXG4gICAgICAgICAqL1xuICAgICAgICBzdG9yZTogQ291bnRyeVN0b3JlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRyYW5zbGF0ZVggdmFsdWUgZ2V0cyBpbmNsdWRlZCBpbnRvIGVhY2ggaGVsaXggaXRlbVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHRyYW5zbGF0ZVk9NTAwXG4gICAgICAgICAqL1xuICAgICAgICB0cmFuc2xhdGVZOiA1MDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHJhbnNsYXRlWCB2YWx1ZSBnZXRzIGluY2x1ZGVkIGludG8gZWFjaCBoZWxpeCBpdGVtXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gdHJhbnNsYXRlWl89LTIzMDBcbiAgICAgICAgICovXG4gICAgICAgIHRyYW5zbGF0ZVo6IC0yMzAwXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21JdGVtXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHZkb21JdGVtXG4gICAgICovXG4gICAgY3JlYXRlSXRlbSh2ZG9tSXRlbSwgcmVjb3JkLCBpbmRleCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBmaXJzdENoaWxkID0gdmRvbUl0ZW0uY25bMF0uY25bMF0sXG4gICAgICAgICAgICB0YWJsZSAgICAgID0gZmlyc3RDaGlsZC5jblsxXTtcblxuICAgICAgICB2ZG9tSXRlbS5pZCA9IG1lLmdldEl0ZW1Wbm9kZUlkKHJlY29yZFttZS5rZXlQcm9wZXJ0eV0pO1xuXG4gICAgICAgIGZpcnN0Q2hpbGQuY25bMF0uY25bMF0uc3JjICA9IG1lLmdldENvdW50cnlGbGFnVXJsKHJlY29yZC5jb3VudHJ5KTtcbiAgICAgICAgZmlyc3RDaGlsZC5jblswXS5jblsxXS5odG1sID0gcmVjb3JkLmNvdW50cnk7XG5cbiAgICAgICAgdGFibGUuY25bMF0uY25bMV0uaHRtbCA9IHJlY29yZC5jYXNlcztcbiAgICAgICAgdGFibGUuY25bMV0uY25bMV0uaHRtbCA9IHJlY29yZC5kZWF0aHM7XG4gICAgICAgIHRhYmxlLmNuWzJdLmNuWzFdLmh0bWwgPSByZWNvcmQucmVjb3ZlcmVkO1xuXG4gICAgICAgIHRhYmxlLmNuWzBdLmNuWzRdLmh0bWwgPSByZWNvcmQudG9kYXlDYXNlcztcbiAgICAgICAgdGFibGUuY25bMV0uY25bNF0uaHRtbCA9IHJlY29yZC50b2RheURlYXRocztcbiAgICAgICAgdGFibGUuY25bMl0uY25bNF0uaHRtbCA9IHJlY29yZC5jcml0aWNhbDtcblxuICAgICAgICByZXR1cm4gdmRvbUl0ZW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IHVybFxuICAgICAqL1xuICAgIGdldENvdW50cnlGbGFnVXJsKG5hbWUpIHtcbiAgICAgICAgY29uc3QgbWFwID0ge1xuICAgICAgICAgICAgJ2Jvc25pYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnYm9zbmlhLWFuZC1oZXJ6ZWdvdmluYScsXG4gICAgICAgICAgICAnY2Fiby12ZXJkZScgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdjYXBlLXZlcmRlJyxcbiAgICAgICAgICAgICdjYXInICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2NlbnRyYWwtYWZyaWNhbi1yZXB1YmxpYycsXG4gICAgICAgICAgICAnY2FyaWJiZWFuLW5ldGhlcmxhbmRzJyAgICAgICAgICAgICAgICA6ICduZXRoZXJsYW5kcycsXG4gICAgICAgICAgICAnY2hhbm5lbC1pc2xhbmRzJyAgICAgICAgICAgICAgICAgICAgICA6ICdqZXJzZXknLFxuICAgICAgICAgICAgJ2PDtHRlLWRcXCdpdm9pcmUnICAgICAgICAgICAgICAgICAgICAgICA6ICdpdm9yeS1jb2FzdCcsXG4gICAgICAgICAgICAnY29uZ28nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdyZXB1YmxpYy1vZi10aGUtY29uZ28nLFxuICAgICAgICAgICAgJ2NvbmdvLC10aGUtZGVtb2NyYXRpYy1yZXB1YmxpYy1vZi10aGUnOiAnZGVtb2NyYXRpYy1yZXB1YmxpYy1vZi1jb25nbycsXG4gICAgICAgICAgICAnY3VyYcOnYW8nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnY3VyYWNhbycsXG4gICAgICAgICAgICAnY3plY2hpYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdjemVjaC1yZXB1YmxpYycsXG4gICAgICAgICAgICAnZGlhbW9uZC1wcmluY2VzcycgICAgICAgICAgICAgICAgICAgICA6ICdqYXBhbicsIC8vIGNydWlzZSBzaGlwXG4gICAgICAgICAgICAnZHJjJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdkZW1vY3JhdGljLXJlcHVibGljLW9mLWNvbmdvJyxcbiAgICAgICAgICAgICdlbC1zYWx2YWRvcicgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3NhbHZhZG9yJyxcbiAgICAgICAgICAgICdlc3dhdGluaScgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3N3YXppbGFuZCcsXG4gICAgICAgICAgICAnZmFlcm9lLWlzbGFuZHMnICAgICAgICAgICAgICAgICAgICAgICA6ICdmYXJvZS1pc2xhbmRzJyxcbiAgICAgICAgICAgICdmYWxrbGFuZC1pc2xhbmRzLShtYWx2aW5hcyknICAgICAgICAgIDogJ2ZhbGtsYW5kLWlzbGFuZHMnLFxuICAgICAgICAgICAgJ2ZyZW5jaC1ndWlhbmEnICAgICAgICAgICAgICAgICAgICAgICAgOiAnZnJhbmNlJywgLy8gP1xuICAgICAgICAgICAgJ2d1YWRlbG91cGUnICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnZnJhbmNlJywgLy8gP1xuICAgICAgICAgICAgJ2hvbHktc2VlLSh2YXRpY2FuLWNpdHktc3RhdGUpJyAgICAgICAgOiAndmF0aWNhbi1jaXR5JyxcbiAgICAgICAgICAgICdpcmFuLC1pc2xhbWljLXJlcHVibGljLW9mJyAgICAgICAgICAgIDogJ2lyYW4nLFxuICAgICAgICAgICAgJ2xhby1wZW9wbGVcXCdzLWRlbW9jcmF0aWMtcmVwdWJsaWMnICAgIDogJ2xhb3MnLFxuICAgICAgICAgICAgJ2xpYnlhbi1hcmFiLWphbWFoaXJpeWEnICAgICAgICAgICAgICAgOiAnbGlieWEnLFxuICAgICAgICAgICAgJ21hY2Vkb25pYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAncmVwdWJsaWMtb2YtbWFjZWRvbmlhJyxcbiAgICAgICAgICAgICdtYXlvdHRlJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2ZyYW5jZScsIC8vID9cbiAgICAgICAgICAgICdtb2xkb3ZhLC1yZXB1YmxpYy1vZicgICAgICAgICAgICAgICAgIDogJ21vbGRvdmEnLFxuICAgICAgICAgICAgJ21zLXphYW5kYW0nICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnbmV0aGVybGFuZHMnLCAvLyBjcnVpc2Ugc2hpcFxuICAgICAgICAgICAgJ25ldy1jYWxlZG9uaWEnICAgICAgICAgICAgICAgICAgICAgICAgOiAnZnJhbmNlJyxcbiAgICAgICAgICAgICdwYWxlc3Rpbmlhbi10ZXJyaXRvcnksLW9jY3VwaWVkJyAgICAgIDogJ3BhbGVzdGluZScsXG4gICAgICAgICAgICAncG9sYW5kJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdyZXB1YmxpYy1vZi1wb2xhbmQnLFxuICAgICAgICAgICAgJ3LDqXVuaW9uJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2ZyYW5jZScsXG4gICAgICAgICAgICAncy4ta29yZWEnICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzb3V0aC1rb3JlYScsXG4gICAgICAgICAgICAnc3QuLWJhcnRoJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzdC1iYXJ0cycsXG4gICAgICAgICAgICAnc2FpbnQtbHVjaWEnICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzdC1sdWNpYScsXG4gICAgICAgICAgICAnc2FpbnQtbWFydGluJyAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzaW50LW1hYXJ0ZW4nLFxuICAgICAgICAgICAgJ3NhaW50LXBpZXJyZS1taXF1ZWxvbicgICAgICAgICAgICAgICAgOiAnZnJhbmNlJyxcbiAgICAgICAgICAgICdzYWludC12aW5jZW50LWFuZC10aGUtZ3JlbmFkaW5lcycgICAgIDogJ3N0LXZpbmNlbnQtYW5kLXRoZS1ncmVuYWRpbmVzJyxcbiAgICAgICAgICAgICdzeXJpYW4tYXJhYi1yZXB1YmxpYycgICAgICAgICAgICAgICAgIDogJ3N5cmlhJyxcbiAgICAgICAgICAgICd0YW56YW5pYSwtdW5pdGVkLXJlcHVibGljLW9mJyAgICAgICAgIDogJ3RhbnphbmlhJyxcbiAgICAgICAgICAgICd0aW1vci1sZXN0ZScgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2Vhc3QtdGltb3InLFxuICAgICAgICAgICAgJ3R1cmtzLWFuZC1jYWljb3MtaXNsYW5kcycgICAgICAgICAgICAgOiAndHVya3MtYW5kLWNhaWNvcycsXG4gICAgICAgICAgICAndS5zLi12aXJnaW4taXNsYW5kcycgICAgICAgICAgICAgICAgICA6ICd2aXJnaW4taXNsYW5kcycsXG4gICAgICAgICAgICAndWFlJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd1bml0ZWQtYXJhYi1lbWlyYXRlcycsXG4gICAgICAgICAgICAndWsnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd1bml0ZWQta2luZ2RvbScsXG4gICAgICAgICAgICAndXNhJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd1bml0ZWQtc3RhdGVzLW9mLWFtZXJpY2EnLFxuICAgICAgICAgICAgJ3V6YmVraXN0YW4nICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndXpiZWtpc3RuJyxcbiAgICAgICAgICAgICd2ZW5lenVlbGEsLWJvbGl2YXJpYW4tcmVwdWJsaWMtb2YnICAgIDogJ3ZlbmV6dWVsYScsXG4gICAgICAgICAgICAndmlldC1uYW0nICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd2aWV0bmFtJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBpbWFnZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZShDb3VudHJ5SGVsaXguZmxhZ1JlZ0V4LCAnLScpO1xuXG4gICAgICAgIGltYWdlTmFtZSA9IG1hcFtpbWFnZU5hbWVdIHx8IGltYWdlTmFtZTtcblxuICAgICAgICByZXR1cm4gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9uZW9tanMvcGFnZXMvbWFzdGVyL3Jlc291cmNlcy9pbWFnZXMvZmxhdGljb24vY291bnRyeV9mbGFncy9wbmcvJyArIGltYWdlTmFtZSArICcucG5nJ1xuICAgIH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0Q2xvbmVUcmFuc2Zvcm0oKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVggPSAobWUub2Zmc2V0V2lkdGggIC0gMjgwMCkgLyA2LFxuICAgICAgICAgICAgdHJhbnNsYXRlWSA9IChtZS5vZmZzZXRIZWlnaHQgLSAyNzAwKSAvIDYsXG4gICAgICAgICAgICB0cmFuc2xhdGVaID0gMTAwNDAwICsgbWUucGVyc3BlY3RpdmUgLyAxLjU7XG5cbiAgICAgICAgcmV0dXJuICdtYXRyaXgzZCgxLDAsMCwwLDAsMSwwLDAsMCwwLDEsMCwnK3RyYW5zbGF0ZVgrJywnK3RyYW5zbGF0ZVkrJywnK3RyYW5zbGF0ZVorJywxKSc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdm5vZGVJZFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SXRlbUlkKHZub2RlSWQpIHtcbiAgICAgICAgcmV0dXJuIHZub2RlSWQuc3BsaXQoJ19fJylbMV07XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb3VudHJ5SGVsaXgpO1xuXG5leHBvcnQge0NvdW50cnlIZWxpeCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgTW9kZWwgIGZyb20gJy4uLy4uLy4uL3NyYy9kYXRhL01vZGVsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5leGFtcGxlcy5jb21wb25lbnQuY29yb25hSGVsaXguQ291bnRyeU1vZGVsXG4gKiBAZXh0ZW5kcyBOZW8uZGF0YS5Nb2RlbFxuICovXG5jbGFzcyBDb3VudHJ5TW9kZWwgZXh0ZW5kcyBNb2RlbCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uZXhhbXBsZXMuY29tcG9uZW50LmNvcm9uYUhlbGl4LkNvdW50cnlNb2RlbCcsXG5cbiAgICAgICAgZmllbGRzOiBbe1xuICAgICAgICAgICAgbmFtZTogJ2Nhc2VzJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbnQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdjb3VudHJ5JyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdjcml0aWNhbCcsXG4gICAgICAgICAgICB0eXBlOiAnaW50J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZGVhdGhzJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbnQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdyZWNvdmVyZWQnLFxuICAgICAgICAgICAgdHlwZTogJ2ludCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3RvZGF5Q2FzZXMnLFxuICAgICAgICAgICAgdHlwZTogJ2ludCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3RvZGF5RGVhdGhzJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbnQnXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ291bnRyeU1vZGVsKTtcblxuZXhwb3J0IHtDb3VudHJ5TW9kZWwgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvdW50cnlNb2RlbCBmcm9tICcuL0NvdW50cnlNb2RlbC5tanMnO1xuaW1wb3J0IFN0b3JlICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvZGF0YS9TdG9yZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uZXhhbXBsZXMuY29tcG9uZW50LmNvcm9uYUhlbGl4LkNvdW50cnlTdG9yZVxuICogQGV4dGVuZHMgTmVvLmRhdGEuU3RvcmVcbiAqL1xuY2xhc3MgQ291bnRyeVN0b3JlIGV4dGVuZHMgU3RvcmUge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmV4YW1wbGVzLmNvbXBvbmVudC5jb3JvbmFIZWxpeC5Db3VudHJ5U3RvcmUnLFxuXG4gICAgICAgIGtleVByb3BlcnR5OiAnY291bnRyeScsXG4gICAgICAgIG1vZGVsICAgICAgOiBDb3VudHJ5TW9kZWxcbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb3VudHJ5U3RvcmUpO1xuXG5leHBvcnQge0NvdW50cnlTdG9yZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ291bnRyeUhlbGl4IGZyb20gJy4vQ291bnRyeUhlbGl4Lm1qcyc7XG5pbXBvcnQgUGFuZWwgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9jb250YWluZXIvUGFuZWwubWpzJztcbmltcG9ydCBSYW5nZUZpZWxkICAgZnJvbSAnLi4vLi4vLi4vc3JjL2Zvcm0vZmllbGQvUmFuZ2UubWpzJztcbmltcG9ydCBWaWV3cG9ydCAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbnRhaW5lci9WaWV3cG9ydC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBUZXN0QXBwLkhlbGl4TWFpbkNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5WaWV3cG9ydFxuICovXG5jbGFzcyBIZWxpeE1haW5Db250YWluZXIgZXh0ZW5kcyBWaWV3cG9ydCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1Rlc3RBcHAuSGVsaXhNYWluQ29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdUZXN0QXBwLkhlbGl4TWFpbkNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBhdXRvTW91bnQ9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgYXV0b01vdW50OiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1oZWxpeC1tYWluY29udGFpbmVyJywgJ25lby12aWV3cG9ydCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWhlbGl4LW1haW5jb250YWluZXInLCAnbmVvLXZpZXdwb3J0J10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29tcG9uZW50LkhlbGl4fG51bGx9IGhlbGl4PW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGhlbGl4OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IGhlbGl4Q29uZmlnPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGhlbGl4Q29uZmlnOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IGxheW91dD17bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hvd0dpdEh1YlN0YXJCdXR0b249dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgc2hvd0dpdEh1YlN0YXJCdXR0b246IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX0gaXRlbXNcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgIGZsZXggIDogMSxcbiAgICAgICAgICAgIGxheW91dDogJ2ZpdCcsXG4gICAgICAgICAgICBzdHlsZSA6IHtwb3NpdGlvbjogJ3JlbGF0aXZlJ30sXG5cbiAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgICAgICBodG1sIDogJzxhIGNsYXNzPVwiZ2l0aHViLWJ1dHRvblwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbmVvbWpzL25lb1wiIGRhdGEtc2l6ZT1cImxhcmdlXCIgZGF0YS1zaG93LWNvdW50PVwidHJ1ZVwiIGFyaWEtbGFiZWw9XCJTdGFyIG5lb21qcy9uZW8gb24gR2l0SHViXCI+U3RhcjwvYT4nLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICByaWdodCAgIDogJzIwcHgnLFxuICAgICAgICAgICAgICAgICAgICB0b3AgICAgIDogJzIwcHgnLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXggIDogMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG50eXBlIDogJ3BhbmVsJyxcbiAgICAgICAgICAgIGNscyAgIDogWyduZW8tY29udHJvbHMtcGFuZWwnLCAnbmVvLXBhbmVsJywgJ25lby1jb250YWluZXInXSxcbiAgICAgICAgICAgIGxheW91dDoge250eXBlOiAndmJveCcsYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgICAgICBzdHlsZSA6IHtiYWNrZ3JvdW5kQ29sb3I6ICcjMmIyYjJiJ30sXG4gICAgICAgICAgICB3aWR0aCA6IDI1MCxcblxuICAgICAgICAgICAgY29udGFpbmVyQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtvdmVyZmxvd1k6ICdzY3JvbGwnfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaGVhZGVyczogW3tcbiAgICAgICAgICAgICAgICBkb2NrOiAndG9wJyxcbiAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgbnR5cGU6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ1gnLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhbmVsICA9IHRoaXMudXAoJ3BhbmVsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmQgPSBwYW5lbC53aWR0aCA9PT0gNDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhbmVsLndpZHRoID0gZXhwYW5kID8gMjUwIDogNDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHQgICA9IGV4cGFuZCA/ICdYJyA6ICcrJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGU6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgOiAnSGVsaXggQ29udHJvbHMnXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dLFxuXG4gICAgICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgICAgICBudHlwZSAgICAgICAgOiAncmFuZ2VmaWVsZCcsXG4gICAgICAgICAgICAgICAgZmxleCAgICAgICAgIDogJzAgMSBhdXRvJyxcbiAgICAgICAgICAgICAgICBsYWJlbFdpZHRoICAgOiAnMTAwcHgnLFxuICAgICAgICAgICAgICAgIHN0eWxlICAgICAgICA6IHtwYWRkaW5nOiAnMTBweCd9LFxuICAgICAgICAgICAgICAgIHVzZUlucHV0RXZlbnQ6IHRydWUsXG5cbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoWydkZWx0YVknLCAnbWF4T3BhY2l0eScsICdtaW5PcGFjaXR5J10uaW5jbHVkZXModGhpcy5uYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudmFsdWUgLz0gMTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgTmVvLmdldCgnbmVvLWhlbGl4LTEnKVt0aGlzLm5hbWVdID0gZGF0YS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1RyYW5zbGF0ZSBYJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDIwMDAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAtMjAwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICd0cmFuc2xhdGVYJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDQwMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1RyYW5zbGF0ZSBZJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDI1MDAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAtMjUwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICd0cmFuc2xhdGVZJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IC0zNTBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdUcmFuc2xhdGUgWicsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiA0NTAwLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogLTQ1MDAsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAndHJhbnNsYXRlWicsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiAtMTUwMCxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBOZW8uZ2V0KCduZW8taGVsaXgtMScpW3RoaXMubmFtZV0gPSBkYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb3VudGVkOiBmdW5jdGlvbihmaWVsZElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmllbGQgPSBOZW8uZ2V0KGZpZWxkSWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBOZW8uZ2V0KCduZW8taGVsaXgtMScpLm9uKCdjaGFuZ2VUcmFuc2xhdGVaJywgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCB0aGlzLm1pblZhbHVlKSwgdGhpcy5tYXhWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dCA6ICdEZWx0YSBZJyxcbiAgICAgICAgICAgICAgICBsYWJlbEFsaWduOiAndG9wJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSAgOiA2MDAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgIDogLTYwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICAgOiAnZGVsdGFZJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICAgOiA3MFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1JvdGF0ZScsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAtNzIwLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogNzIwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3JvdGF0aW9uQW5nbGUnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogMCxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBOZW8uZ2V0KCduZW8taGVsaXgtMScpW3RoaXMubmFtZV0gPSBkYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb3VudGVkOiBmdW5jdGlvbihmaWVsZElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmllbGQgPSBOZW8uZ2V0KGZpZWxkSWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBOZW8uZ2V0KCduZW8taGVsaXgtMScpLm9uKCdjaGFuZ2VSb3RhdGlvbicsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgdGhpcy5taW5WYWx1ZSksIHRoaXMubWF4VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdSYWRpdXMnLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMzUwMCxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IDkwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICdyYWRpdXMnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogMTUwMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1BlcnNwZWN0aXZlJyxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IDUwLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMzAwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICdwZXJzcGVjdGl2ZScsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiA4MDBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdJdGVtIEFuZ2xlJyxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IDEsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiAzNixcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICdpdGVtQW5nbGUnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogOFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ01heCBPcGFjaXR5JyxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICdtYXhPcGFjaXR5JyxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IDAsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiAxMDAsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiA4MCAvLyB0b2RvIFszMCwgODBdXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnTWluIE9wYWNpdHknLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ21pbk9wYWNpdHknLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogMCxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDEwMCxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDMwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGUgICAgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgdGV4dCAgICAgIDogJ0ZsaXAgSXRlbXMnLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge30sXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luOiAnMjBweCd9LFxuICAgICAgICAgICAgICAgIGRvbUxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWxpeCA9IE5lby5nZXQoJ25lby1oZWxpeC0xJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxpeC5mbGlwcGVkID0gIWhlbGl4LmZsaXBwZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGU6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgdGV4dCA6ICdTb3J0IEJ5OidcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAgICAgICAgIHN0eWxlIDoge21pbkhlaWdodDogJzEzNHB4JywgcGFkZGluZzogJzAnfSxcblxuICAgICAgICAgICAgICAgIGl0ZW1zIDogW3tcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG50eXBlICAgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdDYXNlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpblRvcDogJzAnfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZW8uZ2V0KCduZW8taGVsaXgtMScpLnN0b3JlLnNvcnRlcnMgPSBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkgOiAnY2FzZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnREVTQydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudHlwZSAgICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnRGVhdGhzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW46ICcxMHB4JywgbWFyZ2luQm90dG9tOiAnMTBweCcsIG1hcmdpblRvcDogMH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbUxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmVvLmdldCgnbmVvLWhlbGl4LTEnKS5zdG9yZS5zb3J0ZXJzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5IDogJ2RlYXRocycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdERVNDJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG50eXBlICAgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdDb3VudHJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW46ICcxMHB4JywgbWFyZ2luVG9wOiAwfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZW8uZ2V0KCduZW8taGVsaXgtMScpLnN0b3JlLnNvcnRlcnMgPSBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkgOiAnY291bnRyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdBU0MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnR5cGUgICAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ1JlY292ZXJlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpblRvcDogMH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbUxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmVvLmdldCgnbmVvLWhlbGl4LTEnKS5zdG9yZS5zb3J0ZXJzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5IDogJ3JlY292ZXJlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdBU0MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIGxheW91dDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAgICAgICAgICAgICBpdGVtcyA6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBudHlwZSAgICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnQ2FzZXMgdG9kYXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Ub3A6ICcwJ30sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbUxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmVvLmdldCgnbmVvLWhlbGl4LTEnKS5zdG9yZS5zb3J0ZXJzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5IDogJ3RvZGF5Q2FzZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnREVTQydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudHlwZSAgICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnRGVhdGhzIHRvZGF5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW46ICcxMHB4JywgbWFyZ2luQm90dG9tOiAnMTBweCcsIG1hcmdpblRvcDogMH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbUxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmVvLmdldCgnbmVvLWhlbGl4LTEnKS5zdG9yZS5zb3J0ZXJzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5IDogJ3RvZGF5RGVhdGhzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ0RFU0MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnR5cGUgICAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0NyaXRpY2FsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Cb3R0b206ICc0M3B4JywgbWFyZ2luVG9wOiAwfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZW8uZ2V0KCduZW8taGVsaXgtMScpLnN0b3JlLnNvcnRlcnMgPSBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkgOiAnY3JpdGljYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnREVTQydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGUgICAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICBpY29uQ2xzICA6ICdmYSBmYS1zcXVhcmUnLFxuICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0ZvbGxvdyBTZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge30sXG4gICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVsaXggPSBOZW8uZ2V0KCduZW8taGVsaXgtMScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWUuaWNvbkNscyA9PT0gJ2ZhIGZhLXNxdWFyZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxpeC5mb2xsb3dTZWxlY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLmljb25DbHMgPSAnZmEgZmEtY2hlY2stc3F1YXJlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVsaXguZm9sbG93U2VsZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUuaWNvbkNscyA9ICdmYSBmYS1zcXVhcmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4gICAgICA6ICcyMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTBweCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGU6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgdGV4dCA6IFtcbiAgICAgICAgICAgICAgICAgICAgJzxiPk5hdmlnYXRpb24gQ29uY2VwdDwvYj4nLFxuICAgICAgICAgICAgICAgICAgICAnPHA+Q2xpY2sgb24gYW4gaXRlbSB0byBzZWxlY3QgaXQuIEFmdGVyd2FyZHMgeW91IGNhbiB1c2UgdGhlIEFycm93IEtleXMgdG8gd2FsayB0aHJvdWdoIHRoZSBpdGVtcy48L3A+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxwPkhpdCB0aGUgU3BhY2UgS2V5IHRvIHJvdGF0ZSB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0gdG8gdGhlIGZyb250LjwvcD4nLFxuICAgICAgICAgICAgICAgICAgICAnPHA+SGl0IHRoZSBFbnRlciBLZXkgdG8gZXhwYW5kIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbS48L3A+J1xuICAgICAgICAgICAgICAgIF0uam9pbignJyksXG5cbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzIzMjMyJyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgICAgICAgICAgOiAnI2RkZCcsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplICAgICAgIDogJzEzcHgnLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4gICAgICAgICA6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZyAgICAgICAgOiAnMTBweCcsXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2UgICAgIDogJ25vcm1hbCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGU6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgY2xzICA6IFsnbmVvLWxpbmstY29sb3InXSxcbiAgICAgICAgICAgICAgICB0ZXh0IDogW1xuICAgICAgICAgICAgICAgICAgICAnPGI+QXR0cmlidXRpb248L2I+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxwPkFwcCBjcmVhdGVkIHdpdGggPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9uZW9tanMvbmVvXCI+bmVvLm1qczwvYT4uPC9wPicsXG4gICAgICAgICAgICAgICAgICAgICc8cD5EYXRhIHByb3ZpZGVkIGJ5IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGlzZWFzZS1zaC9BUElcIj5kaXNlYXNlLnNoL0FQSTwvYT4uPC9wPicsXG4gICAgICAgICAgICAgICAgICAgICc8cD5JY29ucyBtYWRlIGJ5IDxhIGhyZWY9XCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vYXV0aG9ycy9mcmVlcGlrXCIgdGl0bGU9XCJGcmVlcGlrXCI+RnJlZXBpazwvYT4gZnJvbSA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL1wiIHRpdGxlPVwiRmxhdGljb25cIj4gd3d3LmZsYXRpY29uLmNvbTwvYT4uPC9wPidcbiAgICAgICAgICAgICAgICBdLmpvaW4oJycpLFxuXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzMyMzIzMicsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yICAgICAgICAgIDogJyNkZGQnLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZSAgICAgICA6ICcxM3B4JyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luICAgICAgICAgOiAnMTBweCcsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmcgICAgICAgIDogJzEwcHgnLFxuICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlICAgICA6ICdub3JtYWwnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfV1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgY29uc3QgbWUgID0gdGhpcyxcbiAgICAgICAgICAgICAgdXJsID0gJ2h0dHBzOi8vY29yb25hLmxtYW8ubmluamEvdjIvY291bnRyaWVzJztcblxuICAgICAgICBtZS5oZWxpeCA9IE5lby5jcmVhdGUoe1xuICAgICAgICAgICAgbW9kdWxlOiBDb3VudHJ5SGVsaXgsXG4gICAgICAgICAgICBpZCAgICA6ICduZW8taGVsaXgtMScsXG4gICAgICAgICAgICAuLi5tZS5oZWxpeENvbmZpZyB8fCB7fVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5pdGVtc1swXS5pdGVtcy5wdXNoKG1lLmhlbGl4KTtcblxuICAgICAgICBmZXRjaCh1cmwpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IG1lLmFkZFN0b3JlSXRlbXMoZGF0YSkpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdDYW7igJl0IGFjY2VzcyAnICsgdXJsLCBlcnIpKTtcblxuICAgICAgICBpZiAobWUuc2hvd0dpdEh1YlN0YXJCdXR0b24pIHtcbiAgICAgICAgICAgIG1lLm9uKCdtb3VudGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5hZGRTY3JpcHQoe1xuICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGVmZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNyYyAgOiAnaHR0cHM6Ly9idXR0b25zLmdpdGh1Yi5pby9idXR0b25zLmpzJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRTdG9yZUl0ZW1zKGRhdGEpIHtcbiAgICAgICAgdGhpcy5nZXRTdG9yZSgpLmRhdGEgPSBkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge05lby5kYXRhLlN0b3JlfVxuICAgICAqL1xuICAgIGdldFN0b3JlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1swXS5pdGVtc1sxXS5zdG9yZTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEhlbGl4TWFpbkNvbnRhaW5lcik7XG5cbmV4cG9ydCB7SGVsaXhNYWluQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBIZWxpeE1haW5Db250YWluZXIgIGZyb20gJy4vSGVsaXhNYWluQ29udGFpbmVyLm1qcyc7XG5cbmNvbnN0IG9uU3RhcnQgPSAoKSA9PiBOZW8uYXBwKHtcbiAgICBhcHBQYXRoIDogJ2V4YW1wbGVzL2NvbXBvbmVudC9jb3JvbmFIZWxpeC8nLFxuICAgIG1haW5WaWV3OiBIZWxpeE1haW5Db250YWluZXIsXG4gICAgbmFtZSAgICA6ICdUZXN0QXBwJ1xufSk7XG5cbmV4cG9ydCB7b25TdGFydCBhcyBvblN0YXJ0fTsiXSwic291cmNlUm9vdCI6IiJ9