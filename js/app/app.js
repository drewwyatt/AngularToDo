/// <reference path="../_all" />
var app;
(function (app) {
    angular.module('todo', [])
        .controller('ToDoController', app.ToDoController)
        .service('ToDoService', app.ToDoService);
})(app || (app = {}));
