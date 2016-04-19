var myMod = angular.module('MyModule',[]);

myMod.controller('MyController',function(){
	var self = this;
	self.isShowMode=true;
	self.isEditMode=false;
	self.shouldUpdate=false;
	self.shouldCancel=false;

	self.fname="Jiasi";
	self.lname="Chen";
	self.email="jiasichen@yahoo.com";

	self.onEditClick=function(){
		self.isShowMode=false;
		self.isEditMode=true;
		self.shouldUpdate=false;
		self.shouldCancel=false;

			
	};

	self.onCancelClick=function(){
		self.isShowMode=true;
		self.isEditMode=false;
		self.shouldUpdate=false;
		self.shouldCancel=true;


	}

	self.onDoneClick=function(){
		self.fname=self.fname;
		self.isShowMode=true;
		self.isEditMode=false;
		self.shouldUpdate=true;
		self.shouldCancel=false;

	}

	});


/**
the traditional scope way
*/
// myMod.controller('MyController',function($scope){
// 	$scope.greeting = 'Hello Jiasi';
// 	$scope.age = '22';
// });