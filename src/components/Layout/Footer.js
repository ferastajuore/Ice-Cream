import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { BsGithub, BsFillSuitHeartFill } from 'react-icons/bs';

const Footer = () => {
	return (
		<footer className="footer bg-lg-2 p-10 pt-20 pb-8">
			<div className="flex justify-center">
				<Image
					src="/assets/image/pngwing.com(3).png"
					alt="donat"
					width={300}
					height={300}
				/>
			</div>
			<h2 className="mb-8 text-center text-white">
				<span className="block text-5xl font-bold uppercase leading-loose tracking-widest">
					ice cream
				</span>{' '}
			</h2>

			<div className="header-icons icons mb-8 flex justify-center">
				<a
					href="https://www.facebook.com/feras.ariabi"
					target="_blank"
					className="mx-5 rounded-lg bg-zinc-600/100 p-2"
				>
					<FaFacebookF fontSize="1.5rem" color="#FFF" />
				</a>
				<a
					href="https://www.instagram.com/feras_ariabi/"
					target="_blank"
					className="mx-5 rounded-lg bg-zinc-600/100 p-2"
				>
					<FaInstagram fontSize="1.5rem" color="#FFF" />
				</a>
				<a
					href="https://www.linkedin.com/in/feras-ariabi/"
					target="_blank"
					className="mx-5 rounded-lg bg-zinc-600/100 p-2"
				>
					<FaLinkedinIn fontSize="1.5rem" color="#FFF" />
				</a>
				<a
					href="https://www.youtube.com/@FerasAriabi"
					target="_blank"
					className="mx-5 rounded-lg bg-zinc-600/100 p-2"
				>
					<FaYoutube fontSize="1.5rem" color="#FFF" />
				</a>
				<a
					href="https://github.com/ferastajuore"
					target="_blank"
					className="mx-5 rounded-lg bg-zinc-600/100 p-2"
				>
					<BsGithub fontSize="1.5rem" color="#FFF" />
				</a>
			</div>

			<hr className="border-2" />
			<div className="mt-8 flex justify-center">
				<p className="text-lg text-white">
					Copyright &#169; 2023 All rights reserved. | This website is made with
					<BsFillSuitHeartFill
						fontSize="1.2em"
						color="#d42a3b"
						className="mx-1 inline-block md:mx-3"
					/>
					by{' '}
					<a
						href="https://ferasariabi.vercel.app/"
						target="_blanck"
						className="font-light text-red-700"
					>
						Feras Ariabi
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
