class CreateNcrItems < ActiveRecord::Migration[6.1]
  def change
    create_table :ncr_items do |t|
      t.integer :category_id
      t.string :item_name
      t.boolean :is_active_at_pos
      t.boolean :is_active_online
      t.string :description
      t.float :sales_price

      t.timestamps
    end
  end
end
