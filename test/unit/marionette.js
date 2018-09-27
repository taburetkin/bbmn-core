import { MnObject, OldObject, Region } from '../../src/index.js';


describe('marionette.js: ', function(){


	it('MnObject should be defined', function(){
		expect(MnObject).to.be.not.undefined;
	});

	it('Region should be defined', function(){
		expect(Region).to.be.not.undefined;
	});

	it('when Mn >= v4, MnObject should be an NewObject', function(){
		expect(OldObject).to.be.undefined;	
		expect(MnObject).to.be.not.undefined;
	});

});
