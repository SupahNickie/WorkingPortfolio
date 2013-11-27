class MessageMailer < ActionMailer::Base
  default from: "nicholascase@nicholascase.net"

  def send_message(message)
    @message = message

    mail to: "nicholascase@live.com", subject: "New Portfolio Message"
  end
end
