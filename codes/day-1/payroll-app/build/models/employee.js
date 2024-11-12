define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Employee = void 0;
    //models
    var Employee = /** @class */ (function () {
        function Employee(id, name, basic, da, hra) {
            this.totalSalary = 0;
            this.basicPay = basic;
            this.daPay = da;
            this.hraPay = hra;
            this.id = id;
            this.name = name;
        }
        Employee.prototype.calculateSalary = function () {
            this.totalSalary = this.basicPay + this.daPay + this.hraPay;
        };
        return Employee;
    }());
    exports.Employee = Employee;
});
