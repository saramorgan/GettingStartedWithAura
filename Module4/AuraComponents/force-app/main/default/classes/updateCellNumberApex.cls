public with sharing class updateCellNumberApex {
    @AuraEnabled()
    public static void CellNumberUpdate(String cellNumber) {
        List<User> users = [SELECT MobilePhone FROM User where 
                            Id =: UserInfo.getUserId()];
        
        if ( users.size() > 0 ) {
            users[0].MobilePhone = cellNumber;
            update users;
        }
    }
}
