function getPeopleData() {
    $.get(`https://swapi.dev/api/people`, function (data) {
        $("#data").empty();
        for (var i = 0;i < data.results.length;i++) {
            var HTMLstring = "";
            HTMLstring += `<div class="api-data-box">`;
            HTMLstring += `<h3>Name: ${data.results[i].name}</h3>`;
            HTMLstring += `<h3>Gender: ${data.results[i].gender}</h3>`;
            HTMLstring += `<h3>Hair Color: ${data.results[i].hair_color}</h3>`;
            HTMLstring += `<h3>Height: ${data.results[i].height}</h3>`;
            HTMLstring += `<h3>Mass: ${data.results[i].mass}</h3>`;
            HTMLstring += `<h3>Skin Color: ${data.results[i].skin_color}</h3>`;
            HTMLstring += `<h3>Eye Color: ${data.results[i].eye_color}</h3>`;
            HTMLstring += `<h3>Birth Year: ${data.results[i].birth_year}</h3>`;
            HTMLstring += `<hr/>`;
            HTMLstring += `</div>`;
            $("#data").append(HTMLstring);
        }
    });
}
function getFilmData() {
    $.get(`https://swapi.dev/api/films`, function (data) {
        $("#data").empty();
        for (var i = 0;i < data.results.length;i++) {
            var HTMLstring = "";
            HTMLstring += `<div class="api-data-box">`;
            HTMLstring += `<h3>Title: ${data.results[i].title}</h3>`;
            HTMLstring += `<h3>Episode: ${data.results[i].episode_id}</h3>`;
            HTMLstring += `<P>Opening Crawl: ${data.results[i].opening_crawl}</p>`;
            HTMLstring += `<h3>Director: ${data.results[i].director}</h3>`;
            HTMLstring += `<h3>Producer: ${data.results[i].producer}</h3>`;
            HTMLstring += `<h3>Release Date: ${data.results[i].release_date}</h3>`;
            HTMLstring += `<hr/>`;
            HTMLstring += `</div>`;
            $("#data").append(HTMLstring);
        }
    });
}

function getStarshipsData() {
    $.get(`https://swapi.dev/api/starships`, function (data) {
        $("#data").empty();
        for (var i = 0;i < data.results.length;i++) {
            var HTMLstring = "";
            HTMLstring += `<div class="api-data-box">`;
            HTMLstring += `<h3>Name: ${data.results[i].name}</h3>`;
            HTMLstring += `<h3>Model: ${data.results[i].model}</h3>`;
            HTMLstring += `<h3>Manufacturer: ${data.results[i].manufacturer}</h3>`;
            HTMLstring += `<h3>Cost: ${data.results[i].cost_in_credits}</h3>`;
            HTMLstring += `<h3>Length: ${data.results[i].length}</h3>`;
            HTMLstring += `<h3>Max Atmosphering Speed: ${data.results[i].max_atmosphering_speed}</h3>`;
            HTMLstring += `<h3>Crew: ${data.results[i].crew}</h3>`;
            HTMLstring += `<h3>Passengers: ${data.results[i].passengers}</h3>`;
            HTMLstring += `<h3>Cargo Capacity: ${data.results[i].cargo_capacity}</h3>`;
            HTMLstring += `<h3>Consumables: ${data.results[i].consumables}</h3>`;
            HTMLstring += `<h3>Hyperdive Rating: ${data.results[i].hyperdrive_rating}</h3>`;
            HTMLstring += `<h3>Class: ${data.results[i].starship_class}</h3>`;
            HTMLstring += `<hr/>`;
            HTMLstring += `</div>`;
            $("#data").append(HTMLstring);
        }
    });
}

