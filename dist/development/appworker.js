/******/ (function(modules) { // webpackBootstrap
/******/ 	self["webpackChunk"] = function webpackChunkCallback(chunkIds, moreModules) {
/******/ 		for(var moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		while(chunkIds.length)
/******/ 			installedChunks[chunkIds.pop()] = 1;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "1" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"app": 1
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/ 		promises.push(Promise.resolve().then(function() {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				importScripts(__webpack_require__.p + "" + chunkId + ".js");
/******/ 			}
/******/ 		}));
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/neo.mjs/src/worker/App.mjs");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/neo.mjs lazy recursive ^\\.\\/.*$ include: \\/app.mjs$ exclude: \\/node_modules$":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/neo.mjs lazy ^\.\/.*$ include: \/app.mjs$ exclude: \/node_modules$ strict namespace object ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./apps/covid/app": [
		"./node_modules/neo.mjs/apps/covid/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~9b369f92",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0fa39ba1",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~23082fc7",
		"vendors~chunks/apps-covid-app~chunks/apps-sharedcovid-app~chunks/examples-table-container-app~chunks~bdf54ad2",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~bcc39eee",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~829399ca",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~85745cf8",
		"vendors~chunks/apps-covid-app~chunks/apps-sharedcovid-app",
		"vendors~chunks/apps-covid-app"
	],
	"./apps/covid/app.mjs": [
		"./node_modules/neo.mjs/apps/covid/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~9b369f92",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0fa39ba1",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~23082fc7",
		"vendors~chunks/apps-covid-app~chunks/apps-sharedcovid-app~chunks/examples-table-container-app~chunks~bdf54ad2",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~bcc39eee",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~829399ca",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~85745cf8",
		"vendors~chunks/apps-covid-app~chunks/apps-sharedcovid-app",
		"vendors~chunks/apps-covid-app"
	],
	"./apps/realworld/app": [
		"./node_modules/neo.mjs/apps/realworld/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~23082fc7",
		"vendors~chunks/apps-realworld-app"
	],
	"./apps/realworld/app.mjs": [
		"./node_modules/neo.mjs/apps/realworld/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~23082fc7",
		"vendors~chunks/apps-realworld-app"
	],
	"./apps/realworld2/app": [
		"./node_modules/neo.mjs/apps/realworld2/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~9b369f92",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0fa39ba1",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~23082fc7",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~bcc39eee",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~829399ca",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~85745cf8",
		"vendors~chunks/apps-realworld2-app"
	],
	"./apps/realworld2/app.mjs": [
		"./node_modules/neo.mjs/apps/realworld2/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~9b369f92",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0fa39ba1",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~23082fc7",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~bcc39eee",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~829399ca",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~85745cf8",
		"vendors~chunks/apps-realworld2-app"
	],
	"./apps/sharedcovid/app": [
		"./node_modules/neo.mjs/apps/sharedcovid/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~9b369f92",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0fa39ba1",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~23082fc7",
		"vendors~chunks/apps-covid-app~chunks/apps-sharedcovid-app~chunks/examples-table-container-app~chunks~bdf54ad2",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~bcc39eee",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~829399ca",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~85745cf8",
		"vendors~chunks/apps-covid-app~chunks/apps-sharedcovid-app",
		"vendors~chunks/apps-sharedcovid-app"
	],
	"./apps/sharedcovid/app.mjs": [
		"./node_modules/neo.mjs/apps/sharedcovid/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~9b369f92",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0fa39ba1",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~23082fc7",
		"vendors~chunks/apps-covid-app~chunks/apps-sharedcovid-app~chunks/examples-table-container-app~chunks~bdf54ad2",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~bcc39eee",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~829399ca",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~85745cf8",
		"vendors~chunks/apps-covid-app~chunks/apps-sharedcovid-app",
		"vendors~chunks/apps-sharedcovid-app"
	],
	"./apps/sharedcovidchart/app": [
		"./node_modules/neo.mjs/apps/sharedcovidchart/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"chunks/apps-sharedcovidchart-app"
	],
	"./apps/sharedcovidchart/app.mjs": [
		"./node_modules/neo.mjs/apps/sharedcovidchart/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"chunks/apps-sharedcovidchart-app"
	],
	"./apps/sharedcovidgallery/app": [
		"./node_modules/neo.mjs/apps/sharedcovidgallery/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"chunks/apps-sharedcovidgallery-app"
	],
	"./apps/sharedcovidgallery/app.mjs": [
		"./node_modules/neo.mjs/apps/sharedcovidgallery/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"chunks/apps-sharedcovidgallery-app"
	],
	"./apps/sharedcovidhelix/app": [
		"./node_modules/neo.mjs/apps/sharedcovidhelix/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"chunks/apps-sharedcovidhelix-app"
	],
	"./apps/sharedcovidhelix/app.mjs": [
		"./node_modules/neo.mjs/apps/sharedcovidhelix/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"chunks/apps-sharedcovidhelix-app"
	],
	"./apps/sharedcovidmap/app": [
		"./node_modules/neo.mjs/apps/sharedcovidmap/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"chunks/apps-sharedcovidmap-app"
	],
	"./apps/sharedcovidmap/app.mjs": [
		"./node_modules/neo.mjs/apps/sharedcovidmap/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"chunks/apps-sharedcovidmap-app"
	],
	"./apps/shareddialog/app": [
		"./node_modules/neo.mjs/apps/shareddialog/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~23082fc7",
		"vendors~chunks/apps-shareddialog-app~chunks/apps-shareddialog2-app~chunks/examples-dialog-app",
		"chunks/apps-shareddialog-app"
	],
	"./apps/shareddialog/app.mjs": [
		"./node_modules/neo.mjs/apps/shareddialog/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~23082fc7",
		"vendors~chunks/apps-shareddialog-app~chunks/apps-shareddialog2-app~chunks/examples-dialog-app",
		"chunks/apps-shareddialog-app"
	],
	"./apps/shareddialog2/app": [
		"./node_modules/neo.mjs/apps/shareddialog2/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~23082fc7",
		"vendors~chunks/apps-shareddialog-app~chunks/apps-shareddialog2-app~chunks/examples-dialog-app",
		"chunks/apps-shareddialog2-app"
	],
	"./apps/shareddialog2/app.mjs": [
		"./node_modules/neo.mjs/apps/shareddialog2/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~23082fc7",
		"vendors~chunks/apps-shareddialog-app~chunks/apps-shareddialog2-app~chunks/examples-dialog-app",
		"chunks/apps-shareddialog2-app"
	],
	"./apps/website/app": [
		"./node_modules/neo.mjs/apps/website/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~9b369f92",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0fa39ba1",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~23082fc7",
		"vendors~chunks/apps-website-app"
	],
	"./apps/website/app.mjs": [
		"./node_modules/neo.mjs/apps/website/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~9b369f92",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0fa39ba1",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~23082fc7",
		"vendors~chunks/apps-website-app"
	],
	"./docs/app": [
		"./node_modules/neo.mjs/docs/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~9b369f92",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0fa39ba1",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~23082fc7",
		"vendors~chunks/docs-app"
	],
	"./docs/app.mjs": [
		"./node_modules/neo.mjs/docs/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~9b369f92",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0fa39ba1",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~23082fc7",
		"vendors~chunks/docs-app"
	],
	"./examples/button/base/app": [
		"./node_modules/neo.mjs/examples/button/base/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/examples-button-base-app"
	],
	"./examples/button/base/app.mjs": [
		"./node_modules/neo.mjs/examples/button/base/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/examples-button-base-app"
	],
	"./examples/button/split/app": [
		"./node_modules/neo.mjs/examples/button/split/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/examples-button-split-app"
	],
	"./examples/button/split/app.mjs": [
		"./node_modules/neo.mjs/examples/button/split/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/examples-button-split-app"
	],
	"./examples/calendar/basic/app": [
		"./node_modules/neo.mjs/examples/calendar/basic/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~9b369f92",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0fa39ba1",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~23082fc7",
		"vendors~chunks/examples-calendar-basic-app~chunks/examples-component-dateSelector-app~chunks/example~fb4c415e",
		"vendors~chunks/examples-calendar-basic-app~chunks/examples-form-field-time-app",
		"vendors~chunks/examples-calendar-basic-app"
	],
	"./examples/calendar/basic/app.mjs": [
		"./node_modules/neo.mjs/examples/calendar/basic/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~9b369f92",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0fa39ba1",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~23082fc7",
		"vendors~chunks/examples-calendar-basic-app~chunks/examples-component-dateSelector-app~chunks/example~fb4c415e",
		"vendors~chunks/examples-calendar-basic-app~chunks/examples-form-field-time-app",
		"vendors~chunks/examples-calendar-basic-app"
	],
	"./examples/charts/app": [
		"./node_modules/neo.mjs/examples/charts/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"chunks/examples-charts-app"
	],
	"./examples/charts/app.mjs": [
		"./node_modules/neo.mjs/examples/charts/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"chunks/examples-charts-app"
	],
	"./examples/component/chip/app": [
		"./node_modules/neo.mjs/examples/component/chip/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/examples-component-chip-app~chunks/examples-list-chip-app",
		"chunks/examples-component-chip-app"
	],
	"./examples/component/chip/app.mjs": [
		"./node_modules/neo.mjs/examples/component/chip/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/examples-component-chip-app~chunks/examples-list-chip-app",
		"chunks/examples-component-chip-app"
	],
	"./examples/component/circle/app": [
		"./node_modules/neo.mjs/examples/component/circle/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/examples-component-circle-app"
	],
	"./examples/component/circle/app.mjs": [
		"./node_modules/neo.mjs/examples/component/circle/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/examples-component-circle-app"
	],
	"./examples/component/coronaGallery/app": [
		"./node_modules/neo.mjs/examples/component/coronaGallery/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~85745cf8",
		"vendors~chunks/examples-component-coronaGallery-app"
	],
	"./examples/component/coronaGallery/app.mjs": [
		"./node_modules/neo.mjs/examples/component/coronaGallery/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~85745cf8",
		"vendors~chunks/examples-component-coronaGallery-app"
	],
	"./examples/component/coronaHelix/app": [
		"./node_modules/neo.mjs/examples/component/coronaHelix/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~829399ca",
		"vendors~chunks/examples-component-coronaHelix-app"
	],
	"./examples/component/coronaHelix/app.mjs": [
		"./node_modules/neo.mjs/examples/component/coronaHelix/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~829399ca",
		"vendors~chunks/examples-component-coronaHelix-app"
	],
	"./examples/component/dateSelector/app": [
		"./node_modules/neo.mjs/examples/component/dateSelector/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/examples-calendar-basic-app~chunks/examples-component-dateSelector-app~chunks/example~fb4c415e",
		"vendors~chunks/examples-component-dateSelector-app"
	],
	"./examples/component/dateSelector/app.mjs": [
		"./node_modules/neo.mjs/examples/component/dateSelector/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/examples-calendar-basic-app~chunks/examples-component-dateSelector-app~chunks/example~fb4c415e",
		"vendors~chunks/examples-component-dateSelector-app"
	],
	"./examples/component/gallery/app": [
		"./node_modules/neo.mjs/examples/component/gallery/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~85745cf8",
		"vendors~chunks/examples-component-gallery-app"
	],
	"./examples/component/gallery/app.mjs": [
		"./node_modules/neo.mjs/examples/component/gallery/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~85745cf8",
		"vendors~chunks/examples-component-gallery-app"
	],
	"./examples/component/helix/app": [
		"./node_modules/neo.mjs/examples/component/helix/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~829399ca",
		"chunks/examples-component-helix-app"
	],
	"./examples/component/helix/app.mjs": [
		"./node_modules/neo.mjs/examples/component/helix/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~829399ca",
		"chunks/examples-component-helix-app"
	],
	"./examples/container/app": [
		"./node_modules/neo.mjs/examples/container/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/examples-container-app"
	],
	"./examples/container/app.mjs": [
		"./node_modules/neo.mjs/examples/container/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/examples-container-app"
	],
	"./examples/dialog/app": [
		"./node_modules/neo.mjs/examples/dialog/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-shareddialog-app~chunks/apps-shareddialog2-app~chunks/examples-dialog-app",
		"vendors~chunks/examples-dialog-app"
	],
	"./examples/dialog/app.mjs": [
		"./node_modules/neo.mjs/examples/dialog/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-shareddialog-app~chunks/apps-shareddialog2-app~chunks/examples-dialog-app",
		"vendors~chunks/examples-dialog-app"
	],
	"./examples/fields/app": [
		"./node_modules/neo.mjs/examples/fields/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~9b369f92",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0fa39ba1",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~bcc39eee",
		"vendors~chunks/examples-calendar-basic-app~chunks/examples-component-dateSelector-app~chunks/example~fb4c415e",
		"vendors~chunks/examples-fields-app"
	],
	"./examples/fields/app.mjs": [
		"./node_modules/neo.mjs/examples/fields/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~9b369f92",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0fa39ba1",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~bcc39eee",
		"vendors~chunks/examples-calendar-basic-app~chunks/examples-component-dateSelector-app~chunks/example~fb4c415e",
		"vendors~chunks/examples-fields-app"
	],
	"./examples/form/field/chip/app": [
		"./node_modules/neo.mjs/examples/form/field/chip/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~9b369f92",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~bcc39eee",
		"vendors~chunks/examples-form-field-chip-app"
	],
	"./examples/form/field/chip/app.mjs": [
		"./node_modules/neo.mjs/examples/form/field/chip/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~9b369f92",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~bcc39eee",
		"vendors~chunks/examples-form-field-chip-app"
	],
	"./examples/form/field/date/app": [
		"./node_modules/neo.mjs/examples/form/field/date/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/examples-calendar-basic-app~chunks/examples-component-dateSelector-app~chunks/example~fb4c415e",
		"vendors~chunks/examples-form-field-date-app"
	],
	"./examples/form/field/date/app.mjs": [
		"./node_modules/neo.mjs/examples/form/field/date/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/examples-calendar-basic-app~chunks/examples-component-dateSelector-app~chunks/example~fb4c415e",
		"vendors~chunks/examples-form-field-date-app"
	],
	"./examples/form/field/email/app": [
		"./node_modules/neo.mjs/examples/form/field/email/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/examples-form-field-email-app"
	],
	"./examples/form/field/email/app.mjs": [
		"./node_modules/neo.mjs/examples/form/field/email/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/examples-form-field-email-app"
	],
	"./examples/form/field/number/app": [
		"./node_modules/neo.mjs/examples/form/field/number/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/examples-form-field-number-app"
	],
	"./examples/form/field/number/app.mjs": [
		"./node_modules/neo.mjs/examples/form/field/number/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/examples-form-field-number-app"
	],
	"./examples/form/field/picker/app": [
		"./node_modules/neo.mjs/examples/form/field/picker/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/examples-form-field-picker-app"
	],
	"./examples/form/field/picker/app.mjs": [
		"./node_modules/neo.mjs/examples/form/field/picker/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/examples-form-field-picker-app"
	],
	"./examples/form/field/select/app": [
		"./node_modules/neo.mjs/examples/form/field/select/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~9b369f92",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~bcc39eee",
		"vendors~chunks/examples-form-field-select-app"
	],
	"./examples/form/field/select/app.mjs": [
		"./node_modules/neo.mjs/examples/form/field/select/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~9b369f92",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~bcc39eee",
		"vendors~chunks/examples-form-field-select-app"
	],
	"./examples/form/field/text/app": [
		"./node_modules/neo.mjs/examples/form/field/text/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/examples-form-field-text-app"
	],
	"./examples/form/field/text/app.mjs": [
		"./node_modules/neo.mjs/examples/form/field/text/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/examples-form-field-text-app"
	],
	"./examples/form/field/textarea/app": [
		"./node_modules/neo.mjs/examples/form/field/textarea/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/examples-form-field-textarea-app"
	],
	"./examples/form/field/textarea/app.mjs": [
		"./node_modules/neo.mjs/examples/form/field/textarea/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/examples-form-field-textarea-app"
	],
	"./examples/form/field/time/app": [
		"./node_modules/neo.mjs/examples/form/field/time/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~9b369f92",
		"vendors~chunks/examples-calendar-basic-app~chunks/examples-form-field-time-app",
		"vendors~chunks/examples-form-field-time-app"
	],
	"./examples/form/field/time/app.mjs": [
		"./node_modules/neo.mjs/examples/form/field/time/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~9b369f92",
		"vendors~chunks/examples-calendar-basic-app~chunks/examples-form-field-time-app",
		"vendors~chunks/examples-form-field-time-app"
	],
	"./examples/form/field/trigger/copyToClipboard/app": [
		"./node_modules/neo.mjs/examples/form/field/trigger/copyToClipboard/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/examples-form-field-trigger-copyToClipboard-app"
	],
	"./examples/form/field/trigger/copyToClipboard/app.mjs": [
		"./node_modules/neo.mjs/examples/form/field/trigger/copyToClipboard/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/examples-form-field-trigger-copyToClipboard-app"
	],
	"./examples/list/base/app": [
		"./node_modules/neo.mjs/examples/list/base/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~9b369f92",
		"vendors~chunks/examples-list-base-app"
	],
	"./examples/list/base/app.mjs": [
		"./node_modules/neo.mjs/examples/list/base/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~9b369f92",
		"vendors~chunks/examples-list-base-app"
	],
	"./examples/list/chip/app": [
		"./node_modules/neo.mjs/examples/list/chip/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~9b369f92",
		"vendors~chunks/examples-component-chip-app~chunks/examples-list-chip-app",
		"chunks/examples-list-chip-app"
	],
	"./examples/list/chip/app.mjs": [
		"./node_modules/neo.mjs/examples/list/chip/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~9b369f92",
		"vendors~chunks/examples-component-chip-app~chunks/examples-list-chip-app",
		"chunks/examples-list-chip-app"
	],
	"./examples/panel/app": [
		"./node_modules/neo.mjs/examples/panel/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~23082fc7",
		"vendors~chunks/examples-panel-app"
	],
	"./examples/panel/app.mjs": [
		"./node_modules/neo.mjs/examples/panel/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~23082fc7",
		"vendors~chunks/examples-panel-app"
	],
	"./examples/tab/container/app": [
		"./node_modules/neo.mjs/examples/tab/container/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0fa39ba1",
		"vendors~chunks/examples-tab-container-app"
	],
	"./examples/tab/container/app.mjs": [
		"./node_modules/neo.mjs/examples/tab/container/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0fa39ba1",
		"vendors~chunks/examples-tab-container-app"
	],
	"./examples/table/container/app": [
		"./node_modules/neo.mjs/examples/table/container/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/apps-covid-app~chunks/apps-sharedcovid-app~chunks/examples-table-container-app~chunks~bdf54ad2",
		"vendors~chunks/examples-table-container-app~chunks/examples-tableStore-app",
		"vendors~chunks/examples-table-container-app"
	],
	"./examples/table/container/app.mjs": [
		"./node_modules/neo.mjs/examples/table/container/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/examples-button-base-app~chunks/examples-button-split-app~chunks/examples-component-c~ad1b52c5",
		"vendors~chunks/apps-covid-app~chunks/apps-sharedcovid-app~chunks/examples-table-container-app~chunks~bdf54ad2",
		"vendors~chunks/examples-table-container-app~chunks/examples-tableStore-app",
		"vendors~chunks/examples-table-container-app"
	],
	"./examples/tableFiltering/app": [
		"./node_modules/neo.mjs/examples/tableFiltering/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~9b369f92",
		"vendors~chunks/apps-covid-app~chunks/apps-sharedcovid-app~chunks/examples-table-container-app~chunks~bdf54ad2",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~bcc39eee",
		"vendors~chunks/examples-calendar-basic-app~chunks/examples-component-dateSelector-app~chunks/example~fb4c415e",
		"vendors~chunks/examples-tableFiltering-app"
	],
	"./examples/tableFiltering/app.mjs": [
		"./node_modules/neo.mjs/examples/tableFiltering/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~9b369f92",
		"vendors~chunks/apps-covid-app~chunks/apps-sharedcovid-app~chunks/examples-table-container-app~chunks~bdf54ad2",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~bcc39eee",
		"vendors~chunks/examples-calendar-basic-app~chunks/examples-component-dateSelector-app~chunks/example~fb4c415e",
		"vendors~chunks/examples-tableFiltering-app"
	],
	"./examples/tablePerformance/app": [
		"./node_modules/neo.mjs/examples/tablePerformance/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-sharedcovid-app~chunks/examples-table-container-app~chunks~bdf54ad2",
		"vendors~chunks/examples-tablePerformance-app"
	],
	"./examples/tablePerformance/app.mjs": [
		"./node_modules/neo.mjs/examples/tablePerformance/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-sharedcovid-app~chunks/examples-table-container-app~chunks~bdf54ad2",
		"vendors~chunks/examples-tablePerformance-app"
	],
	"./examples/tableStore/app": [
		"./node_modules/neo.mjs/examples/tableStore/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-sharedcovid-app~chunks/examples-table-container-app~chunks~bdf54ad2",
		"vendors~chunks/examples-table-container-app~chunks/examples-tableStore-app",
		"vendors~chunks/examples-tableStore-app"
	],
	"./examples/tableStore/app.mjs": [
		"./node_modules/neo.mjs/examples/tableStore/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-sharedcovid-app~chunks/examples-table-container-app~chunks~bdf54ad2",
		"vendors~chunks/examples-table-container-app~chunks/examples-tableStore-app",
		"vendors~chunks/examples-tableStore-app"
	],
	"./examples/tabs/app": [
		"./node_modules/neo.mjs/examples/tabs/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0fa39ba1",
		"vendors~chunks/apps-covid-app~chunks/apps-sharedcovid-app~chunks/examples-table-container-app~chunks~bdf54ad2",
		"vendors~chunks/examples-tabs-app"
	],
	"./examples/tabs/app.mjs": [
		"./node_modules/neo.mjs/examples/tabs/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~60f3f9fb",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0fa39ba1",
		"vendors~chunks/apps-covid-app~chunks/apps-sharedcovid-app~chunks/examples-table-container-app~chunks~bdf54ad2",
		"vendors~chunks/examples-tabs-app"
	],
	"./examples/todoList/version1/app": [
		"./node_modules/neo.mjs/examples/todoList/version1/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"chunks/examples-todoList-version1-app"
	],
	"./examples/todoList/version1/app.mjs": [
		"./node_modules/neo.mjs/examples/todoList/version1/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"chunks/examples-todoList-version1-app"
	],
	"./examples/todoList/version2/app": [
		"./node_modules/neo.mjs/examples/todoList/version2/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~9b369f92",
		"chunks/examples-todoList-version2-app"
	],
	"./examples/todoList/version2/app.mjs": [
		"./node_modules/neo.mjs/examples/todoList/version2/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~d85de203",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0f8b30fa",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~9b369f92",
		"chunks/examples-todoList-version2-app"
	],
	"./examples/viewport/app": [
		"./node_modules/neo.mjs/examples/viewport/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0fa39ba1",
		"chunks/examples-viewport-app"
	],
	"./examples/viewport/app.mjs": [
		"./node_modules/neo.mjs/examples/viewport/app.mjs",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~1e3fa4ed",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-sha~7bac0921",
		"vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/apps-web~0fa39ba1",
		"chunks/examples-viewport-app"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/neo.mjs lazy recursive ^\\.\\/.*$ include: \\/app.mjs$ exclude: \\/node_modules$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/neo.mjs/src/DefaultConfig.mjs":
/*!****************************************************!*\
  !*** ./node_modules/neo.mjs/src/DefaultConfig.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultConfig; });
const Neo = self.Neo || {};

Neo.config = Neo.config || {};

/**
 * Config object for the neo.mjs framework which will get passed to all workers
 * You can change the configs, e.g. inside the index.html of your app
 * @memberOf module:Neo
 * @name config
 * @type Object
 */
const DefaultConfig = {
    /**
     * true will apply 'neo-body' to the document.body classList
     * @default true
     * @memberOf! module:Neo
     * @name config.applyBodyCls
     * @type Boolean
     */
    applyBodyCls: true,
    /**
     * Path to your app.mjs file. You can create multiple apps there if needed.
     * @default null
     * @memberOf! module:Neo
     * @name config.appPath
     * @type String|null
     */
    appPath: null,
    /**
     * Path to the neo.mjs directory
     * @default './'
     * @memberOf! module:Neo
     * @name config.basePath
     * @type String
     */
    basePath: './',
    /**
     * Path to the neo.mjs theme css files
     * See main.addon.Stylesheet => createStyleSheet()
     * @default Neo.config.basePath + 'build/' + Neo.config.environment
     * @memberOf! module:Neo
     * @name [config.cssPath]
     * @optional
     * @type String|null
     */
    cssPath: null,
    /**
     * The current build => dist environment. Valid values: 'development', 'production'
     * Used for automatically including the matching theme files
     * @default 'production'
     * @memberOf! module:Neo
     * @name config.environment
     * @type String
     */
    environment: 'production',
    /**
     * In case you are using the GoogleAnalytics mainThreadAddon or useGoogleAnalytics: true,
     * you can change the gtag id here. Required for the online examples (gh pages)
     * @default 'UA-153734404-1'
     * @memberOf! module:Neo
     * @name config.gtagId
     * @type String
     */
    gtagId: 'UA-153734404-1',
    /**
     * Flag if Neo is running without any JS builds
     * @default false
     * @memberOf! module:Neo
     * @name config.isExperimental
     * @type Boolean
     */
    isExperimental: false,
    /**
     * Flag for running on https://neomjs.github.io/pages/
     * => to use local images paths instead of raw.githubusercontent.com
     * @default false
     * @memberOf! module:Neo
     * @name config.isGitHubPages
     * @type Boolean
     */
    isGitHubPages: false,
    /**
     * Flag for running the Neo main thread inside an iframe (Siesta Browser Harness)
     * @default false
     * @memberOf! module:Neo
     * @name config.isInsideSiesta
     * @type Boolean
     */
    isInsideSiesta: false,
    /**
     * Used by Intl.DateTimeFormat, for details take a look at:
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @default 'default'
     * @memberOf! module:Neo
     * @name config.locale
     * @type String
     */
    locale: 'default',
    /**
     * Add addons for the main thread
     * Possible values: AmCharts, AnalyticsByGoogle, HighlightJS, LocalStorage, MapboxGL, Markdown, Siesta, Stylesheet
     * (src/main/addon)
     * @default ['Stylesheet']
     * @memberOf! module:Neo
     * @name config.mainThreadAddons
     * @type String[]
     */
    mainThreadAddons: ['Stylesheet'],
    /**
     * Add themes you want to use here. The first theme will get applied.
     * If config.useCss4 === true, other theme variables will get included as well
     * @default ['neo-theme-light', 'neo-theme-dark']
     * @memberOf! module:Neo
     * @name config.themes
     * @type String[]
     */
    themes: ['neo-theme-light', 'neo-theme-dark'],
    /**
     * Flag for standalone Siesta module tests => prevent registerRemote worker messages
     * @default false
     * @memberOf! module:Neo
     * @name config.unitTestMode
     * @type Boolean
     */
    unitTestMode: false,
    /**
     * Flag if CSS4 stylesheets are in use (important for switching themes)
     * @default true
     * @memberOf! module:Neo
     * @name config.useCss4
     * @type Boolean
     */
    useCss4: true,
    /**
     * True will automatically include the stylesheet
     * @default true
     * @memberOf! module:Neo
     * @name config.useFontAwesome
     * @type Boolean
     */
    useFontAwesome: true,
    /**
     * Intended for the online examples where we need an easy way to add GA to every generated app
     * @default false
     * @memberOf! module:Neo
     * @name config.useGoogleAnalytics
     * @type Boolean
     */
    useGoogleAnalytics: false,
    /**
     * Creates App, Data & VDom as SharedWorkers.
     * Set this one to true in case you want to connect multiple main threads.
     * @default false
     * @memberOf! module:Neo
     * @name config.useSharedWorkers
     * @type Boolean
     */
    useSharedWorkers: false,
    /**
     * Adds global dom event listeners for mobile related events like rotate, swipe, tap
     * @default true
     * @memberOf! module:Neo
     * @name config.useTouchEvents
     * @type Boolean
     */
    useTouchEvents: true
};

Object.assign(DefaultConfig, {
    /**
     * Path to the top level neo.mjs resources folder
     * @default Neo.config.basePath + 'resources/'
     * @memberOf! module:Neo
     * @name config.resourcesPath
     * @type String
     */
    resourcesPath: (Neo.config.basePath || DefaultConfig.basePath) + 'resources/',
    /**
     * The default base URL for web worker entry points (App, Data, Vdom)
     * @default Neo.config.basePath + 'src/worker/'
     * @memberOf! module:Neo
     * @name config.workerBasePath
     * @type String
     */
    workerBasePath: (Neo.config.basePath || DefaultConfig.basePath) + 'src/worker/'
});



/***/ }),

/***/ "./node_modules/neo.mjs/src/Neo.mjs":
/*!******************************************!*\
  !*** ./node_modules/neo.mjs/src/Neo.mjs ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Neo; });
/* harmony import */ var _DefaultConfig_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultConfig.mjs */ "./node_modules/neo.mjs/src/DefaultConfig.mjs");


const configSymbol = Symbol.for('configSymbol'),
      getSetCache  = Symbol('getSetCache');

/**
 * The base module to enhance classes, create instances and the Neo namespace
 * @module Neo
 * @singleton
 * @borrows Neo.core.Util.capitalize        as capitalize
 * @borrows Neo.core.Util.createStyleObject as createStyleObject
 * @borrows Neo.core.Util.createStyles      as createStyles
 * @borrows Neo.core.Util.decamel           as decamel
 * @borrows Neo.core.Util.isArray           as isArray
 * @borrows Neo.core.Util.isBoolean         as isBoolean
 * @borrows Neo.core.Util.isDefined         as isDefined
 * @borrows Neo.core.Util.isNumber          as isNumber
 * @borrows Neo.core.Util.isObject          as isObject
 * @borrows Neo.core.Util.isString          as isString
 * @borrows Neo.core.Util.toArray           as toArray
 * @tutorial 01_Concept
 */
let Neo = self.Neo || {};

Neo = self.Neo = Object.assign({
    /**
     * A map containing ntypes as key and Neo classes or singletons as values
     * @memberOf! module:Neo
     * @protected
     * @type Object
     */
    ntypeMap: {},
    /**
     * Needed for Neo.create. False for the main thread, true for the App, Data & Vdom worker
     * @memberOf! module:Neo
     * @protected
     * @type Boolean
     */
    insideWorker: typeof DedicatedWorkerGlobalScope !== 'undefined' || typeof WorkerGlobalScope !== 'undefined',

    /**
     * Internally used at the end of each class / module definition
     * @memberOf module:Neo
     * @param {Neo.core.Base} cls The Neo class to apply configs to
     * @protected
     * @tutorial 02_ClassSystem
     */
    applyClassConfig(cls) {
        let baseCfg       = null,
            baseStaticCfg = null,
            config        = {},
            proto         = cls.prototype || cls,
            protos        = [],
            staticConfig  = {},
            ctor;

        while (proto.__proto__) {
            ctor = proto.constructor;

            if (ctor.hasOwnProperty('classConfigApplied')) {
                baseCfg       = Neo.clone(ctor.config, true);
                baseStaticCfg = Neo.clone(ctor.staticConfig, true);
                break;
            }

            protos.unshift(proto);
            proto = proto.__proto__;
        }

        config       = baseCfg       ? baseCfg       : config;
        staticConfig = baseStaticCfg ? baseStaticCfg : staticConfig;

        protos.forEach(element => {
            ctor = element.constructor;
            let cfg       = ctor.getConfig       && ctor.getConfig()       || {},
                staticCfg = ctor.getStaticConfig && ctor.getStaticConfig() || {},
                mixins;

            if (cfg) {
                Object.entries(cfg).forEach(([key, value]) => {
                    if (key.slice(-1) === '_') {
                        delete cfg[key];
                        key = key.slice(0, -1);
                        cfg[key] = value;
                        autoGenerateGetSet(element, key);
                    }

                    // only apply properties which have no setters inside the prototype chain
                    // those will get applied on create (Neo.core.Base -> initConfig)
                    else if (!hasPropertySetter(element, key)) {
                        Object.defineProperty(element, key, {
                            enumerable: true,
                            value     : value,
                            writable  : true
                        });
                    }
                });
            }

            Object.assign(ctor, staticCfg);

            if (cfg.hasOwnProperty('ntype')) {
                Neo.ntypeMap[cfg.ntype] = cfg.className;
            }

            mixins = config.hasOwnProperty('mixins') && config.mixins || [];

            if (staticCfg && staticCfg.observable) {
                mixins.push('Neo.core.Observable');
            }

            if (cfg.hasOwnProperty('mixins') && Array.isArray(cfg.mixins) && cfg.mixins.length > 0) {
                mixins.push(...cfg.mixins);
            }

            if (mixins.length) {
                applyMixins(ctor, mixins);
            }

            delete cfg.mixins;
            delete config.mixins;

            Object.assign(config, cfg);
            Object.assign(staticConfig, staticCfg);

            Object.assign(ctor, {
                classConfigApplied: true,
                config            : Neo.clone(config, true),
                isClass           : true,
                staticConfig      : Neo.clone(staticConfig, true)
            });

            delete ctor.getConfig;
            delete ctor.getStaticConfig;

            if (!config.singleton) {
                this.applyToGlobalNs(cls);
            }
        });
    },

    /**
     * Maps methods from one namespace to another one
     * @example
     * // aliases
     * Neo.applyFromNs(Neo, Util, {
     *     createStyleObject: 'createStyleObject',
     *     createStyles     : 'createStyles',
     *     capitalize       : 'capitalize',
     *     decamel          : 'decamel',
     *     isArray          : 'isArray',
     *     isBoolean        : 'isBoolean',
     *     isDefined        : 'isDefined',
     *     isNumber         : 'isNumber',
     *     isObject         : 'isObject',
     *     isString         : 'isString',
     *     toArray          : 'toArray'
     * }, true);
     *
     * // e.g. Neo.core.Util.isObject => Neo.isObject
     * @memberOf module:Neo
     * @param {Neo|Neo.core.Base} target The target class or singleton Instance or Neo
     * @param {Neo.core.Base} namespace The class containing the methods
     * @param {Object} config
     * @param {Boolean} [bind] set this to true in case you want to bind methods to the "from" namespace
     * @returns {Object} target
     */
    applyFromNs(target, namespace, config, bind) {
        let fnName;

        if (target && config && typeof config === 'object') {
            Object.entries(config).forEach(([key, value]) => {
                fnName = namespace[value];
                target[key] = bind ? fnName.bind(namespace) : fnName;
            });
        }

        return target;
    },

    /**
     * Maps a class to the global Neo or App namespace.
     * Can get called for classes and singleton instances
     * @memberOf module:Neo
     * @param {Neo.core.Base} cls
     */
    applyToGlobalNs(cls) {
        let proto = typeof cls === 'function' ? cls.prototype: cls,
            className, nsArray, key, ns;

        if (proto.constructor.registerToGlobalNs === true) {
            className = proto.isClass ? proto.config.className : proto.className;

            nsArray = className.split('.');
            key     = nsArray.pop();
            ns      = Neo.ns(nsArray, true);
            ns[key] = cls;
        }
    },

    /**
     * Copies all keys of defaults into target, in case they don't already exist
     * @memberOf module:Neo
     * @param {Object} target The target object
     * @param {Object} defaults The object containing the keys you want to copy
     * @returns {Object} target
     */
    assignDefaults(target, defaults) {
        if (target && defaults && typeof defaults === 'object') {
            Object.entries(defaults).forEach(([key, value]) => {
                if (!target.hasOwnProperty(key)) {
                    target[key] = value;
                }
            });
        }

        return target;
    },

    /**
     * @memberOf module:Neo
     * @param {Object|Array|*} obj
     * @param {Boolean} [deep=false] Set this to true in case you want to clone nested objects as well
     * @param {Boolean} [ignoreNeoInstances=false] returns existing instances if set to true
     * @returns {Object|Array|*} the cloned input
     */
    clone(obj, deep=false, ignoreNeoInstances=false) {
        let out;

        if (Array.isArray(obj)) {
            return !deep ? [...obj] : [...obj.map(val => Neo.clone(val, deep, ignoreNeoInstances))];
        }

        if (obj !== null && typeof obj === 'object') {
            if (obj.constructor.isClass && obj instanceof Neo.core.Base) {
                return ignoreNeoInstances ? obj : this.cloneNeoInstance(obj);
            } else if(obj.constructor.isClass) {
                return obj;
            } else if (obj instanceof Date) {
                obj = new Date(obj.valueOf());
            } else if (obj instanceof Map) {
                obj = new Map(obj); // shallow copy
            } else {
                out = {};

                Object.entries(obj).forEach(([key, value]) => {
                    out[key] = !deep ? value : Neo.clone(value, deep, ignoreNeoInstances);
                });

                return out;
            }
        }

        return obj; // return all other data types
    },

    /**
     * Creates a new instance using the originalConfig without the id
     * @memberOf module:Neo
     * @param {Neo.core.Base} instance
     * @returns {Neo.core.Base} the cloned instance
     */
    cloneNeoInstance(instance) {
        let config = {...instance.originalConfig};

        delete config._id;
        delete config.id;

        return Neo.create(instance.className, config);
    },

    /**
     * Use Neo.create() instead of "new" to create instances of all Neo classes
     * @example
     * import Button from '../button/Base.mjs';
     *
     * Neo.create(Button, {
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * import Button from '../button/Base.mjs';
     *
     * Neo.create({
     *     module : Button,
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * Neo.create('Neo.button.Base' {
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * Neo.create({
     *     className: 'Neo.button.Base',
     *     iconCls  : 'fa fa-home',
     *     text     : 'Home'
     * });
     * @memberOf module:Neo
     * @param {String|Object|Neo.core.Base} className
     * @param {Object} [config]
     * @returns {Neo.core.Base|null} The new class instance
     * @tutorial 02_ClassSystem
     */
    create(className, config) {
        let cls, instance;

        if (typeof className === 'function' && undefined !== className.constructor) {
            cls = className;
        } else {
            if (typeof className === 'object') {
                config = className;

                if (!config.className && !config.module) {
                    // using console.error instead of throw to show the config object
                    console.error('Class created with object configuration missing className or module property', config);
                    return null;
                }

                className = config.className ? config.className : config.module.prototype.className;
            }

            if (!exists(className)) {
                throw new Error('Class ' + className + ' does not exist');
            }

            cls = Neo.ns(className);
        }

        instance = new cls(config);

        instance.onConstructed();
        instance.init();

        return instance;
    },

    emptyFn() {},

    /**
     * Maps a className string into a global namespace
     * @example
     * Neo.ns('Neo.button.Base', true);
     * // =>
     * // self.Neo = self.Neo || {};
     * // self.Neo.component = self.Neo.component || {};
     * // self.Neo.button.Base = self.Neo.button.Base || {};
     * // return self.Neo.button.Base;
     *
     * @memberOf module:Neo
     * @param {Array|String} names The class name string containing dots or an Array of the string parts
     * @param {Boolean} [create] Set create to true to create empty objects for non existing parts
     * @param {Object} [scope] Set a different starting point as self
     * @returns {Object} reference to the toplevel namespace
     */
    ns(names, create, scope) {
        names = Array.isArray(names) ? names : names.split('.');

        return names.reduce((prev, current) => {
            if (create && !prev[current]) {
                prev[current] = {};
            }
            if (prev) {
                return prev[current];
            }
        }, scope || self);
    },

    /**
     * Creates instances of Neo classes using their ntype instead of the class name
     * @example
     * Neo.ntype('button' {
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * Neo.ntype({
     *     ntype  : 'button',
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @memberOf module:Neo
     * @param {String|Object} ntype
     * @param {Object} [config]
     * @returns {Neo.core.Base}
     * @see {@link module:Neo.create create}
     */
    ntype(ntype, config) {
        if (typeof ntype === 'object') {
            config = ntype;
            if (!config.ntype) {
                throw new Error('Class defined with object configuration missing ntype property. ' + config.ntype);
            }
            ntype = config.ntype;
        }

        let className = Neo.ntypeMap[ntype];

        if (!className) {
            throw new Error('ntype ' + ntype + ' does not exist');
        }
        return Neo.create(className, config);
    }
}, Neo);

/**
 * List of class properties which are not supposed to get mixed into other classes
 * @type {string[]}
 * @private
 */
const ignoreMixin = [
    '_name',
    'classConfigApplied',
    'className',
    'constructor',
    'isClass',
    'mixin',
    'ntype',
    'observable',
    'registerToGlobalNs'
];

/**
 *
 * @param {Neo.core.Base} cls
 * @param {Array} mixins
 * @private
 */
function applyMixins(cls, mixins) {
    if (!Array.isArray(mixins)) {
        mixins = [mixins];
    }

    let i            = 0,
        len          = mixins.length,
        mixinClasses = {},
        mixin, mixinCls, mixinProto;

    for (;i < len;i++) {
        mixin = mixins[i];

        if (mixin.isClass) {
            mixinProto = mixin.prototype;
            mixinCls   = Neo.ns(mixinProto.className);
        } else {
            if (!exists(mixin)) {
                throw new Error('Attempting to mixin an undefined class: ' + mixin + ', ' + cls.prototype.className);
            }
            mixinCls   = Neo.ns(mixin);
            mixinProto = mixinCls.prototype;
        }

        mixinProto.className.split('.').reduce(mixReduce(mixinCls), mixinClasses);

        Object.getOwnPropertyNames(mixinProto).forEach(mixinProperty(cls.prototype, mixinProto));
    }

    cls.prototype.mixins = mixinClasses; // todo: we should do a deep merge
}

/**
 * Creates get / set methods for class configs ending with an underscore
 * @param {Neo.core.Base} proto
 * @param {String} key
 * @private
 * @tutorial 02_ClassSystem
 */
function autoGenerateGetSet(proto, key) {
    if (hasPropertySetter(proto, key)) {
        throw('Config ' + key + '_ (' + proto.className + ') already has a set method, use beforeGet, beforeSet & afterSet instead');
    }

    if (!Neo[getSetCache]) {
        Neo[getSetCache] = {};
    }

    if (!Neo[getSetCache][key]) {
        Neo[getSetCache][key] = {
            get() {
                let me        = this,
                    beforeGet = 'beforeGet' + Neo.capitalize(key),
                    hasNewKey = me[configSymbol].hasOwnProperty(key),
                    newKey    = me[configSymbol][key],
                    value     = hasNewKey ? newKey : me['_' + key];

                if (Array.isArray(value)) {
                    if (key !== 'items') {
                        value = [...value];
                    }
                } else if (value instanceof Date) {
                    value = new Date(value.valueOf());
                }

                if (hasNewKey) {
                    me[key] = value; // we do want to trigger the setter => beforeSet, afterSet
                    value = me['_' + key]; // return the value parsed by the setter
                }

                if (typeof me[beforeGet] === 'function') {
                    value = me[beforeGet](value);
                }

                return value;
            },

            set(value) {
                let me        = this,
                    _key      = '_' + key,
                    uKey      = Neo.capitalize(key),
                    beforeSet = 'beforeSet' + uKey,
                    afterSet  = 'afterSet'  + uKey,
                    oldValue  = me[_key];

                // every set call has to delete the matching symbol
                delete me[configSymbol][key];

                if (key !== 'items') {
                    value = Neo.clone(value, true, true);
                }

                // we do want to store the value before the beforeSet modification as well,
                // since it could get pulled by other beforeSet methods of different configs
                me[_key] = value;

                if (typeof me[beforeSet] === 'function') {
                    value = me[beforeSet](value, oldValue);

                    // If they don't return a value, that means no change
                    if (value === undefined) {
                        me[_key] = oldValue;
                        return;
                    }

                    me[_key] = value;
                }

                if (hasChanged(value, oldValue)) {
                    if (typeof me[afterSet] === 'function') {
                        me[afterSet](value, oldValue);
                    }
                }
            }
        };
    }

    Object.defineProperty(proto, key, Neo[getSetCache][key]);
}

/**
 * Checks if the class name exists inside the Neo or app namespace
 * @param {String} className
 * @returns {Boolean}
 * @private
 */
function exists(className) {
    try {
        return !!className.split('.').reduce((prev, current) => {
            return prev[current];
        }, self);
    } catch(e) {
        return false;
    }
}

/**
 * Checks if the value of a config has changed
 * todo: we could compare objects & arrays for equality
 * @param {*} value
 * @param {*} oldValue
 * @returns {Boolean}
 * @private
 */
function hasChanged(value, oldValue) {
    if (Array.isArray(value)) {
        return true;
    } else if (Neo.isObject(value)) {
        if (oldValue instanceof Date && value instanceof Date) {
            return oldValue.valueOf() !== value.valueOf();
        }

        return true;
    }

    return oldValue !== value;
}

/**
 * Checks if there is a set method for a given property key inside the prototype chain
 * @param {Neo.core.Base} proto The top level prototype of a class
 * @param {String} key the property key to test
 * @returns {Boolean}
 * @private
 */
function hasPropertySetter(proto, key) {
    let descriptor;

    while (proto.__proto__) {
        descriptor = Object.getOwnPropertyDescriptor(proto, key);

        if (typeof descriptor === 'object' && typeof descriptor.set === 'function') {
            return true;
        }
        proto = proto.__proto__;
    }

    return false;
}

/**
 *
 * @param {Neo.core.Base} proto
 * @param {Neo.core.Base} mixinProto
 * @returns {Function}
 * @private
 */
function mixinProperty(proto, mixinProto) {
    return function(key) {
        if (~ignoreMixin.indexOf(key)) {
            return;
        }
        if (proto[key] && proto[key]._from) {
            if (mixinProto.className === proto[key]._from) {
                console.warn('Mixin set multiple times or already defined on a Base Class', proto.className, mixinProto.className, key);
                return;
            }
            throw new Error(
                proto.className + ': Multiple mixins defining same property (' +
                mixinProto.className + ', ' +
                proto[key]._from + ') => ' +
                key
            );
        }

        proto[key] = mixinProto[key];

        Object.getOwnPropertyDescriptor(proto, key)._from = mixinProto.className;

        if (typeof proto[key] === 'function') {
            proto[key]._name = key;
        }
    };
}

/**
 *
 * @param mixinCls
 * @returns {Function}
 * @private
 */
function mixReduce(mixinCls) {
    return (prev, current, idx, arr) => {
        return prev[current] = idx !== arr.length -1 ? prev[current] || {} : mixinCls;
    };
}

Neo.config = Neo.config || {};

Neo.assignDefaults(Neo.config, _DefaultConfig_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/neo.mjs/src/collection/Base.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/collection/Base.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _Filter_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filter.mjs */ "./node_modules/neo.mjs/src/collection/Filter.mjs");
/* harmony import */ var _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Logger.mjs */ "./node_modules/neo.mjs/src/core/Logger.mjs");
/* harmony import */ var _Sorter_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sorter.mjs */ "./node_modules/neo.mjs/src/collection/Sorter.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony import */ var _core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Util.mjs */ "./node_modules/neo.mjs/src/core/Util.mjs");







const countMutations   = Symbol('countMutations'),
      isFiltered       = Symbol('isFiltered'),
      isSorted         = Symbol('isSorted'),
      silentUpdateMode = Symbol('silentUpdateMode'),
      toAddArray       = Symbol('toAddArray'),
      toRemoveArray    = Symbol('toRemoveArray'),
      updatingIndex    = Symbol('updatingIndex');

/**
 * @class Neo.collection.Base
 * @extends Neo.core.Base
 */
class Base extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.collection.Base'
         * @protected
         */
        className: 'Neo.collection.Base',
        /**
         * @member {String} ntype='collection'
         * @protected
         */
        ntype: 'collection',
        /**
         * When filtering the collection for the first time, allItems will become a new collection for the unfiltered
         * state, using this id as the sourceCollectionId
         * @member {Neo.collection.Base|null} allItems
         * @protected
         */
        allItems: null,
        /**
         * True to sort the collection items when adding / inserting new ones
         * @member {Boolean} autoSort
         */
        autoSort: true,
        /**
         * Use 'primitive' for default filters, use 'advanced' for filters using a filterBy method
         * which need to iterate over other collection items
         * @member {String} filterMode='primitive'
         */
        filterMode: 'primitive',
        /**
         * An Array containing Neo.util.Filter config objects or instances
         * @member {Array} filters_=[]
         */
        filters_: [],
        /**
         * The unique(!) key property of each collection item
         * @member {Array} items_=[]
         */
        items_: [],
        /**
         * The unique(!) key property of each collection item
         * @member {string} keyProperty='id'
         */
        keyProperty: 'id',
        /**
         * A map containing the key & reference of each collection item for faster access
         * @member {Map} map_=null
         */
        map_: null,
        /**
         * An internal Array of the sort directions for faster access
         * @member {Array} sortDirections=null
         * @protected
         */
        sortDirections: null,
        /**
         * An internal Array of the sort properties for faster access
         * @member {Array} sortProperties=null
         * @protected
         */
        sortProperties: null,
        /**
         * An Array containing Neo.util.Sorter config objects or instances
         * @member {Array} sorters_=[]
         */
        sorters_: [],
        /**
         * The id of another collection instance to use as this data source
         * @member {String|null} sourceId_=null
         */
        sourceId_: null
    }}

    /**
     *
     * @param config
     */
    constructor(config) {
        super(config);

        let me           = this,
            symbolConfig = {enumerable: false, writable: true};

        Object.defineProperties(me, {
            [countMutations]  : {...symbolConfig, value: false},
            [isFiltered]      : {...symbolConfig, value: false},
            [isSorted]        : {...symbolConfig, value: false},
            [silentUpdateMode]: {...symbolConfig, value: false},
            [toAddArray]      : {...symbolConfig, value: []},
            [toRemoveArray]   : {...symbolConfig, value: []},
            [updatingIndex]   : {...symbolConfig, value: 0}
        });

        if (me.autoSort && me._sorters.length > 0) {
            me.doSort();
        }
    }

    /**
     * Adds one or more items to the end of the collection and returns the new length of the collection.
     * @param {Array|Object} item The item(s) to add
     * @returns {Number} the collection count
     */
    add(item) {
        this.splice(0, null, item);
        return this.getCount();
    }

    /**
     *
     * @param {Array} value
     * @param {Array} oldValue
     * @protected
     */
    afterSetFilters(value, oldValue) {
        let me = this;

        value.forEach(filter => {
            if (filter.listenerApplied === false) {
                filter.on('change', me.onFilterChange, me);
                filter.listenerApplied = true;
            }
        });

        if (oldValue) {
            me.filter();
        }
    }

    /**
     *
     * @param {Array} value
     * @param {Array} oldValue
     * @protected
     */
    afterSetItems(value, oldValue) {
        let me          = this,
            keyProperty = me.keyProperty,
            i           = 0,
            len         = value.length,
            item;

        for (; i < len; i++) {
            item = value[i];
            me.map.set(item[keyProperty], item);
        }
    }

    /**
     *
     * @param {Array} value
     * @param {Array} oldValue
     * @protected
     */
    afterSetSorters(value, oldValue) {
        let me = this;

        me.applySorterConfigs();

        value.forEach(sorter => {
            if (sorter.listenerApplied === false) {
                sorter.on('change', me.onSorterChange, me);
                sorter.listenerApplied = true;
            }
        });

        if (oldValue && me.autoSort) {
            me.doSort();
        }
    }

    /**
     *
     * @param {Number|String} value
     * @param {Number|String} oldValue
     * @protected
     */
    afterSetSourceId(value, oldValue) {
        if (value) {
            let me     = this,
                source = Neo.get(value);

            me._items = [...source._items];
            me.map    = new Map(source.map); // creates a clone of the original map

            const listenersConfig = {
                mutate: me.onMutate,
                scope : me
            };

            source.on(listenersConfig);

            // console.log('afterSetSourceId', source);

            if (oldValue) {
                source = Neo.get(oldValue);
                source.un(listenersConfig); // todo: core.Observable.un needs to support this syntax
            }
        }
    }

    /**
     * Saves the sort property & direction multiplier of each sorter inside 2 arrays for faster access when sorting
     * @protected
     */
    applySorterConfigs() {
        let me = this;

        me.sortDirections = [];
        me.sortProperties = [];

        me.sorters.forEach(sorter => {//console.log('forEach', sorter);
            me.sortDirections.push(sorter.directionMultiplier);
            me.sortProperties.push(sorter.property);
        });
    }

    /**
     *
     * @param {Map|null} value
     * @param {Map|null} oldValue
     * @protected
     */
    beforeSetMap(value, oldValue) {
        return !value ? new Map() : value;
    }

    /**
     *
     * @param {Array} value
     * @param {Array} oldValue
     * @protected
     */
    beforeSetFilters(value, oldValue) {
        if (!Array.isArray(value)) {
            value = value ? [value] : [];
        }

        let len = oldValue && oldValue.length || 0,
            hasMatch, i;

        value.forEach((key, index) => {
            if (oldValue) {
                hasMatch = false;
                i        = 0;

                for (; i < len; i++) {
                    if (oldValue[i] === key) {
                        oldValue[i].set({
                            operator: key.operator,
                            property: key.property,
                            value   : key.value
                        });

                        hasMatch = true;
                        break;
                    } else if (
                        oldValue[i].operator === (key.operator || '===') &&
                        oldValue[i].property === key.property &&
                        oldValue[i].value    === key.value
                    ) {
                        hasMatch = true;
                        break;
                    }
                }
            }

            if (!hasMatch) {
                value[index] = Neo.create(_Filter_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], key);
            } else {
                value[index] = oldValue[i];
                oldValue.splice(i, 1);
                len--;
            }
        });

        if (Array.isArray(oldValue)) {
            oldValue.forEach(key => {
                key.destroy();
            });
        }

        return value;
    }

    /**
     *
     * @param {Array} value
     * @param {Array} oldValue
     * @protected
     */
    beforeSetSorters(value, oldValue) {
        if (!Array.isArray(value)) {
            value = value ? [value] : [];
        }

        let len = oldValue && oldValue.length || 0,
            hasMatch, i;

        value.forEach((key, index) => {
            if (oldValue) {
                hasMatch = false;
                i        = 0;

                for (; i < len; i++) {
                    if (oldValue[i] === key) {
                        oldValue[i].set({
                            direction: key.direction,
                            property : key.property
                        });

                        hasMatch = true;
                        break;
                    } else if (oldValue[i].property === key.property && oldValue[i].direction === key.direction) {
                        hasMatch = true;
                        break;
                    }
                }
            }

            if (!hasMatch) {
                value[index] = Neo.create(_Sorter_mjs__WEBPACK_IMPORTED_MODULE_3__["default"], key);
            } else {
                value[index] = oldValue[i];
                oldValue.splice(i, 1);
                len--;
            }
        });

        if (Array.isArray(oldValue)) {
            oldValue.forEach(key => {
                key.destroy();
            });
        }

        return value;
    }

    /**
     *
     * @param opts
     * @protected
     */
    cacheUpdate(opts) {
        console.log('cacheUpdate', opts, this[toAddArray]);return;

        let me          = this,
            keyProperty = me.keyProperty,
            index, toAddMap, toRemoveMap;

        if (!me[silentUpdateMode]) {
            toAddMap    = me[toAddArray]   .map(e => e[keyProperty]);
            toRemoveMap = me[toRemoveArray].map(e => e[keyProperty]);

            opts.addedItems.forEach(item => {
                if (index = toRemoveMap.indexOf(item[keyProperty]) > - 1) {
                    me[toRemoveArray].splice(index, 1);
                } else if (toAddMap.indexOf(item[keyProperty]) < 0) {
                    me[toAddArray].push(item);
                }
            });

            opts.removedItems.forEach(item => {
                if (index = toAddMap.indexOf(item[keyProperty]) > - 1) {
                    me[toAddArray].splice(index, 1);
                } else if (toRemoveMap.indexOf(item[keyProperty]) < 0) {
                    me[toRemoveArray].push(item);
                }
            });
        }
    }

    /**
     * Removes all items and clears the map
     */
    clear() {
        let me = this;

        me._items.splice(0, me.getCount());
        me.map.clear();
    }

    /**
     * Clears all current filters and optionally restores the original ones in case they existed.
     * @param {boolean} [restoreOriginalFilters=false]
     */
    clearFilters(restoreOriginalFilters) {
        this.filters = restoreOriginalFilters ? Neo.clone(this.originalConfig.filters, true, true) : null;
    }

    /**
     * Clears all current sorters and optionally restores the original ones in case they existed.
     * Without restoreInitialState as true this will not affect the current sorting of this collection.
     * @param {boolean} [restoreOriginalSorters=false]
     */
    clearSorters(restoreOriginalSorters) {
        this.sorters = restoreOriginalSorters ? Neo.clone(this.originalConfig.sorters, true, true) : null;
    }

    /**
     *
     * @returns {Neo.collection.Base} The cloned collection
     */
    clone() {
        let me      = this,
            config  = Neo.clone(me.originalConfig, true),
            filters = me._filters || [],
            sorters = me._sorters || [];

        delete config.id;
        delete config.filters;
        delete config.items;
        delete config.sorters;

        if (me._items.length > 0) {
            config.items = [...me._items];
        }

        config.filters = [];
        config.sorters = [];

        // todo: filters & sorters should push their current state and not the original one

        filters.forEach(function(filter) {
            config.filters.push(filter.originalConfig);
        });

        sorters.forEach(function(sorter) {
            config.sorters.push(sorter.originalConfig);
        });

        return Neo.create(Base, config);
    }

    /**
     * Clears the map & items array before the super call
     */
    destroy() {
        let me = this;

        me.items.splice(0, me._items.length);
        me.map.clear();

        super.destroy();
    }

    /**
     * @protected
     */
    doSort() {
        let me                = this,
            items             = me._items,
            sorters           = me.sorters,
            sortDirections    = me.sortDirections,
            sortProperties    = me.sortProperties,
            countSorters      = sortProperties.length || 0,
            hasSortByMethod   = false,
            hasTransformValue = false,
            i, mappedItems, obj, sorter, sortProperty, sortValue;

        if (countSorters > 0) {
            sorters.forEach(key => {
                if (key.sortBy) {
                    hasSortByMethod = true;
                }

                if (key.useTransformValue) {
                    hasTransformValue = true;
                }
            });

            if (hasSortByMethod) {
                me._items.sort((a, b) => {
                    i = 0;

                    for (; i < countSorters; i++) {
                        sorter    = sorters[i];
                        sortValue = sorter[sorter.sortBy ? 'sortBy' : 'defaultSortBy'](a, b);

                        if (sortValue !== 0) {
                            return sortValue;
                        }
                    }

                    return 0;
                });
            } else {
                if (hasTransformValue) {
                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Sorting_with_map
                    mappedItems = items.map((item, index) => {
                        obj = {index: index};
                        i   = 0;

                        for (; i < countSorters; i++) {
                            if (sorters[i].useTransformValue) {
                                obj[sortProperties[i]] = sorters[i].transformValue(item[sortProperties[i]]);
                            } else {
                                obj[sortProperties[i]] = item[sortProperties[i]];
                            }
                        }

                        return obj;
                    });
                } else {
                    mappedItems = items;
                }

                mappedItems.sort((a, b) => {
                    i = 0;

                    for (; i < countSorters; i++) {
                        sortProperty = sortProperties[i];

                        if (a[sortProperty] > b[sortProperty]) {
                            return 1 * sortDirections[i];
                        }

                        if (a[sortProperty] < b[sortProperty]) {
                            return -1 * sortDirections[i];
                        }
                    }

                    return 0;
                });

                if (hasTransformValue) {
                    me._items = mappedItems.map(el => {
                        return items[el.index];
                    });
                }
            }
        }

        me[isSorted] = countSorters > 0;

        if (me[updatingIndex] === 0) {
            me.fire('sort');
        }
    }

    /**
     * Resumes the collection events.
     * If you started an update using the startSilentUpdateMode flag,
     * you must use the endSilentUpdateMode param for this call.
     * Using the endSilentUpdateMode param will not fire a mutation event.
     * @param {Boolean} [endSilentUpdateMode]
     * @see {@link Neo.collection.Base#startUpdate startUpdate}
     */
    endUpdate(endSilentUpdateMode) {
        const me = this;

        if (me[updatingIndex] > 0) {
            me[updatingIndex]--;
        }

        if (endSilentUpdateMode) {
            me[silentUpdateMode] = false;
        } else {
            me.fire('mutate', {
                addedItems  : me[toAddArray],
                removedItems: me[toRemoveArray]
            });

            me[toAddArray]   .splice(0, me[toAddArray]   .length);
            me[toRemoveArray].splice(0, me[toRemoveArray].length);
        }
    }

    /**
     * @protected
     */
    filter() {
        let me              = this,
            filters         = me._filters,
            countAllFilters = filters.length,
            countFilters    = 0,
            items           = me.allItems && me.allItems._items || me._items,
            i               = 0,
            countItems      = items.length,
            filteredItems   = [],
            config, isIncluded, item, j, tmpItems;

        for (; i < countAllFilters; i++) {
            if (!filters[i].disabled) {
                countFilters++;
            }
        }

        if (countFilters === 0 && me.allItems) {
            me.clear();

            me.items = [...me.allItems._items];
            me.map.set(...me.allItems.map);
        } else {
            if (!me.allItems) {
                config = {...me.originalConfig};

                delete config.filters;
                delete config.items;
                delete config.sorters;

                me.allItems = Neo.create(Base, {
                    ...Neo.clone(config, true, true),
                    keyProperty: me.keyProperty,
                    sourceId   : me.id
                });

                // console.log('child collection', me.allItems);
            }

            me.map.clear();

            if (me.filterMode === 'primitive') {
                // using for loops on purpose -> performance
                for (i = 0; i < countItems; i++) {
                    isIncluded = true;
                    item       = items[i];
                    j          = 0;

                    for (; j < countAllFilters; j++) {
                        if (filters[j].isFiltered(item, items, items)) {
                            isIncluded = false;
                            break;
                        }
                    }

                    if (isIncluded) {
                        filteredItems.push(item);
                        me.map.set(item[me.keyProperty], item);
                    }
                }

                me._items = filteredItems; // silent update, the map is already in place
            } else {
                filteredItems = [...items];

                for (j=0; j < countAllFilters; j++) {
                    tmpItems = [];

                    for (i = 0; i < countItems; i++) {
                        if (!filters[j].isFiltered(filteredItems[i], filteredItems, items)) {
                            tmpItems.push(filteredItems[i]);
                        }
                    }

                    filteredItems = [...tmpItems];
                    countItems    = filteredItems.length;
                }

                me.items = filteredItems; // update the map
            }
        }

        me[isFiltered] = countFilters !== 0;

        me.fire('filter');
    }

    /**
     * Returns all items which match the property and value
     * @param {Object|String} property
     * @param {String|Number} value
     * @returns {Array} Returns an empty Array in case no items are found
     */
    find(property, value) {
        let me               = this,
            items            = [],
            isObjectProperty = Neo.isObject(property),
            matchArray, propertiesArray, propertiesLength;

        if (isObjectProperty) {
            propertiesArray  = Object.entries(property);
            propertiesLength = propertiesArray.length;
        }

        me.items.forEach(item => {
            if (isObjectProperty) {
                matchArray = [];

                propertiesArray.forEach(([key, value]) => {
                    if (item[key] === value) {
                        matchArray.push(true);
                    }
                });

                if (matchArray.length === propertiesLength) {
                    items.push(item);
                }
            }
            else if (item[property] === value) {
                items.push(item);
            }
        });

        return items;
    }

    /**
     * Returns all items in the collection for which the passed function returns true
     * @param {function} fn The function to run for each item inside the start-end range. Return true for a match.
     * @param {Object} fn.item The current collection item
     * @param {Object} [scope=this] The scope in which the passed function gets executed
     * @param {Number} [start=0] The start index
     * @param {Number} [end=this.getCount()] The end index (up to, last value excluded)
     * @returns {Array} Returns an empty Array in case no items are found
     */
    findBy(fn, scope, start, end) {
        let me    = this,
            items = [],
            i     = start || 0,
            len   = end   || me.getCount();

        scope = scope || me;

        for (; i < len; i++) {
            if (fn.call(scope, me.items[i])) {
                items.push(me.items[i]);
            }
        }

        return items;
    }

    /**
     * Returns the first item inside the collection
     * @returns {Object}
     */
    first() {
        return this._items[0];
    }

    /**
     * Returns the object associated to the key, or undefined if there is none.
     * @param key
     * @returns {Object|undefined}
     */
    get(key) {
        return this.map.get(key);
    }

    /**
     * Returns the item for a given index
     * @param {Number} index
     * @returns {Object|undefined}
     */
    getAt(index) {
        return this._items[index];
    }

    /**
     * Returns the length of the internal items array
     * @returns {Number}
     */
    getCount() {
        return this._items.length;
    }

    /**
     *
     * @returns {Number}
     */
    getCountMutations() {
        return this[countMutations];
    }

    /**
     * Returns the first matching filter for the given property config
     * @param {String} property
     * @returns {Neo.collection.Filter|null}
     */
    getFilter(property) {
        let filters = this.filters || [],
            i       = 0,
            len     = filters.length;

        for (; i < len; i++) {
            if (filters[i].property === property) {
                return filters[i];
            }
        }

        return null;
    }

    /**
     * Returns the key for a given index
     * @param {Number} index
     * @returns {Number|String|undefined}
     */
    getKeyAt(index) {
        let item = this._items[index];
        return item && item[this.keyProperty];
    }

    /**
     * Returns a shallow copy of a portion of the items array
     * @param {Number} [start] Zero-based index at which to begin extraction.
     * @param {Number} [end] Zero-based index before which to end extraction (extracts up to but not including end).
     * @returns {Array}
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
     */
    getRange(start, end) {
        return this._items.slice(start, end);
    }

    /**
     * Returns the Source Collection in case the sourceCollectionId config was set
     * @returns {Neo.collection.Base|undefined}
     */
    getSource() {
        return this.sourceId && Neo.get(this.sourceId);
    }

    /**
     *
     * Returns a boolean asserting whether a value has been associated to the key in the Collection or not
     * @param {Number|String} key
     * @returns {Boolean}
     */
    has(key) {
        return this.map.has(key);
    }

    /**
     * Returns a boolean asserting whether an item exists in the Collection or not
     * @param {Object} item
     * @returns {Boolean}
     */
    hasItem(item) {
        return this.map.has(item[this.keyProperty]);
    }

    /**
     * Returns the index for a given key or item
     * @param {Number|String|Object} key
     * @returns {Number} index (-1 in case no match is found)
     */
    indexOf(key) {
        return this._items.indexOf(_core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].isObject(key) ? key : this.map.get(key));
    }

    /**
     * Returns the index for a given item
     * @param {Object} item
     * @returns {Number} index (-1 in case no match is found)
     */
    indexOfItem(item) {
        return this._items.indexOf(item);
    }

    /**
     * Returns the index for a given key
     * @param {Number|String} key
     * @returns {Number} index (-1 in case no match is found)
     */
    indexOfKey(key) {
        return this._items.indexOf(this.map.get(key));
    }

    /**
     * Inserts an item or an array of items at the specified index
     * @param {Number} index
     * @param {Array|Object} item
     * @returns {Number} the collection count
     */
    insert(index, item) {
        this.splice(index, 0, item);
        return this.getCount();
    }

    /**
     *
     * @returns {Boolean} true in case the collection is filtered
     */
    isFiltered() {
        return this[isFiltered];
    }

    /**
     *
     * @param {Object} item
     * @returns {boolean}
     * @protected
     */
    isFilteredItem(item) {
        let me         = this,
            filters    = me._filters,
            i          = 0,
            len        = filters.length,
            isFiltered = false;

        for (; i < len; i++) {
            if (filters[i].isFiltered(item)) {
                isFiltered = true;
                break;
            }
        }

        return isFiltered;
    }

    /**
     *
     * @returns {Boolean} true in case the collection is sorted
     */
    isSorted() {
        return this[isSorted];
    }

    /**
     * Returns the last item inside the collection
     * @returns {Object}
     */
    last() {
        return this._items[this.getCount() -1];
    }

    /**
     *
     * @param {Object} opts
     * @protected
     */
    onFilterChange(opts) {
        this.filter();
    }

    /**
     *
     * @param {Object} opts
     * @protected
     */
    onMutate(opts) {
        let me = this;

        if (opts.preventBubbleUp) {
            me.preventBubbleUp = true;
        }

        me.splice(null, opts.removedItems, opts.addedItems);

        // console.log('onMutate', me.getCount(), me.id, opts);
    }

    /**
     *
     * @param {Object} opts
     * @protected
     */
    onSorterChange(opts) {
        this.applySorterConfigs();
        this.doSort();
    }

    /**
     * Removes the last element from the items array and returns this element.
     * @returns {Object} The removed element from the collection; undefined if the collection is empty.
     */
    pop() {
        let mutation = this.splice(this.getCount() -1, 1);
        return mutation.removedItems[0];
    }

    /**
     * Adds one or more items to the end of the collection and returns the new items count
     * @param {Array|Object} item The item(s) to add
     * @returns {Number} the collection count
     */
    push(item) {
        return this.add(item);
    }

    /**
     * Removes a given key, item or Array containing keys|items
     * @param {Number|String|Object|Array} key
     * @returns {Number} the collection count
     */
    remove(key) {
        this.splice(0, Array.isArray(key) ? key : [key]);
        return this.getCount();
    }

    /**
     * Removes the item at the given index
     * @param {Number} index
     * @returns {Number} the collection count
     */
    removeAt(index) {
        this.splice(index, 1);
        return this.getCount();
    }

    /**
     * Reverses the items array in place.
     * Intended for collections without sorters.
     * @returns {Array} items
     */
    reverse() {
        return this._items.reverse();
    }

    /**
     * Removes the first element from the items array and returns this element.
     * @returns {Object} The removed element from the collection; undefined if the collection is empty.
     */
    shift() {
        let mutation = this.splice(0, 1);
        return mutation.addedItems[0];
    }

    /**
     *
     * @param {function} callback Function to test for each item, taking three parameters:
     * @param {Object}   callback.item The current collection item being processed
     * @param {Number}  [callback.index] The index of the current item being processed
     * @param {Array}   [callback.items] The items array of the collection
     *
     * @param {Object} [scope] Value to use as "this" when executing the callback
     * @returns {boolean} true if the callback function returns a truthy value for any collection item, otherwise false
     */
    some(...args) {
        return this._items.some(...args);
    }

    /**
     * Removes items from and/or adds items to this collection
     * If the toRemoveArray is used, then the index is not used for removing, the entries are found by key and removed from where they are.
     * If index is not passed, toAddArray is appended to the Collection.
     * @param {Number|null} index
     * @param {Number|Array} [removeCountOrToRemoveArray]
     * @param {Array| Object} [toAddArray]
     * @returns {Object} An object containing the addedItems & removedItems arrays
     */
    splice(index, removeCountOrToRemoveArray, toAddArray) {
        let me                 = this,
            source             = me.getSource(),
            addedItems         = [],
            items              = me._items,
            keyProperty        = me.keyProperty,
            map                = me.map,
            removedItems       = [],
            removeCountAtIndex = _core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].isNumber(removeCountOrToRemoveArray) ? removeCountOrToRemoveArray : null,
            toRemoveArray      = Array.isArray(removeCountOrToRemoveArray) ? removeCountOrToRemoveArray : null,
            i, item, key, len, toAddMap;

        if (!index && removeCountAtIndex) {
            _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].error(me.id + ': If index is not passed, removeCountAtIndex cannot be used');
        }

        toAddArray = toAddArray && !Array.isArray(toAddArray) ? [toAddArray] : toAddArray;

        if (toRemoveArray && (len = toRemoveArray.length) > 0) {
            if (toAddArray && toAddArray.length > 0) {
                toAddMap = toAddArray.map(e => e[keyProperty]);
            }

            for (i=0; i < len; i++) {
                item = toRemoveArray[i];
                key  = _core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].isObject(item) ? item[keyProperty] : item;

                if (map.has(key)) {
                    if (!toAddMap || (toAddMap && toAddMap.indexOf(key) < 0)) {
                        removedItems.push(items.splice(me.indexOfKey(key), 1)[0]);
                        map.delete(key);
                    }
                }
            }
        } else if (removeCountAtIndex && removeCountAtIndex > 0) {
            removedItems.push(...items.splice(index, removeCountAtIndex));
            removedItems.forEach(e => {
                map.delete(e[keyProperty]);
            });
        }

        if (toAddArray && (len = toAddArray.length) > 0) {
            for (i=0; i < len; i++) {
                item = toAddArray[i];
                key  = _core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].isObject(item) ? item[keyProperty] : item;

                if (!map.has(key) && !me.isFilteredItem(item)) {
                    addedItems.push(item);
                    map.set(key, item);
                }
            }

            if (addedItems.length > 0) {
                items.splice(_core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].isNumber(index) ? index : items.length, 0, ...addedItems);

                if (me.autoSort && me._sorters.length > 0) {
                    me.doSort();
                }
            }
        }

        if (source) {
            if (!source.getSource()) {
                source.preventBubbleUp = true;
            }

            if (!me.preventBubbleUp) {
                // console.log('source splice', source.id, 'added:', ...toAddArray, 'removed:', ...removedItems);
                me.startUpdate(true);
                source.splice(null, toRemoveArray || removedItems, toAddArray);
                me.endUpdate(true);
            }

            delete source.preventBubbleUp;
        }

        if (addedItems.length > 0 || removedItems.length > 0) {
            me[countMutations]++;
        }

        if(me[updatingIndex] === 0) {
            me.fire('mutate', {
                addedItems     : toAddArray,
                preventBubbleUp: me.preventBubbleUp,
                removedItems   : toRemoveArray || removedItems
            });

        } else if (!me[silentUpdateMode]) {
            me.cacheUpdate({
                addedItems  : addedItems,
                removedItems: removedItems
            });
        }

        if (me[updatingIndex] === 0) {
            delete me.preventBubbleUp;
        }

        return {
            addedItems  : addedItems,
            removedItems: removedItems
        };
    }

    /**
     * Prevents the collection from firing events until endUpdate gets called.
     * If you start an update using the startSilentUpdateMode param,
     * the mutation event will not fire after using endUpdate()
     * (you must use the endSilentUpdateMode param for the endUpdate call in case you used
     * startSilentUpdateMode here)
     * @param {Boolean} [startSilentUpdateMode]
     * @see {@link Neo.collection.Base#endUpdate endUpdate}
     */
    startUpdate(startSilentUpdateMode) {
        if (startSilentUpdateMode) {
            this[silentUpdateMode] = true;
        }

        this[updatingIndex]++;
    }

    /**
     * Adds one or more elements to the beginning of the collection and returns the new items count
     * @param {Array|Object} item The item(s) to add
     * @returns {Number} the collection count
     */
    unshift(item) {
        this.splice(0, 0, item);
        return this.getCount();
    }
}

/**
 * The mutate event fires after every splice call (invoked by all methods which change the content of the items array).
 * @event mutate
 * @param {Object[]} addedItems
 * @param {Boolean} preventBubbleUp private
 * @param {Object[]} removedItems
 * @returns {Object}
 */

Neo.applyClassConfig(Base);

/* harmony default export */ __webpack_exports__["default"] = (Base);

/***/ }),

/***/ "./node_modules/neo.mjs/src/collection/Filter.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/src/collection/Filter.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");



/**
 * @class Neo.collection.Filter
 * @extends Neo.core.Base
 */
class Filter extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true,
        /**
         * Valid values for the operator config:<br>
         * ['==', '===', '!=', '!==', '<', '<=', '>', '>=', 'excluded', 'included', 'isDefined', 'isUndefined', 'like']
         * @member {String[]} operators
         * @protected
         * @static
         */
        operators: ['==', '===', '!=', '!==', '<', '<=', '>', '>=', 'excluded', 'included', 'isDefined', 'isUndefined', 'like']
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.collection.Filter'
         * @protected
         */
        className: 'Neo.collection.Filter',
        /**
         * @member {String} ntype='filter'
         * @protected
         */
        ntype: 'filter',
        /**
         * Setting disabled to true will exclude this filter from the collection filtering logic
         * @member {Boolean} disabled_=false
         */
        disabled_: false,
        /**
         * Provide a custom filtering function, has a higher priority than property, operator & value
         * @member {Function|null} filterBy_=null
         */
        filterBy_: null,
        /**
         * True means not filtering out items in case the value is '', null, [] or {}
         * @member {Boolean} includeEmptyValues=true
         */
        includeEmptyValues: true,
        /**
         * Set this flag to true before starting bulk updates (e.g. changing property & value)
         * to prevent multiple change events
         * @member {Boolean} isUpdating_=false
         */
        isUpdating_: false,
        /**
         * The owner util.Collection needs to apply an onChange listener once
         * @member {Boolean} listenerApplied=false
         * @protected
         */
        listenerApplied: false,
        /**
         * The operator to filter by (use the combination of property, operator & value)
         * Valid values:
         *
         * == (not recommended)
         * ===
         * != (not recommended)
         * !==
         * <
         * >=
         * >
         * >=
         * like (collectionValue.toLowerCase().indexOf(filterValue.toLowerCase()) > -1)
         * included (expects value to be an array)
         * excluded (expects value to be an array)
         * @member {String} operator='==='
         */
        operator_: '===',
        /**
         * The property to filter by (use the combination of property, operator & value)
         * @member {String} property_='id'
         */
        property_: 'id',
        /**
         * The scope to use for the filterBy method, in case it is provided. Defaults to this instance.
         * @member {Object|null} scope=null
         */
        scope: null,
        /**
         * The value to filter by (use the combination of property, operator & value)
         * @member {String} value_=null
         */
        value_: null
    }}

    afterSetDisabled(...args) {
        this.fireChangeEvent(...args);
    }

    afterSetFilterBy(value, oldValue) {
        // todo
    }

    afterSetIsUpdating(value, oldValue) {
        if (value === false) {
            this.fireChangeEvent(value, oldValue);
        }
    }

    afterSetOperator(...args) {
        this.fireChangeEvent(...args);
    }

    afterSetProperty(...args) {
        this.fireChangeEvent(...args);
    }

    afterSetValue(...args) {
        this.fireChangeEvent(...args);
    }

    beforeSetFilterBy(value, oldValue) {
        if (value && typeof value !== 'function') {
            Neo.logError('filterBy has to be a function', this);
            return oldValue;
        }

        return value;
    }

    /**
     * Triggered before the operator config gets changed.
     * @param {String|null} value
     * @param {String} oldValue
     * @returns {String}
     * @protected
     */
    beforeSetOperator(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'operator');
    }

    /**
     *
     * @param value
     * @param oldValue
     */
    fireChangeEvent(value, oldValue) {
        let me = this;

        if (oldValue !== undefined && me.isUpdating !== true) {
            me.fire('change', {
                operator: me.operator,
                property: me.property,
                value   : me.value
            });
        }
    }

    /**
     * Checks if a collection item matches this filter
     * @param {Object} item The current collection item
     * @param {Array} filteredItems If the collection filterMode is not primitive contains the items which passed
     * the previous filters, otherwise all collection items
     * @param {Array} allItems all collection items
     * @returns {Boolean}
     */
    isFiltered(item, filteredItems, allItems) {
        let me = this,
            filterValue, recordValue;

        if (me._disabled) {
            return false;
        }

        if (me.includeEmptyValues && (me._value === null || Neo.isEmpty(me._value))) {
            return false;
        }

        if (me._filterBy) {
            return me.filterBy.call(me.scope || me, item, filteredItems, allItems);
        } else {
            filterValue = me._value;
            recordValue = item[me._property];

            if (filterValue instanceof Date && recordValue instanceof Date) {
                filterValue = filterValue.valueOf();
                recordValue = recordValue.valueOf();
            }

            return !Filter[me._operator](recordValue, filterValue);
        }
    }

    static ['=='] (a, b) {return a == b;}
    static ['==='](a, b) {return a === b;}
    static ['!='] (a, b) {return a != b;}
    static ['!=='](a, b) {return a !== b;}
    static ['<']  (a, b) {return a < b;}
    static ['<='] (a, b) {return a <= b;}
    static ['>']  (a, b) {return a > b;}
    static ['>='] (a, b) {return a >= b;}

    static ['excluded'](a, b) {
        return b.indexOf(a) < 0;
    }

    static ['included'](a, b) {
        return b.indexOf(a) > -1;
    }

    static ['isDefined'](a, b) {
        return a !== undefined;
    }

    static ['isUndefined'](a, b) {
        return a === undefined;
    }

    static ['like'](a, b) {
        return a.toLowerCase().includes(b.toLowerCase());
    }
}

Neo.applyClassConfig(Filter);

/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ }),

/***/ "./node_modules/neo.mjs/src/collection/Sorter.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/src/collection/Sorter.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");



/**
 * @class Neo.collection.Sorter
 * @extends Neo.core.Base
 */
class Sorter extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.collection.Sorter'
         * @protected
         */
        className: 'Neo.collection.Sorter',
        /**
         * @member {String} ntype='sorter'
         * @protected
         */
        ntype: 'sorter',
        /**
         * Internal config which mapps the direction ASC to 1, -1 otherwise
         * @member {Number} directionMultiplier=1
         * @protected
         */
        directionMultiplier: 1,
        /**
         * The sort direction when using a property.
         * @member {String} direction_='ASC'
         */
        direction_: 'ASC',
        /**
         * The owner util.Collection needs to apply an onChange listener once
         * @member {boolean} listenerApplied=false
         * @protected
         */
        listenerApplied: false,
        /**
         * The property to sort by.
         * @member {String} property_='id'
         */
        property_: 'id',
        /**
         * Provide a custom sorting function, has a higher priority than property & direction
         * @member {Function|null} sortBy=null
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator
         */
        sortBy: null,
        /**
         * True to use the transformValue method for each item (the method can get overridden)
         * @member {Boolean} useTransformValue=true
         * @protected
         */
        useTransformValue: true
    }}

    /**
     *
     * @param {String} value
     * @param {String} oldValue
     */
    afterSetDirection(value, oldValue) {
        let me = this;

        me.directionMultiplier = value === 'ASC' ? 1 : -1;

        if (oldValue) {
            me.fire('change', {
                direction: me.direction,
                property : me.property
            });
        }
    }

    /**
     *
     * @param {String} value
     * @param {String} oldValue
     */
    afterSetProperty(value, oldValue) {
        let me = this;

        if (oldValue) {
            me.fire('change', {
                direction: me.direction,
                property : me.property
            });
        }
    }

    /**
     * Default sorter function which gets used by collections in case at least one sorter has a real sortBy method
     * @param a
     * @param b
     */
    defaultSortBy(a, b) {
        let me = this;

        a = a[me.property];
        b = b[me.property];

        if (me.useTransformValue) {
            a = me.transformValue(a);
            b = me.transformValue(b);
        }

        if (a > b) {
            return 1 * me.directionMultiplier;
        }

        if (a < b) {
            return -1 * me.directionMultiplier;
        }

        return 0;
    }

    /**
     *
     * @param {*} value
     * @returns {*} value
     */
    transformValue(value) {
        if (typeof value === 'string') {
            value = value.toLowerCase();
        }

        return value;
    }
}

Neo.applyClassConfig(Sorter);

/* harmony default export */ __webpack_exports__["default"] = (Sorter);

/***/ }),

/***/ "./node_modules/neo.mjs/src/controller/Application.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/neo.mjs/src/controller/Application.mjs ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Application; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/controller/Base.mjs");


/**
 * @class Neo.controller.Application
 * @extends Neo.controller.Base
 */
class Application extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.controller.Application'
         * @protected
         */
        className: 'Neo.controller.Application',
        /**
         * @member {Boolean} createMainView=true
         */
        createMainView: true,
        /**
         * @member {Neo.component.Base} mainView_=null
         */
        mainView_: null,
        /**
         * @member {String} name='MyApp'
         */
        name: 'MyApp',
        /**
         * @member {String} parentId='document.body'
         */
        parentId: 'document.body',
        /**
         * @member {Boolean} rendered=false
         * @protected
         */
        rendered: false,
        /**
         * @member {Boolean} rendering=false
         * @protected
         */
        rendering: false
    }}

    constructor(config) {
        super(config);

        let me = this;

        Neo.apps = Neo.apps || {};

        Neo.apps[me.name] = me;

        Neo.currentWorker.registerApp(me.name);

        if (me.createMainView) {
            me.renderMainView(config);
        }
    }

    renderMainView() {
        let me    = this,
            delay = Neo.config.hash ? 200 : 10;

        me.mainViewInstance = Neo.create(me.mainView, {
            appName : me.name,
            parentId: me.parentId
        });

        Neo.currentWorker.registerMainView(me.name);

        // short delay to ensure changes from onHashChange() got applied
        setTimeout(() => {
            me.mainViewInstance.render(true);
        }, delay);
    }
}

Neo.applyClassConfig(Application);

// shortcut
Neo.app = config => Neo.create({
    module: Application,
    ...config || {}
});



/***/ }),

/***/ "./node_modules/neo.mjs/src/controller/Base.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/controller/Base.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/HashHistory.mjs */ "./node_modules/neo.mjs/src/util/HashHistory.mjs");



/**
 * @class Neo.controller.Base
 * @extends Neo.core.Base
 */
class Base extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         */
        observable: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.controller.Base'
         * @protected
         */
        className: 'Neo.controller.Base',
        /**
         * @member {String} ntype='controller'
         * @protected
         */
        ntype: 'controller'
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].on('change', this.onHashChange, this);
    }

    /**
     * Placeholder method which gets triggered when the hash inside the browser url changes
     * @param {Object} value
     * @param {Object} oldValue
     */
    onHashChange(value, oldValue) {

    }
}

Neo.applyClassConfig(Base);



/***/ }),

/***/ "./node_modules/neo.mjs/src/core/Base.mjs":
/*!************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Base.mjs ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IdGenerator.mjs */ "./node_modules/neo.mjs/src/core/IdGenerator.mjs");


const configSymbol = Symbol.for('configSymbol'),
      isInstance   = Symbol('isInstance');

/**
 * The base class for (almost) all classes inside the Neo namespace
 * Exceptions are e.g. core.IdGenerator, vdom.VNode
 * @class Neo.core.Base
 */
class Base {
    /**
     * The return value will get applied to the class constructor
     * @returns {Object} staticConfig
     * @static
     * @tutorial 02_ClassSystem
     */
    static getStaticConfig() {return {
        /**
         * Set this one to false in case you don't want to stick
         * to the "anti-pattern" to apply classes to the global Neo or App namespace
         * @member {Boolean} registerToGlobalNs=true
         * @protected
         * @static
         */
        registerToGlobalNs: true
    }}

    /**
     * The return value will get applied to each class instance
     * @returns {Object} staticConfig
     * @tutorial 02_ClassSystem
     */
    static getConfig() {return {
        /**
         * The class name which will get mapped into the Neo or app namespace
         * @member {String} className='Neo.core.Base'
         * @protected
         */
        className: 'Neo.core.Base',
        /**
         * The class shortcut-name to use for e.g. creating child components inside a JSON-format
         * @member {String} ntype='base'
         * @protected
         */
        ntype: 'base',
        /**
         * Add mixins as an array of classNames, imported modules or a mixed version
         * @member {String[]|Neo.core.Base[]|null} mixins=null
         */
        mixins: null
    }}

    /**
     * Consumes the static getConfig() object
     * Applies the observable mixin if needed, grants remote access if needed
     * @param {Object} config
     */
    constructor(config) {
        config = config || {};

        let me = this;

        Object.defineProperties(me, {
            [configSymbol]: {
                configurable: true,
                enumerable  : false,
                value       : {},
                writable    : true
            },
            [isInstance]: {
                enumerable: false,
                value     : true
            }
        });

        me.createId(config.id || me.id);
        delete config.id;

        if (me.constructor.config) {
            delete me.constructor.config.id;
        }

        if (me.getStaticConfig('observable') || me.mixins && Neo.ns('Neo.core.Observable', me.mixins)) {
            me.initObservable(config);
        }

        me.initConfig(config);

        if (me.controller) {
            me.controller.parseConfig();
        }

        Object.defineProperty(me, 'configsApplied', {
            enumerable: false,
            value     : true
        });

        if (me.remote) {
            setTimeout(me.initRemote.bind(me), 1);
        }
    }

    /**
     * Gets triggered after all constructors are done
     * @tutorial 02_ClassSystem
     */
    onConstructed() {}

    /**
     * Gets triggered after onConstructed is done
     * @see {@link Neo.core.Base#onConstructed onConstructed}
     * @tutorial 02_ClassSystem
     */
    init() {}

    /**
     * Convenience method for beforeSet functions which test if a given value is inside a static array
     * @param {String|Number} value
     * @param {String|Number} oldValue
     * @param {String} name config name
     * @param {Array|String} [staticName=name + 's'] name of the static config array
     * @returns {String|Number} value or oldValue
     */
    beforeSetEnumValue(value, oldValue, name, staticName = name + 's') {
        const values = Array.isArray(staticName) ? staticName : this.getStaticConfig(staticName);

        if (!values.includes(value)) {
            Neo.logError('Supported values for ' + name + ' are:', values.join(', '), this);
            return oldValue;
        }

        return value;
    }

    /**
     * Uses the IdGenerator to create an id if a static one is not explicitly set.
     * Registers the instance to manager.Instance if this one is already created,
     * otherwise stores it inside a tmp map.
     * @param {String} id
     */
    createId(id) {
        let me = this;

        me.id = id || _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].getId(me.getIdKey());

        if (Base.instanceManagerAvailable === true) {
            Neo.manager.Instance.register(me);
        } else {
            if (!Neo.idMap) {
                Neo.idMap = {};
            }

            Neo.idMap[me.id] = me;
        }
    }

    /**
     * Unregisters this instance from Neo.manager.Instance
     * and removes all object entries from this instance
     */
    destroy() {
        let me = this;

        if (Base.instanceManagerAvailable === true) {
            Neo.manager.Instance.unregister(me);
        } else if (Neo.idMap) {
            delete Neo.idMap[me.id];
        }

        Object.keys(me).forEach(key => {
            if (Object.getOwnPropertyDescriptor(me, key).writable) {
                delete me[key];
            }
        });
    }

    /**
     * Used inside createId() as the default value passed to the IdGenerator.
     * Override this method as needed.
     * @returns {String}
     */
    getIdKey() {
        return this.ntype;
    }

    /**
     * Returns the value of a static config key or the staticConfig object itself in case no value is set
     * @param {String} [key] The key of a staticConfig defined inside static getStaticConfig
     * @returns {*}
     */
    getStaticConfig(key) {
        let cfg = this.constructor.staticConfig;
        return (key ? cfg[key] : cfg);
    }

    /**
     * Applies all class configs to this instance
     * @param {Object} config
     * @param {Boolean} [preventOriginalConfig] True prevents the instance from getting an originalConfig property
     */
    initConfig(config, preventOriginalConfig) {
        let me = this;

        Object.assign(me[configSymbol], me.mergeConfig(config, preventOriginalConfig));
        me.processConfigs();
    }

    /**
     * Does get triggered with a delay to ensure that Neo.workerId & Neo.worker.Manager are defined
     * Remote method access via promises
     */
    initRemote() {
        let me            = this,
            remote        = me.remote,
            className     = me.className,
            currentWorker = Neo.currentWorker,
            listenerId;

        if (!me.singleton) {
            throw new Error('Remote method access only functional for Singleton classes ' + className);
        }

        if (!Neo.config.unitTestMode && Neo.isObject(remote)) {
            if (Neo.workerId !== 'main' && currentWorker.isSharedWorker && !currentWorker.isConnected) {
                listenerId = currentWorker.on('connected', () => {
                    currentWorker.un('connected', listenerId);
                    Base.sendRemotes(className, remote);
                });
            } else {
                Base.sendRemotes(className, remote);
            }
        }
    }

    /**
     * Override this method to change the order configs are applied to this instance.
     * @param {Object} config
     * @param {Boolean} [preventOriginalConfig] True prevents the instance from getting an originalConfig property
     * @returns {Object} config
     */
    mergeConfig(config, preventOriginalConfig) {
        let me   = this,
            ctor = me.constructor;

        if (!ctor.config) {
            throw new Error('Neo.applyClassConfig has not been run on ' + me.className);
        }

        if (!preventOriginalConfig) {
            me.originalConfig = Neo.clone(config, true, true);
        }

        return {...ctor.config, ...config};
    }

    /**
     * When using set(), configs without a trailing underscore can already be assigned,
     * so the hasOwnProperty() check will return true
     * @param {Boolean} [forceAssign=false]
     */
    processConfigs(forceAssign=false) {
        let me   = this,
            keys = Object.keys(me[configSymbol]);

        // We do not want to iterate over the keys, since 1 config can remove more than 1 key (beforeSetX, afterSetX)
        if (keys.length > 0) {
            // The hasOwnProperty check is intended for configs without a trailing underscore
            // => they could already got assigned inside an afterSet-method
            if (forceAssign || !me.hasOwnProperty(keys[0])) {
                me[keys[0]] = me[configSymbol][keys[0]];
            }

            // there is a delete call inside the config getter as well (Neo.mjs => autoGenerateGetSet())
            // we need to keep this one for configs, which do not use getters (no trailing underscore)
            delete me[configSymbol][keys[0]];

            me.processConfigs(forceAssign);
        }
    }

    /**
     *
     * @param {String} className
     * @param {Object} remote
     */
    static sendRemotes(className, remote) {
        let origin;

        Object.entries(remote).forEach(([worker, methods]) => {
            if (Neo.workerId !== worker) {
                origin = Neo.workerId === 'main' ? Neo.worker.Manager : Neo.currentWorker;

                origin.sendMessage(worker, {
                    action   : 'registerRemote',
                    methods  : methods,
                    className: className
                });
            }
        });
    }

    /**
     * Change multiple configs at once, ensuring that all afterSet methods get all new assigned values
     * @param {Object} values={}
     */
    set(values={}) {
        let me = this;

        // instead of using:
        // me[configSymbol] = values;
        // we keep the Object instance (defined via Object.defineProperties() => non enumerable)

        Object.keys(me[configSymbol]).forEach(key => {
            delete me[configSymbol][key];
        });

        Object.assign(me[configSymbol], values);

        me.processConfigs(true);
    }

    /**
     * Sets the value of a static config by a given key
     * @param {String} key The key of a staticConfig defined inside static getStaticConfig
     * @param {*} value
     * @returns {Boolean} true in case the config exists and got changed
     */
    setStaticConfig(key, value) {
        let staticConfig = this.constructor.staticConfig;

        if (staticConfig.hasOwnProperty(key)) {
            staticConfig[key] = value;
            return true;
        }

        return false;
    }

    /**
     * <p>Enhancing the toString() method, e.g.</p>
     * `Neo.create('Neo.button.Base').toString() => "[object Neo.button.Base (neo-button-1)]"`
     * @returns {String}
     */
    get [Symbol.toStringTag]() {
        return `${this.className} (id: ${this.id})`;
    }

    /**
     * <p>Enhancing the instanceof method. Without this change:</p>
     * `Neo.collection.Base.prototype instanceof Neo.core.Base => true`
     * <p>With this change:</p>
     * `Neo.collection.Base.prototype instanceof Neo.core.Base => false`<br>
     * `Neo.create(Neo.collection.Base) instanceof Neo.core.Base => true`
     * @returns {Boolean}
     */
    static [Symbol.hasInstance](instance) {
        if (!instance) {
            return false;
        }

        return instance[isInstance] === true ? super[Symbol.hasInstance](instance) : false;
    }
}

Neo.applyClassConfig(Base);

Base.instanceManagerAvailable = false;



/***/ }),

/***/ "./node_modules/neo.mjs/src/core/IdGenerator.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/IdGenerator.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This class gets used by core.Base, so it can not extend it.
 * It could get simplified to just being an object (needs to manually get put into the Neo namespace in this case).
 * @class Neo.core.IdGenerator
 * @singleton
 */
class IdGenerator {
    static getStaticConfig() {return {
        /**
         * Set this one to false in case you don't want to stick
         * to the "anti-pattern" to apply classes to the global Neo or App namespace
         * @member {Boolean} registerToGlobalNs=true
         * @protected
         * @static
         */
        registerToGlobalNs: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.IdGenerator'
         * @protected
         */
        className: 'Neo.core.IdGenerator',
        /**
         * @member {String} ntype='id-generator'
         * @protected
         */
        ntype: 'id-generator',
        /**
         * The default prefix for neo instance ids
         * @member {String} base='neo-'
         */
        base: 'neo-',
        /**
         * @member {Boolean} singleton='true
         * @protected
         */
        singleton: true
    }}

    /**
     *
     * @param config
     */
    constructor(config) {
        let me = this;

        me.idCounter = {};

        // alias
        Neo.getId = me.getId.bind(me);
    }

    onConstructed() {}

    init() {}

    /**
     *
     * @param name
     * @returns {string}
     */
    getId(name) {
        name = name || 'neo';

        let me      = this,
            counter = me.idCounter,
            count   = counter[name] || 0;

        counter[name] = ++count;

        return me.base + (name === 'neo' ? '' : name + '-') + count;
    }
}

Neo.applyClassConfig(IdGenerator);

let instance = Neo.create(IdGenerator);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/core/Logger.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Logger.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.core.Logger
 * @extends Neo.core.Base
 * @singleton
 */
class Logger extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.Logger'
         * @protected
         */
        className: 'Neo.core.Logger',
        /**
         * @member {String} ntype='logger'
         * @protected
         */
        ntype: 'logger',
        /**
         * Set this config to false to disable the logging
         * @member {boolean} enableLogs=true
         */
        enableLogs: true,
        /**
         * @member {String} level='log'
         * @protected
         */
        level: 'log',
        /**
         * @member {boolean} enableLogs=true
         * @protected
         */
        singleton: true
    }}

    /**
     *
     * @param config
     */
    constructor(config) {
        super(config);

        // aliases
        Neo.applyFromNs(Neo, this, {
            error   : 'error',
            info    : 'info',
            log     : 'log',
            logError: 'logError',
            warn    : 'warn'
        }, true);
    }

    /**
     *
     * @param value
     */
    error(value) {
        throw new Error(value);
    }

    /**
     *
     * @param args
     */
    log(...args) {
        this.level = 'log';
        this.write(...args);
    }

    /**
     *
     * @param args
     */
    info(...args) {
        this.level = 'info';
        this.write(...args);
    }

    /**
     *
     * @param args
     */
    logError(...args) {
        this.level = 'error';
        this.write(...args);
    }

    /**
     *
     * @param args
     */
    warn(...args) {
        this.level = 'warn';
        this.write(...args);
    }

    /**
     *
     * @param args
     * @protected
     */
    write(...args) {
        if (this.enableLogs === true) {
            console[this.level](...args);
        }
    }
}

Neo.applyClassConfig(Logger);

let instance = Neo.create(Logger);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/core/Observable.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Observable.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Observable; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.core.Observable
 * @extends Neo.core.Base
 */
class Observable extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.Observable'
         * @protected
         */
        className: 'Neo.core.Observable',
        /**
         * @member {String} ntype='mixin-observable'
         * @protected
         */
        ntype: 'mixin-observable',
        /**
         * @member {Boolean} mixin=true
         * @protected
         */
        mixin: true
    }}

    initObservable(config) {
        let me = this,
            proto = me.__proto__,
            listeners;

        if (config.listeners) {
            me.listeners = config.listeners;
            delete config.listeners;
        }

        listeners = me.listeners;

        me.listeners = {};

        if (listeners) {
            if (Neo.isObject(listeners)) {
                listeners = {...listeners};
            }

            me.addListener(listeners);
        }

        while (proto && proto.constructor.isClass) {
            if (proto.constructor.staticConfig.observable && !proto.constructor.listeners) {
                Object.assign(proto.constructor, {
                    addListener   : me.addListener,
                    fire          : me.fire,
                    listeners     : {},
                    on            : me.on,
                    removeListener: me.removeListener,
                    un            : me.un
                });
            }
            proto = proto.__proto__;
        }
    }

    /**
     *
     * @param {Object|String} name
     * @param {Object} [opts]
     * @param {Object} [scope]
     * @param {String} [eventId]
     * @param {Object} [data]
     * @param {Number} [order]
     * @returns {String} eventId
     */
    addListener(name, opts, scope, eventId, data, order) {
        let me = this,
            listener, existing, eventConfig;

        if (typeof name === 'object') {
            if (name.hasOwnProperty('scope')) {
                scope = name.scope;
                delete name.scope;
            }

            Object.entries(name).forEach(([key, value]) => {
                me.addListener(key, value, scope);
            });
        } else if (typeof opts === 'object') {
            scope = scope || opts.scope;
            listener = opts.fn;
            order = order || opts.order;
            eventId = eventId || opts.eventId;
        } else if (typeof opts === 'function') {
            listener = opts;
        } else if (typeof opts === 'string') {
            listener = opts; // VC hook, can get parsed after onConstructed in case the view uses the parent VC
        } else {
            throw new Error('Invalid addListener call: ' + name);
        }

        eventConfig = {
            fn    : listener,
            scope : scope,
            data  : data,
            id    : eventId || Neo.getId('event')
        };

        if (existing = me.listeners && me.listeners[name]) {
            existing.forEach(cfg => {
                if (cfg.id === eventId || (cfg.fn === listener && cfg.scope === scope)) {
                    throw new Error('Duplicate event handler attached: ' + name);
                }
            });

            if (typeof order === 'number') {
                existing.splice(order, 0, eventConfig);
            } else if (order === 'before') {
                existing.unshift(eventConfig);
            } else {
                existing.push(eventConfig);
            }
        } else {
            me.listeners[name] = [eventConfig];
        }

        return eventConfig.id;
    }

    /**
     *
     * @param name
     */
    fire(name) {
        let me        = this,
            args      = [].slice.call(arguments, 1),
            listeners = me.listeners,
            eventConfig, events, i, len;

        if (listeners && listeners[name]) {
            events = [...listeners[name]];
            len    = events.length;

            for (i = 0; i < len; i++) {
                eventConfig = events[i];

                eventConfig.fn.apply(eventConfig.scope || me, eventConfig.data ? args.concat(eventConfig.data) : args);
            }
        }
    }

    /**
     *
     * @param name
     * @param eventId
     */
    removeListener(name, eventId) {
        if (Neo.isString(eventId)) {
            let listeners   = this.listeners[name],
                match       = false;

            listeners.forEach((eventConfig, idx) => {
                if (eventConfig.id === eventId) {
                    return match = idx;
                }
            });

            if (match !== false) {
                listeners.splice(match, 1);
            }
        }
    }

    // removeAllListeners: function(name) {

    // },

    // suspendListeners: function(queue) {

    // },

    // resumeListeners: function() {

    // }

    /**
     * Alias for addListener
     * @param {Object|String} name
     * @param {Object} [opts]
     * @param {Object} [scope]
     * @param {String} [eventId]
     * @param {Object} [data]
     * @param {Number} [order]
     * @returns {String} eventId
     */
    on(...args) {
        return this.addListener(...args);
    }

    /**
     * Alias for removeListener
     * @param name
     * @param eventId
     */
    un(...args) {
        this.removeListener(...args);
    }
}

Neo.applyClassConfig(Observable);



/***/ }),

/***/ "./node_modules/neo.mjs/src/core/Util.mjs":
/*!************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Util.mjs ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.core.Util
 * @extends Neo.core.Base
 */
class Util extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * A regex to remove camel case syntax
         * @member {RegExp} decamelRegEx=/([a-z])([A-Z])/g
         * @protected
         * @static
         */
        decamelRegEx: /([a-z])([A-Z])/g
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.Util'
         * @protected
         */
        className: 'Neo.core.Util',
        /**
         * @member {String} ntype='core-util'
         * @protected
         */
        ntype: 'core-util',
    }}

    /**
     *
     * @param {Object} scope
     * @param {String[]} values
     */
    static bindMethods(scope, values) {
        values.forEach(value => {
            scope[value] = scope[value].bind(scope);
        });
    }

    /**
     * Makes the first character of a string uppercase
     * @param {String} string
     * @returns {Boolean|String} Returns false for non string inputs
     */
    static capitalize(string) {
        return Util.isString(string) && string[0].toUpperCase() + string.slice(1);
    }

    /**
     * Transforms a styles string into a styles object using camelcase syntax
     * @param {String} string The styles string to parse
     * @returns {Object} The camelcase styles object
     */
    static createStyleObject(string) {
        if (!string) {
            return null;
        }

        let parts;

        // split(';') does fetch semicolons inside brackets
        // -> background-image: "url('data:image/png;base64,...

        // TODO: Cache all regex
        return string.split(/;(?=[^\)]*(?:\(|$))/g).reduce((obj, el) => {
            // we have to split by the first colon only
            // -> background-image: url('http://example.com/image.png')
            parts = el.split((/:(.+)/)).map(function (x) {
                let num = parseFloat(x);

                return x == num ? num : x.trim();
            });

            if (parts[0] !== '') {
                parts[0] = parts[0].replace(/-([a-z])/g, (str, letter) => {
                    return letter.toUpperCase();
                });
                obj[parts[0]] = parts[1];
            }
            return obj;
        }, {});
    }

    /**
     * Converts a styles object which can use camelcase syntax into a styles string
     * @param {Object} styles The styles object
     * @returns {String} The styles string (DOM ready)
     */
    static createStyles(styles) {
        let style = '';

        Object.entries(styles).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                style += Util.decamel(key) + ':' + value + ';';
            }
        });

        return style;
    }

    /**
     * Transforms all uppercase characters of a string into lowercase.
     * Does not touch special characters.
     * @param {String} value The input containing uppercase characters
     * @returns {String} The lowercase output
     */
    static decamel(value) {
        return value.replace(Util.decamelRegEx, '$1-$2').toLowerCase();
    }

    /**
     * Returns true if the passed value is an array
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isArray(value) {
        return Array.isArray(value)
    }

    /**
     * Returns true if the passed value is a boolean
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isBoolean(value) {
        return typeof value === 'boolean';
    }

    /**
     * Returns true if the passed value is not undefined
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isDefined(value) {
        return typeof value !== 'undefined';
    }

    /**
     * Returns true if the passed value is an empty Array, Object or String
     * @param {Array|Object|String} value The value to test
     * @returns {Boolean}
     */
    static isEmpty(value) {
        if (Array.isArray(value)) {
            return value.length === 0;
        }

        if (value instanceof Date) {
            return false;
        }

        if (Util.isObject(value)) {
            return Object.keys(value).length === 0;
        }

        if (Util.isString(value)) {
            return value === '';
        }

        return false;
    }

    /**
     * Returns true if the passed value is a function
     * @param {Function} value The value to test
     * @returns {Boolean}
     */
    static isFunction(value) {
        return typeof value === 'function';
    }

    /**
     * Returns true if the passed value is a number. Returns false for non-finite numbers
     * @param {Number} value The value to test
     * @returns {Boolean}
     */
    static isNumber(value){
        return typeof value === 'number' && isFinite(value);
    }

    /**
     * Returns true if the passed value is an object
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isObject(value) {
        return value !== null && typeof value === 'object' && !Array.isArray(value);
    }

    /**
     * Returns true if the passed value is a string
     * @param {String} value The value to test
     * @returns {Boolean}
     */
    static isString(value) {
        return typeof value === 'string';
    }

    /**
     * Converts any iterable (strings, numeric indices and a length property) into a true array
     * @param {Object|String} iterable
     * @param {Number} [start=0] start index
     * @param {Number} [end=iterable.length] end index
     * @returns {Array}
     */
    static toArray(iterable, start, end) {
        let len;

        if (!iterable || !(len = iterable.length)) {
            return [];
        }

        if (typeof iterable === 'string') {
            return iterable.split('');
        }

        return Array.prototype.slice.call(iterable, start || 0, end || len);
    }
}

Neo.applyClassConfig(Util);

// aliases
Neo.applyFromNs(Neo, Util, {
    bindMethods      : 'bindMethods',
    createStyleObject: 'createStyleObject',
    createStyles     : 'createStyles',
    capitalize       : 'capitalize',
    decamel          : 'decamel',
    isArray          : 'isArray',
    isBoolean        : 'isBoolean',
    isDefined        : 'isDefined',
    isEmpty          : 'isEmpty',
    isFunction       : 'isFunction',
    isNumber         : 'isNumber',
    isObject         : 'isObject',
    isString         : 'isString',
    toArray          : 'toArray'
}, true);

/* harmony default export */ __webpack_exports__["default"] = (Util);

/***/ }),

/***/ "./node_modules/neo.mjs/src/core/_export.mjs":
/*!***************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/_export.mjs ***!
  \***************************************************/
/*! exports provided: Base, Logger, Observable, Util */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Logger_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logger.mjs */ "./node_modules/neo.mjs/src/core/Logger.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return _Logger_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Observable_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return _Observable_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Util_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Util.mjs */ "./node_modules/neo.mjs/src/core/Util.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return _Util_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]; });








/***/ }),

/***/ "./node_modules/neo.mjs/src/manager/Base.mjs":
/*!***************************************************!*\
  !*** ./node_modules/neo.mjs/src/manager/Base.mjs ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _collection_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../collection/Base.mjs */ "./node_modules/neo.mjs/src/collection/Base.mjs");


/**
 * Abstract base class for the other manager classes
 * @class Neo.manager.Base
 * @extends Neo.collection.Base
 */
class Base extends _collection_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]{
    static getConfig() {return {
        /**
         * @member {String} className='Neo.manager.Base'
         * @protected
         */
        className: 'Neo.manager.Base',
        /**
         * @member {String} ntype='base-manager'
         * @protected
         */
        ntype: 'base-manager'
    }}

    /**
     *
     * @param {Number|String} id
     * @returns {Object}
     */
    getById(id) {
        return this.get(id);
    }

    /**
     *
     * @param {Object} item
     */
    register(item) {
        let me = this;

        if (me.get(item.id)) {
            Neo.logError('Trying to create an item with an already existing id', item, me.get(item.id));
        } else {
            me.push(item);
        }
    }

    /**
     *
     * @param {Object} item
     */
    unregister(item) {
        this.remove(item);
    }
}

Neo.applyClassConfig(Base);



/***/ }),

/***/ "./node_modules/neo.mjs/src/manager/Component.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/src/manager/Component.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/manager/Base.mjs");
/* harmony import */ var _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/VNode.mjs */ "./node_modules/neo.mjs/src/util/VNode.mjs");



/**
 * @class Neo.manager.Component
 * @extends Neo.manager.Base
 * @singleton
 */
class Component extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.manager.Component'
         * @protected
         */
        className: 'Neo.manager.Component',
        /**
         * @member {String} ntype='component-manager'
         * @protected
         */
        ntype: 'component-manager',
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);
        Neo.getComponent = this.getById.bind(this); // alias
    }

    /**
     * Returns the first component which matches the config-selector moving down the component items tree
     * @param {String} componentId
     * @param {Object|String} config
     * @returns {Neo.component.Base|null}
     */
    down(componentId, config) {
        let me          = this,
            component   = me.getById(componentId),
            matchArray  = [],
            returnValue = null,
            i           = 0,
            len         = component.items && component.items.length || 0,
            configArray, configLength;

        if (Neo.isString(config)) {
            config = {
                ntype: config
            };
        }

        configArray  = Object.entries(config);
        configLength = configArray.length;

        configArray.forEach(([key, value]) => {
            if (component[key] === value) {
                matchArray.push(true);
            }
        });

        if (matchArray.length === configLength) {
            return component;
        }

        for (; i < len; i++) {
            returnValue = me.down(component.items[i].id, config);
            if (returnValue !== null) {
                return returnValue;
            }
        }

        return null;
    }

    /**
     *
     * @param {Array} path
     * @returns {String|null} the component id in case there is a match
     */
    findParentComponent(path) {
        let me  = this,
            i   = 0,
            len = path && path.length || 0,
            id;

        for (; i < len; i++) {
            id = path[i];

            if (id && me.has(id)) {
                return id;
            }
        }

        return null;
    }

    /**
     * todo: replace all calls of this method to calls using the util.VNode class
     * Get the ids of all child nodes of the given vnode
     * @param vnode
     * @param childIds
     * @returns {Array} childIds
     */
    getChildIds(vnode, childIds) {
        return _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getChildIds(vnode, childIds);
    }

    /**
     * Returns all child components found inside the vdom tree
     * @param {Neo.component.Base} component
     * @returns {Neo.component.Base[]} childComponents
     */
    getChildren(component) {
        let childComponents = [],
            childNodes      = _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getChildIds(component.vnode),
            childComponent;

        childNodes.forEach(node => {
            childComponent = this.get(node);

            if (childComponent) {
                childComponents.push(childComponent);
            }
        });

        return childComponents;
    }

    /**
     * Returns an Array containing the ids of all parent components for a given component
     * @param {Neo.component.Base} component
     * @returns {String[]} parentIds
     */
    getParentIds(component) {
        let parentIds = [];

        while (component && component.parentId) {
            component = this.getById(component.parentId);

            if (component) {
                parentIds.push(component.id);
            }
        }

        return parentIds;
    }

    /**
     *
     * @param {Array} path
     * @returns {Array}
     */
    getParentPath(path) {
        let me            = this,
            componentPath = [],
            i             = 0,
            len           = path && path.length || 0;

        for (; i < len; i++) {
            if (me.has(path[i])) {
                componentPath.push(path[i]);
            }
        }

        return componentPath;
    }

    /**
     * Returns an Array containing all parent components for a given component
     * @param {Neo.component.Base} component
     * @returns {Neo.component.Base[]} parents
     */
    getParents(component) {
        let parents = [];

        while (component && component.parentId) {
            component = this.getById(component.parentId);

            if (component) {
                parents.push(component);
            }
        }

        return parents;
    }

    /**
     * Returns the first component which matches the config-selector
     * @param {String} componentId
     * @param {Object|String} config
     * @returns {Neo.component.Base|null}
     */
    up(componentId, config) {
        let component = this.getById(componentId),
            configArray, configLength, matchArray;

        if (Neo.isString(config)) {
            config = {
                ntype: config
            };
        }

        configArray  = Object.entries(config);
        configLength = configArray.length;

        while (component && component.parentId) {
            component = this.getById(component.parentId);

            if (!component) {
                return null;
            }

            matchArray = [];

            configArray.forEach(([key, value]) => {
                if (component[key] === value) {
                    matchArray.push(true);
                }
            });

            if (matchArray.length === configLength) {
                return component;
            }
        }
    }
}

Neo.applyClassConfig(Component);

let instance = Neo.create(Component);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/manager/DomEvent.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/manager/DomEvent.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _Component_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component.mjs */ "./node_modules/neo.mjs/src/manager/Component.mjs");
/* harmony import */ var _Focus_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Focus.mjs */ "./node_modules/neo.mjs/src/manager/Focus.mjs");
/* harmony import */ var _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Logger.mjs */ "./node_modules/neo.mjs/src/core/Logger.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");







const eventConfigKeys = [
    'bubble',
    'delegate',
    'local',
    'scope',
    'vnodeId'
];

const globalDomEvents = [
    'change',
    'click',
    'contextmenu',
    'drag:end',
    'drag:move',
    'drag:start',
    'focusin',
    'focusout',
    'input',
    'keydown',
    'keyup',
    'mouseenter',
    'mouseleave',
    'wheel'
];

/**
 * @class Neo.manager.DomEvent
 * @extends Neo.core.Base
 * @singleton
 */
class DomEvent extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.manager.DomEvent'
         * @protected
         */
        className: 'Neo.manager.DomEvent',
        /**
         * @member {String} ntype='dom-event-manager'
         * @protected
         */
        ntype: 'dom-event-manager',
        /**
         * @member {Object} items={}
         * @protected
         */
        items: {},
        /**
         * @member {Object} map={}
         * @protected
         */
        map: {},
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true
    }}

    /**
     *
     * @param {Object} event
     * @protected
     */
    fire(event) {
        let me         = this,
            bubble     = true,
            data       = event.data || {},
            eventName  = event.eventName,
            i          = 0,
            listeners  = null,
            pathIds    = data.path.map(e => e.id),
            path       = _Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getParentPath(pathIds),
            len        = path.length,
            component, delegationTargetId, id, preventFire;

        for (; i < len; i++) {
            id        = path[i];
            component = Neo.getComponent(id);

            if (!component || component.disabled) {
                break;
            }

            listeners = me.items[id] && me.items[id][eventName];

            if (listeners) {
                // console.log('fire', eventName, data, listeners, path);

                if (Array.isArray(listeners)) {
                    listeners.forEach(listener => {
                        if (listener && listener.fn) {
                            delegationTargetId = me.verifyDelegationPath(listener, data.path);

                            if (delegationTargetId !== false) {
                                preventFire = false;

                                // we only want mouseenter & leave to fire on their top level nodes, not for children
                                if (eventName === 'mouseenter' || eventName === 'mouseleave') {
                                    preventFire = !DomEvent.verifyMouseEnterLeave(component, data, delegationTargetId, eventName);
                                }

                                if (!preventFire) {
                                    // console.log(Neo.get(id));
                                    data.component = component;
                                    listener.fn.apply(listener.scope || self, [data]);

                                    if (!listener.bubble) {
                                        bubble = false;
                                    }
                                }
                            }
                        }
                    });
                }
            }

            // we do want to trigger the FocusManager after normal domListeners on these events got executed
            if (eventName === 'focusin' || eventName === 'focusout') {
                _Focus_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]['on' + Neo.capitalize(eventName)]({
                    componentPath: path,
                    data         : data
                });

                break;
            }

            if (!bubble) {
                break;
            }
        }
    }

    /**
     *
     * @param config
     * @param scope
     * @returns {Object}
     */
    generateListenerConfig(config, scope) {
        return {
            delegate : config.delegate,
            eventName: config.eventName,
            id       : scope.id,
            opts     : config,
            scope    : config.scope   || scope,
            vnodeId  : config.vnodeId || scope.id
        };
    }

    getEventName(config) {
        let eventName = null;

        if (Neo.isObject(config)) {
            Object.keys(config).forEach(key => {
                if (!eventConfigKeys.includes(key)) {
                    eventName = key;
                }
            });
        }

        return eventName;
    }

    /**
     * @param {Object} config
     * @param {String} config.delegate
     * @param {String} config.eventName
     * @param {String} config.id
     * @param {Object} config.opts
     * @param {Object} config.scope
     * @param {String} config.vnodeId
     * @returns {Object}
     */
    getListener(config) {
        let listeners = this.items,
            event;

        if (listeners && listeners[config.id]) {
            event = listeners[config.id][config.eventName];

            if (event) {
                console.log(event);
            }
        }
    }

    /**
     * Mounts local domEvent listeners for a given component
     * @param {Neo.component.Base} component
     * @protected
     */
    mountDomListeners(component) {
        let listeners   = this.items[component.id],
            localEvents = [];

        if (listeners) {
            Object.entries(listeners).forEach(([eventName, value]) => {
                value.forEach(event => {
                    eventName = event.eventName;

                    if (eventName && (event.local || !globalDomEvents.includes(eventName))) {
                        // console.log('localEvents', eventName);

                        localEvents.push({
                            name   : eventName,
                            handler: 'domEventListener',
                            vnodeId: event.vnodeId
                        });
                    }
                });
            });

            if (localEvents.length > 0) {
                Neo.worker.App.promiseMessage('main', {
                    action : 'addDomListener',
                    appName: component.appName,
                    events : localEvents
                }).then(data => {
                    // console.log('added domListener', data);
                }).catch(err => {
                    console.log('App: Got error attempting to add a domListener', err);
                });
            }
        }
    }

    /**
     * @param {Object} config
     * @param {String} config.delegate
     * @param {String} config.eventName
     * @param {String} config.id
     * @param {Boolean} config.local
     * @param {Number} config.opts
     * @param {Number} config.originalConfig
     * @param {String} config.ownerId
     * @param {Number} config.priority
     * @param {Object} config.scope
     * @param {String} config.vnodeId
     * @returns {Boolean} true if the listener got registered successfully (false in case it was already there)
     */
    register(config) {
        let alreadyRegistered = false,
            eventName         = config.eventName,
            id                = config.id,
            listeners         = this.items,
            opts              = config.opts,
            scope             = config.scope,
            fnType            = typeof opts,
            fn, listener, listenerConfig, listenerId;

        if (fnType === 'function' || fnType === 'string') {
            fn = opts;
        } else {
            fn    = opts.fn;
            scope = opts.scope || scope;
        }

        if (!listeners[id]) {
            listeners[id] = {};
        }

        if (listeners[id][eventName]) {
            listener = listeners[id][eventName];

            Object.keys(listener).forEach(key => {
                if (
                    listener[key].fn.toString() === fn.toString() && // todo: add a better check
                    listener[key].scope         === scope &&
                    listener[key].delegate      === config.delegate
                ) {
                    alreadyRegistered = true;
                }
            });
        } else {
            listeners[id][eventName] = [];
        }

        if (alreadyRegistered === true) {
            return false;
        }

        // console.log('manager.DomEvent register', eventName, config);

        listenerId = Neo.getId('dom-event');

        config.listenerId = listenerId;

        listenerConfig = {
            bubble        : config.hasOwnProperty('bubble') ? config.bubble : opts.hasOwnProperty('bubble') ? opts.bubble : true,
            delegate      : config.delegate,
            eventName     : eventName,
            fn            : fn,
            id            : listenerId,
            mounted       : !config.local && globalDomEvents.includes(eventName),
            originalConfig: config.originalConfig,
            ownerId       : config.ownerId,
            priority      : config.priority || 1,
            scope         : scope,
            vnodeId       : config.vnodeId
        };

        this.map[listenerId] = listenerConfig;

        listeners[id][eventName].push(listenerConfig);

        listeners[id][eventName].sort((a, b) => a.priority > b.priority);

        // console.log(this.map);

        return true;
    }

    /**
     * @param {Object} config
     * @param {String} config.eventName
     * @param {String} config.id
     * @param {Object} config.opts
     * @param {Object} config.scope
     * @param {String} config.vnodeId
     * @param {Object} scope
     * @returns {Boolean} true in case the listener did exist and got removed
     */
    unregister(config, scope) {
        // todo
        console.log('unregister', config);
        console.log(this.generateListenerConfig(config, scope));
        return;

        let listener = this.getListener(config);

        if (listener) {
            console.log('listener found', listener);
        }
    }

    /**
     *
     * @param {Neo.component.Base} component
     * @param {Object[]} domListeners
     * @param {Object[]} oldDomListeners
     */
    updateDomListeners(component, domListeners, oldDomListeners) {
        let me                  = this,
            registeredListeners = me.items[component.id] || {},
            i, len, listeners;

        if (Array.isArray(domListeners)) {
            if (Array.isArray(oldDomListeners)) {
                oldDomListeners.forEach(oldDomListener => {
                    // find & remove no longer existing listeners
                    if (!domListeners.includes(oldDomListener)) {
                        listeners = registeredListeners[me.getEventName(oldDomListener)] || [];
                        i         = 0;
                        len       = listeners.length;

                        for (; i < len; i++) {
                            if (listeners[i].originalConfig === oldDomListener) {
                                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].remove(listeners, listeners[i]);
                                break;
                            }
                        }
                    }
                });
            }

            // add new listeners
            domListeners.forEach(domListener => {
                Object.entries(domListener).forEach(([key, value]) => {
                    if (!eventConfigKeys.includes(key)) {
                        me.register({
                            delegate      : value.delegate || domListener.delegate || '#' + component.id,
                            eventName     : key,
                            id            : component.id,
                            opts          : value,
                            originalConfig: domListener,
                            ownerId       : component.id,
                            scope         : domListener.scope || component,
                            vnodeId       : value.vnodeId || component.id
                        });
                    }
                });
            });

            if (component.mounted) {
                me.mountDomListeners(component);
            }
        } else {
            _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].logError('Component.domListeners have to be an array', component);
        }
    }

    /**
     * Intended for Neo.controller.Component to replace listener placeholders provided as a string
     * @param {Object} config
     * @param {String} config.componentId
     * @param {Function} config.eventHandlerMethod
     * @param {String} config.eventHandlerName
     * @param {String} config.eventName
     * @param {Neo.core.Base} config.scope
     */
    updateListenerPlaceholder(config) {
        let me             = this,
            items          = me.items[config.componentId] || {},
            eventListeners = items[config.eventName] || [],
            i              = 0,
            len            = eventListeners.length,
            listener;

        for (; i < len; i++) {
            listener = eventListeners[i];

            if (listener.fn === config.eventHandlerName) {
                listener.fn    = config.eventHandlerMethod;
                listener.scope = config.scope;
                break;
            }
        }
    }

    /**
     *
     * @param {Object} listener
     * @param {Array} path
     * @returns {Boolean|String} true in case the delegation string matches the event path
     */
    verifyDelegationPath(listener, path) {
        let delegationArray = listener.delegate.split(' '),
            j               = 0,
            len             = delegationArray.length,
            pathLen         = path.length,
            hasMatch, i, item, isId, targetId;

        for (i=len-1; i >= 0; i--) {
            hasMatch = false;
            item     = delegationArray[i];
            isId     = item.startsWith('#');

            if (isId || item.startsWith('.')) {
                item = item.substr(1);
            }

            for (; j < pathLen; j++) {
                if (
                    (isId && path[j].id === item) ||
                    path[j].cls.includes(item)
                ) {
                    hasMatch = true;
                    targetId = path[j].id;
                    break;
                }
            }

            if (!hasMatch) {
                return false;
            }
        }

        // ensure the delegation path is a child of the owner components root node
        for (; j < pathLen; j++) {
            if (path[j].id === listener.vnodeId) {
                return targetId;
            }
        }

        return false;
    }

    /**
     *
     * @param {Neo.component.Base} component
     * @param {Object} data
     * @param {String} delegationTargetId
     * @param {String} eventName
     * @returns {Boolean}
     */
    static verifyMouseEnterLeave(component, data, delegationTargetId, eventName) {
        let targetId = eventName === 'mouseenter' ? data.fromElementId : data.toElementId,
            delegationVdom;

        if (targetId && targetId !== delegationTargetId) {
            delegationVdom = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].findVdomChild(component.vdom, delegationTargetId);

            // delegationVdom can be undefined when dragging a proxy over the node.
            // see issues/1137 for details.
            if (!delegationVdom || delegationVdom.vdom && _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].findVdomChild(delegationVdom.vdom, targetId)) {
                return false;
            }
        }

        return true;
    }
}

Neo.applyClassConfig(DomEvent);

let instance = Neo.create(DomEvent);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/manager/Focus.mjs":
/*!****************************************************!*\
  !*** ./node_modules/neo.mjs/src/manager/Focus.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Neo.manager.Focus
 * @extends Neo.core.Base
 * @singleton
 */
class Focus extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.manager.Focus'
         * @protected
         */
        className: 'Neo.manager.Focus',
        /**
         * @member {String} ntype='focus-manager'
         * @protected
         */
        ntype: 'focus-manager',
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true,
        /**
         * An array containing opts objects.
         * opts.componentPath
         * opts.data
         * @member {Object[]} history=[]
         */
        history: [],
        /**
         * The Date object when the last focusin event has occured
         * @member {Date|null} lastFocusInDate=null
         * @protected
         */
        lastFocusInDate: null,
        /**
         * The Date object when the last focusout event has occured
         * @member {Date|null} lastFocusInDate=null
         * @protected
         */
        lastFocusOutDate: null,
        /**
         * The amount of time for a focusIn to occur after the last focusOut
         * to be threated as a focusmove
         * @member {Number} maxFocusInOutGap=10
         */
        maxFocusInOutGap: 10,
        /**
         * The maximum amount of items stored inside the history array
         * @member {Number} maxHistoryLength=20
         */
        maxHistoryLength: 20
    }}

    /**
     *
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @protected
     */
    addToHistory(opts) {
        let history = this.history;

        history.unshift(opts);

        if (history.length >= this.maxHistoryLength) {
            history.pop();
        }
    }

    /**
     *
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @protected
     */
    focusEnter(opts) {
        this.setComponentFocus(opts, true);
        this.addToHistory(opts);
    }

    /**
     *
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @protected
     */
    focusLeave(opts) {
        this.setComponentFocus(opts, false);
    }

    /**
     *
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @protected
     */
    focusMove(opts) {
        let me               = this,
            history          = me.history,
            newComponentPath = opts.componentPath,
            oldComponentPath = history[0].componentPath,
            focusEnter       = _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].difference(newComponentPath, oldComponentPath),
            focusLeave       = _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].difference(oldComponentPath, newComponentPath),
            focusMove        = _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].intersection(newComponentPath, oldComponentPath),
            component, data;

        me.setComponentFocus({componentPath: focusEnter, data: opts.data}, true);
        me.setComponentFocus({componentPath: focusLeave, data: opts.data}, false);

        focusMove.forEach(id => {
            component = Neo.getComponent(id);

            if (component) {
                data = {
                    newPath: opts.data.path,
                    oldPath: history[0].data.path
                };

                if (typeof component.onFocusMove === 'function') {
                    component.onFocusMove(data);
                }

                component.fire('focusMove', data);
            }
        });

        me.addToHistory(opts);
    }

    /**
     *
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @protected
     */
    onFocusin(opts) {
        let me = this;

        me.lastFocusInDate = new Date();

        if (me.lastFocusOutDate && me.lastFocusInDate - me.lastFocusOutDate < me.maxFocusInOutGap) {
            me.focusMove(opts);
        } else {
            me.focusEnter(opts);
        }
    }

    /**
     *
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @protected
     */
    onFocusout(opts) {
        let me = this;

        me.lastFocusOutDate = new Date();

        setTimeout(() => {
            if (me.lastFocusOutDate > me.lastFocusInDate) {
                me.focusLeave(opts);
            }
        }, me.maxFocusInOutGap);
    }

    /**
     *
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @param {Boolean} containsFocus
     * @protected
     */
    setComponentFocus(opts, containsFocus) {
        let component, handler;

        opts.componentPath.forEach(id => {
            component = Neo.getComponent(id);

            if (component) {
                component.containsFocus = containsFocus;

                handler = containsFocus ? 'onFocusEnter' : 'onFocusLeave';

                if (typeof component[handler] === 'function') {
                    component[handler](opts.data.path);
                }

                component.fire(containsFocus ? 'focusEnter' : 'focusLeave', opts.data.path);
            }
        });
    }
}

Neo.applyClassConfig(Focus);

let instance = Neo.create(Focus);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/manager/Instance.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/manager/Instance.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/manager/Base.mjs");
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");



/**
 * @class Neo.manager.Instance
 * @extends Neo.manager.Base
 * @singleton
 */
class Instance extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.manager.Instance'
         * @protected
         */
        className: 'Neo.manager.Instance',
        /**
         * @member {String} ntype='instance-manager'
         * @protected
         */
        ntype: 'instance-manager',
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        _core_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].instanceManagerAvailable = true;

        me.consumeNeoIdMap();

        Neo.get = me.get.bind(me); // alias
    }

    /**
     * Register all ids which got applied to the Neo namespace before this instance got created
     * @protected
     */
    consumeNeoIdMap() {
        if (Neo.idMap) {
            this.add(Object.values(Neo.idMap));
            delete Neo.idMap;
        }
    }
}

Neo.applyClassConfig(Instance);

let instance = Neo.create(Instance);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/util/Array.mjs":
/*!*************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/Array.mjs ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.util.Array
 * @extends Neo.core.Base
 */
class NeoArray extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.Array'
         * @protected
         */
        className: 'Neo.util.Array'
    }}

    /**
     * Adds an item or Array of items to an array in case it does not already exist.
     * Only primitive items will get found as duplicates
     * @param {Array} arr
     * @param {*} items
     */
    static add(arr, items) {
        if (!Array.isArray(items)) {
            items = [items];
        }

        items.forEach(item => {
            if (!arr.includes(item)) {
                arr.push(item);
            }
        });
    }

    /**
     * Returns an array of items which are present in array1, but not in array2
     * @param {Array} array1=[]
     * @param {Array} array2=[]
     * @returns {Array}
     */
    static difference(array1=[], array2=[]) {
        return array1.filter(item => !array2.includes(item));
    }

    /**
     * Checks if the index of item is > -1
     * @param {Array} arr
     * @param {*} item
     */
    static hasItem(arr, item) {
        return arr.includes(item);
    }

    /**
     * Returns an array of items which are present in array1 and array2
     * Only supports primitive items
     * @param {Array} array1=[]
     * @param {Array} array2=[]
     * @returns {Array}
     */
    static intersection(array1=[], array2=[]) {
        return array1.filter(item => array2.includes(item));
    }

    /**
     * Returns true if all items of array1 are present in array 2
     * Supports Arrays containing Objects, not Arrays containing Arrays
     * @param {Array} array1=[]
     * @param {Array} array2=[]
     * @returns {Boolean}
     */
    static isEqual(array1=[], array2=[]) {
        let i    = 0,
            len  = array1.length,
            len2 = array2.length,
            hasObject, j, value;

        for (; i < len; i++) {
            value = array1[i];

            if (Neo.isObject(value)) {
                hasObject = false;
                j         = 0;

                for (; j < len2; j++) {
                    if (Neo.isObject(array2[j]) && Neo.util.Object.isEqual(value, array2[j])) {
                        hasObject = true;
                        break;
                    }
                }

                if (!hasObject) {
                    return false;
                }
            }

            else if (!array2.includes(value)) {
                return false;
            }
        }

        return array1.length === array2.length;
    }

    /**
     * Moves an item inside arr from fromIndex to toIndex
     * @param {Array} arr
     * @param {Number} fromIndex
     * @param {Number} toIndex
     */
    static move(arr, fromIndex, toIndex) {
        if (fromIndex === toIndex) {
            return arr;
        }

        if (fromIndex >= arr.length) {
            fromIndex = arr.length - 1;
        }

        arr.splice(toIndex, 0, arr.splice(fromIndex, 1)[0]);
        return arr;
    }

    /**
     * Removes an item or array of items from an array. Only primitive items will get found
     * @param {Array} arr
     * @param {*} items
     */
    static remove(arr, items) {
        let index;

        if (!Array.isArray(items)) {
            items = [items];
        }

        items.forEach(item => {
            index = arr.indexOf(item);

            if (index > -1) {
                arr.splice(index, 1);
            }
        });
    }

    /**
     * Removes an item from an array in case it does  exist, otherwise adds it
     * @param {Array} arr
     * @param {*} item
     */
    static toggle(arr, item) {
        if (this.hasItem(arr, item)) {
            this.remove(arr, item);
        } else {
            this.add(arr, item);
        }
    }

    /**
     * Returns an array of items which are present in array1 and array2
     * Only supports primitive items
     * @param {Array} array1
     * @param {Array} array2
     * @returns {Array}
     */
    static union(array1, array2) {
        let result = [],
            merge  = array1.concat(array2),
            len    = merge.length,
            assoc  = {},
            item;

        while (len--) {
            item = merge[len];

            if (!assoc[item]) {
                result.unshift(item);
                assoc[item] = true;
            }
        }

        return result;
    }

    /**
     * Adds an item or Array of items to an array in case it does not already exist.
     * Only primitive items will get found as duplicates
     * @param {Array} arr
     * @param {*} items
     */
    static unshift(arr, items) {
        if (!Array.isArray(items)) {
            items = [items];
        }

        items.forEach(item => {
            if (!arr.includes(item)) {
                arr.unshift(item);
            }
        });
    }
}

Neo.applyClassConfig(NeoArray);

/* harmony default export */ __webpack_exports__["default"] = (NeoArray);

/***/ }),

/***/ "./node_modules/neo.mjs/src/util/HashHistory.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/HashHistory.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.util.HashHistory
 * @extends Neo.core.Base
 * @singleton
 */
class HashHistory extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.ClassSystem'
         * @protected
         */
        className: 'Neo.util.HashHistory',
        /**
         * @member {String} ntype='hash-history'
         * @protected
         */
        ntype: 'hash-history',
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true,
        /**
         * @member {Number} maxItems=50
         * @protected
         */
        maxItems: 50,
        /**
         * @member {Array} stack=[]
         * @protected
         */
        stack: []
    }}

    /**
     *
     * @returns {Object}
     */
    first() {
        return this.stack[0];
    }

    /**
     *
     * @returns {Number}
     */
    getCount() {
        return this.stack.length;
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.appName
     * @param {Object} data.hash
     * @param {String} data.hashString
     */
    push(data) {
        let me = this;

        me.stack.unshift(data);

        if (me.stack.length > me.maxItems) {
            me.stack.length = me.maxItems;
        }

        me.fire('change', data, me.stack[1]);
    }
}

Neo.applyClassConfig(HashHistory);

let instance = Neo.create(HashHistory);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/util/VDom.mjs":
/*!************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/VDom.mjs ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.util.VDom
 * @extends Neo.core.Base
 */
class VDom extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.VDom'
         * @protected
         */
        className: 'Neo.util.VDom'
    }}

    /**
     *
     * @param {Object} vdom
     * @param {Boolean} [removeIds=true]
     * @returns {Object} cloned vdom
     */
    static clone(vdom, removeIds=true) {
        const clone = Neo.clone(vdom, true);

        if (removeIds) {
            delete clone.id;
        }

        if (clone.cn) {
            clone.cn.forEach((item, index) => {
                clone.cn[index] = VDom.clone(item, removeIds);
            });
        }

        return clone;
    }

    /**
     * Search vdom child nodes by id or opts object for a given vdom tree
     * @param {Object} vdom
     * @param {Object|String} opts Either an object containing vdom node attributes or a string based id
     * @param {Number} [index] Internal flag, do not use it
     * @param {Object} [parentNode] Internal flag, do not use it
     * @returns {Object}
     *     {Number} index
     *     {String} parentId
     *     {Object} vdom
     */
    static findVdomChild(vdom, opts, index, parentNode) {
        index = index || 0;
        opts  = typeof opts !== 'string' ? opts : {id:opts};

        let child      = null,
            matchArray = [],
            styleMatch = true,
            i          = 0,
            len        = vdom.cn && vdom.cn.length,
            optsArray, optsLength, subChild;

        optsArray  = Object.entries(opts);
        optsLength = optsArray.length;

        optsArray.forEach(([key, value]) => {
            if (vdom.hasOwnProperty(key)) {
                switch(key) {
                    case 'cls':
                        if (typeof value === 'string' && Neo.isArray(vdom[key])) {
                            if (vdom[key].includes(value)) {
                                matchArray.push(true);
                            }
                        } else if (typeof value === 'string' && typeof vdom[key] === 'string') {
                            if (vdom[key] === value) {
                                matchArray.push(true);
                            }
                        } else if (Neo.isArray(value) && Neo.isArray(vdom[key])) {
                            // todo: either search the vdom array for all keys or compare if the arrays are equal.
                            throw new Error('findVdomChild: cls matching not supported for target & source types of Arrays');
                        }
                        break;
                    case 'style':
                        if (typeof value === 'string' && typeof vdom[key] === 'string') {
                            if (vdom[key] === value) {
                                matchArray.push(true);
                            }
                        } else if (Neo.isObject(value) && Neo.isObject(vdom[key])) {
                            Object.entries(value).forEach(([styleKey, styleValue]) => {
                                if (!(vdom[key].hasOwnProperty(styleKey) && vdom[key][styleKey] === styleValue)) {
                                    styleMatch = false;
                                }
                            });

                            if (styleMatch) {
                                matchArray.push(true);
                            }
                        } else {
                            throw new Error('findVdomChild: style matching not supported for mixed target & source types (Object VS String)');
                        }
                        break;
                    default:
                        if (vdom[key] === value) {
                            matchArray.push(true);
                        }
                        break;
                }
            }
        });

        if (matchArray.length === optsLength) {
            return {
                index     : index,
                parentNode: parentNode,
                vdom      : vdom
            };
        }

        if (vdom.cn) {
            for (; i < len; i++) {
                if (vdom.cn[i]) {
                    subChild = VDom.findVdomChild(vdom.cn[i], opts, i, vdom);

                    if (subChild) {
                        child = {
                            index     : subChild.index,
                            parentNode: subChild.parentNode,
                            vdom      : subChild.vdom
                        };
                        break;
                    }
                }
            }
        }

        return child;
    }

    /**
     * Convenience shortcut for findVdomChild(vdom, {flag: flag});
     * @param {Object} vdom
     * @param {String} flag The flag reference specified on the target vdom child node
     * @returns {Object} vdom
     */
    static getByFlag(vdom, flag) {
        let node = VDom.findVdomChild(vdom, {flag: flag});
        return node && node.vdom;
    }

    /**
     * Get the ids of all child nodes of the given vdom tree
     * @param vdom
     * @param [childIds=[]]
     * @returns {Array} childIds
     */
    static getChildIds(vdom, childIds=[]) {
        let childNodes = vdom && vdom.cn || [];

        childNodes.forEach(childNode => {
            if (childNode.id) {
                childIds.push(childNode.id);
            }

            childIds = VDom.getChildIds(childNode, childIds);
        });

        return childIds;
    }

    /**
     *
     * @param {Object} vdom
     * @param {Number} index
     * @returns {Array}
     */
    static getColumnNodes(vdom, index) {
        let columnNodes = [];

        if (vdom.cn) {
            vdom.cn.forEach(row => {
                if (row.cn && row.cn[index]) {
                    columnNodes.push(row.cn[index]);
                }
            });
        }

        return columnNodes;
    }

    /**
     *
     * @param {Object} vdom
     * @param {Number} index
     * @returns {Array}
     */
    static getColumnNodesIds(vdom, index) {
        return VDom.getColumnNodes(vdom, index).map(e => e.id);
    }

    /**
     *
     * @param {Object} vdom
     * @param {String} flag
     * @param {Array} [matchArray]
     * @returns {Array} an array of vdom nodes which match the flag
     */
    static getFlags(vdom, flag, matchArray) {
        if (!matchArray) {
            matchArray = [];

            if (vdom.flag === flag) {
                matchArray.push(vdom);
            }
        }

        const childNodes = vdom && vdom.cn || [];

        childNodes.forEach(childNode => {
            if (childNode.flag === flag) {
                matchArray.push(childNode);
            }

            matchArray = VDom.getFlags(childNode, flag, matchArray);
        });

        return matchArray;
    }

    /**
     * Insert a given nodeToInsert after a targetNode inside a given vdom tree
     * @param {Object} vdom The vdom tree containing the targetNode
     * @param {Object} nodeToInsert The new vdom to insert
     * @param {Object|String} targetNodeId Either a vdom node or a vdom node id
     * @returns {Boolean}
     */
    static insertAfterNode(vdom, nodeToInsert, targetNodeId) {
        return VDom.insertNode(vdom, nodeToInsert, targetNodeId, false);
    }

    /**
     * Insert a given nodeToInsert before a targetNode inside a given vdom tree
     * @param {Object} vdom The vdom tree containing the targetNode
     * @param {Object} nodeToInsert The new vdom to insert
     * @param {Object|String} targetNodeId Either a vdom node or a vdom node id
     * @returns {Boolean}
     */
    static insertBeforeNode(vdom, nodeToInsert, targetNodeId) {
        return VDom.insertNode(vdom, nodeToInsert, targetNodeId, true);
    }

    /**
     * Insert a given nodeToInsert before a targetNode inside a given vdom tree
     * @param {Object} vdom The vdom tree containing the targetNode
     * @param {Object} nodeToInsert The new vdom to insert
     * @param {Object|String} targetNodeId Either a vdom node or a vdom node id
     * @param {Boolean} insertBefore true inserts the new node at the same index, index+1 otherwise
     * @returns {Boolean}
     */
    static insertNode(vdom, nodeToInsert, targetNodeId, insertBefore) {
        if (Neo.isObject(targetNodeId)) {
            targetNodeId = targetNodeId.id;
        }

        let targetNode = VDom.findVdomChild(vdom, {id: targetNodeId}),
            index;

        if (targetNode) {
            index = insertBefore ? targetNode.index : targetNode.index + 1;
            targetNode.parentNode.cn.splice(index, 0, nodeToInsert);
            return true;
        }

        return false;
    }

    /**
     * Search vdom child nodes by id or opts object for a given vdom tree
     * @param {Object} [vdom]
     * @param {Object|String} opts Either an object containing vdom node attributes or a string based id
     * @returns {Boolean} true in case the node was found & removed
     */
    static removeVdomChild(vdom, opts) {
        let child = VDom.findVdomChild(vdom, opts);

        if (child) {
            child.parentNode.cn.splice(child.index, 1);
            return true;
        }

        return false;
    }

    /**
     * Replaces a child node inside a vdom tree by a given id
     * @param {Object} vdom
     * @param {String} id
     * @param {Object} newChildNode
     * @returns {Boolean} true in case the node was found and replaced
     */
    static replaceVdomChild(vdom, id, newChildNode) {
        let cn  = vdom.cn || [],
            i   = 0,
            len = cn.length,
            childNode;

        if (vdom.id === id) {
            throw new Error('replaceVdomChild: target id matches the root vnode id: ' + id);
        }

        for (; i < len; i++) {
            childNode = cn[i];

            if (childNode.id === id) {
                cn[i] = newChildNode;
                return true;
            }

            if (VDom.replaceVdomChild(childNode, id, newChildNode)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Neo.vdom.Helper will create ids for each vnode, so we need to sync them into the vdom
     * @param {Neo.vdom.VNode} vnode
     * @param {Object} vdom
     */
    static syncVdomIds(vnode, vdom) {
        if (vnode && vdom) {
            let childNodes = vdom.childNodes || vdom.cn,
                cn, i, len;

            if (vnode.id && vnode.id !== vdom.id) {
                vdom.id = vnode.id;
                // console.log('vdom id set to', vnode.id);
            }

            if (childNodes) {
                cn   = childNodes.filter(item => item.removeDom !== true);
                i    = 0;
                len  = cn && cn.length || 0;

                for (; i < len; i++) {
                    if (vnode.childNodes) {
                        VDom.syncVdomIds(vnode.childNodes[i], cn[i]);
                    }
                }
            }
        }
    }
}

Neo.applyClassConfig(VDom);

/* harmony default export */ __webpack_exports__["default"] = (VDom);

/***/ }),

/***/ "./node_modules/neo.mjs/src/util/VNode.mjs":
/*!*************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/VNode.mjs ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.util.VNode
 * @extends Neo.core.Base
 */
class VNode extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.VNode'
         * @protected
         */
        className: 'Neo.util.VNode'
    }}

    /**
     * Search vnode child nodes by id or opts object for a given vdom tree
     * @param {Object} vnode
     * @param {Object|String} opts Either an object containing vdom node attributes or a string based id
     * @param {Number} [index] Internal flag, do not use it
     * @param {Object} [parentNode] Internal flag, do not use it
     * @returns {Object}
     *     {Number} index
     *     {String} parentId
     *     {Object} vnode
     */
    static findChildVnode(vnode, opts, index, parentNode) {
        index = index || 0;
        opts  = typeof opts !== 'string' ? opts : {id: opts};

        let attrMatch  = true,
            matchArray = [],
            styleMatch = true,
            i          = 0,
            len        = vnode.childNodes && vnode.childNodes.length,
            optsArray, optsLength, subChild;

        optsArray  = Object.entries(opts);
        optsLength = optsArray.length;

        optsArray.forEach(([key, value]) => {
            if (vnode.hasOwnProperty(key)) {
                switch(key) {
                    case 'attributes':
                        if (Neo.isObject(value) && Neo.isObject(vnode[key])) {
                            Object.entries(value).forEach(([attrKey, attrValue]) => {
                                if (!(vnode[key].hasOwnProperty(attrKey) && vnode[key][attrKey] === attrValue)) {
                                    attrMatch = false;
                                }
                            });

                            if (attrMatch) {
                                matchArray.push(true);
                            }
                        }
                        break;
                    case 'className':
                        if (typeof value === 'string' && Neo.isArray(vnode[key])) {
                            if (vnode[key].includes(value)) {
                                matchArray.push(true);
                            }
                        } else if (typeof value === 'string' && typeof vnode[key] === 'string') {
                            if (vnode[key] === value) {
                                matchArray.push(true);
                            }
                        } else if (Neo.isArray(value) && Neo.isArray(vnode[key])) {
                            // todo: either search the vnode array for all keys or compare if the arrays are equal.
                            throw new Error('findChildVnode: cls matching not supported for target & source types of Arrays');
                        }
                        break;
                    case 'style':
                        if (Neo.isObject(value) && Neo.isObject(vnode[key])) {
                            Object.entries(value).forEach(([styleKey, styleValue]) => {
                                if (!(vnode[key].hasOwnProperty(styleKey) && vnode[key][styleKey] === styleValue)) {
                                    styleMatch = false;
                                }
                            });

                            if (styleMatch) {
                                matchArray.push(true);
                            }
                        }
                        break;
                    default:
                        if (vnode[key] === value) {
                            matchArray.push(true);
                        }
                        break;
                }
            }
        });

        if (matchArray.length === optsLength) {
            return {
                index     : index,
                parentNode: parentNode,
                vnode     : vnode
            };
        }

        if (vnode.childNodes) {
            for (; i < len; i++) {
                subChild = VNode.findChildVnode(vnode.childNodes[i], opts, i, vnode);

                if (subChild) {
                    return subChild;
                }
            }
        }

        return null;
    }

    /**
     * Finds a child vnode inside a vnode tree by a given id
     * @param {Object} vnode
     * @param {String|null} id
     * @returns {Object|null} child vnode or null
     */
    static findChildVnodeById(vnode, id) {
        let childNodes = vnode.childNodes || [],
            i          = 0,
            len        = childNodes.length,
            childNode;

        if (vnode.id === id) {
            return vnode;
        }

        for (; i < len; i++) {
            childNode = childNodes[i];

            if (childNode.id === id) {
                return childNode
            }

            childNode = VNode.findChildVnodeById(childNode, id);

            if (childNode) {
                return childNode;
            }
        }

        return null;
    }

    /**
     * Get the ids of all child nodes of the given vnode
     * @param vnode
     * @param [childIds=[]]
     * @returns {Array} childIds
     */
    static getChildIds(vnode, childIds=[]) {
        let childNodes = vnode && vnode.childNodes || [];

        childNodes.forEach(childNode => {
            if (childNode.id) {
                childIds.push(childNode.id);
            }

            childIds = VNode.getChildIds(childNode, childIds);
        });

        return childIds;
    }

    /**
     * Removes a child vnode inside a vnode tree by a given id
     * @param {Object} vnode
     * @param {String} id
     * @returns {Boolean} true in case the node was found and removed
     */
    static removeChildVnode(vnode, id) {
        let childNodes = vnode.childNodes || [],
            i          = 0,
            len        = childNodes.length,
            childNode;

        if (vnode.id === id) {
            throw new Error('removeChildVnode: target id matches the root vnode id: ' + id);
        }

        for (; i < len; i++) {
            childNode = childNodes[i];

            if (childNode.id === id) {
                childNodes.splice(i, 1);
                return true;
            }

            if (VNode.removeChildVnode(childNode, id)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Replaces a child vnode inside a vnode tree by a given id
     * @param {Object} vnode
     * @param {String} id
     * @param {Object} newChildVnode
     * @returns {Boolean} true in case the node was found and replaced
     */
    static replaceChildVnode(vnode, id, newChildVnode) {
        let childNodes = vnode.childNodes || [],
            i          = 0,
            len        = childNodes.length,
            childNode;

        if (vnode.id === id) {
            throw new Error('replaceChildVnode: target id matches the root vnode id: ' + id);
        }

        for (; i < len; i++) {
            childNode = childNodes[i];

            if (childNode.id === id) {
                childNodes[i] = newChildVnode;
                return true;
            }

            if (VNode.replaceChildVnode(childNode, id, newChildVnode)) {
                return true;
            }
        }

        return false;
    }
}

Neo.applyClassConfig(VNode);

/* harmony default export */ __webpack_exports__["default"] = (VNode);

/***/ }),

/***/ "./node_modules/neo.mjs/src/worker/App.mjs":
/*!*************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/App.mjs ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Neo.mjs */ "./node_modules/neo.mjs/src/Neo.mjs");
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/worker/Base.mjs");
/* harmony import */ var _core_export_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/_export.mjs */ "./node_modules/neo.mjs/src/core/_export.mjs");
/* harmony import */ var _manager_DomEvent_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../manager/DomEvent.mjs */ "./node_modules/neo.mjs/src/manager/DomEvent.mjs");
/* harmony import */ var _manager_Instance_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../manager/Instance.mjs */ "./node_modules/neo.mjs/src/manager/Instance.mjs");
/* harmony import */ var _controller_Application_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controller/Application.mjs */ "./node_modules/neo.mjs/src/controller/Application.mjs");
/* harmony import */ var _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/HashHistory.mjs */ "./node_modules/neo.mjs/src/util/HashHistory.mjs");








/**
 * The App worker contains most parts of the framework as well as all apps which get created.
 * See the tutorials for further infos.
 * @class Neo.worker.App
 * @extends Neo.worker.Base
 * @singleton
 */
class App extends _Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.worker.App'
         * @protected
         */
        className: 'Neo.worker.App',
        /**
         * @member {String} ntype='app-worker'
         * @protected
         */
        ntype: 'app-worker',
        /**
         * @member {Object|null} data=null
         * @protected
         */
        data: null,
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true,
        /**
         * @member {String} workerId='app'
         * @protected
         */
        workerId: 'app'
    }}

    /**
     * Only needed for the SharedWorkers context
     * @param {String} appName
     * @param {String} eventName
     */
    fireMainViewsEvent(appName, eventName) {
        this.ports.forEach(port => {
            _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].apps[port.appName].mainViewInstance.fire(eventName, appName);
        });
    }

    /**
     * Only relevant for SharedWorkers
     */
    onDisconnect(data) {
        super.onDisconnect(data);
        this.fireMainViewsEvent(data.appName, 'disconnect');
    }

    /**
     * Every dom event will get forwarded as a worker message from main and ends up here first
     * @param {Object} data useful event properties, differs for different event types. See Neo.main.DomEvents.
     */
    onDomEvent(data) {
        _manager_DomEvent_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].fire(data);
    }

    /**
     * Every URL hash-change will create a post message in main and end up here first.
     * @param {Object} data parsed key-value pairs for each hash value
     */
    onHashChange(data) {
        _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_6__["default"].push(data.data);
    }

    /**
     * The starting point for apps
     * @param {Object} data
     */
    onLoadApplication(data) {
        let me = this,
            path;

        if (data) {
            me.data = data;
            _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.resourcesPath = data.resourcesPath;
        }

        path = me.data.path;

        if (!_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.isExperimental) {
            path = path.startsWith('/') ? path.substring(1) : path;
        }

        __webpack_require__("./node_modules/neo.mjs lazy recursive ^\\.\\/.*$ include: \\/app.mjs$ exclude: \\/node_modules$")(`./${path}`).then(module => {
                module.onStart();

                if (_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.hash) {
                    // short delay to ensure Component Controllers are ready
                    setTimeout(() => _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_6__["default"].push(_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.hash), 5);
                }
            }
        );

        if (_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.hash) {
            setTimeout(() => _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_6__["default"].push(_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.hash), 5);
        }
    }

    /**
     *
     * @param {String} name
     */
    registerMainView(name) {
        this.fireMainViewsEvent(name, 'connect');
    }
}

_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].applyClassConfig(App);

let instance = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].create(App);

_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/worker/Base.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/Base.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony import */ var _Message_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Message.mjs */ "./node_modules/neo.mjs/src/worker/Message.mjs");
/* harmony import */ var _mixin_RemoteMethodAccess_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mixin/RemoteMethodAccess.mjs */ "./node_modules/neo.mjs/src/worker/mixin/RemoteMethodAccess.mjs");





/**
 * The abstract base class for the App, Data & VDom worker
 * @class Neo.worker.Base
 * @extends Neo.core.Base
 * @abstract
 */
class Base extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.worker.Worker'
         * @protected
         */
        className: 'Neo.worker.Worker',
        /**
         * @member {String} ntype='worker'
         * @protected
         */
        ntype: 'worker',
        /**
         * Only needed for SharedWorkers
         * @member {Boolean} isConnected=false
         * @protected
         */
        isConnected: false,
        /**
         * @member {Boolean} isSharedWorker=false
         * @protected
         */
        isSharedWorker: false,
        /**
         * @member {String[]|Neo.core.Base[]|null} mixins=[Observable, RemoteMethodAccess]
         */
        mixins: [_core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], _mixin_RemoteMethodAccess_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]],
        /**
         * Only needed for SharedWorkers
         * @member {Array|null} ports=null
         */
        ports : null,
        /**
         * @member {String|null} workerId=null
         * @protected
         */
        workerId: null
    }}

    /**
     *
     * @param {Object} config={}
     */
    constructor(config={}) {
        super(config);

        let me = this;

        Object.assign(me, {
            isSharedWorker: self.toString() === '[object SharedWorkerGlobalScope]',
            ports         : [],
            promises      : {}
        });

        if (me.isSharedWorker) {
            self.onconnect = me.onConnected.bind(me);
        } else {
            self.onmessage = me.onMessage.bind(me);
        }

        Neo.workerId      = me.workerId;
        Neo.currentWorker = me;
    }

    /**
     *
     * @param {Object} opts
     * @returns {Object|null}
     */
    getPort(opts) {
        let returnPort = null,
            hasMatch;

        this.ports.forEach(port => {
            hasMatch = true;

            Object.entries(opts).forEach(([key, value]) => {
                if (value !== port[key]) {
                    hasMatch = false;
                }
            });

            if (hasMatch) {
                returnPort = port;
            }
        });

        return returnPort;
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        if (!this.isSharedWorker) {
            this.sendMessage('main', {action: 'workerConstructed'});
        }
    }

    /**
     * Only relevant for SharedWorkers
     * @param {Object} e
     */
    onConnected(e) {
        let me = this,
            id = Neo.getId('port');

        me.isConnected = true;

        me.ports.push({
            appName: null,
            id     : id,
            port   : e.ports[0]
        });

        me.ports[me.ports.length - 1].port.onmessage = me.onMessage.bind(me);

        me.fire('connected');

        // todo: find a better way to ensure the remotes are registered before triggering workerConstructed
        setTimeout(() => {
            me.sendMessage('main', {action: 'workerConstructed', port: id});
        }, 100);
    }

    /**
     * Only relevant for SharedWorkers
     */
    onDisconnect(data) {}

    /**
     *
     * @param {Object} e
     */
    onMessage(e) {
        let me      = this,
            data    = e.data,
            action  = data.action,
            replyId = data.replyId,
            promise;

        if (!action) {
            throw new Error('Message action is missing: ' + data.id);
        }

        if (action !== 'reply') {
            me['on' + Neo.capitalize(action)](data);
        } else if (promise = action === 'reply' && me.promises[replyId]) {
            if (data.reject) {
                promise.reject(data.data);
            } else {
                promise.resolve(data.data);
            }

            delete me.promises[replyId];
        }
    }

    /**
     *
     * @param {Object} msg
     */
    onPing(msg) {
        this.resolve(msg, {
            originMsg: msg
        });
    }

    /**
     *
     * @param {Object} msg
     */
    onRegisterNeoConfig(msg) {
        Neo.config = Neo.config || {};
        Object.assign(Neo.config, msg.data);
    }

    /**
     *
     * @param {String} dest app, data, main or vdom (excluding the current worker)
     * @param {Object} opts configs for Neo.worker.Message
     * @param {Array} [transfer] An optional array of Transferable objects to transfer ownership of.
     * If the ownership of an object is transferred, it becomes unusable (neutered) in the context it was sent from
     * and becomes available only to the worker it was sent to.
     * @returns {Promise<any>}
     */
    promiseMessage(dest, opts, transfer) {
        let me = this;

        return new Promise(function(resolve, reject) {
            let message = me.sendMessage(dest, opts, transfer),
                msgId   = message.id;

            me.promises[msgId] = {
                resolve: resolve,
                reject : reject
            };
        });
    }

    /**
     * Only needed for SharedWorkers
     * @param {String} name
     */
    registerApp(name) {
        this.ports.forEach(port => {
            if (!port.appName) {
                port.appName = name;

                this.sendMessage('main', {
                    action :'registerAppName',
                    appName: name
                });
            }
        });
    }

    /**
     * @param {String} dest app, data, main or vdom (excluding the current worker)
     * @param {Object} opts configs for Neo.worker.Message
     * @param {Array} [transfer] An optional array of Transferable objects to transfer ownership of.
     * If the ownership of an object is transferred, it becomes unusable (neutered) in the context it was sent from
     * and becomes available only to the worker it was sent to.
     * @returns {Neo.worker.Message}
     * @protected
     */
    sendMessage(dest, opts, transfer) {
        opts.destination = dest;

        let me = this,
            message, port, portObject;

        if (!me.isSharedWorker) {
            port = self;
        } else {
            if (opts.port) {
                port = me.getPort({id: opts.port}).port;
            } else if (opts.appName) {
                portObject = me.getPort({appName: opts.appName});
                port       = portObject.port;

                opts.port = portObject.id;
            } else {
                port = me.ports[0].port;
            }
        }

        message = new _Message_mjs__WEBPACK_IMPORTED_MODULE_2__["default"](opts);

        port.postMessage(message, transfer);
        return message;
    }
}

Neo.applyClassConfig(Base);



/***/ }),

/***/ "./node_modules/neo.mjs/src/worker/Message.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/Message.mjs ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Message; });
/* harmony import */ var _core_IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/IdGenerator.mjs */ "./node_modules/neo.mjs/src/core/IdGenerator.mjs");


/**
 * A wrapper for worker post messages sent between the App, Data, VDom worker & the main thread.
 * You can add optional params as needed.
 * @class Neo.worker.Message
 */
class Message {
    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        /**
         * @member {String} action
         */

        /**
         * @member {String} destination='main'
         */

        /**
         * @member {String} id=IdGenerator.getId(Neo.workerId)
         */

        /**
         * @member {String} origin=Neo.workerId
         */

        config.destination = config.destination || 'main';
        config.id          = config.id          || _core_IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].getId(Neo.workerId);
        config.origin      = config.origin      || Neo.workerId;

        Object.assign(this, config);
    }
}

const ns = Neo.ns('Neo.worker', true);
ns['Message'] = Message;



/***/ }),

/***/ "./node_modules/neo.mjs/src/worker/mixin/RemoteMethodAccess.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/mixin/RemoteMethodAccess.mjs ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RemoteMethodAccess; });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.worker.mixin.RemoteMethodAccess
 * @extends Neo.core.Base
 */
class RemoteMethodAccess extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.worker.mixin.RemoteMethodAccess'
         * @protected
         */
        className: 'Neo.worker.mixin.RemoteMethodAccess',
        /**
         * @member {String} ntype='mixin-remote-method-access'
         * @protected
         */
        ntype: 'mixin-remote-method-access',
        /**
         * @member {Boolean} mixin=true
         * @protected
         */
        mixin: true
    }}

    /**
     *
     * @param {Object} remote
     * @param method
     * @returns {function(*=, *=): Promise<any>}
     */
    generateRemote(remote, method) {
        let me     = this,
            origin = remote.origin;

        return function(data, buffer) {
            let opts = {
                action         : 'remoteMethod',
                data           : data,
                destination    : origin,
                remoteClassName: remote.className,
                remoteMethod   : method
            };

            if (me.isSharedWorker) {
                opts.appName = opts.appName || data && data.appName;
                opts.port    = opts.port    || data && data.port;
            }

            return me.promiseMessage(origin, opts, buffer);
        };
    }

    /**
     *
     * @param {Object} remote
     */
    onRegisterRemote(remote) {
        if (remote.destination === Neo.workerId) {
            let me        = this,
                className = remote.className,
                exists    = false,
                methods   = remote.methods,
                pkg       = Neo.ns(className, true);

            methods.forEach(function(method) {
                if (remote.origin !== 'main' && pkg[method]) {
                    throw new Error('Duplicate remote method definition ' + className + '.' + method);
                }

                if (!pkg[method] ) {
                    pkg[method] = me.generateRemote(remote, method);
                } else {
                    exists = true;
                }
            });

            if (!exists && Neo.workerId !== 'main') {
                me.fire('remoteregistered', remote);
            }
        }
    }

    /**
     *
     * @param {Object} msg
     */
    onRemoteMethod(msg) {
        let me  = this,
            pkg = Neo.ns(msg.remoteClassName),
            out, method;

        if (!pkg) {
            throw new Error('Invalid remote namespace "' + msg.remoteClassName + '"');
        }

        method = pkg[msg.remoteMethod];

        if (!method) {
            throw new Error('Invalid remote method name "' + msg.remoteMethod + '"');
        }

        if (Array.isArray(msg.data)) {
            out = method.call(pkg, ...msg.data);
        } else {
            out = method.call(pkg, msg.data);
        }

        if (out instanceof Promise) {
            out.then(data => {
                me.resolve(msg, data);
            })
            .catch(err => {
                me.reject(msg, err);
            });
        } else {
            me.resolve(msg, out);
        }
    }

    /**
     * Gets called when promiseMessage gets rejected
     * @param {Object} msg
     * @param {Object} data
     */
    reject(msg, data) {
        let opts = {
            action : 'reply',
            data   : data,
            reject : true,
            replyId: msg.id
        };

        if (this.isSharedWorker) {
            opts.appName = msg.appName;
            opts.port    = msg.port;
        }

        this.sendMessage(msg.origin, opts);
    }

    /**
     * Gets called when promiseMessage gets resolved
     * @param {Object} msg
     * @param {Object} data
     */
    resolve(msg, data) {
        let opts = {
            action : 'reply',
            data   : data,
            replyId: msg.id
        };

        if (this.isSharedWorker) {
            opts.appName = msg.appName;
            opts.port    = msg.port;
        }

        this.sendMessage(msg.origin, opts);
    }
}

Neo.applyClassConfig(RemoteMethodAccess);



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMgbGF6eSBeXFwuXFwvLiokIGluY2x1ZGU6IFxcL2FwcC5tanMkIGV4Y2x1ZGU6IFxcL25vZGVfbW9kdWxlcyQgc3RyaWN0IG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL0RlZmF1bHRDb25maWcubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9OZW8ubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb2xsZWN0aW9uL0Jhc2UubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb2xsZWN0aW9uL0ZpbHRlci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbGxlY3Rpb24vU29ydGVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udHJvbGxlci9BcHBsaWNhdGlvbi5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRyb2xsZXIvQmFzZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvQmFzZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvSWRHZW5lcmF0b3IubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL0xvZ2dlci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvT2JzZXJ2YWJsZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvVXRpbC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvX2V4cG9ydC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21hbmFnZXIvQmFzZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21hbmFnZXIvQ29tcG9uZW50Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFuYWdlci9Eb21FdmVudC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21hbmFnZXIvRm9jdXMubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYW5hZ2VyL0luc3RhbmNlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9BcnJheS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvSGFzaEhpc3RvcnkubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL1ZEb20ubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL1ZOb2RlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvd29ya2VyL0FwcC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3dvcmtlci9CYXNlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvd29ya2VyL01lc3NhZ2UubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy93b3JrZXIvbWl4aW4vUmVtb3RlTWV0aG9kQWNjZXNzLm1qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDNUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQzs7Ozs7Ozs7Ozs7O0FDaGhDQTtBQUFBO0FBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDekxEO0FBQUE7QUFBQTtBQUFnRDs7QUFFaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0ZBQWdGO0FBQ2hGLGdGQUFnRjtBQUNoRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiYXBwd29ya2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0c2VsZltcIndlYnBhY2tDaHVua1wiXSA9IGZ1bmN0aW9uIHdlYnBhY2tDaHVua0NhbGxiYWNrKGNodW5rSWRzLCBtb3JlTW9kdWxlcykge1xuIFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cbiBcdFx0d2hpbGUoY2h1bmtJZHMubGVuZ3RoKVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkcy5wb3AoKV0gPSAxO1xuIFx0fTtcblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMVwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMVxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcbiBcdFx0cHJvbWlzZXMucHVzaChQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdC8vIFwiMVwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRcdGlmKCFpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdGltcG9ydFNjcmlwdHMoX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5qc1wiKTtcbiBcdFx0XHR9XG4gXHRcdH0pKTtcbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvd29ya2VyL0FwcC5tanNcIik7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwcy9jb3ZpZC9hcHBcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL2NvdmlkL2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+N2JhYzA5MjFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+ZDg1ZGUyMDNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXN+NjBmM2Y5ZmJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy13ZWJ+MGY4YjMwZmFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy13ZWJ+OWIzNjlmOTJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy13ZWJ+MGZhMzliYTFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MjMwODJmYzdcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXMtdGFibGUtY29udGFpbmVyLWFwcH5jaHVua3N+YmRmNTRhZDJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXN+YmNjMzllZWVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXN+ODI5Mzk5Y2FcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXN+ODU3NDVjZjhcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHBcIlxuXHRdLFxuXHRcIi4vYXBwcy9jb3ZpZC9hcHAubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9jb3ZpZC9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjFlM2ZhNGVkXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfmFjMWNlMjBlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfjdiYWMwOTIxXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfmQ4NWRlMjAzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzfjYwZjNmOWZiXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjBmOGIzMGZhXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjliMzY5ZjkyXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjBmYTM5YmExXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjIzMDgyZmM3XCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzLXRhYmxlLWNvbnRhaW5lci1hcHB+Y2h1bmtzfmJkZjU0YWQyXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzfmJjYzM5ZWVlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzfjgyOTM5OWNhXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzfjg1NzQ1Y2Y4XCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHBcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwXCJcblx0XSxcblx0XCIuL2FwcHMvcmVhbHdvcmxkL2FwcFwiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvcmVhbHdvcmxkL2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MjMwODJmYzdcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcFwiXG5cdF0sXG5cdFwiLi9hcHBzL3JlYWx3b3JsZC9hcHAubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9yZWFsd29ybGQvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4yMzA4MmZjN1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwXCJcblx0XSxcblx0XCIuL2FwcHMvcmVhbHdvcmxkMi9hcHBcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3JlYWx3b3JsZDIvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX43YmFjMDkyMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX5kODVkZTIwM1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc342MGYzZjlmYlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn4wZjhiMzBmYVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn45YjM2OWY5MlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn4wZmEzOWJhMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4yMzA4MmZjN1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc35iY2MzOWVlZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc344MjkzOTljYVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc344NTc0NWNmOFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcFwiXG5cdF0sXG5cdFwiLi9hcHBzL3JlYWx3b3JsZDIvYXBwLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvcmVhbHdvcmxkMi9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjFlM2ZhNGVkXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfmFjMWNlMjBlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfjdiYWMwOTIxXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfmQ4NWRlMjAzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzfjYwZjNmOWZiXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjBmOGIzMGZhXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjliMzY5ZjkyXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjBmYTM5YmExXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjIzMDgyZmM3XCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzfmJjYzM5ZWVlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzfjgyOTM5OWNhXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzfjg1NzQ1Y2Y4XCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwXCJcblx0XSxcblx0XCIuL2FwcHMvc2hhcmVkY292aWQvYXBwXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9zaGFyZWRjb3ZpZC9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjFlM2ZhNGVkXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfmFjMWNlMjBlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfjdiYWMwOTIxXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfmQ4NWRlMjAzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzfjYwZjNmOWZiXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjBmOGIzMGZhXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjliMzY5ZjkyXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjBmYTM5YmExXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjIzMDgyZmM3XCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzLXRhYmxlLWNvbnRhaW5lci1hcHB+Y2h1bmtzfmJkZjU0YWQyXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzfmJjYzM5ZWVlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzfjgyOTM5OWNhXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzfjg1NzQ1Y2Y4XCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHBcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwXCJcblx0XSxcblx0XCIuL2FwcHMvc2hhcmVkY292aWQvYXBwLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWQvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX43YmFjMDkyMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX5kODVkZTIwM1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc342MGYzZjlmYlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn4wZjhiMzBmYVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn45YjM2OWY5MlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn4wZmEzOWJhMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4yMzA4MmZjN1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlcy10YWJsZS1jb250YWluZXItYXBwfmNodW5rc35iZGY1NGFkMlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc35iY2MzOWVlZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc344MjkzOTljYVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc344NTc0NWNmOFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcFwiXG5cdF0sXG5cdFwiLi9hcHBzL3NoYXJlZGNvdmlkY2hhcnQvYXBwXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9zaGFyZWRjb3ZpZGNoYXJ0L2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcImNodW5rcy9hcHBzLXNoYXJlZGNvdmlkY2hhcnQtYXBwXCJcblx0XSxcblx0XCIuL2FwcHMvc2hhcmVkY292aWRjaGFydC9hcHAubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9zaGFyZWRjb3ZpZGNoYXJ0L2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcImNodW5rcy9hcHBzLXNoYXJlZGNvdmlkY2hhcnQtYXBwXCJcblx0XSxcblx0XCIuL2FwcHMvc2hhcmVkY292aWRnYWxsZXJ5L2FwcFwiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWRnYWxsZXJ5L2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcImNodW5rcy9hcHBzLXNoYXJlZGNvdmlkZ2FsbGVyeS1hcHBcIlxuXHRdLFxuXHRcIi4vYXBwcy9zaGFyZWRjb3ZpZGdhbGxlcnkvYXBwLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWRnYWxsZXJ5L2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcImNodW5rcy9hcHBzLXNoYXJlZGNvdmlkZ2FsbGVyeS1hcHBcIlxuXHRdLFxuXHRcIi4vYXBwcy9zaGFyZWRjb3ZpZGhlbGl4L2FwcFwiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWRoZWxpeC9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjFlM2ZhNGVkXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfmFjMWNlMjBlXCIsXG5cdFx0XCJjaHVua3MvYXBwcy1zaGFyZWRjb3ZpZGhlbGl4LWFwcFwiXG5cdF0sXG5cdFwiLi9hcHBzL3NoYXJlZGNvdmlkaGVsaXgvYXBwLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWRoZWxpeC9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjFlM2ZhNGVkXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfmFjMWNlMjBlXCIsXG5cdFx0XCJjaHVua3MvYXBwcy1zaGFyZWRjb3ZpZGhlbGl4LWFwcFwiXG5cdF0sXG5cdFwiLi9hcHBzL3NoYXJlZGNvdmlkbWFwL2FwcFwiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWRtYXAvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwiY2h1bmtzL2FwcHMtc2hhcmVkY292aWRtYXAtYXBwXCJcblx0XSxcblx0XCIuL2FwcHMvc2hhcmVkY292aWRtYXAvYXBwLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkY292aWRtYXAvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwiY2h1bmtzL2FwcHMtc2hhcmVkY292aWRtYXAtYXBwXCJcblx0XSxcblx0XCIuL2FwcHMvc2hhcmVkZGlhbG9nL2FwcFwiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkZGlhbG9nL2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+N2JhYzA5MjFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+ZDg1ZGUyMDNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MjMwODJmYzdcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtc2hhcmVkZGlhbG9nLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRkaWFsb2cyLWFwcH5jaHVua3MvZXhhbXBsZXMtZGlhbG9nLWFwcFwiLFxuXHRcdFwiY2h1bmtzL2FwcHMtc2hhcmVkZGlhbG9nLWFwcFwiXG5cdF0sXG5cdFwiLi9hcHBzL3NoYXJlZGRpYWxvZy9hcHAubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvYXBwcy9zaGFyZWRkaWFsb2cvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX43YmFjMDkyMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX5kODVkZTIwM1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4yMzA4MmZjN1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1zaGFyZWRkaWFsb2ctYXBwfmNodW5rcy9hcHBzLXNoYXJlZGRpYWxvZzItYXBwfmNodW5rcy9leGFtcGxlcy1kaWFsb2ctYXBwXCIsXG5cdFx0XCJjaHVua3MvYXBwcy1zaGFyZWRkaWFsb2ctYXBwXCJcblx0XSxcblx0XCIuL2FwcHMvc2hhcmVkZGlhbG9nMi9hcHBcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3NoYXJlZGRpYWxvZzIvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX43YmFjMDkyMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX5kODVkZTIwM1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4yMzA4MmZjN1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1zaGFyZWRkaWFsb2ctYXBwfmNodW5rcy9hcHBzLXNoYXJlZGRpYWxvZzItYXBwfmNodW5rcy9leGFtcGxlcy1kaWFsb2ctYXBwXCIsXG5cdFx0XCJjaHVua3MvYXBwcy1zaGFyZWRkaWFsb2cyLWFwcFwiXG5cdF0sXG5cdFwiLi9hcHBzL3NoYXJlZGRpYWxvZzIvYXBwLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvc2hhcmVkZGlhbG9nMi9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjFlM2ZhNGVkXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfmFjMWNlMjBlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfjdiYWMwOTIxXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfmQ4NWRlMjAzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjIzMDgyZmM3XCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLXNoYXJlZGRpYWxvZy1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkZGlhbG9nMi1hcHB+Y2h1bmtzL2V4YW1wbGVzLWRpYWxvZy1hcHBcIixcblx0XHRcImNodW5rcy9hcHBzLXNoYXJlZGRpYWxvZzItYXBwXCJcblx0XSxcblx0XCIuL2FwcHMvd2Vic2l0ZS9hcHBcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9hcHBzL3dlYnNpdGUvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX43YmFjMDkyMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX5kODVkZTIwM1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn4wZjhiMzBmYVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn45YjM2OWY5MlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn4wZmEzOWJhMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4yMzA4MmZjN1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy13ZWJzaXRlLWFwcFwiXG5cdF0sXG5cdFwiLi9hcHBzL3dlYnNpdGUvYXBwLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2FwcHMvd2Vic2l0ZS9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjFlM2ZhNGVkXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfmFjMWNlMjBlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfjdiYWMwOTIxXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfmQ4NWRlMjAzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjBmOGIzMGZhXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjliMzY5ZjkyXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjBmYTM5YmExXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjIzMDgyZmM3XCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLXdlYnNpdGUtYXBwXCJcblx0XSxcblx0XCIuL2RvY3MvYXBwXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvZG9jcy9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjFlM2ZhNGVkXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfmFjMWNlMjBlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfjdiYWMwOTIxXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfmQ4NWRlMjAzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjBmOGIzMGZhXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjliMzY5ZjkyXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjBmYTM5YmExXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjIzMDgyZmM3XCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9kb2NzLWFwcFwiXG5cdF0sXG5cdFwiLi9kb2NzL2FwcC5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9kb2NzL2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+N2JhYzA5MjFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+ZDg1ZGUyMDNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy13ZWJ+MGY4YjMwZmFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy13ZWJ+OWIzNjlmOTJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy13ZWJ+MGZhMzliYTFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MjMwODJmYzdcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2RvY3MtYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL2J1dHRvbi9iYXNlL2FwcFwiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL2J1dHRvbi9iYXNlL2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+N2JhYzA5MjFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+ZDg1ZGUyMDNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXN+NjBmM2Y5ZmJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWJ1dHRvbi1iYXNlLWFwcH5jaHVua3MvZXhhbXBsZXMtYnV0dG9uLXNwbGl0LWFwcH5jaHVua3MvZXhhbXBsZXMtY29tcG9uZW50LWN+YWQxYjUyYzVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWJ1dHRvbi1iYXNlLWFwcFwiXG5cdF0sXG5cdFwiLi9leGFtcGxlcy9idXR0b24vYmFzZS9hcHAubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvYnV0dG9uL2Jhc2UvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX43YmFjMDkyMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX5kODVkZTIwM1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc342MGYzZjlmYlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtYnV0dG9uLWJhc2UtYXBwfmNodW5rcy9leGFtcGxlcy1idXR0b24tc3BsaXQtYXBwfmNodW5rcy9leGFtcGxlcy1jb21wb25lbnQtY35hZDFiNTJjNVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtYnV0dG9uLWJhc2UtYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL2J1dHRvbi9zcGxpdC9hcHBcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9idXR0b24vc3BsaXQvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX43YmFjMDkyMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX5kODVkZTIwM1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc342MGYzZjlmYlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtYnV0dG9uLWJhc2UtYXBwfmNodW5rcy9leGFtcGxlcy1idXR0b24tc3BsaXQtYXBwfmNodW5rcy9leGFtcGxlcy1jb21wb25lbnQtY35hZDFiNTJjNVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtYnV0dG9uLXNwbGl0LWFwcFwiXG5cdF0sXG5cdFwiLi9leGFtcGxlcy9idXR0b24vc3BsaXQvYXBwLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL2J1dHRvbi9zcGxpdC9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjFlM2ZhNGVkXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfmFjMWNlMjBlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfjdiYWMwOTIxXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfmQ4NWRlMjAzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzfjYwZjNmOWZiXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1idXR0b24tYmFzZS1hcHB+Y2h1bmtzL2V4YW1wbGVzLWJ1dHRvbi1zcGxpdC1hcHB+Y2h1bmtzL2V4YW1wbGVzLWNvbXBvbmVudC1jfmFkMWI1MmM1XCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1idXR0b24tc3BsaXQtYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL2NhbGVuZGFyL2Jhc2ljL2FwcFwiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL2NhbGVuZGFyL2Jhc2ljL2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+N2JhYzA5MjFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+ZDg1ZGUyMDNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXN+NjBmM2Y5ZmJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy13ZWJ+MGY4YjMwZmFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy13ZWJ+OWIzNjlmOTJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy13ZWJ+MGZhMzliYTFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MjMwODJmYzdcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWNhbGVuZGFyLWJhc2ljLWFwcH5jaHVua3MvZXhhbXBsZXMtY29tcG9uZW50LWRhdGVTZWxlY3Rvci1hcHB+Y2h1bmtzL2V4YW1wbGV+ZmI0YzQxNWVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWNhbGVuZGFyLWJhc2ljLWFwcH5jaHVua3MvZXhhbXBsZXMtZm9ybS1maWVsZC10aW1lLWFwcFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtY2FsZW5kYXItYmFzaWMtYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL2NhbGVuZGFyL2Jhc2ljL2FwcC5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9jYWxlbmRhci9iYXNpYy9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjFlM2ZhNGVkXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfmFjMWNlMjBlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfjdiYWMwOTIxXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfmQ4NWRlMjAzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzfjYwZjNmOWZiXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjBmOGIzMGZhXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjliMzY5ZjkyXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjBmYTM5YmExXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjIzMDgyZmM3XCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1jYWxlbmRhci1iYXNpYy1hcHB+Y2h1bmtzL2V4YW1wbGVzLWNvbXBvbmVudC1kYXRlU2VsZWN0b3ItYXBwfmNodW5rcy9leGFtcGxlfmZiNGM0MTVlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1jYWxlbmRhci1iYXNpYy1hcHB+Y2h1bmtzL2V4YW1wbGVzLWZvcm0tZmllbGQtdGltZS1hcHBcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWNhbGVuZGFyLWJhc2ljLWFwcFwiXG5cdF0sXG5cdFwiLi9leGFtcGxlcy9jaGFydHMvYXBwXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvY2hhcnRzL2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcImNodW5rcy9leGFtcGxlcy1jaGFydHMtYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL2NoYXJ0cy9hcHAubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvY2hhcnRzL2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcImNodW5rcy9leGFtcGxlcy1jaGFydHMtYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL2NvbXBvbmVudC9jaGlwL2FwcFwiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL2NvbXBvbmVudC9jaGlwL2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+N2JhYzA5MjFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+ZDg1ZGUyMDNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXN+NjBmM2Y5ZmJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWJ1dHRvbi1iYXNlLWFwcH5jaHVua3MvZXhhbXBsZXMtYnV0dG9uLXNwbGl0LWFwcH5jaHVua3MvZXhhbXBsZXMtY29tcG9uZW50LWN+YWQxYjUyYzVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWNvbXBvbmVudC1jaGlwLWFwcH5jaHVua3MvZXhhbXBsZXMtbGlzdC1jaGlwLWFwcFwiLFxuXHRcdFwiY2h1bmtzL2V4YW1wbGVzLWNvbXBvbmVudC1jaGlwLWFwcFwiXG5cdF0sXG5cdFwiLi9leGFtcGxlcy9jb21wb25lbnQvY2hpcC9hcHAubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvY29tcG9uZW50L2NoaXAvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX43YmFjMDkyMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX5kODVkZTIwM1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc342MGYzZjlmYlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtYnV0dG9uLWJhc2UtYXBwfmNodW5rcy9leGFtcGxlcy1idXR0b24tc3BsaXQtYXBwfmNodW5rcy9leGFtcGxlcy1jb21wb25lbnQtY35hZDFiNTJjNVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtY29tcG9uZW50LWNoaXAtYXBwfmNodW5rcy9leGFtcGxlcy1saXN0LWNoaXAtYXBwXCIsXG5cdFx0XCJjaHVua3MvZXhhbXBsZXMtY29tcG9uZW50LWNoaXAtYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL2NvbXBvbmVudC9jaXJjbGUvYXBwXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvY29tcG9uZW50L2NpcmNsZS9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjFlM2ZhNGVkXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfmFjMWNlMjBlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfjdiYWMwOTIxXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfmQ4NWRlMjAzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzfjYwZjNmOWZiXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1idXR0b24tYmFzZS1hcHB+Y2h1bmtzL2V4YW1wbGVzLWJ1dHRvbi1zcGxpdC1hcHB+Y2h1bmtzL2V4YW1wbGVzLWNvbXBvbmVudC1jfmFkMWI1MmM1XCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1jb21wb25lbnQtY2lyY2xlLWFwcFwiXG5cdF0sXG5cdFwiLi9leGFtcGxlcy9jb21wb25lbnQvY2lyY2xlL2FwcC5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9jb21wb25lbnQvY2lyY2xlL2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+N2JhYzA5MjFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+ZDg1ZGUyMDNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXN+NjBmM2Y5ZmJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWJ1dHRvbi1iYXNlLWFwcH5jaHVua3MvZXhhbXBsZXMtYnV0dG9uLXNwbGl0LWFwcH5jaHVua3MvZXhhbXBsZXMtY29tcG9uZW50LWN+YWQxYjUyYzVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWNvbXBvbmVudC1jaXJjbGUtYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL2NvbXBvbmVudC9jb3JvbmFHYWxsZXJ5L2FwcFwiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL2NvbXBvbmVudC9jb3JvbmFHYWxsZXJ5L2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+N2JhYzA5MjFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+ZDg1ZGUyMDNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXN+NjBmM2Y5ZmJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy13ZWJ+MGY4YjMwZmFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXN+ODU3NDVjZjhcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWNvbXBvbmVudC1jb3JvbmFHYWxsZXJ5LWFwcFwiXG5cdF0sXG5cdFwiLi9leGFtcGxlcy9jb21wb25lbnQvY29yb25hR2FsbGVyeS9hcHAubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvY29tcG9uZW50L2Nvcm9uYUdhbGxlcnkvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX43YmFjMDkyMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX5kODVkZTIwM1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc342MGYzZjlmYlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn4wZjhiMzBmYVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc344NTc0NWNmOFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtY29tcG9uZW50LWNvcm9uYUdhbGxlcnktYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL2NvbXBvbmVudC9jb3JvbmFIZWxpeC9hcHBcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9jb21wb25lbnQvY29yb25hSGVsaXgvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX43YmFjMDkyMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX5kODVkZTIwM1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc342MGYzZjlmYlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn4wZjhiMzBmYVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc344MjkzOTljYVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtY29tcG9uZW50LWNvcm9uYUhlbGl4LWFwcFwiXG5cdF0sXG5cdFwiLi9leGFtcGxlcy9jb21wb25lbnQvY29yb25hSGVsaXgvYXBwLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL2NvbXBvbmVudC9jb3JvbmFIZWxpeC9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjFlM2ZhNGVkXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfmFjMWNlMjBlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfjdiYWMwOTIxXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfmQ4NWRlMjAzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzfjYwZjNmOWZiXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjBmOGIzMGZhXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzfjgyOTM5OWNhXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1jb21wb25lbnQtY29yb25hSGVsaXgtYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL2NvbXBvbmVudC9kYXRlU2VsZWN0b3IvYXBwXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvY29tcG9uZW50L2RhdGVTZWxlY3Rvci9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjFlM2ZhNGVkXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfmFjMWNlMjBlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfjdiYWMwOTIxXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfmQ4NWRlMjAzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzfjYwZjNmOWZiXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1idXR0b24tYmFzZS1hcHB+Y2h1bmtzL2V4YW1wbGVzLWJ1dHRvbi1zcGxpdC1hcHB+Y2h1bmtzL2V4YW1wbGVzLWNvbXBvbmVudC1jfmFkMWI1MmM1XCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1jYWxlbmRhci1iYXNpYy1hcHB+Y2h1bmtzL2V4YW1wbGVzLWNvbXBvbmVudC1kYXRlU2VsZWN0b3ItYXBwfmNodW5rcy9leGFtcGxlfmZiNGM0MTVlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1jb21wb25lbnQtZGF0ZVNlbGVjdG9yLWFwcFwiXG5cdF0sXG5cdFwiLi9leGFtcGxlcy9jb21wb25lbnQvZGF0ZVNlbGVjdG9yL2FwcC5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9jb21wb25lbnQvZGF0ZVNlbGVjdG9yL2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+N2JhYzA5MjFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+ZDg1ZGUyMDNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXN+NjBmM2Y5ZmJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWJ1dHRvbi1iYXNlLWFwcH5jaHVua3MvZXhhbXBsZXMtYnV0dG9uLXNwbGl0LWFwcH5jaHVua3MvZXhhbXBsZXMtY29tcG9uZW50LWN+YWQxYjUyYzVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWNhbGVuZGFyLWJhc2ljLWFwcH5jaHVua3MvZXhhbXBsZXMtY29tcG9uZW50LWRhdGVTZWxlY3Rvci1hcHB+Y2h1bmtzL2V4YW1wbGV+ZmI0YzQxNWVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWNvbXBvbmVudC1kYXRlU2VsZWN0b3ItYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL2NvbXBvbmVudC9nYWxsZXJ5L2FwcFwiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL2NvbXBvbmVudC9nYWxsZXJ5L2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+N2JhYzA5MjFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+ZDg1ZGUyMDNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXN+NjBmM2Y5ZmJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy13ZWJ+MGY4YjMwZmFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXN+ODU3NDVjZjhcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWNvbXBvbmVudC1nYWxsZXJ5LWFwcFwiXG5cdF0sXG5cdFwiLi9leGFtcGxlcy9jb21wb25lbnQvZ2FsbGVyeS9hcHAubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvY29tcG9uZW50L2dhbGxlcnkvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX43YmFjMDkyMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX5kODVkZTIwM1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc342MGYzZjlmYlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn4wZjhiMzBmYVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc344NTc0NWNmOFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtY29tcG9uZW50LWdhbGxlcnktYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL2NvbXBvbmVudC9oZWxpeC9hcHBcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9jb21wb25lbnQvaGVsaXgvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX43YmFjMDkyMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX5kODVkZTIwM1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc342MGYzZjlmYlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn4wZjhiMzBmYVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc344MjkzOTljYVwiLFxuXHRcdFwiY2h1bmtzL2V4YW1wbGVzLWNvbXBvbmVudC1oZWxpeC1hcHBcIlxuXHRdLFxuXHRcIi4vZXhhbXBsZXMvY29tcG9uZW50L2hlbGl4L2FwcC5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9jb21wb25lbnQvaGVsaXgvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX43YmFjMDkyMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX5kODVkZTIwM1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc342MGYzZjlmYlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn4wZjhiMzBmYVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc344MjkzOTljYVwiLFxuXHRcdFwiY2h1bmtzL2V4YW1wbGVzLWNvbXBvbmVudC1oZWxpeC1hcHBcIlxuXHRdLFxuXHRcIi4vZXhhbXBsZXMvY29udGFpbmVyL2FwcFwiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL2NvbnRhaW5lci9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjFlM2ZhNGVkXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfmFjMWNlMjBlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1jb250YWluZXItYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL2NvbnRhaW5lci9hcHAubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvY29udGFpbmVyL2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWNvbnRhaW5lci1hcHBcIlxuXHRdLFxuXHRcIi4vZXhhbXBsZXMvZGlhbG9nL2FwcFwiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL2RpYWxvZy9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjFlM2ZhNGVkXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfmFjMWNlMjBlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfjdiYWMwOTIxXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLXNoYXJlZGRpYWxvZy1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkZGlhbG9nMi1hcHB+Y2h1bmtzL2V4YW1wbGVzLWRpYWxvZy1hcHBcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWRpYWxvZy1hcHBcIlxuXHRdLFxuXHRcIi4vZXhhbXBsZXMvZGlhbG9nL2FwcC5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9kaWFsb2cvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX43YmFjMDkyMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1zaGFyZWRkaWFsb2ctYXBwfmNodW5rcy9hcHBzLXNoYXJlZGRpYWxvZzItYXBwfmNodW5rcy9leGFtcGxlcy1kaWFsb2ctYXBwXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1kaWFsb2ctYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL2ZpZWxkcy9hcHBcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9maWVsZHMvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX43YmFjMDkyMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX5kODVkZTIwM1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc342MGYzZjlmYlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn4wZjhiMzBmYVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn45YjM2OWY5MlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn4wZmEzOWJhMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc35iY2MzOWVlZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtY2FsZW5kYXItYmFzaWMtYXBwfmNodW5rcy9leGFtcGxlcy1jb21wb25lbnQtZGF0ZVNlbGVjdG9yLWFwcH5jaHVua3MvZXhhbXBsZX5mYjRjNDE1ZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtZmllbGRzLWFwcFwiXG5cdF0sXG5cdFwiLi9leGFtcGxlcy9maWVsZHMvYXBwLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL2ZpZWxkcy9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjFlM2ZhNGVkXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfmFjMWNlMjBlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfjdiYWMwOTIxXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfmQ4NWRlMjAzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzfjYwZjNmOWZiXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjBmOGIzMGZhXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjliMzY5ZjkyXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjBmYTM5YmExXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzfmJjYzM5ZWVlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1jYWxlbmRhci1iYXNpYy1hcHB+Y2h1bmtzL2V4YW1wbGVzLWNvbXBvbmVudC1kYXRlU2VsZWN0b3ItYXBwfmNodW5rcy9leGFtcGxlfmZiNGM0MTVlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1maWVsZHMtYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL2Zvcm0vZmllbGQvY2hpcC9hcHBcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9mb3JtL2ZpZWxkL2NoaXAvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX43YmFjMDkyMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX5kODVkZTIwM1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc342MGYzZjlmYlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn4wZjhiMzBmYVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtYnV0dG9uLWJhc2UtYXBwfmNodW5rcy9leGFtcGxlcy1idXR0b24tc3BsaXQtYXBwfmNodW5rcy9leGFtcGxlcy1jb21wb25lbnQtY35hZDFiNTJjNVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn45YjM2OWY5MlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc35iY2MzOWVlZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtZm9ybS1maWVsZC1jaGlwLWFwcFwiXG5cdF0sXG5cdFwiLi9leGFtcGxlcy9mb3JtL2ZpZWxkL2NoaXAvYXBwLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL2Zvcm0vZmllbGQvY2hpcC9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjFlM2ZhNGVkXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfmFjMWNlMjBlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfjdiYWMwOTIxXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfmQ4NWRlMjAzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzfjYwZjNmOWZiXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjBmOGIzMGZhXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1idXR0b24tYmFzZS1hcHB+Y2h1bmtzL2V4YW1wbGVzLWJ1dHRvbi1zcGxpdC1hcHB+Y2h1bmtzL2V4YW1wbGVzLWNvbXBvbmVudC1jfmFkMWI1MmM1XCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjliMzY5ZjkyXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzfmJjYzM5ZWVlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1mb3JtLWZpZWxkLWNoaXAtYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL2Zvcm0vZmllbGQvZGF0ZS9hcHBcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9mb3JtL2ZpZWxkL2RhdGUvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX43YmFjMDkyMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX5kODVkZTIwM1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc342MGYzZjlmYlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtYnV0dG9uLWJhc2UtYXBwfmNodW5rcy9leGFtcGxlcy1idXR0b24tc3BsaXQtYXBwfmNodW5rcy9leGFtcGxlcy1jb21wb25lbnQtY35hZDFiNTJjNVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtY2FsZW5kYXItYmFzaWMtYXBwfmNodW5rcy9leGFtcGxlcy1jb21wb25lbnQtZGF0ZVNlbGVjdG9yLWFwcH5jaHVua3MvZXhhbXBsZX5mYjRjNDE1ZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtZm9ybS1maWVsZC1kYXRlLWFwcFwiXG5cdF0sXG5cdFwiLi9leGFtcGxlcy9mb3JtL2ZpZWxkL2RhdGUvYXBwLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL2Zvcm0vZmllbGQvZGF0ZS9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjFlM2ZhNGVkXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfmFjMWNlMjBlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfjdiYWMwOTIxXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfmQ4NWRlMjAzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzfjYwZjNmOWZiXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1idXR0b24tYmFzZS1hcHB+Y2h1bmtzL2V4YW1wbGVzLWJ1dHRvbi1zcGxpdC1hcHB+Y2h1bmtzL2V4YW1wbGVzLWNvbXBvbmVudC1jfmFkMWI1MmM1XCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1jYWxlbmRhci1iYXNpYy1hcHB+Y2h1bmtzL2V4YW1wbGVzLWNvbXBvbmVudC1kYXRlU2VsZWN0b3ItYXBwfmNodW5rcy9leGFtcGxlfmZiNGM0MTVlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1mb3JtLWZpZWxkLWRhdGUtYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL2Zvcm0vZmllbGQvZW1haWwvYXBwXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvZm9ybS9maWVsZC9lbWFpbC9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjFlM2ZhNGVkXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfmFjMWNlMjBlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfjdiYWMwOTIxXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfmQ4NWRlMjAzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzfjYwZjNmOWZiXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1idXR0b24tYmFzZS1hcHB+Y2h1bmtzL2V4YW1wbGVzLWJ1dHRvbi1zcGxpdC1hcHB+Y2h1bmtzL2V4YW1wbGVzLWNvbXBvbmVudC1jfmFkMWI1MmM1XCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1mb3JtLWZpZWxkLWVtYWlsLWFwcFwiXG5cdF0sXG5cdFwiLi9leGFtcGxlcy9mb3JtL2ZpZWxkL2VtYWlsL2FwcC5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9mb3JtL2ZpZWxkL2VtYWlsL2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+N2JhYzA5MjFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+ZDg1ZGUyMDNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXN+NjBmM2Y5ZmJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWJ1dHRvbi1iYXNlLWFwcH5jaHVua3MvZXhhbXBsZXMtYnV0dG9uLXNwbGl0LWFwcH5jaHVua3MvZXhhbXBsZXMtY29tcG9uZW50LWN+YWQxYjUyYzVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWZvcm0tZmllbGQtZW1haWwtYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL2Zvcm0vZmllbGQvbnVtYmVyL2FwcFwiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL2Zvcm0vZmllbGQvbnVtYmVyL2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+N2JhYzA5MjFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+ZDg1ZGUyMDNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXN+NjBmM2Y5ZmJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWJ1dHRvbi1iYXNlLWFwcH5jaHVua3MvZXhhbXBsZXMtYnV0dG9uLXNwbGl0LWFwcH5jaHVua3MvZXhhbXBsZXMtY29tcG9uZW50LWN+YWQxYjUyYzVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWZvcm0tZmllbGQtbnVtYmVyLWFwcFwiXG5cdF0sXG5cdFwiLi9leGFtcGxlcy9mb3JtL2ZpZWxkL251bWJlci9hcHAubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvZm9ybS9maWVsZC9udW1iZXIvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX43YmFjMDkyMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX5kODVkZTIwM1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc342MGYzZjlmYlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtYnV0dG9uLWJhc2UtYXBwfmNodW5rcy9leGFtcGxlcy1idXR0b24tc3BsaXQtYXBwfmNodW5rcy9leGFtcGxlcy1jb21wb25lbnQtY35hZDFiNTJjNVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtZm9ybS1maWVsZC1udW1iZXItYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL2Zvcm0vZmllbGQvcGlja2VyL2FwcFwiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL2Zvcm0vZmllbGQvcGlja2VyL2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+N2JhYzA5MjFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+ZDg1ZGUyMDNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXN+NjBmM2Y5ZmJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWJ1dHRvbi1iYXNlLWFwcH5jaHVua3MvZXhhbXBsZXMtYnV0dG9uLXNwbGl0LWFwcH5jaHVua3MvZXhhbXBsZXMtY29tcG9uZW50LWN+YWQxYjUyYzVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWZvcm0tZmllbGQtcGlja2VyLWFwcFwiXG5cdF0sXG5cdFwiLi9leGFtcGxlcy9mb3JtL2ZpZWxkL3BpY2tlci9hcHAubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvZm9ybS9maWVsZC9waWNrZXIvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX43YmFjMDkyMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX5kODVkZTIwM1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc342MGYzZjlmYlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtYnV0dG9uLWJhc2UtYXBwfmNodW5rcy9leGFtcGxlcy1idXR0b24tc3BsaXQtYXBwfmNodW5rcy9leGFtcGxlcy1jb21wb25lbnQtY35hZDFiNTJjNVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtZm9ybS1maWVsZC1waWNrZXItYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL2Zvcm0vZmllbGQvc2VsZWN0L2FwcFwiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL2Zvcm0vZmllbGQvc2VsZWN0L2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+N2JhYzA5MjFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+ZDg1ZGUyMDNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXN+NjBmM2Y5ZmJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy13ZWJ+MGY4YjMwZmFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWJ1dHRvbi1iYXNlLWFwcH5jaHVua3MvZXhhbXBsZXMtYnV0dG9uLXNwbGl0LWFwcH5jaHVua3MvZXhhbXBsZXMtY29tcG9uZW50LWN+YWQxYjUyYzVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy13ZWJ+OWIzNjlmOTJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXN+YmNjMzllZWVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWZvcm0tZmllbGQtc2VsZWN0LWFwcFwiXG5cdF0sXG5cdFwiLi9leGFtcGxlcy9mb3JtL2ZpZWxkL3NlbGVjdC9hcHAubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvZm9ybS9maWVsZC9zZWxlY3QvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX43YmFjMDkyMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX5kODVkZTIwM1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc342MGYzZjlmYlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn4wZjhiMzBmYVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtYnV0dG9uLWJhc2UtYXBwfmNodW5rcy9leGFtcGxlcy1idXR0b24tc3BsaXQtYXBwfmNodW5rcy9leGFtcGxlcy1jb21wb25lbnQtY35hZDFiNTJjNVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn45YjM2OWY5MlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc35iY2MzOWVlZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtZm9ybS1maWVsZC1zZWxlY3QtYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL2Zvcm0vZmllbGQvdGV4dC9hcHBcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9mb3JtL2ZpZWxkL3RleHQvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX43YmFjMDkyMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX5kODVkZTIwM1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc342MGYzZjlmYlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtYnV0dG9uLWJhc2UtYXBwfmNodW5rcy9leGFtcGxlcy1idXR0b24tc3BsaXQtYXBwfmNodW5rcy9leGFtcGxlcy1jb21wb25lbnQtY35hZDFiNTJjNVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtZm9ybS1maWVsZC10ZXh0LWFwcFwiXG5cdF0sXG5cdFwiLi9leGFtcGxlcy9mb3JtL2ZpZWxkL3RleHQvYXBwLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL2Zvcm0vZmllbGQvdGV4dC9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjFlM2ZhNGVkXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfmFjMWNlMjBlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfjdiYWMwOTIxXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfmQ4NWRlMjAzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzfjYwZjNmOWZiXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1idXR0b24tYmFzZS1hcHB+Y2h1bmtzL2V4YW1wbGVzLWJ1dHRvbi1zcGxpdC1hcHB+Y2h1bmtzL2V4YW1wbGVzLWNvbXBvbmVudC1jfmFkMWI1MmM1XCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1mb3JtLWZpZWxkLXRleHQtYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL2Zvcm0vZmllbGQvdGV4dGFyZWEvYXBwXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvZm9ybS9maWVsZC90ZXh0YXJlYS9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjFlM2ZhNGVkXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfmFjMWNlMjBlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfjdiYWMwOTIxXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfmQ4NWRlMjAzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzfjYwZjNmOWZiXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1idXR0b24tYmFzZS1hcHB+Y2h1bmtzL2V4YW1wbGVzLWJ1dHRvbi1zcGxpdC1hcHB+Y2h1bmtzL2V4YW1wbGVzLWNvbXBvbmVudC1jfmFkMWI1MmM1XCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1mb3JtLWZpZWxkLXRleHRhcmVhLWFwcFwiXG5cdF0sXG5cdFwiLi9leGFtcGxlcy9mb3JtL2ZpZWxkL3RleHRhcmVhL2FwcC5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9mb3JtL2ZpZWxkL3RleHRhcmVhL2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+N2JhYzA5MjFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+ZDg1ZGUyMDNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXN+NjBmM2Y5ZmJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWJ1dHRvbi1iYXNlLWFwcH5jaHVua3MvZXhhbXBsZXMtYnV0dG9uLXNwbGl0LWFwcH5jaHVua3MvZXhhbXBsZXMtY29tcG9uZW50LWN+YWQxYjUyYzVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWZvcm0tZmllbGQtdGV4dGFyZWEtYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL2Zvcm0vZmllbGQvdGltZS9hcHBcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9mb3JtL2ZpZWxkL3RpbWUvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX43YmFjMDkyMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX5kODVkZTIwM1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc342MGYzZjlmYlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn4wZjhiMzBmYVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtYnV0dG9uLWJhc2UtYXBwfmNodW5rcy9leGFtcGxlcy1idXR0b24tc3BsaXQtYXBwfmNodW5rcy9leGFtcGxlcy1jb21wb25lbnQtY35hZDFiNTJjNVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn45YjM2OWY5MlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtY2FsZW5kYXItYmFzaWMtYXBwfmNodW5rcy9leGFtcGxlcy1mb3JtLWZpZWxkLXRpbWUtYXBwXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1mb3JtLWZpZWxkLXRpbWUtYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL2Zvcm0vZmllbGQvdGltZS9hcHAubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvZm9ybS9maWVsZC90aW1lL2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+N2JhYzA5MjFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+ZDg1ZGUyMDNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXN+NjBmM2Y5ZmJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy13ZWJ+MGY4YjMwZmFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWJ1dHRvbi1iYXNlLWFwcH5jaHVua3MvZXhhbXBsZXMtYnV0dG9uLXNwbGl0LWFwcH5jaHVua3MvZXhhbXBsZXMtY29tcG9uZW50LWN+YWQxYjUyYzVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy13ZWJ+OWIzNjlmOTJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWNhbGVuZGFyLWJhc2ljLWFwcH5jaHVua3MvZXhhbXBsZXMtZm9ybS1maWVsZC10aW1lLWFwcFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtZm9ybS1maWVsZC10aW1lLWFwcFwiXG5cdF0sXG5cdFwiLi9leGFtcGxlcy9mb3JtL2ZpZWxkL3RyaWdnZXIvY29weVRvQ2xpcGJvYXJkL2FwcFwiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL2Zvcm0vZmllbGQvdHJpZ2dlci9jb3B5VG9DbGlwYm9hcmQvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX43YmFjMDkyMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX5kODVkZTIwM1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc342MGYzZjlmYlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtYnV0dG9uLWJhc2UtYXBwfmNodW5rcy9leGFtcGxlcy1idXR0b24tc3BsaXQtYXBwfmNodW5rcy9leGFtcGxlcy1jb21wb25lbnQtY35hZDFiNTJjNVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtZm9ybS1maWVsZC10cmlnZ2VyLWNvcHlUb0NsaXBib2FyZC1hcHBcIlxuXHRdLFxuXHRcIi4vZXhhbXBsZXMvZm9ybS9maWVsZC90cmlnZ2VyL2NvcHlUb0NsaXBib2FyZC9hcHAubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvZm9ybS9maWVsZC90cmlnZ2VyL2NvcHlUb0NsaXBib2FyZC9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjFlM2ZhNGVkXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfmFjMWNlMjBlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfjdiYWMwOTIxXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfmQ4NWRlMjAzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzfjYwZjNmOWZiXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1idXR0b24tYmFzZS1hcHB+Y2h1bmtzL2V4YW1wbGVzLWJ1dHRvbi1zcGxpdC1hcHB+Y2h1bmtzL2V4YW1wbGVzLWNvbXBvbmVudC1jfmFkMWI1MmM1XCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1mb3JtLWZpZWxkLXRyaWdnZXItY29weVRvQ2xpcGJvYXJkLWFwcFwiXG5cdF0sXG5cdFwiLi9leGFtcGxlcy9saXN0L2Jhc2UvYXBwXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvbGlzdC9iYXNlL2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+N2JhYzA5MjFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+ZDg1ZGUyMDNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXN+NjBmM2Y5ZmJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy13ZWJ+MGY4YjMwZmFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWJ1dHRvbi1iYXNlLWFwcH5jaHVua3MvZXhhbXBsZXMtYnV0dG9uLXNwbGl0LWFwcH5jaHVua3MvZXhhbXBsZXMtY29tcG9uZW50LWN+YWQxYjUyYzVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy13ZWJ+OWIzNjlmOTJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWxpc3QtYmFzZS1hcHBcIlxuXHRdLFxuXHRcIi4vZXhhbXBsZXMvbGlzdC9iYXNlL2FwcC5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9saXN0L2Jhc2UvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX43YmFjMDkyMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX5kODVkZTIwM1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc342MGYzZjlmYlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn4wZjhiMzBmYVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtYnV0dG9uLWJhc2UtYXBwfmNodW5rcy9leGFtcGxlcy1idXR0b24tc3BsaXQtYXBwfmNodW5rcy9leGFtcGxlcy1jb21wb25lbnQtY35hZDFiNTJjNVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn45YjM2OWY5MlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtbGlzdC1iYXNlLWFwcFwiXG5cdF0sXG5cdFwiLi9leGFtcGxlcy9saXN0L2NoaXAvYXBwXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvbGlzdC9jaGlwL2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+N2JhYzA5MjFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+ZDg1ZGUyMDNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXN+NjBmM2Y5ZmJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy13ZWJ+MGY4YjMwZmFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWJ1dHRvbi1iYXNlLWFwcH5jaHVua3MvZXhhbXBsZXMtYnV0dG9uLXNwbGl0LWFwcH5jaHVua3MvZXhhbXBsZXMtY29tcG9uZW50LWN+YWQxYjUyYzVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy13ZWJ+OWIzNjlmOTJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWNvbXBvbmVudC1jaGlwLWFwcH5jaHVua3MvZXhhbXBsZXMtbGlzdC1jaGlwLWFwcFwiLFxuXHRcdFwiY2h1bmtzL2V4YW1wbGVzLWxpc3QtY2hpcC1hcHBcIlxuXHRdLFxuXHRcIi4vZXhhbXBsZXMvbGlzdC9jaGlwL2FwcC5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9saXN0L2NoaXAvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX43YmFjMDkyMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX5kODVkZTIwM1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc342MGYzZjlmYlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn4wZjhiMzBmYVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtYnV0dG9uLWJhc2UtYXBwfmNodW5rcy9leGFtcGxlcy1idXR0b24tc3BsaXQtYXBwfmNodW5rcy9leGFtcGxlcy1jb21wb25lbnQtY35hZDFiNTJjNVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn45YjM2OWY5MlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtY29tcG9uZW50LWNoaXAtYXBwfmNodW5rcy9leGFtcGxlcy1saXN0LWNoaXAtYXBwXCIsXG5cdFx0XCJjaHVua3MvZXhhbXBsZXMtbGlzdC1jaGlwLWFwcFwiXG5cdF0sXG5cdFwiLi9leGFtcGxlcy9wYW5lbC9hcHBcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9wYW5lbC9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjFlM2ZhNGVkXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfmFjMWNlMjBlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfjdiYWMwOTIxXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjIzMDgyZmM3XCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1wYW5lbC1hcHBcIlxuXHRdLFxuXHRcIi4vZXhhbXBsZXMvcGFuZWwvYXBwLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL3BhbmVsL2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+N2JhYzA5MjFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MjMwODJmYzdcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLXBhbmVsLWFwcFwiXG5cdF0sXG5cdFwiLi9leGFtcGxlcy90YWIvY29udGFpbmVyL2FwcFwiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL3RhYi9jb250YWluZXIvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX43YmFjMDkyMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX5kODVkZTIwM1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc342MGYzZjlmYlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtYnV0dG9uLWJhc2UtYXBwfmNodW5rcy9leGFtcGxlcy1idXR0b24tc3BsaXQtYXBwfmNodW5rcy9leGFtcGxlcy1jb21wb25lbnQtY35hZDFiNTJjNVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn4wZmEzOWJhMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtdGFiLWNvbnRhaW5lci1hcHBcIlxuXHRdLFxuXHRcIi4vZXhhbXBsZXMvdGFiL2NvbnRhaW5lci9hcHAubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvdGFiL2NvbnRhaW5lci9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjFlM2ZhNGVkXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfmFjMWNlMjBlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfjdiYWMwOTIxXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfmQ4NWRlMjAzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzfjYwZjNmOWZiXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1idXR0b24tYmFzZS1hcHB+Y2h1bmtzL2V4YW1wbGVzLWJ1dHRvbi1zcGxpdC1hcHB+Y2h1bmtzL2V4YW1wbGVzLWNvbXBvbmVudC1jfmFkMWI1MmM1XCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjBmYTM5YmExXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy10YWItY29udGFpbmVyLWFwcFwiXG5cdF0sXG5cdFwiLi9leGFtcGxlcy90YWJsZS9jb250YWluZXIvYXBwXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvdGFibGUvY29udGFpbmVyL2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+N2JhYzA5MjFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+ZDg1ZGUyMDNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXN+NjBmM2Y5ZmJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy13ZWJ+MGY4YjMwZmFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWJ1dHRvbi1iYXNlLWFwcH5jaHVua3MvZXhhbXBsZXMtYnV0dG9uLXNwbGl0LWFwcH5jaHVua3MvZXhhbXBsZXMtY29tcG9uZW50LWN+YWQxYjUyYzVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXMtdGFibGUtY29udGFpbmVyLWFwcH5jaHVua3N+YmRmNTRhZDJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLXRhYmxlLWNvbnRhaW5lci1hcHB+Y2h1bmtzL2V4YW1wbGVzLXRhYmxlU3RvcmUtYXBwXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy10YWJsZS1jb250YWluZXItYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL3RhYmxlL2NvbnRhaW5lci9hcHAubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvdGFibGUvY29udGFpbmVyL2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+N2JhYzA5MjFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+ZDg1ZGUyMDNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXN+NjBmM2Y5ZmJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy13ZWJ+MGY4YjMwZmFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWJ1dHRvbi1iYXNlLWFwcH5jaHVua3MvZXhhbXBsZXMtYnV0dG9uLXNwbGl0LWFwcH5jaHVua3MvZXhhbXBsZXMtY29tcG9uZW50LWN+YWQxYjUyYzVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXMtdGFibGUtY29udGFpbmVyLWFwcH5jaHVua3N+YmRmNTRhZDJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLXRhYmxlLWNvbnRhaW5lci1hcHB+Y2h1bmtzL2V4YW1wbGVzLXRhYmxlU3RvcmUtYXBwXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy10YWJsZS1jb250YWluZXItYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL3RhYmxlRmlsdGVyaW5nL2FwcFwiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL3RhYmxlRmlsdGVyaW5nL2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+N2JhYzA5MjFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+ZDg1ZGUyMDNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXN+NjBmM2Y5ZmJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy13ZWJ+MGY4YjMwZmFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy13ZWJ+OWIzNjlmOTJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXMtdGFibGUtY29udGFpbmVyLWFwcH5jaHVua3N+YmRmNTRhZDJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXN+YmNjMzllZWVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWNhbGVuZGFyLWJhc2ljLWFwcH5jaHVua3MvZXhhbXBsZXMtY29tcG9uZW50LWRhdGVTZWxlY3Rvci1hcHB+Y2h1bmtzL2V4YW1wbGV+ZmI0YzQxNWVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLXRhYmxlRmlsdGVyaW5nLWFwcFwiXG5cdF0sXG5cdFwiLi9leGFtcGxlcy90YWJsZUZpbHRlcmluZy9hcHAubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvdGFibGVGaWx0ZXJpbmcvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX43YmFjMDkyMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX5kODVkZTIwM1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc342MGYzZjlmYlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn4wZjhiMzBmYVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn45YjM2OWY5MlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlcy10YWJsZS1jb250YWluZXItYXBwfmNodW5rc35iZGY1NGFkMlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc35iY2MzOWVlZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtY2FsZW5kYXItYmFzaWMtYXBwfmNodW5rcy9leGFtcGxlcy1jb21wb25lbnQtZGF0ZVNlbGVjdG9yLWFwcH5jaHVua3MvZXhhbXBsZX5mYjRjNDE1ZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtdGFibGVGaWx0ZXJpbmctYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL3RhYmxlUGVyZm9ybWFuY2UvYXBwXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvdGFibGVQZXJmb3JtYW5jZS9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjFlM2ZhNGVkXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfmFjMWNlMjBlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfjdiYWMwOTIxXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfmQ4NWRlMjAzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzfjYwZjNmOWZiXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjBmOGIzMGZhXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzLXRhYmxlLWNvbnRhaW5lci1hcHB+Y2h1bmtzfmJkZjU0YWQyXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy10YWJsZVBlcmZvcm1hbmNlLWFwcFwiXG5cdF0sXG5cdFwiLi9leGFtcGxlcy90YWJsZVBlcmZvcm1hbmNlL2FwcC5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy90YWJsZVBlcmZvcm1hbmNlL2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+N2JhYzA5MjFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+ZDg1ZGUyMDNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXN+NjBmM2Y5ZmJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy13ZWJ+MGY4YjMwZmFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXMtdGFibGUtY29udGFpbmVyLWFwcH5jaHVua3N+YmRmNTRhZDJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLXRhYmxlUGVyZm9ybWFuY2UtYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL3RhYmxlU3RvcmUvYXBwXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvdGFibGVTdG9yZS9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjFlM2ZhNGVkXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfmFjMWNlMjBlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfjdiYWMwOTIxXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfmQ4NWRlMjAzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjBmOGIzMGZhXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzLXRhYmxlLWNvbnRhaW5lci1hcHB+Y2h1bmtzfmJkZjU0YWQyXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy10YWJsZS1jb250YWluZXItYXBwfmNodW5rcy9leGFtcGxlcy10YWJsZVN0b3JlLWFwcFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtdGFibGVTdG9yZS1hcHBcIlxuXHRdLFxuXHRcIi4vZXhhbXBsZXMvdGFibGVTdG9yZS9hcHAubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvdGFibGVTdG9yZS9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjFlM2ZhNGVkXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfmFjMWNlMjBlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfjdiYWMwOTIxXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfmQ4NWRlMjAzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjBmOGIzMGZhXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2V4YW1wbGVzLXRhYmxlLWNvbnRhaW5lci1hcHB+Y2h1bmtzfmJkZjU0YWQyXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy10YWJsZS1jb250YWluZXItYXBwfmNodW5rcy9leGFtcGxlcy10YWJsZVN0b3JlLWFwcFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtdGFibGVTdG9yZS1hcHBcIlxuXHRdLFxuXHRcIi4vZXhhbXBsZXMvdGFicy9hcHBcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy90YWJzL2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+N2JhYzA5MjFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+ZDg1ZGUyMDNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXN+NjBmM2Y5ZmJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy13ZWJ+MGY4YjMwZmFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy13ZWJ+MGZhMzliYTFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXMtdGFibGUtY29udGFpbmVyLWFwcH5jaHVua3N+YmRmNTRhZDJcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLXRhYnMtYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL3RhYnMvYXBwLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL3RhYnMvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX5hYzFjZTIwZVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX43YmFjMDkyMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXNoYX5kODVkZTIwM1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc342MGYzZjlmYlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn4wZjhiMzBmYVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9hcHBzLXdlYn4wZmEzOWJhMVwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlcy10YWJsZS1jb250YWluZXItYXBwfmNodW5rc35iZGY1NGFkMlwiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtdGFicy1hcHBcIlxuXHRdLFxuXHRcIi4vZXhhbXBsZXMvdG9kb0xpc3QvdmVyc2lvbjEvYXBwXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvdG9kb0xpc3QvdmVyc2lvbjEvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwiY2h1bmtzL2V4YW1wbGVzLXRvZG9MaXN0LXZlcnNpb24xLWFwcFwiXG5cdF0sXG5cdFwiLi9leGFtcGxlcy90b2RvTGlzdC92ZXJzaW9uMS9hcHAubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvdG9kb0xpc3QvdmVyc2lvbjEvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZX4xZTNmYTRlZFwiLFxuXHRcdFwiY2h1bmtzL2V4YW1wbGVzLXRvZG9MaXN0LXZlcnNpb24xLWFwcFwiXG5cdF0sXG5cdFwiLi9leGFtcGxlcy90b2RvTGlzdC92ZXJzaW9uMi9hcHBcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy90b2RvTGlzdC92ZXJzaW9uMi9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjFlM2ZhNGVkXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfmFjMWNlMjBlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfjdiYWMwOTIxXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfmQ4NWRlMjAzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjBmOGIzMGZhXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjliMzY5ZjkyXCIsXG5cdFx0XCJjaHVua3MvZXhhbXBsZXMtdG9kb0xpc3QtdmVyc2lvbjItYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL3RvZG9MaXN0L3ZlcnNpb24yL2FwcC5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy90b2RvTGlzdC92ZXJzaW9uMi9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfjFlM2ZhNGVkXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlfmFjMWNlMjBlXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfjdiYWMwOTIxXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtc2hhfmQ4NWRlMjAzXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjBmOGIzMGZhXCIsXG5cdFx0XCJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcH5jaHVua3MvYXBwcy1yZWFsd29ybGQyLWFwcH5jaHVua3MvYXBwcy1zaGFyZWRjb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtd2VifjliMzY5ZjkyXCIsXG5cdFx0XCJjaHVua3MvZXhhbXBsZXMtdG9kb0xpc3QtdmVyc2lvbjItYXBwXCJcblx0XSxcblx0XCIuL2V4YW1wbGVzL3ZpZXdwb3J0L2FwcFwiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL3ZpZXdwb3J0L2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+N2JhYzA5MjFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy13ZWJ+MGZhMzliYTFcIixcblx0XHRcImNodW5rcy9leGFtcGxlcy12aWV3cG9ydC1hcHBcIlxuXHRdLFxuXHRcIi4vZXhhbXBsZXMvdmlld3BvcnQvYXBwLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL3ZpZXdwb3J0L2FwcC5tanNcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+MWUzZmE0ZWRcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGVcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy1zaGF+N2JhYzA5MjFcIixcblx0XHRcInZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvYXBwcy13ZWJ+MGZhMzliYTFcIixcblx0XHRcImNodW5rcy9leGFtcGxlcy12aWV3cG9ydC1hcHBcIlxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoaWRzLnNsaWNlKDEpLm1hcChfX3dlYnBhY2tfcmVxdWlyZV9fLmUpKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcyBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJCBpbmNsdWRlOiBcXFxcL2FwcC5tanMkIGV4Y2x1ZGU6IFxcXFwvbm9kZV9tb2R1bGVzJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsImNvbnN0IE5lbyA9IHNlbGYuTmVvIHx8IHt9O1xuXG5OZW8uY29uZmlnID0gTmVvLmNvbmZpZyB8fCB7fTtcblxuLyoqXG4gKiBDb25maWcgb2JqZWN0IGZvciB0aGUgbmVvLm1qcyBmcmFtZXdvcmsgd2hpY2ggd2lsbCBnZXQgcGFzc2VkIHRvIGFsbCB3b3JrZXJzXG4gKiBZb3UgY2FuIGNoYW5nZSB0aGUgY29uZmlncywgZS5nLiBpbnNpZGUgdGhlIGluZGV4Lmh0bWwgb2YgeW91ciBhcHBcbiAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gKiBAbmFtZSBjb25maWdcbiAqIEB0eXBlIE9iamVjdFxuICovXG5jb25zdCBEZWZhdWx0Q29uZmlnID0ge1xuICAgIC8qKlxuICAgICAqIHRydWUgd2lsbCBhcHBseSAnbmVvLWJvZHknIHRvIHRoZSBkb2N1bWVudC5ib2R5IGNsYXNzTGlzdFxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuYXBwbHlCb2R5Q2xzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGFwcGx5Qm9keUNsczogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBQYXRoIHRvIHlvdXIgYXBwLm1qcyBmaWxlLiBZb3UgY2FuIGNyZWF0ZSBtdWx0aXBsZSBhcHBzIHRoZXJlIGlmIG5lZWRlZC5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmFwcFBhdGhcbiAgICAgKiBAdHlwZSBTdHJpbmd8bnVsbFxuICAgICAqL1xuICAgIGFwcFBhdGg6IG51bGwsXG4gICAgLyoqXG4gICAgICogUGF0aCB0byB0aGUgbmVvLm1qcyBkaXJlY3RvcnlcbiAgICAgKiBAZGVmYXVsdCAnLi8nXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmJhc2VQYXRoXG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgYmFzZVBhdGg6ICcuLycsXG4gICAgLyoqXG4gICAgICogUGF0aCB0byB0aGUgbmVvLm1qcyB0aGVtZSBjc3MgZmlsZXNcbiAgICAgKiBTZWUgbWFpbi5hZGRvbi5TdHlsZXNoZWV0ID0+IGNyZWF0ZVN0eWxlU2hlZXQoKVxuICAgICAqIEBkZWZhdWx0IE5lby5jb25maWcuYmFzZVBhdGggKyAnYnVpbGQvJyArIE5lby5jb25maWcuZW52aXJvbm1lbnRcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBbY29uZmlnLmNzc1BhdGhdXG4gICAgICogQG9wdGlvbmFsXG4gICAgICogQHR5cGUgU3RyaW5nfG51bGxcbiAgICAgKi9cbiAgICBjc3NQYXRoOiBudWxsLFxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IGJ1aWxkID0+IGRpc3QgZW52aXJvbm1lbnQuIFZhbGlkIHZhbHVlczogJ2RldmVsb3BtZW50JywgJ3Byb2R1Y3Rpb24nXG4gICAgICogVXNlZCBmb3IgYXV0b21hdGljYWxseSBpbmNsdWRpbmcgdGhlIG1hdGNoaW5nIHRoZW1lIGZpbGVzXG4gICAgICogQGRlZmF1bHQgJ3Byb2R1Y3Rpb24nXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmVudmlyb25tZW50XG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgZW52aXJvbm1lbnQ6ICdwcm9kdWN0aW9uJyxcbiAgICAvKipcbiAgICAgKiBJbiBjYXNlIHlvdSBhcmUgdXNpbmcgdGhlIEdvb2dsZUFuYWx5dGljcyBtYWluVGhyZWFkQWRkb24gb3IgdXNlR29vZ2xlQW5hbHl0aWNzOiB0cnVlLFxuICAgICAqIHlvdSBjYW4gY2hhbmdlIHRoZSBndGFnIGlkIGhlcmUuIFJlcXVpcmVkIGZvciB0aGUgb25saW5lIGV4YW1wbGVzIChnaCBwYWdlcylcbiAgICAgKiBAZGVmYXVsdCAnVUEtMTUzNzM0NDA0LTEnXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmd0YWdJZFxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIGd0YWdJZDogJ1VBLTE1MzczNDQwNC0xJyxcbiAgICAvKipcbiAgICAgKiBGbGFnIGlmIE5lbyBpcyBydW5uaW5nIHdpdGhvdXQgYW55IEpTIGJ1aWxkc1xuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmlzRXhwZXJpbWVudGFsXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGlzRXhwZXJpbWVudGFsOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBGbGFnIGZvciBydW5uaW5nIG9uIGh0dHBzOi8vbmVvbWpzLmdpdGh1Yi5pby9wYWdlcy9cbiAgICAgKiA9PiB0byB1c2UgbG9jYWwgaW1hZ2VzIHBhdGhzIGluc3RlYWQgb2YgcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbVxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmlzR2l0SHViUGFnZXNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgaXNHaXRIdWJQYWdlczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogRmxhZyBmb3IgcnVubmluZyB0aGUgTmVvIG1haW4gdGhyZWFkIGluc2lkZSBhbiBpZnJhbWUgKFNpZXN0YSBCcm93c2VyIEhhcm5lc3MpXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuaXNJbnNpZGVTaWVzdGFcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgaXNJbnNpZGVTaWVzdGE6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIFVzZWQgYnkgSW50bC5EYXRlVGltZUZvcm1hdCwgZm9yIGRldGFpbHMgdGFrZSBhIGxvb2sgYXQ6XG4gICAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXRcbiAgICAgKiBAZGVmYXVsdCAnZGVmYXVsdCdcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcubG9jYWxlXG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgbG9jYWxlOiAnZGVmYXVsdCcsXG4gICAgLyoqXG4gICAgICogQWRkIGFkZG9ucyBmb3IgdGhlIG1haW4gdGhyZWFkXG4gICAgICogUG9zc2libGUgdmFsdWVzOiBBbUNoYXJ0cywgQW5hbHl0aWNzQnlHb29nbGUsIEhpZ2hsaWdodEpTLCBMb2NhbFN0b3JhZ2UsIE1hcGJveEdMLCBNYXJrZG93biwgU2llc3RhLCBTdHlsZXNoZWV0XG4gICAgICogKHNyYy9tYWluL2FkZG9uKVxuICAgICAqIEBkZWZhdWx0IFsnU3R5bGVzaGVldCddXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLm1haW5UaHJlYWRBZGRvbnNcbiAgICAgKiBAdHlwZSBTdHJpbmdbXVxuICAgICAqL1xuICAgIG1haW5UaHJlYWRBZGRvbnM6IFsnU3R5bGVzaGVldCddLFxuICAgIC8qKlxuICAgICAqIEFkZCB0aGVtZXMgeW91IHdhbnQgdG8gdXNlIGhlcmUuIFRoZSBmaXJzdCB0aGVtZSB3aWxsIGdldCBhcHBsaWVkLlxuICAgICAqIElmIGNvbmZpZy51c2VDc3M0ID09PSB0cnVlLCBvdGhlciB0aGVtZSB2YXJpYWJsZXMgd2lsbCBnZXQgaW5jbHVkZWQgYXMgd2VsbFxuICAgICAqIEBkZWZhdWx0IFsnbmVvLXRoZW1lLWxpZ2h0JywgJ25lby10aGVtZS1kYXJrJ11cbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudGhlbWVzXG4gICAgICogQHR5cGUgU3RyaW5nW11cbiAgICAgKi9cbiAgICB0aGVtZXM6IFsnbmVvLXRoZW1lLWxpZ2h0JywgJ25lby10aGVtZS1kYXJrJ10sXG4gICAgLyoqXG4gICAgICogRmxhZyBmb3Igc3RhbmRhbG9uZSBTaWVzdGEgbW9kdWxlIHRlc3RzID0+IHByZXZlbnQgcmVnaXN0ZXJSZW1vdGUgd29ya2VyIG1lc3NhZ2VzXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudW5pdFRlc3RNb2RlXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVuaXRUZXN0TW9kZTogZmFsc2UsXG4gICAgLyoqXG4gICAgICogRmxhZyBpZiBDU1M0IHN0eWxlc2hlZXRzIGFyZSBpbiB1c2UgKGltcG9ydGFudCBmb3Igc3dpdGNoaW5nIHRoZW1lcylcbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZUNzczRcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlQ3NzNDogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBUcnVlIHdpbGwgYXV0b21hdGljYWxseSBpbmNsdWRlIHRoZSBzdHlsZXNoZWV0XG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VGb250QXdlc29tZVxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICB1c2VGb250QXdlc29tZTogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBJbnRlbmRlZCBmb3IgdGhlIG9ubGluZSBleGFtcGxlcyB3aGVyZSB3ZSBuZWVkIGFuIGVhc3kgd2F5IHRvIGFkZCBHQSB0byBldmVyeSBnZW5lcmF0ZWQgYXBwXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudXNlR29vZ2xlQW5hbHl0aWNzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZUdvb2dsZUFuYWx5dGljczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBBcHAsIERhdGEgJiBWRG9tIGFzIFNoYXJlZFdvcmtlcnMuXG4gICAgICogU2V0IHRoaXMgb25lIHRvIHRydWUgaW4gY2FzZSB5b3Ugd2FudCB0byBjb25uZWN0IG11bHRpcGxlIG1haW4gdGhyZWFkcy5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VTaGFyZWRXb3JrZXJzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZVNoYXJlZFdvcmtlcnM6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEFkZHMgZ2xvYmFsIGRvbSBldmVudCBsaXN0ZW5lcnMgZm9yIG1vYmlsZSByZWxhdGVkIGV2ZW50cyBsaWtlIHJvdGF0ZSwgc3dpcGUsIHRhcFxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudXNlVG91Y2hFdmVudHNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlVG91Y2hFdmVudHM6IHRydWVcbn07XG5cbk9iamVjdC5hc3NpZ24oRGVmYXVsdENvbmZpZywge1xuICAgIC8qKlxuICAgICAqIFBhdGggdG8gdGhlIHRvcCBsZXZlbCBuZW8ubWpzIHJlc291cmNlcyBmb2xkZXJcbiAgICAgKiBAZGVmYXVsdCBOZW8uY29uZmlnLmJhc2VQYXRoICsgJ3Jlc291cmNlcy8nXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnJlc291cmNlc1BhdGhcbiAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgKi9cbiAgICByZXNvdXJjZXNQYXRoOiAoTmVvLmNvbmZpZy5iYXNlUGF0aCB8fCBEZWZhdWx0Q29uZmlnLmJhc2VQYXRoKSArICdyZXNvdXJjZXMvJyxcbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBiYXNlIFVSTCBmb3Igd2ViIHdvcmtlciBlbnRyeSBwb2ludHMgKEFwcCwgRGF0YSwgVmRvbSlcbiAgICAgKiBAZGVmYXVsdCBOZW8uY29uZmlnLmJhc2VQYXRoICsgJ3NyYy93b3JrZXIvJ1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy53b3JrZXJCYXNlUGF0aFxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIHdvcmtlckJhc2VQYXRoOiAoTmVvLmNvbmZpZy5iYXNlUGF0aCB8fCBEZWZhdWx0Q29uZmlnLmJhc2VQYXRoKSArICdzcmMvd29ya2VyLydcbn0pO1xuXG5leHBvcnQge0RlZmF1bHRDb25maWcgYXMgZGVmYXVsdH07IiwiaW1wb3J0IERlZmF1bHRDb25maWcgZnJvbSAnLi9EZWZhdWx0Q29uZmlnLm1qcyc7XG5cbmNvbnN0IGNvbmZpZ1N5bWJvbCA9IFN5bWJvbC5mb3IoJ2NvbmZpZ1N5bWJvbCcpLFxuICAgICAgZ2V0U2V0Q2FjaGUgID0gU3ltYm9sKCdnZXRTZXRDYWNoZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIG1vZHVsZSB0byBlbmhhbmNlIGNsYXNzZXMsIGNyZWF0ZSBpbnN0YW5jZXMgYW5kIHRoZSBOZW8gbmFtZXNwYWNlXG4gKiBAbW9kdWxlIE5lb1xuICogQHNpbmdsZXRvblxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5jYXBpdGFsaXplICAgICAgICBhcyBjYXBpdGFsaXplXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmNyZWF0ZVN0eWxlT2JqZWN0IGFzIGNyZWF0ZVN0eWxlT2JqZWN0XG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmNyZWF0ZVN0eWxlcyAgICAgIGFzIGNyZWF0ZVN0eWxlc1xuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5kZWNhbWVsICAgICAgICAgICBhcyBkZWNhbWVsXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzQXJyYXkgICAgICAgICAgIGFzIGlzQXJyYXlcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNCb29sZWFuICAgICAgICAgYXMgaXNCb29sZWFuXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzRGVmaW5lZCAgICAgICAgIGFzIGlzRGVmaW5lZFxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc051bWJlciAgICAgICAgICBhcyBpc051bWJlclxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc09iamVjdCAgICAgICAgICBhcyBpc09iamVjdFxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc1N0cmluZyAgICAgICAgICBhcyBpc1N0cmluZ1xuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC50b0FycmF5ICAgICAgICAgICBhcyB0b0FycmF5XG4gKiBAdHV0b3JpYWwgMDFfQ29uY2VwdFxuICovXG5sZXQgTmVvID0gc2VsZi5OZW8gfHwge307XG5cbk5lbyA9IHNlbGYuTmVvID0gT2JqZWN0LmFzc2lnbih7XG4gICAgLyoqXG4gICAgICogQSBtYXAgY29udGFpbmluZyBudHlwZXMgYXMga2V5IGFuZCBOZW8gY2xhc3NlcyBvciBzaW5nbGV0b25zIGFzIHZhbHVlc1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAdHlwZSBPYmplY3RcbiAgICAgKi9cbiAgICBudHlwZU1hcDoge30sXG4gICAgLyoqXG4gICAgICogTmVlZGVkIGZvciBOZW8uY3JlYXRlLiBGYWxzZSBmb3IgdGhlIG1haW4gdGhyZWFkLCB0cnVlIGZvciB0aGUgQXBwLCBEYXRhICYgVmRvbSB3b3JrZXJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGluc2lkZVdvcmtlcjogdHlwZW9mIERlZGljYXRlZFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnLFxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWxseSB1c2VkIGF0IHRoZSBlbmQgb2YgZWFjaCBjbGFzcyAvIG1vZHVsZSBkZWZpbml0aW9uXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGNscyBUaGUgTmVvIGNsYXNzIHRvIGFwcGx5IGNvbmZpZ3MgdG9cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICovXG4gICAgYXBwbHlDbGFzc0NvbmZpZyhjbHMpIHtcbiAgICAgICAgbGV0IGJhc2VDZmcgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgYmFzZVN0YXRpY0NmZyA9IG51bGwsXG4gICAgICAgICAgICBjb25maWcgICAgICAgID0ge30sXG4gICAgICAgICAgICBwcm90byAgICAgICAgID0gY2xzLnByb3RvdHlwZSB8fCBjbHMsXG4gICAgICAgICAgICBwcm90b3MgICAgICAgID0gW10sXG4gICAgICAgICAgICBzdGF0aWNDb25maWcgID0ge30sXG4gICAgICAgICAgICBjdG9yO1xuXG4gICAgICAgIHdoaWxlIChwcm90by5fX3Byb3RvX18pIHtcbiAgICAgICAgICAgIGN0b3IgPSBwcm90by5jb25zdHJ1Y3RvcjtcblxuICAgICAgICAgICAgaWYgKGN0b3IuaGFzT3duUHJvcGVydHkoJ2NsYXNzQ29uZmlnQXBwbGllZCcpKSB7XG4gICAgICAgICAgICAgICAgYmFzZUNmZyAgICAgICA9IE5lby5jbG9uZShjdG9yLmNvbmZpZywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgYmFzZVN0YXRpY0NmZyA9IE5lby5jbG9uZShjdG9yLnN0YXRpY0NvbmZpZywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByb3Rvcy51bnNoaWZ0KHByb3RvKTtcbiAgICAgICAgICAgIHByb3RvID0gcHJvdG8uX19wcm90b19fO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnICAgICAgID0gYmFzZUNmZyAgICAgICA/IGJhc2VDZmcgICAgICAgOiBjb25maWc7XG4gICAgICAgIHN0YXRpY0NvbmZpZyA9IGJhc2VTdGF0aWNDZmcgPyBiYXNlU3RhdGljQ2ZnIDogc3RhdGljQ29uZmlnO1xuXG4gICAgICAgIHByb3Rvcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgY3RvciA9IGVsZW1lbnQuY29uc3RydWN0b3I7XG4gICAgICAgICAgICBsZXQgY2ZnICAgICAgID0gY3Rvci5nZXRDb25maWcgICAgICAgJiYgY3Rvci5nZXRDb25maWcoKSAgICAgICB8fCB7fSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDZmcgPSBjdG9yLmdldFN0YXRpY0NvbmZpZyAmJiBjdG9yLmdldFN0YXRpY0NvbmZpZygpIHx8IHt9LFxuICAgICAgICAgICAgICAgIG1peGlucztcblxuICAgICAgICAgICAgaWYgKGNmZykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNmZykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuc2xpY2UoLTEpID09PSAnXycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjZmdba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGtleS5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZmdba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0dlbmVyYXRlR2V0U2V0KGVsZW1lbnQsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGFwcGx5IHByb3BlcnRpZXMgd2hpY2ggaGF2ZSBubyBzZXR0ZXJzIGluc2lkZSB0aGUgcHJvdG90eXBlIGNoYWluXG4gICAgICAgICAgICAgICAgICAgIC8vIHRob3NlIHdpbGwgZ2V0IGFwcGxpZWQgb24gY3JlYXRlIChOZW8uY29yZS5CYXNlIC0+IGluaXRDb25maWcpXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFoYXNQcm9wZXJ0eVNldHRlcihlbGVtZW50LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwga2V5LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgICAgOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0YWJsZSAgOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGN0b3IsIHN0YXRpY0NmZyk7XG5cbiAgICAgICAgICAgIGlmIChjZmcuaGFzT3duUHJvcGVydHkoJ250eXBlJykpIHtcbiAgICAgICAgICAgICAgICBOZW8ubnR5cGVNYXBbY2ZnLm50eXBlXSA9IGNmZy5jbGFzc05hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1peGlucyA9IGNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnbWl4aW5zJykgJiYgY29uZmlnLm1peGlucyB8fCBbXTtcblxuICAgICAgICAgICAgaWYgKHN0YXRpY0NmZyAmJiBzdGF0aWNDZmcub2JzZXJ2YWJsZSkge1xuICAgICAgICAgICAgICAgIG1peGlucy5wdXNoKCdOZW8uY29yZS5PYnNlcnZhYmxlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjZmcuaGFzT3duUHJvcGVydHkoJ21peGlucycpICYmIEFycmF5LmlzQXJyYXkoY2ZnLm1peGlucykgJiYgY2ZnLm1peGlucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbWl4aW5zLnB1c2goLi4uY2ZnLm1peGlucyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtaXhpbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYXBwbHlNaXhpbnMoY3RvciwgbWl4aW5zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIGNmZy5taXhpbnM7XG4gICAgICAgICAgICBkZWxldGUgY29uZmlnLm1peGlucztcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjb25maWcsIGNmZyk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHN0YXRpY0NvbmZpZywgc3RhdGljQ2ZnKTtcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjdG9yLCB7XG4gICAgICAgICAgICAgICAgY2xhc3NDb25maWdBcHBsaWVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpZyAgICAgICAgICAgIDogTmVvLmNsb25lKGNvbmZpZywgdHJ1ZSksXG4gICAgICAgICAgICAgICAgaXNDbGFzcyAgICAgICAgICAgOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NvbmZpZyAgICAgIDogTmVvLmNsb25lKHN0YXRpY0NvbmZpZywgdHJ1ZSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkZWxldGUgY3Rvci5nZXRDb25maWc7XG4gICAgICAgICAgICBkZWxldGUgY3Rvci5nZXRTdGF0aWNDb25maWc7XG5cbiAgICAgICAgICAgIGlmICghY29uZmlnLnNpbmdsZXRvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlUb0dsb2JhbE5zKGNscyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNYXBzIG1ldGhvZHMgZnJvbSBvbmUgbmFtZXNwYWNlIHRvIGFub3RoZXIgb25lXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAvLyBhbGlhc2VzXG4gICAgICogTmVvLmFwcGx5RnJvbU5zKE5lbywgVXRpbCwge1xuICAgICAqICAgICBjcmVhdGVTdHlsZU9iamVjdDogJ2NyZWF0ZVN0eWxlT2JqZWN0JyxcbiAgICAgKiAgICAgY3JlYXRlU3R5bGVzICAgICA6ICdjcmVhdGVTdHlsZXMnLFxuICAgICAqICAgICBjYXBpdGFsaXplICAgICAgIDogJ2NhcGl0YWxpemUnLFxuICAgICAqICAgICBkZWNhbWVsICAgICAgICAgIDogJ2RlY2FtZWwnLFxuICAgICAqICAgICBpc0FycmF5ICAgICAgICAgIDogJ2lzQXJyYXknLFxuICAgICAqICAgICBpc0Jvb2xlYW4gICAgICAgIDogJ2lzQm9vbGVhbicsXG4gICAgICogICAgIGlzRGVmaW5lZCAgICAgICAgOiAnaXNEZWZpbmVkJyxcbiAgICAgKiAgICAgaXNOdW1iZXIgICAgICAgICA6ICdpc051bWJlcicsXG4gICAgICogICAgIGlzT2JqZWN0ICAgICAgICAgOiAnaXNPYmplY3QnLFxuICAgICAqICAgICBpc1N0cmluZyAgICAgICAgIDogJ2lzU3RyaW5nJyxcbiAgICAgKiAgICAgdG9BcnJheSAgICAgICAgICA6ICd0b0FycmF5J1xuICAgICAqIH0sIHRydWUpO1xuICAgICAqXG4gICAgICogLy8gZS5nLiBOZW8uY29yZS5VdGlsLmlzT2JqZWN0ID0+IE5lby5pc09iamVjdFxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtOZW98TmVvLmNvcmUuQmFzZX0gdGFyZ2V0IFRoZSB0YXJnZXQgY2xhc3Mgb3Igc2luZ2xldG9uIEluc3RhbmNlIG9yIE5lb1xuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gbmFtZXNwYWNlIFRoZSBjbGFzcyBjb250YWluaW5nIHRoZSBtZXRob2RzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2JpbmRdIHNldCB0aGlzIHRvIHRydWUgaW4gY2FzZSB5b3Ugd2FudCB0byBiaW5kIG1ldGhvZHMgdG8gdGhlIFwiZnJvbVwiIG5hbWVzcGFjZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHRhcmdldFxuICAgICAqL1xuICAgIGFwcGx5RnJvbU5zKHRhcmdldCwgbmFtZXNwYWNlLCBjb25maWcsIGJpbmQpIHtcbiAgICAgICAgbGV0IGZuTmFtZTtcblxuICAgICAgICBpZiAodGFyZ2V0ICYmIGNvbmZpZyAmJiB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY29uZmlnKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBmbk5hbWUgPSBuYW1lc3BhY2VbdmFsdWVdO1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gYmluZCA/IGZuTmFtZS5iaW5kKG5hbWVzcGFjZSkgOiBmbk5hbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1hcHMgYSBjbGFzcyB0byB0aGUgZ2xvYmFsIE5lbyBvciBBcHAgbmFtZXNwYWNlLlxuICAgICAqIENhbiBnZXQgY2FsbGVkIGZvciBjbGFzc2VzIGFuZCBzaW5nbGV0b24gaW5zdGFuY2VzXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGNsc1xuICAgICAqL1xuICAgIGFwcGx5VG9HbG9iYWxOcyhjbHMpIHtcbiAgICAgICAgbGV0IHByb3RvID0gdHlwZW9mIGNscyA9PT0gJ2Z1bmN0aW9uJyA/IGNscy5wcm90b3R5cGU6IGNscyxcbiAgICAgICAgICAgIGNsYXNzTmFtZSwgbnNBcnJheSwga2V5LCBucztcblxuICAgICAgICBpZiAocHJvdG8uY29uc3RydWN0b3IucmVnaXN0ZXJUb0dsb2JhbE5zID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBwcm90by5pc0NsYXNzID8gcHJvdG8uY29uZmlnLmNsYXNzTmFtZSA6IHByb3RvLmNsYXNzTmFtZTtcblxuICAgICAgICAgICAgbnNBcnJheSA9IGNsYXNzTmFtZS5zcGxpdCgnLicpO1xuICAgICAgICAgICAga2V5ICAgICA9IG5zQXJyYXkucG9wKCk7XG4gICAgICAgICAgICBucyAgICAgID0gTmVvLm5zKG5zQXJyYXksIHRydWUpO1xuICAgICAgICAgICAgbnNba2V5XSA9IGNscztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYWxsIGtleXMgb2YgZGVmYXVsdHMgaW50byB0YXJnZXQsIGluIGNhc2UgdGhleSBkb24ndCBhbHJlYWR5IGV4aXN0XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRzIFRoZSBvYmplY3QgY29udGFpbmluZyB0aGUga2V5cyB5b3Ugd2FudCB0byBjb3B5XG4gICAgICogQHJldHVybnMge09iamVjdH0gdGFyZ2V0XG4gICAgICovXG4gICAgYXNzaWduRGVmYXVsdHModGFyZ2V0LCBkZWZhdWx0cykge1xuICAgICAgICBpZiAodGFyZ2V0ICYmIGRlZmF1bHRzICYmIHR5cGVvZiBkZWZhdWx0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGRlZmF1bHRzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fCp9IG9ialxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2RlZXA9ZmFsc2VdIFNldCB0aGlzIHRvIHRydWUgaW4gY2FzZSB5b3Ugd2FudCB0byBjbG9uZSBuZXN0ZWQgb2JqZWN0cyBhcyB3ZWxsXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbaWdub3JlTmVvSW5zdGFuY2VzPWZhbHNlXSByZXR1cm5zIGV4aXN0aW5nIGluc3RhbmNlcyBpZiBzZXQgdG8gdHJ1ZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8QXJyYXl8Kn0gdGhlIGNsb25lZCBpbnB1dFxuICAgICAqL1xuICAgIGNsb25lKG9iaiwgZGVlcD1mYWxzZSwgaWdub3JlTmVvSW5zdGFuY2VzPWZhbHNlKSB7XG4gICAgICAgIGxldCBvdXQ7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICAgICAgcmV0dXJuICFkZWVwID8gWy4uLm9ial0gOiBbLi4ub2JqLm1hcCh2YWwgPT4gTmVvLmNsb25lKHZhbCwgZGVlcCwgaWdub3JlTmVvSW5zdGFuY2VzKSldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKG9iai5jb25zdHJ1Y3Rvci5pc0NsYXNzICYmIG9iaiBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWdub3JlTmVvSW5zdGFuY2VzID8gb2JqIDogdGhpcy5jbG9uZU5lb0luc3RhbmNlKG9iaik7XG4gICAgICAgICAgICB9IGVsc2UgaWYob2JqLmNvbnN0cnVjdG9yLmlzQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgb2JqID0gbmV3IERhdGUob2JqLnZhbHVlT2YoKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgICAgICAgICAgIG9iaiA9IG5ldyBNYXAob2JqKTsgLy8gc2hhbGxvdyBjb3B5XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dCA9IHt9O1xuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMob2JqKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb3V0W2tleV0gPSAhZGVlcCA/IHZhbHVlIDogTmVvLmNsb25lKHZhbHVlLCBkZWVwLCBpZ25vcmVOZW9JbnN0YW5jZXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmo7IC8vIHJldHVybiBhbGwgb3RoZXIgZGF0YSB0eXBlc1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIHVzaW5nIHRoZSBvcmlnaW5hbENvbmZpZyB3aXRob3V0IHRoZSBpZFxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBpbnN0YW5jZVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29yZS5CYXNlfSB0aGUgY2xvbmVkIGluc3RhbmNlXG4gICAgICovXG4gICAgY2xvbmVOZW9JbnN0YW5jZShpbnN0YW5jZSkge1xuICAgICAgICBsZXQgY29uZmlnID0gey4uLmluc3RhbmNlLm9yaWdpbmFsQ29uZmlnfTtcblxuICAgICAgICBkZWxldGUgY29uZmlnLl9pZDtcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5pZDtcblxuICAgICAgICByZXR1cm4gTmVvLmNyZWF0ZShpbnN0YW5jZS5jbGFzc05hbWUsIGNvbmZpZyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVzZSBOZW8uY3JlYXRlKCkgaW5zdGVhZCBvZiBcIm5ld1wiIHRvIGNyZWF0ZSBpbnN0YW5jZXMgb2YgYWxsIE5lbyBjbGFzc2VzXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBpbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9CYXNlLm1qcyc7XG4gICAgICpcbiAgICAgKiBOZW8uY3JlYXRlKEJ1dHRvbiwge1xuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBleGFtcGxlXG4gICAgICogaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24vQmFzZS5tanMnO1xuICAgICAqXG4gICAgICogTmVvLmNyZWF0ZSh7XG4gICAgICogICAgIG1vZHVsZSA6IEJ1dHRvbixcbiAgICAgKiAgICAgaWNvbkNsczogJ2ZhIGZhLWhvbWUnLFxuICAgICAqICAgICB0ZXh0ICAgOiAnSG9tZSdcbiAgICAgKiB9KTtcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIE5lby5jcmVhdGUoJ05lby5idXR0b24uQmFzZScge1xuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLmNyZWF0ZSh7XG4gICAgICogICAgIGNsYXNzTmFtZTogJ05lby5idXR0b24uQmFzZScsXG4gICAgICogICAgIGljb25DbHMgIDogJ2ZhIGZhLWhvbWUnLFxuICAgICAqICAgICB0ZXh0ICAgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fE5lby5jb3JlLkJhc2V9IGNsYXNzTmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbY29uZmlnXVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29yZS5CYXNlfG51bGx9IFRoZSBuZXcgY2xhc3MgaW5zdGFuY2VcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAgICAgKi9cbiAgICBjcmVhdGUoY2xhc3NOYW1lLCBjb25maWcpIHtcbiAgICAgICAgbGV0IGNscywgaW5zdGFuY2U7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjbGFzc05hbWUgPT09ICdmdW5jdGlvbicgJiYgdW5kZWZpbmVkICE9PSBjbGFzc05hbWUuY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIGNscyA9IGNsYXNzTmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNsYXNzTmFtZTtcblxuICAgICAgICAgICAgICAgIGlmICghY29uZmlnLmNsYXNzTmFtZSAmJiAhY29uZmlnLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1c2luZyBjb25zb2xlLmVycm9yIGluc3RlYWQgb2YgdGhyb3cgdG8gc2hvdyB0aGUgY29uZmlnIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDbGFzcyBjcmVhdGVkIHdpdGggb2JqZWN0IGNvbmZpZ3VyYXRpb24gbWlzc2luZyBjbGFzc05hbWUgb3IgbW9kdWxlIHByb3BlcnR5JywgY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gY29uZmlnLmNsYXNzTmFtZSA/IGNvbmZpZy5jbGFzc05hbWUgOiBjb25maWcubW9kdWxlLnByb3RvdHlwZS5jbGFzc05hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZXhpc3RzKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NsYXNzICcgKyBjbGFzc05hbWUgKyAnIGRvZXMgbm90IGV4aXN0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNscyA9IE5lby5ucyhjbGFzc05hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgY2xzKGNvbmZpZyk7XG5cbiAgICAgICAgaW5zdGFuY2Uub25Db25zdHJ1Y3RlZCgpO1xuICAgICAgICBpbnN0YW5jZS5pbml0KCk7XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH0sXG5cbiAgICBlbXB0eUZuKCkge30sXG5cbiAgICAvKipcbiAgICAgKiBNYXBzIGEgY2xhc3NOYW1lIHN0cmluZyBpbnRvIGEgZ2xvYmFsIG5hbWVzcGFjZVxuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLm5zKCdOZW8uYnV0dG9uLkJhc2UnLCB0cnVlKTtcbiAgICAgKiAvLyA9PlxuICAgICAqIC8vIHNlbGYuTmVvID0gc2VsZi5OZW8gfHwge307XG4gICAgICogLy8gc2VsZi5OZW8uY29tcG9uZW50ID0gc2VsZi5OZW8uY29tcG9uZW50IHx8IHt9O1xuICAgICAqIC8vIHNlbGYuTmVvLmJ1dHRvbi5CYXNlID0gc2VsZi5OZW8uYnV0dG9uLkJhc2UgfHwge307XG4gICAgICogLy8gcmV0dXJuIHNlbGYuTmVvLmJ1dHRvbi5CYXNlO1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gbmFtZXMgVGhlIGNsYXNzIG5hbWUgc3RyaW5nIGNvbnRhaW5pbmcgZG90cyBvciBhbiBBcnJheSBvZiB0aGUgc3RyaW5nIHBhcnRzXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbY3JlYXRlXSBTZXQgY3JlYXRlIHRvIHRydWUgdG8gY3JlYXRlIGVtcHR5IG9iamVjdHMgZm9yIG5vbiBleGlzdGluZyBwYXJ0c1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGVdIFNldCBhIGRpZmZlcmVudCBzdGFydGluZyBwb2ludCBhcyBzZWxmXG4gICAgICogQHJldHVybnMge09iamVjdH0gcmVmZXJlbmNlIHRvIHRoZSB0b3BsZXZlbCBuYW1lc3BhY2VcbiAgICAgKi9cbiAgICBucyhuYW1lcywgY3JlYXRlLCBzY29wZSkge1xuICAgICAgICBuYW1lcyA9IEFycmF5LmlzQXJyYXkobmFtZXMpID8gbmFtZXMgOiBuYW1lcy5zcGxpdCgnLicpO1xuXG4gICAgICAgIHJldHVybiBuYW1lcy5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChjcmVhdGUgJiYgIXByZXZbY3VycmVudF0pIHtcbiAgICAgICAgICAgICAgICBwcmV2W2N1cnJlbnRdID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJldikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2W2N1cnJlbnRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBzY29wZSB8fCBzZWxmKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBpbnN0YW5jZXMgb2YgTmVvIGNsYXNzZXMgdXNpbmcgdGhlaXIgbnR5cGUgaW5zdGVhZCBvZiB0aGUgY2xhc3MgbmFtZVxuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLm50eXBlKCdidXR0b24nIHtcbiAgICAgKiAgICAgaWNvbkNsczogJ2ZhIGZhLWhvbWUnLFxuICAgICAqICAgICB0ZXh0ICAgOiAnSG9tZSdcbiAgICAgKiB9KTtcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIE5lby5udHlwZSh7XG4gICAgICogICAgIG50eXBlICA6ICdidXR0b24nLFxuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBudHlwZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbY29uZmlnXVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29yZS5CYXNlfVxuICAgICAqIEBzZWUge0BsaW5rIG1vZHVsZTpOZW8uY3JlYXRlIGNyZWF0ZX1cbiAgICAgKi9cbiAgICBudHlwZShudHlwZSwgY29uZmlnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbnR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25maWcgPSBudHlwZTtcbiAgICAgICAgICAgIGlmICghY29uZmlnLm50eXBlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDbGFzcyBkZWZpbmVkIHdpdGggb2JqZWN0IGNvbmZpZ3VyYXRpb24gbWlzc2luZyBudHlwZSBwcm9wZXJ0eS4gJyArIGNvbmZpZy5udHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBudHlwZSA9IGNvbmZpZy5udHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSBOZW8ubnR5cGVNYXBbbnR5cGVdO1xuXG4gICAgICAgIGlmICghY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ250eXBlICcgKyBudHlwZSArICcgZG9lcyBub3QgZXhpc3QnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTmVvLmNyZWF0ZShjbGFzc05hbWUsIGNvbmZpZyk7XG4gICAgfVxufSwgTmVvKTtcblxuLyoqXG4gKiBMaXN0IG9mIGNsYXNzIHByb3BlcnRpZXMgd2hpY2ggYXJlIG5vdCBzdXBwb3NlZCB0byBnZXQgbWl4ZWQgaW50byBvdGhlciBjbGFzc2VzXG4gKiBAdHlwZSB7c3RyaW5nW119XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBpZ25vcmVNaXhpbiA9IFtcbiAgICAnX25hbWUnLFxuICAgICdjbGFzc0NvbmZpZ0FwcGxpZWQnLFxuICAgICdjbGFzc05hbWUnLFxuICAgICdjb25zdHJ1Y3RvcicsXG4gICAgJ2lzQ2xhc3MnLFxuICAgICdtaXhpbicsXG4gICAgJ250eXBlJyxcbiAgICAnb2JzZXJ2YWJsZScsXG4gICAgJ3JlZ2lzdGVyVG9HbG9iYWxOcydcbl07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gY2xzXG4gKiBAcGFyYW0ge0FycmF5fSBtaXhpbnNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFwcGx5TWl4aW5zKGNscywgbWl4aW5zKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1peGlucykpIHtcbiAgICAgICAgbWl4aW5zID0gW21peGluc107XG4gICAgfVxuXG4gICAgbGV0IGkgICAgICAgICAgICA9IDAsXG4gICAgICAgIGxlbiAgICAgICAgICA9IG1peGlucy5sZW5ndGgsXG4gICAgICAgIG1peGluQ2xhc3NlcyA9IHt9LFxuICAgICAgICBtaXhpbiwgbWl4aW5DbHMsIG1peGluUHJvdG87XG5cbiAgICBmb3IgKDtpIDwgbGVuO2krKykge1xuICAgICAgICBtaXhpbiA9IG1peGluc1tpXTtcblxuICAgICAgICBpZiAobWl4aW4uaXNDbGFzcykge1xuICAgICAgICAgICAgbWl4aW5Qcm90byA9IG1peGluLnByb3RvdHlwZTtcbiAgICAgICAgICAgIG1peGluQ2xzICAgPSBOZW8ubnMobWl4aW5Qcm90by5jbGFzc05hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFleGlzdHMobWl4aW4pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBdHRlbXB0aW5nIHRvIG1peGluIGFuIHVuZGVmaW5lZCBjbGFzczogJyArIG1peGluICsgJywgJyArIGNscy5wcm90b3R5cGUuY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1peGluQ2xzICAgPSBOZW8ubnMobWl4aW4pO1xuICAgICAgICAgICAgbWl4aW5Qcm90byA9IG1peGluQ2xzLnByb3RvdHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1peGluUHJvdG8uY2xhc3NOYW1lLnNwbGl0KCcuJykucmVkdWNlKG1peFJlZHVjZShtaXhpbkNscyksIG1peGluQ2xhc3Nlcyk7XG5cbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobWl4aW5Qcm90bykuZm9yRWFjaChtaXhpblByb3BlcnR5KGNscy5wcm90b3R5cGUsIG1peGluUHJvdG8pKTtcbiAgICB9XG5cbiAgICBjbHMucHJvdG90eXBlLm1peGlucyA9IG1peGluQ2xhc3NlczsgLy8gdG9kbzogd2Ugc2hvdWxkIGRvIGEgZGVlcCBtZXJnZVxufVxuXG4vKipcbiAqIENyZWF0ZXMgZ2V0IC8gc2V0IG1ldGhvZHMgZm9yIGNsYXNzIGNvbmZpZ3MgZW5kaW5nIHdpdGggYW4gdW5kZXJzY29yZVxuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBwcm90b1xuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHByaXZhdGVcbiAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICovXG5mdW5jdGlvbiBhdXRvR2VuZXJhdGVHZXRTZXQocHJvdG8sIGtleSkge1xuICAgIGlmIChoYXNQcm9wZXJ0eVNldHRlcihwcm90bywga2V5KSkge1xuICAgICAgICB0aHJvdygnQ29uZmlnICcgKyBrZXkgKyAnXyAoJyArIHByb3RvLmNsYXNzTmFtZSArICcpIGFscmVhZHkgaGFzIGEgc2V0IG1ldGhvZCwgdXNlIGJlZm9yZUdldCwgYmVmb3JlU2V0ICYgYWZ0ZXJTZXQgaW5zdGVhZCcpO1xuICAgIH1cblxuICAgIGlmICghTmVvW2dldFNldENhY2hlXSkge1xuICAgICAgICBOZW9bZ2V0U2V0Q2FjaGVdID0ge307XG4gICAgfVxuXG4gICAgaWYgKCFOZW9bZ2V0U2V0Q2FjaGVdW2tleV0pIHtcbiAgICAgICAgTmVvW2dldFNldENhY2hlXVtrZXldID0ge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVHZXQgPSAnYmVmb3JlR2V0JyArIE5lby5jYXBpdGFsaXplKGtleSksXG4gICAgICAgICAgICAgICAgICAgIGhhc05ld0tleSA9IG1lW2NvbmZpZ1N5bWJvbF0uaGFzT3duUHJvcGVydHkoa2V5KSxcbiAgICAgICAgICAgICAgICAgICAgbmV3S2V5ICAgID0gbWVbY29uZmlnU3ltYm9sXVtrZXldLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgICAgPSBoYXNOZXdLZXkgPyBuZXdLZXkgOiBtZVsnXycgKyBrZXldO1xuXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICdpdGVtcycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gWy4uLnZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3IERhdGUodmFsdWUudmFsdWVPZigpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaGFzTmV3S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIG1lW2tleV0gPSB2YWx1ZTsgLy8gd2UgZG8gd2FudCB0byB0cmlnZ2VyIHRoZSBzZXR0ZXIgPT4gYmVmb3JlU2V0LCBhZnRlclNldFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG1lWydfJyArIGtleV07IC8vIHJldHVybiB0aGUgdmFsdWUgcGFyc2VkIGJ5IHRoZSBzZXR0ZXJcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lW2JlZm9yZUdldF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBtZVtiZWZvcmVHZXRdKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgX2tleSAgICAgID0gJ18nICsga2V5LFxuICAgICAgICAgICAgICAgICAgICB1S2V5ICAgICAgPSBOZW8uY2FwaXRhbGl6ZShrZXkpLFxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVTZXQgPSAnYmVmb3JlU2V0JyArIHVLZXksXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyU2V0ICA9ICdhZnRlclNldCcgICsgdUtleSxcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWUgID0gbWVbX2tleV07XG5cbiAgICAgICAgICAgICAgICAvLyBldmVyeSBzZXQgY2FsbCBoYXMgdG8gZGVsZXRlIHRoZSBtYXRjaGluZyBzeW1ib2xcbiAgICAgICAgICAgICAgICBkZWxldGUgbWVbY29uZmlnU3ltYm9sXVtrZXldO1xuXG4gICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ2l0ZW1zJykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE5lby5jbG9uZSh2YWx1ZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gd2UgZG8gd2FudCB0byBzdG9yZSB0aGUgdmFsdWUgYmVmb3JlIHRoZSBiZWZvcmVTZXQgbW9kaWZpY2F0aW9uIGFzIHdlbGwsXG4gICAgICAgICAgICAgICAgLy8gc2luY2UgaXQgY291bGQgZ2V0IHB1bGxlZCBieSBvdGhlciBiZWZvcmVTZXQgbWV0aG9kcyBvZiBkaWZmZXJlbnQgY29uZmlnc1xuICAgICAgICAgICAgICAgIG1lW19rZXldID0gdmFsdWU7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lW2JlZm9yZVNldF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBtZVtiZWZvcmVTZXRdKHZhbHVlLCBvbGRWYWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhleSBkb24ndCByZXR1cm4gYSB2YWx1ZSwgdGhhdCBtZWFucyBubyBjaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lW19rZXldID0gb2xkVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBtZVtfa2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChoYXNDaGFuZ2VkKHZhbHVlLCBvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZVthZnRlclNldF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lW2FmdGVyU2V0XSh2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywga2V5LCBOZW9bZ2V0U2V0Q2FjaGVdW2tleV0pO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgY2xhc3MgbmFtZSBleGlzdHMgaW5zaWRlIHRoZSBOZW8gb3IgYXBwIG5hbWVzcGFjZVxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBleGlzdHMoY2xhc3NOYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuICEhY2xhc3NOYW1lLnNwbGl0KCcuJykucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcHJldltjdXJyZW50XTtcbiAgICAgICAgfSwgc2VsZik7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSB2YWx1ZSBvZiBhIGNvbmZpZyBoYXMgY2hhbmdlZFxuICogdG9kbzogd2UgY291bGQgY29tcGFyZSBvYmplY3RzICYgYXJyYXlzIGZvciBlcXVhbGl0eVxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHsqfSBvbGRWYWx1ZVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBoYXNDaGFuZ2VkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKE5lby5pc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlIGluc3RhbmNlb2YgRGF0ZSAmJiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBvbGRWYWx1ZS52YWx1ZU9mKCkgIT09IHZhbHVlLnZhbHVlT2YoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBvbGRWYWx1ZSAhPT0gdmFsdWU7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZXJlIGlzIGEgc2V0IG1ldGhvZCBmb3IgYSBnaXZlbiBwcm9wZXJ0eSBrZXkgaW5zaWRlIHRoZSBwcm90b3R5cGUgY2hhaW5cbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gcHJvdG8gVGhlIHRvcCBsZXZlbCBwcm90b3R5cGUgb2YgYSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGtleSB0aGUgcHJvcGVydHkga2V5IHRvIHRlc3RcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaGFzUHJvcGVydHlTZXR0ZXIocHJvdG8sIGtleSkge1xuICAgIGxldCBkZXNjcmlwdG9yO1xuXG4gICAgd2hpbGUgKHByb3RvLl9fcHJvdG9fXykge1xuICAgICAgICBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywga2V5KTtcblxuICAgICAgICBpZiAodHlwZW9mIGRlc2NyaXB0b3IgPT09ICdvYmplY3QnICYmIHR5cGVvZiBkZXNjcmlwdG9yLnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcHJvdG8gPSBwcm90by5fX3Byb3RvX187XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHByb3RvXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IG1peGluUHJvdG9cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG1peGluUHJvcGVydHkocHJvdG8sIG1peGluUHJvdG8pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIGlmICh+aWdub3JlTWl4aW4uaW5kZXhPZihrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3RvW2tleV0gJiYgcHJvdG9ba2V5XS5fZnJvbSkge1xuICAgICAgICAgICAgaWYgKG1peGluUHJvdG8uY2xhc3NOYW1lID09PSBwcm90b1trZXldLl9mcm9tKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdNaXhpbiBzZXQgbXVsdGlwbGUgdGltZXMgb3IgYWxyZWFkeSBkZWZpbmVkIG9uIGEgQmFzZSBDbGFzcycsIHByb3RvLmNsYXNzTmFtZSwgbWl4aW5Qcm90by5jbGFzc05hbWUsIGtleSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIHByb3RvLmNsYXNzTmFtZSArICc6IE11bHRpcGxlIG1peGlucyBkZWZpbmluZyBzYW1lIHByb3BlcnR5ICgnICtcbiAgICAgICAgICAgICAgICBtaXhpblByb3RvLmNsYXNzTmFtZSArICcsICcgK1xuICAgICAgICAgICAgICAgIHByb3RvW2tleV0uX2Zyb20gKyAnKSA9PiAnICtcbiAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBwcm90b1trZXldID0gbWl4aW5Qcm90b1trZXldO1xuXG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIGtleSkuX2Zyb20gPSBtaXhpblByb3RvLmNsYXNzTmFtZTtcblxuICAgICAgICBpZiAodHlwZW9mIHByb3RvW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHByb3RvW2tleV0uX25hbWUgPSBrZXk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gbWl4aW5DbHNcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG1peFJlZHVjZShtaXhpbkNscykge1xuICAgIHJldHVybiAocHJldiwgY3VycmVudCwgaWR4LCBhcnIpID0+IHtcbiAgICAgICAgcmV0dXJuIHByZXZbY3VycmVudF0gPSBpZHggIT09IGFyci5sZW5ndGggLTEgPyBwcmV2W2N1cnJlbnRdIHx8IHt9IDogbWl4aW5DbHM7XG4gICAgfTtcbn1cblxuTmVvLmNvbmZpZyA9IE5lby5jb25maWcgfHwge307XG5cbk5lby5hc3NpZ25EZWZhdWx0cyhOZW8uY29uZmlnLCBEZWZhdWx0Q29uZmlnKTtcblxuZXhwb3J0IHtOZW8gYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvcmVCYXNlICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgRmlsdGVyICAgICBmcm9tICcuL0ZpbHRlci5tanMnO1xuaW1wb3J0IExvZ2dlciAgICAgZnJvbSAnLi4vY29yZS9Mb2dnZXIubWpzJztcbmltcG9ydCBTb3J0ZXIgICAgIGZyb20gJy4vU29ydGVyLm1qcyc7XG5pbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICcuLi9jb3JlL09ic2VydmFibGUubWpzJztcbmltcG9ydCBVdGlsICAgICAgIGZyb20gJy4uL2NvcmUvVXRpbC5tanMnO1xuXG5jb25zdCBjb3VudE11dGF0aW9ucyAgID0gU3ltYm9sKCdjb3VudE11dGF0aW9ucycpLFxuICAgICAgaXNGaWx0ZXJlZCAgICAgICA9IFN5bWJvbCgnaXNGaWx0ZXJlZCcpLFxuICAgICAgaXNTb3J0ZWQgICAgICAgICA9IFN5bWJvbCgnaXNTb3J0ZWQnKSxcbiAgICAgIHNpbGVudFVwZGF0ZU1vZGUgPSBTeW1ib2woJ3NpbGVudFVwZGF0ZU1vZGUnKSxcbiAgICAgIHRvQWRkQXJyYXkgICAgICAgPSBTeW1ib2woJ3RvQWRkQXJyYXknKSxcbiAgICAgIHRvUmVtb3ZlQXJyYXkgICAgPSBTeW1ib2woJ3RvUmVtb3ZlQXJyYXknKSxcbiAgICAgIHVwZGF0aW5nSW5kZXggICAgPSBTeW1ib2woJ3VwZGF0aW5nSW5kZXgnKTtcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvbGxlY3Rpb24uQmFzZVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBCYXNlIGV4dGVuZHMgQ29yZUJhc2Uge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlL09ic2VydmFibGUubWpzIG1peGluXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9ic2VydmFibGU9dHJ1ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBvYnNlcnZhYmxlOiB0cnVlXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29sbGVjdGlvbi5CYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29sbGVjdGlvbi5CYXNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NvbGxlY3Rpb24nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY29sbGVjdGlvbicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIGZpbHRlcmluZyB0aGUgY29sbGVjdGlvbiBmb3IgdGhlIGZpcnN0IHRpbWUsIGFsbEl0ZW1zIHdpbGwgYmVjb21lIGEgbmV3IGNvbGxlY3Rpb24gZm9yIHRoZSB1bmZpbHRlcmVkXG4gICAgICAgICAqIHN0YXRlLCB1c2luZyB0aGlzIGlkIGFzIHRoZSBzb3VyY2VDb2xsZWN0aW9uSWRcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbGxlY3Rpb24uQmFzZXxudWxsfSBhbGxJdGVtc1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBhbGxJdGVtczogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgdG8gc29ydCB0aGUgY29sbGVjdGlvbiBpdGVtcyB3aGVuIGFkZGluZyAvIGluc2VydGluZyBuZXcgb25lc1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBhdXRvU29ydFxuICAgICAgICAgKi9cbiAgICAgICAgYXV0b1NvcnQ6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVc2UgJ3ByaW1pdGl2ZScgZm9yIGRlZmF1bHQgZmlsdGVycywgdXNlICdhZHZhbmNlZCcgZm9yIGZpbHRlcnMgdXNpbmcgYSBmaWx0ZXJCeSBtZXRob2RcbiAgICAgICAgICogd2hpY2ggbmVlZCB0byBpdGVyYXRlIG92ZXIgb3RoZXIgY29sbGVjdGlvbiBpdGVtc1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGZpbHRlck1vZGU9J3ByaW1pdGl2ZSdcbiAgICAgICAgICovXG4gICAgICAgIGZpbHRlck1vZGU6ICdwcmltaXRpdmUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gQXJyYXkgY29udGFpbmluZyBOZW8udXRpbC5GaWx0ZXIgY29uZmlnIG9iamVjdHMgb3IgaW5zdGFuY2VzXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBmaWx0ZXJzXz1bXVxuICAgICAgICAgKi9cbiAgICAgICAgZmlsdGVyc186IFtdLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHVuaXF1ZSghKSBrZXkgcHJvcGVydHkgb2YgZWFjaCBjb2xsZWN0aW9uIGl0ZW1cbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGl0ZW1zXz1bXVxuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXNfOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB1bmlxdWUoISkga2V5IHByb3BlcnR5IG9mIGVhY2ggY29sbGVjdGlvbiBpdGVtXG4gICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30ga2V5UHJvcGVydHk9J2lkJ1xuICAgICAgICAgKi9cbiAgICAgICAga2V5UHJvcGVydHk6ICdpZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIG1hcCBjb250YWluaW5nIHRoZSBrZXkgJiByZWZlcmVuY2Ugb2YgZWFjaCBjb2xsZWN0aW9uIGl0ZW0gZm9yIGZhc3RlciBhY2Nlc3NcbiAgICAgICAgICogQG1lbWJlciB7TWFwfSBtYXBfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIG1hcF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBpbnRlcm5hbCBBcnJheSBvZiB0aGUgc29ydCBkaXJlY3Rpb25zIGZvciBmYXN0ZXIgYWNjZXNzXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBzb3J0RGlyZWN0aW9ucz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNvcnREaXJlY3Rpb25zOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gaW50ZXJuYWwgQXJyYXkgb2YgdGhlIHNvcnQgcHJvcGVydGllcyBmb3IgZmFzdGVyIGFjY2Vzc1xuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gc29ydFByb3BlcnRpZXM9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzb3J0UHJvcGVydGllczogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIEFycmF5IGNvbnRhaW5pbmcgTmVvLnV0aWwuU29ydGVyIGNvbmZpZyBvYmplY3RzIG9yIGluc3RhbmNlc1xuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gc29ydGVyc189W11cbiAgICAgICAgICovXG4gICAgICAgIHNvcnRlcnNfOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpZCBvZiBhbm90aGVyIGNvbGxlY3Rpb24gaW5zdGFuY2UgdG8gdXNlIGFzIHRoaXMgZGF0YSBzb3VyY2VcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHNvdXJjZUlkXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzb3VyY2VJZF86IG51bGxcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBzeW1ib2xDb25maWcgPSB7ZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlfTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhtZSwge1xuICAgICAgICAgICAgW2NvdW50TXV0YXRpb25zXSAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogZmFsc2V9LFxuICAgICAgICAgICAgW2lzRmlsdGVyZWRdICAgICAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogZmFsc2V9LFxuICAgICAgICAgICAgW2lzU29ydGVkXSAgICAgICAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogZmFsc2V9LFxuICAgICAgICAgICAgW3NpbGVudFVwZGF0ZU1vZGVdOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogZmFsc2V9LFxuICAgICAgICAgICAgW3RvQWRkQXJyYXldICAgICAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogW119LFxuICAgICAgICAgICAgW3RvUmVtb3ZlQXJyYXldICAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogW119LFxuICAgICAgICAgICAgW3VwZGF0aW5nSW5kZXhdICAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogMH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1lLmF1dG9Tb3J0ICYmIG1lLl9zb3J0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG1lLmRvU29ydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBvbmUgb3IgbW9yZSBpdGVtcyB0byB0aGUgZW5kIG9mIHRoZSBjb2xsZWN0aW9uIGFuZCByZXR1cm5zIHRoZSBuZXcgbGVuZ3RoIG9mIHRoZSBjb2xsZWN0aW9uLlxuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBpdGVtIFRoZSBpdGVtKHMpIHRvIGFkZFxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBjb2xsZWN0aW9uIGNvdW50XG4gICAgICovXG4gICAgYWRkKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5zcGxpY2UoMCwgbnVsbCwgaXRlbSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RmlsdGVycyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICB2YWx1ZS5mb3JFYWNoKGZpbHRlciA9PiB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyLmxpc3RlbmVyQXBwbGllZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIub24oJ2NoYW5nZScsIG1lLm9uRmlsdGVyQ2hhbmdlLCBtZSk7XG4gICAgICAgICAgICAgICAgZmlsdGVyLmxpc3RlbmVyQXBwbGllZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgbWUuZmlsdGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlXG4gICAgICogQHBhcmFtIHtBcnJheX0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRJdGVtcyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGtleVByb3BlcnR5ID0gbWUua2V5UHJvcGVydHksXG4gICAgICAgICAgICBpICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgICA9IHZhbHVlLmxlbmd0aCxcbiAgICAgICAgICAgIGl0ZW07XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaXRlbSA9IHZhbHVlW2ldO1xuICAgICAgICAgICAgbWUubWFwLnNldChpdGVtW2tleVByb3BlcnR5XSwgaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlXG4gICAgICogQHBhcmFtIHtBcnJheX0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTb3J0ZXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmFwcGx5U29ydGVyQ29uZmlncygpO1xuXG4gICAgICAgIHZhbHVlLmZvckVhY2goc29ydGVyID0+IHtcbiAgICAgICAgICAgIGlmIChzb3J0ZXIubGlzdGVuZXJBcHBsaWVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHNvcnRlci5vbignY2hhbmdlJywgbWUub25Tb3J0ZXJDaGFuZ2UsIG1lKTtcbiAgICAgICAgICAgICAgICBzb3J0ZXIubGlzdGVuZXJBcHBsaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlICYmIG1lLmF1dG9Tb3J0KSB7XG4gICAgICAgICAgICBtZS5kb1NvcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTb3VyY2VJZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBzb3VyY2UgPSBOZW8uZ2V0KHZhbHVlKTtcblxuICAgICAgICAgICAgbWUuX2l0ZW1zID0gWy4uLnNvdXJjZS5faXRlbXNdO1xuICAgICAgICAgICAgbWUubWFwICAgID0gbmV3IE1hcChzb3VyY2UubWFwKTsgLy8gY3JlYXRlcyBhIGNsb25lIG9mIHRoZSBvcmlnaW5hbCBtYXBcblxuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXJzQ29uZmlnID0ge1xuICAgICAgICAgICAgICAgIG11dGF0ZTogbWUub25NdXRhdGUsXG4gICAgICAgICAgICAgICAgc2NvcGUgOiBtZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgc291cmNlLm9uKGxpc3RlbmVyc0NvbmZpZyk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZnRlclNldFNvdXJjZUlkJywgc291cmNlKTtcblxuICAgICAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgc291cmNlID0gTmVvLmdldChvbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgc291cmNlLnVuKGxpc3RlbmVyc0NvbmZpZyk7IC8vIHRvZG86IGNvcmUuT2JzZXJ2YWJsZS51biBuZWVkcyB0byBzdXBwb3J0IHRoaXMgc3ludGF4XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTYXZlcyB0aGUgc29ydCBwcm9wZXJ0eSAmIGRpcmVjdGlvbiBtdWx0aXBsaWVyIG9mIGVhY2ggc29ydGVyIGluc2lkZSAyIGFycmF5cyBmb3IgZmFzdGVyIGFjY2VzcyB3aGVuIHNvcnRpbmdcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYXBwbHlTb3J0ZXJDb25maWdzKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLnNvcnREaXJlY3Rpb25zID0gW107XG4gICAgICAgIG1lLnNvcnRQcm9wZXJ0aWVzID0gW107XG5cbiAgICAgICAgbWUuc29ydGVycy5mb3JFYWNoKHNvcnRlciA9PiB7Ly9jb25zb2xlLmxvZygnZm9yRWFjaCcsIHNvcnRlcik7XG4gICAgICAgICAgICBtZS5zb3J0RGlyZWN0aW9ucy5wdXNoKHNvcnRlci5kaXJlY3Rpb25NdWx0aXBsaWVyKTtcbiAgICAgICAgICAgIG1lLnNvcnRQcm9wZXJ0aWVzLnB1c2goc29ydGVyLnByb3BlcnR5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge01hcHxudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TWFwfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldE1hcCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICF2YWx1ZSA/IG5ldyBNYXAoKSA6IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRGaWx0ZXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID8gW3ZhbHVlXSA6IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxlbiA9IG9sZFZhbHVlICYmIG9sZFZhbHVlLmxlbmd0aCB8fCAwLFxuICAgICAgICAgICAgaGFzTWF0Y2gsIGk7XG5cbiAgICAgICAgdmFsdWUuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpICAgICAgICA9IDA7XG5cbiAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRWYWx1ZVtpXSA9PT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZVtpXS5zZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBrZXkub3BlcmF0b3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IGtleS5wcm9wZXJ0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDoga2V5LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZVtpXS5vcGVyYXRvciA9PT0gKGtleS5vcGVyYXRvciB8fCAnPT09JykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlW2ldLnByb3BlcnR5ID09PSBrZXkucHJvcGVydHkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlW2ldLnZhbHVlICAgID09PSBrZXkudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFoYXNNYXRjaCkge1xuICAgICAgICAgICAgICAgIHZhbHVlW2luZGV4XSA9IE5lby5jcmVhdGUoRmlsdGVyLCBrZXkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVtpbmRleF0gPSBvbGRWYWx1ZVtpXTtcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgbGVuLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9sZFZhbHVlKSkge1xuICAgICAgICAgICAgb2xkVmFsdWUuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGtleS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlXG4gICAgICogQHBhcmFtIHtBcnJheX0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0U29ydGVycyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA/IFt2YWx1ZV0gOiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsZW4gPSBvbGRWYWx1ZSAmJiBvbGRWYWx1ZS5sZW5ndGggfHwgMCxcbiAgICAgICAgICAgIGhhc01hdGNoLCBpO1xuXG4gICAgICAgIHZhbHVlLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGhhc01hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaSAgICAgICAgPSAwO1xuXG4gICAgICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAob2xkVmFsdWVbaV0gPT09IGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWVbaV0uc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGtleS5kaXJlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkgOiBrZXkucHJvcGVydHlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvbGRWYWx1ZVtpXS5wcm9wZXJ0eSA9PT0ga2V5LnByb3BlcnR5ICYmIG9sZFZhbHVlW2ldLmRpcmVjdGlvbiA9PT0ga2V5LmRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaGFzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVtpbmRleF0gPSBOZW8uY3JlYXRlKFNvcnRlciwga2V5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWVbaW5kZXhdID0gb2xkVmFsdWVbaV07XG4gICAgICAgICAgICAgICAgb2xkVmFsdWUuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGxlbi0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBrZXkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3B0c1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBjYWNoZVVwZGF0ZShvcHRzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjYWNoZVVwZGF0ZScsIG9wdHMsIHRoaXNbdG9BZGRBcnJheV0pO3JldHVybjtcblxuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAga2V5UHJvcGVydHkgPSBtZS5rZXlQcm9wZXJ0eSxcbiAgICAgICAgICAgIGluZGV4LCB0b0FkZE1hcCwgdG9SZW1vdmVNYXA7XG5cbiAgICAgICAgaWYgKCFtZVtzaWxlbnRVcGRhdGVNb2RlXSkge1xuICAgICAgICAgICAgdG9BZGRNYXAgICAgPSBtZVt0b0FkZEFycmF5XSAgIC5tYXAoZSA9PiBlW2tleVByb3BlcnR5XSk7XG4gICAgICAgICAgICB0b1JlbW92ZU1hcCA9IG1lW3RvUmVtb3ZlQXJyYXldLm1hcChlID0+IGVba2V5UHJvcGVydHldKTtcblxuICAgICAgICAgICAgb3B0cy5hZGRlZEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID0gdG9SZW1vdmVNYXAuaW5kZXhPZihpdGVtW2tleVByb3BlcnR5XSkgPiAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVbdG9SZW1vdmVBcnJheV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRvQWRkTWFwLmluZGV4T2YoaXRlbVtrZXlQcm9wZXJ0eV0pIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBtZVt0b0FkZEFycmF5XS5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBvcHRzLnJlbW92ZWRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9IHRvQWRkTWFwLmluZGV4T2YoaXRlbVtrZXlQcm9wZXJ0eV0pID4gLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lW3RvQWRkQXJyYXldLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0b1JlbW92ZU1hcC5pbmRleE9mKGl0ZW1ba2V5UHJvcGVydHldKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbWVbdG9SZW1vdmVBcnJheV0ucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIGl0ZW1zIGFuZCBjbGVhcnMgdGhlIG1hcFxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLl9pdGVtcy5zcGxpY2UoMCwgbWUuZ2V0Q291bnQoKSk7XG4gICAgICAgIG1lLm1hcC5jbGVhcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgY3VycmVudCBmaWx0ZXJzIGFuZCBvcHRpb25hbGx5IHJlc3RvcmVzIHRoZSBvcmlnaW5hbCBvbmVzIGluIGNhc2UgdGhleSBleGlzdGVkLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Jlc3RvcmVPcmlnaW5hbEZpbHRlcnM9ZmFsc2VdXG4gICAgICovXG4gICAgY2xlYXJGaWx0ZXJzKHJlc3RvcmVPcmlnaW5hbEZpbHRlcnMpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJzID0gcmVzdG9yZU9yaWdpbmFsRmlsdGVycyA/IE5lby5jbG9uZSh0aGlzLm9yaWdpbmFsQ29uZmlnLmZpbHRlcnMsIHRydWUsIHRydWUpIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIGN1cnJlbnQgc29ydGVycyBhbmQgb3B0aW9uYWxseSByZXN0b3JlcyB0aGUgb3JpZ2luYWwgb25lcyBpbiBjYXNlIHRoZXkgZXhpc3RlZC5cbiAgICAgKiBXaXRob3V0IHJlc3RvcmVJbml0aWFsU3RhdGUgYXMgdHJ1ZSB0aGlzIHdpbGwgbm90IGFmZmVjdCB0aGUgY3VycmVudCBzb3J0aW5nIG9mIHRoaXMgY29sbGVjdGlvbi5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXN0b3JlT3JpZ2luYWxTb3J0ZXJzPWZhbHNlXVxuICAgICAqL1xuICAgIGNsZWFyU29ydGVycyhyZXN0b3JlT3JpZ2luYWxTb3J0ZXJzKSB7XG4gICAgICAgIHRoaXMuc29ydGVycyA9IHJlc3RvcmVPcmlnaW5hbFNvcnRlcnMgPyBOZW8uY2xvbmUodGhpcy5vcmlnaW5hbENvbmZpZy5zb3J0ZXJzLCB0cnVlLCB0cnVlKSA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbGxlY3Rpb24uQmFzZX0gVGhlIGNsb25lZCBjb2xsZWN0aW9uXG4gICAgICovXG4gICAgY2xvbmUoKSB7XG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbmZpZyAgPSBOZW8uY2xvbmUobWUub3JpZ2luYWxDb25maWcsIHRydWUpLFxuICAgICAgICAgICAgZmlsdGVycyA9IG1lLl9maWx0ZXJzIHx8IFtdLFxuICAgICAgICAgICAgc29ydGVycyA9IG1lLl9zb3J0ZXJzIHx8IFtdO1xuXG4gICAgICAgIGRlbGV0ZSBjb25maWcuaWQ7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuZmlsdGVycztcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5pdGVtcztcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5zb3J0ZXJzO1xuXG4gICAgICAgIGlmIChtZS5faXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uZmlnLml0ZW1zID0gWy4uLm1lLl9pdGVtc107XG4gICAgICAgIH1cblxuICAgICAgICBjb25maWcuZmlsdGVycyA9IFtdO1xuICAgICAgICBjb25maWcuc29ydGVycyA9IFtdO1xuXG4gICAgICAgIC8vIHRvZG86IGZpbHRlcnMgJiBzb3J0ZXJzIHNob3VsZCBwdXNoIHRoZWlyIGN1cnJlbnQgc3RhdGUgYW5kIG5vdCB0aGUgb3JpZ2luYWwgb25lXG5cbiAgICAgICAgZmlsdGVycy5mb3JFYWNoKGZ1bmN0aW9uKGZpbHRlcikge1xuICAgICAgICAgICAgY29uZmlnLmZpbHRlcnMucHVzaChmaWx0ZXIub3JpZ2luYWxDb25maWcpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzb3J0ZXJzLmZvckVhY2goZnVuY3Rpb24oc29ydGVyKSB7XG4gICAgICAgICAgICBjb25maWcuc29ydGVycy5wdXNoKHNvcnRlci5vcmlnaW5hbENvbmZpZyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBOZW8uY3JlYXRlKEJhc2UsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBtYXAgJiBpdGVtcyBhcnJheSBiZWZvcmUgdGhlIHN1cGVyIGNhbGxcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLml0ZW1zLnNwbGljZSgwLCBtZS5faXRlbXMubGVuZ3RoKTtcbiAgICAgICAgbWUubWFwLmNsZWFyKCk7XG5cbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBkb1NvcnQoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgICAgICA9IG1lLl9pdGVtcyxcbiAgICAgICAgICAgIHNvcnRlcnMgICAgICAgICAgID0gbWUuc29ydGVycyxcbiAgICAgICAgICAgIHNvcnREaXJlY3Rpb25zICAgID0gbWUuc29ydERpcmVjdGlvbnMsXG4gICAgICAgICAgICBzb3J0UHJvcGVydGllcyAgICA9IG1lLnNvcnRQcm9wZXJ0aWVzLFxuICAgICAgICAgICAgY291bnRTb3J0ZXJzICAgICAgPSBzb3J0UHJvcGVydGllcy5sZW5ndGggfHwgMCxcbiAgICAgICAgICAgIGhhc1NvcnRCeU1ldGhvZCAgID0gZmFsc2UsXG4gICAgICAgICAgICBoYXNUcmFuc2Zvcm1WYWx1ZSA9IGZhbHNlLFxuICAgICAgICAgICAgaSwgbWFwcGVkSXRlbXMsIG9iaiwgc29ydGVyLCBzb3J0UHJvcGVydHksIHNvcnRWYWx1ZTtcblxuICAgICAgICBpZiAoY291bnRTb3J0ZXJzID4gMCkge1xuICAgICAgICAgICAgc29ydGVycy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5zb3J0QnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzU29ydEJ5TWV0aG9kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoa2V5LnVzZVRyYW5zZm9ybVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc1RyYW5zZm9ybVZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGhhc1NvcnRCeU1ldGhvZCkge1xuICAgICAgICAgICAgICAgIG1lLl9pdGVtcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGkgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgY291bnRTb3J0ZXJzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRlciAgICA9IHNvcnRlcnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0VmFsdWUgPSBzb3J0ZXJbc29ydGVyLnNvcnRCeSA/ICdzb3J0QnknIDogJ2RlZmF1bHRTb3J0QnknXShhLCBiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvcnRWYWx1ZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzb3J0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhc1RyYW5zZm9ybVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L3NvcnQjU29ydGluZ193aXRoX21hcFxuICAgICAgICAgICAgICAgICAgICBtYXBwZWRJdGVtcyA9IGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IHtpbmRleDogaW5kZXh9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaSAgID0gMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBjb3VudFNvcnRlcnM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzb3J0ZXJzW2ldLnVzZVRyYW5zZm9ybVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialtzb3J0UHJvcGVydGllc1tpXV0gPSBzb3J0ZXJzW2ldLnRyYW5zZm9ybVZhbHVlKGl0ZW1bc29ydFByb3BlcnRpZXNbaV1dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpbc29ydFByb3BlcnRpZXNbaV1dID0gaXRlbVtzb3J0UHJvcGVydGllc1tpXV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtYXBwZWRJdGVtcyA9IGl0ZW1zO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1hcHBlZEl0ZW1zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBjb3VudFNvcnRlcnM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ydFByb3BlcnR5ID0gc29ydFByb3BlcnRpZXNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhW3NvcnRQcm9wZXJ0eV0gPiBiW3NvcnRQcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMSAqIHNvcnREaXJlY3Rpb25zW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYVtzb3J0UHJvcGVydHldIDwgYltzb3J0UHJvcGVydHldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xICogc29ydERpcmVjdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChoYXNUcmFuc2Zvcm1WYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBtZS5faXRlbXMgPSBtYXBwZWRJdGVtcy5tYXAoZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zW2VsLmluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWVbaXNTb3J0ZWRdID0gY291bnRTb3J0ZXJzID4gMDtcblxuICAgICAgICBpZiAobWVbdXBkYXRpbmdJbmRleF0gPT09IDApIHtcbiAgICAgICAgICAgIG1lLmZpcmUoJ3NvcnQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc3VtZXMgdGhlIGNvbGxlY3Rpb24gZXZlbnRzLlxuICAgICAqIElmIHlvdSBzdGFydGVkIGFuIHVwZGF0ZSB1c2luZyB0aGUgc3RhcnRTaWxlbnRVcGRhdGVNb2RlIGZsYWcsXG4gICAgICogeW91IG11c3QgdXNlIHRoZSBlbmRTaWxlbnRVcGRhdGVNb2RlIHBhcmFtIGZvciB0aGlzIGNhbGwuXG4gICAgICogVXNpbmcgdGhlIGVuZFNpbGVudFVwZGF0ZU1vZGUgcGFyYW0gd2lsbCBub3QgZmlyZSBhIG11dGF0aW9uIGV2ZW50LlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2VuZFNpbGVudFVwZGF0ZU1vZGVdXG4gICAgICogQHNlZSB7QGxpbmsgTmVvLmNvbGxlY3Rpb24uQmFzZSNzdGFydFVwZGF0ZSBzdGFydFVwZGF0ZX1cbiAgICAgKi9cbiAgICBlbmRVcGRhdGUoZW5kU2lsZW50VXBkYXRlTW9kZSkge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lW3VwZGF0aW5nSW5kZXhdID4gMCkge1xuICAgICAgICAgICAgbWVbdXBkYXRpbmdJbmRleF0tLTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbmRTaWxlbnRVcGRhdGVNb2RlKSB7XG4gICAgICAgICAgICBtZVtzaWxlbnRVcGRhdGVNb2RlXSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUuZmlyZSgnbXV0YXRlJywge1xuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXMgIDogbWVbdG9BZGRBcnJheV0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlZEl0ZW1zOiBtZVt0b1JlbW92ZUFycmF5XVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1lW3RvQWRkQXJyYXldICAgLnNwbGljZSgwLCBtZVt0b0FkZEFycmF5XSAgIC5sZW5ndGgpO1xuICAgICAgICAgICAgbWVbdG9SZW1vdmVBcnJheV0uc3BsaWNlKDAsIG1lW3RvUmVtb3ZlQXJyYXldLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgZmlsdGVyKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGZpbHRlcnMgICAgICAgICA9IG1lLl9maWx0ZXJzLFxuICAgICAgICAgICAgY291bnRBbGxGaWx0ZXJzID0gZmlsdGVycy5sZW5ndGgsXG4gICAgICAgICAgICBjb3VudEZpbHRlcnMgICAgPSAwLFxuICAgICAgICAgICAgaXRlbXMgICAgICAgICAgID0gbWUuYWxsSXRlbXMgJiYgbWUuYWxsSXRlbXMuX2l0ZW1zIHx8IG1lLl9pdGVtcyxcbiAgICAgICAgICAgIGkgICAgICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBjb3VudEl0ZW1zICAgICAgPSBpdGVtcy5sZW5ndGgsXG4gICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zICAgPSBbXSxcbiAgICAgICAgICAgIGNvbmZpZywgaXNJbmNsdWRlZCwgaXRlbSwgaiwgdG1wSXRlbXM7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudEFsbEZpbHRlcnM7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFmaWx0ZXJzW2ldLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgY291bnRGaWx0ZXJzKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY291bnRGaWx0ZXJzID09PSAwICYmIG1lLmFsbEl0ZW1zKSB7XG4gICAgICAgICAgICBtZS5jbGVhcigpO1xuXG4gICAgICAgICAgICBtZS5pdGVtcyA9IFsuLi5tZS5hbGxJdGVtcy5faXRlbXNdO1xuICAgICAgICAgICAgbWUubWFwLnNldCguLi5tZS5hbGxJdGVtcy5tYXApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFtZS5hbGxJdGVtcykge1xuICAgICAgICAgICAgICAgIGNvbmZpZyA9IHsuLi5tZS5vcmlnaW5hbENvbmZpZ307XG5cbiAgICAgICAgICAgICAgICBkZWxldGUgY29uZmlnLmZpbHRlcnM7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5pdGVtcztcbiAgICAgICAgICAgICAgICBkZWxldGUgY29uZmlnLnNvcnRlcnM7XG5cbiAgICAgICAgICAgICAgICBtZS5hbGxJdGVtcyA9IE5lby5jcmVhdGUoQmFzZSwge1xuICAgICAgICAgICAgICAgICAgICAuLi5OZW8uY2xvbmUoY29uZmlnLCB0cnVlLCB0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAga2V5UHJvcGVydHk6IG1lLmtleVByb3BlcnR5LFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VJZCAgIDogbWUuaWRcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjaGlsZCBjb2xsZWN0aW9uJywgbWUuYWxsSXRlbXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZS5tYXAuY2xlYXIoKTtcblxuICAgICAgICAgICAgaWYgKG1lLmZpbHRlck1vZGUgPT09ICdwcmltaXRpdmUnKSB7XG4gICAgICAgICAgICAgICAgLy8gdXNpbmcgZm9yIGxvb3BzIG9uIHB1cnBvc2UgLT4gcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnRJdGVtczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzSW5jbHVkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpdGVtICAgICAgID0gaXRlbXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGogICAgICAgICAgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBqIDwgY291bnRBbGxGaWx0ZXJzOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXJzW2pdLmlzRmlsdGVyZWQoaXRlbSwgaXRlbXMsIGl0ZW1zKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW5jbHVkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0luY2x1ZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5tYXAuc2V0KGl0ZW1bbWUua2V5UHJvcGVydHldLCBpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1lLl9pdGVtcyA9IGZpbHRlcmVkSXRlbXM7IC8vIHNpbGVudCB1cGRhdGUsIHRoZSBtYXAgaXMgYWxyZWFkeSBpbiBwbGFjZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zID0gWy4uLml0ZW1zXTtcblxuICAgICAgICAgICAgICAgIGZvciAoaj0wOyBqIDwgY291bnRBbGxGaWx0ZXJzOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdG1wSXRlbXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnRJdGVtczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZpbHRlcnNbal0uaXNGaWx0ZXJlZChmaWx0ZXJlZEl0ZW1zW2ldLCBmaWx0ZXJlZEl0ZW1zLCBpdGVtcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXBJdGVtcy5wdXNoKGZpbHRlcmVkSXRlbXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRJdGVtcyA9IFsuLi50bXBJdGVtc107XG4gICAgICAgICAgICAgICAgICAgIGNvdW50SXRlbXMgICAgPSBmaWx0ZXJlZEl0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtZS5pdGVtcyA9IGZpbHRlcmVkSXRlbXM7IC8vIHVwZGF0ZSB0aGUgbWFwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZVtpc0ZpbHRlcmVkXSA9IGNvdW50RmlsdGVycyAhPT0gMDtcblxuICAgICAgICBtZS5maXJlKCdmaWx0ZXInKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBpdGVtcyB3aGljaCBtYXRjaCB0aGUgcHJvcGVydHkgYW5kIHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYW4gZW1wdHkgQXJyYXkgaW4gY2FzZSBubyBpdGVtcyBhcmUgZm91bmRcbiAgICAgKi9cbiAgICBmaW5kKHByb3BlcnR5LCB2YWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgICAgID0gW10sXG4gICAgICAgICAgICBpc09iamVjdFByb3BlcnR5ID0gTmVvLmlzT2JqZWN0KHByb3BlcnR5KSxcbiAgICAgICAgICAgIG1hdGNoQXJyYXksIHByb3BlcnRpZXNBcnJheSwgcHJvcGVydGllc0xlbmd0aDtcblxuICAgICAgICBpZiAoaXNPYmplY3RQcm9wZXJ0eSkge1xuICAgICAgICAgICAgcHJvcGVydGllc0FycmF5ICA9IE9iamVjdC5lbnRyaWVzKHByb3BlcnR5KTtcbiAgICAgICAgICAgIHByb3BlcnRpZXNMZW5ndGggPSBwcm9wZXJ0aWVzQXJyYXkubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdFByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hBcnJheSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0FycmF5LmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVtrZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hBcnJheS5sZW5ndGggPT09IHByb3BlcnRpZXNMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpdGVtW3Byb3BlcnR5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgaXRlbXMgaW4gdGhlIGNvbGxlY3Rpb24gZm9yIHdoaWNoIHRoZSBwYXNzZWQgZnVuY3Rpb24gcmV0dXJucyB0cnVlXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIHJ1biBmb3IgZWFjaCBpdGVtIGluc2lkZSB0aGUgc3RhcnQtZW5kIHJhbmdlLiBSZXR1cm4gdHJ1ZSBmb3IgYSBtYXRjaC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZm4uaXRlbSBUaGUgY3VycmVudCBjb2xsZWN0aW9uIGl0ZW1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlPXRoaXNdIFRoZSBzY29wZSBpbiB3aGljaCB0aGUgcGFzc2VkIGZ1bmN0aW9uIGdldHMgZXhlY3V0ZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3N0YXJ0PTBdIFRoZSBzdGFydCBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbZW5kPXRoaXMuZ2V0Q291bnQoKV0gVGhlIGVuZCBpbmRleCAodXAgdG8sIGxhc3QgdmFsdWUgZXhjbHVkZWQpXG4gICAgICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGFuIGVtcHR5IEFycmF5IGluIGNhc2Ugbm8gaXRlbXMgYXJlIGZvdW5kXG4gICAgICovXG4gICAgZmluZEJ5KGZuLCBzY29wZSwgc3RhcnQsIGVuZCkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgaXRlbXMgPSBbXSxcbiAgICAgICAgICAgIGkgICAgID0gc3RhcnQgfHwgMCxcbiAgICAgICAgICAgIGxlbiAgID0gZW5kICAgfHwgbWUuZ2V0Q291bnQoKTtcblxuICAgICAgICBzY29wZSA9IHNjb3BlIHx8IG1lO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChmbi5jYWxsKHNjb3BlLCBtZS5pdGVtc1tpXSkpIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKG1lLml0ZW1zW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBpdGVtIGluc2lkZSB0aGUgY29sbGVjdGlvblxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZmlyc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtc1swXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBvYmplY3QgYXNzb2NpYXRlZCB0byB0aGUga2V5LCBvciB1bmRlZmluZWQgaWYgdGhlcmUgaXMgbm9uZS5cbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHJldHVybnMge09iamVjdHx1bmRlZmluZWR9XG4gICAgICovXG4gICAgZ2V0KGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0KGtleSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaXRlbSBmb3IgYSBnaXZlbiBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGdldEF0KGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtc1tpbmRleF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGVuZ3RoIG9mIHRoZSBpbnRlcm5hbCBpdGVtcyBhcnJheVxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0Q291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldENvdW50TXV0YXRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpc1tjb3VudE11dGF0aW9uc107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZmlyc3QgbWF0Y2hpbmcgZmlsdGVyIGZvciB0aGUgZ2l2ZW4gcHJvcGVydHkgY29uZmlnXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gICAgICogQHJldHVybnMge05lby5jb2xsZWN0aW9uLkZpbHRlcnxudWxsfVxuICAgICAqL1xuICAgIGdldEZpbHRlcihwcm9wZXJ0eSkge1xuICAgICAgICBsZXQgZmlsdGVycyA9IHRoaXMuZmlsdGVycyB8fCBbXSxcbiAgICAgICAgICAgIGkgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICA9IGZpbHRlcnMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXJzW2ldLnByb3BlcnR5ID09PSBwcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXJzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUga2V5IGZvciBhIGdpdmVuIGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge051bWJlcnxTdHJpbmd8dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGdldEtleUF0KGluZGV4KSB7XG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5faXRlbXNbaW5kZXhdO1xuICAgICAgICByZXR1cm4gaXRlbSAmJiBpdGVtW3RoaXMua2V5UHJvcGVydHldO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzaGFsbG93IGNvcHkgb2YgYSBwb3J0aW9uIG9mIHRoZSBpdGVtcyBhcnJheVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnRdIFplcm8tYmFzZWQgaW5kZXggYXQgd2hpY2ggdG8gYmVnaW4gZXh0cmFjdGlvbi5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2VuZF0gWmVyby1iYXNlZCBpbmRleCBiZWZvcmUgd2hpY2ggdG8gZW5kIGV4dHJhY3Rpb24gKGV4dHJhY3RzIHVwIHRvIGJ1dCBub3QgaW5jbHVkaW5nIGVuZCkuXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqIEBsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L3NsaWNlXG4gICAgICovXG4gICAgZ2V0UmFuZ2Uoc3RhcnQsIGVuZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgU291cmNlIENvbGxlY3Rpb24gaW4gY2FzZSB0aGUgc291cmNlQ29sbGVjdGlvbklkIGNvbmZpZyB3YXMgc2V0XG4gICAgICogQHJldHVybnMge05lby5jb2xsZWN0aW9uLkJhc2V8dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGdldFNvdXJjZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlSWQgJiYgTmVvLmdldCh0aGlzLnNvdXJjZUlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIFJldHVybnMgYSBib29sZWFuIGFzc2VydGluZyB3aGV0aGVyIGEgdmFsdWUgaGFzIGJlZW4gYXNzb2NpYXRlZCB0byB0aGUga2V5IGluIHRoZSBDb2xsZWN0aW9uIG9yIG5vdFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30ga2V5XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgaGFzKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXAuaGFzKGtleSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGJvb2xlYW4gYXNzZXJ0aW5nIHdoZXRoZXIgYW4gaXRlbSBleGlzdHMgaW4gdGhlIENvbGxlY3Rpb24gb3Igbm90XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBoYXNJdGVtKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLmhhcyhpdGVtW3RoaXMua2V5UHJvcGVydHldKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBmb3IgYSBnaXZlbiBrZXkgb3IgaXRlbVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xPYmplY3R9IGtleVxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IGluZGV4ICgtMSBpbiBjYXNlIG5vIG1hdGNoIGlzIGZvdW5kKVxuICAgICAqL1xuICAgIGluZGV4T2Yoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5pbmRleE9mKFV0aWwuaXNPYmplY3Qoa2V5KSA/IGtleSA6IHRoaXMubWFwLmdldChrZXkpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBmb3IgYSBnaXZlbiBpdGVtXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSBpbmRleCAoLTEgaW4gY2FzZSBubyBtYXRjaCBpcyBmb3VuZClcbiAgICAgKi9cbiAgICBpbmRleE9mSXRlbShpdGVtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGluZGV4IGZvciBhIGdpdmVuIGtleVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30ga2V5XG4gICAgICogQHJldHVybnMge051bWJlcn0gaW5kZXggKC0xIGluIGNhc2Ugbm8gbWF0Y2ggaXMgZm91bmQpXG4gICAgICovXG4gICAgaW5kZXhPZktleShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmluZGV4T2YodGhpcy5tYXAuZ2V0KGtleSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydHMgYW4gaXRlbSBvciBhbiBhcnJheSBvZiBpdGVtcyBhdCB0aGUgc3BlY2lmaWVkIGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgY29sbGVjdGlvbiBjb3VudFxuICAgICAqL1xuICAgIGluc2VydChpbmRleCwgaXRlbSkge1xuICAgICAgICB0aGlzLnNwbGljZShpbmRleCwgMCwgaXRlbSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBjb2xsZWN0aW9uIGlzIGZpbHRlcmVkXG4gICAgICovXG4gICAgaXNGaWx0ZXJlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbaXNGaWx0ZXJlZF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBpc0ZpbHRlcmVkSXRlbShpdGVtKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGZpbHRlcnMgICAgPSBtZS5fZmlsdGVycyxcbiAgICAgICAgICAgIGkgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgICA9IGZpbHRlcnMubGVuZ3RoLFxuICAgICAgICAgICAgaXNGaWx0ZXJlZCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXJzW2ldLmlzRmlsdGVyZWQoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBpc0ZpbHRlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpc0ZpbHRlcmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgY29sbGVjdGlvbiBpcyBzb3J0ZWRcbiAgICAgKi9cbiAgICBpc1NvcnRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbaXNTb3J0ZWRdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxhc3QgaXRlbSBpbnNpZGUgdGhlIGNvbGxlY3Rpb25cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGxhc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtc1t0aGlzLmdldENvdW50KCkgLTFdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25GaWx0ZXJDaGFuZ2Uob3B0cykge1xuICAgICAgICB0aGlzLmZpbHRlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25NdXRhdGUob3B0cykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChvcHRzLnByZXZlbnRCdWJibGVVcCkge1xuICAgICAgICAgICAgbWUucHJldmVudEJ1YmJsZVVwID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnNwbGljZShudWxsLCBvcHRzLnJlbW92ZWRJdGVtcywgb3B0cy5hZGRlZEl0ZW1zKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygnb25NdXRhdGUnLCBtZS5nZXRDb3VudCgpLCBtZS5pZCwgb3B0cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvblNvcnRlckNoYW5nZShvcHRzKSB7XG4gICAgICAgIHRoaXMuYXBwbHlTb3J0ZXJDb25maWdzKCk7XG4gICAgICAgIHRoaXMuZG9Tb3J0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgbGFzdCBlbGVtZW50IGZyb20gdGhlIGl0ZW1zIGFycmF5IGFuZCByZXR1cm5zIHRoaXMgZWxlbWVudC5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVtb3ZlZCBlbGVtZW50IGZyb20gdGhlIGNvbGxlY3Rpb247IHVuZGVmaW5lZCBpZiB0aGUgY29sbGVjdGlvbiBpcyBlbXB0eS5cbiAgICAgKi9cbiAgICBwb3AoKSB7XG4gICAgICAgIGxldCBtdXRhdGlvbiA9IHRoaXMuc3BsaWNlKHRoaXMuZ2V0Q291bnQoKSAtMSwgMSk7XG4gICAgICAgIHJldHVybiBtdXRhdGlvbi5yZW1vdmVkSXRlbXNbMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBvbmUgb3IgbW9yZSBpdGVtcyB0byB0aGUgZW5kIG9mIHRoZSBjb2xsZWN0aW9uIGFuZCByZXR1cm5zIHRoZSBuZXcgaXRlbXMgY291bnRcbiAgICAgKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gaXRlbSBUaGUgaXRlbShzKSB0byBhZGRcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgY29sbGVjdGlvbiBjb3VudFxuICAgICAqL1xuICAgIHB1c2goaXRlbSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGQoaXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGdpdmVuIGtleSwgaXRlbSBvciBBcnJheSBjb250YWluaW5nIGtleXN8aXRlbXNcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd8T2JqZWN0fEFycmF5fSBrZXlcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgY29sbGVjdGlvbiBjb3VudFxuICAgICAqL1xuICAgIHJlbW92ZShrZXkpIHtcbiAgICAgICAgdGhpcy5zcGxpY2UoMCwgQXJyYXkuaXNBcnJheShrZXkpID8ga2V5IDogW2tleV0pO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIGl0ZW0gYXQgdGhlIGdpdmVuIGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge051bWJlcn0gdGhlIGNvbGxlY3Rpb24gY291bnRcbiAgICAgKi9cbiAgICByZW1vdmVBdChpbmRleCkge1xuICAgICAgICB0aGlzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV2ZXJzZXMgdGhlIGl0ZW1zIGFycmF5IGluIHBsYWNlLlxuICAgICAqIEludGVuZGVkIGZvciBjb2xsZWN0aW9ucyB3aXRob3V0IHNvcnRlcnMuXG4gICAgICogQHJldHVybnMge0FycmF5fSBpdGVtc1xuICAgICAqL1xuICAgIHJldmVyc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5yZXZlcnNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgZmlyc3QgZWxlbWVudCBmcm9tIHRoZSBpdGVtcyBhcnJheSBhbmQgcmV0dXJucyB0aGlzIGVsZW1lbnQuXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIHJlbW92ZWQgZWxlbWVudCBmcm9tIHRoZSBjb2xsZWN0aW9uOyB1bmRlZmluZWQgaWYgdGhlIGNvbGxlY3Rpb24gaXMgZW1wdHkuXG4gICAgICovXG4gICAgc2hpZnQoKSB7XG4gICAgICAgIGxldCBtdXRhdGlvbiA9IHRoaXMuc3BsaWNlKDAsIDEpO1xuICAgICAgICByZXR1cm4gbXV0YXRpb24uYWRkZWRJdGVtc1swXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIEZ1bmN0aW9uIHRvIHRlc3QgZm9yIGVhY2ggaXRlbSwgdGFraW5nIHRocmVlIHBhcmFtZXRlcnM6XG4gICAgICogQHBhcmFtIHtPYmplY3R9ICAgY2FsbGJhY2suaXRlbSBUaGUgY3VycmVudCBjb2xsZWN0aW9uIGl0ZW0gYmVpbmcgcHJvY2Vzc2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9ICBbY2FsbGJhY2suaW5kZXhdIFRoZSBpbmRleCBvZiB0aGUgY3VycmVudCBpdGVtIGJlaW5nIHByb2Nlc3NlZFxuICAgICAqIEBwYXJhbSB7QXJyYXl9ICAgW2NhbGxiYWNrLml0ZW1zXSBUaGUgaXRlbXMgYXJyYXkgb2YgdGhlIGNvbGxlY3Rpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGVdIFZhbHVlIHRvIHVzZSBhcyBcInRoaXNcIiB3aGVuIGV4ZWN1dGluZyB0aGUgY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gcmV0dXJucyBhIHRydXRoeSB2YWx1ZSBmb3IgYW55IGNvbGxlY3Rpb24gaXRlbSwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgICovXG4gICAgc29tZSguLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5zb21lKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgaXRlbXMgZnJvbSBhbmQvb3IgYWRkcyBpdGVtcyB0byB0aGlzIGNvbGxlY3Rpb25cbiAgICAgKiBJZiB0aGUgdG9SZW1vdmVBcnJheSBpcyB1c2VkLCB0aGVuIHRoZSBpbmRleCBpcyBub3QgdXNlZCBmb3IgcmVtb3ZpbmcsIHRoZSBlbnRyaWVzIGFyZSBmb3VuZCBieSBrZXkgYW5kIHJlbW92ZWQgZnJvbSB3aGVyZSB0aGV5IGFyZS5cbiAgICAgKiBJZiBpbmRleCBpcyBub3QgcGFzc2VkLCB0b0FkZEFycmF5IGlzIGFwcGVuZGVkIHRvIHRoZSBDb2xsZWN0aW9uLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfG51bGx9IGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ8QXJyYXl9IFtyZW1vdmVDb3VudE9yVG9SZW1vdmVBcnJheV1cbiAgICAgKiBAcGFyYW0ge0FycmF5fCBPYmplY3R9IFt0b0FkZEFycmF5XVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBhZGRlZEl0ZW1zICYgcmVtb3ZlZEl0ZW1zIGFycmF5c1xuICAgICAqL1xuICAgIHNwbGljZShpbmRleCwgcmVtb3ZlQ291bnRPclRvUmVtb3ZlQXJyYXksIHRvQWRkQXJyYXkpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBzb3VyY2UgICAgICAgICAgICAgPSBtZS5nZXRTb3VyY2UoKSxcbiAgICAgICAgICAgIGFkZGVkSXRlbXMgICAgICAgICA9IFtdLFxuICAgICAgICAgICAgaXRlbXMgICAgICAgICAgICAgID0gbWUuX2l0ZW1zLFxuICAgICAgICAgICAga2V5UHJvcGVydHkgICAgICAgID0gbWUua2V5UHJvcGVydHksXG4gICAgICAgICAgICBtYXAgICAgICAgICAgICAgICAgPSBtZS5tYXAsXG4gICAgICAgICAgICByZW1vdmVkSXRlbXMgICAgICAgPSBbXSxcbiAgICAgICAgICAgIHJlbW92ZUNvdW50QXRJbmRleCA9IFV0aWwuaXNOdW1iZXIocmVtb3ZlQ291bnRPclRvUmVtb3ZlQXJyYXkpID8gcmVtb3ZlQ291bnRPclRvUmVtb3ZlQXJyYXkgOiBudWxsLFxuICAgICAgICAgICAgdG9SZW1vdmVBcnJheSAgICAgID0gQXJyYXkuaXNBcnJheShyZW1vdmVDb3VudE9yVG9SZW1vdmVBcnJheSkgPyByZW1vdmVDb3VudE9yVG9SZW1vdmVBcnJheSA6IG51bGwsXG4gICAgICAgICAgICBpLCBpdGVtLCBrZXksIGxlbiwgdG9BZGRNYXA7XG5cbiAgICAgICAgaWYgKCFpbmRleCAmJiByZW1vdmVDb3VudEF0SW5kZXgpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihtZS5pZCArICc6IElmIGluZGV4IGlzIG5vdCBwYXNzZWQsIHJlbW92ZUNvdW50QXRJbmRleCBjYW5ub3QgYmUgdXNlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9BZGRBcnJheSA9IHRvQWRkQXJyYXkgJiYgIUFycmF5LmlzQXJyYXkodG9BZGRBcnJheSkgPyBbdG9BZGRBcnJheV0gOiB0b0FkZEFycmF5O1xuXG4gICAgICAgIGlmICh0b1JlbW92ZUFycmF5ICYmIChsZW4gPSB0b1JlbW92ZUFycmF5Lmxlbmd0aCkgPiAwKSB7XG4gICAgICAgICAgICBpZiAodG9BZGRBcnJheSAmJiB0b0FkZEFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0b0FkZE1hcCA9IHRvQWRkQXJyYXkubWFwKGUgPT4gZVtrZXlQcm9wZXJ0eV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGk9MDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IHRvUmVtb3ZlQXJyYXlbaV07XG4gICAgICAgICAgICAgICAga2V5ICA9IFV0aWwuaXNPYmplY3QoaXRlbSkgPyBpdGVtW2tleVByb3BlcnR5XSA6IGl0ZW07XG5cbiAgICAgICAgICAgICAgICBpZiAobWFwLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdG9BZGRNYXAgfHwgKHRvQWRkTWFwICYmIHRvQWRkTWFwLmluZGV4T2Yoa2V5KSA8IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVkSXRlbXMucHVzaChpdGVtcy5zcGxpY2UobWUuaW5kZXhPZktleShrZXkpLCAxKVswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVtb3ZlQ291bnRBdEluZGV4ICYmIHJlbW92ZUNvdW50QXRJbmRleCA+IDApIHtcbiAgICAgICAgICAgIHJlbW92ZWRJdGVtcy5wdXNoKC4uLml0ZW1zLnNwbGljZShpbmRleCwgcmVtb3ZlQ291bnRBdEluZGV4KSk7XG4gICAgICAgICAgICByZW1vdmVkSXRlbXMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgICAgICBtYXAuZGVsZXRlKGVba2V5UHJvcGVydHldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvQWRkQXJyYXkgJiYgKGxlbiA9IHRvQWRkQXJyYXkubGVuZ3RoKSA+IDApIHtcbiAgICAgICAgICAgIGZvciAoaT0wOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gdG9BZGRBcnJheVtpXTtcbiAgICAgICAgICAgICAgICBrZXkgID0gVXRpbC5pc09iamVjdChpdGVtKSA/IGl0ZW1ba2V5UHJvcGVydHldIDogaXRlbTtcblxuICAgICAgICAgICAgICAgIGlmICghbWFwLmhhcyhrZXkpICYmICFtZS5pc0ZpbHRlcmVkSXRlbShpdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIG1hcC5zZXQoa2V5LCBpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhZGRlZEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5zcGxpY2UoVXRpbC5pc051bWJlcihpbmRleCkgPyBpbmRleCA6IGl0ZW1zLmxlbmd0aCwgMCwgLi4uYWRkZWRJdGVtcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAobWUuYXV0b1NvcnQgJiYgbWUuX3NvcnRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBtZS5kb1NvcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoIXNvdXJjZS5nZXRTb3VyY2UoKSkge1xuICAgICAgICAgICAgICAgIHNvdXJjZS5wcmV2ZW50QnViYmxlVXAgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIW1lLnByZXZlbnRCdWJibGVVcCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzb3VyY2Ugc3BsaWNlJywgc291cmNlLmlkLCAnYWRkZWQ6JywgLi4udG9BZGRBcnJheSwgJ3JlbW92ZWQ6JywgLi4ucmVtb3ZlZEl0ZW1zKTtcbiAgICAgICAgICAgICAgICBtZS5zdGFydFVwZGF0ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICBzb3VyY2Uuc3BsaWNlKG51bGwsIHRvUmVtb3ZlQXJyYXkgfHwgcmVtb3ZlZEl0ZW1zLCB0b0FkZEFycmF5KTtcbiAgICAgICAgICAgICAgICBtZS5lbmRVcGRhdGUodHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGV0ZSBzb3VyY2UucHJldmVudEJ1YmJsZVVwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFkZGVkSXRlbXMubGVuZ3RoID4gMCB8fCByZW1vdmVkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbWVbY291bnRNdXRhdGlvbnNdKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZihtZVt1cGRhdGluZ0luZGV4XSA9PT0gMCkge1xuICAgICAgICAgICAgbWUuZmlyZSgnbXV0YXRlJywge1xuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXMgICAgIDogdG9BZGRBcnJheSxcbiAgICAgICAgICAgICAgICBwcmV2ZW50QnViYmxlVXA6IG1lLnByZXZlbnRCdWJibGVVcCxcbiAgICAgICAgICAgICAgICByZW1vdmVkSXRlbXMgICA6IHRvUmVtb3ZlQXJyYXkgfHwgcmVtb3ZlZEl0ZW1zXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2UgaWYgKCFtZVtzaWxlbnRVcGRhdGVNb2RlXSkge1xuICAgICAgICAgICAgbWUuY2FjaGVVcGRhdGUoe1xuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXMgIDogYWRkZWRJdGVtcyxcbiAgICAgICAgICAgICAgICByZW1vdmVkSXRlbXM6IHJlbW92ZWRJdGVtc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWVbdXBkYXRpbmdJbmRleF0gPT09IDApIHtcbiAgICAgICAgICAgIGRlbGV0ZSBtZS5wcmV2ZW50QnViYmxlVXA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkZWRJdGVtcyAgOiBhZGRlZEl0ZW1zLFxuICAgICAgICAgICAgcmVtb3ZlZEl0ZW1zOiByZW1vdmVkSXRlbXNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmV2ZW50cyB0aGUgY29sbGVjdGlvbiBmcm9tIGZpcmluZyBldmVudHMgdW50aWwgZW5kVXBkYXRlIGdldHMgY2FsbGVkLlxuICAgICAqIElmIHlvdSBzdGFydCBhbiB1cGRhdGUgdXNpbmcgdGhlIHN0YXJ0U2lsZW50VXBkYXRlTW9kZSBwYXJhbSxcbiAgICAgKiB0aGUgbXV0YXRpb24gZXZlbnQgd2lsbCBub3QgZmlyZSBhZnRlciB1c2luZyBlbmRVcGRhdGUoKVxuICAgICAqICh5b3UgbXVzdCB1c2UgdGhlIGVuZFNpbGVudFVwZGF0ZU1vZGUgcGFyYW0gZm9yIHRoZSBlbmRVcGRhdGUgY2FsbCBpbiBjYXNlIHlvdSB1c2VkXG4gICAgICogc3RhcnRTaWxlbnRVcGRhdGVNb2RlIGhlcmUpXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbc3RhcnRTaWxlbnRVcGRhdGVNb2RlXVxuICAgICAqIEBzZWUge0BsaW5rIE5lby5jb2xsZWN0aW9uLkJhc2UjZW5kVXBkYXRlIGVuZFVwZGF0ZX1cbiAgICAgKi9cbiAgICBzdGFydFVwZGF0ZShzdGFydFNpbGVudFVwZGF0ZU1vZGUpIHtcbiAgICAgICAgaWYgKHN0YXJ0U2lsZW50VXBkYXRlTW9kZSkge1xuICAgICAgICAgICAgdGhpc1tzaWxlbnRVcGRhdGVNb2RlXSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzW3VwZGF0aW5nSW5kZXhdKys7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBvbmUgb3IgbW9yZSBlbGVtZW50cyB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSBjb2xsZWN0aW9uIGFuZCByZXR1cm5zIHRoZSBuZXcgaXRlbXMgY291bnRcbiAgICAgKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gaXRlbSBUaGUgaXRlbShzKSB0byBhZGRcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgY29sbGVjdGlvbiBjb3VudFxuICAgICAqL1xuICAgIHVuc2hpZnQoaXRlbSkge1xuICAgICAgICB0aGlzLnNwbGljZSgwLCAwLCBpdGVtKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q291bnQoKTtcbiAgICB9XG59XG5cbi8qKlxuICogVGhlIG11dGF0ZSBldmVudCBmaXJlcyBhZnRlciBldmVyeSBzcGxpY2UgY2FsbCAoaW52b2tlZCBieSBhbGwgbWV0aG9kcyB3aGljaCBjaGFuZ2UgdGhlIGNvbnRlbnQgb2YgdGhlIGl0ZW1zIGFycmF5KS5cbiAqIEBldmVudCBtdXRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0W119IGFkZGVkSXRlbXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJldmVudEJ1YmJsZVVwIHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0W119IHJlbW92ZWRJdGVtc1xuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCYXNlKTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzZTsiLCJpbXBvcnQgQmFzZSAgICAgICBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCBPYnNlcnZhYmxlIGZyb20gJy4uL2NvcmUvT2JzZXJ2YWJsZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29sbGVjdGlvbi5GaWx0ZXJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgRmlsdGVyIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZXMgdGhlIGNvcmUvT2JzZXJ2YWJsZS5tanMgbWl4aW5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT10cnVlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXMgZm9yIHRoZSBvcGVyYXRvciBjb25maWc6PGJyPlxuICAgICAgICAgKiBbJz09JywgJz09PScsICchPScsICchPT0nLCAnPCcsICc8PScsICc+JywgJz49JywgJ2V4Y2x1ZGVkJywgJ2luY2x1ZGVkJywgJ2lzRGVmaW5lZCcsICdpc1VuZGVmaW5lZCcsICdsaWtlJ11cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IG9wZXJhdG9yc1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIG9wZXJhdG9yczogWyc9PScsICc9PT0nLCAnIT0nLCAnIT09JywgJzwnLCAnPD0nLCAnPicsICc+PScsICdleGNsdWRlZCcsICdpbmNsdWRlZCcsICdpc0RlZmluZWQnLCAnaXNVbmRlZmluZWQnLCAnbGlrZSddXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29sbGVjdGlvbi5GaWx0ZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb2xsZWN0aW9uLkZpbHRlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdmaWx0ZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnZmlsdGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHRpbmcgZGlzYWJsZWQgdG8gdHJ1ZSB3aWxsIGV4Y2x1ZGUgdGhpcyBmaWx0ZXIgZnJvbSB0aGUgY29sbGVjdGlvbiBmaWx0ZXJpbmcgbG9naWNcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gZGlzYWJsZWRfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBkaXNhYmxlZF86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvdmlkZSBhIGN1c3RvbSBmaWx0ZXJpbmcgZnVuY3Rpb24sIGhhcyBhIGhpZ2hlciBwcmlvcml0eSB0aGFuIHByb3BlcnR5LCBvcGVyYXRvciAmIHZhbHVlXG4gICAgICAgICAqIEBtZW1iZXIge0Z1bmN0aW9ufG51bGx9IGZpbHRlckJ5Xz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBmaWx0ZXJCeV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIG1lYW5zIG5vdCBmaWx0ZXJpbmcgb3V0IGl0ZW1zIGluIGNhc2UgdGhlIHZhbHVlIGlzICcnLCBudWxsLCBbXSBvciB7fVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBpbmNsdWRlRW1wdHlWYWx1ZXM9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgaW5jbHVkZUVtcHR5VmFsdWVzOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoaXMgZmxhZyB0byB0cnVlIGJlZm9yZSBzdGFydGluZyBidWxrIHVwZGF0ZXMgKGUuZy4gY2hhbmdpbmcgcHJvcGVydHkgJiB2YWx1ZSlcbiAgICAgICAgICogdG8gcHJldmVudCBtdWx0aXBsZSBjaGFuZ2UgZXZlbnRzXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGlzVXBkYXRpbmdfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBpc1VwZGF0aW5nXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgb3duZXIgdXRpbC5Db2xsZWN0aW9uIG5lZWRzIHRvIGFwcGx5IGFuIG9uQ2hhbmdlIGxpc3RlbmVyIG9uY2VcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbGlzdGVuZXJBcHBsaWVkPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGxpc3RlbmVyQXBwbGllZDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgb3BlcmF0b3IgdG8gZmlsdGVyIGJ5ICh1c2UgdGhlIGNvbWJpbmF0aW9uIG9mIHByb3BlcnR5LCBvcGVyYXRvciAmIHZhbHVlKVxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXM6XG4gICAgICAgICAqXG4gICAgICAgICAqID09IChub3QgcmVjb21tZW5kZWQpXG4gICAgICAgICAqID09PVxuICAgICAgICAgKiAhPSAobm90IHJlY29tbWVuZGVkKVxuICAgICAgICAgKiAhPT1cbiAgICAgICAgICogPFxuICAgICAgICAgKiA+PVxuICAgICAgICAgKiA+XG4gICAgICAgICAqID49XG4gICAgICAgICAqIGxpa2UgKGNvbGxlY3Rpb25WYWx1ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZmlsdGVyVmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMSlcbiAgICAgICAgICogaW5jbHVkZWQgKGV4cGVjdHMgdmFsdWUgdG8gYmUgYW4gYXJyYXkpXG4gICAgICAgICAqIGV4Y2x1ZGVkIChleHBlY3RzIHZhbHVlIHRvIGJlIGFuIGFycmF5KVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG9wZXJhdG9yPSc9PT0nXG4gICAgICAgICAqL1xuICAgICAgICBvcGVyYXRvcl86ICc9PT0nLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHByb3BlcnR5IHRvIGZpbHRlciBieSAodXNlIHRoZSBjb21iaW5hdGlvbiBvZiBwcm9wZXJ0eSwgb3BlcmF0b3IgJiB2YWx1ZSlcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBwcm9wZXJ0eV89J2lkJ1xuICAgICAgICAgKi9cbiAgICAgICAgcHJvcGVydHlfOiAnaWQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHNjb3BlIHRvIHVzZSBmb3IgdGhlIGZpbHRlckJ5IG1ldGhvZCwgaW4gY2FzZSBpdCBpcyBwcm92aWRlZC4gRGVmYXVsdHMgdG8gdGhpcyBpbnN0YW5jZS5cbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IHNjb3BlPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHNjb3BlOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHZhbHVlIHRvIGZpbHRlciBieSAodXNlIHRoZSBjb21iaW5hdGlvbiBvZiBwcm9wZXJ0eSwgb3BlcmF0b3IgJiB2YWx1ZSlcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB2YWx1ZV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWVfOiBudWxsXG4gICAgfX1cblxuICAgIGFmdGVyU2V0RGlzYWJsZWQoLi4uYXJncykge1xuICAgICAgICB0aGlzLmZpcmVDaGFuZ2VFdmVudCguLi5hcmdzKTtcbiAgICB9XG5cbiAgICBhZnRlclNldEZpbHRlckJ5KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICAvLyB0b2RvXG4gICAgfVxuXG4gICAgYWZ0ZXJTZXRJc1VwZGF0aW5nKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmVDaGFuZ2VFdmVudCh2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWZ0ZXJTZXRPcGVyYXRvciguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuZmlyZUNoYW5nZUV2ZW50KC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIGFmdGVyU2V0UHJvcGVydHkoLi4uYXJncykge1xuICAgICAgICB0aGlzLmZpcmVDaGFuZ2VFdmVudCguLi5hcmdzKTtcbiAgICB9XG5cbiAgICBhZnRlclNldFZhbHVlKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5maXJlQ2hhbmdlRXZlbnQoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgYmVmb3JlU2V0RmlsdGVyQnkodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIE5lby5sb2dFcnJvcignZmlsdGVyQnkgaGFzIHRvIGJlIGEgZnVuY3Rpb24nLCB0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiBvbGRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBvcGVyYXRvciBjb25maWcgZ2V0cyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0T3BlcmF0b3IodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJlZm9yZVNldEVudW1WYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICdvcGVyYXRvcicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHBhcmFtIG9sZFZhbHVlXG4gICAgICovXG4gICAgZmlyZUNoYW5nZUV2ZW50KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIG1lLmlzVXBkYXRpbmcgIT09IHRydWUpIHtcbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogbWUub3BlcmF0b3IsXG4gICAgICAgICAgICAgICAgcHJvcGVydHk6IG1lLnByb3BlcnR5LFxuICAgICAgICAgICAgICAgIHZhbHVlICAgOiBtZS52YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgYSBjb2xsZWN0aW9uIGl0ZW0gbWF0Y2hlcyB0aGlzIGZpbHRlclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIFRoZSBjdXJyZW50IGNvbGxlY3Rpb24gaXRlbVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGZpbHRlcmVkSXRlbXMgSWYgdGhlIGNvbGxlY3Rpb24gZmlsdGVyTW9kZSBpcyBub3QgcHJpbWl0aXZlIGNvbnRhaW5zIHRoZSBpdGVtcyB3aGljaCBwYXNzZWRcbiAgICAgKiB0aGUgcHJldmlvdXMgZmlsdGVycywgb3RoZXJ3aXNlIGFsbCBjb2xsZWN0aW9uIGl0ZW1zXG4gICAgICogQHBhcmFtIHtBcnJheX0gYWxsSXRlbXMgYWxsIGNvbGxlY3Rpb24gaXRlbXNcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0ZpbHRlcmVkKGl0ZW0sIGZpbHRlcmVkSXRlbXMsIGFsbEl0ZW1zKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBmaWx0ZXJWYWx1ZSwgcmVjb3JkVmFsdWU7XG5cbiAgICAgICAgaWYgKG1lLl9kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lLmluY2x1ZGVFbXB0eVZhbHVlcyAmJiAobWUuX3ZhbHVlID09PSBudWxsIHx8IE5lby5pc0VtcHR5KG1lLl92YWx1ZSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWUuX2ZpbHRlckJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gbWUuZmlsdGVyQnkuY2FsbChtZS5zY29wZSB8fCBtZSwgaXRlbSwgZmlsdGVyZWRJdGVtcywgYWxsSXRlbXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmlsdGVyVmFsdWUgPSBtZS5fdmFsdWU7XG4gICAgICAgICAgICByZWNvcmRWYWx1ZSA9IGl0ZW1bbWUuX3Byb3BlcnR5XTtcblxuICAgICAgICAgICAgaWYgKGZpbHRlclZhbHVlIGluc3RhbmNlb2YgRGF0ZSAmJiByZWNvcmRWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJWYWx1ZSA9IGZpbHRlclZhbHVlLnZhbHVlT2YoKTtcbiAgICAgICAgICAgICAgICByZWNvcmRWYWx1ZSA9IHJlY29yZFZhbHVlLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuICFGaWx0ZXJbbWUuX29wZXJhdG9yXShyZWNvcmRWYWx1ZSwgZmlsdGVyVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIFsnPT0nXSAoYSwgYikge3JldHVybiBhID09IGI7fVxuICAgIHN0YXRpYyBbJz09PSddKGEsIGIpIHtyZXR1cm4gYSA9PT0gYjt9XG4gICAgc3RhdGljIFsnIT0nXSAoYSwgYikge3JldHVybiBhICE9IGI7fVxuICAgIHN0YXRpYyBbJyE9PSddKGEsIGIpIHtyZXR1cm4gYSAhPT0gYjt9XG4gICAgc3RhdGljIFsnPCddICAoYSwgYikge3JldHVybiBhIDwgYjt9XG4gICAgc3RhdGljIFsnPD0nXSAoYSwgYikge3JldHVybiBhIDw9IGI7fVxuICAgIHN0YXRpYyBbJz4nXSAgKGEsIGIpIHtyZXR1cm4gYSA+IGI7fVxuICAgIHN0YXRpYyBbJz49J10gKGEsIGIpIHtyZXR1cm4gYSA+PSBiO31cblxuICAgIHN0YXRpYyBbJ2V4Y2x1ZGVkJ10oYSwgYikge1xuICAgICAgICByZXR1cm4gYi5pbmRleE9mKGEpIDwgMDtcbiAgICB9XG5cbiAgICBzdGF0aWMgWydpbmNsdWRlZCddKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGIuaW5kZXhPZihhKSA+IC0xO1xuICAgIH1cblxuICAgIHN0YXRpYyBbJ2lzRGVmaW5lZCddKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEgIT09IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgWydpc1VuZGVmaW5lZCddKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEgPT09IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgWydsaWtlJ10oYSwgYikge1xuICAgICAgICByZXR1cm4gYS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGIudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhGaWx0ZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7IiwiaW1wb3J0IEJhc2UgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICcuLi9jb3JlL09ic2VydmFibGUubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvbGxlY3Rpb24uU29ydGVyXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIFNvcnRlciBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlL09ic2VydmFibGUubWpzIG1peGluXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9ic2VydmFibGU9dHJ1ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBvYnNlcnZhYmxlOiB0cnVlXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29sbGVjdGlvbi5Tb3J0ZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb2xsZWN0aW9uLlNvcnRlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdzb3J0ZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnc29ydGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludGVybmFsIGNvbmZpZyB3aGljaCBtYXBwcyB0aGUgZGlyZWN0aW9uIEFTQyB0byAxLCAtMSBvdGhlcndpc2VcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBkaXJlY3Rpb25NdWx0aXBsaWVyPTFcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgZGlyZWN0aW9uTXVsdGlwbGllcjogMSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBzb3J0IGRpcmVjdGlvbiB3aGVuIHVzaW5nIGEgcHJvcGVydHkuXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZGlyZWN0aW9uXz0nQVNDJ1xuICAgICAgICAgKi9cbiAgICAgICAgZGlyZWN0aW9uXzogJ0FTQycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgb3duZXIgdXRpbC5Db2xsZWN0aW9uIG5lZWRzIHRvIGFwcGx5IGFuIG9uQ2hhbmdlIGxpc3RlbmVyIG9uY2VcbiAgICAgICAgICogQG1lbWJlciB7Ym9vbGVhbn0gbGlzdGVuZXJBcHBsaWVkPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGxpc3RlbmVyQXBwbGllZDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcHJvcGVydHkgdG8gc29ydCBieS5cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBwcm9wZXJ0eV89J2lkJ1xuICAgICAgICAgKi9cbiAgICAgICAgcHJvcGVydHlfOiAnaWQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvdmlkZSBhIGN1c3RvbSBzb3J0aW5nIGZ1bmN0aW9uLCBoYXMgYSBoaWdoZXIgcHJpb3JpdHkgdGhhbiBwcm9wZXJ0eSAmIGRpcmVjdGlvblxuICAgICAgICAgKiBAbWVtYmVyIHtGdW5jdGlvbnxudWxsfSBzb3J0Qnk9bnVsbFxuICAgICAgICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0NvbGxhdG9yXG4gICAgICAgICAqL1xuICAgICAgICBzb3J0Qnk6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHRvIHVzZSB0aGUgdHJhbnNmb3JtVmFsdWUgbWV0aG9kIGZvciBlYWNoIGl0ZW0gKHRoZSBtZXRob2QgY2FuIGdldCBvdmVycmlkZGVuKVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSB1c2VUcmFuc2Zvcm1WYWx1ZT10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHVzZVRyYW5zZm9ybVZhbHVlOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICovXG4gICAgYWZ0ZXJTZXREaXJlY3Rpb24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuZGlyZWN0aW9uTXVsdGlwbGllciA9IHZhbHVlID09PSAnQVNDJyA/IDEgOiAtMTtcblxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IG1lLmRpcmVjdGlvbixcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6IG1lLnByb3BlcnR5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICovXG4gICAgYWZ0ZXJTZXRQcm9wZXJ0eSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IG1lLmRpcmVjdGlvbixcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6IG1lLnByb3BlcnR5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgc29ydGVyIGZ1bmN0aW9uIHdoaWNoIGdldHMgdXNlZCBieSBjb2xsZWN0aW9ucyBpbiBjYXNlIGF0IGxlYXN0IG9uZSBzb3J0ZXIgaGFzIGEgcmVhbCBzb3J0QnkgbWV0aG9kXG4gICAgICogQHBhcmFtIGFcbiAgICAgKiBAcGFyYW0gYlxuICAgICAqL1xuICAgIGRlZmF1bHRTb3J0QnkoYSwgYikge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGEgPSBhW21lLnByb3BlcnR5XTtcbiAgICAgICAgYiA9IGJbbWUucHJvcGVydHldO1xuXG4gICAgICAgIGlmIChtZS51c2VUcmFuc2Zvcm1WYWx1ZSkge1xuICAgICAgICAgICAgYSA9IG1lLnRyYW5zZm9ybVZhbHVlKGEpO1xuICAgICAgICAgICAgYiA9IG1lLnRyYW5zZm9ybVZhbHVlKGIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGEgPiBiKSB7XG4gICAgICAgICAgICByZXR1cm4gMSAqIG1lLmRpcmVjdGlvbk11bHRpcGxpZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYSA8IGIpIHtcbiAgICAgICAgICAgIHJldHVybiAtMSAqIG1lLmRpcmVjdGlvbk11bHRpcGxpZXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Kn0gdmFsdWVcbiAgICAgKi9cbiAgICB0cmFuc2Zvcm1WYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoU29ydGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgU29ydGVyOyIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29udHJvbGxlci5BcHBsaWNhdGlvblxuICogQGV4dGVuZHMgTmVvLmNvbnRyb2xsZXIuQmFzZVxuICovXG5jbGFzcyBBcHBsaWNhdGlvbiBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29udHJvbGxlci5BcHBsaWNhdGlvbidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbnRyb2xsZXIuQXBwbGljYXRpb24nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gY3JlYXRlTWFpblZpZXc9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgY3JlYXRlTWFpblZpZXc6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29tcG9uZW50LkJhc2V9IG1haW5WaWV3Xz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBtYWluVmlld186IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG5hbWU9J015QXBwJ1xuICAgICAgICAgKi9cbiAgICAgICAgbmFtZTogJ015QXBwJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gcGFyZW50SWQ9J2RvY3VtZW50LmJvZHknXG4gICAgICAgICAqL1xuICAgICAgICBwYXJlbnRJZDogJ2RvY3VtZW50LmJvZHknLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcmVuZGVyZWQ9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVuZGVyZWQ6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcmVuZGVyaW5nPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlbmRlcmluZzogZmFsc2VcbiAgICB9fVxuXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBOZW8uYXBwcyA9IE5lby5hcHBzIHx8IHt9O1xuXG4gICAgICAgIE5lby5hcHBzW21lLm5hbWVdID0gbWU7XG5cbiAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucmVnaXN0ZXJBcHAobWUubmFtZSk7XG5cbiAgICAgICAgaWYgKG1lLmNyZWF0ZU1haW5WaWV3KSB7XG4gICAgICAgICAgICBtZS5yZW5kZXJNYWluVmlldyhjb25maWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyTWFpblZpZXcoKSB7XG4gICAgICAgIGxldCBtZSAgICA9IHRoaXMsXG4gICAgICAgICAgICBkZWxheSA9IE5lby5jb25maWcuaGFzaCA/IDIwMCA6IDEwO1xuXG4gICAgICAgIG1lLm1haW5WaWV3SW5zdGFuY2UgPSBOZW8uY3JlYXRlKG1lLm1haW5WaWV3LCB7XG4gICAgICAgICAgICBhcHBOYW1lIDogbWUubmFtZSxcbiAgICAgICAgICAgIHBhcmVudElkOiBtZS5wYXJlbnRJZFxuICAgICAgICB9KTtcblxuICAgICAgICBOZW8uY3VycmVudFdvcmtlci5yZWdpc3Rlck1haW5WaWV3KG1lLm5hbWUpO1xuXG4gICAgICAgIC8vIHNob3J0IGRlbGF5IHRvIGVuc3VyZSBjaGFuZ2VzIGZyb20gb25IYXNoQ2hhbmdlKCkgZ290IGFwcGxpZWRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBtZS5tYWluVmlld0luc3RhbmNlLnJlbmRlcih0cnVlKTtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQXBwbGljYXRpb24pO1xuXG4vLyBzaG9ydGN1dFxuTmVvLmFwcCA9IGNvbmZpZyA9PiBOZW8uY3JlYXRlKHtcbiAgICBtb2R1bGU6IEFwcGxpY2F0aW9uLFxuICAgIC4uLmNvbmZpZyB8fCB7fVxufSk7XG5cbmV4cG9ydCB7QXBwbGljYXRpb24gYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvcmVCYXNlICAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuaW1wb3J0IEhhc2hIaXN0b3J5IGZyb20gJy4uL3V0aWwvSGFzaEhpc3RvcnkubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvbnRyb2xsZXIuQmFzZVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBCYXNlIGV4dGVuZHMgQ29yZUJhc2Uge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlL09ic2VydmFibGUubWpzIG1peGluXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9ic2VydmFibGU9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbnRyb2xsZXIuQmFzZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbnRyb2xsZXIuQmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjb250cm9sbGVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NvbnRyb2xsZXInXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIEhhc2hIaXN0b3J5Lm9uKCdjaGFuZ2UnLCB0aGlzLm9uSGFzaENoYW5nZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxhY2Vob2xkZXIgbWV0aG9kIHdoaWNoIGdldHMgdHJpZ2dlcmVkIHdoZW4gdGhlIGhhc2ggaW5zaWRlIHRoZSBicm93c2VyIHVybCBjaGFuZ2VzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9sZFZhbHVlXG4gICAgICovXG4gICAgb25IYXNoQ2hhbmdlKHZhbHVlLCBvbGRWYWx1ZSkge1xuXG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCYXNlKTtcblxuZXhwb3J0IHtCYXNlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBJZEdlbmVyYXRvciBmcm9tICcuL0lkR2VuZXJhdG9yLm1qcydcblxuY29uc3QgY29uZmlnU3ltYm9sID0gU3ltYm9sLmZvcignY29uZmlnU3ltYm9sJyksXG4gICAgICBpc0luc3RhbmNlICAgPSBTeW1ib2woJ2lzSW5zdGFuY2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBjbGFzcyBmb3IgKGFsbW9zdCkgYWxsIGNsYXNzZXMgaW5zaWRlIHRoZSBOZW8gbmFtZXNwYWNlXG4gKiBFeGNlcHRpb25zIGFyZSBlLmcuIGNvcmUuSWRHZW5lcmF0b3IsIHZkb20uVk5vZGVcbiAqIEBjbGFzcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIEJhc2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXR1cm4gdmFsdWUgd2lsbCBnZXQgYXBwbGllZCB0byB0aGUgY2xhc3MgY29uc3RydWN0b3JcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBzdGF0aWNDb25maWdcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICovXG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoaXMgb25lIHRvIGZhbHNlIGluIGNhc2UgeW91IGRvbid0IHdhbnQgdG8gc3RpY2tcbiAgICAgICAgICogdG8gdGhlIFwiYW50aS1wYXR0ZXJuXCIgdG8gYXBwbHkgY2xhc3NlcyB0byB0aGUgZ2xvYmFsIE5lbyBvciBBcHAgbmFtZXNwYWNlXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJlZ2lzdGVyVG9HbG9iYWxOcz10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgcmVnaXN0ZXJUb0dsb2JhbE5zOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFRoZSByZXR1cm4gdmFsdWUgd2lsbCBnZXQgYXBwbGllZCB0byBlYWNoIGNsYXNzIGluc3RhbmNlXG4gICAgICogQHJldHVybnMge09iamVjdH0gc3RhdGljQ29uZmlnXG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICovXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNsYXNzIG5hbWUgd2hpY2ggd2lsbCBnZXQgbWFwcGVkIGludG8gdGhlIE5lbyBvciBhcHAgbmFtZXNwYWNlXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5CYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5CYXNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjbGFzcyBzaG9ydGN1dC1uYW1lIHRvIHVzZSBmb3IgZS5nLiBjcmVhdGluZyBjaGlsZCBjb21wb25lbnRzIGluc2lkZSBhIEpTT04tZm9ybWF0XG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2Jhc2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnYmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgbWl4aW5zIGFzIGFuIGFycmF5IG9mIGNsYXNzTmFtZXMsIGltcG9ydGVkIG1vZHVsZXMgb3IgYSBtaXhlZCB2ZXJzaW9uXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfE5lby5jb3JlLkJhc2VbXXxudWxsfSBtaXhpbnM9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgbWl4aW5zOiBudWxsXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIENvbnN1bWVzIHRoZSBzdGF0aWMgZ2V0Q29uZmlnKCkgb2JqZWN0XG4gICAgICogQXBwbGllcyB0aGUgb2JzZXJ2YWJsZSBtaXhpbiBpZiBuZWVkZWQsIGdyYW50cyByZW1vdGUgYWNjZXNzIGlmIG5lZWRlZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobWUsIHtcbiAgICAgICAgICAgIFtjb25maWdTeW1ib2xdOiB7XG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGUgIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgICAgOiB7fSxcbiAgICAgICAgICAgICAgICB3cml0YWJsZSAgICA6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbaXNJbnN0YW5jZV06IHtcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICAgOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmNyZWF0ZUlkKGNvbmZpZy5pZCB8fCBtZS5pZCk7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuaWQ7XG5cbiAgICAgICAgaWYgKG1lLmNvbnN0cnVjdG9yLmNvbmZpZykge1xuICAgICAgICAgICAgZGVsZXRlIG1lLmNvbnN0cnVjdG9yLmNvbmZpZy5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZS5nZXRTdGF0aWNDb25maWcoJ29ic2VydmFibGUnKSB8fCBtZS5taXhpbnMgJiYgTmVvLm5zKCdOZW8uY29yZS5PYnNlcnZhYmxlJywgbWUubWl4aW5zKSkge1xuICAgICAgICAgICAgbWUuaW5pdE9ic2VydmFibGUoY29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmluaXRDb25maWcoY29uZmlnKTtcblxuICAgICAgICBpZiAobWUuY29udHJvbGxlcikge1xuICAgICAgICAgICAgbWUuY29udHJvbGxlci5wYXJzZUNvbmZpZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1lLCAnY29uZmlnc0FwcGxpZWQnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlICAgICA6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1lLnJlbW90ZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChtZS5pbml0UmVtb3RlLmJpbmQobWUpLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdHJpZ2dlcmVkIGFmdGVyIGFsbCBjb25zdHJ1Y3RvcnMgYXJlIGRvbmVcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge31cblxuICAgIC8qKlxuICAgICAqIEdldHMgdHJpZ2dlcmVkIGFmdGVyIG9uQ29uc3RydWN0ZWQgaXMgZG9uZVxuICAgICAqIEBzZWUge0BsaW5rIE5lby5jb3JlLkJhc2Ujb25Db25zdHJ1Y3RlZCBvbkNvbnN0cnVjdGVkfVxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICAgICAqL1xuICAgIGluaXQoKSB7fVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgbWV0aG9kIGZvciBiZWZvcmVTZXQgZnVuY3Rpb25zIHdoaWNoIHRlc3QgaWYgYSBnaXZlbiB2YWx1ZSBpcyBpbnNpZGUgYSBzdGF0aWMgYXJyYXlcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIGNvbmZpZyBuYW1lXG4gICAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IFtzdGF0aWNOYW1lPW5hbWUgKyAncyddIG5hbWUgb2YgdGhlIHN0YXRpYyBjb25maWcgYXJyYXlcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfE51bWJlcn0gdmFsdWUgb3Igb2xkVmFsdWVcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRFbnVtVmFsdWUodmFsdWUsIG9sZFZhbHVlLCBuYW1lLCBzdGF0aWNOYW1lID0gbmFtZSArICdzJykge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBBcnJheS5pc0FycmF5KHN0YXRpY05hbWUpID8gc3RhdGljTmFtZSA6IHRoaXMuZ2V0U3RhdGljQ29uZmlnKHN0YXRpY05hbWUpO1xuXG4gICAgICAgIGlmICghdmFsdWVzLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgTmVvLmxvZ0Vycm9yKCdTdXBwb3J0ZWQgdmFsdWVzIGZvciAnICsgbmFtZSArICcgYXJlOicsIHZhbHVlcy5qb2luKCcsICcpLCB0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiBvbGRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2VzIHRoZSBJZEdlbmVyYXRvciB0byBjcmVhdGUgYW4gaWQgaWYgYSBzdGF0aWMgb25lIGlzIG5vdCBleHBsaWNpdGx5IHNldC5cbiAgICAgKiBSZWdpc3RlcnMgdGhlIGluc3RhbmNlIHRvIG1hbmFnZXIuSW5zdGFuY2UgaWYgdGhpcyBvbmUgaXMgYWxyZWFkeSBjcmVhdGVkLFxuICAgICAqIG90aGVyd2lzZSBzdG9yZXMgaXQgaW5zaWRlIGEgdG1wIG1hcC5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgKi9cbiAgICBjcmVhdGVJZChpZCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmlkID0gaWQgfHwgSWRHZW5lcmF0b3IuZ2V0SWQobWUuZ2V0SWRLZXkoKSk7XG5cbiAgICAgICAgaWYgKEJhc2UuaW5zdGFuY2VNYW5hZ2VyQXZhaWxhYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBOZW8ubWFuYWdlci5JbnN0YW5jZS5yZWdpc3RlcihtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIU5lby5pZE1hcCkge1xuICAgICAgICAgICAgICAgIE5lby5pZE1hcCA9IHt9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBOZW8uaWRNYXBbbWUuaWRdID0gbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbnJlZ2lzdGVycyB0aGlzIGluc3RhbmNlIGZyb20gTmVvLm1hbmFnZXIuSW5zdGFuY2VcbiAgICAgKiBhbmQgcmVtb3ZlcyBhbGwgb2JqZWN0IGVudHJpZXMgZnJvbSB0aGlzIGluc3RhbmNlXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAoQmFzZS5pbnN0YW5jZU1hbmFnZXJBdmFpbGFibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIE5lby5tYW5hZ2VyLkluc3RhbmNlLnVucmVnaXN0ZXIobWUpO1xuICAgICAgICB9IGVsc2UgaWYgKE5lby5pZE1hcCkge1xuICAgICAgICAgICAgZGVsZXRlIE5lby5pZE1hcFttZS5pZF07XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3Qua2V5cyhtZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobWUsIGtleSkud3JpdGFibGUpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgbWVba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlZCBpbnNpZGUgY3JlYXRlSWQoKSBhcyB0aGUgZGVmYXVsdCB2YWx1ZSBwYXNzZWQgdG8gdGhlIElkR2VuZXJhdG9yLlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIGFzIG5lZWRlZC5cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldElkS2V5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5udHlwZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBhIHN0YXRpYyBjb25maWcga2V5IG9yIHRoZSBzdGF0aWNDb25maWcgb2JqZWN0IGl0c2VsZiBpbiBjYXNlIG5vIHZhbHVlIGlzIHNldFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBba2V5XSBUaGUga2V5IG9mIGEgc3RhdGljQ29uZmlnIGRlZmluZWQgaW5zaWRlIHN0YXRpYyBnZXRTdGF0aWNDb25maWdcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXRTdGF0aWNDb25maWcoa2V5KSB7XG4gICAgICAgIGxldCBjZmcgPSB0aGlzLmNvbnN0cnVjdG9yLnN0YXRpY0NvbmZpZztcbiAgICAgICAgcmV0dXJuIChrZXkgPyBjZmdba2V5XSA6IGNmZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyBhbGwgY2xhc3MgY29uZmlncyB0byB0aGlzIGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3ByZXZlbnRPcmlnaW5hbENvbmZpZ10gVHJ1ZSBwcmV2ZW50cyB0aGUgaW5zdGFuY2UgZnJvbSBnZXR0aW5nIGFuIG9yaWdpbmFsQ29uZmlnIHByb3BlcnR5XG4gICAgICovXG4gICAgaW5pdENvbmZpZyhjb25maWcsIHByZXZlbnRPcmlnaW5hbENvbmZpZykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24obWVbY29uZmlnU3ltYm9sXSwgbWUubWVyZ2VDb25maWcoY29uZmlnLCBwcmV2ZW50T3JpZ2luYWxDb25maWcpKTtcbiAgICAgICAgbWUucHJvY2Vzc0NvbmZpZ3MoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEb2VzIGdldCB0cmlnZ2VyZWQgd2l0aCBhIGRlbGF5IHRvIGVuc3VyZSB0aGF0IE5lby53b3JrZXJJZCAmIE5lby53b3JrZXIuTWFuYWdlciBhcmUgZGVmaW5lZFxuICAgICAqIFJlbW90ZSBtZXRob2QgYWNjZXNzIHZpYSBwcm9taXNlc1xuICAgICAqL1xuICAgIGluaXRSZW1vdGUoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHJlbW90ZSAgICAgICAgPSBtZS5yZW1vdGUsXG4gICAgICAgICAgICBjbGFzc05hbWUgICAgID0gbWUuY2xhc3NOYW1lLFxuICAgICAgICAgICAgY3VycmVudFdvcmtlciA9IE5lby5jdXJyZW50V29ya2VyLFxuICAgICAgICAgICAgbGlzdGVuZXJJZDtcblxuICAgICAgICBpZiAoIW1lLnNpbmdsZXRvbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdGUgbWV0aG9kIGFjY2VzcyBvbmx5IGZ1bmN0aW9uYWwgZm9yIFNpbmdsZXRvbiBjbGFzc2VzICcgKyBjbGFzc05hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFOZW8uY29uZmlnLnVuaXRUZXN0TW9kZSAmJiBOZW8uaXNPYmplY3QocmVtb3RlKSkge1xuICAgICAgICAgICAgaWYgKE5lby53b3JrZXJJZCAhPT0gJ21haW4nICYmIGN1cnJlbnRXb3JrZXIuaXNTaGFyZWRXb3JrZXIgJiYgIWN1cnJlbnRXb3JrZXIuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcklkID0gY3VycmVudFdvcmtlci5vbignY29ubmVjdGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50V29ya2VyLnVuKCdjb25uZWN0ZWQnLCBsaXN0ZW5lcklkKTtcbiAgICAgICAgICAgICAgICAgICAgQmFzZS5zZW5kUmVtb3RlcyhjbGFzc05hbWUsIHJlbW90ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIEJhc2Uuc2VuZFJlbW90ZXMoY2xhc3NOYW1lLCByZW1vdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gY2hhbmdlIHRoZSBvcmRlciBjb25maWdzIGFyZSBhcHBsaWVkIHRvIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3ByZXZlbnRPcmlnaW5hbENvbmZpZ10gVHJ1ZSBwcmV2ZW50cyB0aGUgaW5zdGFuY2UgZnJvbSBnZXR0aW5nIGFuIG9yaWdpbmFsQ29uZmlnIHByb3BlcnR5XG4gICAgICogQHJldHVybnMge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgbWVyZ2VDb25maWcoY29uZmlnLCBwcmV2ZW50T3JpZ2luYWxDb25maWcpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgY3RvciA9IG1lLmNvbnN0cnVjdG9yO1xuXG4gICAgICAgIGlmICghY3Rvci5jb25maWcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmVvLmFwcGx5Q2xhc3NDb25maWcgaGFzIG5vdCBiZWVuIHJ1biBvbiAnICsgbWUuY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcHJldmVudE9yaWdpbmFsQ29uZmlnKSB7XG4gICAgICAgICAgICBtZS5vcmlnaW5hbENvbmZpZyA9IE5lby5jbG9uZShjb25maWcsIHRydWUsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsuLi5jdG9yLmNvbmZpZywgLi4uY29uZmlnfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHVzaW5nIHNldCgpLCBjb25maWdzIHdpdGhvdXQgYSB0cmFpbGluZyB1bmRlcnNjb3JlIGNhbiBhbHJlYWR5IGJlIGFzc2lnbmVkLFxuICAgICAqIHNvIHRoZSBoYXNPd25Qcm9wZXJ0eSgpIGNoZWNrIHdpbGwgcmV0dXJuIHRydWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtmb3JjZUFzc2lnbj1mYWxzZV1cbiAgICAgKi9cbiAgICBwcm9jZXNzQ29uZmlncyhmb3JjZUFzc2lnbj1mYWxzZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMobWVbY29uZmlnU3ltYm9sXSk7XG5cbiAgICAgICAgLy8gV2UgZG8gbm90IHdhbnQgdG8gaXRlcmF0ZSBvdmVyIHRoZSBrZXlzLCBzaW5jZSAxIGNvbmZpZyBjYW4gcmVtb3ZlIG1vcmUgdGhhbiAxIGtleSAoYmVmb3JlU2V0WCwgYWZ0ZXJTZXRYKVxuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBUaGUgaGFzT3duUHJvcGVydHkgY2hlY2sgaXMgaW50ZW5kZWQgZm9yIGNvbmZpZ3Mgd2l0aG91dCBhIHRyYWlsaW5nIHVuZGVyc2NvcmVcbiAgICAgICAgICAgIC8vID0+IHRoZXkgY291bGQgYWxyZWFkeSBnb3QgYXNzaWduZWQgaW5zaWRlIGFuIGFmdGVyU2V0LW1ldGhvZFxuICAgICAgICAgICAgaWYgKGZvcmNlQXNzaWduIHx8ICFtZS5oYXNPd25Qcm9wZXJ0eShrZXlzWzBdKSkge1xuICAgICAgICAgICAgICAgIG1lW2tleXNbMF1dID0gbWVbY29uZmlnU3ltYm9sXVtrZXlzWzBdXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdGhlcmUgaXMgYSBkZWxldGUgY2FsbCBpbnNpZGUgdGhlIGNvbmZpZyBnZXR0ZXIgYXMgd2VsbCAoTmVvLm1qcyA9PiBhdXRvR2VuZXJhdGVHZXRTZXQoKSlcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8ga2VlcCB0aGlzIG9uZSBmb3IgY29uZmlncywgd2hpY2ggZG8gbm90IHVzZSBnZXR0ZXJzIChubyB0cmFpbGluZyB1bmRlcnNjb3JlKVxuICAgICAgICAgICAgZGVsZXRlIG1lW2NvbmZpZ1N5bWJvbF1ba2V5c1swXV07XG5cbiAgICAgICAgICAgIG1lLnByb2Nlc3NDb25maWdzKGZvcmNlQXNzaWduKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZW1vdGVcbiAgICAgKi9cbiAgICBzdGF0aWMgc2VuZFJlbW90ZXMoY2xhc3NOYW1lLCByZW1vdGUpIHtcbiAgICAgICAgbGV0IG9yaWdpbjtcblxuICAgICAgICBPYmplY3QuZW50cmllcyhyZW1vdGUpLmZvckVhY2goKFt3b3JrZXIsIG1ldGhvZHNdKSA9PiB7XG4gICAgICAgICAgICBpZiAoTmVvLndvcmtlcklkICE9PSB3b3JrZXIpIHtcbiAgICAgICAgICAgICAgICBvcmlnaW4gPSBOZW8ud29ya2VySWQgPT09ICdtYWluJyA/IE5lby53b3JrZXIuTWFuYWdlciA6IE5lby5jdXJyZW50V29ya2VyO1xuXG4gICAgICAgICAgICAgICAgb3JpZ2luLnNlbmRNZXNzYWdlKHdvcmtlciwge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24gICA6ICdyZWdpc3RlclJlbW90ZScsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZHMgIDogbWV0aG9kcyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIG11bHRpcGxlIGNvbmZpZ3MgYXQgb25jZSwgZW5zdXJpbmcgdGhhdCBhbGwgYWZ0ZXJTZXQgbWV0aG9kcyBnZXQgYWxsIG5ldyBhc3NpZ25lZCB2YWx1ZXNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzPXt9XG4gICAgICovXG4gICAgc2V0KHZhbHVlcz17fSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIC8vIGluc3RlYWQgb2YgdXNpbmc6XG4gICAgICAgIC8vIG1lW2NvbmZpZ1N5bWJvbF0gPSB2YWx1ZXM7XG4gICAgICAgIC8vIHdlIGtlZXAgdGhlIE9iamVjdCBpbnN0YW5jZSAoZGVmaW5lZCB2aWEgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoKSA9PiBub24gZW51bWVyYWJsZSlcblxuICAgICAgICBPYmplY3Qua2V5cyhtZVtjb25maWdTeW1ib2xdKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgbWVbY29uZmlnU3ltYm9sXVtrZXldO1xuICAgICAgICB9KTtcblxuICAgICAgICBPYmplY3QuYXNzaWduKG1lW2NvbmZpZ1N5bWJvbF0sIHZhbHVlcyk7XG5cbiAgICAgICAgbWUucHJvY2Vzc0NvbmZpZ3ModHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmFsdWUgb2YgYSBzdGF0aWMgY29uZmlnIGJ5IGEgZ2l2ZW4ga2V5XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUga2V5IG9mIGEgc3RhdGljQ29uZmlnIGRlZmluZWQgaW5zaWRlIHN0YXRpYyBnZXRTdGF0aWNDb25maWdcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgY29uZmlnIGV4aXN0cyBhbmQgZ290IGNoYW5nZWRcbiAgICAgKi9cbiAgICBzZXRTdGF0aWNDb25maWcoa2V5LCB2YWx1ZSkge1xuICAgICAgICBsZXQgc3RhdGljQ29uZmlnID0gdGhpcy5jb25zdHJ1Y3Rvci5zdGF0aWNDb25maWc7XG5cbiAgICAgICAgaWYgKHN0YXRpY0NvbmZpZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBzdGF0aWNDb25maWdba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogPHA+RW5oYW5jaW5nIHRoZSB0b1N0cmluZygpIG1ldGhvZCwgZS5nLjwvcD5cbiAgICAgKiBgTmVvLmNyZWF0ZSgnTmVvLmJ1dHRvbi5CYXNlJykudG9TdHJpbmcoKSA9PiBcIltvYmplY3QgTmVvLmJ1dHRvbi5CYXNlIChuZW8tYnV0dG9uLTEpXVwiYFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5jbGFzc05hbWV9IChpZDogJHt0aGlzLmlkfSlgO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIDxwPkVuaGFuY2luZyB0aGUgaW5zdGFuY2VvZiBtZXRob2QuIFdpdGhvdXQgdGhpcyBjaGFuZ2U6PC9wPlxuICAgICAqIGBOZW8uY29sbGVjdGlvbi5CYXNlLnByb3RvdHlwZSBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UgPT4gdHJ1ZWBcbiAgICAgKiA8cD5XaXRoIHRoaXMgY2hhbmdlOjwvcD5cbiAgICAgKiBgTmVvLmNvbGxlY3Rpb24uQmFzZS5wcm90b3R5cGUgaW5zdGFuY2VvZiBOZW8uY29yZS5CYXNlID0+IGZhbHNlYDxicj5cbiAgICAgKiBgTmVvLmNyZWF0ZShOZW8uY29sbGVjdGlvbi5CYXNlKSBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UgPT4gdHJ1ZWBcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgW1N5bWJvbC5oYXNJbnN0YW5jZV0oaW5zdGFuY2UpIHtcbiAgICAgICAgaWYgKCFpbnN0YW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlW2lzSW5zdGFuY2VdID09PSB0cnVlID8gc3VwZXJbU3ltYm9sLmhhc0luc3RhbmNlXShpbnN0YW5jZSkgOiBmYWxzZTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xuXG5CYXNlLmluc3RhbmNlTWFuYWdlckF2YWlsYWJsZSA9IGZhbHNlO1xuXG5leHBvcnQge0Jhc2UgYXMgZGVmYXVsdH07IiwiLyoqXG4gKiBUaGlzIGNsYXNzIGdldHMgdXNlZCBieSBjb3JlLkJhc2UsIHNvIGl0IGNhbiBub3QgZXh0ZW5kIGl0LlxuICogSXQgY291bGQgZ2V0IHNpbXBsaWZpZWQgdG8ganVzdCBiZWluZyBhbiBvYmplY3QgKG5lZWRzIHRvIG1hbnVhbGx5IGdldCBwdXQgaW50byB0aGUgTmVvIG5hbWVzcGFjZSBpbiB0aGlzIGNhc2UpLlxuICogQGNsYXNzIE5lby5jb3JlLklkR2VuZXJhdG9yXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIElkR2VuZXJhdG9yIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhpcyBvbmUgdG8gZmFsc2UgaW4gY2FzZSB5b3UgZG9uJ3Qgd2FudCB0byBzdGlja1xuICAgICAgICAgKiB0byB0aGUgXCJhbnRpLXBhdHRlcm5cIiB0byBhcHBseSBjbGFzc2VzIHRvIHRoZSBnbG9iYWwgTmVvIG9yIEFwcCBuYW1lc3BhY2VcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcmVnaXN0ZXJUb0dsb2JhbE5zPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICByZWdpc3RlclRvR2xvYmFsTnM6IHRydWVcbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb3JlLklkR2VuZXJhdG9yJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5JZEdlbmVyYXRvcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdpZC1nZW5lcmF0b3InXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnaWQtZ2VuZXJhdG9yJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBkZWZhdWx0IHByZWZpeCBmb3IgbmVvIGluc3RhbmNlIGlkc1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGJhc2U9J25lby0nXG4gICAgICAgICAqL1xuICAgICAgICBiYXNlOiAnbmVvLScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249J3RydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmlkQ291bnRlciA9IHt9O1xuXG4gICAgICAgIC8vIGFsaWFzXG4gICAgICAgIE5lby5nZXRJZCA9IG1lLmdldElkLmJpbmQobWUpO1xuICAgIH1cblxuICAgIG9uQ29uc3RydWN0ZWQoKSB7fVxuXG4gICAgaW5pdCgpIHt9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRJZChuYW1lKSB7XG4gICAgICAgIG5hbWUgPSBuYW1lIHx8ICduZW8nO1xuXG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvdW50ZXIgPSBtZS5pZENvdW50ZXIsXG4gICAgICAgICAgICBjb3VudCAgID0gY291bnRlcltuYW1lXSB8fCAwO1xuXG4gICAgICAgIGNvdW50ZXJbbmFtZV0gPSArK2NvdW50O1xuXG4gICAgICAgIHJldHVybiBtZS5iYXNlICsgKG5hbWUgPT09ICduZW8nID8gJycgOiBuYW1lICsgJy0nKSArIGNvdW50O1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSWRHZW5lcmF0b3IpO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKElkR2VuZXJhdG9yKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29yZS5Mb2dnZXJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgTG9nZ2VyIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb3JlLkxvZ2dlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuTG9nZ2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2xvZ2dlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdsb2dnZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoaXMgY29uZmlnIHRvIGZhbHNlIHRvIGRpc2FibGUgdGhlIGxvZ2dpbmdcbiAgICAgICAgICogQG1lbWJlciB7Ym9vbGVhbn0gZW5hYmxlTG9ncz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBlbmFibGVMb2dzOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBsZXZlbD0nbG9nJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBsZXZlbDogJ2xvZycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtib29sZWFufSBlbmFibGVMb2dzPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIC8vIGFsaWFzZXNcbiAgICAgICAgTmVvLmFwcGx5RnJvbU5zKE5lbywgdGhpcywge1xuICAgICAgICAgICAgZXJyb3IgICA6ICdlcnJvcicsXG4gICAgICAgICAgICBpbmZvICAgIDogJ2luZm8nLFxuICAgICAgICAgICAgbG9nICAgICA6ICdsb2cnLFxuICAgICAgICAgICAgbG9nRXJyb3I6ICdsb2dFcnJvcicsXG4gICAgICAgICAgICB3YXJuICAgIDogJ3dhcm4nXG4gICAgICAgIH0sIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgZXJyb3IodmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICovXG4gICAgbG9nKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9ICdsb2cnO1xuICAgICAgICB0aGlzLndyaXRlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGFyZ3NcbiAgICAgKi9cbiAgICBpbmZvKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9ICdpbmZvJztcbiAgICAgICAgdGhpcy53cml0ZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICovXG4gICAgbG9nRXJyb3IoLi4uYXJncykge1xuICAgICAgICB0aGlzLmxldmVsID0gJ2Vycm9yJztcbiAgICAgICAgdGhpcy53cml0ZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICovXG4gICAgd2FybiguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMubGV2ZWwgPSAnd2Fybic7XG4gICAgICAgIHRoaXMud3JpdGUoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXJnc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB3cml0ZSguLi5hcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZUxvZ3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGVbdGhpcy5sZXZlbF0oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKExvZ2dlcik7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoTG9nZ2VyKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29yZS5PYnNlcnZhYmxlXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIE9ic2VydmFibGUgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuT2JzZXJ2YWJsZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuT2JzZXJ2YWJsZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdtaXhpbi1vYnNlcnZhYmxlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ21peGluLW9ic2VydmFibGUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbWl4aW49dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbjogdHJ1ZVxuICAgIH19XG5cbiAgICBpbml0T2JzZXJ2YWJsZShjb25maWcpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIHByb3RvID0gbWUuX19wcm90b19fLFxuICAgICAgICAgICAgbGlzdGVuZXJzO1xuXG4gICAgICAgIGlmIChjb25maWcubGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBtZS5saXN0ZW5lcnMgPSBjb25maWcubGlzdGVuZXJzO1xuICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5saXN0ZW5lcnM7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0ZW5lcnMgPSBtZS5saXN0ZW5lcnM7XG5cbiAgICAgICAgbWUubGlzdGVuZXJzID0ge307XG5cbiAgICAgICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdChsaXN0ZW5lcnMpKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzID0gey4uLmxpc3RlbmVyc307XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1lLmFkZExpc3RlbmVyKGxpc3RlbmVycyk7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAocHJvdG8gJiYgcHJvdG8uY29uc3RydWN0b3IuaXNDbGFzcykge1xuICAgICAgICAgICAgaWYgKHByb3RvLmNvbnN0cnVjdG9yLnN0YXRpY0NvbmZpZy5vYnNlcnZhYmxlICYmICFwcm90by5jb25zdHJ1Y3Rvci5saXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHByb3RvLmNvbnN0cnVjdG9yLCB7XG4gICAgICAgICAgICAgICAgICAgIGFkZExpc3RlbmVyICAgOiBtZS5hZGRMaXN0ZW5lcixcbiAgICAgICAgICAgICAgICAgICAgZmlyZSAgICAgICAgICA6IG1lLmZpcmUsXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycyAgICAgOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgb24gICAgICAgICAgICA6IG1lLm9uLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVMaXN0ZW5lcjogbWUucmVtb3ZlTGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgICAgIHVuICAgICAgICAgICAgOiBtZS51blxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvdG8gPSBwcm90by5fX3Byb3RvX187XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c11cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZXZlbnRJZF1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGFdXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcmRlcl1cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBldmVudElkXG4gICAgICovXG4gICAgYWRkTGlzdGVuZXIobmFtZSwgb3B0cywgc2NvcGUsIGV2ZW50SWQsIGRhdGEsIG9yZGVyKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBsaXN0ZW5lciwgZXhpc3RpbmcsIGV2ZW50Q29uZmlnO1xuXG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmIChuYW1lLmhhc093blByb3BlcnR5KCdzY29wZScpKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUgPSBuYW1lLnNjb3BlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBuYW1lLnNjb3BlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhuYW1lKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBtZS5hZGRMaXN0ZW5lcihrZXksIHZhbHVlLCBzY29wZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHNjb3BlID0gc2NvcGUgfHwgb3B0cy5zY29wZTtcbiAgICAgICAgICAgIGxpc3RlbmVyID0gb3B0cy5mbjtcbiAgICAgICAgICAgIG9yZGVyID0gb3JkZXIgfHwgb3B0cy5vcmRlcjtcbiAgICAgICAgICAgIGV2ZW50SWQgPSBldmVudElkIHx8IG9wdHMuZXZlbnRJZDtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbGlzdGVuZXIgPSBvcHRzO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgbGlzdGVuZXIgPSBvcHRzOyAvLyBWQyBob29rLCBjYW4gZ2V0IHBhcnNlZCBhZnRlciBvbkNvbnN0cnVjdGVkIGluIGNhc2UgdGhlIHZpZXcgdXNlcyB0aGUgcGFyZW50IFZDXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYWRkTGlzdGVuZXIgY2FsbDogJyArIG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnRDb25maWcgPSB7XG4gICAgICAgICAgICBmbiAgICA6IGxpc3RlbmVyLFxuICAgICAgICAgICAgc2NvcGUgOiBzY29wZSxcbiAgICAgICAgICAgIGRhdGEgIDogZGF0YSxcbiAgICAgICAgICAgIGlkICAgIDogZXZlbnRJZCB8fCBOZW8uZ2V0SWQoJ2V2ZW50JylcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZXhpc3RpbmcgPSBtZS5saXN0ZW5lcnMgJiYgbWUubGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICAgICAgICBleGlzdGluZy5mb3JFYWNoKGNmZyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNmZy5pZCA9PT0gZXZlbnRJZCB8fCAoY2ZnLmZuID09PSBsaXN0ZW5lciAmJiBjZmcuc2NvcGUgPT09IHNjb3BlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2F0ZSBldmVudCBoYW5kbGVyIGF0dGFjaGVkOiAnICsgbmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3JkZXIgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgZXhpc3Rpbmcuc3BsaWNlKG9yZGVyLCAwLCBldmVudENvbmZpZyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yZGVyID09PSAnYmVmb3JlJykge1xuICAgICAgICAgICAgICAgIGV4aXN0aW5nLnVuc2hpZnQoZXZlbnRDb25maWcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleGlzdGluZy5wdXNoKGV2ZW50Q29uZmlnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLmxpc3RlbmVyc1tuYW1lXSA9IFtldmVudENvbmZpZ107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXZlbnRDb25maWcuaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqL1xuICAgIGZpcmUobmFtZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGFyZ3MgICAgICA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcbiAgICAgICAgICAgIGxpc3RlbmVycyA9IG1lLmxpc3RlbmVycyxcbiAgICAgICAgICAgIGV2ZW50Q29uZmlnLCBldmVudHMsIGksIGxlbjtcblxuICAgICAgICBpZiAobGlzdGVuZXJzICYmIGxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgICAgICAgZXZlbnRzID0gWy4uLmxpc3RlbmVyc1tuYW1lXV07XG4gICAgICAgICAgICBsZW4gICAgPSBldmVudHMubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBldmVudENvbmZpZyA9IGV2ZW50c1tpXTtcblxuICAgICAgICAgICAgICAgIGV2ZW50Q29uZmlnLmZuLmFwcGx5KGV2ZW50Q29uZmlnLnNjb3BlIHx8IG1lLCBldmVudENvbmZpZy5kYXRhID8gYXJncy5jb25jYXQoZXZlbnRDb25maWcuZGF0YSkgOiBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gZXZlbnRJZFxuICAgICAqL1xuICAgIHJlbW92ZUxpc3RlbmVyKG5hbWUsIGV2ZW50SWQpIHtcbiAgICAgICAgaWYgKE5lby5pc1N0cmluZyhldmVudElkKSkge1xuICAgICAgICAgICAgbGV0IGxpc3RlbmVycyAgID0gdGhpcy5saXN0ZW5lcnNbbmFtZV0sXG4gICAgICAgICAgICAgICAgbWF0Y2ggICAgICAgPSBmYWxzZTtcblxuICAgICAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGV2ZW50Q29uZmlnLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRDb25maWcuaWQgPT09IGV2ZW50SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoID0gaWR4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2ggIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShtYXRjaCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZW1vdmVBbGxMaXN0ZW5lcnM6IGZ1bmN0aW9uKG5hbWUpIHtcblxuICAgIC8vIH0sXG5cbiAgICAvLyBzdXNwZW5kTGlzdGVuZXJzOiBmdW5jdGlvbihxdWV1ZSkge1xuXG4gICAgLy8gfSxcblxuICAgIC8vIHJlc3VtZUxpc3RlbmVyczogZnVuY3Rpb24oKSB7XG5cbiAgICAvLyB9XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgYWRkTGlzdGVuZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHNdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtzY29wZV1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2V2ZW50SWRdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtkYXRhXVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbb3JkZXJdXG4gICAgICogQHJldHVybnMge1N0cmluZ30gZXZlbnRJZFxuICAgICAqL1xuICAgIG9uKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkTGlzdGVuZXIoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIHJlbW92ZUxpc3RlbmVyXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gZXZlbnRJZFxuICAgICAqL1xuICAgIHVuKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lciguLi5hcmdzKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE9ic2VydmFibGUpO1xuXG5leHBvcnQge09ic2VydmFibGUgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb3JlLlV0aWxcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgVXRpbCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgcmVnZXggdG8gcmVtb3ZlIGNhbWVsIGNhc2Ugc3ludGF4XG4gICAgICAgICAqIEBtZW1iZXIge1JlZ0V4cH0gZGVjYW1lbFJlZ0V4PS8oW2Etel0pKFtBLVpdKS9nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgZGVjYW1lbFJlZ0V4OiAvKFthLXpdKShbQS1aXSkvZ1xuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuVXRpbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuVXRpbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjb3JlLXV0aWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY29yZS11dGlsJyxcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc2NvcGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ1tdfSB2YWx1ZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgYmluZE1ldGhvZHMoc2NvcGUsIHZhbHVlcykge1xuICAgICAgICB2YWx1ZXMuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICBzY29wZVt2YWx1ZV0gPSBzY29wZVt2YWx1ZV0uYmluZChzY29wZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ha2VzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgYSBzdHJpbmcgdXBwZXJjYXNlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufFN0cmluZ30gUmV0dXJucyBmYWxzZSBmb3Igbm9uIHN0cmluZyBpbnB1dHNcbiAgICAgKi9cbiAgICBzdGF0aWMgY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuaXNTdHJpbmcoc3RyaW5nKSAmJiBzdHJpbmdbMF0udG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm1zIGEgc3R5bGVzIHN0cmluZyBpbnRvIGEgc3R5bGVzIG9iamVjdCB1c2luZyBjYW1lbGNhc2Ugc3ludGF4XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZyBUaGUgc3R5bGVzIHN0cmluZyB0byBwYXJzZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBjYW1lbGNhc2Ugc3R5bGVzIG9iamVjdFxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVTdHlsZU9iamVjdChzdHJpbmcpIHtcbiAgICAgICAgaWYgKCFzdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhcnRzO1xuXG4gICAgICAgIC8vIHNwbGl0KCc7JykgZG9lcyBmZXRjaCBzZW1pY29sb25zIGluc2lkZSBicmFja2V0c1xuICAgICAgICAvLyAtPiBiYWNrZ3JvdW5kLWltYWdlOiBcInVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LC4uLlxuXG4gICAgICAgIC8vIFRPRE86IENhY2hlIGFsbCByZWdleFxuICAgICAgICByZXR1cm4gc3RyaW5nLnNwbGl0KC87KD89W15cXCldKig/OlxcKHwkKSkvZykucmVkdWNlKChvYmosIGVsKSA9PiB7XG4gICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHNwbGl0IGJ5IHRoZSBmaXJzdCBjb2xvbiBvbmx5XG4gICAgICAgICAgICAvLyAtPiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHA6Ly9leGFtcGxlLmNvbS9pbWFnZS5wbmcnKVxuICAgICAgICAgICAgcGFydHMgPSBlbC5zcGxpdCgoLzooLispLykpLm1hcChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgIGxldCBudW0gPSBwYXJzZUZsb2F0KHgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHggPT0gbnVtID8gbnVtIDogeC50cmltKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHBhcnRzWzBdICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0ucmVwbGFjZSgvLShbYS16XSkvZywgKHN0ciwgbGV0dGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBvYmpbcGFydHNbMF1dID0gcGFydHNbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBzdHlsZXMgb2JqZWN0IHdoaWNoIGNhbiB1c2UgY2FtZWxjYXNlIHN5bnRheCBpbnRvIGEgc3R5bGVzIHN0cmluZ1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZXMgVGhlIHN0eWxlcyBvYmplY3RcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgc3R5bGVzIHN0cmluZyAoRE9NIHJlYWR5KVxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVTdHlsZXMoc3R5bGVzKSB7XG4gICAgICAgIGxldCBzdHlsZSA9ICcnO1xuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHN0eWxlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN0eWxlICs9IFV0aWwuZGVjYW1lbChrZXkpICsgJzonICsgdmFsdWUgKyAnOyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm1zIGFsbCB1cHBlcmNhc2UgY2hhcmFjdGVycyBvZiBhIHN0cmluZyBpbnRvIGxvd2VyY2FzZS5cbiAgICAgKiBEb2VzIG5vdCB0b3VjaCBzcGVjaWFsIGNoYXJhY3RlcnMuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSBpbnB1dCBjb250YWluaW5nIHVwcGVyY2FzZSBjaGFyYWN0ZXJzXG4gICAgICogQHJldHVybnMge1N0cmluZ30gVGhlIGxvd2VyY2FzZSBvdXRwdXRcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVjYW1lbCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShVdGlsLmRlY2FtZWxSZWdFeCwgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBhcnJheVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0FycmF5KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgYm9vbGVhblxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0Jvb2xlYW4odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIG5vdCB1bmRlZmluZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNEZWZpbmVkKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGFuIGVtcHR5IEFycmF5LCBPYmplY3Qgb3IgU3RyaW5nXG4gICAgICogQHBhcmFtIHtBcnJheXxPYmplY3R8U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0VtcHR5KHZhbHVlKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVdGlsLmlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVXRpbC5pc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYSBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIG51bWJlci4gUmV0dXJucyBmYWxzZSBmb3Igbm9uLWZpbml0ZSBudW1iZXJzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzTnVtYmVyKHZhbHVlKXtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGFuIG9iamVjdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc09iamVjdCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYSBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNTdHJpbmcodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYW55IGl0ZXJhYmxlIChzdHJpbmdzLCBudW1lcmljIGluZGljZXMgYW5kIGEgbGVuZ3RoIHByb3BlcnR5KSBpbnRvIGEgdHJ1ZSBhcnJheVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gaXRlcmFibGVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3N0YXJ0PTBdIHN0YXJ0IGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtlbmQ9aXRlcmFibGUubGVuZ3RoXSBlbmQgaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgc3RhdGljIHRvQXJyYXkoaXRlcmFibGUsIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgbGV0IGxlbjtcblxuICAgICAgICBpZiAoIWl0ZXJhYmxlIHx8ICEobGVuID0gaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVyYWJsZS5zcGxpdCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoaXRlcmFibGUsIHN0YXJ0IHx8IDAsIGVuZCB8fCBsZW4pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVXRpbCk7XG5cbi8vIGFsaWFzZXNcbk5lby5hcHBseUZyb21OcyhOZW8sIFV0aWwsIHtcbiAgICBiaW5kTWV0aG9kcyAgICAgIDogJ2JpbmRNZXRob2RzJyxcbiAgICBjcmVhdGVTdHlsZU9iamVjdDogJ2NyZWF0ZVN0eWxlT2JqZWN0JyxcbiAgICBjcmVhdGVTdHlsZXMgICAgIDogJ2NyZWF0ZVN0eWxlcycsXG4gICAgY2FwaXRhbGl6ZSAgICAgICA6ICdjYXBpdGFsaXplJyxcbiAgICBkZWNhbWVsICAgICAgICAgIDogJ2RlY2FtZWwnLFxuICAgIGlzQXJyYXkgICAgICAgICAgOiAnaXNBcnJheScsXG4gICAgaXNCb29sZWFuICAgICAgICA6ICdpc0Jvb2xlYW4nLFxuICAgIGlzRGVmaW5lZCAgICAgICAgOiAnaXNEZWZpbmVkJyxcbiAgICBpc0VtcHR5ICAgICAgICAgIDogJ2lzRW1wdHknLFxuICAgIGlzRnVuY3Rpb24gICAgICAgOiAnaXNGdW5jdGlvbicsXG4gICAgaXNOdW1iZXIgICAgICAgICA6ICdpc051bWJlcicsXG4gICAgaXNPYmplY3QgICAgICAgICA6ICdpc09iamVjdCcsXG4gICAgaXNTdHJpbmcgICAgICAgICA6ICdpc1N0cmluZycsXG4gICAgdG9BcnJheSAgICAgICAgICA6ICd0b0FycmF5J1xufSwgdHJ1ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWw7IiwiaW1wb3J0IEJhc2UgICAgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IExvZ2dlciAgICAgIGZyb20gJy4vTG9nZ2VyLm1qcyc7XG5pbXBvcnQgT2JzZXJ2YWJsZSAgZnJvbSAnLi9PYnNlcnZhYmxlLm1qcyc7XG5pbXBvcnQgVXRpbCAgICAgICAgZnJvbSAnLi9VdGlsLm1qcyc7XG5cbmV4cG9ydCB7QmFzZSwgTG9nZ2VyLCBPYnNlcnZhYmxlLCBVdGlsfTsiLCJpbXBvcnQgQ29sbGVjdGlvbkJhc2UgZnJvbSAnLi4vY29sbGVjdGlvbi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQWJzdHJhY3QgYmFzZSBjbGFzcyBmb3IgdGhlIG90aGVyIG1hbmFnZXIgY2xhc3Nlc1xuICogQGNsYXNzIE5lby5tYW5hZ2VyLkJhc2VcbiAqIEBleHRlbmRzIE5lby5jb2xsZWN0aW9uLkJhc2VcbiAqL1xuY2xhc3MgQmFzZSBleHRlbmRzIENvbGxlY3Rpb25CYXNle1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubWFuYWdlci5CYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFuYWdlci5CYXNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2Jhc2UtbWFuYWdlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdiYXNlLW1hbmFnZXInXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBpZFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0QnlJZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAgICAgKi9cbiAgICByZWdpc3RlcihpdGVtKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLmdldChpdGVtLmlkKSkge1xuICAgICAgICAgICAgTmVvLmxvZ0Vycm9yKCdUcnlpbmcgdG8gY3JlYXRlIGFuIGl0ZW0gd2l0aCBhbiBhbHJlYWR5IGV4aXN0aW5nIGlkJywgaXRlbSwgbWUuZ2V0KGl0ZW0uaWQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXG4gICAgICovXG4gICAgdW5yZWdpc3RlcihpdGVtKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKGl0ZW0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQmFzZSk7XG5cbmV4cG9ydCB7QmFzZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSAgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IFZOb2RlVXRpbCBmcm9tICcuLi91dGlsL1ZOb2RlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5tYW5hZ2VyLkNvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLm1hbmFnZXIuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1hbmFnZXIuQ29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFuYWdlci5Db21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY29tcG9uZW50LW1hbmFnZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY29tcG9uZW50LW1hbmFnZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuICAgICAgICBOZW8uZ2V0Q29tcG9uZW50ID0gdGhpcy5nZXRCeUlkLmJpbmQodGhpcyk7IC8vIGFsaWFzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZmlyc3QgY29tcG9uZW50IHdoaWNoIG1hdGNoZXMgdGhlIGNvbmZpZy1zZWxlY3RvciBtb3ZpbmcgZG93biB0aGUgY29tcG9uZW50IGl0ZW1zIHRyZWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29tcG9uZW50SWRcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGNvbmZpZ1xuICAgICAqIEByZXR1cm5zIHtOZW8uY29tcG9uZW50LkJhc2V8bnVsbH1cbiAgICAgKi9cbiAgICBkb3duKGNvbXBvbmVudElkLCBjb25maWcpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbXBvbmVudCAgID0gbWUuZ2V0QnlJZChjb21wb25lbnRJZCksXG4gICAgICAgICAgICBtYXRjaEFycmF5ICA9IFtdLFxuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBudWxsLFxuICAgICAgICAgICAgaSAgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgICAgPSBjb21wb25lbnQuaXRlbXMgJiYgY29tcG9uZW50Lml0ZW1zLmxlbmd0aCB8fCAwLFxuICAgICAgICAgICAgY29uZmlnQXJyYXksIGNvbmZpZ0xlbmd0aDtcblxuICAgICAgICBpZiAoTmVvLmlzU3RyaW5nKGNvbmZpZykpIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBudHlwZTogY29uZmlnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnQXJyYXkgID0gT2JqZWN0LmVudHJpZXMoY29uZmlnKTtcbiAgICAgICAgY29uZmlnTGVuZ3RoID0gY29uZmlnQXJyYXkubGVuZ3RoO1xuXG4gICAgICAgIGNvbmZpZ0FycmF5LmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudFtrZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1hdGNoQXJyYXkubGVuZ3RoID09PSBjb25maWdMZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IG1lLmRvd24oY29tcG9uZW50Lml0ZW1zW2ldLmlkLCBjb25maWcpO1xuICAgICAgICAgICAgaWYgKHJldHVyblZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwYXRoXG4gICAgICogQHJldHVybnMge1N0cmluZ3xudWxsfSB0aGUgY29tcG9uZW50IGlkIGluIGNhc2UgdGhlcmUgaXMgYSBtYXRjaFxuICAgICAqL1xuICAgIGZpbmRQYXJlbnRDb21wb25lbnQocGF0aCkge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIGkgICA9IDAsXG4gICAgICAgICAgICBsZW4gPSBwYXRoICYmIHBhdGgubGVuZ3RoIHx8IDAsXG4gICAgICAgICAgICBpZDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZCA9IHBhdGhbaV07XG5cbiAgICAgICAgICAgIGlmIChpZCAmJiBtZS5oYXMoaWQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdG9kbzogcmVwbGFjZSBhbGwgY2FsbHMgb2YgdGhpcyBtZXRob2QgdG8gY2FsbHMgdXNpbmcgdGhlIHV0aWwuVk5vZGUgY2xhc3NcbiAgICAgKiBHZXQgdGhlIGlkcyBvZiBhbGwgY2hpbGQgbm9kZXMgb2YgdGhlIGdpdmVuIHZub2RlXG4gICAgICogQHBhcmFtIHZub2RlXG4gICAgICogQHBhcmFtIGNoaWxkSWRzXG4gICAgICogQHJldHVybnMge0FycmF5fSBjaGlsZElkc1xuICAgICAqL1xuICAgIGdldENoaWxkSWRzKHZub2RlLCBjaGlsZElkcykge1xuICAgICAgICByZXR1cm4gVk5vZGVVdGlsLmdldENoaWxkSWRzKHZub2RlLCBjaGlsZElkcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgY2hpbGQgY29tcG9uZW50cyBmb3VuZCBpbnNpZGUgdGhlIHZkb20gdHJlZVxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBjb21wb25lbnRcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlW119IGNoaWxkQ29tcG9uZW50c1xuICAgICAqL1xuICAgIGdldENoaWxkcmVuKGNvbXBvbmVudCkge1xuICAgICAgICBsZXQgY2hpbGRDb21wb25lbnRzID0gW10sXG4gICAgICAgICAgICBjaGlsZE5vZGVzICAgICAgPSBWTm9kZVV0aWwuZ2V0Q2hpbGRJZHMoY29tcG9uZW50LnZub2RlKSxcbiAgICAgICAgICAgIGNoaWxkQ29tcG9uZW50O1xuXG4gICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgIGNoaWxkQ29tcG9uZW50ID0gdGhpcy5nZXQobm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZENvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGNoaWxkQ29tcG9uZW50cy5wdXNoKGNoaWxkQ29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkQ29tcG9uZW50cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIEFycmF5IGNvbnRhaW5pbmcgdGhlIGlkcyBvZiBhbGwgcGFyZW50IGNvbXBvbmVudHMgZm9yIGEgZ2l2ZW4gY29tcG9uZW50XG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmdbXX0gcGFyZW50SWRzXG4gICAgICovXG4gICAgZ2V0UGFyZW50SWRzKGNvbXBvbmVudCkge1xuICAgICAgICBsZXQgcGFyZW50SWRzID0gW107XG5cbiAgICAgICAgd2hpbGUgKGNvbXBvbmVudCAmJiBjb21wb25lbnQucGFyZW50SWQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IHRoaXMuZ2V0QnlJZChjb21wb25lbnQucGFyZW50SWQpO1xuXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgcGFyZW50SWRzLnB1c2goY29tcG9uZW50LmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJlbnRJZHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwYXRoXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIGdldFBhcmVudFBhdGgocGF0aCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb21wb25lbnRQYXRoID0gW10sXG4gICAgICAgICAgICBpICAgICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgICAgPSBwYXRoICYmIHBhdGgubGVuZ3RoIHx8IDA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKG1lLmhhcyhwYXRoW2ldKSkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudFBhdGgucHVzaChwYXRoW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb25lbnRQYXRoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gQXJyYXkgY29udGFpbmluZyBhbGwgcGFyZW50IGNvbXBvbmVudHMgZm9yIGEgZ2l2ZW4gY29tcG9uZW50XG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxuICAgICAqIEByZXR1cm5zIHtOZW8uY29tcG9uZW50LkJhc2VbXX0gcGFyZW50c1xuICAgICAqL1xuICAgIGdldFBhcmVudHMoY29tcG9uZW50KSB7XG4gICAgICAgIGxldCBwYXJlbnRzID0gW107XG5cbiAgICAgICAgd2hpbGUgKGNvbXBvbmVudCAmJiBjb21wb25lbnQucGFyZW50SWQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IHRoaXMuZ2V0QnlJZChjb21wb25lbnQucGFyZW50SWQpO1xuXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyZW50cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBjb21wb25lbnQgd2hpY2ggbWF0Y2hlcyB0aGUgY29uZmlnLXNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudElkXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBjb25maWdcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlfG51bGx9XG4gICAgICovXG4gICAgdXAoY29tcG9uZW50SWQsIGNvbmZpZykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5nZXRCeUlkKGNvbXBvbmVudElkKSxcbiAgICAgICAgICAgIGNvbmZpZ0FycmF5LCBjb25maWdMZW5ndGgsIG1hdGNoQXJyYXk7XG5cbiAgICAgICAgaWYgKE5lby5pc1N0cmluZyhjb25maWcpKSB7XG4gICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgbnR5cGU6IGNvbmZpZ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZ0FycmF5ICA9IE9iamVjdC5lbnRyaWVzKGNvbmZpZyk7XG4gICAgICAgIGNvbmZpZ0xlbmd0aCA9IGNvbmZpZ0FycmF5Lmxlbmd0aDtcblxuICAgICAgICB3aGlsZSAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5wYXJlbnRJZCkge1xuICAgICAgICAgICAgY29tcG9uZW50ID0gdGhpcy5nZXRCeUlkKGNvbXBvbmVudC5wYXJlbnRJZCk7XG5cbiAgICAgICAgICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdGNoQXJyYXkgPSBbXTtcblxuICAgICAgICAgICAgY29uZmlnQXJyYXkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudFtrZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaEFycmF5Lmxlbmd0aCA9PT0gY29uZmlnTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ29tcG9uZW50KTtcblxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShDb21wb25lbnQpO1xuXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7IiwiaW1wb3J0IEJhc2UgICAgICAgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tICcuL0NvbXBvbmVudC5tanMnO1xuaW1wb3J0IEZvY3VzTWFuYWdlciAgICAgZnJvbSAnLi9Gb2N1cy5tanMnO1xuaW1wb3J0IExvZ2dlciAgICAgICAgICAgZnJvbSAnLi4vY29yZS9Mb2dnZXIubWpzJztcbmltcG9ydCBOZW9BcnJheSAgICAgICAgIGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCBWRG9tVXRpbCAgICAgICAgIGZyb20gJy4uL3V0aWwvVkRvbS5tanMnO1xuXG5jb25zdCBldmVudENvbmZpZ0tleXMgPSBbXG4gICAgJ2J1YmJsZScsXG4gICAgJ2RlbGVnYXRlJyxcbiAgICAnbG9jYWwnLFxuICAgICdzY29wZScsXG4gICAgJ3Zub2RlSWQnXG5dO1xuXG5jb25zdCBnbG9iYWxEb21FdmVudHMgPSBbXG4gICAgJ2NoYW5nZScsXG4gICAgJ2NsaWNrJyxcbiAgICAnY29udGV4dG1lbnUnLFxuICAgICdkcmFnOmVuZCcsXG4gICAgJ2RyYWc6bW92ZScsXG4gICAgJ2RyYWc6c3RhcnQnLFxuICAgICdmb2N1c2luJyxcbiAgICAnZm9jdXNvdXQnLFxuICAgICdpbnB1dCcsXG4gICAgJ2tleWRvd24nLFxuICAgICdrZXl1cCcsXG4gICAgJ21vdXNlZW50ZXInLFxuICAgICdtb3VzZWxlYXZlJyxcbiAgICAnd2hlZWwnXG5dO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8ubWFuYWdlci5Eb21FdmVudFxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBEb21FdmVudCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubWFuYWdlci5Eb21FdmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1hbmFnZXIuRG9tRXZlbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nZG9tLWV2ZW50LW1hbmFnZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnZG9tLWV2ZW50LW1hbmFnZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBpdGVtcz17fVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtczoge30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IG1hcD17fVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBtYXA6IHt9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGZpcmUoZXZlbnQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYnViYmxlICAgICA9IHRydWUsXG4gICAgICAgICAgICBkYXRhICAgICAgID0gZXZlbnQuZGF0YSB8fCB7fSxcbiAgICAgICAgICAgIGV2ZW50TmFtZSAgPSBldmVudC5ldmVudE5hbWUsXG4gICAgICAgICAgICBpICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgPSBudWxsLFxuICAgICAgICAgICAgcGF0aElkcyAgICA9IGRhdGEucGF0aC5tYXAoZSA9PiBlLmlkKSxcbiAgICAgICAgICAgIHBhdGggICAgICAgPSBDb21wb25lbnRNYW5hZ2VyLmdldFBhcmVudFBhdGgocGF0aElkcyksXG4gICAgICAgICAgICBsZW4gICAgICAgID0gcGF0aC5sZW5ndGgsXG4gICAgICAgICAgICBjb21wb25lbnQsIGRlbGVnYXRpb25UYXJnZXRJZCwgaWQsIHByZXZlbnRGaXJlO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlkICAgICAgICA9IHBhdGhbaV07XG4gICAgICAgICAgICBjb21wb25lbnQgPSBOZW8uZ2V0Q29tcG9uZW50KGlkKTtcblxuICAgICAgICAgICAgaWYgKCFjb21wb25lbnQgfHwgY29tcG9uZW50LmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxpc3RlbmVycyA9IG1lLml0ZW1zW2lkXSAmJiBtZS5pdGVtc1tpZF1bZXZlbnROYW1lXTtcblxuICAgICAgICAgICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdmaXJlJywgZXZlbnROYW1lLCBkYXRhLCBsaXN0ZW5lcnMsIHBhdGgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobGlzdGVuZXJzKSkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXIgJiYgbGlzdGVuZXIuZm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxlZ2F0aW9uVGFyZ2V0SWQgPSBtZS52ZXJpZnlEZWxlZ2F0aW9uUGF0aChsaXN0ZW5lciwgZGF0YS5wYXRoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWxlZ2F0aW9uVGFyZ2V0SWQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZlbnRGaXJlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2Ugb25seSB3YW50IG1vdXNlZW50ZXIgJiBsZWF2ZSB0byBmaXJlIG9uIHRoZWlyIHRvcCBsZXZlbCBub2Rlcywgbm90IGZvciBjaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSAnbW91c2VlbnRlcicgfHwgZXZlbnROYW1lID09PSAnbW91c2VsZWF2ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZlbnRGaXJlID0gIURvbUV2ZW50LnZlcmlmeU1vdXNlRW50ZXJMZWF2ZShjb21wb25lbnQsIGRhdGEsIGRlbGVnYXRpb25UYXJnZXRJZCwgZXZlbnROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcHJldmVudEZpcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKE5lby5nZXQoaWQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuZm4uYXBwbHkobGlzdGVuZXIuc2NvcGUgfHwgc2VsZiwgW2RhdGFdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFsaXN0ZW5lci5idWJibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWJibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB3ZSBkbyB3YW50IHRvIHRyaWdnZXIgdGhlIEZvY3VzTWFuYWdlciBhZnRlciBub3JtYWwgZG9tTGlzdGVuZXJzIG9uIHRoZXNlIGV2ZW50cyBnb3QgZXhlY3V0ZWRcbiAgICAgICAgICAgIGlmIChldmVudE5hbWUgPT09ICdmb2N1c2luJyB8fCBldmVudE5hbWUgPT09ICdmb2N1c291dCcpIHtcbiAgICAgICAgICAgICAgICBGb2N1c01hbmFnZXJbJ29uJyArIE5lby5jYXBpdGFsaXplKGV2ZW50TmFtZSldKHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50UGF0aDogcGF0aCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YSAgICAgICAgIDogZGF0YVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghYnViYmxlKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb25maWdcbiAgICAgKiBAcGFyYW0gc2NvcGVcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdlbmVyYXRlTGlzdGVuZXJDb25maWcoY29uZmlnLCBzY29wZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVsZWdhdGUgOiBjb25maWcuZGVsZWdhdGUsXG4gICAgICAgICAgICBldmVudE5hbWU6IGNvbmZpZy5ldmVudE5hbWUsXG4gICAgICAgICAgICBpZCAgICAgICA6IHNjb3BlLmlkLFxuICAgICAgICAgICAgb3B0cyAgICAgOiBjb25maWcsXG4gICAgICAgICAgICBzY29wZSAgICA6IGNvbmZpZy5zY29wZSAgIHx8IHNjb3BlLFxuICAgICAgICAgICAgdm5vZGVJZCAgOiBjb25maWcudm5vZGVJZCB8fCBzY29wZS5pZFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldEV2ZW50TmFtZShjb25maWcpIHtcbiAgICAgICAgbGV0IGV2ZW50TmFtZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKE5lby5pc09iamVjdChjb25maWcpKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb25maWcpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWV2ZW50Q29uZmlnS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZSA9IGtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBldmVudE5hbWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuZGVsZWdhdGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmV2ZW50TmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuaWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLm9wdHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLnNjb3BlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy52bm9kZUlkXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRMaXN0ZW5lcihjb25maWcpIHtcbiAgICAgICAgbGV0IGxpc3RlbmVycyA9IHRoaXMuaXRlbXMsXG4gICAgICAgICAgICBldmVudDtcblxuICAgICAgICBpZiAobGlzdGVuZXJzICYmIGxpc3RlbmVyc1tjb25maWcuaWRdKSB7XG4gICAgICAgICAgICBldmVudCA9IGxpc3RlbmVyc1tjb25maWcuaWRdW2NvbmZpZy5ldmVudE5hbWVdO1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3VudHMgbG9jYWwgZG9tRXZlbnQgbGlzdGVuZXJzIGZvciBhIGdpdmVuIGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBjb21wb25lbnRcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgbW91bnREb21MaXN0ZW5lcnMoY29tcG9uZW50KSB7XG4gICAgICAgIGxldCBsaXN0ZW5lcnMgICA9IHRoaXMuaXRlbXNbY29tcG9uZW50LmlkXSxcbiAgICAgICAgICAgIGxvY2FsRXZlbnRzID0gW107XG5cbiAgICAgICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMobGlzdGVuZXJzKS5mb3JFYWNoKChbZXZlbnROYW1lLCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lID0gZXZlbnQuZXZlbnROYW1lO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudE5hbWUgJiYgKGV2ZW50LmxvY2FsIHx8ICFnbG9iYWxEb21FdmVudHMuaW5jbHVkZXMoZXZlbnROYW1lKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdsb2NhbEV2ZW50cycsIGV2ZW50TmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsRXZlbnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgICA6IGV2ZW50TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAnZG9tRXZlbnRMaXN0ZW5lcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm5vZGVJZDogZXZlbnQudm5vZGVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobG9jYWxFdmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIE5lby53b3JrZXIuQXBwLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24gOiAnYWRkRG9tTGlzdGVuZXInLFxuICAgICAgICAgICAgICAgICAgICBhcHBOYW1lOiBjb21wb25lbnQuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzIDogbG9jYWxFdmVudHNcbiAgICAgICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWRkZWQgZG9tTGlzdGVuZXInLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXBwOiBHb3QgZXJyb3IgYXR0ZW1wdGluZyB0byBhZGQgYSBkb21MaXN0ZW5lcicsIGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5kZWxlZ2F0ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuZXZlbnROYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5pZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gY29uZmlnLmxvY2FsXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy5vcHRzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy5vcmlnaW5hbENvbmZpZ1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcub3duZXJJZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcucHJpb3JpdHlcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLnNjb3BlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy52bm9kZUlkXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGxpc3RlbmVyIGdvdCByZWdpc3RlcmVkIHN1Y2Nlc3NmdWxseSAoZmFsc2UgaW4gY2FzZSBpdCB3YXMgYWxyZWFkeSB0aGVyZSlcbiAgICAgKi9cbiAgICByZWdpc3Rlcihjb25maWcpIHtcbiAgICAgICAgbGV0IGFscmVhZHlSZWdpc3RlcmVkID0gZmFsc2UsXG4gICAgICAgICAgICBldmVudE5hbWUgICAgICAgICA9IGNvbmZpZy5ldmVudE5hbWUsXG4gICAgICAgICAgICBpZCAgICAgICAgICAgICAgICA9IGNvbmZpZy5pZCxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgICAgICAgID0gdGhpcy5pdGVtcyxcbiAgICAgICAgICAgIG9wdHMgICAgICAgICAgICAgID0gY29uZmlnLm9wdHMsXG4gICAgICAgICAgICBzY29wZSAgICAgICAgICAgICA9IGNvbmZpZy5zY29wZSxcbiAgICAgICAgICAgIGZuVHlwZSAgICAgICAgICAgID0gdHlwZW9mIG9wdHMsXG4gICAgICAgICAgICBmbiwgbGlzdGVuZXIsIGxpc3RlbmVyQ29uZmlnLCBsaXN0ZW5lcklkO1xuXG4gICAgICAgIGlmIChmblR5cGUgPT09ICdmdW5jdGlvbicgfHwgZm5UeXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgZm4gPSBvcHRzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm4gICAgPSBvcHRzLmZuO1xuICAgICAgICAgICAgc2NvcGUgPSBvcHRzLnNjb3BlIHx8IHNjb3BlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFsaXN0ZW5lcnNbaWRdKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnNbaWRdID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdGVuZXJzW2lkXVtldmVudE5hbWVdKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpZF1bZXZlbnROYW1lXTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdGVuZXIpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyW2tleV0uZm4udG9TdHJpbmcoKSA9PT0gZm4udG9TdHJpbmcoKSAmJiAvLyB0b2RvOiBhZGQgYSBiZXR0ZXIgY2hlY2tcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJba2V5XS5zY29wZSAgICAgICAgID09PSBzY29wZSAmJlxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcltrZXldLmRlbGVnYXRlICAgICAgPT09IGNvbmZpZy5kZWxlZ2F0ZVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBhbHJlYWR5UmVnaXN0ZXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnNbaWRdW2V2ZW50TmFtZV0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbHJlYWR5UmVnaXN0ZXJlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ21hbmFnZXIuRG9tRXZlbnQgcmVnaXN0ZXInLCBldmVudE5hbWUsIGNvbmZpZyk7XG5cbiAgICAgICAgbGlzdGVuZXJJZCA9IE5lby5nZXRJZCgnZG9tLWV2ZW50Jyk7XG5cbiAgICAgICAgY29uZmlnLmxpc3RlbmVySWQgPSBsaXN0ZW5lcklkO1xuXG4gICAgICAgIGxpc3RlbmVyQ29uZmlnID0ge1xuICAgICAgICAgICAgYnViYmxlICAgICAgICA6IGNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnYnViYmxlJykgPyBjb25maWcuYnViYmxlIDogb3B0cy5oYXNPd25Qcm9wZXJ0eSgnYnViYmxlJykgPyBvcHRzLmJ1YmJsZSA6IHRydWUsXG4gICAgICAgICAgICBkZWxlZ2F0ZSAgICAgIDogY29uZmlnLmRlbGVnYXRlLFxuICAgICAgICAgICAgZXZlbnROYW1lICAgICA6IGV2ZW50TmFtZSxcbiAgICAgICAgICAgIGZuICAgICAgICAgICAgOiBmbixcbiAgICAgICAgICAgIGlkICAgICAgICAgICAgOiBsaXN0ZW5lcklkLFxuICAgICAgICAgICAgbW91bnRlZCAgICAgICA6ICFjb25maWcubG9jYWwgJiYgZ2xvYmFsRG9tRXZlbnRzLmluY2x1ZGVzKGV2ZW50TmFtZSksXG4gICAgICAgICAgICBvcmlnaW5hbENvbmZpZzogY29uZmlnLm9yaWdpbmFsQ29uZmlnLFxuICAgICAgICAgICAgb3duZXJJZCAgICAgICA6IGNvbmZpZy5vd25lcklkLFxuICAgICAgICAgICAgcHJpb3JpdHkgICAgICA6IGNvbmZpZy5wcmlvcml0eSB8fCAxLFxuICAgICAgICAgICAgc2NvcGUgICAgICAgICA6IHNjb3BlLFxuICAgICAgICAgICAgdm5vZGVJZCAgICAgICA6IGNvbmZpZy52bm9kZUlkXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5tYXBbbGlzdGVuZXJJZF0gPSBsaXN0ZW5lckNvbmZpZztcblxuICAgICAgICBsaXN0ZW5lcnNbaWRdW2V2ZW50TmFtZV0ucHVzaChsaXN0ZW5lckNvbmZpZyk7XG5cbiAgICAgICAgbGlzdGVuZXJzW2lkXVtldmVudE5hbWVdLnNvcnQoKGEsIGIpID0+IGEucHJpb3JpdHkgPiBiLnByaW9yaXR5KTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm1hcCk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuZXZlbnROYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5pZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcub3B0c1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcuc2NvcGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLnZub2RlSWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc2NvcGVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBsaXN0ZW5lciBkaWQgZXhpc3QgYW5kIGdvdCByZW1vdmVkXG4gICAgICovXG4gICAgdW5yZWdpc3Rlcihjb25maWcsIHNjb3BlKSB7XG4gICAgICAgIC8vIHRvZG9cbiAgICAgICAgY29uc29sZS5sb2coJ3VucmVnaXN0ZXInLCBjb25maWcpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdlbmVyYXRlTGlzdGVuZXJDb25maWcoY29uZmlnLCBzY29wZSkpO1xuICAgICAgICByZXR1cm47XG5cbiAgICAgICAgbGV0IGxpc3RlbmVyID0gdGhpcy5nZXRMaXN0ZW5lcihjb25maWcpO1xuXG4gICAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xpc3RlbmVyIGZvdW5kJywgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gY29tcG9uZW50XG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gZG9tTGlzdGVuZXJzXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gb2xkRG9tTGlzdGVuZXJzXG4gICAgICovXG4gICAgdXBkYXRlRG9tTGlzdGVuZXJzKGNvbXBvbmVudCwgZG9tTGlzdGVuZXJzLCBvbGREb21MaXN0ZW5lcnMpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgcmVnaXN0ZXJlZExpc3RlbmVycyA9IG1lLml0ZW1zW2NvbXBvbmVudC5pZF0gfHwge30sXG4gICAgICAgICAgICBpLCBsZW4sIGxpc3RlbmVycztcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkb21MaXN0ZW5lcnMpKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvbGREb21MaXN0ZW5lcnMpKSB7XG4gICAgICAgICAgICAgICAgb2xkRG9tTGlzdGVuZXJzLmZvckVhY2gob2xkRG9tTGlzdGVuZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBmaW5kICYgcmVtb3ZlIG5vIGxvbmdlciBleGlzdGluZyBsaXN0ZW5lcnNcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkb21MaXN0ZW5lcnMuaW5jbHVkZXMob2xkRG9tTGlzdGVuZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgPSByZWdpc3RlcmVkTGlzdGVuZXJzW21lLmdldEV2ZW50TmFtZShvbGREb21MaXN0ZW5lcildIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSAgICAgICAgID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbiAgICAgICA9IGxpc3RlbmVycy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXJzW2ldLm9yaWdpbmFsQ29uZmlnID09PSBvbGREb21MaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUobGlzdGVuZXJzLCBsaXN0ZW5lcnNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYWRkIG5ldyBsaXN0ZW5lcnNcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycy5mb3JFYWNoKGRvbUxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhkb21MaXN0ZW5lcikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXZlbnRDb25maWdLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLnJlZ2lzdGVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxlZ2F0ZSAgICAgIDogdmFsdWUuZGVsZWdhdGUgfHwgZG9tTGlzdGVuZXIuZGVsZWdhdGUgfHwgJyMnICsgY29tcG9uZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZSAgICAgOiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgICAgICAgICAgICA6IGNvbXBvbmVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRzICAgICAgICAgIDogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxDb25maWc6IGRvbUxpc3RlbmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVySWQgICAgICAgOiBjb21wb25lbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUgICAgICAgICA6IGRvbUxpc3RlbmVyLnNjb3BlIHx8IGNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bm9kZUlkICAgICAgIDogdmFsdWUudm5vZGVJZCB8fCBjb21wb25lbnQuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5tb3VudGVkKSB7XG4gICAgICAgICAgICAgICAgbWUubW91bnREb21MaXN0ZW5lcnMoY29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlci5sb2dFcnJvcignQ29tcG9uZW50LmRvbUxpc3RlbmVycyBoYXZlIHRvIGJlIGFuIGFycmF5JywgY29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVuZGVkIGZvciBOZW8uY29udHJvbGxlci5Db21wb25lbnQgdG8gcmVwbGFjZSBsaXN0ZW5lciBwbGFjZWhvbGRlcnMgcHJvdmlkZWQgYXMgYSBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5jb21wb25lbnRJZFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbmZpZy5ldmVudEhhbmRsZXJNZXRob2RcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmV2ZW50SGFuZGxlck5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmV2ZW50TmFtZVxuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gY29uZmlnLnNjb3BlXG4gICAgICovXG4gICAgdXBkYXRlTGlzdGVuZXJQbGFjZWhvbGRlcihjb25maWcpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGl0ZW1zICAgICAgICAgID0gbWUuaXRlbXNbY29uZmlnLmNvbXBvbmVudElkXSB8fCB7fSxcbiAgICAgICAgICAgIGV2ZW50TGlzdGVuZXJzID0gaXRlbXNbY29uZmlnLmV2ZW50TmFtZV0gfHwgW10sXG4gICAgICAgICAgICBpICAgICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgICAgICA9IGV2ZW50TGlzdGVuZXJzLmxlbmd0aCxcbiAgICAgICAgICAgIGxpc3RlbmVyO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGxpc3RlbmVyID0gZXZlbnRMaXN0ZW5lcnNbaV07XG5cbiAgICAgICAgICAgIGlmIChsaXN0ZW5lci5mbiA9PT0gY29uZmlnLmV2ZW50SGFuZGxlck5hbWUpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5mbiAgICA9IGNvbmZpZy5ldmVudEhhbmRsZXJNZXRob2Q7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuc2NvcGUgPSBjb25maWcuc2NvcGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBsaXN0ZW5lclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHBhdGhcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbnxTdHJpbmd9IHRydWUgaW4gY2FzZSB0aGUgZGVsZWdhdGlvbiBzdHJpbmcgbWF0Y2hlcyB0aGUgZXZlbnQgcGF0aFxuICAgICAqL1xuICAgIHZlcmlmeURlbGVnYXRpb25QYXRoKGxpc3RlbmVyLCBwYXRoKSB7XG4gICAgICAgIGxldCBkZWxlZ2F0aW9uQXJyYXkgPSBsaXN0ZW5lci5kZWxlZ2F0ZS5zcGxpdCgnICcpLFxuICAgICAgICAgICAgaiAgICAgICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgICAgICA9IGRlbGVnYXRpb25BcnJheS5sZW5ndGgsXG4gICAgICAgICAgICBwYXRoTGVuICAgICAgICAgPSBwYXRoLmxlbmd0aCxcbiAgICAgICAgICAgIGhhc01hdGNoLCBpLCBpdGVtLCBpc0lkLCB0YXJnZXRJZDtcblxuICAgICAgICBmb3IgKGk9bGVuLTE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBoYXNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgaXRlbSAgICAgPSBkZWxlZ2F0aW9uQXJyYXlbaV07XG4gICAgICAgICAgICBpc0lkICAgICA9IGl0ZW0uc3RhcnRzV2l0aCgnIycpO1xuXG4gICAgICAgICAgICBpZiAoaXNJZCB8fCBpdGVtLnN0YXJ0c1dpdGgoJy4nKSkge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSBpdGVtLnN1YnN0cigxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICg7IGogPCBwYXRoTGVuOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIChpc0lkICYmIHBhdGhbal0uaWQgPT09IGl0ZW0pIHx8XG4gICAgICAgICAgICAgICAgICAgIHBhdGhbal0uY2xzLmluY2x1ZGVzKGl0ZW0pXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc01hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0SWQgPSBwYXRoW2pdLmlkO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaGFzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlbnN1cmUgdGhlIGRlbGVnYXRpb24gcGF0aCBpcyBhIGNoaWxkIG9mIHRoZSBvd25lciBjb21wb25lbnRzIHJvb3Qgbm9kZVxuICAgICAgICBmb3IgKDsgaiA8IHBhdGhMZW47IGorKykge1xuICAgICAgICAgICAgaWYgKHBhdGhbal0uaWQgPT09IGxpc3RlbmVyLnZub2RlSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0SWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gY29tcG9uZW50XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsZWdhdGlvblRhcmdldElkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyB2ZXJpZnlNb3VzZUVudGVyTGVhdmUoY29tcG9uZW50LCBkYXRhLCBkZWxlZ2F0aW9uVGFyZ2V0SWQsIGV2ZW50TmFtZSkge1xuICAgICAgICBsZXQgdGFyZ2V0SWQgPSBldmVudE5hbWUgPT09ICdtb3VzZWVudGVyJyA/IGRhdGEuZnJvbUVsZW1lbnRJZCA6IGRhdGEudG9FbGVtZW50SWQsXG4gICAgICAgICAgICBkZWxlZ2F0aW9uVmRvbTtcblxuICAgICAgICBpZiAodGFyZ2V0SWQgJiYgdGFyZ2V0SWQgIT09IGRlbGVnYXRpb25UYXJnZXRJZCkge1xuICAgICAgICAgICAgZGVsZWdhdGlvblZkb20gPSBWRG9tVXRpbC5maW5kVmRvbUNoaWxkKGNvbXBvbmVudC52ZG9tLCBkZWxlZ2F0aW9uVGFyZ2V0SWQpO1xuXG4gICAgICAgICAgICAvLyBkZWxlZ2F0aW9uVmRvbSBjYW4gYmUgdW5kZWZpbmVkIHdoZW4gZHJhZ2dpbmcgYSBwcm94eSBvdmVyIHRoZSBub2RlLlxuICAgICAgICAgICAgLy8gc2VlIGlzc3Vlcy8xMTM3IGZvciBkZXRhaWxzLlxuICAgICAgICAgICAgaWYgKCFkZWxlZ2F0aW9uVmRvbSB8fCBkZWxlZ2F0aW9uVmRvbS52ZG9tICYmIFZEb21VdGlsLmZpbmRWZG9tQ2hpbGQoZGVsZWdhdGlvblZkb20udmRvbSwgdGFyZ2V0SWQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhEb21FdmVudCk7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoRG9tRXZlbnQpO1xuXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7IiwiaW1wb3J0IENvcmVCYXNlIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuaW1wb3J0IE5lb0FycmF5IGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLm1hbmFnZXIuRm9jdXNcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgRm9jdXMgZXh0ZW5kcyBDb3JlQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYW5hZ2VyLkZvY3VzJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFuYWdlci5Gb2N1cycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdmb2N1cy1tYW5hZ2VyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2ZvY3VzLW1hbmFnZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gYXJyYXkgY29udGFpbmluZyBvcHRzIG9iamVjdHMuXG4gICAgICAgICAqIG9wdHMuY29tcG9uZW50UGF0aFxuICAgICAgICAgKiBvcHRzLmRhdGFcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W119IGhpc3Rvcnk9W11cbiAgICAgICAgICovXG4gICAgICAgIGhpc3Rvcnk6IFtdLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIERhdGUgb2JqZWN0IHdoZW4gdGhlIGxhc3QgZm9jdXNpbiBldmVudCBoYXMgb2NjdXJlZFxuICAgICAgICAgKiBAbWVtYmVyIHtEYXRlfG51bGx9IGxhc3RGb2N1c0luRGF0ZT1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGxhc3RGb2N1c0luRGF0ZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBEYXRlIG9iamVjdCB3aGVuIHRoZSBsYXN0IGZvY3Vzb3V0IGV2ZW50IGhhcyBvY2N1cmVkXG4gICAgICAgICAqIEBtZW1iZXIge0RhdGV8bnVsbH0gbGFzdEZvY3VzSW5EYXRlPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbGFzdEZvY3VzT3V0RGF0ZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBhbW91bnQgb2YgdGltZSBmb3IgYSBmb2N1c0luIHRvIG9jY3VyIGFmdGVyIHRoZSBsYXN0IGZvY3VzT3V0XG4gICAgICAgICAqIHRvIGJlIHRocmVhdGVkIGFzIGEgZm9jdXNtb3ZlXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gbWF4Rm9jdXNJbk91dEdhcD0xMFxuICAgICAgICAgKi9cbiAgICAgICAgbWF4Rm9jdXNJbk91dEdhcDogMTAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbWF4aW11bSBhbW91bnQgb2YgaXRlbXMgc3RvcmVkIGluc2lkZSB0aGUgaGlzdG9yeSBhcnJheVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IG1heEhpc3RvcnlMZW5ndGg9MjBcbiAgICAgICAgICovXG4gICAgICAgIG1heEhpc3RvcnlMZW5ndGg6IDIwXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgb3B0cy5jb21wb25lbnRQYXRoIENvbXBvbmVudCBpZHMgdXB3YXJkc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmRhdGEgZG9tIGV2ZW50IGluZm9zXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFkZFRvSGlzdG9yeShvcHRzKSB7XG4gICAgICAgIGxldCBoaXN0b3J5ID0gdGhpcy5oaXN0b3J5O1xuXG4gICAgICAgIGhpc3RvcnkudW5zaGlmdChvcHRzKTtcblxuICAgICAgICBpZiAoaGlzdG9yeS5sZW5ndGggPj0gdGhpcy5tYXhIaXN0b3J5TGVuZ3RoKSB7XG4gICAgICAgICAgICBoaXN0b3J5LnBvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBvcHRzLmNvbXBvbmVudFBhdGggQ29tcG9uZW50IGlkcyB1cHdhcmRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMuZGF0YSBkb20gZXZlbnQgaW5mb3NcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgZm9jdXNFbnRlcihvcHRzKSB7XG4gICAgICAgIHRoaXMuc2V0Q29tcG9uZW50Rm9jdXMob3B0cywgdHJ1ZSk7XG4gICAgICAgIHRoaXMuYWRkVG9IaXN0b3J5KG9wdHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgb3B0cy5jb21wb25lbnRQYXRoIENvbXBvbmVudCBpZHMgdXB3YXJkc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmRhdGEgZG9tIGV2ZW50IGluZm9zXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGZvY3VzTGVhdmUob3B0cykge1xuICAgICAgICB0aGlzLnNldENvbXBvbmVudEZvY3VzKG9wdHMsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHBhcmFtIHtBcnJheX0gIG9wdHMuY29tcG9uZW50UGF0aCBDb21wb25lbnQgaWRzIHVwd2FyZHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5kYXRhIGRvbSBldmVudCBpbmZvc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBmb2N1c01vdmUob3B0cykge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBoaXN0b3J5ICAgICAgICAgID0gbWUuaGlzdG9yeSxcbiAgICAgICAgICAgIG5ld0NvbXBvbmVudFBhdGggPSBvcHRzLmNvbXBvbmVudFBhdGgsXG4gICAgICAgICAgICBvbGRDb21wb25lbnRQYXRoID0gaGlzdG9yeVswXS5jb21wb25lbnRQYXRoLFxuICAgICAgICAgICAgZm9jdXNFbnRlciAgICAgICA9IE5lb0FycmF5LmRpZmZlcmVuY2UobmV3Q29tcG9uZW50UGF0aCwgb2xkQ29tcG9uZW50UGF0aCksXG4gICAgICAgICAgICBmb2N1c0xlYXZlICAgICAgID0gTmVvQXJyYXkuZGlmZmVyZW5jZShvbGRDb21wb25lbnRQYXRoLCBuZXdDb21wb25lbnRQYXRoKSxcbiAgICAgICAgICAgIGZvY3VzTW92ZSAgICAgICAgPSBOZW9BcnJheS5pbnRlcnNlY3Rpb24obmV3Q29tcG9uZW50UGF0aCwgb2xkQ29tcG9uZW50UGF0aCksXG4gICAgICAgICAgICBjb21wb25lbnQsIGRhdGE7XG5cbiAgICAgICAgbWUuc2V0Q29tcG9uZW50Rm9jdXMoe2NvbXBvbmVudFBhdGg6IGZvY3VzRW50ZXIsIGRhdGE6IG9wdHMuZGF0YX0sIHRydWUpO1xuICAgICAgICBtZS5zZXRDb21wb25lbnRGb2N1cyh7Y29tcG9uZW50UGF0aDogZm9jdXNMZWF2ZSwgZGF0YTogb3B0cy5kYXRhfSwgZmFsc2UpO1xuXG4gICAgICAgIGZvY3VzTW92ZS5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IE5lby5nZXRDb21wb25lbnQoaWQpO1xuXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmV3UGF0aDogb3B0cy5kYXRhLnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIG9sZFBhdGg6IGhpc3RvcnlbMF0uZGF0YS5wYXRoXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50Lm9uRm9jdXNNb3ZlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5vbkZvY3VzTW92ZShkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb21wb25lbnQuZmlyZSgnZm9jdXNNb3ZlJywgZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmFkZFRvSGlzdG9yeShvcHRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHBhcmFtIHtBcnJheX0gIG9wdHMuY29tcG9uZW50UGF0aCBDb21wb25lbnQgaWRzIHVwd2FyZHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5kYXRhIGRvbSBldmVudCBpbmZvc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbkZvY3VzaW4ob3B0cykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmxhc3RGb2N1c0luRGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgaWYgKG1lLmxhc3RGb2N1c091dERhdGUgJiYgbWUubGFzdEZvY3VzSW5EYXRlIC0gbWUubGFzdEZvY3VzT3V0RGF0ZSA8IG1lLm1heEZvY3VzSW5PdXRHYXApIHtcbiAgICAgICAgICAgIG1lLmZvY3VzTW92ZShvcHRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLmZvY3VzRW50ZXIob3B0cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHBhcmFtIHtBcnJheX0gIG9wdHMuY29tcG9uZW50UGF0aCBDb21wb25lbnQgaWRzIHVwd2FyZHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5kYXRhIGRvbSBldmVudCBpbmZvc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbkZvY3Vzb3V0KG9wdHMpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5sYXN0Rm9jdXNPdXREYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChtZS5sYXN0Rm9jdXNPdXREYXRlID4gbWUubGFzdEZvY3VzSW5EYXRlKSB7XG4gICAgICAgICAgICAgICAgbWUuZm9jdXNMZWF2ZShvcHRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgbWUubWF4Rm9jdXNJbk91dEdhcCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBvcHRzLmNvbXBvbmVudFBhdGggQ29tcG9uZW50IGlkcyB1cHdhcmRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMuZGF0YSBkb20gZXZlbnQgaW5mb3NcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGNvbnRhaW5zRm9jdXNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgc2V0Q29tcG9uZW50Rm9jdXMob3B0cywgY29udGFpbnNGb2N1cykge1xuICAgICAgICBsZXQgY29tcG9uZW50LCBoYW5kbGVyO1xuXG4gICAgICAgIG9wdHMuY29tcG9uZW50UGF0aC5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IE5lby5nZXRDb21wb25lbnQoaWQpO1xuXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmNvbnRhaW5zRm9jdXMgPSBjb250YWluc0ZvY3VzO1xuXG4gICAgICAgICAgICAgICAgaGFuZGxlciA9IGNvbnRhaW5zRm9jdXMgPyAnb25Gb2N1c0VudGVyJyA6ICdvbkZvY3VzTGVhdmUnO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRbaGFuZGxlcl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50W2hhbmRsZXJdKG9wdHMuZGF0YS5wYXRoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb21wb25lbnQuZmlyZShjb250YWluc0ZvY3VzID8gJ2ZvY3VzRW50ZXInIDogJ2ZvY3VzTGVhdmUnLCBvcHRzLmRhdGEucGF0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRm9jdXMpO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKEZvY3VzKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBCYXNlICAgICBmcm9tICcuL0Jhc2UubWpzJztcbmltcG9ydCBDb3JlQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLm1hbmFnZXIuSW5zdGFuY2VcbiAqIEBleHRlbmRzIE5lby5tYW5hZ2VyLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgSW5zdGFuY2UgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1hbmFnZXIuSW5zdGFuY2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5tYW5hZ2VyLkluc3RhbmNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2luc3RhbmNlLW1hbmFnZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnaW5zdGFuY2UtbWFuYWdlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBDb3JlQmFzZS5pbnN0YW5jZU1hbmFnZXJBdmFpbGFibGUgPSB0cnVlO1xuXG4gICAgICAgIG1lLmNvbnN1bWVOZW9JZE1hcCgpO1xuXG4gICAgICAgIE5lby5nZXQgPSBtZS5nZXQuYmluZChtZSk7IC8vIGFsaWFzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgYWxsIGlkcyB3aGljaCBnb3QgYXBwbGllZCB0byB0aGUgTmVvIG5hbWVzcGFjZSBiZWZvcmUgdGhpcyBpbnN0YW5jZSBnb3QgY3JlYXRlZFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBjb25zdW1lTmVvSWRNYXAoKSB7XG4gICAgICAgIGlmIChOZW8uaWRNYXApIHtcbiAgICAgICAgICAgIHRoaXMuYWRkKE9iamVjdC52YWx1ZXMoTmVvLmlkTWFwKSk7XG4gICAgICAgICAgICBkZWxldGUgTmVvLmlkTWFwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhJbnN0YW5jZSk7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoSW5zdGFuY2UpO1xuXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby51dGlsLkFycmF5XG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIE5lb0FycmF5IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby51dGlsLkFycmF5J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5BcnJheSdcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBpdGVtIG9yIEFycmF5IG9mIGl0ZW1zIHRvIGFuIGFycmF5IGluIGNhc2UgaXQgZG9lcyBub3QgYWxyZWFkeSBleGlzdC5cbiAgICAgKiBPbmx5IHByaW1pdGl2ZSBpdGVtcyB3aWxsIGdldCBmb3VuZCBhcyBkdXBsaWNhdGVzXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHsqfSBpdGVtc1xuICAgICAqL1xuICAgIHN0YXRpYyBhZGQoYXJyLCBpdGVtcykge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbXMpKSB7XG4gICAgICAgICAgICBpdGVtcyA9IFtpdGVtc107XG4gICAgICAgIH1cblxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKCFhcnIuaW5jbHVkZXMoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBpdGVtcyB3aGljaCBhcmUgcHJlc2VudCBpbiBhcnJheTEsIGJ1dCBub3QgaW4gYXJyYXkyXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkxPVtdXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkyPVtdXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyBkaWZmZXJlbmNlKGFycmF5MT1bXSwgYXJyYXkyPVtdKSB7XG4gICAgICAgIHJldHVybiBhcnJheTEuZmlsdGVyKGl0ZW0gPT4gIWFycmF5Mi5pbmNsdWRlcyhpdGVtKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBpbmRleCBvZiBpdGVtIGlzID4gLTFcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW1cbiAgICAgKi9cbiAgICBzdGF0aWMgaGFzSXRlbShhcnIsIGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGFyci5pbmNsdWRlcyhpdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGl0ZW1zIHdoaWNoIGFyZSBwcmVzZW50IGluIGFycmF5MSBhbmQgYXJyYXkyXG4gICAgICogT25seSBzdXBwb3J0cyBwcmltaXRpdmUgaXRlbXNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTE9W11cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTI9W11cbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgc3RhdGljIGludGVyc2VjdGlvbihhcnJheTE9W10sIGFycmF5Mj1bXSkge1xuICAgICAgICByZXR1cm4gYXJyYXkxLmZpbHRlcihpdGVtID0+IGFycmF5Mi5pbmNsdWRlcyhpdGVtKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIGFsbCBpdGVtcyBvZiBhcnJheTEgYXJlIHByZXNlbnQgaW4gYXJyYXkgMlxuICAgICAqIFN1cHBvcnRzIEFycmF5cyBjb250YWluaW5nIE9iamVjdHMsIG5vdCBBcnJheXMgY29udGFpbmluZyBBcnJheXNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTE9W11cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTI9W11cbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNFcXVhbChhcnJheTE9W10sIGFycmF5Mj1bXSkge1xuICAgICAgICBsZXQgaSAgICA9IDAsXG4gICAgICAgICAgICBsZW4gID0gYXJyYXkxLmxlbmd0aCxcbiAgICAgICAgICAgIGxlbjIgPSBhcnJheTIubGVuZ3RoLFxuICAgICAgICAgICAgaGFzT2JqZWN0LCBqLCB2YWx1ZTtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGFycmF5MVtpXTtcblxuICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBoYXNPYmplY3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBqICAgICAgICAgPSAwO1xuXG4gICAgICAgICAgICAgICAgZm9yICg7IGogPCBsZW4yOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdChhcnJheTJbal0pICYmIE5lby51dGlsLk9iamVjdC5pc0VxdWFsKHZhbHVlLCBhcnJheTJbal0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNPYmplY3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWhhc09iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlIGlmICghYXJyYXkyLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnJheTEubGVuZ3RoID09PSBhcnJheTIubGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdmVzIGFuIGl0ZW0gaW5zaWRlIGFyciBmcm9tIGZyb21JbmRleCB0byB0b0luZGV4XG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGZyb21JbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB0b0luZGV4XG4gICAgICovXG4gICAgc3RhdGljIG1vdmUoYXJyLCBmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICAgICAgaWYgKGZyb21JbmRleCA9PT0gdG9JbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIGFycjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmcm9tSW5kZXggPj0gYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgZnJvbUluZGV4ID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICBhcnIuc3BsaWNlKHRvSW5kZXgsIDAsIGFyci5zcGxpY2UoZnJvbUluZGV4LCAxKVswXSk7XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbiBpdGVtIG9yIGFycmF5IG9mIGl0ZW1zIGZyb20gYW4gYXJyYXkuIE9ubHkgcHJpbWl0aXZlIGl0ZW1zIHdpbGwgZ2V0IGZvdW5kXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHsqfSBpdGVtc1xuICAgICAqL1xuICAgIHN0YXRpYyByZW1vdmUoYXJyLCBpdGVtcykge1xuICAgICAgICBsZXQgaW5kZXg7XG5cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xuICAgICAgICAgICAgaXRlbXMgPSBbaXRlbXNdO1xuICAgICAgICB9XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gaXRlbSBmcm9tIGFuIGFycmF5IGluIGNhc2UgaXQgZG9lcyAgZXhpc3QsIG90aGVyd2lzZSBhZGRzIGl0XG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHsqfSBpdGVtXG4gICAgICovXG4gICAgc3RhdGljIHRvZ2dsZShhcnIsIGl0ZW0pIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzSXRlbShhcnIsIGl0ZW0pKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZShhcnIsIGl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGQoYXJyLCBpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgaXRlbXMgd2hpY2ggYXJlIHByZXNlbnQgaW4gYXJyYXkxIGFuZCBhcnJheTJcbiAgICAgKiBPbmx5IHN1cHBvcnRzIHByaW1pdGl2ZSBpdGVtc1xuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5MVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5MlxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgdW5pb24oYXJyYXkxLCBhcnJheTIpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdLFxuICAgICAgICAgICAgbWVyZ2UgID0gYXJyYXkxLmNvbmNhdChhcnJheTIpLFxuICAgICAgICAgICAgbGVuICAgID0gbWVyZ2UubGVuZ3RoLFxuICAgICAgICAgICAgYXNzb2MgID0ge30sXG4gICAgICAgICAgICBpdGVtO1xuXG4gICAgICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICAgICAgaXRlbSA9IG1lcmdlW2xlbl07XG5cbiAgICAgICAgICAgIGlmICghYXNzb2NbaXRlbV0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQudW5zaGlmdChpdGVtKTtcbiAgICAgICAgICAgICAgICBhc3NvY1tpdGVtXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gaXRlbSBvciBBcnJheSBvZiBpdGVtcyB0byBhbiBhcnJheSBpbiBjYXNlIGl0IGRvZXMgbm90IGFscmVhZHkgZXhpc3QuXG4gICAgICogT25seSBwcmltaXRpdmUgaXRlbXMgd2lsbCBnZXQgZm91bmQgYXMgZHVwbGljYXRlc1xuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbXNcbiAgICAgKi9cbiAgICBzdGF0aWMgdW5zaGlmdChhcnIsIGl0ZW1zKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gW2l0ZW1zXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoIWFyci5pbmNsdWRlcyhpdGVtKSkge1xuICAgICAgICAgICAgICAgIGFyci51bnNoaWZ0KGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE5lb0FycmF5KTtcblxuZXhwb3J0IGRlZmF1bHQgTmVvQXJyYXk7IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby51dGlsLkhhc2hIaXN0b3J5XG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIEhhc2hIaXN0b3J5IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZXMgdGhlIGNvcmUvT2JzZXJ2YWJsZS5tanMgbWl4aW5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT10cnVlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIG9ic2VydmFibGU6IHRydWVcbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby51dGlsLkNsYXNzU3lzdGVtJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5IYXNoSGlzdG9yeScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdoYXNoLWhpc3RvcnknXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnaGFzaC1oaXN0b3J5JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gbWF4SXRlbXM9NTBcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbWF4SXRlbXM6IDUwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IHN0YWNrPVtdXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHN0YWNrOiBbXVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZmlyc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YWNrWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXRDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2subGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5hcHBOYW1lXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEuaGFzaFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmhhc2hTdHJpbmdcbiAgICAgKi9cbiAgICBwdXNoKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5zdGFjay51bnNoaWZ0KGRhdGEpO1xuXG4gICAgICAgIGlmIChtZS5zdGFjay5sZW5ndGggPiBtZS5tYXhJdGVtcykge1xuICAgICAgICAgICAgbWUuc3RhY2subGVuZ3RoID0gbWUubWF4SXRlbXM7XG4gICAgICAgIH1cblxuICAgICAgICBtZS5maXJlKCdjaGFuZ2UnLCBkYXRhLCBtZS5zdGFja1sxXSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIYXNoSGlzdG9yeSk7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoSGFzaEhpc3RvcnkpO1xuXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby51dGlsLlZEb21cbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgVkRvbSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udXRpbC5WRG9tJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5WRG9tJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcmVtb3ZlSWRzPXRydWVdXG4gICAgICogQHJldHVybnMge09iamVjdH0gY2xvbmVkIHZkb21cbiAgICAgKi9cbiAgICBzdGF0aWMgY2xvbmUodmRvbSwgcmVtb3ZlSWRzPXRydWUpIHtcbiAgICAgICAgY29uc3QgY2xvbmUgPSBOZW8uY2xvbmUodmRvbSwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKHJlbW92ZUlkcykge1xuICAgICAgICAgICAgZGVsZXRlIGNsb25lLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNsb25lLmNuKSB7XG4gICAgICAgICAgICBjbG9uZS5jbi5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsb25lLmNuW2luZGV4XSA9IFZEb20uY2xvbmUoaXRlbSwgcmVtb3ZlSWRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlYXJjaCB2ZG9tIGNoaWxkIG5vZGVzIGJ5IGlkIG9yIG9wdHMgb2JqZWN0IGZvciBhIGdpdmVuIHZkb20gdHJlZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBvcHRzIEVpdGhlciBhbiBvYmplY3QgY29udGFpbmluZyB2ZG9tIG5vZGUgYXR0cmlidXRlcyBvciBhIHN0cmluZyBiYXNlZCBpZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbaW5kZXhdIEludGVybmFsIGZsYWcsIGRvIG5vdCB1c2UgaXRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3BhcmVudE5vZGVdIEludGVybmFsIGZsYWcsIGRvIG5vdCB1c2UgaXRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqICAgICB7TnVtYmVyfSBpbmRleFxuICAgICAqICAgICB7U3RyaW5nfSBwYXJlbnRJZFxuICAgICAqICAgICB7T2JqZWN0fSB2ZG9tXG4gICAgICovXG4gICAgc3RhdGljIGZpbmRWZG9tQ2hpbGQodmRvbSwgb3B0cywgaW5kZXgsIHBhcmVudE5vZGUpIHtcbiAgICAgICAgaW5kZXggPSBpbmRleCB8fCAwO1xuICAgICAgICBvcHRzICA9IHR5cGVvZiBvcHRzICE9PSAnc3RyaW5nJyA/IG9wdHMgOiB7aWQ6b3B0c307XG5cbiAgICAgICAgbGV0IGNoaWxkICAgICAgPSBudWxsLFxuICAgICAgICAgICAgbWF0Y2hBcnJheSA9IFtdLFxuICAgICAgICAgICAgc3R5bGVNYXRjaCA9IHRydWUsXG4gICAgICAgICAgICBpICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgPSB2ZG9tLmNuICYmIHZkb20uY24ubGVuZ3RoLFxuICAgICAgICAgICAgb3B0c0FycmF5LCBvcHRzTGVuZ3RoLCBzdWJDaGlsZDtcblxuICAgICAgICBvcHRzQXJyYXkgID0gT2JqZWN0LmVudHJpZXMob3B0cyk7XG4gICAgICAgIG9wdHNMZW5ndGggPSBvcHRzQXJyYXkubGVuZ3RoO1xuXG4gICAgICAgIG9wdHNBcnJheS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmICh2ZG9tLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2goa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Nscyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBOZW8uaXNBcnJheSh2ZG9tW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZkb21ba2V5XS5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgdmRvbVtrZXldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ZG9tW2tleV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKE5lby5pc0FycmF5KHZhbHVlKSAmJiBOZW8uaXNBcnJheSh2ZG9tW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kbzogZWl0aGVyIHNlYXJjaCB0aGUgdmRvbSBhcnJheSBmb3IgYWxsIGtleXMgb3IgY29tcGFyZSBpZiB0aGUgYXJyYXlzIGFyZSBlcXVhbC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpbmRWZG9tQ2hpbGQ6IGNscyBtYXRjaGluZyBub3Qgc3VwcG9ydGVkIGZvciB0YXJnZXQgJiBzb3VyY2UgdHlwZXMgb2YgQXJyYXlzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3R5bGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHZkb21ba2V5XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmRvbVtrZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChOZW8uaXNPYmplY3QodmFsdWUpICYmIE5lby5pc09iamVjdCh2ZG9tW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWUpLmZvckVhY2goKFtzdHlsZUtleSwgc3R5bGVWYWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodmRvbVtrZXldLmhhc093blByb3BlcnR5KHN0eWxlS2V5KSAmJiB2ZG9tW2tleV1bc3R5bGVLZXldID09PSBzdHlsZVZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpbmRWZG9tQ2hpbGQ6IHN0eWxlIG1hdGNoaW5nIG5vdCBzdXBwb3J0ZWQgZm9yIG1peGVkIHRhcmdldCAmIHNvdXJjZSB0eXBlcyAoT2JqZWN0IFZTIFN0cmluZyknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZkb21ba2V5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaEFycmF5Lmxlbmd0aCA9PT0gb3B0c0xlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpbmRleCAgICAgOiBpbmRleCxcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlOiBwYXJlbnROb2RlLFxuICAgICAgICAgICAgICAgIHZkb20gICAgICA6IHZkb21cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmRvbS5jbikge1xuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh2ZG9tLmNuW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YkNoaWxkID0gVkRvbS5maW5kVmRvbUNoaWxkKHZkb20uY25baV0sIG9wdHMsIGksIHZkb20pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggICAgIDogc3ViQ2hpbGQuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZTogc3ViQ2hpbGQucGFyZW50Tm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZG9tICAgICAgOiBzdWJDaGlsZC52ZG9tXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2Ugc2hvcnRjdXQgZm9yIGZpbmRWZG9tQ2hpbGQodmRvbSwge2ZsYWc6IGZsYWd9KTtcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmbGFnIFRoZSBmbGFnIHJlZmVyZW5jZSBzcGVjaWZpZWQgb24gdGhlIHRhcmdldCB2ZG9tIGNoaWxkIG5vZGVcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB2ZG9tXG4gICAgICovXG4gICAgc3RhdGljIGdldEJ5RmxhZyh2ZG9tLCBmbGFnKSB7XG4gICAgICAgIGxldCBub2RlID0gVkRvbS5maW5kVmRvbUNoaWxkKHZkb20sIHtmbGFnOiBmbGFnfSk7XG4gICAgICAgIHJldHVybiBub2RlICYmIG5vZGUudmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGlkcyBvZiBhbGwgY2hpbGQgbm9kZXMgb2YgdGhlIGdpdmVuIHZkb20gdHJlZVxuICAgICAqIEBwYXJhbSB2ZG9tXG4gICAgICogQHBhcmFtIFtjaGlsZElkcz1bXV1cbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IGNoaWxkSWRzXG4gICAgICovXG4gICAgc3RhdGljIGdldENoaWxkSWRzKHZkb20sIGNoaWxkSWRzPVtdKSB7XG4gICAgICAgIGxldCBjaGlsZE5vZGVzID0gdmRvbSAmJiB2ZG9tLmNuIHx8IFtdO1xuXG4gICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZE5vZGUgPT4ge1xuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS5pZCkge1xuICAgICAgICAgICAgICAgIGNoaWxkSWRzLnB1c2goY2hpbGROb2RlLmlkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hpbGRJZHMgPSBWRG9tLmdldENoaWxkSWRzKGNoaWxkTm9kZSwgY2hpbGRJZHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY2hpbGRJZHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Q29sdW1uTm9kZXModmRvbSwgaW5kZXgpIHtcbiAgICAgICAgbGV0IGNvbHVtbk5vZGVzID0gW107XG5cbiAgICAgICAgaWYgKHZkb20uY24pIHtcbiAgICAgICAgICAgIHZkb20uY24uZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyb3cuY24gJiYgcm93LmNuW2luZGV4XSkge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW5Ob2Rlcy5wdXNoKHJvdy5jbltpbmRleF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbHVtbk5vZGVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgc3RhdGljIGdldENvbHVtbk5vZGVzSWRzKHZkb20sIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBWRG9tLmdldENvbHVtbk5vZGVzKHZkb20sIGluZGV4KS5tYXAoZSA9PiBlLmlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZsYWdcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBbbWF0Y2hBcnJheV1cbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IGFuIGFycmF5IG9mIHZkb20gbm9kZXMgd2hpY2ggbWF0Y2ggdGhlIGZsYWdcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0RmxhZ3ModmRvbSwgZmxhZywgbWF0Y2hBcnJheSkge1xuICAgICAgICBpZiAoIW1hdGNoQXJyYXkpIHtcbiAgICAgICAgICAgIG1hdGNoQXJyYXkgPSBbXTtcblxuICAgICAgICAgICAgaWYgKHZkb20uZmxhZyA9PT0gZmxhZykge1xuICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh2ZG9tKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB2ZG9tICYmIHZkb20uY24gfHwgW107XG5cbiAgICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkTm9kZSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlLmZsYWcgPT09IGZsYWcpIHtcbiAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2goY2hpbGROb2RlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0Y2hBcnJheSA9IFZEb20uZ2V0RmxhZ3MoY2hpbGROb2RlLCBmbGFnLCBtYXRjaEFycmF5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG1hdGNoQXJyYXk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0IGEgZ2l2ZW4gbm9kZVRvSW5zZXJ0IGFmdGVyIGEgdGFyZ2V0Tm9kZSBpbnNpZGUgYSBnaXZlbiB2ZG9tIHRyZWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbSBUaGUgdmRvbSB0cmVlIGNvbnRhaW5pbmcgdGhlIHRhcmdldE5vZGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbm9kZVRvSW5zZXJ0IFRoZSBuZXcgdmRvbSB0byBpbnNlcnRcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IHRhcmdldE5vZGVJZCBFaXRoZXIgYSB2ZG9tIG5vZGUgb3IgYSB2ZG9tIG5vZGUgaWRcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaW5zZXJ0QWZ0ZXJOb2RlKHZkb20sIG5vZGVUb0luc2VydCwgdGFyZ2V0Tm9kZUlkKSB7XG4gICAgICAgIHJldHVybiBWRG9tLmluc2VydE5vZGUodmRvbSwgbm9kZVRvSW5zZXJ0LCB0YXJnZXROb2RlSWQsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnNlcnQgYSBnaXZlbiBub2RlVG9JbnNlcnQgYmVmb3JlIGEgdGFyZ2V0Tm9kZSBpbnNpZGUgYSBnaXZlbiB2ZG9tIHRyZWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbSBUaGUgdmRvbSB0cmVlIGNvbnRhaW5pbmcgdGhlIHRhcmdldE5vZGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbm9kZVRvSW5zZXJ0IFRoZSBuZXcgdmRvbSB0byBpbnNlcnRcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IHRhcmdldE5vZGVJZCBFaXRoZXIgYSB2ZG9tIG5vZGUgb3IgYSB2ZG9tIG5vZGUgaWRcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaW5zZXJ0QmVmb3JlTm9kZSh2ZG9tLCBub2RlVG9JbnNlcnQsIHRhcmdldE5vZGVJZCkge1xuICAgICAgICByZXR1cm4gVkRvbS5pbnNlcnROb2RlKHZkb20sIG5vZGVUb0luc2VydCwgdGFyZ2V0Tm9kZUlkLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnNlcnQgYSBnaXZlbiBub2RlVG9JbnNlcnQgYmVmb3JlIGEgdGFyZ2V0Tm9kZSBpbnNpZGUgYSBnaXZlbiB2ZG9tIHRyZWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbSBUaGUgdmRvbSB0cmVlIGNvbnRhaW5pbmcgdGhlIHRhcmdldE5vZGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbm9kZVRvSW5zZXJ0IFRoZSBuZXcgdmRvbSB0byBpbnNlcnRcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IHRhcmdldE5vZGVJZCBFaXRoZXIgYSB2ZG9tIG5vZGUgb3IgYSB2ZG9tIG5vZGUgaWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGluc2VydEJlZm9yZSB0cnVlIGluc2VydHMgdGhlIG5ldyBub2RlIGF0IHRoZSBzYW1lIGluZGV4LCBpbmRleCsxIG90aGVyd2lzZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpbnNlcnROb2RlKHZkb20sIG5vZGVUb0luc2VydCwgdGFyZ2V0Tm9kZUlkLCBpbnNlcnRCZWZvcmUpIHtcbiAgICAgICAgaWYgKE5lby5pc09iamVjdCh0YXJnZXROb2RlSWQpKSB7XG4gICAgICAgICAgICB0YXJnZXROb2RlSWQgPSB0YXJnZXROb2RlSWQuaWQ7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdGFyZ2V0Tm9kZSA9IFZEb20uZmluZFZkb21DaGlsZCh2ZG9tLCB7aWQ6IHRhcmdldE5vZGVJZH0pLFxuICAgICAgICAgICAgaW5kZXg7XG5cbiAgICAgICAgaWYgKHRhcmdldE5vZGUpIHtcbiAgICAgICAgICAgIGluZGV4ID0gaW5zZXJ0QmVmb3JlID8gdGFyZ2V0Tm9kZS5pbmRleCA6IHRhcmdldE5vZGUuaW5kZXggKyAxO1xuICAgICAgICAgICAgdGFyZ2V0Tm9kZS5wYXJlbnROb2RlLmNuLnNwbGljZShpbmRleCwgMCwgbm9kZVRvSW5zZXJ0KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlYXJjaCB2ZG9tIGNoaWxkIG5vZGVzIGJ5IGlkIG9yIG9wdHMgb2JqZWN0IGZvciBhIGdpdmVuIHZkb20gdHJlZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbdmRvbV1cbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG9wdHMgRWl0aGVyIGFuIG9iamVjdCBjb250YWluaW5nIHZkb20gbm9kZSBhdHRyaWJ1dGVzIG9yIGEgc3RyaW5nIGJhc2VkIGlkXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgbm9kZSB3YXMgZm91bmQgJiByZW1vdmVkXG4gICAgICovXG4gICAgc3RhdGljIHJlbW92ZVZkb21DaGlsZCh2ZG9tLCBvcHRzKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IFZEb20uZmluZFZkb21DaGlsZCh2ZG9tLCBvcHRzKTtcblxuICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudE5vZGUuY24uc3BsaWNlKGNoaWxkLmluZGV4LCAxKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzIGEgY2hpbGQgbm9kZSBpbnNpZGUgYSB2ZG9tIHRyZWUgYnkgYSBnaXZlbiBpZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG5ld0NoaWxkTm9kZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlIG5vZGUgd2FzIGZvdW5kIGFuZCByZXBsYWNlZFxuICAgICAqL1xuICAgIHN0YXRpYyByZXBsYWNlVmRvbUNoaWxkKHZkb20sIGlkLCBuZXdDaGlsZE5vZGUpIHtcbiAgICAgICAgbGV0IGNuICA9IHZkb20uY24gfHwgW10sXG4gICAgICAgICAgICBpICAgPSAwLFxuICAgICAgICAgICAgbGVuID0gY24ubGVuZ3RoLFxuICAgICAgICAgICAgY2hpbGROb2RlO1xuXG4gICAgICAgIGlmICh2ZG9tLmlkID09PSBpZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdyZXBsYWNlVmRvbUNoaWxkOiB0YXJnZXQgaWQgbWF0Y2hlcyB0aGUgcm9vdCB2bm9kZSBpZDogJyArIGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IGNuW2ldO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIGNuW2ldID0gbmV3Q2hpbGROb2RlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVkRvbS5yZXBsYWNlVmRvbUNoaWxkKGNoaWxkTm9kZSwgaWQsIG5ld0NoaWxkTm9kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBOZW8udmRvbS5IZWxwZXIgd2lsbCBjcmVhdGUgaWRzIGZvciBlYWNoIHZub2RlLCBzbyB3ZSBuZWVkIHRvIHN5bmMgdGhlbSBpbnRvIHRoZSB2ZG9tXG4gICAgICogQHBhcmFtIHtOZW8udmRvbS5WTm9kZX0gdm5vZGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxuICAgICAqL1xuICAgIHN0YXRpYyBzeW5jVmRvbUlkcyh2bm9kZSwgdmRvbSkge1xuICAgICAgICBpZiAodm5vZGUgJiYgdmRvbSkge1xuICAgICAgICAgICAgbGV0IGNoaWxkTm9kZXMgPSB2ZG9tLmNoaWxkTm9kZXMgfHwgdmRvbS5jbixcbiAgICAgICAgICAgICAgICBjbiwgaSwgbGVuO1xuXG4gICAgICAgICAgICBpZiAodm5vZGUuaWQgJiYgdm5vZGUuaWQgIT09IHZkb20uaWQpIHtcbiAgICAgICAgICAgICAgICB2ZG9tLmlkID0gdm5vZGUuaWQ7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Zkb20gaWQgc2V0IHRvJywgdm5vZGUuaWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2Rlcykge1xuICAgICAgICAgICAgICAgIGNuICAgPSBjaGlsZE5vZGVzLmZpbHRlcihpdGVtID0+IGl0ZW0ucmVtb3ZlRG9tICE9PSB0cnVlKTtcbiAgICAgICAgICAgICAgICBpICAgID0gMDtcbiAgICAgICAgICAgICAgICBsZW4gID0gY24gJiYgY24ubGVuZ3RoIHx8IDA7XG5cbiAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2bm9kZS5jaGlsZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBWRG9tLnN5bmNWZG9tSWRzKHZub2RlLmNoaWxkTm9kZXNbaV0sIGNuW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVkRvbSk7XG5cbmV4cG9ydCBkZWZhdWx0IFZEb207IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby51dGlsLlZOb2RlXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIFZOb2RlIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby51dGlsLlZOb2RlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5WTm9kZSdcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogU2VhcmNoIHZub2RlIGNoaWxkIG5vZGVzIGJ5IGlkIG9yIG9wdHMgb2JqZWN0IGZvciBhIGdpdmVuIHZkb20gdHJlZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2bm9kZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gb3B0cyBFaXRoZXIgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdmRvbSBub2RlIGF0dHJpYnV0ZXMgb3IgYSBzdHJpbmcgYmFzZWQgaWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2luZGV4XSBJbnRlcm5hbCBmbGFnLCBkbyBub3QgdXNlIGl0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtwYXJlbnROb2RlXSBJbnRlcm5hbCBmbGFnLCBkbyBub3QgdXNlIGl0XG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKiAgICAge051bWJlcn0gaW5kZXhcbiAgICAgKiAgICAge1N0cmluZ30gcGFyZW50SWRcbiAgICAgKiAgICAge09iamVjdH0gdm5vZGVcbiAgICAgKi9cbiAgICBzdGF0aWMgZmluZENoaWxkVm5vZGUodm5vZGUsIG9wdHMsIGluZGV4LCBwYXJlbnROb2RlKSB7XG4gICAgICAgIGluZGV4ID0gaW5kZXggfHwgMDtcbiAgICAgICAgb3B0cyAgPSB0eXBlb2Ygb3B0cyAhPT0gJ3N0cmluZycgPyBvcHRzIDoge2lkOiBvcHRzfTtcblxuICAgICAgICBsZXQgYXR0ck1hdGNoICA9IHRydWUsXG4gICAgICAgICAgICBtYXRjaEFycmF5ID0gW10sXG4gICAgICAgICAgICBzdHlsZU1hdGNoID0gdHJ1ZSxcbiAgICAgICAgICAgIGkgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgICA9IHZub2RlLmNoaWxkTm9kZXMgJiYgdm5vZGUuY2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgICBvcHRzQXJyYXksIG9wdHNMZW5ndGgsIHN1YkNoaWxkO1xuXG4gICAgICAgIG9wdHNBcnJheSAgPSBPYmplY3QuZW50cmllcyhvcHRzKTtcbiAgICAgICAgb3B0c0xlbmd0aCA9IG9wdHNBcnJheS5sZW5ndGg7XG5cbiAgICAgICAgb3B0c0FycmF5LmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZub2RlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2goa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdCh2YWx1ZSkgJiYgTmVvLmlzT2JqZWN0KHZub2RlW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWUpLmZvckVhY2goKFthdHRyS2V5LCBhdHRyVmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHZub2RlW2tleV0uaGFzT3duUHJvcGVydHkoYXR0cktleSkgJiYgdm5vZGVba2V5XVthdHRyS2V5XSA9PT0gYXR0clZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ck1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRyTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjbGFzc05hbWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgTmVvLmlzQXJyYXkodm5vZGVba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodm5vZGVba2V5XS5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB0eXBlb2Ygdm5vZGVba2V5XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodm5vZGVba2V5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoTmVvLmlzQXJyYXkodmFsdWUpICYmIE5lby5pc0FycmF5KHZub2RlW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kbzogZWl0aGVyIHNlYXJjaCB0aGUgdm5vZGUgYXJyYXkgZm9yIGFsbCBrZXlzIG9yIGNvbXBhcmUgaWYgdGhlIGFycmF5cyBhcmUgZXF1YWwuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmaW5kQ2hpbGRWbm9kZTogY2xzIG1hdGNoaW5nIG5vdCBzdXBwb3J0ZWQgZm9yIHRhcmdldCAmIHNvdXJjZSB0eXBlcyBvZiBBcnJheXMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHlsZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KHZhbHVlKSAmJiBOZW8uaXNPYmplY3Qodm5vZGVba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZSkuZm9yRWFjaCgoW3N0eWxlS2V5LCBzdHlsZVZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh2bm9kZVtrZXldLmhhc093blByb3BlcnR5KHN0eWxlS2V5KSAmJiB2bm9kZVtrZXldW3N0eWxlS2V5XSA9PT0gc3R5bGVWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZub2RlW2tleV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWF0Y2hBcnJheS5sZW5ndGggPT09IG9wdHNMZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaW5kZXggICAgIDogaW5kZXgsXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZTogcGFyZW50Tm9kZSxcbiAgICAgICAgICAgICAgICB2bm9kZSAgICAgOiB2bm9kZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2bm9kZS5jaGlsZE5vZGVzKSB7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc3ViQ2hpbGQgPSBWTm9kZS5maW5kQ2hpbGRWbm9kZSh2bm9kZS5jaGlsZE5vZGVzW2ldLCBvcHRzLCBpLCB2bm9kZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc3ViQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1YkNoaWxkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIGEgY2hpbGQgdm5vZGUgaW5zaWRlIGEgdm5vZGUgdHJlZSBieSBhIGdpdmVuIGlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZub2RlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gaWRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fG51bGx9IGNoaWxkIHZub2RlIG9yIG51bGxcbiAgICAgKi9cbiAgICBzdGF0aWMgZmluZENoaWxkVm5vZGVCeUlkKHZub2RlLCBpZCkge1xuICAgICAgICBsZXQgY2hpbGROb2RlcyA9IHZub2RlLmNoaWxkTm9kZXMgfHwgW10sXG4gICAgICAgICAgICBpICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgPSBjaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICAgIGNoaWxkTm9kZTtcblxuICAgICAgICBpZiAodm5vZGUuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gdm5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hpbGROb2RlID0gVk5vZGUuZmluZENoaWxkVm5vZGVCeUlkKGNoaWxkTm9kZSwgaWQpO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaWRzIG9mIGFsbCBjaGlsZCBub2RlcyBvZiB0aGUgZ2l2ZW4gdm5vZGVcbiAgICAgKiBAcGFyYW0gdm5vZGVcbiAgICAgKiBAcGFyYW0gW2NoaWxkSWRzPVtdXVxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gY2hpbGRJZHNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Q2hpbGRJZHModm5vZGUsIGNoaWxkSWRzPVtdKSB7XG4gICAgICAgIGxldCBjaGlsZE5vZGVzID0gdm5vZGUgJiYgdm5vZGUuY2hpbGROb2RlcyB8fCBbXTtcblxuICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goY2hpbGROb2RlID0+IHtcbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGUuaWQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZElkcy5wdXNoKGNoaWxkTm9kZS5pZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNoaWxkSWRzID0gVk5vZGUuZ2V0Q2hpbGRJZHMoY2hpbGROb2RlLCBjaGlsZElkcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjaGlsZElkcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgY2hpbGQgdm5vZGUgaW5zaWRlIGEgdm5vZGUgdHJlZSBieSBhIGdpdmVuIGlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZub2RlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgbm9kZSB3YXMgZm91bmQgYW5kIHJlbW92ZWRcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVtb3ZlQ2hpbGRWbm9kZSh2bm9kZSwgaWQpIHtcbiAgICAgICAgbGV0IGNoaWxkTm9kZXMgPSB2bm9kZS5jaGlsZE5vZGVzIHx8IFtdLFxuICAgICAgICAgICAgaSAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgID0gY2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgICBjaGlsZE5vZGU7XG5cbiAgICAgICAgaWYgKHZub2RlLmlkID09PSBpZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdyZW1vdmVDaGlsZFZub2RlOiB0YXJnZXQgaWQgbWF0Y2hlcyB0aGUgcm9vdCB2bm9kZSBpZDogJyArIGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZXNbaV07XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGUuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChWTm9kZS5yZW1vdmVDaGlsZFZub2RlKGNoaWxkTm9kZSwgaWQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgYSBjaGlsZCB2bm9kZSBpbnNpZGUgYSB2bm9kZSB0cmVlIGJ5IGEgZ2l2ZW4gaWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdm5vZGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbmV3Q2hpbGRWbm9kZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlIG5vZGUgd2FzIGZvdW5kIGFuZCByZXBsYWNlZFxuICAgICAqL1xuICAgIHN0YXRpYyByZXBsYWNlQ2hpbGRWbm9kZSh2bm9kZSwgaWQsIG5ld0NoaWxkVm5vZGUpIHtcbiAgICAgICAgbGV0IGNoaWxkTm9kZXMgPSB2bm9kZS5jaGlsZE5vZGVzIHx8IFtdLFxuICAgICAgICAgICAgaSAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgID0gY2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgICBjaGlsZE5vZGU7XG5cbiAgICAgICAgaWYgKHZub2RlLmlkID09PSBpZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdyZXBsYWNlQ2hpbGRWbm9kZTogdGFyZ2V0IGlkIG1hdGNoZXMgdGhlIHJvb3Qgdm5vZGUgaWQ6ICcgKyBpZCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNbaV0gPSBuZXdDaGlsZFZub2RlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVk5vZGUucmVwbGFjZUNoaWxkVm5vZGUoY2hpbGROb2RlLCBpZCwgbmV3Q2hpbGRWbm9kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFZOb2RlKTtcblxuZXhwb3J0IGRlZmF1bHQgVk5vZGU7IiwiaW1wb3J0IE5lbyAgICAgICAgICAgICBmcm9tICcuLi9OZW8ubWpzJztcbmltcG9ydCBCYXNlICAgICAgICAgICAgZnJvbSAnLi9CYXNlLm1qcyc7XG5pbXBvcnQgKiBhcyBjb3JlICAgICAgIGZyb20gJy4uL2NvcmUvX2V4cG9ydC5tanMnO1xuaW1wb3J0IERvbUV2ZW50TWFuYWdlciBmcm9tICcuLi9tYW5hZ2VyL0RvbUV2ZW50Lm1qcyc7XG5pbXBvcnQgSW5zdGFuY2UgICAgICAgIGZyb20gJy4uL21hbmFnZXIvSW5zdGFuY2UubWpzJztcbmltcG9ydCBBcHBsaWNhdGlvbiAgICAgZnJvbSAnLi4vY29udHJvbGxlci9BcHBsaWNhdGlvbi5tanMnO1xuaW1wb3J0IEhhc2hIaXN0b3J5ICAgICBmcm9tICcuLi91dGlsL0hhc2hIaXN0b3J5Lm1qcyc7XG5cbi8qKlxuICogVGhlIEFwcCB3b3JrZXIgY29udGFpbnMgbW9zdCBwYXJ0cyBvZiB0aGUgZnJhbWV3b3JrIGFzIHdlbGwgYXMgYWxsIGFwcHMgd2hpY2ggZ2V0IGNyZWF0ZWQuXG4gKiBTZWUgdGhlIHR1dG9yaWFscyBmb3IgZnVydGhlciBpbmZvcy5cbiAqIEBjbGFzcyBOZW8ud29ya2VyLkFwcFxuICogQGV4dGVuZHMgTmVvLndvcmtlci5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIEFwcCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ud29ya2VyLkFwcCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLndvcmtlci5BcHAnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nYXBwLXdvcmtlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdhcHAtd29ya2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBkYXRhPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gd29ya2VySWQ9J2FwcCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgd29ya2VySWQ6ICdhcHAnXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIE9ubHkgbmVlZGVkIGZvciB0aGUgU2hhcmVkV29ya2VycyBjb250ZXh0XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGFwcE5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXG4gICAgICovXG4gICAgZmlyZU1haW5WaWV3c0V2ZW50KGFwcE5hbWUsIGV2ZW50TmFtZSkge1xuICAgICAgICB0aGlzLnBvcnRzLmZvckVhY2gocG9ydCA9PiB7XG4gICAgICAgICAgICBOZW8uYXBwc1twb3J0LmFwcE5hbWVdLm1haW5WaWV3SW5zdGFuY2UuZmlyZShldmVudE5hbWUsIGFwcE5hbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbmx5IHJlbGV2YW50IGZvciBTaGFyZWRXb3JrZXJzXG4gICAgICovXG4gICAgb25EaXNjb25uZWN0KGRhdGEpIHtcbiAgICAgICAgc3VwZXIub25EaXNjb25uZWN0KGRhdGEpO1xuICAgICAgICB0aGlzLmZpcmVNYWluVmlld3NFdmVudChkYXRhLmFwcE5hbWUsICdkaXNjb25uZWN0Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXZlcnkgZG9tIGV2ZW50IHdpbGwgZ2V0IGZvcndhcmRlZCBhcyBhIHdvcmtlciBtZXNzYWdlIGZyb20gbWFpbiBhbmQgZW5kcyB1cCBoZXJlIGZpcnN0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgdXNlZnVsIGV2ZW50IHByb3BlcnRpZXMsIGRpZmZlcnMgZm9yIGRpZmZlcmVudCBldmVudCB0eXBlcy4gU2VlIE5lby5tYWluLkRvbUV2ZW50cy5cbiAgICAgKi9cbiAgICBvbkRvbUV2ZW50KGRhdGEpIHtcbiAgICAgICAgRG9tRXZlbnRNYW5hZ2VyLmZpcmUoZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXZlcnkgVVJMIGhhc2gtY2hhbmdlIHdpbGwgY3JlYXRlIGEgcG9zdCBtZXNzYWdlIGluIG1haW4gYW5kIGVuZCB1cCBoZXJlIGZpcnN0LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIHBhcnNlZCBrZXktdmFsdWUgcGFpcnMgZm9yIGVhY2ggaGFzaCB2YWx1ZVxuICAgICAqL1xuICAgIG9uSGFzaENoYW5nZShkYXRhKSB7XG4gICAgICAgIEhhc2hIaXN0b3J5LnB1c2goZGF0YS5kYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3RhcnRpbmcgcG9pbnQgZm9yIGFwcHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uTG9hZEFwcGxpY2F0aW9uKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIHBhdGg7XG5cbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIG1lLmRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgTmVvLmNvbmZpZy5yZXNvdXJjZXNQYXRoID0gZGF0YS5yZXNvdXJjZXNQYXRoO1xuICAgICAgICB9XG5cbiAgICAgICAgcGF0aCA9IG1lLmRhdGEucGF0aDtcblxuICAgICAgICBpZiAoIU5lby5jb25maWcuaXNFeHBlcmltZW50YWwpIHtcbiAgICAgICAgICAgIHBhdGggPSBwYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGltcG9ydChcbiAgICAgICAgICAgIC8qIHdlYnBhY2tJbmNsdWRlOiAvXFwvYXBwLm1qcyQvICovXG4gICAgICAgICAgICAvKiB3ZWJwYWNrRXhjbHVkZTogL1xcL25vZGVfbW9kdWxlcyQvICovXG4gICAgICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNodW5rcy9bcmVxdWVzdF1cIiAqL1xuICAgICAgICAgICAgLyogd2VicGFja01vZGU6IFwibGF6eVwiICovXG4gICAgICAgICAgICBgLi4vLi4vJHtwYXRofWApLnRoZW4obW9kdWxlID0+IHtcbiAgICAgICAgICAgICAgICBtb2R1bGUub25TdGFydCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKE5lby5jb25maWcuaGFzaCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBzaG9ydCBkZWxheSB0byBlbnN1cmUgQ29tcG9uZW50IENvbnRyb2xsZXJzIGFyZSByZWFkeVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IEhhc2hIaXN0b3J5LnB1c2goTmVvLmNvbmZpZy5oYXNoKSwgNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChOZW8uY29uZmlnLmhhc2gpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gSGFzaEhpc3RvcnkucHVzaChOZW8uY29uZmlnLmhhc2gpLCA1KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgKi9cbiAgICByZWdpc3Rlck1haW5WaWV3KG5hbWUpIHtcbiAgICAgICAgdGhpcy5maXJlTWFpblZpZXdzRXZlbnQobmFtZSwgJ2Nvbm5lY3QnKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEFwcCk7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoQXBwKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBDb3JlQmFzZSAgICAgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgT2JzZXJ2YWJsZSAgICAgICAgIGZyb20gJy4uL2NvcmUvT2JzZXJ2YWJsZS5tanMnO1xuaW1wb3J0IE1lc3NhZ2UgICAgICAgICAgICBmcm9tICcuL01lc3NhZ2UubWpzJztcbmltcG9ydCBSZW1vdGVNZXRob2RBY2Nlc3MgZnJvbSAnLi9taXhpbi9SZW1vdGVNZXRob2RBY2Nlc3MubWpzJztcblxuLyoqXG4gKiBUaGUgYWJzdHJhY3QgYmFzZSBjbGFzcyBmb3IgdGhlIEFwcCwgRGF0YSAmIFZEb20gd29ya2VyXG4gKiBAY2xhc3MgTmVvLndvcmtlci5CYXNlXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAYWJzdHJhY3RcbiAqL1xuY2xhc3MgQmFzZSBleHRlbmRzIENvcmVCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLndvcmtlci5Xb3JrZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby53b3JrZXIuV29ya2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3dvcmtlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICd3b3JrZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogT25seSBuZWVkZWQgZm9yIFNoYXJlZFdvcmtlcnNcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaXNDb25uZWN0ZWQ9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaXNDb25uZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaXNTaGFyZWRXb3JrZXI9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaXNTaGFyZWRXb3JrZXI6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW118TmVvLmNvcmUuQmFzZVtdfG51bGx9IG1peGlucz1bT2JzZXJ2YWJsZSwgUmVtb3RlTWV0aG9kQWNjZXNzXVxuICAgICAgICAgKi9cbiAgICAgICAgbWl4aW5zOiBbT2JzZXJ2YWJsZSwgUmVtb3RlTWV0aG9kQWNjZXNzXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9ubHkgbmVlZGVkIGZvciBTaGFyZWRXb3JrZXJzXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fG51bGx9IHBvcnRzPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHBvcnRzIDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSB3b3JrZXJJZD1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHdvcmtlcklkOiBudWxsXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZz17fVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz17fSkge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihtZSwge1xuICAgICAgICAgICAgaXNTaGFyZWRXb3JrZXI6IHNlbGYudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgU2hhcmVkV29ya2VyR2xvYmFsU2NvcGVdJyxcbiAgICAgICAgICAgIHBvcnRzICAgICAgICAgOiBbXSxcbiAgICAgICAgICAgIHByb21pc2VzICAgICAgOiB7fVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWUuaXNTaGFyZWRXb3JrZXIpIHtcbiAgICAgICAgICAgIHNlbGYub25jb25uZWN0ID0gbWUub25Db25uZWN0ZWQuYmluZChtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLm9ubWVzc2FnZSA9IG1lLm9uTWVzc2FnZS5iaW5kKG1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIE5lby53b3JrZXJJZCAgICAgID0gbWUud29ya2VySWQ7XG4gICAgICAgIE5lby5jdXJyZW50V29ya2VyID0gbWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R8bnVsbH1cbiAgICAgKi9cbiAgICBnZXRQb3J0KG9wdHMpIHtcbiAgICAgICAgbGV0IHJldHVyblBvcnQgPSBudWxsLFxuICAgICAgICAgICAgaGFzTWF0Y2g7XG5cbiAgICAgICAgdGhpcy5wb3J0cy5mb3JFYWNoKHBvcnQgPT4ge1xuICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhvcHRzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IHBvcnRba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoaGFzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5Qb3J0ID0gcG9ydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJldHVyblBvcnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzU2hhcmVkV29ya2VyKSB7XG4gICAgICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKCdtYWluJywge2FjdGlvbjogJ3dvcmtlckNvbnN0cnVjdGVkJ30pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT25seSByZWxldmFudCBmb3IgU2hhcmVkV29ya2Vyc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlXG4gICAgICovXG4gICAgb25Db25uZWN0ZWQoZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgaWQgPSBOZW8uZ2V0SWQoJ3BvcnQnKTtcblxuICAgICAgICBtZS5pc0Nvbm5lY3RlZCA9IHRydWU7XG5cbiAgICAgICAgbWUucG9ydHMucHVzaCh7XG4gICAgICAgICAgICBhcHBOYW1lOiBudWxsLFxuICAgICAgICAgICAgaWQgICAgIDogaWQsXG4gICAgICAgICAgICBwb3J0ICAgOiBlLnBvcnRzWzBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLnBvcnRzW21lLnBvcnRzLmxlbmd0aCAtIDFdLnBvcnQub25tZXNzYWdlID0gbWUub25NZXNzYWdlLmJpbmQobWUpO1xuXG4gICAgICAgIG1lLmZpcmUoJ2Nvbm5lY3RlZCcpO1xuXG4gICAgICAgIC8vIHRvZG86IGZpbmQgYSBiZXR0ZXIgd2F5IHRvIGVuc3VyZSB0aGUgcmVtb3RlcyBhcmUgcmVnaXN0ZXJlZCBiZWZvcmUgdHJpZ2dlcmluZyB3b3JrZXJDb25zdHJ1Y3RlZFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG1lLnNlbmRNZXNzYWdlKCdtYWluJywge2FjdGlvbjogJ3dvcmtlckNvbnN0cnVjdGVkJywgcG9ydDogaWR9KTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbmx5IHJlbGV2YW50IGZvciBTaGFyZWRXb3JrZXJzXG4gICAgICovXG4gICAgb25EaXNjb25uZWN0KGRhdGEpIHt9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlXG4gICAgICovXG4gICAgb25NZXNzYWdlKGUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZGF0YSAgICA9IGUuZGF0YSxcbiAgICAgICAgICAgIGFjdGlvbiAgPSBkYXRhLmFjdGlvbixcbiAgICAgICAgICAgIHJlcGx5SWQgPSBkYXRhLnJlcGx5SWQsXG4gICAgICAgICAgICBwcm9taXNlO1xuXG4gICAgICAgIGlmICghYWN0aW9uKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01lc3NhZ2UgYWN0aW9uIGlzIG1pc3Npbmc6ICcgKyBkYXRhLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3Rpb24gIT09ICdyZXBseScpIHtcbiAgICAgICAgICAgIG1lWydvbicgKyBOZW8uY2FwaXRhbGl6ZShhY3Rpb24pXShkYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9taXNlID0gYWN0aW9uID09PSAncmVwbHknICYmIG1lLnByb21pc2VzW3JlcGx5SWRdKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5yZWplY3QpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlLnJlamVjdChkYXRhLmRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoZGF0YS5kYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIG1lLnByb21pc2VzW3JlcGx5SWRdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXG4gICAgICovXG4gICAgb25QaW5nKG1zZykge1xuICAgICAgICB0aGlzLnJlc29sdmUobXNnLCB7XG4gICAgICAgICAgICBvcmlnaW5Nc2c6IG1zZ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcbiAgICAgKi9cbiAgICBvblJlZ2lzdGVyTmVvQ29uZmlnKG1zZykge1xuICAgICAgICBOZW8uY29uZmlnID0gTmVvLmNvbmZpZyB8fCB7fTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihOZW8uY29uZmlnLCBtc2cuZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVzdCBhcHAsIGRhdGEsIG1haW4gb3IgdmRvbSAoZXhjbHVkaW5nIHRoZSBjdXJyZW50IHdvcmtlcilcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBjb25maWdzIGZvciBOZW8ud29ya2VyLk1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBbdHJhbnNmZXJdIEFuIG9wdGlvbmFsIGFycmF5IG9mIFRyYW5zZmVyYWJsZSBvYmplY3RzIHRvIHRyYW5zZmVyIG93bmVyc2hpcCBvZi5cbiAgICAgKiBJZiB0aGUgb3duZXJzaGlwIG9mIGFuIG9iamVjdCBpcyB0cmFuc2ZlcnJlZCwgaXQgYmVjb21lcyB1bnVzYWJsZSAobmV1dGVyZWQpIGluIHRoZSBjb250ZXh0IGl0IHdhcyBzZW50IGZyb21cbiAgICAgKiBhbmQgYmVjb21lcyBhdmFpbGFibGUgb25seSB0byB0aGUgd29ya2VyIGl0IHdhcyBzZW50IHRvLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgcHJvbWlzZU1lc3NhZ2UoZGVzdCwgb3B0cywgdHJhbnNmZXIpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IG1lLnNlbmRNZXNzYWdlKGRlc3QsIG9wdHMsIHRyYW5zZmVyKSxcbiAgICAgICAgICAgICAgICBtc2dJZCAgID0gbWVzc2FnZS5pZDtcblxuICAgICAgICAgICAgbWUucHJvbWlzZXNbbXNnSWRdID0ge1xuICAgICAgICAgICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgICAgICAgICAgcmVqZWN0IDogcmVqZWN0XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbmx5IG5lZWRlZCBmb3IgU2hhcmVkV29ya2Vyc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAgICovXG4gICAgcmVnaXN0ZXJBcHAobmFtZSkge1xuICAgICAgICB0aGlzLnBvcnRzLmZvckVhY2gocG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoIXBvcnQuYXBwTmFtZSkge1xuICAgICAgICAgICAgICAgIHBvcnQuYXBwTmFtZSA9IG5hbWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24gOidyZWdpc3RlckFwcE5hbWUnLFxuICAgICAgICAgICAgICAgICAgICBhcHBOYW1lOiBuYW1lXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZXN0IGFwcCwgZGF0YSwgbWFpbiBvciB2ZG9tIChleGNsdWRpbmcgdGhlIGN1cnJlbnQgd29ya2VyKVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIGNvbmZpZ3MgZm9yIE5lby53b3JrZXIuTWVzc2FnZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IFt0cmFuc2Zlcl0gQW4gb3B0aW9uYWwgYXJyYXkgb2YgVHJhbnNmZXJhYmxlIG9iamVjdHMgdG8gdHJhbnNmZXIgb3duZXJzaGlwIG9mLlxuICAgICAqIElmIHRoZSBvd25lcnNoaXAgb2YgYW4gb2JqZWN0IGlzIHRyYW5zZmVycmVkLCBpdCBiZWNvbWVzIHVudXNhYmxlIChuZXV0ZXJlZCkgaW4gdGhlIGNvbnRleHQgaXQgd2FzIHNlbnQgZnJvbVxuICAgICAqIGFuZCBiZWNvbWVzIGF2YWlsYWJsZSBvbmx5IHRvIHRoZSB3b3JrZXIgaXQgd2FzIHNlbnQgdG8uXG4gICAgICogQHJldHVybnMge05lby53b3JrZXIuTWVzc2FnZX1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgc2VuZE1lc3NhZ2UoZGVzdCwgb3B0cywgdHJhbnNmZXIpIHtcbiAgICAgICAgb3B0cy5kZXN0aW5hdGlvbiA9IGRlc3Q7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIG1lc3NhZ2UsIHBvcnQsIHBvcnRPYmplY3Q7XG5cbiAgICAgICAgaWYgKCFtZS5pc1NoYXJlZFdvcmtlcikge1xuICAgICAgICAgICAgcG9ydCA9IHNlbGY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAob3B0cy5wb3J0KSB7XG4gICAgICAgICAgICAgICAgcG9ydCA9IG1lLmdldFBvcnQoe2lkOiBvcHRzLnBvcnR9KS5wb3J0O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRzLmFwcE5hbWUpIHtcbiAgICAgICAgICAgICAgICBwb3J0T2JqZWN0ID0gbWUuZ2V0UG9ydCh7YXBwTmFtZTogb3B0cy5hcHBOYW1lfSk7XG4gICAgICAgICAgICAgICAgcG9ydCAgICAgICA9IHBvcnRPYmplY3QucG9ydDtcblxuICAgICAgICAgICAgICAgIG9wdHMucG9ydCA9IHBvcnRPYmplY3QuaWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvcnQgPSBtZS5wb3J0c1swXS5wb3J0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKG9wdHMpO1xuXG4gICAgICAgIHBvcnQucG9zdE1lc3NhZ2UobWVzc2FnZSwgdHJhbnNmZXIpO1xuICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xuXG5leHBvcnQge0Jhc2UgYXMgZGVmYXVsdH07IiwiaW1wb3J0IElkR2VuZXJhdG9yIGZyb20gJy4uL2NvcmUvSWRHZW5lcmF0b3IubWpzJztcblxuLyoqXG4gKiBBIHdyYXBwZXIgZm9yIHdvcmtlciBwb3N0IG1lc3NhZ2VzIHNlbnQgYmV0d2VlbiB0aGUgQXBwLCBEYXRhLCBWRG9tIHdvcmtlciAmIHRoZSBtYWluIHRocmVhZC5cbiAqIFlvdSBjYW4gYWRkIG9wdGlvbmFsIHBhcmFtcyBhcyBuZWVkZWQuXG4gKiBAY2xhc3MgTmVvLndvcmtlci5NZXNzYWdlXG4gKi9cbmNsYXNzIE1lc3NhZ2Uge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBhY3Rpb25cbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZGVzdGluYXRpb249J21haW4nXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGlkPUlkR2VuZXJhdG9yLmdldElkKE5lby53b3JrZXJJZClcbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gb3JpZ2luPU5lby53b3JrZXJJZFxuICAgICAgICAgKi9cblxuICAgICAgICBjb25maWcuZGVzdGluYXRpb24gPSBjb25maWcuZGVzdGluYXRpb24gfHwgJ21haW4nO1xuICAgICAgICBjb25maWcuaWQgICAgICAgICAgPSBjb25maWcuaWQgICAgICAgICAgfHwgSWRHZW5lcmF0b3IuZ2V0SWQoTmVvLndvcmtlcklkKTtcbiAgICAgICAgY29uZmlnLm9yaWdpbiAgICAgID0gY29uZmlnLm9yaWdpbiAgICAgIHx8IE5lby53b3JrZXJJZDtcblxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gICAgfVxufVxuXG5jb25zdCBucyA9IE5lby5ucygnTmVvLndvcmtlcicsIHRydWUpO1xubnNbJ01lc3NhZ2UnXSA9IE1lc3NhZ2U7XG5cbmV4cG9ydCB7TWVzc2FnZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuLi8uLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLndvcmtlci5taXhpbi5SZW1vdGVNZXRob2RBY2Nlc3NcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgUmVtb3RlTWV0aG9kQWNjZXNzIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby53b3JrZXIubWl4aW4uUmVtb3RlTWV0aG9kQWNjZXNzJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ud29ya2VyLm1peGluLlJlbW90ZU1ldGhvZEFjY2VzcycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdtaXhpbi1yZW1vdGUtbWV0aG9kLWFjY2VzcydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdtaXhpbi1yZW1vdGUtbWV0aG9kLWFjY2VzcycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBtaXhpbj10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG1peGluOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlbW90ZVxuICAgICAqIEBwYXJhbSBtZXRob2RcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb24oKj0sICo9KTogUHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIGdlbmVyYXRlUmVtb3RlKHJlbW90ZSwgbWV0aG9kKSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgb3JpZ2luID0gcmVtb3RlLm9yaWdpbjtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZGF0YSwgYnVmZmVyKSB7XG4gICAgICAgICAgICBsZXQgb3B0cyA9IHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gICAgICAgICA6ICdyZW1vdGVNZXRob2QnLFxuICAgICAgICAgICAgICAgIGRhdGEgICAgICAgICAgIDogZGF0YSxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbiAgICA6IG9yaWdpbixcbiAgICAgICAgICAgICAgICByZW1vdGVDbGFzc05hbWU6IHJlbW90ZS5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgcmVtb3RlTWV0aG9kICAgOiBtZXRob2RcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChtZS5pc1NoYXJlZFdvcmtlcikge1xuICAgICAgICAgICAgICAgIG9wdHMuYXBwTmFtZSA9IG9wdHMuYXBwTmFtZSB8fCBkYXRhICYmIGRhdGEuYXBwTmFtZTtcbiAgICAgICAgICAgICAgICBvcHRzLnBvcnQgICAgPSBvcHRzLnBvcnQgICAgfHwgZGF0YSAmJiBkYXRhLnBvcnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtZS5wcm9taXNlTWVzc2FnZShvcmlnaW4sIG9wdHMsIGJ1ZmZlcik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVtb3RlXG4gICAgICovXG4gICAgb25SZWdpc3RlclJlbW90ZShyZW1vdGUpIHtcbiAgICAgICAgaWYgKHJlbW90ZS5kZXN0aW5hdGlvbiA9PT0gTmVvLndvcmtlcklkKSB7XG4gICAgICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSByZW1vdGUuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIGV4aXN0cyAgICA9IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1ldGhvZHMgICA9IHJlbW90ZS5tZXRob2RzLFxuICAgICAgICAgICAgICAgIHBrZyAgICAgICA9IE5lby5ucyhjbGFzc05hbWUsIHRydWUpO1xuXG4gICAgICAgICAgICBtZXRob2RzLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlbW90ZS5vcmlnaW4gIT09ICdtYWluJyAmJiBwa2dbbWV0aG9kXSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2F0ZSByZW1vdGUgbWV0aG9kIGRlZmluaXRpb24gJyArIGNsYXNzTmFtZSArICcuJyArIG1ldGhvZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFwa2dbbWV0aG9kXSApIHtcbiAgICAgICAgICAgICAgICAgICAgcGtnW21ldGhvZF0gPSBtZS5nZW5lcmF0ZVJlbW90ZShyZW1vdGUsIG1ldGhvZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFleGlzdHMgJiYgTmVvLndvcmtlcklkICE9PSAnbWFpbicpIHtcbiAgICAgICAgICAgICAgICBtZS5maXJlKCdyZW1vdGVyZWdpc3RlcmVkJywgcmVtb3RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZ1xuICAgICAqL1xuICAgIG9uUmVtb3RlTWV0aG9kKG1zZykge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIHBrZyA9IE5lby5ucyhtc2cucmVtb3RlQ2xhc3NOYW1lKSxcbiAgICAgICAgICAgIG91dCwgbWV0aG9kO1xuXG4gICAgICAgIGlmICghcGtnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmVtb3RlIG5hbWVzcGFjZSBcIicgKyBtc2cucmVtb3RlQ2xhc3NOYW1lICsgJ1wiJyk7XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2QgPSBwa2dbbXNnLnJlbW90ZU1ldGhvZF07XG5cbiAgICAgICAgaWYgKCFtZXRob2QpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCByZW1vdGUgbWV0aG9kIG5hbWUgXCInICsgbXNnLnJlbW90ZU1ldGhvZCArICdcIicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobXNnLmRhdGEpKSB7XG4gICAgICAgICAgICBvdXQgPSBtZXRob2QuY2FsbChwa2csIC4uLm1zZy5kYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG91dCA9IG1ldGhvZC5jYWxsKHBrZywgbXNnLmRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG91dCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIG91dC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIG1lLnJlc29sdmUobXNnLCBkYXRhKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBtZS5yZWplY3QobXNnLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5yZXNvbHZlKG1zZywgb3V0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgY2FsbGVkIHdoZW4gcHJvbWlzZU1lc3NhZ2UgZ2V0cyByZWplY3RlZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIHJlamVjdChtc2csIGRhdGEpIHtcbiAgICAgICAgbGV0IG9wdHMgPSB7XG4gICAgICAgICAgICBhY3Rpb24gOiAncmVwbHknLFxuICAgICAgICAgICAgZGF0YSAgIDogZGF0YSxcbiAgICAgICAgICAgIHJlamVjdCA6IHRydWUsXG4gICAgICAgICAgICByZXBseUlkOiBtc2cuaWRcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5pc1NoYXJlZFdvcmtlcikge1xuICAgICAgICAgICAgb3B0cy5hcHBOYW1lID0gbXNnLmFwcE5hbWU7XG4gICAgICAgICAgICBvcHRzLnBvcnQgICAgPSBtc2cucG9ydDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UobXNnLm9yaWdpbiwgb3B0cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBjYWxsZWQgd2hlbiBwcm9taXNlTWVzc2FnZSBnZXRzIHJlc29sdmVkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZ1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgcmVzb2x2ZShtc2csIGRhdGEpIHtcbiAgICAgICAgbGV0IG9wdHMgPSB7XG4gICAgICAgICAgICBhY3Rpb24gOiAncmVwbHknLFxuICAgICAgICAgICAgZGF0YSAgIDogZGF0YSxcbiAgICAgICAgICAgIHJlcGx5SWQ6IG1zZy5pZFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLmlzU2hhcmVkV29ya2VyKSB7XG4gICAgICAgICAgICBvcHRzLmFwcE5hbWUgPSBtc2cuYXBwTmFtZTtcbiAgICAgICAgICAgIG9wdHMucG9ydCAgICA9IG1zZy5wb3J0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZShtc2cub3JpZ2luLCBvcHRzKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFJlbW90ZU1ldGhvZEFjY2Vzcyk7XG5cbmV4cG9ydCB7UmVtb3RlTWV0aG9kQWNjZXNzIGFzIGRlZmF1bHR9OyJdLCJzb3VyY2VSb290IjoiIn0=