/// <reference path="../_all.ts" />
module app.todo {
        export class ToDoItem implements ng.IDirective {
                public templateUrl = 'assets/html/todo.directive.template.html';
                public scope = { item: '=' };
                public link: (scope: IToDoItemDirectiveScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void; 

                constructor($rootScope: ng.IScope) {
                        // It's important to add `link` to the prototype or you will end up with state issues.
                        // See http://blog.aaronholmes.net/writing-angularjs-directives-as-typescript-classes/#comment-2111298002 for more information.
                        ToDoItem.prototype.link = (scope: IToDoItemDirectiveScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
                                var $deleteButton = $(element).children('.todo-item').children('.delete-button');
                                $deleteButton.click(function() {
                                        $rootScope.$broadcast('delete', scope.item.id);
                                });
                        };
                }

                public static factory() {
                        var directive = ($rootScope:ng.IScope) => {
                                return new ToDoItem($rootScope);
                        };

                        directive.$inject = ['$rootScope'];

                        return directive;
                }
        }
}