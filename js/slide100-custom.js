(function ($) {
    "use strict";
    $(document).ready(function() {
        $('#slide100-01').slide100({
            autoPlay: "false",
            timeAuto: 3000,
            deLay: 400,

            linkIMG: [
            'images/420sweet/420-sweet-gulab-jamun-01.png',
            'images/420sweet/420-sweet-gulab-jamun-02.png',           
            'images/420sweet/420-sweet-gulab-jamun-03.png',
            'images/420sweet/420-sweet-gulab-jamun-04.png'
            ],

            linkThumb: [
            'images/420sweet/420-sweet-gulab-jamun-01.png',
            'images/420sweet/420-sweet-gulab-jamun-02.png',            
            'images/420sweet/420-sweet-gulab-jamun-03.png',
            'images/420sweet/420-sweet-gulab-jamun-04.png'

            ]
        });
    });
})(jQuery);