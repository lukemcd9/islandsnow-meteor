import {Container, Dropdown, Grid, Menu} from "semantic-ui-react";
import React from "react";

export default class MiddleMenu extends React.Component {
    render() {
        return (
            <Container>
                <Grid centered style={{ margin: '5px 0 5px 0' }}>
                    <Menu compact borderless id='middlemenu'>
                        <Dropdown item text='MEN'>
                            <Dropdown.Menu>
                                <Dropdown.Item>TANK TOPS</Dropdown.Item>
                                <Dropdown.Item>LONG SLEEVE SHIRTS</Dropdown.Item>
                                <Dropdown.Item>ALOHA SHIRTS</Dropdown.Item>
                                <Dropdown.Item>HATS</Dropdown.Item>
                                <Dropdown.Item>BAGS & WALLETS</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown item text='WOMEN'>
                            <Dropdown.Menu>
                                <Dropdown.Item>TANK TOPS</Dropdown.Item>
                                <Dropdown.Item>LONG SLEEVE SHIRTS</Dropdown.Item>
                                <Dropdown.Item>HATS</Dropdown.Item>
                                <Dropdown.Item>BAGS & WALLETS</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown item text='KIDS'>
                            <Dropdown.Menu>
                                <Dropdown.Item>SHIRTS</Dropdown.Item>
                                <Dropdown.Item>ONESIES</Dropdown.Item>
                                <Dropdown.Item>SWEATSHIRTS</Dropdown.Item>
                                <Dropdown.Item>ACCESSORIES</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown item text='BRANDS'>
                            <Dropdown.Menu>
                                <Dropdown.Item>ALOHA SURF PROJECT</Dropdown.Item>
                                <Dropdown.Item>AMUSE SOCIETY</Dropdown.Item>
                                <Dropdown.Item>FARMERS MARKET HAWAII</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Menu.Item>SEARCH</Menu.Item>
                    </Menu>
                </Grid>
            </Container>
        );
    }
}
