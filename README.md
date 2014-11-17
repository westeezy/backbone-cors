backbone-cors
=============

Demo:
http://westinwrz.me/backbone-cors/app/index.html

IE 9 Note:
http://stackoverflow.com/questions/12468741/cors-with-internet-explorer-support-for-basic-authentication

Make sure mongo is installed

backend
---------------
```brew install mongo```
  - then follow the steps for starting it as a service

```cd server```

```npm install```

```node dataGen.js```
  - uses faker to populate some fake db data. 
  
```node server.js```

frontend
---------------
```bower install```

```grunt serve```


Useful commands
---------------

```brew install httpie```

```http POST http://localhost:1337/oauth/token grant_type=password client_id=mobileV1 client_secret=abc123456 username=user password=password -v```

```http http://localhost:1337/api/userinfo Authorization:'Bearer <ACCESS_TOKEN>'````

