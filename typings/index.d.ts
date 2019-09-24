import { FieldValidationFunctionSync } from '@lemoncode/fonk';

export namespace bic {
  export const validator: FieldValidationFunctionSync;
  export function setErrorMessage(message: string | string[]): void;
}
