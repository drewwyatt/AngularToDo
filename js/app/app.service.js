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
