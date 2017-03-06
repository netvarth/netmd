function GlobalToolBar(jsondata) {
	this.result = function() {
		var toolBar=$j('<ul/>');
		if(jsondata!=null)
		{
			//Create admin section
			$j(jsondata.buttons).each(function(index,button) {
				var liTag = $j('<li/>');
				var aTag = $j('<a/>');
				aTag.attr('href','#');
				if (button.className) aTag.attr('class',button.className);				
				if(button.name) { 
					aTag.attr('id',button.name);
					aTag.attr('name',button.name);
				}
				if(button.image) {
					imgTag = $j('<img/>');
					imgTag.attr('src',button.image);
					aTag.append(imgTag);
				}
				if(button.title){
					var spanTag = $j('<span/>');
					spanTag.html(button.title);
					aTag.append(spanTag);
				}
				liTag.append(aTag);
				toolBar.append(liTag);
			});
		}
		return toolBar;
	}
}