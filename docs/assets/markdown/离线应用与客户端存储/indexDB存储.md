### indexDB
```
var request = indexedDB.open('admin'),database;
request.onerror = function(event){
    console.log(event.target.errorCode);
}
request.onsuccess = function(event){
    database = event.target.result;

    if(database.version != "1.0") {
        var request = database.setVersion("1.0");
        request.onerror = function(event) {
            console.log("版本设置出现错误");
        }
        request.onsuccess = function(event) {
            console.log("版本成功设置成1.0");
        }
    }else {
        console.log("版本已经是1.0");
    }

    var store;

    <!-- if(!database.objectStoreNames.contains("users")) {
        store = database.createObjectStore("users", {
            keyPath: "username"
        });
    } -->

    database.onversionchange = function(){
        database.close();
    }
    
    console.log(event.target.result);
}
```
