export let defaultMessage = 'BIC code entered is invalid';

export const setErrorMessage = message => (defaultMessage = message);

export const isDefined = (value: string) =>
  value !== void 0 && value !== null && value !== '';

export const checkValidBicCodeFormat = (value: string): boolean => {
  const letterAndNumbers = '/^[a-z]{6}[0-9a-z]{2}([0-9a-z]{3})?z/i';
  return value.match(letterAndNumbers) ? true : false;
};
