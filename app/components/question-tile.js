import Ember from 'ember';

export default Ember.Component.extend({
  fire: Ember.computed('question.answers', function() {
    if (this.get('question.answers').content.length >= 3) {
      return '<span class="glyphicon glyphicon-fire"></span>';
    }
  })
});
