function showMethod(box,method){
    let allTab=document.querySelectorAll('.box')
    let allPaymentBox=document.querySelectorAll('.payment-box-2')
    let tab=document.getElementById(box)
    let paymentBox=document.getElementById(method)
   
    
    allTab.forEach(function(el){
        el.classList.remove('selected-tab')
    })
   
    allPaymentBox.forEach(function(el){
        el.classList.remove('selected-box')
    })
   
    tab.classList.add('selected-tab')
    paymentBox.classList.add('selected-box') 
   }
   
   function placeOrder(a){
       let cardNumbr = document.getElementById('cardNumber').value
       let name =document.getElementById('holderName').value
       let cvv = document.getElementById('cvv').value
       let payWarning = document.getElementById('payWarning');
       let upiWarning = document.getElementById('upiWarning');
       let upiInput= document.getElementById('upiInput').value
       payWarning.innerHTML=null
       upiWarning.innerHTML=null
       if(a=='card'){
           if(cardNumbr.length!=16 ||name==''|| cvv==''){
               payWarning.innerHTML='Enter valid details.'
               return
           }
       }else if(a=='upi'&&upiInput==''){
          upiWarning.innerHTML='Enter your UPI Id'
          return
       }


       swal("Your order in process!", {
          buttons: false,
          timer: 1000,
          });
       setTimeout(function(){
        //    alert('Your order has been placed successfully')
         swal({
                title: "Your Order has been placed",
                text: "keep Shopping",
                icon: "success",
                button: "Done",
                timer: 3000,
        });
         localStorage.setItem('cart',null)
       },1100)
      
       setTimeout(function(){
        window.location.href = 'index.html'
       },5000)


   
   }
   
   //Summary total ----------------------->
   
   function summary_amount() {
       let price = localStorage.getItem("price") || ' '
       let durationls = localStorage.getItem("duration") || ' '
       let data = JSON.parse(localStorage.getItem('total'));
       let bg = document.getElementById('summary-bag-total');
       let duration = document.getElementById('summary-delivery');
       let total = document.getElementById('summary-total');
       let amount = document.getElementById('amount-payable');
       
       duration.innerText = durationls
       total.innerHTML = `₹ ${price}`;
       amount.innerHTML = `₹ ${price}`;
   }
   
   summary_amount();
   
   //Summary total ends ------------------>
   
