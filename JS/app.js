$(document).ready(function() {
  // Form Fields
  var firstName = $("#first-name");
  var lastName = $("#last-name");
  var phone = $("#phone");
  var street = $("#street");
  var city = $("#city");
  var state = $("#state");

  // Storage Array
  var contactList = [];

  function makeContact(firstName, lastName, phone, street, city, state) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.street = street;
    this.city = city;
    this.state = state;
  }

  // Submit Contact to Contacts list

  $('#add-button').click(function(e) {
    e.preventDefault();
    var contact = new makeContact(firstName.val(), lastName.val(), phone.val(), street.val(), city.val(), state.val());
    contactList.push(contact);
  // Show Colapsed Contact List
    for (var i in contactList) {
      if (contactList.hasOwnProperty) {
        $("#contact-names").append(
          '<li id="names"><a href="#">' + contactList[i].firstName + ' ' + contactList[i].lastName + "</a></li>");
      }}
  });
});
