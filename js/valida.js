
$(document).ready( function() {
	$("#valid_form").on("submit", function(event) {
		event.preventDefault();

		// Todos os campos do form, menos botao.
		var fields = $(this).find(":input").not(":button");

		fields.each(function(index, field) {
			// Campo, valor e elemento pai.
			var $f = $(field),
				value = $f.val(),
				parent = $f.closest(".form-group");

			// Coloca/Tira classe dependendo do valor do campo.
			parent.toggleClass("has-error", value == "");
		});
	});
});