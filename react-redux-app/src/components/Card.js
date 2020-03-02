import { connect } from "react-redux";
import { useEffect } from "react";
import axios from 'axios';

const Card = (props) => {
    useEffect(() => {
        axios
        .get("https://dog.ceo/api/breeds/image/random")
        .then(res => {
            console.log(res)
        })
    })
};

const mapStateToProps = () => {
    return {

    }
};

export default connect(mapStateToProps, {})(Card);