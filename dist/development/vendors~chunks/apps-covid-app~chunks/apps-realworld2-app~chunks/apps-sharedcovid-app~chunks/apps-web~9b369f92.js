self["webpackChunk"](["vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~9b369f92"],{

/***/ "./node_modules/neo.mjs/src/list/Base.mjs":
/*!************************************************!*\
  !*** ./node_modules/neo.mjs/src/list/Base.mjs ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/ClassSystem.mjs */ "./node_modules/neo.mjs/src/util/ClassSystem.mjs");
/* harmony import */ var _collection_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../collection/Base.mjs */ "./node_modules/neo.mjs/src/collection/Base.mjs");
/* harmony import */ var _component_Base_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _selection_ListModel_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../selection/ListModel.mjs */ "./node_modules/neo.mjs/src/selection/ListModel.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _data_Store_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");







/**
 * @class Neo.list.Base
 * @extends Neo.component.Base
 */
class Base extends _component_Base_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.list.Base'
         * @protected
         */
        className: 'Neo.list.Base',
        /**
         * @member {String} ntype='list'
         * @protected
         */
        ntype: 'list',
        /**
         * True will destroy the used collection / store when the component gets destroyed
         * @member {Boolean} autoDestroyStore=true
         */
        autoDestroyStore: true,
        /**
         * @member {String[]} cls=['neo-list-container','neo-list']
         */
        cls: ['neo-list-container', 'neo-list'],
        /**
         * @member {Boolean} disableSelection_=false
         */
        disableSelection_: false,
        /**
         * @member {String} displayField='name'
         */
        displayField: 'name',
        /**
         * @member {Boolean} highlightFilterValue=true
         */
        highlightFilterValue: true,
        /**
         * @member {String} itemCls='neo-list-item'
         */
        itemCls: 'neo-list-item',
        /**
         * Additional used keys for the selection model
         * @member {Object} keys
         */
        keys: {},
        /**
         * Either pass a selection.Model module, an instance or a config object
         * @member {Object|Neo.selection.Model} selectionModel_=null
         */
        selectionModel_: null,
        /**
         * Set this to true in case a select event should only update _vdom (e.g. when used inside a form.field.Select
         * @member {Boolean} silentSelect=false
         */
        silentSelect: false,
        /**
         * @member {Neo.data.Store|null} store_=null
         */
        store_: null,
        /**
         * True will add a checkbox in front of each list item
         * @member {Boolean} stacked_=true
         */
        useCheckBoxes_: false,
        /**
         * @member {Object} _vdom={tag:'ul',cn:[]}
         */
        _vdom: {
            tag: 'ul',
            cn : []
        }
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me           = this,
            domListeners = me.domListeners;

        domListeners.push({
            click: {fn: me.onClick, scope: me}
        });

        me.domListeners = domListeners;
    }

    onConstructed() {
        super.onConstructed();

        let me = this;

        if (me.selectionModel) {
            me.selectionModel.register(me);
        }
    }

    /**
     * Triggered after the disableSelection config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetDisableSelection(value, oldValue) {
        let me = this;

        if (value && me.rendered && me.selectionModel) {
            me.selectionModel.deselectAll();
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
     * Triggered after the store config got changed
     * @param {Neo.data.Store} value
     * @param {Neo.data.Store} oldValue
     * @protected
     */
    afterSetStore(value, oldValue) {
        let me = this;

        if (value) {
            value.on({
                filter: me.onStoreFilter,
                load  : me.onStoreLoad,
                scope : me
            });

            if (value.getCount() > 0) {
                me.onStoreLoad();
            }
        }
    }

    /**
     * Triggered before the selectionModel config gets changed.
     * @param {Neo.selection.Model} value
     * @param {Neo.selection.Model} oldValue
     * @returns {Neo.selection.Model}
     * @protected
     */
    beforeSetSelectionModel(value, oldValue) {
        if (oldValue) {
            oldValue.destroy();
        }

        return _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].beforeSetInstance(value, _selection_ListModel_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]);
    }

    /**
     * Triggered before the store config gets changed.
     * @param {Object|Neo.data.Store} value
     * @param {Object|Neo.data.Store} oldValue
     * @returns {Neo.data.Store}
     * @protected
     */
    beforeSetStore(value, oldValue) {
        if (oldValue) {
            oldValue.destroy();
        }

        return _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].beforeSetInstance(value);
    }

    /**
     * Triggered after the useCheckBoxes config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetUseCheckBoxes(value, oldValue) {
        let me  = this,
            cls = me.cls;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__["default"][value ? 'add' : 'remove'](cls, 'neo-use-checkicons');
        me.cls = cls;
    }

    /**
     * Override this method for custom list items
     * @param {Object} record
     * @returns {Object} The list item object
     */
    createItem(record) {
        let me          = this,
            itemContent = me.createItemContent(record);

        const item = {
            tag     : 'li',
            cls     : [me.itemCls],
            id      : me.getItemId(record[me.getKeyProperty()]),
            tabIndex: -1
        };

        item[typeof itemContent === 'string' ? 'html' : 'cn'] = itemContent;

        return item;
    }

    /**
     * Override this method for custom renderers
     * @param {Object} record
     * @returns {Object[]|String} Either an vdom cn array or a html string
     */
    createItemContent(record) {
        let me       = this,
            itemText = record[this.displayField],
            filter;

        if (me.highlightFilterValue) {
            filter = me.store.getFilter(me.displayField);

            if (filter && filter.value !== null && filter.value !== '') {
                itemText = itemText.replace(new RegExp(filter.value, 'gi'), function(match) {
                    return '<span class="neo-highlight-search">' + match + '</span>';
                });
            }
        }

        return itemText;
    }

    /**
     * @param {Boolean} [silent=false]
     */
    createItems(silent=false) {
        let me   = this,
            vdom = me.vdom;

        vdom.cn = [];

        me.store.items.forEach((item, index) => {
            vdom.cn.push(me.createItem(item));
        });

        if (silent) {
            me._vdom = vdom;
        } else {
            me.promiseVdomUpdate().then(() => {
                me.fire('createItems');
            });
        }
    }

    /**
     *
     */
    destroy() {
        let me = this;

        if (me.selectionModel) {
            me.selectionModel.destroy();
        }

        if (me.store && me.autoDestroyStore) {
            me.store.destroy();
        }

        super.destroy();
    }

    /**
     * Calls focus() on the top level DOM node of this component or on a given node via id
     * @param {String} [id]
     */
    focus(id) {
        super.focus(id);

        if (id) {
            // remote method access
            Neo.main.DomAccess.scrollIntoView({
                behavior: 'auto',
                id      : id || this.id
            });
        }
    }

    /**
     *
     * @param {Number|String} id
     * @returns {String}
     */
    getItemId(id) {
        return this.id + '__' + id;
    }

    /**
     *
     * @param {String} vnodeId
     * @returns {String|Number} itemId
     */
    getItemRecordId(vnodeId) {
        let itemId   = vnodeId.split('__')[1],
            model    = this.store.model,
            keyField = model && model.getField(model.keyProperty);

        if (keyField && keyField.type.toLowerCase() === 'number') {
            itemId = parseInt(itemId);
        }

        return itemId;
    }

    /**
     * Support collections & stores
     * @returns {String}
     */
    getKeyProperty() {
        return this.store.keyProperty || this.store.model.keyProperty;
    }

    /**
     *
     * @param {Object} data
     */
    onClick(data) {
        let me = this;

        if (data.path[0].id === me.id) {
            me.onContainerClick(data);
        }  else if (data.path[0].cls.includes(me.itemCls)) {
            me.onItemClick(data);
        }
    }

    /**
     *
     * @param {Object} data
     */
    onContainerClick(data) {
        /**
         * The containerClick event fires when a click occurs on the component, but not on a list item
         * @event containerClick
         * @param {String[]} cls the classList of the target node (converted to an array)
         * @param {String} id the target dom id
         * @param {String[]} path the event path
         * @returns {Object}
         */
        this.fire('containerClick', data);
    }

    /**
     *
     * @param {Object} data
     */
    onItemClick(data) {
        let me     = this,
            nodeId = data.path[0].id;

        if (!me.disableSelection && me.selectionModel) {
            me.selectionModel.select(nodeId);
        }

        /**
         * The itemClick event fires when a click occurs on a list item
         * @event itemClick
         * @param {String} id the record matching the list item
         * @returns {Object}
         */
        me.fire('itemClick', me.store.get(me.getItemRecordId(nodeId)));
    }

    /**
     *
     */
    onStoreFilter() {
        this.createItems();
    }

    /**
     *
     */
    onStoreLoad() {
        let me = this;

        if (!me.mounted && me.rendering) {
            const listenerId = me.on('rendered', () => {
                me.un('rendered', listenerId);
                me.createItems();
            });
        } else {
            me.createItems();
        }
    }

    /**
     * Convenience shortcut
     * @param {Number} index
     */
    selectItem(index) {
        let me = this;

        if (!me.disableSelection && me.selectionModel) {
            me.selectionModel.selectAt(index);
        }
    }
}

