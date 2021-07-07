class CreateNcrCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :ncr_categories do |t|
      t.string :name
      t.integer :department_id

      t.timestamps
    end
  end
end
