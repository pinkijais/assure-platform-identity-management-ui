<div align="center">
    <h1>Realms Service UI</h1>

<p>Realms Service UI application for managing the user profile in DXC Platform Console</p>

<br />

[Latest Release](https://github.dxc.com/assure/assure-platform-identity-management-ui/releases/latest) | [Latest Release Notes](./CHANGE-LOG.md)

<br/>
</div>

[![Build Status](https://jenkins.platformdxc.com/buildStatus/icon?job=assure%2Fassure-platform-identity-management-ui%2Fmaster)](https://jenkins.dxc.com/blue/organizations/jenkins/assure%2Fassure-platform-identity-management-ui/activity?branch=master)

<hr />

# Table of Contents

- [Table of Contents](#table-of-contents)
- [Installation](#installation)
  - [Requirements](#requirements)
  - [Dependencies](#dependencies)
- [Instructions](#instructions)
  - [How to Run](#how-to-run)
  - [How to Build](#how-to-build)
  - [How to Test](#how-to-test)
- [Use Recommendations](#use-recommendations)

# Installation
Installation info and instructions on how to set-up `Realms Service UI` and get everything ready.

## Requirements
Minimum requirements to run the `Realms Service UI`:
- [NodeJS v14.x.x](https://nodejs.org/download/release/v14.20.1/)
- [npm v6.14.x](https://docs.npmjs.com/cli/v6/configuring-npm/install)
  
## Dependencies
`Realms Service UI` is a frontend running with the support of 2 other different APIs which need to be available.
- [Realms Service API](https://github.dxc.com/assure/assure-platform-realms-config-lambda)
- [Access Management Service API](https://github.dxc.com/assure/assure-platform-access-management-lambda)

# Instructions
This application is meant to be installed directly from GIT

``` cmd
git clone https://github.dxc.com/assure/assure-platform-identity-management-ui.git 
```

After it's been correctly downloaded

``` cmd
npm clean-install 
```

## How to Run

``` cmd
npm run start 
``` 

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## How to Build

``` cmd
npm run build:local 
```
<br/>

``` cmd
npm run build 
```

Build the app for production to the `build` folder, in your local or CI environment respectively.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

For building a distributable bundle, the tasks `build:local` and `build` are provided which are meant to be used in local and CI environments respectively.

## How to Test

``` cmd
npm run test 
```

``` cmd
npm run test app.test.js
```

Launches the test runner in the interactive watch mode.

``` cmd
npm run test:ci 
```

Launches the test runner for a full test scan with coverage report optimized for your CI environment.

# Use Recommendations
- We recommend the use of the npm command `clean-install` over `install` to keep always the same libraries and dependencies for all the people involved since the `clean-install` command both removes your local `node_modules` folder and install the dependencies as listed in package-lock.json file.
- When updating the dependencies, to keep the package-lock consistent and updated we strongly encourage the use of `npm` own commands to install, update and remove packages instead of manually modifying `package.json` file. Some common commands:
  * install
    ``` cmd 
    npm install --save | --save-dev 
    ```
  * uninstall
    ``` cmd
    npm uninstall --save
    ```
  - To check/upgrade your dependencies we use `npm-check` utility, `npx npm-check -u` allows you to check the latest version of your dependencies and update the corresponding packages when needed.
- To clear a cache in npm, we need to run the npm cache clean --force command in our terminal.
``` cmd
npm cache clean --force
``` 


