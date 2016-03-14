

//anropar API:et systemetapi genom ajax. hämtar ut alla  olika typer av drickor, i JSON format. 
$(document).ready(function(){
	})
		$.ajax({
		method: 'GET',
        url: 'https://karlroos-systemet.p.mashape.com/tag',
        headers: {'X-Mashape-Key': 'OZ9i1HXl2Hmshk5RuUK0N983D9GXp1MsAFnjsnpdlRfMKb7V6F', 'Accept': 'application/json'},
		
	}).done(function(data){
		
		//hämtar ut all data, skriver ut de i konsollen
		console.log(data);
		//hämtar ut ett specifikt objekt...
		console.log(data[3]);
		
		var x = document.getElementById("drink")
		var num = Math.floor((Math.random() * 32) + 1);
		x.innerHTML = "Drick lite: " + data[num].name + " till det";
	
	});

