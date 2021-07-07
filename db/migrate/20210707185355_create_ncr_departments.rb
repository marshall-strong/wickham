class CreateNcrDepartments < ActiveRecord::Migration[6.1]
  def change
    create_table :ncr_departments do |t|
      t.string :name

      t.timestamps
    end
  end
end
