import { Toast } from '@capacitor/core';
import { 
    IonButtons, 
    IonContent, 
    IonHeader, 
    IonMenuButton, 
    IonPage, 
    IonTitle, 
    IonToolbar,
    IonInput,
    IonItem,
    IonList,
    IonButton,
    IonLabel,
    IonLoading
} from '@ionic/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../firebaseConfig';

const Login: React.FC = () => {

    const [busy, setBusy] = useState<boolean>(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function login() {
        setBusy(true);
        const res = await loginUser(email, password);
        if(res){
            console.log('Login success');
          // toast('You have logged in');
            
        }
        setBusy(false);
    }


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonLoading message="Please wait.." duration={0} isOpen={busy} />

            <IonContent fullscreen>
                <IonList> 
                    <IonItem>
                        <IonLabel position="floating">Email </IonLabel>
                        <IonInput onIonChange={(e:any) => setEmail(e.target.value)} />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Password </IonLabel>
                        <IonInput onIonChange={(e:any) => setPassword(e.target.value)}  />
                    </IonItem>
                </IonList>
                <IonButton expand="block" color="primary" onClick={login} >ลงชื่อเข้าใช้</IonButton>
                คุณยังไม่ลงทะเบียน? <Link to="/register"> ลงทะเบียน</Link>

            </IonContent>
        </IonPage>
    );
};

export default Login;
