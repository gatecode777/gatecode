// Legacy URL from the earlier blog-only sitemap. Everything now lives in the
// unified /sitemap.xml, so send any crawler that still has the old URL there.
export function GET() {
  return Response.redirect('https://www.gatecode.in/sitemap.xml', 301);
}
