# Most commonly used mongoDB commands

Refer: <https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/>

## Starting on Ubuntu

First, discover the init system:
`ps --no-headers -o comm 1`

Usually it is systemd(systemctl).
Following commands are based on systemd. If different, refer to mongoDB docs.

### 1 After the installation, start mongoDB

`sudo systemctl start mongod`

If you receive an error similar to the following when starting mongod:
Failed to start mongod.service: Unit mongod.service not found.

Run the following command first:  
`sudo systemctl daemon-reload`

Then run the start command above again.

### 2 Verify that MongoDB has started successfully

`sudo systemctl status mongod`

You can optionally ensure that MongoDB will start following a system reboot by issuing the following command:

`sudo systemctl enable mongod`

### 3 Stop MongoDB

As needed, you can stop the mongod process by issuing the following command:

`sudo systemctl stop mongod`

### 4 Restart MongoDB

You can restart the mongod process by issuing the following command:

`sudo systemctl restart mongod`

You can follow the state of the process for errors or important messages by watching the output in the /var/log/mongodb/mongod.log file.

### 5 Begin using MongoDB

Start a mongosh session on the same host machine as the mongod. You can run `mongosh` without any command-line options to connect to a mongod that is running on your localhost with default port 27017.

`mongosh`

For more information on connecting using `mongosh`, such as to connect to a mongod instance running on a different host and/or port, see the `mongosh` documentation.

To help you start using MongoDB, MongoDB provides Getting Started Guides in various driver editions. For the driver documentation, see Start Developing with MongoDB.

## Uninstall MongoDB Community Edition

To completely remove MongoDB from a system, you must remove the MongoDB applications themselves, the configuration files, and any directories containing data and logs. The following section guides you through the necessary steps.
Warning

This process will completely remove MongoDB, its configuration, and all databases. This process is not reversible, so ensure that all of your configuration and data is backed up before proceeding.

### 1 Stop MongoDB

Stop the mongod process by issuing the following command:

`sudo service mongod stop`

### 2 Remove Packages

Remove any MongoDB packages that you had previously installed.

`sudo apt-get purge mongodb-org*`

### 3 Remove Data Directories

Remove MongoDB databases and log files.

`sudo rm -r /var/log/mongodb`
`sudo rm -r /var/lib/mongodb`

## After started mongosh session

Refer: <https://www.mongodb.com/docs/manual/reference/method/>

Creating a DB(collection):

> `use [collectionName]`

Then a collection should be created. Uses objects and if want to create many entries, it must be a array`[{data0}, {data1}, {data2}]`. Use these methods: `insertOne()`, `insertMany()`.

Creating and inserting data to a collection:
`db.[collectionName].insertOne({name: "Tony", age: 4, admin: false})` // example of data.

It will create the collection automatically if it doesn't exists.

To see the collections created, use show collections:
`show collections`

Viewing databases on MongoDB:  
`show dbs`

To see the collection content:  
`db.[collectionName].find()`

## Finding / Querying

Use to show everything in the collection(returns a cursor):  
`db.[collectionName].find()`

### Specific querying

`db.dogs.find({breed: "Corgi"})` //example

## Updating data

Refer: <https://www.mongodb.com/docs/manual/reference/method/db.collection.updateOne/#mongodb-method-db.collection.updateOne>

<https://www.mongodb.com/docs/manual/reference/method/db.collection.updateMany/#mongodb-method-db.collection.updateMany>

`db.collection.updateOne(filter, update, options)`  
`db.collection.updateMany(filter, update, options)`

May update several values on the same entry.
Also can create a new key-value if not existent.

### Operators

Example:  
`{$set: {age:5, name: "Tony"}}`

`$currentDate` - Sets the value of a field to current date, either as a Date or a Timestamp.  
Example:

    db.customers.updateOne(
       { _id: 1 },
       {
         $currentDate: {
            lastModified: true,
            "cancellation.date": { $type: "timestamp" }
         },
         $set: {
            "cancellation.reason": "user request",
            status: "D"
         }
       }
    )

`$inc` - Increments the value of the field by the specified amount.  
`$min` - Only updates the field if the specified value is less than the existing field value.  
`$max` - Only updates the field if the specified value is greater than the existing field value.  
`$mul` - Multiplies the value of the field by the specified amount.  
`$rename` - Renames a field.  
`$set` - Sets the value of a field in a document.  
`$setOnInsert` - Sets the value of a field if an update results in an insert of a document. Has no effect on update operations that modify existing documents.  
`$unset` - Removes the specified field from a document.

### Methods

**Update**

The `updateOne()` method updates only one entry that matches the selection criteria.

Example:

> `db.collection.updateOne({name: "Charlie"}, {$set: {age:5, breed: "Labrador", nonExistentEntry: true}})`

`{name: "Charlie"}` is the selection criteria for the update. The same query selectors as in the find() method are available.

Specify an empty document { } to update the first document returned in the collection.

`{$set: {age:5, breed: "Labrador"}}` is the modifications to apply.

> `db.collection.updateMany(filter, update, options)`

Updates many entries that match the selection criteria.

**Replace**

`db.collection.replaceOne()` Replaces a single document within the collection based on the filter.

> `db.collection.replaceOne(filter, replacement, options)`

Cannot contain update operators.

**Delete**

Refer: <https://www.mongodb.com/docs/manual/reference/method/db.collection.deleteOne/#mongodb-method-db.collection.deleteOne>

<https://www.mongodb.com/docs/manual/reference/method/db.collection.deleteMany/#mongodb-method-db.collection.deleteMany>

`db.collection.deleteOne()` - Deletes a single document in a collection.  
`db.collection.deleteMany()` - Deletes multiple documents in a collection.

> `db.collection.deleteMany(filter)`  
> `db.collection.deleteMany({})` - deletes EVERYTHING.

### Using fancy operators

Refer: <https://www.mongodb.com/docs/manual/reference/operator/>

If there's a object inside the document, the syntax is slightly different:

    {
    "_id": xoxoxoxo,
    "name": "Tony",
    "age": 4,
    "personality": {
       "catFriendly": true,
       "childFriendly": true
       }
    }

`db.dogs.find({"personality.childFriendly": true, age: 4})`

### Query and Projection Operators

Refer: <https://www.mongodb.com/docs/manual/reference/operator/query/>

Greater than  
`$gt`
`db.inventory.find( { quantity: { $gt: 20 } } )`

Greater or equal than  
`$gte`
`db.inventory.find( { quantity: { $gte: 20 } } )`

Less than  
`$lt`
`db.inventory.find( { quantity: { $lt: 30 } } )`

Less or equal than  
`$lte`
`db.inventory.find( { quantity: { $lte: 30 } } )`

Matches ANY of the values specified in an array  
`$in`
`db.inventory.find( { quantity: { $in: [value, value, value] } } )`

Not in - Matches none of the values specified in an array  
`$nin`
`db.inventory.find( { quantity: { $nin: [value, value, value] } } )`

Not equal to a specified value  
`$ne`
`db.inventory.find( { quantity: { $ne: 30 } } )`

**Update Operators**  
Refer: <https://www.mongodb.com/docs/manual/reference/operator/update/>

**Aggregation Pipeline Stages**  
Refer: <https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline/>

