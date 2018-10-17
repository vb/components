import React from 'react';
import PropTypes from 'prop-types';

const { Consumer, Provider } = React.createContext();

const Message = ({ tag: Tag = 'span' }) => (
	<Consumer>
		{({ visible, id }) =>
			visible && (
				<Tag role="tooltip" id={id}>
					message
				</Tag>
			)
		}
	</Consumer>
);

const Toggler = ({ children, tag: Tag = 'div' }) => (
	<Consumer>
		{({ visible, show, hide, id }) => (
			<Tag aria-describedby={id} onMouseEnter={show} onMouseLeave={hide}>
				{children}
			</Tag>
		)}
	</Consumer>
);

Toggler.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.element
	]).isRequired
};

class Tooltip extends React.Component {
	state = {
		visible: this.props.open
	};

	show = () => this.setState({ visible: true });
	hide = () => this.setState({ visible: false });
	toggle = () => this.setState(({ visible }) => ({ visible: !visible }));

	render() {
		return (
			<Provider
				value={{
					...this.state,
					show: this.show,
					hide: this.hide,
					toggle: this.toggle,
					id: this.props.id
				}}
			>
				{this.props.children}
			</Provider>
		);
	}
}

Tooltip.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.element
	]).isRequired,
	id: PropTypes.string.isRequired
};

Tooltip.defaultProps = {
	open: false
};

export default Tooltip;
export { Message, Toggler };
