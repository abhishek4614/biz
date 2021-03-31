
	(function ($){
        $.fn.counter = function() {
          const $this = $(this),
          numberFrom = parseInt($this.attr('data-from')),
          numberTo = parseInt($this.attr('data-to')),
          delta = numberTo - numberFrom,
          deltaPositive = delta > 0 ? 1 : 0,
          time = parseInt($this.attr('data-time')),
          changeTime = 20;
          
          let currentNumber = numberFrom,
          value = delta*changeTime/time;
          var interval1;
          const changeNumber = () => {
            currentNumber += value;
            //checks if currentNumber reached numberTo
            (deltaPositive && currentNumber >= numberTo) || (!deltaPositive &&currentNumber<= numberTo) ? currentNumber=numberTo : currentNumber;
            this.text(parseInt(currentNumber));
            currentNumber == numberTo ? clearInterval(interval1) : currentNumber;  
          }
      
          interval1 = setInterval(changeNumber,changeTime);
        }
      }(jQuery));
      
      $(document).ready(function(){
      
        $('.counter-1').counter();
        $('.counter-2').counter();
        $('.counter-3').counter();
      
        
        new WOW().init();
        
        setTimeout(function () {
          $('.counter-1').counter();
        }, 500);
      });

      // windows on scroll navbar sticky
      window.onscroll = function() {myFunction()};
  
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }