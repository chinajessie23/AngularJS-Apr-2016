var myMod = angular.module('MyModule',[]);

myMod.controller('MyController',function(){
	var self = this;
	self.isShowMode=true;
	self.isEditMode=false;
	self.shouldCancel=false;

	self.fname="Jiasi";
	self.lname="Chen";
	self.email="jiasichen@yahoo.com";

	self.onEditClick=function(){
		self.isShowMode=false;
		self.isEditMode=true;
		self.shouldCancel=false;
	};

	self.onCancelClick=function(){
		self.isShowMode=true;
		self.isEditMode=false;
		self.shouldCancel=true;
	}

	self.onDoneClick=function(){
		self.isShowMode=true;
		self.isEditMode=false;
		self.shouldCancel=false;
	}

	});