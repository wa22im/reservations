### Backend : 
the backend is created using Node Express Typscript and mongoose. 
the Data base created with mongoAtlas( you can create an account for free and get 500mb free storage, pretty good deal if you ask me)
you need to create you .env.development.local file and add 
# PORT
PORT = 8080

# DATABASE
ATLAS_DB_USERNAME = get me from mongoatlas
ATLAS_DB_PWD = get me from mongoatlas

# CORS
ORIGIN = * add your  the allowed origins
CREDENTIALS = true
then 

npm install 
npm run dev ( for the dev server)
# swagger documentaion: baseUrl/api-docs
npm run test (run test)

### frontEnd ( client side) : 
the client side is created using React, Typescript and redux. 
It is a small application but i used redux for demonstration.
npm install 
npm run start 

and enjoy

