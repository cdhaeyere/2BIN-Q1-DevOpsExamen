const { isEmpty, validation } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

// TODO: Create tests suite for validation function

describe("validations tests suites - checkGamerTag", () => {
    test("should return false as the gamertag is undefined", () => {
        const result = validation("");
        expect(result).toBe(false);
    });

    test("should return true as the gamertag meets all the requirements", () => {
        const result = validation("aaaaaa#1");
        expect(result).toBe(true);
    });

    test("should return false as the gamertag does not have 8 characters", () => {
        const result = validation("aaaaaa#");
        expect(result).toBe(false);
    });

    test("should return false as the gamertag does not have a special character", () => {
        const result = validation("aaaaaa11");
        expect(result).toBe(false);
    });

    test("should return false as the gamertag does not have a number", () => {
        const result = validation("aaaaaaa#");
        expect(result).toBe(false);
    });
});