json.array!(@projects) do |project|
  json.extract! project, :title, :technologies_used, :body
  json.url project_url(project, format: :json)
end
