import React, {Component} from 'react';
import {Link} from "react-router-dom";

class SidebarMenu extends Component {
    constructor() {
        super();

        this.state = {
            isOpen: false, // menu is closed on the mobile devices
        }
    }

    render() {

        return (

            <div className={this.state.isOpen === false ? "sidebar_menu closed" : "sidebar_menu"}>

                {
                    this.state.isOpen === false &&
                    <i
                        className="menu_action_btn fas fa-bars"
                        onClick={
                            () => {
                                this.setState(
                                    {
                                        isOpen: true
                                    }
                                );
                            }
                        }
                    >
                    </i>
                }

                {
                    this.state.isOpen === true &&
                    <i
                        className="menu_action_btn fas fa-times"
                        onClick={
                            () => {
                                this.setState(
                                    {
                                        isOpen: false
                                    }
                                );
                            }
                        }
                    >
                    </i>
                }

                <Link className="menu_item" to='/admin'>
                    <i className="menu_icon fas fa-home"></i>

                    <div className="menu_title">
                        Home
                    </div>
                </Link>

                <Link className="menu_item" to='/admin/dashboard'>
                    <i className="menu_icon fas fa-chart-line"></i>

                    <div className="menu_title">
                        Dashboard
                    </div>
                </Link>
            </div>

        );

    }

}

export default SidebarMenu;
