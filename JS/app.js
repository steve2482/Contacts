$(document).ready(function() {
  // Form Fields
  var id = 0;
  var firstName = $("#first-name");
  var lastName = $("#last-name");
  var phone = $("#phone");
  var street = $("#street");
  var city = $("#city");
  var state = $("#state");

  // Storage Array
  var contactList = [];

  function Contact(id, firstName, lastName, phone, street, city, state) {
    this.id = id;
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
    var contact = new Contact(id, firstName.val(), lastName.val(), phone.val(), street.val(), city.val(), state.val());
    contactList.push(contact);
    $("#contact-names").append(
          '<li id="names"><a href="#" class="hello">' + contact.firstName + ' ' + contact.lastName + "</a></li>");
    id++;
  });

  // Click Contact Name to Display Contact Info

  $('#contact-names').children().click(function(e) {
    e.preventDefault();
    console.log("Hello");
  });
});
