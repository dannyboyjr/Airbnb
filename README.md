airbnb-clone
Welcome to the airbnb-clone project! This project is a recreation of the popular vacation rental platform, airbnb. The goal of this project is to provide users with a similar experience to the original airbnb website, including the ability to search for and book unique accommodations around the world.

Screenshots
Please see the screenshots folder for examples of the project in action.

CRUD Features
The airbnb-clone project includes CRUD (Create, Read, Update, Delete) features for both the Spots and Reviews sections of the website. Users are able to create new listings for accommodations, as well as read, update, and delete existing listings. Additionally, users can leave reviews for accommodations they have stayed at and edit or delete their own reviews.

Technologies Used
This project utilizes the following technologies:

React for the frontend
Redux for state management
Express for the backend
Sequelize for database management with Postgres
CSS for styling
Setup
Clone the repository and navigate to the project directory
Run npm install to install all necessary dependencies
Create a .env file and add the following variables:
PORT: the port number you would like the application to run on
DB_FILE: the file path for your database
JWT_SECRET: a secret phrase for JSON Web Token authentication
SCHEMA: "airbnb_clone"
Run the command npm run start-dev to start the development server
The application should now be running on the port specified in your .env file.
Please note that the above instructions assume that you have the necessary dependencies (Node.js, Postgres) installed on your machine. If you are missing any dependencies, please refer to their respective documentation to learn how to install them.