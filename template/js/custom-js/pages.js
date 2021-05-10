import Vue from "vue";
new Vue({
    mounted: setTimeout(function(){ setTimer()}, 1000)
})

function setTimer(){
    if($('.product__discount_counter').length > 0){        
        var countDownDate = sessionStorage.getItem('ormizi_counter');
        console.log(countDownDate)
        if (!countDownDate){
            countDownDate = new Date();
            countDownDate.setDate(countDownDate.getDate() + 1);
            sessionStorage.setItem('ormizi_counter', countDownDate);
        }else{
            countDownDate = new Date(countDownDate)
        }
                
        var x = setInterval(function() {

            var now = new Date().getTime();
            
            var distance = countDownDate - now;
            
            //var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            $('.product__discount_counter .h').text(hours);
            $('.product__discount_counter .m').text(minutes);
            $('.product__discount_counter .s').text(seconds.toString().length == 1 ? "0" + seconds.toString() : seconds);

            //document.getElementById("demo").innerHTML = days + "d " + hours + "h "
            //+ minutes + "m " + seconds + "s ";
            
            if (distance < 1) {
                clearInterval(x);
                countDownDate = new Date();
                countDownDate.setDate(countDownDate.getDate() + 1);
                sessionStorage.setItem('ormizi_counter', countDownDate);
                setTimer();
                //document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);

    }    
}
    

