import NasaController from "./NasaController";
import NasaService from "../services/NasaService";

jest.mock("../services/NasaService");

describe("NasaController ", () => {
  let nasaController;

  beforeEach(() => {
    nasaController = new NasaController();
  });
  describe("handleUrl", () => {
    describe("fetchMarsPhotos", () => {
      it('returns the result of the NasaService method when given thefollowing url: "nasa/mars-photos"', async () => {
        const input = "nasa/mars-photos";
        await nasaController.handleUrl(input);
        expect(NasaService.mock.instances[0].fetchMarsPhotos).toHaveBeenCalledTimes(
          1
        );
      });
    });

    describe("unmatched url", () => {
      it("throws an error if no handler is found for the given url", () => {
        const input = "/nasa/bad-url";
        const testFunc = () => nasaController.handleUrl(input);

        expect(testFunc).rejects.toThrow("No handler found for the given url!");
      });
    });
  });
});
