var app = angular.module('frolfZone');

//Directive that returns an element which adds buttons on click which show an alert on click
app.directive("newGameButton", function(){
	return {
		restrict: "E",
		template: "<button addbuttons>Click to add new game</button>"
	}
});

//Directive for adding a new game template
app.directive("addbuttons", function($compile){
	return function(scope, element, attrs){
		element.bind("click", function(){
			scope.count++;
			angular.element(document.getElementById('space-for-new-game')).append($compile("<div><input class='location' placeholder='location'></input><button class='addPlayer' data-alert="+scope.count+">Add Player #"+scope.count+"</button><input class='player' placeholder='Player"+scope.count+"'></input></div>")(scope));
		});
	};
});



//Directive for showing an alert on click (this will be deleted soon)
app.directive("alert", function(){
	return function(scope, element, attrs){
		element.bind("click", function(){
			console.log(attrs);

 <!-- angular.element(document.getElementById('space-for-new-game')).append($compile("<input></input>")(scope)); -->

			alert("This is alert #"+attrs.alert);
		});
	};
});

app.directive("addPlayerButton", function() {
  return{
    restrict: "E",
    template: "<button>add Player #"+scope.count+"</button>"
  }
});
