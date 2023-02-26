interface Message {
  text: string;
  createdAt: admin.firestore.Timedtsmp;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}
