import React from 'react';

const Button = ({ className, title }) => {
	return <button className={`${className} p-2 px-5 text-lg`}>{title}</button>;
};

export default Button;
