﻿function shoppingCart(cartName)
{
    this.cartName = cartName;
    this.clearCart = false;
    this.items = [];
    console.log("Shopping Cart Initialization");
    // load items from local storage when initializing
    this.loadItems();

    // re-load items when the local storage changes
    $(window).on('storage', function (e) {
        if (e.originalEvent.key == self.cartName + '_items') {
            console.log("Storage Changes");
            self.loadItems();
        }
    });
}

// load items from local storage
shoppingCart.prototype.loadItems = function ()
{
    //empty list
    this.items.splice(0, this.items.length);

    //load from local storage
    var items = localStorage != null ? localStorage[this.cartName + "_items"] : null;
    if (items != null && JSON != null)
    {
        try {
            var items = JSON.parse(items);
            for (var i = 0; i < items.length; i++)
            {
                var item = items[i];
                if (item.sku != null && item.name != null && item.price != null && item.quantity != null && item.size!=null) {
                    item = new cartItem(item.sku, item.name, item.price, item.quantity,item.size);
                    this.items.push(item);
                }
            }
        }
        catch (err)
        {
            //Ignore errors while loading 
        }
    }
    // notify listeners of change
    if (this.itemsChanged) {
        console.log("Items changed")
        this.itemsChanged();
    }
}
// save items to local storage
shoppingCart.prototype.saveItems = function () {
    if (localStorage != null && JSON != null) {
        localStorage[this.cartName + "_items"] = JSON.stringify(this.items);
    }
} 
shoppingCart.prototype.addItem = function (sku,name,price,quantity,size)
{ 
    quantity = this.toNumber(quantity);
    if (quantity != 0)
    {
      //update quantity for existing item
        var found = false;
        for (var i = 0; i < this.items.length && !found; i++)
        {
            var item = this.items[i];
            if (item.sku == sku && item.size==size)
            {
                found = true;
                item.quantity = this.toNumber(item.quantity + quantity);
                if (item.quantity <= 0) {
                    this.items.splice(i, 1);
                }
            }
        }
        if (!found)
        {
            //add new item
            var item = new cartItem(sku, name, price, quantity,size);
            this.items.push(item);
        }
    }
    //save changes
    this.saveItems();
    //var scope = angular.element(document.getElementById('cartElement')).scope();
    
}

// get the total price for all items currently in the cart
shoppingCart.prototype.getTotalCount = function (sku)
{
    var count = 0;
    for (var i = 0; i < this.items.length; i++)
    {
        var item = this.items[i];
        if (sku == null || sku == item.sku)
        {
            count += this.toNumber(item.quantity);
        }
    }
    return count;
}


// get the total price for all items currently in the cart
shoppingCart.prototype.getTotalPrice = function (sku) {
    var total = 0;
    console.log("sku="+sku)
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        if (sku == null || item.sku == sku) {
            total += this.toNumber(item.quantity * item.price);
        }
    }
    return total;
}

//utlility methods
shoppingCart.prototype.toNumber = function (value)
{
    value = value * 1;
    return isNaN(value) ? 0 : value;
}

function cartItem(sku, name, price, quantity,size) {
    this.sku = sku;
    this.name = name;
    this.price = price * 1;
    this.quantity = quantity * 1;
    this.size = size;
}

// clear the cart
shoppingCart.prototype.clearItems = function () {
    this.items = [];
    this.saveItems();
}