import Ember from 'ember';

function tagArea() {
	return Ember.$('.tag-area');
}

function selStart() {
	return tagArea().prop('selectionStart');
}

export default Ember.Component.extend({
	rowCount: 15,
	colCount: 80,
	screenText: '',
	cursorIndex: -1,
	actions: {
		keyUp() {
			this.set('cursorIndex', selStart());
		},
		gotFocus() {
			this.set('cursorIndex', selStart());
		}
	}
});
