/// <reference path="_all" />

module app {
	angular.module('todo', ['ui.router'])
		.controller('ToDoController', todo.ToDoController)
		.directive('toDoItem', todo.ToDoItem.factory())
		.service('ToDoService', todo.ToDoService)
		.config(config);
}