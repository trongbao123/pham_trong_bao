const tablist = [
    {
        id: 1,
        title: "How do i benefit from the ICO token ?",
        description: "However, the skyrocketing cost of cryptocurrencies has made them famous as buying and selling instruments. To a restricted extent, they may be extensively utilized for cross-border transfers."
    },
    {
        id: 2,
        title: "How to buy cryptocurrency ?",
        description: "However, the skyrocketing cost of cryptocurrencies has made them famous as buying and selling instruments. To a restricted extent, they may be extensively utilized for cross-border transfers."
    },
    {
        id: 3,
        title: "What cryptoz smart contract ?",
        description: "However, the skyrocketing cost of cryptocurrencies has made them famous as buying and selling instruments. To a restricted extent, they may be extensively utilized for cross-border transfers."
    },
    {
        id: 4,
        title: "What is the refund policy ?",
        description: "However, the skyrocketing cost of cryptocurrencies has made them famous as buying and selling instruments. To a restricted extent, they may be extensively utilized for cross-border transfers."
    },
]

const tabHeader = ['General', 'Token', 'RoadMap', 'Legal']

const navList = [
    {
        id: 1,
        name: 'HOME',
        href: '/',
        children: [
            {
                id: 1,
                name: 'HOME 01',
                href: '#cry-1',
            },
            {
                id: 2,
                name: 'HOME 02',
                href: '#form-currency',
            },
            {
                id: 3,
                name: 'HOME 03 (ONE PAGE)',
                href: '#carousel-slick',
            },
        ]
    },
    {
        id: 2,
        name: 'PAGES',
        href: '/page',
        children: [
            {
                id: 1,
                name: 'ABOUT US',
                href: '#market',
            },
            {
                id: 2,
                name: 'HOW IT WORKS',
                href: '#carousel-slick',
            },
            {
                id: 3,
                name: 'ROAD MAP',
                href: '#roadmap',
            },
            {
                id: 4,
                name: 'TOKEN SALE',
                href: '#built',
            },
            {
                id: 5,
                name: 'OUR TEAM',
                href: '#expert',
            },
            {
                id: 6,
                name: 'OUR CLIENTS',
                href: '#testimonials',
            },
            {
                id: 7,
                name: 'ADDITIONAL PAGES',
                href: '#',
            },
            {
                id: 8,
                name: 'ACCOUNT',
                href: '#',
            },
            {
                id: 9,
                name: 'OTHER ',
                href: '#',
            },
            {
                id: 10,
                name: 'CONTACT US',
                href: '#contact',
            },
        ]
    },
    {
        id: 3,
        name: 'SERVICES',
        href: '/service',
        children: [
            {
                id: 1,
                name: 'OUR SERVICES',
                href: '/service',
            },
            {
                id: 2,
                name: 'BITCOIN EXCHANGE',
                href: '/service',
            },
            {
                id: 3,
                name: 'BITCOIN ATM',
                href: '/service',
            },
            {
                id: 4,
                name: 'PAYMENT INTEGRATION',
                href: '/service',
            },
            {
                id: 5,
                name: 'RESEARCH & DEVELOPMENT',
                href: '/service',
            },
            {
                id: 6,
                name: 'SECURE WALLET',
                href: '/service',
            },
            {
                id: 7,
                name: 'FULLY PROTECTION',
                href: '/service',
            }
        ]
    },
    {
        id: 4,
        name: 'PORTFOLIO',
        href: '#faq',
        children: [
            {
                id: 1,
                name: 'PORTFOLIO 01',
                href: '#faq',
            },
            {
                id: 2,
                name: 'PORTFOLIO 02',
                href: '#faq',
            },
            {
                id: 3,
                name: 'PORTFOLIO 03',
                href: '#faq',
            },
            {
                id: 4,
                name: 'PORTFOLIO 04',
                href: '#faq',
            },

        ]

    },
    {
        id: 5,
        name: 'BLOG',
        href: '/blog',
        children: [
            {
                id: 1,
                name: 'BLOG GRID',
                href: '#blog',
            },
            {
                id: 2,
                name: 'BLOG LIST',
                href: '#blog',
            },
            {
                id: 3,
                name: 'BLOG DETAIL',
                href: '#blog',
            },
        ]
    },
    {
        id: 6,
        name: 'ELEMENTS',
        href: '/expert',
        children: [
            {
                id: 1,
                name: 'ELEMENTS GRID',
                href: '#built',
            },
            {
                id: 2,
                name: 'ELEMENTS LIST',
                href: '#brand',
            },
            {
                id: 3,
                name: 'ELEMENTS DETAIL',
                href: '#built',
            },
            {
                id: 4,
                name: 'ELEMENTS 01',
                href: '#built',
            },
            {
                id: 5,
                name: 'ELEMENTS 02',
                href: '#built',
            },
            {
                id: 6,
                name: 'ELEMENTS 03',
                href: '#built',
            },
        ]
    }
]

