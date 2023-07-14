>### JSON

- *JSON*(**J**ava**S**cript **O**bject **N**otation): là 1 định dạng dữ liệu (chuỗi).
- JSON thể hiện định dạng đối tượng: Number, Boolean, Null, Object ...
- Từ JSON ==> JS use method `Parse()`(giải mã), còn ngược lại use method `Stringify()`(Mã hoá) ==> JSON.

- ***EXAMPLE***: JSON: "car = {
    "band": "Poscher",
    "color": "white",
    "model": "2028"
}";

>### WEB APIs

- Simple standard là một giao diện lập trình ứng dụng (Application Programming Interface) đây là nơi giao tiếp giữa client và server, không chỉ vậy WEB APIs còn cung cấp một số phương thức để thực hiện một công việc nào đó.

- Giao diện lập trình ứng dụng (API) là cách để hai hoặc nhiều chương trình máy tính giao tiếp với nhau. Nó là một loại giao diện phần mềm, cung cấp dịch vụ cho các phần mềm khác. Một tài liệu hoặc tiêu chuẩn mô tả cách xây dựng hoặc sử dụng một kết nối hoặc giao diện như vậy được gọi là đặc tả API. Một hệ thống máy tính đáp ứng tiêu chuẩn này được cho là triển khai hoặc hiển thị API. Thuật ngữ API có thể đề cập đến đặc điểm kỹ thuật hoặc triển khai.

- EX: api chứa 10 users: <https://jsonplaceholder.typicode.com/users>

>### Fetch API (Call API)

- Call API để lấy dữ liệu từ phía Back-end(URL) để xứ lý logic Font-End.
- Fetch trả về Promise

- ***EX:***

  - ```Javascript
        const api = 'https://jsonplaceholder.typicode.com/users';
        fetch(api) <!-- lấy ra 10 user từ URL -->
            .then (function (response) {
                return response.json(); <!-- dòng này lại trả về 1 promise do response.json() cho nên phải xử lý promise bước nữa. -->
            })
            .then(function(users) {
                console.log(users);
            })
    ```


>### AJAX 

- stands for Asynchronous JavaScipt And XML.
- ***AJAX*** *is not a programming language*. It's Technique allows accessing from web pages to Web Server.
- AJAX just uses a combination of:
  - A browser built-in XMLHttpRequest object (to request data from a web server).
  - JavaScript and HTML DOM (to display or use the data).

- EX: AJAX Request:

    ```Javascript
        xhttp.open("GET", "ajax_info.txt", true); <!-- Send a Request To a Server -->
        xhttp.send();
    ```

    ...
