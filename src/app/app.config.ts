/// <reference path="_all.ts" />
module app {
	export function config($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/todo");
		$stateProvider
			.state('todo', {
				url: "/todo",
				templateUrl: "assets/html/todo.html"
			});
	};
}