**Aggregation Pipeline Operators**  
Refer: <https://www.mongodb.com/docs/manual/reference/operator/aggregation/>

## Connecting Mongoose to MongoDB

Mongoose is an ODM - Object data/document mapper.  
Refer: <https://mongoosejs.com/docs/>

### Beginning

**Installing Mongoose on a project**

==First be sure you have MongoDB and Node.js installed.==  
In the project folder:  
`npm i mongoose`

### Saving a document in a collection with Mongoose

Usually at node we run `.load index.js`,
but sometimes bugs occur, so:

> Instead of using .load index.js inside of the node shell, use the command:  
> `node -i -e "$(< index.js)"` **in the system terminal (outside of the node shell**, just be sure that you first change directories into the folder containing the index.js file) — **this will load the file and start the node shell with this one command instead, and then it should work**. Be sure to type out the command exactly as shown above.

Then you can save a document using this command:  
`[documentName].save()`

### Finding / querying with Mongoose

Refer: <https://mongoosejs.com/docs/queries.html>

    Model.deleteMany()
    Model.deleteOne()
    Model.find()
    Model.findById()
    Model.findByIdAndDelete()
    Model.findByIdAndRemove()
    Model.findByIdAndUpdate()
    Model.findOne()
    Model.findOneAndDelete()
    Model.findOneAndRemove()
    Model.findOneAndReplace()
    Model.findOneAndUpdate()
    Model.replaceOne()
    Model.updateMany()
    Model.updateOne()

A mongoose query can be executed in one of two ways. First, if you pass in a callback function, Mongoose will execute the query asynchronously and pass the results to the callback.

A query also has a .then() function, and thus can be used as a promise.

Much similar to mongoDB. E.g.:  
`Movie.find({year: {$gte: 2015}}).then(data =>console.log(data))`

### Updating with Mongoose

Refer: <https://mongoosejs.com/docs/api.html#model_Model-updateMany>

Model.update()  
Updates one document in the database without returning it.  
**This method is deprecated**

`Model.updateMany()`  
Same as update(), except MongoDB will update all documents that match filter (as opposed to just the first one) regardless of the value of the multi option.

Note updateMany will not fire update middleware. Use pre('updateMany') and post('updateMany') instead.

Example:

      const res = await Person.updateMany({ name: /Stark$/ }, { isDeleted: true });
      res.matchedCount; // Number of documents matched
      res.modifiedCount; // Number of documents modified
      res.acknowledged; // Boolean indicating everything went smoothly.
      res.upsertedId; // null or an id containing a document that had to be upserted.
      res.upsertedCount; // Number indicating how many documents had to be upserted. Will either be 0 or 1.

This function triggers the following middleware.

    updateMany()

On Node:  
`Movie.updateMany({title: {$in: ["Amadeus", "Stand by me"]}}, {score: 10}). then(res => console.log(res)`  
Queries for documents that match the filter, update score to 10, then return result.

`Model.updateOne()`

Same as update(), except it does not support the multi or overwrite options.

    MongoDB will update only the first document that matches filter regardless of the value of the multi option.
    Use replaceOne() if you want to overwrite an entire document rather than using atomic operators like $set.

Example:

      const res = await Person.updateOne({ name: 'Jean-Luc Picard' }, { ship: 'USS Enterprise' });
      res.matchedCount; // Number of documents matched
      res.modifiedCount; // Number of documents modified
      res.acknowledged; // Boolean indicating everything went smoothly.
      res.upsertedId; // null or an id containing a document that had to be upserted.
      res.upsertedCount; // Number indicating how many documents had to be upserted. Will either be 0 or 1.

This function triggers the following middleware.

    updateOne()

On Node:  
`Movie.updateOne({title: "Amadeus"}, {year: 1984}).then(res => console.log(res))`
Queries for a document with title Amadeus, update year to 1984, then prints the result.

`Model.findOneAndUpdate()`

Issues a mongodb findAndModify update command.

Finds a matching document, updates it according to the update arg, passing any options, and returns the found document (if any) to the callback. The query executes if callback is passed else a Query object is returned.

By default prints the old version of document, although actually updated it. Use the `new: true` to return the updated version of document.

      A.findOneAndUpdate(conditions, update, options, callback) // executes
      A.findOneAndUpdate(conditions, update, options)  // returns Query
      A.findOneAndUpdate(conditions, update, callback) // executes
      A.findOneAndUpdate(conditions, update)           // returns Query
      A.findOneAndUpdate()                             // returns Query

`Movie.findOneAndUpdate({title: "The Iron Giant"}, {score: 7.8}, {new: true}).then(m => console.log(m))`  
Queries a document where title is The Iron Giant, updates its score to 7.8, returns the new values instead of the default old values.

`Model.findByIdAndUpdate()`
**Very Important**  
Used in applications
Issues a mongodb findAndModify update command by a document's \_id field. findByIdAndUpdate(id, ...) is equivalent to findOneAndUpdate({ \_id: id }, ...).

Finds a matching document, updates it according to the update arg, passing any options, and returns the found document (if any) to the callback. The query executes if callback is passed.

This function triggers the following middleware.

    findOneAndUpdate()

Example:

      A.findByIdAndUpdate(id, update, options, callback) // executes
      A.findByIdAndUpdate(id, update, options)  // returns Query
      A.findByIdAndUpdate(id, update, callback) // executes
      A.findByIdAndUpdate(id, update)           // returns Query
      A.findByIdAndUpdate()                     // returns Query

Note:

All top level update keys which are not atomic operation names are treated as set operations:
Example:

      Model.findByIdAndUpdate(id, { name: 'jason bourne' }, options, callback)

      // is sent as
      Model.findByIdAndUpdate(id, { $set: { name: 'jason bourne' }}, options, callback)

This helps prevent accidentally overwriting your document with { name: 'jason bourne' }. To prevent this behaviour, see the overwrite option
Note:

findOneAndX and findByIdAndX functions support limited validation. You can enable validation by setting the runValidators option.

If you need full-fledged validation, use the traditional approach of first retrieving the document.

      const doc = await Model.findById(id)
      doc.name = 'jason bourne';
      await doc.save();

### Deleting with Mongoose

`Model.remove()` - deprecated  
Example:
`Movie.remove({title: "Amelie"}).then(msg => console.log(msg))`

`Model.deleteOne()`  
Deletes a single document from the database.

    Example:
    Movie.deleteOne({title: "Meet the Spartans"}).then(msg => console.log(msg))

`Model.deleteMany()`  
Deletes multiple documents from the database.

    Example:
    Movie.deleteMany({year: {$gte: 1999}}).then(msg => console.log(msg))

`Movie.findOneAndDelete()`  
Gives document back after deletion.

### Mongoose Schema validations

Use the `required:` boolean property to validate data.  
Example:

    const productSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
        }
    });

In the case above, the name is required to be filled, the price is optional.

Another important thing is that trying to insert properties and values outside the determined schema won't work, **won't be included in the real collection** also it won't log errors.

### All Schema Types

Ref: https://mongoosejs.com/docs/schematypes.html

