<aside class="left-sidebar">
<ul class="side-nav">
<li><label>Recent Post</label></li>
	{% for post in site.posts %}
      <li class="{% if post.previewmode == "true" %} previewmode {% endif %}">
        <a href="{{ post.url }}">{{ post.title }}</a>
      </li>
  {% endfor %}
</ul>
</aside>
