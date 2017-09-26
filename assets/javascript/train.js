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
 var trainNum = 1;

 $("#submit-button").on("click", function(){
 	event.preventDefault();
 	var newTrainName = $("#name").val().trim();
 	var newTrainDest = $("#destination").val().trim();
 	var newTrainTime = $("#time").val().trim();
	var newTrainFreq = $("#frequency").val().trim(); 
	console.log(newTrainName);
	console.log(newTrainDest);
	console.log(newTrainTime);
	console.log(newTrainFreq);

	var newTrain = {
		name: newTrainName,
		dest: newTrainDest,
		time: newTrainTime,
		freq: newTrainFreq
	}

	database.ref().push(newTrain);
	console.log(newTrain.name);
	console.log(newTrain.dest);
	console.log(newTrain.time);
	console.log(newTrain.freq);

	//

	$("#name").val("");
	$("#destination").val("");
	$("#time").val("");
	$("#frequency").val("");

});

 database.ref().on("child_added", function(snapshot){

 	console.log(snapshot.val());

	
 	var newTrainName = snapshot.val().name;
 	var newTrainDest = snapshot.val().dest;
 	var newTrainTime = snapshot.val().time;
 	var newTrainFreq = snapshot.val().freq;

 	console.log(newTrainName);
 	console.log(newTrainDest);
 	console.log(newTrainTime);
 	console.log(newTrainFreq);


	var currentTime = moment().format("hh:mm:ss a")
 	var nextTrain = moment(newTrainTime).add(newTrainFreq, "m");
 	console.log(nextTrain._d);

 	var newTrainFormat = moment(nextTrain).format("hh:mm:ss a")
 	console.log(newTrainFormat);
 	var minAway = moment.utc(moment(newTrainFormat, "HH:mm:ss").diff(moment(currentTime, "HH:mm:ss"))).format("mm");
 	console.log(minAway)

 	$("#schedule-info").append("<tr><th scope='row' id='train-num'>" + trainNum++ + "</th><td id='train-name'>" + newTrainName + "</td><td id='train-destination'>" + newTrainDest + "</td><td id='train-frequency'>" + newTrainFreq + "</td><td id='train-arrival'>" + newTrainFormat + "</td><td id='train-min-away'>" + minAway + "</td></tr>")

 });