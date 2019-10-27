# fonk-bic-validator

[![CircleCI](https://badgen.net/github/status/Lemoncode/fonk-bic-validator/master?icon=circleci&label=circleci)](https://circleci.com/gh/Lemoncode/fonk-bic-validator/tree/master)
[![NPM Version](https://badgen.net/npm/v/@lemoncode/fonk-bic-validator?icon=npm&label=npm)](https://www.npmjs.com/package/@lemoncode/fonk-bic-validator)
[![bundle-size](https://badgen.net/bundlephobia/min/@lemoncode/fonk-bic-validator)](https://bundlephobia.com/result?p=@lemoncode/fonk-bic-validator)

This is a [fonk](https://github.com/Lemoncode/fonk) microlibrary that brings validation capabilities to:

- Validate if a field form is a valid BIC (Bank International Code a.k.a SWIFT) code.

ISO 9362 defines a standard format of Business Identifier Codes (also known as SWIFT-BIC, BIC, SWIFT ID or SWIFT code) approved by the International Organization for Standardization (ISO). It is a unique identification code for both financial and non-financial institutions. The acronym SWIFT stands for the Society for Worldwide Interbank Financial Telecommunication. The ISO has designated SWIFT as the BIC registration authority. When assigned to a non-financial institution, the code may also be known as a Business Entity Identifier or BEI. These codes are used when transferring money between banks, particularly for international wire transfers, and also for the exchange of other messages between banks. The codes can sometimes be found on account statements. [Read More](https://es.wikipedia.org/wiki/ISO_9362)

One important [source](https://www.theswiftcodes.com/) give us, their definition:
Swift Code is a standard format of Bank Identifier Codes (BIC) and it is unique identification code for a particular bank. These codes are used when transferring money between banks, particularly for international wire transfers. Banks also used the codes for exchanging other messages between them.
The Swift code consists of 8 or 11 characters. When 8-digits code is given, it refers to the primary office. The code formatted as below;

AAAA BB CC DDD

First 4 characters - bank code (only letters)
Next 2 characters - ISO 3166-1 alpha-2 country code (only letters)
Next 2 characters - location code (letters and digits) (passive participant will have "1" in the second character)
Last 3 characters - branch code, optional ('XXX' for primary office) (letters and digits)


* How to add it to an existing form validation schema:

We have the following form model:

```
const myFormValues = {
  product: 'shoes',
  price: 20,
}
```

We can add a bic validation to the myFormValues

```javascript
import { bic } from '@lemoncode/fonk-bic-validator';

const validationSchema = {
  field: {
    price: [bic.validator],
  },
};
```

You can customize the error message displayed in two ways:

- Globally, replace the default error message in all validationSchemas (e.g. porting to spanish):

```javascript
import { bic } from '@lemoncode/fonk-bic-validator';

bic.setErrorMessage('Campo BIC no válido');
```

- Locally just override the error message for this validationSchema:

```javascript
import { bic } from '@lemoncode/fonk-bic-validator';

const validationSchema = {
  field: {
    price: [
      {
        validator: bic.validator,
        message: 'Error message only updated for the validation schema',
      },
    ],
  },
};
```

Please, refer to [fonk](https://github.com/Lemoncode/fonk) to know more.

## License

[MIT](./LICENSE)

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
