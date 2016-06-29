<!DOCTYPE html>
{% html framework="home:static/js/mod.js" %}
    {% head %}
        <title>Redux TodoMVC example</title>
    {% endhead %}
    {%body%}
        <div class="todoapp" id="root">{{ssr|raw}}</div>
    {% script %}
        window.__PRELOADED_STATE__ = {{initState|raw}};
        var reactDOM = require('react-dom');
        reactDOM.render(
            require('./index.js').default(window.__PRELOADED_STATE__), 
            document.getElementById('root')
        );
    {% endscript %}
    {% endbody %}
{% endhtml %}
