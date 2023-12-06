import { getResultJson } from "../helpers";

describe("Base config", () => {
  test("That the base 'valid' file passes", async () => {
    const [result] = await getResultJson(["test/base/valid.js"]);

    expect(result.messages).toMatchSnapshot();
    expect(result.errorCount).toBe(0);
  });

  test("That the base 'invalid' file throws lint errors", async () => {
    const [result] = await getResultJson(["test/base/invalid.js"]);

    expect(result.messages).toMatchSnapshot();
    expect(result.errorCount).toBe(13);
  });
});
