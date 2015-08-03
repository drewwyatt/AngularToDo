/// <reference path="_all" />

module app {
	angular.module('todo', ['ui.router'])
		.controller('ToDoController', ToDoController)
		.directive('toDoItem', ToDoItem.factory)
		.service('ToDoService', ToDoService)
		.config(config);
}