import React, {Component} from 'react';
import Button from '../../Components/Buttons/LinkButton';

class NotFoundController extends Component {
    constructor() {
        super();
    }


    render() {

        return (

            <div className="error_layout_container">
                <div className="error_layout_content">
                    <h2> Page not found </h2>

                    <Button link='/' label='Back to the Index Page'/>
                </div>
            </div>

        );

    }
}

export default NotFoundController;
