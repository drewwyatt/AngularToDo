/// <reference path="../_all.ts" />
module app.todo {
	export interface IToDoList {
		create (): Array<ToDo>;
		addItem (text:string): IToDo;
		removeItem (id: number, list: Array<IToDo>): Array<IToDo>;
	}
}