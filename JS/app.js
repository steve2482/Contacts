$(document).ready(function() {
  // Form Fields
  var firstName = $("#first-name");
  var lastName = document.getElementById("last-name");
  var phone = document.getElementById("phone");
  var street = document.getElementById("street");
  var city = document.getElementById("city");
  var state = document.getElementById("state");

  // Storage Array
  var contactList = [];

  $('.add-button').click(function(e) {
    e.preventDefault();
    $('.contact-form').submit();
    console.log($('#firstName').val());
  });
});
