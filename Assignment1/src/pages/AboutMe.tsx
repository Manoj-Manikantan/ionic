import React from 'react';
import styled from 'styled-components';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonList, IonButtons, IonBackButton } from '@ionic/react';

interface ContainerProps { }

const AboutMe: React.FC<ContainerProps> = () => {

    return (
        <MyPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/"></IonBackButton>
                    </IonButtons>
                    <IonTitle>About Me!</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>Name : Manoj Manikantan Muralidharan</IonItem>
                    <IonItem>Student ID : 301067347</IonItem>
                    <IonItem>Assignment 1 - Pay Calculator</IonItem>
                    <IonItem>Ionic is fun with React! :)</IonItem>
                </IonList>
            </IonContent>
        </MyPage>
    );
};

const MyPage = styled(IonPage)`
    margin: auto;
    padding: 10px;
    text-align: center;
`;

export default AboutMe;
