get '/' do
  erb :index
end

get '/add_options' do
  erb :add_options
end

get '/veto_options' do
  erb :veto
end

post '/occasion' do
  content_type :json

  event = Event.new(params)
  if event.save
    event.to_json
  end
end

post '/users' do
  content_type :json

  id = (params[:id]).to_i
  event = Event.find(id)
  user = User.new(name: params[:name])
  if user.save
    event.users << user
    user.to_json
  end
end