Neo.applyClassConfig(Base);



/***/ }),

/***/ "./node_modules/neo.mjs/src/selection/ListModel.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/neo.mjs/src/selection/ListModel.mjs ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListModel; });
/* harmony import */ var _Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model.mjs */ "./node_modules/neo.mjs/src/selection/Model.mjs");


/**
 * @class Neo.selection.ListModel
 * @extends Neo.selection.Model
 */
class ListModel extends _Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.selection.ListModel'
         * @protected
         */
        className: 'Neo.selection.ListModel',
        /**
         * @member {String} ntype='selection-listmodel'
         * @protected
         */
        ntype: 'selection-listmodel',
        /**
         * @member {Boolean} stayInList=true
         */
        stayInList: true
    }}

    /**
     *
     * @param {Object} data
     */
    onKeyDownDown(data) {
        if (!this.view.disableSelection) {
            this.onNavKey(data, 1);
        }
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownLeft(data) {
        this.onKeyDownUp(data);
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownRight(data) {
        this.onKeyDownDown(data);
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownUp(data) {
        if (!this.view.disableSelection) {
            this.onNavKey(data, -1);
        }
    }

    /**
     *
     * @param {Object} data
     * @param {Number} step
     */
    onNavKey(data, step) {
        let me               = this,
            item             = data.path[0],
            view             = me.view,
            store            = view.store,
            maxItems         = store.getCount(),
            preventSelection = false,
            index, itemId, record, recordId;

        if (item.cls.includes(view.itemCls)) {
            recordId = view.getItemRecordId(item.id);
            index    = store.indexOf(recordId) + step;

            if (index < 0) {
                if (me.stayInList) {
                    index = maxItems - 1;
                } else {
                    preventSelection = true;
                    view.fire('selectPreFirstItem');
                }
            } else if (index >= maxItems) {
                if (me.stayInList) {
                    index = 0;
                } else {
                    preventSelection = true;
                    view.fire('selectPostLastItem');
                }
            }
        } else {
            index = 0;
        }

        if (!preventSelection) {
            record = store.getAt(index);
            itemId = view.getItemId(record[me.view.getKeyProperty()]);

            me.select(itemId);
            view.focus(itemId);
            view.fire('itemNavigate', record);
        } else {
            me.deselectAll();
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
     * @param {Number} index
     */
    selectAt(index) {
        let view      = this.view,
            recordKey = view.store.getKeyAt(index),
            itemId    = recordKey && view.getItemId(recordKey);

        if (itemId) {
            this.select(itemId);
            view.focus(itemId);
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

Neo.applyClassConfig(ListModel);



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbGlzdC9CYXNlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvc2VsZWN0aW9uL0xpc3RNb2RlbC5tanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0Q7QUFDRDtBQUNEO0FBQ0s7QUFDVDtBQUNBOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyREFBUztBQUM1Qix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxvQkFBb0IsMkJBQTJCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPLFFBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxv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QUFDQSxpQkFBaUIsOENBQThDO0FBQy9ELGlCQUFpQiw4Q0FBOEM7QUFDL0QsaUJBQWlCLDhDQUE4QztBQUMvRCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsOENBQThDO0FBQy9ELGlCQUFpQiw4Q0FBOEM7QUFDL0QsaUJBQWlCLDhDQUE4QztBQUMvRCxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn45YjM2OWY5Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDbGFzc1N5c3RlbVV0aWwgZnJvbSAnLi4vdXRpbC9DbGFzc1N5c3RlbS5tanMnO1xuaW1wb3J0IENvbGxlY3Rpb24gICAgICBmcm9tICcuLi9jb2xsZWN0aW9uL0Jhc2UubWpzJztcbmltcG9ydCBDb21wb25lbnQgICAgICAgZnJvbSAnLi4vY29tcG9uZW50L0Jhc2UubWpzJztcbmltcG9ydCBMaXN0TW9kZWwgICAgICAgZnJvbSAnLi4vc2VsZWN0aW9uL0xpc3RNb2RlbC5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICAgICAgICBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XG5pbXBvcnQgU3RvcmUgICAgICAgICAgIGZyb20gJy4uL2RhdGEvU3RvcmUubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmxpc3QuQmFzZVxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIEJhc2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubGlzdC5CYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubGlzdC5CYXNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2xpc3QnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbGlzdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHdpbGwgZGVzdHJveSB0aGUgdXNlZCBjb2xsZWN0aW9uIC8gc3RvcmUgd2hlbiB0aGUgY29tcG9uZW50IGdldHMgZGVzdHJveWVkXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGF1dG9EZXN0cm95U3RvcmU9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgYXV0b0Rlc3Ryb3lTdG9yZTogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tbGlzdC1jb250YWluZXInLCduZW8tbGlzdCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWxpc3QtY29udGFpbmVyJywgJ25lby1saXN0J10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBkaXNhYmxlU2VsZWN0aW9uXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgZGlzYWJsZVNlbGVjdGlvbl86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBkaXNwbGF5RmllbGQ9J25hbWUnXG4gICAgICAgICAqL1xuICAgICAgICBkaXNwbGF5RmllbGQ6ICduYW1lJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGhpZ2hsaWdodEZpbHRlclZhbHVlPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGhpZ2hsaWdodEZpbHRlclZhbHVlOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBpdGVtQ2xzPSduZW8tbGlzdC1pdGVtJ1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbUNsczogJ25lby1saXN0LWl0ZW0nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkaXRpb25hbCB1c2VkIGtleXMgZm9yIHRoZSBzZWxlY3Rpb24gbW9kZWxcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBrZXlzXG4gICAgICAgICAqL1xuICAgICAgICBrZXlzOiB7fSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVpdGhlciBwYXNzIGEgc2VsZWN0aW9uLk1vZGVsIG1vZHVsZSwgYW4gaW5zdGFuY2Ugb3IgYSBjb25maWcgb2JqZWN0XG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxOZW8uc2VsZWN0aW9uLk1vZGVsfSBzZWxlY3Rpb25Nb2RlbF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZWN0aW9uTW9kZWxfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoaXMgdG8gdHJ1ZSBpbiBjYXNlIGEgc2VsZWN0IGV2ZW50IHNob3VsZCBvbmx5IHVwZGF0ZSBfdmRvbSAoZS5nLiB3aGVuIHVzZWQgaW5zaWRlIGEgZm9ybS5maWVsZC5TZWxlY3RcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2lsZW50U2VsZWN0PWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBzaWxlbnRTZWxlY3Q6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmRhdGEuU3RvcmV8bnVsbH0gc3RvcmVfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHN0b3JlXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgd2lsbCBhZGQgYSBjaGVja2JveCBpbiBmcm9udCBvZiBlYWNoIGxpc3QgaXRlbVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzdGFja2VkXz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICB1c2VDaGVja0JveGVzXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tPXt0YWc6J3VsJyxjbjpbXX1cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICB0YWc6ICd1bCcsXG4gICAgICAgICAgICBjbiA6IFtdXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBtZS5kb21MaXN0ZW5lcnM7XG5cbiAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgY2xpY2s6IHtmbjogbWUub25DbGljaywgc2NvcGU6IG1lfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLnNlbGVjdGlvbk1vZGVsKSB7XG4gICAgICAgICAgICBtZS5zZWxlY3Rpb25Nb2RlbC5yZWdpc3RlcihtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGRpc2FibGVTZWxlY3Rpb24gY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXREaXNhYmxlU2VsZWN0aW9uKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICh2YWx1ZSAmJiBtZS5yZW5kZXJlZCAmJiBtZS5zZWxlY3Rpb25Nb2RlbCkge1xuICAgICAgICAgICAgbWUuc2VsZWN0aW9uTW9kZWwuZGVzZWxlY3RBbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc2VsZWN0aW9uTW9kZWwgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOZW8uc2VsZWN0aW9uLk1vZGVsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TmVvLnNlbGVjdGlvbi5Nb2RlbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTZWxlY3Rpb25Nb2RlbCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHZhbHVlLnJlZ2lzdGVyKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBzdG9yZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge05lby5kYXRhLlN0b3JlfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TmVvLmRhdGEuU3RvcmV9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U3RvcmUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZS5vbih7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiBtZS5vblN0b3JlRmlsdGVyLFxuICAgICAgICAgICAgICAgIGxvYWQgIDogbWUub25TdG9yZUxvYWQsXG4gICAgICAgICAgICAgICAgc2NvcGUgOiBtZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZS5nZXRDb3VudCgpID4gMCkge1xuICAgICAgICAgICAgICAgIG1lLm9uU3RvcmVMb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBzZWxlY3Rpb25Nb2RlbCBjb25maWcgZ2V0cyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7TmVvLnNlbGVjdGlvbi5Nb2RlbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge05lby5zZWxlY3Rpb24uTW9kZWx9IG9sZFZhbHVlXG4gICAgICogQHJldHVybnMge05lby5zZWxlY3Rpb24uTW9kZWx9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldFNlbGVjdGlvbk1vZGVsKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBDbGFzc1N5c3RlbVV0aWwuYmVmb3JlU2V0SW5zdGFuY2UodmFsdWUsIExpc3RNb2RlbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgc3RvcmUgY29uZmlnIGdldHMgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0ge09iamVjdHxOZW8uZGF0YS5TdG9yZX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdHxOZW8uZGF0YS5TdG9yZX0gb2xkVmFsdWVcbiAgICAgKiBAcmV0dXJucyB7TmVvLmRhdGEuU3RvcmV9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldFN0b3JlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBDbGFzc1N5c3RlbVV0aWwuYmVmb3JlU2V0SW5zdGFuY2UodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdXNlQ2hlY2tCb3hlcyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFVzZUNoZWNrQm94ZXModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxuICAgICAgICAgICAgY2xzID0gbWUuY2xzO1xuXG4gICAgICAgIE5lb0FycmF5W3ZhbHVlID8gJ2FkZCcgOiAncmVtb3ZlJ10oY2xzLCAnbmVvLXVzZS1jaGVja2ljb25zJyk7XG4gICAgICAgIG1lLmNscyA9IGNscztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCBmb3IgY3VzdG9tIGxpc3QgaXRlbXNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjb3JkXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIGxpc3QgaXRlbSBvYmplY3RcbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtKHJlY29yZCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaXRlbUNvbnRlbnQgPSBtZS5jcmVhdGVJdGVtQ29udGVudChyZWNvcmQpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICAgICAgICB0YWcgICAgIDogJ2xpJyxcbiAgICAgICAgICAgIGNscyAgICAgOiBbbWUuaXRlbUNsc10sXG4gICAgICAgICAgICBpZCAgICAgIDogbWUuZ2V0SXRlbUlkKHJlY29yZFttZS5nZXRLZXlQcm9wZXJ0eSgpXSksXG4gICAgICAgICAgICB0YWJJbmRleDogLTFcbiAgICAgICAgfTtcblxuICAgICAgICBpdGVtW3R5cGVvZiBpdGVtQ29udGVudCA9PT0gJ3N0cmluZycgPyAnaHRtbCcgOiAnY24nXSA9IGl0ZW1Db250ZW50O1xuXG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIGZvciBjdXN0b20gcmVuZGVyZXJzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqIEByZXR1cm5zIHtPYmplY3RbXXxTdHJpbmd9IEVpdGhlciBhbiB2ZG9tIGNuIGFycmF5IG9yIGEgaHRtbCBzdHJpbmdcbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtQ29udGVudChyZWNvcmQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGl0ZW1UZXh0ID0gcmVjb3JkW3RoaXMuZGlzcGxheUZpZWxkXSxcbiAgICAgICAgICAgIGZpbHRlcjtcblxuICAgICAgICBpZiAobWUuaGlnaGxpZ2h0RmlsdGVyVmFsdWUpIHtcbiAgICAgICAgICAgIGZpbHRlciA9IG1lLnN0b3JlLmdldEZpbHRlcihtZS5kaXNwbGF5RmllbGQpO1xuXG4gICAgICAgICAgICBpZiAoZmlsdGVyICYmIGZpbHRlci52YWx1ZSAhPT0gbnVsbCAmJiBmaWx0ZXIudmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgaXRlbVRleHQgPSBpdGVtVGV4dC5yZXBsYWNlKG5ldyBSZWdFeHAoZmlsdGVyLnZhbHVlLCAnZ2knKSwgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm5lby1oaWdobGlnaHQtc2VhcmNoXCI+JyArIG1hdGNoICsgJzwvc3Bhbj4nO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW1UZXh0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV1cbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtcyhzaWxlbnQ9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgdmRvbS5jbiA9IFtdO1xuXG4gICAgICAgIG1lLnN0b3JlLml0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB2ZG9tLmNuLnB1c2gobWUuY3JlYXRlSXRlbShpdGVtKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzaWxlbnQpIHtcbiAgICAgICAgICAgIG1lLl92ZG9tID0gdmRvbTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLnByb21pc2VWZG9tVXBkYXRlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWUuZmlyZSgnY3JlYXRlSXRlbXMnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5zZWxlY3Rpb25Nb2RlbCkge1xuICAgICAgICAgICAgbWUuc2VsZWN0aW9uTW9kZWwuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lLnN0b3JlICYmIG1lLmF1dG9EZXN0cm95U3RvcmUpIHtcbiAgICAgICAgICAgIG1lLnN0b3JlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxscyBmb2N1cygpIG9uIHRoZSB0b3AgbGV2ZWwgRE9NIG5vZGUgb2YgdGhpcyBjb21wb25lbnQgb3Igb24gYSBnaXZlbiBub2RlIHZpYSBpZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbaWRdXG4gICAgICovXG4gICAgZm9jdXMoaWQpIHtcbiAgICAgICAgc3VwZXIuZm9jdXMoaWQpO1xuXG4gICAgICAgIGlmIChpZCkge1xuICAgICAgICAgICAgLy8gcmVtb3RlIG1ldGhvZCBhY2Nlc3NcbiAgICAgICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICBpZCAgICAgIDogaWQgfHwgdGhpcy5pZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gaWRcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldEl0ZW1JZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZCArICdfXycgKyBpZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2bm9kZUlkXG4gICAgICogQHJldHVybnMge1N0cmluZ3xOdW1iZXJ9IGl0ZW1JZFxuICAgICAqL1xuICAgIGdldEl0ZW1SZWNvcmRJZCh2bm9kZUlkKSB7XG4gICAgICAgIGxldCBpdGVtSWQgICA9IHZub2RlSWQuc3BsaXQoJ19fJylbMV0sXG4gICAgICAgICAgICBtb2RlbCAgICA9IHRoaXMuc3RvcmUubW9kZWwsXG4gICAgICAgICAgICBrZXlGaWVsZCA9IG1vZGVsICYmIG1vZGVsLmdldEZpZWxkKG1vZGVsLmtleVByb3BlcnR5KTtcblxuICAgICAgICBpZiAoa2V5RmllbGQgJiYga2V5RmllbGQudHlwZS50b0xvd2VyQ2FzZSgpID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaXRlbUlkID0gcGFyc2VJbnQoaXRlbUlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVtSWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3VwcG9ydCBjb2xsZWN0aW9ucyAmIHN0b3Jlc1xuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0S2V5UHJvcGVydHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLmtleVByb3BlcnR5IHx8IHRoaXMuc3RvcmUubW9kZWwua2V5UHJvcGVydHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uQ2xpY2soZGF0YSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChkYXRhLnBhdGhbMF0uaWQgPT09IG1lLmlkKSB7XG4gICAgICAgICAgICBtZS5vbkNvbnRhaW5lckNsaWNrKGRhdGEpO1xuICAgICAgICB9ICBlbHNlIGlmIChkYXRhLnBhdGhbMF0uY2xzLmluY2x1ZGVzKG1lLml0ZW1DbHMpKSB7XG4gICAgICAgICAgICBtZS5vbkl0ZW1DbGljayhkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkNvbnRhaW5lckNsaWNrKGRhdGEpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjb250YWluZXJDbGljayBldmVudCBmaXJlcyB3aGVuIGEgY2xpY2sgb2NjdXJzIG9uIHRoZSBjb21wb25lbnQsIGJ1dCBub3Qgb24gYSBsaXN0IGl0ZW1cbiAgICAgICAgICogQGV2ZW50IGNvbnRhaW5lckNsaWNrXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nW119IGNscyB0aGUgY2xhc3NMaXN0IG9mIHRoZSB0YXJnZXQgbm9kZSAoY29udmVydGVkIHRvIGFuIGFycmF5KVxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWQgdGhlIHRhcmdldCBkb20gaWRcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmdbXX0gcGF0aCB0aGUgZXZlbnQgcGF0aFxuICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5maXJlKCdjb250YWluZXJDbGljaycsIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkl0ZW1DbGljayhkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgbm9kZUlkID0gZGF0YS5wYXRoWzBdLmlkO1xuXG4gICAgICAgIGlmICghbWUuZGlzYWJsZVNlbGVjdGlvbiAmJiBtZS5zZWxlY3Rpb25Nb2RlbCkge1xuICAgICAgICAgICAgbWUuc2VsZWN0aW9uTW9kZWwuc2VsZWN0KG5vZGVJZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGl0ZW1DbGljayBldmVudCBmaXJlcyB3aGVuIGEgY2xpY2sgb2NjdXJzIG9uIGEgbGlzdCBpdGVtXG4gICAgICAgICAqIEBldmVudCBpdGVtQ2xpY2tcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGlkIHRoZSByZWNvcmQgbWF0Y2hpbmcgdGhlIGxpc3QgaXRlbVxuICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgbWUuZmlyZSgnaXRlbUNsaWNrJywgbWUuc3RvcmUuZ2V0KG1lLmdldEl0ZW1SZWNvcmRJZChub2RlSWQpKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvblN0b3JlRmlsdGVyKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW1zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvblN0b3JlTG9hZCgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAoIW1lLm1vdW50ZWQgJiYgbWUucmVuZGVyaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lcklkID0gbWUub24oJ3JlbmRlcmVkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1lLnVuKCdyZW5kZXJlZCcsIGxpc3RlbmVySWQpO1xuICAgICAgICAgICAgICAgIG1lLmNyZWF0ZUl0ZW1zKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLmNyZWF0ZUl0ZW1zKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBzaG9ydGN1dFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqL1xuICAgIHNlbGVjdEl0ZW0oaW5kZXgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAoIW1lLmRpc2FibGVTZWxlY3Rpb24gJiYgbWUuc2VsZWN0aW9uTW9kZWwpIHtcbiAgICAgICAgICAgIG1lLnNlbGVjdGlvbk1vZGVsLnNlbGVjdEF0KGluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQmFzZSk7XG5cbmV4cG9ydCB7QmFzZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgTW9kZWwgZnJvbSAnLi9Nb2RlbC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uc2VsZWN0aW9uLkxpc3RNb2RlbFxuICogQGV4dGVuZHMgTmVvLnNlbGVjdGlvbi5Nb2RlbFxuICovXG5jbGFzcyBMaXN0TW9kZWwgZXh0ZW5kcyBNb2RlbCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5zZWxlY3Rpb24uTGlzdE1vZGVsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uc2VsZWN0aW9uLkxpc3RNb2RlbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdzZWxlY3Rpb24tbGlzdG1vZGVsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3NlbGVjdGlvbi1saXN0bW9kZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc3RheUluTGlzdD10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBzdGF5SW5MaXN0OiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbktleURvd25Eb3duKGRhdGEpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpZXcuZGlzYWJsZVNlbGVjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5vbk5hdktleShkYXRhLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbktleURvd25MZWZ0KGRhdGEpIHtcbiAgICAgICAgdGhpcy5vbktleURvd25VcChkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25LZXlEb3duUmlnaHQoZGF0YSkge1xuICAgICAgICB0aGlzLm9uS2V5RG93bkRvd24oZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uS2V5RG93blVwKGRhdGEpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpZXcuZGlzYWJsZVNlbGVjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5vbk5hdktleShkYXRhLCAtMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0ZXBcbiAgICAgKi9cbiAgICBvbk5hdktleShkYXRhLCBzdGVwKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGl0ZW0gICAgICAgICAgICAgPSBkYXRhLnBhdGhbMF0sXG4gICAgICAgICAgICB2aWV3ICAgICAgICAgICAgID0gbWUudmlldyxcbiAgICAgICAgICAgIHN0b3JlICAgICAgICAgICAgPSB2aWV3LnN0b3JlLFxuICAgICAgICAgICAgbWF4SXRlbXMgICAgICAgICA9IHN0b3JlLmdldENvdW50KCksXG4gICAgICAgICAgICBwcmV2ZW50U2VsZWN0aW9uID0gZmFsc2UsXG4gICAgICAgICAgICBpbmRleCwgaXRlbUlkLCByZWNvcmQsIHJlY29yZElkO1xuXG4gICAgICAgIGlmIChpdGVtLmNscy5pbmNsdWRlcyh2aWV3Lml0ZW1DbHMpKSB7XG4gICAgICAgICAgICByZWNvcmRJZCA9IHZpZXcuZ2V0SXRlbVJlY29yZElkKGl0ZW0uaWQpO1xuICAgICAgICAgICAgaW5kZXggICAgPSBzdG9yZS5pbmRleE9mKHJlY29yZElkKSArIHN0ZXA7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICBpZiAobWUuc3RheUluTGlzdCkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IG1heEl0ZW1zIC0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcmV2ZW50U2VsZWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmlldy5maXJlKCdzZWxlY3RQcmVGaXJzdEl0ZW0nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID49IG1heEl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1lLnN0YXlJbkxpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZlbnRTZWxlY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB2aWV3LmZpcmUoJ3NlbGVjdFBvc3RMYXN0SXRlbScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcHJldmVudFNlbGVjdGlvbikge1xuICAgICAgICAgICAgcmVjb3JkID0gc3RvcmUuZ2V0QXQoaW5kZXgpO1xuICAgICAgICAgICAgaXRlbUlkID0gdmlldy5nZXRJdGVtSWQocmVjb3JkW21lLnZpZXcuZ2V0S2V5UHJvcGVydHkoKV0pO1xuXG4gICAgICAgICAgICBtZS5zZWxlY3QoaXRlbUlkKTtcbiAgICAgICAgICAgIHZpZXcuZm9jdXMoaXRlbUlkKTtcbiAgICAgICAgICAgIHZpZXcuZmlyZSgnaXRlbU5hdmlnYXRlJywgcmVjb3JkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLmRlc2VsZWN0QWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBjb21wb25lbnRcbiAgICAgKi9cbiAgICByZWdpc3Rlcihjb21wb25lbnQpIHtcbiAgICAgICAgc3VwZXIucmVnaXN0ZXIoY29tcG9uZW50KTtcblxuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBpZCAgID0gbWUuaWQsXG4gICAgICAgICAgICB2aWV3ID0gbWUudmlldztcblxuICAgICAgICBpZiAodmlldy5rZXlzKSB7XG4gICAgICAgICAgICB2aWV3LmtleXMuX2tleXMucHVzaChcbiAgICAgICAgICAgICAgICB7Zm46ICdvbktleURvd25Eb3duJyAgLGtleTogJ0Rvd24nICAsc2NvcGU6IGlkfSxcbiAgICAgICAgICAgICAgICB7Zm46ICdvbktleURvd25MZWZ0JyAgLGtleTogJ0xlZnQnICAsc2NvcGU6IGlkfSxcbiAgICAgICAgICAgICAgICB7Zm46ICdvbktleURvd25SaWdodCcgLGtleTogJ1JpZ2h0JyAsc2NvcGU6IGlkfSxcbiAgICAgICAgICAgICAgICB7Zm46ICdvbktleURvd25VcCcgICAgLGtleTogJ1VwJyAgICAsc2NvcGU6IGlkfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICovXG4gICAgc2VsZWN0QXQoaW5kZXgpIHtcbiAgICAgICAgbGV0IHZpZXcgICAgICA9IHRoaXMudmlldyxcbiAgICAgICAgICAgIHJlY29yZEtleSA9IHZpZXcuc3RvcmUuZ2V0S2V5QXQoaW5kZXgpLFxuICAgICAgICAgICAgaXRlbUlkICAgID0gcmVjb3JkS2V5ICYmIHZpZXcuZ2V0SXRlbUlkKHJlY29yZEtleSk7XG5cbiAgICAgICAgaWYgKGl0ZW1JZCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3QoaXRlbUlkKTtcbiAgICAgICAgICAgIHZpZXcuZm9jdXMoaXRlbUlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgdW5yZWdpc3RlcigpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgaWQgICA9IG1lLmlkLFxuICAgICAgICAgICAgdmlldyA9IG1lLnZpZXc7XG5cbiAgICAgICAgaWYgKHZpZXcua2V5cykge1xuICAgICAgICAgICAgdmlldy5rZXlzLnJlbW92ZUtleXMoW1xuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93bkRvd24nICAsa2V5OiAnRG93bicgICxzY29wZTogaWR9LFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93bkxlZnQnICAsa2V5OiAnTGVmdCcgICxzY29wZTogaWR9LFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93blJpZ2h0JyAsa2V5OiAnUmlnaHQnICxzY29wZTogaWR9LFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93blVwJyAgICAsa2V5OiAnVXAnICAgICxzY29wZTogaWR9XG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLnVucmVnaXN0ZXIoKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKExpc3RNb2RlbCk7XG5cbmV4cG9ydCB7TGlzdE1vZGVsIGFzIGRlZmF1bHR9OyJdLCJzb3VyY2VSb290IjoiIn0=