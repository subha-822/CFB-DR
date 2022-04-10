const express = require("express");
const https = require("https");
const app=express();
app.get("/",function(req,res){
    const url= "https://api.openweathermap.org/data/2.5/weather?q=london&appid=93dc4535f7e46dd765655b586ed40948&units=metric"
    https.get(url, function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            const weatherData = JSON.parse(data)
            // console.log(weatherData);
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            res.write("The weather is currently" + weatherDescription)
            console.log(weatherDescription);
            console.log(temp);
            // 1st learn

            // const object = {
            //     name: "Subha",
            //     favouriteFood:"Ramen"
            // }
            // const subha =JSON.stringify(object)
            // console.log(subha);
        })

    })
    res.send("Server is up and running.")

})

app.listen(3000,function(){
    console.log("Server is running on port 3000.");
})