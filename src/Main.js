import React from "react";
import style from "./style.css";
import FullName from "./profile/FullName.js";
import Address from "./profile/Address.js";
import ProfilPhoto from "./profile/ProfilPhoto.js";
import "bootstrap/dist/css/bootstrap.css";

const Main = () => {
	return(
		<React.Fragment>
			{FullName("Sellami Ahmed")}
			<ProfilPhoto />
			{Address("sellamiahmed2018@gmail.com")}
		</React.Fragment>
	);
}


export default Main;