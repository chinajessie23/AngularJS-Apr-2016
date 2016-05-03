angular.module('MyModule',[])

.controller('MyController',function($scope,Song){
	var self = this;
	self.songList=[];

  	self.genres1={
		song1:"rap 1",
		song2:"rap 2",
		song3:"rap 3"	
	};
	 self.genres2={
		song1:"pop 1",
		song2:"pop 2",
		song3:"pop 3"	
	};

	self.genres3={
		song1:"rock 1",
		song2:"rock 2",
		song3:"rock 3"	
	};

	self.songList=[];

	self.selectSong1 = function(){
		if(self.genresSelected.song1checked && (!self.songList.indexOf(self.genresSelected.song1)> -1)){
			console.log("song1checked");
			self.tmp=angular.copy(self.genresSelected.song1);
		self.songList.push(self.tmp);
		}

		if(!self.genresSelected.song1checked && (self.songList.indexOf(self.genresSelected.song1)> -1)){
						console.log("!song1checked");

		self.songList.pop(self.genresSelected.song1);}
			angular.forEach(self.songList,function(ele){
			console.log(ele);
		});

	}

	self.selectSong2 = function(){
		if(self.genresSelected.song2checked && (!self.songList.indexOf(self.genresSelected.song2)> -1)){
			console.log("song1checked");
			self.tmp=angular.copy(self.genresSelected.song2);
		self.songList.push(self.tmp);
	}

		if(!self.genresSelected.song2checked && (self.songList.indexOf(self.genresSelected.song2)> -1)){
						console.log("!song2checked");

		self.songList.pop(self.genresSelected.song2);}
		angular.forEach(self.songList,function(ele){
			console.log(ele);
		});


	}

	self.selectSong3 = function(){
		if(self.genresSelected.song3checked && (!self.songList.indexOf(self.genresSelected.song3)> -1)){
			console.log("song3checked");
			self.tmp=angular.copy(self.genresSelected.song3);
		self.songList.push(self.tmp);
	}


		if(!self.genresSelected.song3checked && (self.songList.indexOf(self.genresSelected.song3)> -1)){
						console.log("!song1checked");

		self.songList.pop(self.genresSelected.song3);}
		angular.forEach(self.songList,function(ele){
			console.log(ele);
		});

	}



	self.save=function(){

	angular.forEach(self.songList,function(ele){
			console.log(ele);
		})
	self.genresSelected.song1checked=false;
	self.genresSelected.song2checked=false;
	self.genresSelected.song3checked=false;

	};
});

