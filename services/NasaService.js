import moment from "moment";
import NasaAccessor from "../data-accessors/NasaAccessor";

class NasaService {
  constructor() {
    this.nasaAccessor = new NasaAccessor();
  }

  async fetchMarsPhotos() {
    const lastTenDates = this._getLastTenDates();

    const photoMap = this._buildPhotoMap(lastTenDates);

    return photoMap;
  }

  _getLastTenDates = () => {
    const lastTenDates = [];
    for (let i = 0; i < 10; i++) {
      const aMoment = moment().subtract(i, "days");
      lastTenDates.push(aMoment.format("yyyy-MM-DD"));
    }
    return lastTenDates;
  };

  _buildPhotoMap = async (lastTenDates) => {
    let photoMap = {};

    for (let i = 0; i < lastTenDates.length; i++) {
      const date = lastTenDates[i];
      const data = await this.nasaAccessor.fetchMarsPhotos(date);
      photoMap = {
        ...photoMap,
        [date]: data,
      };
    }

    return photoMap;
  };
}

export default NasaService;
