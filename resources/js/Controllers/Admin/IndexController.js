import React, {Component} from 'react';
import Header from '../../Components/AdminHeader';
import Menu from '../../Components/AdminSidebarMenu';

class IndexController extends Component {
    constructor() {
        super();
    }

    render() {

        return (

            <div className="admin_layout_container">
                <Menu/>

                <div className="admin_layout_content_wrapper">
                    <Header/>

                    <div className="admin_layout_content">
                        <div className="text_center">
                            This is the <i className="text_blue text_bold">Main Admin Page</i>
                        </div>
                    </div>
                </div>
            </div>

        );

    }
}

export default IndexController;
