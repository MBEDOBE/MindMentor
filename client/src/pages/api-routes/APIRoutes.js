export const host = "http://localhost:4001";
export const registerRoute = `${host}/api/auth/register`;
export const loginRoute = `${host}/api/auth/login`;
export const logoutRoute = `${host}/api/auth/logout`;
export const allUsersRoute = `${host}/api/auth/allusers`;
<<<<<<< HEAD
export const sendMessageRoute = `${host}/api/messages/addmsg`;
export const recieveMessageRoute = `${host}/api/messages/getmsg`;
export const setAvatarRoute = `${host}/api/auth/setavatar`;
=======
export const UserRoute = `${host}/api/auth/user`;
export const createChatRoute = `${host}/chat`;
export const userChatRoute = `${host}/chat/:userId`;
export const findChathatRoute = `${host}/chat/find/:firstId/:secondId`;
export const addMessageRoute = `${host}/message/`;
export const getMessageRoute = `${host}/message/:chatId`;
>>>>>>> 78b5e290ff1856087f834c56774545888a03cf8d
