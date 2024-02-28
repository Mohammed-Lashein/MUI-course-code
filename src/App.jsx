import { Stack, ThemeProvider,  createTheme, Box } from '@mui/material'
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import RightBar from './components/RightBar'
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import AddPost from './components/Add'

function App() {
	const [mode, setMode] = useState('light')
	const darkTheme = createTheme({
		palette: {
			mode: mode,
		},
	})
	return (
		<ThemeProvider theme={darkTheme}>
			 {/* Note that here we use theme attribute not value attr as we do in a normal contextProvider in React */}
			<Box
				bgcolor='background.default'
				color='text.primary'
			>
				<Navbar />
				<Stack
					direction='row'
					gap={2}
				>
					<Sidebar
						mode={mode}
						setMode={setMode}
					/>
					<Feed />
					<RightBar />
				</Stack>
				<AddPost />
			</Box>
		</ThemeProvider>
	)
}

export default App
