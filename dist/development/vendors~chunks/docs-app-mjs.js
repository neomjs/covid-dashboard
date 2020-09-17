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

/***/ "./node_modules/neo.mjs/src/list/TreeList.mjs":
/*!****************************************************!*\
  !*** ./node_modules/neo.mjs/src/list/TreeList.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TreeList; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/list/Base.mjs");
/* harmony import */ var _collection_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../collection/Base.mjs */ "./node_modules/neo.mjs/src/collection/Base.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");




/**
 * @class Neo.list.TreeList
 * @extends Neo.list.Base
 */
class TreeList extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.list.TreeList'
         * @protected
         */
        className: 'Neo.list.TreeList',
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
         * @member {Boolean} showCollapseExpandAllIcons=true
         */
        showCollapseExpandAllIcons: true,
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
     * Triggered before the store config gets changed.
     * @param {Object|Neo.data.Store} value
     * @param {Object|Neo.data.Store} oldValue
     * @returns {Neo.data.Store}
     * @protected
     */
    beforeSetStore(value) {
        if (!value) {
            value = Neo.create(_collection_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], {
                keyProperty: 'id'
            });
        }

        return value;
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
            if (silent) {
                me._vdom = vdom
            } else {
                me.vdom = vdom;
            }
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
     * @param {Boolean} [silent]=false Set silent to true to prevent a vnode update
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
            if (silent) {
                me._vdom = vdom
            } else {
                me.vdom = vdom;
            }
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

                    node.style.display = 'list-item';
                } else {
                    node.style.display = 'none';
                }
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

