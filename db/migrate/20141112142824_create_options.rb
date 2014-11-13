class CreateOptions < ActiveRecord::Migration
  def change
    create_table :options do |t|
      t.references :user
      t.string :name

      t.timestamps
    end
  end
end
