self["webpackChunk"](["vendors~chunks/docs-app-mjs"],{

/***/ "./node_modules/neo.mjs/src/form/field/Search.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/Search.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var _Text_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text.mjs */ "./node_modules/neo.mjs/src/form/field/Text.mjs");


/**
 * @class Neo.form.field.Search
 * @extends Neo.form.field.Text
 */
class Search extends _Text_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.Search'
         * @protected
         */
        className: 'Neo.form.field.Search',
        /**
         * @member {String} ntype='searchfield'
         * @protected
         */
        ntype: 'searchfield',
        /**
         * @member {Array} cls=['neo-searchfield', 'neo-textfield']
         */
        cls: ['neo-searchfield', 'neo-textfield'],
        /**
         * Value for the hideLabel_ textfield config
         * @member {Boolean} hideLabel=true
         */
        hideLabel: true,
        /**
         * Value for the placeholderText_ textfield config
         * @member {String} placeholderText='Search'
         */
        placeholderText: 'Search',
    }}
}

Neo.applyClassConfig(Search);



/***/ }),

/***/ "./node_modules/neo.mjs/src/tree/List.mjs":
/*!************************************************!*\
  !*** ./node_modules/neo.mjs/src/tree/List.mjs ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tree; });
/* harmony import */ var _list_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../list/Base.mjs */ "./node_modules/neo.mjs/src/list/Base.mjs");
/* harmony import */ var _collection_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../collection/Base.mjs */ "./node_modules/neo.mjs/src/collection/Base.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");




/**
 * @class Neo.tree.List
 * @extends Neo.list.Base
 */
