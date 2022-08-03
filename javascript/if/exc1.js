var price = +prompt("Enter price : ");
var payment = +prompt("Enter payment : ");
var res = 0;

if (payment > price) {
	res = payment - price;
	alert("העודף שלך : " + res);
} else {
	res = price - payment;
	alert("עליך להוסיף : " + res + " ש''ח ");
}