class Chat < ApplicationRecord
  belongs_to :user, optional: true

  # after_save :send_bot_message

  def send_ai_message
    client = OpenAI::Client.new
    bot = client.chat(
    parameters: {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }]
    })

    raise bot['error']['message'] unless bot.code == 200
    bot_response = JSON.parse(bot.body)
    update(response: bot_response.dig("choices", 0, "content"))
  end

  def self.send_bot_message(message)
    begin
      ChatgptService.call(message)
    rescue => e
      e
    end
  end

end
