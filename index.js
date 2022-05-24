document.getElementById("window").addEventListener("click", (e) => {
    fetch("https://api.giphy.com/v1/gifs/random?api_key=UKEp6Ufc3yA8sRK4LMvKSHbgM7ZbYNF2&tag=&rating=g").then((res) => {
        return res.json()
    }).then((data) => {
        const image = document.createElement("img");
        image.src = data.data.bitly_gif_url
        document.getElementById("window").appendChild(image)
        console.log(data);
    })
})