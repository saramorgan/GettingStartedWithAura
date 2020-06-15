({
	handleClick : function (cmp, event, helper) {
       
        var cellNumber = cmp.find("phone").get("v.value");
        var action = cmp.get("c.CellNumberUpdate");
        action.setParams({ "cellNumber" : cellNumber });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                alert(state);
            }
        });

        $A.enqueueAction(action);

    }
})
