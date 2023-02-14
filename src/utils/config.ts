
export class RestfulAddress {
  static get PictureService() {
    if (isNodejs()) {
      return "http://127.0.0.1:8201";
    }
    return "";
  }
}

export function isNodejs() {
  return typeof window === "undefined";
}

export function isBrowser() {
  return typeof window !== "undefined";
}