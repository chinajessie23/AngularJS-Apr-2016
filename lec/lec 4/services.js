// angular.module('MyServices',[])
//find box called MyModule and add the things to it.
angular.module('MyModule')

//functions w/state
.service('MathExpressionsCalc',function(){
	var self=this;

	var myObject={
		hello:"this object is private to this service"
	}

	self.calculateSum=function(a,b){
		return a+b;
	};

	self.getMax=function(a,b){
		 if(a>b){
			return a;}
			else {
				return b;
			}
		};
	}
)

.value('COLORS', [{
	name: 'red'
}, {
	name: 'green'
}, {
	name: 'blue'
}, {
	name: 'yellow'
}])

//outer function must return something: reference to the constructor function
.factory('Car', function() {
    function Car(make, model) {
        this.make = make;
        this.model = model;
    }

    Car.prototype.setYear = function(year) {
         this.year = year;
         this.age = 2016 - parseInt(year);
    }

    Car.prototype.needsRepair = function() {
        if (this.age > 10) { 
            return true;
        } else {
            return false;
        }
    }
    //public API of the factory
	return Car;
})
