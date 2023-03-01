import { useLoginMutation } from "@/apis/authenticationApi";
import ScreenLoading from "@/components/ScreenLoading";
import { useAppContext } from "@/context/AppContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

type Props = {};

const LoginPage = (props: Props) => {
  /* import hook */
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [Login, { data, isLoading, error }] = useLoginMutation<any>();
  const router = useRouter();
  const [cookies, setCookies] = useCookies(["portfolio"]);
  const { setCookie, currentUser, isLoading: authLoading } = useAppContext();

  /* handle submit */
  const onHandleSubmit = handleSubmit(async (data) => {
    try {
      await Login(data);
    } catch (error) {
      toast.error("Login failed");
    }
  });

  useEffect(() => {
    if (data) {
      toast.success("Login success");
      setCookie(data?.data?.token);
      setCookies("portfolio", data?.data?.token, {
        path: "/",
        maxAge: 3600, // Expires after 1hr
        sameSite: true,
      });
      router.push("/dashboard");
    }

    if (error) {
      toast.error(error?.data?.message, {});
      console.log(error);
    }
  }, [data, error]);

  useEffect(() => {
    if (cookies?.portfolio) {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  }, []);

  console.log(authLoading, currentUser);

  if (authLoading) {
    return <ScreenLoading />;
  }
  return (
    <>
      <Head>
        <title>Login - Ashik portfolio</title>
      </Head>
      <div className="grid place-items-center py-52 ">
        <div className="login-wrapper w-[20rem]">
          <form action="" onSubmit={onHandleSubmit}>
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
              {isLoading ? (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center gap-2"
                  type="button"
                  disabled
                >
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    ></path>
                  </svg>
                  Loading...
                </button>
              ) : (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
              )}

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
