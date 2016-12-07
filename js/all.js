
function Timezone (selector) {

  this.nodeList = document.querySelectorAll(selector);

  this.date = new Date();

  this.timeOffset = this.date.getTimezoneOffset() / 60;

  this.timezone = -this.timeOffset;

  var that = this;

  setInterval ( function () {
    that.nodeList.forEach( function (value) {
      value.innerHTML = that.getTime();
    })
  }, 1000)
}

Timezone.prototype = {

  getTime: function () {

    if (Math.abs(this.timezone > 12)) {
      return;
    }

    var now = Date.now();

    var hours = 3600000;

    // now + utc + local
    var utcTime = now + this.timeOffset * hours + this.timezone * hours;

    var result = new Date(utcTime).toLocaleString();

    return result;
  },

  getZoneTime: function (z) {
    this.timezone = z;
  }
}

var time = new Timezone('.box');

time.getZoneTime(8);
