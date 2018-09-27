import { BaseClass } from '../../src/index.js';

describe('BaseClass', function(){
	const Derived = BaseClass.extend({});
	const instance = new Derived();
	it('should have `extend` method', function(){
		expect(BaseClass.extend).to.be.a('function');
	});
	it('`extend` should create Derived class', function(){
		expect(instance).to.be.instanceOf(BaseClass);
	});
});
