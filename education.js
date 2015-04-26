var education = {
    "schools": [
        {
            "name": "St. Umar HSS",
            "city": "Indore",
            "course": "Higher Sec",
            "majors": [
                "Physics",
                "Chemisty",
                "Biology"
            ],
            "year": 1994
        },
        {
            "name": "St. Umar",
            "city": "Indore",
            "course": "High School",
            "majors": [
                "Physics",
                "Chemisty",
                "Biology"
            ],
            "year": 1992
        }
    ]
};

var charEscape = function(_html) {
    var newHTML = _html.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return newHTML;
};

//takes name as single string returns in international format -- Siraj KHAN
var intName = function (str){
	var x = str.split(" ");	
	x[1] = x[1].toUpperCase();
	x[0] = x[0].slice(0,1).toUpperCase() + x[0].slice(1).toLowerCase();
	console.log("-------"+x[0]+ " " + x[1]);
	return x[0]+ " " + x[1];
}