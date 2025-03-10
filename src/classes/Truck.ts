// Import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// The Truck class extends Vehicle and implements AbleToTow
class Truck extends Vehicle implements AbleToTow {
  vin!: string;
  color!: string;
  make!: string;
  model!: string;
  year!: number;
  weight!: number;
  topSpeed!: number;
  wheels: Wheel[];
  towingCapacity: number;

  // Constructor for the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[] = [],  // Default empty array for wheels if not provided
    towingCapacity: number
  ) {
    super();

    // Ensure there are 4 wheels, default to 4 new wheels if not
    this.wheels = wheels.length === 4 ? wheels : [
      new Wheel(18, "Default"),
      new Wheel(18, "Default"),
      new Wheel(18, "Default"),
      new Wheel(18, "Default")
    ];

    // Set towing capacity
    this.towingCapacity = towingCapacity;
  }

  // Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // Get the make and model of the vehicle
    const vehicleMakeModel = `${vehicle.make} ${vehicle.model}`;
    
    // Check if the vehicle's weight is within the towing capacity
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`${this.make} ${this.model} is towing ${vehicleMakeModel}`);
    } else {
      console.log(`${vehicleMakeModel} is too heavy to be towed by ${this.make} ${this.model}`);
    }
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails(); // Call parent method to print general details
    console.log(`Towing Capacity: ${this.towingCapacity} kg`);
    console.log(
      `Wheels: ${this.wheels
        .map(wheel => `${wheel.getTireBrand} (${wheel.getDiameter} inch)`)
        .join(", ")}`
    );
  }
}

// Export the Truck class
export default Truck;

