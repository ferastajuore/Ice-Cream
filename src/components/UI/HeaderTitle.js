import React from 'react';

const HeaderTitle = ({ classDiv, classTitle, title }) => {
	return (
		<div
			className={`m-5 text-center text-5xl font-bold uppercase tracking-widest ${
				classDiv ? classDiv : ''
			}`}
		>
			<h2 className={classTitle}>{title}</h2>
		</div>
	);
};

export default HeaderTitle;
