require 'camping'
Camping.goes :BackboneTut

module BackboneTut
  set :views, File.dirname(__FILE__) + '/views'
end

module BackboneTut::Models;  class Donut < Base; end; end

module BackboneTut::Controllers
  class Index < R '/'
    def get 
      @t = Time.now
      render 'index.html'
    end
  end

  class ModelView < R '/js/model_view/all.js'
    def get 
      @headers['Content-Type'] = 'text/plain'
      render '/js/model_view/all.js', :layout => false
    end
  end

  class BoardJs < R '/js/board/board.js'
    def get
      @headers['Content-Type'] = 'text/plain'
      render '/js/board/board.js', :layout => false
    end
  end

  class Donuts < R '/donuts'
    def get
      @headers['Content-Type'] = "application/json"
      render 'donuts.json', :layout => false
    end
  end

end

module BackboneTut::Views
  def layout
    html do
      head do
        title { "Backbone Tut" }
      end
      body { self << yield }
    end
  end

end
