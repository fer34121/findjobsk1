import { NextResponse, type NextRequest } from "next/server";
import { ROUTES, SESSION_COOKIE } from "@/lib/constants";

/**
 * Primera barrera (edge): redirige según exista o no la cookie de sesión.
 * El layout (protected) vuelve a validar la sesión en el servidor.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasSession = request.cookies.has(SESSION_COOKIE);

  if (pathname.startsWith(ROUTES.jobs) && !hasSession) {
    return NextResponse.redirect(new URL(ROUTES.login, request.url));
  }
  if (pathname === ROUTES.login && hasSession) {
    return NextResponse.redirect(new URL(ROUTES.jobs, request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/jobs/:path*", "/login"],
};
