import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    save() {
      var params = {
        content: this.get('content'),
        answerAuthor: this.get('answerAuthor'),
        question: this.get('question')
      };
      this.set('addNewAnswer', false);
      this.sendAction('save', params);
    }
  }
});
