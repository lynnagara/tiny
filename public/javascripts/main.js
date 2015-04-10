+(function() {
  var form = $('#submitForm');
  var urlText = $('#url');
  var error;

  form.submit(function(evt) {
    evt.preventDefault();
    if (urlText.value === '') {
      error = 'Please provide a value';
    } else {
      $.ajax({
        type: 'POST',
        url: 'submit-link',
        data: { test: 1},
        dataType: 'json',
        timeout: 10000,
        success: function(data) {
          handleFormSuccess(data);
        },
        error: function(request, status, err) {
          error = 'An error occurred';
        }
      });
    }
  });

  function handleFormSuccess(data) {
    console.log('data');
    
  }

})();