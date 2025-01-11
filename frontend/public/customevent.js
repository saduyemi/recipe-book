export const createCustomEvent =  (eventName, eventDetail) => {
    const event = new CustomEvent(eventName, { detail: eventDetail });
    window.dispatchEvent(event);
}