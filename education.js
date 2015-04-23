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
