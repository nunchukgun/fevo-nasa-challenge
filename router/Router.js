import HelloController from "../controllers/HelloController";
import NasaController from "../controllers/NasaController";

class Router {
  constructor() {}

  async delegate(route) {
    const pathHead = route.split("/")[1];
    const controller = this._buildController(pathHead);
    return await controller.handleUrl(route);
  }

  _buildController(pathHead) {
    switch (pathHead) {
      case "hello":
        return new HelloController();
      case "nasa":
        return new NasaController();
      default:
        throw new Error("No controller found for the given route!");
    }
  }
}

export default Router;
