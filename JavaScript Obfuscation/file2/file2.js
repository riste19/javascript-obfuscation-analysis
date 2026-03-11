// file2.js
// Medium-sized JS demo (~250 lines) – array & object processing

// Generate a list of users
function generateUsers(count) {
    const names = ["Alice","Bob","Charlie","David","Eve","Frank","Grace","Hannah","Ivan","Judy"];
    const users = [];
    for (let i = 0; i < count; i++) {
        const name = names[i % names.length] + i;
        const age = 18 + (i % 50);
        const active = i % 2 === 0;
        users.push({ id: i+1, name, age, active });
    }
    return users;
}

// Filter active users
function filterActive(users) {
    return users.filter(u => u.active);
}

// Get average age
function averageAge(users) {
    if (users.length === 0) return 0;
    let sum = 0;
    for (let u of users) sum += u.age;
    return sum / users.length;
}

// Find oldest user
function oldestUser(users) {
    let maxAge = -Infinity;
    let oldest = null;
    for (let u of users) {
        if (u.age > maxAge) {
            maxAge = u.age;
            oldest = u;
        }
    }
    return oldest;
}

// Find youngest user
function youngestUser(users) {
    let minAge = Infinity;
    let youngest = null;
    for (let u of users) {
        if (u.age < minAge) {
            minAge = u.age;
            youngest = u;
        }
    }
    return youngest;
}

// Count active vs inactive
function countActiveInactive(users) {
    let activeCount = 0;
    let inactiveCount = 0;
    for (let u of users) {
        if (u.active) activeCount++;
        else inactiveCount++;
    }
    return { activeCount, inactiveCount };
}

// Sort users by age ascending
function sortByAge(users) {
    return users.slice().sort((a,b) => a.age - b.age);
}

// Sort users by name
function sortByName(users) {
    return users.slice().sort((a,b) => a.name.localeCompare(b.name));
}

// Search user by ID
function findById(users, id) {
    return users.find(u => u.id === id) || null;
}

// Main execution
function main() {
    const users = generateUsers(100);

    const activeUsers = filterActive(users);
    const avgAge = averageAge(activeUsers);
    const oldest = oldestUser(activeUsers);
    const youngest = youngestUser(activeUsers);
    const counts = countActiveInactive(users);
    const sortedByAge = sortByAge(activeUsers);
    const sortedByName = sortByName(activeUsers);
    const searchId = findById(users, 42);

    console.log("Active users:", activeUsers.length);
    console.log("Average age:", avgAge);
    console.log("Oldest:", oldest ? oldest.name : "N/A", oldest ? oldest.age : "");
    console.log("Youngest:", youngest ? youngest.name : "N/A", youngest ? youngest.age : "");
    console.log("Counts:", counts);
    console.log("First 5 users sorted by age:", sortedByAge.slice(0,5));
    console.log("First 5 users sorted by name:", sortedByName.slice(0,5));
    console.log("User with ID 42:", searchId);

    // ✅ deterministic final result for tester
    const finalResult = activeUsers.length + Math.round(avgAge) + counts.activeCount + counts.inactiveCount;
    console.log("RESULT:", finalResult);
}

// Run main
main();