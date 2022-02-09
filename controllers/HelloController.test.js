import HelloController from "./HelloController";

describe("HelloController", () => {
  let helloController;

  beforeEach(() => {
    helloController = new HelloController();
  });
  describe("handleUrl", () => {
    describe("sayHi", () => {
      it('returns the word "hello" when given the following url: "hello/say-hi', async () => {
        const input = "hello/say-hi";
        const result = await helloController.handleUrl(input);
        expect(result).toEqual("hello");
      });
    });

    describe("unmatched url", () => {
      it("throws an error if no handler is found for the given url", () => {
        const input = "/hello/bad-url";
        const testFunc = () => helloController.handleUrl(input);

        expect(testFunc).rejects.toThrow("No handler found for the given url!");
      });
    });
  });
});
