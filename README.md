# FrontChallenge

This project has been created using Angular CLI v1.7.4, Angular v5.2.9.

## Start project

In order to start the project:
1. npm install
2. npm run start
3. browse localhost:4200

The following command can be run in order to build optimized files for production, saved in dist folder:
ng build --prod --aot

## Files and folders

1. components folder with transaction-list and transaction-detail communicating via @Input and using TransactionService to get the info from the API.

2. shared/models folder with transaction and card models.

3. shared/pipes is used for converting an enum object to an array in order to iterate with it in the views.

4. shared/services has a static ApiService class for the main API parameters and TransactionService that extends the ApiService for transactions end point. More services could be created if we had more end points, such as users or accounts.

5. The url, username and password are set in the environment files in environments folder. Username and password should always be saved in the backend, but having only a frontend there is no other option.   

