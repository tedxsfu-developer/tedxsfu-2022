'use strict';

const exampleCallback = function () {
    console.log('Order complete!');
};

if (typeof window !== "undefined") {
    window.EBWidgets.createWidget({
        // Required
        widgetType: 'checkout',
        eventId: '416405629447',
        iframeContainerId: 'eventbrite-widget-container-416405629447',

        // Optional
        iframeContainerHeight: 1000,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
        onOrderComplete: exampleCallback  // Method called when an order has successfully completed
    });
} else {
    console.log("Can't create widget");
}