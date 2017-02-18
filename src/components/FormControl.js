import React, { Component } from 'react';

class FormControl extends Component {
  render() {
    return (
      <div>
        {
          (this.props.isEditMode)
            ?
            <input type="text"
                   value={this.props.value}
                   onChange={this.props.onChange}
                   className="form-control"/>
            :
            this.props.value
        }
      </div>
    );
  }
}

FormControl.propTypes = {
  isEditMode: React.PropTypes.bool.isRequired,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
}

export default FormControl;