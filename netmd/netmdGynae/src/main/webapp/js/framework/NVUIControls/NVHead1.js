function head1(button) {
	this.result = function () {
		var headTag = $j('<h1/>'); 
		
		// Create a  head1[outer-1]
	   if(button.className) headTag.attr('class',button.className);
	   if(button.id) headTag.attr('id',button.id);
		headTag.append(button.title);
		return headTag;		
	};
}