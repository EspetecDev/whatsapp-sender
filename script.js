  var form = document.getElementById('info');
  form.addEventListener("submit", function(event){
    event.preventDefault();
    // Get info
    var countryCode = document.getElementById("countryCode").value;
    var phoneNumber = document.getElementById("phone").value.replace(/\s+/g, ''); //trim the whitespaces;
    var optMessage =  document.getElementById("optMessage").value;
    var errorMessage = document.getElementById("errorMessage");

    // test for valid number
    if(!/^\d{9}$/.test(phoneNumber))
    {
      errorMessage.style.display = "block";
    }
    else
    {
      // alert("submit: country: " + countryCode + " phone:" + phoneNumber + " optMsg: " + optMessage);
      var url = "https://wa.me/" + countryCode + phoneNumber;
      if(optMessage)
      {
        url = url + "?text=" + encodeURIComponent(optMessage);
      }
      chrome.tabs.create({url: url, active: true});
    }
  });  




