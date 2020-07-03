import React, {Component} from "react";
import Box from "@material-ui/core/Box";
import Comment from "./Comment/Comment";
import AddComment from "./AddComment/AddComment";

export default class CommentList extends Component {
    maxId = 1;
    state = {
        comments: [
            this.createComment('First comment'),
            this.createComment('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ea eligendi itaque perspiciatis placeat quam qui saepe soluta vero vitae?'),
            this.createComment('Third comment'),
            this.createComment('Just a comment #4'),
        ]
    };

    createComment(comment) {
        return {
            id: this.maxId++,
            comment,
            date: new Date().toLocaleString(),
            like: 0,
            dislike: 0
        }
    }
    addComment = (comment) => {
        const newComment = this.createComment(comment);

        this.setState(({comments}) => {
            const newArr = [
                ...comments,
                newComment
            ];
            return {
                comments: newArr
            };

        });
    };
    deleteComment = (id) => {
        this.setState(({comments}) => {
            const idx = comments.findIndex((el) => el.id === id);
            const before = comments.slice(0, idx);
            const after = comments.slice(idx + 1);
            const newArr = [...before, ...after];
            return {
                comments: newArr
            }
        })
    };
    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        let newItem;
        if (propName === 'dislike') {
            newItem = {
                ...oldItem,
                [propName]: oldItem[propName] === 0 ? 1 : 0,
                like: 0
            };
        } else {
            newItem = {...oldItem, [propName]: oldItem[propName] === 0 ? 1 : 0};
        }
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }
    onToggleLike = (id) => {
        this.setState(({comments}) => {
            return {comments: this.toggleProperty(comments, id, 'like')}
        })
    };
    onToggleDislike = (id) => {
        this.setState(({comments}) => {
            return {comments: this.toggleProperty(comments, id, 'dislike')}
        })
    };
    onEditComment = (id, text) => {
        const {comments} = this.state;
        const idx = comments.findIndex((el) => el.id === id);
        const oldItem = comments[idx];
        const newItem = {...oldItem, comment: text};
        this.setState({
            comments: [
                ...comments.slice(0, idx),
                newItem,
                ...comments.slice(idx + 1)
            ]
        })
    };

    render() {
        const {comments} = this.state;
        return (
            <Box>
                <Comment comments={comments}
                         onToggleLike={this.onToggleLike}
                         onToggleDislike={this.onToggleDislike}
                         onCommentDeleted={this.deleteComment}
                         onEditComment={this.onEditComment}
                />
                <AddComment onCommentAdded={this.addComment}/>
            </Box>
        );
    }
}
