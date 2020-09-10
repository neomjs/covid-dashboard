self["webpackChunk"](["vendors~chunks/examples-table-container-app~chunks/examples-tableStore-app"],{

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



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/Radio.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/Radio.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Radio; });
/* harmony import */ var _CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckBox.mjs */ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs");
/* harmony import */ var _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../manager/Component.mjs */ "./node_modules/neo.mjs/src/manager/Component.mjs");



/**
 * @class Neo.form.field.Radio
 * @extends Neo.form.field.CheckBox
 */
class Radio extends _CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.Radio'
         * @protected
         */
        className: 'Neo.form.field.Radio',
        /**
         * @member {String} ntype='radiofield'
         * @protected
         */
        ntype: 'radiofield',
        /**
         * @member {Array} cls=['neo-radiofield']
         */
        cls: ['neo-radiofield'],
        /**
         * @member {String} inputType='radio'
         */
        inputType: 'radio',
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            cn: [{
                tag: 'label',
                cls: ['neo-radio-label']
            }, {
                tag: 'input',
                cls: ['neo-radio-input']
            }, {
                tag: 'label',
                cls: ['neo-radio-value-label']
            }]
        }
    }}

    /**
     * Triggered after the checked config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetChecked(value, oldValue) {
        super.afterSetChecked(value, oldValue);

        // update radios with the same name to be unchecked
        if (value) {
            this.uncheckGroupItems();
        }
    }

    /**
     * Gets triggered when a user checks a radio input.
     * @param {Object} data
     */
    onInputValueChange(data) {
        super.onInputValueChange(data);
        this.uncheckGroupItems();
    }

    /**
     * Radios do not fire a change event for "uncheck", so we need to iterate over other radios with the same name.
     */
    uncheckGroupItems() {
        let me = this,
            radios;

        // discuss: we could limit this to radios inside the same form, IF a top level form is used
        radios = _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].find({
            ntype: 'radiofield',
            name : me.name
        });

        radios.forEach(item => {
            if (item.id !== me.id && item._checked) {
                item._checked = false; // silent update

                // keep the vdom & vnode in sync for future updates
                item.vdom.cn[1].checked = false;

                if (item.vnode) {
                    item.vnode.childNodes[me.hideLabel ? 0 : 1].attributes.checked = 'false';
                }

                item.fire('change', {
                    component: me,
                    oldValue : true,
                    value    : false
                });
            }
        });
    }
}

Neo.applyClassConfig(Radio);



/***/ }),

/***/ "./node_modules/neo.mjs/src/selection/table/CellColumnModel.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/neo.mjs/src/selection/table/CellColumnModel.mjs ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CellColumnModel; });
/* harmony import */ var _CellModel_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CellModel.mjs */ "./node_modules/neo.mjs/src/selection/table/CellModel.mjs");
/* harmony import */ var _ColumnModel_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColumnModel.mjs */ "./node_modules/neo.mjs/src/selection/table/ColumnModel.mjs");
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");




/**
 * @class Neo.selection.table.CellColumnModel
 * @extends Neo.selection.table.CellModel
 */
class CellColumnModel extends _CellModel_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.selection.table.CellColumnModel'
         * @protected
         */
        className: 'Neo.selection.table.CellColumnModel',
        /**
         * @member {String} ntype='selection-table-cellcolumnmodel'
         * @protected
         */
        ntype: 'selection-table-cellcolumnmodel',
        /**
         * @member {String} cls='neo-selection-cellcolumnmodel'
         * @protected
         */
        cls: 'neo-selection-cellcolumnmodel',
        /**
         * @member {String} selectedColumnCellCls='selected-column-cell'
         * @protected
         */
        selectedColumnCellCls: 'selected-column-cell',
        /**
         * @member {Array|null} selectedColumnCellIds=null
         * @protected
         */
        selectedColumnCellIds: null
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        this.selectedColumnCellIds = [];
    }

    /**
     *
     * @param {Boolean} [silent] true to prevent a vdom update
     */
    deselectAllCells(silent) {
        let me      = this,
            cellIds = [...me.selectedColumnCellIds],
            view    = me.view,
            vdom    = view.vdom;

        cellIds.forEach(cellId => {
            me.deselect(cellId, true, me.selectedColumnCellIds, me.selectedColumnCellCls);
        });

        if (!silent) {
            view.vdom = vdom;
        }
    }

    /**
     *
     * @param {Object} data
     */
    onCellClick(data) {
        let me   = this,
            id   = _ColumnModel_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getCellId(data.path),
            columnNodeIds, index, tbodyNode;

        if (id) {
            index         = _ColumnModel_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getColumnIndex(id, me.view.items[0].items);
            tbodyNode     = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].findVdomChild(me.view.vdom, {tag: 'tbody'}).vdom;
            columnNodeIds = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getColumnNodesIds(tbodyNode, index);

            me.deselectAllCells(true);
            me.select(columnNodeIds, me.selectedColumnCellIds, me.selectedColumnCellCls);
        }

        super.onCellClick(data);
    }

    /**
     *
     * @param {Object} data
     * @param {Number} step
     */
    onNavKeyColumn(data, step) {
        let me            = this,
            idArray       = _ColumnModel_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getCellId(data.path).split('__'),
            currentColumn = idArray[2],
            view          = me.view,
            dataFields    = view.columns.map(c => c.dataField),
            newIndex      = (dataFields.indexOf(currentColumn) + step) % dataFields.length,
            columnNodeIds, tbodyNode;

        while (newIndex < 0) {
            newIndex += dataFields.length;
        }

        tbodyNode     = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].findVdomChild(me.view.vdom, {tag: 'tbody'}).vdom;
        columnNodeIds = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getColumnNodesIds(tbodyNode, newIndex);

        me.deselectAllCells(true);
        me.select(columnNodeIds, me.selectedColumnCellIds, me.selectedColumnCellCls);

        super.onNavKeyColumn(data, step);
    }

    /**
     *
     */
    unregister() {
        this.deselectAllCells();
        super.unregister();
    }
}

Neo.applyClassConfig(CellColumnModel);



/***/ }),

/***/ "./node_modules/neo.mjs/src/selection/table/CellModel.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/neo.mjs/src/selection/table/CellModel.mjs ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CellModel; });
/* harmony import */ var _Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model.mjs */ "./node_modules/neo.mjs/src/selection/Model.mjs");


/**
 * @class Neo.selection.table.CellModel
 * @extends Neo.selection.Model
 */
