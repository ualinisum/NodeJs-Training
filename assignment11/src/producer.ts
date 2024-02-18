import * as amqp from "amqplib/callback_api";

export interface BlogComment {
  postId: string;
  authorId: string;
  text: string;
}

export function emailNotification(comment: BlogComment): void {
  amqp.connect("amqp://localhost", function (error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function (error1, channel) {
      if (error1) {
        throw error1;
      }
      const queue = "email_queue";
      channel.assertQueue(queue, {
        durable: false,
      });
      channel.sendToQueue(queue, Buffer.from(JSON.stringify(comment)));
      console.log("Email notification message sent to queue");
    });
    setTimeout(function () {
      connection.close();
    }, 500);
  });
}
