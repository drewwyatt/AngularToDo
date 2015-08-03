/// <reference path="../_all.ts" />
module app {
	export class ToDoController {
		public myTestVar: string;
		public toDoItems: Array<string>;
		
		static $inject = ['ToDoService'];
		
		constructor(ToDoService: IToDoService) {
			this.myTestVar = ToDoService.getMessage();
			this.toDoItems = ['one', 'two', 'three', 'four', 'five'];
		}
	}
}