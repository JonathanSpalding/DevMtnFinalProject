var app = angular.module('frolfZone');

//Directive that returns an element which adds a new game template
app.directive("newGameButton", function(){
	return {
		restrict: "E",
		template: "<button startgame>Click to add new game</button>"
	}
});

//Directive for adding a new game template
app.directive("startgame", function($compile){
for (var i = 0; i < 1; i++){
		return function(scope, element, attrs){
			element.bind("click", function(){
				scope.count++;
				angular.element(document.getElementById('space-for-new-game')).append($compile("<div><input class='location' placeholder='location'></input></div>")(scope));
			});

	};
}
});

//Directive that returns an element which adds input for a new player
app.directive("addPlayerButton", function() {
  return{
    restrict: "E",
    template: "<button newplayer>Add Player</button>"
  }
});

//directive for adding new players
app.directive("newplayer", function($compile){
	return function(scope, element, attrs){
		element.bind("click", function() {
			scope.count++;
			angular.element(document.getElementById('space-for-new-game')).append($compile("<input placeholder='Player #"+scope.count+"'></input>")(scope));
		});
	};
});

// element(by.model('new-game-button')).click();
