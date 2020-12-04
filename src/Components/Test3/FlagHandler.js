class FlagHandler {
  constructor() {
    this.defaultValue = "__true__";
  }

  // use window.localStorage

  setFlag(label, value = true) {
    if (typeof value === "boolean" || typeof value === "string") {
      window.localStorage.setItem(label, value);
    } else {
      alert("error: you did not provide a boolean or string value!");
    }

    // handle case when the value is boolean or string, otherwise error
    // use a default value for value === true
  }

  isSet(label) {
    // returns true if the label is found in localStorage
    const item = localStorage.getItem(label);
    return !!item;
  }

  getValue(label) {
    // returns the defaultValue
    // handle the true case
    const item = localStorage.getItem(label);
    return item;
  }

  deleteValue(label) {
    if (label) {
      const hasItem = this.isSet(label);
      if (hasItem) {
        console.log("remove itemd", label);
        localStorage.removeItem(label);
        alert(`${label} has been deleted!`);
      } else {
        alert(`${label} is not found!`);
      }
    } else {
      alert("please insert a label!");
    }
  }
}

if (typeof FlagHandler.singleton === "undefined") {
  FlagHandler.singleton = new FlagHandler();
}

export default FlagHandler;
