

//anropar API:et systemetapi genom ajax. hämtar ut alla  olika typer av drickor, i JSON format. 
$(document).ready(function(){
	})
		$.ajax({
		method: 'GET',
        url: 'https://karlroos-systemet.p.mashape.com/product?alcohol_to=30&limit=4&price_from=9&price_to=200&tag=7%2C8%2C16%2C19%2C22%2C23%2C24%2C25',
        headers: {'X-Mashape-Key': 'OZ9i1HXl2Hmshk5RuUK0N983D9GXp1MsAFnjsnpdlRfMKb7V6F', 'Accept': 'application/json'},
		
	}).done(function(data){
		
		//hämtar ut all data, skriver ut de i konsollen
		
		AllData = data;
		
		//hämtar ut ett specifikt objekt...
		console.log(data[3]);
		
		var x = document.getElementById("drink")
		var num = Math.floor((Math.random() * 4) + 1);
		x.innerHTML = "Drick lite: " + data[num].name + " till det";
	
	});

