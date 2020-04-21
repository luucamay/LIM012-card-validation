const validator = {
  isValid: (creditCardNumber) => {
    console.log(creditCardNumber)
    let creditCardNumberArr = creditCardNumber.split('');
    const n = creditCardNumber.length;
    let digitsSum = 0
    for (let i = 0; i < n; i++) {
      let currDigit = parseInt(creditCardNumberArr[i]);
      if (i % 2 === 0) {
        currDigit *= 2;
        if (currDigit > 9) {
          currDigit -= 9
        }
      }
      digitsSum += currDigit
    }
    if (digitsSum % 10 === 0)
      return true;
    return false;
  },

  maskify: (creditCardNumber) => {

  }
};

export default validator;
