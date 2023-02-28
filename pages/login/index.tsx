import Head from "next/head";
import { useForm } from "react-hook-form";

type Props = {};

const LoginPage = (props: Props) => {
  /* import hook */
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  /* handle submit */
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <>
      <Head>
        <title>Login - Ashik portfolio</title>
      </Head>
      <div className="grid place-items-center py-52 ">
        <div className="login-wrapper">
          <form action="" onSubmit={onSubmit}>
            {/* tailwind */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Email Address"
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">
                  {(errors as any).email.message}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters",
                  },
                })}
                placeholder="******************"
              />
              {errors.password && (
                <p className="text-red-500 text-xs italic">
                  {(errors as any).password.message}
                </p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
