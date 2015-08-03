/// <reference path="../_all.ts" />
module app.todo {
	export interface IToDo {
		text: string;
		done: boolean;
		
		toggle(): void;
	}
}