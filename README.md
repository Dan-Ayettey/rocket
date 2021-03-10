# Rocket Coins app
 Bit coin app
 
 # Rocket Coin Fetcher
 
 This is a simple React native project created as  test project for Rocket.
 To run this project you need to set up environment. 
 ### 
   - Installing dependencies into an Expo managed project 
   - Running Nodejs environment, preferably version 6.13.4 (use Any IDE of your choice)
   - Valid cryptocompare.com API Key: [cryptocompare]
 
 ```sh
  git clone https://github.com/Dan-Ayettey/rocket.git
  cd rocket
  npm i or yarn add
  make sure you have expo install on your phone
  in your project directory, run:
  expo start --android or expo start --ios or yarn start. Depending on your platform,
 ```
 if everything run successfully you should see the app on your phone or emulator;
 
 ```sh
  expo development server started: <http://127.0.0.1:3000>
 ```
 ### Requests
 This project one sample request which is a **GET** request to the following Route: **Base_url +https://min-api.cryptocompare.com}_**
 
 ##### Request URL 
   https://min-api.cryptocompare.com/data/top/totalvolfull?tsym=USD
 
 
 ### Development
 Platform: I decided to work with Nodejs, since I have a lot of React and react native.
 **Target: The objective is to create a "cryptocurrency market"-app. With the historical data provided by the API the
  goal is to present it in meaningful way for the user.
 **Return output**
 Within the movie resource, the IMDb information can be found at the following path:
 _embedded[“viaplay:blocks”][0]._embedded[“viaplay:product”].content.imdb
 Using the get rquest of the provided link doesn't return  with a movie resource!
 The output of the GET request of  https://content.viaplay.se/pc-se/film/arrival-2016
 ```json
 { "CoinInfo": [{
                      "Id": 0,
                      "Name": "",
                      "FullName": "",
                  
                  "DISPLAY":{
                      "USD":{
                          "PRICE": 0,
                          "OPENDAY": 0,
                          "HIGHDAY": 0,
                          "LOWDAY":0,
                          "OPEN24HOUR": 0
                      }
                  }]
 }
 ```
 - I decided to use **"http://content.viaplay.se/pc-se/film" and https://content.viaplay.se/pc-se/film/troja-2004** to get movie resource instead.
 After getting the movie resource I extracted the IMDB id;
 - I called THE MOVIE DB API to get the movie id from IMDB id:
 https://api.themoviedb.org/3/find/{external_id}?api_key=<<api_key>>&language=en-US&external_source=imdb_id
 - I called the Movie DB API to get the trailler using themoviedb id:
 https://api.themoviedb.org/3/movie/603/videos?api_key=cf59e3834d8b8ef500ff73aa09dec848&language=en-US
 - After getting Youtube key, I store the viaplay movie resource url with youtube url in Redis, simple-cache, express compression modules
  for faster retrieval for the next call, for performance reasons using compressor and bunyan for debugging .
 
 ### Todos
  - little more test needed
  - shorten the response for the first time api call
  
  ####### Links to modules and middle-wares
 
