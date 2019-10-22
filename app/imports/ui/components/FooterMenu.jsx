import React from 'react';
import { Container, Grid, Input, Label, List } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
    render() {
        return (
            <div id='footer'>
                <Container>
                    <Grid>
                        <Grid.Row columns={3} style={{ margin: '0 10px 0 10px' }}>
                            <Grid.Column>
                                NAVIGATION
                                <hr/>
                                <List>
                                    <List.Item>About Us</List.Item>
                                    <List.Item>Store Locations</List.Item>
                                    <List.Item>Employment</List.Item>
                                    <List.Item>Videos</List.Item>
                                    <List.Item>Shipping & Returns</List.Item>
                                    <List.Item>Privacy Policy</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                MAIN MENU
                                <hr/>
                                <List>
                                    <List.Item>Men</List.Item>
                                    <List.Item>Women</List.Item>
                                    <List.Item>Kids</List.Item>
                                    <List.Item>Brands</List.Item>
                                    <List.Item>Sale</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                CONNECT
                                <hr/>
                                <List>
                                    <List.Item>Join our mailing list for updates</List.Item>
                                    <List.Item/>
                                    <List.Item>Sign up to receive our email updates!</List.Item>
                                    <Input size='big' labelPosition={ 'right' }
                                           label={ <Label color='black'>Join</Label> }
                                           placeholder='Enter Email Address'/>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        );
    }
}