function getPlanetsData() {
    $.get(`https://swapi.dev/api/planets`, function (data) {
        $("#data").empty();
        for (var i = 0;i < data.results.length;i++) {
            var HTMLstring = "";
            HTMLstring += `<div class="api-data-box">`;
            HTMLstring += `<h3>Name: ${data.results[i].name}</h3>`;
            HTMLstring += `<h3>Rotation Period: ${data.results[i].rotation_period}</h3>`;
            HTMLstring += `<h3>Orbital Period: ${data.results[i].orbital_period}</h3>`;
            HTMLstring += `<h3>Diameter: ${data.results[i].diameter}</h3>`;
            HTMLstring += `<h3>Climate: ${data.results[i].climate}</h3>`;
            HTMLstring += `<h3>Gravity: ${data.results[i].gravity}</h3>`;
            HTMLstring += `<h3>Terrain: ${data.results[i].terrain}</h3>`;
            HTMLstring += `<h3>Surface Water: ${data.results[i].surface_water}</h3>`;
            HTMLstring += `<h3>Population: ${data.results[i].population}</h3>`;
            HTMLstring += `<hr/>`;
            HTMLstring += `</div>`;
            $("#data").append(HTMLstring);
        }
    });
}
function getVehiclesData() {
    $.get(`https://swapi.dev/api/vehicles`, function (data) {
        $("#data").empty();
        for (var i = 0;i < data.results.length;i++) {
            var HTMLstring = "";
            HTMLstring += `<div class="api-data-box">`;
            HTMLstring += `<h3>Name: ${data.results[i].name}</h3>`;
            HTMLstring += `<h3>Model: ${data.results[i].model}</h3>`;
            HTMLstring += `<h3>Manufacturer: ${data.results[i].manufacturer}</h3>`;
            HTMLstring += `<h3>Cost: ${data.results[i].cost_in_credits}</h3>`;
            HTMLstring += `<h3>Length: ${data.results[i].length}</h3>`;
            HTMLstring += `<h3>Max Atmosphering Speed: ${data.results[i].max_atmosphering_speed}</h3>`;
            HTMLstring += `<h3>Crew: ${data.results[i].crew}</h3>`;
            HTMLstring += `<h3>Passengers: ${data.results[i].passengers}</h3>`;
            HTMLstring += `<h3>Cargo Capacity: ${data.results[i].cargo_capacity}</h3>`;
            HTMLstring += `<h3>Consumables: ${data.results[i].consumables}</h3>`;
            HTMLstring += `<h3>Class: ${data.results[i].starship_class}</h3>`;
            HTMLstring += `<hr/>`;
            HTMLstring += `</div>`;
            $("#data").append(HTMLstring);
        }
    });
}
function getSpeciesData() {
    $.get(`https://swapi.dev/api/species`, function (data) {
        $("#data").empty();
        for (var i = 0;i < data.results.length;i++) {
            var HTMLstring = "";
            HTMLstring += `<div class="api-data-box">`;
            HTMLstring += `<h3>Name: ${data.results[i].name}</h3>`;
            HTMLstring += `<h3>Classification: ${data.results[i].classification}</h3>`;
            HTMLstring += `<h3>Designation: ${data.results[i].designation}</h3>`;
            HTMLstring += `<h3>Average Height: ${data.results[i].average_height}</h3>`;
            HTMLstring += `<h3>Skin Colors: ${data.results[i].skin_colors}</h3>`;
            HTMLstring += `<h3>Hair Colors: ${data.results[i].hair_colors}</h3>`;
            HTMLstring += `<h3>Eye Colors: ${data.results[i].eye_colors}</h3>`;
            HTMLstring += `<h3>Average Lifespan: ${data.results[i].average_lifespan}</h3>`;
            HTMLstring += `<h3>Language: ${data.results[i].language}</h3>`;
            // HTMLstring += `<h3>Consumables: ${data.results[i].consumables}</h3>`;
            // HTMLstring += `<h3>Hyperdive Rating: ${data.results[i].hyperdrive_rating}</h3>`;
            // HTMLstring += `<h3>Class: ${data.results[i].starship_class}</h3>`;
            HTMLstring += `<hr/>`;
            HTMLstring += `</div>`;
            $("#data").append(HTMLstring);
        }
    });
}



$(document).ready(function(){
    $("#category").change(function(){
        console.log("gets here");
        var selectedCategory = $(this).children("option:selected").val();
        if(selectedCategory === "people") {
            getPeopleData();
        } else if (selectedCategory === "films") {
            getFilmData();
        } else if( selectedCategory === "starships" ) {
            getStarshipsData();
        } else if ( selectedCategory === "planets" ) {
            getPlanetsData();
        } else if ( selectedCategory === "vehicles") {
            getVehiclesData();
        }
        else {
            getSpeciesData();
        }
    });
});
$('#form-1').submit(function(){
    alert('Hey Pal, this submission form is not ready yet. Stay on the current page.');
    return false
});