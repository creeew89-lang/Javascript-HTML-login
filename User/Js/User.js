let tries = 0;
const correctEmail = "admin@example.com";
const correctPassword = "123456";
const maxTries = 3;

function loginAttempt() {
    if (tries >= maxTries) {
        alert("Too many failed attempts! Try again in 30 seconds.");
        let seconds = 30;
        const countdown = setInterval(() => {
            if (seconds > 0) {
                console.log("Please wait... " + seconds + " seconds left");
                seconds--;
            } else {
                clearInterval(countdown);
                alert("You can try again now.");
                tries = 0;
                setTimeout(() => {
                    let password = prompt("Enter your password:");
                    if (password === null) {
                        alert("Login cancelled.");
                        return;
                    }
                    if (password === correctPassword) {
                        alert("Login successful! Welcome!");
                    } else {
                        tries++;
                        if (tries < maxTries) {
                            alert("Wrong password. Please try again.");
                            loginAttempt();
                        } else {
                            loginAttempt();
                        }
                    }
                }, 100);
            }
        }, 1000);
        return;
    }

    let email = prompt("Enter your email:");
    let password = prompt("Enter your password:");

    if (email === null || password === null) {
        alert("Login cancelled.");
        return;
    }

    if (email === correctEmail && password === correctPassword) {
        alert("Login successful! Welcome!");
    } else {
        tries++;
        if (tries < maxTries) {
            alert("Wrong email or password. Please try again.");
            loginAttempt();
        } else {
            loginAttempt();
        }
    }
}

loginAttempt();