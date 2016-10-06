var xacDinhTamGiac = function xacDinhTamGiac(a, b, c, callback) {
  var check = 0;

  if (a > 0 && b > 0 && c > 0) {
    if (a + b > c && a + c > b && c + b > a) {
      if (a === b && a === c) {
        check = 3;
      } else if (a === b || b === c || a === c) {
        check = 2;
      } else if (a * a === b * b + c * c || b * b === a * a + c * c || c * c === a * a + b * b) {
        check = 4;
      } else {
        check = 1;
      }
    } else {
      return callback(new Error('Khong phai tam giac'));
    }
  }

  var result = check;
  return callback(null, result);
};

module.exports = {
  xacDinhTamGiac
};
