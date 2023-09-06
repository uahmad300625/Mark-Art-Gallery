
// creating the effect of the letters splitting out


    
    const enhance = id =>{
        const element = document.getElementById(id);
        text = element.innerText.split("");             // get the elements text so we can split each letter into a array, this way we can add the effect to each letter through a function instead of doing a bunch of HTML mess
        

        element.innerText = "";     // clear existing text to blank, will fill in later

        text.forEach(letter =>{
            const span = document.createElement("span");    // creating a span element for each letter
            span.className = "letter";                      // giving each span elemnent a classname
            span.innerText = letter;                        // putting a letter from the array into a seperate span element
            element.appendChild(span);                      // adding the word back into the orginal element
        })
    }

    enhance("name");
    enhance("website");
    enhance("website2")
    enhance("email");
    enhance("tiktok");