<aside class="left-sidebar">
<ul class="side-nav">
<li><label>Recent Post</label></li>
	{% for post in site.posts %}
    {% if post.previewmode != "true" %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>
</aside>
