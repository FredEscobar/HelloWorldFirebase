import * as functions from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  var a=1, b=2;
  var result = a != b;
  console.log(result);
  response.send("Hello from Firebase!");
});
