var config = {
    apiKey: "AIzaSyBqonqE3MGfoorYnrICmQGDXIbwWooS9oY",
    authDomain: "trainscheduler-de9a7.firebaseapp.com",
    databaseURL: "https://trainscheduler-de9a7.firebaseio.com",
    projectId: "trainscheduler-de9a7",
    storageBucket: "trainscheduler-de9a7.appspot.com",
    messagingSenderId: "252697521678"
  };
  firebase.initializeApp(config);

 var database = firebase.database();

 $("#submit-button").on("click", function(){
 	var newTrainName = $("#name").val().trim();
 	var newTrainDest = $("#destination").val().trim();
 	var newTrainTime = $("#time").val().trim();
	var newTrainFreq = $("#frequency").val().trim(); 
	console.log(newTrainName);
	console.log(newTrainDest);
	console.log(newTrainTime);
	console.log(newTrainFreq);
});