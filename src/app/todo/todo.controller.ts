/// <reference path="../_all.ts" />
module app.todo {
	export class ToDoController {
		public myTestVar: string;
		public toDoItems: Array<IToDo>;
		
		static $inject = ['ToDoService'];
		
		constructor(ToDoService: IToDoService) {
			this.myTestVar = ToDoService.getMessage();
			this.toDoItems = [new ToDo('one'), new ToDo('two'), new ToDo('three'), new ToDo('four'), new ToDo('five')];
		}
	}
}