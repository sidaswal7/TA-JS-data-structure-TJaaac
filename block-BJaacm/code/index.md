```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![name](./hello.jpg) -->

2. Answer the following with reason:

- `user == newUser;` // true - newUser contains same address as the user so values will be equal 
- `user === newUser;`// True -same as above
- `user.name === newUser.name;`//True - Both have same address and value
- `user.name == newUser.name;`//True
- `user.sibling == newUser.sibling;`//True
- `user.sibling === newUser.sibling;`// True
- `user.sibling == allBrothers;`//False - the address is different
- `user.sibling === allBrothers;`// false
- `brothersCopy === allBrothers;`//False - Both have different address
- `brothersCopy == allBrothers;`// False
- `brothersCopy == user.sibling;`// True - The address is same 
- `brothersCopy === user.sibling;`// True
- `brothersCopy[0] === user.sibling[0];`//True
- `brothersCopy[1] === user.sibling[1];`//True
- `user.sibling[1] === newUser.sibling[1];`//True
