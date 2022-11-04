import React from 'react';
import { Link } from 'react-router-dom';

const SplashScreen = () => (
  <>
    <div className="relative flex flex-col gap-8 sm:gap-20 items-center justify-center px-5 w-full h-screen bg-[url('https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_960_720.jpg')] bg-no-repeat bg-cover">
      <div className="opacity-70 absolute b-0 t-0 h-[100%] w-[100%]  bg-slate-900" />
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-white-500 to-green-500 py-6 text-center text-3xl sm:text-7xl font-extrabold z-10">Hotel Booking App</h2>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          className="bg-indigo-500 text-white z-10 hover:bg-indigo-700 rounded-md shadow-md px-5 py-3 w-60 text-center mx-4 sm:w-auto"
          to="/login"
        >
          Sign-in
        </Link>
        <Link
          className="bg-green-500 text-white z-10 hover:bg-green-700 rounded-md shadow-md px-5 py-3 w-60 text-center mx-4 sm:w-auto"
          to="/register"
        >
          Sign-up
        </Link>
      </div>
    </div>
  </>
);

export default SplashScreen;
