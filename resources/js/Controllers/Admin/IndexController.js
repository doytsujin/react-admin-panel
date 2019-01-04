import React, {Component} from 'react';
import Button from '../../Components/Buttons/LinkButton';
import SidebarMenu from '../../Components/Menus/SidebarMenu';

class IndexController extends Component {
    constructor() {
        super();
    }

    render() {

        return (

            <div className="admin_layout_container">
                <div className="admin_layout_logo">
                    <h1>Admin Panel</h1>
                </div>

                <div className="admin_layout_header">
                    <Button link='/' label='Switch to the Index Page'/>
                </div>

                <div className="admin_layout_sidebar">
                    <SidebarMenu />
                </div>

                <div className="admin_layout_content">
                    <div className="text_center">
                        This is the <i className="text_blue text_bold">Main Admin Page</i>
                    </div>
                </div>
            </div>

        );

    }
}

export default IndexController;
