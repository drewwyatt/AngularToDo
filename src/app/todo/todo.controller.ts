/// <reference path="../_all.ts" />
module app.todo {
	export class ToDoController {
		public newToDoText: string;
		public toDoItems: Array<IToDo>;
		
		private _ToDoList: IToDoList;
		
		static $inject = ['ToDoList'];
		
		constructor(ToDoList: IToDoList) {
			this.newToDoText = '';
			this.toDoItems = ToDoList.create();
			this._ToDoList = ToDoList;
		}
		
		public addNewToDo():void {
			if(this.newToDoText.length > 0) {
				this.toDoItems.push(this._ToDoList.addItem(this.newToDoText));
				this.newToDoText = '';
			}
		}
	}
}