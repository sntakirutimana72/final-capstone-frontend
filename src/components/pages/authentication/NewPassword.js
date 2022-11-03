import { useState } from 'react';

const NewPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onPasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  const onConfirmPasswordChange = ({ target }) => {
    setConfirmPassword(target.value);
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Set new password
            </h2>
          </div>

          <form className="mt-8 space-y-6" action="#">
            <div className="mb-6 rounded-md shadow-sm">
              <label htmlFor="password" className="sr-only">
                New password
              </label>
              <input
                name="password"
                type="password"
                value={password}
                onChange={onPasswordChange}
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="New password"
              />
            </div>

            <div className="mb-8 rounded-md shadow-sm">
              <label htmlFor="confirm-password" className="sr-only">
                Confirm new password
              </label>
              <input
                name="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={onConfirmPasswordChange}
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Confirm new password"
              />
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewPassword;
