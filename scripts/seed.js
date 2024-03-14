const { db } = require('@vercel/postgres');


async function createTableIfNotExists(client, tableName, schema) {
  await client.query(`CREATE TABLE IF NOT EXISTS ${tableName} (${schema});`);
  console.log(`Created "${tableName}" table`);
}

async function main() {
  const client = await db.connect();

  try {
    await Promise.all([
      createTableIfNotExists(client, 'users', 'id VARCHAR(1055) PRIMARY KEY, storeId VARCHAR(2550) NOT NULL, email TEXT NOT NULL UNIQUE, password TEXT NOT NULL, type VARCHAR(255)'),
      createTableIfNotExists(client, 'stores', 'id VARCHAR(255) PRIMARY KEY , name VARCHAR(255) NOT NULL, logo INT NOT NULL, banner VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL,categoryId VARCHAR(255) NOT NULL ,userId VARCHAR(2550)  '),
      createTableIfNotExists(client, 'categories', 'id VARCHAR(255) PRIMARY KEY, categoryName VARCHAR(255) NOT NULL'),
      createTableIfNotExists(client, 'userTypes', 'id VARCHAR(255) PRIMARY KEY, typeName VARCHAR(255) NOT NULL'),
      createTableIfNotExists(client, 'products', 'id VARCHAR(255) PRIMARY KEY, title VARCHAR(255) NOT NULL,description VARCHAR(255) NOT NULL,price NUMERIC , quantity NUMERIC ,images VARCHAR(1255) NOT NULL,specifications VARCHAR(255) NOT NULL,storId VARCHAR(255) NOT NULL'),
      createTableIfNotExists(client, 'orders', 'id VARCHAR(255) PRIMARY KEY, productId VARCHAR(255) NOT NULL,status VARCHAR(255) NOT NULL,shippingMethod VARCHAR(255) NOT NULL,buyerId VARCHAR(255) NOT NULL,sellerId VARCHAR(255) NOT NULL'),
      createTableIfNotExists(client, 'shipping', 'id VARCHAR(255) PRIMARY KEY, trackingInfo VARCHAR(255) NOT NULL,orderId VARCHAR(255) NOT NULL'),
      createTableIfNotExists(client, 'payments', 'id VARCHAR(255) PRIMARY KEY, orderId VARCHAR(255) NOT NULL,amount VARCHAR(255) NOT NULL,status VARCHAR(255) NOT NULL')
     

    ]);

    console.log('Successfully created tables!');
  } catch (error) {
    console.error('An error occurred while attempting to create tables:', error);
  } finally {
    await client.end();
  }
}

main();
