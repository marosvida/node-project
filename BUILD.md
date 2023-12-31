## Setup database
```
cd backend-nodejs
```

Create .env file within this directory
Inside it define dbname, user, and password for your postgresql database
```
DB_NAME=
USER=
PASSWORD=
```
Those fields are used in `sequelize.ts` to configure db connection 

## To RUN backend

```
cd backend-nodejs
npm install
```
Run `npm start` - this will also crete DB connection and create tables

Now run script `insert_data.sql` to insert data

## To RUN frontend

```
cd frontend-angular
npm install
ng serve
```
The website is now available locally on `http://localhost:4200/`
