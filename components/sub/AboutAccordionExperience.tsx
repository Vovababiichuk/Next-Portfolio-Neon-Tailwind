import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import React from 'react';
import { FaHandshake } from 'react-icons/fa';

const AboutAccordionExperience = () => {
	return (
		<div className='z-[100] w-full max-w-[580px] max-sm:max-w-[270px] m-auto max-sm:mt-6'>
			<Accordion
				className='w-[580px] max-sm:w-[270px]'
				type='single'
				collapsible
			>
				<AccordionItem
					className='border-b-[3px] border-[#2f2158]'
					value='item-1'
				>
					<AccordionTrigger className='text-[21px] uppercase text-left'>
						<FaHandshake size={30} />
						Cover Letter
					</AccordionTrigger>
					<AccordionContent className='text-left flex flex-col gap-4 '>
						<div className='leading-7 font-sans text-[19px] flex flex-col gap-4'>
							My experience includes the following technologies and skills:
							<p>
								<span className='text-[#00ffffff] capitalize block text-center mb-2'>
									**Web Development:**
								</span>
								I have in-depth knowledge of{' '}
								<strong className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
									HTML, CSS, and JavaScript
								</strong>{' '}
								and am able to create modern, responsive, and high-performance
								websites and applications.
							</p>
							<p>
								<span className='text-[#00ffffff] capitalize block text-center mb-2'>
									**Front-end frameworks:**
								</span>
								I have experience with{' '}
								<strong className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
									React.js, Typescript, Next.js
								</strong>{' '}
								to develop high-performance and scalable web applications.
							</p>
							<p>
								<span className='text-[#00ffffff] capitalize block text-center mb-2'>
									**Styling Technologies:**
								</span>
								I am well versed in{' '}
								<strong className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
									Tailwind, CSS, SCSS, Styled Components
								</strong>{' '}
								to create and optimize styles efficiently.
							</p>
							<p>
								<span className='text-[#00ffffff] capitalize block text-center mb-2'>
									**Mobile Development:**
								</span>
								I have basic skills in building cross-platform mobile apps using
								<strong className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
									{' '}
									Flutter/Dart and React Native
								</strong>
								. I intend to develop competencies in this area and create
								high-quality and efficient mobile applications.
							</p>
							<p>
								<span className='text-[#00ffffff] capitalize block text-center mb-2'>
									**Back-end development:**
								</span>
								My skills include{' '}
								<strong className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
									Node.js, Express.js, PostgreSQL
								</strong>{' '}
								to create powerful back-end solutions.
							</p>
							<p>
								<span className='text-[#00ffffff] capitalize block text-center mb-2'>
									**User interface libraries:**
								</span>
								<strong className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
									Shadcn UI, Chakra UI, Material UI, NextUI,
								</strong>{' '}
								Bootstrap and more.
							</p>
							<p>
								<span className='text-[#00ffffff] capitalize block text-center mb-2'>
									**UI/UX design:**
								</span>
								I have a good background in{' '}
								<strong className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
									graphic design
								</strong>{' '}
								so I understand the importance of{' '}
								<strong className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
									design and user experience
								</strong>{' '}
								and can collaborate with designers to achieve great results.
							</p>
							<p>
								<span className='text-[#00ffffff] capitalize block text-center mb-2'>
									**Version control systems:**
								</span>
								I use{' '}
								<strong className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
									Git, GitHub, and GitLab
								</strong>{' '}
								to manage code efficiently.
							</p>
							<p>
								<span className='text-[#00ffffff] capitalize block text-center mb-2'>
									**Design tools:**
								</span>
								I am proficient in{' '}
								<strong className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
									Figma, Adobe Illustrator, and Adobe Photoshop
								</strong>{' '}
								to realize design concepts.
							</p>
							<p className=''>
								I am passionate about building{' '}
								<strong className='text-[#00ffffff]'>
									efficient, scalable, and visually appealing
								</strong>{' '}
								web applications. With a{' '}
								<strong className='text-[#00ffffff]'>strong foundation</strong>{' '}
								in front-end development and a{' '}
								<strong className='text-[#00ffffff]'>
									keen eye for detail
								</strong>
								, I offer
								{' '}<strong className='text-[#00ffffff]'>
									innovative solutions
								</strong>{' '}
								to complex problems.{' '}
								<strong className='text-[#00ffffff]'>
									My goal is to create high-quality code that not only meets but
									exceeds client expectations
								</strong>
								.
							</p>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem
					className='border-b-[3px] border-[#2f2158]'
					value='item-1'
				>
					<AccordionTrigger className='text-[21px] uppercase text-left'>
						(2022-2024) - Freelancing
					</AccordionTrigger>
					<AccordionContent className='text-left flex flex-col gap-4 '>
						<p className='leading-7 font-sans text-[19px]'>
							Development of custom web applications, both the code base and the
							visual part. Presentation of business through web applications.
							Interaction with customers.
						</p>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem
					className='border-b-[3px] border-[#2f2158]'
					value='item-2'
				>
					<AccordionTrigger className='text-[21px] uppercase text-left'>
						(2023) - Practice in UANODES COMPANY
					</AccordionTrigger>
					<AccordionContent className='text-left flex flex-col gap-4'>
						<p className='leading-7 font-sans text-[19px]'>
							On the project, I was engaged in updating the Frontend part of the
							product and analyzed the logic of the project code together with
							Backend developers.
						</p>
						<p className='leading-7 font-sans text-[19px]'>
							This process resulted in the decision to rebuild the project,
							aiming for enhanced security, performance, and alignment with
							modern development standards.{' '}
							<span className='text-[#00ffffff]'>
								The project utilized React for the Frontend and Django for the
								Backend.
							</span>
						</p>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem
					className='border-b-[3px] border-[#2f2158]'
					value='item-3'
				>
					<AccordionTrigger className='text-[21px] uppercase text-left'>
						(2021-2024) - WORK AT STOCK EXCHANGES
					</AccordionTrigger>
					<AccordionContent>
						<p className='leading-7 font-sans text-[19px] mb-4'>
							Сreating diverse{' '}
							<span className='text-[#00ffffff]'>Vector Graphics</span>
						</p>
						<a
							className='py-1 px-6 button-primary text-center text-white cursor-pointer rounded-lg w-full max-w-[200px] text-[20px] transition-all duration-300 ease-in-out font-mono'
							href='https://stock.adobe.com/ua/contributor/210974889/Volodymyr'
							target='_blank'
						>
							Link
						</a>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem
					className='border-b-[3px] border-[#2f2158]'
					value='item-4'
				>
					<AccordionTrigger className='text-[21px] uppercase text-left'>
						(2013-2021) - Sales Industry
					</AccordionTrigger>
					<AccordionContent>
						<p className='leading-7 font-sans text-[19px] mb-4 text-left'>
							Self-Employment in the Sales Industry.{' '}
							<span className='text-[#00ffffff]'>Communicating</span> and
							building <span className='text-[#00ffffff]'>relationships</span>{' '}
							with <span className='text-[#00ffffff]'>customers</span>.
						</p>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem
					className='border-b-[3px] border-[#2f2158]'
					value='item-5'
				>
					<AccordionTrigger className='text-[21px] uppercase text-left'>
						(2012-2013) - AGROFIRM (manager-economist)
					</AccordionTrigger>
					<AccordionContent>
						<p className='leading-7 font-sans text-[19px] mb-4 text-left'>
							<span className='text-[#00ffffff]'>Сommunication</span> and
							management of people.
						</p>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default AboutAccordionExperience;
