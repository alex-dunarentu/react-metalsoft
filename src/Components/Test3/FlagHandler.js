class FlagHandler {
  constructor() {
    this.defaultValue = "__true__";
  }

  // use window.localStorage

  setFlag(label, value) {
    // handle case when the value is boolean or string, otherwise error
    // use a default value for value === true
  }

  isSet(label) {
    // returns true if the label is found in localStorage

    return false;
  }

  getValue(label) {
    // returns the defaultValue
    // handle the true case

    return "";
  }
}

if (typeof FlagHandler.singleton === "undefined") {
  FlagHandler.singleton = new FlagHandler();
}

export default FlagHandler;
