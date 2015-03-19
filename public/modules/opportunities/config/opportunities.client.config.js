'use strict';

// Configuring the Articles module
angular.module('opportunities').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'As a Buyer', 'opportunities', 'dropdown', '/opportunities(/create)?');
		Menus.addSubMenuItem('topbar', 'opportunities', 'Opportunities', 'opportunities');
		Menus.addSubMenuItem('topbar', 'opportunities', 'New Opportunity', 'opportunities/create');

		Menus.addMenuItem('topbar', 'As a Vendor', 'vendorView', 'dropdown', '/opportunities(/create)?');
		Menus.addSubMenuItem('topbar', 'vendorView', 'Published Opportunities', 'vendor-view');
	
	}
]);