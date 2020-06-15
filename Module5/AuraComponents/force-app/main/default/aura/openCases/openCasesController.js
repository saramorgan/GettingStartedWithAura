({
    init : function(cmp, event, helper) {
        var numRecords = cmp.get("v.numRecords")

        cmp.set('v.columns', [
            {label: 'Subject', fieldName: 'linkName', type: 'url',
                typeAttributes: {label: {fieldName: 'Subject'}, target: '_self'}},
            {label: 'Type', fieldName: 'Type', type: 'text'},
            {label: 'Reason', fieldName: 'Reason', type: 'text'},
            {label: 'Status', fieldName: 'Status', type: 'text'},
        ]);

        var action = cmp.get("c.getOpenCases");
        action.setParams({"numRecords" : numRecords });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var records = response.getReturnValue();
                records.forEach(function(record){
                    record.linkName = '/' + record.Id;
                });
                cmp.set('v.caseList', records)
            }
        });
        $A.enqueueAction(action);
    }

})
