$(document).ready(function() {
  // Form Fields
  var id = 0;
  var firstName = $("#first-name");
  var lastName = $("#last-name");
  var phone = $("#phone0");
  var phone1 = $("#phone1");
  var phoneNumbers = {
    numbers: [phone, phone1]
  };
  var street = $("#street");
  var city = $("#city");
  var state = $("#state");
  var address = [street, city, state];

  // Storage Array

  var contactList = [];

  function Contact(id, firstName, lastName, phoneNumbers, address) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumbers = phoneNumbers;
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
      var contact = new Contact(id, firstName.val(), lastName.val(), phoneNumbers, street.val(), city.val(), state.val());
      phoneNumbers.numbers.push(this.phone0);
      phoneNumbers.numbers.push(this.phone1);
      contactList.push(contact);
      $("#contact-names").append(
          '<li class="names"><a href="#" id="' + contact.id + '">' + contact.firstName + ' ' + contact.lastName + "</a></li>");
      id++;
      // Clear Form
      document.getElementById("contact-form").reset();
      console.log(contact);
      console.log(contact.phoneNumbers);
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
      '<input id="phone1" class="form-fields" type="tel"><br class="phone-break">');
    $('#add-phone').hide();
    $('#remove-phone').show();
  });

  // Remove Phone Number
  $('#remove-phone').click(function(e) {
    e.preventDefault();
    $('#remove-phone').hide();
    $('#add-phone').show();
    $('#phone1').remove();
    $('.phone-break').remove();
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
  });
});
