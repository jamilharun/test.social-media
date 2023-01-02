# test.social-media

project description:
this project is a social media application

run by nodejs for js runtime env and sanity database 

step 1 to run this app
setup modules and backend and frontend

# for backend.
use this code in your terminal 
first locate your backend folder using your terminal

npx @sanity/cli init            

and select test.social-media. if you have access to that database
if you don't see this, then you may not have access to the database.

click: ctrl + c
if you wanna cancel the command.

# for frontend.
use this code in your terminal 
second locate your frontend folder using your terminal

npx create-react-app ./
npm install -D tailwindcss
npx tailwindcss init

this will setup the react modules and dependencies of your project 

though this first 3 commands can found in react documentary.
ill just put it here for convenience

other modules you will need:
npm install @sanity/client @sanity/image-url react-icons react-loader-spinner react-masonry-css react-router-dom uuid

if the download process fails for some reason then add -f after the command
ex.
npm install react-loader-spinner -f

