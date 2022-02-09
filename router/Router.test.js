import Router from "./Router";
import HelloController from "../controllers/HelloController";
import NasaController from "../controllers/NasaController";
import AbstractController from "../controllers/AbstractController";

jest.mock("../controllers/HelloController");
jest.mock("../controllers/NasaController");

describe("Router", () => {
  let router;

  beforeEach(() => {
    HelloController.mockClear();
    NasaController.mockClear();
    router = new Router();
  });

  describe("delegate", () => {
    it('delegates to the HelloController if the route passed begins with "/hello"', async () => {
      const input = "/hello/some-other-thing";
      await router.delegate(input);

      expect(HelloController.mock.instances[0].handleUrl).toHaveBeenCalledTimes(
        1
      );
      expect(HelloController.mock.instances[0].handleUrl).toHaveBeenCalledWith(
        input
      );
    });

    it('delegates to the NasaController if the route passed begins with "/nasa"', async () => {
      const input = "/nasa/look-here";
      await router.delegate(input);

      expect(NasaController.mock.instances[0].handleUrl).toHaveBeenCalledTimes(
        1
      );
      expect(NasaController.mock.instances[0].handleUrl).toHaveBeenCalledWith(
        input
      );
    });

    it("throws if no matching controller is found for a given route", async () => {
      const input = "/throwme/bad-url";
      const testFunc = () => router.delegate(input);

      expect(testFunc).rejects.toThrow(
        "No controller found for the given route!"
      );
    });
  });
});
