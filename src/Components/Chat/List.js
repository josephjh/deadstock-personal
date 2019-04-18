import React, {Component} from 'react';
import sockets from './Sockets';
import axios from 'axios';
import {handleList,handleFriend} from '../../ducks/reducer';
import { connect } from 'react-redux';

class List extends Component {
    componentDidMount(){
        this.getChats()
    }

    selectUser(friend){
        this.props.handleFriend(friend)
        this.props.startChat(friend)
    }

    getChats=async()=>{
        let chats = await axios.get('/api/chats')
        chats = chats.data
        this.props.handleList(chats)
    }

    render(){
        console.log(this.props.list)
        const mappedName = this.props.list.map(name=>{
            return(
                <div onClick={()=>this.selectUser(name)} style={{display:'flex',maxHeight:'100%',alignItems:'center',border:'solid black 1px',margin:'5px',background:'orange',borderRadius:'15px'}}>
                    <img src={name.profile_pic} style={{height:'25px',width:'25px',borderRadius:'50%',marginLeft:'5px',marginRight:'5px'}}/>
                    <h3 style={{fontSize:'1rem'}}>{name.first_name} {name.last_name}</h3>
                </div>
            )
        })
        return(
            <div style={{height: "100%"}}>
            {mappedName}
            </div>
        )
    }
}

function mapStateToProps (reduxState){
    return{
        list:reduxState.list
    }
}

export default connect(mapStateToProps,{handleList,handleFriend})(List) 