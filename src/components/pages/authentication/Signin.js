import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import { useSession } from '../../../contexts/session';
import { spaceless } from '../../../helpers/utils';
import Authenticator from '../../../apis/authenticator';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const { login } = useSession();

  const onEmailChange = ({ target }) => {
    setEmail(spaceless(target.value));
  };
  const onPasswordChange = ({ target }) => {
    setPassword(target.value);
  };
  const onSubmit = (evt) => {
    evt.preventDefault();
    setDisabled(true);

    Authenticator.login({ user: { email, password } })
      .then(login)
      .catch(() => setDisabled(false));
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[320px] space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=400"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Signin portal
          </h2>
        </div>

        <form className="mt-8 space-y-6" action="#" onSubmit={onSubmit}>
          <div className="mb-6 rounded-md shadow-1bs">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={onEmailChange}
              autoComplete="email"
              disabled={disabled}
              required
              className="relative block w-full appearance-none rounded-md border-none px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email"
            />
          </div>

          <div className="mb-8 rounded-md shadow-1bs">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={onPasswordChange}
              autoComplete="current-password"
              disabled={disabled}
              required
              className="relative block w-full appearance-none rounded-md border-none px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password"
            />
          </div>

          {!disabled && (
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <NavLink
                  to="/reset-password"
                  className="font-medium text-indigo-600 rounded-sm py p-1 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Forgot your password?
                </NavLink>
              </div>

              <div className="text-sm">
                <NavLink
                  to="/register"
                  className="font-medium text-white bg-green-c4 shadow-1bs rounded-lg p-1.5 px-2.5 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2"
                >
                  Sign up?
                </NavLink>
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={disabled}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {
                disabled ? (
                  <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : (
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                  </span>
                )
              }
              {disabled ? 'Processing...' : 'Continue'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
