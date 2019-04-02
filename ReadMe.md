### Simple React Template

A simple enough react boilerplate; built using `webpack`, served by
`webpack-dev-server`, comes with `lodash`, `axios` and `jquery`.


## Setup

- `npm install`
- Build for dev- `npm run build-dev`
- Build for prod- `npm run build-prod`
- Running Tests- `npm run test`
- Run in localhost:3000 & open in browser(auto watch)- `npm start`

## What's included

- `webpack` is used to build and bundle
- `scss` is used as `css` pre-processor
- `babel` is used to transpile `es6`-> `es5`
- `eslint` is used for linting
- `axios` is included as http request framework
- `jquery` is included
- `lodash` is included
- `bootstrap` is used for basic component styling & structure
- `font-awesome` is used for icon fonts

## How it's structured and should be

   ```
   |-- src
      |-- components
         |-- main (the component that's responsible for view switching based on route)
            |-- main.js
         |-- another.component
            |-- component.js
            |-- _component.scss
         |-- _components.scss (all the .scss partials defined in different components are referenced here)
      |-- views
          |-- home.js (or can be a directory of a view)
          |-- another.view
              |-- another.view.js
              |-- _another.view.scss
          |-- _views.scss (all the .scss partials defined in different views are referenced here)
      |-- config.js (contains different configurations and routes for different views)
      |-- index.scss (refers _components.scss, _views.scss and any other .scss partials)
      |-- index.js (the entry point where the app renders the main component and which eventually renders the views based on selected route; which it knows via the routes from config.js)
   ```
