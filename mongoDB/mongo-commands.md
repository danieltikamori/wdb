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
