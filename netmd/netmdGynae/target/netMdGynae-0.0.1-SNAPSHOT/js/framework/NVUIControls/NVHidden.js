function hidden(button) {
	this.result = function () {
		var pTag = $j('<p/>');
		var inputTag = $j('<input/>');
		inputTag.attr('type',button.type);
		if (button.name) inputTag.attr('name',button.name);
		if(button.id) inputTag.attr('id',button.id);
		pTag.append(inputTag);
		return pTag;
	}
	
}