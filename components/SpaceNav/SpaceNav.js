import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import '../SpaceNav/spacenav.module.scss';

const SpaceNav = () => {
	return (
		<Container fluid className="space-nav">
			<Grid>
				<Grid.Row>
					<Grid.Column>
						<div>
							<h1>SpaceCode</h1>
						</div>
						<div>
							<FontAwesomeIcon icon={['fas','bars']} />
						</div>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	);
};

export default SpaceNav;