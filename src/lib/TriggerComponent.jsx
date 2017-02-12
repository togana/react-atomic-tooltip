import React, { Component, PropTypes } from 'react';

export default class TriggerComponent extends Component {
  constructor(props) {
    super(props);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
  }

  onMouseOver() {
    this.props.setVisibility(true);
  }

  onMouseOut() {
    this.props.setVisibility(false);
  }

  onTouchStart() {
    this.props.setVisibility(true);
  }

  onTouchEnd() {
    this.props.setVisibility(false);
  }

  render() {
    const { styles, children } = this.props;
    return (
      <div
        style={styles}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        onTouchStart={this.onTouchStart}
        onTouchEnd={this.onTouchEnd}
      >
        {children}
      </div>
    );
  }
}

TriggerComponent.propTypes = {
  styles: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
  setVisibility: PropTypes.func.isRequired,
};
