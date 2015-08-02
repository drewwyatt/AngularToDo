/// <reference path="_all" />

module app {
	angular.module('todo', [])
		.controller('ToDoController', ToDoController)
		.service('ToDoService', ToDoService);
}