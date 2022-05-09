import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  // Clone the request url
  const url = req.nextUrl.clone();

  // Get pathname of request (e.g. /blog-slug)
  const { pathname } = req.nextUrl;

  // Get hostname of request (e.g. demo.vercel.pub)
  const hostname = req.headers.get("host");


  if (!hostname)
    return new Response(null, {
      status: 400,
      statusText: "No hostname found in request headers",
    });

  // Only for demo purposes – remove this if you want to use your root domain as the landing page
  if (hostname === "vercel.pub" || hostname === "platforms.vercel.app") {
    return NextResponse.redirect("https://demo.vercel.pub");
  }



  const currentHost =
    process.env.NODE_ENV === "production" && process.env.VERCEL === "1"
      ? // You have to replace ".vercel.pub" with your own domain if you deploy this example under your domain.
        // You can use wildcard subdomains on .vercel.app links that are associated with your Vercel team slug
        // in this case, our team slug is "platformize", thus *.platformize.vercel.app works
        hostname
          .replace(`.vercel.pub`, "")
          .replace(`.platformize.vercel.app`, "")
      : hostname.replace(`.localhost:3000`, "");

  if (pathname.startsWith(`/_sites`))
    return new Response(null, {
      status: 404,
    });


  if (!pathname.includes(".") && !pathname.startsWith("/api")) {
    if (currentHost == "app") {
      if (
        pathname === "/login" &&
        (req.cookies["next-auth.session-token"] ||
          req.cookies["__Secure-next-auth.session-token"])
      ) {
        url.pathname = "/";
        return NextResponse.redirect(url);
      }

      url.pathname = `/app${pathname}`;
      return NextResponse.rewrite(url);
    }



    /* if (
      hostname === "multi1-domain.com:3301" ||
      hostname === "multi1-domain.com:3301" ||
      hostname === "platformize.vercel.app"
    ) {
      url.pathname = `/home`;
      console.log(url.pathname)
      return NextResponse.rewrite(url);
    } */

    if (pathname === "/home") {
        url.pathname = `app/home`;
        return NextResponse.rewrite(url);
    }
    if (pathname === "/agendar") {
        url.pathname = `app/agendar`;
        return NextResponse.rewrite(url);
    }
    if (pathname === "/consultas") {
        url.pathname = `app/consultas`;
        return NextResponse.rewrite(url);
    }
    if (pathname === "/paciente") {
        url.pathname = `app/paciente`;
        return NextResponse.rewrite(url);
    }
    if (pathname === "/prontuario") {
        url.pathname = `app/prontuario`;
        return NextResponse.rewrite(url);
    }


    //url.pathname = `/_sites/${currentHost}${pathname}`;
    url.pathname = `/_sites${pathname}`;
    return NextResponse.rewrite(url);
  }
}
