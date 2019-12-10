import validator from "validator";
import moment from "moment";
import _ from "lodash";

const emptyError = "Enter a value here.";
const GTZero = "Enter a positive value.";
const isInt = "Enter a value.";
const isTrueError = "Check this field.";
const isEarlierThanToday = "Date should be in the future.";
const isGreaterThan100 = "Should be less than 100.";

const cannotBeEmpty = fieldObj => {
  if (!validator.isEmpty(fieldObj.error)) {
    return fieldObj;
  }

  if (validator.isEmpty(fieldObj.value)) {
    fieldObj.error = emptyError;
  }
  return fieldObj;
};

const isInteger = fieldObj => {
  if (!validator.isEmpty(fieldObj.error)) {
    return fieldObj;
  }

  if (!validator.isInt(fieldObj.value)) {
    fieldObj.error = isInt;
  }
  return fieldObj;
};

const isTrue = fieldObj => {
  if (!validator.isEmpty(fieldObj.error)) {
    return fieldObj;
  }

  if (fieldObj.value != true) {
    fieldObj.error = isTrueError;
  }
  return fieldObj;
};

const haveToGreaterThanZero = fieldObj => {
  if (!validator.isEmpty(fieldObj.error)) {
    return fieldObj;
  }

  if (!(parseInt(fieldObj.value) > 0)) {
    fieldObj.error = GTZero;
  }
  return fieldObj;
};

const isLaterThanToday = fieldObj => {
  if (!validator.isEmpty(fieldObj.error)) {
    return fieldObj;
  }

  if (moment().diff(moment(fieldObj.value, "YYYY-M-D")) > 1) {
    fieldObj.error = isEarlierThanToday;
  }

  return fieldObj;
};

const isLessThanHundred = fieldObj => {
  if (!validator.isEmpty(fieldObj.error)) {
    return fieldObj;
  }

  if (parseInt(fieldObj.value) > 100) {
    fieldObj.error = isGreaterThan100;
  }

  return fieldObj;
};

const isFreeError = controls => {
  let isContainError = false;
  for (let key of Object.keys(controls)) {
    if (typeof controls[key] === "object" && controls[key].error != "") {
      return { controls, isContainError: true };
    }
  }
  return { controls, isContainError: isContainError };
};

export const validate = oldControls => {
  // added lodash clone deep to prevent errors from mutation - kmh
  let controls = _.cloneDeep(oldControls);
  for (let key of Object.keys(controls)) {
    if (typeof controls[key] === "object") {
      let rules = controls[key].validationRules;
      if (rules) {
        controls[key].error = "";
        for (let rule of rules) {
          switch (rule) {
            case "cannotBeEmpty":
              controls[key] = cannotBeEmpty(controls[key]);
              break;
            case "haveToGreaterThanZero":
              controls[key] = haveToGreaterThanZero(controls[key]);
              break;
            case "isInteger":
              controls[key] = isInteger(controls[key]);
              break;
            case "isTrue":
              controls[key] = isTrue(controls[key]);
              break;
            case "laterThanToday":
              controls[key] = isLaterThanToday(controls[key]);
              break;
            case "isLessThanHundred":
              controls[key] = isLessThanHundred(controls[key]);
              break;
            default:
              controls[key] = controls[key];
          }
        }
      }
    }
  }

  return (result = isFreeError(controls));
};
