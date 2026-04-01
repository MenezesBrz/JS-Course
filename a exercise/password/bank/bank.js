function bankScope(){
    const accounts = [];
   function createAccount(name){
        const account = {  
            
            id: accounts.length + 1,
            name: name,
            balance: 0,
            history: []
            
        };
        
        accounts.push(account);
   }; 

   function deposit(id, amount){
        const account = accounts.find(acc => acc.id === id);
        if (!account) {
          console.log('Account not found');
          return;
        }
        if(amount <= 0){
           return console.log('It must have a value');
        }

        account.history.push(`Deposited ${amount};`)

        account.balance += amount;
        return account.balance;      
   };

   function withdraw(id, amount){
        const account = accounts.find(acc => acc.id === id);
        if (!account) {
          console.log('Account not found');
          return;
        }
        if(amount > account.balance){
           return console.log('Withdraw denied');
        };

        account.history.push(`Withdrew ${amount}`);

        account.balance -= amount;
        return account.balance;
   };

   function transfer(fromId, toId, amount){
        const fromAccount = accounts.find(acc => acc.id === fromId);
        const toAccount = accounts.find(acc => acc.id === toId);
        if (!fromAccount) {
          console.log('Account not found');
          return;
        } if (!toAccount) {
          console.log('Account not found');
          return;
        }
        if(amount > fromAccount.balance){
           return console.log('Transfer denied')
        } if(amount <= 0){
          return console.log('Transfer denied');
        };

        fromAccount.history.push(`${fromId} has transferred ${amount} to ${toId}`);
        toAccount.history.push(`${toId} has received ${amount} from ${fromId}`);

        fromAccount.balance -= amount;
        toAccount.balance += amount;
   }

   function getBalance(id){
     const account = accounts.find(acc => acc.id === id);
     if(!account){
          console.log('Account not found');
          return;
     }
     return account.balance;
   }

   function getHistory(id){
     const account = accounts.find(acc => acc.id === id);

     if(!account){
          console.log('Account not found');
          return;
     }

     return account.history;
   }

   return {
     createAccount,
     deposit,
     withdraw,
     transfer,
     getBalance,
     getHistory
   };
}

const bank = bankScope();

bank.createAccount("Isaque");
bank.deposit(1, 500);

console.log(bank.getBalance(1));
