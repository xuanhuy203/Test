const closeSearch = document.getElementById('btn__close-input');
const search = document.getElementById('search');
const iconSearch = document.getElementById('iconSearch');
const inputSearch = document.getElementById('inputSearch');


closeSearch.addEventListener('click', function (){
    closeSearch.style.display = "none";
    inputSearch.setAttribute('style', 'display: none;')
    search.style.backgroundColor = 'transparent';
});


iconSearch.addEventListener('click', function() {
    closeSearch.style.display = "block"
    inputSearch.setAttribute('style', 'display: block;');
    search.style.backgroundColor = '#fff';
});


const btnAddStudent = document.getElementById('open-popup');
const closePopup = document.getElementById('close-popup');
const popup = document.getElementById('popup__add-student');

btnAddStudent.addEventListener('click', function(){
    popup.style.display = "block";
});

closePopup.addEventListener('click', function () {
    popup.style.display = "none";
});

const openTableStudentList = document.getElementById('openTable__student-list');
const tableStudentList = document.getElementById('table_students-management');
openTableStudentList.addEventListener('click', function (){
    tableStudentList.style.display = "block";
});
