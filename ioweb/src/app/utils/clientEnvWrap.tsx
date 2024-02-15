'use client';
/**
 * @module 动态加载包装器
 */
import dynamic from 'next/dynamic';

const DynamicLoadWrap = dynamic(() => import('./dynamicLoadWrap'), {
	ssr: false  //禁用服务器渲染，让渲染在客户端进行
});

export default function ClientEnvWrap({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (
		<DynamicLoadWrap>
			{children}
		</DynamicLoadWrap>
	);
}