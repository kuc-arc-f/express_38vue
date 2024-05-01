import * as React from 'react';

//
export default function Page() { 
    return (
    <html>
        <head>
            <title>welcome</title>
            {(process.env.NODE_ENV === "develop") ? (
                <link href="/static/style.css" rel="stylesheet" /> 
            ): (
                <link href="/public/static/style.css" rel="stylesheet" /> 
            )} 
        </head>
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
<script type="module" src="/public/static/main.js"></script>
*/
