import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    save() {
      var params = {
        content: this.get('content'),
        questionAuthor: this.get('questionAuthor'),
        category: this.get('category')
      };
      this.set('addNewQuestion', false);
      this.sendAction('save', params);
    }
  }
});