class CellModel extends _Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.selection.table.CellModel'
         * @protected
         */
        className: 'Neo.selection.table.CellModel',
        /**
         * @member {String} ntype='selection-table-cellmodel'
         * @protected
         */
        ntype: 'selection-table-cellmodel',
        /**
         * @member {String} cls='selection-cellmodel'
         * @protected
         */
        cls: 'neo-selection-cellmodel'
    }}

    /**
     *
     */
    addDomListener() {
        let me           = this,
            view         = me.view,
            domListeners = view.domListeners;

        domListeners.push({
            click   : me.onCellClick,
            delegate: '.neo-table-cell',
            scope   : me
        });

        view.domListeners = domListeners;
    }

    /**
     *
     * @param {Object} data
     */
    onCellClick(data) {
        let me   = this,
            id   = null,
            path = data.path,
            i    = 0,
            len  = path.length;

        for (; i < len; i++) {
            if (path[i].tagName === 'td') {
                id = path[i].id;
                break;
            }
        }

        if (id) {
            me.toggleSelection(id);
        }
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
    onKeyDownLeft(data) {
        this.onNavKeyColumn(data, -1);
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownRight(data) {
        this.onNavKeyColumn(data, 1);
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
    onNavKeyColumn(data, step) {
        let me            = this,
            view          = me.view,
            idArray       = data.path[0].id.split('__'),
            currentColumn = idArray[2],
            dataFields    = view.columns.map(c => c.dataField),
            newIndex      = (dataFields.indexOf(currentColumn) + step) % dataFields.length,
            id;

        while (newIndex < 0) {
            newIndex += dataFields.length;
        }

        idArray[2] = dataFields[newIndex];
        id = idArray.join('__');

        me.select(id);
        view.focus(id);
    }

    /**
     *
     * @param {Object} data
     * @param {Number} step
     */
    onNavKeyRow(data, step) {
        let me       = this,
            view     = me.view,
            store    = view.store,
            idArray  = data.path[0].id.split('__'),
            recordId = idArray[1],
            newIndex = (store.indexOf(recordId) + step) % store.getCount(),
            id;

        while (newIndex < 0) {
            newIndex += store.getCount();
        }

        idArray[1] = store.getKeyAt(newIndex);
        id = idArray.join('__');

        me.select(id);
        view.focus(id);
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
            view.keys._keys.push(
                {fn: 'onKeyDownDown'  ,key: 'Down'  ,scope: id},
                {fn: 'onKeyDownLeft'  ,key: 'Left'  ,scope: id},
                {fn: 'onKeyDownRight' ,key: 'Right' ,scope: id},
                {fn: 'onKeyDownUp'    ,key: 'Up'    ,scope: id}
            );
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
            view.keys.removeKeys([
                {fn: 'onKeyDownDown'  ,key: 'Down'  ,scope: id},
                {fn: 'onKeyDownLeft'  ,key: 'Left'  ,scope: id},
                {fn: 'onKeyDownRight' ,key: 'Right' ,scope: id},
                {fn: 'onKeyDownUp'    ,key: 'Up'    ,scope: id}
            ]);
        }

        super.unregister();
    }
}

Neo.applyClassConfig(CellModel);



/***/ }),

/***/ "./node_modules/neo.mjs/src/selection/table/CellRowModel.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/neo.mjs/src/selection/table/CellRowModel.mjs ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CellRowModel; });
/* harmony import */ var _CellModel_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CellModel.mjs */ "./node_modules/neo.mjs/src/selection/table/CellModel.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _RowModel_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RowModel.mjs */ "./node_modules/neo.mjs/src/selection/table/RowModel.mjs");
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");





/**
 * @class Neo.selection.table.CellRowModel
 * @extends Neo.selection.table.CellModel
 */
class CellRowModel extends _CellModel_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.selection.table.CellRowModel'
         * @protected
         */
        className: 'Neo.selection.table.CellRowModel',
        /**
         * @member {String} ntype='selection-table-cellrowmodel'
         * @protected
         */
        ntype: 'selection-table-cellrowmodel',
        /**
         * @member {String} cls='neo-selection-cellrowmodel'
         * @protected
         */
        cls: 'neo-selection-cellrowmodel',
        /**
         * @member {Array|null} selectedRowIds=null
         * @protected
         */
        selectedRowIds: null
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        this.selectedRowIds = [];
    }

    /**
     *
     * @param {Boolean} [silent] true to prevent a vdom update
     */
    deselectAllRows(silent) {
        let me     = this,
            rowIds = [...me.selectedRowIds],
            view   = me.view,
            vdom   = view.vdom;

        rowIds.forEach(rowId => {
            me.deselectRow(rowId, true);
        });

        if (!silent) {
            view.vdom = vdom;
        }
    }

    /**
     *
     * @param {String} rowId
     * @param {Boolean} [silent] true to prevent a vdom update
     */
    deselectRow(rowId, silent) {
        let me   = this,
            view = me.view,
            vdom = view.vdom,
            node = view.getVdomChild(rowId),
            cls;

        if (node) {
            cls = node.cls || [];
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, me.selectedCls);
            node.cls = cls;
        }

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(me.selectedRowIds, rowId);

        if (!silent) {
            view.vdom = vdom;
        }
    }

    /**
     *
     * @param {Object} data
     */
    onCellClick(data) {
        let me   = this,
            node = _RowModel_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getRowNode(data.path), // we could add a separate export for this method
            id   = node && node.id;

        if (id) {
            me.deselectAllRows(true);
            me.selectRow(id);
        }

        super.onCellClick(data);
    }

    /**
     *
     * @param {Object} data
     * @param {Number} step
     */
    onNavKeyRow(data, step) {
        super.onNavKeyRow(data, step);

        let me         = this,
            node       = _RowModel_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getRowNode(data.path),
            view       = me.view,
            store      = view.store,
            vdomNode   = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].findVdomChild(view.vdom, node.id),
            newIndex   = (vdomNode.index + step) % store.getCount(),
            parentNode = vdomNode.parentNode,
            id;

        while (newIndex < 0) {
            newIndex += store.getCount();
        }

        id = parentNode.cn[newIndex].id;

        if (id) {
            me.deselectAllRows(true);
            me.selectRow(id);
        }
    }

    /**
     *
     * @param {String} id
     * @param {Boolean} [silent]
     */
    selectRow(id, silent) {
        let me       = this,
            view     = me.view,
            vdom     = view.vdom,
            vdomNode = id && view.getVdomChild(id),
            cls;

        if (vdomNode) {
            cls = vdomNode.cls || [];
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, me.selectedCls);
            vdomNode.cls = cls;

            me.selectedRowIds.push(id);
        }

        if (!silent) {
            view.vdom = vdom;
        }
    }

    /**
     *
     */
    unregister() {
        this.deselectAllRows();
        super.unregister();
    }
}

Neo.applyClassConfig(CellRowModel);



/***/ }),

/***/ "./node_modules/neo.mjs/src/selection/table/ColumnModel.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/neo.mjs/src/selection/table/ColumnModel.mjs ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColumnModel; });
/* harmony import */ var _Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model.mjs */ "./node_modules/neo.mjs/src/selection/Model.mjs");
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");



/**
 * @class Neo.selection.table.ColumnModel
 * @extends Neo.selection.Model
 */
