const username = document.querySelector('#username');
const password = document.querySelector('#password');
const phone = document.querySelector('#phone');
const mssv = document.querySelector('#mssv');

function registerValidate() {
    if (checkUsername() & checkPassword() & checkPhone()&&checkMSSV()) {
        return true;
    }
    return false;
}
function checkUsername() {
    const regex = /^[a-z0-9]{6,30}$/;
    if (regex.test(username.value)) {
        username.classList.add('is-valid');
        username.classList.remove('is-invalid');
        return true;
    }
    username.classList.add('is-invalid');
    username.classList.remove('is-valid');
    return false;
}
function checkPassword() {
    const regex = /^(?=.*[0-9])(?=.*[A-Z]).{6,}$/;
    if (regex.test(password.value)) {
        password.classList.add('is-valid');
        password.classList.remove('is-invalid');
        return true;
    }
    password.classList.add('is-invalid');
    password.classList.remove('is-valid');
    return false;
}
function checkMSSV() {
    const regex = /^([^0])([0-9]{1,5})([A-Z]{2,4})([^0])([0-9]{1,5})$/;//số đầu không được là 0. ký tự sau phải là số (0-9) và chứa từ 1-5 ký tự .
    if (regex.test(mssv.value)) {
        mssv.classList.add('is-valid');
        mssv.classList.remove('is-invalid');
        return true;
    }
    mssv.classList.add('is-invalid');
    mssv.classList.remove('is-valid');
    return false;
}
function checkPhone() {
    const regex = /^(\+84|0)[0-9]{9}$/;
    if (regex.test(phone.value)) {
        phone.classList.add('is-valid');
        phone.classList.remove('is-invalid');
        return true;
    }
    phone.classList.add('is-invalid');
    phone.classList.remove('is-valid');
    return false;
}

username.addEventListener('input', checkUsername);
username.addEventListener('focusout', checkUsername);
password.addEventListener('input', checkPassword);
password.addEventListener('focusout', checkPassword);
mssv.addEventListener('input', checkMSSV);
mssv.addEventListener('focusout', checkMSSV);
phone.addEventListener('input', checkPhone);
phone.addEventListener('focusout', checkPhone);

// Hàm để tạo số ngẫu nhiên từ 1 đến 99
function getRandomNumber() {
    return Math.floor(Math.random() * 99) + 1;
  }
  
  // Hàm để tạo phép toán ngẫu nhiên và hiển thị trên màn hình
  function generateExpression() {
    var x = getRandomNumber();
    var y = getRandomNumber();
    var operator = Math.random() < 0.5 ? '+' : '-';
  
    var expression = x + ' ' + operator + ' ' + y;
    document.getElementById('expression').innerHTML = expression;
  }
  
  // Hàm để kiểm tra đáp án người dùng nhập
  function checkAnswer() {
    var expression = document.getElementById('expression').innerHTML;
    var answer = parseInt(document.getElementById('answer').value);
    var result = eval(expression); // Tính toán kết quả phép toán
  
    if (answer === result) {
      alert('Chính xác!');
    } else {
      alert('Sai rồi. Kết quả đúng là ' + result);
    }
  
    // Tạo phép toán mới sau khi kiểm tra
    generateExpression();
    document.getElementById('answer').value = '';
  }
  
  // Gọi hàm để tạo phép toán ban đầu
  generateExpression();