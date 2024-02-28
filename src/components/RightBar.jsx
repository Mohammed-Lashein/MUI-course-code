import {
	Box,
	Typography,
	Avatar,
	AvatarGroup,
	ImageList,
	ImageListItem,
	List,
	ListItemText,
	ListItemAvatar,
	Divider,
	ListItem,
} from '@mui/material'

function RightBar() {
	return (
		<Box
			flex='2'
			sx={{ display: { xs: 'none', sm: 'block' } }}
		>
			<Box
				position='fixed'
				width={300}
			>
				<Typography
					variant='h6'
					m={1}
					fontWeight={100}
				>
					Online Friends
				</Typography>
				<AvatarGroup
					max={4}
					sx={{ display: 'flex', justifyContent: 'center' }}
					/* Since I don't have a lot of avatars like in the video -and there is no need to have that much - I added some styles so that the container display is a bit nicer. */
				>
					<Avatar>A</Avatar>
					<Avatar>B</Avatar>
					<Avatar>C</Avatar>
					<Avatar>D</Avatar>
					<Avatar>E</Avatar>
				</AvatarGroup>
				<Typography
					variant='h6'
					m={1}
					fontWeight={100}
				>
					Latest Photos
				</Typography>
				<ImageList
					cols={3}
					/* Take care that it is cols and not col as I spent a couple of minutes trying to figure out why the images are not fitting in 3 columns  */
					rowHeight={100}
					gap={5}
				>
					<ImageListItem cols={1}>
						<img
							src='/coffee.jpeg'
							alt='coffee'
						/>
					</ImageListItem>

					<ImageListItem>
						<img
							src='/tomato.jpeg'
							alt='tomato'
						/>
					</ImageListItem>

					<ImageListItem>
						<img
							src='/basketball.jpeg'
							alt='basketball'
						/>
					</ImageListItem>
				</ImageList>
				<Typography
					variant='h6'
					m={1}
					fontWeight={100}
				>
					Latest Conversations
				</Typography>
				<List>
					<ListItem alignItems='flex-start'>
						<ListItemAvatar>
							<Avatar>MH</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary='lorem ipsum'
							secondary='lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
						></ListItemText>
					</ListItem>
					<Divider variant='inset'/>
					{/* It was really a surprise that the Divider won't work if placed inside the li and instead should be placed outside of it . */}
					<ListItem alignItems='flex-start'>
						<ListItemAvatar>
							<Avatar>AH</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary='lorem ipsum'
							secondary='lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
						></ListItemText>
					</ListItem>
						<Divider variant='inset'/>
					<ListItem alignItems='flex-start'>
						<ListItemAvatar>
							<Avatar>BH</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary='lorem ipsum'
							secondary='lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
						></ListItemText>
					</ListItem>
						<Divider variant='inset'/>
				</List>
			</Box>
		</Box>
	)
}
export default RightBar
