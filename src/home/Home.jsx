import { Link } from "@solidjs/router";
import './Home.css';

const Home = () => {
	return (
		<div className="container">
			<div className="card">
				<h1 className="title">Welcome to Adianit - Your AI Softwarehouse</h1>
				<p className="description">
					At Adianit, we specialize in leveraging the power of Artificial Intelligence 
					to provide innovative and effective solutions for your business. 
					Our expertise ranges from Machine Learning, Deep Learning, 
					Natural Language Processing to other advanced AI technologies.
				</p>
				<div className="links">
					<Link href="/tos" className="link-item">Terms of Service</Link>
					<Link href="/pp" className="link-item">Privacy Policy</Link>
				</div>
				<p className="contact">
					For more information, feel free to reach us at: 
					<a href="mailto:support@adianit.com">support@adianit.com</a>
				</p>
			</div>
		</div>
	);
}

export default Home;
