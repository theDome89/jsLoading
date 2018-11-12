requirejs.config({
    appDir: ".",
    baseUrl: "js",
    paths: {
        /* Load jquery from cdnjs. On fail, load local file. */
        'jquery': ['https://code.jquery.com/jquery-3.3.1.min', 'helper/jquery-3.3.1-min'],
        'loading_bar': ['helper/loading_bar']
    },
    shim: {
        /* Set bootstrap dependencies (just jQuery) */
        'loading_bar' : ['jquery']
    }
});

define(['jquery', 'loading_bar'], function(jQuery, loadingBar) {
  jQuery(document).ready(function() {
    //to your thing in here
    var textArray = [
    'Die Welt wird erschaffen',
    'Die Flüsse werden gefüllt',
    'Die Bäume werden gepflanzt',
    'Die Tiere werden auf die Welt gesetzt',
    'Die Menschen werden erschaffen',
    'Die Welt geht unter',
    'Aber wir drucken trotzdem Ihr Bild!!!'
    ];

    loadingBar.show(textArray, 1);
  });
});
