//deleteShoe
$(document).on('click', '.deleteShoe', function () {
  let tempId =  $(this).attr('data-id');
  console.log(tempId);
  const id = parseInt(tempId);
  $.ajax({
    type: 'DELETE',
    url: `/thisShoe/${id}/delete`
  })
  .done((data) => {
    window.location.href = '/';
  })
  .fail((err) => {
    console.log(err);
  });
});
