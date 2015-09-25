$(function() {
  $('#clear-catalog').click(function() {
    $.ajax({
      method: 'DELETE',
      url: '/beers'
    }).success(function() {
      location.reload();
    });
  });
});
