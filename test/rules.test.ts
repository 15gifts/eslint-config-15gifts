const { ESLint } = require("eslint");

const getResultJson = async (filePaths) => {
  // 1. Create an instance.
  const eslint = new ESLint();

  // 2. Lint files.
  const results = await eslint.lintFiles(filePaths);

  // 3. Format the results.
  const formatter = await eslint.loadFormatter("json");
  const resultText = formatter.format(results);

  return JSON.parse(resultText);
};

test("That the base 'valid' file passes", async () => {
  const [result] = await getResultJson(["test/base/valid.js"]);

  expect(result.errorCount).toBe(0);
  expect(result).toMatchSnapshot();
});

test("That the base 'invalid' file throws lint errors", async () => {
  const [result] = await getResultJson(["test/base/invalid.js"]);

  expect(result.errorCount).toBe(16);
  expect(result).toMatchSnapshot();
});

test("That the React 'valid' file passes", async () => {
  const [result] = await getResultJson(["test/react/valid.tsx"]);

  expect(result.errorCount).toBe(0);
  expect(result).toMatchSnapshot();
});

test("That the React 'invalid' file throws lint errors", async () => {
  const [result] = await getResultJson(["test/react/invalid.tsx"]);

  expect(result.errorCount).toBe(23);
  expect(result).toMatchSnapshot();
});
