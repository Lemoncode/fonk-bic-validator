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

  const hasCorrectLength = (value: string): boolean => {
    return value.length === 8 || value.length === 11;
  };

  const containsLettersOnly = (value: string): boolean => {
    const letters = /^[A-Za-z]+$/;
    if (value.length > 8) {
      value = value.substring(0, 8);
    }
    return value.match(letters) ? true : false;
  };

  const succeeded =
    !isDefined(value) ||
    (hasCorrectLength(value) && containsLettersOnly(value));

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
