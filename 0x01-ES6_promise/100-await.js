import { uploadPhoto, createUser } from "./utils";

export default async function asyncUploadUser() {
    const toRtn = {};
    const photo = await uploadPhoto();
    const user = await createUser();
    if (photo) toRtn.photo = photo;
    else toRtn.photo = null;
    if (user) toRtn.user = user;
    else toRtn.user = null;
    return toRtn;
}