function loginScope(){
    let currentUser = null;
    const users = [
        {username: "Isaque", password: "1234", attempts: 0, role: "user"},
        {username: "admin", password: "admin", attempts: 0, role: "admin"}
    ];

    function login(username, password){
        const user = users.find(u => u.username === username);
        //const passcode = users.find(u => u.password == password);

        if(!user){
            console.log('User not found');
            return;
        }    
        if(user.attempts >= 3){
                console.log('Account locked');
                return;
            }   
        if(user.password === password){
            user.attempts = 0;
            console.log('Login sucessful');
            currentUser = user;
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

    function getAllUsers(){
        if(!currentUser || currentUser.role !== 'admin'){
            console.log('Access denied');
            return;
        }

        console.log(users);
    }

    function getCurrentUser(){
        return currentUser;
    }

    function getProfile(){
        if(!currentUser){
            console.log('Access denied');
            return;
        }

        console.log(currentUser.username);
    }

    function logout(){
        currentUser = null;
        console.log('Logged out');
    }

    function register(username, password){
        const userExist = users.find(u => u.username === username)

        if(userExist){
            console.log('User already exists');
            return;
        } else {
            console.log('User created successfully')
        }

        users.push({
            username: username,
            password: password,
            attempts: 0,
            role: 'user'
        });
    }

    return { 
        login,
        register,
        getCurrentUser,
        getProfile,
        logout,
        getAllUsers
     }
};    

const system = loginScope();

system.login('admin', 'admin');
system.getAllUsers()
system.register('Neymar', '1234')
system.getProfile();
