import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

const SPANISH_COUNTRIES = new Set([
  "AR","BO","CL","CO","CR","CU","DO","EC","SV","GQ","GT","HN","MX","NI","PA","PY","PE","PR","ES","UY","VE",
]);
const PORTUGUESE_COUNTRIES = new Set(["BR","PT","AO","MZ","CV","GW","ST","TL"]);

const GEO_COOKIE = "sj_locale_detected";

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const geoDetected = request.cookies.get(GEO_COOKIE)?.value;

  if (!geoDetected && pathname === "/") {
    const country = request.headers.get("x-vercel-ip-country") ?? "";
    let locale: string | null = null;

    if (PORTUGUESE_COUNTRIES.has(country)) {
      locale = "pt";
    } else if (country !== "" && !SPANISH_COUNTRIES.has(country)) {
      locale = "en";
    }

    if (locale) {
      const url = request.nextUrl.clone();
      url.pathname = `/${locale}`;
      const res = NextResponse.redirect(url);
      res.cookies.set(GEO_COOKIE, "1", { path: "/", maxAge: 60 * 60 * 24 * 30 });
      return res;
    }

    const res = intlMiddleware(request);
    res.cookies.set(GEO_COOKIE, "1", { path: "/", maxAge: 60 * 60 * 24 * 30 });
    return res;
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
