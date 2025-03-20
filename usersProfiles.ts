interface BaseUser {
    id: number;
    name: string;
    email: string;

}

interface GuestUser extends BaseUser {
    guestSessionId: number;
}

interface RegisteredUser extends BaseUser {
    profile: string;
    lastLoggedIn: Date;
}

type User = GuestUser | RegisteredUser;

function displayUserInfo(user: User) {
    if ("profile" in user) {
        console.log("Profile:", user.profile);
    } else {
        console.log("Guest session ID:", user.guestSessionId);
    }
}

function updateUserProfile(user: User, newProfile: string) {
    if ("profile" in user) {
        user.profile = newProfile;
    }
    else {
        console.log("Cannot update profile for guest users");
    }
}

// Example Usage
const guest: GuestUser = { id: 1, name: "Alice", email: "alice@example.com", guestSessionId: 12345 };
const registered: RegisteredUser = { id: 2, name: "Bob", email: "bob@example.com", profile: "Developer", lastLoggedIn: new Date() };

displayUserInfo(guest); // Expected Output: Guest session ID: 12345
displayUserInfo(registered); // Expected Output: Profile: Developer

updateUserProfile(registered, "Senior Developer");
console.log(registered.profile); // Expected Output: Senior Developer

updateUserProfile(guest, "New Profile"); // Expected Output: Cannot update profile: This user is a guest.