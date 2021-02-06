import React from 'react';
import {
    IonSlides,
    IonSlide,
    IonContent,
    IonImg,
} from '@ionic/react';
import { slides } from '../data'


const slideOpts = {
    initialSlide: 1,
    speed: 400
};

export const Slides: React.FC = () => (
    <IonContent>
        <IonSlides pager={true} options={slideOpts}>
            {slides.map((image, i) => (
                <IonSlide key={i}>
                    <IonImg src={image.src} />
                    <h1>{image.text}</h1>
                </IonSlide>
            ))
            }
        </IonSlides>
    </IonContent>
);