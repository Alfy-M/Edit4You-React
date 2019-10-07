import * as React from "react";
import { Redirect } from 'react-router';
import { render } from "react-dom";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import * as firebase from "firebase/app";
import { Grid, Row, Col } from "react-bootstrap";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";


export const config = {
  apiKey: "AIzaSyCwbPXr4OsEpVet1dSCGWxLyGKX7gh4_T0",
  authDomain: "mycryptobalance-567a0.firebaseapp.com",
  databaseURL: "https://mycryptobalance-567a0.firebaseio.com",
  projectId: "mycryptobalance-567a0",
  storageBucket: "mycryptobalance-567a0.appspot.com",
  messagingSenderId: "869709808894"
  };
  
firebase.initializeApp(config);



export const Login = () => {

  return (
    <FirebaseAuthProvider {...config} firebase={firebase}>
      <div className="content">
      <Grid fluid>
        <Row>
        <button
          onClick={() => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider);
          }}
        >
          Sign In with Google
        </button>
        <button
          data-testid="signin-anon"
          onClick={() => {
            const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
            firebase.auth().signInWithPopup(facebookAuthProvider);
          }}
        >
          Sign In using Facebook
        </button>
        <button
          data-testid="signin-anon"
          onClick={() => {
            firebase.auth().signInWithEmailAndPassword("test@gmail.com","alfonso");
          }}
        >
          Sign In using Email and password
        </button>
        <button
          onClick={() => {
            firebase.auth().signOut();
            localStorage.removeItem('authUser');
          }}
        >
          Sign Out
        </button>
        </Row>
        <Row>
        <FirebaseAuthConsumer>
          
          {({ isSignedIn, user, providerId }) => {
          
             localStorage.setItem('authUser',JSON.stringify(user));
            
            return (
              
              <pre style={{ height: 300, overflow: "auto" }}>
                {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
              </pre>
            );
          }
          }
        </FirebaseAuthConsumer>
        </Row>
        <Row>
          <IfFirebaseAuthed>
            {() => {
             return <Redirect to='/dashboard' />
            }}
            
          </IfFirebaseAuthed>
          <IfFirebaseAuthedAnd
            filter={({ providerId }) => providerId !== "anonymous"}
          >
            {({ providerId }) => {
              return <div>You are authenticated with {providerId}</div>;
            }}
          </IfFirebaseAuthedAnd>
          </Row>
        </Grid>
      </div>
    </FirebaseAuthProvider>
  );
        
};

