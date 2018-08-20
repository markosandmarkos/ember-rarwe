import BaseValidator from 'ember-cp-validations/validators/base';

const Description = BaseValidator.extend({
  validate(value) {
    let words = value.split(/\s+/);
    let currentYear = new Date().getFullYear();
    let yearOfFormation = words.find((word) => {
      if (word.match(/\b\d{4}\b/)) {
        let year = parseInt(word, 10);
        return year > 1900 && year <= currentYear;
      }
    });

    return yearOfFormation ? true : "The year of formation must be included in the description";
  }
});

export default Description;
