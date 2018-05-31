module.exports = {

  formatMoney: function (amount) {

    let len = ('' + amount).length;
    console.log(len);

    switch (len) {

      case len<=3 : console.log(amount);

      case len = 4: console.log()


      default: console.log(amount);
    }
  }


}