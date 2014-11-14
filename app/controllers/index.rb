get '/' do
  erb :index
end

get '/options' do
  @event = Event.find(params[:event_id])
  erb :add_options
end

get '/veto_options' do
  erb :veto
end

post '/events' do
  content_type :json

  event = Event.new()
  if event.save
    event.to_json
  end
end

post '/users' do
  content_type :json

  id = (params[:id]).to_i
  event = Event.find(id)
  user = event.users.new(name: params[:name])
  if user.save
    user.to_json
  end
end

delete '/users' do
  user = User.find(params[:id])
  user.destroy
end

get '/veto' do
  'you did it'
end

delete '/movie' do
  'remove that ish'
end