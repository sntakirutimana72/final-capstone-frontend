import { useState } from 'react';
import { spaceless } from '../../../helpers/utils';
import Authenticator from '../../../apis/authenticator';
import { useSession } from '../../../contexts/session';

const Register = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const { login } = useSession();

  const onUserNameChange = ({ target }) => {
    setUserName(target.value.trim());
  };
  const onEmailChange = ({ target }) => {
    setEmail(spaceless(target.value));
  };
  const onPasswordChange = ({ target }) => {
    setPassword(target.value);
  };
  const onSubmit = (evt) => {
    evt.preventDefault();
    setDisabled(true);

    Authenticator.register({ user: { email, password, username } })
      .then(login)
      .catch(() => setDisabled(false));
  };

  return (
    <div className="flex min-h-full items-center justify-center min-h-screen py-6 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[300px] space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=400"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Signup portal
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" onSubmit={onSubmit}>
          <div className="mb-6 rounded-md shadow-1bs">
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              name="username"
              type="text"
              value={username}
              onChange={onUserNameChange}
              autoComplete="username"
              required
              className="relative block w-full appearance-none rounded-md border-none px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Username"
            />
          </div>

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
              required
              className="relative block w-full appearance-none rounded-md border-none px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email"
            />
          </div>

          <div className="mb-6 rounded-md shadow-1bs">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={onPasswordChange}
              autoComplete="current-password"
              required
              className="relative block w-full appearance-none rounded-md border-none px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password"
            />
          </div>

          <div className="pt-6">
            <button
              type="submit"
              disabled={disabled}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-c4 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {
                disabled ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Please wait...
                  </>
                ) : (
                  <>Continue</>
                )
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
