import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from './Tooltip';

function App() {
	return (
		<div>
			<Tooltip content={'yolo'} open={false}>
				{({ show, hide, toggle }) => (
					<div>
						<button onClick={show}>Show</button>
						<button onClick={hide}>Hide</button>
						<button onClick={toggle}>Toggle</button>
					</div>
				)}
			</Tooltip>
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
