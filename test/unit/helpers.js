import {
	isClass,
	isModel,
	isModelClass,
	isCollection,
	isCollectionClass,
	isView,
	isViewClass,
	extend,
	Model,
	Collection,
	BackboneView
} from '../../src/index.js';

describe('helpers', function(){

	describe('isClass', function(){
		const MyClass = function(){};
		MyClass.extend = extend;
		const MyDerived = MyClass.extend({});

		it('should return true if argument is a given class', function(){
			expect(isClass(MyClass, MyClass)).to.be.true;
		});
		it('should return true if argument is a derived from given class', function(){
			expect(isClass(MyDerived, MyClass)).to.be.true;
		});	
		it('should return false if argument is not a function', function(){
			expect(isClass(undefined, MyClass)).to.be.false;
		});			
	});


	describe('isModel', function(){
		const arg1 = new Model();
		const Derived = Model.extend({});
		const arg2 = new Derived();
		it('should return true if argument is instance of core/Model', function(){
			expect(isModel(arg1)).to.be.true;
		});
		it('should return true if argument is instance of derived core/Model', function(){
			expect(isModel(arg2)).to.be.true;
		});
		it('should return true if argument is not an instance of core/Model', function(){
			expect(isModel(undefined)).to.be.false;
		});
	});


	describe('isModelClass', function(){
		const arg1 = Model;
		const arg2 = Model.extend({});
		it('should return true if argument is a core/Model class', function(){
			expect(isModelClass(arg1)).to.be.true;
		});
		it('should return true if argument is a derived core/Model class', function(){
			expect(isModelClass(arg2)).to.be.true;
		});
		it('should return false if argument is not a function', function(){
			expect(isModelClass(undefined)).to.be.false;
		});
		it('should return false if argument is not a core/Model', function(){
			expect(isModelClass(function(){})).to.be.false;
		});
	});

	describe('isCollection', function(){
		const arg1 = new Collection();
		const Derived = Collection.extend({});
		const arg2 = new Derived();
		it('should return true if argument is instance of core/Collection', function(){
			expect(isCollection(arg1)).to.be.true;
		});
		it('should return true if argument is instance of derived core/Collection', function(){
			expect(isCollection(arg2)).to.be.true;
		});
		it('should return true if argument is not an instance of core/Collection', function(){
			expect(isCollection(undefined)).to.be.false;
		});
	});


	describe('isCollectionClass', function(){
		const arg1 = Collection;
		const arg2 = Collection.extend({});
		it('should return true if argument is a core/Collection class', function(){
			expect(isCollectionClass(arg1)).to.be.true;
		});
		it('should return true if argument is a derived core/Collection class', function(){
			expect(isCollectionClass(arg2)).to.be.true;
		});
		it('should return false if argument is not a function', function(){
			expect(isCollectionClass(undefined)).to.be.false;
		});
		it('should return false if argument is not a core/Collection', function(){
			expect(isCollectionClass(function(){})).to.be.false;
		});
	});	


	describe('isView', function(){
		const arg1 = new BackboneView();
		const Derived = BackboneView.extend({});
		const arg2 = new Derived();
		it('should return true if argument is instance of core/BackboneView', function(){
			expect(isView(arg1)).to.be.true;
		});
		it('should return true if argument is instance of derived core/BackboneView', function(){
			expect(isView(arg2)).to.be.true;
		});
		it('should return true if argument is not an instance of core/BackboneView', function(){
			expect(isView(undefined)).to.be.false;
		});
	});


	describe('isViewClass', function(){
		const arg1 = BackboneView;
		const arg2 = BackboneView.extend({});
		it('should return true if argument is a core/BackboneView class', function(){
			expect(isViewClass(arg1)).to.be.true;
		});
		it('should return true if argument is a derived core/BackboneView class', function(){
			expect(isViewClass(arg2)).to.be.true;
		});
		it('should return false if argument is not a function', function(){
			expect(isViewClass(undefined)).to.be.false;
		});
		it('should return false if argument is not a core/BackboneView', function(){
			expect(isViewClass(function(){})).to.be.false;
		});
	});

});
