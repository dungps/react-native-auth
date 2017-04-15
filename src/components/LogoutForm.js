import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Button, Card, CardSection } from './common';

class LogoutForm extends Component {
    onPress() {
        firebase.auth().signOut();
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Button onPress={this.onPress.bind(this)}>Logout</Button>
                </CardSection>
            </Card>
        );
    }
}

export default LogoutForm;