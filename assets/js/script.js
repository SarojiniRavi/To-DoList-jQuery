$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
})

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();//here this refers to parent element li
    });
    event.stopPropagation();//stops bubbling on the other elements.
});

$("input[type='text']").keypress("click", function(event){
   if(event.which === 13){
     var toDo = $(this).val();//grabbing new todo text from the input
     $(this).val("")
     //creating the li and append into the ul
     $("ul").append("<li><span><i class='fa-solid fa-trash'></i></span> " + toDo + "</li>");
   }
})

$("h1").on("click","i",function(){
    $("input[type='text']").fadeToggle();
})