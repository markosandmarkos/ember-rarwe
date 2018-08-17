import Controller from '@ember/controller';

export default Controller.extend({

  isEditing: false,

  actions: {

    edit() {
      this.toggleProperty('isEditing', true);
    },
    
    async save() {
      let band = this.model;
      await band.save();
      this.set('isEditing', false);
    }
  }
});
