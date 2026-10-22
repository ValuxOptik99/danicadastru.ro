/**
 * Canonical public origin of the site. Every absolute URL (canonical, sitemap,
 * robots, Open Graph, JSON-LD) is built from this constant.
 *
 * It MUST match the primary domain configured in Vercel: the other host
 * (www vs apex) has to 308-redirect to this one, never the other way round,
 * otherwise canonicals and sitemap URLs point at redirects and Google
 * refuses to index pages.
 */
export const SITE_URL = "https://danicadastru.ro";
