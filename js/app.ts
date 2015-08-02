/// <reference path="_all" />

module app {
	class ToDoController {
		public myTestVar: string;
		
		constructor() {
			this.myTestVar = 'Awesome!';
		}
	}
	
	angular.module('todo', [])
		.controller('ToDoController', ToDoController);
}