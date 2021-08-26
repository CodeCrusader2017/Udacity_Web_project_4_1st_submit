# Webpack Node/Express App for NLP processing via API call to MeaningCloud.com. 

# This project consists of: 
- __test__ folder 
    - checkForName.test
    - handleSubmit.test
- dist folder (webpack generated - git excluded)
- node_modules folder (webpack generated - git excluded)
- src folder 
    - client folder
         - js folder
                 - formHandler.js
                 - nameChecker.js 
         - styles folder
                 - images folder 
                       - e-sign-1243111.jpg
                 - base.scss 
                 - footer.scss 
                 - form.scss
                 - header.scss
                 - resets.scss  
         - views folder 
                 - index.html 
         - index.js  
    - server folder
         - index.js 
         - mockAPI.js 
- .babelrc
- .env
- .gitignore
- package
- package-lock
- README
- webpack.dev
- webpack.prod

## To get Up and Running

1). In Visual Studio open two Terminals and split them. 
2). In both terminals navigate to the root directory of this project, namely fend-webpack-content
3). In the first terminal run the following two commands (i.e. run one after the other): 
    a). npm run build-prod
    b). npm run start
4). In the second terminal run the following command: 
    npm run build-dev
5). The command in step (4) above will auto open a browser with the port set to 8080 - change to port 8081 (i.e. http://localhost:8081/)
    Note: normally the default browser will open, but if not then hardcode http://localhost:8081/ into the browser of choice.
6). To run tests in root directory fend-webpack-content, run: npm run test
7). OPTIONAL: To assist with website initial functionality start up, it might be prudent to clear cookies in browser of choice, and repeat where required if testing. 