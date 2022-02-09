import AbstractController from "./AbstractController";

class NasaController extends AbstractController {
  constructor() {
    super();
  }

  handleUrl() {
    console.log("received this url: " + url);
  }
}

export default NasaController;
