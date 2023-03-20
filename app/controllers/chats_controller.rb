class ChatsController < ApplicationController

  def index
    @chat = Chat.new
  end

  def new
    @chat = Chat.new
  end

  def create
    response = Chat.send_bot_message(chat_params[:message])

    if user_signed_in?
      @chat = current_user.chats.create(chat_params.merge(response: response))
    elsif chat_params[:message]
      @chat = Chat.create(chat_params.merge(response: response))
    end

    cookies["#{guest_id}_chat".to_sym] = ([@session_chats, @chat.id]).join(',')

    respond_to do |format|
      format.html { redirect_to chats_path }
      format.js
    end
  end

  protected

  def chat_params
    params.require(:chat).permit(:message)
  end

end