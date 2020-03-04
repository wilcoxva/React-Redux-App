import React from 'react';
import { connect } from "react-redux";
import { getImage } from '../actions/Action';
import styled from 'styled-components';

const Card = ({ getImage, image, isFetching, error }) => {
    if (isFetching) {
        return <h2> Fetching an image now. :)</h2>
    }

    if (error) {
        return <h2>{error}</h2>;
      }

    return (
        <div>
            <H2>Image: <img src={image} /></H2>
            <button onClick={getImage}>Get new image</button>
        </div>
    )
};

const H2 = styled.h2`
    color: lightblue;
`

const mapStateToProps = state => {
    return {
        image: state.image,
        isFetching: state.isFetching,
        error: state.error
    }
};

export default connect(mapStateToProps, {getImage})(Card);