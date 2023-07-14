function openPopupButton() {
    // const openPopup = document.getElementById('open-popup');//Lấy phần tử id 'open-popup'và gán cho biến openPopup
    // closePopup.style.display = 'block';
    const openPopup = document.getElementById('container-popup').style.display = 'block';
}
// openPopup.addEventListener('click', openPopupButton);
function closePopupButton() {
    document.getElementById('container-popup').style.display = 'none';
}


function validateForm() {
    let firstNameValue = document.forms["form"]["firstName"].value.trim();
    console.log("FirstName đã nhập là: " + firstNameValue);

    let lastNameValue = document.forms["form"]["lastName"].value.trim();
    console.log("LastName đã nhập là: " + lastNameValue);

    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    
    // document.getElementById('firstNameItem').addEventListener('click',  true)
    // document.getElementById('lastNameItem').addEventListener('click', true)

    if(firstNameValue === "") {
        showError("firstNameItem", "FirstName là bắt buộc");
        firstNameInput.style.borderColor = 'red';
        return false;// Trả về False nếu có lỗi
    }else {
        clearError("firstNameItem");
        firstNameInput.style.borderColor = 'purple'
    }

    if(lastNameValue === ""){
        showError("lastNameItem", "LastName là bắt buộc");
        lastNameInput.style.borderColor = 'red';
        return false;// Trả về False nếu có lỗi
    }
    else {
        clearError("lastNameItem");
        lastNameInput.style.borderColor = 'purple'
    }

    return true; // Trả về true nếu không có lỗi
}

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


// responsive menu
function hideLogoIcons (){
    document.getElementsByClassName('hide')[0].style.display = 'none';
    document.getElementsByClassName('hide')[1].style.display = 'none';
    document.getElementsByClassName('menu-responsive')[0].style.display = 'none';
    document.getElementById('menu-main').style.display = 'block';
    document.getElementById('menu-main').style.marginTop = '15px';
}