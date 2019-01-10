import React, {Component} from 'react';
import {Link} from "react-router-dom";

class AdminSidebarMenu extends Component {
    constructor() {
        super();

        this.state = {
            isOpen: false, // menu is closed on the mobile devices
        }
    }

    render() {

        return (

            <div className={this.state.isOpen === false ? "admin_sidebar_menu closed" : "admin_sidebar_menu"}>

                <i
                    className={this.state.isOpen === false ? "menu_toggle_btn fas fa-bars" : "menu_toggle_btn fas fa-times"}
                    onClick={
                        () => {
                            this.setState(
                                {
                                    isOpen: !this.state.isOpen
                                }
                            );
                        }
                    }
                >
                </i>

                <div className="admin_logo">
                    <span className="logo_title">Admin Panel</span>

                    <i className="logo_icon fas fa-gem"></i>
                </div>

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

export default AdminSidebarMenu;
