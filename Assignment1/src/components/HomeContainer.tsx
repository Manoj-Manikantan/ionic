import React, { useState } from 'react';
import styled from 'styled-components';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonButton } from '@ionic/react';

interface ContainerProps { }

const HomeContainer: React.FC<ContainerProps> = () => {

  const [hoursWorked, setHoursWorked] = useState<number>(0);
  const [hourRate, setHourRate] = useState<number>(0);
  const [regularPay, setRegularPay] = useState(0)
  const [overtimePay, setOvertimePay] = useState(0)
  const [finalPay, setFinalPay] = useState(0)
  const [tax, setTax] = useState(0)

  const calculateClicked = () => {
    if (hoursWorked !== 0 && hourRate !== 0) {
      console.log("I'm here")
      var regularPay = 0
      var overtimePay = 0
      var finalPay = 0
      var tax = 0
      if (hoursWorked <= 40) {
        regularPay = hoursWorked * hourRate
        tax = regularPay * 0.18
      } else {
        regularPay = 40 * hourRate
        overtimePay = (hoursWorked - 40) * hourRate * 1.5
        finalPay = regularPay + overtimePay 
        tax = finalPay * 0.18
      }
      setRegularPay(regularPay)
      setOvertimePay(overtimePay)
      overtimePay == 0 ? setFinalPay(regularPay) : setFinalPay(finalPay)
      setTax(Number((tax).toFixed(2)))
    } else {
      console.log("Please fill the required inputs!")
    }
  }

  const displayResults = () => {
    return (
      <IonList>
        <IonItem>Regular Pay : {regularPay}</IonItem>
        <IonItem>Overtime Pay : {overtimePay}</IonItem>
        <IonItem>Total Pay (Regular + Overtime, before tax) : {finalPay}</IonItem>
        <IonItem>Tax (Based on total pay) : {tax}</IonItem>
        <IonItem>Take home after tax : {finalPay - tax}</IonItem>
      </IonList>
    )
  }

  const clearValues = () => {
    setRegularPay(0)
    setOvertimePay(0)
    setFinalPay(0)
    setTax(0)
  }

  return (
    <MyPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pay Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Number of hours worked</IonLabel>
            <IonInput onIonChange={e => setHoursWorked(parseInt(e.detail.value!))}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Hourly rate</IonLabel>
            <IonInput onIonChange={e => setHourRate(parseInt(e.detail.value!))}></IonInput>
          </IonItem>
        </IonList>
        <IonItem>
          <IonButton color="success" onClick={() => calculateClicked()}>Calculate</IonButton>
          <IonButton color="danger" onClick={() => clearValues()}>Clear</IonButton>
        </IonItem>
        {finalPay > 0 ? displayResults() : <p></p>}
      </IonContent>
    </MyPage>
  );
};

const MyPage = styled(IonPage)`
    margin: auto;
    border: 1px solid red;
    padding: 10px;
    text-align: center;
`;

export default HomeContainer;
