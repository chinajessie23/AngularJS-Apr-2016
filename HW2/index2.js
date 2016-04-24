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
		if(self.prioritySelcted==self.priority.high){
			self.colorChange='red';
		}
		if(self.prioritySelcted==self.priority.high){
			self.colorChange='yellow';
		}
		if(self.prioritySelcted==self.priority.high){
			self.colorChange='green';
		}
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

	self.priority={
		high:'high',
		medium:'medium',
		low:'low'
	}
	});