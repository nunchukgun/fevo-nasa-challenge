import NasaAccessor from "./NasaAccessor";
import axios from "axios";

describe("NasaAccessor", () => {
  let nasaAccessor;
  beforeEach(() => {
    nasaAccessor = new NasaAccessor();
    axios.get.mockClear();
    global.photoCache = {};
  });
  describe("fetchMarsPhotos", () => {
    it("fetches the first 3 photos for the given earthDate if that data is not already cached and caches them", async () => {
      axios.get.mockResolvedValueOnce({
        data: {
          photos: [{ img_src: 1 }, { img_src: 2 }, { img_src: 3 }, { d: 4 }],
        },
      });
      const expected = [1, 2, 3];
      const input = "2020-12-25";
      const result = await nasaAccessor.fetchMarsPhotos(input);

      expect(result).toEqual(expected);
      expect(global.photoCache["2020-12-25"]).toEqual(expected);
    });

    it("retrieves previously cached photos instead of hitting the NASA API", async () => {
      global.photoCache = {
        "1999-02-14": ["mock cached data"],
      };

      const expected = ["mock cached data"];
      const input = "1999-02-14";
      const result = await nasaAccessor.fetchMarsPhotos(input);

      expect(result).toEqual(expected);
      expect(axios.get).not.toHaveBeenCalled(); //ensuring the api call does not occur
    });
  });
});
