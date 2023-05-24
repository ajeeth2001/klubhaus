import { Component } from '@angular/core';

@Component({
  selector: 'app-notification-crud',
  templateUrl: './notification-crud.component.html',
  styleUrls: ['./notification-crud.component.css']
})
export class NotificationCrudComponent {
  notifications: Notification[] = [
    {
      id: 1,
      message: "Notification 1",
      status: true
    },
    {
      id: 2,
      message: "Notification 2",
      status: false
    },
    {
      id: 3,
      message: "Notification 3",
      status: true
    }
  ];

  selectedNotification: Notification = {
    id: 0,
    message: "",
    status: false
  };

  isCreateMode: boolean = true;
  isEditMode: boolean = false;

  addNotification(): void {
    this.selectedNotification = {
      id: 0,
      message: "",
      status: false
    };
    this.isCreateMode = true;
    this.isEditMode = false;
  }

  editNotification(notification: Notification): void {
    this.selectedNotification = { ...notification };
    this.isCreateMode = false;
    this.isEditMode = true;
  }

  saveNotification(): void {
    if (this.isCreateMode) {
      // Create new notification
      this.selectedNotification.id = this.notifications.length + 1;
      this.notifications.push(this.selectedNotification);
    } else if (this.isEditMode) {
      // Update existing notification
      const index = this.notifications.findIndex(n => n.id === this.selectedNotification.id);
      if (index !== -1) {
        this.notifications[index] = { ...this.selectedNotification };
      }
    }

    this.cancelNotification();
  }



  deleteNotification(notification: Notification): void {
    const index = this.notifications.findIndex(n => n.id === notification.id);
    if (index !== -1) {
      this.notifications.splice(index, 1);
    }
  }

  cancelNotification(): void {
    this.selectedNotification = {
      id: 0,
      message: "",
      status: false
    };
    this.isCreateMode = true;
    this.isEditMode = false;
  }
  changeNotificationStatus(notification:Notification):void{
    console.log("toggled")
    console.log(notification.message)
  }
}

interface Notification {
  id: number;
  message: string;
  status: boolean;
}
