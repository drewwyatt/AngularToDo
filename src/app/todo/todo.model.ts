/// <reference path="../_all.ts" />
module app.todo {
	export class ToDo {
		public id: number;
		public text: string;
		public done: boolean = false;
		
		constructor(num: number, txt:string) {
			this.id = num;
			this.text = txt;
		}
		
		public toggle () {
			this.done = !this.done;
		}
	}
}