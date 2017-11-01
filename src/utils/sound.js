export const playSound = (which) => {
    const sound = new Audio(`/sounds/${which}`);
    sound.play();
}