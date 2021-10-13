#blah
class V1::GreetingsController < ApplicationController
  def index
    render json: { :greeting => 
    [
    { id: 13,
      message: "Hello World" 
    }
    ]}.to_json
  end
end
