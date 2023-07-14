// car là 1 đối tượng, khai báo car
const car = {
    name: 'Vinfast',
    color: 'white',
    model: '2023',
    nameModel : function () {
        return this.name + " " + this.color + " " + this.model // this dùng để truy cập thuộc tính của đối tượng
    }
};

const car2 = {
    name: 'lexus',
    color: 'black',
    model: '2023',
};

// Cách truy cập đối tg
console.log(car.name); //cách 1
console.log(car['name']); //Cách 2 
console.log(car.nameModel());

let x = car.nameModel.call(car2); // dùng hàm call để gọi đối tượng có chung thuộc tính
console.log(x);
