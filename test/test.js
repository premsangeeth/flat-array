var assert = require ('assert')
var flatArray = require ('../lib/flat-array')
describe('flat array tester',function(){
	it('Should return null if array is null', function (){
		var flattedArray = flatArray(null);
		assert(!flattedArray,'Value is not null')
	})
	
	it('Should return null if array is undefined', function (){
		var flattedArray = flatArray(undefined);
		assert(!flattedArray,'Value is not null')
	})
	
	it('Should return empty array if array is empty', function (){
		var flattedArray = flatArray([]);
		assert.deepEqual(flattedArray,[],'Array is not empty')
	})
	
	it('Should throw error if input is not array', function (){
		assert.throws(function(){flatArray('Junk')},/input is not an array/)
	})
	
	it('Should throw error if non integer or array found inside array', function (){
		assert.throws(function(){flatArray(['Junk'])},/Non integer value found inside array/)
	})
	
	it('Should throw error if non integer or array found inside inner array', function (){
		assert.throws(function(){flatArray([1,2,['Junk']])},/Non integer value found inside array/)
	})
	
	it('Should throw error for float values in an array', function (){
		assert.throws(function(){flatArray([1,2,[1.5]])},/Non integer value found inside array/)
	})
	
	it('Should return flatted result for single dimension array', function (){
		var flattedArray = flatArray([1,2,3,4,5]);
		assert.deepEqual(flattedArray,[1,2,3,4,5],'Single dimension array is not flatted correctly')
	})
	
	it('Should return flatted result for two dimension array', function (){
		var flattedArray = flatArray([1,2,[3,4],5]);
		assert.deepEqual(flattedArray,[1,2,3,4,5],'Two dimension array is not flatted correctly')
	})
	
	it('Should return flatted result for multi dimension array', function (){
		var flattedArray = flatArray([1,2,[3,[4,5,6]],7]);
		assert.deepEqual(flattedArray,[1,2,3,4,5,6,7],'multi dimension array is not flatted correctly')
	})
	
	it('Should return flatted result for if inner array is empty', function (){
		var flattedArray = flatArray([1,2,[3,[]],4]);
		assert.deepEqual(flattedArray,[1,2,3,4],'Array with inner empty array is not flatted correctly')
	})
})