import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import InsertLinkIcon from 'material-ui/svg-icons/editor/insert-link';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import CircularProgress from 'material-ui/CircularProgress';
import { yellow600, grey400 } from 'material-ui/styles/colors';
import ErrorMessage from './ErrorMessage';

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltipPosition="bottom-left">
        <MoreVertIcon color={grey400} />
    </IconButton>
);

class MediaList extends React.Component {

    render() {
        const { loading, error, medias, playHandler, deleteHandler } = this.props;
        const _loading = (loading && <CircularProgress size={60} thickness={7} />);
        const _error = (error && <ErrorMessage message={this.props.error} />);
        const list = (
            <List>
                {medias.slice().map(a => (
                    <ListItem
                        key={a.Id}
                        leftAvatar={<Avatar icon={<InsertLinkIcon />} backgroundColor={yellow600} />}
                        onTouchTap={() => playHandler(a.Id)}
                        rightIconButton={
                            <IconMenu iconButtonElement={iconButtonElement}>
                                <MenuItem leftIcon={<DeleteIcon />} onTouchTap={() => deleteHandler(a.Id)}>删除</MenuItem>
                            </IconMenu>}
                        primaryText={a.Name}
                        secondaryText={a.Time}
                    />
                ))}
            </List>
        );

        return (
            <div>{ _loading || _error || list }</div>
        );
    }
}

export default MediaList