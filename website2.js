
    document.querySelectorAll(".container img").forEach(image =>{

        image.onclick = () =>{
            document.querySelector(".lightbox").style.display = "block";
             document.querySelector(".lightbox img").src = image.getAttribute("src")
            if(image.getAttribute("src") == "imagesforwebsite/images/optimus prime.heic_page-0001--png.png" || image.getAttribute("src") == "imagesforwebsite/images/scorpion-png.png"){
                document.querySelector(".lightbox img").style.width = '75rem';
            }
            else{
            document.querySelector(".lightbox img").style.width = "36%";
            }
        }
        
    });

    document.querySelector(".lightbox span").onclick = () =>{
        document.querySelector(".lightbox").style.display = "none";
    }