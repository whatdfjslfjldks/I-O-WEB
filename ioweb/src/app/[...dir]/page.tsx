'use client'

import dynamic from 'next/dynamic';

const Router_1 = dynamic(() => import('../router_1'), {
	ssr: false
});

function page() {
	return (
		<Router_1 />
	);
}

export default page; 