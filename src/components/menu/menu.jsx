import {katnip} from "katnip";
import { useState, useEffect } from "react";
import closeIconImg from "../../images/icons/ic_close.svg";
import humburgerIconImg from "../../images/icons/ic_humburger.svg";

const Menu = ({ menuInfo }) => {
	let [menuState, setMenuState] = useState();

	useEffect(() => {
		if (typeof window !== undefined){
			if (window.innerWidth > 720){
				setMenuState({
					device:"menu-desktop",
					humburgerIcon: "humburgerIcon-hidden",
					menuItems: "flex",
					closeIcon: 'closeIcon-hidden'
				}); 
			} else {
				setMenuState({
					device:"menu-mobile-hidden",
					humburgerIcon: "menu-humburger-icon",
					menuItems: "menu-items-hidden",
					closeIcon: "closeIcon-hidden",
				});
			}
		}
	}, []);

	const openMenu = () => {
		setMenuState({
			device: "menu-mobile",
			humburgerIcon: "humburgerIcon-hidden",
			menuItems: "",
			closeIcon: "menu-close-icon"
		})
	}

	const closeMenu = () => {
		setMenuState({
			device:"menu-mobile-hidden",
			humburgerIcon: "block",
			menuItems: "menu-items-hidden",
			closeIcon: "closeIcon-hidden",
		});
	}


	if (menuState){
		return (
			<div className="PF-menu-container">
				<img className={`${menuState.humburgerIcon}`} src={humburgerIconImg} onClick={() => openMenu()}/>
				<ul className={`${menuState.device} ${menuState.menuItems}`}>
					<img className={`${menuState.closeIcon}`} src={closeIconImg} onClick={() => closeMenu()}/>
					{menuInfo.map((item) => {
						return (
							<li key={item.label}>{item.label}</li>
						);
					})}
				</ul>
			</div>
		);
	} else {
		return (<div></div>);
	}

	
}

export default Menu;