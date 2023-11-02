import { Link } from 'react-router-dom';
import { Flex, Font, Img} from '../../styles/kitStyles';

const KitList = ({ kits }) => {
    return (
					<Font>
						<Flex>
							{ kits.map( k =>
								<Link to={`/kits/${k.id}`} style={{ color: "#fe2712", textDecoration: 'none'}}>
									<Img src={k.image} style={{ width: '400px', borderRadius: '5px'}}></Img>
									<p>{k.name}</p>
								</Link>
							)}
						</Flex>
					</Font>  
    	)
		}

export default KitList;