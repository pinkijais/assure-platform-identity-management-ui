// ! Added to fix this - require() of ES modules is not supported.
// * for more info : https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser#setup
// ? Ignore - installation step (Not Required)  - https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser#installation
// * By default react install 'babel' for us, No need install again.

module.exports = {
  parser: "@babel/eslint-parser",
};
