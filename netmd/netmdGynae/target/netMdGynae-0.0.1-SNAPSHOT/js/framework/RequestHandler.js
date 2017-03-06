//handling post requests 
function postdataToServer(posturl, requestData ) {
	var responseData;
	jQuery.ajax({
		type: "POST",
		url: posturl,
		data: requestData,
		contentType: "application/json",
		dataType: "json",
		async: false,
		success:function(response) {
			if(response==null){
				//window.location.href=serverPath + "/weblims/ws/ui/html/startUp";
				location.reload();
				return false;
			}	
			else{
				responseData = response;
			}	
		},
		error: function(xhr, ajaxOptions,thrownError) {
		//alert(xhr.status.thrownError);
			responseData = false;	
			//window.location.href=serverPath + "/weblims/ws/ui/html/startUp";
			//location.reload();  
		}
	});	
	//alert(JSON.stringify(responseData));
	return responseData;
}

//method handling Get requests
function getRequestData(reqUrl) {
	var response;
	jQuery.getJSON(reqUrl,function(data){
		response=data;
	});
	return response;
}