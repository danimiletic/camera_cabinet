import { Link } from 'react-router-dom';
import { Flex, Font, MainContainer} from '../../styles/kitStyles';

const KitList = ({ kits }) => {
    return (
				<MainContainer>
					<Font>
						<Flex>
							{ kits.map( k =>
								<Link to={`/kits/${k.id}`} style={{ color: "#fe2712", textDecoration: 'none'}}>
									<img src={k.image} style={{ width: '400px', borderRadius: '5px'}}></img>
									<p>{k.name}</p>
								</Link>
							)}
						</Flex>
					</Font>
				</MainContainer>
    	)
		}

export default KitList;