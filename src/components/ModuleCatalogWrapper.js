import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';


const style={
    'fill':'rgb(0, 188, 212)',
};
export default class ModuleCatalogWrapper extends React.Component {
    

    render() {
        return (
            <div>
                <List>
                    <Link to={`/emr/`}>
                        <ListItem primaryText="病例" leftIcon={<ContentInbox style={style}/>} />
                    </Link>
                    <ListItem primaryText="检查报告" leftIcon={<ContentInbox style={style}/>} />
                    <ListItem primaryText="化验报告" leftIcon={<ContentInbox style={style}/>} />
                    <ListItem
                        primaryText="护理单"
                        leftIcon={<ContentInbox style={style}/>}
                        initiallyOpen={true}
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem
                                key={1}
                                primaryText="xxxx"
                            />,
                            <ListItem
                                key={2}
                                primaryText="xxxx"
                            />
                        ]}
                    />
                    <ListItem
                        primaryText="体温单"
                        leftIcon={<ContentInbox style={style}/>}
                        initiallyOpen={true}
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem
                                key={1}
                                primaryText="xxxx"
                            />,
                            <ListItem
                                key={2}
                                primaryText="xxxx"
                            />
                        ]}
                    />
                    <ListItem
                        primaryText="医嘱"
                        leftIcon={<ContentInbox style={style}/>}
                        initiallyOpen={true}
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem
                                key={1}
                                primaryText="xxxx"
                            />,
                            <ListItem
                                key={2}
                                primaryText="xxxx"
                            />
                        ]}
                    />
                    <ListItem
                        primaryText="中药医嘱"
                        leftIcon={<ContentInbox style={style}/>}
                        initiallyOpen={true}
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem
                                key={1}
                                primaryText="xxxx"
                            />,
                            <ListItem
                                key={2}
                                primaryText="xxxx"
                            />
                        ]}
                    />
                    <ListItem primaryText="诊断" leftIcon={<ContentInbox style={style}/>} />
                </List>
            </div>
        );
    }
}