/// <reference path="../_all.ts" />
module app.todo {
	export class ToDo {
		public text: string;
		public done: boolean = false;
		
		constructor(txt:string) {
			this.text = txt;
		}
		
		public toggle () {
			this.done = !this.done;
		}
	}
}