const eslintCommand = 'eslint . --ext ts,tsx';
const formatCommand = 'prettier --write';
const stylelintCommand =
  'stylelint --allow-empty-input "./src/**/*.{css,scss}"';

module.exports = {
  '*.{js,jsx,ts,tsx}': [formatCommand, eslintCommand],
  '*.{css,scss}': [formatCommand, stylelintCommand],
};
