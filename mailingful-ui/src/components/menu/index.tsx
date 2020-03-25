import { h, Component } from 'preact';
import { NavLink } from 'react-router-dom';
import { Text } from 'preact-i18n';
import * as style from './style.css';

interface MenuProps {
}

interface MenuState {
}

export default class Menu extends Component<MenuProps, MenuState> {
    constructor(props: MenuProps) {
        super(props);
    }

    render(props: MenuProps, state: MenuState) {
        return (
            <nav class={style.menu}>
                <ul>
                    <li><NavLink activeClassName={style.active} exact to="/"><Text id="menu.home"></Text></NavLink></li>
                    <li><NavLink activeClassName={style.active} to="/faq"><Text id="menu.faq"></Text></NavLink></li>
                    <li><NavLink activeClassName={style.active} to="/mailbox"><Text id="menu.mailbox"></Text></NavLink></li>
                </ul>
            </nav>

        );
    }
}