const carousel = [
    {
        id: 1,
        url: 'https://crypto.websitelayout.net/img/partners/partner-08.png'
    },
    {
        id: 2,
        url: 'https://crypto.websitelayout.net/img/partners/partner-09.png'
    },
    {
        id: 3,
        url: 'https://crypto.websitelayout.net/img/partners/partner-10.png'
    },
    {
        id: 4,
        url: 'https://crypto.websitelayout.net/img/partners/partner-11.png'
    },
    {
        id: 5,
        url: 'https://crypto.websitelayout.net/img/partners/partner-01.png'
    },
    {
        id: 6,
        url: 'https://crypto.websitelayout.net/img/partners/partner-02.png'
    },
    {
        id: 7,
        url: 'https://crypto.websitelayout.net/img/partners/partner-03.png'
    },
    {
        id: 8,
        url: 'https://crypto.websitelayout.net/img/partners/partner-04.png'
    },
    {
        id: 9,
        url: 'https://crypto.websitelayout.net/img/partners/partner-05.png'
    },
    {
        id: 10,
        url: 'https://crypto.websitelayout.net/img/partners/partner-06.png'
    },
    {
        id: 11,
        url: 'https://crypto.websitelayout.net/img/partners/partner-07.png'
    }
]

const marketData = [
    {
        id: 1,
        name: 'Ethereum',
        price: '$ 12574.50',
        change: 'USD',
        rate: '+ 8.25%',
        icon: 'https://crypto.websitelayout.net/img/icons/icon-01.png'
    },
    {
        id: 2,
        name: 'Uniswap',
        price: '$ 13650.50',
        change: 'USD',
        rate: '+ 7.25%',
        icon: 'https://crypto.websitelayout.net/img/icons/icon-02.png'
    },
    {
        id: 3,
        name: 'Theta',
        price: '$ 12670.52',
        change: 'USD',
        rate: '+ 6.34%',
        icon: 'https://crypto.websitelayout.net/img/icons/icon-03.png'
    },
    {
        id: 4,
        name: 'Chainlink',
        price: '$ 14610.00',
        change: 'USD',
        rate: '+ 7.40%',
        icon: 'https://crypto.websitelayout.net/img/icons/icon-04.png'
    },
]

const brandData = [
    {
        id: 1,
        url: 'https://crypto.websitelayout.net/img/icons/icon-05.png',
        title: 'Payment Options',
        subtitle: 'You can use crypto to buy regular goods and services.'
    },
    {
        id: 2,
        url: 'https://crypto.websitelayout.net/img/icons/icon-06.png',
        title: '24/7 Support',
        subtitle: 'You can use crypto to buy regular goods and services.'
    },
    {
        id: 3,
        url: 'https://crypto.websitelayout.net/img/icons/icon-07.png',
        title: 'Reliable Platform',
        subtitle: 'You can use crypto to buy regular goods and services.'
    },
    {
        id: 4,
        url: 'https://crypto.websitelayout.net/img/icons/icon-08.png',
        title: 'Safe & Secure',
        subtitle: 'You can use crypto to buy regular goods and services.'
    },
]

const serviceData = [
    {
        id: 1,
        title: 'Bitcoin Exchange',
        subtitle: 'In fact, cryptocurrencies, even famous ones like Bitcoin, are rarely used for retail transactions',
        url: 'https://crypto.websitelayout.net/img/icons/icon-09.png'
    },
    {
        id: 2,
        title: 'BitCoin ATM’s & Kiosks',
        subtitle: 'In fact, cryptocurrencies, even famous ones like Bitcoin, are rarely used for retail transactions',
        url: 'https://crypto.websitelayout.net/img/icons/icon-10.png'
    },
    {
        id: 3,
        title: 'Payment Integration',
        subtitle: 'In fact, cryptocurrencies, even famous ones like Bitcoin, are rarely used for retail transactions',
        url: 'https://crypto.websitelayout.net/img/icons/icon-11.png'
    },
    {
        id: 4,
        title: 'Research & Development',
        subtitle: 'In fact, cryptocurrencies, even famous ones like Bitcoin, are rarely used for retail transactions',
        url: 'https://crypto.websitelayout.net/img/icons/icon-12.png'
    },
    {
        id: 5,
        title: 'Secure Wallet',
        subtitle: 'In fact, cryptocurrencies, even famous ones like Bitcoin, are rarely used for retail transactions',
        url: 'https://crypto.websitelayout.net/img/icons/icon-13.png'
    },
    {
        id: 6,
        title: 'Fully Protection',
        subtitle: 'In fact, cryptocurrencies, even famous ones like Bitcoin, are rarely used for retail transactions',
        url: 'https://crypto.websitelayout.net/img/icons/icon-14.png'
    },
]

const roadMapData = [
    {
        id: 1,
        date: 'Q1 2021',
        title: 'Token Sale',
    },
    {
        id: 2,
        date: 'Q2 2021',
        title: 'Token Sale 1',
    },
    {
        id: 3,
        date: 'Q3 2021',
        title: 'Token Sale 2',
    },
    {
        id: 4,
        date: 'Q4 2021',
        title: 'Token Sale 3',
    },
    {
        id: 5,
        date: 'Q1 2022',
        title: 'Token Sale 4',
    },
    {
        id: 6,
        date: 'Q2 2022',
        title: 'Token Sale 5',
    },
    {
        id: 7,
        date: 'Q3 2022',
        title: 'Token Sale 6',
    },
    {
        id: 8,
        date: 'Q4 2022',
        title: 'Token Sale 7',
    },
]

