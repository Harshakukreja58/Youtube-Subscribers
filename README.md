# 🏗️`Get-Youtube-Subscribers`

This is backend capstone project for Almabetter Get-Youtube-Subscribers made using ExpressJS, MongoDB and NodeJs.
It involves developing a backend system to access data from Database.
It mainly focuses on GET method of API.

This is home page to handle all the API's
(image)

##✨ `Features` - User can fetch all the subscribers - User can get only the subscriber name and their subscribed channel - User can search subscriber detail by id

## 🔧 `About`

This project has 3 get routes each serving particular type of detail, the details are as follows:

    1) **GET /subscribers:** This route gets all subscriber's information from the MongoDB collection.
    ![GET SUbscribers](<getsubs.png>)

    2) **GET /subscribers/name:** This route gets information about subscriber's name and their subscribed channel.
    ![GET SUbscribers by name](<getsubsByName.png>)
    3) **GET /subscribers/:_id:** This route gets a specific subscriber's information based on unique id .Here id is taken parameter to search details of particular subscriber.
    ![GET SUbscriber by ID](<getsubsByID.png>)

    If id provided is incorrect, it shows the message as "subscriber not found"
    ![Wrong id given](<subsByWrongID.png>)

## 🧱 `Project Structure`

1. [index.js] is used to connect and start server and is used to handle API request
2. [src/createDatabase.js] for database creation on MongoDB.
3. [src/data.js] for data that have to be connected to a database.
4. [index.html] frontend to access all API's
5. [src/models/subscriber.js] for the schema.

## 💡 `Technologies used`

<div>
<img src="https://skills.thijs.gg/icons?i=mongodb" title="MongoDB" alt="MongoDB"/>&nbsp;
  <img src="https://avatars.githubusercontent.com/u/10251060?s=200&v=4" title="Postman" alt="Postman" width="50" height="50"/>&nbsp;
  <img src="https://skills.thijs.gg/icons?i=nodejs" title="NodeJS" alt="NodeJS" />&nbsp;
  <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png" title="ExpressJS" alt="ExpressJS" width="50" height="50"/>&nbsp;  
</div>

## 📝 `Links`

**Link for video preview** :

**Deployment links** : https://victorious-ruby-chameleon.cyclic.app/

** API Documentation** :

## 🌱 `For any feedback, please contact`

[![gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)] : harshakukreja0899@gmail.com
[![linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)] : (www.linkedin.com/in/harsha-kukreja0899)
