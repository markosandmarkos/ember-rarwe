import Controller from '@ember/controller';
import {computed} from '@ember/object';

export default Controller.extend({

  showErrors: computed('_showErrors', {
    get() {
      return this._showErrors || {email: false, password: false};
    },
    set(key, value) {
      this.set('_showErrors', value);
      return this._showErrors;
    }
  }),

  actions: {
    async signUp(event) {
      event.preventDefault();
      let {email, password} = this;
      let user = this.store.createRecord('user', {email, password});
      await user.save();
      await this.model.save();
      await this.transitionToRoute('login');
    }
  }
});
