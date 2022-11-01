module.exports = {
  source: ['sd-input/src/sd-input.json'],
  fileHeader: {
    autoGeneratedFileHeader: () => {
      return [`Do not edit directly, this file was auto-generated`];
    },
  },
  platforms: {
    css: {
      transformsGroup: 'css',
      buildPath: 'tokens/',
      prefix: 'figma',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            fileHeader: 'autoGeneratedFileHeader',
          },
        },
      ],
    },
  },
};