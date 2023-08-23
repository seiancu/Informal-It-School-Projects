import { User } from "./User.js";

export class Driver extends User {
  constructor(id, name, email, phoneNumber, vehicle, licensePlate) {
    super(id, name, email, phoneNumber);
    this.vehicle = vehicle;
    this.licensePlate = licensePlate;
  }

  acceptRideRequest(ride) {
    console.log(`${this.name} accepted ride request ${ride.id}.`);
  }

  cancelRideRequest(ride) {
    console.log(`${this.name} cancelled ride request ${ride.id}.`);
  }

  completeRide(ride) {
    let totalEarnings = 0;
    let earnings = ride.fare * 0.8; // Driver earns 80% of the fare
    console.log(
      `${this.name} completed ride ${ride.id} and earned $${earnings}.`
    );
    totalEarnings += earnings;

    this.viewEarnings(totalEarnings);
  }

  viewEarnings(earnings) {
    console.log(`${this.name}'s earnings: $${earnings}`);
  }
}
