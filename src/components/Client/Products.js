import React from 'react';
import Image from 'next/image';

import { Button, HeaderTitle } from '@/components/UI';

const Products = () => {
	const imageData = ['1.jpg', '2.jpg', '3.jpg'];

	return (
		<section className="products relative p-10 py-24">
			<div className="mb-8 flex items-center justify-center">
				<HeaderTitle title="Products" classDiv="mb-8" classTitle="text-white" />
				<Image src="/assets/image/5.png" alt="ice" width={50} height={50} />
			</div>

			<div className="flex justify-around">
				{imageData.map((data, i) => (
					<div key={i}>
						<Image
							src={`/assets/image/prodect/${data}`}
							alt="products"
							width={250}
							height={250}
							className="h-full rounded-3xl"
						/>
					</div>
				))}
			</div>

			<div className="m-auto w-2/5 text-center">
				<Button title="see more" className="my-8 bg-purple-700 capitalize text-white" />
			</div>

			<div className="absolute right-10 -bottom-20">
				<Image src="/assets/image/pngwing.com(1).png" alt="ice" width={300} height={300} />
			</div>
		</section>
	);
};

export default Products;
