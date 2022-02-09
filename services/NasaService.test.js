import NasaService from "./NasaService";
import NasaAccessor from "../data-accessors/NasaAccessor";

jest.mock("../data-accessors/NasaAccessor");

describe("NasaService", () => {
  let nasaService;
  const realDateNow = Date.now;

  beforeAll(() => {
    NasaAccessor.mockImplementation(() => {
      return {
        fetchMarsPhotos: (earthDate) => {
          const dataMap = {
            "2020-02-02": [1, 2, 3],
            "2020-02-01": [],
            "2020-01-31": [3],
            "2020-01-30": [1, 3],
            "2020-01-29": [1, 2, 3],
            "2020-01-28": [1, 2, 3],
            "2020-01-27": [],
            "2020-01-26": [2, 3],
            "2020-01-25": [1, 2, 3],
            "2020-01-24": [1],
          };
          return dataMap[earthDate];
        },
      };
    });
  });

  beforeEach(() => {
    Date.now = jest.fn(() => new Date("2020-02-02T06:00:00.000Z"));
    nasaService = new NasaService();
  });

  afterEach(() => {
    Date.now = realDateNow;
  });

  it("returns a map of the last 10 days of mars photo data", async () => {
    const expected = {
      "2020-02-02": [1, 2, 3],
      "2020-02-01": [],
      "2020-01-31": [3],
      "2020-01-30": [1, 3],
      "2020-01-29": [1, 2, 3],
      "2020-01-28": [1, 2, 3],
      "2020-01-27": [],
      "2020-01-26": [2, 3],
      "2020-01-25": [1, 2, 3],
      "2020-01-24": [1],
    };

    const result = await nasaService.fetchMarsPhotos();
    expect(result).toEqual(expected);
  });
});
