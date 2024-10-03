// self.addEventListener("push", function (event) {
//   if (event.data) {
//     const data = event.data.json();
//     const options = {
//       body: data.body,
//       icon: data.icon || "/icon.png",
//       badge: "/badge.png",
//       vibrate: [100, 50, 100],
//       data: {
//         dateOfArrival: Date.now(),
//         primaryKey: "2",
//       },
//     };
//     event.waitUntil(self.registration.showNotification(data.title, options));
//   }
// });

self.addEventListener("notificationclick", function (event) {
  console.log("Notification click received.");
  event.notification.close();
  event.waitUntil(clients.openWindow("<https://your-website.com>"));
});
self.addEventListener("install", () => {
  console.info("service worker installed.");
});

const sendDeliveryReportAction = () => {
  console.log("Web push delivered.");
};

self.addEventListener("push", function (event) {
  if (!event.data) {
    return;
  }

  const payload = event.data.json();
  const { body, icon, image, badge, url, title } = payload;
  const notificationTitle = title ?? "Hi";
  const notificationOptions = {
    body,
    icon,
    image,
    data: {
      url,
    },
    badge,
  };

  event.waitUntil(
    self.registration
      .showNotification(notificationTitle, notificationOptions)
      .then(() => {
        sendDeliveryReportAction();
      })
  );
});
