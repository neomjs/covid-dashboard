self["webpackChunk"](["chunks/examples-todoList-version1-app"],{

/***/ "./node_modules/neo.mjs/examples/todoList/version1/MainComponent.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/todoList/version1/MainComponent.mjs ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainComponent; });
/* harmony import */ var _src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");




/**
 * @class TodoListApp1.MainComponent
 * @extends Neo.component.Base
 */
class MainComponent extends _src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        className: 'TodoListApp1.MainComponent',
        ntype    : 'todolistapp1-maincomponent',

        autoMount: true,
        height   : 200,
        margin   : 10,
        maxWidth : 300,
        style    : {border: '1px solid #000', margin: '20px', overflow: 'scroll'},
        width    : 300,

        /**
         * @member {Object[]} data
         */
        data: [
            {id: 1, done: true,  text: 'Todo Item 1'},
            {id: 2, done: false, text: 'Todo Item 2'},
            {id: 3, done: false, text: 'Todo Item 3'}
        ],

        /**
         * @member {String|null} inputValue=null
         */
        inputValue: null,

        vdom: {
            cn: [{
                tag: 'ol',
                cn : []
            }, {
                cn: [{
                    tag     : 'input',
                    cls     : ['todo-input'],
                    required: true,
                    style   : {marginLeft: '20px'}
                }, {
                    tag  : 'button',
                    cls  : ['todo-add-button'],
                    html : 'Add Item',
                    style: {marginLeft: '10px'}
                }]
            }]
        }
    }}

    constructor(config) {
        super(config);

        let me           = this,
            domListeners = me.domListeners || [];

        domListeners.push(
            {click: me.onAddButtonClick,   delegate: 'todo-add-button'},
            {click: me.onCheckIconClick,   delegate: 'todo-item'},
            {input: me.onInputFieldChange, delegate: 'todo-input'}
        );

        me.domListeners = domListeners;

        me.createItems(me.data || []);
    }

    createItems(data) {
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

            vdom.cn[0].cn.push({
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
    }

    onAddButtonClick() {
        let me = this;

        if (me.inputValue) {
            me.createItems([{
                id  : null,
                done: false,
                text: me.inputValue
            }]);
        }
    }

    onCheckIconClick(data) {
        let me     = this,
            cls    = ['far', 'fa-square'],
            oldCls = ['fa',  'fa-check'],
            vdom   = me.vdom,
            node   = _src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].findVdomChild(me.vdom, data.path[0].id).vdom;

        if (data.path[0].cls.includes('fa-square')) {
            cls    = ['fa',  'fa-check'];
            oldCls = ['far', 'fa-square'];
        }

        _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(node.cls, oldCls);
        _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(node.cls, cls);

        me.vdom = vdom;
    }

    onInputFieldChange(data) {
        this.inputValue = data.value;
    }
}

Neo.applyClassConfig(MainComponent);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/todoList/version1/app.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/todoList/version1/app.mjs ***!
  \*****************************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _MainComponent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainComponent.mjs */ "./node_modules/neo.mjs/examples/todoList/version1/MainComponent.mjs");


