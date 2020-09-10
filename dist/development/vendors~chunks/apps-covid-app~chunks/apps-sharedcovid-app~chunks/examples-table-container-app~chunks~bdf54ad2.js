self["webpackChunk"](["vendors~chunks/apps-covid-app~chunks/apps-sharedcovid-app~chunks/examples-table-container-app~chunks~bdf54ad2"],{

/***/ "./node_modules/neo.mjs/src/selection/table/RowModel.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/neo.mjs/src/selection/table/RowModel.mjs ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RowModel; });
/* harmony import */ var _Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model.mjs */ "./node_modules/neo.mjs/src/selection/Model.mjs");
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");



/**
 * @class Neo.selection.table.RowModel
 * @extends Neo.selection.Model
 */
class RowModel extends _Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.selection.table.RowModel'
         * @protected
         */
        className: 'Neo.selection.table.RowModel',
        /**
         * @member {String} ntype='selection-table-rowmodel'
         * @protected
         */
        ntype: 'selection-table-rowmodel',
        /**
         * @member {String} cls='selection-rowmodel'
         * @protected
         */
        cls: 'neo-selection-rowmodel'
    }}

    /**
     *
     */
    addDomListener() {
        let me           = this,
            view         = me.view,
            domListeners = view.domListeners;

        domListeners.push({
            click   : me.onRowClick,
            delegate: '.neo-table-row',
            scope   : me
        });

        view.domListeners = domListeners;
    }

    /**
     * Finds the matching table row for a given row index
     * @param {Number} index row index
     * @returns {String|null} The table row node id
     */
    getRowId(index) {
        if (index < 0 || this.view.store.getCount() < index) {
            return null;
        }

        return this.view.vdom.cn[0].cn[1].cn[index].id;
    }

    /**
     * Finds the matching table row for a given event path
     * @param {Object} path The event path
     * @returns {Object|null} The node containing the table row class or null
     * @protected
     */
    static getRowNode(path) {
        let i    = 0,
            len  = path.length,
            node = null;

        for (; i < len; i++) {
            if (path[i].cls.includes('neo-table-row')) {
                node = path[i];
            }
        }

        return node;
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownDown(data) {
        this.onNavKeyRow(data, 1);
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownUp(data) {
        this.onNavKeyRow(data, -1);
    }

    /**
     *
     * @param {Object} data
     * @param {Number} step
     */
    onNavKeyRow(data, step) {
        let me         = this,
            node       = RowModel.getRowNode(data.path),
            view       = me.view,
            store      = view.store,
            vdomNode   = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].findVdomChild(view.vdom, node.id),
            newIndex   = (vdomNode.index + step) % store.getCount(),
            parentNode = vdomNode.parentNode,
            id;

        while (newIndex < 0) {
            newIndex += store.getCount();
        }

        id = parentNode.cn[newIndex].id;

        if (id) {
            me.select(id);
            view.focus(id);

            view.fire('select', {
                record: store.getAt(newIndex)
            });
        }
    }

    /**
     *
     * @param {Object} data
     */
    onRowClick(data) {
        let me   = this,
            node = RowModel.getRowNode(data.path),
            id   = node && node.id,
            view = me.view;

        if (id) {
            me.toggleSelection(id);

            view.fire(me.isSelected(id) ? 'select' : 'deselect', {
                record: view.store.getAt(_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].findVdomChild(view.vdom, id).index)
            });
        }
    }

    /**
     *
     * @param {Neo.component.Base} component
     */
    register(component) {
        super.register(component);

        let me   = this,
            id   = me.id,
            view = me.view;

        if (view.keys) {
            view.keys._keys.push({
                fn   : 'onKeyDownDown',
                key  : 'Down',
                scope: id
            }, {
                fn   : 'onKeyDownUp',
                key  : 'Up',
                scope: id
            });
        }
    }

    /**
     *
     */
    unregister() {
        let me   = this,
            id   = me.id,
            view = me.view;

        if (view.keys) {
            view.keys.removeKeys([{
                fn   : 'onKeyDownDown',
                key  : 'Down',
                scope: id
            }, {
                fn   : 'onKeyDownUp',
                key  : 'Up',
                scope: id
            }]);
        }

        super.unregister();
    }
}

Neo.applyClassConfig(RowModel);



/***/ }),

/***/ "./node_modules/neo.mjs/src/table/Container.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/table/Container.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
/* harmony import */ var _container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ClassSystem.mjs */ "./node_modules/neo.mjs/src/util/ClassSystem.mjs");
/* harmony import */ var _util_Css_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Css.mjs */ "./node_modules/neo.mjs/src/util/Css.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _selection_table_RowModel_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../selection/table/RowModel.mjs */ "./node_modules/neo.mjs/src/selection/table/RowModel.mjs");
/* harmony import */ var _data_Store_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");
/* harmony import */ var _View_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./View.mjs */ "./node_modules/neo.mjs/src/table/View.mjs");
/* harmony import */ var _header_export_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/_export.mjs */ "./node_modules/neo.mjs/src/table/header/_export.mjs");









/**
 * @class Neo.table.Container
 * @extends Neo.container.Base
 */
class Container extends _container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.table.Container'
         * @protected
         */
        className: 'Neo.table.Container',
        /**
         * @member {String} ntype='table-container'
         * @protected
         */
        ntype: 'table-container',
        /**
         * todo: testing config, remove when Stores are ready
         * @member {Number} amountRows=20
         */
        amountRows: 20,
        /**
         * Default configs for each column
         * @member {Object} columnDefaults=null
         */
        columnDefaults: null,
        /**
         * todo: testing config, remove when Stores are ready
         * @member {Boolean} createRandomData=false
         */
        createRandomData: false,
        /**
         * @member {Array} cls=['neo-table-container']
         */
        cls: ['neo-table-container'],
        /**
         * @member {Array} columns_=[]
         */
        columns_: [],
        /**
         * Configs for Neo.table.header.Toolbar
         * @member {Object|null} [headerToolbarConfig=null]
         */
        headerToolbarConfig: null,
        /**
         * @member {String|null} headerToolbarId_=null
         */
        headerToolbarId_: null,
        /**
         * Additional used keys for the selection model
         * @member {Object} keys
         */
        keys: {},
        /**
         * @member {String} layout='base'
         */
        layout: 'base',
        /**
         * @member {Boolean} scrollbarsCssApplied=false
         * @protected
         */
        scrollbarsCssApplied: false,
        /**
         * @member {Neo.selection.Model} selectionModel_=null
         */
        selectionModel_: null,
        /**
         * @member {Boolean} showHeaderFilters_=false
         */
        showHeaderFilters_: false,
        /**
         * @member {Neo.data.Store} store_=null
         */
        store_: null,
        /**
         * todo: only works for chrome & safari -> add a check
         * @member {Boolean} useCustomScrollbars_=true
         */
        useCustomScrollbars_: true,
        /**
         * Configs for Neo.table.View
         * @member {Object|null} [viewConfig=null]
         */
        viewConfig: null,
        /**
         * @member {String|null} viewId_=null
         * @protected
         */
        viewId_: null,
        /**
         * @member {Array|null} items=null
         * @protected
         */
        items: null,
        /**
         * @member {Object} _vdom={cls: ['neo-table-wrapper'],cn : [{tag: 'table',cn : []}]}
         */
        _vdom: {
            cls: ['neo-table-wrapper'],
            cn : [{
                tag: 'table',
                cn : []
            }]
        }
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        me.headerToolbarId = Neo.getId('table-header-toolbar');
        me.viewId          = Neo.getId('table-view');

        me.items = [{
            module           : _header_export_mjs__WEBPACK_IMPORTED_MODULE_7__["Toolbar"],
            id               : me.headerToolbarId,
            showHeaderFilters: me.showHeaderFilters,
            ...me.headerToolbarConfig || {}
        }, {
            module     : _View_mjs__WEBPACK_IMPORTED_MODULE_6__["default"],
            containerId: me.id,
            id         : me.viewId,
            store      : me.store,
            ...me.viewConfig || {}
        }];

        me.vdom.id = me.id + 'wrapper';

        me.createColumns(me.columns);
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        if (me.selectionModel) {
            me.selectionModel.register(me);
        }

        if (me.createRandomData) {
            // todo: if mounting apply after mount
            setTimeout(() => {
                me.createRandomViewData(me.amountRows);
            }, 50);
        }
    }

    /**
     * Triggered after the selectionModel config got changed
     * @param {Neo.selection.Model} value
     * @param {Neo.selection.Model} oldValue
     * @protected
     */
    afterSetSelectionModel(value, oldValue) {
        if (this.rendered) {
            value.register(this);
        }
    }

    /**
     * Triggered after the showHeaderFilters config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetShowHeaderFilters(value, oldValue) {
        if (oldValue !== undefined) {
            Neo.getComponent(this.headerToolbarId).showHeaderFilters = value;
        }
    }

    /**
     * Triggered after the useCustomScrollbars config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetUseCustomScrollbars(value, oldValue) {
        if (value === true) {
            this.vdom.cls = _util_Array_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].union(this.vdom.cls, ['neo-use-custom-scrollbar']);
        }
    }

    /**
     * @protected
     */
    applyCustomScrollbarsCss() {
        let me       = this,
            cssRules = [];

        if (me.dockLeftMargin) {
            cssRules.push('#' + me.id + 'wrapper' + '::-webkit-scrollbar-track:horizontal {margin-left: ' + me.dockLeftMargin + 'px;}');
        }

        if (me.dockRightMargin) {
            cssRules.push('#' + me.id + 'wrapper' + '::-webkit-scrollbar-track:horizontal {margin-right: ' + me.dockRightMargin + 'px;}');
        }
        if (cssRules.length > 0) {
            _util_Css_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].insertRules(cssRules);
        }

        me.scrollbarsCssApplied = true;
    }

    /**
     * Triggered before the columns config gets changed.
     * @param {Array} value
     * @param {Array} oldValue
     * @protected
     */
    beforeSetColumns(value, oldValue) {
        if (this.configsApplied) {
            return this.createColumns(value);
        }

        return value;
    }

    /**
     * Triggered before the headerToolbarId config gets changed.
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    beforeSetHeaderToolbarId(value, oldValue) {
        return value ? value : oldValue;
    }

    /**
     * Triggered before the selectionModel config gets changed.
     * @param {Neo.selection.Model} value
     * @param {Neo.selection.Model} oldValue
     * @protected
     */
    beforeSetSelectionModel(value, oldValue) {
        if (oldValue) {
            oldValue.destroy();
        }

        return _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].beforeSetInstance(value, _selection_table_RowModel_mjs__WEBPACK_IMPORTED_MODULE_4__["default"]);
    }

    /**
     * Triggered before the store config gets changed.
     * @param {Neo.data.Store} value
     * @param {Neo.data.Store} oldValue
     * @protected
     */
    beforeSetStore(value, oldValue) {
        if (oldValue) {
            oldValue.destroy();
        }

        let me = this;

        value = _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].beforeSetInstance(value, _data_Store_mjs__WEBPACK_IMPORTED_MODULE_5__["default"], {
            listeners: {
                filter      : me.onStoreFilter,
                load        : me.onStoreLoad,
                recordChange: me.onStoreRecordChange,
                scope       : me
            }
        });

        // in case we dynamically change the store, the new needs to get the new reference
        if (me.view) {
            me.view.store = value;
        }

        return value;
    }

    /**
     * Triggered before the viewId config gets changed.
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    beforeSetViewId(value, oldValue) {
        return value ? value : oldValue;
    }

    /**
     *
     * @param columns
     * @returns {*}
     */
    createColumns(columns) {
        let me             = this,
            columnDefaults = me.columnDefaults,
            sorters        = me.store.sorters;

        if (!columns || !columns.length) {
            Neo.logError('Attempting to create a table.Container without defined columns', me.id);
        }

        columns.forEach(column => {
            if (column.dock && !column.width) {
                Neo.logError('Attempting to create a docked column without a defined width', column, me.id);
            }

            if (columnDefaults) {
                Neo.assignDefaults(column, columnDefaults);
            }

            if (sorters && sorters[0]) {
                if (column.dataField === sorters[0].property) {
                    column.isSorted = sorters[0].direction;
                }
            }

            column.listeners = {
                sort : me.onSortColumn,
                scope: me
            };
        });

        me.items[0].items = columns;

        return columns;
    }

    /**
     *
     * @param {Number} countRows
     */
    createRandomViewData(countRows) {
        this.loadData(countRows);
    }

    /**
     * @param {Array} inputData
     */
    createViewData(inputData) {
        let me    = this,
            items = me.items;

        items[1].createViewData(inputData); // todo: save a reference to the view & headerContainer

        if (me.useCustomScrollbars && me.scrollbarsCssApplied === false) {
            me.applyCustomScrollbarsCss();
        }

        me.items = items;
    }

    /**
     * @override
     * @returns {*}
     */
    getVdomRoot() {
        return this.vdom.cn[0];
    }

    /**
     * @override
     * @returns {Neo.vdom.VNode}
     */
    getVnodeRoot() {
        return this.vnode.childNodes[0];
    }

    /**
     *
     * @param {Number} countRows
     */
    loadData(countRows) {
        let me           = this,
            columns      = me.items[0].items,
            countColumns = columns.length;

        Neo.manager.Store.createRandomData([countColumns, countRows]).then(data => {
            me.createViewData(data);
        }).catch(err => {
            console.log('Error attempting to call createRandomViewData', err, me);
        });
    }

    /**
     *
     * @param {Object} opts
     * @param {String} opts.direction
     * @param {String} opts.property
     * @protected
     */
    onSortColumn(opts) {
        let me = this;

        me.store.sort(opts);
        me.removeSortingCss(opts.property);
        me.onStoreLoad(me.store.items);
    }

    /**
     *
     */
    onStoreFilter() {
        this.onStoreLoad(this.store.items);
    }

    /**
     *
     * @param {Array} data
     * @protected
     */
    onStoreLoad(data) {
        let me = this,
            listenerId;

        if (me.rendered) {
            me.createViewData(data);

            if (me.store.sorters.length < 1) {
                me.removeSortingCss();
            }
        } else {
            listenerId = me.on('rendered', () => {
                me.un('rendered', listenerId);
                setTimeout(() => {
                    me.createViewData(data);
                }, 50);
            });
        }
    }

    /**
     * Gets triggered after changing the value of a record field.
     * E.g. myRecord.foo = 'bar';
     * @param {Object} opts
     * @param {String} opts.field The name of the field which got changed
     * @param {Neo.data.Model} opts.model The model instance of the changed record
     * @param {*} opts.oldValue
     * @param {Object} opts.record
     * @param {*} opts.value
     */
    onStoreRecordChange(opts) {
        Neo.getComponent(this.viewId).onStoreRecordChange(opts);
    }

    /**
     *
     * @param {String} dataField
     * @protected
     */
    removeSortingCss(dataField) {
        this.items[0].items.forEach(column => {
            if (column.dataField !== dataField) {
                column.removeSortingCss();
            }
        });
    }
}

