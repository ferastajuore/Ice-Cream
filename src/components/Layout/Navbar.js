import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	return (
		<div className="nav flex h-28 w-full justify-between p-6 px-10">
			<Image src="/assets/image/logo.png" alt="ice-cream" width={80} height={80} />
			<div className="navbar ">
				<ul className="flex list-none justify-evenly uppercase text-white">
					<li className="p-2 px-3">
						<Link href="#">Home</Link>
					</li>
					<li className="p-2 px-3">
						<Link href="#">About</Link>
					</li>
					<li className="p-2 px-3">
						<Link href="#">Product</Link>
					</li>
					<li className="p-2 px-3">
						<Link href="#">services</Link>
					</li>
					<li className="p-2 px-3">
						<Link href="#">contact us</Link>
					</li>

					<div className="mx-5 flex justify-between">
						<li className="mr-3 rounded-xl border-2 border-solid border-gray-300 p-2 px-3">
							<Link href="#">login</Link>
						</li>
						<li className="rounded-xl bg-purple-700 p-2 px-3">
							<Link href="#">sign up</Link>
						</li>
					</div>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
