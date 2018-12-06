angular.
  module('phonecatApp').
  component('phoneList', {
    template:
    '<p>Total number of phones: {{$ctrl.phones.length}}</p>'+
        '<ul>' +
          '<li ng-repeat="phone in $ctrl.phones">' +
            '<span>{{phone.name}}</span>' +
            '<p>{{phone.snippet}}</p>' +
          '</li>' +
        '</ul>',
    controller: function PhoneListController() {
      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
    }
  });


  function() {
    var divSm1d = document.getElementById("sm1d");
    var smFrameSrc = document.getElementById("smrf").src;
    document.getElementById("smIframe").src = document.getElementById("smIframe").src + '?param=' + divSm1d.getAttribute("data-pid");
    console.log("smFrameSrc: " + smFrameSrc + ", " + divSm1d.getAttribute("data-pid"));
}