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
        <div id="app"></div>
        {(process.env.NODE_ENV === "develop") ? (
            <script type="module" src="/static/Home.js"></script> 
        ): (
            <script type="module" src="/public/static/Home.js"></script> 
        )} 
    </html>
    );
}
/*
<a href="/">[ home ]</a>
<a href="/about">[ about ]</a>
<hr />
<h1>hello</h1>
<script type="module" src="/public/static/main.js"></script>
*/