- required: boolean or function, if true adds a required validator for this property
- default: Any or function, sets a default value for the path. If the value is a function, the return value of the function is used as the default.
- select: boolean, specifies default projections for queries
- validate: function, adds a validator function for this property
- get: function, defines a custom getter for this property using `Object.defineProperty()`.
- set: function, defines a custom setter for this property using `Object.defineProperty()`.
- alias: string, mongoose >= 4.10.0 only. Defines a virtual with the given name that gets/sets this path.
- immutable: boolean, defines path as immutable. Mongoose prevents you from changing immutable paths unless the parent document has `isNew: true`.
- transform: function, Mongoose calls this function when you call `Document#toJSON()` function, including when you `JSON.stringify()` a document.

### String

- lowercase: boolean, whether to always call .toLowerCase() on the value

- trim: boolean, whether to always call .trim() on the value
- uppercase: boolean, whether to always call .toUpperCase() on the value
- match: RegExp, creates a validator that checks if the value matches the given regular expression
- enum: Array, creates a validator that checks if the value is in the given array. e.g. `size: { type: String, enum: ["S", "M", "L"] }`
- minLength: Number, creates a validator that checks if the value length is not less than the given number
- maxLength: Number, creates a validator that checks if the value length is not greater than the given number
- populate: Object, sets default populate options

### Number

- min: Number, creates a validator that checks if the value is greater than or equal to the given minimum.
- max: Number, creates a validator that checks if the value is less than or equal to the given maximum.
- enum: Array, creates a validator that checks if the value is strictly equal to one of the values in the given array.
- populate: Object, sets default populate options

### Date

- min: Date, creates a validator that checks if the value is greater than or equal to the given minimum.
- max: Date, creates a validator that checks if the value is less than or equal to the given maximum.
- expires: Number or String, creates a TTL index with the value expressed in seconds.

### ObjectId

- populate: Object, sets default populate options

### => Validating Mongoose updates

- Validation is defined in the SchemaType
- Validation is middleware. Mongoose registers validation as a pre('save') hook on every schema by default.
- You can disable automatic validation before save by setting the validateBeforeSave option
- You can manually run validation using doc.validate(callback) or doc.validateSync()
- You can manually mark a field as invalid (causing validation to fail) by using doc.invalidate(...)
- Validators are not run on undefined values. The only exception is the required validator.
- Validation is asynchronously recursive; when you call Model#save, sub-document validation is executed as well. If an error occurs, your Model#save callback receives it
- Validation is customizable

When updating a data (e.g. using findOneAndUpdate), by default it is not (re)validated. The data will be updated anyways using the provided values.

The solution for this potentially **_dangerous behavior_** is to use the option `runValidators: true`.  
**Example:**  
`Product.findOneAndUpdate({ name: "Tire Pump" }, { price: -19.99 }, { new: true, runValidators: true })`

### Mongoose Validation errors

Ref: https://mongoosejs.com/docs/validation.html#custom-error-messages

You can configure the error message for individual validators in your schema. There are two equivalent ways to set the validator error message:

Array syntax:  
`min: [6, 'Must be at least 6, got {VALUE}']`

Object syntax:  
`enum: { values: ['Coffee', 'Tea'], message: '{VALUE} is not supported' }`

Mongoose also supports rudimentary templating for error messages. Mongoose replaces {VALUE} with the value being validated.

### Custom methods to the schema

### Model Instance methods

Ref: https://mongoosejs.com/docs/guide.html#methods

Create a custom method that may do many repetitive tasks/methods.
Operates in individual instances of a model.

Instances of Models are documents. Documents have many of their own built-in instance methods. We may also define our own custom document instance methods.

    // define a schema
    const animalSchema = new Schema({ name: String, type: String },
    {
    // Assign a function to the "methods" object of our animalSchema through schema options.
    // By following this approach, there is no need to create a separate TS type to define the type of the instance functions.
    methods: {
        findSimilarTypes(cb) {
        return mongoose.model('Animal').find({ type: this.type }, cb);
        }
    }
    });

    // Or, assign a function to the "methods" object of our animalSchema
    animalSchema.methods.findSimilarTypes = function(cb) {
    return mongoose.model('Animal').find({ type: this.type }, cb);
    };

Now all of our animal instances have a findSimilarTypes method available to them.

    const Animal = mongoose.model('Animal', animalSchema);
    const dog = new Animal({ type: 'dog' });

    dog.findSimilarTypes((err, dogs) => {
    console.log(dogs); // woof
    });

- Overwriting a default mongoose document method may lead to unpredictable results.
- The example above uses the `Schema.methods` object directly to save an instance method. You can also use the `Schema.method()` helper as described here: https://mongoosejs.com/docs/api/schema.html#schema_Schema-method
- **Do not declare methods using ES6 arrow functions (=>)**. Arrow functions _explicitly prevent binding_ `this`, so your method will not have access to the document and the above examples will not work.

### Static methods

Ref: https://mongoosejs.com/docs/guide.html#statics

Lives in the model itself. Not in the instances of model.

You can also add static functions to your model. There are three equivalent ways to add a static:

- Add a function property to the second argument of the schema-constructor (`statics`)
- Add a function property to `schema.statics`
- Call the `Schema#static()` function

`this` refers to the **model class itself**, not the instance itself.

Example:

    // define a schema
    const animalSchema = new Schema({ name: String, type: String },
    {
    // Assign a function to the "statics" object of our animalSchema through schema options.
    // By following this approach, there is no need to create a separate TS type to define the type of the statics functions.
    statics: {
        findByName(name) {
        return this.find({ name: new RegExp(name, 'i') });
        }
    }
    });

    // Or, Assign a function to the "statics" object of our animalSchema
    animalSchema.statics.findByName = function(name) {
    return this.find({ name: new RegExp(name, 'i') });
    };
    // Or, equivalently, you can call `animalSchema.static()`.
    animalSchema.static('findByBreed', function(breed) { return this.find({ breed }); });

    const Animal = mongoose.model('Animal', animalSchema);
    let animals = await Animal.findByName('fido');
    animals = animals.concat(await Animal.findByBreed('Poodle'));

Do not declare statics using ES6 arrow functions (=>). Arrow functions explicitly prevent binding `this`, so the above examples will not work because of the value of `this`.

### Mongoose virtuals

Ref: https://mongoosejs.com/docs/guide.html#virtuals

They give us the ability to add properties to a schema that don't actually exist in the database itself, but that we have access to thanks to Mongoose.

Usually a synthesis of multiple properties in or derived in a database.

    personSchema.virtual("fullName").get(function(){
    return `${this.first} ${this.last}`
    })

    const Person = mongoose.model("Person", personSchema);

You can also add a custom setter to your virtual that will let you set both first name and last name via the `fullName` virtual.

    // Again that can be done either by adding it to schema options:
    const personSchema = new Schema({
    name: {
        first: String,
        last: String
    }
    }, {
    virtuals: {
        fullName: {
        get() {
            return this.name.first + ' ' + this.name.last;
        }
        set(v) {
            this.name.first = v.substr(0, v.indexOf(' '));
            this.name.last = v.substr(v.indexOf(' ') + 1);
        }
        }
    }
    });

    // Or by using the virtual method as following:
    personSchema.virtual('fullName').
    get(function() {
        return this.name.first + ' ' + this.name.last;
    }).
    set(function(v) {
        this.name.first = v.substr(0, v.indexOf(' '));
        this.name.last = v.substr(v.indexOf(' ') + 1);
    });

    axl.fullName = 'William Rose'; // Now `axl.name.first` is "William"

