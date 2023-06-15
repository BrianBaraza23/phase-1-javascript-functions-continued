// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

saturdayFun();

const mondayWork = function(activity2 = "go to the office"){
    return `This Monday, I will ${activity2}.`;
}

activity2("work from home");

function wrapAdjective(){
    function inner(activity3 ="special"){
        return `you are ${activity3}`
   };
}

wrapAdjective("%")("a dedicated programmer");