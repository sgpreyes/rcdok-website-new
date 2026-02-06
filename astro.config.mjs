// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
    site: 'https://MOCKIE26.github.io',
    base: '/rcdok-website-new',

	integrations: [
		starlight({
			title: 'Diocese of Kalookan',
			sidebar: [
				{
					label: 'Home',
					link: "/",
				},
				{
					label: 'Community',
					autogenerate: { directory: 'community' },
				},
				{
					label: 'Faith',
					autogenerate: { directory: 'faith' },
				},
				{
					label: 'Parishes',
					items: [
						{ label: 'Vicariate of Our Lady of Grace', slug: 'parishes/vicar-grace' },
						{ label: 'Vicariate of Sacred Heart of Jesus', slug: 'parishes/vicar-heart' },
						{ label: 'Vicariate of San Bartolome', slug: 'parishes/vicar-bartolome' },
						{ label: 'Vicariate of San Jose', slug: 'parishes/vicar-jose' },
						{ label: 'Vicariate of San Roque', slug: 'parishes/vicar-roque' },
					],
				},
				{
					label: 'Member Schools',
					autogenerate: { directory: 'member-school' },
				},
				{
					label: 'Clergy',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Diocesan', slug: 'guides/example' },
						{ label: 'Religious', slug: 'guides/example' },
					],
				},
				{
					label: 'Ministries',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Missions',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Mission Stations', slug: 'missions/stations' },
						{ label: 'Mission Centers', slug: 'missions/centers' },
						{ label: 'Mission Programs', slug: 'guides/example' },
						{ label: 'Mission Headquarters', slug: 'guides/example' },
					],
				},
				{
					label: 'Cemeteries, Columbaries & Ossuaries',
					items: [
						{ label: 'Cemeteries', slug: 'cemeteries-columbaries-ossuaries/cemeteries' },
						{ label: 'Columbaries', slug: 'cemeteries-columbaries-ossuaries/columbaries' },
					],
				},
				{
					label: 'Events',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'News',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'About Us',
					autogenerate: { directory: 'about-us' },
				},{
					label: 'Contact',
					autogenerate: { directory: 'contact' },
				},
			],
		}),
	],
});
