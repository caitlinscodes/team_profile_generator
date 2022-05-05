// Borrowed from unit 10, lesson 25_Ins_Multiple-Classes
// Require subclasses
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

// Set up Employee Class
class Employee {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.id = Math.floor(Math.random() * 99) + 1;
  }




  // Call Methods
  // getName()
  // getId()
  // getEmail()
  // getRole() - returns 'Employee'
  
  takeOrder(order) {
    this.revenue += order.item.price;
    this.orders.push(order);
    console.log(`Added #${order.id} to the queue`);
    this.printRevenue();
  }

  printRevenue() {
    console.log(`${this.name} has made ${this.revenue} so far!`);
  }

  prepareOrders() {
    const prepareInterval = setInterval(() => {
      if (this.orders.length === 0) {
        console.log("Finished cooking all orders!");

        clearInterval(prepareInterval);
      } else {
        const order = this.orders.shift();

        console.log(`#${order.id} has been prepared.`);
      }
    }, 1000);
  }
}

const restaurant = new Restaurant("McJared's");

const items = [
  new Item("Burger", 5.99),
  new Item("Soda", 3.5),
  new Item("Chips", 2.0)
];

const orders = items.map(item => new Order(item));

orders.forEach(order => restaurant.takeOrder(order));

restaurant.prepareOrders();