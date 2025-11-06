

// Type your code below this line!
function FriendsList() {
  this.friends = []
}
// Type your code above this line!
const count = parseInt(process.argv[3])
const myList = new FriendsList()

for (let i = 0; i < count; i++) {
  myList.friends.push(process.argv[4 + i])
}
// Cuando usas new FriendsList(), se crea un objeto con una propiedad names, que es un arreglo vacío.
console.log(myList.friends)