class ColumnModel extends _Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.selection.table.ColumnModel'
         * @protected
         */
        className: 'Neo.selection.table.ColumnModel',
        /**
         * @member {String} ntype='selection-table-columnmodel'
         * @protected
         */
        ntype: 'selection-table-columnmodel',
        /**
         * @member {String} cls='selection-columnmodel'
         * @protected
         */
        cls: 'neo-selection-columnmodel'
    }}

    /**
     *
     */
    addDomListener() {
        let me           = this,
            view         = me.view,
            domListeners = view.domListeners;

        domListeners.push({
            click   : me.onCellClick,
            delegate: '.neo-table-cell',
            scope   : me
        });

        view.domListeners = domListeners;
    }

    /**
     *
     * @param {Object} eventPath
     * @returns {String|null} cellId
     */
    static getCellId(eventPath) {
        let id   = null,
            i    = 0,
            len  = eventPath.length;

        for (; i < len; i++) {
            if (eventPath[i].tagName === 'td') {
                id = eventPath[i].id;
                break;
            }
        }

        return id;
    }

    /**
     * todo: move to table.Container or view
     * @param {String} cellId
     * @param {Array} columns
     * @returns {Number} index
     */
    static getColumnIndex(cellId, columns) {
        let idArray       = cellId.split('__'),
            currentColumn = idArray[2],
            dataFields    = columns.map(c => c.dataField);

        return dataFields.indexOf(currentColumn);
    }

    /**
     *
     * @param {Object} data
     */
    onCellClick(data) {
        let me   = this,
            id   = ColumnModel.getCellId(data.path),
            columnNodeIds, index, tbodyNode;

        if (id) {
            index         = ColumnModel.getColumnIndex(id, me.view.items[0].items);
            tbodyNode     = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].findVdomChild(me.view.vdom, {tag: 'tbody'}).vdom;
            columnNodeIds = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getColumnNodesIds(tbodyNode, index);

            me.select(columnNodeIds);
        }
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownLeft(data) {
        this.onNavKeyColumn(data, -1);
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownRight(data) {
        this.onNavKeyColumn(data, 1);
    }

    /**
     *
     * @param {Object} data
     * @param {Number} step
     */
    onNavKeyColumn(data, step) {
        let me            = this,
            idArray       = ColumnModel.getCellId(data.path).split('__'),
            currentColumn = idArray[2],
            view          = me.view,
            dataFields    = view.columns.map(c => c.dataField),
            newIndex      = (dataFields.indexOf(currentColumn) + step) % dataFields.length,
            columnNodeIds, id, tbodyNode;

        while (newIndex < 0) {
            newIndex += dataFields.length;
        }

        idArray[2] = dataFields[newIndex];
        id = idArray.join('__');

        tbodyNode     = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].findVdomChild(me.view.vdom, {tag: 'tbody'}).vdom;
        columnNodeIds = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getColumnNodesIds(tbodyNode, newIndex);

        me.select(columnNodeIds);
        view.focus(id); // we have to focus one cell to ensure the keynav keeps working
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
                fn   : 'onKeyDownLeft',
                key  : 'Left',
                scope: id
            }, {
                fn   : 'onKeyDownRight',
                key  : 'Right',
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
                fn   : 'onKeyDownLeft',
                key  : 'Left',
                scope: id
            }, {
                fn   : 'onKeyDownRight',
                key  : 'Right',
                scope: id
            }]);
        }

        super.unregister();
    }
}

