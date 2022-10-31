// import { createSlice } from '@reduxjs/toolkit';

// const initialState = [];

// export const bookInfo = createSlice({
//   name: 'pages',
//   initialState,
//   reducers: {
//     books(state, action) {
//       const details = action.payload.map((room) => ({
//         name: room.name,
//         number_of_beds: room.number_of_beds,
//         picture: room.picture,
//         description: room.description,
//         price: room.price,
//       }));
//       return details;
//     },

//   },
// });

// export const pageActions = bookInfo.actions;

// const addBookEndpoint = 'http://localhost:3000/add_book';

// const options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     name: 'Test Title',
//     number_of_beds: '',
//     picture: 'Test Author',
//     price: '',
//     description: '',
//   }),
// };

// const response = await fetch(addBookEndpoint, options);
// const jsonResponse = await response.json();
// console.log(jsonResponse);
