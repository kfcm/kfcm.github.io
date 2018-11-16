$(function() {
    // $(".map_contact").googleMap({
    //     zoom: 2, // Initial zoom level (optional)
    //     coords: [-4.536984, 39.367611], // Map center (optional)
    //     type: "ROADMAP" // Map type (optional)
    //   });
    //   $(".map_contact").addMarker({
    //     coords: [-4.536984, 39.367611], // GPS coords
    //     id: 'marker1' // Unique ID for your marker
    //   });
    $('.map_contact')
      .gmap3({
        center:[-4.536984, 39.367611],
        zoom:16
      })
      .marker([
        {position:[-4.536984, 39.367611]}
      ]);
  });


