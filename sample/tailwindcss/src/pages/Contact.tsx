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
        {(process.env.NODE_ENV === "develop") ? (
            <script type="module" src="/static/Contact.js"></script> 
        ): (
            <script type="module" src="/public/static/Contact.js"></script> 
        )} 
    </html>
    );
}
/*
*/
