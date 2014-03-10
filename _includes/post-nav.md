<aside class="left-sidebar">
<ul class="side-nav">
<li><label>Recent Post</label></li>
	{% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
</aside>