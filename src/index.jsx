import React, { Component, PropTypes } from 'react';
import TriggerComponent from './lib/TriggerComponent';
import LabelComponent from './lib/LabelComponent';

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labelComponentStyle: { display: 'none' },
    };
    this.setVisibility = this.setVisibility.bind(this);
  }

  setVisibility(flag) {
    const { labelComponentStyle } = this.state;
    let updatedStyles;
    if (flag) {
      updatedStyles = Object.assign({}, labelComponentStyle, { display: 'block' });
    } else {
      updatedStyles = Object.assign({}, labelComponentStyle, { display: 'none' });
    }
    this.setState({
      labelComponentStyle: updatedStyles,
    });
  }

  render() {
    const { tooltip, tooltipStyle, arrowStyle, children, childrenStyle } = this.props;
    const { labelComponentStyle } = this.state;
    return (
      <div
        style={{
          display: 'inline-block',
        }}
      >
        <TriggerComponent
          styles={childrenStyle}
          setVisibility={this.setVisibility}
        >
          {children}
        </TriggerComponent>
        <LabelComponent
          styles={Object.assign({}, tooltipStyle, labelComponentStyle)}
          arrowStyles={Object.assign({}, arrowStyle, labelComponentStyle)}
        >
          {tooltip}
        </LabelComponent>
      </div>
    );
  }
}

Tooltip.propTypes = {
  tooltip: PropTypes.element.isRequired,
  tooltipStyle: PropTypes.object,
  arrowStyle: PropTypes.object,
  children: PropTypes.element.isRequired,
  childrenStyle: PropTypes.object,
};

Tooltip.defaultProps = {
  tooltipStyle: {
    display: 'block',
    borderRadius: '4px',
    maxWidth: '200px',
    padding: '2px 8px',
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#000',
  },
  arrowStyle: {
    borderStyle: 'solid',
    borderWidth: '0 4px 4px 4px',
    borderColor: 'transparent transparent #000 transparent',
    position: 'relative',
    top: '0px',
    width: 0,
    left: '45%',
  },
  childrenStyle: {},
};

export default Tooltip;
