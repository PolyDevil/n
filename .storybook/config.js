import { configure, addDecorator } from '@storybook/react';
import Theme from '../src/settings/themes';
import React from 'react';
import { ThemeProvider } from 'styled-components'

function loadStories() {
	require('../src/stories');
}

addDecorator((story) => (
	<ThemeProvider theme={Theme.light}>
		{story()}
	</ThemeProvider>
))

configure(loadStories, module);