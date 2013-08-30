module ApplicationHelper
	def link_to_active_class(name, active_class_names, options = {}, html_options = {}, &block)
	  html_options[:class] = html_options[:class].to_s + active_class_names if current_page?(options.to_s)
	  link_to name, options, html_options, &block
	end
	# helpers
	def current_page_class(root)
	  return :class => "current_page_root" if current_page?(root_path)
	  return {}
	end
end

