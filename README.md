# Front End Take Home
Regov POC application

### Tech Stack

- [ReactNative] application
- [NestJs] APIs build
- [MongoDB] database

### Connect to database

// STEP 1
login to database : https://cloud.mongodb.com/

Username: dtanh7@cmcglobal.vn   
Password: tuananh127@

// STEP 2:

Add your IP address inside Database tab

### Local project

- Clone the project and install


```sh
// STEP 1: clone project
git clone https://github.com/DoTuanAnh7/fe-takehome.git
// STEP 2: move to project
cd FETakeHome
// STEP 3: install root package
yarn install
// STEP 4: install Backend and Application
yarn install-all

// STEP 5: Run Backend and Application
yarn start-all

// TEST STEP 1: Run Test 
cd application

// TEST STEP 2: Run Test 
yarn test
```

- local api: http://localhost:3000

Username: A@gmail.com   
Password: 123123

### scripts 
```sh
"scripts": {
    "start-all": "concurrently \"cd backend && yarn start\" \"cd application && yarn start\" \"cd application && yarn ios\"",
    "install-all": "concurrently \"cd backend && yarn install\" \"cd client && yarn install\"",
  },


```


