self["webpackChunk"](["chunks/examples-component-chip-app"],{

/***/ "./node_modules/neo.mjs/examples/component/chip/MainContainer.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/component/chip/MainContainer.mjs ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/form/field/CheckBox.mjs */ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs");
/* harmony import */ var _src_component_Chip_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/component/Chip.mjs */ "./node_modules/neo.mjs/src/component/Chip.mjs");
/* harmony import */ var _ConfigurationViewport_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ConfigurationViewport.mjs */ "./node_modules/neo.mjs/examples/ConfigurationViewport.mjs");
/* harmony import */ var _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/form/field/Number.mjs */ "./node_modules/neo.mjs/src/form/field/Number.mjs");
/* harmony import */ var _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/form/field/Text.mjs */ "./node_modules/neo.mjs/src/form/field/Text.mjs");






/**
 * @class TestApp.MainContainer
 * @extends Neo.examples.ConfigurationViewport
 */
class MainContainer extends _ConfigurationViewport_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {
    static getConfig() {return {
        className: 'TestApp.MainContainer',
        ntype    : 'main-container',

        autoMount           : true,
        configItemLabelWidth: 110,
        configItemWidth     : 230,
        layout              : {ntype: 'hbox', align: 'stretch'}
    }}

    createConfigurationComponents() {
        let me = this;

        return [{
            module   : _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            checked  : me.exampleComponent.closable,
            labelText: 'closable',
            listeners: {change: me.onConfigChange.bind(me, 'closable')}
        }, {
            module    :  _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            clearable : true,
            labelText : 'height',
            listeners : {change: me.onConfigChange.bind(me, 'height')},
            maxValue  : 100,
            minValue  : 20,
            stepSize  : 2,
            style     : {marginTop: '10px'},
            value     : me.exampleComponent.height
        }, {
            module    :  _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_4__["default"], // todo: selectField with options
            labelText : 'iconCls',
            listeners : {change: me.onConfigChange.bind(me, 'iconCls')},
            value     : me.exampleComponent.iconCls
        }, {
            module    :  _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            clearable : true,
            labelText : 'text',
            listeners : {change: me.onConfigChange.bind(me, 'text')},
            style     : {marginTop: '10px'},
            value     : me.exampleComponent.text
        }, {
            module    :  _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            clearable : true,
            labelText : 'width',
            listeners : {change: me.onConfigChange.bind(me, 'width')},
            maxValue  : 300,
            minValue  : 100,
            stepSize  : 5,
            value     : me.exampleComponent.width
        }];
    }

    createExampleComponent() {
        return Neo.create({
            module : _src_component_Chip_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            iconCls: 'fa fa-home',
            height : 30,
            text   : 'Hello World'
        });
    }
}

