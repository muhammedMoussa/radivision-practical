import React from 'react'
import Carousel from 'react-material-ui-carousel'
import {Button, Paper} from '@material-ui/core'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import FlagOutlinedIcon from '@material-ui/icons/FlagOutlined';

import './style.css'
import { api } from '../../shared/api'

function Slider({items}) {
    return (
        <div className="carousel__container">
            <Carousel>
                {
                    items?.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>   
        </div>
    )
}

export default Slider

function Item({item}) {
    return (
        <Paper>
            {item && (
                <div className="paper"
                    style={{
                        backgroundImage: `url(${`${api.backdrop_route}${item.poster_path}`})`
                    }}
                >
                    <h2 className="item__title text__gradient">{item.title}</h2>
                    <p className="text__gradient item__overview">
                        {item.overview} <br />  <br />
                        <span>Release Date: {item.release_date}</span>
                    </p>
                    <div className="item__icons">
                        <Button
                            variant="contained"
                            startIcon={<ThumbUpOutlinedIcon />}
                        >
                            {item.vote_count}
                        </Button>

                        <Button
                            variant="contained"
                            startIcon={<FlagOutlinedIcon />}
                        >
                            {item.popularity}
                        </Button>
                    </div>
                </div>
            )}
        </Paper>
    )
}