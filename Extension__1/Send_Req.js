



$("#submitVal").submit(function(event){
    event.preventDefault();


     
 
    url=window.location.href
    api_name=get_Rx(url)
    api_name_maj=api_name.toUpperCase()
    key_api=api_name_maj+"_NEXT_USER_ID"
 
    // var unindexed_array = $(this).serializeArray();
    var data = {
        "api":"",
        "model":["id"],
        "starting_node":{}
    }
    data["api"]=api_name
    data["starting_node"][key_api]=document.getElementById("Target_ID").value
    console.log(data)
    
   // data["nbre_friend"]
   
    
    var request = {
        "url" : 'http://localhost:2018/',
        "method" : "POST",
        "origin":"*",
        "allowHeaders":['Content-Type'],
        "data" : data
    }
    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
        window.history.back
    })
})



function click()
{
    alert("click")
       
       
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        Tab_Rx=["facebook","twitter","linkedin"]

            //alert(get_Rx(tabs[0].url));
            
            alert (tabs[0].url)
            if(Tab_Rx.indexOf(get_Rx(tabs[0].url)) !== -1)
            {
               
                 alert("ok")
                
            }else{
                alert("eeeee")
                window.location.href ="base.html";
            }
           
        });
        
    
}


function get_Rx(url)
{
    
    Tab_Rx=["facebook","twitter","linkedin"]
    for (let i = 0; i < Tab_Rx.length; i++) {
        if (url.includes(Tab_Rx[i]))
        {
            return Tab_Rx[i]

                }
        
    }
    return '0'


}

function myFunction(){

    alert("aaa")
}


function ali()
{
    alert("bbbbb")

}