angular.module('MyModule',[])

.controller('MyController',function($scope,Genres,AssignmentChanger,GradeCalculation){
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

	self.selectSong=function(){
		self.songList=[];
		if(self.song1checked){
				self.songList.push(self.genresSelected.song1);
					console.log("song1 selcted");
			}
		if(self.song2checked){
				self.songList.push(self.genresSelected.song2);
				console.log("song2 selcted");}
		if(self.song3checked){
			self.songList.push(self.genresSelected.song3);
			console.log("song3 selcted");}

		if(!self.song1checked){
				self.songList.pop(self.genresSelected.song1);
			console.log("song1 deselcted");}
		if(!self.song2checked){
				self.songList.pop(self.genresSelected.song2);
			console.log("song1 deselcted");}
		if(!self.song3checked){
			self.songList.pop(self.genresSelected.song3);
		console.log("song1 deselcted");}
	}
	console.log("song1 selcted");
		console.log(self.songList[1]);
	console.log(self.songList[2]);


	self.save=function(nameToDelete){
 		self.songList.push(self.song);
	};
});

