// angular.module('MyServices',[])
//find box called MyModule and add the things to it.
angular.module('MyModule')

.factory('Assignment', function() {
    function Assignment(name, grade) {
        this.name = name;
        this.grade = grade;
    }
	return Assignment;
})

.service('GradeCalculation',function(){
	var self=this;

	self.calculateAverage=function(assignmentList){
		var sum = 0;
		for(var i = 0; i < assignmentList.length; i++) {
   			 sum = sum + assignmentList[i].grade;  
		};
		return sum/(assignmentList.length);
	};

	self.calculateGrade=function(assignmentList){
		if(self.calculateAverage(assignmentList)>90)
			return 'A';
		else if(self.calculateAverage(assignmentList)>80)
			return 'B';
		else if (self.calculateAverage(assignmentList)>70)
			return 'C';
		else return 'F';
	};

	self.pass=function(assignmentList){
		 if(self.calculateGrade(assignmentList)=='F')
			return 'Fail';
		 else return 'Pass';
		};
	}
)

.service('AssignmentChanger',function(){
	var self=this;

	self.addAssignment=function(grade,list){
		list.push(grade);
	}

	self.deleteAssignment=function(nameToDelete,list){
	for(var i = 0; i < list.length; i++) {
    	if(list[i].name == nameToDelete) {
       	 	list.splice(i, 1);
    	}
    }
	};

	}
)

