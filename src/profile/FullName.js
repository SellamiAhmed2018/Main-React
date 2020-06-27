import React from "react";

const FullName = (full_name) => {
	return(
		<React.Fragment>
			<h1 className={"personal_data"}>My Name is : {full_name} !</h1>
		</React.Fragment>
	);

}

export default FullName;