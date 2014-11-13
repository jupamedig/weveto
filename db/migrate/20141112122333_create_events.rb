class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :occasion

      t.timestamps
    end
  end
end
