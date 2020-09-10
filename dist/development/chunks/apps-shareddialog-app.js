self["webpackChunk"](["chunks/apps-shareddialog-app"],{

/***/ "./node_modules/neo.mjs/apps/shareddialog/app.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/apps/shareddialog/app.mjs ***!
  \********************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/MainContainer.mjs */ "./node_modules/neo.mjs/apps/shareddialog/view/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'apps/shareddialog/',
    mainView: _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'SharedDialog'
});



/***/ }),

/***/ "./node_modules/neo.mjs/apps/shareddialog/view/DemoDialog.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/shareddialog/view/DemoDialog.mjs ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DemoDialog; });
/* harmony import */ var _src_dialog_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/dialog/Base.mjs */ "./node_modules/neo.mjs/src/dialog/Base.mjs");
/* harmony import */ var _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/form/field/Text.mjs */ "./node_modules/neo.mjs/src/form/field/Text.mjs");



/**
 * @class SharedDialog.DemoDialog
 * @extends Neo.dialog.Base
 */
class DemoDialog extends _src_dialog_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        className: 'SharedDialog.DemoWindow',

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

/***/ "./node_modules/neo.mjs/apps/shareddialog/view/MainContainer.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/shareddialog/view/MainContainer.mjs ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/button/Base.mjs */ "./node_modules/neo.mjs/src/button/Base.mjs");
/* harmony import */ var _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainContainerController.mjs */ "./node_modules/neo.mjs/apps/shareddialog/view/MainContainerController.mjs");
/* harmony import */ var _src_container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/container/Toolbar.mjs */ "./node_modules/neo.mjs/src/container/Toolbar.mjs");
/* harmony import */ var _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");





/**
 * @class SharedDialog.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_3__["default"] {
    static getConfig() {return {
        className: 'SharedDialog.view.MainContainer',
        ntype    : 'main-container',

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
            }, '->', {
                module : _src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
                handler: 'switchTheme',
                iconCls: 'fa fa-moon',
                text   : 'Theme Dark'
            }, {
                module : _src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
                iconCls: 'fa fa-window-restore',
                style  : {marginLeft: '1em'},
                text   : 'Open 2nd Window',
                url    : '../shareddialog2'
            }]
        }, {
            ntype: 'component',
            flex : 1,
            html : '#1',

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

/***/ "./node_modules/neo.mjs/apps/shareddialog/view/MainContainerController.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/neo.mjs/apps/shareddialog/view/MainContainerController.mjs ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainerController; });
/* harmony import */ var _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");
/* harmony import */ var _DemoDialog_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DemoDialog.mjs */ "./node_modules/neo.mjs/apps/shareddialog/view/DemoDialog.mjs");
/* harmony import */ var _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");




/**
 * @class SharedDialog.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='SharedDialog.view.MainContainerController'
         * @protected
         */
        className: 'SharedDialog.view.MainContainerController',
        /**
         * @member {String} ntype='maincontainer-controller'
         * @protected
         */
        ntype: 'maincontainer-controller',
        /**
         * @member {String[]} connectedApps=[]
         */
        connectedApps: []
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        const me = this;

        me.view.on({
            connect   : me.onAppConnect,
            disconnect: me.onAppDisconnect,
            scope     : me
        });
    }

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
     * @returns {Neo.button.Base}
     */
    getSecondWindowButton() {
        return this.view.down({iconCls: 'fa fa-window-restore'});
    }

    /**
     *
     * @param {String} name
     */
    onAppConnect(name) {
        let me   = this,
            view = me.view;

        _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].add(me.connectedApps, name);

        if (name === 'SharedDialog2') {
            me.getSecondWindowButton().disabled = true;
        }
    }

    /**
     *
     * @param {String} name
     */
    onAppDisconnect(name) {
        let me   = this,
            view = me.view;

        _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].remove(me.connectedApps, name);

        if (name === 'SharedDialog2') {
            me.getSecondWindowButton().disabled = false;
        }
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

    /**
     *
     * @param {Object} data
     */
    openSecondWindow(data) {
        console.log('openSecondWindow');
    }

    /**
     *
     * @param {Object} data
     */
    switchTheme(data) {
        let me         = this,
            button     = data.component,
            buttonText = 'Theme Light',
            iconCls    = 'fa fa-sun',
            theme      = 'neo-theme-dark',
            cls, view;

        if (button.text === 'Theme Light') {
            buttonText = 'Theme Dark';
            iconCls    = 'fa fa-moon';
            theme      = 'neo-theme-light';
        }

        me.connectedApps.forEach(appName => {
            view = Neo.apps[appName].mainViewInstance;

            cls = [...view.cls];

            view.cls.forEach(item => {
                if (item.includes('neo-theme')) {
                    _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].remove(cls, item);
                }
            });

            _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].add(cls, theme);
            view.cls = cls;
        });

        button.set({
            iconCls: iconCls,
            text   : buttonText
        });
    }
}

