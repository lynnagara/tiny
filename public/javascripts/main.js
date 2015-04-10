+(function() {
  var form = $('#submitForm');
  var urlText = $('#url');
  var errorField = $('#error');
  var successField = $('#success');
  var error;

  form.submit(function(evt) {
    clearError();
    evt.preventDefault();
    if (!urlText.val()) {
      showError('Please provide a value');
    } else {
      $.ajax({
        type: 'POST',
        url: 'submit-link',
        data: { url: urlText.val()},
        dataType: 'json',
        timeout: 10000,
        success: function(data) {
          handleFormSuccess(data);
        },
        error: function(request, status, err) {
          showError('An error occurred');
        }
      });
    }
  });

  function handleFormSuccess(data) {
    var str = 'Your short url is ' + window.location.protocol + '//' + window.location.host + '/' + data.slug;
    successField.html(str);
  }

  function clearError() {
    errorField.html('');
  }

  function showError(message) {
    errorField.html(message);
  }

})();