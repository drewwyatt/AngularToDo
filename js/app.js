/// <reference path="_all" />
var app;
(function (app) {
    var ToDoController = (function () {
        function ToDoController() {
            this.myTestVar = 'Awesome!';
        }
        return ToDoController;
    })();
    angular.module('todo', [])
        .controller('ToDoController', ToDoController);
})(app || (app = {}));
