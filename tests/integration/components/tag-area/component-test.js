import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('tag-area', 'Integration | Component | tag area', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{tag-area}}`);
  assert.equal(this.$('.tag-area').length, 1, 'Component includes a textarea with class tag-area');
});

test('template can set rows and cols', function(assert) {
  this.set('rowVal', 10);
  this.set('colVal', 50);
  this.render(hbs`{{tag-area rowCount=rowVal colCount=colVal}}`);
  assert.equal(this.$('.tag-area').attr('rows'), 10, 'Correct count of rows found on tag-area');
  assert.equal(this.$('.tag-area').attr('cols'), 50, 'Correct count of rows found on tag-area');

  this.set('rowVal', 5);
  this.set('colVal', 20);
  assert.equal(this.$('.tag-area').attr('rows'), 5, 'Correct count of rows found on tag-area');
  assert.equal(this.$('.tag-area').attr('cols'), 20, 'Correct count of rows found on tag-area');
});

test('it displays bound text', function(assert) {
  this.set('chars', "abc 123");
  this.render(hbs`{{tag-area screenText=chars}}`);
  assert.equal(this.$('.tag-area').val(), "abc 123", 'Bound text is displayed');

  this.set('chars', "xyz");
  assert.equal(this.$('.tag-area').val(), "xyz", 'Bound text is updated');
});

test('it knows the cursor position', function(assert) {

  assert.expect(1);
  let done = assert.async();

  this.set('chars', "abc 123");
  this.render(hbs`{{tag-area screenText=chars}}`);

  $('.tag-area').get(0).setSelectionRange(0, 0);
  let e = $.Event("keyup", { keyCode: 39 });
  $('.tag-area').trigger(e);

  Ember.run.later(() => {
    assert.equal(this.$('.cursor-index').text(), 1, 'Cursor starts at end of text');
    done();
  }, 250);
});
