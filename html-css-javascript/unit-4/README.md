>### This keyword

    - In JavaScript, the this keyword **refers to an object**.
    - In an object method, this refers to the object.
    - Alone, this refers to the **global object**.
    - In a function, this refers to the **global object**.
    - In a function, in strict mode, this is **undefined**.
    - In an event, this refers to the element that received the event.
    - this is not a variable. It is a keyword. You cannot change the value of this.
    - `call()`, `apply()`: Cả hai đều có thể được sử dụng để gọi một phương thức đối tượng với một đối tượng khác làm đối số.
    - With the `bind()` method: là một đối tượng có thể mượn 1 phương thức từ đối tượng khác.

    - EX: 
        ```Javascript
        // car là 1 đối tượng, khai báo car
        const car = {
            name: 'Vinfast',
            color: 'white',
            model: '2023',
            nameModel : function () {
                return this.name + " " + this.color + " " + this.model // this dùng để truy cập thuộc tính của đối tượng
            }
        };
        ```

>### Async(bất đồng bộ)- Asynchronous và Synchronous(đồng bộ)

    - KN: hiểu đơn giản nó là thứ tự chạy chương trình... khi đoạn code này chay xong thì đoạn code khác mới được chạy thì đoạn code chạy sau được cho vào hàng chờ để chờ được chạy thì đó là sự bất đồng bộ.

    - EX:
        ```Javascript
            console.log('1');
            console.log('2');
            setTimeout(function() {
                console.log('4')
            }, 3000) <!-- set time sau 3000ms-3s thì method này chạy -->
            console.log('3');
            
        ```
    - Trong ex-above các câu lệnh console là câu lệnh đồng bộ (synchronous) cho nên sẽ chạy các câu lệnh console trước-- display: 1, 2, 3 -- khi chạy đến 1, 2, đến hàm setTimeout() thì js nhận thấy đây là hàm bất đồng bộ nên đưa sang hàng chờ đợi các câu lệnh console chạy trước cho nên sẽ chạy ra: 1, 2, 3 sau đó chạy setTimeout() --- sau 3s chạy function () ==> 4 và chạy xong all ra: 1, 2, 3, 4.

>### HTML DOM--Document__Object__Model (Mô hình đối tượng Doc)

    - DOM Tree(cây mô hình đối tượng): chứa các phần tử và thuộc tính của các phần tử dó của Doc.
    - When a web page is loaded, the browser creates a Document Object Model of the page.
    - The HTML DOM model is constructed as a tree of Objects:

- The HTML DOM Document Object:
  - **Finding HTML Elements:**

    - `document.getElementById(id)`: Find an element by element **id**.
    - `document.getElementsByTagName(name)`: Find elements by **tag name**.
    - `document.getElementsByClassName(name)`: Find elements by **class name**.

  - **Changing HTML Elements:**

    **Property**======================**Description**
    - `element.innerHTML = new html content`: Change the inner HTML of an element
    - `element.attribute = new value`: Change the attribute value of an HTML element
    - `element.style.property = new style`: Change the style of an HTML element

    **Method**========================**Description**
    - `element.setAttribute(attribute, value)`: Change the attribute value of an HTML element

  - **Adding and Deleting Elements:**
    **Method**========================**Description**
    - `document.createElement(element)`: Create an HTML element.
    - `document.removeChild(element)`: Remove an HTML element.
    - `document.appendChild(element)`: Add an HTML element.
    - `document.replaceChild(new, old)`: Replace an HTML element.
    - `document.write(text)`: Write into the HTML output stream.

  - *EXAMPLE: VALIDATION FORM*

     ```Javascript

        function showError(formItemId, errorMessage) {
        clearError(formItemId);

        const formItem = document.getElementById(formItemId);// lấy ptu và gán gtri
        formItem.classList.add("form__item--error"); // thêm 1 class tên...
        const errorSpan = document.createElement('span');// thêm 1 thẻ span 
        errorSpan.className = "form__error-message";// đặt tên lớp thẻ span
        errorSpan.textContent = errorMessage;// chèn nội dung cho thẻ span
        formItem.appendChild(errorSpan);// chèn vào cuối phần tử thông báo lỗi
        }

        function clearError(formItemId) {
            const formItem = document.getElementById(formItemId);
            const isError = formItem.classList.contains("form__item--error");// kiểm tra xem formItem có chứa class... hay không và gán ...
            if (!isError) {
                return;
            }

            formItem.classList.remove("form__item--error");
            const errorSpan = formItem.getElementsByClassName("form__error-message");// lấy class name...
            formItem.removeChild(errorSpan[0]);// xoá phẩn tử con đầu tiên trong errorSpan
        }
    ```

  - HTML DOM element
    **Properties and Methods:**
    - `accessKey`: Đặt hoặc trả về thuộc tính khóa truy cập của một phần tử.
    - `addEventListener()`: Gắn một trình xử lý sự kiện vào một phần tử.
    - `appendChild()`: Thêm (gắn thêm) một nút con mới vào một phần tử thuộc tính Trả về NamedNodeMap: thuộc tính của phần tử.
    - `blur()`: Xóa tiêu điểm khỏi một phần tử.
    - `childElementCount`: Trả về số phần tử con của một phần tử.
    - `childNodes`: Trả về một NodeList gồm các nút con của một phần tử.
    - `children`: Trả về một HTMLCollection gồm các phần tử con của phần tử.
    - `classList`: Trả về (các) tên lớp của một phần tử.
    - `className`: Đặt hoặc trả về giá trị của thuộc tính lớp của một phần tử.
    - `click()`: Mô phỏng nhấp chuột vào một phần tử. .....

>### JavaScript Window - The Browser Object Model
  - tương tự như DOM ...
