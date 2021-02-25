function saturdayFun(saturdayActivity = "roller-skate") {
    return `This Saturday, I want to ${saturdayActivity}!`;
}

const mondayWork = function(mondayActivity = "go to the office") {
    return `This Monday, I will ${mondayActivity}.`;
}


function wrapAdjective(flair = "*") { 
    return function(param) {
        console.log(`You are ${flair}${param}${flair}!`);
    }
}
wrapAdjective()("a hard worker")
wrapAdjective("||")("a dedicated programmer")