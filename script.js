'use strict'; 

let money = prompt("Ваш бюджет на месяц?"),
		time = prompt("Введите дату в формате YYYY-MM-DD");	
		console.log(money);
		console.log(time);

let answerA = prompt("Введите обязательную статью расходов в этом месяце"),
	answerB = prompt("Во сколько обойдется?"),
	answerC = prompt("Введите обязательную статью расходов в этом месяце"),
	answerD = prompt("Во сколько обойдется?")	
	// obj[key] = value;	
const days = 30;	




let appData = {
	budget: money,
	timeData: time,
	expenses: {
		
	},
	optionalExpenses: {

	},
	income: [

	],
	savings: false
};

appData.expenses[answerA] = answerB;
appData.expenses[answerC] = answerD;



// console.log(appData.expenses.first + answerA);
// console.log(appData.expenses.second + answerB);
// console.log(appData.expenses.first + answerC);
// console.log(appData.expenses.second + answerD);
console.log(appData.expenses)

alert("Ваш бюджет на 1 день: " + money / days + " рублей");







