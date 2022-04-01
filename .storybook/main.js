module.exports = {
  "stories": [
    '../src/components/**/*.stories.js',
    '../src/components/*.stories.js',
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  "addons": [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
}

// .storybook/main.js

// module.exports = {
//   //👇 Location of our stories
//   stories: ['../src/components/**/*.stories.js'],
//   addons: [
//     '@storybook/addon-links',
//     '@storybook/addon-essentials',
//     '@storybook/preset-create-react-app',
//   ],
// };