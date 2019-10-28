import {
  FieldValidationFunctionSync,
  parseMessageWithCustomArgs,
  ValidationResult,
} from '@lemoncode/fonk';
import {
  defaultMessage,
  isDefined,
  checkValidBicCodeFormat,
} from './validators.business';

export const VALIDATOR_TYPE = 'BIC_VALIDATOR';

export const validator: FieldValidationFunctionSync = (
  fieldValidatorArgs
): ValidationResult => {
  const { value, message = defaultMessage, customArgs } = fieldValidatorArgs;

  const succeeded = !isDefined(value) || checkValidBicCodeFormat(value);

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
