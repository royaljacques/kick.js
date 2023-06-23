### kick.js
simple api to connect to the kick chat. 

# get started 

- picked up your cat id
- try : 
```js
const app = require('better_kickchat.js')
const kick = new app.default(Channel_ID)
kick.connect()
kick.on('messages', (data) => {
    console.log(data.content)
    }
)
```
