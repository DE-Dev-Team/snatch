(function(){//Following Orders through the system

Local = new Mongo.Collection("local");
ActiveOrders = new Mongo.Collection("activeOrders");
ReadyOrders = new Mongo.Collection("readyOrders");
FinishedOrders = new Mongo.Collection("finishedOrders");


//Food Option Collections

Bagels = new Mongo.Collection("bagels");
Beverages = new Mongo.Collection("beverages");
Snacks = new Mongo.Collection("snacks");
Milkshakes = new Mongo.Collection("milkshakes");

})();