$(document).ready(function() {
  // Form Fields
  var id = 0;
  var firstName = $("#first-name");
  var lastName = $("#last-name");
  var phone = $("#phone0");
  var street = $("#street");
  var city = $("#city");
  var state = $("#state");

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
      var phoneNumbers = {
        numbers: []
      };
      var address = {
        locations: []
      };
      var contact = new Contact(id, firstName.val(), lastName.val(), phoneNumbers, address);
      phoneNumbers.numbers.push(phone.val());
      address.locations.push(street.val() + ',' + city.val() + ',' + state.val());
      var elementExists = $('#phone1');
      if (elementExists.length > 0) {
        phoneNumbers.numbers.push($('#phone-container').children().last().prev().val());
      }
      var addressExists = $('.address2');
      if (addressExists.length > 0) {
        address.locations.push($('#street1').val() + ',' + $('#city1').val() + ',' + $('#state1').val());
      }
      contactList.push(contact);
      $("#contact-names").append(
            '<li class="names"><a href="#" id="' + contact.id + '">' + contact.firstName + ' ' + contact.lastName + "</a></li>");
      id++;
      // Clear Form
      document.getElementById("contact-form").reset();
    }
  }

  // Click OK on modal to hide

  $('.info-ok-button').click(function() {
    $('.more-info-modal').hide();
  });

  // Submit Contact to Contacts list

  $('#add-button').click(function(e) {
    e.preventDefault();
    validateForm();
  });

  // Add Additional Phone Number Input

  $('#add-phone').click(function(e) {
    e.preventDefault();
    $('#phone-container').append(
      '<input id="phone1" class="form-fields" type="tel"><br class="phone-break">');
    $('#add-phone').hide();
    $('#remove-phone').show();
  });

  // Remove Phone Number Input
  $('#remove-phone').click(function(e) {
    e.preventDefault();
    $('#remove-phone').hide();
    $('#add-phone').show();
    $('#phone1').remove();
    $('.phone-break').remove();
  });

  // Add Additional Address Input

  $('#add-address').click(function(e) {
    e.preventDefault();
    $('#address-container').append(
      '<div class="address2">Address Two<br>Street<br><input id="street1" class="form-fields" type="text"><br>City<br><input id="city1" class="form-fields" type="text"><br>State<br><input id="state1" class="form-fields" type="text"></div>');
    $('#add-address').hide();
    $('#remove-address').show();
  });

  // Remove Address Input
  $('#remove-address').click(function(e) {
    e.preventDefault();
    $('#remove-address').hide();
    $('#add-address').show();
    $('.address2').remove();
  });

  // Click Contact Name to Display Contact Info and to Edit

  $('#contact-names').click('a', function(e) {
    var id = e.target.id;
    // Display contact
    $('#fName-display').text(
      contactList[id].firstName + ' ' + contactList[id].lastName);
    for (var i = 0; i < contactList[id].phoneNumbers.numbers.length; i++) {
      $('#phone-display' + i).text(
        contactList[id].phoneNumbers.numbers[i]);
      $('#address-display' + i).text(
        contactList[id].address.locations[i]);
    }
  });
});
