function loginScope(){
    let access = false;
    const users = [
        {username: "Isaque", password: "1234", attempts: 0},
        {username: "admin", password: "admin", attempts: 0}
    ];

    function login(username, password){
        const user = users.find(u => u.username == username);
        //const passcode = users.find(u => u.password == password);

        if(!user){
            access = false;
            console.log('User not found');
            return;
        }    
        if(user.attempts >= 3){
                console.log('Account locked');
                return;
            }   
        if(user.password === password){
            access = true;
            user.attempts = 0;
            console.log('Login sucessful');
            return;
        } else {
            user.attempts++;
            console.log('Password incorrect');

            if(user.attempts >= 3){
                console.log('Account locked')
            }
            return;
        }
    };
    return { login }
};    

const system = loginScope();

system.login('Isaque', '1234');