Neo.applyClassConfig(Container);



/***/ }),

/***/ "./node_modules/neo.mjs/src/table/View.mjs":
/*!*************************************************!*\
  !*** ./node_modules/neo.mjs/src/table/View.mjs ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View; });
/* harmony import */ var _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class Neo.table.View
 * @extends Neo.component.Base
 */
class View extends _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.table.View'
         * @protected
         */
        className: 'Neo.table.View',
        /**
         * @member {String} ntype='table-view'
         * @protected
         */
        ntype: 'table-view',
        /**
         * @member {Array} cls=['neo-table-view']
         */
        cls: ['neo-table-view'],
        /**
         * @member {String|null} containerId=null
         * @protected
         */
        containerId: null,
        /**
         * @member {Object} recordVnodeMap={}
         */
        recordVnodeMap: {},
        /**
         * @member {Neo.data.Store|null} store=null
         */
        store: null,
        /**
         * @member {Boolean} useRowRecordIds=true
         */
        useRowRecordIds: true,
        /**
         * @member {Object} _vdom={tag: 'tbody', cn : []}
         */
        _vdom: {
            tag: 'tbody',
            cn : []
        }
    }}

    /**
     * @param {Array} inputData
     */
    createViewData(inputData) {
        let me         = this,
            amountRows = inputData.length,
            container  = Neo.getComponent(me.parentId),
            hasStore   = container.store.model, // todo: remove as soon as all tables use stores (examples table)
            columns    = container.items[0].items,
            colCount   = columns.length,
            data       = [],
            i          = 0,
            vdom       = me.vdom,
            cellCls, cellId, config, column, dockLeftMargin, dockRightMargin, id, index, j, rendererOutput, rendererValue, selectedRows, trCls;

        me.recordVnodeMap = {}; // remove old data

        // console.log('createViewData', me.id, inputData);

        if (container.selectionModel.ntype === 'selection-table-rowmodel') {
            selectedRows = container.selectionModel.items || [];
        }

        for (; i < amountRows; i++) {
            if (me.useRowRecordIds) {
                id = me.id + '-tr-' + inputData[i][me.store.keyProperty];
            } else {
                id = vdom.cn[i] && vdom.cn[i].id || Neo.getId('tr');
            }

            me.recordVnodeMap[id] = i;

            trCls = me.getTrClass(inputData[i], i);

            if (selectedRows && selectedRows.includes(id)) {
                trCls.push('neo-selected');
            }

            data.push({
                tag     : 'tr',
                id      : id,
                cls     : trCls,
                cn      : [],
                tabIndex: '-1'
            });

            dockLeftMargin  = 0;
            dockRightMargin = 0;

            j = 0;

            for (; j < colCount; j++) {
                column         = columns[j];
                rendererValue  = inputData[i][column.dataField];

                if (rendererValue === undefined) {
                    rendererValue = '';
                }

                rendererOutput = column.renderer.call(column.rendererScope || container, {
                    dataField: column.dataField,
                    index    : i,
                    record   : inputData[i],
                    value    : rendererValue
                });

                cellCls = rendererOutput.cls || ['neo-table-cell'];

                if (column.align !== 'left') {
                    cellCls.push('neo-' + column.align);
                }

                if (!Neo.isObject(rendererOutput)) {
                    rendererOutput = {
                        cls : cellCls,
                        html: rendererOutput.toString()
                    };
                }

                // todo: remove the if part as soon as all tables use stores (examples table)
                if (hasStore) {
                    cellId = me.getCellId(inputData[i], column.dataField);
                } else {
                    cellId = vdom.cn[i] && vdom.cn[i].cn[j] && vdom.cn[i].cn[j].id || Neo.getId('td');
                }

                config = {
                    tag      : 'td',
                    id       : cellId,
                    cls      : rendererOutput.cls   || ['neo-table-cell'],
                    innerHTML: rendererOutput.html  || '',
                    style    : rendererOutput.style || {},
                    tabIndex : '-1'
                };

                if (column.dock) {
                    config.cls = ['neo-locked', ...config.cls || []];

                    if (column.dock === 'left') {
                        config.style.left = dockLeftMargin + 'px';
                        dockLeftMargin += (column.width + 1); // todo: borders fix
                    }
                }

                data[i].cn.push(config);
            }

            j = 0;

            for (; j < colCount; j++) {
                index  = colCount - j -1;
                column = columns[index];

                if (column.dock === 'right') {
                    data[i].cn[index].style.right = dockRightMargin + 'px';
                    dockRightMargin += (column.width + 1); // todo: borders fix
                }
            }
        }

        vdom.cn = data;

        container.dockLeftMargin  = dockLeftMargin;
        container.dockRightMargin = dockRightMargin;

        me.vdom = vdom;
    }

    /**
     *
     * @param {Boolean} updateParentVdom
     * @param {Boolean} silent
     */
    destroy(updateParentVdom, silent) {
        this.store = null;
        super.destroy(updateParentVdom, silent);
    }

    /**
     *
     * @param {Object} record
     * @param {String} dataField
     * @returns {String}
     */
    getCellId(record, dataField) {
        return this.id + '__' + record[this.store.keyProperty] + '__' + dataField;
    }

    /**
     * Override this method to apply custom CSS rules to table rows
     * @param {Object} record
     * @param {Number} rowIndex
     * @returns {String[]}
     */
    getTrClass(record, rowIndex) {
        return ['neo-table-row'];
    }

    /**
     * Gets triggered after changing the value of a record field.
     * E.g. myRecord.foo = 'bar';
     * @param {Object} opts
     * @param {String} opts.field The name of the field which got changed
     * @param {Neo.data.Model} opts.model The model instance of the changed record
     * @param {*} opts.oldValue
     * @param {Object} opts.record
     * @param {*} opts.value
     */
    onStoreRecordChange(opts) {
        let me       = this,
            cellId   = me.getCellId(opts.record, opts.field),
            cellNode = me.getVdomChild(cellId);

        cellNode.innerHTML = opts.value; // keep the vdom in sync

        Neo.currentWorker.promiseMessage('main', {
            action: 'updateDom',
            deltas: [{
                id       : cellId,
                innerHTML: opts.value
            }]
        });
    }
}

Neo.applyClassConfig(View);



/***/ }),

/***/ "./node_modules/neo.mjs/src/table/header/Button.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/neo.mjs/src/table/header/Button.mjs ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var _button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../button/Base.mjs */ "./node_modules/neo.mjs/src/button/Base.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../form/field/Text.mjs */ "./node_modules/neo.mjs/src/form/field/Text.mjs");




/**
 * @class Neo.table.header.Button
 * @extends Neo.button.Base
 */
