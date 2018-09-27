(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('backbone.marionette'), require('backbone')) :
	typeof define === 'function' && define.amd ? define(['exports', 'backbone.marionette', 'backbone'], factory) :
	(factory((global.bbmn = {}),global.Mn,global.Backbone));
}(this, (function (exports,backbone_marionette,backbone) { 'use strict';

var version = "1.0.0";

var newObject = backbone_marionette.MnObject || backbone_marionette.Object;

function isClass(arg, Base) {
	return _.isFunction(arg) && (arg == Base || arg.prototype instanceof Base);
}

function isModel(arg) {
	return arg instanceof backbone.Model;
}

function isModelClass(arg) {
	return isClass(arg, backbone.Model);
}

function isCollection(arg) {
	return arg instanceof backbone.Collection;
}
function isCollectionClass(arg) {
	return isClass(arg, backbone.Collection);
}

function isView(arg) {
	return arg instanceof backbone.View;
}

function isViewClass(arg) {
	return isClass(arg, backbone.View);
}

var extend = backbone.Model.extend;

var BaseClass = function BaseClass() {};
BaseClass.extend = extend;

//const VERSION = "1.0.0";
var index = {
	VERSION: version,
	Region: backbone_marionette.Region, MnObject: newObject,
	Model: backbone.Model,
	Collection: backbone.Collection,
	BackboneView: backbone.View,
	Events: backbone.Events,
	Router: backbone.Router,
	history: backbone.history,
	ajax: backbone.ajax,
	isClass: isClass,
	isModel: isModel,
	isModelClass: isModelClass,
	isCollection: isCollection,
	isCollectionClass: isCollectionClass,
	isView: isView,
	isViewClass: isViewClass,
	extend: extend,
	BaseClass: BaseClass

	// export * from './backbone.js';
	// export * from './helpers.js';
	// export { default as BaseClass } from './base-class.js';

};

exports.VERSION = version;
exports.Region = backbone_marionette.Region;
exports.MnObject = newObject;
exports.Model = backbone.Model;
exports.Collection = backbone.Collection;
exports.BackboneView = backbone.View;
exports.Events = backbone.Events;
exports.Router = backbone.Router;
exports.history = backbone.history;
exports.ajax = backbone.ajax;
exports.isClass = isClass;
exports.isModel = isModel;
exports.isModelClass = isModelClass;
exports.isCollection = isCollection;
exports.isCollectionClass = isCollectionClass;
exports.isView = isView;
exports.isViewClass = isViewClass;
exports.extend = extend;
exports.BaseClass = BaseClass;
exports['default'] = index;

Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=index.js.map
