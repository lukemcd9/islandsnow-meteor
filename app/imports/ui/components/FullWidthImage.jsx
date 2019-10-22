import React from 'react';
import { Image } from 'semantic-ui-react';

export default class FullWidthImage extends React.Component {
    render() {
        return (
            <Image centered fluid
                   src='https://cdn.shopify.com/s/files/1/1035/5187/t/5/assets/slide1.jpg?1080290453015017671'
                   alt='Island Snow Hawaii Main Image'/>
        );
    }
}
