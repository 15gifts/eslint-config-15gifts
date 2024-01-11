const { ESLint } = require("eslint");

export const getResultJson = async (filePaths) => {
  // 1. Create an instance.
  const eslint = new ESLint();

  // 2. Lint files.
  const results = await eslint.lintFiles(filePaths);

  // 3. Format the results.
  const formatter = await eslint.loadFormatter("json");
  const resultText = formatter.format(results);

  return JSON.parse(resultText);
};
