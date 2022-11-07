var video;

window.addEventListener("load", function() {
	video = document.querySelector("#player1")
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video Down")
	video.playbackRate *= .9;
	console.log("Speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Video Up")
	video.playbackRate /= .9;
	console.log("Speed is " + video.playbackRate)

});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead")
	video.currentTime += 10
	if (video.currentTime >= video.duration){
		video.currentTime = 0
	}
	console.log("Video Current Time is " + video.currentTime)
});

document.querySelector('#mute').addEventListener("click", function(){
	console.log("Mute Video")
	if (video.muted ==truw){
		console.log("Umute")
		video.muted = false
		this.innerHTML = "Mute"
	}
	else{
		console.log("Mute")
		video.muted = true
		this.innerHTML.HTML = "Unmute"
	}

})




