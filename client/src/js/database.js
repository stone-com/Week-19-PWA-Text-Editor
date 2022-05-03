import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('put request, update the jate db');
  // connect to the database, version 1
  const jateDB = await openDB('jate', 1);
  // new transaction, takes 2 arguments, DB we are using and the data priveleges
  const tx = jateDB.transaction('jate', 'readwrite');
  // create object store
  const store = tx.objectStore('jate');
  // use put method to add in id and value
  const request = store.put({ id: id, value: value });
  // await req and save to result variable, then console log to confirm it was saved
  const result = await request;
  console.log('data was saved to the jate database.', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // request to get all from the daabase
  console.log('Getting all data from Jate database!');
  // connect to jate db version 1
  const jateDB = await openDB('jate', 1);
  // new transaction with jate db and readwrite data priveleges
  const tx = jateDB.transaction('jate', 'readwrite');
  // new object store
  const store = tx.objectStore('jate');
  // get all content from the db with the getALL method.
  const request = store.getAll();
  // await req and save to result variable, then console log to confirm it was saved
  const result = await request;
  console.log('data was saved to the jate database.', result);
};

initdb();
