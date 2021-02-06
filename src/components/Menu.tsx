import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { 
  chevronForwardOutline,
  homeOutline,
  homeSharp,
  logInOutline,
  logInSharp,
  personAddOutline,
  personAddSharp,
  beerOutline,
  beerSharp,
  cartOutline,
  cartSharp,
  cashOutline,
  cashSharp,
  callOutline,
  callSharp
 } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/home',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  /*{
    title: 'Login',
    url: '/login',
    iosIcon: logInOutline,
    mdIcon: logInSharp
  },
  {
    title: 'Register',
    url: '/register',
    iosIcon: personAddOutline,
    mdIcon: personAddSharp
  }, */
  {
    title: 'Product',
    url: '/product',
    iosIcon: beerOutline,
    mdIcon: beerSharp
  },
  {
    title: 'Cart',
    url: '/cart',
    iosIcon: cartOutline,
    mdIcon: cartSharp
  },
  {
    title: 'Payment',
    url: '/payment',
    iosIcon: cashOutline,
    mdIcon: cashSharp
  },
  {
    title: 'Contact',
    url: '/contact',
    iosIcon: callOutline,
    mdIcon: callSharp
  },
  {
    title: 'CoronaVirus',
    url: '/corona',
    iosIcon: callOutline,
    mdIcon: callSharp
  }

];

const labels = ['Sony', 'Sumsung', 'Apple', 'Nokia', 'Vivo', 'Motorola'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Siamcodes.com</IonListHeader>
          <IonNote>somkiat@sdtc.ac.th</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>ยี้ห้อ</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="end" icon={chevronForwardOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
