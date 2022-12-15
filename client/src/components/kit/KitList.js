import { Link } from 'react-router-dom';

import { Flex, Font, MainContainer, DarkBackground } from '../../styles/kitStyles';

import { Container } from 'react-bootstrap';

const KitList = ({ kits }) => {
    return(
			// <Container>
			// 	<Font>
			// 		<Grid>
			// 			{ kits.map( k =>
			// 				<Link to={`/kits/${k.id}`} style={{ color: "#fe2712", textDecoration: 'none'}}>
			// 					<img src={k.image} style={{ width: '400px'}}></img>
			// 					<p>{k.name}</p>
			// 				</Link>
			// 			)}
			// 		</Grid>
			// 	</Font>
			// </Container>

			// <DarkBackground>
				<MainContainer>
					<Font>
						<Flex>
							{ kits.map( k =>
								<Link to={`/kits/${k.id}`} style={{ color: "#fe2712", textDecoration: 'none'}}>
									<img src={k.image} style={{ width: '400px'}}></img>
									<p>{k.name}</p>
								</Link>
							)}
						</Flex>
					</Font>
				</MainContainer>
			// </DarkBackground>
    	)
		}

export default KitList;