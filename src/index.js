import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from './Tooltip/renderProps';
import TooltipC, { Message, Toggler } from './Tooltip/compound';

function App() {
	return (
		<React.Fragment>
			<Tooltip content={'yolo'} open={false}>
				{({ show, hide, toggle }) => (
					<React.Fragment>
						<button onClick={show}>Show</button>
						<button onClick={hide}>Hide</button>
						<button onClick={toggle}>Toggle</button>
					</React.Fragment>
				)}
			</Tooltip>

			<hr />

			<TooltipC id={'tooltip'}>
				<Toggler>Toggle</Toggler>
				<Message>Yolo</Message>
			</TooltipC>
		</React.Fragment>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
