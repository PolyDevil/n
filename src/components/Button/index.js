import React, { useState } from 'react';

import {
	LoadingOutlined,
} from '@ant-design/icons';

import {
	Styled,
	Content,
	ShadowContent,
} from './style';

function Button({
	size,
	shape,
	type,
	model,
	loading = false,
	children,
}) {
	const [isLoading, setIsLoading] = useState(false);

	return (
		<Styled
			size={size}
			shape={shape}
			type={type}
			model={model}
			onClick={() => setIsLoading(!isLoading)}
		>
			<Content loading={isLoading}>{children}</Content>
			{isLoading && (
				<ShadowContent>
					<LoadingOutlined />
				</ShadowContent>
			)}
		</Styled>
	);
}

export default Button;
