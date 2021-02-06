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
    IonLabel,
    IonButton,
    IonImg,
    IonAvatar
} from '@ionic/react';
import React from 'react';
import './Page.css';
import { products } from '../data'

const Cart: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>ตะกร้าสินค้า (Cart)</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonList>
                    {products.map((item, index) => (
                        <IonItem key={index}>
                            <IonAvatar slot="start"><IonImg src= {item.image} /> </IonAvatar>
                            <IonLabel> {item.title} </IonLabel>
                            <IonLabel> {item.stock} </IonLabel>
                            <IonLabel> {item.price} </IonLabel>
                            <IonButton color="danger">Delete</IonButton>
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Cart;
