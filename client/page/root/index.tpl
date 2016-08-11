<!DOCTYPE html>
{% html framework="home:static/js/mod.js" %}
    {% head %}
        <title>Redux TodoMVC example</title>
    {% endhead %}
    {%body%}
        <div class="todoapp" id="root">{{ssr|raw}}</div>
    {% script %}
        window.__PRELOADED_STATE__ = {{initialState|raw}};
        require('./client.js');
    {% endscript %}
    {% endbody %}
{% endhtml %}
