import Ember from 'ember';

export default Ember.Component.extend({
  numberOfAnswers: Ember.computed('question.answers', function() {
    if (this.get('question.answers').content.length >= 3) {
      return "on Fire";
    }
  })
});
