var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
var extra = $('#extra-info');
var table = $('#table');

$('#search').click(searchCountries);

function searchCountries() {
  	var countryName = $('#country-name').val();
if(!countryName.length) countryName = 'Poland';
$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

function showCountriesList(resp) {
  countriesList.empty();
  extra.empty();
resp.forEach(function(item) {
   	$('<li>').text(item.name).appendTo(countriesList);
	$('<td>').text(item.capital).appendTo(table);
	$('<li>').text(item.capital).appendTo(extra);
}); 
};