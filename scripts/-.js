var NumQuestion = 15;
var Grades = [];
Grades["weak"] = 1;
Grades["belowaverage"] = 2;
Grades["average"] = 3;
Grades["aboveaverage"] = 4;
Grades["outstanding"] = 5;

function getAverage() {
	var sum = 0;
	var avg = 0;
	
	for(var i=1;i<=NumQuestion;i++) {
		var objQuestion = document.getElementById('question' + i);
		console.log(Grades[objQuestion.value])
		sum += Grades[objQuestion.value];
	}
	
	return sum / NumQuestion;
}

function addEventListeners() {
	for(var i=1;i<=NumQuestion;i++) {
		var objQuestion = document.getElementById('question' + i);
		
		objQuestion.addEventListener('change', function(e) {
			alert('average : ' + getAverage());
		});
	}
}

addEventListeners();
