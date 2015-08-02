/// <reference path="../_all.ts" />
var app;
(function (app) {
    var ToDoController = (function () {
        function ToDoController(ToDoService) {
            this.myTestVar = ToDoService.getMessage();
        }
        ToDoController.$inject = ['ToDoService'];
        return ToDoController;
    })();
    app.ToDoController = ToDoController;
})(app || (app = {}));
/// <reference path="../lib/angular.d.ts" />
var app;
(function (app) {
    var ToDoService = (function () {
        function ToDoService() {
        }
        ToDoService.prototype.getMessage = function () {
            return 'This is from the service';
        };
        return ToDoService;
    })();
    app.ToDoService = ToDoService;
})(app || (app = {}));
/// <reference path="../_all.ts" />
/// <reference path="lib/angular.d.ts" />
/// <reference path="lib/jquery.d.ts" />
/// <reference path="todo/todo.controller.ts" />
/// <reference path="todo/todo.service.ts" />
/// <reference path="todo/todo.service.interface.ts" /> 
/// <reference path="_all" />
var app;
(function (app) {
    angular.module('todo', [])
        .controller('ToDoController', app.ToDoController)
        .service('ToDoService', app.ToDoService);
})(app || (app = {}));
