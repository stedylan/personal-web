import React, { Component } from 'react'
import { Well } from 'react-bootstrap'
export default class Comment extends Component {
    render() {
        return (
            <div className="comment">
                <Well>
                    <p className="comment-name">{this.props.name}</p>
                    <hr />
                    <p className="comment-content">{this.props.content}</p>
                </Well>
            </div>
        )
    }
}
