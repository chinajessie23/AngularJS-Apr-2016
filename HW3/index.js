/** lec 4
the traditional scope way: dependency injection of scope in controller
*/

angular.module('MyModule',[])

//put in controller the name of the factory(not constructor)
.controller('MyController',function($scope,GradeCalculation){
	var self = this;

	self.student="";
	self.assignment={
			name:"",
			grade:0
		};
	

	self.assignmentList=[];

	self.addAssignment=function(){
		self.tmp=angular.copy(self.assignment);
		self.tmp.name=self.assignment.name;
		self.tmp.grade=self.assignment.grade;
		self.assignmentList.push(self.tmp);
		//don't forget to update the average once a new grade is inputed
		self.average=GradeCalculation.calculateAverage(self.assignmentList);
	}

	self.deleteAssignment=function(nameToDelete){
	for(var i = 0; i < self.assignmentList.length; i++) {
    	if(self.assignmentList[i].name == nameToDelete) {
       	 	self.assignmentList.splice(i, 1);
        	break;
    	}
    }
	};

	self.calculateAverage=function(assignmentList){
		for(var i = 0; i < assignmentList.length; i++) {
    		var sum = 0;
   			 sum = sum + assignmentList[i].grade;  
		};
		return sum/(assignmentList.length);
	};

});

