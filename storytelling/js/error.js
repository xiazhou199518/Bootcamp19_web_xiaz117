$(document).ready(function(){
   /*error prevention
   empty value will turn to red in form
   */
   $('form#evaulationForm').submit(function(event){
   event.preventDefault();
   var complete = false;
   
   if($('input#nameInput').val()!='' &&
   $('input#emailInput').val()!='' &&
   $('textarea#textinput').val()!=''){
        complete = true;
        }
        
   if(complete == false){
      console.log("Incomplete form");
      
      if($('input#nameInput').val()==''){
         $('input#nameInput').addClass('error');
         $('input#nameInput').prev().addClass('error');
         }
   
      if($('input#emailInput').val()==''){
         $('input#emailInput').addClass('error');
         $('input#emailInput').prev().addClass('error');
         }
         

         
         if($('textarea#textinput').val()==''){
         $('textarea#textinput').addClass('error');
         $('textarea#textinput').prev().addClass('error');
         }
    	
    	}
    	 else
        {
         
        console.log("You feedback has been submited");
         }
    	});
    	});