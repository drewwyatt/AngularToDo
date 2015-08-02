/// <reference path="../_all.ts" />
module app {
	export class ToDoController {
		public myTestVar: string;
		
		static $inject = ['ToDoService'];
		
		constructor(ToDoService: IToDoService) {
			this.myTestVar = ToDoService.getMessage();
		}
	}
}