"use client";

import {
    LoginLink,
    LogoutLink,
    RegisterLink,
    useKindeAuth,
    useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";

export default function Profile() {
  const {  isAuthenticated } = useKindeAuth();
  console.log(isAuthenticated); // Useful for debugging the `user` object
  const {user, getUser} = useKindeBrowserClient()
console.log(user)
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to your profile!</h1>

      {user ? (
        <div className="border p-4 rounded-md space-y-3 bg-gray-100">
          <p>
            <strong>Name:</strong> {user?.given_name || "Not provided"}
          </p>
          <p>
            <strong>Email:</strong> {user?.email || "Not provided"}
          </p>
          <LogoutLink className="mt-4 bg-red-500 p-2 rounded-md text-white">
            Logout
          </LogoutLink>
        </div>
      ) : (
        <div className="flex flex-col space-y-4 items-center">
          <p className="text-gray-600">You are not logged in.</p>
          <LoginLink className="bg-blue-500 p-2 rounded-md text-white">
            Sign in
          </LoginLink>
          <RegisterLink className="bg-green-500 p-2 rounded-md text-white">
            Sign up
          </RegisterLink>
        </div>
      )}
    </div>
  );
}
