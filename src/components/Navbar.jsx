import { Avatar, Badge, InputBase, styled } from '@mui/material'
// I am importing styled from emotion on purpose to see if this will cause an error
/* Important update: When I tried to use the theme param in the Search component, I got an error because emotion doesn't pass the theme but instead MUI . 

So, I modified the import .

*/
import { AppBar, Toolbar, Typography, Menu, MenuItem } from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import { Mail, Notifications } from '@mui/icons-material'
import { useState } from 'react'

/* Notes on the components used here : 
- AppBar: Is a header tag that gives a shadow to the element
- Toolbar: Gives a padding to the el */

const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
})

const Search = styled('div')(({ theme }) => ({
	backgroundColor: 'white',
	padding: '0 10px',
	borderRadius: theme.shape.borderRadius,
	width: '40%',
}))

const Icons = styled('div')(({ theme }) => ({
	display: 'flex',
	gap: '0.8rem',
	alignItems: 'center',
	padding: '10px',
	borderRadius: theme.shape.borderRadius,
	[theme.breakpoints.down('md')]: {
		display: 'none',
	},
}))

const UserBox = styled('div')(({ theme }) => {
	// This will be the box that will appear on mobile devices

	// console.log(theme.breakpoints.up('md'))
	// @media (min-width:900px)
	/* This is what I got after logging theme.breakpoints.up('md) . So now I understand, it returns a media query selector that could be used directly in css .  */
	return {
		display: 'flex',
		alignContent: 'center',
		gap: '0.8rem',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	}
})

function Navbar() {
	const [anchorEl, setAnchorEl] = useState(null)
	const [open, setOpen] = useState(false)

	function handleUserIconClick(e) {
		setOpen(true)
		setAnchorEl(e.currentTarget)
	}
	function handleClose() {
		setOpen(false)
		setAnchorEl(null)
	}
	return (
		<AppBar position='sticky'>
			<StyledToolbar>
				<Typography
					variant='h5'
					sx={{ display: { xs: 'none', sm: 'block' } }}
				>
					MUI training
				</Typography>
				<LibraryBooksIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
				<Search>
					<InputBase
						sx={{ width: '100%' }}
						placeholder='search...'
					></InputBase>
				</Search>
				<Icons>
					<Badge
						badgeContent={4}
						color='error'
					>
						<Mail />
					</Badge>
					<Badge
						badgeContent={2}
						color='error'
					>
						<Notifications />
						{/* The Notifications is a component of a bell, as at first I was confused and forgot what it did on reviewing the code  */}
					</Badge>
					<Badge>
						<Avatar
							alt='my avatar'
							sx={{ width: 22, height: 22 }}
							onClick={handleUserIconClick}
						/>
					</Badge>
				</Icons>
				<UserBox>
					<Avatar
						alt='my avatar'
						sx={{ width: 22, height: 22 }}
						onClick={handleUserIconClick}
					/>
					<Typography>M H</Typography>
				</UserBox>
			</StyledToolbar>
			<Menu
				open={open}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				anchorEl={anchorEl}
			>
				<MenuItem onClick={handleClose}>Dashboard</MenuItem>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>Account</MenuItem>
			</Menu>
		</AppBar>
	)
}
export default Navbar
