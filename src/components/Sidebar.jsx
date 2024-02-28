import { Box, List, ListItemText, ListItemIcon, ListItemButton,  Switch } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import ArticleIcon from '@mui/icons-material/Article'
import GroupIcon from '@mui/icons-material/Group'
import StorefrontIcon from '@mui/icons-material/Storefront'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import NightlightRoundIcon from '@mui/icons-material/NightlightRound'
// The icon is named round, but it is actually a crescent .

function Sidebar({mode,setMode}) {
	return (
		<Box
			flex='1'
			sx={{ display: { xs: 'none', sm: 'block' } }}
		>
			<Box position='fixed'>
				{/* A very important question I had to chat. In the video and I did it practically, how onAdding the position: fixed; to the outer Box component it caused elements overlapping, while adding that property to the inner Box container didn't cause an overlap . 
				
				Answer: When we add position: fixed; to the outer Box component, we are fixing its position relative to the viewport, so it will cause content overlap since position: fixed; removes the element from normal document flow . 
				
				Whereas when we add that property to the inner Box, it becomes fixed related to its parent, which is already in the document flow, thus no overlapping would happen . 
				
				Another question (which I answered myself) : How did the Box component take a height equal to the height of the Feed ?
				
				Answer: That's easy, since all of our app is wrapped in a Stack component, which implements flexbox, then the height of all the elements will match the height of the tallest element in the container . */}

			<List>
				<ListItemButton>
					<ListItemIcon>
						<HomeIcon />
					</ListItemIcon>
					<ListItemText primary='Homepage'></ListItemText>
				</ListItemButton>

				<ListItemButton>
					<ListItemIcon>
						<ArticleIcon />
					</ListItemIcon>
					<ListItemText primary='Pages' />
				</ListItemButton>

				<ListItemButton>
					<ListItemIcon>
						<GroupIcon />
					</ListItemIcon>
					<ListItemText primary='Groups' />
				</ListItemButton>

				<ListItemButton>
					<ListItemIcon>
						<StorefrontIcon />
					</ListItemIcon>
					<ListItemText primary='Marketplace' />
				</ListItemButton>

				<ListItemButton>
					<ListItemIcon>
						<PersonIcon />
					</ListItemIcon>
					<ListItemText primary='Friends'></ListItemText>
				</ListItemButton>

				<ListItemButton>
					<ListItemIcon>
						<SettingsIcon />
					</ListItemIcon>
					<ListItemText primary='Settings'></ListItemText>
				</ListItemButton>

				<ListItemButton>
					<ListItemIcon>
						<AccountBoxIcon></AccountBoxIcon>
					</ListItemIcon>
					<ListItemText primary='Profile' />
				</ListItemButton>

				<ListItemButton component='a'>
					<ListItemIcon>
						<NightlightRoundIcon />
					</ListItemIcon>
					<Switch onChange={() => setMode(mode === 'light' ? 'dark': 'light')}/>
				</ListItemButton>
			</List>
			</Box>
		</Box>
	)
}
export default Sidebar
