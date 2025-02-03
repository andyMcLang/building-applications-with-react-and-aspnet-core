import * as Yup from "yup";

// Määrittele tyyppi laajennukselle
declare module "yup" {
  interface StringSchema {
    firstLetterUppercase(): this;
  }
}

function configureValidation(): typeof Yup {
  Yup.addMethod(Yup.string, "firstLetterUppercase", function () {
    return this.test("first-letter-uppercase",
      "Ensimmäisen kirjaimen tulee olla iso", function (value) {
        if (!value || value.length === 0) {
          return true;
        }
        const firstLetter = value.substring(0, 1);
        return firstLetter === firstLetter.toUpperCase();
      })
  });
  return Yup;
}

export default configureValidation;