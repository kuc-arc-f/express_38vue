import * as React from 'react';

//
export default function Page() { 
    return (
    <html>
        <head>
            <title>welcome</title>
            {(process.env.NODE_ENV === "develop") ? (
                <link href="/static/main.css" rel="stylesheet" /> 
            ): (
                <link href="/public/static/main.css" rel="stylesheet" /> 
            )} 
        </head>
        <div id="app"></div>
        <a href="/">[ home ]</a>
        <a href="/about">[ about ]</a>
        <hr />
        <h1>hello</h1>
    </html>
    );
}
/*
<script type="module" src="/public/static/main.js"></script>
*/
