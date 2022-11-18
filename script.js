const audioElement = document.getElementById('audio');
const buttonElement = document.getElementById('button');


async function getJoke(){
    const options = {
        method: 'GET',
        headers: {
            'User-Agent': 'Robojoker (https://github.com/brycedipalo/robojoker',
            'accept': 'application/json'       
        }
    };
     const joke = await fetch('https://icanhazdadjoke.com', options)
        .then(response => response.json())
        .then(data => {
            return data.joke
        })
	.catch(err => console.error(err));
    
    console.log(joke);

    const speech = await fetch(`https://api.voicerss.org/?key=e9dd22c4abca4e7ab8997a454ffaef6a&hl=en-us&v=Mary&src=${joke}`, {method: 'GET'})
    .then(response => {return response.url})
    .catch(err => console.error(err));

    console.log(speech); 
        
    audioElement.setAttribute('src', speech);
    audioElement.play(); 
        
    
}

button.addEventListener("click",getJoke);


    