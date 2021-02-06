import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonImg,
    IonButton,
    IonRadioGroup,
    IonLabel,
    IonRadio,
    IonAvatar,
    IonThumbnail
} from '@ionic/react';
import React from 'react';
import { banks } from '../data';

const Payment: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle> การชำระเงิน (Payment)</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonThumbnail>
                    <IonImg src="./images/qrcode.jpg" />
                </IonThumbnail>

                <IonList>
                    <IonRadioGroup>
                        {banks.map((item, index) => (
                            <IonItem key={index}>
                                <IonRadio slot="start" value={item.name} />
                                <IonLabel>{item.name}</IonLabel>
                                <IonAvatar> <IonImg src={item.image} /> </IonAvatar>
                            </IonItem>
                        ))}
                    </IonRadioGroup>
                </IonList>
                <IonButton expand="block" color="success"> ดำเนินการต่อ</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Payment;
