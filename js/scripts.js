$(document).ready(function() {
  $("#userInfo").submit(function(event) {
    event.preventDefault();

    $("#rowFront").hide();
    $("#rowBack").show();

    let userFirstName = $("input#yourFName").val();
    let userLastName = $("input#yourLName").val();
    let userStAdd = $("input#streetAddress").val();
    let csz = $("input#citySZ").val();

    $(".fName").text(userFirstName);
    $(".lName").text(userLastName);
    $(".street").text(userStAdd);
    $(".cityStateZip").text(csz);
  });
});



// $('#something').click(function() {
//   location.reload();
// });