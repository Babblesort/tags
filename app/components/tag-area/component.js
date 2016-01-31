import Ember from 'ember';

const AtKeycode = 50;

function isSearchTrigger(text, cursorIndex) {
	return cursorIndex === 1 || text.slice(cursorIndex - 2, cursorIndex - 1) === ' ';
}

export default Ember.Component.extend({
	rowCount: 15,
	colCount: 80,
	screenText: '',
	searchAtive: false,
	$tagArea: null,
	tagAreaEl: Ember.computed('$tagArea', function() {
		return this.get('$tagArea').get(0);
	}),
	didInsertElement() {
		this.set('$tagArea', Ember.$('.tag-area'));
	},
	actions: {
		keyUp(fullText, e) {
			if(e.shiftKey && e.keyCode === AtKeycode) {
				let cursorIndex = this.get('tagAreaEl').selectionStart;

				if(isSearchTrigger(fullText, cursorIndex)) {
					this.set('searchActive', true);
				}
			}
		},
		searchEnd() {
			this.set('searchActive', false);
		}
	}
});
