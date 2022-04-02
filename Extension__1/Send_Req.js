
$("#submitVal").submit(function(event){
    event.preventDefault();
   
    // var unindexed_array = $(this).serializeArray();
    var data = {}
    data["target"]=document.getElementById("Target_ID").value
     

    
   // data["nbre_friend"]
   
    
    var request = {
        "url" : 'http://localhost:2018/',
        "method" : "GET",
        "origin":"*",
        "allowHeaders":['Content-Type'],
        "data" : data
    }
    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
        window.history.back
    })
})


function myFunction(){

    alert("aaa")
}