Neo.applyClassConfig(TreeList);



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9TZWFyY2gubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9saXN0L1RyZWVMaXN0Lm1qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQThCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpREFBSTtBQUN6Qix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE1BQU07QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9DO0FBQ1k7QUFDTDs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaURBQUk7QUFDM0Isd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNq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cy1hcHAtbWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5mb3JtLmZpZWxkLlNlYXJjaFxuICogQGV4dGVuZHMgTmVvLmZvcm0uZmllbGQuVGV4dFxuICovXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBUZXh0IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmZvcm0uZmllbGQuU2VhcmNoJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uZm9ybS5maWVsZC5TZWFyY2gnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nc2VhcmNoZmllbGQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnc2VhcmNoZmllbGQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGNscz1bJ25lby1zZWFyY2hmaWVsZCcsICduZW8tdGV4dGZpZWxkJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tc2VhcmNoZmllbGQnLCAnbmVvLXRleHRmaWVsZCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWUgZm9yIHRoZSBoaWRlTGFiZWxfIHRleHRmaWVsZCBjb25maWdcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaGlkZUxhYmVsPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGhpZGVMYWJlbDogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVlIGZvciB0aGUgcGxhY2Vob2xkZXJUZXh0XyB0ZXh0ZmllbGQgY29uZmlnXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gcGxhY2Vob2xkZXJUZXh0PSdTZWFyY2gnXG4gICAgICAgICAqL1xuICAgICAgICBwbGFjZWhvbGRlclRleHQ6ICdTZWFyY2gnLFxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFNlYXJjaCk7XG5cbmV4cG9ydCB7U2VhcmNoIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlICAgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IENvbGxlY3Rpb24gZnJvbSAnLi4vY29sbGVjdGlvbi9CYXNlLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgICBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5saXN0LlRyZWVMaXN0XG4gKiBAZXh0ZW5kcyBOZW8ubGlzdC5CYXNlXG4gKi9cbmNsYXNzIFRyZWVMaXN0IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5saXN0LlRyZWVMaXN0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubGlzdC5UcmVlTGlzdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd0cmVlbGlzdCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICd0cmVlbGlzdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLXRyZWUtbGlzdCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLXRyZWUtbGlzdCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogdG9kbzogY2hhbmdlIHRoZSBkZWZhdWx0IHRvIGZhbHNlIG9uY2Ugc2VsZWN0aW9uLlRyZWVMaXN0IGlzIGluIHBsYWNlXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGRpc2FibGVTZWxlY3Rpb249dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgZGlzYWJsZVNlbGVjdGlvbjogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNob3dDb2xsYXBzZUV4cGFuZEFsbEljb25zPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHNob3dDb2xsYXBzZUV4cGFuZEFsbEljb25zOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIHRhZzogJ3VsJyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWxpc3QtY29udGFpbmVyJywgJ25lby1saXN0J10sXG4gICAgICAgICAgICAgICAgY24gOiBbXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICBpZiAobWUuc2hvd0NvbGxhcHNlRXhwYW5kQWxsSWNvbnMpIHtcbiAgICAgICAgICAgIHZkb20uY24udW5zaGlmdCh7XG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby10cmVlbGlzdC1tZW51LWl0ZW0nLCAnbmVvLXRyZWVsaXN0LWNvbGxhcHNlLWFsbC1pY29uJ10sXG4gICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby10cmVlbGlzdC1tZW51LWl0ZW0tY29udGVudCddXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLXRyZWVsaXN0LW1lbnUtaXRlbScsICduZW8tdHJlZWxpc3QtZXhwYW5kLWFsbC1pY29uJ10sXG4gICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby10cmVlbGlzdC1tZW51LWl0ZW0tY29udGVudCddXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIHN0b3JlIGNvbmZpZyBnZXRzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtPYmplY3R8TmVvLmRhdGEuU3RvcmV9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R8TmVvLmRhdGEuU3RvcmV9IG9sZFZhbHVlXG4gICAgICogQHJldHVybnMge05lby5kYXRhLlN0b3JlfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRTdG9yZSh2YWx1ZSkge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IE5lby5jcmVhdGUoQ29sbGVjdGlvbiwge1xuICAgICAgICAgICAgICAgIGtleVByb3BlcnR5OiAnaWQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENvbGxhcHNlcyBhbGwgZm9sZGVyc1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudF09ZmFsc2UgU2V0IHNpbGVudCB0byB0cnVlIHRvIHByZXZlbnQgYSB2bm9kZSB1cGRhdGVcbiAgICAgKi9cbiAgICBjb2xsYXBzZUFsbChzaWxlbnQ9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGhhc01hdGNoID0gZmFsc2UsXG4gICAgICAgICAgICBub2RlO1xuXG4gICAgICAgIG1lLnN0b3JlLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0uaXNMZWFmKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IG1lLmdldFZkb21DaGlsZChtZS5nZXRJdGVtSWQoaXRlbS5pZCksIHZkb20pO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuY2xzLmluY2x1ZGVzKCduZW8tZm9sZGVyLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUobm9kZS5jbHMsICduZW8tZm9sZGVyLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGhhc01hdGNoKSB7XG4gICAgICAgICAgICBpZiAoc2lsZW50KSB7XG4gICAgICAgICAgICAgICAgbWUuX3Zkb20gPSB2ZG9tXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW3BhcmVudElkXSBUaGUgcGFyZW50IG5vZGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Zkb21Sb290XSBUaGUgdmRvbSB0ZW1wbGF0ZSByb290IGZvciB0aGUgY3VycmVudCBzdWIgdHJlZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBsZXZlbCBUaGUgaGllcmFyY2h5IGxldmVsIG9mIHRoZSB0cmVlXG4gICAgICogQHJldHVybnMge09iamVjdH0gdmRvbVJvb3RcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgY3JlYXRlSXRlbXMocGFyZW50SWQsIHZkb21Sb290LCBsZXZlbCkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgaXRlbXMgPSBtZS5zdG9yZS5maW5kKCdwYXJlbnRJZCcsIHBhcmVudElkKSxcbiAgICAgICAgICAgIGNscywgdG1wUm9vdDtcblxuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKCF2ZG9tUm9vdC5jbikge1xuICAgICAgICAgICAgICAgIHZkb21Sb290LmNuID0gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYXJlbnRJZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZkb21Sb290LmNuLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICd1bCcsXG4gICAgICAgICAgICAgICAgICAgIGNsczogWyduZW8tbGlzdCddLFxuICAgICAgICAgICAgICAgICAgICBjbiA6IFtdLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxNXB4J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0bXBSb290ID0gdmRvbVJvb3QuY25bdmRvbVJvb3QuY24ubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRtcFJvb3QgPSB2ZG9tUm9vdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBjbHMgPSBbJ25lby1saXN0LWl0ZW0nXTtcblxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlzTGVhZikge1xuICAgICAgICAgICAgICAgICAgICBjbHMucHVzaChpdGVtLnNpbmdsZXRvbiA/ICduZW8tbGlzdC1pdGVtLWxlYWYtc2luZ2xldG9uJyA6ICduZW8tbGlzdC1pdGVtLWxlYWYnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbHMucHVzaCgnbmVvLWxpc3QtZm9sZGVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpdGVtLmNvbGxhcHNlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xzLnB1c2goJ25lby1mb2xkZXItb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdG1wUm9vdC5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnbGknLFxuICAgICAgICAgICAgICAgICAgICBjbHM6IGNscyxcbiAgICAgICAgICAgICAgICAgICAgaWQgOiBtZS5nZXRJdGVtSWQoaXRlbS5pZCksXG4gICAgICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZyAgICAgIDogJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xzICAgICAgOiBbJ25lby1saXN0LWl0ZW0tY29udGVudCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmcgOiAnMTBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogaXRlbS5pc0xlYWYgPyBudWxsIDogJ3N0aWNreScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3AgICAgIDogaXRlbS5pc0xlYWYgPyBudWxsIDogKGxldmVsICogMzgpICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleCAgOiBpdGVtLmlzTGVhZiA/IG51bGwgOiAoMjAgLyAobGV2ZWwgKyAxKSksXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRtcFJvb3QgPSBtZS5jcmVhdGVJdGVtcyhpdGVtLmlkLCB0bXBSb290LCBsZXZlbCArIDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmRvbVJvb3Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhwYW5kcyBhbGwgZm9sZGVyc1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudF09ZmFsc2UgU2V0IHNpbGVudCB0byB0cnVlIHRvIHByZXZlbnQgYSB2bm9kZSB1cGRhdGVcbiAgICAgKi9cbiAgICBleHBhbmRBbGwoc2lsZW50PWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBoYXNNYXRjaCA9IGZhbHNlLFxuICAgICAgICAgICAgbm9kZTtcblxuICAgICAgICBtZS5zdG9yZS5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKCFpdGVtLmlzTGVhZikge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBtZS5nZXRWZG9tQ2hpbGQobWUuZ2V0SXRlbUlkKGl0ZW0uaWQpLCB2ZG9tKTtcblxuICAgICAgICAgICAgICAgIGlmICghbm9kZS5jbHMuaW5jbHVkZXMoJ25lby1mb2xkZXItb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgICAgIE5lb0FycmF5LmFkZChub2RlLmNscywgJ25lby1mb2xkZXItb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaGFzTWF0Y2gpIHtcbiAgICAgICAgICAgIGlmIChzaWxlbnQpIHtcbiAgICAgICAgICAgICAgICBtZS5fdmRvbSA9IHZkb21cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlcyBUcmVlIG5vZGVzIHdoaWNoIGRvIG5vdCBtYXRjaCB0aGUgZmlsdGVyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IFRoZSBzdG9yZSBmaWVsZCB0byBmaWx0ZXIgYnlcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIGZpbHRlciB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfG51bGx9IHBhcmVudElkIFRoZSByb290IGlkIGZvciB0aGUgY3VycmVudCBmaWx0ZXIgY2FsbFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3BhcmVudE1hdGNoXT1mYWxzZSBJbiBjYXNlIGEgcGFyZW50IGZvbGRlciBtYXRjaGVzIHRoZSBmaWx0ZXIsIHNob3cgaXRzIGNoaWxkIGl0ZW1zXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IGZhbHNlIGlmIGF0IGxlYXN0IG9uZSBjaGlsZCBpdGVtIGlzIGZpbHRlcmVkXG4gICAgICovXG4gICAgZmlsdGVyKHByb3BlcnR5LCB2YWx1ZSwgcGFyZW50SWQsIHBhcmVudE1hdGNoPWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGlzRmlsdGVyZWQgPSB0cnVlLFxuICAgICAgICAgICAgdmFsdWVSZWdFeCA9IG5ldyBSZWdFeHAodmFsdWUsICdnaScpLFxuICAgICAgICAgICAgdmRvbSAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBjaGlsZFJldHVyblZhbHVlLCBkaXJlY3RNYXRjaCwgbm9kZTtcblxuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuc3RvcmUuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLnBhcmVudElkID09PSBwYXJlbnRJZCkge1xuICAgICAgICAgICAgICAgIGRpcmVjdE1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbm9kZSAgICAgICAgPSBtZS5nZXRWZG9tQ2hpbGQobWUuZ2V0SXRlbUlkKGl0ZW0uaWQpLCB2ZG9tKTtcblxuICAgICAgICAgICAgICAgIG5vZGUuY25bMF0uaW5uZXJIVE1MID0gaXRlbVtwcm9wZXJ0eV0ucmVwbGFjZSh2YWx1ZVJlZ0V4LCBtYXRjaCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdE1hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cIm5lby1oaWdobGlnaHQtc2VhcmNoXCI+JHttYXRjaH08L3NwYW4+YDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlzTGVhZikge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFJldHVyblZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFJldHVyblZhbHVlID0gbWUuZmlsdGVyKHByb3BlcnR5LCB2YWx1ZSwgaXRlbS5pZCwgZGlyZWN0TWF0Y2ggfHwgcGFyZW50TWF0Y2gpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3RNYXRjaCB8fCBwYXJlbnRNYXRjaCB8fCBjaGlsZFJldHVyblZhbHVlID09PSBmYWxzZSB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNGaWx0ZXJlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuZGlzcGxheSA9ICdsaXN0LWl0ZW0nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwYXJlbnRJZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbWUuZXhwYW5kQWxsKHRydWUpO1xuICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXNGaWx0ZXJlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0TGlzdEl0ZW1zUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmRvbS5jblt0aGlzLnNob3dDb2xsYXBzZUV4cGFuZEFsbEljb25zID8gMiA6IDBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEudGFyZ2V0LmNscy5pbmNsdWRlcygnbmVvLXRyZWVsaXN0LW1lbnUtaXRlbScpKSB7XG4gICAgICAgICAgICB0aGlzLm9uTWVudUl0ZW1DbGljayhkYXRhLnRhcmdldC5jbHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIub25DbGljayhkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkl0ZW1DbGljayhkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tICA9IG1lLnZkb20sXG4gICAgICAgICAgICBpdGVtcyA9IG1lLnN0b3JlLml0ZW1zLFxuICAgICAgICAgICAgaSAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgPSBpdGVtcy5sZW5ndGgsXG4gICAgICAgICAgICBwYXRoICA9IGRhdGEucGF0aC5tYXAoZSA9PiBlLmlkKSxcbiAgICAgICAgICAgIGl0ZW0sIHJlY29yZCwgdG1wSXRlbSwgdm5vZGVJZDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB0bXBJdGVtID0gaXRlbXNbaV07XG4gICAgICAgICAgICB2bm9kZUlkID0gbWUuZ2V0SXRlbUlkKHRtcEl0ZW0uaWQpO1xuXG4gICAgICAgICAgICBpZiAocGF0aC5pbmNsdWRlcyh2bm9kZUlkKSkge1xuICAgICAgICAgICAgICAgIHJlY29yZCA9IHRtcEl0ZW07XG4gICAgICAgICAgICAgICAgaXRlbSAgID0gbWUuZ2V0VmRvbUNoaWxkKHZub2RlSWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtLmNscyAmJiBpdGVtLmNscy5pbmNsdWRlcygnbmVvLWxpc3QtZm9sZGVyJykpIHtcbiAgICAgICAgICAgICAgICBOZW9BcnJheS50b2dnbGUoaXRlbS5jbHMsICduZW8tZm9sZGVyLW9wZW4nKTtcbiAgICAgICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWUub25MZWFmSXRlbUNsaWNrKHJlY29yZCk7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBUaGUgbGVhZkl0ZW1DbGljayBldmVudCBmaXJlcyB3aGVuIGEgY2xpY2sgb2NjdXJzIG9uIGEgbGlzdCBpdGVtIHdoaWNoIGRvZXMgbm90IGhhdmUgY2hpbGQgaXRlbXMuXG4gICAgICAgICAgICAgICAgICogUGFzc2VzIHRoZSBpdGVtIHJlY29yZCB0byB0aGUgZXZlbnQgaGFuZGxlci5cbiAgICAgICAgICAgICAgICAgKiBAZXZlbnQgbGVhZkl0ZW1DbGlja1xuICAgICAgICAgICAgICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHJlY29yZFxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIG1lLmZpcmUoJ2xlYWZJdGVtQ2xpY2snLCByZWNvcmQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdXBlci5vbkl0ZW1DbGljayhkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsYWNlaG9sZGVyIG1ldGhvZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICAgKi9cbiAgICBvbkxlYWZJdGVtQ2xpY2socmVjb3JkKSB7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRyaWdnZXJlZCBieSBjbGlja3Mgb24gdGhlIGNvbGxhcHNlIG9yIGV4cGFuZCBhbGwgaWNvbnNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBjbHNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25NZW51SXRlbUNsaWNrKGNscykge1xuICAgICAgICBpZiAoY2xzLmluY2x1ZGVzKCduZW8tdHJlZWxpc3QtY29sbGFwc2UtYWxsLWljb24nKSkge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUFsbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5leHBhbmRBbGwoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVHJlZUxpc3QpO1xuXG5leHBvcnQge1RyZWVMaXN0IGFzIGRlZmF1bHR9OyJdLCJzb3VyY2VSb290IjoiIn0=