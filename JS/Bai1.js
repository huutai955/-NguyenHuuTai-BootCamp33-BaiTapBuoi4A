/* Bài 1:Viết chương trình xuất 3 số theo thứ tự tăng dần
Input: 3 số nguyên a, b, c

Process: tạo một biến trung gian để giúp đổi chỗ (temp) sau đó dùng
if để cho sánh từng biến với nhau

Output: 3 số nguyên sắp xếp theo thứ tự tăng dần
*/

var a = 8;
var b = 3;
var c= 6;
var temp;

// Chuyển số bé nhất vào biến a
if (a>b) {
    temp = a;
    a = b;
    b = temp;
}

if (a>c) {
    temp = a;
    a = c;
    c = temp;
}

// Chuyển số bé gì vào biến b
if (b>c) {
    temp = b;
    b = c;
    c = temp;
}

console.log("Bài 1.")
console.log("3 số nguyên sắp sếp theo thứ tự tăng dần: ",a, b, c);


/*
Bài 2: Viết chương trình “Chào hỏi” các thành viên trong gia
đình với các đặc điểm
Input: User

Process: Cho người dùng nhập vào user phù hợp vd: Bố (B), Mẹ (M), 
anh Trai (A) và Em gái (E). Sau đó dùng câu lệnh if else để kiểm
tra vd nếu người dùng nhập "A" thì sẽ in ra câu lệnh tương đương.

Output: Câu lệnh chào hỏi tương đương với user
*/


var user = "B";

console.log("Bài 2")
if (user == "A") {
    console.log("Hello anh Trai")
}
else if (user == "B") {
    console.log("Hello Bố")
}
else if (user == "M") {
    console.log("Hello Mẹ")
}
else if (user == "E") {
    console.log("Hello Em gái")
}

/*
Bài 2:Viết chương trình xuất ra có bao nhiêu số 
lẻ và bao nhiêu số chẵn.
Input: 3 số nguyên x, y, z

Process: Nhập 3 số nguyên x, y, z sau đó tạo 2 biến countUp1
và countUp2 sau đó dùng câu lệnh if else để kiểm tra nếu là
số chẵn thì cho biến countUp1 tăng lên 1 giá trị còn là số
lẻ thì cho biến countUp2 tăng lên 1 giá trị

Output: Số lượng số chẵn và số lẻ
*/

var x = 7;
var y = 3;
var z= 9;
var countUp1 = 0;
var countUp2 = 0;
if (x % 2 == 0) {
    countUp1++;
}else {
    countUp2++
}


if (y % 2 == 0) {
    countUp1++;
}else {
    countUp2++
}

if (z % 2 == 0) {
    countUp1++;
}else {
    countUp2++;
}

console.log("Bài 3");
console.log("Có", countUp1, " số chẵn và ", countUp2, " số lẻ");


/*
Bài 2:Viết chương trình xuất ra có bao nhiêu số 
lẻ và bao nhiêu số chẵn.
Input: 3 cạnh tam giác AB, AC, BC

Process: Dùng câu lệnh if else để kiểm tra với điều kiện
phù hợp xem đó là tam giác gì.(so sánh các cạnh với nhau
không có độ)

Output: dạng tam giác phù hợp với 3 cạnh đã cho
*/


var AB = 2;
var AC = 67;
var BC = 3;
// Với biến sum là tổng bình phương hai cạnh góc vuông
var sum = Math.pow(AB, 2) + Math.pow(AC, 2);


console.log("Bài 4")
// Kiểm tra tam giác đều
if (AB == AC && AB == BC && AC == BC) {
    console.log("Tam giác đều");
}
// Kiểm tra tam giác cân
else if (AB == AC || AB == BC || AC == BC) {
    console.log("Tam giác cân");
}
// Kiểm tra tam giác vuông với A là góc vuông
else if (sum == Math.pow(BC, 2)) {
    console.log("Tam giác vuông tại góc A");
}else {
    console.log("Tam giác thường");
}