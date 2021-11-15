/* eslint-disable prettier/prettier */
// import apiClient from 'services/axios';

// export async function getBranch(userId) {
//   return apiClient
//     .get(`/restaurants/user/${userId}`)
//     .then(response => {
//       if (response) {
//         return response.data.result[0].restaurants;
//       }
//       return false;
//     })
//     .catch(err => console.log(err));
// }

// export async function getBranchByRestaurantId(id) {
//   return apiClient
//     .get(`/restaurants/${id}`)
//     .then(response => {
//       if (response) {
//         return response.data;
//       }
//       return false;
//     })
//     .catch(err => console.log(err));
// }

// export async function addBranch(
//   cityId,
//   currencyId,
//   name,
//   // nameSe,
//   image,
//   slug,
//   // isActive,
//   defauldeliveryTime,
//   defaulServingTime,
//   lat,
//   long,
//   description,
//   // descriptionSe,
//   address,
//   // addressSe,
//   website,
//   dinein,
//   takeaway,
//   provideDelivery,
//   provideReservation,
//   priceRange,
//   tagIds,
//   dineinService,
//   takeawayService,
//   moms,
//   regNo,
// ) {
//   return apiClient
//     .post(`/restaurants`, {
//       cityId,
//       currencyId,
//       name,
//       // nameSe,
//       image,
//       slug,
//       // isActive,
//       defauldeliveryTime,
//       defaulServingTime,
//       lat,
//       long,
//       description,
//       // descriptionSe,
//       address,
//       // addressSe,
//       website,
//       dinein,
//       takeaway,
//       provideDelivery,
//       provideReservation,
//       priceRange,
//       tagIds,
//       dineinService,
//       takeawayService,
//       moms,
//       regNo,
//     })
//     .then(response => {
//       if (response) {
//         return response.data;
//       }
//       return false;
//     })
//     .catch(err => console.log('Error = ', err));
// }
// export async function updateBranchActive(id, isActive) {
//   return apiClient
//     .patch(`/restaurants/${id}/active`, {
//       isActive,
//     })
//     .then(response => {
//       if (response) {
//         return response.data;
//       }
//       return false;
//     })
//     .catch(err => console.log('Error = ', err));
// }

// export async function updateBranchPublished(id, isPublished) {
//   return apiClient
//     .patch(`/restaurants/${id}/publish`, {
//       isPublished,
//     })
//     .then(response => {
//       if (response) {
//         return response.data;
//       }
//       return false;
//     })
//     .catch(error => {
//       console.log('Error = ', error);
//       return false;
//     });
// }

// export async function deleteBranch(id) {
//   return apiClient
//     .delete(`/settings/plans/${id}`, {})
//     .then(response => {
//       if (response) {
//         return response.data;
//       }
//       return false;
//     })
//     .catch(err => console.log('Error = ', err));
// }

// export async function updateBranch(
//   id,
//   name,
//   // nameSe,
//   // isActive,
//   defauldeliveryTime,
//   defaulServingTime,
//   description,
//   // descriptionSe,
//   lat,
//   long,
//   takeaway,
//   dinein,
//   provideReservation,
//   provideDelivery,
//   priceRange,
//   address,
//   // addressSe,
//   website,
//   image,
//   tagIds,
//   currencyId,
//   dineinService,
//   takeawayService,
//   moms,
//   regNo,
// ) {
//   console.log('Service = ', defauldeliveryTime, defaulServingTime);
//   return apiClient
//     .put(`/restaurants/${id}`, {
//       name,
//       // nameSe,
//       // isActive,
//       defauldeliveryTime,
//       defaulServingTime,
//       description,
//       // descriptionSe,
//       lat,
//       long,
//       takeaway,
//       dinein,
//       provideReservation,
//       provideDelivery,
//       priceRange,
//       address,
//       // addressSe,
//       website,
//       image,
//       tagIds,
//       currencyId,
//       dineinService,
//       takeawayService,
//       moms,
//       regNo,
//     })
//     .then(response => {
//       if (response) {
//         return response.data;
//       }
//       return false;
//     })
//     .catch(err => console.log('Error = ', err));
// }