Virtual property setters are applied before other validation. So the example above would still work even if the `first` and `last` name fields were required.

Only non-virtual properties work as part of queries and for field selection. Since virtuals are not stored in MongoDB, you can't query with them.

### Defining Mongoose Middleware

Ref: https://mongoosejs.com/docs/middleware.html

Middleware (also called pre and post hooks) are functions which are passed control during execution of asynchronous functions. Middleware is specified on the schema level and is useful for writing plugins.

**Use Cases**

Middleware are useful for atomizing model logic. Here are some other ideas:

- complex validation
- removing dependent documents (removing a user removes all their blogposts)
- asynchronous defaults
- asynchronous tasks that a certain action triggers

Examples:

    //Simple form
    personSchema.pre("save", function (next) {
    this.fullName = `${this.first} ${this.last}`;
    next();
    });

    //Using async
    personSchema.pre("save", async function () {
    this.first = "Who";
    this.last = "What";
    console.log("About to save.");
    });

    personSchema.post("save", async function () {
    console.log("Saved successfully!");
    });

### Putting all together - step-by-step setup

The main goal here is to have a full CRUD application with a user interface, HTML, all that stuff that is connected to a mongo database.  
We will make a Farm stand application.

At Linux:
In a empty folder,  
`npm init -y`  
`npm i express ejs mongoose`  
`touch index.js`  
`mkdir views`

At index.js file:

    const express = require("express");
    const app = express();
    const path = require("path");

    app.set("views", path.join(__dirname, "views"));
    app.set("view engine", "ejs");

    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });

Then make sure it works, so at CLI:  
`nodemon index.js` Verify if the response is good.

So add a basic route after the line with`app.set("view engine", "ejs");`:

    app.get("/dog", (req, res)=>{
        res.send("Woof!")
    })

Test it at the browser:
`http://localhost:3000/dog` Verify the response.

Next step is to integrate with mongoose.
We are going to move this logic to a file, a separate file eventually. But sometimes it's easier to take the basic code required and just shove it in the index.js file.

At index.js file we will move all the routes out and just have the basic logic to start a server.

But for now we will insert these lines below `const path = require("path");`:

    const mongoose = require("mongoose");

    mongoose.connect("mongodb://localhost:27017/farmStand")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(`Mongo connection error! ${err}`);
    });

So you need to make sure you have MongoDB daemon running in the background of the server in order for this to work. If not, just install/start following the instructions above in this documentation.

The index.js should be like this:

    const express = require("express");
    const app = express();
    const path = require("path");
    const mongoose = require("mongoose");

    mongoose
    .connect("mongodb://localhost:27017/farmStand")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

    app.set("views", path.join(__dirname, "views"));
    app.set("view engine", "ejs");

    app.get("/dog", (req, res) => {
    res.send("Woof!");
    });

    app.listen(3000, () => {
    console.log("Server is running on port 3000");
    });

**Creating our Model**

We are going to separate the logic, not concentrating in the index.js file.  
For this, a separate directory for models will be created, all models will be put in there.  
It is easier to isolate each model.

So create a new directory called _models_.  
At the project directory:  
`mkdir models`

Inside the models folder, make a file called _product.js_:  
`cd models`  
`touch product.js`

Inside the product.js, we will require mongoose because we are going to be making a mongoose model in this file.
Inside the file:
`const mongoose = require("mongoose");`  
Now we don't need to connect to the database in here because we are going to be requiring this model product in the index.js file where we are doing the connecting.

Then we will make the schema:

    const productSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true,
            min: 0
        },
        category: {
            type: String,
            lowercase: true,
            enum: ["fruit", "vegetable", "dairy"],
            required: true
        }
    });

Then we need to compile our model.
So insert below the last line:  
`const Product = mongoose.model("Product", productSchema);`

And then we are going to export that from this file.
So insert below the last line:  
`module.exports = Product;`

So we can import this model and use it somewhere else. Which is what we are going to do.

Now back in the _index.js_, we are connecting to our farmStand database.
Let's require our model in here just to begin with.
Insert this line below the line `const mongoose = require("mongoose");`:  
`const Product = require("./models/product");`

And then we could use product in here if needed. But to begin with, we will create a **seeds file** to seed our database to give it some initial data.  
Otherwise, it's a little bit annoying to build our application without any data in the database.  
We will make a file that we can run. Call it _seeds.js_.

At the project directory:  
`touch seeds.js`

And this file we will require the product model:  
Insert this line:  
`const Product = require("./models/product");`

And we are also going to start up. We are going to connect to Mongoose in here, insert these lines:

    const mongoose = require("mongoose");
    mongoose.connect("mongodb://localhost:27017/farmStand")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

It may look like this:

    const mongoose = require("mongoose");
    const Product = require("./models/product");

    mongoose.connect("mongodb://localhost:27017/farmStand")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

No web app involved, no server, no express. This is a file we will run on its own any time. I just want to get some new data in our database.

And is very common to seed the database separately from a web app just for development purposes. We want some data in there.  
We want to isolate this from the actual index of the application.

Now add a new product:  
Insert this at the bottom of the file:

    const p = new Product({
        name: "Grapefruit",
        price: 1,
        category: "fruit"
    });
    p.save().then(p =>{
        console.log(p);
    })
    .catch(e => {
        console.log(e);
    });

So now we should be able to run this single file seeds.

=>Stop the server  
Then run _seeds.js_ file:  
At the project directory:  
`node seeds.js` Verify if it worked.

Next it is a good idea check the database.
In the mongoDB CLI(shell), type:  
`show dbs` to show the databases, locate the _farmStand_ database.

To use the farmStand database, type:  
`use farmStand`

Then type:  
`show collections` to show the collections in this database.

To find an object, type:  
`db.products.find()` to find the object created with the _seed.js_ file.

Now let's make a couple more products. There's basically 2 ways to do so:

- Using the _seeds.js_ file to make one at a time, changing the file, saving, running...
- Use the `insertMany()` method from Mongoose.

Let's use the `insertMany()` method. In the _seeds.js_ file, comment the first product lines to prevent creation of the same product.

Then create new products inside the file:

    const seedProducts = [
        {
            name: "Fairy Eggplant",
            price: 1.00,
            category: "vegetable"
        },
        {
            name: "Organic Goddess Melon",
            price: 4.99,
            category: "fruit"
        },
        {
            name: "Organic Mini Seedless Watermelon",
            price: 3.99,
            category: "fruit"
        },
        {
            name: "Organic Celery",
            price: 1.50,
            category: "vegetable"
        },
        {
            name: "Chocolate Whole Milk",
            price: 2.69,
            category: "dairy"
        }
    ]

    Product.insertMany(seedProducts)
    .then(res => {
        console.log(`Inserted products! ${res}`);
    })
    .catch((err) => {
        console.log(err);
    });

One thing to know about `insertMany()` in Mongoose is that if anything does not pass validation, then NOTHING will be inserted at least by default.

So Mongoose validates all of this before it inserts anything, and then it inserts it in one go.

Now run this file.  
Quit node[ctrl+c], then re-run at the project directory:  
`node seeds.js` Verify if it worked.

