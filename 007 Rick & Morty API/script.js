// Generic function to fetch the data from API
function getData(url) {
  fetch(url, {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
    });
}

// Function to display all characters or a specific one
function getCharacter(id = "") {
  var url = "https://rickandmortyapi.com/api/character";

  if (id === null) {
    return getData(url);
  } else {
    newUrl = url + "/" + id;
    return getData(newUrl);
  }
}

// Function to display all locations or a specific one
function getLocation(id = "") {
  var url = "https://rickandmortyapi.com/api/location";

  if (id === null) {
    return getData(url);
  } else {
    newUrl = url + "/" + id;
    return getData(newUrl);
  }
}

// Function to display all episodes or a specific one
function getEpisodes(id = "") {
  var url = "https://rickandmortyapi.com/api/episode";

  if (id === null) {
    return getData(url);
  } else {
    newUrl = url + "/" + id;
    return getData(newUrl);
  }
}

// Calling all functions
getCharacter();
getCharacter(2);
getCharacter(5);
getCharacter(7);

getEpisodes();
getEpisodes(7);
getEpisodes(9);
getEpisodes(10);

getLocation();
getLocation(1);
getLocation(10);
getLocation(20);
