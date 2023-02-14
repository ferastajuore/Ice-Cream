import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import { customers } from '@/utils/customers';

import { HeaderTitle } from '@/components/UI';

const Customers = () => {
	return (
		<section className="customers bg-lg-2 p-10 py-24">
			<HeaderTitle title="Customers" classDiv="mb-8" classTitle="text-white" />

			<Swiper
				navigation={true}
				pagination={{
					clickable: true,
				}}
				modules={[Navigation, Pagination]}
			>
				{customers.map((data, i) => {
					return (
						<SwiperSlide key={i} className="p-10">
							<div className="mb-5 flex justify-center">
								<Image
									src={`/assets/image/users/${data.image}`}
									alt={data.name}
									width={120}
									height={120}
									className="rounded-[50%]"
								/>
							</div>
							<div className="text-center">
								<h5 className="text-xl font-bold capitalize leading-loose tracking-widest text-white">
									{data.name}
								</h5>
								<p className="px-8 pb-3 text-lg leading-8 tracking-wide text-white">
									{data.description}
								</p>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Customers;
