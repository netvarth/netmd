function head2(button) {
	this.result = function () {
		var headTag = $j('<h2/>'); 
		 //alert(button.className);
		// Create a  head2[outer-1]
	if(button.className) headTag.attr('class',button.className);
	if(button.id) headTag.attr('id',button.id);
		headTag.append(button.title);
		return headTag;		
	};
}