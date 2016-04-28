angular.module('MyModule',[])

.controller('MyController',function($scope,Assignment,AssignmentChanger,GradeCalculation){
	var self = this;
	self.student="";
	self.assignmentList=[];
	self.assignment=new Assignment("",0);

	self.addAssignment=function(){
		self.assignment=new Assignment(self.assignment.name,self.assignmetn.grade);
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

