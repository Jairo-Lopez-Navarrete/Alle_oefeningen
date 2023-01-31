let theData2 = '{"naam":"jane", "age":"29", "degree":{"AAS":"VMI","BA":"UVA"}';

let myObj = JSON.parse(theData2);

document.getElementById('message').innerHTML = myObj.jane.degree.BA;