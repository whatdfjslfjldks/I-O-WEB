'use client';

export default function DynamicLoadWrap({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (
		<>
			{children}
		</>
	);
}