'use strict';

// Opportunities controller
angular.module('opportunities').controller('OpportunitiesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Opportunities',  
	function($scope, $stateParams, $location, Authentication, Opportunities) {
		$scope.authentication = Authentication;

		// Create new Opportunity
		$scope.create = function(newStatus) {
	        console.log('create called');
		
			// Create new Opportunity object
			var opportunity = new Opportunities ({
				title: this.title
			});
			if(newStatus) {
           	 opportunity.status=newStatus;
           	}				

			// Redirect after save
			opportunity.$save(function(response) {
				$location.path('opportunities/' + response._id);

				// Clear form fields
				$scope.title = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.cancel = function() {
				$location.path('/opportunities');
		};		

		// Remove existing Opportunity
		$scope.remove = function(opportunity) {
			if ( opportunity ) { 
				opportunity.$remove();

				for (var i in $scope.opportunities) {
					if ($scope.opportunities [i] === opportunity) {
						$scope.opportunities.splice(i, 1);
					}
				}
			} else {
				$scope.opportunity.$remove(function() {
					$location.path('opportunities');
				});
			}
		};

		// Update existing Opportunity
		$scope.update = function(newStatus) {
	        console.log('Update called');
			var opportunity = $scope.opportunity;
			if(newStatus) {
           	 opportunity.status=newStatus;
           	}
			opportunity.$update(function() {
				$location.path('opportunities/' + opportunity._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Opportunities
		$scope.find = function() {
			$scope.opportunities = Opportunities.query();
		};

		// Find existing Opportunity
		$scope.findOne = function() {
			$scope.opportunity = Opportunities.get({ 
				opportunityId: $stateParams.opportunityId
			});
		};

		// Find existing Published Opportunities
		$scope.vendorList = function() {
			$scope.opportunities = Opportunities.published();
		};			
	
	}
]);