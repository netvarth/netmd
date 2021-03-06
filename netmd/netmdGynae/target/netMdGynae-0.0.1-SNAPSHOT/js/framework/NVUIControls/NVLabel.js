function label(button) {
	this.result = function () {
		var pTag = $j('<p/>');	
		var spanTag;
		if(button.title) {
			spanTag = $j('<span />');
			spanTag.html(button.title);
			}
			if(button.spanstyle)
			spanTag.attr('style',button.spanstyle);
			
			if(button.idforInner) {
				var innerSpanTag = $j('<span/>'); // creating a span tag inside the ptag
				innerSpanTag.attr('id',button.idforInner);
				spanTag.append(innerSpanTag);
			}	
			
			pTag.append(spanTag);
	
		
		spanTag = $j('<span />');
		if(button.name) spanTag.attr('name',button.name);
		if(button.id) spanTag.attr('id',button.id);
		if(button.className) spanTag.attr('class',button.className);
		if(button.style) spanTag.attr('style',button.style);
		pTag.append(spanTag);
		return pTag;
	};
}