Neo.applyClassConfig(MainContainerController);



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3NoYXJlZGRpYWxvZy9hcHAubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkZGlhbG9nL3ZpZXcvRGVtb0RpYWxvZy5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9zaGFyZWRkaWFsb2cvdmlldy9NYWluQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3NoYXJlZGRpYWxvZy92aWV3L01haW5Db250YWluZXJDb250cm9sbGVyLm1qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQXFEOztBQUVyRDtBQUNBO0FBQ0EsY0FBYywrREFBYTtBQUMzQjtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDTkQ7QUFBQTtBQUFBO0FBQUE7QUFBcUQ7QUFDSTs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNERBQU07QUFDL0Isd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLHVCQUF1QixnRUFBUztBQUNoQztBQUNBO0FBQ0EsU0FBUztBQUNULHVCQUF1QixnRUFBUztBQUNoQztBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtRTtBQUNDO0FBQ0s7QUFDQzs7QUFFMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUVBQVE7QUFDcEMsd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isb0VBQXVCO0FBQzNDLHFCQUFxQixnQ0FBZ0M7QUFDckQscUJBQXFCLGdCQUFnQjs7QUFFckM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixNQUFNO0FBQzFCO0FBQ0E7QUFDQSxvQkFBb0Isa0VBQU87QUFDM0I7QUFDQTtBQUNBLHlCQUF5Qiw0REFBTTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IseUJBQXlCLDREQUFNO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYix5QkFBeUIsNERBQU07QUFDL0I7QUFDQSwwQkFBMEIsa0JBQWtCO0FBQzVDO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0U7QUFDckI7QUFDVzs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MscUVBQW1CO0FBQ3pELHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLCtCQUErQix1REFBVTtBQUN6QztBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLCtCQUErQixnQ0FBZ0M7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLDJEQUFROztBQUVoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsMkRBQVE7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQiwyREFBUTtBQUM1QjtBQUNBLGFBQWE7O0FBRWIsWUFBWSwyREFBUTtBQUNwQjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEiLCJmaWxlIjoiY2h1bmtzL2FwcHMtc2hhcmVkZGlhbG9nLWFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gJy4vdmlldy9NYWluQ29udGFpbmVyLm1qcyc7XG5cbmNvbnN0IG9uU3RhcnQgPSAoKSA9PiBOZW8uYXBwKHtcbiAgICBhcHBQYXRoIDogJ2FwcHMvc2hhcmVkZGlhbG9nLycsXG4gICAgbWFpblZpZXc6IE1haW5Db250YWluZXIsXG4gICAgbmFtZSAgICA6ICdTaGFyZWREaWFsb2cnXG59KTtcblxuZXhwb3J0IHtvblN0YXJ0IGFzIG9uU3RhcnR9OyIsImltcG9ydCBEaWFsb2cgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2RpYWxvZy9CYXNlLm1qcyc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJy4uLy4uLy4uL3NyYy9mb3JtL2ZpZWxkL1RleHQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgU2hhcmVkRGlhbG9nLkRlbW9EaWFsb2dcbiAqIEBleHRlbmRzIE5lby5kaWFsb2cuQmFzZVxuICovXG5jbGFzcyBEZW1vRGlhbG9nIGV4dGVuZHMgRGlhbG9nIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogJ1NoYXJlZERpYWxvZy5EZW1vV2luZG93JyxcblxuICAgICAgICBjb250YWluZXJDb25maWc6IHtcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzIwcHgnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBtb2R1bGUgICA6IFRleHRGaWVsZCxcbiAgICAgICAgICAgIGZsZXggICAgIDogJ25vbmUnLFxuICAgICAgICAgICAgbGFiZWxUZXh0OiAnRmllbGQgMSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgOiBUZXh0RmllbGQsXG4gICAgICAgICAgICBmbGV4ICAgICA6ICdub25lJyxcbiAgICAgICAgICAgIGxhYmVsVGV4dDogJ0ZpZWxkIDInXG4gICAgICAgIH1dLFxuXG4gICAgICAgIHdyYXBwZXJTdHlsZToge1xuICAgICAgICAgICAgaGVpZ2h0OiAnNDAlJyxcbiAgICAgICAgICAgIHdpZHRoIDogJzQwJSdcbiAgICAgICAgfVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKERlbW9EaWFsb2cpO1xuXG5leHBvcnQge0RlbW9EaWFsb2cgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJ1dHRvbiAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9idXR0b24vQmFzZS5tanMnO1xuaW1wb3J0IE1haW5Db250YWluZXJDb250cm9sbGVyIGZyb20gJy4vTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIubWpzJztcbmltcG9ydCBUb29sYmFyICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvY29udGFpbmVyL1Rvb2xiYXIubWpzJztcbmltcG9ydCBWaWV3cG9ydCAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvY29udGFpbmVyL1ZpZXdwb3J0Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFNoYXJlZERpYWxvZy52aWV3Lk1haW5Db250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuVmlld3BvcnRcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lciBleHRlbmRzIFZpZXdwb3J0IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogJ1NoYXJlZERpYWxvZy52aWV3Lk1haW5Db250YWluZXInLFxuICAgICAgICBudHlwZSAgICA6ICdtYWluLWNvbnRhaW5lcicsXG5cbiAgICAgICAgYXV0b01vdW50IDogdHJ1ZSxcbiAgICAgICAgY29udHJvbGxlcjogTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIsXG4gICAgICAgIGxheW91dCAgICA6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgc3R5bGUgICAgIDoge3BhZGRpbmc6ICcyMHB4J30sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEN1c3RvbSBjb25maWcgd2hpY2ggZ2V0cyBwYXNzZWQgdG8gdGhlIGRpYWxvZ1xuICAgICAgICAgKiBFaXRoZXIgYSBkb20gbm9kZSBpZCwgJ2RvY3VtZW50LmJvZHknIG9yIG51bGxcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGJvdW5kYXJ5Q29udGFpbmVySWQ9J2RvY3VtZW50LmJvZHknXG4gICAgICAgICAqL1xuICAgICAgICBib3VuZGFyeUNvbnRhaW5lcklkOiAnZG9jdW1lbnQuYm9keScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdXN0b20gY29uZmlnXG4gICAgICAgICAqIEBtZW1iZXIge05lby5kaWFsb2cuQmFzZXxudWxsfSBkaWFsb2c9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZGlhbG9nOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGl0ZW1zXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgIG1vZHVsZTogVG9vbGJhcixcbiAgICAgICAgICAgIGZsZXggIDogJ25vbmUnLFxuICAgICAgICAgICAgaXRlbXMgOlt7XG4gICAgICAgICAgICAgICAgbW9kdWxlIDogQnV0dG9uLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdjcmVhdGVEaWFsb2cnLFxuICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS13aW5kb3ctbWF4aW1pemUnLFxuICAgICAgICAgICAgICAgIHRleHQgICA6ICdDcmVhdGUgRGlhbG9nJyxcbiAgICAgICAgICAgIH0sICctPicsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgOiBCdXR0b24sXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogJ3N3aXRjaFRoZW1lJyxcbiAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtbW9vbicsXG4gICAgICAgICAgICAgICAgdGV4dCAgIDogJ1RoZW1lIERhcmsnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlIDogQnV0dG9uLFxuICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS13aW5kb3ctcmVzdG9yZScsXG4gICAgICAgICAgICAgICAgc3R5bGUgIDoge21hcmdpbkxlZnQ6ICcxZW0nfSxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnT3BlbiAybmQgV2luZG93JyxcbiAgICAgICAgICAgICAgICB1cmwgICAgOiAnLi4vc2hhcmVkZGlhbG9nMidcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgIGZsZXggOiAxLFxuICAgICAgICAgICAgaHRtbCA6ICcjMScsXG5cbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcyAgICA6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIGNvbG9yICAgICAgICAgOiAnI2JiYicsXG4gICAgICAgICAgICAgICAgZGlzcGxheSAgICAgICA6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICBmb250U2l6ZSAgICAgIDogJzIwMHB4JyxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgdXNlclNlbGVjdCAgICA6ICdub25lJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5Db250YWluZXIpO1xuXG5leHBvcnQge01haW5Db250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbXBvbmVudENvbnRyb2xsZXIgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXIvQ29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgRGVtb0RpYWxvZyAgICAgICAgICBmcm9tICcuL0RlbW9EaWFsb2cubWpzJztcbmltcG9ydCBOZW9BcnJheSAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy91dGlsL0FycmF5Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFNoYXJlZERpYWxvZy52aWV3Lk1haW5Db250YWluZXJDb250cm9sbGVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udHJvbGxlci5Db21wb25lbnRcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnRDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nU2hhcmVkRGlhbG9nLnZpZXcuTWFpbkNvbnRhaW5lckNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1NoYXJlZERpYWxvZy52aWV3Lk1haW5Db250YWluZXJDb250cm9sbGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J21haW5jb250YWluZXItY29udHJvbGxlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdtYWluY29udGFpbmVyLWNvbnRyb2xsZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNvbm5lY3RlZEFwcHM9W11cbiAgICAgICAgICovXG4gICAgICAgIGNvbm5lY3RlZEFwcHM6IFtdXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBtZS52aWV3Lm9uKHtcbiAgICAgICAgICAgIGNvbm5lY3QgICA6IG1lLm9uQXBwQ29ubmVjdCxcbiAgICAgICAgICAgIGRpc2Nvbm5lY3Q6IG1lLm9uQXBwRGlzY29ubmVjdCxcbiAgICAgICAgICAgIHNjb3BlICAgICA6IG1lXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBjcmVhdGVEaWFsb2coZGF0YSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2aWV3ID0gbWUudmlldztcblxuICAgICAgICBkYXRhLmNvbXBvbmVudC5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgbWUuZGlhbG9nID0gTmVvLmNyZWF0ZShEZW1vRGlhbG9nLCB7XG4gICAgICAgICAgICBhbmltYXRlVGFyZ2V0SWQgICAgOiBkYXRhLmNvbXBvbmVudC5pZCxcbiAgICAgICAgICAgIGFwcE5hbWUgICAgICAgICAgICA6IHZpZXcuYXBwTmFtZSxcbiAgICAgICAgICAgIGJvdW5kYXJ5Q29udGFpbmVySWQ6IHZpZXcuYm91bmRhcnlDb250YWluZXJJZCxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgICAgICAgICA6IHtjbG9zZTogbWUub25XaW5kb3dDbG9zZSwgc2NvcGU6IG1lfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtOZW8uYnV0dG9uLkJhc2V9XG4gICAgICovXG4gICAgZ2V0U2Vjb25kV2luZG93QnV0dG9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52aWV3LmRvd24oe2ljb25DbHM6ICdmYSBmYS13aW5kb3ctcmVzdG9yZSd9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAgICovXG4gICAgb25BcHBDb25uZWN0KG5hbWUpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmlldyA9IG1lLnZpZXc7XG5cbiAgICAgICAgTmVvQXJyYXkuYWRkKG1lLmNvbm5lY3RlZEFwcHMsIG5hbWUpO1xuXG4gICAgICAgIGlmIChuYW1lID09PSAnU2hhcmVkRGlhbG9nMicpIHtcbiAgICAgICAgICAgIG1lLmdldFNlY29uZFdpbmRvd0J1dHRvbigpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgKi9cbiAgICBvbkFwcERpc2Nvbm5lY3QobmFtZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2aWV3ID0gbWUudmlldztcblxuICAgICAgICBOZW9BcnJheS5yZW1vdmUobWUuY29ubmVjdGVkQXBwcywgbmFtZSk7XG5cbiAgICAgICAgaWYgKG5hbWUgPT09ICdTaGFyZWREaWFsb2cyJykge1xuICAgICAgICAgICAgbWUuZ2V0U2Vjb25kV2luZG93QnV0dG9uKCkuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25XaW5kb3dDbG9zZSgpIHtcbiAgICAgICAgbGV0IGJ1dHRvbiA9IHRoaXMudmlldy5kb3duKHtcbiAgICAgICAgICAgIHRleHQ6ICdDcmVhdGUgRGlhbG9nJ1xuICAgICAgICB9KTtcblxuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb3BlblNlY29uZFdpbmRvdyhkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvcGVuU2Vjb25kV2luZG93Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIHN3aXRjaFRoZW1lKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYnV0dG9uICAgICA9IGRhdGEuY29tcG9uZW50LFxuICAgICAgICAgICAgYnV0dG9uVGV4dCA9ICdUaGVtZSBMaWdodCcsXG4gICAgICAgICAgICBpY29uQ2xzICAgID0gJ2ZhIGZhLXN1bicsXG4gICAgICAgICAgICB0aGVtZSAgICAgID0gJ25lby10aGVtZS1kYXJrJyxcbiAgICAgICAgICAgIGNscywgdmlldztcblxuICAgICAgICBpZiAoYnV0dG9uLnRleHQgPT09ICdUaGVtZSBMaWdodCcpIHtcbiAgICAgICAgICAgIGJ1dHRvblRleHQgPSAnVGhlbWUgRGFyayc7XG4gICAgICAgICAgICBpY29uQ2xzICAgID0gJ2ZhIGZhLW1vb24nO1xuICAgICAgICAgICAgdGhlbWUgICAgICA9ICduZW8tdGhlbWUtbGlnaHQnO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuY29ubmVjdGVkQXBwcy5mb3JFYWNoKGFwcE5hbWUgPT4ge1xuICAgICAgICAgICAgdmlldyA9IE5lby5hcHBzW2FwcE5hbWVdLm1haW5WaWV3SW5zdGFuY2U7XG5cbiAgICAgICAgICAgIGNscyA9IFsuLi52aWV3LmNsc107XG5cbiAgICAgICAgICAgIHZpZXcuY2xzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaW5jbHVkZXMoJ25lby10aGVtZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsIGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBOZW9BcnJheS5hZGQoY2xzLCB0aGVtZSk7XG4gICAgICAgICAgICB2aWV3LmNscyA9IGNscztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYnV0dG9uLnNldCh7XG4gICAgICAgICAgICBpY29uQ2xzOiBpY29uQ2xzLFxuICAgICAgICAgICAgdGV4dCAgIDogYnV0dG9uVGV4dFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5Db250YWluZXJDb250cm9sbGVyKTtcblxuZXhwb3J0IHtNYWluQ29udGFpbmVyQ29udHJvbGxlciBhcyBkZWZhdWx0fTsiXSwic291cmNlUm9vdCI6IiJ9