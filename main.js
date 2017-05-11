$(window).load(function(){

  var present = true;

  var body = $("body"),
      universe = $("#universe"),
      solarsys = $("#solar-system");

  var setView = function(view) { universe.removeClass().addClass(view); };

  $("#toggle-data").click(function(e) {
    body.toggleClass("data-open data-close");
    e.preventDefault();
  });

  $("#toggle-controls").click(function(e) {
    body.toggleClass("controls-open controls-close");
    e.preventDefault();
  });

  $("#data a").click(function(e) {
    present = false;
    $("#controls").fadeIn(500);
    var ref = $(this).attr("class");
    solarsys.removeClass().addClass(ref);
    $(this).parent().find('a').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });

  $(".set-view").click(function() { body.toggleClass("view-3D view-2D"); });
  $(".set-zoom").click(function() { body.toggleClass("zoom-large zoom-close"); });
  $(".set-speed").click(function() { setView("scale-stretched set-speed"); });
  $(".set-size").click(function() { setView("scale-s set-size"); });
  $(".set-distance").click(function() { setView("scale-d set-distance"); });
  $(".set-rotation").click(function() { setView("scale-stretched set-rotation"); });
  $(".set-mass").click(function() { setView("scale-s set-mass"); });
  $(".set-temperature").click(function() { setView("scale-d set-temperature"); });
 
  setTimeout(function() {
    $("h1").fadeIn(500);
    $("#data").delay(300).fadeIn(800);
    // $("#controls").delay(1500).show();
    body.removeClass('hide-UI').addClass("set-speed");
    setTimeout(function() {
      solarsys.fadeIn(300);
      body.removeClass('view-2D opening').addClass("view-3D");
    }, 500);
  }, 100);

  var tour = {
    planets: ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"],
    data: ["scale-stretched set-speed", "scale-s set-size", "scale-d set-distance", "scale-stretched set-rotation", "scale-s set-mass", "scale-d set-temperature"]
}
  
  setInterval(function() {
      if (present) {
        p = tour.planets[Math.floor(Math.random() * (tour.planets.length))];
        d = tour.data[Math.floor(Math.random() * (tour.data.length))];
        setView(d);
        solarsys.removeClass().addClass(p);
        $(".planet-picker").parent().find('a').removeClass('active');
        $("." + p).addClass('active');
        if (Math.random() < 0.1) {
          body.toggleClass("view-3D view-2D");
        }
      }
  }, 15000);

});
