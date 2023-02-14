# Most commonly used mongoDB commands

Refer: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/

## Starting on Ubuntu

First, discover the init system:
`ps --no-headers -o comm 1`

Usually it is systemd(systemctl).
Following commands are based on systemd. If different, refer to mongoDB docs.

### 1 After the installation, start mongoDB:

`sudo systemctl start mongod`

If you receive an error similar to the following when starting mongod:
Failed to start mongod.service: Unit mongod.service not found.

Run the following command first:  
`sudo systemctl daemon-reload`

Then run the start command above again.

### 2 Verify that MongoDB has started successfully.

`sudo systemctl status mongod`

You can optionally ensure that MongoDB will start following a system reboot by issuing the following command:

`sudo systemctl enable mongod`

### 3 Stop MongoDB.

As needed, you can stop the mongod process by issuing the following command:

`sudo systemctl stop mongod`

### 4 Restart MongoDB.

You can restart the mongod process by issuing the following command:

`sudo systemctl restart mongod`

You can follow the state of the process for errors or important messages by watching the output in the /var/log/mongodb/mongod.log file.

### 5 Begin using MongoDB.

Start a mongosh session on the same host machine as the mongod. You can run `mongosh` without any command-line options to connect to a mongod that is running on your localhost with default port 27017.

`mongosh`

For more information on connecting using `mongosh`, such as to connect to a mongod instance running on a different host and/or port, see the `mongosh` documentation.

To help you start using MongoDB, MongoDB provides Getting Started Guides in various driver editions. For the driver documentation, see Start Developing with MongoDB.

## Uninstall MongoDB Community Edition

To completely remove MongoDB from a system, you must remove the MongoDB applications themselves, the configuration files, and any directories containing data and logs. The following section guides you through the necessary steps.
Warning

This process will completely remove MongoDB, its configuration, and all databases. This process is not reversible, so ensure that all of your configuration and data is backed up before proceeding.

### 1 Stop MongoDB.

Stop the mongod process by issuing the following command:

`sudo service mongod stop`

### 2 Remove Packages.

Remove any MongoDB packages that you had previously installed.

`sudo apt-get purge mongodb-org*`

### 3 Remove Data Directories.

Remove MongoDB databases and log files.

`sudo rm -r /var/log/mongodb`
`sudo rm -r /var/lib/mongodb`

## After started mongosh session

Refer: https://www.mongodb.com/docs/manual/reference/method/

Creating a DB:

> `use [dbname]`

Then a collection should be created. Uses objects and if want to create many entries, it must be a array`[{data0}, {data1}, {data2}]`. Use these methods: `insertOne()`, `insertMany()`.

Creating and inserting data to a collection:
`db.[collectionName].insertOne({name: "Tony", age: 4, admin: false})` // example of data.

It will create the collection automatically if it doesn't exists.

To see the collections created, use show collections:
`show collections`

To see the collection content:  
`db.[collectionName].find()`

## Finding / Querying

Use to show everything in the collection(returns a cursor):  
`db.[collectionName].find()`

### Specific querying:

`db.dogs.find({breed: "Corgi"})` //example

## Updating data

Refer: https://www.mongodb.com/docs/manual/reference/method/db.collection.updateOne/#mongodb-method-db.collection.updateOne

https://www.mongodb.com/docs/manual/reference/method/db.collection.updateMany/#mongodb-method-db.collection.updateMany

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

Refer: https://www.mongodb.com/docs/manual/reference/method/db.collection.deleteOne/#mongodb-method-db.collection.deleteOne

https://www.mongodb.com/docs/manual/reference/method/db.collection.deleteMany/#mongodb-method-db.collection.deleteMany

`db.collection.deleteOne()` - Deletes a single document in a collection.  
`db.collection.deleteMany()` - Deletes multiple documents in a collection.

> `db.collection.deleteMany(filter)`  
> `db.collection.deleteMany({})` - deletes EVERYTHING.

### Using fancy operators

Refer: https://www.mongodb.com/docs/manual/reference/operator/

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

Refer: https://www.mongodb.com/docs/manual/reference/operator/query/

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
Refer: https://www.mongodb.com/docs/manual/reference/operator/update/

**Aggregation Pipeline Stages**  
Refer: https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline/

**Aggregation Pipeline Operators**  
Refer: https://www.mongodb.com/docs/manual/reference/operator/aggregation/

## Connecting Mongoose to MongoDB

Mongoose is an ODM - Object data/document mapper.  
Refer: https://mongoosejs.com/docs/

### Beginning

**Installing Mongoose on a project**

==First be sure you have MongoDB and Node.js installed.==  
In the project folder:  
`npm i mongoose`
