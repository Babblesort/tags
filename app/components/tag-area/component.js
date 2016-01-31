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
		this.set('$pillArea', Ember.$('.pill-area'));
		Ember.$('.pill-area').css('top', this.get('$tagArea').css('top'));
		Ember.$('.pill-area').css('left', this.get('$tagArea').css('left'));
		Ember.$('.pill-area').css('height', this.get('$tagArea').css('height'));
		Ember.$('.pill-area').css('width', this.get('$tagArea').css('width'));
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
