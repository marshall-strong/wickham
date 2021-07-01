class CreateNcrs < ActiveRecord::Migration[6.1]
  def change
    create_table :ncrs do |t|
      t.string :name

      t.timestamps
    end
  end
end
