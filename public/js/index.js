// Get references to page elements
var $birdname = $("#bird-name");
var $familyname = $("#family-name");
var $voicename = $("#voice-name");
var $habitatname = $("#habitat-name");
var $placename = $("#place-name")
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/add",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    birdname: $birdname.val().trim(),
    family: $familyname.val().trim(),
    voice:$voicename.val().trim(),
    habitat:$habitatname.val().trim(),
    place:$placename.val().trim()
  };

  

  if (!($birdname && $familyname && $voicename && $habitatname && $placename)) {
    alert("You must enter a bird name, family, voice, habitat and places!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $birdname.val("")
  $familyname.val("")
  $voicename.val("")
  $habitatname.val("")
  $placename.val("")
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);

var locations = [
  ['Bondi Beach', -33.890542, 151.274856, 4],
  ['Coogee Beach', -33.923036, 151.259052, 5],
  ['Cronulla Beach', -34.028249, 151.157507, 3],
  ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
  ['Maroubra Beach', -33.950198, 151.259302, 1]
];


function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(47.71422684704482,-119.88853230090876),
    zoom:6,
  };
  var myCenter = {lat: 47.71422684704482, lng: -119.88853230090876};
  var Olympia = {lat: 47.0379, lng: -122.9007};


  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var marker = new google.maps.Marker({position: myCenter, map: map});
  var markerTwo = new google.maps.Marker({position: Olympia, map: map});

marker.setMap(map);
markerTwo.setMap(map);
  };

  myMap();