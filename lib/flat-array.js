'use strict';
var Stack = require('stackjs');
var isInteger = require("is-integer");//used as we cannot use instance of Number, which also accepts float values

function flatArray(array){
	if(array){
		if(! (array instanceof Array)){
			throw new Error('input is not an array')
		}
		var flattedArray = [];
		var stack = new Stack();// using stack for iterative approach than recursive approach. This will avoid stack over flow
		_pushToStack(stack,array,0);
		while(!stack.isEmpty()){
			var arrayContainer = stack.pop();
			for(var i=arrayContainer.index ; i<arrayContainer.array.length; i++){
				if(isInteger(arrayContainer.array[i])){
					flattedArray.push(arrayContainer.array[i]);
				}
				else if (arrayContainer.array[i] instanceof Array){
					_pushToStack(stack,arrayContainer.array,i+1);
					_pushToStack(stack,arrayContainer.array[i],0);
					break;
				}
				else{
					throw new Error('Non integer value found inside array');
				}
			}
		}
		
		return flattedArray;
	}
	return null;
}

function _pushToStack(stack,array,index){
	stack.push({'array':array, 'index':index});
}
module.exports = flatArray;