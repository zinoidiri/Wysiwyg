// (function($){

//     $.fn.my_wysiwyg = function(options){
//         let settings = $.extend({
//             color: 'green',
//             fontWeight: 'bold'
//         }, options);
//         return this.css({'color': settings.color, 'font-weight': settings.fontWeight});
//     };

// }(jQuery));
jQuery(function($){
    
    $.fn.my_wysiwyg = function(options = {
        option1: 'bold',
        option2: 'italic',
        option3: 'underline',
        option4: 'strikeTrough',
        option5: 'color',
        option6: 'justifyLeft',
        option7: 'justifyRigth',
        option8: 'justifyCenter',
        option9: 'justify',
        option10: 'font size',
        option11: 'link',
        option12: 'source',
    }) {

        for (var option in options) {
            if(jQuery.type(options[option]) === 'array') {
                for(var i=0; i < options[option].length; i++) {
                    switch(options[option][i]){
                        case 'bold':
                            inputBold();
                        break;
                        case 'italic':
                            inputItalic();
                        break;
                        case 'underline':
                            inputUnderline();
                        break;
                        case 'color':
                            inputColor();
                        break;
                        case 'font size':
                            inputFontSize();
                        break;
                        case 'justifyLeft':
                            inputJustifyLeft();
                        break;
                        case 'justifyRight':
                            inputJustifyRight();
                        break;
                        case 'justifyCenter':
                            inputJustifyCenter();
                        break;
                        case 'justify':
                            inputJustifyFull();
                        break;
                        case 'strikeThrough':
                            inputStrikeThrough();
                        break;
                        case 'link':
                            inputLink();
                        break;
                    }
                }
                
            }
            
        }
        function inputBold() {
            var $inputBold = $('<input type="button" value="G" />')
            $("#textarea").append($inputBold);
            $inputBold.click(function() {
                document.execCommand('bold' , false , null)
            })  
        }
       function inputItalic() {
            var $inputItalic = $('<input type="button" value="I" />')
            $("#textarea").append($inputItalic);
            $inputItalic.click(function() {
                document.execCommand('italic', false, null)
            })
        } 
        function inputUnderline() {
            var $inputStrikeThrough = $('<input type="button" value="U" />');
            $("#textarea").append($inputStrikeThrough);
            $inputStrikeThrough.click(function() {
                document.execCommand('underline', false, null)
            })
        }
        function inputStrikeThrough() {
            var $inputStrikeThrough = $('<input type="button" value="S" />');
            $("#textarea").append($inputStrikeThrough);
            $inputStrikeThrough.click(function() {
                document.execCommand('strikeThrough', false, null)
            })
        }
        function inputColor() {
            var $inputColor = $('<select id="colors" value="black" name="Colors"><option value="black">noir</option><option value="red">rouge</option><option value="green">vert</option></select>')
            $("#textarea").append($inputColor);
            $("#colors").change(function() {
                document.execCommand('foreColor', false, $('#colors').val());
            })
        }  
        function inputFontSize() {
            var $inputFontSize = $('<label for="fontSize">Font Size : </label><select id="fontSize" name="fontSize"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select>')
            $("#textarea").append($inputFontSize);
            $("#fontSize").change(function(){
                document.execCommand('fontSize', false, $("#fontSize").val());
            })
        }
        function inputJustifyLeft() {
            var $inputJustifyLeft = $('<input type="button" value="<-" />');
            $("#textarea").append($inputJustifyLeft);
            $inputJustifyLeft.click(function() {
                document.execCommand('justifyLeft', false, null);
            })
        }
        function inputJustifyRight() {
            var $inputJustifyRight = $('<input type="button" value="->" />');
            $("#textarea").append($inputJustifyRight);
            $inputJustifyRight.click(function() {
                document.execCommand('justifyRight', false, null);
             })
        }
        function inputJustifyCenter() {
         var $inputJustifyCenter = $('<input type="button" value="><" />');
            $("#textarea").append($inputJustifyCenter);
            $inputJustifyCenter.click(function() {
                document.execCommand('justifyCenter', false, null);
             })
        }
        function inputJustifyFull() {
            var $inputJustifyFull = $('<input type="button" value=">=<" />');
            $("#textarea").append($inputJustifyFull);
            $inputJustifyFull.click(function() {
                document.execCommand('justifyFull', false, null);
             })
        }
        function inputLink() {
            var $inputCreateLink = $('<input type="button" value="ajouter lien" />');
            var $inputUnLink = $('<input type="button" value="retirer lien" />');
            $("#textarea").append($inputCreateLink);
            $("#textarea").append($inputUnLink);
            $inputCreateLink.click(function() {
                document.execCommand('createLink', false, null )
            })
            $inputUnLink.click(function() {
                document.execCommand('UnLink', false, null )
            })  
        }
    }
        
})