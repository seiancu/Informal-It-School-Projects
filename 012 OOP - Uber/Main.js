import { User } from "./User.js";
import { Customer } from "./Customer.js";
import { Driver } from "./Driver.js";
import { Ride } from "./Ride.js";
import { PaymentMethod } from "./PaymentMethod.js";

const paymentMethod = new PaymentMethod("pm1", "credit card", "1234");
const user = new User("u1", "John Doe", "john@example.com", "1234567890");
user.linkPaymentMethod(paymentMethod);

const customer = new Customer(
  "c1",
  "Alice Smith",
  "alice@example.com",
  "9876543210"
);
customer.redeemLoyaltyPoints(100);

const driver = new Driver(
  "d1",
  "Bob Johnson",
  "bob@example.com",
  "5678901234",
  "Sedan",
  "ABC123"
);
const ride = new Ride("one", customer, driver, "123 Main St", "456 Elm St");
ride.requestRide("Brasov", "Bucherest");

ride.calculateFare();
ride.cancelRide();
ride.rateDriver(5, "Great driver!");

driver.acceptRideRequest(ride);
driver.completeRide(ride);

user.register();
user.login();
user.updateProfile("John Smith");
