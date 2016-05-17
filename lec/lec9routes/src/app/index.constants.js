/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('template')
    .constant('STATES',{
	KHomeState:'home',
	KContactState:'contact',
	KStoreState:'store',

	//for store ui-views
	KShoesState: 'store.shoes',
	KPantsState: 'store.pants',
	KShirtState: 'store.shirts',
});
})();
