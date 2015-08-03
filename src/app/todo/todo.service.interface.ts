/// <reference path="../_all.ts" />
module app.todo {
	export interface IToDoList {
		create (): Array<ToDo>;
		addItem (text:string): IToDo;
	}
}