$(document).ready(function () {

    $('#gallery img').each(function (i) {
        var imgFile = $(this).attr('src');
        var preloadImage = new Image();
        preloadImage.src = imgFile

        $(this).hover(
            function () {
                $(this).attr('src', preloadImage.src);
            },
            function () {
                var currentSource = $(this).attr('src');
                $(this).attr('src', imgFile);
            }); // end hover
    }); // end each

    $('#gallery a').mouseover(function (evt) {
        //don't follow link
        evt.preventDefault();
        //get path to new image
        var imgPath = $(this).attr('href');
        //get reference to old image
        var oldImage = $('#photo img');

        //create HTML for new image
        var newImage = $('<img src="' + imgPath + '">');

        if (newImage[0].src == "http://localhost:3000/assets/history1.jpg")
        {
            $('#text h2').text("WHERE ARE THE WAFELS?");
            $('#text p').text("Amsterdam native Rip Pruisken arrives at Brown University. Rip heads to the dining hall for koffietijd—a midmorning coffee break enjoyed with a warm wafel. Finding decent coffee but no wafels, Rip is horrified to learn that most America is without his favorite snack.");
        }
        else if (newImage[0].src == "http://localhost:3000/assets/history2.jpg")
        {
            $('#text h2').text("STARTING OUT OF A DORM ROOM");
            $('#text p').text("Three years  and 1,625 wafel-less koffietijds later, Rip’s had enough. He buys a waffle iron and begins pressing the first batch of homemade stroopwafels in his dorm. His cookies are inedible. Undeterred, he tries again...and again.");
        }
        else if (newImage[0].src == "http://localhost:3000/assets/history3.jpg")
        {
            $('#text h2').text("FIRST SALE ON CAMPUS MAIN GREEN");
            $('#text p').text("Rip sets up shop on the campus Main Green and slings handmade wafels to kids on their way to class. One strange day in late April, hundreds of confused-looking students pour onto the quad clamoring for a bite. He can’t keep up with demand.");
        }
        else if (newImage[0].src == "http://localhost:3000/assets/history4.jpg")
        {
            $('#text h2').text("MARCO COMES BACK FROM BRAZIL");
            $('#text p').text("Enter Marco. Arriving from a semester abroad in Brazil, Marco is inspired to create something (lots of sun and caipirinhas had something to do with it).");
        }
        else if (newImage[0].src == "http://localhost:3000/assets/history5.jpg")
        {
            $('#text h2').text("HUSTLING WAFELS AND GETTING THINGS OFF THE GROUND");
            $('#text p').text("Marco and Rip hustle Rip van Wafels around the country living solely off coffee and wafels. After many parking tickets, numerous couches surfed, and more than a handful of college parties, Rip van Wafels begins gaining notice.");
        }
        else if (newImage[0].src == "http://localhost:3000/assets/history6.jpg")
        {
            $('#text h2').text("AND BEYOND...");
            $('#text p').text("Rip Van Wafels is proudly stocked at coffee shops, offices, and specialty stores around the country. From Providence to Palo Alto, Americans learn that a short break goes a long way—one Rip van Wafel at a time.");
        };


        // TIMELINE-Sellers
        if (newImage[0].src == "http://localhost:3000/assets/timelineimage1.jpg")
        {
            $('#text h2').text("COFFEESHOPS:");
            $('#text p').text("Rip van Wafels are great by the counter in a coffee shop. Compact, shelf stable and easy to spot, they have been added to some of the best coffee shops in the country:")
        }
        else if (newImage[0].src == "http://localhost:3000/assets/timelineimage2.jpg")
        {
            $('#text h2').text("OFFICES");
            $('#text p').text("Rip van Wafels are great to have by the coffee at your office. We supply a number of companies that place our product by their coffee bars.");
        }
        else if (newImage[0].src == "http://localhost:3000/assets/timelineimage3.jpg")
        {
            $('#text h2').text("SPECIALTY STORES");
            $('#text p').text("Rip van Wafels are an easy grab and go item, by the coffee or near check out.");
        }
        else if (newImage[0].src == "http://localhost:3000/assets/timelineimage4.jpg")
        {
            $('#text h2').text("SPORTSHOPS");
            $('#text p').text("Rip van Wafels makes for a great in between snack whether on a long bike ride or on a run. The carbohydrate content will give you a little energy boost and they are easy to store.");
        }
        else if (newImage[0].src == "http://localhost:3000/assets/timelineimage5.jpg")
        {
            $('#text h2').text("HOTELS");
            $('#text p').text("Rip van Wafels makes for a great complimentary hotel room item or mini bar snack.");
        };


        //make new image invisible
        newImage.hide();

        //add to the #photo div
        $('#photo').prepend(newImage);
        //fade in new image
        newImage.fadeIn(0);

        //fade out old image and remove from DOM
        oldImage.fadeOut(0, function () {
            $(this).remove();
        });
    }); // end click
    $('#gallery a:first').mouseover();
}); // end ready
