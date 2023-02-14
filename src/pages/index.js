import { NavBar, Footer } from '@/components/Layout';
import { Home, About, Products, Services, Customers, Contact } from '@/components/Client';

export default function App() {
	return (
		<main>
			<Home>
				<NavBar />
			</Home>
			<About />
			<Products />
			<Services />
			<Customers />
			<Contact />
			<Footer />
		</main>
	);
}
