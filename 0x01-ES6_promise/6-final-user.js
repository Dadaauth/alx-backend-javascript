import signUpUser from './4-user-promise.js'; // Assuming 4-user-promise.js is in the same directory
import uploadPhoto from './5-photo-reject.js'; // Assuming 5-photo-reject.js is in the same directory

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const answer = await Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
  for (const v of answer) {
    if (v.status === 'rejected') {
        v.value = `Error: ${v.reason.message}`;
        delete v.reason;
    }
  }
  return answer;
}