Neo.applyClassConfig(ColumnModel);



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9DaGVja0JveC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2Zvcm0vZmllbGQvUmFkaW8ubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9zZWxlY3Rpb24vdGFibGUvQ2VsbENvbHVtbk1vZGVsLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvc2VsZWN0aW9uL3RhYmxlL0NlbGxNb2RlbC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3NlbGVjdGlvbi90YWJsZS9DZWxsUm93TW9kZWwubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9zZWxlY3Rpb24vdGFibGUvQ29sdW1uTW9kZWwubWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlEQUFJO0FBQzNCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsTUFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QixlQUFlLGNBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFP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QixlQUFlLE1BQU07QUFDckIsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLHNEQUFRLDhCQUE4QixhQUFhO0FBQy9FLDRCQUE0QixzREFBUTs7QUFFcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0JBQXdCLHNEQUFRLDhCQUE4QixhQUFhO0FBQzNFLHdCQUF3QixzREFBUTs7QUFFaEM7QUFDQSx1QkFBdUI7QUFDdkI7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUJBQW1CO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLXRhYmxlLWNvbnRhaW5lci1hcHB+Y2h1bmtzL2V4YW1wbGVzLXRhYmxlU3RvcmUtYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2UgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5mb3JtLmZpZWxkLkNoZWNrQm94XG4gKiBAZXh0ZW5kcyBOZW8uZm9ybS5maWVsZC5CYXNlXG4gKi9cbmNsYXNzIENoZWNrQm94IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5mb3JtLmZpZWxkLkNoZWNrQm94J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uZm9ybS5maWVsZC5DaGVja0JveCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjaGVja2JveGZpZWxkJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NoZWNrYm94ZmllbGQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gY2hlY2tlZF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGNoZWNrZWRfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBjbHM9WyduZW8tY2hlY2tib3hmaWVsZCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWNoZWNrYm94ZmllbGQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGhpZGVMYWJlbF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGhpZGVMYWJlbF86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaGlkZVZhbHVlTGFiZWxfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBoaWRlVmFsdWVMYWJlbF86IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGlucHV0VHlwZV89J2NoZWNrYm94J1xuICAgICAgICAgKi9cbiAgICAgICAgaW5wdXRUeXBlXzogJ2NoZWNrYm94JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbGFiZWxUZXh0Xz0nTGFiZWxUZXh0J1xuICAgICAgICAgKi9cbiAgICAgICAgbGFiZWxUZXh0XzogJ0xhYmVsVGV4dCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBkZWZhdWx0cyB0byBweFxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8U3RyaW5nfSBsYWJlbFdpZHRoXz0xNTBcbiAgICAgICAgICovXG4gICAgICAgIGxhYmVsV2lkdGhfOiAxNTAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IFRoZSBuYW1lIChncm91cCkgb2YgdGhlIGlucHV0IGRvbSBub2RlXG4gICAgICAgICAqL1xuICAgICAgICBuYW1lXzogJycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHZhbHVlTGFiZWxUZXh0Xz0nVmFsdWVMYWJlbCdcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlTGFiZWxUZXh0XzogJ1ZhbHVlTGFiZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIHRhZzogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWNoZWNrYm94LWxhYmVsJ11cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0YWc6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby1jaGVja2JveC1pbnB1dCddXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGFnOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIGNsczogWyduZW8tY2hlY2tib3gtdmFsdWUtbGFiZWwnXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IE5lby5jbG9uZShtZS5kb21MaXN0ZW5lcnMsIHRydWUpLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGlucHV0RWwgICAgICA9IHZkb20uY25bMV0sXG4gICAgICAgICAgICB2YWx1ZUxhYmVsICAgPSB2ZG9tLmNuWzJdO1xuXG4gICAgICAgIGlucHV0RWwuaWQgPSB2YWx1ZUxhYmVsLmZvciA9IG1lLmlkICsgJy1pbnB1dCc7XG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgIGRvbUxpc3RlbmVycy5wdXNoKHtcbiAgICAgICAgICAgIGNoYW5nZToge1xuICAgICAgICAgICAgICAgIGZuICAgOiBtZS5vbklucHV0VmFsdWVDaGFuZ2UsXG4gICAgICAgICAgICAgICAgc2NvcGU6IG1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmRvbUxpc3RlbmVycyA9IGRvbUxpc3RlbmVycztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0Q2hlY2tlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgdmRvbS5jblsxXS5jaGVja2VkID0gdmFsdWU7XG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBtZS5maXJlKCdjaGFuZ2UnLCB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBtZSxcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZSA6IG9sZFZhbHVlLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBoaWRlTGFiZWwgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SGlkZUxhYmVsKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICB2ZG9tLmNuWzBdLnJlbW92ZURvbSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaGlkZUxhYmVsVmFsdWUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SGlkZVZhbHVlTGFiZWwodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMl0ucmVtb3ZlRG9tID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBpbnB1dFR5cGUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SW5wdXRUeXBlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICB2ZG9tLmNuWzFdLnR5cGUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGxhYmVsVGV4dCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRMYWJlbFRleHQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMF0uaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBsYWJlbFdpZHRoIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TGFiZWxXaWR0aCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgaWYgKCFtZS5oaWRlTGFiZWwpIHtcbiAgICAgICAgICAgIHZkb20uY25bMF0ud2lkdGggPSB2YWx1ZTtcbiAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBuYW1lIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldE5hbWUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMV0ubmFtZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdmFsdWUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VmFsdWUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgICAgIHZkb20uY25bMV0udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5hZnRlclNldFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB2YWx1ZUxhYmVsIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFZhbHVlTGFiZWxUZXh0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICBpZiAoIW1lLmhpZGVWYWx1ZUxhYmVsKSB7XG4gICAgICAgICAgICB2ZG9tLmNuWzJdLmlubmVySFRNTCA9IHZhbHVlO1xuICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRyaWdnZXJlZCB3aGVuIGEgdXNlciBjaGVja3MgYSBjaGVja2JveCBpbnB1dC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uSW5wdXRWYWx1ZUNoYW5nZShkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNoZWNrZWQgPSBkYXRhLnRhcmdldC5jaGVja2VkO1xuXG4gICAgICAgIG1lLl9jaGVja2VkID0gY2hlY2tlZDsgLy8gc2lsZW50IHVwZGF0ZVxuXG4gICAgICAgIC8vIGtlZXAgdGhlIHZkb20gJiB2bm9kZSBpbiBzeW5jIGZvciBmdXR1cmUgdXBkYXRlc1xuICAgICAgICBtZS52ZG9tLmNuWzFdLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgICAgICBtZS52bm9kZS5jaGlsZE5vZGVzW21lLmhpZGVMYWJlbCA/IDAgOiAxXS5hdHRyaWJ1dGVzLmNoZWNrZWQgPSBjaGVja2VkICsgJyc7XG5cbiAgICAgICAgbWUuZmlyZSgnY2hhbmdlJywge1xuICAgICAgICAgICAgY29tcG9uZW50OiBtZSxcbiAgICAgICAgICAgIG9sZFZhbHVlIDogIWNoZWNrZWQsXG4gICAgICAgICAgICB2YWx1ZSAgICA6IGNoZWNrZWRcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDaGVja0JveCk7XG5cbmV4cG9ydCB7Q2hlY2tCb3ggYXMgZGVmYXVsdH07IiwiaW1wb3J0IENoZWNrQm94ICAgICAgICAgZnJvbSAnLi9DaGVja0JveC5tanMnO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSAnLi4vLi4vbWFuYWdlci9Db21wb25lbnQubWpzJ1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uZm9ybS5maWVsZC5SYWRpb1xuICogQGV4dGVuZHMgTmVvLmZvcm0uZmllbGQuQ2hlY2tCb3hcbiAqL1xuY2xhc3MgUmFkaW8gZXh0ZW5kcyBDaGVja0JveCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5mb3JtLmZpZWxkLlJhZGlvJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uZm9ybS5maWVsZC5SYWRpbycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdyYWRpb2ZpZWxkJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3JhZGlvZmllbGQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGNscz1bJ25lby1yYWRpb2ZpZWxkJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tcmFkaW9maWVsZCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBpbnB1dFR5cGU9J3JhZGlvJ1xuICAgICAgICAgKi9cbiAgICAgICAgaW5wdXRUeXBlOiAncmFkaW8nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIHRhZzogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLXJhZGlvLWxhYmVsJ11cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0YWc6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby1yYWRpby1pbnB1dCddXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGFnOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIGNsczogWyduZW8tcmFkaW8tdmFsdWUtbGFiZWwnXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGNoZWNrZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRDaGVja2VkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBzdXBlci5hZnRlclNldENoZWNrZWQodmFsdWUsIG9sZFZhbHVlKTtcblxuICAgICAgICAvLyB1cGRhdGUgcmFkaW9zIHdpdGggdGhlIHNhbWUgbmFtZSB0byBiZSB1bmNoZWNrZWRcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnVuY2hlY2tHcm91cEl0ZW1zKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRyaWdnZXJlZCB3aGVuIGEgdXNlciBjaGVja3MgYSByYWRpbyBpbnB1dC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uSW5wdXRWYWx1ZUNoYW5nZShkYXRhKSB7XG4gICAgICAgIHN1cGVyLm9uSW5wdXRWYWx1ZUNoYW5nZShkYXRhKTtcbiAgICAgICAgdGhpcy51bmNoZWNrR3JvdXBJdGVtcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJhZGlvcyBkbyBub3QgZmlyZSBhIGNoYW5nZSBldmVudCBmb3IgXCJ1bmNoZWNrXCIsIHNvIHdlIG5lZWQgdG8gaXRlcmF0ZSBvdmVyIG90aGVyIHJhZGlvcyB3aXRoIHRoZSBzYW1lIG5hbWUuXG4gICAgICovXG4gICAgdW5jaGVja0dyb3VwSXRlbXMoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICByYWRpb3M7XG5cbiAgICAgICAgLy8gZGlzY3Vzczogd2UgY291bGQgbGltaXQgdGhpcyB0byByYWRpb3MgaW5zaWRlIHRoZSBzYW1lIGZvcm0sIElGIGEgdG9wIGxldmVsIGZvcm0gaXMgdXNlZFxuICAgICAgICByYWRpb3MgPSBDb21wb25lbnRNYW5hZ2VyLmZpbmQoe1xuICAgICAgICAgICAgbnR5cGU6ICdyYWRpb2ZpZWxkJyxcbiAgICAgICAgICAgIG5hbWUgOiBtZS5uYW1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJhZGlvcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uaWQgIT09IG1lLmlkICYmIGl0ZW0uX2NoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBpdGVtLl9jaGVja2VkID0gZmFsc2U7IC8vIHNpbGVudCB1cGRhdGVcblxuICAgICAgICAgICAgICAgIC8vIGtlZXAgdGhlIHZkb20gJiB2bm9kZSBpbiBzeW5jIGZvciBmdXR1cmUgdXBkYXRlc1xuICAgICAgICAgICAgICAgIGl0ZW0udmRvbS5jblsxXS5jaGVja2VkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbS52bm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnZub2RlLmNoaWxkTm9kZXNbbWUuaGlkZUxhYmVsID8gMCA6IDFdLmF0dHJpYnV0ZXMuY2hlY2tlZCA9ICdmYWxzZSc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaXRlbS5maXJlKCdjaGFuZ2UnLCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogbWUsXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgICAgOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFJhZGlvKTtcblxuZXhwb3J0IHtSYWRpbyBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ2VsbE1vZGVsICAgZnJvbSAnLi9DZWxsTW9kZWwubWpzJztcbmltcG9ydCBDb2x1bW5Nb2RlbCBmcm9tICcuL0NvbHVtbk1vZGVsLm1qcyc7XG5pbXBvcnQgVkRvbVV0aWwgICAgZnJvbSAnLi4vLi4vdXRpbC9WRG9tLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5zZWxlY3Rpb24udGFibGUuQ2VsbENvbHVtbk1vZGVsXG4gKiBAZXh0ZW5kcyBOZW8uc2VsZWN0aW9uLnRhYmxlLkNlbGxNb2RlbFxuICovXG5jbGFzcyBDZWxsQ29sdW1uTW9kZWwgZXh0ZW5kcyBDZWxsTW9kZWwge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uc2VsZWN0aW9uLnRhYmxlLkNlbGxDb2x1bW5Nb2RlbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnNlbGVjdGlvbi50YWJsZS5DZWxsQ29sdW1uTW9kZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nc2VsZWN0aW9uLXRhYmxlLWNlbGxjb2x1bW5tb2RlbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdzZWxlY3Rpb24tdGFibGUtY2VsbGNvbHVtbm1vZGVsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xzPSduZW8tc2VsZWN0aW9uLWNlbGxjb2x1bW5tb2RlbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiAnbmVvLXNlbGVjdGlvbi1jZWxsY29sdW1ubW9kZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBzZWxlY3RlZENvbHVtbkNlbGxDbHM9J3NlbGVjdGVkLWNvbHVtbi1jZWxsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzZWxlY3RlZENvbHVtbkNlbGxDbHM6ICdzZWxlY3RlZC1jb2x1bW4tY2VsbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheXxudWxsfSBzZWxlY3RlZENvbHVtbkNlbGxJZHM9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzZWxlY3RlZENvbHVtbkNlbGxJZHM6IG51bGxcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZENvbHVtbkNlbGxJZHMgPSBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudF0gdHJ1ZSB0byBwcmV2ZW50IGEgdmRvbSB1cGRhdGVcbiAgICAgKi9cbiAgICBkZXNlbGVjdEFsbENlbGxzKHNpbGVudCkge1xuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjZWxsSWRzID0gWy4uLm1lLnNlbGVjdGVkQ29sdW1uQ2VsbElkc10sXG4gICAgICAgICAgICB2aWV3ICAgID0gbWUudmlldyxcbiAgICAgICAgICAgIHZkb20gICAgPSB2aWV3LnZkb207XG5cbiAgICAgICAgY2VsbElkcy5mb3JFYWNoKGNlbGxJZCA9PiB7XG4gICAgICAgICAgICBtZS5kZXNlbGVjdChjZWxsSWQsIHRydWUsIG1lLnNlbGVjdGVkQ29sdW1uQ2VsbElkcywgbWUuc2VsZWN0ZWRDb2x1bW5DZWxsQ2xzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgICAgICAgIHZpZXcudmRvbSA9IHZkb207XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25DZWxsQ2xpY2soZGF0YSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBpZCAgID0gQ29sdW1uTW9kZWwuZ2V0Q2VsbElkKGRhdGEucGF0aCksXG4gICAgICAgICAgICBjb2x1bW5Ob2RlSWRzLCBpbmRleCwgdGJvZHlOb2RlO1xuXG4gICAgICAgIGlmIChpZCkge1xuICAgICAgICAgICAgaW5kZXggICAgICAgICA9IENvbHVtbk1vZGVsLmdldENvbHVtbkluZGV4KGlkLCBtZS52aWV3Lml0ZW1zWzBdLml0ZW1zKTtcbiAgICAgICAgICAgIHRib2R5Tm9kZSAgICAgPSBWRG9tVXRpbC5maW5kVmRvbUNoaWxkKG1lLnZpZXcudmRvbSwge3RhZzogJ3Rib2R5J30pLnZkb207XG4gICAgICAgICAgICBjb2x1bW5Ob2RlSWRzID0gVkRvbVV0aWwuZ2V0Q29sdW1uTm9kZXNJZHModGJvZHlOb2RlLCBpbmRleCk7XG5cbiAgICAgICAgICAgIG1lLmRlc2VsZWN0QWxsQ2VsbHModHJ1ZSk7XG4gICAgICAgICAgICBtZS5zZWxlY3QoY29sdW1uTm9kZUlkcywgbWUuc2VsZWN0ZWRDb2x1bW5DZWxsSWRzLCBtZS5zZWxlY3RlZENvbHVtbkNlbGxDbHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIub25DZWxsQ2xpY2soZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzdGVwXG4gICAgICovXG4gICAgb25OYXZLZXlDb2x1bW4oZGF0YSwgc3RlcCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpZEFycmF5ICAgICAgID0gQ29sdW1uTW9kZWwuZ2V0Q2VsbElkKGRhdGEucGF0aCkuc3BsaXQoJ19fJyksXG4gICAgICAgICAgICBjdXJyZW50Q29sdW1uID0gaWRBcnJheVsyXSxcbiAgICAgICAgICAgIHZpZXcgICAgICAgICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgZGF0YUZpZWxkcyAgICA9IHZpZXcuY29sdW1ucy5tYXAoYyA9PiBjLmRhdGFGaWVsZCksXG4gICAgICAgICAgICBuZXdJbmRleCAgICAgID0gKGRhdGFGaWVsZHMuaW5kZXhPZihjdXJyZW50Q29sdW1uKSArIHN0ZXApICUgZGF0YUZpZWxkcy5sZW5ndGgsXG4gICAgICAgICAgICBjb2x1bW5Ob2RlSWRzLCB0Ym9keU5vZGU7XG5cbiAgICAgICAgd2hpbGUgKG5ld0luZGV4IDwgMCkge1xuICAgICAgICAgICAgbmV3SW5kZXggKz0gZGF0YUZpZWxkcy5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICB0Ym9keU5vZGUgICAgID0gVkRvbVV0aWwuZmluZFZkb21DaGlsZChtZS52aWV3LnZkb20sIHt0YWc6ICd0Ym9keSd9KS52ZG9tO1xuICAgICAgICBjb2x1bW5Ob2RlSWRzID0gVkRvbVV0aWwuZ2V0Q29sdW1uTm9kZXNJZHModGJvZHlOb2RlLCBuZXdJbmRleCk7XG5cbiAgICAgICAgbWUuZGVzZWxlY3RBbGxDZWxscyh0cnVlKTtcbiAgICAgICAgbWUuc2VsZWN0KGNvbHVtbk5vZGVJZHMsIG1lLnNlbGVjdGVkQ29sdW1uQ2VsbElkcywgbWUuc2VsZWN0ZWRDb2x1bW5DZWxsQ2xzKTtcblxuICAgICAgICBzdXBlci5vbk5hdktleUNvbHVtbihkYXRhLCBzdGVwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHVucmVnaXN0ZXIoKSB7XG4gICAgICAgIHRoaXMuZGVzZWxlY3RBbGxDZWxscygpO1xuICAgICAgICBzdXBlci51bnJlZ2lzdGVyKCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDZWxsQ29sdW1uTW9kZWwpO1xuXG5leHBvcnQge0NlbGxDb2x1bW5Nb2RlbCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgTW9kZWwgZnJvbSAnLi4vTW9kZWwubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnNlbGVjdGlvbi50YWJsZS5DZWxsTW9kZWxcbiAqIEBleHRlbmRzIE5lby5zZWxlY3Rpb24uTW9kZWxcbiAqL1xuY2xhc3MgQ2VsbE1vZGVsIGV4dGVuZHMgTW9kZWwge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uc2VsZWN0aW9uLnRhYmxlLkNlbGxNb2RlbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnNlbGVjdGlvbi50YWJsZS5DZWxsTW9kZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nc2VsZWN0aW9uLXRhYmxlLWNlbGxtb2RlbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdzZWxlY3Rpb24tdGFibGUtY2VsbG1vZGVsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xzPSdzZWxlY3Rpb24tY2VsbG1vZGVsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6ICduZW8tc2VsZWN0aW9uLWNlbGxtb2RlbCdcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBhZGREb21MaXN0ZW5lcigpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2aWV3ICAgICAgICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gdmlldy5kb21MaXN0ZW5lcnM7XG5cbiAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgY2xpY2sgICA6IG1lLm9uQ2VsbENsaWNrLFxuICAgICAgICAgICAgZGVsZWdhdGU6ICcubmVvLXRhYmxlLWNlbGwnLFxuICAgICAgICAgICAgc2NvcGUgICA6IG1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZpZXcuZG9tTGlzdGVuZXJzID0gZG9tTGlzdGVuZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkNlbGxDbGljayhkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGlkICAgPSBudWxsLFxuICAgICAgICAgICAgcGF0aCA9IGRhdGEucGF0aCxcbiAgICAgICAgICAgIGkgICAgPSAwLFxuICAgICAgICAgICAgbGVuICA9IHBhdGgubGVuZ3RoO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwYXRoW2ldLnRhZ05hbWUgPT09ICd0ZCcpIHtcbiAgICAgICAgICAgICAgICBpZCA9IHBhdGhbaV0uaWQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgIG1lLnRvZ2dsZVNlbGVjdGlvbihpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25LZXlEb3duRG93bihkYXRhKSB7XG4gICAgICAgIHRoaXMub25OYXZLZXlSb3coZGF0YSwgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uS2V5RG93bkxlZnQoZGF0YSkge1xuICAgICAgICB0aGlzLm9uTmF2S2V5Q29sdW1uKGRhdGEsIC0xKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25LZXlEb3duUmlnaHQoZGF0YSkge1xuICAgICAgICB0aGlzLm9uTmF2S2V5Q29sdW1uKGRhdGEsIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbktleURvd25VcChkYXRhKSB7XG4gICAgICAgIHRoaXMub25OYXZLZXlSb3coZGF0YSwgLTEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc3RlcFxuICAgICAqL1xuICAgIG9uTmF2S2V5Q29sdW1uKGRhdGEsIHN0ZXApIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmlldyAgICAgICAgICA9IG1lLnZpZXcsXG4gICAgICAgICAgICBpZEFycmF5ICAgICAgID0gZGF0YS5wYXRoWzBdLmlkLnNwbGl0KCdfXycpLFxuICAgICAgICAgICAgY3VycmVudENvbHVtbiA9IGlkQXJyYXlbMl0sXG4gICAgICAgICAgICBkYXRhRmllbGRzICAgID0gdmlldy5jb2x1bW5zLm1hcChjID0+IGMuZGF0YUZpZWxkKSxcbiAgICAgICAgICAgIG5ld0luZGV4ICAgICAgPSAoZGF0YUZpZWxkcy5pbmRleE9mKGN1cnJlbnRDb2x1bW4pICsgc3RlcCkgJSBkYXRhRmllbGRzLmxlbmd0aCxcbiAgICAgICAgICAgIGlkO1xuXG4gICAgICAgIHdoaWxlIChuZXdJbmRleCA8IDApIHtcbiAgICAgICAgICAgIG5ld0luZGV4ICs9IGRhdGFGaWVsZHMubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWRBcnJheVsyXSA9IGRhdGFGaWVsZHNbbmV3SW5kZXhdO1xuICAgICAgICBpZCA9IGlkQXJyYXkuam9pbignX18nKTtcblxuICAgICAgICBtZS5zZWxlY3QoaWQpO1xuICAgICAgICB2aWV3LmZvY3VzKGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0ZXBcbiAgICAgKi9cbiAgICBvbk5hdktleVJvdyhkYXRhLCBzdGVwKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2aWV3ICAgICA9IG1lLnZpZXcsXG4gICAgICAgICAgICBzdG9yZSAgICA9IHZpZXcuc3RvcmUsXG4gICAgICAgICAgICBpZEFycmF5ICA9IGRhdGEucGF0aFswXS5pZC5zcGxpdCgnX18nKSxcbiAgICAgICAgICAgIHJlY29yZElkID0gaWRBcnJheVsxXSxcbiAgICAgICAgICAgIG5ld0luZGV4ID0gKHN0b3JlLmluZGV4T2YocmVjb3JkSWQpICsgc3RlcCkgJSBzdG9yZS5nZXRDb3VudCgpLFxuICAgICAgICAgICAgaWQ7XG5cbiAgICAgICAgd2hpbGUgKG5ld0luZGV4IDwgMCkge1xuICAgICAgICAgICAgbmV3SW5kZXggKz0gc3RvcmUuZ2V0Q291bnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlkQXJyYXlbMV0gPSBzdG9yZS5nZXRLZXlBdChuZXdJbmRleCk7XG4gICAgICAgIGlkID0gaWRBcnJheS5qb2luKCdfXycpO1xuXG4gICAgICAgIG1lLnNlbGVjdChpZCk7XG4gICAgICAgIHZpZXcuZm9jdXMoaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxuICAgICAqL1xuICAgIHJlZ2lzdGVyKGNvbXBvbmVudCkge1xuICAgICAgICBzdXBlci5yZWdpc3Rlcihjb21wb25lbnQpO1xuXG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGlkICAgPSBtZS5pZCxcbiAgICAgICAgICAgIHZpZXcgPSBtZS52aWV3O1xuXG4gICAgICAgIGlmICh2aWV3LmtleXMpIHtcbiAgICAgICAgICAgIHZpZXcua2V5cy5fa2V5cy5wdXNoKFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93bkRvd24nICAsa2V5OiAnRG93bicgICxzY29wZTogaWR9LFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93bkxlZnQnICAsa2V5OiAnTGVmdCcgICxzY29wZTogaWR9LFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93blJpZ2h0JyAsa2V5OiAnUmlnaHQnICxzY29wZTogaWR9LFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93blVwJyAgICAsa2V5OiAnVXAnICAgICxzY29wZTogaWR9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyKCkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBpZCAgID0gbWUuaWQsXG4gICAgICAgICAgICB2aWV3ID0gbWUudmlldztcblxuICAgICAgICBpZiAodmlldy5rZXlzKSB7XG4gICAgICAgICAgICB2aWV3LmtleXMucmVtb3ZlS2V5cyhbXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duRG93bicgICxrZXk6ICdEb3duJyAgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duTGVmdCcgICxrZXk6ICdMZWZ0JyAgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duUmlnaHQnICxrZXk6ICdSaWdodCcgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duVXAnICAgICxrZXk6ICdVcCcgICAgLHNjb3BlOiBpZH1cbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIudW5yZWdpc3RlcigpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ2VsbE1vZGVsKTtcblxuZXhwb3J0IHtDZWxsTW9kZWwgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENlbGxNb2RlbCBmcm9tICcuL0NlbGxNb2RlbC5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICBmcm9tICcuLi8uLi91dGlsL0FycmF5Lm1qcyc7XG5pbXBvcnQgUm93TW9kZWwgIGZyb20gJy4vUm93TW9kZWwubWpzJztcbmltcG9ydCBWRG9tVXRpbCAgZnJvbSAnLi4vLi4vdXRpbC9WRG9tLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5zZWxlY3Rpb24udGFibGUuQ2VsbFJvd01vZGVsXG4gKiBAZXh0ZW5kcyBOZW8uc2VsZWN0aW9uLnRhYmxlLkNlbGxNb2RlbFxuICovXG5jbGFzcyBDZWxsUm93TW9kZWwgZXh0ZW5kcyBDZWxsTW9kZWwge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uc2VsZWN0aW9uLnRhYmxlLkNlbGxSb3dNb2RlbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnNlbGVjdGlvbi50YWJsZS5DZWxsUm93TW9kZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nc2VsZWN0aW9uLXRhYmxlLWNlbGxyb3dtb2RlbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdzZWxlY3Rpb24tdGFibGUtY2VsbHJvd21vZGVsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xzPSduZW8tc2VsZWN0aW9uLWNlbGxyb3dtb2RlbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiAnbmVvLXNlbGVjdGlvbi1jZWxscm93bW9kZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl8bnVsbH0gc2VsZWN0ZWRSb3dJZHM9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzZWxlY3RlZFJvd0lkczogbnVsbFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkUm93SWRzID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzaWxlbnRdIHRydWUgdG8gcHJldmVudCBhIHZkb20gdXBkYXRlXG4gICAgICovXG4gICAgZGVzZWxlY3RBbGxSb3dzKHNpbGVudCkge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHJvd0lkcyA9IFsuLi5tZS5zZWxlY3RlZFJvd0lkc10sXG4gICAgICAgICAgICB2aWV3ICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgdmRvbSAgID0gdmlldy52ZG9tO1xuXG4gICAgICAgIHJvd0lkcy5mb3JFYWNoKHJvd0lkID0+IHtcbiAgICAgICAgICAgIG1lLmRlc2VsZWN0Um93KHJvd0lkLCB0cnVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgICAgICAgIHZpZXcudmRvbSA9IHZkb207XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSByb3dJZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudF0gdHJ1ZSB0byBwcmV2ZW50IGEgdmRvbSB1cGRhdGVcbiAgICAgKi9cbiAgICBkZXNlbGVjdFJvdyhyb3dJZCwgc2lsZW50KSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZpZXcgPSBtZS52aWV3LFxuICAgICAgICAgICAgdmRvbSA9IHZpZXcudmRvbSxcbiAgICAgICAgICAgIG5vZGUgPSB2aWV3LmdldFZkb21DaGlsZChyb3dJZCksXG4gICAgICAgICAgICBjbHM7XG5cbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIGNscyA9IG5vZGUuY2xzIHx8IFtdO1xuICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgbWUuc2VsZWN0ZWRDbHMpO1xuICAgICAgICAgICAgbm9kZS5jbHMgPSBjbHM7XG4gICAgICAgIH1cblxuICAgICAgICBOZW9BcnJheS5yZW1vdmUobWUuc2VsZWN0ZWRSb3dJZHMsIHJvd0lkKTtcblxuICAgICAgICBpZiAoIXNpbGVudCkge1xuICAgICAgICAgICAgdmlldy52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkNlbGxDbGljayhkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIG5vZGUgPSBSb3dNb2RlbC5nZXRSb3dOb2RlKGRhdGEucGF0aCksIC8vIHdlIGNvdWxkIGFkZCBhIHNlcGFyYXRlIGV4cG9ydCBmb3IgdGhpcyBtZXRob2RcbiAgICAgICAgICAgIGlkICAgPSBub2RlICYmIG5vZGUuaWQ7XG5cbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgICBtZS5kZXNlbGVjdEFsbFJvd3ModHJ1ZSk7XG4gICAgICAgICAgICBtZS5zZWxlY3RSb3coaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIub25DZWxsQ2xpY2soZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzdGVwXG4gICAgICovXG4gICAgb25OYXZLZXlSb3coZGF0YSwgc3RlcCkge1xuICAgICAgICBzdXBlci5vbk5hdktleVJvdyhkYXRhLCBzdGVwKTtcblxuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBub2RlICAgICAgID0gUm93TW9kZWwuZ2V0Um93Tm9kZShkYXRhLnBhdGgpLFxuICAgICAgICAgICAgdmlldyAgICAgICA9IG1lLnZpZXcsXG4gICAgICAgICAgICBzdG9yZSAgICAgID0gdmlldy5zdG9yZSxcbiAgICAgICAgICAgIHZkb21Ob2RlICAgPSBWRG9tVXRpbC5maW5kVmRvbUNoaWxkKHZpZXcudmRvbSwgbm9kZS5pZCksXG4gICAgICAgICAgICBuZXdJbmRleCAgID0gKHZkb21Ob2RlLmluZGV4ICsgc3RlcCkgJSBzdG9yZS5nZXRDb3VudCgpLFxuICAgICAgICAgICAgcGFyZW50Tm9kZSA9IHZkb21Ob2RlLnBhcmVudE5vZGUsXG4gICAgICAgICAgICBpZDtcblxuICAgICAgICB3aGlsZSAobmV3SW5kZXggPCAwKSB7XG4gICAgICAgICAgICBuZXdJbmRleCArPSBzdG9yZS5nZXRDb3VudCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWQgPSBwYXJlbnROb2RlLmNuW25ld0luZGV4XS5pZDtcblxuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgIG1lLmRlc2VsZWN0QWxsUm93cyh0cnVlKTtcbiAgICAgICAgICAgIG1lLnNlbGVjdFJvdyhpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudF1cbiAgICAgKi9cbiAgICBzZWxlY3RSb3coaWQsIHNpbGVudCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmlldyAgICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgdmRvbSAgICAgPSB2aWV3LnZkb20sXG4gICAgICAgICAgICB2ZG9tTm9kZSA9IGlkICYmIHZpZXcuZ2V0VmRvbUNoaWxkKGlkKSxcbiAgICAgICAgICAgIGNscztcblxuICAgICAgICBpZiAodmRvbU5vZGUpIHtcbiAgICAgICAgICAgIGNscyA9IHZkb21Ob2RlLmNscyB8fCBbXTtcbiAgICAgICAgICAgIE5lb0FycmF5LmFkZChjbHMsIG1lLnNlbGVjdGVkQ2xzKTtcbiAgICAgICAgICAgIHZkb21Ob2RlLmNscyA9IGNscztcblxuICAgICAgICAgICAgbWUuc2VsZWN0ZWRSb3dJZHMucHVzaChpZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNpbGVudCkge1xuICAgICAgICAgICAgdmlldy52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgdW5yZWdpc3RlcigpIHtcbiAgICAgICAgdGhpcy5kZXNlbGVjdEFsbFJvd3MoKTtcbiAgICAgICAgc3VwZXIudW5yZWdpc3RlcigpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ2VsbFJvd01vZGVsKTtcblxuZXhwb3J0IHtDZWxsUm93TW9kZWwgYXMgZGVmYXVsdH07IiwiaW1wb3J0IE1vZGVsICAgIGZyb20gJy4uL01vZGVsLm1qcyc7XG5pbXBvcnQgVkRvbVV0aWwgZnJvbSAnLi4vLi4vdXRpbC9WRG9tLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5zZWxlY3Rpb24udGFibGUuQ29sdW1uTW9kZWxcbiAqIEBleHRlbmRzIE5lby5zZWxlY3Rpb24uTW9kZWxcbiAqL1xuY2xhc3MgQ29sdW1uTW9kZWwgZXh0ZW5kcyBNb2RlbCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5zZWxlY3Rpb24udGFibGUuQ29sdW1uTW9kZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5zZWxlY3Rpb24udGFibGUuQ29sdW1uTW9kZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nc2VsZWN0aW9uLXRhYmxlLWNvbHVtbm1vZGVsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3NlbGVjdGlvbi10YWJsZS1jb2x1bW5tb2RlbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNscz0nc2VsZWN0aW9uLWNvbHVtbm1vZGVsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6ICduZW8tc2VsZWN0aW9uLWNvbHVtbm1vZGVsJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGFkZERvbUxpc3RlbmVyKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZpZXcgICAgICAgICA9IG1lLnZpZXcsXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSB2aWV3LmRvbUxpc3RlbmVycztcblxuICAgICAgICBkb21MaXN0ZW5lcnMucHVzaCh7XG4gICAgICAgICAgICBjbGljayAgIDogbWUub25DZWxsQ2xpY2ssXG4gICAgICAgICAgICBkZWxlZ2F0ZTogJy5uZW8tdGFibGUtY2VsbCcsXG4gICAgICAgICAgICBzY29wZSAgIDogbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmlldy5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRQYXRoXG4gICAgICogQHJldHVybnMge1N0cmluZ3xudWxsfSBjZWxsSWRcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Q2VsbElkKGV2ZW50UGF0aCkge1xuICAgICAgICBsZXQgaWQgICA9IG51bGwsXG4gICAgICAgICAgICBpICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgPSBldmVudFBhdGgubGVuZ3RoO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChldmVudFBhdGhbaV0udGFnTmFtZSA9PT0gJ3RkJykge1xuICAgICAgICAgICAgICAgIGlkID0gZXZlbnRQYXRoW2ldLmlkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRvZG86IG1vdmUgdG8gdGFibGUuQ29udGFpbmVyIG9yIHZpZXdcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2VsbElkXG4gICAgICogQHBhcmFtIHtBcnJheX0gY29sdW1uc1xuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IGluZGV4XG4gICAgICovXG4gICAgc3RhdGljIGdldENvbHVtbkluZGV4KGNlbGxJZCwgY29sdW1ucykge1xuICAgICAgICBsZXQgaWRBcnJheSAgICAgICA9IGNlbGxJZC5zcGxpdCgnX18nKSxcbiAgICAgICAgICAgIGN1cnJlbnRDb2x1bW4gPSBpZEFycmF5WzJdLFxuICAgICAgICAgICAgZGF0YUZpZWxkcyAgICA9IGNvbHVtbnMubWFwKGMgPT4gYy5kYXRhRmllbGQpO1xuXG4gICAgICAgIHJldHVybiBkYXRhRmllbGRzLmluZGV4T2YoY3VycmVudENvbHVtbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uQ2VsbENsaWNrKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgaWQgICA9IENvbHVtbk1vZGVsLmdldENlbGxJZChkYXRhLnBhdGgpLFxuICAgICAgICAgICAgY29sdW1uTm9kZUlkcywgaW5kZXgsIHRib2R5Tm9kZTtcblxuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgIGluZGV4ICAgICAgICAgPSBDb2x1bW5Nb2RlbC5nZXRDb2x1bW5JbmRleChpZCwgbWUudmlldy5pdGVtc1swXS5pdGVtcyk7XG4gICAgICAgICAgICB0Ym9keU5vZGUgICAgID0gVkRvbVV0aWwuZmluZFZkb21DaGlsZChtZS52aWV3LnZkb20sIHt0YWc6ICd0Ym9keSd9KS52ZG9tO1xuICAgICAgICAgICAgY29sdW1uTm9kZUlkcyA9IFZEb21VdGlsLmdldENvbHVtbk5vZGVzSWRzKHRib2R5Tm9kZSwgaW5kZXgpO1xuXG4gICAgICAgICAgICBtZS5zZWxlY3QoY29sdW1uTm9kZUlkcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25LZXlEb3duTGVmdChkYXRhKSB7XG4gICAgICAgIHRoaXMub25OYXZLZXlDb2x1bW4oZGF0YSwgLTEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbktleURvd25SaWdodChkYXRhKSB7XG4gICAgICAgIHRoaXMub25OYXZLZXlDb2x1bW4oZGF0YSwgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzdGVwXG4gICAgICovXG4gICAgb25OYXZLZXlDb2x1bW4oZGF0YSwgc3RlcCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpZEFycmF5ICAgICAgID0gQ29sdW1uTW9kZWwuZ2V0Q2VsbElkKGRhdGEucGF0aCkuc3BsaXQoJ19fJyksXG4gICAgICAgICAgICBjdXJyZW50Q29sdW1uID0gaWRBcnJheVsyXSxcbiAgICAgICAgICAgIHZpZXcgICAgICAgICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgZGF0YUZpZWxkcyAgICA9IHZpZXcuY29sdW1ucy5tYXAoYyA9PiBjLmRhdGFGaWVsZCksXG4gICAgICAgICAgICBuZXdJbmRleCAgICAgID0gKGRhdGFGaWVsZHMuaW5kZXhPZihjdXJyZW50Q29sdW1uKSArIHN0ZXApICUgZGF0YUZpZWxkcy5sZW5ndGgsXG4gICAgICAgICAgICBjb2x1bW5Ob2RlSWRzLCBpZCwgdGJvZHlOb2RlO1xuXG4gICAgICAgIHdoaWxlIChuZXdJbmRleCA8IDApIHtcbiAgICAgICAgICAgIG5ld0luZGV4ICs9IGRhdGFGaWVsZHMubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWRBcnJheVsyXSA9IGRhdGFGaWVsZHNbbmV3SW5kZXhdO1xuICAgICAgICBpZCA9IGlkQXJyYXkuam9pbignX18nKTtcblxuICAgICAgICB0Ym9keU5vZGUgICAgID0gVkRvbVV0aWwuZmluZFZkb21DaGlsZChtZS52aWV3LnZkb20sIHt0YWc6ICd0Ym9keSd9KS52ZG9tO1xuICAgICAgICBjb2x1bW5Ob2RlSWRzID0gVkRvbVV0aWwuZ2V0Q29sdW1uTm9kZXNJZHModGJvZHlOb2RlLCBuZXdJbmRleCk7XG5cbiAgICAgICAgbWUuc2VsZWN0KGNvbHVtbk5vZGVJZHMpO1xuICAgICAgICB2aWV3LmZvY3VzKGlkKTsgLy8gd2UgaGF2ZSB0byBmb2N1cyBvbmUgY2VsbCB0byBlbnN1cmUgdGhlIGtleW5hdiBrZWVwcyB3b3JraW5nXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gY29tcG9uZW50XG4gICAgICovXG4gICAgcmVnaXN0ZXIoY29tcG9uZW50KSB7XG4gICAgICAgIHN1cGVyLnJlZ2lzdGVyKGNvbXBvbmVudCk7XG5cbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgaWQgICA9IG1lLmlkLFxuICAgICAgICAgICAgdmlldyA9IG1lLnZpZXc7XG5cbiAgICAgICAgaWYgKHZpZXcua2V5cykge1xuICAgICAgICAgICAgdmlldy5rZXlzLl9rZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIGZuICAgOiAnb25LZXlEb3duTGVmdCcsXG4gICAgICAgICAgICAgICAga2V5ICA6ICdMZWZ0JyxcbiAgICAgICAgICAgICAgICBzY29wZTogaWRcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBmbiAgIDogJ29uS2V5RG93blJpZ2h0JyxcbiAgICAgICAgICAgICAgICBrZXkgIDogJ1JpZ2h0JyxcbiAgICAgICAgICAgICAgICBzY29wZTogaWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHVucmVnaXN0ZXIoKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGlkICAgPSBtZS5pZCxcbiAgICAgICAgICAgIHZpZXcgPSBtZS52aWV3O1xuXG4gICAgICAgIGlmICh2aWV3LmtleXMpIHtcbiAgICAgICAgICAgIHZpZXcua2V5cy5yZW1vdmVLZXlzKFt7XG4gICAgICAgICAgICAgICAgZm4gICA6ICdvbktleURvd25MZWZ0JyxcbiAgICAgICAgICAgICAgICBrZXkgIDogJ0xlZnQnLFxuICAgICAgICAgICAgICAgIHNjb3BlOiBpZFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGZuICAgOiAnb25LZXlEb3duUmlnaHQnLFxuICAgICAgICAgICAgICAgIGtleSAgOiAnUmlnaHQnLFxuICAgICAgICAgICAgICAgIHNjb3BlOiBpZFxuICAgICAgICAgICAgfV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIudW5yZWdpc3RlcigpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ29sdW1uTW9kZWwpO1xuXG5leHBvcnQge0NvbHVtbk1vZGVsIGFzIGRlZmF1bHR9OyJdLCJzb3VyY2VSb290IjoiIn0=