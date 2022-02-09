import AbstractController from "./AbstractController";

class HelloController extends AbstractController {
  constructor() {
    super();
  }

  async handleUrl(url) {
    const urlTail = url.substring(1).split("/")[1];
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
