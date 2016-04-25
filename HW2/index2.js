var myMod = angular.module('MyModule',[]);

myMod.controller('MyController',function(){
	var self=this;
	self.toExpand=false;

	self.toggleExpand=function(){
	self.toExpand=!self.toExpand;
	}
	self.addFileToFolder=function(){
		self.folderSelected.files.push(self.fileName);
	}

	self.addTodo=function(){
		self.tmp=angular.copy(self.form);
		self.tmp.name=self.formName;
		self.tmp.description=self.formDescription;
		self.tmp.priority=self.prioritySelected;
		self.formList.push(self.tmp);
	}

	self.folder1={
		name:'Folder 1',
		files:['file1','file2','file3']
	}

	self.folder2={
		name:'Folder 2',
		files:['file1','file2','file3']
	}

	self.folder3={
		name:'Folder 3',
		files:['file1','file2','file3']
	}

	self.high='red';
	self.medium='yellow';
	self.low='green';

	self.form={
		name:"",
		description:"",
		priority:""
	}
	self.formList=[];
	});