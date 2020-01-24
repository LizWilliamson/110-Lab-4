function getCatalog(){
    // create Ajax request to get catalog
    $.ajax({
        url: "/catalog/getCatalog",
        type: 'GET',
        // dont need content type or data b/c get requests cant send data
        success: function (res) {
            console.log("success", res);
        },
        error: function (error) {
            console.log("Error", error);
        }
    });

    // print the response on the console
}

function init(){
    console.log("Catalog Page");

    getCatalog();
}



window.onload = init;