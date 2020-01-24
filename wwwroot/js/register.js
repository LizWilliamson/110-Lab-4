function register(){
    console.log("You have registered a car");

    // get values from fields
    var price = $("#txtPrice").val();
    var make = $("#txtMake").val();
    var model = $("#txtModel").val();
    var year = $("#txtYear").val();
    var passengers = $("#txtPassengerCapacity").val();
    var milage = $("#txtMilage").val();
    var imageUrl = $("#txtImageUrl").val();
    var stock = $("#txtStock").val();
    var hp = $("#txtHp").val();
    var cyls = $("#txtCyls").val();
    var desc = $("#txtDescription").val();

    var errorOccurred = false;

     // data validation
     if(!year || isNaN(year)){
        //  error with year
        errorOccurred = true;
        $("#txtYear").addClass("error");
     }
     else{
        //  parse year str into int
        // year = year * 1;
        year = parseInt(year);
        $("#txtYear").removeClass("error");
     }

     if(!price || isNaN(price)){
        //  error with price
        errorOccurred = true;
         $("#txtPrice").addClass("error");
     }
     else{
        //  parse price string into float
        price = parseFloat(price);
         $("#txtPrice").removeClass("error");
     }

     if(errorOccurred){

        return; 
        // do not continue, due to error

        
     }
    

    // create an object -> left side same naming convention as car model; right side is the var from above
    var car = {
        dailyPrice : price,
        make : make,
        model : model,
        year : year,
        passengerCapacity : passengers,
        milage : milage,
        imageUrl : imageUrl,
        stock : stock,
        hp : hp,
        cyls : cyls,
        description : desc
    };

   


    console.log(car);

    // send the object on an Ajax request to the backend on the catalog controller
    $.ajax({
        url: "/catalog/saveCar",
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(car),
        success: function(res){
            console.log("success", res);
            //clearForm();
        },
        error: function(error){
            console.log("Error", error);
        }
    });

    // clear form

    // success notification
}

/*function clearForm(){
    $("#txtPrice").val("");
    $("#txtMake").val("");
    $("#txtModel").val("");
    $("#txtYear").val("");
    $("#txtPassengerCapacity").val("");
    $("#txtMilage").val("");
    $("#txtImageUrl").val("");
    $("#txtStock").val("");
    $("#txtHp").val("");
    $("#txtCyls").val("");
    $("#txtDescription").val("");

}*/

function init(){
    console.log("Register page");

    $("#btnSave").click(register);
}

window.onload = init;