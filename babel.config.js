module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [['module:react-native-dotenv', {allowUndefined: true}], 'react-native-reanimated/plugin'],
};
