angular.module('MyModule',[])

//put in controller the name of the factory(not constructor)
.controller('MyController',function($scope,Assignment,AssignmentChanger,GradeCalculation){
	var self = this;
	self.student="";
	self.assignmentList=[];

	self.addAssignment=function(){
		self.assignment=new Assignment("",0);
		AssignmentChanger.addAssignment(self.assignment,self.assignmentList);

		self.average=GradeCalculation.calculateAverage(self.assignmentList);
		self.grade=GradeCalculation.calculateGrade(self.assignmentList);
		self.pass=GradeCalculation.pass(self.assignmentList);
	}

	self.deleteAssignment=function(nameToDelete){
 		AssignmentChanger.deleteAssignment(nameToDelete,self.assignmentList);

    	self.average=GradeCalculation.calculateAverage(self.assignmentList);
		self.grade=GradeCalculation.calculateGrade(self.assignmentList);
		self.pass=GradeCalculation.pass(self.assignmentList);
	};
});

