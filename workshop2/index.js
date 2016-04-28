angular.module('MyModule',[])

//put in controller the name of the factory(not constructor)
.controller('MyController',function($scope,Assignment,AssignmentChanger,GradeCalculation){
	var self = this;
	self.student="";
	self.assignmentList=[];
	self.assignment=new Assignment("",0);

	self.addAssignment=function(){
		self.Newassignment=new Assignment(self.assignment.name,self.assignment.grade);
		AssignmentChanger.addAssignment(self.Newassignment,self.assignmentList);
		calcStats();
	}

	self.deleteAssignment=function(nameToDelete){
 		AssignmentChanger.deleteAssignment(nameToDelete,self.assignmentList);
 		calcStats();
	};

	function calcStats() {
    	self.average=GradeCalculation.calculateAverage(self.assignmentList);
		self.grade=GradeCalculation.calculateGrade(self.assignmentList);
		self.pass=GradeCalculation.pass(self.assignmentList);
	}
});

