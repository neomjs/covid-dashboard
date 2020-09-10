self["webpackChunk"](["chunks/examples-todoList-version2-app"],{

/***/ "./node_modules/neo.mjs/examples/todoList/version2/MainContainer.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/todoList/version2/MainContainer.mjs ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/button/Base.mjs */ "./node_modules/neo.mjs/src/button/Base.mjs");
/* harmony import */ var _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/form/field/Text.mjs */ "./node_modules/neo.mjs/src/form/field/Text.mjs");
/* harmony import */ var _TodoList_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoList.mjs */ "./node_modules/neo.mjs/examples/todoList/version2/TodoList.mjs");
/* harmony import */ var _TodoListStore_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TodoListStore.mjs */ "./node_modules/neo.mjs/examples/todoList/version2/TodoListStore.mjs");
/* harmony import */ var _src_container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/container/Toolbar.mjs */ "./node_modules/neo.mjs/src/container/Toolbar.mjs");







/**
 * @class TodoListApp2.MainContainer
 * @extends Neo.container.Base
 */
class MainContainer extends _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        className: 'TodoListApp2.MainContainer',
        ntype    : 'todolistapp2-maincontainer',

        autoMount: true,
        height   : 300,
        margin   : 20,
        layout   : {ntype: 'vbox', align: 'stretch'},
        style    : {margin: '20px'},
        width    : 300,

        /**
         * @member {Number} idCounter=0
         */
        idCounter: 0,

        /**
         * @member {Neo.data.Store|null} store=null
         */
        store: null
    }}

    constructor(config) {
        super(config);

        let me = this;

        me.store = Neo.create({
            module: _TodoListStore_mjs__WEBPACK_IMPORTED_MODULE_4__["default"]
        });

        me.items = [{
            module: _TodoList_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            flex  : 1,
            store : me.store
        }, {
            module: _src_container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
            flex  : 'none',
            dock  : 'bottom',
            items : [{
                module       : _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
                labelPosition: 'inline',
                labelText    : 'Item Text',
                reference    : 'addItemField'
            }, '->', {
                module      : _src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
                handler     : me.onAddButtonClick,
                handlerScope: me,
                scope       : me,
                style       : {height: '27px'},
                text        : 'Add Item'
            }]
        }];
    }

    onAddButtonClick() {
        let me    = this,
            field = me.down({reference: 'addItemField'}),
            data;

        if (field.value) {
            me.idCounter--;

            data = me.store.data;

            data.push({
                id  : me.idCounter,
                done: false,
                text: field.value
            });

            me.store.data = data;

            console.log('onAddButtonClick', data);
            console.log(me.store.items);
        }
    }
}

Neo.applyClassConfig(MainContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/todoList/version2/TodoList.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/todoList/version2/TodoList.mjs ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoList; });
/* harmony import */ var _src_list_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/list/Base.mjs */ "./node_modules/neo.mjs/src/list/Base.mjs");


/**
 * @class TodoListApp2.TodoList
 * @extends Neo.list.Base
 */
class TodoList extends _src_list_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        className: 'TodoListApp2.TodoList',
        ntype    : 'todolistapp2-todolist',

        displayField: 'text'
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();
    }

    /*createItems(data) {
        let me   = this,
            vdom = me.vdom,
            cls;

        data.forEach(item => {
            cls = ['todo-item'];

            if (item.done) {
                cls.push('fa', 'fa-check');
            } else {
                cls.push('far', 'fa-square');
            }

            vdom.cn.push({
                tag: 'li',
                cn : [{
                    tag  : 'span',
                    cls  : cls,
                    style: {cursor: 'pointer', width: '20px'}
                }, {
                    vtype: 'text',
                    html : item.text
                }]
            });
        });

        me.vdom = vdom;
    }*/
}

Neo.applyClassConfig(TodoList);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/todoList/version2/TodoListModel.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/todoList/version2/TodoListModel.mjs ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoListModel; });
/* harmony import */ var _src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class TestApp.TodoListModel
 * @extends Neo.data.Model
 */
class TodoListModel extends _src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        className: 'TestApp.MainModel',
        ntype    : 'todolist-model',

        keyProperty: 'id',

        fields: [{
            name: 'id',
            type: 'Number'
        }, {
            name: 'done',
            type: 'Boolean'
        }, {
            name: 'text',
            type: 'String'
        }]
    }}
}

