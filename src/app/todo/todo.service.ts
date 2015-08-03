/// <reference path="../lib/angular.d.ts" />

module app.todo {
	export class ToDoList {
		constructor() {
		}
		
		public create() : Array<IToDo> {
			return [];
		}
		
		public addItem (text:string) : IToDo {
			return new ToDo(text);
		}
	}
}