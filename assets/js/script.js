var workdayHours = [[9,""],[10,""],[11,""],[12,""],[13,""],[14,""],[15,""],[16,""],[17,""]];

$(document).ready(function(){
$(currentDay).text(moment().format("dddd, MMMM Do"));
});
$(document).ready(function(){
    var hours = $(".container");
    for(let i = 0; i<workdayHours.length;i++){
        let  tempDiv = $('<div class="time-block">');
        let tempSpan = $('<div class="row">')
            .attr("id",workdayHours[i][0]);
        let tempP = $('<p class="hour">');
        if(workdayHours[i][0]>12){
            tempP.text((workdayHours[i][0]-12)+"pm");
        }else{
            tempP.text(workdayHours[i][0]+"am");
        }
        
        let tempTextArea = $('<textarea>');
        if(moment().hour()>workdayHours[i][0]){
            tempTextArea.attr("class","past");
        }else if(moment().hour()<workdayHours[i][0]){
            tempTextArea.attr("class","future");
        }else{
            tempTextArea.attr("class","present");
        }
        let tempButton = $('<button class="saveBtn">')
        .text("save");
        tempSpan.append(tempP);
        tempSpan.append(tempTextArea);
        tempSpan.append(tempButton);
        tempDiv.append(tempSpan);
        hours.append(tempDiv);
    }
});

$(document).ready(function(){
    $('.row').each(function(index){
        let id = $(this).attr('id');
        $(this).children('textarea').val(localStorage.getItem(id))
    });
});

$(".container").on('click',function(event){// 'click','.buttonclass'
    event.preventDefault();
    if(event.target.nodeName == 'BUTTON'){
        localStorage.setItem($(event.target).parent().attr("id"),$(event.target).parent().children("textarea").val());
    }
});