## Azarc Angular Developer Challenge

Azarc needs a way to manage employees and their personal details. The requirements are simple

1.  As an employee at Azarc, I should be able to log in with my google OAuth Account
2.  As a logged in user I should see a searchable directory of employees
3.  As a logged in user I should be able to navigate to my profile and add my personal details
- Residential Address
Work office location
    1.  Los Angeles
    2.  Cape Town
    3.  London

To successfully complete this assessment it is suggested that you implement the following

1.  Use Angular as your framework
2.  Implement simple login using Auth0 with google login as a social auth provider (this can be done for free)
3.  In browser mock data storage or mocked backend to provide realistic interactions with the backend
4.  Provide at least 20 entries of faked data for the employee directory for demonstration purposes
5.  Ensure that your app is presentable using Bootstrap, Material or any other css framework you want to ensure the site looks as you would want

Although this is a very simple app, this is your app, your project to show us how you believe things should be done. Ask as many questions as you like and work as you normally would. The assessment will be judged based on the functional requirements but also on the quality of the code. Add unit tests and e2e tests as you ordinarily would.


## Configuration

The sample needs to be configured with your Auth0 domain and client ID in order to work. In the root of the sample, copy `auth_config.json.example` and rename it to `auth_config.json`. Open the file and replace the values with those from your Auth0 tenant:

```json
{
  "domain": "<YOUR AUTH0 DOMAIN>",
  "clientId": "<YOUR AUTH0 CLIENT ID>",
  "audience": "<YOUR AUTH0 API AUDIENCE IDENTIFIER>"
}
```

## Installation
Run `npm install` to install all the dependencies

## Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

This will automatically seed the local database file (./api/database.json) using the (./api/DBSeeder.js) seeder file
This will automatically start a Node + Express server as the backend on port `3001`. The Angular application is configured to proxy through to this on any `/api` route.

## Build

Run `npm build` to build the project. The build artifacts will be stored in the `dist/azarc-ng-test` directory. Use the `--prod` flag for a production build.

To build and run a production bundle and serve it, run `npm run prod`. The application will run on `http://localhost:3000`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
