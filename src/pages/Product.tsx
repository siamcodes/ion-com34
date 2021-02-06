import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonIcon,
    IonLabel,
    IonButton,
    IonImg
} from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import React from 'react';
import './Page.css';
import {products} from '../data';

/* interface product {
    title: string,
    price: number,
    stock: number,
    image: string,
    description: string
}

const products: product[] = [
] */


const Product: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Product</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                {products.map((product, index) => (
                    <IonCard key={index}>
                        <IonImg src={product.image} />
                        <IonCardHeader>
                            <IonCardTitle>{product.title}</IonCardTitle>
                            <IonCardSubtitle>ราคา {product.price}</IonCardSubtitle>
                            <IonCardSubtitle>จำนวนในคลัง {product.stock}</IonCardSubtitle>
                        </IonCardHeader>
                        <IonCardContent>
                            {product.description}
                        </IonCardContent>
                    </IonCard>
                ))}

                <IonCard>
                    <IonItem>
                        <IonIcon icon={pin} slot="start" />
                        <IonLabel>ion-item in a card, icon left, button right</IonLabel>
                        <IonButton fill="outline" slot="end">View</IonButton>
                    </IonItem>

                    <IonCardContent>
                        This is content, without any paragraph or header tags,
                        within an ion-cardContent element.
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonItem href="#" className="ion-activated">
                        <IonIcon icon={wifi} slot="start" />
                        <IonLabel>Card Link Item 1 activated</IonLabel>
                    </IonItem>

                    <IonItem href="#">
                        <IonIcon icon={wine} slot="start" />
                        <IonLabel>Card Link Item 2</IonLabel>
                    </IonItem>

                    <IonItem className="ion-activated">
                        <IonIcon icon={warning} slot="start" />
                        <IonLabel>Card Button Item 1 activated</IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonIcon icon={walk} slot="start" />
                        <IonLabel>Card Button Item 2</IonLabel>
                    </IonItem>
                </IonCard>

            </IonContent>
        </IonPage>
    );
};

export default Product;
