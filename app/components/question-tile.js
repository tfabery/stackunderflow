import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service('favorite'),

  numberOfAnswers: Ember.computed('question.answers', function() {
    return this.get('question.answers').content.length;
  }),

  actions: {
    addToFavorite(question) {
      this.get('favorites').add(question);
    }
  }
});
