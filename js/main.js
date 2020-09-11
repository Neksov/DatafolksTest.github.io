$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});

//маска для номера телефона
$("[type=tel]").mask("+7(000)000-00-00", {
  placeholder: "Ваш номер телефона:",
});