Now verify at Mongo:  
`db.products.find()`

We will probably change our schema as we go and end up modifying what we want the data to look like.  
Eventually we might add in things like the farm that produced each one of these(looking at _seeds.js_ file).

If we do make those changes, we'll definitely want to change our seed data and we'll want to **remove** everything in our database currently.

When we run _seeds.js_ file, we'll actually empty the database first and then add in new products.

| For now we:

- have our _model_ set up,
- we got a _seed_ file,
- in our _index.js_ we can now require product and use it.

_Products Index_

We are now going to begin by defining our first actual route that is resulting in a query to our Mongo database.

WE are going to begin with the easier one, which is just the index page or just a list of all of the current products in our database.

Let's go with the RESTful conventions, it is just one pattern, we may use other ways.

At the _index.js_ file:  
Change the line containing:

    app.get("/dog", (req, res) => {
    res.send("Woof!");
    });

To:

    app.get("/products", async (req, res) => {
    const products = await Product.find({})
    console.log(products);
    res.send("All the products will be here!");
    });

It will make a little page that we respond with, that contains information about all of the products, maybe a table of products, maybe just a list of them.

So start up the server node on _index.js_ to verify.  
`nodemon index.js` or another node thing.

Then at the browser, open `localhost:3000/products`,  
back to the node server CLI, the result should be printed.

The pattern async await is something that we will use all the time. Waiting for something to come back from Mongoose and then responding.

Let's actually respond with a template that would be the nex thing that's important.

We have our views directory.

We can group things under products directory in there just in case we were to have multiple models.  
At views directory make a _products_ directory.  
`mkdir products`

And then in products directory we'll make an _index.ejs_ file.

Just start nice and simple, at _index.ejs_ file, insert the basic HTML boilerplate.  
Modify the _title_ tag to "All Products".

_h1_ will be "All products"

So then we have our views directory setup, the view engine of ejs. We should be able to call instead

of `res.send`, `res.render` and then products/index. At project-folder/_index.js_ file, modify this line:

    res.send("All the products will be here!");

To:

    res.render("products/index");

Refresh the `localhost:3000/products` page in the browser.  
Let's see what happens now. Should have worked.

So now let's just pass through all the products that we found.

Remember, that's the second argument we passed to render.

So we'll pass through all products, modify to:

    res.render("products/index", {products});

And now in our template, we have access to products.  
Refresh the page at browser, nothing should be broken yet.

And we can also get rid of this `console.log(products);` line (delete it).

So we won't bother with styling or anything just yet.

We don't want to tangle up bootstrap and styling or whatever we do with the mongoose stuff because it will just slow us down.

So we're going to do absolute bare bones setup right now.

At _index.ejs_, we'll make a `ul` tag and then we'll do a loop.

So remember our EJS syntax:

    <ul>
        <% for (let product of products) { %>
        <li><%= product.name %></li>
        <% }%>
    </ul>

Let's verify. At the browser, refresh the `localhost:3000/products` page.

Okay, so let's just do that.  
That's all we're going to do on our index page for now because next up, we're going to make a show page which will have more information about specific product.

The price, quantity is probably something we should add in which we will do shortly.
What else do we have in there? The category.

All that stuff is not really relevant to show on this page.

I mean, we haven't even talked about who's using this and what is relevant to this page and what isn't.  
But we have all the information if we want to use it.

We're just using the name for now.

So in the next steps we'll set up our next route, the show route, where we can view more details about a particular product.  
And for that to work, we need to `find by ID`.

### Product details

We're going to make our next route to view details about a single product.

You never have to follow this format.

You do not have to make your routes /product product/ID, but I'm just trying to show you sort of full CRUD and the basic restful routes we covered because it illustrates pretty much everything
you would want to do, at least the basic things you would want to do with Mongoose in an express app.

Find one thing, find everything, update things, delete things, create new things.

Now we're going to focus on setting up a details page for a single product.

And this is actually pretty realistic.

If you think of like a Instacart or GrubHub or Ubereats or any of really any grocery stores website where you can buy things online, you've got a whole bunch of products from there where they don't show you much, and then you can click on a product and view a lot more information, things about the description. And depending on the fancy, how fancy the grocery store is, they might tell you a whole bunch of ridiculous things about who's saying to the watermelon when it was three months old.

Let's go ahead and define our get route at the _index.js_:  
Below `res.render...` line, insert:  
`app.get("/products/:id)`

We may use the product name, but may not be UNIQUE and may have characters that isn't safe for URLs.

So in order to use a name in the URL or something that looks sort of human readable but also is unique, we would need to "slug ify" it. We need to turn it into a web slug, basically just make it URL safe. We're not going to do that for now, but if this is a real app, it's something we definitely would consider.

But we'll just use the Mongo ID so we'll just make this an async function ahead of time. Change `app.get("/products/:id)` to:

    app.get("/products/:id", async (req, res) =>{
    const { id } = req.params;
    const product = await Product.findById(id);
    console.log(product);
    res.send("details page!")
    })

Now test if it is working. At mongoDB CLI, copy an ID of a product and then go to the browser, access:  
`localhost:3000/product/[id]`

Also can see the log at node console.

So now, instead of just finding that product, what we're going to do is render a template, and we need to make that template.

Change this line `res.send("details page!")` to:

`res.render("products/show", { product })`

Also delete the `console.log(product)` line.

The file should look like this:

    const express = require("express");
    const app = express();
    const path = require("path");

    const mongoose = require("mongoose");

    const Product = require("./models/product");

    mongoose
      .connect("mongodb://localhost:27017/farmStand")
      .then(() => {
        console.log("Connected to MongoDB");
      })
      .catch((err) => {
        console.log(`Mongo connection error! ${err}`);
      });

    app.set("views", path.join(__dirname, "views"));
    app.set("view engine", "ejs");

    app.get("/products", async (req, res) => {
      const products = await Product.find({});
      res.render("products/index", { products });
    });

    app.get("/products/:id", async (req, res) => {
      const { id } = req.params;
      const product = await Product.findById(id);
      res.render("products/show", { product });
    });

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });

Now make a new file at /views/products/ directory called _show.ejs_.  
`cd views/products`  
`touch show.ejs`

At _show.ejs_ file, create the HTML boilerplate, then at _title_ tag, insert:  
`<title><%= product.name %></title>` in order to show the product name in the title.

And eventually we may refactor this out into a partial as we've already seen how to do just to reduce duplication in our templates.

Then create a _h1_ tag with product name:  
`<h1><%= product.name %> </h1>`

Maybe also _ul_ tag:

    <ul>
        <li>Price: $<%= product.price %></li>
        <li>Category: <%= product.category %></li>
    </ul>

File should look like this:

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title><%= product.name %></title>
      </head>
      <body>
        <h1><%= product.name %></h1>

        <ul>
          <li>Price: $<%= product.price %></li>
          <li>Category: <%= product.category %></li>
        </ul>

        <a href="/products">All Products</a>
      </body>
    </html>

Now let's test if it is working:
Again in browser, refresh the page with `/products/id` and verify if show the name, price and category.

Now, at the moment, we are still having to type this ID ourselves into the URL.

So why don't we just go back to our index page and make each one of these products a link to go to a show page.

