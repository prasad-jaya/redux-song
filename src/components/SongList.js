import React from "react";
import { connect } from "react-redux";
import { SelectSong } from "../actions";



const SongList = (props) => {

    const renderList = props.songs.map((song) =>{
            return(
                <div className="item" key={song.title}>
                    <h1>title</h1>
                    <div className="right floated content">
                        <button onClick={() => props.SelectSong(song)} className="ui button primary">
                            Select
                        </button>
                    </div>
                    <div className="content" >{song.title}</div>
                </div>
            )
    })
    return(
        <div className="ui divided list">{renderList}</div>
        
    )
}
const mapStateToProps = (state) =>{
    //console.log(state);
    return { songs : state.songs};
}

export default connect(mapStateToProps, { SelectSong })(SongList);