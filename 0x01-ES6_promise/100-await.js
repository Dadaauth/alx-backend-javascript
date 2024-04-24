import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const toRtn = {};
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    toRtn.photo = photo;
    toRtn.user = user;
  } catch (err) {
    toRtn.photo = null;
    toRtn.user = null;
  }
  return toRtn;
}
