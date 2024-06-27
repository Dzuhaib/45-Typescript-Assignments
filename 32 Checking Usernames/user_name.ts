let current_users: string[] = ['Zuhaib Ahmed', 'Hamza', 'Shabbir Afridi', 'Sameer', 'Arsalan'];

let new_users: string[] = ['Shafqat', 'Deedar', 'Attaullah', 'Habibullah', 'Sagar']; 

for (let new_username of new_users) {
    if (current_users.indexOf(new_username)) {
        console.log(`The username '${new_username}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${new_username}' is available.`);
    }
}
