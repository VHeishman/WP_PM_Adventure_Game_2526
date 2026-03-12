function switchRotation (element) {
    console.log(element.style.animationName);
    if (element.style.animationName === 'up') {
        element.style.animation = 'down 2s ease-in-out 1';
    } else {
        element.style.animation = 'up 2s ease-in-out 1';
    }
}