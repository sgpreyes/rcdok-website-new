// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
    site: 'https://MOCKIE26.github.io',
    base: '/rcdok-website-new',

    integrations: [
        starlight({
            title: 'Diocese of Kalookan',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/MOCKIE26/rcdok-website-new' }],
            sidebar: [
                {
                    label: 'Home',
                    link: '/',
                },
                {
                    label: 'Diocesan Portal',
                    items: [
                        { label: 'Community Hub', link: '/community/community' }, 
                        { label: 'Volunteer with Us', link: '/community/volunteer' },
                    ],
                },
                {
                    label: 'Faith',
                    autogenerate: { directory: 'faith' },
                },
                {
                    label: 'Parishes',
                    autogenerate: { directory: 'parishes' },
                },
                {
                    label: 'Clergy',
                    autogenerate: { directory: 'clergy' },
                },
                {
                    label: 'Missions',
                    autogenerate: { directory: 'missions' },
                },
                {
                    label: 'Resources',
                    autogenerate: { directory: 'reference' },
                },
                {
                    label: 'About & Contact',
                    items: [
                        { label: 'About Us', link: '/about' },
                        { label: 'Contact', link: '/contact' },
                    ]
                },
            ],
        }),
    ],
});
