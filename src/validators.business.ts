export let defaultMessage = 'BIC code entered is invalid';

export const setErrorMessage = message => (defaultMessage = message);

export const isDefined = (value: string) =>
  value !== void 0 && value !== null && value !== '';

export const matchAlfhanumericExpresion = (value: string): boolean => {
  const letterAndNumbers = /^[0-9a-zA-Z]+$/;
  return value.match(letterAndNumbers) ? true : false;
};

export const hasCorrectLength = (value: string): boolean => {
  return value.length === 8 || value.length === 11;
};

export const validFormatBusinessPartyIdentifier = (
  value: string,
  prefix: boolean
): boolean => {
  if (prefix) {
    value = value.substring(0, 4);
  } else {
    value = value.substring(6, 8);
  }
  return matchAlfhanumericExpresion(value);
};

export const validFormatCountryCode = (value: string): boolean => {
  const letters = /^[A-Za-z]+$/;
  value = value.substring(4, 6);
  return value.match(letters) ? true : false;
};

export const validateOptionalPart = (value: string): boolean => {
  if (value.length > 8) {
    value = value.substring(8, 11);
    return matchAlfhanumericExpresion(value);
  } else {
    return true;
  }
};
