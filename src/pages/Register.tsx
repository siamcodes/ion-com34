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
    IonLabel,
    IonList,
    IonButton,
    IonLoading
} from '@ionic/react';
import React,  { useState } from 'react';
import { Link } from 'react-router-dom';
import {registerUser} from '../firebaseConfig';

const Register: React.FC = () => {

    const [busy, setBusy] = useState<boolean>(false);
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');


    async function register() {
        //console.log(fullname, email, password, cpassword);
        //validation
        setBusy(true);
        if (password !== cpassword) {
            console.log('Passwords do not match')
           // return toast('Passwords do not match')
        }
        if (email.trim() === '' || password.trim() === '') {
            console.log('Email and Password are required')
           // return toast('Email and Password are required')
        }

        const res = await registerUser(email, password)
        if(res){
            console.log('You have registered successfully!')
           // toast('You have registered successfully!')
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
                    <IonTitle>Register</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonLoading message="Please wait.." duration={0} isOpen={busy} />

            <IonContent fullscreen>
                <IonList>
                    <IonItem>
                        <IonLabel position="floating">ชื่อ นามสกุล</IonLabel>
                        <IonInput onIonChange={(e: any) => setFullname(e.target.value)}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating"> Email</IonLabel>
                        <IonInput onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Password</IonLabel>
                        <IonInput onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Comfirm Password</IonLabel>
                        <IonInput onIonChange={(e: any) => setCPassword(e.target.value)}></IonInput>
                    </IonItem>
                    <IonButton expand="block" onClick={register}>ลงทะเบียนเข้าใช้งาน</IonButton>  
                </IonList>
                คุณได้ลงทะเบียนแล้ว? <Link to="/login">เข้าสู่ระบบ</Link>
            </IonContent>
        </IonPage>
    );
};

export default Register;
