var now = new Date();
var month = now.getMonth() + 1;
var day = now.getDay() + 1;
if (day == 1){day = "понедельник"} else if (day == 2) {day = "вторник"} else if (day == 3) {day = "среда"} else if (day == 4) {day = "четверг"} else if (day == 5) {day = "пятница"} else if (day == 6) {day = "суббота"} else if (day == 7) {day = "воскресенье"};
document.write("Сегодня " + now.getDate() + "." + month + "." + now.getFullYear() + ", " + day);