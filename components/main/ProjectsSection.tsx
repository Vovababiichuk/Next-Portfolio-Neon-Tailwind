'use client'

import React, { useState } from 'react'
import ProjectCard from '../sub/ProjectCard'
import MainTitle from '../sub/MainTitle'
import ProjectTag from '../main/ProjectTag'

const techData = {
	next: '/next.svg',
	tailwind: '/tailwind.png',
	framer: '/framer.png',
	javaScript: '/js.png',
	html: '/html.png',
	css: '/css.png',
	jquery: '/jquery.png',
	react: '/react.png',
	sass: '/sass.png',
	ionic: '/ionic.png',
	typeScript: '/ts.png',
	styledComponents: '/styled-components.png',
	chakraUi: '/chakra.png',
	express: '/express.png',
	handlebars: '/handlebars.png',
	flutter: '/flutter-card.jpg',
	dart: '/dart.svg',
	flame: '/flame.png',
	firebase: '/firebase-card33.jpg',
	gulp: '/gulp.jpg',
	swiper: '/swiper.png',
}
const projectsData = [
	{
		id: 1,
		src: '/projects/sollers.png',
		title: 'Security Services',
		description:
			'Freelance order. Development of a website from scratch for Sollers Group: includes design and code development for product presentation.',
		tag: ['All', 'Web'],
		tech: [
			techData.react,
			techData.tailwind,
			techData.framer,
			techData.sass,
			techData.typeScript,
			techData.chakraUi,
		],
		gitUrl: 'https://github.com/Vovababiichuk/sollers-group-distribution',
		previewUrl: 'https://slg-distribution.com/',
	},
	{
		id: 2,
		src: '/projects/music.png',
		title: 'Music Streaming',
		description: 'Animation landing page for a music streaming service.',
		tag: ['All', 'Web'],
		tech: [techData.next, techData.tailwind, techData.framer],
		gitUrl:
			'https://github.com/Vovababiichuk/Music-Website-Next-JS-Tailwind-CSS-And-Framer-Motion',
		previewUrl:
			'https://music-website-next-js-tailwind-css-and-framer-motion-9gh4.vercel.app/',
	},
	{
		id: 3,
		src: '/projects/password.png',
		title: 'Password Generator',
		description: 'Generate a random password with different options.',
		tag: ['All', 'Web'],
		tech: [techData.react, techData.sass, techData.javaScript],
		gitUrl: 'https://github.com/Vovababiichuk/react-password-generator-DONE',
		previewUrl: 'https://react-password-generator-done.vercel.app/',
	},
	{
		id: 4,
		src: '/projects/fundation.png',
		title: 'Foundation',
		description: 'Build stunning websites & apps',
		tag: ['All', 'Web'],
		tech: [techData.javaScript, techData.sass, techData.html, techData.swiper],
		gitUrl: 'https://github.com/Vovababiichuk/Foundation-layout-GromCode',
		previewUrl: 'https://vovababiichuk.github.io/Foundation-layout-GromCode/',
	},
	{
		id: 5,
		src: '/projects/marketing.png',
		title: 'Matrketing Agency',
		description: 'Landing page for a marketing agency.',
		tag: ['All', 'Web'],
		tech: [techData.javaScript, techData.html, techData.css, techData.jquery],
		gitUrl: 'https://github.com/Vovababiichuk/Marketing-project',
		previewUrl: 'https://vovababiichuk.github.io/Marketing-project/',
	},
	{
		id: 6,
		src: '/projects/porten.png',
		title: 'Shop PORTEN Wristwatch',
		description: 'Freelance order. Website layout in Figma and development of a mobile version of the site.',
		tag: ['All', 'Web'],
		tech: [
			techData.gulp,
			techData.sass,
			techData.html,
			techData.swiper,
		],
		gitUrl:
			'https://github.com/Vovababiichuk/PORTEN-Watch-Shop-Gulp',
		previewUrl:
			'https://watch-shop-porten.netlify.app/',
	},
	{
		id: 7,
		src: '/projects/dolla.png',
		title: 'Virtual Banking',
		description: 'React Landing page for a virtual banking service.',
		tag: ['All', 'Web'],
		tech: [
			techData.react,
			techData.styledComponents,
			techData.javaScript,
			techData.html,
			techData.css,
		],
		gitUrl:
			'https://github.com/Vovababiichuk/React-Website-using-Styled-Components-and-Smooth-Scroll-DONE',
		previewUrl:
			'https://react-website-using-styled-components-and-smooth-scroll-done.vercel.app/',
	},
	{
		id: 8,
		src: '/projects/menu.png',
		title: 'Menu Ordering',
		description:
			'GRUD (Create, Read, Update, Delete). Ordering system for a restaurant.',
		tag: ['All', 'Web'],
		tech: [
			techData.react,
			techData.typeScript,
			techData.styledComponents,
			techData.chakraUi,
		],
		gitUrl: 'https://github.com/Vovababiichuk/React-TypeScript-pizza',
		previewUrl: 'https://dazzling-gnome-e98345.netlify.app/',
	},
	{
		id: 9,
		src: '/projects/grud.png',
		title: 'GRUD - Purchase, Spotify',
		description:
			'CRUD (Create, Read, Update, Delete) are the basic operations that can be performed on data in programs.',
		tag: ['All', 'Web'],
		tech: [
			techData.javaScript,
			techData.html,
			techData.css,
			techData.express,
			techData.handlebars,
			techData.sass,
		],
		gitUrl: 'https://github.com/Vovababiichuk/js-crud-DONE',
		previewUrl: 'https://github.com/Vovababiichuk/js-crud-DONE',
	},
	{
		id: 10,
		src: '/projects/draft.png',
		title: 'JS Array/String Methods',
		description:
			'Only Web version. Quickly search for a method and information about it.',
		tag: ['All', 'Web'],
		tech: [
			techData.next,
			techData.javaScript,
			techData.tailwind,
		],
		gitUrl: 'https://github.com/Vovababiichuk/Next-JavaScript-Array-Methods-Draft-Tailwind',
		previewUrl: 'https://main--array-methods-draft.netlify.app/',
	},
	{
		id: 11,
		src: '/projects/dashboard-ui.png',
		title: 'Responsive Dashboard UI',
		description: 'Responsive Dashboard UI with Flutter & Dart.',
		tag: ['All', 'Mobile'],
		tech: [techData.flutter, techData.dart, techData.firebase],
		gitUrl:
			'https://github.com/Vovababiichuk/Flutter-Responsive-Dashboard-UI-App',
		previewUrl: 'https://responsive-dashboard-ui-1c12b.firebaseapp.com/',
	},
	{
		id: 12,
		src: '/projects/flappy.png',
		title: 'Flappy Bird Game',
		description: '2D game based on Flutter & Flame.',
		tag: ['All', 'Mobile'],
		tech: [techData.flutter, techData.dart, techData.flame],
		gitUrl: 'https://github.com/Vovababiichuk/Flutter-Flappy-Bird-Game',
		previewUrl: 'https://docs.flame-engine.org/latest/',
	},
	{
		id: 13,
		src: '/projects/bmi.png',
		title: 'BMI Calculator',
		description: 'Simple app that calculates your body mass index (BMI).',
		tag: ['All', 'Mobile'],
		tech: [techData.react, techData.typeScript, techData.ionic],
		gitUrl: 'https://github.com/Vovababiichuk/Ionic-MBI-CLI-React-TS-Training',
		previewUrl: 'https://remarkable-piroshki-d40a60.netlify.app/',
	},
]

