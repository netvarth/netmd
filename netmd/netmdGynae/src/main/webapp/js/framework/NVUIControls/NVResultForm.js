function resultform(formdata) { //formdata is a json for a single form 

this.result = function() {
	var mydiv =$j('<div class="box"/>');
	var myForm = $j('<form/>');
	myForm.attr('id','resultForm');
	myForm.html(formdata);
	mydiv.html(myForm);
	return mydiv;
	};
}