So in the index page(index.ejs) we have access to that ID, we have our _li_ tag with a `product.name`.
Just going to cut `<%= product.name %>` out and make an anchor(_a_) tag where:

    <li><a href="/products/<%= product._id %>"><%= product.name %></a></li>

Let's see if it works. At the /product page, verify if the products have links to respective products.

Now let's set up a link to go back on the show page(`show.ejs`), just down at the bottom of the body for now, an anchor tag that goes back to `/products`:

    <a href="/products">All Products</a>

The file should look like this:

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>All Products</title>
      </head>
      <body>
        <h1>All Products</h1>
        <ul>
          <% for (let product of products) { %>
          <li><a href="/products/<%= product._id %>"><%= product.name %></a></li>
          <% }%>
        </ul>
      </body>
    </html>

Verify if works opening the product page and testing the links.

So at this point, we've set up to get routes one to view all products where we're using `Product.find({})` and the other one to view a particular product by ID, find by ID(`Product.findById(id)`).

    app.get("/products/:id", async (req, res) => {
      const { id } = req.params;
      const product = await Product.findById(id);
      res.render("products/show", { product });
    });

Now if we had some other thing we're finding use or that we were finding by we could just use `findOne()`
instead. If you want to find by name or slug or something else, but for now this works.

It's just sort of illustrating the basic moving pieces and how they fit together.

We created another async route handler and then we await some mongoose operation on a model, and then we pass that data to a template.

Or if we're making an API, a JSON API, we can render that information, render that model data as JSON.

Now, we still are not handling any errors.

So we can break things if we try and go to a route with an ID like well, if I just go to the browser type anything in the ID text, we're just getting hung up.

What's going on? What's the problem here?

Well, let's go look in our template or in our terminal(mongo).

It's telling us on handled promise rejection warning.

It was unable to find something with that ID.

So there are a lot of things that we need to account for in terms of errors and sort of padding the corners, the harsh edges of this.

But that's going to come later.

For now, we're just working on the basic mechanics.

We're going to assume best case scenario, nobody's trying to screw things up.

We don't have any errors. Magically, everything's happy.

So I'm going to go away from that, go back(browser) to just using our links only and everything works so far.

So errors, yhat's something on the horizon though.

We can't ignore it, but we're going to for now.

### Creating Products

Next up, let's implement the ability to make new products.

So we need a form and we need a route that we submit the form to.

So we need 2 routes.

And the first one here, I'm just going to follow the exact same pattern that we've been doing. At _index.js_, below `res.render("products/index", { products });});` line:

    app.get("/products/new", async (req, res) => {
        res.render("products/new");
    })

Remember as to get request product slash new should serve the form and then post to `/products` should be where we submit the form and actually should create a new product.

Here we don't really need to do anything asynchronous.

Just request-response.

It will render the form assuming that template exists.

So we'll make that now. At /view/products/ directory, create a new file called `new.ejs` and inside it, create the HTML boilerplate, then change the title:  
`<title>Add New Product</title>`.

Inside _body_:  
`<h1>Add A Product</h1>`

Let's make a form:

    <form action="/products" method="POST">
      <label for="name">Product Name</label>
      <input type="text" name="name" id="name" placeholder="Product Name" />
      <label for="price">Price (Unit)</label>
      <input
        type="number"
        name="price"
        id="price"
        placeholder="Product Price"
      />
      <label for="category">Select Category</label>
      <select name="category" id="category">
        <option value="fruit">fruit</option>
        <option value="vegetable">vegetable</option>
        <option value="dairy">dairy</option>
      </select>
      <button>Add Product</button>
    </form>

The next thing we should do is make sure we set up the route where this submits to.

We need to tell express to use that middleware, below `app.set("view engine", "ejs");` line, add:

    app.use(express.urlencoded({ extended: true }));

At _index.js_ file, below `app.get("/products/new", async (req, res) => {        res.render("products/new");    })` line, add:

    app.post("/products", async (req, res) => {
      console.log(req.body);
      res.send("Making your product!");
    });

Test the `/products/new` page inserting some data with integer number price.
Let's see what happens.

So now what we want to do is make an actual product with that.

And the question that we have to answer is, do we just take the entire request body and pass that through?

Do we just make product using name, price and category?
Well, that's what we want.

But what if there's something else in there? to keep things simple for now, we are going to do that.

So to make a new product, we can call new product, at _index.js_ file, replace `console.log(req.body);`to:

    new Product(req.body)

But we're not validating that everything is there and we're not checking to see if additional stuff is there that shouldn't be there.

So there's a lot of this kind of goes along with error handling and then some of the security stuff we'll see later.

There are things that we may want to do, including sanitizing, but we are jumping the gun, to be honest.

So we're just going to pass through request dot body straight from that request and make a new product.

Replace `new Product(req.body)` to:

    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(newProduct);

and as it takes time, we use `await`.

And then we need to decide what we do from there.

Will we redirect to the index to see all products or do we redirect to the show page for that one product?

Either one works often.

We'll go back to the show page so you can see everything you just created.

So maybe that's what we should do here.

Let's see if I make a new product, if it actually works.
At the `product/new` page, submit some data to verify if it works. Verify the mongoDB if the data is correctly added.

Sometimes we don't have a guarantee that it worked and you could do something invalid.

Like if you, you know, if we sent a request with a number that wasn't actually number like price was a string that was unable to be converted into a number.

Remember that with our schema we set up for product, it's going to try and cast whatever we pass as price.

It will try and cast it to a number.

And if something goes wrong, once again, we're not handling anything.

But that's okay. We're just focusing on this basic workflow.

Errors in Express are a whole different topic, but we will get there.

So we made our new product. We save it, and then we sent a message of making your product.

Well, why don't we `res.redirect`? Remember why we do this on any post request or a delete or an update?

Right now, I can just hit refresh the page and I would make another product over and over and over.

I'm just sending a post request again. So we don't want that. We never send back a web page, an HTML response from a post route.

So we're going to redirect you to a get route. Replace `res.send("Making your product!");` to:

    res.redirect(`/products/${newProduct._id}`);

Use ` instead of ' or ".

So let's see if that works. Should redirect to the show page. We can see the ID up there.

We haven't done this yet, but for the first time can stop our server entirely and restart it and our data should still be here. And it is because it's saved in a database.

It's not just a temporary array in memory.

It's a real data in a database.

And that's basically the flow for creating a new product without any additional validation, without error handling.

We've just made a simple form.

That form submits data to a post route, and in that post route we are creating a new product and we're awaiting the saving of it. And then we redirect you.

**Adding the New Product link at index page**

At `index.ejs` file, add this line at the bottom of body:

    <a href="/products/new">New Product</a>

### Updating products

Updating an individual product.

So if we're following our convention, we're going to have a get request route that will serve the edit form.

So similar to this can just duplicate this line:

    app.get("/products/new", async (req, res) => {
      res.render("products/new");
    });

but the route will be `/product/id/edit`. At `index.js file, above `app.listen(....)` line, add:

    app.get("/products/:id/edit", async (req, res) => {
      const { id } = req.params;
      const product = await Product.findById(id);
      res.render("products/edit", { product });
    });

Now let's make that form.

