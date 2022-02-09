import AbstractController from "./AbstractController";
import getUrlTail from "../util/getUrlTail";
import NasaService from "../services/NasaService";

class NasaController extends AbstractController {
  constructor() {
    super();
    this.nasaService = new NasaService();
  }

  async handleUrl(url) {
    const urlTail = getUrlTail(url);
    switch (urlTail) {
      case "mars-photos":
        return await this._fetchMarsPhotos();
      default:
        throw new Error("No handler found for the given url!");
    }
  }

  async _fetchMarsPhotos() {
    return await this.nasaService.fetchMarsPhotos();
  }
}

export default NasaController;
