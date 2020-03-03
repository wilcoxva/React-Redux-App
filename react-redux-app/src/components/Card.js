import React from 'react';
import { connect } from "react-redux";
import { getImage } from '../actions/Action';

const Card = ({ getImage, image, isFetching, error }) => {
    if (isFetching) {
        return <h2> Fetching an image now. :)</h2>
    }

    if (error) {
        return <h2>{error}</h2>;
      }

    return (
        <div>
            <h2>Image: {image}</h2>
            <button onClick={getImage}>Get new image</button>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        image: state.image,
        isFetching: state.isFetching,
        error: state.error
    }
};

export default connect(mapStateToProps)(Card);