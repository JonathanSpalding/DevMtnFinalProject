var app = angular.module('frolfZone');

//Directive that returns an element which adds a new game template
app.directive("newGameButton", function(){
	return {
		restrict: "E",
		template: "<div startgame><button>Click to add new game</button></div>"
	}
});

//Directive for adding a new game template
app.directive("startgame", function($compile){
for (var i = 0; i < 1; i++){
		return function(scope, element, attrs){
			element.bind("click", function(){
				angular.element(document.getElementById('space-for-new-game')).append($compile("<ul><input class='location' placeholder='location'></input></ul>")(scope));
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
			angular.element(document.getElementById('space-for-players')).append($compile("<ul><input placeholder='Player #"+scope.count+"'></input></ul>")(scope));
		});
	};
});

// element(by.model('new-game-button')).click();
