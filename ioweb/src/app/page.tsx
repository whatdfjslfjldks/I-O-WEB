// 'use client'

// import dynamic from 'next/dynamic';

// const Router_1 = dynamic(() => import('./router_1'), {
// 	ssr: false
// });

// function page() {
// 	return (
// 		<Router_1 />
// 	);
// }

// export default page; 

'use client';

import { useState, useEffect } from "react";
import View from './view';

export default function Home() {
	const [loadState, setLoadState] = useState('loaded') //loaded first,loading when really use

	// function modelInitCallback(){
	// 	setLoadState('loading');
	// 	Model.init.then(()=>{
	// 		setLoadState('loaded');
	// 	}).catch(()=>{
	// 		setLoadState('fail');
	// 	});
	// }
	// useEffect(modelInitCallback,[]);

	switch (loadState) {
		case 'loaded': //加载成功
			return (
				<View />
			);
			break;

		case 'fail':
			return (
				<main>
					<div className='fixed flex flex-col items-center justify-center bg-indigo-900 h-full w-full z-50'>
						<p className='text-red-500'>加载失败</p>
						<p className='text-white'>
							无法连接到服务器。请检查您的网络连接并重试。
						</p>
					</div>
				</main>
			);
			break;

		default:
			return (
				<main>
				<div className='fixed flex flex-col items-center justify-center h-full w-full z-50 bg-indigo-900 text-white'>
				  <p className='text-gray-300'>加载中...</p>
				</div>
			  </main>
			);
			break;
	}



}