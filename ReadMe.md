### Simple React Template

A simple enough react boilerplate; built using `webpack`, served by 
`webpack-serve`, comes with `lodash`, `axios` and `jquery`.


## Setup

- `yarn install`
- Build for dev- `yarn build-dev`
- Build for prod- `yarn build-prod`
- Run in localhost:3000- `yarn start`

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
            |-- main.jsx
         |-- another.component
            |-- component.jsx
            |-- _component.scss
         |-- _components.scss (all the .scss partials defined in different components are referenced here)
      |-- views
          |-- home.jsx (or can be a directory of a view)
          |-- another.view
              |-- another.view.jsx
              |-- _another.view.scss
          |-- _views.scss (all the .scss partials defined in different views are referenced here)
      |-- index.scss (refers _components.scss, _views.scss and any other .scss partials)
      |-- index.jsx (the entry point where the app renders the main component and which eventually renders the views
          based on selected route)
   ```
## The MIT License

Copyright 2018 © Munim Dibosh

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
