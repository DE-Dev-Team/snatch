Meteor.subscribe('employee');


Template.employee.events({
  'click #swapBTN': function( evt, instance ){
    Router.go('orderList');
  },
});



Template.orderInfo.helpers({
  'order' : function(){
    return ActiveOrders.find().fetch(); 
  }
});

Template.order3.helpers({
  'orderTime' : function(){
    var time = this.submitted;
    return time.getHours() + ":" + time.getMinutes() + "." + time.getSeconds();
  }
});


Template.order2.helpers({
  'orderDeets' : function(){
    return this.item; 
  }
});

Template.order1.helpers({
  'userName' : function(){
    return this.uName;
  }
});

Template.orderNum.helpers({
  'orderNum' : function(){
    return this.orderNum;
    
  }
});

Template.cellNum.helpers({
  'cellNum' : function(){
  	var temp;
    var str = this.phone;
    temp = '(';
    for(var i = 0; i < 3; i++){
    	temp = temp + str[i];	
    }
    temp = temp + ')'; 
    for(i = 3; i < 6; i++){
    	temp += str[i]; 
    }
    temp += '-';
    for(i = 6; i < 10; i++){
    	temp += str[i];
    }
    return temp;
  }
});


Template.itemPrice.helpers({
  'price' : function(){
    return "$" + this.price;
  }
});



Template.orderInfo.events({
 
  'click #finished': function() {
    var total; 
    var orNum = this.orderNum;
    var orders = ActiveOrders.find({orderNum: orNum}).fetch(); 
    var usr = this.user;
    console.log("USR is " + usr);
    var cellNumber = this.phone;
    console.log("CellNumber is " + cellNumber);
    var cellCarrier = this.carrier;
    console.log("cellCarrier is " + cellCarrier);
    
    
    var str = "";
    for (i=0; i < orders.length - 1; i++) {
      console.log(orders[i].item);
      str = str + orders[i].item + "\n";
      total = total + orders.price;
    }
   // var lastItem = orders.length; 
    //str = str + orders[lastItem].item; 
    Meteor.call('finishedOrder', str, total, orNum, usr, cellNumber, cellCarrier, function(error,result) {
				if (error)
					return alert(error.reason);
			}); 
  },

});





