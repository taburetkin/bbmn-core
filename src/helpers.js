import { Model, Collection, BackboneView } from './backbone.js';


function isClass(arg, Base){
	return _.isFunction(arg) && (arg == Base || arg.prototype instanceof Base);
}


function isModel(arg){
	return arg instanceof Model;
}

function isModelClass(arg) {
	return isClass(arg, Model);
}


function isCollection(arg){
	return arg instanceof Collection;
}
function isCollectionClass(arg) {
	return isClass(arg, Collection);
}


function isView(arg){
	return arg instanceof BackboneView;
}


function isViewClass(arg) {
	return isClass(arg, View);
}

const extend = Model.extend;

export {
	isClass,
	isModel,
	isModelClass,
	isCollection,
	isCollectionClass,
	isView,
	isViewClass,
	extend
}

