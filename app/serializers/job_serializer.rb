class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :salary, :description, :link, :location, :logo, :company
end
