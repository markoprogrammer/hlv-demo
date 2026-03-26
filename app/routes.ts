import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
  index('pages/home/index.tsx'),
  route('/zaposleni', 'pages/zaposleni/index.tsx'),
  route('/temelji', 'pages/temelji/index.tsx'),
  route('/posao', 'pages/posao/index.tsx'),
  route('/blog', 'pages/blog/index.tsx'),
  route('/kontakt', 'pages/kontakt/index.tsx'),
] satisfies RouteConfig
