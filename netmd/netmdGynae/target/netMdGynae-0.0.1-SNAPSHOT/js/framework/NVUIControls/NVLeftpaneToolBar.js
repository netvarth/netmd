function leftpaneToolBar(buttons) {
	this.result = function() {
		var toolBar=$j('<ul/>');
		if(buttons!=null)
		{
			//Create admin section
			$j(buttons).each(function(index,button) {	
				var liTag = $j('<li/>');
				var aTag = $j('<a/>');
				aTag.attr('href','#');
				if (button.className) aTag.attr('class',button.className);
				if(button.name) aTag.attr('id',button.name);
				if(button.title){
					var spanTag = $j('<span/>');
					spanTag.html(button.title);
					aTag.append(spanTag);   
				}
				liTag.append(aTag);
				if(button.buttons) {
					var sublist;
					var	sublist =new leftpaneToolBar(button.buttons);
					liTag.append(sublist.result);
				}
				toolBar.append(liTag);
			});
		}
		return toolBar;
	}
	
}