var myMod = angular.module('MyModule',[]);

myMod.controller('MyController',function(){
	var self = this;
	self.isEditMode=false;

	self.fname="Jiasi";
	self.lname="Chen";
	self.email="jiasichen@yahoo.com";

	self.onEditClick=function(){
		self.isEditMode=true;
		self.copyfname=angular.copy(self.fname);
		self.copylname=angular.copy(self.lname);
	};

	self.onCancelClick=function(){
		self.isEditMode=false;
		self.fname=angular.copy(self.copyfname);
		self.lname=angular.copy(self.copylname);
	}

	self.onDoneClick=function(){
		self.isEditMode=false;
	}

	});