import handleProfileSignup from './6-final-user';

const handle = async () => {
    console.log(await handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));
}

handle();