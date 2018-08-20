import DS from 'ember-data';
import {buildValidations} from 'ember-cp-validations';
import emailFieldValidation from 'rarwe/validations/email-field';
import passwordFieldValidation from 'rarwe/validations/password-field';

const Validations = buildValidations({
// I removed the validations that are now defined in their own file
  email: emailFieldValidation,
  password: passwordFieldValidation
});

const {Model, attr} = DS;
export default Model.extend(Validations, {
  email: attr('string'),
  password: attr('string'),
});
