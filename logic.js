import * as datefns from "date-fns";

const txtarea = getTextareaElement("txtArea");
txtarea.focus();
txtarea.select();

let resetSpan = document.querySelector("#resetSpan");
resetSpan.addEventListener(
	"click",
	function () {
		txtarea.value = "";
		showValue("");
	},
	false
);

txtarea.oninput = handleInput;

let timeRangesArray = [];
let rangeObjectArray = [];
let formattedRangesArray = [];
let formattedMillisecArray = [];
let durationsArray = [];
let durationsArrCopy = [];

const txtValue = textareaToString("txtArea");
showValue(txtValue);

function handleInput(e) {
	showValue(e.target.value);
}

function showValue(input) {
	timeRangesArray = stringToTimeRanges(input);
	if (timeRangesArray === null) {
		document
			.getElementById("resultsDivTitle")
			.getElementsByTagName("span")[0].innerHTML = "0 Range Found";
		document.getElementById("totalHours").innerHTML = "0 Hour";
		deleteAllRows("rangesTable");
		rangeObjectArray = [];
		formattedRangesArray = [];
		formattedMillisecArray = [];
		durationsArray = [];
		durationsArrCopy = [];
	} else {
		rangeObjectArray = timeRangesArray.map((range) => rangeToTime(range));
		formattedRangesArray = rangeObjectArray.map((obj) => {
			const object = {};
			object.start = formatTimeString(obj["start"]);
			object.end = formatTimeString(obj["end"]);
			return object;
		});
		formattedMillisecArray = formattedRangesArray.map((obj) => {
			const object = {};
			object.start = formattedTimeStringToTime(obj["start"]);
			object.end = formattedTimeStringToTime(obj["end"]);
			return object;
		});
		durationsArray = formattedMillisecArray.map((obj) => stringToDuration(obj));
		for (let i = 0; i < durationsArray.length; i++) {
			if (durationsArray[i] < 0) {
				durationsArray[i] += 24 * 60 * 60 * 1000;
			}
		}

		// Filter out the NaN values
		durationsArrCopy = durationsArray;
		if (durationsArrCopy.includes(NaN)) {
			durationsArrCopy = durationsArrCopy.filter(function (value) {
				return !isNaN(value);
			});
		}

		// Get the number of time ranges
		document
			.getElementById("resultsDivTitle")
			.getElementsByTagName("span")[0].innerHTML =
			durationsArrCopy.length > 1
				? durationsArrCopy.length + " Ranges Found"
				: durationsArrCopy.length + " Range Found";

		// Get total hours
		const resultMillisec = durationsArrCopy.reduce(function (
			previousValue,
			currentValue
		) {
			return previousValue + currentValue;
		},
		0);

		let hoursResult = formatMilliseconds(resultMillisec);

		document.getElementById("totalHours").innerHTML = hoursResult;

		// Do the table
		let tableObjsArr = [];
		for (let i = 0; i < durationsArray.length; i++) {
			let range =
				formattedRangesArray[i]["start"].split(" ").join("") +
				" - " +
				formattedRangesArray[i]["end"].split(" ").join("");
			let dur = formatMilliseconds(durationsArray[i]);
			let tableObj = {};
			tableObj.range = range;
			tableObj.dur = dur;
			tableObjsArr.push(tableObj);
		}
		deleteAllRows("rangesTable");
		addRows("rangesTable", tableObjsArr);
	}
}

function getTextareaElement(textareaId) {
	// given a text area, return its content as a string
	return document.getElementById(textareaId);
}

function textareaToString(textareaId) {
	// given a text area, return its content as a string
	return document.getElementById(textareaId).value;
}

function stringToTimeRanges(rawInput) {
	// find all the time ranges in the string [aApP][mM]
	const regex =
		/\d{1,2}:+\d{1,2}\s?[aApP][mM]\s*[-—~–]\s*\d{1,2}:+\d{1,2}\s?[aApP][mM]/gm;
	const found = rawInput.match(regex);
	return found;
}

// ['7:30 am - 8:40Pm', '6:20AM - 10:38 am']
function rangeToTime(timeRangeString) {
	// get each time from a time range string
	const words = timeRangeString.split(/[-—~–]/);
	const timeRangeObject = new Object();
	timeRangeObject.start = words[0];
	timeRangeObject.end = words[1];
	return timeRangeObject;
}

// {start: '7:30 am', end: '8:40Pm'}
function formatTimeString(timeString) {
	// convert a time like "12:30PM"
	// to a consistent format like "12:30 pm"
	timeString = timeString.toLowerCase();
	timeString = timeString.replace(/\s/g, "");
	timeString = timeString.split("").reverse().join("");
	timeString = timeString.slice(0, 2) + " " + timeString.slice(2);
	timeString = timeString.split("").reverse().join("");
	return timeString;
}

function formattedTimeStringToTime(formattedTimeString) {
	// convert a formatted time like "12:30 pm" to a timestamp
	return datefns.getTime(datefns.parse(formattedTimeString, "p", new Date()));
}

// formattedTimeStringToTime(formatTimeString(words[0]));
function stringToDuration(obj) {
	// given a string from the textarea, return a duration in milliseconds
	// use the other functions to calculate this
	return obj.end - obj.start;
}

function formatMilliseconds(milliseconds) {
	// given a duration in milliseconds, return a string like "1 hour, 30 minutes"
	// (date-fns is a good library for this)

	let hours = (milliseconds / (1000 * 60 * 60)).toFixed(2);

	// hours = hours < 10 ? "0" + hours : hours;
	// minutes = minutes < 10 ? "0" + minutes : minutes;

	// let strHour = hours > 1 ? "Hours" : "Hour";
	let strHour = "Hours";
	return hours + " " + strHour;
}

function addRows(tableID, tableObjsArr) {
	tableObjsArr.forEach(function (obj) {
		addARow(tableID, obj.range, obj.dur);
	});
}

function addARow(tableID, range, dur) {
	let table = document.getElementById(tableID);
	let rowCount = table.rows.length;

	let row = table.insertRow(rowCount);

	let cell1 = row.insertCell(0);
	let element1 = document.createTextNode(range);
	cell1.appendChild(element1);

	let cell2 = row.insertCell(1);
	let element2 = document.createTextNode(dur);
	cell2.appendChild(element2);
}

function deleteAllRows(tableID) {
	let table = document.getElementById(tableID);
	let rowCount = table.rows.length;

	if (rowCount > 1) {
		let tableHeaderRowCount = 1;
		for (let i = tableHeaderRowCount; i < rowCount; i++) {
			table.deleteRow(tableHeaderRowCount);
		}
	}
}

// document.getElementById("timeList").innerHTML = tx;

// if (!isNaN(durationsArray[i])) {
// 	tx += " <mark>(" + formatMilliseconds(durationsArray[i]) + ")</mark>";
// 	document.getElementById("timeList").innerHTML = tx;
// }

// if (isNaN(durationsArray[i])) {
// 	tx += " <mark id='invalidMark'>(invalid range)</mark>";
// 	document.getElementById("timeList").innerHTML = tx;
// }
