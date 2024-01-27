// First task people array

var pplArray = [
    { name: 'Temo', age: 25 },
    { name: 'Lasha', age: 21 },
    { name: 'Ana', age: 28 }
  ];


// Second task function

function findYoung(users) {
    if (users.length === 0) {
      return "Not found";
    }
  
    let youngestAge = users[0].age;
    let youngestName = users[0].name;
  
    for (let i = 1; i < users.length; i++) {
      if (users[i].age < youngestAge) {
        youngestAge = users[i].age;
        youngestName = users[i].name;
      }
    }
  
    return youngestName;
  }
  
  var usersArray = [
    { name: 'Temo', age: 25 },
    { name: 'Lasha', age: 21 },
    { name: 'Ana', age: 28 }
  ];
  
  var youngestPers = findYoung(usersArray);
  console.log("The youngest person is:", youngestPers);

  // Third task

  function changeUser(originalUser) {
    const clonedUser = { ...originalUser };
  
    return clonedUser;
  }
  
  const user = {
    id: 1,
    username: 'mancho_kapanadze',
    email: 'mancho@gmail.com'
  };
  
  const newUser = changeUser(user);
  console.log(newUser);

  
  // Fourth task

  function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  function playDiceGame() {
    let rollsA = 0;
    let rollsB = 0;
  
    while (true) {
      const resultA = rollDie();
      rollsA++;
  
      const resultB = rollDie();
      rollsB++;
  
      console.log(`Roll ${rollsA}: User A rolled ${resultA}, User B rolled ${resultB}`);
  
      if (resultA === 3 || resultB === 3) {
        console.log(`Game Over`);
        console.log(`User A took ${rollsA} rolls, User B took ${rollsB} rolls.`);
  
        if (resultA === 3 && resultB !== 3) {
          console.log(`User A is the winner`);
        } else if (resultB === 3 && resultA !== 3) {
          console.log(`User B is the winner`);
        } else {
          console.log(`Both users rolled a 3.`);
        }
  
        break;
      }
    }
  }
  
  playDiceGame();
  
  
  