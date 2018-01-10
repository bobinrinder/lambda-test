'use strict';

 exports.post = function(event, context) {
   context.succeed({
     statusCode: 200,
     body: 'Hello Robin',
     headers: {'Content-Type': 'text/html'}
   });
 };
