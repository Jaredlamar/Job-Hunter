class ApplicationSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :job_id
end
