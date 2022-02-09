import axios from "axios";
class NasaAccessor {
  constructor() {}

  async fetchMarsPhotos(earthDate) {
    if (global.photoCache[earthDate]) {
      return global.photoCache[earthDate];
    }

    const response = await axios.get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${earthDate}&camera=NAVCAM&api_key=DEMO_KEY`
    );
    const { photos } = response.data;

    const firstThreePhotos = photos.slice(0, 3);
    global.photoCache[earthDate] = firstThreePhotos;

    return firstThreePhotos;
  }
}

export default NasaAccessor;
