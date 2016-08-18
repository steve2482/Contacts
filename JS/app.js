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

  // Form validation(not working)

  function validateForm() {
    var x = document.forms['.contactForm']['.fname'].val();
    if (x === null || x === '') {
      $('.more-info-modal').show();
    }
  }

  // Submit Contact to Contacts list

  $('#add-button').click(function(e) {
    e.preventDefault();
    validateForm();
    var contact = new Contact(id, firstName.val(), lastName.val(), phone.val(), street.val(), city.val(), state.val());
    contactList.push(contact);
    $("#contact-names").append(
          '<li class="names"><a href="#" id="' + contact.id + '">' + contact.firstName + ' ' + contact.lastName + "</a></li>");
    id++;
    document.getElementById("contact-form").reset();
  });

  // Click Contact Name to Display Contact Info

  $('#contact-names').click('a', function(e) {
    var id = e.target.id;
    console.log(e.target, e.target.id);
    $('#fName-display').text(
      contactList[id].firstName + ' ' + contactList[id].lastName);
    $('#phone-display').text(
      contactList[id].phone);
    $('#street-display').text(
      contactList[id].street);
    $('#city-display').text(
      contactList[id].city);
    $('#state-display').text(
      contactList[id].state);
  });
});
