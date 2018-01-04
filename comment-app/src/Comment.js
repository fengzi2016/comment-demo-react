import React,{Component} from 'react'

class Comment extends Component{
    render(){
        return(
            <div>
                <div className = 'comment'>
                    <div className = 'comment-user'></div>
                    <span>{this.props.comment.username}</span>
                </div>
                <p>{this.props.comment.content}</p>
            </div>
        )
    }
}
export default Comment