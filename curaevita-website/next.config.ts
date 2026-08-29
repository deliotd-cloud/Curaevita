import type { NextConfig } from 'next';

const isGitHubPagesBuild =
  process.env.npm_lifecycle_event === 'build:github' || process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = isGitHubPagesBuild
  ? { output: 'export', trailingSlash: true, images: { unoptimized: true }, turbopack: { root: process.cwd() } }
  : { images: { unoptimized: true }, turbopack: { root: process.cwd() } };

export default nextConfig;
