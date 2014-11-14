class CreateOptions < ActiveRecord::Migration
  def change
    create_table :options do |t|
      t.references :event
      t.string :name

      t.timestamps
    end
  end
end
