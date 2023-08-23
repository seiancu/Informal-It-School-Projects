export class User {
  constructor(id, name, email, phoneNumber) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.paymentMethods = [];
  }

  register() {
    console.log(`${this.name} has been registered.`);
  }

  login() {
    console.log(`${this.name} has logged in.`);
  }

  updateProfile(newName) {
    this.name = newName;
    console.log(`Profile updated. New name: ${this.name}`);
  }

  linkPaymentMethod(paymentMethod) {
    this.paymentMethods.push(paymentMethod);
    console.log(
      `Payment method linked: ${paymentMethod.type} ending in ${paymentMethod.lastFourDigits}`
    );
  }
}