class Button extends _button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * Valid values for align
         * @member {String[]} alignValues: ['left', 'center', 'right']
         * @protected
         * @static
         */
        alignValues: ['left', 'center', 'right']
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.table.header.Button'
         * @protected
         */
        className: 'Neo.table.header.Button',
        /**
         * @member {String} ntype='table-header-button'
         * @protected
         */
        ntype: 'table-header-button',
        /**
         * Alignment of the matching table cells. Valid values are left, center, right
         * @member {String} align_='left'
         */
        align_: 'left',
        /**
         * @member {Array} cls=['neo-table-header-button']
         */
        cls: ['neo-table-header-button'],
        /**
         * @member {String|null} dataField=null
         */
        dataField: null,
        /**
         * Sort direction when clicking on an unsorted button
         * @member {String} defaultSortDirection='ASC'
         */
        defaultSortDirection: 'ASC',
        /**
         * @member {Boolean} draggable_=true
         */
        draggable_: true,
        /**
         * @member {Object} editorConfig=null
         */
        editorConfig: null,
        /**
         * @member {Object} filterConfig=null
         */
        filterConfig: null,
        /**
         * @member {Neo.form.field.Base|null} filterField=null
         * @protected
         */
        filterField: null,
        /**
         * @member {String} iconCls='fa fa-arrow-circle-up'
         */
        iconCls: 'fa fa-arrow-circle-up',
        /**
         * @member {String} iconPosition='right'
         */
        iconPosition: 'right',
        /**
         * 'ASC', 'DESC' or null
         * @member {String|null} isSorted_=null
         * @protected
         */
        isSorted_: null,
        /**
         * Scope to execute the column renderer.
         * Defaults to the matching table.Container
         * @member {Neo.core.Base|null} rendererScope=null
         */
        rendererScope: null,
        /**
         * @member {Boolean} showHeaderFilter_=false
         */
        showHeaderFilter_: false,
        /**
         * @member {String} _vdom
         */
        _vdom: {
            tag: 'th',
            cn : [{
                tag: 'button',
                cn : [{
                    tag: 'span',
                    cls: ['neo-button-glyph']
                },{
                    tag: 'span',
                    cls: ['neo-button-text']
                }]
            }]
        }
    }}

    /**
     * Specify a different vdom root if needed to apply the top level style attributes on a different level.
     * Make sure to use getVnodeRoot() as well, to keep the vdom & vnode trees in sync.
     * @returns {Object} The new vdom root
     */
    getVdomRoot() {
        return this.vdom.cn[0];
    }

    /**
     * Specify a different vnode root if needed to apply the top level style attributes on a different level.
     * Make sure to use getVdomRoot() as well, to keep the vdom & vnode trees in sync.
     * @returns {Object} The new vnode root
     */
    getVnodeRoot() {
        return this.vnode.childNodes[0];
    }

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me        = this,
            listeners = {
                click: me.onButtonClick,
                scope: me
            };

        if (me.draggable) {
            Object.assign(listeners, {
                dragend  : me.onDragEnd,
                dragenter: me.onDragEnter,
                dragleave: me.onDragLeave,
                dragover : me.onDragOver,
                dragstart: me.onDragStart,
                drop     : me.onDrop,
            });
        }

        me.domListeners = listeners;
    }

    /**
     * Triggered after the draggable config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetDraggable(value, oldValue) {
        let me   = this,
            vdom = me.vdom;

        if (value === true) {
            me.getVdomRoot().draggable = true;
        } else {
            delete me.getVdomRoot().draggable;
        }

        me.vdom = vdom;
    }

    /**
     * Triggered after the isSorted config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetIsSorted(value, oldValue) {
        let me        = this,
            cls       = me.cls,
            container = me.up('table-container');

        switch(value) {
            case null:
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, 'neo-sort-hidden');
                break;
            case 'ASC':
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, 'neo-sort-desc');
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, 'neo-sort-hidden');
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, 'neo-sort-asc');
                break;
            case 'DESC':
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, 'neo-sort-asc');
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, 'neo-sort-hidden');
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, 'neo-sort-desc');
                break;
        }

        me.cls = cls;

        // testing check until all example tables have a store
        if (!container || !container.store) {
            return;
        }

        if (me.mounted) {
            me.fire('sort', {
                direction: value,
                property : me.dataField
            });
        }
    }

    /**
     * Triggered after the showHeaderFilter config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetShowHeaderFilter(value, oldValue) {
        let me   = this,
            vdom = me.vdom;

        if (value) {
            if (!me.filterField) {
                me.filterField = Neo.create({
                    module   : _form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
                    flag     : 'filter-field',
                    hideLabel: true,
                    parentId : me.id,

                    listeners: {
                        change        : me.changeFilterValue,
                        operatorChange: me.changeFilterOperator,
                        scope         : me
                    },

                    style: {
                        marginLeft : '.5em',
                        marginRight: '.5em'
                    },
                    ...me.editorConfig || {}
                });

                me.vdom.cn.push(me.filterField.vdom);
            } else {
                delete me.filterField.vdom.removeDom;
            }
        } else if (me.filterField) {
            me.filterField.vdom.removeDom = true;
        }

        me.vdom = vdom;
    }

    /**
     * Triggered before the align config gets changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    beforeSetAlign(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'align', 'alignValues');
    }

    /**
     *
     */
    destroy(...args) {
        if (this.filterField) {
            this.filterField.destroy();
        }

        super.destroy(...args);
    }

    /**
     * @protected
     */
    onButtonClick() {
        let me = this,
            map;

        if (me.defaultSortDirection === 'DESC') {
            map = {
                ASC : null,
                DESC: 'ASC',
                null: 'DESC'
            };
        } else {
            map = {
                ASC : 'DESC',
                DESC: null,
                null: 'ASC'
            };
        }

        me.isSorted = map[me.isSorted + ''];
    }

    /**
     * @protected
     */
    onDragEnd() {
        let me    = this,
            style = me.style;

        delete style.opacity;
        me.style = style;
    }

    /**
     * @protected
     */
    onDragEnter() {
        let me  = this,
            cls = me.cls;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, 'neo-drag-over');
        me.cls = cls;
    }

    /**
     * @protected
     */
    onDragLeave() {
        let me  = this,
            cls = me.cls;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, 'neo-drag-over');
        me.cls = cls;
    }

    /**
     *
     * @param {Object} event
     */
    onDragOver(event) {
        //console.log('onDragOver', event);
    }

    /**
     * @protected
     */
    onDragStart() {
        let me    = this,
            style = me.style;

        style.opacity = 0.4;
        me.style = style;
    }

    /**
     *
     * @param {Object} data
     */
    onDrop(data) {
        let me             = this,
            headerToolbar  = Neo.getComponent(me.parentId),
            tableContainer = Neo.getComponent(headerToolbar.parentId);

        delete Neo.getComponent(data.srcId).getVdomRoot().style.opacity;

        me.onDragLeave();
        headerToolbar.switchItems(me.id, data.srcId);
        tableContainer.createViewData(tableContainer.store.data);
    }

    /**
     *
     * @param {Object} data
     */
    changeFilterOperator(data) {
        let me             = this,
            tableContainer = me.up('table-container'),
            store          = tableContainer && tableContainer.store,
            operator       = data.value,
            filter, filters;

        if (store) {
            filter = store.getFilter(me.dataField);

            if (!filter) {
                filters = store.filters;

                filters.push({
                    property: me.dataField,
                    operator: operator,
                    value   : null,
                    ...me.filterConfig || {}
                });

                store.filters = filters;
            } else {
                filter.operator = operator;
            }
        }
    }

    /**
     *
     * @param {Object} data
     */
    changeFilterValue(data) {
        let me             = this,
            tableContainer = me.up('table-container'),
            store          = tableContainer && tableContainer.store,
            value          = data.value,
            field, filter, filters, model;

        if (store) {
            filter = store.getFilter(me.dataField);
            model  = store.model;
            field  = model && model.getField(me.dataField);

            if (value && field.type.toLowerCase() === 'date') {
                value = new Date(value);
            }

            if (!filter) {
                filters = store.filters;

                filters.push({
                    property: me.dataField,
                    operator: 'like',
                    value   : value,
                    ...me.filterConfig || {}
                });

                store.filters = filters;
            } else {
                filter.value = value;
            }
        }
    }

    /**
     * @protected
     */
    removeSortingCss() {
        let me  = this,
            cls = me.cls;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, 'neo-sort-hidden');

        me.cls       = cls;
        me._isSorted = null;
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.dataField
     * @param {Number} data.index
     * @param {Object} data.record
     * @param {Number|String} data.value
     * @returns {*}
     */
    renderer(data) {
        return data.value;
    }
}

Neo.applyClassConfig(Button);



/***/ }),

/***/ "./node_modules/neo.mjs/src/table/header/Toolbar.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/neo.mjs/src/table/header/Toolbar.mjs ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toolbar; });
/* harmony import */ var _container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../container/Toolbar.mjs */ "./node_modules/neo.mjs/src/container/Toolbar.mjs");


/**
 * @class Neo.table.header.Toolbar
 * @extends Neo.container.Toolbar
 */
class Toolbar extends _container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.table.header.Toolbar'
         * @protected
         */
        className: 'Neo.table.header.Toolbar',
        /**
         * @member {String} ntype='table-header-toolbar'
         * @protected
         */
        ntype: 'table-header-toolbar',
        /**
         * @member {Array} cls=['table-header-toolbar']
         */
        cls: ['table-header-toolbar'],
        /**
         * @member {String} layout='base'
         */
        layout: 'base',
        /**
         * @member {Object} itemDefaults={ntype : 'table-header-button'}
         */
        itemDefaults: {
            ntype : 'table-header-button'
        },
        /**
         * @member {Boolean} showHeaderFilters_=false
         */
        showHeaderFilters_: false,
        /**
         * @member {Object} _vdom={tag: 'thead',cn : [{tag: 'tr',cn : []}]}
         */
        _vdom: {
            tag: 'thead',
            cn : [{
                tag: 'tr',
                cn : []
            }]
        }
    }}

    /**
     * Triggered after the showHeaderFilters config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetShowHeaderFilters(value, oldValue) {
        if (oldValue !== undefined) {
            let me   = this,
                vdom = me.vdom;

            me.items.forEach(item => {
                item.setSilent({
                    showHeaderFilter: value
                });
            });

            me.vdom = vdom;
        }
    }

    /**
     *
     * @param {String} dock
     * @returns {String} layoutConfig
     * @override
     */
    getLayoutConfig(dock) {
        return 'base';
    }

    /**
     * Specify a different vdom items root if needed (useful in case this container uses a wrapper node).
     * @returns {Object} The new vdom items root
     */
    getVdomItemsRoot() {
        return this.vdom.cn[0].cn;
    }

    /**
     * Specify a different vdom root if needed to apply the top level style attributes on a different level.
     * Make sure to use getVnodeRoot() as well, to keep the vdom & vnode trees in sync.
     * @returns {Object} The new vdom root
     */
    getVdomRoot() {
        return this.vdom.cn[0];
    }

    /**
     * Specify a different vnode root if needed to apply the top level style attributes on a different level.
     * Make sure to use getVdomRoot() as well, to keep the vdom & vnode trees in sync.
     * @returns {Object} The new vnode root
     */
    getVnodeRoot() {
        return this.vnode.childNodes[0];
    }

    /**
     *
     */
    createItems() {
        let me = this;

        me.itemDefaults.showHeaderFilter = me.showHeaderFilters;

        super.createItems();

        let dockLeftWidth  = 0,
            dockRightWidth = 0,
            items          = me.items,
            len            = items.length,
            vdom           = me.vdom,
            style;

        items.forEach((item, index) => {
            style = item.wrapperStyle;

            // todo: only add px if number
            if (item.maxWidth) {style.maxWidth = item.maxWidth + 'px'}
            if (item.minWidth) {style.minWidth = item.minWidth + 'px'}
            if (item.width)    {style.width    = item.width + 'px'}

            if (item.dock) {
                item.vdom.cls = ['neo-locked'];

                if (item.dock === 'left') {
                    style.left = dockLeftWidth + 'px';
                }

                dockLeftWidth += (item.width + 1); // todo: borders fix
            } else {
                item.vdom.cls = []; // remove the button cls from the th tag
            }

            item.wrapperStyle = style;

            // inverse loop direction
            item = items[len - index -1];

            if (item.dock === 'right') {
                style = item.wrapperStyle;
                style.right = dockRightWidth + 'px';

                item.wrapperStyle = style;

                dockRightWidth += (item.width + 1); // todo: borders fix
            }
        });

        me.vdom = vdom;
    }
}

Neo.applyClassConfig(Toolbar);



/***/ }),

/***/ "./node_modules/neo.mjs/src/table/header/_export.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/neo.mjs/src/table/header/_export.mjs ***!
  \***********************************************************/
/*! exports provided: Button, Toolbar */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.mjs */ "./node_modules/neo.mjs/src/table/header/Button.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Toolbar_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toolbar.mjs */ "./node_modules/neo.mjs/src/table/header/Toolbar.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return _Toolbar_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]; });






/***/ }),

/***/ "./node_modules/neo.mjs/src/util/Css.mjs":
/*!***********************************************!*\
  !*** ./node_modules/neo.mjs/src/util/Css.mjs ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.util.Css
 * @extends Neo.core.Base
 */
class Css extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.Css'
         * @protected
         */
        className: 'Neo.util.Css'
    }}

    /**
     *
     * @param {Array} rules
     */
    static insertRules(rules) {
        Neo.main.addon.Stylesheet.insertCssRules({
            rules: rules
        }).then(function(data) {
            // console.log('inserted CSS rules', data);
        }).catch(function(err) {
            console.log('App: Got error attempting to insert CSS rules', err, rules);
        });
    }
}

Neo.applyClassConfig(Css);

