import React from 'react';
import PropTypes from 'prop-types';

class Tooltip extends React.Component {
	state = {
		visible: this.props.open
	};

	show = () => this.setState({ visible: true });
	hide = () => this.setState({ visible: false });
	toggle = () => this.setState(({ visible }) => ({ visible: !visible }));

	render() {
		const { tag: Tag } = this.props;
		return (
			<React.Fragment>
				{this.state.visible && (
					<Tag className={this.props.className} style={this.props.style}>
						{this.props.content}
					</Tag>
				)}
				{this.props.children({
					show: this.show,
					hide: this.hide,
					toggle: this.toggle
				})}
			</React.Fragment>
		);
	}
}

Tooltip.propTypes = {
	children: PropTypes.func.isRequired,
	content: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
		.isRequired,
	tag: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
	className: PropTypes.string,
	style: PropTypes.object
};

Tooltip.defaultProps = {
	open: false,
	tag: 'div',
	className: 'tooltip',
	style: {}
};

export default Tooltip;
