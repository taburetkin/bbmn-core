export { Region } from 'backbone.marionette';
import { Object as oldObject, MnObject } from 'backbone.marionette';

const newObject = MnObject || oldObject;

export {
	newObject as MnObject
}
