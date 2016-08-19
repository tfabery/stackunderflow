import Ember from 'ember';

export default Ember.Component.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  updateQuestion: false,
  actions: {
    questionFormShow() {
      this.set('updateQuestion', true);
    },
    update(question, params) {
      var params = {
        content: this.get('content'),
        questionAuthor: this.get('questionAuthor'),
        category: this.get('category')
      };
      this.set('updateQuestion', false);
      question.sendAction('update', question, params);
    }
  }
});
