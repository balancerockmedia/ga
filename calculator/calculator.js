var Calculator = {
    add: function() {
        var total = 0;
        
        for(var i = 0; i < arguments.length; i++) {
            total += arguments[i];
        }
        
        return (arguments.length) ? total : null;
    },
    
    subtract: function() {
        var total = arguments[0];
        
        for(var i = 1; i < arguments.length; i++) {
            total -= arguments[i];
        }
        
        return (arguments.length) ? total : null;
    },
    
    multiply: function() {
        var total = 1;
        
        for(var i = 0; i < arguments.length; i++) {
            total *= arguments[i];
        }
        
        return (arguments.length) ? total : null;
    },
    
    divide: function() {
        var total = arguments[0];
        
        for(var i = 1; i < arguments.length; i++) {
            total /= arguments[i];
        }
        
        return (arguments.length) ? total : null;
    }
};

console.log(Calculator.add(1, 2, 3, 4)); // 10

console.log(Calculator.subtract(10, 5, 1)); // 4

console.log(Calculator.multiply(10, 2, 2)); // 40

console.log(Calculator.divide(20, 2, 2)); // 5