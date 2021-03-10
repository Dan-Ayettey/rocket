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
 Platform: I decided to work with Nodejs, since I have a lot of experience with React and react native.
 **Target: The objective is to create a "cryptocurrency market"-app. With the historical data provided by the API the
  goal is to present it in meaningful way for the user.
 **Return output**
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
                  }
}
]
 }
 ```  
  ####### Links to modules and middle-wares
 
https://reactnative.dev/
