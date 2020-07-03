import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Box from "@material-ui/core/Box";
import ThumbUpAltTwoToneIcon from '@material-ui/icons/ThumbUpAltTwoTone';
import ThumbDownAltTwoToneIcon from '@material-ui/icons/ThumbDownAltTwoTone';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from "@material-ui/core/TextField";

const Comment = ({comments, onToggleLike, onToggleDislike, onCommentDeleted, onEditComment}) => {
    const elements = comments.map((item) => {
        return (
            <List key={item.id}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Avatar"
                                src="https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg"/>
                    </ListItemAvatar>
                    <ListItemText
                        secondary={item.date}
                        primary={
                            <React.Fragment>
                                <TextField
                                    multiline
                                    fullWidth={true}
                                    variant="outlined"
                                    value={item.comment}
                                    onChange={(e) => onEditComment(item.id, e.target.value)}
                                />
                            </React.Fragment>
                        }
                    />
                    <Box display='flex' alignItems='center' p={1}>
                        <Box display='flex' alignItems='center'>
                            <Box style={{cursor: 'pointer'}} onClick={() => onToggleLike(item.id)}>
                                <ThumbUpAltTwoToneIcon/>
                                <Box display='flex' justifyContent='center' style={{color: 'blue'}}>{item.like}</Box>
                            </Box>
                            <Box style={{cursor: 'pointer'}} onClick={() => onToggleDislike(item.id)}>
                                <ThumbDownAltTwoToneIcon/>
                                <Box display='flex' justifyContent='center' style={{color: 'red'}}>{item.dislike}</Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box style={{cursor: 'pointer'}} onClick={() => onCommentDeleted(item.id)}>
                                <DeleteIcon/>
                            </Box>
                        </Box>
                    </Box>
                </ListItem>
                <Divider variant="inset" component="li"/>
            </List>
        )
    });


    return (
        <Box width={1 / 2}>
            {elements}
        </Box>
    );

};

export default Comment;