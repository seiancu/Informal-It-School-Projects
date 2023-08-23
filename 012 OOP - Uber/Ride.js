export class Ride {
  constructor(id, user, driver, pickupLocation, destination) {
    this.id = id;
    this.user = user;
    this.driver = driver;
    this.pickupLocation = pickupLocation;
    this.destination = destination;
    this.fare = 0;
  }

  requestRide(pickupLocation, destination) {
    console.log(
      `${this.user.name} requested a ride from ${pickupLocation} to ${destination}.`
    );
  }

  calculateFare() {
    this.fare = 25.0; // Sample fare amount
    console.log(`Fare for ride ${this.id}: $${this.fare.toFixed(2)}`);
  }

  cancelRide() {
    console.log(`Ride ${this.id} has been cancelled.`);
  }

  rateDriver(rating, review) {
    console.log(
      `Driver ${this.driver.name} has been rated ${rating} stars with the following review: "${review}"`
    );
  }
}
