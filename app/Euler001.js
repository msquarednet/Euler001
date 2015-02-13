var Euler001 = {
    
    doStuff: function(num) {
      var max = 0;
      if (num) {max = num};
      var sum=0;
      for (var i=1,len=max; i<len; i++) {
        if (i%3===0 || i%5===0) {
          sum += i;
          //console.log(i);  
        }
      }
      //document.querySelector('input[name=answer]').value = sum;  
      console.log(sum);
      return sum;
    }
    
};