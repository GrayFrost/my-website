import createMDX from '@next/mdx'
import frontmatter from 'remark-frontmatter'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [frontmatter]
  }
})
export default withMDX(nextConfig)
