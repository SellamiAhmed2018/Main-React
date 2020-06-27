import React from "react";
import profilPhoto from "./profilPhoto.jpg";

const ProfilPhoto = () => {
	return(
		<React.Fragment>
			<img src={profilPhoto} id="photo"/>
		</React.Fragment>
	);

}

export default ProfilPhoto;