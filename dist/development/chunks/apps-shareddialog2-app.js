self["webpackChunk"](["chunks/apps-shareddialog2-app"],{

/***/ "./node_modules/neo.mjs/apps/shareddialog2/app.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/neo.mjs/apps/shareddialog2/app.mjs ***!
  \*********************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/MainContainer.mjs */ "./node_modules/neo.mjs/apps/shareddialog2/view/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'apps/shareddialog2/',
    mainView: _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'SharedDialog2'
});



/***/ }),

/***/ "./node_modules/neo.mjs/apps/shareddialog2/view/DemoDialog.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/shareddialog2/view/DemoDialog.mjs ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DemoDialog; });
/* harmony import */ var _src_dialog_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/dialog/Base.mjs */ "./node_modules/neo.mjs/src/dialog/Base.mjs");
/* harmony import */ var _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/form/field/Text.mjs */ "./node_modules/neo.mjs/src/form/field/Text.mjs");



/**
 * @class SharedDialog2.DemoDialog
 * @extends Neo.dialog.Base
 */
class DemoDialog extends _src_dialog_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        className: 'SharedDialog2.DemoWindow',

        containerConfig: {
            style: {
                padding: '20px'
            }
        },

        items: [{
            module   : _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            flex     : 'none',
            labelText: 'Field 1'
        }, {
            module   : _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            flex     : 'none',
            labelText: 'Field 2'
        }],

        wrapperStyle: {
            height: '40%',
            width : '40%'
        }
    }}
}

Neo.applyClassConfig(DemoDialog);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/shareddialog2/view/MainContainer.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/shareddialog2/view/MainContainer.mjs ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/button/Base.mjs */ "./node_modules/neo.mjs/src/button/Base.mjs");
/* harmony import */ var _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainContainerController.mjs */ "./node_modules/neo.mjs/apps/shareddialog2/view/MainContainerController.mjs");
/* harmony import */ var _src_container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/container/Toolbar.mjs */ "./node_modules/neo.mjs/src/container/Toolbar.mjs");
/* harmony import */ var _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");





/**
 * @class SharedDialog2.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_3__["default"] {
    static getConfig() {return {
        className: 'SharedDialog2.view.MainContainer',
        ntype    : 'main-container2',

        autoMount : true,
        controller: _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
        layout    : {ntype: 'vbox', align: 'stretch'},
        style     : {padding: '20px'},

        /**
         * Custom config which gets passed to the dialog
         * Either a dom node id, 'document.body' or null
         * @member {String|null} boundaryContainerId='document.body'
         */
        boundaryContainerId: 'document.body',
        /**
         * Custom config
         * @member {Neo.dialog.Base|null} dialog=null
         */
        dialog: null,
        /**
         * @member {Array} items
         */
        items: [{
            module: _src_container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            flex  : 'none',
            items :[{
                module : _src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
                handler: 'createDialog',
                iconCls: 'fa fa-window-maximize',
                text   : 'Create Dialog',
            }]
        }, {
            ntype: 'component',
            flex : 1,
            html : '#2',

            style: {
                alignItems    : 'center',
                color         : '#bbb',
                display       : 'flex',
                fontSize      : '200px',
                justifyContent: 'center',
                userSelect    : 'none'
            }
        }]
    }}
}

Neo.applyClassConfig(MainContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/apps/shareddialog2/view/MainContainerController.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/shareddialog2/view/MainContainerController.mjs ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainerController; });
/* harmony import */ var _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");
/* harmony import */ var _DemoDialog_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DemoDialog.mjs */ "./node_modules/neo.mjs/apps/shareddialog2/view/DemoDialog.mjs");



/**
 * @class SharedDialog2.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='SharedDialog2.view.MainContainerController'
         * @protected
         */
        className: 'SharedDialog2.view.MainContainerController',
        /**
         * @member {String} ntype='maincontainer2-controller'
         * @protected
         */
        ntype: 'maincontainer2-controller'
    }}

    /**
     *
     * @param {Object} data
     */
    createDialog(data) {
        let me   = this,
            view = me.view;

        data.component.disabled = true;

        me.dialog = Neo.create(_DemoDialog_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], {
            animateTargetId    : data.component.id,
            appName            : view.appName,
            boundaryContainerId: view.boundaryContainerId,
            listeners          : {close: me.onWindowClose, scope: me}
        });
    }

    /**
     *
     */
    onWindowClose() {
        let button = this.view.down({
            text: 'Create Dialog'
        });

        button.disabled = false;
    }
}

