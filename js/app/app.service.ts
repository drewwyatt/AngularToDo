/// <reference path="../lib/angular.d.ts" />

module app {
	export class ToDoService {
		constructor() {
			
		}
		
		public getMessage() : string {
			return 'This is from the service';
		}
	}
}