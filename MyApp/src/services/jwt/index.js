/* eslint-disable prettier/prettier */
import apiClient from 'services/axios';
import store from 'store';

export async function login(email, password, device_name) {
  return apiClient
    .post('/sanctum/token', {
      email,
      password,
      device_name,
    })
    .then(response => {
      if (response) {
        const {accessToken} = response.data.token;
        if (accessToken) {
          store.set('accessToken', accessToken);
        }
        return response.data.user;
      }
      return false;
    })
    .catch(err => console.log(err));
}

// export async function register(email, password, name) {
//   return apiClient
//     .post('/auth/register', {
//       email,
//       password,
//       name,
//     })
//     .then(response => {
//       if (response) {
//         const {accessToken} = response.data;
//         if (accessToken) {
//           store.set('accessToken', accessToken);
//         }
//         return response.data;
//       }
//       return false;
//     })
//     .catch(err => console.log(err));
// }

// export async function currentAccount() {
//   return apiClient
//     .get('/auth/account')
//     .then(response => {
//       if (response) {
//         const {accessToken} = response.data;
//         if (accessToken) {
//           store.set('accessToken', accessToken);
//         }
//         return response.data;
//       }
//       return false;
//     })
//     .catch(err => console.log(err));
// }

// export async function logout() {
//   store.remove('accessToken');
//   store.remove('selectedRestaurant');
//   return true;
//   // return apiClient
//   //   .get('/auth/logout')
//   //   .then(() => {
//   //   })
//   //   .catch(err => console.log(err))
// }

// export async function updateUserProfile(
//   firstName,
//   lastName,
//   phoneNumber,
//   email,
// ) {
//   return apiClient
//     .put(`/users/`, {
//       firstName,
//       lastName,
//       email,
//       phoneNumber,
//     })
//     .then(response => {
//       if (response) {
//         return response.data;
//       }
//       return false;
//     })
//     .catch(err => console.log('Error = ', err));
// }

// export async function ChangeUserPassword(
//   oldPassword,
//   newPassword,
//   confirmNewPassword,
// ) {
//   console.log('olPassword = ', oldPassword);
//   return apiClient
//     .post(`/users`, {
//       oldPassword,
//       newPassword,
//       confirmNewPassword,
//     })
//     .then(response => {
//       if (response) {
//         return response.data;
//       }
//       return false;
//     })
//     .catch(err => console.log('Error = ', err));
// }
