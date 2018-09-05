 $(document).ready(function () {


         
     if ($(window).width() <= '767'){
         
         
         $(".menu").click(function(){
             $(this).find("ul").toggle();
         });

          $(".item-email").click(function(){
             $(this).find("a").toggle();
         });

          $(".item-phone").click(function(){
             $(this).find(".item-contact-phone").toggle();
         });
         
         
         
         jQuery(function($){
            $(document).mouseup(function (e){ 
                var block = $(".menu ul"); 
                if (!block.is(e.target) 
                    && block.has(e.target).length === 0) { 
                    block.hide(); 
                }
                
                var block = $(".item-email a"); 
                if (!block.is(e.target) 
                    && block.has(e.target).length === 0) { 
                    block.hide(); 
                }
                
                var block = $(".item-phone .item-contact-phone"); 
                if (!block.is(e.target)
                    && block.has(e.target).length === 0) { 
                    block.hide(); 
                }
            });
        });
      
     }
     
     
     var inputs = document.querySelectorAll( '.inputfile' );
        Array.prototype.forEach.call( inputs, function( input )
        {
            var label	 = input.nextElementSibling,
                labelVal = label.innerHTML;

            input.addEventListener( 'change', function( e )
            {
                var fileName = '';
                if( this.files && this.files.length > 1 )
                    fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
                else
                    fileName = e.target.value.split( '\\' ).pop();

                if( fileName )
                    label.querySelector( 'span' ).innerHTML = fileName;
                else
                    label.innerHTML = labelVal;
            });
        });

         
    
     
     
     
     

});