const ProjectsSection = () => {
	const [tag, setTag] = useState('All')

	const handleTagChange = (newTag: string) => {
		setTag(newTag)
	}

	const filteredProjects = projectsData.filter(project =>
		project.tag.includes(tag)
	)

	return (
		<section id='projects' className='mt-[-90px] max-sm:mt-[-310px] pb-36 '>
			<MainTitle title='My Projects' subTitleType='projects' />
			<div className='container'>
				<div className='text-[#b49bff] flex flex-row items-center justify-center gap-2 py-6 z-50 relative mt-[-90px] max-sm:mt-[-170px] mb-10'>
					<ProjectTag
						onClick={handleTagChange}
						name='All'
						isSelected={tag === 'All'}
					/>
					<ProjectTag
						onClick={handleTagChange}
						name='Web'
						isSelected={tag === 'Web'}
					/>
					<ProjectTag
						onClick={handleTagChange}
						name='Mobile'
						isSelected={tag === 'Mobile'}
					/>
				</div>
				<div className='flex flex-col items-center justify-center'>
					<div className='h-full w-full flex flex-wrap justify-center gap-6 px-[10px]'>
						{filteredProjects.map(project => (
							<ProjectCard
								key={project.id}
								src={project.src}
								title={project.title}
								description={project.description}
								tag={project.tag}
								tech={project.tech || []}
								previewUrl={project.previewUrl}
								gitUrl={project.gitUrl}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProjectsSection
