import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestion: false,
  actions: {
    questionFormShow() {
      this.set('updateQuestion', true);
    },
    update(question) {
      var params = {
        content: this.get('content'),
        questionAuthor: this.get('questionAuthor'),
        category: this.get('category')
      };
      this.set('updateQuestion', false);
      this.sendAction('update', question, params);
    }
  }
});
