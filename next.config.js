const withImages = require('next-images')
    module.exports = withImages(), {
        
        async redirects() {
            return [{
                    source: '/members/kappa/twitter',
                    destination: 'https://twitter.com/kappac0dex',
                    permanent: true,
                }, {
                    source: '/members/kappa/instagram',
                    destination: 'https://instagram.com/kappac0dex',
                    permanent: true,
                }, {
                    source: '/members/kappa/github',
                    destination: 'https://github.com/kappac0dex',
                    permanent: true,
                }, {
                    source: '/members/kappa/twitch',
                    destination: 'https://twitch.tv/kappac0dex',
                    permanent: true,
                }, {
                    source: '/members/kappa/youtube',
                    destination: 'https://youtube.com/channel/UCzC5LlsyJtdLhXnEUK0p8Zw',
                    permanent: true,
                },
                {
                    source: '/discord',
                    destination: 'https://discord.gg/naHDBvYdYv',
                    permanent: true,
                },
                {
                    source: '/members/alex/twitter',
                    destination: 'https://twitter.com/xunderal',
                    permanent: true,
                }, {
                    source: '/members/alex/instagram',
                    destination: 'https://instagram.com/xunderal',
                    permanent: true,
                }, {
                    source: '/members/alex/github',
                    destination: 'https://github.com/bobsolomos',
                    permanent: true,
                }, {
                    source: '/members/alex/twitch',
                    destination: 'https://twitch.tv/itsxunderal',
                    permanent: true,
                }, {
                    source: '/members/alex/youtube',
                    destination: 'https://youtube.com/c/xunderal',
                    permanent: true,
                },
                {
                    source: '/members/lingduck/twitter',
                    destination: 'https://twitter.com/dimory1',
                    permanent: true,
                }, {
                    source: '/members/lingduck/instagram',
                    destination: 'https://instagram.com/lingduck',
                    permanent: true,
                }, {
                    source: '/members/lingduck/github',
                    destination: 'https://github.com/lingduck',
                    permanent: true,
                }, {
                    source: '/members/lingduck/twitch',
                    destination: 'https://twitch.tv/lingduck',
                    permanent: true,
                }, {
                    source: '/members/lingduck/youtube',
                    destination: 'https://youtube.com/channel/UC7RTYzr08Nw-0_YS3VTizpQ',
                    permanent: true,
                },
            ]
        },
    }