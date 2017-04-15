import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import LogoutForm from './components/LogoutForm';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: null
        };
    }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBRVvKC-ik4RqohW8HKv2tk-zzQMrNX-iY",
            authDomain: "ebook-ace65.firebaseapp.com",
            databaseURL: "https://ebook-ace65.firebaseio.com",
            projectId: "ebook-ace65",
            storageBucket: "ebook-ace65.appspot.com",
            messagingSenderId: "523511961273"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    loggedIn: true
                })
            } else {
                this.setState({
                    loggedIn: false
                })
            }
        });
    }

    onPress() {
        firebase.auth().signOut();
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <LogoutForm />
                );
                break;

            case false:
                return <LoginForm />;
                break;

            default:
                return <Spinner size="large" />
                break;
        }
    }

    render() {
        return(
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;