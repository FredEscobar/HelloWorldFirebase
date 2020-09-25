import * as functions from 'firebase-functions';
import { HelloWorldService } from './HelloWorld/HelloWorldService'

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

let helloWorldService = new HelloWorldService('');

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});

  response.send(helloWorldService.sayHi());
});
