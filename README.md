# Color Picker

An experimental color project based on my interest in collecting fresh color palettes.

## What I learned

Since the evolving of [React Hooks](https://reactjs.org/docs/hooks-intro.html), we can avoid writing classes and write more stateless components instead. Hooks enables us to separate logic from the views.
I tried using Hooks to manage shared states between components. This [post](https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster) would be a great reference on where to put the hooks, ideally should be the closest parent of components we pass states into.
For styling, each component goes along with each ***.style.js** that is written using **styled-components**. We can pass variables into css which I found really handy. On top of that, [@styled-system/theme-get](https://github.com/styled-system/styled-system) enables us to reuse color theme across the app.

## Built with

- [React](https://github.com/facebook/react)
- [Styled Components](https://github.com/styled-components/styled-components)

## Features

- select color from default list
- add custom hex color

## Preview

## Download source code and install dependencies

### `git clone git@github.com:trunglive/color-picker.git`
### `npm install`

## Getting started

To start this project, you can run:
### `npm start`

Then open [http://localhost:3000](http://localhost:3000) to view it in the browser.
