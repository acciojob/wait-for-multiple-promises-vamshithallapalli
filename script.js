//your JS code here. If required.
function createRandomPromise(promiseNumber){
	return new Promise((resolve)=>{
		var time = Math.random()*2+1;
		setTimeout(()=>{
			resolve({name: "promise" + promiseNumber, time: time});
		}, time*1000)
	})
}

var startTime = performance.now();

var promise1 = createRandomPromise(1);
var promise2 = createRandomPromise(2);
var promise3 = createRandomPromise(3);

Promise.all([promise1, promise2, promise3]).then((results) => {
	var endTime = performance.now();
	var totalTime = (endTime - startTime)/1000;

	var output = document.getElementById("output");
	output.innerHTML = "";

	results.forEach((result)=>{
		var row = document.createElement("tr");
		var nameCell = document.createElement("td");
		nameCell.textContent = result.name;

		var timeCell = document.createElement("td");
		timeCell.textContent = result.time;

		row.appendChild(nameCell);
		row.appendChild(timeCell);
		output.appendChild(row);
	})

	//last row
	var totalRow = document.createElement("tr");
	var totalCell = document.createElement("td");
	totalCell.textContent = "Total";
	var totalTimecell = document.createElement("td");

	totalTimecell.textContent = totalTime.toFixed(3);

	totalRow.appendChild(totalCell);
	totalRow.appendChild(totalTimecell);
	output.appendChild(totalRow);
})