const expertData = [
    {
        id: 1,
        name: 'John Doe',
        title: 'Trader',
        url: 'https://crypto.websitelayout.net/img/team/team-01.jpg'
    },
    {
        id: 2,
        name: 'Console Doe',
        title: 'Consultant',
        url: 'https://crypto.websitelayout.net/img/team/team-02.jpg'
    },
    {
        id: 3,
        name: 'Sarah Doe',
        title: 'Co-Founder',
        url: 'https://crypto.websitelayout.net/img/team/team-03.jpg'
    },
    {
        id: 4,
        name: 'Frank Doe',
        title: 'Specialist',
        url: 'https://crypto.websitelayout.net/img/team/team-04.jpg'
    },
]

const testimonialData = [
    {
        id: 1,
        name: 'John Doe',
        title: 'Designer',
        url: 'https://crypto.websitelayout.net/img/avatar/avatar-03.jpg',
        description: 'I have gotten at least 50 times the value from cryptocurrency. I would also like to say thank you to all your staff.'
    },
    {
        id: 2,
        name: 'Console Doe',
        title: 'Developer',
        url: 'https://crypto.websitelayout.net/img/avatar/avatar-04.jpg',
        description: 'I have gotten at least 50 times the value from cryptocurrency. I would also like to say thank you to all your staff.'
    },

    {
        id: 8,
        name: 'Superman Doe',
        title: 'CTO',
        url: 'https://crypto.websitelayout.net/img/avatar/avatar-01.jpg',
        description: 'I have gotten at least 50 times the value from cryptocurrency. I would also like to say thank you to all your staff.'
    },
    {
        id: 9,
        name: 'Frankie Doe',
        title: 'Business Manager',
        url: 'https://crypto.websitelayout.net/img/avatar/avatar-02.jpg',
        description: 'I have gotten at least 50 times the value from cryptocurrency. I would also like to say thank you to all your staff.'
    },
]

const blogdata = [
    {
        id: 1,
        title: ' How to Launch Your Own Cryptocurrency.',
        sub: "April 12, 2024",
        img: 'https://crypto.websitelayout.net/img/blog/blog-02.jpg'
    },
    {
        id: 2,
        title: ' How to Launch Your Own Cryptocurrency.',
        sub: "Jun 12, 2024",
        img: 'https://crypto.websitelayout.net/img/blog/blog-03.jpg'
    },
    {
        id: 3,
        title: ' How to Launch Your Own Cryptocurrency.',
        sub: "May 12, 2024",
        img: 'https://crypto.websitelayout.net/img/blog/blog-04.jpg'
    }
]

const tokenIcon: any = {
    ['BLUR']: 'https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/BLUR.svg',
    ['bNEO']: 'https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/bNEO.svg',
    ['BUSD']: 'https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/BUSD.svg',
    ['USD']: 'https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/USD.svg',
    ['ETH']: 'https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/ETH.svg',
    ['GMX']: 'https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/GMX.svg',
    ['STEVMOS']: 'https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/stEVMOS.svg',
    ['LUNA']: "https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/LUNA.svg",
    ['RATOM']: 'https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/rATOM.svg',
    ['STRD']: 'https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/STRD.svg',
    ['EVMOS']: 'https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/EVMOS.svg',
    ['IBCX']: 'https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/IBCX.svg',
    ['IRIS']: 'https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/IRIS.svg',
    ['ampLUNA']: 'https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/ampLUNA.svg',
    ['KUJI']: 'https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/KUJI.svg',
    ['STOSMO']: 'https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/stOSMO.svg',
    ['USDC']: 'https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/USDC.e.svg',
    ['axlUSDC']: 'https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/axlUSDC.svg',
    ['ATOM']: 'https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/ATOM.svg',
    ['STATOM']: 'https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/stATOM.svg',
    ['OSMO']: 'https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/OSMO.svg',
    ['rSWTH']: 'https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/rSWTH.svg',
    ['STLUNA']: "https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/stLUNA.svg",
    ['LSI']: 'https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/LSI.svg',
    ['OKB']: 'https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/OKB.svg',
    ['OKT']: 'https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/OKT.svg',
    ['SWTH']: 'https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/SWTH.svg',
    ['USC']: 'https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/USC.svg',
    ['WBTC']: 'https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/WBTC.svg',
    ['wstETH']: 'https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/wstETH.svg',
    ['YieldUSD']: 'https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/YieldUSD.svg',
    ['ZIL']: 'https://raw.githubusercontent.com/Switcheo/token-icons/8f44666bad643328f2057900c8e32314a107d07f/tokens/ZIL.svg',
}

export {
    navList,
    tablist,
    tabHeader,
    carousel,
    marketData,
    brandData,
    serviceData,
    roadMapData,
    expertData,
    testimonialData,
    blogdata,
    tokenIcon
}