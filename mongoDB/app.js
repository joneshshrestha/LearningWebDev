const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  rating: 10,
  review: "Peaches are so yummy"
});

fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "John",
  age: 37
});

// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 10,
//   review: "The best fruit"
// });
// const banana = new Fruit({
//   name: "Banana",
//   rating: 8,
//   review: "Smooth fruit"
// });
// const oranges = new Fruit({
//   name: "Oranges",
//   rating: 8,
//   review: "Very sour"
// });

// // Fruit.insertMany([kiwi, oranges, banana], function(err) {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log("Successfully saved all fruits to fruitsDB");
// //   }
// // });

// // person.save();

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    fruits.forEach(fruit => {
      console.log(fruit.name);
    });
  }
});
