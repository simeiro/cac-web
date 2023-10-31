/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['scontent-nrt1-2.cdninstagram.com', 'scontent-itm1-1.cdninstagram.com'], // ここに許可するホスト名を追加
    },
}
const withVideos = require('next-videos')

module.exports = withVideos()
module.exports = nextConfig
