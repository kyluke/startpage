var search_response;
function search (searchTerm) {
	var links = document.getElementsByTagName('a');

	if (searchTerm.length > 2) {		

		for (var i = links.length - 1; i >= 0; i--) {
			var link = links[i].href.replace(/.*?:\/\//g, "");
			var position = link.search(searchTerm);
			if (searchTerm != '') {	
				if (position > 0) {
					search_response = link.substring(position+searchTerm.length, link.length)
					break;
				}
				else if (position == 0) {
					search_response = link.substring(position+searchTerm.length, link.length)
					break;
				};
			};
		};

	};
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 9) {
    	event.preventDefault();
    	var orig = document.getElementById('q').value;
    	document.getElementById('q').value = orig+search_response;
    };
});

function submit () {
	input = document.getElementById('q').value;
	console.log(ValidURL(input));
	return false;
}

function ValidURL(str) {
  var pattern = new RegExp('^(https?:\/\/)?'+ // protocol
    '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|'+ // domain name
    '((\d{1,3}\.){3}\d{1,3}))'+ // OR ip (v4) address
    '(\:\d+)?(\/[-a-z\d%_.~+]*)*'+ // port and path
    '(\?[;&a-z\d%_.~+=-]*)?'+ // query string
    '(\#[-a-z\d_]*)?$','i'); // fragment locater
  if(!pattern.test(str)) {
    alert("Please enter a valid URL.");
    return false;
  } else {
    return true;
  }
}