Neo.applyClassConfig(TodoListModel);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/todoList/version2/TodoListStore.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/todoList/version2/TodoListStore.mjs ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoListStore; });
/* harmony import */ var _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");
/* harmony import */ var _TodoListModel_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoListModel.mjs */ "./node_modules/neo.mjs/examples/todoList/version2/TodoListModel.mjs");



/**
 * @class TestApp.TodoListStore
 * @extends Neo.data.Store
 */
class TodoListStore extends _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        className: 'TestApp.TodoListStore',
        ntype    : 'todolist-store',

        keyProperty: 'id',
        model      : _TodoListModel_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],

        data: [
            {id: 1, done: true,  text: 'Todo Item 1'},
            {id: 2, done: false, text: 'Todo Item 2'},
            {id: 3, done: false, text: 'Todo Item 3'}
        ],

        sorters: [{
            property : 'done',
            direction: 'DESC'
        }, {
            property : 'text',
            direction: 'ASC'
        }]
    }}
}

Neo.applyClassConfig(TodoListStore);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/todoList/version2/app.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/todoList/version2/app.mjs ***!
  \*****************************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainContainer.mjs */ "./node_modules/neo.mjs/examples/todoList/version2/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'examples/todoList/version2/',
    mainView: _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'TodoListApp2'
});



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy90b2RvTGlzdC92ZXJzaW9uMi9NYWluQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy90b2RvTGlzdC92ZXJzaW9uMi9Ub2RvTGlzdC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvdG9kb0xpc3QvdmVyc2lvbjIvVG9kb0xpc3RNb2RlbC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvdG9kb0xpc3QvdmVyc2lvbjIvVG9kb0xpc3RTdG9yZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvdG9kb0xpc3QvdmVyc2lvbjIvYXBwLm1qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5RDtBQUNHO0FBQ0M7QUFDbEI7QUFDSztBQUNlOztBQUUvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwrREFBUztBQUNyQyx3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0NBQWdDO0FBQ3BELG9CQUFvQixlQUFlO0FBQ25DOztBQUVBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxvQkFBb0IsMERBQWE7QUFDakMsU0FBUzs7QUFFVDtBQUNBLG9CQUFvQixxREFBUTtBQUM1QjtBQUNBO0FBQ0EsU0FBUztBQUNULG9CQUFvQixrRUFBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZ0VBQVM7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLDhCQUE4Qiw0REFBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZUFBZTtBQUM5QztBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QiwwQkFBMEI7QUFDdkQ7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUMzRkE7QUFBQTtBQUFBO0FBQThDOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwREFBSTtBQUMzQix3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0EsS0FBSztBQUNMOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUFBO0FBQUE7QUFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDJEQUFLO0FBQ2pDLHdCQUF3QjtBQUN4QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFBd0Q7QUFDUjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMkRBQUs7QUFDakMsd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsMERBQWE7O0FBRWxDO0FBQ0EsYUFBYSx3Q0FBd0M7QUFDckQsYUFBYSx3Q0FBd0M7QUFDckQsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQUE7QUFBQTtBQUFnRDs7QUFFaEQ7QUFDQTtBQUNBLGNBQWMsMERBQWE7QUFDM0I7QUFDQSxDQUFDIiwiZmlsZSI6ImNodW5rcy9leGFtcGxlcy10b2RvTGlzdC12ZXJzaW9uMi1hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvYnV0dG9uL0Jhc2UubWpzJztcbmltcG9ydCBDb250YWluZXIgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9jb250YWluZXIvQmFzZS5tanMnO1xuaW1wb3J0IFRleHRGaWVsZCAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2Zvcm0vZmllbGQvVGV4dC5tanMnO1xuaW1wb3J0IFRvZG9MaXN0ICAgICAgZnJvbSAnLi9Ub2RvTGlzdC5tanMnO1xuaW1wb3J0IFRvZG9MaXN0U3RvcmUgZnJvbSAnLi9Ub2RvTGlzdFN0b3JlLm1qcyc7XG5pbXBvcnQgVG9vbGJhciAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvY29udGFpbmVyL1Rvb2xiYXIubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgVG9kb0xpc3RBcHAyLk1haW5Db250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBNYWluQ29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogJ1RvZG9MaXN0QXBwMi5NYWluQ29udGFpbmVyJyxcbiAgICAgICAgbnR5cGUgICAgOiAndG9kb2xpc3RhcHAyLW1haW5jb250YWluZXInLFxuXG4gICAgICAgIGF1dG9Nb3VudDogdHJ1ZSxcbiAgICAgICAgaGVpZ2h0ICAgOiAzMDAsXG4gICAgICAgIG1hcmdpbiAgIDogMjAsXG4gICAgICAgIGxheW91dCAgIDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICBzdHlsZSAgICA6IHttYXJnaW46ICcyMHB4J30sXG4gICAgICAgIHdpZHRoICAgIDogMzAwLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGlkQ291bnRlcj0wXG4gICAgICAgICAqL1xuICAgICAgICBpZENvdW50ZXI6IDAsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5kYXRhLlN0b3JlfG51bGx9IHN0b3JlPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHN0b3JlOiBudWxsXG4gICAgfX1cblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuc3RvcmUgPSBOZW8uY3JlYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZTogVG9kb0xpc3RTdG9yZVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5pdGVtcyA9IFt7XG4gICAgICAgICAgICBtb2R1bGU6IFRvZG9MaXN0LFxuICAgICAgICAgICAgZmxleCAgOiAxLFxuICAgICAgICAgICAgc3RvcmUgOiBtZS5zdG9yZVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGU6IFRvb2xiYXIsXG4gICAgICAgICAgICBmbGV4ICA6ICdub25lJyxcbiAgICAgICAgICAgIGRvY2sgIDogJ2JvdHRvbScsXG4gICAgICAgICAgICBpdGVtcyA6IFt7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgICAgIDogVGV4dEZpZWxkLFxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb246ICdpbmxpbmUnLFxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dCAgICA6ICdJdGVtIFRleHQnLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZSAgICA6ICdhZGRJdGVtRmllbGQnXG4gICAgICAgICAgICB9LCAnLT4nLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgICAgOiBCdXR0b24sXG4gICAgICAgICAgICAgICAgaGFuZGxlciAgICAgOiBtZS5vbkFkZEJ1dHRvbkNsaWNrLFxuICAgICAgICAgICAgICAgIGhhbmRsZXJTY29wZTogbWUsXG4gICAgICAgICAgICAgICAgc2NvcGUgICAgICAgOiBtZSxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICAgICA6IHtoZWlnaHQ6ICcyN3B4J30sXG4gICAgICAgICAgICAgICAgdGV4dCAgICAgICAgOiAnQWRkIEl0ZW0nXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XTtcbiAgICB9XG5cbiAgICBvbkFkZEJ1dHRvbkNsaWNrKCkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgZmllbGQgPSBtZS5kb3duKHtyZWZlcmVuY2U6ICdhZGRJdGVtRmllbGQnfSksXG4gICAgICAgICAgICBkYXRhO1xuXG4gICAgICAgIGlmIChmaWVsZC52YWx1ZSkge1xuICAgICAgICAgICAgbWUuaWRDb3VudGVyLS07XG5cbiAgICAgICAgICAgIGRhdGEgPSBtZS5zdG9yZS5kYXRhO1xuXG4gICAgICAgICAgICBkYXRhLnB1c2goe1xuICAgICAgICAgICAgICAgIGlkICA6IG1lLmlkQ291bnRlcixcbiAgICAgICAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBmaWVsZC52YWx1ZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1lLnN0b3JlLmRhdGEgPSBkYXRhO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb25BZGRCdXR0b25DbGljaycsIGRhdGEpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobWUuc3RvcmUuaXRlbXMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyKTtcblxuZXhwb3J0IHtNYWluQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBMaXN0IGZyb20gJy4uLy4uLy4uL3NyYy9saXN0L0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgVG9kb0xpc3RBcHAyLlRvZG9MaXN0XG4gKiBAZXh0ZW5kcyBOZW8ubGlzdC5CYXNlXG4gKi9cbmNsYXNzIFRvZG9MaXN0IGV4dGVuZHMgTGlzdCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdUb2RvTGlzdEFwcDIuVG9kb0xpc3QnLFxuICAgICAgICBudHlwZSAgICA6ICd0b2RvbGlzdGFwcDItdG9kb2xpc3QnLFxuXG4gICAgICAgIGRpc3BsYXlGaWVsZDogJ3RleHQnXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuICAgIH1cblxuICAgIC8qY3JlYXRlSXRlbXMoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbSxcbiAgICAgICAgICAgIGNscztcblxuICAgICAgICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBjbHMgPSBbJ3RvZG8taXRlbSddO1xuXG4gICAgICAgICAgICBpZiAoaXRlbS5kb25lKSB7XG4gICAgICAgICAgICAgICAgY2xzLnB1c2goJ2ZhJywgJ2ZhLWNoZWNrJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNscy5wdXNoKCdmYXInLCAnZmEtc3F1YXJlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZkb20uY24ucHVzaCh7XG4gICAgICAgICAgICAgICAgdGFnOiAnbGknLFxuICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgdGFnICA6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzICA6IGNscyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtjdXJzb3I6ICdwb2ludGVyJywgd2lkdGg6ICcyMHB4J31cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHZ0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgOiBpdGVtLnRleHRcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH0qL1xufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhUb2RvTGlzdCk7XG5cbmV4cG9ydCB7VG9kb0xpc3QgYXMgZGVmYXVsdH07IiwiaW1wb3J0IE1vZGVsICBmcm9tICcuLi8uLi8uLi9zcmMvZGF0YS9Nb2RlbC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBUZXN0QXBwLlRvZG9MaXN0TW9kZWxcbiAqIEBleHRlbmRzIE5lby5kYXRhLk1vZGVsXG4gKi9cbmNsYXNzIFRvZG9MaXN0TW9kZWwgZXh0ZW5kcyBNb2RlbCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdUZXN0QXBwLk1haW5Nb2RlbCcsXG4gICAgICAgIG50eXBlICAgIDogJ3RvZG9saXN0LW1vZGVsJyxcblxuICAgICAgICBrZXlQcm9wZXJ0eTogJ2lkJyxcblxuICAgICAgICBmaWVsZHM6IFt7XG4gICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgdHlwZTogJ051bWJlcidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2RvbmUnLFxuICAgICAgICAgICAgdHlwZTogJ0Jvb2xlYW4nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICd0ZXh0JyxcbiAgICAgICAgICAgIHR5cGU6ICdTdHJpbmcnXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVG9kb0xpc3RNb2RlbCk7XG5cbmV4cG9ydCB7VG9kb0xpc3RNb2RlbCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgU3RvcmUgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvZGF0YS9TdG9yZS5tanMnO1xuaW1wb3J0IFRvZG9MaXN0TW9kZWwgZnJvbSAnLi9Ub2RvTGlzdE1vZGVsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFRlc3RBcHAuVG9kb0xpc3RTdG9yZVxuICogQGV4dGVuZHMgTmVvLmRhdGEuU3RvcmVcbiAqL1xuY2xhc3MgVG9kb0xpc3RTdG9yZSBleHRlbmRzIFN0b3JlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogJ1Rlc3RBcHAuVG9kb0xpc3RTdG9yZScsXG4gICAgICAgIG50eXBlICAgIDogJ3RvZG9saXN0LXN0b3JlJyxcblxuICAgICAgICBrZXlQcm9wZXJ0eTogJ2lkJyxcbiAgICAgICAgbW9kZWwgICAgICA6IFRvZG9MaXN0TW9kZWwsXG5cbiAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAge2lkOiAxLCBkb25lOiB0cnVlLCAgdGV4dDogJ1RvZG8gSXRlbSAxJ30sXG4gICAgICAgICAgICB7aWQ6IDIsIGRvbmU6IGZhbHNlLCB0ZXh0OiAnVG9kbyBJdGVtIDInfSxcbiAgICAgICAgICAgIHtpZDogMywgZG9uZTogZmFsc2UsIHRleHQ6ICdUb2RvIEl0ZW0gMyd9XG4gICAgICAgIF0sXG5cbiAgICAgICAgc29ydGVyczogW3tcbiAgICAgICAgICAgIHByb3BlcnR5IDogJ2RvbmUnLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnREVTQydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcHJvcGVydHkgOiAndGV4dCcsXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdBU0MnXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVG9kb0xpc3RTdG9yZSk7XG5cbmV4cG9ydCB7VG9kb0xpc3RTdG9yZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuL01haW5Db250YWluZXIubWpzJztcblxuY29uc3Qgb25TdGFydCA9ICgpID0+IE5lby5hcHAoe1xuICAgIGFwcFBhdGggOiAnZXhhbXBsZXMvdG9kb0xpc3QvdmVyc2lvbjIvJyxcbiAgICBtYWluVmlldzogTWFpbkNvbnRhaW5lcixcbiAgICBuYW1lICAgIDogJ1RvZG9MaXN0QXBwMidcbn0pO1xuXG5leHBvcnQge29uU3RhcnQgYXMgb25TdGFydH07Il0sInNvdXJjZVJvb3QiOiIifQ==