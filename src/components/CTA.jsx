import linkedIn from '../images/icons/ic_linkedIn.svg';
import github from '../images/icons/ic_github.svg';
import wellFound from '../images/icons/ic_wellFound.svg';
import twitter from '../images/icons/ic_twitter.svg';
import CV from '../images/icons/ic_cv.svg';

const CTA = () => {
	return (
		<div className="CTA-container">
			<div className="CTA">
				<h1 className="header">Hi I'm Cecilia</h1>
				<p className="tag-line">Fullstack Web Developer</p>
				<button className="PF-button-primary"type="button">Contact Me</button>
				<ul className="social-icons">
					<a href="https://www.linkedin.com/in/cecilia-wangui-mukima/">
						<img src={linkedIn} alt="LinkedIn link"/>
					</a>
					<a href="https://github.com/c3c1l1a">
						<img src={github} alt="Githuh link"/>
					</a>
					<a href="https://angel.co/u/cecilia-wangui-mukima">
						<img src={wellFound} alt="WellFound link"/>
					</a>
					<a href="https://twitter.com/CMukima/">
						<img src={twitter} alt="Twitter link"/>
					</a>
					<a href="https://docs.google.com/document/d/e/2PACX-1vRhRip-4P6Q0cqIzqKqahUqqA4CmCCOn0iP8IX7FOi6gXP2OcpyjZYzuIpeu69VY71Ncw0Zg1-DHp8m/pub">
						<img src={CV} alt="CV link" />
					</a>
				</ul>
				
			</div>
		</div>
	)
}

export default CTA;