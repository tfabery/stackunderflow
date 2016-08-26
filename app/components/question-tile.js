import Ember from 'ember';

export default Ember.Component.extend({
  numberOfAnswers: Ember.computed('question.answers', function() {
    return this.get('question.answers').content.length;
  })
});