At /views/products directory, create a file called `edit.ejs` and I'm honestly just going to copy the `new.ejs` form over to `edit.ejs`, should be like this:

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Edit Product</title>
      </head>
      <body>
        <h1>Edit Product</h1>
        <form action="/products/<%=product._id%> method="POST">
          <label for="name">Product Name</label>
          <input type="text" name="name" id="name" placeholder="Product Name" value="<%=product.name%>"/>
          <label for="price">Price (Unit)</label>
          <input type="number" name="price" id="price" placeholder="Product Price" value="<%=product.price%>"/>
          <label for="category">Select Category</label>
          <select name="category" id="category">
            <option value="fruit">fruit</option>
            <option value="vegetable">vegetable</option>
            <option value="dairy">dairy</option>
          </select>
          <button>Submit</button>
        </form>
      </body>
    </html>

And we'll come back to the method.

Remember the whole method override thing.

But let's just get this form to populate.

Let's test, at the browser, open `/products/[someproductID]/edit`.

Now we end up with our text pre-populated here.

But what about this category here? How do I get the current category to show up?

That's actually somewhat annoying.

We will do it at the end, but for now it doesn't really matter.

So it's showing (depending on th product, may be wrong).

For now, we'll just take whatever you select when you edit and hit submit. We'll just use that.

So now let's create our end point that will submit to and we have to decide if we're doing a PUT

or a PATCH request.

And remember, the difference is that a PUT request where we're overriding or we're replacing an object

basically versus a PATCH request, we are changing a portion of an object or a portion of a document.

We could honestly get away with either one here, and I'm going to do a PUT request this time because

we are just taking everything from this form, whatever the values are, and we're just going to update

the given product with that versus later on maybe we could have a route called Change Quantity, and we don't have quantity, but we could have a single route dedicated to changing category or quantity, in which case that would be a patch request most likely.

So we can define our route here, at `index.js` above `app.listen...` line:

    app.put("/products/:id", async (req.res) =>{

    })

The problem is, as we already know from a form, we can't actually make a PUT request.

So our edit form is going to be a POST request.

(At `edit.ejs`) It's going to go to `/products/<%=product._id%>`, but then we're going to use method override.

Method override is this package we need to install and then we can tell express to use it and then we can set our own query string parameter that it should base the method override on.

So let's do that.

I'm just going to copy that line:

    app.use(methodOverride("_method"))

Let's go install method override:

So stop our server and run:

    npm i method-override

At `index.js`, we need to import that or require that.

At the top block, add:

    const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
I do like to put my middleware together for now, below `app.use(express.urlencoded({ extended: true }));` line, add:

    app.use(methodOverride("_method"));

All we need to do is make sure on our form(go to `edit.ejs`) we add that query string here where we set `_method=PUT`:

    <form action="/products/<%=product._id%>?_method=PUT" method="POST">

So that should send a put request and we can always just verify it.

If we go to our route(`index.js`). Modify

    app.put("/products/:id", async (req, res) => {

    })

to:

    app.put("/products/:id", async (req, res) => {
      console.log(req.body);
      res.send("PUT!");
    });

Do console.log of request body so we can make sure the information is coming from the form.

Let's submit this. Change the category of a product and observe what happens. Check the node log too.

So now we just need to write the logic to update a product using mongoose.

And then we have a couple of options. We're not verifying that.

We're not validating the information in that form, but we're just sending it all.

So it's kind of a lazy way of doing it, but it works for now.

Modify

    app.put("/products/:id", async (req, res) => {
      console.log(req.body);
      res.send("PUT!");
    });

To:

    app.put("/products/:id", async (req, res) => {
      const { id } = req.params;
      Product.findByIdAndUpdate(id, req.body);
      console.log(req.body);
      res.send("PUT!");
    });

Now if we go back to the documentation for Mongoose, if we go to model, look at findByIdAndUpdate, remember that this foregoes the validations by default, but we can set this option `runValidators` to be `true`.

So we definitely want to do that. It's a third argument runValidators will be true and that should be it.

    Product.findByIdAndUpdate(id, req.body, { runValidators: true });

So we can await that.

    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true });

I mean, it depends if we want to do something with this.So that does resolve hopefully with the product that was updated, although it includes the old information,which is kind of annoying.

We can do `new: true` if that's what we want. It depends on what we plan on doing.

    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });

Honestly, I don't think we're going to do anything with it except let's redirect.

Should we go back to the show page? Modify to:

    app.put("/products/:id", async (req, res) => {
      const { id } = req.params;
      const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
      res.redirect(`/products/${product._id}`);
    });

So let's see what happens. Try to update some product and verify if everything worked.

Let's just quickly add a link in on the `show.ejs` page that you can edit. At `show.ejs` add this line:

    <a href="/products/<%=product._id%>/edit">Edit Product</a>

Let's see if that works.

Also, I should probably add a back button or a button to go back to the product when you're on the edit page.

We'll just send or we'll set up a link at the bottom. Let's just go back to product or maybe just cancel. AT `edit.ejs`, bottom of body, add:

    <a href="/products/<%=product._id%>">Cancel</a>

Test if it works.

### Category selector

We're going to try and get the edit form to successfully or correctly show the current category by default so that I don't have to select it every time if I'm not trying to edit it.

So in general, outside of Express, just with a select element, (at `edit.ejs`) the way that we select a particular option is by adding an actual attribute called `selected`. It's a boolean attribute, so we don't need to set it equal to anything. If it's present on an option, that option will be selected.

So what we need to do is dynamically apply this selected attribute to one of these options based upon the product itself in what the product category is.

This is going to be a bit clunky at first, but basically our logic is going to check if on this one option, which is for fruit, if the product category is fruit, we'll add selected.

We're going to use our ejs syntax directly inside of the `option` opening tag.

And we're going to use the ternary operator.

At `edit.ejs` file, modify the correspondent lines to:

    <option value="fruit" <%=product.category === "fruit" ? "selected" : ""%>>Fruit</option>
    <option value="vegetable" <%=product.category === "vegetable" ? "selected" : ""%>>Vegetable</option>
    <option value="dairy" <%=product.category === "dairy" ? "selected" : ""%>>Dairy</option>

Try this:

    <option value="<%=product.category%>" <%=product.category === "fruit" ? "selected" : ""%>><%=product.category%></option>

If I want to add more options and have more categories, it's a bit of a nightmare.

But as I mentioned, this is kind of clunky, especially if we have more categories down the line.

So instead of typing these one at a time and having to manually check all of this, I think it would actually be best to use a loop to generate these options for me.

At `index.js`, make a list of categories, just going to hard code categories, below `app.use...` line, add:

    const categories = ["fruit", "vegetable", "dairy"];

And then I'm going to pass that through. Let's actually do it on `new.ejs` file first.

Yet at `index.js`, modify:

    app.get("/products/new", async (req, res) => {
        res.render("products/new");
    });

to:

    app.get("/products/new", async (req, res) => {
      res.render("products/new", { categories });
    });

Because in new the new form, we don't need one to be selected. But why not just iterate over those categories and make an option for each one?

At `new.ejs` file, create a iteration at `select` tag:

    <select name="category" id="category">
        <% for(let category of categories){ %>
        <option value="<%=category%>"><%=category%></option>
        <% } %>
    </select>

