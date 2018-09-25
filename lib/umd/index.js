(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('backbone.marionette'), require('backbone')) :
	typeof define === 'function' && define.amd ? define(['backbone.marionette', 'backbone'], factory) :
	(global.bbmn = factory(global.Mn,global.Backbone));
}(this, (function (Mn,backbone) { 'use strict';

var Mn__default = 'default' in Mn ? Mn['default'] : Mn;

var MnObject = Mn__default.Object || Mn__default.MnObject;

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
	return isClass(arg, View);
}

var extend = backbone.Model.extend;

var BaseClass = function BaseClass() {};
BaseClass.extend = extend;

//export * from './marionette.js';

//export * from './backbone.js';
//export * from './helpers.js';
//export { default as BaseClass } from './base-class.js';
/*export {
	MnObject, 
	Region,
	Model,
	Collection,
	BackboneView,
	Events,
	Router,
	history,
	ajax,	
	isClass,
	isModel,
	isModelClass,
	isCollection,
	isCollectionClass,
	isView,
	isViewClass,
	extend,
	BaseClass
}
*/
var index = {
	MnObject: MnObject,
	Region: Mn.Region,
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
};

return index;

})));

//# sourceMappingURL=index.js.map
