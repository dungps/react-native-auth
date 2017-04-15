import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state = {
        email: '',
        pass: '',
        error: '',
        loading: false
    };

    onPress() {
        const { email, pass } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, pass)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFailed.bind(this))
            })
    }

    onLoginFailed() {
        this.setState({
            error: 'Authentication Failed.',
            loadding: false
        })
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            pass: '',
            loading: false,
            error: ''
        })
    }

    renderButton() {
        if (this.state.loading === true) {
            return <Spinner size="small" />
        }

        return (
            <Button onPress={this.onPress.bind(this)}>Login</Button>
        );
    }

    render() {
        return(
            <Card>
                <CardSection>
                    <Input
                        placeholder="admin@example.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={text => this.setState({ email: text })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry={true}
                        placeholder="******"
                        label="Password"
                        value={this.state.pass}
                        onChangeText={text => this.setState({ pass: text })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>{this.state.error}</Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    }
}

export default LoginForm;