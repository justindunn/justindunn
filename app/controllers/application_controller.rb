class ApplicationController < ActionController::Base

	before_action :session_chats

	def guest_id
		return if user_signed_in?
		cookies['jdmechat'.to_sym]
	end

	def session_chats
		@session_chats = []

		if user_signed_in?
			@chats = current_user.chats
			@session_chats = @chats.map(&:id)
		else
			if guest_id.blank?
				cookies['jdmechat'.to_sym] ||= rand(Time.now.to_i)
			elsif !cookies["#{guest_id}_chat".to_sym].nil?
				@session_chats = cookies["#{guest_id}_chat".to_sym].split(",")
				@chats = Chat.where(id: @session_chats)
			end
		end
	end

end
