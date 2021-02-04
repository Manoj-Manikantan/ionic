import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import HomeContainer from '../components/HomeContainer';
import MenuContainer from '../components/MenuContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Pay Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <HomeContainer />
        {/* <MenuContainer /> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
