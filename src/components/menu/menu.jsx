import {katnip} from "katnip";
import closeIcon from "../../images/icons/ic_close.svg";

const Menu = () => {
	let menu = katnip.useChannel("menuHeader");
	return (
		<ul className="PF-menu">
			<img className="menu-close-icon"src={closeIcon}/>
			{menu.map((item) => {
				return (
					<li key={item.label}>{item.label}</li>
				);
			})}
		</ul>
	);
}

export default Menu;