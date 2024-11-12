var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
define(["require", "exports", "../data/repository"], function (require, exports, repository_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EmployeeManager = void 0;
    //implementation
    var EmployeeManager = /** @class */ (function () {
        function EmployeeManager() {
        }
        EmployeeManager.prototype.add = function (obj) {
            try {
                var found = repository_1.employees.find(function (e) { return e.id === obj.id; });
                if (found)
                    throw new Error('employee with same id already exists..');
                else {
                    repository_1.employees.push(obj);
                    return true;
                }
            }
            catch (error) {
                throw error;
            }
        };
        EmployeeManager.prototype.getAll = function () {
            return __spreadArray([], repository_1.employees, true);
        };
        EmployeeManager.prototype.sort = function (choice) {
            switch (choice) {
                case 1:
                    repository_1.employees.sort(function (e1, e2) { return e1.id - e2.id; });
                    break;
                case 2:
                    repository_1.employees.sort(function (e1, e2) { return e1.name.toLocaleLowerCase().localeCompare(e2.name.toLocaleLowerCase()); });
                    break;
                case 3:
                    repository_1.employees.sort(function (e1, e2) { return e1.totalSalary - e2.totalSalary; });
                    break;
                default:
                    repository_1.employees.sort(function (e1, e2) { return e1.id - e2.id; });
                    break;
            }
            return __spreadArray([], repository_1.employees, true);
        };
        return EmployeeManager;
    }());
    exports.EmployeeManager = EmployeeManager;
});
