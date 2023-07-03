module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@primitives': './src/primitives',
          '@screens': './src/screens',
          '@store': './src/store',
          '@hooks': './src/hooks',
          '@assets': './assets',
          '@constants': './src/constants',
        },
      },
    ],
  ],
};
