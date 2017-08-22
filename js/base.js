let   cidadeSearch = document.querySelector('#cidade')
let   section = document.querySelector('#result_map')
const bottomSearch = document.querySelector('#bottom-buscar')

let default_cidade = /([Jj][oO][aãAÃ][oO].[pP][eE][sS][sS][oO][aA]|[Jj][oO][aãAÃ][oO][pP][eE][sS][sS][oO][aA])/

   bottomSearch.addEventListener('click', function(event){
    if(default_cidade.test(cidadeSearch.value)){
        var locations = [
          ['Loja Central - José Américo', -7.172104, -34.851557],
          ['Loja 2 - Mangabeira', -7.172185, -34.839681],
          ['Loja 3 - Jaguaribe', -7.134749, -34.873773]

        ];
        section.innerHTML += `<div id="map" style="width: 100%; height: 400px;"></div>`
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: new google.maps.LatLng(-7.11532, -34.861),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        })

        var infowindow = new google.maps.InfoWindow()

        var marker, i

        for (i = 0; i < locations.length; i++) {
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
          });

          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent(locations[i][0]);
              infowindow.open(map, marker);
            }
          })(marker, i));
        }
    }
    
    else{
        alert("Ainda não temos lojas na cidade desejada, tente uma cidade próxima, se desejar.")
    }

})
