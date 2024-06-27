let usernames: string[] = []; // Empty array

// Check if the list of users is not empty
if (usernames.length > 0) {
  // Loop through the array and print greetings
  for (let username of usernames) {
    if (username === 'admin') {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
} else {
  console.log("We need to find some users!");
}