Neo.applyClassConfig(MainContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/component/chip/app.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/component/chip/app.mjs ***!
  \**************************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainContainer.mjs */ "./node_modules/neo.mjs/examples/component/chip/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'examples/component/chip/',
    mainView: _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'TestApp'
});



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9jb21wb25lbnQvY2hpcC9NYWluQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9jb21wb25lbnQvY2hpcC9hcHAubWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5RTtBQUNMO0FBQ0E7QUFDRztBQUNGOztBQUVyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixrRUFBcUI7QUFDakQsd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsb0VBQVE7QUFDL0I7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixTQUFTO0FBQ1QseUJBQXlCLGtFQUFXO0FBQ3BDO0FBQ0E7QUFDQSx5QkFBeUIsNkNBQTZDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixrQkFBa0I7QUFDM0M7QUFDQSxTQUFTO0FBQ1QseUJBQXlCLGdFQUFTO0FBQ2xDO0FBQ0EseUJBQXlCLDhDQUE4QztBQUN2RTtBQUNBLFNBQVM7QUFDVCx5QkFBeUIsZ0VBQVM7QUFDbEM7QUFDQTtBQUNBLHlCQUF5QiwyQ0FBMkM7QUFDcEUseUJBQXlCLGtCQUFrQjtBQUMzQztBQUNBLFNBQVM7QUFDVCx5QkFBeUIsa0VBQVc7QUFDcEM7QUFDQTtBQUNBLHlCQUF5Qiw0Q0FBNEM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiwrREFBSTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN6RUE7QUFBQTtBQUFBO0FBQWdEOztBQUVoRDtBQUNBO0FBQ0EsY0FBYywwREFBYTtBQUMzQjtBQUNBLENBQUMiLCJmaWxlIjoiY2h1bmtzL2V4YW1wbGVzLWNvbXBvbmVudC1jaGlwLWFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGVja0JveCAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2Zvcm0vZmllbGQvQ2hlY2tCb3gubWpzJztcbmltcG9ydCBDaGlwICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbXBvbmVudC9DaGlwLm1qcyc7XG5pbXBvcnQgQ29uZmlndXJhdGlvblZpZXdwb3J0IGZyb20gJy4uLy4uL0NvbmZpZ3VyYXRpb25WaWV3cG9ydC5tanMnO1xuaW1wb3J0IE51bWJlckZpZWxkICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvZm9ybS9maWVsZC9OdW1iZXIubWpzJztcbmltcG9ydCBUZXh0RmllbGQgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2Zvcm0vZmllbGQvVGV4dC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBUZXN0QXBwLk1haW5Db250YWluZXJcbiAqIEBleHRlbmRzIE5lby5leGFtcGxlcy5Db25maWd1cmF0aW9uVmlld3BvcnRcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lciBleHRlbmRzIENvbmZpZ3VyYXRpb25WaWV3cG9ydCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdUZXN0QXBwLk1haW5Db250YWluZXInLFxuICAgICAgICBudHlwZSAgICA6ICdtYWluLWNvbnRhaW5lcicsXG5cbiAgICAgICAgYXV0b01vdW50ICAgICAgICAgICA6IHRydWUsXG4gICAgICAgIGNvbmZpZ0l0ZW1MYWJlbFdpZHRoOiAxMTAsXG4gICAgICAgIGNvbmZpZ0l0ZW1XaWR0aCAgICAgOiAyMzAsXG4gICAgICAgIGxheW91dCAgICAgICAgICAgICAgOiB7bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICB9fVxuXG4gICAgY3JlYXRlQ29uZmlndXJhdGlvbkNvbXBvbmVudHMoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICBtb2R1bGUgICA6IENoZWNrQm94LFxuICAgICAgICAgICAgY2hlY2tlZCAgOiBtZS5leGFtcGxlQ29tcG9uZW50LmNsb3NhYmxlLFxuICAgICAgICAgICAgbGFiZWxUZXh0OiAnY2xvc2FibGUnLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7Y2hhbmdlOiBtZS5vbkNvbmZpZ0NoYW5nZS5iaW5kKG1lLCAnY2xvc2FibGUnKX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgIDogIE51bWJlckZpZWxkLFxuICAgICAgICAgICAgY2xlYXJhYmxlIDogdHJ1ZSxcbiAgICAgICAgICAgIGxhYmVsVGV4dCA6ICdoZWlnaHQnLFxuICAgICAgICAgICAgbGlzdGVuZXJzIDoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ2hlaWdodCcpfSxcbiAgICAgICAgICAgIG1heFZhbHVlICA6IDEwMCxcbiAgICAgICAgICAgIG1pblZhbHVlICA6IDIwLFxuICAgICAgICAgICAgc3RlcFNpemUgIDogMixcbiAgICAgICAgICAgIHN0eWxlICAgICA6IHttYXJnaW5Ub3A6ICcxMHB4J30sXG4gICAgICAgICAgICB2YWx1ZSAgICAgOiBtZS5leGFtcGxlQ29tcG9uZW50LmhlaWdodFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgOiAgVGV4dEZpZWxkLCAvLyB0b2RvOiBzZWxlY3RGaWVsZCB3aXRoIG9wdGlvbnNcbiAgICAgICAgICAgIGxhYmVsVGV4dCA6ICdpY29uQ2xzJyxcbiAgICAgICAgICAgIGxpc3RlbmVycyA6IHtjaGFuZ2U6IG1lLm9uQ29uZmlnQ2hhbmdlLmJpbmQobWUsICdpY29uQ2xzJyl9LFxuICAgICAgICAgICAgdmFsdWUgICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5pY29uQ2xzXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICA6ICBUZXh0RmllbGQsXG4gICAgICAgICAgICBjbGVhcmFibGUgOiB0cnVlLFxuICAgICAgICAgICAgbGFiZWxUZXh0IDogJ3RleHQnLFxuICAgICAgICAgICAgbGlzdGVuZXJzIDoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ3RleHQnKX0sXG4gICAgICAgICAgICBzdHlsZSAgICAgOiB7bWFyZ2luVG9wOiAnMTBweCd9LFxuICAgICAgICAgICAgdmFsdWUgICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC50ZXh0XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICA6ICBOdW1iZXJGaWVsZCxcbiAgICAgICAgICAgIGNsZWFyYWJsZSA6IHRydWUsXG4gICAgICAgICAgICBsYWJlbFRleHQgOiAnd2lkdGgnLFxuICAgICAgICAgICAgbGlzdGVuZXJzIDoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ3dpZHRoJyl9LFxuICAgICAgICAgICAgbWF4VmFsdWUgIDogMzAwLFxuICAgICAgICAgICAgbWluVmFsdWUgIDogMTAwLFxuICAgICAgICAgICAgc3RlcFNpemUgIDogNSxcbiAgICAgICAgICAgIHZhbHVlICAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQud2lkdGhcbiAgICAgICAgfV07XG4gICAgfVxuXG4gICAgY3JlYXRlRXhhbXBsZUNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIE5lby5jcmVhdGUoe1xuICAgICAgICAgICAgbW9kdWxlIDogQ2hpcCxcbiAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgICAgICAgIGhlaWdodCA6IDMwLFxuICAgICAgICAgICAgdGV4dCAgIDogJ0hlbGxvIFdvcmxkJ1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5Db250YWluZXIpO1xuXG5leHBvcnQge01haW5Db250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSAnLi9NYWluQ29udGFpbmVyLm1qcyc7XG5cbmNvbnN0IG9uU3RhcnQgPSAoKSA9PiBOZW8uYXBwKHtcbiAgICBhcHBQYXRoIDogJ2V4YW1wbGVzL2NvbXBvbmVudC9jaGlwLycsXG4gICAgbWFpblZpZXc6IE1haW5Db250YWluZXIsXG4gICAgbmFtZSAgICA6ICdUZXN0QXBwJ1xufSk7XG5cbmV4cG9ydCB7b25TdGFydCBhcyBvblN0YXJ0fTsiXSwic291cmNlUm9vdCI6IiJ9