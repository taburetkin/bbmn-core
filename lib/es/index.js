import Mn from 'backbone.marionette';
import { Collection, Model, View as View$1 } from 'backbone';

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

export { BaseClass, MnObject, isClass, isModel, isModelClass, isCollection, isCollectionClass, isView, isViewClass, extend };
export { Region } from 'backbone.marionette';
export { Model, Collection, View as BackboneView, Events, Router, history, ajax } from 'backbone';

//# sourceMappingURL=index.js.map
