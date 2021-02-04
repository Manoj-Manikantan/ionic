import React, { useState } from 'react';
import styled from 'styled-components';
import { IonContent, IonPage, IonInput, IonItem, IonLabel, IonList, IonButton, IonAlert } from '@ionic/react';

interface ContainerProps { }

const HomeContainer: React.FC<ContainerProps> = () => {

  const [showAlert, setShowAlert] = useState(false);
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
      overtimePay === 0 ? setFinalPay(regularPay) : setFinalPay(finalPay)
      setTax(Number((tax).toFixed(2)))
    } else {
      setShowAlert(true)
      console.log("Please fill the required inputs!")
    }
  }

  const displayResults = () => {

    var takeHomeMoney = 0
    takeHomeMoney = Number((finalPay - tax).toFixed(2))

    return (
      <IonList>
        <strong>Results</strong>
        <IonItem>Regular Pay : {regularPay}</IonItem>
        <IonItem>Overtime Pay : {overtimePay}</IonItem>
        <IonItem>Total Pay (Regular + Overtime, before tax) : {finalPay}</IonItem>
        <IonItem>Tax (Based on total pay) : {tax}</IonItem>
        <IonItem>Take home after tax : {takeHomeMoney}</IonItem>
      </IonList>
    )
  }

  const clearValues = () => {
    setRegularPay(0)
    setOvertimePay(0)
    setFinalPay(0)
    setTax(0)
    setHoursWorked(0)
    setHourRate(0)
  }

  return (
    <MyPage>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Please enter the no of hours worked</IonLabel>
            <IonInput type="number" value={hoursWorked} onIonChange={e => setHoursWorked(parseInt(e.detail.value!))}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Please enter the hourly rate</IonLabel>ç
            <IonInput type="number" value={hourRate} onIonChange={e => setHourRate(parseInt(e.detail.value!))}></IonInput>
          </IonItem>
        </IonList>
        <IonItem>
          <IonButton color="success" onClick={() => calculateClicked()}>Calculate</IonButton>
          <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            cssClass='my-custom-class'
            header={'Input Error!'}
            message={'Please fill all required fields.'}
            buttons={['OK']}
          />
          <IonButton color="danger" onClick={() => clearValues()}>Clear</IonButton>
        </IonItem>
      </IonContent>
      <IonContent>
        {finalPay > 0 ? displayResults() : <p></p>}
      </IonContent>
    </MyPage>
  );
};

const MyPage = styled(IonPage)`
    margin: auto;
    text-align: center;
`;

export default HomeContainer;
