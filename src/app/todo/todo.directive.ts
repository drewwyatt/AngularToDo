/// <reference path="../_all.ts" />
module app.todo {
        export class ToDoItem implements ng.IDirective {
                public templateUrl = 'assets/html/todo.directive.template.html';
                public scope = { item: '=' };
                public link: (scope: IToDoItemDirectiveScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void; 

                constructor(/*list of dependencies*/) {
                        // It's important to add `link` to the prototype or you will end up with state issues.
                        // See http://blog.aaronholmes.net/writing-angularjs-directives-as-typescript-classes/#comment-2111298002 for more information.
                        ToDoItem.prototype.link = (scope: IToDoItemDirectiveScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {

                        };
                }

                public static factory() {
                        var directive = (/*list of dependencies*/) => {
                                return new ToDoItem(/*list of dependencies*/);
                        };

                        directive.$inject = [];

                        return directive;
                }
        }
}