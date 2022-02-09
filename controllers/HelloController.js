import AbstractController from "./AbstractController";
import getUrlTail from "../util/getUrlTail";

class HelloController extends AbstractController {
  constructor() {
    super();
  }

  async handleUrl(url) {
    const urlTail = getUrlTail(url);
    switch (urlTail) {
      case "say-hi":
        return this._sayHi();
      default:
        throw new Error("No handler found for the given url!");
    }
  }

  _sayHi() {
    return "hello";
  }
}

export default HelloController;
