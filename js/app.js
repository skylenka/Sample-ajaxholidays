$(function() {

    var ul = $("#holiday-dates");

    var holidayUrl = 'https://holidayapi.com/v1/holidays?key=7d9580b5-748f-43a2-b3f2-bcac906ab052&country=EN&year=2016';

    function instertHolidays() {
        $.ajax({
            url: holidayUrl
        }).done(function(response){
          // console.log(response.holidays);
        $.each(response.holidays,function(index, element) {
          // console.log(index, "klucz");
          // console.log(element, "wartość");
          var li = $('<li>').text(index);
          var span = $('<span>').text(element[0].name);
          li.append(span);
          ul.append(li);
        });
       }).fail(function(error) {
           console.log(error);
       });
    };
    instertHolidays();


});
