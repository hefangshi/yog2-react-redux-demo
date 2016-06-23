<!DOCTYPE html>
{% html framework="home:static/js/mod.js" %}
    {% head %}
        <title>Redux TodoMVC example</title>
    {% endhead %}
    {%body%}
        <div class="todoapp" id="root">
        </div>
    {% script %}
        require('./index.js');
    {% endscript %}
    {% endbody %}
{% endhtml %}
