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
