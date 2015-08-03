/// <reference path="_all.ts" />
var app;
(function (app) {
    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/todo");
        $stateProvider
            .state('todo', {
            url: "/todo",
            templateUrl: "assets/html/todo.html"
        });
    }
    app.config = config;
    ;
})(app || (app = {}));
/// <reference path="../_all.ts" />
var app;
(function (app) {
    var todo;
    (function (todo) {
        var ToDoController = (function () {
            function ToDoController(ToDoService) {
                this.myTestVar = ToDoService.getMessage();
                this.toDoItems = ['one', 'two', 'three', 'four', 'five'];
            }
            ToDoController.$inject = ['ToDoService'];
            return ToDoController;
        })();
        todo.ToDoController = ToDoController;
    })(todo = app.todo || (app.todo = {}));
})(app || (app = {}));
/// <reference path="../_all.ts" />
var app;
(function (app) {
    var todo;
    (function (todo) {
        var ToDoItem = (function () {
            function ToDoItem() {
                this.template = '<div>Boom Boom Pow</div>';
                this.scope = {};
                // It's important to add `link` to the prototype or you will end up with state issues.
                // See http://blog.aaronholmes.net/writing-angularjs-directives-as-typescript-classes/#comment-2111298002 for more information.
                ToDoItem.prototype.link = function (scope, element, attrs) {
                    /*handle all your linking requirements here*/
                };
            }
            ToDoItem.factory = function () {
                var directive = function () {
                    return new ToDoItem();
                };
                directive['$inject'] = [];
                return directive();
            };
            return ToDoItem;
        })();
        todo.ToDoItem = ToDoItem;
    })(todo = app.todo || (app.todo = {}));
})(app || (app = {}));
/// <reference path="../lib/angular.d.ts" />
var app;
(function (app) {
    var todo;
    (function (todo) {
        var ToDoService = (function () {
            function ToDoService() {
            }
            ToDoService.prototype.getMessage = function () {
                return 'This is from the service';
            };
            return ToDoService;
        })();
        todo.ToDoService = ToDoService;
    })(todo = app.todo || (app.todo = {}));
})(app || (app = {}));
/// <reference path="../_all.ts" />
/// <reference path="lib/angular.d.ts" />
/// <reference path="lib/angular-ui-router.d.ts" />
/// <reference path="lib/jquery.d.ts" />
/// <reference path="app.config.ts" />
/// <reference path="todo/todo.controller.ts" />
/// <reference path="todo/todo.directive.ts" />
/// <reference path="todo/todo.service.ts" />
/// <reference path="todo/todo.service.interface.ts" /> 
/// <reference path="_all" />
var app;
(function (app) {
    angular.module('todo', ['ui.router'])
        .controller('ToDoController', app.todo.ToDoController)
        .directive('toDoItem', app.todo.ToDoItem.factory)
        .service('ToDoService', app.todo.ToDoService)
        .config(app.config);
})(app || (app = {}));
