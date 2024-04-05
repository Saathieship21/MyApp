// const request = window.indexedDB.open('myDatabase', 1);

// request.onsuccess = function(event) {
//     const db = event.target.result;
//     const transaction = db.transaction(['registrationData'], 'readonly');
//     const store = transaction.objectStore('registrationData');
//     const request = store.get(1);
//     request.onsuccess = function(event) {
//         const data = event.target.result;
//         console.log('Data retrieved from the database:', data);
//     };
// };