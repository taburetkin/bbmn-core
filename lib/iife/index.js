var bbmn = (function (exports,Mn,backbone) {
'use strict';

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

/*
export default {
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

exports.MnObject = MnObject;
exports.Region = Mn.Region;
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

return exports;

}({},Mn,Backbone));

//# sourceMappingURL=index.js.map
