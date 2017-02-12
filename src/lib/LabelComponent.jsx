import React, { Component, PropTypes } from 'react';

export default class LabelComponent extends Component {
  render() {
    const { styles, children, arrowStyles } = this.props;
    return (
      <div
        style={{
          display: 'inline-block',
        }}
      >
        <div style={arrowStyles} />
        <div style={styles} >
          {children}
        </div>
      </div>
    );
  }
}

LabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  styles: PropTypes.object.isRequired,
  arrowStyles: PropTypes.object.isRequired,
};
