import { getResultJson } from "../helpers";

describe("React config", () => {
  test("That the React 'valid' file passes", async () => {
    const [result] = await getResultJson(["test/react/valid.tsx"]);

    expect(result.messages).toMatchSnapshot();
    expect(result.errorCount).toBe(0);
    expect(result.warningCount).toBe(1);
  });

  test("That the react 'invalid' file throws lint errors", async () => {
    const [result] = await getResultJson(["test/react/invalid.tsx"]);

    expect(result.messages).toMatchSnapshot();
    expect(result.errorCount).toBe(25);
    expect(result.warningCount).toBe(2);
  });
});
