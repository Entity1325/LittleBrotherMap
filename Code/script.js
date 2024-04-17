if(window.innerHeight > window.innerWidth){
    alert("Please use Landscape!");
}

var mymap = L.map('map').setView([51.5080, 0], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

fetch('https://api.npoint.io/8cf2edcdab06ce918af8')
.then(response => response.json())
.then(data => {
    // Now, you can iterate through the JSON array
    data.forEach(element => {
        console.log(element.Title);
        if(element.Disc == "Generated by ChatGPT"){
            var marker = L.marker(element.Cords).addTo(mymap);
            marker.bindPopup(`<p style="background-color:rgb(80, 255, 41);">Generated by Chat GPT <a href=Disclaimer.html>Disclaimer</a></p><b>${element.Title}</b><br>${element.Text}`)
        } else {
            if(element.Disc == "Generated by third party"){
                if(element.Image == "None"){
                    var marker = L.marker(element.Cords).addTo(mymap);
                    marker.bindPopup(`<p style="background-color:rgb(255, 69, 56);">Generated by third party <a href=TDisclaimer.html>Disclaimer</a></p><b>${element.Title}</b> <a href=${element.Link}>Article</a> <br>${element.Text}`)
                } else{
                    var marker = L.marker(element.Cords).addTo(mymap);
                    marker.bindPopup(`<p style="background-color:rgb(255, 69, 56);">Generated by third party <a href=TDisclaimer.html>Disclaimer</a></p><b>${element.Title}</b> <a href=${element.Link}>Article</a> <br> <img src="${element.Image}" alt="Image" style="float:right;width:100%;height:auto;"><br>${element.Text}`)
                }
            } else{
                if(element.Image == "None"){
                    var marker = L.marker(element.Cords).addTo(mymap);
                    marker.bindPopup(`<b>${element.Title}</b> <a href=${element.Link}>Article</a><br>${element.Text}`);
                } else {
                    var marker = L.marker(element.Cords).addTo(mymap);
                    marker.bindPopup(`<b>${element.Title}</b> <a href=${element.Link}>Article</a><br><img src="${element.Image}" alt="Image" style="float:right;width:100%;height:auto;"><br>${element.Text}`);
                }
            }
        }
    });
})
.catch(error => console.error('Error:', error));