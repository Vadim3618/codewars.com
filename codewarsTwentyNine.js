//If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...



function friend(friends) {

   return friends.filter(i => (i.length === 4))

}

console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man", "Dima"]))//["Ryan", "Dima"]