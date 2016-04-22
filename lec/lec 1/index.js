// lec 1
var myMod = angular.module('MyModule',[]);

myMod.controller('MyController',function(){
	////directly using this is ok
	var self=this;
	self.greeting = 'Hello Jiasi';
	self.age = '22';
	////pass ng-class as a string, take whatever in string
		// self.textColor="green";
	////pass ng-class as object, see if key value is true, add key as class
	self.textColor={
		white:true,
		yankees:true,
		hello:false
	};
	////pass ng-class as array, will add each element as class
	self.textColor=['white','strong'];

	////ng-repeat a string array
	self.myArray=['a','bb','ccc'];

	////ng-repeat an object array
	self.myNames=[
		{name:'a'},
		{name:'bb'},
		{name:'ccc'},
		{name:'dddd'}];

	////ng-repeat an object
	self.myPerson={
		name:'Jiasi',
		age:20,
		zip:11111,
		state:'NY'};

	// self.myName='';

	self.myDog= {
		name:'dd'
	};

	self.myCat={
		name:'cc'
	};

	self.myRat={
		name:'rr'
	};
	self.isBoxChecked=true;

	self.onUserClick=function(){
		self.isBoxChecked=!self.isBoxChecked;		
	};

	});


/**
the traditional scope way
*/
// myMod.controller('MyController',function($scope){
// 	$scope.greeting = 'Hello Jiasi';
// 	$scope.age = '22';
// });