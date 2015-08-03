/// <reference path="_all.ts" />
module app {
	export function config($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
		$urlRouterProvider.otherwise("/todo");
		$stateProvider
			.state('todo', {
				url: "/todo",
				templateUrl: "assets/html/todo.html"
			});
	};
}