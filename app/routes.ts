import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("quem-somos", "routes/about-us.tsx"),
  route("o-que-fazemos", "routes/what-we-do.tsx"),
  route("diferenciais", "routes/advantages.tsx"),
  route("como-funciona", "routes/how-it-works.tsx"),
  route("seja-um-parceiro", "routes/become-partner.tsx"),
  route("faq", "routes/faq.tsx"),
  route("contato", "routes/contact.tsx"),
] satisfies RouteConfig;
