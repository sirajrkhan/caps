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
    // How will you make sure that newHTML doesn't contain any < or > ?
    // Your code goes here!

    // Don't delete this line!
    return newHTML;
};
