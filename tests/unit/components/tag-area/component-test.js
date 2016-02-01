import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('tag-area', 'Unit | Component | tag area', {
  unit: true
});

test('it maintains active search state', function(assert) {
  let component = this.subject();
  this.render();
  assert.notOk(component.get('searchActive'), 'Defaults to no active search');
});
