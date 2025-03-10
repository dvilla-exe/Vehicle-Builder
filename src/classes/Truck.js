"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
var Vehicle_js_1 = require("./Vehicle.js");
var Wheel_js_1 = require("./Wheel.js");
// The Truck class extends Vehicle and implements AbleToTow
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    // Constructor for the Truck class
    function Truck(vin, color, make, model, year, weight, topSpeed, wheels, // Default empty array for wheels if not provided
    towingCapacity) {
        if (wheels === void 0) { wheels = []; }
        var _this = _super.call(this) || this;
        // Ensure there are 4 wheels, default to 4 new wheels if not
        _this.wheels = wheels.length === 4 ? wheels : [
            new Wheel_js_1.default(18, "Default"),
            new Wheel_js_1.default(18, "Default"),
            new Wheel_js_1.default(18, "Default"),
            new Wheel_js_1.default(18, "Default")
        ];
        // Set towing capacity
        _this.towingCapacity = towingCapacity;
        return _this;
    }
    // Implement the tow method from the AbleToTow interface
    Truck.prototype.tow = function (vehicle) {
        // Get the make and model of the vehicle
        var vehicleMakeModel = "".concat(vehicle.make, " ").concat(vehicle.model);
        // Check if the vehicle's weight is within the towing capacity
        if (vehicle.weight <= this.towingCapacity) {
            console.log("".concat(this.make, " ").concat(this.model, " is towing ").concat(vehicleMakeModel));
        }
        else {
            console.log("".concat(vehicleMakeModel, " is too heavy to be towed by ").concat(this.make, " ").concat(this.model));
        }
    };
    // Override the printDetails method from the Vehicle class
    Truck.prototype.printDetails = function () {
        _super.prototype.printDetails.call(this); // Call parent method to print general details
        console.log("Towing Capacity: ".concat(this.towingCapacity, " kg"));
        console.log("Wheels: ".concat(this.wheels
            .map(function (wheel) { return "".concat(wheel.getTireBrand, " (").concat(wheel.getDiameter, " inch)"); })
            .join(", ")));
    };
    return Truck;
}(Vehicle_js_1.default));
// Export the Truck class
exports.default = Truck;
