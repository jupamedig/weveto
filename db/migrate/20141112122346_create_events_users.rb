class CreateEventsUsers < ActiveRecord::Migration
  def change
    create_table :events_users do |t|
      t.string :veto_turn, default: false

      t.references :events
      t.references :users

      t.timestamps
    end
  end
end
