export const sounds =  {
    beep1: 'beep1.mp3',
    beep2: 'beep2.mp3',
    beep3: 'beep3.mp3',
    beep4: 'beep4.mp3',
    beep5: 'beep5.mp3',
    begin: 'begin.wav',
    keyboard1: 'keyboard1.mp3',
    keyboard2: 'keyboard2.mp3',
    keyboard3: 'keyboard3.mp3',
}

export const soundForKey = (which) => {
    switch (which) {
        case 13:
            return sounds.keyboard2;
        case 32:
            return sounds.keyboard3;
        default:
            return sounds.keyboard1;
    }
}

export default sounds;