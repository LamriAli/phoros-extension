 


function click()
{
   
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        Tab_Rx=["facebook","twitter","linkedin"]

            //alert(get_Rx(tabs[0].url));
            if(Tab_Rx.indexOf(get_Rx(tabs[0].url)) !== -1)
            {
                window.location.href = get_Rx(tabs[0].url)+".html";
                //alert(document.getElementsByClassName("fa fa-facebook"))
                document.getElementsByClassName("fa fa-linkedin").setAttribute("style","color:red");
                return get_Rx(tabs[0].url)
            }else{
                window.location.href ="base.html";
            }
           
        });
    
}





click()
		 

 