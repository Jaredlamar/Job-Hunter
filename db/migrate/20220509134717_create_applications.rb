class CreateApplications < ActiveRecord::Migration[6.1]
  def change
    create_table :applications do |t|
      t.string :user_id
      t.string :job_id

      t.timestamps
    end
  end
end
