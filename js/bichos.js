$(document).ready(function(){
    //selecionar todos os botões e monitorar os cliques
    $('.btn').click(function(e){
        e.preventDefault()
       var ID = $(this).attr('id')


            switch(ID){
                case 'gato' : 
                 $('audio').attr('src', 'gatomiar.mp3')
                 break 
                 case 'golfinho' : 
                 $('audio').attr('src', 'golfinho.mp3')
                 break 
                 case 'cavalo' : 
                 $('audio').attr('src', 'cavalo.mp3')
                 break 
                
            }
        })
    })