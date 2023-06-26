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