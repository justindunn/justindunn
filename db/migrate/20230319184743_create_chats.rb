class CreateChats < ActiveRecord::Migration[7.0]
  def change
    create_table :chats do |t|
      t.references :user
      t.text :message
      t.text :response
      
      t.timestamps
    end
  end
end
