import {
	Tooltip,
	Modal,
	Button,
	Box,
	Fab,
	styled,
	Typography,
	Avatar,
	TextField,
	Stack,
	ButtonGroup,
} from '@mui/material'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
// In the video, the import was named Add, so the instructor changed its name so that it doesn't conflict with the name of the component we are exporting. However, now in the docs, the icon is named AddIcon by default

import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import PhotoIcon from '@mui/icons-material/Photo'
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

const StyledModal = styled(Modal)({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
})
// After trial, there were no difference between placing this code inside or outside the component -I was afraid that it may cause too many re-renders - but it didn't . So I will place it outside of the component as in the video .

const UserBox = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
	marginBottom: '20px',
})

function AddPost() {
	const [open, setOpen] = useState(false)
	function handleModalOpening() {
		setOpen(true)
	}
	function handleModalClosing() {
		setOpen(false)
	}
	return (
		<>
			<Tooltip
				title='Add Post'
				onClick={handleModalOpening}
				sx={{
					position: 'fixed',
					bottom: '10px',
					left: {
						xs: 'calc(50% - 28px)',
						/* In the video, the subtracted value was 28px, but I found that the dimensions of the circle (if we imagined the it is in a square) was 56px, so 56 / 2 = 28px 
            
            That's why I subtracted 28 instead of 25*/
						md: 30,
					},
				}}
			>
				<Fab color='primary'>
					<AddIcon />
				</Fab>
			</Tooltip>
			<StyledModal
				open={open}
				onClose={handleModalClosing}
			>
				<Box sx={{ bgcolor: 'white', width: 400, minHeight: 250, borderRadius: 2, padding: 3 }}>
					<Typography
						sx={{
							textAlign: 'center',
							color: 'gray',
							mt: 1,
						}}
						variant='h6'
					>
						Create Post
					</Typography>
					<UserBox>
						<Avatar sx={{ width: 35, height: 35 }}>MH</Avatar>
						<Typography>Username</Typography>
					</UserBox>
					<TextField
						rows={4}
						placeholder="What's on your mind ? "
						fullWidth
						multiline={true}
						variant='standard'
						p={2}
					/>
					<Stack
						direction='row'
						gap={0.5}
						mt={1}
						mb={2}
					>
						<EmojiEmotionsIcon color='primary' />
						<PhotoIcon color='secondary' />
						<VideoCameraBackIcon color='success' />
						<PersonAddIcon color='error' />
					</Stack>
					<ButtonGroup
						variant='contained'
						fullWidth
					>
						<Button>Post</Button>
						<Button sx={{ maxWidth: '100px' }}>
							<CalendarMonthIcon />
						</Button>
					</ButtonGroup>
				</Box>
			</StyledModal>
		</>
	)
}
export default AddPost
