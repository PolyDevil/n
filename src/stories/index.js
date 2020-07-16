import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from 'components/Button';

storiesOf('Button', module).add('range', () => (
	<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
		<div>
			<div>
				<Button
					size="small"
					type="primary"
					model="normal"
				>
					Small
				</Button>
				<Button
					type="primary"
					model="normal"
				>
					Default
				</Button>
				<Button
					size="large"
					type="primary"
					model="normal"
				>
					Large
				</Button>
			</div>
			<div>
				<Button
					size="small"
					type="primary"
					model="shade"
				>
					Small
				</Button>
				<Button
					type="primary"
					model="shade"
				>
					Default
				</Button>
				<Button
					size="large"
					type="primary"
					model="shade"
				>
					Large
				</Button>
			</div>
			<div>
				<Button
					size="small"
					type="primary"
					model="ghost"
				>
					Small
				</Button>
				<Button
					type="primary"
					model="ghost"
				>
					Default
				</Button>
				<Button
					size="large"
					type="primary"
					model="ghost"
				>
					Large
				</Button>
			</div>
			<div>
				<Button
					size="small"
					type="primary"
					model="text"
				>
					Small
				</Button>
				<Button
					type="primary"
					model="text"
				>
					Default
				</Button>
				<Button
					size="large"
					type="primary"
					model="text"
				>
					Large
				</Button>
			</div>
		</div>
		<div>
			<div>
				<Button
					size="small"
					type="secondary"
					model="normal"
				>
					Small
				</Button>
				<Button
					type="secondary"
					model="normal"
				>
					Default
				</Button>
				<Button
					size="large"
					type="secondary"
					model="normal"
				>
					Large
				</Button>
			</div>
			<div>
				<Button
					size="small"
					type="secondary"
					model="shade"
				>
					Small
				</Button>
				<Button
					type="secondary"
					model="shade"
				>
					Default
				</Button>
				<Button
					size="large"
					type="secondary"
					model="shade"
				>
					Large
				</Button>
			</div>
			<div>
				<Button
					size="small"
					type="secondary"
					model="ghost"
				>
					Small
				</Button>
				<Button
					type="secondary"
					model="ghost"
				>
					Default
				</Button>
				<Button
					size="large"
					type="secondary"
					model="ghost"
				>
					Large
				</Button>
			</div>
			<div>
				<Button
					size="small"
					type="secondary"
					model="text"
				>
					Small
				</Button>
				<Button
					type="secondary"
					model="text"
				>
					Default
				</Button>
				<Button
					size="large"
					type="secondary"
					model="text"
				>
					Large
				</Button>
			</div>
		</div>
		<div>
			<div>
				<Button
					size="small"
					type="tertiary"
					model="normal"
				>
					Small
				</Button>
				<Button
					type="tertiary"
					model="normal"
				>
					Default
				</Button>
				<Button
					size="large"
					type="tertiary"
					model="normal"
				>
					Large
				</Button>
			</div>
			<div>
				<Button
					size="small"
					type="tertiary"
					model="shade"
				>
					Small
				</Button>
				<Button
					type="tertiary"
					model="shade"
				>
					Default
				</Button>
				<Button
					size="large"
					type="tertiary"
					model="shade"
				>
					Large
				</Button>
			</div>
			<div>
				<Button
					size="small"
					type="tertiary"
					model="ghost"
				>
					Small
				</Button>
				<Button
					type="tertiary"
					model="ghost"
				>
					Default
				</Button>
				<Button
					size="large"
					type="tertiary"
					model="ghost"
				>
					Large
				</Button>
			</div>
			<div>
				<Button
					size="small"
					type="tertiary"
					model="text"
				>
					Small
				</Button>
				<Button
					type="tertiary"
					model="text"
				>
					Default
				</Button>
				<Button
					size="large"
					type="tertiary"
					model="text"
				>
					Large
				</Button>
			</div>
		</div>
	</div>
));