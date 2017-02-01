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

$(document).on('click', '.sortHighToLow', function() {
  console.log('clicked sortshoes');
  $.ajax({
    type: 'GET',
    url: `/highToLow`
  });
});

$(document).on('click', '.sortlowToHigh', function() {
  console.log('clicked sortshoes');
  $.ajax({
    type: 'GET',
    url: `/lowToHigh`
  });
});
//this myFunction is the dropdown sorting menu
function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
//this will change the number of shoes displayed (width) on the landing page
$('.changeIterationThree').on('click', function() {
  $('.iteration').css('width', '33%');
});

$('.changeIterationFive').on('click', function() {
  $('.iteration').css('width', '20%');
});

//while display gold shoe when you hit landing page
$(document).ready(function() {
  $(window).scroll(function() {
    $('.splashDiv').fadeOut();
  });
});
