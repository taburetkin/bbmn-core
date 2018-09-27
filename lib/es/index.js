import { MnObject, Object, Region } from 'backbone.marionette';
import { Collection, Events, Model, Router, View, ajax, history } from 'backbone';

var version = "1.0.0";

var newObject = MnObject || Object;

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
	return arg instanceof View;
}

function isViewClass(arg) {
	return isClass(arg, View);
}

var extend = Model.extend;

var BaseClass = function BaseClass() {};
BaseClass.extend = extend;

//const VERSION = "1.0.0";
var index = {
	VERSION: version,
	Region: Region, MnObject: newObject,
	Model: Model,
	Collection: Collection,
	BackboneView: View,
	Events: Events,
	Router: Router,
	history: history,
	ajax: ajax,
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

export { version as VERSION, Region, newObject as MnObject, Model, Collection, View as BackboneView, Events, Router, history, ajax, isClass, isModel, isModelClass, isCollection, isCollectionClass, isView, isViewClass, extend, BaseClass };
export default index;

//# sourceMappingURL=index.js.map
