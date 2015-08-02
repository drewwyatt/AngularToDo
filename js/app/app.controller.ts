/// <reference path="../_all.ts" />
module app {
	export class ToDoController {
		public myTestVar: string;
		
		static $inject = ['ToDoService'];
		
		constructor(ToDoService) {
			this.myTestVar = ToDoService.getMessage();
		}
	}
}