import handleProfileSignup from './6-final-user';


const wait = async () => {
    console.log(await handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));
}


wait();