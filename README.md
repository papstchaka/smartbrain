# smartbrain
Frontend for the smartbrain project

Implementing the frontend webiste of the smart brain project which can be accessed via <a href="https://papstchaka.github.io/smartbrain/" target="_blank">Smart Brain</a>.

Project provides a website you can register and log in to (without email verification). So just register with whatever email you want (they will only be stored on my own SQL-DataBase which I don't care about, nobody will see them). Your passwords will also be stored there but hashed, so it is almost impossible for anyone (including me) to access them. Once logged in you can insert a photo-url (from the web) into the input and the API in the background will detect all faces which occur on the photo. 

![GitHub Logo](./src/example.png)
Format: ![Alt Text](url)

Furthermore, once you are registered you'll get a unique score that tells you the amount of photos analysed by yourself.

Implemented by the instructions given from <a href="https://github.com/aneagoie" target="_blank">Andrei Neagioe</a> in his "Zero to Mastery" course on udemy.