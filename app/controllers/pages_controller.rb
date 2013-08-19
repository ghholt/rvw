class PagesController < ApplicationController
	def blank
		render layout: false
	end
end
