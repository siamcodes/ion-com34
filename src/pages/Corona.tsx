import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonButtons,
    IonIcon,
    IonMenuButton, 
} from '@ionic/react';
import { add } from 'ionicons/icons'
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import firebase from '../firebaseConfig';

const Corona: React.FC = () => {

    const [datenow, setDate] = useState(
        new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "long",
            day: "2-digit"
        }).format(new Date())
    )
    const [cases, setCases] = useState(0)
    const [deaths, setDeaths] = useState(0)
    const [recov, setRecov] = useState(0)
    const [caseChart, setCaseChart] = useState({})
    const [deathChart, setDeathChart] = useState({})
    const [recovChart, setRecovChart] = useState({})

    const dbref = firebase.database().ref('coronavirus/')

    const loadData = () => {
        // Extract Firebase collection to array
        dbref.on('value', resp => {
            let data: any[] = snapshotToArray(resp)
            // Sum total
            let caseCount = 0
            let deathCount = 0
            let recovCount = 0
            data.forEach((doc) => {
                caseCount = caseCount + doc.cases
                deathCount = deathCount + doc.deaths
                recovCount = recovCount + doc.recovered
            });
            setCases(caseCount)
            setDeaths(deathCount)
            setRecov(recovCount)

            // Build charts
            let chartData: any[] = []
            let caseDate: any[] = []
            let caseAmount: any[] = []
            let deathAmount: any[] = []
            let recovAmount: any[] = []
            data.reduce((res, value) => {
                if (!res[value.date]) {
                    res[value.date] = { date: value.date, cases: 0, deaths: 0, recovered: 0 };
                    chartData.push(res[value.date])
                }
                res[value.date].cases += value.cases;
                res[value.date].deaths += value.deaths;
                res[value.date].recovered += value.recovered;
                return res;
            }, {});
            chartData.forEach((cd) => {
                caseDate.push(cd.date)
                caseAmount.push(cd.cases)
                deathAmount.push(cd.deaths)
                recovAmount.push(cd.recovered)
            })
            setCaseChart({
                labels: caseDate,
                datasets: [
                    {
                        label: 'Cases Chart',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: caseAmount
                    }
                ]
            })
            setDeathChart({
                labels: caseDate,
                datasets: [
                    {
                        label: 'Deaths Chart',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: deathAmount
                    }
                ]
            })
            setRecovChart({
                labels: caseDate,
                datasets: [
                    {
                        label: 'Recovered Chart',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: recovAmount
                    }
                ]
            })
        });
    }

    const snapshotToArray = (snapshot: any) => {
        const returnArr: any[] = []

        snapshot.forEach((childSnapshot: any) => {
            const item = childSnapshot.val()
            item.key = childSnapshot.key
            returnArr.push(item)
        });

        return returnArr;
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Coronavirus Dashboard</IonTitle>
                    <IonButtons slot="end">
                        <IonButton routerLink="/input">
                            <IonIcon slot="icon-only" icon={add} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard color="light">
                    <IonCardHeader>
                        <IonCardTitle>Latest Situation per {datenow}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="12" size-sm>
                                    Confirmed Cases: <strong>{cases}</strong>
                                </IonCol>
                                <IonCol size="12" size-sm>
                                    <Bar
                                        data={caseChart}
                                        width={100}
                                        height={100}
                                        options={{
                                            maintainAspectRatio: true
                                        }}
                                    />
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol size="12" size-sm>
                                    Death: <strong>{deaths}</strong>
                                </IonCol>
                                <IonCol size="12" size-sm>
                                    <Bar
                                        data={deathChart}
                                        width={100}
                                        height={100}
                                        options={{
                                            maintainAspectRatio: true
                                        }}
                                    />
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol size="12" size-sm>
                                    Recovered: <strong>{recov}</strong>
                                </IonCol>
                                <IonCol size="12" size-sm>
                                    <Bar
                                        data={recovChart}
                                        width={100}
                                        height={100}
                                        options={{
                                            maintainAspectRatio: true
                                        }}
                                    />
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>

                <IonRow>
                    <IonCol>
                        <IonButton expand="block" fill="solid" color="secondary" routerLink="/list">Show List of Countries</IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );

};

export default Corona;
