import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Suppress warning about multiple lockfiles in monorepo/inferred root
  outputFileTracingRoot: process.cwd(),
};

export default withNextIntl(nextConfig);
