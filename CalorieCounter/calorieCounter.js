function weekDay(userDay){
 
    if (userDay === 'Monday' || userDay === 'Tuesday' || userDay === 'Wednesday' || userDay === 'Thursday' || userDay === 'Friday' || userDay === 'Saturday' || userDay === 'Sunday'){
        return userDay;
        } else {
            return 'Please enter a valid day of the week';
        }
}

function calorieAmount(calories){

    return calories;
}


//want to add a way the user will be prompted to enter a calorie count for each day of the week//
//Option 1 - just prompt the user to enter an amount for each day
//Option 2 - prompt the user for the day and the amount of calories consumed and log the daily count

function inputCaloriesByDay(day) {
    if(userDay === 'Monday'){
        return calories;
    } else if (day === 'Tuesday'){
        return calories;
    } else if (day === 'Wednesday'){
        return calories;
    } else if (day === 'Thursday'){
        return calories;
    } else if (day === 'Friday'){
        return calories;
    }  else if (day === 'Saturday'){
        return calories;
    } else if (day === 'Sunday'){
        return calories;
    } else {
        return "Please choose a valid day"
    }
}

function getTotalCalories(){
    return inputCaloriesByDay('Monday') +
    inputCaloriesByDay('Tuesday') +
    inputCaloriesByDay('Wednesday') +
    inputCaloriesByDay('Thursday') +
    inputCaloriesByDay('Friday') +
    inputCaloriesByDay('Saturday') +
    inputCaloriesByDay('Sunday');
}

function getIdealCalories(){
    var idealDailyCalories = 2000;
    return idealDailyCalories *7;
}

function calculateHealthPlan(){
    var actualCalories = getTotalCalories();
    var idealCalories = getIdealCalories();
    if (actualCalories === idealCalories){
        return "You are right on track. Keep up the good work!";
    }
    if(actualCalories > idealCalories){
        return "Back away from the table and head to the gym!";
    } else{
        return "Time for seconds";
    }
}

function countCalories() {
    var promptUserDay = prompt('What day of the week is it?');
    var day = weekDay(promptUserDay);
    var promptcalorieAmount = prompt('How many caolores did you consume today?');
    var totalCalories = calorieAmount();

console.log(day);
console.log(totalCalories);
console.log(calculateHealthPlan);

}

countCalories();
