import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';
import { motion } from 'framer-motion';

import Image from 'next/image';
import { Button } from '@/components/UI';

const Home = ({ children }) => {
	const imageData = ['1.jpg', '2.jpg', '3.jpg'];

	return (
		<header className="home bg-lg-1 relative h-[90vh] rounded-b-3xl shadow-lg shadow-pink-400/70 ">
			{children}
			<div className="flex justify-around p-16">
				<div className="info text-white">
					<h2>
						<span className="block text-5xl font-bold uppercase leading-loose tracking-widest">
							ice cream
						</span>{' '}
					</h2>
					<p className="w-2/3 text-xl tracking-wide ">
						{' '}
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto explicabo
						cupiditate magni
					</p>
					<Button
						title="Sing up"
						className="my-8 rounded-xl bg-purple-700 uppercase text-white"
					/>
				</div>
				<div className="carousel">
					<Swiper
						modules={[EffectCards]}
						effect="cards"
						grabCursor={true}
						loop={true}
						className="w-60"
					>
						{imageData.map((data, i) => (
							<SwiperSlide key={i} className="fill-img rounded-3xl">
								<Image
									src={`/assets/image/prodect/${data}`}
									alt="ice cream"
									className="custom-img"
									fill
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
			<div className="absolute  -left-28 -bottom-28 rotate-[130deg]">
				<Image src="/assets/image/pngwing.com.png" alt="ice" width={300} height={300} />
			</div>
		</header>
	);
};

export default Home;
