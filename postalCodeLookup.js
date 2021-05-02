function postalCodeLookup(input) {

    var head = document.getElementsByTagName('head')[0],
        key = map_apikey,
        script = document.createElement('script');
    script.src = '//maps.googleapis.com/maps/api/js?key=' + key + '&sensor=false';
    head.appendChild(script);
    script.onload = function () {
        if (navigator.geolocation) {
            var a = input,
                fallback = setTimeout(function () {
                    fail('10 seconds expired');
                }, 10000);

            navigator.geolocation.getCurrentPosition(function (pos) {
                clearTimeout(fallback);
                var point = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                new google.maps.Geocoder().geocode({ 'latLng': point }, function (res, status) {
                    if (status == google.maps.GeocoderStatus.OK && typeof res[0] !== 'undefined') {
                        var zip = res[0].formatted_address.match(/,\s\w{2}\s(\d{5})/);
                        if (zip) {
                            a.val(zip[1]);
                        } else {
                            fail('Unable to look-up postal code');
                        };
                    } else {
                        fail('Unable to look-up geolocation');
                    }
                });
            }, function (err) {
                fail(err.message);
            });
        } else {
            alert('Unable to find your location.');
        }
        function fail(err) {
            console.log('err', err);
            a.val('');
        }
    };
}
