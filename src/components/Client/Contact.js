import React from 'react';
import { Button, HeaderTitle } from '@/components/UI';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail, MdLocationPin } from 'react-icons/md';
import { FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';

const Contact = () => {
	return (
		<section className="contact bg-lg-3 bg p-10 py-24 pb-20">
			<div className="flex justify-center">
				<div className="mr-8">
					<HeaderTitle title="Contact us" classTitle="text-white text-2xl text-left" />
					<HeaderTitle
						title="Get in touch today"
						classDiv="mb-8"
						classTitle="text-white text-left capitalize"
					/>
					<div>
						<div className="m-6 flex items-center text-white">
							<MdEmail fontSize="1.5rem" />
							<h6 className="mx-5 text-left text-lg">example@gmail.com</h6>
						</div>
						<div className="m-6 flex items-center text-white">
							<BsFillTelephoneFill fontSize="1.5rem" />
							<h6 className="mx-5 text-left text-lg">092-123-45-678</h6>
						</div>
						<div className="m-6 flex items-center text-white">
							<MdLocationPin fontSize="1.5rem" />
							<h6 className="mx-5 text-left text-lg">Libya - Tripoly</h6>
						</div>
					</div>
				</div>
				<div className="rounded-3xl bg-gray-100 p-5">
					<FormControl>
						<div className="mb-3 columns-2">
							<FormLabel>Name</FormLabel>
							<Input type="text" placeholder="Enter your Full Name" />
							<FormLabel>Email</FormLabel>
							<Input type="email" placeholder="Enter your email" />
						</div>
						<div className="mb-3 columns-2">
							<FormLabel>Phone</FormLabel>
							<Input type="text" placeholder="090000000" />
							<FormLabel>Area</FormLabel>
							<Input type="text" placeholder="Enter your area" />
						</div>
						<div className="mb-3 columns-1">
							<FormLabel>Message</FormLabel>
							<Textarea placeholder="Please type your message..." rows={10} />
						</div>

						<Button
							title="send"
							className="rounded-xl bg-purple-700 capitalize text-white"
						/>
					</FormControl>
				</div>
			</div>
		</section>
	);
};

export default Contact;
