# caps
Capitalization of first word using plain javascript

// todo-- move it to JS
var s = "audacity";

var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
   
    return cap(slicer(s,1)); 
};

var cap = function (x){
 return x.charAt(0).toUpperCase() + slicer(x,1); 
};

var slicer = function (a,num){
    return a.slice(num,a.length);
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));
