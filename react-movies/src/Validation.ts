import * as Yup from "yup";

// Määrittele funktio, joka palauttaa uuden Yup-objektin, jotta laajennus toimii.
function configureValidation(): typeof Yup {
  Yup.addMethod(Yup.string, "firstLetterUppercase", function () {
    return this.test("first-letter-uppercase",
      "Ensimmäisen kirjaimen tulee olla iso", function (value) {
        if (!value || value.length === 0) { // Handle undefined and empty string
          return true; // Allow empty or undefined values
        }
        const firstLetter = value.substring(0, 1);
        return firstLetter === firstLetter.toUpperCase();
      })
  });
  return Yup; // Palauta Yup-objekti
}


export default configureValidation;