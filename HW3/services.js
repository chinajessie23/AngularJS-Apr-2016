// angular.module('MyServices',[])
//find box called MyModule and add the things to it.
angular.module('MyModule')

// .factory('Student', function() {
//     function Student(name, assignment) {
//         this.name = name;
//         this.assignment = assignment;
//     }

//     Student.prototype.setName = function(name) {
//          this.name = name;
//     }

//     // Car.prototype.needsRepair = function() {
//     //     if (this.age > 10) { 
//     //         return true;
//     //     } else {
//     //         return false;
//     //     }
//     // }
//     //public API of the factory
// 	return Student;
// })


//functions w/state
.service('GradeCalculation',function(){
	var self=this;

	self.calculateAverage=function(assignmentList){
		for(var i = 0; i < assignmentList.length; i++) {
    		var sum = 0;
   			 sum = sum + assignmentList[i].grade;  
		};
		return sum/(assignmentList.length);
	};

	self.passing=function(grade){
		 if(grade>60){
			return true;}
		};
	}
)

