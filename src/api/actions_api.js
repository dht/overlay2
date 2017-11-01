// import { mainApp, getRef, listen } from '../constants/firebase_debug';
import {mainApp, getRef, listen} from './firebase';

let actionsRef, previewRef;

export const configureFirebase = () => {
    actionsRef = mainApp.database().ref("actions");
    previewRef = mainApp.database().ref("preview");
}

export const addAction = (action) => {
    const actionRef = actionsRef.push();

    actionRef.set({
        key: actionRef.key,
        ...action
    })
}

export const setPreview = (action) => {
    previewRef.set(action);
}

configureFirebase();
