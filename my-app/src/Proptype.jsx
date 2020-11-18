import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropType extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>哈哈：{this.props.title}</div>
    );
  }
}

export default PropType;

// props验证
PropType.propTypes = {
  title: PropTypes.string.isRequired
}

// props默认值
PropType.defaultProps = {
  title: "name"
}