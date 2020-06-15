({
    handleSuccess : function(cmp, event, helper) {
           cmp.find('notifLib').showToast({
            "variant": "success",
            "title": "Case Created",
            "message": "Record ID: " + event.getParam("id")
        });
    }
    // },
    // handleValidation : function(cmp, event, helper) {
    //     // NOTE: This method will handle validation if you specify which field to check for specifically, which is 
    //     //  not a good workaround since the component should handle this for you without the need to write
    //     //  all this unecessary code (especially since the whole point of the component is to lessen the
    //     //  amount of code that needs to be written). That is why it was not mentioned in the actual course.
    //     var evtFields = event.getParam("fields");
    //     var reqField = 'Origin';
    //     if (evtFields.hasOwnProperty(reqField)) {
    //         event.preventDefault();  //Stops the record from being created
    //         cmp.find('notifLib').showToast({
    //             "variant": "error",
    //             "header": "Error was encountered",
    //             "message": "The following field is required: " + reqField
    //         });
    //     } 
        

})

