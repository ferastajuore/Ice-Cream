import { ChakraProvider } from '@chakra-ui/react';

import '@/styles/main.scss';
import 'swiper/css';
import 'swiper/css/bundle';

export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
