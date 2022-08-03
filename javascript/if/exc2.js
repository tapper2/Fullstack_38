var price1 = +prompt("Enter price1 : ");
var price2 = +prompt("Enter price2 : ");
var price3 = +prompt("Enter price3 : ");
var payment = +prompt("Enter payment : ");

var sum = price1 + price2 + price3;

if (payment > sum) {
	res = payment - sum;
	alert("העודף שלך : " + res);
} else if (sum > payment) {
	res = sum - payment;
	alert("עליך להוסיף : " + res + " ש''ח ");
} else {
	alert("תודה רבה");
}
