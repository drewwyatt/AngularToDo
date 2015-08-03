/// <reference path="../_all.ts" />
module app.todo {
	export class ToDoController {
		public newToDoText: string;
		public toDoItems: Array<IToDo>;
		
		private _ToDoList: IToDoList;
		
		static $inject = ['$scope', 'ToDoList'];
		
		constructor($scope: ng.IScope, ToDoList: IToDoList) {
			this.newToDoText = '';
			this.toDoItems = ToDoList.create();
			this._ToDoList = ToDoList;
			var self = this;
			
			$scope.$on('delete', function(event, id) {
				if(id !== undefined && id > 0) {
					$scope.$apply(function() {
						self.toDoItems = self._ToDoList.removeItem(id, self.toDoItems);
					});
				}
			});
		}
		
		public addNewToDo():void {
			if(this.newToDoText.length > 0) {
				this.toDoItems.push(this._ToDoList.addItem(this.newToDoText));
				this.newToDoText = '';
			}
		}
	}
}