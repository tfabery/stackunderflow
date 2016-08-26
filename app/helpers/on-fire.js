import Ember from 'ember';

export function onFire(params) {
  var question = params[0];
  if (params[0].get('answers').get('length') >= 3) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}

export default Ember.Helper.helper(onFire);
