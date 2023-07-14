//Khai báo mảng:

const mangSoNguyen = [4, 2, 1, 3, 5] // Mảng 5pt 
let fruits = ["mango", "strawbery", "lemon", "Apple"];

// Cách truy cập:

console.log("\nGiá trị phần tử đầu tiên: " + mangSoNguyen[0]);
console.log("Giá trị phần tử cuối cùng: " + fruits[0]);

const arr_length1 = mangSoNguyen.length// lấy số lượng phần tử của arr mangSoNguyen
const arr_length2 = fruits.length// lấy số lượng phần tử của arr fruits
console.log("\nSố lượng phần tử mảng mangSoNguyen : " + arr_length1);
console.log("Số lượng phần tử mảng fruits : " + arr_length2);

// Cách thay đổi giá trị 1 pt mảng:

console.log("\nPhần tử trước khi thay đổi: " + fruits[0]);
fruits[0] = 'orange';
console.log("Phần tử sau khi thay đổi giá trị: " + fruits[0]);

// Các Method hay dùng.

fruits.toString();//convert to string
console.log("\nMảng fruits: " + fruits);
console.log("Mảng số nguyên: " + mangSoNguyen)

// sort() // Sort the array.

console.log("\nBefore Sort(): " + mangSoNguyen)
mangSoNguyen.sort();
console.log("After Sort(): " + mangSoNguyen)

//`join(" * ");` // noi chuoi = ki tu --

console.log("\nMảng sau khi dùng method join'('--'):",  fruits.join('--'));

//`pop()`, shift // Lấy pt cuối cùng[length-1] và pt đầu tiên [0] rồi xoá khỏi mảng.
console.log("\nMảng ban đầu: "+ fruits.join("--"));
console.log("Lấy pt cuối cùng mảng fruits `pop()`: "+fruits.pop());
console.log("Lấy pt đầu tiên mảng fruits `shift()`: "+fruits.shift());
console.log("Mảng sau khi lấy đi phần tử đầu tiên và cuối cùng: "+fruits.join('--'));

fruits[fruits.length] = "Kiwi"
console.log("\nMảng sau khi nối phần tử 'Kiwi' vào cuối cùng mảng `fruits[fruits.length] = 'Kiwi'`: "+fruits.join('--'));

fruits.unshift("banana");
console.log("\nMảng sau khi chèn 1 phần tử vào đầu mảng `unshirt()`: "+fruits.join('--'));

delete fruits[0] ,
delete fruits[fruits.length - 1]
console.log("Mảng sau khi xoá đi phần tử đầu tiên và cuối cùng `delete()`: "+fruits.join('--'));

console.log('Sau khi nối 2 mảng lại `concat()`:' + mangSoNguyen.concat("--"+fruits));