Neo.applyClassConfig(MainContainerController);



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3NoYXJlZGRpYWxvZzIvYXBwLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3NoYXJlZGRpYWxvZzIvdmlldy9EZW1vRGlhbG9nLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3NoYXJlZGRpYWxvZzIvdmlldy9NYWluQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3NoYXJlZGRpYWxvZzIvdmlldy9NYWluQ29udGFpbmVyQ29udHJvbGxlci5tanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFxRDs7QUFFckQ7QUFDQTtBQUNBLGNBQWMsK0RBQWE7QUFDM0I7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ05EO0FBQUE7QUFBQTtBQUFBO0FBQXFEO0FBQ0k7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDREQUFNO0FBQy9CLHdCQUF3QjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSx1QkFBdUIsZ0VBQVM7QUFDaEM7QUFDQTtBQUNBLFNBQVM7QUFDVCx1QkFBdUIsZ0VBQVM7QUFDaEM7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUU7QUFDQztBQUNLO0FBQ0M7O0FBRTFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1FQUFRO0FBQ3BDLHdCQUF3QjtBQUN4QjtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG9FQUF1QjtBQUMzQyxxQkFBcUIsZ0NBQWdDO0FBQ3JELHFCQUFxQixnQkFBZ0I7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsTUFBTTtBQUMxQjtBQUNBO0FBQ0Esb0JBQW9CLGtFQUFPO0FBQzNCO0FBQ0E7QUFDQSx5QkFBeUIsNERBQU07QUFDL0I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQzNEQTtBQUFBO0FBQUE7QUFBQTtBQUF3RTtBQUNyQjs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MscUVBQW1CO0FBQ3pELHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwrQkFBK0IsdURBQVU7QUFDekM7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJjaHVua3MvYXBwcy1zaGFyZWRkaWFsb2cyLWFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gJy4vdmlldy9NYWluQ29udGFpbmVyLm1qcyc7XG5cbmNvbnN0IG9uU3RhcnQgPSAoKSA9PiBOZW8uYXBwKHtcbiAgICBhcHBQYXRoIDogJ2FwcHMvc2hhcmVkZGlhbG9nMi8nLFxuICAgIG1haW5WaWV3OiBNYWluQ29udGFpbmVyLFxuICAgIG5hbWUgICAgOiAnU2hhcmVkRGlhbG9nMidcbn0pO1xuXG5leHBvcnQge29uU3RhcnQgYXMgb25TdGFydH07IiwiaW1wb3J0IERpYWxvZyAgICBmcm9tICcuLi8uLi8uLi9zcmMvZGlhbG9nL0Jhc2UubWpzJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnLi4vLi4vLi4vc3JjL2Zvcm0vZmllbGQvVGV4dC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBTaGFyZWREaWFsb2cyLkRlbW9EaWFsb2dcbiAqIEBleHRlbmRzIE5lby5kaWFsb2cuQmFzZVxuICovXG5jbGFzcyBEZW1vRGlhbG9nIGV4dGVuZHMgRGlhbG9nIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogJ1NoYXJlZERpYWxvZzIuRGVtb1dpbmRvdycsXG5cbiAgICAgICAgY29udGFpbmVyQ29uZmlnOiB7XG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcyMHB4J1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgbW9kdWxlICAgOiBUZXh0RmllbGQsXG4gICAgICAgICAgICBmbGV4ICAgICA6ICdub25lJyxcbiAgICAgICAgICAgIGxhYmVsVGV4dDogJ0ZpZWxkIDEnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogVGV4dEZpZWxkLFxuICAgICAgICAgICAgZmxleCAgICAgOiAnbm9uZScsXG4gICAgICAgICAgICBsYWJlbFRleHQ6ICdGaWVsZCAyJ1xuICAgICAgICB9XSxcblxuICAgICAgICB3cmFwcGVyU3R5bGU6IHtcbiAgICAgICAgICAgIGhlaWdodDogJzQwJScsXG4gICAgICAgICAgICB3aWR0aCA6ICc0MCUnXG4gICAgICAgIH1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhEZW1vRGlhbG9nKTtcblxuZXhwb3J0IHtEZW1vRGlhbG9nIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCdXR0b24gICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvYnV0dG9uL0Jhc2UubWpzJztcbmltcG9ydCBNYWluQ29udGFpbmVyQ29udHJvbGxlciBmcm9tICcuL01haW5Db250YWluZXJDb250cm9sbGVyLm1qcyc7XG5pbXBvcnQgVG9vbGJhciAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbnRhaW5lci9Ub29sYmFyLm1qcyc7XG5pbXBvcnQgVmlld3BvcnQgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbnRhaW5lci9WaWV3cG9ydC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBTaGFyZWREaWFsb2cyLnZpZXcuTWFpbkNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5WaWV3cG9ydFxuICovXG5jbGFzcyBNYWluQ29udGFpbmVyIGV4dGVuZHMgVmlld3BvcnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnU2hhcmVkRGlhbG9nMi52aWV3Lk1haW5Db250YWluZXInLFxuICAgICAgICBudHlwZSAgICA6ICdtYWluLWNvbnRhaW5lcjInLFxuXG4gICAgICAgIGF1dG9Nb3VudCA6IHRydWUsXG4gICAgICAgIGNvbnRyb2xsZXI6IE1haW5Db250YWluZXJDb250cm9sbGVyLFxuICAgICAgICBsYXlvdXQgICAgOiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgIHN0eWxlICAgICA6IHtwYWRkaW5nOiAnMjBweCd9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdXN0b20gY29uZmlnIHdoaWNoIGdldHMgcGFzc2VkIHRvIHRoZSBkaWFsb2dcbiAgICAgICAgICogRWl0aGVyIGEgZG9tIG5vZGUgaWQsICdkb2N1bWVudC5ib2R5JyBvciBudWxsXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBib3VuZGFyeUNvbnRhaW5lcklkPSdkb2N1bWVudC5ib2R5J1xuICAgICAgICAgKi9cbiAgICAgICAgYm91bmRhcnlDb250YWluZXJJZDogJ2RvY3VtZW50LmJvZHknLFxuICAgICAgICAvKipcbiAgICAgICAgICogQ3VzdG9tIGNvbmZpZ1xuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGlhbG9nLkJhc2V8bnVsbH0gZGlhbG9nPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGRpYWxvZzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtc1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBtb2R1bGU6IFRvb2xiYXIsXG4gICAgICAgICAgICBmbGV4ICA6ICdub25lJyxcbiAgICAgICAgICAgIGl0ZW1zIDpbe1xuICAgICAgICAgICAgICAgIG1vZHVsZSA6IEJ1dHRvbixcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiAnY3JlYXRlRGlhbG9nJyxcbiAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtd2luZG93LW1heGltaXplJyxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnQ3JlYXRlIERpYWxvZycsXG4gICAgICAgICAgICB9XVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBudHlwZTogJ2NvbXBvbmVudCcsXG4gICAgICAgICAgICBmbGV4IDogMSxcbiAgICAgICAgICAgIGh0bWwgOiAnIzInLFxuXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIGFsaWduSXRlbXMgICAgOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBjb2xvciAgICAgICAgIDogJyNiYmInLFxuICAgICAgICAgICAgICAgIGRpc3BsYXkgICAgICAgOiAnZmxleCcsXG4gICAgICAgICAgICAgICAgZm9udFNpemUgICAgICA6ICcyMDBweCcsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIHVzZXJTZWxlY3QgICAgOiAnbm9uZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyKTtcblxuZXhwb3J0IHtNYWluQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb21wb25lbnRDb250cm9sbGVyIGZyb20gJy4uLy4uLy4uL3NyYy9jb250cm9sbGVyL0NvbXBvbmVudC5tanMnO1xuaW1wb3J0IERlbW9EaWFsb2cgICAgICAgICAgZnJvbSAnLi9EZW1vRGlhbG9nLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFNoYXJlZERpYWxvZzIudmlldy5NYWluQ29udGFpbmVyQ29udHJvbGxlclxuICogQGV4dGVuZHMgTmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50XG4gKi9cbmNsYXNzIE1haW5Db250YWluZXJDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50Q29udHJvbGxlciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1NoYXJlZERpYWxvZzIudmlldy5NYWluQ29udGFpbmVyQ29udHJvbGxlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnU2hhcmVkRGlhbG9nMi52aWV3Lk1haW5Db250YWluZXJDb250cm9sbGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J21haW5jb250YWluZXIyLWNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbWFpbmNvbnRhaW5lcjItY29udHJvbGxlcidcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIGNyZWF0ZURpYWxvZyhkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZpZXcgPSBtZS52aWV3O1xuXG4gICAgICAgIGRhdGEuY29tcG9uZW50LmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICBtZS5kaWFsb2cgPSBOZW8uY3JlYXRlKERlbW9EaWFsb2csIHtcbiAgICAgICAgICAgIGFuaW1hdGVUYXJnZXRJZCAgICA6IGRhdGEuY29tcG9uZW50LmlkLFxuICAgICAgICAgICAgYXBwTmFtZSAgICAgICAgICAgIDogdmlldy5hcHBOYW1lLFxuICAgICAgICAgICAgYm91bmRhcnlDb250YWluZXJJZDogdmlldy5ib3VuZGFyeUNvbnRhaW5lcklkLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICAgICAgIDoge2Nsb3NlOiBtZS5vbldpbmRvd0Nsb3NlLCBzY29wZTogbWV9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25XaW5kb3dDbG9zZSgpIHtcbiAgICAgICAgbGV0IGJ1dHRvbiA9IHRoaXMudmlldy5kb3duKHtcbiAgICAgICAgICAgIHRleHQ6ICdDcmVhdGUgRGlhbG9nJ1xuICAgICAgICB9KTtcblxuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5Db250YWluZXJDb250cm9sbGVyKTtcblxuZXhwb3J0IHtNYWluQ29udGFpbmVyQ29udHJvbGxlciBhcyBkZWZhdWx0fTsiXSwic291cmNlUm9vdCI6IiJ9