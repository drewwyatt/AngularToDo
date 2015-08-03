/// <reference path="_all" />

module app {
	angular.module('todo', [])
		.controller('ToDoController', ToDoController)
		.directive('toDoItem', ToDoItem.factory)
		.service('ToDoService', ToDoService);
}