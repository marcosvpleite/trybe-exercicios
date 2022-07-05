import React from "react";
import PropTypes from 'prop-types'

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image, moreInfo} = this.props.pokemon
    return (

    )
  }

}

Pokemon.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape(
        {
            value: PropTypes.string.isRequired,
            measurementUnit: PropTypes.string.isRequired,
        }
    )
}

export default Pokemon;