class Tree extends _list_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.tree.List'
         * @protected
         */
        className: 'Neo.tree.List',
        /**
         * @member {String} ntype='treelist'
         * @protected
         */
        ntype: 'treelist',
        /**
         * @member {String[]} cls=['neo-tree-list']
         */
        cls: ['neo-tree-list'],
        /**
         * todo: change the default to false once selection.TreeList is in place
         * @member {Boolean} disableSelection=true
         */
        disableSelection: true,
        /**
         * @member {Neo.draggable.tree.DragZone|null} dragZone=null
         */
        dragZone: null,
        /**
         * @member {Boolean} showCollapseExpandAllIcons=true
         */
        showCollapseExpandAllIcons: true,
        /**
         * @member {Boolean} sortable_=false
         */
        sortable_: false,
        /**
         * @member {Neo.draggable.tree.SortZone|null} sortZone=null
         */
        sortZone: null,
        /**
         * @member {Object} dragZoneConfig=null
         */
        sortZoneConfig: null,
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            cn: [{
                tag: 'ul',
                cls: ['neo-list-container', 'neo-list'],
                cn : []
            }]
        }
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me   = this,
            vdom = me.vdom;

        if (me.showCollapseExpandAllIcons) {
            vdom.cn.unshift({
                cls: ['neo-treelist-menu-item', 'neo-treelist-collapse-all-icon'],
                cn : [{
                    tag: 'span',
                    cls: ['neo-treelist-menu-item-content']
                }]
            }, {
                cls: ['neo-treelist-menu-item', 'neo-treelist-expand-all-icon'],
                cn : [{
                    tag: 'span',
                    cls: ['neo-treelist-menu-item-content']
                }]
            });

            me.vdom = vdom;
        }
    }

    /**
     * Triggered after the draggable config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetDraggable(value, oldValue) {
        let me = this;

        if (value) {
            if (me.sortable) {
                console.error('tree.List can be either draggable or sortable, not both.', me.id);
            } else if (!me.dragZone) {
                Promise.all(/*! import() | src/draggable/tree/DragZone-mjs.js */[__webpack_require__.e("vendors~src/draggable/list/DragZone-mjs.js~src/draggable/tab/header/toolbar/SortZone-mjs.js~src/drag~e3af9737"), __webpack_require__.e("src/draggable/tree/DragZone-mjs.js")]).then(__webpack_require__.bind(null, /*! ../draggable/tree/DragZone.mjs */ "./node_modules/neo.mjs/src/draggable/tree/DragZone.mjs")).then(module => {
                    me.dragZone = Neo.create({
                        module : module.default,
                        appName: me.appName,
                        owner  : me,
                        ...me.dragZoneConfig || {}
                    });
                });
            }
        }
    }

    /**
     * Triggered after the sortable config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetSortable(value, oldValue) {
        let me = this;

        if (value) {
            if (me.draggable) {
                console.error('tree.List can be either draggable or sortable, not both.', me.id);
            } else if (!me.sortZone) {
                Promise.all(/*! import() | src/draggable/tree/SortZone-mjs.js */[__webpack_require__.e("vendors~src/draggable/list/DragZone-mjs.js~src/draggable/tab/header/toolbar/SortZone-mjs.js~src/drag~e3af9737"), __webpack_require__.e("src/draggable/tree/SortZone-mjs.js")]).then(__webpack_require__.bind(null, /*! ../draggable/tree/SortZone.mjs */ "./node_modules/neo.mjs/src/draggable/tree/SortZone.mjs")).then(module => {
                    me.sortZone = Neo.create({
                        module             : module.default,
                        appName            : me.appName,
                        boundaryContainerId: me.id,
                        owner              : me,
                        ...me.sortZoneConfig || {}
                    });
                });
            }
        }
    }

    /**
     * Triggered before the store config gets changed.
     * @param {Object|Neo.data.Store} value
     * @param {Object|Neo.data.Store} oldValue
     * @returns {Neo.data.Store}
     * @protected
     */
    beforeSetStore(value, oldValue) {
        if (!value) {
            value = Neo.create(_collection_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], {
                keyProperty: 'id'
            });
        }

        return super.beforeSetStore(value, oldValue);
    }


    /**
     * Collapses all folders
     * @param {Boolean} [silent]=false Set silent to true to prevent a vnode update
     */
    collapseAll(silent=false) {
        let me       = this,
            vdom     = me.vdom,
            hasMatch = false,
            node;

        me.store.items.forEach(item => {
            if (!item.isLeaf) {
                node = me.getVdomChild(me.getItemId(item.id), vdom);

                if (node.cls.includes('neo-folder-open')) {
                    _util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].remove(node.cls, 'neo-folder-open');
                    hasMatch = true;
                }
            }
        });

        if (hasMatch) {
            me[silent ? '_vdom' : 'vdom'] = vdom;
        }
    }

    /**
     *
     * @param {String} [parentId] The parent node
     * @param {Object} [vdomRoot] The vdom template root for the current sub tree
     * @param {Number} level The hierarchy level of the tree
     * @returns {Object} vdomRoot
     * @protected
     */
    createItems(parentId, vdomRoot, level) {
        let me    = this,
            items = me.store.find('parentId', parentId),
            cls, tmpRoot;

        if (items.length > 0) {
            if (!vdomRoot.cn) {
                vdomRoot.cn = [];
            }

            if (parentId !== null) {
                vdomRoot.cn.push({
                    tag: 'ul',
                    cls: ['neo-list'],
                    cn : [],
                    style: {
                        paddingLeft: '15px'
                    }
                });

                tmpRoot = vdomRoot.cn[vdomRoot.cn.length - 1];
            } else {
                tmpRoot = vdomRoot;
            }

            items.forEach(item => {
                cls = ['neo-list-item'];

                if (item.isLeaf) {
                    cls.push(item.singleton ? 'neo-list-item-leaf-singleton' : 'neo-list-item-leaf');
                } else {
                    cls.push('neo-list-folder');

                    if (!item.collapsed) {
                        cls.push('neo-folder-open');
                    }
                }

                tmpRoot.cn.push({
                    tag: 'li',
                    cls: cls,
                    id : me.getItemId(item.id),
                    cn : [{
                        tag      : 'span',
                        cls      : ['neo-list-item-content'],
                        innerHTML: item.name,
                        style: {
                            pointerEvents: 'none'
                        }
                    }],
                    style: {
                        padding : '10px',
                        position: item.isLeaf ? null : 'sticky',
                        top     : item.isLeaf ? null : (level * 38) + 'px',
                        zIndex  : item.isLeaf ? null : (20 / (level + 1)),
                    }
                });

                tmpRoot = me.createItems(item.id, tmpRoot, level + 1);
            });
        }

        return vdomRoot;
    }

    /**
     * Expands all folders
     * @param {Boolean} silent=false Set silent to true to prevent a vnode update
     */
    expandAll(silent=false) {
        let me       = this,
            vdom     = me.vdom,
            hasMatch = false,
            node;

        me.store.items.forEach(item => {
            if (!item.isLeaf) {
                node = me.getVdomChild(me.getItemId(item.id), vdom);

                if (!node.cls.includes('neo-folder-open')) {
                    _util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].add(node.cls, 'neo-folder-open');
                    hasMatch = true;
                }
            }
        });

        if (hasMatch) {
            me[silent ? '_vdom' : 'vdom'] = vdom;
        }
    }

    /**
     * Hides Tree nodes which do not match the filter
     * @param {String} property The store field to filter by
     * @param {String} value The filter value
     * @param {Number|null} parentId The root id for the current filter call
     * @param {Boolean} [parentMatch]=false In case a parent folder matches the filter, show its child items
     * @returns {Boolean} false if at least one child item is filtered
     */
    filter(property, value, parentId, parentMatch=false) {
        let me         = this,
            isFiltered = true,
            valueRegEx = new RegExp(value, 'gi'),
            vdom       = me.vdom,
            childReturnValue, directMatch, node;

        if (!value) {
            value = '';
        }

        me.store.items.forEach(item => {
            if (item.parentId === parentId) {
                directMatch = false;
                node        = me.getVdomChild(me.getItemId(item.id), vdom);

                node.cn[0].innerHTML = item[property].replace(valueRegEx, match => {
                    directMatch = true;
                    return `<span class="neo-highlight-search">${match}</span>`;
                });

                if (item.isLeaf) {
                    childReturnValue = true;
                } else {
                    childReturnValue = me.filter(property, value, item.id, directMatch || parentMatch);
                }

                if (directMatch || parentMatch || childReturnValue === false || value === '') {
                    isFiltered = false;
                }

                node.style.display = isFiltered ? 'none' : 'list-item';
            }
        });

        if (parentId === null) {
            me.expandAll(true);
            me.vdom = vdom;
        }

        return isFiltered;
    }

    /**
     *
     * @returns {Object}
     */
    getListItemsRoot() {
        return this.vdom.cn[this.showCollapseExpandAllIcons ? 2 : 0];
    }

    /**
     *
     * @param {Object} data
     */
    onClick(data) {
        if (data.target.cls.includes('neo-treelist-menu-item')) {
            this.onMenuItemClick(data.target.cls);
        } else {
            super.onClick(data);
        }
    }

    /**
     *
     * @param {Object} data
     */
    onItemClick(data) {
        let me    = this,
            vdom  = me.vdom,
            items = me.store.items,
            i     = 0,
            len   = items.length,
            path  = data.path.map(e => e.id),
            item, record, tmpItem, vnodeId;

        for (; i < len; i++) {
            tmpItem = items[i];
            vnodeId = me.getItemId(tmpItem.id);

            if (path.includes(vnodeId)) {
                record = tmpItem;
                item   = me.getVdomChild(vnodeId);
                break;
            }
        }

        if (item) {
            if (item.cls && item.cls.includes('neo-list-folder')) {
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].toggle(item.cls, 'neo-folder-open');
                me.vdom = vdom;
            } else {
                me.onLeafItemClick(record);

                /**
                 * The leafItemClick event fires when a click occurs on a list item which does not have child items.
                 * Passes the item record to the event handler.
                 * @event leafItemClick
                 * @returns {Object} record
                 */
                me.fire('leafItemClick', record);
            }

            super.onItemClick(data);
        }
    }

    /**
     * Placeholder method
     * @param {Object} record
     */
    onLeafItemClick(record) {

    }

    /**
     * Gets triggered by clicks on the collapse or expand all icons
     * @param {Array} cls
     * @protected
     */
    onMenuItemClick(cls) {
        if (cls.includes('neo-treelist-collapse-all-icon')) {
            this.collapseAll();
        } else {
            this.expandAll();
        }
    }
}

