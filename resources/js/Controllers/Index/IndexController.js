import React, {Component} from 'react';
import Button from '../../Components/Buttons/LinkButton';

class IndexController extends Component {
    constructor() {
        super();
    }

    render() {

        return (

            <div className="index_layout_container">
                <div className="index_layout_header">
                    <h1>Admin Panel</h1>

                    <Button link="/admin" label="Switch to the Admin Page"/>
                </div>

                <div className="index_layout_content">
                    <div className="text_right">
                        This is an example of the admin panel, created using <i className="text_blue text_bold">Laravel, React and CSS Grids</i>
                    </div>
                </div>
            </div>

        );

    }
}

export default IndexController;