const onStart = () => Neo.app({
    appPath : 'examples/todoList/version1/',
    mainView: _MainComponent_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'TodoListApp1'
});



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy90b2RvTGlzdC92ZXJzaW9uMS9NYWluQ29tcG9uZW50Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy90b2RvTGlzdC92ZXJzaW9uMS9hcHAubWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdEO0FBQ0o7QUFDRDs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsK0RBQVM7QUFDckMsd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNkRBQTZEO0FBQ2pGOztBQUVBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBLGFBQWEsd0NBQXdDO0FBQ3JELGFBQWEsd0NBQXdDO0FBQ3JELGFBQWE7QUFDYjs7QUFFQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSwwREFBMEQ7QUFDdkUsYUFBYSxvREFBb0Q7QUFDakUsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMERBQVE7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsMkRBQVE7QUFDaEIsUUFBUSwyREFBUTs7QUFFaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN4SUE7QUFBQTtBQUFBO0FBQWdEOztBQUVoRDtBQUNBO0FBQ0EsY0FBYywwREFBYTtBQUMzQjtBQUNBLENBQUMiLCJmaWxlIjoiY2h1bmtzL2V4YW1wbGVzLXRvZG9MaXN0LXZlcnNpb24xLWFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgIGZyb20gJy4uLy4uLy4uL3NyYy91dGlsL0FycmF5Lm1qcyc7XG5pbXBvcnQgVmRvbVV0aWwgIGZyb20gJy4uLy4uLy4uL3NyYy91dGlsL1ZEb20ubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgVG9kb0xpc3RBcHAxLk1haW5Db21wb25lbnRcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBNYWluQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogJ1RvZG9MaXN0QXBwMS5NYWluQ29tcG9uZW50JyxcbiAgICAgICAgbnR5cGUgICAgOiAndG9kb2xpc3RhcHAxLW1haW5jb21wb25lbnQnLFxuXG4gICAgICAgIGF1dG9Nb3VudDogdHJ1ZSxcbiAgICAgICAgaGVpZ2h0ICAgOiAyMDAsXG4gICAgICAgIG1hcmdpbiAgIDogMTAsXG4gICAgICAgIG1heFdpZHRoIDogMzAwLFxuICAgICAgICBzdHlsZSAgICA6IHtib3JkZXI6ICcxcHggc29saWQgIzAwMCcsIG1hcmdpbjogJzIwcHgnLCBvdmVyZmxvdzogJ3Njcm9sbCd9LFxuICAgICAgICB3aWR0aCAgICA6IDMwMCxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W119IGRhdGFcbiAgICAgICAgICovXG4gICAgICAgIGRhdGE6IFtcbiAgICAgICAgICAgIHtpZDogMSwgZG9uZTogdHJ1ZSwgIHRleHQ6ICdUb2RvIEl0ZW0gMSd9LFxuICAgICAgICAgICAge2lkOiAyLCBkb25lOiBmYWxzZSwgdGV4dDogJ1RvZG8gSXRlbSAyJ30sXG4gICAgICAgICAgICB7aWQ6IDMsIGRvbmU6IGZhbHNlLCB0ZXh0OiAnVG9kbyBJdGVtIDMnfVxuICAgICAgICBdLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gaW5wdXRWYWx1ZT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBpbnB1dFZhbHVlOiBudWxsLFxuXG4gICAgICAgIHZkb206IHtcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIHRhZzogJ29sJyxcbiAgICAgICAgICAgICAgICBjbiA6IFtdXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgICAgIHRhZyAgICAgOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICBjbHMgICAgIDogWyd0b2RvLWlucHV0J10sXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZSAgIDoge21hcmdpbkxlZnQ6ICcyMHB4J31cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHRhZyAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzICA6IFsndG9kby1hZGQtYnV0dG9uJ10sXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgOiAnQWRkIEl0ZW0nLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbkxlZnQ6ICcxMHB4J31cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IG1lLmRvbUxpc3RlbmVycyB8fCBbXTtcblxuICAgICAgICBkb21MaXN0ZW5lcnMucHVzaChcbiAgICAgICAgICAgIHtjbGljazogbWUub25BZGRCdXR0b25DbGljaywgICBkZWxlZ2F0ZTogJ3RvZG8tYWRkLWJ1dHRvbid9LFxuICAgICAgICAgICAge2NsaWNrOiBtZS5vbkNoZWNrSWNvbkNsaWNrLCAgIGRlbGVnYXRlOiAndG9kby1pdGVtJ30sXG4gICAgICAgICAgICB7aW5wdXQ6IG1lLm9uSW5wdXRGaWVsZENoYW5nZSwgZGVsZWdhdGU6ICd0b2RvLWlucHV0J31cbiAgICAgICAgKTtcblxuICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG5cbiAgICAgICAgbWUuY3JlYXRlSXRlbXMobWUuZGF0YSB8fCBbXSk7XG4gICAgfVxuXG4gICAgY3JlYXRlSXRlbXMoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbSxcbiAgICAgICAgICAgIGNscztcblxuICAgICAgICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBjbHMgPSBbJ3RvZG8taXRlbSddO1xuXG4gICAgICAgICAgICBpZiAoaXRlbS5kb25lKSB7XG4gICAgICAgICAgICAgICAgY2xzLnB1c2goJ2ZhJywgJ2ZhLWNoZWNrJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNscy5wdXNoKCdmYXInLCAnZmEtc3F1YXJlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZkb20uY25bMF0uY24ucHVzaCh7XG4gICAgICAgICAgICAgICAgdGFnOiAnbGknLFxuICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgdGFnICA6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzICA6IGNscyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtjdXJzb3I6ICdwb2ludGVyJywgd2lkdGg6ICcyMHB4J31cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHZ0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgOiBpdGVtLnRleHRcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIG9uQWRkQnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLmlucHV0VmFsdWUpIHtcbiAgICAgICAgICAgIG1lLmNyZWF0ZUl0ZW1zKFt7XG4gICAgICAgICAgICAgICAgaWQgIDogbnVsbCxcbiAgICAgICAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBtZS5pbnB1dFZhbHVlXG4gICAgICAgICAgICB9XSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoZWNrSWNvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjbHMgICAgPSBbJ2ZhcicsICdmYS1zcXVhcmUnXSxcbiAgICAgICAgICAgIG9sZENscyA9IFsnZmEnLCAgJ2ZhLWNoZWNrJ10sXG4gICAgICAgICAgICB2ZG9tICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgbm9kZSAgID0gVmRvbVV0aWwuZmluZFZkb21DaGlsZChtZS52ZG9tLCBkYXRhLnBhdGhbMF0uaWQpLnZkb207XG5cbiAgICAgICAgaWYgKGRhdGEucGF0aFswXS5jbHMuaW5jbHVkZXMoJ2ZhLXNxdWFyZScpKSB7XG4gICAgICAgICAgICBjbHMgICAgPSBbJ2ZhJywgICdmYS1jaGVjayddO1xuICAgICAgICAgICAgb2xkQ2xzID0gWydmYXInLCAnZmEtc3F1YXJlJ107XG4gICAgICAgIH1cblxuICAgICAgICBOZW9BcnJheS5yZW1vdmUobm9kZS5jbHMsIG9sZENscyk7XG4gICAgICAgIE5lb0FycmF5LmFkZChub2RlLmNscywgY2xzKTtcblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICBvbklucHV0RmllbGRDaGFuZ2UoZGF0YSkge1xuICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBkYXRhLnZhbHVlO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWFpbkNvbXBvbmVudCk7XG5cbmV4cG9ydCB7TWFpbkNvbXBvbmVudCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgTWFpbkNvbXBvbmVudCBmcm9tICcuL01haW5Db21wb25lbnQubWpzJztcblxuY29uc3Qgb25TdGFydCA9ICgpID0+IE5lby5hcHAoe1xuICAgIGFwcFBhdGggOiAnZXhhbXBsZXMvdG9kb0xpc3QvdmVyc2lvbjEvJyxcbiAgICBtYWluVmlldzogTWFpbkNvbXBvbmVudCxcbiAgICBuYW1lICAgIDogJ1RvZG9MaXN0QXBwMSdcbn0pO1xuXG5leHBvcnQge29uU3RhcnQgYXMgb25TdGFydH07Il0sInNvdXJjZVJvb3QiOiIifQ==