Neo.applyClassConfig(Tree);



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9TZWFyY2gubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy90cmVlL0xpc3QubWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlEQUFJO0FBQ3pCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsTUFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEM7QUFDTTtBQUNMOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzREFBSTtBQUN2Qix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUNBQWlDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQ0FBaUM7QUFDckQ7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFD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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsdURBQVE7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsT0FBTztBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoidmVuZG9yc35jaHVua3MvZG9jcy1hcHAtbWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5mb3JtLmZpZWxkLlNlYXJjaFxuICogQGV4dGVuZHMgTmVvLmZvcm0uZmllbGQuVGV4dFxuICovXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBUZXh0IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmZvcm0uZmllbGQuU2VhcmNoJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uZm9ybS5maWVsZC5TZWFyY2gnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nc2VhcmNoZmllbGQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnc2VhcmNoZmllbGQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGNscz1bJ25lby1zZWFyY2hmaWVsZCcsICduZW8tdGV4dGZpZWxkJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tc2VhcmNoZmllbGQnLCAnbmVvLXRleHRmaWVsZCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWUgZm9yIHRoZSBoaWRlTGFiZWxfIHRleHRmaWVsZCBjb25maWdcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaGlkZUxhYmVsPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGhpZGVMYWJlbDogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVlIGZvciB0aGUgcGxhY2Vob2xkZXJUZXh0XyB0ZXh0ZmllbGQgY29uZmlnXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gcGxhY2Vob2xkZXJUZXh0PSdTZWFyY2gnXG4gICAgICAgICAqL1xuICAgICAgICBwbGFjZWhvbGRlclRleHQ6ICdTZWFyY2gnLFxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFNlYXJjaCk7XG5cbmV4cG9ydCB7U2VhcmNoIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlICAgICAgIGZyb20gJy4uL2xpc3QvQmFzZS5tanMnO1xuaW1wb3J0IENvbGxlY3Rpb24gZnJvbSAnLi4vY29sbGVjdGlvbi9CYXNlLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgICBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby50cmVlLkxpc3RcbiAqIEBleHRlbmRzIE5lby5saXN0LkJhc2VcbiAqL1xuY2xhc3MgVHJlZSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udHJlZS5MaXN0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udHJlZS5MaXN0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3RyZWVsaXN0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3RyZWVsaXN0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tdHJlZS1saXN0J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tdHJlZS1saXN0J10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB0b2RvOiBjaGFuZ2UgdGhlIGRlZmF1bHQgdG8gZmFsc2Ugb25jZSBzZWxlY3Rpb24uVHJlZUxpc3QgaXMgaW4gcGxhY2VcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gZGlzYWJsZVNlbGVjdGlvbj10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBkaXNhYmxlU2VsZWN0aW9uOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmRyYWdnYWJsZS50cmVlLkRyYWdab25lfG51bGx9IGRyYWdab25lPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGRyYWdab25lOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hvd0NvbGxhcHNlRXhwYW5kQWxsSWNvbnM9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgc2hvd0NvbGxhcHNlRXhwYW5kQWxsSWNvbnM6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzb3J0YWJsZV89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHNvcnRhYmxlXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZHJhZ2dhYmxlLnRyZWUuU29ydFpvbmV8bnVsbH0gc29ydFpvbmU9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc29ydFpvbmU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGRyYWdab25lQ29uZmlnPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHNvcnRab25lQ29uZmlnOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIHRhZzogJ3VsJyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWxpc3QtY29udGFpbmVyJywgJ25lby1saXN0J10sXG4gICAgICAgICAgICAgICAgY24gOiBbXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICBpZiAobWUuc2hvd0NvbGxhcHNlRXhwYW5kQWxsSWNvbnMpIHtcbiAgICAgICAgICAgIHZkb20uY24udW5zaGlmdCh7XG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby10cmVlbGlzdC1tZW51LWl0ZW0nLCAnbmVvLXRyZWVsaXN0LWNvbGxhcHNlLWFsbC1pY29uJ10sXG4gICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby10cmVlbGlzdC1tZW51LWl0ZW0tY29udGVudCddXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLXRyZWVsaXN0LW1lbnUtaXRlbScsICduZW8tdHJlZWxpc3QtZXhwYW5kLWFsbC1pY29uJ10sXG4gICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby10cmVlbGlzdC1tZW51LWl0ZW0tY29udGVudCddXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgZHJhZ2dhYmxlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RHJhZ2dhYmxlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKG1lLnNvcnRhYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcigndHJlZS5MaXN0IGNhbiBiZSBlaXRoZXIgZHJhZ2dhYmxlIG9yIHNvcnRhYmxlLCBub3QgYm90aC4nLCBtZS5pZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFtZS5kcmFnWm9uZSkge1xuICAgICAgICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgICAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogJ3NyYy9kcmFnZ2FibGUvdHJlZS9EcmFnWm9uZS1tanMuanMnICovXG4gICAgICAgICAgICAgICAgICAgICcuLi9kcmFnZ2FibGUvdHJlZS9EcmFnWm9uZS5tanMnXG4gICAgICAgICAgICAgICAgICAgICkudGhlbihtb2R1bGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtZS5kcmFnWm9uZSA9IE5lby5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlIDogbW9kdWxlLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBOYW1lOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIgIDogbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5tZS5kcmFnWm9uZUNvbmZpZyB8fCB7fVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc29ydGFibGUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTb3J0YWJsZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChtZS5kcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCd0cmVlLkxpc3QgY2FuIGJlIGVpdGhlciBkcmFnZ2FibGUgb3Igc29ydGFibGUsIG5vdCBib3RoLicsIG1lLmlkKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIW1lLnNvcnRab25lKSB7XG4gICAgICAgICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnc3JjL2RyYWdnYWJsZS90cmVlL1NvcnRab25lLW1qcy5qcycgKi9cbiAgICAgICAgICAgICAgICAgICAgJy4uL2RyYWdnYWJsZS90cmVlL1NvcnRab25lLm1qcydcbiAgICAgICAgICAgICAgICAgICAgKS50aGVuKG1vZHVsZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1lLnNvcnRab25lID0gTmVvLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUgICAgICAgICAgICAgOiBtb2R1bGUuZGVmYXVsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcE5hbWUgICAgICAgICAgICA6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3VuZGFyeUNvbnRhaW5lcklkOiBtZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyICAgICAgICAgICAgICA6IG1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4ubWUuc29ydFpvbmVDb25maWcgfHwge31cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBzdG9yZSBjb25maWcgZ2V0cyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fE5lby5kYXRhLlN0b3JlfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fE5lby5kYXRhLlN0b3JlfSBvbGRWYWx1ZVxuICAgICAqIEByZXR1cm5zIHtOZW8uZGF0YS5TdG9yZX1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0U3RvcmUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gTmVvLmNyZWF0ZShDb2xsZWN0aW9uLCB7XG4gICAgICAgICAgICAgICAga2V5UHJvcGVydHk6ICdpZCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLmJlZm9yZVNldFN0b3JlKHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDb2xsYXBzZXMgYWxsIGZvbGRlcnNcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzaWxlbnRdPWZhbHNlIFNldCBzaWxlbnQgdG8gdHJ1ZSB0byBwcmV2ZW50IGEgdm5vZGUgdXBkYXRlXG4gICAgICovXG4gICAgY29sbGFwc2VBbGwoc2lsZW50PWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBoYXNNYXRjaCA9IGZhbHNlLFxuICAgICAgICAgICAgbm9kZTtcblxuICAgICAgICBtZS5zdG9yZS5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKCFpdGVtLmlzTGVhZikge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBtZS5nZXRWZG9tQ2hpbGQobWUuZ2V0SXRlbUlkKGl0ZW0uaWQpLCB2ZG9tKTtcblxuICAgICAgICAgICAgICAgIGlmIChub2RlLmNscy5pbmNsdWRlcygnbmVvLWZvbGRlci1vcGVuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKG5vZGUuY2xzLCAnbmVvLWZvbGRlci1vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIGhhc01hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChoYXNNYXRjaCkge1xuICAgICAgICAgICAgbWVbc2lsZW50ID8gJ192ZG9tJyA6ICd2ZG9tJ10gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW3BhcmVudElkXSBUaGUgcGFyZW50IG5vZGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Zkb21Sb290XSBUaGUgdmRvbSB0ZW1wbGF0ZSByb290IGZvciB0aGUgY3VycmVudCBzdWIgdHJlZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBsZXZlbCBUaGUgaGllcmFyY2h5IGxldmVsIG9mIHRoZSB0cmVlXG4gICAgICogQHJldHVybnMge09iamVjdH0gdmRvbVJvb3RcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgY3JlYXRlSXRlbXMocGFyZW50SWQsIHZkb21Sb290LCBsZXZlbCkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgaXRlbXMgPSBtZS5zdG9yZS5maW5kKCdwYXJlbnRJZCcsIHBhcmVudElkKSxcbiAgICAgICAgICAgIGNscywgdG1wUm9vdDtcblxuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKCF2ZG9tUm9vdC5jbikge1xuICAgICAgICAgICAgICAgIHZkb21Sb290LmNuID0gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYXJlbnRJZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZkb21Sb290LmNuLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICd1bCcsXG4gICAgICAgICAgICAgICAgICAgIGNsczogWyduZW8tbGlzdCddLFxuICAgICAgICAgICAgICAgICAgICBjbiA6IFtdLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxNXB4J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0bXBSb290ID0gdmRvbVJvb3QuY25bdmRvbVJvb3QuY24ubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRtcFJvb3QgPSB2ZG9tUm9vdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBjbHMgPSBbJ25lby1saXN0LWl0ZW0nXTtcblxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlzTGVhZikge1xuICAgICAgICAgICAgICAgICAgICBjbHMucHVzaChpdGVtLnNpbmdsZXRvbiA/ICduZW8tbGlzdC1pdGVtLWxlYWYtc2luZ2xldG9uJyA6ICduZW8tbGlzdC1pdGVtLWxlYWYnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbHMucHVzaCgnbmVvLWxpc3QtZm9sZGVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpdGVtLmNvbGxhcHNlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xzLnB1c2goJ25lby1mb2xkZXItb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdG1wUm9vdC5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnbGknLFxuICAgICAgICAgICAgICAgICAgICBjbHM6IGNscyxcbiAgICAgICAgICAgICAgICAgICAgaWQgOiBtZS5nZXRJdGVtSWQoaXRlbS5pZCksXG4gICAgICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZyAgICAgIDogJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xzICAgICAgOiBbJ25lby1saXN0LWl0ZW0tY29udGVudCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmcgOiAnMTBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogaXRlbS5pc0xlYWYgPyBudWxsIDogJ3N0aWNreScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3AgICAgIDogaXRlbS5pc0xlYWYgPyBudWxsIDogKGxldmVsICogMzgpICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleCAgOiBpdGVtLmlzTGVhZiA/IG51bGwgOiAoMjAgLyAobGV2ZWwgKyAxKSksXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRtcFJvb3QgPSBtZS5jcmVhdGVJdGVtcyhpdGVtLmlkLCB0bXBSb290LCBsZXZlbCArIDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmRvbVJvb3Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhwYW5kcyBhbGwgZm9sZGVyc1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gc2lsZW50PWZhbHNlIFNldCBzaWxlbnQgdG8gdHJ1ZSB0byBwcmV2ZW50IGEgdm5vZGUgdXBkYXRlXG4gICAgICovXG4gICAgZXhwYW5kQWxsKHNpbGVudD1mYWxzZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgaGFzTWF0Y2ggPSBmYWxzZSxcbiAgICAgICAgICAgIG5vZGU7XG5cbiAgICAgICAgbWUuc3RvcmUuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmICghaXRlbS5pc0xlYWYpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gbWUuZ2V0VmRvbUNoaWxkKG1lLmdldEl0ZW1JZChpdGVtLmlkKSwgdmRvbSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIW5vZGUuY2xzLmluY2x1ZGVzKCduZW8tZm9sZGVyLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgICAgICBOZW9BcnJheS5hZGQobm9kZS5jbHMsICduZW8tZm9sZGVyLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGhhc01hdGNoKSB7XG4gICAgICAgICAgICBtZVtzaWxlbnQgPyAnX3Zkb20nIDogJ3Zkb20nXSA9IHZkb207XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlcyBUcmVlIG5vZGVzIHdoaWNoIGRvIG5vdCBtYXRjaCB0aGUgZmlsdGVyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IFRoZSBzdG9yZSBmaWVsZCB0byBmaWx0ZXIgYnlcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIGZpbHRlciB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfG51bGx9IHBhcmVudElkIFRoZSByb290IGlkIGZvciB0aGUgY3VycmVudCBmaWx0ZXIgY2FsbFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3BhcmVudE1hdGNoXT1mYWxzZSBJbiBjYXNlIGEgcGFyZW50IGZvbGRlciBtYXRjaGVzIHRoZSBmaWx0ZXIsIHNob3cgaXRzIGNoaWxkIGl0ZW1zXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IGZhbHNlIGlmIGF0IGxlYXN0IG9uZSBjaGlsZCBpdGVtIGlzIGZpbHRlcmVkXG4gICAgICovXG4gICAgZmlsdGVyKHByb3BlcnR5LCB2YWx1ZSwgcGFyZW50SWQsIHBhcmVudE1hdGNoPWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGlzRmlsdGVyZWQgPSB0cnVlLFxuICAgICAgICAgICAgdmFsdWVSZWdFeCA9IG5ldyBSZWdFeHAodmFsdWUsICdnaScpLFxuICAgICAgICAgICAgdmRvbSAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBjaGlsZFJldHVyblZhbHVlLCBkaXJlY3RNYXRjaCwgbm9kZTtcblxuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuc3RvcmUuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLnBhcmVudElkID09PSBwYXJlbnRJZCkge1xuICAgICAgICAgICAgICAgIGRpcmVjdE1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbm9kZSAgICAgICAgPSBtZS5nZXRWZG9tQ2hpbGQobWUuZ2V0SXRlbUlkKGl0ZW0uaWQpLCB2ZG9tKTtcblxuICAgICAgICAgICAgICAgIG5vZGUuY25bMF0uaW5uZXJIVE1MID0gaXRlbVtwcm9wZXJ0eV0ucmVwbGFjZSh2YWx1ZVJlZ0V4LCBtYXRjaCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdE1hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cIm5lby1oaWdobGlnaHQtc2VhcmNoXCI+JHttYXRjaH08L3NwYW4+YDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlzTGVhZikge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFJldHVyblZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFJldHVyblZhbHVlID0gbWUuZmlsdGVyKHByb3BlcnR5LCB2YWx1ZSwgaXRlbS5pZCwgZGlyZWN0TWF0Y2ggfHwgcGFyZW50TWF0Y2gpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3RNYXRjaCB8fCBwYXJlbnRNYXRjaCB8fCBjaGlsZFJldHVyblZhbHVlID09PSBmYWxzZSB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNGaWx0ZXJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuZGlzcGxheSA9IGlzRmlsdGVyZWQgPyAnbm9uZScgOiAnbGlzdC1pdGVtJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHBhcmVudElkID09PSBudWxsKSB7XG4gICAgICAgICAgICBtZS5leHBhbmRBbGwodHJ1ZSk7XG4gICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpc0ZpbHRlcmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRMaXN0SXRlbXNSb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52ZG9tLmNuW3RoaXMuc2hvd0NvbGxhcHNlRXhwYW5kQWxsSWNvbnMgPyAyIDogMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uQ2xpY2soZGF0YSkge1xuICAgICAgICBpZiAoZGF0YS50YXJnZXQuY2xzLmluY2x1ZGVzKCduZW8tdHJlZWxpc3QtbWVudS1pdGVtJykpIHtcbiAgICAgICAgICAgIHRoaXMub25NZW51SXRlbUNsaWNrKGRhdGEudGFyZ2V0LmNscyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdXBlci5vbkNsaWNrKGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uSXRlbUNsaWNrKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gID0gbWUudmRvbSxcbiAgICAgICAgICAgIGl0ZW1zID0gbWUuc3RvcmUuaXRlbXMsXG4gICAgICAgICAgICBpICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICA9IGl0ZW1zLmxlbmd0aCxcbiAgICAgICAgICAgIHBhdGggID0gZGF0YS5wYXRoLm1hcChlID0+IGUuaWQpLFxuICAgICAgICAgICAgaXRlbSwgcmVjb3JkLCB0bXBJdGVtLCB2bm9kZUlkO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHRtcEl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgICAgICAgIHZub2RlSWQgPSBtZS5nZXRJdGVtSWQodG1wSXRlbS5pZCk7XG5cbiAgICAgICAgICAgIGlmIChwYXRoLmluY2x1ZGVzKHZub2RlSWQpKSB7XG4gICAgICAgICAgICAgICAgcmVjb3JkID0gdG1wSXRlbTtcbiAgICAgICAgICAgICAgICBpdGVtICAgPSBtZS5nZXRWZG9tQ2hpbGQodm5vZGVJZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgaWYgKGl0ZW0uY2xzICYmIGl0ZW0uY2xzLmluY2x1ZGVzKCduZW8tbGlzdC1mb2xkZXInKSkge1xuICAgICAgICAgICAgICAgIE5lb0FycmF5LnRvZ2dsZShpdGVtLmNscywgJ25lby1mb2xkZXItb3BlbicpO1xuICAgICAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZS5vbkxlYWZJdGVtQ2xpY2socmVjb3JkKTtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFRoZSBsZWFmSXRlbUNsaWNrIGV2ZW50IGZpcmVzIHdoZW4gYSBjbGljayBvY2N1cnMgb24gYSBsaXN0IGl0ZW0gd2hpY2ggZG9lcyBub3QgaGF2ZSBjaGlsZCBpdGVtcy5cbiAgICAgICAgICAgICAgICAgKiBQYXNzZXMgdGhlIGl0ZW0gcmVjb3JkIHRvIHRoZSBldmVudCBoYW5kbGVyLlxuICAgICAgICAgICAgICAgICAqIEBldmVudCBsZWFmSXRlbUNsaWNrXG4gICAgICAgICAgICAgICAgICogQHJldHVybnMge09iamVjdH0gcmVjb3JkXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgbWUuZmlyZSgnbGVhZkl0ZW1DbGljaycsIHJlY29yZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN1cGVyLm9uSXRlbUNsaWNrKGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxhY2Vob2xkZXIgbWV0aG9kXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqL1xuICAgIG9uTGVhZkl0ZW1DbGljayhyZWNvcmQpIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdHJpZ2dlcmVkIGJ5IGNsaWNrcyBvbiB0aGUgY29sbGFwc2Ugb3IgZXhwYW5kIGFsbCBpY29uc1xuICAgICAqIEBwYXJhbSB7QXJyYXl9IGNsc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbk1lbnVJdGVtQ2xpY2soY2xzKSB7XG4gICAgICAgIGlmIChjbHMuaW5jbHVkZXMoJ25lby10cmVlbGlzdC1jb2xsYXBzZS1hbGwtaWNvbicpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlQWxsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmV4cGFuZEFsbCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhUcmVlKTtcblxuZXhwb3J0IHtUcmVlIGFzIGRlZmF1bHR9OyJdLCJzb3VyY2VSb290IjoiIn0=