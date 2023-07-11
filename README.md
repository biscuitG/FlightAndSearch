
# ROle BAsed( all the models in 1 model folder , same for controllers ,etc )

# All core logic in sourse folder
## src/
   - index.js // server
   - models/  // how the tables and DB look like
   - controllers/
   - middlewares/
   - services/
   - utils/ 
   - config/  
   - respository/  method wriitern here by which we access model

- tests/[later]
- static/
- temp/

# Welcome to Flights Service

## Project Setup
  - clone project
  - execute npm install on root dorectory
  - create .env file in root folder and add environment variable 
      - `PORT = 3000 ` 
  - Inside `src/config` folder create new file `config.json` and then add following code of json
  ```
    {
  "development": {
    "username": "DbUserName",
    "password": "YourDbPassword",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

  ```

 -once you add config/json , go to src/ and then command `npx sequelize db:create ` on terminal
