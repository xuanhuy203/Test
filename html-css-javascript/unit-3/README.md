### 1. **Javascript-Object**

- Object: example: a car is an object.
- A car has properties like weight and color,name, model, ...
  - `
  const car = {
    commonname: '..',
    detailname: '..'.
    color: '..',
    model: '..',
    ...
  }`

- Accessing object properties, method:
  - `objectName.methodName()` .
  - Example: `name = car.fullname()`.
  - Example: `name = car.color` || `name = car["color"]`.

### 2. **Array(thuộc object)**

- Array: An array is a special variable, which can hold more than one value.
- Creating an Array:
  - `const array_name = [item1, item2, ...];`.
  - `const cars = ["Saab", "Volvo", "BMW"];`.

- Accessing Array Elements:
  - `const cars = ["Saab", "Volvo", "BMW"];`
  - `let car = cars[0];`

- Access the Full Array:
  - `const cars = ["Saab", "Volvo", "BMW"];`
  - `document.getElementById("demo").innerHTML = cars;`

- Changing an Array Element:
  - `cars[0] = "Opel";` - changing element 'Saab' in array.`

- Methods in Array:
  - `toString()`// convert array to string.
  - `length` // Returns the number of elements.
  - `sort()`// Sort the array.
  - `join(" * ");`// noi chuoi = ki tu *
  - `pop()`// lấy pt cuối cùng [length-1] và xoá khỏi mảng.
  - `shift()`// lấy pt đầu [0] và xoá khỏi mảng.
  - `push()`// insert an element in arr.
  - `fruits[fruits.length] = "Kiwi";` // Noi 1 pt vao cuoi
  - `unshift()`// insert vao pt dau tien [0].
  - `delete()`// Del element in arr.
  - `concat()`// Concatenating 2 arr.
  - `splice()`
  - `slices()`

### 3. **JavaScript Functions**

- A JavaScript function is a block of code designed to perform a particular task.
- A JavaScript function is executed when "something" invokes it (calls it).

  - ```javascript
        function name(parameter1, parameter2, parameter3) {
        // code to be executed
    }
    ```

- Used function: `functionName()`.
- Return function:
  - `function myFunction (a) { return: a;}`
- Arrow Function:
  - `const myArrowFunction = () => a+b+c;`
  - `const myArrowFunction = () => {
        //statements
        }`

### 4. **Hoisting**

- Simple Standard: khi khai báo các function, var, js thwo cơ chế sort lên đầu doc để thực hiện ==> dùng không bị lỗi và khai báo ở đâu cũng được

### 5. **Strict Mode (nghiem ngat, han che cua js)**

- Tránh xảy ra cá error kh mong muốn về syntax., ...

### 6. **Scope**

- Phạm vi sử dụng các var,...
- Scope function() các biến được khai báo trong function thì phạm vi sử dụng chỉ trong function, nhưng khi được khai báo bên ngoài function thì biến đó vẫn sử dụng được trong function

### 7. **JavaScript Class**

-**Syntax:** Use the keyword class to create a class, **Always add a method named constructor().**

- `````javascript
    ```
    class ClassName {
        constructor() { ... }
    }
    ```

- A JavaScript class is **not an object**.
- It is a **template(bản mẫu)** for JavaScript objects.
- When you have a class, you can use the class to create objects:
  - `const myCar1 = new Car("Ford", 2014);`
- Class Method:

  ```javascript
    class ClassName {
        constructor() { ... }
        method_1() { ... }
        method_2() { ... }
        method_3() { ... }
    }
    ```

### 8. **JavaScript Errors**

- *Throw, and Try...Catch...Finally*
  - The try statement defines a code block to run (to try).
  - The catch statement defines a code block to handle any error.
  - The finally statement defines a code block to run regardless of the result.
  - The throw statement defines a custom error.

    ```javascript
        try {
            Block of code to try
        }
        catch(err) {
            Block of code to handle errors
        }
    ```

  - The throw Statement:
        - ```
            throw "Too big";    // throw a text
            throw 500;
        ```
  - If you use throw together with try and catch, you can control program flow and generate custom error messages.

- **VALIDATION INPUT:**
  - Example:

  - ```html
            <!DOCTYPE html>
            <html>
            <body>

            <p>Please input a number between 5 and 10:</p>

            <input id="demo" type="text">
            <button type="button" onclick="myFunction()">Test Input</button>
            <p id="p01"></p>

            <script>
            function myFunction() {
            const message = document.getElementById("p01");
            message.innerHTML = "";
            let x = document.getElementById("demo").value;
            try {
                if(x.trim() == "") throw "empty";
                if(isNaN(x)) throw "not a number";
                x = Number(x);
                if(x < 5) throw "too low";
                if(x > 10) throw "too high";
            }
            catch(err) {
                message.innerHTML = "Input is " + err;
            }
            }
            </script>

            </body>
            </html>
        ```

### 9. **JavaScript Events**

- HTML Events:
    1. onclick Xảy ra khi click vào thẻ HTML
    2. ondbclick Xảy ra khi double click vào thẻ HTML
    3. onchange Xảy ra khi giá trị (value) của thẻ HTML đổi. Thường dùng trong các đối thẻ form input
    4. onmouseover Xảy ra khi con trỏ chuột bắt đầu đi vào thẻ HTML
    5. onmouseout Xảy ra khi con trỏ chuột bắt đầu rời khỏi thẻ HTML
    6. onmouseenter Tương tự như onmouseover
    7. onmouseleave Tương tự như onmouseout
    8. onmousemove Xảy ra khi con chuột di chuyển bên trong thẻ HTML
    9. onkeydown Xảy ra khi gõ một phím bất kì vào ô input
    10. onload Sảy ra khi thẻ HTML bắt đầu chạy, nó giống như hàm khởi tạo trong lập trình hướng đối tượng vậy đó.
    11. onkeyup Xảy ra khi bạn gõ phím nhưng lúc bạn nhã phím ra sẽ được kích hoạt
    12. onkeypress Xảy ra khi bạn nhấn môt phím vào ô input
    13. onblur Xảy ra khi con trỏ chuột rời khỏi ô input
    14. oncopy Xảy ra khi bạn copy nội dung của thẻ
    15. oncut Xảy ra khi bạn cắt nội dung của thẻ
    16. onpaste Xảy ra khi bạn dán nội dung vào thẻ
