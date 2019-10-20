import {
  FieldValidationFunctionSync,
  parseMessageWithCustomArgs,
  ValidationResult,
} from '@lemoncode/fonk';

export const VALIDATOR_TYPE = 'BIC_VALIDATOR';

let defaultMessage = 'This is not in BIC correct format';
export const setErrorMessage = message => (defaultMessage = message);

const isDefined = (value: string) =>
  value !== void 0 && value !== null && value !== '';

export const validator: FieldValidationFunctionSync = (
  fieldValidatorArgs
): ValidationResult => {
  const { value, message = defaultMessage, customArgs } = fieldValidatorArgs;

  const matchAlfhanumericExpresion = (value: string): boolean => {
    const letterAndNumbers = /^[0-9a-zA-Z]+$/;
    return value.match(letterAndNumbers) ? true : false;
  };
  const hasCorrectLength = (value: string): boolean => {
    return value.length === 8 || value.length === 11;
  };
  const validFormatBusinessPartyIdentifier = (
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
  const validFormatCountryCode = (value: string): boolean => {
    const letters = /^[A-Za-z]+$/;
    value = value.substring(4, 6);
    return value.match(letters) ? true : false;
  };
  const validateOptionalPart = (value: string): boolean => {
    if (value.length > 8) {
      value = value.substring(8, 11);
      return matchAlfhanumericExpresion(value);
    } else {
      return true;
    }
  };

  const succeeded =
    !isDefined(value) ||
    (hasCorrectLength(value) &&
      validFormatBusinessPartyIdentifier(value, true) &&
      validFormatCountryCode(value) &&
      validFormatBusinessPartyIdentifier(value, false) &&
      validateOptionalPart(value));

  return {
    succeeded,
    message: succeeded
      ? ''
      : // TODO: Use if it has custom args
        parseMessageWithCustomArgs(
          (message as string) || defaultMessage,
          customArgs
        ),
    type: VALIDATOR_TYPE,
  };
};
