$(document).ready(function() {
  // Form Fields
  var id = 0;
  var firstName = $("#first-name");
  var lastName = $("#last-name");
  var phone = $("#phone0");
  var phoneNumbers = [];
  var street = $("#street");
  var city = $("#city");
  var state = $("#state");
  var address = [street, city, state];

  // Storage Array

  var contactList = [];

  function Contact(id, firstName, lastName, phone, street, city, state) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.address = address;
  }

  // Form validation and submission

  function validateForm() {
    var x = $('#first-name').val();
    var y = $('#last-name').val();
    var z = $('#phone0').val();
    // Validate Entry
    if (x === null || x === '' || x === undefined) {
      $('.more-info-modal').show();
    } else if (y === null || y === '' || y === undefined) {
      $('.more-info-modal').show();
    } else if (z === null || z === '' || z === undefined) {
      $('.more-info-modal').show();
    } else {
      // Create Contact
      for (var i = 0; i < phoneNumbers.length; i++) {
        phone.push(phoneNumbers[i].val());
      }
      var contact = new Contact(id, firstName.val(), lastName.val(), phoneNumbers, street.val(), city.val(), state.val());
      contactList.push(contact);
      $("#contact-names").append(
          '<li class="names"><a href="#" id="' + contact.id + '">' + contact.firstName + ' ' + contact.lastName + "</a></li>");
      id++;
      // Clear Form
      document.getElementById("contact-form").reset();
    }
  }

  // Submit Contact to Contacts list

  $('#add-button').click(function(e) {
    e.preventDefault();
    validateForm();
  });

  // Add Additional Phone Number

  $('#add-phone').click(function(e) {
    e.preventDefault();
    $('#phone-container').append(
      '<input id="phone' + phoneNumbers.length + '" class="form-fields" type="tel"><br>');
  });

  // Click OK on modal to hide

  $('.info-ok-button').click(function() {
    $('.more-info-modal').hide();
  });

  // Click Contact Name to Display Contact Info and to Edit

  $('#contact-names').click('a', function(e) {
    var id = e.target.id;
    console.log(contactList[id]);
    // Display contact
    $('#fName-display').text(
      contactList[id].firstName + ' ' + contactList[id].lastName);
    $('#phone-display').text(
      contactList[id].phoneNumbers[0]);
    $('#address-display').text(
      contactList[id].address);
    // Fill in Form to Allow for Edit
    $('#first-name').val(
      contactList[id].firstName);
    $('#last-name').val(
      contactList[id].lastName);
    for (var i = 0; i < phoneNumbers.length; i++) {
      $('#phone' + i).val(
        contactList[id].phoneNumbers[i]);
    }
    $('#street').val(
      contactList[id].address[0]);
    $('#city').val(
      contactList[id].address[1]);
    $('#state').val(
      contactList[id].address[2]);
  });
});
