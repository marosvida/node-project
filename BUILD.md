## Setup database
Create .env file within root directory
Inside it define dbname, user, and password for your postgresql database
```
DB_NAME=
USER=
PASSWORD=
```
Those fields are used in `sequelize.ts` to configure db connection 

run script `insert_data.sql` to insert data 

## To RUN backend

```
cd backend-nodejs
npm install
```
Run `npm start`