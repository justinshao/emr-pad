import React from 'react';
import { List, ListItem } from 'material-ui/List';
import FolderIcon from 'material-ui/svg-icons/file/folder';
import FolderOpenIcon from 'material-ui/svg-icons/file/folder-open';
import AssignmentIcon from 'material-ui/svg-icons/action/assignment';
import Avatar from 'material-ui/Avatar';
import { appThemeColor } from '../styles';


class EmrCatalog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            catalog: this.props.catalog.slice().map(c => { c.open = true; return c; })
        };

        this.handleItemTouchTap = this.handleItemTouchTap.bind(this);
        this.handleNestedListToggle = this.handleNestedListToggle.bind(this);
    }

    handleItemTouchTap(doc) {
        if (this.props.onDocumentSelected) {
            this.props.onDocumentSelected(doc);
        }
    }
    handleNestedListToggle(cat) {
        this.setState((prevState) => {
            var preCatalog = prevState.catalog;
            var target = preCatalog.find(c => c.Id === cat.Id);
            target.open = !target.open;

            return {
                catalog: preCatalog
            };
        });
    }

    render() {
        let list = this.state.catalog.slice().map(c => {

            let nestedItems = c.Documents.slice().map(d =>
                <ListItem
                    key={d.Id}
                    primaryText={d.Title}
                    leftAvatar={<Avatar size={35} backgroundColor={appThemeColor} icon={<AssignmentIcon />} />}
                    secondaryText={d.CreateTime}
                    onTouchTap={() => this.handleItemTouchTap(d.Id)} />
            );

            return (
                <ListItem
                    key={c.Id}
                    primaryText={c.Title}
                    leftAvatar={<Avatar backgroundColor={appThemeColor} icon={c.open ? <FolderOpenIcon /> : <FolderIcon />} />}
                    initiallyOpen={c.open}
                    primaryTogglesNestedList
                    nestedItems={nestedItems}
                    onNestedListToggle={() => this.handleNestedListToggle(c)} />
            );
        });

        return (
            <List style={this.props.style}>
                {list}
            </List>
        );
    }
}

export default EmrCatalog;