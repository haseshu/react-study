import React from 'react';
import PropTypes from 'prop-types';

export default class Ranking extends React.Component{

    constructor(props){
        super(props);
        this.props.onMount(this.props.categoryId);
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        if(this.props.categoryId !== nextProps.categoryId){
            this.props.onUpdate(nextProps.categoryId);
        }
    }
    render(){
        return (
            <div>
                <h2>Rankingコンポーネント</h2>
                <p>カテゴリーID:{this.props.categoryId}</p>
            </div>
        );
    }
}

Ranking.protoType = {
    categoryId:PropTypes.string,
    onMount:PropTypes.func.isRequired,
    onUpdate:PropTypes.func.isRequired
};

Ranking.defaultProps = {
    categoryId:'1'

};