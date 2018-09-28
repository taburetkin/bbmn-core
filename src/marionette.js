export { Region } from 'backbone.marionette';
import { Object as oldObject, MnObject } from 'backbone.marionette';

/* istanbul ignore next */
const newObject = MnObject || oldObject;

export {
	newObject as MnObject
}
