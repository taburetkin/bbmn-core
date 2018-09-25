//export * from './marionette.js';

import { 
	MnObject, Region 
} from './marionette.js';


//export * from './backbone.js';
import {
	Model,
	Collection,
	BackboneView,
	Events,
	Router,
	history,
	ajax
} from './backbone.js';

//export * from './helpers.js';
import {
	isClass,
	isModel,
	isModelClass,
	isCollection,
	isCollectionClass,
	isView,
	isViewClass,
	extend
} from './helpers.js';

//export { default as BaseClass } from './base-class.js';
import BaseClass from './base-class.js';

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
