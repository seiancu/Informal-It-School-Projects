1. Create a base class called `User` with the following properties and methods:
   - Properties:
     - `id` (string): The unique identifier for the user.
     - `name` (string): The name of the user.
     - `email` (string): The email address of the user.
     - `phoneNumber` (string): The phone number of the user.
     - `paymentMethods` (array): An array to store the user's linked payment methods.
   - Methods:
     - `register()`: Registers a new user with the provided details and creates a new user account.
     - `login()`: Authenticates the user's credentials and logs them into their account securely.
     - `updateProfile(newName)`: Updates the user's profile name with the provided new name.
     - `linkPaymentMethod(paymentMethod)`: Links a new payment method to the user's account.
     - `viewRideHistory()`: Retrieves the user's ride history, including details of previous rides and associated payments.

2. Create a class called `Customer` that inherits from the `User` class and adds the following properties and methods:
   - Properties:
     - `loyaltyPoints` (number): The number of loyalty points earned by the customer.
   - Methods:
     - `redeemLoyaltyPoints(points)`: Allows the customer to redeem a certain number of loyalty points for rewards or discounts.

3. Create a class called `Driver` that inherits from the `User` class and adds the following properties and methods:
   - Properties:
     - `vehicle` (string): The type of vehicle driven by the driver.
     - `licensePlate` (string): The license plate number of the driver's vehicle.
   - Methods:
     - `register()`: Registers a new driver with the provided details and creates a new driver account.
     - `updateProfile(newName)`: Updates the driver's profile name with the provided new name.
     - `acceptRideRequest(ride)`: Accepts the ride request from a user and assigns the driver to the ride.
     - `cancelRideRequest(ride)`: Cancels the assigned ride request and notifies the user.
     - `completeRide(ride)`: Marks the assigned ride as completed and calculates the driver's earnings.
     - `viewEarnings()`: Retrieves the driver's earnings, including details of completed rides.

4. Create a class called `Ride` with the following properties and methods:
   - Properties:
     - `id` (string): The unique identifier for the ride.
     - `user` (User): The user who requested the ride.
     - `driver` (Driver): The driver assigned to the ride.
     - `pickupLocation` (string): The pickup location for the ride.
     - `destination` (string): The destination for the ride.
     - `fare` (number): The fare amount for the ride.
   - Methods:
     - `requestRide(pickupLocation, destination)`: Initiates a ride request for the user with the provided pickup and destination locations.
     - `calculateFare()`: Calculates the fare for the ride based on factors such as distance, duration, and any additional charges.
     - `cancelRide()`: Cancels the ride request and frees up the assigned driver for other requests.
     - `rateDriver(rating, review)`: Allows the user to rate and provide feedback on the assigned driver.

5. Create a class called `PaymentMethod` with the following properties:
   - `id` (string): The unique identifier for the payment method.
   - `type` (string): The type of payment method (e.g., credit card, debit card, digital wallet).
   - `lastFourDigits` (string): The last four digits of the payment method's account number.

Ensure that the Uber-like application satisfies these requirements and utilizes inheritance to provide common functionality and specialization for users, customers, drivers, rides, and payment methods.