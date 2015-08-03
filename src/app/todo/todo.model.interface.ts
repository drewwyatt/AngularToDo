/// <reference path="../_all.ts" />
module app.todo {
	export interface IToDo {
		id: number;
		text: string;
		done: boolean;
		
		toggle(): void;
	}
}