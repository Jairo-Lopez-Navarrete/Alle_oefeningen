fetch('examples/example.json')
    .then((response) => {
        // Do stuff with the response
    })
    .catch((error) => {
        console.log('Looks like there was a problem: \n', error);
    });