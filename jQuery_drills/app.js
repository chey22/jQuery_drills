$(document).ready(function () {
    $('#btnSubmit').click(function () {

        alert($(':text').val());
        event.preventDefault();

        //adding random color to list item
        $('<li>' + $(':text').val() + '</li>').appendTo(list)
        $('li').click(function () {
            rando1 = Math.floor(Math.random() * 255);
            rando2 = Math.floor(Math.random() * 255);
            rando3 = Math.floor(Math.random() * 255);
            $(this).css({ "color": `rgb(${rando1}, ${rando2}, ${rando3})` })
        });

        $('li').dblclick(function () {
            $(this).remove();


            // worked on this for an HOUR and then it gets commented out in step 11. *screams internally*

            // $('<div><h2>' + $(':text').val() + '</h2></div>').appendTo('body')
            // $('h2').mouseover(function () {
            //     $(this).css({'background-color': 'red', 'border-radius': '1em', 'padding': '7px'});
            // });

            // $('h2').mouseout(function () {
            //     $(this).css('background-color', 'transparent')
            // })
        });
    });

    $("body").append('<ul></ul>')
    let list = $("ul")

    $('#btnSubmit').attr("disabled", true);

    $(':text').keyup(function () {
        if ($(':text').val() != '') {
            $('#btnSubmit').attr("disabled", false);
        } else {
            $('#btnSubmit').attr("disabled", true);
        }
    });
});
