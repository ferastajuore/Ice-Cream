import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { AiOutlineCoffee } from 'react-icons/ai';
import { BiTimer } from 'react-icons/bi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';

import { HeaderTitle } from '@/components/UI';

const Services = () => {
	return (
		<div className="services p-10 py-24">
			<HeaderTitle title="Our Services" classDiv="mb-8" />

			<div className="mt-16 flex justify-evenly">
				<div className="w-1/3 text-center">
					<TbTruckDelivery fontSize="3em" className="m-auto text-pink-400" />
					<h6 className="my-2 text-lg font-semibold capitalize">free shipping</h6>
					<p className="px-6">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nesciunt
						recusandae suscipit eaque consequuntur, dolores aliquam odit hic sapiente
						sed, beatae, sequi tempora expedita delectus laudantium velit qui? Alias,
						eum.
					</p>
				</div>
				<div className="w-1/3 text-center">
					<AiOutlineCoffee fontSize="3em" className="m-auto text-pink-400" />
					<h6 className="my-2 text-lg font-semibold capitalize">Homemade</h6>
					<p className="px-6">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nesciunt
						recusandae suscipit eaque consequuntur, dolores aliquam odit hic sapiente
						sed, beatae, sequi tempora expedita delectus laudantium velit qui? Alias,
						eum.
					</p>
				</div>
				<div className="w-1/3 text-center">
					<BiTimer fontSize="3em" className="m-auto text-pink-400" />
					<h6 className="my-2 text-lg font-semibold capitalize">fast delivery</h6>
					<p className="px-6">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nesciunt
						recusandae suscipit eaque consequuntur, dolores aliquam odit hic sapiente
						sed, beatae, sequi tempora expedita delectus laudantium velit qui? Alias,
						eum.
					</p>
				</div>
				<div className="w-1/3 text-center">
					<RiMoneyDollarCircleLine fontSize="3em" className="m-auto text-pink-400" />
					<h6 className="my-2 text-lg font-semibold capitalize">cheap price</h6>
					<p className="px-6">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nesciunt
						recusandae suscipit eaque consequuntur, dolores aliquam odit hic sapiente
						sed, beatae, sequi tempora expedita delectus laudantium velit qui? Alias,
						eum.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Services;
