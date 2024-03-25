# ECommerce

Login with creds

email:test@test.com or test1@test.com

password:test


## Run with Docker
```
docker-compose build
docker-compose up
```

You can check the DB from Docker, go to mongodb-1 container, select Exec tab and then (you can get the value of these from .env file)
```
mongo -u user -p password
use dbname
show collections
db.users.find().toArray()
```

## Run Backend
```
cd backend

npm run migrate

npm start
```

## Run Frontend
```
cd frontend 

npm start

```

## CSS changes

open new terminal and run and let it run 
```
npx tailwindcss -i ./src/index.css -o ./src/output.css --watch
```

## Run prettier

```
npx prettier . --write
```



