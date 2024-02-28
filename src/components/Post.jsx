import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	CardHeader,
	Avatar,
	IconButton,
	Typography,
	Checkbox,
} from '@mui/material'
import { red } from '@mui/material/colors'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { FavoriteBorder, Favorite, Share } from '@mui/icons-material'

function Post() {
	return (
		<Box sx={{ margin: 5 }}>
			{/* The margin given to the Box was 40px . And 40 / 5 = 8;
      So, in MUI, margin starting value is 8px (if we said margin: 1) */}
			<Card>
				<CardHeader
					avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
					action={
						<IconButton>
							<MoreVertIcon />
						</IconButton>
					}
					title='Username'
					subheader='post date'
				/>
				<CardMedia
					image='/forest.jpeg'
          /* I have to mention a note here. The way we're accessing images is special to vite - and I think so  also in create react app- where we can access the assets in the public directory by just using a forward slash / then the asset name (I should mention also that the public folder MUST be in the root directory. You can change its place and change vite configurations, but I didn't search for that as I am more focused now on learning MUI and not exploring vite nuances .)
          
          Link to the information in the docs: 
          https://vitejs.dev/guide/assets.html#the-public-directory*/
					component='img'
					alt='Scenery'
				/>
				<CardContent>
					<Typography
						variant='body2'
						color='text.secondary'
					>
						This is a very nice view of the forest .
					</Typography>
				</CardContent>
				<CardActions>
					<IconButton>
						<Checkbox
							icon={<FavoriteBorder />}
							checkedIcon={<Favorite />}
						/>
					</IconButton>
					<IconButton>
						<Share />
					</IconButton>
				</CardActions>
			</Card>
		</Box>
	)
}
export default Post
