var price = +prompt("Enter price : ");
var payment = +prompt("Enter payment : ");

if (payment > price) {
	res = payment - price;
	alert("העודף שלך : " + res);
} else {
	res = price - payment;
	alert("עליך להוסיף : " + res + " ש''ח ");
}
