import { validator, VALIDATOR_TYPE } from './validator';
import { setErrorMessage } from './validators.business';

describe('fonk-bic-validator specs', () => {
  it('should return succeeded validation when it feeds value equals undefined', () => {
    // Arrange
    const value = void 0;

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when it feeds value equals null', () => {
    // Arrange
    const value = null;

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when it feeds value equals empty string', () => {
    // Arrange
    const value = '';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should overwrite default message when it feeds value and message', () => {
    // Arrange
    const value = 'test';
    const message = 'other message';

    // Act
    const result = validator({ value, message });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'other message',
      type: VALIDATOR_TYPE,
    });
  });

  it('should overwrite default message when it feeds value and calls to setErrorMessage', () => {
    // Arrange
    const value = 'test';

    setErrorMessage('other message');

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'other message',
      type: VALIDATOR_TYPE,
    });
  });
  it('should succeeded  when it has 11 length value', () => {
    // Arrange
    const value = 'BBVAESMM000';

    setErrorMessage('');

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });
  it('should succeeded  when it has 8 length value', () => {
    // Arrange
    const value = 'BBVAESMM';

    setErrorMessage('');

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });
  it('should failed  when it has incorrect length value', () => {
    // Arrange
    const value = 'BBVAESM';
    const value1 = 'BBVAESM0000000';

    setErrorMessage('Incorrect length');

    // Act
    const result = validator({ value });
    const result1 = validator({ value: value1 });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Incorrect length',
      type: VALIDATOR_TYPE,
    });
    expect(result1).toEqual({
      succeeded: false,
      message: 'Incorrect length',
      type: VALIDATOR_TYPE,
    });
  });
  it('should failed  when it has incorrect  value', () => {
    // Arrange
    const value = 'BBVA5ESM';
    const value1 = 'BBVAESM0000000';
    const value2 = '12345678';

    setErrorMessage('Incorrect length, only can contains letters');

    // Act
    const result = validator({ value });
    const result1 = validator({ value: value1 });
    const result2 = validator({ value: value2 });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Incorrect length, only can contains letters',
      type: VALIDATOR_TYPE,
    });
    expect(result1).toEqual({
      succeeded: false,
      message: 'Incorrect length, only can contains letters',
      type: VALIDATOR_TYPE,
    });
    expect(result2).toEqual({
      succeeded: false,
      message: 'Incorrect length, only can contains letters',
      type: VALIDATOR_TYPE,
    });
  });
});
