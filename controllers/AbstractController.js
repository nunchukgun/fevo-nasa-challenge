class AbstractController {
  constructor() {
    if (new.target === AbstractController) {
      throw new TypeError(
        "Cannot construct AbstractController instances directly"
      );
    }
    
    if (this.handleUrl === undefined || typeof this.handleUrl !== "function") {
      throw new TypeError("Must override handleUrl method");
    }
  }
}

export default AbstractController;
