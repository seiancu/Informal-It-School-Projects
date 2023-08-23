import { User } from "./User.js";

export class Customer extends User {
  constructor(id, name, email, phoneNumber) {
    super(id, name, email, phoneNumber);
    this.loyaltyPoints = 0;
  }

  redeemLoyaltyPoints(points) {
    console.log(`${this.name} redeemed ${points} loyalty points.`);
  }
}
