/// <reference path="../lib/angular.d.ts" />

module app.todo {
	export class ToDoList {
		private _lastId: number;
		
		constructor() {
			this._lastId = 0;
		}
		
		public create() : Array<IToDo> {
			return [];
		}
		
		public addItem (text:string) : IToDo {
			this._lastId++;
			return new ToDo(this._lastId, text);
		}
		
		public removeItem (id: number, list: Array<IToDo>) : Array<IToDo> {
			list.forEach(function(item: IToDo, index: number) {
				if(item.id === id) {
					list.splice(index, 1);
				}
			});
			
			return list;
		}
	}
}