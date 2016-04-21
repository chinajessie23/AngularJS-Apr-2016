/** lec 4
the traditional scope way: dependency injection of scope in controller
*/
angular.module('MyModule',[])

.value('COLORS', [
	{color:'red'},{
	color:'blue'},{
	color:'yellow'},{
	color:'green'}])

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
	return Car;
})

//put in controller the name of the factory(not constructor)
.controller('MyController',function($timeout,$interval,$log,$scope,Car,COLORS){
	var self = this;
	self.myColors = COLORS;
	self.car = new Car('ford','explorer');

	$log.info('info function');
	$log.log('normal log');
	// $log.debug,error, 
	self.name = 'Jiasi';
	$timeout(function(){
		console.log('called');
		self.name='Jessie';
	},3000);

//count from 10 sec, countdown every 1000 mill-sec, number of times to perform function.
	self.count=10;
	$interval(function(){
		self.count--;
	},1000,10);

	// self.car={
	// 	make:'ford',
	// 	model:'explorer'
	// };

	// self.onYearChanged = function(){
	// 	self.car.age=2016-parseInt(self.car.year);
	// };
});

