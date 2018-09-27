import { version as VERSION } from '../package.json';
//const VERSION = "1.0.0";
import { Region, MnObject } from './marionette.js';
import {
	Model,
	Collection,
	BackboneView,
	Events,
	Router,
	history,
	ajax
} from './backbone.js';

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

import BaseClass from './base-class';

export {
	VERSION,
	Region, MnObject,
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

export default {
	VERSION,
	Region, MnObject,
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

// export * from './backbone.js';
// export * from './helpers.js';
// export { default as BaseClass } from './base-class.js';
