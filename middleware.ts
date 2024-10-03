// export { auth as middleware } from "auth";

// // Or like this if you need to do something here.
// // export default auth((req) => {
// //   console.log(req.auth) //  { session: { user: { ... } } }
// // })

// // Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// // };
// import NextAuth from 'next-auth';
// import { authConfig } from './auth.config';

// export default NextAuth(authConfig).auth;

// export const config = {
//   // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// };

export { auth as middleware } from "@/lib/auth";

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ], // Rotas protegidas
};

// // Optionally, don't invoke Middleware on some paths
// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };
