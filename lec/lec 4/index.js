/** lec 4
the traditional scope way: dependency injection of scope in controller
*/

angular.module('MyModule',[])

//put in controller the name of the factory(not constructor)
.controller('MyController',function($timeout,$interval,$log,$scope,Car,COLORS,MathExpressionsCalc){
	var self = this;
	self.myColors = COLORS;
	self.car = new Car('ford','explorer');


	self.result = MathExpressionsCalc.calculateSum(1,2);
	self.max = MathExpressionsCalc.getMax(1,2);

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

