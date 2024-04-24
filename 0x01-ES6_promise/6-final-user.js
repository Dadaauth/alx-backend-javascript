import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

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
