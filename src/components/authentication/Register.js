import { useState } from 'react';
import spaceless from '../../helpers/spaceless';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onNameChange = ({ target }) => {
    setName(target.value.trim());
  };
  const onEmailChange = ({ target }) => {
    setEmail(spaceless(target.value));
  };
  const onPasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/users/', {
        method: 'POST',
        body: JSON.stringify(
          {
            user: {
              name,
              email,
              password,
            },
          },
        ),
      });

      const resJson = await res.json();
      console.log(resJson);
      if (res.status === 200) {
        setEmail('');
        setPassword('');
      } else {
        console.log(res.errors);
      }
    } catch (error) {
      console.log(error);
    }
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
              Signup portal
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#">
            <div className="mb-6 rounded-md shadow-sm">
              <label htmlFor="fullname" className="sr-only">
                Fullname
              </label>
              <input
                name="fullname"
                type="text"
                value={name}
                onChange={onNameChange}
                autoComplete="name"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Fullname"
              />
            </div>

            <div className="mb-6 rounded-md shadow-sm">
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
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email"
              />
            </div>

            <div className="mb-8 rounded-md shadow-sm">
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
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>

            <div>
              <button
                onClick={handleSubmit}
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

export default Register;