Open in the browser and inspect the code.

**Adding a new product**

At `index.js`, add the desired product at the `const categories` array.

Now we can reuse that sort of basically the exact same thing over on `edit.ejs`, but I want to dynamically add in the selected attribute.

At the `edit.ejs` form, replace the options with that loop for each category of my categories that I do need to pass through to that edit form.

Should be like this:

    <select name="category" id="category">
        <% for(let category of categories){ %>
        <option value="<%=category%>" <%= product.category === category ? "selected": "" %>><%=category%></option>
        <% } %>
    </select>

Now at `index.js`, pass categories in by modifying the `app.get... :id/edit`:

    app.get("/products/:id/edit", async (req, res) => {
      const { id } = req.params;
      const product = await Product.findById(id);
      res.render("products/edit", { product, categories });
    });

There are other ways of doing this eventually, but for now this is totally fine.

And let's see if it works for us.

### Deleting products

So the final piece of our CRUD puzzle, the D is delete.

So delete or destroy a single product.

Ideally, we'll have a button somewhere, probably just on the show page to delete the product.

We haven't bothered with styling and bootstrapping any of that stuff, but we can make things look nicer obviously.

But we need somewhere to put a delete button and as we've talked about before, we could just have that button send a post request to some route /product/:id/delete.

Sure, we could do that.

But the approach I like to take is to stay consistent with this pattern that we follow in our routes, where we set up a delete route for /products/:id, and we know that we can't actually make a delete request from an HTML form in the browser, but we can fake it.

We can send a post request and then add on the method override query string just like we were able to send a put request. Even though the form itself can't do that, we can fake it.

So let's set up a delete form on the show page.

We'll worry about the ordering later, but let's just put a button afterwards.

So we make a form at `show.ejs`, bottom of body:

    <form action="/products/<%=product._id%>?_method=DELETE" method="POST">
        <button>Delete</button>
    </form>

At show page in the browser if we click it, it will send this request.

But we don't have a route set up for slash product slash ID as a delete request.

You can see that from Express.

At `index.js`, above `app.listen` line, add:

    app.delete("/products/:id", async (req, res) => {
      const { id } = req.params;
      const deletedProduct = await Product.findByIdAndDelete(id);
      res.redirect("/products");
    });

Again, we don't have error handling.

We're not checking to see if that ID exists, but good enough for now.

Let's make sure it actually does what it's supposed to do, delete some product to verify if it works.

If we restart the server officially, it's not there, it's gone and that is it for our basic CRUD functionality.

So really we just plugged Mongoose into a pattern we've already seen.

What was new is setting up async route handlers and then awaiting the results of our model methods like `product.findById`, `product.save`, `product.findByIdAndUpdate` or `delete` those take time, so we `await` them.

### Filtering by category

ODM, Mongoose, understanding HTTP and requests, have to understand JavaScript, understand HTML and have to understand templating.

What if I wanted to view products by category?

(At some fruit product page) So I'm thinking maybe we just make this fruit category right here on the show page.

We'll make it a link.
I can click and it will take me to a page where I can view everything else that is considered a fruit or on this page for chocolate whole milk.

Click on dairy and it should take me to a page where I can view other dairy products.

So the first question we have to figure out is how are we going to structure the URL?

I mean, we have complete control over any of these decisions, but there are a couple of choices,

I think, that stick out to me.

One option would be something like `/categories/fruit` or `dairy`.

Another option before we talk about which one might be better would be just `/products?category=dairy`.

In both examples what I would want to do is get all products that match this category.

Now, with what we have at the moment, I think this is a better approach.

Generally, query strings are used for filtering or for searching, basically a subset of information.

(`/categories/fruit`) Whereas this where we're making categories, potentially it's own resource or at least giving it, we're elevating it to its own path here.

That might be better for us to use if categories had some features or there were a bunch of categories.

And I wanted to be able to view all the categories, or if I wanted to be able to create new categories on the fly through the application.

Honestly though, you can't really go wrong as long as you're consistent in the application with how

you follow or sort of how you lay out your routes, it's not a big deal.

So I think I'm going to go with this query string one, although actually this(`/categories/fruit`) is easier for us to implement.

You'll see the query string causes us a little bit of a headache if we leave it off.

Because right now, right, if I go to /products page , I see all products and it says all products.

So we'll need to account for that.

If we do have an actual category, we'll want to display what that category is.

Let's go to the show route, because I want to have a clickable link right at the category name so that I can get to the category.

So I'm going to make a link. At `show.ejs` page, cut(ctrl+c) `<%= product.category %>` out of the show route where I actually have category, product category in brackets. Then make an anchor tag and in the end paste`<%= product.category %>`, will look like this:

    <li>
        Category: <a href="/products?category=<%= product.category %>"></a>
    </li>

So category will equal fruit or vegetable.

And then in between the two anchor tag brackets or tags, rather, I'm going to paste that same thing in again:

    <li>
        Category:
        <a href="/products?category=<%= product.category %>"><%= product.category %></a>
    </li>

At show product page, now I see a link, I click it.

We go back to the same page products, but now we have our query string there, which we didn't have before.

So now in my route for products as a get request, I'm going to look in request, query and see if we have a category there.

At `index.js`, modify the following snippet:

    app.get("/products", async (req, res) => {
      const products = await Product.find({});
      res.render("products/index", { products });
    });

to:

    app.get("/products", async (req, res) => {
      const { category } = req.query;
      if (category) {
        const products = await Product.find({ category });
        res.render("products/index", { products, category });
      } else {
        const products = await Product.find({});
        res.render("products/index", { products, category: "All" });
      }
    });

So if there is a category, we're going to want to use that to find products that match that category.

And if there is no category in the query string, we want all products.

But let's just see what happens right now.

What I'd like to do, though, is make sure that, first of all, we display, instead of saying All Products, it should say fruit products.

At `index.ejs`, I'm going to display category right here. Modify `title` and `h1` tag:

    <title><%= category %> Products</title>

    <h1><%= category %> Products</h1>

So that allows me now to have a category than "All Products", still a little bit clunky the way we have this set up.

But it's okay for now where, you know, there's ways of reducing some of this duplication. Absolutely.

But I just want to keep this as simple as possible to follow, because this is also acting this app is acting as a reference for you around how to integrate Mongoose with Express.

So I want to keep it relatively straightforward.

What I would want to do, though, in addition to what we have set up right now so I can see all products, let's click on chocolate milk.

I can see "dairy Products", I'll probably uppercase that.

I also want to add a link just to go to see all products, but only if you're on the page for a single

category.

So only if basically if category is not equal to all.

I want to display a link to go view all so I can do that on the index template(`index.ejs`) just right here.

At `index.ejs`, bottom of body, add:

    <% if(category !== "All") {%>
        <a href="/products/">All products</a>
    <% } %>

Verify if it displays a link and firects to All Products page.

I just wanted to show adding in a somewhat new feature, it's really just adding on to the index route that we already had set up.

But now we're able to use part of the query string where we're still assuming that it's going to be a valid category.

We don't have any protection.

If you are looking at a category of, I don't know, cats or something or dogs where we don't have anything coming back from Mongoose.

But that's okay.

We do have the ability to view all products if there's no query string and then if there is a query string, few products using that query string for category.
