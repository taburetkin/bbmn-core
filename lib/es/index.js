import Mn, { Region } from 'backbone.marionette';
import { Collection, Events, Model, Router, View as View$1, ajax, history } from 'backbone';

var MnObject = Mn.Object || Mn.MnObject;

function isClass(arg, Base) {
	return _.isFunction(arg) && (arg == Base || arg.prototype instanceof Base);
}

function isModel(arg) {
	return arg instanceof Model;
}

function isModelClass(arg) {
	return isClass(arg, Model);
}

function isCollection(arg) {
	return arg instanceof Collection;
}
function isCollectionClass(arg) {
	return isClass(arg, Collection);
}

function isView(arg) {
	return arg instanceof View$1;
}

function isViewClass(arg) {
	return isClass(arg, View);
}

var extend = Model.extend;

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

export { MnObject, Region, Model, Collection, View$1 as BackboneView, Events, Router, history, ajax, isClass, isModel, isModelClass, isCollection, isCollectionClass, isView, isViewClass, extend, BaseClass };

//# sourceMappingURL=index.js.map
