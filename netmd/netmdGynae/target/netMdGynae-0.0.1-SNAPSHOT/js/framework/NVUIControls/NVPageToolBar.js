function PageToolBar(jsondata) {
	var toolBar=$j("<div></div>");
	if(jsondata!=null)
	{	
		/* Creation of ToolBar */
		$j(jsondata.buttons).each(function(index,button) {
			
			var headTag = $j('<h2/>');
			var aTag = $j('<a href="#" rel="tooltip" />');
			aTag.attr('class','btn btn3 btn_'+button.name);
			aTag.attr('title',button.title);
			aTag.attr('id','btn_'+button.name+'_ptb_id');
			
			if(button.datarevealid){
				aTag.attr('data-reveal-id',button.datarevealid);
				aTag.attr('data-animation','fade');
				
			}
			headTag.append(aTag);
			toolBar.append(headTag);
			

		});
	}
	this.result = toolBar.html();
}