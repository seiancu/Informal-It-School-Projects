// Highway Class
function Highway() {
  this.vehicleList = [];
  this.vignetteCostByVehicleType = {
    Car: 20,
    Bus: 30,
    Truck: 40,
  };
}

// Enter Highway method
Highway.prototype.enterHighway = function (vehicle) {
  // Pay the vigniette fee based on vehicle type
  var vignietteCost = this.vignetteCostByVehicleType[vehicle.constructor.name];
  if (vignietteCost) {
    vehicle.payVignette(vignietteCost);
  }

  // Check if the vehicle paid the vignette fee
  if (vehicle.vignietteFeePaid == true) {
    this.vehicleList.push(vehicle);
    console.log(
      `${vehicle.name} entered the Highway and driven by ${vehicle.driver.name}.`
    );
  }

  // Increase the speed when entering the highway
  vehicle.increaseSpeed(20);
};

// Vehicle class
function Vehicle(name, runningSpeed, driver) {
  this.name = name;
  this.runngigSpeed = runningSpeed;
  this.driver = driver;
  this.vignietteFeePaid = false;
}

// Increase Speed Method
Vehicle.prototype.increaseSpeed = function (speed) {
  this.runngigSpeed += speed;
};

// Pay vignette method
Vehicle.prototype.payVignette = function (vignietteCost) {
  if (this.driver.walletMoney >= vignietteCost) {
    this.driver.walletMoney -= vignietteCost;
    this.vignietteFeePaid = true;
    console.log(
      `${this.driver.name} paid the vignette fee of $${vignietteCost}. Now, ${this.driver.name} have $${this.driver.walletMoney} left in his pocket.`
    );
  } else {
    console.log(
      `${this.driver.name} does not have sufficient money to pay the vignette fee of $${vignietteCost}, so he cannot enter the Highway.`
    );
    this.vignietteFeePaid = false;
  }
};

// Car class
function Car(name, runningSpeed, driver) {
  Vehicle.call(this, name, runningSpeed, driver);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Bus class
function Bus(name, runningSpeed, driver) {
  Vehicle.call(this, name, runningSpeed, driver);
}

Bus.prototype = Object.create(Vehicle.prototype);
Bus.prototype.constructor = Bus;

// Truck class
function Truck(name, runngigSpeed, driver) {
  Vehicle.call(this, name, runngigSpeed, driver);
}

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

// Driver class
function Driver(name, walletMoney) {
  this.name = name;
  this.walletMoney = walletMoney;
}

// Police class
function Police(name, runngigSpeed, driver) {
  Vehicle.call(this, name, runngigSpeed, driver);
}

Police.prototype = Object.create(Vehicle.prototype);
Police.prototype.constructor = Police;

// Speed limits by vehicle type Police static property
Police.speedLimitsbyVehicleType = {
  Car: 130,
  Bus: 120,
  Truck: 100,
};

// Fine by vehicle type Police static property
Police.fineByVehicleType = {
  Car: 100,
  Bus: 150,
  Truck: 200,
};

// Police Check vehicle speed method
Police.prototype.checkVehicleSpeed = function (vehicle) {
  var speedLimit = Police.speedLimitsbyVehicleType[vehicle.constructor.name];
  var speedFine = Police.fineByVehicleType[vehicle.constructor.name];

  if (vehicle.runngigSpeed > speedLimit) {
    if (vehicle.driver.walletMoney >= speedFine) {
      vehicle.driver.walletMoney -= speedFine;
      console.log(
        `${vehicle.driver.name} has been caught running with ${
          vehicle.runngigSpeed
        } km/h, exceeding the speed limit by ${
          vehicle.runngigSpeed - speedLimit
        } km/h and have been fined with $${speedFine}. Now, ${
          vehicle.driver.name
        } have $${vehicle.driver.walletMoney} left in his pocket.`
      );
    } else {
      console.log(
        `${vehicle.driver.name} has been caught running with ${
          vehicle.runngigSpeed
        } km/h, exceeding the speed limit by ${
          vehicle.runngigSpeed - speedLimit
        } km/h, but he does not have enough money to pay the $${speedFine} fine, so his car will be taken by the police.`
      );
    }
  } else if (vehicle.vignietteFeePaid == true) {
    console.log(
      `${vehicle.driver.name} is running with ${
        vehicle.runngigSpeed
      } km/h, which is within the speed limit of ${speedLimit} km/h, according to his vehicle category of ${[
        vehicle.constructor.name,
      ]}.`
    );
  }
};

var newHighway = new Highway();

var josh = new Driver("Josh", 200);
var nick = new Driver("Nick", 20);
var charles = new Driver("Charles", 100);
var mike = new Driver("Mike", 500);
var policeOfficer = new Driver("Police Officer", 0);

var toyota = new Car("Toyota", 120, josh);
var line23 = new Bus("Line 23", 90, nick);
var milkTruck = new Truck("Milk Truck", 100, charles);
var petrolTruck = new Truck("Petrol Truck", 70, mike);
var policeCar = new Police("Police Car", 80, policeOfficer);

newHighway.enterHighway(toyota);
policeCar.checkVehicleSpeed(toyota);

newHighway.enterHighway(line23);
policeCar.checkVehicleSpeed(line23);

newHighway.enterHighway(milkTruck);
policeCar.checkVehicleSpeed(milkTruck);

newHighway.enterHighway(petrolTruck);
policeCar.checkVehicleSpeed(petrolTruck);