/* harmony default export */ __webpack_exports__["default"] = (Css);

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvc2VsZWN0aW9uL3RhYmxlL1Jvd01vZGVsLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdGFibGUvQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdGFibGUvVmlldy5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3RhYmxlL2hlYWRlci9CdXR0b24ubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy90YWJsZS9oZWFkZXIvVG9vbGJhci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3RhYmxlL2hlYWRlci9fZXhwb3J0Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9Dc3MubWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvQztBQUNPOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrREFBSztBQUM1Qix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixpQkFBaUIsWUFBWTtBQUM3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QUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJDQUEyQzs7QUFFM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7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QUVBO0FBQ0EsZ0NBQWdDO0FBQ2hDLGdDQUFnQztBQUNoQyxnQ0FBZ0M7O0FBRWhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtEQUFrRDtBQUNsRCxhQUFhO0FBQ2IsbUNBQW1DO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1EQUFtRDtBQUNuRDtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2pLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQztBQUNDOzs7Ozs7Ozs7Ozs7OztBQ0RwQztBQUFBO0FBQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixzREFBSTtBQUN0Qix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRWUsa0VBQUcsRSIsImZpbGUiOiJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzLXRhYmxlLWNvbnRhaW5lci1hcHB+Y2h1bmtzfmJkZjU0YWQyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGVsICAgIGZyb20gJy4uL01vZGVsLm1qcyc7XG5pbXBvcnQgVkRvbVV0aWwgZnJvbSAnLi4vLi4vdXRpbC9WRG9tLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5zZWxlY3Rpb24udGFibGUuUm93TW9kZWxcbiAqIEBleHRlbmRzIE5lby5zZWxlY3Rpb24uTW9kZWxcbiAqL1xuY2xhc3MgUm93TW9kZWwgZXh0ZW5kcyBNb2RlbCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5zZWxlY3Rpb24udGFibGUuUm93TW9kZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5zZWxlY3Rpb24udGFibGUuUm93TW9kZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nc2VsZWN0aW9uLXRhYmxlLXJvd21vZGVsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3NlbGVjdGlvbi10YWJsZS1yb3dtb2RlbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNscz0nc2VsZWN0aW9uLXJvd21vZGVsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6ICduZW8tc2VsZWN0aW9uLXJvd21vZGVsJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGFkZERvbUxpc3RlbmVyKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZpZXcgICAgICAgICA9IG1lLnZpZXcsXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSB2aWV3LmRvbUxpc3RlbmVycztcblxuICAgICAgICBkb21MaXN0ZW5lcnMucHVzaCh7XG4gICAgICAgICAgICBjbGljayAgIDogbWUub25Sb3dDbGljayxcbiAgICAgICAgICAgIGRlbGVnYXRlOiAnLm5lby10YWJsZS1yb3cnLFxuICAgICAgICAgICAgc2NvcGUgICA6IG1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZpZXcuZG9tTGlzdGVuZXJzID0gZG9tTGlzdGVuZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIHRoZSBtYXRjaGluZyB0YWJsZSByb3cgZm9yIGEgZ2l2ZW4gcm93IGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IHJvdyBpbmRleFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd8bnVsbH0gVGhlIHRhYmxlIHJvdyBub2RlIGlkXG4gICAgICovXG4gICAgZ2V0Um93SWQoaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCB0aGlzLnZpZXcuc3RvcmUuZ2V0Q291bnQoKSA8IGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnZpZXcudmRvbS5jblswXS5jblsxXS5jbltpbmRleF0uaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgdGhlIG1hdGNoaW5nIHRhYmxlIHJvdyBmb3IgYSBnaXZlbiBldmVudCBwYXRoXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhdGggVGhlIGV2ZW50IHBhdGhcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fG51bGx9IFRoZSBub2RlIGNvbnRhaW5pbmcgdGhlIHRhYmxlIHJvdyBjbGFzcyBvciBudWxsXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRSb3dOb2RlKHBhdGgpIHtcbiAgICAgICAgbGV0IGkgICAgPSAwLFxuICAgICAgICAgICAgbGVuICA9IHBhdGgubGVuZ3RoLFxuICAgICAgICAgICAgbm9kZSA9IG51bGw7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKHBhdGhbaV0uY2xzLmluY2x1ZGVzKCduZW8tdGFibGUtcm93JykpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gcGF0aFtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbktleURvd25Eb3duKGRhdGEpIHtcbiAgICAgICAgdGhpcy5vbk5hdktleVJvdyhkYXRhLCAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25LZXlEb3duVXAoZGF0YSkge1xuICAgICAgICB0aGlzLm9uTmF2S2V5Um93KGRhdGEsIC0xKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0ZXBcbiAgICAgKi9cbiAgICBvbk5hdktleVJvdyhkYXRhLCBzdGVwKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIG5vZGUgICAgICAgPSBSb3dNb2RlbC5nZXRSb3dOb2RlKGRhdGEucGF0aCksXG4gICAgICAgICAgICB2aWV3ICAgICAgID0gbWUudmlldyxcbiAgICAgICAgICAgIHN0b3JlICAgICAgPSB2aWV3LnN0b3JlLFxuICAgICAgICAgICAgdmRvbU5vZGUgICA9IFZEb21VdGlsLmZpbmRWZG9tQ2hpbGQodmlldy52ZG9tLCBub2RlLmlkKSxcbiAgICAgICAgICAgIG5ld0luZGV4ICAgPSAodmRvbU5vZGUuaW5kZXggKyBzdGVwKSAlIHN0b3JlLmdldENvdW50KCksXG4gICAgICAgICAgICBwYXJlbnROb2RlID0gdmRvbU5vZGUucGFyZW50Tm9kZSxcbiAgICAgICAgICAgIGlkO1xuXG4gICAgICAgIHdoaWxlIChuZXdJbmRleCA8IDApIHtcbiAgICAgICAgICAgIG5ld0luZGV4ICs9IHN0b3JlLmdldENvdW50KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZCA9IHBhcmVudE5vZGUuY25bbmV3SW5kZXhdLmlkO1xuXG4gICAgICAgIGlmIChpZCkge1xuICAgICAgICAgICAgbWUuc2VsZWN0KGlkKTtcbiAgICAgICAgICAgIHZpZXcuZm9jdXMoaWQpO1xuXG4gICAgICAgICAgICB2aWV3LmZpcmUoJ3NlbGVjdCcsIHtcbiAgICAgICAgICAgICAgICByZWNvcmQ6IHN0b3JlLmdldEF0KG5ld0luZGV4KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Sb3dDbGljayhkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIG5vZGUgPSBSb3dNb2RlbC5nZXRSb3dOb2RlKGRhdGEucGF0aCksXG4gICAgICAgICAgICBpZCAgID0gbm9kZSAmJiBub2RlLmlkLFxuICAgICAgICAgICAgdmlldyA9IG1lLnZpZXc7XG5cbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgICBtZS50b2dnbGVTZWxlY3Rpb24oaWQpO1xuXG4gICAgICAgICAgICB2aWV3LmZpcmUobWUuaXNTZWxlY3RlZChpZCkgPyAnc2VsZWN0JyA6ICdkZXNlbGVjdCcsIHtcbiAgICAgICAgICAgICAgICByZWNvcmQ6IHZpZXcuc3RvcmUuZ2V0QXQoVkRvbVV0aWwuZmluZFZkb21DaGlsZCh2aWV3LnZkb20sIGlkKS5pbmRleClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gY29tcG9uZW50XG4gICAgICovXG4gICAgcmVnaXN0ZXIoY29tcG9uZW50KSB7XG4gICAgICAgIHN1cGVyLnJlZ2lzdGVyKGNvbXBvbmVudCk7XG5cbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgaWQgICA9IG1lLmlkLFxuICAgICAgICAgICAgdmlldyA9IG1lLnZpZXc7XG5cbiAgICAgICAgaWYgKHZpZXcua2V5cykge1xuICAgICAgICAgICAgdmlldy5rZXlzLl9rZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIGZuICAgOiAnb25LZXlEb3duRG93bicsXG4gICAgICAgICAgICAgICAga2V5ICA6ICdEb3duJyxcbiAgICAgICAgICAgICAgICBzY29wZTogaWRcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBmbiAgIDogJ29uS2V5RG93blVwJyxcbiAgICAgICAgICAgICAgICBrZXkgIDogJ1VwJyxcbiAgICAgICAgICAgICAgICBzY29wZTogaWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyKCkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBpZCAgID0gbWUuaWQsXG4gICAgICAgICAgICB2aWV3ID0gbWUudmlldztcblxuICAgICAgICBpZiAodmlldy5rZXlzKSB7XG4gICAgICAgICAgICB2aWV3LmtleXMucmVtb3ZlS2V5cyhbe1xuICAgICAgICAgICAgICAgIGZuICAgOiAnb25LZXlEb3duRG93bicsXG4gICAgICAgICAgICAgICAga2V5ICA6ICdEb3duJyxcbiAgICAgICAgICAgICAgICBzY29wZTogaWRcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBmbiAgIDogJ29uS2V5RG93blVwJyxcbiAgICAgICAgICAgICAgICBrZXkgIDogJ1VwJyxcbiAgICAgICAgICAgICAgICBzY29wZTogaWRcbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLnVucmVnaXN0ZXIoKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFJvd01vZGVsKTtcblxuZXhwb3J0IHtSb3dNb2RlbCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZUNvbnRhaW5lciAgIGZyb20gJy4uL2NvbnRhaW5lci9CYXNlLm1qcyc7XG5pbXBvcnQgQ2xhc3NTeXN0ZW1VdGlsIGZyb20gJy4uL3V0aWwvQ2xhc3NTeXN0ZW0ubWpzJztcbmltcG9ydCBDc3MgICAgICAgICAgICAgZnJvbSAnLi4vdXRpbC9Dc3MubWpzJztcbmltcG9ydCBOZW9BcnJheSAgICAgICAgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuaW1wb3J0IFJvd01vZGVsICAgICAgICBmcm9tICcuLi9zZWxlY3Rpb24vdGFibGUvUm93TW9kZWwubWpzJztcbmltcG9ydCBTdG9yZSAgICAgICAgICAgZnJvbSAnLi4vZGF0YS9TdG9yZS5tanMnO1xuaW1wb3J0IFZpZXcgICAgICAgICAgICBmcm9tICcuL1ZpZXcubWpzJztcbmltcG9ydCAqIGFzIGhlYWRlciBmcm9tICcuL2hlYWRlci9fZXhwb3J0Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby50YWJsZS5Db250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBDb250YWluZXIgZXh0ZW5kcyBCYXNlQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnRhYmxlLkNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnRhYmxlLkNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd0YWJsZS1jb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAndGFibGUtY29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRvZG86IHRlc3RpbmcgY29uZmlnLCByZW1vdmUgd2hlbiBTdG9yZXMgYXJlIHJlYWR5XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gYW1vdW50Um93cz0yMFxuICAgICAgICAgKi9cbiAgICAgICAgYW1vdW50Um93czogMjAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWZhdWx0IGNvbmZpZ3MgZm9yIGVhY2ggY29sdW1uXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gY29sdW1uRGVmYXVsdHM9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgY29sdW1uRGVmYXVsdHM6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB0b2RvOiB0ZXN0aW5nIGNvbmZpZywgcmVtb3ZlIHdoZW4gU3RvcmVzIGFyZSByZWFkeVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBjcmVhdGVSYW5kb21EYXRhPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBjcmVhdGVSYW5kb21EYXRhOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBjbHM9WyduZW8tdGFibGUtY29udGFpbmVyJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tdGFibGUtY29udGFpbmVyJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gY29sdW1uc189W11cbiAgICAgICAgICovXG4gICAgICAgIGNvbHVtbnNfOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbmZpZ3MgZm9yIE5lby50YWJsZS5oZWFkZXIuVG9vbGJhclxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gW2hlYWRlclRvb2xiYXJDb25maWc9bnVsbF1cbiAgICAgICAgICovXG4gICAgICAgIGhlYWRlclRvb2xiYXJDb25maWc6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gaGVhZGVyVG9vbGJhcklkXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBoZWFkZXJUb29sYmFySWRfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkaXRpb25hbCB1c2VkIGtleXMgZm9yIHRoZSBzZWxlY3Rpb24gbW9kZWxcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBrZXlzXG4gICAgICAgICAqL1xuICAgICAgICBrZXlzOiB7fSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbGF5b3V0PSdiYXNlJ1xuICAgICAgICAgKi9cbiAgICAgICAgbGF5b3V0OiAnYmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzY3JvbGxiYXJzQ3NzQXBwbGllZD1mYWxzZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzY3JvbGxiYXJzQ3NzQXBwbGllZDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uc2VsZWN0aW9uLk1vZGVsfSBzZWxlY3Rpb25Nb2RlbF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZWN0aW9uTW9kZWxfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hvd0hlYWRlckZpbHRlcnNfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBzaG93SGVhZGVyRmlsdGVyc186IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmRhdGEuU3RvcmV9IHN0b3JlXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzdG9yZV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB0b2RvOiBvbmx5IHdvcmtzIGZvciBjaHJvbWUgJiBzYWZhcmkgLT4gYWRkIGEgY2hlY2tcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gdXNlQ3VzdG9tU2Nyb2xsYmFyc189dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgdXNlQ3VzdG9tU2Nyb2xsYmFyc186IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25maWdzIGZvciBOZW8udGFibGUuVmlld1xuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gW3ZpZXdDb25maWc9bnVsbF1cbiAgICAgICAgICovXG4gICAgICAgIHZpZXdDb25maWc6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gdmlld0lkXz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHZpZXdJZF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheXxudWxsfSBpdGVtcz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbT17Y2xzOiBbJ25lby10YWJsZS13cmFwcGVyJ10sY24gOiBbe3RhZzogJ3RhYmxlJyxjbiA6IFtdfV19XG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbToge1xuICAgICAgICAgICAgY2xzOiBbJ25lby10YWJsZS13cmFwcGVyJ10sXG4gICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgdGFnOiAndGFibGUnLFxuICAgICAgICAgICAgICAgIGNuIDogW11cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5oZWFkZXJUb29sYmFySWQgPSBOZW8uZ2V0SWQoJ3RhYmxlLWhlYWRlci10b29sYmFyJyk7XG4gICAgICAgIG1lLnZpZXdJZCAgICAgICAgICA9IE5lby5nZXRJZCgndGFibGUtdmlldycpO1xuXG4gICAgICAgIG1lLml0ZW1zID0gW3tcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICAgICAgOiBoZWFkZXIuVG9vbGJhcixcbiAgICAgICAgICAgIGlkICAgICAgICAgICAgICAgOiBtZS5oZWFkZXJUb29sYmFySWQsXG4gICAgICAgICAgICBzaG93SGVhZGVyRmlsdGVyczogbWUuc2hvd0hlYWRlckZpbHRlcnMsXG4gICAgICAgICAgICAuLi5tZS5oZWFkZXJUb29sYmFyQ29uZmlnIHx8IHt9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgOiBWaWV3LFxuICAgICAgICAgICAgY29udGFpbmVySWQ6IG1lLmlkLFxuICAgICAgICAgICAgaWQgICAgICAgICA6IG1lLnZpZXdJZCxcbiAgICAgICAgICAgIHN0b3JlICAgICAgOiBtZS5zdG9yZSxcbiAgICAgICAgICAgIC4uLm1lLnZpZXdDb25maWcgfHwge31cbiAgICAgICAgfV07XG5cbiAgICAgICAgbWUudmRvbS5pZCA9IG1lLmlkICsgJ3dyYXBwZXInO1xuXG4gICAgICAgIG1lLmNyZWF0ZUNvbHVtbnMobWUuY29sdW1ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUuc2VsZWN0aW9uTW9kZWwpIHtcbiAgICAgICAgICAgIG1lLnNlbGVjdGlvbk1vZGVsLnJlZ2lzdGVyKG1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZS5jcmVhdGVSYW5kb21EYXRhKSB7XG4gICAgICAgICAgICAvLyB0b2RvOiBpZiBtb3VudGluZyBhcHBseSBhZnRlciBtb3VudFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWUuY3JlYXRlUmFuZG9tVmlld0RhdGEobWUuYW1vdW50Um93cyk7XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHNlbGVjdGlvbk1vZGVsIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TmVvLnNlbGVjdGlvbi5Nb2RlbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge05lby5zZWxlY3Rpb24uTW9kZWx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U2VsZWN0aW9uTW9kZWwodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVkKSB7XG4gICAgICAgICAgICB2YWx1ZS5yZWdpc3Rlcih0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc2hvd0hlYWRlckZpbHRlcnMgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTaG93SGVhZGVyRmlsdGVycyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIE5lby5nZXRDb21wb25lbnQodGhpcy5oZWFkZXJUb29sYmFySWQpLnNob3dIZWFkZXJGaWx0ZXJzID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHVzZUN1c3RvbVNjcm9sbGJhcnMgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRVc2VDdXN0b21TY3JvbGxiYXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMudmRvbS5jbHMgPSBOZW9BcnJheS51bmlvbih0aGlzLnZkb20uY2xzLCBbJ25lby11c2UtY3VzdG9tLXNjcm9sbGJhciddKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhcHBseUN1c3RvbVNjcm9sbGJhcnNDc3MoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjc3NSdWxlcyA9IFtdO1xuXG4gICAgICAgIGlmIChtZS5kb2NrTGVmdE1hcmdpbikge1xuICAgICAgICAgICAgY3NzUnVsZXMucHVzaCgnIycgKyBtZS5pZCArICd3cmFwcGVyJyArICc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrOmhvcml6b250YWwge21hcmdpbi1sZWZ0OiAnICsgbWUuZG9ja0xlZnRNYXJnaW4gKyAncHg7fScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lLmRvY2tSaWdodE1hcmdpbikge1xuICAgICAgICAgICAgY3NzUnVsZXMucHVzaCgnIycgKyBtZS5pZCArICd3cmFwcGVyJyArICc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrOmhvcml6b250YWwge21hcmdpbi1yaWdodDogJyArIG1lLmRvY2tSaWdodE1hcmdpbiArICdweDt9Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNzc1J1bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIENzcy5pbnNlcnRSdWxlcyhjc3NSdWxlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBtZS5zY3JvbGxiYXJzQ3NzQXBwbGllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgY29sdW1ucyBjb25maWcgZ2V0cyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlXG4gICAgICogQHBhcmFtIHtBcnJheX0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0Q29sdW1ucyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnc0FwcGxpZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUNvbHVtbnModmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIGhlYWRlclRvb2xiYXJJZCBjb25maWcgZ2V0cyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRIZWFkZXJUb29sYmFySWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA/IHZhbHVlIDogb2xkVmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgc2VsZWN0aW9uTW9kZWwgY29uZmlnIGdldHMgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0ge05lby5zZWxlY3Rpb24uTW9kZWx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOZW8uc2VsZWN0aW9uLk1vZGVsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRTZWxlY3Rpb25Nb2RlbCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICBvbGRWYWx1ZS5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQ2xhc3NTeXN0ZW1VdGlsLmJlZm9yZVNldEluc3RhbmNlKHZhbHVlLCBSb3dNb2RlbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgc3RvcmUgY29uZmlnIGdldHMgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0ge05lby5kYXRhLlN0b3JlfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TmVvLmRhdGEuU3RvcmV9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldFN0b3JlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgdmFsdWUgPSBDbGFzc1N5c3RlbVV0aWwuYmVmb3JlU2V0SW5zdGFuY2UodmFsdWUsIFN0b3JlLCB7XG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIgICAgICA6IG1lLm9uU3RvcmVGaWx0ZXIsXG4gICAgICAgICAgICAgICAgbG9hZCAgICAgICAgOiBtZS5vblN0b3JlTG9hZCxcbiAgICAgICAgICAgICAgICByZWNvcmRDaGFuZ2U6IG1lLm9uU3RvcmVSZWNvcmRDaGFuZ2UsXG4gICAgICAgICAgICAgICAgc2NvcGUgICAgICAgOiBtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBpbiBjYXNlIHdlIGR5bmFtaWNhbGx5IGNoYW5nZSB0aGUgc3RvcmUsIHRoZSBuZXcgbmVlZHMgdG8gZ2V0IHRoZSBuZXcgcmVmZXJlbmNlXG4gICAgICAgIGlmIChtZS52aWV3KSB7XG4gICAgICAgICAgICBtZS52aWV3LnN0b3JlID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgdmlld0lkIGNvbmZpZyBnZXRzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldFZpZXdJZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID8gdmFsdWUgOiBvbGRWYWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb2x1bW5zXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgY3JlYXRlQ29sdW1ucyhjb2x1bW5zKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb2x1bW5EZWZhdWx0cyA9IG1lLmNvbHVtbkRlZmF1bHRzLFxuICAgICAgICAgICAgc29ydGVycyAgICAgICAgPSBtZS5zdG9yZS5zb3J0ZXJzO1xuXG4gICAgICAgIGlmICghY29sdW1ucyB8fCAhY29sdW1ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIE5lby5sb2dFcnJvcignQXR0ZW1wdGluZyB0byBjcmVhdGUgYSB0YWJsZS5Db250YWluZXIgd2l0aG91dCBkZWZpbmVkIGNvbHVtbnMnLCBtZS5pZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgICAgICAgIGlmIChjb2x1bW4uZG9jayAmJiAhY29sdW1uLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgTmVvLmxvZ0Vycm9yKCdBdHRlbXB0aW5nIHRvIGNyZWF0ZSBhIGRvY2tlZCBjb2x1bW4gd2l0aG91dCBhIGRlZmluZWQgd2lkdGgnLCBjb2x1bW4sIG1lLmlkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbHVtbkRlZmF1bHRzKSB7XG4gICAgICAgICAgICAgICAgTmVvLmFzc2lnbkRlZmF1bHRzKGNvbHVtbiwgY29sdW1uRGVmYXVsdHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc29ydGVycyAmJiBzb3J0ZXJzWzBdKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtbi5kYXRhRmllbGQgPT09IHNvcnRlcnNbMF0ucHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uLmlzU29ydGVkID0gc29ydGVyc1swXS5kaXJlY3Rpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb2x1bW4ubGlzdGVuZXJzID0ge1xuICAgICAgICAgICAgICAgIHNvcnQgOiBtZS5vblNvcnRDb2x1bW4sXG4gICAgICAgICAgICAgICAgc2NvcGU6IG1lXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBtZS5pdGVtc1swXS5pdGVtcyA9IGNvbHVtbnM7XG5cbiAgICAgICAgcmV0dXJuIGNvbHVtbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gY291bnRSb3dzXG4gICAgICovXG4gICAgY3JlYXRlUmFuZG9tVmlld0RhdGEoY291bnRSb3dzKSB7XG4gICAgICAgIHRoaXMubG9hZERhdGEoY291bnRSb3dzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBpbnB1dERhdGFcbiAgICAgKi9cbiAgICBjcmVhdGVWaWV3RGF0YShpbnB1dERhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgID0gdGhpcyxcbiAgICAgICAgICAgIGl0ZW1zID0gbWUuaXRlbXM7XG5cbiAgICAgICAgaXRlbXNbMV0uY3JlYXRlVmlld0RhdGEoaW5wdXREYXRhKTsgLy8gdG9kbzogc2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgdmlldyAmIGhlYWRlckNvbnRhaW5lclxuXG4gICAgICAgIGlmIChtZS51c2VDdXN0b21TY3JvbGxiYXJzICYmIG1lLnNjcm9sbGJhcnNDc3NBcHBsaWVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbWUuYXBwbHlDdXN0b21TY3JvbGxiYXJzQ3NzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBtZS5pdGVtcyA9IGl0ZW1zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldFZkb21Sb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52ZG9tLmNuWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqIEByZXR1cm5zIHtOZW8udmRvbS5WTm9kZX1cbiAgICAgKi9cbiAgICBnZXRWbm9kZVJvb3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZub2RlLmNoaWxkTm9kZXNbMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gY291bnRSb3dzXG4gICAgICovXG4gICAgbG9hZERhdGEoY291bnRSb3dzKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29sdW1ucyAgICAgID0gbWUuaXRlbXNbMF0uaXRlbXMsXG4gICAgICAgICAgICBjb3VudENvbHVtbnMgPSBjb2x1bW5zLmxlbmd0aDtcblxuICAgICAgICBOZW8ubWFuYWdlci5TdG9yZS5jcmVhdGVSYW5kb21EYXRhKFtjb3VudENvbHVtbnMsIGNvdW50Um93c10pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBtZS5jcmVhdGVWaWV3RGF0YShkYXRhKTtcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBhdHRlbXB0aW5nIHRvIGNhbGwgY3JlYXRlUmFuZG9tVmlld0RhdGEnLCBlcnIsIG1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRzLmRpcmVjdGlvblxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRzLnByb3BlcnR5XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uU29ydENvbHVtbihvcHRzKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuc3RvcmUuc29ydChvcHRzKTtcbiAgICAgICAgbWUucmVtb3ZlU29ydGluZ0NzcyhvcHRzLnByb3BlcnR5KTtcbiAgICAgICAgbWUub25TdG9yZUxvYWQobWUuc3RvcmUuaXRlbXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25TdG9yZUZpbHRlcigpIHtcbiAgICAgICAgdGhpcy5vblN0b3JlTG9hZCh0aGlzLnN0b3JlLml0ZW1zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGRhdGFcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25TdG9yZUxvYWQoZGF0YSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgbGlzdGVuZXJJZDtcblxuICAgICAgICBpZiAobWUucmVuZGVyZWQpIHtcbiAgICAgICAgICAgIG1lLmNyZWF0ZVZpZXdEYXRhKGRhdGEpO1xuXG4gICAgICAgICAgICBpZiAobWUuc3RvcmUuc29ydGVycy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgbWUucmVtb3ZlU29ydGluZ0NzcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdGVuZXJJZCA9IG1lLm9uKCdyZW5kZXJlZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBtZS51bigncmVuZGVyZWQnLCBsaXN0ZW5lcklkKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbWUuY3JlYXRlVmlld0RhdGEoZGF0YSk7XG4gICAgICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRyaWdnZXJlZCBhZnRlciBjaGFuZ2luZyB0aGUgdmFsdWUgb2YgYSByZWNvcmQgZmllbGQuXG4gICAgICogRS5nLiBteVJlY29yZC5mb28gPSAnYmFyJztcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRzLmZpZWxkIFRoZSBuYW1lIG9mIHRoZSBmaWVsZCB3aGljaCBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TmVvLmRhdGEuTW9kZWx9IG9wdHMubW9kZWwgVGhlIG1vZGVsIGluc3RhbmNlIG9mIHRoZSBjaGFuZ2VkIHJlY29yZFxuICAgICAqIEBwYXJhbSB7Kn0gb3B0cy5vbGRWYWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLnJlY29yZFxuICAgICAqIEBwYXJhbSB7Kn0gb3B0cy52YWx1ZVxuICAgICAqL1xuICAgIG9uU3RvcmVSZWNvcmRDaGFuZ2Uob3B0cykge1xuICAgICAgICBOZW8uZ2V0Q29tcG9uZW50KHRoaXMudmlld0lkKS5vblN0b3JlUmVjb3JkQ2hhbmdlKG9wdHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGFGaWVsZFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICByZW1vdmVTb3J0aW5nQ3NzKGRhdGFGaWVsZCkge1xuICAgICAgICB0aGlzLml0ZW1zWzBdLml0ZW1zLmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgICAgICAgIGlmIChjb2x1bW4uZGF0YUZpZWxkICE9PSBkYXRhRmllbGQpIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4ucmVtb3ZlU29ydGluZ0NzcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENvbnRhaW5lcik7XG5cbmV4cG9ydCB7Q29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50L0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnRhYmxlLlZpZXdcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnRhYmxlLlZpZXcnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby50YWJsZS5WaWV3JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3RhYmxlLXZpZXcnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAndGFibGUtdmlldycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gY2xzPVsnbmVvLXRhYmxlLXZpZXcnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby10YWJsZS12aWV3J10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gY29udGFpbmVySWQ9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjb250YWluZXJJZDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gcmVjb3JkVm5vZGVNYXA9e31cbiAgICAgICAgICovXG4gICAgICAgIHJlY29yZFZub2RlTWFwOiB7fSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5kYXRhLlN0b3JlfG51bGx9IHN0b3JlPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHN0b3JlOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gdXNlUm93UmVjb3JkSWRzPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHVzZVJvd1JlY29yZElkczogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb209e3RhZzogJ3Rib2R5JywgY24gOiBbXX1cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICB0YWc6ICd0Ym9keScsXG4gICAgICAgICAgICBjbiA6IFtdXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtBcnJheX0gaW5wdXREYXRhXG4gICAgICovXG4gICAgY3JlYXRlVmlld0RhdGEoaW5wdXREYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGFtb3VudFJvd3MgPSBpbnB1dERhdGEubGVuZ3RoLFxuICAgICAgICAgICAgY29udGFpbmVyICA9IE5lby5nZXRDb21wb25lbnQobWUucGFyZW50SWQpLFxuICAgICAgICAgICAgaGFzU3RvcmUgICA9IGNvbnRhaW5lci5zdG9yZS5tb2RlbCwgLy8gdG9kbzogcmVtb3ZlIGFzIHNvb24gYXMgYWxsIHRhYmxlcyB1c2Ugc3RvcmVzIChleGFtcGxlcyB0YWJsZSlcbiAgICAgICAgICAgIGNvbHVtbnMgICAgPSBjb250YWluZXIuaXRlbXNbMF0uaXRlbXMsXG4gICAgICAgICAgICBjb2xDb3VudCAgID0gY29sdW1ucy5sZW5ndGgsXG4gICAgICAgICAgICBkYXRhICAgICAgID0gW10sXG4gICAgICAgICAgICBpICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIHZkb20gICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgY2VsbENscywgY2VsbElkLCBjb25maWcsIGNvbHVtbiwgZG9ja0xlZnRNYXJnaW4sIGRvY2tSaWdodE1hcmdpbiwgaWQsIGluZGV4LCBqLCByZW5kZXJlck91dHB1dCwgcmVuZGVyZXJWYWx1ZSwgc2VsZWN0ZWRSb3dzLCB0ckNscztcblxuICAgICAgICBtZS5yZWNvcmRWbm9kZU1hcCA9IHt9OyAvLyByZW1vdmUgb2xkIGRhdGFcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRlVmlld0RhdGEnLCBtZS5pZCwgaW5wdXREYXRhKTtcblxuICAgICAgICBpZiAoY29udGFpbmVyLnNlbGVjdGlvbk1vZGVsLm50eXBlID09PSAnc2VsZWN0aW9uLXRhYmxlLXJvd21vZGVsJykge1xuICAgICAgICAgICAgc2VsZWN0ZWRSb3dzID0gY29udGFpbmVyLnNlbGVjdGlvbk1vZGVsLml0ZW1zIHx8IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGkgPCBhbW91bnRSb3dzOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChtZS51c2VSb3dSZWNvcmRJZHMpIHtcbiAgICAgICAgICAgICAgICBpZCA9IG1lLmlkICsgJy10ci0nICsgaW5wdXREYXRhW2ldW21lLnN0b3JlLmtleVByb3BlcnR5XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWQgPSB2ZG9tLmNuW2ldICYmIHZkb20uY25baV0uaWQgfHwgTmVvLmdldElkKCd0cicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZS5yZWNvcmRWbm9kZU1hcFtpZF0gPSBpO1xuXG4gICAgICAgICAgICB0ckNscyA9IG1lLmdldFRyQ2xhc3MoaW5wdXREYXRhW2ldLCBpKTtcblxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkUm93cyAmJiBzZWxlY3RlZFJvd3MuaW5jbHVkZXMoaWQpKSB7XG4gICAgICAgICAgICAgICAgdHJDbHMucHVzaCgnbmVvLXNlbGVjdGVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgdGFnICAgICA6ICd0cicsXG4gICAgICAgICAgICAgICAgaWQgICAgICA6IGlkLFxuICAgICAgICAgICAgICAgIGNscyAgICAgOiB0ckNscyxcbiAgICAgICAgICAgICAgICBjbiAgICAgIDogW10sXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg6ICctMSdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkb2NrTGVmdE1hcmdpbiAgPSAwO1xuICAgICAgICAgICAgZG9ja1JpZ2h0TWFyZ2luID0gMDtcblxuICAgICAgICAgICAgaiA9IDA7XG5cbiAgICAgICAgICAgIGZvciAoOyBqIDwgY29sQ291bnQ7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbHVtbiAgICAgICAgID0gY29sdW1uc1tqXTtcbiAgICAgICAgICAgICAgICByZW5kZXJlclZhbHVlICA9IGlucHV0RGF0YVtpXVtjb2x1bW4uZGF0YUZpZWxkXTtcblxuICAgICAgICAgICAgICAgIGlmIChyZW5kZXJlclZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXJWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlbmRlcmVyT3V0cHV0ID0gY29sdW1uLnJlbmRlcmVyLmNhbGwoY29sdW1uLnJlbmRlcmVyU2NvcGUgfHwgY29udGFpbmVyLCB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFGaWVsZDogY29sdW1uLmRhdGFGaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggICAgOiBpLFxuICAgICAgICAgICAgICAgICAgICByZWNvcmQgICA6IGlucHV0RGF0YVtpXSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgICAgOiByZW5kZXJlclZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjZWxsQ2xzID0gcmVuZGVyZXJPdXRwdXQuY2xzIHx8IFsnbmVvLXRhYmxlLWNlbGwnXTtcblxuICAgICAgICAgICAgICAgIGlmIChjb2x1bW4uYWxpZ24gIT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgICAgICBjZWxsQ2xzLnB1c2goJ25lby0nICsgY29sdW1uLmFsaWduKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIU5lby5pc09iamVjdChyZW5kZXJlck91dHB1dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXJPdXRwdXQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbHMgOiBjZWxsQ2xzLFxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogcmVuZGVyZXJPdXRwdXQudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHRvZG86IHJlbW92ZSB0aGUgaWYgcGFydCBhcyBzb29uIGFzIGFsbCB0YWJsZXMgdXNlIHN0b3JlcyAoZXhhbXBsZXMgdGFibGUpXG4gICAgICAgICAgICAgICAgaWYgKGhhc1N0b3JlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGxJZCA9IG1lLmdldENlbGxJZChpbnB1dERhdGFbaV0sIGNvbHVtbi5kYXRhRmllbGQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGxJZCA9IHZkb20uY25baV0gJiYgdmRvbS5jbltpXS5jbltqXSAmJiB2ZG9tLmNuW2ldLmNuW2pdLmlkIHx8IE5lby5nZXRJZCgndGQnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgICAgIHRhZyAgICAgIDogJ3RkJyxcbiAgICAgICAgICAgICAgICAgICAgaWQgICAgICAgOiBjZWxsSWQsXG4gICAgICAgICAgICAgICAgICAgIGNscyAgICAgIDogcmVuZGVyZXJPdXRwdXQuY2xzICAgfHwgWyduZW8tdGFibGUtY2VsbCddLFxuICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IHJlbmRlcmVyT3V0cHV0Lmh0bWwgIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZSAgICA6IHJlbmRlcmVyT3V0cHV0LnN0eWxlIHx8IHt9LFxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleCA6ICctMSdcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtbi5kb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5jbHMgPSBbJ25lby1sb2NrZWQnLCAuLi5jb25maWcuY2xzIHx8IFtdXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY29sdW1uLmRvY2sgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLnN0eWxlLmxlZnQgPSBkb2NrTGVmdE1hcmdpbiArICdweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2NrTGVmdE1hcmdpbiArPSAoY29sdW1uLndpZHRoICsgMSk7IC8vIHRvZG86IGJvcmRlcnMgZml4XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkYXRhW2ldLmNuLnB1c2goY29uZmlnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaiA9IDA7XG5cbiAgICAgICAgICAgIGZvciAoOyBqIDwgY29sQ291bnQ7IGorKykge1xuICAgICAgICAgICAgICAgIGluZGV4ICA9IGNvbENvdW50IC0gaiAtMTtcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSBjb2x1bW5zW2luZGV4XTtcblxuICAgICAgICAgICAgICAgIGlmIChjb2x1bW4uZG9jayA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLmNuW2luZGV4XS5zdHlsZS5yaWdodCA9IGRvY2tSaWdodE1hcmdpbiArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIGRvY2tSaWdodE1hcmdpbiArPSAoY29sdW1uLndpZHRoICsgMSk7IC8vIHRvZG86IGJvcmRlcnMgZml4XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmRvbS5jbiA9IGRhdGE7XG5cbiAgICAgICAgY29udGFpbmVyLmRvY2tMZWZ0TWFyZ2luICA9IGRvY2tMZWZ0TWFyZ2luO1xuICAgICAgICBjb250YWluZXIuZG9ja1JpZ2h0TWFyZ2luID0gZG9ja1JpZ2h0TWFyZ2luO1xuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB1cGRhdGVQYXJlbnRWZG9tXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBzaWxlbnRcbiAgICAgKi9cbiAgICBkZXN0cm95KHVwZGF0ZVBhcmVudFZkb20sIHNpbGVudCkge1xuICAgICAgICB0aGlzLnN0b3JlID0gbnVsbDtcbiAgICAgICAgc3VwZXIuZGVzdHJveSh1cGRhdGVQYXJlbnRWZG9tLCBzaWxlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhRmllbGRcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldENlbGxJZChyZWNvcmQsIGRhdGFGaWVsZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZCArICdfXycgKyByZWNvcmRbdGhpcy5zdG9yZS5rZXlQcm9wZXJ0eV0gKyAnX18nICsgZGF0YUZpZWxkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGFwcGx5IGN1c3RvbSBDU1MgcnVsZXMgdG8gdGFibGUgcm93c1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcm93SW5kZXhcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nW119XG4gICAgICovXG4gICAgZ2V0VHJDbGFzcyhyZWNvcmQsIHJvd0luZGV4KSB7XG4gICAgICAgIHJldHVybiBbJ25lby10YWJsZS1yb3cnXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRyaWdnZXJlZCBhZnRlciBjaGFuZ2luZyB0aGUgdmFsdWUgb2YgYSByZWNvcmQgZmllbGQuXG4gICAgICogRS5nLiBteVJlY29yZC5mb28gPSAnYmFyJztcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRzLmZpZWxkIFRoZSBuYW1lIG9mIHRoZSBmaWVsZCB3aGljaCBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TmVvLmRhdGEuTW9kZWx9IG9wdHMubW9kZWwgVGhlIG1vZGVsIGluc3RhbmNlIG9mIHRoZSBjaGFuZ2VkIHJlY29yZFxuICAgICAqIEBwYXJhbSB7Kn0gb3B0cy5vbGRWYWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLnJlY29yZFxuICAgICAqIEBwYXJhbSB7Kn0gb3B0cy52YWx1ZVxuICAgICAqL1xuICAgIG9uU3RvcmVSZWNvcmRDaGFuZ2Uob3B0cykge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY2VsbElkICAgPSBtZS5nZXRDZWxsSWQob3B0cy5yZWNvcmQsIG9wdHMuZmllbGQpLFxuICAgICAgICAgICAgY2VsbE5vZGUgPSBtZS5nZXRWZG9tQ2hpbGQoY2VsbElkKTtcblxuICAgICAgICBjZWxsTm9kZS5pbm5lckhUTUwgPSBvcHRzLnZhbHVlOyAvLyBrZWVwIHRoZSB2ZG9tIGluIHN5bmNcblxuICAgICAgICBOZW8uY3VycmVudFdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICBkZWx0YXM6IFt7XG4gICAgICAgICAgICAgICAgaWQgICAgICAgOiBjZWxsSWQsXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBvcHRzLnZhbHVlXG4gICAgICAgICAgICB9XVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFZpZXcpO1xuXG5leHBvcnQge1ZpZXcgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2VCdXR0b24gZnJvbSAnLi4vLi4vYnV0dG9uL0Jhc2UubWpzJztcbmltcG9ydCBOZW9BcnJheSAgIGZyb20gJy4uLy4uL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCBUZXh0RmllbGQgIGZyb20gJy4uLy4uL2Zvcm0vZmllbGQvVGV4dC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udGFibGUuaGVhZGVyLkJ1dHRvblxuICogQGV4dGVuZHMgTmVvLmJ1dHRvbi5CYXNlXG4gKi9cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIEJhc2VCdXR0b24ge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlcyBmb3IgYWxpZ25cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGFsaWduVmFsdWVzOiBbJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0J11cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBhbGlnblZhbHVlczogWydsZWZ0JywgJ2NlbnRlcicsICdyaWdodCddXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udGFibGUuaGVhZGVyLkJ1dHRvbidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnRhYmxlLmhlYWRlci5CdXR0b24nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndGFibGUtaGVhZGVyLWJ1dHRvbidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICd0YWJsZS1oZWFkZXItYnV0dG9uJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsaWdubWVudCBvZiB0aGUgbWF0Y2hpbmcgdGFibGUgY2VsbHMuIFZhbGlkIHZhbHVlcyBhcmUgbGVmdCwgY2VudGVyLCByaWdodFxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGFsaWduXz0nbGVmdCdcbiAgICAgICAgICovXG4gICAgICAgIGFsaWduXzogJ2xlZnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGNscz1bJ25lby10YWJsZS1oZWFkZXItYnV0dG9uJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tdGFibGUtaGVhZGVyLWJ1dHRvbiddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGRhdGFGaWVsZD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBkYXRhRmllbGQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTb3J0IGRpcmVjdGlvbiB3aGVuIGNsaWNraW5nIG9uIGFuIHVuc29ydGVkIGJ1dHRvblxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGRlZmF1bHRTb3J0RGlyZWN0aW9uPSdBU0MnXG4gICAgICAgICAqL1xuICAgICAgICBkZWZhdWx0U29ydERpcmVjdGlvbjogJ0FTQycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBkcmFnZ2FibGVfPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGRyYWdnYWJsZV86IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGVkaXRvckNvbmZpZz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBlZGl0b3JDb25maWc6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGZpbHRlckNvbmZpZz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBmaWx0ZXJDb25maWc6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZm9ybS5maWVsZC5CYXNlfG51bGx9IGZpbHRlckZpZWxkPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgZmlsdGVyRmllbGQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGljb25DbHM9J2ZhIGZhLWFycm93LWNpcmNsZS11cCdcbiAgICAgICAgICovXG4gICAgICAgIGljb25DbHM6ICdmYSBmYS1hcnJvdy1jaXJjbGUtdXAnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBpY29uUG9zaXRpb249J3JpZ2h0J1xuICAgICAgICAgKi9cbiAgICAgICAgaWNvblBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogJ0FTQycsICdERVNDJyBvciBudWxsXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBpc1NvcnRlZF89bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBpc1NvcnRlZF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTY29wZSB0byBleGVjdXRlIHRoZSBjb2x1bW4gcmVuZGVyZXIuXG4gICAgICAgICAqIERlZmF1bHRzIHRvIHRoZSBtYXRjaGluZyB0YWJsZS5Db250YWluZXJcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvcmUuQmFzZXxudWxsfSByZW5kZXJlclNjb3BlPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHJlbmRlcmVyU2NvcGU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaG93SGVhZGVyRmlsdGVyXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgc2hvd0hlYWRlckZpbHRlcl86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIHRhZzogJ3RoJyxcbiAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIGNsczogWyduZW8tYnV0dG9uLWdseXBoJ11cbiAgICAgICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIGNsczogWyduZW8tYnV0dG9uLXRleHQnXVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFNwZWNpZnkgYSBkaWZmZXJlbnQgdmRvbSByb290IGlmIG5lZWRlZCB0byBhcHBseSB0aGUgdG9wIGxldmVsIHN0eWxlIGF0dHJpYnV0ZXMgb24gYSBkaWZmZXJlbnQgbGV2ZWwuXG4gICAgICogTWFrZSBzdXJlIHRvIHVzZSBnZXRWbm9kZVJvb3QoKSBhcyB3ZWxsLCB0byBrZWVwIHRoZSB2ZG9tICYgdm5vZGUgdHJlZXMgaW4gc3luYy5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgbmV3IHZkb20gcm9vdFxuICAgICAqL1xuICAgIGdldFZkb21Sb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52ZG9tLmNuWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNwZWNpZnkgYSBkaWZmZXJlbnQgdm5vZGUgcm9vdCBpZiBuZWVkZWQgdG8gYXBwbHkgdGhlIHRvcCBsZXZlbCBzdHlsZSBhdHRyaWJ1dGVzIG9uIGEgZGlmZmVyZW50IGxldmVsLlxuICAgICAqIE1ha2Ugc3VyZSB0byB1c2UgZ2V0VmRvbVJvb3QoKSBhcyB3ZWxsLCB0byBrZWVwIHRoZSB2ZG9tICYgdm5vZGUgdHJlZXMgaW4gc3luYy5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgbmV3IHZub2RlIHJvb3RcbiAgICAgKi9cbiAgICBnZXRWbm9kZVJvb3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZub2RlLmNoaWxkTm9kZXNbMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgPSB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IG1lLm9uQnV0dG9uQ2xpY2ssXG4gICAgICAgICAgICAgICAgc2NvcGU6IG1lXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGlmIChtZS5kcmFnZ2FibGUpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obGlzdGVuZXJzLCB7XG4gICAgICAgICAgICAgICAgZHJhZ2VuZCAgOiBtZS5vbkRyYWdFbmQsXG4gICAgICAgICAgICAgICAgZHJhZ2VudGVyOiBtZS5vbkRyYWdFbnRlcixcbiAgICAgICAgICAgICAgICBkcmFnbGVhdmU6IG1lLm9uRHJhZ0xlYXZlLFxuICAgICAgICAgICAgICAgIGRyYWdvdmVyIDogbWUub25EcmFnT3ZlcixcbiAgICAgICAgICAgICAgICBkcmFnc3RhcnQ6IG1lLm9uRHJhZ1N0YXJ0LFxuICAgICAgICAgICAgICAgIGRyb3AgICAgIDogbWUub25Ecm9wLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBsaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBkcmFnZ2FibGUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXREcmFnZ2FibGUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgbWUuZ2V0VmRvbVJvb3QoKS5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIG1lLmdldFZkb21Sb290KCkuZHJhZ2dhYmxlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBpc1NvcnRlZCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldElzU29ydGVkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNscyAgICAgICA9IG1lLmNscyxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IG1lLnVwKCd0YWJsZS1jb250YWluZXInKTtcblxuICAgICAgICBzd2l0Y2godmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgICAgICAgICBOZW9BcnJheS5hZGQoY2xzLCAnbmVvLXNvcnQtaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBU0MnOlxuICAgICAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsICduZW8tc29ydC1kZXNjJyk7XG4gICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgJ25lby1zb3J0LWhpZGRlbicpO1xuICAgICAgICAgICAgICAgIE5lb0FycmF5LmFkZChjbHMsICduZW8tc29ydC1hc2MnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0RFU0MnOlxuICAgICAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsICduZW8tc29ydC1hc2MnKTtcbiAgICAgICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUoY2xzLCAnbmVvLXNvcnQtaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgTmVvQXJyYXkuYWRkKGNscywgJ25lby1zb3J0LWRlc2MnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmNscyA9IGNscztcblxuICAgICAgICAvLyB0ZXN0aW5nIGNoZWNrIHVudGlsIGFsbCBleGFtcGxlIHRhYmxlcyBoYXZlIGEgc3RvcmVcbiAgICAgICAgaWYgKCFjb250YWluZXIgfHwgIWNvbnRhaW5lci5zdG9yZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lLm1vdW50ZWQpIHtcbiAgICAgICAgICAgIG1lLmZpcmUoJ3NvcnQnLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6IG1lLmRhdGFGaWVsZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHNob3dIZWFkZXJGaWx0ZXIgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTaG93SGVhZGVyRmlsdGVyKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghbWUuZmlsdGVyRmllbGQpIHtcbiAgICAgICAgICAgICAgICBtZS5maWx0ZXJGaWVsZCA9IE5lby5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGUgICA6IFRleHRGaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgZmxhZyAgICAgOiAnZmlsdGVyLWZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgaGlkZUxhYmVsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRJZCA6IG1lLmlkLFxuXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlICAgICAgICA6IG1lLmNoYW5nZUZpbHRlclZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3JDaGFuZ2U6IG1lLmNoYW5nZUZpbHRlck9wZXJhdG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUgICAgICAgICA6IG1lXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQgOiAnLjVlbScsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJy41ZW0nXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC4uLm1lLmVkaXRvckNvbmZpZyB8fCB7fVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbWUudmRvbS5jbi5wdXNoKG1lLmZpbHRlckZpZWxkLnZkb20pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgbWUuZmlsdGVyRmllbGQudmRvbS5yZW1vdmVEb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobWUuZmlsdGVyRmllbGQpIHtcbiAgICAgICAgICAgIG1lLmZpbHRlckZpZWxkLnZkb20ucmVtb3ZlRG9tID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIGFsaWduIGNvbmZpZyBnZXRzIGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0QWxpZ24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJlZm9yZVNldEVudW1WYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICdhbGlnbicsICdhbGlnblZhbHVlcycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZGVzdHJveSguLi5hcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLmZpbHRlckZpZWxkKSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlckZpZWxkLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLmRlc3Ryb3koLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uQnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBtYXA7XG5cbiAgICAgICAgaWYgKG1lLmRlZmF1bHRTb3J0RGlyZWN0aW9uID09PSAnREVTQycpIHtcbiAgICAgICAgICAgIG1hcCA9IHtcbiAgICAgICAgICAgICAgICBBU0MgOiBudWxsLFxuICAgICAgICAgICAgICAgIERFU0M6ICdBU0MnLFxuICAgICAgICAgICAgICAgIG51bGw6ICdERVNDJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1hcCA9IHtcbiAgICAgICAgICAgICAgICBBU0MgOiAnREVTQycsXG4gICAgICAgICAgICAgICAgREVTQzogbnVsbCxcbiAgICAgICAgICAgICAgICBudWxsOiAnQVNDJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmlzU29ydGVkID0gbWFwW21lLmlzU29ydGVkICsgJyddO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbkRyYWdFbmQoKSB7XG4gICAgICAgIGxldCBtZSAgICA9IHRoaXMsXG4gICAgICAgICAgICBzdHlsZSA9IG1lLnN0eWxlO1xuXG4gICAgICAgIGRlbGV0ZSBzdHlsZS5vcGFjaXR5O1xuICAgICAgICBtZS5zdHlsZSA9IHN0eWxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbkRyYWdFbnRlcigpIHtcbiAgICAgICAgbGV0IG1lICA9IHRoaXMsXG4gICAgICAgICAgICBjbHMgPSBtZS5jbHM7XG5cbiAgICAgICAgTmVvQXJyYXkuYWRkKGNscywgJ25lby1kcmFnLW92ZXInKTtcbiAgICAgICAgbWUuY2xzID0gY2xzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbkRyYWdMZWF2ZSgpIHtcbiAgICAgICAgbGV0IG1lICA9IHRoaXMsXG4gICAgICAgICAgICBjbHMgPSBtZS5jbHM7XG5cbiAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgJ25lby1kcmFnLW92ZXInKTtcbiAgICAgICAgbWUuY2xzID0gY2xzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgb25EcmFnT3ZlcihldmVudCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdvbkRyYWdPdmVyJywgZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbkRyYWdTdGFydCgpIHtcbiAgICAgICAgbGV0IG1lICAgID0gdGhpcyxcbiAgICAgICAgICAgIHN0eWxlID0gbWUuc3R5bGU7XG5cbiAgICAgICAgc3R5bGUub3BhY2l0eSA9IDAuNDtcbiAgICAgICAgbWUuc3R5bGUgPSBzdHlsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Ecm9wKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGhlYWRlclRvb2xiYXIgID0gTmVvLmdldENvbXBvbmVudChtZS5wYXJlbnRJZCksXG4gICAgICAgICAgICB0YWJsZUNvbnRhaW5lciA9IE5lby5nZXRDb21wb25lbnQoaGVhZGVyVG9vbGJhci5wYXJlbnRJZCk7XG5cbiAgICAgICAgZGVsZXRlIE5lby5nZXRDb21wb25lbnQoZGF0YS5zcmNJZCkuZ2V0VmRvbVJvb3QoKS5zdHlsZS5vcGFjaXR5O1xuXG4gICAgICAgIG1lLm9uRHJhZ0xlYXZlKCk7XG4gICAgICAgIGhlYWRlclRvb2xiYXIuc3dpdGNoSXRlbXMobWUuaWQsIGRhdGEuc3JjSWQpO1xuICAgICAgICB0YWJsZUNvbnRhaW5lci5jcmVhdGVWaWV3RGF0YSh0YWJsZUNvbnRhaW5lci5zdG9yZS5kYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgY2hhbmdlRmlsdGVyT3BlcmF0b3IoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdGFibGVDb250YWluZXIgPSBtZS51cCgndGFibGUtY29udGFpbmVyJyksXG4gICAgICAgICAgICBzdG9yZSAgICAgICAgICA9IHRhYmxlQ29udGFpbmVyICYmIHRhYmxlQ29udGFpbmVyLnN0b3JlLFxuICAgICAgICAgICAgb3BlcmF0b3IgICAgICAgPSBkYXRhLnZhbHVlLFxuICAgICAgICAgICAgZmlsdGVyLCBmaWx0ZXJzO1xuXG4gICAgICAgIGlmIChzdG9yZSkge1xuICAgICAgICAgICAgZmlsdGVyID0gc3RvcmUuZ2V0RmlsdGVyKG1lLmRhdGFGaWVsZCk7XG5cbiAgICAgICAgICAgIGlmICghZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgZmlsdGVycyA9IHN0b3JlLmZpbHRlcnM7XG5cbiAgICAgICAgICAgICAgICBmaWx0ZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogbWUuZGF0YUZpZWxkLFxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjogb3BlcmF0b3IsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAuLi5tZS5maWx0ZXJDb25maWcgfHwge31cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHN0b3JlLmZpbHRlcnMgPSBmaWx0ZXJzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBjaGFuZ2VGaWx0ZXJWYWx1ZShkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB0YWJsZUNvbnRhaW5lciA9IG1lLnVwKCd0YWJsZS1jb250YWluZXInKSxcbiAgICAgICAgICAgIHN0b3JlICAgICAgICAgID0gdGFibGVDb250YWluZXIgJiYgdGFibGVDb250YWluZXIuc3RvcmUsXG4gICAgICAgICAgICB2YWx1ZSAgICAgICAgICA9IGRhdGEudmFsdWUsXG4gICAgICAgICAgICBmaWVsZCwgZmlsdGVyLCBmaWx0ZXJzLCBtb2RlbDtcblxuICAgICAgICBpZiAoc3RvcmUpIHtcbiAgICAgICAgICAgIGZpbHRlciA9IHN0b3JlLmdldEZpbHRlcihtZS5kYXRhRmllbGQpO1xuICAgICAgICAgICAgbW9kZWwgID0gc3RvcmUubW9kZWw7XG4gICAgICAgICAgICBmaWVsZCAgPSBtb2RlbCAmJiBtb2RlbC5nZXRGaWVsZChtZS5kYXRhRmllbGQpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgJiYgZmllbGQudHlwZS50b0xvd2VyQ2FzZSgpID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJzID0gc3RvcmUuZmlsdGVycztcblxuICAgICAgICAgICAgICAgIGZpbHRlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBtZS5kYXRhRmllbGQsXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnbGlrZScsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgLi4ubWUuZmlsdGVyQ29uZmlnIHx8IHt9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzdG9yZS5maWx0ZXJzID0gZmlsdGVycztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcmVtb3ZlU29ydGluZ0NzcygpIHtcbiAgICAgICAgbGV0IG1lICA9IHRoaXMsXG4gICAgICAgICAgICBjbHMgPSBtZS5jbHM7XG5cbiAgICAgICAgTmVvQXJyYXkuYWRkKGNscywgJ25lby1zb3J0LWhpZGRlbicpO1xuXG4gICAgICAgIG1lLmNscyAgICAgICA9IGNscztcbiAgICAgICAgbWUuX2lzU29ydGVkID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuZGF0YUZpZWxkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEuaW5kZXhcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YS5yZWNvcmRcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IGRhdGEudmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByZW5kZXJlcihkYXRhKSB7XG4gICAgICAgIHJldHVybiBkYXRhLnZhbHVlO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQnV0dG9uKTtcblxuZXhwb3J0IHtCdXR0b24gYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2VUb29sYmFyIGZyb20gJy4uLy4uL2NvbnRhaW5lci9Ub29sYmFyLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby50YWJsZS5oZWFkZXIuVG9vbGJhclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5Ub29sYmFyXG4gKi9cbmNsYXNzIFRvb2xiYXIgZXh0ZW5kcyBCYXNlVG9vbGJhciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby50YWJsZS5oZWFkZXIuVG9vbGJhcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnRhYmxlLmhlYWRlci5Ub29sYmFyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3RhYmxlLWhlYWRlci10b29sYmFyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3RhYmxlLWhlYWRlci10b29sYmFyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBjbHM9Wyd0YWJsZS1oZWFkZXItdG9vbGJhciddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsndGFibGUtaGVhZGVyLXRvb2xiYXInXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbGF5b3V0PSdiYXNlJ1xuICAgICAgICAgKi9cbiAgICAgICAgbGF5b3V0OiAnYmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGl0ZW1EZWZhdWx0cz17bnR5cGUgOiAndGFibGUtaGVhZGVyLWJ1dHRvbid9XG4gICAgICAgICAqL1xuICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgIG50eXBlIDogJ3RhYmxlLWhlYWRlci1idXR0b24nXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaG93SGVhZGVyRmlsdGVyc189ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHNob3dIZWFkZXJGaWx0ZXJzXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tPXt0YWc6ICd0aGVhZCcsY24gOiBbe3RhZzogJ3RyJyxjbiA6IFtdfV19XG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbToge1xuICAgICAgICAgICAgdGFnOiAndGhlYWQnLFxuICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgIHRhZzogJ3RyJyxcbiAgICAgICAgICAgICAgICBjbiA6IFtdXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc2hvd0hlYWRlckZpbHRlcnMgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTaG93SGVhZGVyRmlsdGVycyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICAgICAgbWUuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLnNldFNpbGVudCh7XG4gICAgICAgICAgICAgICAgICAgIHNob3dIZWFkZXJGaWx0ZXI6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkb2NrXG4gICAgICogQHJldHVybnMge1N0cmluZ30gbGF5b3V0Q29uZmlnXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgZ2V0TGF5b3V0Q29uZmlnKGRvY2spIHtcbiAgICAgICAgcmV0dXJuICdiYXNlJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTcGVjaWZ5IGEgZGlmZmVyZW50IHZkb20gaXRlbXMgcm9vdCBpZiBuZWVkZWQgKHVzZWZ1bCBpbiBjYXNlIHRoaXMgY29udGFpbmVyIHVzZXMgYSB3cmFwcGVyIG5vZGUpLlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBuZXcgdmRvbSBpdGVtcyByb290XG4gICAgICovXG4gICAgZ2V0VmRvbUl0ZW1zUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmRvbS5jblswXS5jbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTcGVjaWZ5IGEgZGlmZmVyZW50IHZkb20gcm9vdCBpZiBuZWVkZWQgdG8gYXBwbHkgdGhlIHRvcCBsZXZlbCBzdHlsZSBhdHRyaWJ1dGVzIG9uIGEgZGlmZmVyZW50IGxldmVsLlxuICAgICAqIE1ha2Ugc3VyZSB0byB1c2UgZ2V0Vm5vZGVSb290KCkgYXMgd2VsbCwgdG8ga2VlcCB0aGUgdmRvbSAmIHZub2RlIHRyZWVzIGluIHN5bmMuXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIG5ldyB2ZG9tIHJvb3RcbiAgICAgKi9cbiAgICBnZXRWZG9tUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmRvbS5jblswXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTcGVjaWZ5IGEgZGlmZmVyZW50IHZub2RlIHJvb3QgaWYgbmVlZGVkIHRvIGFwcGx5IHRoZSB0b3AgbGV2ZWwgc3R5bGUgYXR0cmlidXRlcyBvbiBhIGRpZmZlcmVudCBsZXZlbC5cbiAgICAgKiBNYWtlIHN1cmUgdG8gdXNlIGdldFZkb21Sb290KCkgYXMgd2VsbCwgdG8ga2VlcCB0aGUgdmRvbSAmIHZub2RlIHRyZWVzIGluIHN5bmMuXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIG5ldyB2bm9kZSByb290XG4gICAgICovXG4gICAgZ2V0Vm5vZGVSb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52bm9kZS5jaGlsZE5vZGVzWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgY3JlYXRlSXRlbXMoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuaXRlbURlZmF1bHRzLnNob3dIZWFkZXJGaWx0ZXIgPSBtZS5zaG93SGVhZGVyRmlsdGVycztcblxuICAgICAgICBzdXBlci5jcmVhdGVJdGVtcygpO1xuXG4gICAgICAgIGxldCBkb2NrTGVmdFdpZHRoICA9IDAsXG4gICAgICAgICAgICBkb2NrUmlnaHRXaWR0aCA9IDAsXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgICA9IG1lLml0ZW1zLFxuICAgICAgICAgICAgbGVuICAgICAgICAgICAgPSBpdGVtcy5sZW5ndGgsXG4gICAgICAgICAgICB2ZG9tICAgICAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBzdHlsZTtcblxuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgc3R5bGUgPSBpdGVtLndyYXBwZXJTdHlsZTtcblxuICAgICAgICAgICAgLy8gdG9kbzogb25seSBhZGQgcHggaWYgbnVtYmVyXG4gICAgICAgICAgICBpZiAoaXRlbS5tYXhXaWR0aCkge3N0eWxlLm1heFdpZHRoID0gaXRlbS5tYXhXaWR0aCArICdweCd9XG4gICAgICAgICAgICBpZiAoaXRlbS5taW5XaWR0aCkge3N0eWxlLm1pbldpZHRoID0gaXRlbS5taW5XaWR0aCArICdweCd9XG4gICAgICAgICAgICBpZiAoaXRlbS53aWR0aCkgICAge3N0eWxlLndpZHRoICAgID0gaXRlbS53aWR0aCArICdweCd9XG5cbiAgICAgICAgICAgIGlmIChpdGVtLmRvY2spIHtcbiAgICAgICAgICAgICAgICBpdGVtLnZkb20uY2xzID0gWyduZW8tbG9ja2VkJ107XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5kb2NrID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUubGVmdCA9IGRvY2tMZWZ0V2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRvY2tMZWZ0V2lkdGggKz0gKGl0ZW0ud2lkdGggKyAxKTsgLy8gdG9kbzogYm9yZGVycyBmaXhcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbS52ZG9tLmNscyA9IFtdOyAvLyByZW1vdmUgdGhlIGJ1dHRvbiBjbHMgZnJvbSB0aGUgdGggdGFnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGl0ZW0ud3JhcHBlclN0eWxlID0gc3R5bGU7XG5cbiAgICAgICAgICAgIC8vIGludmVyc2UgbG9vcCBkaXJlY3Rpb25cbiAgICAgICAgICAgIGl0ZW0gPSBpdGVtc1tsZW4gLSBpbmRleCAtMV07XG5cbiAgICAgICAgICAgIGlmIChpdGVtLmRvY2sgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSA9IGl0ZW0ud3JhcHBlclN0eWxlO1xuICAgICAgICAgICAgICAgIHN0eWxlLnJpZ2h0ID0gZG9ja1JpZ2h0V2lkdGggKyAncHgnO1xuXG4gICAgICAgICAgICAgICAgaXRlbS53cmFwcGVyU3R5bGUgPSBzdHlsZTtcblxuICAgICAgICAgICAgICAgIGRvY2tSaWdodFdpZHRoICs9IChpdGVtLndpZHRoICsgMSk7IC8vIHRvZG86IGJvcmRlcnMgZml4XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVG9vbGJhcik7XG5cbmV4cG9ydCB7VG9vbGJhciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQnV0dG9uICBmcm9tICcuL0J1dHRvbi5tanMnO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnLi9Ub29sYmFyLm1qcyc7XG5cbmV4cG9ydCB7QnV0dG9uLCBUb29sYmFyfTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnV0aWwuQ3NzXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIENzcyBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udXRpbC5Dc3MnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby51dGlsLkNzcydcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBydWxlc1xuICAgICAqL1xuICAgIHN0YXRpYyBpbnNlcnRSdWxlcyhydWxlcykge1xuICAgICAgICBOZW8ubWFpbi5hZGRvbi5TdHlsZXNoZWV0Lmluc2VydENzc1J1bGVzKHtcbiAgICAgICAgICAgIHJ1bGVzOiBydWxlc1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbnNlcnRlZCBDU1MgcnVsZXMnLCBkYXRhKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQXBwOiBHb3QgZXJyb3IgYXR0ZW1wdGluZyB0byBpbnNlcnQgQ1NTIHJ1bGVzJywgZXJyLCBydWxlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ3NzKTtcblxuZXhwb3J0IGRlZmF1bHQgQ3NzOyJdLCJzb3VyY2VSb290IjoiIn0=