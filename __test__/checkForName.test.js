//Note: 
//SyntaxError: C:\Users\ohara\Desktop\Udacity\Udacity_Web_project_4\fend-webpack-content\.babelrc: Error while parsing config - JSON5: invalid character '‘' at 1:3 
//Hence, .babelrc file updated with advice from "https://knowledge.udacity.com/questions/304548" to allow the "Jest" testing framework (via "npm run test") to work 

import { checkForName } from '../src/client/js/nameChecker' 

test('Checks a Captain name', () => {
  expect(checkForName("Paul")).toBe("Paul");
});

module.exports = checkForName;


