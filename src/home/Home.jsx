import { Link } from "@solidjs/router";


const Home = () => {
	return (
		<>
			<h1>Welcome to adianit.</h1>
			<div style={{ display: 'flex-col' }}>
				<Link href="/tos"><div>Terms of Service</div></Link>
				<Link href="/pp"><div>Privacy Policy</div></Link>
			</div>
		</>
	);
}

export default Home;