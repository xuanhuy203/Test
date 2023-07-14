>#### Javascript Cơ Bản

- Js là 1 trong 3 ngôn ngữ phải học của 1 web dev.
- JavaScript and Java are completely(hoàn toàn) different languages, both in concept(khái niệm) and design.
- JavaScript was invented(phát minh) by Brendan Eich in 1995, and became an ECMA standard(tiêu chuẩn) in 1997.
- ECMA-262 is the official(chính thức) name of the standard. ECMAScript is the official name of the language.

>##### Js là một ngôn ngữ THÔNG DỊCH

- THÔNG DỊCH: là viết đến đâu dịch(chạy) đến đó.
- BIÊN DỊCH: như là dịch sách dịch hết 1 quyển, dịch hết r mới chạy.

>##### Version JS

- The Original JavaScript ES1 ES2 ES3 (1997-1999)- Tổ chức JAVASCRIPT.
- The First Main Revision ES5 (2009)- Phiên bản chính đầu tiên.
- The Second Revision ES6 (2015)- Phiên bản sửa đổi thứ 2.
- All Yearly Additions (2016, 2017, 2018, 2019, 2020)- Phiên bản bổ sung hằng năm.

>##### JavaScript Can Change HTML Content

- One of many JavaScript HTML methods is `getElementById()`.
- The example below "finds" an HTML element (with id="demo"), and changes the element content (innerHTML) to "Hello JavaScript":

```
document.getElementById("demo").innerHTML = "Hello JavaScript"; 
```

>##### JavaScript Can Change HTML Attribute Values

- In this example JavaScript changes the value of the src (source) attribute of an <img> tag:

```
`document.getElementById('myImage').src='pic_bulbon.png'`
```

- (thay đổi nguồn tài nguyên ảnh thành

```
src='pic_bulbon.png)
```
  
>##### JavaScript Can Change HTML Styles (CSS)

- Changing the style of an HTML element, is a variant(sự biến thể) of changing an HTML attribute:

```
`document.getElementById("demo").style.fontSize = "35px";`
```

>##### JavaScript Can Hide or Show HTML Elements

- Hiding HTML elements can be done by changing the display style:

```
document.getElementById("demo").style.display = "none";
document.getElementById("demo").style.display = "block";
```

>#### HTML form

- An HTML form is used to collect user input. The user input is most often sent to a server for processing.

>##### The `<form>` Element

- The `<form>` element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.

>##### Forms Control

- `<input>`
- `<select>`
- `<textarea>`
- `<option>`
- `<button>`
- `<label>`

>#### Validate Forms sử dụng JS

- Form Validation(bắt lỗi) là thường được sử dụng tại máy chủ server, nếu máy khách(client) nhập không đúng định dạng yêu cầu
thì máy chủ sẽ gửi và bắt máy khách(client) phải nhập lại ...

>#### Validate Form sử dụng Javascript là

- Basic Validation: Trước hết, biểu mẫu phải được kiểm tra để đảm bảo rằng tất cả các trường bắt buộc đã được điền vào. Nó sẽ chỉ yêu cầu một vòng lặp qua từng trường trong biểu mẫu và kiểm tra dữ liệu.
- Data Format Validation: Thứ hai, dữ liệu được nhập vào phải được kiểm tra về hình thức và giá trị chính xác. Mã của bạn phải bao gồm logic thích hợp để kiểm tra tính đúng đắn của dữ liệu.
