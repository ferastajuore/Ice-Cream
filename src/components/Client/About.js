import React from 'react';
import Image from 'next/image';

import { HeaderTitle } from '@/components/UI';

const About = () => {
	return (
		<section className="about p-10 py-24">
			<HeaderTitle title="About" classDiv="mb-8" />

			<div className="flex">
				<div className="fill-img m-auto flex w-2/5 justify-center">
					<Image
						src={`/assets/image/prodect/1.jpg`}
						alt="ice cream"
						height={300}
						width={300}
						className="rounded-3xl"
						// fill
					/>
				</div>
				<div className="info m-10 mx-0 w-2/4">
					<h3 className="mb-5 text-3xl">Lorem ipsum</h3>
					<p className="leading-normal tracking-widest">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur neque
						sint nisi voluptatem dicta nihil aspernatur quibusdam rem tenetur vitae, est
						dolor excepturi libero voluptatibus quam, officia cumque. Modi, quas. Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Eos repellendus libero
						veritatis rem officia adipisci tenetur eius aperiam odit deleniti. Ducimus
						totam magni odit veniam facere porro dolorum laudantium nisi! Lorem ipsum,
						dolor sit amet consectetur adipisicing elit. Pariatur neque sint nisi
						voluptatem dicta nihil aspernatur quibusdam rem tenetur vitae, est dolor
						excepturi libero voluptatibus quam, officia cumque. Modi, quas. Lorem ipsum
						dolor sit amet consectetur adipisicing elit. Eos repellendus libero
						veritatis rem officia adipisci tenetur eius aperiam odit deleniti. Ducimus
						totam magni odit veniam facere porro dolorum laudantium nisi!
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
