import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

import React from 'react'
import Image from 'next/image'

const AboutAccordionCertificates = () => {
	return (
		<div className='z-[100] w-full max-w-[580px] max-sm:max-w-[270px] m-auto max-sm:mt-6'>
			<Accordion
				className='w-[580px] max-sm:w-[270px] '
				type='single'
				collapsible
			>
				<AccordionItem
					className='border-b-[3px] border-[#2f2158] button-'
					value='item-1'
				>
					<AccordionTrigger className='text-[21px] uppercase text-left'>
						React
					</AccordionTrigger>
					<AccordionContent>
						<Image
							className='mb-4'
							src='/certificates/react1.png'
							alt='certificate'
							width={550}
							height={550}
						/>
					</AccordionContent>
				</AccordionItem>

				<AccordionItem
					className='border-b-[3px] border-[#2f2158] button-'
					value='item-2'
				>
					<AccordionTrigger className='text-[21px] uppercase text-left'>
						Java Script
					</AccordionTrigger>
					<AccordionContent>
						<Image
							className='mb-4'
							src='/certificates/solo-certificate2.png'
							alt='certificate'
							width={550}
							height={550}
						/>
						<Image
							src='/certificates/solo-certificate.png'
							alt='certificate'
							width={550}
							height={550}
						/>
					</AccordionContent>
				</AccordionItem>

				<AccordionItem
					className='border-b-[3px] border-[#2f2158]'
					value='item-3'
				>
					<AccordionTrigger className='text-[21px] uppercase text-left'>
						Markup Developer
					</AccordionTrigger>
					<AccordionContent>
						<Image
							src='/certificates/markup-developer.png'
							alt='certificate'
							width={550}
							height={550}
						/>
					</AccordionContent>
				</AccordionItem>

				<AccordionItem
					className='border-b-[3px] border-[#2f2158] button-'
					value='item-4'
				>
					<AccordionTrigger className='text-[21px] uppercase text-left'>
						English Level
					</AccordionTrigger>
					<AccordionContent>
						<Image
							className='mb-4'
							src='/certificates/certificate-english.png'
							alt='certificate'
							width={550}
							height={550}
						/>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	)
}

export default AboutAccordionCertificates
