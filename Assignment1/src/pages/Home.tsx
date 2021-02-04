import React, { useState } from 'react';
import styled from 'styled-components';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonPopover, IonList, IonItem, IonLabel } from '@ionic/react';
import { menu } from 'ionicons/icons';
import HomeContainer from '../components/HomeContainer';
import './Home.css';

const Home: React.FC = () => {

  const [showUserMenuEvent, setShowUserMenuEvent] = useState<{ open: boolean, event: Event | undefined }>({
    open: false,
    event: undefined,
  });

  return (
    <MyPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pay Calculator</IonTitle>
          <IonButtons slot="end">
            <IonButton fill="clear" onClick={(e) => setShowUserMenuEvent({ open: true, event: e.nativeEvent })}>
              <IonIcon icon={menu} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonPopover
          isOpen={showUserMenuEvent.open}
          event={showUserMenuEvent.event}
          onDidDismiss={e => setShowUserMenuEvent({ open: false, event: undefined })}>
          <IonContent>
            <IonList>
              <IonItem routerLink="/aboutMe">
                <IonLabel>About Me!</IonLabel>
              </IonItem>
            </IonList>
          </IonContent>
        </IonPopover>
        <HomeContainer />
      </IonContent>
    </MyPage>
  );
};

const MyPage = styled(IonPage)`
    margin: auto;
    padding: 10px;
    text-align: center;
`;

export default Home;
