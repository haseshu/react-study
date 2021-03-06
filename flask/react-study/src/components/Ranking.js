import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardContent, CardMedia} from '@material-ui/core';
import Button from '@material-ui/core/Button';

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
        const {category, ranking, error} = this.props;
        return (
            <div>
                <h2>{typeof category !== 'undefined'
                    ? category.name + 'のランキング'
                    :''}
                </h2>
                {(() =>{
                    if(error){
                        return <p>エラーが発生しました。</p>;
                    } else if(typeof ranking === 'undefined'){
                        return <p>読み込み中…</p>;
                    }else{
                        /*
                        return(
                            <ol>
                                {ranking.map(item =>(
                                    <li key={'ranking-item-' + item.code}>
                                        <img alt={item.name} src={item.imageUrl} />
                                        <a href={item.url} target="_blank">{item.name}</a>
                                        </li>
                                ))}
                            </ol>
                        );
                        */
                       return ranking.map((item, i) =>(
                           <Card
                           key={"ranking-item-"+item.code}
                           style={{maxWidth:'500px', margin:'32px auto'}}
                           >
                               <CardMedia
                               image={item.imageUrl}
                               title={i + "位"+ item.name}
                               style={{height:'200px'}}
                               />
                               <CardContent>
                               {i+1 + "位"+ item.name}
                               </CardContent>
                               <CardActions >
                                   <Button
                                   variant="contained"
                                   color="secondary"
                                   fullWidth="true"
                                   href={item.url}
                                   >商品ページへ</Button>
                               </CardActions>
                           </Card>
                       ));
                    }
                })()}
            </div>
        );
    }
}

Ranking.protoType = {
    categoryId:PropTypes.string.isRequired,
    onMount:PropTypes.func.isRequired,
    onUpdate:PropTypes.func.isRequired,

    category:PropTypes.shape({
        id:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
    }),
    ranking:PropTypes.arrayOf(
        PropTypes.shape({
            code:PropTypes.string.isRequired,
            name:PropTypes.string.isRequired,
            url:PropTypes.string.isRequired,
            imageUrl:PropTypes.string.isRequired,
        })
    ),
    error:PropTypes.bool.isRequired
};

Ranking.defaultProps = {
    categoryId:'1'

};