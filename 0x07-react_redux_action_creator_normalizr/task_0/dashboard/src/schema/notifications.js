import * as notificationData from "../../../../notifications.json";

export default function getAllNotificationsByUser(userId) {
    return notificationData.filter((notification) => notification.authpr.id === userId).map((notification) => notification.context);
}