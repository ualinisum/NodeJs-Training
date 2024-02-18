import * as amqp from "amqplib/callback_api";
import { sendEmailNotification } from "./sender";
import { BlogComment } from "./producer";

export function consumeEmail(): void {
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
      console.log("Waiting for messages in email queue");
      channel.consume(
        queue,
        function (msg) {
          if (msg) {
            const comment: BlogComment = JSON.parse(msg.content.toString());
            console.log(
              `Sending email notification for comment: ${JSON.stringify(
                comment
              )}`
            );
            sendEmailNotification(comment);
            console.log("Email notification sent for comment: ", comment);
            channel.ack(msg);
          }
        },
        {
          noAck: false,
        }
      );
    });
  });
}
